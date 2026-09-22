import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbLd, type Crumb } from "@/lib/seo";

type Props = { items: Crumb[]; tone?: "light" | "dark" };

export default function Breadcrumbs({ items, tone = "light" }: Props) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className={`flex flex-wrap items-center gap-1 text-sm ${tone === "light" ? "text-brand-100" : "text-muted"}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className={`font-semibold ${tone === "light" ? "text-white" : "text-navy-900"}`}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="hover:underline">
                      {c.name}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
