import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "./PageHero";
import ServiceGrid from "./ServiceGrid";
import SectionHeading from "./SectionHeading";
import BrandMarquee from "./BrandMarquee";
import BookingForm from "./BookingForm";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import JsonLd from "./JsonLd";
import { CATEGORY_PAGES } from "@/data/pages";
import { getFaqs } from "@/data/faqs";
import { serviceHref } from "@/data/services";
import { withImages } from "@/lib/assets";
import { buildMetadata, serviceCatalogLd } from "@/lib/seo";

export type CategoryKey = keyof typeof CATEGORY_PAGES;

export function categoryMetadata(key: CategoryKey) {
  const c = CATEGORY_PAGES[key];
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: c.path, keywords: c.keywords });
}

export default function CategoryPage({ pageKey }: { pageKey: CategoryKey }) {
  const c = CATEGORY_PAGES[pageKey];
  const all = c.sections.flatMap((s) => s.services);
  const unique = Array.from(new Map(all.map((s) => [s.slug, s])).values());
  const multi = c.sections.length > 1;

  return (
    <>
      <JsonLd data={serviceCatalogLd(c.h1, c.path, unique, serviceHref)} />
      <PageHero crumbs={[{ name: c.crumb, path: c.path }]} eyebrow={c.eyebrow} title={c.h1} intro={<p>{c.intro}</p>} service={c.bookingService} />

      {multi && (
        <nav aria-label="On this page" className="sticky top-16 z-30 border-b border-line bg-white/95 backdrop-blur">
          <ul className="container-page no-scrollbar flex gap-2 overflow-x-auto py-3">
            {c.sections.map((s) => (
              <li key={s.id} className="shrink-0">
                <a href={`#${s.id}`} className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm font-semibold text-navy-800 hover:border-brand-500 hover:text-brand-600">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {c.sections.map((sec, i) => (
        <section key={sec.id} id={sec.id} className={`section scroll-mt-32 ${i % 2 ? "bg-surface" : ""}`} aria-labelledby={`${sec.id}-title`}>
          <div className="container-page">
            <SectionHeading id={`${sec.id}-title`} title={sec.heading} intro={sec.intro} />
            <ServiceGrid services={withImages(sec.services)} />
          </div>
        </section>
      ))}

      <section className="section border-y border-line bg-white" aria-label={`About ${c.crumb}`}>
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-8">
            {c.body.map((b) => (
              <div key={b.heading}>
                <h2 className="font-display text-2xl font-extrabold text-navy-900">{b.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted md:text-lg">{b.text}</p>
              </div>
            ))}
          </div>
          <aside className="card h-fit p-6" aria-labelledby="related-links">
            <h2 id="related-links" className="font-display text-lg font-bold text-navy-900">Related Services</h2>
            <ul className="mt-3 divide-y divide-line">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex min-h-12 items-center justify-between font-semibold text-navy-800 hover:text-brand-600">
                    {l.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="flex min-h-12 items-center justify-between font-semibold text-navy-800 hover:text-brand-600">
                  Service Areas in Visakhapatnam <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <BrandMarquee show={pageKey.startsWith("electrical") ? "electrical" : "ac"} />
      <BookingForm defaultService={c.bookingService} />
      <FAQ items={getFaqs([...c.faqIds])} />
      <FinalCTA />
    </>
  );
}
