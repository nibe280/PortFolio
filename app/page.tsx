"use client";

import { useState } from "react";
import Navbar       from "@/components/Navbar";
import EcoPanel     from "@/components/EcoPanel";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";
import ScrollToTop  from "@/components/ScrollToTop";

export default function HomePage() {
  const [ecoOpen, setEcoOpen] = useState<boolean>(false);

  const scrollToProjects = (): void => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        ecoOpen={ecoOpen}
        onEcoToggle={() => setEcoOpen((prev) => !prev)}
      />

      {ecoOpen && <EcoPanel onClose={() => setEcoOpen(false)} />}

      <main>
        <Hero onScrollToProjects={scrollToProjects} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
