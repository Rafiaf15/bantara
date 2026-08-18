"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const serviceHighlights = [
  {
    title: "Project Logistics",
    desc: "Penanganan logistik terencana untuk proyek infrastruktur, alat berat, dan relokasi industri.",
    image: "/images/Spun-bg.webp",
    badge: "Specialized",
  },
  {
    title: "Pengangkutan Laut",
    desc: "Layanan kapal kargo, kontainer FCL/LCL, dan tongkang untuk distribusi antarpulau nusantara.",
    image: "/images/Container-bg.webp",
    badge: "Antar Pulau",
  },
  {
    title: "Pengangkutan Darat",
    desc: "Armada truk tronton, trailer, dan CDD untuk pengiriman point-to-point dan door-to-door.",
    image: "/images/Besi-bg.webp",
    badge: "Armada Sendiri",
  },
];

export default function HomeServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
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
        {/* Section Header */}
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
              Layanan Kami
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.2,
              }}
            >
              Solusi Logistik Terpadu
            </h2>
          </div>

          <Link href="/services" className="btn-outline" style={{ padding: "10px 24px", fontSize: 13.5 }}>
            Lihat Semua Layanan (6)
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3-Card Grid with Hover Effect */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {serviceHighlights.map((svc, i) => (
            <Link
              key={i}
              href="/services"
              className="glass-card animate-on-scroll service-preview-card"
              style={{
                textDecoration: "none",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 210,
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="card-thumb-img"
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
                    top: 14,
                    right: 14,
                    background: "rgba(4, 10, 24, 0.75)",
                    border: "1px solid var(--gold-500)",
                    color: "var(--gold-400)",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 20,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {svc.badge}
                </span>
              </div>

              <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--gold-500)",
                  }}
                >
                  Detail Layanan →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-preview-card:hover .card-thumb-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
