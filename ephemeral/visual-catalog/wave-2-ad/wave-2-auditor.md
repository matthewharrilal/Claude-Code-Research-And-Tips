# Wave 2 AD -- Fresh-Eyes Audit

**Auditor:** Independent, zero prior context
**Source:** `wave-2-retro.md` (368 lines), spot-checked against `ad-004-findings.md`, `ad-004-buddy-review.md`, `ad-001-findings.md`
**Comparison:** `wave-1-od/wave-1-auditor.md` (103 lines)

---

## 1. Does the AD Taxonomy Hold Up?

**Yes, with one structural caveat.** The "layout-as-instrument" pattern is genuinely distinct from OD. AD pages are self-referential in a way OD pages are not: the Z-hero grid IS the Z-pattern argument, the bento layout IS the hierarchy thesis. This is not a labeling choice by the workers -- it is a real architectural difference visible in the HTML. The retro correctly identifies this as the defining characteristic.

**The caveat:** "Self-Demonstrating Layout" is proposed as a new Instrument category, but it is not really an Instrument. It is a META-PROPERTY of the entire page. You cannot point to a specific DOM element and say "this is the self-demonstrating layout instrument." The Z-hero grid is a Component; the fact that it demonstrates Z-pattern theory is a property of the page's editorial design, not a catalogable element. The retro conflates an insightful observation (AD pages are self-referential) with a taxonomy entry (Self-Demonstrating Layout as Instrument). Keep the observation; do not reify it into a category.

The axis-specific instruments (Tension Meter, Spiral Map, Confidence Badge, Pattern Echo Grid, etc.) ARE genuinely distinct and well-identified. These are novel wayfinding devices that have no OD equivalents.

---

## 2. I/G/C Distribution -- Calibration or Coincidence?

The retro reports a nearly identical distribution across waves: OD 35/30/35% vs AD 33/31/36%. This is presented as evidence that the taxonomy is stable. But the Wave 1 auditor asked a question that remains unanswered: **does element count reflect file complexity or worker thoroughness?**

The near-identical distributions could mean:
- (A) The design system genuinely distributes elements ~1/3 each across I/G/C (stable taxonomy)
- (B) Workers are anchored to an implicit "about 25-30 elements per file, roughly equal thirds" norm from the calibration document

The fact that corrected averages are 26.5 (OD) and 27.0 (AD) -- nearly identical across independently cataloged families -- supports hypothesis (B). If workers were counting independently without calibration anchoring, you would expect more variance. The 23-36 range across AD files is moderate, but the averages converging to 27 is suspiciously tight.

**This does not invalidate the results.** It means the calibration document is doing its job (consistent thresholds). But the retro should not present distribution consistency as proof of taxonomy validity -- it may be proof of calibration anchoring.

---

## 3. Boundary Cases -- Are They Resolved Consistently With Wave 1?

**Mostly yes, with improvement.** Comparing the two waves:

- **Phantom test:** Applied well in Wave 2. AD-004 and AD-005 are the only offenders (spiral-container, scroll-triggered reveal). The OD wave had 3 phantom entries. This is genuine improvement.
- **Infrastructure exclusion:** Excellent. Only AD-001's `::selection` slipped through. OD-006 had 3 infrastructure entries. Workers learned.
- **Sub-element merge:** Still inconsistent. AD-002 and AD-004 both list Version Badge independently despite the Wave 1 merge rule. The buddy caught it for AD-002 but accepted it for AD-004 "per precedent." This is exactly the inconsistency the Wave 1 auditor flagged: the "Evidence DNA test" is invoked when convenient and ignored when inconvenient. The Version Badge should be merged universally or not at all.

**New issue from AD not present in OD:** Gesture oversplitting. AD-004's three-entry confidence gradient (border-weight + spacing + background = one gradient split into three entries) is a new error pattern. The retro's proposed gesture merging rule is correct and needed.

---

## 4. Are Wave 1 Recommendations Being Applied?

| Wave 1 Recommendation | Applied in Wave 2? | Verdict |
|------------------------|---------------------|---------|
| Phantom test | 4/6 files clean; 2 offenders caught by buddies | GOOD |
| Infrastructure exclusion | 5/6 files clean | GOOD |
| Sub-element merge | Inconsistently applied | PARTIAL |
| Component slot test | AD-001 chapter divider still zero-slot | PARTIAL |
| Perceptual threshold | No below-threshold gestures cataloged | GOOD |
| "Designed vs. built" stance | Still not established as a principled rule | NOT ADDRESSED |
| Perceptual significance floor | Still no formal threshold | NOT ADDRESSED |

The mechanical filters (phantom, infrastructure, perceptual) transferred well. The judgment-dependent rules (sub-element, slot test) did not. This confirms the Wave 1 auditor's point: binary rules achieve compliance; judgment rules achieve inconsistency.

---

## 5. New Insights From AD

**Three genuine contributions:**

1. **Gesture merging rule.** The AD-004 oversplitting case produces a clear, actionable rule: when multiple CSS properties shift together across the same element set following one conceptual gradient, they are ONE gesture. This is the most practically useful new rule from Wave 2.

2. **Self-referential content test.** AD generates tables that describe the page's own structure (AD-001 Gutenberg Zone Table, AD-005 WAVE density table). The proposed test -- "Does removing this eliminate awareness of WHERE, or understanding of HOW?" -- is a useful heuristic. However, it will be hard to apply consistently because the line between "where I am" and "how this works" is fuzzy in self-demonstrating pages.

3. **Orphaned CSS filter.** Simple, binary, verifiable. Should have been in Wave 1 instructions.

---

## 6. Missing Perspectives -- What Is Not Being Asked?

The Wave 1 auditor raised four unasked questions. The retro answers one (perceptual threshold -- workers improved) but leaves three open. I add two more:

**Still unanswered from Wave 1:**

1. **"Designed vs. built?"** The retro still includes a "defined but not instantiated" entry (AD-005 scroll-triggered reveal) instead of taking a clear stance. Removing it from the corrected count is pragmatic but unprincipled.

2. **"Does element count reflect file complexity or worker thoroughness?"** See section 2 above. Still not addressed.

3. **"Is I/G/C the right taxonomy?"** 27 boundary cases in the AD retro alone. The Wave 1 auditor noted that 30+ boundary cases across 159 elements is a high ambiguity rate. Now we have 27 more across 162 elements. The cumulative boundary-case rate is ~18% and not declining. Nobody has asked whether a different decomposition would produce fewer.

**New questions from Wave 2:**

4. **"Are worker rankings meaningful?"** The retro ranks all 6 workers and 6 buddies. But the ranking criteria mix thoroughness (element count), accuracy (correction rate), and insight (novel pattern identification). AD-004 worker ranks last despite identifying the most conceptually interesting patterns (geological metaphor, confidence gradient), because those patterns required the most corrections. A worker who plays it safe and catalogs only obvious elements will rank higher than one who attempts difficult-to-classify elements. This incentivizes conservatism and punishes exploration -- exactly the wrong signal for Wave 3.

5. **"Is the buddy process catching the right things?"** The miss rate is 3.2% (workers miss very little). The correction rate is 7.9% (buddies mostly remove/reclassify). But are the corrections improving the catalog or just enforcing a narrower interpretation? Every buddy correction is a REMOVAL. No buddy added a category or proposed a novel classification. The buddy process functions as a conservatism filter. In Wave 3 (CD files, higher compositional complexity), this bias toward removal may suppress novel patterns that resist easy classification.

---

## 7. Summary Verdict

| Dimension | Rating | Key Issue |
|-----------|--------|-----------|
| AD taxonomy validity | **Genuine and distinct** | Self-demonstrating layout is a page property, not an element |
| I/G/C distribution | **Suspiciously consistent** | May reflect calibration anchoring, not taxonomy stability |
| Wave 1 rule transfer | **Binary rules: good. Judgment rules: inconsistent** | Sub-element merge still unresolved |
| Boundary case handling | **Improved but not declining** | ~18% rate across both waves |
| New contributions | **3 useful rules** | Gesture merging is highest value |
| Missing perspectives | **5 unasked questions** | Worker rankings may incentivize conservatism |

**Overall:** The AD retro is thorough, well-structured, and honest about its corrections. It improves on Wave 1 in mechanical filter application. Its primary weakness is the same as Wave 1's: treating a judgment-dependent classification as though it produces definitive assignments, and a buddy process that systematically filters toward conservatism. For Wave 3 (CD), consider explicitly asking workers to flag "taxonomy-resistant" elements as a positive category rather than forcing them into I/G/C bins.
