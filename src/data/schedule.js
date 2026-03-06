/**
 * src/data/schedule.js
 *
 * Static fallback schedule — replaces with Google Sheet data when connected.
 *
 * day: '1' | '2' | '3'
 * type: 'session' | 'keynote' | 'break' | 'ceremony'
 */
export const SCHEDULE_SESSIONS = [
  // Day 1
  { id: 's1', day: '1', time: '09:00 AM', endTime: '09:30 AM', title: 'Registration & Welcome Kit', speaker: '', venue: 'Main Hall', type: 'ceremony' },
  { id: 's2', day: '1', time: '09:30 AM', endTime: '10:30 AM', title: 'Inaugural Ceremony', speaker: 'Chief Guest & Dignitaries', venue: 'Auditorium', type: 'ceremony' },
  { id: 's3', day: '1', time: '10:30 AM', endTime: '11:30 AM', title: 'Keynote Address — AI and the Future of Research Paradigms', speaker: 'Prof. A. K. Nayak, IIT Delhi', venue: 'Auditorium', type: 'keynote' },
  { id: 's4', day: '1', time: '11:30 AM', endTime: '11:45 AM', title: 'Tea / Coffee Break', speaker: '', venue: 'Foyer', type: 'break' },
  { id: 's5', day: '1', time: '11:45 AM', endTime: '01:15 PM', title: 'Technical Session 1 — Computer Science & Engineering', speaker: 'Multiple Presenters', venue: 'Seminar Hall A', type: 'session' },
  { id: 's6', day: '1', time: '01:15 PM', endTime: '02:00 PM', title: 'Lunch Break', speaker: '', venue: 'Dining Hall', type: 'break' },
  { id: 's7', day: '1', time: '02:00 PM', endTime: '03:30 PM', title: 'Technical Session 2 — Electronics & Communication', speaker: 'Multiple Presenters', venue: 'Seminar Hall B', type: 'session' },
  { id: 's8', day: '1', time: '03:30 PM', endTime: '03:45 PM', title: 'Tea Break', speaker: '', venue: 'Foyer', type: 'break' },
  { id: 's9', day: '1', time: '03:45 PM', endTime: '05:00 PM', title: 'Panel Discussion — Emerging Technologies in Academia', speaker: 'Panel Experts', venue: 'Auditorium', type: 'session' },

  // Day 2
  { id: 's10', day: '2', time: '09:30 AM', endTime: '10:30 AM', title: 'Keynote Address — Nanotechnology: Bridging Science and Industry', speaker: 'Dr. Sunanda Raina, CSIR-NPL', venue: 'Auditorium', type: 'keynote' },
  { id: 's11', day: '2', time: '10:30 AM', endTime: '10:45 AM', title: 'Tea / Coffee Break', speaker: '', venue: 'Foyer', type: 'break' },
  { id: 's12', day: '2', time: '10:45 AM', endTime: '12:15 PM', title: 'Technical Session 3 — Mechanical & Civil Engineering', speaker: 'Multiple Presenters', venue: 'Seminar Hall A', type: 'session' },
  { id: 's13', day: '2', time: '12:15 PM', endTime: '01:00 PM', title: 'Lunch Break', speaker: '', venue: 'Dining Hall', type: 'break' },
  { id: 's14', day: '2', time: '01:00 PM', endTime: '02:30 PM', title: 'Technical Session 4 — Physics, Chemistry & Mathematics', speaker: 'Multiple Presenters', venue: 'Seminar Hall B', type: 'session' },
  { id: 's15', day: '2', time: '02:30 PM', endTime: '04:00 PM', title: 'Workshop — Research Paper Writing', speaker: 'Dr. Rajiv Misra, IIT Patna', venue: 'Computer Lab', type: 'session' },
  { id: 's16', day: '2', time: '04:00 PM', endTime: '05:00 PM', title: 'Valedictory & Award Ceremony', speaker: 'HOD & Dean Research', venue: 'Auditorium', type: 'ceremony' },
]

export const SCHEDULE_DAYS = [
  { id: '1', label: 'Day 1' },
  { id: '2', label: 'Day 2' },
]
