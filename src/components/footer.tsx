"use client";

import Link from "next/link";
import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Container, Wordmark } from "@/components/ui";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_1.1fr] md:py-16">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-xs text-sm leading-6 text-mute">{t.footer.line}</p>
          <p className="mt-3 text-sm text-ink">{t.footer.address}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2.5 text-[13px]">
          {t.nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-under w-fit text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2.5 text-sm">
          <a href={contacts.zaloUrl} target="_blank" rel="noopener noreferrer" className="link-under w-fit">
            Zalo {contacts.zalo}
          </a>
          {contacts.emails.map((person) => (
            <a key={person.email} href={`mailto:${person.email}`} className="link-under w-fit break-all text-mute">
              {person.email}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
