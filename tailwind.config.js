/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        customColor1: '#f00', // Example color
        customColor2: '#0f0', // Example color
        customColor3: '#00f', // Example color
      },
      animation: {
        bounce: 'bounce 1s infinite',
        fadeIn: 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};