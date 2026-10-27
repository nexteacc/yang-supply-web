"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionary, type Copy, type Lang } from "@/lib/content";
import { localizedPath, marketFromPathname } from "@/lib/i18n";
import type { Market, MarketId } from "@/lib/markets";

const STORAGE_KEY = "yang-lang";

type LanguageContextValue = {
  lang: MarketId;
  copyLang: Lang;
  market: Market;
  setLang: (lang: MarketId) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const market = marketFromPathname(pathname);
  const lang = market.id;

  useEffect(() => {
    document.documentElement.lang = market.htmlLang;
    document.documentElement.dataset.lang = market.copyLang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* Storage may be disabled. */
    }
  }, [lang, market.copyLang, market.htmlLang]);

  const setLang = (next: MarketId) => {
    if (next === lang) return;
    router.push(
      localizedPath(next, pathname) +
        window.location.search +
        window.location.hash,
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        copyLang: market.copyLang,
        market,
        setLang,
        t: dictionary[market.copyLang],
      }}
    >
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
