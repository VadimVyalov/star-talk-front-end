import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      mobile: "280px",
      tablet: "591px",
      desktop: "1025px",
    },
    colors: {
      transparent: "transparent",
      black: {
        50: "#26262B",
      },
      white: {
        50: "#FFF",
      },
      accent: {
        50: "#46BB59",
      },
      grey: {
        50: "#E5E4D8",
      },
    },
  },
  plugins: [],
};
export default config;
