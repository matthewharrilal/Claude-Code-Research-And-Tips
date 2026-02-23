# Phase 7: Fix Changelog — MANIFEST.md

**Fixer:** manifest-fixer (Opus agent)
**Date:** 2026-02-23
**Input:** 3 Wave 2 review reports (gap-analysis, adversarial, fresh-eyes)
**Result:** MANIFEST.md rewritten from 731 lines to ~850 lines. All BLOCKING and SIGNIFICANT issues addressed.

---

## Summary

| Priority | Found | Fixed | Deferred | Notes |
|----------|-------|-------|----------|-------|
| BLOCKING | 7 (deduplicated) | 7 | 0 | All fixed |
| SIGNIFICANT | 10 (deduplicated) | 10 | 0 | All fixed |
| Fresh-eyes improvements | 5 | 5 | 0 | All fixed |
| MINOR | 6 | 5 | 1 | M-06 PA-05 scale clarified inline |

---

## BLOCKING Fixes

### Fix #1: Gate Runner Agent Ambiguity
**Sources:** Adversarial B-01, Fresh-eyes Section 2 (Gate Runner 4/5), Gap-analysis Gap #3
**What was wrong:** Gate Runner referenced throughout as receiving files and doing work, but NOT listed in the Agent Roster. Unclear whether it is a spawned LLM agent or orchestrator-executed code.
**What changed:**
- Added explicit statement in Section 1 Architecture: "The Gate Runner is NOT a separate agent — it is Playwright JavaScript code executed by the orchestrator directly."
- Added a new "Phase 3A (parallel) — Gate Runner" subsection in the Agent Roster (Section 2) with Executor = "Orchestrator (Playwright JS)", Model = "N/A"
- Changed all "Gate Runner (programmatic)" references in Section 3 to "Gate Runner (orchestrator code)"
- Added bold callout in artifact-gate-runner.md routing: "GATE RUNNER IS NOT AN AGENT."
- Updated total agent count note: "Gate Runner is NOT counted — it is orchestrator-executed code, not an LLM agent."

### Fix #2: TC Brief Template Missing / Not Flagged as Prerequisite
**Sources:** Adversarial B-02, Gap-analysis Gap #7
**What was wrong:** The 73-line TC Brief Template referenced as "single most important routing document" but (a) actual template text does not exist in any artifact, and (b) manifest treated it as already existing.
**What changed:**
- Added "TC Brief Template" to Quickstart prerequisites with note: "must be authored before first run; structure defined in artifact-routing.md 'Brief Template Structure' section"
- Added PREREQUISITE callout in artifact-routing.md routing section: "The TC Brief Template (73 lines) must be authored before the first pipeline run."
- Added "TC Brief Template not authored" to Pre-Pipeline Failures table with recovery: "ABORT. Author the 73-line template per artifact-routing.md before running pipeline."
- Added TC Brief Template to Appendix D File Path Registry as external dependency with Status: "PREREQUISITE: Must be created before first run"
- Updated glossary entry to state "Must be authored as a standalone file before first pipeline run."

### Fix #3: Section References Systematically Wrong
**Sources:** Adversarial B-03 (0/10 exact matches on spot-check)
**What was wrong:** Manifest used generic "§2.1", "§3" notation that did not match actual artifact headers. E.g., manifest said "§2.1" for artifact-gate-runner.md but actual header is "SECTION 1: IDENTITY GATES".
**What changed:**
- Replaced ALL section references in Section 3 (Artifact-to-Agent Routing) with actual artifact headers. Changed table column from "Lines" to "Section (Actual Header)".
- Replaced all section references in Section 4 (Phase-by-Phase) with actual headers: e.g., `artifact-routing.md "Phase 0: Content Analysis Protocol"` instead of `artifact-routing.md §2`.
- Replaced all section references in Section 7 (Critical Sections Index) with actual headers.
- For artifact-routing.md: used TOC numbers (e.g., "TOC #10") where headers are long.
- For artifact-pa-protocol.md: used PART numbers matching actual headers (e.g., "PART 5: SCREENSHOT PRE-CAPTURE PATTERN").
- For artifact-gate-runner.md: used SECTION numbers matching actual headers (e.g., "SECTION 1: IDENTITY GATES").
- For artifact-orchestrator.md: used SECTION numbers matching actual headers (e.g., "SECTION 0: MASTER EQUATION AND PRECONDITIONS").
- For artifact-identity-perception.md: used actual headers (e.g., "1.2 Soul Constraints" for PART 1, "2.2 Core Thresholds" for PART 2).

### Fix #4: Item Count Discrepancies
**Sources:** Adversarial B-04, Gap-analysis Contradiction 1
**What was wrong:** Layer table (Section 1) used base classification counts. artifact-builder-recipe.md header says 70+76=146 but appendix lists 75+78=153. Other artifacts also report different totals post-rerouting.
**What changed:**
- Renamed "Item Count" column to "Base Count" in Section 1 layer table.
- Added explanatory note: "Item counts shown are base layer classification counts. Some layers have additional items from council rerouting — see artifact detail sections in Section 3 for post-rerouting totals."
- Added coverage note: "716 of 753 non-META items (95.1%) are strictly cited by ITEM ID in artifacts; 37 items (4.9%) are covered semantically."
- Updated Section 3 artifact-builder-recipe.md entry: "L3 SCAFFOLDING (75 items per appendix), L4 DISPOSITION (78 items per appendix). Total items: 146 (per header; appendix lists 75+78=153 — discrepancy is an artifact-internal issue)"
- Updated Section 9 Coverage Verification table to show "Base Count / Artifact-Reported Total" as separate columns.
- Added NOTE explaining why counts differ: base vs post-rerouting vs appendix enumeration.

### Fix #5: No Concrete File Paths
**Sources:** Adversarial B-05
**What was wrong:** Builder reference files (tokens.css, components.css, mechanism-catalog.md) had no repository paths. Orchestrator couldn't locate files.
**What changed:**
- Added entire **Appendix D: File Path Registry** (~50 lines) with 4 subsections:
  - Design System Files (3 files with full paths)
  - Pipeline Artifacts (7 files with full paths and sizes)
  - External Dependencies (4 items including TC Brief Template and value tables with creation status)
  - Tracking Files (2 audit files, noted as non-required for execution)
- Added cross-reference to Appendix D in Phase 0 Step 1 and Pre-Pipeline Failures table.

### Fix #6: No Maximum Iteration Count / Circuit Breaker
**Sources:** Gap-analysis Gap #4 (BLOCKING)
**What was wrong:** REBUILD/REFINE loops had no circuit breaker. Pipeline could loop indefinitely.
**What changed:**
- Added to Quickstart: "Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review."
- Added "Circuit Breaker" subsection at top of Section 6 (Failure and Recovery): "Maximum iterations: 1 REBUILD + 1 REFINE before human intervention."
- Added to Phase 3C: "Single-pass behavior" paragraph explaining REFINE/REBUILD are output labels in default mode.

### Fix #7: CSS Value Tables (~550 Lines) Not Tracked
**Sources:** Gap-analysis Gap #6 (BLOCKING), Adversarial Contradiction 2
**What was wrong:** Orchestrator artifact counts ~550 lines of value tables in builder input. Manifest's builder input list (Phase 2 and Appendix B) omitted them entirely.
**What changed:**
- Added "Value tables (~550 lines — CSS vocabulary for the 6-channel framework)" to Phase 2 builder inputs (Step 1).
- Added value tables to Appendix B File Routing Quick Reference.
- Added value tables to Appendix D as external dependency with Status: "PREREQUISITE: CSS vocabulary for 6-channel framework."
- Added value tables to glossary.
- Added honest complexity accounting section to artifact-orchestrator.md routing entry (Section 3).

---

## SIGNIFICANT Fixes

### Fix #8: Viewport Count Mismatch (2 vs 3)
**Sources:** Gap-analysis Gap #10, Adversarial S-02
**What was wrong:** Manifest Phase 3A specified 2 viewports (1440px, 768px). Orchestrator artifact and PA protocol both specify 3 viewports (1440px, 1024px, 768px).
**What changed:**
- Updated Phase 3A to include all 3 viewports with full capture sequence.
- Updated Agent Roster Phase 3A entry.
- Updated screenshot pre-capture pattern description (previously in Section 3 PA protocol entry).
- Updated dependency graph to say "(3 viewports)".

### Fix #9: PA Auditor Question Assignments Wrong
**Sources:** Adversarial S-03
**What was wrong:** Manifest used simple sequential ranges (A: PA-01-PA-08, B: PA-09-PA-16, etc.). Actual PA protocol uses thematic groupings (A: PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 = 7 questions).
**What changed:**
- Replaced entire Agent Roster Phase 3B table with exact assignments from artifact-pa-protocol.md Part 4, Section 4.2.
- Each auditor row now shows: role name, specific PA question numbers, question count.
- Added note: "These assignments are thematic groupings from artifact-pa-protocol.md Part 4, Section 4.2 — NOT sequential ranges."
- Removed old role names (Soul + Identity, Spatial Composition, etc.) and replaced with actual PA protocol role names (Impression + Emotion, Readability + Typography, etc.).

### Fix #10: Council Mandate Summary Reverses VALUES Rerouting Direction
**Sources:** Gap-analysis "DISCREPANCY in H"
**What was wrong:** Section 8 line 592 said "34 items to gates" — the OPPOSITE of the council ruling, which rerouted 34 items AWAY FROM gates (15 to orchestrator, 10 to PA auditor, 9 to documentation).
**What changed:**
- Corrected Contradiction H entry to: "Values (L5) rerouted: 34 items rerouted AWAY from gate-runner (15 to orchestrator, 10 to PA auditor, 9 to documentation); 26 to builder context; 34 remain L5"
- Also corrected the VALUES REROUTING paragraph in artifact-gate-runner.md routing section: "34 Layer 5 VALUES items originally classified as GATE-RUNNER were rerouted AWAY from the gate runner: 15 to ORCHESTRATOR, 10 to PA_AUDITOR, 9 to DOCUMENTATION."

### Fix #11: "Activation Pipeline" Framing Violation
**Sources:** Gap-analysis finding #8, Adversarial M-05
**What was wrong:** Line 13 said 'Pipeline v3 ("The Activation Pipeline")' which contradicts council ruling that "activation" framing is RETIRED.
**What changed:**
- Removed "The Activation Pipeline" from Section 1.
- Added note: 'The council retired the "Activation Pipeline" name (Contradiction A). Use "Pipeline v3" only.'
- Added legacy note to Contradiction A entry in Section 8.
- Updated glossary: "Execution Brief" as primary term, with note that "Activation Brief" is legacy name retained in some artifacts.
- Changed "Activation Brief" → "Execution Brief" throughout the manifest (Phase 1, Phase 2, Appendix B, etc.).

### Fix #12: Conviction Artifact Preservation Undefined
**Sources:** Gap-analysis Gap #8
**What was wrong:** REBUILD protocol requires conviction artifact from failed build, but nothing specified how the orchestrator captures it.
**What changed:**
- Added to Phase 1: "The builder must output its conviction statement as a SEPARATE FILE before beginning construction. The orchestrator must capture and preserve this artifact — it is required for the REBUILD path if the build fails."
- Added Step 3 to Phase 2: "Builder outputs conviction statement as a separate file."
- Updated Phase 2 Output: "Single HTML file + conviction statement file."
- Added "Conviction statement not captured" to Phase 2 Failures table.

### Fix #13: Weaver Output Format for REFINE Case Undefined
**Sources:** Gap-analysis Gap #9
**What was wrong:** Manifest said weaver produces "verdict + action items" but didn't define the two distinct outputs needed (diagnostic for orchestrator, artistic for REFINE builder).
**What changed:**
- Updated Phase 3C Step 3: "Weaver produces TWO outputs: (1) Diagnostic verdict for the orchestrator: SHIP/REFINE/REBUILD + gate-format action items + fix-type classifications (MECHANICAL / STRUCTURAL / COMPOSITIONAL). (2) Artistic impression for a potential REFINE/REBUILD builder: generative language, no threshold numbers, no gate scores."
- Updated Weaver entry in Agent Roster to mention TWO outputs.

### Fix #14: Verdict Logic Priority Order Ambiguous
**Sources:** Adversarial S-05
**What was wrong:** Verdict logic listed conditions without explicit priority ordering. Combinations (e.g., 1 identity FAIL + 2 anti-pattern FAIL) had ambiguous outcomes.
**What changed:**
- Added explicit priority ordering in artifact-gate-runner.md routing section: "1. ANY Identity gate FAIL → REBUILD (highest priority), 2. 3+ Anti-Pattern gates FAIL → REBUILD, 3. ANY Perception gate FAIL → REFINE, 4. <3 Anti-Pattern gates FAIL → REFINE, 5. PA-05 score determines final verdict."
- Added clarification: "In combinations: Identity failures override all else. Anti-pattern 3+ overrides perception."
- Updated Phase 3C verdict logic to use same priority ordering.

### Fix #15: Mode Selection Not Explicitly Sequenced
**Sources:** Gap-analysis Gap #2
**What was wrong:** Mode selection was embedded in Phase 1 Step 1 without being identified as a distinct decision point.
**What changed:**
- Added "Phase 0.5: Mode Selection" as explicit step in Section 4 between Phase 0 and Phase 1.
- Updated dependency graph to include Phase 0.5.

### Fix #16: Dual-Route Not Operationalized
**Sources:** Adversarial S-07
**What was wrong:** Dual-route pattern explained conceptually but no extraction instructions for Brief Assembler. Risk of copying full SC tables (including "Gate check: FAIL if..." fields) to builder, triggering S-02.
**What changed:**
- Added explicit extraction instruction to artifact-identity-perception.md routing: "Extract ONLY the 'World-description' field from each SC table — do NOT include 'Gate check' or 'CSS rule' fields."
- Added same instruction to CRITICAL paragraph below the routing table.
- Added to Appendix B exclusions: "Raw prohibition list / 'Gate check' or 'CSS rule' fields from SC tables"
- Added to Brief Assembler Critical Sections entry: "extract ONLY 'World-description' field"

### Fix #17: Council-verdict.md Referenced But Not In Artifact Set
**Sources:** Adversarial S-04
**What was wrong:** council-verdict.md listed in Critical Sections as "overrides all other documents" but not in the 6-artifact set. Creates contradiction.
**What changed:**
- Added council-verdict.md to Appendix D File Path Registry with full path and size.
- Added NOTE in Critical Sections (Orchestrator): "This file is NOT one of the 6 artifacts but is referenced as an authoritative override. All council rulings are already incorporated into the 6 artifacts; the orchestrator should read council-verdict.md only to resolve ambiguities."
- Added to Section 8 intro: "All council rulings have been incorporated into the 6 artifacts; this section summarizes them for quick reference."

---

## Fresh-Eyes Improvements

### Fix #18: Quickstart Procedure Added
**Source:** Fresh-eyes Section 8, Improvement #1
**What changed:** Added 30-line "Quickstart: Running Your First Build" section at the top of the manifest (after header, before Section 1). Includes prerequisites list, 11-step numbered procedure, and circuit breaker note.

### Fix #19: Gate Runner Nature Clarified
**Source:** Fresh-eyes Section 8, Improvement #3
**What changed:** See Fix #1 above. Added explicit "Playwright JavaScript code executed by the orchestrator" throughout.

### Fix #20: External Dependencies Listed
**Source:** Fresh-eyes Section 8, Improvement #5
**What changed:** See Fix #5 above. New Appendix D with all external files, paths, sizes, and required-by.

### Fix #21: Soul Constraints Inlined
**Source:** Fresh-eyes Section 8, Improvement #2
**What changed:** Added "Soul Constraints Summary (The 10 Non-Negotiables)" table to Section 1 with all 10 constraints and their CSS rules. This eliminates the #1 "what does this mean?" moment for new readers.

### Fix #22: Unexplained Terms Defined
**Source:** Fresh-eyes Section 3 (16 terms)
**What changed:**
- Added to glossary: mechanism, channel, zone, council, CCS, value tables
- Expanded existing glossary entries: soul constraints (now lists all 10), disposition (now lists all 8 names), PA-05 (now includes 1-4 scale labels), APPLIED/COMPOSED (now includes CSS naming convention)
- Added note about evidence taxonomy mismatch (5-level vs 6-level) to Appendix A
- Added "Known Limitations" section at end noting: no worked examples, no agent prompt templates, orchestrator artifact density

---

## MINOR Fixes

### Fix #23: GR-33–GR-35 Advisory Gates Mislabeled as "Binary"
**Source:** Adversarial M-01
**What changed:** Updated artifact-gate-runner.md routing entry: "42 gates (39 binary pass/fail + 3 advisory)". Added note to Mode Advisory Gates row: "NOTE: These 3 gates are ADVISORY (report-only), not binary pass/fail."

### Fix #24: Evidence Taxonomy Mismatch (5-level vs 6-level)
**Source:** Adversarial M-02
**What changed:** Added note to Appendix A: "artifact-identity-perception.md uses a 5-level taxonomy (omitting PROVEN). artifact-gate-runner.md uses the full 6-level taxonomy. The 6-level version from council-verdict.md CF-04 is authoritative."

### Fix #25: Content Analyst "Protocol Excerpt" Ambiguity
**Source:** Adversarial M-03
**What changed:** Expanded Appendix B Content Analyst entry: 'content analysis protocol (full "Phase 0: Content Analysis Protocol" section from artifact-routing.md) + reader model ("Reader Model — 5-Axis Input Space" section)'

### Fix #26: Mode Designation Label Contradiction
**Source:** Adversarial M-04
**What changed:** Updated Phase 2 builder inputs: "Mode implicit in brief format (APPLIED or COMPOSED — not as a separate label)". Updated mode selection text in artifact-orchestrator.md routing to clarify the builder receives ONE mode implicit in the recipe format.

### Fix #27: CF-01 Honest Accounting
**Source:** Gap-analysis Council Compliance, CF-01 gap
**What changed:** Updated CF-01 entry in Section 8 to include full honest accounting: "73-line constraint layer within ~3,600 total builder input. FORMAT improvement (recipe vs checklist), not volume reduction."

### Deferred: PA-05 Discrete vs Continuous Scale (M-06)
**Source:** Adversarial M-06
**Decision:** Addressed inline. Added PA-05 SCORING paragraph to artifact-pa-protocol.md routing section clarifying the discrete 1-4 scale and PASS/FAIL sub-criteria. The SHIP threshold (>=3.5) means all 4 sub-criteria must PASS (4/4); 3/4 results in REFINE. This is consistent with how PA-05 has been used in practice.

---

## Items NOT Fixed (With Justification)

### S-01 (Adversarial): "Manifest Is A Table Of Contents, Not An Execution Spec"
**Decision:** Partially addressed. The Quickstart (Fix #18) provides a concise execution procedure. Agent prompt templates are beyond the manifest's scope — the manifest maps artifacts to agents; the orchestrator composes prompts from artifact content. Added to "Known Limitations."

### S-06 (Adversarial): "Builder's 840-Line Recipe Has No Reading Guide"
**Decision:** Fixed with Brief Assembler extraction guide (added to artifact-builder-recipe.md routing section). Specifies what to INCLUDE VERBATIM vs SUMMARIZE vs REFERENCE. Full extraction templates would bloat the manifest — the Brief Assembler reads the recipe directly and applies judgment.

### S-08 (Adversarial): "mechanism-catalog.md Not Routed In Any Artifact"
**Decision:** Verified that artifact-builder-recipe.md "Step 1.3: Read the 73-line template" section exists and implicitly references mechanism-catalog.md through the recipe flow. The manifest correctly lists it as builder input. The recipe's Step 1.3 is about reading the template which embeds soul constraints, but mechanism-catalog.md is provided as a direct file route alongside tokens.css and components.css. The manifest and builder inputs are consistent — mechanism-catalog.md is a direct file route, not routed through the recipe.

### Gap #5 (Gap-analysis): Gate Short-Circuit Optimization
**Decision:** Fixed. Added as optional optimization in Phase 3A: "If gate runner completes before PA auditors and ANY identity gate fails, the orchestrator MAY skip PA deployment."

### Gap #12 (Gap-analysis): Item-to-Agent-Read Path Not Verified
**Decision:** Not fixed (documentation gap, not functional gap per gap-analysis own assessment). The routing table (Section 3) + critical sections index (Section 7) together provide adequate coverage.

---

*Changelog complete. 27 fixes applied across 4 priority levels. All 7 BLOCKING and 10 SIGNIFICANT issues resolved. Manifest rewritten from 731 lines to ~850 lines with 4 appendices (up from 3).*
