"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="main-footer"
      style={{
        background: "var(--section-alt-bg)",
        borderTop: "1px solid var(--card-border)",
        padding: "60px 24px 30px",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <img
                src="/images/Logo-Only.webp"
                alt="Bantara Logo"
                style={{
                  width: 50,
                  height: 50,
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  color: "var(--text-primary)",
                  letterSpacing: "0.08em",
                }}
              >
                BANTARA
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: 300,
              }}
            >
              PT Bima Arung Dwipantara — Shipping Operator & Logistic Solution.
              Solusi transportasi terintegrasi ke seluruh Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Tentang Kami", href: "/tentang-kami" },
                { label: "Services", href: "/services" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold-500)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "Project Logistics",
                "Pengangkutan Laut",
                "Pengangkutan Darat",
                "Pergudangan",
              ].map((item) => (
                <Link
                  key={item}
                  href="/services"
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold-500)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <a
                href="mailto:bimaarungdwipantara@gmail.com"
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--gold-500)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                bimaarungdwipantara@gmail.com
              </a>
              <a
                href="https://wa.me/6281288122307"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--gold-500)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                +62 812-8812-2307
              </a>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                Jakarta Garden City
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, var(--card-border), transparent)",
            marginBottom: 24,
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} PT Bima Arung Dwipantara. All rights
            reserved.
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            Shipping Operator & Logistic Solution
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
