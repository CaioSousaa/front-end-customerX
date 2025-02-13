import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        mainColorSpace: "1380px",
      },
      height: {
        mainColorSpace: "951px",
      },
      colors: {
        bg: "#935CF2",
        rigthMain: "#000C34",
      },
      borderWidth: {
        "0.1": "0.1px",
        "0.5": "0.5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
