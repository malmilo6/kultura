import { useEffect, useState, useCallback } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  getDocs,
  Firestore,
} from "firebase/firestore";
import { db } from "../lib/firebase";

type Score = {
  id: string;
  name: string;
  timeMs: number;
  timeText?: string;
  // createdAt?: Timestamp; // optional tie-breaker if you add it
};

function formatMs(ms: number) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const ms3 = Math.floor(ms % 1000);
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(ms3).padStart(3,"0")}`;
}

// helper: build a collection ref from a slash path like "racing/event-2025/scores"
function colRefFromPath(fire: Firestore, path: string) {
  const segs = path.split("/").filter(Boolean);
  // @ts-ignore
  return collection(fire, ...segs);
}

export default function Scoreboard({
  path = "racing/event-2025/scores",
  top = 100,
}: { path?: string; top?: number }) {
  const [rows, setRows] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  // use the exact same query for realtime + manual refresh
  const buildQuery = useCallback(() => {
    // if you later add createdAt and the composite index, you can append:
    //   orderBy("createdAt", "asc")
    return query(
      colRefFromPath(db, path),
      orderBy("timeMs", "asc"),
      limit(top)
    );
  }, [path, top]);

  // realtime listener
  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      buildQuery(),
      (snap) => {
        // @ts-ignore
        const data = snap.docs.map(d => ({ id: d.id, ...(d.data() as Score) }));
        setRows(data);
        setLoading(false);
      },
      (err) => {
        console.error("onSnapshot error:", err);
        setLoading(false);
      }
    );
    return () => unsub();
  }, [buildQuery]);

  // manual refresh
  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const snap = await getDocs(buildQuery());
      // @ts-ignore
      const data = snap.docs.map(d => ({ id: d.id, ...(d.data() as Score) }));
      setRows(data);
    } catch (e) {
      console.error("refresh getDocs error:", e);
    } finally {
      setLoading(false);
    }
  }, [buildQuery]);

  // rows.sort((a, b) => a.timeMs - b.timeMs);
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight">Scoreboard</h2>
        <button
          onClick={refresh}
          disabled={loading}
          className="rounded-xl bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/15 hover:bg-white/15 disabled:opacity-50"
        >
          Refresh
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
        <table className="w-full border-collapse text-left">
          <thead className="bg-white/5 text-white/80">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className="odd:bg-white/5">
                <td className="px-4 py-3 font-semibold">{i + 1}</td>
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3 tabular-nums">{r.timeText ?? formatMs(r.timeMs)}</td>
              </tr>
            ))}
            {rows.length === 0 && !loading && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-white/60">
                  No entries yet
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-white/60">
                  Loading…
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-xs text-white/50">
        Realtime updates powered by Firestore.
      </p>
    </section>
  );
}