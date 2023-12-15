/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        dark: "var(--color-primary-dark)",
        background: "var(--color-bg)",
        card: "var(--color-card)",
        cardBackground: "var(--color-card-bg)",
      },
    },
  },
  plugins: [],
};
