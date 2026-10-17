"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contacts, series } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { ProductArt } from "@/components/product-art";
import { CropFrame, Label, Reveal, RouteLine, ZaloButton } from "@/components/ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomePage() {
  const { lang, t } = useLanguage();
  const home = t.home;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 pb-8 pt-14 md:px-8 md:pt-20 lg:grid-cols-[1.35fr_0.75fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
              <Label index="01">{home.routeFrom}</Label>
            </motion.div>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-paper sm:text-6xl lg:text-7xl"
            >
              {home.title[0]}
              <br />
              {home.title[1]}
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
              className="mt-6 max-w-xl text-base leading-7 text-dim sm:text-lg"
            >
              {home.lead}
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <ZaloButton />
              <Link
                href="/cooperation"
                className="inline-flex items-center justify-center border border-amber/40 px-5 py-3 text-sm text-paper transition-colors hover:border-amber hover:text-amber"
              >
                {home.seeProcess}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <CropFrame className="bg-raised/60 p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-amber">YANG SUPPLY</p>
              <dl className="mt-4 divide-y divide-amber/15">
                {home.rows.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-dim">{row.label}</dt>
                    <dd className="text-right text-sm text-paper">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-5 text-dim">{home.noteCaption}</p>
            </CropFrame>
          </motion.div>
        </div>
        <RouteLine from={home.routeFrom} to={home.routeTo} />
      </section>

      <section className="border-t border-amber/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Label>{home.valuesTitle}</Label>
          </Reveal>
          <div className="mt-8 grid gap-px bg-amber/15 sm:grid-cols-3">
            {home.values.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="bg-ink">
                <article className="h-full px-0 py-6 sm:px-6 sm:first:pl-0">
                  <p className="font-display text-sm text-amber">0{index + 1}</p>
                  <h2 className="mt-3 font-display text-2xl text-paper">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-dim">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-amber/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal className="max-w-2xl">
            <Label>{home.audienceTitle}</Label>
            <p className="mt-4 text-base leading-7 text-dim">{home.audienceBody}</p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {home.audience.map((name, index) => (
              <Reveal key={name} delay={index * 0.05}>
                <div className="border border-amber/20 px-4 py-5 transition-colors hover:border-amber/60">
                  <p className="font-display text-lg text-paper">{name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-amber/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Label>{home.seriesTitle}</Label>
              <p className="mt-4 max-w-xl text-sm leading-6 text-dim">{home.seriesLead}</p>
            </div>
            <Link href="/products" className="text-sm text-amber hover:text-amber-soft">
              {home.seeProducts} →
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-amber/15 border-y border-amber/15">
            {series.map((item, index) => {
              const text = item[lang];
              return (
                <li key={item.id}>
                  <Link
                    href={`/products#${item.id}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[3rem_5rem_1fr_auto]"
                  >
                    <span className="font-display text-sm text-amber">0{index + 1}</span>
                    <span className="hidden sm:block">
                      <ProductArt id={item.id} alt={text.name} size="sm" />
                    </span>
                    <span>
                      <span className="block font-display text-xl text-paper transition-colors group-hover:text-amber">
                        {text.name}
                      </span>
                      <span className="mt-1 block text-sm text-dim">{text.summary}</span>
                    </span>
                    <span className="text-amber transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-amber/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Label>{home.processTitle}</Label>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-dim">{home.processLead}</p>
          </Reveal>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {home.steps.map((step, index) => (
              <li key={step}>
                <Reveal delay={index * 0.05} className="h-full border border-amber/20 p-4">
                  <p className="font-display text-sm text-amber">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-6 text-paper">{step}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Link href="/cooperation" className="mt-6 inline-block text-sm text-amber hover:text-amber-soft">
            {home.seeProcess} →
          </Link>
        </div>
      </section>

      <section className="border-t border-amber/15 bg-raised">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="font-display text-3xl text-paper sm:text-4xl">{home.ctaTitle}</h2>
            <p className="mt-3 text-sm text-dim">{home.ctaBody}</p>
            <a
              href={contacts.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-display text-2xl tracking-wide text-amber hover:text-amber-soft"
            >
              {contacts.zalo}
            </a>
          </div>
          <ZaloButton />
        </div>
      </section>
    </div>
  );
}
