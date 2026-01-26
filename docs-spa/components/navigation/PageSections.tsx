'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useNavigationStore } from '@/lib/store'

interface Section {
  id: string
  title: string
}

interface PageSectionsProps {
  slug: string
}

const listVariants = {
  collapsed: { opacity: 0 },
  expanded: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

const itemVariants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: { opacity: 1, x: 0 }
}

export function PageSections({ slug }: PageSectionsProps) {
  const [sections, setSections] = useState<Section[]>([])
  const activeSection = useNavigationStore((s) => s.activeSection)

  useEffect(() => {
    // Wait for DOM to be ready
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

        // Clean up title (remove numbering, emoji, etc.)
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
    <motion.div
      variants={listVariants}
      initial="collapsed"
      animate="expanded"
      className="ml-3 mt-1 mb-2 pl-3 border-l border-gray-200/50"
    >
      {sections.map((section) => (
        <motion.div key={section.id} variants={itemVariants}>
          <Link
            href={`#${section.id}`}
            scroll={false}
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById(section.id)
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className={`
              block py-1 text-xs transition-colors
              ${activeSection === section.id
                ? 'text-accent font-medium'
                : 'text-text-muted hover:text-text-primary'}
            `}
          >
            {section.title}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
