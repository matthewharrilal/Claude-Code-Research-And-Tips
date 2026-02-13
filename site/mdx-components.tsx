/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/mdx-components.tsx
Tier: B | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
MDX component registry for the docs-spa. This file maps custom component names
to their React implementations so they can be used directly in MDX content
without explicit imports. It also overrides the default <pre> element to use the
custom CodeBlock component with syntax highlighting and copy functionality. This
is a Next.js convention file — it must be at the project root to be auto-detected.

2. THE QUESTION THIS ANSWERS
"How do custom components like EssenceBox and CodeBlock become available inside MDX files?"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| mdx/types (MDXComponents)              | Type definition for component registry |
| docs-spa/components/content/index.ts    | All custom MDX components: EssenceBox, CoreAbstraction, DesignDecision, FileStructure, PathOfTask, GotchaBox, WhatsHard, WhenToUse, CodeBlock |

6. MUST HONOR
- File MUST be named mdx-components.tsx and live at docs-spa project root (Next.js convention)
- The useMDXComponents function signature is prescribed by Next.js — do not rename
- The pre override extracts children and className to pass language to CodeBlock
- Adding new MDX components requires both importing here AND exporting from components/content/

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Next.js MDX integration                 | Auto-detected and injected into MDX rendering pipeline |
| docs-spa/components/mdx/MDXContent.tsx  | Uses these component mappings when rendering Velite MDX |
| All .mdx files in the project           | Components become available without import statements |

10. DIAGNOSTIC QUESTIONS
- Does adding a new component to this registry make it immediately usable in MDX files?
- Does the pre override correctly extract the language class from code blocks?
- Is this file being auto-detected by Next.js (check if MDX components render)?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
import type { MDXComponents } from 'mdx/types'
import {
  EssenceBox,
  CoreAbstraction,
  DesignDecision,
  FileStructure,
  PathOfTask,
  GotchaBox,
  WhatsHard,
  WhenToUse,
  CodeBlock,
} from '@/components/content'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom components available in MDX
    EssenceBox,
    CoreAbstraction,
    DesignDecision,
    FileStructure,
    PathOfTask,
    GotchaBox,
    WhatsHard,
    WhenToUse,
    CodeBlock,
    // Override default code blocks
    pre: (props: React.ComponentProps<'pre'>) => {
      const { children } = props
      const codeElement = children as React.ReactElement<{ children?: string; className?: string }>
      const code = codeElement?.props?.children || ''
      const language = codeElement?.props?.className?.replace('language-', '') || ''
      return <CodeBlock language={language}>{code}</CodeBlock>
    },
  }
}
