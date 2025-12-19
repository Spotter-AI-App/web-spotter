/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
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
        'deep-green': '#156332',
        
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
      },
      fontFamily: {
        sans: [
          "Inter Tight",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
