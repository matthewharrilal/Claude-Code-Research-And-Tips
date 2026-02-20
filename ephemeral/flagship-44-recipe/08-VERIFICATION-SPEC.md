# 08 -- Flagship 4/4 Verification Recipe

**Author:** verification-spec (Opus 4.6)
**Date:** 2026-02-19
**Task:** #8 -- Design the full verification recipe for Flagship 4/4
**Sources:** Reports 15, 26, 28; PA Skill (774 lines); PV2-FLAGSHIP-VARIANT.md

---

## CRITICAL FRAMING: FLAGSHIP 4/4 IS THEORETICAL

**No Flagship 4/4 page has ever been produced.** The highest-quality artifact in the corpus is CD-006 (39/40), which is likely Middle or Ceiling tier -- NOT Flagship. The Flagship experiment (PA-05 1.5/4) and its remediation (PA-05 2.5/4) both failed to reach even the "designed" threshold.

This verification spec defines what Flagship 4/4 SHOULD look like based on the compositional intelligence stack (L1 perception thresholds, L2 scales, L3 channels, L4 multi-coherence, L5 anti-scale model). Every threshold and criterion below is derived from theoretical analysis, not from observed Flagship output. The Tier 5 questions, Flagship threshold elevations, and success bar are all HYPOTHESES that the first successful Flagship experiment will test.

**Implication for calibration:** The first Flagship experiment that reaches PA-05 >= 3.5 should be treated as calibration data. Tier 5 thresholds (>= 6/8), gate elevations, and the PA-05 >= 3.5 bar itself may all need adjustment based on what actual Flagship composition looks like when it exists.

---

## EXECUTIVE SUMMARY

Verification for Flagship 4/4 requires THREE layers operating in sequence: programmatic gates (mechanical floor), perceptual audit (compositional judgment), and a Flagship-specific Tier 5 question set (the only instrument that can distinguish Middle 4/4 from Flagship 4/4). The 21-gate registry catches ~26% of compositional quality; PA catches ~40%; the new Tier 5 catches the remaining ~34% that defines Flagship. The full verification recipe runs ~45-75 minutes and produces a binary SHIP/FIX/ESCALATE verdict.

---

## 1. MANDATORY GATES FOR FLAGSHIP (21-Gate Registry Triage)

### 1.1 The Full Registry -- What Actually Matters for Composition

Not all 21 gates carry equal weight for Flagship. Some are identity enforcement (must pass but tell us nothing about composition); others are the actual compositional floor.

**TIER A: COMPOSITION-CRITICAL (12 gates -- these determine whether PA is even worth running)**

| Gate | What It Checks | Flagship Threshold | Why Critical |
|------|---------------|-------------------|-------------|
| SC-09 | Background delta at zone boundaries | >= 15 RGB max-channel delta at every zone boundary (alternative component-texture path exists but is untested at Flagship tier) | THE primary Flagship failure. Imperceptible backgrounds = FLAT. |
| SC-10 | Stacked gap between sections | <= 108px total gap at any zone boundary | 210-276px voids = catastrophic whitespace. |
| SC-11 | Typography zone hierarchy | display-body >= 10px delta; body-detail >= 2px; 3+ distinct zones | Uniform 16px/400 = zero hierarchy. Flagship: 3-zone arc minimum. |
| SC-13 | Multi-coherence at zone boundaries | >= 3 of 6 channels shift at EVERY zone boundary; Flagship avg >= 4 | The only programmatic gate with L4 compositional intelligence. |
| SC-15 | Border/structural presence | >= 3 distinct border configurations (not just >= 1) | Zero borders = zero structural vocabulary. Flagship needs variety. |
| SC-14 | Sub-perceptual prevention | No letter-spacing < 0.02em; no intra-zone bg deltas 1-14 RGB | Prevents CSS budget waste (22% of Flagship CSS was invisible). |
| SC-01 | Container width | 940-960px | #1 Phase D failure mode. Non-negotiable identity. |
| SC-12 | Zone count | 3-5 (Flagship minimum 3, not 2) | Fewer than 3 zones = insufficient compositional space. |
| DG-1 | Fractal echo table (Tier 2) | 5 rows present, CSS evidence non-empty at each scale, pattern direction documented | L2 scale coverage -- completely absent from current gates. |
| DG-2 | Cascade value table (Tier 2) | Computed CSS at every boundary; cross-validated vs SC-13 measured values (discrepancy < 5 RGB / 1px) | Cross-validates multi-coherence claims vs reality. |
| SC-13B | Channel shift direction (ADVISORY) | Shifts in same semantic direction at >= 50% of boundaries | The gap between "channels shift" and "channels shift coherently." |
| SC-16 | Monotonic property progression (ADVISORY) | >= 1 CSS property progresses monotonically across 3+ zones | Catches absence of compositional direction. |

**TIER B: IDENTITY ENFORCEMENT (7 gates -- must pass, but tell us nothing compositional)**

| Gate | Flagship Threshold | Note |
|------|-------------------|------|
| SC-02 | border-radius: 0, box-shadow: none | Soul. Zero exceptions. |
| SC-03 | Font trinity only (Instrument Serif, Inter, JetBrains Mono) | Soul. |
| SC-04 | R >= G >= B on all backgrounds | Warm palette identity. |
| SC-05 | No rgb(0,0,0) or rgb(255,255,255) | No pure extremes. |
| SC-06 | >= 5 ARIA landmarks (raised from 3 for Flagship) | Accessibility baseline. |
| SC-07 | Skip link present | Accessibility. |
| SC-08 | >= 8 component library classes (raised from 3 for Flagship) | Component adoption floor. |

**TIER C: BEHAVIORAL (2 gates -- honor system, audit trail only)**

| Gate | Verification Method |
|------|-------------------|
| Metaphor independence | Builder audit trail must show derivation BEFORE consulting library. Verified via build log timestamps. |
| Metaphor structural | Wave 0.5 fresh-eyes Opus check (STRUCTURAL or ANNOUNCED). Must be STRUCTURAL. |

### 1.2 Flagship-Specific Threshold Elevations

Six gates use Middle-calibrated thresholds that are insufficient for Flagship (Report 23 identified 31 Middle-tier biases). Flagship elevations:

| Gate | Middle Threshold | Flagship Threshold | Rationale |
|------|-----------------|-------------------|-----------|
| SC-06 | >= 3 landmarks | >= 5 landmarks | Flagship pages are longer, more structured |
| SC-08 | >= 3 component classes | >= 8 component types | Flagship composition requires component vocabulary |
| SC-11 | >= 2px delta | >= 3px delta, 3+ distinct typography zones | Flagship typography arc requires visible differentiation |
| SC-12 | 2-5 zones | 3-5 zones | 2 zones insufficient for multi-coherence |
| SC-13 | >= 3 channels shift | >= 3 every boundary, avg >= 4 across all | Flagship requires richer multi-coherence than Middle floor |
| SC-15 | >= 1 border | >= 3 distinct border configurations | Flagship structural vocabulary needs variety |

### 1.3 Gate Execution Sequence

**Phase-locked during build (micro-gates, ~2 min total):**

```
MG-1 (After Phase 1/HTML):  SC-06, SC-07, SC-08, SC-12
MG-2 (After Phase 3/bg):    SC-04, SC-05, SC-09
MG-3 (After Phase 4/border): SC-15, SC-02
MG-4 (After Phase 5/type):   SC-03, SC-11
```

**Full gate run after build complete (Gate 5, ~5-15 sec):**

```
ALL SC-01 through SC-15 + SC-13B (advisory) + SC-16 (advisory)
+ DG-1 through DG-4 (Tier 2 deliverable validation)
```

**Gate failure protocol:**
- Max 2 re-runs per micro-gate
- Max 3 fix cycles on full gate run
- Every failure generates structured JSON fix recipe (measured values, specific CSS, alternatives, reference file)
- After 3 failed full-run cycles: ESCALATE to user (do not loop)

---

## 2. FLAGSHIP-SPECIFIC PA QUESTIONS (Tier 5)

### 2.1 Why Tier 5 Exists

PA-05's 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) measure the "designed" threshold. The Middle experiment passed 4/4 on these same criteria. A Middle page with 12 well-deployed mechanisms and good execution legitimately earns 4/4. PA-05 cannot distinguish between "competent deployment" (Middle 4/4) and "compositional mastery" (Flagship 4/4). Both earn the same score.

Tier 5 measures compositional depth ABOVE the designed threshold. It is the ONLY instrument that answers: "Is this Flagship-tier or Middle-tier?"

### 2.2 Eight Tier 5 Questions (PA-60 through PA-67)

| ID | Question | What It Detects | Detection Target |
|----|----------|----------------|-----------------|
| **PA-60** | Can you identify at least 3 distinct "design moments" -- places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each. | Design moment density, compositional ambition | L4 multi-coherence applied: unique combinations at boundaries |
| **PA-61** | Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time? | Multi-voice composition vs uniform coherence | L4 channel independence: counterpoint vs unison |
| **PA-62** | Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds? | Transition sophistication, dynamic range | L4 transition variation: dramatic AND quiet = designed |
| **PA-63** | Zoom into one component. Does its internal design mirror the page's overall design language but at a smaller scale? Then zoom back out -- is that relationship deliberate? | Fractal coherence across scales | L2 scale coverage: pattern at component AND page scale |
| **PA-64** | Is there any section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? | Restraint as expression, compositional contrast | L5 anti-scale: designed negative space vs default simplicity |
| **PA-65** | If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts? | Multi-voice composition detection | L4/L5 boundary: ensemble = Flagship; choir = Middle |
| **PA-66** | Look at the empty spaces between sections. Are they all the same "flavor" of emptiness, or do different gaps feel different from each other? | Negative space as composition, not just gap | L5 designed negative space: variation in breathing |
| **PA-67** | Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive? What specifically is novel? | Novelty beyond competence | L5 creative surprise: unexpected-yet-perfect |

### 2.3 Tier 5 Scoring

- Each question: YES (with evidence) or NO
- **6-8 YES** = Flagship COMPOSED (the tier above DESIGNED)
- **4-5 YES** = Flagship SOPHISTICATED (approaching but not achieving full composition)
- **0-3 YES** = NOT Flagship (may be excellent Middle or Ceiling, not Flagship-tier)

### 2.4 Tier 5 Constraints

- Tier 5 questions are asked ONLY after PA-05 achieves >= 3/4 (COMPOSED or DESIGNED)
- If PA-05 < 3/4, Tier 5 is skipped (the page has not crossed the designed threshold)
- Tier 5 auditors follow the SAME fresh-eyes principle: zero build context
- Tier 5 auditors follow the SAME language hard block: no CSS vocabulary
- Tier 5 questions are distributed among the existing 9 auditors (see Section 3)

---

## 3. PA AUDITOR DEPLOYMENT

### 3.1 Team Size: 9 Auditors + 1 Weaver (Unchanged from Mode 4)

The Mode 4 PA template with 9 specialized auditors is the proven instrument. Fewer auditors miss critical findings (the 2-PA audit missed whitespace voids that 9/9 Mode 4 auditors caught). More auditors add cost without proportional benefit.

### 3.2 Question Assignments per Auditor (Flagship-Extended)

Each auditor gets their standard Mode 4 questions PLUS 1-2 Tier 5 questions assigned by affinity:

| Auditor | Role | Standard Questions | Tier 5 Addition | Total |
|---------|------|-------------------|-----------------|-------|
| **A** | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45 | PA-65 (music analogy), PA-67 (novelty) | 9 |
| **B** | Readability+Typography | PA-02, 06, 07, 08, 29 | (none -- readability is pass/fail, not compositional) | 5 |
| **C** | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53 | PA-64 (restraint), PA-66 (negative space variety) | 13 |
| **D** | Flow+Pacing | PA-12, 13, 34, 35, 36 | PA-62 (transition variation) | 6 |
| **E** | Grid+Layout | PA-14, 15, 37, 38, 39 | PA-63 (fractal zoom) | 6 |
| **F** | Consistency+Rhythm | PA-16, 17, 40, 41 | PA-60 (design moments), PA-61 (multi-voice) | 6 |
| **G** | Metaphor+Ideology | PA-42, 43, 44 | (none -- metaphor assessment is already Flagship-relevant) | 3 |
| **H** | Responsive | PA-21, 22, 23, 46, 47 | (none -- responsive is structural, not compositional depth) | 5 |
| **I** | Adversarial | PA-26, 27, 28, 48 | (none -- adversarial already probes beyond compliance) | 4 |

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**

### 3.3 Question Assignment Rationale

Tier 5 questions are assigned by perceptual affinity:

- **PA-60 (design moments) -> Auditor F (Consistency+Rhythm):** Design moments are rhythm PEAKS. The rhythm auditor is calibrated to detect where visual treatment changes from pattern to unique event.
- **PA-61 (multi-voice) -> Auditor F:** Multi-voice composition is the rhythmic relationship between channels. Same perceptual domain as PA-17 (rhythm) and PA-41 (repetition).
- **PA-62 (transition variation) -> Auditor D (Flow+Pacing):** Transition dramatic range is a pacing property. The flow auditor already evaluates transition quality (PA-34).
- **PA-63 (fractal zoom) -> Auditor E (Grid+Layout):** Scale coverage requires zooming into components and zooming out to page -- spatial navigation that the grid auditor practices with PA-14, PA-38.
- **PA-64 (restraint) -> Auditor C (Spatial+Proportion):** Restraint manifests as designed emptiness vs accidental emptiness. Auditor C already evaluates negative space quality (PA-31, PA-33).
- **PA-65 (music analogy) -> Auditor A (Impression+Emotion):** The orchestral metaphor is an emotional/gestalt judgment. Auditor A already provides gut reactions and personality assessment.
- **PA-66 (negative space variety) -> Auditor C:** Direct extension of PA-33 (empty space quality) to SYSTEM-level assessment.
- **PA-67 (novelty) -> Auditor A:** Novelty is a first-impression judgment. The impression auditor is calibrated for surprise detection.

### 3.4 Screenshot Pre-Capture Protocol (Unchanged)

Team lead takes ALL screenshots BEFORE spawning auditors:

```
Viewports: 1440px, 1024px, 768px
Per viewport:
  1. Cold look (full-page screenshot)
  2. Scroll-through (80% viewport step, 5-15 viewport-height screenshots)
  3. Animations disabled: animation: none !important; opacity: 1 !important
  4. document.fonts.ready BEFORE first screenshot
Total: ~36-102 screenshots (depending on page length)
```

Auditors receive saved screenshots via Read tool. Zero Playwright contention. 9 auditors run fully parallel.

---

## 4. FLAGSHIP SUCCESS BAR

### 4.1 The Two-Score Verdict

Flagship verification produces TWO scores, both required:

| Score | Instrument | Pass Threshold | What It Measures |
|-------|-----------|----------------|------------------|
| **PA-05** | Standard 48 questions, 4 sub-criteria | >= 3.5/4 (raised from 3.0 for Flagship) | "Is this DESIGNED?" -- the designed threshold |
| **Tier 5** | 8 Flagship questions, YES/NO each | >= 6/8 (COMPOSED) | "Is this Flagship-tier?" -- compositional depth |

**Why PA-05 >= 3.5, not >= 3.0:**
PA-05 3/4 = COMPOSED. A Middle page can achieve 3/4 with good mechanism deployment. Flagship requires 3.5+ because:
- 3/4 allows 1 sub-criterion to FAIL. Flagship allows 0.5 (one sub-criterion at "YES WITH RESERVATIONS").
- A Flagship page that fails COHERENT or PROPORTIONATE has a structural problem, not a polish problem.
- Report 23 raised this from >= 3.0. Report 13 found a Middle auditor described PA-05 4/4 as "B+ effort" -- indicating PA-05 alone is insufficient for Flagship ambition.

### 4.2 Compositional Criteria Beyond PA-05

In addition to PA-05 >= 3.5 and Tier 5 >= 6/8, the following MUST hold:

| Criterion | Measurement | Threshold | Source |
|-----------|-------------|-----------|--------|
| Zero soul violations | SC-01, SC-02, SC-03, SC-04, SC-05 | All PASS | Non-negotiable identity |
| Zero void patterns | PA-50 through PA-53 (Tier 4) | All PASS | Ceiling experiment's catastrophic failure |
| Metaphor is STRUCTURAL | Wave 0.5 fresh-eyes check | STRUCTURAL (not ANNOUNCED, not LABELED) | Ceiling experiment: 40% metaphor only visible with labels |
| Rhythm is not metronomic | PA-17 + PA-41 (Tier 1-elevated for Ceiling+) | Both PASS | Middle experiment: "metronomic rather than musical" |
| Multi-coherence verified | SC-13 + PA-61 agreement | Gate PASS + auditor detects multi-voice | Programmatic + perceptual double-verification |
| Scale coverage verified | DG-1 fractal table + PA-63 | Table valid + auditor detects fractal pattern | Tier 2 deliverable + perceptual confirmation |

### 4.3 The Full Verdict Matrix

| PA-05 | Tier 5 | Compositional Criteria | Verdict |
|-------|--------|----------------------|---------|
| >= 3.5 | >= 6/8 | All MET | **SHIP** (Flagship 4/4 DESIGNED) |
| >= 3.5 | 4-5/8 | All MET | **SHIP WITH RESERVATION** (Flagship SOPHISTICATED, not COMPOSED) |
| >= 3.5 | 0-3/8 | All MET | **NOT FLAGSHIP** (excellent Middle or Ceiling; re-scope or escalate) |
| 3.0-3.4 | any | any | **FIX CYCLE** (compositional floor not met; top-3 PA issues) |
| < 3.0 | N/A | N/A | **REBUILD** (structural failure; PA findings + gate diagnostics) |

---

## 5. FIX CYCLE PROTOCOL

### 5.1 Same Builder, Compositional Memory Preserved

**The same Opus agent that built the page performs fixes.** This is non-negotiable for Flagship because:

1. **Compositional memory:** The builder knows WHY it made decisions. A new agent must re-derive the metaphor, channel allocation, and mechanism interactions from scratch -- losing the compositional intelligence that produced whatever quality already exists.
2. **Remediation evidence:** The builder that went from 1.5/4 to 2.5/4 in the Flagship Remediation Execution used the SAME agent (Opus builder). The improvement came from targeted CSS fixes guided by specific feedback, not from starting over.
3. **Metaphor continuity:** Flagship composition depends on metaphor-driven decisions. A new builder would need to understand the metaphor before fixing -- adding 15-20 minutes of context loading before any fix.

### 5.2 Fix Cycle Structure

```
CYCLE 1 (Full)       CYCLE 2 (Targeted)     CYCLE 3 (Final)

  9 PA auditors         2 PA auditors           2 PA auditors
  + Tier 5 (8 Qs)      + Tier 5 (8 Qs)         (escalate on fail)
  + full gate run       + full gate run          + full gate run

  ~45 min               ~20 min                  ~20 min
```

**Cycle 1 (initial verification):**
- Full Mode 4 PA with 9 auditors + Tier 5 questions
- Full 21-gate programmatic run
- All 56 questions answered
- Produces: PA-05 score, Tier 5 score, top-3 issues ranked by severity, gate diagnostic output

**Cycle 2 (after first fix round):**
- 2-PA re-check (not full 9) -- Auditor A (Impression) + Auditor C (Spatial)
- Tier 5 re-evaluation (all 8 questions, by both auditors)
- Full gate re-run (gates are cheap, ~15 seconds)
- Focus: did the top-3 issues from Cycle 1 improve? Any regressions?

**Cycle 3 (final attempt):**
- Same as Cycle 2
- If PA-05 still < 3.5 OR Tier 5 still < 4/8: ESCALATE to user
- Do NOT loop beyond 3 cycles (diminishing returns, cost explosion)

### 5.3 Feedback Format for Builder

The builder receives STRUCTURED feedback, not prose:

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Gate Failures (structured JSON)
[gate-results.json with measured values, thresholds, specific CSS fixes]

### PA Top-3 Issues (ranked by severity)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor's exact words]"
   - WHERE: [scroll position / element description]
   - WHAT: [the perceptual problem in plain language]
   - DIRECTION: [what to change -- e.g., "increase visual weight in middle third"]

2. [WOULD-NOT-SHIP] PA-YY: "[auditor's exact words]"
   ...

### Tier 5 Gaps (which questions answered NO)
- PA-6N: NO -- "[auditor's reason]"
  IMPLICATION: [what compositional property is missing]

### DO NOT TOUCH (protected elements)
- [List of elements that passed well -- do not regress]
```

### 5.4 Convention Escalation Path (PA-05 = 3/4 exactly)

When PA-05 = exactly 3.0/4 (COMPOSED but not DESIGNED) and the builder has exhausted 3 fix cycles:

1. Re-engage TC for metaphor-driven adaptation (was the metaphor limiting composition?)
2. Give builder convention-based creative freedom for a 2nd pass (remove the "do not deviate from instance values" ceiling sentence)
3. Run fresh Mode 4 PA (new auditors, no memory of previous audits)

This path addresses the documented recipe ceiling: recipes with only HOW cap at 3/4; recipes with WHY approach 4/4.

---

## 6. PROGRAMMATIC DETECTION OF MULTI-COHERENCE AND FRACTAL SELF-SIMILARITY

### 6.1 Multi-Coherence: Partially Programmatic

**What CAN be detected programmatically (SC-13, ~70% confidence):**

At each zone boundary, measure 6 channels:
1. Chromatic: background-color RGB delta >= 15
2. Typographic: font-size delta >= 2px OR font-weight delta >= 100
3. Spatial: padding delta >= 24px
4. Structural: border configuration change (width, style, or color)
5. Behavioral: interactivity presence change (hover states, transitions)
6. Material: background-image/texture change

If >= 3 channels shift at a boundary: SC-13 PASS.

**What CANNOT be detected programmatically (the 30% gap):**

- **Semantic direction coherence:** Three channels shifting is not three channels shifting IN THE SAME DIRECTION. Background darkening + font-size increasing + padding decreasing could be incoherent (darkening = depth but larger font = elevation). SC-13B attempts this (~50% confidence) but is ADVISORY only.
- **Proportional intelligence:** Three channels all shifting by minimum threshold (15 RGB, 2px, 24px) is technically passing but visually timid. Three channels shifting boldly (60 RGB, 8px, 48px) is compositionally stronger. SC-13 treats both identically.
- **Contextual appropriateness:** A minor sub-section boundary might correctly have 2 channel shifts. A major zone boundary should have 5. SC-13 applies one threshold everywhere.
- **Narrative arc:** The PATTERN of transitions across ALL boundaries tells a story. SC-13 evaluates each boundary in isolation.

**Verdict:** Multi-coherence is ~35% gateable (count + partial direction). The remaining ~65% requires PA judgment (PA-61, PA-62, PA-65).

### 6.2 Fractal Self-Similarity: Deliverable-Verifiable

**What CAN be verified programmatically (DG-1, Tier 2):**

The builder produces `fractal_table.yaml`:
```yaml
scales:
  - scale: navigation
    css_evidence: "header border-bottom 4px, nav spacing 24px"
    pattern_direction: "heavy-to-light"
  - scale: page
    css_evidence: "zone backgrounds darken progressively, padding tightens"
    pattern_direction: "heavy-to-light"
  - scale: section
    css_evidence: "heading weight 600->400, border-left 4px->1px"
    pattern_direction: "heavy-to-light"
  - scale: component
    css_evidence: "card border decreases, internal padding loosens"
    pattern_direction: "heavy-to-light"
  - scale: character
    css_evidence: "heading letter-spacing 0.03em, body 0em"
    pattern_direction: "tight-to-open"
```

Code validates:
1. All 5 rows present
2. CSS evidence fields non-empty
3. Pattern direction documented at each scale

**What CANNOT be verified programmatically:**

- Whether the CSS evidence ACTUALLY produces the claimed pattern at each scale
- Whether "heavy-to-light" at component scale is the SAME design sensibility as "heavy-to-light" at page scale
- Whether VARIATION between scales is intentional (Flagship sophistication) or contradictory (incoherence)

**Verdict:** Fractal self-similarity is ~30% verifiable programmatically (presence + structure of evidence). PA-63 provides the perceptual confirmation (~40% additional). The remaining ~30% is builder judgment (whether the pattern WORKS at each scale).

---

## 7. MINIMUM VERIFICATION THAT CATCHES FLAGSHIP QUALITY

### 7.1 The Irreducible Minimum

If time/budget constrained, the ABSOLUTE MINIMUM verification that distinguishes Flagship from Middle:

**Layer 1: 6 Critical Gates (~2 min)**
- SC-09 (background delta)
- SC-11 (typography zones)
- SC-13 (multi-coherence count)
- SC-10 (stacked gap)
- SC-15 (border presence)
- SC-01 (container width)

These 6 gates catch the Flagship experiment's failure modes. Without them, verification misses imperceptible backgrounds, uniform typography, and whitespace voids.

**Layer 2: 3 PA Auditors (~20 min)**
- Auditor A (Impression) with PA-01, 04, 05, 65, 67
- Auditor C (Spatial) with PA-09, 10, 50, 52, 64, 66
- Auditor F (Rhythm) with PA-17, 41, 60, 61

Three auditors covering: gestalt impression + spatial distribution + rhythmic complexity. These three detect the three failure modes that gates miss: "feels assembled" (A), "spatial voids" (C), "metronomic uniformity" (F).

**Layer 3: Tier 5 Threshold**
- PA-65 (multi-voice: ensemble vs choir) from Auditor A
- PA-60 (design moment count) from Auditor F
- PA-64 (restraint as expression) from Auditor C

These 3 Tier 5 questions are the minimum that distinguishes Flagship from Middle. If all three answer YES with evidence, the page is likely Flagship-tier.

**Minimum total: 6 gates + 3 auditors + 3 Tier 5 = ~22 min.**

### 7.2 Why This Works

The minimum catches:
- **FLAT (1.5/4):** SC-09, SC-11, SC-13 catch imperceptible differences
- **STYLED (2.0/4):** PA-09, PA-50 catch spatial distribution failures
- **COMPOSED (3.0/4):** PA-05, PA-17, PA-41 catch "competent but not designed"
- **Middle 4/4 vs Flagship 4/4:** PA-60, PA-64, PA-65 detect compositional depth

### 7.3 What the Minimum MISSES

- Responsive quality (Auditor H absent)
- Metaphor expression level (Auditor G absent)
- Grid internals (Auditor E absent)
- Adversarial vulnerability (Auditor I absent)
- Readability precision (Auditor B absent -- but PA-02 is covered by no auditor in minimum)

The minimum is a TRIAGE instrument, not a ship-quality instrument. Use for early feedback loops and fix cycle re-checks. Use the full 9-auditor deployment for ship decisions.

---

## 8. GATE-TO-PA HANDOFF

### 8.1 The Principle

**Gates FILTER; PA JUDGES.**

Gates are preprocessing. They catch mechanical errors that should never consume PA auditor attention. When SC-09 fails (backgrounds differ by 5 RGB), there is no point asking 9 auditors "does this feel designed?" -- the answer is definitionally NO because the backgrounds are imperceptible.

Gates produce a binary PASS/FAIL. PA produces a compositional score. The handoff is the boundary between "mechanically acceptable" and "compositionally excellent."

### 8.2 Gate Diagnostic Output as PA Context

Gates should produce diagnostic output that PA auditors receive AS CONTEXT (not as instructions):

```markdown
## Gate Diagnostic Summary (for PA auditors)

### SC-13 (Multi-Coherence): PASS
- Boundary 1-2: 4/6 channels shift (chromatic, typographic, spatial, structural)
- Boundary 2-3: 3/6 channels shift (chromatic, typographic, behavioral)
- Boundary 3-4: 5/6 channels shift (all except material)

### SC-13B (Direction Coherence): ADVISORY WARNING
- Boundary 2-3: channels shift in CONTRADICTORY directions
  (background darkens [intensifying], font-size decreases [relaxing])

### SC-16 (Monotonic Progression): ADVISORY
- font-size increases monotonically across zones 1-3-4
- No other monotonic property detected
```

**PA auditors use this as orientation, not as conclusion.** The diagnostic tells them WHERE to look (boundary 2-3 has contradictory shifts). The auditor determines whether that contradiction is a BUG (incoherent) or a FEATURE (designed counterpoint).

### 8.3 The Handoff Gate (Critical Decision Point)

```
                    ALL 15 blocking gates PASS?
                           │
                    YES    │    NO
                    │      │    │
                    ▼      │    ▼
            Run PA (9      │    FIX CYCLE
            auditors +     │    (gate-generated
            Tier 5)        │    CSS recipes)
                           │
                    Gate diagnostics
                    included as PA
                    context file
```

**The handoff is ONE-WAY.** Once gates pass and PA begins, gates are NOT re-run during PA. PA findings do not trigger gate re-evaluation. Gates and PA operate in sequence, not in dialogue.

**Exception:** After a fix cycle, the FULL gate suite re-runs (builder CSS changes may introduce new gate failures). This is a new handoff, not a gate-PA dialogue.

### 8.4 What Each Layer Contributes

| Quality Level | Who Catches It | Instrument |
|--------------|---------------|-----------|
| BROKEN (0/4) | Gates SC-01 through SC-05 | Identity enforcement |
| FLAT (1.5/4) | Gates SC-09, SC-10, SC-11, SC-14, SC-15 | Perception thresholds |
| STYLED (2/4) | PA-05 sub-criteria + Tier 4 void questions | Perceptual judgment |
| COMPOSED (3/4) | PA-05 full score + PA-17, PA-41 elevated | Perceptual judgment + rhythm |
| DESIGNED (3.5/4) | PA-05 >= 3.5 + compositional criteria | Multi-instrument convergence |
| FLAGSHIP (4/4) | Tier 5 >= 6/8 | Flagship-specific compositional depth |

---

## 9. TIMING AND COST ESTIMATE

| Phase | Time | Agents | Notes |
|-------|------|--------|-------|
| Micro-gates during build | ~2 min | Orchestrator | Phase-locked, 4 checkpoints |
| Full gate run (Gate 5) | ~15 sec | Orchestrator | All SC-01 through SC-16 + DG-1 through DG-4 |
| Screenshot pre-capture | ~5 min | Team lead | 3 viewports, scroll-through, animations disabled |
| 9 PA auditors (parallel) | ~25 min | 9 Opus | Fresh-eyes, zero context, standard + Tier 5 |
| PA weaver synthesis | ~10 min | 1 Opus | Classify, rank, verdict, Tier 5 aggregate |
| **Total Cycle 1** | **~45 min** | **11 agents** | |
| Fix application | ~15 min | Same builder | Top-3 issues, structured feedback |
| Re-check (2 PA + gates) | ~20 min | 2 Opus + gates | Targeted re-verification |
| **Total with 1 fix cycle** | **~80 min** | | |
| **Total with 3 fix cycles** | **~120 min** | | Maximum, then escalate |

---

## 10. OPEN QUESTIONS AND RISKS

### 10.0 No Flagship Reference Point Exists

Every threshold, question, and criterion in this spec is theoretical. We have NEVER seen Flagship 4/4 output. The closest observed artifact (CD-006, 39/40) was produced under completely different conditions (single Opus agent, no pipeline, Middle/Ceiling complexity) and should NOT be treated as a Flagship reference. The entire verification recipe is a hypothesis about what Flagship quality detection requires. The first successful Flagship experiment is calibration data, not validation data.

### 10.1 Tier 5 is Untested

The 8 Tier 5 questions have never been deployed. They are designed from the skill audit's analysis of what PA-05 cannot distinguish (Report 26). Risks:
- Questions may be too abstract for fresh-eyes auditors
- YES/NO scoring may lack granularity
- 6/8 threshold may be too high or too low

**Mitigation:** Run Tier 5 alongside standard PA in the first Flagship experiment. Compare Tier 5 scores against PA-05 scores to calibrate.

### 10.2 Flagship Threshold Elevations Need Calibration

The elevated thresholds (SC-06 >= 5, SC-08 >= 8, etc.) are based on Report 23's analysis of Middle-tier biases. They have not been tested against actual Flagship output. Risk of false positives if thresholds are too aggressive.

**Mitigation:** Run first experiment with Middle thresholds. Record where Flagship output EXCEEDS Middle thresholds. Use actual data to calibrate.

### 10.3 Fix Cycle Effectiveness for Compositional Issues

Fix cycles work well for mechanical issues (gate failures have specific CSS fixes). They work less well for compositional issues (PA-60 "not enough design moments" does not have a CSS recipe).

**Mitigation:** Distinguish between GATE-FIXABLE issues (specific CSS) and PA-FIXABLE issues (compositional direction). Gate issues get JSON recipes. PA issues get DIRECTION feedback ("increase visual weight in middle third") not PRESCRIPTION feedback ("add border-left: 4px").

### 10.4 The Sonnet-for-PA-Auditors Question

All PA documentation assumes Opus auditors. Sonnet auditors are cheaper. Whether Sonnet can perform compositional judgment at Tier 5 level is unknown.

**Recommendation:** Use Opus for Tier 5 questions (PA-60 through PA-67). Sonnet is acceptable for standard questions (PA-01 through PA-53). This keeps the highest-judgment questions with the highest-capability model while reducing cost on mechanical assessments.

---

## 11. SUMMARY: THE COMPLETE VERIFICATION RECIPE

```
FLAGSHIP VERIFICATION (v1)

INPUT:  output.html (from Opus builder)
        cascade_table.yaml, fractal_table.yaml (Tier 2 deliverables)
        gate diagnostics from micro-gates during build

STEP 1: FULL GATE RUN (~15 sec)
        15 blocking gates + 2 advisory + 4 deliverable gates
        Flagship thresholds applied
        ALL blocking gates must PASS to proceed
        Gate diagnostic output saved for PA context

STEP 2: SCREENSHOT CAPTURE (~5 min)
        3 viewports (1440px, 1024px, 768px)
        Cold look + scroll-through per viewport
        Animations disabled, fonts loaded
        Screenshots saved to files

STEP 3: 9 AUDITORS PARALLEL (~25 min)
        48 standard questions + 8 Tier 5 questions = 56 total
        Auditor A-I with assigned question sets
        Fresh-eyes, zero build context
        Gate diagnostics as orientation context
        CSS vocabulary hard block enforced

STEP 4: WEAVER SYNTHESIS (~10 min)
        PA-05 score (4 sub-criteria)
        Tier 5 score (8 YES/NO questions)
        Top-3 issues ranked by severity
        Compositional criteria checklist
        VERDICT: SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE

STEP 5: FIX CYCLE (if needed, max 3)
        Same builder applies fixes
        Gate failures: structured JSON recipes
        PA issues: direction feedback
        Tier 5 gaps: compositional implication
        Re-check: 2 PA + full gates + Tier 5
        After 3 cycles: ESCALATE to user

SUCCESS BAR:
        PA-05 >= 3.5/4 (DESIGNED threshold)
        Tier 5 >= 6/8 (COMPOSED: Flagship depth)
        Zero soul violations
        Zero void patterns
        Metaphor STRUCTURAL
        Multi-coherence verified (gate + PA agreement)
        Scale coverage verified (deliverable + PA agreement)
```

---

**END OF VERIFICATION SPEC**

**Key numbers:**
- 21 gates (15 Tier 1 blocking + 2 advisory + 4 Tier 2 deliverable)
- 56 questions (48 standard + 8 Tier 5)
- 9 auditors + 1 weaver
- PA-05 >= 3.5 AND Tier 5 >= 6/8
- Max 3 fix cycles, same builder
- ~45 min first pass, ~120 min maximum
- Gates catch ~26% of compositional quality; PA + Tier 5 catch ~74%
