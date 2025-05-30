import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2"> {/* <-- Plus aucune position fixed ici */}
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded ${
          i18n.language === "en" ? "bg-cyan-500 text-white" : "bg-gray-700 text-gray-300"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className={`px-3 py-1 rounded ${
          i18n.language === "fr" ? "bg-cyan-500 text-white" : "bg-gray-700 text-gray-300"
        }`}
        aria-label="Passer au français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
