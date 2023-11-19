/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4',
        dark: '#212121',
        darkText: '#212427',
        white: '#FAFAFA',
        error: '#D86161',
        placeholder: '#7A7A7A',
        border: '#E6E6E6'
      },
    },
  },
  plugins: [],
}