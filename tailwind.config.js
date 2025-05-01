/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding:{
        DEFAULT:"15px",
        sm: "30px",
        lg: "60px",
        xl: "75px",
        "2xl": "96px",
      }
    },
    fontFamily: {
      'Dm-sans': ['Plus Jakarta Sans', 'sans-serif'],
      'marn-sans': ['Manrope', 'sans-serif'],

    },
    extend: {
      colors: {
        'S-black': '#020407',
      

      },
    },
  },
  plugins: [],
}

