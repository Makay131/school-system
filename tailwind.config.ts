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
        "schoolify-sky": "#c3ebfa",
        "schoolify-sky-light": "#edf9fd",
        "schoolify-purple": "#cfceff",
        "schoolify-purple-light": "#f1f0ff",
        "schoolify-yellow": "#fae27c",
        "schoolify-yellow-light": "#fefce8",
      },
    },
  },
  plugins: [],
};
export default config;
