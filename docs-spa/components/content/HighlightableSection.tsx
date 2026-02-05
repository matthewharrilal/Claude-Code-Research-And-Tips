'use client'

import { ReactNode } from 'react'
import { useNavigationStore } from '@/lib/store'

/**
 * HighlightableSection — Navigation highlight wrapper
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED)
 */
interface HighlightableSectionProps {
  id: string
  children: ReactNode
}

export function HighlightableSection({ id, children }: HighlightableSectionProps) {
  const hoveredSection = useNavigationStore((s) => s.hoveredSection)
  const isHighlighted = hoveredSection === id

  return (
    <section
      id={id}
      className="scroll-mt-24 transition-colors duration-200 -mx-4 px-4 py-2"
      style={{
        borderRadius: 0,
        backgroundColor: isHighlighted ? 'rgba(232, 48, 37, 0.05)' : 'transparent',
        outline: isHighlighted ? '1px solid rgba(232, 48, 37, 0.2)' : 'none'
      }}
    >
      {children}
    </section>
  )
}
