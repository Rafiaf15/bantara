import Header from "../components/Header";
import Footer from "../components/Footer";

import Hero from "./sections/home/Home";
import About from "./sections/tentang-kami/About";
import Services from "./sections/services/Services";
import Experience from "./sections/experience/Experience";
import Contact from "./sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
