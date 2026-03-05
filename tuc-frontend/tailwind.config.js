/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: {
        50: "#F5F3FF",
        100: "#EDE9FE",
        200: "#DDD6FE",
        300: "#C4B5FD",
        400: "#A78BFA",
        500: "#8B5CF6",
        600: "#7C3AED",
        700: "#6D28D9",
        800: "#5B21B6",
        900: "#4C1D95",
        950: "#2E1065",
      },
      gray: {
        50: "#FAFAFC",
        100: "#F4F4F8",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      surface: {
        white: "#FFFFFF",
        muted: "#F4F4F8",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
    },
    spacing: {
      128: "32rem",
    },
    borderRadius: {
      xl: "12px",
      "2xl": "16px",
    },
    boxShadow: {
      soft: "0 4px 12px rgba(0, 0, 0, 0.05)",
      "soft-hover":
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
      glow: "0 0 20px rgba(124, 58, 237, 0.15)",
    },
  },

  plugins: [],
};

export default config;
