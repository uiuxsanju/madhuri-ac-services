import "server-only";
import fs from "node:fs";
import path from "node:path";
import { SERVICES, type Service } from "@/data/services";
import { HERO_PHOTO, stockPhotoFor } from "@/data/images";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const EXTS = ["webp", "avif", "jpg", "jpeg", "png"];

/** Returns the public URL of the first existing file among `<base>.<ext>`, or undefined. */
export function findPublicImage(base: string): string | undefined {
  for (const ext of EXTS) {
    const rel = `${base}.${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, rel))) return `/${rel}`;
  }
  return undefined;
}

/**
 * Official logo. Uses /public/madhuri-logo.png first (new file name so browsers / Next image cache pick up the latest logo),
 * then falls back to /public/logo.png. To change the logo later, save it with a NEW file name and update LOGO_FILE.
 */
const LOGO_FILE = "madhuri-logo-v2";
export function getLogo(): string | undefined {
  return findPublicImage(LOGO_FILE) ?? findPublicImage("logo") ?? (fs.existsSync(path.join(PUBLIC_DIR, "logo.svg")) ? "/logo.svg" : undefined);
}

export const getHeroImage = () => findPublicImage("images/hero") ?? HERO_PHOTO;

/** Services with photos: own photo in /public/images/services/<slug>.<ext> first, else curated stock photo. */
export function withImages(list: Service[] = SERVICES): Service[] {
  return list.map((s) => ({ ...s, image: s.image ?? findPublicImage(`images/services/${s.slug}`) ?? stockPhotoFor(s.slug) }));
}

/** Brand logo from /public/brands/<slug>.(svg|png|webp|jpg), if the owner has added one. */
export function getBrandLogo(slug: string): string | undefined {
  for (const ext of ["svg", "png", "webp", "jpg"]) {
    const rel = `brands/${slug}.${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, rel))) return `/${rel}`;
  }
  return undefined;
}
