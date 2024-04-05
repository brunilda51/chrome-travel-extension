/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#2E387A', // Orange
        lightblue: '#6482F5', // Green
        yellow: '#F0DC50', // Blue
      },
    },
  },
  plugins: [],
};
