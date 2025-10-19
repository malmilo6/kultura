// src/components/PartnersSection.tsx

export type PartnerLogo = {
  src: string;
  alt: string;
  href?: string;
};

type Props = {
  title?: string;
  logos?: PartnerLogo[];
};

export default function PartnersSection({
  title = "PARTNERS",
  logos = [
    { src: "/partners/om.svg", alt: "OM" },
    { src: "/partners/frups-energy.svg", alt: "Frups Energy" },
    { src: "/partners/avalon.svg", alt: "Avalon Club" },
    { src: "/partners/brawix.svg", alt: "Brawix" },
    { src: "/partners/caromoto.svg", alt: "Caromoto" },
    { src: "/partners/arti-golden.svg", alt: "Arti Golden" },
  ],
}: Props) {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
      <h2 className="text-center font-extrabold tracking-tight leading-[0.9] text-[48px] sm:text-[72px] lg:text-[96px]">
        {title}
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
        {logos.map((l, i) =>
          l.href ? (
            <a key={i} href={l.href} target="_blank" rel="noreferrer noopener" className="group">
              <img
                src={l.src}
                alt={l.alt}
                className="h-12 sm:h-14 lg:h-16 w-auto opacity-95 transition group-hover:opacity-100"
              />
            </a>
          ) : (
            <img key={i} src={l.src} alt={l.alt} className="h-12 sm:h-14 lg:h-16 w-auto opacity-95" />
          )
        )}
      </div>
    </section>
  );
}