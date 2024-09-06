/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrainsmono: ["JetBrains", "sans-serif"],
        teko: ["Teko", "sans-serif"],
      },
      colors: {
        "dark-grey": "#000000",
        "light-blue": "#4F98CA",
        "sport-green": "#50D890",
        "rather-green": "#EFFFFB",
      },
    },
  },
  plugins: [],
};
