// ==========================
// src/components/ProgramMapSection.tsx
// ==========================
import { FileText, ExternalLink } from "lucide-react";
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
