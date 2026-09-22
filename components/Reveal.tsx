"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "up" | "scale";
  as?: "div" | "li" | "section";
};

const VARIANTS: Record<NonNullable<Props["variant"]>, Variants> = {
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  up: { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } },
};

/** Subtle, fast section reveal. Respects prefers-reduced-motion via MotionConfig in layout. */
export default function Reveal({ children, className, delay = 0, variant = "up", as = "div" }: Props) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {children}
    </M>
  );
}
