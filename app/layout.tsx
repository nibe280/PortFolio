import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beni Tukalayenge — Développeur Fullstack",
  description:
    "Portfolio éco-responsable de Beni Tukalayenge — BUT Informatique 3A, IUT de Lens. Développeur fullstack spécialisé Data & IA.",
  authors: [{ name: "Beni Tukalayenge" }],
  keywords: ["développeur", "fullstack", "Next.js", "TypeScript", "Data", "IA", "IUT Lens"],
  openGraph: {
    title: "Beni Tukalayenge — Développeur Fullstack",
    description: "Portfolio éco-responsable | BUT Informatique 3A — IUT de Lens",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
        {/* Preload CV */}
        <link rel="preload" href="/cv-beni-tukalayenge.pdf" as="document" />
      </head>
      <body>{children}</body>
    </html>
  );
}
