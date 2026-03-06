"use client";

import { TIMELINE } from "@/lib/data";
import type { TimelineItem } from "@/types";

export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] px-[8vw] py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] items-start">

        {/* Left — Texte */}
        <div>
          <div className="w-14 h-[2px] bg-[#f5a020] rounded mb-8" />
          <h2
            className="text-[#f5a020] leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: ".02em",
            }}
          >
            À propos<br />de moi
          </h2>

          <p
            className="text-[#ddd] mb-6 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
            }}
          >
            Développeur Software.
          </p>

          <p
            className="text-[#666] leading-[1.9] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem" }}
          >
            Développeur logiciel formé à la rigueur des systèmes électriques et industriels
            (STI2D, Génie Mécanique), spécialisé en développement full-stack et conception
            d&apos;interfaces. Mon parcours atypique m&apos;a donné une rigueur technique rare.
          </p>
          <p
            className="text-[#666] leading-[1.9] mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem" }}
          >
            En <span className="text-[#aaa]">3ᵉ année de BUT Informatique</span> à l&apos;IUT de Lens
            (Université d&apos;Artois), je me spécialise en{" "}
            <span className="text-[#aaa]">Ingénierie des données et Intelligence Artificielle</span>.
            Alternant chez Sarber, je conçois des applications métier et outils décisionnels sur Sage X3.
          </p>

          {/* Meta */}
          <div className="flex gap-10 flex-wrap">
            {[
              ["FOCUS",       "Data & IA"],
              ["FORMATION",   "BUT Info. 3A — IUT Lens"],
              ["LOCALISATION","Arras, France"],
              ["LANGUES",     "Français · English"],
            ].map(([k, v]) => (
              <div key={k}>
                <p
                  className="text-[#3a3a3a] text-[10px] tracking-[.16em] mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {k}
                </p>
                <p
                  className="text-[#ccc] text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>

          {/* CV link */}
          <a
            href="/cv-beni-tukalayenge.pdf"
            download
            className="inline-flex items-center gap-2 mt-10 py-3 px-6 rounded-md text-black text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ background: "#f5a020", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}
          >
            📄 Télécharger mon CV
          </a>
        </div>

        {/* Right — Timeline */}
        <div>
          <p
            className="text-[#f5a020] text-[10px] tracking-[.18em] mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            — PARCOURS
          </p>
          <div className="relative pl-5">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-white/5" />
            {TIMELINE.map((item: TimelineItem, i: number) => (
              <div key={i} className="mb-7 relative">
                <div
                  className="absolute -left-[22px] top-[5px] w-[10px] h-[10px] rounded-full border-2 border-[#0d0d0d]"
                  style={{ background: item.type === "edu" ? "#f5a020" : "#3ab8f5" }}
                />
                <p
                  className="text-[10px] text-[#333] tracking-[.08em] mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.year}
                </p>
                <p
                  className="text-[#ccc] mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", fontWeight: 500 }}
                >
                  {item.role}
                </p>
                <p
                  className="text-[#f5a020] text-xs mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.org}
                </p>
                <p
                  className="text-[#3a3a3a] text-[12px] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
