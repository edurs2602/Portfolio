/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },

    extend: {
      colors: {
        'text': '#081016',
        'background': '#fbfcfe',
        'primary': '#3991d0',
        'secondary': '#8dc3ea',
        'accent': '#5eafe9',
       },       
    },
  },
  plugins: [],
})