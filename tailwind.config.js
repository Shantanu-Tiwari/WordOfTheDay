/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: "#030014",
        secondary: "#2d6e73",
        accent: "#a52b64",

      }
    },
  },
  plugins: [],
}