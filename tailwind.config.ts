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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: "var(--mint)",
        darkGray: "var(--dark-gray)",
        darkRed: "var(--dark-red)",
        mediumRed: "var(--medium-red)",
        lightRed: "var(--light-red)",
      },
    },
  },
  plugins: [],
};
export default config;
