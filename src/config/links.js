/**
 * links.js — All external resource links (Google Forms, Sheets, etc.)
 * Admin can update these values through the admin panel.
 * Override via .env for initial setup.
 */

export const GOOGLE_LINKS = {
  // Registration Google Forms
  registrationFaculty: import.meta.env.VITE_REGISTRATION_FORM_FACULTY || "",
  registrationITM: import.meta.env.VITE_REGISTRATION_FORM_ITM || "",
  registrationExternal: import.meta.env.VITE_REGISTRATION_FORM_EXTERNAL || "",

  // Feedback Google Forms (day-wise)
  feedbackDay1: import.meta.env.VITE_FEEDBACK_FORM_DAY1 || "",
  feedbackDay2: import.meta.env.VITE_FEEDBACK_FORM_DAY2 || "",
  feedbackDay3: import.meta.env.VITE_FEEDBACK_FORM_DAY3 || "",

  // Google Sheets published as JSON/CSV
  scheduleSheet: import.meta.env.VITE_SCHEDULE_SHEET_URL || "",
  importantDatesSheet: import.meta.env.VITE_IMPORTANT_DATES_SHEET_URL || "",

  // Brochure PDF — place file at /public/brochure.pdf (no env var needed)
  brochure: '/brochure.pdf',

  // Paper submission (external portal or Google Form)
  paperSubmission: "",
};
