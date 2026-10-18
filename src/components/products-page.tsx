"use client";

import { series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { ProductArt } from "@/components/product-art";
import { Container, PageIntro, ZaloButton } from "@/components/ui";

export function ProductsPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageIntro kicker={t.products.kicker} title={t.products.title} lead={t.products.lead} />

      <Container className="flex flex-col gap-[120px] py-[72px] md:gap-[144px] md:py-[120px]">
        {series.map((item, index) => {
          const text = item[lang];
          return (
            <article key={item.id} id={item.id} className="scroll-mt-24">
              <p className="eyebrow text-mute">0{index + 1}</p>
              <h2 className="heading-2 mt-4 max-w-[20ch]">{text.name}</h2>
              <p className="mt-6 max-w-[60ch]">{text.summary}</p>
              <p className="mt-3 max-w-[60ch] text-[14px] text-mute">{text.detail}</p>
              <div className="mt-10 md:mt-12">
                <ProductArt id={item.id} />
              </div>
            </article>
          );
        })}

        <div className="flex flex-col items-start gap-8">
          <h2 className="heading-2 max-w-[20ch]">{t.inquiry}</h2>
          <ZaloButton />
        </div>
      </Container>
    </div>
  );
}
