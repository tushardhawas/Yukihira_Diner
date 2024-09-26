/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#006D77",
        secondary: "#83C5BE",
        background: "#EDF6F9",
        accent: "#FFDDD2",
        highlight: "#E29578",
      },
    },
  },
  plugins: [],
};
