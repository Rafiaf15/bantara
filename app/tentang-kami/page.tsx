import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../sections/tentang-kami/About";

export const metadata: Metadata = {
  title: "Tentang Kami — BANTARA | PT Bima Arung Dwipantara",
  description:
    "Kenali lebih dalam PT Bima Arung Dwipantara (BANTARA) - perusahaan shipping operator & logistic solution dengan jangkauan nasional dan armada lengkap.",
  alternates: { canonical: "/tentang-kami" },
};

export default function TentangKamiPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <About />
      </main>
      <Footer />
    </>
  );
}
