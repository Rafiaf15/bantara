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
              "linear-gradient(135deg, rgba(37,211,102,0.08) 0%, var(--card-bg) 100%)",
            border: "1px solid rgba(37,211,102,0.25)",
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
                "radial-gradient(circle, rgba(37,211,102,0.1) 0%, transparent 70%)",
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
              style={{
                padding: "14px 32px",
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#ffffff",
                borderRadius: 50,
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(37, 211, 102, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
