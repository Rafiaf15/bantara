"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Tanya Rute & Ongkir",
    desc: "Kirim detail muatan, berat, dimensi, dan kota tujuan via WhatsApp atau formulir. Tim sales kami menghitung tarif terbaik.",
  },
  {
    num: "02",
    title: "Penjadwalan & Pemuatan",
    desc: "Armada truk/kontainer datang sesuai jadwal. Barang ditimbang, dicek kondisinya, dan diamankan sesuai standar SOP muatan.",
  },
  {
    num: "03",
    title: "Pengawalan Perjalanan",
    desc: "Muatan diberangkatkan lewat jalur darat, laut, atau multimoda. Anda menerima pembaruan status perjalanan secara proaktif.",
  },
  {
    num: "04",
    title: "Tiba di Tujuan & Serah Terima",
    desc: "Barang diantar langsung ke alamat penerima, disertai penandatanganan dokumen serah terima dan bukti penerimaan resmi.",
  },
];

export default function Workflow() {
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
        padding: "70px 16px",
        background: "var(--section-bg)",
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
        {/* Section Header */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: 45 }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--gold-500)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 8,
              display: "block",
            }}
          >
            Alur Kerja
          </span>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 4.5vw, 2.8rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            Proses Pengiriman Mudah &amp; Terstruktur
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
              borderRadius: 2,
              margin: "0 auto 14px",
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Empat langkah transparan mulai dari konsultasi awal hingga barang sampai dengan aman di lokasi tujuan.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card animate-on-scroll"
              style={{
                padding: "24px 20px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "14px",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "var(--gold-500)",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontSize: 16.5,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 18,
                  height: 2,
                  width: "30%",
                  background: "var(--gold-500)",
                  opacity: 0.4,
                  borderRadius: 2,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
