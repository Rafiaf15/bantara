import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BANTARA — PT Bima Arung Dwipantara | Shipping Operator & Logistic Solution",
  description:
    "BANTARA adalah perusahaan penyedia layanan logistik, shipping operator, dan logistic solution yang berfokus pada transportasi darat, laut, project cargo, pergudangan, dan distribusi ke seluruh Indonesia.",
  keywords: [
    "logistik Indonesia",
    "shipping operator",
    "project cargo",
    "transportasi darat",
    "transportasi laut",
    "pergudangan",
    "distribusi",
    "BANTARA",
    "Bantara logistik",
    "PT Bima Arung Dwipantara",
  ],
  authors: [{ name: "PT Bima Arung Dwipantara" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BANTARA — Shipping Operator & Logistic Solution",
    description:
      "Solusi logistik terintegrasi untuk transportasi darat, laut, project cargo, pergudangan, dan distribusi ke seluruh Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "BANTARA",
    url: "/",
  },
  icons: {
    icon: "/images/Logo-Only.webp",
    shortcut: "/images/Logo-Only.webp",
    apple: "/images/Logo-Only.webp",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Bima Arung Dwipantara",
  alternateName: "BANTARA",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Logo-Only.webp`,
  description:
    "Perusahaan penyedia layanan logistik, shipping operator, dan logistic solution untuk transportasi darat, laut, project cargo, pergudangan, dan distribusi ke seluruh Indonesia.",
  email: "bimaarungdwipantara@gmail.com",
  telephone: "+6281288122307",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
