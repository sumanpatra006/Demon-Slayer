/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'anime' : ['anime','sanf-serif']
      },
      colors : {
        yellow: {
          100: '#8E983F',
          300: '#EDFF66'
        },
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#4FB7DD'
        },

      }
    },
  },
  plugins: [],
}