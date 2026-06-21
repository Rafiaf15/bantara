"use client";

export default function Footer() {
  return (
    <footer
      id="main-footer"
      style={{
        background: "#030810",
        borderTop: "1px solid rgba(200, 164, 94, 0.1)",
        padding: "60px 24px 30px",
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
                  width: 95,
                  height: 95,
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                }}
              >
                BANTARA
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
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
                color: "#e2e8f0",
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
              {["About", "Services", "Experience", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      fontSize: 14,
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c8a45e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#e2e8f0",
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
                <span
                  key={item}
                  style={{ fontSize: 14, color: "#64748b" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#e2e8f0",
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
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#c8a45e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#94a3b8")
                }
              >
                bimaarungdwipantara@gmail.com
              </a>
              <a
                href="tel:+6281288122307"
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#c8a45e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#94a3b8")
                }
              >
                +62 812-8812-2307
              </a>
              <span style={{ fontSize: 14, color: "#64748b" }}>
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
              "linear-gradient(90deg, transparent, rgba(200,164,94,0.15), transparent)",
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
          <p style={{ fontSize: 13, color: "#475569" }}>
            © {new Date().getFullYear()} PT Bima Arung Dwipantara. All rights
            reserved.
          </p>
          <p style={{ fontSize: 12, color: "#334155" }}>
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
