// src/styles/theme.ts

/**
 * Alternative color palette (Green-Black Theme)
 * Sleek, modern, tech-inspired.
 */
export const colors = {
  // Core Palette
  background: "#191717ff", // Deep black background
  primary: "#E5E5E5", // Light gray for main text (softer than pure white)
  secondary: "#A3A3A3", // Medium gray for secondary text
  tertiary: "#737373", // Darker gray for placeholders

  // Accent Palette (Green)
  accent: {
    DEFAULT: "#22C55E", // Green-500 vibrant accent
    dark: "#16A34A", // Green-600 for hover/active
    light: "#4ADE80", // Green-400 for highlights
    extralight: "#BBF7D0", // Green-200 for subtle backgrounds
  },

  // UI Elements
  ui: {
    border: "rgba(34, 197, 94, 0.3)", // Green @ 30% opacity for borders
    borderHover: "rgba(34, 197, 94, 0.5)", // Green @ 50% opacity for hover
    panel: "rgba(20, 20, 20, 0.9)", // Almost black, slightly transparent panel
    panelHover: "rgba(34, 197, 94, 0.1)", // Soft green glow on hover
  },
};

export default colors;
