<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

# AGENTS.md

## Project Context

Project ini adalah website company profile untuk **PT Bima Arung Dwipantara (BANTARA)**.

BANTARA adalah perusahaan penyedia layanan logistik, shipping operator, dan logistic solution yang berfokus pada transportasi darat, laut, project cargo, pergudangan, dan distribusi ke seluruh Indonesia.

Website ini dibuat menggunakan:

- Next.js App Router
- TypeScript
- Global CSS melalui `app/globals.css`
- Struktur komponen modular
- Desain corporate/logistic
- Optimasi gambar agar tidak membebani VPS

Tujuan utama website:

- Menampilkan profil perusahaan secara profesional
- Menampilkan layanan utama perusahaan
- Menampilkan pengalaman/project perusahaan
- Menyediakan kontak perusahaan
- Siap dikembangkan untuk deployment ke VPS Oracle Cloud

---

## Development Rules

### 1. Framework

Gunakan **Next.js App Router**.

Struktur routing utama:

```txt
app/
├── page.tsx
├── layout.tsx
├── globals.css
└── dashboard/
    ├── page.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Services.tsx
    ├── Experience.tsx
    ├── Contact.tsx
<!-- END:nextjs-agent-rules -->
