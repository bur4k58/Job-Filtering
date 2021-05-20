// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      colors: {
        "background": "hsl(180, 52%, 96%)"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}