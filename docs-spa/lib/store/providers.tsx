'use client'

import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <>{children}</>
}

// Re-export the store for convenience
export { useNavigationStore } from './navigation-store'
