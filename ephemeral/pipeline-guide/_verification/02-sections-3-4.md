# Verification Report: Sections 3-4 of Implementation Guide

**Verifier:** Agent #2 (Opus 4.6)
**Date:** 2026-02-19
**Scope:** Section 3 (The Files We Need to Create) + Section 4 (The Files We Need to Edit)
**Sources Cross-Referenced:**
- `ephemeral/pipeline-analysis/_meta-cognitive/codification-map.md` (701 lines, 10 changes)
- `ephemeral/compositional-intelligence/32-master-synthesis.md` (Report 32, master synthesis)
- `ephemeral/compositional-intelligence/94-maximum-efficacy-architecture.md` (Report 94, Appendix B conventions brief)
- `ephemeral/compositional-intelligence/73-gate-runner-architecture.md` (Report 73, gate runner specs)
- `design-system/compositional-core/vocabulary/tokens.css` (current file, 184 lines)
- `design-system/compositional-core/guidelines/semantic-rules.md` (current file, 530 lines)

---

## SECTION 3: THE FILES WE NEED TO CREATE

### Check 1: All 6 new files listed with correct paths

| # | Guide File | Guide Path | Plausible? | Source Verification |
|---|-----------|------------|------------|---------------------|
| 1 | build-page SKILL.md | `~/.claude/skills/build-page/SKILL.md` | YES | Report 32 says "thin `/build-page` orchestrator (~350 lines)". Guide says ~350-500 lines. CONSISTENT. |
| 2 | conventions-brief.md | `design-system/compositional-core/guidelines/` | YES | Report 32 Decision 3 says "~100 lines" at `design-system/compositional-core/guidelines/conventions-brief.md`. EXACT MATCH. |
| 3 | perception-thresholds.md | `design-system/compositional-core/guidelines/` | YES | Codification map Change 2 puts thresholds in `perceptual-auditing/SKILL.md`, but Report 94 Section 2.3 lists `perception-thresholds.md` as a standalone file. Guide follows Report 94. CONSISTENT. |
| 4 | gate-runner.js | `design-system/compositional-core/validation/` | YES | Report 73 describes "~400-line JavaScript module." Guide says ~400 lines. EXACT MATCH. |
| 5 | gate-registry.js | `design-system/compositional-core/validation/` | YES | Report 73 does NOT explicitly describe a separate registry file; it embeds constants within gate-runner.js (see Section 2.2 SELECTORS object). The guide ADDS a separate config file. This is a REASONABLE ARCHITECTURAL IMPROVEMENT but NOT directly from Report 73. |
| 6 | experiment-protocol.md | `ephemeral/compositional-intelligence/` | YES | Report 32 Decision 4 describes 3 experiments. Report 32 says location: `ephemeral/compositional-intelligence/experiment-protocol.md`. EXACT MATCH. |

**VERDICT: 6/6 files listed. All paths plausible. All line counts plausible.**

### Check 2: Line count plausibility

| File | Guide Estimate | Source Estimate | Assessment |
|------|---------------|-----------------|------------|
| build-page SKILL.md | ~350-500 lines | Report 94: ~250 lines orchestrator; Report 32: ~350 lines | Guide is SLIGHTLY HIGH but defensible (350 from Report 32 + skill framing overhead = 350-500). ACCEPTABLE. |
| conventions-brief.md | ~100 lines | Report 32 Decision 3: ~100 lines; Report 94 Appendix B: ~60 lines of content | CONSISTENT with Report 32. Report 94's Appendix B draft is ~60 lines of raw content but would expand with formatting. |
| perception-thresholds.md | ~80 lines | Codification map Change 2: ~30 lines in PA skill; but standalone file would be larger | PLAUSIBLE as standalone extraction. |
| gate-runner.js | ~400 lines | Report 73: "~400-line JavaScript module" | EXACT MATCH. |
| gate-registry.js | ~120 lines | Not in Report 73 (novel addition) | PLAUSIBLE as config extraction. |
| experiment-protocol.md | ~80 lines | Report 32: ~80 lines | EXACT MATCH. |

**VERDICT: All line counts plausible. Total ~1,130 lines stated in guide is arithmetically correct (350+100+80+400+120+80 = 1,130).**

### Check 3: Conventions brief description matches Appendix B of Report 94

The guide (lines 592-599) lists 5 sections:
1. Perception Thresholds (~20 lines)
2. Soul Constraints (~20 lines)
3. Spatial Rules (~20 lines)
4. Quality Floor (~20 lines)
5. Creative Authority (~20 lines)

Report 94 Appendix B (lines 589-645) lists these sections:
1. SOUL (ABSOLUTE)
2. PERCEPTION THRESHOLDS (ABSOLUTE)
3. STRUCTURAL REQUIREMENTS (ABSOLUTE)
4. MECHANISM CATEGORIES
5. TRANSITION TYPES
6. DELIVERABLES
7. THE ONE RULE

Report 32 Decision 3 (lines 178-212) lists:
1. PERCEPTION THRESHOLDS (20 lines)
2. SOUL CONSTRAINTS (20 lines)
3. SPATIAL RULES (20 lines)
4. QUALITY FLOOR (20 lines)
5. CREATIVE AUTHORITY (20 lines)

**FINDING:** The guide's 5-section structure matches Report 32 EXACTLY but DIVERGES from Report 94's Appendix B. Report 94 has 7 sections (SOUL, PERCEPTION, STRUCTURAL, MECHANISM CATEGORIES, TRANSITION TYPES, DELIVERABLES, THE ONE RULE). The guide follows Report 32's cleaner 5-section design which is the later synthesis.

**VERDICT: ACCEPTABLE.** Report 32 is the master synthesis that supersedes Report 94's draft. The guide correctly follows the later document.

### Check 4: Gate runner description matches Report 73

The guide (lines 625-632) describes gate-runner.js as:
- ~400-line JavaScript module
- Launches headless Playwright
- Navigates to built page
- Inspects computed styles
- Returns pass/fail for 15 quality checks
- Specific CSS fix recipes for every failure
- Total runtime: 5-15 seconds

Report 73 (lines 10-13) says:
- ~400-line JavaScript module
- Launches Playwright
- Navigates to built HTML page
- Runs getComputedStyle and DOM queries
- 15 gates (SC-01 through SC-15)
- Returns structured result with PASS/FAIL per gate plus fix recipes

**VERDICT: EXACT MATCH.** Every claim in the guide is directly supported by Report 73.

---

## SECTION 4: THE FILES WE NEED TO EDIT

### Check 5: All edits match codification map

The guide lists 6 edits (some with sub-parts). The codification map lists 10 changes. Let me map them:

| Guide Edit | Codification Map Change | Match? |
|-----------|------------------------|--------|
| Edit 1: tokens.css -- add `--space-max-stacked` | Change 5B: tokens.css | YES (but value differs -- see below) |
| Edit 2: semantic-rules.md -- S-09 stacking rule | Change 5A: semantic-rules.md | YES |
| Edit 3: perceptual-auditing/SKILL.md -- perception thresholds | Change 2: Perception thresholds | YES |
| Edit 4: tension-composition/SKILL.md -- recipe header | Change 1: Recipe format | YES |
| Edit 5A: compositional-core/CLAUDE.md -- builder recipe | Change 3: Builder CSS recipes | YES |
| Edit 5B: compositional-core/CLAUDE.md -- builder routing | Change 10: Builder visibility | YES |
| Edit 5C: compositional-core/CLAUDE.md -- agent comms | Change 8: Agent communication | YES |
| Edit 5D: compositional-core/CLAUDE.md -- mechanism catalog full | Change 10 (part 2): Remove 200-line restriction | YES |
| Edit 6A-B: design-system/CLAUDE.md -- status + routing | Not in codification map | NOVEL (reasonable maintenance) |

**Missing from guide (codification map changes NOT in Section 4):**
- **Change 4:** Gate runner deltas (SC-09, SC-10 additions to spatial-gate-runner.js). This is NOT an "edit" -- it is SUBSUMED into the new gate-runner.js file (File 4 in Section 3). The guide correctly treats this as a new file rather than an edit.
- **Change 6:** Per-category mechanism minimums. Codification map says "ALREADY APPLIED -- NO EDIT NEEDED." The guide omits this. CORRECT.
- **Change 7:** 3-transition minimum. Codification map says "ALREADY APPLIED -- NO EDIT NEEDED." The guide omits this. CORRECT.
- **Change 9:** Opus for builder agents. The guide DOES include this as part of Edit 5A ("model selection guidance (Opus for Ceiling/Flagship)"). COVERED.

**VERDICT: All 10 codification map changes are accounted for.** 8 appear as edits, 1 (Change 4) is subsumed into the new gate-runner.js file, and 2 (Changes 6, 7) are correctly noted as already applied and omitted.

---

## CRITICAL FINDING: 108px vs 192px DISCREPANCY

### The Problem

The guide consistently uses **108px** as the stacked gap maximum. The codification map consistently uses **192px**.

| Source | Value | Location |
|--------|-------|----------|
| Codification map (Change 5) | 192px | Lines 293, 323, 385, 419, 430 |
| Report 32 (master synthesis) | 108px | Lines 184, 204 |
| Report 94 (Appendix B) | 108px | Lines 226, 607 |
| Report 73 (gate runner) | 108px | Lines 33, 211, 723, 1247 |
| Guide Section 3 (perception table) | 108px | Line 617 |
| Guide Section 4 (Edit 1) | 108px | Lines 693, 704, 711 |
| Current tokens.css | 192px (in comment) | Line 120 |
| Current semantic-rules.md | NEITHER | No stacking rule exists |

### Analysis

The codification map was written on 2026-02-18 and uses 192px (2x the 96px per-property max). Reports 32, 73, and 94 were written on 2026-02-19 and use 108px (a tighter bound based on arithmetic: worst-case BREATHING transition = 32+24+4+24+24 = 108px).

The guide follows the LATER, TIGHTER value (108px) from Reports 32/73/94. The codification map's 192px is from the EARLIER analysis.

**The guide includes arithmetic proof (line 704):** "worst case BREATHING transition = 32 + 24 + 4 + 24 + 24 = 108px." This is a concrete derivation. The codification map's 192px was a simpler "2x the per-property max" rule.

### Verdict

**The guide's 108px is the CORRECT value to use.** It is supported by:
1. Report 73 (the canonical gate runner architecture) -- SC-10 threshold is 108px
2. Report 94 (the canonical Fat Core architecture) -- 108px in conventions brief
3. Report 32 (the master synthesis) -- 108px in Perception Thresholds and Quality Floor
4. Arithmetic proof in the guide itself

The codification map's 192px is SUPERSEDED by later, more detailed analysis. However, the CURRENT tokens.css comment on line 120 still references 192px ("Stacking two 96px margins creates 192px of void"). When the edit is applied, this comment should be updated to reflect 108px.

**STATUS: NOT AN ERROR IN THE GUIDE. The guide correctly uses the later, tighter value.**

---

## OTHER FINDINGS

### Finding 1: SC-11 Phase Assignment Inconsistency

The guide's phase-locked diagram (line 781) places SC-11 (Typography Zones) in G2, but the table (line 813) places it in G3.

Report 73 (line 284) places SC-11 in Phase Gate 4 (after Phase 4, not G2 or G3 in the guide's 3-gate scheme).

**Assessment:** The guide reorganized Report 73's 4 phase gates into 3 (G1, G2, G3). The table placing SC-11 in G3 is more consistent with Report 73's late timing (after typography work). The diagram placing it in G2 is likely a MINOR ERROR.

**SEVERITY: LOW.** The full regression at G3 catches it regardless.

### Finding 2: SC-03 Threshold Wording

Guide table (line 805): SC-03 threshold is ">= 2 font families from trinity"
Report 73 (line 26): "Only 3 allowed families"

These are different checks:
- Guide: at least 2 of the 3 approved families must be USED
- Report 73: ONLY the 3 approved families may appear (no extras)

**Assessment:** Both constraints should apply. The guide's ">= 2" is a MINIMUM usage check; Report 73's "only 3" is a MAXIMUM allowance check. The gate should check BOTH.

**SEVERITY: LOW.** The guide's version is a reasonable simplification for display. The actual gate-runner.js implementation would need both checks.

### Finding 3: Edit 6A-B (design-system/CLAUDE.md) Not in Codification Map

The guide includes edits to the root CLAUDE.md for status update and build routing. These are NOT in the codification map.

**Assessment:** These are reasonable maintenance edits (updating stale status text). The codification map focused on semantic/behavioral changes. Maintenance edits are expected to be added.

**SEVERITY: NONE.** Reasonable addition.

### Finding 4: tokens.css Current State

The guide's Edit 1 says to add `--space-max-stacked: 108px` to tokens.css. Current tokens.css (line 116-122) has `--space-max-zone: 96px` and a COMMENT mentioning 192px void ("Stacking two 96px margins creates 192px of void") but NO `--space-max-stacked` token.

The codification map's Change 5B proposes `--space-max-stacked: 192px` for tokens.css. The guide proposes `--space-max-stacked: 108px`.

**Assessment:** The edit target is correct (tokens.css Spacing Maximums section). The value should be 108px per Reports 32/73/94. The existing 192px in the comment will need updating.

**SEVERITY: NONE for the guide. But implementer should note the comment update.**

### Finding 5: semantic-rules.md Current State

The guide's Edit 2 says to add the S-09 stacking rule to semantic-rules.md. I searched the current file for "S-09", "stacking", "stacked", "192", and "108" -- ZERO matches.

The codification map (Change 5A, lines 346-397) targets "Gap 6, Rule 2 (lines 289-298)" which corresponds to the "Maximum Consecutive Empty Viewport Height" rule. The current file DOES have this rule at approximately line 289.

**Assessment:** The edit target is correct. The current file has the Rule 2 section where the stacking sub-rule should be inserted. The guide's description of the edit is accurate.

**SEVERITY: NONE.**

### Finding 6: S-09 Stacking Edit Technical Accuracy

The guide (line 711) describes the binary test as: `padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 108px`

The codification map (line 383-386) describes: `padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 192px`

Report 73 SC-10 (line 33) uses: `<= 108px total gap between adjacent zones`

The guide's formula is technically correct. It uses margin collapse correctly (MAX of adjacent margins, not SUM). It uses the later 108px threshold.

However, Report 73's pseudocode (line 723) also includes border-bottom and border-top in the calculation:
`margin-bottom + padding-bottom + border-bottom + margin-top + padding-top + border-top`

The guide's simplified formula omits borders. This is a MINOR technical simplification.

**SEVERITY: VERY LOW.** Borders rarely exceed 3-4px and wouldn't change the threshold compliance.

---

## SUMMARY SCORECARD

| Check | Result | Severity of Issues |
|-------|--------|-------------------|
| All 6 new files listed with correct paths | PASS | -- |
| Line counts plausible | PASS | -- |
| 108px consistently used (not 192px) | PASS -- guide uses 108px throughout | NOTE: codification map has 192px but guide correctly follows later sources |
| Conventions brief matches Appendix B of Report 94 | PARTIAL -- follows Report 32 (5 sections) not Report 94 (7 sections) | LOW -- Report 32 supersedes Report 94 |
| Gate runner matches Report 73 specs | PASS | -- |
| No codification map changes MISSING from guide | PASS -- all 10 accounted for | -- |
| S-09 stacking edit technically accurate | PASS (with minor simplification) | VERY LOW -- borders omitted from formula |
| SC-11 phase assignment | MINOR INCONSISTENCY | LOW -- diagram says G2, table says G3 |
| SC-03 threshold wording | MINOR DIFFERENCE | LOW -- usage minimum vs exclusion check |

### Overall Verdict: SECTIONS 3-4 ARE ACCURATE

**Major errors: 0**
**Minor inconsistencies: 2** (SC-11 phase, SC-03 wording)
**Notes for implementers: 2** (108px vs 192px history, tokens.css comment update)
**Missing content: 0** (all codification map changes accounted for)

The guide's narrative in Sections 3-4 is faithful to the source materials, with the guide consistently adopting the LATER, TIGHTER values from Reports 32/73/94 over the codification map's earlier analysis. This is the correct editorial choice.
