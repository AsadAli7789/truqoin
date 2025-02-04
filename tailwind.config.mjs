/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(  220deg,#000000 -116.86%,#a80601 -34.46%,#ee5a02 82.16%,  #ddb28f 136.67%)",
        "custom-gradient1":
          "linear-gradient( 90deg,  #000000 -116.86%, #a80601 -34.46%, #ee5a02 82.16%, #ddb28f 136.67%)",
      },
      screens: {
        xsm: "375px", // Extra small breakpoint
        xsm1: "425px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
