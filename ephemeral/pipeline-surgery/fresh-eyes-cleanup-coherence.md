# Fresh-Eyes Coherence Check — Pipeline v3 Modified Files
Date: 2026-02-25
Reviewer: fresh-eyes-reviewer (zero prior context)
Scope: All 11 files listed in task #15

---

## 1. Can I Run This Pipeline?

**Rating: YES, with friction.**

As a first-time orchestrator, I could run this pipeline by following the MANIFEST.md Quickstart (lines 10-42). The 11-step procedure is unambiguous: spawn Content Analyst, determine mode, spawn Brief Assembler, verify BV gates, spawn Builder, take screenshots, run Gate Runner, spawn 9 PA auditors, spawn Integrative Auditor, spawn Weaver, get verdict. Each step says what to do, with what inputs, producing what outputs.

**Friction points that would slow me down:**

- **MANIFEST.md is 960+ lines.** For a "routing authority" document, this is heavy. The Quickstart is excellent, but I would need to also read Sections 3, 4, 6, and 7 carefully before a first run. Effective reading requirement: ~500 lines minimum from MANIFEST alone plus the orchestrator doc.
- **The Execution Tracker (596 lines) is thorough but intimidating.** The 4-level hierarchy (L0-L3) is well-designed. But filling it during a live run adds significant overhead. I would likely skip L3 detail entries on a first run and fill them retroactively.
- **artifact-orchestrator.md at 1,120 lines is the densest file.** Sections 0-9 are execution-critical (~640 lines). Sections 10-16 are historical/theoretical context (~480 lines). The separation is not visually obvious. A first-time reader might read all 1,120 lines when only 640 matter for execution.

**What would make me confident:** The Quickstart procedure plus Appendix B (File Routing Quick Reference) plus Appendix E (Agent Prompt Templates) form a self-contained execution package. If someone told me "read lines 10-42, then Appendix B and E," I could run the pipeline.

---

## 2. Tone Consistency

**Rating: 4/5 — Largely coherent, with two tonal seams.**

The files overwhelmingly read like one voice: precise, authoritative, evidence-tagged, with council rulings incorporated systematically. The ITEM citation format is consistent. Council compliance sections appear in every file.

**Two tonal seams:**

1. **artifact-orchestrator.md Sections 10+ vs Sections 0-9.** Sections 0-9 are crisp execution instructions ("Spawn Content Analyst with raw content markdown"). Sections 10+ shift to historical analysis mode ("Flagship has NEVER BEEN ACHIEVED — requires 3-pass + Opus"). This is a different voice — retrospective, analytical, sometimes speculative. The transition happens without warning around line 720.

2. **pa-guardrails.md vs pa-guardrails-weaver.md.** The auditor-facing guardrails file (125 lines) is clean, minimal, and well-scoped. The weaver-only guardrails file (59 lines) feels like leftover material that was carved out — it is useful but terse. Section 5 (S-09 Stacking Check) is 3 lines with no explanation of what an orchestrator should DO if it fails. The file works but reads as a residual artifact of the split rather than a purposefully designed document.

---

## 3. Confusing Passages (Would Make Me Stop and Re-Read)

**3.1 Gate count arithmetic is inconsistent across files.**

- MANIFEST.md line 142: "42 programmatic gate checks (36 GR + 4 BV + 2 diagnostic)"
- gate-manifest.json `totalGateCount.grandTotal`: 42
- gate-runner-spec.md line 23: "Total executable gates: 42 (20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF)"
  - Math check: 20 + 9 + 7 + 2 + 4 = 42. OK.
- gate-runner-core.js header (line 18): "Total executable gates: 36 GR (in this file) + 4 BV (in this file) = 40 in-file executable + 2 diagnostic (GR-33, GR-34, no code) = 42 total pipeline gates"
- MANIFEST line 246: "42 gate-runner gates (18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION)"
  - Math check: 18 + 11 + 7 + 2 + 4 = 42. But wait — gate-runner-spec says 20 REQUIRED and 9 RECOMMENDED.

**The discrepancy:** MANIFEST says 18 REQUIRED + 11 RECOMMENDED. gate-runner-spec.md and gate-manifest.json say 20 REQUIRED + 9 RECOMMENDED. The total (42) is the same, but the tier assignment of individual gates differs between these files. This is the single most confusing cross-reference issue in the pipeline.

Looking closer at gate-manifest.json notes (line 198): "Wave 4...GR-63/GR-64 promoted from RECOMMENDED to REQUIRED." This means the MANIFEST line 246 counts (18 REQ / 11 REC) are STALE — they predate the Wave 4 promotions. The gate-runner-spec.md and gate-manifest.json counts (20 REQ / 9 REC) are current. **MANIFEST.md needs to update line 246 to 20 REQUIRED + 9 RECOMMENDED.**

**3.2 "~165-line constraint layer" in Council Mandates vs "73-line constraint layer" everywhere else.**

MANIFEST.md line 746 says: "CF-01: ~165-line constraint layer within ~3,600 total builder input." But throughout the rest of the MANIFEST, orchestrator, and builder recipe, the constraint layer is consistently described as "73 lines." The TC Brief Template is "~223 lines." The constraint layer is a SUBSET of the brief template.

Looking at MANIFEST line 872: "Constraint layer within brief: ~73 lines." So CF-01 in line 746 saying "~165-line" is either wrong or refers to something different. I suspect "~165" is a stale number from before the brief template was finalized. This discrepancy would confuse a first-time reader trying to understand the brief size budget.

**3.3 MANIFEST Section 3 header references "artifact-gate-runner.md" multiple times.**

MANIFEST.md line 244 says: "artifact-gate-runner.md (split into 5 files — see gate-manifest.json)". This is correct. But the Critical Sections Index (lines 710-713) still says:

```
artifact-gate-runner.md | "SECTION 1: IDENTITY GATES" (GR-01–GR-10) | ANY fail = REBUILD
artifact-gate-runner.md | "SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44, GR-60) | ANY fail = REFINE
```

These sections now live in `gate-runner-spec.md` and `gate-runner-core.js`, NOT in `artifact-gate-runner.md` (which is a 22-line redirect). A first-time reader following these pointers would hit a redirect file, not the actual content.

**3.4 D-09 count: "8 instructions" vs "9 instructions."**

MANIFEST line 228: "PHASE 4: DEPLOY DISPOSITION (D-01–D-09)" — implies 9 dispositions.
MANIFEST line 270: "Tier 4: DISPOSITION (8 instructions, ~40 lines)" — says 8.
artifact-builder-recipe.md line 4: "D-01 through D-09" — clearly 9.
artifact-orchestrator.md line 271: "Tier 4: DISPOSITION (8 instructions, ~40 lines)" — still says 8.

D-09 was added in Wave 3 but the "8 instructions" label was not updated to "9" in all places. The MANIFEST and orchestrator both say "8" in the tier structure description while the actual recipe contains 9. **Fix: update all "8 instructions" references to "9 instructions."**

---

## 4. Missing Connections and Dead-End Cross-References

**4.1 pa-guardrails-weaver.md is NOT in the MANIFEST file registry.**

MANIFEST Appendix D (File Path Registry, lines 920-962) lists every artifact file. `pa-guardrails-weaver.md` is absent. Yet `pa-guardrails.md` line 5 references it: "Pipeline vocabulary (tiers, channels, mechanisms, anti-patterns, thresholds) has been moved to pa-guardrails-weaver.md (Weaver/Orchestrator only)."

This file exists on disk but is invisible to the MANIFEST. The MANIFEST's "PA Auditor Routing" section (lines 293-304) does not mention it. The Weaver routing should include pa-guardrails-weaver.md as an input, but currently does not.

**4.2 MANIFEST Appendix B (File Routing) lists Weaver inputs but omits pa-guardrails-weaver.md.**

Line 853: "Weaver | Integrative report + gate results + individual auditor reports + calibration references (multi-coherence scale, severity scale, metaphor expression spectrum)"

The calibration references described here come from pa-weaver.md Section 2. But pa-guardrails-weaver.md contains additional Weaver context (anti-patterns, stacking check, tier 1 equivalents, revision degradation warnings). Either the Weaver should receive pa-guardrails-weaver.md explicitly, or its content should be folded into pa-weaver.md.

**4.3 MANIFEST "Known Limitations" is sparse.**

Section "Known Limitations" (line 965) has only 1 item. For a pipeline of this complexity, more known limitations would be expected. This feels like a placeholder that was never expanded.

**4.4 Execution Tracker references "GR-61 PASS" in Phase 3A-pre but the tracker template lists 38 gates in the Gate Runner Results table.**

Execution Tracker line 298: "Total | 38" in the gate runner results table. But elsewhere the pipeline has 42 gates. The tracker note at line 300 explains: "GR-23-GR-28 are orchestrator decision rules (Wave 3 reclassification). BV-01-BV-04 tracked in Phase 1. GR-64 runs post-weaver (Phase 3C-post)." So: 42 total - 6 orchestrator rules - 4 BV (Phase 1) + GR-64 (Phase 3C) = 33 in Phase 3A. But the table says 38. Let me recount from the categories listed:
- Identity (GR-01-10, GR-05b): 11
- Perception (GR-11, GR-13-15, GR-44, GR-60): 6
- Anti-Pattern (GR-17-22): 6
- Wave 2 (GR-45, GR-46, GR-50-53): 6
- Experiential (GR-61, GR-62, GR-63, GR-64): 4
- Meta (GR-48, GR-49): 2
- Mode Detection (GR-33, GR-34): 2
- Output (GR-43): 1
= 38. OK, but GR-64 is in this table despite being noted as running in Phase 3C-post. Minor inconsistency.

---

## 5. Density Assessment

### Files That Are Too Dense for Single-Read LLM Parsing

**artifact-orchestrator.md — TOO DENSE (1,120 lines).** An LLM agent reading this file would struggle to separate execution-critical content (Sections 0-9, ~640 lines) from historical/theoretical context (Sections 10-16, ~480 lines). The ITEM citations (168+ inline citations) create significant noise for an agent trying to extract actionable instructions. Recommendation: The execution sections work well. The historical sections should be in a separate file or clearly marked as SKIP-FOR-EXECUTION.

**MANIFEST.md — BORDERLINE (960+ lines).** The Quickstart and phase-by-phase execution sections are well-structured. But the routing tables, critical sections index, coverage verification, and appendices create a document that is more reference manual than execution guide. An orchestrator would need to read it in passes, not linearly.

**artifact-builder-recipe.md — ACCEPTABLE (828 lines).** The recipe format (sequenced phases 1-6) is well-structured. The appendices (items cross-reference, evidence status) are clearly separated. A builder agent could follow Phases 1-6 sequentially. The appendices would not interfere with execution.

**gate-runner-core.js — ACCEPTABLE for code execution.** At ~1,626 lines of JavaScript, this is within normal code file range. The 9 functions are clearly separated with section headers. The header comments explain execution order. An orchestrator executing this code would know which function to call when.

**EXECUTION-TRACKER-TEMPLATE.md — ACCEPTABLE (596 lines).** The 4-level hierarchy is clear. It reads as a form to fill in, not as instructions to follow. No parsing difficulty.

**gate-runner-spec.md — CLEAN (225 lines).** Concise, well-structured, no density issues.

**gate-manifest.json — CLEAN (200 lines).** Machine-readable, well-organized.

**pa-deployment.md — CLEAN (355 lines).** Section 0 (Experiential Pass) is excellent — the primacy positioning is smart design. Auditor assignments table is clear.

**pa-weaver.md — CLEAN (449 lines).** Well-structured with clear section boundaries. The experiential anchor (Section 0) mirrors the auditor pattern nicely.

**pa-guardrails.md — CLEAN (125 lines).** Minimal, focused, appropriate scope for auditor consumption.

**pa-guardrails-weaver.md — CLEAN but ORPHANED (59 lines).** Content is useful but the file feels disconnected from the routing system. See Missing Connections #4.1.

---

## 6. Overall Impression

### Pipeline Readiness Rating: 3.5 / 5

**What works well:**
- The Quickstart procedure is genuinely executable. An orchestrator could follow steps 0-11 and produce output.
- The information isolation design is smart: auditors see only screenshots + questions, builder sees only brief + reference files, weaver sees everything.
- The experiential pass protocol (Section 0 in both pa-deployment.md and pa-weaver.md) is the strongest design element. The primacy positioning, the visual verification rule, and the priority override are all clearly thought through.
- Gate runner split (monolithic to 5 files) is clean. gate-manifest.json as a machine-readable TOC is excellent engineering.
- The Execution Tracker template is comprehensive without being prescriptive.
- Agent prompt templates in MANIFEST Appendix E make spawning concrete.

**What needs fixing before a clean first run:**

1. **BLOCKING: Gate tier count mismatch.** MANIFEST line 246 says 18 REQ / 11 REC. gate-runner-spec.md and gate-manifest.json say 20 REQ / 9 REC. One of these is stale. Fix the stale one.

2. **BLOCKING: pa-guardrails-weaver.md is not in the MANIFEST.** This file exists, is referenced by pa-guardrails.md, but is invisible to the routing system. Either add it to MANIFEST Appendix D and the Weaver routing, or fold its content into pa-weaver.md.

3. **SIGNIFICANT: "8 instructions" should be "9 instructions"** wherever Tier 4 DISPOSITION is described (MANIFEST, orchestrator).

4. **SIGNIFICANT: "~165-line constraint layer" in CF-01 summary (MANIFEST line 746) contradicts the "73-line" figure used everywhere else.** Clarify or fix.

5. **MINOR: MANIFEST Critical Sections Index references "artifact-gate-runner.md" sections** that now live in the split files. Update file references.

6. **MINOR: artifact-orchestrator.md would benefit from a "STOP HERE FOR EXECUTION" marker** after Section 9 to prevent agents from reading 480 lines of historical context.

**Summary:** The pipeline is architecturally sound and operationally executable. The main risks are stale cross-references from the Wave 3/Wave 4 file splits that have not fully propagated through all documents. A first-time orchestrator following the Quickstart would succeed, but would encounter confusion at the points listed above. Fixing the 2 BLOCKING and 2 SIGNIFICANT items would bring this to 4/5 readiness.

---

*End of fresh-eyes coherence review.*
