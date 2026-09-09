/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        relyon: {
          dark: "#0B1D3A",
          blue: "#1565FF",
          sky: "#4DB6FF",
          ice: "#EBF6FF",
          yellow: "#FFC107",
          darkbg: "#071326",
          darkcard: "#0E2447",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
