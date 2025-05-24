// src/components/LanguageToggle.tsx
import { useTranslation } from "react-i18next";
import "../styles/language-toggle.css";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  // if resolvedLanguage is still undefined, fall back:
  const currentLang = (i18n.resolvedLanguage || i18n.language || "ru") as
    | "ru"
    | "en";

  const switchLang = () => {
    i18n.changeLanguage(currentLang === "ru" ? "en" : "ru");
  };

  return (
    <button
      className="lang-toggle"
      onClick={switchLang}
      title={currentLang === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      {currentLang.toUpperCase()}
    </button>
  );
};