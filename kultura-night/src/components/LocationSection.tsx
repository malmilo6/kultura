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