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
        // Base brand colors for reference
        "brand-white": "#EAEBED",
        "brand-blue": "#007FFF",
        "brand-sapphire": "#031A30",

        // Theme colors using CSS variables
        background: {
          DEFAULT: "var(--background)",
        },
        text: {
          DEFAULT: "var(--text)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
        "source-code": ["var(--font-source-code-pro)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
