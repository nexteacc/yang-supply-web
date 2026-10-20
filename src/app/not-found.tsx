"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language";
import { localizedPath } from "@/lib/i18n";
import { Container } from "@/components/ui";

export default function NotFound() {
  const { t, lang } = useLanguage();
  return (
    <Container className="py-[72px] md:py-[120px]">
      <p className="eyebrow text-mute">404</p>
      <h1 className="heading-1 mt-4">{t.notFound.title}</h1>
      <p className="mt-6 max-w-[60ch] text-mute">{t.notFound.body}</p>
      <Link href={localizedPath(lang)} className="btn-quiet mt-10">
        {t.notFound.back}
      </Link>
    </Container>
  );
}
