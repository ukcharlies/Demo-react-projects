/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wave: "wave 1.5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(6px)" },
        },
      },
      fontFamily: {
        garamond: ['"EB Garamond"', "serif"],
      },
      colors: {
        beige: "#fef7f0",
        "dark-brown": "#4b2e2e",
        "orange-500": "#ff7d3a",
        "red-import": "#BD463C",
        dun: "#D3BF9E",
        "brown-import": "692F24",
      },
    },
  },
  plugins: [],
};
