import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind class names safely (handles conflicts).
 * Used by ShadCN UI components and throughout the project.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
