'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useNavigationStore } from '@/lib/store'
import { Circle, Dot } from 'lucide-react'

interface Section {
  id: string
  title: string
}

interface PageSectionsProps {
  slug: string
}

// Spring configs
const springs = {
  snappy: { type: 'spring' as const, stiffness: 500, damping: 30 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 20 },
}

const containerVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
  },
  expanded: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2, delay: 0.1 },
      staggerChildren: 0.04,
      delayChildren: 0.15
    }
  }
}

const itemVariants = {
  collapsed: { opacity: 0, x: -12, scale: 0.9 },
  expanded: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
}

export function PageSections({ slug }: PageSectionsProps) {
  const [sections, setSections] = useState<Section[]>([])
  const activeSection = useNavigationStore((s) => s.activeSection)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('main section[id], main h2[id], main h3[id]')
      const extracted: Section[] = []

      elements.forEach((el) => {
        const id = el.id
        let title = ''

        if (el.tagName === 'SECTION') {
          const heading = el.querySelector('h2, h3')
          title = heading?.textContent || id
        } else {
          title = el.textContent || id
        }

        title = title.replace(/^\d+\.\s*/, '').replace(/^[^\w\s]+\s*/, '').trim()

        if (id && title) {
          extracted.push({ id, title })
        }
      })

      setSections(extracted)
    }, 100)

    return () => clearTimeout(timer)
  }, [slug])

  if (sections.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        variants={prefersReducedMotion ? {} : containerVariants}
        initial="collapsed"
        animate="expanded"
        className="mt-1 mb-2 ml-2 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-text-muted/50" />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-text-muted/70">
            On this page
          </span>
          <span className="text-[10px] text-text-muted/50 ml-auto tabular-nums">
            {sections.length}
          </span>
        </div>

        {/* Section links */}
        <div className="space-y-1">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id

            return (
              <motion.div
                key={section.id}
                variants={prefersReducedMotion ? {} : itemVariants}
                custom={index}
              >
                <Link
                  href={`#${section.id}`}
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById(section.id)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="group block"
                >
                  <div
                    className={`
                      relative flex items-center gap-2.5 py-1.5 px-3 rounded-md text-[12px] leading-snug
                      transition-colors duration-100
                      ${isActive
                        ? 'text-accent font-medium bg-accent/8'
                        : 'text-text-muted/80 hover:text-text-secondary hover:bg-bg-subtle'}
                    `}
                  >
                    {/* Dot indicator */}
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${isActive ? 'bg-accent' : 'bg-text-muted/40 group-hover:bg-text-muted/60'}`} />

                    {/* Section title */}
                    <span className="line-clamp-2">
                      {section.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
