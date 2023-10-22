import type { Config } from "tailwindcss";
import { SCREENS } from './public/const/screens';
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
   extend: { 
      fontFamily: {
        montserrat: ['var(--font-montserrat)', { fontFeatureSettings: '"clig" 0 , "liga" 0'}],
        roboto: ['var(--font-roboto)',{ fontFeatureSettings: "'clig' 0 , 'liga' 0"}],
        bree: ['var(--font-bree)',{ fontFeatureSettings: '"clig" 0 , "liga" 0'}],
      },

      colors: {
      overlay: "rgba(21, 21, 21, 0.5)",
      mainBg:"#FEFBF4",
      black: {
        50: "#26262B",
        30:"#26262B4D",
      },
      white: {
        50: "#FFF",
      },
      accent: {
        50: "#46BB59",
        30: "#46BB594D",
      },
      grey: {
        50: "#E5E4D8",
        30:'#DFE0E2',
      },
    },

    },
        content: {
        'check': 'url("/assets/icons/check.svg")',
        'star': 'url("/assets/icons/star.svg")',
        'arrow': 'url("/assets/icons/arrow.svg")',
      },
    screens: {
      d:`${SCREENS.d}px`,
      t:`${SCREENS.t}px`,
      m:`${SCREENS.m}px`,
    },
    

  },
  plugins: [],
  
};
export default config;
