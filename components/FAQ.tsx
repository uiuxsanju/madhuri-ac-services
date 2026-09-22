import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import JsonLd from "./JsonLd";
import type { FAQItem } from "@/data/faqs";
import { faqLd } from "@/lib/seo";

type Props = { items: FAQItem[]; title?: string; withSchema?: boolean; className?: string };

/** Accessible FAQ using native <details>. FAQPage schema is emitted only alongside the visible FAQ. */
export default function FAQ({ items, title = "Frequently Asked Questions", withSchema = true, className = "" }: Props) {
  if (!items.length) return null;
  return (
    <section className={`section ${className}`} aria-labelledby="faq-title">
      {withSchema && <JsonLd data={faqLd(items)} />}
      <div className="container-page max-w-4xl">
        <SectionHeading id="faq-title" eyebrow="FAQ" title={title} align="center" />
        <div className="space-y-3">
          {items.map((f, i) => (
            <details key={f.id} className="card group overflow-hidden [&_summary::-webkit-details-marker]:hidden" open={i === 0}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-display text-[1.02rem] font-bold text-navy-900 hover:text-brand-600">
                <h3>{f.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="border-t border-line px-5 py-4 leading-relaxed text-muted">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
