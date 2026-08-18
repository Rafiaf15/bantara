"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeCtaBanner() {
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
        padding: "80px 24px 100px",
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
        <div
          className="glass-card animate-on-scroll"
          style={{
            padding: "50px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, rgba(200,164,94,0.08) 0%, var(--card-bg) 100%)",
            border: "1px solid rgba(200,164,94,0.25)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Subtle Glow Circle */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(200,164,94,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--gold-500)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 10,
              position: "relative",
              zIndex: 1,
            }}
          >
            Konsultasi Rute &amp; Penawaran
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 14,
              lineHeight: 1.2,
              position: "relative",
              zIndex: 1,
            }}
          >
            Mau Kirim Muatan ke Luar Pulau?
          </h2>

          <p
            style={{
              fontSize: 15.5,
              color: "var(--text-secondary)",
              maxWidth: 620,
              margin: "0 auto 32px",
              lineHeight: 1.7,
              position: "relative",
              zIndex: 1,
            }}
          >
            Chat WhatsApp admin operasional BANTARA sekarang untuk konsultasi jadwal jemput, rute pengiriman, dan estimasi ongkir terbaik.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="https://wa.me/6281288122307?text=Halo%20BANTARA%2C%20saya%20tertarik%20untuk%20konsultasi%20pengiriman%20muatan%20logistik."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: "14px 32px",
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Chat WhatsApp Admin
            </a>

            <Link
              href="/contact"
              className="btn-outline"
              style={{
                padding: "14px 32px",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Isi Formulir Penawaran
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
