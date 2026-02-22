# PA Trim Safety Audit -- Regression Analysis

**Auditor:** Regression Safety Auditor (Opus)
**Date:** 2026-02-20
**Files Analyzed:**
- `~/.claude/skills/build-page/SKILL.md` (482 lines, full read)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (1,208 lines, full read)
- `ephemeral/pipeline-surgery/26-pa-trim-audit.md` (prior trim audit, cross-referenced)

---

## THE CRITICAL AUDITOR READING PATH

Before evaluating individual trims, the most important fact in this analysis:

**`/build-page` line 260-262 -- Auditor spawn prompt says:**

> "Before answering questions, read the evaluation framework at:
> ~/.claude/skills/perceptual-auditing/SKILL.md (Sections on perceptual
> language, evaluation approach, scoring guidance, the Three Laws, and
> the Sovereignty Principle)"

This means ALL 9 PA auditors will read the PA skill file BEFORE answering questions. They are directed to specific sections:
1. **"perceptual language"** -- covered by Language HARD BLOCK (lines 1078-1081)
2. **"evaluation approach"** -- covered by Cold Look (lines 926-939), Zone Sweep (lines 990-996), Progressive Zoom (lines 998-1028)
3. **"scoring guidance"** -- covered by PA-05 sub-criteria (lines 88-134), Tier 5 scoring (lines 472-483)
4. **"the Three Laws"** -- covered by lines 68-73
5. **"the Sovereignty Principle"** -- covered by lines 59-66

Additionally, `/build-page` line 296 says:

> "PA question full text is in ~/.claude/skills/perceptual-auditing/SKILL.md AND design-system/pipeline/flagship-pa-questions.md (for Tier 5 only)."

The weaver spawn prompt (`/build-page` lines 300-356) does NOT tell the weaver to read the PA skill. The weaver gets its full protocol inline from `/build-page`.

---

## PER-TRIM VERDICTS

---

### TRIM-1: Modes 1-3 definitions (~32 lines, lines 598-631)

**1. Is it truly orphaned/duplicated?** YES.

Evidence: `/build-page` never references Mode 1, Mode 2, or Mode 3. The string "Mode 1" appears ONCE in the PA skill's void guardrails at line 372 ("Builders running Mode 1 (Embedded, 90 seconds)...") but this is a cross-reference within the PA skill, not from `/build-page`. The conventions-brief reference to "Mode 1 embedded" is not traced through `/build-page` -- builders read the conventions-brief directly, not the PA skill.

**2. Does /build-page reference or depend on this content?** NO. `/build-page` only uses Mode 4. It never spawns Mode 1/2/3 workflows.

**3. Will auditors look for Modes 1-3 and not find them?** NO. The auditor spawn prompt directs auditors to read "perceptual language, evaluation approach, scoring guidance, the Three Laws, and the Sovereignty Principle." None of these correspond to Mode definitions. Auditors are never told "read the Modes section."

**4. Could removing it degrade audit quality?** NO. Mode 1-3 are deployment configurations, not evaluation methodology. Auditors do not need to know that other deployment modes exist.

**Edge case:** A builder reading the PA skill for self-checking purposes might look for Mode 1. However, this is outside the `/build-page` pipeline scope, and the builder is told to read the conventions-brief, not the PA skill. The void guardrail reference at line 372 ("Builders running Mode 1...") should be trimmed alongside or updated.

**VERDICT: SAFE TO TRIM.**

Conditional: Also trim the Mode 1 reference at line 372 to avoid a dangling cross-reference.

---

### TRIM-2: Mode 4 team structure + task graph (~37 lines, lines 633-669)

**1. Is it truly orphaned/duplicated?** YES -- DUPLICATED.

Evidence comparison:
- PA skill lines 642-650 (team structure) vs `/build-page` lines 286-294 (question assignments table): The content is functionally identical. Both define 9 auditors with the same role names and question assignments. Minor formatting differences.
- PA skill lines 657-668 (task graph) vs `/build-page` wave structure (Sections 5-6): `/build-page` implements the same workflow as Steps 5 (screenshots), 6.1 (auditor spawn), 6.3 (weaver spawn).

**2. Does /build-page reference this content?** NO. `/build-page` has its OWN complete auditor assignments table at lines 284-294 that it uses to paste questions. It does not say "read the PA skill for team structure."

**3. Will auditors look for this and not find it?** UNLIKELY BUT POSSIBLE. The auditor spawn prompt says "read the evaluation framework" and lists specific sections. Team structure is not among them. However, an auditor browsing the PA skill might encounter the Mode 4 section and find the team structure informative for understanding their role.

**4. Could removing it degrade audit quality?** MARGINAL RISK. An auditor who reads "Mode 4: Standalone (60 minutes, TeamCreate, 12 agents)" gets orientation about their deployment context. This is minor context, not evaluation methodology. The auditor already knows their assigned questions from their spawn prompt.

**Conflict risk:** The PA skill Mode 4 section and `/build-page` currently AGREE on question assignments. But if they diverge in the future, dual-authority is worse than single-authority. Trimming eliminates the divergence vector.

**VERDICT: SAFE TO TRIM.**

Recommended: Replace with a 2-line stub: "Mode 4 (9 auditors + 1 weaver, all 63 questions) is the standard deployment. See /build-page SKILL.md for team structure and question assignments."

---

### TRIM-3: Weaver protocol (~47 lines trimmed from lines 690-768, keeping ~28 lines of calibration tables)

**1. Is it truly duplicated?** YES -- EXTENSIVELY DUPLICATED.

The weaver protocol at PA skill lines 690-738 is duplicated almost identically in `/build-page` lines 300-356. Comparison:

| Element | PA Skill | /build-page | Identical? |
|---------|----------|-------------|------------|
| PA-05 score sub-criteria | Lines 694-700 | Lines 313-317 | YES |
| Tier 5 scoring thresholds | Lines 702-707 | Lines 319-320 | YES |
| Top-5 issues format | Lines 709-717 | Lines 323-330 | YES (build-page adds channel/scale/transition naming) |
| Per-question matrix | Lines 719-720 | Lines 331-336 | YES (build-page adds calibration target flagging) |
| Compositional criteria | Lines 722-728 | Lines 339-345 | YES |
| Verdict matrix | Lines 730-738 | Lines 347-356 | YES |

**2. Does /build-page tell the weaver to "read the PA skill"?** NO. The weaver spawn prompt at lines 300-356 is SELF-CONTAINED. It tells the weaver to:
- Read all 9 auditor reports
- Read gate results
- Read lock sheet

It does NOT say "read the PA skill for calibration tables."

**3. Will the weaver look for calibration tables in the PA skill?** NO. The weaver is spawned with its full protocol inline. It has no instruction to read the PA skill.

**4. Could removing it degrade audit quality?** POSSIBLY -- for the calibration tables ONLY.

The calibration tables at lines 741-768 contain:
- Multi-Coherence Scale (FLAT/FUNCTIONAL/DESIGNED/COMPOSED/FLAGSHIP)
- Severity Scale (1-2 viewports = LOOKS-WRONG, 3-5 = WOULD-NOT-SHIP, 6+ = CATASTROPHIC)
- Metaphor Expression Spectrum (STRUCTURAL/ATMOSPHERIC/LABELED/ANNOUNCED)

These tables are NOT in the `/build-page` weaver spawn prompt. However, the weaver is NOT told to read the PA skill, so it would only encounter these if it independently decides to read the file. The weaver has the verdict matrix (lines 347-356 in `/build-page`) which provides the scoring thresholds it needs.

**Risk assessment:** The calibration tables help the weaver classify auditor descriptions more precisely. Without them, the weaver would rely on the verdict matrix alone, which is coarser-grained but sufficient for the core SHIP/FIX/REBUILD decision.

**VERDICT: SAFE TO TRIM the protocol sections (lines 690-738) -- they are fully duplicated.**

**RISKY to trim the calibration tables (lines 741-768).** While the weaver is not currently instructed to read them, they provide value if the weaver does browse the file, AND they are the ONLY location for this calibration data (not in `/build-page`).

**Recommendation:** Keep lines 741-768 (calibration tables, ~28 lines). Trim lines 690-738 (protocol, ~48 lines). This matches the proposed trim scope.

---

### TRIM-4: Playwright/scroll JavaScript code (~47 lines, lines 941-988)

**1. Is it truly orphaned?** PARTIALLY.

Lines 941-968 (Scroll-Through Protocol with JavaScript) -- the scroll-through concept is relevant to auditors (they need to understand what the screenshot sequence represents), but the JavaScript implementation code is irrelevant (auditors never execute it).

Lines 970-988 (Playwright Configuration) -- entirely irrelevant to pipeline auditors. They never touch Playwright.

**2. Does /build-page reference this content?** NO. `/build-page` has its own screenshot capture protocol (Section 5, lines 216-233) and Playwright configuration (Section 4.2, lines 148-156).

**3. Will auditors look for this?** PARTIALLY. The auditor spawn prompt says "read the evaluation framework" including "evaluation approach." An auditor reading the "VISUAL AUDITING PROTOCOL" section (which starts at line 924) would encounter:
- Cold Look Protocol (lines 926-939) -- NEEDED
- Scroll-Through Protocol (lines 941-968) -- PARTIALLY NEEDED (concept yes, JS code no)
- Playwright Configuration (lines 970-988) -- NOT NEEDED

**4. Could removing it degrade audit quality?**

The scroll-through protocol description (lines 941-946: "Full-page screenshots compress 15,000px pages to thumbnail scale...") provides rationale for WHY screenshots are sequenced. This helps auditors understand the screenshot naming convention (cold-look vs scroll-01, scroll-02, etc.).

The JavaScript code (lines 955-966) and Playwright config (lines 970-988) are irrelevant to screenshot-reading auditors.

**VERDICT: SAFE TO TRIM with a qualification.**

Trim the JavaScript code block (lines 955-966, ~12 lines) and the full Playwright Configuration section (lines 970-988, ~19 lines). KEEP the conceptual description of scroll-through at lines 941-954 (~14 lines) so auditors understand what the screenshot sequence represents and why scroll-through matters ("The scroll experience IS the audit").

This changes the trim from ~47 lines to ~31 lines. The remaining ~16 lines of conceptual description should be KEPT because auditors reading the "evaluation approach" will encounter this section and benefit from understanding the rationale.

---

### TRIM-5: Screenshot-reading protocol (~14 lines trimmed from lines 671-688)

**1. Is it truly duplicated?** PARTIALLY.

PA skill lines 671-688 (Screenshot-Reading Protocol for Pipeline Auditors) vs `/build-page` auditor spawn prompt lines 256-279.

Comparison of what each contains:

| Element | PA Skill (671-688) | /build-page (256-279) |
|---------|-------------------|----------------------|
| "You receive file paths to saved PNGs" | YES (line 673) | YES (line 268-269) |
| "Read each screenshot using the Read tool" | YES (line 674) | YES (line 270) |
| "3 viewport widths: 1440, 1024, 768" | YES (line 675) | NO (implicit from screenshot filenames) |
| "Cold look + scroll-through sequence" | YES (lines 676-678) | NO |
| "Apply Cold Look Protocol independently" | YES (line 677) | NO |
| "Apply Zone Sweep on scroll-through" | YES (line 679) | NO |
| "Cannot interact -- purely VISUAL" | YES (lines 682-684) | NO |
| "Screenshot-based is MORE aligned" | YES (lines 684-685) | NO |
| "Perceptual language" | YES (line 688) | YES (lines 275-277) |

**2. Does /build-page reference this content?** INDIRECTLY. The auditor spawn prompt says "read the evaluation framework at ~/.claude/skills/perceptual-auditing/SKILL.md." The screenshot-reading protocol at lines 671-688 IS part of that evaluation framework. An auditor reading the PA skill will encounter it.

**3. Will auditors look for this and not find it?** YES -- this is a real risk. The auditor spawn prompt gives them screenshot file paths and tells them to "Read each screenshot using the Read tool." But it does NOT explain the Cold Look + Zone Sweep workflow for screenshots, or the viewport sequence (cold-look first, then scroll-through). The PA skill's screenshot-reading protocol fills that gap by explaining HOW to approach the screenshots methodically.

**4. Could removing it degrade audit quality?** YES.

The PA skill's screenshot-reading protocol contains UNIQUE content not in `/build-page`:
- Step 5: "Apply Cold Look Protocol to each cold-look screenshot independently"
- Step 6: "Read scroll-through screenshots in sequence (01, 02, 03...) for each viewport"
- Step 7: "Apply Zone Sweep (5 dimension passes) on the scroll-through sequence"
- "You cannot interact with the page... Your assessment is purely VISUAL -- which is the correct mode for perceptual auditing."

This is evaluation METHODOLOGY that connects the Cold Look and Zone Sweep protocols (which auditors are told to read) with the specific screenshot-reading workflow.

**VERDICT: RISKY -- DO NOT TRIM to 3-4 lines as proposed.**

The screenshot-reading protocol bridges the auditor spawn prompt (which gives file paths) with the evaluation methodology (Cold Look, Zone Sweep). Without it, auditors would have Cold Look and Zone Sweep protocols but no guidance on how to apply them to pre-captured screenshots specifically.

**Recommendation:** Keep most of lines 671-688 (~14 of 18 lines). At most, trim lines 682-685 (the "Key difference from live auditing" and "more aligned with skill's principles" commentary, ~4 lines) which are editorial, not methodological.

---

### TRIM-6: Lock sheet, team roles, file structure, error handling, naming (~70 lines combined from lines 1035-1199)

This trim covers multiple sub-sections. Evaluating each:

#### 6a. Lock Sheet Format (lines 1033-1049, ~17 lines)

**Is it orphaned?** PARTIALLY. `/build-page` generates its own lock sheet (Section 5.5, lines 235-246) but does NOT define the markdown format template. The PA skill's lock sheet format at lines 1035-1049 defines the ALWAYS-LOCKED / LOCKED / CHALLENGEABLE / PREVIOUS FINDINGS table structure.

**Does /build-page weaver need this?** The weaver spawn prompt says "Read the lock sheet at [output-dir]/_lock-sheet.md" but does NOT say "read the PA skill for lock sheet format." The orchestrator generates the lock sheet, so the FORMAT definition matters for the orchestrator, not the weaver or auditors.

**VERDICT: SAFE TO TRIM.** The orchestrator reads `/build-page` for lock sheet generation instructions, not the PA skill. The PA skill format is standalone infrastructure.

#### 6b. Temporal Firewall (lines 1051-1053, ~3 lines)

**Is it orphaned?** DUPLICATED in principle. `/build-page` line 245: "Do NOT give it to PA auditors -- they must remain fresh-eyes with zero build context." Same principle, different wording.

**VERDICT: SAFE TO TRIM** -- but the principle is important. It survives in `/build-page`.

#### 6c. When Perception Meets Research (lines 1055-1060, ~6 lines)

**Is it orphaned?** This classification logic (INVALID/VALID/ACTIONABLE/ESCALATE) is for the standalone PA synthesizer workflow. In `/build-page`, the weaver does not classify findings against a lock sheet's sovereignty categories in this way -- it ranks issues by severity.

**Risk:** The weaver IS told to read the lock sheet and understand LOCKED vs CHALLENGEABLE. But the classification logic at lines 1055-1060 helps the weaver understand what to DO with findings that challenge locked decisions. `/build-page` weaver prompt does say "do NOT let this bias your quality judgment -- it only informs which fixes are feasible."

**VERDICT: SAFE TO TRIM.** The principle survives in `/build-page` weaver prompt.

#### 6d. Team Roles CAN/CANNOT (lines 1064-1093, ~30 lines)

**Is it orphaned?** PARTIALLY. Most role definitions (Lead, Contextualizer, Fixer) are standalone-only. BUT:

**CRITICAL: Language HARD BLOCK (lines 1078-1081)**

The auditor spawn prompt says "read the evaluation framework at the PA skill" including "perceptual language." The Language HARD BLOCK at lines 1078-1081 IS the perceptual language specification. It lists CSS property names that CANNOT appear in auditor answers and provides the replacement vocabulary (heavy, light, cramped, spacious, etc.).

`/build-page` lines 275-277 have a SHORTER version:
> "LANGUAGE RULE: Describe what you SEE, not what the CSS does.
> GOOD: 'The background shifts from warm cream to cooler gray'
> BAD: 'The background-color changes from #FEF9F5 to #F0EBE3'"

This is a STYLE EXAMPLE, not a HARD BLOCK. The PA skill's version is more comprehensive -- it lists 25+ forbidden CSS terms and provides 22 replacement words.

**VERDICT: RISKY for the Language HARD BLOCK.**

- SAFE TO TRIM: Lead (lines 1066-1068), Research Contextualizer (lines 1070-1072), Adversarial (lines 1082-1084), Synthesizer/Weaver (lines 1086-1088), Fixer (lines 1090-1092) = ~15 lines
- DO NOT TRIM: Visual Auditors CAN/CANNOT (lines 1074-1076) + Language HARD BLOCK (lines 1078-1081) = ~8 lines. Auditors are told to read the PA skill for "perceptual language" and THIS IS where they find it.

#### 6e. Information Isolation (lines 1116-1124, ~9 lines)

**VERDICT: SAFE TO TRIM.** Standalone PA infrastructure. `/build-page` enforces isolation architecturally.

#### 6f. Gate Verification (lines 1127-1135, ~9 lines)

**VERDICT: SAFE TO TRIM.** Standalone PA gates. `/build-page` has its own gate system (Section 4).

#### 6g. Error Handling (lines 1137-1146, ~10 lines)

**VERDICT: SAFE TO TRIM.** Standalone PA error handling. `/build-page` has its own monitoring (Section 1 Monitoring, Section 7 Fix Cycle).

#### 6h. Validation / Bento Grid Litmus (lines 1149-1171, ~23 lines)

**VERDICT: SAFE TO TRIM.** Meta-validation for skill designers, not for pipeline agents.

#### 6i. Team Naming (lines 1175-1181, ~7 lines)

**VERDICT: SAFE TO TRIM.** `/build-page` uses its own naming convention.

#### 6j. File Structure (lines 1185-1199, ~15 lines)

**VERDICT: SAFE TO TRIM.** `/build-page` defines its own file structure (Section 10, line 472). The PA skill's standalone file structure uses different paths.

**OVERALL TRIM-6 VERDICT: SAFE WITH MODIFICATION.**

Trim ~62 of ~70 lines. KEEP the Visual Auditors CAN/CANNOT + Language HARD BLOCK (~8 lines). This content is what auditors find when they read the PA skill for "perceptual language" as directed by `/build-page`.

---

### TRIM-7: Expanded metaphor-awareness section (~76 lines, lines 773-888)

**1. Are lines 224-285 and 773-888 truly redundant?**

NO -- they are partially redundant with significant UNIQUE content in the expanded section.

Overlap analysis:

| Content | First Instance (224-285) | Second Instance (773-888) | Redundant? |
|---------|-------------------------|--------------------------|------------|
| Core principle (metaphor shapes experience, guardrails prevent breaking) | Lines 240-258 | Lines 785-794 | YES -- near-identical |
| Metaphor Expression Spectrum table | NO | Lines 796-804 | UNIQUE (but duplicated with weaver calibration at lines 760-768) |
| DO/DO NOT flag guidance | Lines 246-254, 260-265 | NO | Unique to first |
| PA-42/43/44 question text with context | Lines 267-280 | Lines 879-888 (rephrased as "Audit Questions for Metaphor-Driven Layouts") | DUPLICATED (questions already defined at lines 288-294) |
| Fresh-Eyes Detection protocol | NO | Lines 807-820 | **UNIQUE** |
| Detecting Principled vs Ad-Hoc Composition | NO | Lines 822-842 | **UNIQUE** |
| Content-Form Coupling Detection | NO | Lines 843-845 | **UNIQUE** |
| Common Metaphor Traps (6 traps with CSS thresholds) | NO | Lines 847-877 | **UNIQUE** |

**2. Which unique content matters for auditors?**

The auditor spawn prompt says "read the PA skill for evaluation approach." Auditors assigned to metaphor questions (Auditor G: PA-25, 42, 43, 44, PA-68) would benefit from:

- **Fresh-Eyes Detection (lines 807-820):** HIGHLY VALUABLE. Tells auditors how to detect metaphor WITHOUT knowing the intended metaphor. Directly informs PA-44 and PA-68. This is EVALUATION METHODOLOGY, not build context.

- **Detecting Principled vs Ad-Hoc Composition (lines 822-842):** HIGHLY VALUABLE. Tells auditors what visual signatures indicate principled vs ad-hoc composition. Directly informs PA-03, PA-05a, PA-65. This is also evaluation methodology. It explicitly says "You do NOT need to name the principle. Your job is to detect its PRESENCE or ABSENCE through visual evidence."

- **Content-Form Coupling Detection (lines 843-845):** VALUABLE. Three lines that guide PA-70. Purely perceptual.

- **Common Metaphor Traps (lines 847-877):** RISKY. Contains CSS thresholds (32px, 640px, 40%, 16px, 24px, 48px) that could anchor auditors. The prior trim audit flagged this as a contamination risk. However, these same thresholds already appear in the Quantitative Guardrails section (lines 520-593) that is being kept.

- **Audit Questions for Metaphor-Driven Layouts (lines 879-888):** REDUNDANT. These are PA-42/43/44 rephrased without question IDs. The actual questions are already defined at lines 267-276 AND at lines 288-294.

**3. Could removing it degrade audit quality?**

Removing the Fresh-Eyes Detection and Principled vs Ad-Hoc Composition sections would DEGRADE audit quality for Auditor G (and any auditor evaluating metaphor-related aspects). These sections provide the methodological lens for answering PA-44, PA-68, PA-03, PA-05a, and PA-65.

Removing Common Metaphor Traps could either IMPROVE quality (less contamination from CSS thresholds) or DEGRADE quality (auditors miss metaphor-driven failure patterns). The guardrails already appear in the Quantitative Guardrails section, so the information survives even if the traps section is removed.

**VERDICT: RISKY -- partial trim only.**

- **SAFE TO TRIM (redundant/risky):** Core Principle restatement (lines 785-794, ~10 lines), Metaphor Expression Spectrum table (lines 796-804, ~9 lines -- already at line 760), Audit Questions for Metaphor-Driven Layouts (lines 879-888, ~10 lines -- already at lines 267-276)
- **DO NOT TRIM (unique methodology):** Fresh-Eyes Detection (lines 807-820, ~14 lines), Detecting Principled vs Ad-Hoc Composition (lines 822-842, ~21 lines), Content-Form Coupling Detection (lines 843-845, ~3 lines)
- **JUDGMENT CALL:** Common Metaphor Traps (lines 847-877, ~31 lines) -- CSS thresholds are a contamination vector but also appear in Quantitative Guardrails. Lean toward TRIM since the guardrails section has the same data.

**Recommended trim: ~60 of 76 lines.** Keep Fresh-Eyes Detection, Principled vs Ad-Hoc, Content-Form Coupling (~38 lines). Trim redundant core principle, duplicate spectrum table, duplicate questions, and Common Metaphor Traps (~76 - 38 = ~38 lines actually trimmed, not 76).

Wait -- re-reading the proposed trim claim: "~76 lines, lines 773-888." This proposes removing the ENTIRE expanded section. That is TOO AGGRESSIVE. Fresh-Eyes Detection and Principled vs Ad-Hoc Composition are UNIQUE methodology that auditors need.

**REVISED VERDICT: DO NOT TRIM as proposed (full 76 lines).**

Trim ~38 lines (redundant parts). Keep ~38 lines (unique methodology).

---

### TRIM-8: Stale reference (~6 lines, line 1206)

**1. Does the path exist?** NO.

```
ls: docs-spa/app/showcase/explorations/axis/_perceptual-research/11-final-specification.md: No such file or directory
```

The `docs-spa/` directory itself does not exist. This is a remnant from a pre-restructuring era.

**2. Does anything depend on it?** NO. No agent in `/build-page` reads this file or references it. It's a dead reference.

**VERDICT: SAFE TO TRIM.**

Zero risk. Remove lines 1203-1208 (the "DEFINITIVE SPECIFICATION" section header + stale path + closing line).

---

## AUDITOR READING PATH AUDIT (Post-Trim Verification)

After ALL proposed trims are applied (with my modifications), here is what auditors would encounter when reading the PA skill:

| Section | Status | Location (current) | Verdict |
|---------|--------|-------------------|---------|
| 1. Critical Warning (Audit Optimization Trap) | **SURVIVES** | Lines 5-43 | Essential framing. Untouched. |
| 2. The One Rule | **SURVIVES** | Lines 52-57 | Untouched. |
| 3. The Sovereignty Principle | **SURVIVES** | Lines 59-66 | Untouched. |
| 4. The Three Laws | **SURVIVES** | Lines 68-73 | Untouched. |
| 5. All 63 question definitions (PA-01 through PA-70) | **SURVIVES** | Lines 78-518 | Untouched. Full text, scoring rubrics, sub-criteria, severity calibration all preserved. |
| 6. Quantitative Guardrails | **SURVIVES** | Lines 520-593 | Untouched. Hard floors preserved. |
| 7. Cold Look Protocol | **SURVIVES** | Lines 926-939 | Untouched. |
| 8. Zone Sweep | **SURVIVES** | Lines 990-996 | Untouched. |
| 9. Progressive Zoom Test | **SURVIVES** | Lines 998-1028 | Untouched. |
| 10. Language HARD BLOCK | **SURVIVES** | Lines 1078-1081 | Preserved (TRIM-6 keeps this). |
| 11. Metaphor Awareness (first instance) | **SURVIVES** | Lines 224-285 | Untouched. |
| 12. Fresh-Eyes Detection | **SURVIVES** | Lines 807-820 | Preserved (TRIM-7 modified to keep this). |
| 13. Principled vs Ad-Hoc Composition | **SURVIVES** | Lines 822-845 | Preserved (TRIM-7 modified to keep this). |
| 14. Multi-Coherence Evaluation | **SURVIVES** | Lines 890-921 | Untouched. |
| 15. Weaver Calibration Tables | **SURVIVES** | Lines 741-768 | Preserved (TRIM-3 keeps these). |
| 16. Dual Severity Track (perception terms) | **PARTIALLY TRIMMED** | Lines 1096-1106 | Keep severity definitions, trim "Critical Rules." |
| 17. Research Sovereignty (When Perception Meets Research) | **TRIMMED** | Lines 1055-1060 | Low risk -- classification logic for standalone PA. |

**All 5 sections named in the auditor spawn prompt survive intact:**
1. "perceptual language" = Language HARD BLOCK (lines 1078-1081) -- KEPT
2. "evaluation approach" = Cold Look + Zone Sweep + Progressive Zoom -- KEPT
3. "scoring guidance" = PA-05 sub-criteria + Tier 5 scoring -- KEPT
4. "the Three Laws" = Lines 68-73 -- KEPT
5. "the Sovereignty Principle" = Lines 59-66 -- KEPT

---

## HIDDEN DEPENDENCY MAP

| Dependency | Source | Target | Risk if Trimmed |
|------------|--------|--------|-----------------|
| Auditor spawn prompt names "perceptual language" | `/build-page` line 261 | PA skill Language HARD BLOCK (lines 1078-1081) | **HIGH** -- auditors lose vocabulary guidance |
| Auditor spawn prompt names "evaluation approach" | `/build-page` line 261 | PA skill Cold Look + Zone Sweep + Progressive Zoom | **ZERO** -- all kept |
| Orchestrator reads question text from PA skill | `/build-page` line 296 | PA skill question definitions (lines 78-518) | **ZERO** -- all kept |
| Void guardrails reference Mode 1 | PA skill line 372 | PA skill Mode 1 def (line 598-603) | **LOW** -- dangling cross-ref if Mode 1 trimmed |
| Weaver calibration tables are ONLY in PA skill | PA skill lines 741-768 | No `/build-page` equivalent | **MEDIUM** -- weaver isn't told to read these but they're unique |
| Screenshot-reading protocol bridges spawn prompt to methodology | PA skill lines 671-688 | Cold Look + Zone Sweep sections | **MEDIUM** -- removing it disconnects "how to approach screenshots" from "what methodology to apply" |
| Fresh-Eyes Detection informs PA-44 and PA-68 | PA skill lines 807-820 | PA-44 (line 276) + PA-68 (line 462) | **HIGH** -- unique methodology for metaphor auditing |
| Principled vs Ad-Hoc Composition informs PA-03, PA-05a, PA-65 | PA skill lines 822-842 | PA-03 (line 84), PA-05 (lines 88-134), PA-65 (lines 432-438) | **HIGH** -- unique methodology for coherence auditing |

---

## EDGE CASES THAT COULD BREAK

### Edge Case 1: Auditor reads deeper than directed

The auditor spawn prompt says "read sections on perceptual language, evaluation approach, scoring guidance, the Three Laws, and the Sovereignty Principle." In practice, an Opus agent given "read this file for evaluation framework" will likely read MOST of the file, not just the named sections. This means:

- Content that "auditors don't need" may still be read by auditors
- Removing content that provides useful methodology (even if unnamed in the spawn prompt) could degrade audit quality
- The screenshot-reading protocol (TRIM-5) is a prime example -- not named in the spawn prompt but naturally encountered

**Mitigation:** When trimming, err on the side of keeping methodology sections and trimming deployment/infrastructure sections.

### Edge Case 2: Standalone PA invocation

If someone invokes the PA skill directly (not through `/build-page`), the trimmed file would be missing:
- All Mode definitions (they wouldn't know how to deploy)
- Team structure
- Lock sheet format
- Error handling
- File structure

This could break standalone PA entirely. However, the MEMORY.md history shows all recent PA invocations go through `/build-page`, so this risk is theoretical.

**Mitigation:** Add a note at the Mode section stub: "For standalone PA deployment without /build-page, reference prior versions of this file or contact the system designer."

### Edge Case 3: Future /build-page modifications

If `/build-page` is modified to tell auditors or the weaver to read specific PA skill sections that have been trimmed, the pipeline would silently degrade. This is a maintenance risk.

**Mitigation:** After trimming, add a comment at the top of the PA skill: "## PIPELINE COUPLING: This skill is read by /build-page auditors (see /build-page Section 6.1). Sections removed from this file should NOT be referenced from /build-page."

### Edge Case 4: Calibration table divergence

The Multi-Coherence calibration table appears at BOTH line 745-752 (weaver calibration) AND lines 910-917 (multi-coherence evaluation section). If TRIM-3 keeps the weaver version at 745-752 but later edits only update the version at 910-917, they could diverge.

**Mitigation:** After trimming, ensure only ONE copy of each calibration table exists. The version at 910-917 is in the "Multi-Coherence Evaluation" section which is KEPT and is the natural location for auditor-facing content. Consider moving lines 745-752 to a reference back to 910-917, or vice versa.

---

## OVERALL VERDICT: SAFE WITH MODIFICATIONS

The proposed trims are **SAFE** provided these modifications are applied:

### Must-Modify (mandatory for safety):

1. **TRIM-5 (screenshot-reading protocol):** Do NOT trim to 3-4 lines. Keep ~14 of 18 lines. Remove only editorial commentary (lines 682-685). The methodological bridge between spawn prompt and evaluation protocols must survive.

2. **TRIM-6 (team roles):** Keep the Visual Auditors CAN/CANNOT list + Language HARD BLOCK (~8 lines out of ~70). This is what auditors find when they read for "perceptual language."

3. **TRIM-7 (expanded metaphor section):** Do NOT trim the full 76 lines. Keep Fresh-Eyes Detection (lines 807-820), Principled vs Ad-Hoc Composition (lines 822-845). Trim ~38 lines of redundant content (duplicate core principle, duplicate spectrum table, duplicate metaphor questions). Common Metaphor Traps (lines 847-877) are a judgment call -- lean toward trim since guardrails section has the same thresholds.

### Safe as proposed:

4. **TRIM-1 (Modes 1-3):** SAFE. Also clean up the dangling Mode 1 reference at line 372.
5. **TRIM-2 (Mode 4 team structure):** SAFE. Replace with 2-line stub.
6. **TRIM-3 (weaver protocol):** SAFE for protocol (lines 690-738). Keep calibration tables (lines 741-768) as proposed.
7. **TRIM-4 (Playwright/JS code):** SAFE for JS code and Playwright config. Keep conceptual scroll-through description (~14 lines).
8. **TRIM-8 (stale reference):** SAFE. Zero risk.

### Estimated net reduction with modifications:

| Trim | Proposed | Recommended | Delta |
|------|----------|-------------|-------|
| TRIM-1 | -32 lines | -32 lines | 0 |
| TRIM-2 | -37 lines | -35 lines (keep 2-line stub) | +2 |
| TRIM-3 | -47 lines | -47 lines | 0 |
| TRIM-4 | -47 lines | -31 lines (keep concept) | +16 |
| TRIM-5 | -14 lines (keep 3-4) | -4 lines (keep ~14) | +10 |
| TRIM-6 | -70 lines | -62 lines (keep 8) | +8 |
| TRIM-7 | -76 lines | -38 lines (keep 38) | +38 |
| TRIM-8 | -6 lines | -6 lines | 0 |
| **TOTAL** | **-329 lines** | **-255 lines** | **+74** |

The proposed trims would remove ~329 lines. With safety modifications, ~255 lines should be removed, preserving ~74 additional lines of unique methodology and evaluation framework content that auditors depend on.

**Final PA skill size:** ~1,208 - 255 = ~953 lines (21% reduction).

This is more conservative than the prior trim audit's estimate of 350-420 lines (29-35%), but it avoids the regression risks identified in this analysis.

---

## APPENDIX: QUICK REFERENCE -- What Each Trim Actually Removes

| Trim | What's Removed | Pipeline Impact |
|------|---------------|-----------------|
| TRIM-1 | Mode 1/2/3 deployment definitions | NONE -- never invoked |
| TRIM-2 | Mode 4 team structure (duplicate) | NONE -- authoritative copy in /build-page |
| TRIM-3 | Weaver protocol (duplicate) | NONE -- weaver gets protocol from spawn prompt |
| TRIM-4 | JS code + Playwright config | NONE -- auditors never execute JS |
| TRIM-5 | 4 lines of editorial commentary | NONE -- methodology preserved |
| TRIM-6 | Standalone PA infrastructure (roles, gates, errors, naming, files) | NONE -- /build-page manages infrastructure |
| TRIM-7 | Redundant metaphor principle restatement + duplicate tables + duplicate questions | NONE -- unique methodology preserved |
| TRIM-8 | Dead file reference | NONE -- path doesn't exist |
