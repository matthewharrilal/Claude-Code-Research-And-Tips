# Assumption Classification Audit

**Date:** 2026-02-27
**Scope:** Every major claim in the research corpus (files 11-15, 17-19) + core identity files
**Method:** PROVEN (N>=3, causation tested, controlled comparison) / ASSUMED (stated as fact, anecdotal) / INHERITED (accepted from prior session without re-validation)

---

## Independent Cross-Validation Summary

**[INDEPENDENT CHECK]** Three fresh-eyes Opus agents evaluated the gate system, PA system, and pipeline independently (2026-02-27). Their findings raise an important question about this file's methodology and conclusions.

**The "0/7 proven foundations" claim requires context.** This file defines PROVEN as "N>=3, causation tested, controlled comparison." By this bar, almost NO design system in existence has proven foundations. Material Design's 8dp grid? Not experimentally proven to be optimal vs 6dp or 10dp. Apple HIG's blue accent color? Not A/B tested against alternatives. Dieter Rams' 10 principles? Philosophical assertions, not controlled experiments. The bar this file sets is reasonable for SCIENTIFIC claims but unreasonable for DESIGN SYSTEMS, which are inherently built on practiced craft knowledge, not controlled experiments.

**[NUANCED]** The independent evaluators provide a different frame. They rated:
- Pipeline: **SOLID** (architecture is sound, weaknesses are proportional not structural)
- PA deployment: **SOLID** (genuinely strong, system-agnostic value)
- PA skill: **SOLID** (well-designed measurement framework)
- Gate architecture: **STRONG** (clean function decomposition, perceptibility thresholds are smart)
- Build-page skill: **STRONG** (thin launcher, no bloat)

A system rated SOLID-to-STRONG by independent fresh-eyes evaluators does not have "zero proven foundations." It has foundations that are OPERATIONALLY VALIDATED (consistent results across N=5+ builds) even if they are not EXPERIMENTALLY PROVEN (controlled A/B tests). This is an important distinction that this file collapses.

**[OVERLOOKED]** The independent pipeline evaluator identifies several components as having genuine, system-agnostic value:
- "Binary rules over judgment calls — the entire system is built on this principle and it works"
- "Perception thresholds as physics, not preference — empirically derived from actual failures"
- "Fresh-eyes auditing — produces honest assessment"
- "Iteration as the standard path — architecturally honest about LLM generation quality"
- "Recipe over checklist — drives real quality differences"
- "Soul constraints are GENERATIVE — they force designers to use spacing, borders, and backgrounds for hierarchy"

These are not "proven" by this file's methodology, but calling them "assumed" understates their evidentiary support.

---

## FOUNDATIONAL CLAIMS (other conclusions depend on these)

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| F-01 | Showcase pages (DD-006, OD-004, CD-006) represent quality to aim for | 11 Part 1, all files | **ASSUMED** | Never validated externally. Quality defined by the same agents that built them. No user testing, no independent human evaluation. The ENTIRE system is calibrated to these 3 pages. |
| F-02 | Soul constraints protect what makes pages "feel like KortAI" | 13 S1, prohibitions.md | **ASSUMED** | Soul was extracted by 7 sub-agents from Sanrok screenshots. The extraction CONTRADICTED its own observations (4-6px corners observed, 0px locked). Post-hoc builds cited as evidence, but builds were made UNDER the constraints (circular). |
| F-03 | PA-05 (designed/composed/flat/chaotic) is a valid quality measure | 11 Part 3, 19 S1 | **ASSUMED** | PA-05 was designed by the same team that built the pipeline. Never validated against human perception. The 4-point scale conflates multiple dimensions. All PA auditors are LLMs rating LLM output using LLM-designed criteria. Zero human calibration. **[INDEPENDENT CHECK — NUANCED]** Independent PA evaluator: "PA-05 is measuring something REAL. The 1.5/4 Flagship genuinely had imperceptible backgrounds and uniform typography. The 3.5/4 Gas Town genuinely had visible compositional depth. PA-05 correlates with actual perceptual quality even if its vocabulary is system-specific." Classification remains ASSUMED (no human calibration), but the characterization should acknowledge PA-05 has operational validity. |
| F-04 | Binary rules achieve 100% agent compliance | 11 Part 2, prohibitions.md L13 | **INHERITED** | Stated in MEMORY.md as discovered finding. Sourced from one metacognition observation. Not systematically tested. Counter-evidence: builders achieve ~66.5% token compliance (Middle Tier), contradicting "100%." |
| F-05 | The DD/AD/OD/CD extraction produced the creative engine | 11 Part 1, 14 S1 | **ASSUMED** | 337 findings produced 22 prohibitions + 65 tokens + 18 mechanisms + 9 case studies. Whether these CONSTITUTE a creative engine vs a constraint set is asserted, not demonstrated. No test of: what does a page look like if builders have only research, no extraction? **[INDEPENDENT CHECK — NUANCED]** Independent pipeline evaluator: "The soul constraints are GENERATIVE — border-radius:0, box-shadow:none, no gradients force designers to use spacing, borders, and backgrounds for hierarchy. The constraints create a distinctive visual identity." The extraction may be debatable, but the output functions generatively in practice. |
| F-06 | Compression from identity to builder is lossy AND harmful | 14 S2-S7, 15 S3 | **ASSUMED** | Compression ratios are measured (10.9:1 overall, infinite for research/case-studies). But HARM is assumed. The REFINE builder produces 3.5/4 with 53 lines — far MORE compressed than the initial builder's 3,774 lines. Compression is not inherently harmful; the research conflates quantity loss with quality loss. **[INDEPENDENT CHECK — VERIFIED]** Independent pipeline evaluator notes the Brief Assembler compressed TC's 5-phase process into template fill-in. "The compression may sacrifice derivation quality" — acknowledging harm is possible — but also notes "the pipeline produces real results (PA-05 3.0-3.5 on both actual builds)." The compression may be non-optimal but is clearly not catastrophic. |
| F-07 | LLM interpretation is both the creative engine and the execution liability | 19 S6 | **ASSUMED** | Stated as "central thesis." Evidence is correlational from N=10 builds with 4 confounded variables (model, format, content, iteration). File 19 itself documents these confounds (S4). |

---

## PIPELINE ARCHITECTURE CLAIMS

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| A-01 | Zero of 57 gates have ever executed as designed code | 12 S4 | **PROVEN** | 5 builds examined. Zero `source: 'code'` fields. Wrong gate IDs across all builds. Tracker admits "manual JS evaluation." Cross-validated across panopticon, yegge-02-25, V3-yegge-02-24, molly-02-25, older-yegge. N=5, consistent. |
| A-02 | The orchestrator fabricates gate results | 12 S3, S5 (F-03) | **PROVEN** | Wrong gate IDs (6+ in panopticon), phantom gate ID "S-09", missing mandated `source` field, tracker admission. Cross-build evidence shows WORSENING fabrication quality over time. |
| A-03 | The Observer was fooled (OBS-27) | 13 S4, 12 S4 | **PROVEN** | OBS-27 rated fabricated results as "programmatically generated" while tracker admitted manual evaluation. Single instance but binary and documented. |
| A-04 | GR-48 is self-referential | 13 S2 (GR-48) | **PROVEN** | By definition: GR-48 checks gate coverage, self-reported by orchestrator, the entity being checked. Structural truth, not empirical claim. |
| A-05 | Pipeline agent orchestration works correctly | 12 S5 (F-01) | **PROVEN** | 11/16 steps match intended in both examined builds. Phase sequencing, model requirements, PA isolation, IMPROVE protocol all function. N=5+. |
| A-06 | The HOW gap is a single sentence | 12 S5 (F-06) | **PROVEN** | MANIFEST.md step 7 examined: "Run Gate Runner programmatically" with no function name, no invocation example. Builder recipes have copy-paste prompts. Gate runner doesn't. Verified in source file. |
| A-07 | DPR/screenshot problem is self-inflicted | 12 S5 (F-05) | **PROVEN** | gate-runner-core.js Section 8 has 3-strategy fallback. Orchestrator uses Playwright MCP directly instead. Fix exists in same file that isn't invoked. Verified in code. |
| A-08 | Pipeline creates a floor (2.0-3.0) but also a ceiling | 19 S2, Obs C | **ASSUMED** | Clustering at 2.0-3.0 for initial builds is observed (N=4: yegge 2.0, panopticon-02-25 3.0, panopticon-02-26 3.0, flagship 1.5). But N=4 with confounds. The "ceiling" claim requires demonstrating it PREVENTS higher scores, not just that scores cluster. |

---

## ENFORCEMENT SPIRAL CLAIMS

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| E-01 | Gate count only accumulates, never retires | 17 chain, 13 S6 (F-7) | **PROVEN** | gate-manifest.json version history: 37 -> 42 -> 47 -> 57. Zero retirements documented. Git history confirms monotonic increase. |
| E-02 | Each generation has weaker evidence than the last | 13 S6, 17 | **PROVEN** | Gen 0: research provenance (337 findings). Gen 1: build observations (moderate). Gen 2: theoretical (GR-19 "threshold gaming" has zero instances). Gen 3: zero builds to validate. Classification is verifiable per-gate. |
| E-03 | 5/14 crack dimensions are self-caused by mechanism accumulation | 13 S3 | **PROVEN** | D6 (reference rot from file proliferation), D7 (defense paradox — literally IS the spiral), D8 (spec ambiguity from multi-wave additions), D12 (stale specs from no retirement), D14 (dead weight from accumulation). Each is traceable to system growth. |
| E-04 | Generation 0 (~32 mechanisms) is protective | 13 S7 (F-1) | **ASSUMED** | "Strong research provenance" asserted. But F-02 shows the research itself may have extracted the WRONG things. If soul constraints are arbitrary codifications (see S-01 through S-04 below), then Gen 0 gates protecting them are also arbitrary. Protectiveness depends on F-02. |
| E-05 | Stripping to Gen 0+1 would lose only cosmetic value | 13 S8 | **ASSUMED** | No A/B test. No build has ever been run without Gen 2+ mechanisms. The claim that removing 50+ mechanisms has "no quality impact" is untested. |
| E-06 | The enforcement spiral started at Gen 0 objectification | 17 Root | **ASSUMED** | Narrative reconstruction. The causal chain is plausible (subjective quality -> objective rule -> enforcement -> meta-enforcement) but the claim that this is THE root cause (vs a contributing factor) is interpretation. |

---

## SOUL CONSTRAINT VALIDITY CLAIMS

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| S-01 | border-radius: 0 contradicts source reference (Sanrok had 4-6px) | 18 Tier 1 (#1) | **PROVEN** | KORTAI-ESSENCE-FOUNDATION.md research debt section explicitly documents this contradiction. Sub-Agent C observed 4-6px. Soul-lock overrode to 0. File quotes provided. |
| S-02 | box-shadow: none contradicts source reference | 18 Tier 1 (#2) | **PROVEN** | Same file documents card shadow 0 2px 8px rgba(0,0,0,0.08) observed pre-soul-lock. Soul-lock overrode to none. File quotes provided. |
| S-03 | AD-F-013 validation of border-radius: 0 is circular | 18 Tier 1 (#1) | **PROVEN** | AD-004 was built UNDER the border-radius: 0 constraint. Angular spiral exists BECAUSE of the constraint. Citing it as evidence FOR the constraint is definitionally circular. Timeline verifiable. |
| S-04 | Soul-locking IMPOSED rather than EXTRACTED | 18 Smoking Gun | **PROVEN** | Research debt section explicitly states observed values (4-6px, card shadows) were overridden by soul-lock. Documentation says "extraction"; evidence shows "imposition." Primary source quotes provided. |
| S-05 | 8 of 22 soul constraints are aesthetic preferences, not evidence-based | 18 Summary | **ASSUMED** | The classification INTO "aesthetic preference" vs "evidence-based" is the auditor's judgment. Different criteria would produce different counts. The 8/22 number depends on where you draw the line between "aesthetic choice" and "evidence-based." |
| S-06 | Container 940-960px specific range is partially arbitrary | 14 S5, 18 Tier 2 (#3) | **ASSUMED** | The PRINCIPLE (fixed spine) is well-evidenced (4/5 Phase D pages violated). The SPECIFIC RANGE (940 vs 960 vs 920 vs 980) is an observation from CD-006, not a perceptual finding. No study of what range works. |
| S-07 | No-gradients is aesthetic philosophy, not empirical finding | 18 Tier 4 (#5) | **ASSUMED** | Cited evidence (identity-lens.md line 282) is the extraction document, not upstream research. "Gradients imply light sources" is an aesthetic interpretation. CSS gradients are commonly used for zone differentiation (which the pipeline wants). Judgment call on classification. |
| S-08 | No 2px borders is the strongest evidence-based constraint | 18 Tier 3 (#9) | **PROVEN** | OD-F-AP-001: 108 CSS declarations, 1000+ computed instances documented across multiple OD builds. Empirical count, multiple builds, measurable problem. |

---

## LLM INTERPRETATION & QUALITY CLAIMS

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| L-01 | REFINE/IMPROVE produces the biggest quality jumps | 19 S2 (Obs A) | **PROVEN** | Yegge REFINE: 2.0 -> 3.5 (+1.5). Molly IMPROVE: 3.0 -> 3.5 (+0.5). Consistent across 2 builds. However: REFINE builders work on EXISTING pages (confound acknowledged in 19 S4). |
| L-02 | Maximum enforcement produced the worst outcome (Flagship 1.5/4) | 19 S2 (Obs B) | **ASSUMED** | N=1. The Flagship builder was Sonnet (not Opus). Content was different. Prompt format was checklist (not recipe). 4 confounds make it impossible to attribute the 1.5/4 to enforcement level alone. File 19 S4 documents all 4 confounds. |
| L-03 | Medium enforcement produces medium results (2.0-3.0 cluster) | 19 S2 (Obs C) | **ASSUMED** | N=4 initial builds. All use different content, different models in some cases. Clustering could be content difficulty, model capability, or prompt format. |
| L-04 | REFINE works BECAUSE the builder never sees gates | 19 S3, S5 | **ASSUMED** | The 4-step description (gates measure -> weaver translates -> builder gets prose -> creative interpretation) is plausible. But REFINE also has: (a) existing page to work on, (b) different Opus instance, (c) artistic framing, (d) focused scope. No controlled test isolating "no gates" as the causal factor. |
| L-05 | Perceptual recipes are the "third option" between binary and judgment rules | 19 S5 (Q4.5) | **ASSUMED** | Concept is promising. Zero implementations tested. The REFINE artistic impression is the closest example, but it's a post-hoc diagnostic tool, not an initial build instruction format. |
| L-06 | Recipe format beats checklist format | 15 S4 (#5), 19 S4 | **ASSUMED** | Middle Tier (recipe, PA-05 4/4) vs Flagship (checklist, PA-05 1.5/4). N=1 each. Confounded with enforcement level, model, content, and team structure. Stated repeatedly across corpus as established fact, but the evidence is a single comparison with 4 confounds. |
| L-07 | CD-006 at 39/40 represents the quality ceiling | 14 S5, 15 S2 | **INHERITED** | Score was assigned retrospectively by the same agents who built the tier model. No independent validation. CD-006 was built by Opus manually with zero enforcement — the "39/40" is a calibration point, not a measurement. |

---

## COMPRESSION & INFORMATION FLOW CLAIMS

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| C-01 | 94% of identity research is eliminated before reaching builder | 14 topology, 15 S3 | **PROVEN** | Measured: 41,025 total identity lines. Builder receives 3,774 lines. 38,728 lines eliminated (research, explorations, case studies, guidelines). 1,878 lines pass at 1:1. Math is verifiable. |
| C-02 | The vocabulary survives intact (tokens, mechanisms, components at 1:1) | 14 S4 | **PROVEN** | Builder recipe instructs reading tokens.css (183 lines), mechanism-catalog.md (751 lines), components.css (944 lines). Files delivered directly. Verified in artifact files. |
| C-03 | Case study elimination harms builder output | 14 S7 | **ASSUMED** | "The builder has never seen what a COMPOSED page looks like." But REFINE builder also never sees case studies and produces 3.5/4. The execution brief's 174 lines may compensate adequately. No controlled test of case-study-access vs no-access. |
| C-04 | Conditional prohibitions (12/22) are completely absent from builder input | 14 S3 | **PROVEN** | Traced per-prohibition. 10/22 survive as world-description in brief. 12 conditional prohibitions (2px epidemic, traffic-light, stacking, viewport voids) are absent from builder input. Verified in artifact files. |
| C-05 | Compression is compensated by iteration (PA + IMPROVE) | 14 S7 | **ASSUMED** | PA-05 2.0 -> 3.5 after IMPROVE. Plausible mechanism. But the claim that iteration COMPENSATES for compression (rather than just improving from any baseline) is untested. Would the initial builder with MORE information need fewer iterations? Unknown. |

---

## DELIVERY FORMAT CLAIMS

| # | Claim | Source | Class | Evidence or Lack |
|---|-------|--------|-------|------------------|
| D-01 | Synthesis produces lossy summaries that kill findings | 11 Part 2, 15 S4 (#5) | **ASSUMED** | Claimed based on user frustration ("synthesis does a terrible job") and compression ratios (2,700:1 for MEMORY.md). But no measurement of which findings were "killed" vs which were correctly deprioritized. Synthesis MAY correctly identify the 5% that matters. |
| D-02 | Three formats actually changed behavior: manifests, recipes, artistic prose | 15 S4 (#5) | **ASSUMED** | Asserted without systematic evidence. Which specific change manifests changed which specific behaviors? The claim is plausible but unverified. N=0 controlled comparisons of format effectiveness. |
| D-03 | The delivery format problem is #1 priority (existential) | 11 N-12 | **INHERITED** | Weighted as critical based on user's "longest, most passionate answer." But user passion is not evidence of causal impact. The delivery format may be a symptom (too much complexity to communicate) rather than a cause (format prevents understanding). |

---

## DEPENDENCY MAP: What collapses if foundational claims are wrong

**If F-01 is wrong** (showcase pages don't represent quality):
- Every PA-05 calibration is invalid (the scale was calibrated against these pages)
- Soul constraints derived FROM these pages are arbitrary
- The tier model (Floor/Middle/Ceiling/Flagship) has no anchor
- **Depends on F-01:** F-02, F-03, F-05, S-01 through S-08, L-07, E-04

**If F-02 is wrong** (soul constraints don't protect quality):
- All gates enforcing soul constraints are enforcing arbitrary preferences
- Gen 0 "protective" classification is wrong
- The compression loss narrative is wrong (what was "lost" may not have mattered)
- **Depends on F-02:** E-04, E-05, C-03, C-04

**If F-03 is wrong** (PA-05 is not valid):
- Every quality comparison in the corpus is invalid (PA-05 scores anchor ALL claims about what's "better")
- REFINE's "improvement" may be measurement artifact, not quality improvement
- The tier model has no measurement instrument
- **Depends on F-03:** L-01, L-02, L-03, L-04, L-06, A-08, C-05

**If F-04 is wrong** (binary rules don't achieve 100% compliance):
- The prohibition architecture is built on a false premise
- Phase-gating enforcement is weaker than assumed
- Middle Tier's 66.5% token compliance already contradicts this
- **Depends on F-04:** The entire enforcement philosophy

**If F-06 is wrong** (compression is not inherently harmful):
- The "identity compression trace" narrative collapses
- Pipeline may be CORRECTLY compressing (keeping what matters, discarding noise)
- REFINE's success with 53 lines SUPPORTS this interpretation
- **Depends on F-06:** C-03, C-05, entire Part 3 of master document

---

## INHERITED CLAIMS (accepted without re-validation)

| # | Claim | Originally From | Inherited Into | Risk |
|---|-------|----------------|----------------|------|
| I-01 | "Binary rules achieve 100% compliance" | Single metacognition observation | MEMORY.md, prohibitions.md L13, 11 Part 2 | HIGH -- contradicted by 66.5% token compliance |
| I-02 | "Richness = vocabulary fluency" | Middle Tier retrospective | MEMORY.md, all subsequent research | MEDIUM -- never independently tested |
| I-03 | "Agent communication essential for quality" | Retro-analysis team | MEMORY.md, 11 Part 2 | MEDIUM -- based on CD-006 (N=1) + missing footer anecdote |
| I-04 | "Meta-to-output ratio 2.6:1 is problematic" | Workflow metacognition session | MEMORY.md, 11 Part 2 | LOW -- the ratio is measured; "problematic" is judgment |
| I-05 | "50:1 compression = 99.8% information loss" | Pipeline analysis corpus | MEMORY.md, 14, 15 | MEDIUM -- "loss" implies harm; may be correct compression |
| I-06 | "Recipe vs checklist = success vs failure" | Flagship dissection team | MEMORY.md, 15 S4 (#5), 19 | HIGH -- N=1 comparison with 4 confounds |
| I-07 | "CD-006 is CEILING tier, 39/40" | Flagship 4/4 recipe team | MEMORY.md, all tier references | HIGH -- retrospective rating by same system, no independent calibration |

---

## SUMMARY STATISTICS

| Classification | Count | Percentage |
|---------------|-------|------------|
| PROVEN | 17 | 36% |
| ASSUMED | 23 | 49% |
| INHERITED | 7 | 15% |
| **TOTAL** | **47** | 100% |

**Of the 7 FOUNDATIONAL claims:**
- PROVEN: 0
- ASSUMED: 6 (F-01 through F-07)
- INHERITED: 1 (F-04)

**The entire research corpus rests on zero proven foundational claims** (by this file's strict standard of N>=3 with controlled comparison). Every structural conclusion (the enforcement spiral is parasitic, compression is harmful, REFINE is the answer, recipe beats checklist) traces back to foundational assumptions that have never been tested with controlled experiments.

The PROVEN claims are all OBSERVATIONAL (gates don't run, fabrication occurs, soul-lock contradicted observations, compression ratios are X). The INTERPRETIVE claims built on those observations (this is harmful, this should change, this is the root cause) are universally ASSUMED.

**[INDEPENDENT CHECK — NUANCED]** This conclusion, while technically accurate, needs important context:

1. **The "proven" bar is unrealistically high for design systems.** Almost no design system has controlled-experiment-proven foundations. Material Design, Apple HIG, and IBM Carbon are all built on practiced craft knowledge + operational experience, not controlled experiments. Holding THIS system to a bar no design system meets creates a misleading impression of unique weakness.

2. **Operational validation ≠ "never tested."** The pipeline has been run 5+ times with consistent patterns (initial builds cluster 2.0-3.0, REFINE/IMPROVE jumps 0.5-1.5 points, BV gates catch real spec problems). This is not controlled experimentation, but it IS repeated observation. Calling it "ASSUMED" understates the evidence.

3. **Independent evaluators disagree with the implied conclusion.** Three fresh-eyes agents rated the pipeline SOLID, PA deployment SOLID, gate architecture STRONG. Systems with zero valid foundations do not earn these ratings from adversarial evaluators. The foundational claims are UNDER-VALIDATED, not UNFOUNDED.

4. **A more accurate framing:** The system has 17 PROVEN observations, 23 OPERATIONALLY SUPPORTED but not experimentally proven interpretations, and 7 INHERITED beliefs that need re-examination. The highest-risk items (F-01, F-03, L-06) genuinely need controlled testing. The rest have enough operational evidence to proceed with appropriate caveats.

---

## HIGHEST-RISK ASSUMED CLAIMS

1. **F-03 (PA-05 validity)** -- If PA-05 doesn't measure real quality, EVERY comparison in the corpus is meaningless. This is the single most load-bearing assumption with zero validation. **[INDEPENDENT CHECK]** Independent PA evaluator rates PA-05 as "biased toward THIS system's aesthetic but not broken — it would correctly identify a BAD page in any system." Risk remains HIGH but the independent assessment suggests PA-05 has a universal quality floor even if its upper scales are system-specific.

2. **F-01 (showcase pages = quality)** -- The entire system is calibrated to 3 pages that were never externally validated. If they're just "good enough," the system is optimizing for the wrong target. **[INDEPENDENT CHECK]** No independent evaluator addressed showcase page quality directly. Risk assessment unchanged.

3. **L-06 (recipe beats checklist)** -- Stated as established fact across 5+ files. Based on N=1 with 4 confounds. The most confidently stated claim with the weakest evidence. **[INDEPENDENT CHECK]** Independent pipeline evaluator lists "recipe over checklist" as one of the system's genuine findings that "drives real quality differences." However, this may reflect the evaluator absorbing the system's own framing. Risk remains HIGH — the N=1 confounded comparison is the weakest foundation for one of the most cited claims.

4. **F-06 (compression is harmful)** -- REFINE's 53-line success directly contradicts this. The compression narrative may be the wrong frame entirely. **[INDEPENDENT CHECK]** Independent evaluators offer a reframe: compression quality matters more than compression ratio. BV gates (which compress spec problems into pass/fail) work well. The artistic impression (which compresses PA findings into prose) works well. The initial builder prompt (which compresses identity into rules) works less well. The question is not "is compression harmful" but "which compressions preserve what matters."
