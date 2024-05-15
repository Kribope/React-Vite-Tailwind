/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          cGray: '#f9fafb',
          cSilver: '#95a5a6',
          cWhite: '#ccc',
        },
      }
    },
  },
  plugins: [],
}