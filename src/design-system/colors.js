/**
 * Dark AI SaaS Design System — Color Tokens
 *
 * Single source of truth for all dark design system colors.
 * Import this wherever you need raw JS color values.
 */

export const DS_COLORS = {
  // === Backgrounds ===
  bg: {
    primary:   '#050B12',
    secondary: '#0B1623',
    card:      '#0F172A',
    divider:   '#111827',
    input:     '#0B1623',
  },

  // === Neon Accent ===
  neon: {
    teal:      '#00F5D4',
    secondary: '#00E0C6',
    hover:     '#00C2AA',
    cyan:      '#00E6FF',
  },

  // === Text Hierarchy ===
  text: {
    primary:   '#FFFFFF',
    secondary: '#D1D5DB',
    body:      '#9CA3AF',
    muted:     '#6B7280',
    accent:    '#00F5D4',  // Highlighted keyword text
  },

  // === Borders ===
  border: {
    card:    'rgba(0, 245, 212, 0.15)',
    input:   '#1F2937',
    focus:   '#00F5D4',
    section: 'rgba(255, 255, 255, 0.05)',
  },

  // === Button specific ===
  button: {
    primaryFrom:   '#00F5D4',
    primaryTo:     '#00C2AA',
    primaryText:   '#0B1623',
    outlineBorder: '#00F5D4',
    outlineText:   '#00F5D4',
    disabled:      '#1F2937',
    disabledText:  '#6B7280',
  },

  // === Icon Colors ===
  icon: {
    default: '#00F5D4',
    muted:   '#6B7280',
    hover:   '#00E6FF',
  },
}

/** CSS variable names for the dark design system */
export const DS_VARS = {
  bgPrimary:      'var(--ds-bg-primary)',
  bgSecondary:    'var(--ds-bg-secondary)',
  bgCard:         'var(--ds-bg-card)',
  bgInput:        'var(--ds-bg-input)',
  neonTeal:       'var(--ds-neon-teal)',
  neonSec:        'var(--ds-neon-sec)',
  neonHover:      'var(--ds-neon-hover)',
  accentCyan:     'var(--ds-accent-cyan)',
  textPrimary:    'var(--ds-text-primary)',
  textSub:        'var(--ds-text-sub)',
  textBody:       'var(--ds-text-body)',
  textMuted:      'var(--ds-text-muted)',
  borderCard:     'var(--ds-border-card)',
  borderInput:    'var(--ds-border-input)',
  borderFocus:    'var(--ds-border-focus)',
  borderSec:      'var(--ds-border-sec)',
  shadowNeon:     'var(--ds-shadow-neon)',
  shadowNeonLg:   'var(--ds-shadow-neon-lg)',
  shadowBtn:      'var(--ds-shadow-btn)',
  shadowCard:     'var(--ds-shadow-card)',
  shadowCardNeon: 'var(--ds-shadow-card-neon)',
  gradientBg:     'var(--ds-gradient-bg)',
  gradientHero:   'var(--ds-gradient-hero-glow)',
  gradientBtn:    'var(--ds-gradient-btn)',
}

/** Tailwind class names for the dark design system */
export const DS_CLASSES = {
  // Backgrounds
  surface:     'dark-surface',
  bgPrimary:   'ds-bg-primary',
  bgSecondary: 'ds-bg-secondary',
  bgCard:      'ds-bg-card',

  // Glow effects
  glowNeon:     'glow-neon',
  glowNeonLg:   'glow-neon-lg',
  glowBtn:      'glow-btn',
  glowCard:     'glow-card',
  glowCardNeon: 'glow-card-neon',

  // Text
  neonText:       'neon-text',
  neonTextShadow: 'neon-text-shadow',

  // Borders
  neonBorder:       'neon-border',
  neonBorderActive: 'neon-border-active',

  // Hero overlay
  heroGlow: 'hero-glow',

  // Buttons
  btnBase:     'dark-btn',
  btnSm:       'dark-btn-sm',
  btnMd:       'dark-btn-md',
  btnLg:       'dark-btn-lg',
  btnPrimary:  'dark-btn-primary',
  btnOutline:  'dark-btn-outline',
  btnGhost:    'dark-btn-ghost',
  btnCyan:     'dark-btn-cyan',
  btnDisabled: 'dark-btn-disabled',

  // Cards
  card:       'dark-card',
  cardFlat:   'dark-card-flat',
  cardHeader: 'dark-card-header',
  cardBody:   'dark-card-body',
  cardFooter: 'dark-card-footer',

  // Inputs
  input:      'dark-input',
  inputError: 'dark-input-error',
  label:      'dark-label',
  helper:     'dark-helper',
  error:      'dark-error',

  // Misc
  badge:   'dark-badge',
  divider: 'dark-divider',
  navbar:  'dark-navbar',
  navLink: 'dark-nav-link',
}

export default DS_COLORS
