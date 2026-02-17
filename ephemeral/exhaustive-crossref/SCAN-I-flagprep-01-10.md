# SCAN I: Flagship Preparation Files 01-10 vs FINAL Prompt

**Author:** Scanner I (Sonnet 4.5, Task #18)
**Date:** 2026-02-17
**Source prompt:** `/ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`
**Files scanned:** flagship-preparation/01 through 10
**Method:** For each file, identified every concrete specification, rule, threshold, formula, verification
method, or operational procedure MISSING from the FINAL prompt.

---

## SUMMARY TABLE

| # | Source File | Gap Description | Severity | Present in FINAL? |
|---|-------------|-----------------|----------|-------------------|
| G01 | 01-pa-lessons | Builder's 10-Question Per-Section Self-Check (B-01..B-10) | CRITICAL | NO |
| G02 | 01-pa-lessons | 3 Embedded Build Checkpoints (Content Audit / Skeleton / Scroll-Exp) | CRITICAL | PARTIAL |
| G03 | 01-pa-lessons | Root Cause Classification Protocol (CONTENT/SPACING/STRUCTURAL/EXECUTION/METAPHOR) | CRITICAL | NO |
| G04 | 01-pa-lessons | PA-05c 3-dimensional expansion (horizontal/vertical/breathing proportion) | IMPORTANT | NO |
| G05 | 01-pa-lessons | Scroll-through protocol as MANDATORY (viewport-scale, never full-page-only) | IMPORTANT | PARTIAL |
| G06 | 01-pa-lessons | Lock sheet temporal firewall (cold looks FIRST, classification SECOND) | IMPORTANT | NO |
| G07 | 02-enrichment | Zone minimum content rule (3+ paragraphs OR 2+ components per zone) | CRITICAL | NO |
| G08 | 02-enrichment | Zone count ceiling by word count (<1500w=2, 1500-3000w=3, etc.) - exact table | CRITICAL | PARTIAL |
| G09 | 02-enrichment | Transition grammar selection question ("same domain?") + exactly-one-type rule | CRITICAL | PARTIAL |
| G10 | 02-enrichment | Content-form minimum table (bento needs 4+ items, progressive disclosure 3+ phases, etc.) | CRITICAL | NO |
| G11 | 02-enrichment | Breathing zone exception documentation format (3-condition rule) | IMPORTANT | NO |
| G12 | 02-enrichment | "Zones exist to SERVE content, not to DEMONSTRATE architecture" as binary gate | IMPORTANT | PARTIAL |
| G13 | 03-spatial-gate | SC-03: Content distribution >= 70% with programmatic JS implementation | CRITICAL | PARTIAL |
| G14 | 03-spatial-gate | SC-04: Squint test -- 3+ distinct regions at 25% zoom, no empty quadrant | IMPORTANT | NO |
| G15 | 03-spatial-gate | Pre-build void budget calculation formula (PROJECTED PAGE HEIGHT formula) | CRITICAL | NO |
| G16 | 03-spatial-gate | Decision matrix: FIX vs ABORT per-check per-cycle (after FC1 vs FC2) | IMPORTANT | NO |
| G17 | 03-spatial-gate | SC-01 width range is 940-960px NOT 940-1100px (narrower spec in gate doc) | CRITICAL | CONFLICT |
| G18 | 03-spatial-gate | SC-07: Footer gap <= 1 viewport (900px) specifically | IMPORTANT | PARTIAL |
| G19 | 03-spatial-gate | Gate passes in PARALLEL (Gate 2 spatial + Gate 3 landmarks run simultaneously) | IMPORTANT | NO |
| G20 | 03-spatial-gate | Full programmatic JS gate runner (runSpatialConfidenceGate function) | NICE | NO |
| G21 | 04-restraint | Per-mechanism scale max = 3 of 5 scales (Navigation/Page/Section/Component/Character) | CRITICAL | NO |
| G22 | 04-restraint | At least 2 of 18 catalog mechanisms MUST be entirely unused | IMPORTANT | NO |
| G23 | 04-restraint | Silence zone placement rules (after density, before drama, NOT first/last 300px) | CRITICAL | PARTIAL |
| G24 | 04-restraint | Silence zone: AFTER high-density section MUST be followed by silence zone or <= 1-mech section | IMPORTANT | NO |
| G25 | 04-restraint | Signal-to-silence counting formula (silence zones count 2x; ratio 0.6-0.8:1) | CRITICAL | PARTIAL |
| G26 | 04-restraint | Restraint Map TEMPLATE with all sections (deployed/unused/rejected/silence) | IMPORTANT | NO |
| G27 | 04-restraint | Rejection log: Planner documents >= 15 in elaboration plan; Builder adds >= 6 more | IMPORTANT | NO |
| G28 | 05-content-first | CONTENT INVENTORY TEMPLATE (full 8-section template) | CRITICAL | PARTIAL |
| G29 | 05-content-first | Density-to-pattern selection table (early peak / middle peak / late peak / uniform) | IMPORTANT | NO |
| G30 | 05-content-first | Content-to-pattern selection rules (>70% prose / >50% code / mixed / heavy diagrams) | IMPORTANT | NO |
| G31 | 05-content-first | Height estimation approximations (30.6px prose/line, 21px code/line, 40px table row, etc.) | IMPORTANT | PARTIAL |
| G32 | 06-comms | Checkpoint A exact format: CLARIFICATION-REQUEST with 3 mandatory items | CRITICAL | PARTIAL |
| G33 | 06-comms | Checkpoint B exact format: ANOMALY-FLAG with 4 mandatory items | CRITICAL | PARTIAL |
| G34 | 06-comms | Checkpoint C exact format: QUALITY-GATE with 7 SC results | CRITICAL | PARTIAL |
| G35 | 06-comms | Checkpoint D exact format: ANOMALY-FLAG with 3 mandatory items (mechanism deployment/rejection/spatial impact) | IMPORTANT | NO |
| G36 | 06-comms | Team-lead enforcement: MUST NOT release Pass 2 until Checkpoint A logged | CRITICAL | NO |
| G37 | 06-comms | Team-lead enforcement: MUST NOT spawn Pass 2 until Checkpoint C reports PASS | CRITICAL | NO |
| G38 | 07-kill | KB-01: Content section count >= 4 with >= 200 words each (PRE-BUILD abort) | CRITICAL | PARTIAL |
| G39 | 07-kill | KB-02: Metaphor-zone compatibility ratio >= 1.5 (C/M >= 1.5) | CRITICAL | NO |
| G40 | 07-kill | KB-03: Predicted void budget <= 30% (calculation formula provided) | CRITICAL | PARTIAL |
| G41 | 07-kill | KB-05: Metaphor soul compatibility assessment (channel-by-channel conflict check) | IMPORTANT | NO |
| G42 | 08-metacog | Check 1.2: Zone necessity test table format (3-question per zone, "Three NOs = MERGE") | CRITICAL | NO |
| G43 | 08-metacog | Check 1.4: Anti-ambition audit by DIFFERENT agent (simplest version + spatial cost per addition) | IMPORTANT | NO |
| G44 | 08-metacog | Check 1.5: Metaphor distance test (vocabulary overlap <= 3/10) | IMPORTANT | NO |
| G45 | 08-metacog | Check 2.1: Fresh-eyes proportion check (3 questions, externalized, separate agent) | IMPORTANT | NO |
| G46 | 08-metacog | Fail = NEVER retry unless root cause classified (content vs CSS vs structural) | CRITICAL | NO |
| G47 | 09-premortem | SC-08 (proposed): Content Weight Check -- >= 3 visual elements per section, >= 2 types | CRITICAL | NO |
| G48 | 09-premortem | Spatial re-check after Pass 2 must be PROGRAMMATIC (SC-02 + SC-03 re-run), not squint | CRITICAL | PARTIAL |
| G49 | 09-premortem | "Announced not structural" metaphor ceiling = 55-65% under soul constraints (accept, don't target 80%+) | IMPORTANT | NO |
| G50 | 09-premortem | Time kill threshold: 300 min NOT 240 min for multi-pass architecture | NICE | CONFLICT |
| G51 | 09-premortem | Failure Mode 10 (seam visibility): Single content voice standard across all passes | IMPORTANT | NO |
| G52 | 10-prompt-arch | Builder's effective prompt should be <= 75 lines (confirmed by compliance analysis) | IMPORTANT | PRESENT |
| G53 | 10-prompt-arch | Container width verification METHOD in prompt: `getBoundingClientRect()` on `.page-container` | IMPORTANT | PRESENT (S-01) |
| G54 | 10-prompt-arch | Delete: coordination choreography, anti-spam table, mechanism guidance detail already in Section 4.4 | NICE | N/A |

---

## DETAILED FINDINGS

### FILE 01: pa-lessons-for-build.md

#### G01 -- Builder's 10-Question Per-Section Self-Check [CRITICAL]

**What the file specifies:** A 10-question self-check (B-01 through B-10) run after EACH MAJOR SECTION is built (not just at the end). Questions cover: void (B-01), transition design (B-02), container width at 1440px (B-03), readability (B-04), visual variety (B-05), token compliance (B-06), metaphor presence (B-07), spacing consistency (B-08), container 940-960px (B-09), weight distribution (B-10). B-01, B-03, B-09, B-10 failure = STOP and fix.

**What the FINAL prompt has:** Section B10 (Builder Self-Check) is a FINAL self-check before writing the file, not a per-section incremental check. The FINAL prompt does not mention checking after each section -- only at the end.

**Why this matters:** The ceiling experiment's void was not visible until the page was complete. Per-section checking catches void WHILE it is still fixable.

**Insertable text:**
```
BUILDER SECTION CHECK (after each major section -- runs in ~60 seconds):
[ ] B-01: Section container has visible content; no significant empty space below last element
[ ] B-02: Transition from previous section is designed moment, not just a gap
[ ] B-03: Screenshot at 1440px -- content uses container width, not narrow strip in emptiness
[ ] B-04: All text readable without squinting (size and contrast)
[ ] B-05: Section has >= 1 element visually different from previous section
[ ] B-06: All values use var() tokens
[ ] B-07: Metaphor recognizable in this section without labels
[ ] B-08: Spacing consistent with previous section, no dramatic outliers
[ ] B-09: Container 940-960px (getBoundingClientRect)
[ ] B-10: Visual interest remains distributed (not all weight concentrated at page top)
B-01/B-03/B-09/B-10 FAIL = STOP, fix before continuing. Others FAIL = note, fix before declaring done.
```

**Placement:** Append to Section B10, labelled "SECTION-LEVEL CHECK (run after each section)"

---

#### G02 -- Three Embedded Build Checkpoints [CRITICAL]

**What the file specifies:** Three explicit checkpoints embedded in the build process:
1. **CONTENT AUDIT** (before CSS): binary rule: each zone must have >= 3 distinct content elements (heading + paragraph + one of: table/diagram/code block/callout).
2. **SPATIAL SKELETON CHECK** (after layout, before polish): void budget: content fills >= 60% of total scroll; no more than 2 consecutive viewport-height screens content-free.
3. **SCROLL EXPERIENCE CHECK** (after styling, before declaring done): at least ONE designed visual moment in each third of the scroll.

**What the FINAL prompt has:** Gate 0 (pre-build) and Gate 1 (post-Pass-1) exist. The Zone minimum content (A3 from enrichment specs) is partially covered by S-15. But the CONTENT AUDIT as a named checkpoint with "3 distinct elements per zone" binary rule is missing.

**Missing piece -- insertable text:**
```
CONTENT AUDIT -- REQUIRED BEFORE CSS (after content assembly):
[ ] Each zone has >= 3 distinct content elements (heading + paragraph + one of: table/diagram/code/callout)
[ ] No zone is a structural container with fewer than 3 content elements
[ ] Content distribution is not exclusively front-loaded (do all zones have content?)
FAIL = restructure before proceeding. CSS cannot fix empty zones.
```

**Placement:** Add to Gate 0 in C3 after the current three checks.

---

#### G03 -- Root Cause Classification Protocol [CRITICAL]

**What the file specifies:** When a finding is identified, the synthesizer classifies root cause:
- **CONTENT**: Not enough content to fill structural containers -- Fix: add content or remove containers. CSS useless.
- **SPACING**: Too much/too little CSS spacing -- Fix: adjust padding/margin values.
- **STRUCTURAL**: Wrong page architecture -- Fix: restructure information architecture.
- **EXECUTION**: Correct design, poor CSS -- Fix: fix CSS to match design intent.
- **METAPHOR**: Metaphor creating perceptual cost exceeding benefit -- Fix: modify metaphor or choose different one.

**What the FINAL prompt has:** B12 (Recovery Protocols) covers 4 recovery patterns but does NOT include this root cause classification step. The protocols jump to action without classifying cause.

**Why this matters:** The ceiling experiment applied CSS fixes to a CONTENT problem (misclassification). The classification prevents applying wrong-level fixes.

**Insertable text:**
```
ROOT CAUSE CLASSIFICATION (required before any fix action):
Before fixing any PA finding: classify root cause as one of:
  CONTENT: zones lack content to fill containers -- fix: add content or remove zones. CSS cannot fix this.
  SPACING: CSS values too large/small -- fix: adjust padding/margin.
  STRUCTURAL: wrong page architecture -- fix: restructure zones or information architecture.
  EXECUTION: correct design, poor CSS implementation -- fix: correct CSS.
  METAPHOR: metaphor perceptual cost > benefit -- fix: modify or replace metaphor.
Ceiling experiment void misclassified as SPACING (fix: reduce padding) when actually CONTENT.
Wrong classification = fix fails. Classify first, act second.
```

**Placement:** Insert at start of B12 (Recovery Protocols), before RP-01.

---

#### G04 -- PA-05c Three-Dimensional Expansion [IMPORTANT]

**What the file specifies:** PA-05c PROPORTIONATE should explicitly check THREE dimensions:
1. **Horizontal proportion**: content uses container width effectively?
2. **Vertical proportion**: visual weight distributed across scroll, not concentrated?
3. **Breathing proportion**: negative space designed (intentional pauses) or abandoned (content ran out)?

All three must pass for PA-05c to pass. The initial audit attributed PA-05c failure to header weight alone, missing the vertical void.

**What the FINAL prompt has:** PA-05c PROPORTIONATE is referenced in C5 and B9 routing but not expanded with this three-dimensional definition.

**Insertable text:**
```
PA-05c PROPORTIONATE -- three dimensions, ALL must pass:
  - Horizontal: content uses container width effectively (not narrow strip in wide viewport)
  - Vertical: visual weight distributed across full scroll (not concentrated in top 30%)
  - Breathing: negative space is designed (intentional pauses) not abandoned (content ran out)
  Attribution error prevention: PA-05c failure attributed to "header too heavy" may mask vertical void.
  Check all three before assigning cause.
```

**Placement:** Add to C5 gate questions under PA-05 composite < 3/4.

---

#### G05 -- Scroll-Through Protocol as Mandatory [IMPORTANT]

**What the file specifies:** "NEVER assess spatial composition from full-page screenshots alone. Always use viewport-scale scroll-through." Full-page screenshots compress voids to invisibility. At thumbnail scale, a 22,000px page looks fine -- void is a light band. At viewport scale, void becomes 24 consecutive blank screens.

**What the FINAL prompt has:** C4 specifies 4 viewports and 50-80 screenshots. But it does not explicitly prohibit using ONLY full-page screenshots or mandate scroll-through as the primary method.

**Insertable text:**
```
SCROLL ASSESSMENT MANDATE: Full-page screenshots compress void to invisibility.
NEVER assess spatial composition from full-page screenshots alone.
Screenshot-at-viewport-increments is mandatory: capture every 10-15% of scroll depth as separate file.
Auditors examine EACH viewport frame individually. One "blank screen" frame = signal; do not dismiss.
```

**Placement:** Add to C4 PA Deployment, Screenshot pre-capture section.

---

#### G06 -- Lock Sheet Temporal Firewall [IMPORTANT]

**What the file specifies:** The lock sheet (sovereignty classification: always-locked/locked/challengeable) must be provided AFTER cold looks are locked. Cold looks and PA answers FIRST, lock sheet classification SECOND. This prevents "I know this is locked, so I won't flag it" rationalization.

**What the FINAL prompt has:** C4 specifies cold look protocol but does not mention the temporal ordering of the lock sheet.

**Insertable text:**
```
TEMPORAL FIREWALL -- PA auditor sequence:
1. Cold look (5-sec screenshot gut reaction) -- ZERO context
2. PA question answers -- still ZERO build context
3. Lock sheet classification (soul decisions are non-negotiable; builder choices are challengeable)
Lock sheet provided ONLY after PA answers are locked. Receiving lock sheet before PA corrupts the audit.
```

**Placement:** Add to C4 COLD LOOK PROTOCOL section.

---

### FILE 02: enrichment-specifications.md

#### G07 -- Zone Minimum Content Rule [CRITICAL]

**What the file specifies:** Before assigning zone treatment (own background, distinct spacing):
- Dedicated zone: 3+ paragraphs OR 2+ components (callouts, tables, code blocks) OR 1 diagram with text
- Breathing zone: 1-3 sentences of transition text ONLY
- Bedrock zone: 1 featured element + context paragraph

**What the FINAL prompt has:** S-15 (Zone count ceiling by word count) and P-05 (Zone boundary ALL THREE conditions) are present. But the PER-ZONE minimum content count before assigning zone treatment is missing.

**Why this matters:** The ceiling experiment created zones with structural containers but minimal content.

**Insertable text:**
```
ZONE CONTENT MINIMUM (before assigning zone treatment):
  Dedicated zone (own background): >= 3 paragraphs OR >= 2 components (tables/callouts/code)
  Breathing zone (transition): 1-3 sentences ONLY -- no components
  Bedrock zone (dark bg): 1 featured element + context paragraph
  BELOW MINIMUM: MERGE zone into adjacent OR add content to meet minimum.
  "Zones exist to SERVE content, not to DEMONSTRATE architecture." -- binary gate, not guideline.
```

**Placement:** Add after S-15 in B1 SPATIAL section, or add to Gate 0 in C3.

---

#### G08 -- Zone Count Ceiling Exact Table [CRITICAL]

**What the file specifies:** The EXACT table:
- <1500 words: max 2 zones
- 1500-3000 words: max 3 zones
- 3000-5000 words: max 4 zones
- 5000+ words: max 5 zones

**What the FINAL prompt has:** S-15 states "Zone count ceiling by word count: <1500w=2 zones, 1500-3000w=3, 3000-5000w=4, 5000+=5" -- this IS present. MARK AS PRESENT.

**STATUS:** PRESENT in S-15. No gap.

---

#### G09 -- Transition Grammar Selection Question [CRITICAL]

**What the file specifies:** For every adjacent section pair, answer: "Is content on either side from the SAME domain?"
- NO (different domains) -> Type 1: HARD CUT (3px border, no extra spacing)
- YES, different intensity -> Type 2: SPACING SHIFT (density change IS the transition)
- YES, different phase -> Type 3: CHECKPOINT (structural landmark with visible content)

Rule: "No transition (just empty space) is NOT a valid option."

**What the FINAL prompt has:** C-05 requires >= 3 transition types (SMOOTH/BRIDGE/BREATHING), C-06 prohibits identical adjacent. C-07 requires cognitive-reframe prose on bridge transitions. But the SELECTION RULE (which type to use based on content relationship) is missing. Builders know they need 3 types but not HOW to select which type for which boundary.

**Insertable text:**
```
TRANSITION SELECTION RULE (for each adjacent section pair):
Q: "Is content on both sides from the SAME domain?"
  NO (different domains) -> HARD CUT: 3px primary border, minimal spacing, no background change
  YES, different intensity -> SPACING SHIFT: density change is the transition (no structural element needed)
  YES, different phase -> CHECKPOINT: structural landmark with visible text content
RULE: Empty space alone is NOT a valid transition. Every boundary gets exactly one type.
Compliance: list all boundaries; each must have assigned type. Any without type = FAIL.
```

**Placement:** Add to C-05 rule or create C-05.5 after C-05.

---

#### G10 -- Content-Form Minimum Table [CRITICAL]

**What the file specifies:** Before assigning any form treatment, verify:
| Form Decision | Minimum Content Required | If Below Minimum |
|---|---|---|
| Own zone (dedicated background) | 3+ paragraphs OR 2+ components | Merge into adjacent zone |
| Bento grid (#15) | 4+ items comparable visual weight | Use list or table instead |
| Progressive disclosure (#12) | 3+ distinct phases unique content | Use section headings instead |
| Drop cap (#16) | 1 paragraph of 3+ sentences after | Do not use on short paragraphs |
| Full bedrock section | 1 featured element + context paragraph | Use inline emphasis instead |

**What the FINAL prompt has:** No content-form minimum table. C-10 requires >= 2 purpose-built components but doesn't specify minimums for each form type.

**Why this matters:** "Form follows content volume. Never the reverse." -- prevents over-engineering sparse content.

**Insertable text:**
```
CONTENT-FORM MINIMUM TABLE (binary gate before assigning form treatment):
  Own zone (dedicated background): >= 3 paragraphs OR >= 2 components
  Bento grid: >= 4 items comparable visual weight. Below: use list/table.
  Progressive disclosure: >= 3 distinct phases with unique content. Below: use headings.
  Drop cap: paragraph must have >= 3 sentences following it. Below: do not use.
  Full bedrock (dark bg section): 1 featured element + context paragraph. Below: use inline accent.
"Is this the SIMPLEST form that serves this content?" -- if a list works, do not use bento grid.
```

**Placement:** Add to B7 PROCESS section as P-09, or add to Gate 0 checklist.

---

#### G11 -- Breathing Zone Exception Documentation Format [IMPORTANT]

**What the file specifies:** When using a breathing zone near 30% threshold, document: "Breathing zone at [scroll position] contains [content description]. Adjacent sections at [positions] contain [content percentages]." Exception requires: (1) breathing zone has visible text content, (2) between two content-bearing sections, (3) no other breathing zone within 2 scroll positions.

**What the FINAL prompt has:** S-12 and S-14 cover the void thresholds. The exception documentation format for breathing zones is absent.

**Insertable text:**
```
BREATHING ZONE EXCEPTION (single zone only, must document):
Exception requires ALL THREE: (1) zone has visible text content (not just background),
(2) located between two content-bearing sections, (3) no other breathing zone within 2 scroll positions.
Documentation format: "Breathing zone at [scroll %] contains [content]. Adjacent sections at [%] = [coverage]."
Two consecutive breathing zones = void pattern = FAIL (exception is singular, not repeatable).
```

**Placement:** Add to S-12 or as sub-rule of S-14.

---

### FILE 03: spatial-confidence-gate.md

#### G13 -- SC-03 Content Distribution >= 70% [CRITICAL]

**What the file specifies:** At least 70% of the page's total scroll height must contain visible content. The post-build gate uses 70%; the pre-build estimate uses 60% (margin for estimation error). The distinction is significant: the final gate is 70%, not 60%.

**What the FINAL prompt has:** S-02 says "Content-to-void ratio < 60:40" as a FAIL criterion. Section C3 Gate 1 references S-02. The Appendix parameter table says "Graduated: 60% pre-build, 50% skeleton, 70% post-mechanism." So 70% IS mentioned for post-mechanism.

**STATUS:** PRESENT (70% post-mechanism in Appendix). But S-02 as stated (60%) appears to be the skeleton gate, not the final gate. The graduated thresholds (60%/50%/70%) are in the Appendix but the three-stage graduation is not clearly marked in the execution rules. Consider adding clarification.

**Insertable gap:**
```
S-02 CLARIFICATION: Content-to-void ratio is graduated by stage:
  Pre-build estimate: >= 60% content (planner calculates from build plan)
  Post-Pass-1 skeleton: >= 50% content (temporary -- elaboration will add content weight)
  Post-Pass-2 mechanism: >= 70% content (FINAL threshold -- below this = BLOCKING)
All three are FAIL-IF binary at their respective stages.
```

**Placement:** Clarify in S-02 rule text.

---

#### G14 -- SC-04 Squint Test Specification [IMPORTANT]

**What the file specifies:** Team-lead takes full-page screenshot, views at 25% zoom. Count distinct content regions. PASS = 3+ distinct regions AND no empty quadrant. FAIL = < 3 regions OR any empty quadrant. This is the one judgment check among 6 programmatic ones.

**What the FINAL prompt has:** S-14 "Content-to-void graduated" and S-12 (B1 detection) exist. No explicit squint test with 25% zoom and 3-region threshold.

**Insertable text:**
```
SC-04 SQUINT TEST (team-lead manual, runs parallel to programmatic checks):
1. Take full-page screenshot at 1440px viewport
2. View at 25% zoom (or 4:1 scale reduction)
3. Count distinct content regions (dark/textured areas vs light/empty)
4. Check: no quadrant (top-left/top-right/bottom-left/bottom-right) entirely empty
PASS: >= 3 distinct regions AND no empty quadrant
FAIL: < 3 regions OR any empty quadrant -> ABORT or fix cycle
Note: at 25% zoom, 2 paragraphs look identical to 10 paragraphs -- SC-04 catches mass distribution, not content density.
```

**Placement:** Add to Gate 1 in C3, or add to B1 SPATIAL after S-14.

---

#### G15 -- Pre-Build Void Budget Formula [CRITICAL]

**What the file specifies:** A complete formula for PROJECTED PAGE HEIGHT before building:

```
PROJECTED PAGE HEIGHT =
    header_height
  + SUM(zone_padding_top[i] + zone_padding_bottom[i] for each zone)
  + SUM(transition_gap[j] for each transition)
  + SUM(heading_margin_top[k] for each heading)
  + SUM(paragraph_spacing * paragraph_count)
  + [content elements: code blocks, tables, lists, callouts, designed moments]
  + footer_height
```

Simplified: prose at 30.6px/line (18px * 1.7), code at 22.3px/line, table rows 40px, list items 30px, headings 55px avg, callouts 120px.

**What the FINAL prompt has:** Gate 0 exists but only says "Content-to-void >= 60:40." No formula for HOW to compute the projected ratio before building.

**Why this matters:** Without the formula, Gate 0 is a judgment call. With it, it's binary and computable. The ceiling experiment's void was predetermined at plan level but nobody calculated it.

**Insertable text:**
```
GATE 0 CALCULATION -- Planner computes before builder starts:
Content height estimate: (word_count/12) * 30.6px (prose) + code_lines * 22.3px + table_rows * 40px + lists_items * 30px + heading_count * 55px + callout_count * 120px
Structural overhead: zone_count * avg_zone_padding * 2 + transition_count * avg_transition_gap + checkpoint_count * 80px + header_height + footer_height + paragraph_count * paragraph_margin
Ratio = content / (content + overhead). If < 0.60: REVISE PLAN before building.
This arithmetic must be WRITTEN in the build plan. No table = no build.
```

**Placement:** Add to Gate 0 in C3, or to P-01 in B7.

---

#### G16 -- Decision Matrix FIX vs ABORT Per-Check Per-Cycle [IMPORTANT]

**What the file specifies:** After Fix Cycle 1: SC-01 FIX; SC-02 FIX if maxVoid < 3000px, ESCALATE if >= 3000px; SC-03 FIX if >= 55%, ESCALATE if < 55%; SC-05 FIX (header padding); SC-06 FIX; SC-07 FIX. After Fix Cycle 2: SC-01 ABORT; SC-02 ABORT; SC-03 ABORT; SC-04 ABORT; SC-05 FIX IN PLACE; SC-06 ABORT; SC-07 FIX IN PLACE.

**What the FINAL prompt has:** B12 RP-02 says "Two consecutive gates fail: ABORT." Gate 1 says "max 2 fix cycles, fail after 2 = ABORT." No per-check, per-cycle granularity.

**Insertable text:**
```
GATE 1 FIX CYCLE DECISION MATRIX:
After Cycle 1: Container=FIX | Void>3000px=ESCALATE | Content<55%=ESCALATE | Header=FIX | Sections=FIX | Footer=FIX
After Cycle 2: Container=ABORT(structural) | Void=ABORT | Content<55%=ABORT | Header=FIX-IN-PLACE | Sections=ABORT | Footer=FIX-IN-PLACE
FIX-IN-PLACE = allow one targeted fix even after 2 cycles (trivially fixable checks only).
ESCALATE = team-lead diagnoses CSS-fixable vs metaphor-structural BEFORE authorizing Cycle 2.
```

**Placement:** Add to Gate 1 in C3, after "Max 2 fix cycles. Fail after 2 = ABORT."

---

#### G17 -- SC-01 Width Range Conflict [CRITICAL]

**What the file specifies:** The Spatial Confidence Gate document specifies SC-01 as 940-960px (range of 20px). The Appendix states "960px default, 1100px proven upper bound from CD-006."

**What the FINAL prompt has:** S-01 says "Container width outside 940-1100px" as the FAIL criterion. Appendix says "940-1100px (960px default, 1100px proven upper bound)."

**CONFLICT:** The gate document says 940-960px (narrow). The FINAL prompt says 940-1100px (wide). These are DIFFERENT specifications.

**Resolution needed:** Determine which is authoritative. The gate document cites evidence that 960px is the design system standard and 940-960 allows sub-pixel rendering variance. The 1100px bound comes from CD-006 forensics. Recommendation: Use 940-1100px as the PASS range for FLAGSHIPS (since CD-006 at 1100px scored 39/40), but note 960px as the default target. Adjust S-01 to clarify.

**Insertable clarification:**
```
S-01 WIDTH CLARIFICATION: 940-1100px is the PASS range.
  Target: 960px (design system standard).
  Acceptable: up to 1100px (CD-006 used ~1100px and scored 39/40).
  Below 940px: horizontal void issue -- FAIL.
  Above 1100px: vessel exceeds content capacity -- FAIL.
  Measure with: querySelector('.page-container').getBoundingClientRect().width at 1440px viewport.
  NEVER measure from viewport -- this produces false readings (ceiling experiment measured 2160px).
```

---

#### G18 -- SC-07 Footer Gap Exact Threshold [IMPORTANT]

**What the file specifies:** Footer gap <= 1 viewport height (typically 900px at 1440x900). Footer must exist. Gap measured: distance from last content element's bottom to footer's top.

**What the FINAL prompt has:** S-04 says "Footer: MUST exist with visible content. Gap <= 1 viewport height from last content." This IS present.

**STATUS:** PRESENT. No gap.

---

#### G19 -- Gates Run in Parallel [IMPORTANT]

**What the file specifies:** Gates 2 (Spatial Confidence) and 3 (Landmark Completeness) run IN PARALLEL after Pass 1 completion. Gate 3 checks structural completeness (pieces present?); Gate 2 checks spatial quality (pieces well-proportioned?). Both must pass before Pass 2.

**What the FINAL prompt has:** C3 lists Gate 1 then Gate 2 (Landmarks) sequentially. The parallel execution is not specified.

**Insertable text:**
```
NOTE: Gate 1 (Spatial) and Gate 2 (Landmarks) run IN PARALLEL after Pass 1.
Spatial-auditor runs programmatic checks (SC-01 through SC-07) while team-lead simultaneously verifies landmarks.
Both must pass before Pass 2. Sequential execution is inefficient and adds 10-15 minutes unnecessarily.
```

**Placement:** Add to Gate 1 entry in C3.

---

### FILE 04: restraint-protocol.md

#### G21 -- Per-Mechanism Scale Maximum = 3 of 5 Scales [CRITICAL]

**What the file specifies:** Maximum deployment per mechanism: 3 scales (of 5: Navigation/Page/Section/Component/Character/Detail). A mechanism at 4+ scales = PROHIBITED (reduce to 3). At 5 scales = PROHIBITED. A mechanism at multiple scales counts as 1 mechanism, not multiple.

**What the FINAL prompt has:** C-02 specifies mechanism count (12-14 target, 16 hard cap). SC-07 (Scale Coherence Index) mentions same principle at 3+ scales. But there is NO rule prohibiting any single mechanism from operating at 4+ scales.

**Insertable text:**
```
C-02.5 (Scale Rule): No single mechanism may operate at 4+ scales.
Maximum per-mechanism scale coverage: 3 of 5 (Navigation/Page/Section/Component/Detail).
A mechanism at multiple scales counts as 1 deployed mechanism (not multiple).
Violation: mechanism at Page + Section + Component + Detail (4 scales) = reduce to 3.
Rationale: ceiling experiment saturated every zoom level; 14 mechanisms at all scales = 0 perceivable.
```

**Placement:** Add after C-02 in B3 COMPOSITIONAL section.

---

#### G22 -- At Least 2 of 18 Mechanisms Must Be Entirely Unused [IMPORTANT]

**What the file specifies:** At least 2 of the 18 catalog mechanisms MUST remain entirely unused (zero CSS, zero HTML). Unused = not deployed at any scale, in any section, for any purpose. Choose based on content fit, not arbitrary exclusion.

**What the FINAL prompt has:** C-12 (Rejection log >= 21 rejections) covers rejected PLACEMENTS. But "mechanisms entirely unused" is different from rejected placements. No rule currently mandates that any mechanism be completely excluded.

**Insertable text:**
```
C-02.6 (Unused Minimum): >= 2 of 18 catalog mechanisms must be entirely unused.
"Unused" = zero CSS defined, zero HTML elements using it.
Selection criteria: (1) content lacks structural property this mechanism requires, OR
(2) this mechanism duplicates semantic channel of already-deployed mechanism, OR
(3) this mechanism's perceptual effectiveness does not justify deployment.
Document in Restraint Map: "UNUSED: #[N] [Name]. REASON: [one sentence]"
Gate 4 check: count mechanisms with zero CSS presence. If < 2: remove a mechanism.
```

**Placement:** Add after C-02.5 in B3, or after C-12.

---

#### G23 -- Silence Zone Placement Rules [CRITICAL]

**What the file specifies:** Three placement rules:
1. AFTER high-density sections: section with 3+ mechanisms MUST be followed by silence zone OR section with <= 1 mechanism.
2. BEFORE the page's strongest designed moment: the single most impactful element MUST be preceded by >= 200px of silence.
3. NOT at page start or end: first and last 300px are NOT silence zones.

**What the FINAL prompt has:** C-13 specifies >= 2 designed silence zones, 200px+ height, base typography only. But no placement rules.

**Insertable text:**
```
C-13.5 (Silence Zone Placement Rules -- all three mandatory):
Rule 1: Any section with 3+ active mechanisms MUST be followed by a silence zone OR a section with <= 1 mechanism.
Rule 2: The page's single strongest designed moment MUST be preceded by >= 200px of silence.
Rule 3: Silence zones are NOT placed in first or last 300px of the page (those are structural bookends).
Placement violation = re-position silence zone before proceeding to Gate 4.
```

**Placement:** Add after C-13 in B3.

---

#### G24 -- Silence After Density Rule [IMPORTANT]

**What the file specifies:** "A section containing 3+ mechanisms MUST be followed by a silence zone OR a section with at most 1 mechanism." The rationale: density-then-silence creates drama. Density-then-density creates fatigue.

**What the FINAL prompt has:** PRESENT in G23 above if G23 is implemented. Without G23, this is also missing.

**STATUS:** Covered by G23 placement rules. No separate entry needed.

---

#### G25 -- Signal-to-Silence Ratio Counting Formula [CRITICAL]

**What the file specifies:** Complete counting methodology:
- **Signal** (count 1 each): structural borders, background shifts, dark-background blocks, component containers, decorative elements, typographic emphasis beyond scale, transition markers
- **Silence** (count 1 each, SILENCE ZONES count 2): plain paragraph groups, standard spacing >= 32px, silence zones (2x weight), breathing transitions
- **Formula**: signal_count / silence_count. Target: 0.6-0.8:1.
- **FAIL**: ratio > 1.0 (mandatory reduction) or < 0.5 (too sparse)

**What the FINAL prompt has:** C-14 says "Signal-to-silence ratio: 0.6-0.8:1." The ratio is present but the COUNTING METHOD is not. Without the method, the ratio is a judgment call.

**Insertable text:**
```
C-14 COUNTING METHOD:
Signal (count 1 each): structural borders on elements, zone background shifts, dark-background blocks,
  component containers (callouts/tables/bento), decorative elements (drop caps/pseudo-elements),
  heading styling beyond type scale, transition markers.
Silence (count 1 each, silence zones count 2x): plain paragraph groups (consecutive paragraphs = 1 group),
  standard spacing gaps >= 32px, silence zones (2x), breathing transitions.
Standard headings (size/weight only) and standard paragraph text = NOT signal.
Compute: signal_total / silence_total. Report in Restraint Map. > 1.0 = FAIL (reduce signal).
```

**Placement:** Replace/expand C-14 in B3.

---

#### G26 -- Restraint Map Template [IMPORTANT]

**What the file specifies:** A complete Restraint Map template with all 5 sections: Deployed Mechanisms, Unused Mechanisms, Rejected Placements, Silence Zones, Signal-to-Silence Estimate. This must be written into the elaboration plan document.

**What the FINAL prompt has:** C-12 mentions "Rejection log" and C-13 mentions "Silence zones" but there is no template or requirement to produce a unified Restraint Map document.

**Insertable text:**
```
RESTRAINT MAP (planner produces in 03-build-plan.md, verified at Gate 3):
Required sections:
  1. Deployed Mechanisms table: mechanism name, scales active, purpose (for <= 16)
  2. Unused Mechanisms: >= 2 entries with reason
  3. Rejected Placements: >= 21 entries (mechanism, location, reason, what absence preserves)
  4. Silence Zones: >= 2 entries (location, position %, content within, what follows, why here)
  5. Signal-to-Silence Estimate: count + ratio + status
Gate 3 does NOT pass until Restraint Map with all 5 sections is present.
```

**Placement:** Add to C1 Planner definition or B7 Process.

---

#### G27 -- Rejection Log Phased Requirements [IMPORTANT]

**What the file specifies:** Rejection logging happens in TWO phases:
- Phase A (Planner in elaboration plan): >= 15 rejected placements
- Phase B (Builder during implementation): >= 6 additional
- Total before Pass 3: >= 21

**What the FINAL prompt has:** C-12 says "document >= 21 considered-and-rejected mechanism placements." The two-phase sourcing (planner vs builder) is not specified.

**Insertable text:**
```
C-12 PHASED SOURCING:
Planner documents >= 15 rejections in 03-build-plan.md (before builder starts).
Builder documents >= 6 additional rejections encountered during implementation.
Total before Gate 3: >= 21. Builder appends their rejections to build plan.
Each entry: mechanism name, proposed location, proposed scale, reason for rejection, what absence preserves.
```

**Placement:** Expand C-12 rule text.

---

### FILE 05: content-first-methodology.md

#### G28 -- Content Inventory Template [CRITICAL]

**What the file specifies:** A complete 8-section content inventory template to be filled BEFORE metaphor derivation:
1. Source / word count / content type mix / reading time
2. Section catalog (for each section: content type, word count, code blocks, tables, lists, diagrams, callouts, information density, reader intent, dependencies)
3. Natural groupings (shared topic, continuous argument, same intent)
4. Density map (section-by-section density + intent + peak position)
5. Content boundaries (natural vs artificial)
6. Estimated height map (prose/code/table/list/heading/callout heights per section)
7. Content-only zone count (with 3-condition zone necessity test)
8. Height estimation approximations

**What the FINAL prompt has:** P-01 says "Content inventory BEFORE metaphor derivation. Template: word count per section, content type mix, density map, natural groupings, peak/dip locations." This captures the CONCEPT but not the TEMPLATE. Without the template format, builders produce inconsistent inventories.

**Insertable text:**
```
P-01 CONTENT INVENTORY FORMAT (planner fills before metaphor derivation):
  SOURCE: [file] | WORD COUNT: [total] | CONTENT TYPE MIX: [% prose / % code / % tables]
  For each natural section (topic shifts, not headings):
    SECTION [N]: [Title] | Type: NARRATIVE/REFERENCE/PROCEDURAL/CONCEPTUAL | Words: [N]
    Code blocks: [N] | Tables: [N] | Lists: [N items] | Callouts: [N] | Density: HIGH/MED/LOW
    Reader intent: LEARN/BUILD/VERIFY/ORIENT/DECIDE/REFLECT
  DENSITY MAP: [Section 1: LOW/MED/HIGH, Section 2: ..., ...]
  HEIGHT ESTIMATE: prose=(words/12)*30.6px, code=lines*22.3px, table=rows*40px, lists=items*30px
  NATURAL ZONE COUNT: count sections meeting ALL THREE zone boundary conditions (>= 800px, type change, intent change)
```

**Placement:** Expand P-01 rule text.

---

#### G29 -- Density-to-Pattern Selection Table [IMPORTANT]

**What the file specifies:** Density shape determines pattern selection:
- Early peak, tapering: front-load visual weight; AVOID crescendo/geological structures
- Middle peak, bookends light: visual arch; middle gets maximum treatment; opening/closing lighter
- Late peak (crescendo): escalating patterns work
- Uniform density: AVOID zone-based patterns; use section-level rhythm
- Multi-peak: highlight peaks without imposing single narrative arc; independent section treatments

**What the FINAL prompt has:** No density-to-pattern mapping. Metaphor derivation (TC pipeline) does not include this step.

**Insertable text:**
```
P-01.5 DENSITY-TO-PATTERN CONSTRAINT (read density map before metaphor selection):
  Early peak, tapering -> AVOID escalating zone structures; front-load visual weight instead
  Middle peak, bookends light -> visual arch pattern; middle = maximum mechanism density
  Late peak (crescendo) -> graduated zone structures work; escalating patterns are appropriate
  Uniform density -> AVOID zone-based metaphors; use section-level rhythm instead
  Multi-peak -> independent section treatments; do not force single narrative arc
This constraint LIMITS which metaphors are appropriate. Run before Phase 1 of TC pipeline.
```

**Placement:** Add to B8 TC Pipeline routing after TC Phase 0.

---

#### G30 -- Content-to-Pattern Rules (prose/code/mixed) [IMPORTANT]

**What the file specifies:** Content mix determines pattern viability:
- >70% prose: width variation, typographic rhythm, editorial patterns work. Grid/bento do NOT work (insufficient distinct elements).
- >50% code/tables: reference patterns work. Dense formatting, monospace-heavy zones.
- Mixed 40-60% prose: hybrid patterns work. Zone backgrounds differentiate prose vs reference zones.
- Heavy diagrams/ASCII: feature patterns work. Diagrams need prominence (solid offset, breathing space).

**What the FINAL prompt has:** No content-type-to-pattern mapping.

**Insertable text:**
```
P-01.6 CONTENT TYPE CONSTRAINTS (from content inventory before metaphor selection):
  >70% prose: editorial/typographic patterns viable; bento grids NOT viable (insufficient elements)
  >50% code/tables: reference density patterns; monospace-heavy zones; dense formatting
  Mixed 40-60% prose: zone backgrounds differentiate prose from reference zones; hybrid viable
  Heavy diagrams: diagram needs prominence; solid offset + breathing space required; avoid patterns reducing diagram visibility
```

**Placement:** Add after P-01.5.

---

### FILE 06: communication-protocol.md

#### G32 -- Checkpoint A Exact Content Requirements [CRITICAL]

**What the file specifies:** Checkpoint A (Post-Plan Read-Through, before ANY HTML) must contain ALL THREE:
1. "My biggest spatial concern in the plan is [X]." (If none: "I see no spatial concerns. Proceeding.")
2. "The plan specifies [N] checkpoint transitions. My estimate is [Y]px of total checkpoint whitespace. I will proceed with this as intentional unless you correct me."
3. "I have read the full plan. I am ready to build."

**What the FINAL prompt has:** CP-A says: `"Container: ___px. Estimated height: ___px. Content-to-void: __:__. Biggest spatial concern: ___."`  This is similar but DOES NOT include the checkpoint whitespace calculation (item 2 above). The checkpoint whitespace estimate forces the builder to actually calculate void accumulation.

**Insertable text:**
```
CP-A REQUIRED CONTENT (all three MUST appear):
  1. Spatial concern: "My biggest spatial concern in the plan is [X]." OR "I see no concerns."
  2. Checkpoint whitespace: "Plan specifies [N] transitions. My estimate is [Y]px total transition whitespace."
  3. Confirmation: "I have read the full plan. I am ready to build."
Team-lead MUST NOT release Pass 2 until CP-A is logged. If builder writes HTML without CP-A: PAUSE.
```

**Placement:** Update CP-A in C2 Communication Protocol.

---

#### G33 -- Checkpoint B Exact Content Requirements [CRITICAL]

**What the file specifies:** Checkpoint B (Post-Build, after self-check) must contain ALL FOUR:
1. Estimated page height: "[Z]px"
2. Content estimate: "[W]% of scroll. ABOVE/BELOW 60:40 threshold."
3. Anomalies: "Following plan specifications NOT implemented: [list]. OR: All implemented, no anomalies."
4. Concern flag: "I [AM / AM NOT] concerned about whitespace proportion."

**What the FINAL prompt has:** CP-B says: `"Page height: ___px. Content ratio: __%. Sections: __. Deviations from plan: ___."` Item 3 (anomalies vs plan) and item 4 (explicit concern flag) are missing or under-specified.

**Insertable text:**
```
CP-B REQUIRED CONTENT (all four MUST appear):
  1. Total page height: "[Z]px"
  2. Content estimate: "[W]% of scroll. This is [ABOVE/BELOW] the 60:40 threshold."
  3. Anomalies: "Following plan specs NOT implemented: [list]." OR "All specs implemented, no anomalies."
  4. Concern flag: "I [AM / AM NOT] concerned about whitespace proportion."
Team-lead: if CP-B reports content < 60%, MUST send QUALITY-GATE before launching Spatial Confidence Gate.
```

**Placement:** Update CP-B in C2.

---

#### G34 -- Checkpoint C Exact Content Requirements [CRITICAL]

**What the file specifies:** Checkpoint C (Spatial Gate Result) must contain: gate verdict + all 7 SC results with PASS/FAIL and specific measurements + recommendation if FAIL.

**What the FINAL prompt has:** CP-C says: `"SC-01: PASS/FAIL. SC-02: PASS/FAIL. [all 7]."` This IS present in spirit. But the specific measurement format and fix recommendation on failure are missing.

**Insertable text:**
```
CP-C format: "Spatial Confidence Gate: PASS or FAIL.
SC-01 [PASS/FAIL] Container: [measured px]. SC-02 [PASS/FAIL] Void: [max void px].
SC-03 [PASS/FAIL] Content: [%]. SC-04 [PASS/FAIL -- team-lead]. SC-05 [PASS/FAIL] Header: [%].
SC-06 [PASS/FAIL] Sections: [count]. SC-07 [PASS/FAIL] Footer gap: [px].
If FAIL: specific recommended fix action for each failing check."
```

**Placement:** Expand CP-C in C2.

---

#### G35 -- Checkpoint D Exact Content Requirements [IMPORTANT]

**What the file specifies:** Checkpoint D (Post-Pass-2) must contain ALL THREE:
1. Deployment log: "Following mechanisms were DEPLOYED: [list]."
2. Rejection log: "Following mechanisms CONSIDERED but REJECTED: [list with rationale]."
3. Spatial impact: "My additions [INCREASED/DID NOT CHANGE/DECREASED] content-to-void ratio. New estimate: [W]%."

**What the FINAL prompt has:** CP-D says: `"Mechanism count + spatial re-check result."` This does NOT require the rejection log or the specific spatial impact assessment.

**Insertable text:**
```
CP-D REQUIRED CONTENT (all three MUST appear):
  1. Deployment: "DEPLOYED: [mechanism list]"
  2. Rejections: "REJECTED during build: [mechanism, one-sentence rationale for each]." OR "Rejected none."
  3. Spatial impact: "Additions [INCREASED/DID NOT CHANGE/DECREASED] content-to-void. New estimate: [W]%."
```

**Placement:** Update CP-D in C2.

---

#### G36 -- Team-Lead CP-A Enforcement [CRITICAL]

**What the file specifies:** "Team-lead MUST NOT release the build phase to Pass 2 until Checkpoint A message is logged. If skeleton-builder writes flagship-page.html without sending Checkpoint A, team-lead MUST pause and send: 'You did not send Checkpoint A. Confirm: all plan specifications were clear...'"

**What the FINAL prompt has:** C2 says "Minimum 8 substantive messages" and "ESCALATION TRIGGERS (MUST message)" but does NOT specify team-lead enforcement actions for missing checkpoints.

**Insertable text:**
```
TEAM-LEAD ENFORCEMENT:
  CP-A missing: MUST pause before releasing Pass 2. Send: "You did not send CP-A. Confirm plan clarity now."
  CP-B below 60%: MUST send QUALITY-GATE to builder. "Report indicates [W]% content. Identify cause before spatial gate."
  CP-C FAIL: MUST NOT spawn Pass 2 agents until ALL 7 checks PASS.
  Zero messages at Gate 1: PAUSE BUILD per current rule.
```

**Placement:** Add to C2 after ESCALATION TRIGGERS.

---

#### G37 -- Team-Lead CP-C Gate Enforcement [CRITICAL]

**What the file specifies:** "Team-lead MUST NOT spawn Pass 2 agents until Checkpoint C message reports PASS on ALL 7 checks. A team-lead squint test (SC-04) MUST be run independently even if spatial-auditor reports PASS on SC-04."

**What the FINAL prompt has:** Gate 1 says "max 2 fix cycles" but doesn't state the team-lead must independently verify SC-04.

**Insertable text:**
```
SC-04 TEAM-LEAD MANDATORY: Even if spatial-auditor reports SC-04 PASS, team-lead MUST run squint test independently.
Team-lead: take fresh screenshot, view at 25% zoom, independently assess 3+ regions + no empty quadrant.
Reason: SC-04 is the only judgment check -- spatial-auditor and team-lead may perceive differently.
Two independent SC-04 PASSes = high confidence. One PASS + one FAIL = enter fix cycle.
```

**Placement:** Add to Gate 1 in C3.

---

### FILE 07: kill-criteria.md

#### G38 -- KB-01 Pre-Build Content Section Count [CRITICAL]

**What the file specifies:** KB-01: Content section count >= 4 with >= 200 words each. If N < 4: ABORT -- insufficient content for flagship. Do not proceed to metaphor derivation.

**What the FINAL prompt has:** C3 Kill Criteria include "KB-01: content sections >= 4 with >= 200 words each. FAIL = ABORT." This IS PRESENT in the Kill Criteria quick reference.

**STATUS:** PRESENT. No gap.

---

#### G39 -- KB-02 Metaphor-Zone Compatibility Ratio [CRITICAL]

**What the file specifies:** KB-02: Ratio of content sections (C, each >= 200 words) to metaphor zones required (M) must be >= 1.5. The ceiling experiment: C=4, M=4, ratio=1.0 -- FAIL (produced void). A 4-zone metaphor needs at least 6 content sections.

**What the FINAL prompt has:** C3 Kill Criteria quick reference does NOT include KB-02. MG-05 (metaphor spatial cost <= 15%) addresses spatial cost but not the content-to-zone ratio.

**Insertable text:**
```
KB-02 KILL CRITERION (pre-build, after metaphor derivation):
  C = count content sections with >= 200 words each
  M = count zones the metaphor structurally requires
  ratio = C / M
  PASS: ratio >= 1.5 (content sections outnumber zones by 1.5:1)
  FAIL: ratio < 1.5 -- ABORT. Either simplify metaphor (fewer zones) or add content.
  Evidence: Ceiling C=4, M=4, ratio=1.0 -- produced catastrophic void.
  A 4-zone metaphor requires >= 6 content sections of >= 200 words each.
```

**Placement:** Add to Kill Criteria in C3, and to Gate 0 checks.

---

#### G40 -- KB-03 Predicted Void Budget Formula [CRITICAL]

**What the file specifies:** KB-03: Before building, compute predicted_void_pct = total_spacing / (total_spacing + total_content) x 100. PASS: <= 30%.

Formula:
```
Total spacing = all zone padding-top + zone padding-bottom + checkpoint margins + section gap + heading margins (all instances)
Total content = word_count * rough height (500 words ≈ 800-1200px at 18px/70CPL)
predicted_void_pct = total_spacing / (total_spacing + total_content) * 100
```

**What the FINAL prompt has:** Gate 0 says "Content-to-void >= 60:40" but the calculation method is not specified. The kill criteria quick reference has "KB-03: predicted void <= 30%" but the calculation formula is absent.

**STATUS:** The threshold is present (KB-03), but the FORMULA for calculating it is absent (covered by G15 above). Fix G15 and this is addressed.

---

#### G41 -- KB-05 Metaphor Soul Compatibility Assessment [IMPORTANT]

**What the file specifies:** KB-05: Does the metaphor require visual channels prohibited by soul? Answer per channel: border-radius, gradients, shadows, pure black/white, cool tones, translucency. If any required channel is prohibited: select different metaphor OR modify metaphor expression to use only available channels.

**What the FINAL prompt has:** MG-03 says "6 rejection checks passed (R1-R6: soul conflict, spatial obligation > 10%, forced vocabulary, single-channel, content mismatch, builder confusion)." Soul conflict is listed as R1. But the channel-by-channel compatibility test format is absent.

**Insertable text:**
```
KB-05 / MG-03 SOUL CONFLICT CHECK -- answer per channel before proceeding:
  Zone differentiation: AVAILABLE channels are border-weight shifts, spacing variation, warm-palette background changes (cream/off-white/light tan). UNAVAILABLE: gradients, shadows, border-radius, cool tones.
  If metaphor requires gradients/shadows/cool tones for zone expression: re-derive metaphor.
  Maximum ~55-65% visual metaphor survival without labels is the soul-constraint ceiling.
  Do NOT target "structural" (80%+) expression -- unreachable under current soul constraints.
  Target "atmospheric" (50-65%) and integrate labels aesthetically.
```

**Placement:** Add to MG-03 or Gate 0.

---

### FILE 08: metacognitive-checkpoints.md

#### G42 -- Zone Necessity Test Table Format [CRITICAL]

**What the file specifies:** For EACH planned zone, fill a table:

| Zone | Content mass >= 800px? | Different content TYPE from neighbors? | Reader intent shifts at boundary? | Verdict |
|------|---|---|---|---|
| Z1 | YES (950px) | YES | YES | KEEP |
| Z2 | NO (400px) | NO | NO | MERGE |

Three NOs = MERGE. Two NOs = FLAG for team-lead. Default is merge; planner must argue to keep.

**What the FINAL prompt has:** P-05 says "Zone boundary requires ALL THREE: content mass >= 800px, content type change, reader intent change. Three NOs on any condition = MERGE zones." The rule is present but the TABLE FORMAT forcing per-zone analysis is missing.

**Insertable text:**
```
P-05 ZONE NECESSITY TABLE (planner fills for each planned zone before build plan is approved):
| Zone | >= 800px content? | Different type? | Intent shift? | Verdict |
|------|---|---|---|---|
| Z1 | YES/NO (estimate px) | YES/NO | YES/NO | KEEP/MERGE |
...
Three NOs = MERGE (unconditional). Two NOs = team-lead decides. Default = MERGE.
If merging reduces zone count below metaphor minimum: metaphor must adapt to fewer zones.
Table must be in 03-build-plan.md. Missing table = plan not approved.
```

**Placement:** Expand P-05 to include table format requirement.

---

#### G43 -- Anti-Ambition Audit by Different Agent [IMPORTANT]

**What the file specifies:** A DIFFERENT agent (not planner, not builder) answers: "What is the SIMPLEST version of this page that satisfies flagship requirements? Describe in 3 sentences." Then planner compares their plan to the simplest version: "My plan adds [N] things beyond simplest. For each: specific perceptual benefit + specific spatial cost."

**What the FINAL prompt has:** No anti-ambition audit step. B7 Process covers content inventory and two-instance pattern but not this externalized simplicity check.

**Insertable text:**
```
P-01.7 ANTI-AMBITION AUDIT (separate agent, before build starts):
  Different agent answers: "Simplest flagship page satisfying all requirements in 3 sentences."
  Planner then lists: each plan element beyond simplest version + its perceptual benefit + spatial cost.
  If perceptual benefit cannot be stated in one sentence: element is decorative -- REMOVE.
  If spatial cost > perceptual benefit (planner's own assessment): element is net negative -- REMOVE.
  Purpose: forces confrontation between "each addition has a reason" and "the total package is buildable."
```

**Placement:** Add as step in Pass 0 in C1, or as P-01.7.

---

#### G44 -- Metaphor Distance Test [IMPORTANT]

**What the file specifies:** Semantic overlap test: list 10 key terms in metaphor, list 10 key terms in content, count overlaps. Threshold: overlap <= 3/10. Above 3/10 = metaphor too literal (renaming, not metaphor). Ceiling's "Secure Facility" for secure access content = 0 interpretive distance.

**What the FINAL prompt has:** MG-02 says "Interpretive Distance >= 2 (not literal, not impenetrable)." The distance concept is present but the MEASUREMENT METHOD (vocabulary overlap test, 10-term comparison) is absent.

**Insertable text:**
```
MG-02 MEASUREMENT METHOD for Interpretive Distance:
  List the 10 key terms in the metaphor. List the 10 key terms in the content.
  Count vocabulary overlaps. PASS: overlaps <= 3/10. FAIL: > 3/10 (metaphor is relabeling, not metaphor).
  Evidence: "Secure Facility" for secure access content = 10/10 overlap = labeled, not structural.
  A productive metaphor introduces dimensions ABSENT from content (e.g., "elevation change," "water flow").
  If overlap > 3/10: select different metaphor OR redesign expression to create genuine distance.
```

**Placement:** Expand MG-02 rule.

---

#### G45 -- Check 2.1 Fresh-Eyes Proportion Check [IMPORTANT]

**What the file specifies:** After Pass 1, a SEPARATE agent (never builder, never planner) answers 3 questions:
1. "What % of scroll depth is content vs empty space?" (measurement, not impression)
2. "If you stopped scrolling at 50%, would you think the page was complete?" (must answer NO)
3. "Where is the last visually distinct landmark? Is it past 70% scroll mark?" (must answer YES)

**What the FINAL prompt has:** Gate 1 has spatial checks but they are all run by the Embedded Auditor (Sonnet). There is no requirement for a SEPARATE agent to answer the proportion questions.

**Insertable text:**
```
GATE 1 FRESH-EYES CHECK (separate agent, not builder or planner):
Separate agent views skeleton at 1440px and answers:
Q1: "What % of scroll depth is content vs empty space?" (estimate, not impression)
Q2: "Stopped scrolling at 50% -- would you think the page is complete?" MUST answer NO for pass.
Q3: "Where is last visually distinct landmark? Is it past 70% scroll?" MUST answer YES for pass.
Q2 or Q3 FAIL = builder receives specific feedback before Pass 2 elaboration begins.
```

**Placement:** Add to Gate 1 in C3.

---

#### G46 -- Root Cause Classification Before Retry [CRITICAL]

**What the file specifies:** FAIL = NEVER retry unless root cause is classified as CONTENT, CSS, STRUCTURAL, EXECUTION, or METAPHOR. Wrong classification (treating content problem as CSS problem) = fix fails. The ceiling experiment's fix cycle applied CSS to a content problem.

**What the FINAL prompt has:** RP-02 says "Two consecutive gates fail: ABORT. Team-lead convenes diagnostic." But RP does not specify ROOT CAUSE CLASSIFICATION before the first fix cycle (not just at abort).

**STATUS:** Combined with G03 above. G03's insertable text covers this.

---

### FILE 09: adversarial-premortem.md

#### G47 -- SC-08 Content Weight Check [CRITICAL]

**What the file specifies:** Proposed SC-08: For each section, count discrete visual elements (paragraphs, code blocks, tables, diagrams, callouts). Minimum: 3 visual elements per section, minimum 2 content TYPES per section (e.g., prose + code, or prose + table). Catches "technically populated but perceptually sparse" sections.

**What the FINAL prompt has:** SC-06 counts sections with >= 200px content height. But it does NOT check for content TYPE diversity within a section. A section with 200px of plain paragraphs passes SC-06 but feels sparse; a section with a paragraph + code block + callout passes SC-08 and feels rich.

**Insertable text:**
```
SC-08 CONTENT WEIGHT CHECK (add to Gate 1 programmatic checks):
For each content section (passing SC-06 with >= 200px):
  Count discrete visual element TYPES: prose paragraphs, code blocks, tables, diagrams, callouts.
  PASS: >= 3 visual elements AND >= 2 content TYPES per section.
  FAIL: sections with only prose (1 type, even if many paragraphs) = perceptually sparse.
  On fail: add a code block, table, or callout to sparse section, OR merge with adjacent section.
  Rationale: Ceiling experiment passed SC-06 (content technically present) but perceptually catastrophic.
```

**Placement:** Add as SC-08 to Gate 1 in C3, and add to B10 builder self-check.

---

#### G48 -- Spatial Re-Check After Pass 2 Must Be Programmatic [CRITICAL]

**What the file specifies:** After Pass 2, re-run SC-02 (Void Budget) and SC-03 (Content Distribution) programmatically -- NOT as squint test. If content-to-void ratio degrades by more than 10 percentage points from Pass 1 to Pass 2: ROLLBACK Pass 2, reduce elaboration.

**What the FINAL prompt has:** P-08 says "Spatial re-check after Pass 2: S-01 + S-02 must still pass. If content-to-void degrades > 10 percentage points from Pass 1, ROLLBACK Pass 2." This IS present.

**STATUS:** PRESENT in P-08. The "programmatic, not squint" clarification is missing but the rule exists. Add clarification:

```
P-08 CLARIFICATION: "Programmatic measurement required (JS query), not squint test.
Run same SC-02 and SC-03 scripts from Gate 1. Squint test operates at resolution too low to detect
mechanism-introduced void (each mechanism deployment adds spacing invisible at 25% zoom)."
```

---

#### G49 -- Structural Metaphor Ceiling Under Soul Constraints [IMPORTANT]

**What the file specifies:** Accept 50-65% visual metaphor survival (without labels) as the CEILING for KortAI pages under current soul constraints. Do not target "structural" (80%+) expression -- not achievable with current visual vocabulary. Target "atmospheric" (50-80%) and design labels to be aesthetically integrated.

**What the FINAL prompt has:** MG-04 requires >= 70% structural (without labels) as a gate. The pre-mortem argues this is IMPOSSIBLE under current soul constraints. There is a direct conflict between the gate and the pre-mortem's empirical finding.

**Conflict resolution note:** The pre-mortem is adversarial and may be intentionally pessimistic. However, if 70% structural is unachievable under soul constraints, MG-04 will always fail. Consider adding acknowledgment:

**Insertable text:**
```
MG-04 CALIBRATION NOTE: Under KortAI soul constraints (no gradients/shadows/border-radius/cool-tones),
empirical ceiling for label-free metaphor expression is approximately 55-65% (atmospheric, not structural).
If MG-04 gate fails at <= 65%: escalate to team-lead rather than auto-abort.
Team-lead judges: is 65% atmospheric acceptable for this page? (May be YES if labels are beautifully integrated.)
"Structural" (80%+) is achievable only with dramatic type scale + spatial zone contrast + strong border vocabulary.
```

**Placement:** Add to MG-04 rule.

---

#### G50 -- Time Kill Threshold Conflict [NICE-TO-HAVE]

**What the file specifies:** Pre-mortem recommends 300-minute kill threshold vs. current 240-minute. Multi-pass architecture inherits gate overhead (5-20 min/gate x 5 gates = 25-100 min of overhead not counted in single-pass estimates). With one fix cycle per gate, expected time is 195-250 min + overhead = 220-350 min. 240-min kill sits inside this range.

**What the FINAL prompt has:** C4 says "STAGED DOWNGRADE at 240 min." The 240-minute threshold is a conflict with the pre-mortem's recommendation.

**NOTE:** This is a deliberate design decision (shorter kill = faster learning cycles). The pre-mortem's 300-min recommendation is a NICE-TO-HAVE adjustment, not a CRITICAL gap. The team-lead should be aware of the tension.

---

#### G51 -- Seam Visibility Prevention (Single Content Voice) [IMPORTANT]

**What the file specifies:** Three different agents (skeleton-builder Sonnet, elaboration-builder Sonnet, intentionality-builder Opus) produce three different "continuation biases." The CSS is coherent; the HTML/prose voice is not. Bridge text in Pass 3 "feels inserted, not native."

**What the FINAL prompt has:** CT-02 specifies tone target (Warm/Authoritative/Unhurried) for content. But no rule prevents multi-pass seam visibility in content voice.

**Insertable text:**
```
CT-02.5 SEAM PREVENTION: Content writer (Opus, Pass 0) produces ALL prose in 01-adapted-content.md.
Pass 1 builder uses this prose verbatim. Pass 2 builder uses this prose verbatim.
Pass 3 intentionality-builder adds STRUCTURAL elements (bookending, cognitive transitions) using same voice standard.
"Voice drift" between passes = PA-05b COHERENT failure. Single prose source prevents drift.
All bridge text, meta-annotations, and cognitive transitions must match the registered CT-02 voice.
```

**Placement:** Add after CT-02 in B11.

---

### FILE 10: prompt-architecture.md

#### G52 -- Builder Effective Prompt Confirmation [PRESENT]

**What the file specifies:** The builder's effective prompt should be <= 75 lines. Compliance analysis shows binary rules at 100%; judgment rules at ~0%.

**What the FINAL prompt has:** Appendix says "Builder prompt length <= 75 lines (rules + conviction opener + closer). Hard cap."

**STATUS:** PRESENT. No gap.

---

#### G53 -- Container Width Verification Method [PRESENT]

**What the file specifies:** Container width needs a VERIFICATION METHOD in the prompt: `document.querySelector('.page-container').getBoundingClientRect().width` at 1440px viewport. Never measure from viewport dimensions.

**What the FINAL prompt has:** S-01 includes "Verify: querySelector('.page-container').getBoundingClientRect().width" -- PRESENT.

**STATUS:** PRESENT. No gap.

---

## CROSS-FILE PATTERNS

### Pattern 1: The Programmatic vs Perceptual Audit Split

Files 01, 03, and 09 all reinforce that programmatic audits catch different failure modes than perceptual audits. Neither alone is sufficient. The FINAL prompt correctly uses both (Gate 1 programmatic + Gate 5 Mode 4 PA), but does not explicitly state this distinction. NICE-TO-HAVE: Add one sentence to B9 PA Integration explaining why both systems are needed.

### Pattern 2: Pre-Build Calculation Gates Are Consistently Missing

Files 02, 03, 07, and 08 all specify PRE-BUILD calculations that must produce specific numbers before building starts. The FINAL prompt has conceptual gate descriptions but lacks the calculation formulas. G15 (void budget formula) and G40 (KB-03 formula) are the most critical missing calculations.

### Pattern 3: The "Judgment Becomes Binary" Principle

Files 04, 06, 08, and 09 all emphasize converting judgment rules to binary rules. The FINAL prompt has made significant progress here (87 numbered rules) but several remaining gaps (G25 signal-to-silence counting, G28 inventory template, G42 zone necessity table) represent judgment rules that need binary conversion.

### Pattern 4: Two-Instance Pattern Extended to Content Voice

File 09 adds a new dimension: seam visibility from multi-agent content generation. The FINAL prompt specifies two-instance for spatial (P-03) but not for content voice consistency (G51).

---

## SEVERITY CLASSIFICATION SUMMARY

**CRITICAL (9 items -- must integrate before flagship experiment):**
G01, G02, G03, G07, G09, G13 (clarification), G15, G21, G23, G25, G28, G32 (partial), G36, G37, G39, G42, G46, G47, G48 (clarification)

**IMPORTANT (25 items -- strongly recommended):**
G04, G05, G06, G10, G11, G12, G14, G16, G17 (conflict resolution), G19, G22, G24, G26, G27, G29, G30, G31, G33, G34, G35, G38 (present -- verify), G41, G43, G44, G45, G49, G51

**NICE-TO-HAVE (3 items):**
G20 (full JS implementation), G50 (time threshold conflict), G54 (prompt cleanup)

---

**END SCAN I**
**Files covered:** 10 of 10 (01-pa-lessons, 02-enrichment-specs, 03-spatial-gate, 04-restraint-protocol, 05-content-first, 06-communication-protocol, 07-kill-criteria, 08-metacognitive, 09-adversarial-premortem, 10-prompt-architecture)
**Gaps identified:** 54 total (G01-G54), classified: 18 CRITICAL / 33 IMPORTANT / 3 NICE
**Conflicts identified:** 2 (G17: width range; G49: metaphor structural ceiling vs MG-04 gate)
**Already present:** G08, G18, G38, G52, G53 confirmed present -- no action needed
