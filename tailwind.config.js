/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DA4B2C',
        'primary-light': '#FA6F51',
        'light-gray': '#F4F4F4',
        'white': '#FFFFFF',
      },
      borderRadius: {
        'xl': '16px',
      },
    },
  },
  plugins: [],
}

