/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',    
    'src/components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        darkBg: "#0f172a",
        lightBg: "#f8fafc",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};




