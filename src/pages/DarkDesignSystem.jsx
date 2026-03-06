import { useState } from 'react'
import DarkButton from '@/components/ui/DarkButton'
import { DarkCard, DarkCardHeader, DarkCardBody, DarkCardFooter } from '@/components/ui/DarkCard'
import DarkInput from '@/components/ui/DarkInput'
import {
  Zap, Star, Shield, Bell, Mail, Lock, Search, ArrowRight,
  Cpu, Globe, ChevronRight, Sparkles
} from 'lucide-react'

/* ── Sample data ────────────────────────────────────────────── */

const PALETTE = [
  { name: 'Primary Background',   hex: '#050B12', var: '--ds-bg-primary',    role: 'bg' },
  { name: 'Secondary Background', hex: '#0B1623', var: '--ds-bg-secondary',  role: 'bg' },
  { name: 'Card Background',      hex: '#0F172A', var: '--ds-bg-card',       role: 'bg' },
  { name: 'Section Divider',      hex: '#111827', var: '--ds-bg-divider',    role: 'bg' },
  { name: 'Neon Teal',            hex: '#00F5D4', var: '--ds-neon-teal',     role: 'accent' },
  { name: 'Secondary Teal',       hex: '#00E0C6', var: '--ds-neon-sec',      role: 'accent' },
  { name: 'Hover Teal',           hex: '#00C2AA', var: '--ds-neon-hover',    role: 'accent' },
  { name: 'Accent Cyan',          hex: '#00E6FF', var: '--ds-accent-cyan',   role: 'accent' },
  { name: 'Text Primary',         hex: '#FFFFFF', var: '--ds-text-primary',  role: 'text' },
  { name: 'Text Secondary',       hex: '#D1D5DB', var: '--ds-text-sub',      role: 'text' },
  { name: 'Text Body',            hex: '#9CA3AF', var: '--ds-text-body',     role: 'text' },
  { name: 'Text Muted',           hex: '#6B7280', var: '--ds-text-muted',    role: 'text' },
  { name: 'Input Border',         hex: '#1F2937', var: '--ds-border-input',  role: 'border' },
  { name: 'Disabled Background',  hex: '#1F2937', var: '--ds-bg-card',       role: 'border' },
]

const FEATURES = [
  { icon: <Cpu size={20} />, title: 'AI Processing', desc: 'Ultra-fast inference at the edge.' },
  { icon: <Shield size={20} />, title: 'Zero-Trust Security', desc: 'End-to-end encrypted pipelines.' },
  { icon: <Globe size={20} />, title: 'Global Reach', desc: 'Low-latency across 100+ regions.' },
]

/* ── Page ──────────────────────────────────────────────────── */
function DarkDesignSystem() {
  const [inputVal, setInputVal] = useState('')
  const [inputErr, setInputErr] = useState('')

  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: 'linear-gradient(180deg, #050B12 0%, #0B1623 100%)' }}
    >
      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section
        className="hero-glow relative py-20 px-4 text-center overflow-hidden"
      >
        {/* Radial glow behind logo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 50% 30%, rgba(0,245,212,0.12), transparent)',
          }}
        />

        <p className="dark-badge mx-auto mb-5 w-fit">
          <Sparkles size={11} />
          Dark AI SaaS Design System
        </p>

        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
          style={{ color: '#FFFFFF' }}
        >
          Built for the{' '}
          <span className="neon-text-shadow">Future</span>
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10"
          style={{ color: '#9CA3AF' }}>
          A complete dark neon-teal design system — buttons, cards, inputs, and
          a navbar with glow effects and 200ms transitions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="dark-btn-primary dark-btn-lg">
            <Zap size={18} />
            Get Started Free
          </button>
          <button className="dark-btn-outline dark-btn-lg">
            View Docs
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">

        {/* ══ COLOR PALETTE ═══════════════════════════════════ */}
        <section>
          <SectionTitle label="01" title="Color Palette" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PALETTE.map((c) => (
              <div key={c.var} className="dark-card p-4 flex flex-col gap-2">
                <div
                  className="w-full h-10 rounded-md border"
                  style={{
                    backgroundColor: c.hex,
                    borderColor: c.role === 'accent'
                      ? 'rgba(0,245,212,0.4)'
                      : 'rgba(255,255,255,0.08)',
                    boxShadow: c.role === 'accent'
                      ? `0 0 12px ${c.hex}55`
                      : undefined,
                  }}
                />
                <p className="text-xs font-semibold" style={{ color: '#D1D5DB' }}>{c.name}</p>
                <p className="text-[10px] font-mono" style={{ color: '#6B7280' }}>{c.hex}</p>
                <p className="text-[10px] font-mono truncate" style={{ color: '#6B7280' }}>{c.var}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ BUTTONS ═════════════════════════════════════════ */}
        <section>
          <SectionTitle label="02" title="Button Variants" />
          <div className="dark-card p-6 sm:p-8">
            <div className="flex flex-wrap gap-4 items-center">
              <button className="dark-btn-primary dark-btn-lg">
                <Zap size={16} /> Primary
              </button>
              <button className="dark-btn-outline dark-btn-lg">
                Outline
              </button>
              <button className="dark-btn-ghost dark-btn-lg">
                Ghost
              </button>
              <button className="dark-btn-cyan dark-btn-lg">
                <Star size={16} /> Cyan
              </button>
              <button className="dark-btn-disabled dark-btn-lg" disabled>
                Disabled
              </button>
            </div>

            {/* Size row */}
            <div className="dark-divider" />
            <p className="dark-label mb-3">Size variants (Primary)</p>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="dark-btn-primary dark-btn-sm">Small</button>
              <button className="dark-btn-primary dark-btn-md">Medium</button>
              <button className="dark-btn-primary dark-btn-lg">Large</button>
            </div>

            {/* React component row */}
            <div className="dark-divider" />
            <p className="dark-label mb-3">Using DarkButton component</p>
            <div className="flex flex-wrap gap-3 items-center">
              <DarkButton variant="primary" size="md">Submit Paper</DarkButton>
              <DarkButton variant="outline" size="md">View Brochure</DarkButton>
              <DarkButton variant="ghost" size="sm">Cancel</DarkButton>
              <DarkButton variant="cyan" size="sm" loading>Loading…</DarkButton>
            </div>
          </div>
        </section>

        {/* ══ CARDS ═══════════════════════════════════════════ */}
        <section>
          <SectionTitle label="03" title="Card Components" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="dark-card">
                <div className="dark-card-header flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,245,212,0.12)', color: '#00F5D4' }}
                  >
                    {f.icon}
                  </span>
                  <h3 className="text-sm font-bold" style={{ color: '#FFFFFF' }}>{f.title}</h3>
                </div>
                <div className="dark-card-body">
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>{f.desc}</p>
                </div>
                <div className="dark-card-footer">
                  <button className="dark-btn-outline dark-btn-sm">
                    Learn more <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Composed DarkCard */}
          <div className="mt-5">
            <DarkCard>
              <DarkCardHeader>
                <h3 className="font-bold" style={{ color: '#FFFFFF' }}>
                  DarkCard Component
                </h3>
                <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>
                  Composed with DarkCardHeader / DarkCardBody / DarkCardFooter
                </p>
              </DarkCardHeader>
              <DarkCardBody>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  This card uses the composable React component API.
                  Hover to see the neon teal glow border animation.
                </p>
              </DarkCardBody>
              <DarkCardFooter>
                <DarkButton variant="primary" size="sm">CTA Button</DarkButton>
                <DarkButton variant="ghost" size="sm">Cancel</DarkButton>
              </DarkCardFooter>
            </DarkCard>
          </div>
        </section>

        {/* ══ INPUTS ══════════════════════════════════════════ */}
        <section>
          <SectionTitle label="04" title="Input Fields" />
          <div className="dark-card p-6 sm:p-8 space-y-5 max-w-lg">

            {/* Default */}
            <div>
              <label className="dark-label">Email address</label>
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: '#6B7280' }}
                />
                <DarkInput
                  type="email"
                  placeholder="you@example.com"
                  className="pl-9"
                  value={inputVal}
                  onChange={e => {
                    setInputVal(e.target.value)
                    setInputErr('')
                  }}
                />
              </div>
              <p className="dark-helper">We'll never share your email.</p>
            </div>

            {/* Password */}
            <div>
              <label className="dark-label">Password</label>
              <div className="relative">
                <Lock
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: '#6B7280' }}
                />
                <DarkInput type="password" placeholder="••••••••" className="pl-9" />
              </div>
            </div>

            {/* Error state */}
            <div>
              <label className="dark-label">Search</label>
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: '#6B7280' }}
                />
                <DarkInput
                  placeholder="Search topics..."
                  className="pl-9"
                  error={inputErr || undefined}
                  onClick={() => setInputErr('Please enter a valid search term')}
                />
              </div>
              {inputErr && <p className="dark-error">{inputErr}</p>}
            </div>

            <DarkButton variant="primary" fullWidth>
              <Zap size={15} /> Submit
            </DarkButton>
          </div>
        </section>

        {/* ══ CSS VARIABLES REFERENCE ══════════════════════════ */}
        <section>
          <SectionTitle label="05" title="CSS Variable Reference" />
          <div className="dark-card overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {['Variable', 'Value', 'Usage'].map(h => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold uppercase tracking-wider"
                      style={{ color: '#6B7280' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['--ds-bg-primary',       '#050B12',                       'Main page background'],
                  ['--ds-bg-secondary',     '#0B1623',                       'Section / input background'],
                  ['--ds-bg-card',          '#0F172A',                       'Card background'],
                  ['--ds-neon-teal',        '#00F5D4',                       'Primary accent / CTA'],
                  ['--ds-neon-hover',       '#00C2AA',                       'Hover state for teal'],
                  ['--ds-accent-cyan',      '#00E6FF',                       'Cyan accent variant'],
                  ['--ds-text-primary',     '#FFFFFF',                       'Headings'],
                  ['--ds-text-sub',         '#D1D5DB',                       'Subheadings'],
                  ['--ds-text-body',        '#9CA3AF',                       'Body text'],
                  ['--ds-text-muted',       '#6B7280',                       'Muted / placeholder'],
                  ['--ds-border-card',      'rgba(0,245,212,0.15)',          'Card border'],
                  ['--ds-border-focus',     '#00F5D4',                       'Input focus ring'],
                  ['--ds-shadow-neon',      '0 0 20px rgba(0,245,212,0.4)', 'Glow shadow'],
                  ['--ds-shadow-btn',       '0 0 15px rgba(0,245,212,0.6)', 'Button glow'],
                  ['--ds-gradient-btn',     '#00F5D4 → #00C2AA',            'Primary button gradient'],
                ].map(([v, val, use]) => (
                  <tr
                    key={v}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-2.5 font-mono" style={{ color: '#00F5D4' }}>{v}</td>
                    <td className="px-4 py-2.5 font-mono" style={{ color: '#9CA3AF' }}>{val}</td>
                    <td className="px-4 py-2.5" style={{ color: '#6B7280' }}>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ══ TAILWIND EXTENSION ═══════════════════════════════ */}
        <section>
          <SectionTitle label="06" title="Tailwind Extension" />
          <div className="dark-card p-6">
            <p className="text-xs font-semibold mb-3" style={{ color: '#6B7280' }}>
              tailwind.config.js · extend.colors
            </p>
            <pre
              className="text-xs leading-6 overflow-x-auto"
              style={{ color: '#00F5D4', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
            >
{`colors: {
  primaryDark:   "#050B12",
  secondaryDark: "#0B1623",
  cardDark:      "#0F172A",
  neonTeal:      "#00F5D4",
  neonHover:     "#00C2AA",
  neonSec:       "#00E0C6",
  accentCyan:    "#00E6FF",
  textPrimary:   "#FFFFFF",
  textSecondary: "#D1D5DB",
  textBody:      "#9CA3AF",
  textMuted:     "#6B7280",
  inputDark:     "#0B1623",
  borderDark:    "#1F2937",
}`}
            </pre>
          </div>
        </section>

        {/* ══ USAGE RULES ═════════════════════════════════════ */}
        <section>
          <SectionTitle label="07" title="Usage Rules" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🎨', rule: 'Dark background globally', note: 'Use dark-surface or ds-bg-primary on root wrappers.' },
              { icon: '✨', rule: 'Neon teal for CTAs only', note: 'Use neonTeal on primary buttons, highlights, and icons only.' },
              { icon: '💫', rule: 'Glow sparingly', note: 'Apply glow-neon/glow-btn only on primary interactive elements.' },
              { icon: '♿', rule: 'High contrast', note: 'Neon #00F5D4 on #050B12 passes WCAG AA contrast requirements.' },
              { icon: '⚡', rule: '200ms transitions', note: 'All hover states use transition-all duration-200 for smoothness.' },
              { icon: '📐', rule: 'Structured spacing', note: 'Keep consistent padding with dark-card-body & site-container.' },
            ].map((r) => (
              <div key={r.rule} className="dark-card p-5">
                <p className="text-2xl mb-2">{r.icon}</p>
                <p className="text-sm font-bold mb-1" style={{ color: '#FFFFFF' }}>{r.rule}</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{r.note}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}

/* ── Section title helper ─────────────────────────────────── */
function SectionTitle({ label, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="dark-badge text-[10px]">{label}</span>
      <h2 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>{title}</h2>
      <div
        className="flex-1 h-px"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />
    </div>
  )
}

export default DarkDesignSystem
