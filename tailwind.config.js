/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./partials/**/*.html",
    "./templates/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        base: { light: "#FAFAF8", dark: "#0E0E0E" },
        accent: { gold: "#D8C48C", rose: "#C4A1A5", champagne: "#E7D8B1" }
      },
      borderRadius: { sm: "6px" }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
