/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        btn: "#3E76FE",
        text_primar: "#fff",
        text_heading: "#111827",
        text_secondary: "#38404A",
        github_link: "#4B5563",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
