# Cross-Reference Verification Report

**Agent:** #8 (cross-reference-verifier, Opus)
**Date:** 2026-02-20
**Files examined:** 8 (conventions-brief.md, gate-runner.md, flagship-pa-questions.md, build-page/SKILL.md, tension-composition/SKILL.md, perceptual-auditing/SKILL.md, design-system/CLAUDE.md, compositional-core/CLAUDE.md)

---

## A. THRESHOLD CONSISTENCY (Most Critical)

### 1. SC-10 stacked gap: 120px in ALL files?
**PASS.** Verified in:
- conventions-brief.md line 61: "Stacked gaps above 120px create voids"
- gate-runner.md line 215: "Total stacked gap <= 120px at EVERY zone boundary"
- build-page/SKILL.md line 132: "<= 120px total at section boundaries"
- build-page/SKILL.md line 405: "No stacked gaps above 120px"
- compositional-core/CLAUDE.md line 523: "<= 120px total stacked gap"
- TC skill does not specify 120px directly (uses 48px/64px/80px transition values which compose within bounds)

### 2. SC-14 letter-spacing: 0.025em in ALL files?
**FAIL.** Inconsistency found in compositional-core/CLAUDE.md.
- conventions-brief.md line 59: "0.025em" -- CORRECT
- gate-runner.md line 416: "0.025em" -- CORRECT
- build-page/SKILL.md line 405: "0.025em" -- CORRECT
- **compositional-core/CLAUDE.md line 524: "0.02em"** -- WRONG (says `no letter-spacing < 0.02em`)
- TC skill line 1439: "0.02em" in fractal echo table min threshold -- WRONG (says `Tracking delta >= 0.02em`)

Two files use 0.02em instead of the canonical 0.025em.

### 3. SC-09 background delta: 15 RGB in ALL files?
**PASS.** Verified in:
- conventions-brief.md line 57: "at least one RGB channel differs by 15 or more points"
- gate-runner.md line 179: "max-channel RGB delta >= 15"
- build-page/SKILL.md line 131: ">= 15 RGB between adjacent zones"
- compositional-core/CLAUDE.md line 521: ">= 15 RGB max-channel delta"

### 4. Container width: 940-960px in ALL files?
**PASS.** Verified in:
- conventions-brief.md line 26: "940-960px wide, centered"
- gate-runner.md line 151: "940px <= max-width <= 960px"
- build-page/SKILL.md line 17: "container 940-960px"
- compositional-core/CLAUDE.md line 518: "940-960px container width"
- TC skill line 89: "Container width 940-960px is NON-NEGOTIABLE"
- PA skill line 108-109: "65-80% of viewport width" (consistent)
- design-system/CLAUDE.md: "940-960px" in soul constraints

---

## B. FILE PATH CONSISTENCY

### 5. `components.css` everywhere (never `merged-components.css`)?
**FAIL.** Two files still reference `merged-components.css`:
- **design-system/CLAUDE.md line 628:** `compositional-core/components/merged-components.css` -- WRONG
- **compositional-core/CLAUDE.md line 93:** `merged-components.css (31KB)` -- WRONG (in description text)
- build-page/SKILL.md: Uses `components.css` at line 56 -- CORRECT
- conventions-brief.md line 65: `components.css` -- CORRECT

### 6. Conventions brief path always `design-system/pipeline/conventions-brief.md`?
**PASS.** build-page/SKILL.md line 48 references `design-system/pipeline/conventions-brief.md`. No other file references an incorrect path like `compositional-core/conventions-brief.md`.

---

## C. CONTENT CONSISTENCY

### 7. Gate runner has exactly 21 gates?
**PASS.** Counted from the summary table at lines 952-976:
SC-01, SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08, SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15, SC-13B, SC-16, DG-1, DG-2, DG-3, DG-4 = **21 gates**.
Line 976 confirms: "17 blocking + 2 advisory + 2 behavioral = 21 gates"

### 8. PA questions file has exactly 8 Tier 5 questions (PA-60 through PA-67)?
**PASS.** flagship-pa-questions.md contains PA-60, PA-61, PA-62, PA-63, PA-64, PA-65, PA-66, PA-67 = **8 questions**. Line 5 confirms "8 questions" and line 144 confirms "48 standard + 8 Tier 5 = 56 questions."

### 9. PA skill references 56 questions total (never 48)?
**PASS.** PA skill line 535: "All 56 questions (48 standard + 8 Tier 5)". Line 553: "Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors." The skill clearly references 56 as the total. (Note: Mode 1 still references PA-01-05 only, which is correct as Tier 5 is Mode 4 only per line 502.)

### 10. build-page SKILL.md specifies Opus builder (never Sonnet)?
**PASS.** Line 41: `Model: Opus (ALWAYS -- never Sonnet for builders)`. Line 389: Builder model = Opus. Line 404: "Builder model: Opus. Always. Never Sonnet for the CSS-writing agent."

### 11. build-page SKILL.md has 6-file read order for builder?
**PASS.** Lines 47-56 specify 6 files in order:
1. conventions-brief.md
2. [content-file-path]
3. mechanism-catalog.md
4. components.css
5. tokens.css
6. prohibitions.md

### 12. Conventions brief has Quality Floor section with >= 14 mechanisms?
**PASS.** Section 9B "QUALITY FLOOR" at line 228: ">= 14 mechanisms deployed across all 5 categories."

### 13. Conventions brief has 80% Creative Authority?
**PASS.** Section 9 line 213: "Approximately 80% of all decisions... are yours to make."

### 14. CLAUDE.md references /build-page >= 6 times?
**PASS.** Grep count returned 26 matches for `/build-page` in design-system/CLAUDE.md.

### 15. compositional-core/CLAUDE.md says ALWAYS FLAGSHIP >= 2 times?
**PASS.** Grep count returned 3 matches for "ALWAYS FLAGSHIP" in compositional-core/CLAUDE.md.

---

## D. JUDGMENT WORD CHECK

### 16. Zero judgment words in build-page/SKILL.md?
**PASS.** Searched for "appropriate", "sufficient", "harmonious", "balanced", "optimal" in build-page/SKILL.md. **Zero matches found.** The file uses only binary/concrete language.

---

## E. TC SKILL CHECK

### 17. "Floor" in routing context: must be zero?
**PASS.** The only match for "Floor" in TC skill is line 481: "Floor plan / rooms" in the responsive degradation table -- a metaphor name, not a routing/tier reference. No Floor-tier routing exists.

### 18. "SKIP Phases" in TC skill: must be zero?
**FAIL (MINOR).** TC skill lines 388-389 contain:
- "Zero-tension path. Skip Phases 3-4."
- "Cosmetic path. Skip Phase 3."

These are the Addition Test escape valves, not tier-based phase skipping. They are content-driven exits for genuinely zero-tension content (described in Step 0D line 72: "The Addition Test is the ONLY escape valve"). This is architecturally correct -- the concern was tier-based "SKIP Phases 1-3 for Floor" type language, which does NOT exist. **Reclassify as PASS** -- these are legitimate tension-threshold escapes, not tier routing.

### 19. "Middle-tier+" in TC skill: must be zero?
**PASS.** Zero matches found.

### 20. Anti-Scale Model exists in TC skill?
**PASS.** TC skill line 802 references "Anti-Scale Model" and line 810 defines "Phase 4.0A: The Anti-Scale Model (Governing Evaluation Function)" with the full RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE formula.

### 21. Multi-Coherence Binding Rules exist in TC skill?
**PASS.** TC skill line 1331: "### Multi-Coherence Binding Rules (MANDATORY)" with rules R-MC-01 through R-MC-06.

### 22. Fractal echo protocol exists in TC skill?
**PASS.** TC skill line 1421: "Step 4.7 -- Fractal Consistency GATE (MANDATORY)" and line 1431: "FRACTAL ECHO TABLE (MANDATORY deliverable)" with the 5-scale table.

### 23. Tokenization is MANDATORY in TC skill?
**PASS.** TC skill line 1536: "Phase 4.9: Tokenization Self-Check (MANDATORY)" and line 1607: "This phase is MANDATORY."

---

## F. PA SKILL CHECK

### 24. Tier 5 section exists with all 8 questions?
**PASS.** PA skill line 363: "### Tier 5: Compositional Depth (MANDATORY)" with PA-60 through PA-67 defined (8 questions). Full scoring rubric at lines 382-402.

### 25. Mode 4 team table includes Tier 5 assignments?
**PASS.** PA skill lines 541-550 show the Mode 4 team with Tier 5 assignments:
- Auditor A: PA-65, PA-67
- Auditor C: PA-64, PA-66
- Auditor D: PA-62
- Auditor E: PA-63
- Auditor F: PA-60, PA-61
All 8 Tier 5 questions assigned.

### 26. Weaver dual-verdict protocol exists?
**PASS.** PA skill line 570: "Weaver Dual-Verdict Protocol:" with PA-05 Score and Tier 5 Score as two independent verdicts, and combined verdict matrix at lines 580-586.

---

## G. INSTRUMENTATION CHECK

### 27. build-page SKILL.md specifies _gate-results.json with measured values?
**PASS.** Line 150: "Write the complete results to `[output-dir]/_gate-results.json`. This file must contain ALL gates with MEASURED VALUES, not just pass/fail."

### 28. build-page SKILL.md specifies _pa-matrix.md with full question matrix?
**PASS.** Lines 270-275: "FULL PER-QUESTION MATRIX: Write to [output-dir]/_pa/_pa-matrix.md. 56 questions x 9 auditors."

### 29. build-page SKILL.md specifies _run-manifest.md?
**PASS.** Line 378: "Write `[output-dir]/_run-manifest.md` containing: run timestamp (ISO 8601), content file path, builder model (Opus)..."

### 30. build-page SKILL.md specifies Lock Sheet (Step 4.5)?
**PASS.** Lines 185-195: Section "4.5 LOCK SHEET" defines generation from _build-log.md and _gate-results.json, with three categories (LOCKED Soul, LOCKED Research, CHALLENGEABLE Builder), written to `_lock-sheet.md`.

### 31. build-page SKILL.md requires BRIEF REFLECTION in _build-log.md?
**PASS.** Lines 74-82: "_build-log.md -- ... BRIEF REFLECTION (AFTER -- see below)" and "BRIEF REFLECTION (mandatory in _build-log.md): After your build is complete, add a BRIEF REFLECTION section..."

### 32. build-page SKILL.md specifies TOP-5 issues (not TOP-3)?
**PASS.** Line 265: "TOP-5 ISSUES ranked by severity (WOULD-NOT-SHIP first)."

---

## SUMMARY

| Category | PASS | FAIL | Total |
|----------|------|------|-------|
| A. Threshold Consistency | 3 | 1 | 4 |
| B. File Path Consistency | 1 | 1 | 2 |
| C. Content Consistency | 9 | 0 | 9 |
| D. Judgment Word Check | 1 | 0 | 1 |
| E. TC Skill Check | 7 | 0 | 7 |
| F. PA Skill Check | 3 | 0 | 3 |
| G. Instrumentation Check | 6 | 0 | 6 |
| **TOTAL** | **30** | **2** | **32** |

---

## BLOCKING FINDINGS (Must-Fix Before Validation Builds)

### BLOCKING-1: Letter-spacing threshold inconsistency (Check #2)

**Files affected:**
- `compositional-core/CLAUDE.md` line 524: Says `no letter-spacing < 0.02em` -- should be `0.025em`
- `tension-composition/SKILL.md` line 1439: Says `Tracking delta >= 0.02em` -- should be `0.025em`

**Canonical value:** 0.025em (per conventions-brief.md, gate-runner.md, build-page/SKILL.md)

**Risk:** A builder reading compositional-core/CLAUDE.md (which is auto-loaded) will use 0.02em as the threshold, while SC-14 gate checks against 0.025em. This could cause false gate failures (values between 0.02-0.025em pass CLAUDE.md but fail gate) or worse, allow sub-perceptual CSS to pass the builder's self-check.

**Fix:** Change 0.02em to 0.025em in both files.

### BLOCKING-2: merged-components.css reference in CLAUDE.md files (Check #5)

**Files affected:**
- `design-system/CLAUDE.md` line 628: `compositional-core/components/merged-components.css`
- `compositional-core/CLAUDE.md` line 93: `merged-components.css (31KB)`

**Canonical name:** `components.css` (per build-page/SKILL.md line 56 and conventions-brief.md line 65)

**Risk:** Agents using CLAUDE.md as their entry point (which is auto-loaded) will look for `merged-components.css` and either fail to find it or use an outdated version. build-page/SKILL.md correctly references `components.css`, but since CLAUDE.md is auto-loaded for ALL agents, the discrepancy creates confusion.

**Fix:** Change all references from `merged-components.css` to `components.css` in both CLAUDE.md files.

---

## NON-BLOCKING FINDINGS

### NB-1: TC skill escape valves use "Skip Phases" language (Check #18)

TC skill lines 388-389 say "Skip Phases 3-4" and "Skip Phase 3" in the Addition Test exit ramp context. This is architecturally correct (content-driven, not tier-driven) but the word "Skip" could be confusing in audits searching for tier-routing vestiges. Consider rewording to "Bypass" or "Proceed directly past" for clarity, but this is cosmetic and non-blocking.

### NB-2: TC skill fractal echo table uses 0.02em (overlaps with BLOCKING-1)

Already captured in BLOCKING-1. The TC skill line 1439 uses `0.02em` as the Character-scale minimum threshold in the fractal echo table. This is part of the same threshold inconsistency.

### NB-3: design-system/CLAUDE.md KEY FILE PATHS section uses old name

Line 628 in design-system/CLAUDE.md: `Layer 4 (Components): compositional-core/components/merged-components.css` -- this is the same issue as BLOCKING-2 but noted here for completeness as it's in a different section of the file (KEY FILE PATHS vs folder description).

---

## VERDICT

**30/32 PASS, 2 FAIL (both BLOCKING).**

Both BLOCKING issues are straightforward string replacements:
1. `0.02em` -> `0.025em` in 2 files (2 locations)
2. `merged-components.css` -> `components.css` in 2 files (2 locations)

Estimated fix time: < 5 minutes. No architectural issues found. The 8 files are internally consistent on all critical architectural decisions (container width, background delta, stacked gap, gate count, question count, builder model, team structure, instrumentation).
