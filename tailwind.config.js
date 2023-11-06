/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        borderLine: "var(--border-line)",
        brightYellow: "var(--bright-yellow)",
        lightText: "var(--light-gray)",
        darkText: "var(--dark-gray)",
        darkShade: "var(--dark-shade)",
        offWhite: "var(--off-white)"
      },
      maxWidth: {
        container: "73.75rem"
      }
    }
  },
  plugins: []
};
