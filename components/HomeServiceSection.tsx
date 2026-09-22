import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceGrid from "./ServiceGrid";
import type { Service } from "@/data/services";

type Props = { id: string; eyebrow: string; title: string; intro: string; services: Service[]; href: string; linkLabel: string; tinted?: boolean };

export default function HomeServiceSection({ id, eyebrow, title, intro, services, href, linkLabel, tinted }: Props) {
  return (
    <section id={id} className={`section scroll-mt-20 ${tinted ? "bg-surface" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container-page">
        <SectionHeading
          id={`${id}-title`}
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          action={
            <Link href={href} className="btn btn-outline btn-sm">
              {linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <ServiceGrid services={services} mobileCarousel />
      </div>
    </section>
  );
}
