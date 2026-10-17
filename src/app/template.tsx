"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useLanguage } from "@/components/language";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { lang } = useLanguage();
  const opacity = useMotionValue(1);
  const previous = useRef(lang);

  useEffect(() => {
    if (previous.current === lang) return;
    previous.current = lang;
    if (reduce) return;
    opacity.set(0.55);
    const controls = animate(opacity, 1, { duration: 0.35, ease: "easeOut" });
    return () => controls.stop();
  }, [lang, opacity, reduce]);

  if (reduce) return <div>{children}</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease }}>
      <motion.div style={{ opacity }}>{children}</motion.div>
    </motion.div>
  );
}
