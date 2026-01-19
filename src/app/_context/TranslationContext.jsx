"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@data/en.json";
import fr from "@data/fr.json";
import ar from "@data/ar.json";

const translations = { en, fr, ar };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    } else {
      const browserLang =
        typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";
      if (translations[browserLang]) {
        setLang(browserLang);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "ltr" : "ltr";
  }, [lang]);

  const toggleLang = () => {
    const order = ["en", "fr", "ar"];
    const currentIndex = order.indexOf(lang);
    const nextIndex = (currentIndex + 1) % order.length;
    const newLang = order[nextIndex];
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[lang];
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
