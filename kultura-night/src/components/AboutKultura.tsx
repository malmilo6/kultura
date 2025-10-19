// ==========================
// src/components/AboutKultura.tsx
// ==========================
import { useEffect, useState } from "react";
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
    <section
      id="about"
      aria-labelledby="about-us"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white"
    >
      {/* Title + (desktop socials) + text */}
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {/* Left: ABOUT US with accent */}
        <div className="flex items-center gap-6">
          <h2
            id="about-us"
            className="text-[48px] leading-none font-extrabold sm:text-[64px] lg:text-[88px] tracking-tight"
          >
            <span className="mr-3">ABOUT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              US
            </span>
          </h2>

          {/* Socials (desktop/tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={telegramHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-[0_0_35px_rgba(124,58,237,0.55)]"
            >
              <Send className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Right: paragraph (left on mobile, right on lg) */}
        <div>
          <p className="text-left lg:text-right text-white/90 text-lg/8 max-w-2xl lg:ml-auto">
            {description}
          </p>

          {/* Socials (mobile-only at the end) */}
          <div className="mt-6 flex items-center gap-3 sm:hidden">
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-14 w-14 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href={telegramHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-[0_0_35px_rgba(124,58,237,0.55)]"
            >
              <Send className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Subheading */}
      <h3 className="mt-16 text-center text-2xl font-medium text-white/90">
        What awaits you
      </h3>

      {/* Carousel */}
      <AboutCarousel className="mt-8" slides={slides} />
    </section>
  );
}

/* ====== Carousel (unchanged) ====== */
export function AboutCarousel({
  slides,
  className = "",
}: {
  slides: AboutSlide[];
  className?: string;
}) {
  const isMobile = useMedia("(max-width: 640px)");

  if (!slides || slides.length === 0) {
    return (
      <div
        className={`${className} rounded-3xl bg-white/5 p-8 text-center text-white/60`}
      >
        No slides yet
      </div>
    );
  }

  if (isMobile) {
    const [index, setIndex] = useState(0);
    const last = slides.length - 1;
    const up = () => setIndex((i) => Math.max(0, i - 1));
    const down = () => setIndex((i) => Math.min(last, i + 1));
    const h = 320;

    return (
      <div className={className}>
        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl ring-1 ring-white/10"
            style={{ height: h }}
          >
            <div
              className="transition-transform duration-500"
              style={{ transform: `translateY(-${index * h}px)` }}
            >
              {slides.map((s, i) => (
                <figure
                  key={i}
                  className="group relative h-[320px] overflow-hidden"
                >
                  <img
                    src={s.src}
                    alt={s.alt || s.title || "About image"}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {s.title && (
                    <figcaption className="absolute left-4 bottom-4 text-white text-xl font-semibold drop-shadow">
                      {s.title}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={up}
              disabled={index === 0}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 disabled:opacity-50"
            >
              Up
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={down}
              disabled={index === last}
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition hover:from-purple-500 hover:to-indigo-400 disabled:opacity-50"
            >
              Down
            </button>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${pages * 100}%`,
              transform: `translateX(${trackTranslate}%)`,
            }}
          >
            {pagesData.map((group, i) => (
              <div key={i} className="shrink-0" style={{ width: `${pageWidth}%` }}>
                <div className="grid grid-cols-3 gap-6">
                  {group.map((s, idx) =>
                    s ? (
                      <figure
                        key={idx}
                        className="group relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10"
                      >
                        <img
                          src={s.src}
                          alt={s.alt || s.title || "About image"}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        {s.title && (
                          <figcaption className="absolute left-4 bottom-4 text-white text-xl font-semibold drop-shadow">
                            {s.title}
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      <div
                        key={`ph-${idx}`}
                        className="aspect-[16/10] rounded-3xl bg-white/5 ring-1 ring-white/10"
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={page === 0}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 disabled:opacity-50"
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === page ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={page === pages - 1}
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition hover:from-purple-500 hover:to-indigo-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/* media hook */
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