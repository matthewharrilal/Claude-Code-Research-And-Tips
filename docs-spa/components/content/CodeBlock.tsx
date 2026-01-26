'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg overflow-hidden mb-4">
      {filename && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono">
          {filename}
        </div>
      )}
      <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto ${filename ? '' : 'rounded-lg'}`}>
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 p-2 rounded bg-gray-700 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}
