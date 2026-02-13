/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/CopyButtonHandler.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Client-side handler that wires up copy-to-clipboard functionality for code
blocks in rendered HTML content. Exposes global `copyCode` and `copyCodeBlock`
functions for onclick handlers, and uses a MutationObserver to auto-attach
click handlers to any `.copy-btn` elements that appear dynamically (e.g., from
HTML content injection). Renders nothing visually — pure behavior component.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| react (useEffect)                       | Lifecycle hook for mounting/cleanup   |
| navigator.clipboard API                 | Browser clipboard write               |
| MutationObserver API                    | Watches DOM for new copy buttons      |

6. MUST HONOR
- Must expose window.copyCode and window.copyCodeBlock globally (HTML onclick handlers depend on them)
- Must clean up observer and global functions on unmount
- Copy feedback animation: 2000ms timeout, checkmark SVG + "Copied!" text
- Targets .copy-btn and .code-block/.core-code CSS classes from HTML content

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| docs-spa/app/(docs)/layout.tsx          | Mounted once in docs layout for all pages |
| HTML content with .copy-btn elements    | onclick handlers call window.copyCode |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
'use client'

import { useEffect } from 'react'

/**
 * Client-side handler for copy buttons in HTML content
 * Adds click feedback animation and success state
 */
export function CopyButtonHandler() {
  useEffect(() => {
    // Define global copy functions for HTML onclick handlers
    const copyCode = (button: HTMLButtonElement, text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        showCopyFeedback(button)
      }).catch(err => {
        console.error('Failed to copy:', err)
      })
    }

    const copyCodeBlock = (button: HTMLButtonElement) => {
      const codeBlock = button.closest('.code-block')
      const preElement = codeBlock?.querySelector('pre')
      const text = preElement?.textContent || ''

      navigator.clipboard.writeText(text).then(() => {
        showCopyFeedback(button)
      }).catch(err => {
        console.error('Failed to copy:', err)
      })
    }

    const showCopyFeedback = (button: HTMLButtonElement) => {
      // Add success class for animation
      button.classList.add('copy-success')

      // Change button content temporarily
      const originalHTML = button.innerHTML
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Copied!
      `

      // Reset after animation
      setTimeout(() => {
        button.classList.remove('copy-success')
        button.innerHTML = originalHTML
      }, 2000)
    }

    // Expose functions globally for onclick handlers
    ;(window as any).copyCode = copyCode
    ;(window as any).copyCodeBlock = copyCodeBlock

    // Also add click handlers to any copy buttons that don't have onclick
    const addClickHandlers = () => {
      document.querySelectorAll('.copy-btn:not([data-handler-added])').forEach((btn) => {
        const button = btn as HTMLButtonElement
        button.setAttribute('data-handler-added', 'true')

        // If no onclick, add default behavior
        if (!button.hasAttribute('onclick')) {
          button.addEventListener('click', () => {
            const codeBlock = button.closest('.code-block, .core-code')
            const preElement = codeBlock?.querySelector('pre')
            const codeElement = codeBlock?.querySelector('code')
            const text = preElement?.textContent || codeElement?.textContent || ''

            navigator.clipboard.writeText(text).then(() => {
              showCopyFeedback(button)
            })
          })
        }
      })
    }

    // Run on mount and observe for new content
    addClickHandlers()

    const observer = new MutationObserver(() => {
      addClickHandlers()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      delete (window as any).copyCode
      delete (window as any).copyCodeBlock
    }
  }, [])

  return null
}
