/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080d27",
        foreground: "var(--foreground)",
        "card-1": "#182354",
        "card-2": "#1f2d6d",
        "button": "#182864",
        "font-yellow": "#c2e37d",
        "font-blue": "#2ef2ff",
      },
    },
  },
  plugins: [],
};
