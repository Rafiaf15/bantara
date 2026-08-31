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
        <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--gold-500)' }}>A</div>
      ),
      title: "Amanah",
      desc: "Menjalankan setiap tanggung jawab dengan jujur dan penuh integritas.",
    },
    {
      icon: (
        <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--gold-500)' }}>R</div>
      ),
      title: "Responsif",
      desc: "Cepat tanggap terhadap kebutuhan pelanggan dan dinamika operasional.",
    },
    {
      icon: (
        <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--gold-500)' }}>U</div>
      ),
      title: "Unggul",
      desc: "Terus meningkatkan kualitas layanan dan kompetensi.",
    },
    {
      icon: (
        <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--gold-500)' }}>N</div>
      ),
      title: "Nyata",
      desc: "Memberikan solusi yang dapat diandalkan dan hasil yang dapat dipertanggungjawabkan.",
    },
    {
      icon: (
        <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--gold-500)' }}>G</div>
      ),
      title: "Gigih",
      desc: "Memiliki semangat untuk terus berusaha, berkembang, dan memberikan hasil terbaik.",
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
                textAlign: "justify",
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
                textAlign: "justify",
              }}
            >
              Dengan kombinasi armada mandiri untuk rute darat serta jaringan mitra pelabuhan dan armada kapal laut, kami memberikan kepastian estimasi waktu, keamanan penanganan muatan, dan transparansi tarif sejak awal.
            </p>
                        <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 32,
                textAlign: "justify",
              }}
            >
              Perusahaan didukung oleh Tim Operasional Kantor dan Tim Operasional Lapangan yang bekerja secara profesional di bawah kepemimpinan Direktur Utama. Dengan mengedepankan kolaborasi, integritas, dan tanggung jawab, setiap anggota tim berperan dalam memastikan seluruh proses operasional berjalan secara efektif dan efisien. Komitmen tersebut menjadi landasan kami dalam menghadirkan layanan logistik yang terpercaya serta membangun hubungan jangka panjang dengan pelanggan dan mitra bisnis.
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
                Menjadi perusahaan logistik terpercaya yang unggul dalam solusi transportasi dan penanganan barang proyek melalui profesionalisme, inovasi, dan pelayanan prima.
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
                  "Memberikan layanan logistik yang aman, tepat waktu, dan berkualitas.",
                  "Menyediakan solusi transportasi dan penanganan barang proyek yang efisien, andal, dan sesuai kebutuhan pelanggan.",
                  "Membangun dan menjaga hubungan jangka panjang dengan pelanggan melalui kepercayaan, komunikasi yang baik, dan pelayanan prima.",
                  "Membangun kemitraan yang dilandasi profesionalisme, integritas, dan kepuasan pelanggan.",
                  "Mengembangkan sumber daya manusia yang kompeten, berintegritas, dan berorientasi pada pelayanan.",
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

        {/* Section: Core Values (ARUNG) */}
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
              Core Values
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)" }}>
              ARUNG
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-card animate-on-scroll"
                style={{
                  padding: 28,
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(200, 164, 94, 0.1)",
                    border: "1px solid rgba(200, 164, 94, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
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

        {/* Section: CSR & Partners */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            marginBottom: 70,
          }}
        >
          {/* CSR */}
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
              Kegiatan di Luar Usaha
            </span>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              Kepedulian Sosial Perusahaan
            </h3>
            <p
              style={{
                fontSize: 14.5,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Bagi PT Bima Arung Dwipantara, keberhasilan perusahaan tidak hanya diukur dari pertumbuhan bisnis, tetapi juga dari manfaat yang dapat diberikan kepada masyarakat. Sebagai bentuk kepedulian sosial, perusahaan secara rutin melaksanakan berbagai kegiatan, antara lain:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 16px 0",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "Program Jumat Berkah melalui pembagian makanan kepada masyarakat.",
                "Kunjungan dan pemberian bantuan ke panti asuhan.",
                "Dukungan terhadap kegiatan masyarakat di lingkungan sekitar perusahaan.",
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
            <p
              style={{
                fontSize: 14.5,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Melalui kegiatan tersebut, kami berharap dapat memberikan kontribusi positif serta menumbuhkan semangat berbagi dan kepedulian terhadap sesama.
            </p>
          </div>

          {/* Partners & Customers / Target Pengembangan */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
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
                Kolaborasi
              </span>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 16,
                }}
              >
                Partners &amp; Customers
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Bagi kami, setiap pelanggan dan mitra bukan sekadar bagian dari kegiatan operasional, tetapi juga bagian dari perjalanan perusahaan. Kepercayaan yang diberikan menjadi motivasi untuk terus meningkatkan kualitas layanan dan menghadirkan solusi logistik yang dapat diandalkan.
              </p>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Melalui kerja sama yang baik, kami berharap dapat membangun hubungan yang berkelanjutan dan memberikan nilai tambah bagi setiap pihak yang tumbuh bersama PT Bima Arung Dwipantara.
              </p>
            </div>

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
                Visi Kedepan
              </span>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 16,
                }}
              >
                Target Pengembangan
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                PT Bima Arung Dwipantara berkomitmen untuk terus bertumbuh secara berkelanjutan dengan mengutamakan kualitas layanan, profesionalisme, dan kepercayaan pelanggan. Ke depan, kami berfokus pada penguatan jaringan operasional, perluasan kemitraan strategis, serta peningkatan kualitas sumber daya dan sistem kerja agar mampu memberikan solusi logistik yang semakin efektif dan bernilai bagi pelanggan.
              </p>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Kami percaya bahwa pertumbuhan yang baik tidak hanya diukur dari skala bisnis, tetapi juga dari kemampuan untuk memberikan pelayanan yang konsisten, membangun hubungan jangka panjang, dan menciptakan manfaat bagi seluruh pemangku kepentingan.
              </p>
            </div>
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
