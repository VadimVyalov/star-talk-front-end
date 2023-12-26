import type { Config } from "tailwindcss";
import { SCREENS } from "./src/constants/screens";
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
   extend: { 
      fontFamily: {
        montserrat: ['var(--font-montserrat)', { fontFeatureSettings: '"clig" off , "liga" off'},],
        roboto: ['var(--font-roboto)',{ fontFeatureSettings: "'clig' 0 , 'liga' 0"}],
       bree: ['var(--font-bree)', { fontFeatureSettings: '"clig" 0 , "liga" 0' }],
        // montserrat: ['Montserrat , sans-serif', { fontFeatureSettings: '"clig" 0 , "liga" 0'},],
        // roboto: ['"Roboto Slab", serif', { fontFeatureSettings: '"clig" 0 , "liga" 0'},],
        // bree: ['"Bree Serif", serif', { fontFeatureSettings: '"clig" 0 , "liga" 0'},],
      },
fontSize: {
  hero_d: "clamp(2rem, 4.7vw, 5rem)",
  hero_m: "clamp(1.5rem, 6.5vw, 2.5rem)",
      },
      colors: {
      overlay: "rgba(21, 21, 21, 0.5)",
        shadow: {
          link:"rgba(70, 187, 89, 0.25)",
        },
      mainBg:"#FEFBF4",
      black: {
        100:"#26262BFF",
        75:"#26262BBF",
        50:"#26262B80",
        30:"#26262B4D",
        15:"#26262B26",
      },
      white: {
        100: "#FFFFFF",
      },
      accent: {
        100: "#46BB59",
        30: "#46BB594D",
      },
      grey: {
        1: "#E5E4D8",
        2: "#DFE0E2",
        3: "#18181b33",
        4:"#E4E4E4"
        },
      error: {
        100: "#DC0C31"
        },
      gold: "#F9C53A",
      disabled:"#D0D0D0"
    },

    },
   content: {
     'check': 'url("/assets/icons/check.svg")',
     'check-small': 'url("/assets/icons/check-small.svg")',
        'star': 'url("/assets/icons/star.svg")',
        'arrow': 'url("/assets/icons/arrow.svg")',
      },
    screens: {
      dm:`${SCREENS.dm}px`,
      d: `${SCREENS.d}px`,
      tb: `${SCREENS.tb}px`,
      t: `${SCREENS.t}px`,
      m:`${SCREENS.m}px`,
    },
    

  },
  plugins: [],
  
};
export default config;
