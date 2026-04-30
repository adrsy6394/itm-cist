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
    id: "ks1",
    name: "Prof. A. K. Nayak",
    designation: "Distinguished Professor",
    role: "Keynote Speaker",
    affiliation: "IIT Delhi",
    topic: "AI and the Future of Research Paradigms",
  },
  {
    id: "ks2",
    name: "Dr. Sunanda Raina",
    designation: "Chief Scientist",
    role: "Keynote Speaker",
    affiliation: "CSIR — National Physical Laboratory",
    topic: "Nanotechnology: Bridging Science and Industry",
  },
  {
    id: "ks3",
    name: "Prof. M. V. Kartikeyan",
    designation: "Professor",
    role: "Keynote Speaker",
    affiliation: "IIT Roorkee",
    topic: "Advances in High-Power Microwave Devices",
  },
];

export const INVITED_SPEAKERS = [
  {
    id: 'is1',
    name: 'Prof. Ruchir Gupta',
    designation: 'Professor',
    affiliation: 'Dept. of CSE, IIT BHU, Varanasi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Ruchir Gupta.png'
  },
  {
    id: 'is2',
    name: 'Prof. B.P. Singh',
    designation: 'Professor',
    affiliation: 'Dept. of ECE, NSUT, New Delhi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. B.P. Singh.png'
  },
  {
    id: 'is3',
    name: 'Dr. Manoj Singh',
    designation: 'Professor',
    affiliation: 'Dept. of CSE, BHU, Varanasi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Manoj Singh.png'
  },
  {
    id: 'is4',
    name: 'Dr. Manoj Kumar Shukla',
    designation: 'Director, REC Kannauj',
    affiliation: 'Former Pro VC, HBTU Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Manoj Kumar Shukla.png'
  },
  {
    id: 'is5',
    name: 'Dr. Gaurav Baranwal',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of Computer Science, BHU, Varanasi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Gaurav Baranwal.png'
  },
  {
    id: 'is6',
    name: 'Dr. Rajeev Jindal',
    designation: 'Professor of Practice',
    affiliation: 'Dept. of Sustainable Energy Eng., IIT Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Rajeev Jindal.png'
  },
  {
    id: 'is7',
    name: 'Prof. Ashutosh Kumar Singh',
    designation: 'Assoc. Professor & Head',
    affiliation: 'Dept. of Electronics Eng., IIIT Allahabad',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Ashutosh Kumar Singh.png'
  },
  {
    id: 'is8',
    name: 'Prof. U. S. Tiwari',
    designation: 'Professor',
    affiliation: 'Dept. of IT, IIIT Allahabad',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. U. S. Tiwari.png'
  },
  {
    id: 'is9',
    name: 'Dr. Maira Singh',
    designation: 'ESG & Sustainability Advocate',
    affiliation: 'IIT Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr.Maira Singh.png'
  },
  {
    id: 'is10',
    name: 'Prof. Neeraj Kumar Singh',
    designation: 'Professor',
    affiliation: 'School of Business Management, CSJMU, Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Neeraj Kumar Singh.png'
  },
  {
    id: 'is11',
    name: 'Prof. Shekhar Verma',
    designation: 'Professor',
    affiliation: 'Dept. of IT, IIIT Allahabad',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Shekhar Verma.png'
  },
  {
    id: 'is12',
    name: 'Prof. Rakesh Kumar',
    designation: 'Professor & Head',
    affiliation: 'Dept. of CSE, MMMUT, Gorakhpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Rakesh Kumar.png'
  },
  {
    id: 'is13',
    name: 'Dr. Rahul Mishra',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of CSE, IIT Patna',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Rahul Mishra.png'
  },
  {
    id: 'is14',
    name: 'Dr. Manoj Kumar Mishra',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of CSE, BHU, Varanasi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Manoj Kumar Mishra.png'
  },
  {
    id: 'is15',
    name: 'Dr. Murad Ali',
    designation: 'Professor',
    affiliation: 'Dept. of Business Management, VBSPU, Jaunpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr.Murad Ali.png'
  },
  {
    id: 'is16',
    name: 'Prof. Ram Chandra Singh Chauhan',
    designation: 'Associate Professor',
    affiliation: 'Dept. of Electronics Eng., IET, Lucknow',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Ram Chandra Singh  Chauhan.png'
  },
  {
    id: 'is17',
    name: 'Dr. P. K. Mishra',
    designation: 'Sr. Director',
    affiliation: 'CIDC, New Delhi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. P. K. Mishra.png'
  },
  {
    id: 'is18',
    name: 'Dr. Tameshwar Nath',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of Mechatronics & Automation, IIIT Bhagalpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Tameshwar Nath.png'
  },
  {
    id: 'is19',
    name: 'Prof. U. N. Roy',
    designation: 'Professor',
    affiliation: 'Rural Development Dept., NITTTR, Chandigarh',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. U. N. Roy.png'
  },
  {
    id: 'is20',
    name: 'Er. M. W. Beg',
    designation: 'Chief Plant Manager (Retd.)',
    affiliation: 'Indian Oil Corporation Limited',
    role: 'Invited Speaker',
    imageSrc: '/speker/Er. M. W. Beg.png'
  },
  {
    id: 'is21',
    name: 'Dr. Vinay Singh',
    designation: 'Associate Professor',
    affiliation: 'Dept. of Management Studies, IIITM, Gwalior',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr.Vinay Singh.png'
  },
  {
    id: 'is22',
    name: 'Prof. Sanjay Medhavi',
    designation: 'Associate Professor',
    affiliation: 'Dept. of Management, Lucknow University',
    role: 'Invited Speaker',
    imageSrc: '/speker/prof.Sanjay Medhavi .png'
  },
  {
    id: 'is23',
    name: 'Dr. Syed Shahid Majhar',
    designation: 'Head & Assoc. Professor',
    affiliation: 'Dept. of Commerce, Integral University, Lucknow',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Syed Shahid Majhar.png'
  },
  {
    id: 'is24',
    name: 'Dr. Geetika Tandon Kapoor',
    designation: 'Professor',
    affiliation: 'Dept. of Commerce, Lucknow University',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Geetika Tandon Kapoor.png'
  },
  {
    id: 'is25',
    name: 'Dr. Jyoti Bhargava',
    designation: 'Professor',
    affiliation: 'Dept. of Commerce, Lucknow University',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Jyoti Bhargava.png'
  },
  {
    id: 'is26',
    name: 'Dr. Smriti Ojha',
    designation: 'Professor',
    affiliation: 'Dept. of Pharmacy, MMMUT, Gorakhpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr.Smriti Ojha.png'
  },
  {
    id: 'is27',
    name: 'Dr. Ajay Kumar Sharma',
    designation: 'Professor',
    affiliation: 'Dept. of Pharmacy, GSVM Medical College, Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Ajay Kumar Sharma.png'
  },
  {
    id: 'is28',
    name: 'Dr. Meena Singh',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of EEE, BIT, Mesra',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr.Meena Singh.png'
  },
  {
    id: 'is29',
    name: 'Dr. Ashutosh Kumar',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of Neurosurgery, SGPGIMS, Lucknow',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Ashutosh Kumar.png'
  },
  {
    id: 'is30',
    name: 'Dr. Deepti Tripathi',
    designation: 'Consultant',
    affiliation: 'Dept. of Lab Medicine, Medanta Hospital, Lucknow',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Deepti Tripathi.png'
  },
  {
    id: 'is31',
    name: 'Dr. Jyotsna Dwivedi Mishra',
    designation: 'DNB OBS & Gynaecologist',
    affiliation: 'Swastik Hospital Mohaddipur, Gorakhpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Jyotsna Dwivedi Mishra.png'
  },
  {
    id: 'is32',
    name: 'Dr. Monika Dixit',
    designation: 'Biochemist',
    affiliation: 'Rama Medical College, Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Monika Dixit.png'
  },
  {
    id: 'is33',
    name: 'Dr. Ranjan Dixit',
    designation: 'Head of Department',
    affiliation: 'Dept. of Physiology, Rama Medical College, Kanpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr Ranjan Dixit.png'
  },
  {
    id: 'is34',
    name: 'Dr. Divya Mehendru',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of Mathematics, BIT Mesra',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Divya Mehendru.png'
  },
  {
    id: 'is35',
    name: 'Dr. Sarita Pandey',
    designation: 'Chairwomen & CS',
    affiliation: 'Sarita Pandey and Associates, Ranchi',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. Sarita Pandey.png'
  },
  {
    id: 'is36',
    name: 'Prof. Kuldeep Sahay',
    designation: 'Director, REC Basti',
    affiliation: 'Dept. of Electrical Eng., IET, Lucknow',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof.Kuldeep Sahay.png'
  },
  {
    id: 'is37',
    name: 'Dr. D. S. Singh',
    designation: 'Professor & Head',
    affiliation: 'Dept. of ITCA, MMMUT, Gorakhpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Dr. D. S. Singh.png'
  },
  {
    id: 'is38',
    name: 'Prof. Vijay Kumar Dwivedi',
    designation: 'Prof. & Dean Int. Affairs',
    affiliation: 'MMMUT, Gorakhpur',
    role: 'Invited Speaker',
    imageSrc: '/speker/Prof. Vijay Kumar Dwivedi.png'
  },
]
