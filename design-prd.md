Design Product Requirements Document
CIST – Conference on Innovation in Science & Technology

Frontend Only (React + Redux Toolkit + ShadCN UI + Tailwind v3)

1. 🎯 Design Vision

The design must reflect:

Academic professionalism

Institutional credibility

Structured layout

Clean typography

Modern but formal

No flashy gradients

No neon colors

No excessive animations

The experience should feel like:

University Conference Website
Research Symposium Portal
Institutional Event Platform

2. 🎨 Visual Identity System
2.1 Color Palette (Formal Academic Tone)

Primary Color:

Deep Navy Blue (#0F172A)

Secondary Color:

Professional Blue (#1E3A8A)

Accent Color:

Muted Teal (#0D9488)

Neutral Colors:

Slate 50–900 (Tailwind default)

White (#FFFFFF)

Status Colors:

Success: Green 600

Warning: Amber 500

Error: Red 600

⚠ Avoid:

Bright gradients

Pink/purple neon

Glass morphism

Heavy shadows

2.2 Typography

Primary Font:

Inter (clean academic look)

Fallback:

System UI fonts

Font Rules:

Headings:

H1 → 32px–40px

H2 → 24px–32px

H3 → 20px–24px

Body:

14px–16px (mobile)

16px–18px (desktop)

Line height:

1.6

Font Weight:

500–700 for headings

400–500 for body

3. 📱 Responsive Design Strategy (Mobile First)

Minimum Width: 320px

Breakpoints:

320px → Small Mobile

480px → Large Mobile

768px → Tablet

1024px → Laptop

1280px → Desktop

1440px → Large Desktop

3.1 Layout Rules

Mobile (320px–767px):

Single column layout

Stacked navigation (hamburger menu)

Cards full width

Comfortable spacing

Buttons full width

Tablet:

2-column grid for cards

Desktop:

3 or 4 column grids

Max container width: 1280px

Centered layout

4. 🧱 Layout Architecture
4.1 Global Layout Structure

All pages must follow:

Header
Page Banner
Content Container
Optional Sidebar (desktop only)
Footer
4.2 Container Rules

Max width: 1280px

Padding:

Mobile: px-4

Tablet: px-6

Desktop: px-8

Section spacing:

py-10 mobile

py-16 desktop

5. 🧩 Component Design System

Using ShadCN UI components customized with Tailwind.

5.1 Header

Features:

College logo (left)

Conference name

Navigation menu

CTA button (“Register Now”)

Mobile:

Hamburger menu

Slide-in drawer navigation

Sticky:

Yes

Light shadow

5.2 Navigation Menu

Top-level:

Home

About

Committee

Registration

Call for Paper

Schedule

Contact

Dropdown style:

Clean white background

Border

Soft hover effect

No animation bounce effects.

5.3 Hero Section (Home)

Design Requirements:

Full-width background (solid light shade)

Conference title large bold text

Tagline below

Important date highlight badge

Register button

Text alignment:

Center on mobile

Left aligned on desktop

5.4 Cards (Universal Design)

Used in:

Committee

Speakers

Event tracks

Schedule sessions

Card style:

White background

Border

Light shadow

Rounded-lg

Hover subtle shadow increase

Content:

Title

Subtitle

Description

CTA (optional)

5.5 Tables

Used in:

Important Dates

Schedule

Registration Fee

Style:

Minimal borders

Sticky header

Responsive horizontal scroll on mobile

5.6 Forms (Contact + Feedback)

Fields:

Rounded-md

Clear label

Proper spacing

Focus ring

Error message below field

Button:

Primary filled button

Full width on mobile

6. 🏛 Page-Level Design Guidelines
6.1 Home Page

Sections:

Hero Section

About Conference Short Summary

Important Dates Preview

Call for Paper Highlights

Speakers Preview

Registration CTA

Footer

6.2 About Pages

Page Banner (Title + Breadcrumb)

Structured content blocks

Image beside content (desktop only)

Stacked on mobile

6.3 Committee Pages

Grid system:

Mobile: 1 per row

Tablet: 2 per row

Desktop: 3–4 per row

Each member card:

Circular photo

Name bold

Designation

Affiliation

6.4 Registration Pages

Layout:

Page heading

Instruction box

Registration category cards

CTA button

Embedded Google Form (optional)

6.5 Schedule Page

Two modes:

Mobile:

Stacked session cards

Desktop:

Clean table layout

Optional:

Timeline style vertical line on left

6.6 Important Dates

Highlight:

Upcoming dates badge

Expired dates greyed out

6.7 Contact Page

Layout:

Mobile:

Form first

Contact details below

Desktop:

Two-column layout

Left → Form

Right → Contact info + Map

7. 🛡 Accessibility Requirements

Proper heading hierarchy

High contrast colors

Focus visible on buttons

Alt text for images

Minimum 44px touch target on mobile

8. ⚙ Interaction Design

Allowed:

Subtle hover

Smooth transition

Button hover color change

Dropdown smooth open

Avoid:

Bounce animations

Auto-moving carousels

Loud transitions

9. 📦 Admin Panel Design

Admin must look different from public site.

Theme:

Light neutral background

Sidebar navigation (desktop)

Topbar with logout

Layout:

Mobile:

Collapsible sidebar

Dashboard Cards:

Total registrations

Total feedback

Quick links

Forms:

Clean admin forms

Grid layout

10. 🔲 Grid System

Desktop:

12-column grid

Tablet:

8-column

Mobile:

4-column simplified

11. 🌟 Engagement Strategy

To keep it engaging (but formal):

Highlight badges

Section separators

Academic icon usage (minimal)

Image + text balance

Strong hierarchy

12. 🚀 Performance Design Rules

No heavy background videos

Optimize images

Avoid large font families

Lazy load sections if needed

13. 🧭 UI Tone Summary

The UI must feel like:

✔ IIT / NIT Conference
✔ University Research Symposium
✔ IEEE Conference Portal
✔ Academic Symposium Website

It must NOT feel like:

❌ Startup landing page
❌ Crypto site
❌ Gaming UI
❌ SaaS marketing website

14. 🏁 Final Design Goal

The website should:

Build trust instantly

Look structured

Feel official

Be clean and readable

Work perfectly from 320px mobile devices

Maintain professional conference identity