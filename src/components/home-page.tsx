"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { contacts, productImage, series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { WellImage } from "@/components/product-art";
import { Kicker, Reveal, Section, TextLink, ZaloButton } from "@/components/ui";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Full-bleed opening photograph. Point `src` at another file under /public
 * when a new picture is ready — the scrim and headline stay as they are.
 */
const HERO_SRC = "/products/rhinestone-large-2.jpg";

const heroPhoto = Object.values(productImage)
  .flat()
  .find((photo) => photo.src === HERO_SRC);

export function HomePage() {
  const { lang, t } = useLanguage();
  const home = t.home;
  const reduce = useReducedMotion();

  return (
    <div>
      <section className="relative h-[calc(100svh-3.5rem)] min-h-[32rem] overflow-hidden bg-ink">
        <Image
          src={HERO_SRC}
          alt={heroPhoto ? heroPhoto[lang] : "YANG SUPPLY"}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden />
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/80">YANG SUPPLY</p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(2.25rem,5.4vw,5.25rem)] font-medium leading-[1.16]">
            {home.title[0]}
            <br />
            {home.title[1]}
          </h1>
          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/80">
            {home.routeFrom}
            <span className="px-3" aria-hidden>
              —
            </span>
            {home.routeTo}
          </p>
        </motion.div>
      </section>

      <Section>
        <Reveal>
          <p className="max-w-2xl text-lg leading-8 text-ink md:text-xl md:leading-9">{home.lead}</p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <ZaloButton />
            <TextLink href="/cooperation">{home.seeProcess}</TextLink>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <dl className="mt-14 border-t border-line">
            {home.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-8"
              >
                <dt className="text-[11px] uppercase tracking-[0.22em] text-mute">{row.label}</dt>
                <dd className="text-sm text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-5 text-mute">{home.noteCaption}</p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Kicker>{home.valuesTitle}</Kicker>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 md:divide-x md:divide-line">
          {home.values.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className={`py-8 md:px-8 md:py-1 ${index > 0 ? "border-t border-line md:border-t-0" : ""} ${index === 0 ? "md:pl-0" : ""} ${index === home.values.length - 1 ? "md:pr-0" : ""}`}
            >
              <article>
                <p className="text-[11px] tracking-[0.22em] text-mute">0{index + 1}</p>
                <h2 className="mt-4 font-display text-[1.85rem] leading-tight text-ink">{item.title}</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-mute">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Kicker>{home.audienceTitle}</Kicker>
          <p className="mt-5 text-base leading-7 text-ink">{home.audienceBody}</p>
        </Reveal>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {home.audience.map((name) => (
            <li
              key={name}
              className="border-t border-line py-6 lg:border-l lg:border-t-0 lg:px-6 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-display text-[1.7rem] leading-tight text-ink">{name}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <Kicker>{home.seriesTitle}</Kicker>
            <p className="mt-5 max-w-xl text-sm leading-6 text-mute">{home.seriesLead}</p>
          </Reveal>
          <TextLink href="/products">{home.seeProducts}</TextLink>
        </div>
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {series.map((item, index) => {
            const text = item[lang];
            const photo = productImage[item.id][0];
            return (
              <li key={item.id}>
                <Link href={`/products#${item.id}`} className="group block">
                  <WellImage src={photo.src} alt={photo[lang]} sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw" className="bg-well" />
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h2 className="link-under font-display text-[1.65rem] leading-tight">{text.name}</h2>
                    <span className="text-[11px] tracking-[0.2em] text-mute">0{index + 1}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-mute">{text.summary}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <Reveal>
          <Kicker>{home.processTitle}</Kicker>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-mute">{home.processLead}</p>
        </Reveal>
        <ol className="mt-10 grid md:grid-cols-5">
          {home.steps.map((step, index) => (
            <li key={step} className="border-t border-line py-6 md:pr-6">
              <p className="text-[11px] tracking-[0.22em] text-mute">0{index + 1}</p>
              <p className="mt-4 text-sm leading-6 text-ink">{step}</p>
            </li>
          ))}
        </ol>
        <TextLink href="/cooperation" className="mt-8 inline-block">
          {home.seeProcess}
        </TextLink>
      </Section>

      <Section>
        <h2 className="max-w-xl font-display text-4xl leading-tight md:text-5xl">{home.ctaTitle}</h2>
        <p className="mt-4 text-sm text-mute">{home.ctaBody}</p>
        <a
          href={contacts.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-under mt-8 inline-block font-display text-[clamp(2.4rem,5vw,3.5rem)] leading-none"
        >
          {contacts.zalo}
        </a>
        <div className="mt-8">
          <ZaloButton />
        </div>
      </Section>
    </div>
  );
}
