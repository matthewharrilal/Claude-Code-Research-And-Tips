# PV2 Cross-Reference: Recipe Dimension Analysis

**Analyst:** recipe-dimension (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference PV2-ARCHITECTURE-DIAGRAM against pv2-recipe-compilation.md and pv2-flagship-css-philosophy-audit.md. Core question: Does the architecture ACTUALLY deliver RECIPES to the builder? Is operational-recipe.md truly recipe-format? Does the CSS philosophy match perception-as-quality?

**Sources read:**
- PV2-ARCHITECTURE-DIAGRAM.html (1,142 lines)
- pv2-recipe-compilation.md (483 lines)
- pv2-flagship-css-philosophy-audit.md (74 lines)
- pipeline-v2-architecture.md (399+ lines)
- 42-OPERATIONAL-RECIPE.md (1,746 lines, complete)

---

## EXECUTIVE SUMMARY

The PV2 architecture DOES deliver recipes to the builder. File 42 is genuinely recipe-format -- sequenced steps, exact CSS values, action verbs, per-phase perception checks. The CSS philosophy audit confirms all 5 shifts from specification-as-quality to perception-as-quality are EMBODIED, not merely mentioned. However, there are 4 structural risks in the architecture-to-execution path that could degrade the recipe back toward checklist territory, and 1 critical discrepancy between the architecture diagram's claims and the recipe's actual content.

**Verdict: STRONG with 4 RISKS and 1 DISCREPANCY.**

---

## SECTION 1: IS OPERATIONAL-RECIPE.MD TRULY RECIPE-FORMAT?

### 1.1 The Recipe Litmus Test

The corpus establishes a precise definition of "recipe" vs "checklist" (File 42 lines 14-20, confirmed by the CSS philosophy audit Shift 4):

| Property | Checklist (FAILS) | Recipe (SUCCEEDS) |
|----------|-------------------|-------------------|
| Structure | Rules by domain | Phases by sequence |
| Verbs | "FAIL IF", "must be", "verify" | "Delete", "Add", "Replace", "Set" |
| Values | "channel actively used" (any amplitude) | "font-size: 17px" (exact) |
| Verification | "did the CSS rule exist?" | "can you SEE the difference?" |
| Constraint:Action | 3.0:1 (constraints dominate) | 0.32:1 (actions dominate) |

### 1.2 Verb Audit of File 42

I audited the verb patterns across all 9 phases of File 42:

**Phase 0 (Content Analysis):** "Read these 2 files", "Read the content source", "note:", "Determine Zone Count", "Assign Zone Semantics", "Establish Section Architecture", "Determine Transition Types". VERDICT: **RECIPE** -- action verbs, sequential.

**Phase 1 (HTML Skeleton):** "Write the Document Shell", "Write the Header", "Write Sections", "Add Component Markup", "Add Grid Wrappers", "Add ARIA Attributes", "Write the Footer". VERDICT: **RECIPE** -- all "Write" and "Add" verbs with exact HTML templates.

**Phase 2 (CSS + Soul):** "Write the CSS Reset and Token Block", "Apply Soul Enforcement", "Base Typography and Container". VERDICT: **RECIPE** -- provides COMPLETE CSS code blocks to copy.

**Phases 3-6:** Same pattern -- "Define Zone Background Colors", "Apply Zone Backgrounds", "Apply Section Padding", etc. All provide exact CSS. VERDICT: **RECIPE**.

**Phase 7 (Accessibility):** Exact CSS for focus, skip-link, reduced-motion, print, responsive breakpoints. VERDICT: **RECIPE**.

**Phase 8 (Verification):** This is where the verb pattern shifts. "Verify the delta exceeds the perception threshold", "Scroll through the ENTIRE page", "Check", "Count how many CSS properties shift". VERDICT: **MIXED** -- Phase 8 is verification, which is inherently checklist-like. But this is CORRECT: verification IS checking. The key is that Phases 0-7 are recipe (building) and Phase 8 is checklist (verifying what was built).

**Overall Verb Ratio:** Phases 0-7 use recipe verbs (~95% action). Phase 8 uses verification verbs (~80% checking). The 8:1 recipe-to-checklist phase ratio means the document is structurally a recipe with verification bolted on. This matches the remediation pattern that succeeded.

### 1.3 Value Specificity Audit

The recipe provides EXACT CSS values, not ranges or judgment calls:

| What the master prompt said | What File 42 says |
|----------------------------|-------------------|
| "channel must be actively used" | `font-size: 17px` |
| "populate >= 30 cells" | `letter-spacing: 0.02em` on Zone 1, `-0.01em` on Zone 2 |
| "CCS >= 0.30" | `line-height: 1.85` vs `1.55` |
| "must be rich" | `background: #FEF5EB` (Zone 1), `#FAF8F5` (Zone 2) |
| "couple >= 10 dimension pairs" | 6 channels shifting at each zone boundary (table provided) |

The value specificity is GENUINE. Every phase provides copy-paste CSS. The builder does not need to derive, calculate, or interpret.

**One nuance:** Step 0.4 (Zone Semantics) and Section 4.1 (Content Decision Guide) require genuine judgment -- the builder must decide how to map content to zones. These are marked with `[CONTENT DECISION]` tags. This is CORRECT: content-form alignment is inherently a judgment call. The recipe provides a decision framework (tables, examples, templates) but cannot pre-compute the answer.

### 1.4 Compilation Plan Fidelity

The recipe-compilation.md classifies all 1,746 lines of File 42 into 5 categories:

| Classification | Lines | % | Destination |
|---------------|-------|---|-------------|
| RECIPE | ~1,100 | 63% | operational-recipe.md |
| ANALYSIS | ~330 | 19% | Stays in ephemeral |
| ARCHITECTURE | ~120 | 7% | CLAUDE.md building protocol |
| CONVICTION | ~90 | 5% | build-page SKILL.md preamble |
| Mixed/Borderline | ~106 | 6% | Inline in recipe |

This separation is CORRECT and well-reasoned. The compilation plan's key decisions are:

1. **Keep CSS blocks verbatim** (Decision 2): "The CSS blocks ARE the recipe. Compressing them would force the builder to derive values -- the exact failure mode we're fixing." CORRECT. This is the recipe's DNA.

2. **Remove multi-sentence "Why" paragraphs** (Decision 1): Evidence citations become inline 1-line comments. CORRECT. Rationale is analysis, not recipe.

3. **Include Content Decision Guide** (Decision 5): "These are the ONLY content-specific guidance the builder needs." CORRECT. Without them, content-specific judgment has zero framework.

4. **Keep Quick Reference Card verbatim** (Appendix C): "This IS the builder's cheat sheet." CORRECT.

**Estimated compiled size:** ~647-748 lines, depending on CSS compression. The 650-line target is achievable but tight. Accepting ~700 lines is reasonable because the CSS IS the content.

---

## SECTION 2: DOES THE ARCHITECTURE ACTUALLY DELIVER THE RECIPE?

### 2.1 The File Routing Diagram

The architecture diagram (Section 7) specifies what each agent reads:

**Builder reads:**
1. `operational-recipe.md` (~650 lines) -- HIGHLIGHTED
2. `_build-plan.md` (from TC) -- HIGHLIGHTED
3. `tokens.css` (design tokens)
4. `prohibitions.md` (soul constraints)
5. `merged-components.css` (component library)
6. `mechanism-catalog.md excerpts` (Ceiling+ only)

This directly addresses the diagnosed failure mode: "75-line builder visibility cap = 13.4% prompt visibility." The builder now gets the FULL recipe (~650 lines) plus the complete design system files. Total builder visibility: ~650 + ~174 + ~353 + component library. This is a 4-5x increase over the flagship's 75-line builder view.

### 2.2 The Recipe vs The Conviction Layer

The architecture diagram places a "20-line Pipeline Philosophy preamble" in `/build-page` (the orchestrator), NOT in the recipe. This is the conviction content from File 42 Part 3:

- Anti-scale model
- IS/IS NOT axes
- "What DESIGNED means"
- Kill criteria

**Question:** Does the builder ever SEE this conviction content?

The architecture says the builder "reads the conviction preamble first" (Step 4, architecture diagram Section 2). But the conviction lives in the ORCHESTRATOR skill, not the recipe. The builder agent reads the recipe. Does the orchestrator transmit the conviction preamble to the builder, or does the builder only see the recipe?

**This is AMBIGUOUS.** The architecture diagram claims the builder "reads the conviction preamble first" but the file routing diagram does not list the conviction preamble as a builder READ. If the orchestrator spawns the builder with only the recipe file path, the conviction never reaches the builder.

**RISK 1: Conviction delivery gap.** The separation of conviction (in /build-page) from recipe (in operational-recipe.md) could mean the builder never absorbs the design philosophy. File 42's Part 3 was deliberately placed BEFORE Part 1 to front-load conviction. If the compiled recipe strips conviction and the orchestrator doesn't pass it through, the builder executes mechanically without understanding WHY.

**Mitigation options:**
- (a) Include a compressed 8-line conviction preamble at the TOP of operational-recipe.md (File 42's "How to Read" section already does this)
- (b) The orchestrator's builder-spawn prompt explicitly includes the conviction text
- (c) Accept that recipe-format makes conviction unnecessary (compliance is embedded in the values)

Option (c) is what the CSS philosophy audit argues: "conversion of perception-quality goal into specification-format that builders can execute reliably." If every CSS value is pre-computed to be perceptible, the builder doesn't need to BELIEVE in perception-as-quality -- they just need to follow the recipe. This is the strongest argument, but it has a ceiling: the [CONTENT DECISION] points require judgment, and judgment without conviction defaults to the shallowest interpretation.

### 2.3 Recipe Extraction Fidelity

The compilation plan specifies exactly which File 42 lines become operational-recipe.md:

- Phases 0-8: All steps, all CSS blocks, all perception checks -- COMPLETE
- Quick Reference Card: VERBATIM
- Content Decision Guide: INCLUDED
- Perception Thresholds: COMPRESSED (compact inline + pointer to canonical file)
- Deallocation Protocol: SHORT APPENDIX (~20 lines)

**What's lost in extraction:**

1. Evidence paragraphs ("Why:" sections) -- ~9 instances removed. These explain the rationale but the builder doesn't need rationale to follow steps.

2. The Recipe vs Checklist comparison table (lines 14-20) -- retained in compressed form ("How to Read" becomes ~8 lines). This is a CONVICTION artifact that helps the builder understand what they're reading.

3. Risk assessments (Part 5, 67 lines) -- entirely removed. The risks describe what could go wrong. The recipe prevents them through specific values. CORRECT to remove.

4. Team architecture (Part 2, 73 lines) -- moved to CLAUDE.md. This is orchestrator content, not builder content. CORRECT.

5. Provenance (Appendix D, 22 lines) -- entirely removed. Evidence chain is for researchers, not builders. CORRECT.

**Fidelity verdict: HIGH.** The extraction preserves every actionable step, every CSS block, and every perception check. What's lost is exclusively analysis, evidence, and team architecture -- none of which the builder needs during execution.

---

## SECTION 3: CSS PHILOSOPHY ALIGNMENT

### 3.1 The 5 Shifts

The CSS philosophy audit (pv2-flagship-css-philosophy-audit.md) evaluates whether File 42 embodies 5 paradigm shifts:

| Shift | Status | Strength |
|-------|--------|----------|
| 1. Sub-perceptual to Perceptible | EMBODIED | STRONG |
| 2. Rules to Perception | EMBODIED | STRONG |
| 3. Budget Misallocation to Deallocation | EMBODIED | MODERATE |
| 4. Constraint Language to Recipe Language | EMBODIED | STRONG |
| 5. Ambient Richness to Deliberate Richness | EMBODIED | STRONG |

**Unifying transformation: specification-as-quality to perception-as-quality: EMBODIED (STRONG).**

### 3.2 Cross-Referencing the Audit Against the Architecture Diagram

The architecture diagram claims a "two-layer verification" system:
- Layer 1: Programmatic Gates (12 binary checks, during + after build)
- Layer 2: Perceptual Audit (Playwright screenshots + fresh-eyes auditors)

**Does this match the CSS philosophy?**

YES. The two-layer system directly implements Shift 2 (Rules to Perception):
- Layer 1 checks SPECIFICATION compliance (are the numbers right?)
- Layer 2 checks PERCEPTUAL compliance (do the numbers LOOK right?)

The architecture diagram's strongest claim is: "Programmatic gates check MAGNITUDE. Perceptual audits check PERCEPTION. A page can have the right numbers and still look wrong." This is exactly what the flagship experiment proved.

### 3.3 The Perception Check Innovation

The CSS philosophy audit's most important finding: "The recipe's phase sequence is perception-ordered, not specification-ordered."

Evidence from File 42:
- Phases follow VIEWER perception order: backgrounds (scroll impression) -> borders (structural rhythm) -> typography (reading experience) -> element details (interaction)
- Every phase ends with VISUAL questions ("Can you SEE?"), not structural questions ("Does the CSS contain?")
- Ship decision is perception-gated (3 of 4 criteria are perceptual)

This is confirmed in the architecture diagram, which shows Phase 8G as the gestalt perception test: "Does each screenful look DIFFERENT? Does the page feel DESIGNED or PATCHED?"

**RISK 2: Perception checks are unenforceable.** File 42's perception checks are self-reported. The builder writes "I see left borders on S2, S5, S7" -- but there's no mechanism to verify that the builder ACTUALLY looked. Risk 7 in File 42 explicitly identifies this: "Builder completing all 9 phases in < 30 minutes." The architecture diagram's Layer 2 (PA) is the backstop, but PA runs AFTER all phases, not between them. A builder who skips Phase 3's perception check may carry a warm-test failure through Phases 4-7.

**Mitigation:** The architecture diagram's Flagship tier includes "mandatory APPROVAL at Phases 0, 1, 3, 4, 8" -- meaning another agent reviews the builder's work mid-build. For Middle tier, there's no mid-build check. The Middle builder self-reports. This is acceptable because: (a) the recipe values are pre-computed to be perceptible, (b) wrong selectors would be caught by Phase 8A's computed-style check, and (c) the PA backstop catches gestalt failures.

### 3.4 The Deallocation Gap (Shift 3)

The CSS philosophy audit notes: "For fresh builds, sub-perceptual CSS is prevented by construction (all values exceed thresholds). For remediation, an explicit deallocation protocol exists."

The architecture diagram covers this with the recipe's Phase 0 + Appendix B deallocation. But the audit identifies a gap: "if a builder adds custom CSS beyond the recipe's values, there is no in-recipe mechanism to catch sub-perceptual drift."

This is the **custom CSS escape hatch problem.** File 42's [CONTENT DECISION] points invite the builder to make judgment calls about zone semantics, callout variants, and grid placement. If the builder also adds CUSTOM CSS (e.g., a new component class), that CSS is not covered by the recipe's pre-computed values. Phase 8A's perception threshold check is the safeguard, but it requires the builder to actively verify custom values.

**RISK 3: Custom CSS drift.** The recipe is airtight for its pre-computed values. It's porous for any CSS the builder writes beyond the recipe. The architecture diagram's programmatic gates (Layer 1) check specific properties (container width, border-radius, warm palette) but don't check arbitrary custom CSS for perception threshold compliance. The PA (Layer 2) would catch visible consequences but wouldn't diagnose the root cause as sub-perceptual custom CSS.

---

## SECTION 4: DISCREPANCY ANALYSIS

### 4.1 Background Delta: 10 RGB vs 15 RGB (CRITICAL DISCREPANCY)

The architecture diagram states: "Adjacent backgrounds differ by >= 15 RGB" (Section 2, Handoff Validation gate; Section 4, SC-09).

File 42 states: ">= 10 RGB points between adjacent zones" (Phase 8A, line 1263; Appendix A, line 1613).

The pipeline-v2-architecture.md resolves this in C4: "15 RGB. The researched value (File 08) is 15 RGB. File 42's 10 RGB is stricter but less supported."

The architecture diagram's resolved decisions section (Decision 1) confirms: "15 RGB. All template colors already satisfy this."

**But File 42 itself still says 10 RGB.** The compilation plan doesn't flag this discrepancy. If operational-recipe.md is extracted from File 42 without updating the threshold values, the recipe will specify 10 RGB while the gate runner checks 15 RGB. A builder following the recipe to the letter could produce pages that pass the recipe's own checks but fail the gate runner.

**This is a BLOCKING discrepancy.** File 42's Phase 8A and Appendix A must be updated to 15 RGB before extraction. The compilation plan should flag this as a pre-extraction edit.

### 4.2 Stacking Gap: 120px vs 108px vs 192px

The architecture diagram says: "108px for Flagship, 120px for Middle/Ceiling" (Decision 2) and "SC-10: Stacked gap <= 108px (Flagship)" in the programmatic gates.

File 42 says: "120px target" everywhere (lines 151-158, 1277, 1281, 1692).

pipeline-v2-architecture.md resolves this: "120px is the builder's TARGET. 192px is the GATE (fail if exceeded)."

The architecture diagram is MORE RESTRICTIVE than the unified architecture document. The diagram says 108px (Flagship gate). The architecture says 192px (gate) with 120px (target).

**This is an INCONSISTENCY, not blocking.** The stacking arithmetic in File 42 proves worst-case is 108px (breathing transition). If the gate is 108px, any recipe-compliant page passes automatically. If the gate is 192px, there's a 72px gap between recipe compliance and gate failure that allows custom CSS to accumulate spacing.

**Recommendation:** The architecture diagram's 108px for Flagship is the TIGHTER and SAFER value. Adopt it. Keep 120px as Middle/Ceiling target. The recipe's values already produce max 108px stacks, so no recipe changes needed.

### 4.3 Letter-Spacing Threshold: 0.025em vs 0.03em vs 0.5px

The architecture diagram: "Letter-spacing >= 0.5px" in the CLAUDE.md perception threshold table.

File 42 Appendix A: ">= 0.025em (= 0.4px at 16px)" (line 1614).

Architecture resolved decisions (Decision 7): "0.03em (0.5px at 16px base)."

File 42's recipe values: Zone 1 = 0.02em, Zone 2 = -0.01em, total range = 0.03em.

**The RECIPE VALUES are consistent** (0.03em total range). The THRESHOLD STATEMENT in Appendix A (0.025em) is slightly lower than the resolved decision (0.03em). Since the recipe's actual values produce exactly 0.03em range, updating the threshold to match the resolved decision is the correct action.

---

## SECTION 5: THE "ALWAYS FLAGSHIP" QUESTION

The team lead's context notes: "User wants ALWAYS FLAGSHIP, remediation-style."

### 5.1 What "Always Flagship" Means for the Recipe

The architecture diagram describes 3 tiers with different:
- Builder agent count (1 vs 1+planner)
- TC involvement (Phases 0-2 vs 0-3.5)
- PA depth (2 vs 4 vs 9 auditors)
- Checkpoints (self-check vs mandatory approval)
- Gate severity (SIGNIFICANT vs BLOCKING)

If ALWAYS FLAGSHIP, the tier routing in /build-page becomes unnecessary. Every page gets:
- TC Phases 0-3.5 (full metaphor)
- 1 Opus builder + planner
- Mandatory APPROVAL at 5 phases
- 12 gates at BLOCKING severity
- 9-auditor Mode 4 PA
- Max 3 fix cycles

### 5.2 Impact on the Recipe Itself

The recipe is tier-AGNOSTIC in its content. All 9 phases are the same regardless of tier. What changes is:
- **Handoff richness:** Flagship gets full build plan with isomorphism table, reinforcing pairs, bridge prose
- **Gate strictness:** Flagship uses 108px stacked gap (vs 120px Middle)
- **Checkpoint frequency:** Builder pauses 5 times for planner review

**RISK 4: Recipe-checkpoint mismatch.** File 42's recipe does not include explicit PAUSE points for planner approval. The phases flow continuously. If always-flagship means mandatory approvals at Phases 0, 1, 3, 4, 8, the recipe needs CHECKPOINT GATES at those phase boundaries that say "STOP. Write checkpoint file. Wait for planner approval before proceeding."

Currently, the recipe has "CHECKPOINT: Phase 0 Complete" and "PERCEPTION CHECK" markers, but these are self-checks, not approval gates. The architecture diagram's flagship wave architecture (Wave 1) says "Mandatory checkpoints at 5 phases -- Planner reviews + approves each." This approval mechanism is not in the recipe; it's in the orchestrator.

**For always-flagship:** Either (a) add approval gates to the recipe (making it flagship-specific, contradicting content-agnostic design), or (b) the orchestrator injects approval requirements into the builder's instructions alongside the recipe path. Option (b) is cleaner -- the recipe stays universal, the orchestrator modulates strictness.

---

## SECTION 6: THE REMEDIATION PATTERN ALIGNMENT

### 6.1 What Made the Remediation Succeed

The remediation (PA-05 1.5 -> 2.5) succeeded because:
1. It was a RECIPE (sequenced CSS modifications with exact values)
2. It had PERCEPTION CHECKS between phases
3. A single Opus builder read the complete spec (1,025 lines)
4. It started with DEALLOCATION (removing invisible CSS)
5. It targeted PERCEPTIBLE deltas at every boundary

### 6.2 Does File 42 Replicate This Pattern?

| Remediation Success Factor | File 42 Status | Gap? |
|---------------------------|----------------|------|
| Recipe format (sequenced, exact values) | YES -- 9 phases, copy-paste CSS | NO |
| Perception checks between phases | YES -- 8 perception checks | NO |
| Single Opus builder reads complete spec | YES -- architecture specifies this | NO |
| Deallocation first | PARTIAL -- Appendix B for remediation; prevention-by-construction for new builds | MINOR |
| Perceptible deltas at boundaries | YES -- all values exceed thresholds | NO |

**The remediation pattern is replicated.** File 42 is structurally identical to the remediation spec, but generalized from "fix this page" to "build any page."

### 6.3 What the Remediation Had That File 42 Lacks

The remediation spec operated on an EXISTING artifact. It could say "change THIS selector to THIS value" because the HTML already existed. File 42 must say "write THIS CSS" for a page that doesn't exist yet. This means:

1. **The remediation could reference specific DOM elements.** File 42 uses zone-class selectors (`.zone-s1 p`) that the builder must adapt to their section count.

2. **The remediation's deallocation was concrete** ("delete lines 47-92"). File 42's deallocation is conditional (Appendix B, only for remediation).

3. **The remediation builder had visual reference.** They could see the existing page. File 42's builder constructs from imagination until Phase 1's perception check.

These are inherent differences between remediation and from-scratch building, not flaws. The recipe handles them through [CONTENT DECISION] markers and the Phase 0 planning stage.

---

## SECTION 7: SYNTHESIS AND RECOMMENDATIONS

### 7.1 Overall Assessment

| Dimension | Rating | Evidence |
|-----------|--------|----------|
| Recipe-format fidelity | **STRONG** | 8:1 recipe-to-checklist phase ratio, exact CSS values, action verbs |
| CSS philosophy alignment | **STRONG** | All 5 shifts EMBODIED, perception-ordered phases |
| Architecture delivery | **STRONG with gaps** | Builder gets full recipe, but conviction delivery is ambiguous |
| Compilation plan quality | **HIGH** | Clear classification, justified decisions, correct separations |
| Threshold consistency | **NEEDS FIX** | 10 RGB vs 15 RGB discrepancy is BLOCKING |
| Remediation pattern replication | **HIGH** | Structural match on all 5 success factors |

### 7.2 The 4 Risks (Ranked by Severity)

**RISK 1: Conviction delivery gap (SIGNIFICANT)**
The separation of conviction (orchestrator) from recipe (builder file) may mean the builder executes mechanically without understanding perception-as-quality. The recipe's [CONTENT DECISION] points require judgment that benefits from conviction.

**RISK 2: Perception check unenforceability (MODERATE)**
Mid-build perception checks are self-reported for Middle tier. A builder who skips them carries errors forward. PA backstop catches gestalt failures but not root causes.

**RISK 3: Custom CSS drift (MODERATE)**
The recipe is airtight for pre-computed values. Any custom CSS added by the builder escapes perception threshold enforcement. Phase 8A is the safeguard but requires active checking.

**RISK 4: Recipe-checkpoint mismatch for always-flagship (LOW)**
The recipe's checkpoints are self-checks, not approval gates. Always-flagship needs the orchestrator to inject approval requirements. This is an orchestrator design concern, not a recipe flaw.

### 7.3 The 1 Discrepancy (BLOCKING)

**Background delta: 10 RGB (File 42) vs 15 RGB (architecture, resolved decisions, CLAUDE.md, gate runner)**

File 42 must be updated to 15 RGB in Phase 8A and Appendix A BEFORE extraction to operational-recipe.md. The compilation plan should add this as a pre-extraction edit.

### 7.4 Recommendations

1. **Pre-extraction edit:** Update File 42's background delta from 10 RGB to 15 RGB in Phase 8A (line 1263) and Appendix A (lines 1613, 1621). Also update letter-spacing threshold from 0.025em to 0.03em.

2. **Conviction preamble:** Include an 8-line compressed conviction section at the TOP of operational-recipe.md (extracted from File 42's "How to Read" section + Part 3 highlights). This ensures the builder absorbs the perception-as-quality paradigm even if the orchestrator doesn't transmit it.

3. **Custom CSS guard:** Add a step to Phase 8A: "For any CSS property NOT in this recipe, verify its value exceeds the corresponding perception threshold in the Quick Reference Card."

4. **Always-flagship checkpoint:** The orchestrator should inject "WAIT FOR APPROVAL" markers into the builder's instructions at Phases 0, 1, 3, 4, 8. The recipe itself should note: "For Flagship builds, the orchestrator may require approval checkpoints. Do not proceed past a checkpoint until approved."

---

## APPENDIX: VERB FREQUENCY ANALYSIS

Counted across all 1,746 lines of File 42:

**Recipe verbs (action):** Write (23), Read (8), Add (11), Apply (6), Set (4), Define (3), Determine (4), Establish (2), Delete (1), Replace (1). Total: 63

**Checklist verbs (constraint):** Verify (9), Check (7), Must (12), FAIL IF (0), Should (5), Test (4), Passes (3), Confirm (2). Total: 42

**Perception verbs (visual):** See/SEE (14), Look (6), Feel (4), Visible (7), Distinct (4), Open (3). Total: 38

**Recipe:Checklist ratio:** 63:42 = 1.5:1 for the full document. But Phase 8 alone accounts for 28 of the 42 checklist verbs. Phases 0-7 ratio: 63:14 = 4.5:1. This confirms the recipe-compilation plan's classification: Phases 0-7 are recipe, Phase 8 is verification.

**Perception verb density:** 38 perception verbs across 1,746 lines = 1 per 46 lines. The master prompt (963 lines) had ZERO perception verbs. This is the most concrete evidence that the recipe embodies the perception-as-quality shift.

---

**END OF RECIPE DIMENSION ANALYSIS**

**Summary:** File 42 is genuinely recipe-format. The CSS philosophy is genuinely embodied. The compilation plan correctly separates recipe from analysis. The architecture diagram correctly routes the recipe to the builder. One BLOCKING discrepancy (background delta threshold) must be fixed before extraction. Four risks (conviction gap, perception check enforcement, custom CSS drift, checkpoint mismatch) are manageable with the recommended mitigations.
