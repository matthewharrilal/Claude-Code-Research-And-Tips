'use client'

import { useEffect, useRef } from 'react'
import { useNavigationStore } from '@/lib/store'

export function useScrollSync() {
  const setActiveSection = useNavigationStore((s) => s.setActiveSection)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to find most visible
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          )
          setActiveSection(mostVisible.target.id)
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-80px 0px -50% 0px'
      }
    )

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id], h2[id], h3[id]')
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [setActiveSection])
}
