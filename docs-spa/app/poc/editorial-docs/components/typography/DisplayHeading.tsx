'use client'

import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  id?: string
  className?: string
}

/**
 * Display Heading (H1) - Page Titles
 *
 * Uses Barlow Condensed Black for maximum impact
 */
export function DisplayHeading({ children, id, className = '' }: HeadingProps) {
  return (
    <h1
      id={id}
      className={`
        font-[var(--font-display)]
        text-[var(--typography-h1-size)]
        font-[var(--typography-h1-weight)]
        leading-[var(--typography-h1-leading)]
        tracking-[var(--typography-h1-tracking)]
        text-[var(--color-text-primary)]
        mb-[var(--content-h1-margin-bottom)]
        ${className}
      `}
    >
      {children}
    </h1>
  )
}

/**
 * Section Heading (H2)
 */
export function SectionHeading({ children, id, className = '' }: HeadingProps) {
  return (
    <h2
      id={id}
      className={`
        font-[var(--font-display)]
        text-[var(--typography-h2-size)]
        font-[var(--typography-h2-weight)]
        leading-[var(--typography-h2-leading)]
        tracking-[var(--typography-h2-tracking)]
        text-[var(--color-text-primary)]
        mt-[var(--content-h2-margin-top)]
        mb-[var(--content-h2-margin-bottom)]
        ${className}
      `}
    >
      {children}
    </h2>
  )
}

/**
 * Subsection Heading (H3)
 */
export function SubsectionHeading({ children, id, className = '' }: HeadingProps) {
  return (
    <h3
      id={id}
      className={`
        font-[var(--font-body)]
        text-[var(--typography-h3-size)]
        font-[var(--typography-h3-weight)]
        leading-[var(--typography-h3-leading)]
        text-[var(--color-text-primary)]
        mt-[var(--content-h3-margin-top)]
        mb-[var(--content-h3-margin-bottom)]
        ${className}
      `}
    >
      {children}
    </h3>
  )
}

/**
 * Minor Heading (H4)
 */
export function MinorHeading({ children, id, className = '' }: HeadingProps) {
  return (
    <h4
      id={id}
      className={`
        font-[var(--font-body)]
        text-[var(--typography-h4-size)]
        font-[var(--typography-h4-weight)]
        leading-[var(--typography-h4-leading)]
        text-[var(--color-text-primary)]
        mt-[var(--content-h4-margin-top)]
        mb-[var(--content-h4-margin-bottom)]
        ${className}
      `}
    >
      {children}
    </h4>
  )
}

/**
 * Hero Display - Maximum impact statement
 */
export function HeroDisplay({ children, className = '' }: HeadingProps) {
  return (
    <h1
      className={`
        font-[var(--font-display)]
        text-[var(--typography-hero-size)]
        font-[var(--typography-hero-weight)]
        leading-[var(--typography-hero-leading)]
        tracking-[var(--typography-hero-tracking)]
        text-[var(--color-text-primary)]
        ${className}
      `}
    >
      {children}
    </h1>
  )
}

/**
 * Lead Text - Intro paragraphs
 */
export function LeadText({ children, className = '' }: HeadingProps) {
  return (
    <p
      className={`
        text-[var(--typography-lead-size)]
        font-[var(--typography-lead-weight)]
        leading-[var(--typography-lead-leading)]
        text-[var(--color-text-secondary)]
        mb-[var(--content-p-margin-bottom)]
        max-w-[var(--prose-width)]
        ${className}
      `}
    >
      {children}
    </p>
  )
}

export default DisplayHeading
