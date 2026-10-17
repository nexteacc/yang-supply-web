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
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-10 ${className}`}>{children}</div>;
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-block shrink-0 whitespace-nowrap text-[16px] font-bold uppercase leading-none tracking-[0.14em] text-ink md:text-[22px] ${className}`}
    >
      Yang Supply
    </Link>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-mute">{children}</p>;
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <Container className="py-[72px] md:py-[120px]">{children}</Container>
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
    <Link href={href} className={`link-under text-ink ${className}`}>
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
    <button type="button" onClick={onCopy} className="link-under cursor-pointer text-[14px] text-mute">
      {done ? t.copied : t.copy}
    </button>
  );
}

export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <Container className="pt-[72px] md:pt-[120px]">
      <Kicker>{kicker}</Kicker>
      <h1 className="heading-1 mt-4">{title}</h1>
      <p className="mt-6 max-w-[60ch] text-mute">{lead}</p>
    </Container>
  );
}
