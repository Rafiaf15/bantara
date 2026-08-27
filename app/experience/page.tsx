import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Experience from "../sections/experience/Experience";

export const metadata: Metadata = {
  title: "Experience & Track Record — BANTARA | PT Bima Arung Dwipantara",
  description:
    "Pengalaman dan portofolio proyek logistik PT Bima Arung Dwipantara (BANTARA) di seluruh Indonesia.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
