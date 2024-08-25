import React, { useContext } from "react";

import "./style.scss";
import useLanguageContext from "@/app/context/TranslationContext";

const LanguageToggleButton: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { translations, switchLanguage, language } = useLanguageContext();

  const onLanguageChange = () => {
    const nextLanguage = language === "ru" ? "en" : "ru";
    switchLanguage(nextLanguage);
  };

  return (
    <div
      className={`language-toggle ${className}`}
      onClick={onLanguageChange}
      {...props}
    >
      {language === "ru" ? "РУ" : "EN"}
    </div>
  );
};

export default LanguageToggleButton;
