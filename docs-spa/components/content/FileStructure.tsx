'use client'

import { useState } from 'react'
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react'

interface FileNode {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
  content?: string
  highlight?: boolean
  description?: string
}

interface FileStructureProps {
  tree: FileNode[] | string
  title?: string
}

function FileTreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const hasChildren = node.type === 'folder' && node.children && node.children.length > 0

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-gray-100 transition-colors ${
          node.highlight ? 'bg-accent-light/20' : ''
        }`}
        style={{ paddingLeft: `${depth * 1.25 + 0.5}rem` }}
        onClick={() => {
          if (hasChildren) setIsOpen(!isOpen)
          if (node.content) setShowContent(!showContent)
        }}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren ? (
          isOpen ? (
            <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0" />
          )
        ) : (
          <span className="w-4" />
        )}

        {/* File/Folder Icon */}
        {node.type === 'folder' ? (
          isOpen ? (
            <FolderOpen className="w-4 h-4 text-accent-warm flex-shrink-0" />
          ) : (
            <Folder className="w-4 h-4 text-accent-warm flex-shrink-0" />
          )
        ) : (
          <File className="w-4 h-4 text-text-muted flex-shrink-0" />
        )}

        {/* Name */}
        <span
          className={`font-mono text-sm ${
            node.highlight ? 'text-accent font-semibold' : 'text-text-primary'
          }`}
        >
          {node.name}
        </span>

        {/* Description */}
        {node.description && (
          <span className="text-xs text-text-muted ml-2">
            — {node.description}
          </span>
        )}

        {/* Content indicator */}
        {node.content && (
          <span className="text-xs text-accent ml-auto">
            {showContent ? 'hide' : 'show'}
          </span>
        )}
      </div>

      {/* File Content */}
      {node.content && showContent && (
        <div
          className="ml-8 mt-1 mb-2 bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto"
          style={{ marginLeft: `${depth * 1.25 + 2}rem` }}
        >
          <pre className="text-xs font-mono">
            <code>{node.content}</code>
          </pre>
        </div>
      )}

      {/* Children */}
      {hasChildren && isOpen && (
        <div>
          {node.children!.map((child, i) => (
            <FileTreeNode key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function FileStructure({ tree, title }: FileStructureProps) {
  // Handle string tree (ASCII art format)
  if (typeof tree === 'string') {
    return (
      <div className="bg-warm-cream border border-border rounded-lg mb-6 overflow-hidden">
        {title && (
          <div className="bg-gray-100 px-4 py-2 border-b border-border">
            <span className="font-mono text-sm text-text-secondary">{title}</span>
          </div>
        )}
        <pre className="p-4 font-mono text-sm text-text-primary whitespace-pre overflow-x-auto">
          {tree.trim()}
        </pre>
      </div>
    )
  }

  // Handle array tree (FileNode[] format)
  return (
    <div className="bg-warm-cream border border-border rounded-lg mb-6 overflow-hidden">
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b border-border">
          <span className="font-mono text-sm text-text-secondary">{title}</span>
        </div>
      )}
      <div className="p-2">
        {tree.map((node, i) => (
          <FileTreeNode key={i} node={node} />
        ))}
      </div>
    </div>
  )
}
