"use client";

import Link from "next/link";
import { contacts } from "@/lib/content";
import { guideList } from "@/lib/guides";
import { useLanguage } from "@/components/language";
import { Container, Wordmark } from "@/components/ui";

const linkList = "flex flex-col items-start gap-4";
const linkItem = "link-under w-fit leading-[2]";

export function Footer() {
  const { market, t } = useLanguage();
  return (
    <footer className="border-t border-line text-left text-[14px]">
      <Container className="grid grid-cols-1 items-start gap-16 py-20 md:grid-cols-3 md:py-24 lg:gap-20 lg:py-32">
        <div className="flex flex-col items-start gap-4">
          <Wordmark />
          <p className="max-w-[28ch] leading-[2] text-mute">{t.footer.line}</p>
          {t.footer.address ? (
            <p className="leading-[2] text-ink">{t.footer.address}</p>
          ) : null}
        </div>
        <div className="flex flex-col items-start gap-16">
          <nav aria-label="Footer" className={linkList}>
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkItem} text-ink`}>
                {item.label}
              </Link>
            ))}
          </nav>
          {market.id === "vi" ? (
            <nav aria-label="Guides" className={linkList}>
              {guideList.map((guide) => (
                <Link key={guide.slug} href={guide.href} className={`${linkItem} text-ink`}>
                  {guide.shortTitle.vi}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        <div className={linkList}>
          {market.contact === "zalo" ? (
            <a
              href={contacts.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkItem}
            >
              Zalo {contacts.zalo}
            </a>
          ) : null}
          {contacts.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className={`${linkItem} break-all text-mute`}
            >
              {email}
            </a>
          ))}
        </div>
      </Container>
      <div>
        <Container className="py-12 md:py-16">
          <p className="leading-[2] text-mute">© YANG SUPPLY</p>
        </Container>
      </div>
    </footer>
  );
}
