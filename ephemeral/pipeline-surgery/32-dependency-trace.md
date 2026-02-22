# 32 -- Dependency Trace: TC & PA Skill Trim Impact

**Tracer:** dependency-tracer (Opus)
**Date:** 2026-02-20
**Input files:** build-page/SKILL.md (482 lines), tension-composition/SKILL.md (2,006 lines), perceptual-auditing/SKILL.md (1,208 lines), conventions-brief.md (547 lines), gate-runner.md (1,160 lines), flagship-pa-questions.md (158 lines), design-system/CLAUDE.md (~500 lines visible)
**Cross-reference:** 25-tc-trim-audit.md, 26-pa-trim-audit.md, 29-trim-synthesis.md

---

## 1. COMPLETE REFERENCE MAP

Every place in /build-page that references the TC or PA skill files, with exact quotes and the content the agent is expected to find.

### 1.1 TC Skill References from /build-page

#### REF-TC-01: TC Agent Spawn Prompt (lines 33-60)
**Exact quote:**
> "Read these files IN ORDER:
> 1. ~/.claude/skills/tension-composition/SKILL.md -- YOUR PROCESS. Follow Phases 0-4 exactly."

**What the agent expects to find:** The full TC pipeline definition, Phases 0 through 4. The spawn prompt explicitly names:
- Phase 0: Content Assessment
- Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
- Phase 2: Tension Derivation
- Phase 3: Metaphor Collapse
- Phase 3.5: Metaphor Commitment
- Phase 4: Mechanism Selection

**Does it say "run Phases 0-4" or "full pipeline"?** It says: `"Execute Phases 0-4 of the tension-composition skill on this content"` (line 41) and `"Run through Phase 4 (Mechanism Selection). DO NOT proceed to Phase 5 (Compositional Layout)."` (line 49).

**Trim impact:** SAFE. All trim proposals preserve Phases 0-4.5. Phase 5+ is trimmed. The spawn prompt explicitly says "DO NOT proceed to Phase 5" so trimming Phase 5+ creates zero impact.

#### REF-TC-02: TC Brief Output Format (lines 51-58)
**Exact quote:**
> "Write your output to [output-dir]/_tc-brief.md containing:
> 1. STRUCTURAL METAPHOR
> 2. ZONE ARCHITECTURE
> 3. CONTENT TENSIONS
> 4. SELECTED MECHANISMS
> 5. METAPHOR-IMPLIED CSS DIRECTIONS"

**What the agent expects to find:** Phase 4.5 (Sub-Skill Output Mode) in the TC skill defines this exact 5-section format (TC skill lines 1627-1671).

**Trim impact:** SAFE. Phase 4.5 is in the KEEP list (K-11 in report 25).

#### REF-TC-03: Builder Reads TC Brief (lines 83-84)
**Exact quote:**
> "1. [output-dir]/_tc-brief.md -- YOUR DESIGN BRIEF. Content-specific metaphor, zones, tensions, mechanisms derived by the TC analyst. This is your compositional foundation."

**What the builder expects:** A 40-60 line brief with 5 sections. The builder does NOT read the TC skill directly.

**Trim impact:** SAFE. The builder never reads the TC skill file. The TC brief is the interface.

#### REF-TC-04: Fix Cycle TC Re-Read (lines 396)
**Exact quote:**
> "Re-read _tc-brief.md (your metaphor, zones, tensions) AND your conviction statement and transition table in _build-log.md before applying fixes."

**What the builder expects:** The _tc-brief.md file (output of TC agent), NOT the TC skill itself.

**Trim impact:** SAFE. Fix cycles reference the TC brief output, not the TC skill.

#### REF-TC-05: TC Re-Invocation (lines 416)
**Exact quote:**
> "If PA-44 (metaphor structural survival) AND PA-68 (metaphor spatial coverage) BOTH fail across 2+ cycles, the problem is the METAPHOR, not the implementation. In this case: re-spawn the TC agent (Step 2) with the same content + builder's _build-log.md showing what went wrong."

**What happens:** The TC agent is re-spawned using the same spawn prompt (REF-TC-01), reading the TC skill again.

**Trim impact:** SAFE. Same Phases 0-4 path, same skill content needed.

#### REF-TC-06: Behavioral Gate BG-1 (line 213)
**Exact quote:**
> "TC brief (`_tc-brief.md`) shows content assessment -> multi-axis questioning -> tension derivation -> metaphor collapse -> mechanism selection (evidence of Phases 0-4 execution)"

**What the gate expects:** Evidence that the TC agent ran Phases 0-4. This is verified from the TC brief output, not from the TC skill file.

**Trim impact:** SAFE. Gate reads the output, not the skill.

---

### 1.2 PA Skill References from /build-page

#### REF-PA-01: Auditor Spawn Prompt (lines 256-279)
**Exact quote:**
> "Before answering questions, read the evaluation framework at:
> ~/.claude/skills/perceptual-auditing/SKILL.md (Sections on perceptual
> language, evaluation approach, scoring guidance, the Three Laws, and
> the Sovereignty Principle)"

**What auditors expect to find in PA skill:**
- Perceptual language guidance (The One Rule, line 52-57)
- Evaluation approach (Cold Look Protocol, Zone Sweep)
- Scoring guidance (PA-05 sub-criteria, Tier 5 scoring thresholds)
- The Three Laws (lines 69-73)
- The Sovereignty Principle (lines 59-66)

**Trim impact:** SAFE. All of these are in KEEP lists (K-01 through K-09 in report 26).

#### REF-PA-02: Question Text Source (line 296-298)
**Exact quote:**
> "Bold = Tier 5 questions. PA question full text is in `~/.claude/skills/perceptual-auditing/SKILL.md` AND `design-system/pipeline/flagship-pa-questions.md` (for Tier 5 only)."

and:

> "Each auditor MUST have the full question text pasted into their prompt. Do not say 'answer PA-60' -- paste the entire question, scoring rubric, and evaluation guidance."

**What the orchestrator expects:** The PA skill contains ALL 63 question definitions with full text, scoring rubrics, and evaluation guidance. The orchestrator READS these from the PA skill and PASTES them into auditor prompts.

**Trim impact:** SAFE. All 63 questions are in KEEP list (K-03 in report 26, ~392 lines). This is explicitly the CORE of the PA skill.

#### REF-PA-03: Auditor Question Assignments (lines 284-294)
**Exact quote:** The assignment table mapping 9 auditors (A-I) to specific PA question numbers.

**What the orchestrator expects:** The PA skill contains the scoring rubrics and evaluation guidance that the orchestrator pastes. The ASSIGNMENTS are defined in /build-page, not in the PA skill. No dependency on the PA skill's Mode 4 assignment table.

**Trim impact:** SAFE. The PA skill's Mode 4 team structure (T-04 in report 26) is correctly identified as duplicated. Trimming it creates no gap because /build-page is authoritative for assignments.

#### REF-PA-04: Weaver Spawn Prompt (lines 300-356)
**Exact quote:**
> "You are the PA weaver. Read all 9 auditor reports from [output-dir]/_pa/."

The weaver prompt does NOT tell the weaver to read the PA skill. It contains the full verdict protocol inline.

**What the weaver expects from PA skill:** NOTHING directly. The weaver receives its protocol from /build-page. HOWEVER, the weaver uses terminology (COMPOSED, APPROACHING, STRUCTURED, VOCABULARY ONLY; multi-coherence scale; metaphor expression spectrum) that originated from the PA skill's calibration tables.

**Trim impact:** SAFE but with caveat. If calibration tables are removed from the PA skill AND /build-page's weaver prompt already contains them inline (it does -- lines 316-350 have the full scoring protocol), then trimming the PA skill's weaver protocol (T-11) is safe. The trim proposal correctly identifies keeping calibration tables only (~28 lines) as the safe approach.

#### REF-PA-05: Fix Cycle PA Reference (lines 370-393)
**Exact quote:** The fix instruction format references PA question IDs and auditor quotes but does NOT tell the builder to read the PA skill.

**Trim impact:** SAFE. Fix cycles operate on PA OUTPUTS (auditor reports, weaver synthesis), not the PA skill itself.

#### REF-PA-06: Tier 5 Question Source (line 296)
**Exact quote:**
> "PA question full text is in `~/.claude/skills/perceptual-auditing/SKILL.md` AND `design-system/pipeline/flagship-pa-questions.md` (for Tier 5 only)."

**What the orchestrator expects:** Tier 5 questions (PA-60 through PA-68) are in BOTH files. flagship-pa-questions.md is a SUBSET containing only Tier 5. The PA skill contains ALL questions including Tier 5.

**Trim impact:** SAFE. Tier 5 questions are in the KEEP zone.

---

### 1.3 Cross-File Dependencies

#### REF-CROSS-01: gate-runner.md References to TC/PA Skill Content

**Direct references:** ZERO. gate-runner.md does not reference the TC or PA skill files. It references:
- `conventions-brief.md` via fix recipe `brief_section` fields (11 references, lines 229-239)
- `tokens.css` via fix recipe `reference` fields

**Indirect dependencies:** Gate SC-13 measures multi-coherence using the same channel definitions as the TC skill (Phase 4.3) and PA skill (multi-coherence evaluation). BUT the gate defines its own thresholds inline (6 channels, >= 3 shifts, avg >= 4). No reading of skill files occurs.

**Trim impact:** SAFE. Gate runner is fully self-contained.

#### REF-CROSS-02: conventions-brief.md References to TC/PA Skill Content

**Direct references:** ZERO. Grep confirms no matches for "tension-composition", "perceptual-auditing", "SKILL.md", "TC skill", "PA skill", "Mode 1", "Mode 2", "Mode 3", "Mode 4", "W-DEAD", "W-OVER", or any warning code.

**Indirect dependencies:** The conventions-brief covers the same CONCEPTS as TC Phase 4.0 guardrails and PA quantitative guardrails, but it is a STANDALONE document. The builder reads it independently.

**Trim impact:** SAFE. conventions-brief.md is fully independent.

#### REF-CROSS-03: flagship-pa-questions.md References to PA Skill Content

**Direct references:** The file is titled "Flagship PA: Tier 5 Compositional Depth Questions" and contains the same 9 Tier 5 question definitions (PA-60 through PA-68) as the PA skill. It is a SUBSET extraction, not a reference.

**Indirect dependencies:** The auditor assignment table at the bottom matches (post-fix) the /build-page assignment table.

**Trim impact:** SAFE. flagship-pa-questions.md is a standalone copy. If Tier 5 questions are KEPT in the PA skill (they are, per K-03), no gap.

#### REF-CROSS-04: design-system/CLAUDE.md References to Skill Content

**Direct references:**
- `"~/.claude/skills/tension-composition/SKILL.md (~2,006 lines)"` -- KEY FILE PATHS section
- `"~/.claude/skills/perceptual-auditing/SKILL.md (63 PA questions)"` -- KEY FILE PATHS section
- `"TC: Phases 0-4 (content assessment through mechanism selection), separate Opus agent, outputs ~50-line TC brief"` -- SKILLS section
- `"PA: Full 63 questions (54 standard + 9 Tier 5 PA-60 through PA-68)"` -- SKILLS section

**Trim impact:** LINE COUNT references (~2,006 lines) will become stale after trimming. These must be updated post-trim.

---

## 2. PER-TRIM DEPENDENCY VERDICT

### TC Skill Trim Items

| Trim ID | Content Being Removed | Referenced by /build-page? | Referenced by conventions-brief? | Referenced by gate-runner? | Verdict |
|---------|----------------------|---------------------------|----------------------------------|---------------------------|---------|
| T-01 | Phase 5 Output (A/B) | NO. /build-page says "DO NOT proceed to Phase 5" | NO | NO | **CLEAR** |
| T-02 | Phase 5 Divergence Verification | NO. /build-page has no divergence step | NO | NO | **CLEAR** |
| T-03 | Stale Tension + Artificial Tension | NO | NO | NO | **CLEAR** |
| T-04 | Test Content Recommendations | NO | NO | NO | **CLEAR** |
| T-05 | Invocation Section | NO. /build-page spawns TC agent directly | NO | NO | **CLEAR** |
| T-06 | Test Results Summary | NO | NO | NO | **CLEAR** |
| T-07 | Phase 4.9 Tokenization Self-Check | NO. Builder concern, not TC concern | NO | NO | **CLEAR** |
| T-08 | Phase 4.7B Landmark Gate | NO. /build-page has DG-3 | gate-runner has DG-3 | YES (DG-3) | **CLEAR** -- gate-runner is self-contained |
| T-09 | Phase 4.8 Section-Aware Composition | NO. Builder concern | NO | NO | **CLEAR** |
| T-10 | Builder Warning TEXT (W-codes) | **GAP FOUND** -- see Section 3 below | NO | NO | **GAP** |

### PA Skill Trim Items

| Trim ID | Content Being Removed | Referenced by /build-page? | Referenced by conventions-brief? | Referenced by gate-runner? | Verdict |
|---------|----------------------|---------------------------|----------------------------------|---------------------------|---------|
| T-01/02/03 | Modes 1-3 definitions | NO. /build-page only uses Mode 4 | NO | NO | **CLEAR** |
| T-04 | Mode 4 team structure + task graph | /build-page has its OWN copy | NO | NO | **CLEAR** |
| T-05 | Tier 5 assignment summary table | /build-page has its OWN copy | NO | NO | **CLEAR** |
| T-06 | Mode 1 embedded reference (1 line) | NO | NO | NO | **CLEAR** |
| T-08 | Playwright configuration | /build-page has its OWN copy (Section 4.2) | NO | NO | **CLEAR** |
| T-09 | Scroll-through JS code | /build-page has its OWN copy (Section 5) | NO | NO | **CLEAR** |
| T-10 | Screenshot-reading protocol | /build-page has inline in auditor prompt | NO | NO | **CLEAR with caveat** -- keep 3-4 lines |
| T-11 | Weaver dual-verdict protocol | /build-page has FULL copy inline (Section 6.3) | NO | NO | **CLEAR** -- keep calibration tables |
| T-12 | Lock sheet format | /build-page owns (Section 5.5) | NO | NO | **CLEAR** |
| T-13 | Temporal firewall | /build-page has same principle (line 245) | NO | NO | **CLEAR** |
| T-14 | Team roles (Lead/Context/Fixer) | /build-page has own role definitions | NO | NO | **PARTIAL** -- KEEP Language HARD BLOCK |
| T-15 | Information isolation table | /build-page enforces architecturally | NO | NO | **CLEAR** |
| T-16 | Gate verification (G1/G2/G3) | /build-page has own gates | NO | NO | **CLEAR** |
| T-17 | Error handling | /build-page has own error handling | NO | NO | **CLEAR** |
| T-18 | Bento grid validation | NO. Meta-validation, not operational | NO | NO | **CLEAR** |
| T-19 | Team naming convention | NO. /build-page uses own naming | NO | NO | **CLEAR** |
| T-20 | File structure (runtime output) | /build-page has own file structure | NO | NO | **CLEAR** |
| T-21 | Definitive specification reference | STALE path. Nobody reads it | NO | NO | **CLEAR** |
| T-22 | Dual severity track framing | Keep severity terms, trim framing | NO | NO | **PARTIAL** |
| T-23 | "59 questions" header | Already fixed to "63" | NO | NO | **CLEAR** |
| M-03 | Expanded metaphor section (lines 773-888) | Auditors told to read "evaluation approach" but NOT told to read this specific section | NO | NO | **CLEAR** -- first instance (224-285) preserved |
| M-04 | Weaver protocol body (keep calibration only) | Weaver gets full protocol from /build-page | NO | NO | **CLEAR** -- calibration tables stay |

---

## 3. BUILDER WARNING FLOW TRACE (End-to-End)

This is the CRITICAL finding. Tracing the complete warning flow:

### Step 1: TC Agent Scores Perceptual Risk (Phase 3.5E-F)
**Location:** TC skill lines 555-632
**What happens:** TC agent scores each metaphor candidate on Perceptual Risk (0-4) and Perceptual Cost (0-5+). Scores determine which warnings apply.
**Trim status:** KEPT (K-05 in report 25). Phase 3.5E-F is in the keep zone.

### Step 2: TC Agent Selects Warning Codes
**Location:** TC skill lines 1980-1991 (Warning Selection Protocol)
**What happens:** A 12-line mapping table connects risk conditions to W- codes:
- Transition model = EMPTY SPACE --> W-DEADZONE
- Expression mode = TEXTUAL LABELS --> W-OVERLABEL
- Element variety = UNIFORM --> W-MONOTONY
- Responsive story = MODERATE+ risk --> W-RESPONSIVE
- Metadata strip present --> W-STATS
- Always --> W-IMPLICIT

**Trim proposal:** Report 25, T-10 says: "Remove warning content text (~60 lines), keep selection protocol (~12 lines) and move it into Phase 3.5E/F."
**Trim status:** Selection logic KEPT (moved). Warning TEXT removed.

### Step 3: TC Brief Output -- WHERE DO WARNINGS GO?

**GAP FOUND.** The TC Brief format (Phase 4.5, lines 1627-1671) defines exactly 5 sections:
1. STRUCTURAL METAPHOR
2. ZONE ARCHITECTURE
3. CONTENT TENSIONS
4. SELECTED MECHANISMS
5. METAPHOR-IMPLIED CSS DIRECTIONS

**There is NO Section 6 for builder warnings.** The TC brief format does NOT include a warnings section.

Report 25, T-10 acknowledges this: "Have Phase 4.5 (TC Brief output format, KEPT) include a '6. BUILDER WARNINGS' section listing relevant W- codes based on the perceptual risk score."

**Current status:** This Section 6 does NOT exist in the TC skill. It is a RECOMMENDATION in report 25, not an implemented change.

### Step 4: Builder Reads TC Brief
**Location:** /build-page line 83-84
**What happens:** Builder reads `_tc-brief.md` as their FIRST file. They look for compositional foundation.
**What builder sees:** 5 sections. NO warnings.

### Step 5: Builder Reads conventions-brief.md
**Location:** /build-page line 85
**What happens:** Builder reads conventions-brief as their SECOND file.
**What builder sees:** 14 sections covering identity, perception, richness, multi-coherence, fractal echo, metaphor, transition grammar, CSS vocabulary, creative authority, quality floor, memory, five questions, restraint list, accessibility, responsive behavior, and conviction card.

**Does conventions-brief contain warning definitions?** NO. Grep confirms zero matches for any W- code, "warning", or anything related to W-DEADZONE, W-OVERLABEL, etc.

### Step 6: Builder Acts on Warnings
**What builder does:** NOTHING. The builder never receives warnings because:
1. The TC brief has no warnings section
2. conventions-brief.md has no warning definitions
3. /build-page's builder spawn prompt has no warning references

### WARNING FLOW VERDICT: **BROKEN**

The warning system is DEAD END in the current pipeline. Even BEFORE trimming:
- The TC agent derives perceptual risk (Step 3.5E) and cost (Step 3.5F)
- The TC skill has a warning selection protocol (lines 1980-1991)
- But the TC Brief format (Phase 4.5) has NO warnings section
- And the builder spawn prompt has NO warning references
- And conventions-brief has NO warning definitions

**The warnings exist only for STANDALONE TC mode** (Phase 5 Output A, which includes a conventions brief generated by the TC agent). In sub-skill mode (/build-page), the warning flow is dead because:
- The TC agent stops at Phase 4.5
- Phase 4.5 output has no warnings slot
- The builder reads a SEPARATE conventions-brief.md that has no warning content

### Impact of Trimming Warning TEXT (T-10)

If warning TEXT is removed from the TC skill BUT warning selection logic is kept:
- **Without fixing the TC brief format:** Zero impact. Warnings were already not reaching the builder. Removing dead text changes nothing.
- **With the recommended fix (adding Section 6 to TC brief):** The TC agent would include W- codes in the brief, but the BUILDER would need to know what W-DEADZONE means. That definition must live somewhere the builder reads. Currently it exists nowhere in the builder's reading path.

### Recommended Fix for Warning Flow

**Option A: Add warnings to TC brief + conventions-brief** (COMPLETE fix)
1. Add Section 6 "BUILDER WARNINGS" to TC brief format (Phase 4.5) -- TC agent writes applicable W- codes with 1-line descriptions
2. Add a "Builder Warnings Reference" section to conventions-brief.md with the 6 warning definitions (~30 lines)
3. Builder reads W-codes in TC brief, looks up definitions in conventions-brief

**Option B: Add warnings to TC brief only** (MINIMAL fix)
1. Add Section 6 to TC brief format
2. TC agent writes the FULL warning text (not just codes) into the brief, selected based on perceptual risk
3. No changes to conventions-brief needed
4. TC brief grows from ~50 to ~60-70 lines

**Option C: Embed warning concepts in conventions-brief** (ARCHITECTURAL fix)
1. Do NOT add a warnings section to the TC brief
2. Add warning CONCEPTS (not W- codes) directly into relevant conventions-brief sections:
   - Dead zone prevention --> Section 2 (Perception) or Section 7 (Transition Grammar)
   - Over-labeling prevention --> Section 6 (Unified Metaphor)
   - Grid monotony prevention --> Section 8 (CSS Vocabulary) or Section 3 (Richness)
   - Responsive fragility --> Section 14 (Responsive Behavior)
3. Builder absorbs warnings as part of world-model, not as separate checklist
4. TC agent's perceptual risk scoring still serves its purpose (metaphor selection quality) without needing to transmit warnings

---

## 4. GAPS FOUND

### GAP-01: Builder Warning Flow is Dead (CRITICAL)
**What:** W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT warning codes and their full text definitions exist ONLY in the TC skill's Appendix (lines 1901-1991). They are not in the TC brief format, not in conventions-brief.md, not in the builder spawn prompt, and not in /build-page. The builder NEVER sees them.
**Proposed trim action:** T-10 removes warning TEXT but keeps selection LOGIC.
**Impact:** Zero ADDITIONAL impact from trimming, because the flow is already broken. BUT the trim is a missed opportunity to fix the flow.
**Severity:** The warning concepts ARE partially covered by conventions-brief:
- Dead zones: Section 2 covers "Stacked gaps above 120px create voids"
- Over-labeling: Section 6 covers "metaphor whose organizing influence a reader perceives through CSS treatment alone"
- Grid monotony: Section 3 covers "No single component type exceeds 35% of all component instances"
- Responsive: Section 14 covers responsive behavior
- Implicit metaphor: Section 6 covers structural vs announced metaphor
**Net gap:** WARNING CONCEPTS are partially covered. WARNING CODES and SPECIFIC PREVENTIVE LANGUAGE are lost. The most actionable parts (specific mitigation strategies per metaphor type) would be lost.

### GAP-02: TC Brief Missing Section 6 (MODERATE)
**What:** Report 25 recommends adding "6. BUILDER WARNINGS" to the TC brief format, but this edit has not been implemented. If warning selection logic is moved to Phase 3.5E/F (as recommended), the TC agent would score warnings but have no output slot for them.
**Impact:** Low if Option C is chosen (warnings absorbed into conventions-brief). Moderate if Option A or B is chosen (requires TC brief format change first).

### GAP-03: Language HARD BLOCK Must Survive PA Trim (LOW)
**What:** PA skill lines 1078-1080 define the Language HARD BLOCK for auditors (no CSS property names in answers). /build-page's auditor spawn prompt says "Read the PA skill" but does NOT reproduce the HARD BLOCK. If T-14 removes the full Team Roles section, the HARD BLOCK could be lost.
**Proposed trim action:** Report 26, T-14 says "PARTIAL TRIM. Remove role hierarchy... KEEP the Language HARD BLOCK."
**Impact:** SAFE if the partial trim is correctly executed. The trim audit already identifies this correctly.

### GAP-04: design-system/CLAUDE.md Line Counts Will Be Stale (LOW)
**What:** design-system/CLAUDE.md references "~2,006 lines" for TC skill and "63 PA questions" for PA skill. After trimming, TC will be ~960-1,050 lines.
**Impact:** Cosmetic. Line count is informational, not functional. Must be updated post-trim.

---

## 5. VERDICT

**GAPS FOUND -- 2 substantive, 2 cosmetic**

| Gap ID | Severity | Blocks Trim? | Fix Required? |
|--------|----------|-------------|---------------|
| GAP-01 | CRITICAL (but pre-existing) | NO -- flow was already broken before trim | YES -- fix during or after trim |
| GAP-02 | MODERATE | NO -- only matters if GAP-01 is fixed via Option A/B | CONDITIONAL on chosen fix strategy |
| GAP-03 | LOW | NO -- trim proposal already handles correctly | NO -- just execute T-14 as specified |
| GAP-04 | LOW | NO | YES -- update post-trim |

**Summary:**
- The trim proposals are SAFE to execute as described. No trim removes content that /build-page actively depends on.
- The BUILDER WARNING FLOW is broken pre-existing -- not caused by trimming. The trim is a good opportunity to fix it.
- All 63 PA questions remain in the keeper zone.
- All TC Phases 0-4.5 remain intact.
- conventions-brief.md has zero dependencies on either skill file (fully standalone).
- gate-runner.md has zero dependencies on either skill file (fully self-contained).
- flagship-pa-questions.md is a standalone copy of Tier 5 questions (no dependency on PA skill's copy being present, but both should stay consistent).

**Recommended action sequence:**
1. Choose GAP-01 fix strategy (Option A, B, or C) BEFORE trimming
2. Execute TC trim (report 25 recommendations)
3. Execute PA trim (report 26 recommendations)
4. Apply GAP-01 fix (whichever option chosen)
5. Update line counts in design-system/CLAUDE.md and MEMORY.md
6. Run cross-validation pass (report 27 style)
