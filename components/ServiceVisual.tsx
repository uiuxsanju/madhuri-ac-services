"use client";

import { useState } from "react";
import Image from "next/image";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/data/services";

const TONES: Record<Service["category"], string> = {
  "ac-cleaning": "from-brand-600 to-navy-900",
  "ac-gas": "from-sky-600 to-navy-900",
  "ac-installation": "from-brand-500 to-navy-800",
  "ac-repair": "from-navy-700 to-navy-950",
  "ac-maintenance": "from-brand-700 to-navy-900",
  electrical: "from-navy-800 to-navy-950",
};

type Props = { service: Pick<Service, "image" | "alt" | "icon" | "category" | "name">; className?: string; sizes?: string; priority?: boolean };

/**
 * Service image area. Shows the real photo if one exists in /public/images/services/<slug>.webp,
 * else a curated Unsplash photo; if that fails to load, a branded icon panel.
 */
export default function ServiceVisual({ service, className = "aspect-[16/10]", sizes = "(min-width:1280px) 300px, (min-width:768px) 45vw, 100vw", priority }: Props) {
  const [failed, setFailed] = useState(false);
  if (service.image && !failed) {
    return (
      <div className={`relative overflow-hidden bg-surface ${className}`}>
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" aria-hidden="true" />
      </div>
    );
  }
  const isElectrical = service.category === "electrical";
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${TONES[service.category]} ${className}`} role="img" aria-label={service.alt}>
      <div className="circuit-bg absolute inset-0" aria-hidden="true" />
      <svg className="absolute -right-6 -bottom-6 h-40 w-40 text-white/[0.06]" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className={`absolute top-0 left-0 h-1 w-16 ${isElectrical ? "bg-spark-400" : "bg-accent-500"}`} aria-hidden="true" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <ServiceIcon name={service.icon} className={`h-8 w-8 ${isElectrical ? "text-spark-400" : "text-white"}`} strokeWidth={1.75} />
        </span>
      </div>
    </div>
  );
}
