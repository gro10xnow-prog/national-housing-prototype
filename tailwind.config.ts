import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nhfil: {
          blue: {
            DEFAULT: "#009fe1",
            50: "#eef9fd",
            100: "#d6f0fc",
            200: "#b3e3f8",
            300: "#80d0f4",
            400: "#44b9ee",
            500: "#009fe1",
            600: "#0180bd",
            700: "#026698",
            800: "#06577f",
            900: "#0a496b",
          },
          navy: {
            DEFAULT: "#0e2a47",
            light: "#1a3b5f",
            dark: "#081b30",
            deep: "#040d18",
          },
          islamic: {
            green: "#0d7a53",
            emerald: "#059669",
            light: "#ecfdf5",
            gold: "#b48c36",
          },
          accent: {
            gold: "#d4a017",
            amber: "#f59e0b",
          },
          gray: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        "card": "0 2px 8px -1px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)",
        "card-hover": "0 14px 28px -4px rgba(0,159,225,0.12), 0 10px 10px -5px rgba(14,42,71,0.06)",
        "elevated": "0 20px 40px -15px rgba(14,42,71,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
