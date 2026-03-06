import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/utils'

/**
 * FormField — Label + Input/Select/Textarea + error/helper message wrapper
 *
 * Design PRD §5.6: "Clear label, proper spacing, focus ring, error message below field"
 *
 * @example
 * <FormField
 *   label="Full Name"
 *   htmlFor="name"
 *   required
 *   error={errors.name}
 *   helper="Enter your registered name"
 * >
 *   <Input id="name" {...register('name')} />
 * </FormField>
 */
function FormField({ label, htmlFor, required = false, error, helper, children, className, ...props }) {
  return (
    <div className={cn('flex flex-col gap-0', className)} {...props}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}

      {/* The actual control (Input / Textarea / Select) */}
      {children}

      {/* Error or helper text */}
      {error ? (
        <p id={htmlFor ? `${htmlFor}-error` : undefined} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : helper ? (
        <p className="mt-1 text-xs text-slate-500">{helper}</p>
      ) : null}
    </div>
  )
}

export { FormField }
export default FormField
