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
        padding: "100px 24px",
        background: "var(--section-bg)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.4s ease",
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
              color: "var(--gold-500)",
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
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            Our Experience
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
              borderRadius: 2,
              margin: "0 auto 20px",
            }}
          />
          <p
            style={{
              fontSize: 16,
              color: "var(--text-secondary)",
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
            gap: 32,
          }}
        >
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            const accentColor = categoryColors[exp.category] || "#c8a45e";

            return (
              <div
                key={i}
                className="animate-on-scroll glass-card experience-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: 320,
                  overflow: "hidden",
                }}
              >
                {/* Image side */}
                <div
                  className="exp-image-side"
                  style={{
                    order: isEven ? 0 : 1,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 260,
                  }}
                >
                  <div
                    className="exp-image-bg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      transition: "transform 0.6s ease",
                    }}
                  >
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    {/* Category icon accent */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: isEven ? "auto" : 20,
                        right: isEven ? 20 : "auto",
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "rgba(4, 10, 24, 0.75)",
                        border: `1.5px solid ${accentColor}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(8px)",
                        zIndex: 2,
                      }}
                    >
                      <span style={{ fontSize: 18 }}>
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
                </div>

                {/* Text side */}
                <div
                  className="exp-text-side"
                  style={{
                    order: isEven ? 1 : 0,
                    display: "flex",
                    alignItems: "center",
                    padding: "40px 40px",
                    position: "relative",
                  }}
                >
                  {/* Vertical accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: "25%",
                      bottom: "25%",
                      left: isEven ? 0 : "auto",
                      right: isEven ? "auto" : 0,
                      width: 3,
                      background: `linear-gradient(180deg, transparent, ${accentColor}, transparent)`,
                      borderRadius: 2,
                    }}
                  />

                  <div style={{ width: "100%" }}>
                    {/* Year */}
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--gold-500)",
                        letterSpacing: "0.1em",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      {exp.year}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 12,
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.title}
                    </h3>

                    {/* Category badge */}
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11,
                        fontWeight: 600,
                        color: accentColor,
                        padding: "4px 12px",
                        background: `${accentColor}18`,
                        border: `1px solid ${accentColor}40`,
                        borderRadius: 50,
                        letterSpacing: "0.05em",
                        marginBottom: 16,
                      }}
                    >
                      {exp.category}
                    </span>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: 14.5,
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
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
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
