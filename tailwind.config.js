/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
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
      },
      width: {
        main: "1319px",
      },
    },
  },
  plugins: [],
};
