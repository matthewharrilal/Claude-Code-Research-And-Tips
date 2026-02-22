# 29 -- Trim & Cross-Validation Synthesis

**Date:** 2026-02-20
**Input Reports:** 25 (TC trim), 26 (PA trim), 27 (cross-validation), 28 (TC cruft)
**Cross-validation fixes:** ALL BLOCKING discrepancies RESOLVED

---

## 1. CROSS-VALIDATION FIXES APPLIED (This Session)

All 9 BLOCKING discrepancies from report 27 are now resolved:

| Issue | File | Fix |
|-------|------|-----|
| B-01: PA question count "59" | PA SKILL.md line 7 | "59" → "63" |
| B-01: PA question count "57" | flagship-pa-questions.md line 5 | "48 standard (57 total)" → "54 standard (63 total)" |
| B-01: PA question count "57" | flagship-pa-questions.md line 158 | "48 standard + 9 = 57" → "54 standard + 9 = 63" |
| B-03: Auditor A missing PA-03 | flagship-pa-questions.md line 148 | Added PA-03, total 9→10 |
| B-04: Auditor B missing PA-70 | flagship-pa-questions.md line 149 | Added PA-70, total 5→6 |
| B-05: Auditor D missing PA-69 | flagship-pa-questions.md line 151 | Added PA-69, total 6→7 |
| B-06: Auditor F missing PA-24 | flagship-pa-questions.md line 153 | Added PA-24, total 6→7 |
| B-07: Auditor G missing PA-25 | flagship-pa-questions.md line 154 | Added PA-25, total 4→5 |
| B-09: "48 standard" count | flagship-pa-questions.md | Corrected to "54 standard" |
| S-06: Mode 4 agent count "7" | PA SKILL.md line 633 | "7 agents" → "12 agents" |
| A-06: Tier 5 threshold "6/8" | conventions-brief.md line 361 | "6/8" → "7/9" |
| S-10: accent-blue wrong | design-system/CLAUDE.md | "#2563EB" → "#4A90D9" (matches tokens.css) |
| A-03/A-04: Stale skill sizes | design-system/CLAUDE.md KEY FILE PATHS | TC "839 lines" → "~2,006 lines", PA "48 questions" → "63 questions" |
| S-04: Stale /active/ paths | TC SKILL.md (5 locations) | All updated to `design-system/compositional-core/...` paths |
| S-07: merged-components.css | MEMORY.md | Corrected to `components.css` |

**Previously fixed (prior session):**
- build-page SKILL.md: "57 questions" → "63 questions" (lines 331, 410)
- PA SKILL.md: PA-03→Auditor A, PA-24→Auditor F, PA-25→Auditor G
- PA SKILL.md: "54 standard + 9 Tier 5 = 63" (lines 636, 654)
- design-system/CLAUDE.md: 22-gate, Tier 5 >= 7/9, 63 questions, Phases 0-4

**Still outstanding (not fixed -- requires user decision):**
- S-08: DG-1/DG-2 expect YAML but build-page produces Markdown (format mismatch in gate-runner.md)
- A-01: `case-studies/_INDEX.md` referenced but file is `README.md`
- A-07: TC says "18 mechanisms in catalog" -- needs verification against actual catalog

---

## 2. TRIMMING RECOMMENDATIONS

### TC Skill (tension-composition/SKILL.md)

**Current:** 2,006 lines
**Reports agree on:** ~850-1,040 lines removable (42-52%)
**Recommended target:** ~960-1,050 lines

Both TC reports (25 and 28) converge on **Option C: Trim In-Place + Standalone Appendix.**

**What to remove (by category):**

| Category | Lines | Items |
|----------|-------|-------|
| Phase 5+ (standalone-only) | ~318 | Output, divergence verification, edge cases, invocation, test results |
| Builder content (tokenization, landmarks, section-aware) | ~148 | Phase 4.7B, 4.8, 4.9 (builder verification, not TC analysis) |
| Duplicate guardrails (in conventions-brief) | ~120 | Soul constraints, palette, border-radius repeated from prohibitions.md |
| Builder warning TEXT (keep selection logic) | ~60 | W-DEADZONE through W-IMPLICIT full text (keep 12-line mapping table) |
| Stale references | ~50 | Old file paths (FIXED), tier routing remnants, Middle experiment ref |

**What to KEEP:**
- Phases 0-4.5 core (content assessment, multi-axis questioning, tension derivation, metaphor commitment, mechanism selection, zone architecture, sub-skill output) -- ~800 lines
- Phase 3.5A-F commitment gate (anti-gravity) -- ~150 lines
- Builder warning SELECTION LOGIC (12-line table mapping risk→warnings)

**Structural approach:**
1. Keep Phases 0-4.5 intact in main SKILL.md (~960-1,050 lines)
2. Move Phase 5+ to `~/.claude/skills/tension-composition/STANDALONE-APPENDIX.md` (~318 lines)
3. Add 3-line pointer at Phase 4.5 exit: "For standalone mode (no /build-page), see STANDALONE-APPENDIX.md"

---

### PA Skill (perceptual-auditing/SKILL.md)

**Current:** 1,208 lines
**Report recommends:** ~350-420 lines removable (29-35%)
**Recommended target:** ~790-860 lines

**What to remove (by category):**

| Category | Lines | Items |
|----------|-------|-------|
| Modes 1-3 (orphaned) | ~32 | Never invoked by /build-page |
| Mode 4 team structure (duplicated) | ~37 | Identical to /build-page Section 6.1-6.2 |
| Weaver protocol (duplicated) | ~47 | Keep calibration tables only (~28 lines) |
| Playwright/scroll JS code (orphaned) | ~47 | Auditors never touch Playwright |
| Screenshot-reading protocol (duplicated) | ~14 | Keep 3-4 lines, rest in /build-page |
| Lock sheet format (duplicated) | ~15 | /build-page owns lock sheets |
| Team roles full (orphaned) | ~20 | Keep auditor language HARD BLOCK only |
| Expanded metaphor section (self-duplicate) | ~76 | Lines 773-888, duplicates lines 224-285 |
| Standalone infrastructure | ~50 | Naming, file structure, gates, error handling, validation |
| Stale references | ~6 | Old docs-spa/ path, "59 questions" (FIXED) |

**What to KEEP:**
- All 63 question definitions with full text (~392 lines) -- THE CORE
- Critical Warning + One Rule + Sovereignty (~61 lines)
- Quantitative guardrails (~74 lines)
- Cold Look + Zone Sweep + Progressive Zoom (~52 lines)
- First instance of metaphor-awareness principles (~60 lines, lines 224-285)
- Multi-coherence evaluation guidance (~32 lines)
- Auditor language HARD BLOCK (~6 lines)
- Severity scale (simplified, ~5 lines)
- Tier 5 scoring table and Tier 5 question assignments (already in keeper zone)

**Fresh-eyes risk assessment:**
- TRIM expanded metaphor section (lines 773-888) -- CSS thresholds anchor auditors
- SIMPLIFY multi-coherence "what to look for" -- teach observation, not framework
- MOVE weaver calibration tables to separate clearly-marked section
- STRIP provenance notes from question definitions

---

## 3. VERIFICATION STATUS

### Files now CONSISTENT (verified counts match across all 7 files):

| Metric | Value | Files Agreeing |
|--------|-------|----------------|
| PA question total | 63 (54 standard + 9 Tier 5) | PA SKILL, build-page, flagship-pa-questions, CLAUDE.md |
| Tier 5 SHIP threshold | >= 7/9 | PA SKILL, build-page, conventions-brief, CLAUDE.md |
| Gate count | 22 (16 composition + 4 deliverable + 2 behavioral) | gate-runner, build-page, CLAUDE.md |
| Accent-blue | #4A90D9 | tokens.css, specification/tokens/colors.md, CLAUDE.md |
| Container width | 940-960px | All files |
| Soul constraints | Consistent | All files |
| Perception thresholds | Consistent (>=15 RGB, 0.025em, 120px) | All files |
| Verdict matrix | Consistent | PA SKILL, build-page |
| Builder model | Opus ALWAYS | All files |
| Fix cycle protocol | Consistent (3 max, 9→2→2) | PA SKILL, build-page |

### Remaining non-blocking items:
1. S-08: YAML vs Markdown format for DG-1/DG-2 (gate-runner expects YAML, build-page produces MD)
2. A-01: `_INDEX.md` vs `README.md` for case-studies directory listing
3. Pipeline CLAUDE.md: Still references "839 lines" for TC skill (in INBOUND section)
4. TC skill line count will change after trimming

---

## 4. RECOMMENDED EXECUTION ORDER

If user approves trimming:

1. **TC trim first** (larger, cleaner cuts) -- spawn 1 Opus agent
   - Extract Phase 5+ to STANDALONE-APPENDIX.md
   - Remove builder-only content (Phases 4.7B, 4.8, 4.9)
   - Remove duplicate soul constraints
   - Consolidate builder warning selection logic into Phase 3.5
   - Target: ~960-1,050 lines

2. **PA trim second** (more judgment calls) -- spawn 1 Opus agent
   - Collapse Modes 1-3 to 2-line redirect
   - Remove duplicated team structure, weaver protocol, Playwright code
   - Trim expanded metaphor section (keep first instance)
   - Simplify multi-coherence guidance
   - Keep auditor language HARD BLOCK
   - Target: ~790-860 lines

3. **Verification pass** -- spawn 1 cross-validator
   - Re-run 7-file cross-validation
   - Verify no new discrepancies introduced
   - Confirm all 63 questions still have full text

4. **Update line counts** in CLAUDE.md, MEMORY.md, pipeline CLAUDE.md
