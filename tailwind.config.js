/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImg: "url('/background.png')",
      },
      colors: {
        transparent: 'rgba(255,255,255, 0.1)',
        'blue-500': '#8da4ea',
      },
      backgroundSize: {
        'fill': '100% 100%',
        'fill-50': '100% 50%'
      },
      screens: {
        'lg': '985px',
        'md': '720px',
        'sm': '470px'
      }
    },
  },
  plugins: [],
};
