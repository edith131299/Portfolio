/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(255, 255, 255, 0.25)",
        primary: "#edf2f8",
        secondary: "#313bac",
        "black-color": "#030303",
        "lightGray-color": "#e4e4e4",
        "gray-color": "#6b7688",
        "brown-color": "#46364a",
        "white-color": "#ffffff",
      },
      boxShadow: {
        shadow: "0px ,0px 20px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        headerBg: "url('./Assets/bgIMG.png')",
      },
      fontFamily: {
        sans: [
          '"DM Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
