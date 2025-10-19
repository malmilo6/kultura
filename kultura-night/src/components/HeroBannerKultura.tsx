import React from "react";

export type CTA = {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
};

export default function HeroBannerKultura({
  markSrc = "/new_logo.svg", // big white "Night Kultura"
  dateLine = "22–23 November, Chisinau, Toro Center",
  tagline = "Welcome to an unforgettable underground experience — a Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture.",
  primary = { label: "Register", href: "https://forms.gle/h61XgeFLR9ETpTn59" },
  secondary = {
    label: "Buy Ticket",
    href: "https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night",
    target: "_blank",
    rel: "noreferrer noopener",
  },
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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src='/back.jpg'
          alt="Event background"
          className="
            h-full w-full object-cover
            object-[50%_75%] sm:object-[50%_60%]
          "
        />
        {/* stronger left gradient on mobile for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-8 sm:py-24 lg:py-28 flex min-h-[85svh] flex-col">
          {/* Date line (keep on mobile) */}
          <p className="text-base sm:text-sm font-medium text-white/90">{dateLine}</p>

          {/* Big mark / title */}
          {markSrc ? (
            <img
              src='/new_logo.svg'
              alt="Night Kultura"
              className="
                mt-6 select-none
                w-[85vw] max-w-[640px]
                sm:w-[520px] md:w-[640px]
              "
              draggable={false}
            />
          ) : (
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Moldova Auto Fest — KULTURA Night
            </h1>
          )}

          {/* Tagline — hidden on mobile per spec */}
          <p className="mt-6 max-w-xl text-base/7 text-white/85 sm:text-lg/8 hidden sm:block">
            {tagline}
          </p>

          {/* CTAs — full-width stacked on mobile, row on ≥sm */}
          <div className="mt-auto sm:mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={primary.href || "#register"}
              onClick={primary.onClick}
              target={primary.target}
              rel={primary.target === "_blank" ? (primary.rel ?? "noreferrer noopener") : primary.rel}
              className="
                w-full sm:w-auto
                rounded-full bg-gradient-to-r from-purple-600 to-indigo-500
                px-8 py-5 text-xl sm:text-lg font-semibold text-white
                shadow-[0_0_60px_rgba(124,58,237,0.55)]
                transition hover:from-purple-500 hover:to-indigo-400
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300
              "
            >
              {primary.label}
            </a>

            <a
              href={secondary.href || "#tickets"}
              onClick={secondary.onClick}
              target={secondary.target}
              rel={secondary.target === "_blank" ? (secondary.rel ?? "noreferrer noopener") : secondary.rel}
              className="
                w-full sm:w-auto
                rounded-full bg-white
                px-8 py-5 text-xl sm:text-lg font-semibold text-black
                shadow-md transition hover:bg-white/95
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
              "
            >
              {secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}