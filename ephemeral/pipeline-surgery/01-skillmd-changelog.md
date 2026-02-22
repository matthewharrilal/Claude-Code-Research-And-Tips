# SKILL.md Changelog -- Pipeline Surgery (2026-02-20)

## Summary

8 edits applied to `~/.claude/skills/build-page/SKILL.md` (5 original + 3 harmony fixes). File grew from 437 lines to ~480 lines (+43). All edits are RECIPE-style (what to do, in order, with values). No embedded skill content -- all references by PATH.

---

## Edit 1: Add TC Skill Invocation Phase (NEW Section 2)

**What changed:** Inserted new `## 2. TC SKILL INVOCATION` section between INTAKE and BUILDER DEPLOYMENT. Former `## 2. TEAM CREATION` became `## 3. BUILDER DEPLOYMENT`.

**Before:** Builder was responsible for Phase A (content analysis, zone identification, tension derivation, metaphor collapse) -- the 1,878-line TC skill was never invoked. Builder got one sentence: "Phase A: Read content. Identify zones, tensions, metaphor."

**After:** A dedicated Opus TC agent runs Phases 0-4 of the TC skill, writes a ~50-line `_tc-brief.md` with 5 sections (STRUCTURAL METAPHOR, ZONE ARCHITECTURE, CONTENT TENSIONS, SELECTED MECHANISMS, METAPHOR-IMPLIED CSS DIRECTIONS). Builder then reads this brief FIRST and starts at Phase B.

**Lines added:** ~35 (TC agent spawn prompt)

**Specific changes:**
- NEW section `## 2. TC SKILL INVOCATION` (lines 28-62)
- Builder reading order changed: TC brief is file #1, conventions-brief is file #2, content is file #3
- Builder Phase A changed from "Read content. Identify zones, tensions, metaphor." to "Read the TC brief. Your metaphor, zones, tensions, and mechanisms have been pre-derived by the TC analyst. Internalize them. Your job starts at Phase B."
- Builder BRIEF REFLECTION item (c) changed from "The unifying metaphor you chose and why it is structural" to "How the TC brief's structural metaphor guided your CSS decisions"
- TC Analyst added to Agent Models table (Section 10)
- `_tc-brief.md` added to File Structure listing (Section 10)

---

## Edit 2: Update Builder Spawn Prompt (Section 3)

**What changed:** Builder now reads TC brief first; Phase A redirected to TC brief internalization.

**Before (reading order):**
```
1. design-system/pipeline/conventions-brief.md
2. [content-file-path]
```

**After (reading order):**
```
1. [output-dir]/_tc-brief.md
2. design-system/pipeline/conventions-brief.md
3. [content-file-path]
```

**Before (Phase A):** "Phase A: Read content. Identify zones, tensions, metaphor."
**After (Phase A):** "Phase A: Read the TC brief. Your metaphor, zones, tensions, and mechanisms have been pre-derived by the TC analyst. Internalize them. Your job starts at Phase B."

---

## Edit 3: Add PA Skill Reference to Auditor Prompts (Section 6.1)

**What changed:** Added PA skill reference to each auditor's spawn prompt for evaluation framework context.

**Before:** Auditors received only questions, screenshots, and language rules.

**After:** Auditors also read:
```
Before answering questions, read the evaluation framework at:
~/.claude/skills/perceptual-auditing/SKILL.md (Sections on perceptual
language, evaluation approach, scoring guidance, the Three Laws, and
the Sovereignty Principle)
```

**Lines added:** 4

**Note:** Question assignment table and weaver format preserved as-is. PA skill referenced by PATH, not embedded.

---

## Edit 4: Fix Gate-Runner Cross-Reference (Section 4.2)

**What changed:** Updated stale gate-runner metadata.

**Before:** `gate-runner.md (992 lines, 21 gates with proven JS)`
**After:** `gate-runner.md (1,159 lines, 22 gates with proven JS)`

**Verification:** `wc -l gate-runner.md` = 1,159. Gate summary table (line 1143): "Totals: 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates"

**Also added DG-3 to deliverable gates section (4.4):**

**Before:** Only DG-1, DG-2, DG-4 listed.
**After:** DG-3 added: "Landmark completeness -- at least 1 `<header>` (or `[role="banner"]`), 1 `<main>` (or `[role="main"]`), and 1 `<footer>` (or `[role="contentinfo"]`) present in output.html"

---

## Edit 5: Align Micro-Gate Checkpoints with Gate-Runner Thresholds (Section 3)

**What changed:** Builder's Phase C self-check checkpoints now match gate-runner.md thresholds exactly.

### Checkpoint 1 (After HTML skeleton):

**Before:** `>= 5 ARIA landmarks? Skip link? >= 8 component classes?`
**After:** `>= 5 ARIA landmarks? Skip link? >= 8 component classes? header + main + footer present?`

Added DG-3 check (header + main + footer) to align with MG-1 gate set (SC-06, SC-07, SC-08, SC-12, DG-3).

### Checkpoint 3 (After full build):

**Before:** `heading-to-meta ratio >= 3:1? Font-size delta >= 2px between zones?`
**After:** `display-body font-size delta >= 10px? 3+ distinct typography zones?`

Aligned with SC-11 Flagship elevation: "display-body delta >= 10px, body-detail delta >= 2px, 3+ distinct typography zones". The old ">= 2px" was the Standard threshold; Flagship requires >= 10px.

### SC-11 Gate Table Row:

**Before:** `>= 3 distinct font-size zones`
**After:** `display-body delta >= 10px, body-detail delta >= 2px, 3+ distinct font-size zones`

---

## Bonus: Section Renumbering

All sections after the TC insertion were renumbered:

| Old | New | Section |
|-----|-----|---------|
| 2 | 3 | BUILDER DEPLOYMENT (was TEAM CREATION) |
| 3 | 4 | GATE RUNNER |
| 3.1-3.4 | 4.1-4.4 | Gate runner subsections |
| 4 | 5 | SCREENSHOT CAPTURE |
| 4.5 | 5.5 | LOCK SHEET |
| 5 | 6 | PA DEPLOYMENT |
| 5.1-5.3 | 6.1-6.3 | PA subsections |
| 6 | 7 | FIX CYCLE |
| 6.1-6.4 | 7.1-7.4 | Fix cycle subsections |
| 7 | 8 | SUCCESS BAR |
| 8 | 9 | OUTPUT SUMMARY |
| 9 | 10 | PRACTICAL DETAILS |
| 10 | 11 | RE-STATEMENT OF NON-NEGOTIABLES |

Internal cross-references updated:
- "Step 6" (fix cycle) -> "Step 7"
- "Step 5.3" (weaver) -> "Step 6.3"
- "Step 3" (gates re-run) -> "Step 4"
- "Step 4" (screenshots re-capture) -> "Step 5"

## Bonus: Tier 5 Alignment with PA-68

Updated mission line from `Tier 5 >= 6/8` to `Tier 5 >= 7/9` to match PA-68 addition by pa-questions-surgeon.

---

## Harmony Fix 1 (CRITICAL): Correct TC Phase Descriptions (Section 2)

**Flagged by:** harmony-skillmd agent

**What changed:** TC spawn prompt had phase descriptions shifted by one position from actual TC skill numbering.

**Before (WRONG):**
```
Follow Phases 0-3 exactly.
- Phase 0: Content Analysis (multi-axis questioning)
- Phase 1: Tension Derivation (identify content's internal conflicts)
- Phase 2: Metaphor Collapse (derive ONE structural metaphor from tensions)
- Phase 3: Mechanism Selection (select mechanisms that serve the metaphor)
DO NOT proceed to Phases 4-5. Stop after mechanism selection.
```

**After (CORRECT -- matches TC skill's actual numbering):**
```
Follow Phases 0-4 exactly.
- Phase 0: Content Assessment (classify content type, scope, sections)
- Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
- Phase 2: Tension Derivation (identify content's internal conflicts)
- Phase 3: Metaphor Collapse (derive ONE structural metaphor from tensions)
- Phase 3.5: Metaphor Commitment (lock the metaphor)
- Phase 4: Mechanism Selection (select mechanisms that serve the metaphor)
Run through Phase 4 (Mechanism Selection). DO NOT proceed to Phase 5 (Compositional Layout).
```

**Root cause:** Original edit wrote phase descriptions from memory instead of verifying against the TC skill file. The TC pipeline diagram at line 34 of SKILL.md clearly shows: Phase 0 = Assessment, Phase 1 = Multi-Axis Questioning, Phase 2 = Tension Derivation, Phase 3 = Metaphor Collapse, Phase 4 = Compositional Layout (Mechanism Selection), Phase 5 = Output.

---

## Harmony Fix 2: Add Mechanism Catalog to TC Agent File List (Section 2)

**Flagged by:** harmony-skillmd agent

**What changed:** TC agent needs the mechanism catalog to execute Phase 4 (Mechanism Selection).

**Before:** TC agent read list had 2 files (TC SKILL.md + content).
**After:** TC agent read list has 3 files:
```
1. ~/.claude/skills/tension-composition/SKILL.md -- YOUR PROCESS.
2. [content-file-path] -- THE CONTENT to analyze.
3. design-system/compositional-core/grammar/mechanism-catalog.md -- MECHANISM VOCABULARY for Phase 4 selection.
```

---

## Harmony Fix 3: Fix BG-1 Behavioral Gate (Section 4.4)

**Flagged by:** harmony-skillmd agent

**What changed:** BG-1 was checking the BUILD LOG for TC pipeline evidence, but the builder no longer runs the TC pipeline -- the TC agent does. BG-1 now checks the TC BRIEF.

**Before:** `BG-1: Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation`
**After:** `BG-1: TC brief (_tc-brief.md) shows content assessment -> multi-axis questioning -> tension derivation -> metaphor collapse -> mechanism selection (evidence of Phases 0-4 execution)`

---

## Verification Checklist

- [x] TC skill referenced by PATH (`~/.claude/skills/tension-composition/SKILL.md`), not embedded
- [x] PA skill referenced by PATH (`~/.claude/skills/perceptual-auditing/SKILL.md`), not embedded
- [x] TC brief output capped at ~50 lines
- [x] Gate-runner line count matches actual (1,159)
- [x] Gate count matches actual (22)
- [x] DG-3 present in deliverable gates
- [x] Builder Phase C checkpoint 1 matches MG-1 (SC-06, SC-07, SC-08, SC-12, DG-3)
- [x] Builder Phase C checkpoint 3 matches SC-11 Flagship (>= 10px, 3+ zones)
- [x] All section numbers consistent (no gaps, no duplicates)
- [x] All internal cross-references updated
- [x] conventions-brief.md NOT modified (other agent's responsibility)
- [x] gate-runner.md NOT modified (other agent's responsibility)
- [x] flagship-pa-questions.md NOT modified (other agent's responsibility)
- [x] TC phase descriptions match actual TC skill numbering (0=Assessment, 1=Multi-Axis, 2=Tension, 3=Metaphor, 3.5=Commitment, 4=Mechanism)
- [x] TC agent reads mechanism-catalog.md for Phase 4
- [x] BG-1 checks TC brief (not build log) for pipeline evidence
