import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

/**
 * MainLayout — Public site layout wrapper
 * Structure: Header → <Outlet /> (page content) → Footer
 * All public routes are nested under this layout via React Router.
 */
function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Page content renders here */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
