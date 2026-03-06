import RegSubPage from './RegSubPage'

const BREADCRUMBS = [
  { label: 'Registration', path: '/registration' },
  { label: 'External Candidates' },
]

const INSTRUCTIONS = [
  'This form is for students and candidates from institutions other than ITM University.',
  'Keep your institution name, department, and student ID ready.',
  'Provide a valid personal or institutional email address.',
  'Refer to the Registration Fee page for applicable fee category.',
  'Contact the organizing committee for any queries regarding eligibility.',
]

function RegExternal() {
  return (
    <RegSubPage
      title="External Candidate Registration"
      description="Registration form for candidates from institutions outside ITM University."
      breadcrumbs={BREADCRUMBS}
      formKey="registrationFormExternal"
      instructions={INSTRUCTIONS}
    />
  )
}

export default RegExternal
