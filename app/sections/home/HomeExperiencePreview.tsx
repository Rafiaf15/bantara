"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const projectHighlights = [
  {
    title: "Pengiriman Tiang Listrik PLN",
    category: "Project Cargo",
    desc: "Distribusi tiang beton dan baja untuk proyek kelistrikan ke berbagai wilayah.",
    image: "/images/Tiang-bg.webp",
  },
  {
    title: "Pengangkutan Material Spun Pile",
    category: "Konstruksi & Jembatan",
    desc: "Penanganan pengiriman tiang pancang spun pile untuk proyek infrastruktur jembatan.",
    image: "/images/Spun-bg.webp",
  },
  {
    title: "Distribusi Besi Beton Skala Besar",
    category: "Transportasi Darat",
    desc: "Pengiriman rutin armada trailer untuk proyek gedung dan jalan tol.",
    image: "/images/Besi-bg.webp",
  },
];

export default function HomeExperiencePreview() {
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
        {/* Header */}
        <div
          className="animate-on-scroll"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 50,
          }}
        >
          <div>
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
              Track Record
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.2,
              }}
            >
              Pengalaman Proyek Kami
            </h2>
          </div>

          <Link href="/experience" className="btn-outline" style={{ padding: "10px 24px", fontSize: 13.5 }}>
            Lihat Portofolio Lengkap
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3 Project Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projectHighlights.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card animate-on-scroll project-preview-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 200,
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="project-thumb-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(4,10,24,0.7) 100%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 14,
                    background: "rgba(4, 10, 24, 0.8)",
                    border: "1px solid rgba(200,164,94,0.4)",
                    color: "var(--gold-400)",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 20,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {proj.category}
                </span>
              </div>

              <div style={{ padding: "20px 22px 24px" }}>
                <h3
                  style={{
                    fontSize: 16.5,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-preview-card:hover .project-thumb-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
