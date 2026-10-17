"use client";

import { useLanguage } from "@/components/language";
import { Container } from "@/components/ui";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();
  return (
    <Container className="py-[72px] md:py-[120px]">
      <h1 className="heading-1">{t.error.title}</h1>
      <p className="mt-6 max-w-[60ch] text-mute">{t.error.body}</p>
      <button type="button" onClick={reset} className="btn-quiet mt-10 cursor-pointer">
        {t.error.retry}
      </button>
    </Container>
  );
}
