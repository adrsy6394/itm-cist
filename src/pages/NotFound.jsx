import { Link } from 'react-router-dom'
import Container from '@/components/layout/Container'

/**
 * NotFound — 404 page
 */
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] section-padding text-center">
      <Container>
        <p className="text-6xl font-bold text-slate-200 mb-4" aria-hidden="true">404</p>
        <h1 className="text-2xl font-bold text-navy mb-2">Page Not Found</h1>
        <p className="text-slate-500 mb-6 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </Container>
    </div>
  )
}

export default NotFound
