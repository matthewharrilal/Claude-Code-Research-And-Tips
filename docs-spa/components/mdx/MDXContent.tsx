'use client'

import * as runtime from 'react/jsx-runtime'
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
import { HighlightableSection } from '@/components/content/HighlightableSection'

// MDX components mapping
const mdxComponents = {
  // Custom components for content
  EssenceBox,
  CoreAbstraction,
  DesignDecision,
  FileStructure,
  PathOfTask,
  GotchaBox,
  WhatsHard,
  WhenToUse,
  CodeBlock,
  HighlightableSection,

  // HTML element overrides with section IDs
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
    return (
      <h2 id={id} {...props} className="scroll-mt-24">
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
    return (
      <h3 id={id} {...props} className="scroll-mt-24">
        {children}
      </h3>
    )
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="bg-bg-muted rounded-lg p-4 overflow-x-auto">
      {children}
    </pre>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="bg-bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  // Wrap tables in scrollable container
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="table-wrapper">
      <table {...props} className="progression-table">
        {children}
      </table>
    </div>
  ),
}

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  // Velite outputs MDX as a function body string
  // We need to execute it with the runtime and components
  try {
    const fn = new Function('runtime', 'components', code)
    const Component = fn(runtime, mdxComponents).default

    return <Component components={mdxComponents} />
  } catch (error) {
    console.error('Failed to render MDX:', error)
    return (
      <div className="text-error p-4 bg-error-light rounded-lg">
        Failed to render content. Check the console for details.
      </div>
    )
  }
}
