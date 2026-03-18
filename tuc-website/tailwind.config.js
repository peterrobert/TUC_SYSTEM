/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "#F8F9FB",
        "light-gray": "#E6E8EC",
        "dark-gray": "#1E1E1E",
        "medium-gray": "#5F6368",
        "deep-blue": "#1F3C88",
        "dark-cyan": "#2F7D63",
        "cool-gray": "#D1D5DB",
        "bright-blue": "#274DB2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-crimson)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
