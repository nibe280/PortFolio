"use client";

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0d0d0d] relative flex items-center px-[8vw] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute right-[5%] top-[20%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,160,32,.18) 0%, transparent 65%)",
          filter: "blur(40px)",
          animation: "blobMove 8s ease-in-out infinite",
        }}
      />
      {/* Dot accent */}
      <div
        className="absolute left-[32%] top-[12%] w-2 h-2 rounded-full bg-[#f5a020]"
        style={{ animation: "pulse 2.5s infinite" }}
      />

      <div className="max-w-2xl relative z-10">
        {/* Yellow separator */}
        <div className="w-14 h-[2px] bg-[#f5a020] rounded mb-8" />

        {/* Name */}
        <h1
          className="leading-none mb-6 text-[#f5a020]"
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(5rem, 14vw, 11rem)",
            letterSpacing: ".02em",
            animation: "fadeUp .7s ease .1s both",
          }}
        >
          BENI<br />
          TUKALAYENGE<span className="text-white">.</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-[#888] leading-relaxed mb-10 max-w-md"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            animation: "fadeUp .7s ease .22s both",
          }}
        >
          Bienvenue sur mon portfolio — développeur fullstack spécialisé en{" "}
          <span
            className="text-[#bbb]"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#f5a020",
              textUnderlineOffset: "3px",
            }}
          >
            Data & IA
          </span>
          , étudiant en BUT Informatique 3ᵉ année à l&apos;IUT de Lens.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-4 flex-wrap"
          style={{ animation: "fadeUp .7s ease .36s both" }}
        >
          <button
            onClick={onScrollToProjects}
            className="flex items-center gap-3 py-3 px-6 text-[#ddd] hover:text-[#f5a020] transition-colors duration-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              letterSpacing: ".04em",
              borderLeft: "3px solid #f5a020",
              background: "transparent",
              border: "none",
              borderLeft: "3px solid #f5a020",
              cursor: "pointer",
            }}
          >
            Voir les Projets <span className="text-[#f5a020]">→</span>
          </button>

          {/* CV Download */}
          <a
            href="/cv-beni-tukalayenge.pdf"
            download
            className="flex items-center gap-2 py-3 px-6 rounded-md text-black font-semibold text-[0.95rem] transition-all duration-200 hover:opacity-90"
            style={{
              background: "#f5a020",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: ".04em",
              textDecoration: "none",
            }}
          >
            📄 Télécharger mon CV
          </a>
        </div>

        {/* Quick info */}
        <div
          className="flex gap-6 mt-12 flex-wrap"
          style={{ animation: "fadeUp .7s ease .5s both" }}
        >
          {[
            ["📍", "Arras, France"],
            ["🏫", "IUT de Lens"],
            ["💼", "Alternant — Sarber"],
            ["⚽", "Football R3"],
          ].map(([icon, label]) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[#3a3a3a] text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {icon} {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
