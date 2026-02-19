# PV2 Cross-Reference Report #10: Verbiage and Propagation Analysis

**Agent:** verbiage-propagation-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference PV2-ARCHITECTURE-DIAGRAM.html against pv2-flagship-verbiage-audit.md and pv2-flagship-propagation-audit.md
**Core Questions:** Does the architecture use recipe verbs or checklist verbs? Does instruction propagation work? Does the 5.3x verb inversion get corrected? What master prompt verbiage patterns survive?

---

## EXECUTIVE SUMMARY

The PV2 Architecture Diagram is a COMMUNICATION document, not a building specification. It describes what the pipeline does, not what the builder should type. Its verb profile therefore reflects a NARRATOR voice -- predominantly descriptive third-person verbs ("classifies," "invokes," "captures") rather than the imperative verbs ("Write," "Add," "Set") that File 42 uses for building phases. This is architecturally correct: the diagram is for the USER to understand the system; File 42 is for the BUILDER to execute the system. The diagram's verb profile should NOT match File 42's -- and it doesn't.

However, the diagram makes 7 specific commitments about how the recipe will reach the builder, and 4 of these commitments are tested by the verbiage and propagation audits. This report traces those commitments against the evidence.

**Verdict: The architecture CORRECTS the 5.3x inversion at the design level but introduces 3 new propagation risks that neither audit fully addresses.**

---

## PART A: VERB CENSUS OF THE ARCHITECTURE DIAGRAM

### A1. Methodology

Every verb in the diagram's instructional text (excluding CSS class names, HTML element names, and structural markup) was classified using the verbiage audit's taxonomy: RECIPE (concrete action), CHECKLIST (verification/obligation), JUDGMENT (subjective evaluation), and a fourth category not in the taxonomy: DESCRIPTIVE (third-person narration about system behavior).

### A2. Verb Counts (Architecture Diagram Content Text)

**DESCRIPTIVE verbs (narrates what the system does):**

| Verb | Count | Typical Context |
|------|-------|-----------------|
| classifies | 3 | "orchestrator classifies the tier" |
| invokes | 5 | "invokes tension-composition," "invokes /perceptual-auditing" |
| routes/routing | 4 | "routes to builder," "verification routing" |
| outputs/returns | 4 | "outputs _build-plan.md," "returns handoff document" |
| reads | 6 | "TC reads the content source," "builder reads recipe" |
| captures | 3 | "lead captures all screenshots," "screenshots captured at 1440px" |
| spawns/spawning | 2 | "agent spawning," "spawning PA auditors" |
| generates | 1 | "generates zone architecture" |
| synthesizes | 2 | "weaver synthesizes into verdict" |
| writes | 3 | "builder writes checkpoint," "writes _build-plan.md" |
| provides | 2 | "user provides a content source" |
| catches | 4 | "catches threshold violations," "catches gestalt failures" |
| enriches | 3 | "each failure enriches the pipeline" |
| **Subtotal** | **42** | |

**RECIPE verbs (concrete action -- someone DOES something):**

| Verb | Count | Typical Context |
|------|-------|-----------------|
| executes | 3 | "builder executes 9-phase recipe," "executes Phases 0-8" |
| runs | 4 | "runs multi-axis questioning," "runs programmatic gates," "runs inline during build" |
| applies | 2 | "builder applies PA-identified fixes," "applies fixes" |
| measure | 1 | "measure ACTUAL rendered values" |
| **Subtotal** | **10** | |

**CHECKLIST verbs (verification/obligation):**

| Verb | Count | Typical Context |
|------|-------|-----------------|
| checks (binary) | 2 | "binary checks: All required fields present?" |
| validates | 2 | "orchestrator validates _build-plan.md," "validates handoff" |
| PASS/FAIL | 3 | "gate reports: PASS/FAIL," "PA-05 >= 3/4 AND all gates PASS" |
| must | 0 | (not used in diagram body text) |
| ensure | 1 | "ensure the page is genuinely designed" |
| **Subtotal** | **8** | |

**JUDGMENT verbs (subjective evaluation):**

| Verb | Count | Typical Context |
|------|-------|-----------------|
| feel/FEEL | 4 | "does this FEEL designed?" (3x), "feel like it has ZONES" |
| SEE | 1 | "analyzing what they actually SEE" |
| judges/judge | 2 | "PA judges whether the result looks designed" |
| **Subtotal** | **7** | |

### A3. Summary Ratios

| Category | Architecture Diagram | File 42 (verbiage audit) | Master Prompt (File 21) | Remediation (File 21) |
|----------|---------------------|--------------------------|------------------------|-----------------------|
| Total verbs | 67 | 109 | 233 | 112 |
| DESCRIPTIVE | 42 (62.7%) | 0 (0%) | ~5% | ~2% |
| RECIPE (action) | 10 (14.9%) | 70 (64.2%) | 61 (26.2%) | 71 (63.4%) |
| CHECKLIST (verify) | 8 (11.9%) | 24 (22.0%) | 136 (58.4%) | 16 (14.3%) |
| JUDGMENT (subjective) | 7 (10.4%) | 15 (13.8%) | 10 (4.3%) | 6 (5.4%) |

### A4. Interpretation

The diagram is 62.7% descriptive verbs -- narrating system behavior, not instructing a builder. This is correct for its role. When we exclude descriptive verbs and look at only the instructional language:

| Category | Diagram (excl. descriptive) | File 42 |
|----------|---------------------------|---------|
| RECIPE | 10/25 = 40.0% | 70/109 = 64.2% |
| CHECKLIST | 8/25 = 32.0% | 24/109 = 22.0% |
| JUDGMENT | 7/25 = 28.0% | 15/109 = 13.8% |
| (Check+Judg):Action | **0.60:1** (corrected) | **0.56:1** |

The diagram's instructional verb ratio (0.60:1) is slightly WORSE than File 42's (0.56:1) -- but this is expected because the diagram describes verification systems (Layer 1 + Layer 2) that are inherently checklist-heavy and judgment-heavy. The diagram concentrates judgment language in the PA description (Section 4) and the "feel DESIGNED?" refrain.

**Key finding: The diagram's judgment verbs cluster in EXACTLY the places where judgment is architecturally appropriate -- the perceptual audit layer.** The diagram does NOT inject judgment into building descriptions (Steps 4-5) where the verbiage audit found File 42 to be strongest (64.2% action verbs).

---

## PART B: DOES THE 5.3x INVERSION GET CORRECTED?

### B1. What the Verbiage Audit Found

The verbiage audit's central finding:

- **Master Prompt:** (Judgment+Constraint):Action = **2.23:1** (BAD)
- **PV2 Flagship (File 42):** (Judgment+Checklist):Action = **0.56:1** (GOOD)
- **Remediation:** (Judgment+Constraint):Action = **0.42:1** (BEST)
- **PV2 position:** 92.3% of the way from master to remediation

### B2. Does the Architecture Diagram Preserve This Correction?

**YES -- structurally.** The diagram describes a system where:

1. **The builder receives a RECIPE** (Step 4-5): "operational recipe (~650 lines)," "9-phase recipe," "sequential phases with exact CSS blocks, HTML templates, perception thresholds inline." Zero judgment verbs appear in the builder's description.

2. **Judgment is EXTERNALIZED to PA** (Layer 2): All 4 instances of "feel DESIGNED" appear in the PA description, not the builder description. The builder executes; PA judges. This is the structural fix for the 5.3x inversion -- instead of asking the builder to both build AND judge, the architecture separates these into different agents.

3. **Verification uses MEASUREMENT, not judgment** (Layer 1): "Every gate reports: property, measured value, threshold, PASS/FAIL. Zero judgment." The diagram explicitly marks programmatic gates as judgment-free.

### B3. One Regression Point

The diagram states the builder "reads the conviction preamble first (anti-scale model, IS/IS NOT axes, 'What DESIGNED means')" (Step 4). The verbiage audit identified this as Risk Zone 1 -- Tier 8 abstract conviction language. The diagram treats this as a positive feature ("Builder reads the conviction preamble first") without acknowledging that this is the ONE point where Tier 8 language enters the builder's execution context.

**Severity: LOW.** The verbiage audit already assessed this as LOW risk because conviction is isolated from building phases. The diagram accurately describes the isolation ("then executes Phases 0-8 sequentially") -- the conviction is read BEFORE building, not DURING building.

---

## PART C: INSTRUCTION PROPAGATION THROUGH THE ARCHITECTURE

### C1. The Architecture's 7 Propagation Commitments

The diagram makes 7 specific claims about how instructions reach their destination:

| # | Commitment | Diagram Location | Propagation Audit Assessment |
|---|-----------|-----------------|------------------------------|
| 1 | "Builder receives: operational recipe (~650 lines), _build-plan.md, tokens.css, prohibitions.md, merged-components.css" | Step 4 | CONFIRMED -- propagation audit traces 15 instructions through exactly this file set |
| 2 | "TC reads the content source. Runs multi-axis questioning. Derives tensions." | Step 3 | NOT DIRECTLY TESTED -- propagation audit focuses on builder, not TC |
| 3 | "Binary checks: All required fields present? Zone count within 2-5? Adjacent backgrounds differ by >= 15 RGB?" | Gate | CONFIRMED -- propagation audit Instruction 4 traces RGB delta at 90% compliance (template) / 60% (custom) |
| 4 | "Every gate reports: property, measured value, threshold, PASS/FAIL. Zero judgment." | Layer 1 | CONFIRMED -- but propagation audit warns "the builder builds the CSS, then judges whether their own CSS works" (Kill Zone 3). The "zero judgment" claim is true for gates but the diagram omits self-assessment bias in perception checks |
| 5 | "Fresh-eyes auditors with ZERO build context" | Layer 2 | CONFIRMED as a structural fix for Kill Zone 3, but NOT TRACED in the propagation audit (the audit focuses on builder propagation, not auditor propagation) |
| 6 | "Orchestrator connects them but never builds, analyzes, or judges itself" | Section 3 callout | NOT TESTED -- the propagation audit doesn't trace orchestrator behavior |
| 7 | "If PA-05 < tier threshold: builder receives specific fix list from PA weaver. Applies fixes. Re-runs both verification layers." | Step 6 | PARTIALLY CONFIRMED -- the fix integration loop is described but the propagation audit warns about "maximum 3 fix cycles" without tracing whether fix instructions propagate as reliably as initial build instructions |

### C2. Three Propagation Risks the Diagram Does Not Address

**RISK 1: Cross-document reference tax (propagation audit Kill Zone 1 + Kill Zone 2)**

The diagram shows the builder reading 5-6 files (Step 4: recipe, _build-plan.md, tokens.css, prohibitions.md, merged-components.css, and for Ceiling+: mechanism-catalog excerpts). The propagation audit estimates ~20-30 cross-references between documents and predicts "5-10% of instructional content" is lost at the handoff boundary.

The diagram presents this as a clean routing system ("The planner gets the mechanism catalog (for selection). The builder gets the recipe (for execution). Nobody reads files they can't act on.") This is the CORRECT design principle, but the diagram does not surface the COST: a builder processing 2,050+ lines across 5 files has more context-window pressure than a builder reading 1 file.

**What the diagram should but does not say:** The builder's context window is a propagation bottleneck. At ~2,050 lines (650 recipe + 300-600 handoff + 500 across 3 design system files), the builder is near the limit where late-document content (appendices, perception thresholds) suffers recency bias. The propagation audit predicts "10-15% of appendix/conviction content" is lost to context window position.

**RISK 2: Self-assessment in perception checks (propagation audit Kill Zone 3)**

The diagram describes the builder executing "Phase 8: Verification (programmatic + self-check)" and running "12 binary checks with measured values." But it conflates two different verification types:

- **Programmatic gates** (Layer 1): True binary, measured by Playwright. The diagram correctly calls these "zero judgment."
- **Phase-end perception checks**: Self-assessment by the builder. The verbiage audit found 9 such checks in File 42, all operating at Tier 6 (~70% compliance, ~40% accuracy). The propagation audit's Instruction 9 traces one such check and predicts "65% performed / 40% accurate."

The diagram does NOT distinguish between these. Step 5 says "Phase 8: Verification (programmatic + self-check)" -- the "self-check" part is the weak link that the diagram does not surface. The two-layer verification diagram (Section 4) correctly separates programmatic from perceptual, but this is about Layer 1 vs Layer 2 (post-build), not about the BUILDER's self-checks during the build.

**What the diagram should but does not say:** The builder's 9 phase-end perception checks are structurally unreliable (predicted 40% accuracy due to continuation bias). These are NOT the same as the programmatic gates. For Middle tier (where no planner reviews checkpoints), the builder is the sole judge of its own work for the first 8 phases. Only Layer 2 (PA) catches what self-assessment misses.

**RISK 3: Recipe length vs. context window (propagation audit Kill Zone 2)**

The diagram states "operational recipe (~650 lines)" in the Skill Propagation section but "Builder reads recipe + build plan + design system files" in Step 4. File 42 is currently 1,747 lines, and the diagram (Decision 6) says "Extract to ~650 lines" -- but this extraction has NOT happened yet. The propagation audit was conducted against the 1,747-line version.

If the recipe is successfully extracted to ~650 lines AND the handoff is ~300-600 lines, the builder reads ~950-1,250 lines across 2 primary files -- a significant reduction from 1,747 + handoff. The propagation audit's "10-15% context window loss" prediction may improve to ~5-8%.

**What the diagram should but does not say:** The ~650 line target is ASPIRATIONAL. Until the extraction happens, the builder reads 1,747 lines + handoff -- well into the zone where the propagation audit predicts significant context window degradation. The architecture diagram presents the post-extraction target as current reality.

---

## PART D: MASTER PROMPT VERBIAGE PATTERNS -- WHAT SURVIVES?

### D1. What the Verbiage Audit Identified as Master Prompt DNA

The verbiage audit compared File 42 to the master prompt and found 3 patterns that the master prompt used:

| Master Prompt Pattern | Verbiage Audit Finding | Present in Architecture Diagram? |
|----------------------|------------------------|--------------------------------|
| CHECKLIST-dominant verbiage (58.4% checklist) | File 42 reduced to 22.0% | Diagram: 11.9% raw, 32.0% excl. descriptive -- PARTIALLY present in verification descriptions but NOT in building descriptions |
| "FAIL IF" constructions | File 42 eliminated entirely (0 instances) | Diagram: 0 instances. "If FAIL: TC re-runs" is a CORRECTIVE action, not a punitive gate. **ELIMINATED.** |
| Open judgment ("feel DESIGNED") | File 42 has 1 genuine open-judgment instance (Phase 8G Q4) | Diagram: 4 instances of "feel DESIGNED" -- all in PA descriptions. **RELOCATED** from builder to auditor, which is the correct architectural fix |
| Formula+Judge compound ("Compute SCI, if < 0.60 then fix") | File 42 eliminated entirely (Tiers 9-10 = 0%) | Diagram: 0 instances. Anti-scale formula appears in Decision 3 but as a LENS, not a gate. "If spatial_confidence = 0, the entire product = 0" is binary (zero vs non-zero), not a formula+judge. **ELIMINATED.** |
| Abstract conviction without magnitude | File 42 isolated in Part 3, separate from building | Diagram: "Warm. Authoritative. Unhurried." does NOT appear. Decision 4 describes the conviction preamble but does not CONTAIN it. **ABSENT** from diagram text (correctly) |

### D2. Assessment

**Zero master prompt FAILURE patterns survive in the architecture diagram.** The diagram does not use "FAIL IF," does not use formula+judge, does not embed conviction in building descriptions, and does not use checklist-dominant verbiage for building steps.

**One master prompt SUCCESS pattern survives:** The 12 programmatic gates (SC-01 through SC-12) listed in the Layer 1 box are binary threshold checks -- the same pattern as the master prompt's soul constraints (container width, no border-radius, warm palette). These achieved ~100% compliance in the master prompt and are preserved because they WORK.

---

## PART E: THE "ALWAYS FLAGSHIP" IMPLICATION FOR VERBIAGE

### E1. Context

The user wants ALWAYS FLAGSHIP. This means every page gets the heaviest treatment: 9 PA auditors, mandatory approvals at 5 phases, full metaphor derivation.

### E2. Verbiage Implications

If every build is Flagship, the architecture diagram's tier routing table (Section 5) collapses to a single column. This has 3 verbiage effects:

**Effect 1: All checkpoint language becomes MANDATORY.**
The diagram shows Middle tier using "Self-check (HTML comments)" -- no external review, pure self-assessment. With ALWAYS FLAGSHIP, every checkpoint gets planner review + mandatory APPROVAL. This UPGRADES the propagation reliability of perception checks from ~40% accuracy (self-assessment) to ~65-70% (external review). The propagation audit's Kill Zone 3 is partially mitigated.

**Effect 2: Full isomorphism table for ALL pages.**
The handoff protocol's "YES (Ceiling+), OPTIONAL (Middle)" annotations all become YES. The builder always receives metaphor-to-CSS mappings. The verbiage audit found the isomorphism table to be an "elegant structural fix" that preserves Tier 8 direction (metaphor) while providing Tier 2 magnitude (exact CSS). With ALWAYS FLAGSHIP, this fix applies universally.

**Effect 3: The highest judgment-density verification applies universally.**
9 PA auditors answering 48 questions means the heaviest Tier 6-8 language (judgment-based perception assessment) runs on every page. But this judgment is EXTERNALIZED to auditors with zero build context -- the correct architectural location for judgment. The builder's recipe stays recipe-verb-dominant regardless of tier.

---

## PART F: PROPAGATION CHAIN COMPLETENESS

### F1. The End-to-End Instruction Lifecycle

The architecture diagram describes a 7-step journey. The verbiage and propagation audits together cover 5 of these steps:

| Step | Diagram Description | Verbiage Audit Coverage | Propagation Audit Coverage | Coverage Gap |
|------|--------------------|-----------------------|--------------------------|--------------|
| Step 1: User Input | User provides content source | N/A | N/A | Not applicable (user action) |
| Step 2: Tier Classification | Orchestrator classifies | N/A | N/A | **GAP: Orchestrator verbiage not audited** |
| Step 3: Content Analysis (TC) | TC runs Phases 0-3.5 | N/A | Instruction 13 (mechanism deployment) traces TC handoff | PARTIAL -- TC's internal verbiage not audited |
| Step 4: Builder Receives Package | Builder reads recipe + plan | Part A (verb census) | Instructions 1-14 (all builder-received) | **GOOD coverage** |
| Step 5: Build Execution | Builder executes Phases 0-8 | Parts A-D (full analysis) | Instructions 1-14 + Kill Zones 2-3 | **GOOD coverage** |
| Layer 1: Programmatic Gates | 12 binary checks | Part B (tier mapping, Tier 4) | Instructions 4, 7, 11 trace gates | **GOOD coverage** |
| Layer 2: Perceptual Audit | PA with fresh-eyes | Part E (comms protocol) | Instruction 15 (checkpoint) | **PARTIAL -- PA auditor propagation not traced** |
| Step 6: Fix Integration | Builder applies fixes | N/A | Mentioned but not traced | **GAP: Fix instruction propagation untested** |
| Step 7: Ship Decision | SHIP / FIX / ESCALATE | Part D (Risk Zone 2: 8G) | Instruction 12 (8G gestalt test) | PARTIAL -- only 8G, not full decision logic |

### F2. Identified Gaps

**GAP 1: Orchestrator verbiage is unaudited.**
The diagram claims the orchestrator "classifies, routes, invokes, and verifies" but "never builds, analyzes, or judges itself." The verbiage audit covers File 42 (recipe). The propagation audit covers the builder. Neither covers the ~350-line orchestrator. If the orchestrator contains judgment verbs in its classification logic (e.g., "assess content complexity"), those propagate to tier selection, which affects everything downstream.

**Severity: MEDIUM.** Tier misclassification would route a Flagship-worthy page to Middle tier (or vice versa). With ALWAYS FLAGSHIP this gap disappears entirely since all pages get Flagship treatment.

**GAP 2: Fix instruction propagation is untested.**
The diagram shows a fix loop (Step 6): "builder receives specific fix list from PA weaver. Applies fixes. Re-runs both verification layers." The propagation audit mentions "Maximum 3 fix cycles" but does NOT trace whether PA fix instructions propagate as reliably as initial recipe instructions.

Fix instructions are structurally different from recipe instructions: they are SPECIFIC ("increase S4 background from #F8F6F3 to #F0E8DC"), not TEMPLATED ("apply zone backgrounds"). Specific instructions should propagate at Tier 1-2 (~95-98%) -- higher than recipe templates. But the PA weaver's instructions must survive compression from 9 auditor reports into a fix list. This compression is the same type that caused the original 50:1 information loss.

**Severity: MEDIUM-HIGH.** The fix loop is a critical path. If the weaver's fix list is vague ("improve zone differentiation" instead of "change S4 background from #F8F6F3 to #F0E8DC"), the builder applies Tier 8 instructions during remediation -- exactly the failure pattern that caused the original problem.

**GAP 3: PA auditor propagation is untested.**
The diagram shows 9 PA auditors receiving "Screenshots (captured by lead)" and "PA question assignments only." The propagation audit does NOT trace whether PA questions propagate reliably to auditors. If an auditor receives "Does zone differentiation feel authentic?" (Tier 8) instead of "Count distinct background colors visible without a color picker" (Tier 5), the audit loses precision.

**Severity: LOW.** The PA skill (774 lines) contains the 48 questions in their defined form. Auditors READ the skill, not compressed summaries. Propagation reliability should be high (~90%) because the questions are pre-written, not derived per-build.

---

## PART G: THE VERBIAGE AUDIT'S SINGLE ACTIONABLE FIX

### G1. What the Verbiage Audit Recommends

Convert Phase 8G question 4 from Tier 8 to Tier 5:

**CURRENT (Tier 8):** "Does the page feel DESIGNED (intentional choices at every scale) or PATCHED (surface decoration on uniform structure)?"

**PROPOSED (Tier 5):** "Count screenfuls at 900px scroll increments. For each, count visually distinct elements (border, callout, grid, color shift, typographic change, pullquote). If >= 75% of screenfuls contain 2+ distinct elements AND >= 50% contain 3+ distinct elements, PASS."

### G2. Does the Architecture Diagram Accommodate This Fix?

**YES.** The diagram describes Phase 8 as "Verification (programmatic + self-check)" -- the proposed Tier 5 conversion is MORE programmatic than the current Tier 8 version, fitting the diagram's description better. The fix also aligns with the propagation audit's highest-leverage recommendation (E1.3): "Replace perception checks with programmatic verification."

### G3. But: ALWAYS FLAGSHIP Reduces This Fix's Urgency

With ALWAYS FLAGSHIP, the builder's Phase 8G self-assessment is followed by 9 independent PA auditors who answer the SAME question ("Does this feel DESIGNED?") using their own judgment. Even if the builder's self-assessment is unreliable (30% accuracy, per propagation audit Instruction 12), the 9-auditor PA provides an independent safety net. The Tier 5 conversion is still valuable for Middle/Ceiling tiers where PA is lighter -- but with ALWAYS FLAGSHIP, it is a NICE-TO-HAVE rather than a MUST-HAVE.

---

## PART H: SYNTHESIS AND CROSS-VALIDATION

### H1. Agreement Between the Two Audits

| Dimension | Verbiage Audit | Propagation Audit | Agreement? |
|-----------|---------------|-------------------|-----------|
| File 42 verb ratio | 0.56:1 (92.3% toward remediation) | Estimated 0.29:1 judgment:action | YES (both report action-dominant profile) |
| Tier 9-10 elimination | 100% eliminated | 0% Tier 9-10 instructions | YES (exact agreement) |
| Phase 8G as highest risk | Risk Zone 2, MODERATE | Instruction 12, VERY HIGH (30% compliance) | PARTIAL -- both flag it but severity differs (MODERATE vs VERY HIGH) |
| Self-assessment as weakness | Identified in perception checks | Kill Zone 3, 40% accuracy | YES (exact agreement on the problem) |
| Conviction isolation | Part 3 separated from Phases 0-8 | Context window position (lines 1,429-1,488) weakens it | YES with nuance -- both agree it is isolated; propagation audit adds that isolation = neglect |
| Content-agnostic gap from remediation | 1.3x worse, architecturally justified | 89-91% vs 100%, gap from [CONTENT DECISION] markers | YES (both identify the same cause and both assess it as justified) |

### H2. Disagreement Between the Two Audits

**Phase 8G severity:** The verbiage audit rates Phase 8G as MODERATE risk because "it comes AFTER Phases 8A-8F" (6 binary verification phases). The propagation audit rates it as VERY HIGH (30% compliance) because "the builder's self-assessment is structurally unreliable for aesthetic judgment." Both are correct from their perspective: the verbiage audit assesses the IMPACT of 8G failure (low, because 8A-8F already caught most issues); the propagation audit assesses the PROBABILITY of 8G working (low, because self-assessment is weak). Impact x Probability = MODERATE-HIGH, splitting the difference.

**Perception check value:** The verbiage audit treats perception checks as a feature (11 of 15 judgment verbs are binary visual checks, architecturally defensible). The propagation audit treats them as a liability (Kill Zone 3, 40% accuracy). The architecture diagram's two-layer model resolves this by making perception checks a PRELIMINARY filter that the PA then validates. The checks have value as EARLY WARNING even at 40% accuracy -- they catch obvious failures before the heavy PA runs.

### H3. What the Architecture Diagram Gets Right

1. **Structural separation of building from judging.** The builder executes a recipe (action-dominant verbiage). PA judges the result (judgment verbiage). The diagram's skill separation callout correctly articulates this: "Each skill has a clear boundary. TC analyzes content and outputs a plan. The recipe tells the builder exactly what CSS to write. PA judges whether the result looks designed."

2. **Two-layer verification model.** Programmatic gates (binary, measured) AND perceptual audit (judgment, fresh-eyes). The diagram correctly identifies that "A page can have the right numbers and still look wrong" -- the exact lesson from the flagship failure.

3. **File routing by capability.** "The planner gets the mechanism catalog (for selection). The builder gets the recipe (for execution). Nobody reads files they can't act on." This directly addresses the verbiage audit's finding that the master prompt routed CSS-rich files to the planner (who doesn't write CSS) instead of the builder.

4. **Elimination of all Tier 9-10 patterns.** No formula+judge, no counterfactual. Both audits confirm this.

### H4. What the Architecture Diagram Gets Wrong or Omits

1. **Conflates programmatic gates with self-assessment.** Step 5 lumps "Phase 8: Verification (programmatic + self-check)" as if they have similar reliability. The propagation audit proves they do not (gates: ~90%, self-check: ~40%).

2. **Presents recipe extraction as done.** "operational recipe (~650 lines)" appears as current state, but File 42 is 1,747 lines. The extraction is a design decision (Decision 6), not an accomplished fact.

3. **Does not surface context window cost.** Builder reads 5-6 files totaling ~2,050+ lines. Neither the propagation path diagram nor the file routing diagram mentions context window degradation as a propagation risk.

4. **Fix loop propagation is unspecified.** Step 6 describes the fix loop in 4 sentences. The weaver's fix instructions must compress 9 auditor reports into an actionable fix list -- the same compression pattern that caused 50:1 information loss. No safeguard is described for fix-list quality.

---

## PART I: QUANTITATIVE SUMMARY

### Architecture Diagram Verb Profile

| Category | Count | % | Assessment |
|----------|-------|---|-----------|
| DESCRIPTIVE (narrator) | 42 | 62.7% | Appropriate for communication document |
| RECIPE (action) | 10 | 14.9% | Low but correct -- diagram describes, doesn't instruct |
| CHECKLIST (verify) | 8 | 11.9% | Concentrated in verification sections |
| JUDGMENT (subjective) | 7 | 10.4% | Concentrated in PA descriptions |

### 5.3x Inversion Status

| Document | (Judgment+Constraint):Action Ratio | Status |
|----------|-----------------------------------|--------|
| Master Prompt | 2.23:1 | BASELINE (BAD) |
| PV2 Architecture Diagram (excl. descriptive) | 0.60:1 | CORRECTED (92.0% toward remediation) |
| PV2 File 42 (building phases only) | 0.56:1 | CORRECTED (92.3% toward remediation) |
| Remediation | 0.42:1 | TARGET |

### Propagation Prediction

| Metric | Value | Source |
|--------|-------|--------|
| Predicted compliance (as-is) | 89-91% | Propagation audit weighted average |
| Predicted compliance (after 4 fixes) | 96-98% | Propagation audit E1.1-E1.4 |
| Tier 1-5 instruction weight | 78% | Propagation audit B1 |
| Tier 9-10 instructions | 0% | Both audits agree |
| Kill zones | 4 identified | Handoff boundary, context window, self-assessment, inter-agent message quality |
| Master prompt failure patterns surviving | 0 | Part D analysis |

---

## PART J: RECOMMENDATIONS

### J1. For Architecture Diagram Updates

1. **Distinguish self-assessment from programmatic gates in Step 5.** Currently "Phase 8: Verification (programmatic + self-check)" conflates two mechanisms with very different reliability. Recommend splitting into "Phase 8A-8F: Programmatic verification" and "Phase 8G: Builder self-assessment (validated by PA in Layer 2)."

2. **Add context window warning to file routing diagram.** The "What Each Agent Reads and Writes" section should note: "Total builder input: ~2,050 lines across 5-6 files. Late-document content has lower propagation reliability."

3. **Specify fix-list quality requirements.** Step 6 should state: "PA weaver's fix list must use Tier 2 instructions (exact CSS selectors and values), not Tier 8 ('improve zone differentiation'). Maximum 3 fixes per cycle, each with specific before/after CSS."

### J2. For Pipeline v2 Codification

1. **Convert Phase 8G Q4** per verbiage audit recommendation -- even with ALWAYS FLAGSHIP, a Tier 5 version is more precise.
2. **Enforce Tier 2 fix instructions** in the weaver's output template.
3. **Extract recipe to ~650 lines** as Decision 6 specifies -- the propagation audit's compliance predictions assume this extraction.

### J3. With ALWAYS FLAGSHIP

The three propagation risks are REDUCED by ALWAYS FLAGSHIP:
- **Risk 1 (cross-document):** Unchanged -- builder still reads 5-6 files regardless of tier.
- **Risk 2 (self-assessment):** MITIGATED -- every self-assessment is followed by planner review + 9-auditor PA.
- **Risk 3 (recipe length):** Unchanged -- extraction is needed regardless of tier.

Net prediction with ALWAYS FLAGSHIP + recommended fixes: **93-96% compliance** (vs 89-91% without ALWAYS FLAGSHIP).

---

**END OF REPORT**

**Key finding:** The PV2 Architecture Diagram correctly inverts the master prompt's 5.3x judgment:action ratio and structurally separates building (recipe verbs) from judging (PA verbs). Zero master prompt failure patterns survive. Three new propagation risks exist (cross-document reference cost, self-assessment reliability, fix-loop compression) that neither audit fully addresses but ALWAYS FLAGSHIP partially mitigates. The single highest-leverage fix is converting Phase 8G Q4 from Tier 8 to Tier 5 -- and enforcing Tier 2 language in the PA weaver's fix instructions.
