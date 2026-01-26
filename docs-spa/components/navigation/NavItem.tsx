'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavItemProps {
  slug: string
  title: string
  isActive?: boolean
}

export function NavItem({ slug, title, isActive }: NavItemProps) {
  return (
    <Link
      href={`/synthesis/${slug}`}
      scroll={false}
      className={`
        block px-3 py-1.5 text-sm rounded-md transition-colors
        ${isActive
          ? 'text-accent font-medium bg-accent/10'
          : 'text-text-muted hover:text-text-primary hover:bg-bg-muted'}
      `}
    >
      <motion.span
        animate={{ x: isActive ? 4 : 0 }}
        transition={{ duration: 0.2 }}
        className="block"
      >
        {title}
      </motion.span>
    </Link>
  )
}
