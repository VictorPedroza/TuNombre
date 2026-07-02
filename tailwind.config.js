/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAF8",
        },
        foreground: {
          DEFAULT: "#1A1A1A",
          muted: "#787870"
        }
      },
    },
  },
  plugins: [],
};