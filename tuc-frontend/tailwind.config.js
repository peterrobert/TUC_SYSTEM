/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          white: "#FFFFFF",
          muted: "#F4F4F8",
          hover: "#F9FAFB",
        },
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

        text: {
          purple: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",
        background: "#FAFAFC",
        border: "#E5E7EB",
        divider: "#ECECF2",
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
        card: "12px",
        ui: "8px",
      },

      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 8px 16px rgba(0, 0, 0, 0.08)",
        floating: "0 8px 24px rgba(0, 0, 0, 0.12)",
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
      },

      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};

export default config;
