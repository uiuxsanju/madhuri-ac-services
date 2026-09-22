import type { Metadata } from "next";
import { BUSINESS, SITE_URL, MAPS_SEARCH_URL } from "./site";
import type { FAQItem } from "@/data/faqs";
import type { Service } from "@/data/services";

export const absUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

type MetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/** Page metadata with canonical, Open Graph and Twitter tags. Titles are passed complete (no template). */
export function buildMetadata({ title, description, path, keywords }: MetaInput): Metadata {
  const url = absUrl(path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: BUSINESS.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ───────────── JSON-LD ─────────────

const BUSINESS_ID = `${SITE_URL}/#business`;

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness", "Electrician"],
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    description:
      "AC service, AC repair, AC cleaning, AC installation, AC maintenance and electrical services in Visakhapatnam.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/madhuri-logo-v2.png`,
    founder: { "@type": "Person", name: BUSINESS.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: BUSINESS.address.countryCode,
    },
    hasMap: MAPS_SEARCH_URL,
    areaServed: { "@type": "City", name: "Visakhapatnam" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneE164,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };
}

export function serviceLd(opts: { name: string; description: string; path: string; serviceType?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Visakhapatnam" },
  };
}

export function serviceCatalogLd(name: string, path: string, services: Service[], hrefOf: (s: Service) => string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: absUrl(path),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Visakhapatnam" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absUrl(hrefOf(s)) },
      })),
    },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

/** Only use on pages where the same FAQ is visibly rendered. */
export function faqLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
