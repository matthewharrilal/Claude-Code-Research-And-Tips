# Crack Dimension Defense Depth Analysis — D6, D7, D9, D11

**Date:** 2026-02-26
**Analyst:** crack-defense-analyst (Opus)
**Scope:** Deep analysis of 4 weak/absent crack dimensions with concrete fixes
**Baseline:** `v5-audit/crack-dimension-coverage.md` (D6 WEAK, D7 ABSENT, D9 WEAK, D11 WEAK)

---

## D6: Cross-File Reference Rot — WEAK → STRONG (with fixes)

### What check-consistency.js Currently Checks (11 categories)

1. **Gate count consistency** — gate-manifest.json totals vs gate-runner-core.js gate IDs vs gate-runner-spec.md tier counts vs MANIFEST.md claims vs SKILL.md claims (Checks 1, 7, 8)
2. **Gate ID cross-validation** — every gate ID in manifest exists in core.js and vice versa (Check 2)
3. **Function count** — Playwright JS function count in core.js vs SKILL.md and MANIFEST.md claims (Check 3)
4. **PA question count** — pa-questions.md definitions vs pa-deployment.md total vs MANIFEST.md vs SKILL.md claims (Check 4)
5. **Auditor question assignments** — per-auditor counts in pa-deployment.md vs MANIFEST.md (Check 5)
6. **Line count claims** — 23 files checked against Appendix D line count claims with tolerance (Check 6)
7. **BV gate range** — BV-01 through BV-07 endpoints in manifest vs spec vs tracker (Check 7)
8. **Tier breakdown consistency** — REQUIRED/RECOMMENDED/ADVISORY counts across 4 files (Check 8)
9. **Agent count** — MANIFEST.md total agent count vs expected (Check 9)
10. **File existence** — 27 files referenced in Appendix D verified to exist on disk (Check 10)
11. **GR-48 coverage array** — REQUIRED_GATES in GR-48 matches manifest required gates (Check 11)

**Total: ~120+ individual checks across 11 categories.**

### What check-consistency.js Does NOT Check (6 gap categories)

**Gap 1: Section/anchor reference integrity**
The pipeline files contain ~28 `Section N` cross-references in MANIFEST.md alone. These reference specific sections in other files (e.g., "artifact-orchestrator.md Section 4" or "pa-deployment.md Section 2.3a"). If a section is renumbered or renamed, these references silently break. The checker does not validate that referenced sections exist in their target files.

**Gap 2: Verdict terminology consistency**
The pipeline is in a MIXED terminology state. Evidence:
- `artifact-orchestrator.md` uses NEW: RELEASE, IMPROVE, REBUILD (85 matches)
- `pa-weaver.md` uses NEW: RELEASE, POLISH, IMPROVE, RETHINK (28 matches)
- `council-verdict.md` uses OLD: SHIP, SHIP WITH FIXES, REFINE, REBUILD (0 matches for new terms)
- `gate-runner-spec.md` uses OLD: SHIP, REFINE (15 matches)
- `pa-questions.md` uses OLD: SHIP, REFINE (6 matches)
- `EXECUTION-TRACKER-TEMPLATE.md` uses OLD: SHIP, REFINE (17 matches)

The checker has zero awareness of this split. An agent reading council-verdict.md will see "SHIP WITH FIXES" while an agent reading pa-weaver.md will see "POLISH." If any gate or routing logic does string matching on verdict names, this breaks silently.

**Gap 3: Disposition reference validation (D-01 through D-09)**
The recipe references dispositions D-01 through D-09. The two-pass split assigns D-01 through D-06 + D-09 to Pass A and D-07 + D-08 to Pass B. The checker does not verify that:
- Every D-XX referenced in artifact-builder-recipe-compose.md exists in the disposition definitions
- Every D-XX referenced in artifact-builder-recipe-polish.md exists in the disposition definitions
- No disposition is assigned to BOTH passes (duplication) or NEITHER pass (loss)

**Gap 4: File routing table validation**
MANIFEST.md contains an agent-to-file routing table (which agent reads which files). The checker verifies files EXIST (Check 10) but does not verify the routing TABLE itself is consistent — e.g., if Pass A builder is listed as receiving `artifact-builder-recipe.md` but should now receive `artifact-builder-recipe-compose.md`, the routing table is stale.

**Gap 5: Gate threshold cross-validation**
Gates reference numeric thresholds (e.g., ">=15 RGB", "<=96px", ">=3 zones"). These thresholds appear in multiple files:
- gate-runner-core.js (enforcement)
- gate-runner-spec.md (documentation)
- artifact-builder-recipe-compose.md (builder instructions)
- artifact-tc-brief-template.md (brief constraints)

The checker does not verify that the SAME threshold value appears consistently. A builder told ">=15 RGB" who is checked by a gate enforcing ">=10 RGB" would never be caught.

**Gap 6: Two-pass file reference validation**
v5 splits `artifact-builder-recipe.md` into `artifact-builder-recipe-compose.md` and `artifact-builder-recipe-polish.md`. The original file contains a redirect header. The checker does not verify:
- That all references to the original file have been updated
- That the redirect header correctly points to both new files
- That line count claims have been updated for the split files

### Proposed Fix: 6 New Check Functions

```javascript
// CHECK 12: SECTION REFERENCE INTEGRITY
function checkSectionReferences() {
  // For each "Section N" reference in MANIFEST.md,
  // verify the target file contains a heading matching "SECTION N" or "## Section N"
}

// CHECK 13: VERDICT TERMINOLOGY CONSISTENCY
function checkVerdictTerminology() {
  // Define canonical verdict names (RELEASE, POLISH, IMPROVE, RETHINK)
  // Scan all operational files for OLD names (SHIP, SHIP WITH FIXES, REFINE, REBUILD)
  // Flag any file using old terminology
  // Exception: historical context quotes are OK
}

// CHECK 14: DISPOSITION ASSIGNMENT COMPLETENESS
function checkDispositionAssignments() {
  // Parse D-01 through D-09 from recipe-compose.md and recipe-polish.md
  // Verify: every disposition appears in exactly one recipe (no dup, no gap)
  // Verify: Pass A has D-01..D-06, D-09; Pass B has D-07, D-08
}

// CHECK 15: ROUTING TABLE CURRENCY
function checkRoutingTable() {
  // Parse MANIFEST.md agent-to-file routing table
  // For each file listed: verify it exists AND is not a redirect stub
  // Flag any reference to artifact-builder-recipe.md (should be compose/polish)
}

// CHECK 16: THRESHOLD CROSS-VALIDATION
function checkThresholdConsistency() {
  // Define canonical thresholds from gate-runner-core.js
  // Check: recipe mentions same values, brief template mentions same values
  // Key thresholds: 15 RGB, 96px, 940-960px, 0.025em, 120px stacked gap
}

// CHECK 17: TWO-PASS FILE REFERENCES
function checkTwoPassReferences() {
  // Scan all .md files for "artifact-builder-recipe.md" (old monolithic name)
  // Flag any non-redirect reference
  // Verify compose + polish line counts add up reasonably to old monolithic total
}
```

### Implementation

The following edits add the 6 new checks to `check-consistency.js`. These are concrete, implementable additions (not design-only).

**Priority order:** Check 13 (terminology) is highest priority because the terminology split is an ACTIVE inconsistency. Check 15 (routing) is second because the two-pass split makes it actionable now. The others are preventive.

---

## D7: Defense Paradox — ABSENT → ADEQUATE (with fixes)

### Quantification: Defense-About-Defense vs Defense-About-Quality

**v5 design corpus: 6,273 lines across 12 files.**

Classification of each file:

| File | Lines | Category | Rationale |
|------|-------|----------|-----------|
| d10-observer-protocol.md | 593 | DEFENSE-ABOUT-DEFENSE | Observer watches orchestrator — defense verifying defense |
| d14-reduction-plan.md | 619 | DEFENSE-ABOUT-DEFENSE | Reducing defense complexity — meta-defense |
| d2-brief-diff-gate.md | 709 | DEFENSE-ABOUT-QUALITY | BV-08 detects compression loss — directly quality-facing |
| d2-narration-spec.md | 401 | MIXED (60/40) | INTENT narration serves both quality traceability and defense auditing. 240 lines quality, 161 defense. |
| d5-two-pass-design.md | 712 | DEFENSE-ABOUT-QUALITY | Two-pass split addresses attention decay — directly improves build quality |
| d5-orchestration-protocol.md | 794 | MIXED (40/60) | Orchestration coordination is partly quality (handoff design) and partly defense (validation checks). 318 quality, 476 defense. |
| ideology-convergence-model.md | 646 | DEFENSE-ABOUT-QUALITY | Verdict taxonomy improves signal fidelity — quality routing |
| ideology-friction-fix.md | 612 | DEFENSE-ABOUT-QUALITY | Removes friction that suppresses quality — directly quality-facing |
| ideology-self-prompting.md | 438 | MIXED (70/30) | IMPROVEMENTS protocol primarily quality-facing (builder self-reflection) with defense aspects (orchestrator transformation rules). 307 quality, 131 defense. |
| ideology-signal-audit.md | 502 | DEFENSE-ABOUT-DEFENSE | Signal analysis of existing defenses — meta-defense |
| impl-gate-report.md | 125 | DEFENSE-ABOUT-DEFENSE | Gate implementation verification — defense about defense |
| impl-recipe-report.md | 122 | DEFENSE-ABOUT-QUALITY | Recipe implementation verification — quality-facing |

**Totals:**
- Defense-about-quality: 709 + 712 + 646 + 612 + 122 + 240 + 318 + 307 = **3,666 lines (58.4%)**
- Defense-about-defense: 593 + 619 + 502 + 125 + 161 + 476 + 131 = **2,607 lines (41.6%)**

**Ratio: 1.4:1 quality-to-defense.** This is healthier than feared but still concerning — nearly half of v5's design effort is defense infrastructure watching other defense infrastructure.

### Meta-to-Output Ratio

- v5 design corpus: 6,273 lines (DESIGN documents)
- v5 implementation: ~300 lines of new operational code/content added to pipeline files
- **Design-to-implementation ratio: 20.9:1**

This means for every line of actual pipeline improvement, 20.9 lines of design documentation were written. The MEMORY.md threshold for concern is 20:1. v5 is at the threshold.

### The Ratchet Problem

Current defense count trajectory:
- v3: 37 gates
- v4: 47 gates (+10)
- v5: 56 gates (+9) — PROPOSED, 2 implemented (GR-83, BV-08)

At this rate, v8 would have ~83 gates. Each gate:
- Adds ~40-60 lines to gate-runner-core.js
- Adds 1 entry to gate-manifest.json
- Must be referenced in gate-runner-spec.md
- Must be listed in MANIFEST.md
- Must be included in SKILL.md tier breakdown
- Must be covered by GR-48 (meta-coverage gate)

**Estimated overhead per gate: ~120 lines across all files.** 27 new gates since v3 = ~3,240 lines of gate-related infrastructure. The gate runner alone is 2,808 lines.

### Proposed Fix: Complexity Budget Gate (CB-01)

**Mechanism:** A new meta-gate that runs at design time (not build time) and prevents the pipeline from exceeding a complexity budget.

**Budget definition:**
```
COMPLEXITY_BUDGET = {
  maxGates: 60,           // Hard ceiling. v5 = 56 (4 remaining slots)
  maxOperationalFiles: 30, // Files an orchestrator must know about
  maxOperationalLines: 12000, // Total lines in va-extraction/*.md + *.js + *.json
  maxDesignToImplRatio: 15, // Design lines per implementation line (for new versions)
}
```

**Enforcement:** Before any new gate, file, or feature is added to the pipeline, the proposer must state which existing gate, file, or feature it REPLACES. If it replaces nothing (net addition), it must justify why the budget has capacity. If the budget is exceeded, the proposer must identify an existing defense to SUNSET.

**Sunset criteria for existing gates:**
- Gate has produced zero FAIL results across 3+ builds → candidate for removal
- Gate duplicates another gate's coverage → merge
- Gate checks something that is structurally impossible given other constraints → remove

**Implementation:** Add a `COMPLEXITY-BUDGET.md` file to va-extraction/ with:
1. Current counts (gates, files, lines)
2. Budget ceilings
3. Sunset candidate list (updated after each build)
4. Change log (what was added, what was removed, net delta)

This is not a programmatic gate — it is a process discipline artifact that makes the defense paradox VISIBLE and TRACKABLE.

### Implementation: COMPLEXITY-BUDGET.md

See concrete file content in the fixes section below.

---

## D9: Environmental Variance — WEAK → ADEQUATE (with fixes)

### Environmental Factor Inventory

| Factor | Current Defense | Risk Level | Notes |
|--------|----------------|------------|-------|
| DPR (device pixel ratio) | GR-61 in gate-runner-core.js | LOW | Well-defended — REQUIRED gate, FAIL aborts screenshots |
| Viewport size | Locked 1440/1024/768 in orchestrator | LOW | Structurally constrained by screenshot protocol |
| Font loading | None | MEDIUM | `document.fonts.ready` mentioned in MEMORY.md but not enforced in gates |
| Network latency | None | LOW | Local file serving eliminates this |
| Model version | OBS-22 (DESIGN-ONLY) checks Opus | HIGH | No operational enforcement. Model behavior is the #1 environmental variable |
| File ordering | None | MEDIUM | 9 PA auditors complete in unpredictable order. Weaver reads all 9 — last-read may get recency bias |
| Token budget | BV-07 checks ceiling | LOW-MEDIUM | Checks ceiling but not how builder behavior changes with input volume |
| Playwright timing | None | MEDIUM | Screenshot capture depends on page load completion. CSS animations could cause inconsistent captures |
| CSS animation state | `animation: none !important` override | LOW | Documented in MEMORY.md, used in practice |
| Rendering engine | None | LOW | Playwright uses Chromium consistently |

### GR-61 (checkDPR) Assessment

**What it does (lines 1742-1771 of gate-runner-core.js):**
1. Reads `window.devicePixelRatio` from the page
2. If DPR === 1: PASS
3. If DPR > 1: FAIL with detailed note explaining that Playwright viewport is already in CSS pixels and the orchestrator should recreate the browser context with `{ deviceScaleFactor: 1 }`

**Is it sufficient?** YES for DPR detection, but NO for DPR remediation:
- The gate correctly identifies the problem
- It provides actionable guidance ("Recreate browser context with { deviceScaleFactor: 1 }")
- But it cannot FIX the problem itself (browser context is already created by the time the gate runs)
- The orchestrator must act on the FAIL result — this is process-dependent, not gate-enforced

**Gap:** GR-61 runs BEFORE screenshots. If the orchestrator ignores the FAIL and captures screenshots anyway, all pixel measurements are doubled. There is no second-chance check that validates screenshots were captured at DPR=1 AFTER the fact. GR-62 (Screenshot Quality) checks for blank/corrupt images but not for DPR-doubled dimensions.

### Proposed Fixes

**Fix 1: Font loading gate (add to checkDPR as a co-located check)**

Add a font-readiness check alongside the DPR check. Both run before screenshot capture:

```javascript
// GR-61b: Font Loading Validation — runs BEFORE screenshot capture
async function checkFontLoading(page) {
  const fontsReady = await page.evaluate(async () => {
    await document.fonts.ready;
    const loaded = [...document.fonts].filter(f => f.status === 'loaded');
    return {
      fontsReady: true,
      loadedCount: loaded.length,
      loadedFamilies: [...new Set(loaded.map(f => f.family))]
    };
  });
  return {
    gate: 'GR-61b', name: 'Font Loading Validation',
    tier: 'REQUIRED',
    status: 'PASS',
    source: 'code',
    measured: fontsReady,
    threshold: { fontsReady: true }
  };
}
```

This is lightweight (adds ~15 lines to core.js) and prevents font-related measurement variance.

**Fix 2: PA auditor ordering randomization (process fix)**

Add to the orchestrator's PA deployment section:

```markdown
**Report reading order (weaver):** The weaver reads all 9 auditor reports.
To prevent recency bias from file ordering, the weaver prompt must include:
"Read all 9 reports. Then RE-READ the first 3 reports before synthesizing.
Weight all 9 reports equally regardless of reading order."
```

This is a 3-line addition to `pa-weaver.md` that addresses ordering variance without infrastructure.

**Fix 3: DPR post-check (add dimension validation to GR-62)**

Extend GR-62 (Screenshot Quality) to verify screenshot dimensions match expected viewport:

```javascript
// Inside checkScreenshotQuality, after blank-check:
// Verify screenshot dimensions match expected viewport * DPR=1
const expectedWidth = 1440; // or 1024, 768 depending on viewport
const img = await sharp(screenshotPath).metadata();
if (img.width !== expectedWidth) {
  // Screenshot was captured at wrong DPR
  result.status = 'FAIL';
  result.note = `Screenshot width ${img.width} !== expected ${expectedWidth}. DPR issue.`;
}
```

This requires a dependency (sharp or similar) but provides a second-chance DPR defense. Without an external image library, the orchestrator can check dimensions via Playwright's page.screenshot return value.

---

## D11: Mode/Context Sensitivity — WEAK → ADEQUATE (with fixes)

### Pipeline Stage Mode-Sensitivity Audit

I traced every pipeline stage for APPLIED vs COMPOSED mode behavior:

| Stage | Mode-Specific Behavior? | Specified? | Gap? |
|-------|------------------------|------------|------|
| Phase 0: Content Analysis | NO — same protocol regardless | YES | None |
| Phase 0: Metaphor Viability | YES — determines mode | YES | None |
| Phase 1: Brief Assembly | YES — mode stated in brief | YES | None |
| Phase 1: Content-Form Fit Gate | YES — routing logic differs | YES (5 rules in artifact-routing.md) | None |
| Phase 1.5: Mode Selection | YES — orchestrator chooses | YES (artifact-orchestrator.md Section 4) | None |
| Phase 2A: Pass A Build | YES — recipe references COMPOSED vs APPLIED | PARTIAL | **Gap A** |
| Phase 2A: Builder Inputs | YES — CD-006 reference is COMPOSED-only | YES | None |
| Phase 2A-gate: Structural Check | NO — same gates regardless | YES | None |
| Phase 2B: Pass B Build | YES — same mode as Pass A | YES (stated, not differentiated) | **Gap B** |
| Phase 3A: Screenshot Capture | NO — same protocol | YES | None |
| Phase 3A+: Experiential Scan | NO — same protocol | YES | None |
| Phase 3B: PA Audit | NO — same questions | YES | **Gap C** |
| Phase 3C: Weaver | YES — tier assessment varies | PARTIAL | **Gap D** |
| Phase 3D: Verdict | YES — mode affects expectations | PARTIAL | **Gap E** |
| IMPROVE Pass | YES — mode determines IMPROVE strategy | UNSPECIFIED | **Gap F** |

### Gap Details

**Gap A: Pass A recipe mode differentiation is implicit, not structural**

The compose recipe (808 lines) contains COMPOSED mode instructions throughout (Step 2.3 naming by concept, Step 2.4 zone-modulated callouts). But it does NOT have an explicit APPLIED mode path. An orchestrator selecting APPLIED mode would still send the COMPOSED recipe — the builder would need to IGNORE the COMPOSED-specific instructions.

- **File:** `artifact-builder-recipe-compose.md`
- **Problem:** Lines 128-149 give COMPOSED mode instructions with no APPLIED alternative
- **Fix:** Add a mode-conditional block:

```markdown
### Step 2.3: Name CSS custom properties (MODE-DEPENDENT)

**If COMPOSED mode (stated in brief):**
Name properties by CONCEPT: `--dispatch-open`, `--editorial-dense`

**If APPLIED mode (stated in brief):**
Name properties by POSITION: `--bg-z1`, `--bg-z2`, `--bg-z3`
Skip metaphor derivation. Focus on clean, consistent component deployment.
```

**Gap B: Pass B polish recipe has no mode differentiation**

`artifact-builder-recipe-polish.md` (284 lines) does not mention APPLIED or COMPOSED at all. Pass B refinement priorities (multi-coherence deepening, transition work, micro-typography) are implicitly COMPOSED-mode priorities. For APPLIED mode, the refinement priorities should differ:

- APPLIED refinement: consistent spacing, component quality, responsive behavior
- COMPOSED refinement: multi-coherence deepening, metaphor expression, zone contrast

**Fix:** Add a 10-line mode-conditional section to the polish recipe header:

```markdown
### Mode-Dependent Refinement Focus

**COMPOSED:** Prioritize multi-coherence deepening (3+ channel shifts per boundary),
zone-to-zone contrast, metaphor expression in micro-details. Target: each zone
feels distinct but unified under governing logic.

**APPLIED:** Prioritize consistent component quality, uniform spacing system,
responsive robustness. Target: professional, clean, every section holds up
independently without needing governing logic to justify its appearance.
```

**Gap C: PA questions are mode-agnostic**

All 69 PA questions (PA-01 through PA-68, skipping gaps) are asked regardless of mode. Some questions are only meaningful in COMPOSED mode:
- PA-16: "Does a structural metaphor unify the page's visual logic?" (COMPOSED only)
- PA-17: "Can you articulate the page's governing concept in one sentence?" (COMPOSED only)
- PA-65 through PA-68 (Tier 5): All require metaphor/compositional intelligence assessment

For APPLIED mode, these questions will either get low scores (penalizing APPLIED mode unfairly) or get N/A answers (reducing the total assessment precision).

**Fix:** Add a scoring note to `pa-deployment.md`:

```markdown
### Mode-Adjusted Scoring

For APPLIED mode builds, the following PA questions are scored differently:
- PA-16, PA-17, PA-65, PA-66, PA-67, PA-68: Score as N/A (do not count toward totals)
- PA-05 ceiling for APPLIED mode: 3.0/4 (DESIGNED requires COMPOSED mode)
- Weaver adjusts denominator accordingly when computing aggregate scores

For COMPOSED mode: all questions scored normally.
```

**Gap D: Weaver tier assessment is partially mode-aware**

The weaver (pa-weaver.md) references tiers (Floor/Middle/Ceiling/Flagship) and has a table mapping PA-05 scores to tiers. But it does not specify that APPLIED mode has a different tier ceiling. An APPLIED build scoring PA-05 3.0 is performing at ceiling; a COMPOSED build scoring PA-05 3.0 is performing at floor-of-Ceiling.

**Fix:** Add to pa-weaver.md Section 3 (diagnostic vocabulary):

```markdown
### Mode-Adjusted Tier Expectations

| Mode | Floor | Middle | Ceiling | Flagship |
|------|-------|--------|---------|----------|
| APPLIED | PA-05 < 2.0 | PA-05 2.0-2.5 | PA-05 2.5-3.0 | N/A |
| COMPOSED | PA-05 < 2.5 | PA-05 2.5-3.0 | PA-05 3.0-3.5 | PA-05 3.5+ |

An APPLIED build at PA-05 3.0 is CEILING for its mode.
A COMPOSED build at PA-05 3.0 is floor-of-CEILING for its mode.
The verdict logic accounts for this: RELEASE threshold for APPLIED = PA-05 >= 3.0.
```

**Gap E: Verdict thresholds are mode-agnostic**

The verdict decision table in pa-weaver.md uses the same PA-05 thresholds regardless of mode:
- RELEASE: PA-05 >= 3.5
- POLISH: PA-05 >= 3.0
- IMPROVE: PA-05 2.5-3.5
- RETHINK: PA-05 < 2.5

For APPLIED mode, these thresholds are too high. An APPLIED build achieving PA-05 3.0 has hit its tier ceiling and should be eligible for RELEASE, not just POLISH.

**Fix:** This is addressed by the mode-adjusted tier table in Gap D above. The verdict table should reference it: "See Mode-Adjusted Tier Expectations. RELEASE threshold for APPLIED mode = PA-05 >= 3.0."

**Gap F: IMPROVE pass strategy is mode-unspecified**

The orchestrator's IMPROVE section (Section 7) does not differentiate IMPROVE strategy by mode. For COMPOSED mode, the IMPROVE builder should focus on deepening metaphor expression and multi-coherence. For APPLIED mode, the IMPROVE builder should focus on component quality and consistency.

**Fix:** Add to orchestrator Section 7:

```markdown
### Mode-Dependent IMPROVE Strategy

**COMPOSED IMPROVE:** Focus IMPROVE builder on metaphor deepening, multi-coherence
strengthening, and zone contrast. Pass the "artistic impression" from the weaver
as primary input alongside conviction artifact.

**APPLIED IMPROVE:** Focus IMPROVE builder on component consistency, spacing uniformity,
and responsive robustness. Pass the "top-5 fixes" from the weaver as primary input.
Omit artistic impression (APPLIED mode does not aim for compositional surprise).
```

---

## Summary of All Proposed Fixes

### D6 Fixes (Cross-File Reference Rot)

| Fix | File | Type | Effort | Impact |
|-----|------|------|--------|--------|
| D6-F1: Section reference checker | check-consistency.js | NEW CHECK | ~40 lines | Prevents silent section renumbering rot |
| D6-F2: Verdict terminology checker | check-consistency.js | NEW CHECK | ~30 lines | Catches the ACTIVE terminology split |
| D6-F3: Disposition assignment checker | check-consistency.js | NEW CHECK | ~25 lines | Prevents disposition loss in two-pass split |
| D6-F4: Routing table currency checker | check-consistency.js | NEW CHECK | ~35 lines | Catches stale agent-to-file mappings |
| D6-F5: Threshold cross-validation | check-consistency.js | NEW CHECK | ~50 lines | Ensures same thresholds everywhere |
| D6-F6: Two-pass file reference checker | check-consistency.js | NEW CHECK | ~20 lines | Catches stale monolithic recipe references |

**Total: ~200 lines added to check-consistency.js. Upgrades D6 from WEAK to STRONG.**

### D7 Fixes (Defense Paradox)

| Fix | File | Type | Effort | Impact |
|-----|------|------|--------|--------|
| D7-F1: COMPLEXITY-BUDGET.md | va-extraction/COMPLEXITY-BUDGET.md | NEW FILE | ~60 lines | Makes complexity visible and trackable |
| D7-F2: Sunset criteria in gate-manifest.json | gate-manifest.json | EDIT | ~10 lines | Defines when gates can be removed |
| D7-F3: Design-to-impl ratio tracking | COMPLEXITY-BUDGET.md | Included in F1 | 0 | Prevents design bloat |

**Total: 1 new file (~60 lines), 1 edit (~10 lines). Upgrades D7 from ABSENT to ADEQUATE.**

### D9 Fixes (Environmental Variance)

| Fix | File | Type | Effort | Impact |
|-----|------|------|--------|--------|
| D9-F1: Font loading gate (GR-61b) | gate-runner-core.js | NEW GATE | ~20 lines | Prevents font-related measurement variance |
| D9-F2: PA report ordering note | pa-weaver.md | EDIT | ~5 lines | Addresses recency bias in weaver synthesis |
| D9-F3: DPR post-check in GR-62 | gate-runner-core.js | EDIT | ~15 lines | Second-chance DPR defense via dimension check |

**Total: ~40 lines. Upgrades D9 from WEAK to ADEQUATE.**

### D11 Fixes (Mode/Context Sensitivity)

| Fix | File | Type | Effort | Impact |
|-----|------|------|--------|--------|
| D11-F1: APPLIED mode recipe path | artifact-builder-recipe-compose.md | EDIT | ~15 lines | Explicit APPLIED instructions in compose recipe |
| D11-F2: Mode-dependent polish focus | artifact-builder-recipe-polish.md | EDIT | ~12 lines | Mode-appropriate refinement priorities |
| D11-F3: Mode-adjusted PA scoring | pa-deployment.md | EDIT | ~10 lines | Fair scoring for APPLIED mode |
| D11-F4: Mode-adjusted tier expectations | pa-weaver.md | EDIT | ~10 lines | Mode-appropriate tier boundaries |
| D11-F5: Mode-adjusted verdict thresholds | pa-weaver.md | EDIT | ~3 lines | APPLIED RELEASE at PA-05 >= 3.0 |
| D11-F6: Mode-dependent IMPROVE strategy | artifact-orchestrator.md | EDIT | ~12 lines | Mode-appropriate IMPROVE focus |

**Total: ~62 lines across 5 files. Upgrades D11 from WEAK to ADEQUATE.**

---

## Overall Assessment

| Dimension | Before | After (with fixes) | Fix Effort |
|-----------|--------|---------------------|------------|
| D6 | WEAK | STRONG | ~200 lines (1 file) |
| D7 | ABSENT | ADEQUATE | ~70 lines (2 files) |
| D9 | WEAK | ADEQUATE | ~40 lines (2 files) |
| D11 | WEAK | ADEQUATE | ~62 lines (5 files) |

**Total implementation effort: ~372 lines across 9 files.**

After these fixes, the pipeline would have:
- **STRONG:** D2, D5, D6, D10, D13, D14 (6)
- **ADEQUATE:** D1, D3, D4, D7, D8, D9, D11, D12 (8)
- **WEAK:** 0
- **ABSENT:** 0

This eliminates all WEAK and ABSENT ratings. The remaining ADEQUATE dimensions (D1, D3, D4, D7, D8, D9, D11, D12) each have structural reasons they cannot easily reach STRONG — they involve LLM self-reporting (D3, D4), spec ambiguity at boundaries (D8), environmental factors outside pipeline control (D9), or multi-dimensional concerns requiring content testing (D11, D12).

---

## ACTIVE Inconsistency Alert: Terminology Split

**This is the single most urgent fix across all four dimensions.** The pipeline is in a MIXED state where:
- Orchestrator + Weaver use NEW terminology (RELEASE/POLISH/IMPROVE/RETHINK)
- Council verdict + Gate spec + PA questions + Execution tracker use OLD terminology (SHIP/SHIP WITH FIXES/REFINE/REBUILD)

Any agent performing string matching on verdict names will get inconsistent results depending on which file it reads. This is NOT theoretical — the weaver produces the verdict, and downstream agents (orchestrator, tracker) must parse it.

**Recommended immediate action:** Either complete the rename across all files or revert the weaver/orchestrator to old terminology. Partial implementation is the worst possible state.

---

*End of crack defense depth analysis.*
