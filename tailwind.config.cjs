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
      },
      backgroundImage:{
        
        'secondary-gradient': "linear-gradient(207deg, rgba(21,26,32,1) 30%, rgba(37,40,44,1) 100%);",
        'primary-gradient': "linear-gradient(90deg, rgba(5,16,76,1) 0%, rgba(24,43,211,1) 50%, rgba(5,16,76,1) 100%);",
        
      },
    },
  },
  plugins: [],
}
