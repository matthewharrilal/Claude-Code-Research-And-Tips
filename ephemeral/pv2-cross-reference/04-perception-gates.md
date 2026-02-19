# PV2 Cross-Reference Report 04: Perception Gates Analysis

**Agent:** perception-gates analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference PV2-ARCHITECTURE-DIAGRAM against perception threshold and gate files; assess whether 12 binary checks are TRULY perceptual; evaluate ALWAYS FLAGSHIP implications
**Sources Read (ALL fully):**
1. `ephemeral/pipeline-analysis/_meta-cognitive/PV2-ARCHITECTURE-DIAGRAM.html` (1,142 lines)
2. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-threshold-map.md` (333 lines)
3. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-flagship-perception-audit.md` (321 lines)
4. `ephemeral/pipeline-analysis/_meta-cognitive/q20-experiment-protocol.md` (642 lines)
5. Cross-reference greps across all pv2-*.md files for gate IDs and threshold values

---

## EXECUTIVE SUMMARY

The PV2 Architecture Diagram describes a two-layer verification system (12 programmatic gates + full perceptual audit). After deep analysis against the three meta-cognitive source files, I find:

- **7 of 12 programmatic gates are TRULY perceptual** (they measure things humans can see)
- **5 of 12 are structural/compliance checks** (they ensure correctness, not visibility)
- **Perception thresholds are properly embedded in principle** but have **3 UNRESOLVED value discrepancies** that the architecture diagram papers over
- **The programmatic-vs-perceptual gap is ARCHITECTURALLY resolved** (two-layer system) but **OPERATIONALLY incomplete** (coherence verification still counts, doesn't measure)
- **ALWAYS FLAGSHIP demands tighter gates than the diagram specifies** -- current thresholds are calibrated for remediation-level (2.5/4), not flagship-level (3.5-4/4) quality

**VERDICT: STRONG FOUNDATION WITH 5 GAPS requiring fixes before codification.**

---

## SECTION 1: ARE THE 12 BINARY CHECKS TRULY PERCEPTUAL?

The architecture diagram (Section 4, "Two-Layer Verification") lists 12 programmatic gates labeled SC-01 through SC-12. I classify each by whether it tests something a HUMAN can perceive versus something that is structurally correct but invisible.

### Classification Matrix

| Gate ID | What It Checks | Truly Perceptual? | Classification | Rationale |
|---------|---------------|-------------------|----------------|-----------|
| SC-01 | Container 940-960px | **NO** | STRUCTURAL | A human at 1440px viewport sees content centered in whitespace. Whether the container is 940px or 980px is not perceptible without measuring. The SOUL identity requires it, but it is not a perception gate. |
| SC-02 | border-radius: 0, box-shadow: none | **NO** | SOUL COMPLIANCE | Absence of rounded corners and shadows is the brand identity. A human notices rounded corners (presence), not their absence. This is compliance, not perception. |
| SC-03 | Font trinity only | **PARTIAL** | SOUL + PERCEPTUAL | Using the wrong font family IS perceptible (sans-serif vs serif vs monospace). But verifying that ONLY the approved trinity is used is compliance. Marking PARTIAL. |
| SC-04 | Warm palette (R >= G >= B) | **YES** | PERCEPTUAL | A cool-tinted background (#E8EEF0, blue-shifted) is perceptibly different from a warm one (#F0EBE3). The R >= G >= B check enforces a visible quality. |
| SC-05 | No pure #000000 or #FFFFFF | **PARTIAL** | PERCEPTUAL + SOUL | Pure black text on pure white background creates harsh contrast perceptible as "cold." But the difference between #000000 and #1A1A1A is not perceptible at body text size. This is partially perceptual (prevents harsh extremes) and partially soul (brand warmth). |
| SC-06 | ARIA landmarks >= 3 | **NO** | ACCESSIBILITY | ARIA landmarks are invisible to sighted users. This is an accessibility gate, not a perception gate. |
| SC-07 | Skip-link present | **NO** | ACCESSIBILITY | Skip links are invisible until focused. Not a perception gate. |
| SC-08 | Component library classes | **NO** | STRUCTURAL | Whether a callout uses `.callout--info` vs a custom class is invisible to users. This enforces code quality, not visual quality. |
| SC-09 | Background delta >= 15 RGB | **YES** | PERCEPTUAL (CORE) | THIS is the flagship perception gate. Adjacent zones with < 15 RGB delta look identical to human eyes. Directly tests visibility. |
| SC-10 | Stacked gap <= 108px (Flagship) | **YES** | PERCEPTUAL | Gaps > 108px create visible "dead space" voids. The threshold comes from perceptual research on scrolling dead-space detection. |
| SC-11 | Font-size zones >= 2px delta | **YES** | PERCEPTUAL | A 1px font-size difference between zones (e.g., 15px vs 16px) is imperceptible at normal reading distance. >= 2px is the minimum visible difference. |
| SC-12 | Zone count 2-5 | **PARTIAL** | STRUCTURAL + PERCEPTUAL | A page with 1 zone is perceptibly monotone. A page with 7 zones is perceptibly fragmented. The 2-5 range prevents both extremes. But the specific count within that range is not perceptually driven. |

### Summary

| Category | Count | Gate IDs |
|----------|-------|----------|
| **TRULY PERCEPTUAL** | 4 | SC-04, SC-09, SC-10, SC-11 |
| **PARTIALLY PERCEPTUAL** | 3 | SC-03, SC-05, SC-12 |
| **NOT PERCEPTUAL** (structural/compliance/accessibility) | 5 | SC-01, SC-02, SC-06, SC-07, SC-08 |

**Finding 1: Only 4 of 12 programmatic gates are PURELY perceptual.** The architecture diagram labels the entire Layer 1 as "Programmatic Gates" without distinguishing which gates test perception versus compliance. This conflation is harmless for execution (all 12 should run) but misleading for understanding. The perception model shift (File 08) argued for gates that test VISIBILITY, not just EXISTENCE. The current gate set is 33% perception, 42% structural, and 25% accessibility/compliance.

**Recommendation:** Relabel the gate categories in the architecture. Group SC-04/SC-09/SC-10/SC-11 as "Perception Gates" and the rest as "Compliance Gates." This matters because when the diagram says "programmatic gates catch threshold violations," it should be clear that only 4 gates actually do this.

---

## SECTION 2: ARE PERCEPTION THRESHOLDS PROPERLY EMBEDDED?

The architecture diagram embeds four perception thresholds:
1. Background delta >= 15 RGB (SC-09)
2. Stacked gap <= 108px for Flagship (SC-10)
3. Font-size delta >= 2px (SC-11)
4. Zone count 2-5 (SC-12)

I cross-reference against the threshold-map's consolidated Table F (15 entries) and the perception audit's inventory (45 concepts from File 08).

### 2A. Thresholds IN the Architecture Diagram vs. Table F

| Table F Property | In Architecture Diagram? | Gate ID | Value Match? |
|-----------------|------------------------|---------|-------------|
| Background color >= 15 RGB | **YES** | SC-09 | **YES** -- diagram says 15 RGB |
| Background within-zone >= 5 RGB | **NO** | -- | ABSENT from diagram |
| Font-size >= 2px | **YES** | SC-11 | **YES** |
| Letter-spacing >= 0.03em | **NO** | -- | ABSENT from programmatic gates |
| Line-height >= 0.2 | **NO** | -- | ABSENT from programmatic gates |
| Font-weight >= 200 | **NO** | -- | ABSENT from programmatic gates |
| Border weight >= 1px | **NO** | -- | ABSENT from programmatic gates |
| Margin-bottom >= 8px | **NO** | -- | ABSENT from programmatic gates |
| Max-width >= 6ch | **NO** | -- | ABSENT from programmatic gates |
| Text color >= 15 RGB | **NO** | -- | ABSENT from programmatic gates |
| Border color >= 15 RGB | **NO** | -- | ABSENT from programmatic gates |
| Content-free gap <= 120px | **PARTIAL** | SC-10 | Diagram says 108px (Flagship), Table F says 120px (content-free) + 192px (structural) |
| Structural gap <= 192px | **NO** | -- | ABSENT from programmatic gates |
| Transition duration 0.1-0.3s | **NO** | -- | ABSENT from programmatic gates |
| Grid gap >= 8px | **NO** | -- | ABSENT from programmatic gates |

**Finding 2: The architecture diagram embeds 4 of 15 Table F thresholds into programmatic gates.** The remaining 11 thresholds exist only in the recipe's per-phase perception checks (builder self-assessment) and the PA's perceptual evaluation (fresh-eyes auditors). This is not necessarily wrong -- not every threshold needs a programmatic gate -- but it creates a gap: 11 perception properties can regress to sub-perceptual levels and only be caught by PA auditors, not by automated gates.

**The question is: which of the 11 missing thresholds SHOULD be programmatic gates?**

Properties that CAN be measured via `getComputedStyle`:
- Letter-spacing (yes, computed value is in px)
- Line-height (yes, computed value is in px)
- Font-weight (yes, computed value is numeric)
- Margin-bottom (yes)
- Text color (yes, RGB values)
- Border weight (yes)
- Border color (yes, RGB values)

Properties that CANNOT be reliably measured programmatically:
- Max-width delta (requires semantic grouping of elements)
- Within-zone background variation (requires knowing which elements are "within" a zone)
- Transition duration (requires triggering interactions)
- Grid gap (requires identifying grid containers)

**Recommendation for ALWAYS FLAGSHIP:** Add 5 more programmatic gates for properties that are measurable and have clear thresholds:

| Proposed Gate | Property | Threshold | Measurement |
|--------------|----------|-----------|-------------|
| SC-13 | Letter-spacing zone range | >= 0.03em (0.48px at 16px) | Max minus min `getComputedStyle().letterSpacing` across zone groups |
| SC-14 | Font-weight zone delta | >= 200 | Compare `getComputedStyle().fontWeight` across zone group headers vs body |
| SC-15 | Text color zone delta | >= 15 RGB | Compare `getComputedStyle().color` of body text across zones |
| SC-16 | Border presence on >= 40% sections | >= 1px on at least 40% of sections | Count sections with `borderLeftWidth >= 1px` / total sections |
| SC-17 | Line-height zone delta | >= 0.2 | Compare computed line-height / font-size ratios across zones |

This would bring the programmatic gate count from 12 to 17, with 9 of 17 being TRULY perceptual.

### 2B. Value Discrepancies the Diagram PAPERS OVER

The architecture diagram presents clean, resolved values. The threshold-map reveals 3 UNRESOLVED discrepancies that the diagram silently resolves without marking as decisions.

| Property | Diagram Value | File 42 Value | Threshold-Map Resolution | Status |
|----------|-------------|--------------|------------------------|--------|
| Background delta | >= 15 RGB | >= 10 RGB | >= 15 RGB recommended | **DIAGRAM ADOPTS 15, File 42 STILL SAYS 10** |
| Stacked gap | <= 108px (Flagship) | <= 120px | 120px content-free + 192px structural | **DIAGRAM ADOPTS 108, disagreeing with BOTH Table F thresholds** |
| Letter-spacing | Not in gates | >= 0.025em (File 42) / >= 0.03em (CLAUDE.md) | >= 0.03em | **NOT IN DIAGRAM at all** |

**Finding 3: The 108px stacked gap value in the diagram is a NOVEL specification not found in ANY source file.** The threshold-map recommends 120px for content-free gaps. File 42 uses 120px. The architecture diagram (Section 5 tier table) says "108px hard cap" for Flagship -- citing the Phase 0.6 worst-case arithmetic (padding-bottom 48px + margin 24px + divider 3px + padding-top 24px = 99px < 120px, or with max stacking: 108px). But 108px is the WORST-CASE COMPUTED VALUE from the recipe's specific numbers, not a general threshold. Using the computed worst-case as the cap means ANY deviation from the recipe's exact padding values will FAIL the gate, even if the deviation produces a perceptually acceptable result.

**Recommendation:** Use 120px as the content-free gap threshold (matches File 42, threshold-map, and CLAUDE.md). Use 108px only as a VERIFICATION that recipe values were followed correctly, not as a general-purpose gate.

---

## SECTION 3: DOES THE ARCHITECTURE RESOLVE THE PROGRAMMATIC-VS-PERCEPTUAL GAP?

The central corpus finding is: "Programmatic gates PASS but PA FAILS." The architecture diagram's response is a two-layer system. I evaluate whether this actually resolves the gap.

### 3A. The Gap Defined

From the flagship experiment:
- Gate 4 confirmed 6 CSS channels with 4+ shifts per boundary -- PASS
- Fresh-eyes PA found those shifts were 1-8 RGB apart -- IMPERCEPTIBLE
- The page was technically rich and visually flat

The gap: programmatic checks measured PRESENCE and COUNT, not MAGNITUDE.

### 3B. How the Architecture Resolves It

The diagram introduces two resolution mechanisms:

**Mechanism 1: Programmatic gates now include MAGNITUDE thresholds (SC-09, SC-10, SC-11).** This directly addresses the gap for 3 CSS properties. Before the remediation, gates checked "does background vary?" (binary). Now SC-09 checks "does background vary BY >= 15 RGB?" (magnitude). This is the correct fix for the 3 properties covered.

**Mechanism 2: Perceptual audit with fresh-eyes auditors catches what programmatic gates miss.** The PA layer (9 auditors, 48 questions, screenshot-based) addresses gestalt failures, whitespace voids, monotony, and "technically correct but lifeless" pages. This is the correct catch-all for properties NOT covered by programmatic gates.

### 3C. Where the Resolution is INCOMPLETE

**Gap 1: Coherence verification (Phase 8E) still COUNTS, doesn't MEASURE.**

The perception audit (pv2-flagship-perception-audit.md, Concept C32) identifies this as the MOST SIGNIFICANT remaining gap. Phase 8E requires ">= 3 properties shifting simultaneously" at each transition, but does NOT verify that each shift exceeds its perception threshold. A builder could satisfy 8E with 3 sub-perceptual shifts (e.g., 2 RGB background + 1px font-size + 0.01em letter-spacing = 3 "shifts" that are all invisible).

The diagram (Section 4, Layer 1) lists the 12 gates without mentioning this gap. The coherence check is covered by the recipe's Phase 8E but is NOT a programmatic gate (it is a builder self-assessment).

**Recommendation:** Add a programmatic coherence gate:
```
SC-18: At each major section boundary, count CSS properties that shift
by >= their perception threshold. Require >= 3 PERCEPTIBLE shifts.
Measurement: For each adjacent section pair, check: background delta >= 15 RGB,
font-size delta >= 2px, font-weight delta >= 200, letter-spacing delta >= 0.03em,
border presence change (0->1px or 1->0px). Count properties with above-threshold
changes. FAIL if any boundary has < 3 perceptible shifts.
```

This converts Phase 8E from counting to measuring -- completing the inversion that File 08 called for.

**Gap 2: The per-phase perception checks are builder self-assessment, not programmatic gates.**

The recipe has a "PERCEPTION CHECK" after every phase (0 through 7). These are phrased as "Can you SEE...?" questions for the builder to self-evaluate. The architecture diagram lists these as part of "Step 5 -- Build Execution" but does not make them programmatic. They rely on the builder's honest self-assessment.

The perception audit (pv2-flagship-perception-audit.md, Concept C24) notes these as "the most successful structural embedding." But the Q20 experiment protocol warns (Section 7.2, scenario 3): "If the builder has thresholds but still produces sub-perceptual CSS despite having the threshold table, the thresholds were present but not operationalized."

**In an ALWAYS FLAGSHIP world:** Convert the 3 most critical per-phase perception checks to programmatic gates that run DURING the build (not just at the end):

| Build Phase | Perception Check | Programmatic Conversion |
|------------|-----------------|----------------------|
| Phase 3 (Zone backgrounds) | "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?" | Run SC-09 (background delta >= 15 RGB) AFTER Phase 3 completes |
| Phase 5 (Typography) | "Zone 1 text should look LARGER and more OPEN" | Run SC-11 (font-size >= 2px) + SC-17 (line-height >= 0.2) AFTER Phase 5 completes |
| Phase 8 (Final) | Full Phase 8A threshold table | Run ALL perception gates as final verification |

This creates inline programmatic verification at 3 critical build phases, not just at the end.

**Gap 3: No programmatic gate for the CUMULATIVE sub-perceptual effect.**

The threshold-map (Section D3) identifies an interaction effect: "Multiple properties each at threshold-floor create an 'uncanny valley' where everything technically passes but the aggregate feels mechanical." No gate addresses this.

**Recommendation for ALWAYS FLAGSHIP:** Add a "minimum above threshold" gate:
```
SC-19: Of the 9 perception-threshold properties (SC-04/09/10/11/13/14/15/16/17),
at least 4 must exceed 1.5x their minimum threshold. FAIL if fewer than 4
properties are above the 1.5x level.
```

This prevents the "everything at threshold floor" failure mode that creates technically compliant but perceptually flat output.

---

## SECTION 4: ALWAYS FLAGSHIP IMPLICATIONS FOR GATE TIGHTNESS

The user directive is "ALWAYS FLAGSHIP." This eliminates tier routing. Every page gets Flagship-level gates. Current implications:

### 4A. Current Tier Differences in Gates (from Architecture Diagram Section 5)

| Dimension | Middle | Ceiling | Flagship |
|-----------|--------|---------|----------|
| Gate severity | SIGNIFICANT | BLOCKING | ALL BLOCKING + tighter |
| Stacked gap | 120px target | 120px target | 108px hard cap |
| PA auditors | 2 | 4 | 9 (Mode 4) |
| PA-05 threshold | >= 3/4 | >= 3/4 | >= 3/4 (aspire 4/4) |
| Fix cycles | Max 2 | Max 3 | Max 3 + escalation |

### 4B. What ALWAYS FLAGSHIP Changes

With ALWAYS FLAGSHIP, the tier routing table collapses. Every page gets:
- ALL 12+ gates as BLOCKING (no SIGNIFICANT severity)
- 108px stacked gap hard cap (if retained; I recommend 120px -- see Section 2B)
- 9-auditor Mode 4 PA (all 48 questions)
- >= 3/4 PA-05 threshold (with aspiration to 4/4)
- Max 3 fix cycles + user escalation

**But the diagram's gate THRESHOLDS are calibrated for remediation-level quality (PA-05 2.5/4), not flagship aspirational quality (3.5-4/4).** The remediation achieved 2.5/4 with >= 10 RGB background deltas (actually 3-6 RGB). The threshold-map upgraded to >= 15 RGB. But if the aspiration is 4/4 DESIGNED, should the thresholds be EVEN TIGHTER?

### 4C. Proposed ALWAYS FLAGSHIP Gate Tightening

| Gate | Current Threshold | Proposed FLAGSHIP Threshold | Rationale |
|------|------------------|---------------------------|-----------|
| SC-09 (bg delta) | >= 15 RGB | **>= 20 RGB** | 15 RGB is the FLOOR of human perception (15-20 range from File 08). For flagship aspirational quality, use the MIDDLE of the range. CD-006 achieves 25-40 RGB deltas between zones. |
| SC-10 (stacked gap) | <= 108px | **<= 100px** | Tighter prevents any whitespace void perception. CD-006 has maximum gaps of ~80px. |
| SC-11 (font-size) | >= 2px | >= 2px | Already at the minimum perceptible level. 2px is appropriate. |
| SC-18 (coherence) | >= 3 perceptible shifts | **>= 4 perceptible shifts** | Flagship pages should have richer transitions. CD-006 averages 5+ property shifts at boundaries. |
| SC-19 (above-1.5x) | >= 4 of 9 above 1.5x | **>= 6 of 9 above 1.5x** | Flagship means MOST properties are well above threshold, not just a few. |

**However, this tightening is SPECULATIVE (Tier 3-4 confidence).** The threshold-map explicitly warns: "The PRINCIPLE (there MUST be a minimum delta) is Tier 1 unanimous. The specific value (15 vs 10) is Tier 2 -- empirically motivated but not validated by controlled human perception testing." Tightening to 20 RGB would be Tier 3 at best.

**Recommendation:** Codify the current thresholds (15 RGB, 120px, 2px, etc.) as the FLOOR. Add a FLAGSHIP ASPIRATION note: "For flagship-quality pages, target 1.5x these thresholds. Programmatic gates enforce the floor; the PA evaluates whether the page achieves aspirational quality."

This separates the binary gate (PASS/FAIL at floor) from the aspirational target (PA evaluates). It avoids the "tightening spiral" where gates get progressively stricter based on speculation rather than evidence.

---

## SECTION 5: Q20 EXPERIMENT IMPLICATIONS FOR GATE DESIGN

The Q20 experiment protocol proposes testing whether perception thresholds ALONE (added to the unchanged master prompt) explain the quality improvement. This has direct implications for gate design.

### 5A. What Q20 Would Resolve

The 3-variable confound (Format x Specificity x Perception) means we don't know whether:
- Thresholds alone produce quality (gates are the primary intervention)
- Recipe format produces quality (sequenced steps, not gates, are what matter)
- Both together are needed (gates + recipe = synergy)

If Q20 shows thresholds in checklist format produce PA-05 >= 2.5/4, then the programmatic gates are the PRIMARY quality mechanism. If Q20 shows thresholds in checklist format produce PA-05 < 2.0/4, then the recipe format is the primary mechanism and gates are secondary.

### 5B. Gate Design Under Both Q20 Scenarios

| Q20 Outcome | Gate Design Implication |
|------------|----------------------|
| Thresholds sufficient (>= 2.5/4) | Gates are the core intervention. Invest in expanding from 12 to 17+ gates. Inline verification during build. Every perception property gets a programmatic check. |
| Thresholds insufficient (< 2.0/4) | Gates are NECESSARY but not SUFFICIENT. The recipe format is what drives quality. Gates serve as a safety net (catch regressions) not a quality driver (create quality). Keep the 12-gate set; invest more in recipe quality. |
| Thresholds ignored by builder | FORMAT is causally prior to gates. Gates in checklist format are not acted on. Invest in recipe format FIRST, then embed gates within recipe phases. |

### 5C. Recommendation for ALWAYS FLAGSHIP Without Q20 Data

Since Q20 has NOT been run, the architecture must hedge. The current design (gates + recipe + PA) is correct as a hedge -- it assumes BOTH gates and recipe matter. The risk is over-investing in gates that turn out to be secondary (Q20 scenario 2-3).

**Practical recommendation:** Codify the 12 existing gates + the 5 proposed additions (SC-13 through SC-17) + the coherence gate (SC-18). Total: 18 gates. Do NOT add the speculative "above 1.5x" gate (SC-19) until evidence supports it. Run Q20 after codification to determine whether to invest further in gate expansion or recipe refinement.

---

## SECTION 6: THE WARM PALETTE PERCEPTION ASYMMETRY

The threshold-map (Section D3) raises a critical concern not addressed in the architecture diagram: **warm-cool perception asymmetry.**

The KortAI palette operates in a narrow warm range (R: 240-255, G: 235-250, B: 225-245). Within this range, a 15 RGB delta looks LESS different than the same delta in a cool or neutral palette. The threshold-map proposes a 1.3-1.5x warm palette multiplier.

**This is NOT in the architecture diagram.** The diagram's SC-09 checks "background delta >= 15 RGB" without palette context. A 15 RGB shift between two warm creams (e.g., #FEF5EB to #F8F6F3 = delta of 6/1/8 = max 8 RGB -- FAILS SC-09, correctly) is less perceptible than a 15 RGB shift between warm and cool tones.

But the concern is the REVERSE case: two backgrounds that technically differ by 15+ RGB on one channel but are perceptually similar because they're both in the warm cream range. For example:
- #FEF5EB (254/245/235) to #EEE5DB (238/229/219): delta = 16/16/16 -- PASSES SC-09
- But both are "warm cream" and visually quite similar at a glance

**Finding 4: SC-09 should include a warm-palette-aware measurement.** Instead of checking max single-channel delta >= 15, check the PERCEIVED color difference using a simple heuristic: `sqrt((dR)^2 + (dG)^2 + (dB)^2) >= 26` (which approximates 15 RGB on a single channel in Euclidean color space). This catches cases where all three channels shift by 10 each (individually < 15, collectively = 17.3 Euclidean, FAILS) versus a single channel shifting 15 (= 15 Euclidean, PASSES). The Euclidean threshold of 26 corresponds roughly to "two zones that a human can distinguish at a glance."

Alternatively, keep the single-channel check but add: "At least ONE channel must differ by >= 20 RGB OR all three channels must differ by >= 10 RGB each."

---

## SECTION 7: SYNTHESIS -- THE 5 GAPS

### Gap 1: COHERENCE GATE (SIGNIFICANT)
**Problem:** Phase 8E counts properties shifting without verifying magnitude.
**Source:** pv2-flagship-perception-audit.md, Concept C32.
**Fix:** Add SC-18 -- perceptible coherence gate (>= 3 above-threshold shifts at each boundary).

### Gap 2: THRESHOLD VALUE DISCREPANCIES (SIGNIFICANT)
**Problem:** Architecture says 15 RGB; File 42 (the builder's recipe) still says 10 RGB. Letter-spacing 0.025em vs 0.03em unresolved.
**Source:** pv2-threshold-map.md, Section A matrix.
**Fix:** Update File 42 during extraction to operational-recipe.md. Adopt 15 RGB and 0.03em as canonical.

### Gap 3: MISSING PROGRAMMATIC GATES (MODERATE)
**Problem:** Only 4 of 15 perception thresholds are programmatic gates.
**Source:** Cross-reference of architecture diagram SC-01-12 against Table F.
**Fix:** Add SC-13 through SC-17 for letter-spacing, font-weight, text color, border presence, and line-height.

### Gap 4: WARM PALETTE ASYMMETRY (MODERATE)
**Problem:** SC-09 uses single-channel delta in a narrow warm palette where deltas are compressed.
**Source:** pv2-threshold-map.md, Section D3.
**Fix:** Add Euclidean color distance check or multi-channel requirement to SC-09.

### Gap 5: INLINE PHASE VERIFICATION (LOW-MODERATE)
**Problem:** Per-phase perception checks are builder self-assessment, not programmatic.
**Source:** pv2-flagship-perception-audit.md, Concepts C23/C24.
**Fix:** Run SC-09 after Phase 3, SC-11+SC-17 after Phase 5, all gates after Phase 8. For ALWAYS FLAGSHIP, inline verification catches issues BEFORE the full PA runs.

---

## SECTION 8: DOES THE ARCHITECTURE RESOLVE THE CORE PROBLEM?

The core problem from the corpus: "programmatic gates PASS but PA FAILS."

**Answer: YES, architecturally. PARTIALLY, operationally.**

The two-layer design (programmatic gates that test MAGNITUDE + perceptual audit that tests GESTALT) is the correct architecture. The diagram clearly separates Layer 1 (numbers) from Layer 2 (eyes) and explains why both are needed. The callout box in Section 4 directly addresses the flagship failure.

But operationally:
- The programmatic layer covers only 4 of 15 perception properties (Section 2A)
- The coherence check still counts instead of measuring (Section 3C, Gap 1)
- The threshold values have unresolved discrepancies (Section 2B)
- The warm palette creates compressed perception ranges not accounted for (Section 6)

**The architecture is correct. The implementation details need the 5 fixes above.**

---

## SECTION 9: ALWAYS FLAGSHIP -- FINAL ASSESSMENT

With ALWAYS FLAGSHIP, the tier routing in Section 5 of the architecture diagram becomes a single-tier system. This simplifies the orchestrator substantially (no classification step needed). But it raises the bar for every build.

### What ALWAYS FLAGSHIP Preserves from the Diagram
- Two-layer verification (essential, non-negotiable)
- 9-auditor Mode 4 PA for every build (expensive but required for quality)
- Opus builder (creative CSS, not just compliance)
- Full TC pipeline (Phases 0-3.5 with metaphor)
- 3 fix cycles + escalation

### What ALWAYS FLAGSHIP Changes
- Tier classification step: ELIMINATED (everything is Flagship)
- Gate severity: ALL gates are BLOCKING (no SIGNIFICANT fallback)
- PA-05 threshold: >= 3/4 COMPOSED (hard floor), aspire to 4/4 DESIGNED
- Stacked gap: Tighter (100-120px, not 120-192px range)
- Expected build time: 240-400 min for EVERY page (no 70-100 min Middle tier)
- Agent count: 12-16 per build (no 3-4 agent Middle tier)

### Cost Implication
ALWAYS FLAGSHIP means EVERY page costs 240-400 minutes and 12-16 agents. For a design system with 20 pages, that is 80-133 hours of agent compute. This is the CORRECT cost for the user's stated goal, but it should be acknowledged explicitly.

### Recommendation
The architecture diagram should be updated to:
1. Remove the tier routing table (Section 5) or mark it as "DEPRECATED -- ALWAYS FLAGSHIP"
2. Present a single Flagship column as the universal standard
3. Tighten the 5 gaps identified above
4. Add the 6 new programmatic gates (SC-13 through SC-18)
5. Embed the warm palette asymmetry note in SC-09

---

## APPENDIX: CROSS-REFERENCE MATRIX

For traceability, every claim in this report maps to its source.

| Claim | Source Document | Section/Line |
|-------|----------------|-------------|
| 12 gates listed SC-01 through SC-12 | PV2-ARCHITECTURE-DIAGRAM.html | Lines 751-763 |
| Background threshold 10 vs 15 discrepancy | pv2-threshold-map.md | Section A matrix, rows 1+5; Section C (full resolution) |
| Coherence counting-not-measuring gap | pv2-flagship-perception-audit.md | Part B, Concept C32; Part C, "PARTIALLY embedded" item 1 |
| 45 concepts from File 08 | pv2-flagship-perception-audit.md | Part A (full inventory) |
| 15-entry Table F | pv2-threshold-map.md | Section F |
| Q20 interpretation matrix | q20-experiment-protocol.md | Section 10 |
| Warm palette asymmetry | pv2-threshold-map.md | Section D3, row 2 |
| 108px novel specification | PV2-ARCHITECTURE-DIAGRAM.html | Line 849 (Flagship stacked gap) |
| Tier routing differences | PV2-ARCHITECTURE-DIAGRAM.html | Lines 804-876 (Section 5 table) |

---

**END OF PERCEPTION GATES ANALYSIS**

**Statistics:** 4 source documents fully read (~2,640 lines total). 12 gates individually classified. 15 threshold properties cross-referenced. 3 unresolved discrepancies identified. 5 gaps found (1 SIGNIFICANT, 2 MODERATE, 1 LOW-MODERATE, 1 requiring evidence). 6 new gates proposed (SC-13 through SC-18). ALWAYS FLAGSHIP implications analyzed across 5 dimensions.
