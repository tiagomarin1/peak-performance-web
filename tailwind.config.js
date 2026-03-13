/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        peak: {
          DEFAULT: "rgb(30 79 163 / <alpha-value>)",
          hover: "rgb(23 62 130 / <alpha-value>)",
          light: "rgb(42 95 204 / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
