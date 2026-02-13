/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/index.ts
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Barrel file that re-exports all content components from a single entry point.
This enables clean imports (`from '@/components/content'`) instead of importing
each component from its individual file.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| ./EssenceBox                            | Re-exports EssenceBox component       |
| ./CoreAbstraction                       | Re-exports CoreAbstraction component  |
| ./DesignDecision                        | Re-exports DesignDecision component   |
| ./FileStructure                         | Re-exports FileStructure component    |
| ./PathOfTask                            | Re-exports PathOfTask component       |
| ./GotchaBox                             | Re-exports GotchaBox component        |
| ./WhatsHard                             | Re-exports WhatsHard component        |
| ./WhenToUse                             | Re-exports WhenToUse component        |
| ./CodeBlock                             | Re-exports CodeBlock component        |
| ./HighlightableSection                  | Re-exports HighlightableSection       |
| ./CopyButtonHandler                     | Re-exports CopyButtonHandler          |

6. MUST HONOR
- Every content component MUST be re-exported here to be available via the barrel
- Adding a new content component requires a matching export line in this file
- Import path in consumers is '@/components/content' — do not change module path

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/mdx-components.tsx             | Imports 9 components for MDX registry |
| docs-spa/app/(docs)/layout.tsx          | Imports CopyButtonHandler             |
| All MDX content pages (via mdx-components) | Indirect — components available in MDX |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
export { EssenceBox } from './EssenceBox'
export { CoreAbstraction } from './CoreAbstraction'
export { DesignDecision } from './DesignDecision'
export { FileStructure } from './FileStructure'
export { PathOfTask } from './PathOfTask'
export { GotchaBox } from './GotchaBox'
export { WhatsHard } from './WhatsHard'
export { WhenToUse } from './WhenToUse'
export { CodeBlock } from './CodeBlock'
export { HighlightableSection } from './HighlightableSection'
export { CopyButtonHandler } from './CopyButtonHandler'
