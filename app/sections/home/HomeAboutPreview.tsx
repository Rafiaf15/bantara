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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 50,
            alignItems: "center",
          }}
          className="about-preview-grid"
        >
          {/* Left Column: Visual Image with Floating Badge */}
          <div className="animate-on-scroll" style={{ position: "relative" }}>
            <div
              className="about-preview-img-box"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: 400,
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
                  bottom: 20,
                  left: 20,
                  right: 20,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--gold-400)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Multimodal Logistics
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", marginTop: 4 }}>
                  Transportasi Darat, Laut &amp; Project Cargo
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              className="glass-card floating-exp-badge"
              style={{
                position: "absolute",
                top: -15,
                right: -10,
                padding: "12px 18px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "var(--shadow-card)",
                borderRadius: "12px",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--gold-500)", lineHeight: 1 }}>
                5+
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.25 }}>
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
                  marginBottom: 10,
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
                fontSize: 15,
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginTop: 16,
                marginBottom: 24,
              }}
            >
              <strong style={{ color: "var(--text-primary)" }}>PT Bima Arung Dwipantara (BANTARA)</strong> hadir memberikan kepastian pengiriman barang, kontainer, hingga material proyek berskala besar dengan armada sendiri dan jaringan mitra pelabuhan ke seluruh Indonesia.
            </p>

            {/* 2 Feature Cards */}
            <div
              className="animate-on-scroll feature-two-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 28,
              }}
            >
              <div
                className="glass-card"
                style={{ padding: "16px 18px" }}
              >
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  Ongkir Transparan
                </div>
                <div style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  Tarif disepakati di awal tanpa biaya siluman.
                </div>
              </div>

              <div
                className="glass-card"
                style={{ padding: "16px 18px" }}
              >
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  Door to Door
                </div>
                <div style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.45 }}>
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
            gap: 36px !important;
          }
          .about-preview-img-box {
            height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          .floating-exp-badge {
            top: -10px !important;
            right: 0 !important;
            padding: 8px 14px !important;
          }
          .feature-two-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
