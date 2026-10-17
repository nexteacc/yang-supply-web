"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/language";
import { CropFrame, Label, Reveal, ZaloButton } from "@/components/ui";

export function CooperationPage() {
  const { t } = useLanguage();
  const page = t.cooperation;
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <Label index={page.kicker}>{page.title}</Label>
        <h1 className="mt-5 font-display text-4xl text-paper sm:text-6xl">{page.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-dim">{page.lead}</p>
      </Reveal>

      <ol className="relative mt-14">
        <motion.span
          aria-hidden
          className="absolute bottom-4 left-[1.15rem] top-2 w-px origin-top bg-amber/40"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        {page.steps.map((step, index) => (
          <li key={step.title} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-10 sm:gap-6">
            <span className="relative z-10 grid size-10 place-items-center bg-ink font-display text-sm text-amber ring-1 ring-amber/50">
              0{index + 1}
            </span>
            <Reveal className="pt-1">
              <h2 className="font-display text-2xl text-paper">{step.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-dim">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Reveal>
          <CropFrame className="h-full p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber">{page.feeTitle}</p>
            <p className="mt-4 font-display text-5xl text-paper">{page.feeFigure}</p>
            <p className="mt-4 text-sm leading-6 text-dim">{page.feeBody}</p>
          </CropFrame>
        </Reveal>
        <Reveal delay={0.06}>
          <CropFrame className="h-full p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber">{page.payTitle}</p>
            <p className="mt-4 font-display text-5xl text-paper">{page.payFigure}</p>
            <p className="mt-4 text-sm leading-6 text-dim">{page.payBody}</p>
          </CropFrame>
        </Reveal>
      </div>

      <section className="mt-14">
        <Label>{page.notesTitle}</Label>
        <ul className="mt-4">
          {page.notes.map((note) => (
            <li key={note} className="flex gap-3 border-t border-amber/15 py-4 text-sm leading-6 text-paper">
              <span className="mt-2 size-1.5 shrink-0 bg-amber" aria-hidden />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <ZaloButton />
      </div>
    </div>
  );
}
