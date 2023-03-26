/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ff0000",
          200: "#ff5a36",
          300: "#ffc993",
        },
        accent: {
          100: "#00FF7F",
          200: "#00971f",
        },
        text: {
          100: "#FFF",
          200: "#E0E0E0",
        },
        bg: {
          100: "#1E1E1E",
          200: "#2d2d2d",
          300: "#454545",
        },
      },
    },
  },
  plugins: [],
};
