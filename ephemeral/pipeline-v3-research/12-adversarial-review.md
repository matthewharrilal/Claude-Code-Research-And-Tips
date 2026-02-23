# Pipeline v3 Adversarial Review

**Reviewer Role:** Red Team (Opus-level adversarial)
**Reports Reviewed:** 01 through 11 (all)
**Date:** 2026-02-22

---

## Verdict: PROCEED WITH CAUTION

Pipeline v3 is a genuine architectural improvement over v2's 963-line guardrail factory. The core thesis — activation over transmission, recipe over checklist — is supported by the Middle experiment (PA-05 4/4) and partially by Gas Town (PA-05 3.5/4). However, the design contains 4 critical failures that must be fixed before execution, 7 significant risks that should be addressed, and a pervasive honesty problem where the architecture's actual complexity is systematically understated. The N=4 data foundation means every prediction in these reports is a hypothesis, not a finding.

---

## CF: Critical Failures (MUST FIX)

### CF-01: The Line Count Shell Game

**The claim:** Pipeline v3 replaces a 963-line prompt with a "73-line minimal constraint set" (Report 02), delivering "93-108 lines" to the builder (Report 01).

**The reality:** The builder's actual input stack, assembled from across all 11 reports:

| Component | Lines | Source |
|-----------|-------|--------|
| Identity constraints (Layer 1) | 15 | Report 02 |
| Perception thresholds (Layer 2) | 8 | Report 02 |
| Scaffolding framework (Layer 3) | 50 | Report 02 |
| Dispositional instructions | 40-113 | Report 03 (D-01 through D-08) |
| TC brief (routing) | 35-42 | Report 05 |
| Value tables | ~550 | Report 11 |
| tokens.css | 174 | design-system file |
| components.css | ~1,196 | design-system file |
| mechanism-catalog.md | ~300+ | design-system file |
| CD-006 exemplar HTML | ~1,200+ | design-system file |
| Content source file | variable | Report 05 (builder reads directly) |
| Conviction artifact (passes 2-3) | 20-30 | Report 09 |
| **TOTAL** | **~3,590-3,700+** | |

Report 08 acknowledges "~550 lines" of builder input but achieves this by counting only the constraint set + disposition + TC brief, while treating the reference files as "available but not pushed." This is an accounting trick. If the builder needs to read those files to build well — and every report assumes it will — they are input.

**v3 actual builder input (~3,600 lines) vs v2 builder input (~2,800 lines): v3 is LARGER, not smaller.**

The simplification is real in one dimension: the constraint language is cleaner and the recipe format is better. But the total cognitive load on the builder has not decreased. It has been redistributed from explicit rules to implicit reference materials, which is arguably harder to comply with because there is no checklist to follow.

**Fix required:** Honest accounting. State the full input stack in every architecture document. If the claim is "better-organized input" rather than "less input," say that.

### CF-02: The Compositional Critic Is Pure Fantasy

Report 09 introduces the Compositional Critic as the linchpin of the 3-pass iteration architecture. This agent:
- Sees only screenshots (no code)
- Provides "artistic feedback" following 3 Laws
- Never names a CSS property
- Never references a threshold
- Suggests "quality not action"

**Zero evidence this works.** Not one experiment has tested whether:
1. An Opus agent can provide useful compositional feedback from screenshots alone
2. A second Opus builder can interpret vague artistic feedback and translate it to CSS improvements
3. The 3 Laws actually produce better outcomes than direct CSS feedback
4. Fresh instances (no code context) can meaningfully improve on prior work

The Critic's 3 Laws are designed to prevent the failure mode where explicit instructions suppress creativity. But they may create a worse failure mode: feedback so abstract it changes nothing. "The rhythm feels interrupted between sections 3 and 4" is useless if the builder doesn't know whether to adjust padding, font-size, background color, or content ordering.

Report 09 estimates the 3-pass architecture raises PA-05 >=3.5 probability from 30-50% to 60-75%. This is a confidence interval pulled from thin air. There is no data. The entire iteration architecture is a thought experiment presented as engineering.

**Fix required:** Run ONE experiment with the Compositional Critic before building the iteration pipeline. A 3-hour smoke test: take Gas Town output, have a Critic evaluate it, have a fresh builder attempt Pass 2 from Critic feedback alone. Measure whether the output improves, stays flat, or degrades.

### CF-03: Suppressor Removal Is Not Monotonically Positive

Report 04 identifies 20 suppressors and recommends removing all of them. The crossover curve (Figure 2) claims quality improves monotonically as suppressors are removed. This is unsupported.

**The dangerous assumption:** That every constraint identified as a "suppressor" is purely harmful. Some candidates for load-bearing suppressors:

1. **S-09 (stacking gap <=96px):** Report 04 removes this. But S-09 stacking was THE dominant perceptual failure in the Flagship experiment — 210-276px whitespace voids that 9/9 auditors flagged. Removing the explicit cap and relying on the builder's "negative space disposition" (D-06) is exactly the kind of move that sounds good in theory and produces blank pages in practice.

2. **S-14 (mechanism count minimums):** "Sample 2-4 mechanisms" was correctly identified as the #1 suppressor. But the fix in v3 is to remove ALL mechanism counting and trust disposition. The Middle experiment produced 12 mechanisms without being told to — but that's N=1. Gas Town produced fewer. What if the builder's natural output on some content types is 3 mechanisms?

3. **S-07 (letter-spacing bounds):** Report 04 removes this. The Flagship experiment spent 22% of its CSS budget on imperceptible micro-typography (letter-spacing 0.001-0.01em). Without ANY letter-spacing guidance, what prevents this from recurring?

**The N=4 confound:** We cannot separate "suppressor removal helped" from "recipe format helped" from "Opus builder helped" from "content was easier." The suppressor thesis is confounded with at least 3 other variables.

Report 04 acknowledges this with a phased removal plan (Phase 1: remove 8 clear suppressors, Phase 2: test, etc.) but Report 01 and Report 09 assume ALL suppressors are already removed. The phased plan was abandoned before it was tested.

**Fix required:** Phase the suppressor removal. Keep S-09 stacking protection (with higher threshold, e.g., <=150px total gap). Keep letter-spacing minimum (>=0.5px delta). Test removal of the clear suppressors first (mechanism count, judgment language) before removing perception safeguards.

### CF-04: The N=4 Problem Undermines Every Prediction

Every quantitative claim in these 11 reports derives from 4 data points:

| Experiment | PA-05 | Builder | Format | Content | Suppressors |
|-----------|-------|---------|--------|---------|-------------|
| Middle | 4/4 | Sonnet | Recipe (100 lines) | Steve Yegge | Partial removal |
| Flagship | 1.5/4 | Sonnet | Checklist (71 lines) | Intentionality research | Full load (20) |
| Remediation | 2.5/4 | Opus | CSS-only remediation | Same as Flagship | N/A (fix, not build) |
| Gas Town | 3.5/4 | Sonnet | v2 brief + PA | Steve Yegge (different piece) | Partial removal |

**Confounded variables (at minimum 7):**
1. Builder model (Sonnet vs Opus)
2. Prompt format (recipe vs checklist vs brief)
3. Content type (narrative vs academic)
4. Prompt volume (71 vs 100 vs 530+ lines)
5. Task framing (build vs fix)
6. Suppressor load (0 vs partial vs full)
7. Team topology (flat vs hierarchical)

**You cannot isolate any single variable's contribution with N=4 and 7 confounds.** Report 10 acknowledges this and proposes a 44-hour experiment protocol to begin addressing it. But Reports 01-09 and 11 present their predictions AS IF the confounds are resolved. They are not.

Specific unsupported claims:
- "PA-05 3.5-4.0/4 predicted" (Report 02) — based on what? N=1 (Middle) at 4/4 with completely different conditions
- "Worst case 2.5-3.0" (Report 02) — the actual worst case in our data is 1.5/4
- "60-75% probability PA-05 >=3.5 with 3 passes" (Report 09) — invented number
- "Quality = Agent Capability × Content Affordance × Specification Fidelity" (Report 01) — unfalsifiable equation with no defined units

**Fix required:** Stop presenting predictions as findings. Every quantitative claim should carry an explicit confidence qualifier and the N=4 caveat. Run Report 10's Stage 0 (smoke test) before committing to the full architecture.

---

## SR: Significant Risks (SHOULD FIX)

### SR-01: Opus Dependency Creates Single Point of Failure

Report 09's iteration architecture requires 14 Opus agents:
- 2 content analysts (could be Sonnet)
- 1 brief assembler (could be Sonnet)
- 3 builders (Opus required, 1 per pass)
- 3 critics (Opus required)
- 2 gate agents (could be Sonnet)
- 3 PA auditors minimum (Opus required per PA protocol)

**Cost per build:** At current Opus pricing, 14 Opus agent invocations over 80-145 minutes represents a substantial token cost. Report 09 doesn't estimate this, which is itself a red flag.

**Model availability risk:** If Opus is unavailable, rate-limited, or deprecated, the entire pipeline stops. No fallback is tested.

**Sonnet fallback:** Report 03 provides a Sonnet variant of the dispositional layer (130 lines, more procedural). But no other report addresses Sonnet substitution. What happens to the Compositional Critic with Sonnet? To the 3-pass architecture? The retrospective noted "Sonnet complies meticulously; Opus complies AND creates beyond constraints." If that's true, 3 passes of Sonnet compliance won't converge on compositional quality — it'll converge on meticulous mediocrity.

**Fix:** Design explicit Sonnet fallback paths for all 14 agent slots. Test the Smoke Test (Report 10, Stage 0) with both all-Opus and all-Sonnet to establish the model contribution.

### SR-02: Iteration Cost Is Underestimated

Report 09 estimates 80-145 minutes wall clock for the 3-pass architecture. Let me do the math:

**Per-pass breakdown (from Report 09):**
- Pass 1: 20-35 min (structural skeleton)
- Critic 1: 5-10 min
- Pass 2: 15-25 min (atmospheric enrichment)
- Critic 2: 5-10 min
- Pass 3: 10-20 min (terminal craft)
- Gates + PA: 15-25 min

**Total range:** 70-125 min (Report 09 says 80-145, already inconsistent with its own sub-estimates)

**What's missing from the estimate:**
- Content analysis phase: 15-25 min (Report 01)
- Brief assembly: 10-15 min (Report 01)
- Failure recovery: unknown (what if a pass fails gates?)
- PA Mode 4 if used: 30-45 min (from actual Mode 4 PA timings)

**Realistic total:** 95-210 min per page, assuming zero failures. With Mode 4 PA, 125-255 min.

**Token cost per page:** 3 Opus builder passes + 2 Opus critic passes + content analysis + brief assembly + gates + PA = approximately 8-14 Opus invocations. At ~$15-75 per Opus conversation (depending on context size), a single page build costs $120-1,050 in API fees.

**Comparison to v2:** v2 builds a page in ~35 min (Middle experiment) with 6-8 agents (mix of Sonnet and Opus). Cost is roughly $30-150 per page. v3 is 3-7x more expensive.

**Fix:** Provide honest cost estimates. Consider a 1-pass default with iteration only when Pass 1 fails gates. The "always iterate 3 times" design is wasteful when the builder may nail it on Pass 1 (as happened in Middle: PA-05 4/4, single pass, 35 min).

### SR-03: "Activation Not Transmission" Is Unfalsifiable

Report 08 defines the core v3 philosophy: don't transmit rules, activate capabilities. The distinction:
- **Transmission:** "Use >=3 distinct spacing values" (compliance target)
- **Activation:** "Each section breathes at its own rhythm" (compositional disposition)

The problem: how do you know activation worked vs the builder just being good? If the builder produces PA-05 4/4, was that because:
a) The dispositional language activated compositional cognition?
b) Opus is inherently capable and any reasonable prompt would work?
c) The content was easy to compose with?
d) The value tables provided enough concrete CSS to paint by numbers?

Report 08 proposes 5 activation tests (UDC >=5, OC >=1, MPS >=0.15, CQS, PA-05 >=3.5). But these measure outcomes, not mechanisms. A builder could score UDC >=5 (5+ unprompted decisions) because Opus always makes unprompted decisions, not because D-01 through D-08 activated anything.

**The real risk:** If activation is unfalsifiable, the dispositional layer becomes cargo cult. You can't iterate on what you can't measure. If a build fails, you don't know whether to adjust the dispositions, the constraints, the value tables, or the content routing.

**Fix:** Design a falsification test. Run the same content with: (A) full v3 with dispositions, (B) v3 constraints + value tables WITHOUT dispositions, (C) dispositions only WITHOUT constraints. If (A) ≈ (B), dispositions aren't contributing. If (A) ≈ (C), constraints aren't contributing. This is Report 10's variable isolation (Stage 3) but it's positioned as optional. It should be mandatory.

### SR-04: The Value Tables (Report 11) Are a Stealth Checklist

Report 11 provides ~550 lines of "positive scaffolding" — CSS value tables organized by typography, color, spacing, borders, and layout. Example:

```
Zone 1 (Hero): font-size 2.8-3.6rem, line-height 1.05-1.15, letter-spacing -0.02 to -0.01em
Zone 2 (Body): font-size 1.05-1.15rem, line-height 1.65-1.75, letter-spacing 0.01 to 0.02em
```

This is exactly the kind of prescriptive specification that Reports 01-08 argue against. The value tables tell the builder WHAT TO DO at a CSS-property level. They provide specific numeric ranges for specific properties in specific zones.

**The contradiction:** Report 03 says "never tell the builder what CSS to write." Report 11 provides 550 lines of CSS to write. Report 08 says "activate, don't transmit." Report 11 transmits exact value ranges.

The reports try to resolve this by calling the value tables "vocabulary not rules" and "scaffolding not constraints." But functionally, a builder reading "Zone 1 font-size: 2.8-3.6rem" will use a font-size in that range. That's compliance, not composition. The value tables are a checklist wearing a recipe costume.

**Possible defense:** The value tables provide vocabulary (what's available) while dispositions provide intent (when and why to use it). This is a reasonable argument. But it means the builder's actual cognitive task is: read 550 lines of values, read 113 lines of dispositions, integrate them on the fly. This is MORE complex than reading a 963-line prompt that combines both.

**Fix:** Acknowledge the tension honestly. If value tables are essential (and they probably are — the Flagship failed partly because builders had no concrete CSS to work with), then the architecture is "better-organized complexity" not "reduced complexity." Stop claiming simplification.

### SR-05: Container Width Is the Canary

Container width (940-960px) has been the #1 failure mode across ALL experiments:
- Phase D: 4/5 pages violated it
- Flagship: violated (per Mode 4 PA, likely 2160px not 960px)
- CD-006: compliant (but CD-006 was hand-crafted)
- Middle: compliant
- Gas Town: compliant

**v3's container width protection:** Line I-01 in the constraint set: "Container width: 940–960px." That's it. One line.

In v2, container width had:
- Explicit constraint in the prompt
- Gate runner programmatic check
- Remediation step if violated

**Report 02 predicts the constraint set alone is sufficient.** History says otherwise. Container width is the highest-probability single-point failure. If v3's first build violates container width, the entire "activation over transmission" thesis takes a credibility hit.

**Fix:** Keep the programmatic gate runner check for container width. This is not a suppressor — it's a mechanical verification of a binary constraint. The gate runner is 100% compatible with the activation philosophy.

### SR-06: Fresh Instances Per Pass Lose Compositional Context

Report 09 requires fresh Opus instances for each pass to prevent "continuation bias." Each builder gets:
- The constraint set
- Disposition layer
- Value tables
- TC brief
- A "conviction artifact" (~20-30 lines) from the previous pass

**The conviction artifact is the ONLY bridge between passes.** 20-30 lines to capture the entire compositional logic of a 1,000+ line HTML file.

**The risk:** If the conviction artifact fails to capture the key compositional decisions (metaphor choice, rhythm pattern, density arc), Pass 2 may destroy what Pass 1 created. Fresh instances have no memory of WHY decisions were made — only WHAT the artifact tells them.

The Middle experiment achieved PA-05 4/4 in a SINGLE pass. The Flagship failed in a SINGLE pass. If a single pass can achieve 4/4 or 1.5/4, the variable isn't iteration — it's the FIRST pass quality. Three passes of a bad foundation may produce three versions of the same bad foundation.

**Fix:** Test single-pass v3 FIRST. Only add iteration if single-pass v3 fails to reach PA-05 3.0. The iteration architecture adds complexity that may not be needed.

### SR-07: Report 06's Missing Concepts Are Unaddressed

Report 06 identifies 6 missing concepts from the pipeline:
1. Temporal Composition
2. Reader Model
3. Emotional Arc
4. Anti-Patterns
5. Cross-Page Coherence
6. Revision Quality

Report 07 (Blind Spots) partially addresses these, recommending additions to the spec. But none of Reports 08-11 actually incorporate these recommendations. The missing concepts remain missing.

**The risk:** The v3 architecture is designed around the 13 irreducible concepts but ignores 6 concepts that Report 06 itself identified as absent. If Temporal Composition and Emotional Arc are genuinely irreducible (and Report 07 rates Emotional Arc as HIGH priority), their absence is a design gap, not a feature.

**Fix:** Either incorporate the missing concepts into the dispositional layer (as 2-3 additional dispositions) or explicitly justify their exclusion with evidence.

---

## DT: Design Tensions

### DT-01: Activation vs Accountability

The activation model (dispositions, world-description format, compositional freedom) makes it harder to diagnose failures. When the builder produces PA-05 2.0, what do you change? With a checklist, you find the unchecked items. With dispositions, you guess.

Report 09 partially addresses this with the Compositional Critic, but the Critic is itself untested (CF-02). There's no equivalent of "which rule was violated?" in the activation model.

### DT-02: Simplicity vs Completeness

The 73-line constraint set (Report 02) achieves simplicity by pushing complexity elsewhere: into value tables (550 lines), reference files (1,500+ lines), disposition layer (113 lines), and the orchestrator (200 lines). Total system complexity is not reduced — it's distributed.

Distributed complexity can be better (each component is simpler) or worse (interactions between components create emergent failures). Reports 01-11 assume better. No evidence supports this assumption.

### DT-03: Creative Freedom vs Consistency

v3 gives the builder 80% creative authority (Report 02, Section 3.3). This means 80% of the output is unconstrained. For any given page, the builder's creative choices will produce a unique result. For a design SYSTEM (multiple pages with shared identity), this is a risk: two pages built by v3 may look nothing alike.

Report 05's content-form router partially addresses this (routing similar content to similar treatments), but the builder still has 80% discretion on HOW to implement the treatment.

### DT-04: Recipe Format vs Novel Content

The Middle experiment (PA-05 4/4) used the recipe format on Steve Yegge content (narrative, personality-driven, structurally varied). The recipe format may work BECAUSE Yegge content has natural compositional affordances — clear sections, tonal shifts, rhetorical devices.

What about content with low compositional affordance? A data table. A changelog. A specification document. The recipe format assumes content HAS a "natural rhythm" to read (D-01). What if it doesn't?

Report 05's content-form router classifies content into archetypes, but the routing is untested. The claim that "the builder will read the content and naturally find its form" is another activation assumption that may not hold for low-affordance content.

### DT-05: 3-Pass Improvement vs 3-Pass Drift

Report 09 assumes each pass improves quality: Pass 1 (structure) → Pass 2 (atmosphere) → Pass 3 (craft). But each pass uses a fresh instance reading the previous pass's output plus a 20-30 line conviction artifact.

**Possible failure mode:** Each fresh instance imposes its own compositional preferences on the existing artifact. Pass 2 may "correct" Pass 1's intentional choices. Pass 3 may flatten Pass 2's atmospheric additions. Without continuity of intent, iteration becomes drift.

The conviction artifact is supposed to prevent this, but 20-30 lines cannot capture the full compositional logic of a 1,000+ line HTML page. The artifact captures WHAT was built, not the dozens of micro-decisions about WHY each element was styled as it was.

---

## CA: Complexity Audit

### Is v3 Actually Simpler?

**v2 (current):**
- Master execution prompt: 530-963 lines (varies by version)
- Orchestrator: ~200 lines
- Gate runner: ~100 lines
- Reference files: tokens.css (174), components.css (~1,196), mechanism-catalog.md (~300+)
- Builder sees: 71-530 lines of prompt + reference files
- Total system: ~2,500-3,000 lines
- Agents: 6-19 (varies by experiment)

**v3 (proposed):**
- Constraint set: 73 lines
- Disposition layer: 113 lines (Opus) / 130 lines (Sonnet)
- TC brief: ~35-42 lines
- Value tables: ~550 lines
- Orchestrator: ~200 lines
- Gate runner: retained
- Reference files: same as v2 (tokens.css, components.css, mechanism-catalog.md)
- Conviction artifacts: 20-30 lines × 2 (between passes)
- Critic prompts: ~50-100 lines (estimated, not specified)
- Builder sees: ~770+ lines of new spec + reference files
- Total system: ~3,000-3,500 lines
- Agents: 14 Opus (Report 09)

**Complexity comparison:**

| Metric | v2 | v3 | Delta |
|--------|-----|-----|-------|
| Builder-facing lines | 71-530 | ~770 | +45% to +985% |
| Total system lines | 2,500-3,000 | 3,000-3,500 | +17% |
| Agent count | 6-19 | 14 | comparable |
| Opus agent count | 1-3 | 14 | +367% to +1300% |
| Wall clock time | 35-150 min | 80-210 min | +40% to +500% |
| New untested components | 0 | 3 (Critic, conviction artifact, disposition layer) | +3 |

**v3 is not simpler. It is differently complex.** The constraint language is cleaner. The builder-facing format is more compositional. But the total system is larger, more expensive, and contains 3 untested components.

### Token Economics

Rough estimation per page build:

| Component | v2 Tokens | v3 Tokens |
|-----------|-----------|-----------|
| Content analysis | 50K | 50K |
| Brief assembly | 30K | 30K |
| Builder pass(es) | 100K (×1) | 100K (×3) |
| Critic | 0 | 50K (×2) |
| Gates | 20K | 20K |
| PA | 100K | 100K |
| **Total** | **~300K** | **~600K** |

**v3 costs approximately 2x in tokens per page**, assuming 3 passes. With Mode 4 PA (9 auditors), both costs increase by ~400K, making v3 ~1.5x v2 with Mode 4.

---

## WBF: What Would Break First

Ordered by probability of failure if v3 ran tomorrow:

### 1. Container Width (P=0.4)
Historical failure rate: 3/5 experiments (60%). v3 protection: one line in constraint set ("I-01: Container width 940-960px"). No programmatic verification in the builder's pipeline flow (gates run AFTER the build). If the builder's natural tendency is wider layouts (as demonstrated repeatedly), this single line won't override it.

### 2. Whitespace Voids (P=0.35)
S-09 stacking gap is removed in v3. D-06 (Negative Space disposition) is the replacement. D-06 says: "Negative space should feel taut, not empty." This is a disposition, not a constraint. The Flagship produced 210-276px voids with explicit stacking limits in place. Without them, the probability of whitespace voids increases.

### 3. Conviction Artifact Failure (P=0.3)
The 20-30 line conviction artifact must transfer the entire compositional logic between passes. If it fails to capture the structural metaphor, density arc, or rhythm pattern, Pass 2 will build a new page, not improve the existing one. This is a novel component with zero testing.

### 4. Compositional Critic Silence (P=0.25)
The Critic sees screenshots and must provide artistic feedback without naming CSS properties. Possible failure modes: Critic provides feedback too vague to act on; Critic provides feedback that contradicts the constraint set; Critic provides no feedback (everything looks fine to it) and Pass 2/3 add nothing.

### 5. Imperceptible Micro-Typography Recurrence (P=0.2)
The Flagship spent 22% of CSS on letter-spacing 0.001-0.01em (imperceptible). v3 removes letter-spacing bounds. Value tables provide ranges (0.01-0.02em for body) but don't prohibit micro-typography. Without explicit "letter-spacing delta must be >=0.5px to be perceptible" guidance, the failure mode may recur.

### 6. Content-Form Mismatch (P=0.15)
The TC brief router is simplified to ~35 lines. If it misroutes content (e.g., treats analytical content as narrative), the builder's compositional approach will fight the content's natural structure. This failure would be subtle and hard to diagnose.

---

## REC: Recommendations

### REC-01: Run the Smoke Test Before Building Anything (BLOCKING)
Report 10's Stage 0 (3 hours) should be MANDATORY before any architecture implementation. Take the current constraint set (73 lines) + disposition layer (113 lines) + value tables (550 lines), give them to a single Opus builder with Gas Town content, and measure the result. This costs 3 hours and answers the most important question: does the core v3 spec work at all?

### REC-02: Start with Single-Pass, Add Iteration Only If Needed
The 3-pass architecture (Report 09) adds massive complexity and cost. The Middle experiment achieved 4/4 in a single pass. Build v3 as single-pass first. If Pass 1 consistently hits PA-05 >=3.0, iteration is unnecessary. If it consistently misses, add iteration with a tested Compositional Critic.

### REC-03: Keep Programmatic Gates for Binary Constraints
Container width, stacking gap, letter-spacing minimum, background delta minimum — these are binary, measurable, and historically violated. Programmatic verification is NOT a suppressor. It's quality assurance. Keep the gate runner for all perception threshold constraints (Layer 2 of Report 02). This is fully compatible with the activation philosophy: activate compositional freedom, verify physical constraints.

### REC-04: Phase Suppressor Removal
Remove the clear suppressors first (mechanism count, judgment language, technique counting). Keep perception safeguards (S-09 stacking, letter-spacing bounds, background delta) until the smoke test demonstrates they're unnecessary. The phased plan in Report 04 was correct — don't abandon it.

### REC-05: Honest Complexity Accounting
Stop claiming v3 is "73 lines." State the full builder input: ~770 lines of new spec + ~1,670 lines of reference files = ~2,440 lines. This is comparable to v2, not dramatically less. The improvement is in ORGANIZATION and FORMAT, not in VOLUME. Saying so honestly actually strengthens the case: "same information, better organized for compositional cognition" is a defensible claim.

### REC-06: Design the Falsification Test (Report 10, Stage 3) as Mandatory
The activation vs transmission question MUST be answered before scaling v3. Run the same content with: (A) full v3, (B) constraints + values WITHOUT dispositions, (C) dispositions WITHOUT constraints. If dispositions don't contribute measurable quality, the entire dispositional layer is dead weight. This is a 12-hour investment that determines whether a core architectural component works.

### REC-07: Budget for Failure Recovery
No report addresses what happens when a build fails gates after 3 passes. Does it rebuild from scratch? Does a human intervene? Does the pipeline escalate to a more expensive process? The implicit assumption is "3 passes always work," but 60-75% success probability (Report 09) means 25-40% of builds will fail after consuming full 3-pass costs. Define the failure path.

---

## Appendix A: Contradiction Register

| Reports | Contradiction | Severity |
|---------|--------------|----------|
| 01 vs 02 | Builder input: "93-108 lines" vs "73 lines" | Medium |
| 01 vs 09 | Architecture: "single pass with self-evaluation" vs "3 passes with critic" | High |
| 01 vs 09 | Agent count: "12-15 total" vs "14 Opus for iteration alone" | High |
| 02 vs 08 | Builder input: "73 lines" vs "~550 lines" | High |
| 03 vs 11 | Philosophy: "never tell builder what CSS to write" vs 550 lines of CSS values | High |
| 04 vs 01,09 | Suppressor removal: "phased implementation" vs "all removed in architecture" | Medium |
| 08 vs 11 | Model: "activate, don't transmit" vs transmit 550 lines of value tables | High |
| 09 vs self | Wall clock: "80-145 min" vs sub-estimates sum to 70-125 min | Low |

## Appendix B: Assumptions Requiring Validation

1. Opus builder in COMPOSING mode produces PA-05 >=3.5 (N=0 direct tests with v3 spec)
2. Dispositional language activates different cognitive mode than procedural language (untested)
3. Compositional Critic feedback improves builder output (untested)
4. Conviction artifact preserves compositional intent across passes (untested)
5. Value tables serve as vocabulary not checklist (philosophical claim, not measured)
6. Content-form router correctly classifies content archetypes (untested)
7. 80% creative authority produces consistent design system pages (untested)
8. Fresh instances prevent continuation bias without losing compositional context (untested)
9. 3 passes converge on quality rather than drift (untested)
10. Suppressor removal is monotonically positive (N=4, confounded)

**Count of untested assumptions: 9/10.** One assumption (suppressor removal direction) has partial support from N=4 confounded data. The rest are hypotheses.

---

*End of adversarial review. This document attacks the architecture to strengthen it. The v3 direction is correct — activation over transmission, recipe over checklist, compositional freedom over guardrail accumulation. But the specific implementation has critical gaps (line count honesty, untested components, suppressor removal phasing, N=4 foundation) that must be addressed before execution.*
