/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-light)',
        },
        // Accent colors
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          light: 'var(--color-accent-light)',
        },
        // Text colors
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          inverse: 'var(--color-text-inverse)',
        },
        // Background colors
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          dark: 'var(--color-bg-dark)',
        },
        // Border colors
        border: {
          DEFAULT: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
        },
        // Status colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['var(--font-size-hero)', { lineHeight: 'var(--line-height-hero)' }],
        'h1': ['var(--font-size-h1)', { lineHeight: 'var(--line-height-h1)' }],
        'h2': ['var(--font-size-h2)', { lineHeight: 'var(--line-height-h2)' }],
        'h4': ['var(--font-size-h4)', { lineHeight: 'var(--line-height-h4)' }],
        'lead': ['var(--font-size-lead)', { lineHeight: 'var(--line-height-lead)' }],
        'body': ['var(--font-size-body)', { lineHeight: 'var(--line-height-body)' }],
        'secondary': ['var(--font-size-secondary)', { lineHeight: 'var(--line-height-secondary)' }],
        'caption': ['var(--font-size-caption)', { lineHeight: 'var(--line-height-caption)' }],
        'kpi': ['var(--font-size-kpi)', { lineHeight: 'var(--line-height-kpi)' }],
      },
      spacing: {
        'section': 'var(--spacing-section)',
        'container': 'var(--spacing-container)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)',
      },
      boxShadow: {
        'header': 'var(--shadow-header)',
        'glass': 'var(--shadow-glass)',
      },
      backdropBlur: {
        'glass': 'var(--backdrop-blur-glass)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-decor': 'var(--gradient-decor)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

