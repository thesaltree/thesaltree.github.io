/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
        mono: ["var(--font-fira)", "monospace"],
      },
      colors: {
        academic: {
          bg: {
            light: "#FAF8F5",   // Ivory/Bone tile face
            dark: "#0E1112",    // LessWrong warm dark charcoal
          },
          fg: {
            light: "#1A2620",   // Deep charcoal-green
            dark: "#ECF7F2",    // Soft ivory-mint
          },
          border: {
            light: "#E3DBB8",   // Warm tile-edge divider
            dark: "#24282A",    // Clean dark-grey divider
          },
          accent: {
            light: "#A94412",   // LessWrong rusty ochre
            dark: "#F97316",    // Warm amber-orange
          },
          red: {
            light: "#B91C1C",   // Engraved Crimson Red
            dark: "#EF4444",    // Vibrant Crimson Red
          }
        }
      }
    },
  },
  plugins: [],
}