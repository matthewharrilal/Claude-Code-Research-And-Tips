'use client'

/**
 * WARNING: This component uses Next.js internal APIs that are not publicly
 * documented or guaranteed stable. May break with Next.js updates.
 *
 * Alternative: Consider using next-view-transitions for a more stable solution.
 */

import { useContext, useState, ReactNode } from 'react'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext)
  // Freeze the router context on first render - never update it
  // This prevents the children from re-rendering during exit animations
  const [frozen] = useState(context)

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  )
}
