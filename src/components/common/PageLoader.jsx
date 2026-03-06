import { Spinner } from '@/components/ui/Spinner'

/**
 * PageLoader — full-viewport loading fallback for React.Suspense
 *
 * Used in AppRoutes.jsx Suspense fallback prop.
 *
 * @example
 * <Suspense fallback={<PageLoader />}>
 *   <Routes>...</Routes>
 * </Suspense>
 */
function PageLoader() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      role="status"
      aria-label="Loading page"
    >
      <Spinner size="lg" />
      <p className="mt-3 text-sm text-slate-500 font-medium">Loading…</p>
    </div>
  )
}

export { PageLoader }
export default PageLoader
