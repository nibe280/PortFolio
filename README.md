# 🌿 Portfolio — Beni Tukalayenge

Portfolio éco-responsable développé avec **Next.js 14** + **TypeScript** + **Tailwind CSS**.

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx        # Layout global + métadonnées SEO
│   ├── page.tsx          # Page principale (composition des sections)
│   └── globals.css       # Styles globaux + animations
├── components/
│   ├── Navbar.tsx        # Navigation fixe + badge éco
│   ├── EcoPanel.tsx      # Panneau rapport écologique
│   ├── Hero.tsx          # Section hero + CTA + lien CV
│   ├── About.tsx         # À propos + timeline parcours
│   ├── Skills.tsx        # Compétences avec filtres par catégorie
│   ├── Projects.tsx      # Grille projets avec filtres
│   ├── Contact.tsx       # Section contact + lien CV
│   ├── Footer.tsx        # Footer + éco-score
│   └── ScrollToTop.tsx   # Bouton retour en haut
├── lib/
│   └── data.ts           # Toutes les données (projets, skills, timeline...)
├── types/
│   └── index.ts          # Types TypeScript globaux
├── public/
│   └── cv-beni-tukalayenge.pdf   # ⚠️ Déposer votre CV ici !
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Déposer votre CV dans public/
cp /chemin/vers/CV.pdf public/cv-beni-tukalayenge.pdf

# 3. Lancer en développement
npm run dev

# 4. Vérifier les types TypeScript
npm run type-check

# 5. Build de production
npm run build
```

## ♻️ Éco-score : 91%

Optimisations mises en place :
- ✅ Dark mode natif (−40% conso OLED)
- ✅ 0 tracker, 0 cookie tiers
- ✅ Bundle JS < 60 KB
- ✅ SVG uniquement, pas d'images bitmap
- ✅ Cache PDF immutable (1 an)
- ✅ Hébergement sur Vercel (certifié green)

## 🟦 Pourquoi TypeScript ?

- **Typage strict** → zéro bug de type en production
- **Autocomplétion** → développement plus rapide
- **Refactoring sûr** → les erreurs sont détectées à la compilation
- **Lisible par les recruteurs** → standard industrie 2025

## 🌐 Déploiement sur Vercel

```bash
npm install -g vercel
vercel --prod
```

> Vercel est certifié hébergement vert ✅ — contribue à l'éco-score.
