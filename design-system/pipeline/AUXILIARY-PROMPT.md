# Pipeline Integrity Protocol — Drop-in Fragment (v3)

> Paste into any session that modifies pipeline artifacts.
> Replaces voluntary checklists with 1 pre-check + 3 structural gates + 4 binary audits.

---

## BEFORE making changes, RUN this pre-check

### Gate 0: Crack Dimension Pre-Check

**Catches:** All 14 crack dimensions (prevention layer).

Before making ANY change, read `design-system/pipeline/crack-dimensions.md`.
For each change you plan to make:
1. Which crack dimensions does this change address?
2. Which crack dimensions could this change RE-OPEN?
3. If the change re-opens a CLOSED dimension: justify why, or redesign.

---

## AFTER every file edit, RUN this verification procedure

This is not optional. If you skip it, your changes will silently break downstream pipeline stages.

### Gate 1: Reference Integrity Scan

**Catches:** Crack #6 (cross-file reference rot).

For every file you modified:

```
MODIFIED_FILE = the file you just edited
1. Search ALL other pipeline artifact files for the string: [filename of MODIFIED_FILE]
2. Search for any section heading, gate ID, or step number you RENAMED or REMOVED
3. For each stale reference found:
   - Update the reference in the referring file, OR
   - Document it as a KNOWN STALE REFERENCE in your output
4. Count: references_checked = ___, stale_found = ___, stale_fixed = ___
```

If stale_found > stale_fixed, STOP. Fix them or explain why you cannot.

### Gate 2: Template-Slot Completeness

**Catches:** Crack #1 (template slot absence).

If you modified `artifact-builder-recipe.md` (the recipe):

```
1. List every STEP NUMBER in the recipe (e.g., Step 2.7, Step 3.4c)
2. Open artifact-tc-brief-template.md
3. For each recipe step: does the template have a section/slot that would prompt the Brief Assembler to include it?
4. Count: recipe_steps = ___, template_slots = ___, MISSING_slots = ___
```

If MISSING_slots > 0, add the missing slots to the template. A recipe step without a template slot is lost in 100% of builds.

If you modified `artifact-tc-brief-template.md`: verify it does NOT exceed 250 lines and each new slot is fillable in <= 15 lines. Brief length past ~350 lines degrades builder compliance from ~85% to ~72%.

### Gate 3: Attention Budget Check

**Catches:** Crack #5 (position effect / attention decay), #7 (defense paradox), #14 (complexity-induced invisibility).

For every file you modified:

```
1. Count the file's total lines AFTER your changes
2. Check against these ceilings:
   - Builder-facing files (recipe, brief template, tokens, components): <= 800 lines per file
   - Orchestrator-facing files (MANIFEST, orchestrator spec): <= 1,200 lines per file
   - Gate runner code (gate-runner-core.js): <= 2,000 lines
   - Tracker template: <= 50 manual-entry fields
3. If ANY ceiling is exceeded: identify lines to CUT before adding new ones
```

Compliance drops from ~95% to ~72% when agent input exceeds these thresholds.

---

## AFTER all edits are complete, RUN these 4 binary audits

Each audit produces a single number. Report all 4 numbers in your output.

### Audit A: Gate Coverage

**Catches:** Crack #3 (voluntary non-execution).

```
Count REQUIRED gates in gate-manifest.json: ___
Count gate functions in gate-runner-core.js: ___
DELTA (manifest - code): ___
```

If DELTA > 0, there are gates specified but not implemented. Every unimplemented gate is a promise the pipeline will break.

### Audit B: Enforcement Ratio

**Catches:** Crack #8 (soft language / spec ambiguity).

```
For each new rule/requirement you added:
  - Is it checked by CODE (gate function, BV check, template slot)? = ENFORCED
  - Is it checked only by an agent reading prose and choosing to comply? = VOLUNTARY

ENFORCED count: ___
VOLUNTARY count: ___
RATIO (enforced / total): ___
```

If RATIO < 1.0, you added voluntary rules. Voluntary rules achieve 0-67% compliance. Convert to code, template slots, or gate checks.

### Audit C: Net Line Delta

**Catches:** Crack #7 (defense paradox), #14 (complexity-induced invisibility).

```
Lines ADDED across all modified files: ___
Lines REMOVED across all modified files: ___
NET DELTA: ___
```

If NET DELTA > +50 and none are code-enforced: you increased spec surface area without increasing enforcement.

### Audit D: Soft Language Scan

**Catches:** Crack #8 (spec ambiguity / soft language).

```
Search your additions for: "target" "aim for" "recommended" "consider" "should" "ideally" "strive"
INSTANCES FOUND: ___
```

If INSTANCES > 0, convert each to a binary rule or delete it. Binary rules achieve 100% compliance. Judgment rules achieve 0-65%.

---

## Critical Thresholds (embed in any gate you write)

| Property | Threshold | Source |
|----------|-----------|--------|
| Adjacent background delta | >= 15 RGB points | GR-11, validated 4 runs |
| Container width | 940-960px | SC-03, 100% compliance when enforced |
| Border width | Integer pixels only (1, 2, 3, 4) | SC-08 |
| Border radius | 0 on all elements | SC-01, 100% compliance |
| Tracker manual fields | <= 50 | Report 04: 375 at 67% vs 50 at 95% |
| Builder input | <= 800 lines per file | Report 02 attention curve |
| Brief length | <= 350 lines | Report 02: compliance degrades past this |
| Recipe:checklist verb ratio | >= 3:1 | BV-03 |
| DPR before gates | Must be 1.0 | Set deviceScaleFactor: 1 |
| Gate coverage (GR-48) | 100% of REQUIRED gates | Make automatic, not voluntary |

---

## What This Prompt Does NOT Do

It does not tell you HOW to design pipeline changes. Those belong in the recipe, mechanism catalog, and skill files.

This prompt does ONE thing: it forces you to verify that your changes do not silently break the pipeline's existing integrity. The verification is mechanical, binary, and takes < 10 minutes.
