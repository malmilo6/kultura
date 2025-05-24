import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import ru from "./locales/ru/common.json";

// 👉  if you prefer one big “common.json”, make it the *default* namespace
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    lng:        "ru",          // initial language
    debug:      false,
    ns: ["common"],            // our only namespace
    defaultNS: "common",
    resources: {
      en: { common: en },
      ru: { common: ru }
    },
    interpolation: { escapeValue: false }
  });

export default i18n;