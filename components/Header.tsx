"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS, NAV_LINKS } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Header({ logoSrc }: { logoSrc?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Desktop utility bar */}
      <div className="hidden bg-navy-900 text-[13px] text-brand-100 lg:block">
        <div className="container-page flex h-9 items-center justify-between">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
            {BUSINESS.address.line1}, {BUSINESS.address.line2}, {BUSINESS.address.city}
          </p>
          <div className="flex items-center gap-5">
            <a href={BUSINESS.tel} className="flex items-center gap-1.5 font-semibold text-white hover:text-brand-200">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {BUSINESS.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold text-white hover:text-wa-500">
              <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-200 supports-[backdrop-filter]:bg-white/85 ${
          scrolled ? "border-line shadow-[0_6px_24px_-12px_rgb(11_31_58/0.25)]" : "border-transparent"
        }`}
      >
        <div className={`container-page flex items-center justify-between gap-4 transition-[height] duration-200 ${scrolled ? "h-[64px]" : "h-[78px] lg:h-[88px]"}`}>
          <Logo src={logoSrc} height={scrolled ? 52 : 66} priority />

          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`relative rounded-lg px-2 py-2 text-[0.88rem] font-semibold whitespace-nowrap transition-colors 2xl:px-3 hover:text-brand-600 ${
                      isActive(l.href) ? "text-brand-600" : "text-navy-800"
                    }`}
                  >
                    {l.label}
                    {isActive(l.href) && <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-accent-500" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={BUSINESS.tel} className="btn btn-call call-live btn-sm hidden sm:inline-flex" aria-label={`Call now on ${BUSINESS.phoneDisplay}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call Now</span>
              <span className="live-dot" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-sm hidden md:inline-flex"
              aria-label="WhatsApp Madhuri Electrical"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-line text-navy-900 xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} logoSrc={logoSrc} isActive={isActive} />
    </>
  );
}
