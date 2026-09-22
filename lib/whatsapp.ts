import { BUSINESS } from "./site";

export type BookingDetails = {
  name?: string;
  phone?: string;
  service?: string;
  location?: string;
  date?: string;
  message?: string;
};

/** Default message used by every general "WhatsApp" button. */
export const DEFAULT_WHATSAPP_MESSAGE = [
  "Hello Madhuri AC Service,",
  "",
  "I found you on your website. I need AC / electrical service.",
  "",
  "Service: ",
  "Location: ",
  "",
  "Please call me back. Thank you.",
].join("\n");

/** WhatsApp chat link with a pre-filled message (default message when none given). */
export function whatsappLink(text: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

/** Pre-filled enquiry for a specific service (used on cards and service pages). */
export function serviceEnquiryLink(serviceName?: string): string {
  const lines = [
    "Hello Madhuri AC Service,",
    "",
    "I would like to book an AC/Electrical service.",
    "",
    `Service: ${serviceName ?? ""}`,
    "Location: ",
    "Preferred Date: ",
    "Message: ",
  ];
  return whatsappLink(lines.join("\n"));
}

/** Full booking message built from the booking form. */
export function bookingLink(d: BookingDetails): string {
  const lines = [
    "Hello Madhuri AC Service,",
    "",
    "I would like to book a service.",
    "",
    `Name: ${d.name?.trim() ?? ""}`,
    `Phone: ${d.phone?.trim() ?? ""}`,
    `Service: ${d.service?.trim() ?? ""}`,
    `Location: ${d.location?.trim() ?? ""}`,
    `Preferred Date: ${d.date?.trim() ?? ""}`,
    `Message: ${d.message?.trim() ?? ""}`,
  ];
  return whatsappLink(lines.join("\n"));
}
