import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    fontFamily: {
      RobotoCondensed: ["var(--font-robotocondensed)"],
    },
    extend: {},
  },
  plugins: [nextui()],
} satisfies Config;