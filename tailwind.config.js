/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './common/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'background-primary': '#EB4B98',
      'background-secondary': '#F26DF9',
      'background-tertiary': '#5158BB',
      'text-primary': '#02394A',
      'text-secondary': '#043565',
      'text-tertiary': '#13ce66',
      'dark-background-primary': '#1fb6ff',
      'dark-background-secondary': '#7e5bef',
      'dark-background-tertiary': '#ff49db',
      'dark-text-primary': '#FFFFFF',
      'dark-text-secondary': '#ff7849',
      'dark-text-tertiary': '#13ce66',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    extend: {
      fontFamily: { montserrat: 'Montserrat' },
    },
  },
  plugins: [],
};
