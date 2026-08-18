import Header from "../components/Header";
import Footer from "../components/Footer";

// Section Components for Modern Structured Homepage
import Hero from "./sections/home/Home";
import HomeAboutPreview from "./sections/home/HomeAboutPreview";
import HomeServicesPreview from "./sections/home/HomeServicesPreview";
import Workflow from "./sections/home/Workflow";
import NetworkRoutes from "./sections/home/NetworkRoutes";
import HomeExperiencePreview from "./sections/home/HomeExperiencePreview";
import HomeCtaBanner from "./sections/home/HomeCtaBanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero & Stats */}
        <Hero />
        <div className="section-divider" />

        {/* 2. Ringkasan Tentang Kami (Split Layout) */}
        <HomeAboutPreview />
        <div className="section-divider" />

        {/* 3. Layanan Unggulan (Services Showcase) */}
        <HomeServicesPreview />
        <div className="section-divider" />

        {/* 4. Alur Kerja Pengiriman (4-Step Workflow) */}
        <Workflow />
        <div className="section-divider" />

        {/* 5. Jaringan & Koridor Rute Nusantara */}
        <NetworkRoutes />
        <div className="section-divider" />

        {/* 6. Portofolio & Track Record Proyek */}
        <HomeExperiencePreview />
        <div className="section-divider" />

        {/* 7. Quick Action CTA Banner (WhatsApp & Form Kontak) */}
        <HomeCtaBanner />
      </main>
      <Footer />
    </>
  );
}
