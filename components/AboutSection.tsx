import Link from "next/link";
import { ArrowRight, Building2, House, Snowflake, Zap } from "lucide-react";
import VizagPhoto from "./VizagPhoto";
import { VIZAG_PHOTOS } from "@/data/images";

type Props = { headingAs?: "h1" | "h2"; showLink?: boolean };

export default function AboutSection({ headingAs = "h2", showLink = true }: Props) {
  const H = headingAs;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-3">About us</p>
          <H id="about-title" className="section-title">
            About Madhuri Electrical
          </H>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Madhuri Electrical provides professional AC and electrical services for residential, office and commercial requirements in Visakhapatnam. Our services include AC cleaning, repair, installation, maintenance and a wide range of electrical services.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            We are based at Chaitanya Nagar, Maddilapalem. You can reach us directly by phone or WhatsApp to discuss your requirement or book a visit.
          </p>
          {showLink && (
            <Link href="/about" className="btn btn-outline mt-6">
              More About Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="col-span-2">
            <VizagPhoto src={VIZAG_PHOTOS.coast} alt="Visakhapatnam coastline" caption="Local to Visakhapatnam" className="aspect-[16/8]" />
          </div>
          {[
            { t: "AC Services", d: "Service, cleaning, gas, installation", I: Snowflake, c: "bg-brand-500" },
            { t: "Electrical", d: "Repair, wiring, installation", I: Zap, c: "bg-navy-900" },
            { t: "Homes", d: "Apartments, houses & villas", I: House, c: "bg-navy-900" },
            { t: "Commercial", d: "Offices, shops & businesses", I: Building2, c: "bg-accent-500" },
          ].map(({ t, d, I, c }) => (
            <div key={t} className="card p-4 sm:p-6">
              <span className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl text-white ${c}`}>
                <I className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="font-display text-lg font-bold text-navy-900">{t}</p>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
