'use client'

import { ReactNode } from 'react'
import { useScrollSync } from './use-scroll-sync'

interface ScrollSyncProviderProps {
  children: ReactNode
}

export function ScrollSyncProvider({ children }: ScrollSyncProviderProps) {
  useScrollSync()
  return <>{children}</>
}
