"use client";

import { useState, useEffect, useCallback } from "react";

export type Language = "en" | "es";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get saved language from localStorage
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }

    // Listen for language changes from LanguageSwitch component
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener);
  }, []);

  const changeLanguage = useCallback((newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }));
  }, []);

  return { language, changeLanguage, mounted };
}

// Translation helper
export function t<T>(translations: { en: T; es: T }, language: Language): T {
  return translations[language];
}
