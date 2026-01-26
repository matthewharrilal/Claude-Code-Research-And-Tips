'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useNavigationStore } from '@/lib/store'

export function Resizer() {
  const [isResizing, setIsResizing] = useState(false)
  const isResizingRef = useRef(false)
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)
  const setActivityZoneWidth = useNavigationStore((s) => s.setActivityZoneWidth)

  const startResizing = useCallback(() => {
    isResizingRef.current = true
    setIsResizing(true)
    document.body.classList.add('resizing')
  }, [])

  const stopResizing = useCallback(() => {
    isResizingRef.current = false
    setIsResizing(false)
    document.body.classList.remove('resizing')
  }, [])

  // Use ref to avoid stale closure issue
  const resize = useCallback((e: MouseEvent) => {
    if (isResizingRef.current) {
      const newWidth = window.innerWidth - e.clientX
      const clampedWidth = Math.min(Math.max(newWidth, 280), 900)
      setActivityZoneWidth(clampedWidth)
    }
  }, [setActivityZoneWidth])

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  // Keyboard accessibility for resizing
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 50 : 10
    if (e.key === 'ArrowLeft') {
      setActivityZoneWidth(Math.min(activityZoneWidth + step, 900))
    } else if (e.key === 'ArrowRight') {
      setActivityZoneWidth(Math.max(activityZoneWidth - step, 280))
    }
  }, [activityZoneWidth, setActivityZoneWidth])

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize activity zone"
      aria-valuenow={activityZoneWidth}
      aria-valuemin={280}
      aria-valuemax={900}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`
        fixed top-[var(--header-height)] h-[calc(100vh-var(--header-height))]
        w-1 cursor-ew-resize z-50 group
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1
        ${isResizing ? 'bg-accent' : 'bg-transparent hover:bg-accent/50'}
      `}
      style={{ right: `${activityZoneWidth - 2}px` }}
      onMouseDown={startResizing}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-border rounded-full group-hover:bg-accent transition-colors" />
    </div>
  )
}
