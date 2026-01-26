import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#ffffff',
        'bg-subtle': '#fafafa',
        'bg-muted': '#f4f4f5',
        'text-primary': '#18181b',
        'text-muted': '#71717a',
        'accent': '#0D9373',
        'accent-light': '#10b981',
        'az-invariant': '#3b82f6',
        'az-effect': '#f59e0b',
        'az-composition': '#8b5cf6',
        'az-frontier': '#ef4444',
        'az-warstory': '#10b981',
        'az-alternative': '#6b7280',
        'az-inversion': '#4f46e5',
        'az-constraint': '#8b5cf6',
        'az-gradient': '#f43f5e',
        'az-horizon': '#06b6d4',
        'az-violation': '#f97316',
        'az-tradeoff': '#f59e0b',
        'az-analogy': '#d946ef',
        'az-expertise': '#10b981',
        'az-minimal': '#84cc16',
        'az-inflection': '#eab308',

        // Semantic text colors
        'text-secondary': '#3f3f46',

        // Border color
        'border': '#e4e4e7',

        // Warm accent colors
        'warm-cream': '#fefcf3',
        'accent-warm': '#c49052',

        // Success colors (green)
        'success': '#6b9b7a',
        'success-light': '#dcfce7',

        // Warning colors (amber)
        'warning': '#c49052',
        'warning-light': '#fef3c7',

        // Error colors (red)
        'error': '#c97065',
        'error-light': '#fee2e2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [typography],
}

export default config
