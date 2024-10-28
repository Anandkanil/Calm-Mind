/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        brand: {
          bgGreen: '#084e4e',
          bgWhite: '#ffffff',
          bgBlack: '#181a1b',
          btnColor1:'#5abaab',
        },
      },
    },
  },
  plugins: [],
};