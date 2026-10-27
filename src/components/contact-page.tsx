"use client";

import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Container, CopyButton, PageIntro, ZaloButton } from "@/components/ui";

function EmailList({ role }: { role: string }) {
  return (
    <section>
      <h2 className="heading-2">{role}</h2>
      <ul className="mt-6 flex flex-col gap-8">
        {contacts.emails.map((email) => (
          <li key={email}>
            <a href={`mailto:${email}`} className="link-under inline-block break-all text-[14px] text-mute">
              {email}
            </a>
            <div className="mt-2">
              <CopyButton value={email} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ContactPage() {
  const { market, t } = useLanguage();
  const page = t.contact;

  if (market.id === "zh") {
    return (
      <div>
        <PageIntro kicker={page.kicker} title={page.title} lead={page.lead} />
        <Container className="flex max-w-[720px] flex-col items-start gap-16 py-[72px] md:py-[120px]">
          <div className="flex flex-col items-start gap-4">
            <a href={`mailto:${contacts.emails[0]}`} className="btn-quiet">
              {t.emailCta}
            </a>
            <a
              href={contacts.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-h-12 items-center border border-line px-6 text-[15px] font-normal text-mute"
            >
              {t.zaloAdd} {contacts.zalo}
            </a>
          </div>
          <EmailList role={page.emailRole} />
          <section>
            <h2 className="heading-2">{page.addressLabel}</h2>
            <p className="heading-3 mt-4">{page.address}</p>
          </section>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <PageIntro kicker={page.kicker} title={page.title} lead={page.lead} />

      <Container className="grid items-start gap-[72px] py-[72px] md:grid-cols-12 md:gap-6 md:py-[120px]">
        <div className="flex flex-col gap-16 md:col-span-6">
          {market.contact === "zalo" ? (
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
          ) : null}
          <section>
            <h2 className="heading-2">{page.addressLabel}</h2>
            <p className="heading-3 mt-4">{page.address}</p>
          </section>
        </div>

        <div className="md:col-span-6">
          <EmailList role={page.emailRole} />
        </div>
      </Container>
    </div>
  );
}
