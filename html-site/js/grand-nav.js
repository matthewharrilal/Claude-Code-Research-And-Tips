/**
 * Grand Navigation Component - Flat List
 * Shows all files in a single flat list with the current file's
 * page sections nested beneath it. Smooth GSAP animations.
 */

// All synthesis files with their display titles
const SYNTHESIS_FILES = [
  { file: 'master-playbook.html', title: 'The Complete Playbook' },
  { file: 'judgment-guide.html', title: 'Decision Framework' },
  { file: 'staff-engineer-mental-model.html', title: 'Staff Engineer Mindset' },
  { file: 'architecture-complexity-ladder.html', title: 'Complexity Ladder' },
  { file: 'architecture-composition-rules.html', title: 'Composition Rules' },
  { file: 'architecture-domain-isolation.html', title: 'Domain Isolation' },
  { file: 'architecture-primitives.html', title: 'Architecture Primitives' },
  { file: 'architecture-swarm-topologies.html', title: 'Swarm Topologies' },
  { file: 'mastery-ralph-complete.html', title: 'Ralph Pattern (Complete)' },
  { file: 'mastery-gastown-complete.html', title: 'Gas Town Architecture' },
  { file: 'mastery-ccmirror-complete.html', title: 'CC Mirror Orchestration' },
  { file: 'mastery-context-management.html', title: 'Context Management' },
  { file: 'mastery-multi-agent.html', title: 'Multi-Agent Systems' },
  { file: 'compare-orchestration.html', title: 'Orchestration Comparison' },
  { file: 'compare-architecture.html', title: 'Architecture Comparison' },
  { file: 'compare-memory.html', title: 'Memory Approaches' },
  { file: 'compare-cost.html', title: 'Cost Analysis' },
  { file: 'compare-observability.html', title: 'Observability Options' },
  { file: 'compare-ralph-variants-complete.html', title: 'Ralph Variants' },
  { file: 'compare-enterprise-orchestration.html', title: 'Enterprise Orchestration' },
  { file: 'compare-opencode-alternatives.html', title: 'Open Source Alternatives' },
  { file: 'transform-single-to-autonomous.html', title: 'Single → Autonomous' },
  { file: 'transform-prompt-to-agent.html', title: 'Prompt → Agent' },
  { file: 'transform-generalist-to-swarm.html', title: 'Generalist → Swarm' },
  { file: 'transform-manual-to-filesystem.html', title: 'Manual → Filesystem' },
  { file: 'principles-core.html', title: 'Core Principles' },
  { file: 'principles-anti-patterns.html', title: 'Anti-Patterns' },
  { file: 'principles-derivation-guide.html', title: 'Deriving Principles' },
  { file: 'principles-learning-loops.html', title: 'Learning Loops' },
  { file: 'taxonomy-architectures.html', title: 'Architecture Taxonomy' },
  { file: 'taxonomy-orchestration.html', title: 'Orchestration Taxonomy' },
  { file: 'taxonomy-tools.html', title: 'Tool Taxonomy' },
  { file: 'taxonomy-workflows.html', title: 'Workflow Taxonomy' },
  { file: 'taxonomy-context-memory.html', title: 'Context & Memory Types' },
  { file: 'taxonomy-deployment.html', title: 'Deployment Options' },
  { file: 'taxonomy-cross-reference.html', title: 'Cross-Reference Matrix' },
  { file: 'taxonomy-enterprise-agents.html', title: 'Enterprise Agent Types' },
  { file: 'taxonomy-skills-expanded.html', title: 'Skills Reference' },
  { file: 'combinations-matrix.html', title: 'Combination Matrix' },
  { file: 'combinations-pairwise.html', title: 'Pairwise Combinations' },
  { file: 'combinations-extensions.html', title: 'Pattern Extensions' },
  { file: 'combinations-triple-plus.html', title: 'Complex Combinations' },
  { file: 'combinations-unexplored.html', title: 'Unexplored Territory' },
  { file: 'frontier-innovations.html', title: 'Cutting Edge Innovations' },
  { file: 'frontier-international.html', title: 'International Patterns' },
  { file: 'frontier-mobile.html', title: 'Mobile-First Workflows' },
  { file: 'grammar-syntax.html', title: 'Prompt Syntax' },
  { file: 'grammar-vocabulary.html', title: 'Pattern Vocabulary' },
  { file: 'grammar-plugins.html', title: 'Plugin System' },
  { file: 'technical-context-management-advanced.html', title: 'Advanced Context Techniques' },
  { file: 'technical-subagent-spawning-best-practices.html', title: 'Subagent Best Practices' },
  { file: 'boris-workflow-complete.html', title: 'Boris Cherny Workflow' },
  { file: 'mcp-ecosystem-complete.html', title: 'MCP Ecosystem' },
  { file: 'ralph-ecosystem-complete.html', title: 'Ralph Ecosystem' },
  { file: 'multi-agent-cc-mirror-complete.html', title: 'CC Mirror Deep Dive' },
  { file: 'async-coordination-patterns.html', title: 'Async Coordination' },
  { file: 'debugging-agent-failures.html', title: 'Debugging Agent Failures' },
  { file: 'error-taxonomy-recovery.html', title: 'Error Recovery Taxonomy' },
  { file: 'cross-pattern-migration.html', title: 'Pattern Migration Guide' },
  { file: 'mobile-first-workflows.html', title: 'Mobile Workflows' },
  { file: 'tooling-observability-guide.html', title: 'Observability Guide' },
  { file: 'reference-cost-economics.html', title: 'Cost Economics Reference' },
  { file: 'cost-economics-enterprise.html', title: 'Enterprise Cost Analysis' },
  { file: 'infrastructure-stack-blueprint.html', title: 'Infrastructure Blueprint' },
  { file: 'integration-memory-patterns.html', title: 'Memory Integration Patterns' }
];

// Spotlight (practitioner research) files
const SPOTLIGHT_FILES = [
  { file: 'boris-cherny-extraction.html', title: 'Boris Cherny' },
  { file: 'yegge-gas-town-extraction.html', title: 'Steve Yegge' },
  { file: 'molly-panopticon-extraction.html', title: 'Molly Cantillon' },
  { file: 'dan-shipper-extraction.html', title: 'Dan Shipper' },
  { file: 'jaana-dogan-extraction.html', title: 'Jaana Dogan' },
  { file: 'eric-buess-extraction.html', title: 'Eric Buess' },
  { file: 'vincent-quigley-extraction.html', title: 'Vincent Quigley' },
  { file: 'nader-dabit-extraction.html', title: 'Nader Dabit' },
  { file: 'dexter-horthy-extraction.html', title: 'Dexter Horthy' },
  { file: 'kaushik-gopal-extraction.html', title: 'Kaushik Gopal' },
  { file: 'reuven-claude-flow-extraction.html', title: 'Reuven Cohen' },
  { file: 'frontier-voices-extraction.html', title: 'Frontier Voices' },
  { file: 'failure-modes-extraction.html', title: 'Failure Modes Analysis' },
  { file: 'gas-town-complete-8-roles.html', title: 'Gas Town 8 Roles' },
  { file: 'research-ralph-expanded.html', title: 'Ralph Research' },
  { file: 'research-cc-mirror-expanded.html', title: 'CC Mirror Research' },
  { file: 'research-gas-town-expanded.html', title: 'Gas Town Research' },
  { file: 'research-multi-agent-patterns-expanded.html', title: 'Multi-Agent Research' },
  { file: 'research-task-decomposition-expanded.html', title: 'Task Decomposition' },
  { file: 'research-mobile-workflows-expanded.html', title: 'Mobile Workflows Research' }
];

/**
 * Get current filename from URL
 */
function getCurrentFilename() {
  const path = window.location.pathname;
  return path.split('/').pop() || 'index.html';
}

/**
 * Check if current file is in spotlight directory
 */
function isSpotlightFile() {
  return window.location.pathname.includes('/spotlight/');
}

/**
 * Get page sections from current document
 */
function getPageSections() {
  const sections = [];

  // Look for main sections with IDs
  document.querySelectorAll('.main-section[id], section[id], [data-section]').forEach(section => {
    const id = section.id || section.dataset.section;
    const header = section.querySelector('h2, h3, .section-header');
    if (id && header) {
      let title = header.textContent.trim();
      // Clean up title - remove number prefix, emoji, etc.
      title = title.replace(/^\d+[\.\)]\s*/, '').replace(/^[^\w\s]+\s*/, '');
      if (title.length > 0 && title.length < 50) {
        sections.push({ id, title });
      }
    }
  });

  // Fallback: existing nav items
  if (sections.length === 0) {
    document.querySelectorAll('.nav-item[href^="#"]').forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        sections.push({
          id: href.substring(1),
          title: item.textContent.trim()
        });
      }
    });
  }

  return sections;
}

/**
 * Build flat list navigation HTML
 */
function buildGrandNav() {
  const currentFile = getCurrentFilename();
  const isSpotlight = isSpotlightFile();
  const pageSections = getPageSections();

  // Determine path prefixes
  const synthPrefix = isSpotlight ? '../../synthesis/' : '';
  const spotPrefix = isSpotlight ? '' : '../extractions/spotlight/';
  const homeLink = isSpotlight ? '../../index.html' : '../index.html';

  let html = `
    <div class="grand-nav">
      <div class="grand-nav-header">
        <a href="${homeLink}" class="grand-nav-logo">
          <i data-lucide="book-open"></i>
          <span>Claude Code</span>
        </a>
      </div>

      <div class="grand-nav-search">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" placeholder="Filter..." class="grand-nav-filter" onkeyup="filterNav(this.value)">
      </div>

      <div class="grand-nav-list" id="grand-nav-list">
        <div class="grand-nav-divider">Frameworks & Guides</div>
  `;

  // Synthesis files
  for (const file of SYNTHESIS_FILES) {
    const isCurrent = file.file === currentFile && !isSpotlight;
    html += buildFileItem(file, isCurrent, synthPrefix, pageSections);
  }

  html += `<div class="grand-nav-divider">Practitioner Research</div>`;

  // Spotlight files
  for (const file of SPOTLIGHT_FILES) {
    const isCurrent = file.file === currentFile && isSpotlight;
    html += buildFileItem(file, isCurrent, spotPrefix, pageSections);
  }

  html += `
      </div>
    </div>
  `;

  return html;
}

/**
 * Build a single file item with optional nested sections
 */
function buildFileItem(file, isCurrent, pathPrefix, pageSections) {
  let html = `
    <div class="grand-nav-file ${isCurrent ? 'current' : ''}" data-title="${file.title.toLowerCase()}">
      <a href="${pathPrefix}${file.file}" class="grand-nav-file-link">
        ${file.title}
      </a>
  `;

  // If current file, show page sections with smooth animation
  if (isCurrent && pageSections.length > 0) {
    html += `<div class="grand-nav-sections">`;
    for (const section of pageSections) {
      html += `
        <a href="#${section.id}" class="grand-nav-section-link" data-section="${section.id}">
          ${section.title}
        </a>
      `;
    }
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

/**
 * Filter navigation by search term
 */
function filterNav(term) {
  const items = document.querySelectorAll('.grand-nav-file');
  const lowerTerm = term.toLowerCase();

  items.forEach(item => {
    const title = item.dataset.title || '';
    const matches = title.includes(lowerTerm);

    if (term === '') {
      item.style.display = '';
      item.style.opacity = '1';
    } else if (matches) {
      item.style.display = '';
      item.style.opacity = '1';
    } else {
      item.style.opacity = '0.3';
    }
  });
}

/**
 * Setup scroll-based section highlighting
 */
function setupScrollHighlight() {
  const sectionLinks = document.querySelectorAll('.grand-nav-section-link');
  if (sectionLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        sectionLinks.forEach(link => {
          const isActive = link.dataset.section === sectionId;
          link.classList.toggle('active', isActive);

          // Smooth highlight animation
          if (isActive && typeof gsap !== 'undefined') {
            gsap.fromTo(link,
              { backgroundColor: 'rgba(13, 147, 115, 0.2)' },
              { backgroundColor: 'transparent', duration: 0.8, ease: 'power2.out' }
            );
          }
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

  sectionLinks.forEach(link => {
    const section = document.getElementById(link.dataset.section);
    if (section) observer.observe(section);
  });
}

/**
 * Inject styles
 */
function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .grand-nav {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #ffffff;
    }

    .grand-nav-header {
      padding: 16px;
      border-bottom: 1px solid #e4e4e7;
      flex-shrink: 0;
    }

    .grand-nav-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #18181b;
      font-weight: 600;
      font-size: 15px;
    }

    .grand-nav-logo i {
      width: 22px;
      height: 22px;
      color: #0D9373;
    }

    .grand-nav-search {
      padding: 12px 16px;
      border-bottom: 1px solid #e4e4e7;
      position: relative;
      flex-shrink: 0;
    }

    .search-icon {
      position: absolute;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      color: #a1a1aa;
      pointer-events: none;
    }

    .grand-nav-filter {
      width: 100%;
      padding: 8px 12px 8px 32px;
      border: 1px solid #e4e4e7;
      border-radius: 6px;
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .grand-nav-filter:focus {
      border-color: #0D9373;
      box-shadow: 0 0 0 3px rgba(13, 147, 115, 0.1);
    }

    .grand-nav-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }

    .grand-nav-divider {
      padding: 16px 16px 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #a1a1aa;
    }

    .grand-nav-file {
      transition: opacity 0.2s ease;
    }

    .grand-nav-file-link {
      display: block;
      padding: 7px 16px;
      font-size: 13px;
      color: #52525b;
      text-decoration: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
    }

    .grand-nav-file-link:hover {
      color: #18181b;
      background: #f4f4f5;
    }

    .grand-nav-file.current > .grand-nav-file-link {
      color: #0D9373;
      font-weight: 600;
      background: linear-gradient(90deg, #ecfdf5 0%, transparent 100%);
      border-left-color: #0D9373;
    }

    /* Page sections nested under current file */
    .grand-nav-sections {
      padding: 4px 0 8px 0;
      margin-left: 18px;
      border-left: 1px solid #e4e4e7;
    }

    .grand-nav-section-link {
      display: block;
      padding: 5px 16px;
      font-size: 12px;
      color: #71717a;
      text-decoration: none;
      transition: all 0.15s ease;
      border-radius: 0 4px 4px 0;
    }

    .grand-nav-section-link:hover {
      color: #18181b;
      background: #f4f4f5;
    }

    .grand-nav-section-link.active {
      color: #0D9373;
      font-weight: 500;
    }

    /* Smooth scrollbar */
    .grand-nav-list::-webkit-scrollbar {
      width: 6px;
    }

    .grand-nav-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .grand-nav-list::-webkit-scrollbar-thumb {
      background: #d4d4d8;
      border-radius: 3px;
    }

    .grand-nav-list::-webkit-scrollbar-thumb:hover {
      background: #a1a1aa;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Initialize Grand Navigation
 */
function initGrandNav() {
  injectStyles();

  const leftNav = document.querySelector('.left-nav');
  if (!leftNav) {
    console.warn('Grand Nav: .left-nav container not found');
    return;
  }

  // Replace existing nav content
  leftNav.innerHTML = buildGrandNav();

  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Setup scroll highlighting
  setupScrollHighlight();

  // Scroll current file into view smoothly
  requestAnimationFrame(() => {
    const currentFile = leftNav.querySelector('.grand-nav-file.current');
    if (currentFile) {
      currentFile.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });
}

// Initialize when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGrandNav);
} else {
  initGrandNav();
}
