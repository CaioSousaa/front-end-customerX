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
        maxWidth: "1620px",
        maxWidthForm: "1318.6px",
        maxWidthMainHome: "1920",
        inputHome: "430px",
        contacts: "500px",
      },
      height: {
        mainColorSpace: "951px",
        maxHeigthForm: "710px",
        maxHeigthMainHome: "766px",
      },
      colors: {
        bg: "#935CF2",
        rigthMain: "#000C34",
        form: "#050A20",
        border: "#18181B",
      },
      borderWidth: {
        "0.1": "0.1px",
        "0.5": "0.5px",
      },
      padding: {
        15: "62px",
      },
    },
  },
  plugins: [],
} satisfies Config;
