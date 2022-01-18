module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: "Overpass",
      },
      backgroundImage: {
        main: "url('../public/images/bg-main.jpeg')",
        intro: "url('../public/images/bg-intro.jpeg')",
      },
      screens: {
        t: "768px",
        d: "1024px",
        dl: "1260px",
      },
    },
  },
  plugins: [],
};
