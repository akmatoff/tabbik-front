/** @type {import('tailwindcss').Config} */
import daysiui from 'daisyui'

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
        textLight: "var(--text-color-light)",
        textSecondary: "var(--text-secondary-color)",
        disabled: "var(--disabled-color)"
      }
    },
    borderRadius: {
      primary: "var(--primary-radius)",
      secondary: "var(--secondary-radius)",
      full: "100%"
    }
  },
  plugins: [
    daysiui
  ],
}

