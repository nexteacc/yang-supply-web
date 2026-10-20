"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionary, type Copy, type Lang } from "@/lib/content";
import { languageFromPath, languageTags, localizedPath } from "@/lib/i18n";

const STORAGE_KEY = "yang-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const lang = languageFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = languageTags[lang];
    document.documentElement.dataset.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* Storage may be disabled. */
    }
  }, [lang]);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    router.push(
      localizedPath(next, pathname) +
        window.location.search +
        window.location.hash,
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return value;
}
