"use client";

interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

const CONTACT_LINKS: ContactLink[] = [
  { icon: "📧", label: "benitukala12@gmail.com", href: "mailto:benitukala12@gmail.com" },
  { icon: "📞", label: "06 15 71 15 14",          href: "tel:0615711514" },
  { icon: "📍", label: "Arras, France",            href: "#" },
  { icon: "💼", label: "LinkedIn",                 href: "https://linkedin.com" },
  { icon: "🐙", label: "GitHub",                   href: "https://github.com" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#090909] px-[8vw] py-32 border-t border-white/5 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute right-[10%] bottom-[15%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,160,32,.12) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute left-[42%] top-[15%] w-2 h-2 rounded-full bg-[#f5a020] opacity-60"
        style={{ animation: "pulse 2s infinite" }}
      />

      <div className="text-center relative z-10">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded border"
          style={{ background: "#141414", borderColor: "#2a2a2a" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full bg-[#f5a020]"
            style={{ animation: "pulse 2s infinite" }}
          />
          <span
            className="text-[#555] text-[10px] tracking-[.14em]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            DISPONIBLE — ALTERNANCE 2025
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-white leading-none mb-5"
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: ".02em",
          }}
        >
          Intéressé par{" "}
          <span className="text-[#f5a020]">mon travail ?</span>
        </h2>

        <p
          className="text-[#555] mb-12 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
        >
          N&apos;hésitez pas à me contacter pour discuter de vos projets.<br />
          Je me ferai un plaisir de vous répondre rapidement.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:benitukala12@gmail.com"
          className="inline-flex items-center gap-2 py-4 px-10 rounded-full text-black font-bold text-sm tracking-widest transition-all duration-200 hover:bg-transparent hover:text-[#f5a020] hover:border-[#f5a020]"
          style={{
            background: "#f5a020",
            border: "1.5px solid #f5a020",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
          }}
        >
          ME CONTACTER →
        </a>

        {/* CV download */}
        <div className="mt-4">
          <a
            href="/cv-beni-tukalayenge.pdf"
            download
            className="inline-flex items-center gap-2 py-3 px-8 rounded-full text-[#f5a020] text-sm tracking-wider transition-colors hover:text-white"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              border: "1.5px solid rgba(245,160,32,.3)",
            }}
          >
            📄 Télécharger mon CV
          </a>
        </div>

        {/* Contact links */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-[#3a3a3a] text-xs hover:text-[#666] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
