
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
          <div className="grid place-items-center rounded-2xl bg-neutral-900 p-3 sm:p-4">
            {qrSrc ? (
              <img
                src={qrSrc}
                alt={qrAlt}
                className="h-64 w-64 sm:h-72 sm:w-72 rounded-md bg-white p-2 object-contain"
              />
            ) : (
              <div className="h-64 w-64 sm:h-72 sm:w-72 rounded-md bg-white/90 grid place-items-center text-black/60 text-sm">
                QR image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}