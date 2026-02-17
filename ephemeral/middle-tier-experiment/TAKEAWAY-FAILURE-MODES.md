# Middle-Tier Experiment: Comprehensive Failure Mode Analysis

**Date:** 2026-02-16
**Analyst:** failure-analyst
**Scope:** ALL quality gaps, not just the 3 formal defects
**Purpose:** Document every failure mode to inform Ceiling tier improvements

---

## Executive Summary

The Middle-tier experiment achieved SUCCESS (PA-05 4/4, D3 3/3, better than Variant B) but revealed **14 distinct failure modes** ranging from CRITICAL (missing footer) to POLISH (monotonous rhythm). The patterns:

- **PROCESS failures dominate:** 8 of 14 failures trace to how we orchestrated the build, not what we asked for
- **Zero self-verification:** The builder completed without checking its own output against spec
- **Prompt slicing created blind spots:** The builder missed structural elements explicitly specified in the plan
- **Quality degraded from "designed" to "professionally stiff":** Specifications were applied correctly but not felt through

**The paradox:** We achieved SUCCESS by crossing thresholds with minimal margin (PA-05b at exactly 2.0x, PA-05d estimated not measured), while shipping output with WOULD-NOT-SHIP defects. The verdict system passed output that the perceptual auditor said "YES WITH RESERVATIONS" and noted "feels like rules rather than feeling the page."

**Top insight:** We're measuring COMPLIANCE (did you hit thresholds?) but the real gap is COMPOSITION (did you compose, or just apply specs?). Every mechanism was deployed correctly. The page still feels "professionally stiff."

---

## Failure Mode Table

| # | Failure | Severity | Root Cause | Failure Type | Preventable? | Fix for Ceiling |
|---|---------|----------|------------|--------------|--------------|-----------------|
| 1 | Missing footer (WOULD-NOT-SHIP) | CRITICAL | Prompt slicing — builder didn't integrate all planned elements; no structural completeness check | PROCESS | YES | Add landmark completeness gate at Phase 2→3 boundary (verify header/footer/all sections exist before declaring "done") |
| 2 | Token compliance 66.5% (need 80%) | MAJOR | Builder used raw hex/px instead of tokens; no self-check before file write | PROCESS | YES | Add token compliance gate at Phase 2 (builder scans CSS, calculates var() ratio, MUST hit 80% before writing file) |
| 3 | CPL +2 chars (82 vs 80 max) | MINOR | No verification formula provided to builder; font-size 18px vs expected 16px | DESIGN | YES | Add CPL formula to builder prompt with explicit calculation method |
| 4 | "Professionally stiff" quality | MAJOR | Vocabulary applied without composition — mechanisms deployed correctly but not felt through | DESIGN | SOMEWHAT | Requires composition skill beyond specification compliance — may need different builder model or metaphor guidance |
| 5 | Metronomic rhythm (spacing repeats without variation) | MODERATE | Section gaps uniform (all ~48-64px); no rhythm variation requirement | DESIGN | YES | Require >= 2 distinct gap sizes across sections; specify TRANSITIONS not just padding |
| 6 | Top-heavy weight distribution | MODERATE | No visual balance requirement; strong header/diagram early, then dissipates | DESIGN | YES | Require >= 2 focal points in bottom 50% of page; enforce visual weight distribution |
| 7 | PA-05b at exactly 2.0x threshold (zero margin) | MINOR | No margin-of-safety buffer; passed by 0.0x | DESIGN | YES | Set internal target above threshold (e.g., 2.2x internal to pass 2.0x external) |
| 8 | Single-evaluator novelty assessment (no blind protocol) | MODERATE | Same evaluator who built/planned also assessed novelty — confirmation bias | PROCESS | YES | Use fresh-eyes zero-context agent for novelty; blind evaluation protocol |
| 9 | Heading spacing ratio violated (appears equal instead of 1.5:1) | MODERATE | Margin collapse made 2:1 CSS ratio LOOK like 1:1; PA measured perception not computed styles | PROCESS | YES | Make heading spacing BINARY programmatic check, not judgment call; educate PA to measure computed styles |
| 10 | Limited visual drama (only 2 moments) | MODERATE | No requirement for visual punctuation across scroll; drama concentrates in top third | DESIGN | YES | Require >= 3 visual moments distributed across scroll (top/middle/bottom thirds) |
| 11 | No composed transitions (just empty space) | MODERATE | Section gaps are functional separation but not designed moments | DESIGN | YES | Require designed transitions with specific characteristics (bridge/breathing/shift types) |
| 12 | Table text compression (cramped description column) | MINOR | No column width optimization; text runs to cell edge | DESIGN | SOMEWHAT | Add table column width guidelines; test with representative content |
| 13 | Metadata text feels like fine print | MINOR | Header metadata at 0.75rem (12px) too small relative to context | DESIGN | YES | Set minimum metadata size relative to body (e.g., >= 0.85rem if body is 1rem) |
| 14 | "Specifications applied not felt through" | MAJOR | Rule-following without compositional confidence; page reads like "I applied specs correctly" | SKILL | SOMEWHAT | Fundamental composition capability gap — rules achieve compliance, metaphor enables feeling-through |

---

## Severity Distribution

**By Level:**
- CRITICAL: 1 (missing footer)
- MAJOR: 3 (token compliance, professionally stiff, specs not felt)
- MODERATE: 6 (rhythm, weight, novelty bias, heading spacing, drama, transitions)
- MINOR: 4 (CPL, PA-05b margin, table compression, metadata size)

**By Type:**
- PROCESS: 4 failures (footer, token compliance, novelty bias, heading spacing measurement)
- DESIGN: 8 failures (CPL, rhythm, weight, margin, drama, transitions, table compression, metadata)
- SKILL: 2 failures (professionally stiff, specs not felt)

**The dominant pattern:** DESIGN failures (8) > PROCESS failures (4) > SKILL failures (2). However, SKILL failures are the HARDEST to fix — they represent fundamental capability gaps that rules can't solve.

---

## Deep Dive: Critical Failures

### Failure #1: Missing Footer (CRITICAL)

**Evidence:**
- Build plan Section 2 (SECTION MAP) specified "Section F: Dark Footer (Mirror)" with full CSS in Section 7 (BUILDER BLOCKS)
- Perceptual audit (PA-13): "No designed conclusion — content stops and you scroll through screens of emptiness. It feels unfinished."
- PA-09: "The massive empty area after content ends (roughly positions 2500-7600) serves no purpose. It's not breathing room — it's a dropped signal."
- PA-01 (1440px): "The page just ends. There's no designed conclusion — content stops and you scroll through screens of cream-colored emptiness."
- Comparison report: Footer should exist but wasn't visible
- Ship verdict: "WOULD-NOT-SHIP" for this defect alone

**Root cause:**
PROMPT SLICING created a blind spot. The builder received the plan (which specified footer) but the prompt slice emphasized "implement the plan" without explicit STRUCTURAL CHECKLIST of required landmarks. The builder implemented Sections B-E (content) and stopped, treating Section F (footer) as optional rather than structural.

**Why this is CRITICAL:**
- It's a SPECIFICATION VIOLATION (plan said footer, output has no footer)
- It's a WOULD-NOT-SHIP defect (PA explicitly said page feels unfinished)
- It demonstrates PROCESS FAILURE (building without structural verification)
- It creates cascading perception issues (top-heavy weight, no visual ending, dropped signal)

**Could it have been caught?**
YES. A landmark completeness check at Phase 2→3 boundary would have caught this:
```
BEFORE declaring "build complete":
- Verify <header> element exists (if plan specified Section A)
- Verify <footer> element exists (if plan specified Section F)
- Verify section count matches plan's content sections (4 sections for B/C/D/E)
```

**Fix for Ceiling:**
1. Add structural checklist to builder prompt (Appendix B Block 2)
2. Add programmatic landmark existence check (Phase 3 audit)
3. Add "plan diff" to perceptual audit instructions (PA should explicitly check for all planned structural elements)

---

### Failure #2: Token Compliance 66.5% (MAJOR)

**Evidence:**
- Programmatic audit measured 145 var() references, 218 total values = 66.5%
- Threshold: >= 80%
- Deviation: -13.5 percentage points
- 73 raw values: 23 hex colors + 50 px values (excluding approved contexts like border-width)
- Verdict classification: "SIGNIFICANT for maintainability, NOT for design quality"

**Root cause:**
Builder used raw values (`#E83025`, `24px`) instead of tokens (`var(--color-primary)`, `var(--space-6)`) despite plan specifying tokens. No self-check before file write. Either:
1. Builder didn't know tokens existed for those properties, OR
2. Builder chose convenience (easier to type `#E83025`), OR
3. Token gaps existed (value needed wasn't in tokens.css)

Reading tokens.css confirms 65 tokens exist for all common properties. No excuse for raw values.

**Why this is MAJOR:**
- It's a SYSTEMIC violation (73 instances, not one-off mistake)
- It's 13.5 points below threshold (substantial gap)
- It violates design system coherence (maintainability promise)
- It demonstrates ZERO SELF-VERIFICATION (builder never checked its own output)

**Could it have been caught?**
YES. A token compliance check BEFORE file write would have caught this:
```
BEFORE writing HTML file:
1. Scan CSS for raw hex values (regex: /#[0-9A-Fa-f]{3,6}/)
2. Scan for raw px values outside approved contexts (border-width 1/3/4px OK)
3. Calculate: var() / (var() + raw) >= 80%
4. If FAIL: replace raw values with tokens, then write file
```

**Fix for Ceiling:**
1. Add token enforcement to Appendix B Block 2 (file-write enforcement)
2. Make token compliance a GATE, not just a measurement (builder can't proceed below 80%)
3. Add "token gap log" output (if builder needs value not in tokens.css, log it for token expansion)

---

### Failure #4: "Professionally Stiff" Quality (MAJOR)

**Evidence:**
- Perceptual audit (Cold Look 1440px): "Professional but stiff — feels like a technical manual that wants to be approachable but hasn't quite relaxed."
- PA-03: "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark — it reads like 'I applied the specifications correctly.'"
- PA-05: "I'd ship it for a documentation site but not proudly."
- PA-20: "Technical, organized, restrained. It's not trying to be playful or emotionally resonant — it's trying to be clear and trustworthy."
- Output quality retro: "The gap between Middle-tier's 8-10 mechanism target and the 12 deployed suggests mechanism QUANTITY alone doesn't guarantee perceptual RICHNESS. The page's 'mechanical rhythm' and 'limited visual drama' point to deployment STRATEGY issues, not capability issues."

**Root cause:**
VOCABULARY APPLIED WITHOUT COMPOSITION. The builder deployed 12 mechanisms correctly (all pass technical verification) but without compositional confidence. It's the difference between:
- **Vocabulary fluency:** "I know these words exist and how to spell them"
- **Compositional confidence:** "I feel when this word fits and when it doesn't"

The page demonstrates the former, not the latter.

**Why this is MAJOR:**
- It's the PRIMARY QUALITY GAP between "designed" and "great"
- It reveals the fundamental limitation of specification-driven building
- It's PERVASIVE (affects entire page, not localized to one section)
- It's the SKILL failure category (hardest to fix via rules)

**Could it have been caught?**
SOMEWHAT. A fresh-eyes qualitative review could identify "stiff" quality, but PREVENTING it requires different capability:
- Rules create COMPLIANCE ("did you do X?")
- Metaphor enables COMPOSITION ("does X feel right here?")

The Middle-tier used LOOKUP (content → mechanism matching) not DERIVATION (metaphor → spatial expression). Lookup produces correct-but-mechanical output.

**Fix for Ceiling:**
This is the HARD problem. Options:
1. Use Opus model for building (Middle used Sonnet builder after Opus planning)
2. Provide metaphor context to builder (currently sliced out) so builder composes from metaphor, not just deploys mechanisms
3. Add "composition review" gate where a fresh agent assesses "does this feel confident or mechanical?" before shipping
4. Accept this as Middle-tier limitation — Ceiling's metaphor derivation may solve it (or make it worse)

**Prediction:** Ceiling will EITHER solve this (metaphor enables feeling-through) OR worsen it (metaphor creates derivative copying). The Middle-tier result suggests LOOKUP doesn't achieve confident composition. Ceiling tests whether DERIVATION does.

---

## Deep Dive: Process Failures

### Failure #8: Single-Evaluator Novelty Assessment (MODERATE)

**Evidence:**
- All three novelty tests (D3.1/D3.2/D3.3) run by SAME evaluator who:
  - Knew which page was "the new experiment"
  - Knew research hypothesis (Middle-tier should be more novel than Floor)
  - Had just read the build plan documenting compositional intent
- Adversarial review: "This is evaluation bias 101. The evaluator KNEW they were supposed to find novelty and KNEW which page was expected to demonstrate it."
- No blind evaluation protocol
- No multi-evaluator reconciliation
- No automated structural/CSS comparison before human judgment

**Root cause:**
CONFIRMATION BIAS in evaluation design. The same team that built/planned the page also assessed its novelty. This violates basic evaluation independence.

**Why this is MODERATE:**
- It doesn't invalidate the SUCCESS verdict (page still crosses thresholds)
- But it WEAKENS CONFIDENCE in novelty claims
- It creates REPLICATION RISK (other teams will cite this as precedent for self-evaluation)

**Could it have been caught?**
YES. Standard evaluation protocol would require:
1. Fresh-eyes agent with zero context on experiment purpose
2. Multiple independent evaluators with majority-vote reconciliation
3. Blind evaluation (evaluator doesn't know which is "the experiment" vs "the reference")

**Fix for Ceiling:**
1. Use separate evaluator agent with no context on experiment goals
2. Provide evaluator with 3-5 pages (including Middle, Ceiling, references) WITHOUT labels
3. Ask evaluator to rank structural similarity, CSS overlap, mechanism uniqueness
4. Only after blind ranking, reveal which was the test page
5. Require >= 2 independent evaluators for novelty assessment

---

## Deep Dive: Design Failures

### Failure #5: Metronomic Rhythm (MODERATE)

**Evidence:**
- PA-17: "There's rhythm but it's metronomic rather than musical. Section spacing is consistent, heading sizes follow a pattern, but there's no syncopation or variation to create interest."
- PA-40: "Consistent to the point of being mechanical. No sudden jumps, but also no intentional variation for emphasis."
- PA-41: "The section spacing pattern repeats throughout without variation. Every section → section gap feels identical. After 4-5 repetitions it becomes predictable rather than rhythmic."
- Output quality retro (Spacing Compression mechanism analysis): "The MECHANISM is deployed correctly (50% compression ratio), but the DEPLOYMENT STRATEGY lacks variation. Every section→section gap feels identical. No syncopation, no intentional breaks."

**Root cause:**
UNIFORM GAP SIZES. The planner specified section PADDING (128px / 64px / 96px / 64px) but not section GAPS (space between sections). The builder used default gap (likely 48-64px uniformly), creating mechanical spacing.

**Why this is MODERATE:**
- It doesn't break functionality (spacing exists and separates sections)
- It DOES degrade perceptual quality (rhythm becomes predictable)
- It's PERVASIVE (affects entire scroll experience)
- It's easily fixable (just vary gap sizes)

**Could it have been caught?**
YES. A rhythm variation gate could enforce:
```
RHYTHM CHECK (Phase 2 internal):
- Count unique section gap sizes
- Threshold: >= 2 distinct gap sizes
- Example PASS: 80px (bridge), 48px (breathing), 48px (breathing)
- Example FAIL: 64px, 64px, 64px (uniform, no rhythm)
```

**Fix for Ceiling:**
1. Add TRANSITION TABLE to planning phase (not just section padding, but section-to-section gaps)
2. Specify gap types: BRIDGE (large, shift between density zones), BREATHING (medium, maintain proximity), SHIFT (varied for emphasis)
3. Require >= 2 distinct gap sizes across all transitions
4. Add rhythm variation to M3 (Coherence Check): "Document at least 3 transitions with DIFFERENT gap sizes"

---

### Failure #6: Top-Heavy Weight Distribution (MODERATE)

**Evidence:**
- PA-10: "Top-heavy. The dark header creates a strong cap, then the middle dissolves into uniform cream with occasional darker blocks (tables, diagram). No anchoring elements in the bottom half."
- PA-32: "Weight concentrates at top (dark header), appears again briefly with the black diagram, then disappears. The bottom two-thirds feel weightless."
- PA-35: "Peaks early (dark header, features table creates structure), peaks again with the orange problem box and black diagram, then fades steadily. By the installation section interest is declining."
- Output quality retro (Solid Offset analysis): "Creates weight imbalance: The diagram is the ONLY element with solid offset. This creates top-heavy weight distribution — strong focal point in Architecture section, no visual anchors in Installation/Security sections."

**Root cause:**
NO VISUAL BALANCE REQUIREMENT. The page has strong focal points in top third (dark header at position 0, black diagram at ~1440px) but nothing in bottom half. Weight distribution is ACCIDENTAL, not DESIGNED.

**Why this is MODERATE:**
- It doesn't break usability (content is still readable)
- It DOES create perceptual imbalance (interest fades across scroll)
- It's STRUCTURAL (affects overall page composition, not just one element)
- It correlates with missing footer (footer would have anchored bottom weight)

**Could it have been caught?**
YES. A visual weight distribution check could enforce:
```
WEIGHT DISTRIBUTION (Phase 3 perceptual audit):
- Identify all high-weight elements (dark backgrounds, large images, solid offsets)
- Map their scroll positions (top/middle/bottom thirds)
- Require: >= 1 focal point in bottom 50% of page
- If FAIL: add visual anchor to lower sections
```

**Fix for Ceiling:**
1. Add weight distribution requirement to planning phase: "Distribute focal points across scroll (top/middle/bottom)"
2. Add to PA-32 instructions: "If weight is top-heavy, identify what would anchor the bottom third"
3. For Ceiling: specify where visual drama should occur, not just "create visual moments"

---

### Failure #14: "Specifications Applied Not Felt Through" (MAJOR)

**Evidence:**
- PA-03: "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark — it reads like 'I applied the specifications correctly.'"
- PA-SEM-03: "Pattern fits content at the macro level (documentation → clean structure) but not at the micro level (specific measurements feel arbitrary)."
- PA-33: "Even within content sections, the whitespace feels more like 'default spacing applied' than composed rhythm."
- PA-34: "The gap between sections is uniform whitespace. It's separation but not a designed transition."
- Output quality retro executive summary: "The page exhibits its own compositional identity distinct from showcase pages, demonstrates vocabulary fluency rather than template copying. **However**, the page feels 'professionally stiff' rather than 'compositionally confident.' The gap between Middle-tier's mechanism target and perceptual richness points to deployment STRATEGY issues."

**Root cause:**
RULE-FOLLOWING WITHOUT COMPOSITIONAL CONFIDENCE. This is the meta-failure underlying #4, #5, #6, #10, #11. The builder:
- Applied all mechanisms correctly (technical pass)
- Hit all thresholds (compliance pass)
- But never COMPOSED (feeling-through fail)

It's the difference between:
- "I placed border-weight gradient because the spec says use hierarchy mechanisms" (APPLIED)
- "I placed border-weight gradient because security criticality deserves visual encoding" (FELT THROUGH)

The former is mechanical. The latter is compositional.

**Why this is MAJOR:**
- It's the FUNDAMENTAL GAP between "designed" and "great"
- It's SKILL-level failure (rules don't fix this)
- It affects EVERY mechanism (all are applied correctly but mechanically)
- It's what makes the page "professional but stiff"

**Could it have been caught?**
SOMEWHAT. A qualitative review asking "does this feel confident or rule-following?" could identify it. But PREVENTING it requires:
- Different builder capability (Opus vs Sonnet?)
- Metaphor context (so builder composes from feeling, not spec)
- Iterative refinement (builder revises after seeing output, not one-shot)

**Fix for Ceiling:**
This is the HARDEST failure to fix. Options:
1. **Use Opus builder** instead of Sonnet (Middle used Opus planner, Sonnet builder — flip this for Ceiling)
2. **Provide metaphor to builder** (currently sliced out to test LOOKUP vs DERIVATION — but maybe builder needs metaphor to feel-through even in Middle tier)
3. **Add revision phase** (builder builds, reviews own output, revises before shipping — currently one-shot)
4. **Accept as Middle-tier characteristic** — Middle = LOOKUP (mechanical correctness), Ceiling = DERIVATION (metaphor enables feeling-through?)

**Prediction:** If Ceiling ALSO feels "specifications applied not felt through," it means metaphor derivation creates DERIVATIVE copying (worse than Middle's mechanical correctness). If Ceiling feels MORE confident, it validates that metaphor enables composition. This is THE experiment.

---

## TOP 3 HIGHEST-LEVERAGE FIXES

### 1. Add Builder Self-Check Phase (PROCESS)

**What:** Between Phase 2 (building) and Phase 3 (audit), add a self-verification step where the builder checks its own output against spec BEFORE declaring "done."

**Why this is highest leverage:**
- Catches 3 major failures: #1 (missing footer), #2 (token compliance), #3 (CPL)
- Prevents WOULD-NOT-SHIP output from reaching perceptual audit
- Zero additional builder capability required (just scan what you wrote)
- Minimal time cost (~2-3 min to verify vs cost of rebuilding after audit)

**Implementation:**
Add to builder prompt (Appendix B Block 2, after "BUILDER BLOCKS" section):
```markdown
SELF-VERIFICATION GATE (before declaring "build complete"):

Run these checks on your output BEFORE writing the file:

1. STRUCTURAL COMPLETENESS
   - [ ] <header> exists (if plan specified Section A)
   - [ ] <footer> exists (if plan specified Section F)
   - [ ] Section count matches plan's content sections
   - [ ] All landmarks from plan Section 2 are present in HTML

2. TOKEN COMPLIANCE
   - Scan CSS for raw hex values: /#[0-9A-Fa-f]{3,6}/
   - Scan CSS for raw px values outside approved contexts
   - Calculate: var() / (var() + raw) >= 80%
   - If < 80%: replace raw values with tokens from tokens.css

3. CPL VERIFICATION (at 1440px viewport)
   - Formula: (container-content-width) / (font-size-px) / 0.6 ≈ CPL
   - Example: 896px / 16px / 0.6 = 93 CPL (FAIL if > 80)
   - Adjust font-size or padding to achieve 45-80 CPL target

If ANY check fails, DO NOT write file. Fix the issue first.
```

**Expected impact:**
- Eliminates 2 of 3 formal defects (missing footer, token compliance)
- Reduces CPL violations (builder has formula to verify)
- Prevents WOULD-NOT-SHIP output (structural completeness catches footer)
- Builds confidence in one-shot output (no rebuild cycles)

**Confidence:** HIGH. This is pure process improvement requiring zero new capability.

---

### 2. Specify Transitions, Not Just Padding (DESIGN)

**What:** In planning phase, specify section GAPS (transitions between sections) not just section PADDING (internal breathing), with explicit gap types (BRIDGE/BREATHING/SHIFT) and size variation requirement.

**Why this is high leverage:**
- Fixes 2 moderate failures: #5 (metronomic rhythm), #11 (no composed transitions)
- Improves perceptual quality significantly ("musical rhythm" vs "mechanical spacing")
- Easy to implement (just add TRANSITION TABLE to plan Section 3)
- Content-driven (gaps encode semantic relationships between sections)

**Implementation:**
Add to planning skill Phase 1 (MECHANISM JUSTIFICATION), after mechanism selection:

```markdown
SECTION 4: TRANSITION TABLE

For each section-to-section boundary, specify the GAP (space between sections) and TYPE:

| Transition | Type | Gap Size | Rationale |
|------------|------|----------|-----------|
| Overview → Architecture | BRIDGE | 80px | Shift from sparse orientation to dense technical — large gap signals cognitive shift |
| Architecture → Installation | BREATHING | 48px | Both technical sections, maintain proximity for flow |
| Installation → Security | BREATHING | 48px | Procedural to reference, smaller gap maintains continuity |

GAP TYPES:
- BRIDGE: Large gap (64-96px) for major density shifts or topic changes
- BREATHING: Medium gap (40-56px) for maintaining proximity between related sections
- SHIFT: Varied gap (32-80px range) for emphasis or rhythm variation

REQUIREMENTS:
- Use at least 2 distinct gap sizes across all transitions
- Not allowed: All gaps the same size (creates mechanical rhythm)
- At least 1 BRIDGE transition (for major shifts)
```

**Expected impact:**
- Creates "musical rhythm" instead of "metronomic spacing"
- Transitions feel DESIGNED instead of "just empty space"
- Perceptual segmentation strengthens (gaps encode meaning)
- Eliminates PA-41 finding ("pattern repeats without variation")

**Confidence:** HIGH. This is pure specification improvement with clear implementation path.

---

### 3. Use Opus for Building, Not Just Planning (PROCESS + SKILL)

**What:** Switch builder model from Sonnet to Opus. Currently: Opus plans, Sonnet builds. Ceiling: Opus plans AND builds.

**Why this is high leverage:**
- Addresses 2 major SKILL failures: #4 (professionally stiff), #14 (specs not felt through)
- Opus has stronger compositional capability (shown in Track 2 creative work)
- Tests whether model capability affects "feeling through" vs "applying correctly"
- Minimal cost increase (Opus build ~10-15 min vs Sonnet ~8-10 min)

**Implementation:**
In Ceiling experiment setup, specify:
```
BUILDER MODEL: claude-opus-4-6 (not claude-sonnet-4-5)

RATIONALE: Middle-tier used Sonnet builder and produced "professionally stiff" output
where specifications were applied correctly but not felt through. Ceiling tests whether
Opus builder can achieve compositional confidence, not just mechanical correctness.
```

**Expected impact:**
- If Opus builder produces MORE confident composition → validates model capability hypothesis
- If Opus builder ALSO produces "professionally stiff" → rules that model capability isn't the gap, metaphor context or iterative refinement is needed
- Either outcome is valuable data for tier model calibration

**Risks:**
- Opus may be SLOWER (longer build time)
- Opus may be MORE literal (interprets metaphor too rigidly → derivative)
- Cost increase (Opus tokens more expensive than Sonnet)

**Confidence:** MEDIUM-HIGH. Plausible that model capability affects composition quality, but untested. This is THE experiment to validate.

**Counterfactual needed:** To isolate Opus effect, should also run "Middle-tier with Opus builder" (same 12 mechanisms, same content, just swap model). Compare:
- Middle (Sonnet builder) = professionally stiff
- Middle (Opus builder) = ? (if ALSO stiff → model not the gap)
- Ceiling (Opus builder) = ? (if confident → metaphor enables, not just model)

---

## Additional High-Impact Fixes

**4. Fresh-Eyes Novelty Evaluation (PROCESS)**
Use zero-context agent for blind novelty assessment. Fixes failure #8 (confirmation bias). Implementation: provide evaluator with 3-5 unlabeled pages, ask for similarity ranking, reveal test page after ranking.

**5. Visual Weight Distribution Requirement (DESIGN)**
Specify focal point distribution in planning ("distribute weight across top/middle/bottom thirds"). Fixes failure #6 (top-heavy weight). Implementation: add to Appendix A or planning skill Phase 1.

**6. Heading Spacing Binary Check (PROCESS)**
Make heading spacing ratio a PROGRAMMATIC check, not judgment. Fixes failure #9 (spacing ratio violation). Implementation: add to Phase 3 programmatic audit, measure computed margin-top/bottom for all headings.

---

## Meta-Observations

### The Compliance Paradox

Middle-tier achieved SUCCESS by hitting all thresholds, yet shipped output the perceptual auditor said "YES WITH RESERVATIONS" and noted feels like "rules rather than feeling the page." We're measuring COMPLIANCE (did you cross thresholds?) but the quality gap is COMPOSITION (did you compose confidently?).

**Implications:**
- Our SUCCESS criteria are necessary but not sufficient
- Crossing thresholds ≠ great output (just non-broken output)
- Need qualitative dimension beyond binary pass/fail

**Question for Wave 2:** Should PA-05 require MARGIN above threshold, not just pass? E.g., PA-05b must be >= 2.2x (not 2.0x exactly) to pass?

### The Zero-Margin Problem

PA-05b passed at exactly 2.0x. PA-05d passed by ESTIMATION not measurement. These are technically passes but with zero confidence margin. A rounding error away from failure.

**Implications:**
- "Technically passes" is treated as equivalent to "clearly passes"
- Future experiments citing this as precedent will normalize marginal passes
- Quality drift accumulates (each marginal pass becomes the new baseline)

**Question for Wave 2:** Should we require MARGIN OF SAFETY for all thresholds? Internal target > external threshold?

### The Skill vs Rules Limit

Failures #4 and #14 (professionally stiff, specs not felt) are SKILL failures — the builder can execute rules but not compose confidently. Rules create COMPLIANCE. Metaphor enables COMPOSITION.

**Implications:**
- Middle-tier demonstrates the LIMIT of specification-driven building
- Lookup (content → mechanism) produces correct-but-mechanical output
- Ceiling tests whether Derivation (metaphor → spatial expression) enables feeling-through

**Question for Ceiling:** If Ceiling ALSO feels "professionally stiff," what does that tell us? That metaphor creates DERIVATIVE copying (worse than mechanical correctness)? That we need iterative refinement, not just metaphor context?

---

## Recommendations for Ceiling Tier

### Must-Implement (prevent critical failures):
1. ✅ Builder self-check phase (structural completeness + token compliance + CPL)
2. ✅ Transition specification (gap types + size variation requirement)
3. ✅ Opus builder model (test capability hypothesis)

### Should-Implement (prevent moderate failures):
4. ✅ Fresh-eyes novelty evaluation (blind protocol)
5. ✅ Visual weight distribution requirement (focal points across scroll)
6. ✅ Heading spacing binary check (programmatic measurement)

### Nice-to-Have (polish opportunities):
7. Visual drama requirement (>= 3 moments across top/middle/bottom)
8. Table column width guidelines (prevent text compression)
9. Metadata size minimum (relative to body text)

### Open Questions (need Wave 2 data):
- Does Opus builder solve "professionally stiff" or is that a metaphor/iteration issue?
- Should thresholds require margin-of-safety (internal target > external requirement)?
- Can we measure "felt through" vs "applied correctly" programmatically, or is it always qualitative?
- Is Middle-tier's mechanical correctness BETTER than Ceiling's potential derivative copying?

---

## Conclusion

The Middle-tier experiment succeeded by crossing thresholds but revealed the LIMIT of specification-driven building. Every mechanism was deployed correctly. The page still feels "professionally stiff." The gap is COMPOSITION, not COMPLIANCE.

**The highest-leverage fixes:**
1. Builder self-check phase (prevents WOULD-NOT-SHIP output)
2. Transition specification (creates musical rhythm)
3. Opus builder model (tests capability hypothesis)

**The hardest problem:** "Specifications applied not felt through" is a SKILL failure. Rules can't fix it. The question is whether metaphor enables composition (Ceiling test) or whether we need iterative refinement (builder sees output, revises, improves).

**The paradox:** We're getting better at building pages that PASS (hit thresholds) but not pages we're PROUD of (compositional confidence). The verdict system validates compliance. The perceptual auditor sees the gap.

**For Ceiling:** Implement the top 3 fixes. Measure whether Opus + metaphor achieves "felt through" or produces derivative copying. That result determines whether Ceiling tier works or needs fundamental redesign.

The Middle tier works for COMPLIANCE. Whether it works for CONFIDENCE remains unproven.
