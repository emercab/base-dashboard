/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  ssafelist: [
    {
      pattern: /bg-\[#.+\]/, // Incluye cualquier clase de bg-[#color]
    },
    {
      pattern: /text-\[#.+\]/, // Incluye cualquier clase de text-[#color]
    },
  ],
  plugins: [],
}

