"use client";

import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Container, CopyButton, PageIntro, ZaloButton } from "@/components/ui";

export function ContactPage() {
  const { t } = useLanguage();
  const page = t.contact;

  return (
    <div>
      <PageIntro kicker={page.kicker} title={page.title} lead={page.lead} />

      <Container className="grid items-start gap-[72px] py-[72px] md:grid-cols-12 md:gap-6 md:py-[120px]">
        <div className="flex flex-col gap-16 md:col-span-6">
          <section>
            <h2 className="heading-2">{page.zaloRole}</h2>
            <a
              href={contacts.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="heading-3 link-under mt-6 inline-block"
            >
              {contacts.zalo}
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <ZaloButton />
              <CopyButton value={contacts.zalo} />
            </div>
          </section>
          <section>
            <h2 className="heading-2">{page.addressLabel}</h2>
            <p className="heading-3 mt-4">{page.address}</p>
          </section>
        </div>

        <section className="md:col-span-6">
          <h2 className="heading-2">{page.emailRole}</h2>
          <ul className="mt-6 flex flex-col gap-8">
            {contacts.emails.map((person) => (
              <li key={person.email}>
                <p className="heading-3">{person.name}</p>
                <a href={`mailto:${person.email}`} className="link-under mt-1 inline-block break-all text-[14px] text-mute">
                  {person.email}
                </a>
                <div className="mt-2">
                  <CopyButton value={person.email} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
