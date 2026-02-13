<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/dependency-trace/PHASE-2A-CLASSIFICATION.md
Tier: B | Batch: 10 | Generated: 2026-02-06

1. WHY THIS EXISTS
Human-readable manifest classifying all 910 source files across 3 directories
into DELETE (131), SUPERSEDED (64), KEEP+FULL (253), KEEP+LIGHT (461), and
FLAGGED (1). Includes verification gate results (all 5 PASS), comparison to
plan estimates, and per-file classification with rationale. This is the
authoritative classification that Phase 2B threading headers are derived from.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| TRACE-SUMMARY.md                        | Executive findings inform strategy     |
| 08-OBSERVATIONS-LOG.md                  | Anomalies inform classification        |
| 09-INTEGRITY-REPORT.md                  | Ref integrity informs keep/delete      |
| 11-DEPRECATION-ASSESSMENT.md            | 64 SUPERSEDED files classified here    |
| 02-threading-data/                      | Tier assignments for traced files      |
| 03-relationship-map-data.yaml           | Connection data for reachability       |

6. MUST HONOR
- All T1/DD files must be KEEP+FULL (verification gate V2)
- All debrief outputs must be KEEP+FULL (verification gate V3)
- No KEEP file may have code imports to a DELETE file (gate V1)
- Supersession chains must be complete (gate V5)

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| PHASE-2A-CLASSIFICATION.yaml            | Machine-readable mirror of this data   |
| Phase 2B batch manifest                 | KEEP+FULL = Tier A/B, KEEP+LIGHT = C  |
| Phase 2B threading headers (all files)  | Tier assignment drives header template |
| Future cleanup/deletion agents          | DELETE list for execution              |
| Future agents                           | Which files matter, which to ignore    |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# PHASE 2A CLASSIFICATION — Verified File Manifest

**Generated:** 2026-02-06
**Method:** Systematic classification of all source files across 3 directories using debrief data, reachability analysis, deprecation assessment, and manual verification of untraced files.
**References:** 7 dependency-trace files, 3 threading data files, alignment document decisions.

---

## Section 1: Summary Statistics

### Total Files Scanned

| Category | Count |
|----------|-------|
| Source files (classified) | 910 |
| Junk/build artifacts | 9,424 |
| **Grand total** | **10,334** |

### Source Files by Directory

| Directory | Source Files | In Debrief | Not In Debrief | Junk |
|-----------|-------------|------------|----------------|------|
| design-system/ | 36 | 30 | 6 | 0 |
| design-extraction/ | 515 | ~350 | ~165 | 3,628 |
| docs-spa/ | 359 | 83 (showcase only) | 276 | 5,796 |
| **TOTAL** | **910** | **~463** | **~447** | **9,424** |

### Classification Results

| Classification | Count | % of Source | Primary Contents |
|---------------|-------|-------------|-----------------|
| **DELETE** | 131 | 14.4% | design-system/ (36), zone analyses (84), SOUL-EXTRACTION-COMPLETE (11) |
| **SUPERSEDED** | 64 | 7.0% | archive/ files (62), card-system/SOUL-DEFINITION (1), paper-texture.svg (1) |
| **KEEP + FULL** | 253 | 27.8% | T1 files, app code, content HTML, navigation, configs, research, DD explorations, debrief outputs |
| **KEEP + LIGHT** | 461 | 50.7% | Activity JSON, POC variants, supporting research, images, card-system experiments, screenshots |
| **FLAGGED** | 1 | 0.1% | IndexCardDocs.tsx (dead export) |
| **TOTAL** | **910** | **100%** | |

Plus 9,424 junk/build files as DELETE (not counted in source total).

### Comparison to Plan Estimates

| Category | Plan Estimate | Actual | Explanation |
|----------|--------------|--------|-------------|
| Total source | 945 | 910 | Plan overcounted; actual find results = 910 |
| DELETE source | ~155-170 | 131 | Fewer zone analyses than estimated (95 not 102); no additional orphaned assets found |
| SUPERSEDED | ~50-55 | 64 | validation-sprint/ had 37 files (incl screenshots), not 18 as estimated |
| KEEP+FULL | ~240-260 | 253 | Within range |
| KEEP+LIGHT | ~470-500 | 461 | Slightly below due to lower total count |
| Junk | ~9,416 | 9,424 | Close match |

### Verification Gate Results

| Gate | Result | Notes |
|------|--------|-------|
| V1: No KEEP→DELETE code imports | **PASS** | BlueprintDocs.tsx has CSS comment mentioning design-system (prose, not import). No code imports found. |
| V2: All T1/DD files KEEP+FULL | **PASS** | All 19 T1/DD files verified present and classified KEEP+FULL |
| V3: Debrief outputs protected | **PASS** | 17 dependency-trace files + PHASE-1B-MEGA-DEBRIEF.md all KEEP+FULL |
| V4: No orphaned assets | **PASS (with notes)** | 19 screenshots in perceptual-audit-v2/screenshots/ have no filename refs in markdown but kept as audit evidence (KEEP+LIGHT). 1 paper-texture.svg only referenced by SUPERSEDED files → classified SUPERSEDED. |
| V5: Supersession chains complete | **PASS** | All 4 chains verified: Typography, Soul, Anti-patterns, Perceptual audit |

### DD Visual Verification

| File | Renders | Title |
|------|---------|-------|
| DD-001-breathing.html | PASS | Density Breathing |
| DD-002-gradient.html | PASS (verified via existence) | Density Gradient |
| DD-003-islands.html | PASS | Density Islands |
| DD-004-layers.html | PASS (verified via existence) | Density Layers |
| DD-005-rivers.html | PASS (verified via existence) | Density Rivers |
| DD-006-fractal.html | PASS | Fractal Density |

---

## Section 2: DELETE List

### 2A. Junk/Build Artifacts (9,424 files — not individually listed)

| Category | Path Pattern | Count | Size |
|----------|-------------|-------|------|
| .next/ build cache | docs-spa/.next/ | 5,788 | ~large |
| .velite/ generated | docs-spa/.velite/ | 4 | small |
| .DS_Store macOS | docs-spa/**/.DS_Store | 4 | tiny |
| node_modules/ | design-extraction/*/tests/node_modules/ + typography-system/node_modules/ | 3,605 | ~5.4MB |
| playwright-report/ | design-extraction/*/tests/playwright-report/ | 23 | ~1.8MB |

### 2B. Dead Island — design-system/ (36 files)

**Reason:** Entirely disconnected from T1 foundation. Zero code imports from any other directory, zero structured finding IDs, zero provenance markers. 4 CRITICAL token divergences from soul-locked values (OBS-011 through OBS-017). Per reachability report: "design-system (30 files) scores 0 on reachability from T1."

| Sub-category | Files | In Debrief |
|-------------|-------|-----------|
| Documentation (README + 3 blend specs) | 4 | 1 yes, 3 no |
| CSS (tokens, typography, index, themes, effects) | 10 | 10 yes |
| TSX Components (sanrok, medieval, nous, blend) | 16 | 16 yes |
| Index/barrel files | 6 | 0 (6 not traced) |
| **TOTAL** | **36** | **30 yes, 6 no** |

**Edge case check:** 19 docs-spa files mention "design-system" in prose — these are text references in dependency-trace documentation describing the dead island finding, not code imports. Prose mentions do not block deletion.

### 2C. Component Zone Analyses (95 files)

**Reason:** Scaffolding, not knowledge. Per alignment doc: "Insights fully captured in T1 synthesis. No one traverses to individual zone analyses."

| Sub-category | Count |
|-------------|-------|
| sub-agent-analyses/ files (6 components × 12 files + 1 info-callout) | 73 |
| info-callout misplaced zone files at root | 11 |
| SOUL-EXTRACTION-COMPLETE.md per component (11 components) | 11 |
| **TOTAL** | **95** |

Components with full sub-agent analyses (12 files each): challenge-callout, code-snippet, essence-callout, file-tree, gotcha-callout, tip-callout.

Components with SOUL-EXTRACTION-COMPLETE only: core-abstraction, decision-matrix, reasoning-component, task-component (plus the 7 above).

**Note:** Component HTML implementations and screenshots in these same directories are NOT deleted — classified as KEEP+LIGHT (the audited artifacts themselves).

---

## Section 3: SUPERSEDED List

### 3A. archive/tokens/ — DANGEROUS Values (7 files)

| File | Superseded By | Key Issue | In Debrief |
|------|--------------|-----------|-----------|
| design-extraction/archive/tokens/effects.css | DESIGN-TOKEN-SUMMARY.md (T1) | --radius-sm: 2px → BANNED (soul: 0) | Yes |
| design-extraction/archive/tokens/typography.css | typography-system/typography.css | --font-display: 'Bebas Neue' → WRONG | Yes |
| design-extraction/archive/tokens/colors.css | DESIGN-TOKEN-SUMMARY.md (T1) | Pre-audit palette | Yes |
| design-extraction/archive/tokens/spacing.css | SPACING-TOKENS.md (tracking) | Unvalidated spacing | Yes |
| design-extraction/archive/tokens/index.css | N/A (aggregator) | Aggregates superseded files | Yes |
| design-extraction/archive/tokens/test.html | N/A | Test page for superseded system | Yes |
| design-extraction/archive/tokens/tokens.json | DESIGN-TOKEN-SUMMARY.md (T1) | JSON export of superseded values | No |

### 3B. component-system/ANTI-PATTERNS.md (1 file)

| File | Superseded By | Why Keep Historical | In Debrief |
|------|--------------|-------------------|-----------|
| design-extraction/component-system/ANTI-PATTERNS.md (56KB) | ANTI-PATTERNS-REGISTRY.md (19KB, T1) | Origin of comprehensive anti-pattern documentation | Yes |

### 3C. perceptual-audit-phase-2.5/ (8 files)

| File | Superseded By | In Debrief |
|------|--------------|-----------|
| AUDIT-SUMMARY.md | CONSISTENCY-VERIFICATION.md (T1) | Yes |
| BLINDSPOT-TRACKER.md | v2 component analyses | Yes |
| CURRENT-SYSTEM-BASELINE.md | v2 tracking files | Yes |
| GAP-ANALYSIS.md | v2 re-audit files | Yes |
| IMPLEMENTATION-SPEC.md | PRODUCTION-RULES.md (T1) | Yes |
| INSIGHT-JOURNAL.md | Absorbed into T1 synthesis | Yes |
| PHASE-1-SYNTHESIS.md | 6 T1 synthesis files | Yes |
| SOUL-DISCOVERIES.md (7 soul pieces) | MASTER-SOUL-SYNTHESIS.md (5 soul pieces, T1) | Yes |

### 3D. research-phase-3/ (9 files)

All 4A through 4I research files. Each ~20-67KB of deep research consumed into CSS implementations.

| File | Superseded By | In Debrief |
|------|--------------|-----------|
| 4A-ascii-dither-techniques.md | css/ascii-dither.css | Yes |
| 4B-code-block-anatomy.md | css/code-block.css | Yes |
| 4C-callout-taxonomy.md | css/callouts.css | Yes |
| 4D-editorial-documentation.md | Component implementations | Yes |
| 4E-brutalist-ui-patterns.md | Soul principles in T1 | Yes |
| 4F-file-tree-designs.md | css/file-tree.css | Yes |
| 4G-progression-indicators.md | css/progression.css | Yes |
| 4H-decision-matrix-design.md | css/decision-matrix.css | Yes |
| 4I-core-abstraction-design.md | css/core-abstraction.css | Yes |

### 3E. validation-sprint/ (37 files)

19 markdown files + 18 screenshots. Results consumed by component-system/SOUL-DEFINITION.md.

| Content | Count | In Debrief |
|---------|-------|-----------|
| Experiment reports (EXPERIMENT-1 through 6) | 6 | Yes |
| Reference/analysis files | 9 | Yes |
| Decision logs/specs | 4 | Yes |
| Screenshots (current, experiments, references) | 18 | Yes |

### 3F. card-system/SOUL-DEFINITION.md (1 file)

| File | Superseded By | In Debrief |
|------|--------------|-----------|
| design-extraction/card-system/SOUL-DEFINITION.md (10KB) | component-system/SOUL-DEFINITION.md (58KB) → MASTER-SOUL-SYNTHESIS.md (T1) | Yes |

### 3G. Orphaned Asset (1 file)

| File | Referenced By | In Debrief |
|------|-------------|-----------|
| design-extraction/card-system/assets/patterns/paper-texture.svg | archive/variations/research/zine-punk.md (SUPERSEDED) | No |

---

## Section 4: KEEP + FULL List

### 4A. T1 Synthesis (6 files)

| File | Role | Inbound Refs |
|------|------|-------------|
| design-extraction/.../synthesis/MASTER-SOUL-SYNTHESIS.md | Master soul definition ("The Unhurried Editor") | 15+ |
| design-extraction/.../synthesis/DESIGN-TOKEN-SUMMARY.md | Complete :root block with locked CSS variables | 18+ |
| design-extraction/.../synthesis/CHARACTER-FAMILY-COMPLETE.md | 11 named component characters with soul scores | 6+ |
| design-extraction/.../synthesis/PRODUCTION-RULES.md | 6 Universal Rules with CSS enforcement | 4+ |
| design-extraction/.../synthesis/ANTI-PATTERNS-REGISTRY.md | Complete banned properties and "The Soul Test" | 6+ |
| design-extraction/.../synthesis/CONSISTENCY-VERIFICATION.md | 10-point universal + 11 component checklists | 4+ |

### 4B. T1 Tracking (7 files)

| File | Role |
|------|------|
| design-extraction/.../tracking/PERCEPTUAL-TRUTHS.md | Raw audit data → feeds MASTER-SOUL-SYNTHESIS |
| design-extraction/.../tracking/NAMED-CHARACTERS.md | Component character names → feeds CHARACTER-FAMILY-COMPLETE |
| design-extraction/.../tracking/COLOR-TOKENS.md | Color values → feeds DESIGN-TOKEN-SUMMARY |
| design-extraction/.../tracking/TYPOGRAPHY-TOKENS.md | Typography values |
| design-extraction/.../tracking/SPACING-TOKENS.md | Spacing values |
| design-extraction/.../tracking/CONTAINER-TOKENS.md | Container/geometry values |
| design-extraction/.../tracking/ANTI-PATTERNS.md | Anti-pattern tracking |

### 4C. DD Explorations (6 files)

| File | Inbound Refs | Note |
|------|-------------|------|
| DD-001-breathing.html | 7+ | Lowest score (33/40) but T1 source of truth |
| DD-002-gradient.html | 4+ | |
| DD-003-islands.html | 4+ | |
| DD-004-layers.html | 6+ | |
| DD-005-rivers.html | 6+ | |
| DD-006-fractal.html | 20+ | **Most-referenced artifact in entire system** |

### 4D. Debrief Outputs (18 files)

All 17 files in dependency-trace/ + PHASE-1B-MEGA-DEBRIEF.md. See protected_files list in YAML.

### 4E. Knowledge Architecture (5 files)

| File | Role |
|------|------|
| KA-DECISIONS.md | Architectural decisions for knowledge organization |
| KA-POSITION.md | Position mapping of all files to areas |
| KA-VERIFICATION.md | Verification criteria |
| PIPELINE-BACKBONE.md | Pipeline structure documentation |
| SOURCE-OF-TRUTH-REGISTRY.md | Authoritative T1 file registry |

### 4F. Showcase Research (7 files)

| File | Role |
|------|------|
| R1-DOCUMENTATION-PATTERNS.md | 28 findings |
| R2-CREATIVE-LAYOUTS.md | 27+ findings |
| R3-DENSITY-DIMENSIONS.md | 51 findings, 76% applied |
| R4-AXIS-INNOVATIONS.md | 192 findings (AD stage pending) |
| R5-COMBINATION-THEORY.md | 39 findings (CD stage pending) |
| RESEARCH-SYNTHESIS.md | Cross-research insights |
| research/CLAUDE.md | Navigation file |

### 4G. Showcase Checkpoints (19 files)

| File | Role |
|------|------|
| MASTER-STATE.md | Central position tracking |
| RESEARCH-ACTIVE.md | Research application tracking (mandatory reading) |
| SOUL-DISCOVERIES.md | 5 non-negotiable soul constraints |
| DISCOVERIES-LOG.md | Learnings from explorations |
| COMPONENT-AUDIT-FOUNDATION.md | R-finding tables |
| COMPONENT-AUDIT-COMP-001-011.md | Component audit results |
| DD-REAUDIT-CHECKPOINT.md | DD re-audit state |
| DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | DD re-audit synthesis |
| FOUNDATION-REMEDIATION-SYNTHESIS.md | Remediation synthesis |
| RETROACTIVE-AUDIT-DD-001-006.md | DD retroactive audit |
| COMPONENTS-REGISTRY.md | Component registry |
| PERCEPTUAL-AUDIT-LOG.md | Audit log |
| PERCEPTUAL-DEEPENING-SUMMARY.md | Deepening summary |
| REMEDIATION-CHECKPOINT.md | Remediation state |
| RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md | Template |
| SECTIONS-PROGRESS.md | Section tracking |
| VISUAL-AUDIT-COMP-001-011.md | Visual audit |
| VISUAL-AUDIT-DD-001-006.md | DD visual audit |
| checkpoints/CLAUDE.md | Navigation file |

### 4H. Showcase DESIGN-SYSTEM/ Structure (~40 files)

| Sub-directory | Files | Role |
|--------------|-------|------|
| README.md (109KB) | 1 | DO NOT TOUCH — philosophical anchor |
| BACKBONE.md | 1 | Master pipeline narrative |
| QUICK-START.md | 1 | Quick start guide |
| CLAUDE.md | 1 | Navigation |
| tokens/ (4 files) | 4 | colors, typography, spacing, geometry |
| patterns/ (3 files) | 3 | PATTERN-INDEX, density-patterns, combination-rules |
| anti-patterns/registry.md | 1 | Condensed anti-patterns |
| components/OVERVIEW.md | 1 | Component overview |
| guides/migration-guide.md | 1 | Migration guide |
| provenance/CLAUDE.md | 1 | Navigation |
| provenance/PIPELINE-MANIFEST.md | 1 | Master finding registry |
| provenance/RESEARCH-ACTIVE.md | 1 | Synced copy |
| provenance/SOUL-DISCOVERIES.md | 1 | Synced copy |
| provenance/original-research/ (7 files) | 7 | R1-R5 + RESEARCH-SYNTHESIS + CLAUDE.md synced copies |
| provenance/stage-1-components/ (4 files) | 4 | CLAUDE.md, component-findings, FOUNDATION-REMEDIATION, STAGE-HEADER |
| provenance/stage-2-density-dd/ (6 files) | 6 | CLAUDE.md, DD-outbound-findings, DD-REAUDIT-CHECKPOINT, DD-REAUDIT-PERCEPTUAL, HANDOFF-DD-TO-OD, STAGE-HEADER |
| provenance/stage-3-organization-od/ (2 files) | 2 | CLAUDE.md, STAGE-HEADER |
| provenance/stage-4-axis-ad/ (2 files) | 2 | CLAUDE.md, STAGE-HEADER |
| provenance/stage-5-combination-cd/ (2 files) | 2 | CLAUDE.md, STAGE-HEADER |

### 4I. Showcase Navigation (5 files)

| File | Role |
|------|------|
| showcase/CLAUDE.md | Root navigation + mandatory process rules |
| showcase/FINDINGS-INDEX.md | Navigation hub for all findings |
| explorations/CLAUDE.md | Explorations navigation |
| explorations/density/CLAUDE.md | DD navigation |
| explorations/organizational/CLAUDE.md | OD placeholder navigation |

### 4J. design-extraction Root + Key Files (~15 files)

| File | Role |
|------|------|
| design-extraction/CLAUDE.md | Entry point (stale for Phase 4 — flag for UPDATE) |
| design-extraction/README.md | External entry point (stale phase table — flag for UPDATE) |
| design-extraction/.gitignore | Git config |
| component-system/.gitignore | Git config |
| component-system/SOUL-DEFINITION.md (58KB) | DO NOT TOUCH — complete authority |
| component-system/index.html | Showcase page |
| component-system/showcase-all.html | All-component showcase |
| component-system/showcase-nested.html | Nested component showcase |
| component-system/PROGRESS.md | Process tracker |
| component-system/perceptual-audit-v2/MASTER-INDEX.md | Navigation hub |
| component-system/perceptual-audit-v2/EXECUTION-STATE.md | Orphan-But-Valuable (29KB) |
| component-system/perceptual-audit-v2/CONTEXT-RESTORATION.md | Orphan-But-Valuable (19KB) |
| component-system/perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md | T1 foundation |
| component-system/perceptual-audit-v2/foundation/SOUL-TRANSLATION-GUIDE.md | T1 foundation |
| component-system/perceptual-audit-v2/re-audit/cross-component/55-PAIR-CONSISTENCY-MATRIX.md (63KB) | DO NOT TOUCH |

### 4K. design-extraction CSS Production Files (9 files)

| File | Role |
|------|------|
| component-system/css/variables.css | Direct T1 consumer — CSS custom properties |
| component-system/css/ascii-dither.css | T1 production rules |
| component-system/css/callouts.css | T1 production rules |
| component-system/css/code-block.css | T1 production rules |
| component-system/css/components.css | T1 production rules |
| component-system/css/core-abstraction.css | T1 production rules |
| component-system/css/decision-matrix.css | T1 production rules |
| component-system/css/file-tree.css | T1 production rules |
| component-system/css/progression.css | T1 production rules |

### 4L. docs-spa App Code (~14 files)

| File | Role |
|------|------|
| app/layout.tsx | App root layout |
| app/page.tsx | App root page |
| app/globals.css | Global stylesheet |
| app/favicon.ico | Favicon |
| app/(docs)/layout.tsx | Docs route group layout |
| app/(docs)/synthesis/[slug]/page.tsx | Dynamic synthesis page |
| app/(docs)/template.tsx | Docs route group template |
| mdx-components.tsx | MDX component mappings |
| next-env.d.ts | TypeScript declarations |
| .gitignore | Git config |
| .prettierrc | Prettier config |
| .prettierignore | Prettier ignore |
| app/poc/page.tsx | POC gallery index |
| app/poc/variants/page.tsx | POC variant comparison |

### 4M. docs-spa Content Components (12 files)

| File | Role |
|------|------|
| components/content/index.ts | Barrel export |
| components/content/CodeBlock.tsx | Code block renderer |
| components/content/CopyButtonHandler.tsx | Copy-to-clipboard |
| components/content/CoreAbstraction.tsx | Core abstraction block |
| components/content/DesignDecision.tsx | Design decision block |
| components/content/EssenceBox.tsx | Essence box block |
| components/content/FileStructure.tsx | File structure block |
| components/content/GotchaBox.tsx | Gotcha box block |
| components/content/HighlightableSection.tsx | Highlightable section |
| components/content/PathOfTask.tsx | Path of task block |
| components/content/WhatsHard.tsx | What's hard block |
| components/content/WhenToUse.tsx | When to use block |

### 4N. docs-spa Content Pages (76 files)

75 content.html files + 1 navigation.json + 1 MDX file. All content pages are KEEP+FULL as they are the rendered documentation.

---

## Section 5: KEEP + LIGHT List

### 5A. Activity JSON (76 files)

75 activity.json files (one per content page) + 1 master-playbook/activity.json. Activity Zone metadata for component interaction tracking.

### 5B. POC Variants (~43 files)

| Sub-directory | Files | Content |
|--------------|-------|---------|
| poc/attio-docs/ | 9 | Self-contained Attio-style POC with local components |
| poc/editorial-docs/ | 15 | Self-contained editorial POC with local components + tokens |
| poc/[17 single-file variants] | 17 | Blueprint, constellation, dense-match, design-compare, etc. |
| poc/component-audit, poc/design-system | 2 | Utility POC pages |

### 5C. UI POC Components (8 files)

BlueprintDocs, LevelCardPOC, LevelCardVariants, MountainExpedition, NotebookDocs, PersonalNotebook, SkillConstellation, TradingCards — all in components/ui-poc/.

### 5D. design-extraction Card System (~52 files)

| Sub-directory | Files | Content |
|--------------|-------|---------|
| card-system/card.css | 1 | Card stylesheet |
| card-system/index.html | 1 | Demo page |
| card-system/PROGRESS.md | 1 | Process tracker |
| card-system/research/ (4 files) | 4 | 3A-3D research files (except 3B → anti-patterns chain) |
| card-system/css/experiments/ (5 files) | 5 | CSS experiment files |
| card-system/css/halftone.css | 1 | Halftone stylesheet |
| card-system/experiments/ (20+ HTML files) | ~20 | HTML experiment files |
| card-system/assets/patterns/ (9 SVGs + PNG, minus paper-texture) | 9 | SVG patterns + blue noise PNG |
| card-system/assets/test-images/ (12 JPGs) | 12 | Test portrait images |
| card-system/tests/ (4 files + 2 snapshots) | 6 | Playwright tests, config, snapshots |

Note: card-system/SOUL-DEFINITION.md is classified SUPERSEDED (Section 3F), not KEEP.

### 5E. design-extraction Font Research (20 files)

All files in font-research/: FINAL-DECISION.md, classification-research.md, feasibility.md, identification-results.md, letterform-analysis.md, PROGRESS.md, 5 comparisons, 7 specimens, RANKING-SUMMARY, COMPARISON-SUMMARY.

### 5F. design-extraction Typography System (~13 files)

typography.css (T1 locked — KEEP+FULL counted in 4J), plus: index.html, stroke-treatments.css, type-scale.css, typography-components.css, PROGRESS.md, .gitignore, package.json, package-lock.json, playwright.config.ts, tests/typography.spec.ts, 3 test snapshots.

### 5G. design-extraction Archive Non-Superseded (~48 files)

| Sub-directory | Files | Content |
|--------------|-------|---------|
| archive/components/specs/ (5 files) | 5 | Component specification docs |
| archive/extraction/ (8 files) | 8 | Image analysis files + synthesis |
| archive/PROGRESS-variations.md | 1 | Historical progress tracker |
| archive/variations/ (~34 files) | ~34 | HTML demos, research, showcase, tests, validation |

### 5H. design-extraction Component System Supporting (~65 files)

| Sub-directory | Files | Content |
|--------------|-------|---------|
| component-system/anti-pattern-comparison.html | 1 | Visual comparison page |
| component-system/components/ (13 HTML files) | 13 | Component implementations being audited |
| component-system/assets/ascii-art/ (5 files) | 5 | ASCII art assets |
| component-system/tests/ (~24 files excl node_modules) | 24 | Test specs, config, snapshots, tsconfig |
| perceptual-audit-v2/CHECKPOINT-CURRENT.md | 1 | Session checkpoint |
| perceptual-audit-v2/CONSISTENCY-REGISTRY.md | 1 | Consistency tracking |
| perceptual-audit-v2/DECISION-LOG.md | 1 | Process decisions |
| perceptual-audit-v2/VISUAL-AUDIT-TRACKER.md | 1 | Visual audit tracking |
| perceptual-audit-v2/checkpoints/ (3 files) | 3 | Session checkpoints |
| perceptual-audit-v2/coexistence/ (9 files) | 9 | HTML tests + results MD |
| perceptual-audit-v2/delta-pairs/ (7 files) | 7 | HTML batch comparisons |
| perceptual-audit-v2/pages/ (6 files) | 6 | Page HTML + analysis MD |
| perceptual-audit-v2/re-audit/ (~28 files excl 55-PAIR) | ~28 | Re-audit markdown + screenshots |
| perceptual-audit-v2/screenshots/ (~23 files) | ~23 | Audit screenshots (19 unreferenced but kept as evidence) |
| perceptual-audit-v2/soul-extractions/ (11 files) | 11 | Component soul extraction summaries |
| perceptual-audit-v2/components/*/component-*.html (11 files) | 11 | Component HTML implementations |
| perceptual-audit-v2/components/*/screenshots/*.png (~16 files) | ~16 | Component audit screenshots |

### 5I. Showcase Screenshots (20 files)

| Sub-directory | Files |
|--------------|-------|
| audit-screenshots/cycle-1/ (14 PNGs) | 14 |
| audit-screenshots/dd-reaudit/ (6 PNGs) | 6 |

### 5J. Showcase DD Screenshots (7 files)

| Sub-directory | Files |
|--------------|-------|
| screenshots/explorations/ (6 PNGs: DD-001 through DD-006) | 6 |
| screenshots/remediation/ (1 PNG: DD-001-breathing-fixed) | 1 |

---

## Section 6: FLAGGED FOR REVIEW

### 6A. Code Dependencies (DO NOT DELETE)

None. No DELETE files are imported by KEEP files via code.

### 6B. Straddling Files

None identified. All files clearly fall into one category.

### 6C. Cross-Reference Issues (KEEP → DELETE prose mentions)

| KEEP File | Mentions DELETE File | Type | Action |
|-----------|---------------------|------|--------|
| Multiple dependency-trace/*.md | "design-system/" directory | Prose description | No action — descriptions of the dead island finding remain valid |
| BlueprintDocs.tsx | "design-system/src/styles/tokens.css" | CSS comment | No action — comment documents where token values were copied from |
| KA-DECISIONS.md | "sub-agent-analyses" | Prose reference | No action — describes the human decision to DELETE these files |
| PHASE-1B-MEGA-DEBRIEF.md | "sub-agent-analyses" | Prose reference | No action — historical debrief document |

### 6D. Not In Debrief Files Needing Verification

| File | Classification | Verification |
|------|---------------|-------------|
| design-system/docs/BLENDED-THEME-NOUS-DOMINANT.md | DELETE | Part of dead island — same reasoning |
| design-system/docs/BLENDED-THEME-SANROK-DOMINANT.md | DELETE | Part of dead island |
| design-system/docs/MEDIEVAL-BLEND-SPECIFICATION.md | DELETE | Part of dead island |
| design-system/src/components/*/index.ts (6 files) | DELETE | Barrel exports for dead island components |
| design-extraction/archive/tokens/tokens.json | SUPERSEDED | JSON of superseded token values |
| design-extraction/card-system/assets/patterns/paper-texture.svg | SUPERSEDED | Only referenced by SUPERSEDED files |
| docs-spa/components/ui-poc/IndexCardDocs.tsx | **FLAGGED** | Exported but never imported |

### 6E. Other Flags

| Item | Issue | Recommended Action |
|------|-------|-------------------|
| docs-spa/components/ui-poc/IndexCardDocs.tsx | Component exported but never imported by any page | Human decides: wire up or delete |
| design-extraction/CLAUDE.md | Stale — covers Phases 1-3 only (OBS-005) | Update for Phase 4 (not DELETE) |
| design-extraction/README.md | Stale phase table (OBS-006) | Update (not DELETE) |
| showcase/DESIGN-SYSTEM/README.md (109KB) | Contains hypothetical OD examples (OBS-002) | Add disclaimer (not DELETE) |

---

## Section 7: Discrepancies from Plan/Alignment Document

### File Count Differences

| Item | Plan Estimate | Actual | Reason |
|------|--------------|--------|--------|
| Total source files | 945 | 910 | Plan estimated from debrief's maxdepth 4 scan + estimates; actual find is definitive |
| design-extraction source | 542 | 515 | Plan likely counted some test-results or edge files |
| docs-spa source | 367 | 359 | Similar overcounting |
| Zone analyses DELETE | 102 | 95 | Info-callout has 12 zone files (11 root + 1 in sub-agent), not ~14 as estimated. Also count was 73+11+11=95 total |
| validation-sprint SUPERSEDED | 18 | 37 | Plan missed 18 screenshots in the directory |

### Category Movement

| File | Plan Said | Actual | Reason |
|------|----------|--------|--------|
| archive/tokens/tokens.json | Not mentioned | SUPERSEDED | Found during file scan — JSON export of superseded token values |
| paper-texture.svg | Not mentioned | SUPERSEDED | V4 found it only referenced by SUPERSEDED archive files |
| 19 perceptual-audit-v2 screenshots | Plan said "verify with V4" | KEEP+LIGHT | Unreferenced by filename but kept as audit evidence |

### Count Reconciliation

```
DELETE:      131  (design-system:36 + zones:73 + info-callout-zones:11 + SOUL-EXTRACTION:11)
SUPERSEDED:   64  (tokens:7 + ANTI-PATTERNS:1 + phase2.5:8 + research3:9 + val-sprint:37 + card-soul:1 + svg:1)
KEEP+FULL:   253
KEEP+LIGHT:  461
FLAGGED:       1
─────────────────
TOTAL:       910  ✓
```

---

## Section 8: Folders Needing CLAUDE.md

| Folder Path | Current Status | Action | Priority |
|-------------|---------------|--------|----------|
| design-system/ | MISSING | CREATE (per HP-003) — warn about token divergence, document dead island status | HIGH |
| design-extraction/ | EXISTS but STALE (OBS-005) | UPDATE for Phase 4 — add T1 synthesis paths | HIGH |
| design-extraction/component-system/ | EXISTS (.gitignore only) | CREATE CLAUDE.md — navigation to perceptual-audit-v2/ | MEDIUM |
| design-extraction/component-system/perceptual-audit-v2/ | EXISTS (MASTER-INDEX.md serves this role) | VERIFY — MASTER-INDEX.md adequate | LOW |
| design-extraction/card-system/ | MISSING | CREATE — document Phase 3 status, link to SOUL-DEFINITION.md | MEDIUM |
| design-extraction/font-research/ | MISSING | CREATE — document font selection, link to FINAL-DECISION.md | LOW |
| design-extraction/typography-system/ | MISSING | CREATE — document Phase 1-2, T1 locked status | LOW |
| design-extraction/archive/ | MISSING | CREATE — warn about SUPERSEDED content, point to T1 | MEDIUM |
| docs-spa/app/showcase/knowledge-architecture/ | MISSING | CREATE — document debrief outputs, link to PIPELINE-BACKBONE | LOW |
| docs-spa/app/showcase/dependency-trace/ | MISSING | CREATE — document Phase 1B outputs, this classification | LOW |

---

## CONTEXT RECOVERY BLOCK

```
CONTEXT RECOVERY: PHASE 2A PART 1 — COMPLETE
═══════════════════════════════════════════════════════════════

STATUS: Classification COMPLETE. All 910 source files classified.

FINAL COUNTS:
- DELETE: 131 source + 9,424 junk = 9,555 total
- SUPERSEDED: 64 source
- KEEP+FULL: 253 source
- KEEP+LIGHT: 461 source
- FLAGGED: 1 (IndexCardDocs.tsx)

VERIFICATION: All 5 gates PASSED.

FLAGGED ITEMS FOR HUMAN REVIEW:
1. docs-spa/components/ui-poc/IndexCardDocs.tsx — dead export, KEEP or DELETE?

OUTPUT FILES:
- PHASE-2A-CLASSIFICATION.md (this file)
- PHASE-2A-CLASSIFICATION.yaml (machine-readable)

WHAT COMES NEXT:
- Human resolves 1 FLAGGED item ✅ (DELETE — dead code)
- Phase 2A Part 2: Execute deletions + add SUPERSEDED headers ✅
- Phase 2A Part 3: Create/update CLAUDE.md files + FOLDER-MAP.md
- Phase 2B: Generate inline sections for KEEP files
═══════════════════════════════════════════════════════════════
```

---

## Section 7: Phase 2A Part 2 — Execution Log

**Executed:** 2026-02-06
**Duration:** ~5 minutes (4 parallel agents + direct operations)

### Operations Completed

| Operation | Description | Files Affected | Status |
|-----------|-------------|----------------|--------|
| OP-1 | Delete `design-system/` directory | 36 deleted | PASS |
| OP-2A | Delete 7 `sub-agent-analyses/` dirs | 73 deleted | PASS |
| OP-2B | Delete 11 info-callout zone files | 11 deleted | PASS |
| OP-2C | Delete 11 `SOUL-EXTRACTION-COMPLETE.md` | 11 deleted | PASS |
| OP-3 | Delete `IndexCardDocs.tsx` (FLAGGED→DELETE) | 1 deleted | PASS |
| OP-4A | SUPERSEDED headers: `archive/tokens/` | 7 modified | PASS |
| OP-4B | SUPERSEDED header: `ANTI-PATTERNS.md` | 1 modified | PASS |
| OP-4C | SUPERSEDED headers: `perceptual-audit-phase-2.5/` | 8 modified | PASS |
| OP-4D | SUPERSEDED headers: `research-phase-3/` | 9 modified | PASS |
| OP-4E | SUPERSEDED headers: `validation-sprint/` (.md only) | 19 modified | PASS |
| OP-4F | SUPERSEDED header: `card-system/SOUL-DEFINITION.md` | 1 modified | PASS |
| OP-4G | SUPERSEDED header: `paper-texture.svg` | 1 modified | PASS |
| OP-5 | Update `.gitignore` (`.next/`, `.velite/`, `playwright-report/`, `test-results/`) | 1 modified | PASS |
| OP-6 | Verify `medieval-blend.css` bug resolved | 0 (verification) | PASS |
| OP-7 | Clean up empty directories | 29 dirs removed | PASS |

### Verification Gates (OP-8)

| Gate | Description | Result |
|------|-------------|--------|
| V1 | All 132 DELETE files deleted | PASS (784 source files remain) |
| V2 | All 46 text SUPERSEDED files have headers | PASS (7+1+8+9+19+1+1=46) |
| V3 | All critical KEEP files still exist | PASS (7/7 verified) |
| V4 | No empty directories remain | PASS (0 empty dirs) |
| V5 | `.gitignore` has all required entries | PASS (5/5 entries) |
| V6 | All 4 supersession chains intact | PASS (Typography, Soul, Anti-patterns, Perceptual audit) |

### Human Decisions Executed

| Decision | Resolution | File(s) |
|----------|------------|---------|
| Zone analyses (95 files) | DELETE | `sub-agent-analyses/` + zone files + SOUL-EXTRACTION-COMPLETE.md |
| IndexCardDocs.tsx (FLAGGED) | DELETE | `docs-spa/components/ui-poc/IndexCardDocs.tsx` |
| Unreferenced screenshots (19) | KEEP+LIGHT | No action taken (preserved) |
| paper-texture.svg | SUPERSEDED | Header added, file preserved |
| 18 validation-sprint PNGs | Implicit SUPERSEDED | No headers (binary files) |

### Final Counts

```
Source files deleted:     132 (36 + 95 + 1)
SUPERSEDED text headers:   46 (7 + 1 + 8 + 9 + 19 + 1 + 1)
SUPERSEDED implicit:       18 (validation-sprint PNGs)
Empty dirs cleaned:        29
Gitignore entries added:    4 (.next/, .velite/, playwright-report/, test-results/)
Source files remaining:   784
```
