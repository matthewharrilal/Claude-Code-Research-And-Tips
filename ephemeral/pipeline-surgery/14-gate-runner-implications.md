# Gate Runner TC Implications Analysis

## Context

The pipeline now includes a TC (tension-composition) phase that produces a TC brief
(metaphor, zones, tensions, mechanisms) BEFORE the builder starts. The builder uses
this brief as input. Gates then verify the built page. Currently, gates have ZERO
awareness of TC. This analysis investigates what should change.

---

## Section 1: Pre-Build Gate Analysis

### Should gates verify TC brief quality before the builder starts?

**Recommendation: YES -- 1 new pre-build gate (TC-01), plus expand DG-4.**

The TC skill outputs two deliverables:
- **Output A (Conventions Brief):** ~60-80 lines, 4 sections (Content Direction, Zone
  Semantic Map, Core Principle, CSS Domain Extrapolation)
- **Output A-Full (Thought Process):** Full pipeline trace (axis questioning, tension
  derivation, metaphor scoring, isomorphism table, mechanism selections)

Currently, DG-4 (Handoff Validation) checks the builder's `_build-log.md` plan sections
for zone count, bg deltas, mechanisms, transitions, and grid layouts. But in the new
pipeline, the TC brief is the SOURCE of these values. The builder's plan is derived
FROM TC output, not invented independently.

**What to verify about the TC brief:**

| Check | Why | Binary? | Measurable? |
|-------|-----|---------|-------------|
| Brief contains all 4 required sections | Missing sections = builder gets incomplete direction | YES | Parse for section headers |
| Metaphor Quality Score >= 12/18 | Below threshold = weak metaphor (per Step 3.5G) | YES | Parse score from Output A-Full |
| Interpretive Distance >= 2 | CRITICAL RULE from TC skill -- zero-distance metaphors are labels | YES | Parse from rubric |
| At least 5 mechanism categories represented (S:1+, H:1+, C:1+, D:1+, N:1+) | Per-category minimums are MANDATORY in TC | YES | Parse mechanism list |
| Zone count 3-5 in Zone Semantic Map | Zone count mismatch between TC plan and builder execution = drift | YES | Count zones in brief |
| Perceptual Risk <= 2.0 | HIGH RISK metaphors should be caught before build | YES | Parse risk score |
| 6 Binary Rejection Checks all PASS | Any R1-R6 rejection = metaphor should not have reached builder | YES | Parse from Output A-Full |

**Gate spec:** See Section 5, TC-01.

### Should DG-4 expand to cross-reference TC brief?

**Recommendation: YES.**

DG-4 currently validates the builder's plan. In the new pipeline, DG-4 should
additionally verify CONSISTENCY between the TC brief and the builder's plan:

- Zone count in builder plan == zone count in TC brief
- Metaphor name in builder plan == metaphor in TC brief
- Mechanisms in builder plan are a SUPERSET of TC's selected mechanisms (builder may
  add, but should not drop TC-selected mechanisms without documented rationale)

This becomes TC-02 (see Section 5).

---

## Section 2: TC-to-Build Alignment

### Should gates verify the builder used TC's direction?

**Recommendation: YES -- 1 new post-build gate (TC-03), plus enrich existing gates.**

The core risk in the new pipeline is **TC-to-build drift**: TC produces a coherent plan,
but the builder ignores or misinterprets it. Three drift vectors:

1. **Metaphor drift:** Builder uses a different metaphor than TC selected (most severe)
2. **Mechanism drift:** Builder drops TC-selected mechanisms without rationale
3. **Zone drift:** Builder creates different zone count or zone architecture than TC planned

**Metaphor drift detection (TC-03):**

Checking whether the builder "used" the metaphor is partly subjective (BG-1/BG-2
territory). But one BINARY check is feasible:

- TC brief declares a metaphor name (e.g., "geological strata")
- Builder's `_build-log.md` must reference the SAME metaphor name
- If the builder's log names a DIFFERENT metaphor, that is a FAIL

This is not about judging whether the metaphor was well-executed (that is PA's job). It
is about catching the case where the builder received "geological strata" from TC and
built something called "editorial newsroom" instead.

**Mechanism deployment verification (TC-03 sub-check):**

TC selects specific mechanisms (e.g., #1 Border-Weight, #5 Dense/Sparse, #7 Zone
Backgrounds). The builder should deploy ALL of them. Check:

- Parse TC brief for mechanism selections
- Parse builder's `_build-log.md` for deployed mechanisms
- Compute: `deployed_from_TC / TC_selected_total`
- Threshold: >= 80% of TC-selected mechanisms deployed

**Zone architecture verification (via existing SC-12):**

SC-12 already checks zone count (3-5). No new gate needed. But SC-12's diagnostic
output should include the TC-planned zone count for comparison.

---

## Section 3: Behavioral Gate Updates

### BG-1: Metaphor Independence

**Current check:** Build log shows content analysis -> tension derivation -> metaphor
collapse BEFORE library consultation.

**TC implication:** In the new pipeline, the BUILDER does not derive the metaphor. TC
does. BG-1's current check on the build log is now MISPLACED.

**Recommended change:**

BG-1 should now verify the TC OUTPUT, not the build log:

- **Old target:** Builder's `_build-log.md` (was the builder independent?)
- **New target:** TC's Output A-Full (was TC independent?)

The verification remains the same (content analysis -> tension derivation -> metaphor
collapse -> THEN library consultation), but the evidence source shifts from the build
log to the TC thought-process document.

Additionally, if TC runs as a separate agent, BG-1 can verify that the TC agent did
NOT read case-studies/ before Phase 5. This is the Library Access Prohibition (Step 0E
in TC skill). Evidence: TC agent's file-read log should show zero reads from
`case-studies/` before the metaphor commitment step.

**Specific edit to gate-runner.md (BG-1, lines 1004-1021):**

Replace:
```
Check: Did the builder derive the metaphor BEFORE consulting the component library?

Verification: Build log must show:
  1. Content analysis (reading the content)
  2. Tension derivation (identifying the central tension)
  3. Metaphor collapse (naming the metaphor)
  4. THEN library consultation (if any)

FAIL: Build log shows library consultation BEFORE metaphor commitment.
```

With:
```
Check: Did the TC pipeline derive the metaphor BEFORE consulting the component library?

Verification: TC Output A-Full must show:
  1. Content analysis (Phase 0 classification)
  2. Multi-axis questioning (Phase 1 results)
  3. Tension derivation (Phase 2 with Addition Test)
  4. Metaphor collapse and commitment (Phase 3 + Step 3.5 lock-in)
  5. THEN mechanism library access (Phase 4, Step 4.0)
  6. THEN case study access (Phase 5 ONLY)

FAIL: TC output shows case-study or library access before metaphor commitment.
Note: In the new pipeline, TC (not the builder) performs metaphor derivation. The
builder receives the committed metaphor as input. BG-1 now audits TC, not the builder.
```

### BG-2: Metaphor Structural

**Current check:** Fresh-eyes Opus agent reads the build plan (without reading the
build log) and judges whether the metaphor is STRUCTURAL or ANNOUNCED.

**TC implication:** BG-2 should now read the TC brief instead of (or in addition to) the
build plan. The TC brief contains the metaphor name, isomorphism table, and mechanism
selections -- all the information needed for the STRUCTURAL vs ANNOUNCED judgment.

**Recommended change:**

- **Input source:** TC Output A (Conventions Brief) -- specifically the metaphor name
  and CSS Domain Extrapolation section
- **Judgment remains the same:** Does the metaphor suggest specific CSS properties
  (STRUCTURAL) or is it label-only (ANNOUNCED)?
- **Additional signal:** TC's Structural Survival score from Step 3.5G. If Structural
  Survival >= 2, the TC pipeline already assessed the metaphor as structural. BG-2
  becomes a SECOND CHECK (fresh-eyes validation of TC's self-assessment).

**Specific edit to gate-runner.md (BG-2, lines 1025-1044):**

Replace:
```
Verification: Fresh-eyes Opus agent reads the build plan (without reading the build log).
```

With:
```
Verification: Fresh-eyes Opus agent reads the TC Conventions Brief (Output A) without
reading the TC thought process (Output A-Full) or the build log. Input: metaphor name +
CSS Domain Extrapolation section only.

Additional signal: TC Step 3.5G Structural Survival score is available as diagnostic
context. BG-2 is a FRESH-EYES SECOND CHECK on TC's self-assessment, not a rubber stamp.
If BG-2 disagrees with TC's self-score, BG-2's judgment takes priority (fresh eyes >
self-assessment).
```

---

## Section 4: DG-4 Enrichment

### Should DG-4 cross-reference TC brief with build log?

**Recommendation: YES.**

DG-4 currently validates the builder's plan sections (conviction statement, transition
table, fractal echo table) against 5 sub-checks. With TC in the pipeline, DG-4 should
add cross-referencing:

**New DG-4 sub-checks (additions, not replacements):**

| # | Sub-Check | What It Validates | Threshold |
|---|-----------|-------------------|-----------|
| 6 | TC-build zone count match | builder plan zone_count == TC brief zone_count | Exact match |
| 7 | TC-build metaphor match | builder plan metaphor name == TC brief metaphor name | Exact string match |
| 8 | TC-build mechanism coverage | builder plan mechanisms CONTAINS >= 80% of TC-selected mechanisms | >= 80% |

**Implementation:**

These sub-checks require parsing BOTH the TC brief AND the builder's `_build-log.md`.
DG-4 already parses the build log. The addition is parsing the TC brief (Output A) for:
- Zone count (from Zone Semantic Map section)
- Metaphor name (from Content Direction section)
- Mechanism list (from CSS Domain Extrapolation or Output A-Full)

**Format for cross-validation:**

```json
{
  "gate": "DG-4",
  "sub_check": "tc_build_zone_match",
  "status": "PASS" | "FAIL",
  "measured": {
    "tc_zone_count": 4,
    "build_zone_count": 4
  },
  "fix": {
    "instruction": "Builder plan declares N zones but TC brief declares M zones. Align zone count.",
    "brief_section": "Re-read TC Conventions Brief Section 2 (Zone Semantic Map) before modifying zones."
  }
}
```

---

## Section 5: New Gate Proposals

### TC-01: TC Brief Completeness (Pre-Build Gate)

**ID:** TC-01
**Tier:** A (composition-critical)
**Enforcement:** Programmatic (blocking)
**Timing:** Runs AFTER TC completes, BEFORE builder starts (alongside DG-4)

**Check description:** TC Output A (Conventions Brief) contains all required sections
and key quality thresholds.

**8 sub-checks (all binary, all measurable):**

| # | Sub-Check | Threshold | Measurement Method |
|---|-----------|-----------|-------------------|
| 1 | Section 1 (Content Direction) present | Contains "Content Direction" or "Reader Needs" header | String search in TC brief |
| 2 | Section 2 (Zone Semantic Map) present | Contains "Zone" header with >= 3 zone definitions | String search + count zone entries |
| 3 | Section 3 (Core Principle) present | Contains "Core Principle" or "Restraint" header | String search |
| 4 | Section 4 (CSS Domain Extrapolation) present | Contains "CSS" or "Domain" header with >= 4 domain entries | String search + count entries |
| 5 | Zone count 3-5 | Parse zone definitions, count = 3-5 | Count zone entries in Section 2 |
| 6 | Per-category mechanisms (S:1+, H:1+, C:1+, D:1+, N:1+) | Parse mechanism list, verify >= 1 per category | Parse mechanism names, classify by category |
| 7 | Metaphor name present | Non-empty metaphor identifier in Section 1 | String presence check |
| 8 | Brief length <= 120 lines | Total line count of Output A | Line count (volume ceiling is 80, but allow 120 with tolerance) |

**PASS:** All 8 sub-checks pass
**FAIL:** Any sub-check fails

**Fix recipe format:**
```json
{
  "gate": "TC-01",
  "status": "FAIL",
  "failing_checks": ["zone_count", "category_coverage"],
  "fix": {
    "instruction": "TC brief has N zones (required: 3-5) and missing categories [X, Y]. Re-run TC Phase 4 with corrected mechanism selection.",
    "reference": "tension-composition/SKILL.md Phase 4.0, Step 4.1"
  }
}
```

**Programmatic measurement (JavaScript-free -- file parse):**

TC-01 does NOT run in Playwright. It runs as a text parser on the TC brief file.

```python
# Pseudocode for TC-01 validation
brief = read_file(tc_brief_path)
checks = {
  'section_1': has_header(brief, ['Content Direction', 'Reader Needs']),
  'section_2': has_header(brief, ['Zone']) and count_zones(brief) >= 3,
  'section_3': has_header(brief, ['Core Principle', 'Restraint']),
  'section_4': has_header(brief, ['CSS', 'Domain']) and count_domains(brief) >= 4,
  'zone_count': 3 <= count_zones(brief) <= 5,
  'category_coverage': all(cat >= 1 for cat in count_by_category(brief)),
  'metaphor_present': extract_metaphor(brief) != '',
  'brief_length': line_count(brief) <= 120,
}
return all(checks.values())
```

**Provenance:** TC skill mandates all 4 sections (Phase 5: Output A spec), per-category
minimums (Step 4.0), zone count 3-5 (Phase 4.0A + R-MC-06), and brief volume ceiling
(Phase 5: "Volume ceiling: 80 lines").

---

### TC-02: TC-to-Build Plan Consistency (Pre-Build Cross-Validation Gate)

**ID:** TC-02
**Tier:** A (composition-critical)
**Enforcement:** Programmatic (blocking)
**Timing:** Runs AFTER builder writes plan sections of `_build-log.md`, BEFORE build proceeds

**Check description:** Builder's plan is consistent with TC brief. Catches drift between
TC direction and builder interpretation.

**3 sub-checks:**

| # | Sub-Check | Threshold | Measurement Method |
|---|-----------|-----------|-------------------|
| 1 | Zone count match | builder plan zone_count == TC brief zone_count | Parse both files, compare integers |
| 2 | Metaphor name match | builder plan metaphor == TC brief metaphor (case-insensitive) | Parse both files, string compare |
| 3 | Mechanism coverage | (TC mechanisms found in builder plan) / (total TC mechanisms) >= 0.80 | Parse mechanism lists from both files |

**PASS:** All 3 sub-checks pass
**FAIL:** Any sub-check fails

**Fix recipe:**
```json
{
  "gate": "TC-02",
  "status": "FAIL",
  "failing_checks": ["metaphor_match"],
  "measured": {
    "tc_metaphor": "geological strata",
    "build_metaphor": "editorial newsroom"
  },
  "fix": {
    "instruction": "Builder's plan uses metaphor 'editorial newsroom' but TC brief committed to 'geological strata'. Builder must adopt TC's committed metaphor. If builder has compositional reason to deviate, document rationale and escalate to team lead.",
    "brief_section": "Re-read TC Conventions Brief Section 1 (Content Direction)"
  }
}
```

**Implementation:** File-parse gate (not Playwright). Parses TC brief and `_build-log.md` plan sections.

**Provenance:** TC's metaphor commitment (Step 3.5) is a LOCK-IN gate. The builder
receives a committed metaphor and should not change it unilaterally.

---

### TC-03: TC-to-Build Mechanism Deployment (Post-Build Verification Gate)

**ID:** TC-03
**Tier:** A (composition-critical)
**Enforcement:** Programmatic (blocking)
**Timing:** Runs in full gate run (after build complete), GROUP 5 (after DG-1, DG-2, DG-4)

**Check description:** The built HTML actually deploys the mechanisms TC selected.
Catches the case where TC planned 16 mechanisms but the builder only deployed 8.

**2 sub-checks:**

| # | Sub-Check | Threshold | Measurement Method |
|---|-----------|-----------|-------------------|
| 1 | Mechanism count | Builder's fractal_table.yaml + build log reference >= 80% of TC's mechanism count | Parse TC mechanism list, parse builder deliverables |
| 2 | Category coverage maintained | Built page has mechanisms in all 5 categories that TC specified | Parse builder's mechanism deployment log |

**PASS:** Both sub-checks pass
**FAIL:** Either sub-check fails

**Why this gate matters:** The flagship failure demonstrated that builders can comply
with ALL existing gates while producing a perceptually flat page. If TC selects 16
mechanisms across 5 categories, and the builder only deploys 8 from 3 categories, the
gate system should catch this BEFORE PA runs. Currently, no gate checks whether the
builder executed TC's plan.

**Fix recipe:**
```json
{
  "gate": "TC-03",
  "status": "FAIL",
  "measured": {
    "tc_planned_mechanisms": 16,
    "builder_deployed_mechanisms": 8,
    "coverage_ratio": 0.50,
    "missing_categories": ["Depth/Emphasis", "Structure/Navigation"]
  },
  "fix": {
    "instruction": "Builder deployed 8/16 TC-planned mechanisms (50%, threshold: 80%). Missing categories: Depth/Emphasis, Structure/Navigation. Add at least 1 mechanism from each missing category.",
    "reference": "TC brief mechanism selections",
    "brief_section": "Re-read TC Conventions Brief Section 4 (CSS Domain Extrapolation)"
  }
}
```

**Implementation:** File-parse gate. Parses TC brief mechanism list and builder's
`_build-log.md` deployed mechanisms section.

**Provenance:** Per-category minimums are MANDATORY in TC (Step 4.0). If TC selected
mechanisms and the builder dropped them, this is drift, not a TC failure.

---

## Section 6: What NOT to Change

### Gates that should remain UNCHANGED:

**All Tier B (Identity) gates -- SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08, DG-3:**

These enforce soul constraints (radius, shadow, palette, fonts, landmarks, skip link,
components). They are content-agnostic and TC-agnostic. TC does not affect identity
enforcement. No changes needed.

**SC-00 (Zone Selector Validation):**

Zone selector validation is a pure HTML-structure check. TC does not affect how the
builder names zones in HTML. No changes needed.

**SC-01 (Container Width):**

Container width 940-960px is universal and TC-independent. TC's metaphor may WANT
narrow width, but the guardrail is the same regardless of TC. No changes needed.

**SC-09 (Background Delta):**

Background delta >= 15 RGB at zone boundaries is a perceptual floor. TC may plan
specific background values, but SC-09 checks the RENDERED result, not the plan.
No changes needed.

However, SC-09's diagnostic output SHOULD include TC's planned bg values for
cross-reference (as context, not enforcement). If TC planned bg deltas of 25 RGB
but the built page shows 5 RGB, that signals builder drift even if SC-09's fix recipe
would already catch it.

**SC-10 (Stacked Gap):**

Stacked gap <= 120px is a perceptual floor independent of TC. No changes needed.

**SC-11 (Typography Zone Hierarchy):**

Typography hierarchy is checked against rendered output. TC may plan a typography arc,
but SC-11 checks the result. No changes needed.

**SC-12 (Zone Count):**

Zone count 3-5 is universal. However, SC-12's diagnostic output SHOULD include TC's
planned zone count for comparison. If TC planned 4 zones and the builder built 3, SC-12
passes (3 is in range) but TC-02 catches the drift. SC-12 itself needs no changes.

**SC-13 (Multi-Coherence):**

Multi-coherence channel shift counts are checked against rendered output. TC plans
coherence but SC-13 verifies it. No changes to SC-13 itself.

**SC-14 (Sub-Perceptual Prevention):**

Sub-perceptual detection is a pure CSS check. TC-independent. No changes.

**SC-15 (Border/Structural Presence):**

Border presence is checked against rendered output. No changes.

**SC-13B, SC-16 (ADVISORY gates):**

Direction coherence and monotonic progression are diagnostic. No changes.

**DG-1 (Fractal Echo Table), DG-2 (Cascade Value Table):**

These validate builder deliverables. No TC dependency. No changes.

### Gates that need MINOR enrichment (diagnostic context only, not threshold changes):

| Gate | Enrichment | Why |
|------|-----------|-----|
| SC-09 | Include TC-planned bg values in diagnostic output | Cross-reference for PA auditors |
| SC-12 | Include TC-planned zone count in diagnostic output | Drift detection context |
| SC-13 | Include TC-planned channel expectations in diagnostic output | Coherence audit context |

These are DIAGNOSTIC additions, not enforcement changes. They add TC context to gate
output so PA auditors have richer information.

---

## Section 7: BLOCKING Issues

### BLOCKING-1: DG-4 timing must be redefined

**Current DG-4 timing:** "Runs BEFORE build begins (validates the builder's build log
plan sections)"

**Problem:** With TC in the pipeline, there are now TWO pre-build validation points:
1. After TC completes (validate TC brief -- TC-01)
2. After builder writes plan (validate plan consistency with TC -- TC-02 + DG-4)

DG-4's timing description must be updated to clarify it runs at validation point 2,
not validation point 1. TC-01 runs at point 1.

**Fix:** Update DG-4 timing to: "Runs AFTER builder writes plan sections of
`_build-log.md` (validation point 2). TC-01 runs AFTER TC completes (validation
point 1). Both must PASS before build proceeds."

### BLOCKING-2: New gate execution group needed

**Current gate groups (lines 79-108):**
- GROUP 0: Zone Validation (SC-00)
- GROUP 1: Identity (SC-01 through SC-05)
- GROUP 2: Structure (SC-06 through DG-3)
- GROUP 3: Perception (SC-09 through SC-15)
- GROUP 4: Compositional (SC-13, SC-13B, SC-16)
- GROUP 5: Deliverable (DG-1, DG-2, DG-4)

**Problem:** TC gates (TC-01, TC-02) run BEFORE the build. TC-03 runs after. They do
not fit in the existing group schedule, which is designed for during/after-build gates.

**Fix:** Add GROUP -1 (Pre-Build Validation):

```
GROUP -1 -- Pre-Build Validation (BEFORE build starts):
  TC-01 (TC brief completeness) -- runs after TC completes
  TC-02 (TC-to-build plan consistency) -- runs after builder writes plan
  DG-4 (handoff validation) -- runs after builder writes plan (existing, unchanged)

  TC-01 runs FIRST. If TC-01 FAILS, TC output goes back to TC for correction.
  TC-02 and DG-4 run SECOND (parallel). If either FAILS, builder corrects plan.
  Build proceeds ONLY when all GROUP -1 gates PASS.
```

Add TC-03 to GROUP 5:
```
GROUP 5 -- Deliverable (after GROUP 4):
  DG-1, DG-2, DG-4, TC-03
```

### BLOCKING-3: BG-1 and BG-2 evidence source must be updated

As detailed in Section 3, BG-1 and BG-2 currently target the builder's build log.
With TC in the pipeline, they must target TC's output. If gate-runner.md is not updated,
BG-1 will check the BUILDER for metaphor independence when the BUILDER no longer derives
the metaphor. This makes BG-1 vacuously true (builder never derives, so never violates)
and completely useless.

**Fix:** Update BG-1 evidence source from `_build-log.md` to TC Output A-Full. Update
BG-2 input source from "build plan" to "TC Conventions Brief (Output A)."

---

## Summary: Complete Change Map

| Change Type | Gate | Action |
|------------|------|--------|
| NEW GATE | TC-01 | TC Brief Completeness (pre-build, blocking) |
| NEW GATE | TC-02 | TC-to-Build Plan Consistency (pre-build, blocking) |
| NEW GATE | TC-03 | TC-to-Build Mechanism Deployment (post-build, blocking) |
| MODIFY | BG-1 | Evidence source: build log -> TC Output A-Full |
| MODIFY | BG-2 | Input source: build plan -> TC Conventions Brief |
| MODIFY | DG-4 | Add 3 sub-checks (zone match, metaphor match, mechanism coverage) |
| ENRICH | SC-09 | Diagnostic output includes TC-planned bg values |
| ENRICH | SC-12 | Diagnostic output includes TC-planned zone count |
| ENRICH | SC-13 | Diagnostic output includes TC-planned channel expectations |
| ADD GROUP | GROUP -1 | Pre-Build Validation group (TC-01, TC-02, DG-4) |
| EXPAND GROUP | GROUP 5 | Add TC-03 |
| UNCHANGED | SC-00 through SC-08, SC-10, SC-11, SC-14, SC-15, SC-13B, SC-16, DG-1, DG-2, DG-3 | No changes needed |

**Total new gates: 3**
**Total modified gates: 3**
**Total enriched gates (diagnostic only): 3**
**Total unchanged gates: 16**
