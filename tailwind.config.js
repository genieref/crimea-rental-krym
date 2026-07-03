/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#0f3d3d',
          800: '#115e59',
          700: '#0f766e',
          400: '#2dd4bf',
        },
        orange: {
          500: '#f59e0b',
          600: '#d97706',
          400: '#fbbf24',
        },
        brand: {
          900: '#0b1220',
          800: '#111827',
        },
      },
    },
  },
  plugins: [],
};
