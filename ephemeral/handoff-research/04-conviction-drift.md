# 04: Conviction Drift Analysis

**Analyst:** conviction-drift-researcher (Opus 4.6)
**Date:** 2026-02-20
**Question:** Do conviction statements actually drive CSS decisions, or are they written once and forgotten?
**Verdict:** THE CONVICTION MECHANISM IS STRUCTURALLY UNCHECKED AND THE EVIDENCE SHOWS IT DRIFTS.

---

## 1. What the Builder Is Supposed to Write

The conviction statement is defined in three places:

### 1A. Conventions Brief (Section "CONVICTION CARD", line 478)

The builder writes this in `_build-log.md` BEFORE any CSS:

```
CONVICTION STATEMENT

Content: [filename]
Zones: [number and names]
Organizing principle: [one sentence -- what concept organizes the page]
Coherence direction: [one word -- deepening, opening, focusing, resolving, ...]
Metaphor: [name and one-sentence structural connection to content]

I commit to:
- Making every zone boundary shift >= 3 channels in the [direction] direction
- Sustaining multi-coherence at EVERY boundary, not just bookends
- Placing at least one designed moment below the midpoint
- Stopping at the midpoint to render, scroll, and assess
- Logging every override and 3+ deliberate mechanism absences
- Answering the 5 questions honestly before submitting
```

The stated purpose: "This anchors your compositional memory for the duration of the build. When you are deep in CSS at Section 9 and have forgotten why you chose this structure, scroll back to your conviction statement."

### 1B. /build-page SKILL.md (Section 3, line 101)

The builder process specifies: "Phase B: Plan. Write conviction statement, transition table, and fractal echo table in build log BEFORE any CSS."

### 1C. Builder Anchors from TC Skill (Section 8 of TC Brief)

The TC analyst derives 3 page-specific non-negotiable guardrails:

```
1. [e.g., "The geological descent arc must be visible in background darkening
    from Zone 1 to Zone 4"]
2. [e.g., "Zone boundaries must shift >=3 CSS channels simultaneously"]
3. [e.g., "The bedrock zone must be the densest section, not the emptiest"]
```

These anchors are described as "the builder's non-negotiable guardrails for THIS page."

### Summary of Design Intent

The conviction mechanism has three layers:
1. **Conviction Card** (conventions brief) -- generic commitments every builder makes
2. **Conviction Statement** (build log) -- page-specific organizing principle + metaphor
3. **Builder Anchors** (TC brief) -- 3 testable guardrails from the TC analyst

The theory: these three layers form a "compositional memory" that prevents drift during long builds. The builder writes them early, re-reads them during fix cycles, and uses them as decision anchors when deep in CSS.

---

## 2. Behavioral Coupling: Does Anything VERIFY Conviction-CSS Alignment?

This is the critical question. The answer is: **almost nothing.**

### 2A. What the Orchestrator Checks

The /build-page orchestrator (SKILL.md Section 4) runs 16+ programmatic gates. None of them reference the conviction statement. The gates check:

- SC-01: Container width (940-960px)
- SC-09: Background delta (>= 15 RGB between adjacent zones)
- SC-11: Typography zones (display-body delta >= 10px)
- SC-13: Multi-coherence (>= 3 channels shift at boundary)
- etc.

These gates check CSS VALUES against THRESHOLDS. They do not check CSS values against the builder's STATED INTENT. If the conviction says "My composition deepens through geological strata" and the CSS produces uniform 16px typography everywhere, no gate fails. The gates verify that minimums are met, not that the conviction was honored.

### 2B. What the Deliverable Gates Check

DG-1 through DG-4 check that the build log EXISTS with the right STRUCTURE:
- DG-1: Fractal echo table exists with 5 rows
- DG-4: Transition table satisfies 5 sub-checks (zone count, bg deltas, mechanisms, transitions, grid layouts)

These check the PLAN artifacts, not whether the PLAN matches the OUTPUT. A builder who writes a beautiful transition table and then ignores it entirely would still pass DG-4, because DG-4 checks the table's CONTENT (are the planned values reasonable?) not its CORRESPONDENCE to CSS (did you actually implement those values?).

### 2C. What the Behavioral Gates Check

BG-1 and BG-2 check the TC brief:
- BG-1: TC brief shows evidence of Phases 0-4 execution
- BG-2: Metaphor is STRUCTURAL, not ANNOUNCED

These check the TC analyst's work, not the builder's fidelity to it.

### 2D. The Fix Cycle Reconnection

The /build-page SKILL.md Section 7.2 says: "Re-read _tc-brief.md AND your conviction statement and transition table in _build-log.md before applying fixes."

This is an INSTRUCTION to the builder, not a VERIFICATION by the orchestrator. The orchestrator sends this text to the builder agent. Whether the builder actually re-reads those files and whether re-reading them changes behavior are completely unverified. The orchestrator has no mechanism to confirm that the builder reconnected with its conviction before writing CSS fixes.

### 2E. The Gap

There is a structural gap between:
- **What is planned** (conviction statement, transition table, builder anchors)
- **What is built** (CSS in output.html)
- **What is verified** (gate thresholds)

No agent, gate, or process step checks that PLANNED VALUES match BUILT VALUES. The conviction statement exists in natural language in `_build-log.md`. The CSS exists in `output.html`. Nothing connects them.

---

## 3. What Continuation Bias Predicts

LLM builders exhibit strong continuation bias: once generating CSS, they continue in the established pattern rather than interrupting to re-read earlier context. The conventions brief acknowledges this: "Long builds drift. By Section 10, the coherence direction established at Section 1 may have faded."

The fix cycle instruction ("Re-read your conviction statement") assumes the builder will:
1. Stop generating CSS
2. Read a different file (_build-log.md)
3. Parse its own earlier conviction statement
4. Compare the conviction to the fix instructions
5. Synthesize a fix that serves both the gate failures AND the conviction
6. Resume generating CSS with the conviction re-activated

Steps 2-5 require context switching that opposes the continuation bias. The builder is in "fix mode" -- it has received specific measured failures (SC-09 FAIL at Z2->Z3, bg delta 8 RGB) and it wants to solve those failures directly. Re-reading a conviction statement about "progressive refinement through assay stages" is a cognitive detour that produces no measurable gate improvement. The builder has every incentive to skip steps 2-5 and go directly to "increase the background delta."

**Prediction:** Fix cycles will address gate failures mechanically (change the number) rather than compositionally (change the number in a way that serves the conviction). The conviction reconnection instruction is fighting the wrong battle -- it asks the builder to REMEMBER its intent when the real problem is that the builder has no INCENTIVE to honor it.

---

## 4. Builder Anchors: Are They Testable?

The TC skill (Section 8, Phase 4.5) specifies that the TC analyst writes 3 "non-negotiable guardrails." The examples given are:

1. "The geological descent arc must be visible in background darkening from Zone 1 to Zone 4"
2. "Zone boundaries must shift >=3 CSS channels simultaneously"
3. "The bedrock zone must be the densest section, not the emptiest"

### Testability Analysis

**Anchor 2 is testable.** SC-13 already verifies this. It is redundant with the existing gate system.

**Anchor 1 is partially testable.** A gate could verify that Zone 1 background is lighter than Zone 4 background. But "visible" and "arc" require perceptual judgment that a programmatic gate cannot provide. The gate could check that backgrounds DARKEN, but not that the darkening reads as "geological descent."

**Anchor 3 is partially testable.** A gate could count component types and CSS rules per zone and verify that Zone N has more than Zone 1. But "densest" is a perceptual property that depends on content weight, component variety, and spatial compression acting together -- not just a raw count.

### The Fundamental Problem

Builder anchors are SEMANTIC assertions -- they describe what the page SHOULD FEEL LIKE. The gate runner can only verify SYNTACTIC properties -- measurable CSS values. The gap between semantic intent ("deepens through strata") and syntactic measurement ("bg delta >= 15 RGB") is where conviction drift lives.

Two of the three example anchors COULD be partially verified with clever gate design, but the current /build-page SKILL.md does not implement any anchor-specific verification. The builder anchors are written by the TC analyst, read by the builder, and then never checked again by anyone.

---

## 5. Conviction-to-CSS Traceability: The Flagship Evidence

The flagship experiment provides a clean test case. The metaphor was "Assay Laboratory." The build plan (03-build-plan.md) contains an extraordinarily detailed 718-line deployment plan with per-mechanism CSS values, compositional clusters, and channel maps.

### 5A. What the Conviction Predicted

The build plan specified (among many things):
- 4 primary channels (Chromatic, Typographic, Spatial, Density) carrying the refinement arc
- Zone backgrounds progressing: warm cream -> cool white -> warm return
- Typography progression: mono-dominant (TOP) -> sans-dominant (MIDDLE) -> sans+serif (BOTTOM)
- Spacing compression: 64px -> 80px -> 48px -> 32px -> 40px -> 48px -> 64px
- Border weight gradient: 1px (raw input) -> 3px/4px (analytical core) -> 1px (refined output)

### 5B. What the CSS Actually Produced

From the PA synthesis verdict (10-SYNTHESIS-VERDICT.md):
- **Backgrounds:** "Look like a single uniform warm cream." Adjacent backgrounds differed by 1-8 RGB points -- BELOW perceptual threshold. The planned variety-to-uniformity arc was INVISIBLE.
- **Typography:** "Appears consistent across all zones." All body text was 16px/400 with letter-spacing variations in the 0.001-0.01em range (sub-perceptual). The planned mono->sans->serif progression did not manifest visually.
- **Borders:** ZERO structural borders rendered. The build plan specified 3-tier border hierarchy (1px/3px/4px). The output had none.
- **Spacing:** 6 whitespace voids of 210-276px each. The planned compression gradient (64->32->64) was replaced by uniform gaps.

### 5C. The Conviction Statement vs CSS Correspondence

| Conviction Claim | CSS Reality | Traced? |
|-----------------|------------|---------|
| "Progressive refinement from varied raw input to unified refined output" | Uniform treatment across all zones | NO |
| Background variety-to-uniformity arc (5+ distinct zone colors) | 1-8 RGB point deltas between zones (imperceptible) | NO |
| Mono->sans->serif typographic progression | Uniform 16px/400 everywhere | NO |
| Border weight gradient 1px->3px->4px | Zero borders rendered | NO |
| Spacing compression 64->32->64 | 210-276px voids | NO |
| "Assay laboratory felt through CSS alone" | "Metaphor not extractable from visual experience" (Auditor 6) | NO |

**Not a single conviction claim was traceable to the CSS output.** The conviction was detailed, specific, structurally sophisticated, and compositionally rich. The CSS was uniform, sub-perceptual, and flat. The conviction and the CSS could have been written by two different agents about two different pages.

---

## 6. Why Did This Happen? The Causal Chain

### 6A. The Builder Prompt Problem

The builder received a 75-line prompt (`builder-prompt.md`). That prompt contained:
- A "CONVICTION" section (6 lines): "You are building a warm, authoritative, unhurried page. Beauty = confident intention at every scale."
- 17 spatial rules (all binary PASS/FAIL)
- 10 soul rules (all prohibitions)
- A key tokens reference
- A "CONVICTION CLOSING" (5 lines): "The mission is beauty, not compliance."

The 718-line build plan? The builder never received it directly. The build plan was produced by a SEPARATE Planner agent. The builder received a compressed prompt where the detailed mechanism deployment plan, the per-section CSS values, the compositional clusters, the channel maps -- ALL of it -- was compressed into "You are building a warm, authoritative, unhurried page."

This is the compression funnel in action. 718 lines of compositional intelligence were reduced to 6 lines of motivational framing. The conviction statement in the builder prompt is not the same as the conviction statement the pipeline designed. It is a lossy compression that preserves the FEELING but discards the SPECIFICS.

### 6B. The Guardrail Factory Problem

The metacognitive failure analysis (06-metacognitive-failure.md) identified this precisely: "100+ agents produced a 963-line prompt containing 97 rules that tell an agent what NOT to do and almost nothing about what TO do." The guardrail-to-playbook ratio was 3.6:1. The builder knew not to use border-radius, not to use gradients, not to use cool grays. It did not know HOW to create background deltas of >= 15 RGB, HOW to deploy a 3-tier border system, or HOW to create typographic progression.

The conviction statement said WHAT to achieve. The rules said what NOT to do. Nothing said HOW to do it.

### 6C. The Verification Gap

The gate runner verified compliance with thresholds AFTER the build. But the conviction was never verified AGAINST the CSS. The builder could write "My composition deepens through strata" and produce flat CSS, and no gate would catch the contradiction. The gates only catch threshold violations (bg delta < 15), not conviction violations (planned arc not expressed).

---

## 7. The Remediation Evidence

The flagship remediation (ephemeral/flagship-remediation/) provides a second data point. A different Opus builder received detailed CSS-level fix instructions and a remediation spec.

### 7A. What the Remediation Builder Did

The builder changelog shows:
- Phase 0: Deleted 201 lines of sub-perceptual CSS (the pathological micro-typography)
- Phases 2-7: Added 311 lines of new CSS (zone backgrounds, structural borders, callouts, grids, typography zones, accessibility)
- Phase 1: 57 HTML restructuring modifications

### 7B. Did the Remediation Builder Reference the Conviction?

The builder changelog (`builder-changelog.md`, 236 lines) contains:
- Phase 0-7 technical details
- Blocking issues resolved table
- Soul compliance verification
- Summary metrics

**The conviction is never mentioned.** The word "metaphor" does not appear. "Assay" does not appear. "Strata," "refinement," "laboratory" -- none appear. The remediation builder operated as a CSS TECHNICIAN applying a SPECIFICATION, not as a compositional agent honoring a CONVICTION. And the result was measurably better than the original (PA-05 1.5/4 -> 2.5/4).

### 7C. What This Tells Us

The remediation improved the page BY IGNORING THE CONVICTION and focusing on CSS-level specifications: "Replace #FAFAFA with #FAF8F5." "Add 6 zone-specific border-top rules." "Set S9-S12 typography to 15px/1.65."

This is evidence that the conviction mechanism is not causal. The page improved when the builder was given SPECIFIC CSS VALUES rather than COMPOSITIONAL INTENT. The conviction is a planning tool, not a building tool. Once the builder enters the CSS, specific values drive quality more than compositional aspirations.

---

## 8. The Critical Question Answered

> If the builder writes "My composition deepens vertically through strata" but produces uniform 16px/400 typography everywhere, is the conviction statement a CAUSE of the failure or just an unchecked artifact? What mechanism FORCES the builder to align CSS with conviction?

**The conviction statement is neither a cause of the failure nor a checked constraint. It is an unchecked artifact.**

No mechanism forces alignment. The conviction exists in `_build-log.md`. The CSS exists in `output.html`. Nothing in the /build-page pipeline compares one to the other. The conviction was written, the CSS was written, and they diverged without detection.

The conviction is not a CAUSE of the failure because the builder prompt's conviction was already compressed to meaninglessness (6 lines of "warm, authoritative, unhurried" from 718 lines of specific CSS values). The real cause is the compression funnel that destroys compositional specificity between planning and building.

The conviction is an ARTIFACT because it sits in the build log serving no downstream function. No gate reads it. No auditor compares it to CSS. No fix cycle verifier checks whether fixes honor it. It is documentation of intent that nobody consults.

---

## 9. What Would Fix This

### 9A. Conviction-CSS Alignment Gate (Structural Fix)

Add a new gate that reads both `_build-log.md` and `output.html`, then verifies:
- Each zone named in the conviction maps to a zone in the HTML
- The coherence direction claimed matches the measured channel shifts (if "DEEPENING," backgrounds should darken, spacing should compress)
- The organizing principle has at least one CSS property that changes progressively across zones

This would require a semantic gate -- one that interprets natural language from the build log and compares it to measured CSS values. Current gates are purely syntactic.

### 9B. Builder Anchors as Gate Inputs (Incremental Fix)

Convert the TC analyst's 3 builder anchors from prose into machine-verifiable assertions:
- Instead of: "The geological descent must be visible in background darkening"
- Write: "Zone 1 bg R-channel > Zone 4 bg R-channel by >= 20 points"

Then add these as custom gates that the gate runner checks. The TC brief output format (Phase 4.5 Section 8) would need to include both the prose anchor AND a CSS assertion.

### 9C. Conviction in the Fix Loop (Process Fix)

Instead of instructing the builder to "re-read your conviction," the orchestrator should:
1. Extract the conviction statement from `_build-log.md`
2. Include it literally in the fix instructions
3. For each failed gate, append: "How does fixing this gate serve your conviction: [quoted conviction]?"

This forces the builder to see the conviction in the context of each fix, rather than hoping the builder will voluntarily context-switch.

### 9D. Recipe Over Conviction (Paradigm Fix)

The Middle-tier experiment succeeded (PA-05 4/4) with a 100-line RECIPE that contained specific CSS values per zone. No conviction statement was needed because the builder had SPECIFIC VALUES to implement, not ASPIRATIONS to honor.

The lesson: conviction statements are a symptom of under-specification. If the builder receives "Zone 3: background #F0EBE3, padding 48px, border-left 3px, font-size 16px, letter-spacing 0.03em," no conviction is needed. The builder implements the recipe. The conviction is needed only when the builder must DERIVE CSS values from prose intent -- and that derivation is where drift occurs.

The strongest fix is not to improve the conviction mechanism but to eliminate the need for it by providing builders with specific CSS values rather than compositional aspirations. The /build-page pipeline's conventions brief already moves in this direction (Section 4 includes a concrete 4-zone DEEPENING example with specific CSS values). The fix is to make the TC brief's BUILD RECIPE (Section 6) so specific that the conviction becomes documentation rather than navigation.

---

## 10. Summary Findings

| Finding | Evidence |
|---------|----------|
| Conviction is written early, never checked later | Zero gates compare conviction to CSS output |
| Builder anchors are semantic, not syntactic | 2/3 example anchors cannot be fully programmatically verified |
| Fix cycle reconnection is an unverified instruction | Orchestrator tells builder to re-read; cannot confirm compliance |
| Flagship conviction had ZERO traceability to CSS | 6/6 conviction claims absent from visual output |
| Remediation succeeded by ignoring conviction | Builder changelog never mentions metaphor; PA-05 improved +1.0 |
| Conviction fills a gap caused by compression | 718-line plan compressed to 6-line aspiration = drift guaranteed |
| Recipe beats conviction | Middle-tier (100-line recipe, PA-05 4/4) > Flagship (6-line conviction, PA-05 1.5/4) |
| Continuation bias opposes conviction reconnection | Builders in fix mode optimize for gate thresholds, not compositional intent |

### The Honest Assessment

The conviction mechanism is well-designed in theory and broken in practice. It assumes that natural-language intent, written once, will persist through 1000+ lines of CSS generation and survive fix cycles. It does not. The mechanism lacks enforcement, lacks verification, and competes with measurable gate thresholds for the builder's attention. When the choice is "honor my conviction" vs "pass SC-09," the builder passes SC-09.

The conviction is not useless -- it serves as a planning tool that helps the TC analyst and planner think about coherence. But by the time it reaches the builder, it has been compressed beyond actionability. And once the builder starts writing CSS, the conviction fades from working memory with no mechanism to restore it.

**The conviction statement is a planning artifact that masquerades as a building tool.** It should be treated as what it is: input to the plan, not a constraint on the build. The constraint on the build should be the RECIPE -- specific CSS values derived from the conviction, not the conviction itself.

---

## Source Files Consulted

- `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md` (486 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/conventions-brief.md` (584 lines)
- `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md` (Phase 4.5, Section 8)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-experiment/builder-prompt.md` (71 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-experiment/03-build-plan.md` (718 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-experiment/02-metaphor-derivation.md` (691 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-experiment/_perceptual-audit/10-SYNTHESIS-VERDICT.md` (149 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-remediation/builder-changelog.md` (236 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-remediation/FINAL-VERDICT.md` (306 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-audit/06-metacognitive-failure.md` (metacognitive failure analysis)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-audit/03-guardrail-vs-playbook.md` (guardrail classification)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-validation/18-conviction-accuracy.md` (conviction accuracy audit)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/flagship-preparation/_checkpoint/conviction-verification.md` (conviction verification matrix)
