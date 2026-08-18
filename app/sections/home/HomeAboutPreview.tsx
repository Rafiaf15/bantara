"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeAboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="about-preview-grid"
        >
          {/* Left Column: Visual Image with Floating Badge */}
          <div className="animate-on-scroll" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: 420,
                border: "1px solid var(--card-border)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <Image
                src="/images/Tiang-bg.webp"
                alt="Operasional Logistik dan Pengangkutan BANTARA"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(4,10,24,0.85) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gold-400)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Multimodal Logistics
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", marginTop: 4 }}>
                  Transportasi Darat, Laut &amp; Project Cargo
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                padding: "16px 22px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, color: "var(--gold-500)", lineHeight: 1 }}>
                5+
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>
                Tahun Melayani<br /><span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>Seluruh Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 2 Feature Highlights */}
          <div>
            <div className="animate-on-scroll">
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--gold-500)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                Tentang Kami
              </span>
              <h2 className="section-title">
                Mitra Ekspedisi &amp; Logistik Terintegrasi
              </h2>
            </div>

            <p
              className="animate-on-scroll"
              style={{
                fontSize: 15.5,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginTop: 20,
                marginBottom: 28,
              }}
            >
              <strong style={{ color: "var(--text-primary)" }}>PT Bima Arung Dwipantara (BANTARA)</strong> hadir memberikan kepastian pengiriman barang, kontainer, hingga material proyek berskala besar dengan armada sendiri dan jaringan mitra pelabuhan ke seluruh Indonesia.
            </p>

            {/* 2 Feature Cards */}
            <div
              className="animate-on-scroll"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div
                className="glass-card"
                style={{ padding: "18px 20px" }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  Ongkir Transparan
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Tarif disepakati di awal tanpa biaya siluman.
                </div>
              </div>

              <div
                className="glass-card"
                style={{ padding: "18px 20px" }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  Door to Door
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Penjemputan langsung di gudang/pabrik Anda.
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <Link href="/tentang-kami" className="btn-primary">
                Pelajari Profil Lengkap
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-preview-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
