import { FAQ_GROUPS } from "./faqs";
import { byCategory, SERVICES, type Service } from "./services";

export type CategoryPageConfig = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  crumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** Longer, factual content for SEO + users. */
  body: { heading: string; text: string }[];
  sections: { id: string; heading: string; intro?: string; services: Service[] }[];
  faqIds: readonly string[];
  links: { href: string; label: string }[];
  bookingService?: string;
};

const by = (...slugs: string[]) => SERVICES.filter((s) => slugs.includes(s.slug));

export const CATEGORY_PAGES: Record<string, CategoryPageConfig> = {
  "ac-services": {
    path: "/ac-services",
    metaTitle: "AC Service in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "AC service in Visakhapatnam — general service, deep cleaning, jet cleaning, gas charging and split, window & inverter AC installation by Madhuri Electrical, Seethammadhara.",
    keywords: ["AC service in Visakhapatnam", "AC service near me", "AC technician near me", "AC servicing Vizag"],
    crumb: "AC Services",
    eyebrow: "AC Services",
    h1: "AC Services in Visakhapatnam",
    intro:
      "AC general service, cleaning, gas charging and installation for split, window and inverter ACs — for homes, offices and commercial spaces across Visakhapatnam.",
    body: [
      {
        heading: "Complete AC care from one local team",
        text: "Madhuri Electrical handles the full range of AC work: routine general service, deep and jet cleaning, refrigerant gas work, and installation, relocation or reinstallation. Because we also do electrical work, AC power points, MCBs and stabilizers can be handled in the same visit where needed.",
      },
      {
        heading: "Why regular AC service matters in Vizag",
        text: "Visakhapatnam's humid, salty coastal air causes dust and moisture to build up on AC filters, coils and outdoor units. Regular servicing helps airflow and cooling, reduces bad smells and water leakage, and helps catch small problems before they turn into costly repairs.",
      },
    ],
    sections: [
      { id: "cleaning", heading: "AC Service & Cleaning", services: byCategory("ac-cleaning") },
      { id: "gas", heading: "AC Gas Services", services: byCategory("ac-gas") },
      { id: "installation", heading: "AC Installation Services", services: byCategory("ac-installation") },
    ],
    faqIds: FAQ_GROUPS.acServices,
    links: [
      { href: "/ac-repair", label: "AC Repair" },
      { href: "/ac-cleaning", label: "AC Cleaning" },
      { href: "/ac-installation", label: "AC Installation" },
      { href: "/ac-maintenance", label: "AC Maintenance" },
      { href: "/services/gas-charging", label: "AC Gas Charging" },
    ],
    bookingService: "AC General Service",
  },

  "ac-repair": {
    path: "/ac-repair",
    metaTitle: "AC Repair in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "AC repair in Visakhapatnam for AC not cooling, water leakage, ice formation, noise, PCB and compressor problems. Call or WhatsApp Madhuri Electrical, Seethammadhara.",
    keywords: ["AC repair in Visakhapatnam", "AC repair near me", "AC not cooling service Visakhapatnam", "AC PCB repair Visakhapatnam", "AC compressor repair Visakhapatnam"],
    crumb: "AC Repair",
    eyebrow: "AC Repair",
    h1: "AC Repair Services in Visakhapatnam",
    intro:
      "Diagnosis and repair for split, window and inverter ACs — from cooling and leakage problems to PCB, sensor, fan and compressor faults.",
    body: [
      {
        heading: "Diagnosis first, then repair",
        text: "Many AC problems look similar from the outside. Poor cooling, for example, can come from dirty coils, low gas, a weak capacitor, a fan fault or a compressor issue. Our technician checks the unit, explains what is wrong, and then carries out the repair.",
      },
      {
        heading: "Common AC problems we handle",
        text: "AC not cooling, water leaking from the indoor unit, ice on pipes, unusual noise, bad smells, AC not turning on, electrical and tripping issues, PCB faults, sensor problems, fan motor issues, and compressor repair or replacement.",
      },
    ],
    sections: [{ id: "repairs", heading: "AC Repair Services", services: byCategory("ac-repair") }],
    faqIds: FAQ_GROUPS.acRepair,
    links: [
      { href: "/services/ac-not-cooling", label: "AC Not Cooling" },
      { href: "/services/ac-water-leakage", label: "AC Water Leakage" },
      { href: "/services/ac-pcb-repair", label: "AC PCB Repair" },
      { href: "/services/ac-compressor-repair", label: "AC Compressor Repair" },
      { href: "/services/gas-charging", label: "Gas Charging" },
    ],
    bookingService: "AC Repair",
  },

  "ac-cleaning": {
    path: "/ac-cleaning",
    metaTitle: "AC Cleaning & Deep Cleaning in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "AC cleaning and deep cleaning in Visakhapatnam — jet cleaning, filter, indoor and outdoor unit cleaning for better cooling and fresher air. Book Madhuri Electrical.",
    keywords: ["AC cleaning in Visakhapatnam", "AC deep cleaning in Visakhapatnam", "AC cleaning near me", "AC jet cleaning Vizag"],
    crumb: "AC Cleaning",
    eyebrow: "AC Cleaning",
    h1: "AC Cleaning & Deep Cleaning in Visakhapatnam",
    intro:
      "General service, deep cleaning, jet cleaning and indoor/outdoor unit cleaning to restore airflow, improve cooling and remove odours.",
    body: [
      {
        heading: "General service vs deep cleaning",
        text: "A general service cleans the filters and checks the AC. Deep cleaning goes further — the cooling coil, blower wheel, drain tray and outdoor condenser are cleaned to remove built-up dust and mould. Jet cleaning uses a pressure pump for the indoor coil, with a cover to collect water and protect your room.",
      },
      {
        heading: "Signs your AC needs cleaning",
        text: "Weak airflow, slower cooling, a musty smell when the AC starts, or water dripping from the indoor unit are all common signs that cleaning is due.",
      },
    ],
    sections: [{ id: "cleaning", heading: "AC Cleaning Services", services: byCategory("ac-cleaning") }],
    faqIds: FAQ_GROUPS.acCleaning,
    links: [
      { href: "/services/ac-deep-cleaning", label: "AC Deep Cleaning" },
      { href: "/services/ac-jet-cleaning", label: "Jet Cleaning" },
      { href: "/services/ac-bad-smell", label: "AC Bad Smell" },
      { href: "/ac-maintenance", label: "AC Maintenance" },
    ],
    bookingService: "AC Deep Cleaning",
  },

  "ac-installation": {
    path: "/ac-installation",
    metaTitle: "AC Installation in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "Split, window and inverter AC installation in Visakhapatnam, plus AC relocation, uninstallation and reinstallation. Neat piping, drainage and electrical connection.",
    keywords: ["AC installation in Visakhapatnam", "AC installation near me", "split AC installation Vizag", "inverter AC installation Visakhapatnam", "AC shifting Vizag"],
    crumb: "AC Installation",
    eyebrow: "AC Installation",
    h1: "AC Installation in Visakhapatnam",
    intro: "Installation of split, window and inverter ACs, and safe relocation, uninstallation and reinstallation when you move.",
    body: [
      {
        heading: "Installation done properly",
        text: "Installation quality affects cooling, noise, leakage and the life of the AC. We mount the indoor unit level, position the outdoor unit for airflow, route piping and drain neatly, and check the power connection before the test run.",
      },
      {
        heading: "Moving home or office?",
        text: "AC relocation includes gas pump-down, careful removal, reinstallation at the new place and a pressure check afterwards — with gas top-up if required.",
      },
    ],
    sections: [{ id: "installation", heading: "AC Installation Services", services: byCategory("ac-installation") }],
    faqIds: FAQ_GROUPS.acInstallation,
    links: [
      { href: "/services/split-ac-installation", label: "Split AC Installation" },
      { href: "/services/window-ac-installation", label: "Window AC Installation" },
      { href: "/services/inverter-ac-installation", label: "Inverter AC Installation" },
      { href: "/services/ac-relocation", label: "AC Relocation" },
      { href: "/services/stabilizer-installation", label: "Stabilizer Installation" },
    ],
    bookingService: "AC Installation",
  },

  "ac-maintenance": {
    path: "/ac-maintenance",
    metaTitle: "AC Maintenance in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "Monthly, seasonal and annual AC maintenance in Visakhapatnam for homes, offices and commercial spaces. Planned cleaning and checks by Madhuri Electrical.",
    keywords: ["AC maintenance in Visakhapatnam", "AC AMC Vizag", "office AC maintenance Visakhapatnam", "commercial AC maintenance"],
    crumb: "AC Maintenance",
    eyebrow: "AC Maintenance",
    h1: "AC Maintenance Services in Visakhapatnam",
    intro: "Monthly, seasonal and annual maintenance for homes, offices and commercial spaces — so your ACs keep running efficiently.",
    body: [
      {
        heading: "Planned care instead of breakdowns",
        text: "Regular maintenance keeps filters and coils clean, catches drainage and electrical issues early, and helps ACs run efficiently. For offices and commercial premises with several units, planned visits reduce disruption during business hours.",
      },
      {
        heading: "Flexible schedules",
        text: "Visit frequency and scope are discussed with you based on how many units you have and how heavily they are used. Call or WhatsApp to discuss a schedule.",
      },
    ],
    sections: [{ id: "maintenance", heading: "AC Maintenance Services", services: byCategory("ac-maintenance") }],
    faqIds: FAQ_GROUPS.acMaintenance,
    links: [
      { href: "/ac-cleaning", label: "AC Cleaning" },
      { href: "/ac-repair", label: "AC Repair" },
      { href: "/services/commercial-wiring", label: "Commercial Wiring" },
    ],
    bookingService: "AC Maintenance",
  },

  "electrical-services": {
    path: "/electrical-services",
    metaTitle: "Electrical Services in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "Electrician in Visakhapatnam for wiring, electrical repair, MCB & DB box, fan and light installation, earthing, inverter and commercial electrical maintenance.",
    keywords: ["electrician in Visakhapatnam", "electrical services in Visakhapatnam", "electrician near me", "commercial electrical services in Visakhapatnam"],
    crumb: "Electrical Services",
    eyebrow: "Electrical Services",
    h1: "Electrical Services in Visakhapatnam",
    intro: "Wiring, repair, installation and maintenance for homes, shops, offices and commercial premises across Visakhapatnam.",
    body: [
      {
        heading: "Safe, practical electrical work",
        text: "From replacing a sparking socket to wiring a new home or shop, electrical work is carried out with safety first — correct cable sizes, proper protection with MCBs, and earthing where required. All work is tested before we leave.",
      },
      {
        heading: "Residential & commercial",
        text: "We handle house wiring, fan and light fittings, MCB and DB box work, inverter and stabilizer installation, as well as commercial wiring, electrical panels and planned maintenance for shops and offices.",
      },
    ],
    sections: [
      { id: "wiring", heading: "Wiring & Installation", services: by("electrical-wiring", "house-wiring", "commercial-wiring", "electrical-installation", "switch-socket-installation", "earthing-work") },
      { id: "fans-lights", heading: "Fans & Lighting", services: by("fan-installation", "ceiling-fan-installation", "exhaust-fan-installation", "led-light-installation", "linear-led-ceiling-light-installation") },
      { id: "boards", heading: "MCB, DB Box & Panels", services: by("mcb-installation", "db-box-installation", "electrical-panel-installation", "circuit-breaker-replacement") },
      { id: "repair", heading: "Repair & Troubleshooting", services: by("electrical-repair", "short-circuit-repair", "power-failure-troubleshooting", "electrical-safety-inspection", "electrical-maintenance") },
      { id: "power", heading: "Power Backup & Protection", services: by("inverter-installation", "stabilizer-installation") },
      { id: "commercial", heading: "Commercial Electrical", services: by("electrical-maintenance", "commercial-wiring", "electrical-panel-installation") },
    ],
    faqIds: FAQ_GROUPS.electrical,
    links: [
      { href: "/electrical-wiring", label: "Electrical Wiring" },
      { href: "/electrical-repair", label: "Electrical Repair" },
      { href: "/services/mcb-installation", label: "MCB Installation" },
      { href: "/services/fan-installation", label: "Fan Installation" },
      { href: "/services/linear-led-ceiling-light-installation", label: "Linear LED Ceiling Lights" },
      { href: "/services/commercial-wiring", label: "Commercial Wiring" },
    ],
    bookingService: "Electrical Repair",
  },

  "electrical-repair": {
    path: "/electrical-repair",
    metaTitle: "Electrical Repair in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "Electrical repair in Visakhapatnam — short circuits, tripping MCBs, power failures, faulty switches, sockets and wiring. Call Madhuri Electrical, Seethammadhara.",
    keywords: ["electrical repair in Visakhapatnam", "electrical repair near me", "electrician near me", "short circuit repair Vizag"],
    crumb: "Electrical Repair",
    eyebrow: "Electrical Repair",
    h1: "Electrical Repair in Visakhapatnam",
    intro: "Fault finding and repair for tripping, short circuits, power failures and damaged switches, sockets and wiring.",
    body: [
      {
        heading: "Common electrical problems",
        text: "MCBs that keep tripping, sparking or heating switches and sockets, burning smells, flickering lights, and parts of the house without power are all signs of an electrical fault that should be checked promptly.",
      },
      {
        heading: "How we approach repairs",
        text: "The affected circuit is isolated, the fault is traced to the board, wiring or fitting, and the repair is done with properly rated parts. Circuits are tested before power is fully restored.",
      },
    ],
    sections: [
      {
        id: "repair",
        heading: "Electrical Repair Services",
        services: by("short-circuit-repair", "power-failure-troubleshooting", "circuit-breaker-replacement", "switch-socket-installation", "mcb-installation", "electrical-safety-inspection", "electrical-maintenance", "earthing-work"),
      },
    ],
    faqIds: FAQ_GROUPS.electricalRepair,
    links: [
      { href: "/electrical-services", label: "All Electrical Services" },
      { href: "/electrical-wiring", label: "Electrical Wiring" },
      { href: "/services/mcb-installation", label: "MCB Installation" },
      { href: "/services/ac-electrical-problems", label: "AC Electrical Problems" },
    ],
    bookingService: "Electrical Repair",
  },

  "electrical-wiring": {
    path: "/electrical-wiring",
    metaTitle: "Electrical Wiring in Visakhapatnam | Madhuri Electrical",
    metaDescription:
      "Electrical wiring and house wiring in Visakhapatnam — new wiring, rewiring, commercial wiring, DB box, MCB and earthing work by Madhuri Electrical.",
    keywords: ["electrical wiring in Visakhapatnam", "house wiring in Visakhapatnam", "commercial wiring Vizag", "rewiring electrician Vizag"],
    crumb: "Electrical Wiring",
    eyebrow: "Electrical Wiring",
    h1: "Electrical Wiring in Visakhapatnam",
    intro: "New wiring, rewiring and extensions for homes, shops and offices — planned for load and tested for safety.",
    body: [
      {
        heading: "House wiring & rewiring",
        text: "For new homes, extensions and older houses where wiring has aged, points for lights, fans, sockets and ACs are planned room by room, with circuits separated at the distribution board and connected to proper earthing.",
      },
      {
        heading: "Commercial wiring",
        text: "Shops, offices and showrooms need lighting and power circuits sized for their equipment and ACs. Wiring is planned with the distribution board or panel so circuits are protected and easy to maintain.",
      },
    ],
    sections: [
      {
        id: "wiring",
        heading: "Wiring Services",
        services: by("house-wiring", "commercial-wiring", "electrical-installation", "db-box-installation", "mcb-installation", "earthing-work", "electrical-panel-installation"),
      },
    ],
    faqIds: FAQ_GROUPS.electricalWiring,
    links: [
      { href: "/services/house-wiring", label: "House Wiring" },
      { href: "/services/commercial-wiring", label: "Commercial Wiring" },
      { href: "/electrical-repair", label: "Electrical Repair" },
      { href: "/electrical-services", label: "All Electrical Services" },
    ],
    bookingService: "Electrical Wiring",
  },
};
