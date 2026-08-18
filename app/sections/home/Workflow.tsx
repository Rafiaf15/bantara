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
        padding: "90px 24px",
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
            Alur Kerja
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 14,
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
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              fontSize: 15.5,
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Empat langkah transparan mulai dari konsultasi awal hingga barang sampai dengan aman di lokasi tujuan.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
          }}
        >
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card animate-on-scroll"
              style={{
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 26,
                    fontWeight: 800,
                    color: "var(--gold-500)",
                    display: "block",
                    marginBottom: 14,
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.35,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 20,
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
