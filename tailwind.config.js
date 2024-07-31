/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true, 
      padding: '16px'
    },
    extend: {
      fontFamily: {
        'inter': 'Inter'
      },
      colors: {
        'start': '#a855f7',
        'middle': '#7dd3fc',
        'end': '#5eead4',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Untuk browser berbasis WebKit seperti Chrome, Safari, Opera */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Safari dan Chrome */
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

