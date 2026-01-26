import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function for merging Tailwind CSS classes
 * Standard pattern from shadcn/ui
 *
 * Combines clsx (for conditional classes) with tailwind-merge
 * (for deduplicating/overriding Tailwind classes correctly)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
