import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "PT Bima Arung Dwipantara" }],
  openGraph: {
    title: "BANTARA — Shipping Operator & Logistic Solution",
    description:
      "Solusi logistik terintegrasi untuk transportasi darat, laut, project cargo, pergudangan, dan distribusi ke seluruh Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/images/Logo-Only.webp",
    shortcut: "/images/Logo-Only.webp",
    apple: "/images/Logo-Only.webp",
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
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
