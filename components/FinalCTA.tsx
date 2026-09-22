import { CalendarCheck } from "lucide-react";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import { BUSINESS } from "@/lib/site";

export default function FinalCTA({ title = "Need AC or Electrical Service in Visakhapatnam?" }: { title?: string }) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-navy-900 px-5 py-10 text-center text-white sm:px-10 sm:py-14">
          <div className="circuit-bg absolute inset-0 -z-10" aria-hidden="true" />
          <div className="absolute -right-20 -bottom-24 -z-10 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl" aria-hidden="true" />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-2xl font-extrabold sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Call or WhatsApp {BUSINESS.name} on <a href={BUSINESS.tel} className="font-bold whitespace-nowrap text-white underline-offset-4 hover:underline">{BUSINESS.phoneDisplay}</a>.
          </p>
          <div className="mx-auto mt-7 grid max-w-md gap-3 sm:max-w-none sm:flex sm:justify-center">
            <a href="#booking" className="btn btn-primary w-full sm:w-auto">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" /> BOOK SERVICE
            </a>
            <CallButton label="CALL NOW" variant="ghost-light" className="w-full sm:w-auto" />
            <WhatsAppButton label="WHATSAPP US" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
