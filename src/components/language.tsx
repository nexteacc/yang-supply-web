"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionary, type Copy, type Lang } from "@/lib/content";

const STORAGE_KEY = "yang-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("yang-lang", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("yang-lang", onStoreChange);
  };
}

function readLang(): Lang {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "zh" || saved === "vi" ? saved : "vi";
}

function writeLang(next: Lang) {
  window.localStorage.setItem(STORAGE_KEY, next);
  document.cookie = `${STORAGE_KEY}=${next};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "vi";
  document.documentElement.dataset.lang = next;
  window.dispatchEvent(new Event("yang-lang"));
}

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const lang = useSyncExternalStore(subscribe, readLang, () => initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "vi";
    document.documentElement.dataset.lang = lang;
    document.documentElement.classList.remove("lang-boot");
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: writeLang, t: dictionary[lang] }}>
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
