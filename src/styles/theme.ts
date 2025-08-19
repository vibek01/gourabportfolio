// src/styles/theme.ts

/**
 * Defines the centralized color palette for the entire application.
 * Using a dedicated file ensures consistency and ease of maintenance.
 */
export const colors = {
  // Core Palette
  background: "#000000", // Pure black for the main background
  primary: "#FFFFFF", // White for primary text and highlights
  secondary: "#E5E7EB", // A light gray (gray-200) for secondary text
  tertiary: "#9CA3AF", // A medium gray (gray-400) for tertiary/placeholder text

  // Accent Palette
  accent: {
    DEFAULT: "#EF4444", // The main red (red-500)
    dark: "#DC2626", // A darker red (red-600) for hovers/active states
    light: "#F87171", // A lighter red (red-400) for highlights
    extralight: "#FECACA", // An extra light red (red-200) for subtle backgrounds
  },

  // UI Elements
  ui: {
    border: "rgba(239, 68, 68, 0.3)", // Accent color with 30% opacity for borders
    borderHover: "rgba(239, 68, 68, 0.5)", // Accent color with 50% opacity for hover
    panel: "rgba(17, 7, 7, 0.5)", // A very dark, slightly red panel background
    panelHover: "rgba(39, 9, 9, 0.1)", // A subtle red glow for panel hovers
  },
};

export default colors;
