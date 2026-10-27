"use client";

import Link from "next/link";
import { contacts } from "@/lib/content";
import { guideList } from "@/lib/guides";
import { useLanguage } from "@/components/language";
import { Container, Wordmark } from "@/components/ui";

export function Footer() {
  const { copyLang, market, t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-[72px] text-[14px] leading-[1.7] sm:grid-cols-2 md:grid-cols-4 md:py-[80px]">
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
        <nav aria-label="Guides" className="flex flex-col gap-2">
          {guideList.map((guide) => (
            <Link key={guide.slug} href={guide.href} className="link-under w-fit text-ink">
              {guide.shortTitle[copyLang]}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          {market.contact === "zalo" ? (
            <a href={contacts.zaloUrl} target="_blank" rel="noopener noreferrer" className="link-under w-fit">
              Zalo {contacts.zalo}
            </a>
          ) : null}
          {contacts.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="link-under w-fit break-all text-mute">
              {email}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
