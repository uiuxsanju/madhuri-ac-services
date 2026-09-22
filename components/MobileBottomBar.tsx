import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

/** Fixed Call / WhatsApp bar on mobile. Body gets matching bottom padding in layout. */
export default function MobileBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <a href={BUSINESS.tel} className="btn btn-call call-live w-full" aria-label={`Call now on ${BUSINESS.phoneDisplay}`}>
          <Phone className="h-5 w-5" aria-hidden="true" />
          CALL NOW
          <span className="live-dot" aria-hidden="true" />
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full" aria-label="Chat on WhatsApp">
          <WhatsAppIcon className="h-5 w-5" />
          WHATSAPP
        </a>
      </div>
    </div>
  );
}
