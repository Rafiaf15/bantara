"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
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

  const coreValues = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Integritas & Transparansi",
      desc: "Keterbukaan tarif, estimasi waktu yang akurat, dan komitmen profesional yang disepakati sebelum muatan diberangkatkan.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Keandalan & Keamanan",
      desc: "Pemeriksaan teliti saat pemuatan barang, penanganan khusus untuk muatan berat, dan serah terima dokumen resmi saat tiba di tujuan.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Komunikasi Responsif",
      desc: "Tim operasional yang siap mengawal, memberikan pembaharuan status kiriman, dan cepat tanggap melalui WhatsApp serta telepon.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Kemitraan Berkelanjutan",
      desc: "Mendukung kelancaran rantai pasok mitra bisnis & korporat dengan fleksibilitas jadwal penjemputan dan skema tarif khusus.",
    },
  ];

  const milestones = [
    {
      year: "Awal Berdiri",
      title: "Pendirian & Komitmen Layanan",
      desc: "PT Bima Arung Dwipantara didirikan dengan fokus menghadirkan solusi pengiriman darat dan penanganan muatan proyek yang handal.",
    },
    {
      year: "Ekspansi",
      title: "Layanan Multimoda & Jalur Laut",
      desc: "Memperluas jangkauan antarpulau melalui kerja sama kapal kargo, kontainer (FCL/LCL), dan tongkang untuk distribusi nasional.",
    },
    {
      year: "Spesialisasi",
      title: "Penanganan Project Cargo Strategis",
      desc: "Dipercaya menangani pengiriman material berat infrastruktur nasional seperti tiang listrik PLN, spun pile jembatan, dan transformer.",
    },
    {
      year: "Kini & Masa Depan",
      title: "Jangkauan Seluruh Indonesia",
      desc: "Melayani lebih dari puluhan kota tujuan dari Sabang sampai Merauke dengan sistem logistik end-to-end terintegrasi.",
    },
  ];

  const advantages = [
    {
      num: "01",
      title: "Ongkir Jelas & Transparan",
      desc: "Harga disepakati di awal tanpa biaya siluman. Tersedia fleksibilitas nego tarif bagi pengiriman rutin.",
    },
    {
      num: "02",
      title: "Door to Door Service",
      desc: "Penjemputan langsung di lokasi gudang atau pabrik Anda, dikawal hingga sampai ke alamat penerima di seluruh nusantara.",
    },
    {
      num: "03",
      title: "Armada Lengkap & Terawat",
      desc: "Didukung armada truk, trailer, kapal kargo, serta perlengkapan handling heavy lift yang siap beroperasi.",
    },
    {
      num: "04",
      title: "Kawal Pengiriman Proaktif",
      desc: "Update status perjalanan secara proaktif dari tim operasional tanpa Anda perlu repot mengejar informasi.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "60px 24px 100px",
        background: "var(--section-bg)",
        position: "relative",
        transition: "background 0.4s ease",
      }}
    >
      {/* Background accents */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,164,94,0.04) 0%, transparent 70%)",
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
        {/* Header Section */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--gold-500)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
              display: "block",
            }}
          >
            Tentang Kami
          </span>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Solusi Logistik &amp; Shipping Operator Terpercaya
          </h1>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
              borderRadius: 2,
              margin: "0 auto 18px",
            }}
          />
          <p
            style={{
              fontSize: 16,
              color: "var(--text-secondary)",
              maxWidth: 720,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Mengenal lebih dekat dedikasi PT Bima Arung Dwipantara (BANTARA) dalam menghubungkan rantai pasok dan distribusi barang ke seluruh pelosok Indonesia.
          </p>
        </div>

        {/* 2-Column: Company Profile Overview & Vision Mission */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "stretch",
            marginBottom: 70,
          }}
          className="about-overview-grid"
        >
          {/* Left: Detailed Story */}
          <div className="glass-card animate-on-scroll" style={{ padding: "36px 32px" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--gold-500)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              Profil Perusahaan
            </span>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              PT Bima Arung Dwipantara (BANTARA)
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              BANTARA adalah perusahaan penyedia layanan logistik, <em>shipping operator</em>, dan <em>logistic solution</em> yang berfokus pada transportasi darat, laut, project cargo, pergudangan, dan distribusi ke seluruh Indonesia.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              Dengan kombinasi armada mandiri untuk rute darat serta jaringan mitra pelabuhan dan armada kapal laut, kami memberikan kepastian estimasi waktu, keamanan penanganan muatan, dan transparansi tarif sejak awal.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/services" className="btn-primary" style={{ padding: "10px 22px", fontSize: 13.5 }}>
                Jelajahi Layanan
              </Link>
              <Link href="/contact" className="btn-outline" style={{ padding: "10px 22px", fontSize: 13.5 }}>
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Right: Vision & Mission */}
          <div className="glass-card animate-on-scroll" style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--gold-500)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                Visi &amp; Misi
              </span>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                }}
              >
                Visi Kami
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  paddingLeft: 12,
                  borderLeft: "3px solid var(--gold-500)",
                }}
              >
                Menjadi mitra logistik dan <em>shipping operator</em> terdepan di Indonesia yang dipercaya karena keandalan operasional, ketepatan waktu, dan komitmen pelayanan bernilai tambah.
              </p>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                }}
              >
                Misi Kami
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {[
                  "Menyediakan layanan pengiriman multimoda (darat & laut) yang terintegrasi dan aman.",
                  "Mengutamakan transparansi harga dan komunikasi status pengiriman secara proaktif.",
                  "Menjaga standar kualitas armada dan keselamatan kerja dalam penanganan muatan proyek.",
                  "Membangun hubungan kemitraan jangka panjang yang saling menguntungkan dengan pelanggan.",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13.5,
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: "var(--gold-500)", fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Core Values */}
        <div style={{ marginBottom: 70 }}>
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--gold-500)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              Prinsip Kerja
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)" }}>
              Nilai-Nilai Utama BANTARA
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(200, 164, 94, 0.1)",
                    border: "1px solid rgba(200, 164, 94, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  {val.icon}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Milestones / Perjalanan */}
        <div style={{ marginBottom: 70 }}>
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--gold-500)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              Jejak Langkah
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)" }}>
              Perjalanan Kami
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {milestones.map((m, i) => (
              <div
                key={i}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 26,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--gold-500)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {m.year}
                </span>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.35,
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Keunggulan / Why Choose Us */}
        <div style={{ marginBottom: 60 }}>
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--gold-500)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              Keunggulan Layanan
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)" }}>
              Mengapa Memilih BANTARA?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 26,
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--gold-500)",
                    fontFamily: "monospace",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {adv.num}
                </span>
                <h3
                  style={{
                    fontSize: 16.5,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {adv.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="animate-on-scroll">
          <div
            className="glass-card"
            style={{
              padding: "44px 36px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg, rgba(200,164,94,0.08) 0%, var(--card-bg) 100%)",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: 10,
              }}
            >
              Siap Memulai Pengiriman Logistik Anda?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                maxWidth: 580,
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              Konsultasikan rute, jadwal penjemputan, dan dapatkan penawaran harga terbaik dari tim operasional BANTARA sekarang juga.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/6281288122307?text=Halo%20BANTARA%2C%20saya%20tertarik%20konsultasi%20pengiriman%20logistik."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "12px 28px", fontSize: 14.5 }}
              >
                Chat WhatsApp Sekarang
              </a>
              <Link href="/contact" className="btn-outline" style={{ padding: "12px 28px", fontSize: 14.5 }}>
                Formulir Penawaran
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-overview-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
