import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// ── Layouts ──────────────────────────────────────────────────────────────────
import MainLayout from '../components/layout/MainLayout'

// ── Loading Fallback ──────────────────────────────────────────────────────────
import { PageLoader } from '@/components/common/PageLoader'

// ── Public Pages (lazy loaded) ────────────────────────────────────────────────
const Home               = lazy(() => import('../pages/Home'))
const AboutConference    = lazy(() => import('../pages/About/AboutConference'))
const AboutIEI           = lazy(() => import('../pages/About/AboutIEI'))
const AboutITM           = lazy(() => import('../pages/About/AboutITM'))
const Convener              = lazy(() => import('../pages/Committee/Convener'))
const OrganizingCommittee   = lazy(() => import('../pages/Committee/OrganizingCommittee'))
const TechnicalCommittee    = lazy(() => import('../pages/Committee/TechnicalCommittee'))
const AdvisoryCommittee     = lazy(() => import('../pages/Committee/AdvisoryCommittee'))
const SocialMediaCommittee  = lazy(() => import('../pages/Committee/SocialMediaCommittee'))
const HospitalityCommittee  = lazy(() => import('../pages/Committee/HospitalityCommittee'))
const RegistrationCommittee = lazy(() => import('../pages/Committee/RegistrationCommittee'))
const FeedbackDay1       = lazy(() => import('../pages/Feedback/FeedbackDay1'))
const FeedbackDay2       = lazy(() => import('../pages/Feedback/FeedbackDay2'))
const FeedbackDay3       = lazy(() => import('../pages/Feedback/FeedbackDay3'))
const Registration       = lazy(() => import('../pages/Registration/Registration'))
const RegFaculty         = lazy(() => import('../pages/Registration/RegFaculty'))
const RegITMStudents     = lazy(() => import('../pages/Registration/RegITMStudents'))
const RegExternal        = lazy(() => import('../pages/Registration/RegExternal'))
const RegistrationFee    = lazy(() => import('../pages/RegistrationFee'))
const ImportantDates     = lazy(() => import('../pages/ImportantDates'))
const CallForPaper       = lazy(() => import('../pages/CallForPaper'))
const Speakers           = lazy(() => import('../pages/Speakers'))
const Schedule           = lazy(() => import('../pages/Schedule'))
const Proceedings        = lazy(() => import('../pages/Proceedings'))
const AISSDT             = lazy(() => import('../pages/AISSDT'))
const Conclave           = lazy(() => import('../pages/Conclave'))
const Brochure           = lazy(() => import('../pages/Brochure'))
const Contact            = lazy(() => import('../pages/Contact'))
const PaperSubmission    = lazy(() => import('../pages/PaperSubmission'))
const NotFound           = lazy(() => import('../pages/NotFound'))

// ── Route Definitions ─────────────────────────────────────────────────────────

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        {/* ── Public Routes (with MainLayout: Header + Footer) ── */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* About */}
          <Route path="about">
            <Route index element={<Navigate to="/about/conference" replace />} />
            <Route path="conference" element={<AboutConference />} />
            <Route path="iei"        element={<AboutIEI />} />
            <Route path="itm"        element={<AboutITM />} />
          </Route>

          {/* Committee */}
          <Route path="committee">
            <Route index element={<Navigate to="/committee/convener" replace />} />
            <Route path="convener"               element={<Convener />} />
            <Route path="organizing"             element={<OrganizingCommittee />} />
            <Route path="technical"              element={<TechnicalCommittee />} />
            <Route path="advisory"               element={<AdvisoryCommittee />} />
            <Route path="social-media"           element={<SocialMediaCommittee />} />
            <Route path="hospitality"            element={<HospitalityCommittee />} />
            <Route path="registration-committee" element={<RegistrationCommittee />} />
          </Route>

          {/* Feedback */}
          <Route path="feedback">
            <Route index element={<Navigate to="/feedback/day1" replace />} />
            <Route path="day1" element={<FeedbackDay1 />} />
            <Route path="day2" element={<FeedbackDay2 />} />
            <Route path="day3" element={<FeedbackDay3 />} />
          </Route>

          {/* Registration */}
          <Route path="registration">
            <Route index element={<Registration />} />
            <Route path="faculty"      element={<RegFaculty />} />
            <Route path="itm-students" element={<RegITMStudents />} />
            <Route path="external"     element={<RegExternal />} />
          </Route>

          {/* Standalone pages */}
          <Route path="registration-fee"  element={<RegistrationFee />} />
          <Route path="important-dates"   element={<ImportantDates />} />
          <Route path="call-for-paper"    element={<CallForPaper />} />
          <Route path="speakers"          element={<Speakers />} />
          <Route path="schedule"          element={<Schedule />} />
          <Route path="proceedings"       element={<Proceedings />} />
          <Route path="aissdt-2025"       element={<AISSDT />} />
          <Route path="conclave"          element={<Conclave />} />
          <Route path="brochure"          element={<Brochure />} />
          <Route path="contact"           element={<Contact />} />
          <Route path="paper-submission"  element={<PaperSubmission />} />
        </Route>

        {/* ── 404 ── */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  )
}

export default AppRoutes
