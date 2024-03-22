/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        text: "var(--text-color)",
        textLight: "var(--text-color-light)"
      }
    },
    borderRadius: {
      primary: "var(--primary-radius)",
      secondary: "var(--secondary-radius",
    }
  },
  plugins: [],
}

