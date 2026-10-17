"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/language";
import { Wordmark } from "@/components/ui";
import type { Lang } from "@/lib/content";

const languages: { id: Lang; label: string; name: string }[] = [
  { id: "zh", label: "中文", name: "中文" },
  { id: "vi", label: "Tiếng Việt", name: "Tiếng Việt" },
];

function LangSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-2 text-[11px] tracking-[0.12em]" role="group" aria-label="Language">
      {languages.map((item, index) => {
        const active = lang === item.id;
        return (
          <span key={item.id} className="flex items-center gap-2">
            {index > 0 ? (
              <span className="text-line" aria-hidden>
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLang(item.id)}
              aria-pressed={active}
              aria-label={item.name}
              className={`cursor-pointer whitespace-nowrap ${active ? "text-ink" : "text-mute hover:text-ink"}`}
            >
              {item.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = (
    <ul className="mx-auto flex w-full max-w-[1320px] flex-col px-5 py-2">
      {t.nav.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href} className="border-b border-line last:border-b-0">
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`block py-4 font-display text-3xl ${active ? "text-ink" : "text-mute"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between gap-3 px-5 md:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {t.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-under py-1 text-[11px] uppercase tracking-[0.18em] hover:text-ink ${active ? "is-active text-ink" : "text-mute"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <LangSwitch />
          <button
            type="button"
            className="cursor-pointer text-[11px] uppercase tracking-[0.16em] text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            {links}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
