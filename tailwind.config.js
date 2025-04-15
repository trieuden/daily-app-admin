/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-left': 'bounceLeft 0.5s infinite',
      },
      keyframes: {
        bounceLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-2px)' },
        },
      },
    },
  },
  plugins: [],
}

