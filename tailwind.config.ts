import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        oneai: {
          bg: "#050816",
          panel: "#0B1020",
          navy: "#0B0F2B",
          blue: "#2563EB",
          cyan: "#00D6F5",
          gold: "#F5B841",
          muted: "#94A3B8"
        }
      },
      boxShadow: {
        glow: "0 0 48px rgba(37, 99, 235, 0.25)",
        gold: "0 0 44px rgba(245, 184, 65, 0.22)"
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.26), transparent 30%)",
        "radial-gold": "radial-gradient(circle at 80% 10%, rgba(245,184,65,0.22), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
