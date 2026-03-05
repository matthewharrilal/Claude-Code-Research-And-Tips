# Pipeline Audit: /build-page Diagram vs Actual Implementation

**Audited:** 2026-02-20
**Auditor:** Claude Opus 4.6 (automated gap analysis)
**Files examined:** 7 primary files, cross-references verified

---

## 1. QUICK VERDICT

**Can the user type `/build-page content.md` and get the full pipeline?**

**YES -- with caveats.** The SKILL.md at `~/.claude/skills/build-page/SKILL.md` (408 lines) implements a complete end-to-end pipeline that covers all 10 diagram steps. However, it implements a SIMPLIFIED version of what the full pipeline diagram describes. The simplifications are deliberate design choices (Fat Core architecture, conventions-brief-as-world-description), not accidental omissions. The pipeline WILL run and produce output. Whether it achieves Flagship 4/4 quality depends on execution, not on missing steps.

**Key finding:** The SKILL.md is a self-contained orchestrator that hardcodes gates inline rather than referencing gate-runner.md. It runs 12 composition-critical gates (not 21). It omits micro-gates (during-build gate checkpoints). It replaces the TC pipeline with the conventions brief as the builder's primary input. These are all intentional Fat Core decisions documented in the PV2 evolution.

---

## 2. PER-STEP GAP TABLE

| # | Step | Diagram Says | SKILL.md Does | Status | Gap |
|---|------|-------------|---------------|--------|-----|
| 1 | **INTAKE** | Validate content file, check length, identify type | Parses content path from command arg, reads content, creates output dir | **YES** | No content-length validation or type-identification step. Minor -- content type identification was meant to feed TC pipeline, which is now replaced by conventions brief. |
| 2 | **SPAWN OPUS BUILDER** | TeamCreate, builder reads 6 files in specific order, 80% creative authority, writes output.html + _build-log.md + _cascade-value-table.md | TeamCreate with 1 Opus builder, reads conventions-brief.md FIRST + content file SECOND + 4 reference files. 80% creative authority stated. Writes 3 files (output.html, _build-log.md, _cascade-value-table.md). Builder self-checks at 4 checkpoints. | **YES** | File reading order matches (6 files, primacy/recency stated). Creative authority matches. Output files match. Builder checkpoints (4 self-checks) go beyond diagram. EXCELLENT implementation. |
| 3 | **GATE RUNNER** | 21 programmatic gates via Playwright (Tier A: SC-01,09,10,11,12,13,14,15 + SC-13B,SC-16 + DG-1,DG-2; Tier B: SC-02,03,04,05,06,07,08; Tier C: BG-1,BG-2; Additional: DG-3,DG-4). Output: _gate-results.json with measured values. | 12 gates hardcoded inline (SC-01,02,03,04,05,06,07,08,09,10,11,13). Plus advisory gates SC-13B,SC-16 and deliverable gates DG-1 through DG-4 mentioned. Writes _gate-results.json with measured values. | **PARTIAL** | **Missing gates from inline table:** SC-12 (Zone Count), SC-14 (Sub-Perceptual Prevention), SC-15 (Border Presence). These 3 are Tier A composition-critical BLOCKING gates. SC-12 is a dependency for SC-09 and SC-13. SC-14 prevents the #1 Flagship failure mode (imperceptible micro-typography). SC-15 catches zero-border pages. **Missing entirely:** BG-1 (Metaphor Independence), BG-2 (Metaphor Structural) -- Tier C behavioral gates. DG-4 (Handoff Validation) is mentioned in the deliverable gates section (line 159) but not in the 12-gate table. **Gates are HARDCODED** -- SKILL.md does not reference gate-runner.md at all. |
| 4 | **SCREENSHOT CAPTURE** | 3 viewports (1440, 1024, 768), full page + scroll-through at 80% viewport-height steps | 3 viewports (1440, 1024, 768). Full-page screenshot + scroll-through at 80% steps. Saves to _screenshots/. | **YES** | Exact match. Protocol correctly captures cold-look + scroll-through at each viewport. Orchestrator does all Playwright work (zero contention). |
| 5 | **LOCK SHEET** | Categorize elements as LOCKED (Soul), LOCKED (Research), CHALLENGEABLE | Generates lock sheet from _build-log.md and _gate-results.json. Three categories: LOCKED (Soul), LOCKED (Research), CHALLENGEABLE (Builder). Routes to weaver ONLY, NOT to PA auditors. | **YES** | Exact match. Information isolation correctly enforced -- auditors get zero build context. |
| 6 | **MODE 4 PA** | 9 Opus auditors (56 questions = 48 standard + 8 Tier 5), each gets specific questions, writes independent report | 9 Opus auditors, 56 questions (48 + 8 Tier 5), specific question assignments per auditor matching diagram exactly. Fresh-eyes principle enforced. Perceptual language rule stated. Each writes to _pa/pa-auditor-[LETTER].md. | **YES** | Question assignments match the diagram exactly (Auditors A-I with correct PA numbers and Tier 5 bold assignments). Full question text must be pasted (not just PA numbers). References perceptual-auditing skill AND flagship-pa-questions.md for Tier 5 text. |
| 7 | **WEAVER** | Reads all 9 reports + lock sheet, produces dual verdict (PA-05 + Tier 5), TOP-5 issues, _pa-matrix.md with agreement analysis | Weaver reads 9 reports + lock sheet. Produces: (1) PA-05 score with 4 sub-criteria, (2) Tier 5 score with threshold labels, (3) TOP-5 issues with auditor source/question/severity/quote/scroll position/CSS feedback, (4) Full per-question matrix at _pa/_pa-matrix.md with inter-auditor agreement analysis, (5) Compositional criteria checklist, (6) Verdict using full matrix. Writes _pa/_pa-report.md + _pa/_pa-matrix.md. | **YES** | Exceeds diagram. Adds compositional criteria section (zero soul violations, zero voids, metaphor structural, rhythm not metronomic, multi-coherence perceptible, scale coverage) and calibration targets for auditor disagreements. |
| 8 | **FIX CYCLE** | Same builder, up to 3 rounds, re-run gates + screenshots + 9 PA auditors (initial) / 2 PA auditors (cycles 2-3) | Same builder (CRITICAL: compositional memory preservation). Up to 3 cycles. Re-runs gates, screenshots, PA. Cycle 1: 9 auditors (all 56 Qs). Cycles 2-3: 2 auditors (A + C, focused + Tier 5). Fix instructions structured at _fixes/fix-instructions-cycle-N.md with gate failures (CSS fix), PA top-5 (directional), Tier 5 gaps, and DO NOT TOUCH list. After Cycle 3: ESCALATE. | **YES** | Matches diagram. Adds structured fix instruction format with protected elements list. Correctly reduces PA scope in later cycles. |
| 9 | **SHIP** | Success bar: PA-05 >= 3.5, Tier 5 >= 6/8, all blocking gates pass, zero soul violations, zero voids | PA-05 >= 3.5, Tier 5 >= 6/8. Zero soul violations (SC-01 through SC-05). Zero void patterns (PA-50 through PA-53, SC-10). Metaphor STRUCTURAL. Multi-coherence verified (SC-13 + PA-61). Scale coverage verified (DG-1 + PA-63). Full verdict matrix: SHIP / SHIP WITH RESERVATION / NOT FLAGSHIP / FIX CYCLE / REBUILD. | **YES** | Exceeds diagram. Adds cross-validation between programmatic gates and PA agreement (SC-13+PA-61, DG-1+PA-63). Full verdict matrix with 5 outcomes. |
| 10 | **OUTPUT** | _run-manifest.md with full summary | Writes _run-manifest.md with: timestamp, content path, builder model, gate pass/fail with IDs, PA-05 with sub-criteria, Tier 5 with label, fix cycles used, total agents, verdict, file list. Reports summary to user in chat. | **YES** | Matches diagram. Also explicitly reports to user in chat. |

---

## 3. FILE-LEVEL STATUS

| File | Expected State | Actual State | Match? |
|------|---------------|-------------|--------|
| `~/.claude/skills/build-page/SKILL.md` | Orchestrator, ~350-550 lines, implements full pipeline | 408 lines, implements full pipeline with 10 sections (0-9) + practical details. Self-contained orchestrator. | **YES** |
| `design-system/pipeline/conventions-brief.md` | Builder world-description, ~230-400 lines, 10+ sections, hybrid prose+YAML, 80% creative authority | 403 lines, 14 sections (Identity through Process), pure prose (no YAML), 80% creative authority (Section 9), world-description framing. | **YES** (minor: prose-only, no YAML sub-structure, but this is a deliberate style choice) |
| `design-system/pipeline/gate-runner.md` | 21 gate definitions with JS code, thresholds, fix recipes, structured JSON output format | 992 lines, 21 gates fully defined (15 Tier 1 + 4 Tier 2 + 2 Tier 3), with JS code, thresholds, fix recipes, structured JSON schema, Flagship threshold elevations, micro-gate schedule, execution groups, dependency chain, parseRGB helper. | **YES** -- comprehensive and exceeds expectations |
| `design-system/pipeline/flagship-pa-questions.md` | 8 Tier 5 questions (PA-60 through PA-67) with scoring and assignments | 144 lines, 8 questions with full text, scoring rubrics (YES/NO criteria), auditor assignments, aggregate scoring table (COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY), assignment summary table. | **YES** |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 56 questions total (48 standard + 8 Tier 5), Tier 5 section present, tier routing removed | 987 lines, 56 questions present (48 standard + 8 Tier 5). Tier 5 section at lines 363-416 with full questions PA-60 through PA-67, scoring bands, combined verdict matrix, restraint evaluation guidance. 4 Modes defined (1-4). Mode 4 has 9 auditors + weaver with correct question assignments. | **YES** |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | Has 56 questions? | YES -- 28 Core (Tier 1: PA-01-05, Tier 2: PA-06-48 standard, Tier 3: PA-21-48 deep, Tier 4: PA-50-53 void, Tier 5: PA-60-67 compositional depth) = total 56 unique questions in the Mode 4 set | **YES** |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | Tier routing removed? | Line references show Mode 4 as "Standalone (60 minutes)" -- no tier routing present. All pages get the same 56-question treatment. | **YES** |
| `design-system/CLAUDE.md` | Routes to /build-page for all page building | Line 9: "ALWAYS FLAGSHIP -- every page built at maximum compositional intensity. Tier routing REMOVED. /build-page is the single entry point for all page building." Lines 22-23: "/build-page <content-file-path> (the ONLY way to build pages)". Lines 323-339: Full /build-page skill section with trigger, invocation, sub-skills. Line 461: "Build a page -> /build-page <content-path> (ALWAYS use this)". | **YES** -- extensive routing, mentioned 5+ times |
| `design-system/compositional-core/CLAUDE.md` | ALWAYS FLAGSHIP stated, tier routing removed | Line 8: "ALWAYS FLAGSHIP -- every page at maximum compositional intensity. Tier routing REMOVED." Lines 54-63: "BUILD PROTOCOL: ALWAYS FLAGSHIP" section. Line 56: "Every page is built at Flagship tier. No tier routing. No Track 1/Track 2 classification." Line 58: "The Addition Test is RETIRED." | **YES** -- unambiguous |
| `~/.claude/skills/tension-composition/SKILL.md` | Tier 5 questions added? | **NO** -- Grep found zero matches for "Tier 5", "PA-60", or any PA-6x question in the tension-composition skill. | **NO** (but this is expected -- TC skill handles metaphor derivation, not PA. Tier 5 is in the PA skill.) |
| `~/.claude/skills/tension-composition/SKILL.md` | Tier routing removed? | YES -- Line 70: "Every page runs the FULL pipeline (Phases 1-5). No tier routing, no phase skipping." Line 72: Addition Test described as "content-form fit detection, not tier routing." | **YES** |

---

## 4. CRITICAL GAPS (Would fail or produce worse results)

### CRITICAL-1: Three Tier A Blocking Gates Missing from SKILL.md Inline Table

**Severity:** HIGH
**Impact:** Pages with these defects would pass gate runner and proceed to PA audit, wasting 9 Opus auditor runs on a mechanically defective page.

The SKILL.md Section 3.2 hardcodes a 12-gate table. Three Tier A composition-critical blocking gates are missing:

| Missing Gate | What It Catches | Why It Matters |
|-------------|----------------|----------------|
| **SC-12** (Zone Count) | < 3 zones or > 5 zones | DEPENDENCY for SC-09 and SC-13. Without zone count validation, background delta and multi-coherence checks may run on an incorrect zone set. |
| **SC-14** (Sub-Perceptual Prevention) | letter-spacing 0-0.025em, bg delta 1-14 RGB, micro-clustering | This gate was DESIGNED for the Flagship failure mode. The original Flagship spent 22% of CSS budget (227 lines) on invisible micro-typography. SC-14 is the ONLY gate that catches this. |
| **SC-15** (Border/Structural Presence) | < 3 distinct border configurations | The original Flagship had ZERO borders. SC-15 catches structural absence. CD-006 had 23 border contexts. |

However, the SKILL.md does mention "plus advisory gates SC-13B, SC-16 and deliverable gates DG-1 through DG-4" at line 138, and DG-4's sub-checks are described at lines 157-164 (which includes zone_count 3-5, bg_deltas >= 15, mechanisms >= 1 in 5 categories, transitions >= 3, grid_layouts >= 2). This partially covers SC-12's concern via DG-4 sub-check 1. But SC-14 and SC-15 have no coverage at all.

**Recommendation:** Add SC-12, SC-14, SC-15 to the inline gate table in Section 3.2. These are 3 lines each in the table. Alternatively, add a line to SKILL.md saying "For the complete 21-gate specification including JS code, thresholds, fix recipes, and execution groups, see `design-system/pipeline/gate-runner.md`." and run ALL 21 gates.

### CRITICAL-2: Gates Are Hardcoded -- No Reference to gate-runner.md

**Severity:** MEDIUM-HIGH
**Impact:** gate-runner.md has 992 lines of detailed JS code, fix recipes, execution groups, dependency chains, and micro-gate schedules. SKILL.md hardcodes a simplified 12-gate table with threshold descriptions but no JS code. An orchestrator following SKILL.md literally would need to write gate-checking JS from scratch rather than copying the proven code from gate-runner.md.

The gate-runner.md contains:
- Exact Playwright JS code for each gate (copy-pasteable)
- Structured fix recipe format with CSS suggestions
- Execution group ordering (parallel vs sequential)
- Dependency chain (SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16)
- Micro-gate schedule (MG-1 through MG-4, during-build checkpoints)
- parseRGB helper function

SKILL.md contains NONE of this. The orchestrator agent would need to interpret the 12-line table and write its own JS.

**Recommendation:** Add to Section 3.2: "For complete gate specifications including JavaScript code, fix recipes, and execution groups, reference `design-system/pipeline/gate-runner.md`." This is a one-line fix.

### CRITICAL-3: Micro-Gates During Build Are Absent

**Severity:** MEDIUM
**Impact:** gate-runner.md defines 4 micro-gate checkpoints (MG-1 through MG-4) that run gate subsets BETWEEN build phases (~2 minutes total). These catch structural problems when fix cost is lowest (e.g., MG-2 catches imperceptible backgrounds BEFORE more CSS is written). SKILL.md has no micro-gate concept.

However, SKILL.md's builder spawn prompt does include 4 self-check checkpoints (lines 61-66) that partially overlap:
- After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes? (overlaps MG-1: SC-06, SC-07, SC-08)
- After zone backgrounds: All adjacent zone bg deltas >= 15 RGB? (overlaps MG-2: SC-09)
- After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights? (overlaps MG-3 partially)
- After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px? (overlaps MG-4: SC-11)

These are BUILDER SELF-CHECKS (honor system), not PROGRAMMATIC GATE CHECKS (verified by orchestrator via Playwright). The builder could claim "yes, >= 15 RGB" without actually measuring. The gate-runner micro-gates run actual JS via Playwright.

**Recommendation:** For V1, the builder self-checks are a reasonable simplification. For V2, add orchestrator-run micro-gates between build phases (requires the builder to write HTML in stages and signal the orchestrator between phases, which adds significant protocol complexity).

### CRITICAL-4: No TC Pipeline Invocation

**Severity:** MEDIUM (by design, not an omission)
**Impact:** The diagram in PV2-FLAGSHIP-VARIANT.md describes a Wave 0 (TC pipeline -> build plan -> operational recipe) that runs BEFORE the builder. SKILL.md REPLACES this with the conventions brief. The builder reads conventions-brief.md as "YOUR PRIMARY GUIDANCE" and self-generates: conviction statement, transition table, fractal echo table, and metaphor.

This is the Fat Core architecture decision: one agent plans + builds instead of TC planner -> builder handoff. The conventions brief IS the compressed TC pipeline (world-description format instead of phase-by-phase instructions).

This is NOT a gap -- it is a deliberate architectural choice documented extensively in PV2 v1-v3 changelogs. The conventions brief at 403 lines contains all the compositional intelligence that the TC pipeline would have provided: identity, perception physics, richness model, multi-coherence rules, fractal echo requirements, transition grammar, CSS vocabulary, creative authority, quality floor, compositional memory, and self-check questions.

**Recommendation:** No action needed. Document this as an intentional design choice. If the first run produces PA-05 < 3.0, THEN consider adding TC pipeline as Wave 0.

---

## 5. NON-CRITICAL GAPS (Differ from diagram but work fine)

### NC-1: SKILL.md References flagship-pa-questions.md But Only Indirectly

Line 241: "PA question full text is in `~/.claude/skills/perceptual-auditing/SKILL.md` AND `design-system/pipeline/flagship-pa-questions.md` (for Tier 5 only)."

This is correct -- Tier 5 questions exist in BOTH files. The PA skill has the full 56 questions. flagship-pa-questions.md has only the 8 Tier 5 questions as a standalone reference. The orchestrator can source questions from either file.

**Status:** Working as intended.

### NC-2: Conventions Brief Is Prose-Only (No YAML)

PV2 v2 specified "structured TC output (`_build-plan.yaml`)" and "YAML gate definition schema." The actual conventions-brief.md is pure prose (403 lines, 14 sections). The SKILL.md builder prompt asks for: conviction statement, transition table, fractal echo table in _build-log.md (markdown, not YAML). DG-4 in SKILL.md references "5 sub-checks" on the build log, not YAML.

The gate-runner.md still references `_build-plan.yaml` and `fractal_table.yaml` in DG-1, DG-2, and DG-4 definitions. This is a minor inconsistency -- the SKILL.md asks for markdown deliverables, but gate-runner.md expects YAML.

**Impact:** The orchestrator following SKILL.md will check _build-log.md for these tables (markdown format). The gate-runner.md JS would need to parse markdown, not YAML. This is a documentation mismatch, not a functional failure -- the orchestrator writes its own gate-checking code anyway.

**Recommendation:** Align gate-runner.md DG-1/DG-2/DG-4 to reference markdown format, or update SKILL.md to request YAML. Low priority.

### NC-3: BG-1 and BG-2 (Behavioral Gates) Not Implemented

Tier C behavioral gates (BG-1: Metaphor Independence, BG-2: Metaphor Structural) are in gate-runner.md but not in SKILL.md. These are non-blocking, agent-attestation gates. BG-1 checks build log ordering (metaphor before library). BG-2 requires a fresh-eyes Opus agent to rate metaphor as STRUCTURAL vs ANNOUNCED.

**Impact:** Low. The conventions brief instructs the builder to derive metaphor from content (Section 6) and the PA auditors evaluate metaphor structurality via PA-42/43/44. BG-2's check is partially covered by the PA. BG-1's check could be done by the orchestrator reading the build log (no additional agent needed).

**Recommendation:** Add a note in Section 3.4 to check build log ordering (metaphor derivation before library consultation). Low priority.

### NC-4: File Structure Uses Slightly Different Naming

SKILL.md specifies `_pa/pa-auditor-[LETTER].md` for auditor reports. The PA skill file structure section specifies `findings-impression-emotion.md` style naming. Both work -- the SKILL.md naming is cleaner for automated processing.

**Status:** Cosmetic. No action needed.

### NC-5: Perceptual Auditing SKILL.md Mode 4 Team Has Different Structure

The PA skill's Mode 4 team spec (lines 532-550) includes a "Research Contextualizer (Wave 1 -- Lock Sheet)" as a separate agent. SKILL.md generates the lock sheet in the orchestrator itself (Section 4.5) rather than spawning a contextualizer agent.

**Impact:** None. The lock sheet generation is simpler when done by the orchestrator (who already has gate results and build log). The PA skill's Mode 4 structure is designed for standalone PA invocations, not for /build-page where the orchestrator already has context.

**Recommendation:** No action needed. The SKILL.md approach is more efficient.

### NC-6: DG-3 (Landmark Completeness) Is In Additional Gates Section of gate-runner.md But Not Explicitly in SKILL.md Gate Table

gate-runner.md defines DG-3 as a Tier B blocking gate (header + main + footer present). SKILL.md's SC-06 checks for >= 5 ARIA landmarks, which implicitly includes header/main/footer. The overlap is near-complete.

**Status:** Functionally covered by SC-06. DG-3 is a subset check.

---

## 6. SUMMARY SCORECARD

| Category | Score | Notes |
|----------|-------|-------|
| Pipeline completeness | **9/10 steps fully implemented** | Step 3 (Gate Runner) is PARTIAL -- 12 of 21 gates inline |
| File alignment | **6/7 files match** | TC skill correctly lacks Tier 5 (not its job) |
| Routing correctness | **PERFECT** | CLAUDE.md + compositional-core CLAUDE.md both route to /build-page, say ALWAYS FLAGSHIP, tier routing REMOVED |
| Gate coverage | **12/21 inline** (57%) | Missing SC-12, SC-14, SC-15 (critical), BG-1, BG-2 (non-blocking), no reference to gate-runner.md |
| PA coverage | **56/56 questions** | All questions present with correct auditor assignments |
| Fix cycle protocol | **COMPLETE** | Same builder, 3 cycles, reduced PA in later cycles, structured fix instructions |
| Success bar | **COMPLETE** | PA-05 >= 3.5, Tier 5 >= 6/8, all mandatory criteria, full verdict matrix |

---

## 7. RECOMMENDED ACTIONS (Ranked by Impact)

1. **Add one line to SKILL.md Section 3.2** referencing gate-runner.md for complete gate specifications. This gives the orchestrator access to all 21 gates with JS code, fix recipes, and execution groups. (~1 minute, HIGH impact)

2. **Add SC-12, SC-14, SC-15 to the inline gate table** in Section 3.2. These are 3 rows. SC-14 alone prevents the #1 Flagship failure mode. (~5 minutes, HIGH impact)

3. **Optionally** add a note about micro-gates during build as a future enhancement. Current builder self-checks provide ~60% of micro-gate value. (~2 minutes, LOW-MEDIUM impact)

4. **Optionally** align gate-runner.md DG deliverable gates to expect markdown instead of YAML. (~10 minutes, LOW impact)

---

*End of audit. The pipeline is functional and well-structured. The 3 missing blocking gates (SC-12, SC-14, SC-15) are the only finding that could materially affect output quality.*
