import { cn } from '@/lib/utils'

/**
 * Label — accessible form label (Design PRD §5.6)
 *
 * @example
 * <Label htmlFor="name">Full Name <span aria-hidden="true" className="text-red-500">*</span></Label>
 */
function Label({ required, className, children, ...props }) {
  return (
    <label
      className={cn('block text-sm font-medium text-slate-700 mb-1.5', className)}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-red-500">
          *
        </span>
      )}
    </label>
  )
}

export { Label }
export default Label
