import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
    lng: "fr", // langue par défaut
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // React s'en charge déjà
    },
  });

export default i18n;
