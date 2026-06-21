"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled
          ? "rgba(4, 10, 24, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200, 164, 94, 0.15)"
          : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/dashboard"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
        >
          <img
            src="/images/Logo-Only.webp"
            alt="Bantara Logo"
            style={{
              width: 100,
              height: 100,
              objectFit: "contain",
              borderRadius: 10,
            }}
          />
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                color: "#ffffff",
                letterSpacing: "0.08em",
              }}
            >
              BANTARA
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#94a3b8",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: -2,
              }}
            >
              Logistics
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#cbd5e1",
                fontSize: 14,
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: 8,
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c8a45e";
                e.currentTarget.style.background = "rgba(200, 164, 94, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285891839116?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
            className="btn-primary"
            style={{
              marginLeft: 8,
              padding: "10px 24px",
              fontSize: 13,
            }}
          >
            Hubungi Tim Kami
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            zIndex: 1001,
          }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 18, position: "relative" }}>
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#c8a45e",
                borderRadius: 2,
                position: "absolute",
                transition: "all 0.3s ease",
                top: mobileMenuOpen ? 8 : 0,
                transform: mobileMenuOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 18,
                height: 2,
                background: "#c8a45e",
                borderRadius: 2,
                position: "absolute",
                top: 8,
                opacity: mobileMenuOpen ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#c8a45e",
                borderRadius: 2,
                position: "absolute",
                transition: "all 0.3s ease",
                top: mobileMenuOpen ? 8 : 16,
                transform: mobileMenuOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(4, 10, 24, 0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "120px 24px 60px 24px",
          gap: 24,
          overflowY: "auto",
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
          zIndex: 999,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            width: "100%",
            margin: "auto 0",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#e2e8f0",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "0.05em",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a45e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285891839116?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
            className="btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ marginTop: 16 }}
          >
            Hubungi Tim Kami
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}