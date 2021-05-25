// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      colors: {
        'background': 'hsl(180, 52%, 96%)',
        'primary': 'hsl(180, 29%, 50%)',
        'filter': 'hsl(180, 31%, 95%)',
        'dark': 'hsl(180, 8%, 52%)',
        'verydark': 'hsl(180, 14%, 20%)'
      },
      screens: {
        'mobile' : '375px',
        'desktop' : '1440px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}