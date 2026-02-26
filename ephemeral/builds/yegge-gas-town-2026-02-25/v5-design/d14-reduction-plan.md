# D14 Complexity Reduction Plan

**Date:** 2026-02-26
**Author:** d14-complexity-reducer agent
**Purpose:** Offset ~+300 new lines from v5 features (two-pass builder, observer, brief-diff, narration) with ~-500 to -700 lines of removals. D14 (Complexity-Induced Invisibility) is the only crack dimension that WORSENED in v4.
**Scope:** RESEARCH ONLY — edit specifications for implementation agent.

---

## Part 1: ITEM Citation Removal from artifact-orchestrator.md

### Problem

`artifact-orchestrator.md` (1,193 lines) contains 393 ITEM citation references. These are extraction provenance markers (e.g., `- **ITEM 96** (extract-d01-d03.md L242) Flat (each agent, direct I/O) = NEW topology`). The content they reference is operationally important. The citation format (`**ITEM N** (file L###)`) is noise — an agent reading this file does not need to know which extraction file a fact came from.

### Inventory

**Total ITEM citation lines:** 393 lines matching `ITEM \d+` pattern across the file.

**Distribution by section:**

| Section | Line Range | ITEM Cite Count | Character |
|---------|-----------|----------------|-----------|
| SECTION 0: Preconditions | 28-65 | 11 | Operational — keep content, strip cite |
| SECTION 1: Topology | 69-120 | 18 | Operational — keep content, strip cite |
| SECTION 2: Phase 0 | 167-207 | 14 | Operational — keep content, strip cite |
| SECTION 3: Phase 1 | 215-295 | 28 | Operational — keep content, strip cite |
| SECTION 4: Mode Selection | 305-347 | 16 | Operational — keep content, strip cite |
| SECTION 5: Phase 2 | 356-423 | 25 | Operational — keep content, strip cite |
| SECTION 6: Phase 3 | 431-529 | 32 | Operational — keep content, strip cite |
| SECTION 7: Verdict | 548-611 | 16 | Operational — keep content, strip cite |
| SECTION 8: Summary | 706-734 | 11 | Low-value section (see Part 4) |
| SECTION 9: Rerouted VALUES | 741-781 | 18 | Low-value section (see Part 4) |
| SECTION 10: 3-Pass Experimental | 794-843 | 37 | Historical/experimental — DELETE ENTIRE SECTION |
| SECTION 11: Experiment Protocol | 846-931 | 38 | Historical — DELETE ENTIRE SECTION |
| SECTION 12: Suppressor Mgmt | 935-976 | 19 | Historical — DELETE ENTIRE SECTION |
| SECTION 13: 13 Concepts | 979-1051 | 30 | Historical — DELETE ENTIRE SECTION |
| SECTION 14: Diagnostic Context | 1054-1115 | 37 | Historical — DELETE ENTIRE SECTION |
| SECTION 15: Revision Quality | 1118-1132 | 5 | Historical — DELETE ENTIRE SECTION |
| SECTION 16: Recommendations | 1135-1159 | 14 | Historical — DELETE ENTIRE SECTION |
| ITEM COVERAGE VERIFICATION | 1163-1193 | 44 | Historical — DELETE ENTIRE SECTION |

### Edit Strategy

**Two-phase approach:**

**Phase A: Delete Sections 10-16 + Coverage Verification entirely (~400 lines)**
These sections are marked with an explicit HTML comment at line 784-790:
```
<!-- === STOP HERE FOR EXECUTION ================================= -->
<!-- Sections 0-9 above contain everything needed to run the       -->
<!-- pipeline. Sections 10+ below are HISTORICAL CONTEXT,          -->
```

The orchestrator document ITSELF says these sections are not needed for execution. They contain:
- Section 10: 3-pass experimental architecture (BLOCKED, zero evidence)
- Section 11: Experiment protocol (superseded by experiment-protocol.md standalone file)
- Section 12: Suppressor management (all 20 suppressors already removed, purely historical)
- Section 13: 13 irreducible concepts (theoretical framework, not operational)
- Section 14: Diagnostic context (historical gap analysis)
- Section 15: Revision quality theory
- Section 16: Actionability tiers (historical recommendations, all either implemented or superseded)
- Coverage verification: ITEM-to-section mapping (only useful during initial extraction)

**Action:** Delete everything from line 784 (the `<!-- STOP HERE -->` comment) through line 1193 (end of file), replacing with a 3-line pointer:

```markdown
---

*Sections 10-16 (historical context, experiment protocol, suppressor management, 13 concepts, diagnostics, revision quality, recommendations) archived to `_historical/orchestrator-sections-10-16.md`. For execution, Sections 0-9 above are complete.*
```

**Savings: ~407 lines removed, +3 lines pointer = net -404 lines**

**Phase B: Strip ITEM citations from Sections 0-9 (~189 remaining ITEM lines)**

For each ITEM citation line in Sections 0-9, transform from:
```
- **ITEM 96** (extract-d01-d03.md L242) Flat (each agent, direct I/O) = NEW topology
```
To:
```
- Flat (each agent, direct I/O) = NEW topology
```

**Pattern:** Remove `**ITEM N** (extract-dXX-dYY.md LNNN) ` or `**ITEM N** (extract-dXX-dYY.md LNNN-NNN) ` prefix from each line. Preserve the content after the citation.

**Special cases:**
1. Lines where the ITEM IS the entire content (e.g., `- **ITEM 2** (extract-d06-d08.md L490) [EXPERIMENTAL]`) — the `[EXPERIMENTAL]` tag alone is meaningless without context. These appear in Section 10+ (already deleted in Phase A). No special handling needed for Sections 0-9.
2. Lines with "Rerouted ITEM" prefix (Section 9) — same treatment: strip `**Rerouted ITEM N** (file LNNN)` prefix, keep content.
3. Lines where content is a bare concept name after the cite (e.g., `- **ITEM 39** (extract-d06-d08.md L575) (11 concepts collapsed)`) — keep the content, it's meaningful.

**Implementation:** A regex replacement across Sections 0-9:
```
Find:    - \*\*(?:Rerouted )?ITEM \d+\*\* \(extract-d\d+-d\d+\.md L\d+(?:-\d+)?\)
Replace: -
```

**Count of ITEM lines in Sections 0-9:** 189 lines affected.
**Characters removed per line:** Average ~45 characters of citation prefix per line.
**Lines removed:** 0 (content preserved, just shorter). But many ITEM citation lines where content duplicates the prose above them can be deleted entirely. I estimate ~60 of 189 ITEM lines are purely redundant with the prose text that precedes them.

**Estimated savings from redundant ITEM line deletion:** ~60 lines

**Phase B total: ~60 lines removed**

### Phase A + B Combined: ~464 lines removed

---

## Part 2: Historical File Archival

### Files Referenced by MANIFEST.md (Appendix D)

These files are OPERATIONALLY REFERENCED and must NOT be archived:

**Pipeline Artifacts (required for execution):**
- artifact-orchestrator.md (1,193 lines)
- artifact-identity-perception.md (556 lines)
- artifact-builder-recipe.md (833 lines)
- artifact-gate-runner.md (redirect, ~22 lines)
- gate-runner-core.js (2,273 lines)
- gate-runner-spec.md (272 lines)
- gate-runner-preconditions.md (83 lines)
- gate-runner-provenance.md (151 lines)
- gate-manifest.json (326 lines)
- artifact-routing.md (1,056 lines)
- artifact-tc-brief-template.md (235 lines)
- artifact-worked-examples.md (182 lines)
- artifact-value-tables.md (262 lines)
- EXECUTION-TRACKER-TEMPLATE.md (162 lines)
- experiment-protocol.md (51 lines)
- artifact-pa-protocol.md (redirect, ~22 lines)
- pa-questions.md (431 lines)
- pa-deployment.md (376 lines)
- pa-weaver.md (466 lines)
- pa-guardrails.md (113 lines)
- pa-guardrails-weaver.md (59 lines)
- pa-manifest.md (89 lines)
- MANIFEST.md (1,303 lines)

**Tracking files (referenced in Appendix D as audit/verification):**
- unified-registry.md (995 lines)
- classify-by-layer.md (999 lines)

**Also referenced (in Appendix D as stale but listed):**
- pipeline-structural-manifest.md (679 lines) — see Part 3
- verify-pipeline-structure.js (605 lines) — see Part 3

### Files to Archive to `_historical/`

These files are NOT referenced in MANIFEST.md Appendix D for any operational purpose. They are extraction-phase artifacts, buddy reviews, council deliberations, and verification reports.

| File | Lines | Category |
|------|-------|----------|
| extract-d01-d03.md | 1,094 | Extraction |
| extract-d04-d05.md | 373 | Extraction |
| extract-d06-d08.md | 763 | Extraction |
| extract-d09-d11.md | 907 | Extraction |
| extract-d12-d14.md | 762 | Extraction |
| extract-d15-d17.md | 699 | Extraction |
| extract-d18-d20.md | 663 | Extraction |
| extract-d21-d25.md | 1,347 | Extraction |
| buddy-d01-d03.md | 83 | Buddy review |
| buddy-d04-d05.md | 137 | Buddy review |
| buddy-d06-d08.md | 117 | Buddy review |
| buddy-d09-d11.md | 58 | Buddy review |
| buddy-d12-d14.md | 108 | Buddy review |
| buddy-d15-d17.md | 98 | Buddy review |
| buddy-d18-d20.md | 94 | Buddy review |
| buddy-d21-d25.md | 240 | Buddy review |
| buddy-review-d06-d08.md | 180 | Buddy review |
| buddy-review-d12-d14.md | 251 | Buddy review |
| buddy-review-actionability.md | 97 | Buddy review |
| buddy-artifact-recipe.md | 347 | Buddy review |
| buddy-artifact-orchestrator.md | 307 | Buddy review |
| buddy-artifact-gates.md | 281 | Buddy review |
| buddy-artifact-pa.md | 267 | Buddy review |
| buddy-artifact-identity.md | 162 | Buddy review |
| buddy-artifact-routing.md | 185 | Buddy review |
| meta-buddy-orchestrator.md | 215 | Meta review |
| meta-buddy-recipe.md | 180 | Meta review |
| meta-buddy-identity.md | 160 | Meta review |
| meta-buddy-gates.md | 139 | Meta review |
| classify-by-agent.md | 889 | Classification |
| contradiction-candidates.md | 146 | Council prep |
| council-actionability.md | 213 | Council phase |
| council-adversarial.md | 162 | Council phase |
| council-verdict.md | 575 | Council output (BUT referenced in MANIFEST as optional override) |
| phase7-flow-simulation.md | 485 | Phase 7 audit |
| phase7-adversarial.md | 395 | Phase 7 audit |
| phase7-fresh-eyes.md | 309 | Phase 7 audit |
| phase7-gap-analysis.md | 302 | Phase 7 audit |
| phase7-final-verification.md | 262 | Phase 7 audit |
| phase7-fix-changelog.md | 260 | Phase 7 audit |
| phase7-coverage-audit.md | 220 | Phase 7 audit |
| verify-fix-recipe.md | 124 | Fix verification |
| verify-fix-orchestrator.md | 97 | Fix verification |
| verify-fix-identity.md | 39 | Fix verification |
| wave0-completion-report.md | 109 | Wave report |
| wave3-cleanup-report.md | 109 | Wave report |
| gate-naming-map.md | 118 | Historical naming |
| _merge-script.py | 484 | Extraction tooling |
| artifact-gate-runner-MONOLITHIC.md | 2,410 | Pre-split backup |
| artifact-pa-protocol-MONOLITHIC.md | 1,141 | Pre-split backup |

**EXCEPTION: council-verdict.md** — MANIFEST references this as an optional orchestrator input ("read only to resolve ambiguities where artifacts conflict"). However, MANIFEST also states "the 9 artifacts are self-sufficient for execution." **Recommendation:** Archive it but note the optional reference. No build will break.

### Summary

| Category | Files | Total Lines |
|----------|-------|-------------|
| Extraction reports | 8 | 6,608 |
| Buddy reviews | 11 | 1,832 |
| Buddy artifact reviews | 6 | 1,549 |
| Meta buddy reviews | 4 | 694 |
| Classification | 1 | 889 |
| Council docs | 3 | 950 |
| Phase 7 audits | 7 | 2,233 |
| Fix verification | 3 | 260 |
| Wave reports | 2 | 218 |
| Other historical | 3 | 720 |
| MONOLITHIC backups | 2 | 3,551 |
| **TOTAL** | **50 files** | **19,504 lines** |

**78 files total in va-extraction. 50 would be archived (64%). 27 remain operational + 1 _backup-pre-implementation dir.**

### Files That LOOK Historical But Are Operationally Referenced

1. **unified-registry.md** (995 lines) — Referenced in MANIFEST Appendix D as "Item-by-item tracking." Used during pipeline modifications to verify item coverage. Keep.
2. **classify-by-layer.md** (999 lines) — Referenced in MANIFEST Appendix D as "Layer classification source." Used during audits. Keep.
3. **council-verdict.md** (575 lines) — Borderline. MANIFEST says optional. Recommending archive WITH a note in MANIFEST that it's moved.

---

## Part 3: Stale File Recommendation

### pipeline-structural-manifest.md (679 lines)

**Current state:** Line 1 says `# STALE -- DO NOT USE FOR VERIFICATION`. Gate counts are outdated (says 42, actual is 54). Tier breakdowns are stale.

**Analysis:** This file's purpose (structural health checks for pipeline artifacts) is PARTIALLY served by:
- `gate-manifest.json` (canonical gate registry)
- `verify-pipeline-structure.js` (also stale — see below)
- The MANIFEST itself (Section 9: Coverage Verification)

**Recommendation: ARCHIVE to `_historical/`.** The structural verification concept is useful but this specific file is too stale to update. If structural verification is needed in v5, it should be rebuilt from scratch against current gate-manifest.json.

**Savings: -679 lines (moved to _historical/)**

### verify-pipeline-structure.js (605 lines)

**Current state:** Line 3 says `STALE -- DO NOT EXECUTE`. Gate counts are outdated (47 vs 54). REQUIRED_GATES arrays are stale. "Running this will produce false failures."

**Analysis:** This was a programmatic verifier for ~200 binary checks across all pipeline artifacts. Its concept is sound but its implementation references:
- Old gate IDs (47 not 54)
- Old tier breakdowns
- Old file paths potentially
- Pre-wave-3 split structure

**Recommendation: ARCHIVE to `_historical/`.** Like the manifest above, the concept should be rebuilt for v5 if needed, not patched.

**Savings: -605 lines (moved to _historical/)**

### Combined Part 3 savings: -1,284 lines (moved to _historical/)

---

## Part 4: Spec Simplification Opportunities

### 4A: Orchestrator Sections 8-9 Compression (~87 lines saveable)

**Section 8 (Total Build Summary, lines 702-738):** Contains timeline table and cost estimates that duplicate the Quickstart (lines 10-45) and Phase-by-Phase (Section 4). The ITEM citations here are redundant with prose.

**Proposed action:** Compress Section 8 from ~36 lines to ~15 lines by:
- Removing ITEM citations (11 lines of raw items)
- Removing the "Rerouted ITEM" lines (2 lines)
- Keeping only the timeline table and cost paragraph

**Savings: ~23 lines**

**Section 9 (Rerouted VALUES Items, lines 741-781):** Contains 15 council-rerouted items that are purely historical context about WHY certain items were rerouted. This information was relevant during the extraction phase but has no operational value now — the items ARE in their correct locations already.

**Proposed action:** Compress Section 9 to a 5-line summary:
```markdown
## SECTION 9: VALUES CONTEXT (Historical)

15 council-rerouted VALUES items (Pattern 5 Category A) inform pipeline calibration and are distributed across Sections 0-8. Historical PA-05 data: Gas Town 3.5/4 (old pipeline, Opus, 610 lines), Middle 2.5/4, Flagship 1.5/4 (14 suppressors). Full rerouting detail archived to `_historical/orchestrator-sections-10-16.md`.
```

**Savings: ~40 lines → 5 lines = ~35 lines**

**Combined Section 8-9 savings: ~58 lines**

### 4B: MANIFEST.md Duplication with Orchestrator (~150 lines saveable)

MANIFEST.md (1,303 lines) has significant overlap with artifact-orchestrator.md:

1. **Phase-by-Phase Execution (MANIFEST Section 4, lines 358-605):** 247 lines that largely duplicate the orchestrator's Sections 2-7. MANIFEST's role is ROUTING (what goes where), not EXECUTION (step-by-step protocol). The Phase-by-Phase section in MANIFEST should be a POINTER to the orchestrator, not a copy.

**Proposed action:** Replace MANIFEST Section 4 (247 lines) with a ~30-line summary table pointing to orchestrator sections:

```markdown
## 4. Phase-by-Phase Execution

For the AUTHORITATIVE step-by-step protocol, see `artifact-orchestrator.md` Sections 2-7.

| Phase | Orchestrator Section | Key Agents | Duration |
|-------|---------------------|------------|----------|
| Phase 0 | SECTION 2 | Content Analyst (Opus) | ~15 min |
| Phase 0.5 | SECTION 3 (Mode Selection) | Orchestrator | — |
| Phase 1 | SECTION 3 | Brief Assembler (Opus) | ~15 min |
| Phase 2 | SECTION 4 | Builder (Opus) | ~45 min |
| Phase 3A | SECTION 6 | Orchestrator (screenshots + gates) | ~5 min |
| Phase 3B | SECTION 6 | 9 PA Auditors + Integrative (Opus) | ~15 min |
| Phase 3C | SECTION 7 | Weaver (Opus) | ~5 min |

### Critical Orchestrator Decisions
- BV-01 through BV-07: Brief verification before builder spawn
- APPLIED vs COMPOSED mode: Selected in Phase 0.5
- SHIP / SHIP WITH FIXES / REFINE / REBUILD: Verdict logic in Section 7
- Iteration budget: 1 REBUILD + 2 REFINE maximum
```

**Savings: 247 - 30 = ~217 lines**

2. **However:** This is a HIGHER-RISK edit. MANIFEST's Phase-by-Phase section is heavily read by the orchestrator at pipeline start. Removing it requires confidence that the orchestrator will also read artifact-orchestrator.md. Since MANIFEST already says "artifact-orchestrator.md is the EXECUTION authority" (line 4), this is architecturally correct but operationally risky.

**Recommendation:** DEFER this edit to a separate complexity reduction pass. Flag for v5.1. Count as "potential" savings.

### 4C: gate-runner-spec.md Simplification (~0 lines)

`gate-runner-spec.md` (272 lines) is already lean — it's the human-readable companion to the 2,273-line JS file. `gate-manifest.json` (326 lines) is the canonical machine-readable registry. These serve different purposes (human vs JSON) and don't significantly overlap. No simplification needed.

### 4D: MANIFEST Appendix E (Agent Prompt Templates, ~312 lines saveable)

MANIFEST lines 990-1304 contain copy-paste-ready agent prompt templates. These are operationally useful but they:
1. Duplicate content from the orchestrator
2. Are maintained separately from the actual execution flow
3. Total ~312 lines

**Proposed action:** Move Appendix E to a standalone file `agent-prompts.md` (~312 lines, same content) and replace with a 3-line pointer in MANIFEST:

```markdown
## Appendix E: Agent Prompt Templates

Copy-paste-ready prompts for every pipeline agent. See `agent-prompts.md` for templates.
```

**Savings from MANIFEST: ~309 lines** (moved, not deleted — total spec unchanged but MANIFEST gets lighter)

### 4E: MANIFEST Appendix C (Glossary, ~36 terms, ~35 lines saveable)

The Glossary (lines 879-915, ~36 lines) defines terms that are self-explanatory in context (e.g., "Fresh-Eyes: PA auditors see ONLY screenshots + questions"). Most terms are defined inline where they first appear in the document.

**Proposed action:** Keep only the 10 most non-obvious terms (CCS, Survival Function, Content Tension, Stacked Gap, etc.). Move the rest to a comment or delete.

**Savings: ~15 lines**

---

## Part 5: Net Impact Calculation

### Definite Savings (ready for immediate implementation)

| Category | Action | Lines Removed |
|----------|--------|--------------|
| Orchestrator Sections 10-16 | Delete, archive to _historical/ | -404 |
| Orchestrator ITEM citations (Sections 0-9) | Strip citation prefixes, delete redundant lines | -60 |
| Orchestrator Sections 8-9 compression | Compress to summaries | -58 |
| Stale: pipeline-structural-manifest.md | Archive to _historical/ | -679 |
| Stale: verify-pipeline-structure.js | Archive to _historical/ | -605 |
| **SUBTOTAL: Definite** | | **-1,806 lines** |

Note: The 50 historical files (19,504 lines) being archived to `_historical/` are not counted as "lines removed from the spec" — they move from the main directory to a subdirectory. The line count above reflects only changes to OPERATIONAL files that agents read during builds.

### Moderate-Risk Savings (recommended, flag for review)

| Category | Action | Lines Removed |
|----------|--------|--------------|
| MANIFEST Appendix E extraction | Move prompts to standalone file | -309 |
| MANIFEST Glossary trim | Keep 10 terms, remove 26 | -15 |
| **SUBTOTAL: Moderate-risk** | | **-324 lines** |

### Deferred Savings (v5.1, higher risk)

| Category | Action | Lines Removed |
|----------|--------|--------------|
| MANIFEST Section 4 dedup | Replace with pointer to orchestrator | -217 |
| **SUBTOTAL: Deferred** | | **-217 lines** |

### Grand Total

| Tier | Lines |
|------|-------|
| Definite | -1,806 |
| Moderate-risk | -324 |
| Deferred | -217 |
| **TOTAL POSSIBLE** | **-2,347** |
| **Recommended (Definite + Moderate)** | **-2,130** |

**vs. target of -400 to -600:** The plan exceeds the target by 3-5x. This is because the true bloat is in Sections 10-16 of the orchestrator (400 lines of historical content behind an explicit "STOP HERE" marker) plus two fully-stale files (1,284 lines with their own "DO NOT USE" warnings). These are low-risk, high-value removals.

**vs. new feature additions (~+300 lines):** Even the "Definite" tier alone (-1,806) provides 6:1 offset ratio.

---

## Part 6: Exact Edit Specifications

### Edit 1: Archive Orchestrator Sections 10-16

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`

**Step 1:** Copy lines 784-1193 to new file `ephemeral/va-extraction/_historical/orchestrator-sections-10-16.md`.

**Step 2:** Delete lines 784-1193 from artifact-orchestrator.md.

**Step 3:** Append at end of artifact-orchestrator.md:
```markdown
---

*Sections 10-16 (historical context, experiment protocol, suppressor management, 13 concepts, diagnostics, revision quality, recommendations, item coverage verification) archived to `_historical/orchestrator-sections-10-16.md`. For execution, Sections 0-9 above are complete.*
```

**Result:** artifact-orchestrator.md goes from 1,193 lines to ~792 lines (-401).

### Edit 2: Strip ITEM Citations from Orchestrator Sections 0-9

**File:** `ephemeral/va-extraction/artifact-orchestrator.md` (post-Edit 1)

**Regex to apply globally (Sections 0-9 only):**
```
Find:    ^- \*\*(?:Rerouted )?ITEM \d+\*\* \(extract-d\d+-d\d+\.md L\d+(?:-\d+)?\)
Replace: -
```

**Then manually review** each modified line. Delete lines where the remaining content:
- Is a bare `[META/historical]` tag with no operational content
- Duplicates the prose sentence immediately above it
- Contains only an evidence source reference

**Estimated manual deletions:** ~60 lines.

**Result:** artifact-orchestrator.md goes from ~792 to ~732 lines (-60).

### Edit 3: Compress Orchestrator Section 8

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`

**Replace** Section 8 (lines 702-738 approximately, post previous edits) with:

```markdown
## SECTION 8: TOTAL BUILD SUMMARY

| Phase | Duration | Agent Count | Key Agent |
|-------|----------|-------------|-----------|
| Phase 0: Content Analysis | ~15 min | 1 (Opus) | Content Analyst |
| Phase 1: Brief Assembly | ~15 min | 1 (Opus) | Brief Assembler |
| Phase 2: Building | ~45 min | 1 (Opus) | Builder |
| Phase 3A: Screenshots | ~5 min | 0 (lead does this) | Orchestrator |
| Phase 3B: PA Audit | ~15 min | 10 (9 + integrative) | PA-1 through PA-9 |
| Phase 3C: Verdict | ~5 min | 1 (Opus) | Weaver |
| **TOTAL** | **~80-105 min** | **15 agents** |  |

**Costs:** Build with convergence: ~80-180 min, ~$50-250/page (1-2 REFINE cycles typical). After the pipeline completes, archive the output directory to `design-system/pipeline/archived-runs/{SLUG}-{DATE}/`.
```

**Savings:** ~23 lines.

### Edit 4: Compress Orchestrator Section 9

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`

**Replace** Section 9 (lines 741-781 approximately) with:

```markdown
## SECTION 9: VALUES CONTEXT (Historical)

15 council-rerouted VALUES items (Pattern 5 Category A) inform pipeline calibration. Key data points: Gas Town PA-05 3.5/4 (old pipeline, Opus, 610 lines), Middle PA-05 2.5, Flagship PA-05 1.5. Suppressor removal curve: HYPOTHESIZED per council. All items are distributed across Sections 0-8 in their operational locations. Full rerouting provenance archived with Sections 10-16.
```

**Savings:** ~35 lines.

### Edit 5: Archive Stale Files

**Commands:**
```bash
mkdir -p ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/pipeline-structural-manifest.md ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/verify-pipeline-structure.js ephemeral/va-extraction/_historical/
```

**Update MANIFEST.md Appendix D:** Change the "Pipeline Integrity Files" table entries for these two files to note their archived location:
```markdown
| pipeline-structural-manifest.md | `ephemeral/va-extraction/_historical/pipeline-structural-manifest.md` | ARCHIVED — stale gate counts (42 vs 54) |
| verify-pipeline-structure.js | `ephemeral/va-extraction/_historical/verify-pipeline-structure.js` | ARCHIVED — stale gate counts (47 vs 54) |
```

### Edit 6: Archive 50 Historical Files

**Commands:**
```bash
mkdir -p ephemeral/va-extraction/_historical/

# Extraction reports
mv ephemeral/va-extraction/extract-d*.md ephemeral/va-extraction/_historical/

# Buddy reviews (all buddy-* files)
mv ephemeral/va-extraction/buddy-*.md ephemeral/va-extraction/_historical/

# Meta buddy reviews
mv ephemeral/va-extraction/meta-buddy-*.md ephemeral/va-extraction/_historical/

# Classification (classify-by-agent only; classify-by-layer stays per MANIFEST)
mv ephemeral/va-extraction/classify-by-agent.md ephemeral/va-extraction/_historical/

# Council prep/deliberation (verdict stays — optional orchestrator reference)
mv ephemeral/va-extraction/contradiction-candidates.md ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/council-actionability.md ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/council-adversarial.md ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/council-verdict.md ephemeral/va-extraction/_historical/

# Phase 7 audit files
mv ephemeral/va-extraction/phase7-*.md ephemeral/va-extraction/_historical/

# Fix verification
mv ephemeral/va-extraction/verify-fix-*.md ephemeral/va-extraction/_historical/

# Wave reports
mv ephemeral/va-extraction/wave*.md ephemeral/va-extraction/_historical/

# Other historical
mv ephemeral/va-extraction/gate-naming-map.md ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/_merge-script.py ephemeral/va-extraction/_historical/

# MONOLITHIC backups
mv ephemeral/va-extraction/artifact-gate-runner-MONOLITHIC.md ephemeral/va-extraction/_historical/
mv ephemeral/va-extraction/artifact-pa-protocol-MONOLITHIC.md ephemeral/va-extraction/_historical/
```

**Update MANIFEST.md:** Add to Appendix D "Tracking Files" section:
```markdown
| _historical/ | `ephemeral/va-extraction/_historical/` | 50 archived files (extraction reports, buddy reviews, council docs, phase 7 audits, MONOLITHIC backups). Not required for execution. |
```

**Also update MANIFEST.md:** Change council-verdict.md reference in Quickstart and Section 7 to note archived path:
```
- `council-verdict.md` (575 lines) — Archived to `_historical/`. The 9 artifacts are self-sufficient for execution.
```

### Edit 7: Extract MANIFEST Appendix E (Moderate-Risk)

**File:** `ephemeral/va-extraction/MANIFEST.md`

**Step 1:** Copy lines 990-1304 to new file `ephemeral/va-extraction/agent-prompts.md`.

**Step 2:** Replace those lines in MANIFEST with:
```markdown
## Appendix E: Agent Prompt Templates

Copy-paste-ready prompts for every pipeline agent are in `agent-prompts.md`. Variables marked with `{VARIABLE_NAME}` must be filled by the orchestrator at spawn time.
```

**Result:** MANIFEST goes from 1,303 to ~994 lines (-309).

### Edit 8: Trim MANIFEST Glossary (Moderate-Risk)

**File:** `ephemeral/va-extraction/MANIFEST.md`

**Remove these glossary entries** (terms self-explanatory in context):
- Execution Brief (defined in Quickstart)
- TC Brief Template (defined in Quickstart)
- Content Map (defined in Phase 0)
- Soul Constraints (defined in Section 1)
- Perception Thresholds (defined in Section 1)
- Disposition (defined in Section 3)
- Mechanism (defined when first used)
- Channel (defined when first used)
- Zone (defined when first used)
- PA-05 (defined in PA section)
- Mode: APPLIED / Mode: COMPOSED (defined in Mode section)
- DUAL-ROUTE (defined in routing section)
- Fresh-Eyes (defined in PA section)
- Quality Floor (defined in Phase 2)
- Suppressor (historical, all 20 removed)
- Recipe vs Checklist (defined multiple times)

**Keep these 10 terms** (non-obvious or technical):
- Survival Function (S(x) = 1/(1+C(x)))
- CCS (Compositional Coherence Score)
- Value Tables
- TC (Tension-Composition)
- Register (NARRATIVE/REFERENCE/CODE)
- Boundary
- Multi-Coherence
- PA-05 Scale Labels (FLAT/ASSEMBLED/COMPOSED/DESIGNED)
- Content Tension
- Stacked Gap
- Conviction Statement

**Savings:** ~15 lines from glossary reduction.

---

## Implementation Priority Order

1. **Edit 6 first:** Archive 50 historical files (zero-risk, clears directory noise)
2. **Edit 5 next:** Archive stale files (zero-risk, self-identified as stale)
3. **Edit 1:** Delete orchestrator Sections 10-16 (low-risk, self-identified as non-execution)
4. **Edit 2:** Strip ITEM citations (low-risk, content preserved)
5. **Edits 3-4:** Compress Sections 8-9 (low-risk, summary replacements)
6. **Edit 7:** Extract MANIFEST prompts (moderate-risk, creates new file)
7. **Edit 8:** Trim glossary (moderate-risk, judgment calls on which terms to keep)

Edits 1-6 are SAFE (total -1,806 lines). Edits 7-8 are MODERATE-RISK (total -324 lines). All are reversible via git.

---

*End of reduction plan. Ready for implementation agent.*
