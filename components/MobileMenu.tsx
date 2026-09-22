"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, MapPin, X } from "lucide-react";
import Logo from "./Logo";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import { BUSINESS, NAV_LINKS } from "@/lib/site";

type Props = { open: boolean; onClose: () => void; logoSrc?: string; isActive: (href: string) => boolean };

export default function MobileMenu({ open, onClose, logoSrc, isActive }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Simple focus trap
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden" id="mobile-menu">
          <motion.div
            className="absolute inset-0 bg-navy-950/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex h-[72px] items-center justify-between border-b border-line px-4">
              <Logo src={logoSrc} height={50} />
              <button
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-2 py-3">
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`flex min-h-[52px] items-center justify-between rounded-xl px-3 text-[1.05rem] font-semibold ${
                        isActive(l.href) ? "bg-brand-50 text-brand-600" : "text-navy-900 hover:bg-surface"
                      }`}
                    >
                      {"mobileLabel" in l ? l.mobileLabel : l.label}
                      <ChevronRight className="h-5 w-5 text-muted" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <CallButton className="w-full" />
              <WhatsAppButton className="w-full" />
              <p className="flex items-start gap-2 pt-1 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                {BUSINESS.address.line1}, {BUSINESS.address.line2}, {BUSINESS.address.city}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
