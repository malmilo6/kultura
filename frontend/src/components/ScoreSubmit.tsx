import { useEffect, useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { db, auth } from "../lib/firebase";
import "../styles/submit-score.css";

type Props = { path?: string };

export default function ScoreSubmit({ path = "racing/event-2025/scores" }: Props) {
  const [name, setName] = useState(() => localStorage.getItem("kultura_name") || "");
  const [timeText, setTimeText] = useState("");
  const [status, setStatus] = useState<"idle" | "auth" | "saving" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setStatus("auth");
    const off = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        try {
          await signInAnonymously(auth);
          setStatus("idle");
        } catch {
          setStatus("err");
          setMsg("Auth failed. Enable Anonymous sign-in in Firebase Console.");
        }
      } else {
        setStatus("idle");
      }
    });
    return () => off();
  }, []);

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

  function fmt(ms: number) {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const ms3 = Math.floor(ms % 1000);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(ms3).padStart(3, "0")}`;
  }


  const colRef = useMemo(() => {
    const segs = path.split("/").filter(Boolean);
    // @ts-ignore
    return collection(db, ...segs);
  }, [path]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !timeText.trim()) {
      setStatus("err");
      setMsg("Please fill both fields.");
      return;
    }
    try {
      setStatus("saving");
      const timeMs = parseMs(timeText);
      const normalized = fmt(timeMs);

      await addDoc(colRef, {
        name: name.trim(),
        timeText: normalized,
        timeMs,
        createdAt: serverTimestamp(),
      });

      localStorage.setItem("kultura_name", name.trim());
      setStatus("ok");
      setMsg("Saved!");
      setTimeText("");
    } catch (e: any) {
      setStatus("err");
      setMsg(e?.message || "Failed to save.");
    } finally {
      setTimeout(() => setStatus("idle"), 1200);
    }
  }

  const disabled = status === "auth" || status === "saving";

  return (
    <section className="ss-wrap">
      <div className="ss-card">
        <h2 className="ss-title">Submit Score</h2>

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
              Examples: <code>01:12.345</code>, <code>1:05</code>, or <code>72.123</code>.
            </p>
          </div>

          <button type="submit" disabled={disabled} className="ss-btn">
            {status === "saving" ? "Saving…" : "Submit"}
          </button>

          <div className="ss-status">
            {status === "ok" && <p className="ss-ok">Saved!</p>}
            {status === "err" && <p className="ss-err">{msg}</p>}
            {status === "auth" && <p className="ss-auth">Connecting…</p>}
            {status === "idle" && (
              <p className="ss-muted">
                Saved to: <code>{path}</code>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}