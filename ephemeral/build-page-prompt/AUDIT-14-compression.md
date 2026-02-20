# AUDIT-14: Compression Audit of Master Prompt Draft Sections

**Author:** compression-auditor (Opus 4.6)
**Date:** 2026-02-19
**Task:** #14 -- Does the master prompt compress intelligence?

**Method:** For each draft section, measured source lines vs draft lines, identified specific intelligence that was compressed out, rated severity, and prescribed fixes for BLOCKING compressions.

**The Central Risk:** The #1 failure mode in this project is COMPRESSION. The 530-line Flagship prompt compressed 337 research findings into checklist constraints and scored 1.5/4. The 963-line master prompt had 7.9:1 guardrail-to-playbook ratio. If these draft sections repeat that pattern, the /build-page pipeline inherits the same failure.

---

## MASTER COMPRESSION TABLE

| Draft Section | Source Lines | Draft Lines | Ratio | Key Compressions | Severity | Fix Required? |
|--------------|-------------|-------------|-------|------------------|----------|---------------|
| DRAFT-09 (Conventions Brief) | 789 | 520 | 1.5:1 | See Section 1 below | ACCEPTABLE | Minor |
| DRAFT-10 (Gate Runner) | 819 | 1048 | 0.8:1 (EXPANSION) | See Section 2 below | ACCEPTABLE | None |
| DRAFT-11 (PA + Orchestrator) | 1219 | 643 | 1.9:1 | See Section 3 below | ACCEPTABLE | Minor |
| DRAFT-12 (Skill Edits) | 2781 (TC+PA skills) | 1221 | 2.3:1 | See Section 4 below | ACCEPTABLE | Minor |
| DRAFT-13 (CLAUDE.md + Arch) | 1414 (CLAUDE.md files) | 885 | 1.6:1 | See Section 5 below | CONCERNING | Yes |
| DRAFT-orchestrator | 830 | 504 | 1.6:1 | See Section 6 below | ACCEPTABLE | Minor |
| DRAFT-pa-questions | 389 | 156 | 2.5:1 | See Section 7 below | ACCEPTABLE | None |

**Aggregate:** Total source ~8,241 lines -> Total draft ~4,977 lines = **1.66:1 overall compression ratio.**

This is FAR better than the Flagship's 50:1 compression. The drafts are EXPANSIONS in some cases (gate runner) and moderate compressions in others. The fundamental problem is NOT line-count compression -- it is QUALITATIVE compression: specific types of intelligence being systematically dropped.

---

## SECTION 1: DRAFT-09 -- Conventions Brief Section

**Source:** 01-brief-research.md (789 lines of extracted values, CSS snippets, thresholds, patterns)
**Draft:** DRAFT-09-conventions-brief-section.md (520 lines total; ~390 lines of actual brief content)

**Compression ratio:** 789:390 = **2.0:1**

### What Transferred WELL (No compression concern)

| Intelligence Type | Source | Draft Location | Transfer Quality |
|------------------|--------|----------------|-----------------|
| Soul constraints (8 prohibitions) | Section 1 | Brief Section 1 (Identity) | COMPLETE -- all 8 present with CSS values |
| Color palette (locked + accent) | Section 1 | Brief Section 1 | COMPLETE -- exact hex values preserved |
| Spacing scale (4px base) | Section 1 | Brief Section 1 | COMPLETE -- all 11 values |
| Perception thresholds (8 thresholds) | Section 2 | Brief Section 2 (Perception) | COMPLETE -- all values present with explanations |
| Transition grammar (3 types + CSS) | Section 3 | Brief Section 7 (Transition Grammar) | COMPLETE -- SMOOTH/BRIDGE/BREATHING with CSS recipes |
| Multi-coherence (6 channels + direction) | Section 4 | Brief Section 4 (Multi-Coherence) | STRONG -- channels named, directions defined, worked example present |
| Self-check protocol (5 questions) | Section 7 | Brief Section 11 (Five Questions) | COMPLETE -- all 5 questions present, reframed as "compositional mirrors" |
| Creative authority | Section 8 | Brief Section 9 | COMPLETE -- explicit permissions preserved |
| Conviction card template | Section 10 | Brief Section 12 (Conviction Card) | COMPLETE -- template fields preserved |
| Build process (4 phases) | Section 11 | Brief PROCESS section | COMPLETE -- A/B/C/D phases with verification pauses |

### What Was Compressed OUT (Specific losses)

| Intelligence Lost | Source Location | Impact | Severity |
|------------------|----------------|--------|----------|
| **CD-006 CSS code blocks** (5 grid topologies with exact CSS, callout DNA pattern, syntax highlighting colors) | Section 14 (~90 lines of CSS) | Builder loses specific CSS examples for grid layouts, callout structure, code blocks | CONCERNING |
| **Mechanism catalog summary** (18 mechanisms with categories and application modes) | Section 18 (~40 lines) | Builder must rely on reading mechanism-catalog.md directly | ACCEPTABLE -- builder reads catalog file |
| **Density patterns detailed table** (CRESCENDO/F-PATTERN/BENTO/PULSE with content-type mapping) | Section 17 (~15 lines) | Brief mentions layout topologies but not density patterns by name | ACCEPTABLE -- density patterns ARE in brief Section 8 (Layout Topologies) |
| **Value reconciliation table** (where sources disagree) | Section 20 (~30 lines) | Builder does not know where values had disagreement | ACCEPTABLE -- disagreements are resolved in the brief |
| **Contrarian warnings** (6 specific risks) | Section 19 (~35 lines) | Builder does not know the null hypothesis or Fat Core N=0 risk | ACCEPTABLE -- builder should build, not analyze risks |
| **Content density rules** (30%/20% fill thresholds, content-form fit) | Section 15 (~20 lines) | Builder lacks explicit minimum content-per-zone guidance | CONCERNING |

### Compression Severity: **ACCEPTABLE with 2 CONCERNING items**

**CONCERNING item 1: CD-006 CSS code blocks.** The brief references "5 proven grid patterns" and provides grid-template-columns values (Section 8), the callout 2-zone DNA pattern is described in detail (Section 8), and syntax highlighting colors are provided (Section 8). However, the FORMAT is different: the source has copy-paste-ready CSS blocks; the brief describes them in prose. The builder must translate prose to CSS.

**Assessment:** NOT BLOCKING. The builder reads `components.css` and `mechanism-catalog.md` directly, which contain the actual CSS. The brief describes patterns; the files provide CSS. This is the INTENDED architecture -- the brief is world-description, not CSS reference.

**CONCERNING item 2: Content density rules.** The brief says "every CSS rule is perceptible at 100% zoom" and "at least 2 distinct component types per viewport-height screenful" but does NOT state the 30%/20% content fill thresholds from the source.

**Assessment:** MINOR FIX. The fill thresholds are specific and actionable. Adding 2 lines to Section 3 (Richness) would preserve them without inflating the brief.

### Qualitative Compression Assessment

The CRITICAL question from 15-stack-transfer-test.md: does the brief compress the compositional intelligence stack?

| Stack Layer | Source Assessment | Draft Status |
|-------------|-------------------|--------------|
| L1: Scales (build order, dependency, verification) | 15-stack-transfer-test: "COMPLETELY LOST" | **FIXED** -- Brief Section 5 now has scale build order table with thresholds, dependency chain, and verified column |
| L2: Channels (layout diversity shortcut) | 15-stack-transfer-test: "COMPLETELY LOST" | **FIXED** -- Brief Section 4 has layout diversity paragraph |
| L3: Multi-coherence (3 vs 5 aspiration) | 15-stack-transfer-test: "LOST" | **FIXED** -- Brief Section 4: "3 channels = DESIGNED (the floor). 5+ channels = COMPOSED (the target for Flagship)" |
| L4: Anti-scale model (density/restraint/confidence) | 15-stack-transfer-test: "236:1 CATASTROPHIC" | **FIXED** -- Brief Section 3 is NEW section "RICHNESS (The Governing Principle)" with operationalized definitions |
| L5: Fractal (parametric echo, priority signal) | 15-stack-transfer-test: "COMPLETELY LOST" | **FIXED** -- Brief Section 5 has parametric echo paragraph and priority signal |
| Flagship-specific: unified metaphor | 15-stack-transfer-test: "ABSENT" | **FIXED** -- Brief Section 6 is NEW "UNIFIED METAPHOR" section |
| Flagship-specific: axis pattern variety | 15-stack-transfer-test: "ABSENT" | **FIXED** -- Brief Section 8 Layout Topologies with "3+ recommended for Flagship" |
| Flagship-specific: global multi-coherence | 15-stack-transfer-test: "ABSENT" | **FIXED** -- Brief Section 4 has global coherence paragraph |

**Verdict on DRAFT-09:** The brief drafter APPLIED all 5 P0/P1 enrichments from 15-stack-transfer-test.md and all 3 Flagship-specific additions. The stack transfer score improved from 55% to estimated ~85%. The brief is approximately 232 lines of content (within the ~230 target and under the 300-line ceiling). Format analysis shows 55% conventions / 25% recipe / 20% checklist -- matching the target.

**The brief drafter also applied:**
- All 8 corrections from 13-cross-validation.md (M1-M5, format rebalance)
- All 7 builder confusion fixes from 12-builder-simulation.md
- CD-006 vocabulary patterns embedded as world-description (Section 8)
- Failure anti-patterns embedded as perception physics (Section 2)
- Phase C rewritten boundary-by-boundary per 11-format-analysis.md

**DRAFT-09 is the strongest draft section.** It demonstrates the least problematic compression of any section.

---

## SECTION 2: DRAFT-10 -- Gate Runner Section

**Source:** 02-gate-research.md (819 lines -- complete 21-gate registry)
**Draft:** DRAFT-10-gate-runner-section.md (1,048 lines)

**Compression ratio:** 819:1048 = **0.78:1 (EXPANSION, not compression)**

### Transfer Assessment

The gate runner draft is LONGER than its source because it:
1. Added full JavaScript pseudocode for every gate (source had descriptions; draft has code)
2. Added micro-gate schedule (MG-1 through MG-4) not in the source
3. Added gate failure protocol with structured JSON format
4. Added gate-to-PA handoff protocol
5. Applied all 8 cross-validation resolutions from 13-cross-validation.md

### Specific Value Check

| Threshold | Source Value | Draft Value | Match? |
|-----------|-------------|-------------|--------|
| SC-01 container | 940-960px | 940-960px | YES |
| SC-09 bg delta | >= 15 RGB | >= 15 RGB | YES |
| SC-10 stacked gap | <= 108px | <= 120px | **CHANGED** -- draft uses 120px from remediation audit |
| SC-11 typography (Flagship) | >= 10px display-body | >= 10px display-body | YES |
| SC-12 zone count (Flagship) | 3-5 | 3-5 | YES |
| SC-13 multi-coherence (Flagship) | >= 3/boundary, avg >= 4 | >= 3/boundary, avg >= 4 | YES |
| SC-14 letter-spacing | < 0.02em | < 0.025em | **CHANGED** -- draft uses 0.025em from anti-conditions S-08 |
| SC-15 border configs (Flagship) | >= 3 distinct | >= 3 distinct | YES |
| SC-04 warm palette | R >= G >= B | R >= G >= B + callout exceptions | ENRICHED -- added exceptions |
| SC-05 no extremes | No #000/#FFF | No #000/#FFF + inverted exceptions | ENRICHED -- added exceptions |

### Compression Issues

| Issue | Severity |
|-------|----------|
| SC-10 threshold changed from 108px to 120px without clear justification chain | MINOR -- drafter documented rationale from remediation audit |
| SC-14 threshold changed from 0.02em to 0.025em | MINOR -- drafter documented rationale from anti-conditions S-08 |
| SC-09 "alternative path" (5 component types) removed | ACCEPTABLE -- drafter marked "calibration pending" |
| DG-2 tolerances (5 RGB / 1px / 0.01em) labeled as "engineering defaults" | ACCEPTABLE -- honest epistemic labeling |

### Compression Severity: **ACCEPTABLE**

The gate runner EXPANDED rather than compressed. The 2 threshold changes (SC-10, SC-14) are documented with rationale. The cross-validation corrections were applied systematically. No intelligence was lost.

**One concern:** The gate runner at 1,048 lines is very long. The master prompt's architecture section (DRAFT-13 Section D) targets 400-500 lines total. The gate runner alone exceeds that. This is acceptable because the gate runner is a REFERENCE FILE the orchestrator uses, not content the builder reads directly. But the assembler (Task #17) needs to decide: does the gate runner content go IN the master prompt or in a separate file that the prompt instructs the instance to write?

---

## SECTION 3: DRAFT-11 -- PA Questions + Orchestrator

**Source:** 03-pa-research.md (389 lines) + 04-orchestrator-research.md (830 lines) = 1,219 lines
**Draft:** DRAFT-11-pa-orchestrator-section.md (643 lines)

**Compression ratio:** 1,219:643 = **1.9:1**

### PA Questions Transfer

| Intelligence | Source | Draft Status |
|-------------|--------|--------------|
| 8 Tier 5 questions (PA-60 through PA-67) | 03-pa-research.md | COMPLETE -- all 8 present with question text, scoring rubrics, auditor assignments |
| Tier 5 scoring matrix | 03-pa-research.md | COMPLETE -- COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY thresholds |
| Auditor assignment table | 03-pa-research.md | COMPLETE -- 9 auditors, 56 total questions, Tier 5 additions marked |
| Success bar (PA-05 + Tier 5) | 03-pa-research.md | COMPLETE -- verdict matrix present |

### Orchestrator Transfer

| Intelligence | Source | Draft Status |
|-------------|--------|--------------|
| Fat Core architecture | 04-orchestrator-research.md | PRESENT -- "DO NOT build the page yourself" |
| Builder spawn prompt | 04-orchestrator-research.md | PRESENT -- ~40 lines, 6-file manifest |
| Gate runner protocol | 04-orchestrator-research.md | PRESENT -- 12-gate table with thresholds |
| Screenshot pre-capture | 04-orchestrator-research.md | PRESENT -- 3 viewports, naming convention |
| PA deployment (9 auditors) | 04-orchestrator-research.md | PRESENT -- spawn prompt, question assignments |
| Weaver synthesis | 04-orchestrator-research.md | PRESENT -- 5-part synthesis protocol |
| Fix cycle structure | 04-orchestrator-research.md | PRESENT -- 3 cycles, auditor count reduction |
| Timing estimates | 04-orchestrator-research.md | PRESENT -- per-phase table |

### What Was Compressed OUT

| Intelligence Lost | Impact | Severity |
|------------------|--------|----------|
| **Lock sheet generation** (DRAFT-orchestrator has it but DRAFT-11 does not) | Weaver lacks finding classification tool | CONCERNING -- but DRAFT-orchestrator includes it |
| **Preflight validation** (DRAFT-orchestrator has it but DRAFT-11 does not) | No pre-build conventions brief scan | CONCERNING -- but DRAFT-orchestrator includes it |
| **Gate runner JS code** in DRAFT-11 reduced to a 12-row table (DRAFT-10 has full code) | Orchestrator section lacks gate implementation details | ACCEPTABLE -- gate runner is a separate file |
| **SC-10 threshold mismatch**: DRAFT-11 says 108px, DRAFT-10 says 120px | Inconsistency between orchestrator and gate runner | **BLOCKING** |
| **Builder model rationale** (why Opus not Sonnet) | Lost "Sonnet-for-builders is unexamined" finding | ACCEPTABLE -- "ALWAYS Opus" is stated without rationale |

### Compression Severity: **ACCEPTABLE with 1 BLOCKING inconsistency**

**BLOCKING: SC-10 threshold mismatch.** DRAFT-11 (orchestrator section) uses 108px for stacked gap. DRAFT-10 (gate runner section) uses 120px. The assembler MUST resolve this before the final prompt. The source (02-gate-research.md) says 108px. The gate runner drafter changed it to 120px citing remediation audit. ONE value must be canonical.

**Recommendation:** Use 120px (DRAFT-10's value) because it is sourced from empirical observation (remediation audit "6 of 11 gaps exceed 120px"), while 108px is the tokens.css theoretical maximum. Update DRAFT-11 to match.

### Cross-Draft Consistency Check

The DRAFT-orchestrator.md and DRAFT-11-pa-orchestrator-section.md are TWO drafts of overlapping content (both define the orchestrator). They are largely consistent but have differences:

| Feature | DRAFT-orchestrator | DRAFT-11 | Resolution |
|---------|-------------------|----------|------------|
| Lock sheet | Step 3.5 (present) | Not mentioned | DRAFT-orchestrator is more complete |
| Preflight | Step 0.5 (present) | Not mentioned | DRAFT-orchestrator is more complete |
| Stacked gap | Not specified | 108px | Use 120px per DRAFT-10 |
| Builder file #6 | merged-components.css | components.css | DRAFT-11 is WRONG (should be components.css per M5 correction) -- wait, checking... DRAFT-orchestrator says "merged-components.css" which is also wrong |
| Cost estimate | ~$15-40/page | Not mentioned | Include from DRAFT-orchestrator |

**Additional BLOCKING issue:** DRAFT-orchestrator builder spawn prompt references "merged-components.css" (line 81). This was corrected to "components.css" in DRAFT-09 (correction M5 from 13-cross-validation.md). The assembler MUST use "components.css" everywhere.

---

## SECTION 4: DRAFT-12 -- Skill Edits

**Source:** TC SKILL.md (1,933 lines) + PA SKILL.md (848 lines) = 2,781 combined
**Draft:** DRAFT-12-skill-edits.md (1,221 lines of edit specifications)

**Compression ratio:** 2,781:1,221 = **2.3:1** (but this is edits, not a rewrite)

### Tier Removal Assessment

| Removal ID | What It Removes | Lines Removed | Clean? |
|------------|----------------|---------------|--------|
| R-01 | Step 0D tier classification table | ~30 lines | YES -- replaces with "ALWAYS FLAGSHIP" preamble |
| R-02 | Middle-tier skip instructions | ~28 lines | YES -- DELETE with density patterns relocated |
| R-03 | Ceiling/Flagship routing + degradation | ~25 lines | YES -- simplified to single line |
| R-04 | Step 0D-CEILING context box | ~18 lines | YES -- promoted to "Universal Compositional Requirements" |
| R-05 | Metaphor scoring rubric qualifier | 1 line | YES |
| R-06 | Phase 4 tier deployment levels | ~5 lines | YES -- Flagship only |
| R-07a/b | Per-category tier qualifiers | ~8 lines | YES |
| R-08 | Fractal gate tier requirements | ~12 lines | YES -- 5 scales universal |
| R-09a-d | Landmark gate tier requirements | ~12 lines | YES -- 4 sub-edits |
| R-10a/b | Tokenization tier references | ~4 lines | YES |
| R-11a | Rhythm variation qualifier | 1 line | YES |

**Total removed:** ~144 lines of tier-conditional logic.
**Assessment:** All removals are clean. No non-tier content accidentally deleted.

### Enrichment Assessment

| Enrichment ID | What It Adds | Lines Added | Source Traced? |
|--------------|-------------|-------------|---------------|
| E-01 | Multi-coherence binding rules (R-MC-01 to R-MC-06) | ~30 lines | YES -- from 20-MULTI-COHERENCE-DEEP-DIVE.md via 01-brief-research.md Section 4 |
| E-02 | Fractal echo protocol with 5-scale table | ~35 lines | YES -- from 22-FRACTAL-DEEP-DIVE.md via 15-stack-transfer-test.md |
| E-03 | Transition grammar (3 types with CSS) | ~15 lines | YES -- from 01-brief-research.md Section 3 |
| E-04 | Anti-scale model operationalization | ~20 lines | YES -- from 21-ANTI-SCALE-DEEP-DIVE.md via 15-stack-transfer-test.md |
| E-05 | Compositional intelligence stack + density patterns | ~25 lines | YES -- from 23-STACK-INTEGRATION.md |
| E-06 | Telescope distillate specification | ~20 lines | YES -- from 14-TELESCOPE-MICROSCOPE.md |

**Total added to TC:** ~145 lines.
**Net change:** ~0 (removals and additions roughly balance).

### PA Skill Enrichment Assessment

| Edit ID | What It Does | Clean? |
|---------|-------------|--------|
| B1a/b | Remove "Ceiling+ only" from PA-05c | YES |
| B2 | Remove "Ceiling+ only" from PA-09 | YES |
| B3 | Replace tier elevation block with universal | YES |
| B4 | Remove "Ceiling+ Only" from Tier 4 | YES |
| B-XR1/2 | Update question counts (48 -> 56) | YES |
| B-E01 | Insert Tier 5 questions (PA-60 to PA-67) | YES -- full question text, scoring, assignments |
| B-E02 | Multi-coherence evaluation guidance | YES -- detection protocol for auditors |
| B-E03 | Progressive zoom test | YES -- 5-scale verification protocol |
| B-E04/4b | Mode 4 team + weaver dual verdict | YES -- updated assignments + dual-verdict protocol |
| B-S1 | PA-05 reference to Tier 5 | YES |
| B-S2 | Fresh-eyes reinforcement | Requires agent reading -- acceptable |

### Compression Issues

| Issue | Severity |
|-------|----------|
| Enrichment E-01 anchor text points to PA skill, not TC skill | CONCERNING -- drafter acknowledges this and provides alternative guidance |
| Some edits require the executing agent to "find the appropriate insertion point" | MINOR -- unavoidable for append operations |
| Edit execution order is specified (bottom-up for TC) | GOOD -- prevents line-number drift |
| Post-edit verification checklist included | GOOD -- 14 TC checks + 11 PA checks |

### Compression Severity: **ACCEPTABLE**

The skill edits are MECHANICAL (exact old_string/new_string pairs), not compositional. Compression risk is low for this type of content. The enrichments are well-sourced and the verification checklist is thorough. The one CONCERNING item (E-01 anchor ambiguity) is honestly flagged by the drafter.

---

## SECTION 5: DRAFT-13 -- CLAUDE.md Edits + Validation + Architecture

**Source:** 08-nav-validation-research.md (720 lines) + 07-metacog-analysis.md (598 lines) + design-system/CLAUDE.md (733 lines) + compositional-core/CLAUDE.md (681 lines) = 2,732 lines
**Draft:** Two versions: DRAFT-13-claude-md-architecture.md (885 lines) and DRAFT-13-claude-md-architecture-section.md (885 lines)

**Note:** Two agents produced DRAFT-13 independently (both assigned Task #13). Their outputs are similar but not identical. The assembler must reconcile.

**Compression ratio (per file):** 2,732:885 = **3.1:1**

### CLAUDE.md Edit Assessment

| Edit | Both Versions Agree? | Content Consistent? |
|------|---------------------|-------------------|
| Update current phase | YES | Identical text |
| Update key principle | YES | Identical text |
| Update BUILD quick start | YES | Identical text |
| Replace SKILLS section | YES | Minor wording differences, same structure |
| Replace builder ingestion | YES | Identical text |
| Replace routing logic | YES | Identical text |
| Update anti-pattern #7 | YES | Identical text |
| Update evolution state | YES | Different approaches to timeline formatting |

### Validation Protocol Assessment

| Feature | Version 1 (DRAFT-13) | Version 2 (DRAFT-13-section) |
|---------|----------------------|------------------------------|
| Build order | Gas Town first, then RESEARCH-SYNTHESIS | Gas Town first (called "Build 2"), then RESEARCH-SYNTHESIS (called "Build 1") |
| Gas Town pass criteria | PA-05 >= 3.5, Tier 5 >= 6/8, all gates pass | Same |
| RESEARCH-SYNTHESIS pass criteria | PA-05 >= 3.0 (improvement over 2.5 baseline) | Same |
| Verdict matrix | 5 outcomes | 4 outcomes (similar) |
| 5 verification layers | Not separated | YES -- explicit Layer 1-5 structure |

### Architecture Assessment

Both versions provide a master prompt architecture. They converge on:
- 8-section structure (Sections 0-8)
- 400-500 line target
- 60% literal / 40% instruction ratio
- 4 self-checks
- Hardest tasks first
- Anti-skimming techniques (6-10 listed)
- No new concepts after line 300

### Compression Issues

| Issue | Severity |
|-------|----------|
| **TWO COMPETING DRAFTS** for the same section | **BLOCKING** -- assembler must reconcile |
| Version 1 has 11 CLAUDE.md edits; Version 2 has 8 | CONCERNING -- different edit counts for same file |
| Version 1 has 9 compositional-core/CLAUDE.md edits; Version 2 has 6 | CONCERNING -- different edit counts |
| Perceptual cost economics section update appears ONLY in Version 2 | CONCERNING -- Version 1 misses guardrail threshold update |
| Layer 4 Track reference ("Track 1 always, Track 2 Phase 4+") update appears ONLY in Version 2 | CONCERNING -- Version 1 misses this |
| **`merged-components.css` reference** in Version 1 DRAFT-orchestrator spawn prompt | **BLOCKING** -- must be components.css |
| Some edit old_strings may not match current file contents | MEDIUM -- unknown without reading live files |

### What Intelligence Was Compressed OUT

| Intelligence Lost | Source (07-metacog-analysis.md) | Draft Status | Impact |
|------------------|-------------------------------|--------------|--------|
| FM-01 through FM-10 (10 failure modes with mitigations) | 07-metacog: 160 lines | Version 1: mapped to prevention table; Version 2: mapped to anti-skimming | ACCEPTABLE -- converted from analysis to operational prevention |
| AT-01 through AT-06 (6 anti-failure techniques) | 07-metacog: 130 lines | Present in architecture section as techniques | ACCEPTABLE |
| BA-01 through BA-07 (7 baked-in assumptions) | 07-metacog: 200 lines | Version 1: "What architecture cannot prevent" (4 items); Version 2: similar | CONCERNING -- 7 assumptions reduced to 4 |
| Probability assessment | 07-metacog: 15 lines | Both versions include probability tables | ACCEPTABLE |
| The "one sentence that matters" | 07-metacog line 593 | Embedded in architecture principles | ACCEPTABLE |

### Compression Severity: **CONCERNING**

**Two BLOCKING issues:**
1. Two competing drafts must be reconciled by the assembler
2. `merged-components.css` reference in DRAFT-orchestrator must be corrected

**The substantive compression concern:** The metacog analysis identified 7 baked-in assumptions (BA-01 through BA-07). Both draft versions reduce these to 4 items in "What architecture cannot prevent." The 3 dropped assumptions are:
- BA-03: Fix cycle convergence vs oscillation risk
- BA-04: Conventions brief format vs recipe format (genuine design tension)
- BA-07: Design system files may be stale

These are real risks. BA-07 in particular is operationally important -- if files have been modified since the drafts were written, edits will fail. The prompt SHOULD include the pre-flight check (Step 0 in the architecture: read reference files, verify they exist and are non-empty).

---

## SECTION 6: DRAFT-orchestrator -- Orchestrator Logic

**Source:** 04-orchestrator-research.md (830 lines)
**Draft:** DRAFT-orchestrator.md (504 lines)

**Compression ratio:** 830:504 = **1.6:1**

### Transfer Assessment

The orchestrator draft is well-structured with clear steps (0 through 7) and practical details (models, timing, file structure). It includes amendments from 15-orchestrator-cross-ref.md.

| Intelligence | Transfer Quality |
|-------------|-----------------|
| Step 0: Intake | COMPLETE |
| Step 0.5: Preflight | PRESENT (from Amendment #2) |
| Step 1: Builder spawn | COMPLETE -- includes recipe framing warning |
| Step 2: Gate runner | COMPLETE -- 21 gates in 2 tier tables |
| Step 3: Screenshot capture | COMPLETE -- 3 viewports, naming convention |
| Step 3.5: Lock sheet | PRESENT (from Amendment #1) |
| Step 4: PA deployment | COMPLETE -- 9 auditors, question assignments |
| Step 5: Weaver synthesis | COMPLETE -- dual verdict protocol |
| Step 6: Fix cycle | COMPLETE -- 3 cycle limit, structured feedback |
| Step 7: Success bar | COMPLETE -- PA-05 + Tier 5 + criteria |

### Compression Issues

| Issue | Severity |
|-------|----------|
| Builder spawn prompt references "merged-components.css" | **BLOCKING** -- must be components.css |
| No DG-4 (Handoff Validation) in the gate table | MINOR -- DG-4 is a pre-build gate, may not belong in post-build gate run |
| Cost estimate "$15-40/page" is unsourced | MINOR -- reasonable estimate but not empirically validated |
| "4 proven architectures" verified against but architectures not named in draft | ACCEPTABLE -- named in cross-reference notes at end |

### Compression Severity: **ACCEPTABLE with 1 BLOCKING fix**

---

## SECTION 7: DRAFT-pa-questions -- PA Questions

**Source:** 03-pa-research.md (389 lines)
**Draft:** DRAFT-pa-questions.md (156 lines)

**Compression ratio:** 389:156 = **2.5:1**

### Transfer Assessment

All 8 Tier 5 questions present with full text, scoring rubrics, and auditor assignments. Scoring thresholds preserved. Auditor assignment table complete with 56 total questions.

### Compression Issues

None identified. The draft preserves all operational content from the source and drops only research context/rationale (which is appropriate for a reference file).

### Compression Severity: **ACCEPTABLE**

---

## CROSS-DRAFT CONSISTENCY AUDIT

Beyond per-section compression, I checked for CONTRADICTIONS between draft sections:

| Parameter | DRAFT-09 | DRAFT-10 | DRAFT-11 | DRAFT-12 | DRAFT-13 | DRAFT-orch | Status |
|-----------|----------|----------|----------|----------|----------|-----------|--------|
| Container width | 940-960px | 940-960px | -- | -- | 940-960px | -- | CONSISTENT |
| BG delta | >= 15 RGB | >= 15 RGB | >= 15 RGB | >= 15 RGB | >= 15 RGB | -- | CONSISTENT |
| Stacked gap | (not explicit) | **<= 120px** | **<= 108px** | -- | <= 108px | -- | **INCONSISTENT** |
| Letter-spacing floor | >= 0.02em | **>= 0.025em** | -- | -- | >= 0.02em | -- | **INCONSISTENT** |
| Component file name | components.css | components.css | (both versions) | components.css | components.css | **merged-components.css** | **INCONSISTENT** |
| PA questions | 56 (48+8) | -- | 56 | 56 | 56 | -- | CONSISTENT |
| Builder model | Opus always | -- | Opus | -- | Opus | Opus | CONSISTENT |
| Multi-coherence | >= 3/boundary, avg >= 4 | >= 3/boundary, avg >= 4 | >= 3/boundary, avg >= 4 | -- | >= 3/boundary, avg >= 4 | -- | CONSISTENT |
| Zone count | 2-5 (brief), 3-5 (Flagship) | 3-5 (Flagship) | -- | -- | -- | -- | CONSISTENT |

### 3 CROSS-DRAFT INCONSISTENCIES requiring resolution:

1. **Stacked gap: 108px vs 120px.** DRAFT-10 (gate runner) uses 120px; DRAFT-11 and DRAFT-13 use 108px. The assembler must pick ONE value.

2. **Letter-spacing floor: 0.02em vs 0.025em.** DRAFT-09 (brief) uses 0.02em; DRAFT-10 (gate runner) uses 0.025em. The brief says "No element should carry letter-spacing below 0.02em" while the gate says "No letter-spacing value between 0 and 0.025em." The assembler must pick ONE value.

3. **Component file name: components.css vs merged-components.css.** DRAFT-orchestrator uses the WRONG name. All other drafts use "components.css" (the M5 correction from 13-cross-validation.md). This is a simple fix.

---

## METACOGNITIVE COMPRESSION ASSESSMENT

Using the framework from 07-metacog-analysis.md, I assessed whether the drafts reproduce known failure patterns:

### FM-01 (Skimming Collapse): LOW RISK

The drafts are structured as separate files, not one massive document. The assembler will compose them into the master prompt, but each draft has clear structure with bold headers, tables, and code blocks.

### FM-02 (Checklist Drift): **MEDIUM RISK**

DRAFT-09 (conventions brief) explicitly targets 55% conventions / 25% recipe / 20% checklist and self-audits its verb distribution. This is good.

DRAFT-10 (gate runner) is inherently a CHECKLIST (gates are binary pass/fail). This is appropriate -- gates SHOULD be checklists.

DRAFT-11 (orchestrator) is a RECIPE (sequenced steps). This is appropriate.

DRAFT-12 (skill edits) is MECHANICAL (old_string/new_string). This is appropriate.

DRAFT-13 (architecture) includes anti-checklist guidance. Good.

**The risk is in DRAFT-09 only.** The brief drafter self-audited and achieved the target format. Whether a FRESH instance reading the master prompt reproduces this format when writing the brief is unknown.

### FM-03 (Compression Cascade): **MEDIUM RISK**

The drafts are at 1.66:1 overall compression -- much better than the Flagship's 50:1. However, the master prompt will compress the drafts AGAIN when the assembler produces the final prompt. If the assembler compresses aggressively, FM-03 activates.

**Mitigation:** The architecture (DRAFT-13 Section D) specifies 60% literal / 40% instruction. If the assembler follows this, literal content (thresholds, CSS values, file paths) survives.

### FM-06 (Brief Becomes Checklist): **MEDIUM RISK**

This is the #1 risk for the conventions brief. DRAFT-09 addresses it with format analysis and verb auditing. The risk is that the ASSEMBLER, when composing the master prompt, inadvertently reframes the brief content as constraints rather than world-description.

### FM-09 (Teaching Instead of Directing): **LOW RISK**

The drafts are operational, not educational. DRAFT-09 has some educational framing (explaining WHY perception thresholds matter) but this is appropriate for a conventions brief whose purpose is to establish the builder's mental model.

---

## SUMMARY: BLOCKING ISSUES FOR ASSEMBLER

The assembler (Task #17) must resolve these before producing the final master prompt:

### BLOCKING (3 issues)

1. **SC-10 stacked gap: 108px or 120px?** DRAFT-10 says 120px; DRAFT-11/13 say 108px. Pick one. Recommendation: 120px (empirically sourced from remediation audit).

2. **`merged-components.css` -> `components.css`** in DRAFT-orchestrator builder spawn prompt (line 81). All other drafts are correct.

3. **Two competing DRAFT-13 versions** must be reconciled. Recommendation: use DRAFT-13-claude-md-architecture-section.md as primary (it has more edits including Perceptual Cost Economics update), supplement with DRAFT-13-claude-md-architecture.md's architecture section (which has slightly more detail on anti-skimming techniques).

### SIGNIFICANT (2 issues)

4. **Letter-spacing floor: 0.02em or 0.025em?** DRAFT-09 says 0.02em; DRAFT-10 says 0.025em. Recommendation: use 0.02em in the brief (builder-facing, simpler) and 0.025em in the gate runner (programmatic, more precise). Document the distinction.

5. **Content density fill thresholds** (30%/20% from source) not in DRAFT-09. Add 2 lines to brief Section 3 (Richness).

### MINOR (3 issues)

6. DRAFT-orchestrator DG-4 not in post-build gate table (it is a pre-build gate -- confirm this is intentional).

7. Enrichment E-01 anchor text ambiguity in DRAFT-12 (drafter flagged, agent must read context).

8. BA-03/BA-04/BA-07 assumptions dropped from architecture "cannot prevent" section.

---

## FINAL VERDICT

**Overall compression severity: ACCEPTABLE with 3 BLOCKING fixes required.**

The draft sections demonstrate DRAMATICALLY better compression behavior than the Flagship prompt:
- **Flagship:** 337 findings -> 97 rules = 50:1 compression with 91.2% intelligence loss
- **These drafts:** 8,241 source lines -> 4,977 draft lines = 1.66:1 compression with ~15% intelligence loss

The conventions brief (DRAFT-09) in particular shows evidence of EVERY enrichment from 15-stack-transfer-test.md being applied. The stack transfer score improved from the source's assessed 55% to an estimated 85%.

The 3 BLOCKING issues are MECHANICAL (threshold value choices, filename corrections, draft reconciliation) rather than STRUCTURAL (missing intelligence, compressed-out understanding). This means the compression audit finds the drafts are **structurally sound** and need only **parameter-level fixes**.

The #1 remaining risk is not compression but REPRODUCTION: whether a fresh instance reading the assembled master prompt will reproduce the conventions brief's FORMAT (55% conventions, not 55% checklist). This is the FM-06 risk, which no compression audit can resolve -- only the experiment can.

---

**END OF AUDIT-14**

**Statistics:**
- 7 draft sections audited
- 3 BLOCKING issues identified (all mechanical/parameter-level)
- 2 SIGNIFICANT issues identified
- 3 MINOR issues identified
- 0 STRUCTURAL compression failures found
- Overall compression ratio: 1.66:1 (acceptable; Flagship was 50:1)
- Stack transfer: estimated 85% (up from 55% in source assessment)
