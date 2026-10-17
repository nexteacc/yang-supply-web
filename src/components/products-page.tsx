"use client";

import { series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { ProductArt } from "@/components/product-art";
import { Container, Kicker, Reveal, ZaloButton } from "@/components/ui";

export function ProductsPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <Container className="pb-4 pt-16 md:pt-24">
        <Reveal>
          <Kicker>
            <span className="mr-4">{t.products.kicker}</span>
            {t.products.title}
          </Kicker>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.12] text-ink">
            {t.products.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-mute">{t.products.lead}</p>
        </Reveal>
      </Container>

      <div className="mt-12 md:mt-16">
        {series.map((item, index) => {
          const text = item[lang];
          return (
            <article key={item.id} id={item.id} className="scroll-mt-24 border-t border-line">
              <Container className="grid items-start gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
                <div className="lg:sticky lg:top-24 lg:col-span-4">
                  <Reveal>
                    <p className="text-[11px] tracking-[0.22em] text-mute">0{index + 1}</p>
                    <h2 className="mt-4 font-display text-[2rem] leading-tight text-ink md:text-[2.6rem]">{text.name}</h2>
                    <p className="mt-5 text-base leading-7 text-ink">{text.summary}</p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-mute">{text.detail}</p>
                  </Reveal>
                </div>
                <div className="lg:col-span-8">
                  <ProductArt id={item.id} />
                </div>
              </Container>
            </article>
          );
        })}
      </div>

      <Container className="flex flex-col items-start justify-between gap-8 border-t border-line py-16 md:flex-row md:items-end md:py-20">
        <p className="max-w-md font-display text-4xl leading-tight md:text-5xl">{t.inquiry}</p>
        <ZaloButton />
      </Container>
    </div>
  );
}
