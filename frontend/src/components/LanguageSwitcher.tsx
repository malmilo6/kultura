// src/components/LanguageToggle.tsx
import { useTranslation } from "react-i18next";
import "../styles/language-toggle.css";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  /* ── declare the languages we ship ───────────────────── */
  type Lang = "ru" | "ro" | "en";
  const langs: Lang[] = ["ru", "ro", "en"];

  /* current language (fallback to ru until i18n is ready) */
  const current: Lang =
    (i18n.resolvedLanguage as Lang) || (i18n.language as Lang) || "ru";

  /* work out the next language in the circle              */
  const next: Lang = langs[(langs.indexOf(current) + 1) % langs.length];

  const switchLang = () => i18n.changeLanguage(next);

  /* short helper for a11y title / tooltip text            */
  const title: Record<Lang, string> = {
    ru: "Schimbă în română",
    ro: "Switch to English",
    en: "Переключить на русский"
  };

  return (
    <button
      className="lang-toggle"
      onClick={switchLang}
      title={title[current]}
    >
      {current.toUpperCase()}
    </button>
  );
};