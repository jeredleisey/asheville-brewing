/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        pizza: '#a00002',
      },
      fontFamily: {
        corbel: ['Corbel', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
