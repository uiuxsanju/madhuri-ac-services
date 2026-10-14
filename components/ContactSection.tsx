import { MapPin, Navigation, Phone, User } from "lucide-react";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppIcon from "./WhatsAppIcon";
import Logo from "./Logo";
import SectionHeading from "./SectionHeading";
import { BUSINESS, DIRECTIONS_URL, MAPS_EMBED_URL } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

type Props = { logoSrc?: string; headingAs?: "h1" | "h2"; title?: string; showMap?: boolean };

export default function ContactSection({ logoSrc, headingAs = "h2", title = "Contact Madhuri Electrical in Visakhapatnam", showMap = true }: Props) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-page">
        <SectionHeading id="contact-title" as={headingAs} eyebrow="Contact" title={title} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <Logo src={logoSrc} height={80} />
            <dl className="mt-6 space-y-5">
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><User className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Contact person</span></dt>
                <dd>
                  <span className="block text-xs font-semibold tracking-wider text-muted uppercase">Contact</span>
                  <span className="text-lg font-bold text-navy-900">{BUSINESS.ownerUpper}</span>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Phone className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Phone</span></dt>
                <dd>
                  <span className="block text-xs font-semibold tracking-wider text-muted uppercase">Phone</span>
                  <a href={BUSINESS.tel} className="text-lg font-bold text-navy-900 hover:text-brand-600">{BUSINESS.phoneDisplay}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-wa-500/10 text-wa-700"><WhatsAppIcon className="h-5 w-5" /><span className="sr-only">WhatsApp</span></dt>
                <dd>
                  <span className="block text-xs font-semibold tracking-wider text-muted uppercase">WhatsApp</span>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-navy-900 hover:text-wa-700">{BUSINESS.phoneDisplay}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-50 text-accent-500"><MapPin className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Address</span></dt>
                <dd>
                  <span className="block text-xs font-semibold tracking-wider text-muted uppercase">Address</span>
                  <address className="leading-relaxed font-semibold text-navy-900 not-italic">
                    {BUSINESS.address.line1},<br />
                    {BUSINESS.address.line2},<br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.postalCode}
                  </address>
                </dd>
              </div>
            </dl>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <CallButton label="CALL NOW" className="w-full" />
              <WhatsAppButton label="WHATSAPP US" className="w-full" />
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                <Navigation className="h-[18px] w-[18px]" aria-hidden="true" /> DIRECTIONS
              </a>
            </div>
          </div>

          {showMap && MAPS_EMBED_URL ? (
            <div className="card flex min-h-[340px] flex-col overflow-hidden">
              <iframe
                title="Madhuri Electrical location on Google Maps"
                src={MAPS_EMBED_URL}
                className="min-h-[300px] w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="border-t border-line p-4">
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-call btn-sm w-full sm:w-auto">
                  <Navigation className="h-4 w-4" aria-hidden="true" /> GET DIRECTIONS
                </a>
              </div>
            </div>
          ) : showMap ? (
            <div className="relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[18px] bg-navy-900 p-6 text-white sm:p-8">
              <div className="circuit-bg absolute inset-0 -z-10" aria-hidden="true" />
              <div className="absolute -top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
              <span className="mb-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent-500 text-white shadow-lg">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="mt-10 text-sm font-semibold tracking-wider text-brand-200 uppercase">Find us</p>
              <p className="mt-1 font-display text-2xl font-extrabold">Chaitanya Nagar, Maddilapalem</p>
              <p className="mt-1 text-brand-100">{BUSINESS.address.line1}, {BUSINESS.address.line2}, {BUSINESS.address.city}</p>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-call mt-6 w-full sm:w-auto sm:self-start">
                <Navigation className="h-5 w-5" aria-hidden="true" /> GET DIRECTIONS
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
