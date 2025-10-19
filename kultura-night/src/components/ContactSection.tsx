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