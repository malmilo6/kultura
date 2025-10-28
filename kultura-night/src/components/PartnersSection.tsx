// src/components/PartnersSection.tsx
import { useTranslation } from "react-i18next";

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
  logos = [],
}: Props) {
  const { t } = useTranslation();
  const titleText = t("partners", { defaultValue: title });

  return (
      <section
          id="partners"
          className="
        bg-black text-center overflow-hidden
        px-[4vw] pt-[100px] pb-[120px]
        font-['Russo_One',sans-serif]
      "
      >
          <h2 className="text-center font-extrabold tracking-tight leading-[0.9] text-[48px] sm:text-[72px] lg:text-[96px]">
              {titleText}
          </h2>

          <div
              className="
          max-w-[1400px] mx-auto
          grid place-items-center
          [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]
          gap-y-10 gap-x-8
          sm:gap-y-16 sm:gap-x-20
        "
          >
              {logos.map((l, i) => {
                  const Img = (
                      <img
                          src={l.src}
                          alt={l.alt}
                          className="
                max-w-full max-h-full object-contain
              "
                          loading="lazy"
                      />
                  );

                  return l.href ? (
                      <a
                          key={i}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={l.alt}
                          className="
                w-[120px] h-[120px]
                sm:w-[140px] sm:h-[140px]
                flex items-center justify-center
                transition-transform duration-300
                hover:scale-105
              "
                      >
                          {Img}
                      </a>
                  ) : (
                      <div
                          key={i}
                          className="
                w-[120px] h-[120px]
                sm:w-[140px] sm:h-[140px]
                flex items-center justify-center
                transition-transform duration-300
                hover:scale-105
              "
                      >
                          {Img}
                      </div>
                  );
              })}
          </div>
      </section>
  );
}