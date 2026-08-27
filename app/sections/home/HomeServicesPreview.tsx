"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const serviceHighlights = [
  {
    title: "Project Logistics",
    desc: "Penanganan logistik terencana untuk proyek infrastruktur, alat berat, dan relokasi industri.",
    image: "/images/Mobil-bg.webp",
    badge: "Specialized",
  },
  {
    title: "Pengangkutan Laut",
    desc: "Layanan kapal kargo, kontainer FCL/LCL, dan tongkang untuk distribusi antarpulau nusantara.",
    image: "/images/Tiang-bg.webp",
    badge: "Antar Pulau",
  },
  {
    title: "Pengangkutan Darat",
    desc: "Armada truk tronton, trailer, dan CDD untuk pengiriman point-to-point dan door-to-door.",
    image: "/images/Container-bg.webp",
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
        padding: "70px 16px",
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
          className="animate-on-scroll services-header-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
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
                marginBottom: 8,
                display: "block",
              }}
            >
              Layanan Kami
            </span>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 4.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.2,
              }}
            >
              Solusi Logistik Terpadu
            </h2>
          </div>

          <Link href="/services" className="btn-outline" style={{ padding: "9px 20px", fontSize: 13 }}>
            Lihat Semua Layanan (7)
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3-Card Grid with Hover Effect */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 20,
          }}
        >
          {serviceHighlights.map((svc, i) => (
            <Link
              key={i}
              href="/services"
              className="glass-card animate-on-scroll service-preview-card"
              style={{
                textDecoration: "none",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 190,
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
                    top: 12,
                    right: 12,
                    background: "rgba(4, 10, 24, 0.8)",
                    border: "1px solid var(--gold-500)",
                    color: "var(--gold-400)",
                    fontSize: 10.5,
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {svc.badge}
                </span>
              </div>

              <div style={{ padding: "20px 18px 22px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 6,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: 14,
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
                    fontSize: 12.5,
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
        @media (max-width: 480px) {
          .services-header-box {
            flex-direction: column;
            align-items: flex-start !important;
          }
          .services-header-box a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
