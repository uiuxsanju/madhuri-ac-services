import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import BookingForm from "@/components/BookingForm";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Madhuri Electrical | AC & Electrical Services, Visakhapatnam",
  description:
    "About Madhuri Electrical — AC and electrical services for homes, offices and commercial spaces in Visakhapatnam, based at Chaitanya Nagar, Maddilapalem.",
  path: "/about",
});

const LINKS = [
  { href: "/ac-services", label: "AC Services" },
  { href: "/ac-repair", label: "AC Repair" },
  { href: "/ac-cleaning", label: "AC Cleaning" },
  { href: "/ac-installation", label: "AC Installation" },
  { href: "/ac-maintenance", label: "AC Maintenance" },
  { href: "/electrical-services", label: "Electrical Services" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About us"
        title="About Madhuri Electrical"
        intro={<p>AC and electrical services for homes, offices and commercial spaces in Visakhapatnam.</p>}
      />
      <AboutSection headingAs="h2" showLink={false} />
      <section className="section bg-surface pt-12" aria-labelledby="what-we-do">
        <div className="container-page">
          <h2 id="what-we-do" className="section-title">What we do</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="card flex min-h-16 items-center justify-between px-5 font-bold text-navy-900 hover:border-brand-200 hover:text-brand-600">
                  {l.label} <ArrowRight className="h-5 w-5" aria-hidden="true" />
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
