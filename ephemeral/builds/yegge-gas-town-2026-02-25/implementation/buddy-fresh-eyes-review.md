# Fresh-Eyes Review — Pipeline v4 Implementation
**Date:** 2026-02-25
**Reviewer:** Fresh-Eyes Opus Agent (zero prior context)
**Files reviewed:** 13 files (all modified pipeline artifacts + supporting files)
**Approach:** Read every file as a NEW orchestrator seeing them for the first time

---

## 1. First Impressions (2-3 sentences)

This is an impressively thorough pipeline specification. The MANIFEST.md is the clear entry point — the 11-step quickstart is actionable and the file provides everything an orchestrator needs to understand the full pipeline flow. However, the sheer volume (MANIFEST alone is ~1,265 lines, orchestrator spec is ~1,100 lines, gate-runner-core.js is ~1,700 lines) means attention decay is a real risk for any orchestrator running this end-to-end. The most usable files are the EXECUTION-TRACKER-TEMPLATE (compact, fillable) and gate-manifest.json (clear JSON structure). The least usable are the artifact-routing.md and artifact-orchestrator.md — both are over 1,000 lines with dense cross-references that require multiple reads to internalize.

---

## 2. Confusion Map (ranked by severity)

### CRITICAL (would stop me from running pipeline)

**C-1: Gate count discrepancies across files (SEVERITY: HIGH)**
- gate-manifest.json says: 20 REQUIRED, 9 RECOMMENDED, 7 ADVISORY (= 36 non-BV/diagnostic)
- gate-manifest.json `totalGateCount.inGateRunner` says: 36
- gate-manifest.json header comment says: `"total": 42, "grandTotal": 42`
- gate-runner-core.js header says: "40 GR (in this file) + 5 BV = 45 in-file executable + 2 diagnostic = 47 total"
- MANIFEST.md says: "42 gates (20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BV)"
- The REQUIRED count in manifest.json lists 20 gates but the note says "19 gates verified by GR-48" — because GR-48 is self-referential. This is explained but still confusing on first read.
- **Net confusion:** Is it 36, 40, 42, 45, or 47 gates? The answer depends on what you count (BV gates, diagnostic, GR-48 itself), but an orchestrator running for the first time would not know which number to trust. RECOMMENDATION: Add a single "DEFINITIVE COUNT" table at the top of gate-manifest.json that breaks down unambiguously.

**C-2: BV-05 exists in gate-runner-core.js but NOT in gate-manifest.json (SEVERITY: HIGH)**
- gate-manifest.json `briefVerification.gates` lists: `["BV-01", "BV-02", "BV-03", "BV-04"]` — count: 4
- gate-runner-core.js implements BV-05 (Recipe Keyword Scan) at line 150-192
- MANIFEST.md references "BV-01 through BV-04" everywhere — never mentions BV-05
- The EXECUTION-TRACKER-TEMPLATE says "BV gates: ___/4 PASS" — should this be /5?
- **This is a genuine disagreement between files.** Either BV-05 is new and the manifest/tracker were not updated, or it should not be in the code.

**C-3: GR-55, GR-66, GR-67 referenced in gate-runner-core.js header but have no code (SEVERITY: MEDIUM)**
- Line 26: "GR-55/66/67 added (Pipeline v4)" — but I cannot find any function implementing these gates in the file.
- crack-dimensions.md references GR-55 as a defense for dimension 12 (downstream propagation).
- Are these planned but not yet implemented? If so, they should be removed from the header comment or marked as PLANNED.

### SIGNIFICANT (would cause me to pause and re-read)

**C-4: "artifact-gate-runner.md" is a redirect but still referenced (SEVERITY: MEDIUM)**
- MANIFEST.md Appendix D says: `artifact-gate-runner.md | redirect (22 lines) | Gate Runner — points to split files`
- But MANIFEST.md Section 3 and the Critical Sections Index both reference "artifact-gate-runner.md" headers like `"SECTION 1: IDENTITY GATES"` as if they were in that file.
- An orchestrator following the Critical Sections Index would open artifact-gate-runner.md and find a 22-line redirect, not the gates.

**C-5: MANIFEST line count discrepancy (SEVERITY: LOW-MEDIUM)**
- MANIFEST.md header says the tracker is "~595 lines" but the actual EXECUTION-TRACKER-TEMPLATE.md is 147 lines.
- MANIFEST.md says gate-runner-core.js is "~1,626 lines" but the file header says "~1,654 lines" and the actual file is ~1,700 lines.
- These are minor but erode trust in the manifest's accuracy.

**C-6: Orchestrator decision rules GR-23 through GR-28 — where are they? (SEVERITY: MEDIUM)**
- MANIFEST says: "GR-23-GR-28 reclassified to orchestrator Section 9"
- artifact-orchestrator.md should have these in a "Section 9" — but I cannot verify without reading the full 1,100-line file (which I read partially).
- An orchestrator would need to know: do I run these as code, or are they manual checks? The answer is manual text/config checks, but this is only clear if you read the MANIFEST's gate runner section carefully.

**C-7: D-01 through D-09 keyword definitions in BV-05 don't match the actual dispositions (SEVERITY: MEDIUM)**
- In gate-runner-core.js BV-05 (lines 153-163), D-01 maps to "spatial, zone, background, section, layout" and D-09 maps to "accessibility, contrast, focus, wcag, aria"
- But in artifact-tc-brief-template.md, D-01 is "Content-Register Reading" (about NARRATIVE/REFERENCE/CODE) and D-09 is "The Quiet Zone" (about deliberately plainer zones)
- The keyword scan would check for the wrong concepts. D-09's actual keywords should be things like "quiet, plain, fewer, simple" — not "accessibility, contrast, wcag."
- **This means BV-05 would false-pass or false-fail on real briefs.**

### MINOR (noted but wouldn't stop me)

**C-8: "Pipeline v3" vs "Pipeline v4" naming inconsistency**
- MANIFEST.md title says "Pipeline v3"
- gate-runner-core.js says "Pipeline v4 Programmatic Verification"
- gate-manifest.json says `"version": "4.0.0"`
- crack-dimensions.md references "Pipeline v3+" and "CLOSED (v4)"
- FIX-TRACKER.md says "Verified In: Pipeline v4"
- The MANIFEST hasn't been renamed to v4. Is this intentional?

**C-9: pa-deployment.md says 69 questions, but assignments total doesn't obviously add to 69**
- Auditor assignments: A=9, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6 = 69. Confirmed correct. But the note "(49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)" requires mental arithmetic. A simple "sum = 69 confirmed" would help.

---

## 3. Duplication Map (same instruction in multiple files)

### D-1: Soul Constraints (SC-01 through SC-10)
- **MANIFEST.md** Section 1 (full table, lines 74-86)
- **artifact-tc-brief-template.md** Tier 1 (as world-descriptions, lines 17-35)
- **artifact-orchestrator.md** (referenced but not inline — defers to identity-perception.md)
- **ASSESSMENT:** Intentional dual-route (world-description for builder, binary for gates). NOT a problem — this is by design and well-documented.

### D-2: BV-01 through BV-04 gate descriptions
- **MANIFEST.md** Quickstart step 4a (lines 28-33)
- **MANIFEST.md** Phase 1 step 6 (lines 409-415)
- **gate-manifest.json** briefVerification section (lines 49-53)
- **gate-runner-core.js** (as executable code, lines 35-148)
- **ASSESSMENT:** The same 4 gates described in 4 places with slightly different wording. The MANIFEST describes them twice in the same file (quickstart AND detailed phase). Consolidate the quickstart to say "see Phase 1 step 6" instead of restating.

### D-3: PA-05 sub-criteria definition
- **MANIFEST.md** Section 3 under pa-protocol (lines 310-316)
- **pa-weaver.md** Section 1 and 2.4
- **pa-deployment.md** Section 1.3
- **ASSESSMENT:** Three slightly different framings. MANIFEST says "4 sub-criteria: Designed + Coherent + Proportionate + Polished." pa-weaver.md adds "each sub-criterion is PASS/FAIL." These should be identical text. Minor risk of divergence over time.

### D-4: Verdict logic priority order
- **MANIFEST.md** Phase 3C step 3 (lines 503-516)
- **artifact-orchestrator.md** Section 7 (referenced, not fully read)
- **gate-manifest.json** verdictLogic section (lines 62-68)
- **pa-weaver.md** Section 5.1
- **MANIFEST Appendix E** Weaver prompt template (lines 1209-1219)
- **ASSESSMENT:** This is the most duplicated instruction in the pipeline. 5 locations, each with slightly different level of detail. The gate-manifest.json version uses verdict LABELS (REBUILD, REFINE, etc.) while the others use priority numbers. An orchestrator reading all 5 would need to mentally reconcile them. RECOMMENDATION: Designate ONE file as authoritative for verdict logic and have all others point to it.

### D-5: Screenshot protocol
- **MANIFEST.md** Phase 3A (lines 451-472)
- **pa-deployment.md** Section 2 (lines 235-298)
- **ASSESSMENT:** Nearly identical content. pa-deployment.md has more detail (animation override CSS, DPR validation). MANIFEST could reference pa-deployment.md instead of restating.

---

## 4. Orphan Map (references to things that don't exist)

### O-1: "artifact-gate-runner.md" section headers referenced as if still a living file
- MANIFEST Critical Sections Index (lines 715-718) references headers like "SECTION 1: IDENTITY GATES" inside artifact-gate-runner.md
- The file is a 22-line redirect. Those headers are now in gate-runner-spec.md or gate-runner-core.js comments.
- **FIX:** Update the Critical Sections Index to point to the split files.

### O-2: GR-55, GR-66, GR-67 referenced in gate-runner-core.js header but not implemented
- Line 23 lists GR-55 (ADVISORY), GR-66 (ADVISORY), GR-67 (ADVISORY) as "added (Pipeline v4)"
- No implementation code exists for any of these in the file.
- gate-manifest.json advisory section lists only 7 gates: `["GR-05b", "GR-19", "GR-21", "GR-22", "GR-46", "GR-50", "GR-53"]` — none of GR-55/66/67.
- **FIX:** Either implement the gates or remove from the header comment.

### O-3: "tracker-preflight.sh" referenced but does not exist
- EXECUTION-TRACKER-TEMPLATE.md line 1 says: "Fields marked **(auto)** are filled by `tracker-preflight.sh`"
- FIX-TRACKER.md line 18 says: "run `tracker-preflight.sh` which checks this file for unapplied fixes"
- No such script exists in the repository.
- **IMPACT:** Low (the tracker works without it as manual), but the reference creates false expectations.

### O-4: "checkVisibleContent(screenshotDir)" exported in gate-runner-core.js header but not implemented
- Line 16 says: `checkVisibleContent(screenshotDir) — Post-screenshot visible content check (A-03)`
- No function body exists for this in the file.
- EXECUTION-TRACKER-TEMPLATE line 49 references it: "Visible content check: ___ (auto: PASS/FAIL from checkVisibleContent)"
- **FIX:** Implement the function or remove references.

### O-5: "BV-05" gate exists in code but not in manifest/tracker
- Already noted in C-2 above. The gate exists (lines 150-192 of gate-runner-core.js) but is absent from:
  - gate-manifest.json (briefVerification lists only BV-01-04)
  - EXECUTION-TRACKER-TEMPLATE ("BV gates: ___/4 PASS")
  - MANIFEST.md (all BV references say BV-01-04)

### O-6: "ephemeral/pipeline-retro/07-context-gap.md" referenced in MANIFEST Appendix E
- MANIFEST.md lines 989, 1152 reference this file for "full prompt text with commentary"
- This file may or may not exist (I have no way to verify without checking). If ephemeral files were cleaned, this is an orphan reference.

---

## 5. Skip Risk Map (sections most likely to be skipped under time pressure)

### HIGH SKIP RISK (orchestrator will likely skim or skip entirely)

1. **MANIFEST.md Sections 6-9** (Failure/Recovery, Critical Index, Council Mandates, Coverage Verification, lines 603-827) — ~225 lines of reference material that the orchestrator will skip until something goes wrong. This is fine for reference but means the Critical Sections Index (which is vital) is buried.

2. **MANIFEST.md Appendix A-C** (Evidence Taxonomy, File Routing, Glossary, lines 830-910) — ~80 lines of definitions. Will be skipped. The Glossary is actually useful but its position guarantees it won't be read.

3. **artifact-routing.md middle sections** (Structural Heterogeneity Mapping, Reader Model, Temporal Composition, Compression Physics, Content-Volume Map — TOC items 3-8, 11-12) — These are essential for the Brief Assembler but will be skimmed by an orchestrator who only needs to know "spawn Content Analyst with this file."

4. **artifact-builder-recipe.md** beyond Phase 1 — The recipe is ~828 lines. The orchestrator doesn't need to read this (it's for the builder). But the Brief Assembler needs specific sections. Skip risk = the orchestrator won't know which sections to extract for the Brief Assembler.

5. **pa-weaver.md Sections 6-9** (Anti-patterns, Mode Determinants, Cross-Page Coherence, VALUES items) — ~200 lines of context that the Weaver needs but will be low priority vs. the verdict logic in Sections 0-5.

### MODERATE SKIP RISK

6. **MANIFEST.md Phase 0.5 (Mode Selection)** — Easy to miss because it's a sub-step between Phase 0 and Phase 1. An orchestrator might jump from "Content Map received" to "spawn Brief Assembler" without checking mode.

7. **Gate-manifest.json execution steps 2.5 and 2.7** — The fractional step numbers (2.5 for DPR, 2.7 for screenshot quality) are easy to miss if the orchestrator is scanning for integer steps.

8. **MANIFEST Appendix E (Agent Prompt Templates)** — Ironically, these are the MOST operationally useful part of the manifest (copy-paste-ready prompts), but they're buried at line 985+.

### LOW SKIP RISK (will be read)

9. **MANIFEST Quickstart** (lines 12-43) — This is the entry point and will be read by every orchestrator.
10. **EXECUTION-TRACKER-TEMPLATE** — Short enough (147 lines) to read completely.
11. **gate-manifest.json** — Well-structured JSON, easy to scan.

---

## 6. Missing Information Map

### M-1: No "hello world" worked example of a COMPLETE pipeline run
- artifact-worked-examples.md exists (referenced in MANIFEST) but I didn't read it. However, the MANIFEST quickstart describes the procedure abstractly. A concrete worked example showing "here's the exact prompt I sent to Content Analyst, here's what came back, here's what I sent to Brief Assembler, etc." would dramatically reduce confusion for new orchestrators.

### M-2: No explicit timing budget breakdown
- MANIFEST says "80-105 minutes estimated runtime" but doesn't break this down by phase beyond the section headers (~15 min Phase 0, ~15 min Phase 1, ~45 min Phase 2, ~5 min Phase 3A, ~15 min Phase 3B, ~5 min Phase 3C). An explicit timing table would help orchestrators plan.

### M-3: No troubleshooting FAQ for common orchestrator mistakes
- The Failure/Recovery table (Section 6) is structured by phase but doesn't cover orchestrator-specific mistakes like "I forgot to set deviceScaleFactor:1" or "I spawned the Integrative before all 9 reports were in."

### M-4: Where does artifact-value-tables.md content come from?
- The MANIFEST references this file repeatedly but it is not one of the "9 artifacts" listed. Is it a derived file? A standalone? Its provenance is unclear.

### M-5: How does the orchestrator actually EXECUTE gate-runner-core.js?
- The file contains functions but no `module.exports` or `export` statements. The orchestrator needs to know: do I `require()` this? Do I copy-paste into Playwright? The MANIFEST says "Playwright JavaScript executed by the orchestrator" but the exact invocation pattern is missing. RECOMMENDATION: Add a 5-line example showing how to call `runAllGates(page, briefText)`.

### M-6: What happens when the orchestrator IS Claude Code?
- The MANIFEST assumes a human-like orchestrator or a scripted system. When Claude Code is the orchestrator, some steps are different (e.g., Claude Code spawns agents via TeamCreate, not shell scripts). The Appendix E prompt templates are helpful but the orchestrator's own instructions for "how to run this as a Claude Code team lead" are implicit, not explicit.

---

## 7. Overall Usability Assessment

**Score: 3.5 / 5**

| Dimension | Score | Notes |
|-----------|-------|-------|
| Can I find the entry point? | 5/5 | MANIFEST quickstart is clear and prominent |
| Can I understand what each file does? | 4/5 | MANIFEST Appendix D is excellent. gate-manifest.json is clear. |
| Can I run the pipeline step by step? | 3/5 | Quickstart is actionable but several orphan refs and count discrepancies would cause pauses |
| Do files agree with each other? | 2.5/5 | BV-05 discrepancy, gate count confusion, GR-55/66/67 orphans, v3/v4 naming |
| Is the tracker fillable? | 4/5 | Compact, phase-organized, clear field types. "tracker-preflight.sh" reference is orphan. |
| Would I need to ask questions? | Yes — at least 3-4 questions before I could run confidently |

**Top 3 issues to fix before running a pipeline:**
1. **Reconcile BV-05:** Either add it to gate-manifest.json + tracker, or remove it from gate-runner-core.js
2. **Fix BV-05 disposition keyword mapping:** D-01-D-09 keywords in BV-05 don't match actual disposition definitions
3. **Remove or implement GR-55/GR-66/GR-67/checkVisibleContent:** References to unimplemented code create false promises

**Top 3 quality-of-life improvements:**
1. Move Agent Prompt Templates (Appendix E) EARLIER in MANIFEST — they are the most operationally useful content and buried at line 985
2. Add a definitive gate count table reconciling all the different numbers
3. Standardize version naming: either "Pipeline v3" everywhere or "Pipeline v4" everywhere

---

## Appendix: Files Reviewed

| # | File | Lines (approx) | Read Completely? |
|---|------|-----------------|------------------|
| 1 | artifact-tc-brief-template.md | 236 | Yes |
| 2 | artifact-builder-recipe.md | ~828 | First 500 lines (persisted output) |
| 3 | artifact-routing.md | ~900 | First 500 lines (persisted output) |
| 4 | artifact-orchestrator.md | ~1,100 | First 500 lines (persisted output) |
| 5 | MANIFEST.md | ~1,265 | Yes (in 2 reads) |
| 6 | gate-runner-core.js | ~1,700 | Yes (in 3 reads) |
| 7 | gate-manifest.json | 200 | Yes |
| 8 | EXECUTION-TRACKER-TEMPLATE.md | 147 | Yes |
| 9 | pa-weaver.md | 479 | Yes |
| 10 | pa-deployment.md | 364 | Yes |
| 11 | crack-dimensions.md | 64 | Yes |
| 12 | AUXILIARY-PROMPT.md | 167 | Yes |
| 13 | FIX-TRACKER.md | 30 | Yes |
