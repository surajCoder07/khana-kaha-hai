/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary-green":"#4E9F3D"
      },
      backgroundColor:{
        "primary-green":"#4E9F3D"
      },

    },
  },
  plugins: [],
}

