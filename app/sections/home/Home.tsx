"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero-bg.webp"
          alt="Cargo ship in the ocean - BANTARA logistics"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          quality={80}
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(4,10,24,0.78) 0%, rgba(4,10,24,0.62) 40%, var(--background) 100%)",
            zIndex: 1,
            transition: "background 0.4s ease",
          }}
        />
        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 160,
            background:
              "linear-gradient(to top, var(--background), transparent)",
            zIndex: 2,
            transition: "background 0.4s ease",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          padding: "110px 16px 50px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              background: "rgba(200, 164, 94, 0.15)",
              border: "1px solid rgba(200, 164, 94, 0.35)",
              borderRadius: 50,
              fontSize: 12,
              fontWeight: 600,
              color: "#e0c07c",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 20,
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c8a45e",
                animation: "pulse-glow 2s infinite",
              }}
            />
            Trusted Logistics Partner
          </span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(2.1rem, 6.5vw, 4.2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 14,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          PT Bima Arung
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #c8a45e, #f3d79b, #c8a45e)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dwipantara
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
            color: "#e2e8f0",
            fontWeight: 400,
            maxWidth: 620,
            margin: "0 auto 32px",
            lineHeight: 1.65,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
            textShadow: "0 1px 10px rgba(0,0,0,0.5)",
          }}
        >
          Shipping Operator &amp; Logistic Solution — menyediakan solusi
          transportasi terintegrasi untuk darat, laut, project cargo,
          pergudangan, dan distribusi ke seluruh Indonesia.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s",
          }}
          className="hero-buttons"
        >
          <Link href="/services" className="btn-primary">
            Layanan Kami
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/tentang-kami" className="btn-outline">
            Tentang Kami
          </Link>
        </div>

        {/* Stats Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(18px, 4vw, 50px)",
            marginTop: 50,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s",
            flexWrap: "wrap",
          }}
          className="hero-stats"
        >
          {[
            { value: "5+", label: "Tahun Pengalaman" },
            { value: "100+", label: "Proyek Selesai" },
            { value: "50+", label: "Kota Tujuan" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center", minWidth: 85 }}>
              <div
                style={{
                  fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--gold-400)",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.68rem, 1.8vw, 0.8rem)",
                  color: "#cbd5e1",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
