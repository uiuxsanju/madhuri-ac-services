"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { BOOKING_OPTIONS } from "@/data/services";
import { BUSINESS } from "@/lib/site";
import { bookingLink, type BookingDetails } from "@/lib/whatsapp";

type Fields = Required<BookingDetails>;
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", phone: "", service: "", location: "", date: "", message: "" };

/** Optional: set NEXT_PUBLIC_BOOKING_ENDPOINT (e.g. a Formspree / Web3Forms / own API URL) to receive form submissions. */
const ENDPOINT = process.env.NEXT_PUBLIC_BOOKING_ENDPOINT;

const PHONE_RE = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!PHONE_RE.test(f.phone.replace(/[\s-]/g, ""))) e.phone = "Enter a valid 10-digit mobile number.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.location.trim().length < 2) e.location = "Please enter your area / location.";
  return e;
}

function matchOption(serviceName: string): { service: string; note?: string } {
  const exact = BOOKING_OPTIONS.find((o) => o.toLowerCase() === serviceName.toLowerCase());
  if (exact) return { service: exact };
  return { service: "Other", note: `Service: ${serviceName}` };
}

type Props = { defaultService?: string; id?: string };

export default function BookingForm({ defaultService, id = "booking" }: Props) {
  const initial = defaultService ? matchOption(defaultService) : undefined;
  const [f, setF] = useState<Fields>({ ...EMPTY, service: initial?.service ?? "", message: initial?.note ?? "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [minDate, setMinDate] = useState<string>();
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const d = new Date();
    setMinDate(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);

    // "Book" buttons on service cards pre-select the service.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-book-service]");
      if (!el) return;
      const m = matchOption(el.dataset.bookService ?? "");
      setF((prev) => ({ ...prev, service: m.service, message: m.note ?? prev.message }));
      setStatus("idle");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const focusFirstError = (errs: Errors) => {
    const k = (Object.keys(errs) as (keyof Fields)[])[0];
    if (k) formRef.current?.querySelector<HTMLElement>(`[name="${k}"]`)?.focus();
  };

  /** Book Service → validates, then opens WhatsApp directly with the full booking message. */
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstError(errs);
    // Open WhatsApp synchronously (inside the click) so pop-up blockers allow it; on phones this opens the WhatsApp app.
    // (No "noopener" feature string here: with it window.open always returns null, so we'd wrongly fall back.)
    const win = window.open(bookingLink(f), "_blank");
    if (win) win.opener = null;
    else window.location.href = bookingLink(f); // pop-up blocked → open WhatsApp in this tab
    setStatus("ready");
    // Optional copy to an email/form backend, if configured. Never blocks the WhatsApp booking.
    if (ENDPOINT) {
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...f, source: "madhuri-electrical-website" }),
      }).catch(() => {});
    }
  };

  const fieldProps = (k: keyof Fields) => ({
    id: `${uid}-${k}`,
    name: k,
    value: f[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 flex items-center gap-1 text-sm font-medium text-accent-600">
        <AlertCircle className="h-4 w-4" aria-hidden="true" /> {errors[k]}
      </p>
    ) : null;

  const label = (k: keyof Fields, children: string, req?: boolean) => (
    <label htmlFor={`${uid}-${k}`} className="mb-1.5 block text-sm font-semibold text-navy-900">
      {children} {req ? <span className="text-accent-500" aria-hidden="true">*</span> : <span className="font-normal text-muted">(optional)</span>}
    </label>
  );

  return (
    <section id={id} className="section scroll-mt-24 bg-surface" aria-labelledby={`${uid}-title`}>
      <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="eyebrow mb-3">Booking</p>
          <h2 id={`${uid}-title`} className="section-title">
            Book an AC or Electrical Service
          </h2>
          <p className="mt-3 text-muted md:text-lg">
            Fill in a few details and tap Book Service — your booking opens directly in WhatsApp. Or call us directly.
          </p>
          <div className="mt-6 grid gap-3 sm:max-w-sm">
            <a href={BUSINESS.tel} className="btn btn-call call-live w-full">
              <Phone className="h-5 w-5" aria-hidden="true" /> CALL NOW · {BUSINESS.phoneDisplay}
            </a>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-wa-600" aria-hidden="true" /> AC service, repair, installation &amp; maintenance</li>
            <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-wa-600" aria-hidden="true" /> Electrical repair, wiring &amp; installation</li>
            <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-wa-600" aria-hidden="true" /> Homes, offices &amp; commercial spaces in Visakhapatnam</li>
          </ul>
        </div>

        <div className="card p-5 sm:p-7">
          {status === "ready" ? (
            <div className="py-4 text-center" role="status">
              <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-wa-500/15 text-wa-700">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-navy-900">WhatsApp opened with your booking</h3>
              <p className="mx-auto mt-2 max-w-md text-muted">
                Just tap <strong className="text-navy-900">Send</strong> in WhatsApp to confirm your booking. If WhatsApp didn&rsquo;t open, use the button below.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href={bookingLink(f)} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full">
                  <WhatsAppIcon className="h-5 w-5" /> Open WhatsApp
                </a>
                <a href={BUSINESS.tel} className="btn btn-call call-live w-full">
                  <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
                </a>
              </div>
              <button type="button" onClick={() => setStatus("idle")} className="mt-4 min-h-11 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline">
                Edit details
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} action="/book" method="get" target="_blank" noValidate className="grid gap-4 sm:grid-cols-2">
              <div>
                {label("name", "Name", true)}
                <input {...fieldProps("name")} type="text" autoComplete="name" className="field" required />
                {err("name")}
              </div>
              <div>
                {label("phone", "Phone Number", true)}
                <input {...fieldProps("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" className="field" required />
                {err("phone")}
              </div>
              <div>
                {label("service", "Service", true)}
                <select {...fieldProps("service")} className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2352617a%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10" required>
                  <option value="">Select a service</option>
                  {BOOKING_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {err("service")}
              </div>
              <div>
                {label("location", "Location", true)}
                <input {...fieldProps("location")} type="text" autoComplete="address-level3" placeholder="e.g. MVP Colony" className="field" required />
                {err("location")}
              </div>
              <div className="sm:col-span-2">
                {label("date", "Preferred Date")}
                <input {...fieldProps("date")} type="date" min={minDate} className="field" />
              </div>
              <div className="sm:col-span-2">
                {label("message", "Message")}
                <textarea {...fieldProps("message")} rows={3} placeholder="Describe the problem, AC type/brand, or work required" className="field min-h-[96px] resize-y" />
              </div>

              <div className="pt-1 sm:col-span-2">
                <button type="submit" className="btn btn-wa w-full text-base">
                  <WhatsAppIcon className="h-5 w-5" /> BOOK SERVICE
                </button>
              </div>
              <p className="text-xs text-muted sm:col-span-2">
                <span className="text-accent-500">*</span> Required fields. Book Service opens WhatsApp with your details — tap Send to confirm.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
