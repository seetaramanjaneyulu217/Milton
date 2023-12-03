/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '560px',
      'md': '900px',
      'lg': '1440px',
    },
    extend: {
      fontFamily: {
        plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontWeight: {
        regular: 300,
        medium: 500,
        high: 700,
        veryhigh: 800
      }
    },
  },
  plugins: [],
}

