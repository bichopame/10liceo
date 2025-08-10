import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        azul50:"E9F7FF",
        azul100:"CEECFF",
        azul200:"A7E0FF",
        azul300:"6BD0FF",
        azul400:"26B2FF",
        azul500:"0087FF",
        azul600:"005DFF",
        azul700:"0042FF",
        azul800:"0037E6",
        azul900:"0036B3",
        azulins:"00194F",
      },
    },
  },
  plugins: [],
};
export default config;
