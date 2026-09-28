import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import { BUSINESS, DIRECTIONS_URL, NAV_LINKS } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/ac-cleaning", label: "AC Cleaning" },
  { href: "/ac-repair", label: "AC Repair" },
  { href: "/ac-installation", label: "AC Installation" },
  { href: "/ac-maintenance", label: "AC Maintenance" },
  { href: "/electrical-repair", label: "Electrical Repair" },
  { href: "/electrical-wiring", label: "Electrical Wiring" },
  { href: "/service-areas", label: "Service Areas" },
];

export default function Footer({ logoSrc }: { logoSrc?: string }) {
  return (
    <footer className="bg-navy-950 text-brand-100" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">Footer</h2>
      <div className="container-page grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-16">
        <div>
          <Logo src={logoSrc} height={96} tone="light" />
          <p className="mt-4 font-display text-lg font-extrabold text-white">{BUSINESS.nameUpper}</p>
          <p className="text-sm">{BUSINESS.tagline} in {BUSINESS.address.city}</p>
          <div className="mt-5 grid gap-2.5 sm:max-w-xs">
            <CallButton label="CALL NOW" size="sm" className="w-full" />
            <WhatsAppButton label="WHATSAPP US" size="sm" className="w-full" />
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Quick Links</h3>
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center hover:text-white">
                  {"mobileLabel" in l ? l.mobileLabel : l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Services</h3>
          <ul className="space-y-1">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Contact</h3>
          <p className="text-sm text-brand-200">{BUSINESS.ownerUpper}</p>
          <a href={BUSINESS.tel} className="mt-2 flex min-h-11 items-center gap-2 text-lg font-bold text-white hover:text-brand-200">
            <Phone className="h-5 w-5 text-brand-500" aria-hidden="true" /> {BUSINESS.phoneDisplay}
          </a>
          <address className="mt-2 flex gap-2 text-sm leading-relaxed not-italic">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
            <span>
              {BUSINESS.address.line1},<br />
              {BUSINESS.address.line2}, {BUSINESS.address.city},<br />
              {BUSINESS.address.state} {BUSINESS.address.postalCode}
            </span>
          </address>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-200">
            Get Directions
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Madhuri Electrical. All Rights Reserved.</p>
          <p className="text-brand-200/70">AC &amp; Electrical Services · Visakhapatnam</p>
        </div>
      </div>
    </footer>
  );
}
