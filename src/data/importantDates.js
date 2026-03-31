/**
 * src/data/importantDates.js
 *
 * Static fallback for important dates.
 * Replace with Google Sheet data when connected.
 *
 * status: 'upcoming' | 'expired' | 'today'
 */
export const IMPORTANT_DATES = [
  {
    id: 'd1',
    label: 'Submission Deadline',
    date: '12 April 2026',
    status: 'upcoming',
  },
  {
    id: 'd2',
    label: 'Acceptance Notification',
    date: '18 April 2026',
    status: 'upcoming',
  },
  {
    id: 'd3',
    label: 'Registration',
    date: '24 – 28 April 2026',
    status: 'upcoming',
  },
]

/** Registration fee table — Category | Fee */
export const REGISTRATION_FEE = [
  { id: 'rf1', category: 'ITM Students', fee: '₹ 0 (Free)' },
  { id: 'rf2', category: 'External Candidates', fee: '₹ 1,500' },
  { id: 'rf3', category: 'IEI Members (External)', fee: '₹ 1,200 (20% Discount)' },
]

