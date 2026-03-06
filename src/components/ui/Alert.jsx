import { Info, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Alert — contextual notification box (Design PRD §11)
 *
 * Variants: info | success | warning | error
 *
 * @example
 * <Alert variant="info" title="Note">Registration closes on 15 March.</Alert>
 * <Alert variant="error">Failed to submit. Please try again.</Alert>
 */
const variantMap = {
  info: {
    wrapper: 'bg-blue-50 border-blue-200 text-blue-800',
    icon: <Info size={18} className="shrink-0 text-blue-500 mt-0.5" aria-hidden="true" />,
  },
  success: {
    wrapper: 'bg-green-50 border-green-200 text-green-800',
    icon: <CheckCircle2 size={18} className="shrink-0 text-green-500 mt-0.5" aria-hidden="true" />,
  },
  warning: {
    wrapper: 'bg-amber-50 border-amber-200 text-amber-800',
    icon: <AlertTriangle size={18} className="shrink-0 text-amber-500 mt-0.5" aria-hidden="true" />,
  },
  error: {
    wrapper: 'bg-red-50 border-red-200 text-red-700',
    icon: <XCircle size={18} className="shrink-0 text-red-500 mt-0.5" aria-hidden="true" />,
  },
}

function Alert({ variant = 'info', title, className, children, ...props }) {
  const { wrapper, icon } = variantMap[variant] ?? variantMap.info

  return (
    <div
      role="alert"
      className={cn('flex items-start gap-3 px-4 py-3 rounded-md border text-sm', wrapper, className)}
      {...props}
    >
      {icon}
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  )
}

export { Alert }
export default Alert
