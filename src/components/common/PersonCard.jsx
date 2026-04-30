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
        'transition-all duration-300 hover:shadow-card-hover group',
        'p-5 flex flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      {/* Avatar */}
      <div className="mb-4 flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm bg-white p-1">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Photo of ${name}`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
            aria-hidden="true"
          >
            <User size={40} className="text-slate-400/60" />
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-0.5 text-center">
        <p className="font-semibold text-navy text-sm leading-snug text-center">{name}</p>
        {designation && (
          <p className="text-pro-blue text-xs font-medium text-center">{designation}</p>
        )}
        {role && (
          <p className="text-teal text-xs font-medium text-center">{role}</p>
        )}
        {affiliation && (
          <p className="text-slate-500 text-xs mt-0.5 leading-snug text-center">{affiliation}</p>
        )}
      </div>
    </div>
  )
}

export { PersonCard }
export default PersonCard
