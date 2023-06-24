/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        "P_color_Tomato": 'hsl(4, 100%, 67%)',
        "N_color_Dark_S_Gray": 'hsl(234, 29%, 20%)',
        "N_color_Charcoal_Gray": 'hsl(235, 18%, 26%)',
        "N_color_Grey": 'hsl(231, 7%, 60%)',
        "N_color_White": 'hsl(0, 0%, 100%)',
      },


    },
  },
  plugins: [],
}

