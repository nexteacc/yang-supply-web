"use client";

import Link from "next/link";
import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Container, Wordmark } from "@/components/ui";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-[72px] text-[14px] leading-[1.7] md:grid-cols-3 md:py-[80px]">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-[28ch] text-mute">{t.footer.line}</p>
          <p className="mt-2 text-ink">{t.footer.address}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          {t.nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-under w-fit text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
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
