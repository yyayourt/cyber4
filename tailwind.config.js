/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // emerald-500
          hover: '#059669', // emerald-600
        },
        secondary: {
          DEFAULT: '#06B6D4', // cyan-500
          hover: '#0891B2', // cyan-600
        },
        accent: {
          DEFAULT: '#F97316', // orange-500
          hover: '#EA580C', // orange-600
        },
        background: {
          DEFAULT: '#111827', // gray-900
          light: '#1F2937', // gray-800
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};