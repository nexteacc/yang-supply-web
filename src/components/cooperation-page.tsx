"use client";

import { useLanguage } from "@/components/language";
import { Container, Kicker, Reveal, ZaloButton } from "@/components/ui";

export function CooperationPage() {
  const { t } = useLanguage();
  const page = t.cooperation;

  return (
    <div>
      <Container className="pb-4 pt-16 md:pt-24">
        <Reveal>
          <Kicker>
            <span className="mr-4">{page.kicker}</span>
            {page.title}
          </Kicker>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.12]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-mute">{page.lead}</p>
        </Reveal>
      </Container>

      <Container className="mt-12 md:mt-16">
        <ol className="border-t border-line">
          {page.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[3.25rem_1fr] gap-4 border-b border-line py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 md:py-10">
              <span className="pt-2 text-[11px] tracking-[0.22em] text-mute">0{index + 1}</span>
              <Reveal>
                <h2 className="font-display text-[1.85rem] leading-tight md:text-3xl">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-mute">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid border-t border-line md:grid-cols-2 md:divide-x md:divide-line">
          <Reveal className="py-10 md:py-14 md:pr-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-mute">{page.feeTitle}</p>
            <p className="mt-6 font-display text-6xl font-medium leading-none md:text-7xl">{page.feeFigure}</p>
            <p className="mt-6 max-w-md text-sm leading-6 text-mute">{page.feeBody}</p>
          </Reveal>
          <Reveal delay={0.06} className="border-t border-line py-10 md:border-t-0 md:py-14 md:pl-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-mute">{page.payTitle}</p>
            <p className="mt-6 font-display text-6xl font-medium leading-none md:text-7xl">{page.payFigure}</p>
            <p className="mt-6 max-w-md text-sm leading-6 text-mute">{page.payBody}</p>
          </Reveal>
        </div>

        <section className="mt-16 md:mt-20">
          <Kicker>{page.notesTitle}</Kicker>
          <ul className="mt-6 border-t border-line">
            {page.notes.map((note) => (
              <li key={note} className="border-b border-line py-5 text-sm leading-6 text-ink">
                {note}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 mb-16 md:mb-24">
          <ZaloButton />
        </div>
      </Container>
    </div>
  );
}
