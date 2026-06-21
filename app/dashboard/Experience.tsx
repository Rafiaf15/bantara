"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Pengiriman Tiang Listrik",
    desc: "Pengangkutan tiang listrik beton dan baja ke berbagai proyek PLN di seluruh Indonesia.",
    category: "Project Cargo",
    year: "2024",
    image: "/images/Tiang-bg.webp",
    imageAlt: "Pengiriman tiang listrik ke proyek PLN",
  },
  {
    title: "Pengangkutan Besi Beton", 
    desc: "Distribusi besi beton dan material konstruksi untuk proyek infrastruktur skala besar.",
    category: "Darat",
    year: "2024",
    image: "/images/Besi-bg.webp",
    imageAlt: "Truk pengangkutan besi beton",
  },
  {
    title: "Container Shipment",
    desc: "Pengiriman container antar pulau melalui jalur laut dengan armada kapal terpercaya.",
    category: "Laut",
    year: "2023",
    image: "/images/Container-bg.webp",
    imageAlt: "Container shipment antar pulau",
  },
  {
    title: "Pengiriman Alat Berat & Mobil",
    desc: "Transportasi alat berat dan kendaraan dengan penanganan khusus dan asuransi lengkap.",
    category: "Heavy Lift",
    year: "2023",
    image: "/images/Mobil-bg.webp",
    imageAlt: "Pengiriman alat berat dan kendaraan",
  },
  {
    title: "Material Project (Spun Pile, Konstruksi)",
    desc: "Pengangkutan spun pile dan material konstruksi untuk proyek pembangunan gedung dan jembatan.",
    category: "Project Cargo",
    year: "2022",
    image: "/images/Spun-bg.webp",
    imageAlt: "Pengangkutan spun pile konstruksi",
  },
];

const categoryColors: Record<string, string> = {
  "Project Cargo": "#c8a45e",
  Darat: "#22c55e",
  Laut: "#0ea5e9",
  "Heavy Lift": "#f97316",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 150);
              });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        background: "var(--navy-950)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: 80 }}
        >
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
            Track Record
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 16,
            }}
          >
            Our Experience
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #c8a45e, #e0c07c)",
              borderRadius: 2,
              margin: "0 auto 20px",
            }}
          />
          <p
            style={{
              fontSize: 16,
              color: "#94a3b8",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Pengalaman kami dalam menangani berbagai proyek logistik berskala
            besar di seluruh Indonesia.
          </p>
        </div>

        {/* Split layout items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            const accentColor = categoryColors[exp.category] || "#c8a45e";

            return (
              <div
                key={i}
                className="animate-on-scroll experience-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: 340,
                  borderBottom:
                    i < experiences.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                }}
              >
                {/* Image side */}
                <div
                  className="exp-image-side"
                  style={{
                    order: isEven ? 0 : 1,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 280,
                  }}
                >
                  {/* Fallback gradient placeholder (ganti dengan <Image> jika foto tersedia) */}
                  <div
                    className="exp-image-bg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, rgba(15,23,42,1) 0%, ${accentColor}18 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.6s ease",
                    }}
                  >
                    {/* Ganti div ini dengan <Image> jika foto sudah tersedia:*/}
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt}
                      fill
                      style={{
                        objectFit: "cover",
                        opacity: 0.7,
                      }}
                    />

                    {/* Category icon accent */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 24,
                        left: isEven ? "auto" : 24,
                        right: isEven ? 24 : "auto",
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: `${accentColor}18`,
                        border: `1.5px solid ${accentColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: 20 }}>
                        {exp.category === "Laut"
                          ? "⚓"
                          : exp.category === "Darat"
                            ? "🚛"
                            : exp.category === "Heavy Lift"
                              ? "🏗️"
                              : "📦"}
                      </span>
                    </div>
                  </div>

                  {/* Diagonal overlay untuk transisi ke text side */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isEven
                        ? "linear-gradient(to right, transparent 70%, rgba(15,23,42,0.95) 100%)"
                        : "linear-gradient(to left, transparent 70%, rgba(15,23,42,0.95) 100%)",
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Text side */}
                <div
                  className="exp-text-side"
                  style={{
                    order: isEven ? 1 : 0,
                    display: "flex",
                    alignItems: "center",
                    padding: "48px 48px 48px",
                    paddingLeft: isEven ? 48 : 56,
                    paddingRight: isEven ? 56 : 48,
                    position: "relative",
                  }}
                >
                  {/* Vertical accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: isEven ? 0 : "auto",
                      right: isEven ? "auto" : 0,
                      width: 3,
                      height: "40%",
                      background: `linear-gradient(180deg, transparent, ${accentColor}, transparent)`,
                      borderRadius: 2,
                    }}
                  />

                  <div style={{ width: "100%" }}>
                    {/* Year */}
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#475569",
                        letterSpacing: "0.1em",
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      {exp.year}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                        fontWeight: 700,
                        color: "#f1f5f9",
                        marginBottom: 16,
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.title}
                    </h3>

                    {/* Category badge */}
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: accentColor,
                        padding: "5px 14px",
                        background: `${accentColor}15`,
                        border: `1px solid ${accentColor}30`,
                        borderRadius: 50,
                        letterSpacing: "0.05em",
                        marginBottom: 20,
                      }}
                    >
                      {exp.category}
                    </span>

                    {/* Divider */}
                    <div
                      style={{
                        width: 40,
                        height: 2,
                        background: `${accentColor}50`,
                        borderRadius: 1,
                        marginBottom: 20,
                      }}
                    />

                    {/* Description */}
                    <p
                      style={{
                        fontSize: 15,
                        color: "#94a3b8",
                        lineHeight: 1.8,
                      }}
                    >
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .experience-row {
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }
        .experience-row:hover .exp-image-bg {
          transform: scale(1.04);
        }

        /* Mobile: stack vertically */
        @media (max-width: 768px) {
          .experience-row {
            grid-template-columns: 1fr !important;
          }
          .exp-image-side {
            order: 0 !important;
            min-height: 200px !important;
          }
          .exp-text-side {
            order: 1 !important;
            padding: 32px 24px !important;
          }
          .exp-text-side > div:first-child {
            display: none !important;
          }
        }

        /* Tablet */
        @media (max-width: 1024px) and (min-width: 769px) {
          .exp-text-side {
            padding: 32px 32px !important;
          }
        }
      `}</style>
    </section>
  );
}