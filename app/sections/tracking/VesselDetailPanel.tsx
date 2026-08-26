"use client";

import type { VesselPosition } from "@/lib/vessel-types";

interface VesselDetailPanelProps {
  vessel: VesselPosition | null;
  onClose: () => void;
  staleMinutes?: number | null;
}

function formatCoord(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value)) return "-";
  return value.toFixed(5);
}

function formatEta(iso: string | undefined): string {
  if (!iso) return "-";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

function formatLastUpdate(iso: string | undefined): string {
  if (!iso) return "-";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

export default function VesselDetailPanel({ vessel, onClose, staleMinutes }: VesselDetailPanelProps) {
  if (!vessel) return null;

  const rows: { label: string; value: string }[] = [
    { label: "MMSI", value: vessel.mmsi },
    { label: "IMO", value: vessel.imo ?? "-" },
    { label: "Jenis", value: vessel.type ?? "-" },
    { label: "Status", value: vessel.navStatus ?? "-" },
    { label: "Speed", value: vessel.speed !== undefined ? `${vessel.speed.toFixed(1)} kn` : "-" },
    { label: "Course", value: vessel.course !== undefined ? `${vessel.course.toFixed(1)}°` : "-" },
    { label: "Heading", value: vessel.heading !== undefined ? `${vessel.heading.toFixed(0)}°` : "-" },
    { label: "Destination", value: vessel.destination ?? "-" },
    { label: "ETA", value: formatEta(vessel.eta) },
    { label: "Latitude", value: formatCoord(vessel.latitude) },
    { label: "Longitude", value: formatCoord(vessel.longitude) },
    { label: "Last Update", value: formatLastUpdate(vessel.lastUpdate) },
  ];

  return (
    <div className="vessel-panel glass-card">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--gold-500)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Informasi Kapal
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.3,
            }}
          >
            {vessel.name ?? `Kapal ${vessel.mmsi}`}
          </h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Tutup panel"
          style={{
            width: 30,
            height: 30,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            border: "1px solid var(--card-border)",
            background: "var(--surface)",
            color: "var(--text-secondary)",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div
        style={{
          display: "none",
          width: 40,
          height: 4,
          borderRadius: 2,
          background: "var(--card-border)",
          margin: "-6px auto 12px",
        }}
        className="vessel-panel-handle"
      />

      {staleMinutes !== null && staleMinutes !== undefined && (
        <div
          style={{
            padding: "8px 12px",
            marginBottom: 14,
            borderRadius: 10,
            fontSize: 12.5,
            fontWeight: 500,
            color: "#fbbf24",
            background: "rgba(251, 191, 36, 0.08)",
            border: "1px solid rgba(251, 191, 36, 0.25)",
          }}
        >
          Kapal tidak terdeteksi AIS — posisi terakhir{" "}
          {staleMinutes < 60
            ? `${staleMinutes} menit lalu`
            : `${Math.floor(staleMinutes / 60)} jam lalu`}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {rows.map((row) => (
          <div
            key={row.label}
            style={{
              padding: "9px 12px",
              borderRadius: 10,
              background: "var(--surface)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 2,
              }}
            >
              {row.label}
            </div>
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 600,
                color:
                  row.value === "-" ? "var(--text-muted)" : "var(--text-primary)",
                wordBreak: "break-word",
              }}
            >
              {row.value}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .vessel-panel {
          position: absolute;
          top: 16px;
          right: 16px;
          bottom: 16px;
          width: 360px;
          max-width: calc(100% - 32px);
          overflow-y: auto;
          padding: 20px;
          z-index: 900;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        @media (max-width: 768px) {
          .vessel-panel {
            top: auto;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 100%;
            max-height: 55%;
            border-radius: var(--radius-lg) var(--radius-lg) 0 0;
            padding: 18px 16px;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.45);
          }
          .vessel-panel-handle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
