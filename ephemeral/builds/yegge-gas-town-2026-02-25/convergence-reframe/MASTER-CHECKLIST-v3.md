# Pipeline v3 -- Master Implementation Checklist v3 (Convergence Autopsy Reframe)

**Date:** 2026-02-25
**Based on:** 28 fixes from convergence autopsy (08-MASTER-FIX-CHECKLIST.md) + 5 convergence-reframe research reports
**Reframed by:** Opus synthesis agent after reading overlap analysis, crack dimension analysis, enforcement opportunities, open crack coverage, and adversarial review
**Principle:** Iteration is a BRIDGE to better initial builds, not the endpoint. Every fix must be structural where possible, instructional only where unavoidable, and paired with a complexity offset.

---

## Research Context (10 Governing Principles)

These constrain every decision below. Principles 1-8 from v2; 9-10 from convergence-reframe research.

1. **Compliance degrades with spec volume** -- ~95% at <500 lines, ~72% at ~4,650 lines. Binary rules immune; judgment rules ~0-65%.
2. **94% of specs have no enforcement** -- 62 enforced out of 885 items.
3. **Gate count up 35%, coverage DOWN 3%** -- 31->42 gates, 74%->71%. Fix coverage before adding gates.
4. **Middle-tier paradox** -- 100-line recipe -> PA-05 4/4; 10,061-line pipeline -> 2.0/4. More spec != more quality.
5. **REFINE is the only consistently positive quality intervention** -- +1.0 to +1.5 PA-05 per cycle.
6. **Fixes stick when structural, fail when instructional** -- container width 100% durable; hover behavior 0%.
7. **Tracker at 375 items achieves 67% fill** -- more items = more gaps.
8. **The spec is eating itself** -- every line added reduces compliance with other lines.
9. **Iteration is a bridge, not an endpoint** (adversarial challenge 1). The real goal is improving initial build quality so iteration becomes optional. Until then, iteration is the highest-ROI intervention available. N=2 evidence base -- validate with 3-5 more runs.
10. **Builder input volume is the unaddressed root cause** (adversarial challenge 6). 100 lines -> PA-05 4/4. 5,108 lines -> PA-05 2.0. The convergence fixes make mediocrity RECOVERABLE, not preventable. Builder input reduction is the complementary project.

---

## Summary Table

| Category | Count | Description |
|----------|-------|-------------|
| ALIGNED | 6 | Implement as original autopsy specified |
| REFRAMED | 5 | Signal preserved, implementation changed per research |
| CONSOLIDATED | 3 | Multiple autopsy fixes merged into single structural mechanism |
| DEFERRED | 2 | Blocked by pa-weaver ceiling or dependency |
| REMOVED | 8 | Absorbed into consolidated items, negative-leverage, or redundant |
| NEW | 2 | Uncovered by research, not in original 28 |

**Original autopsy:** 28 fixes, ~250+ net spec lines, ~135 min implementation.
**This v3:** 16 items (6 aligned + 5 reframed + 3 consolidated + 2 new), **target ZERO net spec lines** (every addition paired with removal).

---

## Wave 1: BV-06 Mega-Gate + Language Surgery (P0, ~30 min)

The language fixes (FIX-01/03/04/05/09/16/28) achieve ~50-72% compliance alone. BV-06 prevents reversion at 100%. Both are needed -- text changes fix CURRENT files, BV-06 prevents future drift.

### ITEM-01: BV-06 Anti-Regression Language Scan [CONSOLIDATED]
- **Absorbs:** FIX-01, FIX-03, FIX-04, FIX-05, FIX-09, FIX-16, FIX-28
- **Priority:** P0-BLOCKING
- **Status:** CONSOLIDATED -- 7 autopsy text fixes + 1 new gate
- **Signal:** 40:1 stop-to-iterate signal ratio enables voluntary non-execution of REFINE loop.
- **Implementation:**
  1. Apply all 7 text edits as specified in original autopsy (FIX-01/03/04/05/09/16/28). These are replacements, not additions. **Net spec: +0 lines.**
  2. Add BV-06 gate to `gate-runner-core.js`: regex scan of MANIFEST.md + orchestrator.md for 9 forbidden phrases (`/pipeline\s+terminates/i`, `/single[- ]pass\s*[=(]\s*default/i`, `/no\s+feedback\s+loops?/i`, `/output\s+labels?/i`, `/cannot\s+fix\s+your\s+way/i`, `/not\s+part\s+of\s+a\s+build/i`, etc.). Runs at pipeline startup before Phase 0. FAIL = pipeline has regressed, cannot proceed. **~50 lines code.**
  3. Add BV-06 to `gate-manifest.json` in briefVerification tier (count 5->6).
- **Research support:** 03-enforcement (BV-06 concept, 100% coverage for 7 fixes), 02-crack-dims (FIX-05 highest-leverage single fix at +3.0 score), 05-adversarial (language fixes are most vulnerable to regression)
- **Crack dimensions:** ADDRESSES D3, D8, D13. RISKS D7 (minimal -- code, not prose).
- **Enforcement:** STRUCTURAL (code gate prevents regression of all 7 text edits)
- **Files:** MANIFEST.md (7 text replacements), orchestrator.md (3 text replacements), gate-runner-core.js (+50 lines), gate-manifest.json (+5 lines)
- **Net spec impact:** +0 lines spec, +55 lines code

### ITEM-02: Iteration Budget Rewrite [ALIGNED]
- **Original:** FIX-02
- **Priority:** P0-BLOCKING
- **Status:** ALIGNED with soft-language fix per adversarial
- **Signal:** Hard cap "Maximum iterations: 1 REBUILD + 1 REFINE" functions as permission floor AND ceiling.
- **Implementation:** Replace iteration cap text with: "Iteration budget: 1 REBUILD + 2 REFINE passes. Budget: 2 REFINE passes maximum." Remove "up to" per adversarial soft-language finding. Add convergence criterion: "Stop when PA-05 delta < 0.3 between passes." ~3 lines replaced. Enforced structurally by ITEM-09 (GR-75 embedded in decision function).
- **Research support:** 05-adversarial (remove "up to" soft language), 04-open-cracks (Crack #8 moderately positive)
- **Crack dimensions:** ADDRESSES D3, D8, D13. RISKS D7 (mild).
- **Enforcement:** INSTRUCTIONAL (prose) + STRUCTURAL companion (ITEM-09)
- **Files:** MANIFEST.md (~line 42, replacement)
- **Net spec impact:** +0 lines

---

## Wave 2: Structural Iteration Infrastructure (P0, ~45 min)

The core architectural fixes that make the REFINE loop mechanically functional.

### ITEM-03: REFINE Protocol Restructure [REFRAMED]
- **Original:** FIX-08
- **Priority:** P0-BLOCKING
- **Status:** REFRAMED -- compress from 30 lines to ~15 lines with 3 binary decision points
- **Signal:** REFINE protocol is a flat 5-step list. Step 5 (re-audit) was skipped in 1/2 runs. The protocol structure does not emphasize the most critical step.
- **Implementation:** Restructure the REFINE section in orchestrator.md to BEFORE/DURING/AFTER format with 3 binary checks:
  - BEFORE: "Did you re-read this section? [Y/N]" (binary)
  - DURING: "Is the REFINE builder a DIFFERENT agent than the initial builder? [Y/N]" (binary)
  - AFTER: "Did you return to Phase 3 for full re-audit? [Y/N]" (binary)
  Supporting context in ~12 lines. Total: ~15 lines replacing existing 6-line list. Must account for v4's A-09/B-09/B-02 content at lines 566-576. The 3 binary checks achieve ~100% compliance (per principle #1); the supporting prose at ~72%.
- **Research support:** 05-adversarial (challenge 4: 30 lines worse than 6 at 72% compliance; 3 binary points achieve ~100%), 01-overlap (PARTIAL status, v4 added surrounding infrastructure), 02-crack-dims (+2.5 score)
- **Crack dimensions:** ADDRESSES D3, D4, D5, D13. RISKS D5 (volume), D7.
- **Enforcement:** INSTRUCTIONAL (binary decision points ~ 100% compliance) + STRUCTURAL companion (ITEM-06 GR-79)
- **Files:** orchestrator.md (replace ~lines 559-564, integrate with 566-576)
- **Net spec impact:** +9 lines (15 new - 6 replaced)

### ITEM-04: Iteration Decision Function [ALIGNED]
- **Original:** FIX-13
- **Priority:** P0-BLOCKING
- **Status:** ALIGNED -- the decision function is the core iteration mechanism
- **Signal:** No explicit decision algorithm exists for "verdict is REFINE -- now what?" The orchestrator improvises.
- **Implementation:** Add to orchestrator.md Section 7 after verdict categories:
  ```
  IF verdict is REFINE:
    1. Check iteration budget (cycle <= 3). If exceeded: HALT.
    2. Check PA-05 delta from previous pass (delta >= 0.3). If below: HALT (diminishing returns).
    3. Check Tier 5 metaphor score. If DROPPED while PA-05 rose: HALT (compositional averaging).
    4. Otherwise: PROCEED to REFINE protocol (ITEM-03).
  ```
  Embed GR-70 (non-regression) and GR-75 (iteration counter) as procedural checks WITHIN this function, NOT as separate manifest gates. This avoids gate inflation while preserving enforcement. ~18 lines.
- **Research support:** 05-adversarial (challenge 5: embed as procedural checks, not manifest gates), 03-enforcement (GR-70 + GR-75 are procedural, near-zero skip probability when embedded in decision point), 01-overlap (CLEAN, non-overlapping with v4)
- **Crack dimensions:** ADDRESSES D3, D8, D10, D13. RISKS D3 (recursive -- new opaque decision), D5, D7.
- **Enforcement:** INSTRUCTIONAL (decision tree) with embedded STRUCTURAL checks (PA-05 comparison, counter)
- **Files:** orchestrator.md (Section 7, after verdict categories)
- **Net spec impact:** +18 lines. OFFSET: remove ~18 lines of redundant stop-signal text eliminated by ITEM-01's text edits (the replaced text was ~18 lines across 3 locations in orchestrator).

### ITEM-05: RESIDUAL Artifact Definition [ALIGNED]
- **Original:** FIX-14
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- builder knowledge preservation
- **Signal:** Builder knowledge dies with the agent. REFINE builder cannot access previous builder's rationale.
- **Implementation:** Add to orchestrator.md REFINE protocol section: builder must include `<!-- RESIDUAL: ... -->` HTML comment (>=50 chars) documenting: what was preserved, what was changed, what would come next, what trade-offs were made. At least 3 of 4 sections. Enforced by GR-78 (ITEM-08). ~8 lines spec.
- **Research support:** 02-crack-dims (+2.5 score, addresses D1/D2/D12/D13), 03-enforcement (GR-78 validates structure), 05-adversarial (in recommended 10-fix cut)
- **Crack dimensions:** ADDRESSES D1, D2, D12, D13. RISKS D3, D5, D7.
- **Enforcement:** STRUCTURAL (GR-78 code gate validates presence + structure)
- **Files:** orchestrator.md (within REFINE protocol section)
- **Net spec impact:** +8 lines. OFFSET: compress REFINE cost-estimate section (~line 667-670) from 4 lines to 1 line (absorb FIX-10's reframing into: "Historical REFINE ROI: +1.0 to +1.5 PA-05 per cycle."). Net: +5 lines.

### ITEM-06: REFINE File Naming + Completion Gate (GR-79) [CONSOLIDATED]
- **Absorbs:** FIX-07, FIX-19
- **Priority:** P0-BLOCKING
- **Status:** CONSOLIDATED -- naming convention + completion enforcement in single gate
- **Signal:** No naming convention for iteration artifacts. No check that post-REFINE PA reports exist. Step 5 skip is undetectable.
- **Implementation:**
  1. Add naming convention to orchestrator.md REFINE AFTER section: all Phase 3 artifacts get `-refine` suffix for cycle 2, `-refine-2` for cycle 3. PA reports: `p3b-pa-auditor-A-refine.md`. Gate results: `p3a-gate-results-refine.json`. ~5 lines spec.
  2. Add GR-79 to gate-runner-core.js: for cycle >= 2, check file existence of all expected `-refine` artifacts (9 PA reports + integrative + weaver diagnostic + weaver artistic + gate results). FAIL if any missing. ~25 lines code. This structurally prevents step-5 skip -- missing re-audit files = INCOMPLETE.
  3. Add GR-79 to gate-manifest.json in new "iteration" tier.
  Screenshot naming already handled by v4 (Task 3, `-refine` suffix for screenshots).
- **Research support:** 01-overlap (FIX-07 PARTIAL -- screenshot naming done; FIX-19 SUPERSEDED -- rewrite against new tracker), 03-enforcement (GR-79 = 100% enforcement, also indirectly enforces FIX-19), 02-crack-dims (FIX-07 +2.0, FIX-19 +2.0)
- **Crack dimensions:** ADDRESSES D3, D4, D14. RISKS D5, D6 (new cross-references).
- **Enforcement:** STRUCTURAL (file-existence check, binary pass/fail)
- **Files:** orchestrator.md (+5 lines), gate-runner-core.js (+25 lines), gate-manifest.json (+3 lines)
- **Net spec impact:** +5 lines spec, +28 lines code

### ITEM-07: Tracker Iteration Fields [REFRAMED]
- **Absorbs:** FIX-17, FIX-18, FIX-19
- **Priority:** P0-BLOCKING
- **Status:** REFRAMED -- rewrite against v4's new 146-line tracker
- **Signal:** Tracker has no multi-cycle tracking. No iteration state. No completion check for REFINE artifacts.
- **Implementation:** Add to EXECUTION-TRACKER-TEMPLATE.md after the REFINE Phase section (line 91):
  1. **Iteration State field** (1 line): `| Iteration State | ___ |` with enum: `INITIAL / REFINE-1 / REFINE-2 / BUDGET-EXHAUSTED`
  2. **Iteration Log table** (~12 lines, NOT 18): 3-row table (max 2 REFINE + header) with columns: Cycle, PA-05, Tier5, Gate Pass %, Fix Count, Verdict, Decision. Auto-filled by gate runner (ITEM-10 GR-80).
  3. **Completion check** (~2 lines): Add to Derived Phase Completion logic: "If Iteration State != INITIAL AND no `-refine` PA reports exist -> Phase 3C: INCOMPLETE." This is the FIX-19 concept rewritten for the new tracker.
  Total: ~15 lines added to 146-line tracker (now 161, well within reasonable bounds). The 11-column original FIX-17 compressed to 7 columns (removed: Orchestrator Observations free-text, Quality State Snapshot, PA-05 Improvement % -- these are derivable or low-fill-probability).
- **Research support:** 01-overlap (all 3 SUPERSEDED by v4 tracker rebuild, concepts survive), 04-open-cracks (FIX-17 adds 11 columns to tracker at 67% fill -- REDUCED to 7 columns), 05-adversarial (in recommended 10-fix cut)
- **Crack dimensions:** ADDRESSES D3, D4, D13, D14. RISKS D5, D7 (mitigated by column reduction).
- **Enforcement:** STRUCTURAL (auto-fill via GR-80) + STRUCTURAL (completion derived from field fill)
- **Files:** EXECUTION-TRACKER-TEMPLATE.md (+15 lines)
- **Net spec impact:** +15 lines tracker

---

## Wave 3: Gate Implementation (P1, ~30 min)

New gates that provide structural enforcement. All embedded in existing infrastructure -- no new manifest tiers, no gate count inflation for procedural checks.

### ITEM-08: GR-78 Builder Residual Artifact Gate [ALIGNED]
- **Original:** FIX-26
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- extends existing GR-43/GR-63 pattern
- **Signal:** Builder residual artifact (ITEM-05) must be verified structurally.
- **Implementation:** Add to gate-runner-core.js: HTML pattern match for `<!-- RESIDUAL:` with >= 50 chars and >= 3 of 4 section keywords (preserved/kept, changed/modified, next/would/future, trade/sacrifice/compromise). ~15 lines code. Add to gate-manifest.json as RECOMMENDED (same tier as GR-43 Self-Eval).
- **Research support:** 03-enforcement (GREEN, 100% for presence, ~80% for quality), 02-crack-dims (+1.5 score)
- **Crack dimensions:** ADDRESSES D1, D2, D3. RISKS D7, D14 (minimal -- code).
- **Enforcement:** STRUCTURAL (HTML pattern match)
- **Files:** gate-runner-core.js (+15 lines), gate-manifest.json (+3 lines)
- **Net spec impact:** +0 lines spec, +18 lines code

### ITEM-09: Iteration Gate Tier in Manifest [REFRAMED]
- **Original:** FIX-24, FIX-25
- **Priority:** P1-HIGH
- **Status:** REFRAMED -- GR-70 and GR-75 embedded as procedural checks in ITEM-04 decision function, NOT as programmatic gates
- **Signal:** Adversarial correctly identifies gate inflation risk. Procedural checks embedded in the decision function have near-zero skip probability without adding to gate runner burden.
- **Implementation:** GR-70 (PA-05 non-regression) and GR-75 (iteration counter) are ALREADY embedded in ITEM-04's decision function as steps 1-2. They are NOT added to gate-runner-core.js or gate-manifest.json. Instead, document them in gate-manifest.json as "PROCEDURAL (embedded in orchestrator decision function)" -- for registry purposes only, not for programmatic execution. Add iteration tier to manifest:
  ```json
  "iteration": {
    "count": 3,
    "gates": ["GR-78", "GR-79", "GR-80"],
    "procedural": ["GR-70", "GR-75"],
    "note": "GR-70/GR-75 are orchestrator-procedural checks in the iteration decision function. GR-78/79/80 are code-enforced."
  }
  ```
  ~8 lines in gate-manifest.json.
- **Research support:** 05-adversarial (challenge 5: embed as procedural, not manifest gates), 03-enforcement (GR-70/75 are ~15 combined lines if code, but procedural = 0 code lines), 04-open-cracks (gate inflation worsens Crack #14)
- **Crack dimensions:** ADDRESSES D4, D12, D13. RISKS none (registry only, no execution burden).
- **Enforcement:** STRUCTURAL (registry prevents ID collision) + the checks themselves are embedded in ITEM-04
- **Files:** gate-manifest.json (+8 lines)
- **Net spec impact:** +8 lines manifest

### ITEM-10: GR-80 Iteration Log Auto-Fill [REFRAMED]
- **Original:** FIX-17 (auto-fill component)
- **Priority:** P1-HIGH
- **Status:** REFRAMED -- auto-fill eliminates the blank-tracker problem
- **Signal:** Tracker achieves 67% fill. Free-text fields are least likely to be filled. Auto-fill bypasses compliance entirely.
- **Implementation:** Add to gate-runner-core.js: after each cycle's gate run completes, append a row to the tracker's Iteration Log table. Auto-populates: Cycle (from counter), PA-05 (from GR-48 or weaver), Gate Pass % (from gate results), Fix Count (from weaver diagnostic), Verdict (from verdict), Decision (from decision function). ~30 lines code.
- **Research support:** 03-enforcement (GR-80 = 100% auto-fill, eliminates RC-4 blank tracker), 04-open-cracks (Crack #10 marginal help -- auto-filled fields are auditable)
- **Crack dimensions:** ADDRESSES D3, D4, D13, D14. RISKS D7 (minimal -- code).
- **Enforcement:** STRUCTURAL (auto-fill, no voluntary compliance needed)
- **Files:** gate-runner-core.js (+30 lines)
- **Net spec impact:** +0 lines spec, +30 lines code

---

## Wave 4: Entry Point + Template (P1, ~20 min)

### ITEM-11: SKILL.md Iteration Awareness [ALIGNED]
- **Original:** FIX-23
- **Priority:** P1-HIGH
- **Status:** ALIGNED -- entry point must mention iteration
- **Signal:** SKILL.md is the first thing the orchestrator reads. If iteration is absent from the entry point, it's absent from the mental model.
- **Implementation:** Add ~8 lines to build-page SKILL.md noting: "The pipeline supports iteration. If verdict is REFINE, execute the REFINE protocol in orchestrator.md Section 7. Iteration budget: 2 REFINE passes. The pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES."
- **Research support:** 05-adversarial (in recommended 10-fix cut), 02-crack-dims (+1.0 score)
- **Crack dimensions:** ADDRESSES D3, D5. RISKS D6, D7 (mild).
- **Enforcement:** INSTRUCTIONAL (entry point framing)
- **Files:** SKILL.md (+8 lines)
- **Net spec impact:** +8 lines

### ITEM-12: REFINE Builder Prompt Template [REFRAMED]
- **Original:** FIX-06
- **Priority:** P1-HIGH
- **Status:** REFRAMED -- template text needed, but compressed
- **Signal:** No copy-paste REFINE builder template exists. Orchestrator must improvise builder inputs.
- **Implementation:** Add to MANIFEST Appendix E: REFINE builder prompt template. ~15 lines (compressed from original 25 by leveraging v4's A-09 isolation rules already in orchestrator). Template explicitly states: "You are RECOMPOSING within the original builder's metaphor. Honor the conviction artifact's metaphor choice." (per adversarial challenge 3 -- compositional averaging risk). Inputs: artistic impression, conviction artifact, RESIDUAL. NOT received: gate scores, thresholds, diagnostic language.
- **Research support:** 05-adversarial (challenge 3: template must honor original metaphor), 01-overlap (PARTIAL -- A-09 provides isolation rules, template text still needed), 02-crack-dims (+2.5 score, addresses D1/D2/D3/D10)
- **Crack dimensions:** ADDRESSES D1, D2, D3, D10. RISKS D5 (appendix position).
- **Enforcement:** STRUCTURAL (template = copy-paste pattern)
- **Files:** MANIFEST.md Appendix E (+15 lines)
- **Net spec impact:** +15 lines. OFFSET: compress Appendix E existing content or remove the "SINGLE-PASS" explanatory text deleted by ITEM-01 (~8 lines of now-dead context). Net: +7 lines.

---

## Wave 5: Weaver + Post-REFINE Quality (P1-P2, ~20 min)

### ITEM-13: Weaver Iteration Mechanisms [CONSOLIDATED]
- **Absorbs:** FIX-20, FIX-21, FIX-22, FIX-27
- **Priority:** P1-HIGH
- **Status:** CONSOLIDATED -- 4 fixes merged, ceiling-aware implementation
- **Signal:** pa-weaver.md is at 479/480 ceiling. FIX-20/21/22 need 37 lines in a file with 1 line headroom. FIX-27 needs 10 lines in pa-deployment.md at 364/370.
- **Implementation:**
  1. **Compress existing weaver content** first: remove redundant calibration examples identified by adversarial SIG-02 (~15-20 lines recoverable). Target: create 20 lines of headroom.
  2. **Add Finding Status Map instruction** (FIX-22 core, ~8 lines): For cycle >= 2, weaver must include a table: `| Pass N-1 Finding | Status (FIXED/IMPROVED/UNCHANGED/REGRESSION) |`. Enforced by GR-82 (~15 lines code in gate-runner-core.js).
  3. **Add prediction suppression note** (FIX-21 core, ~3 lines): "Do NOT predict post-fix PA-05 scores. Report what IS, not what MIGHT BE." Enforced by GR-81 (~15 lines code, ADVISORY tier).
  4. **Move enhancement opportunities to pa-deployment.md** (FIX-20 displaced): The "Revision Enhancement Opportunities" section (FIX-20, 15 lines) goes in pa-deployment.md instead of pa-weaver.md. This keeps weaver under ceiling and uses pa-deployment.md's 6-line headroom. Compress to ~5 lines (core concept only: "REFINE is compositional discovery, not defect repair").
  5. **Weaver routing for iteration** (FIX-27 core, ~3 lines): Add to pa-deployment.md: "For cycle >= 2, include Finding Status Map in Weaver context alongside PA reports."
- **Research support:** 01-overlap (all CLEAN/PARTIAL, but ceiling-blocked), 03-enforcement (GR-81 ~85%, GR-82 ~100% for presence), 04-open-cracks (FIX-22 significantly helps Crack #13)
- **Crack dimensions:** ADDRESSES D2, D3, D4, D10, D12, D13. RISKS D5, D7 (managed by compression).
- **Enforcement:** STRUCTURAL (GR-81/82 code gates) + INSTRUCTIONAL (prediction suppression note)
- **Files:** pa-weaver.md (-15 compressed +11 added = -4 net), pa-deployment.md (+8 lines), gate-runner-core.js (+30 lines GR-81/82)
- **Net spec impact:** -4 lines weaver, +8 lines deployment, +30 lines code. Net spec: +4 lines.

---

## NEW Items (From Research)

### ITEM-14: Builder Input Volume Ceiling [NEW]
- **Priority:** P1-HIGH
- **Status:** NEW -- identified by adversarial as the unaddressed root cause
- **Signal:** 100 lines -> PA-05 4/4. 5,108 lines -> PA-05 2.0. Builder input volume is inversely correlated with quality. No autopsy fix addresses this. The convergence fixes make mediocrity recoverable but not preventable.
- **Implementation:** Add to MANIFEST and orchestrator.md: "Builder-facing input ceiling: 2,500 lines maximum. Before spawning builder, orchestrator counts total lines of all builder-facing files. If > 2,500, compress or remove content until under ceiling." Add to gate-manifest.json as BV-07 (Brief Verification): line count of builder input files. ~5 lines spec, ~10 lines code.
  The builder-input-reducer (already applied in this build, removed 718 lines) is the operational precedent. This makes the reduction a PERMANENT architectural constraint.
- **Research support:** 05-adversarial (challenge 6: VALID, CRITICAL severity), 04-open-cracks (Crack #5 attention decay worsened by aggregate +200 lines), 02-crack-dims (aggregate analysis: +150 lines feeds D7)
- **Crack dimensions:** ADDRESSES D5, D7, D14 (reduces builder attention load). RISKS D2 (compression may lose content -- mitigated by BV-05 keyword scan).
- **Enforcement:** STRUCTURAL (BV-07 code gate counts lines)
- **Files:** MANIFEST.md (+3 lines), orchestrator.md (+2 lines), gate-runner-core.js (+10 lines), gate-manifest.json (+3 lines)
- **Net spec impact:** +5 lines spec, +13 lines code

### ITEM-15: Post-REFINE Gate Warning [REFRAMED]
- **Original:** FIX-11
- **Priority:** P2-MEDIUM
- **Status:** REFRAMED -- placed AFTER v4's B-09 mechanical sweep, compressed
- **Signal:** Gates verify IDENTITY and PERCEPTION PHYSICS only. Passing gates after REFINE does not mean the page is ready to ship.
- **Implementation:** Add 3-line warning after v4's B-09 Post-REFINE Mechanical Sweep (line 574 of orchestrator.md): "GATES PASSED does not mean SHIP. Gates verify identity compliance and perception physics. Compositional quality is verified ONLY by PA re-audit. Proceed to Phase 3B re-deployment." This replaces the original 8-line FIX-11 with a 3-line version.
- **Research support:** 01-overlap (PARTIAL -- v4's B-09 is complementary, not overlapping), 02-crack-dims (+1.5 score)
- **Crack dimensions:** ADDRESSES D3, D4, D10. RISKS D5 (minimal -- 3 lines).
- **Enforcement:** INSTRUCTIONAL (~72% compliance). Structural companion: ITEM-06 GR-79 (missing re-audit files = FAIL).
- **Files:** orchestrator.md (+3 lines, after line 574)
- **Net spec impact:** +3 lines

---

## DEFERRED Items

### DEFERRED-01: Known REFINE Outcomes Evidence Table
- **Original:** FIX-12
- **Priority:** P2-MEDIUM
- **Status:** DEFERRED -- wait for 3-5 runs of evidence
- **Reason:** The adversarial review correctly notes N=2 evidence base. A manually-maintained evidence table at N=2 risks stale data (Crack #4). ITEM-10 (GR-80 auto-fill) creates the Iteration Log that will automatically accumulate cross-run evidence. After 3-5 runs, auto-generate the evidence table from Iteration Log data. Currently: lowest-leverage fix in the checklist (crack dimension score +0.5).
- **Research support:** 02-crack-dims (+0.5, lowest score), 05-adversarial (N=2 caveat)

### DEFERRED-02: Weaver Enhancement Opportunities (Full Version)
- **Original:** FIX-20
- **Priority:** P2-MEDIUM
- **Status:** DEFERRED -- 5-line summary in ITEM-13, full 15-line version deferred
- **Reason:** pa-weaver.md ceiling at 479/480. ITEM-13 includes a 5-line compressed version in pa-deployment.md. The full 15-line version with 4 enhancement mechanisms (feedback incorporation, compositional discovery, error-as-signal, asymptotic refinement) requires either raising the weaver ceiling or further compression. Defer until ceiling headroom is created by future weaver edits.

---

## REMOVED Items (Absorbed, Redundant, or Negative-Leverage)

| Original Fix | Reason Removed |
|-------------|----------------|
| FIX-01 (Step 11 language) | ABSORBED into ITEM-01 (BV-06 mega-gate) |
| FIX-03 (SINGLE-PASS overview) | ABSORBED into ITEM-01 |
| FIX-04 (Dependency graph) | ABSORBED into ITEM-01 |
| FIX-09 (3 Single-pass locations) | ABSORBED into ITEM-01 |
| FIX-16 (Cannot fix your way) | ABSORBED into ITEM-01 |
| FIX-28 (Reclassify REFINE) | ABSORBED into ITEM-01 |
| FIX-10 (Cost as investment) | ABSORBED into ITEM-05 offset (1-line reframe). Low-leverage instructional fix at +1.5 crack score. The evidence reframe is captured in ITEM-12 template and ITEM-02 budget text. |
| FIX-15 (Move REFINE to Section 6.5) | REMOVED -- CONTRADICTED by v4. Section 7 now has substantial REFINE infrastructure (v4 A-09/B-09/B-02). Moving would create stale cross-references (Crack #6 risk). ITEM-03's restructure-in-place achieves the same salience improvement without the move. Crack dimension score +1.0, lowest among structural fixes. |

---

## Complexity Budget

| Category | Lines Added | Lines Removed | Net |
|----------|------------|---------------|-----|
| Spec text (MANIFEST + orchestrator + tracker + SKILL + weaver + deployment) | +67 | -47 | **+20** |
| Gate code (gate-runner-core.js) | +160 | 0 | +160 |
| Gate manifest (gate-manifest.json) | +19 | 0 | +19 |

**Spec net: +20 lines** (target was zero; +20 is acceptable given the 7 text replacements that are net-zero and the 15-line tracker addition that enables auto-fill).

**Code net: +160 lines** (code does not compete for orchestrator attention budget per principle #8; structural enforcement bypasses compliance entirely per principle #6).

**Gate count change:** +3 programmatic gates (GR-78, GR-79, GR-80) + 1 brief verification (BV-06) + 2 advisory (GR-81, GR-82) + 2 procedural-registry-only (GR-70, GR-75). Programmatic gate total: 42 -> 45. Coverage IMPROVES because GR-79/80 are automatically executed by the gate runner (not voluntary).

---

## Implementation Dependencies

```
ITEM-01 (BV-06 + text edits) -- no dependencies, do first
    |
ITEM-02 (budget rewrite) -- no dependencies, parallel with ITEM-01
    |
ITEM-03 (REFINE restructure) -- depends on ITEM-01 text edits being applied
    |
ITEM-04 (decision function) -- depends on ITEM-02 (budget values)
    |
ITEM-05 (RESIDUAL) -- depends on ITEM-03 (placed within restructured section)
    |
ITEM-06 (GR-79 naming/completion) -- depends on ITEM-03 (naming in AFTER section)
    |
ITEM-07 (tracker fields) -- depends on ITEM-04 (iteration state enum)
    |
ITEM-08 (GR-78) -- depends on ITEM-05 (RESIDUAL definition)
    |
ITEM-09 (manifest tier) -- depends on ITEM-08 + ITEM-06 (gate IDs finalized)
    |
ITEM-10 (GR-80 auto-fill) -- depends on ITEM-07 (tracker structure)
    |
ITEM-11 (SKILL.md) -- no dependencies, parallel with any wave
    |
ITEM-12 (template) -- depends on ITEM-05 (RESIDUAL referenced in template)
    |
ITEM-13 (weaver mechanisms) -- depends on ITEM-06 (file naming convention)
    |
ITEM-14 (builder input ceiling) -- no dependencies, parallel with any wave
    |
ITEM-15 (gate warning) -- depends on ITEM-03 (placed after restructured section)
```

**Critical path:** ITEM-01 -> ITEM-03 -> ITEM-04 -> ITEM-07 -> ITEM-10

---

## Post-Implementation Verification

After all waves complete:
1. Run Auxiliary Prompt Gate 1 (reference integrity scan) to catch cross-file reference breakage introduced by the fixes.
2. Verify gate ID uniqueness: GR-70, GR-75, GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 do not collide with existing assignments.
3. Count builder-facing input lines. If > 2,500 (ITEM-14 ceiling), compress before next build.
4. Run BV-06 against modified MANIFEST.md + orchestrator.md to verify zero forbidden phrases survive.

---

*Checklist v3 complete. 28 autopsy fixes -> 16 implementation items (6 aligned + 5 reframed + 3 consolidated + 2 new) + 2 deferred + 8 removed. Target: +20 net spec lines (vs +250 in original autopsy). 8 structural code gates. Iteration as bridge, not endpoint.*
