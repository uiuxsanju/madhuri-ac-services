import { Building2, MapPin, ShieldCheck, Snowflake, Zap } from "lucide-react";

const ITEMS = [
  { label: "AC Services", Icon: Snowflake },
  { label: "Electrical Services", Icon: Zap },
  { label: "Residential & Commercial", Icon: Building2 },
  { label: "Professional Service", Icon: ShieldCheck },
  { label: "Visakhapatnam", Icon: MapPin },
];

export default function TrustStrip() {
  return (
    <section aria-label="What we offer" className="border-b border-line bg-white">
      <div className="container-page">
        <ul className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 py-4 sm:mx-0 sm:px-0 lg:justify-between">
          {ITEMS.map(({ label, Icon }) => (
            <li key={label} className="flex shrink-0 snap-start items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-navy-900">
              <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
