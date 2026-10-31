"use client";

import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Container, PageIntro, ZaloButton } from "@/components/ui";

export function CooperationPage() {
  const { market, t } = useLanguage();
  const page = t.cooperation;
  const quality = page.qualityBody ? (
    <section>
      <h2 className="heading-3">{page.qualityTitle}</h2>
      <p className="mt-4 max-w-[60ch] text-mute">{page.qualityBody}</p>
    </section>
  ) : null;
  // US order is intro → steps → quotation terms → payment → lead time.
  // The existing Quality block stays on the page, after those blocks.
  const qualityAfterTerms = market.id === "en-us";

  return (
    <div>
      <PageIntro kicker={page.kicker} title={page.title} lead={page.lead} />

      <Container className="flex flex-col gap-[72px] py-[72px] md:gap-[120px] md:py-[120px]">
        {page.steps.length > 0 ? (
        <ol className="flex flex-col gap-12 md:gap-16">
          {page.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-12 md:gap-6">
              <span className="eyebrow pt-2 text-mute md:col-span-2">0{index + 1}</span>
              <div className="md:col-span-7">
                <h2 className="heading-2">{step.title}</h2>
                {step.body ? (
                  <p className="mt-4 max-w-[60ch] text-mute">{step.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        ) : null}

        {qualityAfterTerms ? null : quality}

        {page.notes.length > 0 ? (
        <section>
          <h2 className="heading-2">{page.notesTitle}</h2>
          <ul className="mt-8 flex max-w-[60ch] flex-col gap-4">
            {page.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
        ) : null}

        {page.blocksAfterNotes.map((block) => (
          <section key={block.title}>
            <h2 className="heading-2">{block.title}</h2>
            <p className="mt-8 max-w-[60ch]">{block.body}</p>
          </section>
        ))}

        {qualityAfterTerms ? quality : null}

        <div className="flex flex-col items-start gap-6">
          <ZaloButton />
          {market.contact === "email"
            ? contacts.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="link-under break-all text-[14px]">
                  {email}
                </a>
              ))
            : null}
        </div>
      </Container>
    </div>
  );
}
