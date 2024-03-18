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
        kumbh: ["var(--font-kumbh)", "sans-serif"],
        rozha: ["var(--font-rozha)", "sans-serif"],
      },
      colors: {
        yellow: {
          light: "#FFF9E9",
        },
        purple: {
          normal: "#B76EC7",
          light: "#7C4B87",
          dark: "#2A135A",
        },
        danger: {
          light: "#fee2e2",
          dark: "#991b1b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
