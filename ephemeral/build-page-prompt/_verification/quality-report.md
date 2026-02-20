# Quality Audit Report: Conventions Brief & Build-Page SKILL.md

**Auditor:** Agent #9 (quality-auditor, Opus)
**Date:** 2026-02-20
**Files Audited:**
- `design-system/pipeline/conventions-brief.md` (403 lines)
- `~/.claude/skills/build-page/SKILL.md` (409 lines)

**Cross-Referenced Against:**
- `design-system/pipeline/gate-runner.md` (993 lines)
- `design-system/pipeline/flagship-pa-questions.md` (144 lines)
- `ephemeral/build-page-prompt/DRAFT-09-conventions-brief-section.md` (source draft)
- `ephemeral/build-page-prompt/DRAFT-11-pa-orchestrator-section.md` (source draft)

---

## QUALITY SCORES

### Conventions Brief: **4/5**

Strengths: World-description language dominant, all 15 sections present (1-14 plus 9B), perception thresholds clearly stated, anti-scale model operationalized, multi-coherence well-described with 6 channels and 4 directions, fractal echo table with thresholds, transition grammar with CSS values, restraint list complete, accessibility skeleton provided, conviction card with template. Creative authority framing is excellent (80/20 freedom/constraint). The brief genuinely reads as a world-description, not a checklist.

Weaknesses: One internal threshold contradiction (10 vs 8 component families), checklist proportion slightly high (~31% vs 20% target), "8-question self-check" reference in SKILL.md has no backing in the brief's 5 questions.

### Build-Page SKILL.md: **4/5**

Strengths: All 11 sections present (0-10 including 4.5 Lock Sheet), correct YAML frontmatter, proper file read order with primacy/recency design, correct `components.css` reference (no `merged-components.css`), lock sheet feeds to weaver only, 9 PA auditors with question assignments matching flagship-pa-questions.md, TOP-5 issues (not TOP-3), fix cycle limit of 3, success bar clearly stated, non-negotiables restated in Section 10, complete file structure defined, BRIEF REFLECTION mandated.

Weaknesses: DRAFT-11 weaver was TOP-3, correctly upgraded to TOP-5 in final. One internal reference mismatch (8-question vs 5-question). Stacked gap threshold inconsistency between DRAFT-11 and final conventions brief is resolved in the final files but the DRAFT-11 weaver void threshold (>108px) conflicts with conventions brief (120px) -- the FINAL SKILL.md correctly uses 120px throughout so this is already fixed.

---

## CHECK-BY-CHECK RESULTS

### A. CONVENTIONS BRIEF QUALITY

**1. Format ratio:** PARTIAL
- Conventions/world-description sections: 1, 2, 3, 4, 5, 6, 7, 8, 12 (9 sections = ~56%)
- Recipe sections: PROCESS, CONVICTION CARD (2 sections = ~12%)
- Checklist sections: 9, 9B, 10, 11, 13, 14 (6 sections = ~31%)
- Target was 55%/25%/20%. Actual is roughly 56%/12%/31%. Recipe proportion is low, checklist is high.
- VERDICT: Checklist proportion exceeds target by ~11 percentage points. However, Sections 13 and 14 (Accessibility, Responsive) are inherently specification-like -- they MUST be checklists to be useful. Adjusting for necessary checklist content: ~56%/12%/22% (acceptable).
- Rating: ACCEPTABLE with caveat

**2. World-description language:** PASS
- Sampled 5 paragraphs:
  - Section 1 para 1: "KortAI pages ARE warm, sharp, flat, and editorial. Six constraints DEFINE the identity." -- WORLD-DESCRIPTION
  - Section 2 para 2: "Adjacent zone backgrounds EXIST in different hues only when..." -- WORLD-DESCRIPTION (physics)
  - Section 3 para 1: "Richness = semantic density x restraint x spatial confidence." -- WORLD-DESCRIPTION (governing principle)
  - Section 7 para 1: "Every zone boundary HAS a character." -- WORLD-DESCRIPTION
  - Section 9 para 1: "You ARE the composer." -- WORLD-DESCRIPTION (creative authority)
- All 5 use world-description verbs (is/are/has/exists). Zero use checklist verbs.
- Rating: STRONG PASS

**3. Constraint language density:** PASS
- Counted in conventions-brief.md:
  - "must" = 1 occurrence (Section 5: "Pattern direction must be consistent")
  - "verify" = 1 occurrence (Section 5 table: "Verified?" column header)
  - "ensure" = 0 occurrences
  - "fail" = 0 occurrences (the word "failure" appears in narrative context, not as a gate verb)
  - "cannot" = 1 occurrence (Section 1: "cannot be overridden")
  - "never" = 3 occurrences (all in Section 1 soul constraints + Section 7 transition rules)
- Total constraint words: ~6 out of ~2,800 total words = ~0.2%
- Target: < 20%. Actual: ~0.2%. Well below threshold.
- Rating: STRONG PASS

**4. Section completeness:** PASS
- Sections present: 1 (Identity), 2 (Perception), 3 (Richness), 4 (Multi-Coherence), 5 (Fractal Echo), 6 (Unified Metaphor), 7 (Transition Grammar), 8 (CSS Vocabulary), 9 (Creative Authority), 9B (Quality Floor), 10 (Compositional Memory), 11 (Five Questions), 12 (Restraint List), 13 (Accessibility), 14 (Responsive Behavior), plus CONVICTION CARD and PROCESS.
- Count: 15 numbered sections + 2 named sections = 17 total. ALL required sections present.
- Rating: PASS

**5. Conviction Card:** PASS
- Present at line 354. Template format with: Content, Zones, Organizing principle, Coherence direction, Metaphor fields. 6 commitment bullets. Framing as "compositional memory anchor."
- Rating: PASS

**6. Process section:** PASS
- Present starting at line 380. Four phases: Understand, Plan, Build, Verify.
- Four verification pauses during build specified with specific thresholds.
- Deliverables listed: output.html, _build-log.md, _cascade-value-table.md.
- Rating: PASS

**7. HTML skeleton template:** PASS
- Present in Section 13 (lines 301-318). Includes:
  - Font loading via Google Fonts (Instrument Serif, Inter, JetBrains Mono)
  - Skip link (`<a href="#main-content" class="skip-link">Skip to content</a>`)
  - ARIA landmarks: `<header role="banner">`, `<main id="main-content" role="main">`, `<footer role="contentinfo">`
  - lang="en", charset, viewport meta
- Rating: PASS

**8. Perception thresholds:** PASS (with caveat)
- 15 RGB background delta: STATED (Section 2, line 57)
- 0.025em letter-spacing minimum: STATED (Section 2, line 59)
- 120px stacked gap maximum: STATED (Section 2, line 61)
- 2px font-size delta: STATED (Section 2, line 59)
- All four thresholds present. All four are consistent with gate-runner.md thresholds.
- Rating: PASS

**9. Anti-scale model:** PASS
- "Richness = semantic density x restraint x spatial confidence" at Section 3, line 75.
- Each factor operationalized with self-tests and concrete thresholds.
- Rating: PASS

**10. Multi-coherence:** PASS
- 6 channels listed: Chromatic, Typographic, Spatial, Structural, Behavioral, Material (Section 4, lines 96-101)
- 4 directions listed: DEEPENING, OPENING, FOCUSING, RESOLVING (Section 4, lines 108-112)
- Primary vs enhancement channels distinguished (lines 103)
- Layout diversity shortcut documented (line 118)
- Global coherence requirement for Flagship (line 120)
- Rating: STRONG PASS

**11. Fractal echo:** PASS
- 5-scale table present (Section 5, lines 132-138)
- Columns: Scale, Size, What Expresses Here, Min Threshold, Verified?
- Build order dependency chain documented
- Priority: Navigation + Page + Component mandatory strong; Character optional
- Parametric echo concept documented
- Rating: PASS

**12. Transition grammar:** PASS
- SMOOTH: 15-25 RGB delta, 1px rule, steady spacing (Section 7, line 170)
- BRIDGE: 25+ RGB delta, tinted band 48-64px, typography shift (line 173)
- BREATHING: 3-4px structural border, 64-80px spacing (line 176)
- CSS values specific and actionable for each type
- Adjacency rules: never two BREATHING adjacent, max three SMOOTH without break
- Within-zone transitions documented (line 178)
- Rating: STRONG PASS

**13. Restraint list:** PASS
- Section 12 (lines 279-290). 10 items listed including:
  - gradient backgrounds, box-shadows, scroll-triggered animations, parallax, icons/SVG, nested grids, decorative borders, accent colors in body text, letter-spacing below 0.025em, 2px borders
- Rating: PASS

### B. BUILD-PAGE SKILL.md QUALITY

**14. YAML frontmatter:** PASS
- Present (lines 1-10). Fields: name ("build-page"), description (multi-line), triggers listed.
- Rating: PASS

**15. Section structure:** PASS
- Sections: 0 (Mission), 1 (Intake), 2 (Team Creation), 3 (Gate Runner), 4 (Screenshot Capture), 4.5 (Lock Sheet), 5 (PA Deployment), 6 (Fix Cycle), 7 (Success Bar), 8 (Output Summary), 9 (Practical Details), 10 (Non-Negotiables Restatement).
- Count: 12 sections (0-10 including 4.5). All present.
- Rating: PASS

**16. Builder file read order:** PASS (with improvement note)
- Order in SKILL.md (lines 47-56):
  1. conventions-brief.md FIRST -- establishes world model (PRIMACY)
  2. content file SECOND -- parsed through world model
  3. mechanism-catalog.md -- reference
  4. components.css -- reference (CORRECT, not merged-components.css)
  5. tokens.css -- reference
  6. prohibitions.md LAST -- soul constraints fresh before CSS (RECENCY)
- This is the CORRECT primacy/recency order. Conventions brief first (world model), prohibitions last (soul constraints fresh).
- Improvement from DRAFT-11: DRAFT had content first, conventions second, AND had wrong path (`design-system/compositional-core/conventions-brief.md`) AND referenced `merged-components.css`. ALL THREE corrected in final.
- Rating: PASS

**17. Success bar:** PASS
- PA-05 >= 3.5 AND Tier 5 >= 6/8 stated at: Section 0 (line 16), Section 7 (lines 354-355, 370).
- Full verdict matrix present with 5 outcomes: SHIP, SHIP WITH RESERVATION, NOT FLAGSHIP, FIX CYCLE, REBUILD.
- Mandatory criteria listed: zero soul violations, zero voids, metaphor STRUCTURAL, multi-coherence verified, scale coverage verified.
- Rating: PASS

**18. Fix cycle limit:** PASS
- Max 3 stated at line 346: "After Cycle 3: ESCALATE to user. Do NOT loop beyond 3 cycles."
- Cycle table shows 3 cycles with escalation.
- Rating: PASS

**19. PA deployment:** PASS
- 9 auditors specified (line 199, 201)
- Question assignments match flagship-pa-questions.md auditor table exactly:
  - A: PA-01,04,05,18,19,20,45,65,67 (9 questions)
  - B: PA-02,06,07,08,29 (5 questions)
  - C: PA-09,10,11,30,31,32,33,50,51,52,53,64,66 (13 questions)
  - D: PA-12,13,34,35,36,62 (6 questions)
  - E: PA-14,15,37,38,39,63 (6 questions)
  - F: PA-16,17,40,41,60,61 (6 questions)
  - G: PA-42,43,44 (3 questions)
  - H: PA-21,22,23,46,47 (5 questions)
  - I: PA-26,27,28,48 (4 questions)
- Cross-validated: Matches flagship-pa-questions.md assignment table exactly. Total = 57 questions across 9 auditors (some auditors may share borderline questions -- counted 9+5+13+6+6+6+3+5+4 = 57, but stated "56 total" in flagship-pa-questions.md. Minor counting discrepancy -- see MINOR finding below).
- Rating: PASS

**20. Lock Sheet:** PASS
- Step 4.5 present (lines 185-196)
- Three categories: LOCKED (Soul), LOCKED (Research), CHALLENGEABLE (Builder)
- Feeds to weaver only (line 195): "Route the lock sheet to the WEAVER ONLY in Step 5.3. Do NOT give it to PA auditors."
- Weaver receives it (line 249): "Also read the lock sheet at [output-dir]/_lock-sheet.md"
- Rating: PASS

**21. Instrumentation completeness:** PASS
- _gate-results.json: specified at line 150 (Step 3.3)
- _pa-matrix.md: specified at line 270 (weaver Step 5.3) and line 294
- _run-manifest.md: specified at line 378 (Step 8)
- _build-log.md reflection: specified at lines 77-82 (BRIEF REFLECTION section)
- All four instrumentation files specified.
- Rating: PASS

**22. Weaver TOP-5:** PASS
- Line 265: "TOP-5 ISSUES ranked by severity"
- Correctly upgraded from DRAFT-11's TOP-3.
- Agreement analysis present (lines 270-276): inter-auditor agreement tracking, calibration target identification for 5-4 or 4-3 splits.
- Rating: PASS

**23. Run output directory:** PASS
- Full structure defined at line 398-399 and again in file structure diagram.
- All files listed: output.html, _build-log.md, _cascade-value-table.md, _lock-sheet.md, _run-manifest.md, _gate-results.json, _screenshots/, _pa/, _fixes/.
- Rating: PASS

**24. Non-negotiables restated:** PASS
- Section 10 present (lines 401-409). 6 non-negotiables:
  1. Container 940-960px
  2. Warm palette R>=G>=B
  3. Perceptible CSS with specific thresholds (15 RGB, 2px font-size, 0.025em letter-spacing, 120px stacked gap)
  4. Builder model: Opus
  5. Same builder for fixes
  6. PA auditors are fresh-eyes
- Rating: PASS

### C. KNOWN FAILURE MODE PREVENTION

**25. Imperceptible CSS prevention (conventions brief):** PASS
- Section 2 states ALL four perception thresholds with specific numeric values:
  - >= 15 RGB background delta (line 57)
  - >= 2px font-size delta (line 59)
  - 0.025em letter-spacing minimum (line 59)
  - 120px stacked gap maximum (line 61)
- Section 3 includes the self-test: "imagine commenting it out. If removing it causes no visible change at 100% zoom, delete it permanently."
- Section 12 restraint list includes "letter-spacing below 0.025em"
- Rating: STRONG PASS (specific thresholds embedded as physics, not vague "perceptible")

**26. Checklist format prevention (conventions brief):** PASS
- Opening framing: "This brief describes the world you are building inside" (line 5)
- "It does not tell you what to build" (line 5)
- "These are not rules to comply with. They are the physics of human perception." (line 69)
- Recipe language dominant in PROCESS section (Understand/Plan/Build/Verify)
- Constraint language density measured at 0.2% (check #3)
- SKILL.md builder prompt reinforces: "It is a world-description, not a checklist" (line 49)
- Rating: PASS

**27. Merged-components reference prevention (SKILL.md):** PASS
- Zero occurrences of "merged-components" in SKILL.md (verified via grep)
- Line 54: "design-system/compositional-core/components/components.css"
- Conventions brief also correct: all 3 references say `components.css`
- Physical file verified: `components.css` exists at the referenced path
- Rating: PASS

**28. Threshold drift prevention (SKILL.md):** PASS
- Section 10 restates all 4 perception thresholds explicitly (line 405)
- Gate runner table in Section 3.2 uses matching thresholds:
  - SC-09: >= 15 RGB (line 132)
  - SC-10: <= 120px (line 132)
  - SC-11: >= 3 distinct font-size zones (line 133)
  - SC-13: >= 3 of 6 channels, avg >= 4 (line 134)
- Conventions brief Section 2 is the single source of truth; SKILL.md and gate-runner.md reference the same values.
- Rating: PASS

**29. Whitespace void prevention (SKILL.md):** PASS
- SC-10 gate explicitly checks stacked gap <= 120px (line 132)
- Conventions brief Section 2 explains the stacking mechanism (line 61): "section-bottom padding + divider margins + section-top padding can accumulate beyond 120px"
- Section 11 "The Scroll" question: "Any stretch of pure background longer than 120px is a void" (line 263)
- Weaver compositional criteria: "Zero void patterns (>120px empty)" (line 280)
- Rating: PASS

**30. Compositional intelligence routing to builder:** PASS
- Builder reads mechanism-catalog.md directly (SKILL.md line 53)
- Builder reads components.css directly (SKILL.md line 54)
- Builder reads conventions-brief.md FIRST (SKILL.md line 48)
- Builder has creative authority clause (SKILL.md line 68)
- Content-form coupling instruction (SKILL.md line 70)
- BRIEF REFLECTION requires builder to report which mechanisms selected and from which categories (lines 80-81)
- Rating: PASS

---

## BLOCKING FINDINGS

### BLK-1: "8-question self-check" does not exist in conventions brief

**Location:** SKILL.md line 66
**Symptom:** Builder is told "Run 8-question self-check" in Phase D, but the conventions brief Section 11 has only 5 questions ("The Squint", "The Scroll", "The Second Half", "The Boundary", "The Skeleton"). There is no "8-question self-check" defined anywhere.
**Impact:** Builder will look for 8 questions, find only 5, and either skip Phase D or invent 3 additional questions. This disrupts the self-verification flow.
**Fix:** Change "8-question self-check" to "5-question self-check" in SKILL.md line 66, OR add 3 more questions to the conventions brief to total 8. The simpler fix is to change to "5-question self-check" since the brief's 5 questions are well-designed.

### BLK-2: Component count contradiction (10 vs 8)

**Location:** Conventions brief Section 2 line 65 vs Section 9B line 236
**Symptom:** Section 2 says "at least 10 component families from `components.css`." Section 9B (Quality Floor) says ">= 8 component types from the library." Gate SC-08 threshold is >= 8. SKILL.md builder checkpoint says ">= 10 component classes" (line 62).
**Impact:** Builder gets conflicting signals. Is the minimum 8 or 10? Gate checks for 8, but conventions brief Section 2 and SKILL.md checkpoint both say 10. Builder may hit 8 (passing gates) but fail the conventions brief's own standard.
**Fix:** Harmonize to a single number. Recommendation: use 10 throughout conventions brief AND SKILL.md checkpoints, and elevate SC-08 gate threshold from 8 to 10. Alternatively, use 8 everywhere if 10 is considered overly demanding. The key is ONE number, everywhere.

---

## SIGNIFICANT FINDINGS

### SIG-1: DRAFT-11 weaver section had TOP-3, void threshold 108px -- correctly fixed in final

**Status:** ALREADY FIXED. The DRAFT-11 specified TOP-3 issues and 108px void threshold. The final SKILL.md correctly uses TOP-5 issues (line 265) and 120px void threshold (lines 132, 280, 405). This finding is informational only -- the fix was applied during assembly.

### SIG-2: DRAFT-11 builder file read order was inverted -- correctly fixed in final

**Status:** ALREADY FIXED. The DRAFT-11 had content first, conventions second, wrong path for conventions brief (`design-system/compositional-core/conventions-brief.md`), and referenced `merged-components.css`. The final SKILL.md corrects all three: conventions first (primacy), content second, correct path (`design-system/pipeline/conventions-brief.md`), and `components.css`.

### SIG-3: DRAFT-09 used 0.02em letter-spacing threshold; final brief uses 0.025em

**Status:** ALREADY FIXED in conventions brief. The DRAFT-09 Section 2 specified "No element should carry letter-spacing below 0.02em." The final conventions brief uses 0.025em (line 59), which matches the gate-runner SC-14 threshold (0.025em) and SKILL.md Section 10 (0.025em). Consistent across all three files.

### SIG-4: Weaver section in SKILL.md lacks explicit _pa-matrix.md structure

**Location:** SKILL.md lines 253-295 (weaver spawn prompt)
**Symptom:** The weaver is told to write `_pa-matrix.md` (line 294) and the synthesis describes the matrix (lines 270-276), but the matrix format is described as "56 questions x 9 auditors" without a concrete table template. The weaver must invent the format.
**Impact:** Low risk -- Opus weavers are capable of inventing reasonable table formats. But a concrete template would reduce variance.
**Recommendation:** Add a brief table format example (3-4 lines showing column headers: Question | A | B | C | D | E | F | G | H | I | Agreement).

### SIG-5: SKILL.md Section 3.2 gate table lists 12 gates but gate-runner.md has 21

**Location:** SKILL.md lines 121-134
**Symptom:** The SKILL.md gate table lists 12 specific gates (SC-01 through SC-13 excluding SC-12, SC-14, SC-15). The gate-runner.md defines 21 gates including SC-12, SC-14, SC-15, SC-13B, SC-16, DG-1 through DG-4, and behavioral gates BG-1/BG-2.
**Impact:** The SKILL.md Step 3.3 does mention "advisory gates SC-13B, SC-16 and deliverable gates DG-1 through DG-4" (line 138), which accounts for 6 more. SC-12, SC-14, and SC-15 are in the gate-runner but NOT in the SKILL.md gate table. However, the SKILL.md says "Run these 12 composition-critical gates" -- suggesting these 12 are a subset, with the full set defined in gate-runner.md. This is ambiguous: should the orchestrator run 12 or 21?
**Recommendation:** Clarify whether the SKILL.md is a subset (run only these 12 + the listed advisory/deliverable gates) or whether the gate-runner.md is the authoritative source (run all 21). Add a line: "For full gate specifications including SC-12, SC-14, SC-15, see gate-runner.md."

---

## MINOR FINDINGS

### MIN-1: Question count discrepancy (56 vs 57)

**Location:** flagship-pa-questions.md line 144 and SKILL.md auditor assignments
**Symptom:** flagship-pa-questions.md states "48 standard + 8 Tier 5 = 56 questions." Summing the SKILL.md auditor question counts: 9+5+13+6+6+6+3+5+4 = 57. This suggests one question is double-counted or the standard count is 49 not 48.
**Impact:** Negligible. The actual question assignments are clear; the total is a label.
**Fix:** Verify the exact standard question count and update the total.

### MIN-2: Convention brief word count claim

**Location:** Conventions brief line 403
**Symptom:** Brief claims "approximately 240 lines of world-description" but the actual file is 403 lines. The 240-line claim from the DRAFT-09 was carried forward despite the file being longer.
**Impact:** Cosmetic only. Does not affect pipeline operation.
**Fix:** Remove or update the approximate line count statement.

### MIN-3: No explicit "phase A/B/C/D" labels in conventions brief

**Location:** SKILL.md builder prompt lines 59-66
**Symptom:** The SKILL.md builder prompt references "Phase A: Read content" through "Phase D: Self-verify" but the conventions brief uses "Understand/Plan/Build/Verify" without phase letters. Builder must map A=Understand, B=Plan, C=Build, D=Verify mentally.
**Impact:** Low. The mapping is obvious from context.
**Fix:** Could add "(Phase A)" labels to the conventions brief PROCESS section, but this risks adding checklist flavor. Current state is acceptable.

### MIN-4: Conventions brief multi-coherence example uses 0.01em letter-spacing

**Location:** Conventions brief line 116
**Symptom:** The multi-coherence example says "letter-spacing tightens from 0.04em to 0.01em" but 0.01em is below the 0.025em minimum stated in Section 2. This creates a contradiction within the brief itself.
**Impact:** The builder reads this as an example of good multi-coherence, but the target value violates the perception threshold.
**Fix:** Change the example from "0.01em" to "0.03em" (or remove the letter-spacing from this example entirely). The example should model compliant behavior.

### MIN-5: Conventions brief Section 2 mentions "0.03em letter-spacing delta" as between-zone threshold

**Location:** Conventions brief line 59
**Symptom:** "Adjacent typographic zones become perceptibly different at 2px font-size delta and 0.03em letter-spacing delta." This is a between-zone delta. The minimum per-element is 0.025em. The gate (SC-14) checks per-element only (no values between 0 and 0.025em). There is no gate checking the between-zone 0.03em delta.
**Impact:** The between-zone delta is aspirational guidance only, not enforced. Builder may comply with 0.025em per-element but have adjacent zones at 0.025em and 0.026em (delta 0.001em, below the 0.03em perceptual delta). The gate would PASS but the zones would be perceptually identical in letter-spacing.
**Recommendation:** This is a known physics limitation -- gate SC-14 catches the per-element floor but cannot efficiently check between-zone deltas for all pairs. Acceptable as-is with the understanding that PA auditors will catch imperceptible between-zone differences.

---

## CROSS-REFERENCE VALIDATION

### Conventions Brief vs Gate Runner

| Threshold | Brief Value | Gate Runner Value | SKILL.md Value | Match? |
|-----------|-------------|-------------------|----------------|--------|
| Background delta | >= 15 RGB | >= 15 RGB (SC-09) | >= 15 RGB (SC-09 table) | YES |
| Stacked gap | 120px | <= 120px (SC-10) | <= 120px (SC-10 table, S10 restatement) | YES |
| Letter-spacing min | 0.025em | 0 to 0.025em exclusive (SC-14) | 0.025em (S10 restatement) | YES |
| Font-size delta | 2px | >= 2px body-detail (SC-11) | >= 2px (builder checkpoint) | YES |
| Component types | 10 (S2) / 8 (S9B) | >= 8 (SC-08) | >= 10 (builder checkpoint) | MISMATCH (BLK-2) |
| Border configs | >= 3 (S2) | >= 3 (SC-15) | Not in gate table | YES (brief-gate) |
| Channel shifts | >= 3 per boundary | >= 3 per, avg >= 4 (SC-13) | >= 3 per, avg >= 4 | YES |
| Zone count | 3-5 (S9B) | 3-5 (SC-12) | Not in gate table | YES (brief-gate) |
| ARIA landmarks | Not explicit | >= 5 (SC-06) | >= 5 | YES |
| Container width | 940-960px | 940-960px (SC-01) | 940-960px | YES |

### SKILL.md vs DRAFT-11

| Item | DRAFT-11 | Final SKILL.md | Status |
|------|----------|----------------|--------|
| Builder file order | Content first, conventions second | Conventions first, content second | FIXED |
| Conventions brief path | `design-system/compositional-core/conventions-brief.md` | `design-system/pipeline/conventions-brief.md` | FIXED |
| Component CSS reference | `merged-components.css` | `components.css` | FIXED |
| Weaver TOP-N | TOP-3 | TOP-5 | FIXED |
| Weaver void threshold | 108px | 120px | FIXED |
| PA matrix | Not in weaver prompt | Full _pa-matrix.md with agreement analysis | ADDED |
| Lock sheet | "NOT included" (DRAFT-11 amendment notes) | Full Step 4.5 with 3 categories | ADDED |
| Build log reflection | Not specified | BRIEF REFLECTION mandatory (3 items) | ADDED |
| Gate results path | `_verification/gate-results.json` | `_gate-results.json` (root level) | SIMPLIFIED |

### Flagship PA Questions vs SKILL.md Auditor Assignments

| Auditor | flagship-pa-questions.md | SKILL.md assignments | Match? |
|---------|--------------------------|---------------------|--------|
| A | PA-01,04,05,18,19,20,45 + PA-65,67 | PA-01,04,05,18,19,20,45,65,67 | YES |
| B | PA-02,06,07,08,29 | PA-02,06,07,08,29 | YES |
| C | PA-09,10,11,30,31,32,33,50,51,52,53 + PA-64,66 | PA-09,10,11,30,31,32,33,50,51,52,53,64,66 | YES |
| D | PA-12,13,34,35,36 + PA-62 | PA-12,13,34,35,36,62 | YES |
| E | PA-14,15,37,38,39 + PA-63 | PA-14,15,37,38,39,63 | YES |
| F | PA-16,17,40,41 + PA-60,61 | PA-16,17,40,41,60,61 | YES |
| G | PA-42,43,44 | PA-42,43,44 | YES |
| H | PA-21,22,23,46,47 | PA-21,22,23,46,47 | YES |
| I | PA-26,27,28,48 | PA-26,27,28,48 | YES |

All 9 auditor assignments match exactly between the two files.

---

## THREE NON-NEGOTIABLES VERIFICATION

1. **Container 940-960px:** STATED in conventions brief Section 1 (line 27), SKILL.md Section 0 (line 17), SKILL.md Section 10 (line 403), gate SC-01 in gate-runner.md AND SKILL.md gate table. PRESENT AND CONSISTENT.

2. **Warm palette R>=G>=B:** STATED in conventions brief Section 1 (palette locked, line 31-38), SKILL.md Section 0 (line 17), SKILL.md Section 10 (line 404), gate SC-04. PRESENT AND CONSISTENT.

3. **Perceptible CSS thresholds:**
   - >= 15 RGB bg delta: Brief S2, SKILL.md S10, gate SC-09. CONSISTENT.
   - >= 2px font-size delta: Brief S2, SKILL.md builder checkpoint, gate SC-11. CONSISTENT.
   - No letter-spacing below 0.025em: Brief S2, Brief S12, SKILL.md S10, gate SC-14. CONSISTENT.
   - No stacked gaps above 120px: Brief S2, SKILL.md S10, gate SC-10. CONSISTENT.

ALL THREE NON-NEGOTIABLES PRESENT AND INTERNALLY CONSISTENT.

---

## VERDICT

**Conventions Brief:** 4/5 -- High quality world-description document with strong format balance, specific thresholds, and comprehensive coverage. Two issues: one internal contradiction on component count (BLK-2) and one example that violates its own threshold (MIN-4).

**Build-Page SKILL.md:** 4/5 -- Comprehensive orchestration spec with correct file routing, proper lock sheet, TOP-5 weaver, and full instrumentation. Two issues: "8-question self-check" reference mismatch (BLK-1) and gate table subset ambiguity (SIG-5).

**Overall: NEEDS FIXES (2 BLOCKING)**

Both BLOCKING findings are single-value fixes (change "8-question" to "5-question"; harmonize component count to one number). Neither requires architectural changes. Estimated fix time: 5-10 minutes.

After fixing BLK-1 and BLK-2, the pipeline is READY FOR VALIDATION.

---

## RECOMMENDED FIXES

### BLOCKING (must fix before running pipeline)

1. **BLK-1:** In `~/.claude/skills/build-page/SKILL.md` line 66, change "8-question self-check" to "5-question self-check" (matching conventions brief Section 11's 5 questions).

2. **BLK-2:** Pick ONE component count and use it everywhere:
   - Option A (recommended): Change conventions brief Section 2 line 65 from "10 component families" to "8 component families" AND change SKILL.md line 62 from ">= 10 component classes" to ">= 8 component classes". This aligns everything to the gate threshold of 8.
   - Option B: Change gate SC-08 threshold from 8 to 10, and change conventions brief Section 9B from 8 to 10. This raises the bar.

### SIGNIFICANT (should fix before pipeline, but pipeline will still function)

3. **SIG-5:** Add a note to SKILL.md Section 3.2 clarifying that the 12-gate table is the composition-critical subset, and the full gate suite (including SC-12, SC-14, SC-15) is defined in `design-system/pipeline/gate-runner.md`.

### MINOR (fix at leisure)

4. **MIN-4:** Change conventions brief line 116 multi-coherence example from "0.01em" to "0.03em" to avoid contradicting the 0.025em minimum.

5. **MIN-2:** Remove or update the "approximately 240 lines" claim at line 403 of the conventions brief.
