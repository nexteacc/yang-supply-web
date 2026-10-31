"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { contacts, productImage, series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { localizedPath } from "@/lib/i18n";
import { SquareThumb } from "@/components/product-art";
import { Section, TextLink, ZaloButton } from "@/components/ui";

/** Approximate width in em so a long data-block value can shrink to one line. */
function factEm(value: string) {
  let units = 0;
  for (const ch of value) {
    const code = ch.codePointAt(0) ?? 0;
    units += code > 0x2e80 ? 1.05 : 0.62;
  }
  return units.toFixed(2);
}

/** Renders [label](/path) as an internal link. Other text is unchanged. */
function InlineLinks({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(
      <TextLink key={key} href={match[2]}>
        {match[1]}
      </TextLink>,
    );
    key += 1;
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

/**
 * Full-bleed opening photograph. Point this at a calm workbench or petal
 * scene when one exists. The scrim and the HTML headline stay as they are.
 */
const HERO_SRC = "/products/sticker-dinh-da-co-lon-hop-qua.jpg";

const heroPhoto = Object.values(productImage)
  .flat()
  .find((photo) => photo.src === HERO_SRC);

export function HomePage() {
  const { lang, copyLang, market, t } = useLanguage();
  const home = t.home;
  const showProcessLink = Boolean(home.seeProcess && market.pages.cooperation);
  const showProcessSection = showProcessLink && home.steps.length > 0;
  const twoServiceCards = home.values.length === 2;

  return (
    <div>
      <section className="relative -mt-[104px] sm:-mt-[72px] h-[85svh] min-h-[32rem] overflow-hidden bg-ink md:h-[100svh]">
        <Image
          src={HERO_SRC}
          alt={heroPhoto ? heroPhoto[copyLang] : "Yang Supply"}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="hero-scrim pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div className="hero-copy relative z-10 flex h-full flex-col items-center justify-center px-5 pt-[104px] sm:pt-[72px] text-center text-white">
          <h1 className="heading-1-hero mx-auto max-w-[12em] text-balance md:max-w-[14em]">
            <span className="md:block">{home.title[0]}</span>{" "}
            <span className="md:block">{home.title[1]}</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="flex flex-col gap-[72px] md:gap-[120px]">
          <div>
            <p className="max-w-[60ch]">{home.lead}</p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <ZaloButton />
              {showProcessLink ? (
                <TextLink href={market.pages.cooperation!}>
                  {home.seeProcess}
                </TextLink>
              ) : null}
            </div>
            {home.rows.length > 0 ? (
              <dl className="mt-16 grid grid-cols-1 items-baseline gap-x-8 gap-y-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
                {home.rows.map((row) => (
                  <div key={row.label} className="fact">
                    <dd
                      className="fact-value text-ink"
                      style={{ "--fact-em": factEm(row.value) } as CSSProperties}
                    >
                      {row.value}
                    </dd>
                    <dt className="fact-label mt-2 text-mute">{row.label}</dt>
                    {row.note ? (
                      <p className="mt-2 max-w-[22ch] text-[13px] font-normal leading-snug text-mute">
                        {home.noteCaption}
                      </p>
                    ) : null}
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          {home.values.length > 0 ? (
          <div>
            <h2 className="heading-2">{home.valuesTitle}</h2>
            <ol
              className={
                twoServiceCards
                  ? "mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 md:gap-12"
                  : "mt-10 flex flex-col gap-10 md:mt-12 md:gap-12"
              }
            >
              {home.values.map((item, index) => (
                <li
                  key={item.title}
                  className={
                    twoServiceCards
                      ? "grid grid-cols-[3rem_minmax(0,1fr)] gap-6"
                      : "grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-12 md:gap-6"
                  }
                >
                  <span
                    className={`eyebrow pt-1 text-mute ${twoServiceCards ? "" : "md:col-span-2"}`}
                  >
                    0{index + 1}
                  </span>
                  <div className={twoServiceCards ? "" : "md:col-span-6"}>
                    <h3 className="heading-3">{item.title}</h3>
                    <p className="mt-3 max-w-[60ch] text-mute">
                      <InlineLinks text={item.body} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          ) : null}

          {home.audience.length > 0 ? (
          <div>
            <h2 className="heading-2">{home.audienceTitle}</h2>
            <p className="mt-6 max-w-[60ch]">{home.audienceBody}</p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-12">
              {home.audience.map((name) => (
                <li key={name} className="heading-3 md:col-span-3">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          ) : null}

          <div>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="heading-2">{home.seriesTitle}</h2>
                <p className="mt-6 max-w-[60ch] text-mute">{home.seriesLead}</p>
              </div>
              <TextLink href={localizedPath(lang, "/products")}>
                {home.seeProducts}
              </TextLink>
            </div>
            <ul className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-20">
              {series.map((item, index) => {
                const text = item[copyLang];
                const photo = productImage[item.id].find(
                  (itemPhoto) => !(itemPhoto.metricDiagram && market.units === "in"),
                );
                if (!photo) return null;
                return (
                  <li key={item.id}>
                    <Link
                      href={localizedPath(lang, `/products#${item.id}`)}
                      className="group grid grid-cols-12 items-center gap-6"
                    >
                      <SquareThumb
                        src={photo.src}
                        alt={photo[copyLang]}
                        sizes="(min-width: 768px) 360px, 80vw"
                        className="col-span-12 sm:col-span-5 md:col-span-4"
                      />
                      <div className="col-span-12 sm:col-span-7 md:col-span-6">
                        <p className="eyebrow text-mute">0{index + 1}</p>
                        <h3 className="heading-3 link-under mt-3">
                          {text.name}
                        </h3>
                        <p className="mt-3 max-w-[60ch] text-[14px] text-mute">
                          {text.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {showProcessSection ? (
          <div>
            <h2 className="heading-2">{home.processTitle}</h2>
            <p className="mt-6 max-w-[60ch] text-mute">{home.processLead}</p>
            <ol className="mt-10 flex flex-col gap-8 md:mt-12">
              {home.steps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-12 md:gap-6"
                >
                  <span className="eyebrow pt-1 text-mute md:col-span-2">
                    0{index + 1}
                  </span>
                  <p className="max-w-[60ch] md:col-span-6">{step}</p>
                </li>
              ))}
            </ol>
            <TextLink
              href={market.pages.cooperation!}
              className="mt-10 inline-block"
            >
              {home.seeProcess}
            </TextLink>
          </div>
          ) : null}

          <div>
            <h2 className="heading-2 max-w-[20ch]">{home.ctaTitle}</h2>
            <p className="mt-6 max-w-[60ch] text-mute">{home.ctaBody}</p>
            {market.contact === "zalo" ? (
              <a
                href={contacts.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="heading-3 link-under mt-8 inline-block"
              >
                {contacts.zalo}
              </a>
            ) : (
              <ul className="mt-8 flex flex-col items-start gap-3">
                {contacts.emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className="link-under break-all text-[14px]">
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8">
              <ZaloButton />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
