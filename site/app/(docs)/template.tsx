/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/(docs)/template.tsx
Tier: B | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
Next.js template file for the (docs) route group. Unlike layout.tsx which
persists across navigations, template.tsx re-mounts on every route change. This
is used specifically to trigger page transition animations — each navigation
within the docs creates a fresh PageTransition wrapper, enabling enter/exit
animations via framer-motion without stale state.

2. THE QUESTION THIS ANSWERS
"How do page transition animations get triggered on every docs route navigation?"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/transitions/index.ts (PageTransition) | Animation wrapper component |

6. MUST HONOR
- template.tsx MUST re-mount on navigation (this is a Next.js convention, not optional)
- PageTransition relies on LazyMotion from root layout.tsx — removing that breaks animations
- This file must stay minimal — heavy logic here runs on every page change

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/(docs)/synthesis/[slug]/page.tsx | Every synthesis page is wrapped by this template |
| All pages under docs-spa/app/(docs)/    | Template applies to entire route group |
| Next.js router                          | Automatically applied between layout and page |

10. DIAGNOSTIC QUESTIONS
- Does PageTransition produce visible enter/exit animations on route change?
- Is the template re-mounting (not persisting) when navigating between synthesis pages?
- Does removing this file eliminate page transition animations?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
import { PageTransition } from '@/components/transitions'

export default function DocsTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}
