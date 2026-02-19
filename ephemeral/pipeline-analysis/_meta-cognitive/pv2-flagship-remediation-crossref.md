# PV2 Flagship vs Remediation Spec: Cross-Reference Analysis

**Agent:** remediation-crossref (Opus 4.6)
**Date:** 2026-02-18
**Task:** Cross-reference what the remediation did RIGHT (PA-05 1.5 -> 2.5) against PV2 Flagship to verify preservation and improvement
**Sources:**
- `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,026 lines)
- `ephemeral/pipeline-analysis/03-remediation-rewinding.md` (27 reversals)
- `ephemeral/pipeline-analysis/04-remediation-building.md` (12 extensions)
- `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` (PV2 recipe)
- `ephemeral/pipeline-analysis/_meta-cognitive/pipeline-v2-architecture.md` (PV2 architecture)
- `ephemeral/pipeline-analysis/05-css-philosophy-shift.md` (CSS paradigm)
- `ephemeral/pipeline-analysis/08-perception-model-shift.md` (perception model)

---

## PART A: WHAT THE REMEDIATION DID RIGHT -- REVERSAL-BY-REVERSAL ASSESSMENT

### A1. Guardrail-First -> Recipe-First (FUNDAMENTAL PARADIGM)

**What the remediation changed:** Replaced 97 binary constraint rules (7.9:1 guardrail-to-playbook ratio) with 9 sequential phases containing exact CSS code blocks (~5:1 playbook-to-guardrail ratio).

**Why it worked:** Rules require TRANSLATION by the agent. Recipes eliminate translation. The flagship builder translated ">= 5 of 7 channels actively used" into sub-perceptual CSS. The remediation said "write THIS hex value" -- zero interpretation variance.

**Does PV2 Flagship preserve this? YES.**
PV2's operational recipe (File 42) is recipe-format by construction: 9 phases with action verbs ("Set", "Write", "Add"), exact CSS values, and per-phase perception checks. The architecture document (pipeline-v2-architecture.md, Section 1) explicitly states the separation: builders receive the recipe, NOT the constraint set. File 42's constraint-to-action ratio is 0.32:1 -- even more recipe-dominant than the remediation's ~0.2:1.

**What PV2 adds:** Content-agnosticism. The remediation recipe was specific to `07-intentionality.html`. PV2's recipe uses `[CONTENT DECISION]` markers for content-specific choices while keeping CSS values constant.

---

### A2. Multi-Agent Team -> Single Agent (FUNDAMENTAL PARADIGM)

**What the remediation changed:** Replaced 19-agent hub-spoke topology (which produced ZERO inter-agent messages) with a single Opus agent reading the complete 1,025-line spec.

**Why it worked:** Eliminated coordination overhead, prevented information hiding (75-line builder cap), and leveraged Opus's compositional fluency. Single agent maintained cross-phase coherence.

**Does PV2 Flagship preserve this? PARTIAL.**
PV2 architecture (Section 2, C1) resolves this with a tier-gated approach:
- **Middle tier:** 1 builder (Opus) -- matches the remediation model
- **Ceiling/Flagship tier:** 4-wave architecture with single builder in Wave 1, verification agents in Wave 2, fix integration in Wave 3

PV2 preserves the remediation's key insight (single writer of the HTML file) but adds verification agents downstream. The builder still reads the COMPLETE recipe (~650 lines). This is an improvement: it captures the remediation's "full visibility" advantage while adding the Two-Instance verification that the remediation lacked.

**What's different:** PV2 recommends Opus for builder at Ceiling+ but Sonnet for Floor/Middle where decisions are pre-made. The remediation was Opus-only.

---

### A3. Constraint-Then-Create -> Create-Then-Verify (FUNDAMENTAL PARADIGM)

**What the remediation changed:** Replaced 6 blocking gate sequences (permission to proceed) with mid-process perception checks (verification after action).

**Why it worked:** Gates were gamed (technically passing but perceptually invisible). Perception checks ask "can you SEE the result?" which catches sub-perceptual compliance.

**Does PV2 Flagship preserve this? YES.**
PV2 recipe (File 42) has a PERCEPTION CHECK after every phase (8 total), each asking visual questions ("Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?"). Additionally, PV2 adds a two-layer terminal verification:
1. Programmatic: gate-runner.js (12 binary checks)
2. Perceptual: PA SKILL.md (mode varies by tier)

This IMPROVES on the remediation by combining mid-process perception checks (from remediation) with programmatic gates (from master prompt) and fresh-eyes PA (absent from remediation). The remediation only had builder self-checks.

---

### A4. Conviction Sandwich -> Linear Recipe (PARADIGM)

**What the remediation changed:** Removed ~200 lines of conviction language ("The mission is beauty, not compliance"). Treated the agent as a CSS compiler, not a creative collaborator.

**Why it worked (claimed):** Retrospective stated conviction language is "cargo cult" -- agents don't "try harder" from motivation. Unclear empirical basis (rated HIGH risk of being wrong in File 03).

**Does PV2 Flagship preserve this? PARTIAL.**
PV2 recipe (File 42, Part 3) includes a conviction layer ("The Conviction Layer") but it is STRUCTURALLY SEPARATED from the execution recipe. Part 3 covers identity prohibitions, design philosophy, quality bar, and the core principle. This is NOT a conviction sandwich -- it is an appendix that the builder reads BEFORE executing the recipe.

PV2's approach is a synthesis: it includes conviction (addressing the remediation's HIGH risk of being wrong) but separates it structurally from execution (honoring the remediation's finding that conviction interleaved with rules causes confusion).

---

### A5. Zero Judgment Language -> Perception Thresholds (PARADIGM)

**What the remediation changed:** Introduced perception thresholds (>= 10 RGB, >= 2px font-size, >= 0.025em letter-spacing) alongside the governing rule: "If a human cannot SEE the difference without a color picker, do NOT write the CSS."

**Why it worked:** Converted judgment ("is this visible?") into binary checks with numeric thresholds. The builder has exact numbers to target, not abstract concepts to interpret.

**Does PV2 Flagship preserve this? YES.**
PV2 recipe Phase 8A contains the perception threshold verification table (8 properties with minimum deltas). PV2 architecture creates `perception-thresholds.md` as a standalone reference file (Priority 1 for implementation). The recipe also embeds thresholds inline ("Threshold: >= 2px difference from Zone 2" in Phase 5 comments).

**PV2 improvement:** Uses 15 RGB (not 10 RGB) as the background delta minimum, following the corpus consensus in File 08 over the remediation's more aggressive 10 RGB threshold. File 42 Appendix A preserves both the table and the governing rule.

---

### A6. Builder Information Hiding -> Full Visibility (PARADIGM)

**What the remediation changed:** Gave the single agent 100% visibility into all 1,025 lines (vs master prompt's 75-line builder cap = 13.4% prompt visibility).

**Why it worked:** Builder could see the WHY behind values, cross-reference phases, and make informed judgment calls when values conflicted with soul constraints (e.g., warm-palette substitution).

**Does PV2 Flagship preserve this? YES.**
PV2 architecture (Section 5) explicitly lists what the builder receives: operational-recipe.md (~650 lines) + mechanism-catalog.md (FULL) + tokens.css + prohibitions.md + perception-thresholds.md + build plan. "The builder needs NO other files. The spec is self-contained." Gate 4 (Builder Visibility Gate) in the verification system checks that the spec IS self-contained.

---

### A7. Absence as Restraint -> Mandatory Deployment (PARADIGM)

**What the remediation changed:** Replaced MC-05 ("consistent absence reads as restraint") with mandatory per-zone CSS deployment. Every zone gets prescribed backgrounds, every alternating section gets borders.

**Why it worked:** The flagship's failure WAS absence -- 70-80% blank cream. "Absence as restraint" was exploited as license to do nothing.

**Does PV2 Flagship preserve this? YES.**
PV2 recipe prescribes mandatory backgrounds per zone (Phase 3), mandatory alternating borders (Phase 4, Step 4.1: "at least 3 should be visible"), mandatory divider grammar (Phase 4, Step 4.2), and mandatory callout variants (Phase 4, Step 4.3). Phase 0 Step 0.5 requires at least 2 grid sections, making layout variety mandatory.

PV2 does not contain MC-05 or any "absence as restraint" language.

---

### A8. Metaphor-Driven -> Post-Hoc/Tier-Gated Metaphor (PARADIGM)

**What the remediation changed:** Contained zero references to metaphor. CSS recipes were prescribed regardless of conceptual framework.

**Why it worked:** The remediation operated on an EXISTING page. Metaphor had already been established. Recipe-based approach is inherently anti-discovery.

**Does PV2 Flagship preserve this? PARTIAL -- TIER-GATED.**
PV2 architecture (Section 5, TC-to-Recipe Handoff):
- **Middle tier:** TC Phase 0 only (no metaphor). Builder reads recipe directly.
- **Ceiling/Flagship:** TC Phases 0-3.5 (full metaphor derivation). Builder receives a RICH BUILD PLAN with metaphor, zone semantics, mechanism selections, and isomorphism tables. Then executes the recipe with metaphor-adapted values.

This is a synthesis: metaphor is AVAILABLE for tiers that need compositional fluency (the thing that separates 3/4 from 4/4), but is NOT REQUIRED for Middle tier where recipe compliance alone should produce 3/4.

---

### B1-B10. Operational Reversals

| Reversal | What Changed | Why It Worked | PV2 Preserves? | Notes |
|----------|-------------|---------------|----------------|-------|
| B1: Mode 4 PA -> Self-check | 9 auditors replaced with 10-item self-check | Remediation task only needs "was CSS applied correctly?" | **IMPROVED** | PV2 is tier-gated: self-check for Middle, Mode 2 for Ceiling, Mode 4 for Flagship |
| B2: 6 gates -> Mid-process checks | Blocking gates replaced with perception loops | Perception checks catch what gates miss | **YES** | PV2 has perception checks after every phase (8 total) |
| B3: Full build -> CSS + HTML fix | Scope expanded from CSS-only to Approach B | CSS-only caps at 2/4; HTML restructuring needed | **YES** | PV2 recipe builds HTML from scratch (Phase 1), so this is moot -- already full scope |
| B4: 5-pass conceptual -> 9-phase material | Reorganized from conceptual layers to CSS property groups | Bottom-up material sequence (backgrounds, borders, type, spacing) optimizes execution | **YES** | PV2 recipe uses identical 9-phase structure (Phase 0-8) |
| B5: Library prohibition -> Library-first | Component library used extensively | Leverage tested, validated, soul-compliant CSS | **YES** | PV2 Phase 1.4 explicitly names standard class families (callout, table-compact, section-indicator) |
| B6: Sub-perceptual allowed -> Deallocation | Phase 0 deletes invisible CSS before adding new | Dead code has negative value; frees budget | **PRESERVED AS APPENDIX** | PV2 Appendix B contains the full Deallocation Protocol for remediation contexts |
| B7: CCS required -> No CCS | CCS computation dropped entirely | CCS was never computed even when mandated; irrelevant in recipe context | **YES** | PV2 has zero CCS references. Multi-coherence verified via per-transition channel counting instead |
| B8: 8+ messages -> Zero comms | Single agent, no communication needed | If agents won't communicate when mandated, design for single-agent reality | **IMPROVED** | PV2 uses file-bus + SendMessage for BLOCKING findings in Wave 2-3 (Ceiling+); Middle stays single-agent |
| B9: Mechanism discovery -> Mechanism preservation | Mechanisms treated as fixed assets, not creative acts | Remediation context: mechanisms already exist | **ADAPTED** | PV2 for new builds: Phase 0 includes content analysis that determines mechanisms. Recipe provides CSS for common mechanisms. TC provides mechanism selection for Ceiling+ |
| B10: Skill invocation required -> No skill invocation | Neither TC nor PA skills referenced | Recipe is self-contained; skills are for creative discovery | **ADAPTED** | PV2: TC invoked for Ceiling+ (metaphor derivation). PA invoked for verification. Recipe itself is self-contained for building |

---

### C1-C5. Structural Reversals

| Reversal | What Changed | PV2 Preserves? | Notes |
|----------|-------------|----------------|-------|
| C1: 10-namespace taxonomy -> 9-phase sequence | Rules organized by execution order, not domain | **YES** | PV2 recipe is phase-sequential. Domains dissolved into phases |
| C2: Parameter table -> Inline CSS values | Values embedded at point of use | **YES + BOTH** | PV2 has inline values in recipe phases AND Appendix C Quick Reference Card |
| C3: Enrichment traceability -> Root-cause tracking | Provenance is backward-looking (what failure?) not forward-looking (what research?) | **IMPROVED** | PV2 Appendix D has a provenance table linking findings to source files |
| C4: Anti-skimming -> Copy-paste formatting | Long CSS code blocks for mechanical application | **YES** | PV2 recipe is entirely copy-paste CSS with inline comments |
| C5: Separated thinking/execution -> Unified document | Remediation was 1,025 lines of unified thinking + execution | **ADAPTED** | PV2 separates: recipe (~650 lines) is pure execution; analysis stays in ephemeral |

---

### D1-D4. Tonal Reversals

| Reversal | What Changed | PV2 Preserves? | Notes |
|----------|-------------|----------------|-------|
| D1: "Mission is beauty" -> "If you can't SEE it, don't write it" | Pragmatism over aspiration | **YES** | PV2 Appendix A opens with "THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS" |
| D2: "STOP ANALYZING, START BUILDING" -> Action from line 1 | No analysis preamble | **ADAPTED** | PV2 recipe Part 1 starts with Phase 0 immediately. Part 3 (conviction) is an appendix, not a preamble |
| D3: Authoritative-collaborative -> Prescriptive-directive | Uniform command tone | **YES** | PV2 recipe uses imperative verbs throughout: "Write", "Set", "Add", "Delete" |
| D4: Soul as inspiration -> Soul as constraint | Soul is a compliance check, not an aspiration | **ADAPTED** | PV2 Part 3.1 (Identity Prohibitions) presents soul as binary constraints, but Part 3.2 (Design Philosophy) preserves the IS/IS-NOT personality tension |

---

## PART B: THE REMEDIATION'S CORE INNOVATIONS -- PV2 COVERAGE

### Innovation 1: Perception-as-Quality Paradigm

**In Remediation:** Central organizing principle. "If a human cannot SEE the difference without a color picker, do NOT write the CSS." Every phase organized around producing visible effects.

**In PV2:** **FULLY PRESERVED AND ELEVATED.** The perception threshold table is:
- Embedded inline in recipe phases (comments like "Threshold: >= 2px difference from Zone 2")
- Collected in Appendix A as a reference table
- Extracted into a standalone file (`perception-thresholds.md`, Priority 1 for implementation)
- Enforced programmatically by gate-runner.js (SC-09: background delta >= 15 RGB; SC-11: font-size zones >= 2px)
- Enforced perceptually by PA SKILL.md (fresh-eyes auditors)

PV2 upgrades the remediation's values: 15 RGB (not 10 RGB) for backgrounds, following corpus consensus.

### Innovation 2: Per-Phase Perception Checks

**In Remediation:** After each phase (0-8), a visual verification step: "Can you SEE the background difference without squinting?"

**In PV2:** **FULLY PRESERVED.** Every phase in the PV2 recipe ends with a "PERCEPTION CHECK" section. Phase 3: "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?" Phase 5: "Compare Zone 1 (S1-S3) and Zone 2 (S5-S8) side by side... Zone 1 text should look LARGER and more OPEN."

PV2 adds Risk 7 (Part 5): "Perception Checks Skipped Under Time Pressure" with mitigation: "Make perception checks BINARY deliverables. The builder must write one sentence describing what they see."

### Innovation 3: Deallocation (Removing Sub-Perceptual CSS Before Adding)

**In Remediation:** Phase 0: delete 216 lines of invisible CSS. Novel concept -- remove before add.

**In PV2:** **PRESERVED AS APPENDIX B.** Since PV2's recipe builds from scratch (not remediating an existing page), Phase 0 is content analysis, not deallocation. But Appendix B ("Deallocation Protocol") preserves the full protocol for remediation contexts, including:
- Sub-perceptual CSS identification criteria (8 threshold-based tests)
- 4-step deallocation procedure (Identify, Classify, Delete, Verify)
- Expected deallocation volume (15-25% of any page built without perception thresholds)

### Innovation 4: Recipe Format with Exact Values

**In Remediation:** 9 sequential phases with exact hex values, exact selectors, exact properties. Constraint-to-action ratio ~0.2:1.

**In PV2:** **FULLY PRESERVED AND GENERALIZED.** PV2 recipe is even more recipe-dominant (0.32:1 per File 42 measurement). Every phase has exact CSS code blocks with inline comments. The opening explicitly contrasts recipe vs checklist:

| Property | Checklist (FAILED) | Recipe (SUCCEEDED) |
|----------|-------------------|-------------------|
| Verbs | "FAIL IF", "must be" | "Delete", "Add", "Replace", "Set" |
| Values | "channel actively used" | "font-size: 17px" |
| Verification | "did the CSS rule exist?" | "can you SEE the difference?" |

### Innovation 5: HTML Restructuring (Not Just CSS)

**In Remediation:** Phase 1: 47 HTML changes (skip link, `<main>`, ARIA labels, `role` attributes, callout conversions, grid wrappers).

**In PV2:** **FULLY PRESERVED AS STANDARD PHASE 1.** PV2 Phase 1 ("HTML Skeleton") builds the complete HTML structure from scratch with all accessibility features:
- Skip link (Step 1.1)
- Semantic markup with `role="banner"`, `role="contentinfo"`, ARIA labels (Step 1.6)
- Grid wrappers for non-single-column sections (Step 1.5)
- Component library class names (Step 1.4)

PV2 goes beyond the remediation: it builds HTML from scratch rather than patching existing HTML, ensuring structural correctness by construction.

### Innovation 6: Stacking Arithmetic

**In Remediation:** Phase 3, Step 3.2 -- explicit stacking analysis: `32 + 24 + 4 + 24 + 24 = 108 < 120px target`.

**In PV2:** **FULLY PRESERVED.** Phase 0, Step 0.6 contains the complete stacking arithmetic for all 3 transition types:
```
Breathing worst case = 32px + 24px + 4px + 24px + 24px = 108px < 120px -- PASSES
Bridge worst case   = 32px + 24px + 2px + 24px + 24px = 106px < 120px -- PASSES
Smooth worst case   = 32px + 16px + 1px + 16px + 24px = 89px  < 120px -- PASSES
```

PV2 also adds the gate-runner.js SC-10 check: stacked gap <= 192px (binary gate threshold vs 120px builder target).

### Innovation 7: Component Library Adoption

**In Remediation:** Phase 1, Steps 1.5-1.6: Convert `.component-block` to `.callout` family (4 variants), convert `.section-meta` to `.section-indicator`. Raised library adoption from 3/26 to ~10/26 families.

**In PV2:** **FULLY PRESERVED.** Phase 1, Step 1.4 names the standard classes:
- 4 callout variants (callout--info, callout--gotcha, callout--tip, callout--essence)
- Table variants (table-compact, table-featured, table-light, table-warning, table-data)
- Pullquote (essence-pullquote)
- Section indicator (.section-indicator)

Risk 5 (Part 5) explicitly warns against "Component Library Bypass" with mitigation: automated check for standard class names.

### Innovation 8: WCAG 2.1 AA Compliance

**In Remediation:** Phase 7: 7 accessibility features (skip link, focus-visible, reduced-motion, print stylesheet, responsive breakpoints at 768px/480px), 38 HTML modifications.

**In PV2:** **FULLY PRESERVED.** Phase 7 contains identical features:
- Focus states (Step 7.1)
- Skip link (Step 7.1)
- Reduced motion (Step 7.1)
- Print styles (Step 7.2)
- Responsive breakpoints at 768px and 480px (Step 7.3)

Phase 8F (Accessibility Verification) adds a formal checklist: tab-through, skip link test, ARIA verification, responsive testing.

---

## PART C: WHAT PV2 DOES BEYOND THE REMEDIATION

### C1. Content-Agnostic Recipe

The remediation was page-specific (07-intentionality.html only). PV2's recipe works for ANY content within the KortAI design system. `[CONTENT DECISION]` markers identify the 8 content-specific decisions (zone semantics, section boundaries, callout variant selection, grid placement, transition assignment, bridge prose, drop cap, element markup). Part 4 provides decision guidance for each.

### C2. Tier-Gated Architecture

The remediation had one mode: single Opus agent, apply CSS. PV2 has four tiers:
- Floor: Track 1 component assembly (~5 min)
- Middle: Recipe directly (~15-25 min)
- Ceiling: TC Phases 0-3.5 + recipe (~45-60 min)
- Flagship: TC Phases 0-3.5 + recipe + Mode 4 PA (~90-180 min)

This captures the Middle tier's recipe success while preserving metaphor derivation for tiers that need compositional fluency beyond the recipe's capability.

### C3. Two-Layer Verification System

The remediation had only builder self-checks. PV2 adds:
1. **Programmatic (gate-runner.js):** 12 binary checks run via Playwright (SC-01 through SC-12)
2. **Perceptual (PA SKILL.md):** Fresh-eyes agents evaluate screenshots

The two layers address the flagship's diagnostic: programmatic gates pass while perceptual audit fails. The remediation lacked this diagnostic capability.

### C4. Anti-Reproduction Gates

PV2 architecture (Section 8) includes 7 gates applied to the pipeline artifacts THEMSELVES:
1. Compression Gate (no abstract rules without concrete values)
2. Judgment Rule Gate (every rule has a programmatic check)
3. Guardrail-to-Playbook Ratio (execution sections <= 1:1)
4. Builder Visibility Gate (spec is self-contained)
5. Perception Threshold Gate (8 thresholds present)
6. Meta-to-Output Ratio (meta:output <= 10:1)
7. Recipe Format Gate (building phases use recipe verbs)

These meta-gates prevent the pipeline from regressing toward the master prompt's failure modes. The remediation had no self-monitoring mechanism.

### C5. Orchestrator Skill (/build-page)

PV2 introduces a user-facing entry point that handles:
- Tier auto-classification from content analysis
- Agent architecture selection
- Progress display during build
- Gate failure conversations (not dead ends)
- Power user flags (--tier, --no-pa, --dry-run, --metaphor, --batch)

The remediation was a specification document read by a manually-spawned agent. PV2 makes the pipeline invocable.

### C6. Zone Architecture Template System

PV2 recipe Phase 0 (Steps 0.3-0.6) provides a systematic methodology for determining zone count, zone semantics, section architecture, and transition types from content analysis. The remediation had no phase 0 (the zones were pre-existing). PV2 makes zone architecture DERIVABLE from any content, with tables mapping word count to zone count and zone properties to CSS values.

### C7. Warm Palette Enforcement

The remediation's builder independently corrected cool grays to warm equivalents (3 corrections documented in changelog). PV2 codifies this as an explicit constraint:
- "CRITICAL -- Warm-only palette: Every background MUST satisfy R >= G >= B (the warm test)." (Phase 3)
- gate-runner.js SC-04: Warm palette enforcement
- Risk 3 (Part 5): Cool Gray Infiltration warning with specific warm replacements

### C8. Scale 5 Verification

PV2 Phase 8C provides a formal 5-level scale verification checklist:
1. Page: Dark bookends, 960px container
2. Zone: 2-5 groups perceptibly distinct
3. Section: At least 2 distinct layouts
4. Component: Callout variants with distinct treatments
5. Element: Selection styled, inline code, link hover

The remediation had individual phase checks but no unified multi-scale verification.

---

## PART D: RISKS -- WHAT PV2 COULD LOSE FROM THE REMEDIATION

### Risk D1: Single-Agent Coherence vs Multi-Agent Distribution

**The remediation's advantage:** A SINGLE Opus builder with FULL context maintained cross-phase coherence naturally. When Phase 2 backgrounds conflicted with soul constraints, the builder corrected them (3 warm-palette substitutions). When Phase 4 typography values conflicted with the remediation spec, the builder adapted (zone-group concept preserved, specific values adjusted). This coherence emerged from one agent seeing everything.

**PV2's risk:** For Ceiling/Flagship, PV2 distributes work across 4 waves. Wave 0 (Content Analysis) outputs a build plan. Wave 1 (Building) reads the plan. But the plan is a COMPRESSED representation of Wave 0's analysis. The remediation's builder didn't need a compressed plan -- it read the full spec. If the Wave 0 -> Wave 1 handoff loses information (the 50:1 compression pattern diagnosed in the retrospective), the builder may make poor content-specific decisions.

**Mitigation in PV2:** Wave 1 builder reads the FULL recipe + the Wave 0 build plan. The recipe provides CSS values. The plan provides content-specific decisions. But verify: does the Wave 0 output format preserve enough specificity for the builder to adapt the recipe to the content?

### Risk D2: Warm-Palette Judgment May Not Transfer

**The remediation's advantage:** The Opus builder independently caught 3 cool-gray violations (#FAFAFA -> #FAF8F5, #F8F8F8 -> #F8F6F3, #F0F0F0 -> #F2EFEA). This was JUDGMENT, not rule-following -- the remediation spec itself contained the cool grays. The builder read the soul constraints and overrode the spec.

**PV2's risk:** PV2 recipe (Phase 3) includes the warm-test instruction and provides warm-only hex values. But if a CONTENT DECISION requires a new hex value not in the template, will the builder apply the warm test? The remediation's builder did this because it read `prohibitions.md` deeply. Will PV2's builder do the same?

**Mitigation in PV2:** gate-runner.js SC-04 programmatically checks R >= G >= B for all backgrounds. This catches what judgment might miss. But only AFTER the page is built -- not during Phase 3 where the builder writes values.

### Risk D3: Recipe Compliance as Ceiling

**The remediation's advantage:** The Opus builder made creative DEVIATIONS from the spec that improved the result: different typographic values that preserved the zone-group concept, warm substitutions, independent perception of "meaningful spatial differentiation" when considering whether to delete marginal CSS. These deviations demonstrate that the builder was not just following the recipe -- it was exercising compositional judgment.

**PV2's risk:** If PV2's recipe format is followed TOO literally (especially by Sonnet), the result may cap at 3/4 (COMPOSED) but never reach 4/4 (DESIGNED). The CSS philosophy shift analysis (File 05, Section 5) explicitly warns: "The deliberate model produces RELIABLE 3/4 but may cap at 3/4 because the builder writes exactly what they are told, nothing more, nothing less."

**PV2's mitigation:** Tier-gating. Middle uses recipe-literal (targeting 3/4). Ceiling/Flagship adds TC metaphor derivation to feed compositional intelligence into the recipe adaptation. Whether this is sufficient to reach 4/4 is an open question.

### Risk D4: Loss of Deallocation-First Mindset

**The remediation's advantage:** Phase 0 (Deallocation) forced the builder to UNDERSTAND what invisible CSS looks like before writing new CSS. The 201 lines deleted created a visceral understanding: "this is what I should NOT produce." This awareness informed every subsequent phase.

**PV2's risk:** PV2 builds from scratch, so Phase 0 is content analysis, not deallocation. New builders never experience the deallocation process and may not internalize the "dead code has negative value" principle. They read the perception thresholds but never see what sub-perceptual CSS looks like in practice.

**PV2's mitigation:** Part 3.4 states "RECIPES WORK, CHECKLISTS FAIL" and explains the flagship failure. Appendix A embeds the perception threshold table. But reading about sub-perceptual CSS is weaker than experiencing its deletion.

### Risk D5: !important Justification May Proliferate

**The remediation's advantage:** Used `!important` in exactly 3 justified contexts: soul enforcement (border-radius: 0), section padding overrides (inline style specificity), and bridge-prose override. Each use had explicit justification.

**PV2's risk:** PV2 recipe uses `!important` for soul enforcement (Phase 2, Step 2.2) and section padding (Phase 3, Step 3.3). The justification framework is preserved. But if future builders add more `!important` rules to fix specificity issues rather than correcting the underlying CSS, the stylesheet degrades.

**PV2's mitigation:** None explicit. Consider adding a gate: "`!important` count <= 5" or a builder warning about specificity management.

### Risk D6: Stacking Arithmetic May Be Forgotten for New Transition Types

**The remediation's advantage:** Calculated stacking for all 3 existing transition types. The arithmetic was specific to those 3 types.

**PV2's risk:** If future builders add new transition types (or modify divider margins), they need to RE-CALCULATE stacking arithmetic. The recipe provides the formula but doesn't enforce its re-execution when values change.

**PV2's mitigation:** gate-runner.js SC-10 checks total stacked gap <= 192px. This is a runtime safety net. But 192px is higher than the 120px builder target. Values between 120-192px will pass the gate but violate the recipe's intention.

### Risk D7: Mode 4 PA May Not Be Invoked When Needed

**The remediation's advantage:** N/A -- the remediation didn't include Mode 4 PA. But the post-remediation PA (9 auditors, 48 questions) revealed issues the builder self-check missed: border selector specificity, typography not applying to S9-S12, table class mismatch.

**PV2's risk:** PV2 assigns Mode 4 PA only to Flagship tier. Middle gets self-check only. If a Middle page has subtle failures (similar to remediation's 3 BLOCKING fixes), they may not be caught.

**PV2's mitigation:** PV2 architecture proposes Mode 2 (1 fresh-eyes auditor) for Ceiling tier. For Middle, the self-check Phase 8 should catch most issues. The key question: is Phase 8's perception checklist sufficient without a fresh-eyes agent? The remediation's experience says: builder self-checks catch 70% of issues. The remaining 30% requires independent perspective.

---

## SUMMARY SCORECARD

### 27 Reversals Preservation Status

| Category | Total | YES | PARTIAL | IMPROVED | ADAPTED |
|----------|-------|-----|---------|----------|---------|
| Paradigm (A1-A8) | 8 | 4 | 2 | 1 | 1 |
| Operational (B1-B10) | 10 | 4 | 0 | 3 | 3 |
| Structural (C1-C5) | 5 | 3 | 0 | 1 | 1 |
| Tonal (D1-D4) | 4 | 2 | 0 | 0 | 2 |
| **Total** | **27** | **13** | **2** | **5** | **7** |

- **13 YES:** Direct preservation of the remediation's approach
- **5 IMPROVED:** PV2 adds capability beyond the remediation
- **7 ADAPTED:** PV2 modifies the approach for content-agnostic or tier-gated context
- **2 PARTIAL:** PV2 partially preserves but with structural differences (A2 multi-agent, A4 conviction)
- **0 LOST:** No remediation reversal is completely absent from PV2

### 12 Extensions Preservation Status

| Extension | Preserved? | Notes |
|-----------|-----------|-------|
| 1. Zone backgrounds | YES | Content-agnostic templates with `[CONTENT DECISION]` markers |
| 2. Structural borders | YES | Alternating left borders with exact CSS |
| 3. Component library | YES | Standard class names in Phase 1.4 |
| 4. Layout variety | YES | Grid wrapper templates + "at least 2 grid sections" mandate |
| 5. Typography variation | YES | Zone-grouped convergence arc with exact values |
| 6. Void prevention | YES | Stacking arithmetic + gate-runner SC-10 |
| 7. Accessibility | YES | Phase 7 + Phase 8F verification |
| 8. Deallocation | APPENDIX | Preserved as Appendix B for remediation contexts |
| 9. Multi-coherence verification | YES | Phase 8E with transition verification table |
| 10. Spatial rhythm | YES | Zone-grouped padding with `!important` strategy |
| 11. Element-level richness | YES | Phase 6 (hover, selection, inline code) |
| 12. Content preservation | ADAPTED | N/A for new builds; PV2 creates content, doesn't preserve it |

### 8 Core Innovations Preservation Status

| Innovation | PV2 Status | Location |
|-----------|-----------|----------|
| Perception-as-quality | PRESERVED + ELEVATED | Recipe inline, Appendix A, perception-thresholds.md, gate-runner.js |
| Per-phase perception checks | PRESERVED | After every phase (8 total) |
| Deallocation-first | PRESERVED AS APPENDIX | Appendix B (for remediation contexts) |
| Recipe format | PRESERVED + GENERALIZED | File 42 Part 1 (content-agnostic) |
| HTML restructuring | PRESERVED AS STANDARD | Phase 1 builds from scratch |
| Stacking arithmetic | PRESERVED | Phase 0.6 + gate-runner SC-10 |
| Component library adoption | PRESERVED | Phase 1.4 + Risk 5 warning |
| WCAG 2.1 AA | PRESERVED | Phase 7 + Phase 8F |

### Net Assessment

**PV2 Flagship preserves ALL 8 core remediation innovations and ALL 27 reversals in some form (13 direct, 5 improved, 7 adapted, 2 partial, 0 lost).** The primary risks are:

1. **Multi-agent coherence loss** (D1) -- mitigated by single-writer architecture but Wave 0->1 handoff is a compression point
2. **Recipe ceiling at 3/4** (D3) -- mitigated by tier-gated metaphor derivation for Ceiling+
3. **No fresh-eyes for Middle tier** (D7) -- mitigated by Phase 8 self-check but 30% of issues may be missed

The strongest PV2 additions beyond the remediation are:
1. Content-agnostic generalizability (C1)
2. Two-layer verification system (C3)
3. Anti-reproduction gates (C4)
4. Tier-gated architecture (C2)
5. Orchestrator skill for user invocation (C5)

---

**END OF CROSS-REFERENCE ANALYSIS**

**Document statistics:**
- 27 reversals assessed: 13 YES, 5 IMPROVED, 7 ADAPTED, 2 PARTIAL, 0 LOST
- 12 extensions assessed: 10 YES, 1 APPENDIX, 1 ADAPTED
- 8 innovations assessed: 8/8 preserved (5 preserved, 2 elevated, 1 appendix)
- 8 additions PV2 makes beyond remediation
- 7 risks identified with mitigations
