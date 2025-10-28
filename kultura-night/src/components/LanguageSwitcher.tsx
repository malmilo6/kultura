// src/components/LanguageToggle.tsx
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  type Lang = "ru" | "ro" | "en";
  const langs: Lang[] = ["ru", "ro", "en"];

  const current: Lang =
    (i18n.resolvedLanguage as Lang) || (i18n.language as Lang) || "ru";
  const next: Lang = langs[(langs.indexOf(current) + 1) % langs.length];

  const switchLang = () => i18n.changeLanguage(next);

  const title: Record<Lang, string> = {
    ru: "Schimbă în română",
    ro: "Switch to English",
    en: "Переключить на русский",
  };

  return (
    <button
      onClick={switchLang}
      title={title[current]}
      className="
        font-['Druk_Wide_Cyr',sans-serif]
        text-[12px] md:text-[20px]
        text-white bg-transparent border-0
        cursor-pointer select-none
        [text-shadow:0_0_6px_rgba(0,0,0,0.45)]
        transition-transform duration-150
        focus:outline-none
        hover:scale-110 focus-visible:scale-110
      "
    >
      {current.toUpperCase()}
    </button>
  );
};