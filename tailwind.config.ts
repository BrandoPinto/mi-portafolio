import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0B",
          soft: "#0D0D0F",
        },
        surface: {
          DEFAULT: "#131316",
          elevated: "#1B1B1F",
          border: "#232327",
        },
        accent: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          dim: "#2563EB",
          warm: "#93C5FD",
        },
        ink: {
          DEFAULT: "#F5F5F0",
          secondary: "#A2A2AC",
          muted: "#6B6B74",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 40px -8px rgba(59,130,246,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -16px rgba(0,0,0,0.5)",
      },
      keyframes: {
        bar1: {
          "0%, 100%": { height: "30%" },
          "50%": { height: "90%" },
        },
        bar2: {
          "0%, 100%": { height: "70%" },
          "50%": { height: "20%" },
        },
        bar3: {
          "0%, 100%": { height: "45%" },
          "50%": { height: "100%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        bar1: "bar1 0.9s ease-in-out infinite",
        bar2: "bar2 1.1s ease-in-out infinite",
        bar3: "bar3 0.75s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
