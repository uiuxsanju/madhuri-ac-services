import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceExplorer from "@/components/ServiceExplorer";
import SectionHeading from "@/components/SectionHeading";
import HomeServiceSection from "@/components/HomeServiceSection";
import BrandMarquee from "@/components/BrandMarquee";
import AboutSection from "@/components/AboutSection";
import BookingForm from "@/components/BookingForm";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import GoogleReviews from "@/components/GoogleReviews";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";
import { FAQ_GROUPS, getFaqs } from "@/data/faqs";
import { ADDITIONAL_AREAS, PRIMARY_AREAS } from "@/data/locations";
import { getHeroImage, getLogo, withImages } from "@/lib/assets";
import VizagPhoto from "@/components/VizagPhoto";
import { VIZAG_PHOTOS } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Madhuri Electrical | AC & Electrical Services in Visakhapatnam",
  description:
    "Professional AC service, repair, cleaning, installation and electrical services in Visakhapatnam. Contact Madhuri Electrical for residential and commercial service.",
  path: "/",
  keywords: ["AC service in Visakhapatnam", "AC repair in Visakhapatnam", "electrician in Visakhapatnam", "AC service near me", "electrician near me"],
});

export default function HomePage() {
  const services = withImages(SERVICES);
  const pick = (...cats: string[]) => services.filter((s) => cats.includes(s.category));

  return (
    <>
      <Hero image={getHeroImage()} />
      <TrustStrip />

      <section id="find-service" className="section" aria-labelledby="find-title">
        <div className="container-page">
          <SectionHeading
            id="find-title"
            eyebrow="Find your service"
            title="Search AC & Electrical Services"
            intro="Search by problem or service name, or browse by category."
            align="center"
          />
          <ServiceExplorer services={services} />
        </div>
      </section>

      <HomeServiceSection
        id="ac-services"
        eyebrow="AC Services"
        title="AC Services in Visakhapatnam"
        intro="General service, cleaning, gas charging and installation for split, window and inverter ACs."
        services={pick("ac-cleaning", "ac-gas", "ac-installation")}
        href="/ac-services"
        linkLabel="All AC Services"
        tinted
      />

      <BrandMarquee className="!bg-white" />

      <HomeServiceSection
        id="ac-repair"
        eyebrow="AC Repair"
        title="AC Repair Services in Visakhapatnam"
        intro="Diagnosis and repair for cooling, leakage, noise, PCB, sensor, fan and compressor problems."
        services={pick("ac-repair")}
        href="/ac-repair"
        linkLabel="AC Repair"
      />

      <HomeServiceSection
        id="ac-maintenance"
        eyebrow="Maintenance"
        title="AC Maintenance Services"
        intro="Planned maintenance for homes, offices and commercial spaces."
        services={pick("ac-maintenance")}
        href="/ac-maintenance"
        linkLabel="AC Maintenance"
        tinted
      />

      <HomeServiceSection
        id="electrical"
        eyebrow="Electrical"
        title="Electrical Services in Visakhapatnam"
        intro="Wiring, repair, installation and maintenance for homes, shops and offices."
        services={pick("electrical")}
        href="/electrical-services"
        linkLabel="Electrical Services"
      />

      <AboutSection />
      <BookingForm />

      <section className="section pb-0" aria-labelledby="areas-title">
        <div className="container-page">
          <SectionHeading
            id="areas-title"
            eyebrow="Service areas"
            title="Serving Visakhapatnam"
            intro="Based in Seethammadhara (HB Colony). Call or WhatsApp to confirm service for your area."
            action={<Link href="/service-areas" className="btn btn-outline btn-sm">View Service Areas</Link>}
          />
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <ul className="flex flex-wrap gap-2">
            {[...PRIMARY_AREAS, ...ADDITIONAL_AREAS].map((a) => (
              <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-medium text-navy-800">
                <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" /> {a}
              </li>
            ))}
          </ul>
            <VizagPhoto src={VIZAG_PHOTOS.city} alt="Visakhapatnam beach and city skyline" caption="Serving homes & businesses across Vizag" />
          </div>
        </div>
      </section>

      <GoogleReviews />
      <FAQ items={getFaqs([...FAQ_GROUPS.home])} />
      <ContactSection logoSrc={getLogo()} />
      <FinalCTA />
    </>
  );
}
