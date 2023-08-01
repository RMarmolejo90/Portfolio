/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      tilt: "'Tilt Warp', sans-serifs",
      lato: "'Lato', sans-serif"
      },
      backgroundImage:{
        'text-gradient': "linear-gradient(140deg, rgba(45,133,255,1) 17%, rgba(70,231,255,1) 46%, rgba(19,118,241,1) 97%);",
        'secondary-gradient': "linear-gradient(207deg, rgba(21,26,32,1) 30%, rgba(37,40,44,1) 100%);",
        'primary-gradient': "linear-gradient(90deg, rgba(5,16,76,1) 0%, rgba(24,43,211,1) 50%, rgba(5,16,76,1) 100%);",
        'hero-gradient': "linear-gradient(351deg, rgba(56,72,93,1) 14%, rgba(17,48,53,1) 54%, rgba(75,84,95,1) 86%);",
      },
    },
  },
  plugins: [],
}
