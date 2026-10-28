"use client";

import { contacts, series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { ProductArt } from "@/components/product-art";
import { Container, PageIntro, ZaloButton } from "@/components/ui";

export function ProductsPage() {
  const { copyLang, market, t } = useLanguage();

  return (
    <div>
      <PageIntro kicker={t.products.kicker} title={t.products.title} lead={t.products.lead} />

      <Container className="flex flex-col gap-[120px] py-[72px] md:gap-[144px] md:py-[120px]">
        {series.map((item, index) => {
          const text = item[copyLang];
          return (
            <article key={item.id} id={item.id} className="scroll-mt-24">
              <p className="eyebrow text-mute">0{index + 1}</p>
              <h2 className="heading-2 mt-4 max-w-[20ch]">{text.name}</h2>
              {item.id === "charm" ? (
                <p className="mt-6 max-w-[60ch] text-[14px] text-mute">{text.detail}</p>
              ) : null}
              <dl className="mt-6 grid max-w-[65ch] grid-cols-1 gap-y-2 border-t border-line pt-4 text-[14px] sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-6">
                {text.specs.map((spec) => (
                  <div key={spec.label} className="contents">
                    <dt className="text-mute">{spec.label}</dt>
                    <dd className="text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 md:mt-12">
                <ProductArt id={item.id} />
              </div>
            </article>
          );
        })}

        <div className="flex flex-col items-start gap-8">
          <h2 className="heading-2 max-w-[20ch]">{t.inquiry}</h2>
          <ZaloButton />
          {market.contact === "email" ? (
            <ul className="flex flex-col items-start gap-3">
              {contacts.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="link-under break-all text-[14px]">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
