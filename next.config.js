const nextConfig = {
  // Optimisations éco-responsables
  compress: true,
  poweredByHeader: false,

  // Headers de cache agressif
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",            value: "DENY" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/cv-beni-tukalayenge.pdf",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Disposition", value: "attachment; filename=CV_Beni_Tukalayenge.pdf" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
