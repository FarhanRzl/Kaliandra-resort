import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#00703C",
        secondary: "#4CAF7D",
        action: "#F9C74F",
      },
      fontSize: {
        h1: "32px",
        h2: "22px",
        "h2-2": "18px",
        "body-bold": "20px",
        body: "16px",
        caption: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
