import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue300: "#D0D6F9",
        blue900: "#0B0D17",
        purple: "#9747FF",
       
      },
      fontFamily: {
        barlowReg: ["barlow-regular", "sans-serif"],
        barlowBold: ["barlow-bold", "sans-serif"],
        barlowLight: ["barlow-light", "sans-serif"],
        barlowCondensedReg: ["barlow-condensed-regular", "sans-serif"],
        barlowCondensedBold: ["barlow-condensed-bold", "sans-serif"],
        barlowCondensedLight: ["barlow-condensed-light", "sans-serif"],
        bellefairReg: ["bellefair-regular", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
