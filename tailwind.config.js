/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondarygrey-300": "var(--secondarygrey-300)",
      },
    },
  },
  plugins: [],
};
