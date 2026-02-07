/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/(docs)/layout.tsx
Tier: B | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
Layout for the (docs) route group — all documentation pages render inside this
layout. It wraps children in the ThreePanelLayout component (left nav, content,
activity zone) and injects the CopyButtonHandler for clipboard functionality on
code blocks. This is the structural boundary between the simple homepage and the
full documentation reading experience.

2. THE QUESTION THIS ANSWERS
"What layout wraps all documentation pages and provides the three-panel reading interface?"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/layout/index.ts (ThreePanelLayout) | Three-panel layout structure |
| docs-spa/components/content/index.ts (CopyButtonHandler) | Global copy button event handler |

6. MUST HONOR
- This layout nests inside the root layout.tsx — it inherits fonts and LazyMotion
- CopyButtonHandler must be a sibling of {children}, not a wrapper, to avoid re-renders
- The (docs) route group is parenthetical — it does NOT create a URL segment

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/(docs)/synthesis/[slug]/page.tsx | All synthesis pages render inside this layout |
| docs-spa/app/(docs)/template.tsx        | Template applies PageTransition within this layout |
| All routes under docs-spa/app/(docs)/   | Every docs page gets ThreePanelLayout |

10. DIAGNOSTIC QUESTIONS
- Does ThreePanelLayout correctly receive and render {children} in the content panel?
- Is CopyButtonHandler attaching click listeners to all .copy-btn elements?
- Does this layout nest properly inside the root layout without duplicate html/body tags?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
import { ThreePanelLayout } from '@/components/layout'
import { CopyButtonHandler } from '@/components/content'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThreePanelLayout>
      <CopyButtonHandler />
      {children}
    </ThreePanelLayout>
  )
}
