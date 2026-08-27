"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  // Form state for WhatsApp Quote Generator
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Project Cargo",
    origin: "",
    destination: "",
    cargoWeight: "",
    notes: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo BANTARA, saya ingin meminta penawaran harga & konsultasi logistik:
- *Nama / Perusahaan:* ${formData.name || "-"}
- *No. WhatsApp:* ${formData.phone || "-"}
- *Layanan:* ${formData.service}
- *Rute Pengiriman:* ${formData.origin || "Jakarta"} → ${formData.destination || "Tujuan"}
- *Estimasi Berat/Volume:* ${formData.cargoWeight || "-"}
- *Catatan Khusus:* ${formData.notes || "-"}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281288122307?text=${encoded}`, "_blank");
  };

  const contactDetails = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Telepon & WhatsApp",
      value: "Admin Bantara",
      sub: "Respon cepat di jam kerja (Senin – Sabtu)",
      action: "https://wa.me/6281288122307",
      actionText: "Chat WhatsApp",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email Resmi",
      value: "bimaarungdwipantara@gmail.com",
      sub: "Untuk penawaran korporat & tender project",
      action: "mailto:bimaarungdwipantara@gmail.com",
      actionText: "Kirim Email",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Jam Operasional",
      value: "Senin – Sabtu: 08.00 – 17.00 WIB",
      sub: "Layanan konsultasi & jadwal pickup",
      action: null,
      actionText: null,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Kantor Pusat & Operasional",
      value: "Bekasi Harapan Indah",
      sub: "Jl. Ruko Taman Cemara Blk. U6 No.11",
      action: "https://maps.app.goo.gl/H8wLNfrPzHV8o4xY8",
      actionText: "Buka Google Maps",
    },
  ];

  const faqs = [
    {
      q: "Bagaimana cara meminta penawaran harga pengiriman?",
      a: "Anda dapat mengisi formulir penawaran cepat di halaman ini atau langsung menghubungi nomor WhatsApp kami. Tim sales kami akan menghitung tarif berdasarkan rute, jenis muatan, dan volume.",
    },
    {
      q: "Apakah BANTARA melayani penjemputan barang (Door to Door)?",
      a: "Ya, kami menyediakan layanan door-to-door dengan armada truk dan trailer kami untuk penjemputan langsung di lokasi pabrik/gudang Anda.",
    },
    {
      q: "Rute pengiriman mana saja yang dilayani?",
      a: "Kami melayani pengiriman logistik antar pulau ke seluruh Indonesia melalui jalur darat, laut, hingga project cargo khusus untuk material berat.",
    },
  ];

  return (
    <section
      id="contact"
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
          style={{ textAlign: "center", marginBottom: 50 }}
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
            Hubungi Kami
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
            Konsultasi &amp; Penawaran Logistik
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
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Tim operasional BANTARA siap membantu kebutuhan logistik Anda. Tanya rute, estimasi ongkir, atau jadwal pengiriman melalui WhatsApp, formulir, atau telepon.
          </p>
        </div>

        {/* 2-Column Main Section: Info Cards (Left) & Form (Right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 40,
            alignItems: "start",
            marginBottom: 60,
          }}
          className="contact-main-grid"
        >
          {/* Left Column — Contact Information & Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              Informasi Kontak
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 8 }}>
              Hubungi kantor representatif kami untuk respon cepat pada jam operasional.
            </p>

            {contactDetails.map((item, idx) => (
              <div
                key={idx}
                className="glass-card animate-on-scroll"
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(200, 164, 94, 0.1)",
                    border: "1px solid rgba(200, 164, 94, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 2,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      marginBottom: item.action ? 10 : 0,
                    }}
                  >
                    {item.sub}
                  </div>
                  {item.action && (
                    <a
                      href={item.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--gold-500)",
                        textDecoration: "none",
                        transition: "opacity 0.2s ease",
                      }}
                    >
                      {item.actionText} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column — Interactive WhatsApp Quote Form */}
          <div className="animate-on-scroll">
            <div
              className="glass-card"
              style={{
                padding: "36px 32px",
                position: "relative",
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--gold-500)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  Quick Quote
                </span>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  Formulir Permintaan Penawaran
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>
                  Lengkapi data pengiriman Anda. Tombol di bawah akan langsung menghubungkan pesan terformat ke WhatsApp Sales BANTARA.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-two-cols">
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                      Nama / Perusahaan *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Contoh: PT Sumber Makmur"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                    Jenis Layanan
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="contact-input"
                    style={{ cursor: "pointer" }}
                  >
                    <option value="Project Logistics">Project Logistics</option>
                    <option value="Pengangkutan Laut (Kapal/Container)">Pengangkutan Laut (Kapal / Container)</option>
                    <option value="Pengangkutan Darat (Truk/Trailer)">Pengangkutan Darat (Truk / Trailer)</option>
                    <option value="Pergudangan & Distribusi">Pergudangan &amp; Distribusi</option>
                    <option value="Material Konstruksi (Spun Pile, Besi)">Material Konstruksi (Spun Pile, Besi)</option>
                    <option value="Transformers & Heavy Lift">Transformers &amp; Heavy Lift</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-two-cols">
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                      Kota Asal / Muat
                    </label>
                    <input
                      type="text"
                      name="origin"
                      placeholder="Contoh: Jakarta / Surabaya"
                      value={formData.origin}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                      Kota Tujuan / Bongkar
                    </label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Contoh: Balikpapan / Medan"
                      value={formData.destination}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                    Estimasi Berat / Volume (Opsional)
                  </label>
                  <input
                    type="text"
                    name="cargoWeight"
                    placeholder="Contoh: 25 Ton / 2 Kontainer 40ft"
                    value={formData.cargoWeight}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                    Catatan Khusus
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Tuliskan spesifikasi muatan atau jadwal penjemputan yang diinginkan..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="contact-input"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    fontSize: 15,
                    fontWeight: 600,
                    justifyContent: "center",
                    marginTop: 6,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Kirim Permintaan via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Accordion / Information Section */}
        <div className="animate-on-scroll" style={{ marginTop: 40 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
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
              Pertanyaan Umum
            </span>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>
              FAQ Seputar Layanan BANTARA
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: 24,
                }}
              >
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </h4>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          padding: 11px 14px;
          border-radius: 8px;
          border: 1px solid var(--card-border);
          background: var(--surface);
          color: var(--text-primary);
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: all 0.25s ease;
        }
        .contact-input:focus {
          border-color: var(--gold-500);
          box-shadow: 0 0 0 3px rgba(200, 164, 94, 0.15);
        }
        .contact-input::placeholder {
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .form-two-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
