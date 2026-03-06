/**
 * src/data/committees.js
 *
 * Static data for all committee members.
 * Shape: { id, name, role, imageSrc? }
 */

// ── Convener (1 member) ────────────────────────────────────────────────────────
export const CONVENER_MEMBERS = [
  { id: 'cv1', name: 'Dr. Ashutosh Gupta', role: 'Convener (CE)', imageSrc: '' },
  
]

// ── Organizing Committee (11 members) ─────────────────────────────────────────
export const ORGANIZING_MEMBERS = [
  { id: 'oc1',  name: 'Dr. Ashutosh Kumar Rao',  role: 'CSE',        imageSrc: '' },
  { id: 'oc2',  name: 'Mr. Vineet Kumar Rai',    role: 'ME',         imageSrc: '' },
  { id: 'oc3',  name: 'Dr. Manoj Kumar Mishra',  role: 'Management', imageSrc: '' },
  { id: 'oc4',  name: 'Dr. A. R. Tripathi',      role: 'ASD',        imageSrc: '' },
  { id: 'oc5',  name: 'Ms. Shalini Singh',       role: 'BCA',        imageSrc: '' },
  { id: 'oc6',  name: 'Ms. Shweta Singh',        role: 'PH',         imageSrc: '' },
  { id: 'oc7',  name: 'Mrs. Deepti Ojha',        role: 'ECE',        imageSrc: '' },
  
  { id: 'oc9',  name: 'Dr. Dhiraj Kumar',        role: 'PH',         imageSrc: '' },
  { id: 'oc10', name: 'Ms. Shreya Chaudhary',    role: 'ECE',        imageSrc: '' },
  { id: 'oc11', name: 'Ms. Swati Singh Yadav',   role: 'Management', imageSrc: '' },
]

// ── Technical Committee (18 members) ──────────────────────────────────────────
export const TECHNICAL_MEMBERS = [
  { id: 'tc1',  name: 'Dr. A. K. Sharma',             role: 'CSE',        imageSrc: '' },
  { id: 'tc2',  name: 'Dr. R. K. Singh',              role: 'ECE',        imageSrc: '' },
  { id: 'tc3',  name: 'Dr. Birendra Kumar Srivastava', role: 'PH',        imageSrc: '' },
  { id: 'tc4',  name: 'Dr. Krishna Kumar',            role: 'CSE',        imageSrc: '' },
  { id: 'tc5',  name: 'Dr. Surendra Kumar Roy',       role: 'CE',         imageSrc: '' },
  { id: 'tc6',  name: 'Dr. Ayushi Priyadarshani',     role: 'ECE',        imageSrc: '' },
  { id: 'tc7',  name: 'Mr. Abhishek Yadav',           role: 'ECE',        imageSrc: '' },
  { id: 'tc8',  name: 'Ms. Nitika Singh',             role: 'CE',         imageSrc: '' },
  { id: 'tc9',  name: 'Mr. Vindhyachal Singh',        role: 'ME',         imageSrc: '' },
  { id: 'tc10', name: 'Mr. Bidyasagar',               role: 'CSE',        imageSrc: '' },
  { id: 'tc11', name: 'Mr. Devendra Mishra',          role: 'CSE',        imageSrc: '' },
  { id: 'tc12', name: 'Ms. Yasha Srivastava',         role: 'BCA',        imageSrc: '' },
  { id: 'tc13', name: 'Ms. Shubhee',                  role: 'CSE',        imageSrc: '' },
  { id: 'tc14', name: 'Mrs. Pratibha Chaudhary',      role: 'Management', imageSrc: '' },
  { id: 'tc15', name: 'Ms. Astha Singh',              role: 'Management', imageSrc: '' },
  { id: 'tc16', name: 'Ms. Vartika Singh',            role: 'Management', imageSrc: '' },
  { id: 'tc17', name: 'Dr. Priyanka Sonkar',          role: 'PH',         imageSrc: '' },
  { id: 'tc18', name: 'Ms. Rajeshwari Chandrakar',    role: 'PH',         imageSrc: '' },
]

// ── Advisory Committee (37 members) ───────────────────────────────────────────
export const ADVISORY_MEMBERS = [
  { id: 'ac1',  name: 'Dr. Rajendra Kumar Pandey',   role: 'IIT BHU',                          imageSrc: '' },
  { id: 'ac2',  name: 'Er. Shivanand Roy',            role: 'FIE, IEI',                         imageSrc: '' },
  { id: 'ac3',  name: 'Dr. Nirmal Das',               role: 'CPDP IEI',                         imageSrc: '' },
  { id: 'ac4',  name: 'Er. J. B. Rai',               role: 'MAA, MMMUT Gorakhpur',             imageSrc: '' },
  { id: 'ac5',  name: 'Dr. Pawan Kumar Mishra',       role: 'Sr. Director, CIDC New Delhi',     imageSrc: '' },
  { id: 'ac6',  name: 'Er. M. W. Beg',               role: 'IEI',                              imageSrc: '' },
  { id: 'ac7',  name: 'Prof. Y. N. Singh',            role: 'IIT Kanpur',                       imageSrc: '' },
  { id: 'ac8',  name: 'Prof. Kumar Vaibhav',          role: 'IIT Kanpur',                       imageSrc: '' },
  { id: 'ac9',  name: 'Prof. S. N. Singh',            role: 'IIT Kanpur',                       imageSrc: '' },
  { id: 'ac10', name: 'Dr. Ankit Gupta',              role: 'IIT BHU',                          imageSrc: '' },
  { id: 'ac11', name: 'Prof. Bharat Lohani',          role: 'IIT Kanpur',                       imageSrc: '' },
  { id: 'ac12', name: 'Prof. D. S. Kushwaha',         role: 'MNNIT Prayagraj',                  imageSrc: '' },
  { id: 'ac13', name: 'Prof. Vinod Yadav',            role: 'MNNIT Prayagraj',                  imageSrc: '' },
  { id: 'ac14', name: 'Prof. Rajesh Gupta',           role: 'MNNIT Prayagraj',                  imageSrc: '' },
  { id: 'ac15', name: 'Prof. Nitin Singh',            role: 'MNNIT Prayagraj',                  imageSrc: '' },
  { id: 'ac16', name: 'Prof. R. P. Tiwari',           role: 'MNNIT Prayagraj',                  imageSrc: '' },
  { id: 'ac17', name: 'Prof. G. K. Srivastav',        role: 'Thapar University, Patiala',       imageSrc: '' },
  { id: 'ac18', name: 'Dr. Alok Das',                 role: 'VBSPU Jaunpur',                   imageSrc: '' },
  { id: 'ac19', name: 'Prof. Surender Kumar',         role: 'BITS Ranchi',                      imageSrc: '' },
  { id: 'ac20', name: 'Prof. S. C. Srivastava',       role: 'IIT Kanpur',                       imageSrc: '' },
  { id: 'ac21', name: 'Prof. (Dr.) A. M. Agarwal',   role: 'VC, United University Prayagraj',  imageSrc: '' },
  { id: 'ac22', name: 'Prof. P. K. Singh',            role: 'MMMUT Gorakhpur',                  imageSrc: '' },
  { id: 'ac23', name: 'Prof. Vishwa Nath Nanda',      role: 'GLA University Mathura',           imageSrc: '' },
  { id: 'ac24', name: 'Prof. Krishna Raj',            role: 'HBTU Kanpur',                      imageSrc: '' },
  { id: 'ac25', name: 'Prof. Manoj Shukla',           role: 'HBTU Kanpur',                      imageSrc: '' },
  { id: 'ac26', name: 'Prof. Vandana Dixit',          role: 'HBTU Kanpur',                      imageSrc: '' },
  { id: 'ac27', name: 'Dr. K. S. Verma',              role: 'KNIT Sultanpur',                   imageSrc: '' },
  { id: 'ac28', name: 'Prof. C. K. Tiwari',           role: 'HBTU Kanpur',                      imageSrc: '' },
  { id: 'ac29', name: 'Prof. (Dr.) Raghuraj Singh',   role: 'HBTU Kanpur',                      imageSrc: '' },
  { id: 'ac30', name: 'Prof. Govind Pandey',          role: 'MMMUT Gorakhpur',                  imageSrc: '' },
  { id: 'ac31', name: 'Dr. Rakesh Kumar',             role: 'MMMUT Gorakhpur',                  imageSrc: '' },
  { id: 'ac32', name: 'Prof. Mahesh Pal',             role: 'NIT Kurukshetra',                  imageSrc: '' },
  { id: 'ac33', name: 'Prof. A. K. Mishra',           role: 'MMMUT Gorakhpur',                  imageSrc: '' },
  { id: 'ac34', name: 'Prof. Murad Ali',              role: 'VBSPU Jaunpur',                   imageSrc: '' },
  { id: 'ac35', name: 'Prof. Monika Mittal',          role: 'NIT Kurukshetra',                  imageSrc: '' },
  { id: 'ac36', name: 'Prof. Vikas Mittal',           role: 'NIT Kurukshetra',                  imageSrc: '' },
  { id: 'ac37', name: 'Prof. A. K. Tiwari',           role: 'IET Lucknow',                      imageSrc: '' },
]

// ── Social Media Handling Committee (3 members) ────────────────────────────────
export const SOCIAL_MEDIA_MEMBERS = [
  { id: 'sm1', name: 'Mr. Pradeep Kumar Chaudhary', role: 'Management', imageSrc: '' },
  { id: 'sm2', name: 'Mr. Shivkumar Yadav',         role: 'ECE',        imageSrc: '' },
  { id: 'sm3', name: 'Mr. Virendra Vikram Singh',   role: 'EE',         imageSrc: '' },
]

// ── Hospitality Committee (6 members) ─────────────────────────────────────────
export const HOSPITALITY_MEMBERS = [
  { id: 'hc1', name: 'Mr. Vikas Tripathi',    role: 'Training & Skills', imageSrc: '' },
  { id: 'hc2', name: 'Ms. Khusboo Yadav',     role: 'CSE',               imageSrc: '' },
  { id: 'hc3', name: 'Mr. Dev Sharan Yadav',  role: 'BCA',               imageSrc: '' },
  { id: 'hc4', name: 'Mr. Shivam Kumar',      role: 'BCA',               imageSrc: '' },
  { id: 'hc5', name: 'Mr. Deenbandhu Kumar',  role: 'BCA',               imageSrc: '' },
  { id: 'hc6', name: 'Ms. Tripti Singh',      role: 'Management',        imageSrc: '' },
]

// ── Registration Committee (11 members) ───────────────────────────────────────
export const REGISTRATION_MEMBERS = [
  { id: 'rc1',  name: 'Mr. Ajai Gupta',            role: 'CSE',        imageSrc: '' },
  { id: 'rc2',  name: 'Mr. Kushal Srivastava',      role: 'CSE',        imageSrc: '' },
  { id: 'rc3',  name: 'Mr. Sanjay Kannaujia',       role: 'BCA',        imageSrc: '' },
  { id: 'rc4',  name: 'Mr. Umesh Chandra Gupta',    role: 'ECE',        imageSrc: '' },
  { id: 'rc5',  name: 'Ms. Akanksha Gupta',         role: 'ME',         imageSrc: '' },
  { id: 'rc6',  name: 'Mr. Diwakar Yadav',          role: 'CE',         imageSrc: '' },
  { id: 'rc7',  name: 'Mr. Manish Chaudhary',       role: 'Management', imageSrc: '' },
  { id: 'rc8',  name: 'Ms. Anjali Roy',             role: 'Management', imageSrc: '' },
  { id: 'rc9',  name: 'Dr. Dhiraj Kumar',           role: 'PH',         imageSrc: '' },
  { id: 'rc10', name: 'Dr. Mazharuddin Ansari',     role: 'PH',         imageSrc: '' },
  { id: 'rc11', name: 'Mr. Naveen',                 role: 'PH',         imageSrc: '' },
]
