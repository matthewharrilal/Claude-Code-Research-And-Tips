# Stale Content Audit — ephemeral/va-extraction/

**Date:** 2026-02-26
**Auditor:** Opus (stale content specialist)
**Scope:** All files in `ephemeral/va-extraction/` evaluated for staleness, duplication, and context window impact
**Methodology:** Traced every file reference from MANIFEST.md quickstart steps 0-11, SKILL.md file tables, artifact-orchestrator.md, and all operational artifact files. Compared claimed vs actual line counts. Checked for cross-references from operational files to design/analysis files.

---

## Executive Summary

| Category | File Count | Total Lines | Recommendation |
|----------|-----------|-------------|----------------|
| Operational (read during runs) | 24 | 13,139 | KEEP |
| Redirect stubs | 3 | 871 | 1 UPDATE, 2 KEEP |
| Monolithic backups | 2 | 3,551 | ARCHIVE |
| Design/analysis artifacts | 48 | 18,315 | ARCHIVE (all 48) |
| Backup directory | 10 files | 6,325 | REMOVE |
| Historical directory | 1 file | 410 | KEEP |
| **Total archival candidates** | **53 files** | **28,241 lines** | **Saves ~1.1 MB** |

**Context window savings:** Removing/archiving the non-operational files eliminates 28,241 lines (~1.1 MB) from the working directory. This is 68% of the total 41,876 lines in `va-extraction/`. Any agent or tool scanning the directory currently sees 82 files; after cleanup it would see 27 files (24 operational + 3 stubs).

---

## 1. Redirect/Stub Files

### 1a. artifact-builder-recipe.md (827 lines)

**What it is:** A "redirect" file that contains 15 lines of redirect header + 812 lines of the original monolithic recipe preserved as reference content below a `---` separator.

**Operational references:** MANIFEST.md Appendix D (line 1023) describes it as "redirect (12 lines)" which is STALE -- the file is actually 827 lines. SKILL.md lists it in the 9-artifact table (item #2) as "Redirect -> split recipe files." The MANIFEST Section 3 (line 247) correctly says "~828 lines." Multiple operational files reference it by name in provenance citations.

**What would break if removed:** SKILL.md lists it as artifact #2. MANIFEST references it. The orchestrator currently does NOT need to read this file -- it routes directly to `artifact-builder-recipe-compose.md` and `artifact-builder-recipe-polish.md`. However, an orchestrator that reads SKILL.md's 9-artifact table would try to open this file.

**Stale line count:** MANIFEST Appendix D line 1023 says "redirect (12 lines)" but the file is 827 lines. This is contradicted by MANIFEST Section 3 line 247 which says "~828 lines."

**Recommendation:** UPDATE. Two options:
- **(A) Trim to true redirect** (15 lines): Remove lines 19-827 (the preserved original content). The original content is fully superseded by `artifact-builder-recipe-compose.md` and `artifact-builder-recipe-polish.md`. Fix MANIFEST Appendix D to say "redirect (15 lines)". This saves 812 lines.
- **(B) Keep as-is, fix count:** Just update MANIFEST line 1023 from "redirect (12 lines)" to "~827 lines."

**Preferred:** Option A. The reference content below the redirect header is fully duplicated in the split files. No agent reads it.

### 1b. artifact-gate-runner.md (22 lines)

**What it is:** Clean redirect stub pointing to 5 split files.

**Operational references:** SKILL.md artifact #3, MANIFEST Appendix D (line 1026, correctly says "redirect (22 lines)"). Multiple provenance citations.

**Line counts in file:** All 5 claimed line counts are accurate within tilde tolerance:
- `gate-runner-core.js` claimed ~2,930, actual 2,929
- `gate-runner-preconditions.md` claimed ~83, actual 83
- `gate-runner-spec.md` claimed ~300, actual 299
- `gate-runner-provenance.md` claimed ~151, actual 151
- `gate-manifest.json` claimed ~344, actual 343

**Stale content:** Line 21 says "31 gates remain in gate-runner scope" which may be outdated (gate-manifest.json is the canonical count source with 56 total gates). Line 15 says MONOLITHIC is "2,411-line document" but the actual file is 2,410 lines (off by 1, trivial).

**What would break if removed:** SKILL.md references it. Orchestrator might try to read it as a routing document.

**Recommendation:** KEEP. Clean, accurate, small.

### 1c. artifact-pa-protocol.md (22 lines)

**What it is:** Clean redirect stub pointing to 5 split files.

**Operational references:** SKILL.md artifact #4, MANIFEST Appendix D (line 1034). Multiple provenance citations.

**Line counts in file:** All 5 claimed line counts are accurate:
- `pa-questions.md` claimed ~431, actual 431
- `pa-deployment.md` claimed ~442, actual 442
- `pa-weaver.md` claimed ~466, actual 468 (2-line delta, within tilde tolerance)
- `pa-guardrails.md` claimed ~113, actual 113
- `pa-manifest.md` claimed ~89, actual 89

**Note:** The prior structural audit (crossref-integrity.md S-05) reported stale counts here (~412, ~237 etc.) but these have ALREADY BEEN FIXED in the v3 comprehensive cleanup commit.

**What would break if removed:** Same as 1b.

**Recommendation:** KEEP. Clean, accurate, small.

---

## 2. Backup Directory: `_backup-pre-implementation/`

**What it is:** Pre-Wave-4/5 snapshots of 10 files (MANIFEST, orchestrator, recipe, execution tracker, gate files, PA files). 6,325 lines total, 360KB.

**Contents:**
| File | Lines | Current Operational File |
|------|-------|------------------------|
| MANIFEST.md | 1,192 | MANIFEST.md (1,447 lines, heavily modified) |
| artifact-orchestrator.md | 1,058 | artifact-orchestrator.md (746 lines, reduced) |
| artifact-builder-recipe.md | 934 | Split into compose + polish files |
| EXECUTION-TRACKER-TEMPLATE.md | 327 | EXECUTION-TRACKER-TEMPLATE.md (199 lines, reduced) |
| gate-manifest.json | 159 | gate-manifest.json (343 lines, expanded) |
| gate-runner-core.js | 1,436 | gate-runner-core.js (2,929 lines, expanded) |
| gate-runner-spec.md | 188 | gate-runner-spec.md (299 lines, expanded) |
| pa-deployment.md | 237 | pa-deployment.md (442 lines, expanded) |
| pa-questions.md | 418 | pa-questions.md (431 lines) |
| pa-weaver.md | 376 | pa-weaver.md (468 lines, expanded) |

**Operational references:** ZERO. No operational file references `_backup-pre-implementation/`. Grepping for this path across all files in `va-extraction/` returns zero hits outside the backup directory itself.

**What would break if removed:** Nothing operational. The backups served as safety nets during the Wave 4/5 implementation. That implementation is complete and committed to git. Git history preserves the pre-implementation state at commit `9bf0775` and earlier.

**Recommendation:** REMOVE. Git history serves the same purpose. The backup is 360KB of dead weight. If the user wants to view pre-implementation state, `git show 9bf0775:ephemeral/va-extraction/MANIFEST.md` works.

---

## 3. Stale Line Counts

The prior structural audit (crossref-integrity.md) found 9 stale line counts. Most have been FIXED in the v3 comprehensive cleanup commit. Current remaining discrepancies:

| Location | Claimed | Actual | Severity | Status |
|----------|---------|--------|----------|--------|
| MANIFEST.md line 1023 | artifact-builder-recipe.md "redirect (12 lines)" | 827 lines | SIGNIFICANT | UNFIXED |
| MANIFEST.md line 1025 | artifact-builder-recipe-polish.md "~284 lines" | 300 lines | MINOR | UNFIXED |
| SKILL.md | artifact-builder-recipe-polish.md "~298 lines" | 300 lines | TRIVIAL | Within tilde |
| artifact-gate-runner.md line 21 | "31 gates remain" | 56 total (per gate-manifest.json) | MINOR | Possibly stale context |
| artifact-gate-runner.md line 15 | MONOLITHIC "2,411-line" | 2,410 lines | TRIVIAL | Off by 1 |

**Recommendation:** Fix the 2 UNFIXED items:
1. MANIFEST.md line 1023: Change "redirect (12 lines)" to "redirect + reference (~827 lines)" or trim the file per Section 1a above.
2. MANIFEST.md line 1025: Change "~284 lines" to "~300 lines."

---

## 4. Historical/Provenance Files

### 4a. gate-runner-provenance.md (151 lines)

**What it is:** History, traceability, and wave change logs for the gate runner architecture.

**Operational references:**
- MANIFEST.md lines 281, 308, 1030 (Appendix D lists it as a pipeline artifact)
- SKILL.md file table (listed with 151 lines)
- gate-manifest.json line 12 (`"provenance": "gate-runner-provenance.md"`)
- gate-runner-spec.md line 298 (end-of-file reference)
- artifact-gate-runner.md redirect table (line 12)
- check-consistency.js lines 521, 722 (verified in consistency checks)

**Is it read during a pipeline run?** NO. No agent prompt in MANIFEST Appendix E references it. The orchestrator does not read it during steps 0-11. It is metadata ABOUT the gate runner, not input TO the gate runner. The gate runner executes `gate-runner-core.js` and reads `gate-manifest.json` for the gate list.

**What would break if removed:** The SKILL.md file table and MANIFEST Appendix D list it. The check-consistency.js verifier would report a missing file. The cross-reference chain from gate-manifest.json and gate-runner-spec.md would have a dangling reference.

**Recommendation:** KEEP. It is listed in SKILL.md file tables (critical rule: do not remove files listed in SKILL.md file tables). It is small (151 lines), serves as provenance documentation for the 56-gate architecture, and is referenced by check-consistency.js which is an operational verification tool.

### 4b. _historical/orchestrator-sections-10-16.md (410 lines)

**What it is:** Archived sections of artifact-orchestrator.md (experimental 3-pass architecture, provenance, item traceability). Extracted when the orchestrator was reduced from ~1,193 to ~744 lines.

**Operational references:** MANIFEST.md line 1074 mentions "Historical/theoretical sections archived to `_historical/`." No operational file reads this during a run.

**What would break if removed:** Nothing operational. However, this is the only preserved copy of the experimental 3-pass Compositional Critic architecture (blocked until experiment #21). If experiment #21 ever runs, this file would be the starting point.

**Recommendation:** KEEP. Small (410 lines, 24KB), serves as the only source for an unresolved experimental feature.

---

## 5. Monolithic Backup Files

### 5a. artifact-gate-runner-MONOLITHIC.md (2,410 lines)

**What it is:** The pre-split monolithic gate runner document. All content has been decomposed into gate-runner-core.js, gate-runner-spec.md, gate-runner-preconditions.md, gate-runner-provenance.md, and gate-manifest.json.

**Operational references:** Referenced by name in 7 files:
- artifact-gate-runner.md line 15 ("Preserved original")
- gate-runner-provenance.md lines 3, 13, 20, 60, 122, 141
- gate-runner-preconditions.md line 3
- gate-runner-spec.md line 3
- gate-manifest.json line 14
- pa-guardrails.md line 4 (provenance only)
- MANIFEST.md lines 283, 321

All references are provenance citations ("Extracted from: ..."). NO operational file instructs an agent to READ this file during a pipeline run.

**What would break if removed:** Provenance references would become dangling. check-consistency.js does NOT verify this file's existence.

**Recommendation:** ARCHIVE to `_reference/`. It is 2,410 lines of fully superseded content. The split files are authoritative. Moving to `_reference/` preserves the audit trail while removing it from the working directory scan.

### 5b. artifact-pa-protocol-MONOLITHIC.md (1,141 lines)

**What it is:** The pre-split monolithic PA protocol document. All content decomposed into pa-questions.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md, and pa-manifest.md.

**Operational references:** Referenced by name in 7 files (all provenance citations):
- artifact-pa-protocol.md line 15
- pa-questions.md lines 4, 431
- pa-deployment.md lines 4, 442
- pa-weaver.md lines 4, 468
- pa-guardrails.md lines 4, 113
- pa-manifest.md line 4
- MANIFEST.md line 321

NO operational file instructs an agent to READ this file during a run.

**What would break if removed:** Same as 5a -- dangling provenance references only.

**Recommendation:** ARCHIVE to `_reference/`. Same rationale as 5a.

---

## 6. Duplicate Verification Scripts

### 6a. verify-pipeline-structure.js (605 lines) — MARKED STALE

**What it is:** A structural integrity verifier with ~200 binary checks. The file header (lines 1-6) explicitly states:
```
STALE -- DO NOT EXECUTE
Gate counts in this script (47) are outdated. Current canonical count: 54 gates.
Written before Pipeline v4 convergence reframe (2026-02-25).
```

**Operational references:** ZERO. Grepping for `verify-pipeline-structure` across all files in `va-extraction/` returns only the file's own internal reference (line 14 usage instructions). No operational file, MANIFEST, or SKILL.md references it.

**Relationship to check-consistency.js:** `check-consistency.js` (848 lines) is the active replacement, written for Pipeline v4 with current gate counts and cross-file reference checking. The two scripts have overlapping scope but different implementations. `check-consistency.js` is more comprehensive.

**What would break if removed:** Nothing. The file self-declares as stale and non-executable.

**Recommendation:** REMOVE. The file is explicitly marked STALE, references outdated gate counts (47 vs current 56), and is fully superseded by check-consistency.js. Keeping it risks an agent accidentally executing it and getting false failures.

---

## 7. Design/Analysis Files (v5-Design Phase Research Artifacts)

These 48 files total 18,315 lines and represent the research/extraction/review work that PRODUCED the operational artifacts. They are NOT read by any agent during a pipeline run.

### 7a. Extract files (8 files, 6,608 lines)

| File | Lines | Purpose |
|------|-------|---------|
| extract-d01-d03.md | 1,094 | VA diagram extraction, items 1-68 |
| extract-d04-d05.md | 373 | VA diagram extraction, items 1-20 |
| extract-d06-d08.md | 763 | VA diagram extraction, items 1-101 |
| extract-d09-d11.md | 907 | VA diagram extraction, items 1-78 |
| extract-d12-d14.md | 762 | VA diagram extraction, items 1-96 |
| extract-d15-d17.md | 699 | VA diagram extraction, items 1-91 |
| extract-d18-d20.md | 663 | VA diagram extraction, items 1-85 |
| extract-d21-d25.md | 1,347 | VA diagram extraction, items 1-166 |

**Operational references:** Referenced ONLY as provenance citations in artifact appendices (e.g., "ITEM 089 (extract-d15-d17.md L1324)"). These citations are embedded in the artifacts' traceability appendices, NOT read instructions. No agent prompt says "read extract-d01-d03.md."

**What would break if removed:** Provenance citations would become unverifiable. The item-level traceability from artifacts back to source diagrams would lose its source.

**Recommendation:** ARCHIVE to `_reference/`. These are the source material that was consumed to produce the 9 artifacts. They have historical/audit value but zero runtime value.

### 7b. Buddy review files (15 files, 2,776 lines)

| File Pattern | Count | Total Lines | Purpose |
|-------------|-------|-------------|---------|
| buddy-d*.md | 8 | 935 | Extraction buddy reviews |
| buddy-artifact-*.md | 6 | 1,549 | Artifact buddy reviews |
| buddy-review-*.md | 3 | 528 | Cross-review buddy reviews (note: only 2 of the originally planned set exist here; the third is buddy-review-actionability.md at 97 lines) |

**Operational references:** ZERO in any operational file.

**Recommendation:** ARCHIVE to `_reference/`.

### 7c. Meta-buddy review files (4 files, 694 lines)

| File | Lines |
|------|-------|
| meta-buddy-gates.md | 139 |
| meta-buddy-identity.md | 160 |
| meta-buddy-orchestrator.md | 215 |
| meta-buddy-recipe.md | 180 |

**Operational references:** ZERO.

**Recommendation:** ARCHIVE to `_reference/`.

### 7d. Phase 7 verification files (7 files, 2,233 lines)

| File | Lines | Purpose |
|------|-------|---------|
| phase7-adversarial.md | 395 | Adversarial review of artifacts |
| phase7-coverage-audit.md | 220 | Coverage verification |
| phase7-final-verification.md | 262 | Final verification pass |
| phase7-fix-changelog.md | 260 | Fix changelog from phase 7 |
| phase7-flow-simulation.md | 485 | Pipeline flow simulation |
| phase7-fresh-eyes.md | 309 | Fresh-eyes review |
| phase7-gap-analysis.md | 302 | Gap analysis |

**Operational references:** ZERO in any operational file.

**Recommendation:** ARCHIVE to `_reference/`.

### 7e. Classification/Registry files (5 files, 3,490 lines)

| File | Lines | Purpose |
|------|-------|---------|
| classify-by-agent.md | 889 | Item-to-agent classification |
| classify-by-layer.md | 999 | Item-to-layer classification |
| unified-registry.md | 995 | Merged unified registry of all 885 items |
| contradiction-candidates.md | 146 | Contradiction analysis |
| pipeline-structural-manifest.md | 679 | Structural manifest (pre-MANIFEST) |

**Operational references:** `classify-by-layer.md` is cited in MANIFEST.md Section 9 (coverage verification checklist, lines 876, 902, 1068) and in `artifact-identity-perception.md` line 556 as a provenance citation. `unified-registry.md` is cited in MANIFEST.md Section 9 (lines 876, 896, 902, 903, 1067). Both are listed in MANIFEST Appendix D as "Tracking Files (Audit/Verification Only -- Not Required for Execution)."

**What would break if removed:** MANIFEST Appendix D explicitly categorizes these as "Not Required for Execution." The MANIFEST's own Section 9 coverage verification checklist references them, but that checklist is a post-hoc audit tool, not a runtime dependency.

**Recommendation:** ARCHIVE to `_reference/`. MANIFEST already correctly labels them as non-execution files.

### 7f. Council files (2 files, 375 lines) -- NOT council-verdict.md

| File | Lines | Purpose |
|------|-------|---------|
| council-actionability.md | 213 | Actionability analysis from council process |
| council-adversarial.md | 162 | Adversarial review from council process |

**Operational references:** ZERO. Only `council-verdict.md` (575 lines) is operationally referenced.

**Note:** `council-verdict.md` is explicitly EXCLUDED from this recommendation per audit rules.

**Recommendation:** ARCHIVE to `_reference/`.

### 7g. Miscellaneous design files (7 files, 2,139 lines)

| File | Lines | Purpose |
|------|-------|---------|
| gate-naming-map.md | 118 | GR-XX to SC-XX naming correspondence |
| wave0-completion-report.md | 109 | Wave 0 implementation report |
| wave3-cleanup-report.md | 109 | Wave 3 cleanup report |
| verify-fix-identity.md | 39 | Fix verification for identity artifact |
| verify-fix-orchestrator.md | 97 | Fix verification for orchestrator |
| verify-fix-recipe.md | 124 | Fix verification for recipe |
| _merge-script.py | 484 | Script to merge classify-by-layer + classify-by-agent into unified-registry |

**Operational references:** ZERO for all 7 files.

**Recommendation:** ARCHIVE to `_reference/`. The _merge-script.py was a one-time tool to produce unified-registry.md. The verify-fix-*.md files documented specific fix verifications that are now committed to git.

---

## 8. Files Actually Read During a Pipeline Run

Tracing through MANIFEST.md quickstart steps 0-11 and all agent prompts in Appendix E:

### Phase 0 (Pre-Pipeline)
1. **MANIFEST.md** (1,447 lines) -- Orchestrator reads for routing authority
2. **EXECUTION-TRACKER-TEMPLATE.md** (199 lines) -- Copied to output directory
3. **artifact-orchestrator.md** (746 lines) -- Execution authority
4. **d10-observer-protocol.md** (593 lines) -- Observer agent prompt source (Section 4)

### Phase 0 (Content Analysis)
5. **artifact-routing.md** (1,056 lines) -- Content analysis protocol
6. **artifact-worked-examples.md** (182 lines) -- Example content map format

### Phase 1 (Brief Assembly)
7. **artifact-tc-brief-template.md** (235 lines) -- TC brief template
8. **artifact-identity-perception.md** (556 lines) -- Soul constraints + perception thresholds
9. **artifact-value-tables.md** (262 lines) -- Perception threshold CSS values

### Phase 2A (Pass A Build)
10. **artifact-builder-recipe-compose.md** (833 lines) -- Pass A recipe
11. **tokens.css** (external, 183 lines)
12. **components.css** (external, ~944 lines)
13. **mechanism-catalog.md** (external, varies)

### Phase 2A-gate (Structural Check)
14. **gate-runner-core.js** (2,929 lines) -- Gate functions (lightweight subset)
15. **gate-manifest.json** (343 lines) -- Gate registry

### Phase 2B (Pass B Build)
16. **artifact-builder-recipe-polish.md** (300 lines) -- Pass B recipe

### Phase 3A (Screenshots + Gates)
*(gate-runner-core.js and gate-manifest.json re-used)*

### Phase 3B (PA Audit)
17. **pa-questions.md** (431 lines) -- Question definitions
18. **pa-deployment.md** (442 lines) -- Auditor assignments
19. **pa-guardrails.md** (113 lines) -- Auditor constraints
20. **pa-weaver.md** (468 lines) -- Weaver protocol
21. **pa-guardrails-weaver.md** (59 lines) -- Weaver-only guardrails
22. **pa-manifest.md** (89 lines) -- PA tracking template

### Phase 3C (Verdict) + Iteration
*(pa-weaver.md re-used, artifact-orchestrator.md Section 7 for REFINE/REBUILD protocol)*

### Verification (Non-Runtime)
23. **check-consistency.js** (848 lines) -- Cross-file consistency checks (run by humans/agents modifying pipeline, not during builds)
24. **gate-runner-spec.md** (299 lines) -- Human-readable gate specs (orchestrator reference)
25. **gate-runner-preconditions.md** (83 lines) -- Pre-build text checks (BV-01-04)

### Override Authority
26. **council-verdict.md** (575 lines) -- Optional, read only for ambiguity resolution
27. **experiment-protocol.md** (51 lines) -- Experiment gates GR-36-39

### Reference (Listed in SKILL.md, Not Directly Consumed by Agents)
28. **gate-runner-provenance.md** (151 lines) -- Gate history (SKILL.md lists it; no agent reads it during a run)
29. **artifact-gate-runner.md** (22 lines) -- Redirect stub (SKILL.md lists it)
30. **artifact-pa-protocol.md** (22 lines) -- Redirect stub (SKILL.md lists it)
31. **artifact-builder-recipe.md** (827 lines) -- Redirect with preserved reference (SKILL.md lists it)

**Everything NOT on this list (items 1-31) is a candidate for archival.** That is 51 files totaling 22,476 lines.

---

## 9. Summary of Recommendations

### REMOVE (delete entirely)

| File/Dir | Lines | Rationale |
|----------|-------|-----------|
| `_backup-pre-implementation/` (10 files) | 6,325 | Git history preserves pre-implementation state. Zero operational references. Implementation is committed. |
| `verify-pipeline-structure.js` | 605 | Self-declares STALE. Superseded by check-consistency.js. Outdated gate counts would cause false failures. |
| **Subtotal** | **6,930** | |

### ARCHIVE (move to `_reference/` subdirectory)

| File Pattern | Count | Lines | Rationale |
|-------------|-------|-------|-----------|
| extract-d*.md | 8 | 6,608 | Source extraction artifacts -- provenance only |
| buddy-*.md | 15 | 2,776 | Buddy review artifacts -- provenance only |
| meta-buddy-*.md | 4 | 694 | Meta-buddy reviews -- provenance only |
| phase7-*.md | 7 | 2,233 | Phase 7 verification -- provenance only |
| classify-by-agent.md | 1 | 889 | Classification source -- non-execution per MANIFEST |
| classify-by-layer.md | 1 | 999 | Classification source -- non-execution per MANIFEST |
| unified-registry.md | 1 | 995 | Merged registry -- non-execution per MANIFEST |
| contradiction-candidates.md | 1 | 146 | Council analysis -- provenance only |
| pipeline-structural-manifest.md | 1 | 679 | Pre-MANIFEST structural doc -- superseded |
| council-actionability.md | 1 | 213 | Council analysis -- provenance only |
| council-adversarial.md | 1 | 162 | Council analysis -- provenance only |
| gate-naming-map.md | 1 | 118 | Naming correspondence -- reference only |
| wave0-completion-report.md | 1 | 109 | Implementation report -- provenance only |
| wave3-cleanup-report.md | 1 | 109 | Cleanup report -- provenance only |
| verify-fix-*.md | 3 | 260 | Fix verifications -- provenance only |
| _merge-script.py | 1 | 484 | One-time merge utility -- completed |
| artifact-gate-runner-MONOLITHIC.md | 1 | 2,410 | Fully superseded by split files |
| artifact-pa-protocol-MONOLITHIC.md | 1 | 1,141 | Fully superseded by split files |
| **Subtotal** | **50** | **21,025** | |

### UPDATE (fix stale content in-place)

| File | Line | Issue | Fix |
|------|------|-------|-----|
| MANIFEST.md | 1023 | Says "redirect (12 lines)" for artifact-builder-recipe.md | Change to "redirect + reference (~827 lines)" OR trim artifact-builder-recipe.md to 15-line redirect |
| MANIFEST.md | 1025 | Says "~284 lines" for artifact-builder-recipe-polish.md | Change to "~300 lines" |

### KEEP (no action)

| File | Lines | Rationale |
|------|-------|-----------|
| All 24 operational files | 13,139 | Read during pipeline runs |
| artifact-gate-runner.md (redirect) | 22 | Listed in SKILL.md, clean and accurate |
| artifact-pa-protocol.md (redirect) | 22 | Listed in SKILL.md, clean and accurate |
| artifact-builder-recipe.md (redirect) | 827 | Listed in SKILL.md -- but recommend trimming to 15 lines |
| gate-runner-provenance.md | 151 | Listed in SKILL.md file tables |
| _historical/orchestrator-sections-10-16.md | 410 | Only source for experimental 3-pass architecture |
| council-verdict.md | 575 | Explicit audit rule: do not remove |
| d10-observer-protocol.md | 593 | Operationally referenced by artifact-orchestrator.md line 130 |

---

## 10. Implementation Plan

**Phase 1 (5 min):** Remove `_backup-pre-implementation/` directory and `verify-pipeline-structure.js`.

**Phase 2 (10 min):** Create `_reference/` directory. Move all 50 ARCHIVE files into it.

**Phase 3 (5 min):** Fix 2 stale line counts in MANIFEST.md. Optionally trim `artifact-builder-recipe.md` from 827 to 15 lines.

**Phase 4 (5 min):** Update provenance references in MONOLITHIC files (now in `_reference/`) and redirect stubs to point to `_reference/` path. Update MANIFEST Appendix D to note that tracking files moved to `_reference/`.

**Risk assessment:** LOW. All removed/archived files have zero operational references. The only cross-reference impact is provenance citations (e.g., "Extracted from: artifact-gate-runner-MONOLITHIC.md") which are documentation, not runtime dependencies.

---

## Appendix: Context Window Impact

**Before cleanup:**
- 82 files in va-extraction/
- ~41,876 total lines
- Agent scanning directory sees: operational + research + backups + stale scripts

**After cleanup:**
- 27 files in va-extraction/ (+ _reference/ subdirectory with 50 archived files)
- ~13,921 total lines in working directory
- 67% reduction in visible file count
- Agent scanning directory sees ONLY operational files + 3 small redirect stubs

**Key benefit:** Any agent that reads the directory listing or does broad file searches will no longer be distracted by 50+ research artifacts. The `_reference/` directory can be explicitly excluded from agent context unless needed for provenance auditing.
