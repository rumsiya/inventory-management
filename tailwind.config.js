// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.{html,ts}', // This path covers HTML and TypeScript files in src
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
