'use client'

import { Search } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

interface HeaderProps {
  logo?: React.ReactNode
  logoText?: string
  navLinks?: NavLink[]
  showSearch?: boolean
  onSearchClick?: () => void
  ctaLabel?: string
  ctaHref?: string
  signInLabel?: string
  signInHref?: string
}

/**
 * Documentation Header
 *
 * Features:
 * - Logo + text
 * - Primary navigation links
 * - Search trigger with ⌘K
 * - Sign in + CTA buttons
 */
export function Header({
  logo,
  logoText = 'Docs',
  navLinks = [],
  showSearch = true,
  onSearchClick,
  ctaLabel,
  ctaHref,
  signInLabel,
  signInHref,
}: HeaderProps) {
  return (
    <div className="h-full flex items-center justify-between px-[var(--layout-header-padding-x)]">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-[var(--color-text-primary)]">
          {logo || (
            <span className="font-[var(--font-display)] font-black text-xl tracking-tight">
              {logoText}
            </span>
          )}
        </a>

        {/* Primary Nav */}
        {navLinks.length > 0 && (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Right: Search + Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        {showSearch && (
          <button
            onClick={onSearchClick}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-text-muted)] bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-[var(--radius-md)] hover:border-[var(--color-border-strong)] transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
            <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
              ⌘K
            </kbd>
          </button>
        )}

        {/* Sign In */}
        {signInLabel && signInHref && (
          <a
            href={signInHref}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            {signInLabel}
          </a>
        )}

        {/* CTA Button */}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="px-[var(--component-button-padding-x)] py-[var(--component-button-padding-y)] text-sm font-medium text-[var(--color-text-inverse)] bg-[var(--color-primary)] rounded-[var(--radius-md)] hover:opacity-90 transition-opacity"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  )
}

export default Header
