/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/flowers-8763039.jpg')",
      },
    },
  },
  plugins: [],
};
