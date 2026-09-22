export type FAQItem = { id: string; q: string; a: string };

export const FAQS: FAQItem[] = [
  {
    id: "service-frequency",
    q: "How often should an AC be serviced?",
    a: "For most homes, a general service before summer and another after heavy use works well. ACs that run for long hours every day — in offices, shops or clinics — benefit from more frequent filter cleaning and periodic maintenance. Vizag's humid, coastal air can make coils and filters get dirty faster, so regular cleaning helps.",
  },
  {
    id: "not-cooling",
    q: "Why is my AC not cooling?",
    a: "Common causes are dirty filters or coils, low refrigerant due to a leak, a faulty capacitor, fan motor problems, sensor faults or a compressor issue. A technician needs to check the unit to find the exact cause. Cleaning the filters is a good first step you can try yourself.",
  },
  {
    id: "water-leak",
    q: "Why is water leaking from my AC?",
    a: "Water leakage from the indoor unit is usually caused by a blocked drain pipe, a dirty drain tray, an indoor unit that is not level, or ice on the coil melting. Cleaning the drain and checking the installation normally solves it.",
  },
  {
    id: "ice",
    q: "What causes AC ice formation?",
    a: "Ice forms on the coil or copper pipes when airflow is restricted — for example by dirty filters or a dirty coil — or when refrigerant is low because of a leak. Switch the AC off to let the ice melt and get it checked.",
  },
  {
    id: "gas",
    q: "When does an AC need gas charging?",
    a: "An AC in good condition does not normally consume gas. Gas charging is needed after a leak is repaired, after installation or relocation, or when a pressure check shows the refrigerant level is low. If gas keeps reducing, the leak should be found and repaired first.",
  },
  {
    id: "deep-cleaning",
    q: "What is AC deep cleaning?",
    a: "Deep cleaning goes beyond washing filters. It cleans the indoor cooling coil, blower wheel and drain tray, and the outdoor condenser, removing dust and mould that affect airflow, cooling and smell.",
  },
  {
    id: "pcb",
    q: "Can you repair AC PCB problems?",
    a: "Yes. Madhuri Electrical checks AC PCB (control board) faults such as error codes, no start or erratic behaviour. After testing, the technician will explain whether the board can be repaired or needs replacement.",
  },
  {
    id: "installation",
    q: "Do you provide AC installation?",
    a: "Yes. We install split and window ACs, including new AC installation, relocation, uninstallation and reinstallation, with piping, drainage and electrical connection.",
  },
  {
    id: "inverter-installation",
    q: "Do you provide inverter AC installation?",
    a: "Yes. Inverter split AC installation is available, including careful piping, vacuum/leak check and a check of the power point before the test run.",
  },
  {
    id: "electrical-repair",
    q: "Do you provide electrical repair?",
    a: "Yes. Electrical repair covers faulty switches and sockets, tripping MCBs, short circuits, power failures inside the premises, and damaged wiring.",
  },
  {
    id: "house-wiring",
    q: "Do you provide house wiring?",
    a: "Yes. House wiring for new homes, extensions and rewiring of older houses is available, including DB box, MCB and earthing work.",
  },
  {
    id: "commercial-electrical",
    q: "Do you do electrical work for shops and offices?",
    a: "Yes. Commercial wiring, electrical panels, lighting and electrical repair are available for shops, offices and commercial spaces. Call or WhatsApp to discuss your premises and requirements.",
  },
];

const BY_ID = new Map(FAQS.map((f) => [f.id, f]));
export const getFaqs = (ids: string[]) => ids.map((id) => BY_ID.get(id)).filter((f): f is FAQItem => Boolean(f));

export const FAQ_GROUPS = {
  home: ["service-frequency", "not-cooling", "water-leak", "gas", "deep-cleaning", "installation", "electrical-repair", "house-wiring"],
  acServices: ["service-frequency", "deep-cleaning", "gas", "installation"],
  acRepair: ["not-cooling", "water-leak", "ice", "pcb", "gas"],
  acCleaning: ["service-frequency", "deep-cleaning", "water-leak"],
  acInstallation: ["installation", "inverter-installation", "gas"],
  acMaintenance: ["service-frequency", "deep-cleaning", "commercial-electrical"],
  electrical: ["electrical-repair", "house-wiring", "commercial-electrical"],
  electricalRepair: ["electrical-repair", "commercial-electrical"],
  electricalWiring: ["house-wiring", "electrical-repair", "commercial-electrical"],
} as const;

/** Category-specific FAQ for service detail pages. */
export const FAQ_BY_CATEGORY: Record<string, string[]> = {
  "ac-cleaning": ["service-frequency", "deep-cleaning", "water-leak"],
  "ac-gas": ["gas", "not-cooling", "ice"],
  "ac-installation": ["installation", "inverter-installation", "gas"],
  "ac-repair": ["not-cooling", "water-leak", "pcb"],
  "ac-maintenance": ["service-frequency", "deep-cleaning", "commercial-electrical"],
  electrical: ["electrical-repair", "house-wiring", "commercial-electrical"],
};
