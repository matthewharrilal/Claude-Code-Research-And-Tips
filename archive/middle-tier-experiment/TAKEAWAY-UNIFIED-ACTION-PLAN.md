# Unified Action Plan: Middle-Tier Retrospective Synthesis

**Date:** 2026-02-16
**Author:** cross-synthesizer (retro-analysis team)
**Sources:** 8 takeaway reports + master retrospective (9 files, ~25,000 lines total)
**Purpose:** Deduplicated, prioritized, sequenced roadmap from Middle-tier experiment to Ceiling launch

---

## 1. EXECUTIVE SUMMARY

The single most important insight from synthesizing all 8 reports: **The Middle-tier experiment proved that mechanism vocabulary creates "designed" output, but it also proved that vocabulary alone maxes out at "professionally stiff" -- and two independent, necessary ingredients are missing for the next quality level.** The first is **compositional purpose** (metaphor giving mechanisms a shared reason to exist), identified by the mechanism-effectiveness, expectations, failure-mode, and ceiling-projection analysts. The second is **collaborative refinement** (agents communicating to catch blind spots), identified by the process-metacognition, expectations, failure-mode, and blind-spots analysts independently. Neither alone is sufficient. The Ceiling experiment must test both together -- and the 14 process improvements documented here ensure the known Middle-tier failure modes don't compound with the new Ceiling-tier risks.

---

## 2. CONVERGENT FINDINGS

These findings appear across MULTIPLE reports. Ranked by number of independent sources.

### CF-1: Binary rules achieve 100% compliance; judgment rules achieve 0%
**The finding:** 7/7 binary soul constraints passed. 0/3 judgment rules met (token compliance, CPL, heading spacing). Perfect separation.
**Reports:** Process-metacognition (meta-lesson 5.1), Expectations (cross-cutting insight), Failure-modes (root cause for failures #2, #3, #9), Checklist (items #4, #13, #15), Master-retro (Finding 7)
**Confidence:** VERY HIGH (5 independent sources, zero counter-evidence)

### CF-2: Agent communication isolation directly caused quality gaps
**The finding:** Zero SendMessage calls prevented builder clarification, contributed to missing footer, and correlated with "professionally stiff" quality. CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT messaging).
**Reports:** Process-metacognition (change 2.1), Expectations (divergence #5), Failure-modes (failure #1 root cause), Ceiling-projection (opportunity 2.1), Master-retro (Finding 9)
**Confidence:** HIGH (5 independent sources, consistent cross-experiment evidence)

### CF-3: Missing footer is the smoking gun for prompt slicing vulnerabilities
**The finding:** Plan specified footer, builder didn't implement it. Root cause: prompt slicing created blind spots; builder saw 40% of master prompt.
**Reports:** Process-metacognition (change 2.3), Expectations (divergence #9), Failure-modes (failure #1 deep dive), Enrichment-gaps (gap 1.3), Checklist (MUST DO #3), Master-retro (Finding 2)
**Confidence:** HIGH (6 independent sources all identify same root cause)

### CF-4: "Designed" has two dimensions -- vocabulary fluency and compositional fluency
**The finding:** Middle crossed PA-05 threshold through vocabulary breadth but perceptual audit said "specifications applied correctly, not composition felt through." Vocabulary fluency (lookup) and compositional fluency (derivation) are separate capabilities.
**Reports:** Mechanism-effectiveness (Section 8 strategy), Expectations (divergence #3), Failure-modes (failures #4, #14), Ceiling-projection (opportunity 2.2), Master-retro (Finding 4)
**Confidence:** HIGH (5 independent sources, clean conceptual mapping)

### CF-5: Per-category minimums (M1) are validated but on n=1 evidence
**The finding:** 12 mechanisms across 5 categories achieved PA-05 4/4 and D3 3/3. Per-category structure works. BUT sample size is 1, confounding variables exist, and content was ideal-fit.
**Reports:** Process-metacognition (carry-forward 1.2), Expectations (divergence #6), Blind-spots (assumption #3 -- the MOST DANGEROUS), Checklist (MUST DO #2), Master-retro (Finding 1)
**Confidence:** HIGH for directional signal, MEDIUM for permanent application (blind-spots analyst raises valid n=1 concern)

### CF-6: Metronomic rhythm is the highest-leverage perceptual fix
**The finding:** Section spacing had correct compression ratio but zero variation. Every gap felt identical. 3-transition minimum (SMOOTH/BRIDGE/BREATHING) would create musical rhythm.
**Reports:** Mechanism-effectiveness (Section 5, entire analysis), Failure-modes (failure #5), Enrichment-gaps (gap 1.2), Checklist (SHOULD DO #12), Master-retro (Section V, defect 5)
**Confidence:** HIGH (5 sources, concrete implementation path)

### CF-7: Timing model is systematically wrong (8-11x error)
**The finding:** Tier model predicted 70-100 min, actual was 35 min. Planning model estimates sequential human time; agent teams execute in parallel.
**Reports:** Process-metacognition (meta-lesson 5.2), Expectations (divergence #1), Ceiling-projection (timing estimates), Master-retro (Finding 3)
**Confidence:** MEDIUM (4 sources agree on diagnosis, but n=1 for calibration)

### CF-8: Fresh-eyes zero-context auditing is irreplaceable
**The finding:** Context-starved perceptual auditor found WOULD-NOT-SHIP defect that loaded agents would rationalize. Complete separation of findings between fresh-eyes and loaded audits (zero overlap).
**Reports:** Process-metacognition (carry-forward 1.4), Expectations (divergence #10), Enrichment-gaps (gap 2.2), Master-retro (Finding 5)
**Confidence:** VERY HIGH (4 sources, confirmed across 6+ teams historically)

---

## 3. PRIORITY MATRIX -- ALL ACTIONS DEDUPLICATED

Every recommendation from all 8 reports, deduplicated, with acceptance criteria and source tracing.

### MUST DO BEFORE CEILING (Blocking)

**M-01: Apply M1 permanently to tension-composition skill**
- **What:** Replace "sample 2-4 mechanisms" with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+) at 3 locations in skill
- **Why:** Validated by 11 research agents + Middle experiment (12 mechanisms, PA-05 4/4, D3 3/3). THE experiment's primary output.
- **Files:** `~/.claude/skills/tension-composition/SKILL.md` (3 locations)
- **Acceptance criteria:** Zero instances of "sample 2-4" remain in skill; per-category table present in Phase 0D and Phase 4.0; skill version incremented
- **Dependencies:** None (standalone)
- **Sources:** Checklist #2, Enrichment gap 1.1, Process carry-forward 1.2, Master-retro IX.1
- **Estimated effort:** 15 minutes

**M-02: Enable inter-agent communication protocol**
- **What:** Agents must use SendMessage for clarifying questions, issue flagging, and iteration requests. File-bus remains primary output; flat topology preserved.
- **Why:** Missing footer directly traceable to file-only isolation. CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT). Quality requires collaboration, not just coordination.
- **Files:** Ceiling master execution prompt (create new), all agent prompt slices
- **Acceptance criteria:** Master prompt includes SendMessage capability section; builder can ask planner questions; auditor can flag issues to team-lead; test confirms messages flow
- **Dependencies:** Depends on M-07 (Ceiling execution plan must exist first)
- **Sources:** Checklist #1, Process change 2.1, Expectations divergence #5, Ceiling-projection 2.1, Master-retro Finding 9, IX.0
- **Estimated effort:** 30 minutes

**M-03: Add landmark completeness gate (Phase 2->3)**
- **What:** Binary check before launching auditors: header exists, footer exists, all named sections from plan exist in HTML
- **Why:** Prevents WOULD-NOT-SHIP footer-class defects. Costs 2 minutes, catches severity-1 issues.
- **Files:** Ceiling execution plan, team-lead prompt slice
- **Acceptance criteria:** Gate is blocking (team-lead does NOT proceed until all landmarks verified); verification checks header/footer/section count; if gate fails, team-lead requests builder fix
- **Dependencies:** Depends on M-07
- **Sources:** Checklist #3, Enrichment gap 1.3, Process change 2.3, Failure-modes fix #1, Master-retro Finding 2, IX.2
- **Estimated effort:** 15 minutes

**M-04: Add builder self-check for CPL and token compliance**
- **What:** Builder verifies CPL (45-80) using formula and token compliance (>=80%) using var() scan BEFORE writing file
- **Why:** 0/3 judgment rules met because builder had no verification method. Converting to binary self-check achieves 100% compliance.
- **Files:** Builder prompt slice, Appendix B Block 2
- **Acceptance criteria:** Builder prompt includes CPL formula; builder prompt includes token scan method; builder prompt lists approved raw value contexts; self-check is BEFORE file write
- **Dependencies:** Depends on M-07
- **Sources:** Checklist #4, Enrichment gap 1.6, Process change 2.2, Failure-modes fix #1, Master-retro IX.3-4
- **Estimated effort:** 20 minutes

**M-05: Establish Ceiling-specific per-category minimums**
- **What:** Define higher thresholds for Ceiling: S:2+, H:2+, C:3+, D:2+, N:2+. Expected natural landing: 11-15 mechanisms.
- **Why:** Middle deployed 12 with 1+ per category. Ceiling needs richer vocabulary requiring higher minimums.
- **Files:** Ceiling execution plan, planner prompt slice
- **Acceptance criteria:** Per-category minimum table in Ceiling plan; planner prompt includes these minimums; rationale documented
- **Dependencies:** Depends on M-01 (base M1 must be applied first)
- **Sources:** Checklist #5, Ceiling-projection Section 3, Master-retro X Phase 1
- **Estimated effort:** 10 minutes

**M-06: Add mechanism interaction requirement**
- **What:** For Ceiling, require at least 3 mechanism pairs that REINFORCE each other (multi-channel encoding of same dimension)
- **Why:** Closes the gap between "applied correctly" and "felt through." Middle had mechanisms coexisting independently; Ceiling needs them interacting.
- **Files:** Planner prompt slice, build plan template
- **Acceptance criteria:** Planner documents 3+ mechanism pairs with "reinforces" explanation; interaction table in build plan; example provided (border-weight + color encoding)
- **Dependencies:** Depends on M-05
- **Sources:** Checklist #6, Mechanism-effectiveness Section 4, Ceiling-projection risk 1.2, Master-retro Finding 1
- **Estimated effort:** 15 minutes

**M-07: Create Ceiling master execution prompt**
- **What:** The master orchestration document for Ceiling experiment, incorporating all Middle-tier lessons
- **Why:** Central dependency for M-02 through M-06 implementation. Must include all gates, protocols, and requirements.
- **Files:** `ephemeral/ceiling-experiment/MASTER-EXECUTION-PROMPT.md` (create new)
- **Acceptance criteria:** Includes metaphor derivation phases, communication protocol, gate structure, agent assignments, timing estimates
- **Dependencies:** Depends on M-01 (skill must be updated first)
- **Sources:** Checklist execution priority, Ceiling-projection Section 3, Master-retro XI
- **Estimated effort:** 2-3 hours (the largest single work item)

**M-08: Design blind novelty evaluation protocol**
- **What:** Evaluator receives 3 unlabeled pages, doesn't know which is the experiment. Prevents confirmation bias.
- **Why:** Middle novelty (3/3) assessed by evaluator who KNEW the hypothesis. External validity weak.
- **Files:** Novelty evaluator prompt slice, execution plan
- **Acceptance criteria:** Pages presented without labels in randomized order; evaluator has zero context on experiment goals; only after blind assessment are labels revealed
- **Dependencies:** Depends on M-07
- **Sources:** Checklist #7, Process anti-pattern 4.2, Master-retro Finding 7
- **Estimated effort:** 15 minutes

**M-09: Add dual perceptual auditor protocol**
- **What:** Two independent fresh-eyes auditors evaluate separately, then reconcile via pessimistic rule (disagreement = flag)
- **Why:** Addresses single-evaluator bias. Dual evaluation with reconciliation improves rigor at marginal cost (+5-7 min).
- **Files:** Ceiling execution plan, PA prompt slices (2 copies)
- **Acceptance criteria:** Two PA agents run in parallel; both receive identical zero-context inputs; reconciliation protocol documented
- **Dependencies:** Depends on M-07
- **Sources:** Checklist #8, Process change 2.4, Ceiling-projection opportunity 2.5, Master-retro X Phase 3
- **Estimated effort:** 20 minutes

**M-10: Generate programmatic audit checklist FROM build plan**
- **What:** Programmatic auditor checks what was PLANNED (extracts mechanism names from plan), not a generic list
- **Why:** Middle programmatic audit checked generic criteria but didn't verify all 12 planned mechanisms were deployed or that footer existed.
- **Files:** Programmatic auditor prompt slice
- **Acceptance criteria:** Auditor extracts mechanism names from plan; verifies each planned mechanism is deployed; reports PLANNED vs DEPLOYED vs MISSING
- **Dependencies:** Depends on M-07
- **Sources:** Checklist #10, Master-retro X Phase 3
- **Estimated effort:** 15 minutes

**M-11: Answer: Does builder need full catalog entry or just name?**
- **What:** Binary decision: builder sees (A) only names from plan, or (B) full catalog entries for deployed mechanisms
- **Why:** Footer bug suggests builder didn't know what "Footer Mirror" means. Determines builder prompt design.
- **Files:** Builder prompt slice
- **Acceptance criteria:** Decision documented with rationale; if (A), add SendMessage clarification fallback; if (B), add catalog excerpts to builder prompt
- **Dependencies:** None (decision can happen independently)
- **Sources:** Checklist #11, Master-retro XII.2
- **Estimated effort:** 10 minutes (decision) + 15 minutes (implementation)

---

### SHOULD DO BEFORE CEILING (High Value)

**S-01: Add rhythm variation requirement (3-transition minimum)**
- **What:** Page must include 3+ DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING) between sections
- **Why:** THE highest-leverage perceptual improvement. Without it, 14-15 mechanisms still feel metronomic.
- **Files:** `~/.claude/skills/tension-composition/SKILL.md` Phase 4.2B, build plan template
- **Acceptance criteria:** Binary rule in skill; planner documents transition types in build plan; minimum 3 distinct types
- **Sources:** Checklist #12, Mechanism-effectiveness Section 5, Enrichment gap 1.2, Failure-modes failure #5

**S-02: Make heading spacing ratio a binary rule (1.5:1)**
- **What:** Convert from judgment ("should be 1.5:1") to binary programmatic check
- **Why:** Binary rules achieve 100% compliance; this judgment rule achieved 0%.
- **Files:** Skill Phase 4.0 guardrails, programmatic audit checklist
- **Acceptance criteria:** Guardrails table includes 1.5:1 minimum; programmatic audit measures computed margin-top/bottom for each heading
- **Sources:** Checklist #13, Enrichment gap 1.4, Process change 2.8

**S-03: Establish measurement precision standards**
- **What:** All threshold comparisons report actual values and margins, not just pass/fail
- **Why:** PA-05b passed at exactly 2.0x (zero margin). "Technically passes" treated as "clearly passes."
- **Files:** Verdict template, audit output formats
- **Acceptance criteria:** Verdict includes MARGIN column; format: "PASS at 2.3x (threshold 2.0x, margin +0.3x)"
- **Sources:** Checklist #17, Process anti-pattern 4.1, Master-retro Finding 7

**S-04: Add weight distribution requirement**
- **What:** Require >= 2 focal points in bottom 50% of page to prevent top-heavy composition
- **Why:** Middle had dark header + diagram (both top half), nothing anchoring bottom half
- **Files:** PA question list, planner prompt
- **Acceptance criteria:** PA includes weight distribution question; planner documents focal point distribution
- **Sources:** Checklist #18, Mechanism-effectiveness Section 6, Failure-modes failure #6

**S-05: Re-estimate Ceiling timing using parallel agent model**
- **What:** Update from 150-220 min sequential to ~60-100 min parallel. Factor: 4-5 min/agent x 10-12 agents x 3-4 waves.
- **Why:** Middle's 8-11x discrepancy reveals planning model uses wrong frame (sequential human vs parallel agent).
- **Files:** Tier model documentation, Ceiling execution plan
- **Acceptance criteria:** New timing documented; includes metaphor derivation and messaging overhead; buffer added
- **Sources:** Checklist #9, Process meta-lesson 5.2, Expectations divergence #1

**S-06: Implement builder self-check GATE (pre-file-write)**
- **What:** Builder runs internal checklist (CPL, tokens, landmarks, heading ratio) before writing file. Cannot proceed if any fails.
- **Why:** 3/5 Middle defects catchable by builder before audit. Shifts quality LEFT.
- **Files:** Builder prompt slice
- **Acceptance criteria:** Pre-write checklist in builder prompt; all checks PASS before file write
- **Sources:** Checklist #15, Process change 2.2, Failure-modes fix #1

**S-07: Document two-dimension designed model**
- **What:** Vocabulary fluency (Middle) vs compositional fluency (Ceiling) as separate capabilities in tier methodology
- **Why:** Explains why Middle passes PA-05 but feels "stiff." Reframes tier progression.
- **Files:** Tier methodology, HANDOFF.md
- **Acceptance criteria:** Two-dimension table documented; Middle = vocabulary, Ceiling = compositional; "designed" reframed as vocabulary threshold
- **Sources:** Checklist #20, Expectations divergence #3, Master-retro Finding 4

**S-08: Maintain fresh-eyes zero-context auditing**
- **What:** PA auditor NEVER sees build plan, mechanism catalog, master prompt, or tier model
- **Why:** Confirmed across 6+ teams. Fresh eyes find what loaded agents rationalize.
- **Files:** PA prompt slice
- **Acceptance criteria:** PA prompt < 300 lines; contains only screenshots + PA questions + rating scale; zero design context
- **Sources:** Checklist #21, Process carry-forward 1.4, Enrichment gap 2.2

---

### DO DURING CEILING (Methodology Changes)

What's different about how Ceiling runs vs how Middle ran:

**DC-01: Metaphor derivation phases (NEW)**
- Phases 1-3: Tension extraction -> metaphor derivation -> semantic dimension mapping
- Metaphor resonance gate at Phase 1->2: authenticity, cross-domain, multi-dimensional (all 3 must pass)
- Deliverable: `01-metaphor-derivation.md`
- Source: Ceiling-projection Section 3

**DC-02: Mechanism selection through metaphor lens (CHANGED)**
- Middle: content feature -> mechanism (1:1 lookup)
- Ceiling: metaphor dimension -> multiple mechanisms encoding same dimension (1:many derivation)
- Each semantic dimension maps to 2-4 mechanisms in different CSS channels
- Source: Mechanism-effectiveness Section 8, Ceiling-projection Section 3

**DC-03: 4-scale fractal coherence (RAISED from 2)**
- Middle: Page + Component (2 scales, 1 consistency pair)
- Ceiling: Navigation + Page + Section + Component (4 scales, 6 consistency pairs)
- Hierarchical coherence check: Navigation -> Page -> Section -> Component must be consistent chain
- Source: Ceiling-projection risk 1.3

**DC-04: Agent messaging enabled (NEW)**
- Builder -> Planner: clarifying questions
- Auditor -> Team-Lead: mid-process issue flagging
- Team-Lead -> Builder: targeted iteration requests
- Message discipline: ONLY clarification/issues/iteration. NO status updates.
- Expected: 5-10 messages total, 10-20 min overhead
- Source: All 8 reports converge on this

**DC-05: Dual perceptual audit with reconciliation (NEW)**
- Two independent PA agents, identical inputs, parallel execution
- Reconciliation: agreement = high confidence; disagreement (pessimistic rule) = NO wins
- Source: Checklist #8, Ceiling-projection opportunity 2.5

**DC-06: Blind novelty evaluation (CHANGED)**
- Evaluator receives 3 unlabeled pages in random order
- No knowledge of hypothesis, no access to build plan
- Source: Checklist #7, Master-retro X Phase 4

**DC-07: Plan-derived programmatic audit (CHANGED)**
- Auditor extracts planned mechanisms from build plan
- Checks PLANNED vs DEPLOYED vs MISSING (not generic criteria)
- Source: Checklist #10, Master-retro X Phase 3

---

### DO AFTER CEILING (Deferred)

**D-01: Run Test A (Integrated Builder)** -- Test whether prompt slicing caused footer bug
**D-02: Run Test D (Contaminated Content-Selector)** -- Test whether firewall is necessary
**D-03: Add mechanism impact profiles to catalog** -- HIGH/MEDIUM/LOW visual salience per mechanism
**D-04: Add content affinity documentation** -- Which content structures favor which mechanisms
**D-05: Add discrete vs progressive application modes** -- Border-weight catalog clarification
**D-06: Create Middle-tier case study** -- Pattern-based (not metaphor) example for case studies
**D-07: Extract technical backlog from 08-retro files** -- 500+ lines of detailed implementation tasks
**D-08: Consolidate scattered mechanism count guidance** -- 4 slightly different versions across files
**D-09: Test Opus vs Sonnet for planner (ablation)** -- Cost optimization
**D-10: Run multi-content M1 validation** -- 5 content types to confirm per-category generalizes

---

## 4. CONFLICTS AND TENSIONS

### Conflict 1: "Apply M1 permanently" vs "n=1 is insufficient evidence"

**Report A (Checklist, Process, Enrichment, Master-retro):** M1 is validated. MUST DO NOW. Apply permanently before any next experiment. 11 research agents + 1 experiment = high confidence.

**Report B (Blind-spots):** n=1 sample size with confounding variables (Opus planner, ideal-fit content, 4 simultaneous changes). Per-category may only work for technical infrastructure docs. Recommends mini-ablation (3 content x 3 approaches, 3-4 hours, <$50) before permanent application.

**Which has stronger evidence?** Report A has MORE evidence (11+1 agents, consistent direction). Report B has a BETTER argument (n=1 IS genuinely insufficient for permanent specification change, and content affinity IS a real concern).

**RESOLUTION:** Apply M1 permanently WITH a caveat clause. The per-category minimum table should include:
- "Per-category minimum is the DEFAULT. If content genuinely cannot support a category (e.g., narrative with no hierarchical structure), document the exception with rationale."
- This preserves the validated improvement while acknowledging the blind-spots analyst's concern about forced mechanisms on ill-fitting content.
- Schedule multi-content validation (D-10) as follow-up, but do NOT block Ceiling on it.

**Rationale:** The cost of NOT applying M1 (continuing with "sample 2-4" which ALL 11 agents identified as THE limiting spec) is higher than the risk of over-specifying for some content types. The exception clause handles edge cases without blocking progress.

### Conflict 2: Two-Instance pattern (meta-analyst questions it) vs Opus builder (failure-analyst wants it)

**Meta-analyst says:** Two-Instance pattern (separate planner/builder) is "the pattern I'm least confident carrying forward." Missing footer suggests information loss between instances. No counterfactual. May need to test single-agent control.

**Failure-analyst says:** Use Opus for BUILDING (not just planning). Switch builder from Sonnet to Opus. Tests whether model capability affects "felt through" vs "applied correctly."

**These pull in opposite directions:** Meta-analyst wants to COLLAPSE the two instances into one (questioning separation). Failure-analyst wants to UPGRADE the builder instance (keeping separation but changing model).

**RESOLUTION:** Keep two-instance pattern for Ceiling but add clarification protocol (SendMessage) to mitigate information loss. Do NOT switch builder to Opus yet -- that confounds two variables (messaging + model change). Instead:
1. Ceiling-A: Sonnet builder WITH messaging (isolates communication effect)
2. If Ceiling-A still feels "professionally stiff," THEN test Opus builder (isolates model effect)
This respects the meta-analyst's concern (adding communication to mitigate information loss) while deferring the failure-analyst's recommendation (Opus builder) to avoid confounding variables.

### Conflict 3: Enrichment-analyst wants 47 gaps filled (~2,300 lines) -- is this realistic?

**Enrichment-analyst identified:** 47 documentation gaps across 8 files + 3 new files. Total: ~2,300 lines of new/modified content. Estimated 4-6 hours for critical path alone.

**Reality check:** 47 gaps is comprehensive but NOT all must happen before Ceiling. The enrichment-analyst's own sequencing identifies 5 CRITICAL PATH items (~300 lines) as the minimum:
1. Apply M1 permanently (100 lines)
2. Add landmark completeness gate (60 lines)
3. Elevate container width to non-negotiable (30 lines)
4. Create builder self-check protocol (300 lines)
5. Update HANDOFF.md with Middle results (60 lines)

**RESOLUTION:** Do the 5 critical path items before Ceiling (~550 lines, ~2 hours). Defer the remaining 42 gaps. Many gaps (impact profiles, content affinity, case studies) are NICE-TO-HAVE enrichments that improve documentation quality but aren't blocking. The Ceiling experiment itself will generate data that supersedes some of these gaps.

### Conflict 4: Same content for Ceiling (comparison rigor) vs content-metaphor fit risk

**Ceiling-projection and Expectations:** Use SAME SYSTEM content for clean tier comparison. Isolates tier variables.

**Blind-spots:** SYSTEM content may not SUPPORT rich metaphor. Technical infrastructure docs are concrete and procedural. Metaphor works best with abstract/conceptual content. Forcing metaphor on functional content may produce strained result. Recommends TWO Ceiling experiments (SYSTEM + abstract content).

**RESOLUTION:** Run Ceiling with SAME content first (comparison rigor wins for first test). If metaphor feels forced/strained and Ceiling doesn't clearly exceed Middle, THEN run Ceiling-B with abstract content before concluding "metaphor doesn't work." This is cheaper than running two experiments upfront, and the first result informs whether the second is needed.

---

## 5. BLIND SPOTS RESPONSE

The blind-spots analysis raises six unquestioned assumptions and four structural blind spots. Here is how they interact with the action plan:

### Are we building on shaky foundations?

**Partially yes.** The two most concerning blind spots:

1. **All evaluation is internal (Blind Spot 1).** PA-05 was designed by this project, measured by this project, against criteria derived from this project's past output. The action plan does NOT include external validation (professional designer review, user testing). This means even if Ceiling passes all 7 success criteria, we cannot claim the output is objectively "well-designed" -- only that it meets our internal definition. **Risk level: MEDIUM.** This doesn't block Ceiling, but every success claim should be qualified: "by internal criteria." External validation should happen before declaring the tier model "production-ready."

2. **n=1 evidence for permanent M1 application (Assumption 3).** The action plan applies M1 permanently (M-01) despite n=1 evidence. The conflict resolution above adds an exception clause, but the fundamental concern remains: we've tested per-category minimums on ONE content type with ONE planner. **Risk level: LOW-MEDIUM.** The exception clause mitigates the worst case (forced mechanisms on ill-fitting content). Multi-content validation (D-10) addresses this long-term.

### What's the real risk?

The blind-spots analyst's strongest critique: "You're efficiently reproducing your own patterns, but claiming this equals objective quality improvement without external validation."

This is true. The action plan optimizes INTERNAL quality metrics (PA-05, D3 novelty, soul compliance). It does not optimize USER OUTCOMES (task completion, comprehension, preference).

**Mitigation in the action plan:**
- Ceiling adds dual evaluators (M-09), reducing single-evaluator bias
- Ceiling adds blind novelty protocol (M-08), reducing confirmation bias
- Ceiling adds measurement precision (S-03), reducing marginal-pass normalization
- These are INCREMENTAL improvements to internal validity, not solutions to external validity

**What's NOT in the action plan (and should be, eventually):**
- Professional designer review of 2-3 pages (5+ professionals)
- User testing with real task completion metrics
- Cross-system comparison against Stripe/Vercel/Linear docs

These are deferred not because they're unimportant, but because they require different infrastructure (recruitment, budget, testing environment) than agent experiments.

---

## 6. THE SEQUENCED PATH FORWARD

Here is the roadmap from current state to Ceiling launch, in order.

**Step 1: Apply M1 permanently to skill** -- 15 min
Replace "sample 2-4 mechanisms" with per-category minimums at 3 locations. Add exception clause for content that genuinely cannot support a category. This is the experiment's most concrete, immediate output. No dependencies.

**Step 2: Answer builder context question (M-11)** -- 10 min
Decide: builder sees catalog entries or just mechanism names? This decision shapes the builder prompt for all future experiments. Quick decision based on footer root cause analysis. Recommend: builder sees name + 1-line description + SendMessage fallback for clarification.

**Step 3: Update critical documentation (5 enrichment gaps)** -- 2 hours
- Add landmark completeness gate to skill (60 lines)
- Elevate container width to NON-NEGOTIABLE in skill (30 lines)
- Add token compliance self-check to skill (50 lines)
- Add rhythm variation requirement to skill (40 lines)
- Update HANDOFF.md with Middle experiment results (60 lines)
These enrich the skill and continuity docs with validated findings before Ceiling consumes them.

**Step 4: Create Ceiling master execution prompt (M-07)** -- 2-3 hours
The single largest work item. Must incorporate: metaphor derivation phases, communication protocol, all gate structures, agent assignments, per-category minimums for Ceiling, mechanism interaction requirement, dual PA protocol, blind novelty protocol, plan-derived programmatic audit, timing estimates, success criteria (7 criteria from ceiling-projection).

**Step 5: Create agent prompt slices** -- 1-2 hours
Slice master prompt into agent-specific views: metaphor-agent, planner, builder, programmatic-auditor, PA-1, PA-2, comparative-auditor, novelty-evaluator, verdict-synthesizer. Each slice includes only what that agent needs + SendMessage capability.

**Step 6: Execute Ceiling experiment** -- 60-100 min
10-12 agents, flat file-bus + messaging, same SYSTEM content, metaphor-derived mechanism selection, 4-scale fractal coherence. Expected output: 9 files including metaphor derivation, build plan, HTML page, dual PA reports, comparison, novelty, verdict.

**Step 7: Synthesize and compare** -- 30-60 min
Direct comparison: Middle vs Ceiling on all 7 success criteria. Key question: does metaphor + messaging produce "felt through" quality? Result determines whether tier model holds and what comes next.

**Total estimated time: Steps 1-5 (preparation) = 5-8 hours. Step 6 (execution) = 60-100 min. Step 7 (synthesis) = 30-60 min.**

---

## 7. TOP 5 ACTIONS (THE SHORT LIST)

If we could only do 5 things before Ceiling, these are them:

### 1. Apply M1 permanently to skill (M-01)
**Defense:** This is the experiment's most validated finding. 11 research agents identified the problem. 1 experiment confirmed the fix. Every future page benefits. The cost of NOT doing this is continuing with a specification that ALL analysts identified as the single most limiting factor. 15 minutes of work for permanent improvement across all future builds.

### 2. Enable inter-agent communication (M-02)
**Defense:** 5 of 8 reports independently identified communication isolation as a quality-limiting factor. The missing footer is the smoking gun -- but the deeper issue is "professionally stiff" quality. CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT) provides cross-experiment evidence. Without messaging, Ceiling will repeat Middle's quality ceiling regardless of metaphor addition. This is the difference between testing "metaphor alone" (which may show marginal improvement) and testing "metaphor + collaboration" (which has the best chance of crossing "felt through" threshold).

### 3. Add landmark completeness gate (M-03)
**Defense:** Cheapest fix with highest severity prevention. 2 minutes of verification prevents WOULD-NOT-SHIP defects. 6 of 8 reports identified the missing footer as a critical process failure. Without this gate, Ceiling could produce a page with metaphor-driven composition that still ships without a footer -- technically rich, structurally incomplete.

### 4. Add builder self-check (M-04 + S-06)
**Defense:** 3 of 5 Middle defects (footer, token compliance, CPL) were catchable by builder before audit. Converting judgment rules to binary self-checks achieves 100% compliance (Theory 5, confirmed with 7/7 vs 0/3 split). This shifts quality detection LEFT (from audit to build), which is 10x cheaper. The Ceiling builder has MORE to get right (metaphor encoding, 4-scale coherence), so self-verification is even more important.

### 5. Create Ceiling execution prompt with metaphor derivation (M-07)
**Defense:** This is the delivery vehicle for everything else. Gates, protocols, communication rules, metaphor phases, agent assignments -- all live in the master execution prompt. Without it, improvements are documented but not operational. This is where research becomes execution. It must incorporate the 4 items above plus the Ceiling-specific methodology changes (metaphor derivation, 4-scale coherence, mechanism interaction requirement, dual PA, blind novelty).

---

*Synthesis complete. 8 takeaway reports + master retrospective -> 11 MUST DO items, 8 SHOULD DO items, 7 Ceiling methodology changes, 10 deferred items, 4 conflicts resolved, 5 top actions identified.*
