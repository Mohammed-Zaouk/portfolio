import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  LanguageContext,
  translations,
  rtlLanguages,
  STORAGE_KEY,
  DEFAULT_LANGUAGE,
} from "./language";
import type { Language } from "./language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Language) || DEFAULT_LANGUAGE;
  });

  const dir: "ltr" | "rtl" = rtlLanguages.includes(language) ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language, dir]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language], dir }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
