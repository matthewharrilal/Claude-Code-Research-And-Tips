'use client'

import { GrandNav } from '@/components/navigation'

interface LeftNavProps {
  collapsed?: boolean
}

export function LeftNav({ collapsed = false }: LeftNavProps) {
  return (
    <div className="h-full">
      <GrandNav collapsed={collapsed} />
    </div>
  )
}
