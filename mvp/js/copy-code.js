/**
 * Copy Code Module - Copy button functionality for code blocks
 *
 * Features:
 * - Find all .copy-btn elements
 * - Copy sibling code content to clipboard
 * - Visual feedback (text change to "Copied!")
 * - Reset after 2 seconds
 */

(function() {
  'use strict';

  // Configuration
  var CONFIG = {
    buttonSelector: '.copy-btn',
    codeBlockSelector: '.code-block',
    codeContentSelector: '.code-block__content pre, .code-block__content code',
    copiedClass: 'copy-btn--copied',
    defaultText: 'Copy',
    copiedText: 'Copied!',
    resetDelay: 2000
  };

  /**
   * Initialize copy functionality for all copy buttons
   */
  function initCopyButtons() {
    var copyButtons = document.querySelectorAll(CONFIG.buttonSelector);

    copyButtons.forEach(function(button) {
      button.addEventListener('click', handleCopyClick);
    });
  }

  /**
   * Handle click event on copy button
   * @param {MouseEvent} event - The click event
   */
  function handleCopyClick(event) {
    event.preventDefault();

    var button = event.currentTarget;
    var codeContent = findCodeContent(button);

    if (!codeContent) {
      console.warn('Copy button: No code content found');
      return;
    }

    copyToClipboard(codeContent)
      .then(function() {
        showCopiedFeedback(button);
      })
      .catch(function(err) {
        console.error('Copy failed:', err);
        showErrorFeedback(button);
      });
  }

  /**
   * Find the code content associated with a copy button
   * @param {HTMLElement} button - The copy button element
   * @returns {string|null} - The code content text, or null if not found
   */
  function findCodeContent(button) {
    // First, try to find code in the same code block container
    var codeBlock = button.closest(CONFIG.codeBlockSelector);

    if (codeBlock) {
      var codeElement = codeBlock.querySelector(CONFIG.codeContentSelector);
      if (codeElement) {
        return codeElement.textContent;
      }
    }

    // Fallback: look for a sibling or adjacent code element
    var parent = button.parentElement;
    if (parent) {
      var preElement = parent.querySelector('pre');
      if (preElement) {
        return preElement.textContent;
      }

      var codeElement2 = parent.querySelector('code');
      if (codeElement2) {
        return codeElement2.textContent;
      }
    }

    // Last resort: check next sibling
    var nextSibling = button.nextElementSibling;
    if (nextSibling && (nextSibling.tagName === 'PRE' || nextSibling.tagName === 'CODE')) {
      return nextSibling.textContent;
    }

    return null;
  }

  /**
   * Copy text to clipboard using modern Clipboard API with fallback
   * @param {string} text - The text to copy
   * @returns {Promise} - Resolves on success, rejects on failure
   */
  function copyToClipboard(text) {
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback for older browsers
    return new Promise(function(resolve, reject) {
      var textArea = document.createElement('textarea');
      textArea.value = text;

      // Prevent scrolling to bottom
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
          resolve();
        } else {
          reject(new Error('execCommand copy failed'));
        }
      } catch (err) {
        document.body.removeChild(textArea);
        reject(err);
      }
    });
  }

  /**
   * Show visual feedback that copy was successful
   * @param {HTMLElement} button - The copy button element
   */
  function showCopiedFeedback(button) {
    var originalText = button.textContent;

    // Update button state
    button.textContent = CONFIG.copiedText;
    button.classList.add(CONFIG.copiedClass);
    button.setAttribute('aria-label', 'Code copied to clipboard');

    // Reset after delay
    setTimeout(function() {
      button.textContent = originalText || CONFIG.defaultText;
      button.classList.remove(CONFIG.copiedClass);
      button.setAttribute('aria-label', 'Copy code to clipboard');
    }, CONFIG.resetDelay);
  }

  /**
   * Show visual feedback that copy failed
   * @param {HTMLElement} button - The copy button element
   */
  function showErrorFeedback(button) {
    var originalText = button.textContent;

    button.textContent = 'Failed';
    button.style.backgroundColor = 'var(--semantic-error)';

    setTimeout(function() {
      button.textContent = originalText || CONFIG.defaultText;
      button.style.backgroundColor = '';
    }, CONFIG.resetDelay);
  }

  /**
   * Dynamically add copy buttons to code blocks that don't have them
   * @param {string} selector - Optional custom selector for code blocks
   */
  function addCopyButtonsToCodeBlocks(selector) {
    var codeBlocks = document.querySelectorAll(selector || CONFIG.codeBlockSelector);

    codeBlocks.forEach(function(block) {
      // Skip if already has a copy button
      if (block.querySelector(CONFIG.buttonSelector)) {
        return;
      }

      var button = document.createElement('button');
      button.className = 'copy-btn';
      button.textContent = CONFIG.defaultText;
      button.setAttribute('type', 'button');
      button.setAttribute('aria-label', 'Copy code to clipboard');

      block.style.position = 'relative';
      block.appendChild(button);

      // Attach click handler to new button
      button.addEventListener('click', handleCopyClick);
    });
  }

  /**
   * Refresh copy buttons (useful after dynamic content updates)
   */
  function refresh() {
    // Re-initialize all buttons
    initCopyButtons();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyButtons);
  } else {
    initCopyButtons();
  }

  // Expose public API
  window.CopyCode = {
    init: initCopyButtons,
    refresh: refresh,
    addButtonsToCodeBlocks: addCopyButtonsToCodeBlocks,
    copyToClipboard: copyToClipboard
  };

})();
