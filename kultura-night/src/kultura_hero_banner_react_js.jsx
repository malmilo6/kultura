import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, Car } from "lucide-react";

/**
 * Kultura Hero Banner (React + JS + Tailwind + Framer Motion)
 *
 * Features:
 *  - Event title with date & location
 *  - Live countdown to event start ("Happening now" / "Ended" states handled)
 *  - Primary & secondary CTAs (Buy Ticket / Register Vehicle)
 *  - Accessible structure & focus styles
 *  - Responsive layout (desktop & mobile)
 *
 * Usage:
 *  <HeroBanner
 *    title="Moldova Auto Fest — KULTURA Night"
 *    dateLabel="22–23 November"
 *    city="Chișinău"
 *    venue="Toro Center"
 *    address="Strada Pantelimon Halippa 6"
 *    eventStartISO="2025-11-22T10:00:00+02:00"
 *    eventEndISO="2025-11-23T20:00:00+02:00"
 *    primaryCta={{ label: "Buy Ticket", href: "#tickets" }}
 *    secondaryCta={{ label: "Register Vehicle", href: "#register" }}
 *    bgSrc={null}
 *  />
 */
export default function HeroBanner({
  title = "Moldova Auto Fest — KULTURA Night",
  dateLabel = "22–23 November",
  city = "Chișinău",
  venue = "Toro Center",
  address = "Strada Pantelimon Halippa 6",
  eventStartISO = "2025-11-22T10:00:00+02:00",
  eventEndISO = "2025-11-23T20:00:00+02:00",
  primaryCta = { label: "Buy Ticket", href: "https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night" },
  secondaryCta = { label: "Register Vehicle", href: "#register" },
  bgSrc = null,
}) {
  const eventStart = useMemo(() => new Date(eventStartISO), [eventStartISO]);
  const eventEnd = useMemo(() => new Date(eventEndISO), [eventEndISO]);

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const state = useMemo(() => {
    if (now < eventStart) return "upcoming";
    if (now >= eventStart && now <= eventEnd) return "live";
    return "ended";
  }, [now, eventStart, eventEnd]);

  const timeLeft = useMemo(() => {
    const target = eventStart;
    const delta = Math.max(0, target - now);
    const s = Math.floor(delta / 1000);
    const days = Math.floor(s / 86400);
    const hours = Math.floor((s % 86400) / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;
    return { days, hours, minutes, seconds };
  }, [now, eventStart]);

  const bgStyle = bgSrc
    ? { backgroundImage: `url(${bgSrc})` }
    : undefined;

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={bgStyle}
      >
        {/* Image layer (if provided) */}
        {bgSrc && (
          <div className="absolute inset-0 bg-black/60" />
        )}
        {/* Gradient + subtle pattern fallback */}
        {!bgSrc && (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-slate-900 to-black" />
        )}
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
              <span>
                {dateLabel} · {city}
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base/7 text-white/80 sm:text-lg/8">
              Celebrate performance, style, and community. Two days of cars,
              competitions, music, and culture under one roof.
            </p>

            {/* Meta: location */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>
                  <strong className="font-semibold">{venue}</strong>, {address}
                </span>
              </div>
            </div>

            {/* CTAs */}
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

            {/* Countdown / Status */}
            <div className="mt-6" aria-live="polite">
              {state === "upcoming" && (
                <div className="flex flex-wrap gap-3 text-white/90">
                  <TimeChip label="Days" value={timeLeft.days} />
                  <TimeChip label="Hours" value={timeLeft.hours} />
                  <TimeChip label="Minutes" value={timeLeft.minutes} />
                  <TimeChip label="Seconds" value={timeLeft.seconds} />
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

          {/* Right side: decorative card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-first h-56 w-full rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur sm:h-72 lg:order-none lg:h-full"
          >
            {/* You can replace this with a photo, montage, or sponsor carousel */}
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

function TimeChip({ label, value }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 ring-1 ring-white/15">
      <span className="tabular-nums text-lg font-bold text-white">{v}</span>
      <span className="text-xs uppercase tracking-wide text-white/70">{label}</span>
    </div>
  );
}


// ==========================
// src/components/SectionHeading.tsx
// ==========================
import React from "react";
import { Info } from "lucide-react";

export function SectionHeading({
  id,
  title,
  eyebrow,
  description,
  icon,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  icon?: React.ReactNode;
}) {
  return (
    <header id={id} className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">
        {icon ?? <Info className="h-3.5 w-3.5" aria-hidden />}
        <span>{eyebrow ?? "Section"}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-white/80">{description}</p>
      )}
    </header>
  );
}

// ==========================
// src/components/AboutSection.tsx
// ==========================
import React from "react";
import { SectionHeading } from "./SectionHeading";

export default function AboutSection({
  text =
    "Celebrate performance, style, and community. Two days of cars, competitions, music, and culture under one roof.",
  highlights = [
    "Drift & Sound competitions",
    "JDM & Euro car showcases",
    "Live DJ sets & food court",
  ],
}: {
  text?: string;
  highlights?: string[];
}) {
  return (
    <section aria-labelledby="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      <SectionHeading id="about" title="About" eyebrow="Overview" description={text} />

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {highlights.map((h) => (
          <li key={h} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            • {h}
          </li>
        ))}
      </ul>
    </section>
  );
}

// ==========================
// src/components/LocationSection.tsx
// ==========================
import React from "react";
import { MapPin, Map } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export default function LocationSection({
  city = "Chișinău",
  venue = "Toro Center",
  address = "Strada Pantelimon Halippa 6",
  mapUrl = "https://maps.google.com",
}: {
  city?: string;
  venue?: string;
  address?: string;
  mapUrl?: string;
}) {
  return (
    <section aria-labelledby="location" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      <SectionHeading
        id="location"
        title="Location"
        eyebrow="Where to find us"
        description={`${city} — ${venue}, ${address}`}
        icon={<MapPin className="h-3.5 w-3.5" aria-hidden />}
      />

      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
      >
        <Map className="h-5 w-5" aria-hidden />
        Open on Google Maps
      </a>
    </section>
  );
}

// ==========================
// src/components/ProgramMapSection.tsx
// ==========================
import React from "react";
import { FileText, QrCode, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export default function ProgramMapSection({
  programPdfUrl = "/program.pdf",
  mapUrl = "#",
  qrSrc,
  notes = "Open the interactive map or download the program (PDF).",
}: {
  programPdfUrl?: string;
  mapUrl?: string;
  qrSrc?: string; // optional QR image path
  notes?: string;
}) {
  return (
    <section aria-labelledby="program" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      <SectionHeading id="program" title="Program & Map" eyebrow="Plan your visit" description={notes} />

      <div className="mt-6 grid gap-6 sm:grid-cols-[1fr,auto] sm:items-start">
        <div className="flex flex-wrap gap-3">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <ExternalLink className="h-5 w-5" aria-hidden />
            Open interactive map
          </a>
          <a
            href={programPdfUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <FileText className="h-5 w-5" aria-hidden />
            Download program (PDF)
          </a>
        </div>

        {qrSrc && (
          <figure className="justify-self-start sm:justify-self-end">
            <img
              src={qrSrc}
              alt="QR code to open the program & map"
              className="h-40 w-40 rounded-2xl bg-white p-2 shadow ring-1 ring-black/10"
            />
            <figcaption className="mt-2 text-center text-xs text-white/70">Scan on-site</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

// ==========================
// src/components/ContactSection.tsx
// ==========================
import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export type ContactLink = {
  type: "phone" | "email" | "link";
  label: string;         // e.g., Participants / Sponsors / Transnistria
  value: string;         // e.g., +373 69 000 000 or mail@example.com
  href?: string;         // tel:, mailto:, or external link
};

export default function ContactSection({
  contacts = [
    // Replace placeholders with the real data from your PDF when ready
    { type: "phone", label: "Participants", value: "+373 69 000 000", href: "tel:+37369000000" },
    { type: "phone", label: "Sponsors", value: "+373 68 000 000", href: "tel:+37368000000" },
    { type: "phone", label: "Transnistria", value: "+373 77 000 000", href: "tel:+37377000000" },
    { type: "email", label: "Email", value: "autoposterprintmd@gmail.com", href: "mailto:autoposterprintmd@gmail.com" },
  ],
}: {
  contacts?: ContactLink[];
}) {
  return (
    <section aria-labelledby="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      <SectionHeading id="contact" title="Contact us" eyebrow="Get in touch" description="Have questions about participation, tickets, or partnerships? Reach out and we’ll respond ASAP." />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact cards */}
        <div className="grid gap-4">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.href}
              className="group flex items-center justify-between rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div>
                <div className="text-sm text-white/70">{c.label}</div>
                <div className="text-lg font-semibold text-white">{c.value}</div>
              </div>
              {c.type === "email" ? (
                <Mail className="h-5 w-5 text-white/70 group-hover:text-white" aria-hidden />
              ) : (
                <Phone className="h-5 w-5 text-white/70 group-hover:text-white" aria-hidden />
              )}
            </a>
          ))}
        </div>

        {/* Simple contact form (client-side only) */}
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const form = new FormData(e.currentTarget);
      // TODO: replace with your API endpoint
      console.log("Contact form payload", Object.fromEntries(form.entries()));
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm text-white/80">Full name</label>
        <input id="name" name="name" required className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Your name" />
      </div>
      <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm text-white/80">Email</label>
          <input id="email" name="email" type="email" required className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-300" placeholder="you@example.com" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm text-white/80">Phone (optional)</label>
          <input id="phone" name="phone" inputMode="tel" className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-300" placeholder="+373 6x xxx xxx" />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm text-white/80">Message</label>
        <textarea id="message" name="message" rows={4} required className="rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-300" placeholder="How can we help?" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:opacity-60"
      >
        <Send className="h-5 w-5" aria-hidden />
        {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send message"}
      </button>

      <p className="text-xs text-white/60">
        By submitting, you agree to our Privacy Policy.
      </p>
    </form>
  );
}

// ==========================
// USAGE: Update src/App.tsx to include the new sections
// ==========================
// import HeroBanner from "./components/HeroBanner";
// import AboutSection from "./components/AboutSection";
// import LocationSection from "./components/LocationSection";
// import ProgramMapSection from "./components/ProgramMapSection";
// import ContactSection from "./components/ContactSection";
//
// function App() {
//   return (
//     <main>
//       <HeroBanner
//         title="Moldova Auto Fest — KULTURA Night"
//         dateLabel="22–23 November"
//         city="Chișinău"
//         venue="Toro Center"
//         address="Strada Pantelimon Halippa 6"
//         eventStartISO="2025-11-22T10:00:00+02:00"
//         eventEndISO="2025-11-23T20:00:00+02:00"
//         primaryCta={{ label: "Buy Ticket", href: "#tickets" }}
//         secondaryCta={{ label: "Register Vehicle", href: "#register" }}
//       />
//
//       <AboutSection />
//       <LocationSection mapUrl="https://www.google.com/maps/place/Strada+Pantelimon+Halippa+6" />
//       <ProgramMapSection
//         programPdfUrl="/program.pdf" // place your program PDF into public/program.pdf
//         mapUrl="https://your-interactive-map.example.com"
//         // qrSrc="/qr.png" // optional QR in public/qr.png
//       />
//       <ContactSection />
//     </main>
//   );
// }
// export default App;


// ==========================
// src/components/HeaderNav.tsx (desktop-first, simple)
// ==========================
import React from "react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/80 to-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white">
            <img src="/kultura-logo.svg" alt="Kultura" className="h-8 w-auto" />
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#" className="font-medium text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#program" className="hover:text-white">Program & Map</a>
            <a href="#contact" className="hover:text-white">Contacts</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.5)] transition hover:from-purple-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              Register
            </a>
            <a
              href="https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-md transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              Buy Ticket
            </a>
            <a href="#" className="hidden sm:inline text-white/80 hover:text-white">EN</a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ==========================
// src/components/HeroBannerKultura.tsx (visual match version)
// ==========================
import React from "react";

export type CTA = {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string; // e.g., "noreferrer noopener"
};

export default function HeroBannerKultura({
  bgSrc = "/hero.jpg", // put your photo in public/hero.jpg
  markSrc = "/night-kultura.svg", // big white "Night Kultura" mark (SVG/PNG)
  dateLine = "22–23 November, Chisinau, Toro Center",
  tagline =
    "Welcome to an unforgettable underground experience — a Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture.",
  primary = { label: "Register", href: "#register" },
  secondary = { label: "Buy Ticket", href: "https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night" },
}: {
  bgSrc?: string;
  markSrc?: string | null;
  dateLine?: string;
  tagline?: string;
  primary?: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={bgSrc} alt="Event background" className="h-full w-full object-cover" />
        {/* Dark gradient to ensure left-side legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 sm:py-24 lg:py-28">
          {/* Date line */}
          <p className="text-sm font-medium text-white/90">{dateLine}</p>

          {/* Big mark / title */}
          {markSrc ? (
            <img
              src={markSrc}
              alt="Night Kultura"
              className="mt-6 w-[520px] max-w-full select-none"
              draggable={false}
            />
          ) : (
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Moldova Auto Fest — KULTURA Night
            </h1>
          )}

          {/* Tagline */}
          <p className="mt-6 max-w-xl text-base/7 text-white/85 sm:text-lg/8">
            {tagline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={primary.href || "#register"}
              onClick={primary.onClick}
              target={primary.target}
              rel={primary.target === "_blank" ? (primary.rel ?? "noreferrer noopener") : primary.rel}
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_60px_rgba(124,58,237,0.55)] transition hover:from-purple-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              {primary.label}
            </a>
            <a
              href={secondary.href || "#tickets"}
              onClick={secondary.onClick}
              target={secondary.target}
              rel={secondary.target === "_blank" ? (secondary.rel ?? "noreferrer noopener") : secondary.rel}
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black shadow-md transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              {secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================
// USAGE (swap in the header + new hero for the look in the screenshot)
// ==========================
// import HeaderNav from "./components/HeaderNav";
// import HeroBannerKultura from "./components/HeroBannerKultura";
//
// function App() {
//   return (
//     <main>
//       <HeaderNav />
//       <HeroBannerKultura
//         bgSrc="/hero.jpg"                 // place image in public/hero.jpg
//         markSrc="/night-kultura.svg"      // place SVG/PNG in public/night-kultura.svg
//         dateLine="22–23 November, Chisinau, Toro Center"
//         tagline="Welcome to an unforgettable underground experience — a Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture."
//         primary={{ label: "Register", href: "#register" }}
//         secondary={{ label: "Buy Ticket", href: "https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night" }}
//       />
//
//       {/* Then the rest of sections you already have: */}
//       {/* <AboutSection /> */}
//       {/* <LocationSection /> */}
//       {/* <ProgramMapSection /> */}
//       {/* <ContactSection /> */}
//     </main>
//   );
// }
// export default App;


// ==========================
// src/components/AboutKultura.tsx
// ==========================
import React, { useEffect, useMemo, useState } from "react";
import { Instagram, Send } from "lucide-react";

export type AboutSlide = { src: string; title?: string; alt?: string };

export default function AboutKultura({
  description =
    "Kultura NIGHT Auto Festival — Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture. Hidden beneath the city, this vast parking space transforms into a neon-lit paradise where engines roar, lights flicker, and the scent of burnt rubber fills the air.",
  slides = [
    { src: "/about1.jpg", title: "Car Battles" },
    { src: "/about2.jpg", title: "VR Races" },
    { src: "/about3.jpg", title: "DJ Sets" },
    { src: "/about4.jpg", title: "Stance & Style" },
    { src: "/about5.jpg", title: "Sound Contest" },
    { src: "/about6.jpg", title: "Food Court" },
  ],
  telegramHref = "#",
  instagramHref = "#",
}: {
  description?: string;
  slides?: AboutSlide[];
  telegramHref?: string;
  instagramHref?: string;
}) {
  return (
    <section aria-labelledby="about-us" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      {/* Top row: Big title + socials and paragraph on the right */}
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {/* Left: ABOUT US with accent */}
        <div className="flex items-center gap-6">
          <h2 id="about-us" className="text-[48px] leading-none font-extrabold sm:text-[64px] lg:text-[88px] tracking-tight">
            <span className="mr-3">ABOUT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">US</span>
          </h2>

          {/* Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <a href={instagramHref} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={telegramHref} target="_blank" rel="noreferrer noopener" aria-label="Telegram" className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-[0_0_35px_rgba(124,58,237,0.55)]">
              <Send className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Right: paragraph */}
        <p className="text-center lg:text-right text-white/90 text-lg/8 max-w-2xl lg:ml-auto">
          {description}
        </p>
      </div>

      {/* Subheading */}
      <h3 className="mt-16 text-center text-2xl font-medium text-white/90">What awaits you</h3>

      {/* Carousel */}
      <AboutCarousel className="mt-8" slides={slides} />
    </section>
  );
}

// ==========================
// Carousel with desktop (3-per-page) and mobile (vertical 1-by-1) modes
// ==========================
export function AboutCarousel({
  slides,
  className = "",
}: {
  slides: AboutSlide[];
  className?: string;
}) {
  // --- media hook to switch layout ---
  const isMobile = useMedia("(max-width: 640px)");

  if (!slides || slides.length === 0) {
    return (
      <div className={`${className} rounded-3xl bg-white/5 p-8 text-center text-white/60`}>No slides yet</div>
    );
  }

  // --- MOBILE: vertical, 1 card per view ---
  if (isMobile) {
    const [index, setIndex] = useState(0);
    const last = slides.length - 1;
    const up = () => setIndex((i) => Math.max(0, i - 1));
    const down = () => setIndex((i) => Math.min(last, i + 1));
    const h = 320; // viewport height (px) for each card on mobile

    return (
      <div className={className}>
        <div className="relative">
          {/* Viewport */}
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ height: h }}>
            {/* Track */}
            <div
              className="transition-transform duration-500"
              style={{ transform: `translateY(-${index * h}px)` }}
            >
              {slides.map((s, i) => (
                <figure key={i} className="group relative h-[320px] overflow-hidden">
                  <img src={s.src} alt={s.alt || s.title || "About image"} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  {s.title && (
                    <figcaption className="absolute left-4 bottom-4 text-white text-xl font-semibold drop-shadow">
                      {s.title}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>

          {/* Controls + dots */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button onClick={up} disabled={index === 0} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 disabled:opacity-50">Up</button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`} />
              ))}
            </div>
            <button onClick={down} disabled={index === last} className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition hover:from-purple-500 hover:to-indigo-400 disabled:opacity-50">Down</button>
          </div>
        </div>
      </div>
    );
  }

  // --- DESKTOP & TABLET: 3 per page, step by 3 ---
  const PER_VIEW = 3;
  const pagesData: (AboutSlide | null)[][] = [];
  for (let i = 0; i < slides.length; i += PER_VIEW) {
    pagesData.push(slides.slice(i, i + PER_VIEW));
  }
  if (pagesData.length === 0) pagesData.push([]);
  while (pagesData[pagesData.length - 1].length < PER_VIEW) {
    pagesData[pagesData.length - 1].push(null);
  }

  const pages = pagesData.length;
  const [page, setPage] = useState(0);
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages - 1, p + 1));
  const pageWidth = 100 / pages;
  const trackTranslate = -(page * pageWidth);

  return (
    <div className={className}>
      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden rounded-3xl">
          {/* Track */}
          <div
            className="flex transition-transform duration-500"
            style={{ width: `${pages * 100}%`, transform: `translateX(${trackTranslate}%)` }}
          >
            {pagesData.map((group, i) => (
              <div key={i} className="shrink-0" style={{ width: `${pageWidth}%` }}>
                <div className="grid grid-cols-3 gap-6">
                  {group.map((s, idx) =>
                    s ? (
                      <figure key={idx} className="group relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10">
                        <img src={s.src} alt={s.alt || s.title || "About image"} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        {s.title && (
                          <figcaption className="absolute left-4 bottom-4 text-white text-xl font-semibold drop-shadow">{s.title}</figcaption>
                        )}
                      </figure>
                    ) : (
                      <div key={`ph-${idx}`} className="aspect-[16/10] rounded-3xl bg-white/5 ring-1 ring-white/10" />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={prev} disabled={page === 0} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 disabled:opacity-50">Prev</button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2.5 w-2.5 rounded-full ${i === page ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
          <button onClick={next} disabled={page === pages - 1} className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition hover:from-purple-500 hover:to-indigo-400 disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}

// Small hook to detect viewport changes
function useMedia(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

// ==========================
// USAGE in App.tsx (below Hero)
// ==========================
// import AboutKultura from "./components/AboutKultura";
// ...
// <AboutKultura
//   instagramHref="https://instagram.com/yourpage"
//   telegramHref="https://t.me/yourchannel"
//   slides={[
//     { src: "/about1.jpg", title: "Car Battles" },
//     { src: "/about2.jpg", title: "VR Races" },
//     { src: "/about3.jpg", title: "DJ Sets" },
//     { src: "/about4.jpg", title: "Stance & Style" },
//     { src: "/about5.jpg", title: "Sound Contest" },
//     { src: "/about6.jpg", title: "Food Court" },
//   ]}
// />

// ==========================
// src/components/ProgramMapKultura.tsx
// ==========================
import React from "react";

type Props = {
  title?: string;               // default renders as two lines: EVENT MAP& / PROGRAM
  description?: string;
  openHref?: string;            // link to interactive map or program page
  openLabel?: string;           // default: OPEN
  qrSrc?: string | null;        // path to QR image in /public
  qrAlt?: string;
};

export default function ProgramMapKultura({
  title,
  description =
    "Detailed guide that shows all key locations of the event — from main stages and competition zones to parking, food courts, and rest areas.",
  openHref = "#",
  openLabel = "OPEN",
  qrSrc = "/qr.png",
  qrAlt = "QR code for Program & Map",
}: Props) {
  return (
    <section id="program" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: Heading, text, CTA */}
        <div>
          <h2 className="font-extrabold tracking-tight leading-[0.9] text-[48px] sm:text-[72px] lg:text-[112px]">
            {title ? (
              <span className="block">{title}</span>
            ) : (
              <>
                <span className="block">EVENT MAP&amp;</span>
                <span className="block">PROGRAM</span>
              </>
            )}
          </h2>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={openHref}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-7 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold text-white shadow-[0_0_40px_rgba(124,58,237,0.55)] transition hover:from-purple-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              {openLabel}
            </a>
            <span className="text-white/90 tracking-wide uppercase text-sm sm:text-base">or use QR‑code!</span>
          </div>
        </div>

        {/* Right: QR card */}
        <div className="justify-self-center w-full max-w-md rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
          <div className="grid place-items-center rounded-2xl bg-ne