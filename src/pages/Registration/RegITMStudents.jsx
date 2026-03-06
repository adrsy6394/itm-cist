import RegSubPage from './RegSubPage'

const BREADCRUMBS = [
  { label: 'Registration', path: '/registration' },
  { label: 'ITM Students' },
]

const INSTRUCTIONS = [
  'This form is exclusively for students currently enrolled at ITM College, GIDA, GOrakhpur.',
  'Keep your enrollment number / student ID ready.',
  'Provide your department and year of study.',
  'A valid ITM email address is preferred for confirmation.',
  'Contact your department coordinator if you need assistance.',
]

function RegITMStudents() {
  return (
    <RegSubPage
      title="ITM Student Registration"
      description="Registration form for students of ITM College, GIDA, Gorakhpur."
      breadcrumbs={BREADCRUMBS}
      formKey="registrationFormITM"
      instructions={INSTRUCTIONS}
    />
  )
}

export default RegITMStudents
