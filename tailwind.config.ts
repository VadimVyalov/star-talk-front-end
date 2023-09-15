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
      sm: "420px",
      md: "768px",
      lg: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: {
        50: "#26262B",
      },
    },
  },
  plugins: [],
};
export default config;
