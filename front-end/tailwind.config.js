/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#9bc48f',
          100: '#88b879',
          200: '#74ac63',
          300: '#60a04b',
          400: '#4b9431',
          500: '#348809',
          600: '#2c7507',
          700: '#246305',
          800: '#1c5203',
          900: '#154102',
        },
        secondary: {
          50: '#f3a594',
          100: '#ee927f',
          200: '#e97f6a',
          300: '#e36b55',
          400: '#dd563e',
          500: '#d63e24',
          600: '#ba351e',
          700: '#9e2b18',
          800: '#842312',
          900: '#6a1a0c',
        }
      }
    },
  },
  plugins: [],
}