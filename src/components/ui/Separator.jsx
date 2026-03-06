import { cn } from '@/lib/utils'

/**
 * Separator — horizontal or vertical rule (Design PRD §11)
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" className="h-6" />
 */
function Separator({ orientation = 'horizontal', className, ...props }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-slate-200 shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
export default Separator
