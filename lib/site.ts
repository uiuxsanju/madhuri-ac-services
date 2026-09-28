// Single source of truth for business NAP (Name, Address, Phone) + site config.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.madhurielectrical.in").replace(/\/$/, "");

export const BUSINESS = {
  name: "Madhuri Electrical",
  nameUpper: "MADHURI ELECTRICAL",
  tagline: "AC & Electrical Services",
  owner: "K. Lakshman",
  ownerUpper: "K. LAKSHMAN",
  phoneDisplay: "+91 96665 42541",
  phoneLocal: "9666542541",
  phoneE164: "+919666542541",
  tel: "tel:+919666542541",
  whatsappNumber: "919666542541",
  whatsappUrl: "https://wa.me/919666542541",
  address: {
    line1: "P8V8+8GH, HB Colony Road",
    line2: "Seethammadhara, H B Colony",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    postalCode: "530013",
    country: "India",
    countryCode: "IN",
  },
} as const;

export const ADDRESS_ONE_LINE = `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.postalCode}, ${BUSINESS.address.country}`;

const mapsQuery = encodeURIComponent(
  `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.postalCode}`,
);

/** Google Maps directions to the real address (no invented coordinates). */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
/** Google Maps search for the address. */
export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
/**
 * Google Maps embed of the real business address (the Plus Code pins the exact spot).
 * Override with NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL — e.g. the "Embed a map" src from the
 * Google Business Profile, which then shows the business pin instead of the address pin.
 */
export const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || `https://www.google.com/maps?q=${mapsQuery}&hl=en&z=17&output=embed`;

/**
 * Google Business Profile link used by the reviews section.
 * Set NEXT_PUBLIC_GOOGLE_REVIEWS_URL to the profile's "Reviews" / "Write a review" link.
 */
export const GOOGLE_REVIEWS_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || MAPS_SEARCH_URL;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ac-services", label: "AC Services" },
  { href: "/ac-repair", label: "AC Repair" },
  { href: "/ac-installation", label: "AC Installation" },
  { href: "/ac-maintenance", label: "Maintenance" },
  { href: "/electrical-services", label: "Electrical", mobileLabel: "Electrical Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;
