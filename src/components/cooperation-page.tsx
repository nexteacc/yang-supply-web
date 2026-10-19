"use client";

import { useLanguage } from "@/components/language";
import { Container, PageIntro, ZaloButton } from "@/components/ui";

export function CooperationPage() {
  const { t } = useLanguage();
  const page = t.cooperation;

  return (
    <div>
      <PageIntro kicker={page.kicker} title={page.title} lead={page.lead} />

      <Container className="flex flex-col gap-[72px] py-[72px] md:gap-[120px] md:py-[120px]">
        <ol className="flex flex-col gap-12 md:gap-16">
          {page.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-12 md:gap-6">
              <span className="eyebrow pt-2 text-mute md:col-span-2">0{index + 1}</span>
              <div className="md:col-span-7">
                <h2 className="heading-2">{step.title}</h2>
                <p className="mt-4 max-w-[60ch] text-mute">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid gap-16 md:grid-cols-12 md:gap-6">
          <section className="md:col-span-6">
            <h2 className="heading-3">{page.qualityTitle}</h2>
            <p className="heading-2 mt-4">{page.qualityFigure}</p>
            <p className="mt-6 max-w-[60ch] text-mute">{page.qualityBody}</p>
          </section>
          <section className="md:col-span-6">
            <h2 className="heading-3">{page.payTitle}</h2>
            <p className="heading-2 mt-4">{page.payFigure}</p>
            <p className="mt-6 max-w-[60ch] text-mute">{page.payBody}</p>
          </section>
        </div>

        <section>
          <h2 className="heading-2">{page.notesTitle}</h2>
          <ul className="mt-8 flex max-w-[60ch] flex-col gap-4">
            {page.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="heading-2">{page.faqTitle}</h2>
          <dl className="mt-8 flex max-w-[65ch] flex-col gap-10">
            {page.faq.map((item) => (
              <div key={item.q}>
                <dt>
                  <h3 className="heading-3">{item.q}</h3>
                </dt>
                <dd className="mt-3 text-mute">{item.a}</dd>
              </div>
            ))}
          </dl>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: page.faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              }).replace(/</g, "\\u003c"),
            }}
          />
        </section>

        <div>
          <ZaloButton />
        </div>
      </Container>
    </div>
  );
}
