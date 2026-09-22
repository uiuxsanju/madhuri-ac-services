import { BadgeCheck, Building2, Clock, HardHat, MapPin, ShieldCheck, Snowflake, ThumbsUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ITEMS = [
  { title: "Professional Service", text: "Careful, tidy work with the problem explained before the fix.", Icon: BadgeCheck },
  { title: "Quality Work", text: "Proper tools and methods for cleaning, repair and installation.", Icon: ThumbsUp },
  { title: "Quick Response", text: "Call or WhatsApp and we respond to your request promptly.", Icon: Clock },
  { title: "AC & Electrical Services", text: "One contact for both your AC and your electrical work.", Icon: Snowflake },
  { title: "Residential & Commercial", text: "Homes, offices, shops, clinics and commercial spaces.", Icon: Building2 },
  { title: "Safety-Focused Work", text: "Safe handling of wiring, power and refrigerant systems.", Icon: ShieldCheck },
  { title: "Reliable Service", text: "Work is tested before we leave, so you know it's done.", Icon: HardHat },
  { title: "Local Visakhapatnam Service", text: "Based in Chaitanya Nagar, Maddilapalem, Vizag.", Icon: MapPin },
];

export default function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container-page">
        <SectionHeading id="why-title" eyebrow="Why Madhuri Electrical" title="Why Choose Us" align="center" />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ title, text, Icon }, i) => (
            <Reveal as="li" key={title} delay={Math.min(i * 0.04, 0.24)}>
              <div className="card h-full p-5 transition-shadow hover:shadow-[var(--shadow-lift)]">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-[0.94rem] leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
