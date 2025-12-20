// Shared colors used across the app and Tailwind config
export const colors = {
  // Brand Greens
  primary: {
    DEFAULT: '#00E676',
    dark: '#00B248',
  },
  emerald: '#10B981',
  
  // Logo Greens
  logo: {
    mid: '#3BBD46',
    lime: '#8AE769',
    bright: '#5BD450',
  },
  deepGreen: '#156332',
  
  // Neutrals (Dark Backgrounds)
  background: {
    DEFAULT: '#0B0A0B',
    elevated: '#110B0F',
  },
  surface: '#141216',
  
  // Text
  text: {
    primary: '#FFFFFF',
    secondary: '#CFCFD2',
  },
};

// Export individual colors for easy access
export const PRIMARY = colors.primary.DEFAULT;
export const PRIMARY_DARK = colors.primary.dark;
export const LOGO_MID = colors.logo.mid;
export const LOGO_LIME = colors.logo.lime;
export const LOGO_BRIGHT = colors.logo.bright;
