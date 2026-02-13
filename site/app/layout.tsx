/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/layout.tsx
Tier: B | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
Root layout for the entire Next.js documentation SPA. Every page in the app
renders inside this layout. It configures the two primary fonts (Inter for body
text, JetBrains Mono for code), imports the global stylesheet, and wraps all
children in framer-motion's LazyMotion provider so animation primitives are
available app-wide without per-component dynamic imports.

2. THE QUESTION THIS ANSWERS
"What fonts, global styles, and animation providers wrap every page in the docs SPA?"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/globals.css                | Main stylesheet imported for all pages |
| next/font/google (Inter, JetBrains_Mono)| Font loading via Next.js font system  |
| framer-motion (LazyMotion, domAnimation)| Animation provider for all children   |

6. MUST HONOR
- Font CSS variables --font-sans and --font-mono must match globals.css @theme declarations
- LazyMotion with domAnimation keeps bundle small; switching to loadFeatures would change perf profile
- This is the ONLY place <html> and <body> tags should appear in the app

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/page.tsx                   | Rendered inside this layout at / route |
| docs-spa/app/(docs)/layout.tsx          | Nested layout inherits fonts + motion |
| All pages under docs-spa/app/           | Every route is wrapped by this layout |

10. DIAGNOSTIC QUESTIONS
- Do both --font-sans and --font-mono CSS variables resolve correctly in the browser?
- Is LazyMotion providing domAnimation features to nested AnimatePresence components?
- Does removing this layout break font rendering across all pages?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { LazyMotion, domAnimation } from 'framer-motion'
import './globals.css'

// Inter - Industry standard for technical documentation
// Excellent readability, substantial weight, used by GitHub/Vercel/Linear
// Variable font with optical sizing for crisp rendering at all sizes
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

// JetBrains Mono - Designed specifically for developers
// Excellent ligatures and character distinction
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Claude Code Knowledge Base',
  description: '144 pages of AI-assisted development patterns and workflows',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
