/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrainsmono: ["JetBrains", "sans-serif"],
        teko: ["Teko", "sans-serif"]
      },
    },
  },
  plugins: [],
};
