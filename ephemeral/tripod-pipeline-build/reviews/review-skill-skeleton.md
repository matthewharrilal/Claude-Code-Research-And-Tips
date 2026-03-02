# Review: SKILL-skeleton.md (Orchestration File)

**Reviewer:** Fresh-eyes reviewer (reviewer-1)
**Source of Truth:** TRIPOD-PIPELINE-SPECIFICATION.md
**Date:** 2026-03-02

---

## Overall Verdict: PASS with 2 REVISE items (1 HIGH, 1 MEDIUM)

The skeleton is comprehensive, well-structured, and faithfully implements the spec. All 5 phases are present with validation gates. Context recovery instructions appear at every phase boundary. The screenshot protocol matches the /compose pattern. The output manifest matches the spec. The one critical issue is a systematic path prefix error affecting 10 file paths.

---

## Checklist

### 1. Placeholder Markers — PASS

**13 placeholders found, all correctly named:**

| # | Placeholder | Line | Corresponding Prompt File |
|---|-------------|------|--------------------------|
| 1 | `{{TC_AGENT_PROMPT}}` | 110 | Not in prompts/ (expected — TC uses existing skill) |
| 2 | `{{SPECIALIST_1_PROMPT}}` | 169 | `prompts/specialist-1-prompt.md` |
| 3 | `{{SPECIALIST_2_PROMPT}}` | 192 | `prompts/specialist-2-prompt.md` |
| 4 | `{{SPECIALIST_3_PROMPT}}` | 219 | `prompts/specialist-3-prompt.md` |
| 5 | `{{SPECIALIST_4_PROMPT}}` | 243 | `prompts/specialist-4-prompt.md` |
| 6 | `{{SPECIALIST_5_PROMPT}}` | 264 | `prompts/specialist-5-prompt.md` |
| 7 | `{{SYNTHESIZER_PROMPT}}` | 315 | `prompts/synthesizer-prompt.md` |
| 8 | `{{BUILDER_PASS_1_PROMPT}}` | 391 | `prompts/builder-pass-1-prompt.md` |
| 9 | `{{BUILDER_PASS_2_PROMPT}}` | 426 | `prompts/builder-pass-2-prompt.md` |
| 10 | `{{BUILDER_PASS_3_PROMPT}}` | 458 | `prompts/builder-pass-3-prompt.md` |
| 11 | `{{PA_AUDITOR_PROMPT}}` | 569 | Not in prompts/ (expected — see pa-integration-spec.md) |
| 12 | `{{WEAVER_PROMPT}}` | 592 | Not in prompts/ (expected — see pa-integration-spec.md) |
| 13 | `{{REFINE_BUILDER_PROMPT}}` | 686 | Not in prompts/ (expected — may need to be written separately) |

**Note:** 4 of 13 placeholders have no corresponding prompt file in `prompts/`. TC and PA/Weaver are accounted for (existing skill files and pa-integration-spec.md). The `{{REFINE_BUILDER_PROMPT}}` has no corresponding file anywhere — this should be written before final assembly. This is not a skeleton bug (it correctly marks the placeholder), but it's a gap in the deliverable set.

---

### 2. Validation Gates Between Every Phase — PASS

| Phase | Gate Present? | Gate Contents |
|-------|---------------|--------------|
| Phase 0 → 1 | YES (line 86) | "DO NOT proceed to Phase 1 until Phase 0 validation passes." |
| Phase 1 → 2 | YES (line 136) | "DO NOT proceed to Phase 2 until Phase 1 validation passes." + 6-item validation checklist |
| Phase 2 → 3 | YES (line 359) | "DO NOT proceed to Phase 3 until Phase 2 validation passes." + specialist line floors + package validation |
| Phase 3 → 4 | YES (line 485) | "DO NOT proceed to Phase 4 until Phase 3 validation passes." + per-pass HTML validation |
| Phase 4 → 5 | YES (line 641-643) | Verdict-based branching: SHIP/REBUILD/REFINE |
| Phase 5 max | YES (line 706) | "If fix cycle >= 2, STOP." |

All gates are present with explicit stop instructions.

---

### 3. Context Recovery Instructions at Every Phase Boundary — PASS

| Phase | Recovery Instruction | Line |
|-------|---------------------|------|
| Phase 1 | "If context has compressed, re-read `_pipeline-log.md`" | 92 |
| Phase 2 | "If context has compressed, re-read `_pipeline-log.md`. Re-read `_tc-brief.md`" | 142 |
| Phase 2C | "If context has compressed between Step 2A and 2C, re-read `_pipeline-log.md`" | 296 |
| Phase 3 | "If context has compressed, re-read `_pipeline-log.md`. Check which pass was last completed" | 365 |
| Pass 2 | "If context has compressed since Pass 1, re-read `_pipeline-log.md` and `_pass-1-decisions.md`" | 410 |
| Pass 3 | "If context has compressed since Pass 2, re-read all decisions.md files" | 442 |
| Phase 4 | "If context has compressed, re-read `_pipeline-log.md`" | 491 |
| Phase 5 | "If context has compressed, re-read `_pipeline-log.md`" | 649 |

Excellent coverage — 8 recovery points across 5 phases.

---

### 4. File Routing Matches Spec Section 14 — PASS with 1 HIGH REVISE

**File routing comparison (skeleton vs spec Section 14):**

| Agent | Spec Section 14 | Skeleton | Match? |
|-------|-----------------|----------|--------|
| TC Agent | content.md, TC skill, identity.md, vocabulary.md | Lines 97-100: same files | YES |
| All Specialists (common) | content.md, _tc-brief.md | Lines 150-152 | YES |
| Specialist 1 | R1-R5, RESEARCH-SYNTHESIS, R5-EVAL-MATRIX | Lines 158-165 | YES |
| Specialist 2 | 4 stage findings + 3 handoffs + 3 synthesis docs | Lines 178-188 | YES (content), BUT paths wrong (see REVISE 1) |
| Specialist 3 | 14 case study files | Lines 201-215 | YES |
| Specialist 4 | 3 convention specs + identity/vocab/tokens + registry + ACCUMULATED-IDENTITY + BACKBONE + 2 gates | Lines 228-239 | YES (content), BUT paths wrong for archive files (see REVISE 1) |
| Specialist 5 | 2 master specs + 6 cd packages | Lines 252-260 | YES (content), BUT paths wrong for archive files (see REVISE 1) |
| Synthesizer | 5 specialist outputs + _tc-brief + content + cd-001/cd-006 exemplars | Lines 300-311 | YES |
| Builder Pass 1 | package-pass-1, content, _tc-brief, tokens.css, components.css | Lines 377-382 | YES |
| Builder Pass 2 | package-pass-2, pass-1-decisions, build-pass-1.html | Lines 414-417 | YES |
| Builder Pass 3 | package-pass-3, pass-1-decisions + pass-2-decisions, build-pass-2.html | Lines 446-449 | YES |
| PA Auditors | sanitized screenshots only + stripped PA skill | Lines 543-563 | YES |
| Weaver | screenshots + 5 auditor reports + weaver protocol + 3 package files | Lines 577-584 | YES |
| Refine Builder | _build-final.html + synthesis.md + relevant package + reflection | Lines 670-677 | YES |

**Routing is CORRECT for every agent.** File contents and isolation boundaries match spec Section 14 exactly. The only issue is path syntax (REVISE 1).

---

### 5. Cost Tracking Protocol — PASS

Each phase checkpoint includes `Cumulative cost estimate: $X` (lines 82, 133, 355, 481, 637, 717). Cost figures are reasonable and match the spec's Section 15 estimates.

---

### 6. Re-Run Logic for Thin Specialist Output — PASS

Lines 271-289: Clear re-run protocol with per-specialist line floors (S1:100, S2:80, S3:100, S4:60, S5:60). Includes specific re-spawn instruction text. "Maximum 1 re-run per specialist" prevents infinite loops. Matches spec Section 11, Obstacle 2.

---

### 7. Phase 4 Screenshot Protocol — PASS

Lines 496-539: Full screenshot capture protocol matching /compose. Includes:
- HTTP server startup
- 3 viewports (1440, 1024, 768)
- Font waiting (`document.fonts.ready`)
- Animation disabling
- Full-page + above-fold captures
- Sanitized filename copying for PA isolation
- Server shutdown instruction

One minor note: the animation-disabling CSS includes `opacity: 1 !important` which correctly forces reveal of scroll-animated elements. Good.

---

### 8. Output Manifest Completeness — PASS

Lines 748-779: The manifest matches spec Section 16 exactly. All files present:
- Build artifacts: _build-final.html, _build-pass-1.html, _build-pass-2.html
- Research: _specialist-[1-5]-*.md, _package-pass-[1-3].md
- Decisions: _pass-[1-2]-decisions.md, _builder-reflection.md
- Pipeline: _pipeline-log.md, _comparison-report.md
- Screenshots: _screenshots/ with correct filenames
- PA: _pa/ with auditor-[1-5].md and synthesis.md
- Fixes: _fixes/ with fix-N-feedback.md and fix-N-page.html

Exact match with spec.

---

## REVISE Items

### REVISE 1: WRONG PATH PREFIX — `design-system/archive/` should be `archive/` [HIGH SEVERITY]

**Impact:** 10 file paths in the skeleton prepend `design-system/` to `archive/` paths. The `design-system/archive/` directory does NOT exist on disk. All `archive/` files live at the project root. Agents using these paths will fail to read files, producing thin or empty output.

**Verification:**
- `design-system/archive/` — DOES NOT EXIST
- `archive/` — EXISTS and contains all referenced files

**The spec (Section 10) lists these correctly as `archive/knowledge-architecture/...` and `archive/combination-research/...` (no `design-system/` prefix).**

**All 10 affected lines and their corrections:**

| Line | Current (WRONG) | Should Be |
|------|-----------------|-----------|
| 188 | `design-system/archive/knowledge-architecture/09-CD-SYNTHESIS-BRIEFING.md` | `archive/knowledge-architecture/09-CD-SYNTHESIS-BRIEFING.md` |
| 236 | `design-system/archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md` | `archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md` |
| 253 | `design-system/archive/knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md` | `archive/knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md` |
| 255 | `design-system/archive/combination-research/research-package-cd-001.md` | `archive/combination-research/research-package-cd-001.md` |
| 256 | `design-system/archive/combination-research/research-package-cd-002.md` | `archive/combination-research/research-package-cd-002.md` |
| 257 | `design-system/archive/combination-research/research-package-cd-003.md` | `archive/combination-research/research-package-cd-003.md` |
| 258 | `design-system/archive/combination-research/research-package-cd-004.md` | `archive/combination-research/research-package-cd-004.md` |
| 259 | `design-system/archive/combination-research/research-package-cd-005.md` | `archive/combination-research/research-package-cd-005.md` |
| 260 | `design-system/archive/combination-research/research-package-cd-006.md` | `archive/combination-research/research-package-cd-006.md` |
| 310 | `design-system/archive/combination-research/research-package-cd-001.md` | `archive/combination-research/research-package-cd-001.md` |
| 311 | `design-system/archive/combination-research/research-package-cd-006.md` | `archive/combination-research/research-package-cd-006.md` |

**Fix:** Find-and-replace `design-system/archive/` with `archive/` throughout the file.

**Affected agents:** Specialist 2 (1 file), Specialist 4 (1 file), Specialist 5 (7 files), Synthesizer (2 files). If unfixed, 3 of 5 specialists and the synthesizer would fail to read critical files.

---

### REVISE 2: Missing `{{REFINE_BUILDER_PROMPT}}` prompt file [MEDIUM SEVERITY]

**Impact:** The skeleton correctly places a `{{REFINE_BUILDER_PROMPT}}` placeholder (line 686), but there is no corresponding prompt file in `prompts/` or `assembly/`. The other 3 missing placeholders (TC, PA Auditor, Weaver) are accounted for by existing skill files and `pa-integration-spec.md`. But the Refine Builder has no existing skill to draw from and no prompt has been written.

**The spec (Section 8)** describes the Refine Builder's behavior but doesn't provide a full prompt — it says the fix builder receives relevant package sections and follows the Weaver's creative direction.

**Suggested fix:** Either:
(a) Write a `prompts/refine-builder-prompt.md` to fill this gap (recommended — the refine builder needs specific instructions about using GENERATIVE language, not debugging language), or
(b) Document in the skeleton that the refine builder prompt is composed inline by the orchestrator from the spec's Section 8 instructions + the Weaver's creative direction. Add a comment: `<!-- NOTE: This prompt is assembled by the orchestrator from Phase 5 instructions above + the Weaver's creative direction. No standalone prompt file needed. -->`

**Risk if unfixed:** The assembler won't know what to substitute for `{{REFINE_BUILDER_PROMPT}}`, leaving the placeholder unreplaced or empty.

---

## Minor Observations (Not Revisions)

1. **Quick Reference table (lines 20-27):** Excellent addition not in the spec. Provides a phase-at-a-glance reference that the orchestrator can use after context compression. The validation gates column is especially useful.

2. **Prerequisites section (lines 33-57):** Solid. Directory creation, content path resolution, pipeline log initialization all specified clearly.

3. **Phase 0 (lines 61-87):** Not in the spec as a formal phase but the skeleton smartly adds it for file pre-loading and soul principle verification. The spec's Section 12 says "File-based handoffs are the source of truth" — Phase 0 ensures the orchestrator has these files loaded.

4. **Builder Pass 2 exclusions (lines 419-422):** The skeleton says builder Pass 2 does NOT receive content.md or the TC brief. The spec Section 6.3 doesn't explicitly list these as excluded. However, the skeleton's rationale is sound: "decisions.md carries what's needed" and "the HTML already contains the content." This is a reasonable interpretation — the spec lists what Pass 2 RECEIVES (not what it excludes), and content.md / TC brief are absent from that list. No issue.

5. **Comparison report (lines 602-625):** The skeleton has the orchestrator generate this, which matches spec Section 9 (Layer C). Good that it's positioned after the Weaver, using the Weaver's Package Compliance section as input.

6. **Key Principles section (lines 783-807):** Matches spec Section 17 exactly, with two additions: Principle 11 (validation gates) and Principle 12 (re-read at every phase boundary). Both are excellent additions that reinforce the skeleton's defensive patterns.

7. **Relative vs absolute paths:** The skeleton consistently uses relative paths from the project root (e.g., `design-system/research/R1-...`). The spec also uses relative paths. The agent spawning instruction at line 49 says agents have Read tool access. The agents will need to resolve these relative to the working directory. This should work fine as long as the orchestrator's CWD is the project root — which it will be since that's where `design-system/` lives. No issue, but worth noting.

---

## Summary

| Check | Result |
|-------|--------|
| 13 placeholder markers match prompt files | PASS (9/13 have files, 4 accounted for by existing skills or noted as gap) |
| Validation gates between every phase | PASS (all 6 gates present with explicit stop instructions) |
| Context recovery at every phase boundary | PASS (8 recovery points) |
| File routing matches spec Section 14 | PASS (all agent routing correct, path prefix bug is syntax not routing) |
| Cost tracking protocol | PASS (every checkpoint includes cumulative estimate) |
| Re-run logic for thin output | PASS (per-specialist floors, max 1 re-run, fallback) |
| Screenshot protocol matches /compose | PASS (full protocol with 3 viewports, font wait, animation disable) |
| Output manifest completeness | PASS (exact match with spec Section 16) |
| `archive/` path prefix bug | **FAIL — HIGH** (10 paths have wrong `design-system/` prefix) |
| Refine builder prompt gap | **FAIL — MEDIUM** (placeholder present, no corresponding prompt file) |

**Final verdict: PASS with 2 REVISE items.** The skeleton is thorough, well-structured, and spec-compliant in substance. The path prefix bug is the one critical fix needed before assembly — a simple find-and-replace that affects 10 lines. The refine builder prompt gap should be addressed but is lower priority.
