Product Requirements Document (PRD)
CIST Conference Website (Frontend-Only Architecture)
1. 📌 Product Overview
1.1 Product Name

CIST Conference Website

1.2 Product Type

Frontend-Only Conference Website

1.3 Purpose

This website will:

Display complete conference information

Allow user registrations via Google Forms

Collect feedback via Google Forms

Store all data in Google Sheets

Provide Admin dashboard (Frontend controlled)

No backend server will be used

2. 🧠 Technical Constraints
2.1 Tech Stack

Frontend Only:

React.js

Redux Toolkit

ShadCN UI

Tailwind CSS v3

2.2 No Backend Rule

No Node.js

No Express

No MongoDB

No Firebase

No server-side authentication

All data will come from:

Google Form (for submission)

Google Sheets (as data storage)

Public Sheet API (read-only via sheet publish link)

3. 👥 Roles & Access
3.1 USER (Public)

User can:

View all pages

Submit registration via Google Form link

Submit feedback via Google Form

View committee members

View speakers

View schedule

Download brochure

View important dates

User cannot:

Modify any data

Access admin dashboard

3.2 ADMIN (Frontend-Controlled Role)

⚠ Since no backend exists, admin will be controlled via:

Simple login page

Predefined credentials stored in environment variable

LocalStorage session

Role-based route protection (frontend level)

Admin can:

Update page content manually (via editable JSON config)

Update Google Form links

Update Google Sheet links

Enable/Disable sections

Upload brochure manually (replace file)

Modify homepage banners

Change registration fee display

Toggle event visibility

Admin cannot:

Directly edit Google Sheet (must edit manually on Google)

4. 🌐 Information Architecture
4.1 Public Pages Structure
Home
About
  ├── About Conference
  ├── About IEI
  └── About ITM
Committee
  ├── Advisory Committee
  ├── Organizing Committee
  ├── Technical Committee
  └── Conference Convenors
Feedback
  ├── Day 1
  ├── Day 2
  └── Day 3
Registration
  ├── Faculty
  ├── ITM Students
  └── External Candidates
Registration Fee
Important Dates
Call for Paper
List of Speakers
Schedule
Proceedings
AISSDT-2025
Conclave
Brochure
Contact
Online Paper Submission
5. 📊 Data Architecture (Google Based)
5.1 Registration Flow

User → Click Registration
→ Redirect to Google Form
→ Data Stored in Google Sheet

React App will:

Fetch Google Sheet published JSON link

Display list if required

5.2 Feedback Flow

User → Day-wise Feedback Form
→ Google Form
→ Data stored in Google Sheet

Admin can:

Replace sheet link

Enable/disable feedback page

5.3 Important Dates Data

Option 1:
Static JSON file in project

Option 2:
Google Sheet published as web (recommended)

5.4 Schedule Data

Google Sheet published to web

React fetches via public CSV/JSON

6. 📦 State Management (Redux Toolkit)
Global Store Structure
store/
  ├── authSlice.js
  ├── contentSlice.js
  ├── registrationSlice.js
  ├── scheduleSlice.js
  ├── speakerSlice.js
  ├── committeeSlice.js
6.1 authSlice

Stores:

isAuthenticated

role

loginStatus

6.2 contentSlice

Stores:

homepage data

about pages content

links

brochure URL

Google Sheet links

7. 🔐 Authentication System (Frontend Only)
Admin Login

Username

Password

Credentials stored in:

.env
VITE_ADMIN_USER=
VITE_ADMIN_PASS=

On login:

Validate credentials

Store token in localStorage

Protect admin routes

⚠ Not fully secure (Frontend-only limitation)

8. 🖥 Page Layout Architecture
8.1 Home Page

Sections:

Header

Hero Section

Conference Overview

Important Dates Preview

Quick Links

Footer

8.2 Committee Pages

Grid Layout

Data from:

Static JSON OR

Google Sheet

8.3 Registration Pages

Instead of custom form:

Show registration instructions

Registration button

Google Form embedded

8.4 Important Dates Page

Table component:

| Event | Date | Status |

Data from Google Sheet.

8.5 Schedule Page

Timeline or table

Data from Google Sheet.

9. 🎨 UI Design Rules

Academic institutional design

No flashy gradients

Structured layout

Grid system

Consistent margins

Clean typography

Fully responsive

10. 📱 Responsive Strategy

Mobile First:

320px

768px

1024px

1440px

11. 📂 Folder Structure (Frontend Only)
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    ├── auth/
 │    ├── content/
 │    ├── schedule/
 │    ├── speakers/
 │    ├── committees/
 ├── pages/
 │    ├── Home.jsx
 │    ├── About/
 │    ├── Committee/
 │    ├── Registration/
 │    ├── Feedback/
 │    ├── Contact.jsx
 ├── components/
 │    ├── layout/
 │    ├── ui/
 │    ├── common/
 ├── config/
 │    └── links.js
 └── routes/
      └── AppRoutes.jsx
12. 🛡 Security Considerations

Since frontend-only:

Do not expose private sheet links

Use published-to-web sheet only

Admin login is only UI control, not server secure

Avoid sensitive data

13. 🚀 Deployment

Frontend Only:

Vercel

Netlify

GitHub Pages

No backend deployment required.

14. 📌 Limitations

Because no backend:

No secure authentication

No server validation

No private data handling

No real-time role enforcement

15. 🏁 Final Conclusion

This project is:

✅ Frontend-only
✅ Google Form driven
✅ Google Sheet as database
✅ Admin-controlled UI
✅ Scalable for academic event

Without backend complexity.