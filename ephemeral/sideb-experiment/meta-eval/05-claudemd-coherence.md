# CLAUDE.md Coherence Audit

**Auditor:** Meta-cognitive coherence evaluator
**Date:** 2026-03-01
**Files Audited:**
1. `design-system/CLAUDE.md` (704 lines) -- "Root CLAUDE.md"
2. `design-system/compositional-core/CLAUDE.md` (693 lines) -- "Core CLAUDE.md"
3. `design-system/compositional-core/identity/README.md` (13 lines)
4. `design-system/compositional-core/vocabulary/README.md` (16 lines)
5. `design-system/compositional-core/grammar/README.md` (14 lines)
6. `design-system/compositional-core/components/README.md` (11 lines)

**Verdict:** Both CLAUDE.md files are internally consistent with each other. The 7-file vocabulary rewrite is correctly reflected in both. However, there are 18 issues total: 4 BLOCKING (will actively mislead agents), 6 SIGNIFICANT (stale but won't break builds), and 8 MINOR (cosmetic or already-documented provenance references).

---

## BLOCKING Issues (Will Actively Mislead Fresh Agents)

### B-01: Root CLAUDE.md references `component-inventory.md` as operational file (DOES NOT EXIST)

**File:** `design-system/CLAUDE.md`
**Lines:** 420, 454
**Problem:** Two sections reference `compositional-core/components/component-inventory.md` as a file auditors and planners should optionally read. This file does not exist at that path -- it was moved to `_superseded/component-inventory.md`. A fresh agent following this instruction will get a file-not-found error.

```
Line 420: - `compositional-core/components/component-inventory.md` (confidence levels)
Line 454: - `compositional-core/components/component-inventory.md`
```

**Fix:** Replace both occurrences with `compositional-core/components/components.md` (37 lines -- the new inventory file).

---

### B-02: Root CLAUDE.md tokens.css line count wrong (says "174 lines", actual is 124 lines)

**File:** `design-system/CLAUDE.md`
**Lines:** 489, 642
**Problem:** Two references claim tokens.css is "174 lines." Actual line count is 124 lines. A fresh agent budgeting context window based on these numbers will allocate 40% more than needed, or worse, may question whether it read the right file.

```
Line 489: **Correct:** Read compositional-core/vocabulary/tokens.css (operational, single-file, 174 lines)
Line 642: **Relationship:** compositional-core/vocabulary/tokens.css is EXTRACTED from these files (174 lines subset of 617 lines).
```

**Fix:** Change "174 lines" to "124 lines" in both locations.

---

### B-03: README.md is comprehensively stale (923 lines, ~50+ old file references)

**File:** `design-system/compositional-core/README.md` (referenced from both CLAUDE.md files)
**Lines:** Entire file, but critically lines 35-37, 60, 87-138, 159-160, 176, 193, 205, 207
**Problem:** The README.md has NOT been updated for the 7-file vocabulary rewrite. It still references:
- `identity/prohibitions.md` as the always-load Layer 1 file (lines 37, 159, 205, 811)
- `vocabulary/tokens.css` as "174 lines" (lines 60, 160, 812)
- `grammar/mechanism-catalog.md` as the mechanism file (lines 103, 176, 207, 412, 619, 718, 829)
- `identity/soul-constraints.md` in directory tree (line 96)
- `vocabulary/tokens-mutability.md` in directory tree (line 100)
- `grammar/compositional-rules.md` and `grammar/border-system.md` (lines 104-105)
- `components/component-inventory.md` (line 109)
- "940px min container" guardrail (line 193) instead of "860-1100px range"
- "353 lines" for prohibitions.md (lines 37, 159, 811)
- "Read these 2 files BEFORE anything else" (line 35) instead of 4 files

**Impact:** Both CLAUDE.md files reference this README:
- Root CLAUDE.md line 499: "compositional-core/README.md → phase-gated access → build"
- Root CLAUDE.md line 676: "For building: compositional-core/README.md (phase-gated protocol)"
- Core CLAUDE.md line 689: "For comprehensive documentation: compositional-core/README.md (923 lines)"

A fresh agent reading either CLAUDE.md and then following the link to README.md will encounter an entirely different file architecture (2-file always-load instead of 4, old file names, wrong line counts).

**Fix:** README.md requires a comprehensive rewrite to align with the 7-file vocabulary architecture. This is the highest-impact issue in this audit.

---

### B-04: Sub-layer README.md files reference `_superseded/` at wrong relative path

**Files:** All four sub-layer READMEs
**Problem:** Each README references superseded files as `_superseded/filename.md` (implying `_superseded/` is inside the sub-layer directory). The actual location is `compositional-core/_superseded/` (top-level). A fresh agent looking for `identity/_superseded/prohibitions.md` will get a file-not-found error.

Specific references:
- `identity/README.md` line 13: `_superseded/prohibitions.md` and `_superseded/soul-constraints.md`
- `vocabulary/README.md` line 16: `_superseded/tokens-mutability.md`
- `grammar/README.md` line 14: `_superseded/mechanism-catalog.md`, `_superseded/compositional-rules.md`, `_superseded/border-system.md`, `_superseded/mechanism-combinations.md`
- `components/README.md` line 11: `_superseded/component-inventory.md`, `_superseded/components-dd-od.css`, `_superseded/components-cd-tt.css`

**Fix:** Change all `_superseded/` references to `../_superseded/` (relative path up one level to compositional-core/).

---

## SIGNIFICANT Issues (Stale Content, Won't Break Builds But Misleading)

### S-01: Root CLAUDE.md mechanism count inconsistency (18 vs 20)

**File:** `design-system/CLAUDE.md`
**Lines:** 92, 100, 562, 629
**Problem:** Four different counts appear for mechanisms:
- Line 92: "mechanisms.md (20 mechanisms)"
- Line 100: "94.7% deployment (18/19 mechanisms verified)"
- Line 562: "[Layer 3] 18 mechanisms + 11 rules"
- Line 629: "grammar/mechanisms.md (88 lines -- 20 mechanisms)"

The actual `mechanisms.md` contains 21 individual mechanism entries (13 numbered + 8 unnumbered) in 5 categories, plus 2 component patterns (not mechanisms). The category headers total: Spatial(4) + Hierarchy(2) + Component(5) + Depth/Emphasis(3) + Structure(7) = 21 mechanisms + 2 patterns = 23 entries.

The Core CLAUDE.md consistently says "20 mechanisms" (lines 581, 668).

**Fix:** Reconcile all references. The mechanisms.md itself groups them as 4+2+5+3+7 = 21 mechanisms (excluding the 2 component patterns). Choose one canonical number and apply everywhere.

---

### S-02: Root CLAUDE.md total file count is stale (claims "43 files")

**File:** `design-system/CLAUDE.md`
**Lines:** 84, 559
**Problem:** Claims "43 files, 880KB, 20,576 lines" for compositional-core. Actual counts:
- 50 total files (including _superseded/)
- 40 files (excluding _superseded/)
- 980KB total
- ~22,012 lines total (16,344 excluding _superseded/)

```
Line 84: **Files:** 43 files, 880KB, 20,576 lines
Line 559: ├── compositional-core/      [43 files] Phase C extraction, 6-layer ontology
```

**Fix:** Update to "40 files (operational), 980KB" or similar. The line count and KB are also off.

---

### S-03: Root CLAUDE.md "960px" in historical Middle-Tier section

**File:** `design-system/CLAUDE.md`
**Line:** 258
**Problem:** Says "Container 960px (compliant)" in the Middle-Tier Experiment results section. This is a historical record (the experiment did use 960px), so it's technically accurate as past-tense. However, a fresh agent scanning for container width guidance might latch onto this value instead of the "860-1100px range" specified elsewhere.

```
Line 258: - Container 960px (compliant), Soul 7/7 (perfect)
```

**Fix:** Low priority -- this is in a historical section. Optionally add "(at the time)" for clarity.

---

### S-04: Core CLAUDE.md has stale `prohibitions.md` reference in CSS comment

**File:** `design-system/compositional-core/CLAUDE.md`
**Line:** 410
**Problem:** A CSS comment in the geological metaphor example references `prohibitions.md`:

```css
/* CRITICAL: 2px is SEMANTIC (hierarchy) not decorative (per prohibitions.md). */
```

This file no longer exists at `identity/prohibitions.md` -- it was superseded by `identity/identity.md`.

**Fix:** Change "per prohibitions.md" to "per identity.md" in the CSS comment.

---

### S-05: Core CLAUDE.md supersession list missing 6 files

**File:** `design-system/compositional-core/CLAUDE.md`
**Lines:** 679-683
**Problem:** The "Superseded files" section lists only 4 superseded files:
- `identity/prohibitions.md` -> `identity/identity.md`
- `identity/soul-constraints.md` -> `identity/identity.md`
- `grammar/mechanism-catalog.md` -> `grammar/mechanisms.md`
- `grammar/compositional-rules.md` -> `grammar/grammar.md`

Missing from the list:
- `grammar/border-system.md` -> absorbed into `grammar/grammar.md`
- `grammar/mechanism-combinations.md` -> absorbed into `grammar/grammar.md`
- `vocabulary/tokens-mutability.md` -> absorbed into `vocabulary/tokens.css` (or dropped)
- `components/component-inventory.md` -> replaced by `components/components.md`
- `components/components-dd-od.css` -> merged into `components/components.css`
- `components/components-cd-tt.css` -> merged into `components/components.css`

All 10 of these files exist in `_superseded/`. Only 4 are documented.

**Fix:** Add the 6 missing supersession entries.

---

### S-06: Root CLAUDE.md directory tree has stale layer descriptions

**File:** `design-system/CLAUDE.md`
**Lines:** 560-568
**Problem:** The directory tree uses stale descriptions:
```
Line 560: │   ├── identity/            [Layer 1] 20 prohibitions + 3 soul constraints
Line 562: │   ├── grammar/             [Layer 3] 18 mechanisms + 11 rules
Line 563: │   ├── components/          [Layer 4] merged CSS + inventory
```

- Line 560: "20 prohibitions + 3 soul constraints" describes the OLD file structure (prohibitions.md + soul-constraints.md). The new structure is "identity.md (character + soul + refusals) + vocabulary.md (design decisions)."
- Line 562: "18 mechanisms + 11 rules" -- mechanism count is inconsistent (see S-01). Should match the chosen canonical number.
- Line 563: "merged CSS" -- the word "merged" is a provenance artifact from the CSS merge process. The files are now simply "components.css + components.md."

**Fix:** Update descriptions to match 7-file vocabulary naming.

---

## MINOR Issues (Cosmetic or Low Impact)

### M-01: Root CLAUDE.md "Phase C Extraction (6-layer ontology, 42 files)"

**File:** `design-system/CLAUDE.md`
**Line:** 281
**Problem:** Historical reference says "42 files" for Phase C. Current count is 40 (excluding _superseded/) or 50 (including). This is in a historical timeline section, so 42 was accurate at extraction time.

**Fix:** None needed -- historical record.

---

### M-02: Core CLAUDE.md PA questions count inconsistency (48 vs 56)

**File:** `design-system/compositional-core/CLAUDE.md`
**Lines:** 89, 213, 613-614
**Problem:** Three different PA question counts:
- Line 89: "Mode 4 PA (9 auditors, 56 questions including 8 Tier 5)"
- Line 213: "48 PA questions (Tier 1 mandatory five + Tier 2 standard fifteen)" -- this seems to describe a different structure
- Line 613-614: "Run full 48 standard PA questions + 8 Tier 5 questions"

The math: 48 standard + 8 Tier 5 = 56 total. So line 89 and lines 613-614 are consistent. Line 213 is the odd one out ("48 PA questions" is correct but "Tier 1 mandatory five + Tier 2 standard fifteen" sums to 20, not 48).

**Fix:** Clarify line 213 parenthetical or remove the sub-breakdown.

---

### M-03: Core CLAUDE.md "Last Updated: 2026-02-16" is stale

**File:** `design-system/compositional-core/CLAUDE.md`
**Line:** 7
**Problem:** File was clearly updated more recently (references 7-file vocabulary, Step 2 rewrite). The date should reflect the most recent edit.

**Fix:** Update to "2026-03-01" or current date.

---

### M-04: Root CLAUDE.md border-weight mechanism says "4px/3px/2px/1px" but tokens only define 4px/3px/1px

**File:** `design-system/CLAUDE.md` (soul constraints section uses tokens correctly)
**File:** `design-system/compositional-core/CLAUDE.md` (multiple examples)
**Lines:** Core CLAUDE.md lines 367-375 (mechanism example), 395-460 (geological and architectural examples)
**Problem:** The CSS examples throughout the Core CLAUDE.md show 4px/3px/2px/1px border progressions. However, `identity/vocabulary.md` explicitly states: "3 weights not 4. 2px deliberately skipped." And the tokens only define `--border-structural: 4px`, `--border-section: 3px`, `--border-subtle: 1px`.

This is a legitimate teaching example (mechanisms CAN use 2px as a semantic hierarchy value even though it's not a standard token weight), but it contradicts the vocabulary.md rule. The geological example even has a comment: "CRITICAL: 2px is SEMANTIC (hierarchy) not decorative (per prohibitions.md)" -- but this justification references a superseded file.

**Fix:** This is an inherent tension in the design system, not necessarily a CLAUDE.md bug. However, the teaching example should explicitly note the vocabulary.md rule and explain the exception. At minimum, update the "per prohibitions.md" reference (see S-04).

---

### M-05: Root CLAUDE.md "R4" missing from anti-patterns section 3

**File:** `design-system/CLAUDE.md`
**Lines:** 505-511
**Problem:** Anti-pattern #3 says "research/R[X].md" and specifically mentions "DD/OD/CD-style exploration without R3/R5 research." R4 (192 findings, the largest stream) is not mentioned. This is not wrong (R3/R5 are the most relevant for DD/CD), but could confuse agents looking for R4 guidance.

**Fix:** None needed -- R4 is for axis/AD which is complete.

---

### M-06: Root CLAUDE.md "Anti-gravity mechanisms: 94.7% deployment (18/19 mechanisms verified)"

**File:** `design-system/CLAUDE.md`
**Line:** 100
**Problem:** This statistic references the old 19-mechanism catalog. With 21+ mechanisms in the new file, the percentage is stale. However, this refers to anti-gravity mechanism DEPLOYMENT (rules R1-R6), not the mechanism count itself -- so "18/19" may mean "18 of 19 anti-gravity rules deployed" rather than "18 of 19 mechanisms."

**Fix:** Clarify what 18/19 refers to, or update the statistic.

---

### M-07: Both CLAUDE.md files reference `validation/gap-check.md` which has stale content

**File:** Root CLAUDE.md line 449, Core CLAUDE.md (indirectly via README)
**Problem:** `gap-check.md` line 805 still references "tokens.css: 174 lines, 52 tokens documented." The file has 124 lines and 65 tokens. This is a downstream staleness issue beyond the CLAUDE.md files themselves.

**Fix:** Out of scope for this audit but worth noting.

---

### M-08: Core CLAUDE.md "Superseded files" section uses wrong path format

**File:** `design-system/compositional-core/CLAUDE.md`
**Lines:** 680-683
**Problem:** References superseded files as `identity/prohibitions.md` and `grammar/mechanism-catalog.md` without noting they're in `_superseded/`. The narrative says "replaced by" which is correct, but a fresh agent might look for the old files at the original paths. The correct location is `_superseded/prohibitions.md`, etc.

**Fix:** Change path format to `_superseded/prohibitions.md` or add "(now in `_superseded/`)" clarification.

---

## Cross-File Consistency Check

### Agreement between Root CLAUDE.md and Core CLAUDE.md

| Topic | Root CLAUDE.md | Core CLAUDE.md | Consistent? |
|-------|---------------|----------------|-------------|
| Always-load files | 4 files (identity.md, vocabulary.md, tokens.css, components.css) | 4 files (same) | YES |
| Always-load total | ~1,045 lines (line 382) | ~1,045 lines (line 70) | YES |
| identity.md lines | 87 (line 364) | 87 (line 30) | YES |
| vocabulary.md lines | 55 (line 369) | 55 (line 42) | YES |
| tokens.css lines | 124 (line 373) | 124 (line 53) | YES |
| components.css lines | 779 (line 378) | 779 (line 61) | YES |
| mechanisms.md lines | 88 (line 629) | 88 (line 581) | YES |
| grammar.md lines | 149 (line 630) | 149 (line 582) | YES |
| components.md lines | 37 (line 632) | 37 (line 586) | YES |
| Container width | 860-1100px (lines 242, 541, 621) | 860-1100px (lines 49, 214, 541, 621) | YES |
| Build entry point | /build-page | /build-page | YES |
| PA success bar | PA-05 >= 3.5 (line 344) | PA-05 >= 3.5 AND Tier 5 >= 6/8 (line 93) | PARTIAL -- Root omits Tier 5 |
| Mechanism count | 20 (lines 92, 629) AND 18 (lines 100, 562) | 20 (lines 581, 668) | INCONSISTENT (Root contradicts itself) |
| tokens.css lines (anti-pattern) | 174 (line 489, 642) | 124 (line 53) | INCONSISTENT (Root stale) |

### Fresh Instance Test

**Scenario:** A fresh Claude instance enters `design-system/` and auto-loads Root CLAUDE.md.

1. It reads the ALWAYS-LOAD section (lines 360-384) and correctly identifies 4 files to read. **PASS.**
2. It reads `compositional-core/identity/identity.md` (87 lines). **PASS.**
3. It reads `compositional-core/identity/vocabulary.md` (55 lines). **PASS.**
4. It reads `compositional-core/vocabulary/tokens.css` and expects 124 lines. But anti-pattern #1 (line 489) says "174 lines." **CONFUSION RISK** -- agent may think it read the wrong file.
5. If it follows auditor protocol (line 420) and tries to read `components/component-inventory.md`, it gets a file-not-found error. **FAIL.**
6. If it follows the link to `compositional-core/README.md` for build protocol (line 499), it encounters an entirely different architecture (2-file always-load, old file names). **SEVERE CONFUSION.**

**Scenario:** A fresh Claude instance enters `design-system/compositional-core/` and auto-loads Core CLAUDE.md.

1. It reads the ALWAYS-LOAD section (lines 26-70) and correctly identifies 4 files. **PASS.**
2. It follows Phase 0-7 build workflow. All file references are correct. **PASS.**
3. It reads the superseded files section (lines 679-683) and understands the old architecture. **PASS** (but incomplete -- only 4 of 10 superseded files listed).
4. If it follows the link to `compositional-core/README.md` (line 689), same problem as above. **SEVERE CONFUSION.**

**Overall fresh-instance score: 7/10.** The two CLAUDE.md files are well-aligned with each other. The primary danger is the README.md link, which leads to a comprehensively stale document.

---

## Summary Table

| ID | Severity | File | Lines | Issue |
|----|----------|------|-------|-------|
| B-01 | BLOCKING | Root CLAUDE.md | 420, 454 | `component-inventory.md` does not exist at referenced path |
| B-02 | BLOCKING | Root CLAUDE.md | 489, 642 | tokens.css line count wrong (174 -> 124) |
| B-03 | BLOCKING | README.md | Entire file | 50+ stale references to old file architecture |
| B-04 | BLOCKING | 4 sub-layer READMEs | Various | `_superseded/` path is wrong (should be `../_superseded/`) |
| S-01 | SIGNIFICANT | Root CLAUDE.md | 92, 100, 562, 629 | Mechanism count inconsistency (18 vs 20 vs 21 actual) |
| S-02 | SIGNIFICANT | Root CLAUDE.md | 84, 559 | File count stale (43 -> 40/50) |
| S-03 | SIGNIFICANT | Root CLAUDE.md | 258 | "960px" in historical section may mislead |
| S-04 | SIGNIFICANT | Core CLAUDE.md | 410 | Stale `prohibitions.md` reference in CSS comment |
| S-05 | SIGNIFICANT | Core CLAUDE.md | 679-683 | Supersession list missing 6 of 10 files |
| S-06 | SIGNIFICANT | Root CLAUDE.md | 560-568 | Directory tree uses stale layer descriptions |
| M-01 | MINOR | Root CLAUDE.md | 281 | Historical "42 files" (accurate at time) |
| M-02 | MINOR | Core CLAUDE.md | 89, 213, 613-614 | PA question count sub-breakdown doesn't sum |
| M-03 | MINOR | Core CLAUDE.md | 7 | Last Updated date stale (2026-02-16) |
| M-04 | MINOR | Both | Various | 2px border in examples vs "2px deliberately skipped" rule |
| M-05 | MINOR | Root CLAUDE.md | 505-511 | R4 not mentioned in anti-pattern #3 |
| M-06 | MINOR | Root CLAUDE.md | 100 | "18/19" anti-gravity stat unclear referent |
| M-07 | MINOR | Downstream | N/A | gap-check.md has stale token count |
| M-08 | MINOR | Core CLAUDE.md | 680-683 | Superseded file paths don't indicate `_superseded/` directory |

---

## Recommended Fix Priority

1. **B-03** (README.md rewrite) -- highest impact, longest effort
2. **B-01** (component-inventory.md -> components.md) -- 2-line fix
3. **B-02** (174 -> 124 lines) -- 2-line fix
4. **B-04** (_superseded/ paths) -- 4-file fix, straightforward
5. **S-06** (directory tree descriptions) -- 3-line fix
6. **S-05** (supersession list completion) -- 6 lines to add
7. **S-01** (mechanism count) -- decide canonical number, apply everywhere
8. **S-04** (prohibitions.md -> identity.md in CSS comment) -- 1-line fix
9. **S-02** (file count update) -- 2-line fix

Items B-01, B-02, B-04, S-04, S-05, S-06 can be done in under 10 minutes total. B-03 (README.md rewrite) is a separate task requiring 30-60 minutes.
