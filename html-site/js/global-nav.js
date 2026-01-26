// Global Navigation for Claude Code Knowledge Base
// This script generates the left nav with all 144 files organized by category

const NAV_DATA = {
  synthesis: {
    label: "Synthesis",
    icon: "book-open",
    categories: {
      architecture: {
        label: "Architecture",
        icon: "layers",
        files: [
          { name: "Complexity Ladder", file: "architecture-complexity-ladder.html" },
          { name: "Composition Rules", file: "architecture-composition-rules.html" },
          { name: "Domain Isolation", file: "architecture-domain-isolation.html" },
          { name: "Primitives", file: "architecture-primitives.html" },
          { name: "Swarm Topologies", file: "architecture-swarm-topologies.html" }
        ]
      },
      mastery: {
        label: "Mastery",
        icon: "trophy",
        files: [
          { name: "Ralph Complete", file: "mastery-ralph-complete.html" },
          { name: "Gas Town Complete", file: "mastery-gastown-complete.html" },
          { name: "CC Mirror Complete", file: "mastery-ccmirror-complete.html" },
          { name: "Context Management", file: "mastery-context-management.html" },
          { name: "Multi-Agent", file: "mastery-multi-agent.html" },
          { name: "Mastery Index", file: "mastery-master.html" }
        ]
      },
      compare: {
        label: "Comparisons",
        icon: "git-compare",
        files: [
          { name: "Architecture", file: "compare-architecture.html" },
          { name: "Cost", file: "compare-cost.html" },
          { name: "Enterprise Orchestration", file: "compare-enterprise-orchestration.html" },
          { name: "Memory", file: "compare-memory.html" },
          { name: "Observability", file: "compare-observability.html" },
          { name: "OpenCode Alternatives", file: "compare-opencode-alternatives.html" },
          { name: "Orchestration", file: "compare-orchestration.html" },
          { name: "Ralph Variants", file: "compare-ralph-variants-complete.html" },
          { name: "Compare Index", file: "compare-master.html" }
        ]
      },
      taxonomy: {
        label: "Taxonomies",
        icon: "list-tree",
        files: [
          { name: "Architectures", file: "taxonomy-architectures.html" },
          { name: "Context Memory", file: "taxonomy-context-memory.html" },
          { name: "Cross Reference", file: "taxonomy-cross-reference.html" },
          { name: "Deployment", file: "taxonomy-deployment.html" },
          { name: "Enterprise Agents", file: "taxonomy-enterprise-agents.html" },
          { name: "Orchestration", file: "taxonomy-orchestration.html" },
          { name: "Skills Expanded", file: "taxonomy-skills-expanded.html" },
          { name: "Tools", file: "taxonomy-tools.html" },
          { name: "Workflows", file: "taxonomy-workflows.html" },
          { name: "Taxonomy Index", file: "taxonomy-master.html" }
        ]
      },
      transform: {
        label: "Transformations",
        icon: "arrow-right-left",
        files: [
          { name: "Generalist to Swarm", file: "transform-generalist-to-swarm.html" },
          { name: "Manual to Filesystem", file: "transform-manual-to-filesystem.html" },
          { name: "Prompt to Agent", file: "transform-prompt-to-agent.html" },
          { name: "Single to Autonomous", file: "transform-single-to-autonomous.html" },
          { name: "Transform Index", file: "transform-master.html" }
        ]
      },
      principles: {
        label: "Principles",
        icon: "compass",
        files: [
          { name: "Core Principles", file: "principles-core.html" },
          { name: "Anti-Patterns", file: "principles-anti-patterns.html" },
          { name: "Derivation Guide", file: "principles-derivation-guide.html" },
          { name: "Learning Loops", file: "principles-learning-loops.html" },
          { name: "Principles Index", file: "principles-master.html" }
        ]
      },
      combinations: {
        label: "Combinations",
        icon: "combine",
        files: [
          { name: "Extensions", file: "combinations-extensions.html" },
          { name: "Matrix", file: "combinations-matrix.html" },
          { name: "Pairwise", file: "combinations-pairwise.html" },
          { name: "Triple Plus", file: "combinations-triple-plus.html" },
          { name: "Unexplored", file: "combinations-unexplored.html" },
          { name: "Combinations Index", file: "combinations-master.html" }
        ]
      },
      frontier: {
        label: "Frontier",
        icon: "rocket",
        files: [
          { name: "Innovations", file: "frontier-innovations.html" },
          { name: "International", file: "frontier-international.html" },
          { name: "Mobile", file: "frontier-mobile.html" },
          { name: "Frontier Index", file: "frontier-master.html" }
        ]
      },
      grammar: {
        label: "Grammar",
        icon: "file-text",
        files: [
          { name: "Plugins", file: "grammar-plugins.html" },
          { name: "Syntax", file: "grammar-syntax.html" },
          { name: "Vocabulary", file: "grammar-vocabulary.html" },
          { name: "Grammar Index", file: "grammar-master.html" }
        ]
      },
      technical: {
        label: "Technical",
        icon: "wrench",
        files: [
          { name: "Context Management Advanced", file: "technical-context-management-advanced.html" },
          { name: "Subagent Spawning", file: "technical-subagent-spawning-best-practices.html" }
        ]
      },
      standalone: {
        label: "Core Guides",
        icon: "star",
        files: [
          { name: "Master Playbook", file: "master-playbook.html" },
          { name: "Judgment Guide", file: "judgment-guide.html" },
          { name: "Staff Engineer Mental Model", file: "staff-engineer-mental-model.html" },
          { name: "Boris Workflow", file: "boris-workflow-complete.html" },
          { name: "Ralph Ecosystem", file: "ralph-ecosystem-complete.html" },
          { name: "Multi-Agent CC Mirror", file: "multi-agent-cc-mirror-complete.html" },
          { name: "MCP Ecosystem", file: "mcp-ecosystem-complete.html" },
          { name: "Async Coordination", file: "async-coordination-patterns.html" },
          { name: "Cost Economics", file: "cost-economics-enterprise.html" },
          { name: "Reference Cost Economics", file: "reference-cost-economics.html" },
          { name: "Cross Pattern Migration", file: "cross-pattern-migration.html" },
          { name: "Debugging Agent Failures", file: "debugging-agent-failures.html" },
          { name: "Error Taxonomy Recovery", file: "error-taxonomy-recovery.html" },
          { name: "Infrastructure Stack", file: "infrastructure-stack-blueprint.html" },
          { name: "Integration Memory", file: "integration-memory-patterns.html" },
          { name: "Mobile First Workflows", file: "mobile-first-workflows.html" },
          { name: "Tooling Observability", file: "tooling-observability-guide.html" },
          { name: "Reference Index", file: "reference-master.html" },
          { name: "Synthesis Index", file: "synthesis-index.html" }
        ]
      }
    }
  },
  extractions: {
    label: "Extractions",
    icon: "file-search",
    categories: {
      deep: {
        label: "Deep Dives",
        icon: "microscope",
        files: [
          { name: "Boris Cherny", file: "boris-cherny-extraction.html" },
          { name: "Steve Yegge (Gas Town)", file: "yegge-gas-town-extraction.html" },
          { name: "Molly Panopticon", file: "molly-panopticon-extraction.html" },
          { name: "Dan Shipper", file: "dan-shipper-extraction.html" },
          { name: "Dexter Horthy", file: "dexter-horthy-extraction.html" },
          { name: "Eric Buess", file: "eric-buess-extraction.html" },
          { name: "Jaana Dogan", file: "jaana-dogan-extraction.html" },
          { name: "Kaushik Gopal", file: "kaushik-gopal-extraction.html" },
          { name: "Nader Dabit", file: "nader-dabit-extraction.html" },
          { name: "Vincent Quigley", file: "vincent-quigley-extraction.html" },
          { name: "Reuven Claude Flow", file: "reuven-claude-flow-extraction.html" },
          { name: "CC Mirror", file: "cc-mirror-extraction.html" },
          { name: "Ralph Complete", file: "ralph-complete-extraction.html" },
          { name: "Failure Modes", file: "failure-modes-extraction.html" },
          { name: "Frontier Voices", file: "frontier-voices-extraction.html" }
        ]
      },
      ralph: {
        label: "Ralph Pattern",
        icon: "repeat",
        files: [
          { name: "002 Ralph Loop (Ryan Carson)", file: "002-ralph-loop-ryancarson.html" },
          { name: "003 Ralph Marketer", file: "003-ralph-wiggum-marketer-koylanai.html" },
          { name: "004 Opus Ralph Playwright", file: "004-opus-ralph-playwright-combo-weswinder.html" },
          { name: "005 Ralph Comprehensive (Arvid)", file: "005-ralph-comprehensive-arvidkahl.html" },
          { name: "006 Ralph Video (Matt Pocock)", file: "006-ralph-video-breakdown-mattpocockuk.html" },
          { name: "012 Ralph Text Thread", file: "012-ralph-text-thread-mattpocockuk.html" },
          { name: "013 Ralph 11 Tips", file: "013-ralph-11-tips-guide-mattpocockuk.html" },
          { name: "014 Ralph Implementation", file: "014-ralph-complete-implementation-ryancarson.html" },
          { name: "015 Ralph Compounding", file: "015-ralph-compounding-runs-ryancarson.html" },
          { name: "025 Ralph Original", file: "025-ralph-original.html" },
          { name: "026 Ralph Production", file: "026-ralph-production.html" },
          { name: "029 Lisa Ralph", file: "029-lisa-ralph.html" },
          { name: "030 Zeroshot Ralph", file: "030-zeroshot-ralph.html" },
          { name: "Research Ralph Expanded", file: "research-ralph-expanded.html" }
        ]
      },
      ccmirror: {
        label: "CC Mirror",
        icon: "copy",
        files: [
          { name: "007 CC Mirror Multiagent", file: "007-cc-mirror-multiagent-nummanali.html" },
          { name: "008 CC Mirror Skill Deep", file: "008-cc-mirror-skill-deepdive-nummanali.html" },
          { name: "011 CC Mirror Native", file: "011-cc-mirror-native-orchestration-nummanali.html" },
          { name: "024 CC Mirror Complete", file: "024-cc-mirror-complete.html" },
          { name: "Research CC Mirror Expanded", file: "research-cc-mirror-expanded.html" }
        ]
      },
      gastown: {
        label: "Gas Town",
        icon: "factory",
        files: [
          { name: "009 Gas Town (Steve Yegge)", file: "009-gas-town-steve-yegge.html" },
          { name: "022 Gas Town Deep Dive", file: "022-gas-town-deep-dive.html" },
          { name: "Gas Town 8 Roles", file: "gas-town-complete-8-roles.html" },
          { name: "Research Gas Town Expanded", file: "research-gas-town-expanded.html" }
        ]
      },
      orchestration: {
        label: "Orchestration",
        icon: "network",
        files: [
          { name: "001 Personal Panopticon", file: "001-personal-panopticon-mollycantillon.html" },
          { name: "010 Infinite Orchestra", file: "010-infinite-orchestra-0xsero.html" },
          { name: "016 Frontier Voices", file: "016-new-frontier-voices-discovery.html" },
          { name: "023 Beads Data Plane", file: "023-beads-data-plane.html" },
          { name: "037 Station NATS", file: "037-station-nats.html" },
          { name: "038 Claude 007 Agents", file: "038-claude-007-agents.html" },
          { name: "Research Multi-Agent", file: "research-multi-agent-patterns-expanded.html" },
          { name: "Research Task Decomposition", file: "research-task-decomposition-expanded.html" }
        ]
      },
      infrastructure: {
        label: "Infrastructure",
        icon: "server",
        files: [
          { name: "001 System Mac Remote", file: "001-system-mac-remote-control-burcs.html" },
          { name: "002 Claude SDK Cloudflare", file: "002-claude-sdk-cloudflare-sandboxes-johnturner.html" },
          { name: "003 Chrome MCP", file: "003-chrome-mcp-reverse-engineer-pk_iv.html" },
          { name: "004 System Remote Mac", file: "004-system-remote-mac.html" },
          { name: "005 Agentic Flow Deploy", file: "005-agentic-flow-deploy.html" },
          { name: "006 Kimaki Discord", file: "006-kimaki-discord.html" }
        ]
      },
      mobility: {
        label: "Mobile",
        icon: "smartphone",
        files: [
          { name: "001 Mobile Claude Code", file: "001-mobile-claude-code-dabit3.html" },
          { name: "002 Mobile Setup", file: "002-mobile-setup-implementation-omarsar0.html" },
          { name: "003 Replit Mobile Vibe", file: "003-replit-mobile-vibe-coding-itspaulai.html" },
          { name: "005 Superconductor iOS", file: "005-superconductor-ios.html" },
          { name: "Research Mobile Workflows", file: "research-mobile-workflows-expanded.html" }
        ]
      }
    }
  }
};

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  return filename;
}

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/extractions/spotlight/')) {
    return '../../synthesis/';
  } else if (path.includes('/synthesis/')) {
    return '../extractions/spotlight/';
  }
  return '';
}

function generateNavHTML() {
  const currentPage = getCurrentPage();
  const path = window.location.pathname;
  const inSynthesis = path.includes('/synthesis/');
  const inExtractions = path.includes('/extractions/');
  const isRoot = path.endsWith('index.html') || path.endsWith('/html-site/') || path === '/';

  // Determine base paths based on current location
  let synthesisBase = 'synthesis/';
  let extractionsBase = 'extractions/spotlight/';

  if (inSynthesis) {
    synthesisBase = '';
    extractionsBase = '../extractions/spotlight/';
  } else if (inExtractions) {
    synthesisBase = '../../synthesis/';
    extractionsBase = '';
  }

  let html = '';

  // Synthesis Section
  html += `<div class="nav-group">
    <div class="nav-group-header" onclick="toggleNavGroup(this)">
      <i data-lucide="book-open" class="w-4 h-4"></i>
      <span>Synthesis</span>
      <i data-lucide="chevron-down" class="w-4 h-4 ml-auto nav-chevron"></i>
    </div>
    <div class="nav-group-content ${inSynthesis || isRoot ? 'expanded' : ''}">`;

  for (const [catKey, cat] of Object.entries(NAV_DATA.synthesis.categories)) {
    const hasActivePage = cat.files.some(f => f.file === currentPage);
    html += `<div class="nav-section ${hasActivePage ? 'expanded' : ''}" data-section="${catKey}">
      <div class="nav-section-header ${hasActivePage ? 'active' : ''}" onclick="toggleSection(this)">
        <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
        <span>${cat.label}</span>
        <i data-lucide="chevron-right" class="w-4 h-4 nav-chevron ml-auto"></i>
      </div>
      <div class="nav-children ${hasActivePage ? 'expanded' : ''}">`;

    for (const file of cat.files) {
      const isActive = file.file === currentPage;
      const href = synthesisBase + file.file;
      html += `<a href="${href}" class="nav-item ${isActive ? 'active' : ''}">${file.name}</a>`;
    }

    html += `</div></div>`;
  }

  html += `</div></div>`;

  // Extractions Section
  html += `<div class="nav-group">
    <div class="nav-group-header" onclick="toggleNavGroup(this)">
      <i data-lucide="file-search" class="w-4 h-4"></i>
      <span>Extractions</span>
      <i data-lucide="chevron-down" class="w-4 h-4 ml-auto nav-chevron"></i>
    </div>
    <div class="nav-group-content ${inExtractions ? 'expanded' : ''}">`;

  for (const [catKey, cat] of Object.entries(NAV_DATA.extractions.categories)) {
    const hasActivePage = cat.files.some(f => f.file === currentPage);
    html += `<div class="nav-section ${hasActivePage ? 'expanded' : ''}" data-section="${catKey}">
      <div class="nav-section-header ${hasActivePage ? 'active' : ''}" onclick="toggleSection(this)">
        <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
        <span>${cat.label}</span>
        <i data-lucide="chevron-right" class="w-4 h-4 nav-chevron ml-auto"></i>
      </div>
      <div class="nav-children ${hasActivePage ? 'expanded' : ''}">`;

    for (const file of cat.files) {
      const isActive = file.file === currentPage;
      const href = extractionsBase + file.file;
      html += `<a href="${href}" class="nav-item ${isActive ? 'active' : ''}">${file.name}</a>`;
    }

    html += `</div></div>`;
  }

  html += `</div></div>`;

  return html;
}

function toggleNavGroup(header) {
  const content = header.nextElementSibling;
  content.classList.toggle('expanded');
  header.querySelector('.nav-chevron').style.transform =
    content.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleSection(header) {
  const section = header.closest('.nav-section');
  const children = section.querySelector('.nav-children');
  section.classList.toggle('expanded');
  children.classList.toggle('expanded');
  const chevron = header.querySelector('.nav-chevron');
  if (chevron) {
    chevron.style.transform = section.classList.contains('expanded') ? 'rotate(90deg)' : 'rotate(0deg)';
  }
}

// Initialize nav on page load
document.addEventListener('DOMContentLoaded', function() {
  const leftNav = document.getElementById('leftNav');
  if (leftNav) {
    // Find or create nav content container
    let navContent = leftNav.querySelector('.nav-content');
    if (!navContent) {
      navContent = document.createElement('div');
      navContent.className = 'nav-content';
      leftNav.appendChild(navContent);
    }
    navContent.innerHTML = generateNavHTML();

    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
});

// Additional CSS for nav groups
const navStyles = document.createElement('style');
navStyles.textContent = `
  .nav-group {
    margin-bottom: 8px;
  }
  .nav-group-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    font-size: 13px;
    font-weight: 600;
    color: #18181b;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.15s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .nav-group-header:hover {
    background: #f4f4f5;
  }
  .nav-group-content {
    display: none;
    padding-left: 8px;
  }
  .nav-group-content.expanded {
    display: block;
  }
  .nav-content {
    padding: 8px;
  }
`;
document.head.appendChild(navStyles);
