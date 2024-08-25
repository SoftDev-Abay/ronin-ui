import React, { createContext, useState, useEffect } from "react";
import enTranslations from "@/public/locales/en/common.json";
import ruTranslations from "@/public/locales/ru/common.json";

interface LanguageContextType {
  language: string;
  translations: any;
  switchLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "",
  translations: null,
  switchLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");
  const [translations, setTranslations] = useState(ruTranslations);

  useEffect(() => {
    // Check for language in query params
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang");

    // If lang param exists, use it, otherwise check localStorage
    if (lang) {
      setLanguage(lang);
      setTranslations(lang === "en" ? enTranslations : ruTranslations);
      localStorage.setItem("language", lang);
    } else {
      const storedLanguage = localStorage.getItem("language") || "ru";
      setLanguage(storedLanguage);
      setTranslations(
        storedLanguage === "en" ? enTranslations : ruTranslations
      );
    }
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(lang === "en" ? enTranslations : ruTranslations);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = () => React.useContext(LanguageContext);

export default useLanguageContext;
