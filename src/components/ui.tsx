"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { contacts } from "@/lib/content";
import { useLanguage } from "@/components/language";

const ease = [0.22, 1, 0.36, 1] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-block font-display text-[12px] font-bold uppercase leading-none tracking-[0.18em] text-paper transition-colors hover:text-amber sm:text-[13px] sm:tracking-[0.26em] ${className}`}
    >
      YANG SUPPLY
    </Link>
  );
}

export function Label({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-amber">
      {index ? <span className="font-display tracking-[0.18em]">{index}</span> : null}
      <span className="h-px w-8 bg-amber/80" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

export function CropFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-amber/25 ${className}`}>
      <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-amber" />
      <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t border-amber" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-amber" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-amber" />
      {children}
    </div>
  );
}

export function ZaloButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <motion.a
      href={contacts.zaloUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center bg-amber px-5 py-3 text-sm font-medium tracking-wide text-ink ${className}`}
    >
      {t.zaloAdd}
    </motion.a>
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
    <button
      type="button"
      onClick={onCopy}
      className="text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-amber"
    >
      {done ? t.copied : t.copy}
    </button>
  );
}

export function RouteLine({ from, to }: { from: string; to: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 pb-12 md:px-8">
      <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-dim">{from}</span>
      <div className="relative h-px flex-1 bg-amber/35">
        {reduce ? (
          <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 bg-amber" />
        ) : (
          <motion.span
            className="absolute top-1/2 size-1.5 -translate-y-1/2 bg-amber"
            animate={{ left: ["0%", "calc(100% - 6px)"] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        )}
      </div>
      <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-dim">{to}</span>
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
