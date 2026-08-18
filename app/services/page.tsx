import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../sections/services/Services";

export const metadata: Metadata = {
  title: "Services — BANTARA | Logistik Terintegrasi",
  description:
    "Layanan logistik komprehensif BANTARA: Project Logistics, Pengangkutan Laut, Pengangkutan Darat, Pergudangan, Constructions, dan Transformers.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Services />
      </main>
      <Footer />
    </>
  );
}
