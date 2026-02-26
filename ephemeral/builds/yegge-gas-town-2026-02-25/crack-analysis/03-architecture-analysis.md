# Pipeline v3 Architecture Analysis — Cracks in the Multi-File System

**Analyst:** Opus architecture-analyst
**Method:** Map every handoff boundary, file split, and cross-reference in Pipeline v3. Classify which create cracks, which preserve information, and whether the architecture is minimal.

---

## 1. File Inventory and Size Census

Pipeline v3 consists of 20 operational files totaling ~10,262 lines:

| # | File | Lines | Role | Category |
|---|------|-------|------|----------|
| 1 | MANIFEST.md | 1,253 | Routing authority (what goes where) | ORCHESTRATION |
| 2 | artifact-orchestrator.md | 1,129 | Execution authority (step-by-step protocol) | ORCHESTRATION |
| 3 | artifact-builder-recipe.md | 828 | Builder recipe (Phases 1-6, D-01-D-09) | BUILD |
| 4 | artifact-routing.md | 900 | Content analysis + brief assembly + compression | BUILD |
| 5 | artifact-identity-perception.md | 556 | Soul constraints + perception thresholds | IDENTITY |
| 6 | artifact-tc-brief-template.md | 223 | Brief template structure | BUILD |
| 7 | artifact-value-tables.md | 262 | Pre-computed CSS value tables | BUILD |
| 8 | artifact-worked-examples.md | 182 | Worked examples from prior runs | BUILD |
| 9 | gate-runner-core.js | 1,654 | Executable Playwright gate code | GATES |
| 10 | gate-runner-spec.md | 225 | Human-readable gate specifications | GATES |
| 11 | gate-runner-preconditions.md | 83 | Text-based pre-build checks | GATES |
| 12 | gate-runner-provenance.md | — | History, traceability (not in wc) | PROVENANCE |
| 13 | gate-manifest.json | 200 | JSON TOC, tiers, execution order | GATES |
| 14 | pa-questions.md | 431 | All 69 PA question definitions | PA |
| 15 | pa-deployment.md | 355 | 9-auditor assignments + screenshot protocol | PA |
| 16 | pa-weaver.md | 449 | Weaver protocol + verdicts + calibration | PA |
| 17 | pa-guardrails.md | 113 | Auditor constraints | PA |
| 18 | pa-guardrails-weaver.md | 59 | Weaver-only guardrails (ISOLATION) | PA |
| 19 | pa-manifest.md | 89 | Per-run tracking template | PA |
| 20 | EXECUTION-TRACKER-TEMPLATE.md | 596 | Hierarchical L0-L3 tracking | ORCHESTRATION |
| 21 | pipeline-structural-manifest.md | 675 | Structural verification spec | META |

Plus 6 provenance/buddy files, ~10 extract files, and legacy monoliths — totaling 70+ files in the directory. But only the 20 above are operationally active.

---

## 2. Handoff Boundary Map

Every point where information passes from one agent (or file) to another is a potential crack. Here is the complete map:

### CRITICAL PATH (Sequential, Every Handoff is Load-Bearing)

```
Source Content ──→ Content Analyst ──→ Content Map ──→ Brief Assembler ──→ Execution Brief ──→ Builder ──→ HTML
                   (reads routing.md)   (30-70 lines)  (reads 6 files)     (100-272 lines)    (reads 4 files)  (2,931 lines)

                   BOUNDARY A            BOUNDARY B     BOUNDARY C          BOUNDARY D          BOUNDARY E
                   (18.9:1 compress)     (file hand-off) (5.7:1 compress)   (file hand-off)     (1:1 expand)
```

### EVALUATION PATH (Parallel, Failure-Tolerant)

```
HTML ──→ Screenshots ──→ 9 PA Auditors ──→ Integrative ──→ Weaver ──→ Verdict
         + Gate Runner    (read screenshots    (reads 9 reports)  (reads all)
                           + pa-questions.md)

         BOUNDARY F       BOUNDARY G          BOUNDARY H         BOUNDARY I
         (visual capture) (question routing)   (synthesis)        (judgment)
```

### Handoff Classification

| Boundary | Type | Information Loss Risk | Evidence from Build |
|----------|------|----------------------|---------------------|
| **A: Source → Content Map** | COMPRESSION (18.9:1) | MEDIUM — structural info preserved, detail lost | HEALTHY — content map captured zones, metaphor, density arc |
| **B: Content Map → Brief Assembler** | FILE HANDOFF | LOW — content map is small, read in full | NO LOSS detected |
| **C: Recipe + Identity + Routing → Brief** | COMPRESSION (5.7:1) | **HIGH — THE PRIMARY CRACK** | Step 2.7 (hover), Step 3.4c (signals) COMPLETELY LOST. Value table spacing/typography PROBABLY LOST. S(x) function NEVER APPLIED. |
| **D: Brief → Builder** | FILE HANDOFF | LOW — brief is 272 lines, read in full | NO LOSS detected (builder executed on what it received) |
| **E: Builder Input → HTML** | EXPANSION (1:1) | MEDIUM — execution gap, not info gap | Component adoption 5-6 vs 8+ target. Edge zone channels 2 vs 3-4. |
| **F: HTML → Screenshots** | VISUAL CAPTURE | LOW-MEDIUM — DPR issues possible | DPR workaround applied. Missing 1024px viewport. |
| **G: Screenshots → PA Auditors** | QUESTION ROUTING | LOW — fresh-eyes isolation by design | CORRECT — all 69 questions answered |
| **H: 9 Auditors → Integrative** | SYNTHESIS | **MEDIUM — ran parallel, not sequential** | Integrative ran parallel with PA auditors, got screenshots only. Designed synthesis role unfulfilled. |
| **I: Integrative + Gates → Weaver** | JUDGMENT | LOW — all inputs available | Weaver received all reports + gates |

**The primary crack is Boundary C: Recipe-to-Brief compression.** This is where 828 lines of builder recipe, 556 lines of identity/perception, 900 lines of routing, 262 lines of value tables, and 223 lines of template must be compressed into ~165 lines of builder-facing brief. The 5.7:1 compression ratio means ~83% of information is discarded. The Brief Assembler must CHOOSE what survives, and it chose wrong on hover behavior and signal declarations.

---

## 3. File Split Analysis — Purpose vs Convenience

### PURPOSEFUL SPLITS (Serve Information Isolation or Role Separation)

| Split | Purpose | Would Merging Break Something? |
|-------|---------|-------------------------------|
| **pa-questions.md vs pa-weaver.md** | Fresh-eyes isolation — auditors must NOT see weaver scoring criteria | YES — merging would contaminate auditor judgment |
| **pa-guardrails.md vs pa-guardrails-weaver.md** | Auditors must NOT see anti-pattern definitions or Tier 5 provisional scoring | YES — merging destroys isolation |
| **gate-runner-core.js vs gate-runner-spec.md** | Executable code vs human-readable spec | YES — JS can't contain markdown; humans can't read 1,654 lines of JS |
| **MANIFEST.md vs artifact-orchestrator.md** | Routing (what goes where) vs execution (how to do it) | DEBATABLE — see below |
| **artifact-identity-perception.md dual-route** | Builder sees world-description; gate runner sees binary checks | YES — combining would expose thresholds to builder, causing gaming |

**5 splits serve genuine isolation purposes.** These are the architecture's strongest design decisions.

### CONVENIENCE SPLITS (Organization, Not Isolation)

| Split | Current State | Could Merge Without Loss? |
|-------|---------------|---------------------------|
| **gate-runner-preconditions.md** (83 lines) | Text-based pre-build checks | YES — merge into artifact-orchestrator.md preconditions section |
| **gate-runner-provenance.md** | History and traceability | YES — merge into gate-runner-spec.md appendix |
| **gate-manifest.json** (200 lines) | JSON TOC | PROBABLY — could be a section of gate-runner-spec.md, though JSON format serves tooling |
| **pa-manifest.md** (89 lines) | Per-run tracking template | YES — merge into EXECUTION-TRACKER-TEMPLATE.md |
| **artifact-worked-examples.md** (182 lines) | Prior run reference | YES — merge into artifact-tc-brief-template.md appendix |
| **experiment-protocol.md** | Experiment tracking | YES — merge into artifact-orchestrator.md experiments section |
| **pipeline-structural-manifest.md** (675 lines) | Structural verification | YES — merge into MANIFEST.md verification section |

**7 splits are organizational convenience.** None serve information isolation. Each creates a sync requirement with no isolation benefit.

### THE DEBATABLE SPLIT: MANIFEST vs Orchestrator

The MANIFEST (1,253 lines) and artifact-orchestrator.md (1,129 lines) together form 2,382 lines of execution specification — 23% of the total pipeline. They have a complex relationship:

- MANIFEST says "what goes where" (file → agent routing)
- Orchestrator says "how to execute" (step-by-step protocol)
- Both describe the same phases (0, 1, 2, 3A, 3B, 3C)
- Both describe the same agents (Content Analyst, Brief Assembler, Builder, etc.)
- The Phase-by-Phase Execution in MANIFEST Section 4 duplicates the orchestrator's step sequences

**Evidence of drift:** The MANIFEST says the orchestrator has "6 reclassified decision rules (GR-23-GR-28)" that moved from gate-runner. The orchestrator implements them. But the gate-runner-spec still references their old locations. Three files must stay in sync for 6 rules.

**Verdict: This split DOES create sync cracks.** The MANIFEST should be the routing truth; the orchestrator should be the execution truth. But both describe execution. A clean separation would mean the MANIFEST is ONLY a lookup table (file → agent → purpose) and the orchestrator handles ALL procedural text. Currently, the MANIFEST's Section 4 (Phase-by-Phase Execution) is ~240 lines of procedural text that overlaps with the orchestrator.

---

## 4. Cross-Reference Density Map

How many files reference each other? A tree is maintainable; a web creates drift risk.

### References FROM each file (outgoing edges):

| File | References TO Other Files | Count |
|------|--------------------------|-------|
| MANIFEST.md | orchestrator, all 9 artifacts, 5 gate files, 6 PA files, tracker, council-verdict | **18** |
| artifact-orchestrator.md | routing, identity-perception, recipe, gate-runner, PA files, tracker | **12** |
| artifact-routing.md | identity-perception, recipe, value-tables, tc-brief-template | **4** |
| artifact-builder-recipe.md | tokens.css, components.css, mechanism-catalog.md | **3** (external design system files) |
| gate-runner-spec.md | gate-runner-core.js, gate-manifest.json, orchestrator | **3** |
| pa-deployment.md | pa-questions.md, pa-guardrails.md, pa-guardrails-weaver.md | **3** |
| pa-weaver.md | pa-guardrails-weaver.md, orchestrator (verdict logic) | **2** |

**The MANIFEST is a hub with 18 outgoing references.** The orchestrator is a secondary hub with 12. Everything else has 2-4 references. This is a **hub-and-spoke architecture with dual hubs** — the MANIFEST and orchestrator both serve as central routing points.

### References TO each file (incoming edges):

| File | Referenced BY Other Files | Count |
|------|--------------------------|-------|
| artifact-orchestrator.md | MANIFEST, gate-runner-spec, pa-weaver | **3** |
| artifact-identity-perception.md | MANIFEST, orchestrator, routing | **3** |
| pa-questions.md | MANIFEST, pa-deployment, pa-guardrails | **3** |
| gate-runner-core.js | MANIFEST, gate-runner-spec, orchestrator | **3** |
| Most other files | MANIFEST only | **1** |

**Incoming reference count is low (1-3).** This means most files are leaves — they are referenced by the hub(s) but do not reference many others. This is a HEALTHY tree structure, not a tangled web. The risk is concentrated at the hubs.

### Cross-Reference Verdict

The cross-reference topology is **a two-hub star** (MANIFEST + orchestrator at center, everything else at periphery). This is manageable for sync purposes — when a peripheral file changes, only 1-2 hub files need updating. The danger is hub-to-hub drift (MANIFEST says one thing about a phase, orchestrator says another).

---

## 5. The "More Comprehensive = More Cracks" Hypothesis

### Evidence FOR the Hypothesis

1. **Brief Assembly is the primary loss point, and it exists BECAUSE of file splits.** The Brief Assembler must read 6 files (routing, identity-perception, recipe, template, value-tables, content map) and compress them into 165 lines. If the pipeline were a single monolithic prompt, there would be no brief assembly step and no compression boundary. The file split architecture CREATES the compression bottleneck.

2. **7 convenience splits create sync requirements with zero isolation benefit.** Each split file must be maintained independently. When Wave 3 moved GR-23-28 from gate-runner to orchestrator, three files (MANIFEST, orchestrator, gate-runner-spec) all needed updates. The gate-runner-spec STILL references the old locations in some places.

3. **Tracker fill rate is 67% because the tracker itself is too complex.** The EXECUTION-TRACKER-TEMPLATE is 596 lines with 375 trackable items. The orchestrator filled L0 (summary) and skipped L2 (detail) for the first 3 phases. More comprehensive tracking created LESS actual tracking.

4. **4/18 files have UNCERTAIN routing status.** The pipeline mechanics analysis found 4 files where it's unknown whether they were actually consumed by the correct agent. More files = more opportunities for routing failures.

### Evidence AGAINST the Hypothesis

1. **The PA split is the pipeline's most reliable subsystem — AND it has the most files.** 6 PA files (questions, deployment, weaver, guardrails, guardrails-weaver, manifest) serve information isolation that produces 9/9 auditor convergence on real issues. The Mode 4 PA is the only subsystem that has NEVER produced a false conclusion across 4 runs.

2. **The dual-route pattern prevents threshold gaming — and it requires file splits.** Soul constraints as world-description to builder + binary checks to gate runner is a design that REQUIRES the information to live in separate routing paths. Merging would destroy this.

3. **The info-loss analysis found 20/27 recipe elements propagated with NO LOSS.** The compression boundary dropped 3 things (hover, signals, S(x)) and partially compressed 2 more. That's a 5/27 failure rate (18.5%), not a catastrophic loss rate. The architecture's compression is MOSTLY working.

4. **PA-05 = 3.5/4 is the highest Pipeline v3 score ever, from the most comprehensive version.** More files, more gates, more tracking template — and better results. The comprehensiveness is correlated with improvement, not degradation.

### VERDICT: The hypothesis is PARTIALLY TRUE with a crucial distinction.

**More comprehensiveness in EVALUATION (PA, gates) = fewer cracks.** Every additional PA file split improved isolation and produced better audit results.

**More comprehensiveness in SPECIFICATION (orchestrator, manifest, recipe) = more cracks.** Every additional specification file creates a sync point, and specifications DRIFT. The recipe has hover behavior that the brief template has no slot for. The orchestrator has decision rules that the gate-runner-spec still references at old locations. The MANIFEST's Section 4 duplicates the orchestrator's procedures.

The formula: **Evaluation files scale well. Specification files scale badly.**

---

## 6. Sync Drift Incidents — Evidence from This Build

| Drift Instance | Files Involved | Impact |
|----------------|----------------|--------|
| Step 2.7 (hover) in recipe, NO slot in brief template | artifact-builder-recipe.md + artifact-tc-brief-template.md | **COMPLETE LOSS** — hover vocabulary never reached builder |
| Step 3.4c (signals) in recipe, NO slot in brief template | artifact-builder-recipe.md + artifact-tc-brief-template.md | **COMPLETE LOSS** — signal declarations never reached builder |
| S(x) survival function in routing, never applied by brief assembler | artifact-routing.md + artifact-tc-brief-template.md | **COMPLETE LOSS** — compression governance bypassed |
| Content-Form Fit Gate in routing, never invoked | artifact-routing.md + orchestrator | **COMPLETE LOSS** — fit verification skipped |
| GR-23-28 reclassified to orchestrator, gate-runner-spec still references | gate-runner-spec.md + artifact-orchestrator.md + MANIFEST.md | **CONFUSION** — three files describe same rules differently |
| GR-11 non-adjacent pair checking | gate-runner-core.js vs gate-runner-spec.md | **FALSE POSITIVE** — JS checks all pairs, spec implies adjacent only |
| Integrative Auditor sequencing | pa-deployment.md vs actual execution | **MISEXECUTION** — ran parallel instead of sequential after 9 reports |
| Value tables routing to builder | MANIFEST.md + tracker P2-1e | **UNCERTAIN** — tracker unchecked, routing unconfirmed |

**8 sync drift incidents in a single build.** 4 caused COMPLETE LOSS, 1 caused a false positive, 1 caused misexecution, 2 were uncertain. Every one involves a mismatch between what one file specifies and what another file implements or expects.

---

## 7. The Minimal Viable Architecture

What would a MINIMAL architecture look like that preserves all necessary isolation?

### Files to KEEP (isolation-critical):

1. **MANIFEST.md** — reduce to PURE routing table (file → agent → purpose). Remove Section 4 (Phase-by-Phase) which duplicates orchestrator. Target: ~400 lines (from 1,253).
2. **artifact-orchestrator.md** — the SOLE execution authority. Absorb all procedural text from MANIFEST Section 4. Absorb gate-runner-preconditions, experiment-protocol. Target: ~1,300 lines (from 1,129 + absorbed content).
3. **artifact-builder-recipe.md** — unchanged. Builder recipe must be separate from orchestrator spec.
4. **artifact-routing.md** — absorb artifact-tc-brief-template.md and artifact-worked-examples.md. Target: ~1,200 lines (from 900 + 223 + 182, minus overlap).
5. **artifact-identity-perception.md** — unchanged. Dual-route source.
6. **artifact-value-tables.md** — unchanged. Builder vocabulary reference.
7. **gate-runner-core.js** — unchanged. Executable code.
8. **gate-runner-spec.md** — absorb gate-manifest.json content and gate-runner-provenance.md. Target: ~450 lines.
9. **pa-questions.md** — unchanged. Auditor input.
10. **pa-deployment.md** — absorb pa-manifest.md. Target: ~420 lines.
11. **pa-weaver.md** — unchanged. Information isolation.
12. **pa-guardrails.md** — unchanged. Auditor constraints.
13. **pa-guardrails-weaver.md** — unchanged. Weaver-only isolation.
14. **EXECUTION-TRACKER-TEMPLATE.md** — absorb pa-manifest.md tracking. Target: ~650 lines.

### Files to MERGE/REMOVE:

| File | Absorb Into | Rationale |
|------|-------------|-----------|
| gate-runner-preconditions.md (83 lines) | artifact-orchestrator.md | Text checks are orchestrator preconditions |
| gate-runner-provenance.md | gate-runner-spec.md appendix | History belongs with spec |
| gate-manifest.json (200 lines) | gate-runner-spec.md section | Can be a markdown table; JS can parse spec if needed |
| pa-manifest.md (89 lines) | EXECUTION-TRACKER-TEMPLATE.md | Per-run tracking belongs in tracker |
| artifact-tc-brief-template.md (223 lines) | artifact-routing.md | Template IS the routing specification |
| artifact-worked-examples.md (182 lines) | artifact-routing.md appendix | Reference data for brief assembly |
| experiment-protocol.md | artifact-orchestrator.md | Experiment config is orchestrator state |
| pipeline-structural-manifest.md (675 lines) | MANIFEST.md appendix OR DELETE | Structural verification is a one-time task |

### Result: 14 files instead of 21+

**Reduction: 7 files eliminated.** File count drops from 21 operational files to 14. Sync requirements drop from ~40 cross-references to ~25. Every remaining file serves either:
- Isolation (PA splits, identity dual-route)
- Role separation (orchestrator vs recipe vs routing)
- Technical necessity (JS code vs markdown spec)

No remaining file exists purely for "organizational convenience."

---

## 8. The Deeper Architecture Problem: Specification-Execution Gap

The file split analysis reveals a more fundamental issue than file count: **the pipeline has specifications that are not mechanically enforced**.

| Specification | Where Specified | Enforcement Mechanism | Status |
|---------------|----------------|----------------------|--------|
| Hover behavior in recipe Step 2.7 | artifact-builder-recipe.md | Brief template slot | **MISSING — no slot exists** |
| Signal declarations in Step 3.4c | artifact-builder-recipe.md | Brief template slot | **MISSING — no slot exists** |
| S(x) survival function | artifact-routing.md | BV gate or orchestrator check | **MISSING — never computed** |
| Content-Form Fit Gate | artifact-routing.md | Orchestrator check | **MISSING — never invoked** |
| Value tables routing to builder | MANIFEST.md | Tracker P2-1e checkbox | **UNCHECKED** |
| Component adoption >= 8 | artifact-builder-recipe.md | Gate runner check | **MISSING — no gate exists** |
| Integrative Auditor sequencing | pa-deployment.md | Orchestrator procedure | **VIOLATED — ran parallel** |

**7 specifications with no enforcement.** Each one is a crack that things fall through. The fix is NOT more specifications — it is turning specifications into either:
- **Gates** (binary, automated, impossible to skip)
- **Template slots** (the brief template forces inclusion)
- **Orchestrator checklist items with L1 verification** (procedural, with tracking)

The architecture problem is that Pipeline v3 has a specification-to-enforcement ratio that is too high. It specifies ~885 items across 10,262 lines, but only enforces ~42 via gates, ~4 via BV, and ~6 via orchestrator decision rules. That leaves ~833 items (94%) enforced only by "the agent read the file and chose to follow it."

---

## 9. Consolidation Recommendations

### HIGH PRIORITY (Fixes cracks directly)

1. **Add brief template slots for Step 2.7 (hover) and Step 3.4c (signals).** These are COMPLETE LOSS items caused by the recipe-template sync gap. 2 lines of template = 2 losses prevented.

2. **Merge MANIFEST Section 4 into artifact-orchestrator.md.** Eliminate the dual-description of phases. MANIFEST becomes pure routing; orchestrator becomes sole execution authority. This prevents the drift seen with GR-23-28 reclassification.

3. **Add GR-65 (component adoption count gate).** Recipe says "8+ components." No gate verifies it. Builder produced 5-6. A binary gate closes this crack.

4. **Add BV-05 (S(x) computation or brief line budget enforcement).** Either enforce the survival function or replace it with a simple "brief must be 100-200 lines" gate. Currently S(x) is specified but never applied — a specification without enforcement.

### MEDIUM PRIORITY (Reduces maintenance burden)

5. **Merge 7 convenience files into their parents.** Eliminate gate-runner-preconditions.md, gate-runner-provenance.md, gate-manifest.json, pa-manifest.md, artifact-tc-brief-template.md, artifact-worked-examples.md, pipeline-structural-manifest.md.

6. **Simplify tracker to 2 levels (L0 + L1).** The 596-line tracker with 375 items achieved 67% fill rate. A 200-line tracker with ~100 items would likely achieve 90%+ fill rate. Better tracking through less tracking.

### LOW PRIORITY (Architectural cleanup)

7. **Extract a "specification coverage report" that maps every recipe step to its enforcement mechanism.** The 7 unenforced specifications above were discovered by post-hoc analysis. A systematic coverage report would catch them at design time.

---

## 10. Summary Findings

### Architecture Strengths

- **Hub-and-spoke topology** with 2 hubs and ~19 leaves. Not a tangled web.
- **PA information isolation** via file splits is the single best architectural decision. 6 PA files serve genuine isolation and produce the pipeline's most reliable subsystem.
- **Dual-route pattern** (world-description + binary gate) prevents threshold gaming. Requires and justifies the identity-perception file split.
- **Compression architecture** (compress source → expand into brief → expand into HTML) prevents catastrophic loss. The two-stage approach is sound; the 5.7:1 recipe compression is survivable.

### Architecture Weaknesses

- **Brief template is the primary crack.** 5/27 recipe elements lost at Boundary C. The template has no slot for hover behavior, signal declarations, or systematic compression governance. Adding template slots is the highest-ROI fix.
- **MANIFEST + Orchestrator dual-hub creates drift.** Both describe the same phases in different terms. 3+ files must sync for any procedural change. Consolidate procedural text into orchestrator.
- **94% of specifications have no enforcement.** 833/885 items rely on agent compliance. The architecture should convert the highest-value specifications into gates or template slots.
- **7 convenience splits create maintenance burden with zero isolation benefit.** Each is <200 lines and could be absorbed into a parent file.
- **Tracker complexity defeats its purpose.** 596 lines / 375 items / 67% fill rate. The tracker's L2 detail for Phases 0-2 was entirely empty despite L0 claiming complete. Simpler tracker = better tracking.

### The Core Insight

**Pipeline v3's architecture is a well-designed tree with too many leaves and too few enforcement mechanisms.** The topology is sound (flat, hub-and-spoke, clear routing). The isolation patterns are excellent (PA splits, dual-route, fresh-eyes). But the specification surface area (885 items, 10,262 lines) vastly exceeds the enforcement surface area (52 gates + 4 BV + 6 decision rules). The cracks are not in the architecture's shape — they are in the gap between what is specified and what is enforced.

The answer to "does making the pipeline more comprehensive create more cracks?" is: **more evaluation comprehensiveness (PA questions, gates) closes cracks. More specification comprehensiveness (rules, protocols, templates) opens cracks unless each new specification comes with its enforcement mechanism.**

The rule: **every specification needs a gate, or it will be violated.**
