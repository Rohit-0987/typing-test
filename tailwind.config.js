/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-480px": { max: "480px" },
        "max-770px": { max: "770px" },
        "max-1300px": { max: "1300px" },
      },
    },
  },
  plugins: [],
};
