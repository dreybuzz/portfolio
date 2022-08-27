/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/*.html", "./src/*.js"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
        "3xl": "1920px",
        "4xl": "2520px",
        'tall': { 'raw': '(min-height: 768px)' },
      },
      spacing: {
        big: "48rem"
      },
      fontSize: {
        "2xs": ".5rem"
      }
    },
    fontFamily: {
      sen: ["Sen", "sans-serif"]
    }
  },
  plugins: [],
}
