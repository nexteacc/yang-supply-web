"use client";

import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";
import { CopyButton, CropFrame, Label, Reveal, ZaloButton } from "@/components/ui";

export function ContactPage() {
  const { t } = useLanguage();
  const page = t.contact;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <Label index={page.kicker}>{page.title}</Label>
        <h1 className="mt-5 font-display text-4xl text-paper sm:text-6xl">{page.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-dim">{page.lead}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <CropFrame className="h-full p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber">{page.zaloRole}</p>
            <a
              href={contacts.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-display text-4xl tracking-wide text-paper transition-colors hover:text-amber sm:text-5xl"
            >
              {contacts.zalo}
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ZaloButton />
              <CopyButton value={contacts.zalo} />
            </div>
          </CropFrame>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="h-full border border-amber/25 p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber">{page.emailRole}</p>
            <ul className="mt-2">
              {contacts.emails.map((person) => (
                <li key={person.email} className="flex items-end justify-between gap-4 border-b border-amber/15 py-4">
                  <div>
                    <p className="font-display text-xl text-paper">{person.name}</p>
                    <a href={`mailto:${person.email}`} className="mt-1 block text-sm text-dim hover:text-amber">
                      {person.email}
                    </a>
                  </div>
                  <CopyButton value={person.email} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <div className="border border-amber/25 px-6 py-8 sm:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-amber">{page.addressLabel}</p>
          <p className="mt-3 font-display text-3xl text-paper sm:text-4xl">{page.address}</p>
        </div>
      </Reveal>
    </div>
  );
}
