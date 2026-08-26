"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import type { VesselPosition } from "@/lib/vessel-types";
import VesselDetailPanel from "./VesselDetailPanel";

const REFRESH_INTERVAL_MS = 45_000;
const MAX_MARKERS = 400;

const VesselMap = dynamic(() => import("./VesselMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted)",
        fontSize: 14,
      }}
    >
      Memuat peta…
    </div>
  ),
});

type DataFilter = "all" | "moving" | "stopped";

const FILTER_OPTIONS: { key: DataFilter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "moving", label: "Bergerak" },
  { key: "stopped", label: "Berhenti" },
];

export default function VesselTracking() {
  const [vessels, setVessels] = useState<VesselPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [lastKnown, setLastKnown] = useState<
    Map<string, { vessel: VesselPosition; seenAt: number }>
  >(new Map());

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<DataFilter>("all");
  const [selectedMmsi, setSelectedMmsi] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const inflightRef = useRef(false);
  const loadRef = useRef<() => void>(() => {});

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const load = async () => {
      if (inflightRef.current) return;
      inflightRef.current = true;
      try {
        const res = await fetch("/api/vessels", {
          signal: controller.signal,
          cache: "no-store",
        });
        const json = (await res.json()) as {
          ok: boolean;
          vessels?: VesselPosition[];
          error?: string;
        };
        if (!res.ok || !json.ok) {
          throw new Error(json.error ?? `HTTP ${res.status}`);
        }
        if (!cancelled) {
          const fresh = json.vessels ?? [];
          const stamp = Date.now();
          setVessels(fresh);
          setLastKnown((prev) => {
            const next: Map<string, { vessel: VesselPosition; seenAt: number }> =
              prev.size > 5000 ? new Map() : new Map(prev);
            for (const v of fresh) {
              next.set(v.mmsi, { vessel: v, seenAt: stamp });
            }
            return next;
          });
          setError(null);
          setLastUpdated(stamp);
          setNow(stamp);
        }
      } catch (err) {
        if (
          !cancelled &&
          !(err instanceof DOMException && err.name === "AbortError")
        ) {
          setError(err instanceof Error ? err.message : "Gagal memuat data");
        }
      } finally {
        inflightRef.current = false;
        if (!cancelled) setLoading(false);
      }
    };

    loadRef.current = () => {
      void load();
    };
    void load();
    const intervalId = window.setInterval(load, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      loadRef.current = () => {};
      controller.abort();
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (lastUpdated === null) return;
    const tickId = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(tickId);
  }, [lastUpdated]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const secondsAgo =
    lastUpdated !== null && now !== null
      ? Math.max(0, Math.floor((now - lastUpdated) / 1000))
      : null;

  const selectedFromFeed =
    vessels.find((v) => v.mmsi === selectedMmsi) ?? null;
  const rememberedEntry =
    selectedMmsi && !selectedFromFeed
      ? lastKnown.get(selectedMmsi) ?? null
      : null;
  const selectedVessel = selectedFromFeed ?? rememberedEntry?.vessel ?? null;
  const staleMinutes =
    !selectedFromFeed && rememberedEntry && now !== null
      ? Math.max(1, Math.floor((now - rememberedEntry.seenAt) / 60_000))
      : null;

  // Bila kapal hasil pencarian tidak lolos filter aktif, tampilkan semua
  // agar marker kapal yang dipilih tetap terlihat di peta.
  const selectedMatchesFilter =
    !selectedVessel ||
    filter === "all" ||
    (filter === "moving" ? (selectedVessel.speed ?? 0) >= 0.5 : (selectedVessel.speed ?? 0) < 0.5);
  const effectiveFilter = selectedMatchesFilter ? filter : "all";

  const filteredVessels = useMemo(() => {
    if (effectiveFilter === "all") return vessels;
    if (effectiveFilter === "moving") return vessels.filter((v) => (v.speed ?? 0) >= 0.5);
    return vessels.filter((v) => (v.speed ?? 0) < 0.5);
  }, [vessels, effectiveFilter]);

  const markers = useMemo(
    () => filteredVessels.slice(0, MAX_MARKERS),
    [filteredVessels],
  );

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return vessels
      .filter(
        (v) =>
          v.name?.toLowerCase().includes(q) ||
          v.mmsi.includes(q) ||
          v.imo?.includes(q),
      )
      .slice(0, 8);
  }, [query, vessels]);

  const handleSelectFromSearch = (mmsi: string) => {
    setSelectedMmsi(mmsi);
    setDropdownOpen(false);
    searchInputRef.current?.blur();
  };

  const flyTarget =
    selectedVessel !== null
      ? { latitude: selectedVessel.latitude, longitude: selectedVessel.longitude }
      : null;

  const handleRetry = () => {
    setError(null);
    loadRef.current();
  };

  return (
    <section
      style={{
        padding: "56px 24px 80px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--gold-500)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 10,
            display: "block",
          }}
        >
          Realtime AIS
        </span>
        <h1 className="section-title" style={{ marginBottom: 10 }}>
          Vessel Tracking
        </h1>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>
          Pantau posisi kapal secara near-real-time berbasis data AIS.
          Posisi diperbarui otomatis setiap{" "}
          {Math.round(REFRESH_INTERVAL_MS / 1000)} detik.
        </p>
      </div>

      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          marginBottom: 16,
        }}
        className="tracking-toolbar"
      >
        {/* Search */}
        <div ref={dropdownRef} style={{ position: "relative", flex: 1, minWidth: 240 }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                position: "absolute",
                left: 14,
                pointerEvents: "none",
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              placeholder="Cari nama kapal, MMSI, atau IMO…"
              onChange={(e) => {
                setQuery(e.target.value);
                setDropdownOpen(true);
              }}
              onFocus={() => setDropdownOpen(true)}
              aria-label="Cari kapal"
              style={{
                width: "100%",
                padding: "12px 40px 12px 40px",
                borderRadius: 12,
                border: "1px solid var(--card-border)",
                background: "var(--card-bg)",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                fontSize: 14,
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setDropdownOpen(false);
                }}
                aria-label="Hapus pencarian"
                style={{
                  position: "absolute",
                  right: 10,
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {dropdownOpen && query.trim() && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 6px)",
                left: 0,
                right: 0,
                zIndex: 1100,
                background: "var(--header-bg)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid var(--card-border)",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {searchResults.length === 0 ? (
                <div
                  style={{
                    padding: "14px 16px",
                    fontSize: 13.5,
                    color: "var(--text-muted)",
                  }}
                >
                  Tidak ada kapal yang cocok dengan &ldquo;{query.trim()}&rdquo;.
                </div>
              ) : (
                searchResults.map((v) => (
                  <button
                    key={v.mmsi}
                    onClick={() => handleSelectFromSearch(v.mmsi)}
                    onMouseDown={(e) => e.preventDefault()}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      width: "100%",
                      textAlign: "left",
                      padding: "11px 16px",
                      background: v.mmsi === selectedMmsi ? "rgba(200, 164, 94, 0.1)" : "transparent",
                      border: "none",
                      borderBottom: "1px solid var(--card-border)",
                      cursor: "pointer",
                      transition: "background 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(200, 164, 94, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        v.mmsi === selectedMmsi ? "rgba(200, 164, 94, 0.1)" : "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {v.name ?? `Kapal ${v.mmsi}`}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                      MMSI {v.mmsi}
                      {v.imo ? ` · IMO ${v.imo}` : ""}
                      {v.speed !== undefined ? ` · ${v.speed.toFixed(1)} kn` : ""}
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 6 }}>
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              style={{
                padding: "9px 16px",
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "inherit",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background:
                  filter === opt.key ? "rgba(200, 164, 94, 0.15)" : "transparent",
                color:
                  filter === opt.key ? "var(--gold-500)" : "var(--text-secondary)",
                border: `1.5px solid ${filter === opt.key ? "var(--gold-500)" : "var(--card-border)"}`,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignItems: "center",
          marginBottom: 14,
          fontSize: 13,
          color: "var(--text-secondary)",
        }}
      >
        {loading ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span
              className="pulse-dot"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--teal-400)",
                display: "inline-block",
              }}
            />
            Memuat data kapal…
          </span>
        ) : secondsAgo !== null ? (
          <>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                className="pulse-dot"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  animation: "pulse-glow 2s infinite",
                }}
              />
              Terakhir diperbarui:{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {secondsAgo < 5
                  ? "baru saja"
                  : `${secondsAgo} detik lalu`}
              </strong>
            </span>
            <span>·</span>
            <span>
              {markers.length.toLocaleString("id-ID")} kapal ditampilkan
              {filteredVessels.length > markers.length
                ? ` dari ${filteredVessels.length.toLocaleString("id-ID")}`
                : ""}
            </span>
          </>
        ) : null}

        {error && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 50,
              fontSize: 12.5,
              fontWeight: 500,
              color: "#fbbf24",
              background: "rgba(251, 191, 36, 0.08)",
              border: "1px solid rgba(251, 191, 36, 0.25)",
            }}
          >
            Gagal memperbarui — menampilkan data terakhir
            {!loading && (
              <button
                onClick={handleRetry}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--gold-400)",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 12.5,
                  padding: 0,
                }}
              >
                Coba lagi
              </button>
            )}
          </span>
        )}
      </div>

      {/* Map area */}
      <div
        style={{
          position: "relative",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--card-border)",
          boxShadow: "var(--shadow-card)",
          height: "clamp(480px, calc(100vh - 320px), 720px)",
        }}
        className="tracking-map-wrap"
      >
        {!loading && vessels.length === 0 && !error ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              textAlign: "center",
              padding: 24,
            }}
          >
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
              <path d="M4 18l-1-5h18l-2 5" />
              <path d="M5 13V7h8l2 3h4v3" />
            </svg>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Belum ada data kapal
            </p>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--text-secondary)",
                margin: 0,
                maxWidth: 380,
              }}
            >
              Data posisi belum tersedia saat ini. Pembaruan berikutnya akan
              dicoba otomatis.
            </p>
          </div>
        ) : (
          <VesselMap
            vessels={markers}
            selectedMmsi={selectedMmsi}
            flyTarget={flyTarget}
            onSelect={(mmsi) => setSelectedMmsi(mmsi)}
            onClearSelection={() => setSelectedMmsi(null)}
          />
        )}

        {loading && vessels.length === 0 && error === null && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--section-alt-bg)",
              transition: "opacity 0.3s ease",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  margin: "0 auto 14px",
                  borderRadius: "50%",
                  border: "3px solid var(--card-border)",
                  borderTopColor: "var(--gold-500)",
                  animation: "spin 0.9s linear infinite",
                }}
              />
              <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                Mengambil posisi kapal…
              </span>
            </div>
          </div>
        )}

        {loading && vessels.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              zIndex: 850,
              padding: "6px 14px",
              borderRadius: 50,
              fontSize: 12.5,
              fontWeight: 500,
              color: "var(--text-primary)",
              background: "var(--header-bg)",
              border: "1px solid var(--card-border)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            Memperbarui…
          </div>
        )}

        <VesselDetailPanel
          vessel={selectedVessel}
          staleMinutes={staleMinutes}
          onClose={() => setSelectedMmsi(null)}
        />
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .bantara-vessel-marker {
          background: transparent;
          border: none;
        }
        :global(.bantara-cluster) {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(10, 22, 40, 0.85);
          border: 2px solid var(--gold-500);
          color: var(--gold-300);
          font-weight: 700;
          font-size: 12px;
          box-shadow: 0 0 18px rgba(200, 164, 94, 0.35);
        }
        :global([data-theme="light"] .bantara-cluster) {
          background: rgba(255, 255, 255, 0.9);
        }
        input:focus {
          border-color: rgba(200, 164, 94, 0.55) !important;
        }
        @media (max-width: 768px) {
          .tracking-map-wrap {
            height: clamp(420px, calc(100vh - 420px), 560px);
            min-height: 420px;
          }
          .tracking-toolbar {
            flex-direction: column;
            align-items: stretch;
          }
        }
        :global(.leaflet-container) {
          font-family: inherit;
        }
        :global(.leaflet-tooltip) {
          background: var(--header-bg);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          box-shadow: var(--shadow-card);
        }
        :global(.leaflet-tooltip-top:before) {
          border-top-color: var(--card-border);
        }
        :global(.leaflet-control-attribution) {
          background: rgba(4, 10, 24, 0.7) !important;
          color: var(--text-muted) !important;
          font-size: 10px !important;
        }
        :global(.leaflet-control-attribution a) {
          color: var(--text-secondary) !important;
        }
        :global([data-theme="light"] .leaflet-control-attribution) {
          background: rgba(255, 255, 255, 0.75) !important;
        }
      `}</style>
    </section>
  );
}
