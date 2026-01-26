'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigationStore } from '@/lib/store'

const CONSTRAINTS = {
  min: 200,
  max: 400,
  collapseThreshold: 120,
  collapsed: 56,
}

export function LeftNavResizer() {
  const [isResizing, setIsResizing] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const isResizingRef = useRef(false)
  const startXRef = useRef(0)
  const startWidthRef = useRef(0)

  const leftNavWidth = useNavigationStore((s) => s.leftNavWidth)
  const leftNavCollapsed = useNavigationStore((s) => s.leftNavCollapsed)
  const setLeftNavWidth = useNavigationStore((s) => s.setLeftNavWidth)
  const setLeftNavCollapsed = useNavigationStore((s) => s.setLeftNavCollapsed)
  const getSnappedWidth = useNavigationStore((s) => s.getSnappedLeftNavWidth)

  const startResizing = useCallback((e: React.MouseEvent) => {
    isResizingRef.current = true
    startXRef.current = e.clientX
    startWidthRef.current = leftNavCollapsed ? CONSTRAINTS.collapsed : leftNavWidth
    setIsResizing(true)
    setShowTooltip(true)
    document.body.classList.add('resizing-left-nav')
    document.body.style.cursor = 'col-resize'
  }, [leftNavWidth, leftNavCollapsed])

  const stopResizing = useCallback(() => {
    if (!isResizingRef.current) return

    isResizingRef.current = false
    setIsResizing(false)
    document.body.classList.remove('resizing-left-nav')
    document.body.style.cursor = ''

    // Snap to nearest point on release
    if (!leftNavCollapsed) {
      const snappedWidth = getSnappedWidth(leftNavWidth)
      if (snappedWidth !== leftNavWidth) {
        setLeftNavWidth(snappedWidth)
      }
    }

    // Hide tooltip after delay
    setTimeout(() => setShowTooltip(false), 500)
  }, [leftNavWidth, leftNavCollapsed, getSnappedWidth, setLeftNavWidth])

  const resize = useCallback((e: MouseEvent) => {
    if (!isResizingRef.current) return

    const delta = e.clientX - startXRef.current
    const newWidth = startWidthRef.current + delta

    // Check collapse threshold
    if (newWidth < CONSTRAINTS.collapseThreshold) {
      setLeftNavCollapsed(true)
      setLeftNavWidth(CONSTRAINTS.collapsed)
    } else {
      setLeftNavCollapsed(false)
      const clampedWidth = Math.max(CONSTRAINTS.min, Math.min(CONSTRAINTS.max, newWidth))
      setLeftNavWidth(clampedWidth)
    }
  }, [setLeftNavWidth, setLeftNavCollapsed])

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  // Initialize from localStorage
  useEffect(() => {
    const savedWidth = localStorage.getItem('leftNavWidth')
    const savedCollapsed = localStorage.getItem('leftNavCollapsed')

    if (savedCollapsed === 'true') {
      setLeftNavCollapsed(true)
      setLeftNavWidth(CONSTRAINTS.collapsed)
    } else if (savedWidth) {
      setLeftNavWidth(parseInt(savedWidth, 10))
    }
  }, [setLeftNavWidth, setLeftNavCollapsed])

  // Keyboard accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 50 : 10

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      if (leftNavCollapsed) {
        setLeftNavCollapsed(false)
        setLeftNavWidth(CONSTRAINTS.min)
      } else {
        setLeftNavWidth(Math.min(leftNavWidth + step, CONSTRAINTS.max))
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const newWidth = leftNavWidth - step
      if (newWidth < CONSTRAINTS.collapseThreshold) {
        setLeftNavCollapsed(true)
        setLeftNavWidth(CONSTRAINTS.collapsed)
      } else {
        setLeftNavWidth(Math.max(newWidth, CONSTRAINTS.min))
      }
    } else if (e.key === 'Home') {
      e.preventDefault()
      setLeftNavCollapsed(true)
      setLeftNavWidth(CONSTRAINTS.collapsed)
    } else if (e.key === 'End') {
      e.preventDefault()
      setLeftNavCollapsed(false)
      setLeftNavWidth(CONSTRAINTS.max)
    }
  }, [leftNavWidth, leftNavCollapsed, setLeftNavWidth, setLeftNavCollapsed])

  // Double-click to toggle collapse
  const handleDoubleClick = useCallback(() => {
    if (leftNavCollapsed) {
      setLeftNavCollapsed(false)
      setLeftNavWidth(CONSTRAINTS.min)
    } else {
      setLeftNavCollapsed(true)
      setLeftNavWidth(CONSTRAINTS.collapsed)
    }
  }, [leftNavCollapsed, setLeftNavCollapsed, setLeftNavWidth])

  const displayWidth = leftNavCollapsed ? CONSTRAINTS.collapsed : leftNavWidth

  return (
    <>
      {/* Resizer handle */}
      <motion.div
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize navigation panel"
        aria-valuenow={displayWidth}
        aria-valuemin={CONSTRAINTS.collapsed}
        aria-valuemax={CONSTRAINTS.max}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={startResizing}
        onDoubleClick={handleDoubleClick}
        className={`
          fixed top-[var(--header-height)] h-[calc(100vh-var(--header-height))]
          w-2 cursor-col-resize z-50 group
          focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1
        `}
        style={{ left: `${displayWidth - 4}px` }}
        initial={false}
        animate={{
          backgroundColor: isResizing ? 'rgba(16, 185, 129, 0.3)' : 'transparent',
        }}
        whileHover={{
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
        }}
        transition={{ duration: 0.15 }}
      >
        {/* Visual grip indicator */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isResizing ? 1 : 0 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.15 }}
        >
          {/* Grip dots */}
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-accent" />
            <div className="w-1 h-1 rounded-full bg-accent" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-accent" />
            <div className="w-1 h-1 rounded-full bg-accent" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-accent" />
            <div className="w-1 h-1 rounded-full bg-accent" />
          </div>
        </motion.div>

        {/* Vertical line indicator */}
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 rounded-full"
          initial={{ scaleY: 0.3, opacity: 0 }}
          animate={{
            scaleY: isResizing ? 1 : 0.3,
            opacity: isResizing ? 1 : 0,
            backgroundColor: isResizing ? 'rgb(16, 185, 129)' : 'rgb(209, 213, 219)',
          }}
          whileHover={{ scaleY: 0.5, opacity: 0.5 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Width tooltip during resize */}
      <AnimatePresence>
        {showTooltip && isResizing && (
          <motion.div
            className="fixed z-[60] bg-gray-900 text-white text-xs font-mono px-2 py-1 rounded shadow-lg pointer-events-none"
            style={{
              left: `${displayWidth + 8}px`,
              top: '50%',
            }}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.15 }}
          >
            {leftNavCollapsed ? 'Collapsed' : `${Math.round(displayWidth)}px`}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
