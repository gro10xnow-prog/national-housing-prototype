"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, Translations } from "@/data/translations";
import { toBengaliNumerals, formatBDTLocale, formatBDTLargeLocale } from "@/lib/utils";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (path: string, fallback?: string) => string;
  toBengaliNum: (val: number | string) => string;
  formatCurrency: (amount: number) => string;
  formatLargeCurrency: (amount: number) => string;
  strings: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("nhfil_lang") as Language;
      if (savedLang === "en" || savedLang === "bn") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch (e) {
      // localStorage unavailable (e.g. incognito restrictions)
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("nhfil_lang", newLang);
      document.documentElement.lang = newLang;
    } catch (e) {}
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "bn" : "en");
  };

  /**
   * Safe lookup by dot notation e.g. "topbar.hotline", "nav.home"
   */
  const t = (path: string, fallback: string = ""): string => {
    const keys = path.split(".");
    let current: any = translations[lang];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }
    return typeof current === "string" ? current : fallback || path;
  };

  const formatCurrency = (amount: number) => {
    return formatBDTLocale(amount, lang);
  };

  const formatLargeCurrency = (amount: number) => {
    return formatBDTLargeLocale(amount, lang);
  };

  const toBengaliNum = (val: number | string) => {
    return lang === "bn" ? toBengaliNumerals(val) : val.toString();
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        toBengaliNum,
        formatCurrency,
        formatLargeCurrency,
        strings: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
