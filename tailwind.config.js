/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      colors: {
        text: "#473525E5",
        text2: " #000000A6",
        btn2: "#FFA500",
        lightText: "#FFF",
        hoverText: "#1B4242",
        bRadius: "10px",
        bBColor: "#3A2818",
      },
    },
  },
  plugins: [],
};
