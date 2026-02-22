# 27 -- Cross-Validation Report: Skill-Pipeline Harmony

**Files Analyzed:**
1. `~/.claude/skills/build-page/SKILL.md` (480 lines)
2. `~/.claude/skills/tension-composition/SKILL.md` (~2,006 lines)
3. `~/.claude/skills/perceptual-auditing/SKILL.md` (~1,208 lines)
4. `design-system/pipeline/conventions-brief.md` (~547 lines)
5. `design-system/pipeline/gate-runner.md` (~1,159 lines)
6. `design-system/pipeline/flagship-pa-questions.md` (~158 lines)
7. `design-system/CLAUDE.md` (root navigation)

---

## 1. BLOCKING DISCREPANCIES (Numbers Don't Match)

### B-01: PA Question Count -- 3-Way Conflict (BLOCKING)

| Source | Claim | Location |
|--------|-------|----------|
| **build-page SKILL.md** | "All 57" (Section 6.2 note: "57 questions x 9 auditors"), also "16 composition-critical gates" (Section 4) | Lines 296, 331, 158 |
| **PA SKILL.md** | "59 PA questions" (line 8 warning), "54 standard + 9 Tier 5 = 63 questions" (Mode 4, line 654) | Lines 8, 654 |
| **flagship-pa-questions.md** | "48 standard + 9 Tier 5 = 57 questions" (line 158) | Line 158 |
| **design-system/CLAUDE.md** | "Full 56-question audit required -- 48 standard + 8 Tier 5 (PA-60 through PA-67)" | SKILLS section |

**Analysis:**
- PA SKILL.md header says "59 PA questions" but its Mode 4 description says "54 standard + 9 Tier 5 = 63 questions" -- internal contradiction
- PA SKILL.md Mode 4 section lists 10+6+13+7+6+7+5+5+4 = 63 questions (matching "54 standard + 9 Tier 5 = 63")
- flagship-pa-questions.md says "48 standard + 9 Tier 5 = 57 questions"
- build-page SKILL.md says "57 questions" (matching flagship-pa-questions.md)
- design-system/CLAUDE.md says "56 questions" with "8 Tier 5 (PA-60 through PA-67)" -- MISSES PA-68 entirely

**Actual count by enumeration:**

Standard questions in PA SKILL.md:
- Tier 1: PA-01 through PA-05 = 5
- Tier 2: PA-06, 07, 08, 29, 09, 10, 11, 30, 31, 32, 33, 12, 13, 34, 35, 36, 14, 15, 37, 38, 39, 16, 17, 40, 41, 18, 19, 20 = 28
- Tier 3: PA-21, 22, 23, 46, 47, 24, 25, 26, 27, 28, 48 = 11
- Tier 4: PA-50, 51, 52, 53 = 4
- Pipeline: PA-69, 70 = 2
- Metaphor: PA-42, 43, 44 = 3
- Quality: PA-45 = 1
**Standard subtotal: 5 + 28 + 11 + 4 + 2 + 3 + 1 = 54 standard questions**

Tier 5: PA-60, 61, 62, 63, 64, 65, 66, 67, 68 = **9 Tier 5 questions**

**Grand total: 54 standard + 9 Tier 5 = 63 questions** (matching PA SKILL.md Mode 4)

Now check build-page auditor assignments:
A: 10, B: 6, C: 13, D: 7, E: 6, F: 7, G: 5, H: 5, I: 4 = **63 questions** -- matches PA SKILL.md

But build-page line 331 says "57 questions x 9 auditors" and line 408 says "All 57". This is a leftover from a pre-PA-69/PA-70 version.

**Resolution:**
- TRUE count = **63 questions** (54 standard + 9 Tier 5)
- build-page SKILL.md auditor TABLE is correct (63 questions), but the PROSE references "57" (stale)
- flagship-pa-questions.md says "48 standard + 9 = 57" but actual standard count is 54 (it misses PA-69, PA-70, PA-42, PA-43, PA-44, PA-45 = 6 questions)
- design-system/CLAUDE.md says "56 questions" and "8 Tier 5" -- both wrong

### B-02: Gate Count -- 3-Way Conflict (BLOCKING)

| Source | Claim | Location |
|--------|-------|----------|
| **build-page SKILL.md** | "16 composition-critical gates" (Section 4, line 158), also references "16 gates plus advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1 + BG-2" (line 183) | Lines 158, 183 |
| **gate-runner.md** | "22 gates" (line 1143): 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral | Line 1143 |
| **design-system/CLAUDE.md** | "21-gate programmatic verification" | SKILLS section |

**Analysis:**
- gate-runner.md is authoritative: it defines 22 gates total (SC-00 through SC-16 = 17, DG-1 through DG-4 = 4, BG-1 + BG-2 = 2, minus double-counting = 22 exactly per summary table)
- build-page SKILL.md says "16 composition-critical gates" in the table header, then separately lists advisory + deliverable + behavioral gates. The "16" refers only to the table rows but the total is 22.
- design-system/CLAUDE.md says "21-gate" -- off by 1

**Resolution:** TRUE count = **22 gates** per gate-runner.md summary table. build-page SKILL.md is inconsistent between prose ("16") and full listing (22). CLAUDE.md says 21.

### B-03: Auditor A Question Assignment -- Conflict Between Files (BLOCKING)

| Source | Auditor A Questions | Total |
|--------|-------------------|-------|
| **build-page SKILL.md** (line 286) | PA-01, 03, 04, 05, 18, 19, 20, 45, **65**, **67** | **10** |
| **flagship-pa-questions.md** (line 148) | PA-01, 04, 05, 18, 19, 20, 45, PA-65, PA-67 | **9** |
| **PA SKILL.md** Mode 4 (line 642) | PA-01, 03, 04, 05, 18, 19, 20, 45 + T5: PA-65, 67 | **10** |

**Discrepancy:** flagship-pa-questions.md OMITS PA-03 from Auditor A's standard list (only 7 standard, not 8). build-page and PA SKILL.md both include PA-03.

### B-04: Auditor B Question Assignment -- Conflict Between Files (BLOCKING)

| Source | Auditor B Questions | Total |
|--------|-------------------|-------|
| **build-page SKILL.md** (line 287) | PA-02, 06, 07, 08, 29, 70 | **6** |
| **flagship-pa-questions.md** (line 149) | PA-02, 06, 07, 08, 29 | **5** |
| **PA SKILL.md** Mode 4 (line 643) | PA-02, 06, 07, 08, 29, 70 | **6** |

**Discrepancy:** flagship-pa-questions.md OMITS PA-70 from Auditor B. build-page and PA SKILL.md both include it.

### B-05: Auditor D Question Assignment -- Conflict Between Files (BLOCKING)

| Source | Auditor D Questions | Total |
|--------|-------------------|-------|
| **build-page SKILL.md** (line 289) | PA-12, 13, 34, 35, 36, 69, **62** | **7** |
| **flagship-pa-questions.md** (line 151) | PA-12, 13, 34, 35, 36 + PA-62 | **6** |
| **PA SKILL.md** Mode 4 (line 644) | PA-12, 13, 34, 35, 36, 69 + T5: PA-62 | **7** |

**Discrepancy:** flagship-pa-questions.md OMITS PA-69 from Auditor D.

### B-06: Auditor F Question Assignment -- Conflict Between Files (BLOCKING)

| Source | Auditor F Questions | Total |
|--------|-------------------|-------|
| **build-page SKILL.md** (line 291) | PA-16, 17, 24, 40, 41, **60**, **61** | **7** |
| **flagship-pa-questions.md** (line 153) | PA-16, 17, 40, 41 + PA-60, PA-61 | **6** |
| **PA SKILL.md** Mode 4 (line 647) | PA-16, 17, 24, 40, 41 + T5: PA-60, 61 | **7** |

**Discrepancy:** flagship-pa-questions.md OMITS PA-24 from Auditor F.

### B-07: Auditor G Question Assignment -- Conflict Between Files (BLOCKING)

| Source | Auditor G Questions | Total |
|--------|-------------------|-------|
| **build-page SKILL.md** (line 293) | PA-25, 42, 43, 44, **68** | **5** |
| **flagship-pa-questions.md** (line 154) | PA-42, 43, 44 + PA-68 | **4** |
| **PA SKILL.md** Mode 4 (line 648) | PA-25, 42, 43, 44 + T5: PA-68 | **5** |

**Discrepancy:** flagship-pa-questions.md OMITS PA-25 from Auditor G.

### B-08: Tier 5 Threshold in Build-Page vs Flagship-PA-Questions (BLOCKING)

| Source | SHIP Threshold | Location |
|--------|---------------|----------|
| **build-page SKILL.md** | Tier 5 >= 7/9 for SHIP | Lines 16, 422-443 |
| **flagship-pa-questions.md** | 8-9 = COMPOSED, 6-7 = APPROACHING | Lines 138-142 |
| **PA SKILL.md** | 8-9 = COMPOSED, 6-7 = APPROACHING (verdict table uses >= 7/9 for SHIP) | Lines 732-738 |
| **design-system/CLAUDE.md** | "Tier 5 >= 6/8" | SKILLS section |

**Analysis:**
- build-page and PA SKILL.md agree: SHIP requires Tier 5 >= 7/9
- design-system/CLAUDE.md says "Tier 5 >= 6/8" -- WRONG denominator (8 not 9) and lower threshold (6 not 7)

### B-09: Flagship-PA-Questions Claims "48 Standard" But Actual Standard Count is Higher (BLOCKING)

flagship-pa-questions.md line 5 says "Asked in EVERY Mode 4 audit alongside the 48 standard questions (57 total)." But:
- PA SKILL.md defines 54 standard questions (including PA-42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 69, 70)
- flagship-pa-questions.md appears to use an outdated count that excludes Tier 4 void questions (PA-50-53) and pipeline questions (PA-69, 70)

---

## 2. SIGNIFICANT MISALIGNMENTS (Authority Conflicts, Flow Breaks)

### S-01: TC Skill Phase Count -- Internal Inconsistency

TC SKILL.md line 35 shows "6 Phases" (Phase 0-5). But Phase 4.5 (Sub-Skill Output Mode) is a separate phase for /build-page invocation, and Phase 3.5 (Metaphor Commitment) is also a full phase with its own gate. The actual phase count with sub-phases is:
- Phase 0, 1, 2, 3, 3.5 (commitment gate), 3.5Z (zone arch), 4 (with 4.0, 4.0A, 4.1-4.9 sub-steps), 4.5 (sub-skill output), 5

This is cosmetic -- the "6 Phases" label is a simplification. Not blocking but could confuse agents.

### S-02: Build-Page References "16 Gates" Table Then Lists More

build-page SKILL.md Section 4 header says "Run these 16 composition-critical gates" and then the table at lines 162-179 has exactly 16 rows (SC-00 through SC-15). But Section 4.3 (line 183) then says "For EACH of the 16 gates (plus advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1 + BG-2)". The structured output should cover ALL 22 gates, not just 16.

The confusion is that the "16 gates" label applies to the compact TABLE, while the full run includes 22. The prose should say "22 gates" consistently.

### S-03: Conventions Brief References Section Numbers Not Matching Its Structure

build-page SKILL.md line 377 says "See brief Section 4" for multi-coherence. conventions-brief.md has:
- Section 1: IDENTITY (Soul)
- Section 2: PERCEPTION
- Section 3: RICHNESS
- Section 4: MULTI-COHERENCE
- Section 5: FRACTAL ECHO
- ...through Section 14

The reference is CORRECT. Section 4 = MULTI-COHERENCE. No misalignment here.

### S-04: TC SKILL.md References Stale File Paths

TC SKILL.md line 99-103 references:
- `/active/design-system/case-studies/` -- should be `design-system/compositional-core/case-studies/`
- `/active/design-system/library/` -- stale path, no such directory

TC SKILL.md line 1023 references:
- `/active/design-system/techniques/mechanisms.md` -- should be `design-system/compositional-core/grammar/mechanism-catalog.md`
- `/active/design-system/foundations/components.md` -- should be `design-system/compositional-core/components/components.css`

These paths use an `/active/` prefix that no longer exists in the repository structure.

### S-05: TC SKILL.md Mechanism Count vs Conventions Brief vs Build-Page

| Source | Mechanism Count | Location |
|--------|----------------|----------|
| **TC SKILL.md** | "16-18 mechanisms" (lines 76, 820, 1060, 1066) | Multiple |
| **conventions-brief.md** | ">= 14 mechanisms" (Section 9B Quality Floor, line 352) | Line 352 |
| **build-page SKILL.md** | "14 total AND >= 1 in each of 5 categories" (DG-4, line 208) | Line 208 |
| **gate-runner.md** | ">= 14 total AND >= 1 in each of 5 categories" (DG-4, line 1081) | Line 1081 |

**Analysis:** TC SKILL.md says "16-18 mechanisms" as the natural landing zone, while conventions-brief says ">= 14" as the quality FLOOR. build-page/gate-runner use ">= 14" as the DG-4 threshold. These are COMPATIBLE (16-18 is the natural range; 14 is the minimum). Not a conflict, just worth noting the floor vs range distinction.

### S-06: PA SKILL.md Header Says "59 PA Questions" -- Wrong

PA SKILL.md line 8 says "59 PA questions + quantitative guardrails". The actual count is 63 (54 standard + 9 Tier 5). The "59" appears to be from an earlier version before PA-69, PA-70, and possibly PA-50-53 were added.

### S-07: Components File Name Conflict

| Source | Components File | Location |
|--------|----------------|----------|
| **build-page SKILL.md** | `components.css` (line 90) | Builder reference file #5 |
| **design-system/CLAUDE.md** | `components.css` (KEY FILE PATHS section) AND `merged-components.css` (Layer 4 reference) | Both |
| **Filesystem** | `components.css` EXISTS, `merged-components.css` does NOT exist | Verified |

design-system/CLAUDE.md references "merged-components.css" in the Layer 4 entry of the 6-Layer Ontology but the file does not exist. The actual file is `components.css`.

### S-08: DG-1 Expects "fractal_table.yaml" But Build-Page Produces Markdown

gate-runner.md DG-1 (line 741) says "Builder's `fractal_table.yaml` deliverable." But build-page SKILL.md builder prompt (line 113) says builder writes to `_build-log.md` which contains the fractal echo table. The table is in MARKDOWN format within the build log, not a separate YAML file. DG-2 similarly expects `cascade_table.yaml` (line 754) but build-page produces `_cascade-value-table.md`.

This is a format mismatch. gate-runner specifies YAML parsing; build-page produces Markdown. The programmatic validation in DG-1/DG-2 would need to parse Markdown, not YAML.

### S-09: Weaver Verdict Table -- Build-Page vs PA SKILL.md

| Verdict | build-page | PA SKILL.md |
|---------|-----------|-------------|
| SHIP | PA-05 >= 3.5 AND Tier 5 >= 7/9 AND criteria MET | PA-05 >= 3.5 AND Tier 5 >= 7/9 AND criteria MET |
| SHIP WITH RESERVATION | PA-05 >= 3.5 AND Tier 5 5-6/9 | PA-05 >= 3.5 AND Tier 5 5-6/9 |
| NOT FLAGSHIP | PA-05 >= 3.5 AND Tier 5 0-4/9 | PA-05 >= 3.5 AND Tier 5 0-4/9 |
| FIX | PA-05 3.0-3.4 | PA-05 3.0-3.4 |
| REBUILD | PA-05 < 3.0 | PA-05 < 3.0 |
| ESCALATE | 3 fix cycles exhausted | 3 fix cycles exhausted |

These MATCH. No conflict.

### S-10: Accent-Blue Color Value Conflict

| Source | accent-blue Value |
|--------|------------------|
| **TC SKILL.md** | Not specified (uses conventions brief values) |
| **conventions-brief.md** | `--accent-blue: #4A90D9` (line 44) |
| **design-system/CLAUDE.md** | `Accent-blue: #2563EB` (SOUL CONSTRAINTS section) |

**CONFLICT:** conventions-brief says #4A90D9, CLAUDE.md says #2563EB. These are completely different blues.

---

## 3. ADVISORY NOTES (Stale Claims, Minor Inconsistencies)

### A-01: case-studies/_INDEX.md Does Not Exist

TC SKILL.md line 758 references `/case-studies/_INDEX.md` for title scanning during divergence check. PA SKILL.md and build-page SKILL.md also reference this path. The file does NOT exist on the filesystem. The case-studies directory has a `README.md` instead.

### A-02: TC SKILL.md Line Count in MEMORY.md

MEMORY.md says "tension-composition SKILL.md (839 lines)" but the file is now ~2,006 lines. Also says "perceptual-auditing SKILL.md (48 PA questions)" but the file now has 63 questions. These are stale MEMORY.md entries.

### A-03: design-system/CLAUDE.md TC SKILL.md Line Count

design-system/CLAUDE.md says `~/.claude/skills/tension-composition/SKILL.md` "(839 lines, 42KB)" -- stale. Now ~2,006 lines.

### A-04: design-system/CLAUDE.md PA SKILL.md Line Count

design-system/CLAUDE.md says `~/.claude/skills/perceptual-auditing/SKILL.md` "(48 PA questions)" -- stale. Now 63 questions.

### A-05: design-system/CLAUDE.md Claims "Track 1/Track 2 Classification" Removed

CLAUDE.md says "No tier routing. No Track 1/Track 2 classification." This is correct for the /build-page pipeline but the pipeline/ CLAUDE.md (pipeline/CLAUDE.md) still extensively describes Track 1 and Track 2 as separate paths. The pipeline planning docs are historical context; the operational truth is /build-page only.

### A-06: conventions-brief.md Section 9B Says "Tier 5 >= 6/8"

conventions-brief.md line 361 says "COMPOSED describes a Flagship page where DESIGNED elements additionally interrelate through multi-coherence, fractal echo, and metaphor -- Tier 5 >= 6/8." This should be "Tier 5 >= 7/9" (9 questions, not 8, and threshold is 7 per build-page SHIP criteria).

### A-07: TC SKILL.md Still References "18 mechanisms" in Catalog

TC SKILL.md line 1042 says "Read the FULL mechanism catalog (18 mechanisms, ~869 lines)". Need to verify this matches the actual mechanism-catalog.md. This is advisory -- the catalog may have been enriched.

### A-08: Stale File Path in PA SKILL.md

PA SKILL.md line 1206 references `docs-spa/app/showcase/explorations/axis/_perceptual-research/11-final-specification.md`. This path uses the old `docs-spa/` directory structure that was restructured to `design-system/`. The file likely doesn't exist at this path.

### A-09: PA SKILL.md Mode 4 says "7 agents" in header but lists 11

PA SKILL.md Mode 4 header (line 633) says "7 agents" but the team structure lists: Lead + Research Contextualizer + 9 Auditors (A-I) + Weaver = 12 roles. The "7 agents" is from an older Mode 4 before the expansion to 9 auditors.

### A-10: Conventions-Brief Section Count

Conventions-brief.md has sections numbered 1-14 (IDENTITY through RESPONSIVE BEHAVIOR) plus CONVICTION CARD and PROCESS sections. The build-page SKILL.md references "14 sections" of conventions-brief which is approximately correct but doesn't account for the unnumbered sections.

---

## 4. VERIFIED CORRECT (Things That Match)

### V-01: Soul Constraints -- Consistent Across All 7 Files

All files agree on:
- border-radius: 0 (ALWAYS)
- box-shadow: none (ALWAYS)
- No drop-shadow filter
- No pure #000 or #FFF
- Container 940-960px
- Font trinity: Instrument Serif, Inter, JetBrains Mono
- Warm palette: R >= G >= B

### V-02: Multi-Coherence Definition -- Consistent

All files that discuss multi-coherence agree:
- >= 3 of 6 channels shift at every zone boundary
- Flagship average >= 4 across all boundaries
- 6 channels: Chromatic, Typographic, Spatial, Structural, Behavioral, Material
- Same semantic direction required

### V-03: Perception Thresholds -- Consistent

All files agree on:
- Background delta >= 15 RGB between adjacent zones
- Letter-spacing floor: 0.025em
- Stacked gap max: 120px
- Typography zone delta: >= 10px display-body (Flagship)

### V-04: Tier 5 Questions -- Consistent Between PA SKILL.md and flagship-pa-questions.md

All 9 Tier 5 questions (PA-60 through PA-68) have IDENTICAL text, scoring criteria, and auditor assignments in both PA SKILL.md and flagship-pa-questions.md.

### V-05: Tier 5 Aggregate Scoring -- Consistent

flagship-pa-questions.md and PA SKILL.md use identical thresholds:
- 8-9: COMPOSED
- 6-7: APPROACHING
- 3-5: STRUCTURED
- 0-2: VOCABULARY ONLY

### V-06: Build-Page Execution Flow -- Coherent

The flow from Intake -> TC Agent -> Builder -> Gate Runner -> Screenshots -> PA Auditors -> Weaver -> Fix Cycle is logically coherent. Each handoff point produces the output the next step expects:
- TC agent outputs _tc-brief.md with 5 sections -> Builder reads it first
- Builder outputs output.html + _build-log.md + _cascade-value-table.md -> Gate runner verifies output.html
- Gate runner outputs _gate-results.json -> Weaver reads for diagnostic context
- Screenshots captured to _screenshots/ -> PA auditors read via Read tool
- PA auditors write to _pa/ -> Weaver synthesizes

### V-07: Fix Cycle Protocol -- Consistent

build-page SKILL.md and PA SKILL.md agree:
- Cycle 1: 9 auditors, all questions
- Cycles 2-3: 2 auditors (A + C), focused + Tier 5
- Max 3 cycles, then ESCALATE

### V-08: Zone Count -- Consistent

All files agree: 3-5 zones for Flagship tier.

### V-09: Builder Model -- Consistent

All files agree: Opus for builder, ALWAYS, NEVER Sonnet.

### V-10: SC-00 Zone Selector Validation -- Consistent

gate-runner.md and conventions-brief.md agree on zone markup patterns:
- `<section class="section zone-N">` (preferred)
- `<section data-zone="N">` (alternative)
- Conventions-brief.md line 512 documents this requirement

---

## 5. DESIGN-SYSTEM/CLAUDE.MD EDITS NEEDED

### Edit 1: Fix PA Question Count (BLOCKING)

**Current:** "Full 56-question audit required -- 48 standard + 8 Tier 5 (PA-60 through PA-67)"

**Should be:** "Full 63-question audit required -- 54 standard + 9 Tier 5 (PA-60 through PA-68)"

**Rationale:** PA-68 (Metaphor Spatial Coverage) exists in all other files. "8 Tier 5" is stale. Standard count of 48 is stale (misses PA-50-53, PA-69, PA-70).

### Edit 2: Fix Gate Count (BLOCKING)

**Current:** "21-gate programmatic verification"

**Should be:** "22-gate programmatic verification" (1 pre-gate + 17 blocking + 2 advisory + 2 behavioral)

### Edit 3: Fix Tier 5 Threshold (BLOCKING)

**Current:** "PA-05 >= 3.5 AND Tier 5 >= 6/8"

**Should be:** "PA-05 >= 3.5 AND Tier 5 >= 7/9 AND zero soul violations"

### Edit 4: Fix accent-blue Color Value (SIGNIFICANT)

**Current:** "Accent-blue: #2563EB"

**Should be:** "Accent-blue: #4A90D9" (matching conventions-brief.md and tokens.css)

OR: Verify which is canonical by reading tokens.css.

### Edit 5: Fix TC SKILL.md Line Count (ADVISORY)

**Current:** "`~/.claude/skills/tension-composition/SKILL.md` (839 lines, 42KB)"

**Should be:** "`~/.claude/skills/tension-composition/SKILL.md` (~2,006 lines)"

### Edit 6: Fix PA SKILL.md Description (ADVISORY)

**Current:** "`~/.claude/skills/perceptual-auditing/SKILL.md` (48 PA questions)"

**Should be:** "`~/.claude/skills/perceptual-auditing/SKILL.md` (63 PA questions)"

### Edit 7: Fix merged-components.css Reference (SIGNIFICANT)

**Current:** Layer 4 reference says `merged-components.css`

**Should be:** `components.css` (the actual filename on disk)

### Edit 8: Fix Conventions-Brief Tier 5 Claim (ADVISORY)

conventions-brief.md Section 9B says "Tier 5 >= 6/8" -- should be "Tier 5 >= 7/9"

---

## SUMMARY

| Category | Count |
|----------|-------|
| BLOCKING discrepancies | 9 |
| SIGNIFICANT misalignments | 10 |
| ADVISORY notes | 10 |
| VERIFIED correct | 10 |
| CLAUDE.md edits needed | 8 |

**Dominant pattern:** The flagship-pa-questions.md file is the most stale -- it was written when there were 48 standard questions and 9 Tier 5 = 57 total. Since then, PA-69, PA-70 (pipeline integration), PA-50-53 (void prevention), PA-42-45 (metaphor/quality) were added to the standard set, bringing the total to 63. flagship-pa-questions.md's auditor assignment table is missing PA-03, PA-24, PA-25, PA-69, PA-70 compared to build-page and PA SKILL.md.

**Most critical fix:** Unify the question count to 63 across all files. The build-page SKILL.md auditor assignment TABLE (Section 6.2) is the source of truth -- it has all 63 questions correctly assigned. The PROSE references to "57" in build-page and "48 standard" in flagship-pa-questions.md need updating.

**Second most critical fix:** The YAML vs Markdown format mismatch for DG-1/DG-2 deliverables. gate-runner.md expects YAML but build-page produces Markdown. Either gate-runner needs to parse Markdown or build-page needs to produce YAML.
