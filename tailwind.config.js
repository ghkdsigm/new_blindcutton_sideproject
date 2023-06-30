/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      lineHeight: {
        superzero: "0",
      },
      fontFamily: {
        'notosans': ['Noto Sans KR', 'sans-serif']
      },
      fontSize: {
        "4xs": ".25rem",
        "2xs": ".5rem",
      },
    },
  },
  plugins: [],
};
