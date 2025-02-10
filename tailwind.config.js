/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton','sans-serif'],
        courier: ['Courier Prime', 'monospace'],
        josefin: ['Josefin Sans','sans-serif'],
      },
      colors: {
        primary: "#A6643D",
        oliveGreen: "#6C7246",
        oliveGreenLight: "#B0B78C",
        sandGold: "#D4A373",
        darkBrown: "#512200",
        rustyRed: "#7F3C1B",
      },
    },
  },
  plugins: [],
};
