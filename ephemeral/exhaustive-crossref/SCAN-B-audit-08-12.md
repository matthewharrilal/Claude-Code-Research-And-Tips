# SCAN-B: Exhaustive Cross-Reference Audit — Files 08-12

**Scanner:** Scanner B (Task #2)
**Date:** 2026-02-17
**FINAL prompt:** `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (695 lines)
**Files audited:**
- `08-checkpoint-integration.md`
- `09-adversarial-fresh-eyes.md`
- `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (original 530-line version, pre-FINAL)
- `11-tc-deep-invocation.md`
- `12-pa-deep-invocation.md`

---

## METHODOLOGY

For each file, I identified every concrete specification, rule, threshold, formula, verification method, or requirement that is either (a) ABSENT from the FINAL, (b) PRESENT in a degraded/incomplete form, or (c) present in the original 530-line prompt (file 10) but LOST in the FINAL. Each finding is classified CRITICAL / IMPORTANT / NICE-TO-HAVE with exact insertable text and placement.

---

## FILE 08: `08-checkpoint-integration.md`

### What file 08 contains
- D-004 findings tracker (10 critical findings from supplementary files)
- Worker Level 2 synthesis (17 observations)
- Auditor findings (13 findings organized by risk)
- Threshold resolution status
- Execution lessons
- Specific insertable text organized by prompt layer

---

### MISSING-08-01 [CRITICAL]

**Source:** Section 2, Theme B, Observation 7 / Section 6, Layer 2 — "A1+A2 Create a Complete Deployment Workflow"

> "Select mechanisms (existing flowchart) -> Connect zones (A1 Transition Grammar) -> Distribute mechanisms (A2 Restraint Protocol). This three-step workflow should be surfaced in the builder's execution spec."

**Status in FINAL:** ABSENT. The FINAL has C-05/C-06/C-07 (transition type rules) and C-12 (rejection log) but does NOT explicitly frame these as a sequential 3-step deployment workflow.

**Classification:** CRITICAL — provides builder with actionable sequence; without it, builders may deploy mechanisms and assign transitions in arbitrary order.

**Insertable text + placement:** Add to B3 COMPOSITIONAL section, before the MECHANISMS block:

```
DEPLOYMENT WORKFLOW (execute in this order):
1. Select mechanisms by per-category minimums (C-01) and target count (C-02)
2. Assign transitions: for each zone boundary, classify as SMOOTH/BRIDGE/BREATHING (C-05)
3. Apply restraint: reject >= 1.5:1 ratio vs deployed (C-12), check signal-to-silence (C-14)
```

---

### MISSING-08-02 [CRITICAL]

**Source:** Section 3, HIGH RISK finding #5 — "C3 Caps Per-Property, Not Total Accumulated Spacing"

> "`margin-bottom: 96px` + `padding-top: 96px` on adjacent elements creates 192px visual gap while each property passes the 96px cap. B1 catches the visual result, but C3 alone cannot prevent accumulation."

**Status in FINAL:** S-09 says "Total visual gap (margin-bottom + padding-top adjacent): <= 96px." PRESENT — the FINAL already addresses this. NO GAP.

---

### MISSING-08-03 [IMPORTANT]

**Source:** Section 3, HIGH RISK finding #3 — "PA-05c/PA-52 Overlap" + Section 6, Layer 3

> "PA-05c sub-dimension 3b (Vertical Proportion) and PA-52 (designed moment per third) measure the same thing... the Weaver-Synthesizer must be warned against double-counting."
> Insertable: "PA-05c sub-dimension 3b and PA-52 measure the same construct (designed moment per third). The Weaver-Synthesizer must NOT double-count the same observation as two separate findings."

**Status in FINAL:** ABSENT from C4 and C5. The FINAL has both PA-05c and PA-52 in the gating protocol but no overlap warning for the synthesizer.

**Classification:** IMPORTANT — without this, the synthesizer may double-penalize a finding and produce an unfair gate failure.

**Insertable text + placement:** Add to C5 GATE-THEN-RANKING, after the PHASE 2 RANKING block:

```
SYNTHESIZER WARNING: PA-05c sub-dimension 3b (Vertical Proportion) and PA-52 (designed moment per third) measure the same construct. Do NOT count the same observation as two separate findings. If both flag the same issue, treat as a single corroborated finding.
```

---

### MISSING-08-04 [IMPORTANT]

**Source:** Section 3, HIGH RISK finding #4 — "PA-17/PA-41 Elevation Creates 9 Separate Assessments"

> "All 9 Mode 4 auditors must now evaluate PA-17 and PA-41, creating potentially contradictory assessments. No guidance exists for the Weaver-Synthesizer on how to reconcile."
> Insertable: "PA-17/PA-41 synthesis: Auditor F is PRIMARY evaluator. Other auditors provide corroboration. If 5+ auditors contradict Auditor F on rhythm/monotony, escalate for review before finalizing verdict."

**Status in FINAL:** B9 says "PA-17/PA-41: -> Auditor F primary. Elevated to Tier 1 for Ceiling+. Others corroborate. 5+ contradictions of Auditor F = escalate." PRESENT — the B9 routing addresses this. But the escalation guidance is NOT repeated in the C5 gate-then-ranking section where the synthesizer would look.

**Classification:** IMPORTANT — the synthesizer reads C5, not B9, at aggregation time.

**Insertable text + placement:** Add to C5 PHASE 2 RANKING block or after the SEVERITY SYSTEM:

```
PA-17/PA-41 RECONCILIATION: Auditor F is PRIMARY. 5+ other auditors contradicting Auditor F = escalate before finalizing verdict. Do not auto-defer to Auditor F if near-universal contradiction exists.
```

---

### MISSING-08-05 [IMPORTANT]

**Source:** Section 3, MEDIUM RISK finding #6 — "Auditor C Cognitive Load" + Section 6, Layer 3

> "Auditor C carries 11 questions (2.75x heaviest). Screenshot pre-capture mitigates contention but not time asymmetry."
> Insertable: "Auditor C carries 11 questions (2.75x heaviest). Allocate proportionally more time or split spatial questions (PA-50-53) to a dedicated sub-auditor."

**Status in FINAL:** ABSENT. C4 lists Auditor C's 11 questions but gives no time allocation note or load-balancing guidance.

**Classification:** IMPORTANT — without this, Auditor C may rush the void pipeline (PA-50-53) under time pressure, which are the most critical spatial questions.

**Insertable text + placement:** Add to C4 PA DEPLOYMENT, after the auditor assignment table:

```
LOAD NOTE: Auditor C carries 11 questions (PA-09 through PA-53) — 2.75x heaviest. Allocate 18-22 min. If time-constrained, prioritize PA-50 through PA-53 (void pipeline) over PA-30-33.
```

---

### MISSING-08-06 [IMPORTANT]

**Source:** Section 3, MEDIUM RISK finding #8 — "Breathing Zone Sentence Count Inconsistency"

> "Gap 4 says '1-2 sentences max' while Gaps 6/7 say '1-3 sentences.' Minor but could cause builder confusion. Use '1-3' consistently (the enriched value)."

**Status in FINAL:** C-07 says "Bridge transitions MUST contain cognitive-reframe prose (1-3 sentences justifying the shift)." The FINAL uses 1-3 consistently. NO GAP.

---

### MISSING-08-07 [IMPORTANT]

**Source:** Section 6, Layer 2 — "ADD to 2E BUILDER SELF-CHECK -- Designed Moment Examples"

> "A designed moment IS: 3+ mechanisms at high intensity with unique visual treatment not repeated elsewhere (e.g., dark header + accent border + zone background + custom typography in a single section). A designed moment IS NOT: a repeated callout style used in multiple sections, a standard heading with body text, or a breathing zone with minimal formatting."

**Status in FINAL:** ABSENT. B10 builder self-check has "C-09: >= 1 designed moment per scroll quartile" as a checkbox but provides no definition of what constitutes a designed moment.

**Classification:** IMPORTANT — without a definition, builder may incorrectly count breathing zones or standard headings as designed moments, satisfying the letter while violating the spirit.

**Insertable text + placement:** Add to B10 BUILDER SELF-CHECK, adjacent to the C-09 checkbox:

```
Designed moment = 3+ mechanisms at high intensity with unique visual treatment NOT repeated elsewhere.
IS NOT: repeated callout style, standard heading, breathing zone with minimal formatting.
```

---

### MISSING-08-08 [IMPORTANT]

**Source:** Section 6, Layer 3 — "ADD to 3C AUDIT PROTOCOL -- Gate Budget" + D-004 finding #10

> "Gate overhead budget: Total evaluation points must not exceed 120 min (~50% of build time). Each gate targets 15-20 min maximum. If gate evaluation is consuming more time than building, something is wrong."

**Status in FINAL:** ABSENT. The FINAL has no gate time budget anywhere.

**Classification:** IMPORTANT — gate fatigue was flagged as a risk (47 evaluation points ≈ 235 min overhead). Without a time budget, gates could consume more time than the build itself.

**Insertable text + placement:** Add to C3 GATE SEQUENCE, after the KILL CRITERIA:

```
GATE TIME BUDGET: Each gate targets 15-20 min maximum. Total gate overhead must not exceed 120 min. If any gate is consuming > 30 min, compress to binary pass/fail only. Gate overhead > build time = something is wrong.
```

---

### MISSING-08-09 [IMPORTANT]

**Source:** Section 6, Layer 3 — "ADD to 3C AUDIT PROTOCOL -- Time-Based Downgrade" + D-004 finding #8

> "Passes 1-3 produce ~93% quality in ~160 min. Passes 4-6 add ~5% in ~70 min. ROI drops 4x after Pass 3."
> Time-based downgrade paths at 240 min: Pass 2 complete = ship as CEILING-PLUS (93% quality). Pass 1 complete = ship as CEILING-MINUS. Pass 1 failing = ABORT.

**Status in FINAL:** C4 has "STAGED DOWNGRADE at 240 min: Pass 2 complete = ship as CEILING-PLUS. Pass 1 complete = ship as CEILING-MINUS. Pass 1 failing = ABORT." PRESENT — the staged downgrade is in C4. However, the ROI rationale (93% quality in 160 min; +5% in 70 min) is ABSENT, so agents don't know WHY the downgrade paths exist.

**Classification:** IMPORTANT — without the rationale, team lead may resist invoking the downgrade because it feels like failure rather than a rational quality decision.

**Insertable text + placement:** Add a rationale line adjacent to the C4 STAGED DOWNGRADE block:

```
RATIONALE: Passes 1-3 produce ~93% quality in ~160 min. Passes 4-6 add ~5% in ~70 min. ROI drops 4x after Pass 3. Staged downgrade is a rational quality decision, not a failure.
```

---

### MISSING-08-10 [NICE-TO-HAVE]

**Source:** Section 5, Lesson 7 — "The Anti-Void Triad Pattern Is Transferable"

> "C3-B1-B3 pattern (prevent-detect-detect) is a general architecture: token-level prevention -> measurement-level detection -> distribution-level detection. The flagship prompt should surface this pattern as a principle."

**Status in FINAL:** S-11, S-12, S-13 exist as individual rules but the PREVENT-DETECT-DETECT framing is absent.

**Classification:** NICE-TO-HAVE — the rules are present; the pattern explanation is useful but not blocking.

**Insertable text + placement:** Add to B1 SPATIAL, VOID PREVENTION heading:

```
ANTI-VOID DEFENSE ARCHITECTURE (three layers):
S-11 = PREVENT (token-level: no CSS value > 96px)
S-12 = DETECT SPATIAL (viewport-level: 30% coverage minimum)
S-13 = DETECT TEMPORAL (scroll-depth: designed moment after 50%)
```

---

### MISSING-08-11 [NICE-TO-HAVE]

**Source:** Section 6, Cross-Layer — "ADD -- A3/D3 Builder Workflow Order"

> "Content assessment order: (1) D3: For each section, determine form treatment. (2) A3: Count total zones and verify against zone count ceiling by word count. D3 (micro, per-section) before A3 (macro, total zones)."

**Status in FINAL:** S-15 (zone count ceiling) is present but P-01 (content inventory) doesn't explicitly order D3 before A3. Minor workflow sequencing gap.

**Classification:** NICE-TO-HAVE — ordering is implicit but not stated.

---

## FILE 09: `09-adversarial-fresh-eyes.md`

### What file 09 contains
- 5 blind spots (catastrophic/critical/high/high/significant)
- Assumption challenges
- Failure mode analysis
- Emotional architecture analysis
- Reader-first critique with 5 missing reader-first rules
- Recovery pathway gaps
- Interdimensional gaps
- Wild card concerns
- Specific recommendations

---

### MISSING-09-01 [CRITICAL]

**Source:** Section 1, Blind Spot #2 — "NO CONTENT QUALITY GATE" + Section 5 + Section 9

> "The entire 55-line builder prompt deals with CSS and spatial properties... a web page is fundamentally a CONTENT DELIVERY VEHICLE. You can have perfect spatial proportions, impeccable soul compliance, and 14 deployed mechanisms -- and if the actual text is boring, generic, or mismatched to the visual treatment, the page fails."
>
> Recommendation: "Add a content quality line to the builder self-check: 'Every text block >= 3 sentences. No placeholder or generic text. Verify: read each <p> and confirm it contains specific, substantive content.'"

**Status in FINAL:** B11 CONTENT TRANSFORMATION has CT-01 through CT-08, which is a strong content gate. GATE 0.5 fires content quality check. PRESENT — the FINAL added B11 + Gate 0.5 specifically to address this.

**Verdict:** The FINAL adequately addresses this blind spot. NO GAP.

---

### MISSING-09-02 [CRITICAL]

**Source:** Section 1, Blind Spot #3 — "THE METAPHOR HAS NO KILL SWITCH"

> "What would a kill switch look like? After Pass 0, an independent agent reads the metaphor derivation and answers: 'If I removed all labels and titles referencing this metaphor, would the visual structure alone communicate it?' YES = proceed. NO = re-derive."

**Status in FINAL:** MG-04 says "Metaphor structural test: remove all labels and titles. Does the visual structure alone communicate the metaphor? YES = proceed. NO = re-derive. Binary gate." PRESENT in the spec. Gate 4 also includes fresh-eyes metaphor check. ADEQUATELY ADDRESSED.

---

### MISSING-09-03 [CRITICAL]

**Source:** Section 1, Blind Spot #1 — "THE READER IS ABSENT FROM THE ENTIRE SYSTEM" + Section 9 recommendation

> "Add a READER PROXY agent after Pass 2 or 3 who reads the HTML cold (no build plan, no metaphor doc, no mechanism list) and answers: 'What is this page about? Would I keep scrolling? What do I feel?' This agent costs ~30 minutes and catches the entire class of 'technically correct but experientially dead' failures."

**Status in FINAL:** ABSENT. The FINAL has 9 PA auditors who are fresh-eyes (zero context), which serves part of this function. But the PA auditors are deployed at the END (Gate 5/Pass 5) and have structured 48-question protocols — not a pure "cold reader" experience. There is no reader proxy gate between Pass 2 and Pass 4 for EARLY void detection.

**Classification:** CRITICAL — the ceiling experiment's void was only detected at the final audit. A mid-pipeline reader proxy would catch spatial failures before mechanism work (Pass 2) and metaphor work (Pass 3) build on a bad foundation.

**Insertable text + placement:** Add to C1 AGENT ROSTER, between PASS 2 and PASS 3:

```
PASS 2.5: Reader Proxy Gate (NEW)
  - Reader Proxy (Sonnet, zero context): reads rendered HTML cold. No build plan, no mechanism list.
    Answers ONLY: "What is this about? Would I keep scrolling? Rate 1-5."
    IF score <= 2: PAUSE. Team-lead reviews before Pass 3 begins.
  -> Triggers on: unusual void reports from Embedded Auditor OR builder spatial concern flag.
```

Add to C3 GATE SEQUENCE:

```
Gate 2.5 (Reader Proxy): Conditional gate between Pass 2 and Pass 3. Fires when Embedded Auditor OR Pass 2 builder flags spatial concern. Reader Proxy score <= 2/5 = team-lead review required before Pass 3.
```

---

### MISSING-09-04 [IMPORTANT]

**Source:** Section 1, Blind Spot #4 — "TEMPORAL ARCHITECTURE IS MISSING"

> "What's missing: pacing, escalation, tension and release, the arc of the reader's attention. A page with 4 uniformly distributed designed moments has no arc. A page where moments build in intensity toward a climax in the third quartile, then resolve in the fourth, has a story."

**Status in FINAL:** A8 READER JOURNEY describes a 5-act scroll arc. C-09 requires >= 1 designed moment per quartile. However, neither specifies that designed moments must ESCALATE in intensity — the requirement is presence, not arc.

**Classification:** IMPORTANT — presence without arc = mechanical compliance. The ceiling had designed moments but they all hit at the same weight.

**Insertable text + placement:** Add to A8 READER JOURNEY or B3 COMPOSITIONAL:

```
MOMENT ARC REQUIREMENT: Designed moments must ESCALATE, not repeat. Acts 2-3 should have HIGHER mechanism intensity than Act 1. Act 4 resolves (lower intensity). A page with 4 identical-weight designed moments has no arc. Verify: peak density section is in Acts 2-3, not Act 1.
```

---

### MISSING-09-05 [IMPORTANT]

**Source:** Section 2, Assumption challenge — "Conviction layer will be read by the right agents at the right time"

> "The primacy effect saves lines 1-10 of conviction; lines 11-70 are expensive dead weight. If conviction is 70 lines, most of it will be forgotten by the time the agent starts building."

**Status in FINAL:** The anti-skimming section acknowledges "Recency position: Self-check is the last thing the builder reads before writing." But there's no guidance to the ASSEMBLER to ensure the most critical conviction content is in lines 1-10.

**Classification:** IMPORTANT — the FINAL's conviction sandwich structure (Section D closes with conviction restatement) addresses recency but not primacy for the most critical lines.

**Insertable text + placement:** Add to Section D CONVICTION CLOSING, before the final paragraph:

```
PRIMACY NOTE FOR ASSEMBLER: The single most critical conviction line (metaphor must be structural, not announced) belongs in the FIRST 3 lines of Section A1. At 87 rules, each rule competes for attention. The lines agents remember are the FIRST they read and the LAST they read before writing.
```

---

### MISSING-09-06 [IMPORTANT]

**Source:** Section 5, Reader-First Critique — 5 missing reader-first rules

> "Reader-first rules that should exist but don't:
> 1. 'The first viewport must answer: what is this page about?' -- Binary: does content above the fold communicate the topic? YES/NO.
> 3. 'The page has a beginning, middle, and end.' -- Binary: clear opening, substantive middle, closing/conclusion section.
> 4. 'No orphaned design elements.' -- Binary: every visual technique appears at least twice.
> 5. 'The page can be summarized in one sentence.' -- Test for thematic coherence."

**Status in FINAL:** ABSENT. The FINAL has the 5-act reader journey (A8) and "every visual texture promised in Act 1 MUST recur in Acts 2-4" — which partially covers #4 and #3. But #1 (first-viewport orientation), #4 (no single-use elements), and #5 (one-sentence summary test) are not binary rules in the execution spec.

**Classification:** IMPORTANT — #1 is verifiable and catches page identity failures early.

**Insertable text + placement:** Add to B7 PROCESS or B10 BUILDER SELF-CHECK:

```
READER-FIRST VERIFICATION (run after self-check):
[ ] First viewport communicates topic without scrolling: what is this page about? YES/NO
[ ] Page has clear beginning, middle, end (opening + substantive middle + conclusion section)
[ ] No single-use visual technique: every border treatment, zone background, typography variant appears >= 2x
[ ] Page summarizable in one sentence: [write it]. If you cannot, the reader won't know either.
```

---

### MISSING-09-07 [IMPORTANT]

**Source:** Section 7, Gap 2 — "Execution does not prepare for Coordination"

> "The builder will send a MINIMAL message... because the rule only requires sending A message, not a USEFUL message. The coordination spec cannot fix this because the builder doesn't read the coordination spec."
>
> Fix: "The builder's messaging rule should specify WHAT INFORMATION the planner needs: 'SendMessage to planner: (a) which section has the most content, (b) which section has the least, (c) estimated total scroll height. Planner will adjust mechanism density based on your answers.'"

**Status in FINAL:** B10 says ">>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<" and C2 COMMUNICATION PROTOCOL specifies CP-A format: "Container: ___px. Estimated height: ___px. Content-to-void: __:__. Biggest spatial concern: ___." The FINAL has content-aware messaging in C2 (which builders don't read) but B10's prompt to builders is vague ("spatial concern + void estimate").

**Classification:** IMPORTANT — builder-visible messaging spec needs to echo C2's specific format.

**Insertable text + placement:** Update B10 SendMessage line to:

```
>>> AFTER SELF-CHECK: SendMessage to planner — format: "Container: ___px. Height estimate: ___px. Content-to-void estimate: __:__. Most-content section: ___. Least-content section: ___. Biggest concern: ___." <<<
```

---

### MISSING-09-08 [IMPORTANT]

**Source:** Section 6, Recovery Pathway #4 — "QUALITY FLOOR THAT IS NOT A CEILING"

> "The current rules define a FLOOR with no ceiling. The builder satisfies the floor and stops... If the embedded auditor measures content-to-void at exactly 60:40, the builder MUST increase content by 20%."

**Status in FINAL:** ABSENT. The FINAL specifies 60:40 as the floor with no mechanism to push builders above the minimum.

**Classification:** IMPORTANT — the ceiling failure produced a 20-30% content ratio. The middle produced 65-70%. Setting 60:40 as floor without a ratchet mechanism guarantees builders aim for 60.

**Insertable text + placement:** Add to B7 PROCESS or P-08:

```
FLOOR-RATCHET RULE: Content-to-void floor (S-02: 60:40) is NOT the target. If embedded auditor reports exactly 60:40 or below, builder MUST add content to reach 70:30 before continuing. Floors become ceilings without this ratchet.
```

---

### MISSING-09-09 [NICE-TO-HAVE]

**Source:** Section 4, Emotional Architecture — Fear Gradient critique

> "The prompt creates a COMPLIANCE-ORIENTED agent, not a CREATIVE agent... Rewrite the preamble from fear-oriented to purpose-oriented: Replace 'The ceiling FAILED' with 'The ceiling achieved 9/9 novelty and 8/8 soul. Your job is to match that ambition with better spatial discipline.'"

**Status in FINAL:** A1 THESIS opens with "The difference between Flagship and Ceiling is not complexity. It is restraint." — purpose-oriented, not fear-oriented. The FINAL is already framed around ambition. The anti-skimming section notes "Conviction sandwich." ADEQUATELY ADDRESSED.

---

### MISSING-09-10 [NICE-TO-HAVE]

**Source:** Section 9, Wild Card 2 — Context Window Exhaustion

> "By Pass 4-5, agents have read outputs of all previous passes. If the Pass 4 agent's context window is 60% full before they read their prompt, effective attention budget is not 100 units but 40 units."

**Status in FINAL:** ABSENT. No guidance on managing context accumulation for late-pipeline agents.

**Classification:** NICE-TO-HAVE — E reference library already routes reads by agent role, which mitigates this, but there's no explicit "do not re-read prior pass outputs" directive for late agents.

---

## FILE 10: `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (Original 530-line version)

### Purpose
Identify anything PRESENT in the original 530-line prompt that is ABSENT or DEGRADED in the FINAL 695-line prompt. This is a "what was lost" check.

### Key Structural Differences Observed

1. **U-09 Font Stack — CRITICAL BUG IN ORIGINAL, FIXED IN FINAL**
   - Original (file 10): `U-09. Typography trinity: Instrument Serif / Source Sans 3 / Source Code Pro`
   - FINAL: `U-09. Typography trinity: Instrument Serif / Inter / JetBrains Mono`
   - Status: FINAL IS CORRECT. BG-02 fix applied. The original had wrong fonts. The FINAL is the authoritative version.

2. **CCS Formula — CRITICAL BUG IN ORIGINAL, FIXED IN FINAL**
   - Original (file 10, MC-01): `CCS = (mechanism_pairs_with_interaction / total_possible_pairs)`
   - FINAL (MC-01): `CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1)`
   - Status: FINAL IS CORRECT. BG-06 fix applied. The original pair-counting formula was wrong.

3. **C-01 Category Names — DIFFERENCE DETECTED**
   - Original (file 10): `Per-category minimums: Spatial:1+ Hierarchical:1+ Chromatic:1+ Density:1+ Navigational:1+`
   - FINAL: `Per-category minimums (mechanism catalog families): Spatial(S):1+ Hierarchy(H):1+ Component(C):1+ Depth/Emphasis(D):1+ Structure/Nav(N):1+`
   - Status: FINAL uses different category names than the original AND different from the TC skill's Phase 4 categories. The TC skill (file 11) lists: `Spatial (1+): #5,#6,#15; Hierarchy (1+): #1,#4,#11; Component (1+): #2,#9,#10,#17; Depth/Emphasis (1+): #3,#7,#16; Structure/Nav (1+): #8,#12,#13,#14,#18`. The FINAL aligns with the TC skill categories. IMPROVEMENT over original.

### MISSING-10-01 [IMPORTANT]

**Source:** File 10, MC-07 note and Section B5

> Original file 10 B5: `SC-02. >= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional.`

**Status in FINAL:** SC-02 ALSO includes full channel definitions (7 full paragraphs defining each channel). FINAL is MORE complete than original. NO GAP — FINAL IMPROVED.

### MISSING-10-02 [IMPORTANT]

**Source:** File 10, B10 BUILDER SELF-CHECK had 12 items. FINAL B10 has 16 items.

Comparing the two self-check lists:
- FINAL added: MC-01 (CCS >= 0.30), MC-02 (>= 3 reinforcing pairs), MC-06 (cascade), SC-08 (no scale with all channels)
- Both have: S-01, S-07, S-02, S-12, U-01-U-10, S-03+S-04, S-05, C-05+C-06, Token compliance, S-08, C-09, C-18

**Status:** FINAL has MORE items than original. NO items lost. IMPROVEMENT confirmed.

### MISSING-10-03 [CRITICAL]

**Source:** File 10, A5 — "Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms."

**Status in FINAL:** A5 in FINAL has the CD-006 worked example (the 4-act density arc with CCS worked calculation) and "The Ceiling deployed 14 mechanisms with CCS ~0.05 and scored DO NOT SHIP. CD-006 deployed ~6-12 with CCS ~0.55 and scored 39/40. Coupling, not count." The FINAL is MORE complete than the original. NO LOSS.

**Verdict on File 10 overall:** The FINAL prompt IMPROVED the original on all major points. No content was lost; the additions were all improvements. The BUG FIXES (fonts, CCS formula) are critical and correctly applied in FINAL.

---

## FILE 11: `11-tc-deep-invocation.md`

### What file 11 contains
- Exact invocation text for ALL TC pipeline phases (Phase 0 through Phase 5)
- Complete axis invocation table (14 axes with triggers and priorities)
- Technique catalog (40 techniques, T1-T40)
- Builder warning techniques (W1-W6)
- Enrichment-specific invocations

---

### MISSING-11-01 [CRITICAL]

**Source:** Section 1, Phase 0 — exact invocation text for Content Architect

> "0A. Content Type: prose-dominant (<30% code/tables) | mixed (30-60%) | visual-dominant (>60%) | self-referential (content IS the design system). Self-referential = ABORT pipeline. Apply defaults directly. Visual-dominant = PRESENTATION-INTRINSIC. Skip metaphor for visual portions.
> 0B. Scope: MICRO (<100 words, skip pipeline) | SHORT (100-500, reduced) | STANDARD (500-3000, full) | LONG (3000-10000, segment first) | MASSIVE (10000+, per-page)"

**Status in FINAL:** B8 TC PIPELINE ROUTING says "TC Phase 0 (Content Assessment): -> Content Architect (Opus). 14-axis questioning." The 14-axis routing is referenced but the content-type classification criteria (prose-dominant / mixed / visual-dominant thresholds), scope categories (MICRO/SHORT/STANDARD/LONG/MASSIVE with word-count cutoffs), and section-type classification (NARRATIVE/REFERENCE/CODE/DATA/MIXED) are ABSENT from the FINAL.

**Classification:** CRITICAL — without these classifications, the Content Architect has no routing criteria. The FINAL routes to the TC SKILL.md via the Reference Library (which DOES contain this), but the routing note in B8 is too sparse to confirm the agent will read the right part of the skill.

**Insertable text + placement:** Add to B8 TC PIPELINE ROUTING, Phase 0 line:

```
TC Phase 0 (Content Assessment): -> Content Architect (Opus). Classify:
  Content type: prose-dominant (<30% code) | mixed | visual-dominant (>60% code) | self-referential (ABORT)
  Scope: MICRO (<100w, skip) | SHORT (100-500w, reduced) | STANDARD (500-3000w, full) | LONG/MASSIVE (segment)
  Sections: NARRATIVE | REFERENCE | CODE | DATA | MIXED per section
```

---

### MISSING-11-02 [CRITICAL]

**Source:** Section 1, Phase 2 — Tension Derivation exact invocation

> "RICHNESS FORMULA: Opposition Depth (1-3) x Structural Overlap (1-3) x Metaphor Space Width (1-3). MULTIPLICATIVE: zero in any dimension = zero richness. Use to SELECT tensions (Phase 2) — do NOT use to select metaphors (Phase 3). Richness cap: high richness does NOT predict high quality. Perceptual risk gates override richness."
>
> "TENSION THRESHOLD GATE: 0 genuine tensions → zero-tension path, skip Phases 3-4, apply defaults. All cosmetic → cosmetic path, skip Phase 3, direct component mapping. 1+ genuine → proceed to Phase 3."

**Status in FINAL:** MG-01 through MG-05 cover metaphor quality gates but the RICHNESS FORMULA for tension selection and the TENSION THRESHOLD GATE (exit ramps when tension = 0 or all cosmetic) are ABSENT from the FINAL.

**Classification:** CRITICAL — without the tension threshold gate, the Metaphor Agent has no exit ramp when content has zero genuine tension. This would force a metaphor onto content that doesn't need one, producing an "announced" rather than structural metaphor.

**Insertable text + placement:** Add to B8 TC PIPELINE ROUTING, Phase 2 line:

```
TC Phase 2 (Tension Derivation): -> Metaphor Agent (Opus). Richness formula = Opposition(1-3) x Overlap(1-3) x Width(1-3). MULTIPLICATIVE.
  TENSION THRESHOLD GATE: 0 genuine tensions = skip Phases 3-4, apply defaults.
  All cosmetic tensions = skip Phase 3, direct component mapping.
  1+ genuine tensions = proceed to Phase 3.
```

---

### MISSING-11-03 [CRITICAL]

**Source:** Section 1, Phase 3 — Composite scoring criteria

> "3.5. COMPOSITE SCORING for each candidate: A. Tension Resolution... B. Structural Isomorphism Count (6+ = isomorphic, 4-5 = strong, 2-3 = thin, 0-1 = REJECT). C. Content Resonance — TWO dimensions: C1 Nominal (vocabulary) + C2 Structural (weight 2x higher than C1). D. Mechanism Feasibility (100% required or FAIL). E. Perceptual Risk Assessment (4 questions, 0-4 score). F. Perceptual Cost Assessment (5 questions)."
>
> "COMPOSITE VERDICT: PROCEED (Resolution >= N-1, Isomorphism >= 4, Structural Resonance >= MEDIUM, Feasibility 100%, Risk <= 2)"

**Status in FINAL:** MG-01 (6-criterion rubric >= 12/18), MG-02 (Interpretive Distance >= 2), MG-03 (6 rejection checks), MG-04 (structural test), MG-05 (spatial cost <= 15%). The COMPOSITE SCORING (A-F with specific thresholds: Isomorphism >= 4, Feasibility 100%, Risk <= 2) is ABSENT from the FINAL's MG rules.

**Classification:** CRITICAL — the Metaphor Agent uses MG-01 through MG-05 for the 6-criterion rubric but has no thresholds for the COMPOSITE SCORING (which includes isomorphism count and feasibility). A metaphor could pass the 6-criterion rubric but fail on structural isomorphism (only 2-3 independent mappings = "thin").

**Insertable text + placement:** Add to B6 METAPHOR GATES:

```
MG-06. Composite Scoring thresholds: Structural Isomorphism >= 4 (0-1 = immediate REJECT).
        Mechanism Feasibility: 100% expressible via 6 CSS channels (any soul violation = REJECT).
        Perceptual Risk Score <= 2 of 4 to proceed.
        Content Resonance Structural >= MEDIUM (weighted 2x over Nominal).
```

---

### MISSING-11-04 [IMPORTANT]

**Source:** Section 1, Phase 3 — Domain Search Menu and Incompatible Families

> "DOMAIN SEARCH MENU (scan all 10): Geological/Sedimentary, Architectural/Structural, Typographic/Editorial, Cartographic/Territorial, Industrial/Mechanical, Scientific/Laboratory, Legal/Contractual, Archival/Catalogic, Military/Strategic, Astronomical/Surveying.
> INCOMPATIBLE FAMILIES (ban): Organic/Biological, Liquid/Fluid, Atmospheric/Weather, Textile/Fabric, Musical (curves violate angular)."

**Status in FINAL:** MG-03 mentions "soul conflict" in the 6 rejection checks but does NOT enumerate the compatible domain categories or banned incompatible families. The FINAL routes to TC SKILL.md for this detail, but the domain search menu should be surfaced at least as a pointer.

**Classification:** IMPORTANT — Metaphor Agents may produce music/botanical/fluid metaphors that require soul violations. The 10-domain menu constrains the search before derivation.

**Insertable text + placement:** Add to B6 METAPHOR GATES or B8 TC PIPELINE ROUTING:

```
MG-07. Compatible metaphor domains (scan all 10): Geological, Architectural, Typographic, Cartographic, Industrial, Scientific, Legal, Archival, Military, Astronomical.
        BANNED families: Organic, Liquid, Atmospheric, Textile, Musical. All require curves that violate soul.
```

---

### MISSING-11-05 [IMPORTANT]

**Source:** Section 1, Phase 4 — Translation Grammar (lookup table) and 6 CSS channels

> "Translate via lookup: Weight (heavy=3px, light=1px). Depth (surface=#FEF9F5, middle=#FFFFFF, deep=#1A1A1A). Density (sparse=64-80px, medium=24-32px, dense=12-16px). Flow (sequential=flex column, parallel=grid, oscillating=alternating zones). Containment (bounded=3px, accented=4px left, open=spacing only). Hierarchy (primary=2.5-3rem display, secondary=1.625rem, tertiary=1.375rem italic, meta=0.75rem mono uppercase)."
>
> "6 EXHAUSTIVE CSS Channels: (1) Background color, (2) Border (3 categories, NEVER 2px), (3) Typography (3 fonts, 6 sizes), (4) Spacing (4-80px scale), (5) Layout (flex/grid/none), (6) Color accent (red structural, 5 accent for callouts)"

**Status in FINAL:** SC-02 defines the 7 channels but these are AUDIT channels, not CSS TRANSLATION channels. The translation grammar (specific pixel/color values per semantic concept) and the "NEVER 2px border" rule (from the 3 border categories) are ABSENT from the FINAL.

**Classification:** IMPORTANT — the "NEVER 2px" border rule prevents a common builder error (2px = neither structural nor separator). The translation grammar gives concrete values for metaphor-to-CSS conversion.

**Insertable text + placement:** Add to B2 SOUL or a new B2.5 TRANSLATION GRAMMAR note:

```
BORDER CATEGORIES (use exactly these, NEVER 2px):
  3-4px = structural containment
  1px   = separator / micro-detail
  [2px is prohibited — it reads as neither structural nor separator]

DENSITY ENCODING: sparse sections = 64-80px section spacing. Dense sections = 12-16px. Never use same spacing for adjacent sections of different density.
```

---

### MISSING-11-06 [IMPORTANT]

**Source:** Section 1, Phase 3.5 — Metaphor Commitment Gate (LOCK-IN)

> "3.5A. STATE your committed metaphor: ___. Write it down. This is LOCKED IN. You DO NOT change it after consulting the library.
> 3.5C. VERIFY commitment: Did I derive this independently? Can I justify without referencing library examples? Does this appear in case-studies/_INDEX.md titles?
> 3.5D. DIVERGENCE JUSTIFICATION (if convergence detected)"

**Status in FINAL:** B8 mentions "TC Phase 3.5 (Commitment Gate): -> Metaphor Agent + Team-Lead. Fractal gate (per-category minimum)." The LOCK-IN mechanics (state metaphor in writing, verify independent derivation, divergence justification if convergence detected) are ABSENT from the FINAL.

**Classification:** IMPORTANT — without the written commitment gate, the Metaphor Agent may subconsciously revise their metaphor after seeing library examples, producing pattern-matched rather than independently derived work.

**Insertable text + placement:** Add to B8 TC PIPELINE ROUTING, Phase 3.5 line:

```
TC Phase 3.5 (Commitment Gate): -> Metaphor Agent. STATE metaphor in writing BEFORE library access.
  LOCKED IN. Verify: independent derivation (yes?), no library reference needed (yes?).
  If derived metaphor appears in case-studies/_INDEX.md: document divergence justification (5 independent tests).
```

---

### MISSING-11-07 [IMPORTANT]

**Source:** Section 1, Phase 4 — Priority ordering when metaphor conflicts with guardrails

> "Priority when metaphor conflicts: (1) readability floors NEVER → (2) breathing zones NEVER → (3) content width NEVER → (4) metaphor fidelity ADJUST → (5) aesthetic LAST."

**Status in FINAL:** ABSENT. The FINAL has individual rules (container width, CPL, etc.) but no explicit priority order when metaphor requirements conflict with spatial guardrails.

**Classification:** IMPORTANT — without explicit priority, a Metaphor Builder may trade off container width for metaphor fidelity, reproducing the Ceiling failure mode (#1 failure).

**Insertable text + placement:** Add to B6 METAPHOR GATES or B7 PROCESS:

```
METAPHOR-VS-GUARDRAIL PRIORITY (when they conflict):
1. Readability floors (CPL 45-80, line-height 1.5+) — NEVER sacrifice
2. Breathing zones (min 48px between major sections) — NEVER sacrifice
3. Container width (940-1100px) — NEVER sacrifice
4. Metaphor fidelity — ADJUST metaphor to fit
5. Aesthetic preference — LAST priority
```

---

### MISSING-11-08 [IMPORTANT]

**Source:** Section 1, Phase 4 — Section-Aware Composition (T36)

> "Primary metaphor = through-line (palette, spacing, typography). Sections vary density, border weight, background. CODE = preserve structure. DATA = standard tables. NARRATIVE = full treatment."

**Status in FINAL:** ABSENT. The FINAL has no guidance on how different content section types (CODE / DATA / NARRATIVE / REFERENCE) receive different mechanism treatments.

**Classification:** IMPORTANT — a code-heavy research document might have 30% code sections. Without section-type guidance, the builder may apply full metaphor treatment to code blocks (illegible) or apply zero treatment (incoherent).

**Insertable text + placement:** Add to B3 COMPOSITIONAL or B11 CONTENT TRANSFORMATION:

```
SECTION-AWARE TREATMENT: Metaphor is the through-line but each section type receives calibrated treatment:
  NARRATIVE sections: full mechanism deployment + metaphor vocabulary
  CODE sections: preserve structure; style only (syntax highlighting, mono font)
  DATA sections: standard tables; metaphor in column headers only
  REFERENCE sections: standard components; metaphor in zone headers
```

---

### MISSING-11-09 [IMPORTANT]

**Source:** Section 1, Phase 4, Coherence Checking — 5-rule coherence check (T30)

> "C-1: Density direction consistent across ALL channels (if descent = denser: backgrounds darken, borders thicken, typography compresses, spacing decreases, layout tightens). C-4: Border category matches containment intent (3-4px structural, 1px separator, NEVER 2px). C-5: Accent color matches semantic role (red = structural emphasis, blue = info, green = tips, coral = gotchas, amber = caution, purple = essence)."

**Status in FINAL:** The B4 MULTI-COHERENCE covers MC-01 through MC-08 but does NOT include the 5 cross-channel coherence rules. Specifically: density direction consistency across all channels, border category matching containment intent, and accent color semantic roles are ABSENT.

**Classification:** IMPORTANT — these are builder-level checks (not auditor checks) that prevent incoherent channel deployments.

**Insertable text + placement:** Add to B3 COMPOSITIONAL or B10 BUILDER SELF-CHECK:

```
CHANNEL COHERENCE (5 checks, builder-level):
[ ] Density direction: if section gets denser, ALL channels co-vary (backgrounds darken, borders thicken, spacing decreases)
[ ] Border category: 3-4px = structural, 1px = separator. NEVER 2px.
[ ] Accent color semantics: red = structural emphasis, blue = info, green = tips, coral = gotchas, amber = caution
[ ] Transition strength matches axis distance: same-axis = SMOOTH, adjacent = BRIDGE, distant = BREATHING
[ ] Typography role matches authority: display serif = highest, body sans = standard, mono = precision
```

---

### MISSING-11-10 [NICE-TO-HAVE]

**Source:** Section 3D — Builder Warning Techniques (W1-W6)

> "W1: W-DEADZONE — 'MAXIMUM breathing zone 48px. Section transitions = CHANGING STATE (background shift, border change, density gradient), NOT EMPTY SPACE.'
> W2: W-OVERLABEL — 'Use STRUCTURAL GRADIENTS, NOT TEXT LABELS. Reader should FEEL metaphor without READING about it.'
> W3: W-MONOTONY — 'Vary element sizes by CONTENT IMPORTANCE. 6+ same-shaped elements → break into groups.'
> W6: W-IMPLICIT — 'Best layouts make reader FEEL metaphor without NAMING it. Test: remove all metaphor labels — does layout still communicate?'"

**Status in FINAL:** MG-04 (structural test for metaphor) addresses W6. S-09 (max 96px gap) addresses W1 indirectly. But the explicit WARNING SYSTEM (W1-W6 as builder prompts) is ABSENT.

**Classification:** NICE-TO-HAVE — these are excellent builder mnemonics but most are already implied by existing rules.

---

## FILE 12: `12-pa-deep-invocation.md`

### What file 12 contains
- 9-auditor load-balanced PA assignment table with time estimates
- PA-50-53 full void detection pipeline invocation (detect/quantify/classify/assess)
- PA-05 4-sub-criterion scoring protocol with calibration anchors
- Gate-then-ranking rubric invocation
- Screenshot pre-capture protocol (complete Playwright configuration)
- Calibration and warm-up text
- Execution spec PA gate rules (PA-SPATIAL-01 through PA-LANDMARK-01)

---

### MISSING-12-01 [CRITICAL]

**Source:** Section 2, PA-50-53 — Exact invocation text for Auditor C

> "PA-50 (VOID DETECTION — answer FIRST): Starting from top, scroll through every viewport-height at 1440px. Count consecutive positions below 30%. Record longest consecutive run."
>
> Answer format specified: total positions examined, positions below 30%, longest consecutive run, positions above 70%.

**Status in FINAL:** B9 routes PA-50 through PA-53 to Auditor C and gives the sequence "detect -> quantify -> classify -> assess." C4 lists Auditor C's questions. But the EXACT invocation text (what Auditor C's prompt should contain, including the answer format and calibration context "24 consecutive frames of blank cream in Ceiling experiment") is ABSENT from the FINAL.

**Classification:** CRITICAL — C4 says "see SKILL.md for assignments" but the invocation text is in file 12, not in the skill. If Auditor C doesn't receive the exact invocation text, PA-50-53 may be answered with different granularity or format than required for pipeline integration.

**Insertable text + placement:** Add to C4 PA DEPLOYMENT or reference that Auditor C must receive the file 12 invocation:

```
AUDITOR C VOID PIPELINE (exact invocation required — see 12-pa-deep-invocation.md Section 2):
PA-50 answer format: total positions examined, positions below 30%, LONGEST CONSECUTIVE RUN, positions above 70%
PA-51 classification: DENSE (>80%) / BALANCED (60-80%) / SPARSE (40-60%) / VOID-DOMINATED (<40%)
PA-52 per-third: does this third have a designed moment? YES/NO + describe. Distribution classification.
PA-53 width: 65-80% = CONFIDENT. <65% = NARROW. >85% = STRETCHED.
Calibration: Ceiling experiment = VOID-DOMINATED at 20-30% content. Middle = BALANCED at 65-70%.
```

---

### MISSING-12-02 [CRITICAL]

**Source:** Section 5, Screenshot Pre-Capture Protocol — Playwright configuration and viewport sequence

> "STEP 2: PLAYWRIGHT CONFIGURATION — Inject animation-disabling CSS, await document.fonts.ready BEFORE any screenshot. STEP 3: Capture at THREE viewports (1440px, 768px, 1024px). Scroll-through: 80% step (720px per scroll at 900px viewport). Cold look: fullPage: true. STEP 4: Naming convention. Expected count: 40-60 screenshots for flagship."

**Status in FINAL:** C4 says "Screenshot pre-capture: Team-lead captures ALL screenshots BEFORE spawning auditors. 4 viewports: 1440px, 1024px, 768px, 480px. Cold look + full scroll at each. 50-80 screenshots." The count matches, but the SPECIFIC Playwright configuration code (animation-disabling injection, `document.fonts.ready`, scroll step calculation, naming convention) is ABSENT. The team lead has no concrete spec for HOW to capture.

**Classification:** CRITICAL — without the Playwright configuration (especially `document.fonts.ready`), screenshots may be taken before fonts load, producing incorrect character counts and line heights that invalidate CPL measurements.

**Insertable text + placement:** Add to C4 PA DEPLOYMENT, after the screenshot pre-capture line, or as a reference to file 12:

```
PLAYWRIGHT CAPTURE REQUIREMENTS (see 12-pa-deep-invocation.md Section 5 for full code):
1. Inject animation-disable CSS before ANY screenshot (animation: none !important; opacity: 1 !important)
2. await document.fonts.ready MUST complete before capture (font loading affects computed styles)
3. Wait 300ms after viewport resize before capture
4. Scroll step: 80% of viewport height (720px at 900px viewport)
5. File naming: cold-look-{width}.png + scroll-{width}-{NN}.png (zero-padded)
```

---

### MISSING-12-03 [CRITICAL]

**Source:** Section 3, PA-05 Sub-Criteria — exact text for PA-05c PROPORTIONATE (3 sub-dimensions)

> "ALL THREE sub-dimensions must PASS for PA-05c to PASS. If ANY single sub-dimension FAILS, PA-05c = FAIL. Name the failing sub-dimension(s)."
>
> "PA-05c-3a HORIZONTAL PROPORTION: 65-80% viewport width at 1440px. PA-05c-3b VERTICAL PROPORTION: designed moment in each third. PA-05c-3c BREATHING PROPORTION: is negative space designed or abandoned?"

**Status in FINAL:** B9 says "PA-05 scoring: -> All auditors contribute. 4 sub-criteria: Designed, Coherent, Proportionate, Polished." The 4 sub-criteria are listed but the PA-05c EXPANSION into 3 sub-dimensions (3a horizontal, 3b vertical, 3c breathing) with the ALL-THREE-MUST-PASS rule is ABSENT.

**Classification:** CRITICAL — without the 3 sub-dimension expansion, Auditor A may give PA-05c a single pass/fail that misses the distinction between horizontal and vertical proportion failures (as occurred in the Ceiling, where vertical was catastrophic but horizontal was acceptable).

**Insertable text + placement:** Add to C4 PA DEPLOYMENT, after the PA-05 scoring line:

```
PA-05c PROPORTIONATE = THREE sub-dimensions, ALL must pass independently:
  PA-05c-3a (Horizontal): content container = 65-80% viewport width. Below 65% = FAIL.
  PA-05c-3b (Vertical): designed moment in each page third (0-33%, 33-66%, 66-100%). Any empty third = FAIL.
  PA-05c-3c (Breathing): negative space designed (silence), not abandoned (void). Judgment call.
  ALL THREE must pass for PA-05c to pass. Name failing sub-dimension(s).
```

---

### MISSING-12-04 [IMPORTANT]

**Source:** Section 6, Calibration — Fresh-eyes principle and language rules

> "LANGUAGE RULES: Do NOT use CSS property names (px, rem, padding, margin, font-size, etc.). DO use perceptual language (cramped, spacious, heavy, light, jarring, smooth, etc.). Describe what you SEE and FEEL, not what you KNOW about the underlying code."

**Status in FINAL:** C4 says "Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR), evidence, recommendation. Each non-finding: 'NO FINDING for PA-XX' (mandatory)." The FRESH-EYES PRINCIPLE (zero context about mechanisms, targets, or tier) and LANGUAGE RULES (no CSS vocabulary in PA findings) are ABSENT.

**Classification:** IMPORTANT — auditors who know mechanism counts may unconsciously calibrate their findings to expected richness levels. The fresh-eyes isolation and perceptual language constraint are essential to valid PA.

**Insertable text + placement:** Add to C4 PA DEPLOYMENT, after the COLD LOOK PROTOCOL:

```
FRESH-EYES ISOLATION: Auditors receive ONLY screenshots + PA questions. Zero context about:
  - Mechanism count, metaphor, tier target, build plan, previous experiment scores.
LANGUAGE RULES: No CSS vocabulary in findings (no "px", "rem", "padding").
  Use perceptual language only: cramped, spacious, heavy, light, jarring, smooth, rhythmic, void.
```

---

### MISSING-12-05 [IMPORTANT]

**Source:** Section 4, Rubric Flow Gate-Then-Ranking — complete invocation text for Weaver-Synthesizer

> "SYNTHESIS RULES: Do NOT dismiss auditor findings because they conflict with expectations. Do NOT inflate scores to match targets. If auditors unanimously flag a concern (as 9/9 did with the ceiling void), treat it as DEFINITIVE regardless of quantitative guardrail measurements. Corroboration count matters: 1/9 = anecdotal, 3/9 = pattern, 5/9 = consensus, 7/9 = near-universal, 9/9 = definitive."

**Status in FINAL:** C5 GATE-THEN-RANKING has severity corroboration ("5+ auditors agree on severity -> auto-escalate one tier") but MISSING: the corroboration scale (1/9 = anecdotal through 9/9 = definitive) and the explicit prohibition on dismissing findings that conflict with targets.

**Classification:** IMPORTANT — without the corroboration scale, the synthesizer may treat "5+ auditors agree" as a heuristic rather than a graded system.

**Insertable text + placement:** Add to C5, after the SEVERITY SYSTEM:

```
CORROBORATION SCALE (definitive thresholds):
  1/9 = anecdotal (note, do not act)
  3/9 = pattern (flag)
  5/9 = consensus (escalate severity one tier)
  7/9 = near-universal (treat as WOULD-NOT-SHIP minimum)
  9/9 = definitive (override quantitative measurements)

SYNTHESIS PROHIBITIONS: Do NOT dismiss findings because they conflict with expectations. Do NOT inflate scores to match targets. 9/9 auditors unanimously flagging a void = DEFINITIVE, even if content-to-void measurement shows 61%.
```

---

### MISSING-12-06 [IMPORTANT]

**Source:** Section 8, Execution Spec PA Gate Rules

> "PA-RHYTHM-01: No more than 4 consecutive sections may use identical spacing values. 5+ identical = monotony FAIL.
> PA-LANDMARK-01: Footer element must exist AND be reachable within 1 viewport-height of the last content section. Footer buried under void = FAIL."

**Status in FINAL:** C-06 (no identical adjacent transitions), S-04 (footer must exist), and MC-08 (anti-metronome >= 3 distinct spacing values) cover these partially, but the specific rules "no more than 4 consecutive identical-spacing sections" and "footer within 1 viewport-height of last content" are NOT in the execution spec.

**Classification:** IMPORTANT — the 4-consecutive-identical rule is more specific than MC-08 (which only requires 3 distinct values total, not preventing runs of 4).

**Insertable text + placement:** Add to B3 COMPOSITIONAL or B1 SPATIAL:

```
S-16. Footer reachability: footer must be within 1 viewport-height (900px at 1440px) of last content section. Footer isolated under void = FAIL.
C-11b. No more than 4 consecutive sections may use identical spacing values. 5+ identical = monotony FAIL (stronger than MC-08's 3-distinct-total requirement).
```

---

### MISSING-12-07 [NICE-TO-HAVE]

**Source:** Section 7, Conviction Layer Text

> "Build for the reader. The audit will verify. The perceptual audit cannot be gamed. It cannot be pre-optimized. It cannot be studied in advance. It measures the gap between 'passes every rule' and 'is genuinely good.' That gap is where quality lives."

**Status in FINAL:** Section D CONVICTION CLOSING has "You are building a warm, authoritative, unhurried page. Every rule above is a guardrail, not the destination." Similar in spirit but the PA-specific conviction language ("the audit cannot be gamed") is ABSENT.

**Classification:** NICE-TO-HAVE — strengthens conviction layer but not blocking.

---

## CONSOLIDATED GAP SUMMARY

### CRITICAL Gaps (must fix before experiment)

| ID | Source | Rule/Spec Missing | Placement |
|----|--------|------------------|-----------|
| MISSING-08-01 | 08 | 3-step deployment workflow (select → connect → distribute) | B3 before MECHANISMS |
| MISSING-09-03 | 09 | Reader Proxy agent (Pass 2.5) + conditional gate | C1, C3 |
| MISSING-11-01 | 11 | TC Phase 0 classification criteria (content type + scope + section type) | B8 Phase 0 |
| MISSING-11-02 | 11 | Tension Threshold Gate + Richness Formula | B8 Phase 2 |
| MISSING-11-03 | 11 | Composite Scoring thresholds (isomorphism, feasibility, risk) → MG-06 | B6 |
| MISSING-12-01 | 12 | PA-50-53 exact invocation + answer formats + calibration | C4 |
| MISSING-12-02 | 12 | Playwright capture spec (animation disable, fonts.ready, scroll step) | C4 |
| MISSING-12-03 | 12 | PA-05c 3 sub-dimensions with ALL-THREE-MUST-PASS rule | C4 |

### IMPORTANT Gaps (should fix if possible)

| ID | Source | Rule/Spec Missing | Placement |
|----|--------|------------------|-----------|
| MISSING-08-03 | 08 | PA-05c / PA-52 overlap warning for synthesizer | C5 |
| MISSING-08-04 | 08 | PA-17/41 reconciliation guidance in C5 (not just B9) | C5 |
| MISSING-08-05 | 08 | Auditor C load note + time allocation | C4 |
| MISSING-08-07 | 08 | Designed moment definition (IS / IS NOT) | B10 |
| MISSING-08-08 | 08 | Gate time budget (15-20 min max per gate, 120 min total) | C3 |
| MISSING-08-09 | 08 | ROI rationale for staged downgrade (93% in 160 min) | C4 |
| MISSING-09-04 | 09 | Moment arc requirement (escalating intensity not just presence) | A8 or B3 |
| MISSING-09-06 | 09 | Reader-first verification (first viewport, beginning/middle/end, orphan check, one-sentence test) | B7 or B10 |
| MISSING-09-07 | 09 | Specific message format in B10 (not just "spatial concern") | B10 |
| MISSING-09-08 | 09 | Floor-ratchet rule (if exactly 60:40, must reach 70:30) | B7 or P-08 |
| MISSING-11-04 | 11 | Domain search menu (10 domains) + incompatible families ban | B6 → MG-07 |
| MISSING-11-05 | 11 | NEVER 2px border rule + density encoding reference values | B2 |
| MISSING-11-06 | 11 | Metaphor commitment LOCK-IN mechanics | B8 Phase 3.5 |
| MISSING-11-07 | 11 | Metaphor-vs-guardrail priority ordering | B6 or B7 |
| MISSING-11-08 | 11 | Section-aware treatment (CODE/DATA/NARRATIVE/REFERENCE) | B3 or B11 |
| MISSING-11-09 | 11 | 5-rule channel coherence check (density direction, border category, accent color) | B3 or B10 |
| MISSING-12-04 | 12 | Fresh-eyes isolation + perceptual language rules for auditors | C4 |
| MISSING-12-05 | 12 | Corroboration scale (1/9=anecdotal through 9/9=definitive) + synthesis prohibitions | C5 |
| MISSING-12-06 | 12 | Footer reachability rule + 4-consecutive-spacing monotony rule | B1 or B3 |

### NICE-TO-HAVE Gaps (low priority)

| ID | Source | Rule/Spec Missing | Placement |
|----|--------|------------------|-----------|
| MISSING-08-10 | 08 | Anti-void triad pattern labeling (PREVENT-DETECT-DETECT) | B1 heading |
| MISSING-09-09 | 09 | Primacy note for assembler (critical conviction in lines 1-10) | Section D |
| MISSING-11-10 | 11 | Builder Warning System (W1-W6 explicit mnemonics) | B3 |
| MISSING-12-07 | 12 | PA conviction language ("audit cannot be gamed") | Section D |

---

## ITEMS CONFIRMED PRESENT IN FINAL (No Gap)

- Font stack correction (Inter/JetBrains Mono) — BG-02 FIXED
- CCS formula (removal test, not pair-counting) — BG-06 FIXED
- Total visual gap (margin-bottom + padding-top <= 96px) — S-09
- Content quality gate (B11 + Gate 0.5) — CT-01 through CT-08
- Conviction sandwich (A-D structure) — confirmed
- Metaphor structural kill switch (MG-04) — confirmed
- Stage downgrade at 240 min — C4
- Reader journey 5-act arc (A8) — confirmed
- Mechanism deployment vs operating distinction — C-03 clarified
- PA-17/41 primary routing — B9

---

**END SCAN-B AUDIT**

**Total findings:** 24 (8 CRITICAL + 16 IMPORTANT + 4 NICE-TO-HAVE)
**Total confirmed-present:** 10
**Most urgent for integration:** MISSING-12-02 (Playwright config — affects all screenshot capture), MISSING-12-03 (PA-05c sub-dimensions — affects flagship gate), MISSING-11-02 (Tension Threshold Gate — affects metaphor pipeline exit ramps), MISSING-09-03 (Reader Proxy — architectural gap)
