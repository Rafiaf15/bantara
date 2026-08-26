import "server-only";

/**
 * Vessel API service layer (server-side only).
 *
 * Providers:
 * - "openwaters" (default): aggregated open-data AIS from Open Waters / aiscast
 *   (Kystverket Norway, Fintraffic Digitraffic, AISHub aggregate, aisstream.io).
 *   No API key required. Covers Indonesian waters via the AISHub aggregate.
 *     Docs: https://github.com/openwatersio/aiscast
 *     - GET https://ais.openwaters.io/v1/vessels?bbox=<minLat,minLon,maxLat,maxLon>  (GeoJSON)
 *     Bounding box dapat dioverride lewat env AIS_BBOX (format sama).
 *
 * - "digitraffic": open-data AIS from Fintraffic. No API key required.
 *   Finnish/Baltic waters only.
 *     Docs: https://www.digitraffic.fi/en/marine-traffic/
 *
 * - "aishub": AISHub community API (requires membership username).
 *     Enable with AIS_PROVIDER=aishub and VESSEL_API_KEY=<username>.
 *     Docs: https://www.aishub.net/ais-api
 */

import { navStatusLabel, shipTypeLabel, type VesselPosition } from "./vessel-types";

export type { VesselPosition } from "./vessel-types";

export type VesselProvider = "openwaters" | "digitraffic" | "aishub";

export class VesselApiError extends Error {
  status: number;

  constructor(message: string, status = 502) {
    super(message);
    this.name = "VesselApiError";
    this.status = status;
  }
}

const PROVIDER_TIMEOUT_MS = 10_000;

function isValidLatitude(lat: unknown): lat is number {
  return typeof lat === "number" && Number.isFinite(lat) && lat >= -90 && lat <= 90;
}

function isValidLongitude(lon: unknown): lon is number {
  return typeof lon === "number" && Number.isFinite(lon) && lon >= -180 && lon <= 180;
}

function normalizeHeading(heading: number | null | undefined): number | undefined {
  if (
    heading === null ||
    heading === undefined ||
    !Number.isFinite(heading) ||
    heading < 0 ||
    heading >= 360
  ) {
    return undefined;
  }
  return heading;
}

async function fetchJson(url: string): Promise<unknown> {
  let res: Response;
  try {
    res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
      cache: "no-store",
    });
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      throw new VesselApiError("Provider request timeout", 504);
    }
    throw new VesselApiError("Failed to reach AIS provider", 502);
  }

  if (res.status === 429) {
    throw new VesselApiError("AIS provider rate limit reached", 429);
  }
  if (!res.ok) {
    throw new VesselApiError(
      `AIS provider responded with status ${res.status}`,
      res.status >= 500 ? 502 : res.status,
    );
  }

  try {
    return await res.json();
  } catch {
    throw new VesselApiError("Invalid JSON from AIS provider", 502);
  }
}

/* ─────────────────────────── Digitraffic ─────────────────────────── */

interface DigitrafficLocationFeature {
  mmsi?: number;
  geometry?: { coordinates?: [number, number] };
  properties?: {
    sog?: number;
    cog?: number;
    heading?: number;
    timestampExternal?: number;
  };
}

interface DigitrafficVesselMetadata {
  mmsi?: number;
  name?: string;
  imo?: number | string;
}

async function fetchDigitraffic(): Promise<VesselPosition[]> {
  const [locationsRes, vesselsRes] = await Promise.all([
    fetchJson("https://meri.digitraffic.fi/api/ais/v1/locations"),
    fetchJson("https://meri.digitraffic.fi/api/ais/v1/vessels").catch(() => null),
  ]);

  const features = (locationsRes as { features?: DigitrafficLocationFeature[] })?.features;
  if (!Array.isArray(features)) {
    throw new VesselApiError("Unexpected response from AIS provider", 502);
  }

  const metadataByMmsi = new Map<string, DigitrafficVesselMetadata>();
  const vesselMeta = (vesselsRes as DigitrafficVesselMetadata[] | null) ?? [];
  if (Array.isArray(vesselMeta)) {
    for (const v of vesselMeta) {
      if (v && typeof v.mmsi === "number") {
        metadataByMmsi.set(String(v.mmsi), v);
      }
    }
  }

  const result: VesselPosition[] = [];
  for (const f of features) {
    if (!f || typeof f.mmsi !== "number") continue;
    const coords = f.geometry?.coordinates;
    if (!coords || coords.length < 2) continue;
    const longitude = coords[0];
    const latitude = coords[1];
    if (!isValidLatitude(latitude) || !isValidLongitude(longitude)) continue;

    // Digitraffic scales SOG (knots x10), COG (degrees x10); 511 heading = N/A.
    const sog = f.properties?.sog;
    const cog = f.properties?.cog;
    const tsExternal = f.properties?.timestampExternal;

    const meta = metadataByMmsi.get(String(f.mmsi));
    result.push({
      mmsi: String(f.mmsi),
      imo:
        meta?.imo !== undefined && meta?.imo !== null && String(meta.imo) !== "0"
          ? String(meta.imo)
          : undefined,
      name: meta?.name?.trim() ? meta.name.trim() : undefined,
      latitude,
      longitude,
      speed: typeof sog === "number" && sog < 1023 ? Math.round(sog) / 10 : undefined,
      course: typeof cog === "number" && cog < 3600 ? Math.round(cog) / 10 : undefined,
      heading: normalizeHeading(f.properties?.heading),
      lastUpdate:
        typeof tsExternal === "number"
          ? new Date(tsExternal).toISOString()
          : undefined,
    });
  }

  return result;
}

/* ───────────────────────────── AISHub ────────────────────────────── */

// AISHub JSON array format (documented field order):
// [STATUS, MMSI, TIME_UTC, LONGITUDE, LATITUDE, COG, SOG, HEADING, ROT,
//  NAV_STAT, IMO, NAME, CALLSIGN, TYPE, A, B, C, D, DRAUGHT, DEST, ETA]
type AishubVessel = (string | number | null)[];

async function fetchAishub(username: string): Promise<VesselPosition[]> {
  const url =
    `http://data.aishub.net/ws.php?username=${encodeURIComponent(username)}` +
    `&format=1&output=json&compress=0`;
  const data = (await fetchJson(url)) as unknown;

  if (!Array.isArray(data) || data.length < 2 || !Array.isArray(data[1])) {
    throw new VesselApiError("Unexpected response from AIS provider", 502);
  }

  const rows = data[1] as unknown[];
  const result: VesselPosition[] = [];

  for (const row of rows) {
    if (!Array.isArray(row)) continue;
    const cells = row as AishubVessel;
    const mmsi = cells[1];
    const longitude = cells[3];
    const latitude = cells[4];
    const cog = cells[5];
    const sog = cells[6];
    const heading = cells[7];
    const imo = cells[10];
    const name = cells[11];
    const dest = cells[19];
    const etaEpoch = cells[20];

    if (typeof mmsi !== "number") continue;
    if (!isValidLatitude(latitude) || !isValidLongitude(longitude)) continue;

    const numOrUndef = (v: unknown): number | undefined =>
      typeof v === "number" && Number.isFinite(v) ? v : undefined;

    const speedKnots = numOrUndef(sog);
    const courseDeg = numOrUndef(cog);

    result.push({
      mmsi: String(mmsi),
      imo: typeof imo === "number" && imo > 0 ? String(imo) : undefined,
      name: typeof name === "string" && name.trim() ? name.trim() : undefined,
      latitude,
      longitude,
      speed: speedKnots !== undefined ? Math.round(speedKnots * 10) / 10 : undefined,
      course: courseDeg !== undefined ? Math.round(courseDeg * 10) / 10 : undefined,
      heading: normalizeHeading(numOrUndef(heading)),
      destination:
        typeof dest === "string" && dest.trim() ? dest.trim() : undefined,
      eta:
        typeof etaEpoch === "number" && etaEpoch > 0
          ? new Date(etaEpoch * 1000).toISOString()
          : undefined,
      lastUpdate:
        typeof cells[2] === "string" ? new Date(`${cells[2]}Z`).toISOString() : undefined,
    });
  }

  return result;
}

/* ─────────────────────────── Open Waters ─────────────────────────── */

interface OpenwatersFeature {
  id?: number | string;
  geometry?: { coordinates?: [number, number] };
  properties?: {
    mmsi?: number;
    name?: string;
    sog?: number;
    cog?: number;
    heading?: number;
    seen?: string;
    type?: number;
    nav_status?: number;
  };
}

async function fetchOpenwaters(): Promise<VesselPosition[]> {
  const bbox = process.env.AIS_BBOX?.trim() || "-11,95,6,141";
  const url = `https://ais.openwaters.io/v1/vessels?bbox=${encodeURIComponent(bbox)}`;
  const data = (await fetchJson(url)) as unknown;

  const features = (data as { features?: OpenwatersFeature[] })?.features;
  if (!Array.isArray(features)) {
    throw new VesselApiError("Unexpected response from AIS provider", 502);
  }

  const result: VesselPosition[] = [];
  for (const f of features) {
    if (!f || !f.geometry?.coordinates) continue;
    const coords = f.geometry.coordinates;
    if (coords.length < 2) continue;
    const longitude = coords[0];
    const latitude = coords[1];
    if (!isValidLatitude(latitude) || !isValidLongitude(longitude)) continue;

    const p = f.properties ?? {};
    const mmsi = p.mmsi ?? f.id;
    if (mmsi === undefined || mmsi === null) continue;

    result.push({
      mmsi: String(mmsi),
      name:
        typeof p.name === "string" && p.name.trim() ? p.name.trim() : undefined,
      latitude,
      longitude,
      speed:
        typeof p.sog === "number" && Number.isFinite(p.sog)
          ? Math.round(p.sog * 10) / 10
          : undefined,
      course:
        typeof p.cog === "number" && Number.isFinite(p.cog)
          ? Math.round(p.cog * 10) / 10
          : undefined,
      heading: normalizeHeading(p.heading),
      lastUpdate:
        typeof p.seen === "string" ? new Date(p.seen).toISOString() : undefined,
      type: shipTypeLabel(p.type),
      navStatus: navStatusLabel(p.nav_status),
    });
  }

  return result;
}

/* ───────────────────────────── Public API ─────────────────────────── */

export function getActiveProvider(): VesselProvider {
  const raw = process.env.AIS_PROVIDER?.trim().toLowerCase();
  if (raw === "digitraffic") return "digitraffic";
  if (raw === "aishub") return "aishub";
  return "openwaters";
}

// Cache bersama antar-request agar N pengunjung = 1 request ke provider
// per TTL, bukan N request.
const CACHE_TTL_MS = 30_000;
let cache: { at: number; vessels: VesselPosition[] } | null = null;

async function fetchFromProvider(provider: VesselProvider): Promise<VesselPosition[]> {
  if (provider === "aishub") {
    const apiKey = process.env.VESSEL_API_KEY?.trim();
    if (!apiKey) {
      throw new VesselApiError(
        "VESSEL_API_KEY is not configured on the server",
        500,
      );
    }
    return fetchAishub(apiKey);
  }
  if (provider === "digitraffic") {
    return fetchDigitraffic();
  }
  return fetchOpenwaters();
}

export async function getVessels(): Promise<VesselPosition[]> {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_TTL_MS) {
    return cache.vessels;
  }

  const provider = getActiveProvider();

  try {
    const vessels = await fetchFromProvider(provider);
    cache = { at: Date.now(), vessels };
    return vessels;
  } catch (err) {
    // Fallback ke provider open-data lain bila provider utama gagal,
    // lalu ke cache basi (lebih baik daripada error ke pengunjung).
    const fallbacks: VesselProvider[] =
      provider === "openwaters" ? ["digitraffic"] : ["openwaters", "digitraffic"];
    for (const fb of fallbacks) {
      if (fb === "aishub") continue;
      try {
        const vessels = await fetchFromProvider(fb);
        cache = { at: Date.now(), vessels };
        return vessels;
      } catch {
        /* lanjut ke fallback berikutnya */
      }
    }
    if (cache) {
      return cache.vessels;
    }
    throw err;
  }
}
