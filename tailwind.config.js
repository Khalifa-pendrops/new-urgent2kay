/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#401A6D",
        secondary: "#C4EAEA",
        success: "#52C054",
        warning: "#E8BF31",
        danger: "#E23232",
        neutral: "#959596",
        brand: {
          light: "#E0F2FE",
          DEFAULT: "#3B82F6",
          dark: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
};
