"use client";

import { useState, useEffect } from "react";

const LanguageSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("en");

  useEffect(() => {
    setMounted(true);
    // Get saved language from localStorage
    const savedLang = localStorage.getItem("language") as "en" | "es";
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    // Dispatch custom event so other components can react to language change
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }));
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      <span className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-50"}`}>
        🇬🇧
      </span>
      <span className="text-gray-400 dark:text-gray-500">/</span>
      <span className={`transition-opacity ${language === "es" ? "opacity-100" : "opacity-50"}`}>
        🇪🇸
      </span>
    </button>
  );
};

export default LanguageSwitch;
