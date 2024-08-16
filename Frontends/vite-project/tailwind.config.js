/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        animStar: 'animStar 50s linear infinite',
        animStar2: 'animStar 100s linear infinite',
        animStar3: 'animStar 150s linear infinite',
      },
      keyframes: {
        animStar: {
          'from': { transform: 'translateY(0px)' },
          'to': { transform: 'translateY(-2000px)' },
        },
      },
    },
  },
  plugins: [],
}

