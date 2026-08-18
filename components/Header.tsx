"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  const isLight = theme === "light";

  return (
    <header
      id="main-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "18px 0",
        background: scrolled || pathname !== "/"
          ? "var(--header-bg)"
          : "rgba(4, 10, 24, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--card-border)",
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
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
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
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                color: "var(--text-primary)",
                letterSpacing: "0.08em",
                transition: "color 0.3s ease",
              }}
            >
              BANTARA
            </div>
            <div
              style={{
                fontSize: 10,
                color: "var(--text-secondary)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: -2,
                transition: "color 0.3s ease",
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
            gap: 6,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: isActive ? "var(--gold-500)" : "var(--text-secondary)",
                  background: isActive ? "rgba(200, 164, 94, 0.12)" : "transparent",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  padding: "8px 16px",
                  borderRadius: 8,
                  transition: "all 0.3s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--gold-500)";
                    e.currentTarget.style.background = "rgba(200, 164, 94, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Dark/Light Mode Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            title={isLight ? "Mode Gelap" : "Mode Terang"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 12,
              border: "1.5px solid var(--card-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              marginLeft: 4,
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface-hover)";
              e.currentTarget.style.borderColor = "var(--gold-500)";
              e.currentTarget.style.transform = "scale(1.08) rotate(12deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.borderColor = "var(--card-border)";
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            {isLight ? (
              /* Moon icon for switching to dark */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              /* Sun icon for switching to light */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <a
            href="https://wa.me/6285891839116?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              marginLeft: 8,
              padding: "10px 22px",
              fontSize: 13,
            }}
          >
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile: Theme toggle + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="mobile-controls">
          {/* Mobile Theme Toggle */}
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className="mobile-theme-btn"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: 10,
              border: "1.5px solid var(--card-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {isLight ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

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
                  background: "var(--gold-500)",
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
                  background: "var(--gold-500)",
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
                  background: "var(--gold-500)",
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
      </div>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--header-bg)",
          backdropFilter: "blur(25px)",
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
            gap: 20,
            width: "100%",
            margin: "auto 0",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color: isActive ? "var(--gold-500)" : "var(--text-primary)",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/6285891839116?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ marginTop: 16 }}
          >
            Hubungi Kami
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
          .mobile-theme-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
