# Metacognitive Constraint Balance Analysis

**Date:** 2026-02-16
**Analyst:** constraint-analyst (ceiling-prompt-team)
**Mission:** Determine the sweet spot between structure and freedom for the Ceiling execution prompt
**Inputs:** CEILING-PREPARATION-BRIEF.md, CEILING-MASTER-CHECKLIST.md (62 items), 09-MASTER-RETROSPECTIVE.md, prohibitions.md, semantic-rules.md, AUXILIARY-PRE-CEILING-AUDIT.md (34 items)

---

## EXECUTIVE SUMMARY

**The Ceiling execution prompt is carrying too much weight.** The current specification inventory totals ~248 discrete items (62 checklist + 34 meta-audit + 22 prohibitions + 48 PA questions + 9 binary rules + 3 protocols + ~70 scattered specifications). An agent processing this volume will exhibit AMBIENT OVERLOAD -- the very failure mode the 4-type constraint taxonomy warns about.

**Recommended action:** Cut the execution-facing specification to ~55-65 items. Move the rest to reference documents that agents consult only when triggered. The Ceiling prompt should contain FEWER rules than the checklist suggests, not more.

**Core thesis:** The relationship between rules and quality is an INVERTED U. Too few rules (Floor, Phase D) = chaos. Too many rules (248 items) = paralysis. The sweet spot is the MINIMUM set of rules that prevents KNOWN failure modes while leaving room for compositional judgment. That number, based on Middle-tier evidence, is approximately 55-65 items.

---

## 1. THE 4-TYPE CONSTRAINT TAXONOMY: Classification of Every Rule

### Type 1: IDENTITY Constraints (ENABLING -- these create the design language)

These constraints are net POSITIVE at ANY volume. They don't restrict quality; they define the medium. More identity constraints = stronger identity, not less freedom. An artist working in watercolors doesn't resent "no oil paint" -- the medium IS the creative space.

**Rules classified as IDENTITY:**

| # | Rule | Source | Effect |
|---|------|--------|--------|
| I-01 | border-radius: 0 | prohibitions.md #1 | Enables sharp geometric precision |
| I-02 | box-shadow: none | prohibitions.md #2 | Enables flat depth encoding (borders/spacing INSTEAD of shadows) |
| I-03 | No drop-shadow | prohibitions.md #3 | Same as I-02, separate CSS property |
| I-04 | No semi-transparent backgrounds | prohibitions.md #4 | Forces deliberate zone boundaries |
| I-05 | No gradients | prohibitions.md #5 | Forces flat color + spacing as depth channels |
| I-06 | No pure black/white | prohibitions.md #6 | Defines warm editorial palette |
| I-07 | Serif display only | prohibitions.md #7 | Typography trinity |
| I-08 | No decorative grid-breaking | prohibitions.md #12 | Content-first structure |
| I-09 | No vertical table borders | prohibitions.md #13 | Open grid aesthetic |
| I-10 | No hover lift | prohibitions.md #14 | Flat interaction model |
| I-11 | h3 always italic | prohibitions.md #17 | Editorial voice |
| I-12 | Warm palette only | prohibitions.md #16 | Warm editorial identity |
| I-13 | No decorative elements | prohibitions.md #11 | Anti-complexity |
| I-14 | 4px accent border minimum | prohibitions.md #10 | Signature callout accent |
| I-15 | No 2px borders | prohibitions.md #9 | Visual hierarchy clarity |

**Count: 15 identity constraints.**
**Net effect: ALL POSITIVE.** Include ALL in execution prompt. These are non-negotiable by definition and create the medium within which creativity operates.

**Key insight:** These 15 rules map to the 7/7 soul compliance check. They are already compressed into 7 binary checks. Do NOT expand them back to 15 in the execution prompt -- keep the 7/7 soul check as the compressed representation.

---

### Type 2: PROCEDURAL Constraints (SEQUENCING -- order the work, neutral to quality)

These constraints determine WHEN things happen. They don't affect the quality of what's built; they prevent known process failures. Their value is in preventing chaos, not in enabling richness.

| # | Rule | Source | Effect |
|---|------|--------|--------|
| P-01 | Phase-gated library access (Phases 0-3 blind) | Anti-gravity R1 | Prevents template matching |
| P-02 | Metaphor lock-in gate at Phase 3.5 | Anti-gravity R5 | Prevents post-hoc rationalization |
| P-03 | Landmark completeness gate (Phase 5.5) | Brief CP-03 | Prevents missing structural elements |
| P-04 | Builder self-check before file write | Brief CP-04 | Shifts quality left |
| P-05 | Two-instance pattern (planner != builder) | Retro Finding 4 | Prevents continuation bias |
| P-06 | Fresh-eyes zero-context PA protocol | Retro Finding 5 | Prevents confirmation bias |
| P-07 | Blind novelty evaluation | Brief CP-08 | Prevents evaluation bias |
| P-08 | Dual PA with reconciliation | Brief CP-09 | Reduces single-evaluator risk |
| P-09 | Programmatic audit FROM build plan | Brief CP-10, Retro Finding 2 | Prevents generic-vs-specific audit gap |
| P-10 | Per-file agent ownership | Retro Finding 6 | Prevents contention |
| P-11 | Content reuse (same SYSTEM docs) | Brief Section 8 | Enables tier comparison |
| P-12 | Inter-agent messaging requirement | Retro Finding 9 | Enables collaborative refinement |
| P-13 | Divergence check at Phase 3.5 | Anti-gravity R6 | Prevents library copying |

**Count: 13 procedural constraints.**
**Net effect: NEUTRAL to quality, POSITIVE to process reliability.** Include ALL in execution prompt but compress aggressively -- these should be described as a PHASE SEQUENCE with gates, not as 13 separate rules. Most can be embedded in the phase descriptions themselves.

**Compression recommendation:** Reduce 13 procedural rules to a single PHASE DIAGRAM with 5 gates marked. Each gate has 2-3 binary checks. Total execution-facing text: ~30 lines instead of ~130.

---

### Type 3: SPECIFICATION Constraints (MIXED -- some help, some limit)

These are the DANGEROUS category. Each specification constraint seems reasonable in isolation. Together, they create ambient overload. Each one I evaluate below as net positive, net neutral, or net negative for Ceiling quality.

| # | Rule | Source | Net Effect | Verdict |
|---|------|--------|------------|---------|
| S-01 | Container width 940-960px | Brief CP-01 | **NET POSITIVE** -- prevents THE known failure mode | MUST INCLUDE |
| S-02 | CPL 45-80 chars | Brief CP-04 | **NET POSITIVE** -- prevents readability failure, has formula | MUST INCLUDE |
| S-03 | Token compliance >= 80% | Brief CP-10 | **NET NEUTRAL** -- builder discipline, not design quality | SHOULD INCLUDE (as self-check, not success criterion) |
| S-04 | Per-category minimums S:1+, H:1+, C:1+, D:1+, N:1+ | Brief CP-01 | **NET POSITIVE** -- validated as THE enabling spec change | MUST INCLUDE |
| S-05 | 2+ reinforcing pairs | Brief Section 3 | **NET POSITIVE** -- Ceiling's primary differentiator | MUST INCLUDE |
| S-06 | 4-scale fractal coherence | Brief Section 3 | **NET POSITIVE** -- addresses 15-20% of richness gap | MUST INCLUDE |
| S-07 | 3-transition minimum (rhythm variation) | Brief CP-06 | **NET POSITIVE** -- prevents metronomic failure | MUST INCLUDE |
| S-08 | Heading spacing ratio >= 1.5:1 | Brief CP-07 | **NET NEUTRAL** -- minor perceptual improvement | DEFER (builder self-check only, not success criterion) |
| S-09 | Weight distribution (2+ focal points in bottom 50%) | Retro V.6 | **NET NEUTRAL** -- addresses real problem but hard to binary-check | DEFER (PA question only, not rule) |
| S-10 | Metaphor resonance gate (authenticity YES, cross-domain YES, multi-dimensional YES) | Brief Section 8 | **NET POSITIVE** -- prevents forced metaphor | MUST INCLUDE |
| S-11 | Mechanism interaction documented | Retro Finding 1 | **NET POSITIVE** -- forces compositional thinking | MUST INCLUDE |
| S-12 | Pass margins reported | Retro Finding 7 | **NET NEUTRAL** -- improves reporting, not building | DEFER (verdict agent only) |
| S-13 | Mechanism justification per-content | Retro Finding 1 | **NET POSITIVE** -- prevents quota-filling | SHOULD INCLUDE |
| S-14 | Ceiling per-category: S:2+, H:2+, C:3+, D:2+, N:2+ | Checklist A-05 | **NET NEGATIVE** -- conflicts with Brief resolution (keep 1+ per category, pairs do the work) | REMOVE |
| S-15 | 3+ mechanism pair documentation | Checklist A-06 | **REDUNDANT** -- already covered by S-05 (2+ reinforcing pairs from Brief). 3 vs 2 is an internal conflict. | Use Brief's 2+ (more conservative) |
| S-16 | Message count >= 5 | Checklist B-01 | **NET NEGATIVE** -- quantifying communication creates busywork messaging | REMOVE (require CAPABILITY, not COUNT) |
| S-17 | Execution time 45-100 min | Checklist B-21 | **NET NEUTRAL** -- diagnostic, not prescriptive | REMOVE from success criteria, keep as estimate |
| S-18 | PA-05d measured programmatically | Checklist B-04 | **NET POSITIVE** -- prevents estimation bias | SHOULD INCLUDE (in auditor prompt, not builder) |
| S-19 | Approved raw value contexts (border-width 1/3/4px, line-height unitless) | Meta-audit 2.5 | **NET POSITIVE** -- prevents false token compliance failures | SHOULD INCLUDE (in builder self-check) |
| S-20 | "Metaphor shapes INTERNAL experience, never EXTERNAL width" | Brief Section 4 | **REDUNDANT with S-01** -- restatement of container width rule | MERGE into S-01's one-sentence version |
| S-21 | No WOULD-NOT-SHIP findings | Checklist B-24 | **TAUTOLOGICAL** -- every experiment should have zero severity-1 defects | REMOVE (implied by any quality standard) |
| S-22 | "Better than Middle" >= 3 perceptual improvements | Checklist B-06 | **NET POSITIVE** -- defines Ceiling's value proposition | MUST INCLUDE |

**Count: 22 specification constraints examined.**

**Verdict breakdown:**
- MUST INCLUDE: 9 (S-01, S-02, S-04, S-05, S-06, S-07, S-10, S-11, S-22)
- SHOULD INCLUDE: 4 (S-03, S-13, S-18, S-19)
- DEFER: 3 (S-08, S-09, S-12)
- REMOVE: 4 (S-14, S-16, S-17, S-21)
- MERGE/REDUNDANT: 2 (S-15, S-20)

---

### Type 4: AMBIENT Constraints (EMERGENT OVERLOAD -- too many rules create paralysis)

These are NOT individual rules. Ambient constraints emerge from the VOLUME of specification. They don't exist in any single checklist item -- they emerge when an agent processes 248 items and must hold all of them in working context simultaneously.

**Ambient overload symptoms observed in prior experiments:**
- Phase D: agents "followed rules" but produced "formatted, not designed" output -- specification anxiety
- Middle tier: builder self-reported 0/3 judgment rule compliance -- couldn't distinguish mandatory from aspirational
- CD-006 (39/40): highest quality came from agents with the SMALLEST specification sets and the most communication freedom

**Ambient constraints currently loading the Ceiling prompt:**

| Source | Item Count | Compression Ratio | Action |
|--------|-----------|-------------------|--------|
| Checklist Section A (Plan Verification) | 21 | These verify the PROMPT, not the BUILD -- move to pre-flight, not execution | PRE-FLIGHT only |
| Checklist Section B (Execution Success) | 25 | ~12 are genuine success criteria, 13 are process verification | SPLIT: 12 in prompt, 13 for team-lead only |
| Checklist Section C (Retrospective Integration) | 16 | ALL are retrospective -- by definition not execution-time | POST-EXPERIMENT only |
| Meta-audit items | 34 | ~12 CRITICAL already captured in Brief CP-01 through CP-10 | ALREADY ABSORBED |
| PA questions | 48 | Auditor-facing only, never in builder/planner prompt | AUDITOR SLICE only |
| Prohibitions | 22 | Compressed to 7/7 soul check | KEEP COMPRESSED |
| Semantic rules | 5 gaps + framework | Reference for planner, not execution rules | PLANNER REFERENCE only |
| New protocols (communication, blind eval, dual PA) | 3 | Phase descriptions, not rules | EMBED IN PHASES |

**Total ambient load if ALL included in one prompt: ~248 items.**
**Recommended ambient load for execution prompt: ~55-65 items.**
**Reduction: 74% of items moved OUT of execution prompt into pre-flight, agent-specific slices, or post-experiment analysis.**

---

## 2. THE COMPLEXITY RATCHET: What to Remove

### Current Rule Inventory (Full Count)

| Category | Count | Notes |
|----------|-------|-------|
| Checklist items | 62 | 21 plan + 25 execution + 16 retro |
| Meta-audit items | 34 | 12 critical + 15 high + 7 medium |
| Binary soul rules | 7 | (compressed from 22 prohibitions) |
| Specification constraints | ~22 | (analyzed above) |
| PA questions | 48 | (auditor-only) |
| New protocols | 3 | (communication, blind eval, dual PA) |
| **TOTAL** | **~176 unique items** | (some overlap reduces effective to ~150) |

### Redundancy Analysis

**Rules that appear in 3+ sources (redundant -- keep ONE canonical location):**

1. **Container width 940-960px:** Appears in Brief CP-01, checklist B-08, meta-audit 1.11, prohibitions (implied), semantic rules (implied). **Keep ONE statement in builder prompt, ONE in programmatic audit checklist.**

2. **M1 per-category minimums:** Appears in Brief CP-01, checklist A-01/A-05/B-07, meta-audit 1.10, skill file (once applied). **Keep ONE statement in planner prompt. Verified by programmatic audit.**

3. **Landmark completeness gate:** Appears in Brief CP-03, checklist A-03/B-02/B-16, meta-audit 1.7/2.2. **Keep ONE gate in phase sequence. Team-lead executes it.**

4. **Token compliance >= 80%:** Appears in Brief CP-10, checklist B-15, meta-audit 1.9/6.1. **Keep ONE self-check in builder prompt.**

5. **Missing footer prevention:** Appears in Brief (CP-03), checklist (B-02, B-16), meta-audit (1.7, 2.2), retro (Finding 2). **Already covered by landmark completeness gate. Do NOT add as separate rule.**

**Total redundant items: ~25-30 (items that appear in multiple sources and can be reduced to single canonical locations).**

### Contradiction Analysis

**Active contradictions:**

1. **Per-category minimums: 1+ vs 2+**
   - Brief Section 3 resolves: keep 1+ per category, reinforcing pairs do the heavy lifting
   - Checklist A-05 and B-07 specify 2+ per category (S:2+, H:2+, C:3+, D:2+, N:2+)
   - **Resolution: Brief wins.** The Brief explicitly documents why "2+ per category was rejected" (forces mechanisms where content doesn't support them). Remove 2+ language from checklist.

2. **Reinforcing pairs: 2 vs 3**
   - Brief Section 3 specifies "at least 2 REINFORCING PAIRS"
   - Checklist A-06 specifies "at least 3 mechanism pairs"
   - **Resolution: Brief wins (2+).** The number was already debated and the conservative option chosen. 3 pairs risks forcing interactions where none naturally exist.

3. **Message count: specified vs unspecified**
   - Checklist B-01 specifies ">= 5 substantive messages"
   - Brief CP-02 says "enable inter-agent communication protocol" without count
   - **Resolution: Remove the count.** Specifying ">= 5 messages" creates perverse incentive (agents send trivial messages to hit quota). Require CAPABILITY and check for SUBSTANTIVE use.

4. **Rhythm as mandatory vs recommended**
   - Brief Section 3 lists 3-transition minimum as "recommended" for Ceiling verbiage spec
   - Brief Conflict 5 resolution says "Add 3-transition minimum as MANDATORY to the skill"
   - **Resolution: MANDATORY.** The conflict resolution was the later, more considered decision.

---

## 3. SWEET SPOT ANALYSIS

### Evidence From Three Data Points

**Floor (Phase D, too few rules):**
- Effective specification: ~25 items (9 binary soul rules + ~16 scattered specifications)
- Result: 4/5 pages violated container width. "Formatted, not designed."
- Problem: UNDER-SPECIFICATION. Agents had freedom but no vocabulary.
- Binary rule compliance: 100% (where rules existed). Judgment rule compliance: ~0%.

**Middle (Middle-tier, moderate rules):**
- Effective specification: ~45-50 items (9 binary + M1 override + pattern lookup + self-check guidance)
- Result: PA-05 DESIGNED 4/4, D3 3/3, 12 mechanisms, SUCCESS with 3 defects
- Problem: Defects were in areas WITHOUT binary rules (CPL, tokens, footer)
- Binary rule compliance: 7/7 (100%). Judgment rule compliance: 0/3 (0%).

**CD-006 (highest quality, 39/40):**
- Effective specification: ~35-40 items (soul rules + mechanism catalog + inter-agent communication)
- Result: 39/40 score, "compositionally confident"
- Key difference from Middle: COMMUNICATION enabled, not more rules
- This is the strongest evidence that quality comes from COMMUNICATION + VOCABULARY, not from MORE RULES.

### The Inverted-U Model

```
Quality
  ^
  |         CD-006 (39/40)
  |        /  *  \            Ceiling target zone
  |       /       \
  |      * Middle  \
  |     / (B+)     \
  |    /             * ← Predicted overload zone
  |   /
  |  * Floor
  | / (C-)
  +-------------------> Number of rules
  25    45    65    85   150   248

  UNDER-      SWEET       OVER-
  SPECIFIED   SPOT        SPECIFIED
```

**The sweet spot is approximately 45-65 rules in the execution prompt.** Middle landed at ~45 and achieved B+. CD-006 had ~35-40 with communication. Ceiling should aim for ~55-65: Middle's specification level + metaphor requirements + communication protocol, but NOT the full 248-item inventory.

### The Critical Insight: Rules vs Communication

The strongest quality signal in the entire dataset is NOT rule count. It is the **combination of vocabulary access + inter-agent communication**:

- CD-006: moderate rules + messaging = 39/40
- Middle: moderate rules + no messaging = B+ (3 defects)
- Phase D: low rules + no messaging = C- (major failures)

This suggests the Ceiling prompt should prioritize:
1. **Identity rules** (the 7/7 soul check -- already proven)
2. **Vocabulary access** (mechanism catalog, per-category minimums -- validated by Middle)
3. **Communication protocol** (the MOST UNDER-INVESTED dimension)
4. **Metaphor pipeline** (Ceiling's differentiator, NOT a rule set)

And should DE-PRIORITIZE:
1. Retrospective integration items (16 items that are POST-HOC verification)
2. Plan verification items (21 items that verify the PROMPT ITSELF, not the output)
3. Measurement precision standards (nice but not quality-enabling)
4. Redundant restatements of rules that appear in 3+ locations

---

## 4. RULE TRIAGE FOR THE EXECUTION PROMPT

### MUST INCLUDE (binary, non-negotiable, prevents known failures) -- 27 items

**Identity (compressed):**
1. Soul compliance 7/7 (border-radius: 0, box-shadow: none, no drop-shadow, no semi-transparent, no gradients, no pure black/white, h3 italic) -- **1 compressed check**
2. Typography trinity (Instrument Serif display, Inter body, JetBrains Mono code) -- **1 check**
3. Warm palette only (no cool grays) -- **1 check**

**Specification (core):**
4. Container width 940-960px at 1440px viewport. "Express metaphor through INTERNAL padding, never EXTERNAL width." -- **1 binary rule**
5. CPL 45-80 chars. Builder has formula: `(content-width) / (font-size) / 0.6` -- **1 binary rule + formula**
6. Per-category minimums: S:1+, H:1+, C:1+, D:1+, N:1+ (same as Middle) -- **1 table**
7. 2+ reinforcing pairs (mechanisms encoding SAME semantic dimension through different CSS channels) -- **1 binary rule + example**
8. 4-scale fractal coherence (Navigation + Page + Section + Component) -- **1 binary rule**
9. 3-transition minimum (SMOOTH/BRIDGE/BREATHING between sections) -- **1 binary rule**
10. Metaphor resonance gate: authenticity YES, cross-domain YES, multi-dimensional YES -- **3 binary checks**

**Process (gates):**
11. Phase-gated library access (no case studies before Phase 3.5) -- **1 gate**
12. Metaphor lock-in at Phase 3.5 BEFORE consulting library -- **1 gate**
13. Landmark completeness: header exists + footer exists + section count matches plan -- **1 gate**
14. Builder self-check before file write: CPL + tokens + landmarks -- **1 gate**
15. Two-instance pattern (planner and builder are separate agents) -- **1 architectural rule**
16. Fresh-eyes zero-context PA (auditor sees ONLY screenshots + PA questions) -- **1 protocol rule**

**Success criteria (core):**
17. PA-05 4/4 (Designed) -- **1 criterion**
18. D3 >= 2/3 (Novelty) -- **1 criterion**
19. Better than Middle >= 3 specific perceptual improvements -- **1 criterion**
20. No severity-1 (WOULD-NOT-SHIP) findings -- **1 criterion**
21. Metaphor expression observed by PA -- **1 criterion**

**Communication (new for Ceiling):**
22. Builder can message planner for clarifications -- **1 capability**
23. Auditor can flag issues to team-lead mid-process -- **1 capability**
24. Team-lead can request targeted fixes from builder -- **1 capability**

**Ceiling-specific:**
25. Metaphor derivation through full Phase 1-3 pipeline -- **1 phase requirement**
26. Mechanism selection THROUGH metaphor lens (1:many derivation, not 1:1 lookup) -- **1 selection rule**
27. Blind novelty evaluation (3 unlabeled pages) -- **1 protocol rule**

**Total MUST INCLUDE: 27 items.**

---

### SHOULD INCLUDE (high value, proven effective) -- 12 items

28. Token compliance >= 80% via builder self-check (var() scan) -- builder prompt
29. Heading spacing ratio >= 1.5:1 -- builder self-check
30. Approved raw value contexts (border-width 1/3/4px, line-height unitless) -- builder prompt appendix
31. Mechanism justification per-content ("I deploy this BECAUSE...") -- planner prompt
32. Dual PA with reconciliation (agreement = high confidence, disagreement = flag) -- team-lead protocol
33. Programmatic audit checks PLANNED vs DEPLOYED vs MISSING -- auditor prompt
34. Pass margins reported for all criteria -- verdict template
35. Pre-baked CSS blocks reduce builder context -- builder prompt appendix
36. Opus for creative roles, Sonnet for execution roles -- team-lead topology
37. Content-mechanism fit drives selection, not quota-filling -- planner prompt
38. Weight distribution: >= 2 focal points in bottom 50% -- planner recommendation (not binary rule)
39. Mechanism interaction documented in build plan -- planner template

**Total SHOULD INCLUDE: 12 items.**

---

### DEFER (nice to have but adds ambient complexity) -- 16 items

**Move to POST-EXPERIMENT analysis:**
- C-01 through C-16 (all 16 retrospective integration items) -- these verify lessons learned AFTER the experiment, not during

**Move to TEAM-LEAD reference only (not in any agent prompt):**
- Execution time matching estimates (diagnostic, not prescriptive)
- Timing discrepancy analysis
- Flat topology scaling verification

**Move to OPTIONAL agent enrichment (planner reads if time permits):**
- Mechanism impact profiles (HIGH/MEDIUM/LOW salience)
- Content affinity documentation
- Mechanism synergy matrix
- Application mode documentation (progressive vs discrete)

**Total DEFER: ~25 items (16 retro + 4 team-lead + 5 enrichment).**

---

### REMOVE (redundant, contradictory, or net negative) -- 17 items

| Item | Reason for Removal |
|------|-------------------|
| Checklist A-05 (S:2+, H:2+, C:3+, D:2+, N:2+) | Contradicts Brief resolution. 1+ per category + reinforcing pairs replaces this. |
| Checklist B-01 message count >= 5 | Perverse incentive. Require capability, not count. |
| Checklist B-21 execution time 45-100 min | Diagnostic, not success criterion. |
| Checklist B-24 "no WOULD-NOT-SHIP" | Tautological. Every experiment should have zero severity-1 defects. |
| Checklist A-09 timing re-estimated | Plan verification, not execution rule. |
| Checklist A-11 builder context decision | Already resolved in Brief (name + 1-line description + SendMessage fallback). |
| Checklist A-14 measurement precision | Verdict formatting, not building rule. |
| Checklist A-16 two-dimension model | Documentation, not execution rule. |
| Checklist C-06 Opus/Sonnet cost-effective | Model assignment, not quality rule. |
| Checklist C-09 timing discrepancy explained | Retrospective analysis, not execution. |
| Meta-audit 5.2 richness != vocabulary fluency | Insight, not actionable rule. |
| Meta-audit 5.3 "professional but stiff" context | Calibration, not rule. |
| Meta-audit 4.5 timing discrepancy explanation | Already removed (diagnostic). |
| Meta-audit 6.2 token usage hints | Enhancement, not blocking. |
| Meta-audit 6.3 token mutability range | Enhancement, not blocking. |
| S-20 "metaphor shapes INTERNAL" | Redundant with S-01 container width rule (merge). |
| S-15 "3+ mechanism pairs" | Contradicts Brief (2+ pairs). Use Brief's 2+. |

**Total REMOVE: 17 items.**

---

## 5. THE PROPHYLACTIC PARADOX: Where's the Line?

### The Paradox Stated

"Designing for failure prevents failure" -- BUT -- "designing for TOO MANY failures creates paralysis." Where is the line?

### The 80/20 Analysis

**Top failure modes from ALL experiments, ranked by frequency and severity:**

| Rank | Failure Mode | Frequency | Severity | Rule(s) that Prevent It |
|------|-------------|-----------|----------|------------------------|
| 1 | Container width violation | 4/5 Phase D pages | HIGH (auto-fail) | S-01: 940-960px |
| 2 | Missing structural elements (footer) | 1/1 Middle pages | CRITICAL (WOULD-NOT-SHIP) | P-03: Landmark gate |
| 3 | Token compliance failure | 1/1 Middle pages | MEDIUM (cosmetic) | S-03: Self-check |
| 4 | CPL violation | 1/1 Middle pages | LOW (marginal) | S-02: CPL formula |
| 5 | Metronomic rhythm | 1/1 Middle pages | MEDIUM (perceptual) | S-07: 3-transition min |
| 6 | Soul constraint violations | 5/5 Phase D Track 1 | CRITICAL (identity) | I-01 through I-15 (7/7 check) |
| 7 | Template copying (library access) | 0 observed (prevented) | HIGH (invalidates) | P-01, P-02: Phase gates |
| 8 | Single-evaluator bias | 1/1 Middle eval | MEDIUM (methodological) | P-07, P-08: Blind + dual PA |

**The 80/20 cut:** Rules 1-6 prevent 80%+ of observed failures. Rules 7-8 prevent HYPOTHETICAL failures (never observed because prophylactic rules already exist).

### Where to Draw the Line

**INCLUDE rules that address OBSERVED failures (ranks 1-6).** These have empirical evidence from Phase D and Middle-tier. The cost of including them is near zero (they're binary checks) and the cost of excluding them is HIGH (repeat known failures).

**INCLUDE rules that address HIGH-PROBABILITY hypothetical failures (rank 7).** Phase-gated library access has never been violated because it's a structural rule. Removing it would likely cause immediate template copying.

**EVALUATE carefully rules that address LOW-PROBABILITY hypothetical failures (rank 8).** Single-evaluator bias is real but marginal. Adding dual PA costs 5-7 min. Worth including but not as MUST.

**EXCLUDE rules that address THEORETICAL failures with no empirical evidence.** For example:
- "Message count >= 5" addresses a theoretical problem (agents might not message) but the specific numeric target has no empirical basis and creates perverse incentives.
- "Execution time 45-100 min" as a success criterion addresses nothing -- time is diagnostic.
- Mechanism impact profiles, content affinity, synergy matrix -- these are ENRICHMENTS that improve selection quality but have never been tested. They should be available for reference, not mandated.

### The Prophylactic Line

**Rule of thumb: Include a rule in the execution prompt if and only if:**

1. The failure it prevents has been OBSERVED in a prior experiment (empirical), OR
2. The failure it prevents would be CATASTROPHIC if it occurred (soul violation, template copying), OR
3. The rule is BINARY (100% compliance expected) and adds < 10 seconds to processing time

**Exclude if:**
1. The rule addresses a theoretical failure that has never been observed
2. The rule is a JUDGMENT call that will achieve ~0% compliance
3. The rule is diagnostic/retrospective (tells us what to analyze AFTER, not what to DO)
4. The rule is redundant with another rule already included

---

## 6. RECOMMENDED EXECUTION PROMPT STRUCTURE

### Total Rule Budget: ~55-65 items

| Section | Items | Content |
|---------|-------|---------|
| Identity (soul check) | 7 | Compressed 7/7 binary check |
| Container + readability | 3 | 940-960px, CPL 45-80, warm palette |
| Mechanism specification | 6 | Per-category min, reinforcing pairs, 4-scale, 3-transition, interaction, justification |
| Metaphor pipeline | 5 | Phase 1-3 derivation, resonance gate, metaphor-driven selection, lock-in, divergence check |
| Process gates | 5 | Library access, landmark completeness, builder self-check, two-instance, phase sequence |
| Communication | 3 | Builder-planner, auditor-lead, lead-builder capabilities |
| Evaluation protocols | 4 | Fresh-eyes PA, blind novelty, dual PA, plan-derived audit |
| Success criteria | 5 | PA-05 4/4, D3 >= 2/3, Better than Middle, Metaphor expression, Container pass |
| Builder self-check | 6 | CPL formula, token scan, landmarks, heading ratio, rhythm count, soul check |
| **TOTAL** | **~44 core + 12 SHOULD = ~56** | |

### What Lives WHERE (Not in Main Prompt)

| Document | Items | Who Reads It |
|----------|-------|-------------|
| Pre-flight checklist (Section A) | 21 | Team-lead verifies prompt completeness BEFORE launch |
| Auditor prompt slice | 48 PA questions + plan-derived checks | Perceptual + programmatic auditors only |
| Builder appendix | Pre-baked CSS, approved raw values, token reference | Builder only |
| Planner reference | Mechanism catalog, impact profiles, content affinity | Planner only |
| Post-experiment analysis (Section C) | 16 retrospective items | Synthesizer + team-lead after experiment |
| Verdict template | Margin reporting, adversarial self-check | Verdict synthesizer only |

### The Key Principle

**The execution prompt should feel like a FLIGHT CHECKLIST, not an ENCYCLOPEDIA.** Pilots don't read the aircraft maintenance manual before takeoff -- they run a 30-item checklist that covers the 30 things most likely to kill everyone. The maintenance manual exists for reference.

The Ceiling execution prompt should be the FLIGHT CHECKLIST (~55 items). The Brief, Master Checklist, and Meta-Audit are the MAINTENANCE MANUAL (reference when needed).

---

## 7. SUMMARY OF RECOMMENDATIONS

### CUT from execution prompt (move to reference/pre-flight/post-experiment):

1. **All 16 retrospective integration items (Section C)** -- post-experiment analysis, not execution guidance
2. **All 21 plan verification items (Section A)** -- pre-flight check for team-lead, not agent-facing
3. **Redundant restatements** (~25-30 items that appear in 3+ locations) -- keep ONE canonical location
4. **Contradicted specifications** (2+ per category, 3+ pairs, message count >= 5) -- resolve contradictions, remove losers
5. **Diagnostic/tautological items** (timing estimates, "no severity-1 defects") -- obvious, adds noise
6. **48 PA questions** -- auditor-facing only, never in builder or planner prompt
7. **34 meta-audit items** -- absorbed into Brief's CP-01 through CP-10, not independently needed

### KEEP in execution prompt:

1. **27 MUST INCLUDE items** (identity + core specs + process gates + success criteria + communication + Ceiling-specific)
2. **12 SHOULD INCLUDE items** (builder self-checks + planner guidance + evaluation protocols)
3. **Total: ~39-44 in main prompt body, ~12-16 in agent-specific appendices = ~55-60 items**

### Key Metrics:

| Metric | Current Inventory | Recommended Execution | Reduction |
|--------|------------------|----------------------|-----------|
| Total items | ~248 | ~55-60 | 76% |
| In main prompt | ~150+ | ~44 | 71% |
| In agent slices | ~48+ | ~16 | 67% |
| In pre-flight | 0 | 21 | (new) |
| In post-experiment | 0 | 16 | (new) |
| In reference docs | ~50 | ~100+ | (absorbed) |

### The Complexity Ratchet Antidote

**Rules added for Ceiling:** 8 (metaphor pipeline, reinforcing pairs, 4-scale, communication capabilities, blind eval, dual PA, mechanism interaction, metaphor expression criterion)

**Rules REMOVED for Ceiling:** 17 (contradictions resolved, redundancies eliminated, diagnostics removed)

**Net change: -9 rules.** The Ceiling prompt should have FEWER rules than the raw inventory suggests, not more. This is the complexity ratchet operating in reverse -- the first time in this project's history.

---

**END META-CONSTRAINT-BALANCE ANALYSIS**

*This analysis classifies every rule in the Ceiling specification space using the 4-type constraint taxonomy (Identity/Procedural/Specification/Ambient), recommends cutting ~76% of items from the execution prompt, resolves 4 active contradictions, and proposes a ~55-60 item execution prompt structured as a flight checklist rather than an encyclopedia.*
