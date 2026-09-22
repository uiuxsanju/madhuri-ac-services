import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { AC_PROBLEMS } from "@/data/services";

export default function ProblemCards() {
  return (
    <section className="section bg-surface" aria-labelledby="problems-title">
      <div className="container-page">
        <SectionHeading
          id="problems-title"
          eyebrow="Quick diagnosis"
          title="What's Wrong With Your AC?"
          intro="Pick the problem you are facing to see common causes and how we fix it."
          align="center"
        />
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {AC_PROBLEMS.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={Math.min(i * 0.03, 0.2)} variant="scale">
              <Link
                href={`/services/${p.slug}`}
                className="card group flex h-full flex-col p-4 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-lift)] sm:p-5"
              >
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  <ServiceIcon name={p.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-[0.98rem] leading-tight font-bold text-navy-900">{p.label}</span>
                <span className="mt-1 flex-1 text-xs leading-snug text-muted sm:text-sm">{p.hint}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold tracking-wide text-brand-600 uppercase">
                  Get Service <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
