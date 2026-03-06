"use client";

import { useState } from "react";
import { SKILLS, SKILL_ICONS, SKILL_CATEGORY_LABEL } from "@/lib/data";

type SkillTab = keyof typeof SKILLS;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("TOUT");

  const getLabel = (skill: string): string => {
    return SKILL_CATEGORY_LABEL[skill] ?? "BACKEND";
  };

  return (
    <section id="skills" className="bg-[#0d0d0d] px-[8vw] py-24 border-t border-white/5">
      {/* Filter tabs */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {(Object.keys(SKILLS) as SkillTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded text-xs tracking-widest font-semibold transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#f5a020] text-black border border-[#f5a020]"
                : "bg-transparent text-[#555] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:text-[#777]"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))" }}>
        {SKILLS[activeTab].map((skill: string, i: number) => (
          <div
            key={skill}
            className="group bg-[#141414] border border-[#222] rounded-xl p-5 flex flex-col gap-3 cursor-default transition-all duration-200 hover:border-[#f5a020]/50 hover:-translate-y-1"
            style={{
              animation: `fadeUp .45s ease ${i * 0.045}s both`,
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl">{SKILL_ICONS[skill] ?? "🔧"}</span>
              <span
                className="text-[9px] text-[#3a3a3a] border border-[#2a2a2a] rounded px-2 py-[2px] tracking-[.12em]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {getLabel(skill)}
              </span>
            </div>
            <span
              className="text-[#ddd] text-sm font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div
        className="grid gap-5 mt-16"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {[
          { icon: "🧩", title: "Projet en équipe",  desc: "Collaboration agile — équipes Sarber" },
          { icon: "🗄️", title: "Base de données",   desc: "SQL, MySQL, PostgreSQL, Sage X3" },
          { icon: "🌐", title: "Système & Réseau",  desc: "Déploiement, CI/CD, Jenkins" },
          { icon: "🤖", title: "Data & IA",          desc: "RL, DQN, Selenium, Python — BUT 3A" },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-[#141414] border border-[#222] rounded-xl p-5 hover:border-[#f5a020]/30 transition-colors duration-200"
          >
            <span className="text-2xl block mb-3">{card.icon}</span>
            <p
              className="text-[#ccc] text-sm font-medium mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {card.title}
            </p>
            <p
              className="text-[#3a3a3a] text-xs leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
