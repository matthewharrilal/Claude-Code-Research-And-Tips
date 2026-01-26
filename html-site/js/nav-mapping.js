/**
 * Navigation Name Mapping
 * Maps file names to content-based display titles
 *
 * Format: 'filename.html': 'Display Title'
 */

const NAV_TITLES = {
  // === CORE GUIDES ===
  'master-playbook.html': 'The Complete Playbook',
  'judgment-guide.html': 'Decision Framework',
  'staff-engineer-mental-model.html': 'Staff Engineer Mindset',

  // === ARCHITECTURE ===
  'architecture-complexity-ladder.html': 'Complexity Ladder',
  'architecture-composition-rules.html': 'Pattern Composition Rules',
  'architecture-domain-isolation.html': 'Domain Isolation',
  'architecture-primitives.html': 'Architecture Primitives',
  'architecture-swarm-topologies.html': 'Swarm Topologies',

  // === PATTERN MASTERY ===
  'mastery-ralph-complete.html': 'The Ralph Pattern',
  'mastery-gastown-complete.html': 'Gas Town Architecture',
  'mastery-ccmirror-complete.html': 'CC Mirror Orchestration',
  'mastery-context-management.html': 'Context Management',
  'mastery-multi-agent.html': 'Multi-Agent Systems',

  // === ORCHESTRATION GUIDES ===
  'ralph-ecosystem-complete.html': 'Ralph Ecosystem',
  'multi-agent-cc-mirror-complete.html': 'CC Mirror Deep Dive',
  'boris-workflow-complete.html': 'Boris Cherny Workflow',
  'mcp-ecosystem-complete.html': 'MCP Server Ecosystem',

  // === CHOOSING APPROACHES ===
  'compare-orchestration.html': 'Orchestration Comparison',
  'compare-architecture.html': 'Architecture Comparison',
  'compare-memory.html': 'Memory Strategy Comparison',
  'compare-cost.html': 'Cost Analysis',
  'compare-observability.html': 'Observability Options',
  'compare-enterprise-orchestration.html': 'Enterprise Orchestration',
  'compare-opencode-alternatives.html': 'Open Source Alternatives',
  'compare-ralph-variants-complete.html': 'Ralph Variants',

  // === PATTERN CLASSIFICATION ===
  'taxonomy-architectures.html': 'Architecture Patterns',
  'taxonomy-orchestration.html': 'Orchestration Patterns',
  'taxonomy-tools.html': 'Tool Categories',
  'taxonomy-workflows.html': 'Workflow Types',
  'taxonomy-context-memory.html': 'Context & Memory Types',
  'taxonomy-deployment.html': 'Deployment Options',
  'taxonomy-cross-reference.html': 'Pattern Cross-Reference',
  'taxonomy-enterprise-agents.html': 'Enterprise Agent Types',
  'taxonomy-skills-expanded.html': 'Skills Reference',

  // === TRANSFORMATIONS ===
  'transform-single-to-autonomous.html': 'Single to Autonomous',
  'transform-prompt-to-agent.html': 'Prompt to Agent',
  'transform-generalist-to-swarm.html': 'Generalist to Swarm',
  'transform-manual-to-filesystem.html': 'Manual to Filesystem',

  // === PRINCIPLES ===
  'principles-core.html': 'Core Principles',
  'principles-anti-patterns.html': 'Anti-Patterns',
  'principles-derivation-guide.html': 'Deriving Principles',
  'principles-learning-loops.html': 'Learning Loops',

  // === PATTERN COMBINATIONS ===
  'combinations-matrix.html': 'Combination Matrix',
  'combinations-pairwise.html': 'Pairwise Combinations',
  'combinations-extensions.html': 'Pattern Extensions',
  'combinations-triple-plus.html': 'Complex Combinations',
  'combinations-unexplored.html': 'Unexplored Territory',

  // === FRONTIER ===
  'frontier-innovations.html': 'Cutting Edge Innovations',
  'frontier-international.html': 'International Patterns',
  'frontier-mobile.html': 'Mobile-First Workflows',

  // === GRAMMAR ===
  'grammar-syntax.html': 'Prompt Syntax',
  'grammar-vocabulary.html': 'Pattern Vocabulary',
  'grammar-plugins.html': 'Plugin System',

  // === TECHNICAL ===
  'technical-context-management-advanced.html': 'Advanced Context Techniques',
  'technical-subagent-spawning-best-practices.html': 'Subagent Best Practices',

  // === REFERENCE ===
  'reference-cost-economics.html': 'Cost Economics Reference',

  // === SPOTLIGHT/EXTRACTION FILES ===
  // Creator Deep Dives
  'boris-cherny-extraction.html': 'Boris Cherny (Creator)',
  'yegge-extraction.html': 'Steve Yegge',
  'molly-cantillon-extraction.html': 'Molly Cantillon',
  'dan-shipper-extraction.html': 'Dan Shipper',
  'jaana-dogan-extraction.html': 'Jaana Dogan',
  'eric-buess-extraction.html': 'Eric Buess',
  'vincent-quigley-extraction.html': 'Vincent Quigley',

  // Ralph Pattern Studies
  'research-ralph-expanded.html': 'Ralph Research',
  'gas-town-complete-8-roles.html': 'Gas Town 8 Roles',

  // Numbered Files (use descriptive titles from content)
  '001-ralph-overnight-poc.html': 'Ralph Overnight POC',
  '002-mobile-setup-implementation.html': 'Mobile Setup Guide',
  '003-chrome-mcp-reverse-engineer.html': 'Chrome MCP Reverse Engineering',
  '003-ralph-wiggum-marketer.html': 'Ralph Marketer Variant',
  '003-replit-mobile-vibe-coding.html': 'Replit Mobile Workflow',
  '005-agentic-flow-deploy.html': 'Agentic Flow Deployment',
  '005-superconductor-ios.html': 'Superconductor iOS',
  '011-cc-mirror-native-orchestration.html': 'CC Mirror Native Orchestration',
  '016-new-frontier-voices-discovery.html': 'Frontier Voices',
  '038-claude-007-agents.html': 'Claude 007 Agents',

  // Research Files
  'research-mobile-workflows-expanded.html': 'Mobile Workflows Research',
  'research-multi-agent-patterns-expanded.html': 'Multi-Agent Research',
  'research-task-decomposition-expanded.html': 'Task Decomposition Research',
  'failure-modes-extraction.html': 'Failure Modes Analysis'
};

/**
 * Get display title for a file
 * Falls back to formatted filename if not in mapping
 */
function getNavTitle(filename) {
  if (NAV_TITLES[filename]) {
    return NAV_TITLES[filename];
  }
  // Fallback: convert filename to title case
  return filename
    .replace('.html', '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Navigation categories with files
 * Used to build the left nav structure
 */
const NAV_STRUCTURE = {
  'Core Guides': [
    'master-playbook.html',
    'judgment-guide.html',
    'staff-engineer-mental-model.html'
  ],
  'Architecture Patterns': [
    'architecture-complexity-ladder.html',
    'architecture-composition-rules.html',
    'architecture-domain-isolation.html',
    'architecture-primitives.html',
    'architecture-swarm-topologies.html'
  ],
  'Pattern Mastery': [
    'mastery-ralph-complete.html',
    'mastery-gastown-complete.html',
    'mastery-ccmirror-complete.html',
    'mastery-context-management.html',
    'mastery-multi-agent.html'
  ],
  'Choosing Approaches': [
    'compare-orchestration.html',
    'compare-architecture.html',
    'compare-memory.html',
    'compare-cost.html',
    'compare-ralph-variants-complete.html'
  ],
  'Transformations': [
    'transform-single-to-autonomous.html',
    'transform-prompt-to-agent.html',
    'transform-generalist-to-swarm.html',
    'transform-manual-to-filesystem.html'
  ],
  'Core Principles': [
    'principles-core.html',
    'principles-anti-patterns.html',
    'principles-derivation-guide.html',
    'principles-learning-loops.html'
  ],
  'Pattern Combinations': [
    'combinations-matrix.html',
    'combinations-pairwise.html',
    'combinations-extensions.html',
    'combinations-triple-plus.html'
  ],
  'Frontier Research': [
    'frontier-innovations.html',
    'frontier-international.html',
    'frontier-mobile.html'
  ],
  'Technical Deep Dives': [
    'technical-context-management-advanced.html',
    'technical-subagent-spawning-best-practices.html',
    'boris-workflow-complete.html',
    'mcp-ecosystem-complete.html'
  ],
  'Creator Insights': [
    'boris-cherny-extraction.html',
    'yegge-extraction.html',
    'molly-cantillon-extraction.html',
    'dan-shipper-extraction.html'
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NAV_TITLES, getNavTitle, NAV_STRUCTURE };
}
