/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: 'true',
      padding: '16px',
    },
    extend: {

      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 3s steps(30) infinite alternate, blink .7s infinite"
      },

      colors: {
        primary: '#0f766e',
        secondary: '#64748b',
        dark:'#020617',
      },
      screens: {
        '2xl': ' 1320px',
      },
    },
  },
  plugins: [],
}

