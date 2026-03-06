/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Mobile-first: minimum 320px
    screens: {
      xs:  '320px',
      sm:  '480px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',   // px-4 mobile
        md: '1.5rem',      // px-6 tablet
        lg: '2rem',        // px-8 desktop
      },
      screens: {
        xl: '1280px',      // max-width: 1280px
      },
    },
    extend: {
      // ── Academic Color Palette (from Design PRD) ──────────────────────────
      colors: {
        // Brand primaries
        navy:  { DEFAULT: '#0F172A', light: '#1E293B', dark: '#060B14' },
        'pro-blue': { DEFAULT: '#1E3A8A', light: '#2952B3', dark: '#162B6B' },
        teal:  { DEFAULT: '#0D9488', light: '#14B8A8', dark: '#0A7D73' },

        // ── Dark AI SaaS Color System ──────────────────────────────────────
        // Backgrounds
        primaryDark:   '#050B12',
        secondaryDark: '#0B1623',
        cardDark:      '#0F172A',
        dividerDark:   '#111827',

        // Neon Accent — Teal / Cyan
        neonTeal:   '#00F5D4',
        neonHover:  '#00C2AA',
        neonSec:    '#00E0C6',
        accentCyan: '#00E6FF',

        // Text hierarchy
        textPrimary:   '#FFFFFF',
        textSecondary: '#D1D5DB',
        textBody:      '#9CA3AF',
        textMuted:     '#6B7280',

        // UI surfaces
        inputDark:     '#0B1623',
        borderDark:    '#1F2937',
        disabledDark:  '#1F2937',

        // Semantic aliases (CSS-var driven for ShadCN compatibility)
        border:      'hsl(var(--border))',
        input:       'hsl(var(--input))',
        ring:        'hsl(var(--ring))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Heading scale (from Design PRD)
        'h1-mobile': ['2rem',    { lineHeight: '1.2', fontWeight: '700' }],
        'h1-desktop':['2.5rem',  { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['1.5rem',  { lineHeight: '1.3', fontWeight: '600' }],
        'h2-desktop':['2rem',    { lineHeight: '1.3', fontWeight: '600' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-desktop':['1.5rem',  { lineHeight: '1.4', fontWeight: '600' }],
        // Body copy
        'body-sm':   ['0.875rem', { lineHeight: '1.6' }],
        'body-base': ['1rem',     { lineHeight: '1.6' }],
        'body-lg':   ['1.125rem', { lineHeight: '1.6' }],
      },
      lineHeight: {
        reading: '1.6',
      },

      // ── Border Radius (ShadCN CSS var) ────────────────────────────────────
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // ── Section Spacing ───────────────────────────────────────────────────
      spacing: {
        section:    '2.5rem',   // py-10 mobile
        'section-lg': '4rem',  // py-16 desktop
      },

      // ── Subtle Shadow System ──────────────────────────────────────────────
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.10), 0 2px 4px -1px rgb(0 0 0 / 0.08)',
        header: '0 1px 4px 0 rgb(0 0 0 / 0.12)',
        // Dark AI SaaS glow effects
        'neon-glow':   '0 0 20px rgba(0,245,212,0.4)',
        'neon-glow-lg':'0 0 40px rgba(0,245,212,0.35)',
        'btn-glow':    '0 0 15px rgba(0,245,212,0.6)',
        'card-dark':   '0 8px 20px rgba(0,0,0,0.6)',
        'card-neon':   '0 8px 20px rgba(0,0,0,0.6), 0 0 20px rgba(0,245,212,0.12)',
      },
    },
  },
  plugins: [],
}
