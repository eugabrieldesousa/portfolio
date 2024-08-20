/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Move para a largura total
        },
      },
      animation: { "infinite-scroll": "infinite-scroll linear infinite" },
    },
  },
  plugins: [],
};
