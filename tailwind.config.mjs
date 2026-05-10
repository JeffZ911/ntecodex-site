/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Spirit-element-inspired palette (NTE Anima/Spirit aesthetic)
        bg: {
          DEFAULT: "#0b0d1a",
          soft: "#13162a",
          elev: "#1c2040",
        },
        // Indigo / violet for primary surfaces
        primary: {
          50:  "#eef0ff",
          100: "#dde1ff",
          200: "#b8bfff",
          300: "#8a93ff",
          400: "#6b72f4",
          500: "#5a58e8",
          600: "#4a3fce",
          700: "#3d33a8",
          800: "#2f2880",
          900: "#211b5c",
        },
        // Gold for S+ tier / 5★
        gold: {
          DEFAULT: "#f6c544",
          dark: "#c89a1f",
          glow: "#ffe28a",
        },
        // Tier badges
        tier: {
          splus:  "#ff6b9d",
          s:      "#f6c544",
          a:      "#a78bfa",
          b:      "#60a5fa",
          c:      "#8b95a8",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
               '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(74,63,206,0.25), transparent 60%), linear-gradient(180deg, #0b0d1a 0%, #13162a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(74,63,206,0.10), rgba(28,32,64,0.6))',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(106, 113, 244, 0.35)',
        'glow-gold': '0 0 24px rgba(246,197,68,0.45)',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};
