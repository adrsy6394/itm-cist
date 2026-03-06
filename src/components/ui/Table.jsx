import { cn } from '@/lib/utils'

/**
 * Table system — Design PRD §5.5
 *
 * Minimal borders, alternate row shading, sticky header support,
 * wrapped in a horizontal-scroll container for mobile.
 *
 * @example
 * <TableWrapper>
 *   <Table>
 *     <Thead>
 *       <Tr><Th>Event</Th><Th>Date</Th><Th>Status</Th></Tr>
 *     </Thead>
 *     <Tbody>
 *       <Tr><Td>Submission Deadline</Td><Td>15 Mar 2025</Td><Td><Badge variant="upcoming">Upcoming</Badge></Td></Tr>
 *     </Tbody>
 *   </Table>
 * </TableWrapper>
 */

/** Scroll wrapper — adds horizontal scroll on mobile */
function TableWrapper({ className, children, ...props }) {
  return (
    <div className={cn('w-full overflow-x-auto rounded-lg border border-slate-200', className)} {...props}>
      {children}
    </div>
  )
}

function Table({ className, children, ...props }) {
  return (
    <table className={cn('w-full border-collapse text-sm', className)} {...props}>
      {children}
    </table>
  )
}

function Thead({ className, children, ...props }) {
  return (
    <thead
      className={cn('bg-slate-50 border-b-2 border-slate-200', className)}
      {...props}
    >
      {children}
    </thead>
  )
}

function Tbody({ className, children, ...props }) {
  return (
    <tbody className={cn('divide-y divide-slate-100', className)} {...props}>
      {children}
    </tbody>
  )
}

function Tr({ className, children, ...props }) {
  return (
    <tr
      className={cn('transition-colors duration-100 hover:bg-slate-50', className)}
      {...props}
    >
      {children}
    </tr>
  )
}

function Th({ className, children, ...props }) {
  return (
    <th
      className={cn(
        'px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide whitespace-nowrap',
        className,
      )}
      {...props}
    >
      {children}
    </th>
  )
}

function Td({ className, children, ...props }) {
  return (
    <td className={cn('px-4 py-3 text-slate-700 align-top', className)} {...props}>
      {children}
    </td>
  )
}

export { TableWrapper, Table, Thead, Tbody, Tr, Th, Td }
export default Table
