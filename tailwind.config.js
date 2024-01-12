/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow:{
        logoGlow:[
          "0 0px 10px rgb(222, 226, 230, 0.2)",
          "0 0px 25px rgb(114, 9, 183, 0.7)"
        ],
        glow: [
          "0 0px 20px rgba(247, 37, 125, 0.79)",
          "0 0px 65px rgba(247, 37, 125, 0.79)"
        ]
      }
    },
  },
  plugins: [],
}
