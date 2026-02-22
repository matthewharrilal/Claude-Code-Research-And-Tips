# TC Skill Enrichment Changelog: Sub-Skill Mode

**File modified:** `~/.claude/skills/tension-composition/SKILL.md`
**Date:** 2026-02-20
**Agent:** tc-skill-enricher

## Summary

Added sub-skill mode support so the TC skill can function as a sub-skill of /build-page. Three edits: Phase 0D exception clause, Phase 3.5Z zone architecture step, and Phase 4.5 sub-skill output format specification.

## Edits Applied

### Edit 1: Phase 0D Amendment (Line ~72, +2 lines)

**Location:** Step 0D: Pipeline Entry, after "No tier routing, no phase skipping."

**What was added:** Exception clause for sub-skill mode:
> "When invoked as a sub-skill by /build-page, the TC agent runs Phases 0 through 4 and outputs via Phase 4.5 (Sub-Skill Output Mode). Phase 5 (Compositional Layout) is handled by the downstream builder."

**Why:** Phase 0D previously stated "No phase skipping" with no exceptions. This directly contradicted the /build-page invocation pattern where the TC agent runs Phases 0-4 and the builder handles layout. The exception clause resolves the contradiction without weakening the full-pipeline mandate for standalone use.

**Lines added:** 2

### Edit 2: Phase 3.5Z Zone Architecture (Lines ~793-803, +11 lines)

**Location:** After Phase 3.5 Metaphor Commitment, before Phase 4.

**What was added:** A new sub-step "Phase 3.5Z: Zone Architecture (Sub-Skill Mode Only)" with 5 steps:
1. Zone count (3-5)
2. Zone naming using metaphor vocabulary
3. Semantic direction assignment at boundaries
4. Density level per zone
5. Content mapping per zone

Also updated the "Proceed to Phase 4" line to mention Phase 3.5Z.

**Why:** The TC brief (Phase 4.5) requires zone architecture in Section 2, but no prior step in the pipeline explicitly derived it. Zone architecture was implicit in Phase 5 (Compositional Layout) but never articulated before mechanism selection. In sub-skill mode, this articulation step is essential because the TC agent won't reach Phase 5.

**Lines added:** 11

### Edit 3: Phase 4.5 Sub-Skill Output Mode (Lines ~1627-1670, +44 lines)

**Location:** After Phase 4.9 (Tokenization Self-Check), before Phase 5 (Output).

**What was added:** Complete specification for the TC brief output format when running in sub-skill mode, containing:
- 5 required sections: STRUCTURAL METAPHOR, ZONE ARCHITECTURE, CONTENT TENSIONS, SELECTED MECHANISMS, METAPHOR-IMPLIED CSS DIRECTIONS
- Format guidance for each section
- Brief length target (40-60 lines)
- Handoff semantics (builder reads brief FIRST, may adapt expression but not replace metaphor)
- Completion criteria

**Why:** The /build-page skill expects a `_tc-brief.md` with 5 specific sections, but the TC skill had no specification for this output. The TC agent would either produce a full Phase 5 output (wrong format) or improvise the brief format (inconsistent). This section codifies the exact output the builder expects.

**Lines added:** 44

## Total Impact

- **Lines added:** ~57 (2 + 11 + 44)
- **Lines modified:** 1 (the "Proceed to Phase 4" text)
- **Lines deleted:** 0
- **Existing Phase 0-4 logic:** UNCHANGED
- **Quality gates preserved:** All existing rejection checks, BECAUSE tests, composite scoring, perceptual risk assessment, fractal gate -- all untouched
- **Phase numbering note:** Phase 4.5 is numbered after 4.9 in the file (between Phase 4.9 and Phase 5) because it's the sub-skill EXIT POINT after all Phase 4 work is complete. The TC agent runs the full Phase 4 including 4.7 fractal gate and 4.9 tokenization before outputting via 4.5.

## Verification

- Phase 0D exception does not weaken standalone mode (exception is conditional on /build-page invocation)
- Phase 3.5Z is scoped to sub-skill mode only (standalone runs skip it)
- Phase 4.5 output format matches /build-page Section 2 TC brief expectations (5 sections, ~50 lines)
- No existing section headers, gate definitions, or quality checks were modified
