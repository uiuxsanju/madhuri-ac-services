import Link from "next/link";
import { Home, LayoutGrid, Phone, SearchX } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Service Not Found | Madhuri Electrical" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex max-w-2xl flex-col items-center text-center">
        <span className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-brand-50 text-brand-600">
          <SearchX className="h-10 w-10" aria-hidden="true" />
        </span>
        <p className="eyebrow mb-3">Error 404</p>
        <h1 className="section-title">Service Not Found</h1>
        <p className="mt-3 text-muted md:text-lg">The page you are looking for doesn&rsquo;t exist or has moved. Try one of these instead.</p>
        <div className="mt-8 grid w-full gap-3 sm:flex sm:w-auto sm:justify-center">
          <Link href="/" className="btn btn-primary"><Home className="h-5 w-5" aria-hidden="true" /> GO HOME</Link>
          <Link href="/ac-services" className="btn btn-outline"><LayoutGrid className="h-5 w-5" aria-hidden="true" /> VIEW SERVICES</Link>
          <Link href="/contact" className="btn btn-call"><Phone className="h-5 w-5" aria-hidden="true" /> CONTACT US</Link>
        </div>
      </div>
    </section>
  );
}
