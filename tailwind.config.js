module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};
