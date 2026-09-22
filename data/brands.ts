// Brands shown in the scrolling strip.
// LOGOS: put a logo file at /public/brands/<slug>.svg (or .png / .webp) — e.g. /public/brands/daikin.svg.
// It is picked up automatically at build time; brands without a file show their name as text.
// Use official logo files (brand press/media kits) and only for brands you actually service or install.
// Owner: remove any brand you do not actually service or use.

export const brandSlug = (name: string) =>
  name.toLowerCase().replace(/\(.*?\)/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const AC_BRANDS = ["LG", "Daikin", "Voltas", "Blue Star", "Hitachi", "Panasonic", "Carrier", "Samsung"];

export const ELECTRICAL_BRANDS = [
  "Philips",
  "Syska",
  "Wipro Lighting",
  "Lauritz Knudsen (L&T)",
  "Siemens",
  "ABB",
  "Legrand",
  "Havells",
];
