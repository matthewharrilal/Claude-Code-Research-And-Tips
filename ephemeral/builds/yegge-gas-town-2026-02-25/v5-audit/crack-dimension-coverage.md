# Crack Dimension Coverage Audit — Pipeline v5

**Date:** 2026-02-26
**Auditor:** audit-crack-dimensions (Opus)
**Scope:** All 14 crack dimensions assessed against v5 design docs + implementation reports
**Sources:** 12 v5-design files, 80+ va-extraction files, implementation reports
**Method:** Per-dimension defense inventory, defense rating, regression analysis, new crack identification

---

## Summary

| Rating | Count | Dimensions |
|--------|-------|------------|
| STRONG | 5 | D2, D5, D10, D13, D14 |
| ADEQUATE | 5 | D1, D3, D4, D8, D12 |
| WEAK | 3 | D6, D9, D11 |
| ABSENT | 1 | D7 |

**Pre-v5 baseline:** 3 STRONG, 4 ADEQUATE, 4 WEAK, 3 ABSENT
**Net change:** +2 STRONG, +1 ADEQUATE, -1 WEAK, -2 ABSENT

**Key finding:** v5 adds substantial defenses for D2, D5, D10, D13, D14 (the explicit targets). D7 (Defense Paradox) is the critical gap — v5 itself creates new defense paradox risk through +300 lines of new features offset by -2,130 lines of planned reductions. D6 (Cross-File Reference Rot) defense exists in design but was NOT implemented in the files I reviewed. D9 (Environmental Variance) and D11 (Mode/Context Sensitivity) remain structurally unaddressed.

---

## Per-Dimension Assessment

### D1: Template Slot Absence
**Rating: ADEQUATE**

**Defense inventory:**
- BV-01 through BV-07 verify brief completeness before builder spawn (pre-v5, unchanged)
- BV-08 (NEW, v5) verifies brief-to-output coverage across 6 dimensions — catches template slots that were specified but not implemented
- INTENT comments (NEW, v5) let the builder declare deliberate omissions via `[NOT-IMPL]` tags, distinguishing template absence from creative choice
- Execution tracker template provides field-level completeness tracking

**Gaps:**
- BV-08 only checks BRIEF->OUTPUT direction. If the template itself has missing slots (e.g., no Tier 3 metaphor section), BV-08 cannot detect absence of what was never specified.
- BV-01 through BV-05 check brief structure but not brief COMPLETENESS against a canonical template. A brief could have all required sections but leave critical sub-fields empty.
- No gate verifies that the TC brief template itself is up-to-date with current pipeline expectations.

**Pre-v5 comparison:** SAME tier (ADEQUATE). BV-08 and INTENT add detection of downstream template loss, but upstream template completeness is unchanged.

---

### D2: Compression Loss
**Rating: STRONG**

**Defense inventory:**
- BV-08 (NEW, v5): Brief-Output Diff gate — programmatic 6-dimension comparison of brief specs vs HTML/CSS output. 80% coverage threshold per dimension. Surfaces specific dropped items in `droppedItems` array.
- INTENT narration protocol (NEW, v5): Builder embeds 17-22 `<!-- INTENT [D-XX] ... -->` comments explaining per-decision rationale. `[NOT-IMPL]` cluster captures deliberate omissions with brief references and trade-off reasoning.
- GR-83 (NEW, v5): INTENT Comment Count gate — verifies >=15 INTENT comments exist with >=1 HIGH confidence, >=2 different disposition tags, and specificity heuristic.
- BV-08 integrates with INTENT: items covered by `[NOT-IMPL]` comments are excluded from droppedItems, preventing false positives for creative omissions.
- REFINE builder receives the `droppedItems` list as actionable input for the improvement pass.

**Assessment:**
This is the most thoroughly defended dimension in v5. The three-layer defense (BV-08 programmatic detection + INTENT narration for human/agent explanation + GR-83 compliance gate) creates a complete causal chain from "what was specified" through "what was built" to "why the delta exists." The brief-diff gate code is fully implemented (400 lines in gate-runner-core.js) with all 6 dimensions, tolerance handling, and synonym tables.

**Remaining gap:** BV-08 uses text-matching heuristics that can produce false negatives (a value exists in CSS but applied to the wrong element). The design doc acknowledges this (Section 6, Risk Analysis) and notes it as acceptable for v5, with per-zone matching as a future enhancement.

**Pre-v5 comparison:** UPGRADED from WEAK to STRONG. Pre-v5 had zero mechanisms for detecting brief-to-output compression loss. v5 adds three coordinated instruments.

---

### D3: Voluntary Non-Execution
**Rating: ADEQUATE**

**Defense inventory:**
- GR-83 (NEW, v5): Requires >=15 INTENT comments. A builder that skips disposition steps cannot produce disposition-tagged INTENT comments without fabrication. This creates a structural audit trail.
- GR-48 meta-gate: Verifies that RECOMMENDED gates actually ran (coverage check). Pre-v5, unchanged.
- Observer agent (NEW, v5 DESIGN): OBS-01 through OBS-30 verify process compliance from artifacts. OBS-03 checks experiential scan timing (>=90 seconds, catching theatrical compliance). OBS-21 spot-checks PA auditor fresh-eyes isolation.
- Builder recipe Phase 5 self-evaluation: 7 binary questions as HTML comments. Pre-v5, unchanged.
- IMPROVEMENTS protocol (NEW, v5 DESIGN): Builder surfaces 5-10 improvement ideas with confidence ratings. A builder practicing voluntary non-execution (doing the minimum) is unlikely to produce thoughtful, specific HIGH-confidence improvement ideas.

**Gaps:**
- GR-83 can be gamed with formulaic INTENT comments ("could adjust padding in Zone 3 | HIGH" x5). The design doc acknowledges this and adds a formulaic detection heuristic at the orchestrator level, but this is NOT a gate-level enforcement.
- The observer protocol is DESIGN ONLY — not yet implemented in pipeline files. Until the observer is operational, D3 defense relies on INTENT gates and self-evaluation, which are self-reported.
- No mechanism prevents the builder from writing plausible-looking INTENT comments that don't match actual CSS decisions. BV-08 checks brief-vs-output but NOT INTENT-vs-output.

**Pre-v5 comparison:** SAME tier (ADEQUATE). INTENT comments add structural friction against non-execution, but the core challenge (an LLM can produce compliant-looking artifacts without genuine effort) remains unsolved.

---

### D4: Execution-Recording Divergence
**Rating: ADEQUATE**

**Defense inventory:**
- Observer agent (NEW, v5 DESIGN): OBS-28 checks tracker fill rate (>=80%). OBS-29 verifies monotonically increasing timestamps. OBS-30 verifies output files table matches actual files on disk. These directly address the divergence between what the tracker says happened and what actually happened.
- Execution tracker template (pre-v5, enhanced in v5): New fields for Phase 2A/2B (two-pass build), REFINE targeting, observer compliance. 59->72 fields per the D5 orchestration design.
- Cross-run score tracker (NEW, v5 DESIGN, D13): Tracks PA-05 trajectory across passes and builds, creating an external record that cross-validates tracker self-reports.

**Gaps:**
- Observer protocol is DESIGN ONLY — not yet implemented. Until operational, tracker entries are purely self-reported by the orchestrator with zero independent verification.
- The observer can only verify artifacts (files exist, timestamps are consistent). It cannot verify INTERNAL decisions (did the orchestrator genuinely consider alternatives during mode selection?). This is acknowledged in the design doc (Section 6.3).
- Tracker field count increased from 59 to 72 (+13 fields). More fields = more opportunities for recording divergence. The observer's 80% fill rate check is a blunt instrument — a tracker that is 81% filled but has the most critical fields empty would pass.

**Pre-v5 comparison:** SAME tier (ADEQUATE). The observer protocol would upgrade this to STRONG if implemented, but as a design-only artifact, the effective defense level is unchanged.

---

### D5: Position Effect / Attention Decay
**Rating: STRONG**

**Defense inventory:**
- Two-pass builder architecture (NEW, v5): Splits the 833-line recipe into Pass A (COMPOSE, 808 lines, D-01 through D-06 + D-09) and Pass B (POLISH, 284 lines, D-07 + D-08 + accessibility + full self-eval). This is the PRIMARY D5 defense — later dispositions (D-07, D-08) move from position 600+ in a single context to position 1+ in a dedicated context.
- Pass A structural check (NEW, v5 DESIGN): Identity gates + zone count + CSS floor checked after Pass A, before Pass B spawn. Catches catastrophic attention decay failures early.
- Different Opus agent requirement: Pass B builder is a DIFFERENT agent than Pass A, preventing continuation bias from carrying attention decay patterns across passes.
- Disposition dependency analysis: D-07 (behavioral CSS) and D-08 (assessment) are correctly identified as having no structural dependencies on being in the same context as D-01-D-06. The split point is architecturally sound.

**Evidence of thoroughness:**
- D5 design doc (712 lines) includes complete dependency chain analysis, BV-07 volume analysis for both passes, REFINE interaction design (REFINE targets Pass A only, Pass B re-runs), 7-risk analysis with mitigations, and exact edit specifications for 6 files.
- Implementation confirmed: `artifact-builder-recipe-compose.md` (808 lines) and `artifact-builder-recipe-polish.md` (284 lines) exist with correct disposition assignments.

**Gaps:**
- Attention decay WITHIN Pass A still affects 7 dispositions (D-01 through D-06, D-09). D-06 and D-09 are at positions 500+ in the 808-line compose recipe. The design doc acknowledges this (Risk 5) and notes that removing 210 lines of D-07/D-08/Phase-5 content meaningfully reduces late-context content, but the risk is not eliminated.
- Pass A already exceeds BV-07 ceiling (2,500 lines) with current input files. This is a pre-existing issue that two-pass does not worsen, but the design doc flagging it as "pre-existing" does not fix it.

**Pre-v5 comparison:** UPGRADED from WEAK to STRONG. The two-pass split directly addresses the documented #1 predicted cause of sub-3.0 PA-05 scores.

---

### D6: Cross-File Reference Rot
**Rating: WEAK**

**Defense inventory:**
- Automated consistency checker (v5 DESIGN, Task #3): Described in task list as "Build automated reference consistency checker." No design document found in v5-design/ directory.
- Gate count propagation: Gate implementer report confirms 54->56 gate count updated across gate-runner-core.js, gate-manifest.json, and gate-runner-spec.md. This is manual consistency, not automated checking.
- MANIFEST.md as routing authority: Pre-v5, the MANIFEST routes files to agents. This creates a single source of truth for file references but doesn't detect when files referenced by MANIFEST no longer exist or have changed interfaces.

**Gaps:**
- No `verify-pipeline-structure.js` equivalent is operational. The old verifier (605 lines) is marked STALE (line 3: "STALE -- DO NOT EXECUTE") and is slated for archival in the D14 reduction plan.
- The D14 reduction plan archives `pipeline-structural-manifest.md` (679 lines, also STALE) to `_historical/`. The concept of automated structural verification is acknowledged as sound but the implementation is deprecated with no replacement built.
- Gate count updates were done manually by the gate implementer. The recipe implementer, orchestrator implementer, and ideology implementer each modified different files. No automated check verifies that all references to "56 gates" are consistent across MANIFEST, orchestrator, spec, and SKILL.md.
- The two-pass architecture introduces new file references: `artifact-builder-recipe-compose.md` and `artifact-builder-recipe-polish.md`. Any existing references to `artifact-builder-recipe.md` must be updated to point to the correct split file. The redirect header in the original file mitigates this but does not guarantee all consumers follow the redirect.

**Pre-v5 comparison:** SAME tier (WEAK). The consistency checker was listed as Task #3 (completed) but I found no design doc or implementation evidence in the v5-design directory. The pre-v5 structural verifier is STALE and being archived. D6 defense has not materially improved.

---

### D7: Defense Paradox
**Rating: ABSENT**

**Assessment:**
D7 asks: "Are so many defenses causing new failures?" This is the META crack dimension — it evaluates whether the v5 changes THEMSELVES create problems.

**Evidence of defense paradox risk in v5:**

1. **Net complexity budget:** v5 adds ~+300 lines of new features (two-pass builder, observer protocol, brief-diff gate, narration, ideology changes). The D14 reduction plan targets -2,130 lines of removal (orchestrator sections 10-16, ITEM citations, stale files, MANIFEST deduplication). IF the reductions are implemented, net complexity decreases by ~1,830 lines. IF ONLY the "definite" reductions are implemented (-1,806), the budget is roughly neutral. But the reductions are PLANNED, not IMPLEMENTED — they are specifications in `d14-reduction-plan.md`, not executed edits. The features ARE implemented. **Risk: features ship, reductions don't.**

2. **Gate count inflation:** 54 -> 56 gates (+2). The v5 design documents also propose GR-65 (structure preservation for two-pass, in d5-orchestration-protocol.md Section 9) and additional observer checks (OBS-01 through OBS-30). If all proposed gates and checks are implemented, the total verification surface grows substantially. Each gate is a potential false positive, a potential attention drain, and a potential source of threshold-gaming incentive.

3. **New file proliferation:** v5 creates 2 new recipe files (compose + polish), proposes 1 new standalone file (agent-prompts.md from MANIFEST extraction), and introduces 8 observer output files per build. The operational file count in va-extraction grows even as 50 historical files are planned for archival.

4. **Ideology changes create terminology churn:** The convergence model proposes renaming SHIP->RELEASE, SHIP WITH FIXES->POLISH, REFINE->IMPROVE, REBUILD->RETHINK. This affects every file in the pipeline. If partially implemented (some files use new names, some use old), D6 (reference rot) compounds with D7 (defense paradox).

5. **Two-pass creates new failure modes:** The D5 design doc identifies 7 risks (R1-R7), all MEDIUM or lower individually. But the interaction effects between two-pass architecture + observer agent + INTENT narration + ideology changes + brief-diff gate create a combinatorial space of potential interactions that no single design doc analyzes.

**What would constitute a D7 defense:**
- A complexity budget that tracks IMPLEMENTED additions vs IMPLEMENTED removals (not planned removals)
- A periodic simplification audit that asks "which defenses can be REMOVED because they haven't caught real issues in N builds?"
- A sunset protocol for defenses (the D14 design mentions this concept but only for historical content, not for active defenses)

**Pre-v5 comparison:** SAME tier (ABSENT). D7 was ABSENT pre-v5 and remains ABSENT. However, the RISK of D7 has INCREASED because v5 adds more defenses without a meta-defense against defense-induced complexity.

---

### D8: Spec Ambiguity
**Rating: ADEQUATE**

**Defense inventory:**
- All v5 design documents use explicit, binary specifications. INTENT comments require specific format (`<!-- INTENT [D-XX] location | decision | brief-ref | trade-off -->`). BV-08 uses numeric thresholds (80% per dimension). Observer checks are PASS/FAIL with explicit criteria.
- The two-pass architecture specifies explicit Pass A/Pass B responsibility boundaries with ADD-ONLY constraint for Pass B and prohibited operations list.
- Gate implementation report confirms consistent gate IDs, tiers, and thresholds across gate-runner-core.js, gate-manifest.json, and gate-runner-spec.md.

**Ambiguity found in v5 specs:**

1. **INTENT comment count:** Recipe says "17-22 total." GR-83 gate checks ">=15." Self-test says "fewer than 15 = under-narrated, more than 25 = over-narrated." Three different numbers for three different contexts. Which is authoritative?
   - ASSESSMENT: LOW risk. GR-83 (the enforcement mechanism) uses >=15, which is the most permissive. The recipe's "17-22" is a TARGET, GR-83's "15" is the FLOOR. This is intentional tiering (aspire to 17-22, fail at <15) but the relationship is not explicitly documented.

2. **"Different Opus agent" for Pass B:** The D5 orchestration protocol says "Pass B builder is a DIFFERENT Opus agent than Pass A builder." How is "different" verified? By spawn timestamp? By prompt text comparison? The observer check O-DIFFERENT-AGENT says "Compare builder agent description/spawn context between Pass 1 and REFINE. If identical prompt text detected, flag." But for Pass A vs Pass B (not REFINE), different prompts are structurally guaranteed (compose vs polish recipe) — so the "different agent" check is trivially satisfied by prompt text difference, even if the same underlying Opus instance processes both.
   - ASSESSMENT: MEDIUM risk. The intent is different CONTEXT WINDOWS (separate agents with separate conversation state), not just different prompts. The spec should say "spawned as separate Task tool invocations" rather than "different agent."

3. **Ideology verdict names:** The convergence model proposes RELEASE/POLISH/IMPROVE/RETHINK. The ideology implementer would need to update every reference across all files. The implementation report for the ideology implementer is not in the files I reviewed. Partial implementation creates ambiguity about which terminology is current.
   - ASSESSMENT: HIGH risk if partially implemented. The rename touches every pipeline file. Incomplete propagation means some agents see "SHIP" and others see "RELEASE" — breaking the pipeline's verdict routing logic.

4. **BV-08 RECOMMENDED tier vs BLOCKING behavior:** BV-08 is RECOMMENDED (does not block). But the design doc says dropped items feed the REFINE builder — implying BV-08 failure creates actionable work. If BV-08 fails but the verdict is SHIP (PA-05 >= 3.5), do the dropped items get logged or silently discarded?
   - ASSESSMENT: LOW risk. The orchestrator handles this (log in tracker as informational). But the spec should make this explicit.

**Pre-v5 comparison:** SAME tier (ADEQUATE). v5 specs are generally well-specified with binary rules, but the multi-document interaction introduces ambiguity at the boundaries (especially ideology terminology propagation).

---

### D9: Environmental Variance
**Rating: WEAK**

**Defense inventory:**
- Observer agent (DESIGN): OBS-22 checks PA auditor model = Opus. This is the ONLY v5 instrument that addresses environmental variance.
- Pre-v5: Fixed model specification (Opus for builders, Opus for PA auditors). Container width locked at 940-960px. Warm palette locked.

**Gaps:**
- **Model sensitivity is unaddressed.** The pipeline's most critical environmental variable — which Claude model processes the prompts — has no defense. v5 makes this WORSE by adding more complex prompts (two-pass coordination, INTENT narration, observer protocol) that may behave differently across model versions. The core finding from MEMORY.md ("Sonnet-for-builders is unexamined... Sonnet complies meticulously; Opus complies AND creates beyond constraints") remains unaddressed.
- **File ordering effects:** When the orchestrator spawns 9 PA auditors in parallel, the order in which their reports complete may affect the integrative auditor's synthesis (recency bias on the last-read report). No defense exists.
- **Token budget variance:** Different content lengths produce different input volumes for the builder. BV-07 checks a ceiling but does not account for how builder behavior changes with input volume.
- **Playwright timing:** Screenshot capture depends on render timing. No v5 change addresses the DPR workaround (960x600->1440x900 CSS) or its interaction with different viewport sizes.

**Pre-v5 comparison:** SAME tier (WEAK). v5 does not target D9. The observer's model check (OBS-22) is DESIGN-only and addresses a narrow slice of environmental variance.

---

### D10: Orchestrator Opacity
**Rating: STRONG**

**Defense inventory:**
- Observer agent protocol (NEW, v5 DESIGN): 30 binary checks across 7 categories (experiential scan, BEFORE checklist, screenshot protocol, BV gate execution, PA deployment, gate runner execution, tracker completeness). 11 BLOCKING checks with STOP authority. File-based communication only (no conversational manipulation). Minimal context at spawn (independence protection).
- STOP file mechanism: Observer writes `OBSERVER-STOP.md` on BLOCKING violation. Orchestrator required to check for this file before each phase transition.
- Pass-by-pass verification: 5 verification passes at phase boundaries + Pass R for REFINE.
- Observer independence protections: Minimal context, file-only data source, no conversational channel, binary checks only, immutable protocol, separate spawn.

**Assessment:**
The observer protocol is the most comprehensive single design document in v5 (594 lines). It directly addresses the core D10 problem (orchestrator grades its own exam) with a structurally independent referee. The 30 binary checks cover the most consequential orchestrator decisions: REFINE isolation (OBS-07), fresh-eyes preservation (OBS-21), screenshot completeness (OBS-10/11), gate integrity (OBS-27).

**Gaps:**
- Observer is DESIGN ONLY — not yet implemented in operational pipeline files. The design is thorough but has zero operational impact until the orchestrator is modified to spawn the observer and check for STOP files.
- The observer itself is an LLM. The design doc acknowledges this (Section 6.1) and provides mitigations (binary checks, minimal context, file-only communication), but the fundamental limitation remains: an LLM observer might be lenient, miss edge cases, or produce PASS on borderline situations.
- OBS-03 (experiential scan timing >= 90 seconds) has a false positive risk for simple pages. The doc suggests lowering to 60 seconds but does not define the threshold selection criteria.

**Pre-v5 comparison:** UPGRADED from ABSENT to STRONG (on design strength). The observer protocol is the single highest-value D10 defense possible — separation of execution from evaluation. However, the upgrade is conditional on implementation.

---

### D11: Mode/Context Sensitivity
**Rating: WEAK**

**Defense inventory:**
- Mode selection logic (pre-v5): APPLIED vs COMPOSED mode based on content characteristics. Mode determines which reference files the builder receives.
- Two-pass architecture (NEW, v5): Both passes operate in the same mode (APPLIED or COMPOSED). No mode-switching between passes.
- BV-06 (pre-v5): Anti-regression language scan at pipeline startup.

**Gaps:**
- **New features interact with different content types unpredictably.** The INTENT narration protocol expects 17-22 comments for a standard page. A very simple page (3 zones, minimal content) might have fewer meaningful decisions to narrate. A very complex page (8 zones, heavy code content) might need 30+. The fixed count range (15-25) does not adapt to content complexity.
- **Two-pass architecture assumes a composition/polish split that may not suit all content.** D-07 (Edge Intentionality) is classified as "polish" and deferred to Pass B. But for content that is primarily interactive (e.g., a tool comparison page with heavy hover interactions), D-07 IS the composition — not a polish layer. The disposition-to-pass mapping is content-agnostic.
- **BV-08 brief-diff assumes the brief is structured consistently.** The gate uses regex patterns to extract zone backgrounds, typography specs, etc. from the brief. If the brief format varies between content types (e.g., a code-heavy page might have different Tier 3 structure), extraction accuracy degrades.
- **Ideology changes (verdict taxonomy) interact with mode selection.** The IMPROVE verdict is now the "default path." But for APPLIED mode content (simpler, lower-tier), two-pass convergence may be unnecessary overhead. The convergence model does not differentiate its expectations by mode.

**Pre-v5 comparison:** SAME tier (WEAK). v5 adds features that are designed for a specific content profile (multi-zone, mixed-register, narrative+reference content). Interaction with other content types is not tested.

---

### D12: Downstream Propagation Failure
**Rating: ADEQUATE**

**Defense inventory:**
- BV-08 droppedItems routing (NEW, v5): When BV-08 detects compression loss, the specific dropped items propagate to the REFINE/IMPROVE builder as actionable input. This is a new propagation pathway that did not exist pre-v5.
- INTENT comments propagate to REFINE builder (NEW, v5): The REFINE builder reads existing INTENT comments from Pass 1 HTML and updates them (append, not replace). This creates a decision audit trail that propagates across passes.
- IMPROVEMENTS list propagation (NEW, v5 DESIGN): Builder self-improvement ideas route to orchestrator (raw), then to IMPROVE builder (generatively transformed). Explicit routing table in ideology-self-prompting.md (Section 3) specifies who sees and who does NOT see each artifact.
- Observer report propagation: OBSERVER-REPORT.md is written to the build output directory for post-run analysis.

**Gaps:**
- **Observer STOP file depends on orchestrator cooperation.** The orchestrator must check `ls OBSERVER-STOP.md` before each phase transition. If the orchestrator skips this check (voluntary non-execution, D3), the STOP signal does not propagate.
- **IMPROVEMENTS generative transformation is lossy by design.** The orchestrator converts diagnostic IMPROVEMENTS ("increase background delta from 8 to 20 RGB") to generative language ("the transition whispers where it could speak"). This transformation intentionally loses specificity. If the IMPROVE builder needs the specific value (8 RGB), it's gone.
- **Cross-run score tracker (D13) is DESIGN-only.** PA-05 trajectory data should propagate from one build to the next, but the tracker file is not yet integrated into the pipeline operational flow.
- **Two-pass artifact handoff has 9 required items.** The D5 orchestration protocol specifies 5 validation checks for the handoff. If any fail, the orchestrator retries Pass A (max 1 retry). But the validation checks are orchestrator self-checks, not observer-verified.

**Pre-v5 comparison:** UPGRADED from WEAK to ADEQUATE. New propagation pathways (BV-08 droppedItems, INTENT audit trail, IMPROVEMENTS routing) significantly improve signal propagation. But the observer's propagation depends on implementation, and the generative transformation is intentionally lossy.

---

### D13: Feedback Loop Absence
**Rating: STRONG**

**Defense inventory:**
- Cross-run score tracker (NEW, v5 DESIGN, Task #7): Tracks PA-05 trajectory across passes and across builds. Design includes: per-build rows, per-pass columns, delta computation, convergence assessment (ACCELERATING/STEADY/STALLING).
- IMPROVEMENTS longitudinal logging (NEW, v5 DESIGN): All IMPROVEMENTS lists from all passes are logged in the execution tracker. Patterns across builds reveal pipeline-level gaps ("builders consistently wish they could change X" -> X is a pipeline deficiency).
- Convergence tracking fields (NEW, v5 DESIGN): `PA-05 Pass 0`, `PA-05 Pass 1`, `PA-05 Delta`, `Convergence Assessment` in the execution tracker.
- Builder ideas tracking (NEW, v5 DESIGN): `BUILDER_IDEAS_COUNT`, `BUILDER_IDEAS_CATEGORIES`, `IMPROVE_BUILDER_IDEAS_USED`, `IMPROVE_BUILDER_NEW_IDEAS` fields enable learning about which idea types predict improvement.

**Assessment:**
v5 designs the feedback loop machinery comprehensively. The cross-run tracker enables learning from build history. The IMPROVEMENTS logging enables learning from builder self-knowledge. The convergence fields enable learning from iteration patterns. This is the first version of the pipeline with ANY cross-build learning mechanism.

**Gaps:**
- All D13 instruments are DESIGN-only. The cross-run tracker (Task #7) is marked completed but the operational integration (reading past scores to inform current build decisions) is not specified.
- The feedback loop has no ACTUATION mechanism — even if the tracker shows "builders consistently report background delta issues," there is no automated way to propagate this insight into the brief assembly or recipe for the next build. The learning is visible but manual.

**Pre-v5 comparison:** UPGRADED from ABSENT to STRONG (on design comprehensiveness). The pipeline finally has cross-build learning instruments. Implementation and actuation gaps prevent STRONG-operational rating.

---

### D14: Complexity-Induced Invisibility
**Rating: STRONG**

**Defense inventory:**
- D14 reduction plan (NEW, v5): 619-line document specifying exact edits for -2,130 lines of definite + moderate-risk removals. Targets: orchestrator sections 10-16 (-404 lines), ITEM citation stripping (-60 lines), section 8-9 compression (-58 lines), stale file archival (-1,284 lines), MANIFEST appendix E extraction (-309 lines), glossary trim (-15 lines).
- Historical file archival: 50 files (19,504 lines) to `_historical/` directory — extraction reports, buddy reviews, council docs, phase 7 audits, MONOLITHIC backups. Zero-risk moves that dramatically reduce directory noise.
- Implementation priority order: Low-risk first (archival), then moderate-risk (MANIFEST restructuring). Deferred: MANIFEST Section 4 deduplication (-217 lines, higher risk).
- Stale file identification: `pipeline-structural-manifest.md` and `verify-pipeline-structure.js` both self-identify as stale with "STALE -- DO NOT USE" headers. Archival is the correct response.

**Assessment:**
The D14 plan is the most operationally concrete document in v5. Every edit has exact line numbers, before/after text, and a priority ordering. The 6:1 offset ratio (1,806 lines removed vs 300 lines added) exceeds the target by 3-5x. The plan recognizes that the true bloat is behind explicit "STOP HERE" markers and in self-identified stale files — these are zero-risk, high-value removals.

**Gaps:**
- The reduction plan is a SPECIFICATION, not an executed set of edits. The implementation status of these reductions is unclear from the files I reviewed.
- The plan targets OPERATIONAL complexity (lines agents read during builds) but does not address CONCEPTUAL complexity (the number of interacting concepts an orchestrator must coordinate). v5 adds two-pass building, observer protocol, INTENT narration, brief-diff gate, and ideology changes — five new concepts. Even if lines decrease, the cognitive load increases.
- The MANIFEST Appendix E extraction creates a new file (`agent-prompts.md`) that must be maintained separately. This trades complexity in one file for complexity in file count.

**Pre-v5 comparison:** UPGRADED from ABSENT to STRONG. D14 was explicitly identified as "the only crack dimension that WORSENED in v4." The reduction plan directly addresses this with concrete, prioritized removals.

---

## Regression Analysis: Did Any Dimension's Defense WEAKEN from Pre-v5?

| Dimension | Pre-v5 Rating | v5 Rating | Change | Regression? |
|-----------|--------------|-----------|--------|-------------|
| D1 | ADEQUATE | ADEQUATE | = | NO |
| D2 | WEAK | STRONG | +2 | NO |
| D3 | ADEQUATE | ADEQUATE | = | NO |
| D4 | ADEQUATE | ADEQUATE | = | NO |
| D5 | WEAK | STRONG | +2 | NO |
| D6 | WEAK | WEAK | = | NO (but expected to improve, didn't) |
| D7 | ABSENT | ABSENT | = | NO (but risk increased) |
| D8 | ADEQUATE | ADEQUATE | = | NO |
| D9 | WEAK | WEAK | = | NO |
| D10 | ABSENT | STRONG* | +3 | NO |
| D11 | WEAK | WEAK | = | NO |
| D12 | WEAK | ADEQUATE | +1 | NO |
| D13 | ABSENT | STRONG* | +3 | NO |
| D14 | ABSENT | STRONG | +3 | NO |

*Design-strength rating. Operational strength is lower until implemented.

**No dimension's defense WEAKENED in v5.** Five dimensions improved, nine stayed the same. The unchanged dimensions are either already ADEQUATE (D1, D3, D4, D8) or structurally difficult to address (D6, D7, D9, D11).

---

## New Crack Dimensions Introduced by v5

### NEW-D15: Design-Implementation Gap

**Description:** v5 produces extensive, high-quality design documents (observer protocol: 594 lines, two-pass design: 712 lines, orchestration protocol: 795 lines) but the implementation status of these designs is uncertain. The design documents are thorough enough to create FALSE CONFIDENCE — the team believes D10 is defended because a 594-line observer protocol exists, but no observer agent has ever run.

**Severity:** HIGH. Design-only defenses provide zero operational protection while consuming the attention budget that might otherwise be spent on simpler, actually-implemented defenses.

**Mitigation:** Add a "DESIGN vs IMPLEMENTED" status field to every v5 defense. Track the implementation status in a single table. Prioritize implementing the highest-value designs (observer, cross-run tracker) over creating more designs.

### NEW-D16: Terminology Divergence

**Description:** The ideology convergence model proposes renaming all four verdict states (SHIP->RELEASE, SHIP WITH FIXES->POLISH, REFINE->IMPROVE, REBUILD->RETHINK). This touches every pipeline file. Partial implementation creates a state where some files use "SHIP" and others use "RELEASE" — the orchestrator must handle BOTH terminology sets, the weaver must map between them, and any hardcoded string matching in gates breaks.

**Severity:** MEDIUM-HIGH. The rename is well-motivated (balanced signal taxonomy) but operationally risky. It is the kind of change that looks simple in a design doc and causes cascading failures in implementation.

**Mitigation:** Either implement the rename atomically (all files in one commit) or defer it entirely. Do not partially implement. If implementing, add a compatibility layer in the orchestrator that accepts both old and new terminology during a transition period.

### NEW-D17: Two-Pass Coordination Failure

**Description:** The two-pass architecture introduces a handoff point between Pass A and Pass B that did not previously exist. The handoff requires 9 artifacts to transfer correctly, 5 validation checks to pass, and the orchestrator to correctly route the REFINE target (R-A vs R-C). Each of these is a potential failure point. A single orchestrator error (passing Pass B HTML to REFINE instead of Pass A HTML) could waste an entire REFINE cycle.

**Severity:** MEDIUM. The D5 design doc identifies this risk (Risk 6: REFINE Protocol Confusion) and mitigates it with file naming conventions (`p2a-compose-*.html` vs `p2b-polish-*.html`). The observer checks (O-PASS-A-COMPLETE, O-STRUCTURAL-CHECK, O-DIFFERENT-AGENT, O-HANDOFF-COMPLETE) would catch most failures if implemented.

**Mitigation:** File naming conventions + observer checks. Both are specified. Implementation is the gap.

---

## Recommendations

### Immediate (Before Next Build)

1. **Implement the observer agent.** The observer protocol is the single highest-leverage unimplemented defense. It upgrades D4 (tracker divergence) and D10 (orchestrator opacity) from ADEQUATE/STRONG-design to STRONG-operational. Implementation requires only 3 orchestrator additions per the design doc.

2. **Execute D14 reductions.** The reduction plan's "definite" tier (-1,806 lines) is zero-risk. Executing edits 1-6 from the plan (archive historical files, delete orchestrator sections 10-16, strip ITEM citations, archive stale files) would offset v5's feature additions and reduce D7 risk.

3. **Resolve terminology.** Either implement the SHIP->RELEASE rename atomically across all files, or explicitly DEFER it and mark all ideology design docs as "terminology change DEFERRED." Current ambiguity is a D6/D8 risk.

### Medium-Term (Within 3 Builds)

4. **Build the D6 consistency checker.** Task #3 (completed) but no evidence of operational output. The pipeline now has 56 gates, 20+ operational files, and a two-pass architecture. Manual consistency is insufficient.

5. **Track design-vs-implemented status.** Create a simple table: `| Defense | Design Doc | Implemented? | First Build Used |`. This addresses NEW-D15.

6. **Test two-pass with simple content.** The two-pass architecture is designed for multi-zone, mixed-register content. Run it on a simple 3-zone page to assess D11 (mode/context sensitivity) and calibrate INTENT comment expectations.

### Long-Term

7. **Address D7 with a sunset protocol.** Define criteria for REMOVING defenses: "If gate GR-XX has never produced a FAIL across 5+ builds, consider removing it." Without this, defense count only grows.

8. **Address D9 with model testing.** Run the same content through the pipeline with different Claude models to quantify environmental variance.

---

*End of crack dimension coverage audit.*
