/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hfg: {
          white: '#ffffff',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
};
