import { colors } from "./src/styles/theme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Expose the theme colors to Tailwind utility classes
        background: colors.background,
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        accent: colors.accent,
        ui: colors.ui,
      },
      borderColor: {
        // Ensure border colors can be used directly, e.g., `border-ui-border`
        ...colors.ui,
      },
      backgroundColor: {
        // Ensure background colors can be used directly, e.g., `bg-ui-panel`
        ...colors.ui,
      },
      boxShadow: {
        // Custom shadow using our accent color for a consistent glow effect
        accent: `0 0 20px ${colors.accent.DEFAULT}80`, // 80 is hex for 50% opacity
      },
    },
  },
  plugins: [],
};
