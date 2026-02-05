'use client'

import { useState } from 'react'
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react'

/**
 * FileStructure — "The Methodical Surveyor"
 *
 * Research Applied:
 * - R1-017: Monospace Differentiation (JetBrains Mono font)
 * - R1-022: File Tree Visualization (ASCII tree characters)
 * - R5-Recipe6: Architecture Overview recipe (File Tree + Core Abstraction)
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED)
 * - box-shadow: none (LOCKED)
 * - Colors: Folder = #4A90D9 blue, File = #666666
 */
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
        className="flex items-center gap-2 py-1.5 px-2 cursor-pointer transition-colors"
        style={{
          paddingLeft: `${depth * 1.25 + 0.5}rem`,
          backgroundColor: node.highlight ? '#F0EBE3' : 'transparent',
          borderRadius: 0
        }}
        onClick={() => {
          if (hasChildren) setIsOpen(!isOpen)
          if (node.content) setShowContent(!showContent)
        }}
        onMouseEnter={(e) => {
          if (!node.highlight) e.currentTarget.style.backgroundColor = '#F0EBE3'
        }}
        onMouseLeave={(e) => {
          if (!node.highlight) e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren ? (
          isOpen ? (
            <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: '#666666' }} />
          ) : (
            <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: '#666666' }} />
          )
        ) : (
          <span className="w-4" />
        )}

        {/* File/Folder Icon — Folder uses blue #4A90D9 per spec */}
        {node.type === 'folder' ? (
          isOpen ? (
            <FolderOpen className="w-4 h-4 flex-shrink-0" style={{ color: '#4A90D9' }} />
          ) : (
            <Folder className="w-4 h-4 flex-shrink-0" style={{ color: '#4A90D9' }} />
          )
        ) : (
          <File className="w-4 h-4 flex-shrink-0" style={{ color: '#666666' }} />
        )}

        {/* Name */}
        <span
          className="font-mono text-sm"
          style={{
            color: node.highlight ? '#E83025' : '#1A1A1A',
            fontWeight: node.highlight ? 600 : 400,
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace"
          }}
        >
          {node.name}
        </span>

        {/* Description */}
        {node.description && (
          <span className="text-xs ml-2" style={{ color: '#666666' }}>
            — {node.description}
          </span>
        )}

        {/* Content indicator */}
        {node.content && (
          <span className="text-xs ml-auto" style={{ color: '#E83025' }}>
            {showContent ? 'hide' : 'show'}
          </span>
        )}
      </div>

      {/* File Content */}
      {node.content && showContent && (
        <div
          className="mt-1 mb-2 p-3 overflow-x-auto"
          style={{
            marginLeft: `${depth * 1.25 + 2}rem`,
            backgroundColor: '#1A1A1A',
            color: '#F0EBE3',
            borderRadius: 0
          }}
        >
          <pre className="text-xs" style={{ fontFamily: "'JetBrains Mono', 'SF Mono', monospace" }}>
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
      <div
        className="mb-6 overflow-hidden"
        style={{
          backgroundColor: '#FEF9F5',
          border: '1px solid #E0D5C5',
          borderRadius: 0
        }}
      >
        {title && (
          <div
            className="px-4 py-2"
            style={{
              backgroundColor: '#F0EBE3',
              borderBottom: '1px solid #E0D5C5'
            }}
          >
            <span
              className="text-sm"
              style={{
                fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                color: '#666666'
              }}
            >
              {title}
            </span>
          </div>
        )}
        <pre
          className="p-4 whitespace-pre overflow-x-auto"
          style={{
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
            fontSize: '14px',
            color: '#1A1A1A'
          }}
        >
          {tree.trim()}
        </pre>
      </div>
    )
  }

  // Handle array tree (FileNode[] format)
  return (
    <div
      className="mb-6 overflow-hidden"
      style={{
        backgroundColor: '#FEF9F5',
        border: '1px solid #E0D5C5',
        borderRadius: 0
      }}
    >
      {title && (
        <div
          className="px-4 py-2"
          style={{
            backgroundColor: '#F0EBE3',
            borderBottom: '1px solid #E0D5C5'
          }}
        >
          <span
            className="text-sm"
            style={{
              fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
              color: '#666666'
            }}
          >
            {title}
          </span>
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
