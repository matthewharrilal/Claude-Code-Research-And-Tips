# Enrichment Extraction: Files 01-08

**Extractor:** extractor-1
**Date:** 2026-02-23
**Source files:** analysis/01 through analysis/08
**Method:** Exhaustive line-by-line extraction of every actionable recommendation

---

## FILE 01: HTML/CSS Quality Analysis (01-html-css-analysis.md)

### E01-01: Rename `--accent-blue` to a concept-based warm name
- **Evidence:** Line 74 — `.callout--info` uses `--accent-blue: #A07D50` which is gold/brown, NOT blue. Design system defines accent-blue as `#4A90D9`. Variable name is misleading.
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md` or execution brief template
- **Specific change:** Add rule: "Custom property names must not contain color literals (blue, green, red). Use concept names derived from the structural metaphor."
- **Impact:** MEDIUM — prevents variable naming confusion and gate false positives
- **Classification:** (A) Edit existing artifact

### E01-02: Add zone-specific section indicator styling
- **Evidence:** Lines 330-333 — Section indicator styling is nearly identical across all 6 zones (10px mono, uppercase, tracked, gauge-reading color, 1px bottom border). Only Z5 deviates (0.12em tracking vs 0.1em). "A missed opportunity for zone-specific calibration."
- **Target file:** Execution brief template, Tier 3 (Compositional Frameworks)
- **Specific change:** Add to zone-specific instructions: "Zone indicators should vary at least 2 properties per zone (color, tracking, border-style, font-weight) to reinforce zone identity."
- **Impact:** LOW — cosmetic improvement to zone differentiation
- **Classification:** (A) Edit existing artifact

### E01-03: Add zone-specific inline code styling
- **Evidence:** Lines 378-379 — "No inline code differentiation by zone. `p code` and `li code` have a single global style. In code-heavy Z5, inline code competes visually with block code."
- **Target file:** Execution brief template, D-01 (Content-Register Reading)
- **Specific change:** Add instruction: "In CODE-heavy zones, differentiate inline code from block code through at least one additional property (background tint, border style, or font-size delta)."
- **Impact:** LOW — improves readability in code-heavy zones
- **Classification:** (A) Edit existing artifact

### E01-04: Add responsive adjustment for drop cap
- **Evidence:** Line 381 — "Drop cap has no responsive adjustment. At 768px, the 3.5em drop cap may be oversized relative to the reduced 16px body text."
- **Target file:** Builder recipe, responsive section
- **Specific change:** Add to 768px responsive checklist: "Scale drop-cap size proportionally at mobile breakpoint (e.g., 3.5em -> 2.5em)."
- **Impact:** LOW — minor responsive refinement
- **Classification:** (A) Edit existing artifact

### E01-05: Use defined display token
- **Evidence:** Line 383 — "The `--text-display: 3rem` token is defined but never used. The largest actual heading is 2.5rem."
- **Target file:** Gate runner (new anti-pattern gate)
- **Specific change:** Add ghost-token detection: "If a custom property is defined in :root but never referenced in any selector, flag as unused token."
- **Impact:** LOW — code hygiene
- **Classification:** (D) Measurement improvement

### E01-06: Standardize grid gap patterns
- **Evidence:** Line 383-384 — "`.factory-comparison` grid uses `gap: 1px` with `background: var(--color-border)` trick — a valid technique but differs from the `gap: var(--space-N)` pattern used elsewhere."
- **Target file:** Builder recipe, component patterns section
- **Specific change:** Add guidance: "Use one primary gap technique (token-based gaps OR background-border-gap trick). If mixing, limit the alternative to 1-2 instances."
- **Impact:** LOW — consistency improvement
- **Classification:** (A) Edit existing artifact

---

## FILE 02: Pipeline Artifact Quality Analysis (02-artifact-quality.md)

### E02-01: Brief Assembler must VERIFY RGB delta claims programmatically (CRITICAL)
- **Evidence:** Lines 334-338 — Brief stated "delta ~16" for Z2->Z3 and Z3->Z4 boundaries. Actual computation: Z2->Z3 max delta = 11, Z3->Z4 max delta = 8. "The Brief Assembler miscalculated the RGB deltas."
- **Target file:** `design-system/pipeline/artifact-orchestrator.md` (Phase 1 Brief Assembly) AND `design-system/pipeline/artifact-routing.md` (Phase 0 Content Analysis)
- **Specific change:** Add pre-build gate: "After specifying zone background hex values, compute max(|R1-R2|, |G1-G2|, |B1-B2|) for ALL adjacent zone pairs. If any delta < 15, adjust hex values before finalizing brief. Include computed delta in the brief, not estimated."
- **Impact:** HIGH — prevents the #1 root cause of perception gate failures (brief self-contradiction)
- **Classification:** (A) Edit existing artifact + (D) Measurement improvement

### E02-02: Add browser-default exemption to GR-05 warm palette gate
- **Evidence:** Lines 266-270 — 18 pure black values are browser defaults (false positives) on HTML/HEAD elements. Gate triggers REBUILD verdict but practical severity is LOW.
- **Target file:** `design-system/pipeline/gate-runner.md`, GR-05 section
- **Specific change:** Add exemption: "Exclude computed styles on `html`, `head`, `meta`, `link`, `script`, `style`, and `title` elements from warm palette assessment. These are browser defaults, not builder choices."
- **Impact:** MEDIUM — eliminates false positive REBUILD verdict triggers
- **Classification:** (A) Edit existing artifact

### E02-03: Add Weaver override authority for REBUILD -> REFINE when identity failures are isolated
- **Evidence:** Lines 305-311 — Verdict logic says ANY identity FAIL = REBUILD. But GR-05 FAIL was a single component class + browser defaults. Gate results downgraded to REFINE (contradicting MANIFEST).
- **Target file:** `design-system/pipeline/MANIFEST.md`, verdict logic section
- **Specific change:** Add clause: "The Weaver may downgrade REBUILD to REFINE for an identity gate failure IF: (a) the failure affects <= 1 component class, AND (b) the fix is a single CSS property change, AND (c) the failure does not affect page-level visual identity. Weaver must document the downgrade rationale."
- **Impact:** MEDIUM — prevents unnecessary REBUILD cycles for targeted fixes
- **Classification:** (A) Edit existing artifact

### E02-04: Add missing gates to gate runner (GR-16, GR-19, GR-21, GR-22)
- **Evidence:** Lines 237-248 — "18 of 42 gates reported. Key gaps: GR-16 (Threshold Gaming), GR-19 (Whitespace Voids), GR-21 (Uniform Typography), GR-22 (CSS Budget Misallocation)."
- **Target file:** `design-system/pipeline/gate-runner.md`
- **Specific change:** Implement programmatic checks for:
  - GR-16: Flag if >= 3 perception values are at exact threshold minimum (e.g., delta exactly 15, gap exactly 120px)
  - GR-19: Flag if any vertical span > 1 viewport-height between adjacent content elements has zero content
  - GR-21: Flag if body font-size has < 3 distinct computed values across all zones
  - GR-22: Flag if > 15% of CSS lines produce sub-perceptual effects (letter-spacing < 0.025em, background delta < 10 RGB)
- **Impact:** HIGH — fills blind spots that were key failure modes in previous builds
- **Classification:** (A) Edit existing artifact

### E02-05: Enforce content map appendix verbatim in brief
- **Evidence:** Lines 209-214 — "Assembly Rule #7 says 'Content Map Appendix is APPENDED verbatim from Phase 0 output.' The brief summarized instead."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`
- **Specific change:** Add assembly gate: "Content Map Appendix line count must be >= 80% of Content Map source line count. If summarized below 80%, REJECT brief assembly and re-append verbatim."
- **Impact:** LOW — template compliance (practical impact is low since key information survived)
- **Classification:** (A) Edit existing artifact

### E02-06: Fix per-section NARRATIVE/REFERENCE/CODE labels in content map
- **Evidence:** Lines 58-61 — "Missing explicit per-section NARRATIVE/REFERENCE/CODE labels — the template calls for this in Section 'Per-section character classification' but the content map embeds it implicitly."
- **Target file:** `design-system/pipeline/artifact-routing.md`, Phase 0 Content Map Output Template
- **Specific change:** Add explicit template row: "| Section | Title | Character (NARRATIVE/REFERENCE/CODE) | Element Types |" — require one row per source section with character classification.
- **Impact:** LOW — improves content map specificity
- **Classification:** (A) Edit existing artifact

### E02-07: Rebalance Tier 3/Tier 4 line budgets
- **Evidence:** Lines 160-179 — Tier 3 used ~75 lines (budget ~50, +50% over). Tier 4 used ~25 lines (budget ~40, -38% under). D-03 and D-08 lack technique vocabulary as a result.
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`
- **Specific change:** Add budget enforcement: "If Tier 3 exceeds 55 lines, excess must be borrowed FROM Tier 3 expansion, not FROM Tier 4. Tier 4 minimum: 35 lines. Each disposition (D-01 through D-08) must contain at least 1 specific CSS property:value pair."
- **Impact:** MEDIUM — ensures dispositions have technique vocabulary, not just intent
- **Classification:** (A) Edit existing artifact

### E02-08: Add zone count validation to content map
- **Evidence:** Lines 38-41 — 6 zones for ~5,800 words. MANIFEST recommends 4-5 for this word count bracket.
- **Target file:** `design-system/pipeline/artifact-routing.md`, Section 11
- **Specific change:** Add validation: "If zone count exceeds recommended range for word count bracket, content analyst must provide explicit justification (>= 2 sentences) explaining why additional zones are necessary."
- **Impact:** LOW — documentation improvement
- **Classification:** (A) Edit existing artifact

---

## FILE 03: PA Synthesis Report (03-pa-synthesis.md)

### E03-01: Add trailing whitespace void gate (NEW GATE)
- **Evidence:** Lines 26-30 — 9/9 auditors flagged trailing whitespace void (~5 viewports). "This level of consensus is rare and indicates an unmistakable defect."
- **Target file:** `design-system/pipeline/gate-runner.md`
- **Specific change:** Add GR-XX (Trailing Void): "Measure vertical distance from last content element's bottom edge to the bottom of the `<body>`. If distance > 1 viewport-height (e.g., >900px at 1440px viewport), FAIL. This is a BLOCKING identity-level gate."
- **Impact:** HIGH — catches the single most unanimously flagged defect across ALL builds
- **Classification:** (B) New instrument

### E03-02: Add Zone 4 monotony detection gate
- **Evidence:** Lines 327-329 — 6/9 auditors flagged Zone 4 monotony. "6 identical blockquotes in sequence produce a drone."
- **Target file:** `design-system/pipeline/gate-runner.md`
- **Specific change:** Add GR-XX (Structural Echo): "For each zone, count consecutive elements sharing identical visual treatment (same class, same border, same padding). If > 4 consecutive same-class elements, flag as SIGNIFICANT structural echo. If > 6, flag as BLOCKING."
- **Impact:** MEDIUM — catches compositional monotony that gates currently miss
- **Classification:** (B) New instrument

### E03-03: Add recovery command danger hierarchy guidance
- **Evidence:** Lines 40-51 — Auditor I uniquely caught: "HARD RESET and KILL ALL AGENTS having identical visual weight to CLEAR INBOX is a safety issue."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md`, component modulation section
- **Specific change:** Add instruction: "When content includes destructive/dangerous operations alongside safe operations, apply visual weight hierarchy: destructive operations receive stronger borders (4px), warning colors (coral/red), and larger padding than safe operations. Do not style all operations identically."
- **Impact:** MEDIUM — addresses genuine UX safety concern
- **Classification:** (A) Edit existing artifact

### E03-04: Add responsive layout reorganization check
- **Evidence:** Lines 57-69, 335-337 — 3/9 auditors flagged: "768px layout scales rather than reorganizes." Role cards remain 2-column at all viewports.
- **Target file:** `design-system/pipeline/gate-runner.md` or `artifact-builder-recipe.md`
- **Specific change:** Add gate or recipe instruction: "At 768px breakpoint, at least 2 layout elements must REORGANIZE (change structure, not just scale). Examples: 2-col grid -> 1-col stack, horizontal stats -> vertical list, sidebar -> inline. Fluid scaling alone is insufficient."
- **Impact:** MEDIUM — addresses responsive quality gap
- **Classification:** (A) Edit existing artifact

### E03-05: Add second interstitial moment recommendation
- **Evidence:** Lines 77-80 — Integrative report's suggestion (add ONE more interstitial between Zones 3-4) is "the best compromise -- retaining rarity while adding a second structural anchor."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-04 (Second-Half Moment)
- **Specific change:** Modify D-04: "Create 1-2 moments that break the established pattern. If page has 5+ zones, consider TWO structural break moments: one at the 1/3 point and one at the 2/3 point. The first should be lighter than the second to create a crescendo."
- **Impact:** MEDIUM — adds pacing variety to long pages
- **Classification:** (A) Edit existing artifact

### E03-06: Lead PA audit with experiential questions before structural
- **Evidence:** Lines 100-103 — "The best reports (A, C, D) share three traits: specific scroll/pixel references, clear verdicts with reasoning, at least one novel insight."
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`
- **Specific change:** Reorder PA question assignment: assign PA-01 (first bother), PA-05 (sign it), PA-20 (personality), PA-45 (best moment) FIRST before structural questions. Rationale: "First impressions should be captured before the auditor enters 'checking' mode."
- **Impact:** MEDIUM — improves PA audit quality by capturing fresh impressions first
- **Classification:** (A) Edit existing artifact

### E03-07: Calibrate Auditor E's question assignments
- **Evidence:** Lines 283-292 — Auditor E scored 23/24 (95.8%). "E's assigned questions (grid/layout) happen to target the page's strongest dimension, which explains partial inflation."
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, auditor assignment section
- **Specific change:** Add: "Distribute structural-positive questions (grid, alignment, component reading order) across multiple auditors, not concentrated in one. Each auditor should receive at least 1 question targeting a known weak dimension alongside their specialty questions."
- **Impact:** LOW — improves PA calibration accuracy
- **Classification:** (A) Edit existing artifact

### E03-08: Add semantic consistency check for colored borders
- **Evidence:** Lines 67-70 — "Color-coding does not convey clear meaning -- decorative rather than semantic" vs. "earlier (red = warning, green = checkpoint), using them decoratively later IS a system inconsistency."
- **Target file:** `design-system/pipeline/gate-runner.md` or builder recipe
- **Specific change:** Add instruction: "If colored borders are used semantically (specific colors = specific meanings) in any part of the page, maintain that semantic mapping throughout. Do not reuse semantic border colors decoratively."
- **Impact:** LOW — improves visual coherence
- **Classification:** (A) Edit existing artifact

---

## FILE 04: Gate Failure Root Cause Analysis (04-gate-failure-analysis.md)

### E04-01: Add concept-naming mandate for ALL custom properties
- **Evidence:** Lines 55-66 — Builder named variable `--accent-blue` despite giving it warm value #A07D50. "The name invites future cold-color introduction."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, Tier 1 (Identity) or Tier 3
- **Specific change:** Add rule: "Custom property names must not contain color literals (blue, green, red, yellow, etc.). Use concept names derived from the structural metaphor (e.g., --accent-patina, --accent-bronze, --gauge-reading). Exception: --color-primary, --color-text, --color-background."
- **Impact:** MEDIUM — prevents semantic naming hazards
- **Classification:** (A) Edit existing artifact

### E04-02: Brief must self-verify all RGB delta claims (CRITICAL — duplicate of E02-01)
- **Evidence:** Lines 148-166 — Three versions of Z3/Z4 backgrounds exist. "PRIMARY: Brief authoring error. The execution brief specified Z3 (#F5EFE5) and Z4 (#FAF5ED) backgrounds whose actual deltas are 11 and 8, while claiming 'delta ~16.'"
- **Target file:** Same as E02-01
- **Impact:** HIGH (CRITICAL) — same as E02-01
- **Classification:** (A) Edit existing artifact + (D) Measurement improvement

### E04-03: Add structural-element exemption to GR-14 visual gap gate
- **Evidence:** Lines 236-257 — "The gate is confusing 'visual distance' with 'visual void.' A 318px void (empty space) is catastrophic. A 318px span containing a dark block with a 32px pull-quote and attribution is a compositional moment."
- **Target file:** `design-system/pipeline/gate-runner.md`, GR-14 section
- **Specific change:** Modify GR-14 measurement: "Measure only the WHITESPACE portion of the gap between zones. Subtract the height of any intervening structural elements that have: (a) background color different from both adjacent zones, AND (b) text content. If remaining whitespace <= 150px, PASS."
- **Impact:** HIGH — prevents false positives on intentional dramatic moments (D-04)
- **Classification:** (A) Edit existing artifact

### E04-04: Add table cell exemption to GR-17 density stacking gate
- **Evidence:** Lines 305-333 — "262 violations for table cell padding at 8px. The gate's intent (preventing compression collapse) is not triggered here." Tables in dense zones appropriately use 8px padding.
- **Target file:** `design-system/pipeline/gate-runner.md`, GR-17 section
- **Specific change:** Add element-type exemption: "`<td>` and `<th>` elements use a 6px minimum padding threshold (was 12px). All other elements retain the 12px minimum."
- **Impact:** MEDIUM — prevents false positives on data-dense tables
- **Classification:** (A) Edit existing artifact

### E04-05: Brief should specify background delta MINIMUMS not TARGETS
- **Evidence:** Lines 154-157 — "Brief says 'delta ~16' — the tilde (~) communicates 'approximately' not 'at least'. Builder may undershoot."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, Tier 3 multi-coherence section
- **Specific change:** Change template language from "delta ~N" to "delta >= N (aim for N+5 to N+10)". Example: "Background shift from #FEF9F5 to #EDE6DA, delta >= 20 (aim for 25-30)."
- **Impact:** HIGH — prevents builder undershoot of perception thresholds
- **Classification:** (A) Edit existing artifact

---

## FILE 05: Cross-Run Comparison (05-cross-run-comparison.md)

### E05-01: Add void-checking gate (trailing whitespace detection)
- **Evidence:** Lines 443-457 — Both runs have trailing void defects. "Investigate why the builder creates trailing voids — this is a recurring pattern across both runs."
- **Target file:** `design-system/pipeline/gate-runner.md`
- **Specific change:** Same as E03-01. Additionally, add builder-level instruction: "After completing the final zone and footer, verify the page ends within 100px of the footer's bottom edge. If the `<body>` extends more than 200px beyond the footer, investigate and fix the CSS causing the extension."
- **Impact:** HIGH — addresses recurring defect across ALL builds
- **Classification:** (B) New instrument + (A) Edit builder recipe

### E05-02: Add metaphor-persistence guidance for final zones
- **Evidence:** Lines 449-450 — "Metaphor still fades in the bottom third. Both runs lose metaphor expression toward the end."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-01 (Content-Register Reading) or new D-XX
- **Specific change:** Add instruction: "Even in CODE/REFERENCE zones (typically later in the page), maintain the structural metaphor through: (a) zone-specific component titles that reference the metaphor, (b) at least 2 concept-named custom properties used per zone, (c) zone indicator text that sustains the metaphor vocabulary. The metaphor must be visually active in ALL zones, not just the opening 2-3."
- **Impact:** MEDIUM — addresses metaphor fade pattern
- **Classification:** (A) Edit existing artifact

### E05-03: Add palette consistency gate
- **Evidence:** Lines 459 — "Add a palette consistency gate that checks all color usages against the defined custom property palette."
- **Target file:** `design-system/pipeline/gate-runner.md`
- **Specific change:** Add GR-XX (Palette Consistency): "For every computed color value on visible elements, check if it matches a declared custom property value OR is within 5 RGB points of one. Flag any color that is not traceable to the declared palette. Threshold: 0 untraceable colors on structural elements."
- **Impact:** MEDIUM — catches rogue color values like the cold blue on role-card__level
- **Classification:** (B) New instrument

### E05-04: Specify background deltas as MINIMUMS with buffer (duplicate emphasis of E04-05)
- **Evidence:** Lines 445-446 — "Specify background deltas as MINIMUMS not TARGETS in the execution brief (e.g., '>= 20 RGB' not '~16 RGB')."
- **Target file:** Same as E04-05
- **Impact:** HIGH
- **Classification:** (A) Edit existing artifact

### E05-05: Builder conviction statement validation
- **Evidence:** Lines 361-364 — Fresh run has conviction statement embedded as HTML comment (lines 1-9). Previous run did not.
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md`
- **Specific change:** Make conviction statement mandatory: "The first lines of the HTML file must be an HTML comment containing: (a) the page's compositional intent in 2-3 sentences, (b) the structural metaphor and how it maps to CSS, (c) the 3 most important design decisions. Gate check: conviction statement must exist and contain >= 30 words."
- **Impact:** LOW — ensures builder articulates intent (already present in fresh run)
- **Classification:** (A) Edit existing artifact

### E05-06: Use WAVE density arc pattern over CRESCENDO when content has multiple peaks
- **Evidence:** Lines 85-87 — "Fresh run has WAVE pattern (two peaks at Z2, Z5) with valleys between them -- better cognitive recovery" vs previous CRESCENDO (one peak).
- **Target file:** `design-system/pipeline/artifact-routing.md`, density arc section
- **Specific change:** Add guidance: "For pages with 5+ zones and mixed content types (narrative + reference + code), prefer WAVE pattern (2 density peaks with recovery valleys) over CRESCENDO (single peak). WAVE provides cognitive recovery between dense sections."
- **Impact:** LOW — pattern guidance improvement
- **Classification:** (A) Edit existing artifact

---

## FILE 06: Unmeasured Quality Dimensions (06-unmeasured-dimensions.md)

### E06-01: Add 5-8 experiential PA questions to core battery
- **Evidence:** Lines 264-270 — "42 questions (~65%) are about structural properties. 6 questions (~9%) are about experience." Over-indexing on structure, under-indexing on feeling.
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`
- **Specific change:** Add these 5 new PA questions to the CORE battery (answered FIRST before structural questions):
  - PA-80 (Emotional Sequencing): "Does your feeling change at least 3 times in a logical order?"
  - PA-84 (Micro-Delight): "Do any interactive/typographic details reveal an intentional refinement?"
  - PA-88 (Visual Memory): "Close eyes 5 sec, reopen. What single visual image persists?"
  - PA-91 (Design Commitment): "Can you find a place where the design hedges — half-commits to a visual idea?"
  - PA-98 (Gestalt Completion): "Does the page feel finished, or could it continue indefinitely?"
- **Impact:** HIGH — addresses the structural-over-experiential bias that prevents detecting 3/4 vs 4/4 gap
- **Classification:** (A) Edit existing artifact + (B) New instrument (new questions)

### E06-02: Add "Reader Auditor" as 10th PA agent type
- **Evidence:** Lines 462-463 — "Current auditors are visual designers checking structure. A Reader Auditor would scroll at natural reading speed, report where attention drifts, what they remember."
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, auditor type definitions
- **Specific change:** Add 10th auditor type: "Reader Auditor — scrolls at natural reading speed, answers: PA-80 (emotional sequencing), PA-81 (engagement sag), PA-88 (visual memory), PA-89 (return-visit landmarks), PA-90 (trust accumulation), PA-98 (gestalt completion), PA-99 (would-you-return). Does NOT check structural properties."
- **Impact:** MEDIUM — adds experiential dimension to PA audit
- **Classification:** (B) New instrument

### E06-03: Add PA-82 (Tempo Variation) to Tier 5
- **Evidence:** Lines 134-137 — "Do visual events arrive at different speeds in different parts of the page, or evenly spaced throughout?"
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, Tier 5 questions
- **Specific change:** Add PA-82: binary YES/NO. YES = at least 2 noticeably different tempos.
- **Impact:** LOW — extends pacing measurement
- **Classification:** (A) Edit existing artifact

### E06-04: Add PA-83 (Dynamic Range) to Tier 5
- **Evidence:** Lines 139-143 — "Compare the visually loudest moment to the visually quietest. Is the gap wide?"
- **Target file:** Same as E06-03
- **Specific change:** Add PA-83: binary YES/NO. YES = clear volume differential between extremes.
- **Impact:** LOW — extends pacing measurement
- **Classification:** (A) Edit existing artifact

### E06-05: Add PA-87 (Content-Form Specificity) to core battery
- **Evidence:** Lines 168-171 — "Could this exact visual design work equally well for completely different subject matter? Or does it feel custom-built for THIS content?"
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`
- **Specific change:** Add PA-87: YES = design feels specific to this content; NO = generic enough for any content.
- **Impact:** MEDIUM — measures content-form resonance, a key 3/4 vs 4/4 discriminator
- **Classification:** (A) Edit existing artifact

### E06-06: Add PA-93 (Viewport Design Intent) to responsive auditor
- **Evidence:** Lines 209-213 — "At this viewport width, can you identify a specific layout decision made FOR this width?"
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, responsive auditor assignment
- **Specific change:** Add PA-93 to responsive auditor: YES = layout decision specific to this viewport; NO = fluid scaling of a wider design.
- **Impact:** MEDIUM — catches "fluid-not-responsive" pattern that 3 auditors flagged
- **Classification:** (A) Edit existing artifact

### E06-07: Add PA-94 (Material Contrast) to Tier 5
- **Evidence:** Lines 217-221 — "Do different content types feel like different physical weight or material quality?"
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, Tier 5
- **Specific change:** Add PA-94: YES = 3+ content types with perceptibly different material presence; NO = all same material.
- **Impact:** LOW — measures sensory richness dimension
- **Classification:** (A) Edit existing artifact

### E06-08: Introduce PARTIAL scoring for Tier 5 questions
- **Evidence:** Lines 304-316 — "PA-67 (novelty) scored 'PARTIAL' — inventive in editorial structure but conventional in visual architecture. Forced into NO, losing information."
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, Tier 5 scoring
- **Specific change:** Allow 3-point scale for Tier 5 only: NO = 0, PARTIAL = 0.5, YES = 1. Core battery remains binary. "This captures gradients without undermining binary reliability of core battery."
- **Impact:** MEDIUM — improves scoring accuracy for borderline cases
- **Classification:** (A) Edit existing artifact

### E06-09: Add emotional arc sequencing to Weaver assessment
- **Evidence:** Lines 19-28 — "The framework assesses emotional registers as inventory items (does this page contain Surprise? Yes/No). It does not assess emotional sequencing."
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`, Weaver synthesis section
- **Specific change:** Add Weaver question: "Map the sequence of emotional registers encountered during scroll-through. Does the sequence follow a narrative arc (build -> peak -> resolve), or are registers randomly distributed?"
- **Impact:** MEDIUM — transforms emotional assessment from inventory to narrative
- **Classification:** (A) Edit existing artifact

### E06-10: Add voice-design alignment assessment
- **Evidence:** Lines 49-56 — "PA-20 captures personality description but not amplification. A page might 'feel' authoritative while flattening the author's playfulness."
- **Target file:** `design-system/pipeline/artifact-pa-protocol.md`
- **Specific change:** Add PA-86: "Read 2-3 paragraphs. Does the CSS amplify how the text speaks — making informal voice feel informal, precise voice feel precise — or is the visual treatment generic regardless of content?"
- **Impact:** MEDIUM — measures editorial voice amplification
- **Classification:** (A) Edit existing artifact

### E06-11: Add deliberate plainness instruction to brief
- **Evidence:** Lines 430-434 — "PA-64 scored WEAK PASS/NO. A 4/4 page has at least one zone that is INTENTIONALLY simple as compositional contrast."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-06 (Negative Space)
- **Specific change:** Add to D-06: "At least one zone (recommendation: the zone before the densest zone) should be intentionally spare — plain text with generous whitespace, no callouts, no colored borders. This is compositional contrast, not laziness. The reader rests here before the next heavy section."
- **Impact:** HIGH — directly addresses PA-64 failure that blocks 4/4
- **Classification:** (A) Edit existing artifact

### E06-12: Add thematic return instruction to brief
- **Evidence:** Lines 436-440 — "Each design moment is a one-time event rather than a theme that develops. The drop cap's red color and serif italic could return at the page's closing."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-04 or new D-XX
- **Specific change:** Add instruction: "At least one visual motif introduced in the first zone should return in a transformed state in the final zone. Examples: the drop cap's color reappearing in the closing; the opening serif italic treatment echoing in the footer; the first border-left color closing the page. This creates circular narrative — the end remembering the beginning."
- **Impact:** MEDIUM — adds compositional depth (thematic development)
- **Classification:** (A) Edit existing artifact

---

## FILE 07: Pipeline Ceiling Analysis (07-pipeline-ceiling.md)

### E07-01: Implement automated REFINE cycle (HIGHEST LEVERAGE)
- **Evidence:** Lines 109-119 — "Expected PA-05 delta: +0.3 to +0.5. The single highest-leverage change." Every defect is a CSS fix. Pipeline already produces a precise fix list.
- **Target file:** `design-system/pipeline/artifact-orchestrator.md`
- **Specific change:** Add REFINE phase: "After gate check, if verdict = REFINE, automatically spawn a FRESH Opus builder with: (a) original brief, (b) built HTML, (c) gate failures described as perceptual observations (NOT threshold numbers), (d) Weaver's artistic impression. Fix builder applies targeted CSS changes. Re-run gates. Limit: 1 REFINE cycle before stopping."
- **Impact:** HIGH — addresses 20% of 3/4->4/4 gap (execution quality). +0.3 to +0.5 PA-05 points. Effort: 4-6 hrs.
- **Classification:** (C) Architectural change

### E07-02: Inject annotated CSS reference patterns from CD-006
- **Evidence:** Lines 126-131 — "The builder has never SEEN what a 3.5/4 page looks like." Option B recommended: 10-15 annotated CSS patterns.
- **Target file:** New file: `design-system/pipeline/artifact-css-patterns.md` + reference in builder recipe
- **Specific change:** Create 100-line document with 10-15 annotated CSS patterns from CD-006: "PATTERN: Heavy Zone Transition (4+ channels) — [CSS snippet] — This produces a 4-channel shift that scored 4/4 on PROPORTIONATE."
- **Impact:** HIGH — addresses 30% of 3/4->4/4 gap (procedural knowledge). +0.2 to +0.4 PA-05 points. Effort: 2-3 hrs.
- **Classification:** (B) New artifact

### E07-03: Add CSS pattern library section to execution brief
- **Evidence:** Lines 133-154 — "The brief tells the builder WHAT to do but not HOW." Specific CSS snippets for heavy/medium/light transitions.
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, Tier 3 section
- **Specific change:** Add "Pattern Library" subsection to Tier 3 with 5-8 CSS patterns: heavy transition, medium transition, light transition, zone-specific component modulation, dark inversion block, responsive grid collapse. Each pattern = 5-10 lines of annotated CSS.
- **Impact:** HIGH — converts "deploy a heavy transition" from instruction to recipe. +0.2 to +0.3 PA-05 points. Effort: 2-3 hrs.
- **Classification:** (A) Edit existing artifact + (B) New section

### E07-04: Implement mid-build gate check after Zone 3
- **Evidence:** Lines 156-167 — "After Zone 3, roughly 50% of content. Expected PA-05 delta: +0.1 to +0.3."
- **Target file:** `design-system/pipeline/artifact-orchestrator.md`, build sequence
- **Specific change:** "After builder completes Zone 3 and takes midpoint screenshot, orchestrator runs subset of gates (GR-11 bg delta, GR-13 stacked gap, GR-15 single margin, GR-21 uniform typography). If any fail, pass CALIBRATION feedback as perceptual observation: 'The zones built so far have backgrounds that are very close in color. Consider making Zone 2 warmer or Zone 3 lighter.'"
- **Impact:** MEDIUM — catches issues mid-build without exposing gate thresholds. Effort: 3-4 hrs.
- **Classification:** (C) Architectural change

### E07-05: Add builder-facing worked examples (output reference)
- **Evidence:** Lines 169-178 — "The builder has ZERO examples of what its output should look like. Every other pipeline agent has examples."
- **Target file:** `design-system/pipeline/artifact-worked-examples.md`, new section
- **Specific change:** Add "Builder Output Examples" section: (a) zone transition that scored 4/4 PROPORTIONATE + CSS, (b) component modulation rated DESIGNED + CSS, (c) common defect (uniform blockquotes) + before/after CSS.
- **Impact:** MEDIUM — fills the "procedural demonstration" gap. Effort: 1-2 hrs.
- **Classification:** (A) Edit existing artifact

### E07-06: Consider template-driven start (highest ceiling, highest effort)
- **Evidence:** Lines 289-305 — "THIS IS THE HIGHEST-LEVERAGE ARCHITECTURAL CHANGE." Template handles construction, builder focuses on composition.
- **Target file:** New architecture: `design-system/pipeline/artifact-template-scaffold.md`
- **Specific change:** Create HTML scaffold template with: zone structure + placeholder content, background colors pre-set to brief values, basic typography hierarchy, component classes from components.css pre-integrated, responsive breakpoints pre-configured. Builder's job: replace content + adjust zone-specific styles + add compositional mechanisms + create designed moments.
- **Impact:** HIGH (long-term) — eliminates entire CONSTRUCTION defect class (trailing void, responsive breakpoints, container width, skip link). +0.3-0.5 PA-05 points. Effort: 8-12 hrs.
- **Classification:** (B) New artifact + (C) Architectural change

### E07-07: Add anti-pattern awareness to builder input
- **Evidence:** Lines 232-235 — "Historical defect patterns: 0% reaches builder. The builder has no knowledge of what went wrong in previous builds."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md` or execution brief
- **Specific change:** Add 10-line "Common Defects" appendix to builder input: "(1) backgrounds that differ by less than 20 RGB points feel identical; (2) more than 4 consecutive components with identical formatting creates monotony; (3) trailing whitespace below the footer breaks credibility; (4) cold accent colors in a warm palette break coherence; (5) uniform headings without variation flatten hierarchy."
- **Impact:** MEDIUM — gives builder historical awareness
- **Classification:** (A) Edit existing artifact

### E07-08: Inline best color pairs from value-tables into Tier 3
- **Evidence:** Lines 243-245 — "Inline the 5 most relevant color pairs and 1 spacing progression directly in the Tier 3 multi-coherence section."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, Tier 3
- **Specific change:** Add template instruction: "At each boundary description, inline the specific color pair: 'Background: [hex] -> [hex] (computed delta: [N] RGB). Reference pair from value-tables.md: [pair name].'"
- **Impact:** LOW — improves value table absorption
- **Classification:** (A) Edit existing artifact

### E07-09: Add deliberate plainness disposition instruction (duplicate of E06-11)
- **Evidence:** Lines 341-345 — "A 4/4 page has at least one zone that is INTENTIONALLY simple as compositional contrast." PA-64 scored NO.
- **Target file:** Same as E06-11
- **Impact:** HIGH
- **Classification:** (A) Edit existing artifact

### E07-10: Add metaphor persistence in CODE zones (duplicate of E05-02)
- **Evidence:** Lines 347-349 — "Even in CODE zones (Z5), the refinery metaphor persists in structural choices."
- **Target file:** Same as E05-02. Add specific: "In CODE zones, express metaphor through: code blocks labeled as 'assembly stations,' checklists as 'quality control checkpoints,' troubleshooting as 'fault isolation.' Zone headers sustain metaphor vocabulary."
- **Impact:** MEDIUM
- **Classification:** (A) Edit existing artifact

### E07-11: Broaden D-04 creative latitude for inventiveness
- **Evidence:** Lines 352-354 — "D-04 instruction is too prescriptive ('dark inversion block' + 'layout rupture'). More creative latitude might help."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-04
- **Specific change:** Revise D-04: "Create 1-2 moments in the second half where the reader pauses and thinks 'I have not seen this layout pattern before.' The moment can be a dark inversion, a full-bleed element, a grid disruption, a typographic scale jump, or any other pattern break. Specify the content moment but leave the visual treatment to creative authority."
- **Impact:** MEDIUM — enables more inventive D-04 execution
- **Classification:** (A) Edit existing artifact

---

## FILE 08: Editorial Designer Perspective (08-editorial-designer-perspective.md)

### E08-01: Intensify zone background progression to 3 clear registers
- **Evidence:** Lines 133-139 — "Instead of 6 warm-cream variants that differ by single-digit RGB points, push to 3 clearly distinct registers: Light (Z1, Z3), Medium (Z2, Z4), Dark (Z5, Z6)."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, Tier 3, OR `artifact-value-tables.md`
- **Specific change:** Add guidance: "Zone backgrounds should form at least 3 perceptually distinct registers (LIGHT, MEDIUM, DARK warm). Adjacent zones that share a register should differ by a secondary channel (border style, padding scale, or typography weight). Delta between registers should be >= 25 RGB points."
- **Impact:** HIGH — directly addresses the most persistent perception issue across builds
- **Classification:** (A) Edit existing artifact

### E08-02: Add one unique visual element per zone
- **Evidence:** Lines 141-149 — "Each zone needs one unique visual element that belongs only to it." Specific recommendations per zone type from the designer.
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-02 (Room Perception)
- **Specific change:** Add to D-02: "Each zone should contain at least one component or layout that is UNIQUE to that zone — not used in any other zone. This creates visual landmarks and prevents the 'same template applied to different content' perception."
- **Impact:** HIGH — addresses the "templated not designed" perception
- **Classification:** (A) Edit existing artifact

### E08-03: Introduce text measure variation
- **Evidence:** Lines 150-157 — "The entire page runs at 960px max-width with everything left-aligned. Introduce narrow-measure passages, full-width moments, indented elements."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md` or Tier 3
- **Specific change:** Add recipe instruction: "Vary the text measure at least 3 times across the page: (a) narrow-measure (max-width: 600px or 50ch) for philosophical/reflective passages, (b) standard-measure (container width) for body text, (c) full-width or near-full-width for diagrams, grids, and dramatic moments."
- **Impact:** HIGH — addresses the "visual monotony" that makes the page feel like a document
- **Classification:** (A) Edit existing artifact

### E08-04: Strengthen dark/light rhythm with 2-3 additional dark moments
- **Evidence:** Lines 159-167 — "Add 2-3 more dark or semi-dark moments distributed across the page."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-04 or D-05
- **Specific change:** Add to D-05 (Reader's Scroll): "For pages with 5+ zones, include at least 3 dark or semi-dark visual moments distributed across the scroll. Not all at boundaries — some within zones."
- **Impact:** MEDIUM — improves pacing/rhythm dimension (rated 2.5/5)
- **Classification:** (A) Edit existing artifact

### E08-05: Vary heading treatment for emphasis
- **Evidence:** Lines 183-184 — "Every heading is Instrument Serif italic. A designer would break the pattern for emphasis."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md` or Tier 3
- **Specific change:** Add instruction: "Break the heading pattern at least once per zone: use bold upright for a critical heading, adjust size for editorial emphasis, or use a different alignment."
- **Impact:** MEDIUM — addresses "consistency to a fault"
- **Classification:** (A) Edit existing artifact

### E08-06: Vary callout component structure for different types
- **Evidence:** Lines 111-114 — "The callout boxes are essentially the same component with different left-border colors."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md`, component section
- **Specific change:** Add instruction: "Not all callout types should share the same visual structure. The 'Essence' callout (philosophical/editorial) should feel fundamentally different from a 'Gate' callout (technical/structural) — different size, layout, typographic treatment."
- **Impact:** MEDIUM — increases component originality
- **Classification:** (A) Edit existing artifact

### E08-07: Design footer as a real destination
- **Evidence:** Lines 229-231 and 269 — "Footer should be a proper closing section — summary stats, related resources, navigation." Closing Resonance rated 1.5/5.
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md`, footer section
- **Specific change:** Add instruction: "For pages with 5+ zones, the footer should include 2-3 of: closing editorial quote, summary statistics, related resources, navigation (return-to-top), and visual weight matching the header."
- **Impact:** MEDIUM — addresses Closing Resonance weakness (1.5/5)
- **Classification:** (A) Edit existing artifact

### E08-08: Increase spacing compression ratio
- **Evidence:** Lines 244-248 — "80px vs 32px does not FEEL like compression. To feel like pressure, you need 120px at intake, 16px at densest."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-06 or Tier 2
- **Specific change:** Widen spacing compression range: "Zone padding range: SPARSE = 100-120px, MODERATE = 48-64px, DENSE = 24-32px. Ratio between sparsest and densest should be >= 3:1."
- **Impact:** MEDIUM — makes density arc perceptible
- **Classification:** (A) Edit existing artifact

### E08-09: Add editorial-weight-by-importance heading treatment
- **Evidence:** Lines 394-396 — "Bloomberg adjusts visual weight based on editorial importance, not heading level."
- **Target file:** `design-system/pipeline/artifact-tc-brief-template.md`, D-03 or D-01
- **Specific change:** Add to D-01: "Identify 2-3 content headings that carry KEY INSIGHTS. These headings should receive enhanced visual treatment regardless of heading level."
- **Impact:** MEDIUM — moves from template-driven to content-driven hierarchy
- **Classification:** (A) Edit existing artifact

### E08-10: Distinguish ASCII diagrams from code blocks visually
- **Evidence:** Lines 208-209 — "ASCII diagrams occupy the same visual space as code blocks, creating ambiguity."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md`, component section
- **Specific change:** Add instruction: "ASCII art diagrams and code blocks must be visually distinguishable through at least one property: background shade, border style, padding, or meta-label."
- **Impact:** LOW — improves content-type clarity
- **Classification:** (A) Edit existing artifact

### E08-11: Add asymmetric spacing for editorial emphasis
- **Evidence:** Lines 181-182 — "Real editorial design has irregular spacing — a pull quote might have 120px above it and 40px below it."
- **Target file:** `design-system/pipeline/artifact-builder-recipe.md` or Tier 3
- **Specific change:** Add instruction: "For high-emphasis components (pull quotes, interstitial moments), use ASYMMETRIC vertical spacing — more space above than below (e.g., 120px above, 48px below). Symmetric spacing is for body content; asymmetric spacing signals editorial emphasis."
- **Impact:** MEDIUM — addresses "correct but not composed" spacing
- **Classification:** (A) Edit existing artifact

---

## SUMMARY: ENRICHMENT COUNT BY FILE

| File | Enrichments | HIGH | MEDIUM | LOW |
|------|------------|------|--------|-----|
| 01 — HTML/CSS Analysis | 6 | 0 | 1 | 5 |
| 02 — Artifact Quality | 8 | 2 | 3 | 3 |
| 03 — PA Synthesis | 8 | 1 | 5 | 2 |
| 04 — Gate Failure Analysis | 5 | 3 | 1 | 1 |
| 05 — Cross-Run Comparison | 6 | 2 | 2 | 2 |
| 06 — Unmeasured Dimensions | 12 | 2 | 7 | 3 |
| 07 — Pipeline Ceiling | 11 | 5 | 5 | 1 |
| 08 — Editorial Designer | 11 | 3 | 6 | 2 |
| **TOTAL** | **67** | **18** | **30** | **19** |

## DEDUPLICATION: Key Enrichments That Appear Multiple Times

| Enrichment | Appears In | Count |
|------------|-----------|-------|
| Brief must self-verify RGB delta claims | E02-01, E04-02 | 2 |
| Specify deltas as MINIMUMS not TARGETS | E04-05, E05-04 | 2 |
| Trailing void detection gate | E03-01, E05-01 | 2 |
| Deliberate plainness instruction | E06-11, E07-09 | 2 |
| Metaphor persistence in final zones | E05-02, E07-10 | 2 |
| Concept-naming for custom properties | E01-01, E04-01 | 2 |

**After deduplication: ~61 unique enrichments (67 total minus ~6 duplicates)**

## TOP 10 HIGHEST-IMPACT ENRICHMENTS (Ranked)

1. **E07-01: Automated REFINE cycle** — +0.3-0.5 PA-05 delta. HIGHEST LEVERAGE single change.
2. **E02-01/E04-02: Brief must self-verify RGB deltas** — CRITICAL. Prevents brief self-contradiction.
3. **E03-01/E05-01: Trailing void detection gate** — HIGH. 9/9 auditor consensus, recurring across all builds.
4. **E07-02: Annotated CSS reference patterns** — HIGH. +0.2-0.4 PA-05 delta. Fills procedural knowledge gap.
5. **E07-03: CSS pattern library in brief** — HIGH. Converts instructions to executable recipes.
6. **E06-01: Add experiential PA questions** — HIGH. Addresses structural-over-experiential measurement bias.
7. **E08-01: Intensify zone background progression** — HIGH. 3 perceptual registers, >= 25 RGB between registers.
8. **E08-02: One unique visual element per zone** — HIGH. Addresses "templated not designed" perception.
9. **E08-03: Text measure variation** — HIGH. Breaks visual monotony of uniform left-alignment.
10. **E06-11/E07-09: Deliberate plainness instruction** — HIGH. Directly addresses PA-64 failure blocking 4/4.

## CROSS-FILE VALIDATION MATRIX

These findings appear independently in 2+ analysis files, indicating high confidence:

| Finding | Files | Consensus Count |
|---------|-------|:-:|
| Brief must verify its own RGB delta claims | 02, 04 | 2 |
| BG deltas must be minimums not targets | 04, 05 | 2 |
| Trailing void needs programmatic gate | 03, 05 | 2 |
| Metaphor persistence for CODE zones | 05, 07 | 2 |
| Deliberate plainness instruction | 06, 07 | 2 |
| Concept-based custom property naming | 01, 04 | 2 |
| Builder needs CSS reference examples | 07, 08 | 2 |
| Zone backgrounds too close together | 02, 05, 08 | 3 |
| Builder end-of-page verification needed | 03, 05, 07, 08 | 4 |
| Pattern-breaking / rule-breaking guidance | 06, 07, 08 | 3 |
| Recipe format is highest-impact pattern | 02, 05 | 2 |
| Quality = sophistication - defects | 05, 07 | 2 |

---

*Total: 67 enrichment recommendations extracted from 8 analysis files. 18 HIGH impact, 30 MEDIUM impact, 19 LOW impact. After deduplication: ~61 unique enrichments. 12 cross-validated findings confirmed by 2+ independent analysis files.*
