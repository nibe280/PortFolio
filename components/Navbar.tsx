"use client";

import { useState, useEffect } from "react";
import { ECO_SCORE } from "@/lib/data";

interface NavbarProps {
  onEcoToggle: () => void;
  ecoOpen: boolean;
}

export default function Navbar({ onEcoToggle, ecoOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-8 px-12 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {(["about", "Projets"] as const).map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id === "Projets" ? "projects" : id)}
          className="text-sm text-[#777] hover:text-white transition-colors duration-200 tracking-wide font-light"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {id === "about" ? "À propos" : id}
        </button>
      ))}

      {/* Éco badge */}
      <button
        onClick={onEcoToggle}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 border ${
          ecoOpen
            ? "bg-[#f5a020] border-[#f5a020] text-black"
            : "bg-[#f5a020]/10 border-[#f5a020]/40 text-[#f5a020] hover:bg-[#f5a020]/20"
        }`}
        title={`Éco-score ${ECO_SCORE}%`}
        aria-label="Ouvrir le rapport écologique"
      >
        {ecoOpen ? "×" : "🌱"}
      </button>
    </nav>
  );
}
