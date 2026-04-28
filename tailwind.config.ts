import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black:  '#0A0A0A',
        white:  '#F5F5F0',
        yellow: '#FFE500',
        gray:   '#C8C8C0',
        mid:    '#3A3A3A',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-instrument)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
