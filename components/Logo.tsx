import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

/** Width ÷ height of /public/logo.png (trimmed official logo). */
const LOGO_ASPECT = 1.47;

type Props = {
  src?: string;
  /** Visual height of the logo box in px. The logo keeps its own proportions inside. */
  height?: number;
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

/**
 * Official logo. Place the supplied logo file at /public/logo.png (or .webp/.svg/.jpg)
 * and it is used automatically everywhere. It is rendered with object-contain, so it is never stretched.
 * Until the file is added, a clean text wordmark is shown (no substitute logo is invented).
 */
export default function Logo({ src, height = 44, tone = "dark", className = "", priority }: Props) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Madhuri Electrical — Home">
      {src ? (
        <span className="relative block" style={{ height, width: Math.round(height * LOGO_ASPECT) }}>
          <Image src={src} alt="Madhuri Electrical logo" fill loading={priority ? "eager" : "lazy"} sizes={priority ? "120px" : `${Math.round(height * LOGO_ASPECT)}px`} className="object-contain object-left" />
        </span>
      ) : (
        <span className="flex items-center gap-2.5">
          <span
            className="grid place-items-center rounded-xl bg-navy-900 text-white ring-2 ring-accent-500/80"
            style={{ height: height * 0.9, width: height * 0.9 }}
            aria-hidden="true"
          >
            <Zap className="h-1/2 w-1/2 fill-spark-400 text-spark-400" />
          </span>
          <span className="leading-none">
            <span className={`block font-display text-[1.05rem] font-extrabold tracking-tight sm:text-lg ${tone === "light" ? "text-white" : "text-navy-900"}`}>
              MADHURI <span className="text-accent-500">ELECTRICAL</span>
            </span>
            <span className={`mt-1 block text-[0.66rem] font-semibold uppercase tracking-[0.16em] ${tone === "light" ? "text-brand-200" : "text-brand-600"}`}>
              AC &amp; Electrical Services
            </span>
          </span>
        </span>
      )}
    </Link>
  );
}
