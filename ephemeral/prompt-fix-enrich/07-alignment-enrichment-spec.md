# Prompt-Wrapper Alignment Enrichment Specification

**Author:** Alignment Enforcement Agent (Opus 4.6)
**Date:** 2026-02-17
**Source:** Report 10 (Prompt-Wrapper Alignment Validation)
**Purpose:** Make the prompt SELF-ENFORCING for all 18 zero-enforcement rules + expand B10 self-check

---

## PART 1: THE 18 ZERO-ENFORCEMENT RULES -- GATE ASSIGNMENTS

Each rule below had ZERO wrapper enforcement in the alignment audit. For each, I specify:
- Which gate should check it
- Binary pass/fail condition
- Exact text to add to the gate specification

### Classification of the 18 Rules

| # | Rule | Category | Gate Assignment | Rationale |
|---|------|----------|-----------------|-----------|
| 1 | S-06 | Spatial | Gate 2 (Landmarks) | Section count is a landmark check |
| 2 | S-09 | Spatial | Gate 1 (Post-Pass-1) + Gate 3 (Post-Pass-2) | Spacing limits must hold at skeleton AND after mechanism deployment |
| 3 | S-11 | Spatial | Gate 1 (Post-Pass-1) + Gate 3 (Post-Pass-2) | CSS value cap; same timing as S-09 |
| 4 | C-05 | Compositional | Gate 3 (Post-Pass-2) | Transitions deployed during mechanism pass |
| 5 | C-06 | Compositional | Gate 3 (Post-Pass-2) | Adjacent-transition check at same time as C-05 |
| 6 | C-07 | Compositional | Gate 3 (Post-Pass-2) | Bridge prose verifiable post-mechanism |
| 7 | C-10 | Compositional | Gate 4 (Post-Pass-3) | Purpose-built components emerge during metaphor integration |
| 8 | C-14 | Compositional | Gate 3 (Post-Pass-2) | Signal-to-silence measurable after mechanism deployment |
| 9 | C-17 | Compositional | Gate 3 (Post-Pass-2) | Bridge transitions exist post-mechanism |
| 10 | MC-04 | Multi-Coherence | Gate 4 (Post-Pass-3) | Responding sequences emerge during metaphor integration |
| 11 | MC-05 | Multi-Coherence | Gate 4 (Post-Pass-3) | Contrasting deployments require full-page view |
| 12 | MC-06 | Multi-Coherence | Gate 4 (Post-Pass-3) | Cascading chains require metaphor layer |
| 13 | MC-07 | Multi-Coherence | Gate 4 (Post-Pass-3) | Cross-dimension coherence measurable post-metaphor |
| 14 | MC-08 | Multi-Coherence | Gate 3 (Post-Pass-2) | Anti-metronome is a spacing measurement |
| 15 | SC-08 | Scale-Channel | Gate 4 (Post-Pass-3) | Channel saturation only measurable after metaphor pass |
| 16 | P-04 | Process | Gate 1 (Post-Pass-1) + Gate 3 (Post-Pass-2) | Self-scroll required at skeleton AND mechanism stages |
| 17 | P-05 | Process | Gate 0 (Pre-Build) | Zone boundaries set during content architecture |
| 18 | P-06 | Process | Gate 4 (Post-Pass-3) | Pattern overhead measurable post-metaphor |

---

## PART 2: EXACT TEXT ADDITIONS TO SECTION C3

### Gate 0 (Pre-Build) -- ADD 1 check

Current text (prompt line 351):
```
Gate 0 (Pre-Build):   Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5.
```

**Replace with:**
```
Gate 0 (Pre-Build):   Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5.
                      P-05: Every zone boundary has ALL THREE: content mass >= 800px,
                      content type change, reader intent change. Any zone with 3 NOs = MERGE.
```

---

### Gate 1 (Post-Pass-1) -- ADD 3 checks

Current text (prompt line 352):
```
Gate 1 (Post-Pass-1): SC-01 through SC-07. Max 2 fix cycles. Fail after 2 = ABORT.
```

**Replace with:**
```
Gate 1 (Post-Pass-1): SC-01 through SC-07. Max 2 fix cycles. Fail after 2 = ABORT.
                      S-09: No content gap > 96px (margin-bottom + adjacent padding-top).
                      S-11: No single CSS margin or padding value > 96px in source.
                      P-04: Builder confirms visual scroll-through before file write. BINARY.
```

---

### Gate 2 (Landmarks) -- ADD 1 check

Current text (prompt line 353):
```
Gate 2 (Landmarks):   Header + Footer + all sections present.
```

**Replace with:**
```
Gate 2 (Landmarks):   Header + Footer + all sections present.
                      S-06: >= 5 content sections counted. FAIL if < 5.
```

---

### Gate 3 (Post-Pass-2) -- ADD 7 checks

Current text (prompt line 354):
```
Gate 3 (Post-Pass-2): CP-01 through CP-04. Spatial re-check (regression detection).
```

**NOTE:** The prompt has a typo here -- "CP-01 through CP-04" should be "C-01 through C-04" (compositional rules, not communication protocol checkpoints). The wrapper correctly interprets this. Fix the typo AND add the new checks.

**Replace with:**
```
Gate 3 (Post-Pass-2): C-01 through C-04. Spatial re-check (regression detection).
                      S-09+S-11: Re-check spacing limits post-mechanism (no value > 96px).
                      C-05: >= 3 transition types present (SMOOTH/BRIDGE/BREATHING).
                      C-06: No two adjacent section transitions identical type.
                      C-07: Every BRIDGE transition contains cognitive-reframe prose (1-3 sentences).
                      C-14: Signal-to-silence ratio 0.6-0.8:1.
                      C-17: >= 2 bridge transitions with cognitive-shift prose.
                      MC-08: >= 3 distinct spacing values across section boundaries.
                      P-04: Builder confirms visual scroll-through before file write. BINARY.
```

---

### Gate 4 (Post-Pass-3) -- ADD 6 checks

Current text (prompt line 355):
```
Gate 4 (Post-Pass-3): 2 fresh-eyes agents. Metaphor structural >= 70% without labels.
```

**Replace with:**
```
Gate 4 (Post-Pass-3): 2 fresh-eyes agents. Metaphor structural >= 70% without labels.
                      C-10: >= 2 purpose-built components invented for THIS content. List them.
                      MC-04: >= 2 responding sequences (mechanism A output triggers B).
                      MC-05: >= 2 contrasting deployments (presence in X, absence in Y).
                      MC-06: >= 1 cascading chain of 3+ mechanisms (A enables B enables C).
                      MC-07: >= 10 of 15 dimension pairs actively coupled.
                      SC-08: No single scale has ALL 7 channels active simultaneously.
                      P-06: Pattern overhead <= 20% of content height.
```

---

### Gate 5 (Final) -- No new rule checks needed

Gate 5 already has Mode 4 PA (48 questions) + programmatic audit. The programmatic audit section in the wrapper should be updated (see Part 4 below), but the prompt's C3 gate text is sufficient.

---

## PART 3: EXPANDED B10 SELF-CHECK

The current B10 has 12 items (prompt lines 277-293). The following expansion adds 8 items covering the previously unenforced rules that builders can self-verify.

### Current B10 (12 items) -- keep all

### ADD these 8 items after current item 12:

```
[ ] S-06: >= 5 content sections present          (count sections)
[ ] S-09+S-11: No spacing > 96px                 (search CSS for margin/padding > 96px)
[ ] C-07: Bridge transitions have cognitive prose (check each BRIDGE for 1-3 sentence reframe)
[ ] C-10: >= 2 purpose-built components           (list components invented for THIS content)
[ ] C-14: Signal-to-silence 0.6-0.8:1            (content-height / silence-height ratio)
[ ] MC-08: >= 3 distinct section spacing values   (list all section gap values, verify >= 3 unique)
[ ] P-04: Visual scroll-through complete          (confirm you scrolled full page before writing)
[ ] P-06: Pattern overhead <= 20%                 (metaphor-structural-height / content-height)
```

**Revised B10 total: 20 items** (12 original + 8 new)

The full revised B10 section should read:

```
SELF-CHECK -- RUN BEFORE WRITING FILE:

[ ] S-01: Container 940-1100px        (getBoundingClientRect at 1440px viewport)
[ ] S-07: CPL 45-80                   (content-width / font-size / 0.6)
[ ] S-02: Content-to-void >= 60:40    (content heights / total scroll)
[ ] S-12: No viewport position < 30% content (B1 void check)
[ ] U-01 through U-10: Soul 10/10     (all prohibitions above)
[ ] S-03+S-04: Header < 20% + footer present with content
[ ] S-05: All planned sections present with >= 200px content each
[ ] S-06: >= 5 content sections present
[ ] C-05+C-06: >= 3 transition types, no identical adjacent
[ ] C-07: Bridge transitions have cognitive-reframe prose
[ ] C-10: >= 2 purpose-built components for THIS content
[ ] C-14: Signal-to-silence ratio 0.6-0.8:1
[ ] Token compliance >= 80%            (var() count / total declarations, excluding :root)
[ ] S-08: Heading spacing >= 1.5:1
[ ] S-09+S-11: No spacing > 96px       (search for margin/padding values > 96px)
[ ] MC-08: >= 3 distinct section spacing values
[ ] C-09: >= 1 designed moment per scroll quartile
[ ] C-18: Density varies across scroll (peak NOT in first section)
[ ] P-04: Visual scroll-through complete (confirm full scroll before write)
[ ] P-06: Pattern overhead <= 20% of content height

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
>>> AFTER FILE WRITE: SendMessage to team-lead with page-height + content-ratio + section-count <<<
```

---

## PART 4: RULES THAT CAN REMAIN UNENFORCED (with justification)

After analysis, **ZERO rules should remain unenforced.** Here is why the candidates I considered do NOT qualify as optional:

| Candidate | Why NOT Optional |
|-----------|-----------------|
| MC-07 (cross-dimension coherence) | Was considered for "optional" since it's a counting exercise. But MC-07 is the flagship differentiator (>= 10/15 pairs). Without gate enforcement, judgment rule = ~0% compliance. MUST enforce. |
| P-05 (zone boundary triple condition) | Was considered for "optional" since the content architect should handle this. But P-05 prevents the exact zone proliferation that caused the ceiling whitespace void. MUST enforce at Gate 0. |
| SC-08 (channel saturation prevention) | Was considered for "optional" since it's a negative check (preventing ALL channels at one scale). But the anti-scale model says over-saturation at one scale = richness collapse. MUST enforce. |
| P-04 (builder self-scroll) | Was considered for "optional" since it's process, not output. But the ceiling experiment PROVED that builders who don't scroll produce catastrophic voids. This is a BLOCKING lesson. MUST enforce. |

**Verdict: All 18 unenforced rules require gate enforcement. No exceptions.**

---

## PART 5: CONSOLIDATION OPPORTUNITIES (duplicate enforcement reduction)

### Consolidations Identified

**1. S-09 and S-11 -- CONSOLIDATE into single check**

- S-09: "Max spacing between any two content elements: 96px per-property."
- S-11: "No single CSS margin or padding value > var(--space-max-zone) = 96px"

These are the SAME rule stated from two perspectives (computed vs source). In gates and self-check, combine into one line:

**Consolidated:** `S-09+S-11: No CSS margin or padding value > 96px (source or computed).`

This saves 1 line per gate where both appear, without losing enforcement.

**2. C-07 and C-17 -- CONSOLIDATE into single check**

- C-07: "Bridge transitions MUST contain cognitive-reframe prose (1-3 sentences justifying the shift)."
- C-17: ">= 2 bridge transitions with cognitive-shift prose."

C-17 is a QUANTIFIED version of C-07. If C-07 is enforced at every bridge transition, and we know C-05 requires >= 3 transition types (one of which must be BRIDGE), then C-17 is automatically satisfied when >= 2 bridges exist with cognitive prose.

**Consolidated at Gate 3:** `C-07+C-17: >= 2 bridge transitions, each with cognitive-reframe prose (1-3 sentences).`

This saves 1 line at Gate 3 without losing enforcement.

**3. MC-02 and C-08 -- ALREADY ALIGNED, no change needed**

- C-08: ">= 2 reinforcing pairs (same semantic, different CSS channels)."
- MC-02: ">= 3 reinforcing pairs."

MC-02 supersedes C-08 for flagship tier. C-08 is the base requirement; MC-02 is the flagship upgrade. These are NOT duplicates -- they're tiered. Keep both (C-08 checked at Gate 3, MC-02 checked at Gate 4).

---

## PART 6: GATE 3 TYPO FIX

The prompt C3 line 354 reads:
```
Gate 3 (Post-Pass-2): CP-01 through CP-04. Spatial re-check (regression detection).
```

"CP-01 through CP-04" refers to Communication Protocol checkpoints (CP-A through CP-E). The intended check is "C-01 through C-04" (Compositional rules: per-category minimums, mechanism target, mechanism density, thirds coverage).

**Fix:** Change `CP-01 through CP-04` to `C-01 through C-04`.

The wrapper already has the correct interpretation. This is a prompt-side typo only.

---

## PART 7: FULL REVISED C3 GATE SEQUENCE

Incorporating all additions from Parts 2-6:

```
Gate 0 (Pre-Build):   Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5.
                      P-05: Every zone boundary has ALL THREE conditions. Any 3-NO zone = MERGE.

Gate 1 (Post-Pass-1): SC-01 through SC-07. Max 2 fix cycles. Fail after 2 = ABORT.
                      S-09+S-11: No margin/padding > 96px (source or computed).
                      P-04: Builder confirms visual scroll-through before file write.

Gate 2 (Landmarks):   Header + Footer + all sections present.
                      S-06: >= 5 content sections. FAIL if < 5.

Gate 3 (Post-Pass-2): C-01 through C-04. Spatial re-check (regression detection).
                      S-09+S-11: Re-check spacing limits post-mechanism.
                      C-05: >= 3 transition types (SMOOTH/BRIDGE/BREATHING).
                      C-06: No two adjacent transitions identical.
                      C-07+C-17: >= 2 bridge transitions with cognitive-reframe prose each.
                      C-14: Signal-to-silence ratio 0.6-0.8:1.
                      MC-08: >= 3 distinct spacing values across section boundaries.
                      P-04: Builder confirms scroll-through before file write.

Gate 4 (Post-Pass-3): 2 fresh-eyes agents. Metaphor structural >= 70% without labels.
                      C-10: >= 2 purpose-built components for THIS content. List them.
                      MC-04: >= 2 responding sequences.
                      MC-05: >= 2 contrasting deployments.
                      MC-06: >= 1 cascading chain (3+ mechanisms).
                      MC-07: >= 10 of 15 dimension pairs coupled.
                      SC-08: No scale has ALL 7 channels active.
                      P-06: Pattern overhead <= 20% of content height.

Gate 5 (Final):       Mode 4 PA (9 auditors, 48 questions). Programmatic soul/token/CPL audit.

KILL CRITERIA QUICK REFERENCE:
- KB-01: content sections >= 4 with >= 200 words each. FAIL = ABORT.
- KB-03: predicted void <= 30%. FAIL = restructure.
- KB-04: execution prompt <= 200 lines. FAIL = COMPRESS.
- SP-01: container width 940-1100px. FAIL after 2 cycles = ABORT.
- FK-01: PA-05 average >= 3/4 at final audit. FAIL = DO NOT SHIP.
```

---

## PART 8: ENFORCEMENT COVERAGE AFTER CHANGES

### Before (from Report 10)

| Category | Rules | Aligned | Partial | Gap |
|----------|-------|---------|---------|-----|
| Spatial (S) | 15 | 9 | 3 | 3 |
| Soul (U) | 10 | 10 | 0 | 0 |
| Compositional (C) | 18 | 9 | 3 | 6 |
| Multi-Coherence (MC) | 8 | 3 | 0 | 5 |
| Scale-Channel (SC) | 8 | 7 | 0 | 1 |
| Metaphor Gate (MG) | 5 | 4 | 1 | 0 |
| Process (P) | 8 | 3 | 2 | 3 |
| **TOTAL** | **71** | **45** | **9** | **18** |

**63% aligned, 13% partial, 25% gap**

### After (with this enrichment applied)

| Category | Rules | Aligned | Partial | Gap |
|----------|-------|---------|---------|-----|
| Spatial (S) | 15 | 12 | 3 | 0 |
| Soul (U) | 10 | 10 | 0 | 0 |
| Compositional (C) | 18 | 15 | 3 | 0 |
| Multi-Coherence (MC) | 8 | 8 | 0 | 0 |
| Scale-Channel (SC) | 8 | 8 | 0 | 0 |
| Metaphor Gate (MG) | 5 | 4 | 1 | 0 |
| Process (P) | 8 | 6 | 2 | 0 |
| **TOTAL** | **71** | **63** | **9** | **0** |

**89% aligned, 13% partial, 0% gap**

### Gap Elimination: 18 -> 0

All 18 previously unenforced rules now have explicit gate assignments:
- S-06 -> Gate 2
- S-09, S-11 -> Gate 1 + Gate 3 (consolidated)
- C-05, C-06 -> Gate 3
- C-07, C-17 -> Gate 3 (consolidated)
- C-10 -> Gate 4
- C-14 -> Gate 3
- MC-04, MC-05, MC-06, MC-07 -> Gate 4
- MC-08 -> Gate 3
- SC-08 -> Gate 4
- P-04 -> Gate 1 + Gate 3
- P-05 -> Gate 0
- P-06 -> Gate 4

### Remaining 9 PARTIAL rules (not addressed here -- require wrapper-side changes only)

These 9 rules are PARTIALLY aligned (prompt + self-check enforce them, but wrapper gates could be stronger). They are NOT zero-enforcement, so making the prompt self-enforcing does not require changes:

1. S-03 (header proportion) -- in B10 self-check but not programmatic audit
2. S-08 (heading spacing) -- in B10 self-check but not programmatic audit
3. S-12 (viewport content coverage) -- in B10 but conflated with S-10 in wrapper
4. S-14 (graduated content-to-void) -- pre-build check only, intermediate thresholds implicit
5. C-09 (designed moments per quartile) -- in B10 self-check only
6. C-11 (spacing variation) -- partially via MC-08 anti-metronome
7. C-18 (density arc) -- in B10 self-check only
8. MG-02 (interpretive distance >= 2) -- subsumed by MG-01 rubric
9. P-03 (two-instance pattern) -- structural from multi-agent architecture
10. P-07 (artifact deliverables) -- spirit enforced by wrapper

**Note:** Items 9 and 10 (P-03, P-07) were listed as PARTIAL in Report 10 but are structurally enforced by the multi-agent architecture and wrapper operational procedures. They do NOT need prompt-level gate checks.

---

## PART 9: IMPLEMENTATION CHECKLIST

For the prompt editor applying these changes:

- [ ] **C3 Gate 0:** Add P-05 zone boundary check (1 line)
- [ ] **C3 Gate 1:** Add S-09+S-11 consolidated + P-04 (2 lines)
- [ ] **C3 Gate 2:** Add S-06 count check (1 line)
- [ ] **C3 Gate 3:** Fix CP-01 typo to C-01. Add 7 checks: S-09+S-11 re-check, C-05, C-06, C-07+C-17, C-14, MC-08, P-04 (7 lines)
- [ ] **C3 Gate 4:** Add 7 checks: C-10, MC-04, MC-05, MC-06, MC-07, SC-08, P-06 (7 lines)
- [ ] **B10 Self-Check:** Add 8 items (S-06, S-09+S-11, C-07, C-10, C-14, MC-08, P-04, P-06)
- [ ] **Verify:** No rule appears in more than 2 gates (prevent over-checking)
- [ ] **Verify:** Gate line counts: Gate 0 (+1), Gate 1 (+2), Gate 2 (+1), Gate 3 (+7), Gate 4 (+7), Gate 5 (unchanged) = +18 lines total to C3

**Net prompt growth:** ~26 lines (18 gate lines + 8 self-check lines). This brings Section C3 from ~16 lines to ~34 lines and B10 from 18 lines to 26 lines. Total prompt grows from ~248 lines to ~274 lines. This is within the 250-line soft cap for Sections A-D if we count only those layers, but exceeds it. However, the alternative (18 unenforced rules) is categorically worse than +26 lines.

---

**END ALIGNMENT ENRICHMENT SPECIFICATION**
**Rules addressed:** 18/18 zero-enforcement gaps
**Consolidations:** 2 (S-09+S-11, C-07+C-17)
**Rules confirmed non-optional:** 18/18
**Gate typo fixed:** 1 (CP-01 -> C-01 at Gate 3)
**New alignment score:** 89% aligned, 0% gap (up from 63% aligned, 25% gap)
