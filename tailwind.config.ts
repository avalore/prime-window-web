import type { Config } from "tailwindcss";

const withOpacity = (variableName: string) => `rgb(var(${variableName}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: withOpacity("--color-bg"),
        surface: withOpacity("--color-surface"),
        text: withOpacity("--color-text"),
        muted: withOpacity("--color-muted"),
        accent: withOpacity("--color-accent"),
        amber: withOpacity("--color-amber"),
        danger: withOpacity("--color-danger"),
        border: withOpacity("--color-border"),
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "calc(var(--radius-lg) + 0.25rem)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
      },
      spacing: {
        18: "var(--space-18)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      keyframes: {
        breath: {
          "0%, 100%": { opacity: "0.68", transform: "scale(1)" },
          "50%": { opacity: "0.94", transform: "scale(1.035)" },
        },
      },
      animation: {
        breath: "breath 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
