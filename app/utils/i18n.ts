import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Enables backend plugin to load translations from a server.
  .use(HttpBackend)
  // Detects user language from browser settings.
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to your translation files.
    },
    react: {
      useSuspense: false, // Set to true if you want to wait for loaded translation in your components.
    },
  });

export default i18n;
