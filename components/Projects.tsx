"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/data";
import type { Project, ProjectFilter } from "@/lib/data";

// Mini browser mockup
function ProjectThumbnail({ color }: { color: string }) {
  return (
    <div
      className="h-48 flex items-center justify-center border-b border-white/5 relative overflow-hidden"
      style={{ background: "#111" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 60%, ${color}18 0%, transparent 70%)` }}
      />
      <div
        className="w-[75%] h-[80%] rounded-lg flex flex-col overflow-hidden relative z-10"
        style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
      >
        {/* Browser bar */}
        <div
          className="h-6 flex items-center px-3 gap-1.5 border-b border-white/5"
          style={{ background: "#141414" }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* Content lines */}
        <div className="flex-1 p-3 flex flex-col gap-2">
          <div className="h-2 rounded" style={{ background: "#2a2a2a", width: "60%" }} />
          <div className="h-1.5 rounded" style={{ background: "#1e1e1e", width: "90%" }} />
          <div className="h-1.5 rounded" style={{ background: "#1e1e1e", width: "75%" }} />
          <div
            className="mt-2 h-7 rounded-md flex items-center justify-center text-[10px] font-medium"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Aperçu
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Tous");

  const filtered: Project[] =
    filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section id="projects" className="bg-[#0d0d0d] px-[8vw] py-24 border-t border-white/5">
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-[#f5a020] leading-none mb-4"
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: ".02em",
          }}
        >
          Mes Projets
        </h2>
        <p className="text-[#555] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Une sélection de projets mêlant précision technique et design soigné.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-[11px] tracking-wider font-semibold transition-all duration-200 ${
              filter === f
                ? "bg-[#f5a020] text-black border border-[#f5a020]"
                : "bg-transparent text-[#555] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:text-[#777]"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {filtered.map((project, i) => (
          <article
            key={i}
            className="bg-[#141414] border border-[#222] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1"
            style={{ "--hover-border": project.color } as React.CSSProperties}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = project.color + "60";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#222";
            }}
          >
            <ProjectThumbnail color={project.color} />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span
                  className="text-[10px] tracking-[.12em] px-2 py-1 rounded"
                  style={{
                    color: project.color,
                    background: project.color + "15",
                    border: `1px solid ${project.color}30`,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {project.type}
                </span>
                <span
                  className="text-[10px] text-[#4a8a3a]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  🌱 {project.co2}/vue
                </span>
              </div>
              <h3
                className="text-[#ddd] mb-2 leading-none"
                style={{
                  fontFamily: "'Bebas Neue', Impact, sans-serif",
                  fontSize: "1.4rem",
                  letterSpacing: ".03em",
                }}
              >
                {project.title}
              </h3>
              <p
                className="text-[#555] text-xs leading-relaxed mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {project.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#444] border border-[#222] rounded px-2 py-1"
                    style={{ background: "#1a1a1a", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Coming soon */}
        <div
          className="rounded-2xl flex items-center justify-center min-h-[22rem]"
          style={{ background: "#0f1a10", border: "1px solid #1a2a1a" }}
        >
          <div className="text-center">
            <p
              className="text-[#2a4a2a] mb-2"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2rem",
                letterSpacing: ".1em",
              }}
            >
              COMING<br />SOON
            </p>
            <p className="text-[#1a3a1a] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              🌱 Prochain projet éco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
