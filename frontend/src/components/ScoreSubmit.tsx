import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  addDoc, collection, serverTimestamp,
  getDocs, writeBatch, doc
} from "firebase/firestore";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { db, auth } from "../lib/firebase";
import "../styles/submit-score.css";

type Props = { path?: string };

export default function ScoreSubmit({ path = "racing/event-2025/scores" }: Props) {
  const [name, setName] = useState(() => localStorage.getItem("kultura_name") || "");
  const [timeText, setTimeText] = useState("");
  const [status, setStatus] = useState<"idle" | "auth" | "saving" | "ok" | "err" | "deleting">("idle");
  const [msg, setMsg] = useState("");

  /* ───────── Chronometer state ───────── */
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);           // ms
  const rafRef = useRef<number | null>(null);
  const startAtRef = useRef<number | null>(null);      // perf.now() baseline

  const fmt = useCallback((ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const ms3 = Math.floor(ms % 1000);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(ms3).padStart(3, "0")}`;
  }, []);

  const loop = useCallback((t: number) => {
    if (startAtRef.current == null) return;
    setElapsed(Math.max(0, Math.round(t - startAtRef.current)));
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  function start() {
    if (running) return;
    setRunning(true);
    // resume from previous elapsed
    startAtRef.current = performance.now() - elapsed;
    rafRef.current = requestAnimationFrame(loop);
  }

  function stop() {
    if (!running) return;
    setRunning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startAtRef.current = null;
    // autofill the input with normalized value
    setTimeText(fmt(elapsed));
  }

  function clearChrono() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startAtRef.current = null;
    setRunning(false);
    setElapsed(0);
    setTimeText("");
  }

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);
  /* ───────── /Chronometer ───────── */

  // auth (anonymous)
  useEffect(() => {
    setStatus("auth");
    const off = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        try { await signInAnonymously(auth); setStatus("idle"); }
        catch { setStatus("err"); setMsg("Auth failed. Enable Anonymous sign-in in Firebase Console."); }
      } else { setStatus("idle"); }
    });
    return () => off();
  }, []);

  // parse manual input (also used by submit when chrono not used)
  function parseMs(t: string): number {
    const clean = t.trim().replace(/^"+|"+$/g, "");
    const m = clean.match(/^((\d+):)?(\d{1,2})(?:\.(\d{1,3}))?$/);
    if (!m) throw new Error("Use MM:SS.mmm (e.g., 01:12.345)");
    const min = Number(m[2] ?? 0);
    const sec = Number(m[3]);
    let ms = Number(m[4] ?? "0");
    ms = Math.floor(ms * Math.pow(10, 3 - String(ms).length));
    if (sec >= 60) throw new Error("Seconds must be 0–59");
    return (min * 60 + sec) * 1000 + ms;
  }

  const colRef = useMemo(() => {
    const segs = path.split("/").filter(Boolean);
    // @ts-ignore — Firestore variadic path segments
    return collection(db, ...segs);
  }, [path]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !timeText.trim()) { setStatus("err"); setMsg("Please fill both fields."); return; }
    if (running) { setStatus("err"); setMsg("Stop the chronometer before submitting."); return; }
    try {
      setStatus("saving");
      const timeMs = parseMs(timeText);
      await addDoc(colRef, {
        name: name.trim(),
        timeText: fmt(timeMs),
        timeMs,
        createdAt: serverTimestamp(),
      });
      localStorage.setItem("kultura_name", name.trim());
      setStatus("ok"); setMsg("Saved!");
      setTimeText("");
      setElapsed(0);
    } catch (e: any) {
      setStatus("err"); setMsg(e?.message || "Failed to save.");
    } finally {
      setTimeout(() => setStatus("idle"), 1200);
    }
  }

  // delete-all (batched)
  async function deleteAll() {
    if (!window.confirm("Are you sure you want to DELETE ALL scores in this collection? This cannot be undone.")) {
      return;
    }
    try {
      setStatus("deleting"); setMsg("Deleting…");
      const snap = await getDocs(colRef);
      if (snap.empty) { setStatus("ok"); setMsg("Nothing to delete."); return; }
      const docs = snap.docs;
      for (let i = 0; i < docs.length; i += 500) {
        const batch = writeBatch(db);
        docs.slice(i, i + 500).forEach(d => batch.delete(doc(db, d.ref.path)));
        await batch.commit();
      }
      setStatus("ok"); setMsg(`Deleted ${snap.size} entr${snap.size === 1 ? "y" : "ies"}.`);
    } catch (e: any) {
      setStatus("err"); setMsg(e?.message || "Failed to delete.");
    } finally {
      setTimeout(() => setStatus("idle"), 1500);
    }
  }

  const disabled = status === "auth" || status === "saving" || status === "deleting";

  return (
    <section className="ss-wrap">
      <div className="ss-card">
        <h2 className="ss-title">Submit Score</h2>

        {/* Chronometer */}
        <div className="ss-chrono">
          <div className="ss-time" aria-live="polite">{fmt(elapsed)}</div>
          <div className="ss-chrono-actions">
            {!running ? (
              <button type="button" onClick={start} className="ss-btn">Start</button>
            ) : (
              <button type="button" onClick={stop} className="ss-btn ss-btn-warn">Stop</button>
            )}
            <button type="button" onClick={clearChrono} className="ss-btn ss-btn-ghost">Clear</button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="ss-form">
          <div className="ss-field">
            <label htmlFor="ss-name" className="ss-label">Name</label>
            <input
              id="ss-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Max"
              className="ss-input"
              maxLength={40}
              required
            />
          </div>

          <div className="ss-field">
            <label htmlFor="ss-time" className="ss-label">
              Time <span className="ss-muted">(MM:SS.mmm)</span>
            </label>
            <input
              id="ss-time"
              value={timeText}
              onChange={(e) => setTimeText(e.target.value)}
              placeholder="01:12.345"
              inputMode="numeric"
              className="ss-input"
              required
            />
            <p className="ss-help">
              Tip: press <b>Stop</b> to auto-fill this field with the measured time.
            </p>
          </div>

          <div className="ss-actions">
            <button type="submit" disabled={disabled || running} className="ss-btn">
              {status === "saving" ? "Saving…" : "Submit"}
            </button>
            <button type="button" onClick={deleteAll} disabled={disabled} className="ss-btn ss-btn-danger">
              {status === "deleting" ? "Deleting…" : "Delete all entries"}
            </button>
          </div>

          <div className="ss-status" aria-live="polite">
            {status === "ok" && <p className="ss-ok">Saved!</p>}
            {status === "err" && <p className="ss-err">{msg}</p>}
            {status === "auth" && <p className="ss-auth">Connecting…</p>}
            {status === "deleting" && <p className="ss-auth">{msg}</p>}
            {status === "idle" && <p className="ss-muted">Saved to: <code>{path}</code></p>}
          </div>
        </form>
      </div>
    </section>
  );
}