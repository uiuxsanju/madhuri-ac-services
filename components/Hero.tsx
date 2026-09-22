import { CalendarCheck, CheckCircle2, Snowflake, Zap } from "lucide-react";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import HeroMedia from "./HeroMedia";

const POINTS = ["AC service, repair & installation", "Electrical repair & wiring", "Homes, offices & commercial spaces"];

export default function Hero({ image }: { image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white" aria-labelledby="hero-title">
      <div className="circuit-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-48 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

      <div className="container-page grid grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-100 sm:text-sm">
            <span className="flex">
              <Snowflake className="h-4 w-4 text-brand-200" aria-hidden="true" />
              <Zap className="-ml-1 h-4 w-4 fill-spark-400 text-spark-400" aria-hidden="true" />
            </span>
            AC &amp; Electrical Services · Visakhapatnam
          </p>

          <h1 id="hero-title" className="text-[2rem] leading-[1.1] font-extrabold sm:text-5xl lg:text-[3.35rem]">
            Professional <span className="text-brand-200">AC</span> &amp; <span className="text-spark-400">Electrical</span> Services in Visakhapatnam
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Reliable AC repair, cleaning, installation, maintenance and electrical services for homes, offices and commercial spaces.
          </p>

          <ul className="mt-5 grid gap-2 text-[0.95rem] text-white/90">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-wa-500" aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#booking" className="btn btn-primary w-full sm:w-auto">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" /> BOOK SERVICE
            </a>
            <CallButton label="CALL NOW" className="w-full sm:w-auto" />
            <WhatsAppButton label="WHATSAPP US" className="w-full sm:w-auto" />
          </div>
        </div>

        <div className="relative">
          <HeroMedia image={image} />
        </div>
      </div>
    </section>
  );
}
