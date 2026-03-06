"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center text-black font-bold text-lg transition-transform hover:scale-110"
      style={{
        background: "#f5a020",
        boxShadow: "0 8px 24px rgba(245,160,32,.35)",
      }}
      aria-label="Retour en haut"
    >
      ∧
    </button>
  );
}
