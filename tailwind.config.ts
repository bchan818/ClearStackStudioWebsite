import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slateInk: "#07111f",
        cyanGlow: "#22d3ee",
        emeraldLift: "#34d399"
      },
      boxShadow: {
        glow: "0 0 80px rgba(34, 211, 238, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
