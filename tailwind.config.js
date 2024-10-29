/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    color:{
      "primary": '#818cf8',
      "accent-pink": "rgb(249 168 212)",
      "accent-purble": "#6a00f4",
      "accent-rose": "#e500a4",
      "text-dark-1": "",
      "text-dark-2": "",
      "text-light-1": "",
      "text-light-2": "",
      "bg-dark-1": "",
      "bg-dark-2": "",
      "bg-dark-3": "",
      "bg-light-1": "",
      "bg-light-2": "",
      "bg-light-3": "",

    },
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
