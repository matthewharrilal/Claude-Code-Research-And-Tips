<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/dependency-trace/02-threading-data/design-extraction-threading.md
Tier: B | Batch: 10 | Generated: 2026-02-06

1. WHY THIS EXISTS
Documents threading data for all 350 design-extraction/ project files. Provides
full per-file records for the 6 T1 synthesis files and 7 tracking files (most
critical), and group-level threading for repetitive directories (archive/,
font-research/, sub-agent analyses). Includes 4 supersession chains documenting
how token/soul/anti-pattern knowledge evolved through the extraction phases.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| design-extraction-analysis.md (Agent BETA) | Raw analysis data for 350 files    |
| cross-pollination-investigation.md      | Cross-directory edge verification      |
| All 350 design-extraction/ project files | Subjects of threading analysis        |

6. MUST HONOR
- Threading readiness is 82% (287/350 ready, 63 not ready)
- T1 synthesis (6 files) and tracking (7 files) have full individual records
- Group-level threading is used for directories with repetitive structure
- 4 supersession chains must be preserved (Typography, Soul, Anti-Pattern, Perceptual Audit)

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Phase 2B threading header work          | Primary source for design-extraction headers |
| PHASE-2B-BATCH-MANIFEST.md             | References as Batch 10 file #160      |
| 06-threading-summary.md                 | Aggregates readiness percentages       |
| Future agents writing d-extraction headers | Lookup for threading data           |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# Threading Data -- design-extraction/ (350 project files)

**Generated:** 2026-02-05
**Source analysis:** design-extraction-analysis.md (Agent BETA)
**Cross-ref:** cross-pollination-investigation.md

**Note:** Given the massive scale (350 files), this document provides FULL threading records for the 6 T1 synthesis files and 7 tracking files (the most critical), and GROUP-LEVEL threading for directories with repetitive structure (archive/, font-research/, sub-agent analyses).

---

## 1. ROOT LEVEL (2 files)

### CLAUDE.md
- source: N/A (authored as navigation file for Phase 1-3)
- built_on: typography-system/ files, card-system/ files, font-research/ results, 10 soul principles
- cited: all agents entering design-extraction/ read this first
- mandatory_for: agent navigation; defines Phase 1-3 context
- threading_ready: YES
- threading_gaps: none (but STALE: does not cover Phase 4 perceptual-audit-v2 or the 6 T1 synthesis files)

### README.md
- source: N/A (authored as external-facing entry point)
- built_on: phase progress documentation, typography-system/ overview, archive/ supersession markers
- cited: external readers, design-extraction/CLAUDE.md
- mandatory_for: entry point for external readers
- threading_ready: YES
- threading_gaps: none (but stale phase table: "Phase 3: Color System" as NEXT is outdated)

---

## 2. typography-system/ (6 files)

### typography.css
- source: font-research/FINAL-DECISION.md (Instrument Serif decision)
- built_on: FINAL-DECISION.md (font choice), type-scale.css, stroke-treatments.css, typography-components.css (imports)
- cited: card-system (CSS variables originated here), component-system (CSS variables), DESIGN-TOKEN-SUMMARY.md (T1 synthesis copies exact values)
- mandatory_for: ALL downstream CSS: font stack 'Instrument Serif', Georgia, serif established here
- threading_ready: YES
- threading_gaps: none

### type-scale.css
- source: typography research (type scale decisions)
- built_on: 16px base, clamp() responsive methodology
- cited: DESIGN-TOKEN-SUMMARY.md (T1 synthesis), component-system CSS
- mandatory_for: type scale tokens (--text-xs through --text-display, --leading-*, --tracking-*)
- threading_ready: YES
- threading_gaps: none

### stroke-treatments.css
- source: Sanrok website analysis (filled/outline text mixing)
- built_on: Sanrok signature treatment analysis
- cited: DESIGN-TOKEN-SUMMARY.md (T1 synthesis)
- mandatory_for: filled/outline text system (origin definition)
- threading_ready: YES
- threading_gaps: none

### typography-components.css
- source: typography system requirements (semantic classes)
- built_on: typography.css (imports variables)
- cited: typography-system/index.html
- mandatory_for: semantic component classes (.typo-hero, .typo-display-*)
- threading_ready: YES
- threading_gaps: none

### index.html
- source: typography-components.css, typography.css
- built_on: all typography CSS files
- cited: visual verification, Playwright tests
- mandatory_for: typography system demo
- threading_ready: YES
- threading_gaps: none

### PROGRESS.md
- source: N/A (process documentation)
- built_on: all typography system files (references)
- cited: none direct
- mandatory_for: process documentation
- threading_ready: NO
- threading_gaps: cited field empty

---

## 3. font-research/ (20 files) -- GROUP-LEVEL THREADING

### Group: font-research/
- source: Sanrok website screenshots, Google Fonts analysis, external font specimens
- built_on: initial extraction/image analysis (archive/extraction/), web font databases
- cited: CLAUDE.md (design-extraction root), typography-system/typography.css (font decision consumed)
- mandatory_for: FINAL-DECISION.md -> typography-system/typography.css -> ALL downstream CSS
- threading_ready: YES (group level)
- threading_gaps: none

### FINAL-DECISION.md (key file detail)
- source: letterform-analysis.md, classification-research.md, identification-results.md, feasibility.md, specimens/, comparisons/
- built_on: all 19 other font-research files (consolidated decision)
- cited: CLAUDE.md (design-extraction root), typography-system/typography.css (font stack choice)
- mandatory_for: Instrument Serif = actual Sanrok font decision (30/40 match score)
- threading_ready: YES
- threading_gaps: none

### Remaining 19 files (specimens/, comparisons/, research .md)
- source: external font analysis
- built_on: Sanrok website screenshots, font databases
- cited: FINAL-DECISION.md (all feed into this)
- mandatory_for: research evidence for font decision
- threading_ready: YES (group level)
- threading_gaps: none

---

## 4. card-system/ (35 project files)

### SOUL-DEFINITION.md (card-system)
- source: card-system/research/3A-3D (4 parallel research agents)
- built_on: 10 soul principles extracted from card research, research/3A-card-anatomy.md, research/3B-anti-patterns.md, research/3C-halftone-techniques.md, research/3D-editorial-patterns.md
- cited: card.css (line 3: "Source of truth: SOUL-DEFINITION.md"), card-system tests, component-system/SOUL-DEFINITION.md (expanded version)
- mandatory_for: ORIGIN of 10 soul principles -> component-system/SOUL-DEFINITION.md -> MASTER-SOUL-SYNTHESIS.md (T1)
- threading_ready: YES
- threading_gaps: none (but SUPERSEDED at system level by component-system/SOUL-DEFINITION.md)

### card.css
- source: SOUL-DEFINITION.md (card-system)
- built_on: SOUL-DEFINITION.md (reference line 3), typography-system CSS variables
- cited: card-system/index.html
- mandatory_for: card component CSS implementation
- threading_ready: YES
- threading_gaps: none

### research/ (4 files) -- GROUP
- source: external research (card anatomy, anti-patterns, halftone techniques, editorial patterns)
- built_on: competitive analysis, design pattern research
- cited: SOUL-DEFINITION.md (card-system), component-system/ANTI-PATTERNS.md (3B specifically)
- mandatory_for: foundational research for soul principles
- threading_ready: YES (group level)
- threading_gaps: none

### css/ (7 files) -- GROUP
- source: SOUL-DEFINITION.md principles
- built_on: halftone techniques research, experimental CSS
- cited: card-system/experiments/ HTML files
- mandatory_for: halftone CSS implementation
- threading_ready: YES (group level)
- threading_gaps: none

### experiments/ (21 files) -- GROUP
- source: card.css, css/halftone.css, css/experiments/*.css
- built_on: experimental journey from concept to implementation
- cited: none direct (experimental artifacts)
- mandatory_for: experimental provenance (low priority for tracing)
- threading_ready: NO (group level)
- threading_gaps: cited field empty (experimental artifacts rarely cited)

### PROGRESS.md, index.html (2 support files)
- source: card-system work
- built_on: all card-system files
- cited: none direct (PROGRESS.md); card.css consumers (index.html)
- mandatory_for: process documentation, visual demo
- threading_ready: NO (PROGRESS.md), YES (index.html)
- threading_gaps: PROGRESS.md cited field empty

---

## 5. component-system/ (241 project files)

### 5.1 Root-level files (7 files)

### SOUL-DEFINITION.md (component-system)
- source: card-system/SOUL-DEFINITION.md (expanded from 10 principles to 6 universal rules + component-specific rules)
- built_on: card-system/SOUL-DEFINITION.md (10 soul principles), 11 component analyses, perceptual-audit-v2 results
- cited: ALL component-system/css/ files (reference this), ALL SOUL-EXTRACTION-COMPLETE.md files, PRODUCTION-RULES.md, MASTER-SOUL-SYNTHESIS.md (T1)
- mandatory_for: central authority document (58KB); 6 Universal Rules definition
- threading_ready: YES
- threading_gaps: none (note: MASTER-SOUL-SYNTHESIS.md T1 distills this into 16KB)

### ANTI-PATTERNS.md (component-system)
- source: card-system/research/3B-anti-patterns.md (expanded)
- built_on: 3B-anti-patterns.md research, 11 component audits
- cited: ANTI-PATTERNS-REGISTRY.md (T1 synthesis -- condensed version)
- mandatory_for: comprehensive anti-pattern documentation (56KB); SUPERSEDED by ANTI-PATTERNS-REGISTRY.md (T1) for authority
- threading_ready: YES
- threading_gaps: none (but partially superseded)

### PROGRESS.md, index.html, showcase-all.html, showcase-nested.html, anti-pattern-comparison.html (5 support files)
- source: component-system work
- built_on: component CSS files, SOUL-DEFINITION.md
- cited: none direct (demo/support artifacts)
- mandatory_for: demo showcases and process tracking
- threading_ready: NO (group level)
- threading_gaps: cited fields empty

---

### 5.2 component-system/css/ (9 files)

### variables.css
- source: SOUL-DEFINITION.md (component-system) -- CSS comment lines 5-8: "These values define the SOUL... Reference: SOUL-DEFINITION.md"
- built_on: SOUL-DEFINITION.md (component-system), typography-system CSS variables
- cited: ALL component HTML files, all showcase files
- mandatory_for: CSS variable origin for component system (root custom properties)
- threading_ready: YES
- threading_gaps: none

### callouts.css, code-block.css, ascii-dither.css, components.css, progression.css, decision-matrix.css, file-tree.css, core-abstraction.css (8 implementation files)
- source: SOUL-DEFINITION.md (component-system) sections
- built_on: variables.css (CSS custom properties), SOUL-DEFINITION.md (section-specific rules)
- cited: component HTML files, showcase demos
- mandatory_for: implementation CSS for specific components
- threading_ready: YES (group level)
- threading_gaps: none

---

### 5.3 component-system/components/ (13 HTML files) -- GROUP
- source: component-system/css/*.css files, SOUL-DEFINITION.md (sections)
- built_on: corresponding css/ files, variables.css, SOUL-DEFINITION.md section references
- cited: perceptual-audit-v2/ audit processes, showcase demos
- mandatory_for: HTML component implementations (rendered demos)
- threading_ready: YES (group level)
- threading_gaps: none

---

### 5.4 component-system/archive/ (36 files)

#### archive/perceptual-audit-phase-2.5/ (7 files) -- GROUP
- source: initial perceptual deepening methodology, 11 component analyses
- built_on: component-system/ soul extraction early work
- cited: perceptual-audit-v2/ (consumed and refined into T1 synthesis)
- mandatory_for: HISTORICAL: SOUL-DISCOVERIES.md defined 7 soul pieces here (later refined to 5); ORIGIN of perceptual deepening protocol
- threading_ready: YES (group level)
- threading_gaps: none (but SUPERSEDED by perceptual-audit-v2/)

#### archive/research-phase-3/ (9 files) -- GROUP
- source: parallel research agents (external research: ASCII art, code blocks, callouts, editorial, brutalist, file trees, progressions, decision matrices, core abstractions)
- built_on: external competitive analysis, design pattern databases
- cited: component-system/css/*.css (research consumed), component HTML files
- mandatory_for: deep research provenance for component design (~350KB across 9 files)
- threading_ready: YES (group level)
- threading_gaps: none (but SUPERSEDED/ARCHIVED)

#### archive/validation-sprint/ (18 files) -- GROUP
- source: soul principle validation experiments
- built_on: SOUL-DEFINITION.md (card-system), validation methodology
- cited: SOUL-DEFINITION.md (component-system) consumed validation results
- mandatory_for: validation provenance for soul principles
- threading_ready: YES (group level)
- threading_gaps: none (ARCHIVED)

---

### 5.5 component-system/perceptual-audit-v2/ (176 files) -- THE CORE

#### 5.5.1 synthesis/ (6 files) -- T1 FOUNDATION FILES (FULL RECORDS)

### MASTER-SOUL-SYNTHESIS.md
- source: tracking/PERCEPTUAL-TRUTHS.md + all component re-audits
- built_on: PERCEPTUAL-TRUTHS.md (raw perceptual truth data for 11 components), SOUL-DEFINITION.md (component-system, 6 universal rules), all SOUL-EXTRACTION-COMPLETE.md files, all re-audit files
- cited: showcase/checkpoints/MASTER-STATE.md (reference), showcase/knowledge-architecture/KA-POSITION.md (maps soul pieces to this), showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md (T1 listing), showcase/DESIGN-SYSTEM/provenance/stage-1-components/ (soul definition source), showcase/knowledge-architecture/PIPELINE-BACKBONE.md
- mandatory_for: THE authoritative soul definition; "The Unhurried Editor" master soul statement; 6 Universal Rules with locked CSS values; type hierarchy; palette; ALL downstream soul-constrained work in showcase
- threading_ready: YES
- threading_gaps: none

### DESIGN-TOKEN-SUMMARY.md
- source: tracking/COLOR-TOKENS.md, tracking/TYPOGRAPHY-TOKENS.md, tracking/SPACING-TOKENS.md, tracking/CONTAINER-TOKENS.md (4 tracking sheets consolidated)
- built_on: COLOR-TOKENS.md, TYPOGRAPHY-TOKENS.md, SPACING-TOKENS.md, CONTAINER-TOKENS.md, typography-system/type-scale.css (type scale values), typography-system/typography.css (font stack)
- cited: showcase/FINDINGS-INDEX.md (line 278, explicit source citation), showcase/explorations/density/DD-001 through DD-006 (CSS comment: "LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md"), showcase/DESIGN-SYSTEM/tokens/colors.md (values copied), showcase/DESIGN-SYSTEM/tokens/typography.md, showcase/DESIGN-SYSTEM/tokens/spacing.md, showcase/DESIGN-SYSTEM/tokens/geometry.md, showcase/DESIGN-SYSTEM/QUICK-START.md, showcase/checkpoints/MASTER-STATE.md
- mandatory_for: complete :root {} block with EVERY locked CSS variable; CSS-ready version of the soul; ALL downstream token usage in showcase
- threading_ready: YES
- threading_gaps: none

### CHARACTER-FAMILY-COMPLETE.md
- source: tracking/NAMED-CHARACTERS.md + all component re-audit character findings
- built_on: NAMED-CHARACTERS.md (11 characters), all SOUL-EXTRACTION-COMPLETE.md files (soul scores), component re-audits
- cited: showcase/DESIGN-SYSTEM/components/OVERVIEW.md (condensed + enriched derivative), showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md (T1 listing), showcase/research/R5-COMBINATION-THEORY.md (line 710-712, direct file path reference)
- mandatory_for: all 11 component characters with soul scores (48.5-54/60), mantras, archetypes, structural signatures; character-driven component audits
- threading_ready: YES
- threading_gaps: none

### PRODUCTION-RULES.md
- source: tracking sheets + SOUL-DEFINITION.md (component-system)
- built_on: SOUL-DEFINITION.md (6 Universal Rules), tracking/COLOR-TOKENS.md, tracking/TYPOGRAPHY-TOKENS.md, tracking/ANTI-PATTERNS.md (banned properties)
- cited: showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md (T1 listing), showcase/DESIGN-SYSTEM/ (general implementation guidelines)
- mandatory_for: 6 Universal Rules with correct/wrong CSS examples; explicit enforcement rules; new component checklist
- threading_ready: YES
- threading_gaps: none

### ANTI-PATTERNS-REGISTRY.md
- source: tracking/ANTI-PATTERNS.md + component-system/ANTI-PATTERNS.md (root, 56KB -- consolidated)
- built_on: tracking/ANTI-PATTERNS.md, ANTI-PATTERNS.md (root, 55,870 bytes), component-specific anti-pattern findings
- cited: showcase/FINDINGS-INDEX.md (line 351, explicit source citation), showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md (T1 listing), showcase/DESIGN-SYSTEM/anti-patterns/registry.md (condensed + reorganized derivative)
- mandatory_for: "The Soul Test" -- universal banned properties, component-specific anti-patterns; anti-pattern enforcement authority
- threading_ready: YES
- threading_gaps: none

### CONSISTENCY-VERIFICATION.md
- source: 11 component audits, re-audit results
- built_on: 10-point universal verification checklist derived from all component analyses, 11 component-specific checklists
- cited: showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md (T1 listing), showcase/DESIGN-SYSTEM/ (general verification checklists)
- mandatory_for: QA/verification processes; pass criteria for each check
- threading_ready: YES
- threading_gaps: none

---

#### 5.5.2 tracking/ (7 files) -- T1 SUPPORTING DATA (FULL RECORDS)

### PERCEPTUAL-TRUTHS.md
- source: 11 component perceptual audit results
- built_on: all 11 SOUL-EXTRACTION-COMPLETE.md files, sub-agent analyses (84 files across 7 components), 4 minimal component audits
- cited: MASTER-SOUL-SYNTHESIS.md (T1 -- direct source)
- mandatory_for: raw perceptual truth data for all 11 components; foundation for T1 synthesis
- threading_ready: YES
- threading_gaps: none

### NAMED-CHARACTERS.md
- source: 11 component NAMED-CHARACTER-DERIVATION.md sub-agent analyses
- built_on: 7 full NAMED-CHARACTER-DERIVATION.md files, 4 minimal component character definitions
- cited: CHARACTER-FAMILY-COMPLETE.md (T1)
- mandatory_for: character name source data for all 11 components
- threading_ready: YES
- threading_gaps: none

### COLOR-TOKENS.md
- source: 11 component ZONE-COLOR-ANALYSIS.md sub-agent analyses
- built_on: 7 full ZONE-COLOR-ANALYSIS.md files, 4 minimal component color data
- cited: DESIGN-TOKEN-SUMMARY.md (T1), showcase/checkpoints/MASTER-STATE.md (reference listing)
- mandatory_for: color token source data; consolidated color findings
- threading_ready: YES
- threading_gaps: none (note: some drift between this and showcase tokens for accent-amber, accent-purple, bg-info, bg-tip)

### TYPOGRAPHY-TOKENS.md
- source: 11 component ZONE-TYPOGRAPHY-ANALYSIS.md sub-agent analyses
- built_on: 7 full ZONE-TYPOGRAPHY-ANALYSIS.md files, typography-system/ CSS files
- cited: DESIGN-TOKEN-SUMMARY.md (T1), showcase/checkpoints/MASTER-STATE.md (reference listing)
- mandatory_for: typography token source data
- threading_ready: YES
- threading_gaps: none

### SPACING-TOKENS.md
- source: 11 component ZONE-SPACING-ANALYSIS.md sub-agent analyses
- built_on: 7 full ZONE-SPACING-ANALYSIS.md files
- cited: DESIGN-TOKEN-SUMMARY.md (T1), showcase/checkpoints/MASTER-STATE.md (reference listing)
- mandatory_for: spacing token source data
- threading_ready: YES
- threading_gaps: none

### CONTAINER-TOKENS.md
- source: 11 component ZONE-CONTAINERS-ANALYSIS.md sub-agent analyses
- built_on: 7 full ZONE-CONTAINERS-ANALYSIS.md files
- cited: DESIGN-TOKEN-SUMMARY.md (T1), showcase/checkpoints/MASTER-STATE.md (reference listing)
- mandatory_for: container token source data
- threading_ready: YES
- threading_gaps: none

### ANTI-PATTERNS.md (tracking)
- source: 11 component ANTI-PATTERN-ANALYSIS.md sub-agent analyses
- built_on: 7 full ANTI-PATTERN-ANALYSIS.md files
- cited: ANTI-PATTERNS-REGISTRY.md (T1), PRODUCTION-RULES.md (T1)
- mandatory_for: anti-pattern source data
- threading_ready: YES
- threading_gaps: none

---

#### 5.5.3 foundation/ (2 files) -- FULL RECORDS

### KORTAI-ESSENCE-FOUNDATION.md
- source: card-system soul principles, perceptual deepening results
- built_on: card-system/SOUL-DEFINITION.md, archive/perceptual-audit-phase-2.5/SOUL-DISCOVERIES.md (7 soul pieces)
- cited: all audit processes (philosophical foundation)
- mandatory_for: core KortAI philosophy; SOUL TRANSLATION GUIDE design tokens; Master KortAI Soul statement
- threading_ready: YES
- threading_gaps: none

### SOUL-TRANSLATION-GUIDE.md
- source: KORTAI-ESSENCE-FOUNDATION.md (soul-to-CSS translation)
- built_on: KORTAI-ESSENCE-FOUNDATION.md, SOUL-DEFINITION.md (component-system)
- cited: showcase/knowledge-architecture/PIPELINE-BACKBONE.md, showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md
- mandatory_for: agents translating soul principles to CSS implementations
- threading_ready: YES
- threading_gaps: none

---

#### 5.5.4 components/ (102 files) -- GROUP-LEVEL THREADING

**7 fully-analyzed components (14 files each = 98 files):**
challenge-callout, code-snippet, essence-callout, file-tree, gotcha-callout, info-callout, tip-callout

Per-component group threading:

### [component]/component-*.html
- source: component-system/css/*.css, component-system/components/*.html (production versions)
- built_on: corresponding css/ file, variables.css, SOUL-DEFINITION.md
- cited: Playwright tests, visual audit processes, screenshot captures
- mandatory_for: rendered component demo for audit process
- threading_ready: YES (per component)

### [component]/SOUL-EXTRACTION-COMPLETE.md
- source: 12 sub-agent analyses (this component)
- built_on: all sub-agent analyses for this component
- cited: tracking/PERCEPTUAL-TRUTHS.md, synthesis/CHARACTER-FAMILY-COMPLETE.md, soul-extractions/ summary files
- mandatory_for: final soul extraction for this component
- threading_ready: YES (per component)

### [component]/sub-agent-analyses/ (12 files per component)
- source: component HTML (visual audit target), SOUL-DEFINITION.md (audit criteria)
- built_on: component HTML, SOUL-DEFINITION.md, KORTAI-ESSENCE-FOUNDATION.md
- cited: SOUL-EXTRACTION-COMPLETE.md (same component), tracking/ files (corresponding zone analysis)
- mandatory_for: zone-by-zone audit data feeding into SOUL-EXTRACTION-COMPLETE.md and tracking/ files
- threading_ready: YES (per component group)
- threading_gaps: none

**4 minimal-analysis components (2 files each = 8 files):**
core-abstraction, decision-matrix, reasoning-component, task-component

### [minimal-component]/component-*.html + SOUL-EXTRACTION-COMPLETE.md
- source: component-system/components/*.html, re-audit results
- built_on: corresponding component implementations, re-audit process
- cited: tracking/PERCEPTUAL-TRUTHS.md, synthesis/CHARACTER-FAMILY-COMPLETE.md
- mandatory_for: soul extraction for this component (audited through re-audit process)
- threading_ready: YES (per component)

**Info-callout structural note:** Has hybrid structure -- zone analyses at component root instead of inside sub-agent-analyses/ (only ZONE-TYPOGRAPHY-ANALYSIS.md is inside). Threading data is equivalent.

---

#### 5.5.5 soul-extractions/ (11 files) -- GROUP
- source: components/[component]/SOUL-EXTRACTION-COMPLETE.md (each is a ~60-line summary)
- built_on: full SOUL-EXTRACTION-COMPLETE.md files
- cited: quick reference for component soul
- mandatory_for: compact references pointing to full extraction files
- threading_ready: YES (group level)
- threading_gaps: none

---

#### 5.5.6 re-audit/ (11 files) -- GROUP
- source: components/ audit data, cross-component analysis
- built_on: all 11 component audits, SOUL-DEFINITION.md, PRODUCTION-RULES.md
- cited: synthesis/ T1 files (fed into synthesis), tracking/ files
- mandatory_for: post-extraction structural verification; 55-PAIR-CONSISTENCY-MATRIX.md (63KB) represents 55 pairwise comparisons

### 55-PAIR-CONSISTENCY-MATRIX.md (notable large file)
- source: all 11 component SOUL-EXTRACTION-COMPLETE.md files
- built_on: 55 pairwise comparisons between all 11 components
- cited: CONSISTENCY-VERIFICATION.md (T1)
- mandatory_for: cross-component consistency verification
- threading_ready: YES
- threading_gaps: none

---

#### 5.5.7 Process/State Files (8 files) -- GROUP
- source: audit process state
- built_on: audit methodology, checkpoint protocol
- cited: session resumption, state restoration
- mandatory_for: EXECUTION-STATE.md (29KB) = complete audit state machine; CONTEXT-RESTORATION.md (18.7KB) = critical for session resumption
- threading_ready: YES (group level)
- threading_gaps: none

---

#### 5.5.8 pages/ (6), coexistence/ (9), delta-pairs/ (7) -- GROUP
- source: component compositions, coexistence tests, before/after comparisons
- built_on: component HTML files, css/ files
- cited: re-audit/ files (test results referenced)
- mandatory_for: page composition verification, coexistence testing, delta comparison
- threading_ready: YES (group level)
- threading_gaps: none

---

## 6. archive/ (46 files) -- GROUP-LEVEL THREADING

### archive/extraction/ (8 files)
- source: Sanrok website screenshots (initial analysis)
- built_on: screenshot image analysis
- cited: font-research/ (consumed initial analysis)
- mandatory_for: historical provenance -- initial screenshot analysis predating font identification
- threading_ready: YES (group level)
- threading_gaps: none

### archive/tokens/ (6 files) -- DANGEROUS
- source: early extraction work (pre-Instrument Serif, pre-soul)
- built_on: initial Sanrok website analysis with WRONG assumptions
- cited: NONE (should not be cited -- contains dangerous wrong values)
- mandatory_for: NOTHING (SUPERSEDED). Contains --font-display: 'Bebas Neue' (WRONG), --radius-sm through --radius-full (BANNED), box-shadow values (BANNED)
- threading_ready: YES (group level)
- threading_gaps: none (but DANGEROUS: agents reading without context produce anti-pattern CSS)

### archive/components/specs/ (5 files)
- source: early component specification work
- built_on: initial component analysis
- cited: none direct
- mandatory_for: historical reference only (ARCHIVED)
- threading_ready: NO (group level)
- threading_gaps: cited field empty

### archive/variations/ (26 files)
- source: design variation experiments
- built_on: card-system CSS, halftone techniques, SVG fractalNoise patterns
- cited: none direct (experimental artifacts)
- mandatory_for: experimental provenance (ARCHIVED/EXPERIMENTAL)
- threading_ready: NO (group level)
- threading_gaps: cited field empty

### archive/PROGRESS-variations.md (1 file)
- source: variation experiment tracking
- built_on: archive/variations/ work
- cited: none direct
- mandatory_for: process documentation (ARCHIVED)
- threading_ready: NO
- threading_gaps: cited field empty

---

## SUPERSESSION CHAINS (design-extraction internal)

### Typography Token Chain
```
archive/tokens/typography.css (--font-display: 'Bebas Neue')
  SUPERSEDED BY -> typography-system/typography.css (--font-display: 'Instrument Serif')
    CONSOLIDATED INTO -> DESIGN-TOKEN-SUMMARY.md (T1, locked values)
```

### Soul Definition Chain
```
card-system/SOUL-DEFINITION.md (10 soul principles, 10KB)
  EXPANDED INTO -> component-system/SOUL-DEFINITION.md (6 universal rules + component rules, 58KB)
    SYNTHESIZED INTO -> MASTER-SOUL-SYNTHESIS.md (T1, complete soul definition, 16KB)
```

### Anti-Pattern Chain
```
card-system/research/3B-anti-patterns.md (17KB, research)
  EXPANDED INTO -> component-system/ANTI-PATTERNS.md (56KB, comprehensive)
    CONSOLIDATED INTO -> ANTI-PATTERNS-REGISTRY.md (T1, 19KB, authoritative)
```

### Perceptual Audit Chain
```
archive/perceptual-audit-phase-2.5/SOUL-DISCOVERIES.md (7 soul pieces, 11KB)
  SUPERSEDED BY -> perceptual-audit-v2/ (full 11-component audit, 176 files)
    SYNTHESIZED INTO -> 6 T1 Foundation files in synthesis/
```

---

## Threading Readiness Summary (design-extraction/)

| Category | Total Files | Ready | Not Ready | % Ready |
|----------|------------|-------|-----------|---------|
| Root level | 2 | 2 | 0 | 100% |
| typography-system/ | 6 | 5 | 1 | 83% |
| font-research/ | 20 | 20 | 0 | 100% |
| card-system/ | 35 | 28 | 7 | 80% |
| component-system/ root+css | 29 | 17 | 12 | 59% |
| perceptual-audit-v2/synthesis/ | 6 | 6 | 0 | 100% |
| perceptual-audit-v2/tracking/ | 7 | 7 | 0 | 100% |
| perceptual-audit-v2/foundation/ | 2 | 2 | 0 | 100% |
| perceptual-audit-v2/components/ | 102 | 102 | 0 | 100% |
| perceptual-audit-v2/other | 59 | 48 | 11 | 81% |
| archive/ | 46 | 14 | 32 | 30% |
| **TOTAL** | **350** | **287** | **63** | **82%** |

**Primary gap pattern:** Archive files and demo/showcase HTML files have no inbound citations. Component-system root-level demo files (showcase-all.html, etc.) are consumed visually but not referenced by other files. This is expected for experimental/demo artifacts.
