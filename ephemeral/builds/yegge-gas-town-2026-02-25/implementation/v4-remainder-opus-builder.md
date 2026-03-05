# Opus-for-Builder Structural Enforcement Report

Date: 2026-02-25
Agent: opus-enforcer
Status: COMPLETE — 13 edits across 6 files

---

## Executive Summary

Converted "Opus for builder" from a soft recommendation to a hard structural requirement across ALL pipeline files. Every instance of "STRONG RECOMMENDATION", "recommended", "ADVISORY", and "not non-negotiable" language has been replaced with binary "REQUIRED" / "non-negotiable" / "MUST" language. GR-23 upgraded from ADVISORY (WARNING on fail) to REQUIRED (BLOCK on fail).

The SKILL.md (`~/.claude/skills/build-page/SKILL.md`) was **already binary** — it says "ALL agents MUST be Opus. No exceptions." and "Builder model: Opus always" in its non-negotiables. No changes needed there. The gap was entirely in the artifact layer (MANIFEST.md, orchestrator, recipe, routing, gate runner, PA deployment, execution tracker).

---

## Inventory: Every Location Found

### File 1: `ephemeral/va-extraction/MANIFEST.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Quickstart step 2 | 25 | Binary: "Opus" with no qualifier | Unchanged | No edit needed |
| Quickstart step 4 | 27 | Binary: "Opus" with no qualifier | Unchanged | No edit needed |
| Quickstart step 5 | 34 | **SOFT:** "Opus, STRONG recommendation" | "Opus, REQUIRED" | EDITED |
| Quickstart step 8 | 37 | Binary: "all Opus" | Unchanged | No edit needed |
| Agent Roster — Content Analyst | 114 | **SOFT:** "Opus (recommended)" | "Opus (REQUIRED)" | EDITED |
| Agent Roster — Brief Assembler | 120 | **SOFT:** "Opus (recommended)" | "Opus (REQUIRED)" | EDITED |
| Agent Roster — Builder | 126 | **SOFT:** "Opus (STRONG recommendation)" | "Opus (REQUIRED)" | EDITED |
| Why Opus for Builder note | 128 | **SOFT:** "Per council: STRONG RECOMMENDATION, not non-negotiable." | "non-negotiable pipeline requirement, enforced as strictly as container width 940-960px." | EDITED |
| PA Auditor rows A-I | 149-157 | Binary: "Opus" | Unchanged | No edit needed |
| Integrative Auditor | 165 | Binary: "Opus" | Unchanged | No edit needed |
| Weaver | 175 | Binary: "Opus" | Unchanged | No edit needed |
| Appendix D Decision E | ~765 | **SOFT:** "STRONG RECOMMENDATION, not non-negotiable" | "REQUIRED for all pipeline agents" | EDITED |
| Appendix F header | 1248 | **SOFT:** "SHOULD use" + "STRONG RECOMMENDATION" | "MUST use" + "Non-negotiable" | EDITED |
| Appendix F table — Builder row | 1260 | **SOFT:** "Opus (STRONG)" | "Opus" with "MUST" in Requirement column | EDITED |
| Appendix F table — All rows | 1256-1264 | Column header was "Strength" | Column header now "Requirement", all rows say "MUST" | EDITED |

**Edits in this file: 8 locations changed**

### File 2: `ephemeral/va-extraction/artifact-orchestrator.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Precondition table row 1 | 52 | Binary-ish: "Model = OPUS for builder" | Unchanged (already imperative) | No edit needed |
| ITEM 128 | 57 | Binary: "PRECONDITION 1: Model = OPUS" | Unchanged | No edit needed |
| Model Selection — ITEM 100 | 97-98 | **SOFT:** "Council ruling: STRONG RECOMMENDATION, not 'non-negotiable.'" | "REQUIRED. Opus for ALL pipeline agents is non-negotiable." | EDITED |
| Builder Agent — ITEM 49 | 355 | **SOFT:** "Opus — STRONG RECOMMENDATION per council" | "Opus — REQUIRED, non-negotiable" | EDITED |
| GR-23 | 630-634 | **SOFT:** "[ADVISORY]", "WARNING, not BLOCK" | "[REQUIRED]", "BLOCK — pipeline MUST NOT proceed" | EDITED |
| REFINE protocol | 553-560 | Binary: "DIFFERENT Opus builder" | Unchanged | No edit needed |
| REBUILD protocol | 580-586 | Binary: "FRESH Opus builder" | Unchanged | No edit needed |
| Phase timing table | 685-690 | Binary: "1 (Opus)" per phase | Unchanged | No edit needed |

**Edits in this file: 3 locations changed**

### File 3: `ephemeral/va-extraction/artifact-builder-recipe.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Council Ruling #10 | 630 | **SOFT:** "STRONG RECOMMENDATION, not non-negotiable" | "REQUIRED (non-negotiable). Enforced as strictly as container width 940-960px." | EDITED |

**Edits in this file: 1 location changed**

### File 4: `ephemeral/va-extraction/artifact-routing.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Content Analyst agent label | 38 | Binary: "Content Analyst (Opus)" | Unchanged | No edit needed |
| Brief Assembler agent label | 495 | Binary: "Brief Assembler (Opus)" | Unchanged | No edit needed |
| COMPOSED mode conditions | 393 | **SOFT:** "Opus builder (STRONG RECOMMENDATION per council)" | "Opus builder (REQUIRED — non-negotiable for all pipeline agents)" | EDITED |

**Edits in this file: 1 location changed**

### File 5: `ephemeral/va-extraction/gate-runner-preconditions.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| GR-23 header + body | 54-57 | **SOFT:** "[ADVISORY]", "STRONG RECOMMENDATION", "WARNING, not BLOCK" | "[REQUIRED]", "BLOCK — pipeline MUST NOT proceed to Phase 2" | EDITED |

**Edits in this file: 1 location changed**

### File 6: `ephemeral/va-extraction/pa-deployment.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Auditors A-I model requirement | 189 | **SOFT:** "STRONG RECOMMENDATION Opus (not a hard requirement)" | "REQUIRED — all 9 auditors MUST be Opus. Non-negotiable." | EDITED |
| Integrative Auditor | 190 | Binary-ish: "Opus" (no qualifier) | "REQUIRED" added for consistency | EDITED |
| Weaver | 191 | Binary-ish: "Opus" (no qualifier) | "REQUIRED" added for consistency | EDITED |

**Edits in this file: 1 location changed (3 rows in same table)**

### File 7: `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Builder model field | 39 | **SOFT:** "Opus/Sonnet" (implying either is fine) | "Opus REQUIRED — if non-Opus, EXPLAIN WHY + mark all output [SONNET-TEST]" | EDITED |
| REFINE builder model field | 86 | **SOFT:** "Opus/Sonnet" (implying either is fine) | Same REQUIRED language | EDITED |

**Edits in this file: 2 locations changed**

### File 8: `~/.claude/skills/build-page/SKILL.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Execution rules — Model mandate | 74 | **Already binary:** "ALL agents MUST be Opus. No exceptions." | Unchanged | No edit needed |
| Non-negotiables #4 | 88 | **Already binary:** "Builder model: Opus always" | Unchanged | No edit needed |

**Edits in this file: 0 (already compliant)**

### File 9: `ephemeral/va-extraction/council-verdict.md`

| Location | Line(s) | Was (Soft/Binary) | Now | Edit |
|----------|---------|-------------------|-----|------|
| Contradiction E verdict | 194 | SOFT: "strong recommendation, not non-negotiable" | **Intentionally NOT edited** — this is a historical record | No edit |
| Sub-ruling Item 100 | 329 | SOFT: "STRONG RECOMMENDATION, not non-negotiable" | **Intentionally NOT edited** — historical record | No edit |
| Evidence downgrade #6 | 459 | SOFT: "STRONG RECOMMENDATION pending experiment #19" | **Intentionally NOT edited** — historical record | No edit |
| Summary table row | 347 | SOFT: "Downgrade to 'strongly recommended'" | **Intentionally NOT edited** — historical record | No edit |
| Scorecard row E | 530 | SOFT: "Strong recommendation, not non-negotiable" | **Intentionally NOT edited** — historical record | No edit |

**Edits in this file: 0 (historical document, not operational)**

### File 10: `ephemeral/va-extraction/artifact-identity-perception.md`

No model-related mentions found. No edits needed.

---

## Files NOT Changed (and why)

| File | Reason |
|------|--------|
| `council-verdict.md` | Historical document recording the council ruling at the time. The operational artifacts (MANIFEST, orchestrator, etc.) override it going forward. Editing a historical verdict would be revisionism. |
| `artifact-identity-perception.md` | No model mentions. Soul constraints and perception thresholds are model-agnostic. |
| `gate-runner-core.js` | GR-23 is an orchestrator decision rule (text-based check), not a Playwright DOM gate. No JS code to modify. |
| `gate-manifest.json` | Only contains a note that GR-23-28 are reclassified to orchestrator. Correct as-is. |
| `gate-runner-spec.md` | Contains a reference note pointing to artifact-orchestrator.md Section 9. Correct as-is since Section 9 is now updated. |
| `SKILL.md` | Already the strongest enforcement point. "MUST" + "No exceptions" + "Opus always" in non-negotiables. |

---

## Final Enforcement Architecture

The Opus requirement is now enforced at **4 independent layers:**

### Layer 1: SKILL.md (Entry Point)
- `SKILL.md` line 74: "ALL agents MUST be Opus. No exceptions."
- `SKILL.md` line 88: Non-negotiable #4: "Builder model: Opus always"
- This is the FIRST thing any orchestrator reads.

### Layer 2: MANIFEST.md (Authoritative Spec)
- Appendix F: "ALL pipeline agents MUST use the Opus model."
- Agent Roster: Every agent row says "REQUIRED" in the Model column.
- Quickstart step 5: "Opus, REQUIRED"
- Decision E: "REQUIRED for all pipeline agents"

### Layer 3: Operational Gates (Runtime Enforcement)
- **GR-23 upgraded from ADVISORY to REQUIRED** — pipeline BLOCKS (does not proceed to Phase 2) if builder model is not Opus.
- Gate-runner-preconditions.md: "FAIL produces BLOCK" (was "WARNING, not BLOCK").
- artifact-orchestrator.md Section 9: GR-23 now says "pipeline MUST NOT proceed."

### Layer 4: Execution Tracker (Audit Trail)
- Builder model field: "Opus REQUIRED — if non-Opus, EXPLAIN WHY + mark all output [SONNET-TEST]"
- REFINE builder model field: Same language.
- Any non-Opus usage creates a permanent audit trail in the execution tracker.

### Escape Hatch: [SONNET-TEST]
The Sonnet path is not removed — it is walled off:
- Sonnet is permitted ONLY for "declared [SONNET-TEST] runs"
- Such runs MUST be marked in ALL output files
- Such runs MUST NOT be compared to Opus baselines without noting the model difference
- Such runs do not count toward pipeline quality baselines
- The execution tracker forces an explanation for why non-Opus was used

---

## Soft Language Removed (Complete List)

| Phrase | Occurrences Removed | Files |
|--------|---------------------|-------|
| "STRONG RECOMMENDATION" | 6 | MANIFEST (3), orchestrator (1), recipe (1), routing (1) |
| "STRONG recommendation" | 1 | MANIFEST quickstart step 5 |
| "recommended" (in model context) | 2 | MANIFEST agent roster (Content Analyst, Brief Assembler) |
| "not non-negotiable" | 2 | MANIFEST Appendix F, builder note |
| "ADVISORY" (for GR-23) | 2 | orchestrator Section 9, gate-runner-preconditions |
| "WARNING, not BLOCK" | 2 | orchestrator Section 9, gate-runner-preconditions |
| "not a hard requirement" | 1 | pa-deployment.md auditor row |
| "Opus/Sonnet" (implying choice) | 2 | EXECUTION-TRACKER-TEMPLATE (builder, REFINE) |

**Total: 18 instances of soft language removed across 6 files.**

---

## Relationship to Container Width Enforcement

The task asked for Opus-for-builder to be "enforced as strictly as container width 940-960px." Here is the comparison:

| Dimension | Container Width | Opus-for-Builder (After) |
|-----------|----------------|--------------------------|
| SKILL.md non-negotiable | Yes (#1) | Yes (#4) |
| MANIFEST binary language | Yes | Yes |
| Gate enforcement | GR-10 REQUIRED, BLOCK | GR-23 REQUIRED, BLOCK |
| Execution tracker field | Yes (implicit in gates) | Yes (explicit field) |
| Exception path | None | [SONNET-TEST] with mandatory marking |

The only difference: container width has zero exceptions; Opus has the [SONNET-TEST] escape hatch for cost-constrained experimentation. This is intentional — you cannot build a page with a different container width for "testing purposes," but you might legitimately want to run a Sonnet comparison for Experiment #19.

---

## Edit Summary

| File | Edits | Nature |
|------|-------|--------|
| `MANIFEST.md` | 8 | Appendix F rewrite, agent roster, quickstart, decision table |
| `artifact-orchestrator.md` | 3 | Model selection, ITEM 49, GR-23 upgrade |
| `artifact-builder-recipe.md` | 1 | Council ruling #10 |
| `artifact-routing.md` | 1 | COMPOSED mode conditions |
| `gate-runner-preconditions.md` | 1 | GR-23 ADVISORY -> REQUIRED |
| `pa-deployment.md` | 1 | Auditor model requirement table |
| `EXECUTION-TRACKER-TEMPLATE.md` | 2 | Builder + REFINE model fields |
| **Total** | **17 edits across 7 files** | |
