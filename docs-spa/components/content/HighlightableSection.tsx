/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/HighlightableSection.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation-aware section wrapper that highlights content sections when the user
hovers over corresponding items in the right-hand table of contents. Uses the
global navigation store's `hoveredSection` state to apply a subtle red tint
(rgba #E83025 at 5% opacity) and outline, creating a visual link between
navigation and content. Renders nothing extra — just wraps children in a
styled section element.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| react (ReactNode)                       | Type for children prop                |
| @/lib/store (useNavigationStore)        | Reads hoveredSection state from Zustand store |

6. MUST HONOR
- border-radius: 0 on the section element (soul-locked)
- Highlight color: rgba(232, 48, 37, 0.05) bg + rgba(232, 48, 37, 0.2) outline
- Must use scroll-mt-24 for proper scroll-to-section offset under sticky header
- Transition: 200ms color change for smooth highlight feedback

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| Content rendering components            | Wraps content sections for highlight  |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
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
