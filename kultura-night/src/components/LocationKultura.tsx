// src/components/LocationKultura.tsx
import { MapPin } from "lucide-react";

type Props = {
  country?: string;
  city?: string;
  venue?: string;
  address?: string;
  bgSrc?: string;
  mapUrl?: string;
};

export default function LocationKultura({
  country = "Moldova",
  city = "Chișinău",
  venue = "Toro Center",
  address = "Strada Pantelimon Halippa 6",
  bgSrc = "/location.jpg",
  mapUrl,
}: Props) {
  const q = encodeURIComponent(`${venue}, ${address}, ${city}, ${country}`);
  const href = mapUrl || `https://www.google.com/maps/search/?api=1&query=${q}`;

  return (
    <section id="location" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 text-white">
      {/* Photo with overlaid title + text */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-white/10">
        <img
          src={bgSrc}
          alt={`${venue}, ${address}, ${city}`}
          className="
            w-full object-cover
            h-[360px] sm:h-[480px] lg:h-[680px]
            object-[50%_55%] sm:object-[50%_45%] lg:object-[50%_40%]
          "
        />

        {/* Top gradient for legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 sm:h-56 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

        {/* Text overlay */}
        <div className="absolute inset-x-3 sm:inset-x-6 top-3 sm:top-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-black font-extrabold tracking-tight leading-[0.95] text-[36px] sm:text-[56px] lg:text-[80px] drop-shadow">
              LOCATION
            </h2>

            <p className="mt-3 sm:mt-4 text-black/90 text-sm sm:text-lg leading-relaxed backdrop-blur-[2px] bg-black/0 rounded-xl">
              The auto festival takes place in{" "}
              <a
                className="text-purple-500 hover:text-purple-200 underline-offset-4 hover:underline"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {country}
              </a>
              , in the city of{" "}
              <a
                className="text-purple-500 hover:text-purple-200 underline-offset-4 hover:underline"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {city}
              </a>
              , at the{" "}
              <a
                className="text-purple-500 hover:text-purple-200 underline-offset-4 hover:underline"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {venue}
              </a>{" "}
              on{" "}
              <a
                className="text-purple-500 hover:text-purple-200 underline-offset-4 hover:underline"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {address}
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom fade for CTA legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/75 to-transparent" />

        {/* Centered pill CTA */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-4 sm:bottom-6
            inline-flex items-center gap-2 sm:gap-3
            rounded-full bg-gradient-to-r from-purple-600 to-indigo-500
            px-4 py-2.5 sm:px-6 sm:py-3
            text-white font-semibold
            shadow-[0_0_28px_rgba(124,58,237,0.55)]
            transition hover:from-purple-800 hover:to-indigo-400
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300
          "
        >
          <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <span className="text-sm sm:text-base">View in Google Maps</span>
        </a>
      </div>
    </section>
  );
}