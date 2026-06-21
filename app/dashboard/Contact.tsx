"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: "Email",
      value: "bimaarungdwipantara@gmail.com",
      href: "mailto:bimaarungdwipantara@gmail.com",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: "Phone / WhatsApp",
      value: "+62 812-8812-2307",
      href: "https://wa.me/6281288122307",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Office",
      value: "Jakarta Garden City",
      href: null,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Operational",
      value: "Bekasi — Taruma Jaya",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        background:
          "linear-gradient(180deg, var(--navy-950) 0%, #060e1e 100%)",
        position: "relative",
      }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(200,164,94,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Info */}
          <div>
            <div className="animate-on-scroll">
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
                Get in Touch
              </span>
              <h2 className="section-title">
                Hubungi Kami
              </h2>
            </div>

            <p
              className="animate-on-scroll"
              style={{
                fontSize: 16,
                color: "#94a3b8",
                lineHeight: 1.8,
                marginTop: 24,
                marginBottom: 40,
              }}
            >
              Siap membantu kebutuhan logistik Anda. Hubungi kami untuk
              konsultasi dan penawaran terbaik.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="animate-on-scroll"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(200, 164, 94, 0.08)",
                      border: "1px solid rgba(200, 164, 94, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#64748b",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 15,
                          color: "#e2e8f0",
                          textDecoration: "none",
                          fontWeight: 500,
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#c8a45e")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#e2e8f0")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontSize: 15,
                          color: "#e2e8f0",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Direct WhatsApp Consultation */}
          <div className="animate-on-scroll">
            <div
              className="glass-card"
              style={{
                padding: 48,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  left: "-20%",
                  width: "140%",
                  height: "140%",
                  background: "radial-gradient(circle, rgba(200, 164, 94, 0.05) 0%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Chat Icon */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(200, 164, 94, 0.08)",
                  border: "1px solid rgba(200, 164, 94, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  boxShadow: "0 8px 32px rgba(200, 164, 94, 0.05)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a45e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M16 10h.01" />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Konsultasi Instan
              </h3>
              
              <p
                style={{
                  fontSize: 15,
                  color: "#94a3b8",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  maxWidth: 360,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Hubungi tim operator sales BANTARA langsung melalui WhatsApp untuk mendapatkan respon cepat, konsultasi rute, dan penawaran harga terbaik.
              </p>

              <a
                href="https://wa.me/6281288122307?text=Halo%20BANTARA%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20logistik."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="contact-whatsapp"
                style={{
                  width: "100%",
                  padding: "16px 32px",
                  fontSize: 16,
                  fontWeight: 600,
                  justifyContent: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 10px 25px rgba(200, 164, 94, 0.2)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}