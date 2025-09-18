import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        darkBg: "#0f172a",
        lightBg: "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
