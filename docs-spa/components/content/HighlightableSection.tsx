'use client'

import { ReactNode } from 'react'
import { useNavigationStore } from '@/lib/store'

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
      className={`
        scroll-mt-24 transition-colors duration-200 rounded-lg -mx-4 px-4 py-2
        ${isHighlighted ? 'bg-accent/5 ring-1 ring-accent/20' : ''}
      `}
    >
      {children}
    </section>
  )
}
