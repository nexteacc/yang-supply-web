"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 py-24 md:px-8 md:py-32">
      <p className="text-[11px] uppercase tracking-[0.28em] text-mute">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-mute">{t.notFound.body}</p>
      <Link href="/" className="btn-quiet mt-10">
        {t.notFound.back}
      </Link>
    </div>
  );
}
