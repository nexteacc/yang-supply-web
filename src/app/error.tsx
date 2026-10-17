"use client";

import { useLanguage } from "@/components/language";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <h1 className="font-display text-4xl text-paper">{t.error.title}</h1>
      <p className="mt-4 text-sm text-dim">{t.error.body}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 bg-amber px-5 py-3 text-sm font-medium text-ink"
      >
        {t.error.retry}
      </button>
    </div>
  );
}
