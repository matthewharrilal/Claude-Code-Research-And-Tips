/**
 * Sidebar Navigation - Journey Pages
 * Handles toggle, mobile overlay, auto-expand current page, and keyboard navigation
 */

document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebarClose = document.querySelector('.sidebar-close');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const navSections = document.querySelectorAll('.nav-section');

  // Toggle sidebar on mobile
  function openSidebar() {
    sidebar?.classList.add('open');
    sidebarOverlay?.classList.add('visible');
    document.body.style.overflow = 'hidden';
    // Focus the close button for accessibility
    sidebarClose?.focus();
  }

  function closeSidebar() {
    sidebar?.classList.remove('open');
    sidebarOverlay?.classList.remove('visible');
    document.body.style.overflow = '';
    // Return focus to toggle button
    sidebarToggle?.focus();
  }

  // Click handlers
  sidebarToggle?.addEventListener('click', openSidebar);
  sidebarClose?.addEventListener('click', closeSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);

  // Keyboard support for sidebar toggle (Enter and Space)
  sidebarToggle?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openSidebar();
    }
  });

  // Keyboard support for sidebar close (Enter and Space)
  sidebarClose?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeSidebar();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar?.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Toggle nav sections (accordion behavior) with keyboard support
  navSections.forEach(section => {
    const title = section.querySelector('.nav-section-title');

    // Make section title focusable if not already
    if (title && !title.hasAttribute('tabindex')) {
      title.setAttribute('tabindex', '0');
      title.setAttribute('role', 'button');
      title.setAttribute('aria-expanded', section.classList.contains('open') ? 'true' : 'false');
    }

    // Click handler
    title?.addEventListener('click', function() {
      section.classList.toggle('open');
      title.setAttribute('aria-expanded', section.classList.contains('open') ? 'true' : 'false');
    });

    // Keyboard handler (Enter and Space)
    title?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        section.classList.toggle('open');
        title.setAttribute('aria-expanded', section.classList.contains('open') ? 'true' : 'false');
      }
    });
  });

  // Auto-expand section containing current page
  const currentPage = document.querySelector('.nav-page.current');
  if (currentPage) {
    const parentSection = currentPage.closest('.nav-section');
    if (parentSection) {
      parentSection.classList.add('open');
      const title = parentSection.querySelector('.nav-section-title');
      title?.setAttribute('aria-expanded', 'true');
    }

    // Scroll current page into view in sidebar
    setTimeout(() => {
      currentPage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  // Close sidebar when clicking a nav link (mobile)
  const navLinks = document.querySelectorAll('.sidebar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });
});

/**
 * Copy code functionality
 * Supports both:
 * 1. Auto-attached handlers for .code-block elements
 * 2. Global copyCode() function for inline onclick handlers
 */

/**
 * Global copy function for inline onclick handlers
 * Usage: <button onclick="copyCode(this)">Copy</button>
 * @param {HTMLElement} button - The button element that was clicked
 */
function copyCode(button) {
  const codeBlock = button.closest('.code-block') || button.parentElement;
  const code = codeBlock?.querySelector('pre code, pre');
  const text = code ? code.textContent : '';

  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
    button.textContent = 'Failed';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 2000);
  });
}

/**
 * Auto-attach copy handlers to .code-block elements on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach(block => {
    const copyBtn = block.querySelector('.copy-btn');
    const code = block.querySelector('pre code, pre');

    // Skip if button already has onclick handler
    if (copyBtn?.hasAttribute('onclick')) {
      return;
    }

    copyBtn?.addEventListener('click', async function() {
      const text = code?.textContent || '';

      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        copyBtn.textContent = 'Failed';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      }
    });

    // Add keyboard support for copy button (Enter and Space)
    copyBtn?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyBtn.click();
      }
    });
  });
});
