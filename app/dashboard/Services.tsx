"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Project Logistics",
    desc: "Penanganan logistik untuk proyek skala besar dengan perencanaan dan eksekusi yang terstruktur.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Pengangkutan Laut",
    desc: "Layanan transportasi laut antar pulau dengan armada kapal yang handal dan berpengalaman.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20l.9-3.6A2 2 0 0 1 4.8 15h14.4a2 2 0 0 1 1.9 1.4L22 20" />
        <path d="M4 15V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" />
        <path d="M12 6V2" />
        <path d="M8 4h8" />
      </svg>
    ),
  },
  {
    title: "Pengangkutan Darat",
    desc: "Armada truk dan trailer untuk pengiriman darat ke seluruh penjuru Indonesia.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 9H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Layanan Pergudangan",
    desc: "Fasilitas pergudangan modern untuk penyimpanan dan manajemen barang yang aman.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z" />
        <path d="M6 18h12" />
        <path d="M6 14h12" />
      </svg>
    ),
  },
  {
    title: "Constructions",
    desc: "Dukungan logistik untuk material konstruksi, termasuk spun pile, besi beton, dan bahan bangunan.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
        <path d="M10 14v7" />
        <path d="M14 14v7" />
      </svg>
    ),
  },
  {
    title: "Transformers",
    desc: "Pengiriman khusus untuk transformer dan peralatan berat dengan handling profesional.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 24px",
        overflow: "hidden",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/services-bg.png"
          alt="Fleet of logistics trucks"
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.15 }}
          quality={60}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, var(--navy-950) 0%, rgba(10,22,40,0.95) 50%, var(--navy-950) 100%)",
          }}
        />
      </div>

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
          style={{ textAlign: "center", marginBottom: 60 }}
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
            What We Do
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 16,
            }}
          >
            Our Services
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
            Solusi logistik komprehensif untuk memenuhi kebutuhan transportasi
            dan distribusi bisnis Anda.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card animate-on-scroll"
              style={{
                padding: 32,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, rgba(200,164,94,0.4), transparent)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
                className="card-accent"
              />

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(200, 164, 94, 0.08)",
                  border: "1px solid rgba(200, 164, 94, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  transition: "all 0.3s ease",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: 10,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  lineHeight: 1.7,
                }}
              >
                {service.desc}
              </p>

              {/* Arrow */}
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#c8a45e",
                  fontSize: 13,
                  fontWeight: 600,
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                }}
              >
                Learn more
                <svg
                  width="14"
                  height="14"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}