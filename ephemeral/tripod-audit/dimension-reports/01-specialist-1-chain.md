# Dimension Report 01: Specialist 1 (Findings Mapper) Knowledge Chain

## Executive Summary

Specialist 1's knowledge chain is **the strongest link in the tripod pipeline**. S1 produces deeply content-specific, CSS-actionable findings that survive synthesis and propagate into final HTML with high fidelity. Across both runs, S1 generated 24-25 HIGH findings from a genuine reading of the full 4,810-line research corpus. The synthesizer consumed 20-24 of these, transforming them into mechanisms and zone-specific build actions with CSS. The final HTML implements the majority of S1's recommendations, though without explicit CITE comments tracing back to finding IDs.

**Overall Rating: STRONG with traceability gap.**

---

## A. Absorption Depth

### Molly Run

- **HIGH findings produced:** 24
- **MEDIUM findings:** 19
- **Cross-references:** 5
- **Research files cited:** All 7 (R1: 584 lines, R2: 810 lines, R3: 553 lines, R4: 990 lines, R5: 784 lines, RESEARCH-SYNTHESIS: 383 lines, R5-EVALUATION-MATRIX: 706 lines)
- **Agent log claims:** "337 findings assessed" -- full corpus.

**Content-specificity analysis:**

Every HIGH finding is anchored to specific Parts of THIS article. Examples:

| Finding | Content-Specific Detail |
|---------|------------------------|
| R3-Insight-3 (CRESCENDO) | "cartouche zone 64-80px... survey grid zone 40-48px... annotation zone 48-56px" -- directly tied to the Panopticon's cartographic metaphor zones |
| R3-Insight-29 (Density Contrast) | Names "Part V -> Part VI transition" and "Goodhart's Law" as the specific content moment |
| R2-1.2 (Pull Quotes) | Names "7 key quotes (Part XIII)" and specifies semantic colors: "blue (#4A90D9) for self-legibility, amber (#D97706) for warnings, #E83025 for capability claims" |
| R4-3.2 (Cinematic) | Names "the $2000 story" and "individual domain descriptions" as close-up moments |
| R1-5.4 (Tech Spec) | Names specific domain paths "~/nox, ~/trades" as data labels |
| R5-T2 (Velocity) | Names "Parts IV-V stack 3+ code blocks (bash, tmux, cron)" as the specific risk |

**Could these apply to any article?** NO. The rationale sections consistently name specific content parts (Part I, Part VI, Part XIII), specific content elements (the $2000 story, the Flutterwhat critique, the 8-domain taxonomy), and specific metaphor properties (cartographic survey, depth stratification, survey grid squares). A generic summary agent could not have produced these without reading the content and TC brief.

**Absorption Rating: DEEP.** S1 genuinely mined the knowledge base and translated findings into content-specific CSS actions. The finding IDs (R3-Insight-3, R4-3.2, R5-S1, etc.) all correspond to real entries in the research files. No hallucinated finding IDs detected.

### Yegge Run

- **HIGH findings produced:** 25
- **MEDIUM findings:** 18
- **Cross-references:** 5
- **Research files cited:** Same 7 files, same line counts.

**Content-specificity analysis:**

| Finding | Content-Specific Detail |
|---------|------------------------|
| R3-Insight 5 (Geological) | Maps to "control tower metaphor IS a geological model -- page descends from warm human surface (Overseer) through structural middle floors (8 Roles) to dark data bedrock (Beads)" |
| R2-Finding 1.2 (Pull Quotes) | Names specific Yegge quotes: "The world's biggest fuckin' ant," "Smuggled 400 miles upriver in my ass," "You're not a programmer anymore. You're the head chef" |
| R2-Finding 4.1 (Bento Grid) | Names "Town-Level roles (Mayor, Deacon, Dogs) in a 2-column bento arrangement with Mayor wider, Rig-Level roles full-width, Worker-Level (Crew) minimal inline" |
| R5-T3 (Semantic Temperature) | Names "CODE->PROVOCATIVE (Implementation section of bash scripts -> Quotes section of 'smuggled 400 miles upriver')" as the most dramatic register shift |
| R3-Insight 30 (Density Debt) | Names "8 Roles Architecture section (~800 words, 8 role subsections, ASCII diagrams, code blocks, tables)" as the density debt creator |

**Absorption Rating: DEEP.** Same quality as molly run. Content-specific throughout.

### Cross-Run Comparison (Absorption)

The two outputs are **structurally similar but semantically different**. Both follow the same template (Content Structural Character -> Governing Metaphor -> HIGH Findings -> MEDIUM -> Cross-References -> Agent Log). Both cite largely the same finding IDs from R1-R5. But the CONTENT of each finding's rationale and CSS actions are meaningfully different:

| Dimension | Molly Run | Yegge Run |
|-----------|-----------|-----------|
| Metaphor | "Cartographic survey station" | "Industrial control tower" |
| Zone count | 5 (Cartouche, Grid, Annotations, Legend, Terra Incognita) | 6 (Overseer, Operations, Bedrock, Philosophical, Factory, Resolution) |
| Background arc | Parchment -> Drafting White -> Fieldwork -> Parchment -> Bedrock | Warm cream -> Dense white -> Dark bedrock -> Earthy -> Earthy -> Return warm |
| R3-Insight-5 deployment | 4 background zones for geological depth | 5 background zones for tower floors |
| R2 layout | Single-column with cinematic width modulation | Bento grid for 8 Roles hierarchy |
| Unique HIGH findings | R4-4.3 (Progressive Disclosure for Build Guide checkpoints), R2-1.4 (Running headers/section markers) | R2-4.1 (Bento Grid), R5-T3 (Semantic Temperature), R3-Insight 7 (Progressive Disclosure Density Gradient), R4-2.1 (Bento Grid hierarchy) |

**Verdict: Content-specific, not templated.** The shared finding IDs are expected -- the same research corpus applies to both. But the rationale, CSS values, zone mappings, and mechanism selections are genuinely different because the content and metaphor are different.

---

## B. Synthesizer Transfer

### Molly Run: S1 -> Package Pass 1

The synthesizer consumed S1's 225 lines and explicitly credits them in the agent log: "Specialist inputs consumed: S1 (225 lines)".

**Findings absorbed into Pass 1 mechanisms:**

| S1 Finding | Package Mechanism | Transformation |
|------------|-------------------|----------------|
| R3-Insight-5 (Geological Model) | Mechanism 2.1: Background Arc Progression [NOVEL] | ENRICHED: S1's 4-zone system became mechanism with CSS custom properties, zone classes, and explicit color values. S2 validated chains (DD-F-004) and S3 case study (DD-004) were merged. |
| R2-5.1 + R1-5.2 + R4-3.1 (Typography findings) | Mechanism 2.2: Five-Voice Typography System [NOVEL] | ENRICHED: S1 identified the five voices in Cross-Reference 2. Synthesizer formalized as named classes (.voice-cartographer, .voice-surveyor, .voice-fieldworker, .voice-instrument, .voice-annotator) with full CSS. |
| R3-Insight-3 (CRESCENDO) + R5-Q2 (Spacing) | Mechanism 2.3: Spacing Compression Gradient [NOVEL] | ENRICHED: S1's padding recommendations (64-80px cartouche, 40-48px grid) became mechanism with the critical "two-level model" insight (inter-zone compresses, intra-zone constant at 24px). |
| R3-Insight-29 (Density Contrast) + R5-H2 | Mechanism 2.5: Density Contrast at Transitions [NOVEL] | ENRICHED: S1 identified three transition points. Synthesizer formalized as `.transition--` CSS classes with specific padding/border values per transition. |
| R2-1.2 (Pull Quotes) | Mechanism 2.6: Pull Quotes as Legend Entries [STANDARD] | TRANSFERRED: S1's semantic color system (blue/amber/coral) survived intact. CSS implementation matches S1's recommendation closely. |
| R3-Insight-23 (Fractal) | Mechanism 2.8: Fractal Self-Similarity at 4 Scales [STANDARD] | MODIFIED: S1 described fractal at 4 levels. S3 rejected DD-006 fractal for this content. Synthesizer resolved at 4 scales (dropped 5th "navigation" scale). |
| S1 Cross-Ref 5 (Annotations as Counterpoint) | Mechanism 2.7: Asymmetric Margins for Annotations [NOVEL] | ENRICHED: S1's recommendation of `margin-left: 48px` on annotation blockquotes became a dedicated mechanism with critique-attribution styling. |

**Findings absorbed into Pass 2:**

| S1 Finding | Package Finding # | Transformation |
|------------|-------------------|----------------|
| R1-1.3 (Viewport Principle) | Finding 6 | TRANSFERRED with CSS: `padding-top: 80px`, `margin-top: 48px` |
| R5-S1 (Setup-Payoff Arc) | Finding 7 | ENRICHED: Added `border-top: 1px solid` delimiter |
| R2-1.5 (White Space as Content) | Finding 8 | TRANSFERRED: "almost uncomfortable in its openness" quote preserved |
| R5-G1 (Semantic Proximity) | Finding 9 | ENRICHED with specific gap values: 16px within pair, 40px between domains |
| R5-T2 (Velocity Mismatch) | Finding 10 | TRANSFERRED with code-wall rule |
| R1-5.2 (Monospace Differentiation) | Finding 11 | ENRICHED: Inline code background changed from S1's `#F4F4F5` to soul-compliant `#F0EBE3` |
| R1-5.4 (Tech Spec Aesthetic) | Finding 12 | TRANSFERRED: table styling intact |
| R4-1.2 (F-Pattern) | Finding 13 | TRANSFERRED |
| R4-3.2 (Cinematic Wide/Close) | Finding 14 | ENRICHED: Added `.close-up` class with `max-width: 640px; padding-left: 24px` |
| R3-Insight-29 (Density Contrast) | Finding 15 | TRANSFERRED: Part V->VI transition specifics |
| R3-Insight-30 (Density Debt) | Finding 16 | ENRICHED: Added `.annotations-opening` class with `font-size: 17px; line-height: 1.85` |
| R5-H2 (Contrast Creates Harmony) | Finding 17 | TRANSFERRED: Flutterwhat critique treatment |
| R2-1.2 (Pull Quotes) | Finding 18 | TRANSFERRED: Legend entry color system |
| R4-4.3 (Progressive Disclosure) | Finding 19 | TRANSFERRED: Build Guide checkpoints |
| R2-1.4 (Section Markers) | Finding 20 | TRANSFERRED: Zone labels in mono |

**Novelty markers:** YES, the synthesizer applied [NOVEL] and [STANDARD] tags on mechanisms and findings. 5 mechanisms tagged [NOVEL], 3 tagged [STANDARD] in Pass 1. Findings in Pass 2 are individually tagged.

**S1 findings LOST in synthesis:**

| S1 Finding | Status | Why Lost |
|------------|--------|----------|
| R1-1.1 (Density Rhythm -- HIGH/LOW/MED oscillation) | MERGED | Subsumed into Mechanism 2.3 (Spacing Compression) + Validated Finding 1 (3-Way Unification) |
| R5-S2 (Density Wave Sequencing) | MERGED | Subsumed into Mechanism 2.3 |
| R5-A2 (Code Wall Anti-Pattern) | MERGED | Subsumed into Finding 10 (Velocity Mismatch) |
| R1-1.2 (38% Retention Rule -- Whitespace) | MERGED | Subsumed into Finding 8 (White Space as Content) |

No HIGH findings appear to be genuinely LOST -- they were merged or deduplicated with overlapping findings. The synthesizer's deduplication was legitimate (geological model from S1 + validated DD-F-004 from S2 + DD-004 case study from S3 = single background arc mechanism).

**Transfer count:** 20 of 24 HIGH findings made it into packages (83%). The 4 "missing" were merged into other findings, not dropped. Effective transfer: ~100%.

### Yegge Run: S1 -> Package Pass 1

**Findings absorbed into Pass 1 mechanisms:**

| S1 Finding | Package Mechanism | Transformation |
|------------|-------------------|----------------|
| R3-Insight 5 (Geological) | Mechanism 1: Geological Stratification [NOVEL] | ENRICHED: 5-zone tower floor system with CSS custom properties |
| R2-4.1 + R4-2.1 (Bento Grid) | Mechanism 2: Border-Weight Gradient [NOVEL] | REDIRECTED: S1's bento grid was absorbed into border-weight mechanism, with bento layout deferred to Pass 2 Finding 11. Synthesizer explicitly noted this conflict resolution. |
| R3-Insight 3 (CRESCENDO) | Mechanism 3: CRESCENDO Typography Compression [NOVEL] | ENRICHED: Zone-specific typography compression tables |
| R5-T2 (Velocity) + R5-G3 (Weight Balance) | Mechanism 4: Velocity Interleaving [NOVEL] | ENRICHED: Added Yegge's voice eruptions as the natural FAST interleaving material |
| R3-Insight 23 (Fractal) | Mechanism 5: Fractal Self-Similarity [STANDARD] | TRANSFERRED |
| R1-1.1 (Density Rhythm) | Mechanism 6: PULSE Alternation [STANDARD] | REDIRECTED: S1's HIGH/LOW/MED oscillation reframed as PULSE width differential |
| R5-S2 (Density Wave) | Mechanism 8: Density Wave Sequencing [STANDARD] | TRANSFERRED with CSS: padding variables for each density register |

**Findings absorbed into Pass 2:**

24 of 25 HIGH findings from S1 appear in Pass 2 as zone-specific build actions. The synthesizer log confirms: "24 of 25 HIGH findings from S1 -- top 24 by validation strength and zone specificity." R4-Section 3.2 (Cinematic patterns) was merged into zone recipes rather than listed as a separate finding.

**Transfer count:** 24 of 25 HIGH findings (96%). One merged into zone recipes. Effective transfer: ~100%.

---

## C. HTML Propagation

### Critical Finding: No CITE Comments in Either HTML

Neither `_build-final.html` contains `/* CITE: S1-... */` or any explicit back-reference to Specialist 1 finding IDs. The builder received the PACKAGE (which references findings by their R1/R2/R3/R4/R5 IDs), but the builder's CSS comments reference PACKAGE MECHANISM numbers (`PACKAGE S2-M01`, `PACKAGE S2-M03`, `FINDING 11`, `FINDING 13`, etc.) rather than original S1 finding IDs.

This is a **traceability gap** but NOT a propagation failure. The builder cited the synthesizer's finding numbers, not S1's research IDs. The knowledge still flowed; the citation chain just stops at the synthesizer.

### Molly Run: CSS Evidence of S1 Findings

| S1 Finding | CSS Evidence in _build-final.html | Verdict |
|------------|-----------------------------------|---------|
| R3-Insight-5 (Geological Model / 4 backgrounds) | Lines 59-76: `--survey-parchment: #FEF9F5`, `--survey-drafting: #FFFFFF`, `--survey-fieldwork: #FAF5ED`, `--survey-bedrock: #1A1A1A`. Line 307: `.zone-cartouche { background: var(--survey-parchment) }`. Line 398: `.zone-survey-grid { background: var(--survey-drafting) }`. Line 663: `.zone-annotations { background: var(--survey-fieldwork) }`. Line 1094: `.zone-terra-incognita { background: var(--survey-bedrock) }`. | **FULL** -- all 4 zones implemented with exact colors |
| R3-Insight-3 (CRESCENDO spacing) | Lines 116-120: `--survey-sparse: 80px`, `--survey-tight: 48px`, `--survey-dense: 40px`, `--survey-breathing: 56px`. Applied per-zone on `.zone-cartouche { padding: var(--survey-sparse) 0 }`, `.zone-survey-grid { padding: var(--survey-tight) 0 }`, `.zone-annotations { padding: var(--survey-breathing) 0 }`. | **FULL** -- spacing gradient implemented |
| R3-Insight-23 (Fractal Self-Similarity) | Heading letter-spacing visible in zone-specific type rules. h2: -0.02em, h3: -0.01em. Page-level zone padding varies. Component-level code blocks at 16px padding vs blockquotes at 24px. | **PARTIAL** -- 3 of 4 scales visible; character-level present but h4 rules not explicitly differentiated |
| R3-Insight-29 (Density Contrast) | Transition between `.zone-survey-grid` (48px padding, white bg) and `.zone-annotations` (56px padding, fieldwork bg) with `.register-transition` elements and `.annotations-opening` class at `font-size: 17px; line-height: 1.85` | **FULL** -- the "exhale" transition is implemented |
| R3-Insight-30 (Density Debt) | `.annotations-opening { font-size: 17px; line-height: 1.85; }` (line ~698). Annotations zone padding 56px vs grid 48px. | **FULL** |
| R2-5.1 (Typography as Primary Design) | Five-voice system partially implemented. Instrument Serif for display/headings. Inter for body. JetBrains Mono for code. Zone-specific type sizing. H3 always italic. | **PARTIAL** -- voices 1-4 clear; voice 5 (annotator) present but less distinctly styled |
| R1-5.2 (Monospace Differentiation) | Code blocks in JetBrains Mono at 13px with `background: var(--survey-bedrock); color: var(--survey-parchment)`. Inline code with background + padding. | **FULL** |
| R2-1.2 (Pull Quotes as Legend Entries) | Lines 1003-1060: `.legend-entry` with semantic color classes. `.legend-entry--legibility { border-left-color: var(--accent-purple) }`, `.legend-entry--capability { border-left-color: var(--accent-blue) }`, `.legend-entry--warning { border-left-color: var(--accent-amber) }`. | **FULL** -- S1's color system implemented (colors slightly changed: S1 suggested blue/amber/coral; final uses purple/blue/amber/green/coral for 5 categories) |
| R2-1.4 (Zone Labels / Section Markers) | Line 191: `.zone-label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary) }`. HTML: "The Cartouche", "The Survey Grid", "The Annotations", "The Legend", "Terra Incognita" zone labels present. | **FULL** -- exact implementation of S1's recommendation |
| R4-3.2 (Cinematic Wide/Close) | `.cartouche-section--payoff` and philosophical pause classes create width narrowing. Close-up classes present. | **PARTIAL** -- concept implemented but width modulation less dramatic than S1 specified |
| R4-4.3 (Progressive Disclosure) | `<details>` elements present in the Survey Data zone for the Build Guide checkpoints (Part XII). Styling with border and summary padding. | **FULL** |
| R5-S1 (Setup-Payoff Arc) | Section separators between setup/payoff moments. `.cartouche-section + .cartouche-section` spacing. | **PARTIAL** -- spacing present but 1px rule between setup/payoff not consistently applied |
| R5-G1 (Semantic Proximity) | Within-section tight spacing vs between-section generous spacing. Code block margins. | **FULL** -- spacing hierarchy visible |
| R5-T2 (Velocity Mismatch) | Code blocks spaced with margins. Prose connectors between code-heavy sections. | **PARTIAL** -- code-wall avoidance present but not as strictly enforced as S1 specified |
| R1-5.4 (Tech Spec Aesthetic) | Tables styled with `border-bottom: 1px solid`, `font-weight: 500` headers, no cell borders. Domain paths in monospace inline code. | **FULL** |
| R4-1.2 (F-Pattern) | Left-aligned headings throughout. Left-anchored domain names. | **FULL** -- default left-alignment applied |

**Molly Propagation Rating: FULL.** 11 of 16 audited findings have FULL CSS evidence. 5 have PARTIAL. None have NONE. The cartographic metaphor thoroughly permeates the CSS -- every zone name, spacing variable, and background color traces back to S1's findings map.

### Yegge Run: CSS Evidence of S1 Findings

| S1 Finding | CSS Evidence in _build-final.html | Verdict |
|------------|-----------------------------------|---------|
| R3-Insight 5 (Geological / Tower Floors) | Lines 68-72: `--tower-surface: #FEF9F5`, `--tower-coordination: #FFFFFF`, `--tower-execution: #FAF5ED`, `--tower-bedrock: #1A1A1A`. Lines 179-220: `.zone--overseer`, `.zone--operations`, `.zone--bedrock`, `.zone--philosophical`, `.zone--factory`, `.zone--resolution` with distinct backgrounds and padding. | **FULL** -- 6 zones implemented |
| R3-Insight 3 (CRESCENDO Typography) | Lines 283-470: Per-zone typography compression. `.zone--overseer h2 { font-size: 2rem }` -> `.zone--operations h2 { font-size: 1.625rem }` -> `.zone--bedrock h2 { font-size: 1.375rem }`. Line-heights: 1.8 -> 1.7 -> 1.6. Letter-spacing: -0.02em -> -0.015em -> -0.01em. | **FULL** -- three-channel compression (size, line-height, letter-spacing) |
| R3-Insight 23 (Fractal) | Page-scale zone padding varies. Section-scale role card header/body differential (`.role-card__header` sparse, `.role-card__body` dense). Component-scale callout label/body. Character-scale heading tracking. | **FULL** |
| R3-Insight 29 (Density Contrast) | Zone 1 padding 80px followed by Zone 2 padding 48px (nearly 2:1 ratio). Factory declaration with 4px red left-border at generous padding. | **FULL** |
| R3-Insight 30 (Density Debt) | `.zone--philosophical { padding: 64px 0; }` (recovery after bedrock at 32px). `.zone--philosophical .tower-container { max-width: 640px; }` (narrower reading corridor). Instrument Serif heading at 32px. | **FULL** -- all three elements of S1's recommendation |
| R2-Finding 1.2 (Yegge Quotes as Pull Quotes) | Lines 611-640: `.voice-eruption { border-left: 4px solid var(--color-primary, #E83025); padding: 16px 24px; margin: 40px 0; font-family: 'Instrument Serif'; font-style: italic; font-size: 1.25rem; line-height: 1.4; max-width: 85%; }`. HTML: 10+ `.voice-eruption` elements with actual Yegge quotes. | **FULL** -- exact implementation of S1's specification |
| R2-Finding 4.1 (Bento Grid) | Lines 982-998: `.role-grid--town { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 24px; }`. HTML line 1701: `<div class="role-grid role-grid--town">`. | **FULL** -- S1's 2fr/1fr/1fr specification implemented verbatim |
| Border-Weight Gradient (from S1's bento finding) | Lines 519-555: `.role-card--town { border-left: 4px solid var(--color-text); }`, `.role-card--rig { border-left: 3px solid var(--color-border); }`, `.role-card--worker { border-left: 1px solid var(--color-border-subtle); }`. | **FULL** -- 4px/3px/1px hierarchy |
| R1-Finding 5.1 (Typography-First) | 5-level type system implemented per-zone. Hero at 2.5rem, section h2 at 2rem, subsection h3 at 1.5rem, body at 1rem, code at 0.875rem. | **FULL** |
| R1-Finding 5.2 (Monospace Differentiation) | JetBrains Mono for all code blocks, inline code, ASCII diagrams. Distinct `background: var(--bg-code)`, `padding: 2px 6px` for inline. | **FULL** |
| R1-Finding 5.4 (Tech Spec Metadata) | Lines 650-665: `.meta-indicator { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-secondary); }`. HTML: 15+ `.meta-indicator` elements for model recommendations and tier labels. | **FULL** -- S1's specification implemented verbatim |
| R4-4.3 (Progressive Disclosure) | Lines 1005-1060: `details { border: 1px solid; margin: 12px 0; } summary { padding: 12px 16px; font-weight: 500; cursor: pointer; }`. HTML: `<details>` used for role descriptions AND troubleshooting patterns. | **FULL** |
| R5-T2 (Velocity Interleaving) | `.meta-indicator` elements deployed BETWEEN role cards (HTML lines 1811-1812: "FINDING 12: FAST meta-indicator between HEAVY role cards"). `.voice-eruption` elements between role tiers. | **FULL** -- explicit HTML comments reference the finding |
| R5-G3 (Visual Weight Balance) | `pre { margin: 40px 0 }` on code blocks. Prose paragraphs between heavy elements. Breathing gaps between role tiers. | **FULL** |
| R5-H2 (Contrast Creates Harmony) | Instrument Serif italic voice eruptions vs JetBrains Mono code blocks coexist throughout. The serif/mono alternation is the page's primary rhythmic pattern. | **FULL** |
| R5-S2 (Density Wave) | Padding progression: 80px (overseer) -> 48px (operations) -> 32px (bedrock) -> 64px (philosophical) -> 40px (factory) -> 64px (resolution). Inter-element spacing: 24px -> 16px -> 12px per zone. | **FULL** |
| R5-A2 (Code Wall) | HTML interleaves prose between code blocks. No 3+ consecutive code blocks visible. | **FULL** |
| R5-T3 (Semantic Temperature) | Zone 4 (philosophical) explicitly serves as neutral buffer between bedrock (cold) and factory (practical). 48px breathing before quotes zone. | **PARTIAL** -- buffering present but not as explicitly enforced between every temperature shift |

**Yegge Propagation Rating: FULL.** 16 of 18 audited findings have FULL CSS evidence. 2 have PARTIAL. None have NONE. The control tower metaphor is deeply embedded in every CSS class name and spacing decision.

---

## D. Cross-Run Comparison

### Evidence of Content-Specificity (NOT Templated)

| Dimension | Molly Build CSS | Yegge Build CSS |
|-----------|-----------------|-----------------|
| Zone class names | `.zone-cartouche`, `.zone-survey-grid`, `.zone-annotations`, `.zone-legend`, `.zone-terra-incognita` | `.zone--overseer`, `.zone--operations`, `.zone--bedrock`, `.zone--philosophical`, `.zone--factory`, `.zone--resolution` |
| CSS variable names | `--survey-parchment`, `--survey-drafting`, `--survey-fieldwork`, `--survey-bedrock` | `--tower-surface`, `--tower-coordination`, `--tower-execution`, `--tower-bedrock` |
| Container class | `.survey-container` | `.tower-container` |
| Header class | `.survey-header` | `.tower-header` |
| Footer class | `.survey-footer` | (standard footer) |
| Zone labels (HTML text) | "The Cartouche", "The Survey Grid", "The Annotations", "The Legend", "Terra Incognita" | Zone names from tower metaphor |
| Unique component classes | `.legend-entry`, `.legend-entry--legibility`, `.rival-annotation`, `.cartouche-section--payoff`, `.pre-terra-transition` | `.voice-eruption`, `.role-card`, `.role-card--town/rig/worker`, `.meta-indicator`, `.role-grid--town` |
| Layout mechanism | Single-column with cinematic width modulation (`.close-up`) | Bento grid for 8 Roles (`.role-grid--town { grid-template-columns: 2fr 1fr 1fr }`) |
| Unique zone treatment | `.annotations-opening { font-size: 17px; line-height: 1.85 }` (Goodhart's Law moment) | `.zone--philosophical .tower-container { max-width: 640px }` (post-bedrock breathing) |
| Dark zone | Terra Incognita only (final section) | Bedrock (mid-page, Beads memory system) |
| Border semantics | Certainty encoding (measured/structural/projected) | Authority encoding (Town/Rig/Worker level) |

**Verdict: STRONGLY content-specific.** Every CSS class name, variable name, zone label, and layout decision is different between the two builds. The underlying finding IDs are shared (both use R3-Insight-5, R3-Insight-3, etc.) but their manifestation is entirely content-dependent. This proves S1 is doing genuine content-to-research mapping, not applying a fixed template.

---

## Summary Scorecard

| Dimension | Molly Run | Yegge Run | Combined |
|-----------|-----------|-----------|----------|
| **A. Absorption Depth** | DEEP (24 HIGH, all 7 files read, content-specific throughout) | DEEP (25 HIGH, all 7 files read, content-specific throughout) | **DEEP** |
| **B. Synthesizer Transfer** | 20/24 absorbed (4 merged, 0 lost) -- 100% effective | 24/25 absorbed (1 merged) -- 100% effective | **FULL TRANSFER** |
| **C. HTML Propagation** | 11 FULL, 5 PARTIAL, 0 NONE out of 16 audited | 16 FULL, 2 PARTIAL, 0 NONE out of 18 audited | **FULL (with traceability gap)** |
| **D. Cross-Run Specificity** | All CSS names, zones, variables content-specific | Completely different from molly run | **CONFIRMED SPECIFIC** |

### Key Findings

1. **S1 is the pipeline's research backbone.** It produces the highest-signal input that the synthesizer consumes. The finding-to-mechanism-to-CSS chain is remarkably intact.

2. **Traceability gap at the builder level.** The builder cites PACKAGE finding numbers (Finding 11, Finding 13) not original S1 finding IDs (R2-4.1, R4-4.3). This makes it difficult to trace specific CSS rules back to original research findings without manually cross-referencing the package. The pipeline should consider propagating original finding IDs into the package so builders can cite them.

3. **Synthesizer deduplication is legitimate and well-logged.** When S1 findings overlap (geological model + density strata + density rhythm all converge on background zones), the synthesizer correctly merges them into a single mechanism rather than creating redundant build actions.

4. **The five-voice typography system (molly run) originated primarily from S1.** S1 identified it in Cross-Reference 2 (R2-5.1 + R1-5.2 + R1-5.4 + R4-3.1). The synthesizer formalized it as Mechanism 2.2. The builder partially implemented it. This is a clean S1-originated innovation that propagated through the chain.

5. **The bento grid layout (yegge run) originated from S1's R2-4.1 rating.** S1 identified it as HIGH for the 8 Roles section, the synthesizer confirmed it (while resolving a conflict with border-weight as the PRIMARY hierarchy mechanism), and the builder implemented it at `grid-template-columns: 2fr 1fr 1fr` -- exactly as S1 specified.

6. **S1's output size exceeds its 100-150 line target** (225 lines molly, 243 lines yegge) but this is a feature, not a bug -- the excess is substantive CSS-actionable content, not filler.
