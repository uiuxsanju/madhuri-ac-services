import type { IconName } from "@/lib/icons";

export type ServiceCategory =
  | "ac-cleaning"
  | "ac-gas"
  | "ac-installation"
  | "ac-repair"
  | "ac-maintenance"
  | "electrical";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: IconName;
  shortDescription: string;
  description: string;
  symptoms: string[];
  includes: string[];
  whenNeeded: string[];
  keywords: string[];
  relatedServices: string[];
  /** Relevant for offices, shops and commercial premises. */
  commercial?: boolean;
  /** If set, the service is covered by a dedicated landing page instead of /services/[slug]. */
  pageHref?: string;
  /** Optional photo path under /public. Auto-detected from /public/images/services/<slug>.(webp|jpg|png) if omitted. */
  image?: string;
  alt: string;
  /** Real photos of completed work, shown on the service page. */
  gallery?: { src: string; alt: string }[];
};

type Input = Omit<Service, "symptoms" | "whenNeeded" | "alt" | "keywords"> & {
  symptoms?: string[];
  whenNeeded?: string[];
  keywords?: string[];
  alt?: string;
};

const CITY = "Visakhapatnam";

const DEFAULT_SYMPTOMS: Record<ServiceCategory, string[]> = {
  "ac-cleaning": [
    "Weak or reduced airflow from the indoor unit",
    "Dust visible on filters or the front grill",
    "Musty or unpleasant smell when the AC starts",
    "Room takes longer than usual to cool",
  ],
  "ac-gas": [
    "AC runs but the air is not cold enough",
    "Ice or frost on pipes or the indoor coil",
    "Oily marks near pipe joints or valves",
    "Outdoor unit runs for long periods without cooling the room",
  ],
  "ac-installation": [
    "New AC purchased and ready to fit",
    "Shifting home or office and moving existing units",
    "Old or faulty installation causing leaks or noise",
    "Unit needs a proper, dedicated power point",
  ],
  "ac-repair": [
    "AC not cooling or cooling poorly",
    "Water dripping from the indoor unit",
    "Unusual noise, vibration or smell",
    "Error codes, tripping or AC not starting",
  ],
  "ac-maintenance": [
    "Cooling performance dropping over the season",
    "Rising electricity bills for the same usage",
    "Frequent small problems through the year",
    "Several ACs in an office that need regular care",
  ],
  electrical: [
    "Tripping MCBs or frequent power cuts inside the premises",
    "Loose, sparking or heating switches and sockets",
    "Flickering lights or burning smell from wiring",
    "New points, fittings or appliances to be connected",
  ],
};

const DEFAULT_WHEN: Record<ServiceCategory, string[]> = {
  "ac-cleaning": [
    "Before summer, when AC usage increases",
    "When airflow or cooling feels weaker than before",
    "After a long period without use",
  ],
  "ac-gas": [
    "When cooling is poor even after cleaning",
    "After a leak has been found and repaired",
    "After installation, relocation or pipe work",
  ],
  "ac-installation": [
    "When you buy a new split, window or inverter AC",
    "When moving to a new home, shop or office",
    "When an existing unit must be shifted to another room",
  ],
  "ac-repair": [
    "As soon as cooling drops or a fault appears",
    "When the AC trips power or shows an error code",
    "Before a small fault becomes a costly one",
  ],
  "ac-maintenance": [
    "For homes that use AC for most of the year",
    "For offices, clinics, shops and commercial spaces",
    "To keep units running efficiently through Vizag's humid climate",
  ],
  electrical: [
    "When you notice any sparking, heating or burning smell",
    "When adding new rooms, appliances or fittings",
    "During renovation, new construction or shop setup",
  ],
};

export const SERVICE_PROCESS: Record<ServiceCategory, string[]> = {
  "ac-cleaning": [
    "Book by call, WhatsApp or the booking form",
    "Technician visits and checks the AC",
    "Cleaning done with care to protect walls and furniture",
    "Test run to confirm airflow and cooling",
  ],
  "ac-gas": [
    "Book your service and share the AC details",
    "Technician checks cooling, pressure and leak points",
    "Required gas work is explained before it is done",
    "Cooling is tested after the work",
  ],
  "ac-installation": [
    "Share AC type and installation location",
    "Site check for wall, outdoor unit position and power point",
    "Mounting, piping, drain and electrical connection",
    "Test run and basic usage guidance",
  ],
  "ac-repair": [
    "Tell us the problem by call or WhatsApp",
    "Technician inspects and diagnoses the fault",
    "Repair work is explained and carried out",
    "AC is tested to confirm it is working",
  ],
  "ac-maintenance": [
    "Discuss the number of units and required schedule",
    "Planned visits for cleaning and checks",
    "Issues noticed are reported and discussed",
    "Units kept running efficiently between visits",
  ],
  electrical: [
    "Explain the requirement or problem",
    "Electrician inspects the wiring, board or fitting",
    "Work is carried out with safety first",
    "Power, load and connections are tested",
  ],
};

function s(input: Input): Service {
  return {
    ...input,
    symptoms: input.symptoms ?? DEFAULT_SYMPTOMS[input.category],
    whenNeeded: input.whenNeeded ?? DEFAULT_WHEN[input.category],
    keywords: input.keywords ?? [`${input.name} in ${CITY}`, `${input.name} Vizag`, `${input.name} near me`],
    alt: input.alt ?? `${input.name} by Madhuri Electrical in ${CITY}`,
  };
}

export const SERVICES: Service[] = [
  // ───────────── AC CLEANING / GENERAL SERVICE ─────────────
  s({
    slug: "ac-general-service",
    name: "AC General Service",
    category: "ac-cleaning",
    icon: "AirVent",
    commercial: true,
    shortDescription: "Routine AC service with filter cleaning, coil check and a full performance test.",
    description:
      "A general AC service keeps your split or window AC running smoothly. The technician cleans the filters, checks the indoor and outdoor units, inspects the drain and electrical connections, and tests cooling performance so small issues are caught early.",
    includes: [
      "Filter removal, wash and refit",
      "Indoor unit and front panel cleaning",
      "Outdoor unit visual check",
      "Drain line check",
      "Electrical connection check",
      "Cooling performance test",
    ],
    keywords: ["AC service in Visakhapatnam", "AC service near me", "AC servicing Vizag", "AC general service"],
    relatedServices: ["ac-deep-cleaning", "ac-jet-cleaning", "ac-filter-cleaning", "seasonal-ac-maintenance"],
  }),
  s({
    slug: "ac-deep-cleaning",
    name: "AC Deep Cleaning",
    category: "ac-cleaning",
    icon: "Sparkles",
    commercial: true,
    shortDescription: "Thorough cleaning of coils, blower and drain for better airflow and fresher air.",
    description:
      "AC deep cleaning goes beyond the filters. Dust, dirt and mould that build up on the cooling coil, blower wheel and drain tray are cleaned out, which helps airflow, cooling and indoor air freshness — especially in Vizag's humid coastal climate.",
    includes: [
      "Indoor coil (evaporator) cleaning",
      "Blower wheel and drain tray cleaning",
      "Filter wash",
      "Outdoor unit condenser cleaning",
      "Drain line flushing",
      "Test run after cleaning",
    ],
    keywords: ["AC deep cleaning in Visakhapatnam", "AC cleaning near me", "AC deep cleaning Vizag"],
    relatedServices: ["ac-jet-cleaning", "indoor-unit-cleaning", "outdoor-unit-cleaning", "ac-bad-smell"],
  }),
  s({
    slug: "ac-jet-cleaning",
    name: "Jet Cleaning",
    category: "ac-cleaning",
    icon: "Waves",
    shortDescription: "High-pressure water jet cleaning of the indoor coil to remove stubborn dirt.",
    description:
      "Jet cleaning uses a controlled high-pressure water pump to flush dirt out of the fins of the indoor coil. The unit is covered with a cleaning bag so water is collected safely and your walls and furniture stay protected.",
    includes: [
      "Water collection cover fitted around the indoor unit",
      "Pressure-jet cleaning of the cooling coil",
      "Filter and front panel cleaning",
      "Drain check for proper water flow",
      "Test run after drying",
    ],
    keywords: ["AC jet cleaning in Visakhapatnam", "AC jet service Vizag", "AC water jet cleaning"],
    relatedServices: ["ac-deep-cleaning", "ac-general-service", "indoor-unit-cleaning", "ac-water-leakage"],
  }),
  s({
    slug: "ac-filter-cleaning",
    name: "Filter Cleaning",
    category: "ac-cleaning",
    icon: "Wind",
    shortDescription: "Quick filter wash to restore airflow and keep dust out of the coil.",
    description:
      "Clogged filters are one of the most common reasons for weak airflow. A filter cleaning visit removes, washes, dries and refits the filters, and includes a quick look at the indoor unit for any obvious issues.",
    includes: ["Filter removal and washing", "Filter drying and refit", "Front grill wipe", "Airflow check"],
    relatedServices: ["ac-general-service", "ac-deep-cleaning", "monthly-ac-maintenance"],
  }),
  s({
    slug: "indoor-unit-cleaning",
    name: "Indoor Unit Cleaning",
    category: "ac-cleaning",
    icon: "AirVent",
    shortDescription: "Cleaning of the indoor coil, blower and drain tray of your split AC.",
    description:
      "The indoor unit collects dust and moisture every day. Cleaning the coil, blower and drain tray improves airflow, reduces odour and helps prevent water leakage from a blocked drain.",
    includes: ["Coil cleaning", "Blower wheel cleaning", "Drain tray and pipe cleaning", "Filter wash", "Test run"],
    relatedServices: ["outdoor-unit-cleaning", "ac-jet-cleaning", "ac-deep-cleaning", "ac-water-leakage"],
  }),
  s({
    slug: "outdoor-unit-cleaning",
    name: "Outdoor Unit Cleaning",
    category: "ac-cleaning",
    icon: "Fan",
    shortDescription: "Condenser coil and fan cleaning so heat is released efficiently.",
    description:
      "The outdoor unit releases heat from your room. Dust, salt and debris on the condenser coil make it work harder. Cleaning the condenser and fan area helps cooling efficiency, particularly for units exposed to coastal air.",
    includes: ["Condenser coil cleaning", "Fan area and grill cleaning", "Debris removal around the unit", "Wiring visual check", "Test run"],
    relatedServices: ["indoor-unit-cleaning", "ac-deep-cleaning", "ac-fan-problems", "ac-not-cooling"],
  }),

  // ───────────── AC GAS ─────────────
  s({
    slug: "gas-charging",
    name: "Gas Charging",
    category: "ac-gas",
    icon: "Gauge",
    commercial: true,
    shortDescription: "Refrigerant gas charging after leak repair, installation or pipe work.",
    description:
      "Gas charging refills your AC with the correct refrigerant to the right pressure. It is usually needed after a leak is repaired, after installation or relocation, or when a system has lost gas. The technician checks for leaks before charging, since gas should not be refilled into a leaking system.",
    includes: [
      "Cooling and pressure check",
      "Leak check before charging",
      "Refrigerant charging to recommended pressure",
      "Cooling performance test",
    ],
    keywords: ["AC gas charging in Visakhapatnam", "AC gas filling Vizag", "AC gas refill near me"],
    relatedServices: ["gas-top-up", "refrigerant-leak-detection", "gas-leak-repair", "ac-not-cooling"],
  }),
  s({
    slug: "gas-top-up",
    name: "Gas Top-Up",
    category: "ac-gas",
    icon: "Gauge",
    shortDescription: "Top-up of refrigerant when pressure is slightly low.",
    description:
      "When refrigerant pressure is found slightly below the recommended level, a top-up can restore cooling. The technician measures pressure first and checks for leaks so the right work is done.",
    includes: ["Pressure measurement", "Basic leak check", "Refrigerant top-up", "Cooling test"],
    relatedServices: ["gas-charging", "refrigerant-pressure-check", "refrigerant-leak-detection"],
  }),
  s({
    slug: "refrigerant-leak-detection",
    name: "Refrigerant Leak Detection",
    category: "ac-gas",
    icon: "Search",
    shortDescription: "Locating refrigerant gas leaks in pipes, joints and coils.",
    description:
      "If your AC keeps losing gas, there is a leak somewhere in the system. Leak detection checks flare joints, valves, pipes and coils to find where refrigerant is escaping, so it can be repaired before recharging.",
    includes: ["Inspection of joints, valves and pipes", "Leak testing", "Findings explained", "Repair recommendation"],
    relatedServices: ["gas-leak-repair", "gas-charging", "refrigerant-pressure-check"],
  }),
  s({
    slug: "gas-leak-repair",
    name: "Gas Leak Repair",
    category: "ac-gas",
    icon: "Wrench",
    shortDescription: "Repair of refrigerant leaks at joints, pipes or coils.",
    description:
      "Once a leak is found, it needs to be repaired properly before the system is charged again. Gas leak repair may involve re-flaring joints, brazing, or replacing damaged sections of pipe depending on where the leak is.",
    includes: ["Leak point confirmation", "Joint re-flaring or brazing as required", "Pressure test", "Gas charging after repair"],
    relatedServices: ["refrigerant-leak-detection", "gas-charging", "ac-ice-formation"],
  }),
  s({
    slug: "refrigerant-pressure-check",
    name: "Refrigerant Pressure Check",
    category: "ac-gas",
    icon: "Gauge",
    shortDescription: "Gauge check of refrigerant pressure to diagnose cooling issues.",
    description:
      "A pressure check tells the technician whether the refrigerant level is correct. It is a quick, useful step when diagnosing poor cooling, icing, or after installation work.",
    includes: ["Gauge connection at service valve", "Pressure reading", "Cooling assessment", "Advice on next steps"],
    relatedServices: ["gas-top-up", "gas-charging", "ac-not-cooling"],
  }),

  // ───────────── AC INSTALLATION ─────────────
  s({
    slug: "split-ac-installation",
    name: "Split AC Installation",
    category: "ac-installation",
    icon: "AirVent",
    commercial: true,
    shortDescription: "Proper wall mounting, piping, drain and electrical connection for split ACs.",
    description:
      "A good split AC installation affects cooling, noise and leakage for years. The indoor unit is mounted level, the outdoor unit is positioned for airflow, copper piping and drain are routed neatly, and the electrical connection is checked before the test run.",
    includes: [
      "Indoor unit bracket mounting and levelling",
      "Outdoor unit placement",
      "Wall core-cut for piping where required",
      "Copper piping, insulation and drain connection",
      "Electrical connection check",
      "Vacuum / leak check and test run",
    ],
    keywords: ["split AC installation in Visakhapatnam", "AC installation near me", "AC fitting Vizag"],
    relatedServices: ["inverter-ac-installation", "new-ac-installation", "ac-relocation", "stabilizer-installation"],
  }),
  s({
    slug: "window-ac-installation",
    name: "Window AC Installation",
    category: "ac-installation",
    icon: "LayoutGrid",
    shortDescription: "Secure fitting of window ACs with proper support and sealing.",
    description:
      "Window ACs need firm support, a slight outward tilt for drainage and proper sealing around the frame. The installation includes fitting, sealing gaps and checking the power connection before testing.",
    includes: ["Frame or opening check", "Unit fitting with support", "Tilt for drainage", "Gap sealing", "Power check and test run"],
    relatedServices: ["split-ac-installation", "ac-uninstallation", "ac-relocation"],
  }),
  s({
    slug: "inverter-ac-installation",
    name: "Inverter AC Installation",
    category: "ac-installation",
    icon: "Zap",
    shortDescription: "Installation of inverter split ACs with careful piping and electrical checks.",
    description:
      "Inverter ACs are efficient but sensitive to installation quality and power supply. Careful piping, proper vacuuming and a suitable power point help the unit perform as designed.",
    includes: ["Indoor and outdoor unit mounting", "Copper piping and insulation", "Drain routing", "Power point and voltage check", "Test run"],
    keywords: ["inverter AC installation in Visakhapatnam", "inverter AC fitting Vizag"],
    relatedServices: ["split-ac-installation", "stabilizer-installation", "ac-pcb-repair", "new-ac-installation"],
  }),
  s({
    slug: "new-ac-installation",
    name: "New AC Installation",
    category: "ac-installation",
    icon: "Package",
    commercial: true,
    shortDescription: "Complete installation for a newly purchased AC, from site check to test run.",
    description:
      "Bought a new AC? The technician checks the room, suggests the best position for the indoor and outdoor units, and completes the installation with neat piping, drainage and a proper electrical connection.",
    includes: ["Site check and position advice", "Mounting of both units", "Piping, drain and insulation", "Electrical connection", "Test run"],
    relatedServices: ["split-ac-installation", "inverter-ac-installation", "window-ac-installation"],
  }),
  s({
    slug: "ac-relocation",
    name: "AC Relocation",
    category: "ac-installation",
    icon: "Move",
    shortDescription: "Safe removal and reinstallation of your AC at a new location.",
    description:
      "Moving house or rearranging rooms? AC relocation covers careful uninstallation, transport-ready packing of the units and reinstallation at the new place, with piping and gas checked afterwards.",
    includes: ["Gas pump-down before removal", "Uninstallation of both units", "Reinstallation at new location", "Piping and drain work", "Pressure check / gas top-up if required", "Test run"],
    keywords: ["AC relocation in Visakhapatnam", "AC shifting Vizag", "AC shifting near me"],
    relatedServices: ["ac-uninstallation", "ac-reinstallation", "gas-charging"],
  }),
  s({
    slug: "ac-uninstallation",
    name: "AC Uninstallation",
    category: "ac-installation",
    icon: "Trash2",
    shortDescription: "Careful removal of split or window ACs with gas pump-down.",
    description:
      "Removing an AC properly protects the refrigerant and the unit. The gas is pumped down into the outdoor unit, pipes are disconnected and capped, and both units are removed safely.",
    includes: ["Gas pump-down", "Pipe disconnection and capping", "Indoor and outdoor unit removal", "Bracket removal if required"],
    relatedServices: ["ac-reinstallation", "ac-relocation"],
  }),
  s({
    slug: "ac-reinstallation",
    name: "AC Reinstallation",
    category: "ac-installation",
    icon: "RotateCcw",
    shortDescription: "Reinstalling a previously removed AC with fresh checks.",
    description:
      "Reinstallation brings a removed AC back into use. The units are mounted, piping and drain are connected, pressure is checked and gas is topped up if needed before the test run.",
    includes: ["Mounting of both units", "Piping and drain connection", "Pressure check", "Gas top-up if required", "Test run"],
    relatedServices: ["ac-uninstallation", "ac-relocation", "gas-top-up"],
  }),

  // ───────────── AC REPAIR ─────────────
  s({
    slug: "ac-not-cooling",
    name: "AC Not Cooling",
    category: "ac-repair",
    icon: "Thermometer",
    commercial: true,
    shortDescription: "Diagnosis and repair when your AC runs but does not cool properly.",
    description:
      "An AC that runs but does not cool can be caused by dirty filters or coils, low refrigerant, a faulty capacitor, fan problems, sensor faults or compressor issues. The technician checks each possibility and explains the fix before starting the work.",
    symptoms: [
      "Air from the AC is not cold",
      "Room never reaches the set temperature",
      "Outdoor unit fan or compressor not running",
      "Cooling starts and stops frequently",
    ],
    includes: ["Filter and coil check", "Refrigerant pressure check", "Capacitor and compressor check", "Fan motor and sensor check", "Repair and cooling test"],
    keywords: ["AC not cooling service in Visakhapatnam", "AC not cooling repair Vizag", "AC not cooling near me"],
    relatedServices: ["gas-charging", "ac-deep-cleaning", "ac-compressor-repair", "ac-sensor-problems"],
  }),
  s({
    slug: "ac-water-leakage",
    name: "AC Water Leakage",
    category: "ac-repair",
    icon: "Droplets",
    shortDescription: "Fix water dripping from the indoor unit caused by drain or installation issues.",
    description:
      "Water leaking from the indoor unit is usually caused by a blocked drain pipe, a dirty drain tray, an unlevel indoor unit, or ice melting from a gas problem. The technician finds the cause and fixes it so the water drains outside as it should.",
    symptoms: ["Water dripping from the indoor unit", "Wet wall below the AC", "Gurgling sound from the drain", "Water with ice formation on the coil"],
    includes: ["Drain pipe check and flushing", "Drain tray cleaning", "Indoor unit level check", "Coil check for icing", "Test run"],
    keywords: ["AC water leakage repair in Visakhapatnam", "AC water leaking Vizag"],
    relatedServices: ["ac-jet-cleaning", "indoor-unit-cleaning", "ac-ice-formation", "split-ac-installation"],
  }),
  s({
    slug: "ac-ice-formation",
    name: "AC Ice Formation",
    category: "ac-repair",
    icon: "Snowflake",
    shortDescription: "Repair for ice or frost forming on the coil or copper pipes.",
    description:
      "Ice on the indoor coil or pipes usually points to restricted airflow (dirty filters or coil) or low refrigerant due to a leak. Left alone, it reduces cooling and can cause water leakage.",
    symptoms: ["Ice on copper pipes or indoor coil", "Weak airflow", "Water leakage after ice melts", "Poor cooling"],
    includes: ["Airflow and filter check", "Coil cleaning if required", "Pressure and leak check", "Repair and test run"],
    relatedServices: ["refrigerant-leak-detection", "gas-charging", "ac-deep-cleaning", "ac-water-leakage"],
  }),
  s({
    slug: "ac-noise-problem",
    name: "AC Noise Problem",
    category: "ac-repair",
    icon: "Volume2",
    shortDescription: "Fix rattling, buzzing, clicking or grinding noises from your AC.",
    description:
      "Unusual noise can come from loose panels, a worn fan motor, a damaged blower wheel, a loose outdoor unit mount or compressor issues. Finding the source early prevents bigger damage.",
    symptoms: ["Rattling or vibration", "Buzzing or humming", "Clicking when starting", "Grinding from the fan"],
    includes: ["Indoor and outdoor unit inspection", "Fan and blower check", "Mount and panel tightening", "Repair and test"],
    relatedServices: ["ac-fan-problems", "ac-compressor-repair", "outdoor-unit-cleaning"],
  }),
  s({
    slug: "ac-bad-smell",
    name: "AC Bad Smell",
    category: "ac-repair",
    icon: "Wind",
    shortDescription: "Remove musty or burning smells from your AC at the source.",
    description:
      "A musty smell usually comes from mould and dirt in the coil, blower or drain tray. A burning smell may point to an electrical problem and should be checked immediately. The technician identifies which it is and cleans or repairs accordingly.",
    symptoms: ["Musty or damp smell on start-up", "Smell that spreads through the room", "Burning or electrical smell"],
    includes: ["Coil, blower and drain tray inspection", "Cleaning of mould and dirt", "Electrical smell investigation", "Test run"],
    relatedServices: ["ac-deep-cleaning", "ac-jet-cleaning", "ac-electrical-problems"],
  }),
  s({
    slug: "ac-not-turning-on",
    name: "AC Not Turning On",
    category: "ac-repair",
    icon: "Power",
    shortDescription: "Diagnosis when the AC does not start or respond to the remote.",
    description:
      "If the AC does not turn on, the cause can be as simple as a tripped MCB or as specific as a PCB, sensor or wiring fault. The technician checks the power supply, remote signal, PCB and connections step by step.",
    symptoms: ["No display or light on the indoor unit", "No response to the remote", "AC trips the MCB", "Indoor unit starts but outdoor does not"],
    includes: ["Power supply and MCB check", "Remote and receiver check", "PCB and wiring check", "Repair and test"],
    relatedServices: ["ac-pcb-repair", "ac-electrical-problems", "mcb-installation"],
  }),
  s({
    slug: "ac-electrical-problems",
    name: "AC Electrical Problems",
    category: "ac-repair",
    icon: "PlugZap",
    shortDescription: "Repair of AC wiring, capacitor, contactor and power supply faults.",
    description:
      "AC electrical problems include burnt wiring, faulty capacitors, contactor issues, loose terminals and supply problems at the socket or MCB. Because ACs draw heavy current, these need careful, safe repair.",
    symptoms: ["AC tripping the MCB", "Burning smell near the socket or unit", "Outdoor unit not starting", "Sparking at the plug"],
    includes: ["Socket and MCB check", "Capacitor and contactor testing", "Wiring and terminal inspection", "Repair and load test"],
    relatedServices: ["ac-not-turning-on", "ac-pcb-repair", "mcb-installation", "stabilizer-installation"],
  }),
  s({
    slug: "ac-pcb-repair",
    name: "AC PCB Repair",
    category: "ac-repair",
    icon: "CircuitBoard",
    shortDescription: "Diagnosis and repair of AC control board (PCB) faults.",
    description:
      "The PCB controls every function of your AC. Voltage fluctuations, moisture and age can damage it, causing error codes, no start or erratic behaviour. The technician checks whether the board can be repaired or needs replacement.",
    symptoms: ["Error code on display", "AC not starting", "Remote not working with the unit", "AC turns off by itself"],
    includes: ["PCB inspection and testing", "Component-level repair where possible", "Replacement advice if needed", "Test run"],
    keywords: ["AC PCB repair in Visakhapatnam", "AC PCB repair Vizag", "inverter AC PCB repair"],
    relatedServices: ["ac-not-turning-on", "ac-sensor-problems", "stabilizer-installation", "ac-electrical-problems"],
  }),
  s({
    slug: "ac-compressor-repair",
    name: "AC Compressor Repair",
    category: "ac-repair",
    icon: "Cpu",
    commercial: true,
    shortDescription: "Diagnosis and repair of compressor starting and running problems.",
    description:
      "The compressor is the heart of the AC. Starting problems, overheating or tripping can be caused by capacitors, relays, wiring or the compressor itself. The technician diagnoses carefully before recommending repair or replacement.",
    symptoms: ["Outdoor unit fan runs but no cooling", "Compressor clicks but does not start", "Outdoor unit trips power", "Loud noise from the outdoor unit"],
    includes: ["Capacitor and relay check", "Compressor winding and current check", "Wiring inspection", "Repair and test"],
    keywords: ["AC compressor repair in Visakhapatnam", "AC compressor problem Vizag"],
    relatedServices: ["compressor-replacement", "ac-not-cooling", "ac-electrical-problems"],
  }),
  s({
    slug: "compressor-replacement",
    name: "Compressor Replacement",
    category: "ac-repair",
    icon: "Cpu",
    shortDescription: "Replacement of a failed compressor with system flush and gas charge.",
    description:
      "When a compressor has failed and cannot be repaired, replacement restores the AC. The work includes removing the old compressor, fitting the new one, brazing, vacuuming and charging the system with refrigerant.",
    symptoms: ["Compressor confirmed as failed", "Compressor stuck or shorted", "Repeated tripping from the compressor"],
    includes: ["Old compressor removal", "New compressor fitting and brazing", "Vacuum and leak test", "Gas charging", "Test run"],
    relatedServices: ["ac-compressor-repair", "gas-charging", "refrigerant-leak-detection"],
  }),
  s({
    slug: "ac-sensor-problems",
    name: "AC Sensor Problems",
    category: "ac-repair",
    icon: "Activity",
    shortDescription: "Fix faulty temperature and coil sensors causing cooling errors.",
    description:
      "Temperature and coil sensors tell the AC when to cool and when to stop. A faulty sensor can cause the AC to stop early, run constantly or show an error code.",
    symptoms: ["Error code related to sensor", "AC stops cooling too early", "AC runs without stopping", "Inconsistent room temperature"],
    includes: ["Sensor testing", "Sensor replacement if needed", "PCB connection check", "Test run"],
    relatedServices: ["ac-pcb-repair", "ac-not-cooling", "ac-not-turning-on"],
  }),
  s({
    slug: "ac-fan-problems",
    name: "AC Fan Problems",
    category: "ac-repair",
    icon: "Fan",
    shortDescription: "Repair of indoor blower and outdoor fan motor issues.",
    description:
      "If the indoor blower or outdoor fan stops or runs slowly, cooling and airflow suffer. Causes include a faulty fan motor, capacitor, blower wheel damage or dust build-up.",
    symptoms: ["Indoor unit blowing weak air", "Outdoor fan not spinning", "Fan making noise", "AC overheating and tripping"],
    includes: ["Fan motor check", "Capacitor test", "Blower wheel inspection", "Cleaning / repair and test"],
    relatedServices: ["ac-noise-problem", "outdoor-unit-cleaning", "ac-not-cooling"],
  }),

  // ───────────── AC MAINTENANCE ─────────────
  s({
    slug: "monthly-ac-maintenance",
    name: "Monthly Maintenance",
    category: "ac-maintenance",
    icon: "CalendarDays",
    commercial: true,
    shortDescription: "Regular monthly visits for ACs that run daily or for long hours.",
    description:
      "For ACs that run every day — in shops, clinics, offices or busy homes — monthly maintenance keeps filters clean and catches small issues early. The visit covers cleaning and a quick performance check.",
    includes: ["Filter cleaning", "Indoor unit wipe and drain check", "Cooling and airflow check", "Report of any issues found"],
    relatedServices: ["seasonal-ac-maintenance", "annual-ac-maintenance", "office-ac-maintenance"],
  }),
  s({
    slug: "seasonal-ac-maintenance",
    name: "Seasonal Maintenance",
    category: "ac-maintenance",
    icon: "Thermometer",
    shortDescription: "Pre-summer and post-season service to prepare your AC for heavy use.",
    description:
      "Seasonal maintenance prepares your AC before the hot months and checks it again after heavy use. It combines cleaning with checks on gas pressure, electrical connections and drainage.",
    includes: ["Filter and coil cleaning", "Drain check", "Pressure check", "Electrical connection check", "Cooling test"],
    relatedServices: ["ac-general-service", "ac-deep-cleaning", "annual-ac-maintenance"],
  }),
  s({
    slug: "annual-ac-maintenance",
    name: "Annual Maintenance",
    category: "ac-maintenance",
    icon: "ClipboardList",
    commercial: true,
    shortDescription: "Planned maintenance across the year for homes and businesses.",
    description:
      "Annual maintenance plans scheduled service visits through the year, so your ACs are cleaned and checked at regular intervals without you having to remember. Visit frequency and scope are discussed and agreed with you.",
    includes: ["Scheduled service visits", "Cleaning and performance checks", "Issue reporting", "Priority on repair requests during the plan"],
    keywords: ["AC maintenance in Visakhapatnam", "AC AMC Vizag", "annual AC maintenance"],
    relatedServices: ["seasonal-ac-maintenance", "commercial-ac-maintenance", "office-ac-maintenance"],
  }),
  s({
    slug: "office-ac-maintenance",
    name: "Office AC Maintenance",
    category: "ac-maintenance",
    icon: "Briefcase",
    commercial: true,
    shortDescription: "Maintenance for offices with multiple split ACs.",
    description:
      "Offices depend on working ACs. Office AC maintenance covers multiple units with visits planned around working hours, so staff and visitors stay comfortable.",
    includes: ["Multi-unit cleaning and checks", "Visits planned around office hours", "Issue reporting per unit", "Repair coordination"],
    relatedServices: ["commercial-ac-maintenance", "annual-ac-maintenance", "commercial-wiring"],
  }),
  s({
    slug: "commercial-ac-maintenance",
    name: "Commercial AC Maintenance",
    category: "ac-maintenance",
    icon: "Building2",
    commercial: true,
    shortDescription: "AC maintenance for shops, showrooms, clinics and commercial spaces.",
    description:
      "Commercial spaces often run ACs for long hours. Regular maintenance helps keep customers comfortable and reduces unexpected breakdowns during business hours.",
    includes: ["Scheduled cleaning of all units", "Performance and electrical checks", "Drain and leakage checks", "Repair coordination"],
    relatedServices: ["office-ac-maintenance", "annual-ac-maintenance", "commercial-wiring"],
  }),

  // ───────────── ELECTRICAL ─────────────
  s({
    slug: "electrical-wiring",
    name: "Electrical Wiring",
    category: "electrical",
    icon: "Cable",
    commercial: true,
    pageHref: "/electrical-wiring",
    shortDescription: "New wiring, rewiring and extension work for homes and businesses.",
    description:
      "Electrical wiring work for new construction, renovation, rewiring of old houses and adding new points. Wiring is planned according to load so the installation is safe and practical.",
    includes: ["Load and point planning", "Concealed or surface wiring", "Distribution board connection", "Testing of all circuits"],
    keywords: ["electrical wiring in Visakhapatnam", "wiring electrician Vizag"],
    relatedServices: ["house-wiring", "commercial-wiring", "db-box-installation", "earthing-work"],
  }),
  s({
    slug: "house-wiring",
    name: "House Wiring",
    category: "electrical",
    icon: "House",
    shortDescription: "Complete house wiring and rewiring for new and old homes.",
    description:
      "House wiring covers new homes, extensions and rewiring of older houses where wiring has aged. Points for lights, fans, sockets and AC are planned by room, with circuits separated at the distribution board.",
    includes: ["Room-wise point planning", "Wiring for lights, fans, sockets and AC", "DB box and MCB connection", "Earthing connection", "Testing"],
    keywords: ["house wiring in Visakhapatnam", "home wiring electrician Vizag"],
    relatedServices: ["electrical-wiring", "db-box-installation", "mcb-installation", "earthing-work"],
  }),
  s({
    slug: "commercial-wiring",
    name: "Commercial Wiring",
    category: "electrical",
    icon: "Building2",
    commercial: true,
    shortDescription: "Wiring for shops, offices, showrooms and commercial premises.",
    description:
      "Commercial wiring for shops, offices and showrooms, including lighting circuits, power sockets, AC points and distribution panels, planned for the premises' load and usage.",
    includes: ["Load planning", "Lighting and power circuits", "AC and equipment points", "Panel / DB connection", "Testing"],
    keywords: ["commercial electrical services in Visakhapatnam", "shop wiring Vizag", "office wiring Vizag"],
    relatedServices: ["electrical-panel-installation", "electrical-maintenance", "electrical-wiring"],
  }),
  s({
    slug: "electrical-installation",
    name: "Electrical Installation",
    category: "electrical",
    icon: "Plug",
    commercial: true,
    shortDescription: "Installation of electrical points, fittings and appliances.",
    description:
      "General electrical installation for new points, fittings, appliances and equipment, with correct cable size and protection for each load.",
    includes: ["New point installation", "Appliance connection", "Cable sizing and protection", "Testing"],
    keywords: ["electrical installation in Visakhapatnam", "electrician near me"],
    relatedServices: ["switch-socket-installation", "led-light-installation", "fan-installation", "mcb-installation"],
  }),
  s({
    slug: "electrical-repair",
    name: "Electrical Repair",
    category: "electrical",
    icon: "Wrench",
    commercial: true,
    pageHref: "/electrical-repair",
    shortDescription: "Repair of faulty wiring, switches, sockets, boards and fittings.",
    description:
      "Electrical repair for homes and businesses — from faulty switches and sockets to tripping circuits, loose connections and damaged wiring.",
    includes: ["Fault finding", "Switch, socket and wiring repair", "MCB and board check", "Testing after repair"],
    keywords: ["electrical repair in Visakhapatnam", "electrical repair near me", "electrician Vizag"],
    relatedServices: ["short-circuit-repair", "power-failure-troubleshooting", "circuit-breaker-replacement"],
  }),
  s({
    slug: "switch-socket-installation",
    name: "Switch & Socket Installation",
    category: "electrical",
    icon: "ToggleLeft",
    shortDescription: "Installation and replacement of switches, sockets and switch boards.",
    description:
      "New switches, sockets and modular switch boards installed or replaced. Loose, burnt or sparking switches and sockets are replaced with properly rated fittings.",
    includes: ["Switch board installation", "Socket replacement", "Correct rating for load", "Connection tightening and testing"],
    relatedServices: ["electrical-repair", "electrical-installation", "led-light-installation"],
  }),
  s({
    slug: "fan-installation",
    name: "Fan Installation",
    category: "electrical",
    icon: "Fan",
    shortDescription: "Installation of ceiling, wall and exhaust fans with regulator connection.",
    description:
      "Fan installation for ceiling, wall-mounted and exhaust fans, including regulator connection and checking the mounting for safety.",
    includes: ["Mounting check", "Fan fitting", "Regulator / switch connection", "Balance and speed test"],
    keywords: ["fan installation in Visakhapatnam", "fan fitting electrician Vizag"],
    relatedServices: ["ceiling-fan-installation", "exhaust-fan-installation", "led-light-installation"],
  }),
  s({
    slug: "ceiling-fan-installation",
    name: "Ceiling Fan Installation",
    category: "electrical",
    icon: "Fan",
    shortDescription: "Secure ceiling fan fitting with hook check and regulator wiring.",
    description:
      "Ceiling fans must be hung from a secure hook and wired correctly to the regulator. The electrician checks the hook, fits the fan, connects wiring and tests for wobble and speed.",
    includes: ["Ceiling hook check", "Fan assembly and fitting", "Regulator connection", "Wobble and speed test"],
    relatedServices: ["fan-installation", "exhaust-fan-installation", "switch-socket-installation"],
  }),
  s({
    slug: "exhaust-fan-installation",
    name: "Exhaust Fan Installation",
    category: "electrical",
    icon: "Wind",
    shortDescription: "Exhaust fan fitting for kitchens, bathrooms and shops.",
    description:
      "Exhaust fans remove heat, smoke and moisture from kitchens and bathrooms. Installation includes fitting in the opening, sealing and switch connection.",
    includes: ["Opening check", "Fan fitting and sealing", "Switch connection", "Test"],
    relatedServices: ["fan-installation", "ceiling-fan-installation", "electrical-installation"],
  }),
  s({
    slug: "led-light-installation",
    name: "LED Light Installation",
    category: "electrical",
    icon: "Lightbulb",
    commercial: true,
    shortDescription: "LED panels, strips and fixtures for homes, offices and shops.",
    description:
      "LED lighting for homes, offices and shops — including panel lights, cove strips and spot lights — installed with suitable drivers and neat wiring.",
    includes: ["LED fixture fitting", "Driver connection", "Wiring and switching", "Testing"],
    relatedServices: ["linear-led-ceiling-light-installation", "switch-socket-installation", "electrical-installation"],
  }),
  s({
    slug: "linear-led-ceiling-light-installation",
    name: "Linear LED Ceiling Light Installation",
    category: "electrical",
    icon: "Lightbulb",
    commercial: true,
    shortDescription: "Modern linear LED profile lights set into the ceiling in clean lines and patterns.",
    description:
      "Linear LED ceiling lights give rooms a clean, modern look — continuous lines of light recessed into the ceiling in straight runs, squares or custom patterns. The layout is marked on the ceiling, the ceiling is cut for the aluminium profile, LED strips and drivers are fitted and wired, and the diffuser is snapped in for an even, glare-free line of light.",
    symptoms: [
      "Planning a modern ceiling for a living room, bedroom or office",
      "Want even, glare-free lighting without bulky fixtures",
      "Renovating a false ceiling or gypsum ceiling",
      "Adding feature lighting in patterns or geometric designs",
    ],
    includes: [
      "Layout marking for lines, squares or custom patterns",
      "Ceiling cut-out for the LED profile",
      "Aluminium profile, LED strip and diffuser fitting",
      "LED driver installation and wiring",
      "Switching / connection to the circuit",
      "Final lighting test and alignment check",
    ],
    whenNeeded: [
      "During interior work or false-ceiling installation",
      "When upgrading old tube lights or panels to modern lighting",
      "For living rooms, bedrooms, offices, showrooms and shops",
    ],
    keywords: [
      "linear LED ceiling light installation Visakhapatnam",
      "profile light installation Vizag",
      "linear light fitting near me",
      "LED strip ceiling light Visakhapatnam",
    ],
    alt: "Linear LED ceiling profile lights installed in a Visakhapatnam home by Madhuri AC Service",
    gallery: [
      { src: "/images/work/linear-led-1.webp", alt: "Our electrician fitting a linear LED ceiling profile light" },
      { src: "/images/work/linear-led-2.webp", alt: "Completed linear LED ceiling light pattern in a bedroom" },
    ],
    relatedServices: ["led-light-installation", "switch-socket-installation", "house-wiring", "electrical-installation"],
  }),
  s({
    slug: "mcb-installation",
    name: "MCB Installation",
    category: "electrical",
    icon: "ToggleLeft",
    shortDescription: "Installation and replacement of MCBs with correct ratings.",
    description:
      "MCBs protect circuits from overload and short circuit. The electrician installs or replaces MCBs with the right rating for each circuit, including dedicated protection for ACs and heavy appliances.",
    includes: ["Circuit load check", "Correct MCB rating selection", "Installation in DB box", "Testing"],
    keywords: ["MCB installation in Visakhapatnam", "MCB replacement Vizag"],
    relatedServices: ["db-box-installation", "circuit-breaker-replacement", "electrical-panel-installation"],
  }),
  s({
    slug: "db-box-installation",
    name: "DB Box Installation",
    category: "electrical",
    icon: "Box",
    shortDescription: "Distribution board installation and upgrade for homes and shops.",
    description:
      "A distribution board (DB box) organises your circuits and houses protection devices. Installation or upgrade includes proper circuit separation, labelling and MCB / RCCB fitting as required.",
    includes: ["DB box mounting", "Circuit separation", "MCB / RCCB fitting", "Labelling and testing"],
    relatedServices: ["mcb-installation", "electrical-panel-installation", "earthing-work"],
  }),
  s({
    slug: "electrical-panel-installation",
    name: "Electrical Panel Installation",
    category: "electrical",
    icon: "Server",
    commercial: true,
    shortDescription: "Electrical panel installation for commercial and larger premises.",
    description:
      "Electrical panels for shops, offices and larger premises distribute power safely to multiple circuits and equipment. Installation is planned around the connected load.",
    includes: ["Load assessment", "Panel mounting", "Incoming and outgoing connections", "Protection devices", "Testing"],
    relatedServices: ["db-box-installation", "commercial-wiring", "mcb-installation"],
  }),
  s({
    slug: "circuit-breaker-replacement",
    name: "Circuit Breaker Replacement",
    category: "electrical",
    icon: "RotateCcw",
    shortDescription: "Replacement of faulty or frequently tripping circuit breakers.",
    description:
      "A breaker that trips without reason, will not reset, or is damaged should be replaced. The electrician also checks why it was tripping so the underlying issue is fixed.",
    includes: ["Breaker testing", "Cause investigation", "Replacement with correct rating", "Testing"],
    relatedServices: ["mcb-installation", "short-circuit-repair", "power-failure-troubleshooting"],
  }),
  s({
    slug: "short-circuit-repair",
    name: "Short Circuit Repair",
    category: "electrical",
    icon: "Zap",
    shortDescription: "Locating and repairing short circuits safely.",
    description:
      "Short circuits cause tripping, sparking and burnt wiring. The electrician isolates the affected circuit, locates the fault and repairs damaged wiring or fittings.",
    symptoms: ["MCB trips as soon as it is switched on", "Sparking or burn marks at switches or sockets", "Burning smell", "Part of the premises without power"],
    includes: ["Circuit isolation", "Fault location", "Wiring / fitting repair", "Insulation and load testing"],
    keywords: ["short circuit repair in Visakhapatnam", "emergency electrician Vizag"],
    relatedServices: ["power-failure-troubleshooting", "circuit-breaker-replacement", "electrical-repair"],
  }),
  s({
    slug: "power-failure-troubleshooting",
    name: "Power Failure Troubleshooting",
    category: "electrical",
    icon: "PowerOff",
    shortDescription: "Finding the cause when part or all of your premises has no power.",
    description:
      "When power fails inside your premises while the neighbourhood supply is fine, the fault is usually in the board, MCB, wiring or a connection. The electrician traces the fault and restores power safely.",
    symptoms: ["No power in some rooms", "Neighbours have power but you do not", "Repeated tripping", "Low voltage in parts of the house"],
    includes: ["Supply and meter-side check", "DB and MCB check", "Circuit tracing", "Repair and testing"],
    relatedServices: ["short-circuit-repair", "electrical-repair", "mcb-installation"],
  }),
  s({
    slug: "electrical-maintenance",
    name: "Electrical Maintenance",
    category: "electrical",
    icon: "Settings",
    commercial: true,
    shortDescription: "Periodic checks of wiring, boards and fittings to prevent faults.",
    description:
      "Electrical maintenance includes periodic checks of the DB box, connections, switches, sockets and earthing so loose or heating connections are found before they cause a fault.",
    includes: ["DB and connection tightening", "Switch and socket check", "Earthing check", "Report of issues found"],
    keywords: ["electrical maintenance in Visakhapatnam"],
    relatedServices: ["electrical-safety-inspection", "commercial-wiring", "earthing-work"],
  }),
  s({
    slug: "earthing-work",
    name: "Earthing Work",
    category: "electrical",
    icon: "ShieldCheck",
    shortDescription: "New earthing and earthing improvement for safety of people and appliances.",
    description:
      "Proper earthing protects people from shock and appliances from damage. Earthing work includes new earth pits, connection to the DB and checking existing earthing.",
    includes: ["Earthing check", "Earth pit / connection work", "Connection to DB box", "Testing"],
    relatedServices: ["electrical-safety-inspection", "db-box-installation", "house-wiring"],
  }),
  s({
    slug: "electrical-safety-inspection",
    name: "Electrical Safety Inspection",
    category: "electrical",
    icon: "BadgeCheck",
    commercial: true,
    shortDescription: "Inspection of wiring, boards and earthing to identify safety risks.",
    description:
      "An electrical safety inspection checks the condition of wiring, the DB box, protection devices, earthing and fittings, and explains any risks found along with recommended work.",
    includes: ["Visual wiring inspection", "DB and protection device check", "Earthing check", "Findings and recommendations"],
    relatedServices: ["electrical-maintenance", "earthing-work", "mcb-installation"],
  }),
  s({
    slug: "inverter-installation",
    name: "Inverter Installation",
    category: "electrical",
    icon: "BatteryCharging",
    shortDescription: "Home and shop power inverter installation with battery connection.",
    description:
      "Power inverter installation for homes and shops, including battery placement, connection to selected circuits and changeover wiring so essential loads keep running during power cuts.",
    includes: ["Inverter and battery placement", "Circuit selection", "Changeover wiring", "Testing on backup"],
    keywords: ["inverter installation in Visakhapatnam", "home inverter wiring Vizag"],
    relatedServices: ["stabilizer-installation", "db-box-installation", "mcb-installation"],
  }),
  s({
    slug: "stabilizer-installation",
    name: "Stabilizer Installation",
    category: "electrical",
    icon: "Activity",
    shortDescription: "Voltage stabilizer installation for ACs and appliances.",
    description:
      "Voltage stabilizers protect ACs and appliances from fluctuations. The stabilizer is mounted, connected between the supply and the appliance, and checked under load.",
    includes: ["Mounting", "Input / output connection", "Rating check for the appliance", "Load test"],
    relatedServices: ["inverter-ac-installation", "ac-pcb-repair", "inverter-installation"],
  }),
];

// ───────────── Helpers ─────────────

const BY_SLUG = new Map(SERVICES.map((sv) => [sv.slug, sv]));

export function getService(slug: string): Service | undefined {
  return BY_SLUG.get(slug);
}

export function getServices(slugs: string[]): Service[] {
  return slugs.map((sl) => BY_SLUG.get(sl)).filter((x): x is Service => Boolean(x));
}

export function serviceHref(sv: Pick<Service, "slug" | "pageHref">): string {
  return sv.pageHref ?? `/services/${sv.slug}`;
}

/** Services that get their own /services/[slug] page. */
export const DETAIL_SERVICES = SERVICES.filter((sv) => !sv.pageHref);

export const byCategory = (...cats: ServiceCategory[]) => SERVICES.filter((sv) => cats.includes(sv.category));

export const CATEGORY_TABS = [
  { id: "ac-services", label: "AC Services", href: "/ac-services" },
  { id: "ac-repair", label: "AC Repair", href: "/ac-repair" },
  { id: "ac-cleaning", label: "AC Cleaning", href: "/ac-cleaning" },
  { id: "ac-installation", label: "AC Installation", href: "/ac-installation" },
  { id: "ac-maintenance", label: "AC Maintenance", href: "/ac-maintenance" },
  { id: "electrical", label: "Electrical Services", href: "/electrical-services" },
  { id: "commercial", label: "Commercial Services", href: "/electrical-services#commercial" },
] as const;

export type TabId = (typeof CATEGORY_TABS)[number]["id"];

export function servicesForTab(tab: TabId, list: Service[] = SERVICES): Service[] {
  switch (tab) {
    case "ac-services":
      return list.filter((sv) => ["ac-cleaning", "ac-gas", "ac-installation"].includes(sv.category));
    case "ac-repair":
      return list.filter((sv) => sv.category === "ac-repair");
    case "ac-cleaning":
      return list.filter((sv) => sv.category === "ac-cleaning");
    case "ac-installation":
      return list.filter((sv) => sv.category === "ac-installation");
    case "ac-maintenance":
      return list.filter((sv) => sv.category === "ac-maintenance");
    case "electrical":
      return list.filter((sv) => sv.category === "electrical");
    case "commercial":
      return list.filter((sv) => sv.commercial);
  }
}

export const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  "ac-cleaning": "AC Cleaning",
  "ac-gas": "AC Gas Services",
  "ac-installation": "AC Installation",
  "ac-repair": "AC Repair",
  "ac-maintenance": "AC Maintenance",
  electrical: "Electrical Services",
};

export const CATEGORY_HREF: Record<ServiceCategory, string> = {
  "ac-cleaning": "/ac-cleaning",
  "ac-gas": "/ac-services",
  "ac-installation": "/ac-installation",
  "ac-repair": "/ac-repair",
  "ac-maintenance": "/ac-maintenance",
  electrical: "/electrical-services",
};

/** Services offered in the booking dropdown. */
export const BOOKING_OPTIONS = [
  "AC General Service",
  "AC Deep Cleaning",
  "Jet Cleaning",
  "AC Repair",
  "AC Not Cooling",
  "AC Water Leakage",
  "AC Gas Charging",
  "PCB Repair",
  "Compressor Repair",
  "AC Installation",
  "AC Relocation",
  "AC Maintenance",
  "Electrical Repair",
  "Electrical Wiring",
  "Fan Installation",
  "Linear LED Ceiling Light Installation",
  "LED Light Installation",
  "MCB Installation",
  "Other",
];

/** "What's wrong with your AC?" problem cards. */
export const AC_PROBLEMS: { label: string; slug: string; icon: IconName; hint: string }[] = [
  { label: "AC Not Cooling", slug: "ac-not-cooling", icon: "Thermometer", hint: "Runs but the air isn't cold" },
  { label: "Water Leakage", slug: "ac-water-leakage", icon: "Droplets", hint: "Dripping from the indoor unit" },
  { label: "Ice Formation", slug: "ac-ice-formation", icon: "Snowflake", hint: "Frost on coil or pipes" },
  { label: "Noise Problem", slug: "ac-noise-problem", icon: "Volume2", hint: "Rattling, buzzing, grinding" },
  { label: "Bad Smell", slug: "ac-bad-smell", icon: "Wind", hint: "Musty or burning smell" },
  { label: "Not Turning On", slug: "ac-not-turning-on", icon: "Power", hint: "No display or response" },
  { label: "PCB Problem", slug: "ac-pcb-repair", icon: "CircuitBoard", hint: "Error codes, erratic behaviour" },
  { label: "Compressor Problem", slug: "ac-compressor-repair", icon: "Cpu", hint: "Outdoor unit not cooling" },
  { label: "Fan Problem", slug: "ac-fan-problems", icon: "Fan", hint: "Weak airflow or fan stuck" },
  { label: "Electrical Problem", slug: "ac-electrical-problems", icon: "PlugZap", hint: "Tripping or sparking" },
];
