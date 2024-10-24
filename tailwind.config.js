/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF9900',
        primary100: '#f68b1e'
      },
      screens: {
        '2xl-custom': '1836px', 
      },
    },
  },
  plugins: [],
}