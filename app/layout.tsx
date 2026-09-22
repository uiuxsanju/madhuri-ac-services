import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { getLogo } from "@/lib/assets";
import { localBusinessLd } from "@/lib/seo";
import { BUSINESS, SITE_URL } from "@/lib/site";

// Self-hosted variable fonts (Inter + Plus Jakarta Sans, OFL) — no external font requests.
const inter = localFont({ src: "./fonts/Inter-Variable.woff2", variable: "--font-inter", weight: "100 900", display: "swap" });
const jakarta = localFont({ src: "./fonts/PlusJakartaSans-Variable.woff2", variable: "--font-jakarta", weight: "200 800", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Madhuri Electrical | AC & Electrical Services in Visakhapatnam",
  description:
    "Professional AC service, repair, cleaning, installation and electrical services in Visakhapatnam. Contact Madhuri Electrical for residential and commercial service.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  formatDetection: { telephone: true, address: true },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", locale: "en_IN", siteName: BUSINESS.name },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const logo = getLogo();
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="pb-[calc(68px+env(safe-area-inset-bottom))] md:pb-0">
        <a href="#main" className="sr-only z-[100] rounded-lg bg-navy-900 px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <JsonLd data={localBusinessLd()} />
        <Providers>
          <Header logoSrc={logo} />
          <main id="main">{children}</main>
          <Footer logoSrc={logo} />
          <MobileBottomBar />
        </Providers>
      </body>
    </html>
  );
}
