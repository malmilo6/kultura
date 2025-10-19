// ==========================
// src/components/AboutSection.tsx
// ==========================
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