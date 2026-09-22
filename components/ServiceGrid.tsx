import ServiceCard from "./ServiceCard";
import type { Service } from "@/data/services";

type Props = { services: Service[]; headingLevel?: "h3" | "h4"; /** Swipeable row on mobile, grid from md up. */ mobileCarousel?: boolean };

export default function ServiceGrid({ services, headingLevel, mobileCarousel }: Props) {
  if (mobileCarousel) {
    return (
      <div>
        <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug} className="w-[84%] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none">
              <ServiceCard service={s} headingLevel={headingLevel} />
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs font-medium text-muted md:hidden" aria-hidden="true">
          Swipe to see all {services.length} services →
        </p>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((s) => (
        <li key={s.slug}>
          <ServiceCard service={s} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
