/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        bluegradient:
          "linear-gradient(322.69deg, #285A9F 15.37%, #C0DAFE 120.52%)",
        orangegradient: "",
        offwhitegradient:
          "linear-gradient(322.69deg, #285A9F 15.37%, #C0DAFE 120.52%)",
      },
      colors: {
        secondary: {
          light: "#FFFFFF",
          DEFAULT: "#F9F9F9",
          dark: "#EAF0F3",
        },
        primary: {
          light: "",
          DEFAULT: "",
          dark: "",
        },
        primaryFont: {
          light: "#9E9E9E",
          DEFAULT: "#767576",
          dark: "#212121",
        },
        secondaryFont: {
          light: "",
          DEFAULT: "",
          dark: "",
        },
        gradientPairs: {
          blueStart: "#285A9F",
          blueEnd: "#C0DAFE",
          orangeStart: "#F58124",
          orangeEnd: "#FFC266",
        },
        utils: {},
      },
    },
  },
};
