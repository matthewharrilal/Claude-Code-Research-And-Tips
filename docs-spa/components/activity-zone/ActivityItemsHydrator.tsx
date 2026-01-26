'use client'

import { useEffect } from 'react'
import { useNavigationStore, type ActivityItemData } from '@/lib/store'

interface ActivityItemsHydratorProps {
  items: ActivityItemData[]
}

export function ActivityItemsHydrator({ items }: ActivityItemsHydratorProps) {
  const setActivityItems = useNavigationStore((s) => s.setActivityItems)

  useEffect(() => {
    setActivityItems(items)
    return () => setActivityItems([])
  }, [items, setActivityItems])

  return null
}
