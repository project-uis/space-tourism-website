/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorBlack: "#0B0D17",
        paleBlue: "#D0D6F9",
        colorWhite: "#FFFFFF",
      },
      fontFamily: {
        barlowCondensed: ["BarlowCondensed-Regular", "sans-serif"],
        belleFair: ["Bellefair-Regular", "serif"],
      },
    },
  },
  plugins: [],
};
