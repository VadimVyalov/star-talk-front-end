import type { Config } from "tailwindcss";
import { SCREENS } from './public/const/screens';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
        bree: ['var(--font-bree)'],
      },
    },
    screens: SCREENS,
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
