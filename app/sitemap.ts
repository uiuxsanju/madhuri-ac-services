import type { MetadataRoute } from "next";
import { DETAIL_SERVICES } from "@/data/services";
import { absUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const main: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/ac-services", priority: 0.9 },
    { path: "/ac-repair", priority: 0.9 },
    { path: "/ac-cleaning", priority: 0.9 },
    { path: "/ac-installation", priority: 0.9 },
    { path: "/ac-maintenance", priority: 0.8 },
    { path: "/electrical-services", priority: 0.9 },
    { path: "/electrical-repair", priority: 0.8 },
    { path: "/electrical-wiring", priority: 0.8 },
    { path: "/service-areas", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];
  return [
    ...main.map((m) => ({ url: absUrl(m.path), lastModified: now, changeFrequency: "monthly" as const, priority: m.priority })),
    ...DETAIL_SERVICES.map((s) => ({ url: absUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
