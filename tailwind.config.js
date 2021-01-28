module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color1: "#2acfcf",
        color2: "#3b3054",
        color3: "#f46262",
        color4: "#bfbfbf",
        color5: "#9e9aa7",
        color6: "#35323e",
        color7: "#232127",
      },
      backgroundImage: {
        mainIcon: "url('./images/illustration-working.svg')",
        shortenMobile: "url('./images/bg-shorten-mobile.svg')",
        shortenDesktop: "url('./images/bg-shorten-desktop.svg')",
        boostMobile: "url('./images/bg-boost-mobile.svg')",
        boostDesktop: "url('./images/bg-boost-desktop.svg')",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
