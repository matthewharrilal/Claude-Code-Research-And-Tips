# Cross-Reference Validation Report

**Auditor:** Cross-reference validation agent (Opus)
**Date:** 2026-02-20
**Files Validated:**
1. `~/.claude/skills/build-page/SKILL.md` (436 lines) -- orchestrator
2. `design-system/pipeline/conventions-brief.md` (443 lines) -- builder guidance
3. `design-system/pipeline/gate-runner.md` (1159 lines) -- programmatic verification
4. `design-system/pipeline/flagship-pa-questions.md` (144 lines) -- perceptual verification

---

## CHECK 1: Gate ID Consistency

**Verdict: FAIL**

### Gates referenced in SKILL.md (Section 3.2 gate table + Section 3.3 + Section 3.4):

**16 main gates in table:** SC-00, SC-01, SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08, SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15

**Additional gates mentioned (Section 3.3, line 147):** SC-13B, SC-16, DG-1, DG-2, DG-4, BG-1, BG-2

**Total SKILL.md references:** SC-00 through SC-16 (incl SC-13B), DG-1, DG-2, DG-4, BG-1, BG-2 = 22 gates

### Gates defined in gate-runner.md (complete summary table, lines 1118-1143):

SC-00, SC-01, SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08, SC-09, SC-10, SC-11, SC-12, SC-13, SC-13B, SC-14, SC-15, SC-16, DG-1, DG-2, DG-3, DG-4 = 22 gates

Plus 2 behavioral gates: BG-1, BG-2

**Total gate-runner.md gates:** 24 (22 in summary table + 2 behavioral)

### Mismatches:

| Issue | Detail |
|-------|--------|
| **DG-3 MISSING from SKILL.md** | gate-runner.md defines DG-3 (Landmark Completeness, line 1051) as a blocking Tier B gate. It appears in micro-gate MG-1 (line 42), GROUP 2 (line 93), the fix recipe reference table (line 239), and the summary table (line 1140). SKILL.md never mentions DG-3 anywhere -- not in the 16-gate table, not in Section 3.3, and not in Section 3.4. |
| **BG-3 referenced in task spec but ABSENT from both files** | The task specification mentions "BG-1 through BG-3" but neither SKILL.md nor gate-runner.md defines a BG-3. Both files define only BG-1 and BG-2. BG-3 does not exist. (This is a task spec issue, not a file issue.) |
| **SC-14B referenced in task spec but ABSENT from both files** | The task specification mentions "SC-14B" but neither file defines this gate. Not a file issue. |
| **SKILL.md line 124: wrong line count** | States "gate-runner.md (992 lines, 21 gates with proven JS)" but gate-runner.md is 1159 lines and contains 22 gates in the summary table plus 2 behavioral = 24 total. The "21" count is also wrong. |
| **SKILL.md line 122 vs 147: internal gate count inconsistency** | Line 122: "Run these 16 composition-critical gates." Line 147: "For EACH of the 16 gates (plus advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1...BG-2)." The "16 gates" refers to the table (SC-00 through SC-15), but SC-13B and SC-16 appear in gate-runner.md as part of the gate suite. SKILL.md gate table has 16 rows but the full suite is 24 gates. The counting is fragmented. |
| **SKILL.md Section 3.4 mentions DG-4 but NOT DG-3** | Section 3.4 lists deliverable gates DG-1, DG-2, DG-4 explicitly. DG-3 is absent. gate-runner.md groups DG-3 with structure gates (GROUP 2), not with deliverable gates (GROUP 5), which may explain the omission -- but DG-3 still needs to be run and is not mentioned. |

### gate-runner.md summary table count (line 1143):
> "Totals: 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates"

But the table has 22 rows (numbered 0-21). 1 pre-gate (SC-00) + 15 blocking programmatic (SC-01 through SC-15) + 2 advisory (SC-13B, SC-16) + 4 deliverable (DG-1 through DG-4) = 22. Plus 2 behavioral (BG-1, BG-2) described separately = 24. The line says "17 blocking" but counting rows: SC-01 through SC-15 = 15 programmatic blocking + DG-1, DG-2, DG-3, DG-4 = 4 deliverable blocking = 19 blocking total. The count "17 blocking" appears to be wrong (should be 19 if deliverable-blocking are included, or 15 if they're separate).

Wait -- checking gate-runner line 1144: "Tier Pre (validation): 1 | Tier 1 (programmatic): 15 | Tier 2 (deliverable): 4 | Tier 3 (behavioral): 2". So it's 1 + 15 + 4 + 2 = 22. The "17 blocking" on line 1143 appears to count SC-01 through SC-15 (15) + SC-13B + SC-16 (2) = 17. But SC-13B and SC-16 are ADVISORY (non-blocking), so "17 blocking" over-counts by including 2 advisory gates.

**Internal gate-runner.md counting inconsistency at line 1143:** "17 blocking" should be "15 blocking" (SC-01 through SC-15). SC-13B and SC-16 are ADVISORY, not blocking.

---

## CHECK 2: Threshold Consistency

**Verdict: FAIL**

### SC-00: Zone Selector Validation
| Property | SKILL.md (line 128) | gate-runner.md (line 126-127) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 3 zone elements resolved" | ">= 3 elements" |
| **Status** | **MATCH** | |

### SC-01: Container Width
| Property | SKILL.md (line 129) | gate-runner.md (line 296-306) |
|----------|--------------------|-----------------------------|
| Threshold | "940-960px" | "940px <= max-width <= 960px" |
| **Status** | **MATCH** | |

### SC-02: Soul Compliance
| Property | SKILL.md (line 130) | gate-runner.md (line 787-802) |
|----------|--------------------|-----------------------------|
| Threshold | "border-radius:0, box-shadow:none on ALL" | "border-radius: 0px AND box-shadow: none AND filter: none (no drop-shadow) on EVERY element" |
| **Status** | **MINOR MISMATCH** -- SKILL.md omits the `filter: none` (drop-shadow) check. gate-runner includes it. |

### SC-04: Warm Palette
| Property | SKILL.md (line 132) | gate-runner.md (line 845-863) |
|----------|--------------------|-----------------------------|
| Threshold | "R >= G >= B on ALL backgrounds" | "R >= G >= B" with exception for `.callout-info`, `.callout-tip`, `[data-accent]`, `[data-inverted]` containers |
| **Status** | **MISMATCH** -- SKILL.md says "ALL backgrounds" with no exceptions. gate-runner.md has explicit accent/inverted container exceptions. Builder following SKILL.md would expect zero exceptions; gate-runner allows them. |

### SC-05: No Pure B/W
| Property | SKILL.md (line 133) | gate-runner.md (line 877-903) |
|----------|--------------------|-----------------------------|
| Threshold | "No rgb(0,0,0) or rgb(255,255,255)" | No pure black or white, with exceptions for `[data-inverted]` and `.dark-bg` containers for white text |
| **Status** | **MISMATCH** -- SKILL.md says no pure B/W with no exceptions. gate-runner.md has inverted-context exceptions for white text on dark backgrounds. |

### SC-06: ARIA Landmarks
| Property | SKILL.md (line 134) | gate-runner.md (line 917) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 5" | ">= 5 landmarks" (Flagship) |
| **Status** | **MATCH** | |

### SC-08: Component Classes
| Property | SKILL.md (line 136) | gate-runner.md (line 966) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 8 types" | ">= 8 component types" (Flagship) |
| **Status** | **MATCH** | |

### SC-09: Background Delta
| Property | SKILL.md (line 137) | gate-runner.md (line 324) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 15 RGB between adjacent zones" | "max-channel RGB delta >= 15 at EVERY adjacent zone boundary" |
| **Status** | **MATCH** | |

### SC-10: Stacked Gap
| Property | SKILL.md (line 138) | gate-runner.md (line 360) |
|----------|--------------------|-----------------------------|
| Threshold | "<= 120px total at section boundaries" | "Total stacked gap <= 120px at EVERY zone boundary" |
| **Status** | **MATCH** | |

### SC-11: Typography Zones
| Property | SKILL.md (line 139) | gate-runner.md (line 397-403) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 3 distinct font-size zones" | "display-body delta >= 10px, body-detail delta >= 2px, 3+ distinct typography zones" (Flagship) |
| **Status** | **MISMATCH** -- SKILL.md omits the 10px display-body delta and 2px body-detail delta thresholds. Only mentions ">= 3 distinct font-size zones." gate-runner's Flagship threshold has 3 sub-requirements but SKILL.md only states 1 of them. |

### SC-12: Zone Count
| Property | SKILL.md (line 140) | gate-runner.md (line 451) |
|----------|--------------------|-----------------------------|
| Threshold | "3-5 distinct content zones" | "3 <= zone count <= 5" (Flagship) |
| **Status** | **MATCH** | |

### SC-13: Multi-Coherence
| Property | SKILL.md (line 141) | gate-runner.md (line 477-489) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 3 of 6 channels shift at every zone boundary, avg >= 4" | ">= 3 at every boundary AND average >= 4.0" (Flagship) |
| **Status** | **MATCH** | |

### SC-14: Sub-Perceptual Prevention
| Property | SKILL.md (line 142) | gate-runner.md (line 580-585) |
|----------|--------------------|-----------------------------|
| Threshold | "No letter-spacing < 0.025em, no adjacent bg delta < 15 RGB, no 3+ values clustered within 2px" | Sub-check 1: No ls in (0, 0.025em). Sub-check 2: No adjacent sorted ls values < 0.5px apart. Sub-check 3: No intra-zone bg deltas 1-14 RGB. |
| **Status** | **MISMATCH** -- SKILL.md says "no 3+ values clustered within 2px" but gate-runner sub-check 2 says "adjacent sorted values < 0.5px apart" (2-value comparison, 0.5px threshold, not "3+ values" or "2px"). |

### SC-15: Border/Structural Presence
| Property | SKILL.md (line 143) | gate-runner.md (line 640) |
|----------|--------------------|-----------------------------|
| Threshold | ">= 3 distinct border configurations (different widths, colors, or positions)" | ">= 3 DISTINCT border configurations" (Flagship) |
| **Status** | **MATCH** | |

### DG-1: Fractal Echo Table
| Property | SKILL.md (line 167) | gate-runner.md (line 730-737) |
|----------|--------------------|-----------------------------|
| File reference | "Fractal echo table exists" (in `_build-log.md`) | "Builder's `fractal_table.yaml` deliverable" |
| **Status** | **MISMATCH** -- SKILL.md expects the fractal echo table inside `_build-log.md`. gate-runner.md expects a separate `fractal_table.yaml` file. Different file locations for the same deliverable. |

### DG-2: Cascade Value Table
| Property | SKILL.md (line 168) | gate-runner.md (line 753-754) |
|----------|--------------------|-----------------------------|
| File reference | "Cascade value table exists at `_cascade-value-table.md`" | "Builder's `cascade_table.yaml`" |
| **Status** | **MISMATCH** -- SKILL.md expects `_cascade-value-table.md` (markdown). gate-runner.md expects `cascade_table.yaml` (YAML). Different file names AND formats. |

### DG-4: Handoff Validation
| Property | SKILL.md (line 169-173) | gate-runner.md (line 1077-1083) |
|----------|--------------------|-----------------------------|
| Mechanisms sub-check | ">= 14 total AND >= 1 in each of 5 categories" | ">= 14 total AND >= 1 in each of 5 categories" |
| **Status** | **MATCH** | |

### BG-1 / BG-2: Behavioral Gates
| Property | SKILL.md (line 176-177) | gate-runner.md (line 1004-1043) |
|----------|--------------------|-----------------------------|
| BG-1 description | "Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation" | "Did the builder derive the metaphor BEFORE consulting the component library?" |
| BG-2 description | "Metaphor is STRUCTURAL (suggests CSS properties), not ANNOUNCED (label-only)" | "Is the metaphor STRUCTURAL... or ANNOUNCED" |
| **Status** | **MATCH** -- descriptions are consistent. |

### Summary of Threshold Mismatches:

| Gate | Issue | Severity |
|------|-------|----------|
| SC-02 | SKILL.md omits `filter: none` sub-check | MEDIUM -- builder might not check for drop-shadow |
| SC-04 | SKILL.md says "ALL" but gate allows accent exceptions | LOW -- gate is more permissive than SKILL.md claims |
| SC-05 | SKILL.md says no exceptions; gate has inverted exceptions | LOW -- gate is more permissive |
| SC-11 | SKILL.md omits 10px display-body and 2px body-detail sub-thresholds | HIGH -- builder cannot self-check these values |
| SC-14 | SKILL.md says "3+ values within 2px"; gate says "adjacent values < 0.5px" | HIGH -- different algorithms, different thresholds |
| DG-1 | File format mismatch: _build-log.md vs fractal_table.yaml | HIGH -- builder produces wrong file |
| DG-2 | File format mismatch: _cascade-value-table.md vs cascade_table.yaml | HIGH -- builder produces wrong file |

---

## CHECK 3: File Path References

**Verdict: FAIL**

### Paths referenced in SKILL.md:

| Path | File | Status |
|------|------|--------|
| `design-system/pipeline/conventions-brief.md` | SKILL.md line 49 | EXISTS |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | SKILL.md line 53 | EXISTS |
| `design-system/compositional-core/components/components.css` | SKILL.md line 54 | EXISTS |
| `design-system/compositional-core/vocabulary/tokens.css` | SKILL.md line 55 | EXISTS |
| `design-system/compositional-core/identity/prohibitions.md` | SKILL.md line 56 | EXISTS |
| `design-system/pipeline/gate-runner.md` | SKILL.md line 124 | EXISTS |
| `design-system/pipeline/flagship-pa-questions.md` | SKILL.md line 254 | EXISTS |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | SKILL.md line 254 | EXISTS |

### Paths referenced in conventions-brief.md:

| Path | File | Status |
|------|------|--------|
| `components.css` | conventions-brief.md line 65, 200, 406 | Implied path `design-system/compositional-core/components/components.css` -- EXISTS |
| `mechanism-catalog.md` | conventions-brief.md line 404 | Implied path -- EXISTS |
| `tokens.css` | gate-runner.md line 348, 385 | Referenced in fix recipes -- EXISTS |

### Paths referenced in gate-runner.md:

| Path | File | Status |
|------|------|--------|
| `conventions-brief.md` | gate-runner.md lines 184, 193, 249 | Relative reference -- EXISTS |
| `fractal_table.yaml` | gate-runner.md line 730 | **NOT FOUND** -- this is a builder output file, not a pre-existing file. However, the file FORMAT (YAML) contradicts SKILL.md's instruction to produce `_build-log.md` (markdown). |
| `cascade_table.yaml` | gate-runner.md line 753 | **NOT FOUND** -- same issue. Format (YAML) contradicts SKILL.md's `_cascade-value-table.md` (markdown). |

### SKILL.md builder instruction file paths:

| File | Referenced at | Notes |
|------|--------------|-------|
| `output.html` | SKILL.md line 76 | Output file -- builder creates |
| `_build-log.md` | SKILL.md line 77 | Output file -- builder creates; contains fractal echo table |
| `_cascade-value-table.md` | SKILL.md line 78 | Output file -- contradicts gate-runner's `cascade_table.yaml` |

### File path issues:

1. **DG-1 / DG-2 file format contradiction:** SKILL.md tells the builder to produce `_build-log.md` (with fractal echo table embedded) and `_cascade-value-table.md`. gate-runner.md's DG-1 and DG-2 expect `fractal_table.yaml` and `cascade_table.yaml`. The gate runner cannot validate a YAML file that the builder was told to produce as markdown, and vice versa.

2. **SKILL.md line 124 stale metadata:** References "992 lines" but gate-runner.md is 1159 lines. References "21 gates" but gate-runner.md defines 22 in the summary table + 2 behavioral = 24.

---

## CHECK 4: Mechanism Category Alignment

**Verdict: FAIL**

### Category names across files:

| File | Line | 5th Category Name |
|------|------|-------------------|
| mechanism-catalog.md | line 62 | **Structure/Navigation** |
| conventions-brief.md | line 67 | **Navigation/Structure** |
| conventions-brief.md | line 248 | **Structure/Navigation** |
| SKILL.md | line 171 | **Navigation/Structure** |
| gate-runner.md | line 1081 | **Navigation/Structure** |

### Issues:

1. **Internal inconsistency within conventions-brief.md:** Line 67 uses "Navigation/Structure" but line 248 uses "Structure/Navigation". The 5th category has two different names within the same file.

2. **mechanism-catalog.md vs all other files:** The catalog (the canonical source for mechanism categories) uses "Structure/Navigation" (N prefix, line 62). SKILL.md, gate-runner.md, and conventions-brief.md line 67 all use the reversed form "Navigation/Structure".

3. **No standard canonical name:** The same category is called by two names across 4 files. While the meaning is the same, this could cause confusion during validation when checking mechanism-to-category assignments.

### Other 4 categories: CONSISTENT across all files.

| Category | mechanism-catalog | conventions-brief | SKILL.md | gate-runner.md |
|----------|------------------|-------------------|----------|----------------|
| Spatial | Spatial | Spatial | Spatial | Spatial |
| Hierarchy | Hierarchy | Hierarchy | Hierarchy | Hierarchy |
| Component | Component | Component | Component | Component |
| Depth/Emphasis | Depth/Emphasis | Depth/Emphasis | Depth/Emphasis | Depth/Emphasis |
| 5th category | Structure/Navigation | Navigation/Structure (line 67) AND Structure/Navigation (line 248) | Navigation/Structure | Navigation/Structure |

---

## CHECK 5: Micro-Gate to Full-Gate Alignment

**Verdict: PASS**

### Micro-gate schedule (gate-runner.md lines 36-69):

| Micro-Gate | Gates | Full-Gate Threshold | Micro-Gate Threshold | Status |
|------------|-------|--------------------|--------------------|--------|
| MG-1 (HTML skeleton) | SC-06, SC-07, SC-08, SC-12, DG-3 | SC-06: >= 5, SC-07: present, SC-08: >= 8, SC-12: 3-5, DG-3: header+main+footer | Same thresholds apply | CONSISTENT |
| MG-2 (Zone backgrounds) | SC-04, SC-05, SC-09 | SC-04: R>=G>=B, SC-05: no pure B/W, SC-09: >= 15 RGB | Same thresholds apply | CONSISTENT |
| MG-3 (Borders) | SC-01, SC-02, SC-15 | SC-01: 940-960px, SC-02: radius:0/shadow:none, SC-15: >= 3 configs | Same thresholds apply | CONSISTENT |
| MG-4 (Typography) | SC-03, SC-11 | SC-03: trinity only, SC-11: Flagship thresholds | Same thresholds apply | CONSISTENT |

No contradictions between micro-gate thresholds and full gate thresholds. The micro-gates run the same checks as the full gates, just at different build phases.

### SKILL.md builder self-check checkpoints (lines 62-68) vs micro-gates:

| SKILL.md Checkpoint | Corresponding Micro-Gate | Status |
|--------------------|------------------------|--------|
| After HTML: >= 5 ARIA landmarks | MG-1: SC-06 (>= 5) | MATCH |
| After HTML: Skip link | MG-1: SC-07 | MATCH |
| After HTML: >= 8 component classes | MG-1: SC-08 (>= 8) | MATCH |
| After zones: bg deltas >= 15 RGB | MG-2: SC-09 (>= 15) | MATCH |
| After zones: >= 3 distinct border configs | MG-3: SC-15 (>= 3) | MATCH |
| After zones: >= 3 channels shift | Full: SC-13 (>= 3) | No micro-gate for this -- SC-13 is GROUP 4, runs after full build only |
| After full: heading-to-meta ratio >= 3:1 | No gate for this | **UNGATED** -- SKILL.md mentions this but no gate checks it |
| After full: font-size delta >= 2px between zones | Full: SC-11 | MATCH (part of Flagship threshold) |

**Note:** The heading-to-meta ratio >= 3:1 checkpoint in SKILL.md (line 67) has no corresponding gate in gate-runner.md. This is not a contradiction but is a gap -- ungated builder self-check.

---

## CHECK 6: PA Question References

**Verdict: PASS**

### PA questions referenced in SKILL.md:

| Reference | SKILL.md Location | In flagship-pa-questions.md? | In perceptual-auditing SKILL.md? |
|-----------|-------------------|------------------------------|----------------------------------|
| PA-01, 04, 05, 18, 19, 20, 45 | Line 244 (Auditor A) | PA-05: not in flagship (standard tier), others: standard tier | YES (standard questions) |
| PA-02, 06, 07, 08, 29 | Line 245 (Auditor B) | Standard tier | YES |
| PA-09-11, 30-33, 50-53 | Line 246 (Auditor C) | Standard tier | YES |
| PA-12, 13, 34, 35, 36 | Line 247 (Auditor D) | Standard tier | YES |
| PA-14, 15, 37, 38, 39 | Line 248 (Auditor E) | Standard tier | YES |
| PA-16, 17, 40, 41 | Line 249 (Auditor F) | Standard tier | YES |
| PA-42, 43, 44 | Line 250 (Auditor G) | Standard tier | YES |
| PA-21, 22, 23, 46, 47 | Line 251 (Auditor H) | Standard tier | YES |
| PA-26, 27, 28, 48 | Line 252 (Auditor I) | Standard tier | YES |
| **PA-60** | Line 249 (Auditor F, bold) | **YES** (flagship-pa-questions.md line 9) | |
| **PA-61** | Line 249 (Auditor F, bold) | **YES** (line 23) | |
| **PA-62** | Line 247 (Auditor D, bold) | **YES** (line 37) | |
| **PA-63** | Line 248 (Auditor E, bold) | **YES** (line 53) | |
| **PA-64** | Line 246 (Auditor C, bold) | **YES** (line 65) | |
| **PA-65** | Line 244 (Auditor A, bold) | **YES** (line 79) | |
| **PA-66** | Line 246 (Auditor C, bold) | **YES** (line 93) | |
| **PA-67** | Line 244 (Auditor A, bold) | **YES** (line 107) | |

### Cross-check: SKILL.md auditor assignments vs flagship-pa-questions.md assignments:

| Question | SKILL.md Assignment | flagship-pa-questions.md Assignment | Status |
|----------|--------------------|------------------------------------|--------|
| PA-60 | F (Consistency+Rhythm) | F (Consistency+Rhythm) | MATCH |
| PA-61 | F (Consistency+Rhythm) | F (Consistency+Rhythm) | MATCH |
| PA-62 | D (Flow+Pacing) | D (Flow+Pacing) | MATCH |
| PA-63 | E (Grid+Layout) | E (Grid+Layout) | MATCH |
| PA-64 | C (Spatial+Proportion) | C (Spatial+Proportion) | MATCH |
| PA-65 | A (Impression+Emotion) | A (Impression+Emotion) | MATCH |
| PA-66 | C (Spatial+Proportion) | C (Spatial+Proportion) | MATCH |
| PA-67 | A (Impression+Emotion) | A (Impression+Emotion) | MATCH |

All 8 Tier 5 PA question assignments are perfectly aligned between SKILL.md and flagship-pa-questions.md.

### Cross-check: PA questions referenced in gate-runner.md:

| Reference | gate-runner.md Location | Exists? |
|-----------|------------------------|---------|
| PA-61 | Line 547 ("PA-61 catches direction") | YES in flagship-pa-questions.md |

### Cross-check: flagship-pa-questions.md total counts vs SKILL.md:

| Property | flagship-pa-questions.md | SKILL.md |
|----------|-------------------------|----------|
| Total questions | "48 standard + 8 Tier 5 = 56" (line 144) | "All 56" (line 367) |
| Auditor total per auditor | Listed at lines 133-142 | Listed at lines 244-252 |
| Status | MATCH | |

### Auditor question count cross-check:

| Auditor | SKILL.md Total | flagship-pa-questions.md Total | Match? |
|---------|---------------|-------------------------------|--------|
| A | 9 questions | 9 | YES |
| B | 5 | 5 | YES |
| C | 13 (PA-09,10,11,30,31,32,33,50,51,52,53,64,66) | 13 | YES |
| D | 6 (PA-12,13,34,35,36,62) | 6 | YES |
| E | 6 (PA-14,15,37,38,39,63) | 6 | YES |
| F | 6 (PA-16,17,40,41,60,61) | 6 | YES |
| G | 3 | 3 | YES |
| H | 5 | 5 | YES |
| I | 4 | 4 | YES |

All auditor assignments and counts are perfectly consistent.

---

## CHECK 7: Fix Cycle References

**Verdict: FAIL (minor)**

### SKILL.md fix cycle structure (Section 6):

SKILL.md Section 6.1 (line 330-335) says fix instructions should include:
> "### Compositional Context (from build log and conventions brief)
> For each failed gate or PA issue at a boundary, include:
> - The boundary's planned coherence direction (from transition table in _build-log.md)
> ...
> - Re-read conventions-brief.md Section [N] for the relevant concept
> [Example: '...See brief Section 4.']"

### gate-runner.md fix recipe references (lines 229-239):

| Gate Category | Brief Section Reference | Correct? |
|--------------|------------------------|----------|
| SC-09, SC-14 sub-check 3 | Section 2: PERCEPTION | YES -- Section 2 is "PERCEPTION (The Physics of Visibility)" |
| SC-10 | Section 2: PERCEPTION | YES |
| SC-11 | Section 5: FRACTAL ECHO -- scale hierarchy | **QUESTIONABLE** -- SC-11 checks font-size deltas (typography hierarchy). Section 2 (PERCEPTION) has the actual typography thresholds (">= 2px font-size delta"). Section 5 (FRACTAL ECHO) has the scale table but is about pattern-at-every-scale, not typography specifically. Reference is defensible but Section 2 would be more direct. |
| SC-13, SC-13B | Section 4: MULTI-COHERENCE | YES -- Section 4 is "MULTI-COHERENCE (The Binding Rule)" |
| SC-14 sub-checks 1-2 | Section 2: PERCEPTION | YES |
| SC-15 | Section 4: MULTI-COHERENCE -- Structural channel | YES -- Structural is a multi-coherence channel |
| SC-01 | Section 1: IDENTITY | YES |
| SC-02, SC-03, SC-04, SC-05 | Section 1: IDENTITY + Section 12: RESTRAINT LIST | YES |
| SC-06, SC-07, SC-08, DG-3 | Section 5: FRACTAL ECHO -- component vocabulary | **INCORRECT** -- SC-06 (ARIA landmarks), SC-07 (skip link), and DG-3 (header/main/footer) are ACCESSIBILITY gates. Section 13 (ACCESSIBILITY) is the correct reference, not Section 5 (FRACTAL ECHO). SC-08 (component library) is better referenced to Section 8 (CSS VOCABULARY) or Section 3 (RICHNESS). The "component vocabulary" label for Section 5 is misleading. |

### Issues:

1. **SC-06/SC-07/DG-3 mapped to wrong section:** These are accessibility gates. The fix recipe points builders to Section 5 (FRACTAL ECHO) when Section 13 (ACCESSIBILITY) is the correct section.

2. **SC-08 mapped to wrong section:** Component library adoption is about CSS vocabulary (Section 8) or quality floor (Section 9B), not about fractal echo (Section 5).

---

## CHECK 8: Behavioral Gates

**Verdict: PASS**

### BG-1: Metaphor Independence

| Property | SKILL.md (line 176) | gate-runner.md (lines 1004-1022) |
|----------|--------------------|---------------------------------|
| Description | "Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation" | "Did the builder derive the metaphor BEFORE consulting the component library?" |
| Verification | Via build log inspection | "Build log must show: 1. Content analysis 2. Tension derivation 3. Metaphor collapse 4. THEN library consultation" |
| **Status** | **CONSISTENT** -- SKILL.md is a compressed version of gate-runner's specification. Same behavioral check. |

### BG-2: Metaphor Structural

| Property | SKILL.md (line 177) | gate-runner.md (lines 1025-1043) |
|----------|--------------------|---------------------------------|
| Description | "Metaphor is STRUCTURAL (suggests CSS properties), not ANNOUNCED (label-only)" | "Is the metaphor STRUCTURAL (suggests specific CSS properties) or ANNOUNCED (label-only, decoration not structure)?" |
| Verification | Build log check | "Fresh-eyes Opus agent reads the build plan. Binary judgment: STRUCTURAL or ANNOUNCED." |
| **Status** | **CONSISTENT** -- Descriptions match. gate-runner adds more detail about verification method (fresh-eyes Opus), but the threshold and meaning are the same. |

### BG-3:
BG-3 does not exist in either file. Only BG-1 and BG-2 are defined. (The task specification mentioned BG-3 but it is not a real gate.)

---

## SUMMARY

| Check | Verdict | Issues |
|-------|---------|--------|
| 1. Gate ID Consistency | **FAIL** | DG-3 missing from SKILL.md; line count and gate count stale in SKILL.md; gate-runner internal count "17 blocking" is wrong (should be 15) |
| 2. Threshold Consistency | **FAIL** | SC-02 omits filter check; SC-04/SC-05 omit exceptions; SC-11 omits 2 of 3 sub-thresholds; SC-14 has wrong algorithm description; DG-1/DG-2 file format mismatch (markdown vs YAML) |
| 3. File Path References | **FAIL** | DG-1 fractal_table.yaml vs _build-log.md; DG-2 cascade_table.yaml vs _cascade-value-table.md; stale "992 lines" reference |
| 4. Mechanism Category Alignment | **FAIL** | 5th category has 2 names: "Navigation/Structure" vs "Structure/Navigation" -- inconsistent across and within files |
| 5. Micro-Gate to Full-Gate Alignment | **PASS** | No threshold contradictions. One ungated builder self-check (heading-to-meta ratio) noted. |
| 6. PA Question References | **PASS** | All 8 Tier 5 questions exist, all assignments match perfectly, all counts match. |
| 7. Fix Cycle References | **FAIL** | SC-06/SC-07/DG-3 mapped to Section 5 (FRACTAL ECHO) instead of Section 13 (ACCESSIBILITY); SC-08 mapped to Section 5 instead of Section 8/9B |
| 8. Behavioral Gates | **PASS** | BG-1 and BG-2 are consistent between SKILL.md and gate-runner.md. BG-3 does not exist. |

---

## TOTAL: 4/8 checks passed

---

## PRIORITY FIX LIST

### BLOCKING (must fix before next /build-page run):

1. **DG-1/DG-2 file format mismatch** -- SKILL.md tells builder to produce markdown files; gate-runner expects YAML files. The gate runner CANNOT validate what the builder produces. Either update gate-runner to expect `_build-log.md` and `_cascade-value-table.md`, or update SKILL.md builder instructions to produce YAML files with those gate-runner names. Recommendation: update gate-runner to match SKILL.md (the builder is the user-facing interface).

2. **DG-3 missing from SKILL.md** -- gate-runner defines and requires DG-3 (Landmark Completeness), but SKILL.md never mentions it. The orchestrator will not know to run this gate. Add DG-3 to SKILL.md Section 3.3 or Section 3.4.

3. **SC-11 threshold under-specification** -- SKILL.md says ">= 3 distinct font-size zones" but the actual Flagship threshold in gate-runner includes display-body delta >= 10px and body-detail delta >= 2px. Builder's self-check cannot verify these without knowing them.

### SIGNIFICANT (should fix):

4. **SC-14 algorithm description mismatch** -- SKILL.md says "no 3+ values clustered within 2px" but gate-runner checks "adjacent sorted values < 0.5px apart." Different algorithm, different threshold, potentially different pass/fail results.

5. **Fix recipe section references** -- SC-06/SC-07/DG-3 should point to Section 13 (ACCESSIBILITY), not Section 5 (FRACTAL ECHO). SC-08 should point to Section 8 (CSS VOCABULARY) or Section 9B.

6. **Mechanism category name** -- Standardize on either "Structure/Navigation" (per mechanism-catalog.md) or "Navigation/Structure" (per SKILL.md/gate-runner.md). Fix conventions-brief.md internal inconsistency (line 67 vs line 248).

### MINOR (nice to fix):

7. **SKILL.md line 124 stale metadata** -- Update "992 lines" to 1159 and "21 gates" to 24 (or whatever the current accurate count is).

8. **SC-02, SC-04, SC-05 exception omissions in SKILL.md** -- SKILL.md gate table doesn't mention the accent-context and inverted-context exceptions that gate-runner.md defines. The gate runner is MORE PERMISSIVE than SKILL.md claims. Not blocking but could confuse builders who think "ALL means ALL."

9. **gate-runner.md line 1143 count error** -- "17 blocking" should be "15 blocking" since SC-13B and SC-16 are ADVISORY, not blocking. Or clarify what "blocking" means in this count.
