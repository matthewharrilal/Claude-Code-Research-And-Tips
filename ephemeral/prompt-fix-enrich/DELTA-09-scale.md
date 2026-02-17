# DELTA-09-scale: Scale Research Cross-Reference vs. Final Enriched Prompt

**Auditor:** delta-check agent
**Date:** 2026-02-17
**FILE 1 (audit):** `ephemeral/prompt-fix-enrich/09-scale-deep-crossref.md`
**FILE 2 (prompt):** `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`
**Scope:** CRITICAL and IMPORTANT items only (NICE-TO-HAVE excluded)

---

## METHODOLOGY

FILE 1 classifies every finding as CRITICAL, IMPORTANT, or NICE-TO-HAVE. There are ZERO CRITICAL
findings (stated explicitly in the audit's consolidated insertion spec). All actionable gaps are
IMPORTANT. This delta check covers all 9 IMPORTANT items from FILE 1.

The 8 IMPORTANT insertions proposed in FILE 1 were:
  I-01: Semantic density proportionality rule (C-19)
  I-02: Channel density per transition rule (SC-09)
  I-03: Chromatic-density alignment rule (SC-10)
  I-04: Scale gaps warning (A3 addition)
  I-05: Channel-scale priority, 80/20 (A3 addition)
  I-06: Builder channel self-check (B10 addition)
  I-07: Agent-channel ownership (C1 addition)
  I-08: Spatial Confidence Index formula (S-16)
  +CSS line count warning to B10 (borderline IMPORTANT/NICE-TO-HAVE)

---

## ALREADY FIXED

### I-01: Semantic density proportionality rule (C-19)
**Finding:** 1.6 + 7.9 (invocation C-07). "Most important content block MUST use more mechanisms
than any supplementary content block."
**Status in FILE 2:** PRESENT. Rule C-19 appears at B3, lines 193-196:
> "C-19. Semantic density proportionality: the single most important content block MUST use
>       more mechanisms than any supplementary content block. Critical > Standard > Supplementary.
>       Verify: identify most-important and least-important elements; count mechanisms on each."
Also confirmed in Integration Log (line 726): "SCALE | C-19 semantic density | 09-scale-deep-crossref.md"
**Verdict: ALREADY FIXED.**

### Scale 6+ cost note (A3 addition)
**Finding:** 1.2. Scale 6 yields 0.5-1% richness at EXTREME cost.
**Status in FILE 2:** PRESENT. A3 (line 45) now reads:
> "NEVER target 6+ scales. Richness gain from scale 6+ is 0.5-1% at EXTREME cost and INVISIBLE
>  to static PA audit."
Integration Log (line 727): "SCALE2 | Scale 6+ warning | 09-scale-deep-crossref.md | A3: Added
0.5-1% gain / EXTREME cost note"
**Verdict: ALREADY FIXED.**

---

## STILL MISSING

### I-02: Channel density per transition rule (SC-09)
**Finding:** 2.2 + 7.9 (invocation C-01). "Every section boundary must deploy >= 3 channels
simultaneously (chromatic, typographic, spatial, structural, density, rhythmic)."
**Search result:** No match for SC-09, "channel density per transition," or ">= 3 channels" in FILE 2.
**Proposed insertable text from FILE 1:**
```
SC-09. Channel density per transition: every section boundary must deploy >= 3 channels
       simultaneously (of: chromatic, typographic, spatial, structural, density, rhythmic).
       Verify: at each section break, count changed properties. Count >= 3 = PASS.
```
**Placement:** Section B5, after SC-08.
**Verdict: STILL MISSING.**

---

### I-03: Chromatic-density alignment rule (SC-10)
**Finding:** 7.9 (invocation C-02). "Zone-sparse sections (warm cream backgrounds) MUST have
LESS content per viewport than zone-dense sections (neutral/cool backgrounds)."
**Search result:** No match for SC-10, "chromatic-density alignment," or warm/cool content comparison
in FILE 2.
**Proposed insertable text from FILE 1:**
```
SC-10. Chromatic-density alignment: zone-sparse sections (warm backgrounds) MUST have
       LESS content per viewport than zone-dense sections (neutral/cool backgrounds).
       Warm < Neutral = PASS.
```
**Placement:** Section B5, after SC-09 (which is itself missing; both would be added together).
**Verdict: STILL MISSING.**

---

### I-04: Scale gaps warning
**Finding:** 5.8. "Gaps between scales are worse than missing scales. A page with 4 scales that
has a GAP (Page + Character but no Section) reads worse than 2 continuous scales."
**Search result:** No match for "scale gap," "gaps worse," "continuous coverage," "Navigation > Page
> Section," or "2 continuous scales" in FILE 2.
**Proposed insertable text from FILE 1:**
```
Scale gaps are worse than missing scales. If targeting 4 scales, ensure continuous coverage
(Navigation > Page > Section > Component). 2 continuous scales > 4 scales with gaps.
```
**Placement:** Section A3, after the EMPIRICAL WARNING block.
**Verdict: STILL MISSING.**

---

### I-05: Channel-scale priority (80/20)
**Finding:** 7.7. "Not all 35 matrix cells are equal. Highest-impact cells (Page-Spatial,
Component-Structural, Section-Density, Page-Chromatic) have highest perceptual ROI and should
be filled first."
**Search result:** No match for "Page-Spatial," "Component-Structural," "Section-Density,"
"Page-Chromatic," "channel.*priority," or "highest-impact" in FILE 2.
**Proposed insertable text from FILE 1:**
```
CHANNEL-SCALE PRIORITY (fill highest-impact cells FIRST):
1. Page-Spatial (squint test, VETO). 2. Component-Structural. 3. Section-Density. 4. Page-Chromatic.
Leave Character-scale channels and Navigation-scale density for LAST or empty.
```
**Placement:** Section A3, after the scale gaps text (I-04).
**Verdict: STILL MISSING.**

---

### I-06: Builder channel self-check (B10 addition)
**Finding:** 7.10. The builder self-check (B10) does not include channel-level checks, missing
the exact failure mode the Ceiling experiment exhibited (all mechanisms in one channel).
**Search result:** No match for "CHANNEL SELF-CHECK," "channels shift," "warmest background has
least content," or "heaviest border" in FILE 2. The B10 self-check (lines 297-317) has 16 checkbox
items but none cover per-transition channel counts.
**Proposed insertable text from FILE 1:**
```
CHANNEL SELF-CHECK:
[ ] Transition 1 (early): >= 3 channels shift?
[ ] Transition 2 (middle): >= 3 channels shift?
[ ] Transition 3 (late): >= 3 channels shift?
[ ] Warmest background has least content per viewport?
[ ] Heaviest border on most important content?
```
**Placement:** Section B10, after the existing 16 items, before the SendMessage instructions.
**Verdict: STILL MISSING.**

---

### I-07: Agent-channel ownership (C1 addition)
**Finding:** 7.11. Without explicit channel ownership in the agent roster, no agent feels
responsible for multi-channel coordination. The C1 agent roster assigns agents to PASSES but not
to CHANNELS.
**Search result:** No match for "CHANNEL OWNERSHIP," "Ch7 Intentional," "Ch5 Density," "Ch3
Spatial," or any channel ownership annotation in FILE 2. The C1 agent roster (lines 379-412) lists
agents and their pass assignments only.
**Proposed insertable text from FILE 1:**
```
CHANNEL OWNERSHIP:
  Metaphor Agent:       Ch7 Intentional
  Content Architect:    Ch5 Density + Ch6 Rhythmic
  Planner:              Ch3 Spatial + Ch4 Structural (integrates all)
  Mechanism Builder:    Ch1 Chromatic + Ch2 Typographic (implements only)
  Embedded Auditor:     ALL 7 (validates SC rules)
```
**Placement:** Section C1, after the agent roster (after line 412).
**Verdict: STILL MISSING.**

---

### I-08: Spatial Confidence Index formula (S-16)
**Finding:** 7.14. The SCI formula provides a single computable number for the spatial confidence
gate: SCI = 1 - (max_void_height / total_page_height). Target >= 0.85. VETO < 0.60 = DO NOT SHIP.
**Search result:** No match for "S-16," "SCI," "Spatial Confidence Index," "max_void_height," or
the formula in FILE 2. The B1 spatial rules (lines 116-144) stop at S-15 (zone count ceiling).
**Note:** FILE 2 has S-12 (viewport content coverage < 30% = FAIL) and S-10 (no contiguous void
> 2160px), which address void detection but do NOT provide the SCI formula or the 0.60 VETO
threshold as a single computed ratio.
**Proposed insertable text from FILE 1:**
```
S-16. Spatial Confidence Index: SCI = 1 - (max_void_height / total_page_height).
      Target: SCI >= 0.85. Warning: SCI < 0.70. VETO: SCI < 0.60 = DO NOT SHIP.
      Verify: find tallest contiguous area with no content elements (pure background).
      Divide by total page height. Subtract from 1.
```
**Placement:** Section B1, after S-15 (line 144).
**Verdict: STILL MISSING.**

---

### CSS line count warning (B10 borderline IMPORTANT/NICE-TO-HAVE)
**Finding:** 3.5. "The context wall is at approximately 800-1000 CSS lines. Above 800, composition
quality degrades." FILE 1 classified this as borderline IMPORTANT with proposed B10 self-check item:
`[ ] CSS line count <= 800  (above 800, composition quality degrades)`
**Search result:** No match for "CSS line count," "800," or "context wall" in FILE 2.
**Verdict: STILL MISSING** (borderline -- lower priority than the 7 items above, but FILE 1 rated
it IMPORTANT enough to include in the insertion spec).

---

## SUMMARY TABLE

| # | Finding | Item | Status |
|---|---------|------|--------|
| I-01 | 1.6, 7.9 | C-19 Semantic density proportionality | ALREADY FIXED |
| -- | 1.2 | A3 Scale 6+ cost note | ALREADY FIXED |
| I-02 | 2.2, 7.9 | SC-09 Channel density per transition | **STILL MISSING** |
| I-03 | 7.9 | SC-10 Chromatic-density alignment | **STILL MISSING** |
| I-04 | 5.8 | A3 Scale gaps warning | **STILL MISSING** |
| I-05 | 7.7 | A3 Channel-scale priority (80/20) | **STILL MISSING** |
| I-06 | 7.10 | B10 Channel self-check | **STILL MISSING** |
| I-07 | 7.11 | C1 Agent-channel ownership | **STILL MISSING** |
| I-08 | 7.14 | S-16 Spatial Confidence Index formula | **STILL MISSING** |
| -- | 3.5 | B10 CSS line count warning (borderline) | **STILL MISSING** |

**ALREADY FIXED: 2 of 10**
**STILL MISSING: 8 of 10** (7 confirmed IMPORTANT + 1 borderline)

---

## PRIORITIZED ACTION ORDER

If applying all 8 missing items, recommended order by operational impact:

1. **S-16 (SCI formula)** -- provides a computable single-number gate for the most common failure mode (whitespace void). Highest diagnostic value.
2. **SC-09 (channel density per transition)** -- catches mono-channel transitions that plagued the Ceiling experiment.
3. **SC-10 (chromatic-density alignment)** -- companion to SC-09; closes the warm-zone overloading failure.
4. **I-04 (scale gaps warning)** -- prevents 4-scale ambition with holes that reads worse than 2 clean scales.
5. **I-06 (channel self-check)** -- builder-facing; catches mono-channel deployment before file write.
6. **I-07 (agent-channel ownership)** -- assigns multi-channel coordination responsibility explicitly.
7. **I-05 (channel-scale priority)** -- tells builder where to invest attention first in the 35-cell matrix.
8. **CSS line count warning** -- borderline; low-cost addition to B10.

---

## NOTES ON SCOPE

The Integration Log in FILE 2 (lines 694-731) lists "Ultra-deep cross-references integrated: Scale
(09), MC (10), Channel (11), Flagship (12)" confirming that 09-scale-deep-crossref.md WAS used as
a source. However, only the two easiest insertions (C-19 and A3 scale 6+ note) were applied. The
7 harder insertions (new rules SC-09, SC-10, S-16; structural additions to A3, B10, C1) were not
carried through.

The channel-definition expansion in SC-02 (lines 222-228: "CHANNEL DEFINITIONS: Ch1 CHROMATIC...
Ch7 INTENTIONAL...") is from a different cross-reference (11-channel-deep-crossref.md), not from
09-scale-deep-crossref.md.

**END DELTA-09-scale**
