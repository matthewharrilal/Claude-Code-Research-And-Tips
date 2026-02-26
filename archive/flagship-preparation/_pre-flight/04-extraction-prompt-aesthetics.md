# Extraction 04: Prompt Architecture + Crown Jewel Forensics + Defining Beautiful

**Extractor:** extraction-worker-4
**Date:** 2026-02-16
**Source files:**
- `10-prompt-architecture.md` (613 lines)
- `11-crown-jewel-forensics.md` (565 lines)
- `12-defining-beautiful.md` (344 lines)

---

## FILE 1: 10-prompt-architecture.md (Ceiling Prompt Postmortem + Flagship Prompt Architecture Design)

### ACTION ITEMS

#### A01: Adopt Two-Layer prompt architecture
- **Source:** 10-prompt-architecture.md, lines 204-244, 418-533, 577-601
- **Action:** Replace the 1,004-line monolithic ceiling prompt with a 4-layer architecture: Layer 1 Conviction (60-80 lines), Layer 2 Execution Spec (80-120 lines), Layer 3 Coordination Spec (40-60 lines), Layer 4 Reference Library (existing files). Total ~240 lines across Layers 1-3.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** New flagship execution prompt (to be assembled)
- **Dependencies:** All enrichments applied first; rule classification complete

#### A02: Write Layer 1 Conviction Document (70 lines)
- **Source:** 10-prompt-architecture.md, lines 420-433
- **Action:** Create conviction document containing: THE THESIS ("The difference between Flagship and Ceiling is not complexity. It is restraint."), load-bearing metaphor test, "This page should have a point of view," 3 metacognitive checkpoints, 20 lines from CD-006 showing one designed transition zone, 20 lines from DD-006 showing fractal coherence at 2 scales, framing note about quality.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** New Layer 1 conviction document
- **Dependencies:** Crown jewel forensics (file 11) complete for exemplar extraction

#### A03: Write Layer 2 Execution Spec (100-120 lines)
- **Source:** 10-prompt-architecture.md, lines 435-488
- **Action:** Create execution spec containing 8 sections: Mission (10 lines), Spatial Rules (15 lines), Soul Rules (10 lines), Compositional Rules (15 lines), Process Rules (15 lines), Builder Self-Check (15 lines), Success Criteria (10 lines), Kill Criteria (10 lines).
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** New Layer 2 execution spec
- **Dependencies:** Rule classification (A05) finalized

#### A04: Write Layer 3 Coordination Spec (60 lines)
- **Source:** 10-prompt-architecture.md, lines 490-511
- **Action:** Create coordination spec containing 3 sections: Agent Roster (25 lines), Checkpoints (20 lines), Communication Obligations (15 lines).
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** New Layer 3 coordination spec
- **Dependencies:** A02, A03

#### A05: Classify all 56 ceiling rules into KEEP/CONV/COORD/DROP/MERGE
- **Source:** 10-prompt-architecture.md, lines 311-401
- **Action:** Apply the full rule classification table (56 rules) to determine which rules go into which layer. After merging and removing redundancies: 22 KEEP rules + 3 NEW spatial rules = 25 binary rules for execution spec. 7 rules move to conviction doc. 10 rules move to coordination spec. 3 rules DROP. 10 rules MERGE into others.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Layer 2 execution spec
- **Dependencies:** None (classification already done in the report)

#### A06: Add 3 new spatial accountability rules
- **Source:** 10-prompt-architecture.md, lines 406-414, 583
- **Action:** Add these 3 NEW rules that address the dominant failure mode:
  1. NEW-1: Content-to-void ratio >= 60:40 (measured: sum content element heights / total scroll height)
  2. NEW-2: No empty structural elements (every div with class has content)
  3. NEW-3: >= 1 designed moment per scroll quartile (0-25%, 25-50%, 50-75%, 75-100%)
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Layer 2 execution spec, Section 2 (Spatial Rules)
- **Dependencies:** None

#### A07: Convert all CAPABILITY rules to OBLIGATION rules
- **Source:** 10-prompt-architecture.md, lines 116-123, 354, 585
- **Action:** Every "CAN" rule becomes "MUST": "Builder CAN message" -> "Builder MUST message." "Builder CAN self-check" -> "Builder MUST self-check AND report results." Specifically: Rule #29 "Builder can message planner" -> "Builder MUST message planner before writing file." Add "Builder MUST send page height + content ratio after writing file." Add "If builder sends zero messages: team-lead prompts 'What was your biggest spatial concern?'"
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Layer 2 execution spec (Section 5: Process Rules) + Layer 3 coordination spec (Section C)
- **Dependencies:** None

#### A08: Remove all redundancy from prompt
- **Source:** 10-prompt-architecture.md, lines 569-573, 587
- **Action:** Each rule appears ONCE at its canonical location. No restatements. No "see also" references. Container width (was 3 locations), per-category minimums (was 2 locations), token compliance (was 3 locations), isolation matrix (restated in roster) -- all collapsed to single mention.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All 3 layers
- **Dependencies:** A05 classification

#### A09: Move all judgment rules to Conviction document
- **Source:** 10-prompt-architecture.md, lines 337-381, 589
- **Action:** Move these 7 rules from execution to conviction: #13 (4-scale fractal coherence), #21 (structural obligation table), #22 (1:MANY derivation), #52 (3-Question Test 90% metaphor-justified), #55 (mechanism through metaphor lens), #56 (section-scale internal rhythm), #49 (weight distribution self-check).
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** A02

#### A10: Add kill criteria with explicit abandon triggers
- **Source:** 10-prompt-architecture.md, lines 483-488, 591
- **Action:** Add 4 kill criteria to execution spec:
  1. Prompt > 200 lines: STOP, compress
  2. Content-to-void < 40:60 at any checkpoint: STOP, restructure architecture
  3. Cold-look majority NO at 1440px: DO NOT CSS-FIX, rebuild
  4. Fix cycle does not improve PA-05c by >= 1 point: ABANDON architecture
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 2 execution spec, Section 8
- **Dependencies:** None

#### A11: Add container width verification method
- **Source:** 10-prompt-architecture.md, lines 112, 334
- **Action:** Container width rule must include verification: "Verify via `document.querySelector('.page-container').getBoundingClientRect().width` at 1440px viewport." Not just the value (940-960px) but HOW to verify it.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 2 execution spec, Section 2 (Spatial Rules) + Section 6 (Builder Self-Check)
- **Dependencies:** None

#### A12: Include spatial budget gate in build plan phase
- **Source:** 10-prompt-architecture.md, lines 595, 502
- **Action:** The planner MUST calculate content-to-void ratio before the builder begins. Planner's build plan MUST include spatial budget table. This is called the "single highest-leverage addition."
- **Category:** PROCESS
- **Priority:** BLOCKING (called "highest-priority change #1")
- **Target file:** Layer 3 coordination spec + Layer 2 execution spec (Section 5)
- **Dependencies:** None

#### A13: Add mandatory messaging requirement
- **Source:** 10-prompt-architecture.md, lines 118-122, 507-510, 600
- **Action:** Builder MUST send >= 1 message to planner with spatial concern before writing file. Builder MUST send page metrics to team-lead after writing file. If builder sends zero messages: team-lead prompts "What was your biggest spatial concern?" PA findings dismissed as artifacts MUST be independently verified.
- **Category:** PROCESS
- **Priority:** BLOCKING (called "highest-priority change #2")
- **Target file:** Layer 2 execution spec (Section 5) + Layer 3 coordination spec (Section C)
- **Dependencies:** None

#### A14: Delete ~200-250 lines of unnecessary content from ceiling prompt
- **Source:** 10-prompt-architecture.md, lines 76-89
- **Action:** Delete: Section 2.3-2.4 task/wave sequence (~48 lines), Section 3.4 anti-spam table (~12 lines), Section 5.2-5.3 mechanism guidance detail (partial, ~27 lines), Section 9 anti-patterns (keep top 3, delete rest, ~23 lines), Section 11.2-11.3 isolation rationale + cheat sheet (~58 lines), Appendix A quick reference (partial, ~64 lines), Appendix C file manifest (partial, ~13 lines).
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Not applicable (superseded by new 240-line architecture)
- **Dependencies:** A01 (if new architecture adopted, this is moot)

#### A15: Expand Conviction passage with quality exemplars from crown jewels
- **Source:** 10-prompt-architecture.md, lines 429-432, 593
- **Action:** Add 20 lines from CD-006 showing one designed transition zone, and 20 lines from DD-006 showing fractal coherence at 2 scales. Frame with: "This is what 'felt through' looks like. Not the specific patterns -- the QUALITY."
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** Crown jewel forensic analysis (file 11)

#### A16: Write the 25 Critical Execution Rules
- **Source:** 10-prompt-architecture.md, lines 252-295
- **Action:** Codify the 25 rules identified on the critical execution path. These are broken into 5 groups: SPATIAL (4 rules), SOUL (8 rules), STRUCTURE (5 rules), PROCESS (4 rules), RHYTHM (3 rules), KILL (1 rule). These 25 lines ARE the execution spec's core.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Layer 2 execution spec
- **Dependencies:** A05, A06

### BINARY CHECKS

#### BC01: Binary compliance rate 100%
- **Source:** 10-prompt-architecture.md, line 45
- **Check:** All 18 binary rules in ceiling prompt achieved 100% compliance. Flagship must maintain this.
- **Category:** GATE

#### BC02: Builder effective context < 200 lines
- **Source:** 10-prompt-architecture.md, line 249, 544
- **Check:** Each agent's effective prompt must be under 200 lines (preparation ceiling hypothesis).
- **Category:** GATE

#### BC03: Prompt total ~240 lines across Layers 1-3
- **Source:** 10-prompt-architecture.md, lines 235, 530-532
- **Check:** Layer 1 (70) + Layer 2 (100-120) + Layer 3 (60) = 230-250 total.
- **Category:** GATE

#### BC04: 25 binary rules in execution spec
- **Source:** 10-prompt-architecture.md, lines 402-404
- **Check:** Exactly 22 KEEP rules + 3 NEW spatial rules = 25 binary rules. Not more.
- **Category:** GATE

#### BC05: Zero redundancy in prompt
- **Source:** 10-prompt-architecture.md, line 587
- **Check:** Each rule appears ONCE at its canonical location. No restatements.
- **Category:** GATE

#### BC06: All judgment rules in conviction document only
- **Source:** 10-prompt-architecture.md, line 589
- **Check:** Zero judgment rules in Layer 2 (execution spec) or Layer 3 (coordination spec).
- **Category:** GATE

#### BC07: Kill criteria present and explicit
- **Source:** 10-prompt-architecture.md, lines 483-488
- **Check:** 4 kill criteria with abandon triggers present in execution spec.
- **Category:** GATE

### PREREQUISITES

#### P01: All enrichments applied before prompt assembly
- **Source:** 10-prompt-architecture.md, line 1 (implicit -- prompt consumes enriched files)
- **Prerequisite:** All BLOCKING enrichments from other reports must be applied to reference files (mechanism-catalog.md, SKILL.md files, tokens.css, etc.) before the flagship prompt references them.
- **Category:** PREREQUISITE

#### P02: Crown jewel exemplar passages selected
- **Source:** 10-prompt-architecture.md, lines 429-432
- **Prerequisite:** Must select specific 20-line passages from CD-006 and DD-006 for conviction document before Layer 1 can be written.
- **Category:** PREREQUISITE

#### P03: Rule classification validated
- **Source:** 10-prompt-architecture.md, lines 311-401
- **Prerequisite:** The 56-rule classification into KEEP/CONV/COORD/DROP/MERGE must be reviewed and accepted before Layer 2 can be finalized.
- **Category:** PREREQUISITE

### CROSS-REFERENCES

#### X01: Constraint-balance analysis (META-CONSTRAINT-BALANCE.md)
- **Source:** 10-prompt-architecture.md, lines 178, 532
- **Reference:** Recommends ~55-60 items total, inverted-U model. Flagship's 25 rules aligns.

#### X02: Creative-conditions analysis (META-CREATIVE-CONDITIONS.md)
- **Source:** 10-prompt-architecture.md, lines 186, 241
- **Reference:** Compliance and creativity are orthogonal. Layer 1 addresses creativity; Layer 2 addresses compliance.

#### X03: Meta-purpose-alignment (META-PURPOSE-ALIGNMENT.md)
- **Source:** 10-prompt-architecture.md, lines 169, 559
- **Reference:** Conviction passage = "missing ingredient." THE differentiator between Ceiling and Middle.

#### X04: Process retrospective (01-process-retrospective.md)
- **Source:** 10-prompt-architecture.md, lines 133, 406-414
- **Reference:** Source of 3 NEW spatial rules and spatial budget calculations.

#### X05: Prompt validation report (PROMPT-VALIDATION-REPORT.md)
- **Source:** 10-prompt-architecture.md, line 8
- **Reference:** 3 BLOCKING + 5 SIGNIFICANT + 8 MINOR issues. BLOCKING-3 predicted zero messages.

#### X06: Metacognitive analysis (04-metacognitive-analysis.md)
- **Source:** 10-prompt-architecture.md, lines 13, 249
- **Reference:** Preparation ceiling hypothesis (~100-200 lines).

#### X07: Gap analysis (GAP-ANALYSIS.md)
- **Source:** 10-prompt-architecture.md, line 9
- **Reference:** 7 critical gaps identified.

#### X08: Memory file reference
- **Source:** 10-prompt-architecture.md, line 239
- **Reference:** "Highest-leverage change" from memory: separate THINKING from EXECUTION documents.

### FILE MODIFICATIONS

#### FM01: Create new flagship Layer 1 Conviction Document
- **Target:** New file (path TBD, likely in ephemeral/flagship-prompt/ or similar)
- **Content:** 70 lines: thesis, metaphor test, metacognitive checkpoints, exemplar passages from crown jewels.
- **Source:** Lines 420-433

#### FM02: Create new flagship Layer 2 Execution Spec
- **Target:** New file
- **Content:** 100-120 lines: 8 sections covering mission, spatial, soul, compositional, process, self-check, success, kill.
- **Source:** Lines 435-488

#### FM03: Create new flagship Layer 3 Coordination Spec
- **Target:** New file
- **Content:** 60 lines: agent roster, checkpoints, communication obligations.
- **Source:** Lines 490-511

#### FM04: Reference library paths for Layer 4
- **Target:** No new files -- references to existing:
  - `~/.claude/skills/tension-composition/SKILL.md`
  - `~/.claude/skills/perceptual-auditing/SKILL.md`
  - `design-system/compositional-core/grammar/mechanism-catalog.md`
  - `design-system/compositional-core/vocabulary/tokens.css`
  - `design-system/compositional-core/identity/prohibitions.md`
  - `design-system/compositional-core/guidelines/semantic-rules.md`
  - Crown jewels (CD-006, DD-006) -- planner only
- **Source:** Lines 514-521

---

## FILE 2: 11-crown-jewel-forensics.md (Crown Jewel Source Code Forensics)

### ACTION ITEMS

#### A17: Enforce token-referenced sizing throughout flagship
- **Source:** 11-crown-jewel-forensics.md, lines 59, 410, 458
- **Action:** ALL font sizes via `--type-*`, ALL spacing via `--space-*`, ALL colors via `--color-*`. Zero hardcoded values in the component layer. CD-006 pattern is the reference (DD-006 still hardcodes px values).
- **Category:** ENRICHMENT
- **Priority:** BLOCKING (listed as MUST Replicate #1)
- **Target file:** Layer 2 execution spec (token compliance rule)
- **Dependencies:** tokens.css must be up-to-date

#### A18: Require semantic HTML with full ARIA in flagship
- **Source:** 11-crown-jewel-forensics.md, lines 109-117, 412, 464
- **Action:** Require `<section>` with `aria-label`, `<nav>` with `aria-label`, `role="note"` on all callouts, `role="separator"` on all transitions. CD-006 has 13 `role="note"`, 6 `role="separator"`, 8 `aria-label`. DD-006 has essentially none. Flagship must match CD-006 level.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #2)
- **Target file:** Layer 2 execution spec or builder appendix
- **Dependencies:** None

#### A19: Require header-footer bookend pattern
- **Source:** 11-crown-jewel-forensics.md, lines 413-414, 459
- **Action:** Dark header with primary accent border, dark footer mirroring header. Creates structural frame. CD-006 pattern.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #3)
- **Target file:** Layer 2 execution spec (Structure rules)
- **Dependencies:** None

#### A20: Enforce 3-category border system
- **Source:** 11-crown-jewel-forensics.md, lines 416-417
- **Action:** Only 3 border treatments: 4px (structural accent left border), 3px (structural frame border), 1px (data separator/subtle). NEVER 2px.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #4)
- **Target file:** Layer 2 execution spec or builder appendix
- **Dependencies:** None

#### A21: Require soul enforcement selector
- **Source:** 11-crown-jewel-forensics.md, lines 87, 247, 418, 465
- **Action:** Add `*:where(:not(input, button, select)) { border-radius: 0; }` as defensive CSS. The `:where()` selector has ZERO specificity, allowing forms to retain native styling. CD-006 pattern.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #5)
- **Target file:** Layer 2 execution spec (Soul Rules section)
- **Dependencies:** None

#### A22: Require TOC with axis/pattern annotations
- **Source:** 11-crown-jewel-forensics.md, lines 420, 462
- **Action:** Navigation must reveal structural strategy upfront. Flagship must telegraph its structural variety. CD-006 pattern: each TOC entry shows axis pattern name (SPIRAL, Z-PATTERN, BENTO, etc.).
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #6)
- **Target file:** Layer 1 conviction document or builder guidance
- **Dependencies:** None

#### A23: Require transition grammar (3 types)
- **Source:** 11-crown-jewel-forensics.md, lines 422-423, 463
- **Action:** Enforce transition grammar: Smooth (48px + 1px), Bridge (64px + breathing zone + prose), Breathing (80px + 3px). Every transition must EARN its type. CD-006 uses 7 transitions of 3 types.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #7)
- **Target file:** Layer 2 execution spec (Compositional Rules)
- **Dependencies:** None

#### A24: Require bridge transitions with semantic prose
- **Source:** 11-crown-jewel-forensics.md, lines 424-425
- **Action:** Bridge transitions are not empty spacers -- each must contain a sentence reframing the reader's cognitive mode. CD-006 pattern: "Now that you understand the why, let us set up the how."
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #8)
- **Target file:** Layer 1 conviction document or planner guidance
- **Dependencies:** None

#### A25: Require callout 2-zone structure
- **Source:** 11-crown-jewel-forensics.md, lines 426-427
- **Action:** Label zone (uppercase, small, mono/body font, accent color) + Body zone (prose, body font). 4px left border in accent color. Shared by both crown jewels.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Builder appendix or reference library
- **Dependencies:** None

#### A26: Require code blocks with syntax highlighting tokens
- **Source:** 11-crown-jewel-forensics.md, lines 428-429
- **Action:** Named CSS custom properties for syntax colors: `--syntax-keyword`, `--syntax-string`, etc. CD-006 pattern with 6 named tokens.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Builder appendix or tokens.css enrichment
- **Dependencies:** None

#### A27: Require print media query
- **Source:** 11-crown-jewel-forensics.md, lines 430-431
- **Action:** Dark backgrounds convert to white, borders convert to black. CD-006 pattern.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM (listed as MUST Replicate #11)
- **Target file:** Builder appendix
- **Dependencies:** None

#### A28: Require prefers-reduced-motion
- **Source:** 11-crown-jewel-forensics.md, lines 432-433
- **Action:** Global animation/transition suppression. Both crown jewels implement this.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #12)
- **Target file:** Layer 2 execution spec (Soul Rules or builder appendix)
- **Dependencies:** None

#### A29: Use drop caps sparingly for section-opening impact
- **Source:** 11-crown-jewel-forensics.md, lines 434-435
- **Action:** Drop caps used on section-opening prose, sparingly (2 instances in 8 sections for CD-006). For impact at major transitions only.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM (listed as MUST Replicate #13)
- **Target file:** Planner guidance or builder appendix
- **Dependencies:** None

#### A30: Require section meta descriptor
- **Source:** 11-crown-jewel-forensics.md, lines 436-437
- **Action:** Each section must show `Section 0N . Axis . Density` label above section heading. Self-documenting structure. CD-006 pattern.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #14)
- **Target file:** Builder guidance or Layer 2 execution spec
- **Dependencies:** None

#### A31: Require progressive responsive degradation (3 breakpoints)
- **Source:** 11-crown-jewel-forensics.md, lines 438-439
- **Action:** 3 breakpoints (960/768/480) with grid collapse, font reduction, padding reduction, element hiding. CD-006 pattern.
- **Category:** ENRICHMENT
- **Priority:** HIGH (listed as MUST Replicate #15)
- **Target file:** Builder appendix
- **Dependencies:** None

#### A32: Add semantic spacing aliases to tokens
- **Source:** 11-crown-jewel-forensics.md, lines 95-100
- **Action:** Add Gestalt semantic aliases to spacing scale: `--space-within: 8px` (related elements), `--space-between: 32px` (distinct elements), `--space-chapter: 64px` (section breaks). CD-006 improvised these; they should be formalized in tokens.css.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Dependencies:** None

#### A33: Add syntax highlighting tokens to token system
- **Source:** 11-crown-jewel-forensics.md, lines 147-148
- **Action:** Formalize syntax highlighting tokens (`--syntax-keyword`, `--syntax-string`, etc.) in tokens.css. CD-006 improvised a 6-token syntax system.
- **Category:** ENRICHMENT
- **Priority:** LOW
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Dependencies:** None

#### A34: Add named type scale tokens
- **Source:** 11-crown-jewel-forensics.md, lines 149
- **Action:** Formalize `--type-*` scale with named levels (page/section/subsection/body/code/meta). CD-006 improvised these.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** `design-system/compositional-core/vocabulary/tokens.css`
- **Dependencies:** None

#### A35: Extract 20-line CD-006 exemplar (designed transition zone)
- **Source:** 11-crown-jewel-forensics.md, lines 258-261, per prompt architecture A15
- **Action:** Select a specific 20-line passage from CD-006 showing a bridge transition with semantic prose. Candidates: lines 1316, 1452, or 1749 (bridge transition prose locations).
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** None

#### A36: Extract 20-line DD-006 exemplar (fractal coherence at 2 scales)
- **Source:** 11-crown-jewel-forensics.md, lines 238-239, per prompt architecture A15
- **Action:** Select a specific 20-line passage from DD-006 showing fractal coherence. Best candidate: the progressive rgba opacity nesting (lines 299-309) showing nested boxes with deepening tint.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** None

#### A37: Write Crown Jewel Quality Gate (8 binary checks)
- **Source:** 11-crown-jewel-forensics.md, lines 469-483
- **Action:** Create 8-check quality gate for builder:
  1. TOKEN COVERAGE: Zero CSS values hardcoded (all via var())
  2. FRAME: Dark header + dark footer with primary accent
  3. TRANSITIONS: All boundaries Smooth/Bridge/Breathing, bridges have prose
  4. META: Each section shows structural strategy in visible label
  5. VARIETY: 8+ distinct component types, each demanded by content
  6. ARC: Page density follows sparse-dense-sparse, climax in middle not end
  7. ACCESSIBILITY: Every <section> has aria-label, every callout role="note", skip link present
  8. SOUL: *:where(:not(input,button,select)){border-radius:0} present
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Layer 2 execution spec (Builder Self-Check) or separate builder gate
- **Dependencies:** None

### BINARY CHECKS

#### BC08: Token coverage zero hardcoded values
- **Source:** 11-crown-jewel-forensics.md, lines 410, 473
- **Check:** ALL font sizes via `--type-*`, ALL spacing via `--space-*`, ALL colors via `--color-*`. Zero hardcoded values.
- **Category:** GATE

#### BC09: Header-footer bookend present
- **Source:** 11-crown-jewel-forensics.md, lines 413-414, 474
- **Check:** Dark header with primary accent border + dark footer mirroring header.
- **Category:** GATE

#### BC10: 3-category border system only
- **Source:** 11-crown-jewel-forensics.md, lines 416-417
- **Check:** Only 4px, 3px, and 1px borders. NEVER 2px.
- **Category:** GATE

#### BC11: Soul enforcement selector present
- **Source:** 11-crown-jewel-forensics.md, lines 87, 418, 480
- **Check:** `*:where(:not(input,button,select)){border-radius:0}` in CSS.
- **Category:** GATE

#### BC12: Transition grammar enforced
- **Source:** 11-crown-jewel-forensics.md, lines 422-423
- **Check:** All section boundaries use Smooth/Bridge/Breathing. Bridge transitions have prose.
- **Category:** GATE

#### BC13: Component variety >= 8 types
- **Source:** 11-crown-jewel-forensics.md, lines 462, 477
- **Check:** 8+ distinct component types used, each demanded by content.
- **Category:** GATE

#### BC14: ARIA coverage comprehensive
- **Source:** 11-crown-jewel-forensics.md, lines 109-117, 479
- **Check:** Every `<section>` has `aria-label`. Every callout has `role="note"`. Every transition has `role="separator"`. Skip link present. Target: 25+ ARIA attributes.
- **Category:** GATE

#### BC15: prefers-reduced-motion present
- **Source:** 11-crown-jewel-forensics.md, lines 432-433
- **Check:** `@media (prefers-reduced-motion: reduce)` with global animation/transition suppression.
- **Category:** GATE

#### BC16: Print media query present
- **Source:** 11-crown-jewel-forensics.md, lines 430-431
- **Check:** `@media print` with dark-to-white background conversion.
- **Category:** GATE

### PREREQUISITES

#### P04: CD-006 and DD-006 fully analyzed
- **Source:** 11-crown-jewel-forensics.md, entire document
- **Prerequisite:** Both crown jewels forensically analyzed for technique extraction. COMPLETE (this report fulfills it).

#### P05: Flagship target metrics established
- **Source:** 11-crown-jewel-forensics.md, lines 542-561
- **Prerequisite:** Target ranges determined:
  - Total lines: 1,800-2,500
  - CSS lines: 900-1,200
  - HTML lines: 800-1,100
  - CSS classes: 80-120
  - :root tokens: 50-60
  - Component types: 10-14
  - Component instances: 25-40
  - Axis patterns: 3-5
  - Sections: 6-10
  - Transitions: 5-9
  - Callouts: 15-25
  - Code blocks: 4-8
  - ARIA attributes: 25+
  - Media queries: 4-5
  - Hardcoded values: 0-3
  - Score target: 39-40/40

### CROSS-REFERENCES

#### X09: DD-006-fractal.html
- **Source:** 11-crown-jewel-forensics.md, line 6
- **Reference:** `design-system/validated-explorations/density/DD-006-fractal.html` (1,120 lines, 36/40)

#### X10: CD-006-pilot-migration.html
- **Source:** 11-crown-jewel-forensics.md, line 7
- **Reference:** `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (2,085 lines, 39/40)

#### X11: Design system evolution DD-006 -> CD-006
- **Source:** 11-crown-jewel-forensics.md, lines 489-507
- **Reference:** Evolution table showing 2x token vocabulary, systematized referencing, comprehensive ARIA, 3-tier responsive, full component vocabulary, transition grammar, print styles.

#### X12: "Magic" principles (5)
- **Source:** 11-crown-jewel-forensics.md, lines 379-389
- **Reference:** 5 principles: (1) BE THE ARGUMENT, (2) EARN EVERY CHANGE, (3) STRUCTURAL CLOSURE, (4) DENSITY ARC AS DRAMATIC STRUCTURE, (5) RESTRAINT AS POWER.

#### X13: Crown jewel CSS distribution
- **Source:** 11-crown-jewel-forensics.md, lines 522-536
- **Reference:** Component vocabulary + layout variety consume CSS budget, not per-technique complexity.

### FILE MODIFICATIONS

#### FM05: Enrich tokens.css with semantic spacing aliases
- **Target:** `design-system/compositional-core/vocabulary/tokens.css`
- **Content:** Add `--space-within: 8px`, `--space-between: 32px`, `--space-chapter: 64px`
- **Source:** Lines 95-100

#### FM06: Enrich tokens.css with syntax highlighting tokens
- **Target:** `design-system/compositional-core/vocabulary/tokens.css`
- **Content:** Add `--syntax-keyword`, `--syntax-string`, etc. (6 tokens)
- **Source:** Lines 147-148

#### FM07: Enrich tokens.css with named type scale
- **Target:** `design-system/compositional-core/vocabulary/tokens.css`
- **Content:** Add `--type-page`, `--type-section`, `--type-subsection`, `--type-body`, `--type-code`, `--type-meta`
- **Source:** Line 149

#### FM08: Add border-weight semantic system to mechanism catalog or guidelines
- **Target:** `design-system/compositional-core/grammar/mechanism-catalog.md` or `guidelines/semantic-rules.md`
- **Content:** Document 4px/3px/1px border-weight gradient as semantic encoding (4px = Established, 3px = Probable, 1px = Speculative)
- **Source:** Lines 89, 207

#### FM09: Add soul enforcement selector to soul rules
- **Target:** `design-system/compositional-core/identity/prohibitions.md`
- **Content:** Add `*:where(:not(input,button,select)){border-radius:0}` as recommended defensive CSS pattern
- **Source:** Lines 87, 247

#### FM10: Add golden ratio grid to mechanism catalog
- **Target:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Content:** Document `1.618fr 1fr` golden ratio grid as layout mechanism (CD-006 Z-pattern hero)
- **Source:** Line 44

---

## FILE 3: 12-defining-beautiful.md (Defining Beautiful: The Aesthetic Dimension Beyond Richness and Novelty)

### ACTION ITEMS

#### A38: Add 7 Binary Beauty Prerequisites to execution spec
- **Source:** 12-defining-beautiful.md, lines 222-264
- **Action:** Add 7 binary beauty prerequisites as pass/fail gates:
  1. BP-1: No contentless void exceeding 1.5 viewport heights (at 1440px)
  2. BP-2: Page has exactly one visual climax (one section visually distinct)
  3. BP-3: No more than 3 distinct border treatments (width + color + placement combos)
  4. BP-4: First viewport contains both header AND content (at 1440px)
  5. BP-5: Density changes at least 3 times across page scroll
  6. BP-6: Final 10% of page is composed, not abandoned (deliberate footer/closing)
  7. BP-7: Every mechanism serves the reader, not the mechanism catalog (service test)
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Layer 2 execution spec (Spatial Rules or new Beauty Prerequisites section)
- **Dependencies:** None

#### A39: Include the Beauty Brief (<30 lines) in Layer 1 Conviction
- **Source:** 12-defining-beautiful.md, lines 276-303
- **Action:** Include the 30-line beauty brief in the conviction document. Key elements: "The flagship page should feel like opening a well-made book." Describes what happens at each scroll position. Three-word personality: "Warm. Authoritative. Unhurried." Emotional arc: Confidence -> Delight -> Trust -> Focus -> Surprise -> Satisfaction -> Completion.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** A02

#### A40: Include the "Resolved Tensions" framework in conviction document
- **Source:** 12-defining-beautiful.md, lines 306-319
- **Action:** Include the 4 fundamental tensions as a builder self-check framework: Temperature (Cold vs Hot -> Warm), Weight (Heavy vs Weightless -> Confident), Density (Packed vs Barren -> Rhythmic), Decoration (Ornamented vs Bare -> Semantic). Builder tests at 3 checkpoints: after header, after mid-page, after full page.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** A02

#### A41: Add beauty definition to design system vocabulary
- **Source:** 12-defining-beautiful.md, lines 37-47
- **Action:** Define beauty in KortAI context: "the experience of encountering confident intention at every scale of attention." Key components: Encountering (perceived, not constructed), Confident (deliberate, not default), Intention (a mind was present), At every scale (consistent quality of care across zoom levels).
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Layer 1 conviction document or guidelines/semantic-rules.md
- **Dependencies:** None

#### A42: Define the KortAI-specific beauty character
- **Source:** 12-defining-beautiful.md, lines 49-57
- **Action:** Establish the beauty character as resolved tensions: "warm without being soft, austere without being cold, authoritative without being aggressive, restrained without being empty." Ceiling fell off "restrained/not-empty." Middle walked all four at low height.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** None

#### A43: Specify the perceptual sequence for flagship
- **Source:** 12-defining-beautiful.md, lines 63-119
- **Action:** Encode the optimal perceptual sequence: Second 0-1 Arrival (authority + warmth), Second 1-2 Orientation, Second 2-3 First delight, Second 3-5 Spatial confidence assessment. Rhythm: Arrival -> hook -> engagement -> surprise -> deepening -> climax -> release -> closure. Delight moments: first at 15-20%, surprise at 30-40%, climax at 60-70%, denouement at 80-100%.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** A02

#### A44: Guard against "technique-as-demonstration" failure
- **Source:** 12-defining-beautiful.md, lines 203-211
- **Action:** Add explicit guard: for each mechanism, builder must answer "What does the READER gain from this mechanism?" If answer is "it demonstrates the mechanism" rather than "it helps the reader understand/navigate/orient," the mechanism fails the service test. This is BP-7.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 2 execution spec (Builder Self-Check)
- **Dependencies:** None

#### A45: Distinguish between intentional white space and void
- **Source:** 12-defining-beautiful.md, lines 181-182
- **Action:** Add guidance: "White space between two well-composed elements reads as intentional. White space at the bottom of a page, after content trails off, reads as abandonment." The distinction is whether space is BOUNDED.
- **Category:** ENRICHMENT
- **Priority:** MEDIUM
- **Target file:** Layer 1 conviction document or builder guidance
- **Dependencies:** None

#### A46: Define the three-word personality target
- **Source:** 12-defining-beautiful.md, lines 296-303
- **Action:** Establish target personality: "Warm. Authoritative. Unhurried." With definitions: Warm = cream palette, serif headings, generous line height. Authoritative = sharp edges, bold borders, confident spacing. Unhurried = breathing room, composed transitions, deliberate pacing. NOT "Technical, austere, unfinished" (Ceiling). NOT "Professional, competent, neutral" (Middle).
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** Layer 1 conviction document
- **Dependencies:** A02

#### A47: Add 4-tension self-check at 3 checkpoints
- **Source:** 12-defining-beautiful.md, lines 319
- **Action:** Builder self-checks the 4 resolved tensions at 3 points during build: after header built, after mid-page built, after full page built. At each: "Am I warm but not hot? Confident but not heavy? Rhythmic but not packed? Semantic but not ornamented?" If any NO, fix before proceeding.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Layer 2 execution spec (Builder Self-Check)
- **Dependencies:** A40

### BINARY CHECKS

#### BC17: No contentless void > 1.5 viewport heights
- **Source:** 12-defining-beautiful.md, lines 226-228
- **Check:** At 1440px viewport, no stretch of page contains > 1.5 viewport heights of content-free space.
- **Category:** GATE

#### BC18: Exactly one visual climax
- **Source:** 12-defining-beautiful.md, lines 230-232
- **Check:** One CONTENT section (not header) is visually distinct from all others.
- **Category:** GATE

#### BC19: Max 3 distinct border treatments
- **Source:** 12-defining-beautiful.md, lines 234-236
- **Check:** No more than 3 unique (width + color + placement) border combinations.
- **Category:** GATE

#### BC20: First viewport has header AND content
- **Source:** 12-defining-beautiful.md, lines 238-240
- **Check:** At 1440px, first screenful shows header AND beginning of content. Header is doorway, not lobby.
- **Category:** GATE

#### BC21: Density changes >= 3 times
- **Source:** 12-defining-beautiful.md, lines 242-244
- **Check:** At least 3 distinct density transitions visible across scroll (squint test).
- **Category:** GATE

#### BC22: Final 10% composed not abandoned
- **Source:** 12-defining-beautiful.md, lines 246-248
- **Check:** Last 10% of scroll depth contains composed footer or closing section echoing opening authority.
- **Category:** GATE

#### BC23: Every mechanism passes reader service test
- **Source:** 12-defining-beautiful.md, lines 250-252
- **Check:** For each mechanism: "What does the READER gain?" Answer must not be "demonstrates the mechanism."
- **Category:** GATE

### PREREQUISITES

#### P06: Beauty destroyers enumerated
- **Source:** 12-defining-beautiful.md, lines 177-211
- **Prerequisite:** 6 beauty destroyers identified: (1) The Void, (2) Monotony, (3) The Tentative Signal, (4) Proportion Collapse, (5) Dialect Shifts, (6) Decoration Without Information. All 7 beauty prerequisites cover these. COMPLETE (this report fulfills it).

#### P07: Ceiling experiment triggered 4/6 beauty destroyers
- **Source:** 12-defining-beautiful.md, lines 194-200
- **Prerequisite:** Confirmed that Ceiling triggered: Void (9/9), Monotony (partial), Proportion Collapse (yes), Tentative Signal (paradoxically yes). Must ensure flagship prevents all 4.

#### P08: Beauty not decomposable -- requires conviction
- **Source:** 12-defining-beautiful.md, lines 161-174
- **Prerequisite:** Decomposable prerequisites are necessary but not sufficient. The emergent quality ("a mind was present throughout") cannot be specified. This validates the conviction document approach: prerequisites go in execution spec, emergent quality is communicated via conviction doc.

### CROSS-REFERENCES

#### X14: 07-VERDICT.md
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** Ceiling verdict showing 14 mechanisms + 9/9 novelty but DO NOT SHIP.

#### X15: 05-comparison-report.md
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** Comparative analysis showing Middle "spatially confident" vs Ceiling "lost in canvas."

#### X16: 06-novelty-assessment.md
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** Blind novelty scoring.

#### X17: AUDIT-REPORT.md (Mode 4)
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** 9/9 auditors flagging whitespace void.

#### X18: findings-impression-emotion.md
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** Auditor A actual personality "Technical. Austere. Unfinished."

#### X19: 06-adversarial-anti-scale.md
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** Anti-scale thesis: "Richness = semantic density x restraint ratio x spatial confidence."

#### X20: prohibitions.md
- **Source:** 12-defining-beautiful.md, line 5
- **Reference:** 8 absolute prohibitions that clear the ground for beauty.

#### X21: "Magic" principles alignment
- **Source:** 12-defining-beautiful.md, lines 379-389 (in file 11) cross-ref with beauty definition
- **Reference:** File 11's 5 magic principles align with file 12's beauty definition: "BE THE ARGUMENT" = confident intention, "EARN EVERY CHANGE" = every mechanism serves the reader.

### FILE MODIFICATIONS

#### FM11: Add beauty definition to semantic-rules.md
- **Target:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Content:** Definition of beauty as "encountering confident intention at every scale of attention" + 4 resolved tensions + 6 beauty destroyers
- **Source:** Lines 37-47, 306-316, 177-199

#### FM12: Add beauty prerequisites to execution spec
- **Target:** New flagship Layer 2 execution spec
- **Content:** 7 binary beauty prerequisites (BP-1 through BP-7)
- **Source:** Lines 222-264

#### FM13: Add beauty brief to conviction document
- **Target:** New flagship Layer 1 conviction document
- **Content:** 30-line beauty brief + 3-word personality target
- **Source:** Lines 276-303

#### FM14: Add perceptual sequence to conviction document
- **Target:** New flagship Layer 1 conviction document
- **Content:** Delight placement (15-20%), surprise (30-40%), climax (60-70%), denouement (80-100%)
- **Source:** Lines 63-119

#### FM15: Add 4-tension self-check to builder self-check
- **Target:** New flagship Layer 2 execution spec (Builder Self-Check section)
- **Content:** Temperature/Weight/Density/Decoration tension check at 3 build checkpoints
- **Source:** Lines 306-319

---

## SUMMARY STATISTICS

### By Category
| Category | Count |
|----------|-------|
| ENRICHMENT | 28 |
| PROCESS | 9 |
| GATE (Binary Check) | 23 |
| PREREQUISITE | 8 |
| FILE MODIFICATION | 15 |
| CROSS-REFERENCE | 21 |
| **TOTAL ITEMS** | **104** |

### By Priority
| Priority | Count (Action Items only) |
|----------|--------------------------|
| BLOCKING | 10 (A01, A02, A03, A04, A06, A07, A12, A13, A16, A17, A38) |
| HIGH | 21 (A05, A08, A09, A10, A11, A15, A18-A24, A28, A30, A31, A35-A37, A39-A40, A42-A44, A46-A47) |
| MEDIUM | 8 (A25-A27, A29, A32, A34, A41, A45) |
| LOW | 1 (A33) |

### BLOCKING Items (Must Be Done)
1. **A01:** Adopt Two-Layer prompt architecture (~240 lines total)
2. **A02:** Write Layer 1 Conviction Document (70 lines)
3. **A03:** Write Layer 2 Execution Spec (100-120 lines)
4. **A04:** Write Layer 3 Coordination Spec (60 lines)
5. **A06:** Add 3 new spatial accountability rules (content-to-void, no empty elements, designed moments per quartile)
6. **A07:** Convert CAPABILITY to OBLIGATION rules (messaging mandatory)
7. **A12:** Spatial budget gate in build plan (highest-leverage #1)
8. **A13:** Mandatory messaging requirement (highest-leverage #2)
9. **A16:** Write the 25 Critical Execution Rules
10. **A17:** Enforce token-referenced sizing (zero hardcoded values)
11. **A38:** Add 7 Binary Beauty Prerequisites (BP-1 through BP-7)

### Top 3 Highest-Priority Changes (from file 10)
1. Spatial budget gate (prevents the void -- THE dominant failure)
2. Mandatory messaging (prevents the isolation failure -- #2 failure)
3. Prompt compression to ~240 lines (prevents attention dilution -- the meta-failure)

---

*End of extraction. 104 items extracted from 3 files (1,522 lines total). Every action item, enrichment, prerequisite, binary check, file modification, and cross-reference catalogued.*
