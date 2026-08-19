"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const serviceList = [
  {
    id: "project-logistics",
    title: "Project Logistics & Heavy Lift",
    badge: "Specialized Cargo",
    desc: "Penanganan logistik skala besar untuk mesin pabrik, transformer, generator, alat berat, dan material proyek dengan penanganan khusus oversize & overweight.",
    features: [
      "Survey rute dan kelayakan jalan sebelum pengiriman",
      "Penanganan muatan berdimensi khusus (oversize/overweight)",
      "Didukung peralatan rigging, lashing, dan crane profesional",
      "Pengawalan teknis dari titik muat sampai lokasi proyek",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "pengangkutan-laut",
    title: "Pengangkutan Laut (Kapal & Kontainer)",
    badge: "Antar Pulau",
    desc: "Layanan transportasi kargo laut antar pulau menggunakan kapal kontainer (FCL 20ft/40ft & LCL), kapal kargo curah, serta rute terjadwal ke seluruh pelabuhan nusantara.",
    features: [
      "Pilihan kontainer 20ft, 40ft (FCL Penuh & LCL Gabungan)",
      "Stuffing & stripping di pelabuhan mitra utama",
      "Pengurusan dokumen pelabuhan, manifest, & surat jalan",
      "Rute terjadwal mingguan dari pelabuhan utama",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20l.9-3.6A2 2 0 0 1 4.8 15h14.4a2 2 0 0 1 1.9 1.4L22 20" />
        <path d="M4 15V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" />
        <path d="M12 6V2" />
        <path d="M8 4h8" />
      </svg>
    ),
  },
  {
    id: "pengangkutan-darat",
    title: "Pengangkutan Darat & Trucking",
    badge: "Armada Sendiri",
    desc: "Armada truk lengkap untuk distribusi darat lintas kota dan pulau (Colt Diesel, Fuso, Tronton, Trailer, hingga Lowbed) dengan driver berpengalaman rute jarak jauh.",
    features: [
      "Colt Diesel Double (CDD), Fuso Bak/Box, Tronton, & Trailer",
      "Kapasitas angkut fleksibel mulai 2 ton hingga 40+ ton",
      "Perawatan armada berkala dan inspeksi sebelum berangkat",
      "Pengiriman point-to-point cepat dan terjadwal",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 9H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    id: "door-to-door",
    title: "Layanan Door to Door Terintegrasi",
    badge: "End-to-End",
    desc: "Kemudahan pengiriman di mana truk menjemput langsung di lokasi gudang/pabrik Anda dan mengantarkan barang sampai ke alamat penerima di pulau tujuan.",
    features: [
      "Penjemputan langsung di lokasi pabrik atau gudang Anda",
      "Antar langsung ke alamat akhir, bukan cuma sampai pelabuhan",
      "Dokumentasi tanda terima resmi dan bukti serah terima",
      "Cocok untuk distributor, manufaktur, dan kiriman rutin",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "material-konstruksi",
    title: "Logistik Material Konstruksi",
    badge: "Infrastruktur",
    desc: "Dukungan logistik spesialis untuk pengiriman tiang listrik beton/baja PLN, spun pile jembatan, besi beton, girder, dan struktur material bangunan.",
    features: [
      "Spesialisasi tiang pancang (spun pile) & tiang listrik PLN",
      "Penanganan besi beton, plat baja, & material fabrikasi",
      "Pemuatan dengan standar keselamatan kerja (K3)",
      "Distribusi ke lokasi pembangunan strategis di daerah pelosok",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
        <path d="M10 14v7" />
        <path d="M14 14v7" />
      </svg>
    ),
  },
  {
    id: "tongkang",
    title: "Tongkang & Jalur Perairan (Barge)",
    badge: "Curah & Heavy Volume",
    desc: "Angkutan muatan curah, material konstruksi skala besar, atau kargo berat lewat jalur pesisir dan sungai menuju dermaga proyek yang sulit dijangkau kapal besar.",
    features: [
      "Muatan volume besar, material tambang, dan proyek pesisir",
      "Akses ke pelabuhan sungai dan jetty proyek khusus",
      "Koordinasi bongkar muat di titik sandar",
      "Dapat dikombinasikan dengan trucking multimoda",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    id: "pergudangan",
    title: "Layanan Pergudangan & Distribusi",
    badge: "Warehousing",
    desc: "Fasilitas pergudangan modern dan manajemen penyimpanan sementara untuk konsolidasi muatan sebelum diberangkatkan ke tujuan akhir.",
    features: [
      "Penyimpanan barang aman dengan sistem kontrol rapi",
      "Konsolidasi muatan dari berbagai supplier sebelum dikirim",
      "Fasilitas bongkar muat forklift & tenaga terampil",
      "Lokasi strategis dekat koridor transportasi utama",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z" />
        <path d="M6 18h12" />
        <path d="M6 14h12" />
      </svg>
    ),
  },
];

const industries = [
  {
    title: "Kelistrikan & Energi",
    desc: "Tiang listrik PLN, transformer, genset, kabel drum, dan peralatan gardu induk.",
  },
  {
    title: "Konstruksi & Infrastruktur",
    desc: "Spun pile, besi beton, struktur jembatan, scaffolding, dan material proyek sipil.",
  },
  {
    title: "Manufaktur & Pabrik",
    desc: "Mesin industri, raw material, sparepart pabrik, dan barang jadi (FCL/LCL).",
  },
  {
    title: "Pertambangan & Perkebunan",
    desc: "Alat berat, pipa baja, suku cadang alat tambang, dan logistik operasional site.",
  },
  {
    title: "Distributor & Perdagangan",
    desc: "Distribusi kargo umum, barang dagangan, dan pasokan antar pulau secara rutin.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
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
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: 1000,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(200,164,94,0.04) 0%, transparent 70%)",
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
        {/* Page Header */}
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
            Layanan Kami
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
            Solusi Layanan Logistik &amp; Kargo Terpadu
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
            Tujuh pilihan solusi pengiriman terpercaya: paket kontainer, door to door, jalur laut, trucking armada sendiri, material konstruksi, tongkang, hingga muatan proyek skala besar ke seluruh penjuru Indonesia.
          </p>
        </div>

        {/* Services Grid (Detailed Cards with Checklists) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: 28,
            marginBottom: 80,
          }}
        >
          {serviceList.map((svc, idx) => (
            <div
              key={idx}
              className="glass-card animate-on-scroll"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: "rgba(200, 164, 94, 0.1)",
                      border: "1px solid rgba(200, 164, 94, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {svc.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--gold-500)",
                      background: "rgba(200, 164, 94, 0.12)",
                      padding: "4px 12px",
                      borderRadius: 20,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {svc.badge}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {svc.title}
                </h2>

                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {svc.desc}
                </p>

                {/* Checklist Features */}
                <div
                  style={{
                    paddingTop: 16,
                    borderTop: "1px solid var(--card-border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  {svc.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 13,
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "var(--gold-500)", fontWeight: 700, marginTop: -1 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/6281288122307?text=Halo%20BANTARA%2C%20saya%20tertarik%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(svc.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    width: "100%",
                    padding: "10px 18px",
                    fontSize: 13.5,
                    fontWeight: 600,
                    justifyContent: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Konsultasi Layanan Ini
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Industries We Serve */}
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
              Cakupan Bisnis
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)" }}>
              Sektor Industri yang Kami Layani
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 600, margin: "10px auto 0" }}>
              Pengalaman lintas sektor dengan penanganan sesuai standar industri masing-masing.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            {industries.map((ind, i) => (
              <div
                key={i}
                className="glass-card animate-on-scroll"
                style={{
                  padding: "24px 20px",
                }}
              >
                <div style={{ fontSize: 20, marginBottom: 8 }}>🏢</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {ind.desc}
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
              padding: "48px 36px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg, rgba(200,164,94,0.08) 0%, var(--card-bg) 100%)",
              border: "1px solid rgba(200,164,94,0.25)",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Bingung Memilih Jenis Armada yang Pas?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                maxWidth: 620,
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              Ceritakan jenis barang, berat, dimensi muatan, dan kota tujuan Anda. Tim operasional BANTARA akan merekomendasikan opsi armada paling efisien dan memberikan estimasi tarif terbaik.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/6281288122307?text=Halo%20BANTARA%2C%20saya%20ingin%20konsultasi%20pemilihan%20armada%20dan%20penawaran%20harga."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "12px 28px", fontSize: 14.5 }}
              >
                Chat WhatsApp Admin
              </a>
              <Link href="/contact" className="btn-outline" style={{ padding: "12px 28px", fontSize: 14.5 }}>
                Isi Formulir Penawaran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
