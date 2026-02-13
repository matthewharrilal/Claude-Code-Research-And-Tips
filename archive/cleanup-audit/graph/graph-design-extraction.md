# Reference Graph: design-extraction/

**Generated:** 2026-02-13
**Agent:** graph-scanner-de
**Total Files:** 148 markdown + 93 HTML + 4,059 total (including node_modules)
**Actual Source Files:** ~250 (excluding node_modules)

---

## EXECUTIVE SUMMARY

### Cross-Folder References

**OUTBOUND (design-extraction → external):**
- 20+ references to `docs-spa/app/showcase/` (knowledge-architecture, explorations, DESIGN-SYSTEM, components)
- CHARACTER-FAMILY-COMPLETE.md has 27 files / 52 occurrences across design-extraction + docs-spa
- T1 synthesis files heavily consumed by docs-spa React components

**INBOUND (external → design-extraction):**
- docs-spa/app/showcase/research/ (R1-R5 findings) feeds perceptual-audit-v2
- docs-spa/app/showcase/knowledge-architecture/ references T1 synthesis as authority

### Internal Reference Structure

**Authority Hierarchy:**
```
T1 Synthesis (6 files) ← highest authority
    ↑
Tracking Sheets (7 files) ← working data
    ↑
Component Audits (11 components) ← raw analysis
    ↑
Foundation Research (2 files) ← philosophical backing
```

**Supersession Chain:**
```
card-system/SOUL-DEFINITION.md (10 principles, SUPERSEDED)
    ↓
component-system/SOUL-DEFINITION.md (6 universal rules, 58KB, ACTIVE)
    ↓
perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (T1 distillation, 16KB, LOCKED)
```

---

## FOLDER STRUCTURE

### 1. ROOT LEVEL (design-extraction/)

| File | Tier | Outbound Refs | Consumed By |
|------|------|---------------|-------------|
| CLAUDE.md | C | typography-system/, card-system/, font-research/, 10 soul principles | All agents entering design-extraction/ |
| README.md | B | typography-system/ locked values, archive/ supersession, perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md | External readers, design-extraction/CLAUDE.md |
| FOLDER-MAP.md | B | PHASE-2A-CLASSIFICATION.md, folder status analysis | All agents (navigation reference) |

**External References:**
- None at this level

---

### 2. archive/ (54 files, DANGEROUS/SUPERSEDED)

| File | Tier | Status | Warning |
|------|------|--------|---------|
| CLAUDE.md | C | ACTIVE (warning) | DANGEROUS: tokens/ contains WRONG values (border-radius > 0, 'Bebas Neue', wrong shadows) |
| tokens/ | - | SUPERSEDED | Pre-audit values — DO NOT COPY |
| components/specs/ | - | SUPERSEDED | 5 spec files (content-blocks, decorative, layout, navigation, typography) |
| extraction/ | - | SUPERSEDED | 7 image analysis files + synthesis |
| variations/ | - | SUPERSEDED | Layout experiments, node_modules (playwright tests) |

**Outbound References:**
- All references point FORWARD to perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
- No upstream dependencies (historical anchor)

**Consumed By:**
- Agents entering archive/ read CLAUDE.md warning
- Historical reference only

**External References:**
- None (self-contained archive)

---

### 3. font-research/ (21 files, LOCKED decision)

| File | Tier | Outbound Refs | Consumed By |
|------|------|---------------|-------------|
| CLAUDE.md | C | 7 specimens, 5 comparisons, feasibility, letterform analysis | Agents entering folder |
| FINAL-DECISION.md | A | All research files | typography-system/, DESIGN-TOKEN-SUMMARY.md (--font-display) |
| specimens/ | - | 7 font analysis files | comparisons/ |
| comparisons/ | - | 5 comparison files + RANKING-SUMMARY.md | FINAL-DECISION.md |
| feasibility.md | - | Technical analysis | FINAL-DECISION.md |
| letterform-analysis.md | - | Character analysis | FINAL-DECISION.md |

**Decision:** Instrument Serif (LOCKED)

**Outbound References:**
- typography-system/ (implements decision)
- DESIGN-TOKEN-SUMMARY.md (--font-display token)

**Consumed By:**
- typography-system/CLAUDE.md
- perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
- Agents needing font rationale

**External References:**
- `docs-spa/app/showcase/explorations/density/DD-006-fractal.html` (font in use)

---

### 4. card-system/ (66 files, SUPERSEDED)

| File | Tier | Status | Superseded By |
|------|------|--------|---------------|
| CLAUDE.md | C | WARNING | component-system/perceptual-audit-v2/ |
| SOUL-DEFINITION.md | - | SUPERSEDED | component-system/SOUL-DEFINITION.md (6 universal rules) |
| research/ | - | SUPERSEDED | 4 files: 3A (card anatomy), 3B (anti-patterns), 3C (halftone), 3D (editorial) |
| experiments/ | - | SUPERSEDED | Card layout experiments |
| css/ | - | OUTDATED | Card-specific CSS |
| assets/ | - | MOSTLY SUPERSEDED | Patterns and test images |
| tests/node_modules/ | - | JUNK | Playwright node_modules (17 files) |

**Supersession:**
- 10 card-scope principles → 6 universal rules
- Card-focused design → component-system approach → perceptual-audit-v2

**Outbound References:**
- None (SUPERSEDED, not referenced)

**Consumed By:**
- Historical reference only via CLAUDE.md warning

**External References:**
- None

---

### 5. typography-system/ (17 files, ACTIVE T1)

| File | Tier | Outbound Refs | Consumed By |
|------|------|---------------|-------------|
| CLAUDE.md | C | font-research/FINAL-DECISION.md, DESIGN-TOKEN-SUMMARY.md | Agents entering folder |
| typography.css | A | Imports: type-scale.css, stroke-treatments.css, typography-components.css | component-system CSS |
| type-scale.css | A | DESIGN-TOKEN-SUMMARY.md tokens | typography.css |
| stroke-treatments.css | A | Sanrok signature style implementation | typography.css |
| typography-components.css | A | Semantic classes (.typo-hero, etc.) | typography.css |
| index.html | - | Demonstration page | Visual reference |
| tests/ | - | Playwright visual regression tests + node_modules | CI/CD |

**Import Order (CRITICAL):**
1. type-scale.css
2. stroke-treatments.css
3. typography-components.css

**Built On:**
- font-research/FINAL-DECISION.md (Instrument Serif)
- DESIGN-TOKEN-SUMMARY.md (locked token values)

**Consumed By:**
- component-system/ CSS files import typography.css
- Agents implementing typography

**External References:**
- None direct (consumed by component-system which connects to docs-spa)

---

### 6. component-system/ (292 files, TRANSITIONAL)

#### 6A. Root Level

| File | Tier | Status | Authority |
|------|------|--------|-----------|
| CLAUDE.md | C | ACTIVE | Navigation, warns about SUPERSEDED files |
| SOUL-DEFINITION.md | A | ACTIVE, LOCKED | 6 universal rules, 58KB exhaustive document |
| ANTI-PATTERNS.md | - | SUPERSEDED | → perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md |
| archive/ | - | SUPERSEDED | Historical Phase 2.5, 3, validation sprint work |
| css/ | A | ACTIVE | 9 production CSS files |
| components/ | A | ACTIVE | Component HTML implementations |
| perceptual-audit-v2/ | A | T1 AUTHORITY | 144+ files, highest precedence |

**css/ Files (9):**
1. variables.css
2. file-tree.css
3. decision-matrix.css
4. progression.css
5. core-abstraction.css
6. ascii-dither.css
7. code-block.css
8. callouts.css
9. components.css

**External References:**
- `docs-spa/app/showcase/DESIGN-SYSTEM/` (public documentation)
- `docs-spa/app/showcase/explorations/density/` (DD work consumes soul)
- `docs-spa/app/showcase/knowledge-architecture/` (cites as root authority)

#### 6B. perceptual-audit-v2/ (T1 SYNTHESIS AUTHORITY)

##### T1 Synthesis Files (6 files, Tier A, LOCKED)

| File | Purpose | Inbound Refs | Outbound Refs |
|------|---------|--------------|---------------|
| **MASTER-SOUL-SYNTHESIS.md** | Single authoritative soul distillation: "The Unhurried Editor", 6 Universal Rules, 11 component characters | 15+ | PERCEPTUAL-TRUTHS.md, SOUL-DEFINITION.md, 11 soul extractions, 8 structural re-audits, KORTAI-ESSENCE-FOUNDATION.md |
| **DESIGN-TOKEN-SUMMARY.md** | Complete locked `:root {}` CSS block — single CSS source of truth | 18+ | 4 tracking sheets (COLOR, TYPOGRAPHY, SPACING, CONTAINER), typography-system CSS files |
| **CHARACTER-FAMILY-COMPLETE.md** | 11 named component characters + master character registry | 6+ | NAMED-CHARACTERS.md, 11 soul-extractions/*.md, component-reaudits/*.md, CALLOUT-FAMILY-STRUCTURAL-SUMMARY.md |
| **ANTI-PATTERNS-REGISTRY.md** | "The Soul Test" — what violates the design system | 6+ | Component audits, ANTI-PATTERNS.md (tracking), SOUL-DEFINITION.md |
| **PRODUCTION-RULES.md** | Mandatory implementation rules | 5+ | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md |
| **CONSISTENCY-VERIFICATION.md** | Consistency verification methodology | - | Tracking sheets, component audits |

**EXTERNAL REFERENCES (T1 Synthesis):**

CHARACTER-FAMILY-COMPLETE.md → docs-spa connections:
- SOURCE-OF-TRUTH-REGISTRY.md (`docs-spa/app/showcase/knowledge-architecture/`)
- R5-COMBINATION-THEORY.md (`docs-spa/app/showcase/research/`)
- PIPELINE-BACKBONE.md (`docs-spa/app/showcase/knowledge-architecture/`) — 4 references
- KA-DECISIONS.md (`docs-spa/app/showcase/knowledge-architecture/`) — 3 references
- COMPONENTS-REGISTRY.md (`docs-spa/app/showcase/checkpoints/`)
- 01-reachability-report.md (`docs-spa/app/showcase/dependency-trace/`) — 6 references
- design-extraction-threading.md (`docs-spa/app/showcase/dependency-trace/02-threading-data/`) — 4 references
- OVERVIEW.md (`docs-spa/app/showcase/DESIGN-SYSTEM/components/`)
- React components (7 files): PathOfTask.tsx, FileStructure.tsx, DesignDecision.tsx, CodeBlock.tsx, GotchaBox.tsx, CoreAbstraction.tsx, EssenceBox.tsx (`docs-spa/components/content/`)

CONSISTENCY-VERIFICATION.md → docs-spa:
- E-007 materialization test searches `docs-spa/app/showcase/DESIGN-SYSTEM/`

SOUL-DEFINITION.md → docs-spa:
- `docs-spa/app/showcase/DESIGN-SYSTEM/` public documentation
- `docs-spa/app/showcase/explorations/density/` DD work
- `docs-spa/app/showcase/knowledge-architecture/` pipeline docs

##### Tracking Sheets (7 files, Tier B)

| File | Role | Feeds Into |
|------|------|------------|
| PERCEPTUAL-TRUTHS.md | Raw perceptual truth data for all 11 components | MASTER-SOUL-SYNTHESIS.md |
| NAMED-CHARACTERS.md | Initial 11 character names, mantras, archetypes | CHARACTER-FAMILY-COMPLETE.md |
| COLOR-TOKENS.md | Color token working data | DESIGN-TOKEN-SUMMARY.md |
| TYPOGRAPHY-TOKENS.md | Typography token working data | DESIGN-TOKEN-SUMMARY.md |
| SPACING-TOKENS.md | Spacing token working data | DESIGN-TOKEN-SUMMARY.md |
| CONTAINER-TOKENS.md | Container token working data | DESIGN-TOKEN-SUMMARY.md |
| ANTI-PATTERNS.md | Anti-pattern tracking (working data) | ANTI-PATTERNS-REGISTRY.md |

##### Foundation Research (2 files, Tier A)

| File | Role | Consumed By |
|------|------|-------------|
| KORTAI-ESSENCE-FOUNDATION.md | "The Unhurried Editor" character, editorial calm philosophy, magazine-as-interface metaphor | MASTER-SOUL-SYNTHESIS.md (8+ refs) |
| SOUL-TRANSLATION-GUIDE.md | How to translate soul pieces into CSS | Component implementations |

**EXTERNAL REFERENCES (Foundation):**

KORTAI-ESSENCE-FOUNDATION.md:
- `docs-spa/app/showcase/knowledge-architecture/PIPELINE-BACKBONE.md`
- `docs-spa/app/showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md`

SOUL-TRANSLATION-GUIDE.md:
- `docs-spa/app/showcase/dependency-trace/` (multiple files reference this)

##### Component Audits (11 components, Tier B)

Component audit structure (per component):
- soul-extractions/[component]-soul-extraction.md
- components/[component]/ (if exists)
- re-audit/component-reaudits/[COMPONENT]-STRUCTURAL-REAUDIT.md (8 files)

**11 Components with Soul Scores:**
1. Code Snippet — "The Precise Transcriptionist" — 49/60
2. Info Callout — "The Senior Concierge" — 53/60
3. Tip Callout — "The Seasoned Colleague" — 49/60
4. Gotcha Callout — "The Vigilant Sentinel" — 51/60
5. Essence Callout — "The Archivist of Axioms" — 54/60 (tied highest)
6. Challenge Callout — "The Spirited Catalyst" — 52/60
7. File Tree — "The Methodical Surveyor" — 52/60
8. Decision Matrix — "The Impartial Cartographer" — 48.5/60
9. Core Abstraction — "The Sagacious Mentor" — 50.5/60
10. Task Component — "The Diligent Scribe" — 51/60
11. Reasoning Component — "The Deliberative Counselor" — 54/60 (tied highest)

**Soul Score Range:** 48.5–54/60, average 51.4/60 (86%)

**All 11 feed into:**
- CHARACTER-FAMILY-COMPLETE.md
- MASTER-SOUL-SYNTHESIS.md
- PERCEPTUAL-TRUTHS.md

##### Supporting Files

| File | Role |
|------|------|
| MASTER-INDEX.md | Navigation index for 176+ files |
| CONTEXT-RESTORATION.md | Context recovery instructions |
| EXECUTION-STATE.md | Current state of audit work |
| DECISION-LOG.md | Decision history |
| CONSISTENCY-REGISTRY.md | Verified consistency tracking |
| VISUAL-AUDIT-TRACKER.md | Visual audit progress |
| CHECKPOINT-CURRENT.md | Current checkpoint state |
| checkpoints/ | 3 checkpoint files (CUMULATIVE, CURRENT, QUALITY) |
| coexistence/ | COEXISTENCE-TEST-RESULTS.md, coexistence-reaudits/ |
| re-audit/ | PHASE-4-ALPHA-COMPLETE.md, component-reaudits/, cross-component/, coexistence-reaudits/ |
| pages/ | DOCUMENTATION-PAGE-SOUL-EXTRACTION.md, KITCHEN-SINK-AUDIT-RESULTS.md |
| delta-pairs/ | Before/after comparison pairs |
| screenshots/ | Visual evidence from audits |

**EXTERNAL REFERENCES (Supporting):**

PHASE-4-ALPHA-COMPLETE.md:
- `docs-spa/app/showcase/knowledge-architecture/PHASE-2B-BATCH-MANIFEST.md`

---

## SUPERSESSION CHAINS

### Chain 1: Soul Definition
```
card-system/SOUL-DEFINITION.md (10 principles, SUPERSEDED)
    ↓
component-system/SOUL-DEFINITION.md (6 universal rules, 58KB, ACTIVE)
    ↓
component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (T1, 16KB, LOCKED)
```

### Chain 2: Anti-Patterns
```
component-system/ANTI-PATTERNS.md (scattered collection, SUPERSEDED)
    ↓
perceptual-audit-v2/tracking/ANTI-PATTERNS.md (working data)
    ↓
perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md (T1, LOCKED)
```

### Chain 3: Tokens
```
archive/tokens/ (pre-audit values, DANGEROUS)
    ↓
perceptual-audit-v2/tracking/[COLOR|TYPOGRAPHY|SPACING|CONTAINER]-TOKENS.md (working data)
    ↓
perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (T1, LOCKED)
    ↓
typography-system/*.css (implementation)
    ↓
component-system/css/*.css (implementation)
```

### Chain 4: Typography
```
font-research/ (7 specimens, 5 comparisons) → FINAL-DECISION.md (Instrument Serif)
    ↓
perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (--font-display token)
    ↓
typography-system/typography.css (implementation)
```

---

## EXTERNAL DEPENDENCIES

### INBOUND (External → design-extraction)

| Source | Type | Target |
|--------|------|--------|
| docs-spa/app/showcase/research/ (R1-R5) | Research findings | perceptual-audit-v2/ component audits |
| docs-spa/app/showcase/knowledge-architecture/ | Architecture docs | T1 synthesis files (authority citations) |
| docs-spa/components/content/ (React) | Implementation | CHARACTER-FAMILY-COMPLETE.md (character definitions) |

### OUTBOUND (design-extraction → External)

| Source | Target | Type |
|--------|--------|------|
| CHARACTER-FAMILY-COMPLETE.md | 27 files / 52 occurrences across docs-spa | Character names, specifications |
| DESIGN-TOKEN-SUMMARY.md | docs-spa React components | CSS token values |
| MASTER-SOUL-SYNTHESIS.md | docs-spa/app/showcase/DESIGN-SYSTEM/ | Soul documentation |
| SOUL-DEFINITION.md | docs-spa/app/showcase/knowledge-architecture/ | Root authority |
| KORTAI-ESSENCE-FOUNDATION.md | docs-spa/app/showcase/knowledge-architecture/ | Philosophy backing |
| SOUL-TRANSLATION-GUIDE.md | docs-spa/app/showcase/dependency-trace/ | Translation methodology |
| typography.css | component-system/css/ → docs-spa | Typography implementation |

**Total External References Found:**
- ~20 explicit path references to docs-spa in markdown files
- 27 files / 52 occurrences for CHARACTER-FAMILY-COMPLETE.md alone
- 7 React component implementations consume CHARACTER-FAMILY-COMPLETE.md

---

## FILE CLASSIFICATION BY TIER

### Tier A (Authoritative, LOCKED) — 15 files
- T1 Synthesis: 6 files (MASTER-SOUL-SYNTHESIS, DESIGN-TOKEN-SUMMARY, CHARACTER-FAMILY-COMPLETE, ANTI-PATTERNS-REGISTRY, PRODUCTION-RULES, CONSISTENCY-VERIFICATION)
- Foundation: 2 files (KORTAI-ESSENCE-FOUNDATION, SOUL-TRANSLATION-GUIDE)
- Typography System: 4 files (typography.css, type-scale.css, stroke-treatments.css, typography-components.css)
- Component System: 1 file (SOUL-DEFINITION.md)
- Font Research: 1 file (FINAL-DECISION.md)
- Component CSS: 9 files (variables.css, etc.)

### Tier B (Navigation, Reference) — ~30 files
- Tracking Sheets: 7 files
- MASTER-INDEX.md, FOLDER-MAP.md, README.md
- Component audits: 11 soul extraction files
- Re-audit files: 8 structural re-audits
- Supporting tracking files

### Tier C (Process, Navigation) — ~15 files
- CLAUDE.md files: 6 (root + 5 subfolders)
- PROGRESS.md files: 3 (font-research, card-system, typography-system)
- CONTEXT-RESTORATION.md, EXECUTION-STATE.md, DECISION-LOG.md, etc.

### Tier D (SUPERSEDED/DANGEROUS) — ~190 files
- archive/: 54 files (DANGEROUS tokens, old specs, variations)
- card-system/: 66 files (SUPERSEDED)
- component-system/archive/: historical work
- node_modules/: ~50 playwright agent files across 3 folders

---

## CRITICAL DEPENDENCIES (Must Honor)

### 1. T1 Synthesis Files (HIGHEST AUTHORITY)
- Any modification requires Phase-level approval
- All downstream work MUST consume synthesis/, never bypass to component audits
- Locked CSS values: `border-radius: 0`, `box-shadow: none`

### 2. Character Names (27 files, 52 occurrences)
- Changes to CHARACTER-FAMILY-COMPLETE.md character names cascade to docs-spa React components
- CRITICAL impact radius

### 3. Token Values (34+ inbound refs)
- DESIGN-TOKEN-SUMMARY.md is single source of truth
- CSS implementations must copy verbatim
- Tracking sheets are working data, NOT authority

### 4. Soul Pieces (6 Universal Rules)
- MASTER-SOUL-SYNTHESIS.md defines soul
- SOUL-DEFINITION.md (component-system) is exhaustive version
- All component work must honor these constraints

### 5. Typography Import Order
- CRITICAL: type-scale → stroke-treatments → typography-components
- Breaking this order breaks visual system

---

## ORPHANED/ISLAND FILES

### Potential Orphans (No Clear Consumers)
- card-system/experiments/ (SUPERSEDED, likely unused)
- card-system/assets/ (MOSTLY SUPERSEDED, some may be referenced)
- archive/variations/ (historical experiments)
- component-system/archive/ (not documented in this scan)

### Islands (Self-Contained, No External Refs)
- font-research/ (decision final, locked, self-contained)
- card-system/ (SUPERSEDED, intentionally isolated)
- archive/ (DANGEROUS, intentionally isolated)

### Dead Zones (node_modules)
- card-system/tests/node_modules/ (17 playwright files)
- typography-system/node_modules/ (11 playwright files)
- archive/variations/tests/node_modules/ (10+ playwright files)

---

## REFERENCE DENSITY

### Highest Inbound References (Most Consumed)
1. **DESIGN-TOKEN-SUMMARY.md** — 18+ direct refs, consumed by ALL CSS work
2. **MASTER-SOUL-SYNTHESIS.md** — 15+ refs, consumed by all soul-dependent work
3. **CHARACTER-FAMILY-COMPLETE.md** — 27 files / 52 occurrences across repos
4. **SOUL-DEFINITION.md** (component-system) — Referenced by docs-spa knowledge-architecture

### Highest Outbound References (Most Dependencies)
1. **CHARACTER-FAMILY-COMPLETE.md** — 11 soul extractions + 8 re-audits + tracking + foundation
2. **MASTER-SOUL-SYNTHESIS.md** — PERCEPTUAL-TRUTHS + SOUL-DEFINITION + 11 soul extractions + 8 re-audits + foundation
3. **DESIGN-TOKEN-SUMMARY.md** — 4 tracking sheets + 2 typography CSS files
4. **MASTER-INDEX.md** — 176+ file navigation index

### Zero References (Isolated)
- archive/ (intentionally isolated with warnings)
- card-system/ (SUPERSEDED, no active consumers)
- Most PROGRESS.md files (process tracking only)

---

## CLEANUP RECOMMENDATIONS

### KEEP (Authoritative, Active)
- T1 synthesis/ (6 files) — LOCKED authority
- typography-system/ (CSS + index.html) — production code
- component-system/css/ (9 files) — production code
- component-system/SOUL-DEFINITION.md — exhaustive soul document
- font-research/FINAL-DECISION.md — locked decision
- All tracking/ files — working data feeding T1
- All foundation/ files — philosophical backing
- All soul-extractions/ — raw audit data
- MASTER-INDEX.md, FOLDER-MAP.md, CLAUDE.md files — navigation

### ARCHIVE (Historical, Superseded but Keep)
- card-system/ — SUPERSEDED but documented supersession chain
- archive/ — Historical record with DANGEROUS warning
- component-system/archive/ — Historical work
- All PROGRESS.md files — phase history

### DELETE CANDIDATES (Junk, Redundant)
- **node_modules/** across 3 folders — ~40 playwright agent files, dependency junk
- card-system/tests/node_modules/ (17 files)
- typography-system/node_modules/ (11 files)
- archive/variations/tests/node_modules/ (10+ files)
- Duplicate CHECKPOINT-CURRENT.md (exists at 2 levels in perceptual-audit-v2/)

---

## GRAPH STATISTICS

| Metric | Count |
|--------|-------|
| Total files (actual source) | ~250 |
| Markdown files | 148 |
| HTML files | 93 |
| CSS files | 13 (9 component + 4 typography) |
| T1 synthesis files (LOCKED) | 6 |
| Tracking sheets | 7 |
| Component audits | 11 |
| Soul extraction files | 11 |
| Structural re-audit files | 8 |
| SUPERSEDED files | ~120 (card-system + archive) |
| DANGEROUS files | 54 (archive/) |
| node_modules junk | ~40 playwright files |
| External references (docs-spa) | ~20 explicit + 52 CHARACTER occurrences |
| Tier A (LOCKED) | 15 |
| Tier B (Reference) | ~30 |
| Tier C (Process) | ~15 |
| Tier D (SUPERSEDED) | ~190 |

---

## CRITICAL PATHS

### Authority Flow (Research → Production)
```
docs-spa/research/ (R1-R5)
    ↓
perceptual-audit-v2/components/ (11 audits)
    ↓
perceptual-audit-v2/tracking/ (7 sheets)
    ↓
perceptual-audit-v2/synthesis/ (6 T1 files) ← AUTHORITY LOCK
    ↓
typography-system/ + component-system/css/
    ↓
docs-spa/components/ (React implementations)
```

### Soul Evolution Path
```
Sanrok.com (reference inspiration)
    ↓
card-system/SOUL-DEFINITION.md (10 principles)
    ↓
component-system/SOUL-DEFINITION.md (6 universal rules, 58KB)
    ↓
perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md ("The Unhurried Editor")
    ↓
perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (T1, 16KB)
    ↓
docs-spa/DESIGN-SYSTEM/ (public documentation)
```

### Token Propagation Path
```
archive/tokens/ (WRONG values)
    ↓
perceptual-audit-v2/tracking/ (COLOR, TYPOGRAPHY, SPACING, CONTAINER)
    ↓
perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (`:root {}` block)
    ↓
typography-system/*.css (implementation)
    ↓
component-system/css/*.css (implementation)
    ↓
docs-spa React components (consumption)
```

---

## NOTES

### Threading Headers Present
- All 148 markdown files have INLINE THREADING HEADER (Phase 2B)
- Headers contain: Tier, Batch, WHY THIS EXISTS, STATUS, BUILT ON, CONSUMED BY
- ~26 files have explicit BUILT ON sections
- ~25 files have explicit CONSUMED BY sections

### Supersession Markers
- card-system/CLAUDE.md: SUPERSEDED warning
- archive/CLAUDE.md: DANGEROUS warning
- component-system/ANTI-PATTERNS.md: SUPERSEDED by synthesis/ANTI-PATTERNS-REGISTRY.md

### Phase History
- Phase 1: Font research (COMPLETE, locked)
- Phase 2: Typography system (COMPLETE, locked)
- Phase 3: Card system (COMPLETE, SUPERSEDED)
- Phase 4: Perceptual audit v2 (COMPLETE, T1 LOCKED)
- Phase 2A: Classification (created FOLDER-MAP.md)
- Phase 2B: Inline threading (all files threaded)
- Phase 4A-E: T1 synthesis (6 files created)
- Phase 4-ALPHA: Structural re-audits (8 files)
- Phase 4-ZETA: File organization (MASTER-INDEX.md)

### File Count Discrepancy
- find reports 4,059 total files
- Actual source files ~250 (excluding node_modules/playwright bloat)
- node_modules adds ~3,800 junk files across 3 test directories

---

**END OF GRAPH**
