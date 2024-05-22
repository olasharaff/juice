/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      colors: {
        bodyColor: "#AD88C6",
        lightText: "#FFF",
        hoverText: "#1B4242",
      },
    },
  },
  plugins: [],
};
