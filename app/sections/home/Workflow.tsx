"use client";

import { useEffect, useRef } from "react";

const partners = [
  { id: 1, src: "/images/Waskita.webp", alt: "WASKITA" },
  { id: 2, src: "/images/BPI.webp", alt: "Bakrie Pipe Industri" },
  { id: 3, src: "/images/MIP.webp", alt: "Mandiri Inti Perkasa" },
  { id: 4, src: "/images/TEMAS.webp", alt: "Partner 4" },
  { id: 5, src: "/images/PJP.webp", alt: "Partner 5" },
  { id: 6, src: "/images/ABP.webp", alt: "Partner 6" },
  { id: 7, src: "/images/MERATUS.webp", alt: "Partner 7" },
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
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: 45 }}
        >
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
            Partner Kami
          </span>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 4.5vw, 2.8rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            Dipercaya oleh Berbagai Perusahaan
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
              borderRadius: 2,
              margin: "0 auto",
            }}
          />
        </div>

        {/* Partner Logos */}
        <div
          className="partner-grid animate-on-scroll"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
          }}
        >
          {partners.map((p) => (
            <div
              key={p.id}
              style={{
                width: 120,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}