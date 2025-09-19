/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     primary: "#3b82f6",
    //     darkBg: "#0f172a",
    //     lightBg: "#f8fafc",
    //   },
    // },
  },
  plugins: [],
};
