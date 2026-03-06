import { ECO_SCORE } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-[#080808] border-t border-white/5 px-[8vw] py-5 flex justify-between items-center flex-wrap gap-3"
    >
      <span
        className="text-[#2a2a2a] text-xs"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        © {year} Beni Tukalayenge — BUT Informatique 3A · IUT de Lens
      </span>

      <span
        className="text-xs text-[#2a4a1a]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        🌱 Éco-score {ECO_SCORE}% — A+
      </span>
    </footer>
  );
}
