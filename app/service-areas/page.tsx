import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ADDITIONAL_AREAS, PRIMARY_AREAS } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";
import VizagPhoto from "@/components/VizagPhoto";
import { VIZAG_PHOTOS } from "@/data/images";
import { DIRECTIONS_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Service Areas | AC & Electrical Services in Visakhapatnam | Madhuri Electrical",
  description:
    "Madhuri Electrical serves Maddilapalem, Chaitanya Nagar and nearby Visakhapatnam areas for AC service, AC repair, installation and electrical work.",
  path: "/service-areas",
});

const SERVICE_LINKS = [
  { href: "/ac-services", label: "AC Service" },
  { href: "/ac-repair", label: "AC Repair" },
  { href: "/ac-cleaning", label: "AC Cleaning" },
  { href: "/ac-installation", label: "AC Installation" },
  { href: "/ac-maintenance", label: "AC Maintenance" },
  { href: "/electrical-services", label: "Electrical Services" },
  { href: "/electrical-repair", label: "Electrical Repair" },
  { href: "/electrical-wiring", label: "Electrical Wiring" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Service Areas", path: "/service-areas" }]}
        eyebrow="Service areas"
        title="AC & Electrical Services in Visakhapatnam"
        intro={<p>Based at Chaitanya Nagar, Maddilapalem — serving homes, offices and businesses in and around Visakhapatnam.</p>}
        aside={<VizagPhoto src={VIZAG_PHOTOS.aerial} alt="Aerial view of Visakhapatnam homes by the sea" caption="Chaitanya Nagar, Maddilapalem" sizes="40vw" />}
      />

      <section className="section" aria-labelledby="primary-title">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 id="primary-title" className="section-title">Where we are based</h2>
            <ul className="mt-6 space-y-3">
              {PRIMARY_AREAS.map((a) => (
                <li key={a} className="card flex items-center gap-3 p-4 text-lg font-bold text-navy-900">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500 text-white"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                  {a}
                </li>
              ))}
            </ul>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-5">
              <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
            </a>
          </div>
          <div>
            <h2 className="section-title">Nearby areas we serve</h2>
            <p className="mt-3 text-muted">
              We provide AC and electrical services in these Visakhapatnam areas. If your locality isn&rsquo;t listed, call or WhatsApp us to check availability.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2 sm:grid-cols-3">
              {ADDITIONAL_AREAS.map((a) => (
                <li key={a} className="flex min-h-12 items-center gap-2 rounded-xl border border-line bg-surface px-3 text-[0.95rem] font-semibold text-navy-800">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> {a}
                </li>
              ))}
            </ul>
            <WhatsAppButton label="Check My Area on WhatsApp" text="Hello Madhuri Electrical, do you provide service in my area? Location: " className="mt-6 w-full sm:w-auto" />
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="services-in-vizag">
        <div className="container-page">
          <h2 id="services-in-vizag" className="section-title">Services available across Visakhapatnam</h2>
          <p className="mt-3 max-w-3xl text-muted">
            AC service, AC repair, AC cleaning and deep cleaning, gas charging, AC installation and maintenance, plus electrical repair, wiring and installation — for homes, offices and commercial spaces.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 font-semibold text-navy-800 hover:border-brand-500 hover:text-brand-600">
                  {l.label} in Visakhapatnam
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingForm />
      <FinalCTA />
    </>
  );
}
