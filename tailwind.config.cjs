/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      tilt: "'Tilt Warp', cursive",
      lato: "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}
