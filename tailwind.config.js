/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16',
      }
    },
    colors: {
      "primary-blue": "#3071B9",
      ...colors
    }
  },
  plugins: [],
}

