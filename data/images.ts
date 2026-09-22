// Service photos — free Unsplash License images (commercial use allowed, no attribution required).
// To use your OWN photo for a service, drop it at /public/images/services/<slug>.webp — it overrides these automatically.

const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`;

export const PHOTOS = {
  acWall: U("1759772238012-9d5ad59ae637"),
  acDisplay: U("1762341123870-d706f257a12e"),
  acYellowWall: U("1726614846573-c1ac2e6161d1"),
  acWallUnit: U("1757219525975-03b5984bc6e8"),
  acBrickWall: U("1718203862467-c33159fdc504"),
  outdoorUnits: U("1545649311-24d0ac00ae82"),
  outdoorBuilding: U("1722010811002-a772b2066890"),
  outdoorMono: U("1566917064245-1c6bff30dbf1"),
  outdoorFour: U("1568634697393-0165d25e7acb"),
  outdoorGroup: U("1698479603408-1a66a6d9e80f"),
  outdoorSide: U("1722131646940-b821a6cc6252"),
  commercialWall: U("1765634219706-15729e7a3295"),
  commercialFour: U("1667983453881-4992fe86ab1b"),
  pcbBlue: U("1562408590-e32931084e23"),
  pcbMacro: U("1518770660439-4636190af475"),
  pcbDark: U("1592659762303-90081d34b277"),
  electricianMeter: U("1758101755915-462eddc23f57"),
  wiresHands: U("1682345262055-8f95f3c513ea"),
  switchBoxWires: U("1635335874521-7987db781153"),
  breakerPanel: U("1544724569-5f546fd6f2b5"),
  switchBox: U("1566417110090-6b15a06ec800"),
  industrialPanel: U("1780034766312-73825064806c"),
  clampMeter: U("1553873002-785d775854c9"),
  wires: U("1601462904263-f2fa0c851cb9"),
  powerLines: U("1597502310092-31cdaa35b46d"),
  ceilingFan: U("1609519479841-5fd3b2884e17"),
  ceilingFan3: U("1576503963299-fcd31822b523"),
  fanRoom: U("1677959098115-1aafeb9313c0"),
  wallSwitch: U("1556217994-22de7face210"),
  lightSwitch: U("1698768144235-b5dbe3043bb2"),
  switchBlueWall: U("1520254695104-2765bc239df7"),
  ceilingLights: U("1660492039236-4e660d5a1a14"),
  circleLight: U("1731415414236-87371e56c13f"),
  modernLights: U("1767203330128-b4c27297f320"),
  // India / Vizag
  vizagCity: U("1707833711203-7b37bdeb73b6"),
  vizagBeachTown: U("1655979521437-ae1875109d79"),
  vizagAerial: U("1597652354379-ba72f896c41f"),
  vizagCoast: U("1609854534028-b512f5246abc"),
  indianApartment: U("1639335944967-03b902ead5fd"),
  indianHighrise: U("1632398461186-37c76a70062f"),
  indianBuilding: U("1605640214887-5f1f80e46cd4"),
  indianLinemen: U("1641194298727-fa6e5401bf1b"),
  indianLightsShop: U("1511729530272-7198cdce7b8a"),
} as const;

type PhotoKey = keyof typeof PHOTOS;

const SERVICE_PHOTO: Record<string, PhotoKey> = {
  // AC cleaning
  "ac-general-service": "acWall",
  "ac-deep-cleaning": "acWallUnit",
  "ac-jet-cleaning": "acBrickWall",
  "ac-filter-cleaning": "acDisplay",
  "indoor-unit-cleaning": "acDisplay",
  "outdoor-unit-cleaning": "outdoorUnits",
  // AC gas
  "gas-charging": "outdoorBuilding",
  "gas-top-up": "outdoorSide",
  "refrigerant-leak-detection": "outdoorMono",
  "gas-leak-repair": "outdoorGroup",
  "refrigerant-pressure-check": "outdoorFour",
  // AC installation
  "split-ac-installation": "acWall",
  "window-ac-installation": "acBrickWall",
  "inverter-ac-installation": "acDisplay",
  "new-ac-installation": "indianApartment",
  "ac-relocation": "indianApartment",
  "ac-uninstallation": "outdoorSide",
  "ac-reinstallation": "acWallUnit",
  // AC repair
  "ac-not-cooling": "acDisplay",
  "ac-water-leakage": "acWallUnit",
  "ac-ice-formation": "acBrickWall",
  "ac-noise-problem": "outdoorMono",
  "ac-bad-smell": "acWallUnit",
  "ac-not-turning-on": "acWall",
  "ac-electrical-problems": "electricianMeter",
  "ac-pcb-repair": "pcbBlue",
  "ac-compressor-repair": "outdoorUnits",
  "compressor-replacement": "outdoorFour",
  "ac-sensor-problems": "pcbMacro",
  "ac-fan-problems": "outdoorGroup",
  // AC maintenance
  "monthly-ac-maintenance": "acWall",
  "seasonal-ac-maintenance": "acDisplay",
  "annual-ac-maintenance": "outdoorUnits",
  "office-ac-maintenance": "indianHighrise",
  "commercial-ac-maintenance": "commercialWall",
  // Electrical
  "electrical-wiring": "switchBoxWires",
  "house-wiring": "indianBuilding",
  "commercial-wiring": "indianHighrise",
  "electrical-installation": "wiresHands",
  "electrical-repair": "electricianMeter",
  "switch-socket-installation": "wallSwitch",
  "fan-installation": "ceilingFan",
  "ceiling-fan-installation": "ceilingFan3",
  "exhaust-fan-installation": "fanRoom",
  "led-light-installation": "ceilingLights",
  "mcb-installation": "switchBox",
  "db-box-installation": "breakerPanel",
  "electrical-panel-installation": "industrialPanel",
  "circuit-breaker-replacement": "clampMeter",
  "short-circuit-repair": "wires",
  "power-failure-troubleshooting": "powerLines",
  "electrical-maintenance": "electricianMeter",
  "earthing-work": "wires",
  "electrical-safety-inspection": "clampMeter",
  "inverter-installation": "industrialPanel",
  "stabilizer-installation": "lightSwitch",
};

export function stockPhotoFor(slug: string): string | undefined {
  const k = SERVICE_PHOTO[slug];
  return k ? PHOTOS[k] : undefined;
}

/** Hero: Visakhapatnam coastline & city. */
export const HERO_PHOTO = PHOTOS.vizagCity;
/** Vizag photos for service-area / about sections. */
export const VIZAG_PHOTOS = { city: PHOTOS.vizagBeachTown, aerial: PHOTOS.vizagAerial, coast: PHOTOS.vizagCoast };
