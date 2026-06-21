"use client";

import Image from "next/image";
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
              "linear-gradient(180deg, rgba(4,10,24,0.7) 0%, rgba(4,10,24,0.5) 40%, rgba(4,10,24,0.85) 100%)",
            zIndex: 1,
          }}
        />
        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background:
              "linear-gradient(to top, var(--navy-950), transparent)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Floating accent elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,164,94,0.08) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite reverse",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          padding: "0 24px",
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
              padding: "8px 20px",
              background: "rgba(200, 164, 94, 0.12)",
              border: "1px solid rgba(200, 164, 94, 0.25)",
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 500,
              color: "#d4b06a",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 28,
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
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 8,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
          }}
        >
          PT Bima Arung
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #c8a45e, #e0c07c, #c8a45e)",
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
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#94a3b8",
            fontWeight: 400,
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
          }}
        >
          Shipping Operator & Logistic Solution — menyediakan solusi
          transportasi terintegrasi untuk darat, laut, project cargo,
          pergudangan, dan distribusi ke seluruh Indonesia.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s",
          }}
        >
          <a href="#services" className="btn-primary">
            Our Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#about" className="btn-outline">
            Learn More
          </a>
        </div>

        {/* Stats Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 60px)",
            marginTop: 80,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s",
          }}
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "100+", label: "Projects Done" },
            { value: "50+", label: "Clients Served" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#c8a45e",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
                  color: "#64748b",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "#64748b",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 20,
            height: 32,
            borderRadius: 10,
            border: "1.5px solid #475569",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: "#c8a45e",
              position: "absolute",
              left: "50%",
              top: 6,
              marginLeft: -1.5,
              animation: "scroll-indicator 2s infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}