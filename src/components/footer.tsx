"use client";

import Link from "next/link";
import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { Wordmark } from "@/components/ui";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-amber/15">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-6 text-dim">{t.footer.line}</p>
          <p className="mt-3 text-sm text-paper">{t.footer.address}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {t.nav.map((item) => (
            <Link key={item.href} href={item.href} className="w-fit text-paper/90 hover:text-amber">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a href={contacts.zaloUrl} target="_blank" rel="noopener noreferrer" className="w-fit hover:text-amber">
            Zalo {contacts.zalo}
          </a>
          {contacts.emails.map((person) => (
            <a key={person.email} href={`mailto:${person.email}`} className="w-fit text-dim hover:text-amber">
              {person.email}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
