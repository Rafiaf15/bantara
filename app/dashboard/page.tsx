import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Dashboard() {
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