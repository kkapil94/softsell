import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c0ff",
          300: "#66a0ff",
          400: "#3380ff",
          500: "#0060ff",
          600: "#004dcc",
          700: "#003a99",
          800: "#002666",
          900: "#001333",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
