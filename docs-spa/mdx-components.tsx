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
