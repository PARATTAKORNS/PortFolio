/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'mulish' : ["Mulish", 'sans-serif'],
      },
      colors : {
        orange : '#FFAC4A',
        linkedin : '#0077B5',
      } 
      
    },
  },
  plugins: [],
}

