/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary-green":"#4E9F3D",
        
      },
      backgroundColor:{
        "primary-green":"#4E9F3D",
        "primary-hover":"#59cc41",
        "card" : "##fffaf0",
      },
      aspectRatio : {
        "grid" :"auto 425 / 252"
      },
      padding:{
        "web":"10px 50px",
        "mobile":"10px 20px"
      }

    },
  },
  plugins: [],
}

