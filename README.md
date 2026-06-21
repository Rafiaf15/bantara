# BANTARA — PT Bima Arung Dwipantara

**Website Company Profile Resmi**

> Shipping Operator & Logistic Solution — Transportasi Darat, Laut, Project Cargo, Pergudangan & Distribusi ke Seluruh Indonesia.

---

## 🚢 Tentang Proyek

Website company profile resmi **PT Bima Arung Dwipantara (BANTARA)** yang dibangun menggunakan **Next.js App Router**. Website ini menampilkan profil perusahaan, layanan logistik, pengalaman proyek, serta menyediakan saluran kontak langsung via WhatsApp.

---

## ✨ Fitur Utama

- **Hero Section** — Full-screen dengan background kapal cargo, animasi teks gradient, dan statistik perusahaan
- **About Section** — Profil perusahaan dua kolom dengan highlight cards dan scroll animation
- **Services Section** — 6 layanan utama dalam grid glassmorphism dengan ikon SVG
- **Experience Section** — Timeline vertikal proyek dengan badge kategori berwarna
- **Contact Section** — Info kontak + tombol konsultasi langsung via WhatsApp
- **Responsive Design** — Mobile-first, hamburger menu, layout adaptif semua ukuran layar
- **SEO Optimized** — Metadata, OpenGraph, dan struktur heading yang teroptimasi

---

## 🛠️ Tech Stack

| Teknologi | Keterangan |
|-----------|------------|
| [Next.js 16](https://nextjs.org) | App Router framework |
| TypeScript | Type-safe development |
| Vanilla CSS | Design system kustom (globals.css) |
| Google Fonts (Inter) | Tipografi premium |
| styled-jsx | Scoped responsive styles per komponen |

---

## 📁 Struktur Proyek

```
bantara-web/
├── app/
│   ├── globals.css          # Design system: warna, animasi, glassmorphism
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Redirect ke /dashboard
│   └── dashboard/
│       ├── page.tsx         # Halaman utama company profile
│       ├── Hero.tsx         # Section hero full-screen
│       ├── About.tsx        # Section profil perusahaan
│       ├── Services.tsx     # Section layanan utama
│       ├── Experience.tsx   # Section timeline proyek
│       └── Contact.tsx      # Section kontak & WhatsApp CTA
├── components/
│   ├── Header.tsx           # Navigasi glassmorphism + mobile menu
│   └── Footer.tsx           # Footer 4-kolom
└── public/
    └── images/              # Aset gambar (hero-bg, services-bg, logo)
```

---

## 🚀 Cara Menjalankan

### Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser. Halaman akan otomatis mengarah ke `/dashboard`.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design System

- **Palette Warna**: Navy gelap (`#040a18` → `#2e4a7a`) dengan aksen emas hangat (`#c8a45e` → `#e0c07c`)
- **Efek Visual**: Glassmorphism, backdrop blur, radial gradient glow
- **Animasi**: Scroll-triggered fadeInUp, floating orbs, gradient text, pulse glow
- **Tipografi**: Inter (Google Fonts), weight 300–900

---

## 📞 Kontak Perusahaan

| Saluran | Info |
|---------|------|
| 📧 Email | bimaarungdwipantara@gmail.com |
| 📱 WhatsApp | [+62 812-8812-2307](https://wa.me/6281288122307) |
| 📍 Kantor | Jakarta Garden City |
| 🏭 Operasional | Bekasi — Taruma Jaya |

---

## 🗂️ Deployment

Website ini dioptimalkan untuk deployment ke **VPS Oracle Cloud** dengan build statis Next.js.

```bash
npm run build
# Upload folder .next/ dan public/ ke server
```

---

*© PT Bima Arung Dwipantara (BANTARA). All rights reserved.*
