/**
 * src/data/speakers.js
 *
 * Static fallback data for conference speakers.
 * Replace with actual speaker data or load from Google Sheet / speakersSlice.
 *
 * Shape:
 * {
 *   id: string,
 *   name: string,
 *   designation: string,
 *   affiliation: string,
 *   role?: string,       // e.g. "Keynote Speaker" | "Invited Speaker"
 *   topic?: string,      // optional talk title
 *   imageSrc?: string,
 * }
 */

export const KEYNOTE_SPEAKERS = [
  {
    id: 'ks1',
    name: 'Prof. A. K. Nayak',
    designation: 'Distinguished Professor',
    role: 'Keynote Speaker',
    affiliation: 'IIT Delhi',
    topic: 'AI and the Future of Research Paradigms',
  },
  {
    id: 'ks2',
    name: 'Dr. Sunanda Raina',
    designation: 'Chief Scientist',
    role: 'Keynote Speaker',
    affiliation: 'CSIR — National Physical Laboratory',
    topic: 'Nanotechnology: Bridging Science and Industry',
  },
  {
    id: 'ks3',
    name: 'Prof. M. V. Kartikeyan',
    designation: 'Professor',
    role: 'Keynote Speaker',
    affiliation: 'IIT Roorkee',
    topic: 'Advances in High-Power Microwave Devices',
  },
]

export const INVITED_SPEAKERS = [
  { id: 'is1', name: 'Dr. Ravi Kumar', designation: 'Associate Professor', role: 'Invited Speaker', affiliation: 'MNIT Jaipur' },
  { id: 'is2', name: 'Dr. Leena Saxena', designation: 'Sr. Scientist', role: 'Invited Speaker', affiliation: 'BARC, Mumbai' },
  { id: 'is3', name: 'Dr. Akhil Patel', designation: 'Associate Professor', role: 'Invited Speaker', affiliation: 'SVNIT Surat' },
  { id: 'is4', name: 'Dr. C. M. Rana', designation: 'Professor', role: 'Invited Speaker', affiliation: 'UPES Dehradun' },
  { id: 'is5', name: 'Dr. Neha Joshi', designation: 'Assistant Professor', role: 'Invited Speaker', affiliation: 'Symbiosis International University' },
  { id: 'is6', name: 'Dr. Vikram Bhatt', designation: 'Professor', role: 'Invited Speaker', affiliation: 'MIT-ADT University' },
]
