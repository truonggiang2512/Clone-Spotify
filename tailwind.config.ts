import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#FFFFFF",
        card: "#181818",
        "card-foreground": "#FFFFFF",
        popover: "#282828",
        "popover-foreground": "#FFFFFF",
        primary: "#1DB954",
        "primary-foreground": "#000000",
        secondary: "#535353",
        "secondary-foreground": "#FFFFFF",
        muted: "#282828",
        "muted-foreground": "#A7A7A7",
        accent: "#1DB954",
        "accent-foreground": "#000000",
        destructive: "#FF4D4F",
        "destructive-foreground": "#FFFFFF",
        border: "#282828",
        input: "#535353",
        ring: "#1DB954",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
