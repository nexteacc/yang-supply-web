"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1320px] px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`link-under inline-block shrink-0 whitespace-nowrap text-[12px] font-semibold uppercase leading-none tracking-[0.26em] text-ink sm:text-[13px] sm:tracking-[0.34em] ${className}`}
    >
      YANG SUPPLY
    </Link>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.28em] text-mute">{children}</p>;
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-line ${className}`}>
      <Container className="py-16 md:py-24">{children}</Container>
    </section>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-under text-[13px] text-ink ${className}`}>
      {children}
    </Link>
  );
}

export function ZaloButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a href={contacts.zaloUrl} target="_blank" rel="noopener noreferrer" className={`btn-quiet ${className}`}>
      {t.zaloAdd}
    </a>
  );
}

export function CopyButton({ value }: { value: string }) {
  const { t } = useLanguage();
  const [done, setDone] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      window.setTimeout(() => setDone(false), 1600);
    } catch {
      setDone(false);
    }
  }

  return (
    <button type="button" onClick={onCopy} className="link-under cursor-pointer text-[11px] uppercase tracking-[0.18em] text-mute">
      {done ? t.copied : t.copy}
    </button>
  );
}

/** Layout wrapper. Content stays visible without JS, motion preferences, or scroll observers. */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
