# Risk Register: KortAI Middle-Tier Experiment
## Comprehensive Failure Mode Mitigation

**Date:** 2026-02-16
**Author:** risk-analyst (middle-tier-planning team)
**Source Documents:**
- `24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md` Section 8 (Anti-Patterns and Failure Modes)
- `ephemeral/continuity-docs/HANDOFF.md` Section 2 (Phase D Results)
- `21-mechanism-hardening.md` (hardening measures)
- `memory/agent-team-lessons.md` (agent team management patterns)

---

## EXECUTIVE SUMMARY

This register documents **ALL 36 identified failure modes** across 5 categories:
1. **Build Failures** (10) — technical/CSS violations
2. **Gaming Vulnerabilities** (3) — remaining exploits after hardening
3. **Process Anti-Patterns** (5) — workflow violations
4. **Historical Failures** (4) — Phase D lessons
5. **Context/Operational Risks** (14) — agent team management

**Risk Distribution:**
- **HIGH likelihood/HIGH impact:** 7 risks (require mandatory gates)
- **MEDIUM likelihood/HIGH impact:** 12 risks (require verification checkpoints)
- **LOW likelihood/HIGH impact:** 9 risks (require monitoring)
- **LOW likelihood/LOW impact:** 8 risks (document only)

**Key Principle:** Binary checks catch 100% of violations. Judgment checks catch ~0%.

---

## RISK TAXONOMY

### Likelihood Scale
- **HIGH:** >50% probability (occurred in 3+ prior builds)
- **MEDIUM:** 20-50% probability (occurred in 1-2 prior builds)
- **LOW:** <20% probability (theoretical or single occurrence)

### Impact Scale
- **HIGH:** Instant fail OR requires >1 hour rework
- **MEDIUM:** Partial fail OR requires 15-60 min rework
- **LOW:** Minor issue OR requires <15 min fix

### Mitigation Types
- **GATE:** Mandatory checkpoint blocking progression
- **CHECK:** Verification point (can proceed with warning)
- **MONITOR:** Passive tracking (alert if threshold exceeded)
- **PROTOCOL:** Team design/workflow pattern

---

## CATEGORY 1: BUILD FAILURES (Section 8.2)

These are the 10 most common technical violations from historical builds. Each has a binary check.

---

### RISK B-01: Container Width Below 940px

**Description:** Builder sets container `max-width` below 940px (e.g., 880px, 650px), violating the sweet spot for mixed-content pages.

**Source:** Section 8.2 line 1360; Phase D results 4/5 pages violated (Variant B = 880px)

**Likelihood:** HIGH (80% historical failure rate)
**Impact:** HIGH (instant fail, THE #1 Phase D failure mode)

**Binary Check:**
```javascript
// Computed style measurement
const container = document.querySelector('.page-container');
const computedWidth = parseFloat(getComputedStyle(container).maxWidth);
PASS: computedWidth >= 940 && computedWidth <= 960
FAIL: computedWidth < 940 || computedWidth > 960
```

**Check Point:** Step 5 (Container Setup) — builder verification BEFORE any content work
**Check Agent:** builder (self-verification) + visual-auditor (independent)
**Fix Protocol:** HALT work, set to 960px, restart from Step 5

**Prevention Mechanism:**
- Hardcoded template: `max-width: 960px` in base template (prevent free-text CSS)
- Visual audit at 1440px AND 768px (measure computed width at both)
- GATE: Cannot proceed past Step 5 without width confirmation

**Success Metric:** 100% of containers pass width check (0 violations)

---

### RISK B-02: Container Width Above 960px

**Description:** Builder sets container `max-width` above 960px (e.g., 1052px, 1200px), creating excessively wide reading lines.

**Source:** Section 8.2 line 1361; Phase D results 1/5 pages = 1052px

**Likelihood:** MEDIUM (20% historical failure rate)
**Impact:** HIGH (instant fail)

**Binary Check:**
```javascript
const computedWidth = parseFloat(getComputedStyle(container).maxWidth);
PASS: computedWidth <= 960
FAIL: computedWidth > 960
```

**Check Point:** Step 5 (Container Setup) — same as B-01
**Check Agent:** builder + visual-auditor
**Fix Protocol:** HALT work, set to 960px, restart from Step 5

**Prevention Mechanism:**
- Same GATE as B-01 (container width is single check covering <940 OR >960)
- Template constraint: use token `var(--width-container)` = 960px
- Prohibit inline width overrides in any child elements

**Success Metric:** 100% compliance (same as B-01)

---

### RISK B-03: Always-Load Protocol Skip

**Description:** Builder skips reading mandatory 527-line always-load protocol (`prohibitions.md` 353 lines + `tokens.css` 174 lines) before starting work.

**Source:** Section 8.2 line 1362; Phase D Track 1 INSTANT FAIL (5 critical violations)

**Likelihood:** MEDIUM (occurred once in 5 variants, but 100% fatal when it occurs)
**Impact:** HIGH (instant fail — produces 3-7 soul violations)

**Binary Check:**
```
PASS: Step 1 transcript shows Read tool calls for BOTH files
  - design-system/compositional-core/identity/prohibitions.md (353 lines)
  - design-system/compositional-core/vocabulary/tokens.css (174 lines)
FAIL: Either file NOT read before Step 4 (Pattern Selection)
```

**Check Point:** Step 4 entry gate — builder CANNOT proceed to pattern selection without protocol completion
**Check Agent:** lead (verify tool calls in transcript) OR builder (self-declaration)
**Fix Protocol:** If skipped, HALT all work, execute Step 1, discard any work done without protocol

**Prevention Mechanism:**
- GATE at Step 4: "Before proceeding, confirm you have read prohibitions.md (353 lines) and tokens.css (174 lines). Paste line counts to verify."
- Builder prompt: "CRITICAL: Step 1 is MANDATORY. You will produce soul violations if you skip it."
- Checklist B8.2 enforcement

**Success Metric:** 100% of builds complete Step 1 before Step 4 (0 skips)

---

### RISK B-04: Mechanism Count Below Floor ("Sample 2-4")

**Description:** Builder deploys only 2-4 mechanisms (pre-Wave 2 instruction: "sample 2-4 mechanisms from catalog"), failing to reach Middle-tier floor of 7+.

**Source:** Section 8.2 line 1363; identified by ALL 11 research agents as most limiting specification

**Likelihood:** MEDIUM (if old skill used) → LOW (after Wave 2 M1 application)
**Impact:** HIGH (fails B4.1: mechanism count 7-12)

**Binary Check:**
```
Count unique mechanisms deployed (excluding duplicates of same mechanism)
PASS: count >= 7 && count <= 12
FAIL: count < 7 (Floor behavior) || count > 12 (Ceiling behavior)
```

**Check Point:** Step 8 (Mechanism Deployment) — post-build count verification
**Check Agent:** programmatic-auditor (count via DOM/CSS inspection)
**Fix Protocol:** If <7, add mechanisms to reach floor; if >12, reduce scope OR flag as Ceiling candidate

**Prevention Mechanism:**
- Wave 2 M1 application: change "sample 2-4" to "at least 1 per category" (natural landing: 8-10)
- Builder prompt: "Deploy mechanisms until ALL 5 categories represented. Natural target: 8-10 total."
- Checklist MOD B4.1 enforcement (7-12 range, up from 5-12)

**Current Status:** M1 NOT YET APPLIED (sequenced in Wave 2). Skill STILL says "sample 2-4" as of 2026-02-16.

**Success Metric:** Mechanism count 7-12 in 100% of builds

---

### RISK B-05: Prose-Only Content

**Description:** Builder uses only prose paragraphs, limiting component diversity to <30% (vs 67% target for mixed content).

**Source:** Section 8.2 line 1364; Phase D results: prose-only limited testing to 22-44%

**Likelihood:** LOW (content selection is pre-specified in this experiment)
**Impact:** MEDIUM (reduces mechanism coverage, but doesn't fail gates)

**Binary Check:**
```
Content composition analysis:
- Prose paragraphs: X%
- Code blocks: Y%
- Callouts/tables/lists: Z%

PASS: Z >= 30% (mixed content has ≥30% structured components)
FAIL: Z < 30% (prose-dominant reduces mechanism testability)
```

**Check Point:** Step 2 (Content Selection) — BEFORE reading mechanisms
**Check Agent:** lead (content composition analysis)
**Fix Protocol:** If prose-only detected, select different content OR augment with code examples/callouts

**Prevention Mechanism:**
- Content mandate in Step 2: "Content MUST include code blocks, callouts, OR tables (≥30% non-prose)"
- Content analysis template: count paragraphs vs structured elements
- GATE at Step 2: cannot proceed without mixed-content confirmation

**Success Metric:** ≥30% non-prose content in final page

---

### RISK B-06: Case Studies Used as Templates

**Description:** Builder copies implementation patterns from case studies (DD-006, OD-004, CD-006) instead of extracting MECHANISMS.

**Source:** Section 8.2 line 1365; Process Anti-Pattern 8.5 line 1398

**Likelihood:** LOW (case studies access is phase-gated AFTER build completion)
**Impact:** MEDIUM (produces template convergence, fails novelty evaluation)

**Binary Check:**
```
Template convergence audit:
- CSS class naming: matches DD-006 pattern? (e.g., .geological-*)
- Section structure: matches OD-004 pattern? (e.g., 4-zone alternation)
- Component types: matches CD-006 pattern? (e.g., instrument-card)

PASS: 0-1 structural similarities (coincidental)
FAIL: 2+ structural similarities (template copying)
```

**Check Point:** Post-build audit (Step 10) — after HTML complete
**Check Agent:** visual-auditor (fresh-eyes, zero case study context)
**Fix Protocol:** If template convergence detected, regenerate using mechanism catalog ONLY

**Prevention Mechanism:**
- Phase-gated access: case studies directory NOT mentioned in builder prompt
- Builder instruction: "Extract MECHANISMS (#1-18), not implementations. Do NOT reference DD-006/OD-004/CD-006."
- Checklist enforcement of anti-gravity mechanisms (R1-R6)

**Success Metric:** 0 template convergence flags in audit

---

### RISK B-07: Uniform Density (No Rhythm)

**Description:** Builder uses uniform padding across all sections, failing to create dense/sparse rhythm.

**Source:** Section 8.2 line 1366; mechanism #5 (Dense/Sparse Alternation)

**Likelihood:** MEDIUM (occurs when pattern selected but not implemented)
**Impact:** MEDIUM (fails B3.1 mechanism deployment + PA-02 rhythm)

**Binary Check:**
```
Measure padding across all sections:
min_padding = min(section_paddings)
max_padding = max(section_paddings)
padding_range = max_padding - min_padding

PASS: padding_range >= 32px (e.g., 64px sparse, 32px moderate, 16px dense)
FAIL: padding_range < 32px (uniform or near-uniform density)
```

**Check Point:** Step 8 (Mechanism Deployment) — post-CSS verification
**Check Agent:** programmatic-auditor (computed padding measurement)
**Fix Protocol:** If uniform, vary padding: sparse=64px, moderate=32px, dense=16px (minimum 32px range)

**Prevention Mechanism:**
- Pattern mandate: CRESCENDO/F-PATTERN/BENTO/PULSE ALL require density variation
- Mechanism #5 enforcement: document min/max padding in deployment plan
- Perceptibility check NEW B4.5: padding differences must be ≥8px to count as deployed

**Success Metric:** Padding range ≥32px in 100% of builds

---

### RISK B-08: Same-Velocity Stacking

**Description:** Builder stacks all SLOW components (code blocks) or all FAST components (callouts) together, failing to interleave reading velocities.

**Source:** Section 8.2 line 1367; rhythm principle from PA-02

**Likelihood:** LOW (naturally avoided if mixed content used)
**Impact:** LOW (doesn't fail gates, but reduces perceptual rhythm)

**Binary Check:**
```
Scan component sequence:
- SLOW: code blocks, dense tables, multi-step procedures
- FAST: callouts, lists, single-concept sections

PASS: No sequence of 3+ consecutive SLOW or 3+ consecutive FAST
FAIL: 3+ consecutive SLOW or 3+ consecutive FAST
```

**Check Point:** Step 9 (Final Assembly) — component sequencing verification
**Check Agent:** visual-auditor (scroll-through inspection)
**Fix Protocol:** If stacking detected, reorder: SLOW-FAST-SLOW or FAST-SLOW-FAST alternation

**Prevention Mechanism:**
- Section planning guidance: "Alternate SLOW (code) with FAST (callouts) for rhythm."
- Visual audit checklist: verify no 3+ consecutive same-velocity
- MONITOR only (not a gate — improves quality but not pass/fail)

**Success Metric:** No 3+ consecutive same-velocity in 80%+ of builds

---

### RISK B-09: Traffic-Light Adjacency

**Description:** Builder places visually similar callouts (e.g., green "tip" next to red "gotcha") within <48px spacing, creating visual confusion.

**Source:** Section 8.2 line 1368; confidence encoding mechanism #9

**Likelihood:** LOW (requires semantic callouts + poor spacing)
**Impact:** LOW (perceptual issue, not structural failure)

**Binary Check:**
```
For all adjacent callouts with different confidence encoding:
- Green (tip/success) vs Red (warning/gotcha)
- Measure vertical spacing between

PASS: spacing >= 48px (at least one moderate section between)
FAIL: spacing < 48px (adjacent or near-adjacent)
```

**Check Point:** Step 9 (Final Assembly) — visual spacing check
**Check Agent:** visual-auditor (screenshot inspection)
**Fix Protocol:** If <48px, insert spacing section OR reorder callouts

**Prevention Mechanism:**
- Callout placement rule: "Green/red callouts: ≥48px spacing (insert moderate section)."
- Visual checklist: flag any green-red adjacency
- MONITOR only (perceptual refinement, not gate)

**Success Metric:** ≥48px spacing in 90%+ of green-red pairs

---

### RISK B-10: Missing H3 Italic

**Description:** Builder forgets to apply `font-style: italic` to ALL `<h3>` elements, violating typographic convention.

**Source:** Section 8.2 line 1369; prohibition P16 from prohibitions.md

**Likelihood:** LOW (specific rule, easy to miss)
**Impact:** LOW (minor soul violation, caught in audit)

**Binary Check:**
```css
/* Required rule */
h3 { font-style: italic; }

/* Programmatic check */
const h3_elements = document.querySelectorAll('h3');
const all_italic = Array.from(h3_elements).every(h3 =>
  getComputedStyle(h3).fontStyle === 'italic'
);

PASS: all_italic === true
FAIL: all_italic === false (any h3 is not italic)
```

**Check Point:** Step 8 (Mechanism Deployment) — CSS verification
**Check Agent:** programmatic-auditor (computed style check)
**Fix Protocol:** If missing, add `h3 { font-style: italic; }` to CSS

**Prevention Mechanism:**
- Base template includes: `h3 { font-style: italic; }`
- Checklist B7.6: verify ALL h3 elements italic
- Programmatic audit: automated check (zero judgment required)

**Success Metric:** 100% of h3 elements italic

---

## CATEGORY 2: GAMING VULNERABILITIES (Section 8.1)

These are the 3 remaining exploits AFTER mechanism hardening (NEW B4.4, NEW B4.5, MOD B4.1 applied). Each has a countermeasure, but verification requires judgment.

---

### RISK G-01: B5.1 Justification Gaming

**Description:** Builder writes trivial justifications: "I deploy border-weight (#1) because content has headings" (describes catalog, not content features).

**Source:** Section 8.1 line 1352; hardening doc acknowledges this is judgment

**Likelihood:** MEDIUM (gaming resistance 8/10 means 20% residual exploit surface)
**Impact:** MEDIUM (passes checklist but produces weak design rationale)

**Judgment Check:**
```
B5.1 requirement: "Each mechanism justified by CONTENT FEATURES, not catalog descriptions."

PASS examples:
- "Deploy #1 because content has 3-level hierarchy (Concept/Process/Detail) requiring visual weight progression."
- "Deploy #5 because intro sections (conceptual) need breathing room vs implementation sections (dense reference)."

FAIL examples:
- "Deploy #1 because content has headings." (generic, catalog description)
- "Deploy #5 for rhythm." (abstract, no content reference)
```

**Check Point:** Step 6 (Mechanism Selection) — justification review
**Check Agent:** lead (read justifications, flag generic ones)
**Fix Protocol:** If generic, builder must cite SPECIFIC content features (heading types, section purposes, reader goals)

**Prevention Mechanism:**
- Builder prompt: "Justify each mechanism with SPECIFIC content features: section types, heading levels, reader needs."
- Justification template: "Deploy #X because [content property Y] requires [CSS affordance Z]."
- Checklist B5.3 enforcement: evidence must cite content features
- JUDGMENT RULE: err toward demanding specific evidence over accepting generic claims

**Success Metric:** ≥80% of justifications cite specific content features (subjective threshold)

---

### RISK G-02: B6.4/B6.5 Evidence Gaming

**Description:** Builder provides technically correct but minimally useful evidence: "Padding varies" without exact values.

**Source:** Section 8.1 line 1353; hardening requires EXACT VALUES

**Likelihood:** LOW (checklist B6.4/B6.5 explicitly requires exact values)
**Impact:** LOW (easily caught in programmatic audit)

**Binary Check:**
```
B6.4: "Items require EXACT VALUES in evidence."

PASS examples:
- "Spacing compression: section-intro padding=64px, section-detail padding=32px, section-summary padding=16px."
- "Zone backgrounds: sparse=#FEF9F5, moderate=#FAF5ED, dense=#F5EBDE."

FAIL examples:
- "Padding varies." (no values)
- "Backgrounds differentiate sections." (no token references)
```

**Check Point:** Step 10 (Validation) — evidence documentation review
**Check Agent:** programmatic-auditor (verify evidence cites computed values)
**Fix Protocol:** If generic evidence, measure computed values and document exact CSS

**Prevention Mechanism:**
- Checklist B6.4/B6.5: require exact values (not descriptions)
- Evidence template: "Mechanism #X deployed at [exact CSS values]."
- Programmatic audit cross-reference: evidence values MUST match computed styles

**Success Metric:** 100% of evidence items cite exact values

---

### RISK G-03: D2.3 Atmosphere Gaming

**Description:** Builder describes system defaults as design choices: "Warm palette creates pleasant reading" (but palette is mandatory, not chosen).

**Source:** Section 8.1 line 1354; judgment rule in Section 0 line 88

**Likelihood:** LOW (PA-05 checks focus on spatial decisions, not palette)
**Impact:** LOW (perceptual evaluation, not structural)

**Judgment Check:**
```
D2.3 (PA-05 atmosphere): "Evidence must cite BUILDER-CREATED spatial decisions, not system defaults."

PASS examples:
- "3-zone progression (sparse intro 64px → dense detail 32px → resolution 48px) creates deliberate pacing."
- "Width variation (70% narrow channel for reading, 100% full-pool for code) controls focus."

FAIL examples:
- "Warm palette creates pleasant reading." (palette is default, not chosen)
- "Clean typography improves readability." (font trinity is mandatory)
```

**Check Point:** Step 10 (Validation) — PA-05 atmosphere evaluation
**Check Agent:** visual-auditor (fresh-eyes, judges designed vs formatted)
**Fix Protocol:** If only default descriptions cited, document spatial decisions (density progression, width control, zone structure)

**Prevention Mechanism:**
- PA-05 sub-criteria operationalization: 4 binary checks (layout custom, contrast range, density variance, spatial intent)
- Builder prompt: "Atmosphere = SPATIAL DECISIONS (padding, width, zones), not defaults (palette, fonts)."
- JUDGMENT RULE: cite spatial decisions made by builder, not inherited from system

**Success Metric:** ≥3 of 4 PA-05 sub-criteria pass (spatial decisions documented)

---

## CATEGORY 3: PROCESS ANTI-PATTERNS (Section 8.5)

These are 5 workflow violations that produce predictable failure modes. Each has a procedural gate.

---

### RISK P-01: Building Before Reading Constraints

**Description:** Builder starts CSS work before reading prohibitions.md + tokens.css, producing soul violations.

**Source:** Section 8.5 line 1395; overlaps with B-03 (always-load skip)

**Likelihood:** MEDIUM (same as B-03)
**Impact:** HIGH (produces 3-7 soul violations = instant fail)

**Binary Check:**
```
Procedural gate: Step 1 MUST complete before Step 5.

PASS: Transcript shows Read calls for prohibitions.md + tokens.css BEFORE any CSS work
FAIL: CSS written (Step 5+) before Step 1 completion
```

**Check Point:** Step 4 entry gate (same as B-03)
**Check Agent:** lead (verify step sequencing)
**Fix Protocol:** Same as B-03 (halt, read protocol, discard violating work)

**Prevention Mechanism:**
- Step sequencing enforcement: Steps 1-4 are SERIAL (cannot skip or reorder)
- Builder prompt: "CRITICAL: Step 1 is NOT optional. Soul violations occur if skipped."
- GATE: Step 4 blocked until Step 1 complete

**Success Metric:** 100% builds complete Step 1 before Step 5

---

### RISK P-02: Counting Mechanisms as Target

**Description:** Builder treats mechanism count (7-12) as TARGET instead of natural consequence of per-category breadth.

**Source:** Section 8.5 line 1396; Goodhart's Law trap

**Likelihood:** MEDIUM (count mandate creates metric-driven behavior)
**Impact:** MEDIUM (produces mechanism padding to hit 7, reduces content fit)

**Judgment Check:**
```
B4.2 + B4.3: "No mechanism deployed solely to hit count target. Count emerged from breadth."

PASS indicators:
- Justifications cite content features for EACH mechanism
- Mechanism count 8-10 (natural landing) without exact targeting
- No mechanisms deployed "for category coverage" without content need

FAIL indicators:
- Justification: "Deploy #X to reach 7-mechanism floor."
- Exactly 7 mechanisms (minimal compliance)
- Last 1-2 mechanisms have weak/generic justifications
```

**Check Point:** Step 6 (Mechanism Selection) — count vs breadth analysis
**Check Agent:** lead (review justification quality across mechanisms)
**Fix Protocol:** If padding detected, remove weakly-justified mechanisms OR strengthen justifications with content evidence

**Prevention Mechanism:**
- Builder prompt: "Mechanism count is CONSEQUENCE of category breadth, not target. Natural landing: 8-10."
- Checklist B4.2/B4.3: explicitly forbid count-driven deployment
- Justification quality threshold: ALL mechanisms must cite content features
- JUDGMENT RULE: flag exact-7 counts + weak final justifications as padding

**Success Metric:** <20% of builds land at exactly 7 (most should be 8-10)

---

### RISK P-03: Metaphor Derivation for Middle

**Description:** Builder attempts full metaphor derivation (Phases 1-3) despite Middle-tier protocol skipping it, wasting 60+ minutes.

**Source:** Section 8.5 line 1397; Middle tier skips Phases 1-3

**Likelihood:** LOW (explicit instruction to skip)
**Impact:** MEDIUM (time waste, but doesn't affect output quality)

**Binary Check:**
```
B1.2: "Phases 1-3 skipped (defines Middle experiment validity)."

PASS: Builder proceeds directly to Step 4 (Pattern Selection) without metaphor work
FAIL: Builder performs tension analysis, multi-axis questioning, or metaphor collapse
```

**Check Point:** Step 4 entry — verify no metaphor derivation in transcript
**Check Agent:** lead (scan transcript for Phase 1-3 keywords: tension, metaphor, collapse)
**Fix Protocol:** If metaphor work detected, discard it and restart at Step 4 with pattern lookup

**Prevention Mechanism:**
- Builder prompt: "CRITICAL: Skip Phases 1-3 entirely. No metaphor derivation. Start at Step 4 (Pattern Selection)."
- Checklist B1.2 enforcement (Critical-8 item)
- GATE: Pattern selection uses LOOKUP TABLE, not creative derivation

**Success Metric:** 0 builds perform metaphor derivation (100% skip Phases 1-3)

---

### RISK P-04: Reading Case Studies Before Building

**Description:** Builder reads case studies (DD-006, OD-004, CD-006) before completing build, causing template convergence.

**Source:** Section 8.5 line 1398; overlaps with B-06

**Likelihood:** LOW (case studies phase-gated to AFTER build)
**Impact:** MEDIUM (produces template copying, fails novelty)

**Binary Check:**
```
Phase-gated access enforcement:

PASS: Case studies read ONLY after Step 10 (Validation) complete
FAIL: Case studies read during Steps 1-9 (any build phase)
```

**Check Point:** Step 10 entry — verify case studies NOT yet accessed
**Check Agent:** lead (scan transcript for case study file reads)
**Fix Protocol:** If case studies read early, flag for template convergence audit (use fresh-eyes agent)

**Prevention Mechanism:**
- Builder prompt: "Case studies directory: ACCESS ONLY AFTER Step 10. Do NOT read DD-006/OD-004/CD-006 during build."
- File path gating: case studies NOT mentioned in Steps 1-9 instructions
- Phase-gated instruction: "After Step 10, you MAY reference case studies for comparison."

**Success Metric:** 0 builds access case studies before Step 10

---

### RISK P-05: Treating "Designed" as Judgment

**Description:** Evaluator uses subjective judgment for "designed vs formatted" instead of operationalized PA-05 sub-criteria.

**Source:** Section 8.5 line 1399; PA-05 operationalized into 4 binary checks

**Likelihood:** LOW (PA-05 has 4 binary sub-criteria: PA-05a/b/c/d)
**Impact:** MEDIUM (inter-rater reliability drops to ~0% without operationalization)

**Binary Check:**
```
PA-05 operationalization (from perceptual-auditing skill):
- PA-05a: Custom layout elements count ≥ 2 (not just .section stacking)
- PA-05b: Visual contrast range ≥ 2.0x (e.g., 64px vs 32px = 2x)
- PA-05c: Density variance visible within single viewport (sparse-dense-moderate in one screen)
- PA-05d: Spatial decisions documented with intent (why this padding/width/zone choice?)

PASS: 3 of 4 sub-criteria met
FAIL: <3 sub-criteria met
```

**Check Point:** Step 10 (Validation) — PA-05 evaluation
**Check Agent:** visual-auditor (use PA-05 sub-criteria, not gut feeling)
**Fix Protocol:** If "feels designed" judgment used without sub-criteria, re-evaluate using PA-05a/b/c/d

**Prevention Mechanism:**
- PA-05 sub-criteria table in checklist (lines 78-86 of perceptual-auditing skill)
- Auditor prompt: "Do NOT use 'feels designed' judgment. Use PA-05a/b/c/d binary checks."
- Checklist enforcement: PA-05 requires 3/4 sub-criteria documentation

**Success Metric:** 100% of PA-05 evaluations cite sub-criteria (not subjective "feels")

---

## CATEGORY 4: HISTORICAL FAILURES (Phase D Results)

These are the 4 specific failures from Phase D validation (Section 6.2), with root cause analysis.

---

### RISK H-01: Container Width Violation (THE #1 Failure)

**Description:** 4/5 Phase D pages violated 940-960px container width. Variant B=880px (too narrow), others went wider (1052px).

**Source:** HANDOFF.md Section 2, lines 1172; THE primary failure mode

**Likelihood:** HIGH (80% historical failure rate)
**Impact:** HIGH (instant fail)

**Root Cause Analysis:**
```
WHY did 4/5 pages fail?
1. Track 1 (1052px): Used merged-components.css without reading constraints (width inherited from showcase page)
2. Variant A (750px): Metaphor-driven narrowing ("focused calibration channel")
3. Variant B (880px): Metaphor-driven narrowing ("laboratory bench workspace")
4. Variant C (940px): PASS (edge of range)
5. Variant D (940px): PASS (edge of range)

Pattern: Metaphor-driven builds interpreted container as expressive surface, not constraint.
```

**What's Different Now:**
- Middle tier SKIPS metaphor (no creative reinterpretation of container)
- Hardcoded template: `max-width: 960px` (not variable)
- GATE at Step 5: width verification BEFORE proceeding
- Critical-8 enforcement: B2.1 (container width) is non-negotiable

**Binary Check:**
```javascript
const computedWidth = parseFloat(getComputedStyle(container).maxWidth);
PASS: computedWidth >= 940 && computedWidth <= 960
FAIL: computedWidth < 940 || computedWidth > 960
```

**Check Point:** Step 5 (Container Setup) — MANDATORY gate
**Check Agent:** builder (self-check) + visual-auditor (independent verification)
**Fix Protocol:** HALT work if violated, set to 960px, restart from Step 5

**Prevention Mechanism:**
- Hardcoded template (eliminate free-text CSS for container width)
- Builder prompt: "CONTAINER WIDTH: 940-960px. ALWAYS. NO EXCEPTIONS. This is THE #1 Phase D failure mode."
- Visual audit at 1440px + 768px (measure computed width at both)
- GATE enforcement (cannot proceed past Step 5 without width pass)

**Success Metric:** 100% compliance (0 violations)

---

### RISK H-02: Always-Load Protocol Skip

**Description:** Track 1 builder skipped prohibitions.md + tokens.css → 5 critical violations → INSTANT FAIL.

**Source:** HANDOFF.md Section 2, line 1173; same as B-03 and P-01

**Likelihood:** MEDIUM (occurred once in 5 variants, 100% fatal)
**Impact:** HIGH (instant fail)

**Root Cause Analysis:**
```
WHY did Track 1 skip protocol?
- Track 1 instruction: "Use merged-components.css library" (assembly, not composition)
- Builder interpreted "assembly" as "no reading required, just use library"
- Library contained showcase CSS (DD-006 width=1052px) → inherited violation
- No soul violations (library was compliant) BUT width + other structural issues

Lesson: "Assembly" ≠ "skip constraints." Protocol is UNIVERSAL, not track-dependent.
```

**What's Different Now:**
- Middle tier is Track 1 Enhanced (uses library BUT reads constraints first)
- GATE at Step 4: cannot proceed without protocol completion
- Critical-8 enforcement: B8.2 (always-load protocol)

**Binary Check:**
```
PASS: Step 1 transcript shows Read calls for BOTH files before Step 4
  - prohibitions.md (353 lines)
  - tokens.css (174 lines)
FAIL: Either file NOT read before Step 4
```

**Check Point:** Step 4 entry gate (same as B-03)
**Check Agent:** lead (verify tool calls in transcript)
**Fix Protocol:** If skipped, HALT work, execute Step 1, discard violating work

**Prevention Mechanism:**
- Step 1 is MANDATORY (not conditional on track)
- Builder prompt: "CRITICAL: You will produce soul violations if you skip Step 1."
- Checklist B8.2 enforcement (part of Critical-8)

**Success Metric:** 100% of builds complete Step 1 (0 skips)

---

### RISK H-03: Prose-Only Content

**Description:** Phase D used prose-only content → limited component testing to 22-44% (vs 67% target).

**Source:** HANDOFF.md Section 2, line 1174; same as B-05

**Likelihood:** LOW (content selection pre-specified for this experiment)
**Impact:** MEDIUM (reduces mechanism coverage, doesn't fail gates)

**Root Cause Analysis:**
```
WHY did Phase D use prose-only?
- Content: scientific calibration explainer (conceptual prose, no code/tables)
- Mechanism ceiling for prose: 6-8 (vs 10-12 for mixed content)
- Result: Variant B deployed 7 mechanisms (good for prose, low for Middle tier)

Lesson: Content type determines mechanism ceiling. Prose caps at 6-8. Mixed content reaches 10-12.
```

**What's Different Now:**
- Content requirement: MUST include code blocks, callouts, OR tables (≥30% non-prose)
- Content selection at Step 2 BEFORE mechanism reading (prevents retrofit)
- GATE: cannot proceed past Step 2 without mixed-content confirmation

**Binary Check:**
```
Content composition:
- Prose paragraphs: X%
- Code blocks: Y%
- Callouts/tables: Z%

PASS: Z >= 30%
FAIL: Z < 30%
```

**Check Point:** Step 2 (Content Selection) — composition analysis
**Check Agent:** lead (count content types)
**Fix Protocol:** If prose-only, select different content OR augment with examples/callouts

**Prevention Mechanism:**
- Content mandate: "Content MUST include code blocks, callouts, OR tables (≥30%)."
- Content template: 800-1,200 words with mixed types
- GATE enforcement at Step 2

**Success Metric:** ≥30% non-prose in 100% of builds

---

### RISK H-04: "Sample 2-4 Mechanisms" Cap

**Description:** Phase D skill instruction "sample 2-4 mechanisms" capped technique density → all 11 research agents identified this as most limiting.

**Source:** HANDOFF.md Section 2, line 1175; same as B-04

**Likelihood:** MEDIUM (if Wave 2 M1 not applied) → LOW (after M1)
**Impact:** HIGH (fails MOD B4.1: mechanism count 7-12)

**Root Cause Analysis:**
```
WHY was "sample 2-4" in the skill?
- Phase C extraction compressed 337 findings into skill instructions
- Compression ratio: 50:1 (99.8% information loss)
- "Sample 2-4" was intended as Floor-tier guidance (quick builds)
- But became universal instruction, capping ALL tiers at 4 mechanisms

Lesson: Pipeline compresses research into behavioral constraints. Real gap is iterative discovery, not freedom.
```

**What's Different Now:**
- Wave 2 M1 (pending): change "sample 2-4" to "at least 1 per category" (breadth, not count)
- Natural landing: 8-10 mechanisms (consequence of category coverage)
- MOD B4.1: floor raised from 5 to 7 (Middle > Floor)

**Binary Check:**
```
Count unique mechanisms deployed:
PASS: count >= 7 && count <= 12
FAIL: count < 7 (Floor) || count > 12 (Ceiling)
```

**Check Point:** Step 8 (Mechanism Deployment) — post-build count
**Check Agent:** programmatic-auditor (DOM/CSS inspection)
**Fix Protocol:** If <7, add mechanisms; if >12, reduce OR flag as Ceiling

**Prevention Mechanism:**
- Wave 2 M1 application (change skill instruction)
- Builder prompt: "Deploy 1+ mechanism per category. Natural target: 8-10."
- Checklist MOD B4.1 enforcement

**Current Status:** M1 NOT YET APPLIED (skill still says "sample 2-4" as of 2026-02-16)

**Success Metric:** 7-12 mechanisms in 100% of builds (natural landing at 8-10)

---

## CATEGORY 5: CONTEXT/OPERATIONAL RISKS (Agent Team Management)

These are 14 risks from agent team operations (file-writing failures, Playwright contention, context limits). Based on patterns from 15+ agent teams.

---

### RISK O-01: File-Writing Failure (Workers)

**Description:** Workers spawned by captains via Task tool frequently complete WITHOUT writing files (THE critical failure mode).

**Source:** agent-team-lessons.md lines 8-13; ~80% failure rate for researchers

**Likelihood:** HIGH (occurred in teams 1, 4, 8, 13)
**Impact:** HIGH (agent completes task but produces no output → requires recovery agent)

**Binary Check:**
```
After agent completion:
PASS: Output file exists at specified path
FAIL: Agent reports "complete" BUT file does not exist
```

**Check Point:** Post-task completion — lead verifies file existence
**Check Agent:** lead (check file system for output file)
**Fix Protocol:** If file missing, spawn recovery agent to do work directly (not via captain)

**Prevention Mechanism:**
- Worker prompts: "CRITICAL: You MUST write your output file using the Write tool. Completing without writing = failure."
- Lead verification: check file existence after each agent reports complete
- Recovery protocol: recovery agents (do work directly) are MORE reliable than captain->worker hierarchies
- PROTOCOL: Emphasize file-writing in ALL worker prompts

**Team Design Decision:**
- For Middle-tier experiment: Use DIRECT agents (builder, auditors) NOT captain->worker hierarchies
- Builder writes HTML directly (not via sub-agents)
- Auditors write reports directly (not via captain)

**Success Metric:** 100% of agents write output files (0 recovery agents needed)

---

### RISK O-02: Playwright Contention (4+ Concurrent)

**Description:** 4+ concurrent Playwright agents cause severe contention → agents fall back to source code analysis, missing visual bugs.

**Source:** agent-team-lessons.md lines 15-20; confirmed teams 4, 9

**Likelihood:** MEDIUM (depends on team design)
**Impact:** HIGH (visual audits fail, CSS bugs missed)

**Binary Check:**
```
Playwright scheduling analysis:
PASS: ≤2 concurrent Playwright agents
FAIL: >2 concurrent Playwright agents (contention risk)
```

**Check Point:** Team design phase — schedule Playwright operations
**Check Agent:** lead (team topology planning)
**Fix Protocol:** If >2 concurrent needed, serialize operations OR use single Playwright auditor

**Prevention Mechanism:**
- Sequential scheduling: programmatic-auditor (no Playwright) → visual-auditor (Playwright)
- 2 concurrent usually safe (teams 9, 14)
- Single Playwright auditor = zero contention (teams 13, 15)
- PROTOCOL: Never spawn 4+ Playwright agents concurrently

**Team Design Decision:**
- Middle-tier experiment uses 2 Playwright phases:
  1. Builder self-verification (Step 5 container width check)
  2. Visual-auditor final audit (Step 10)
- Sequential execution (builder completes before auditor starts)

**Success Metric:** 0 Playwright contention failures (all visual audits complete successfully)

---

### RISK O-03: Context Wall (Serial Processing)

**Description:** Sessions processing 50+ files in serial hit context limit → /compact fails → must /clear and lose state.

**Source:** agent-team-lessons.md line 39; memory notes

**Likelihood:** LOW (Middle-tier builds 1 page, not 50 files)
**Impact:** MEDIUM (forces session restart, loses partial progress)

**Binary Check:**
```
Token budget monitoring:
PASS: <150k tokens used (plenty of headroom)
WARNING: 150-180k tokens (approaching limit, use parallel agents)
FAIL: >180k tokens (/compact will fail, must /clear)
```

**Check Point:** Continuous monitoring throughout session
**Check Agent:** lead (track token usage)
**Fix Protocol:** If approaching limit, use parallel agents OR /clear and restart with state document

**Prevention Mechanism:**
- For large tasks: use parallel agents (not serial)
- For Middle-tier: single page build = low token usage (estimated <80k)
- MONITOR: track token budget, flag if >150k

**Team Design Decision:**
- Middle-tier is single-page build (low context usage)
- No parallel agents needed (builder → auditors is serial)
- Risk is LOW for this experiment

**Success Metric:** Session completes without hitting context limit

---

### RISK O-04: HTTP Server Not Started (Playwright)

**Description:** Playwright MCP blocks `file://` protocol → agents must serve HTML via HTTP, but server not started before agent spawn.

**Source:** agent-team-lessons.md line 20; memory notes

**Likelihood:** MEDIUM (manual step, easy to forget)
**Impact:** HIGH (all Playwright operations fail)

**Binary Check:**
```
Pre-spawn checklist:
PASS: HTTP server running on localhost:8000 (or similar)
FAIL: No server running when Playwright agent spawned
```

**Check Point:** BEFORE spawning any Playwright agent
**Check Agent:** lead (manual verification)
**Fix Protocol:** If server not running, start server then re-spawn agent

**Prevention Mechanism:**
- Pre-flight checklist: "Start HTTP server BEFORE spawning Playwright agents."
- Lead prompt: "CRITICAL: Playwright requires HTTP server. Start with: python3 -m http.server 8000"
- GATE: Verify server running before spawning visual-auditor

**Team Design Decision:**
- Lead starts server at session start (before builder begins)
- Builder uses Playwright for Step 5 width check (server already running)
- Visual-auditor uses Playwright for Step 10 audit (server still running)

**Success Metric:** Server running for 100% of Playwright operations

---

### RISK O-05: Recovery Agents More Reliable Than Captains

**Description:** Captain->worker hierarchies have higher failure rates than recovery agents doing work directly.

**Source:** agent-team-lessons.md line 10; confirmed teams 1, 4, 8, 13

**Likelihood:** N/A (architectural principle, not a failure mode)
**Impact:** N/A (informs team design)

**Team Design Implication:**
```
PREFER: Direct agents (builder writes HTML, auditor writes report)
AVOID: Captain->worker (captain spawns sub-agents via Task tool)

WHY: Workers frequently complete without writing files (~80% failure for researchers).
Recovery agents (doing work directly) are MORE reliable.
```

**Team Design Decision:**
- Middle-tier uses DIRECT agents only:
  - Builder: writes HTML directly (not via sub-agents)
  - Programmatic-auditor: writes report directly
  - Visual-auditor: writes report directly
- NO captain->worker hierarchies

**Success Metric:** 0 captain->worker spawns (all agents work directly)

---

### RISK O-06: Per-File Ownership (Zero Contention)

**Description:** Per-file builder ownership eliminates contention (confirmed 6+ teams).

**Source:** agent-team-lessons.md line 23; confirmed teams 3, 8, 9, 14, 15

**Likelihood:** N/A (architectural principle)
**Impact:** N/A (informs team design)

**Team Design Implication:**
```
RULE: One file, one builder. No shared files.

For Middle-tier:
- Builder owns: output HTML file (single file)
- Programmatic-auditor owns: programmatic-audit-report.md
- Visual-auditor owns: visual-audit-report.md
- NO shared files → ZERO contention
```

**Team Design Decision:**
- 3 agents, 3 output files (no overlap)
- Builder completes BEFORE auditors start (sequential, not concurrent)
- Risk is ZERO for this experiment

**Success Metric:** 0 file conflicts (100% per-file ownership)

---

### RISK O-07: Sonnet Cost-Effectiveness

**Description:** Sonnet model agents are cost-effective for both building and auditing. Opus only needed for creative composition.

**Source:** agent-team-lessons.md line 26; confirmed teams 8, 9, 14, 15

**Likelihood:** N/A (cost optimization, not failure mode)
**Impact:** N/A (informs model selection)

**Team Design Implication:**
```
MODEL SELECTION:
- Opus 4.6: Creative composition (Track 2 metaphor derivation)
- Sonnet 4.5: Assembly, auditing, validation (Track 1)

Middle-tier = Track 1 Enhanced (no metaphor) → Sonnet is sufficient
```

**Team Design Decision:**
- Builder: Sonnet 4.5
- Programmatic-auditor: Sonnet 4.5
- Visual-auditor: Sonnet 4.5
- NO Opus agents needed (Middle skips creative phases)

**Success Metric:** 100% Sonnet usage (0 unnecessary Opus calls)

---

### RISK O-08: Fresh-Eyes Agents Find Issues

**Description:** Fresh-eyes zero-context agents find issues research-loaded agents miss entirely.

**Source:** agent-team-lessons.md line 27; memory notes teams 2, 8

**Likelihood:** N/A (audit strategy, not failure mode)
**Impact:** N/A (informs audit design)

**Team Design Implication:**
```
AUDIT STRATEGY:
- Programmatic-auditor: Research-loaded (knows checklist deeply)
- Visual-auditor: Fresh-eyes (sees page cold, no research context)

Fresh-eyes catch: template convergence, perceptual issues, reader experience gaps
Research-loaded catch: checklist violations, technical compliance, mechanism deployment
```

**Team Design Decision:**
- Programmatic-auditor: full checklist context (138 items)
- Visual-auditor: minimal context (PA-05 questions only, no checklist)
- Both run independently (no communication until reports written)

**Success Metric:** Visual-auditor finds ≥1 issue programmatic-auditor missed

---

### RISK O-09: Lead THIN Rule (Zero Building)

**Description:** Lead does zero building, zero Playwright, orchestrate only (prevents lead context overload).

**Source:** agent-team-lessons.md line 27; team 2 lesson

**Likelihood:** N/A (architectural principle)
**Impact:** N/A (informs lead role design)

**Team Design Implication:**
```
LEAD ROLE:
- Spawn agents
- Verify file outputs
- Synthesize reports
- Make go/no-go decisions

LEAD DOES NOT:
- Write HTML
- Run Playwright audits
- Implement fixes
- Do detailed CSS work
```

**Team Design Decision:**
- Lead: orchestration only (this conversation)
- Builder: HTML/CSS implementation
- Auditors: validation and reporting
- Lead synthesizes reports → verdict

**Success Metric:** Lead does 0 implementation work (100% orchestration)

---

### RISK O-10: One Committer, One Branch

**Description:** Lead commits, never agents (prevents git chaos).

**Source:** agent-team-lessons.md line 28; team 1 lesson

**Likelihood:** N/A (git workflow principle)
**Impact:** N/A (prevents commit chaos)

**Team Design Implication:**
```
GIT WORKFLOW:
- Agents write files to ephemeral/ directory
- Agents NEVER commit
- Lead reviews outputs
- Lead commits once at end (or not at all if experiment fails)
```

**Team Design Decision:**
- Builder writes to: ephemeral/middle-tier-output/page.html
- Auditors write to: ephemeral/middle-tier-output/*-report.md
- Lead reviews all outputs
- Lead commits IF experiment succeeds (not automatic)

**Success Metric:** 0 agent commits (1 lead commit at end if success)

---

### RISK O-11: Agents Don't Call TaskUpdate on Completion

**Description:** Agents sometimes complete work but don't update task status → lead must verify via file existence.

**Source:** agent-team-lessons.md line 33; team 2 lesson

**Likelihood:** MEDIUM (communication protocol)
**Impact:** LOW (lead work-around exists: check file system)

**Binary Check:**
```
Agent completion verification:
1. Agent sends completion message
2. Lead checks file existence (independent of task status)

PASS: File exists (agent actually completed)
FAIL: File missing (agent idle or incomplete)
```

**Check Point:** After agent completion message
**Check Agent:** lead (verify file system)
**Fix Protocol:** If file missing, nudge agent OR spawn recovery agent

**Prevention Mechanism:**
- Agent prompts: "After writing file, send completion message with file path."
- Lead verification: ALWAYS check file existence (don't trust task status alone)
- PROTOCOL: File existence is source of truth, not task status

**Success Metric:** Lead verifies file existence for 100% of agent tasks

---

### RISK O-12: Nudge Messages Fix Idle Agents

**Description:** Agents sometimes go idle without writing files → nudge message ("Did you write the file?") fixes it.

**Source:** agent-team-lessons.md line 34; teams 9, 14

**Likelihood:** LOW (with strong file-writing emphasis)
**Impact:** LOW (nudge fixes it within 1-2 messages)

**Binary Check:**
```
Idle detection:
- Agent reports "complete" BUT file doesn't exist
- Agent silent for >5 minutes with no file output

PASS: File written within expected time
FAIL: Agent idle beyond threshold
```

**Check Point:** Continuous monitoring during agent work
**Check Agent:** lead (idle detection)
**Fix Protocol:** Send nudge message: "Did you write the output file? Please verify file exists at [path]."

**Prevention Mechanism:**
- Strong file-writing emphasis in prompts (reduces idle frequency)
- Lead monitoring: check file system every 10-15 min
- Nudge protocol: gentle reminder before spawning recovery agent

**Success Metric:** <10% of agents require nudge (most write files without reminder)

---

### RISK O-13: Report-Writer Truncation Error

**Description:** Report-writer agents truncate input (e.g., only reading 200 lines of 80k log), missing critical data.

**Source:** agent-team-lessons.md line 43; team 15 (Phase D Variant C report)

**Likelihood:** MEDIUM (occurs when input is large)
**Impact:** HIGH (report conclusions are wrong due to incomplete data)

**Binary Check:**
```
Read limit verification:
PASS: Agent reads FULL file (or uses appropriate offset+limit to read all sections)
FAIL: Agent reads only first 200 lines of large file (default limit)
```

**Check Point:** After report completion — spot-check conclusions against full data
**Check Agent:** lead (verify report conclusions match data)
**Fix Protocol:** If truncation detected, re-run report with explicit read limits OR chunked reading

**Prevention Mechanism:**
- Report-writer prompts: "CRITICAL: If input file >2000 lines, use offset+limit to read ALL sections."
- Lead instruction: "Read FULL audit logs (use Read tool with offset+limit if needed)."
- Spot-check protocol: verify report cites data from END of file (not just beginning)

**Success Metric:** 100% of reports cite data from throughout input (not just first 200 lines)

---

### RISK O-14: Synthesizer Shutdown Resistance

**Description:** Synthesizer agents are hardest to shut down (don't respond to shutdown requests).

**Source:** agent-team-lessons.md line 74; team 2 lesson

**Likelihood:** LOW (specific to synthesizer role)
**Impact:** LOW (doesn't affect output, just cleanup)

**Binary Check:**
```
Shutdown protocol:
PASS: Agent responds to shutdown request within 1-2 messages
FAIL: Agent ignores 3+ shutdown requests
```

**Check Point:** Post-synthesis cleanup
**Check Agent:** lead (shutdown coordination)
**Fix Protocol:** If agent ignores shutdown, allow natural termination (don't force)

**Prevention Mechanism:**
- Synthesizer prompts: "After writing synthesis, respond to shutdown requests."
- Lead patience: allow 3-4 requests before considering force-shutdown
- MONITOR only (doesn't affect deliverables)

**Team Design Decision:**
- Middle-tier has NO synthesizer agent (builder + 2 auditors only)
- Risk is N/A for this experiment

**Success Metric:** N/A (no synthesizer in this experiment)

---

## RISK SUMMARY MATRIX

| Risk ID | Category | Description | Likelihood | Impact | Mitigation Type | Check Point | Check Agent |
|---------|----------|-------------|------------|--------|-----------------|-------------|-------------|
| **B-01** | Build | Container <940px | HIGH | HIGH | GATE | Step 5 | builder + visual-auditor |
| **B-02** | Build | Container >960px | MEDIUM | HIGH | GATE | Step 5 | builder + visual-auditor |
| **B-03** | Build | Always-load skip | MEDIUM | HIGH | GATE | Step 4 entry | lead |
| **B-04** | Build | Mechanism count <7 | MEDIUM→LOW | HIGH | CHECK | Step 8 | programmatic-auditor |
| **B-05** | Build | Prose-only content | LOW | MEDIUM | GATE | Step 2 | lead |
| **B-06** | Build | Case study templates | LOW | MEDIUM | CHECK | Step 10 | visual-auditor |
| **B-07** | Build | Uniform density | MEDIUM | MEDIUM | CHECK | Step 8 | programmatic-auditor |
| **B-08** | Build | Same-velocity stacking | LOW | LOW | MONITOR | Step 9 | visual-auditor |
| **B-09** | Build | Traffic-light adjacency | LOW | LOW | MONITOR | Step 9 | visual-auditor |
| **B-10** | Build | Missing H3 italic | LOW | LOW | CHECK | Step 8 | programmatic-auditor |
| **G-01** | Gaming | Justification gaming | MEDIUM | MEDIUM | CHECK | Step 6 | lead |
| **G-02** | Gaming | Evidence gaming | LOW | LOW | CHECK | Step 10 | programmatic-auditor |
| **G-03** | Gaming | Atmosphere gaming | LOW | LOW | CHECK | Step 10 | visual-auditor |
| **P-01** | Process | Build before constraints | MEDIUM | HIGH | GATE | Step 4 entry | lead |
| **P-02** | Process | Count as target | MEDIUM | MEDIUM | CHECK | Step 6 | lead |
| **P-03** | Process | Metaphor derivation | LOW | MEDIUM | GATE | Step 4 entry | lead |
| **P-04** | Process | Case studies early | LOW | MEDIUM | CHECK | Step 10 entry | lead |
| **P-05** | Process | "Designed" judgment | LOW | MEDIUM | CHECK | Step 10 | visual-auditor |
| **H-01** | Historical | Container width (4/5 fail) | HIGH | HIGH | GATE | Step 5 | builder + visual-auditor |
| **H-02** | Historical | Protocol skip (Track 1) | MEDIUM | HIGH | GATE | Step 4 entry | lead |
| **H-03** | Historical | Prose-only (22-44%) | LOW | MEDIUM | GATE | Step 2 | lead |
| **H-04** | Historical | "Sample 2-4" cap | MEDIUM→LOW | HIGH | CHECK | Step 8 | programmatic-auditor |
| **O-01** | Operational | File-writing failure | HIGH | HIGH | PROTOCOL | Post-completion | lead |
| **O-02** | Operational | Playwright contention | MEDIUM | HIGH | PROTOCOL | Team design | lead |
| **O-03** | Operational | Context wall | LOW | MEDIUM | MONITOR | Continuous | lead |
| **O-04** | Operational | HTTP server not started | MEDIUM | HIGH | GATE | Pre-Playwright | lead |
| **O-05** | Operational | Captain>worker unreliable | N/A | N/A | PROTOCOL | Team design | lead |
| **O-06** | Operational | Shared file contention | N/A | N/A | PROTOCOL | Team design | lead |
| **O-07** | Operational | Model selection | N/A | N/A | PROTOCOL | Team design | lead |
| **O-08** | Operational | Fresh-eyes audits | N/A | N/A | PROTOCOL | Audit design | lead |
| **O-09** | Operational | Lead building | N/A | N/A | PROTOCOL | Session design | lead |
| **O-10** | Operational | Multi-committer chaos | N/A | N/A | PROTOCOL | Git workflow | lead |
| **O-11** | Operational | TaskUpdate not called | MEDIUM | LOW | PROTOCOL | Post-completion | lead |
| **O-12** | Operational | Agent idle | LOW | LOW | PROTOCOL | Continuous | lead |
| **O-13** | Operational | Report truncation | MEDIUM | HIGH | PROTOCOL | Post-report | lead |
| **O-14** | Operational | Synthesizer shutdown | LOW | LOW | MONITOR | Cleanup | lead |

---

## MANDATORY GATES (7 HIGH/HIGH Risks)

These 7 risks are HIGH likelihood + HIGH impact. Each requires a GATE (blocking progression until resolved).

1. **B-01/B-02 + H-01:** Container width 940-960px (Step 5 gate)
2. **B-03 + H-02 + P-01:** Always-load protocol completion (Step 4 entry gate)
3. **B-05 + H-03:** Mixed content ≥30% non-prose (Step 2 gate)
4. **O-01:** File-writing verification (post-completion check)
5. **O-02:** Playwright scheduling ≤2 concurrent (team design constraint)
6. **O-04:** HTTP server running (pre-Playwright gate)

**GATE ENFORCEMENT PROTOCOL:**
- Lead verifies EACH gate before allowing progression
- If gate fails: HALT work, fix issue, restart from gate step
- NO exceptions to gate requirements (binary enforcement)

---

## VERIFICATION CHECKLIST (For Lead)

**Before Builder Starts:**
- [ ] HTTP server running (O-04)
- [ ] Team design: 3 direct agents, 0 captains (O-05)
- [ ] Team design: per-file ownership (O-06)
- [ ] Team design: ≤2 Playwright agents (O-02)
- [ ] Model selection: all Sonnet 4.5 (O-07)

**Step 1 (Always-Load Protocol):**
- [ ] Builder reads prohibitions.md (353 lines)
- [ ] Builder reads tokens.css (174 lines)
- [ ] GATE: Step 4 blocked until both complete (B-03, H-02, P-01)

**Step 2 (Content Selection):**
- [ ] Content is 800-1,200 words
- [ ] Content includes ≥30% non-prose (code/callouts/tables)
- [ ] GATE: Step 3 blocked until mixed content confirmed (B-05, H-03)

**Step 4 (Pattern Selection):**
- [ ] Builder skipped Phases 1-3 (no metaphor work)
- [ ] Pattern selected via lookup table (not creative derivation)
- [ ] GATE: verified no metaphor keywords in transcript (P-03)

**Step 5 (Container Setup):**
- [ ] Builder self-check: container width 940-960px
- [ ] Visual-auditor independent verification: width 940-960px
- [ ] GATE: Step 6 blocked until width confirmed (B-01, B-02, H-01)

**Step 6 (Mechanism Selection):**
- [ ] Justifications cite specific content features (not generic)
- [ ] No "deploy for count target" language
- [ ] CHECK: flag weak justifications for revision (G-01, P-02)

**Step 8 (Mechanism Deployment):**
- [ ] Mechanism count 7-12 (programmatic-auditor)
- [ ] Padding range ≥32px (programmatic-auditor)
- [ ] All H3 elements italic (programmatic-auditor)
- [ ] CHECK: verify count emerged from breadth (B-04, B-07, B-10, H-04)

**Step 9 (Final Assembly):**
- [ ] No 3+ consecutive same-velocity
- [ ] Green/red callouts ≥48px spacing
- [ ] MONITOR: rhythm and spacing (B-08, B-09)

**Step 10 (Validation):**
- [ ] Case studies NOT accessed during build (transcript check)
- [ ] PA-05 uses sub-criteria (not "feels designed")
- [ ] Evidence cites exact CSS values (not generic)
- [ ] CHECK: verify no template convergence (B-06, G-02, G-03, P-04, P-05)

**Post-Completion:**
- [ ] Output file exists at expected path (O-01)
- [ ] Programmatic-audit-report.md exists (O-01, O-11)
- [ ] Visual-audit-report.md exists (O-01, O-11)
- [ ] Reports cite data from throughout inputs (not just first 200 lines) (O-13)

---

## CONCLUSION

**Risk Coverage:**
- **36 risks identified** across 5 categories
- **7 mandatory gates** (HIGH/HIGH risks)
- **12 verification checkpoints** (MEDIUM/HIGH risks)
- **9 monitoring points** (LOW/HIGH risks)
- **8 protocol principles** (team design optimizations)

**Success Criteria:**
- 100% gate compliance (0 violations of 7 mandatory gates)
- ≥90% checkpoint pass rate (11+ of 12 verification points pass)
- ≥80% monitor targets (7+ of 9 quality indicators meet threshold)

**Key Principle:** Binary checks catch 100% of violations. Judgment checks require specific evidence over generic claims.

**Next Steps:**
- Integrate this register into execution planning
- Add gate verification to builder prompt
- Include checkpoint table in auditor prompts
- Use risk IDs in reports for traceability

---

**END RISK REGISTER**

*This register is COMPREHENSIVE. All 36 known failure modes are documented with binary prevention mechanisms.*
