"use client";

import { useEffect, useRef } from "react";

const corridors = [
  {
    region: "Jawa ↔ Kalimantan",
    desc: "Rute utama pengangkutan kargo proyek, alat berat, dan material konstruksi via kapal & tronton.",
    destinations: "Pontianak • Balikpapan • Banjarmasin • Samarinda • Tarakan",
    mode: "Laut (Kapal/Tongkang) & Darat",
  },
  {
    region: "Jawa ↔ Sumatera",
    desc: "Distribusi lintas pulau harian via penyeberangan feri & jalur darat Trans Sumatera.",
    destinations: "Lampung • Palembang • Pekanbaru • Medan • Padang • Aceh",
    mode: "Truk Fuso, Tronton & Trailer",
  },
  {
    region: "Jawa ↔ Sulawesi & Indonesia Timur",
    desc: "Pengiriman kontainer FCL/LCL serta logistik kargo proyek khusus antarpulau.",
    destinations: "Makassar • Palu • Kendari • Manado • Ambon • Sorong • Jayapura",
    mode: "Kapal Kontainer & Kargo Curah",
  },
  {
    region: "Jawa ↔ Bali & Nusa Tenggara",
    desc: "Layanan door-to-door langsung ke berbagai titik proyek dan gudang distribusi.",
    destinations: "Denpasar • Mataram / Lombok • Kupang • Sumbawa",
    mode: "Truk Box, Bak & Trailer",
  },
];

export default function NetworkRoutes() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "90px 24px",
        background: "var(--section-alt-bg)",
        position: "relative",
        transition: "background 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: 55 }}
        >
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
            Jaringan Nasional
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 14,
            }}
          >
            Koridor &amp; Rute Pengiriman Nusantara
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
              borderRadius: 2,
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              fontSize: 15.5,
              color: "var(--text-secondary)",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Menjangkau seluruh kota pelabuhan dan sentra industri di Indonesia dengan kombinasi armada darat dan laut yang terintegrasi.
          </p>
        </div>

        {/* 4 Corridor Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 20,
          }}
        >
          {corridors.map((c, idx) => (
            <div
              key={idx}
              className="glass-card animate-on-scroll"
              style={{
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--gold-500)",
                    background: "rgba(200, 164, 94, 0.12)",
                    padding: "4px 10px",
                    borderRadius: 20,
                    marginBottom: 12,
                    letterSpacing: "0.04em",
                  }}
                >
                  {c.mode}
                </span>
                <h3
                  style={{
                    fontSize: 17.5,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                  }}
                >
                  {c.region}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {c.desc}
                </p>
              </div>

              <div
                style={{
                  paddingTop: 14,
                  borderTop: "1px solid var(--card-border)",
                  fontSize: 12.5,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>Kota Tujuan:</strong><br />
                {c.destinations}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
