"use client";

import { series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { ProductArt } from "@/components/product-art";
import { Label, Reveal, ZaloButton } from "@/components/ui";

export function ProductsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <Label index={t.products.kicker}>{t.products.title}</Label>
        <h1 className="mt-5 font-display text-4xl text-paper sm:text-6xl">{t.products.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-dim">{t.products.lead}</p>
      </Reveal>

      <div className="mt-14 space-y-16 md:space-y-24">
        {series.map((item, index) => {
          const text = item[lang];
          const flip = index % 2 === 1;
          return (
            <Reveal key={item.id}>
              <article id={item.id} className="scroll-mt-24 grid items-center gap-8 md:grid-cols-2">
                <div className={flip ? "md:order-2" : ""}>
                  <ProductArt id={item.id} alt={text.name} />
                </div>
                <div>
                  <p className="font-display text-sm text-amber">0{index + 1}</p>
                  <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">{text.name}</h2>
                  <p className="mt-4 text-lg leading-7 text-paper">{text.summary}</p>
                  <p className="mt-3 text-sm leading-6 text-dim">{text.detail}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-amber/25 p-6 sm:flex-row sm:items-center sm:p-8">
        <p className="font-display text-2xl text-paper sm:text-3xl">{t.inquiry}</p>
        <ZaloButton />
      </div>
    </div>
  );
}
