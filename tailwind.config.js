import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
    },
  },

  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'cyberpunk'],
  },
  plugins: [daisyui],
};
