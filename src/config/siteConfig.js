/**
 * siteConfig.js — Single source of truth for all site configuration.
 * Merges static conference metadata with env-driven external links.
 * Import this file in any public page instead of Redux selectors.
 */

// ── Conference Metadata ────────────────────────────────────────────────────────
export const SITE_META = {
  conferenceFullName:  'Conference on Innovations in Science & Technology',
  conferenceShortName: 'CIST 2026',
  organizedBy:         'Institute of Technology & Management',
  supportedBy:         'Institution of Engineers (India) — IEI',
  year:                '2026',
  date:                '30th April,1-2 May 2026',
  venue:               'Institute of Technology & Management, GIDA, Gorakhpur-273209 (U.P)',
  email:               'itm@itm.ac.in',
  phone:               '+91 8299637860',
}

// ── Hero Content ───────────────────────────────────────────────────────────────
export const HERO = {
  title:    'Conference on Innovations in Science & Technology',
  tagline:  'CIST 2026 — Advancing Research, Bridging Knowledge',
  ctaLabel: 'Register Now',
}

// ── External Links (from .env) ─────────────────────────────────────────────────
export const LINKS = {
  // Registration Google Form URLs
  registrationFormFaculty:  import.meta.env.VITE_REGISTRATION_FORM_FACULTY  || '',
  registrationFormITM:      import.meta.env.VITE_REGISTRATION_FORM_ITM      || '',
  registrationFormExternal: import.meta.env.VITE_REGISTRATION_FORM_EXTERNAL || '',

  // Feedback Google Form URLs (Day 1, 2, 3)
  feedbackFormDay1: import.meta.env.VITE_FEEDBACK_FORM_DAY1 || '',
  feedbackFormDay2: import.meta.env.VITE_FEEDBACK_FORM_DAY2 || '',
  feedbackFormDay3: import.meta.env.VITE_FEEDBACK_FORM_DAY3 || '',

  // Data sheets
  scheduleSheetUrl:       import.meta.env.VITE_SCHEDULE_SHEET_URL        || '',
  importantDatesSheetUrl: import.meta.env.VITE_IMPORTANT_DATES_SHEET_URL || '',

  // Brochure — place your PDF as /public/brochure.pdf, no env var needed
  brochureUrl: '/brochure.pdf',
  paperSubmissionUrl: import.meta.env.VITE_PAPER_SUBMISSION_URL || '',
}

// ── Section Visibility (static — was previously admin-toggled via Redux) ────────
export const SECTIONS = {
  showAboutPreview:    true,
  showDatesPreview:    true,
  showCallForPaper:    true,
  showSpeakers:        true,
  showRegistrationCta: true,
}

/**
 * Navigation menu structure
 * Used by Header component to render nav links.
 */
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About ITM',        path: '/about/itm' },
      { label: 'About IEI',        path: '/about/iei' },
      { label: 'About Conference', path: '/about/conference' },
    ],
  },
  {
    label: 'Committee',
    path: '/committee',
    children: [
      { label: 'Advisory Committee',              path: '/committee/advisory' },
      { label: 'Convener',                       path: '/committee/convener' },
      { label: 'Organizing Committee',            path: '/committee/organizing' },
      { label: 'Technical Committee',             path: '/committee/technical' },
      { label: 'Media Handling Committee', path: '/committee/social-media' },
      { label: 'Registration Committee',          path: '/committee/registration-committee' },
      { label: 'Hospitality Committee',           path: '/committee/hospitality' },
    ],
  },
  {
    label: 'Feedback',
    path: '/feedback',
    children: [
      { label: 'Day 1', path: '/feedback/day1' },
      { label: 'Day 2', path: '/feedback/day2' },
      { label: 'Day 3', path: '/feedback/day3' },
    ],
  },
  {
    label: 'Registration',
    path: '/registration',
    children: [
      { label: 'Faculty',             path: '/registration/faculty' },
      { label: 'ITM Students',        path: '/registration/itm-students' },
      { label: 'External Candidates', path: '/registration/external' },
    ],
  },
  { label: 'Registration Fee',       path: '/registration-fee' },
  { label: 'Important Dates',        path: '/important-dates' },
  { label: 'Call for Paper',         path: '/call-for-paper' },
  { label: 'List of Speakers',       path: '/speakers' },
  { label: 'Schedule',               path: '/schedule' },
  { label: 'Proceedings',            path: '/proceedings' },
  { label: 'AISSDT-2026',            path: '/aissdt-2026' },
  { label: 'Conclave',               path: '/conclave' },
  { label: 'Brochure',               path: '/brochure' },
  { label: 'Contact',                path: '/contact' },
  { label: 'Online Paper Submission', path: '/paper-submission' },
]

/**
 * Condensed top-level navigation (visible in desktop header nav bar)
 */
export const PRIMARY_NAV = [
  { label: 'Home',           path: '/' },
  { label: 'About',          path: '/about/itm' },
  { label: 'Committee',      path: '/committee/advisory' },
  { label: 'Registration',   path: '/registration' },
  { label: 'Call for Paper', path: '/call-for-paper' },
  { label: 'Schedule',       path: '/schedule' },
  { label: 'Brochure',       path: '/brochure' },
  { label: 'Contact',        path: '/contact' },
]
