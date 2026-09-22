"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { ArrowRight, Search, SearchX, X } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import { CATEGORY_LABEL, CATEGORY_TABS, serviceHref, servicesForTab, type Service, type TabId } from "@/data/services";
import { serviceEnquiryLink } from "@/lib/whatsapp";

type Props = { services: Service[]; initialTab?: TabId; showTabs?: boolean };

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ");

function searchServices(list: Service[], q: string): Service[] {
  const terms = norm(q).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return list
    .map((s) => {
      const name = norm(s.name);
      const hay = norm([s.name, s.shortDescription, CATEGORY_LABEL[s.category], ...s.keywords].join(" "));
      if (!terms.every((t) => hay.includes(t))) return null;
      const score = terms.reduce((acc, t) => acc + (name.includes(t) ? 10 : 0) + (name.startsWith(t) ? 5 : 0), 0);
      return { s, score };
    })
    .filter((x): x is { s: Service; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.s);
}

export default function ServiceExplorer({ services, initialTab = "ac-services", showTabs = true }: Props) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<TabId>(initialTab);
  const inputId = useId();
  const resultsId = useId();

  const searching = query.trim().length > 0;
  const results = useMemo(
    () => (searching ? searchServices(services, query) : servicesForTab(tab, services)),
    [services, query, tab, searching],
  );

  return (
    <div>
      {/* Search */}
      <div role="search" className="relative mx-auto max-w-2xl">
        <label htmlFor={inputId} className="sr-only">
          Search AC or electrical service
        </label>
        <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AC or electrical service..."
          autoComplete="off"
          aria-controls={resultsId}
          className="h-14 w-full rounded-2xl border-2 border-line bg-white pr-12 pl-12 text-base text-navy-900 shadow-[var(--shadow-card)] placeholder:text-muted/80 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {searching && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute top-1/2 right-2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl text-muted hover:bg-surface"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Category tabs */}
      {showTabs && (
        <div className="mt-6">
          <div role="tablist" aria-label="Service categories" className="no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:justify-center md:px-0">
            {CATEGORY_TABS.map((t) => {
              const active = !searching && tab === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-controls={resultsId}
                  onClick={() => {
                    setQuery("");
                    setTab(t.id);
                  }}
                  className={`min-h-11 shrink-0 snap-start rounded-full border px-4 text-sm font-semibold transition-colors ${
                    active ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white text-navy-800 hover:border-brand-500 hover:text-brand-600"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Results */}
      <div id={resultsId} role={showTabs ? "tabpanel" : "region"} aria-live="polite" className="mt-6">
        {searching && (
          <p className="mb-3 text-sm text-muted">
            {results.length} {results.length === 1 ? "service" : "services"} found for &ldquo;{query.trim()}&rdquo;
          </p>
        )}
        {results.length === 0 ? (
          <div className="card flex flex-col items-center gap-3 p-8 text-center">
            <SearchX className="h-8 w-8 text-muted" aria-hidden="true" />
            <p className="font-semibold text-navy-900">No matching service found.</p>
            <p className="text-sm text-muted">Tell us what you need — we&rsquo;ll let you know if we can help.</p>
            <a href={serviceEnquiryLink(query.trim())} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
              <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
            </a>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((s) => (
              <li key={s.slug}>
                <div className="card group flex items-center gap-3 p-3 pr-2 transition-all hover:border-brand-200 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <Link href={serviceHref(s)} className="min-w-0 flex-1">
                    <span className="block truncate font-semibold text-navy-900 group-hover:text-brand-600">{s.name}</span>
                    <span className="block truncate text-xs text-muted">{CATEGORY_LABEL[s.category]}</span>
                  </Link>
                  <a
                    href={serviceEnquiryLink(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-wa-600 hover:bg-wa-500/10"
                    aria-label={`WhatsApp about ${s.name}`}
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                  <Link href={serviceHref(s)} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-navy-800 hover:bg-surface" aria-label={`View ${s.name}`}>
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
