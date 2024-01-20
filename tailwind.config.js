/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#020617",
        dark: "#020617",
        secondary: "#64748b",
        accent: "#1f4d7e"
      },
      screens: {
        "mn": "500",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

