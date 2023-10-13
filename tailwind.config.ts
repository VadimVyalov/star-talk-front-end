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
        montserrat: ['var(--font-montserrat)', { fontFeatureSettings: '"clig" 0 , "liga" 0'}],
        roboto: ['var(--font-roboto)',{ fontFeatureSettings: "'clig' 0 , 'liga' 0"}],
        bree: ['var(--font-bree)',{ fontFeatureSettings: '"clig" 0 , "liga" 0'}],
      },
      content: {
        'check': 'url("/assets/icons/check.svg")',

      },
    },
    screens: {
      d:`${SCREENS.d}px`,
      t:`${SCREENS.t}px`,
      m:`${SCREENS.m}px`,
    },
    colors: {
      transparent: "transparent",
      overlay: "rgba(21, 21, 21, 0.5)",
      mainBg:"#fefbf4",
      black: {
        50: "#26262B",
        30:"#26262B4D",
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
