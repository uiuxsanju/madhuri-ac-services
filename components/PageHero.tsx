import type { ReactNode } from "react";
import { CalendarCheck } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import type { Crumb } from "@/lib/seo";

type Props = {
  crumbs: Crumb[];
  title: string;
  intro?: ReactNode;
  eyebrow?: string;
  service?: string;
  aside?: ReactNode;
  showCtas?: boolean;
};

export default function PageHero({ crumbs, title, intro, eyebrow, service, aside, showCtas = true }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div className="circuit-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <div className={`container-page grid grid-cols-1 items-center gap-8 py-8 sm:py-12 lg:py-14 ${aside ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}>
        <div className="max-w-3xl">
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow mb-3 !text-brand-200">{eyebrow}</p>}
          <h1 className="text-[1.85rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">{title}</h1>
          {intro && <div className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">{intro}</div>}
          {showCtas && (
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a href="#booking" className="btn btn-primary w-full sm:w-auto" data-book-service={service}>
                <CalendarCheck className="h-5 w-5" aria-hidden="true" /> BOOK SERVICE
              </a>
              <CallButton label="CALL NOW" className="w-full sm:w-auto" />
              <WhatsAppButton label="WHATSAPP US" service={service} className="w-full sm:w-auto" />
            </div>
          )}
        </div>
        {aside && <div className="hidden lg:block">{aside}</div>}
      </div>
    </section>
  );
}
