"use client";

import { useLanguage } from "@/components/language";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 py-24 md:px-8 md:py-32">
      <h1 className="font-display text-4xl md:text-6xl">{t.error.title}</h1>
      <p className="mt-4 text-sm text-mute">{t.error.body}</p>
      <button type="button" onClick={reset} className="btn-quiet mt-10 cursor-pointer">
        {t.error.retry}
      </button>
    </div>
  );
}
