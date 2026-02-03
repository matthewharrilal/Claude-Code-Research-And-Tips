'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

/**
 * Code Block Component
 *
 * Features:
 * - Dark background (high contrast)
 * - Optional filename header
 * - Copy button
 * - Line numbers (optional)
 * - Line highlighting
 *
 * Note: For syntax highlighting, integrate with Prism or Shiki
 */
export function CodeBlock({
  code,
  language = 'plaintext',
  filename,
  showLineNumbers = false,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const lines = code.split('\n')

  return (
    <div className="my-[var(--content-code-block-margin-y)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
      {/* Header with filename and copy button */}
      {(filename || true) && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm font-mono text-[var(--color-code-text)]">
                {filename}
              </span>
            )}
            {language && !filename && (
              <span className="text-xs font-mono text-[#808080] uppercase">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 text-xs text-[#808080] hover:text-[var(--color-code-text)] transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="m-0 p-[var(--content-code-block-padding)] bg-[var(--color-code-bg)] text-[var(--color-code-text)]">
          <code className="font-mono text-sm leading-relaxed">
            {showLineNumbers ? (
              <table className="border-collapse">
                <tbody>
                  {lines.map((line, idx) => {
                    const lineNum = idx + 1
                    const isHighlighted = highlightLines.includes(lineNum)
                    return (
                      <tr
                        key={idx}
                        className={isHighlighted ? 'bg-[rgba(255,255,255,0.05)]' : ''}
                      >
                        <td className="pr-4 text-right text-[#606060] select-none">
                          {lineNum}
                        </td>
                        <td className="whitespace-pre">{line || ' '}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock
