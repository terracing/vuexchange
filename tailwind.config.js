module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#F3C614",
        "text": "#353535",
        "secondary": "#6E6E6E"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
