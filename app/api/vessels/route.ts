import { NextResponse, type NextRequest } from "next/server";
import { getVessels, VesselApiError } from "@/lib/vessel-api";

export const dynamic = "force-dynamic";

const RATE_LIMIT_MAX = 30;
const RATE_LIMIT_WINDOW_MS = 60_000;

const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  if (hits.size > 1000) {
    for (const [key, entry] of hits) {
      if (entry.resetAt <= now) hits.delete(key);
    }
  }

  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function GET(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json(
      { ok: false, error: "Terlalu banyak permintaan. Coba lagi nanti." },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const vessels = await getVessels();
    return NextResponse.json(
      { ok: true, count: vessels.length, vessels },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    if (err instanceof VesselApiError) {
      return NextResponse.json(
        { ok: false, error: err.message },
        { status: err.status, headers: { "Cache-Control": "no-store" } },
      );
    }
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}
