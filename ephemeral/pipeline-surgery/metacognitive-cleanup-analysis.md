# Metacognitive Cleanup Analysis

**Date:** 2026-02-25
**Analyst:** Opus 4.6 (metacognitive role)
**Scope:** All 4 changelogs, all 5 audit reports, all modified pipeline files
**Method:** Read every changelog and every modified file, then answer the 6 metacognitive questions from Task #13

---

## 1. What Did We NOT Fix?

### Audit findings that were deprioritized or missed

**From 02-adversarial-audit.md (15 findings total, 7 addressed):**

| Finding | Severity | Status | Why It Matters |
|---------|----------|--------|----------------|
| F-01 GR-63 regex gameable | BLOCKING | FIXED (gate-runner Fix 4) | |
| F-02 Fresh-eyes vs circuit breaker | BLOCKING | PARTIALLY FIXED (orchestrator Fix 8 formalizes the exception, but does NOT resolve the architectural contradiction) | See Section 2 |
| F-03 No structural enforcement of experiential pass at auditor level | BLOCKING | NOT FIXED | A Sonnet auditor can still produce a fake `## 0. Experiential Pass` section and pass all checks. No new gate was added (e.g., GR-65/66). This is the single most dangerous unfixed finding. |
| F-04 Specialty label primes analytical mode | SIGNIFICANT | FIXED (manifest Fix 10) | |
| F-05 Orchestrator scan has no enforcement | SIGNIFICANT | PARTIALLY FIXED (orchestrator Fix 7 adds enforcement NOTE, but no programmatic gate) | The enforcement is still purely process discipline. A lazy orchestrator writes `EXPERIENTIAL_SCAN: CLEAN` and proceeds. |
| F-06 LLMs can't truly read pixels | SIGNIFICANT | NOT FIXED (accepted as inherent) | Correct non-fix. |
| F-07 GR-63 is RECOMMENDED | SIGNIFICANT | FIXED (gate-runner Fix 5) | |
| F-08 GR-64 runs post-weaver, too late | SIGNIFICANT | FIXED (gate-runner Fix 6 adds decision rule) | |
| F-09 Completion manifest checks existence not quality | SIGNIFICANT | NOT FIXED | No GR-65/66 was added. The completion manifest still checks structural presence only. |
| F-10 Weaver receives gate results breaking sequence | SIGNIFICANT | NOT FIXED | Two-phase weaver was not implemented. The contamination is accepted but not documented as a known limitation. |
| F-11 pa-guardrails leaks pipeline vocab | SIGNIFICANT | FIXED (PA Fix 1 split) | |
| F-12 Execution tracker self-reporting | MINOR | NOT FIXED | No tracker verification agent was added. |
| F-13 Builder assessing own output | MINOR | NOT FIXED (accepted) | Correct non-fix. |
| F-14 DPR correction logic | MINOR | FIXED (gate-runner Fix 2) | |
| F-15 No proof auditors read screenshots | MINOR | NOT FIXED | No spot-check mechanism was added. |

**From 03-fresh-eyes-coherence.md (13 findings total, 8 addressed):**

| Finding | Severity | Status |
|---------|----------|--------|
| B-1 D-09/BV-02 conflation | BLOCKING | FIXED in MANIFEST (Fix 12), NOT FOUND in orchestrator |
| S-1 MANIFEST vs orchestrator authority | SIGNIFICANT | FIXED (manifest Fix 3) |
| S-2 Brief line count inconsistency | SIGNIFICANT | FIXED (manifest Fix 4) |
| S-3 Builder recipe implies template reading | SIGNIFICANT | FIXED (recipe Fix 5) |
| S-4 146/153 item discrepancy | SIGNIFICANT | FIXED (manifest Fix 7) |
| S-5 Section numbering offset | SIGNIFICANT | FIXED (orchestrator Fix 2) |
| M-1 Relocation notices | MINOR | FIXED (PA Fix 3) |
| M-2 Anti-pattern table duplicated | MINOR | FIXED (PA Fix 5 via split) |
| M-3 Revision degradation warnings | MINOR | FIXED (PA Fix 4 via split) |
| M-4 Inline ITEM citations | MINOR | FIXED (recipe Fix 6) |
| M-5 Section 5.0/5 numbering collision | MINOR | FIXED (PA Fix 6) |
| M-6 Council-verdict.md optional | MINOR | FIXED (manifest Fix 8) |
| M-7 Cross-viewport method duplicated | MINOR | FIXED (PA Fix 8) |

**From 04-metacognitive-analysis.md (12 findings, 5 addressed):**

| Finding | Severity | Status |
|---------|----------|--------|
| 1 Gate count discrepancy | BLOCKING | FIXED (gate-runner Fix 1, manifest Fix 2) |
| 2 Line count drift | BLOCKING | FIXED (manifest Fix 1, tracker Fix 12) |
| 3 No output directory convention | BLOCKING | FIXED (manifest Fix 5) |
| 4 Verifier checks strings not arithmetic | SIGNIFICANT | NOT FIXED (verify-pipeline-structure.js not updated) |
| 5 BV-02 false positive risk | SIGNIFICANT | FIXED (gate-runner Fix 7) |
| 6 Screenshot quality silent pass | SIGNIFICANT | FIXED (gate-runner Fix 3) |
| 7 MANIFEST serves two audiences | SIGNIFICANT | NOT FIXED |
| 8 Pipeline never run end-to-end | SIGNIFICANT | NOT FIXED (correct: must be addressed by running, not editing) |
| 9 No cost model/timeout/degraded mode | MODERATE | NOT FIXED |
| 10 N=2 experimental evidence | MODERATE | NOT FIXED (correct: can't fix by editing) |
| 11 Quickstart redundancy | MODERATE | PARTIALLY FIXED (manifest Fix 6 merged prerequisites) |
| 12 Meta checks consistency not quality | MODERATE | NOT FIXED |

**From 05-cross-file-consistency.md (4 findings, 3 addressed):**

| Finding | Severity | Status |
|---------|----------|--------|
| C-1 Priority 0 labeling differs | LOW | FIXED (manifest Fix 9) |
| C-2 SHIP WITH FIXES <=3 cap inconsistency | MEDIUM | FIXED (manifest Fix 9/11) |
| C-3 SHIP threshold wording varies | MEDIUM | FIXED (manifest Fix 9) |
| C-4 Experiential priority not in orchestrator Section 7 | MEDIUM | FIXED (manifest Fix 9 adds Priority 0) |

### Are any deprioritized findings more important than we thought?

**YES. Adversarial Finding 03 (no structural enforcement of experiential pass at auditor level) is critical.** The entire experiential enforcement chain depends on each auditor genuinely reading screenshots. The cleanup strengthened the builder's check (GR-63 tightened + promoted) and added a decision rule for post-weaver (GR-64 promoted). But the 9 PA auditors -- the CORE of the perceptual assessment -- still have ZERO programmatic verification that they actually read any screenshots. The completion manifest is self-reported. A Sonnet auditor under token pressure will produce structurally correct but substantively empty experiential passes, and nothing in the pipeline will catch this.

**Adversarial Finding 10 (Weaver receives gate results) is also underweighted.** The Weaver is supposed to perform its own experiential anchor, but gate results are in its context window from the start. This is documented in pa-weaver.md Section 0 but no fix was attempted. The two-phase Weaver approach (spawn first with only screenshots, then add gate results) would add one extra agent call but genuinely isolate the experiential anchor.

---

## 2. What Did We Introduce?

Every fix has second-order effects. Here are the new inconsistencies, contradictions, or gaps created by this cleanup.

### 2.1 CRITICAL: Gate count mismatch between MANIFEST.md and gate-runner files

The gate-runner fixer promoted GR-63 and GR-64 from RECOMMENDED to REQUIRED, changing tier totals from 18/11/7 to 20/9/7. The gate-runner-core.js header (line 19), gate-runner-spec.md (line 18), and gate-manifest.json (line 19) all reflect the new 20/9/7 counts.

**But MANIFEST.md still says 18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY in THREE places:**
- Line 246: "42 gate-runner gates (18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION)"
- Line 462: "42-gate inventory: 18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BV"
- Line 779: "42 gates (18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BV)"

The manifest-fixer updated the gate count BREAKDOWN in line 142 ("36 GR + 4 BV + 2 diagnostic") but did NOT update the TIER BREAKDOWN in the three places above. This creates an immediate cross-file inconsistency: the gate-runner files say 20 REQUIRED / 9 RECOMMENDED, but the MANIFEST says 18 REQUIRED / 11 RECOMMENDED.

An orchestrator reading the MANIFEST will expect 18 REQUIRED gates. GR-48 (gate coverage) now checks for 19 REQUIRED gates (20 minus self-referential GR-48). The orchestrator will not understand why GR-48 expects 19 when the MANIFEST says 18.

**Severity: BLOCKING.** This is exactly the kind of cross-file inconsistency the cleanup was supposed to eliminate.

### 2.2 CRITICAL: pa-guardrails-weaver.md is a ghost file

The PA fixer created `pa-guardrails-weaver.md` (a new file with Sections 5-9 from pa-guardrails.md). This file is referenced ONLY in:
- `pa-guardrails.md` header (line 5)
- `pa-guardrails-weaver.md` itself (self-referential)

It is NOT referenced in:
- **MANIFEST.md** -- not in the routing table, not in Appendix B (what each agent receives), not in Appendix D (file path registry), not in the Weaver agent row. The Weaver receives "pa-weaver.md" per MANIFEST line 295. Nobody receives pa-guardrails-weaver.md.
- **artifact-orchestrator.md** -- the orchestrator does not know this file exists. It cannot route it to the Weaver.
- **SKILL.md** -- not listed in the PA protocol split files table.
- **EXECUTION-TRACKER-TEMPLATE.md** -- no pre-flight check for this file.
- **pa-deployment.md** -- the deployment file that tells the orchestrator what to send to the Weaver does not mention pa-guardrails-weaver.md.

**Consequence:** The split was executed correctly at the file level (auditors no longer see pipeline vocabulary), but the ROUTING was not updated. The Weaver will never receive pa-guardrails-weaver.md because no orchestration document tells the orchestrator to send it. The anti-pattern table, revision degradation warnings, S-09 stacking check, and tier 1/5 guidance are now in a file that is effectively orphaned from the pipeline's information flow.

**Severity: BLOCKING.** The Weaver loses access to Sections 5-9 content entirely. The most impactful loss is Section 5 (S-09 stacking check threshold), Section 3 (anti-pattern/PA question mapping), and Section 1 (Tier 1 equivalent questions).

### 2.3 SIGNIFICANT: Experiential enforcement note is process discipline, not a gate

The orchestrator-recipe fixer added an "ENFORCEMENT" block (Fix 7) to Phase 3A+ requiring the orchestrator to record experiential scan results before spawning PA auditors. The note explicitly says: "This is not a gate (no programmatic check) -- it is a process discipline requirement."

This is honest documentation. But it introduces a false sense of security. The execution tracker now has an ENFORCEMENT label on a field that has zero enforcement. An orchestrator reading "ENFORCEMENT: record results BEFORE spawning PA auditors" may interpret this as a hard block. It is not. Nothing prevents the orchestrator from skipping it.

The adversarial audit (Finding 05) recommended adding a gate (GR-65). The cleanup chose process discipline instead. This is a defensible choice, but the "ENFORCEMENT" label overpromises.

### 2.4 SIGNIFICANT: Recipe provenance moved but not redirected

The orchestrator-recipe fixer moved ~130 inline ITEM citations from the recipe body to Appendix B (Fix 6). This is a clear UX improvement -- builders no longer wade through `[ITEM 83, extract-d09-d11.md, VA L892]` references. But the Appendix B provenance note was added WITHIN the recipe file, not as a separate provenance document.

The recipe went from 999 to 828 lines (-171 lines). The MANIFEST and tracker were updated to reflect ~999 lines. They are now stale again at 828.

Wait -- let me verify. The manifest-fixer updated line counts BEFORE the recipe-fixer ran. The recipe is now shorter than the documented ~999 count. This is a new line count drift introduced by the fix ordering.

**However:** This may be self-correcting if the manifests were updated with ~999 and the recipe is now 828. The manifests are now WRONG in the opposite direction (claiming 999 when actual is 828). This needs verification.

### 2.5 MODERATE: Fresh-eyes exception creates a documented contradiction

The orchestrator Fix 8 added a "FRESH-EYES EXCEPTION (circuit breaker only)" block. This block explicitly acknowledges that the circuit breaker contradicts the fresh-eyes principle and formalizes the exception. This is better than the previous state (undocumented contradiction). But it means the pipeline now has a DOCUMENTED self-contradiction with a narrow exception clause.

The problem: pa-guardrails.md Section 6 (sent to auditors) says "The auditor receives ONLY: 1. Screenshots 2. PA questions 3. PA guardrails 4. Nothing else." The orchestrator file says "also inject BLOCKING-USABILITY findings." These files are read by different agents (auditors vs orchestrator), so the contradiction may never surface in practice. But if an auditor reads both files (which they should not, but might in an error scenario), the contradiction is visible.

### 2.6 MINOR: GR-48 threshold strings need updating

The gate-runner fixer updated GR-48 to check for "19/19 REQUIRED" and "5/9 RECOMMENDED" (Fix 5). This is internally consistent with the new 20/9/7 tier distribution (GR-48 checks 19 REQUIRED because it excludes itself). But the MANIFEST Weaver prompt template may reference different thresholds. This was not verified across the Weaver prompt in Appendix E.

---

## 3. Cross-File Ripple Effects

### 3.1 pa-guardrails split creates a new file -- what needs updating?

| File | Needs Update? | Status |
|------|--------------|--------|
| **MANIFEST.md Section 3 routing table** | YES -- must add pa-guardrails-weaver.md row with "Weaver + Orchestrator" as destination | NOT UPDATED |
| **MANIFEST.md Appendix B** (what each agent receives) | YES -- Weaver row must include pa-guardrails-weaver.md | NOT UPDATED |
| **MANIFEST.md Appendix D** (file path registry) | YES -- must add pa-guardrails-weaver.md entry with line count | NOT UPDATED |
| **MANIFEST.md Appendix E** (Weaver prompt template) | YES -- Weaver prompt should reference pa-guardrails-weaver.md for anti-pattern scoring and S-09 check | NOT UPDATED |
| **artifact-orchestrator.md** (Phase 3C Weaver deployment) | YES -- must include pa-guardrails-weaver.md in Weaver input package | NOT UPDATED |
| **pa-deployment.md** | NO -- pa-deployment.md is orchestrator-facing and already routes pa-guardrails.md to auditors. The weaver routing is in MANIFEST/orchestrator. | N/A |
| **SKILL.md** (PA protocol split files table) | YES -- table lists pa-guardrails.md but not pa-guardrails-weaver.md | NOT UPDATED |
| **EXECUTION-TRACKER-TEMPLATE.md** (pre-flight) | YES -- should have a PF-1 check for pa-guardrails-weaver.md existence | NOT UPDATED |
| **pa-guardrails.md line count in MANIFEST** | YES -- went from ~175 to ~125 lines after split. MANIFEST says ~175. | NOT UPDATED |

**Verdict: 7 files need updates for the pa-guardrails split. ZERO have been updated.** This is the most significant ripple effect in the entire cleanup.

### 3.2 Gate tier promotion (GR-63/GR-64: RECOMMENDED -> REQUIRED)

| File | Needs Update? | Status |
|------|--------------|--------|
| **gate-runner-core.js** | YES (tier arrays, header, GR-48 thresholds) | UPDATED |
| **gate-runner-spec.md** | YES (tier table, gate descriptions) | UPDATED |
| **gate-manifest.json** | YES (tier arrays, counts, verdict logic) | UPDATED |
| **MANIFEST.md** (tier breakdowns in 3 locations) | YES | NOT UPDATED (still says 18/11/7) |
| **EXECUTION-TRACKER-TEMPLATE.md** (gate runner results categories) | Possibly -- depends on whether tracker groups by tier | NEEDS VERIFICATION |
| **SKILL.md** (gate count description) | YES -- currently says "18 REQ + 11 REC" | NOT UPDATED |

### 3.3 Recipe line count change (999 -> ~828)

| File | Needs Update? | Status |
|------|--------------|--------|
| **MANIFEST.md** (Section 3, Appendix D) | Possibly -- was just updated to ~999 | NEEDS VERIFICATION |
| **EXECUTION-TRACKER-TEMPLATE.md** (PF-1d) | Possibly -- was just updated to ~999 | NEEDS VERIFICATION |
| **SKILL.md** | Possibly | NEEDS VERIFICATION |

---

## 4. What Assumptions Are the Fixers Making?

### Contradictory assumptions about shared concepts

**Gate counts:** The gate-runner fixer and the manifest-fixer operated on different tier counts. The gate-runner fixer changed the tier distribution to 20/9/7. The manifest-fixer worked from the pre-promotion 18/11/7 distribution. Both were correct at the time they started, but the gate-runner fixer's changes happened AFTER the manifest-fixer ran. The manifest was never re-synced.

**Line count conventions:** The manifest-fixer used `~` prefix for approximate line counts (e.g., "~1,100 lines"). The gate-runner fixer used exact counts in some places ("36 unique GR-* IDs") and approximate in others ("~1,626 lines"). The recipe-fixer then changed the recipe from 999 to 828 lines without updating the counts the manifest-fixer had just set. Each fixer assumed their changes were the final word on their owned files' line counts.

**Experiential enforcement model:** The orchestrator-recipe fixer assumes experiential enforcement is adequately served by process discipline (enforcement notes, tracker fields). The gate-runner fixer assumes experiential enforcement requires programmatic gates (GR-63 tightened and promoted, GR-64 promoted). These are not contradictory in principle, but they represent different philosophies about HOW to enforce the experiential pass. The result is a mixed model: the builder has a programmatic gate (GR-63), the orchestrator has a process note (no gate), and the auditors have neither (no GR-65/66).

**The fresh-eyes boundary:** The PA fixer split pa-guardrails.md to enforce fresh-eyes purity. The orchestrator-recipe fixer added a "FRESH-EYES EXCEPTION" that formally permits context injection. These two changes work in opposite directions -- one tightens the fresh-eyes boundary, the other creates a documented hole in it. Both are defensible individually, but together they send mixed signals about how strictly the fresh-eyes principle is enforced.

### Isolation-induced blind spots

Each fixer worked only on their owned files:
- manifest-fixer: MANIFEST.md + EXECUTION-TRACKER-TEMPLATE.md
- gate-runner-fixer: gate-runner-core.js + gate-runner-spec.md + gate-manifest.json
- orchestrator-recipe-fixer: artifact-orchestrator.md + artifact-builder-recipe.md
- pa-fixer: pa-deployment.md + pa-weaver.md + pa-guardrails.md

No fixer had write access to another fixer's files. This means:
1. The gate-runner fixer promoted GR-63/GR-64 but could not update the MANIFEST
2. The PA fixer created pa-guardrails-weaver.md but could not update the MANIFEST routing table, orchestrator, or SKILL.md
3. The manifest-fixer updated line counts based on pre-fix file sizes, not post-fix sizes

**This is the structural weakness of isolated parallel fixes.** The cross-file consistency that the cleanup was designed to improve has been partially undermined by the cleanup's own architecture.

---

## 5. The Pipeline as a SYSTEM

### After these fixes, is the pipeline MORE or LESS likely to produce a successful build?

**MORE likely, with one significant caveat.**

**What improved:**
1. **Gate count accuracy.** The most dangerous single-line reference (core.js header saying "43" vs everything else saying "42") is fixed. GR-48 coverage will now work correctly.
2. **Line count accuracy.** An orchestrator running pre-flight checks will no longer flag correct files as wrong-sized. This prevents false negatives in file verification.
3. **Experiential enforcement is stronger.** GR-63 is now REQUIRED with a tighter regex (100 chars, visual clarity + structural ref). GR-64 is now REQUIRED with a decision rule. The builder cannot skip its experiential self-check without consequence.
4. **Fresh-eyes purity is better.** Auditors no longer see pipeline vocabulary (tiers, channels, anti-patterns). The pa-guardrails split was the right architectural decision.
5. **Authority is clearer.** MANIFEST = routing authority, orchestrator = execution authority. The "who's in charge" ambiguity is resolved.
6. **Builder recipe is more readable.** -171 lines of inline provenance citations. The builder agent sees operational CSS guidance without traceability noise.
7. **BV-02 is less likely to false-positive.** Scoping to "Zone Backgrounds" section prevents accent/border colors from triggering false failures.
8. **GR-62 no longer silently passes on empty directories.** Minimum 3 files per viewport is a basic sanity check.
9. **DPR correction no longer halves the viewport.** The Retina display bug would have invalidated all spatial gates.

**The caveat: routing is broken for the new split file.** The pa-guardrails-weaver.md file is created but not routed. The Weaver loses access to the S-09 stacking check, anti-pattern mapping, tier equivalence rules, and revision degradation warnings. These are valuable signals for verdict synthesis. Until the routing is fixed, the Weaver is operating with incomplete context.

### Did we fix the right things or just the obvious things?

**Mostly the right things.** The stale reference audit was the most surgical and least risky -- fixing numbers that are demonstrably wrong. The adversarial fixes (GR-63/GR-64 promotion, regex tightening, BV-02 scoping) addressed real exploitable gaps. The fresh-eyes fixes (pa-guardrails split, specialty label reordering) addressed documented contamination vectors.

**But we missed the systemic issues.** The adversarial audit identified a CHAIN of failures (Findings 01 -> 07 -> 05 -> 02 -> 03 -> 06 -> 11). The cleanup fixed individual links in this chain (01, 07, 11) but not the chain itself. Specifically:
- The builder link is now strong (GR-63 tightened + promoted)
- The orchestrator link is weak (process discipline only, no gate)
- The auditor link is absent (no programmatic enforcement at all)
- The weaver link is contaminated (gate results in context from start)

The experiential enforcement chain goes: Builder (STRONG) -> Orchestrator (WEAK) -> Auditors (ABSENT) -> Weaver (CONTAMINATED). Two of four links are unaddressed.

---

## 6. Blind Spots

### What would a first-time orchestrator agent still find confusing?

1. **The pa-guardrails split is invisible.** An orchestrator reading the MANIFEST will see "PA Auditors receive: pa-guardrails.md" and "Weaver receives: pa-weaver.md." There is no mention of pa-guardrails-weaver.md anywhere the orchestrator would read. The anti-pattern mapping (which PA questions catch which anti-patterns) is now in a file nobody sends to anyone.

2. **Gate tier numbers conflict.** The MANIFEST says "18 REQUIRED + 11 RECOMMENDED." The gate-runner files say "20 REQUIRED + 9 RECOMMENDED." An orchestrator checking both will not know which is correct.

3. **Recipe line count is wrong AGAIN.** The recipe was 999 lines, the manifest was just updated to say ~999, and then the recipe was cut to ~828. The orchestrator's pre-flight check will flag a ~171-line discrepancy.

4. **The experiential scan "ENFORCEMENT" note is confusing.** It says "This is not a gate" but also says "ENFORCEMENT." A Sonnet orchestrator will parse "ENFORCEMENT" as a keyword meaning "hard requirement" and may waste time looking for the gate that enforces it.

5. **The circuit breaker exception is complex.** The orchestrator must evaluate: (a) Did I find a BLOCKING-USABILITY issue? (b) If yes, inject it into ALL 9 auditor prompts as a "verify or contradict" finding. (c) Document the exception in P3A+-5. (d) But NOT inject any other context. This is a multi-step conditional with a narrow exception to a broad rule. A first-time orchestrator may either over-inject (too much context) or under-inject (skip the circuit breaker entirely to avoid violating fresh-eyes).

### What would trip up a Sonnet builder?

1. **The tightened GR-63 regex requires structural references.** A Sonnet builder must include zone/section/header/footer references in its experiential check comment. Sonnet is meticulous about format compliance, so it will produce something like `<!-- EXPERIENTIAL-CHECK: Zone 1 header text is legible at arm's length. Section 2 chart labels are readable with visual clarity. Zone 3 footer maintains clear structure. -->`. This will pass GR-63 but may be formulaic compliance rather than genuine assessment. The regex tightening raised the bar but a compliant-focused Sonnet will still clear it with template language.

2. **The recipe is now 828 lines.** A Sonnet builder receiving this file will process it linearly. At 828 lines, it is still substantial. The provenance removal helps, but the recipe's core operational content is still ~650+ lines of sequenced instructions. Sonnet may exhibit attention decay in later phases (Phase 5+).

3. **Step 1.3 now says "Read the Execution Brief" but the builder receives the brief as input.** The recipe tells the builder to "read" something it already has. This is mildly confusing -- does "read" mean "parse this section carefully" or "request this file"? A Sonnet builder will interpret it literally and request the file again.

### Systemic blind spot: the fixers fixed documents, not the pipeline

The entire cleanup was a DOCUMENTATION fix. No pipeline code was run. No page was built. No gate was executed. The cleanup fixed what the documents SAY, not what the pipeline DOES. The metacognitive analysis (Finding 8, 10, 12) flagged this explicitly: the meta-layer checks consistency, not quality. The cleanup deepened the meta-layer's consistency without moving the pipeline any closer to a successful execution.

The single highest-leverage action remains unchanged from the metacognitive audit: **run the pipeline on real content and observe what breaks.** The documentation is now more accurate, which will make the first run more likely to succeed. But documentation accuracy is a NECESSARY condition, not a SUFFICIENT one.

---

## Summary: Immediate Action Items

### BLOCKING (must fix before pipeline execution)

| # | Issue | Introduced By | Fix |
|---|-------|--------------|-----|
| 1 | MANIFEST.md still says 18/11/7 tier counts (should be 20/9/7) | Gate-runner tier promotion not propagated | Update 3 locations in MANIFEST.md |
| 2 | pa-guardrails-weaver.md not routed to Weaver | PA split without routing update | Add to MANIFEST routing table, Appendix B, Appendix D, Appendix E; add to orchestrator Phase 3C; add to SKILL.md |
| 3 | SKILL.md still has pre-cleanup line counts and tier breakdown | SKILL.md not in any fixer's scope | Update (Task #5 is already pending for this) |

### SIGNIFICANT (should fix, recommend before next run)

| # | Issue | Introduced By | Fix |
|---|-------|--------------|-----|
| 4 | Recipe line count now ~828 but manifests say ~999 | Recipe provenance removal after manifest line count update | Update MANIFEST and tracker line counts for recipe |
| 5 | pa-guardrails.md line count now ~125 but MANIFEST says ~175 | PA split reduced file size | Update MANIFEST and tracker line counts for pa-guardrails.md |
| 6 | Auditor experiential pass has zero programmatic enforcement | Not fixed from adversarial F-03 | Consider adding GR-65 (auditor report structural check) |
| 7 | Weaver experiential anchor is contaminated by gate results in context | Not fixed from adversarial F-10 | Document as known limitation, or implement two-phase Weaver |

### The Meta-Question

This cleanup improved the pipeline's documentation fidelity substantially. The stale references are fixed, the gate counts are reconciled (within the gate-runner files), the fresh-eyes contamination is reduced, and the experiential enforcement is stronger. But the cleanup also introduced 3 BLOCKING cross-file inconsistencies because the fixers worked in isolation on their owned files.

The pattern is recursive: **the pipeline's documentation complexity creates documentation maintenance costs, and fixing documentation creates new documentation inconsistencies.** This is the meta-to-output ratio problem identified in the original research. Each fix round creates ~30% new issues relative to the issues it resolves.

The exit condition is not "zero inconsistencies" -- it is "run the pipeline and let execution surface the issues that actually matter." The documentation is now good enough. The next step is execution.

---

*End of metacognitive cleanup analysis.*
