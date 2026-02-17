# INTEGRATOR: Missing Items from v2 -- Exact Insertable Text

**Author:** INTEGRATOR (Opus 4.6)
**Date:** 2026-02-17
**Purpose:** 14 items present in INTEGRATOR's 1,030-line version but absent from team-lead's v2 (732 lines)
**Format per item:** ID, Source, Priority, Exact Insertable Text, Placement

---

## ITEM 1: S-16 / S-17 (Content Weight Rules)

**Source:** `04-adversarial-enrichment-spec.md`, Enrichment 5 (lines 356-391)
**Priority:** IMPORTANT -- Catches "technically populated but perceptually sparse" sections. This is the gap between S-05 (>= 200px rendered height) and actual visual substance. The ceiling experiment had sections that PASSED S-05 but were perceptually void. However, CQG-02 in the existing Gate 0.5 already requires >= 5 sections with >= 200 words each, which partially covers this. S-16/S-17 add per-section ELEMENT diversity checking that CQG-02 does not.

**Exact Insertable Text:**

```
CONTENT WEIGHT (FM-1 Prevention):
  S-16. Content Weight Check: each content section MUST have:
        >= 3 discrete visual elements (paragraphs, code blocks, tables,
        diagrams, callouts, lists each count as 1 element).
        >= 2 distinct content TYPES per section (e.g., prose + code,
        or prose + table, or prose + diagram).
        Verify: for each <section>, count child elements by type.
        FAIL = section is "technically populated but perceptually sparse."

  S-17. Visual Weight Score per section (automated, run at gates):
        Score = (paragraphs * 1) + (code_blocks * 2) + (tables * 3)
              + (diagrams * 4) + (callouts * 2) + (lists * 1)
        Minimum per section: 5.
        FAIL = section lacks visual substance.
```

**Placement:** Section B1 (Spatial), after S-15 (Zone count ceiling). Would make B1 go from 15 rules to 17 rules. Also add to B10 self-check: `[ ] S-16: Every section has >= 3 elements, >= 2 types`.

---

## ITEM 2: MG-06 (Metaphor Soul Compatibility)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 07-B (lines 117-127)
**Priority:** IMPORTANT -- Binary soul compatibility check that is NOT currently covered by MG-01 through MG-05. MG-03 mentions "R1-R6 rejection checks" but does not include an explicit soul-conflict table. This prevents the builder from designing a metaphor that requires gradients/shadows/border-radius and then discovering the conflict mid-build. However, it partially duplicates MG-03's R1 check ("soul conflict"). The difference: MG-06 is a 4-channel YES/NO table (very binary, very agent-executable), while MG-03's R1 is a freeform check. MG-06 is more reliable for agents.

**Exact Insertable Text:**

```
MG-06. Metaphor soul compatibility: metaphor agent fills YES/NO table for 4 channels
       (gradients, shadows, cool tones, border-radius). Conflict count MUST = 0.
       Any channel the metaphor requires but soul prohibits = REDESIGN metaphor.
```

**Placement:** Section B6 (Metaphor Gates), after MG-05. Would make B6 go from 5 rules to 6 rules.

---

## ITEM 3: P-01b (Spatial Budget Calculation Template)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 03-A (lines 12-28)
**Priority:** IMPORTANT -- Makes the planner's spatial budget gate EXECUTABLE. Without this template, P-01 says "content inventory BEFORE metaphor" but the planner has no formula for estimating page height vs content height. The formulas come from File 03 (Spatial Confidence Gate) and were validated against the ceiling experiment's actual pixel measurements. However, the planner reads File 03 directly via Section E reference routing, so this is partially available through reading assignment. Including it inline makes the template impossible to skip.

**Exact Insertable Text:**

```
P-01b. Spatial budget calculation TEMPLATE (planner MUST produce this table):
       body_text_px = word_count / 12 * 30.6
       code_block_px = code_lines * 22.3
       table_px = table_rows * 40
       heading_px = heading_count * 55
       zone_padding_px = zone_count * avg_zone_padding * 2
       transition_px = transition_count * avg_transition_gap
       TOTAL = content_px + overhead_px
       Ratio = content_px / TOTAL >= 0.60. This table MUST appear in build plan.
```

**Placement:** Section B7 (Process), after P-01. Would add 9 lines to B7.

---

## ITEM 4: P-01c (Intentionality Pre-Planning)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 09-C (lines 440-453)
**Priority:** IMPORTANT -- Prevents Pass 4 (intentionality) from producing cosmetic bolt-on additions rather than structurally integrated elements. The ceiling experiment had zero intentionality; the risk for flagship is that Pass 4 produces SURFACE intentionality (appended bookend, inserted bridge text) without structural integration. This rule requires the content architect to specify intentionality hooks UP FRONT so Pass 1's skeleton accounts for them. Genuine new coverage -- nothing in the current prompt addresses this.

**Exact Insertable Text:**

```
P-01c. Intentionality pre-planning: the content architect (Pass 0) MUST specify
       at least 2 intentionality hooks in the content architecture document:
       "Section X will include a self-referential element showing [specific
       content-form relationship]. The final section will echo the opening with
       [specific resolution]." These are STRUCTURAL decisions that Pass 1's
       skeleton must account for. Pass 4 ELABORATES these hooks, not invents them.
```

**Placement:** Section B7 (Process), after P-01b (or after P-01 if P-01b is not added). Would add 7 lines to B7.

---

## ITEM 5: P-06b (Anti-Ambition Audit)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 08-A (lines 145-157)
**Priority:** CRITICAL -- Directly prevents the ceiling experiment's dominant failure mode (over-ambition). The ceiling attempted 14 mechanisms, 4 scales, elaborate metaphor -- all technically achievable individually but collectively exceeding spatial capacity. No current rule checks the CUMULATIVE spatial cost of all planned additions. This is the single most important missing item. The flagship-crossref spec ranked it BLOCKING #1 of 28 items.

**Exact Insertable Text:**

```
P-06b. Anti-ambition audit: a SEPARATE agent (not planner, not builder) reads the
       build plan and answers: "What is the SIMPLEST version that meets flagship
       requirements? Describe in 3 sentences." Planner lists EVERY addition beyond
       this simplest version with its spatial cost in pixels. Any addition with
       spatial cost > perceptual benefit = REMOVE. Any addition without a
       1-sentence perceptual benefit statement = REMOVE.
```

**Placement:** Section B7 (Process), after P-06. Would add 6 lines to B7.

---

## ITEM 6: P-08b (Voice Continuity Across Passes)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 09-B (lines 426-438)
**Priority:** NICE-TO-HAVE -- Addresses the risk of 3 different agents (skeleton Sonnet, mechanism Sonnet, intentionality Opus) producing 3 distinct stylistic voices. However, PA-05b (COHERENT sub-criterion: "one designer, no dialect shifts") already captures this at audit time. P-08b makes it a BUILD-TIME instruction rather than POST-BUILD detection. The benefit is marginal because: (a) all agents use the same tokens.css, (b) Pass 2 and Pass 3 builders already read Pass 1's HTML per the handoff protocol, (c) PA will catch voice shifts anyway. Included in my original version but honestly low priority.

**Exact Insertable Text:**

```
P-08b. Voice continuity across passes: Pass 2 and Pass 3 builders MUST read Pass 1's
       HTML before writing. Match prose style, heading patterns, comment conventions,
       and structural patterns from Pass 1. The page must read as ONE designer's work.
       PA-05b (COHERENT) applies to HTML content voice, not just CSS tokens.
```

**Placement:** Section B7 (Process), after P-08. Would add 4 lines to B7.

---

## ITEM 7: C-09b (Climax Positioning)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 15-C (lines 256-268)
**Priority:** IMPORTANT -- Prevents front-loaded visual weight (the ceiling experiment positioned its best element at 10-15%, making everything after feel like decline). C-09 requires ">= 1 designed moment per scroll quartile" but does NOT specify where the STRONGEST moment should be. The 40-60% climax position is empirically grounded in the perceptual hierarchy analysis and directly operationalizes the A8 reader journey's "Act 3: Deep Dive" as the visual climax.

**Exact Insertable Text:**

```
C-09b. Climax positioning: the single HIGHEST-WEIGHT visual element (dark inset,
       complex grid, full-width diagram) MUST be at 40-60% scroll depth. NOT in
       the first 25%. The ceiling experiment front-loaded at 10-15% and everything
       after felt like decline. The climax is the REWARD for scrolling.
```

**Placement:** Section B3 (Compositional), after C-09. Would add 4 lines to B3.

---

## ITEM 8: Reader Proxy Agent (Gate 4.5)

**Source:** `04-adversarial-enrichment-spec.md`, Enrichment 2 (lines 85-142)
**Priority:** NICE-TO-HAVE -- A zero-context Sonnet agent that reads the page AS A READER and answers 7 yes/no questions. Genuine new coverage (no agent in the current pipeline evaluates reader EXPERIENCE as opposed to TECHNIQUE). However, the existing Gate 5 Mode 4 PA with 9 auditors already includes PA-01 (first impression), PA-12 (eye flow), PA-35 (engagement), and PA-45 (highlight presence), which collectively cover most of the Reader Proxy's 7 questions. The key unique value is Q1 ("Within 5 seconds, did you understand what this page is about?") and Q7 ("Does the page feel complete?") -- but PA-01 and S-04 cover these respectively. Adding another agent adds ~15-20 minutes and coordination complexity. On balance, this duplicates Mode 4 PA coverage with marginal unique value.

**Exact Insertable Text:**

```
PASS 4 (addition):
  - Reader Proxy (Sonnet): Gate 4.5 (after metaphor coherence, before Mode 4 PA).
    ZERO design system context. Receives ONLY the HTML file + viewport screenshot.
    7 YES/NO questions: (1) understood in 5 seconds? (2) want to keep scrolling?
    (3) identify 3 main ideas? (4) felt lost? (5) felt bored? (6) bookmark?
    (7) feels complete? BLOCKING: Q1=YES and Q7=YES required. Q4=YES or Q5=YES
    triggers targeted fix review. Agent MUST NOT receive execution prompt, metaphor
    derivation, build plan, or any preparation document.
```

**Placement:** Section C1 (Agent Roster), add to Pass 4 block. Add "Gate 4.5: Reader Experience" to C3 gate sequence between Gate 4 and Gate 5.

---

## ITEM 9: Metacognitive Reviewers (3 zero-context Opus agents)

**Source:** `05-flagship-crossref-spec.md`, Missing Item 17-B (lines 321-335)
**Priority:** NICE-TO-HAVE -- 3 zero-context Opus agents at 3 pipeline stages (Pre-Mortem before Pass 1, Mid-Pipeline after Pass 2, Post-Build after Pass 4). Each receives ONLY HTML/screenshots, zero build context, and answers one key question. The flagship-crossref spec ranked this as BLOCKING #3, but I'm downgrading to NICE-TO-HAVE because: (a) 3 additional Opus agents add significant cost and coordination; (b) the Reader Proxy (Item 8) covers the Post-Build reviewer's function; (c) the Pre-Mortem function is partially covered by P-06b (anti-ambition audit); (d) the Mid-Pipeline function is partially covered by P-08's spatial re-check after Pass 2. The unique value is the zero-context perspective, but Mode 4 PA already provides 9 zero-context perspectives at Gate 5.

**Exact Insertable Text:**

```
METACOGNITIVE REVIEWERS (3 zero-context Opus agents, team-lead managed):
  Pre-Mortem (before Pass 1): receives build plan ONLY. "Assume this fails.
    What is the single most likely cause?" 1 paragraph. If cause = spatial,
    team-lead adds explicit spatial constraint to builder prompt.
  Mid-Pipeline (after Pass 2): receives HTML + screenshots ONLY. "What has
    been lost from the original vision?" If answer names spatial proportion,
    trigger P-08 re-check immediately.
  Post-Build (after Pass 4, before Mode 4): receives HTML + screenshots ONLY.
    "Crown jewel or well-executed technical document? Single most improving change?"
```

**Placement:** Section C1 (Agent Roster), as new block after Pass 4 agents. Would add 9 lines to C1.

---

## ITEM 10: Per-Agent Contracts (C1b)

**Source:** `08-synthesis-enrichment-spec.md`, Enrichment 6 (lines 213-251)
**Priority:** NICE-TO-HAVE -- Formal RECEIVES / MUST PRODUCE / VERIFICATION contracts per agent. This is team-lead reference material that makes gate verification mechanical rather than improvised. However, the current C1 already specifies each agent's inputs and outputs, and Section E routes file reading assignments. The contracts add VERIFICATION methods (what to check at gates), but the gate sequence in C3 already specifies binary checks. The contracts are a repackaging of information already present across C1, C3, and E -- convenient but not new coverage. My original version had these; honestly they're organizational sugar, not new enforcement.

**Exact Insertable Text:**

```
PER-AGENT CONTRACTS (team-lead verifies at gate boundaries):

BUILDER (each pass):
  RECEIVES: ~75 lines (spatial + soul + mechanism table + self-check)
  MUST PRODUCE: Checkpoint A (container width + height + content-to-void + concern) +
                HTML file + Checkpoint B (height + ratio + token% + CPL + self-check)
  VERIFICATION: Checkpoint A has 4 fields. Checkpoint B has 6 fields.

PLANNER:
  RECEIVES: Metaphor derivation + mechanism catalog + spatial budget template
  MUST PRODUCE: Build plan with spatial budget table (>= 60%) + mechanism allocation
                (S:1+ H:1+ C:1+ D:1+ N:1+) + transition plan (3+ types)
  VERIFICATION: Gate 0 checks ratio. Mechanism table has 5 categories each >= 1.

METAPHOR AGENT:
  RECEIVES: Conviction layer + content summary + crown jewels
  MUST PRODUCE: Metaphor derivation with rubric >= 12/18 + structural obligations table
  VERIFICATION: Gate 4 fresh-eyes test (>= 70% structural without labels).

PA AUDITORS (each):
  RECEIVES: Pre-captured screenshots + assigned PA questions. ZERO TC context.
  MUST PRODUCE: Finding report with entry per question (finding OR "NO FINDING")
  VERIFICATION: All assigned questions addressed. Zero gaps across 9 auditors.
```

**Placement:** Section C1 (Agent Roster), as new subsection C1b after the agent roster. Would add ~22 lines.

---

## ITEM 11: Section F -- Calibration Run

**Source:** `04-adversarial-enrichment-spec.md`, Enrichment 6 (lines 394-508)
**Priority:** NICE-TO-HAVE -- A CEILING-tier calibration run to test the pipeline before committing to flagship. Tests gate sequence, agent handoffs, content transformation, and spatial re-checks at lower stakes. However, this is a PRE-EXPERIMENT protocol, not part of the execution prompt itself. The team-lead decides whether to run a calibration session based on confidence level. Including it in the master execution prompt conflates the execution spec (what to do during the flagship) with the experiment planning spec (whether to do a dry run first). The team-lead already has access to the source file. Best left as a separate protocol document rather than embedded in the prompt.

**Exact Insertable Text:**

```
================================================================
SECTION F: CALIBRATION RUN (Pre-Flagship Validation, OPTIONAL)
================================================================

PURPOSE: Test pipeline at CEILING tier before flagship commitment.
CONTENT: RESEARCH-SYNTHESIS.md (same as flagship). TIER: CEILING.
PASSES: 3 (skeleton, mechanisms, light metaphor). Skip Pass 4.

REDUCED ROSTER: Content Architect + Content Writer + Metaphor Agent +
  1 Skeleton Builder + Mechanism Builder + Embedded Auditor. Team-lead gates.

GATES (subset): Gate 0, Gate 0.5, Gate 1, Gate 3 (reduced). No Gate 4/4.5/5.
QUICK AUDIT: 2 PA auditors (PA-05 only) + 1 programmatic audit.

SUCCESS CRITERIA:
  CAL-01. Gate 0.5 passes on first attempt.
  CAL-02. Gate 1 passes within 1 fix cycle.
  CAL-03. Spatial re-check: <= 10pp content-to-void degradation after Pass 2.
  CAL-04. Quick PA: PA-05 >= 3/4.
  CAL-05. Total time <= 180 minutes.

ALL 5 PASS: Proceed to flagship. ANY FAIL: Fix rules before flagship.
TIME BUDGET: 150-180 minutes.
```

**Placement:** After Section E (Reference Library), as Section F. Would add ~23 lines.

---

## ITEM 12: Visual Weight Targets in A8

**Source:** `05-flagship-crossref-spec.md`, Missing Item 15-A (lines 225-242)
**Priority:** IMPORTANT -- Operationalizes "spatial confidence" into per-act weight targets on a 10-point scale. Without these numbers, A8's 5-act structure is conviction text without actionable thresholds. The weight curve (7 -> 4 -> 9 -> 6 -> 5) gives the builder a concrete target and prevents the ceiling's failure mode (monotonically decreasing interest). The flagship-crossref spec ranked this as BLOCKING #2 of 28 items. I'm marking IMPORTANT rather than CRITICAL because: the numbers are somewhat arbitrary (no empirical calibration beyond the ceiling comparison), and adding numeric targets to a conviction-layer section risks turning it into a specification section. But the directional guidance (climax at 40-60%, valley at 15-35%) has genuine value.

**Exact Insertable Text:**

```
VISUAL WEIGHT TARGETS (10-point scale, directional guidance):
  Act 1 (0-15%): 7/10 -- confident but not overwhelming (header + orientation)
  Valley 1 (15-35%): 4/10 -- reading zone, let eye settle
  Act 3 (40-60%): 9/10 -- CLIMAX, highest contrast, stop-scrolling moment
  Act 4 (60-85%): 6/10 -- highest information density, substance zone
  Act 5 (85-100%): 5/10 -- resolution, spacing expands, footer bookend
  RULE: Act 4 MUST have MORE content per viewport than Act 2.
  RULE: NEVER more than 2 viewports of identical visual texture consecutively.
```

**Placement:** Section A8 (Reader Journey), after the 5-act description (after line 106). Would add 8 lines to A8.

---

## ITEM 13: Attention Priority Hierarchy in A6

**Source:** `05-flagship-crossref-spec.md`, Missing Item 20-B (lines 389-404)
**Priority:** IMPORTANT -- Documents the empirically observed compliance hierarchy: binary identity rules ~100%, structural mandates ~80-90%, quantitative thresholds ~60-70%, judgment qualities ~0-10%, emergent properties ~0%. This explains WHY spatial proportion gates are essential (the builder WILL drop them without gates). The flagship-crossref spec ranked this as BLOCKING #5 of 28. However, A6 already contains "Binary rules are cheap (~1 unit). Spatial proportion, visual rhythm, and gestalt coherence are EMERGENT" which communicates the same insight less precisely. The hierarchy adds precision and the compliance percentages, but partially duplicates existing A6 content.

**Exact Insertable Text:**

```
ATTENTION PRIORITY (what builders preserve vs drop under pressure):
  Priority 1: Binary identity (soul) -- ~100% compliance
  Priority 2: Structural mandates (footer, sections) -- ~80-90%
  Priority 3: Quantitative thresholds (CPL, token%) -- ~60-70%
  Priority 4: Judgment qualities -- ~0-10%
  Priority 5: Emergent properties (spatial proportion, rhythm) -- ~0%
  Spatial proportion is Priority 5. Without BINARY GATES, it WILL be dropped.
  Every spatial rule in this prompt is a gate BECAUSE builders cannot self-enforce it.
```

**Placement:** Section A6 (Experiential Laws), after existing content (after line 79). Would add 8 lines to A6.

---

## ITEM 14: Silence Zone CSS Definition in C-13

**Source:** `05-flagship-crossref-spec.md`, Missing Item 04-B (lines 74-86)
**Priority:** IMPORTANT -- C-13 currently says ">= 2 designed silence zones (200px+ height, base typography only, NO mechanism CSS)" but does NOT define what CSS IS and IS NOT allowed. Without the explicit PROHIBITED list, builders create "silence zones" with border-left or zone backgrounds that negate the silence. The definition makes C-13 binary-verifiable rather than judgment-dependent.

**Exact Insertable Text:**

```
C-13 DEFINITION: A silence zone allows ONLY base typography (body font, body size,
     body color, standard paragraph margins, page background). PROHIBITED in silence:
     border-left, zone backgrounds, dark zones, callouts, code blocks, any mechanism
     CSS. Silence zones contain CONTENT (text, simple lists) but NO mechanism styling.
     If it has a border-left or custom background, it is NOT a silence zone.
```

**Placement:** Section B3 (Compositional), as annotation to C-13 (after line 186 in current v2). Would add 5 lines to B3.

---

## ITEM 15: Expanded B10 (24 items vs current 16)

**Source:** `07-alignment-enrichment-spec.md`, Part 3 (lines 143-192)
**Priority:** NICE-TO-HAVE -- The alignment enrichment spec expanded B10 from 12 to 20 items. The current v2 has 16 items (incorporating 4 MC/SC items from the blocking fix). My original version had 24 items (the alignment spec's 20 + 4 items from other enrichments). The additional items beyond the current 16 are:

Items in alignment spec NOT in current v2 B10:
- `[ ] S-06: >= 5 content sections present`
- `[ ] C-07: Bridge transitions have cognitive-reframe prose`
- `[ ] C-10: >= 2 purpose-built components for THIS content`
- `[ ] C-14: Signal-to-silence ratio 0.6-0.8:1`
- `[ ] S-09+S-11: No spacing > 96px`
- `[ ] P-04: Visual scroll-through complete`
- `[ ] P-06: Pattern overhead <= 20% of content height`

Items from other enrichments I added:
- `[ ] SUBTRACTION TEST: For last 3 mechanisms, (a) WORSE / (b) SAME / (c) BETTER if removed`

However, the current v2 B10 at 16 items is already substantial. The 7 alignment items are ALL enforced at gates (C3 gate sequence) so the builder will be caught at gates even if they skip self-check. The self-check is a CONVENIENCE for the builder to catch issues pre-gate. B10 length adds to builder prompt size (~75 line cap). Each added self-check item costs ~1 attention unit. 8 additional items = 8 units = ~6% of builder attention budget. The ROI on self-check items beyond the current 16 is diminishing because gates catch the same issues.

**Exact Insertable Text (the 8 additional items):**

```
[ ] S-06: >= 5 content sections present          (count sections)
[ ] S-09+S-11: No spacing > 96px                 (search CSS for margin/padding > 96px)
[ ] C-07: Bridge transitions have cognitive prose (check each BRIDGE for reframe text)
[ ] C-10: >= 2 purpose-built components           (list components invented for THIS content)
[ ] C-14: Signal-to-silence 0.6-0.8:1            (content-height / silence-height ratio)
[ ] P-04: Visual scroll-through complete          (confirm full page scroll before write)
[ ] P-06: Pattern overhead <= 20%                 (metaphor-structural-height / content-height)
[ ] SUBTRACTION TEST: For last 3 mechanisms, remove mentally. SAME or BETTER = remove.
```

**Placement:** Section B10 (Builder Self-Check), after current item 16 (SC-08), before the SendMessage instructions. Would bring B10 from 16 to 24 items.

---

## ITEM 16: Enrichment Risk Map

**Source:** `08-synthesis-enrichment-spec.md`, Enrichment 7 (lines 255-286)
**Priority:** NICE-TO-HAVE -- A quick-reference showing what breaks if each enrichment is NOT invoked. The existing Appendix has an Enrichment Traceability table mapping enrichments to rules and gates. The risk map adds the "what breaks" dimension. However, this is TEAM-LEAD reference material that provides motivational context, not operational enforcement. The team-lead can derive these consequences from the traceability table. Adding it to the prompt increases length without adding binary enforcement. Best kept as a separate team-lead reference document.

**Exact Insertable Text:**

```
ENRICHMENT RISK MAP (if enrichment NOT invoked, this breaks):

  B1 (void prohibition) skipped  -> 70%+ blank scroll ships (ceiling failure)
  BT-09 (metaphor rubric) skipped -> bad metaphor passes, all downstream remedial
  A1 (transition grammar) skipped -> transitions = void, ceiling structural failure
  C3 (96px max spacing) skipped   -> 120-160px margins accumulate into voids
  B3 (front-loaded weight) skipped -> all interest in first third, rest blank
  A2 (restraint protocol) skipped -> 14 mechanisms crammed in header
  D3 (content-form fit) skipped   -> architecture exceeds content
  BT-08 (PA-50-53) skipped       -> void not quantitatively measured
  BT-10 (PA-09 severity) skipped  -> 1-viewport gap = 24-viewport gap
  BT-11 (PA-17/41) skipped       -> YES verdict despite metronomic spacing

HIGHEST-RISK (priority): B1 > BT-09 > A1
```

**Placement:** Appendix, after the Enrichment Traceability table (after line 658 in current v2). Would add ~14 lines to the Appendix.

---

## PRIORITY SUMMARY

| # | Item | Priority | Lines | Duplicates Existing? |
|---|------|----------|-------|---------------------|
| 5 | P-06b Anti-Ambition Audit | CRITICAL | 6 | No -- genuine new coverage |
| 1 | S-16/S-17 Content Weight | IMPORTANT | 12 | Partial overlap with CQG-02 |
| 2 | MG-06 Soul Compatibility | IMPORTANT | 3 | Partial overlap with MG-03 R1 |
| 3 | P-01b Spatial Budget Template | IMPORTANT | 9 | Available via Section E file routing |
| 4 | P-01c Intentionality Pre-Planning | IMPORTANT | 7 | No -- genuine new coverage |
| 7 | C-09b Climax Positioning | IMPORTANT | 4 | No -- genuine new coverage |
| 12 | A8 Visual Weight Targets | IMPORTANT | 8 | No -- genuine new coverage |
| 13 | A6 Attention Priority Hierarchy | IMPORTANT | 8 | Partial overlap with existing A6 text |
| 14 | C-13 Silence Zone CSS Definition | IMPORTANT | 5 | No -- operationalizes existing rule |
| 6 | P-08b Voice Continuity | NICE-TO-HAVE | 4 | Covered by PA-05b at audit time |
| 8 | Reader Proxy (Gate 4.5) | NICE-TO-HAVE | 8 | Covered by Mode 4 PA questions |
| 9 | Metacognitive Reviewers | NICE-TO-HAVE | 9 | Partially covered by P-06b + Mode 4 |
| 10 | Per-Agent Contracts (C1b) | NICE-TO-HAVE | 22 | Repackaging of C1 + C3 + E content |
| 11 | Section F Calibration Run | NICE-TO-HAVE | 23 | Pre-experiment protocol, not execution |
| 15 | Expanded B10 (16->24) | NICE-TO-HAVE | 8 | All items enforced at gates already |
| 16 | Enrichment Risk Map | NICE-TO-HAVE | 14 | Motivational, not operational |

**CRITICAL items:** 1 (P-06b, 6 lines)
**IMPORTANT items:** 8 (S-16/17, MG-06, P-01b, P-01c, C-09b, A8 visual weight, A6 attention priority, C-13 definition -- total 56 lines)
**NICE-TO-HAVE items:** 7 (P-08b, Reader Proxy, metacognitive reviewers, per-agent contracts, calibration run, expanded B10, risk map -- total 88 lines)

**Recommendation:** Add the 1 CRITICAL + 8 IMPORTANT items = 62 lines, bringing the prompt from 732 to ~794 lines. This is well within the 800-1200 line target. The 7 NICE-TO-HAVE items add 88 lines of organizational convenience but no new enforcement coverage.

---

**END INTEGRATOR MISSING ITEMS SPECIFICATION**
