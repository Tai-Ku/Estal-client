/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      agbalumo: ["Agbalumo"],
      dance: ["Dancing Script"],
    },
    extend: {
      backgroundColor: {
        "primary-50": "#EDEFF6",
        "primary-100": "#DBDFEC",
        "primary-200": "#B7BFD9",
        "primary-300": "#92A0C7",
        "primary-400": "#6E80B4",
        "primary-500": "#4A60A1",
        "primary-600": "#3B4D81",
        "primary-700": "#2C3A61",
        "primary-800": "#1E2640",
        "primary-900": "#0F1320",
      },
      colors: {
        "primary-50": "#EDEFF6",
        "primary-100": "#DBDFEC",
        "primary-200": "#B7BFD9",
        "primary-300": "#92A0C7",
        "primary-400": "#6E80B4",
        "primary-500": "#4A60A1",
        "primary-600": "#3B4D81",
        "primary-700": "#2C3A61",
        "primary-800": "#1E2640",
        "primary-900": "#0F1320",
        "overlay-70": "rgba(0,0,0,0.7)",
        "overlay-30": "rgba(0,0,0,0.3)",
        "overlay-50": "rgba(0,0,0,0.5)",
      },
      width: {
        main: "1319px",
      },
    },
  },
  plugins: [],
};
