# 05 -- Verification Layer Deep Dive: Gates + PA Questions vs Compositional Intelligence Stack

**Author:** verification-enrichment-analyst (Opus 4.6)
**Date:** 2026-02-20
**Task:** #5 / #16
**Sources:** gate-runner.md (992 lines, 21 gates), flagship-pa-questions.md (144 lines, 8 Tier 5 questions), 06-COMP-INTEL-CONDITIONS.md, 23-STACK-INTEGRATION.md, 12-SYNTHESIS.md, mechanism-catalog.md, MEMORY.md

---

## EXECUTIVE SUMMARY

The verification layer (21 gates + 8 Tier 5 PA questions) covers **effects** well but is structurally blind to **process** and **integration**. The 5-layer compositional intelligence stack (L1 Perception -> L2 Scales -> L3 Channels -> L4 Multi-Coherence -> L5 Anti-Scale) receives radically uneven verification coverage: L1 is ~95% covered by 4 programmatic gates, L2-L3 are ~35-70% covered by a mix of gates and PA, L4 is ~60% covered but the programmatic component (SC-13) checks channel COUNT not COHERENCE, and L5 is ~40% covered by PA-only questions that cannot distinguish compositional intelligence from lucky coincidence. No instrument verifies the stack as an INTEGRATED SYSTEM.

**Key tension identified:** Gates measure EFFECTS (counts, thresholds). PA measures PERCEPTION (fresh-eyes judgment). Neither measures PROCESS (did the builder think in scales? channels?). This gap is CORRECT -- attempting to measure process through gates would reproduce the guardrail factory problem. The right intervention is the Weaver Stack Verdict (proposed in Report 23), NOT new gates.

---

## PART 1: GATE RUNNER ANALYSIS (21 Gates vs Stack)

### 1.1 Which Gates Measure Compositional Intelligence Concepts?

Each gate mapped to the stack layer(s) it covers:

| Gate | Name | Stack Layer | What It Measures | CI Coverage |
|------|------|-------------|-----------------|-------------|
| SC-01 | Container Width | L0 (Identity) | 940-960px | NONE (identity, not CI) |
| SC-02 | Soul Properties | L0 (Identity) | radius: 0, shadow: none | NONE |
| SC-03 | Font Trinity | L0 (Identity) | 3 allowed fonts | NONE |
| SC-04 | Warm Palette | L0 (Identity) | R >= G >= B | NONE |
| SC-05 | No Pure Extremes | L0 (Identity) | No #000 or #FFF | NONE |
| SC-06 | ARIA Landmarks | L0 (Identity) | >= 5 landmarks | NONE |
| SC-07 | Skip Link | L0 (Identity) | Skip link present | NONE |
| SC-08 | Component Library | L3 partial | >= 8 component types | WEAK -- counts types, not channel diversity |
| SC-09 | Background Delta | **L1** | >= 15 RGB at boundaries | STRONG -- direct perception threshold |
| SC-10 | Stacked Gap | **L1** | <= 120px total gap | STRONG -- prevents whitespace voids |
| SC-11 | Typography Zones | **L1 + L2** | >= 10px delta, 3+ zones | MODERATE -- checks zones exist, not scale coverage |
| SC-12 | Zone Count | **L2** | 3-5 zones | WEAK -- counts zones, not scale depth |
| SC-13 | Multi-Coherence | **L3 + L4** | >= 3 channels, avg >= 4 | MODERATE -- counts channels, NOT direction |
| SC-14 | Sub-Perceptual | **L1** | No ls < 0.025em, no bg 1-14 RGB | STRONG -- prevents CSS budget waste |
| SC-15 | Border Presence | **L3 partial** | >= 3 distinct configs | WEAK -- counts configs, not semantic deployment |
| SC-13B | Direction Coherence | **L4** | >= 50% boundaries coherent | WEAK -- heuristic, ~50% confidence, ADVISORY |
| SC-16 | Monotonic Progress | **L4 partial** | >= 1 monotonic property | WEAK -- one property monotonic is low bar |
| DG-1 | Fractal Echo Table | **L2** | 5-scale coverage | MODERATE -- checks deliverable exists, not CSS evidence |
| DG-2 | Cascade Value Table | **L1 + L3** | Computed CSS at boundaries | STRONG -- cross-validates builder claims |
| DG-3 | Landmark Complete | L0 (Identity) | header + main + footer | NONE |
| DG-4 | Handoff Validation | **L2 + L3** | 5 sub-checks on build plan | MODERATE -- pre-build, but only YAML structure |

### 1.2 Coverage by Stack Layer

| Stack Layer | Gates That Cover It | Coverage Quality | Gap Description |
|-------------|-------------------|-----------------|-----------------|
| **L0 (Identity)** | SC-01,02,03,04,05,06,07, DG-3 | ~95% (EXCELLENT) | Missing: gradient prohibition, opacity check |
| **L1 (Perception)** | SC-09, SC-10, SC-11, SC-14, DG-2 | ~95% (EXCELLENT) | Well-covered. The strongest layer. |
| **L2 (Scales)** | SC-11, SC-12, DG-1, DG-4 | ~35% (POOR) | Counts zones and checks table existence, but does NOT verify pattern presence at each scale or fractal consistency |
| **L3 (Channels)** | SC-08, SC-13, SC-15 | ~40% (POOR) | Counts channel shifts but not semantic deployment. SC-08 counts component types, not channel variety per boundary |
| **L4 (Multi-Coherence)** | SC-13, SC-13B, SC-16 | ~25% (VERY POOR) | SC-13 counts but doesn't measure direction. SC-13B is ADVISORY with ~50% confidence. SC-16 catches monotonic progression in isolation |
| **L5 (Anti-Scale)** | NONE | 0% (ABSENT) | Zero programmatic gates address density, restraint, or spatial confidence. Entirely PA-dependent |

**The pattern:** Coverage degrades PRECISELY along the stack. L0-L1 (mechanical, countable) = ~95%. L2-L3 (structural, partially countable) = 35-40%. L4-L5 (compositional, evaluative) = 0-25%. This is not a design flaw -- it reflects what programmatic gates CAN measure. The question is whether the PA layer compensates adequately.

### 1.3 Gap Analysis: COULD New Gates Help?

For each uncovered stack concept, I evaluate whether a programmatic gate COULD verify it and whether it SHOULD be added.

#### L2 Scale Coverage: COULD verify partially, SHOULD add 1 gate

**Current state:** DG-1 checks that the fractal echo table EXISTS with 5 rows and CSS evidence strings. But it does NOT verify that the claimed CSS evidence ACTUALLY APPEARS in the rendered page.

**Proposed: DG-1B (Fractal Echo Cross-Validation)**
Check: For each of the 5 scales in the fractal echo table, extract the claimed CSS evidence and verify it exists in the computed styles. For example, if the builder claims "navigation scale: border-bottom 4px on header," verify that the header actually has `border-bottom-width: 4px`.

Classification: HELPFUL. This closes the gap between claimed and actual scale coverage. It prevents "fractal theater" (claiming patterns that don't exist in CSS). It does NOT judge whether the patterns are GOOD -- that remains PA territory.

Risk: LOW guardrail factory risk. This gate validates CSS EVIDENCE, not CSS QUALITY. It catches lying, not taste.

#### L3 Channel Semantic Deployment: CANNOT verify, SHOULD NOT attempt

The concept: "Are the 6 channels deployed to serve different semantic roles, or are they all doing the same thing?"

Why not programmable: Semantic deployment requires understanding WHAT the channels encode. "Background darkens at zone 2" tells you the chromatic channel shifts. "Background darkens because we're entering deeper analysis" tells you the semantic role. Gates cannot distinguish meaningful from arbitrary channel shifts. SC-13 correctly limits itself to counting.

Attempting this: Would require parsing builder comments or prose descriptions -- fundamentally fragile. Would create the guardrail factory problem (Rule Report 67: "7.9:1 guardrail-to-playbook ratio"). PA-61 (multi-voice composition) already tests this perceptually.

#### L4 Direction Coherence: COULD partially verify, upgrade SC-13B to BLOCKING is PREMATURE

SC-13B currently classifies each channel shift at a boundary as INTENSIFYING (+) or RELAXING (-) and checks whether >= 50% of boundaries have >= 3 channels in the same direction.

**Should SC-13B be upgraded from ADVISORY to BLOCKING?**

**NO. Not yet.** Three reasons:

1. **Confidence is ~50%.** The direction heuristic classifies "darker bg" as INTENSIFYING and "lighter bg" as RELAXING. But compositional intent can invert these: a lighter background in a "culmination" zone where content reaches its peak IS intensifying in meaning even though it's relaxing in luminance. The heuristic would classify this as CONTRADICTING. At ~50% accuracy, blocking would reject valid compositions.

2. **The Flagship experiment (1.5/4) would have PASSED SC-13B.** The Flagship had backgrounds shifting by 1-8 RGB points -- all in the same direction (slight darkening). SC-13B would have classified this as "coherent" because all shifts pointed the same way. But the shifts were IMPERCEPTIBLE. Direction coherence without perception threshold compliance is meaningless. SC-09 (background delta >= 15) is the gate that catches this failure, not SC-13B.

3. **CD-006 (39/40) would SOMETIMES FAIL SC-13B.** CD-006 uses tension-release patterns where section transitions deliberately alternate between intensifying and relaxing. A bookend structure (intense -> calm -> intense) is compositionally coherent but SC-13B would flag the calm middle as direction-incoherent.

**Recommendation:** Keep SC-13B ADVISORY. Upgrade ONLY after 3+ successful Flagship builds provide calibration data for the direction heuristic. The gate's value is diagnostic (flagging boundaries for PA to investigate), not gatekeeping.

#### L5 Anti-Scale Model: CANNOT verify programmatically, SHOULD NOT attempt

The anti-scale model: `Richness = semantic density x restraint x spatial confidence`

Each factor is inherently evaluative:
- **Semantic density:** "Does each mechanism serve a content-specific purpose?" Requires understanding content-mechanism fit. A border-weight gradient is semantically dense when encoding confidence levels in a security document, semantically empty when applied decoratively to all headings. Same CSS, different density. No gate can distinguish these.

- **Restraint:** "Did the builder deliberately withhold mechanisms?" Report 21 proposes 15 programmatic gates for anti-scale (SD-01 through SD-04, RE-01 through RE-05, SC-01 through SC-06), estimating ~70% computability. I disagree with the 70% estimate. What those proposed gates actually measure is STRUCTURAL VARIETY -- different spacing values, different border weights, different component types. Structural variety is a NECESSARY but not SUFFICIENT condition for restraint. A builder who deploys 18 mechanisms across 5 zones with maximum variety has HIGH structural variety but ZERO restraint. Restraint means choosing NOT to use a mechanism that COULD apply. That choice is invisible in CSS.

- **Spatial confidence:** "Does the page claim space boldly?" Report 21 proposes measuring width variation, border boldness, and grid diversity. These are proxies, not measurements. A page with 3 different column layouts has high grid diversity but may still feel timid if all layouts use identical padding, colors, and typography. Confidence is a perceptual quality, not a structural metric.

**Verdict:** L5 is fundamentally perceptual. Attempting to gate it would create exactly the problem documented in the Flagship failure: "verification =/= perception." The 15 proposed anti-scale gates (Report 21) risk reproducing the guardrail factory at the highest compositional level. PA-64 (restraint), PA-60 (density), and PA-66 (spatial confidence) are the correct instruments.

### 1.4 What New Gates Would HELP vs HURT?

#### WOULD HELP (add to gate runner):

**1. DG-1B: Fractal Echo Cross-Validation (NEW)**
- Layer: L2
- Type: Deliverable validation, BLOCKING
- Check: For each scale row in fractal_table.yaml, extract CSS evidence field and verify it exists in computed styles
- Risk: LOW (validates evidence, not quality)
- Rationale: Closes the "fractal theater" gap where builders claim patterns that aren't implemented

**2. SC-13C: Minimum Channel VARIETY per boundary (NEW)**
- Layer: L3
- Type: Programmatic, ADVISORY
- Check: At each boundary, count how many of the 4 PRIMARY channels (Chromatic, Typographic, Spatial, Structural) are among the >= 3 shifting. Flag if all 3+ shifts come from secondary channels (Behavioral + Material)
- Risk: LOW (advisory, not blocking; provides diagnostic data)
- Rationale: SC-13 catches "3+ channels shift" but a boundary where only Behavioral, Material, and Structural shift (no Chromatic or Typographic) is perceptually weak. The 4 primary channels carry the heavy semantic load

**3. SC-10B: Distribution of Content Mass (NEW)**
- Layer: L5 proxy
- Type: Programmatic, ADVISORY
- Check: For each zone, measure the ratio of content pixels to total zone height. Flag if any zone has < 30% content fill (potential whitespace void)
- Risk: LOW (advisory; legitimate sparse zones get flagged but not blocked)
- Rationale: Provides a programmatic proxy for the L5 "spatial confidence" dimension. Catches whitespace voids (the Flagship's dominant failure) without making qualitative judgments about spatial intention

#### WOULD HURT (do NOT add):

**1. Direction Grammar Gate (would gate semantic direction consistency)**
- Why it hurts: Same problem as SC-13B but worse -- would try to classify whether "darkening" and "compressing" are semantically aligned. The heuristic CANNOT distinguish intentional counterpoint from accidental contradiction. Tension-release patterns (CD-006's strength) would fail this gate. This IS the guardrail factory problem.

**2. Mechanism Count per Category Gate (would require N mechanisms per category)**
- Why it hurts: DG-4 already checks >= 14 total AND >= 1 per category in the build plan. Adding a RUNTIME gate checking the same thing in rendered CSS would require mechanism IDENTIFICATION (parsing class names and CSS patterns to detect mechanisms), which is fragile. Mechanism deployment is a build plan property, not a rendered CSS property.

**3. Anti-Pattern Detection Gate (would scan for known bad patterns)**
- Why it hurts: The list of known bad patterns grows indefinitely (complexity ratchet). Each anti-pattern gate adds a rule the builder must avoid, increasing the guardrail-to-playbook ratio. The Flagship already demonstrated that maximizing prohibitions produces maximally flat output.

**4. Metaphor Coherence Gate (would verify metaphor applies structurally)**
- Why it hurts: BG-2 (Metaphor Structural) already exists as a behavioral gate with Opus fresh-eyes verification. Automating this would require NLP on class names and comments -- catastrophically unreliable. Would also remove the fresh-eyes benefit (BG-2's strength is that a zero-context agent evaluates the metaphor).

---

## PART 2: PA QUESTIONS ANALYSIS (48 Standard + 8 Tier 5 vs Stack)

### 2.1 Which Tier 5 Questions Evaluate Stack Concepts?

| PA Question | Stack Layer(s) | Uses Stack Vocabulary? | Assessment |
|-------------|---------------|----------------------|------------|
| PA-60 (Design Moments) | L5 density + L4 applied | NO -- uses "design moment" not "semantic density" or "multi-coherence" | GOOD: perceptual language prevents vocabulary bias |
| PA-61 (Multi-Voice) | L3 channel independence | PARTIALLY -- "visual properties" maps to channels but doesn't name them | ACCEPTABLE: sufficiently perceptual |
| PA-62 (Transition Variation) | L4 multi-coherence + dynamic range | NO -- "how many visual properties change simultaneously" is the stack concept in perceptual language | GOOD: asks the right question without stack jargon |
| PA-63 (Fractal Zoom) | L2 scale coverage | PARTIALLY -- "zoom into one component... does it echo the page" IS the fractal question | ACCEPTABLE: the zoom metaphor IS the stack concept, but expressed accessibly |
| PA-64 (Restraint) | L5 restraint | NO -- "deliberately plain" is a perception, not a mechanism count | EXCELLENT: restraint as perception, not as anti-metric |
| PA-65 (Music Analogy) | L4 + L5 integration | NO -- "single instrument / choir / ensemble" maps to SOLO/CHOIR/ENSEMBLE but uses music metaphor | EXCELLENT: THE integration question in accessible form |
| PA-66 (Negative Space) | L5 spatial confidence | NO -- "flavor of emptiness" is perceptual, not structural | GOOD: spatial confidence through perception |
| PA-67 (Novelty) | Emergent (L2-L5) | NO -- "something you have not seen before" | GOOD: captures creative surprise without mechanism vocabulary |

**Key finding: The Tier 5 questions deliberately AVOID stack vocabulary, and this is CORRECT.**

### 2.2 The Fresh-Eyes Principle vs Granular Evaluation

**The tension stated in the task:** Auditors shouldn't have vocabulary biasing perception. Does this conflict with granular evaluation?

**Analysis:** There are TWO populations of evaluators with different needs:

**PA Auditors (9 fresh-eyes agents):** Should NOT know stack vocabulary. Their job is to detect compositional quality PERCEPTUALLY. If an auditor knows "L4 multi-coherence requires 3+ channels shifting in the same semantic direction," they will COUNT channels instead of FEELING coherence. PA-62 asks "how many visual properties change simultaneously" -- this is the RIGHT formulation because it asks the auditor to OBSERVE and COUNT what they SEE, not to apply a framework. The answer "I see 4 things changing at once and they all feel like the page is getting more intense" is L4 multi-coherence DETECTED PERCEPTUALLY.

**PA Weaver (1 synthesis agent):** SHOULD know stack vocabulary. The weaver takes 9 auditors' perceptual responses and synthesizes them into a structured assessment. The weaver's job is to MAP perceptual findings to stack concepts. "Auditor F found 5 design moments distributed across all scroll thirds" -> "L5 semantic density: HIGH." "Auditor A selected 'ensemble with different parts'" -> "Stack integration: ENSEMBLE." The weaver is the TRANSLATOR between perception and framework.

**Verdict: No conflict.** Fresh-eyes auditors stay perceptual. Weaver translates to stack language. The boundary is EXACTLY at the 9-to-1 synthesis step. This is already the designed architecture (PA weaver exists in the pipeline). The enrichment needed is: give the WEAVER explicit stack vocabulary and the ENSEMBLE/CHOIR/SOLO/BROKEN classification framework (per Report 23). Do NOT give it to auditors.

### 2.3 Should PA Questions Name Specific Concepts?

**NO.** Here is why, with concrete evidence:

**Experiment 1 (Mode 4 PA on Ceiling Experiment):** 9 auditors with zero stack vocabulary. Result: 9/9 flagged whitespace voids, 7/9 flagged imperceptible backgrounds, 6/9 flagged metaphor being "announced not structural." These findings map precisely to L1 failure (imperceptible), L2 failure (whitespace = scale gaps), and L4 failure (announced = no multi-coherence). The auditors found the exact stack failures WITHOUT knowing the stack exists.

**Experiment 2 (Flagship Experiment programmatic gates):** Gates with explicit stack-like checks (SC-13 counts channels, SC-09 checks RGB deltas). Result: ALL gates PASSED. The page that scored 1.5/4 perceptually was classified as passing compositionally by programmatic checks. The gates measured the RIGHT THINGS but the thresholds were wrong (pre-Flagship calibration), and the gates could not detect that technically-compliant values were perceptually meaningless.

**The lesson:** Perception FIRST, framework SECOND. PA questions that name specific concepts ("Do you see multi-coherence at this boundary?") would turn auditors from OBSERVERS into CHECKLIST-RUNNERS. The question "Do different visual properties seem to have their own independent rhythms?" (PA-61) produces richer, more honest responses than "Count the channels shifting at each zone boundary."

### 2.4 What New PA Questions Would Help?

#### WOULD HELP (add to PA):

**PA-68: Transition Texture Variety**
"Look at 3 different section transitions on this page. Do they all change in the same way, or does each transition have its own character? Describe how at least 2 transitions differ."

- **Detects:** Dynamic range (L4 applied). Whether the builder uses BOTH dramatic (3+ channel) and quiet (1-2 channel) transitions, and whether transition CHARACTER varies (not just intensity).
- **Stack layer:** L4 multi-coherence, but tests VARIATION within multi-coherence rather than its presence
- **Why it helps:** PA-62 asks whether BOTH dramatic and quiet transitions exist. PA-68 asks whether transitions have different TEXTURES -- e.g., one transition is chromatic-dominant (big color shift, subtle type change), another is structural-dominant (border appears, subtle color change). This is the difference between "multi-coherence exists" and "multi-coherence is compositionally varied."
- **Auditor assignment:** D (Flow+Pacing) -- extends D's existing PA-62

**PA-69: Deliberate Asymmetry**
"Find a place where something is NOT perfectly balanced or centered. Does the asymmetry feel intentional and confident, or accidental and sloppy?"

- **Detects:** L5 spatial confidence. Whether the builder uses asymmetry as a compositional tool (confident spatial deployment) or defaults to symmetric layouts (safe but uncreative).
- **Why it helps:** PA-66 (negative space variety) tests whether gaps feel different. PA-69 tests whether the ENTIRE spatial composition is confident -- including content placement, grid alignment, and element positioning. Spatial confidence shows in asymmetry more than in spacing uniformity.
- **Auditor assignment:** E (Grid+Layout)

**PA-70: Content-Form Echo**
"Pick the most complex piece of content on this page (a table, a code block, a dense paragraph). Does the visual treatment of that content MATCH its complexity? Does a dense paragraph look denser than a light introduction?"

- **Detects:** Content-form resonance (one of the 4 irreducible capabilities from Report 85). Whether the visual treatment RESPONDS to content complexity or applies uniform styling regardless.
- **Why it helps:** No existing question explicitly tests content-form resonance. PA-05 ("designed") is holistic. PA-70 is surgical: it asks whether specific content gets specific visual treatment. This is the mechanism-catalog concept (content-mechanism fit) tested perceptually.
- **Auditor assignment:** B (Readability+Typography)

#### WOULD HURT (do NOT add):

**PA-71 (proposed and rejected): "How many distinct visual channels shift at the Zone 2 boundary?"**
- Why it hurts: This is SC-13 rephrased as a PA question. Turns the auditor into a gate runner. Destroys fresh-eyes independence. PA-62 already captures this perceptually ("count how many visual properties change simultaneously").

**PA-72 (proposed and rejected): "Does the page exhibit 3 or more levels of fractal self-similarity?"**
- Why it hurts: Uses stack vocabulary ("fractal self-similarity"). Biases the auditor toward LOOKING FOR fractals rather than PERCEIVING coherence. PA-63 already tests this in accessible language ("zoom into one component... does it echo the page?").

**PA-73 (proposed and rejected): "Rate the anti-scale model: density HIGH/MEDIUM/LOW, restraint HIGH/MEDIUM/LOW, confidence HIGH/MEDIUM/LOW"**
- Why it hurts: Imposes the L5 framework on auditors. The three PA questions that already test these (PA-60 density, PA-64 restraint, PA-66 confidence) do so in perceptual language. Asking auditors to rate abstract dimensions produces framework-compliant answers, not perceptual judgments. The WEAVER should synthesize the three perceptual answers into an H/M/L rating -- not the auditors.

---

## PART 3: THE PROCESS GAP -- CAN IT BE CLOSED? SHOULD IT BE?

### 3.1 What the Gap Is

Gates measure EFFECTS: "Were 3+ channels shifting at this boundary?" (SC-13)
PA measures PERCEPTION: "Do different visual properties seem to have independent rhythms?" (PA-61)
Neither measures PROCESS: "Did the builder think in scales and channels while making CSS decisions?"

This means a builder who achieves multi-coherence BY ACCIDENT (e.g., using a complex grid layout that inherently shifts multiple channels) scores the same as a builder who achieves it BY DESIGN (e.g., deliberately planning channel shifts at each boundary using a transition table).

### 3.2 Does the Gap Matter?

**Argument that it matters:** The transition table and fractal echo table are identified as the TWO most important compositional artifacts (Reports 83, 84, 23). If the builder produces them as theater (filling in cells without using them during the build), the build process lacks compositional navigation and the result is more likely to be flat despite technically passing gates.

**Argument that it doesn't matter:** If the RESULT is compositionally rich, who cares HOW the builder got there? CD-006 had NO transition table, NO fractal echo table, NO explicit stack awareness. It achieved 39/40 through native Opus compositional capability. Process verification would have REJECTED CD-006's build (no planning artifacts) despite producing the best page in the entire project's history.

**The deeper issue:** Process verification is actually RELEVANCE verification. "Did the builder use the intelligence we gave it?" is a valid question ONLY if we're debugging a failure. In success (PA-05 >= 3.5), process is irrelevant. In failure (PA-05 < 3.0), process artifacts (build log, transition table, fractal echo table) become DIAGNOSTIC tools for understanding WHY the failure occurred.

### 3.3 Verdict: Do NOT Close the Gap in Verification. Close It in Diagnostics.

The process gap should NOT be closed through new gates or PA questions. It SHOULD be closed through diagnostic artifacts that the builder produces during the build:

1. **Transition table** (already mandated by conventions brief) -- reviewed ONLY on failure
2. **Fractal echo table** (already mandated by DG-1) -- validated by DG-1B (proposed above)
3. **Build log compositional markers** (NOT a gate, but a diagnostic) -- the weaver looks for evidence of COMPOSING mode (metaphor derivation, boundary planning, midpoint observation) vs COMPLYING mode (threshold checks, value verification). This is qualitative analysis, not gate verification.

**The principle:** Verification asks "Is the output good?" Diagnostics ask "Why isn't the output good?" These are different instruments with different triggers. Verification runs ALWAYS. Diagnostics run on FAILURE.

---

## PART 4: SC-13B UPGRADE ANALYSIS

### 4.1 Current State

SC-13B (Channel Shift Direction Coherence) is ADVISORY. It classifies each channel shift at each boundary as INTENSIFYING (+) or RELAXING (-), then checks whether >= 50% of boundaries have >= 3 channels in the same direction.

### 4.2 Arguments FOR Upgrading to BLOCKING

1. **Direction IS the difference between multi-coherence and multi-noise.** SC-13 catches "3+ channels shift" but if the shifts contradict (bg darkens, font GROWS, spacing EXPANDS), the result is visually incoherent even though SC-13 passes. Direction coherence IS the quality that distinguishes DESIGNED from STRUCTURED.

2. **The 50% threshold is conservative.** Requiring only half of boundaries to be coherent gives wide latitude for tension-release patterns and intentional counterpoint.

3. **It would have caught the Flagship's direction incoherence.** While the Flagship's primary failure was imperceptible values (caught by SC-09), the secondary failure was that the few visible shifts contradicted each other. SC-13B as blocking would have flagged this.

### 4.3 Arguments AGAINST Upgrading to BLOCKING

1. **~50% heuristic confidence is too low for a blocking gate.** The gate runner explicitly acknowledges this: "Confidence: ~50% (direction heuristic is imprecise)." A blocking gate with 50% accuracy blocks half of its valid inputs.

2. **The direction classification is too simplistic.** "Darker = INTENSIFYING" and "lighter = RELAXING" doesn't account for semantic inversion (a white space creating emphasis through contrast), cyclical patterns (warm -> cool -> warm as a deliberate arc), or material-layer complexity (background darkens but texture lightens).

3. **CD-006 would fail.** CD-006's strength is compositional variety -- different boundaries use different approaches. Some intensify, some relax, some use counterpoint. A blocking SC-13B with 50% threshold might still pass CD-006, but with a more nuanced direction check, CD-006's intentional variety could be misclassified as incoherence.

4. **Premature optimization.** Zero Flagship builds have been completed. The direction heuristic has NEVER been calibrated against actual Flagship output. Upgrading before calibration = building on theoretical rather than empirical foundation.

### 4.4 Verdict: KEEP ADVISORY. Add Calibration Protocol.

**Keep SC-13B ADVISORY.** After the first 3 successful builds (PA-05 >= 3.5), analyze SC-13B's diagnostic output against PA verdicts:
- If SC-13B ADVISORY warnings correlate with PA failures: upgrade to BLOCKING
- If SC-13B ADVISORY warnings correlate with intentional composition: IMPROVE the heuristic
- If SC-13B output does not correlate with PA: REMOVE the gate (it adds diagnostic noise)

**The calibration protocol:**
```
For each build:
1. Record SC-13B advisory output (boundary-by-boundary direction classification)
2. Record PA-61 (multi-voice), PA-62 (transition variation), PA-65 (music analogy) responses
3. After 3 builds: correlate SC-13B warnings with PA failures
   - If correlation >= 0.7: promote to BLOCKING
   - If correlation 0.3-0.7: refine heuristic, re-test
   - If correlation < 0.3: deprecate gate
```

---

## PART 5: CROSS-INSTRUMENT INTEGRATION GAPS

### 5.1 The Three Instruments

1. **Gates** (programmatic, ~15 seconds): Measure structural properties of rendered CSS
2. **PA** (perceptual, ~25 minutes): Measure human-equivalent perception of the page
3. **Deliverable gates** (schema validation, ~10 seconds): Validate builder planning artifacts

### 5.2 What Falls Between Instruments

| Gap | Description | Why It's Missed |
|-----|-------------|----------------|
| **Scale-to-Scale Consistency** | Does the pattern at navigation scale match the pattern at component scale? | Gates check per-boundary (not cross-scale). PA-63 asks about one component. Neither checks ALL scales against each other. |
| **Compositional Drift** | Did the page start rich and become flat (or vice versa)? | SC-13 averages across boundaries. PA auditors see the whole page. But neither specifically measures DRIFT (systematic quality degradation along scroll position). |
| **Layout-Mechanism Correlation** | Does layout variety (grids, columns) produce emergent multi-coherence? | SC-13 measures channel count but doesn't know WHY channels shift. If they shift because of layout rotation (CD-006) or because of property modulation (Flagship), the gate doesn't distinguish. |
| **Restraint Evidence** | Can you tell WHAT the builder chose NOT to deploy? | Invisible in CSS (absence of mechanism = absence of evidence). PA-64 asks "is there deliberate quiet?" but cannot verify deliberateness. |
| **Stack Integration** | Do all 5 layers compose into a unified experience? | No single instrument checks integration. Report 23's Weaver Stack Verdict is the proposed solution but doesn't exist yet. |

### 5.3 The Weaver Stack Verdict: The Missing Integrator

Report 23 proposes a Weaver Stack Verdict that synthesizes gate data + PA Tier 5 responses:

```
STACK ASSESSMENT:
  L1 (Perception): [PASS/FAIL -- from gates]
  L2 (Scales):     [__/5 -- from DG-1 + PA-63]
  L3 (Channels):   [__/6 active -- from SC-13 + PA-61]
  L4 (Coherence):  [__% boundaries >= 3 -- from SC-13 + PA-62]
  L5 (Anti-Scale): [D:H/M/L, R:H/M/L, C:H/M/L -- from PA-60,64,66]

  Integration: [ENSEMBLE / CHOIR / SOLO / BROKEN]
```

**My assessment of this proposal:** STRONG. It does NOT add new verification instruments -- it SYNTHESIZES existing ones. The weaver already exists in the pipeline (it synthesizes 9 auditor reports into a verdict). Adding stack assessment to the weaver's task is a ~10-line addition to the weaver's instructions, not a new file or new gate.

**One refinement:** The integration classification should include a CONFIDENCE indicator. If the weaver is uncertain whether the page is ENSEMBLE or CHOIR (because some auditor responses are ambiguous), it should say so rather than force-classifying.

---

## PART 6: RECOMMENDATIONS

### Summary of Proposed Changes

| Change | Type | Layer | Effort | Risk |
|--------|------|-------|--------|------|
| Add DG-1B (Fractal Echo Cross-Validation) | New BLOCKING gate | L2 | ~20 lines JS | LOW -- validates evidence |
| Add SC-13C (Channel Variety Advisory) | New ADVISORY gate | L3 | ~15 lines JS | LOW -- diagnostic only |
| Add SC-10B (Content Mass Distribution) | New ADVISORY gate | L5 proxy | ~20 lines JS | LOW -- diagnostic only |
| Keep SC-13B ADVISORY + add calibration protocol | Gate modification | L4 | ~5 lines protocol | ZERO -- maintains status quo |
| Add PA-68 (Transition Texture Variety) | New PA question | L4 | ~8 lines text | LOW -- extends existing auditor D |
| Add PA-69 (Deliberate Asymmetry) | New PA question | L5 | ~8 lines text | LOW -- extends existing auditor E |
| Add PA-70 (Content-Form Echo) | New PA question | L5+ | ~8 lines text | LOW -- extends existing auditor B |
| Add Weaver Stack Verdict | Weaver instruction | Integration | ~10 lines weaver prompt | LOW -- synthesizes existing data |
| Do NOT upgrade SC-13B to BLOCKING | Non-change | L4 | 0 | N/A |
| Do NOT add process verification gates | Non-change | Process | 0 | N/A |
| Do NOT add anti-scale programmatic gates | Non-change | L5 | 0 | N/A |

### Changes That Should NOT Be Made

1. **Do NOT add gates that parse semantic content** (direction grammar, metaphor coherence, anti-scale metrics). These reproduce the guardrail factory problem at the compositional intelligence level.

2. **Do NOT add PA questions that name stack concepts** (multi-coherence, fractal scales, channel breadth). This violates fresh-eyes independence and turns auditors into framework validators.

3. **Do NOT try to close the process gap through verification.** Process artifacts (transition table, build log) are DIAGNOSTIC tools for failure analysis, not verification instruments for success prediction.

4. **Do NOT add "meta-gates" that verify gate coherence.** (e.g., "Did SC-09 and SC-13 produce consistent results?") This is the complexity ratchet -- gates verifying gates verifying gates. The weaver Stack Verdict handles cross-instrument synthesis without adding gate-level machinery.

### The Verification Layer's Correct Role

The verification layer's job is to:
- **Raise the floor** (prevent FLAT pages from consuming PA time) -- WELL SERVED by L0/L1 gates
- **Provide diagnostic data** (where to look, what to investigate) -- PARTIALLY SERVED by L2-L4 gates
- **Evaluate quality** (is the composition rich?) -- CORRECTLY DELEGATED to PA

The verification layer should NOT try to:
- **Measure compositional intelligence** (that's a builder property, not an output property)
- **Judge semantic fit** (that requires understanding content, not measuring CSS)
- **Replace PA** (gates catch 26% of compositional quality; the remaining 74% is inherently perceptual)

The gate runner's own preamble says it best: "Gates catch mechanical defects (~26% of compositional quality). The remaining ~74% requires perceptual audit (PA). Gates raise the FLOOR -- they prevent FLAT (1.5/4) pages from consuming PA auditor time. Gates never judge composition; they filter for it."

This framing is PRECISELY correct. The enrichment should strengthen the filter (DG-1B, SC-13C, SC-10B) and strengthen the judgment (PA-68/69/70, Weaver Stack Verdict) without confusing which instrument does which job.

---

## APPENDIX: COVERAGE MATRIX

### Full Gate -> Stack Layer -> PA Question Traceability

| Stack Layer | Programmatic Gates | Deliverable Gates | PA Standard | PA Tier 5 | Weaver Synthesis | TOTAL Coverage |
|-------------|-------------------|-------------------|-------------|-----------|-----------------|---------------|
| L0 Identity | SC-01,02,03,04,05,06,07 (7) | DG-3 (1) | PA-26,27,28 (3) | -- | -- | ~95% |
| L1 Perception | SC-09,10,14 (3) | DG-2 (1) | PA-09,10,11 (3) | -- | -- | ~95% |
| L2 Scales | SC-11,12 (2) | DG-1 (1), DG-4 partial | PA-14,15 (2) | PA-63 (1) | L2 score | ~50% |
| L3 Channels | SC-08,13,15 (3) | -- | PA-16,17 (2) | PA-61 (1) | L3 score | ~45% |
| L4 Multi-Coherence | SC-13,13B,16 (3) | -- | -- | PA-60,61,62,65 (4) | L4 % | ~55% |
| L5 Anti-Scale | -- (0) | -- | -- | PA-64,66,67 (3) | D/R/C rating | ~35% |
| Integration | -- (0) | -- | -- | PA-65 (1) | ENSEMBLE verdict | ~25% |

### Post-Enrichment Coverage (with proposed changes)

| Stack Layer | Added | New Coverage |
|-------------|-------|-------------|
| L2 Scales | DG-1B (cross-validation) | ~50% -> ~65% |
| L3 Channels | SC-13C (variety advisory) | ~45% -> ~55% |
| L4 Multi-Coherence | PA-68 (transition texture) | ~55% -> ~60% |
| L5 Anti-Scale | SC-10B (mass advisory), PA-69 (asymmetry), PA-70 (content-form) | ~35% -> ~50% |
| Integration | Weaver Stack Verdict | ~25% -> ~45% |

**Net effect:** L5 and Integration remain the weakest layers, which is CORRECT because they are the most evaluative and least mechanically verifiable. The enrichment improves coverage without overstepping into the guardrail factory.

---

**END OF REPORT**

**Statistics:**
- Files read: 6 (gate-runner.md 992 lines, flagship-pa-questions.md 144 lines, 06-COMP-INTEL-CONDITIONS.md 477 lines, 23-STACK-INTEGRATION.md 506 lines, 12-SYNTHESIS.md 324 lines, mechanism-catalog.md 200 lines sampled)
- Gates analyzed: 21 (17 blocking + 2 advisory + 2 behavioral)
- PA questions analyzed: 8 Tier 5 (PA-60 through PA-67)
- Stack layers mapped: 5 (L1-L5) + L0 (Identity) + Integration
- New gates proposed: 3 (DG-1B blocking, SC-13C advisory, SC-10B advisory)
- New PA questions proposed: 3 (PA-68, PA-69, PA-70)
- New gates rejected: 4 (direction grammar, mechanism count, anti-pattern, metaphor coherence)
- New PA questions rejected: 3 (PA-71 channel count, PA-72 fractal naming, PA-73 anti-scale rating)
- SC-13B upgrade verdict: KEEP ADVISORY, calibrate after 3 builds
- Process gap verdict: Do NOT close through verification; close through failure diagnostics
