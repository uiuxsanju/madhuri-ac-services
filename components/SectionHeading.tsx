import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  action?: ReactNode;
  tone?: "dark" | "light";
};

export default function SectionHeading({ eyebrow, title, intro, align = "left", as = "h2", id, action, tone = "dark" }: Props) {
  const H = as;
  const center = align === "center";
  return (
    <div className={`mb-8 flex flex-col gap-4 md:mb-10 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
      <div className={center ? "max-w-2xl" : "max-w-3xl"}>
        {eyebrow && <p className={`eyebrow mb-3 ${tone === "light" ? "!text-brand-200" : ""}`}>{eyebrow}</p>}
        <H id={id} className={`section-title ${tone === "light" ? "!text-white" : ""}`}>
          {title}
        </H>
        {intro && <p className={`mt-3 text-base leading-relaxed md:text-lg ${tone === "light" ? "text-brand-100" : "text-muted"}`}>{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
