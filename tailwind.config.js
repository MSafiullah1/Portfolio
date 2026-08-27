/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Single source of truth. Values come from the CSS custom properties
      // in globals.css, so light/dark is one token re-map rather than a
      // `dark:` variant on every element.
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          2: 'rgb(var(--ink-2) / <alpha-value>)',
        },
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: {
          DEFAULT: 'rgb(var(--line) / <alpha-value>)',
          strong: 'rgb(var(--line-strong) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
          fg: 'rgb(var(--accent-fg) / <alpha-value>)',
        },
        signal: 'rgb(var(--signal) / <alpha-value>)',
        honour: {
          DEFAULT: 'rgb(var(--honour) / <alpha-value>)',
          tint: 'rgb(var(--honour-tint) / <alpha-value>)',
        },
        success: 'rgb(var(--success) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Fluid type scale — no breakpoint jumps between 320px and 1440px.
      fontSize: {
        'display-xl': ['clamp(3rem, 2rem + 5.2vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.15rem, 1.6rem + 2.6vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.65rem, 1.4rem + 1.1vw, 2.25rem)', { lineHeight: '1.16', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(1.2rem, 1.12rem + 0.4vw, 1.45rem)', { lineHeight: '1.28', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      maxWidth: {
        content: '68rem',
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
    },
  },
  plugins: [],
};
