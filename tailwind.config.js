/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        montserrat: "Montserrat",
      },
      colors: {
        gray1: "#333333",
        gray2: "#bdbdbd",
        gray3: "#828282",
        red: "#eb5757",
        blue: "#2f80ed",
      },
    },
  },
  plugins: [],
};
