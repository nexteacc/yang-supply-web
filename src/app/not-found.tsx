"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="text-[11px] uppercase tracking-[0.22em] text-amber">404</p>
      <h1 className="mt-4 font-display text-4xl text-paper">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-dim">{t.notFound.body}</p>
      <Link
        href="/"
        className="mt-8 inline-flex border border-amber/40 px-5 py-3 text-sm text-paper hover:border-amber hover:text-amber"
      >
        {t.notFound.back}
      </Link>
    </div>
  );
}
