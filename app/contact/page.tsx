import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../sections/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us — BANTARA | PT Bima Arung Dwipantara",
  description:
    "Hubungi PT Bima Arung Dwipantara (BANTARA) untuk konsultasi pengiriman, penawaran harga, dan solusi logistik terpercaya.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
