'use client'

import { createContext, useContext, ReactNode } from 'react'
import type { ActivityItemData } from '@/lib/content'

interface ActivityContextValue {
  items: ActivityItemData[]
}

const ActivityContext = createContext<ActivityContextValue>({ items: [] })

interface ActivityProviderProps {
  children: ReactNode
  items: ActivityItemData[]
}

export function ActivityProvider({ children, items }: ActivityProviderProps) {
  return (
    <ActivityContext.Provider value={{ items }}>
      {children}
    </ActivityContext.Provider>
  )
}

export function useActivityItems() {
  return useContext(ActivityContext)
}
