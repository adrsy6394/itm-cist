/**
 * siteData.js — Static conference metadata
 * Update this file with actual CIST 2025 conference details.
 */

export const SITE_META = {
  conferenceFullName: 'Conference on Innovation in Science & Technology',
  conferenceShortName: 'CIST 2026',
  organizedBy: 'Institute of Technology & Management',
  supportedBy: 'Institution of Engineers (India) — IEI',
  year: '2026',
  date: '23rd to 25th April, 2026', // e.g. "March 15–16, 2025"   
  venue: 'Institute of Technology & Management, GIDA, Gorakhpur-273001 (U.P)',
  email: 'itm@itm.ac.in', // contact email
  phone: '+91 9876543210', // contact phone
}

/**
 * Navigation menu structure (Design PRD §5.2)
 * Used by Header component to render nav links.
 */
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Conference', path: '/about/conference' },
      { label: 'About IEI',        path: '/about/iei' },
      { label: 'About ITM',        path: '/about/itm' },
    ],
  },
  {
    label: 'Committee',
    path: '/committee',
    children: [
      { label: 'Convener',                      path: '/committee/convener' },
      { label: 'Organizing Committee',           path: '/committee/organizing' },
      { label: 'Technical Committee',            path: '/committee/technical' },
      { label: 'Advisory Committee',             path: '/committee/advisory' },
      { label: 'Social Media Handling Committee', path: '/committee/social-media' },
      { label: 'Hospitality Committee',          path: '/committee/hospitality' },
      { label: 'Registration Committee',         path: '/committee/registration-committee' },
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
  { label: 'Registration Fee',    path: '/registration-fee' },
  { label: 'Important Dates',     path: '/important-dates' },
  { label: 'Call for Paper',      path: '/call-for-paper' },
  { label: 'List of Speakers',    path: '/speakers' },
  { label: 'Schedule',            path: '/schedule' },
  { label: 'Proceedings',         path: '/proceedings' },
  { label: 'AISSDT-2025',         path: '/aissdt-2025' },
  { label: 'Conclave',            path: '/conclave' },
  { label: 'Brochure',            path: '/brochure' },
  { label: 'Contact',             path: '/contact' },
  { label: 'Online Paper Submission', path: '/paper-submission' },
]

/**
 * Condensed top-level navigation (visible in desktop header nav bar)
 * Full nav in mobile drawer
 */
export const PRIMARY_NAV = [
  { label: 'Home',             path: '/' },
  { label: 'About',            path: '/about/conference' },
  { label: 'Committee',        path: '/committee/convener' },
  { label: 'Registration',     path: '/registration' },
  { label: 'Call for Paper',   path: '/call-for-paper' },
  { label: 'Schedule',         path: '/schedule' },
  { label: 'Contact',          path: '/contact' },
]
