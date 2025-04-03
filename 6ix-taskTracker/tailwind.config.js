/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Dark blue-gray
        secondary: "#2563EB", // Bright blue
        accent: "#FBBF24", // Vibrant yellow
        danger: "#DC2626", // Bright red
        success: "#16A34A", // Bright green
        background: "#F8FAFC", // Very light gray
        textPrimary: "#1F2937", // Dark gray
        textSecondary: "#4B5563", // Medium gray
      },
    },
  },
  plugins: [require("daisyui")],
};
