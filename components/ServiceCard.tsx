import Link from "next/link";
import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import ServiceVisual from "./ServiceVisual";
import WhatsAppIcon from "./WhatsAppIcon";
import { serviceHref, type Service } from "@/data/services";
import { BUSINESS } from "@/lib/site";
import { serviceEnquiryLink } from "@/lib/whatsapp";

type Props = { service: Service; headingLevel?: "h3" | "h4" };

export default function ServiceCard({ service, headingLevel = "h3" }: Props) {
  const H = headingLevel;
  const href = serviceHref(service);
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        <ServiceVisual service={service} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <ServiceIcon name={service.icon} className="h-5 w-5" />
          </span>
          <H className="text-[1.08rem] leading-snug font-bold text-navy-900">
            <Link href={href} className="hover:text-brand-600">
              {service.name}
            </Link>
          </H>
        </div>
        <p className="mb-5 flex-1 text-[0.94rem] leading-relaxed text-muted">{service.shortDescription}</p>

        <div className="grid grid-cols-2 gap-2">
          <Link href={href} className="btn btn-outline btn-sm" aria-label={`View ${service.name}`}>
            View Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href="#booking" data-book-service={service.name} className="btn btn-primary btn-sm" aria-label={`Book ${service.name}`}>
            <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Book
          </a>
          <a href={BUSINESS.tel} className="btn btn-sm border border-brand-100 bg-brand-50 text-brand-700 hover:bg-brand-100" aria-label={`Call about ${service.name}`}>
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> Call
          </a>
          <a
            href={serviceEnquiryLink(service.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm border border-wa-500/30 bg-wa-500/10 text-wa-700 hover:bg-wa-500/20"
            aria-label={`WhatsApp about ${service.name}`}
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
