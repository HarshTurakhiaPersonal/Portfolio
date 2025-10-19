/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        grey: {
          800: "#18141c",
          900: "#120f16",
        },
        yellow: {
          400: "#FEDE00",
        },
      },
      backgroundImage: {
        heropattern: "url('src/assets/images/herobgc.jpg')",
      },
    },
    plugins: [],
  },
};
