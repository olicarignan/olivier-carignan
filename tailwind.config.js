const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      grey: "#1b191f",
      white: "#fffff9",
    },
    fontFamily: {
      inter: ["Inter Regular"],
      interBold: ["Inter Bold"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
