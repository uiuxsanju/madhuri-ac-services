# Madhuri Electrical — AC & Electrical Services Website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (passes with 0 errors)
npm run lint
```

## Before going live (owner checklist)
1. **Logo** — official logo is at `public/logo.png` (trimmed, transparent). Used in header, mobile menu, footer, contact and schema; favicon `app/icon.png` + `app/apple-icon.png` are cut from the logo mark. To replace, overwrite the file and update `LOGO_ASPECT` in `components/Logo.tsx`.
2. **Domain** — set `NEXT_PUBLIC_SITE_URL` (see `.env.example`). Used for canonicals, sitemap, robots, OG and schema.
3. **Photos** — add real photos (WebP preferred):
   - Hero: `public/images/hero.webp` (otherwise a Visakhapatnam city photo is used)
   - Services: curated free Unsplash photos are mapped in `data/images.ts`. Your own photo at `public/images/services/<slug>.webp` (e.g. `ac-deep-cleaning.webp`) overrides automatically. If a photo fails to load, a branded icon panel shows.
4. **Brand logos** — drop official logo files in `public/brands/<slug>.svg` (see `public/brands/README.txt`); they appear in the scrolling brand strip automatically. Brands without a file show the name.
5. **Service areas** — remove any area you don't actually serve in `data/locations.ts`.
6. **Optional** — `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` (official "Embed a map" src) to show a map; `NEXT_PUBLIC_BOOKING_ENDPOINT` (Formspree/Web3Forms/API) to receive form submissions. Without an endpoint the form validates and asks the visitor to confirm on WhatsApp/call (no fake success).

## Structure
- `data/services.ts` — all 70 typed services (single source; cards, pages, search, schema, sitemap)
- `data/pages.ts` — 8 category landing pages config · `data/faqs.ts` · `data/locations.ts`
- `lib/site.ts` — NAP (name, address, phone), tel/WhatsApp/directions links
- `lib/whatsapp.ts` — encoded WhatsApp booking messages · `lib/seo.ts` — metadata + JSON-LD
- `app/services/[slug]` — 58 static service detail pages

Call: `tel:+919666542541` · WhatsApp: `https://wa.me/919666542541`
