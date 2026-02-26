# SECTION 4: PRE-IMPLEMENTATION REQUIREMENTS

Every item in this section MUST be resolved before ANY implementation wave begins. These are blocking preconditions identified across audit-09-11 (buddy reviews), audit-12-13 (structural intersection), and audit-14-17 (surgery plans).

---

## 4.1 Gate Naming Map (BLOCKING)

**Source:** ADV-2-1, ADV-7A (audit-09-11)

Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. No mapping between the two systems exists.

**Why blocking:** An implementer reading the master enrichment list (GR-XX references) and gate-runner.md (SC-XX references) will not know which gates correspond. Every surgery plan assumes this mapping is known.

**Resolution required:** Produce a two-column table mapping every GR-XX to its SC-XX equivalent (or mark as "no equivalent"). Publish in a single reference location.

---

## 4.2 WCAG Palette Conflict Resolution (BLOCKING if ME-003 implemented)

**Source:** ADV-1B-2 through ADV-1B-7 (audit-09-11)

GR-60 (WCAG contrast gate) is REQUIRED tier. Soul-mandated accent colors fail WCAG 4.5:1 on warm backgrounds:
- `#2a7d7d` (muted teal) on `#f0ebe3` = ~4.1:1 -- BELOW 4.5:1 threshold
- `#6b9b7a` (sage green), `#c49052` (warm amber), `#c97065` (muted coral) all in 3:1-5:1 danger zone depending on background

**Why blocking:** WCAG gate will produce REQUIRED failures on colors the soul MANDATES. Infinite REBUILD loop possible.

**Three resolution options (one must be chosen):**

| Option | Description | Trade-off |
|--------|-------------|-----------|
| A | WCAG exemption for designated accent colors used decoratively (non-informational) | Weakens accessibility for accent text |
| B | Revised accent palette with colors passing 4.5:1 on ALL warm backgrounds | Changes visual identity |
| C | WCAG gate at RECOMMENDED tier (not REQUIRED) to avoid blocking builds | Reduces accessibility enforcement |

**Resolution required:** Select Option A, B, or C. Specify exact colors and contrast ratios.

---

## 4.3 Builder Scroll-Reveal Signal Mechanism (BLOCKING for ME-006)

**Source:** ADV-1C-3 (audit-09-11)

ME-006 (screenshot validation) adds a blank-screenshot threshold. Two categories of blank exist:
1. DPR/animation bug -- re-capture fixes it
2. Intentional scroll-triggered content -- re-capture CREATES a problem (forces visibility on hidden content, corrupts layout)

**Why blocking:** Without a builder signal ("This page uses scroll-triggered reveals"), the validation gate cannot distinguish intentional hidden content from broken screenshots.

**Resolution required:** Define a builder signal mechanism (e.g., builder output metadata flag, HTML comment marker, or manifest entry) that exempts pages with scroll-triggered reveals from the blank-screenshot threshold.

---

## 4.4 Detection-to-Fix Gap (BLOCKING for ME-001, ME-003)

**Source:** META-2A-3, META-2B-1 (audit-09-11)

Experiential pass (ME-001) and WCAG gate (ME-003) both DETECT problems but the pipeline has no mechanism to APPLY fixes:
- Gates produce PASS/FAIL, not fixes
- WCAG FAIL on REQUIRED = verdict REBUILD = new builder starts over without receiving specific failure info
- REBUILD builder does not receive gate results (per M-04 context isolation)
- Illegibility requires HTML/CSS redesign, not mechanical fix

**Why blocking:** Detection without a fix mechanism = correctly identified problems that still ship. The causal chain from detection to resolution has a gap at step 5.

**Resolution required:** Either (a) define a mechanism to pass diagnostic info from gates to REBUILD builder, or (b) accept that detection alone has value even without guaranteed fix, and document this explicitly as a known limitation.

---

## 4.5 Zero Tested Enrichments (BLOCKING -- process risk)

**Source:** META-4-3 (audit-09-11)

Every enrichment has been analyzed, cross-referenced, anti-loss-mapped, and adversarially reviewed. None have been TESTED. Analysis produces CONFIDENCE, not EVIDENCE.

**Why blocking:** 57 enrichments justified by N=1 (one pipeline run, one content type). All three buddy reviews independently recommend running the pipeline on different content before implementing enrichments.

**Resolution required:** Accept this risk explicitly OR run a minimal experiment first (DPR fix only, measure PA-05, compare). See ADV-6-1, META-7-2.

---

## 4.6 N=1 Representativeness (BLOCKING -- process risk)

**Source:** META-4-5 (audit-09-11)

All Phase 2+3 analysis is based on ONE page (Gas Town). Findings might be:
- Gas Town-specific (chart = Gas Town artifact, trailing void = Gas Town CSS bug, DPR issue depends on this page's animations)
- Content-type-specific (long-form technical essay has different failure modes than gallery/dashboard/landing)

**Why blocking:** If findings are Gas Town-specific, 57 pipeline-level changes are over-engineered. Phase 3 treats all findings as pipeline-general without evidence.

**Resolution required:** Accept this risk explicitly OR run pipeline on different content type before implementing. Document which enrichments are likely Gas Town-specific vs pipeline-general.

---

## 4.7 Per-File Implementation Architecture (BLOCKING)

**Source:** ADV-5-1, ADV-5-3 (audit-09-11)

Implementer must read 5,000+ lines before writing a single edit: master enrichment list (1,000), style guide (370), gate surgery (400+), manifest surgery (300+), pipeline files being modified (1,436+1,192+237+412+...). This exceeds the context capacity that caused original failures.

**Why blocking:** Compliance degrades by format multiplier. By ME-030, compliance near zero with a single agent.

**Resolution required:** Implementation MUST use 1 agent per target file. Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text -> new-text diffs. A coordinating agent verifies cross-file consistency AFTER.

---

## 4.8 Wave 0 Subtraction Prerequisite (BLOCKING)

**Source:** SI-BC-01, SI-W0-01 through SI-W0-07 (audit-12-13)

gate-runner-core.js is at 68% compliance with 0 net-addition safe budget. ~170 lines MUST be subtracted before ANY addition:
- GR-33 through GR-35 (Mode Advisory gates) -> move to orchestrator (-45 lines)
- GR-36 through GR-39 (Experiment Tracking gates) -> move to MANIFEST (-40 lines)
- GR-40 through GR-42 (Policy Gates) -> move to MANIFEST (-35 lines)
- GR-08 spec text (no JS implementation exists) -> remove (-30 lines)
- Duplicate component patterns from builder-recipe -> remove (-20 lines)

**Why blocking:** Without freeing ~150 lines from gate-runner-core.js, zero Tier 1 BLOCKING gate additions can proceed. Net-zero is the BINDING constraint.

**Resolution required:** Execute Wave 0 subtraction as the very first implementation step. Verify line count decreased by ~150. Update GR-48 arrays and gate-manifest.json for relocated gates.

---

## 4.9 Capacity Verification for Each Target File (BLOCKING)

**Source:** ISG-HC-01, ISG-CAP-01 through ISG-CAP-09 (audit-12-13)

Total aggregate safe addition capacity across ALL artifacts is ~240 lines. Per-file budgets:

| File | Current Lines | Safe Addition | Compliance | Headroom |
|------|--------------|---------------|------------|----------|
| artifact-tc-brief-template.md | ~224 | +30 | 83.7% | MODERATE |
| artifact-builder-recipe.md | ~934 | +50 | 82% | MODERATE |
| gate-runner-core.js | ~1,437 | **0 net** | 68% | **OVER CAPACITY** |
| artifact-routing.md | ~900 | +40 | 71.4% | MODERATE |
| artifact-orchestrator.md | ~1,058 | +50 | 87% | GOOD |
| artifact-identity-perception.md | ~556 | +20 | 78.8% | LIMITED |
| pa-questions.md + splits | ~1,004 | +30 | 94% | GOOD |
| MANIFEST.md | ~1,193 | +20 | 70.6% | LIMITED |
| artifact-value-tables.md | ~263 | +50 | N/A | GOOD |

**Why blocking:** Each enrichment must be checked against its target file's safe budget before implementation. Exceeding budget degrades compliance.

**Resolution required:** Before each wave, verify running total of net additions per file against capacity table. If over budget, identify lines to subtract first or reroute enrichment to a different file.

---

## 4.10 Brief Bottleneck Constraint (BLOCKING for brief-facing changes)

**Source:** ISG-BTL-01 through ISG-BTL-03 (audit-12-13)

ALL builder-facing enrichments pass through the TC brief (~165 lines). Brief is at the 200-line mode-collapse threshold.

**Why blocking:** Adding builder instructions to the brief template risks crossing the collapse threshold. Builder instructions should go into artifact-builder-recipe.md (934 lines with headroom) instead.

**Resolution required:** Route all builder-facing content to artifact-builder-recipe.md, NOT artifact-tc-brief-template.md. Verify no brief-template changes push past 200-line threshold.

---

## 4.11 Four Cross-File Discrepancies to Resolve (BLOCKING)

**Source:** Cross-file discrepancies section (audit-14-17)

| # | Discrepancy | Resolution |
|---|------------|------------|
| 1 | File 14 proposes GR-05+GR-07 consolidation as ONE merged function; File 17 describes TWO separate functions | File 14 authoritative (single DOM iteration, more line-efficient) |
| 2 | File 15 says 68 total questions (counts PA-07-old retirement); File 16 says 69 (PA-07 doesn't exist) | 3 confirmed retirements only. Net total = 69 if 3 additions applied |
| 3 | File 14 says GR-12 "absorbed into GR-18" (ceases to exist); File 17 says GR-12 downgraded to RECOMMENDED (still executes independently) | Choose one approach. File 14 saves more lines. |
| 4 | File 14 specifies exact final GR-48 arrays; File 17 specifies individual adds/removes per downgrade | File 14's exact arrays are the COORDINATED final state and are authoritative |

**Resolution required:** Confirm all 4 resolutions before implementation begins. Document which file is authoritative for each conflict.

---

## 4.12 Gate Naming Consistency Decisions (BLOCKING)

**Source:** GS-04A-exact1 through GS-04A-exact4 (audit-14-17)

Multiple gate tier changes affect the same arrays. The final coordinated state must be computed once, not applied incrementally:

| Array | Final State After All Changes |
|-------|-------------------------------|
| REQUIRED_GATES (L1332) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |
| RECOMMENDED_GATES (L1338) | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 |
| identityGates (L753) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10 |
| perceptionGates (L756) | GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |

**Resolution required:** Confirm these exact arrays. Each implementation agent must use these coordinated final states, not apply changes incrementally.

---

# SECTION 5: IMPLEMENTATION ORDER

Full dependency-respecting order across all enrichments. Based on 7 binding constraints (audit-12-13), file 14/17 implementation sequences, and file 16 PA phasing.

---

## 5.0 Binding Constraints (7 Total)

These constraints MUST be respected -- they define hard ordering dependencies:

| # | Constraint | Source | Consequence if Violated |
|---|-----------|--------|------------------------|
| BC-1 | Gate-runner net-zero: subtraction MUST precede addition | SI-BC-01 | gate-runner-core.js exceeds capacity, compliance drops below split threshold |
| BC-2 | ME-037 + ME-051 atomic: retirements and replacements in one operation | SI-BC-02 | PA question counts become inconsistent across 5+ locations |
| BC-3 | ME-010 (GR-05 split) before ME-003 (GR-60): split establishes opacity-filtering pattern GR-60 reuses | SI-BC-03 | GR-60 cannot reference opacity thresholds that don't exist yet |
| BC-4 | ME-001 before ME-009: experiential pass must exist before aggregation thresholds | SI-BC-04 | Aggregation thresholds reference a protocol that doesn't exist |
| BC-5 | ME-006 before ME-015: screenshot validation must exist before data corruption escalation | SI-BC-05 | Escalation protocol references a gate that doesn't exist |
| BC-6 | Brief-facing content (ME-047-050) AFTER capacity verified | SI-BC-06 | Builder recipe exceeds 1,000 lines |
| BC-7 | All tier reclassifications (ME-024-027) after GR-48 arrays understood | SI-BC-07 | Meta-gate arrays become inconsistent |

---

## 5.1 Wave 0: SUBTRACTION (-170 lines)

**Prerequisite to ALL other waves. Nothing proceeds until Wave 0 is verified.**

| Step | Operation | Target File | Lines Freed |
|------|-----------|-------------|-------------|
| 0.1 | Remove GR-33 through GR-35 (Mode Advisory gates) -> move to orchestrator | gate-runner-core.js | -45 |
| 0.2 | Remove GR-36 through GR-39 (Experiment Tracking gates) -> move to MANIFEST | gate-runner-core.js | -40 |
| 0.3 | Remove GR-40 through GR-42 (Policy Gates) -> move to MANIFEST | gate-runner-core.js | -35 |
| 0.4 | Remove GR-08 spec text (no JS implementation exists) | gate-runner-core.js | -30 |
| 0.5 | Remove duplicate component patterns | artifact-builder-recipe.md | -20 |
| 0.6 | Update GR-48 REQUIRED_GATES and RECOMMENDED_GATES for relocated gates | gate-runner-core.js | 0 |
| 0.7 | Update gate-manifest.json for relocated gates | gate-manifest.json | 0 |

### Wave 0 Verification Checkpoint

- [ ] gate-runner-core.js line count decreased by ~150
- [ ] artifact-builder-recipe.md line count decreased by ~20
- [ ] GR-48 self-check passes with updated arrays (no relocated gates referenced)
- [ ] gate-manifest.json tier arrays no longer include relocated gates
- [ ] Relocated gate logic preserved in destination files (orchestrator, MANIFEST)
- [ ] **Gate-runner capacity after Wave 0: +150 lines available**
- [ ] **Running total: -170 lines**

---

## 5.2 Wave 1: USABILITY PRIORITY INVERSION (8 enrichments, +134 lines)

**Depends on:** Wave 0 complete.
**Unlocks:** Wave 3 (experiential pass protocol must exist for aggregation thresholds).

### Parallel Group A (Steps 1.1-1.6 -- independent files, can run in parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.1 | ME-001 | Add experiential pass protocol | pa-deployment.md | +22 |
| 1.2 | ME-002 | Add usability priority override in weaver | pa-weaver.md | +14 |
| 1.3 | ME-004 | Add builder usability recipe step (Q0 self-check) | artifact-builder-recipe.md | +12 |
| 1.4 | ME-006 | Add expanded CSS override + screenshot validation gate | pa-deployment.md + orchestrator | +27 |
| 1.5 | ME-008 | Add usability circuit breaker in handoff | MANIFEST.md | +12 |
| 1.6 | ME-009 | Add experiential aggregation thresholds | pa-deployment.md + pa-weaver.md | +15 |

### Sequential Group B (Steps 1.7-1.8 -- gate-runner coordination, must be sequential)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.7 | ME-005 | Add MECHANICAL exception to verdict logic | MANIFEST + gate-manifest + gate-runner | +22 |
| 1.8 | ME-007 | Fix GR-44 trailing void measurement | gate-runner-core.js | +10 |

### Wave 1 Verification Checkpoint

- [ ] pa-deployment.md: experiential pass section exists BEFORE question answering
- [ ] pa-deployment.md: screenshot validation gate exists BEFORE auditor deployment
- [ ] pa-weaver.md: usability priority override in weaver-only content (NOT in auditor prompts)
- [ ] artifact-builder-recipe.md: Q0 self-check uses recipe verbs (not checklist verbs)
- [ ] MANIFEST.md: usability circuit breaker present in Phase 3B->3C handoff
- [ ] MANIFEST.md: MECHANICAL exception in verdict logic
- [ ] gate-runner-core.js: GR-44 uses scrollHeight, not body.getBoundingClientRect
- [ ] gate-manifest.json: verdictLogic includes MECHANICAL exception
- [ ] BV-03 check: recipe-to-checklist verb ratio >= 3:1 in modified sections
- [ ] **Running total: -170 + 134 = -36 lines (under budget)**

---

## 5.3 Wave 2: GATE FIXES + GR-60 (12 enrichments, +116 lines)

**Depends on:** Wave 0 complete. Can run in PARALLEL with Wave 1.
**Unlocks:** Wave 5a (gate capacity check after validation build).

### Phase 2A: Existing Gate Fixes (Steps 2.1-2.4 -- independent gates, parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 2.1 | ME-010 | GR-05 split (opacity filter) -- establishes pattern for GR-60 | gate-runner-core.js + gate-manifest | +15 |
| 2.2 | ME-011 | GR-06 rendered font check rewrite | gate-runner-core.js | +2 |
| 2.3 | ME-012 | GR-14 zone-level scoping (structural false positives) | gate-runner-core.js | +3 |
| 2.4 | ME-013 | GR-09 tolerance bands | gate-runner-core.js | +2 |

### Phase 2B: Tier Reclassifications (Steps 2.5-2.8 -- parallel, after GR-48 arrays understood per BC-7)

| Step | ME | Operation | Gate | Old Tier | New Tier |
|------|-----|-----------|------|----------|----------|
| 2.5 | ME-024 | Downgrade GR-07 | GR-07 | REQUIRED | RECOMMENDED |
| 2.6 | ME-025 | Downgrade GR-12 (absorb into GR-18) | GR-12 | REQUIRED | Absorbed/RECOMMENDED |
| 2.7 | ME-026 | Downgrade GR-43 | GR-43 | REQUIRED | RECOMMENDED |
| 2.8 | ME-027 | Downgrade GR-19 | GR-19 | RECOMMENDED | ADVISORY |

### Phase 2C: Threshold Adjustments (Steps 2.9-2.10 -- parallel)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.9 | ME-028 | GR-21 threshold 4->6 + GR-22 skip-link exemption | gate-runner-core.js | +2 |
| 2.10 | ME-029 | GR-17 list item threshold (li from 12px to 4px group) | gate-runner-core.js | 0 |

### Phase 2D: Viewport Namespacing, then GR-60 (sequential -- 2.11 before 2.12 per BC-3)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.11 | ME-030 | GR-48/49 viewport namespacing | gate-runner-core.js | +4 |
| 2.12 | ME-003 | **GR-60 WCAG contrast (NEW REQUIRED gate)** -- LAST, largest addition, depends on ME-010 opacity pattern | gate-runner-core.js + 3 satellites | +70 |

### Phase 2E: Coordinated Array Updates (AFTER all Phase 2A-2D changes)

Apply the COORDINATED final state from File 14 (not incremental changes):
- REQUIRED_GATES array -> exact replacement per GS-04A-exact1
- RECOMMENDED_GATES array -> exact replacement per GS-04A-exact2
- identityGates filter -> exact replacement per GS-04A-exact3
- perceptionGates filter -> exact replacement per GS-04A-exact4
- gate-manifest.json -> all tier counts, verdict logic, execution order updated atomically

### Wave 2 Verification Checkpoint

- [ ] gate-runner-core.js net change: -150 (Wave 0) + ~98 (Wave 2) = **-52 net** (NEGATIVE, as required)
- [ ] GR-48 REQUIRED_GATES array has exactly 15 entries (was 18: -GR-07, -GR-12, -GR-43, +GR-60)
- [ ] GR-48 RECOMMENDED_GATES array has exactly 9 entries (+GR-07, +GR-43, -GR-19)
- [ ] gate-manifest.json: REQUIRED count = 16, RECOMMENDED count = 10, ADVISORY count = 8
- [ ] gate-manifest.json: verdictLogic updated for all tier changes + MECHANICAL exception
- [ ] gate-runner-spec.md: GR-60 row added, tier changes reflected, summary counts updated
- [ ] GR-05 split: isCold() utility shared between GR-05a/GR-05b
- [ ] GR-60: targets correct element set (p, span, a, li, h1-h6, td, th, label, figcaption, etc.)
- [ ] GR-60: WCAG AA thresholds correct (4.5:1 normal text, 3.0:1 large text)
- [ ] No orphan "GR-01-10" range notation remaining (search all files)
- [ ] **Running total: -36 + 116 = +80 lines**

---

## VALIDATION BUILD #1 (MANDATORY between Wave 2 and Wave 3)

Run the gate runner against existing V3 Gas Town HTML to verify:
- All modified gates still execute without errors
- GR-60 produces expected results (flag known contrast issues)
- No regression in gates that were not modified
- GR-48 coverage check passes with new arrays

**Do NOT proceed to Wave 3 until validation build passes.**

---

## 5.4 Wave 3: PA ENRICHMENTS (12 enrichments, +81 lines)

**Depends on:** Wave 1 complete (experiential pass must exist per BC-4, BC-5). Wave 2 NOT required.

### Phase 3A: Atomic PA Swap (Step 3.1 -- FIRST AND ALONE per BC-2)

| Step | ME | Operation | Details |
|------|-----|-----------|---------|
| 3.1 | ME-037 + ME-051 | **ATOMIC:** Retire PA-06, PA-09, PA-40 AND add replacement experiential questions | 5-location update per question (pa-questions.md, pa-deployment.md, MANIFEST.md, pa-manifest.md, EXECUTION-TRACKER-TEMPLATE.md) |

**Verify after 3.1:** Auditor B 8->7->8 (retire PA-06, add PA-81). Auditor C 11->10. Auditor F 6->5. Totals consistent across all 5 locations.

### Phase 3B: New Question Additions (Steps 3.2-3.4 -- parallel, independent)

| Step | ME | Operation | Question | Routing | Lines |
|------|-----|-----------|----------|---------|-------|
| 3.2 | ME-021 | Add navigation usability question | PA-80 | Auditor E (6->7) | +3 in pa-questions + 5-location update |
| 3.3 | ME-022 | Add information extraction question | PA-81 | Auditor B (7->8, net neutral after PA-06 retire) | +3 in pa-questions + 5-location update |
| 3.4 | ME-023 | Add content promise vs delivery question | PA-54 | Auditor G (7->8) | +3 in pa-questions + 5-location update |

### Phase 3C: PA Protocol Modifications (Steps 3.5-3.11 -- parallel, independent)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.5 | ME-015 | Data corruption escalation + BLOCKED BY DEFECT + First-Auditor Halt | pa-deployment + pa-questions | +10 |
| 3.6 | ME-031 | False affordance scan question | pa-questions + satellites | +12 |
| 3.7 | ME-032 | Pipeline-introspection annotations on PA-55, PA-56, PA-69 | pa-questions.md | +3 |
| 3.8 | ME-033 | Void question deduplication (Void Collapse Rule) | pa-questions.md Section 3.6 | +4 |
| 3.9 | ME-034 | Defect-bypass for cross-viewport protocol | pa-deployment.md | +3 |
| 3.10 | ME-035 | Footer/header explicit contrast note on PA-02 | pa-questions.md | +0 (in-cell) |
| 3.11 | ME-036 | Horizontal scroll element-level note | pa-questions.md | +1 |

### Phase 3D: Weaver Enhancement (Step 3.12 -- after ME-001 exists)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.12 | ME-019 | PA-05 score as range + hypothetical scoring | pa-weaver.md | +8 (net 0 after compression) |

### Wave 3 Verification Checkpoint

- [ ] Total PA questions = 69 (69 - 3 retired + 3 added = 69, net zero)
- [ ] No auditor exceeds 12 questions
- [ ] Auditor load balance: A=9, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6
- [ ] pa-deployment.md assignment table totals match 69
- [ ] pa-manifest.md checklist totals match 69
- [ ] MANIFEST.md L149-157 roster updated with correct question lists per auditor
- [ ] MANIFEST.md L159 total = 69
- [ ] Experiential pass appears BEFORE question answering in pa-deployment.md
- [ ] Screenshot validation gate appears BEFORE auditor deployment
- [ ] BLOCKED BY DEFECT protocol in auditor-visible pa-questions.md Section 1 preamble
- [ ] Priority Override in pa-weaver.md (NOT in auditor prompts -- fresh-eyes preserved)
- [ ] PA-05 range scoring in pa-weaver.md (NOT in auditor prompts)
- [ ] Void Collapse Rule references correct question IDs (PA-50, PA-33, PA-51)
- [ ] Pipeline-introspection annotations on PA-55, PA-56, PA-69 ONLY
- [ ] Orphan check: ME-033 Void Collapse Rule does NOT reference retired PA-09
- [ ] Orphan check: AP-05 anti-pattern mapping updated (PA-40 replaced with PA-69)
- [ ] No content from Section 4 of pa-questions.md leaked into Sections 1-3
- [ ] Fresh-eyes NOT violated: no tier targets, mechanism counts, or build context in auditor-facing files
- [ ] **Running total: +80 + 81 = +161 lines**

---

## 5.5 Wave 4: BUILDER RECIPE + NON-GATE INFRASTRUCTURE (9 enrichments, +66 lines)

**Depends on:** Wave 0 complete (builder recipe subtraction). Independent of Waves 1-3.

### Phase 4A: Builder Recipe Additions (Steps 4.1-4.4 -- parallel, all target same file)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 4.1 | ME-016 | ARIA accessibility recipe step | +8 |
| 4.2 | ME-038 | px-only border width (binary+CSS format) | +3 |
| 4.3 | ME-039 | html color + font stack boilerplate | +8 |
| 4.4 | ME-041 | Trailing void prevention recipe step | +4 |

### Phase 4B: Non-Gate Infrastructure (Steps 4.5-4.9 -- parallel, independent files)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 4.5 | ME-018 | Gate perceptibility column | gate-manifest.json + gate-runner | +18 |
| 4.6 | ME-020 | Orchestrator self-assessment step | artifact-orchestrator.md | +15 |
| 4.7 | ME-042 | MANIFEST line count updates | MANIFEST.md | 0 |
| 4.8 | ME-043 | Execution tracker fields | EXECUTION-TRACKER-TEMPLATE.md | +5 |
| 4.9 | ME-046 | Screenshot correction protocol | MANIFEST.md | +5 |

### Wave 4 Verification Checkpoint

- [ ] artifact-builder-recipe.md: +23 net (within +50 safe after Wave 0 subtraction of -20)
- [ ] All new builder recipe content uses recipe verbs (Read/Select/Deploy/Assess)
- [ ] No checklist verbs in builder-facing content (no Verify, Fail if, Must be, Ensure, Check that)
- [ ] No gate thresholds or gate-format language in builder-facing content
- [ ] gate-manifest.json perceptibility column does NOT change tier classifications
- [ ] MANIFEST line count values are accurate
- [ ] **Running total: +161 + 66 = +227 lines (within ~240 budget)**

---

## VALIDATION BUILD #2 (MANDATORY between Wave 4 and Wave 5)

Run full pipeline on V3 Gas Town HTML:
- All gates execute without errors
- All PA questions answerable
- Brief assembly produces valid output
- Total line counts verified per file

**Do NOT proceed to Wave 5 until validation build passes.**

---

## 5.6 Wave 5: CONDITIONAL / DEFERRED

**Depends on:** Validation Build #2 results.

### Wave 5a: GR-61 (CONDITIONAL on gate-runner headroom)

| Step | ME | Operation | Condition | Net Lines |
|------|-----|-----------|-----------|-----------|
| 5a.1 | ME-014 | GR-61 min font size (RECOMMENDED) | Only if gate-runner net after Waves 0+2 is <= -50 (50+ lines headroom remaining) | +59 |

### Wave 5b: CONSIDER-Severity Items (implement only if budget allows)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 5b.1 | ME-047 | 3 background registers (builder recipe) | +4 |
| 5b.2 | ME-048 | Unique element per zone (builder recipe) | +3 |
| 5b.3 | ME-049 | Dark moments (builder recipe) | +3 |
| 5b.4 | ME-050 | Spacing compression range (builder recipe) | +3 |
| 5b.5 | ME-052 | Audience description (pa-deployment) | +3 |
| 5b.6 | ME-054 | Remove dead CSS (components.css / tokens.css) | -13 |

**NOT in Wave 5 (per BC-6 and red lines):**
- ME-053 (container width exceptions) -- contradicts NON-NEGOTIABLE constraint

### Wave 5c: PERMANENTLY DEFERRED (do not implement)

| ME | Reason |
|----|--------|
| ME-017 | Architectural change (Red Line 1 violation) -- requires separate validation cycle |
| ME-040 | GR-62 text overflow -- gate-runner cannot absorb without SECOND subtraction round |
| ME-044 | Low-priority prose documentation (20 effective lines for 10 actual) |
| ME-045 | Low-priority prose documentation (30 effective lines for 15 actual) |
| ME-055 | PA question budget consumed by Wave 3 |
| ME-056 | Requires new file creation -- route to separate reference file if ever needed |

---

## 5.7 Implementation Summary

| Wave | Purpose | Enrichments | Net Lines | Running Total | Validation Required |
|------|---------|-------------|-----------|---------------|---------------------|
| 0 | SUBTRACTION | 7 steps | -170 | -170 | Yes (line count + arrays) |
| 1 | Usability Priority Inversion | 8 ME | +134 | -36 | Yes (protocol + verdict) |
| 2 | Gate Fixes + GR-60 | 12 ME | +116 | +80 | **VALIDATION BUILD #1** |
| 3 | PA Enrichments | 12 ME | +81 | +161 | Yes (question totals) |
| 4 | Builder Recipe + Infrastructure | 9 ME | +66 | +227 | **VALIDATION BUILD #2** |
| 5 | Conditional / Deferred | 7+ ME | variable | variable | Per-item |

**Critical path:** Wave 0 -> (Wave 1 AND Wave 2 in PARALLEL) -> Validation Build #1 -> Wave 3 (depends on Wave 1) -> Wave 4 (independent) -> Validation Build #2 -> Wave 5

**Parallelism opportunities:**
- Waves 1 and 2 run in PARALLEL after Wave 0
- Within Wave 1: Steps 1.1-1.6 parallel, 1.7-1.8 sequential
- Within Wave 2: Steps 2.1-2.4 parallel, 2.5-2.8 parallel, 2.11 before 2.12
- Within Wave 3: Step 3.1 FIRST AND ALONE, 3.2-3.4 parallel, 3.5-3.11 parallel
- Within Wave 4: Steps 4.1-4.4 parallel, 4.5-4.9 parallel
- Wave 4 can run in parallel with Wave 3

**Total: 41 of 57 enrichments in Waves 0-4 (72%). 7 permanently deferred. 9 conditionally deferred.**
**Gate-runner-core.js net: -150 + 10 + 98 = -42 lines (net NEGATIVE, as required).**
**Grand total net: +227 lines (within ~240 budget, 13 lines headroom).**
