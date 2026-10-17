"use client";

import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Container, CopyButton, Kicker, Reveal, ZaloButton } from "@/components/ui";

export function ContactPage() {
  const { t } = useLanguage();
  const page = t.contact;

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

      <Container className="mt-12 grid gap-14 border-t border-line py-12 md:mt-16 md:py-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Kicker>{page.zaloRole}</Kicker>
          <a
            href={contacts.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-under mt-6 inline-block font-display text-[clamp(2.6rem,7vw,4.25rem)] leading-none"
          >
            {contacts.zalo}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ZaloButton />
            <CopyButton value={contacts.zalo} />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Kicker>{page.emailRole}</Kicker>
          <ul className="mt-4">
            {contacts.emails.map((person) => (
              <li key={person.email} className="flex flex-col gap-3 border-b border-line py-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <p className="font-display text-[1.7rem] leading-tight">{person.name}</p>
                  <a href={`mailto:${person.email}`} className="link-under mt-1 inline-block break-all text-sm text-mute">
                    {person.email}
                  </a>
                </div>
                <CopyButton value={person.email} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>

      <Container className="border-t border-line py-14 md:py-20">
        <Reveal>
          <Kicker>{page.addressLabel}</Kicker>
          <p className="mt-5 font-display text-4xl leading-tight md:text-5xl">{page.address}</p>
        </Reveal>
      </Container>
    </div>
  );
}
