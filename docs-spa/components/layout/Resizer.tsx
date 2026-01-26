'use client'

import { useState, useCallback, useEffect } from 'react'
import { useNavigationStore } from '@/lib/store'

export function Resizer() {
  const [isResizing, setIsResizing] = useState(false)
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)
  const setActivityZoneWidth = useNavigationStore((s) => s.setActivityZoneWidth)

  const startResizing = useCallback(() => {
    setIsResizing(true)
    document.body.classList.add('resizing')
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
    document.body.classList.remove('resizing')
  }, [])

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX
      const clampedWidth = Math.min(Math.max(newWidth, 280), 900)
      setActivityZoneWidth(clampedWidth)
    }
  }, [isResizing, setActivityZoneWidth])

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  return (
    <div
      className={`
        fixed top-[var(--header-height)] h-[calc(100vh-var(--header-height))]
        w-1 cursor-ew-resize z-50 group
        ${isResizing ? 'bg-accent' : 'bg-transparent hover:bg-accent/50'}
      `}
      style={{ right: `${activityZoneWidth - 2}px` }}
      onMouseDown={startResizing}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-gray-300 rounded-full group-hover:bg-accent transition-colors" />
    </div>
  )
}
