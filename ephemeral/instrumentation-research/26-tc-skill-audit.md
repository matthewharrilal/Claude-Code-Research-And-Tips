# Tension-Composition Skill Audit

**Date:** 2026-02-27
**Scope:** Full audit of `~/.claude/skills/tension-composition/SKILL.md` (1,649 lines)
**Method:** Apply the same evidence standards (PROVEN/ASSUMED/INHERITED) used across the instrumentation research

---

## A. GROUND TRUTHS — What This Skill Treats as Unquestionable

| # | Ground Truth | Evidence Status | Assessment |
|---|-------------|----------------|------------|
| GT-01 | KortAI Personality Profile (75% austere, 95% angular, etc.) | **INVENTED** | 8 percentages with zero methodology. How was "75% austere" measured? Against what scale? These are vibes codified as numbers. No calibration, no inter-rater agreement, no definition of what 74% vs 76% would mean. |
| GT-02 | The Soul Test (5 binary questions, lines 242-246) | **AESTHETIC-SHAPED** | "Does this look like Bootstrap? -> FAIL" encodes anti-Bootstrap bias, not quality. "Does this look like a magazine?" privileges print editorial over digital-native design. These are taste gates, not quality gates. |
| GT-03 | Incompatible Metaphor Families (organic, liquid, atmospheric, textile, musical) | **ASSUMED from soul constraints** | Bans organic because border-radius:0. But border-radius:0 itself contradicts its source (Sanrok uses 4-6px, per S-01 in file 18). The incompatibility is real GIVEN the soul constraints, but the constraints themselves are aesthetic preferences (file 18 Tier 1). A chain of assumptions. |
| GT-04 | Mechanism count targets (16-18 natural landing, 14+ for flagship) | **DISPROVEN by own data** | Middle Tier: 12 mechanisms, PA-05 4/4. Flagship: 16-18 target, PA-05 1.5/4. The skill acknowledges this ("count is a PROXY, not a target" line 78) but then re-asserts "natural landing is 16-18" at lines 806, 1071, 1077. The hedging language is contradicted by the repeated targets. |
| GT-05 | Domain Search Menu (10 angular/flat-compatible domains) | **SYSTEM-SPECIFIC** | Every domain in the menu was selected for compatibility with border-radius:0 and box-shadow:none. The menu IS the soul constraints expressed as metaphor categories. Remove the soul constraints and the menu changes entirely (organic, flowing, atmospheric all become viable). |
| GT-06 | 6 Exhaustive CSS Channels (bg, border, typography, spacing, layout, accent) | **REASONABLE but incomplete** | Missing: animation/motion, scroll behavior, hover/focus states, opacity, transforms. These are legitimate CSS channels excluded because the soul constraints prohibit most of them. "Exhaustive" means "exhaustive within this aesthetic." |
| GT-07 | Container width 940-960px non-negotiable | **CORRELATED, not causal** | File 22 (adversarial) classifies this as "ASSUMED — correlation not causation." 4/5 Phase D pages violated it, but they also violated other constraints. The specific range (why 940 not 920?) traces to one reference site. |
| GT-08 | 5-scale fractal coherence requirement | **THEORETICAL** | No page has ever been evaluated for fractal coherence at all 5 scales by an independent instrument. The concept comes from Alexander/Salingaros (legitimate theory) but the APPLICATION (Navigation + Page + Section + Component + Character must all echo the SAME pattern) is this system's interpretation, never validated. |
| GT-09 | Richness formula (Opposition x Overlap x Width) | **INVENTED, partially validated** | The multiplicative formula was created by this system. It correctly predicted that Playbook UNDERSTAND (richness 12) produced better visual output than BECOME+RECONCILE (richness 27) — but this is evidence AGAINST the formula, which the skill acknowledged by adding the Perceptual Risk cap (lines 329-336). The formula predicts depth, not quality. |
| GT-10 | Multi-coherence (>=3 channels shift at zone boundaries) | **ASSUMED** | The principle that coordinated channel shifts produce perceptible boundaries is reasonable. The specific threshold (>=3) is arbitrary. Why not 2? Why not 4? No experiment has tested different thresholds. |

---

## B. BAKED-IN BIASES — Where KortAI's Personality Masquerades as Good Design

**1. The Personality Profile IS the skill.** Lines 228-238 define an 8-axis personality that determines which tensions are "strong" vs "cosmetic." RECONCILE is flagged as "richest, highest potential" (line 172) because it opposes austerity. But if the system were 75% WARM instead of 75% austere, RECONCILE would produce cosmetic tension. The skill's creative space is shaped entirely by the personality percentages — change the personality, change every derivation.

**2. The Tension Landscape is pre-computed for KortAI.** Lines 340-354 list which tensions are "strongest" and which are "zero tension" against KortAI specifically. This is not a general-purpose tension derivation tool; it's a lookup table for one design system. The "zero tension" category (hierarchy, clarity, step-by-step) means ANY content that primarily needs clarity skips the pipeline entirely. This biases the pipeline toward conflict-heavy content and away from straightforward content that might benefit from compositional thinking.

**3. The Addition Test privileges complexity over simplicity.** Lines 248-254: if needs can be met by existing components, no metaphor is needed. This sounds efficient but it means the pipeline only engages for DIFFICULT content. Simple content gets assembly-mode defaults. But simple content can also benefit from compositional thought — a well-designed FAQ page with thoughtful rhythm is richer than a default-styled one. The pipeline's value model equates "complexity of tension" with "worth designing."

**4. Search heuristics embed angular bias.** Line 433: "ANGULARITY is hardest — immediately eliminates organic/biological, liquid/fluid, atmospheric, textile, botanical." This constraint eliminates 5 of the richest metaphor families in design. The skill treats this as a productive constraint; it's actually the soul lock on border-radius:0 propagating into creative space.

---

## C. SOUL CONSTRAINT CONTAMINATION — How Deep Does It Go?

**Depth: TOTAL.** The soul constraints are not a separate concern bolted onto the skill — they are LOAD-BEARING STRUCTURE woven through every phase.

| Phase | Contamination Point | Impact |
|-------|-------------------|--------|
| Phase 2 | Side B constraints are "LOCKED" (line 217) | border-radius:0 and box-shadow:none define the entire tension space. Change them and every derivation changes. |
| Phase 3 | Domain Search Menu (lines 441-456) | All 10 domains selected for angular/flat compatibility. Remove soul constraints, add 5+ new domain families. |
| Phase 3 | Incompatible Metaphor Families (lines 480-488) | 5 families banned because of soul constraints that contradict their own source material. |
| Phase 3.5 | Binary rejection check R6 (line 668) | "Soul is non-negotiable" — but file 18 proved 8/22 soul constraints are aesthetic preferences. |
| Phase 4 | CSS channel definition (lines 1244-1255) | "Exhaustive" channels exclude animation, opacity, transforms — all banned by soul lock. |
| Phase 4.0 | Perception thresholds (lines 864-877) | "Warm palette note: R>=G>=B, effective threshold is 1.3x" — warm palette assumed as given. |
| Phase 4.2 | Translation Grammar (lines 1172-1243) | Every lookup table entry uses KortAI-specific CSS values (e.g., `#FEF9F5`, `#1A1A1A`). |
| Phase 4.3 | Coherence rules C-3, C-5 (lines 1343-1360) | Role-to-font mapping and accent-to-semantic mapping are KortAI vocabulary, not universal. |

If the soul constraints were revised (e.g., allowing 4-6px border-radius per the actual Sanrok reference), the following would need rewriting: the personality profile, the tension landscape, the domain search menu, the incompatible families list, the binary rejection checks, the CSS channel definition, and all coherence rules. Approximately **40% of the skill's content** is soul-constraint-dependent.

---

## D. THE TENSION MODEL ITSELF — Universal vs System-Specific

### Genuinely Universal (would work for ANY design system)

1. **Multi-axis questioning (Phase 1).** The FEEL/UNDERSTAND/DO/BECOME framework + 5 extended + 5 conditional axes is a legitimate content analysis tool. It asks what readers NEED before deciding what to BUILD. This is sound methodology independent of any design system.

2. **The tension derivation concept (Phase 2 core).** The idea that composition lives in the gap between what content needs and what a system provides is genuinely insightful. The Addition Test, BECAUSE test, and SUBSTITUTION test are good diagnostics for whether a metaphor is earned vs forced.

3. **Structural isomorphism (Phase 3).** Mapping metaphor properties to CSS properties through structural parallels is a legitimate design methodology. It prevents decoration-only metaphors.

4. **Perceptual risk assessment (Step 3.5E-F).** The insight that structural richness does not predict visual quality is PROVEN by own data and is the skill's most valuable late addition.

5. **The construction-not-discovery framing (lines 6-23).** The opening principle — "you are CONSTRUCTING, not DISCOVERING" — is epistemologically honest and genuinely useful for any creative pipeline.

### System-Specific (KortAI only, would need complete replacement)

1. Personality Profile (8 axes with percentages)
2. Soul Test (5 questions)
3. Domain Search Menu (10 angular-compatible domains)
4. Incompatible Metaphor Families (5 banned families)
5. All Translation Grammar tables (CSS values)
6. Coherence rules with specific font/color mappings
7. Container width range (940-960px)
8. Warm palette perception adjustments

**Ratio: ~40% universal methodology, ~60% KortAI-specific implementation.**

---

## E. ACTUAL USAGE — Is This Skill Invoked?

**The /build-page pipeline does NOT invoke the tension-composition skill.** Evidence:

1. Zero references to "tension-composition" in `/build-page/SKILL.md` (grep confirmed).
2. The TC brief is generated from a TEMPLATE (`artifact-tc-brief-template.md`, 223 lines) that is filled in by the Brief Assembler agent, NOT by running the tension-composition pipeline.
3. The template hardcodes soul descriptions as verbatim prose (lines 17-36 of the template), the personality profile, and perception thresholds.

**What this means:** The tension-composition skill's 1,649 lines of methodology are NEVER executed during production builds. The Brief Assembler reads a template and fills in blanks. The multi-axis questioning, tension derivation, metaphor scoring, perceptual risk assessment — none of it runs. The skill is a DESIGN DOCUMENT that informed the template's structure, but it is not executed code.

**The skill CAN be invoked directly** via `/tension-composition` (standalone mode, Phase 5 in STANDALONE-APPENDIX.md). But this is a separate path from the pipeline that produces pages.

**Verdict: The skill is documentation masquerading as executable methodology.** Its ideas propagated into the TC brief template (a static artifact), but the skill itself sits unused during builds.

---

## F. WHAT IT SHOULD BECOME — Options

### Option 1: Honest Split — Universal Methodology + System Config

Separate the 40% universal methodology into a framework document and the 60% system-specific content into a configuration file. The framework teaches multi-axis questioning, tension derivation, and metaphor scoring. The config provides KortAI-specific values (personality, banned families, CSS channels). A different design system could swap the config and keep the framework.

**Tradeoff:** More files, more maintenance. But honest about what's universal vs what's taste.

### Option 2: Delete and Preserve Ideas in the TC Brief Template

The skill is not invoked during builds. The TC brief template IS the executed form. Preserve the universal ideas (multi-axis questioning, perceptual risk) as comments/documentation in the template. Delete the 1,649-line skill file.

**Tradeoff:** Loses the full methodology. Gains honesty — the template IS the product.

### Option 3: Make It Actually Executable

Rewrite as a shorter skill (~300-400 lines) that agents ACTUALLY run. Strip system-specific values into a config that the skill reads at runtime. Add a `--system` parameter so it works for any design system.

**Tradeoff:** Significant rewrite. But transforms dead documentation into a live tool.

### Option 4: Reduce to Reference Card

Compress the universal methodology to ~50 lines (multi-axis questioning protocol + tension diagnostic tests + metaphor scoring rubric). Everything else is either system-specific (move to config) or unused (delete).

**Tradeoff:** Loses the worked examples and nuance. Gains actually being read.

---

## G. WHAT TO PRESERVE — Genuinely Valuable Intellectual Work

### MUST PRESERVE (universal methodology, high value)

1. **The 9+5 axis questioning framework** (Phase 1, lines 127-167). This is a genuine contribution to content analysis methodology. The FEEL/UNDERSTAND/DO/BECOME core with NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE extended axes, plus 5 structural triggers, is thoughtfully designed and content-type-aware.

2. **The Addition Test** (lines 248-254). Simple, binary, cuts through false tension. "Can you fulfill the need by placing existing components?" — YES means no metaphor needed. Genuinely useful.

3. **The BECAUSE and SUBSTITUTION tests** (lines 294-296). Prevent manufactured tension. "The reader needs X BECAUSE [specific content property]" forces grounding. The substitution test ("Replace content with different topic — does same metaphor still work?") catches generic coupling.

4. **Perceptual risk and cost assessments** (Steps 3.5E-F, lines 539-616). The insight that structural richness != visual quality, validated by the Boris test data and ceiling experiment. This is PROVEN methodology.

5. **The construction-not-discovery epistemological frame** (lines 6-23). Prevents the discovery bias that leads to "the content IS geological" rather than "I am reading it as geological."

6. **The 6-criterion metaphor quality rubric** (Step 3.5G, lines 618-670). Especially the Interpretive Distance criterion — the finding that zero-distance metaphors are labels, not bridges.

### PRESERVE WITH CAVEATS (valuable but contaminated)

7. **Richness formula** — useful for ranking tensions but explicitly NOT for ranking metaphors (the skill's own correction at line 329). Preserve the corrected version only.

8. **Composite scoring protocol** — the A-F scoring dimensions are a thorough evaluation framework, but the thresholds (>=4 isomorphism, >=N-1 resolution) are untested.

### LET GO (system-specific, non-transferable)

9. Personality Profile percentages — invented, no methodology
10. Soul Test questions — taste gates
11. Domain Search Menu — angular-bias lookup table
12. Incompatible Metaphor Families — soul-constraint downstream
13. All CSS-specific translation grammar — KortAI vocabulary
14. Container width enforcement — belongs in build-page, not TC derivation
15. Warm palette perception adjustments — system-specific

---

## [INDEPENDENT CHECK] CROSS-VALIDATION WITH FRESH-EYES EVALUATION

An independent Opus agent with zero prior analysis context evaluated the TC skill against its own criteria. Key divergences:

**[VERIFIED] The skill is not invoked during production builds.** Independent confirms: "The pipeline replaced TC's 5-phase process with two dedicated agents: Content Analyst + Brief Assembler." Zero Skill tool invocations across all builds. This is factual.

**[NUANCED] "0/10 ground truths proven" understates TC's genuine contributions.** Independent rates TC as MIXED (not BROKEN): "Phases 0-3.5 are genuinely insightful methodology." Specifically validated:
- The FEEL/UNDERSTAND/DO/BECOME axis framework is "a real contribution -- it systematizes content analysis that designers do intuitively"
- The Addition Test is "sharp and useful"
- The "construction, not discovery" framing is "philosophically honest and practically important"
- Perceptual Risk assessment "captures a genuine insight: structural richness does NOT predict visual quality"
- The 6-criterion Metaphor Quality Rubric is "well-designed"

This audit's ground truth framework requires empirical validation (PROVEN = tested against external data). By that standard, 0/10 is correct. But the standard itself may be overly narrow for design methodology. Multi-axis questioning can be "genuinely insightful" (independent assessment) without being empirically "proven" in the way a perceptual threshold can be. The standard conflates methodological quality with empirical validation. Not all valuable methodology requires A/B testing to be defensible.

**[NUANCED] "~40% contaminated" framing vs "intentional design choices."** This audit frames soul constraints as "contamination" of the TC skill (~40% of content). Independent says: "The soul constraints are GENERATIVE. border-radius:0, box-shadow:none, no gradients -- these force designers to use spacing, borders, and backgrounds for hierarchy. The constraints create a distinctive visual identity." The distinction: contamination implies the soul constraints DAMAGE the skill. An alternative framing is that the soul constraints SCOPE the skill to one design system. The methodology (multi-axis questioning, tension derivation) IS universal. The application (which tensions are "strongest," which families are "incompatible") IS system-specific. Whether scoping = contamination depends on whether you view the skill as claiming universality (it doesn't explicitly) or as being purpose-built for KortAI (which it is).

**[NUANCED] Mechanism count targets are disproven as TARGETS but valid as OBSERVATIONS.** This audit correctly notes the Middle (12 mechanisms, PA-05 4/4) vs Flagship (18 mechanisms, PA-05 1.5/4) contradiction. But the skill itself hedges: "count is a PROXY, not a target" (line 78). The repeated targets (lines 806, 1071, 1077) are inconsistent with the hedge -- this is a genuine internal contradiction. However, the observation that "natural landing is 16-18" for the TC methodology (i.e., when you run the full axis questioning and tension derivation, you tend to arrive at 16-18 mechanisms) may be valid as a descriptive observation even though it fails as a quality predictor. The audit correctly identifies the contradiction but should acknowledge the hedge exists.

**[OVERLOOKED] TC skill contributed ideas that the pipeline still uses.** Independent notes: "The skills still provide value as REFERENCE DOCUMENTS for understanding WHY the pipeline does what it does. The TC skill's provenance notes (which experiments failed and why) are the institutional memory." The pipeline's Content Analyst + Brief Assembler INHERITED TC's concepts (metaphor derivation, content tensions, zone-based composition) even though they execute them differently. TC is the intellectual ancestor of the pipeline's creative methodology -- the compressed pipeline versions may work BECAUSE TC's fuller methodology informed their design.

## SUMMARY

The tension-composition skill is 1,649 lines of which:
- ~40% is genuinely universal methodology (multi-axis questioning, tension diagnostics, perceptual risk) -- independently validated as "genuinely insightful"
- ~60% is KortAI-specific implementation that scopes the universal methodology to one design system, dependent on soul constraints that are intentional design choices (independently rated as "generative") but shown to contradict their own source material in specific instances (border-radius, box-shadow)
- 0% is actually invoked during production builds (the TC brief template replaced it) -- though its concepts propagated into the pipeline's creative methodology

The skill's ground truths include 10 items of which 0 meet this audit's PROVEN standard (empirically validated against external data). However, multiple items are independently assessed as "genuinely insightful methodology" -- they are methodologically sound without being empirically tested. 3 items are internally contradicted by the system's own data. The KortAI personality profile (GT-01) remains the most load-bearing unquestioned assumption.

The soul constraint dependency is deep (~40% of content). If soul constraints were revised per the actual Sanrok evidence, significant rewriting would be required. However, framing this as "contamination" rather than "scoping" may overstate the problem -- the skill was always purpose-built for KortAI, not claiming universality.

The most honest path forward: separate the universal methodology (~400 lines, independently validated as strong) from the system-specific implementation (label clearly, don't delete), acknowledge that the TC brief template is the actual executed product, and either make the skill genuinely executable or reduce it to a reference card.
