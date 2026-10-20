"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionary, type Copy, type Lang } from "@/lib/content";

const STORAGE_KEY = "yang-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLang = "vi",
  children,
}: {
  initialLang?: Lang;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // If the URL starts with /zh, the language is always Chinese. Otherwise Vietnamese.
  const isZhPath = pathname === "/zh" || pathname.startsWith("/zh/");
  const lang: Lang = isZhPath ? "zh" : initialLang;

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "vi";
    document.documentElement.dataset.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    window.localStorage.setItem(STORAGE_KEY, next);
    if (next === "zh") {
      const target = `/zh${pathname === "/" ? "" : pathname}`;
      router.push(target);
    } else {
      const stripped = pathname.replace(/^\/zh/, "");
      router.push(stripped || "/");
    }
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
