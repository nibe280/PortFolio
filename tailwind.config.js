module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:  "#f5a020",
        dark:    "#0d0d0d",
        card:    "#141414",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "Impact", "sans-serif"],
        dm:    ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
