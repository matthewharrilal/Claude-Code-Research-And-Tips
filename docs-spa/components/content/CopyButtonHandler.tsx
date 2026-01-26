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
