/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: '#2acb35',
        primary: '#0060ac',
      }
    },
  },
  plugins: [],
}