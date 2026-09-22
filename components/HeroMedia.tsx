"use client";

import Image from "next/image";
import { useState } from "react";
import { Cable, Gauge, MapPin, Wind } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

/** Hero photo with floating service chips; falls back to the SVG illustration if the photo can't load. */
export default function HeroMedia({ image }: { image?: string }) {
  const [failed, setFailed] = useState(false);
  if (!image || failed) return <HeroIllustration />;
  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl">
        <Image
          src={image}
          alt="Technician servicing a split AC in a Visakhapatnam apartment with a sea view"
          fill
          priority
          sizes="(min-width:1024px) 45vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/5 to-transparent" aria-hidden="true" />
        <p className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-navy-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur sm:text-sm">
          <MapPin className="h-4 w-4 text-accent-500" aria-hidden="true" /> Visakhapatnam, Andhra Pradesh
        </p>
      </div>
      <div className="absolute top-4 -left-2 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy-900 shadow-lg sm:-left-5 sm:text-sm" aria-hidden="true">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600"><Wind className="h-4 w-4" /></span>
        AC Deep Cleaning
      </div>
      <div className="absolute -right-2 bottom-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy-900 shadow-lg sm:-right-5 sm:text-sm" aria-hidden="true">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-red-50 text-accent-500"><Gauge className="h-4 w-4" /></span>
        Gas Charging
      </div>
      <div className="absolute bottom-16 left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy-900 shadow-lg sm:text-sm" aria-hidden="true">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-amber-50 text-amber-600"><Cable className="h-4 w-4" /></span>
        Electrical Wiring
      </div>
    </div>
  );
}
