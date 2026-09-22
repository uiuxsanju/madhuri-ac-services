import { Cable, Droplets, Gauge, ShieldCheck, Wind, Wrench } from "lucide-react";

/** Lightweight SVG/CSS hero visual used until a real technician photo is added at /public/images/hero.webp */
export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl" />
      <div className="circuit-bg absolute inset-0 rounded-3xl" />

      {/* Split AC indoor unit */}
      <div className="absolute top-[16%] left-1/2 w-[72%] -translate-x-1/2">
        <div className="relative rounded-[22px] bg-gradient-to-b from-white to-slate-200 p-[6%] shadow-[0_24px_50px_-20px_rgb(0_0_0/0.6)]">
          <div className="flex items-center justify-between">
            <span className="h-2 w-20 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5 rounded-md bg-navy-900 px-2 py-1 font-mono text-[11px] font-bold text-brand-200 sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wa-500" /> 24°C
            </span>
          </div>
          <div className="mt-[10%] h-3 rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400" />
        </div>
        {/* airflow */}
        <svg viewBox="0 0 300 90" className="mt-1 w-full text-brand-200/70">
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M${40 + i * 70} 4 C ${30 + i * 70} 34, ${60 + i * 70} 50, ${45 + i * 70} 86`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 10" opacity={0.85 - i * 0.12} />
          ))}
        </svg>
      </div>

      {/* Floating chips */}
      <div className="absolute top-[6%] left-[4%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy-900 shadow-lg sm:text-sm">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600"><Wind className="h-4 w-4" /></span>
        AC Deep Cleaning
      </div>
      <div className="absolute right-[4%] bottom-[30%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy-900 shadow-lg sm:text-sm">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-red-50 text-accent-500"><Gauge className="h-4 w-4" /></span>
        Gas Charging
      </div>
      <div className="absolute bottom-[8%] left-[5%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy-900 shadow-lg sm:text-sm">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-amber-50 text-amber-600"><Cable className="h-4 w-4" /></span>
        Electrical Wiring
      </div>

      {/* Tool row */}
      <div className="absolute right-[5%] bottom-[7%] flex gap-2">
        {[Wrench, Droplets, ShieldCheck].map((I, i) => (
          <span key={i} className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
            <I className="h-5 w-5" />
          </span>
        ))}
      </div>
    </div>
  );
}
