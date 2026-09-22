import { CheckCircle2, MessageSquare, MousePointerClick, UserCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Choose Service", text: "Pick the AC or electrical service you need.", Icon: MousePointerClick },
  { n: "02", title: "Contact Us", text: "Call, WhatsApp or send the booking form.", Icon: MessageSquare },
  { n: "03", title: "Technician Visit", text: "Our technician visits and checks the problem.", Icon: UserCheck },
  { n: "04", title: "Service Completed", text: "Work is done and tested before we leave.", Icon: CheckCircle2 },
];

export default function HowItWorks() {
  return (
    <section className="section bg-navy-900 text-white" aria-labelledby="how-title">
      <div className="container-page">
        <SectionHeading id="how-title" eyebrow="Simple process" title="How It Works" align="center" tone="light" />
        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <span className="absolute top-[44px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-brand-500/0 via-brand-500/60 to-brand-500/0 lg:block" aria-hidden="true" />
          {STEPS.map(({ n, title, text, Icon }, i) => (
            <Reveal as="li" key={n} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                <span className="relative mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-[0_10px_30px_-10px_rgb(20_110_245/0.9)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -top-2 -right-3 rounded-full bg-accent-500 px-1.5 py-0.5 text-[11px] font-extrabold">{n}</span>
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1 text-sm text-brand-100">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
