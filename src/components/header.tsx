"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/language";
import { Container, Wordmark } from "@/components/ui";
import type { Lang } from "@/lib/content";

const languages: { id: Lang; label: string; name: string }[] = [
  { id: "zh", label: "中文", name: "中文" },
  { id: "vi", label: "Tiếng Việt", name: "Tiếng Việt" },
];

function LangSwitch() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  function getTargetUrl(targetLang: Lang) {
    if (targetLang === "zh") {
      if (pathname === "/zh" || pathname.startsWith("/zh/")) return pathname;
      return `/zh${pathname === "/" ? "" : pathname}`;
    } else {
      if (!pathname.startsWith("/zh")) return pathname;
      const stripped = pathname.replace(/^\/zh/, "");
      return stripped || "/";
    }
  }

  return (
    <div className="flex items-center gap-2 text-[13px]" role="group" aria-label="Language">
      {languages.map((item, index) => {
        const active = lang === item.id;
        const targetHref = getTargetUrl(item.id);
        return (
          <span key={item.id} className="flex items-center gap-2">
            {index > 0 ? (
              <span className="text-line" aria-hidden>
                /
              </span>
            ) : null}
            <Link
              href={targetHref}
              aria-current={active ? "page" : undefined}
              aria-label={item.name}
              className={`whitespace-nowrap transition-colors ${active ? "font-medium text-ink" : "text-mute hover:text-ink"}`}
            >
              {item.label}
            </Link>
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
    <ul className="flex flex-col">
      {t.nav.map((item) => {
        const isHome = item.href === "/" || item.href === "/zh";
        const active = isHome ? pathname === item.href : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex h-12 items-center text-[16px] uppercase tracking-[0.1em] ${active ? "text-ink" : "text-mute"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-paper">
      <div className="box-border h-[72px] border-b border-line">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>
      <Container className="flex h-full items-center justify-between gap-4">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {t.nav.map((item) => {
            const isHome = item.href === "/" || item.href === "/zh";
        const active = isHome ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-under py-1 text-[13px] uppercase tracking-[0.1em] hover:text-ink ${active ? "is-active text-ink" : "text-mute"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <LangSwitch />
          <button
            type="button"
            className="inline-flex h-11 min-w-11 cursor-pointer items-center justify-center text-[13px] uppercase tracking-[0.1em] text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </Container>
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
            className="overflow-hidden border-b border-line md:hidden"
          >
            <Container className="py-2">{links}</Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
