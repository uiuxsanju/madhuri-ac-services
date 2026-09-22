import Image from "next/image";
import { Snowflake, Zap } from "lucide-react";
import { AC_BRANDS, ELECTRICAL_BRANDS, brandSlug } from "@/data/brands";
import { getBrandLogo } from "@/lib/assets";

type Brand = { name: string; logo?: string };
type RowProps = { label: string; brands: Brand[]; tone: "ac" | "electrical"; reverse?: boolean };

function Row({ label, brands, tone, reverse }: RowProps) {
  const Icon = tone === "ac" ? Snowflake : Zap;
  const border = tone === "ac" ? "border-brand-100 [&_svg]:text-brand-500" : "border-amber-200/70 [&_svg]:text-amber-500";
  // Repeat the list so one track copy is always wider than the viewport (seamless loop on wide screens).
  const loop = [...brands, ...brands];
  const items = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={hidden || undefined}>
      {loop.map((b, i) => (
        <li
          key={`${b.name}-${i}`}
          className={`flex h-16 shrink-0 items-center justify-center gap-2 rounded-2xl border bg-white px-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:h-20 sm:px-7 ${border} ${b.logo ? "min-w-[140px] sm:min-w-[180px]" : ""}`}
        >
          {b.logo ? (
            <span className="relative block h-10 w-[110px] sm:h-12 sm:w-[140px]">
              <Image
                src={b.logo}
                alt={hidden || i >= brands.length ? "" : `${b.name} logo`}
                fill
                sizes="140px"
                className="object-contain"
              />
            </span>
          ) : (
            <>
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="font-display text-[0.92rem] font-extrabold tracking-tight whitespace-nowrap text-navy-900 sm:text-[1.02rem]">{b.name}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-navy-800">{label}</p>
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}>
          {items(false)}
          {items(true)}
        </div>
      </div>
    </div>
  );
}

const withLogos = (names: string[]): Brand[] => names.map((name) => ({ name, logo: getBrandLogo(brandSlug(name)) }));

type Props = { show?: "both" | "ac" | "electrical"; className?: string };

/** Auto-scrolling brand strip. Shows owner-supplied logos from /public/brands, else brand names. Pauses on hover; static for reduced motion. */
export default function BrandMarquee({ show = "both", className = "" }: Props) {
  const title =
    show === "ac" ? "AC Brands We Service" : show === "electrical" ? "Electrical Brands We Work With" : "Brands We Service & Work With";
  return (
    <section className={`section bg-surface ${className}`} aria-labelledby={`brands-${show}`}>
      <div className="container-page">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-3">All major brands</p>
          <h2 id={`brands-${show}`} className="section-title">{title}</h2>
          <p className="mt-3 text-muted md:text-lg">
            {show === "electrical"
              ? "Wiring, switches, MCBs, fans, lights and inverters from leading brands."
              : "Split, window and inverter ACs from all leading brands — serviced, repaired and installed in Visakhapatnam."}
          </p>
        </div>
        <div className="space-y-6">
          {show !== "electrical" && <Row label="AC brands" brands={withLogos(AC_BRANDS)} tone="ac" />}
          {show !== "ac" && <Row label="Electrical brands" brands={withLogos(ELECTRICAL_BRANDS)} tone="electrical" reverse />}
        </div>
        <p className="mt-6 text-xs text-muted">
          Brand names and logos are trademarks of their respective owners and are shown only to indicate the brands we work on. Madhuri Electrical is an independent service provider, not an authorised service centre of these brands.
        </p>
      </div>
    </section>
  );
}
