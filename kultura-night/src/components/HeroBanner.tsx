import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, Car } from "lucide-react";
type CTA = { label: string; href?: string; onClick?: () => void };

type Props = {
  title: string;
  dateLabel: string;
  city: string;
  venue: string;
  address: string;
  eventStartISO: string;
  eventEndISO: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  bgSrc?: string | null;
};

export default function HeroBanner({
  title,
  dateLabel,
  city,
  venue,
  address,
  eventStartISO,
  eventEndISO,
  primaryCta = { label: "Buy Ticket", href: "#tickets" },
  secondaryCta = { label: "Register Vehicle", href: "#register" },
  bgSrc = null,
}: Props) {
  const eventStart = useMemo(() => new Date(eventStartISO), [eventStartISO]);
  const eventEnd = useMemo(() => new Date(eventEndISO), [eventEndISO]);

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const state = useMemo<"upcoming" | "live" | "ended">(() => {
    if (now < eventStart) return "upcoming";
    if (now >= eventStart && now <= eventEnd) return "live";
    return "ended";
  }, [now, eventStart, eventEnd]);

  const { days, hours, minutes, seconds } = useMemo(() => {
    const delta = Math.max(0, eventStart.getTime() - now.getTime());
    const s = Math.floor(delta / 1000);
    return {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      minutes: Math.floor((s % 3600) / 60),
      seconds: s % 60,
    };
  }, [now, eventStart]);

  const bgStyle = bgSrc ? { backgroundImage: `url(${bgSrc})` } : undefined;

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={bgStyle}>
        {bgSrc ? <div className="absolute inset-0 bg-black/60" /> : null}
        {!bgSrc && <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-slate-900 to-black" />}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(255,255,255,0.08), transparent 60%), radial-gradient(ellipse at bottom, rgba(99,102,241,0.20), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 lg:py-28 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15 backdrop-blur">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              <span>{dateLabel} · {city}</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base/7 text-white/80 sm:text-lg/8">
              Celebrate performance, style, and community. Two days of cars,
              competitions, music, and culture under one roof.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                <span><strong className="font-semibold">{venue}</strong>, {address}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={primaryCta?.href || "#tickets"}
                onClick={primaryCta?.onClick}
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <Ticket className="h-5 w-5" aria-hidden />
                <span>{primaryCta?.label || "Buy Ticket"}</span>
              </a>

              <a
                href={secondaryCta?.href || "#register"}
                onClick={secondaryCta?.onClick}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <Car className="h-5 w-5" aria-hidden />
                <span>{secondaryCta?.label || "Register Vehicle"}</span>
              </a>
            </div>

            <div className="mt-6" aria-live="polite">
              {state === "upcoming" && (
                <div className="flex flex-wrap gap-3 text-white/90">
                  <TimeChip label="Days" value={days} />
                  <TimeChip label="Hours" value={hours} />
                  <TimeChip label="Minutes" value={minutes} />
                  <TimeChip label="Seconds" value={seconds} />
                </div>
              )}
              {state === "live" && (
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-200 ring-1 ring-emerald-400/30">
                  ● Happening now — See schedule and map
                </span>
              )}
              {state === "ended" && (
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90 ring-1 ring-white/15">
                  Event ended — Thanks for joining!
                </span>
              )}
            </div>
          </motion.div>

          {/* Right side placeholder card (swap with image/carousel if you want) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-first h-56 w-full rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur sm:h-72 lg:order-none lg:h-full"
          >
            <div className="flex h-full w-full items-center justify-center p-6 text-center text-white/70">
              <div>
                <p className="text-sm uppercase tracking-wider">Featured Highlights</p>
                <ul className="mt-3 space-y-2 text-base">
                  <li>• Drift & Sound competitions</li>
                  <li>• JDM & Euro car showcases</li>
                  <li>• Live DJ sets & food court</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimeChip({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 ring-1 ring-white/15">
      <span className="tabular-nums text-lg font-bold text-white">{v}</span>
      <span className="text-xs uppercase tracking-wide text-white/70">{label}</span>
    </div>
  );
}