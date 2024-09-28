/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screen: {
      'sm': '370px',
      'md' : '760px',
      'lg' : '1000px',
      'xl' : '1200px',
      '2xl' : '1400px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}