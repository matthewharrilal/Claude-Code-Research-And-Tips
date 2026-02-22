# PA Skill Trim Audit

**Auditor:** pa-trim-auditor (Opus)
**Date:** 2026-02-20
**PA Skill:** `~/.claude/skills/perceptual-auditing/SKILL.md` (1,208 lines)
**Orchestrator:** `~/.claude/skills/build-page/SKILL.md` (479 lines)
**Tier 5 Reference:** `design-system/pipeline/flagship-pa-questions.md` (158 lines)

---

## EXECUTIVE SUMMARY

The PA skill at 1,208 lines contains significant content that is now:
- **Duplicated** in /build-page SKILL.md (auditor assignments, weaver protocol, screenshot protocol, question assignments)
- **Orphaned** by /build-page always using Mode 4 (Modes 1-3 are never invoked by the orchestrator)
- **Stale** in question count claims (the skill claims both "59 PA questions" on line 7 AND "63 questions (54 standard + 9 Tier 5)" on line 636 -- internally inconsistent)
- **Over-specified** in areas that contaminate auditor fresh-eyes (metaphor awareness principles, multi-coherence evaluation guidance)

**Estimated net reduction: 350-420 lines (29-35% of current 1,208).**

The PA skill should be trimmed to serve exactly TWO audiences:
1. **Auditors** -- question text, scoring rubrics, perceptual language guidance, Cold Look protocol, Zone Sweep
2. **Weaver** -- verdict matrix, calibration tables, severity scales

Everything about HOW to deploy auditors (team structure, task graphs, screenshot capture, lock sheets, Playwright config) belongs in /build-page.

---

## 1. TRIM CANDIDATES

### T-01: Mode 1 (Embedded) Definition -- Lines 598-603 (6 lines)
**Reason:** ORPHANED. /build-page ALWAYS uses Mode 4. Mode 1 is never invoked by the orchestrator. If standalone PA use is needed, Mode 4 is the only mode /build-page knows about.
**Counterargument:** Mode 1 is mentioned in void guardrails (line 372: "Builders running Mode 1...") suggesting it may still be used by builders for self-check. But this is a builder concern, not a PA auditor concern.
**Verdict:** TRIM. If Mode 1 builder self-check is needed, it belongs in the conventions-brief or /build-page builder prompt, not the PA skill.

### T-02: Mode 2 (Quick) Definition -- Lines 605-609 (5 lines)
**Reason:** ORPHANED. Never invoked by /build-page. No current use case.
**Verdict:** TRIM.

### T-03: Mode 3 (Standard) Definition -- Lines 611-631 (21 lines)
**Reason:** ORPHANED. /build-page only uses Mode 4. Mode 3 team structure (4 agents, Alpha/Beta auditors) is entirely different from /build-page's 9-auditor deployment.
**Verdict:** TRIM.

### T-04: Mode 4 Team Structure and Task Graph -- Lines 633-669 (37 lines)
**Reason:** DUPLICATED. /build-page Section 6.1-6.2 (lines 249-298) defines the IDENTICAL 9-auditor team with the same question assignments. The task graph (#1-#11) is also duplicated in /build-page's wave structure.
**Duplication detail:**
- PA skill Mode 4 auditor assignments (lines 642-650) = /build-page auditor assignments (lines 286-294). IDENTICAL content.
- PA skill task graph (lines 657-668) = /build-page's wave structure (Steps 5-6).
**Conflict risk:** If question assignments change in one file but not the other, auditors may receive conflicting instructions. /build-page is the authoritative source since it pastes questions into auditor prompts.
**Verdict:** TRIM the team structure and task graph. Keep a 2-line note: "Mode 4 is the standard deployment. See /build-page SKILL.md for team structure, question assignments, and task graph."

### T-05: Tier 5 Auditor Assignment Summary Table -- Lines 493-503 (11 lines)
**Reason:** DUPLICATED. /build-page Section 6.2 (lines 284-294) has the same assignments with slightly different formatting. The PA skill table covers only Tier 5 assignments; /build-page covers ALL assignments including Tier 5.
**Conflict:** PA skill table (line 496) shows Auditor A gets "PA-01,04,05,18,19,20,45" (7 standard) but /build-page (line 286) shows "PA-01, 03, 04, 05, 18, 19, 20, 45" (8 standard -- includes PA-03). This is a REAL DISCREPANCY. PA-03 ("Does this feel like one designer made it, or three?") is assigned to Auditor A in /build-page but NOT in the PA skill's Tier 5 summary table.
**Verdict:** TRIM the Tier 5 assignment summary table. /build-page is authoritative.

### T-06: Embedded Mode Integration Note -- Line 372 (1 line)
**Reason:** ORPHANED. References "Builders running Mode 1 (Embedded, 90 seconds)" which is no longer relevant since /build-page manages the build process.
**Verdict:** TRIM.

### T-07: "4 MODES" Section Header -- Line 596 (1 line)
**Reason:** STALE. If Modes 1-3 are trimmed, rename to "DEPLOYMENT" or remove entirely and let /build-page own deployment.
**Verdict:** MODIFY -- rename to "DEPLOYMENT MODE" with a single line pointing to /build-page.

### T-08: Playwright Configuration -- Lines 970-988 (19 lines)
**Reason:** DUPLICATED + ORPHANED. /build-page Section 4.2 (lines 148-156) has the same animation disabler and font.ready wait. /build-page Section 5 handles all screenshot capture. PA auditors NEVER touch Playwright (they read saved screenshots). This section only serves standalone PA mode, which no longer exists as a primary use case.
**Verdict:** TRIM. /build-page owns Playwright configuration.

### T-09: Scroll-Through Protocol Implementation Code -- Lines 941-968 (28 lines)
**Reason:** DUPLICATED. /build-page Section 5 (lines 216-233) defines the identical scroll-through protocol (80% viewport-height steps, sequential captures). PA auditors don't execute this -- the orchestrator does.
**Note:** The PA skill's scroll-through protocol (lines 941-968) includes JavaScript code for browser_run_code. This is NEVER executed by PA auditors -- they read saved screenshots.
**Verdict:** TRIM the JavaScript implementation. Keep the conceptual description of what scroll-through screenshots look like (the auditor needs to understand the screenshot sequence they're reading).

### T-10: Screenshot-Reading Protocol (Pipeline Auditors) -- Lines 671-688 (18 lines)
**Reason:** DUPLICATED. /build-page Section 6.1 (lines 256-279) has the same protocol embedded in the auditor spawn prompt: auditors receive file paths, read via Read tool, screenshots at 3 viewports, cold look + scroll-through.
**Verdict:** TRIM most of it. Keep 3-4 lines describing the screenshot-reading workflow since auditors are told to "read the PA skill" and need to know how screenshots work. But remove the detailed protocol that's already in their spawn prompt.

### T-11: Weaver Dual-Verdict Protocol -- Lines 690-768 (79 lines)
**Reason:** DUPLICATED. /build-page Section 6.3 (lines 300-356) defines the IDENTICAL weaver protocol: PA-05 score with sub-criteria, Tier 5 score, Top-5 issues, per-question matrix, compositional criteria, verdict matrix. The /build-page version is slightly more detailed (specifies file paths, output directory, adds lock-sheet reading).
**Conflict check:** The verdict matrices are IDENTICAL. Both have the same PA-05 >= 3.5 + Tier 5 >= 7/9 = SHIP threshold.
**Verdict:** TRIM. The weaver is spawned by /build-page with the full protocol in its prompt. Having the same protocol in the PA skill creates a dual-authority problem.

### T-12: Lock Sheet Format -- Lines 1035-1049 (15 lines)
**Reason:** DUPLICATED. /build-page Section 5.5 (lines 235-246) defines lock sheet generation. The PA skill's lock sheet format is for the standalone contextualizer agent, which is now replaced by /build-page's lock-sheet generation step.
**Verdict:** TRIM. /build-page owns lock sheet generation.

### T-13: Temporal Firewall -- Lines 1051-1053 (3 lines)
**Reason:** DUPLICATED. /build-page Section 5.5 (line 245) says "Do NOT give it to PA auditors -- they must remain fresh-eyes with zero build context." Same principle.
**Verdict:** TRIM the standalone version. The principle is already in /build-page.

### T-14: TEAM ROLES (CAN/CANNOT) -- Lines 1064-1093 (30 lines)
**Reason:** ORPHANED. This defines Lead, Research Contextualizer, Visual Auditors, Adversarial, Synthesizer/Weaver, and Fixer roles for standalone PA. /build-page's Step 6 defines the same roles but embedded in the pipeline context.
**Counterargument:** The Language HARD BLOCK (lines 1078-1080) for auditors is NOT duplicated in /build-page. This is ESSENTIAL for fresh-eyes quality.
**Verdict:** PARTIAL TRIM. Remove role hierarchy (Lead, Contextualizer, Fixer CAN/CANNOT lists). KEEP the Language HARD BLOCK for auditors and the auditor CAN/CANNOT list since /build-page's auditor prompt says "Read the PA skill for evaluation approach" -- auditors WILL read this section.

### T-15: INFORMATION ISOLATION Table -- Lines 1116-1124 (9 lines)
**Reason:** ORPHANED. This isolation matrix is for standalone PA team management. /build-page enforces isolation architecturally (auditors never see build context, weaver gets lock sheet).
**Verdict:** TRIM. The principle survives in /build-page's spawn prompt design.

### T-16: GATE VERIFICATION -- Lines 1127-1135 (9 lines)
**Reason:** ORPHANED. Gate 1/2/3 (Contextualizer done, Auditors done, Synthesizer done) are for standalone PA team leads. /build-page manages its own gates (Section 4 for programmatic, Section 6 for PA).
**Verdict:** TRIM.

### T-17: ERROR HANDLING -- Lines 1137-1146 (10 lines)
**Reason:** ORPHANED. Error recovery for standalone PA (Lock Sheet timeout, Playwright contention, etc.). /build-page handles its own error recovery and has Playwright scheduling guidance (Section 10).
**Verdict:** TRIM.

### T-18: VALIDATION (Bento Grid Litmus Test) -- Lines 1149-1171 (23 lines)
**Reason:** ORPHANED. This is a meta-validation that the PA SKILL ITSELF works correctly. It's a test specification for the skill designer, not for PA auditors or the weaver. No agent running within /build-page ever reads this to do their job.
**Verdict:** TRIM.

### T-19: TEAM NAMING Convention -- Lines 1175-1181 (7 lines)
**Reason:** ORPHANED. /build-page uses its own output directory structure (`[output-dir]/_pa/`), not `pa-{target-id}-{mode}-{date}`.
**Verdict:** TRIM.

### T-20: FILE STRUCTURE (Runtime Output) -- Lines 1185-1199 (15 lines)
**Reason:** DUPLICATED. /build-page Section 10 (lines 468-470) defines the identical file structure. The PA skill version uses standalone naming conventions (`{target-dir}/_perceptual-audit/`) while /build-page uses `[output-dir]/_pa/`.
**Verdict:** TRIM.

### T-21: DEFINITIVE SPECIFICATION Reference -- Lines 1203-1208 (6 lines)
**Reason:** STALE. Points to `docs-spa/app/showcase/explorations/axis/_perceptual-research/11-final-specification.md` which is from the pre-extraction era. This 1,450-line spec has been superseded by the PA skill itself.
**Verdict:** TRIM.

### T-22: DUAL SEVERITY TRACK -- Lines 1096-1113 (18 lines)
**Reason:** ORPHANED. Defines WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER as the "Perception Track" alongside a "Rule Track." /build-page's weaver prompt uses the same severity terms (WOULD-NOT-SHIP, LOOKS-WRONG, COULD-BE-BETTER at line 714) but doesn't reference a "Dual Track" system.
**Verdict:** PARTIAL TRIM. The severity terms are useful for auditors (they use them in their reports). Remove the "Dual Track" framing and "Critical Rules" (lines 1108-1113) which are about standalone PA workflow. Keep a simple severity scale definition.

### T-23: Stale Header Claim "59 PA questions" -- Line 7
**Reason:** STALE. The skill actually defines 63 questions (54 standard + 9 Tier 5). The "59" claim at line 7 is wrong and was never updated after PA-69, PA-70, PA-50-53, and PA-60-68 were added.
**Verdict:** MODIFY. Update to correct count.

---

## 2. KEEP CANDIDATES

### K-01: Critical Warning -- Audit Optimization Trap -- Lines 5-43 (39 lines)
**Why keep:** This is the most important framing in the skill. It tells auditors (and builders who accidentally read it) that PA questions are FLOORS not TARGETS. /build-page says "Read the PA skill for evaluation approach" -- auditors WILL read this. Essential for fresh-eyes.
**Fresh-eyes risk:** ZERO. This section PROTECTS impartiality.

### K-02: The One Rule + Sovereignty Principle + Three Laws -- Lines 52-73 (22 lines)
**Why keep:** Core epistemological framework for auditors. "React to what you see before you check what you know." Auditors need this to calibrate their approach.

### K-03: All 63 Question Definitions with Full Text -- Lines 78-469 (392 lines)
**Why keep:** THIS IS THE CORE OF THE SKILL. /build-page says "Each auditor MUST have the full question text pasted into their prompt" (line 298). The orchestrator reads question text FROM this skill and pastes it into auditor prompts. If questions are removed, the orchestrator cannot function.
**Note:** The question text includes scoring rubrics, severity calibration (PA-09), Tier 1 equivalence (PA-17/PA-41), and expanded sub-criteria (PA-05c). ALL of this is needed.

### K-04: Quantitative Guardrails -- Lines 520-593 (74 lines)
**Why keep:** Hard floors for CPL, line-height, spacing, compression limits, hierarchy. Auditors reference these when calibrating severity (especially the "Application Priority" section on line 574). Also useful for standalone PA.
**Fresh-eyes risk:** LOW. These are THRESHOLDS (numbers), not compositional guidance. An auditor seeing "CPL max 80" doesn't contaminate their impression of the page -- it helps them calibrate severity of a readability finding.

### K-05: Cold Look Protocol -- Lines 926-939 (14 lines)
**Why keep:** Essential auditor protocol. "CLEAR → LOOK 5 seconds → REACT → LOCK." This is the core perceptual methodology.

### K-06: Zone Sweep (5 Dimension Passes) -- Lines 990-996 (7 lines)
**Why keep:** Essential auditor protocol for scroll-through evaluation.

### K-07: Progressive Zoom Test -- Lines 998-1028 (31 lines)
**Why keep:** Essential for PA-63 (fractal zoom) evaluation. The 5-scale protocol and scoring are needed by auditors.

### K-08: Metaphor-Awareness Principles -- Lines 224-285 AND Lines 773-888 (162 lines total)
**Why keep:** This is the hardest judgment call. The metaphor principles help auditors distinguish "serving the metaphor" from "breaking the experience."
**Fresh-eyes risk:** MODERATE. Lines 224-285 define metaphor expression levels (STRUCTURAL vs ANNOUNCED) which guide PA-42/43/44 evaluation. This is EVALUATION FRAMEWORK, not build context. Lines 773-888 repeat and expand the same content.
**Verdict:** KEEP lines 224-285 (first instance, compact). TRIM lines 773-888 (second instance, expanded) as it DUPLICATES the first instance and adds over-specified guidance that risks contaminating auditors.

### K-09: Multi-Coherence Evaluation -- Lines 890-921 (32 lines)
**Why keep:** Guides auditors in understanding what multi-coherence LOOKS LIKE perceptually. Essential for PA-69 evaluation. Calibration table (0-1 = FLAT, 2 = FUNCTIONAL, etc.) is purely perceptual.
**Fresh-eyes risk:** LOW. Describes WHAT to perceive, not HOW the page was built.

### K-10: Content-Form Coupling Detection -- Lines 843-845 (3 lines)
**Why keep:** Guides PA-70 evaluation. Purely perceptual.

### K-11: Detecting Principled vs Ad-Hoc Composition -- Lines 822-842 (21 lines)
**Why keep:** Guides PA-03, PA-05a, PA-65 evaluation. Describes visual signatures to look for, not build process. This is evaluation methodology.

---

## 3. MODIFY CANDIDATES

### M-01: Line 7 -- "59 PA questions"
**Current:** "This skill defines success criteria (59 PA questions + quantitative guardrails)."
**Should be:** "This skill defines success criteria (63 PA questions + quantitative guardrails)."
**Actual count:** 54 standard + 9 Tier 5 = 63. The "59" appears to be from an older version before PA-69, PA-70, PA-50-53, and Tier 5 were added.

### M-02: Lines 596-670 -- Mode Section
**Current:** Defines 4 modes (Embedded, Quick, Standard, Standalone) with full team structures.
**Should be:** Single paragraph: "This skill is invoked by /build-page as Mode 4 (9 auditors + weaver, all 63 questions). For standalone PA use cases, invoke /build-page. For quick builder self-checks, use PA-01 through PA-05 directly."
**Estimated reduction:** 74 lines -> 5 lines = -69 lines

### M-03: Lines 773-888 -- Expanded Metaphor Section (second instance)
**Current:** 116 lines expanding on metaphor traps, detection principles, content-form coupling, principled vs ad-hoc composition.
**Should be:** Trimmed to ~30 lines keeping: Common Metaphor Traps (compression/width/density floors), Fresh-Eyes Detection (lines 807-820), and Detecting Principled vs Ad-Hoc Composition (lines 822-842). Remove: the duplicate "Core Principle" (line 787), duplicate "Metaphor Expression Spectrum" table (lines 796-804, already at lines 760-768 in weaver calibration), and "Audit Questions for Metaphor-Driven Layouts" (lines 879-888, which are just PA-42/43/44 rephrased).
**Estimated reduction:** 116 lines -> 40 lines = -76 lines

### M-04: Lines 690-768 -- Weaver Protocol
**Current:** Full 79-line weaver protocol with 6 sections, verdict matrix, calibration tables.
**Should be:** If trimmed (see T-11), replace with: "The weaver receives its full protocol from the /build-page orchestrator. Calibration references below are for weaver CLASSIFICATION work only -- auditors NEVER see these."
Then KEEP only the calibration tables (lines 741-768, 28 lines) since /build-page references the PA skill for these.
**Estimated reduction:** 79 lines -> 32 lines = -47 lines

### M-05: Lines 1064-1093 -- Team Roles
**Current:** Full CAN/CANNOT for 6 roles.
**Should be:** Keep ONLY the auditor Language HARD BLOCK (lines 1076-1081, 6 lines) and the auditor CAN/CANNOT (lines 1074-1076, 3 lines). Remove Lead, Contextualizer, Fixer, Adversarial, Synthesizer/Weaver roles.
**Estimated reduction:** 30 lines -> 10 lines = -20 lines

### M-06: Lines 1096-1113 -- Dual Severity Track
**Current:** 18 lines with "Rule Track" and "Perception Track" framing + 4 critical rules.
**Should be:** 5 lines defining the severity scale only: WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER with 1-line definitions each.
**Estimated reduction:** 18 lines -> 5 lines = -13 lines

### M-07: Lines 493-504 -- Tier 5 Auditor Assignment Summary
**Current:** 11-line table.
**Should be:** REMOVED (see T-05). /build-page owns assignments.
**Estimated reduction:** -11 lines

### M-08: Void Guardrail "Mode 4 Integration" + "Embedded Mode Integration" -- Lines 370-372
**Current:** References both Mode 4 and Mode 1 contexts.
**Should be:** Remove Mode 1 reference (line 372). Keep Mode 4 note (line 370-371).
**Estimated reduction:** -1 line

---

## 4. DUPLICATION MAP

| Content | PA Skill Lines | /build-page Lines | Canonical Source | Conflict? |
|---------|---------------|-------------------|-----------------|-----------|
| Auditor assignments (9 auditors, question IDs) | 642-650 | 286-294 | **/build-page** | YES -- PA-03 missing from PA skill Auditor A |
| Weaver protocol (6-section synthesis) | 690-768 | 300-356 | **/build-page** (more detailed, includes file paths) | Minor wording diffs, same substance |
| Verdict matrix (PA-05 x Tier 5 thresholds) | 730-738 | 436-442 | Both identical | No |
| Lock sheet format | 1035-1049 | 235-246 | **/build-page** (includes routing rules) | No |
| Screenshot capture protocol | 941-968 | 216-233 | **/build-page** (owns Playwright) | No |
| Playwright configuration | 970-988 | 148-156 | **/build-page** (owns Playwright) | No |
| Task graph (Mode 4) | 657-668 | Wave structure (Steps 5-6) | **/build-page** (implicit in wave design) | No |
| Team structure (Mode 4) | 638-651 | Sections 6.1-6.3 | **/build-page** | No |
| Screenshot-reading protocol | 671-688 | 256-279 (auditor spawn prompt) | Both needed -- /build-page spawns, PA skill read by auditors | LOW RISK |
| Severity terms (WOULD-NOT-SHIP, etc.) | 1098-1106 | 314 | Both use same terms | No |
| File structure (output) | 1185-1199 | 468-470 | **/build-page** (different naming) | YES -- naming convention conflict |
| Tier 5 scoring thresholds | 472-483 | 319-320 | Both identical | No |
| Metaphor expression spectrum | 796-804 AND 760-768 | Not in /build-page | **PA skill** (unique, but internally duplicated) | Self-duplicate |
| Multi-coherence calibration | 745-752 AND 910-917 | Not in /build-page | **PA skill** (unique, but internally duplicated) | Self-duplicate |
| Fresh-eyes principle | 46-48 | 245, 479 | Both reinforce same principle | No |
| Auditor language rule | 1076-1081 | 275-276 | Both needed | No |

### CRITICAL CONFLICT: Auditor A Assignment

**PA skill (line 642):** `Auditor A: Impression+Emotion (PA-01,03,04,05,18,19,20,45 + T5: PA-65,67) [10 Qs]`
**PA skill Tier 5 table (line 496):** `A | Impression+Emotion | PA-01,04,05,18,19,20,45 | PA-65, PA-67 | 9`
**/build-page (line 286):** `A | Impression+Emotion | PA-01, 03, 04, 05, 18, 19, 20, 45, **65**, **67**`

The Mode 4 section (line 642) and /build-page AGREE: PA-03 is assigned to Auditor A (10 questions).
The Tier 5 summary table (line 496) DISAGREES: PA-03 is MISSING from Auditor A (9 questions).

/build-page and PA skill Mode 4 section are consistent. The PA skill's own Tier 5 summary table at line 496 is the outlier.

**flagship-pa-questions.md (line 148):** `A | Impression+Emotion | PA-01,04,05,18,19,20,45 | PA-65, PA-67 | 9`
This ALSO misses PA-03, matching the Tier 5 summary table and disagreeing with /build-page.

So the discrepancy is:
- /build-page + PA Mode 4 section: Auditor A gets PA-03 (10 Qs total)
- PA Tier 5 table + flagship-pa-questions.md: Auditor A does NOT get PA-03 (9 Qs total)

**Resolution needed:** PA-03 ("Does this feel like one designer made it, or three?") is a Tier 1 question about coherence. It naturally belongs with Impression+Emotion (Auditor A). /build-page is probably correct. The Tier 5 summary tables in both PA skill and flagship-pa-questions.md need updating.

### Question Count Discrepancy Map

| Source | Claim | Actual |
|--------|-------|--------|
| PA skill line 7 | "59 PA questions" | WRONG -- should be 63 |
| PA skill line 636 | "63 questions (54 standard + 9 Tier 5)" | CORRECT |
| PA skill line 654 | "54 standard + 9 Tier 5 = 63" | CORRECT |
| /build-page line 332 | "57 questions x 9 auditors" | WRONG -- should be 63 |
| /build-page line 403 | (Cycle 1: "All 57") | WRONG -- should be 63 |
| flagship-pa-questions.md line 5 | "48 standard questions (57 total)" | WRONG -- should be 54 standard + 9 = 63 |
| flagship-pa-questions.md line 158 | "48 standard + 9 Tier 5 = 57" | WRONG -- should be 54 standard + 9 = 63 |
| design-system/CLAUDE.md | "56 questions (48 standard + 8 Tier 5)" | WRONG -- should be 63 |

**Root cause of count confusion:**
The PA skill defines questions across 5 tiers:
- Tier 1: PA-01 to PA-05 = 5
- Tier 2: PA-06 to PA-20, PA-29 to PA-45 = 15 + 10 = 25 (numbered non-contiguously)
- Tier 3: PA-21 to PA-28, PA-46 to PA-48, PA-69, PA-70 = 8 + 3 + 2 = 13
- Tier 4: PA-50 to PA-53 = 4
- Tier 5: PA-60 to PA-68 = 9
- **Total non-Tier-5: 5 + 25 + 13 + 4 = 47 standard... wait.**

Let me recount by listing every unique PA question ID defined in the skill:
```
Tier 1 (5):  01, 02, 03, 04, 05
Tier 2 (20): 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 31, 32, 33
             34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
Tier 3 (13): 21, 22, 23, 24, 25, 26, 27, 28, 46, 47, 48, 69, 70
Tier 4 (4):  50, 51, 52, 53
Tier 5 (9):  60, 61, 62, 63, 64, 65, 66, 67, 68
```

Tier 2 actually has 32 questions (06-20 = 15, 29-45 = 17 total). Wait, let me recount:
- 06, 07, 08, 29 (Readability) = 4
- 09, 10, 11, 30, 31, 32, 33 (Spatial) = 7
- 12, 13, 34, 35, 36 (Flow) = 5
- 14, 15, 37, 38, 39 (Grid) = 5
- 16, 17, 40, 41 (Consistency) = 4
- 18, 19, 20 (Color) = 3
- 42, 43, 44 (Metaphor) = 3
- 45 (Quality) = 1
= 4+7+5+5+4+3+3+1 = 32 Tier 2

Tier 3:
- 21, 22, 23, 46, 47 (Responsive) = 5
- 24, 25 (Cross-Page) = 2
- 26, 27 (Architectural) = 2
- 28, 48 (Adversarial) = 2
- 69, 70 (Pipeline Integration) = 2
= 5+2+2+2+2 = 13 Tier 3

Total: 5 + 32 + 13 + 4 + 9 = 63. CONFIRMED.

Standard (non-Tier-5) = 5 + 32 + 13 + 4 = 54. MATCHES PA skill line 636.

flagship-pa-questions.md claims "48 standard" which is WRONG (should be 54). The "48" might be from an older version before Tier 4 (PA-50-53 = 4 questions) and PA-69/PA-70 (2 questions) were added. 54 - 4 - 2 = 48. This confirms the file was NOT updated after those questions were added.

---

## 5. NET IMPACT

| Category | Lines | Items |
|----------|-------|-------|
| **TRIM (complete removal)** | ~195 | T-01 through T-21 |
| **MODIFY (reduce)** | ~165 net reduction | M-01 through M-08 |
| **TOTAL REDUCTION** | **~350-420 lines** | |
| **Current size** | 1,208 lines | |
| **Projected size** | **~790-860 lines** | |
| **Reduction %** | **29-35%** | |

### Breakdown by trim reason:

| Reason | Lines trimmed | Items |
|--------|--------------|-------|
| DUPLICATED in /build-page | ~190 | T-04, T-05, T-08, T-09, T-10, T-11, T-12, T-13, T-20 |
| ORPHANED (standalone-only) | ~130 | T-01, T-02, T-03, T-06, T-14 (partial), T-15, T-16, T-17, T-18, T-19 |
| STALE | ~10 | T-21, T-23, M-01 |
| OVER-SPECIFIED / self-duplicate | ~70 | M-03, M-06 |

---

## 6. FRESH-EYES RISK ASSESSMENT

### Content that LOOKS helpful but would CONTAMINATE auditor impartiality:

**RISK 1: Expanded Metaphor-Awareness Principles (Lines 773-888)**

The 116-line expanded section includes detailed "Common Metaphor Traps" with specific CSS thresholds (32px padding, 640px minimum width, 40% compression ratio). While framed as "floors," providing these numbers to auditors before they evaluate the page creates an anchoring effect. An auditor who knows "minimum 32px padding" will look for padding violations rather than reacting to whether spacing FEELS cramped.

**Recommendation:** Keep the 60-line first instance (lines 224-285) which frames metaphor-awareness conceptually. TRIM the 116-line expanded section which provides specific CSS thresholds. Auditors should react to perceptual experience, not measure against known thresholds. The quantitative guardrails section (K-04) already has the thresholds for those who need them.

**RISK 2: Multi-Coherence Evaluation "What to look for" (Lines 890-921)**

This section tells auditors to "count the shifts" and lists 6 specific shift types. While useful for PA-69, it teaches auditors a FRAMEWORK rather than letting them react naturally. An auditor who has been told "count 6 specific things at boundaries" will count those 6 things rather than reacting to whether the boundary feels DRAMATIC or QUIET.

**Recommendation:** KEEP but SIMPLIFY. The current 32 lines include a calibration table (FLAT/FUNCTIONAL/DESIGNED/COMPOSED/FLAGSHIP) that IS classification guidance, not build knowledge. Replace the detailed "what to look for" with "Notice whether section transitions feel dramatic, subtle, or imperceptible. Count how many visual qualities change at each boundary."

**RISK 3: Weaver Calibration Tables (Lines 741-768)**

These tables (Multi-Coherence Scale, Severity Scale, Metaphor Expression Spectrum) are explicitly labeled "for the Weaver's classification work only" and "Auditors NEVER see these tables." This is correct in principle but fragile in practice: since /build-page tells auditors to "read the PA skill," auditors WILL read these tables. The PA skill has no mechanism to prevent auditors from reading beyond their assigned questions.

**Recommendation:** If the weaver protocol is trimmed (T-11), move calibration tables to a SEPARATE section clearly marked "## WEAVER-ONLY CALIBRATION (NOT FOR AUDITORS)" with a bold warning. Or better: move them to a separate file that only the weaver reads.

**RISK 4: Provenance Notes Throughout**

Multiple sections include "Provenance:" notes explaining WHY a question was added (e.g., line 348: "These questions were ABSENT during the ceiling experiment"). This gives auditors knowledge of PRIOR FAILURE MODES, which biases them to look for those specific failures.

**Recommendation:** TRIM all provenance notes from question definitions. Provenance is for skill maintainers, not auditors. Move to comments or a separate provenance file.

---

## 7. ENRICHMENT ASSESSMENT (Was the +221 lines justified?)

The PA skill grew from ~987 to 1,208 lines (+221). Assessing which additions were necessary:

### Justified additions (~120 lines):
- Tier 4 void prevention questions (PA-50-53) with guardrails: ~45 lines. ESSENTIAL -- caught the #1 failure mode.
- PA-69/PA-70 pipeline integration questions: ~15 lines. ESSENTIAL -- catch uniform-treatment and no-dynamic-range failures.
- PA-05c expanded sub-dimensions (horizontal/vertical/breathing): ~20 lines. ESSENTIAL -- enables precise diagnosis.
- PA-09 severity calibration: ~15 lines. ESSENTIAL -- distinguishes breathing zone from catastrophic void.
- PA-17/PA-41 Tier 1 equivalence: ~10 lines. ESSENTIAL -- prevents metronomic rhythm pass.
- Screenshot-Reading Protocol for pipeline auditors: ~15 lines. ESSENTIAL -- enables pre-captured screenshot workflow.

### Over-enriched additions (~100 lines):
- Expanded Metaphor-Awareness Principles (second instance, lines 773-888): ~75 lines. DUPLICATES lines 224-285 with CSS-specific thresholds that risk contaminating fresh-eyes.
- Repeated multi-coherence calibration table: ~15 lines. Self-duplicated (appears at line 745 AND line 910).
- Expanded restraint evaluation guidance (lines 506-517): ~12 lines. Over-specified for auditors -- the core "cover with hand" test is sufficient.

**Verdict:** ~120 of 221 lines were justified essential additions. ~100 lines were over-enrichments (duplications within the skill itself or contamination risks). The skill grew appropriately in question coverage but added too much explanatory scaffolding.

---

## 8. RECOMMENDED TRIM ORDER

If trimming iteratively, start with highest-confidence, lowest-risk removals:

1. **Phase 1 (zero risk):** T-21 (stale reference), T-19 (naming convention), T-18 (validation litmus test), T-06 (Mode 1 note), M-01 (fix count). ~40 lines.

2. **Phase 2 (low risk, clear duplication):** T-01, T-02, T-03, M-02 (collapse Modes 1-3 into Mode reference). T-04 (Mode 4 team structure). T-05 (Tier 5 assignment table). ~130 lines.

3. **Phase 3 (moderate risk, needs care):** T-08, T-09 (Playwright/scroll code), T-10 (screenshot protocol), T-11 (weaver protocol), T-12 (lock sheet), M-04 (keep calibration tables). ~120 lines.

4. **Phase 4 (judgment calls):** T-14 (partial, keep auditor language block), T-15, T-16, T-17, T-20, M-03 (expanded metaphor section), M-05, M-06. ~80 lines.

---

## 9. DESIGN-SYSTEM/CLAUDE.md DISCREPANCY

The root CLAUDE.md contains this stale reference:
```
- `~/.claude/skills/perceptual-auditing/SKILL.md` (48 PA questions)
```
Should be: "(63 PA questions)"

And in the Skills section:
```
**Full 56-question audit required** -- 48 standard + 8 Tier 5 (PA-60 through PA-67)
```
Should be: "Full 63-question audit required -- 54 standard + 9 Tier 5 (PA-60 through PA-68)"

This shows PA-68 (Metaphor Spatial Coverage) was added after the CLAUDE.md was last updated, and Tier 4 questions (PA-50-53), PA-69, and PA-70 were never reflected.
