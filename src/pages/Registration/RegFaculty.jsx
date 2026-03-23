import RegSubPage from './RegSubPage'

const BREADCRUMBS = [
  { label: 'Registration', path: '/registration' },
  { label: 'Faculty / Professionals' },
]

const INSTRUCTIONS = [
  'This form is for faculty members and working professionals attending CIST 2026.',
  'Keep your institution / organization details ready.',
  'Provide a valid email address — confirmation will be sent there.',
  'Refer to the Registration Fee page for applicable fee before submitting.',
  'Contact the organizing committee if you face any issues with the form.',
]

function RegFaculty() {
  return (
    <RegSubPage
      title="Faculty / Professional Registration"
      description="Registration form for faculty members and working professionals."
      breadcrumbs={BREADCRUMBS}
      formKey="registrationFormFaculty"
      instructions={INSTRUCTIONS}
    />
  )
}

export default RegFaculty
