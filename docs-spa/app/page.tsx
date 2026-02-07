/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/page.tsx
Tier: B | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
Homepage of the Claude Code Knowledge Base SPA, rendered at the / route. This
is the landing page users see before entering the documentation. It provides a
centered hero with the project title, a CTA link to the Master Playbook
synthesis page, and badge indicators for SPA readiness and 3-panel layout. It
uses Tailwind utility classes referencing the KortAI design tokens from globals.css.

2. THE QUESTION THIS ANSWERS
"What does the user see when they first visit the docs SPA root URL?"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| next/link (Link)                        | Client-side navigation to /synthesis/master-playbook |
| docs-spa/app/globals.css (via layout)   | Tailwind tokens: bg-bg-base, text-text-primary, etc. |

6. MUST HONOR
- The CTA href "/synthesis/master-playbook" must correspond to a valid slug in content/pages/
- Activity zone color tokens (az-warstory) used for badge styling must stay in sync with globals.css
- This page renders OUTSIDE the (docs) route group — no ThreePanelLayout here

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/layout.tsx                 | Wrapped by root layout at / route     |
| Next.js router                          | Served as the index page at /         |

10. DIAGNOSTIC QUESTIONS
- Does the "Enter Documentation" link navigate to a valid synthesis page?
- Are the bg-bg-base and text-text-primary tokens rendering correct colors?
- Is this page correctly excluded from the ThreePanelLayout?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Claude Code Knowledge Base
        </h1>
        <p className="text-text-muted mb-8">
          144 pages of AI-assisted development patterns
        </p>
        <Link
          href="/synthesis/master-playbook"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors mb-8"
        >
          Enter Documentation
        </Link>
        <div className="flex gap-4 justify-center">
          <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">
            SPA Ready
          </span>
          <span className="px-3 py-1 rounded-full bg-az-warstory/20 text-az-warstory text-sm">
            3-Panel Layout
          </span>
        </div>
      </div>
    </div>
  )
}
