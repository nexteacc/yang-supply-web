"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionary, type Copy, type Lang } from "@/lib/content";
import { localizedPath, marketFromPathname } from "@/lib/i18n";
import type { Market, MarketId } from "@/lib/markets";

const STORAGE_KEY = "yang-preferred-market";
const SESSION_KEY = "yang-market-visited";

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
      if (pathname === "/" && !window.sessionStorage.getItem(SESSION_KEY)) {
        window.sessionStorage.setItem(SESSION_KEY, "1");
        const saved = window.localStorage.getItem(STORAGE_KEY);
        const preferred = saved === "vi" || saved === "zh" || saved === "en-us"
          ? saved
          : (() => {
              const language = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
              if (language === "vi" || language.startsWith("vi-")) return "vi";
              if (language === "en" || language.startsWith("en-")) return "en-us";
              return "zh";
            })();
        if (preferred !== "vi") router.replace(localizedPath(preferred, "/"));
      }
    } catch {
      if (pathname === "/") {
        const language = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
        if (!(language === "vi" || language.startsWith("vi-"))) {
          router.replace(localizedPath(language === "en" || language.startsWith("en-") ? "en-us" : "zh", "/"));
        }
      }
    }
  }, [lang, market.copyLang, market.htmlLang, pathname, router]);

  const setLang = (next: MarketId) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
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
