export interface VesselPosition {
  mmsi: string;
  imo?: string;
  name?: string;
  latitude: number;
  longitude: number;
  speed?: number;
  course?: number;
  heading?: number;
  destination?: string;
  eta?: string;
  lastUpdate?: string;
  type?: string;
  navStatus?: string;
}

/** Label kategori kapal dari kode tipe AIS (digit pertama shipType). */
export function shipTypeLabel(code: number | null | undefined): string | undefined {
  if (code === undefined || code === null || !Number.isFinite(code)) return undefined;
  const group = Math.floor(code / 10);
  if (code === 30) return "Fishing Vessel";
  if (code >= 31 && code <= 32) return "Towing Vessel";
  if (group === 3) {
    if (code === 33) return "Dredger";
    if (code === 34) return "Diving Vessel";
    if (code === 35) return "Military Vessel";
    if (code === 36) return "Sailing Vessel";
    if (code === 37) return "Pleasure Craft";
    return "Special Craft";
  }
  if (group === 4) return "High-Speed Craft";
  if (group === 5) {
    if (code === 50) return "Pilot Vessel";
    if (code === 51) return "Search & Rescue";
    if (code === 52) return "Tug";
    if (code === 53) return "Port Tender";
    if (code === 54) return "Anti-Pollution";
    if (code === 55) return "Law Enforcement";
    return "Local Vessel";
  }
  if (group === 6) return "Passenger Vessel";
  if (group === 7) return "Cargo Vessel";
  if (group === 8) return "Tanker";
  if (group === 9) return "Other Vessel";
  return undefined;
}

/** Label navigational status AIS dalam Bahasa Indonesia. */
export function navStatusLabel(code: number | null | undefined): string | undefined {
  if (code === undefined || code === null || !Number.isFinite(code)) return undefined;
  switch (code) {
    case 0:
      return "Berlayar (mesin)";
    case 1:
      return "Berlabuh";
    case 2:
      return "Tidak mengendalikan";
    case 3:
      return "Manuver terbatas";
    case 4:
      return "Dibatasi sarat";
    case 5:
      return "Tambat";
    case 6:
      return "Kandas";
    case 7:
      return "Sedang menangkap ikan";
    case 8:
      return "Berlayar (layar)";
    default:
      return undefined;
  }
}
