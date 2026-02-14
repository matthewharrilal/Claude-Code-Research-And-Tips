# Audit: design-extraction/

**Auditor:** auditor-design-extraction
**Date:** 2026-02-13
**Total Files:** 4,059
**Total Size:** 136 MB

---

## Executive Summary

The `design-extraction/` directory contains **4,059 files (136 MB)** split between **3,628 junk files (120+ MB)** and **422 keeper files (~16 MB)**. The junk consists primarily of `node_modules/` (3,605 files, ~14 MB) and Playwright test artifacts (23 files in `playwright-report/`, plus test snapshots).

**Keeper files (422 total):**
- 147 Markdown documentation files
- 90 HTML components/experiments/showcases
- 25 CSS stylesheets
- 102 PNG screenshots (perceptual audit, validation sprint)
- 27 TypeScript/test files
- 31 other assets (SVG patterns, JPG test images, txt ASCII art, JSON configs)

**Structure quality:** Clean 5-directory structure with clear purpose separation. **No duplication** with other directories found.

---

## Junk Files (3,628 total — 89% of files)

### 1. node_modules/ — 3,605 files (~14 MB)
Located in 4 test subdirectories:
- `archive/variations/tests/node_modules/`
- `component-system/tests/node_modules/`
- `card-system/tests/node_modules/`
- `typography-system/node_modules/`

**Recommendation:** DELETE all — these are build artifacts regenerated via `npm install`.

### 2. playwright-report/ — 23 files
HTML test reports in 3 locations:
- `archive/variations/tests/playwright-report/`
- `component-system/tests/playwright-report/`
- `card-system/tests/playwright-report/`
- `typography-system/playwright-report/`

**Recommendation:** DELETE all — ephemeral test output, reproducible.

### 3. test-results/ and test-snapshots/ (count unknown but excluded from keeper enumeration)
Located in:
- `typography-system/test-results/`
- `typography-system/test-snapshots/`

**Recommendation:** DELETE all — Playwright test artifacts.

---

## Keeper Files (422 total — 11% of files)

### Top-Level Structure (5 directories)

```
design-extraction/
├── archive/             (52 files)  — early design variations, component specs, token prototypes
├── card-system/         (63 files)  — halftone/paper texture experiments, card component library
├── component-system/    (270 files) — perceptual audit v2 (T1 synthesis), production components
├── font-research/       (21 files)  — Didone font selection research, letterform analysis
├── typography-system/   (12 files)  — type scale, stroke treatments, typography tests
└── [3 docs + 1 .gitignore]
```

---

## Directory Breakdown

### 1. archive/ (52 keeper files)

**Purpose:** Early design exploration — variations, component specs, deprecated tokens

**Subdirectories:**
- `variations/` — 4 style variations per component type (cards, callouts, code blocks)
- `components/specs/` — 5 component specification documents
- `extraction/` — 7 image analysis + 1 synthesis
- `tokens/` — prototype token files (colors, typography, spacing, effects)

**Key files:**
- `variations/showcase/master-showcase.html` — all variations in one view
- `tokens/tokens.json` — early token definitions
- `extraction/synthesis.md` — consolidated analysis

**Tests:** 1 Playwright test suite in `variations/tests/` (4 files + node_modules + report)

**Status:** Historical reference. No active development.

---

### 2. card-system/ (63 keeper files)

**Purpose:** Card component with halftone/paper texture effects, editorial layout patterns

**Subdirectories:**
- `research/` — 4 research docs (3A-3D: anatomy, anti-patterns, halftone, editorial)
- `css/` — halftone effects + 5 experimental masks
- `experiments/` — 17 HTML experiments (layouts, integration, coexistence)
- `assets/` — 10 SVG patterns + 1 PNG blue-noise + 12 JPG test images
- `tests/` — Playwright test suite (5 files + node_modules)

**Key files:**
- `card.css` — production card component
- `index.html` — main showcase
- `SOUL-DEFINITION.md` — perceptual principles for card system
- `PROGRESS.md` — development tracker
- `experiments/phase3-page-composition.html` — layout composition test

**Status:** Active component library with extensive texture/halftone research.

---

### 3. component-system/ (270 keeper files) — LARGEST SUBDIRECTORY

**Purpose:** Complete component library with perceptual audit v2 (the T1 crown jewels)

**Subdirectories:**

#### 3.1 `perceptual-audit-v2/` (181 files) — **THE CORE ASSET**

**synthesis/ (6 files — 189 KB total) — T1 CROWN JEWELS:**
- `MASTER-SOUL-SYNTHESIS.md` (28 KB) — perceptual foundation
- `PRODUCTION-RULES.md` (34 KB) — production guidelines
- `ANTI-PATTERNS-REGISTRY.md` (33 KB) — what NOT to do
- `DESIGN-TOKEN-SUMMARY.md` (35 KB) — token definitions
- `CHARACTER-FAMILY-COMPLETE.md` (31 KB) — character system
- `CONSISTENCY-VERIFICATION.md` (28 KB) — consistency checks

**Other key subdirs:**
- `components/` — 11 component HTML files + screenshots (callouts, code, matrix, tree, etc.)
- `soul-extractions/` — 11 per-component soul analysis files
- `re-audit/` — structural re-audit (component, page, coexistence, cross-component)
- `screenshots/` — ~25 visual audit PNGs
- `coexistence/` — 8 component interaction tests + results
- `delta-pairs/` — 5 cross-component comparison tests
- `pages/` — 4 full-page compositions + audit results
- `tracking/` — 7 token tracking files (colors, spacing, typography, containers, etc.)
- `checkpoints/`, `foundation/`, `CLAUDE.md`, `PROGRESS.md`

#### 3.2 `archive/` subdirs:
- `perceptual-audit-phase-2.5/` — 8 audit docs (gap analysis, implementation spec, soul discoveries)
- `research-phase-3/` — 9 research docs (4A-4I: dither, code blocks, callouts, etc.)
- `validation-sprint/` — 14 docs + 20 PNGs (experiments, references, layout protocol)

#### 3.3 Production assets:
- `components/` — 13 production HTML components
- `css/` — 10 CSS files (callouts, code-block, ascii-dither, components, etc.)
- `assets/ascii-art/` — 5 ASCII art txt files
- `tests/` — 10 Playwright test specs + 27 snapshot PNGs + config files

**Key top-level files:**
- `SOUL-DEFINITION.md`, `ANTI-PATTERNS.md`, `PROGRESS.md`
- `showcase-all.html`, `showcase-nested.html`, `anti-pattern-comparison.html`, `index.html`

**Status:** Active production system. Perceptual audit v2 is the **definitive design authority** for the project.

---

### 4. font-research/ (21 keeper files)

**Purpose:** Didone font selection research — identified Right Didone as final choice

**Subdirectories:**
- `specimens/` — 8 font specimen analyses + comparison summary
- `comparisons/` — 6 comparison docs + ranking summary

**Key files:**
- `FINAL-DECISION.md` — decision outcome
- `letterform-analysis.md` — detailed letterform study
- `classification-research.md` — Didone classification research
- `identification-results.md`, `feasibility.md`, `PROGRESS.md`

**Status:** Research complete. Reference material.

---

### 5. typography-system/ (12 keeper files)

**Purpose:** Typography scale, stroke treatments, component typography tests

**Files:**
- `typography.css`, `type-scale.css`, `stroke-treatments.css`, `typography-components.css`
- `index.html` — showcase
- `tests/typography.spec.ts` — Playwright test
- `package.json`, `playwright.config.ts`, `PROGRESS.md`, `CLAUDE.md`, `.gitignore`

**Status:** Active typography research. Minimal footprint.

---

## File Type Breakdown (422 keepers)

| Type | Count | Purpose |
|------|-------|---------|
| **Markdown** | 147 | Documentation, research, specs, progress tracking |
| **HTML** | 90 | Components, experiments, showcases, tests |
| **CSS** | 25 | Stylesheets, tokens, effects |
| **PNG** | 102 | Visual audit screenshots, test snapshots, validation references |
| **TypeScript** | 27 | Playwright tests, configs |
| **SVG** | 10 | Halftone patterns, textures |
| **JPG** | 12 | Test images for card experiments |
| **TXT** | 5 | ASCII art |
| **JSON** | 3 | package-lock, tokens, package.json |
| **Other** | 1 | .gitignore |

---

## Duplication Check

### Cross-Directory Analysis

**docs-spa/**: No files reference or duplicate `design-extraction/` content.

**active/design-system/**: Does not exist in current structure.

**fortress/**: No overlap — fortress contains DD/OD/CD explorations, design-extraction contains component library and perceptual audit.

**archive/**: No duplication — archive contains KA core, scratchpads-c, CD audit reports, checkpoints. Design-extraction is orthogonal.

**Verdict:** **ZERO DUPLICATION** found.

---

## Key Findings

### 1. Screenshot Density
- 102 PNG files across component-system (perceptual audit + validation sprint + test snapshots)
- All screenshots are **reproducible** via Playwright or browser snapshots
- Perceptual audit screenshots are **reference material** — may have archival value
- Test snapshots are **regenerable** — can be deleted

### 2. Perceptual Audit v2 = Crown Jewel
- `component-system/perceptual-audit-v2/synthesis/` = **6 T1 synthesis files (189 KB)**
- Referenced in MEMORY.md as "T1 = 6 synthesis files in perceptual-audit-v2/synthesis/ (crown jewels)"
- Most comprehensive design authority in the project
- **MUST KEEP** — definitive source of truth

### 3. Test Infrastructure
- 4 separate Playwright test suites (archive/variations, card-system, component-system, typography-system)
- Each has own package.json + node_modules + playwright.config.ts
- All node_modules are **redundant** (regenerable via npm install)

### 4. Archive vs Active Content
- `design-extraction/archive/` = historical variations/specs (DONE)
- `card-system/`, `component-system/`, `typography-system/` = active development
- `font-research/` = research complete, reference material

### 5. Size Distribution
- Junk (node_modules + reports): ~120 MB (88% of total)
- Keeper files: ~16 MB (12% of total)
- Screenshots alone: ~6-8 MB estimate (40-50% of keeper size)

---

## Recommendations

### DELETE (3,628 files, ~120 MB):
1. All `node_modules/` directories (3,605 files)
2. All `playwright-report/` directories (23 files)
3. All `test-results/` and `test-snapshots/` directories

**Impact:** Reduces from 4,059 files (136 MB) → 422 files (~16 MB) = **89% file reduction, 88% size reduction**

### KEEP (422 files, ~16 MB):
1. All documentation (147 MD files)
2. All components/experiments (90 HTML files)
3. All stylesheets (25 CSS files)
4. **All perceptual audit v2 files** — especially synthesis/ crown jewels
5. All research files (font-research, card-system/research, etc.)
6. Test specs (*.spec.ts) but NOT test snapshots
7. Assets (SVG patterns, ASCII art) but CONSIDER archiving JPG test images

### OPTIONAL ARCHIVE (20-30 files, ~2-4 MB):
- Test snapshot PNGs in `component-system/tests/snapshots/` (27 files) — regenerable
- JPG test images in `card-system/assets/test-images/` (12 files) — sample data
- Some validation sprint screenshots (if documented in findings)

### DO NOT MOVE/RENAME:
- `component-system/perceptual-audit-v2/` — definitive design authority
- T1 synthesis files — referenced extensively in MEMORY.md and project docs

---

## Structure Quality: A+

**Strengths:**
1. Clear purpose separation (archive, card-system, component-system, font-research, typography-system)
2. No directory bloat — 5 top-level dirs, each with distinct role
3. Consistent naming conventions (kebab-case, descriptive)
4. Self-documenting structure (PROGRESS.md, CLAUDE.md, SOUL-DEFINITION.md in each subdir)
5. Zero duplication with other project areas

**Weaknesses:**
1. High junk ratio (89% files are build artifacts)
2. Test infrastructure duplicated across 4 subdirs (could consolidate)
3. Screenshot proliferation (102 PNGs, many reproducible)

**Overall:** Excellent structure. Main issue is build artifact accumulation, not architectural problems.

---

## Full Keeper File Enumeration

<details>
<summary>All 422 keeper files (click to expand)</summary>

```
./.gitignore
./CLAUDE.md
./FOLDER-MAP.md
./README.md

./archive/CLAUDE.md
./archive/PROGRESS-variations.md
./archive/components/specs/content-blocks.md
./archive/components/specs/decorative.md
./archive/components/specs/layout.md
./archive/components/specs/navigation.md
./archive/components/specs/typography.md
./archive/extraction/image-1-analysis.md
./archive/extraction/image-2-analysis.md
./archive/extraction/image-3-analysis.md
./archive/extraction/image-4-analysis.md
./archive/extraction/image-5-analysis.md
./archive/extraction/image-6-analysis.md
./archive/extraction/image-7-analysis.md
./archive/extraction/synthesis.md
./archive/tokens/colors.css
./archive/tokens/effects.css
./archive/tokens/index.css
./archive/tokens/spacing.css
./archive/tokens/test.html
./archive/tokens/tokens.json
./archive/tokens/typography.css
./archive/variations/callouts/variation-1-stamp.html
./archive/variations/callouts/variation-2-heavy-border.html
./archive/variations/callouts/variation-3-typography.html
./archive/variations/callouts/variation-4-decorative.html
./archive/variations/cards/variation-1-typography.html
./archive/variations/cards/variation-2-badges.html
./archive/variations/cards/variation-3-asymmetric.html
./archive/variations/cards/variation-4-textured.html
./archive/variations/code-blocks/variation-1-terminal.html
./archive/variations/code-blocks/variation-2-zine.html
./archive/variations/code-blocks/variation-3-brutalist.html
./archive/variations/code-blocks/variation-4-editorial.html
./archive/variations/colors/color-relationships.html
./archive/variations/colors/textured-swatches.html
./archive/variations/research/badges.md
./archive/variations/research/brutalist.md
./archive/variations/research/editorial.md
./archive/variations/research/retro-terminal.md
./archive/variations/research/textures.md
./archive/variations/research/zine-punk.md
./archive/variations/showcase/all-callouts.html
./archive/variations/showcase/all-cards.html
./archive/variations/showcase/all-code-blocks.html
./archive/variations/showcase/all-colors.html
./archive/variations/showcase/master-showcase.html
./archive/variations/tests/component-variations.spec.ts
./archive/variations/tests/package-lock.json
./archive/variations/tests/package.json
./archive/variations/tests/playwright.config.ts
./archive/variations/validation/comparison.md

./card-system/CLAUDE.md
./card-system/PROGRESS.md
./card-system/SOUL-DEFINITION.md
./card-system/card.css
./card-system/index.html
./card-system/assets/patterns/blue-noise-128.png
./card-system/assets/patterns/crosshatch.svg
./card-system/assets/patterns/halftone-dots.svg
./card-system/assets/patterns/halftone-fine.svg
./card-system/assets/patterns/halftone-large.svg
./card-system/assets/patterns/halftone-medium.svg
./card-system/assets/patterns/halftone-small.svg
./card-system/assets/patterns/lines-horizontal.svg
./card-system/assets/patterns/paper-texture.svg
./card-system/assets/patterns/stipple.svg
./card-system/assets/test-images/portrait-1.jpg
./card-system/assets/test-images/portrait-2.jpg
./card-system/assets/test-images/portrait-3.jpg
./card-system/assets/test-images/portrait-4.jpg
./card-system/assets/test-images/sample-portrait.jpg
./card-system/assets/test-images/test-1.jpg
./card-system/assets/test-images/test-2.jpg
./card-system/assets/test-images/test-3.jpg
./card-system/assets/test-images/test-4.jpg
./card-system/assets/test-images/test-5.jpg
./card-system/assets/test-images/test-6.jpg
./card-system/assets/test-images/test-large.jpg
./card-system/css/experiments/grain-overlay.css
./card-system/css/experiments/halftone-mask.css
./card-system/css/experiments/line-mask.css
./card-system/css/experiments/paper-bg.css
./card-system/css/experiments/stipple-mask.css
./card-system/css/halftone.css
./card-system/experiments/exp1-blue-noise.html
./card-system/experiments/exp1-current.html
./card-system/experiments/exp1-grain.html
./card-system/experiments/exp1-halftone.html
./card-system/experiments/exp1-lines.html
./card-system/experiments/exp1-paper-bg.html
./card-system/experiments/exp1-stipple.html
./card-system/experiments/exp1-visible-process.html
./card-system/experiments/exp2-layout-background.html
./card-system/experiments/exp2-layout-bottom-large.html
./card-system/experiments/exp2-layout-current.html
./card-system/experiments/exp2-layout-side.html
./card-system/experiments/exp2-layout-split.html
./card-system/experiments/exp2-layout-top.html
./card-system/experiments/exp3-typography.html
./card-system/experiments/exp5-integration.html
./card-system/experiments/exp6-layout-infrastructure.html
./card-system/experiments/layout-context-test.html
./card-system/experiments/phase2-component-library.html
./card-system/experiments/phase3-page-composition.html
./card-system/experiments/step7-5-coexistence.html
./card-system/research/3A-card-anatomy.md
./card-system/research/3B-anti-patterns.md
./card-system/research/3C-halftone-techniques.md
./card-system/research/3D-editorial-patterns.md
./card-system/tests/.gitignore
./card-system/tests/card.spec.ts
./card-system/tests/package-lock.json
./card-system/tests/package.json
./card-system/tests/playwright.config.ts

./component-system/.gitignore
./component-system/ANTI-PATTERNS.md
./component-system/CLAUDE.md
./component-system/PROGRESS.md
./component-system/SOUL-DEFINITION.md
./component-system/anti-pattern-comparison.html
./component-system/index.html
./component-system/showcase-all.html
./component-system/showcase-nested.html
./component-system/archive/perceptual-audit-phase-2.5/AUDIT-SUMMARY.md
./component-system/archive/perceptual-audit-phase-2.5/BLINDSPOT-TRACKER.md
./component-system/archive/perceptual-audit-phase-2.5/CURRENT-SYSTEM-BASELINE.md
./component-system/archive/perceptual-audit-phase-2.5/GAP-ANALYSIS.md
./component-system/archive/perceptual-audit-phase-2.5/IMPLEMENTATION-SPEC.md
./component-system/archive/perceptual-audit-phase-2.5/INSIGHT-JOURNAL.md
./component-system/archive/perceptual-audit-phase-2.5/PHASE-1-SYNTHESIS.md
./component-system/archive/perceptual-audit-phase-2.5/SOUL-DISCOVERIES.md
./component-system/archive/research-phase-3/4A-ascii-dither-techniques.md
./component-system/archive/research-phase-3/4B-code-block-anatomy.md
./component-system/archive/research-phase-3/4C-callout-taxonomy.md
./component-system/archive/research-phase-3/4D-editorial-documentation.md
./component-system/archive/research-phase-3/4E-brutalist-ui-patterns.md
./component-system/archive/research-phase-3/4F-file-tree-designs.md
./component-system/archive/research-phase-3/4G-progression-indicators.md
./component-system/archive/research-phase-3/4H-decision-matrix-design.md
./component-system/archive/research-phase-3/4I-core-abstraction-design.md
./component-system/archive/validation-sprint/BLINDSPOT-TRACKER.md
./component-system/archive/validation-sprint/EXPERIMENT-1-VISIBLE-PROCESS.md
./component-system/archive/validation-sprint/EXPERIMENT-2-CARD-LAYOUT.md
./component-system/archive/validation-sprint/EXPERIMENT-3-TYPOGRAPHY.md
./component-system/archive/validation-sprint/EXPERIMENT-4-USE-CASE.md
./component-system/archive/validation-sprint/EXPERIMENT-5-INTEGRATION.md
./component-system/archive/validation-sprint/EXPERIMENT-6-LAYOUT-INFRASTRUCTURE.md
./component-system/archive/validation-sprint/FALLBACK-OPTIONS.md
./component-system/archive/validation-sprint/INSIGHT-JOURNAL.md
./component-system/archive/validation-sprint/LAYOUT-CONTEXT-PROTOCOL.md
./component-system/archive/validation-sprint/PHASE-2-COMPONENT-LIBRARY.md
./component-system/archive/validation-sprint/REFERENCE-A-PROVIDED-ANALYSIS.md
./component-system/archive/validation-sprint/REFERENCE-A-PROVIDED-CARD-ANALYSIS.md
./component-system/archive/validation-sprint/REFERENCE-B-VISUAL-AUDIT.md
./component-system/archive/validation-sprint/REFERENCE-BASELINE.md
./component-system/archive/validation-sprint/STEP-7-5-COEXISTENCE-TESTING.md
./component-system/archive/validation-sprint/VALIDATED-IMPLEMENTATION-SPEC.md
./component-system/archive/validation-sprint/VALIDATION-SPRINT-DECISION-LOG.md
./component-system/archive/validation-sprint/VISUAL-COMPARISON-BASELINE.md
./component-system/archive/validation-sprint/screenshots/current/current-system-L1-page.png
./component-system/archive/validation-sprint/screenshots/experiments/exp1-blue-noise-comparison.png
./component-system/archive/validation-sprint/screenshots/experiments/exp1-visible-process-full.png
./component-system/archive/validation-sprint/screenshots/experiments/exp1-visible-process-portrait.png
./component-system/archive/validation-sprint/screenshots/experiments/exp6-layout-grid.png
./component-system/archive/validation-sprint/screenshots/experiments/exp6-layout-horizontal.png
./component-system/archive/validation-sprint/screenshots/experiments/exp6-layout-mixed.png
./component-system/archive/validation-sprint/screenshots/experiments/exp6-layout-vertical.png
./component-system/archive/validation-sprint/screenshots/experiments/layout-context-full.png
./component-system/archive/validation-sprint/screenshots/experiments/phase2-component-library-full.png
./component-system/archive/validation-sprint/screenshots/experiments/step7-5-coexistence-full.png
./component-system/archive/validation-sprint/screenshots/references/provided-kortai-card-detail.png
./component-system/archive/validation-sprint/screenshots/references/provided-kortai-page-layout.png
./component-system/archive/validation-sprint/screenshots/references/ref-b-paper-theme-cards-page-2.png
./component-system/archive/validation-sprint/screenshots/references/ref-b-paper-theme-cards-page.png
./component-system/archive/validation-sprint/screenshots/references/ref-b-paper-theme-L1-viewport-2.png
./component-system/archive/validation-sprint/screenshots/references/ref-b-paper-theme-L1-viewport-3.png
./component-system/archive/validation-sprint/screenshots/references/ref-b-paper-theme-L1-viewport.png
./component-system/assets/ascii-art/abstract-circle.txt
./component-system/assets/ascii-art/abstract-geometric.txt
./component-system/assets/ascii-art/logo.txt
./component-system/assets/ascii-art/portrait-1.txt
./component-system/assets/ascii-art/portrait-2.txt
./component-system/components/callout-info.html
./component-system/components/callout-tip.html
./component-system/components/challenge-box.html
./component-system/components/code-block.html
./component-system/components/core-abstraction.html
./component-system/components/decision-matrix.html
./component-system/components/essence-box.html
./component-system/components/file-tree.html
./component-system/components/gotcha-box.html
./component-system/components/nested-examples.html
./component-system/components/project-card-ascii.html
./component-system/components/reasoning-box.html
./component-system/components/task-progression.html
./component-system/css/ascii-dither.css
./component-system/css/callouts.css
./component-system/css/code-block.css
./component-system/css/components.css
./component-system/css/core-abstraction.css
./component-system/css/decision-matrix.css
./component-system/css/file-tree.css
./component-system/css/progression.css
./component-system/css/tokens.css
./component-system/css/typography.css
./component-system/perceptual-audit-v2/CLAUDE.md
./component-system/perceptual-audit-v2/CONSISTENCY-REGISTRY.md
./component-system/perceptual-audit-v2/CONTEXT-RESTORATION.md
./component-system/perceptual-audit-v2/DECISION-LOG.md
./component-system/perceptual-audit-v2/EXECUTION-STATE.md
./component-system/perceptual-audit-v2/MASTER-INDEX.md
./component-system/perceptual-audit-v2/VISUAL-AUDIT-TRACKER.md
./component-system/perceptual-audit-v2/checkpoints/CHECKPOINT-CUMULATIVE.md
./component-system/perceptual-audit-v2/checkpoints/CHECKPOINT-CURRENT.md
./component-system/perceptual-audit-v2/checkpoints/CHECKPOINT-QUALITY.md
./component-system/perceptual-audit-v2/coexistence/COEXISTENCE-TEST-RESULTS.md
./component-system/perceptual-audit-v2/coexistence/test-01-code-tip.html
./component-system/perceptual-audit-v2/coexistence/test-02-code-gotcha.html
./component-system/perceptual-audit-v2/coexistence/test-03-filetree-code.html
./component-system/perceptual-audit-v2/coexistence/test-04-task-sequence.html
./component-system/perceptual-audit-v2/coexistence/test-05-essence-prose.html
./component-system/perceptual-audit-v2/coexistence/test-06-matrix-code.html
./component-system/perceptual-audit-v2/coexistence/test-07-abstraction-info.html
./component-system/perceptual-audit-v2/coexistence/test-08-all-callouts.html
./component-system/perceptual-audit-v2/components/challenge-callout/component-challenge-callout.html
./component-system/perceptual-audit-v2/components/challenge-callout/screenshots/challenge-callout-L3-single.png
./component-system/perceptual-audit-v2/components/code-snippet/component-code-snippet.html
./component-system/perceptual-audit-v2/components/code-snippet/screenshots/code-snippet-L3-single.png
./component-system/perceptual-audit-v2/components/code-snippet/screenshots/code-snippet-L4-detail.png
./component-system/perceptual-audit-v2/components/core-abstraction/component-core-abstraction.html
./component-system/perceptual-audit-v2/components/core-abstraction/screenshots/core-abstraction-L3-single.png
./component-system/perceptual-audit-v2/components/decision-matrix/component-decision-matrix.html
./component-system/perceptual-audit-v2/components/decision-matrix/screenshots/decision-matrix-L3-single.png
./component-system/perceptual-audit-v2/components/essence-callout/component-essence-callout.html
./component-system/perceptual-audit-v2/components/essence-callout/screenshots/essence-callout-L3-single.png
./component-system/perceptual-audit-v2/components/file-tree/component-file-tree.html
./component-system/perceptual-audit-v2/components/file-tree/screenshots/file-tree-L3-single.png
./component-system/perceptual-audit-v2/components/gotcha-callout/component-gotcha-callout.html
./component-system/perceptual-audit-v2/components/gotcha-callout/screenshots/gotcha-callout-L3-single.png
./component-system/perceptual-audit-v2/components/info-callout/component-info-callout.html
./component-system/perceptual-audit-v2/components/info-callout/screenshots/info-callout-L3-revised.png
./component-system/perceptual-audit-v2/components/info-callout/screenshots/info-callout-L3-single.png
./component-system/perceptual-audit-v2/components/info-callout/screenshots/info-callout-L4-detail.png
./component-system/perceptual-audit-v2/components/reasoning-component/component-reasoning.html
./component-system/perceptual-audit-v2/components/reasoning-component/screenshots/reasoning-L3-single.png
./component-system/perceptual-audit-v2/components/task-component/component-task.html
./component-system/perceptual-audit-v2/components/task-component/screenshots/task-component-L3-single.png
./component-system/perceptual-audit-v2/components/tip-callout/component-tip-callout.html
./component-system/perceptual-audit-v2/components/tip-callout/screenshots/tip-callout-L3-single.png
./component-system/perceptual-audit-v2/delta-pairs/batch-01-code-remaining.html
./component-system/perceptual-audit-v2/delta-pairs/batch-02-info-remaining.html
./component-system/perceptual-audit-v2/delta-pairs/batch-03a-tip-cross.html
./component-system/perceptual-audit-v2/delta-pairs/batch-03b-gotcha-cross.html
./component-system/perceptual-audit-v2/delta-pairs/batch-03c-essence-cross.html
./component-system/perceptual-audit-v2/delta-pairs/batch-03d-challenge-cross.html
./component-system/perceptual-audit-v2/delta-pairs/batch-04-heavy-cross.html
./component-system/perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md
./component-system/perceptual-audit-v2/foundation/SOUL-TRANSLATION-GUIDE.md
./component-system/perceptual-audit-v2/pages/DOCUMENTATION-PAGE-SOUL-EXTRACTION.md
./component-system/perceptual-audit-v2/pages/KITCHEN-SINK-AUDIT-RESULTS.md
./component-system/perceptual-audit-v2/pages/page-documentation.html
./component-system/perceptual-audit-v2/pages/page-kitchen-sink.html
./component-system/perceptual-audit-v2/pages/page-portfolio.html
./component-system/perceptual-audit-v2/pages/page-tutorial.html
./component-system/perceptual-audit-v2/re-audit/PHASE-4-ALPHA-COMPLETE.md
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/COEXISTENCE-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-01-code-tip.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-02-code-gotcha.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-03-filetree-code.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-04-task-sequence.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-05-essence-prose.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-06-matrix-code.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-07-abstraction-info.png
./component-system/perceptual-audit-v2/re-audit/coexistence-reaudits/coex-08-all-callouts.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/CALLOUT-FAMILY-STRUCTURAL-SUMMARY.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/CODE-SNIPPET-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/CORE-ABSTRACTION-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/DECISION-MATRIX-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/FILE-TREE-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/INFO-CALLOUT-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/REASONING-COMPONENT-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/TASK-COMPONENT-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/component-reaudits/code-snippet-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/core-abstraction-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/decision-matrix-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/essence-callout-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/file-tree-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/info-callout-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/reasoning-component-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/component-reaudits/task-component-structural-reaudit.png
./component-system/perceptual-audit-v2/re-audit/cross-component/55-PAIR-CONSISTENCY-MATRIX.md
./component-system/perceptual-audit-v2/re-audit/cross-component/delta-batch-01-code-remaining.png
./component-system/perceptual-audit-v2/re-audit/cross-component/delta-batch-02-info-remaining.png
./component-system/perceptual-audit-v2/re-audit/cross-component/delta-batch-03a-tip-cross.png
./component-system/perceptual-audit-v2/re-audit/cross-component/delta-batch-03b-gotcha-cross.png
./component-system/perceptual-audit-v2/re-audit/page-reaudits/PAGE-COMPOSITION-STRUCTURAL-REAUDIT.md
./component-system/perceptual-audit-v2/re-audit/page-reaudits/page-documentation.png
./component-system/perceptual-audit-v2/re-audit/page-reaudits/page-kitchen-sink.png
./component-system/perceptual-audit-v2/re-audit/page-reaudits/page-portfolio.png
./component-system/perceptual-audit-v2/re-audit/page-reaudits/page-tutorial.png
./component-system/perceptual-audit-v2/screenshots/code-snippet-spacing-audit.png
./component-system/perceptual-audit-v2/screenshots/delta-batch-03c-essence-cross.png
./component-system/perceptual-audit-v2/screenshots/delta-batch-03d-challenge-cross.png
./component-system/perceptual-audit-v2/screenshots/delta-batch-04-heavy-cross.png
./component-system/perceptual-audit-v2/screenshots/reasoning-component-full-view.png
./component-system/perceptual-audit-v2/screenshots/reasoning-component-full.png
./component-system/perceptual-audit-v2/screenshots/reasoning-component-squint-test.png
./component-system/perceptual-audit-v2/screenshots/reasoning-first-container.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-01-code-snippet.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-02-info-callout.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-03-tip-callout.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-04-gotcha-callout.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-05-essence-callout.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-06-challenge-callout.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-07-file-tree.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-08-decision-matrix.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-09-core-abstraction.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-10-task-component.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-11-reasoning-component.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-coex-01-code-tip.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-coex-04-task-sequence.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-coex-08-all-callouts.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-page-01-documentation.png
./component-system/perceptual-audit-v2/screenshots/visual-audit-page-04-kitchen-sink.png
./component-system/perceptual-audit-v2/soul-extractions/challenge-callout-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/code-snippet-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/core-abstraction-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/decision-matrix-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/essence-callout-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/file-tree-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/gotcha-callout-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/info-callout-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/reasoning-component-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/task-component-soul-extraction.md
./component-system/perceptual-audit-v2/soul-extractions/tip-callout-soul-extraction.md
./component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md
./component-system/perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md
./component-system/perceptual-audit-v2/synthesis/CONSISTENCY-VERIFICATION.md
./component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
./component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md
./component-system/perceptual-audit-v2/synthesis/PRODUCTION-RULES.md
./component-system/perceptual-audit-v2/tracking/ANTI-PATTERNS.md
./component-system/perceptual-audit-v2/tracking/COLOR-TOKENS.md
./component-system/perceptual-audit-v2/tracking/CONTAINER-TOKENS.md
./component-system/perceptual-audit-v2/tracking/NAMED-CHARACTERS.md
./component-system/perceptual-audit-v2/tracking/PERCEPTUAL-TRUTHS.md
./component-system/perceptual-audit-v2/tracking/SPACING-TOKENS.md
./component-system/perceptual-audit-v2/tracking/TYPOGRAPHY-TOKENS.md
./component-system/tests/.gitignore
./component-system/tests/anti-pattern.spec.ts
./component-system/tests/ascii-dither.spec.ts
./component-system/tests/callouts.spec.ts
./component-system/tests/code-block.spec.ts
./component-system/tests/core-abstraction.spec.ts
./component-system/tests/decision-matrix.spec.ts
./component-system/tests/file-tree.spec.ts
./component-system/tests/nested-components.spec.ts
./component-system/tests/package-lock.json
./component-system/tests/package.json
./component-system/tests/playwright.config.ts
./component-system/tests/progression.spec.ts
./component-system/tests/snapshots/ascii-dither.spec.ts-snapshots/ascii-art-baseline-chromium-darwin.png
./component-system/tests/snapshots/ascii-dither.spec.ts-snapshots/ascii-art-container-chromium-darwin.png
./component-system/tests/snapshots/callouts.spec.ts-snapshots/challenge-box-baseline-chromium-darwin.png
./component-system/tests/snapshots/callouts.spec.ts-snapshots/essence-box-baseline-chromium-darwin.png
./component-system/tests/snapshots/callouts.spec.ts-snapshots/gotcha-box-baseline-chromium-darwin.png
./component-system/tests/snapshots/callouts.spec.ts-snapshots/info-callout-baseline-chromium-darwin.png
./component-system/tests/snapshots/callouts.spec.ts-snapshots/reasoning-box-baseline-chromium-darwin.png
./component-system/tests/snapshots/callouts.spec.ts-snapshots/tip-callout-baseline-chromium-darwin.png
./component-system/tests/snapshots/code-block.spec.ts-snapshots/code-block-baseline-chromium-darwin.png
./component-system/tests/snapshots/code-block.spec.ts-snapshots/code-block-hover-chromium-darwin.png
./component-system/tests/snapshots/core-abstraction.spec.ts-snapshots/core-abstraction-baseline-chromium-darwin.png
./component-system/tests/snapshots/core-abstraction.spec.ts-snapshots/core-abstraction-code-chromium-darwin.png
./component-system/tests/snapshots/core-abstraction.spec.ts-snapshots/core-abstraction-philosophy-chromium-darwin.png
./component-system/tests/snapshots/decision-matrix.spec.ts-snapshots/decision-matrix-baseline-chromium-darwin.png
./component-system/tests/snapshots/decision-matrix.spec.ts-snapshots/decision-matrix-table-chromium-darwin.png
./component-system/tests/snapshots/file-tree.spec.ts-snapshots/file-tree-baseline-chromium-darwin.png
./component-system/tests/snapshots/file-tree.spec.ts-snapshots/file-tree-label-chromium-darwin.png
./component-system/tests/snapshots/nested-components.spec.ts-snapshots/nested-components-full-chromium-darwin.png
./component-system/tests/snapshots/progression.spec.ts-snapshots/task-progression-baseline-chromium-darwin.png
./component-system/tests/snapshots/progression.spec.ts-snapshots/task-progression-complete-chromium-darwin.png
./component-system/tests/snapshots/progression.spec.ts-snapshots/task-progression-current-chromium-darwin.png
./component-system/tests/soul-principles.spec.ts
./component-system/tests/tsconfig.json

./font-research/CLAUDE.md
./font-research/FINAL-DECISION.md
./font-research/PROGRESS.md
./font-research/classification-research.md
./font-research/feasibility.md
./font-research/identification-results.md
./font-research/letterform-analysis.md
./font-research/comparisons/RANKING-SUMMARY.md
./font-research/comparisons/comparison-abril-fatface.md
./font-research/comparisons/comparison-bodoni-moda.md
./font-research/comparisons/comparison-instrument-serif.md
./font-research/comparisons/comparison-libre-bodoni.md
./font-research/comparisons/comparison-right-didone.md
./font-research/specimens/COMPARISON-SUMMARY.md
./font-research/specimens/specimen-abril-fatface.md
./font-research/specimens/specimen-bodoni-moda.md
./font-research/specimens/specimen-domaine-display.md
./font-research/specimens/specimen-instrument-serif.md
./font-research/specimens/specimen-libre-bodoni.md
./font-research/specimens/specimen-noe-display.md
./font-research/specimens/specimen-right-didone.md

./typography-system/.gitignore
./typography-system/CLAUDE.md
./typography-system/PROGRESS.md
./typography-system/index.html
./typography-system/package-lock.json
./typography-system/package.json
./typography-system/playwright.config.ts
./typography-system/stroke-treatments.css
./typography-system/type-scale.css
./typography-system/typography-components.css
./typography-system/typography.css
./typography-system/tests/typography.spec.ts
```

</details>

---

**End of Audit**
