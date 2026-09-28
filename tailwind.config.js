/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#cf9f48',
          goldHover: '#ba8735',
          darkTeal: 'rgba(10, 60, 66, 0.45)',
        }
      }
    },
  },
  plugins: [],
}
