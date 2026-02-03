'use client'

/**
 * Notion-style Dense Documentation POC
 *
 * HIGH VISUAL DENSITY reference documentation.
 * Three-panel layout with collapsible sections.
 *
 * Uses NotebookDocs component with:
 * - 14px body text (compact but readable)
 * - Line-height 1.4-1.5 (tight)
 * - Collapsible H2 sections
 * - Sticky compact TOC (180px)
 * - Inline metadata (tags, dates on one line)
 * - Dense tables (8px padding)
 * - Compact callouts (12px padding)
 *
 * Real content from the Ralph Wiggum pattern.
 */

import { NotebookDocsDemo } from '@/components/ui-poc/NotebookDocs'

export default function NotionDocsPage() {
  return <NotebookDocsDemo />
}
