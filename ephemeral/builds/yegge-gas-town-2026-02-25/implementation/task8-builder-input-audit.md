# Task 8: Builder Input Volume Audit (NEW-01)

**Date:** 2026-02-25
**Auditor:** builder-input-auditor (Opus)
**Constraint:** AUDIT ONLY — no file edits

---

## 1. Current Builder Input: File-by-File Line Count

Per the MANIFEST (Builder Prompt, line 1037-1087), the builder reads these files IN ORDER:

| # | File | Lines | Path |
|---|------|-------|------|
| 1 | Execution Brief (generated) | ~100-165 | Generated from TC Brief Template + Content Map |
| 2 | tokens.css | **183** | `design-system/compositional-core/vocabulary/tokens.css` |
| 3 | components.css | **1,195** | `design-system/compositional-core/components/components.css` |
| 4 | mechanism-catalog.md | **1,218** | `design-system/compositional-core/grammar/mechanism-catalog.md` |
| 5 | artifact-value-tables.md | **262** | `ephemeral/va-extraction/artifact-value-tables.md` |
| 6 | CD-006 (COMPOSED mode only) | **2,085** | `design-system/validated-explorations/combination/CD-006-pilot-migration.html` |

### Totals

| Scenario | Lines |
|----------|-------|
| **APPLIED mode** (no CD-006, abbreviated value-tables) | ~1,858 (165 + 183 + 1,195 + 1,218 + ~97) |
| **COMPOSED mode** (full value-tables + CD-006) | **5,108** (165 + 183 + 1,195 + 1,218 + 262 + 2,085) |
| **COMPOSED without CD-006** | **3,023** (165 + 183 + 1,195 + 1,218 + 262) |

The MANIFEST's CF-01 states "~3,600 total builder input" — this appears to be the COMPOSED mode total without CD-006 plus prompt overhead (~47 lines of builder prompt instructions). With CD-006, the true total is **~5,108 lines**.

**NOTE:** The TC Brief Template (235 lines) is NOT directly read by the builder. It is read by the Brief Assembler, who produces the ~100-165 line Execution Brief. The template itself is an INTERMEDIATE artifact.

---

## 2. Per-File Breakdown: Actionable vs Reference

### File 1: Execution Brief (~100-165 lines)

| Content Type | Lines | % | Builder Utility |
|-------------|-------|---|-----------------|
| Tier 1: Soul (world-descriptions) | ~15 | 10% | HIGH — direct constraint |
| Tier 2: Perception physics | ~8 | 5% | HIGH — calibration values |
| Tier 2: Priority override + worked examples | ~12 | 8% | HIGH — conflict resolution |
| Tier 3: Composition (HEART) | ~50 | 33% | HIGHEST — recipe content |
| Tier 4: Dispositions D-01 through D-09 | ~45 | 30% | HIGH — behavioral cues |
| Content Map appendix | ~15 | 10% | MEDIUM — reference context |
| Assembly rules / headers | ~6 | 4% | LOW — meta-information |

**Assessment:** The brief is already tight at 100-165 lines. Almost all content is actionable. The brief itself is NOT the reduction target.

### File 2: tokens.css (183 lines)

| Content Type | Lines | % | Builder Utility |
|-------------|-------|---|-----------------|
| CSS custom properties (actionable) | ~112 | 61% | HIGH — directly used in CSS |
| Section comment headers | ~30 | 16% | LOW — organizational |
| Extraction metadata block (lines 163-183) | ~21 | 11% | ZERO — provenance, not builder-facing |
| Mutability annotations (inline comments) | ~20 | 11% | MEDIUM — useful but verbose |

**Key finding:** Lines 163-183 (extraction metadata) have ZERO builder utility. These are provenance notes about how the file was extracted. The builder never needs to know the extraction lens or date.

**Reduction opportunity:** 21 lines from extraction metadata.

### File 3: components.css (1,195 lines)

| Content Type | Lines | % | Builder Utility |
|-------------|-------|---|-----------------|
| Actionable CSS (class definitions) | ~675 | 56% | HIGH — directly used |
| Component header comments (frequency, confidence, source, merge notes) | ~195 | 16% | LOW-MEDIUM — provenance |
| Section divider comments | ~45 | 4% | LOW — organizational |
| Extraction metadata (lines 1167-1195) | ~29 | 2% | ZERO — provenance |
| LOW-confidence components (<3 files) | ~165 | 14% | LOW — rarely used |
| TENSION-TEST-ONLY components | ~95 | 8% | LOW — specialized |

**Key findings:**
1. **Component header comments** (195 lines) include provenance data (frequency counts, source files, merge conflict notes) that document HOW components were extracted, not HOW to use them. Example: "Frequency: 27/27 files (100%) / Confidence: HIGH / Source: DD+OD (12), CD (6), TT (15)" — this is researcher information, not builder information.
2. **Extraction metadata** (29 lines at bottom) is purely provenance.
3. **LOW-confidence components** (density-indicator 3/27, Q&A 2/27, breadcrumb 3/27 = ~165 lines) are specialized. The builder CAN use them, but they're used in <15% of builds.
4. **TENSION-TEST-ONLY components** (layer boundaries, building floor, compression grid = ~95 lines) are specialized metaphor vocabulary.

**Reduction opportunity:** ~224 lines from provenance comments + extraction metadata. Additional ~95 lines from TENSION-TEST-ONLY (move to appendix).

### File 4: mechanism-catalog.md (1,218 lines)

This is the LARGEST file and the richest reduction target.

| Content Type | Lines | % | Builder Utility |
|-------------|-------|---|-----------------|
| 18 mechanism definitions (CSS + transfer test) | ~530 | 43% | HIGH — core vocabulary |
| Preamble/lens/extraction method (lines 1-91) | ~91 | 7% | ZERO — researcher context |
| Provenance + family resemblance (lines 92-128) | ~37 | 3% | LOW — philosophy |
| "What Are Scales?" section (lines 804-867) | ~63 | 5% | LOW — duplicates brief Tier 3 |
| Mechanism summary table (lines 870-899) | ~30 | 2% | MEDIUM — useful quick ref |
| Usage guidance (lines 902-941) | ~40 | 3% | MEDIUM — already in brief |
| Transition grammar (lines 944-1027) | ~83 | 7% | HIGH — builder actionable |
| Restraint protocol (lines 1029-1067) | ~39 | 3% | MEDIUM — useful limits |
| Extraction validation tables (lines 1070-1122) | ~53 | 4% | ZERO — provenance |
| Novel mechanisms list (lines 1109-1122) | ~14 | 1% | ZERO — provenance |
| Complexity tier breakdown (lines 1126-1151) | ~26 | 2% | LOW — organizational |
| Deployment recommendations (lines 1154-1179) | ~26 | 2% | LOW — already in recipe |
| Final extraction count (lines 1182-1195) | ~14 | 1% | ZERO — summary/provenance |
| Research application record (lines 1197-1218) | ~22 | 2% | ZERO — provenance |
| Cross-file frequency per mechanism (~3 lines x 18) | ~54 | 4% | LOW — provenance |
| "Rejected non-mechanisms" (lines 768-801) | ~34 | 3% | ZERO — negative examples |
| Category table + selection logic (lines 52-90) | ~39 | 3% | MEDIUM — useful but verbose |
| Application modes per mechanism (~8 lines x 4 mechs) | ~32 | 3% | MEDIUM — useful |

**Key findings:**
1. **~180 lines of pure provenance** (preamble, extraction validation, novel mechanisms, research record, rejected non-mechanisms, final count) — ZERO builder utility.
2. **~54 lines of cross-file frequency** across the 18 mechanisms — these list which exploration files contain each mechanism (e.g., "OD-004 (confidence strata), Boris-2 (geological layers)"). This is provenance, not instruction.
3. **~63 lines on "What Are Scales?"** — this is DUPLICATED by the brief's Tier 3 section (which already explains multi-coherence and fractal coherence in content-specific terms).
4. **~40 lines of Usage Guidance** — already synthesized into the execution brief's recipe sequence.
5. **Each mechanism has ~15-20 lines of CSS + description** but also ~10-15 lines of frequency/transfer/reusable-boundary notes that are validation, not instruction.

**Reduction opportunity:** ~337 lines from provenance + duplication + rejected mechanisms.

### File 5: artifact-value-tables.md (262 lines)

| Content Type | Lines | % | Builder Utility |
|-------------|-------|---|-----------------|
| Background color pairs (LOCKED) | ~50 | 19% | HIGH — directly referenced |
| Typography scale values | ~30 | 11% | HIGH — CSS values |
| Spacing vocabulary | ~30 | 11% | MEDIUM — already in tokens.css |
| Border configurations | ~20 | 8% | MEDIUM — already in tokens.css |
| Channel framework tables | ~60 | 23% | MEDIUM — reference |
| Preamble/notes | ~30 | 11% | LOW — meta |
| Worked examples | ~42 | 16% | HIGH — builder-actionable |

**Key finding:** ~30 lines of spacing vocabulary DUPLICATES tokens.css spacing scale. ~20 lines of border configurations DUPLICATES tokens.css border section.

**Reduction opportunity:** ~50 lines from duplication with tokens.css.

### File 6: CD-006 (2,085 lines, COMPOSED mode only)

This is a full HTML page used as a reference example. It's the single largest builder input.

| Content Type | Lines | % | Builder Utility |
|-------------|-------|---|-----------------|
| HTML content (article text) | ~800 | 38% | ZERO — content is CD-006 specific |
| CSS (style block) | ~900 | 43% | MEDIUM — compositional patterns |
| HTML structure (semantic sections) | ~385 | 18% | MEDIUM — structural patterns |

**Key finding:** The builder is told to "study for compositional patterns" but receives a 2,085-line file where only ~900 lines of CSS contain the compositional patterns. The HTML content (prose text) is irrelevant — it's about CD-006's specific topic, not the builder's page.

**Reduction opportunity:** If CD-006 were stripped to CSS-only or CSS + minimal HTML skeleton, it could drop from 2,085 to ~1,000-1,100 lines.

---

## 3. Estimated Post-v4 Builder Input

Changes from other v4 workers that affect builder input:

| Change | Source | Effect on Builder Input |
|--------|--------|------------------------|
| A-10 content map compression | Task 1 (brief template) | Saves ~40 lines from brief template. Brief output ~5-10 lines shorter. |
| A-12 S(x) removal | Task 2 (recipe routing) | Removes survival function from recipe. Does NOT directly affect builder-visible files. |
| Gate runner changes (B-*) | Task 4 | Gate runner is NOT builder input. No effect. |
| Tracker changes (D-*) | Task 5 | Tracker is NOT builder input. No effect. |
| PA protocol changes (C-*) | Task 6 | PA protocol is NOT builder input. No effect. |

**Estimated post-v4 total (COMPOSED mode):** ~5,098 lines (5,108 - 10 from A-10)

**Post-v4 does NOT significantly reduce builder input.** The v4 changes target orchestrator, gates, PA, and tracker — none of which are builder-facing.

---

## 4. Gap to 1,500-Line Target

| Scenario | Current | Target | Gap |
|----------|---------|--------|-----|
| APPLIED mode | ~1,858 | 1,500 | -358 lines (24% reduction needed) |
| COMPOSED without CD-006 | ~3,023 | 1,500 | -1,523 lines (50% reduction needed) |
| COMPOSED with CD-006 | ~5,108 | 1,500 | -3,608 lines (71% reduction needed) |

**Critical question:** Does the 1,500-line target include CD-006?

If YES: The target is effectively impossible without removing CD-006 entirely. Even stripping every provenance comment from every file gets us to ~4,000 lines.

If NO (CD-006 is supplementary reference): The COMPOSED-without-CD-006 scenario needs 1,523 lines cut — achievable through aggressive provenance removal + component thinning.

**Recommendation:** Treat CD-006 as SUPPLEMENTARY (not counted against the 1,500-line budget). Focus on the core 4 files.

---

## 5. Reduction Opportunities Ranked by Impact/Risk

### Tier A: Zero-Risk Reductions (pure provenance removal, no information loss for builder)

| # | File | What to Remove | Lines Saved | Risk |
|---|------|----------------|-------------|------|
| A1 | mechanism-catalog.md | Preamble (lines 1-91): lens statement, extraction method, source files | 91 | ZERO — builder never uses |
| A2 | mechanism-catalog.md | Extraction validation tables (lines 1070-1122) | 53 | ZERO — provenance |
| A3 | mechanism-catalog.md | Rejected non-mechanisms (lines 768-801) | 34 | ZERO — negative examples |
| A4 | mechanism-catalog.md | Research application record (lines 1197-1218) | 22 | ZERO — provenance |
| A5 | mechanism-catalog.md | Novel mechanisms list (lines 1109-1122) | 14 | ZERO — provenance |
| A6 | mechanism-catalog.md | Final extraction count (lines 1182-1195) | 14 | ZERO — summary |
| A7 | components.css | Extraction metadata (lines 1167-1195) | 29 | ZERO — provenance |
| A8 | tokens.css | Extraction metadata (lines 163-183) | 21 | ZERO — provenance |
| A9 | mechanism-catalog.md | Cross-file frequency per mechanism | 54 | ZERO — provenance |
| A10 | mechanism-catalog.md | Provenance + family resemblance (lines 92-128) | 37 | ZERO — philosophy |

**Tier A total: ~369 lines saved, ZERO risk**

### Tier B: Low-Risk Reductions (duplication removal, minimal information loss)

| # | File | What to Remove | Lines Saved | Risk |
|---|------|----------------|-------------|------|
| B1 | mechanism-catalog.md | "What Are Scales?" section (lines 804-867) — duplicated by brief Tier 3 | 63 | LOW — already in brief |
| B2 | mechanism-catalog.md | Usage guidance (lines 902-941) — duplicated by brief recipe | 40 | LOW — already in brief |
| B3 | mechanism-catalog.md | Complexity tier breakdown (lines 1126-1151) | 26 | LOW — organizational |
| B4 | mechanism-catalog.md | Deployment recommendations (lines 1154-1179) | 26 | LOW — already in recipe |
| B5 | artifact-value-tables.md | Spacing/border values duplicated from tokens.css | 50 | LOW — exact duplicate |
| B6 | components.css | Section divider comments | 45 | LOW — whitespace |

**Tier B total: ~250 lines saved, LOW risk**

### Tier C: Medium-Risk Reductions (information thinning)

| # | File | What to Remove/Compress | Lines Saved | Risk |
|---|------|------------------------|-------------|------|
| C1 | components.css | Compress component header comments from ~12 lines to ~3 lines per component (name + CSS only, drop frequency/confidence/source/merge notes) | 130 | MEDIUM — loses provenance context |
| C2 | mechanism-catalog.md | Compress mechanism entries: keep CSS + 1-line description, drop transfer test/reusable boundary/application modes | 180 | MEDIUM — loses educational content |
| C3 | components.css | Move TENSION-TEST-ONLY components to separate file | 95 | MEDIUM — reduces available vocabulary |
| C4 | components.css | Move LOW-confidence components to separate file | 165 | MEDIUM — reduces available vocabulary |

**Tier C total: ~570 lines saved, MEDIUM risk (some information loss)**

### Tier D: High-Risk Reductions (structural changes)

| # | File | What to Remove/Restructure | Lines Saved | Risk |
|---|------|---------------------------|-------------|------|
| D1 | CD-006 | Strip to CSS-only skeleton (remove HTML content) | ~985 | HIGH — loses structural HTML patterns |
| D2 | CD-006 | Remove entirely (already described in brief) | 2,085 | HIGH — loses concrete example |
| D3 | mechanism-catalog.md | Split into "builder-facing" (mechanisms only) and "researcher-facing" (everything else) | N/A | MEDIUM — requires new file |

---

## 6. Recommended Reduction Plan

### Phase 1: Immediate (Tier A + B) — 619 lines saved

Apply all Tier A and Tier B reductions. These remove ONLY provenance, duplication, and organizational overhead. The builder loses ZERO actionable information.

**Post-Phase-1 totals:**
- mechanism-catalog.md: 1,218 → ~744 lines (39% reduction)
- components.css: 1,195 → ~1,121 lines (6% reduction)
- tokens.css: 183 → 162 lines (11% reduction)
- value-tables.md: 262 → 212 lines (19% reduction)

**APPLIED mode total:** ~1,858 → ~1,239 lines (BELOW 1,500 target)
**COMPOSED without CD-006:** ~3,023 → ~2,404 lines (still above target)

### Phase 2: If needed (Tier C selective) — 310 more lines

Apply C1 (component header compression) and C2 (mechanism entry compression).

**Post-Phase-2 totals:**
- mechanism-catalog.md: ~744 → ~564 lines
- components.css: ~1,121 → ~991 lines

**COMPOSED without CD-006:** ~2,404 → ~2,094 lines

### Phase 3: If COMPOSED must hit 1,500 (Tier C + D)

Apply C3+C4 (move low-use components to separate file) and D1 (strip CD-006).

**Post-Phase-3 COMPOSED total:** ~1,500-1,700 lines

---

## 7. Key Findings Summary

1. **The 1,500-line target is achievable for APPLIED mode** with zero-risk provenance removal only.
2. **COMPOSED mode will always exceed 1,500 lines** unless CD-006 is stripped or removed.
3. **mechanism-catalog.md is the richest reduction target** — 39% of its content is pure provenance (researcher-facing, not builder-facing).
4. **components.css has 224 lines of provenance** that provide zero builder utility.
5. **The v4 changes do NOT significantly reduce builder input** — they target orchestrator/gates/PA/tracker, not builder-facing files.
6. **R02's finding (85%+ compliance at <2,000 lines) is achievable** for COMPOSED mode with Phase 1 + Phase 2 reductions.
7. **The fundamental tension:** mechanism-catalog.md and components.css serve DUAL audiences (builders and researchers). A split into builder-facing and researcher-facing versions would permanently solve the volume problem but adds maintenance cost.

---

## 8. Specific File-Level Recommendations

### mechanism-catalog.md — Create builder-facing slim version

The most impactful single change: create `mechanism-catalog-builder.md` (~550 lines) containing ONLY:
- Category table (39 lines)
- 18 mechanism definitions (CSS + 1-line description + application modes, ~25 lines each = 450 lines)
- Transition grammar (83 lines, HIGH builder utility)
- Restraint protocol (39 lines)

Route the builder to this file. Keep full `mechanism-catalog.md` for researchers/auditors.

### components.css — Strip provenance comments

Remove all "Frequency: X/27 files" and "Source: DD+OD (N), CD (N), TT (N)" comments. Replace with 1-line component name comment. Builder doesn't need to know extraction provenance.

### tokens.css — Remove extraction notes

Delete lines 163-183 (extraction metadata block). Zero builder impact.

### value-tables.md — Remove duplicated spacing/border sections

These are verbatim copies of tokens.css values. The builder already has tokens.css.

---

**END AUDIT — Task 8 Complete**
