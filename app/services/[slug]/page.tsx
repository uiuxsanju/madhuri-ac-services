import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CalendarCheck, CheckCircle2, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceVisual from "@/components/ServiceVisual";
import ServiceGrid from "@/components/ServiceGrid";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORY_HREF, CATEGORY_LABEL, DETAIL_SERVICES, SERVICE_PROCESS, getService, getServices } from "@/data/services";
import { FAQ_BY_CATEGORY, getFaqs } from "@/data/faqs";
import { ADDITIONAL_AREAS, PRIMARY_AREAS } from "@/data/locations";
import { withImages } from "@/lib/assets";
import { buildMetadata, serviceLd } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return DETAIL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s || s.pageHref) return {};
  return buildMetadata({
    title: `${s.name} in Visakhapatnam | Madhuri Electrical`,
    description: `${s.shortDescription.replace(/\.$/, "")} — ${s.name.toLowerCase()} in Visakhapatnam by Madhuri Electrical, Seethammadhara. Call or WhatsApp +91 96665 42541.`,
    path: `/services/${s.slug}`,
    keywords: s.keywords,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const base = getService(slug);
  if (!base || base.pageHref) notFound();
  const [s] = withImages([base]);
  const related = withImages(getServices(s.relatedServices)).slice(0, 4);
  const faqs = getFaqs(FAQ_BY_CATEGORY[s.category] ?? []);
  const path = `/services/${s.slug}`;
  const catHref = CATEGORY_HREF[s.category];
  const catLabel = CATEGORY_LABEL[s.category];
  const isElectrical = s.category === "electrical";

  return (
    <>
      <JsonLd data={serviceLd({ name: `${s.name} in Visakhapatnam`, serviceType: s.name, description: s.description, path })} />
      <PageHero
        crumbs={[
          { name: catLabel, path: catHref },
          { name: s.name, path },
        ]}
        eyebrow={catLabel}
        title={`${s.name} in Visakhapatnam`}
        intro={<p>{s.shortDescription}</p>}
        service={s.name}
        aside={<ServiceVisual service={s} className="aspect-[4/3] rounded-3xl ring-1 ring-white/15" sizes="(min-width:1024px) 40vw, 100vw" priority />}
      />

      <section className="section" aria-label={`${s.name} details`}>
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="min-w-0 space-y-10">
            <ServiceVisual service={s} className="aspect-[16/9] rounded-2xl lg:hidden" sizes="100vw" />

            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">About this service</h2>
              <p className="mt-3 leading-relaxed text-muted md:text-lg">{s.description}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="card p-6">
                <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                  <AlertTriangle className="h-5 w-5 text-accent-500" aria-hidden="true" /> Common symptoms
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {s.symptoms.map((x) => (
                    <li key={x} className="flex gap-2.5 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                  <CheckCircle2 className="h-5 w-5 text-wa-600" aria-hidden="true" /> What the service includes
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {s.includes.map((x) => (
                    <li key={x} className="flex gap-2.5 text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-wa-600" aria-hidden="true" /> {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted">Exact scope depends on the unit / site and is confirmed after inspection.</p>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold text-navy-900">
                <Clock className="h-6 w-6 text-brand-600" aria-hidden="true" /> When this service may be needed
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {s.whenNeeded.map((x) => (
                  <li key={x} className="rounded-2xl border border-line bg-surface p-4 text-[0.95rem] text-navy-800">{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy-900">Service process</h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                {SERVICE_PROCESS[s.category].map((step, i) => (
                  <li key={step} className="card flex items-start gap-4 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 font-display font-extrabold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-2 font-semibold text-navy-900">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold text-navy-900">
                <MapPin className="h-6 w-6 text-accent-500" aria-hidden="true" /> Service areas
              </h2>
              <p className="mt-3 text-muted">
                {s.name} from our base in {PRIMARY_AREAS.slice(0, 2).join(", ")}, Visakhapatnam. Nearby areas include{" "}
                {ADDITIONAL_AREAS.slice(0, 8).join(", ")} and more.{" "}
                <Link href="/service-areas" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
                  See all service areas
                </Link>
                .
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card overflow-hidden">
              <div className={`p-6 text-white ${isElectrical ? "bg-navy-900" : "bg-gradient-to-br from-brand-600 to-navy-900"}`}>
                <p className="text-sm font-semibold tracking-wider text-brand-200 uppercase">Book this service</p>
                <p className="mt-1 font-display text-2xl font-extrabold">{s.name}</p>
                <p className="mt-2 text-sm text-brand-100">Call, WhatsApp or send the booking form.</p>
              </div>
              <div className="grid gap-3 p-5">
                <a href="#booking" data-book-service={s.name} className="btn btn-primary w-full">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" /> BOOK SERVICE
                </a>
                <CallButton label="CALL NOW" showNumber className="w-full" />
                <WhatsAppButton label="WHATSAPP US" service={s.name} className="w-full" />
              </div>
            </div>
            <div className="card mt-5 p-5">
              <h2 className="font-display text-lg font-bold text-navy-900">More {catLabel}</h2>
              <Link href={catHref} className="mt-2 flex min-h-11 items-center justify-between font-semibold text-brand-600 hover:underline">
                View all {catLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {s.gallery && s.gallery.length > 0 && (
        <section className="section" aria-labelledby="work-title">
          <div className="container-page">
            <SectionHeading id="work-title" eyebrow="Our work" title={`${s.name} — recent work`} intro="Real photos from our jobs in Visakhapatnam." />
            <ul className="grid max-w-3xl grid-cols-2 gap-3 sm:gap-5">
              {s.gallery.map((g) => (
                <li key={g.src} className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-navy-900 shadow-[var(--shadow-card)]">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section bg-surface" aria-labelledby="related-title">
          <div className="container-page">
            <SectionHeading id="related-title" eyebrow="You may also need" title="Related Services" />
            <ServiceGrid services={related} />
          </div>
        </section>
      )}

      <BookingForm defaultService={s.name} />
      <FAQ items={faqs} />
      <FinalCTA title={`Need ${s.name} in Visakhapatnam?`} />
    </>
  );
}
