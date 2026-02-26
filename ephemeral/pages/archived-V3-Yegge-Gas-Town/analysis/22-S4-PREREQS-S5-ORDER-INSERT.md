## SECTION 4: PRE-IMPLEMENTATION REQUIREMENTS

Every item below MUST be resolved before ANY implementation wave begins. Unresolved prerequisites = implementation failure. Sources: audit-09-11 (buddy reviews), audit-12-13 (structural intersection), audit-14-17 (surgery plans), 23-ADVERSARIAL-CHECKLIST-AUDIT.md (adversarial cross-check).

---

### PREREQ-01: Gate Naming Map (BLOCKING)

**Source:** ADV-2-1, ADV-7A (audit-09-11)

**What must be resolved:** Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. No mapping between the two systems exists.

**Why it blocks:** An implementer reading the master enrichment list (GR-XX references) and gate-runner.md (SC-XX references) will not know which gates correspond. Every surgery plan assumes this mapping is known.

**Resolution options:**
| Option | Description |
|--------|-------------|
| A | Produce a two-column table mapping every GR-XX to its SC-XX equivalent (or mark as "no equivalent") |
| B | Standardize on GR-XX throughout all implementation files and retire SC-XX references |

**Decision needed:** Choose Option A or B. Publish in a single reference location before Wave 0.

---

### PREREQ-02: WCAG Palette Conflict Resolution (BLOCKING if ME-003 implemented)

**Source:** ADV-1B-2 through ADV-1B-7 (audit-09-11); MISS-16, BW-12 (adversarial audit)

**What must be resolved:** GR-60 (WCAG contrast gate) is REQUIRED tier. Soul-mandated accent colors fail WCAG 4.5:1 on warm backgrounds:
- `#2a7d7d` (muted teal) on `#f0ebe3` = ~4.1:1 — BELOW 4.5:1 threshold
- `#6b9b7a` (sage green), `#c49052` (warm amber), `#c97065` (muted coral) all in 3:1-5:1 danger zone depending on background

**Why it blocks:** WCAG gate will produce REQUIRED failures on colors the soul MANDATES. Infinite REBUILD loop possible.

**Resolution options:**
| Option | Description | Trade-off |
|--------|-------------|-----------|
| A | WCAG exemption for designated accent colors used decoratively (non-informational) | Weakens accessibility for accent text |
| B | Revised accent palette with colors passing 4.5:1 on ALL warm backgrounds | Changes visual identity |
| C | WCAG gate at RECOMMENDED tier (not REQUIRED) to avoid blocking builds | Reduces accessibility enforcement |

**Decision needed:** Select Option A, B, or C. Specify exact colors and contrast ratios.

---

### PREREQ-03: Builder Scroll-Reveal Signal Mechanism (BLOCKING for ME-006)

**Source:** ADV-1C-3 (audit-09-11)

**What must be resolved:** ME-006 (screenshot validation) adds a blank-screenshot threshold. Two categories of blank exist:
1. DPR/animation bug — re-capture fixes it
2. Intentional scroll-triggered content — re-capture CREATES a problem (forces visibility on hidden content, corrupts layout)

**Why it blocks:** Without a builder signal ("This page uses scroll-triggered reveals"), the validation gate cannot distinguish intentional hidden content from broken screenshots.

**Resolution options:**
| Option | Description |
|--------|-------------|
| A | HTML comment marker (`<!-- scroll-reveal: true -->`) |
| B | Builder output metadata flag in execution tracker |
| C | Manifest entry declaring scroll-reveal pages |

**Decision needed:** Define builder signal mechanism before ME-006 implementation.

---

### PREREQ-04: Detection-to-Fix Gap (BLOCKING for ME-001, ME-003)

**Source:** META-2A-3, META-2B-1 (audit-09-11); MISS-14, BW-04, BW-06 (adversarial audit — rated "single most dangerous architectural flaw")

**What must be resolved:** Experiential pass (ME-001) and WCAG gate (ME-003) both DETECT problems but the pipeline has no mechanism to APPLY fixes:
- Gates produce PASS/FAIL, not fixes
- WCAG FAIL on REQUIRED = verdict REBUILD = new builder starts over WITHOUT receiving specific failure info
- REBUILD builder does not receive gate results (per M-04 context isolation)
- Illegibility requires HTML/CSS redesign, not mechanical fix

**Why it blocks:** Detection without a fix mechanism = correctly identified problems that still ship. The causal chain from detection to resolution has a gap at step 5.

**Resolution options:**
| Option | Description | Trade-off |
|--------|-------------|-----------|
| A | Define mechanism to pass diagnostic info from gates to REBUILD builder (violates M-04 partially) | Breaks context isolation |
| B | Accept that detection alone has value even without guaranteed fix; document as known limitation | Weaker outcome |
| C | Add builder-facing CSS recipe for common failures (e.g., "if WCAG fails: darken accent by 10%") | Adds lines to builder recipe |

**Decision needed:** Select Option A, B, or C. If B, document the limitation explicitly so future audits don't flag it again.

---

### PREREQ-05: Zero Tested Enrichments (BLOCKING — process risk)

**Source:** META-4-3 (audit-09-11); MISS-12, BW-01, BW-09, BW-13 (adversarial audit — ALL 3 buddy reviewers converge on "experiment first")

**What must be resolved:** Every enrichment has been analyzed, cross-referenced, anti-loss-mapped, and adversarially reviewed. None have been TESTED. Analysis produces CONFIDENCE, not EVIDENCE. All 3 buddy reviewers independently recommend running the pipeline on different content before implementing enrichments.

**Why it blocks:** 57 enrichments justified by N=1 (one pipeline run, one content type). The experiment-first recommendation is the strongest consensus across all audit sources.

**Resolution options:**
| Option | Description | Effort |
|--------|-------------|--------|
| A | Accept risk explicitly; proceed to implement | 0 hours |
| B | Run minimal experiment first: DPR fix only, measure PA-05, compare | 4-10 hours |
| C | Run pipeline on different content type (not Gas Town) before implementing | 8-20 hours |

**Decision needed:** Select Option A, B, or C. If A, document the risk acceptance explicitly.

---

### PREREQ-06: N=1 Representativeness (BLOCKING — process risk)

**Source:** META-4-5 (audit-09-11)

**What must be resolved:** All Phase 2+3 analysis is based on ONE page (Gas Town). Findings might be:
- Gas Town-specific (chart = Gas Town artifact, trailing void = Gas Town CSS bug, DPR issue depends on this page's animations)
- Content-type-specific (long-form technical essay has different failure modes than gallery/dashboard/landing)

**Why it blocks:** If findings are Gas Town-specific, 57 pipeline-level changes are over-engineered. Phase 3 treats all findings as pipeline-general without evidence.

**Resolution options:**
| Option | Description |
|--------|-------------|
| A | Accept risk; proceed (document which enrichments are likely Gas Town-specific vs pipeline-general) |
| B | Run pipeline on different content type before implementing |
| C | Tag each enrichment as CONFIRMED-GENERAL, LIKELY-GENERAL, or POSSIBLY-SPECIFIC |

**Decision needed:** Select an option. If A, produce the Gas Town-specific vs pipeline-general classification.

---

### PREREQ-07: Per-File Implementation Architecture (BLOCKING)

**Source:** ADV-5-1, ADV-5-3 (audit-09-11)

**What must be resolved:** Implementer must read 5,000+ lines before writing a single edit: master enrichment list (1,000), style guide (370), gate surgery (400+), manifest surgery (300+), pipeline files being modified (1,436+1,192+237+412+...). This exceeds the context capacity that caused original failures.

**Why it blocks:** Compliance degrades by format multiplier. By ME-030, compliance near zero with a single agent.

**Resolution required:** Implementation MUST use 1 agent per target file. Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text → new-text diffs. A coordinating agent verifies cross-file consistency AFTER.

**No decision needed — this is a hard constraint on implementation methodology.**

---

### PREREQ-08: Wave 0 Subtraction Prerequisite (BLOCKING)

**Source:** SI-BC-01, SI-W0-01 through SI-W0-07 (audit-12-13); MISS-18, MISS-19, BW-13 (adversarial audit)

**What must be resolved:** gate-runner-core.js is at 68% compliance with 0 net-addition safe budget. ~170 lines MUST be subtracted before ANY addition:
- GR-33 through GR-35 (Mode Advisory gates) → move to orchestrator (-45 lines)
- GR-36 through GR-39 (Experiment Tracking gates) → move to MANIFEST (-40 lines)
- GR-40 through GR-42 (Policy Gates) → move to MANIFEST (-35 lines)
- GR-08 spec text (no JS implementation exists) → remove (-30 lines)
- Duplicate component patterns from builder-recipe → remove (-20 lines)

**Why it blocks:** Without freeing ~150 lines from gate-runner-core.js, zero Tier 1 BLOCKING gate additions can proceed. Net-zero is the BINDING constraint.

**Resolution required:** Execute Wave 0 subtraction as the very first implementation step. Verify line count decreased by ~150. Update GR-48 arrays and gate-manifest.json for relocated gates.

**No decision needed — this is a hard constraint on implementation order.**

---

### PREREQ-09: Capacity Verification for Each Target File (BLOCKING)

**Source:** ISG-HC-01, ISG-CAP-01 through ISG-CAP-09 (audit-12-13); MISS-20, CTR-05 (adversarial audit)

**What must be resolved:** Total aggregate safe addition capacity across ALL artifacts is ~240 lines. Per-file budgets:

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

**Why it blocks:** Each enrichment must be checked against its target file's safe budget before implementation. Exceeding budget degrades compliance.

**Resolution required:** Before each wave, verify running total of net additions per file against capacity table. If over budget, identify lines to subtract first or reroute enrichment to a different file.

**Decision needed:** Confirm acceptance of the ~240 line hard budget OR provide explicit justification for expansion.

---

### PREREQ-10: Brief Bottleneck Constraint (BLOCKING for brief-facing changes)

**Source:** ISG-BTL-01 through ISG-BTL-03 (audit-12-13)

**What must be resolved:** ALL builder-facing enrichments pass through the TC brief (~165 lines). Brief is at the 200-line mode-collapse threshold.

**Why it blocks:** Adding builder instructions to the brief template risks crossing the collapse threshold. Builder instructions should go into artifact-builder-recipe.md (934 lines with headroom) instead.

**Resolution required:** Route all builder-facing content to artifact-builder-recipe.md, NOT artifact-tc-brief-template.md. Verify no brief-template changes push past 200-line threshold.

**No decision needed — this is a routing constraint.**

---

### PREREQ-11: Four Cross-File Discrepancies (BLOCKING)

**Source:** Cross-file discrepancies section (audit-14-17); CTR-01 through CTR-04 (adversarial audit)

**What must be resolved:**

| # | Discrepancy | Proposed Resolution | Decision |
|---|------------|---------------------|----------|
| 1 | File 14 proposes GR-05+GR-07 consolidation as ONE merged function; File 17 describes TWO separate functions | File 14 authoritative (single DOM iteration, more line-efficient) | PENDING |
| 2 | File 15 says 68 total questions (counts PA-07-old retirement); File 16 says 69 (PA-07 doesn't exist) | 3 confirmed retirements only. Net total = 69 if 3 additions applied | PENDING |
| 3 | File 14 says GR-12 "absorbed into GR-18" (ceases to exist); File 17 says GR-12 downgraded to RECOMMENDED (still executes independently) | Choose one approach. File 14 saves more lines | PENDING |
| 4 | File 14 specifies exact final GR-48 arrays; File 17 specifies individual adds/removes per downgrade | File 14's exact arrays are the COORDINATED final state and are authoritative | PENDING |

**Why it blocks:** Contradictions in surgery plans = implementers making incompatible edits across files.

**Decision needed:** Confirm all 4 resolutions before Wave 0 begins.

---

### PREREQ-12: Coordinated Gate Array Final State (BLOCKING)

**Source:** GS-04A-exact1 through GS-04A-exact4 (audit-14-17)

**What must be resolved:** Multiple gate tier changes affect the same arrays. The final coordinated state must be computed once, not applied incrementally:

| Array | Final State After All Changes |
|-------|-------------------------------|
| REQUIRED_GATES (L1332) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |
| RECOMMENDED_GATES (L1338) | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 |
| identityGates (L753) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10 |
| perceptionGates (L756) | GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |

**Why it blocks:** Incremental array edits across multiple waves = drift between arrays and gate-manifest.json.

**Resolution required:** Confirm these exact arrays. Each implementation agent must use these coordinated final states, not apply changes incrementally.

---

### PREREQ-13: Budget Crisis Resolution (BLOCKING — from adversarial audit)

**Source:** CTR-05, MISS-10, MISS-24, BW-03 (adversarial audit); audit-05-08 §3.1; audit-12-13 §3.2

**What must be resolved:** Three independent audit files quantify the budget overrun:
- audit-05-08: 785 lines needed, 240 budget → 3.3x over
- audit-12-13: 556 net lines after wave planning → 2.3x over
- Checklist S4-S5 plan: +227 net lines (within 240, but excludes Wave 5)

**Why it blocks:** Without explicit resolution, implementation WILL exceed safe capacity.

**Resolution options:**
| Option | Description |
|--------|-------------|
| A | Hard cap at 240: cut enrichments until total fits (Waves 0-4 plan at +227 fits if Wave 5 is deferred) |
| B | Explicit budget expansion to 300 with justification (post-Wave-0 subtraction creates headroom) |
| C | Phased implementation: Waves 0-2 only (first validation build), then reassess |

**Decision needed:** Select option. Note: the S5 plan below assumes Option A (Waves 0-4 = +227, within 240).

---

### PREREQ-14: Builder Blindness Acknowledgment (CRITICAL — from adversarial audit)

**Source:** MISS-15, BW-07, BW-14, GAP-01, GAP-08 (adversarial audit); audit-09-11 §4.5; META-3A-1

**What must be resolved:** All 3 buddy reviewers converge: zero changes in the current plan reach the builder (the CSS-writing agent). Waves 1-4 modify planner, auditor, gate, and infrastructure files. The builder — which actually produces the HTML/CSS — receives nothing.

**Why it blocks:** This is the #2 architectural flaw (after detection-without-fix). Wave 4 partially addresses it (ME-016, ME-038, ME-039, ME-041 add builder recipe steps), but these are recipe-format additions, not compositional intelligence.

**Resolution options:**
| Option | Description |
|--------|-------------|
| A | Accept that Wave 4 builder recipe additions are sufficient for this implementation round |
| B | Add GAP-01 (builder playbook with specific CSS recipes, +40-60 lines) to Wave 5b |
| C | Defer to post-Validation-Build-#2 assessment |

**Decision needed:** Select option. Document which builder-facing gaps remain.

---

### PREREQ SUMMARY

| PREREQ | Blocking Severity | Decision Required | Default if Undecided |
|--------|-------------------|-------------------|---------------------|
| PREREQ-01 | BLOCKING | Choose naming convention | Option B (standardize GR-XX) |
| PREREQ-02 | BLOCKING (if ME-003) | Choose palette resolution | Option C (RECOMMENDED tier) |
| PREREQ-03 | BLOCKING (for ME-006) | Choose signal mechanism | Option A (HTML comment) |
| PREREQ-04 | BLOCKING | Choose fix strategy | Option B (accept limitation) |
| PREREQ-05 | BLOCKING (process) | Experiment-first decision | Option A (accept risk) |
| PREREQ-06 | BLOCKING (process) | N=1 strategy | Option C (tag each enrichment) |
| PREREQ-07 | BLOCKING | None — hard constraint | Per-file agents |
| PREREQ-08 | BLOCKING | None — hard constraint | Wave 0 first |
| PREREQ-09 | BLOCKING | Budget acceptance | 240-line hard cap |
| PREREQ-10 | BLOCKING | None — routing constraint | Route to builder-recipe |
| PREREQ-11 | BLOCKING | Confirm 4 resolutions | File 14 authoritative |
| PREREQ-12 | BLOCKING | Confirm array states | Arrays as listed |
| PREREQ-13 | BLOCKING | Budget resolution | Option A (hard cap 240) |
| PREREQ-14 | CRITICAL | Builder blindness strategy | Option A (Wave 4 sufficient) |

**Decisions required: 10 (PREREQ-01 through -06, -09, -11, -13, -14)**
**Hard constraints (no decision needed): 4 (PREREQ-07, -08, -10, -12)**

---
---

## SECTION 5: IMPLEMENTATION ORDER

Full dependency-respecting order across all enrichments. Based on 7 binding constraints (audit-12-13), surgery plans (audit-14-17), PA phasing (File 16), and adversarial audit corrections.

---

### 5.0 Binding Constraints (7 Total)

These constraints MUST be respected — they define hard ordering dependencies:

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

### Wave 0: SUBTRACTION (Prerequisite) — Target: -170 lines

**Prerequisite to ALL other waves. Nothing proceeds until Wave 0 is verified.**

| Step | Operation | Target File | Lines Freed |
|------|-----------|-------------|-------------|
| 0.1 | Remove GR-33 through GR-35 (Mode Advisory gates) → move to orchestrator | gate-runner-core.js | -45 |
| 0.2 | Remove GR-36 through GR-39 (Experiment Tracking gates) → move to MANIFEST | gate-runner-core.js | -40 |
| 0.3 | Remove GR-40 through GR-42 (Policy Gates) → move to MANIFEST | gate-runner-core.js | -35 |
| 0.4 | Remove GR-08 spec text (no JS implementation exists) | gate-runner-core.js | -30 |
| 0.5 | Remove duplicate component patterns | artifact-builder-recipe.md | -20 |
| 0.6 | Update GR-48 REQUIRED_GATES and RECOMMENDED_GATES for relocated gates | gate-runner-core.js | 0 |
| 0.7 | Update gate-manifest.json for relocated gates | gate-manifest.json | 0 |

**Line budget:**
- gate-runner-core.js: -150
- artifact-builder-recipe.md: -20
- **Wave 0 total: -170**

#### Wave 0 Verification Checkpoint

- [ ] gate-runner-core.js line count decreased by ~150
- [ ] artifact-builder-recipe.md line count decreased by ~20
- [ ] GR-48 self-check passes with updated arrays (no relocated gates referenced)
- [ ] gate-manifest.json tier arrays no longer include relocated gates
- [ ] Relocated gate logic preserved in destination files (orchestrator, MANIFEST)
- [ ] Gate-runner capacity after Wave 0: +150 lines available
- [ ] **Running total: -170 lines**

---

### Wave 1: Usability Priority Inversion — Target: +134 lines

**Depends on:** Wave 0 complete.
**Unlocks:** Wave 3 (experiential pass protocol must exist for aggregation thresholds per BC-4, BC-5).
**Can run in PARALLEL with:** Wave 2.

#### Parallel Group A (Steps 1.1-1.6 — independent files, can run in parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.1 | ME-001 | Add experiential pass protocol | pa-deployment.md | +22 |
| 1.2 | ME-002 | Add usability priority override in weaver | pa-weaver.md | +14 |
| 1.3 | ME-004 | Add builder usability recipe step (Q0 self-check) | artifact-builder-recipe.md | +12 |
| 1.4 | ME-006 | Add expanded CSS override + screenshot validation gate | pa-deployment.md + orchestrator | +27 |
| 1.5 | ME-008 | Add usability circuit breaker in handoff | MANIFEST.md | +12 |
| 1.6 | ME-009 | Add experiential aggregation thresholds | pa-deployment.md + pa-weaver.md | +15 |

#### Sequential Group B (Steps 1.7-1.8 — gate-runner coordination, must be sequential)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.7 | ME-005 | Add MECHANICAL exception to verdict logic | MANIFEST + gate-manifest + gate-runner | +22 |
| 1.8 | ME-007 | Fix GR-44 trailing void measurement | gate-runner-core.js | +10 |

**Line budget by file:**
- pa-deployment.md: +22 + partial(+27) + partial(+15) ≈ +49
- pa-weaver.md: +14 + partial(+15) ≈ +22
- artifact-builder-recipe.md: +12
- MANIFEST.md: +12 + partial(+22) ≈ +19
- orchestrator: partial(+27) ≈ +12
- gate-runner-core.js: +10 + partial(+22) ≈ +19
- gate-manifest: partial(+22) ≈ +1
- **Wave 1 total: +134**

#### Wave 1 Verification Checkpoint

- [ ] pa-deployment.md: experiential pass section exists BEFORE question answering
- [ ] pa-deployment.md: screenshot validation gate exists BEFORE auditor deployment
- [ ] pa-weaver.md: usability priority override in weaver-only content (NOT in auditor prompts)
- [ ] artifact-builder-recipe.md: Q0 self-check uses recipe verbs (Read/Select/Deploy/Assess), NOT checklist verbs (Verify/Fail if/Must be)
- [ ] MANIFEST.md: usability circuit breaker present in Phase 3B→3C handoff
- [ ] MANIFEST.md: MECHANICAL exception in verdict logic
- [ ] gate-runner-core.js: GR-44 uses scrollHeight, not body.getBoundingClientRect
- [ ] gate-manifest.json: verdictLogic includes MECHANICAL exception
- [ ] BV-03 check: recipe-to-checklist verb ratio >= 3:1 in modified sections
- [ ] M-11 (recipe enforcement) not violated: new builder content follows recipe format
- [ ] M-04 (context isolation) not violated: no calibration data in auditor-facing content
- [ ] **Running total: -170 + 134 = -36 lines (under budget)**

---

### Wave 2: Gate Fixes + GR-60 — Target: +116 lines

**Depends on:** Wave 0 complete. Can run in PARALLEL with Wave 1.
**Unlocks:** Wave 5a (gate capacity check after validation build).

#### Phase 2A: Existing Gate Fixes (Steps 2.1-2.4 — independent gates, parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 2.1 | ME-010 | GR-05 split (opacity filter) — establishes pattern for GR-60 | gate-runner-core.js + gate-manifest | +15 |
| 2.2 | ME-011 | GR-06 rendered font check rewrite | gate-runner-core.js | +2 |
| 2.3 | ME-012 | GR-14 zone-level scoping (structural false positives) | gate-runner-core.js | +3 |
| 2.4 | ME-013 | GR-09 tolerance bands | gate-runner-core.js | +2 |

#### Phase 2B: Tier Reclassifications (Steps 2.5-2.8 — parallel, AFTER GR-48 arrays understood per BC-7)

| Step | ME | Operation | Gate | Old Tier | New Tier |
|------|-----|-----------|------|----------|----------|
| 2.5 | ME-024 | Downgrade GR-07 | GR-07 | REQUIRED | RECOMMENDED |
| 2.6 | ME-025 | Downgrade GR-12 (absorb into GR-18) | GR-12 | REQUIRED | Absorbed/RECOMMENDED |
| 2.7 | ME-026 | Downgrade GR-43 | GR-43 | REQUIRED | RECOMMENDED |
| 2.8 | ME-027 | Downgrade GR-19 | GR-19 | RECOMMENDED | ADVISORY |

#### Phase 2C: Threshold Adjustments (Steps 2.9-2.10 — parallel)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.9 | ME-028 | GR-21 threshold 4→6 + GR-22 skip-link exemption | gate-runner-core.js | +2 |
| 2.10 | ME-029 | GR-17 list item threshold (li from 12px to 4px group) | gate-runner-core.js | 0 |

#### Phase 2D: Viewport Namespacing, then GR-60 (sequential — 2.11 before 2.12 per BC-3)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.11 | ME-030 | GR-48/49 viewport namespacing | gate-runner-core.js | +4 |
| 2.12 | ME-003 | **GR-60 WCAG contrast (NEW REQUIRED gate)** — LAST, largest addition, depends on ME-010 opacity pattern | gate-runner-core.js + 3 satellites | +70 |

#### Phase 2E: Coordinated Array Updates (AFTER all Phase 2A-2D changes)

Apply the COORDINATED final state from PREREQ-12 (not incremental changes):
- REQUIRED_GATES array → exact replacement per GS-04A-exact1
- RECOMMENDED_GATES array → exact replacement per GS-04A-exact2
- identityGates filter → exact replacement per GS-04A-exact3
- perceptionGates filter → exact replacement per GS-04A-exact4
- gate-manifest.json → all tier counts, verdict logic, execution order updated atomically

**Line budget by file:**
- gate-runner-core.js: +15 +2 +3 +2 +2 +0 +4 +70 = +98
- gate-manifest.json: tier updates (net 0)
- gate-runner-spec.md: documentation updates (net +18)
- **Wave 2 total: +116**

#### Wave 2 Verification Checkpoint

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
- [ ] M-19 (gate-manifest sync) verified: gate-runner arrays match gate-manifest.json exactly
- [ ] **Running total: -36 + 116 = +80 lines**

---

### VALIDATION BUILD #1 (MANDATORY between Waves 1+2 and Wave 3)

Run the gate runner against existing V3 Gas Town HTML to verify:
- [ ] All modified gates still execute without errors
- [ ] GR-60 produces expected results (flag known contrast issues)
- [ ] No regression in gates that were not modified
- [ ] GR-48 coverage check passes with new arrays
- [ ] MECHANICAL exception verdict logic works end-to-end
- [ ] Screenshot validation gate (ME-006) functions with test screenshots

**Do NOT proceed to Wave 3 until Validation Build #1 passes.**

---

### Wave 3: PA Enrichments — Target: +81 lines

**Depends on:** Wave 1 complete (experiential pass must exist per BC-4, BC-5). Wave 2 NOT required.

#### Phase 3A: Atomic PA Swap (Step 3.1 — FIRST AND ALONE per BC-2)

| Step | ME | Operation | Details |
|------|-----|-----------|---------|
| 3.1 | ME-037 + ME-051 | **ATOMIC:** Retire PA-06, PA-09, PA-40 AND add replacement experiential questions | 5-location update per question (pa-questions.md, pa-deployment.md, MANIFEST.md, pa-manifest.md, EXECUTION-TRACKER-TEMPLATE.md) |

**CRITICAL — 11-location propagation (from audit-mechanisms §2.7 item 7):**
1. pa-questions.md — remove question text
2. pa-deployment.md — auditor assignment table
3. pa-deployment.md — question routing
4. MANIFEST.md L149-157 — auditor roster
5. MANIFEST.md L159 — total count
6. pa-manifest.md — checklist
7. EXECUTION-TRACKER-TEMPLATE.md — tracking fields
8. pa-weaver.md — score aggregation (if question referenced)
9. pa-guardrails.md — AP-05 mapping (PA-40 → remap to PA-69)
10. pa-questions.md Section 4 — calibration data (if any)
11. gate-runner-core.js — if any gate references retired question IDs

**Verify after 3.1:** Auditor B 8→7→8 (retire PA-06, add PA-81). Auditor C 11→10. Auditor F 6→5. Totals consistent across ALL 11 locations.

#### Phase 3B: New Question Additions (Steps 3.2-3.4 — parallel, independent)

| Step | ME | Operation | Question | Routing | Lines |
|------|-----|-----------|----------|---------|-------|
| 3.2 | ME-021 | Add navigation usability question | PA-80 | Auditor E (6→7) | +3 in pa-questions + 5-location update |
| 3.3 | ME-022 | Add information extraction question | PA-81 | Auditor B (7→8, net neutral after PA-06 retire) | +3 in pa-questions + 5-location update |
| 3.4 | ME-023 | Add content promise vs delivery question | PA-54 | Auditor G (7→8) | +3 in pa-questions + 5-location update |

**Format rules for new questions (from audit-mechanisms §2.7):**
- BINARY: YES/NO with evidence — NOT judgment scales
- Format: `PA-[NN]: [Text ending in ?]`
- Conviction language: "Does...?" "Is there...?" — NOT "Verify that..." "Is count >= N?"
- ZERO calibration data (mechanism counts, tier definitions, build context)
- Information isolation boundary: auditor-facing content ONLY

#### Phase 3C: PA Protocol Modifications (Steps 3.5-3.11 — parallel, independent)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.5 | ME-015 | Data corruption escalation + BLOCKED BY DEFECT + First-Auditor Halt | pa-deployment + pa-questions | +10 |
| 3.6 | ME-031 | False affordance scan question | pa-questions + satellites | +12 |
| 3.7 | ME-032 | Pipeline-introspection annotations on PA-55, PA-56, PA-69 | pa-questions.md | +3 |
| 3.8 | ME-033 | Void question deduplication (Void Collapse Rule) | pa-questions.md Section 3.6 | +4 |
| 3.9 | ME-034 | Defect-bypass for cross-viewport protocol | pa-deployment.md | +3 |
| 3.10 | ME-035 | Footer/header explicit contrast note on PA-02 | pa-questions.md | +0 (in-cell) |
| 3.11 | ME-036 | Horizontal scroll element-level note | pa-questions.md | +1 |

#### Phase 3D: Weaver Enhancement (Step 3.12 — after ME-001 exists)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.12 | ME-019 | PA-05 score as range + hypothetical scoring | pa-weaver.md | +8 (net 0 after compression) |

**Line budget by file:**
- pa-questions.md: retirements (-9) + additions (+9) + protocols (+20) = +20
- pa-deployment.md: +22 (routing updates) + +3 (defect bypass) = +25
- pa-weaver.md: +8 (net 0 after compression)
- MANIFEST.md: roster updates (+5)
- pa-manifest.md: checklist updates (+3)
- EXECUTION-TRACKER-TEMPLATE.md: tracking updates (+2)
- pa-guardrails.md: AP-05 remap (+1)
- **Wave 3 total: +81**

#### Wave 3 Verification Checkpoint

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
- [ ] Priority Override in pa-weaver.md (NOT in auditor prompts — fresh-eyes preserved)
- [ ] PA-05 range scoring in pa-weaver.md (NOT in auditor prompts)
- [ ] Void Collapse Rule references correct question IDs (PA-50, PA-33, PA-51)
- [ ] Pipeline-introspection annotations on PA-55, PA-56, PA-69 ONLY
- [ ] Orphan check: ME-033 Void Collapse Rule does NOT reference retired PA-09
- [ ] Orphan check: AP-05 anti-pattern mapping updated (PA-40 replaced with PA-69)
- [ ] No content from Section 4 of pa-questions.md leaked into Sections 1-3
- [ ] Fresh-eyes NOT violated: no tier targets, mechanism counts, or build context in auditor-facing files
- [ ] M-20 (fresh-eyes protocol) verified: new questions contain zero calibration data
- [ ] M-22 (PA deployment integrity) verified: all 11 locations consistent
- [ ] **Running total: +80 + 81 = +161 lines**

---

### Wave 4: Builder Recipe + Non-Gate Infrastructure — Target: +66 lines

**Depends on:** Wave 0 complete (builder recipe subtraction). Independent of Waves 1-3.
**Can run in PARALLEL with:** Wave 3.

#### Phase 4A: Builder Recipe Additions (Steps 4.1-4.4 — parallel, all target same file)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 4.1 | ME-016 | ARIA accessibility recipe step | +8 |
| 4.2 | ME-038 | px-only border width (binary+CSS format) | +3 |
| 4.3 | ME-039 | html color + font stack boilerplate | +8 |
| 4.4 | ME-041 | Trailing void prevention recipe step | +4 |

#### Phase 4B: Non-Gate Infrastructure (Steps 4.5-4.9 — parallel, independent files)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 4.5 | ME-018 | Gate perceptibility column | gate-manifest.json + gate-runner | +18 |
| 4.6 | ME-020 | Orchestrator self-assessment step | artifact-orchestrator.md | +15 |
| 4.7 | ME-042 | MANIFEST line count updates | MANIFEST.md | 0 |
| 4.8 | ME-043 | Execution tracker fields | EXECUTION-TRACKER-TEMPLATE.md | +5 |
| 4.9 | ME-046 | Screenshot correction protocol | MANIFEST.md | +5 |

**Line budget by file:**
- artifact-builder-recipe.md: -20 (Wave 0) + 12 (Wave 1) + 23 (Wave 4) = +15 net (within +50 safe)
- gate-manifest.json: +18 (perceptibility column)
- artifact-orchestrator.md: +15 (within +50 safe)
- MANIFEST.md: +5 (within +20 safe)
- EXECUTION-TRACKER-TEMPLATE.md: +5
- **Wave 4 total: +66**

#### Wave 4 Verification Checkpoint

- [ ] artifact-builder-recipe.md: +15 net (within +50 safe after Wave 0 subtraction of -20)
- [ ] All new builder recipe content uses recipe verbs (Read/Select/Deploy/Assess)
- [ ] No checklist verbs in builder-facing content (no Verify, Fail if, Must be, Ensure, Check that)
- [ ] No gate thresholds or gate-format language in builder-facing content
- [ ] gate-manifest.json perceptibility column does NOT change tier classifications
- [ ] MANIFEST line count values are accurate
- [ ] M-06 (brief validation) not violated: no builder content routed to brief template
- [ ] M-11 (recipe enforcement) verified: recipe:checklist verb ratio >= 3:1
- [ ] M-12 (suppressor detection) verified: new content passes BV-04 regex
- [ ] **Running total: +161 + 66 = +227 lines (within ~240 budget, 13 lines headroom)**

---

### VALIDATION BUILD #2 (MANDATORY between Wave 4 and Wave 5)

Run full pipeline on V3 Gas Town HTML:
- [ ] All gates execute without errors
- [ ] All 69 PA questions answerable (no orphan references)
- [ ] Brief assembly produces valid output under 200-line threshold
- [ ] Total line counts verified per file against capacity table (PREREQ-09)
- [ ] 80 verification items from audit-mechanisms (10 per change)
- [ ] 3 most dangerous interactions verified safe (ME-004/ME-039 × M-06/M-11/M-12; ME-005 × M-13; ME-037+ME-051 × M-22)

**Do NOT proceed to Wave 5 until Validation Build #2 passes.**

---

### Wave 5: Conditional / Deferred

**Depends on:** Validation Build #2 results.

#### Wave 5a: GR-61 (CONDITIONAL on gate-runner headroom)

| Step | ME | Operation | Condition | Net Lines |
|------|-----|-----------|-----------|-----------|
| 5a.1 | ME-014 | GR-61 min font size (RECOMMENDED) | Only if gate-runner net after Waves 0+2 is <= -50 (50+ lines headroom remaining) | +59 |

**Gate-runner math:** -150 (Wave 0) + 98 (Wave 2) + 10 (Wave 1 gate changes) = -42 net. Headroom = 42 lines. **GR-61 requires 59 → DOES NOT FIT. Wave 5a is BLOCKED unless additional subtraction found.**

#### Wave 5b: CONSIDER-Severity Items (implement only if budget allows)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 5b.1 | ME-047 | 3 background registers (builder recipe) | +4 |
| 5b.2 | ME-048 | Unique element per zone (builder recipe) | +3 |
| 5b.3 | ME-049 | Dark moments (builder recipe) | +3 |
| 5b.4 | ME-050 | Spacing compression range (builder recipe) | +3 |
| 5b.5 | ME-052 | Audience description (pa-deployment) | +3 |
| 5b.6 | ME-054 | Remove dead CSS (components.css / tokens.css) | -13 |

**Budget remaining after Waves 0-4:** 240 - 227 = 13 lines. Wave 5b total = +3 net (after ME-054 subtraction). **FITS if ME-054 executed first.**

#### Wave 5c: PERMANENTLY DEFERRED (do not implement)

| ME | Reason |
|----|--------|
| ME-017 | Architectural change (Red Line 1 violation) — requires separate validation cycle |
| ME-040 | GR-62 text overflow — gate-runner cannot absorb without SECOND subtraction round |
| ME-044 | Low-priority prose documentation (20 effective lines for 10 actual) |
| ME-045 | Low-priority prose documentation (30 effective lines for 15 actual) |
| ME-053 | Container width exceptions — contradicts NON-NEGOTIABLE constraint |
| ME-055 | PA question budget consumed by Wave 3 |
| ME-056 | Requires new file creation — route to separate reference file if ever needed |

**NOT in Wave 5 (per BC-6 and red lines):**
- ME-053 (container width exceptions) — contradicts NON-NEGOTIABLE constraint

---

### Implementation Summary

| Wave | Purpose | Enrichments | Net Lines | Running Total | Validation Required |
|------|---------|-------------|-----------|---------------|---------------------|
| 0 | SUBTRACTION | 7 steps | -170 | -170 | Yes (line count + arrays) |
| 1 | Usability Priority Inversion | 8 ME | +134 | -36 | Yes (protocol + verdict) |
| 2 | Gate Fixes + GR-60 | 12 ME | +116 | +80 | **VALIDATION BUILD #1** |
| 3 | PA Enrichments | 12 ME | +81 | +161 | Yes (question totals) |
| 4 | Builder Recipe + Infrastructure | 9 ME | +66 | +227 | **VALIDATION BUILD #2** |
| 5a | GR-61 (conditional) | 1 ME | +59 | **BLOCKED** (insufficient headroom) |
| 5b | CONSIDER items | 6 ME | +3 | +230 | Per-item |
| 5c | Permanently deferred | 7 ME | N/A | N/A | N/A |

---

### Critical Path Diagram

```
PREREQ-01 through PREREQ-14 resolved
          │
          ▼
     ┌─────────┐
     │ WAVE 0  │  SUBTRACTION (-170 lines)
     │ Steps   │  gate-runner-core.js: -150
     │ 0.1-0.7 │  builder-recipe: -20
     └────┬────┘
          │
     ┌────┴────────────────────────┐
     │                             │
     ▼                             ▼
┌─────────┐                  ┌─────────┐
│ WAVE 1  │  Usability       │ WAVE 2  │  Gate Fixes
│ +134    │  Priority        │ +116    │  + GR-60
│ lines   │  Inversion       │ lines   │
└────┬────┘                  └────┬────┘
     │     PARALLEL               │
     │                             │
     └────────────┬────────────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │  VALIDATION BUILD #1 │
     │  Gate runner + PA     │
     │  against Gas Town     │
     └──────────┬───────────┘
                │
     ┌──────────┴──────────────────┐
     │                             │
     ▼                             ▼
┌─────────┐                  ┌─────────┐
│ WAVE 3  │  PA              │ WAVE 4  │  Builder
│ +81     │  Enrichments     │ +66     │  Recipe +
│ lines   │  (needs Wave 1)  │ lines   │  Infra
└────┬────┘                  └────┬────┘
     │     PARALLEL               │
     │                             │
     └────────────┬────────────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │  VALIDATION BUILD #2 │
     │  Full pipeline run    │
     │  80 verification items│
     └──────────┬───────────┘
                │
                ▼
     ┌─────────────────┐
     │    WAVE 5       │
     │ 5a: BLOCKED     │
     │ 5b: +3 lines    │
     │ 5c: DEFERRED    │
     └─────────────────┘
```

---

### Per-File Running Totals (All Waves 0-4)

| File | Wave 0 | Wave 1 | Wave 2 | Wave 3 | Wave 4 | NET | Budget | Status |
|------|--------|--------|--------|--------|--------|-----|--------|--------|
| gate-runner-core.js | -150 | +19 | +98 | 0 | 0 | **-33** | 0 net | UNDER (good) |
| artifact-builder-recipe.md | -20 | +12 | 0 | 0 | +23 | **+15** | +50 | UNDER |
| pa-deployment.md | 0 | +49 | 0 | +25 | 0 | **+74** | — | CHECK |
| pa-weaver.md | 0 | +22 | 0 | +8 | 0 | **+30** | — | CHECK |
| MANIFEST.md | 0 | +19 | 0 | +5 | +5 | **+29** | +20 | **OVER (+9)** |
| artifact-orchestrator.md | 0 | +12 | 0 | 0 | +15 | **+27** | +50 | UNDER |
| gate-manifest.json | 0 | +1 | 0 | 0 | +18 | **+19** | — | CHECK |
| pa-questions.md | 0 | 0 | 0 | +20 | 0 | **+20** | +30 | UNDER |
| pa-manifest.md | 0 | 0 | 0 | +3 | 0 | **+3** | — | OK |
| EXECUTION-TRACKER-TEMPLATE.md | 0 | 0 | 0 | +2 | +5 | **+7** | — | OK |
| pa-guardrails.md | 0 | 0 | 0 | +1 | 0 | **+1** | — | OK |
| gate-runner-spec.md | 0 | 0 | +18 | 0 | 0 | **+18** | — | CHECK |

**WARNING: MANIFEST.md is +9 over budget.** Resolution: compress existing content in MANIFEST.md by 9 lines during Wave 1 edits, OR reroute ME-046 (+5 lines) to orchestrator.

---

### Adversarial Audit Integration

Items from 23-ADVERSARIAL-CHECKLIST-AUDIT.md addressed by this implementation order:

| Adversarial Finding | Where Addressed |
|---------------------|-----------------|
| MISS-12: Experiment-first imperative | PREREQ-05 (explicit decision required) |
| MISS-14: Detection-without-fix | PREREQ-04 (explicit decision required) |
| MISS-15: Builder gets nothing | PREREQ-14 + Wave 4 (partial — recipe additions) |
| MISS-16: WCAG palette conflict | PREREQ-02 (explicit decision required) |
| MISS-18: Subtraction before addition | Wave 0 is FIRST (hard constraint) |
| MISS-19: Net-zero gate-runner | PREREQ-08 + Wave 0 + per-wave tracking |
| MISS-26: 4 cross-file discrepancies | PREREQ-11 (explicit resolution required) |
| MISS-40: 80 verification items | Validation Build #2 checklist |
| CTR-05: Budget crisis | PREREQ-13 (explicit decision required) |
| BW-01/BW-09/BW-13: Buddy BLOCKING warnings | PREREQ-05, PREREQ-08 |
| Finding 4: Complexity ratchet | Wave 5c permanently defers 7 enrichments; total capped at +227 |

**Items NOT addressed (explicitly deferred):**
| Adversarial Finding | Disposition |
|---------------------|------------|
| MISS-01: 35 uncovered V3E enrichments | DEFERRED — tracked for future wave |
| MISS-03: 79 reservoir items | DEFERRED — tracked for future wave |
| MISS-32: 18 MISSING gap items (GAP-01 through GAP-18) | DEFERRED — tracked for future wave |
| GAP-01: Builder playbook with CSS recipes | DEFERRED to post-VB#2 assessment |
| GAP-02: Per-category mechanism minimums | DEFERRED — pipeline-level change |
| GAP-16: Background delta enforcement (>=15 RGB) | DEFERRED — requires new gate (budget exhausted) |
| GAP-17: Stacked spacing verification (S-09 loophole) | DEFERRED — requires new gate (budget exhausted) |
| PAR-01: Zone 4 monotony | DEFERRED — no fix mechanism exists |
| PAR-03: ARIA regression -63% | PARTIALLY addressed by ME-016 (ARIA recipe step) |
| Finding 3: Detection-without-fix paradox | PREREQ-04 decision determines disposition |
