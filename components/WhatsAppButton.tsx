import WhatsAppIcon from "./WhatsAppIcon";
import { serviceEnquiryLink, whatsappLink } from "@/lib/whatsapp";

type Props = {
  className?: string;
  label?: string;
  /** If provided, opens WhatsApp with a pre-filled booking message for this service. */
  service?: string;
  text?: string;
  size?: "sm" | "md";
};

/** Real WhatsApp chat link (wa.me) — opens the app on mobile, WhatsApp Web on desktop. */
export default function WhatsAppButton({ className = "", label = "WhatsApp Us", service, text, size = "md" }: Props) {
  const href = service ? serviceEnquiryLink(service) : whatsappLink(text);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-wa ${size === "sm" ? "btn-sm" : ""} ${className}`}
      aria-label={`${label} — opens WhatsApp chat with Madhuri Electrical`}
    >
      <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
      <span>{label}</span>
    </a>
  );
}
