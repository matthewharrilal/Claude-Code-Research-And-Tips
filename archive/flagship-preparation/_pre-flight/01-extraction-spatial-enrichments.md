# Extraction: Files 01-03 (PA Lessons, Enrichment Specs, Spatial Gate)

**Extractor:** extraction-worker-1
**Date:** 2026-02-16
**Sources:**
- `01-pa-lessons-for-build.md` (505 lines)
- `02-enrichment-specifications.md` (659 lines)
- `03-spatial-confidence-gate.md` (1,110 lines)

---

## FILE 1: 01-pa-lessons-for-build.md

### Summary
PA diagnostic value ranking (48 questions ranked), dimension hit rates, Mode 4 vs initial audit comparison, 3 embedded build checkpoints, Builder's 10 self-check, original vs re-audit comparison, 7 metacognitive lessons, PA skill restructuring recommendations.

---

### ITEM 01-001
- **Source:** 01-pa-lessons-for-build.md, lines 83-92
- **Action:** Recognize spatial questions as highest-diagnostic. PA skill is over-weighted toward text readability and under-weighted toward spatial composition for pages that clear basic readability bar.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-002
- **Source:** 01-pa-lessons-for-build.md, lines 171-186
- **Action:** IMPLEMENT Checkpoint 1: CONTENT AUDIT (Before Any CSS). Count headings, paragraphs, tables, diagrams, code blocks. Check content-to-zone ratio. Check content distribution. Eliminate empty zones.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship)
- **Dependencies:** None
- **Binary check:** "If I laid this content out with zero styling in a single scrolling column, would a reader encounter significant blank regions?"
- **Binary rule:** EACH zone must contain >= 3 distinct content elements (heading + paragraph + one of: table, diagram, code block, callout). If any zone has fewer, restructure before proceeding.

### ITEM 01-003
- **Source:** 01-pa-lessons-for-build.md, lines 187-201
- **Action:** IMPLEMENT Checkpoint 2: SPATIAL SKELETON CHECK (After layout, before polish). Full-page screenshot squint test (PA-10). Scroll-through at 1440px. Content-to-scroll ratio measurement. Designed moment placement check.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship)
- **Dependencies:** 01-002 (Checkpoint 1 must pass first)
- **Binary check:** "If I squint at the full-page screenshot, does the visual weight look distributed, or concentrated?"
- **Binary rules:**
  - Content must fill >= 60% of total scroll height
  - No more than 2 consecutive viewport-height screens may be content-free
  - If top 30% of full-page screenshot contains all visible dark/dense areas and bottom 70% is uniform light: STOP and restructure

### ITEM 01-004
- **Source:** 01-pa-lessons-for-build.md, lines 203-216
- **Action:** IMPLEMENT Checkpoint 3: SCROLL EXPERIENCE CHECK (After styling, before declaring done). Scroll at reading speed. Footer reachability check. Transition quality check. Second-half surprises check.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship)
- **Dependencies:** 01-003 (Checkpoint 2 must pass first)
- **Binary check:** "Would I keep scrolling past the midpoint, or assume the page is done?"
- **Binary rule:** At least ONE designed visual moment (diagram, dramatic table, visual treatment change) in each third of the scroll (top third, middle third, bottom third).

### ITEM 01-005
- **Source:** 01-pa-lessons-for-build.md, lines 219-256
- **Action:** IMPLEMENT Builder's 10 self-check (B-01 through B-10). Builder runs after each major section. Takes viewport screenshot at 1440px and 768px. Answers 10 questions. If B-01, B-03, B-09, or B-10 FAIL: STOP and fix before continuing. Other failures: note and address before declaring done.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- builder agent instructions
- **Dependencies:** None
- **Cross-reference:** Source PA questions listed per item:
  - B-01 -> PA-09 (void detection)
  - B-02 -> PA-34 (transition quality)
  - B-03 -> PA-30 (container utilization)
  - B-04 -> PA-02, PA-08 (readability)
  - B-05 -> PA-47 (visual monotony)
  - B-06 -> Guardrails (token compliance)
  - B-07 -> PA-44 (metaphor structural presence)
  - B-08 -> PA-40 (spacing consistency)
  - B-09 -> Container check (940-960px)
  - B-10 -> PA-32 (weight distribution)

### ITEM 01-006
- **Source:** 01-pa-lessons-for-build.md, lines 336-337
- **Action:** For blocking quality decisions (ship/no-ship), always use Mode 4 (9 auditors). Mode 2/3 suitable for progress checks but not final quality gates.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- audit section
- **Dependencies:** None

### ITEM 01-007
- **Source:** 01-pa-lessons-for-build.md, lines 342
- **Action:** Assign auditors by dimension, not by question count. Each auditor should own ONE perceptual dimension.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md` + Master execution prompt
- **Dependencies:** None

### ITEM 01-008
- **Source:** 01-pa-lessons-for-build.md, lines 354
- **Action:** Always include an adversarial auditor. PA-26/27/28 findings often identify root cause that other auditors describe symptoms of.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- audit section
- **Dependencies:** None

### ITEM 01-009
- **Source:** 01-pa-lessons-for-build.md, lines 360-361
- **Action:** Perceptual auditors must NEVER see the build plan, mechanism list, or metaphor description before auditing. Context enables rationalization. Ignorance enables perception.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- audit section
- **Dependencies:** None

### ITEM 01-010
- **Source:** 01-pa-lessons-for-build.md, lines 377
- **Action:** Always run BOTH programmatic and perceptual audits. Neither alone is sufficient.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- audit section
- **Dependencies:** None

### ITEM 01-011
- **Source:** 01-pa-lessons-for-build.md, lines 385
- **Action:** NEVER assess spatial composition from full-page screenshots alone. Always use viewport-scale scroll-through.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md` + Master execution prompt
- **Dependencies:** None

### ITEM 01-012
- **Source:** 01-pa-lessons-for-build.md, lines 393-394
- **Action:** Maintain temporal firewall for lock sheet. Cold looks and PA answers FIRST, lock sheet classification SECOND.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-013
- **Source:** 01-pa-lessons-for-build.md, lines 401-410
- **Action:** ADD 4 new spatial quantification PA questions (PA-50 through PA-53):
  - PA-50: Count full-viewport screens that are completely empty
  - PA-51: Estimate percentage of total scroll containing actual content (90%+, 70-90%, 50-70%, 30-50%, <30%)
  - PA-52: Is there a designed visual moment in each third of the scroll? (TOP / MIDDLE / BOTTOM)
  - PA-53: At 1440px, what percentage of viewport WIDTH does content actively use? (90%+, 70-90%, 50-70%, 30-50%, <30%)
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-014
- **Source:** 01-pa-lessons-for-build.md, lines 412-416
- **Action:** MODIFY PA-17 and PA-41: Elevate from ceiling-tier-only to CRITICAL for ALL tiers at or above Middle. PA-17 should be Tier 1 Mandatory, not Tier 2 Standard.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-015
- **Source:** 01-pa-lessons-for-build.md, lines 418-428
- **Action:** MODIFY PA-09 severity calibration. Add severity language:
  - 1-2 empty viewport-screens: LOOKS-WRONG
  - 3-5 empty viewport-screens: WOULD-NOT-SHIP
  - 6+ empty viewport-screens: CATASTROPHIC (blocking, requires structural restructuring not CSS fixes)
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-016
- **Source:** 01-pa-lessons-for-build.md, lines 430-439
- **Action:** MODIFY PA-05c PROPORTIONATE sub-criteria. Expand to explicitly separate:
  - Horizontal proportion: content uses container width effectively?
  - Vertical proportion: visual weight distributed across scroll, not concentrated?
  - Breathing proportion: negative space designed (intentional pauses) or abandoned (content ran out)?
  - All three must pass for PA-05c to pass.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-017
- **Source:** 01-pa-lessons-for-build.md, lines 441-443
- **Action:** REMOVE PA-03 (redundant with PA-05b). Both produce identical PASS results. PA-05b more specific and actionable.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-018
- **Source:** 01-pa-lessons-for-build.md, lines 445-455
- **Action:** ADD Mode 4 Pre-Capture Protocol Enhancement. Formalize as mandatory:
  1. Team lead takes ALL screenshots at ALL viewports (cold look + full scroll-through)
  2. Save to files with systematic naming
  3. Auditors receive screenshots via Read tool, never touch Playwright
  4. Eliminates contention entirely, enables 9+ parallel auditors
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-019
- **Source:** 01-pa-lessons-for-build.md, lines 457-469
- **Action:** ADD Root Cause Classification Protocol for findings. 5 root cause types:
  - CONTENT: Not enough content. Fix: add content or remove containers.
  - SPACING: Too much/little CSS spacing. Fix: adjust padding/margin.
  - STRUCTURAL: Wrong page architecture. Fix: restructure IA.
  - EXECUTION: Correct design, poor CSS. Fix: fix CSS.
  - METAPHOR: Metaphor creating perceptual cost > benefit. Fix: modify metaphor.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Dependencies:** None

### ITEM 01-020
- **Source:** 01-pa-lessons-for-build.md, lines 471-483
- **Action:** ADD explicit void guardrails:
  - Maximum consecutive blank space: 1.5 viewport heights
  - Minimum content coverage: 60% of total scroll height
  - Visual weight distribution: No more than 70% of total visual weight in first 30% of scroll
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md` (guardrails section)
- **Dependencies:** None
- **Cross-reference:** Also addressed as B1 in 02-enrichment-specifications.md (prohibitions.md)

### ITEM 01-021
- **Source:** 01-pa-lessons-for-build.md, lines 316-321
- **Action:** Never declare a fix successful based on CSS changelog alone. Always re-audit visually. Single-pass fixes unreliable for structural problems. Root cause analysis must precede fixing.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- fix cycle section
- **Dependencies:** None

---

## FILE 2: 02-enrichment-specifications.md

### Summary
7 BLOCKING enrichments with exact insertable text, insertion points, failure traceability, and binary compliance tests. All 7 trace to Failure 1 (catastrophic whitespace void). Total: ~328 lines added across 4 files.

---

### ITEM 02-001 (B1: Maximum Whitespace Prohibition)
- **Source:** 02-enrichment-specifications.md, lines 26-108
- **Action:** ADD Prohibition #21 to prohibitions.md: "NEVER Allow a Full Viewport Height of Contentless Space (EXCEPT Single Breathing Zone)"
- **Category:** ENRICHMENT
- **Priority:** BLOCKING (labeled "THE MOST IMPORTANT ENRICHMENT")
- **Target file:** `design-system/compositional-core/identity/prohibitions.md`
- **Insertion point:** After Prohibition #20, before "Summary Statistics" (line 323)
- **Dependencies:** None
- **Binary check:**
  - Scroll through page at viewport-height increments (0, 900, 1800, 2700, ...)
  - At each position, estimate content coverage percentage
  - Count consecutive positions where coverage < 30%
  - 0-1 consecutive below 30%: PASS
  - 2+ consecutive below 30%: FAIL
- **Exception:** Single breathing zone with visible transition text, between content sections, no other breathing zone within 2 scroll positions
- **Additional action:** Update Summary Statistics section -- change Conditional from "12" to "13", Total from "22" to "23"
- **Cross-reference:** 01-020 (void guardrails), 03-spatial-confidence-gate SC-02

### ITEM 02-002 (A1: Transition Grammar Between Zones)
- **Source:** 02-enrichment-specifications.md, lines 112-224
- **Action:** ADD "Transition Grammar" section to mechanism-catalog.md. Defines 3 transition types: HARD CUT (domain change), SPACING SHIFT (intensity change), CHECKPOINT (phase change). "No transition" (just empty space) is NOT valid.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Insertion point:** After "Combination Rules" (ends ~line 940), before "Extraction Validation" (~line 944)
- **Dependencies:** None
- **Binary check:** List all section boundaries. Each must have exactly one transition type. Any boundary with no type (empty space only): FAIL.
- **Additional rule:** No transition may exceed `var(--space-max-zone)` (96px) total vertical space. If more separation needed: add CHECKPOINT element, not whitespace.
- **Cross-reference:** C3 spacing maximum token (02-005)

### ITEM 02-003 (A2: Restraint Principle)
- **Source:** 02-enrichment-specifications.md, lines 227-293
- **Action:** ADD "Restraint Protocol" section to mechanism-catalog.md. Rules:
  - Mechanism density cap: max 4 distinct visible mechanisms per viewport-height section
  - Distribution: every third of page (0-33%, 33-66%, 66-100%) must have >= 2 distinct mechanisms
  - Restraint ratio: document rejected mechanisms (Ceiling: 3+, Flagship: 5+)
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Insertion point:** After A1 (Transition Grammar), before "Extraction Validation"
- **Dependencies:** 02-002 (A1 inserted first)
- **Binary checks:**
  - Per viewport section: count visible mechanisms. Any > 4: FAIL
  - Per third of page: count mechanisms. Any third < 2: FAIL
  - Ceiling/Flagship: count documented rejections below tier minimum: FAIL

### ITEM 02-004 (A3: Content Density Minimum Per Zone)
- **Source:** 02-enrichment-specifications.md, lines 297-391
- **Action:** ADD "Gap 6: Content Density Floors Per Zone" to semantic-rules.md. Rules:
  - Dedicated zone (own background): >= 3 paragraphs OR 2+ components OR 1 diagram with text
  - Breathing zone (transition): 1-3 sentences ONLY
  - Bedrock zone (dark background): 1 featured element + context paragraph
  - Maximum consecutive empty viewport height: no position < 30% content
  - Zone count ceiling by content volume (< 1500 words: 2 zones max, 1500-3000: 3, 3000-5000: 4, 5000+: 5)
  - Boundary rule: "Zones exist to SERVE content, not to DEMONSTRATE architecture"
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Insertion point:** After Gap 5 (Callout Semantic Differentiation, ~line 273), before "Research Citations" (~line 253)
- **Dependencies:** None
- **Binary checks:**
  - Per zone: count content blocks. Below minimum for zone type: FAIL
  - Scroll through at viewport increments. Any < 30% content: FAIL
  - Total words vs planned zones. Zones exceed max for word count: FAIL

### ITEM 02-005 (B3: Front-Loaded Visual Weight Prohibition)
- **Source:** 02-enrichment-specifications.md, lines 394-450
- **Action:** ADD Prohibition #22 to prohibitions.md: "NEVER Concentrate All Visual Interest in the First Third of the Page"
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `design-system/compositional-core/identity/prohibitions.md`
- **Insertion point:** After Prohibition #21 (B1 above)
- **Dependencies:** 02-001 (B1 inserted first)
- **Binary check:**
  - Step 1: Identify all designed moments (3+ simultaneous mechanisms at high intensity, unique visual treatment)
  - Step 2: Map scroll position as percentage of total page height
  - Step 3: At least 1 designed moment at or below 50% scroll depth: PASS. All above 50%: FAIL
- **Exception:** Very short pages (< 3 sections or < 2 viewport heights)
- **Additional action:** Update Summary Statistics section -- change Conditional from "13" to "14", Total from "23" to "24" (if B1 already applied)

### ITEM 02-006 (C3: Maximum Spacing Token)
- **Source:** 02-enrichment-specifications.md, lines 453-493
- **Action:** ADD maximum spacing tokens to tokens.css:
  - `--space-max-section: var(--space-16);` (64px max between sections within a zone)
  - `--space-max-zone: var(--space-24);` (96px max between zones or major page divisions)
  - Rule: No single margin/padding exceeds --space-max-zone (96px). If more separation needed: use CHECKPOINT element.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Insertion point:** After "Gestalt Semantic Aliases" (ends line 113), before "Grid System" (starts line 114)
- **Dependencies:** None
- **Binary check:** Search CSS for all margin/padding values. Any > 96px: FAIL.
- **Cross-reference:** A1 transition grammar (02-002)

### ITEM 02-007 (D3: Content-Form Fit Guidance)
- **Source:** 02-enrichment-specifications.md, lines 496-606
- **Action:** ADD "Gap 7: Content-Form Fit" to semantic-rules.md. Selection criteria:
  - Own zone: 3+ paragraphs OR 2+ components
  - Bento grid: 4+ items of comparable visual weight
  - Progressive disclosure: 3+ distinct phases with unique content
  - Drop cap: 1 paragraph of 3+ sentences
  - Full bedrock section: 1 featured element + context paragraph
  - Breathing zone: 1-3 sentences ONLY
  - "Enough Content?" gate and "Form Matches Content" inverse test
  - Boundary rule: "Form follows content volume. Never the reverse."
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Insertion point:** After A3 (Gap 6, content density)
- **Dependencies:** 02-004 (A3 inserted first)
- **Binary check:** Per section, form treatment level must be justified by content volume. Form exceeds minimum: FAIL.

### ITEM 02-008 (Cross-Gap Dependencies)
- **Source:** 02-enrichment-specifications.md, lines 609-633
- **Action:** Implement enrichments in this ORDER: B1 first, then C3, then A3 + D3, then A1, then A2, then B3.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** N/A (process instruction for enrichment execution)
- **Dependencies:** None
- **Cross-reference:** All 7 BLOCKING enrichments

### ITEM 02-009 (Insertion Summary Verification)
- **Source:** 02-enrichment-specifications.md, lines 636-658
- **Action:** Verify all 7 enrichments are inserted correctly:
  - prohibitions.md: +75 lines (B1 + B3)
  - mechanism-catalog.md: +130 lines (A1 + A2)
  - tokens.css: +8 lines (C3)
  - semantic-rules.md: +115 lines (A3 + D3)
  - Total: ~328 lines across 4 files
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** 4 files listed above
- **Dependencies:** All 7 enrichments applied

---

## FILE 3: 03-spatial-confidence-gate.md

### Summary
Complete specification of Spatial Confidence Gate: void budget calculation, 7 binary checks (SC-01 through SC-07), gate timing, fix cycle protocol, abort protocol, programmatic implementation (JavaScript), decision matrix, relationship to other gates, evidence traceability.

---

### ITEM 03-001 (Void Budget Calculation)
- **Source:** 03-spatial-confidence-gate.md, lines 16-168
- **Action:** IMPLEMENT void budget calculation as PRE-BUILD gate. Planner computes projected page height from build plan using formula:
  - Content height estimate: word_count/12 * 30.6px (body text) + code_lines * 22.3px + table_rows * 40px + list_items * 30px + headings * 55px + callouts * 120px
  - Structural overhead: zone_padding + transitions + checkpoints + header + footer + inter-paragraph spacing
  - Threshold: Content-to-void ratio >= 60:40
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- planner agent instructions
- **Dependencies:** Build plan must exist
- **Binary check:** content_ratio >= 60%. If below: planner MUST reduce zone count, reduce padding, eliminate transitions, or add content. Cannot proceed until pass.
- **Cross-reference:** SC-03 post-build check at 70% (more stringent because pre-build estimates have ~10% error margin)

### ITEM 03-002 (Void Budget Calibration Note)
- **Source:** 03-spatial-confidence-gate.md, lines 161-168
- **Action:** DOCUMENT that void budget alone is NECESSARY BUT NOT SUFFICIENT. The 7 binary checks catch what void budget misses (zone monotony, horizontal emptiness, empty structural elements). Void budget is FIRST filter, not only one.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship)
- **Dependencies:** None

### ITEM 03-003 (SC-01: Container Width)
- **Source:** 03-spatial-confidence-gate.md, lines 176-203
- **Action:** IMPLEMENT SC-01 check. Container width at 1440px viewport must be >= 940px AND <= 960px.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt + spatial auditor agent instructions
- **Dependencies:** Page must be built and served via HTTP
- **Binary check:** 940 <= width <= 960 -> PASS. Otherwise FAIL.
- **Measurement method:** `document.querySelector('.page-container').getBoundingClientRect().width`. NEVER measure from viewport dimensions.
- **On failure:** Fix max-width CSS or horizontal padding.
- **Cross-reference:** B-09 in Builder's 10 (01-005)

### ITEM 03-004 (SC-02: Maximum Contiguous Void)
- **Source:** 03-spatial-confidence-gate.md, lines 206-258
- **Action:** IMPLEMENT SC-02 check. No contiguous vertical span contentless for > 1.5 viewport heights (2,160px at 1440px viewport).
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt + spatial auditor agent instructions
- **Dependencies:** Page must be built
- **Binary check:** maxVoidFound <= 2160px -> PASS. > 2160px -> FAIL.
- **JavaScript provided:** Full implementation with elementsFromPoint scanning at 50px intervals.
- **On failure:** Reduce transition spacing, add content, or shrink sections.
- **Cross-reference:** B1 prohibition (02-001)

### ITEM 03-005 (SC-03: Content Distribution 70%+)
- **Source:** 03-spatial-confidence-gate.md, lines 261-299
- **Action:** IMPLEMENT SC-03 check. At least 70% of page scroll height must contain visible content.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt + spatial auditor agent instructions
- **Dependencies:** Page must be built
- **Binary check:** contentPercentage >= 70% -> PASS. < 70% -> FAIL.
- **Failure severity tiers:**
  - 55-69%: Moderate. Reduce zone padding and transitions by 30-50%.
  - 40-54%: Significant. Zone merging or content addition required. CSS alone insufficient.
  - < 40%: Catastrophic. Structural redesign required.
- **Cross-reference:** 01-003 (Checkpoint 2: >= 60% content fill), 03-001 (pre-build void budget at 60%)

### ITEM 03-006 (SC-04: Squint Test)
- **Source:** 03-spatial-confidence-gate.md, lines 302-326
- **Action:** IMPLEMENT SC-04 check. At 25% zoom, page must show 3+ visually distinct content regions with balanced mass. No empty quadrant.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt -- team-lead responsibilities
- **Dependencies:** Page built, full-page screenshot taken
- **Binary check (with judgment):** 3+ content regions AND no empty quadrant -> PASS. Otherwise FAIL.
- **This is the ONLY non-programmatic check.** Team-lead evaluates.
- **On failure:**
  - If fixable (one section too sparse): send fix instruction, re-run gate.
  - If structural (metaphor requires void): ABORT. Re-derive metaphor or downgrade to ceiling tier.

### ITEM 03-007 (SC-05: First Viewport Header Ratio)
- **Source:** 03-spatial-confidence-gate.md, lines 329-354
- **Action:** IMPLEMENT SC-05 check. Header must occupy <= 20% of first viewport height at 1440px.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt + spatial auditor agent instructions
- **Dependencies:** Page must be built
- **Binary check:** headerPercentage <= 20% -> PASS. > 20% -> FAIL.
- **On failure:** Reduce header top/bottom padding. Calculate exact reduction needed.

### ITEM 03-008 (SC-06: Minimum Content Sections)
- **Source:** 03-spatial-confidence-gate.md, lines 357-404
- **Action:** IMPLEMENT SC-06 check. Page must have >= 5 content sections. A "content section" = block with >= 200px rendered content height. Purely structural/decorative sections don't count.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt + spatial auditor agent instructions
- **Dependencies:** Page must be built
- **Binary check:** contentSections >= 5 -> PASS. < 5 -> FAIL.
- **On failure:** Split large sections or ensure all planned sections were built.

### ITEM 03-009 (SC-07: Footer Reachability)
- **Source:** 03-spatial-confidence-gate.md, lines 407-448
- **Action:** IMPLEMENT SC-07 check. Footer must exist. Gap between last content and footer <= 1 viewport height (900px).
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Master execution prompt + spatial auditor agent instructions
- **Dependencies:** Page must be built
- **Binary check:** Footer exists AND gapBeforeFooter <= viewportHeight -> PASS. Otherwise FAIL.
- **On failure:** Add footer (if missing) or reduce bottom spacing.

### ITEM 03-010 (Gate Timing)
- **Source:** 03-spatial-confidence-gate.md, lines 451-482
- **Action:** Spatial Confidence Gate fires at END of Pass 1 (Spatial Skeleton), BEFORE Pass 2 (Compositional Elaboration). Timeline:
  - Pre-Build: Metaphor derivation -> Gate 1 (Metaphor Resonance) -> Build plan + Void Budget Gate
  - Pass 1: Builder creates skeleton -> SPATIAL CONFIDENCE GATE fires
  - Pass 2: Only if gate passes
  - Pass 3: Only if Gate 4 passes
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- architecture/timeline section
- **Dependencies:** All SC checks defined

### ITEM 03-011 (Gate Execution Protocol)
- **Source:** 03-spatial-confidence-gate.md, lines 484-511
- **Action:** IMPLEMENT gate execution protocol:
  1. Team-lead spawns spatial-auditor with HTML path, SC-01/02/03/05/06/07 instructions, Playwright access, output to `03-spatial-audit.md`
  2. Simultaneously, team-lead takes full-page screenshot at 1440px, views at 25% for SC-04
  3. Team-lead reads spatial-auditor report, combines with SC-04
  4. ALL 7 PASS -> proceed to Pass 2. ANY FAIL -> Fix Cycle.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- team-lead section
- **Dependencies:** 03-003 through 03-009 (all SC checks)

### ITEM 03-012 (Fix Cycle Protocol)
- **Source:** 03-spatial-confidence-gate.md, lines 513-543
- **Action:** IMPLEMENT fix cycle protocol. Maximum 2 fix cycles.
  - Each cycle: team-lead identifies failures -> sends fix instructions via SendMessage -> builder applies fixes -> builder sends ANOMALY-FLAG -> spatial-auditor re-runs -> team-lead re-evaluates SC-04
  - After cycle 2 failure: ABORT
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- fix cycle section
- **Dependencies:** 03-011 (gate execution)
- **Estimated time:** 10-20 minutes per cycle

### ITEM 03-013 (Abort Protocol)
- **Source:** 03-spatial-confidence-gate.md, lines 546-562
- **Action:** IMPLEMENT abort protocol for gate failure after 2 fix cycles:
  1. Record all gate check results across both cycles
  2. Classify failure: CSS-fixable vs metaphor-structural
  3. Downgrade decision:
     - If passes 4-5 of 7: rebuild FAILING sections only, target ceiling tier without metaphor zone obligations
     - If passes < 4: abandon skeleton entirely. Rebuild at ceiling tier with simpler spatial architecture (2-3 sections, no zone progression). Keep metaphor at vocabulary level only.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- abort section
- **Dependencies:** 03-012 (fix cycle protocol)

### ITEM 03-014 (Programmatic Gate Runner)
- **Source:** 03-spatial-confidence-gate.md, lines 565-930
- **Action:** INCLUDE complete JavaScript `runSpatialConfidenceGate()` function in spatial-auditor agent instructions. Runs all 6 programmatic checks (SC-01 through SC-03, SC-05 through SC-07). SC-04 excluded (manual).
- **Category:** TOOL
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- spatial auditor agent section OR separate script file
- **Dependencies:** None
- **Cross-reference:** Playwright integration (lines 932-957), output format (lines 959-995)

### ITEM 03-015 (Gate Output Format)
- **Source:** 03-spatial-confidence-gate.md, lines 959-995
- **Action:** Spatial auditor must produce structured report in markdown table format: Check | Result | Measured | Threshold | Action. Include aggregate verdict, section details (SC-06), void regions (SC-02).
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- spatial auditor output spec
- **Dependencies:** 03-014 (gate runner implemented)

### ITEM 03-016 (Gate vs Programmatic Audit Separation)
- **Source:** 03-spatial-confidence-gate.md, lines 997-1008
- **Action:** DOCUMENT that Spatial Confidence Gate and Programmatic Audit are SEPARATE gates serving different purposes:
  - Spatial Gate: After Pass 1, checks spatial proportions, blocks Pass 2
  - Programmatic Audit: After Pass 2+3, checks soul/token/CPL/heading spacing, blocks ship
  - Sequential, not redundant. Each owns its domain.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt (flagship) -- gate architecture section
- **Dependencies:** None

### ITEM 03-017 (Decision Matrix: Fix vs Abort)
- **Source:** 03-spatial-confidence-gate.md, lines 1012-1041
- **Action:** INCLUDE decision matrix in master execution prompt. After fix cycle 1:
  - SC-01: FIX (CSS one-liner)
  - SC-02: FIX if maxVoid < 3000px, ESCALATE if >= 3000px
  - SC-03: FIX if >= 55%, ESCALATE if < 55%
  - SC-04: TEAM-LEAD JUDGMENT
  - SC-05: FIX (header padding)
  - SC-06: FIX (add missing sections)
  - SC-07: FIX (footer gap)
  After fix cycle 2:
  - SC-01: Should never fail, ABORT if does
  - SC-02: ABORT (metaphor requires void)
  - SC-03: ABORT (structural)
  - SC-04: ABORT (spatial architecture wrong)
  - SC-05: FIX IN PLACE (trivial)
  - SC-06: ABORT (builder cannot execute)
  - SC-07: FIX IN PLACE (trivial)
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- decision matrix section
- **Dependencies:** 03-012, 03-013

### ITEM 03-018 (5-Gate System Architecture)
- **Source:** 03-spatial-confidence-gate.md, lines 1044-1081
- **Action:** DOCUMENT complete 5-gate architecture:
  - Gate 1: Metaphor Resonance (after metaphor derivation) -- structural isomorphism, 3+ mechanism categories
  - Gate 2: Spatial Confidence (after Pass 1) -- THIS DOCUMENT, 7 binary checks
  - Gate 3: Landmark Completeness (after Pass 1, parallel with Gate 2) -- header/footer/sections present, container width
  - Gate 4: Composition Verification (after Pass 2) -- reinforcing pairs, 4-scale coherence, 12-16 mechanisms, 3+ transitions, PA-05 quick-check
  - Gate 5: Ship-Ready (after Pass 3) -- full programmatic audit, dual PA, comparative, blind novelty
  - Gates 2 and 3 run IN PARALLEL after Pass 1
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt (flagship) -- architecture section
- **Dependencies:** None

### ITEM 03-019 (Evidence Traceability Table)
- **Source:** 03-spatial-confidence-gate.md, lines 1084-1098
- **Action:** INCLUDE evidence traceability table linking every threshold to ceiling experiment data. Ensures no threshold is arbitrary.
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** Master execution prompt (flagship) -- appendix or reference section
- **Dependencies:** None

---

## CROSS-FILE CROSS-REFERENCES

| Cross-Ref | File A | File B | Relationship |
|-----------|--------|--------|-------------|
| Void guardrails | 01-020 (PA skill guardrails) | 02-001 (B1 prohibition) | Same concept, different targets. PA skill + prohibitions.md. |
| Void guardrails | 01-020 (PA skill guardrails) | 03-004 (SC-02 max void) | Same concept. PA skill + spatial gate. |
| Content coverage | 01-003 (Checkpoint 2: 60%) | 03-005 (SC-03: 70%) | Different thresholds! Checkpoint 2 = 60% (build-time estimate), SC-03 = 70% (post-build measurement). Pre-build = 60% because estimates have ~10% error. |
| Container width | 01-005 B-09 (Builder's 10) | 03-003 (SC-01: 940-960px) | Same check at different moments. Builder self-check vs post-build gate. |
| Transition grammar | 02-002 (A1) | 02-006 (C3 spacing max) | C3 tokens enforce A1 transition limits. 96px max per property. |
| Content density | 02-004 (A3 zone minimums) | 02-007 (D3 content-form fit) | A3 = zone-level floors. D3 = form-level minimums. D3 inserted after A3. |
| Prohibitions numbering | 02-001 (B1 = #21) | 02-005 (B3 = #22) | Sequential numbering. B1 first, B3 after. Summary stats update needed. |
| Front-loading | 02-005 (B3 prohibition) | 03-006 (SC-04 squint test) | B3 prevents concentration. SC-04 verifies distribution. |
| Fix cycle | 01-021 (never declare fix successful from CSS alone) | 03-012 (fix cycle protocol) | Process wisdom. Re-audit always. |
| 3-pass architecture | 01-002/003/004 (3 checkpoints) | 03-010 (gate timing in 3-pass) | Checkpoints embed in passes. Gate between Pass 1 and 2. |
| Mode 4 | 01-006 (use 9 auditors for ship/no-ship) | 03-018 (Gate 5 includes dual PA) | Gate 5 uses dual PA minimum. Mode 4 for final verdict. |

---

## PREREQUISITE SUMMARY

| ID | Prerequisite | Status | Source |
|----|-------------|--------|--------|
| PRE-01 | All 7 BLOCKING enrichments applied to design-system files | NOT YET | 02-001 through 02-007 |
| PRE-02 | Implementation order: B1 -> C3 -> A3+D3 -> A1 -> A2 -> B3 | NOT YET | 02-008 |
| PRE-03 | prohibitions.md Summary Statistics updated (22->24, 12->14 conditional) | NOT YET | 02-001, 02-005 |
| PRE-04 | PA skill updated with 4 new questions (PA-50 through PA-53) | NOT YET | 01-013 |
| PRE-05 | PA skill updated with PA-09 severity calibration | NOT YET | 01-015 |
| PRE-06 | PA skill updated with PA-05c expanded sub-criteria | NOT YET | 01-016 |
| PRE-07 | PA skill updated with PA-17/41 elevation to Middle+ | NOT YET | 01-014 |
| PRE-08 | PA skill updated with Mode 4 pre-capture formalization | NOT YET | 01-018 |
| PRE-09 | PA skill updated with root cause classification protocol | NOT YET | 01-019 |
| PRE-10 | PA skill updated with void guardrails | NOT YET | 01-020 |
| PRE-11 | runSpatialConfidenceGate() script ready for spatial auditor | NOT YET | 03-014 |
| PRE-12 | Master execution prompt includes 3 embedded checkpoints | NOT YET | 01-002/003/004 |
| PRE-13 | Master execution prompt includes Builder's 10 self-check | NOT YET | 01-005 |
| PRE-14 | Master execution prompt includes 5-gate architecture | NOT YET | 03-018 |
| PRE-15 | Master execution prompt includes fix cycle + abort protocol | NOT YET | 03-012, 03-013 |
| PRE-16 | Master execution prompt includes decision matrix | NOT YET | 03-017 |

---

## BINARY CHECK SUMMARY

| ID | Check | Threshold | Source |
|----|-------|-----------|--------|
| BC-01 | Each zone has >= 3 content elements | Count >= 3 | 01-002 |
| BC-02 | Content fills >= 60% of total scroll height | >= 60% | 01-003 |
| BC-03 | No more than 2 consecutive viewport-screens content-free | <= 2 | 01-003 |
| BC-04 | Top 30% of screenshot NOT containing all dark areas | visual check | 01-003 |
| BC-05 | At least 1 designed visual moment per third of scroll | 3/3 thirds | 01-004 |
| BC-06 | B-01 (void), B-03 (container util), B-09 (width), B-10 (weight) are BLOCKING in Builder's 10 | STOP if fail | 01-005 |
| BC-07 | Consecutive void positions < 30% coverage: max 1 | <= 1 | 02-001 |
| BC-08 | Each section boundary has exactly 1 transition type | none missing | 02-002 |
| BC-09 | Max 4 visible mechanisms per viewport section | <= 4 | 02-003 |
| BC-10 | Every third of page has >= 2 mechanisms | >= 2 per third | 02-003 |
| BC-11 | Zone content blocks meet minimum for zone type | count vs table | 02-004 |
| BC-12 | Zone count does not exceed max for word count | zones vs words | 02-004 |
| BC-13 | At least 1 designed moment below 50% scroll | >= 1 | 02-005 |
| BC-14 | No single margin/padding > 96px | <= 96px | 02-006 |
| BC-15 | Form treatment level justified by content volume | form vs content | 02-007 |
| BC-16 | Pre-build content-to-void ratio >= 60% | >= 60% | 03-001 |
| BC-17 | SC-01: Container 940-960px | 940-960px | 03-003 |
| BC-18 | SC-02: Max contiguous void <= 2160px | <= 2160px | 03-004 |
| BC-19 | SC-03: Content distribution >= 70% | >= 70% | 03-005 |
| BC-20 | SC-04: 3+ content regions at 25% zoom, no empty quadrant | 3+ regions | 03-006 |
| BC-21 | SC-05: Header <= 20% of viewport | <= 20% | 03-007 |
| BC-22 | SC-06: >= 5 content sections (>= 200px each) | >= 5 | 03-008 |
| BC-23 | SC-07: Footer exists, gap <= 1 viewport | <= 900px | 03-009 |
| BC-24 | Max 2 fix cycles before abort | <= 2 | 03-012 |

---

## FILE MODIFICATION SUMMARY

| Target File | Modifications | Source Items | Lines Added |
|-------------|--------------|-------------|-------------|
| `design-system/compositional-core/identity/prohibitions.md` | +Prohibition #21 (B1), +Prohibition #22 (B3), update Summary Statistics | 02-001, 02-005 | ~75 |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | +Transition Grammar (A1), +Restraint Protocol (A2) | 02-002, 02-003 | ~130 |
| `design-system/compositional-core/vocabulary/tokens.css` | +spacing maximums (C3) | 02-006 | ~8 |
| `design-system/compositional-core/guidelines/semantic-rules.md` | +Gap 6: Content Density (A3), +Gap 7: Content-Form Fit (D3) | 02-004, 02-007 | ~115 |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | +PA-50 through PA-53, modify PA-09 severity, modify PA-05c, modify PA-17/41 elevation, remove PA-03, +Mode 4 pre-capture, +root cause protocol, +void guardrails | 01-013, 01-014, 01-015, 01-016, 01-017, 01-018, 01-019, 01-020 | ~100+ |
| Master execution prompt (new) | +3 embedded checkpoints, +Builder's 10, +5-gate architecture, +fix cycle/abort, +decision matrix, +void budget, +gate runner script, +audit rules | 01-002/003/004/005/006-012/021, 03-001-019 | ~500+ |

---

**EXTRACTION COMPLETE**
- **Total items extracted:** 49 (21 from file 01, 9 from file 02, 19 from file 03)
- **BLOCKING items:** 27
- **HIGH items:** 17
- **MEDIUM items:** 3
- **OTHER items:** 2
- **Binary checks cataloged:** 24
- **Prerequisites cataloged:** 16
- **Cross-references mapped:** 11
- **File modifications identified:** 6 target files
