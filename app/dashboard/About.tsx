"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Jangkauan Nasional",
      desc: "Beroperasi di seluruh wilayah Indonesia, dari Sabang sampai Merauke.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="22" height="12" rx="2" />
          <path d="M1 10h22" />
        </svg>
      ),
      title: "Armada Lengkap",
      desc: "Didukung armada kapal dan truk yang siap melayani kebutuhan logistik Anda.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Solusi Terintegrasi",
      desc: "Layanan logistik end-to-end dari pengangkutan hingga pergudangan.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        background: "var(--navy-950)",
        position: "relative",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(200,164,94,0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

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
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Column — Text */}
          <div>
            <div className="animate-on-scroll">
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#c8a45e",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "block",
                }}
              >
                About Us
              </span>
              <h2 className="section-title">
                Mitra Logistik
                <br />
                Terpercaya Anda
              </h2>
            </div>

            <div className="animate-on-scroll" style={{ marginTop: 24 }}>
              <p
                style={{
                  fontSize: 16,
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                <strong style={{ color: "#e2e8f0" }}>
                  PT Bima Arung Dwipantara (BANTARA)
                </strong>{" "}
                adalah perusahaan penyedia layanan logistik, shipping operator,
                dan logistic solution yang berfokus pada transportasi darat,
                laut, project cargo, pergudangan, dan distribusi ke seluruh
                Indonesia.
              </p>
              <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8 }}>
                Dengan komitmen untuk memberikan layanan terbaik, kami
                mengutamakan keamanan, ketepatan waktu, dan efisiensi dalam
                setiap pengiriman. Didukung oleh tim profesional dan armada
                yang handal, kami siap menjadi mitra logistik terpercaya Anda.
              </p>
            </div>

            <div
              className="animate-on-scroll"
              style={{ marginTop: 32 }}
            >
              <a href="#services" className="btn-primary">
                Explore Services
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column — Highlight Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 28,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: "rgba(200, 164, 94, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#f1f5f9",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#94a3b8",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}