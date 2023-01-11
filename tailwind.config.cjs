/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(251, 251, 251, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}