
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ameclr': '#f2d705',
      },

      fontFamily: {
        'font': 'monospace',     // fav
      }
    },
  },
  plugins: [],
}
