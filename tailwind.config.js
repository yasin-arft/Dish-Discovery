/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#0BE58A',
      'dark': '#150B2B',
      'dark2': '#282828',
    },
    fontFamily: {
      lexend: ['Lexend', 'sans-serif'],
      firaSans: ['Fira Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

