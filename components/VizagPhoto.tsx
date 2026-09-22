"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin } from "lucide-react";

type Props = { src: string; alt: string; caption?: string; className?: string; sizes?: string };

/** Visakhapatnam photo with a location caption. Hides itself if the photo can't load. */
export default function VizagPhoto({ src, alt, caption = "Visakhapatnam", className = "aspect-[16/10]", sizes = "(min-width:1024px) 50vw, 100vw" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={`relative overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} onError={() => setFailed(true)} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden="true" />
      <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-sm font-bold text-navy-900 shadow">
        <MapPin className="h-4 w-4 text-accent-500" aria-hidden="true" /> {caption}
      </figcaption>
    </figure>
  );
}
