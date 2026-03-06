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
    label: 'Abstract Submission Deadline',
    date: 'To be announced',
    status: 'upcoming',
  },
  {
    id: 'd2',
    label: 'Full Paper Submission Deadline',
    date: 'To be announced',
    status: 'upcoming',
  },
  {
    id: 'd3',
    label: 'Notification of Acceptance',
    date: 'To be announced',
    status: 'upcoming',
  },
  {
    id: 'd4',
    label: 'Camera-Ready Paper Submission',
    date: 'To be announced',
    status: 'upcoming',
  },
  {
    id: 'd5',
    label: 'Early Bird Registration Deadline',
    date: 'To be announced',
    status: 'upcoming',
  },
  {
    id: 'd6',
    label: 'Regular Registration Deadline',
    date: 'To be announced',
    status: 'upcoming',
  },
  {
    id: 'd7',
    label: 'Conference Days',
    date: 'To be announced',
    status: 'upcoming',
  },
]

/** Registration fee table — Category | Early Bird | Regular | On Spot */
export const REGISTRATION_FEE = [
  { id: 'rf1', category: 'Faculty / Professional (IEI Member)', earlyBird: '₹ 1,500', regular: '₹ 2,000', onSpot: '₹ 2,500' },
  { id: 'rf2', category: 'Faculty / Professional (Non-Member)', earlyBird: '₹ 2,000', regular: '₹ 2,500', onSpot: '₹ 3,000' },
  { id: 'rf3', category: 'ITM Students',                        earlyBird: '₹ 500',   regular: '₹ 700',   onSpot: '₹ 1,000' },
  { id: 'rf4', category: 'External Students / Candidates',      earlyBird: '₹ 1,000', regular: '₹ 1,200', onSpot: '₹ 1,500' },
]
