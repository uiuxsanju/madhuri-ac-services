import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

type Props = {
  className?: string;
  label?: string;
  showNumber?: boolean;
  size?: "sm" | "md";
  variant?: "solid" | "outline" | "ghost-light";
};

/** Real phone call link — opens the dialer on mobile. */
export default function CallButton({ className = "", label = "Call Now", showNumber = false, size = "md", variant = "solid" }: Props) {
  const v = variant === "solid" ? "btn-call call-live" : variant === "outline" ? "btn-outline" : "btn-ghost-light call-live";
  return (
    <a
      href={BUSINESS.tel}
      className={`btn ${v} ${size === "sm" ? "btn-sm" : ""} ${className}`}
      aria-label={`Call Madhuri Electrical on ${BUSINESS.phoneDisplay}`}
    >
      <Phone className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
      <span>{label}</span>
      <span className="live-dot" aria-hidden="true" />
      {showNumber && <span className="font-semibold opacity-90 max-[379px]:hidden">{BUSINESS.phoneDisplay}</span>}
    </a>
  );
}
