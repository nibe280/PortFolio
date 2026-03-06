"use client";

import { ECO_METRICS, ECO_SCORE } from "@/lib/data";

interface EcoPanelProps {
  onClose: () => void;
}

export default function EcoPanel({ onClose }: EcoPanelProps) {
  const circumference = 2 * Math.PI * 38;

  return (
    <div
      className="fixed top-20 right-10 z-50 w-80 rounded-2xl p-6 shadow-2xl"
      style={{
        background: "#111",
        border: "1px solid rgba(245,160,32,.3)",
        animation: "panelIn .2s ease",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span
          className="text-sm text-[#ddd]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          🌿 Rapport Écologique
        </span>
        <button
          onClick={onClose}
          className="text-[#555] hover:text-[#999] text-xl transition-colors"
          aria-label="Fermer"
        >
          ×
        </button>
      </div>

      {/* Score ring */}
      <div className="flex justify-center mb-5">
        <div className="relative w-24 h-24">
          <svg width="96" height="96" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="48" cy="48" r="38" fill="none" stroke="#1e1e1e" strokeWidth="8" />
            <circle
              cx="48" cy="48" r="38" fill="none"
              stroke="#f5a020" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${circumference * ECO_SCORE / 100} ${circumference}`}
              style={{ transition: "stroke-dasharray 1s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-2xl font-bold text-[#f5a020]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: ".05em" }}
            >
              {ECO_SCORE}%
            </span>
            <span
              className="text-[9px] text-[#444] tracking-widest"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ÉCO-SCORE
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="flex flex-col gap-3">
        {ECO_METRICS.map((metric, i) => {
          const color =
            metric.value >= 90 ? "#f5a020" : metric.value >= 80 ? "#c8a840" : "#a08030";
          return (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span
                  className="text-[11px] text-[#666]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {metric.icon} {metric.label}
                </span>
                <span
                  className="text-[11px] font-semibold"
                  style={{ color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {metric.value}%
                </span>
              </div>
              <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "#1e1e1e" }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${metric.value}%`, background: color }}
                />
              </div>
              <p
                className="text-[10px] text-[#333] mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {metric.tip}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="mt-4 p-3 rounded-xl text-center text-[11px] text-[#f5a020]"
        style={{
          background: "rgba(245,160,32,.07)",
          border: "1px solid rgba(245,160,32,.2)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        ✅ Objectif &gt;80% atteint — ~<strong>0.05g CO₂</strong> / visite
      </div>
    </div>
  );
}
