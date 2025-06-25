/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",       // Sky Blue
        secondary: "#fbbf24",     // Amber/Yellow
        light: "#f5f5f5",         // Soft white
        background: "#0f172a",    // Deep dark background (nav/bg)
        card: "#1e293b",          // Darker gray for cards/borders
      },
      backdropBlur: {
        md: '12px',
      },
      boxShadow: {
        md: '0 4px 6px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
