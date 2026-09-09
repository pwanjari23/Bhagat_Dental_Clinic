import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#F0F7F5",
          100: "#DCEEE9",
          200: "#B8DDD3",
          300: "#86C4B4",
          400: "#4FA691",
          500: "#2B8772",
          600: "#0F6B62",
          700: "#0D5C54",
          800: "#0B4D46",
          900: "#073530",
          950: "#031F1C",
        },
        ivory: {
          DEFAULT: "#FBFBF9",
          50: "#FFFFFF",
          100: "#FCFCFA",
          200: "#F7F7F4",
          300: "#EFEFEA",
        },
        sage: {
          50: "#F7FAF8",
          100: "#F3F7F5",
          200: "#E4EDE9",
          300: "#CDDDD6",
        },
        champagne: {
          DEFAULT: "#C5A880",
          light: "#E8D8C3",
          dark: "#A3865E",
          gold: "#D4AF37",
        },
        charcoal: {
          DEFAULT: "#162220",
          muted: "#526360",
          light: "#829490",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(11, 77, 70, 0.07)",
        elevated: "0 20px 40px -15px rgba(11, 77, 70, 0.12)",
        glow: "0 0 25px rgba(197, 168, 128, 0.25)",
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
