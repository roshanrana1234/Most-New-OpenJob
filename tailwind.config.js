/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#4D3951",
        btncolor: "#009688",
        tcolor: "#4D3951",
        bgcolor: "#F5F5F5",

      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
