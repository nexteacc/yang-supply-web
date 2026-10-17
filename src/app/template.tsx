"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useLanguage } from "@/components/language";

const ease = [0.22, 1, 0.36, 1] as const;

/** True after the first client mount, so the first paint (SSR and no-JS) is never faded out. */
let hasEntered = false;

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { lang } = useLanguage();
  const opacity = useMotionValue(1);
  const previous = useRef(lang);
  const entrance = hasEntered && !reduce;

  useEffect(() => {
    hasEntered = true;
  }, []);

  useEffect(() => {
    if (previous.current === lang) return;
    previous.current = lang;
    if (reduce) return;
    opacity.set(0.7);
    const controls = animate(opacity, 1, { duration: 0.35, ease: "easeOut" });
    return () => controls.stop();
  }, [lang, opacity, reduce]);

  const body = <motion.div style={{ opacity }}>{children}</motion.div>;

  if (!entrance) return body;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease }}>
      {body}
    </motion.div>
  );
}
