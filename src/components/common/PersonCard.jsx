import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * PersonCard — Committee member / Speaker card
 *
 * Design PRD §6.3 (Committee Pages):
 *   - Circular photo
 *   - Name bold
 *   - Designation
 *   - Affiliation
 *
 * Grid: 1-col mobile → 2-col tablet → 3-4 col desktop (applied by parent)
 *
 * @example
 * <PersonCard
 *   name="Dr. Anita Sharma"
 *   designation="Professor"
 *   affiliation="IIT Bombay"
 *   imageSrc="/images/anita.jpg"
 * />
 */
function PersonCard({ name, designation, affiliation, imageSrc, role, className, ...props }) {
  return (
    <div
      className={cn(
        'bg-white border border-slate-200 rounded-lg shadow-card',
        'transition-shadow duration-200 hover:shadow-card-hover',
        'p-5 flex flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      {/* Avatar */}
      <div className="mb-4 flex-shrink-0">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Photo of ${name}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-slate-100"
            loading="lazy"
          />
        ) : (
          <div
            className="w-20 h-20 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center"
            aria-hidden="true"
          >
            <User size={32} className="text-slate-400" />
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <p className="font-semibold text-navy text-sm leading-snug">{name}</p>
        {designation && (
          <p className="text-pro-blue text-xs font-medium">{designation}</p>
        )}
        {role && (
          <p className="text-teal text-xs font-medium">{role}</p>
        )}
        {affiliation && (
          <p className="text-slate-500 text-xs mt-0.5 leading-snug">{affiliation}</p>
        )}
      </div>
    </div>
  )
}

export { PersonCard }
export default PersonCard
