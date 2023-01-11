/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      "black-dark": "#111111",
      "gray-dark": "#171717",
      "gray-light": "#2E2E2E",
      gray: "#1D1D1D",
      yellow: "#E3B748",
      white: "#fff",
      silver: "#E6E6E6",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ['"Inter"'],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
