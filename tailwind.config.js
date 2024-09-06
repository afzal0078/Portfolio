/** @type {import('tailwindcss').Config} */

const { animate } = require('framer-motion')
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors:{
        // dark: "#1b1b1b",
        // light: "#f5f5f5",
        dark: "#16123F",
        light: "#BEBEBE",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        textGreen: "#64ffda",
        Fresh: "#CAE4DB",
        Vermillion: "#333A56",
        Sunshine: "#52658f",
        Clean: "#E8E8E8",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        
    circularLight:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #BEBEBE 5px, #BEBEBE 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #16123F 8px, #16123F 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #BEBEBE 5px, #BEBEBE 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #16123F 8px, #16123F 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #BEBEBE 5px, #BEBEBE 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #16123F 6px, #16123F 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #BEBEBE 5px, #BEBEBE 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #16123F 4px, #16123F 40px)",
      }
  },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}

