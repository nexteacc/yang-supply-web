"use client";

import Image from "next/image";
import Link from "next/link";
import { contacts, productImage, series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { SquareThumb } from "@/components/product-art";
import { Section, TextLink, ZaloButton } from "@/components/ui";

/**
 * Full-bleed opening photograph. Point this at a calm workbench or petal
 * scene when one exists. The scrim and the HTML headline stay as they are.
 */
const HERO_SRC = "/products/rhinestone-large-2.jpg";

const heroPhoto = Object.values(productImage)
  .flat()
  .find((photo) => photo.src === HERO_SRC);

export function HomePage() {
  const { lang, t } = useLanguage();
  const home = t.home;

  return (
    <div>
      <section className="relative h-[85svh] min-h-[32rem] overflow-hidden bg-ink md:h-[100svh]">
        <Image
          src={HERO_SRC}
          alt={heroPhoto ? heroPhoto[lang] : "Yang Supply"}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden />
        <div className="hero-copy relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <p className="eyebrow text-white">Yang Supply</p>
          <h1 className="heading-1-hero mx-auto mt-6 max-w-[12em] text-balance md:max-w-[14em]">
            <span className="md:block">{home.title[0]}</span>{" "}
            <span className="md:block">{home.title[1]}</span>
          </h1>
          <p className="eyebrow mt-8 text-white">
            {home.routeFrom}
            <span className="px-3 normal-case" aria-hidden>
              —
            </span>
            {home.routeTo}
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col gap-[72px] md:gap-[120px]">
          <div>
            <p className="max-w-[60ch]">{home.lead}</p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <ZaloButton />
              <TextLink href="/cooperation">{home.seeProcess}</TextLink>
            </div>
            <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8">
              {home.rows.map((row) => (
                <div key={row.label}>
                  <dt className="eyebrow text-mute">{row.label}</dt>
                  <dd className="mt-2 text-[15px] text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-[14px] text-mute">{home.noteCaption}</p>
          </div>

          <div>
            <h2 className="heading-2">{home.valuesTitle}</h2>
            <ol className="mt-10 flex flex-col gap-10 md:mt-12 md:gap-12">
              {home.values.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-12 md:gap-6">
                  <span className="eyebrow pt-1 text-mute md:col-span-2">0{index + 1}</span>
                  <div className="md:col-span-6">
                    <h3 className="heading-3">{item.title}</h3>
                    <p className="mt-3 max-w-[60ch] text-mute">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

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

          <div>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="heading-2">{home.seriesTitle}</h2>
                <p className="mt-6 max-w-[60ch] text-mute">{home.seriesLead}</p>
              </div>
              <TextLink href="/products">{home.seeProducts}</TextLink>
            </div>
            <ul className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-20">
              {series.map((item, index) => {
                const text = item[lang];
                const photo = productImage[item.id][0];
                return (
                  <li key={item.id}>
                    <Link href={`/products#${item.id}`} className="group grid grid-cols-12 items-center gap-6">
                      <SquareThumb
                        src={photo.src}
                        alt={photo[lang]}
                        sizes="(min-width: 768px) 360px, 80vw"
                        className="col-span-12 sm:col-span-5 md:col-span-4"
                      />
                      <div className="col-span-12 sm:col-span-7 md:col-span-6">
                        <p className="eyebrow text-mute">0{index + 1}</p>
                        <h3 className="heading-3 link-under mt-3">{text.name}</h3>
                        <p className="mt-3 max-w-[60ch] text-[14px] text-mute">{text.summary}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="heading-2">{home.processTitle}</h2>
            <p className="mt-6 max-w-[60ch] text-mute">{home.processLead}</p>
            <ol className="mt-10 flex flex-col gap-8 md:mt-12">
              {home.steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-12 md:gap-6">
                  <span className="eyebrow pt-1 text-mute md:col-span-2">0{index + 1}</span>
                  <p className="max-w-[60ch] md:col-span-6">{step}</p>
                </li>
              ))}
            </ol>
            <TextLink href="/cooperation" className="mt-10 inline-block">
              {home.seeProcess}
            </TextLink>
          </div>

          <div>
            <h2 className="heading-2 max-w-[20ch]">{home.ctaTitle}</h2>
            <p className="mt-6 max-w-[60ch] text-mute">{home.ctaBody}</p>
            <a
              href={contacts.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="heading-3 link-under mt-8 inline-block"
            >
              {contacts.zalo}
            </a>
            <div className="mt-8">
              <ZaloButton />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
