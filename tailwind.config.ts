import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — aligned to design_handoff README Design Tokens
        orange: {
          DEFAULT: '#FF6B35', hover: '#E55A2A', dark: '#E55A2A', deep: '#E55A2A',
          light: '#ff8c5a',   // gradient light stop (--orange-2)
          lighter: '#FF9A5A', // logo gradient stop (--orange-3)
        },
        violet: { DEFAULT: '#6C63FF' },
        teal:   { DEFAULT: '#00D4AA', ink: '#00b894' },
        gold:   '#FFC83D',
        ink:    '#11121a',
        warm:   '#11121a',  // legacy alias name; value aligned to README "Ink"
        muted:  '#9898b8',
        border: 'rgba(255,107,53,0.20)',
        bg: {
          DEFAULT: '#ffffff',
          card: 'rgba(255,255,255,0.60)',
          warm: '#fbfaf8',
          dark: '#11121a',
          panel1: '#13141d',
          panel2: '#1c1d2b',
        },
      },
      fontFamily: {
        // Single font family — Plus Jakarta Sans everywhere.
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
