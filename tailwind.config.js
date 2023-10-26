/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'
      ]
      },
      colors: {
        'primary': '#1B2232',
        'secondary': '#EC5854',
        'greeyyy': '#eaeaea'
      }
    },
  },
  plugins: [],
}

