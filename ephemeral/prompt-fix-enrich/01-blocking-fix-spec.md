# BLOCKING Fix Specifications (BG-01 through BG-07)

**Author:** blocking-fixer (Opus 4.6, Task #10)
**Date:** 2026-02-17
**Sources:**
- `ephemeral/flagship-validation/13-FINAL-VALIDATION-VERDICT.md` (Section 2: BLOCKING GAPS)
- `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (prompt to fix)
- `design-system/compositional-core/vocabulary/tokens.css` (font verification)
- `ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md` (CCS formula source)
- `ephemeral/flagship-validation/04-pa-skill-coverage.md` (PA assignment reconciliation)
- `ephemeral/prompt-enrichment-audit/AUXILIARY-EXECUTION-WRAPPER.md` (wrapper file paths)

---

## VERIFICATION SUMMARY

All 7 BLOCKING gaps independently verified against source files:
- BG-01: PLANNER absent from C1 roster -- CONFIRMED (lines 302-324, no Planner listed)
- BG-02: U-09 font names wrong -- CONFIRMED (tokens.css lines 68-70: Inter + JetBrains Mono, NOT Source Sans 3 / Source Code Pro)
- BG-03: 16-MC not routed -- CONFIRMED (Section E lines 411-443, file not in any agent's reading list)
- BG-04: Competing PA assignments -- CONFIRMED (C4 System 1 vs SKILL.md/Depth-12/Depth-17 System 2, 17+ questions differ)
- BG-05: File paths don't exist -- CONFIRMED (no `merged-components.css`, no `_INDEX.md`; actual files: `components.css`, `README.md`)
- BG-06: CCS formula mismatch -- CONFIRMED (prompt: pair-counting; source 16-MC Section 1.2: per-mechanism removal test)
- BG-07: SC-08 excluded from Gate 1 -- CONFIRMED (line 352: "SC-01 through SC-07")

---

### BG-01: PLANNER Agent Missing From C1 Roster

**LOCATION:** Section C1, line ~307 (between GATE 0 and PASS 1)

**OLD TEXT:**
```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)

PASS 1: Spatial Skeleton
```

**NEW TEXT:**
```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)

PASS 0.5: Build Planning
  - Planner (Opus): receives content assessment + metaphor derivation, produces build plan with
    mechanism deployment map, spatial budget, section ordering. Reads: mechanism-catalog.md,
    semantic-rules.md, 01-content-assessment.md, 02-metaphor-derivation.md,
    14-enrichment-invocation-map.md, 16-multi-coherence-invocation.md.
    Produces: 03-build-plan.md (construction blueprint for all downstream agents).

PASS 1: Spatial Skeleton
```

**RATIONALE:** The Planner is referenced in Section E, B8 (TC Phase 4), CP-A, and the Wrapper artifact chain (03-build-plan.md) but never defined; without it, the build plan -- on which every downstream agent depends -- has no author.

**ALSO EDIT (Wrapper, Phase 2):** After the Pass 0 agents section in the Wrapper (~line 163), add a Planner agent spawn block:

**OLD TEXT (Wrapper line ~163):**
```
**-> GATE 0:** Team-lead verifies content-to-void >= 60:40 estimate, zone count within S-15 limits, content/zone >= 1.5. If FAIL, restructure zones before proceeding.

### Pass 1: Spatial Skeleton (2 Sonnet builders + 1 Sonnet auditor)
```

**NEW TEXT (Wrapper):**
```
**-> GATE 0:** Team-lead verifies content-to-void >= 60:40 estimate, zone count within S-15 limits, content/zone >= 1.5. If FAIL, restructure zones before proceeding.

### Pass 0.5: Build Planning (1 Opus agent)

**Agent: planner (Opus)**
- Reads: 01-content-assessment.md, 02-metaphor-derivation.md, 00-mechanisms-extract.md, 00-semantic-rules-extract.md, 14-enrichment-invocation-map.md, 16-multi-coherence-invocation.md
- Produces: `03-build-plan.md` with mechanism deployment map (which mechanisms in which sections), spatial budget per section, section ordering, transition type assignments, multi-coherence strategy (reinforcing pairs, modulating chains, cascading targets)
- MUST enforce C-01 per-category minimums in deployment map
- MUST enforce C-02 mechanism target 12-14 with hard cap 16
- MUST include multi-coherence plan: >= 3 reinforcing pairs (MC-02), >= 2 modulating chains (MC-03), >= 1 cascade (MC-06)
- MUST SendMessage to team-lead with build plan summary BEFORE skeleton builders start

### Pass 1: Spatial Skeleton (2 Sonnet builders + 1 Sonnet auditor)
```

---

### BG-02: U-09 Font Name Error

**LOCATION:** Section B2, line 155

**OLD TEXT:**
```
U-09. Typography trinity: Instrument Serif / Source Sans 3 / Source Code Pro
```

**NEW TEXT:**
```
U-09. Typography trinity: Instrument Serif / Inter / JetBrains Mono
```

**RATIONALE:** tokens.css lines 68-70 define the immutable font trinity as `--font-display: 'Instrument Serif'`, `--font-body: 'Inter'`, `--font-mono: 'JetBrains Mono'`; Source Sans 3 and Source Code Pro are not used anywhere in the design system.

---

### BG-03: 16-multi-coherence-invocation.md Not Routed To Any Agent

**LOCATION:** Section E, lines ~418-432 (PLANNER reads and METAPHOR AGENT reads sections)

**OLD TEXT:**
```
PLANNER reads:
  - design-system/compositional-core/grammar/mechanism-catalog.md -- 18 mechanisms + impact profiles
  - design-system/compositional-core/guidelines/semantic-rules.md -- compositional grammar
  - [content inventory]                                  -- source material
  - [metaphor derivation]                                -- metaphor-mechanism mapping

METAPHOR AGENT reads:
  - ~/.claude/skills/tension-composition/SKILL.md        -- TC pipeline (1,932 lines)
  - design-system/validated-explorations/combination/CD-006-pilot-migration.html
  - design-system/validated-explorations/density/DD-006-fractal.html

INTENTIONALITY BUILDER reads:
  - Crown jewel forensics (11-crown-jewel-forensics.md)  -- 15 must-replicate techniques
  - Compositional fluency (13-compositional-fluency.md)  -- 5 interaction types
  - Content-form alignment analysis                       -- content-structure fit
```

**NEW TEXT:**
```
PLANNER reads:
  - design-system/compositional-core/grammar/mechanism-catalog.md -- 18 mechanisms + impact profiles
  - design-system/compositional-core/guidelines/semantic-rules.md -- compositional grammar
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md -- 5 interaction types, CCS formula, cross-dimension matrix, per-pair verification
  - [content inventory]                                  -- source material
  - [metaphor derivation]                                -- metaphor-mechanism mapping

METAPHOR AGENT reads:
  - ~/.claude/skills/tension-composition/SKILL.md        -- TC pipeline (1,932 lines)
  - design-system/validated-explorations/combination/CD-006-pilot-migration.html
  - design-system/validated-explorations/density/DD-006-fractal.html

METAPHOR BUILDER reads:
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md -- 5 interaction types, CCS removal test, reinforcing pair verification
  - ephemeral/prompt-enrichment-audit/15-scale-channel-invocation.md  -- 7 channels, operational formulas

INTENTIONALITY BUILDER reads:
  - Crown jewel forensics (11-crown-jewel-forensics.md)  -- 15 must-replicate techniques
  - Compositional fluency (13-compositional-fluency.md)  -- 5 interaction types
  - ephemeral/flagship-preparation/05-content-first-methodology.md -- content-structure fit
```

**ALSO ADD to Section B10 (self-check), after line 290:**

**OLD TEXT (B10, lines 289-291):**
```
[ ] C-09: >= 1 designed moment per scroll quartile
[ ] C-18: Density varies across scroll (peak NOT in first section)

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
```

**NEW TEXT:**
```
[ ] C-09: >= 1 designed moment per scroll quartile
[ ] C-18: Density varies across scroll (peak NOT in first section)
[ ] MC-01: CCS >= 0.30 (removal test: for 3+ mechanisms, removing one changes others' meaning)
[ ] MC-02: >= 3 reinforcing pairs documented (same semantic, different CSS channels)
[ ] MC-06: >= 1 cascading chain of 3+ mechanisms documented

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
```

**RATIONALE:** 16-multi-coherence-invocation.md (950 lines) is the operational guide for MC-01 through MC-08; without routing it to agents, the 8 MC rules are one-liners with zero verification methods reachable during execution. Adding MC items to B10 gives the builder a recency-position check.

---

### BG-04: Two Competing PA Auditor Assignment Systems

**LOCATION:** Section C4, lines 372-381

**DECISION:** The SKILL.md / Depth-12 / Depth-17 system (System 2) is authoritative because:
1. It aligns with the SKILL.md canonical Mode 4 definition
2. It has detailed per-auditor instruction sheets in Depth-17
3. It keeps the void pipeline (PA-50/51/52/53) unified in Auditor C
4. It distributes load more evenly (no 11-question overloaded auditor)
5. The prompt's own B9 section internally references System 2 assignments

**OLD TEXT:**
```
9 AUDITOR ASSIGNMENTS:
  A: PA-01,02,03,04,05 (Identity+First Impression, 5 Qs)
  B: PA-06,07,08,09,10,11 (Spatial Composition, 6 Qs)
  C: PA-12,13,14,30,31,32,33,34,35,50,51 (Spatial Detail+Void, 11 Qs)
  D: PA-15,16,17,18,19 (Typography+Rhythm, 5 Qs)
  E: PA-20,21,22,23,24 (Component Quality, 5 Qs)
  F: PA-25,26,27,28,29,41 (Mechanism Deployment+Rhythm, 6 Qs)
  G: PA-36,37,38 (Responsive+Accessibility, 3 Qs)
  H: PA-39,40,42,43,44 (Proportions+Polish, 5 Qs)
  I: PA-45,46,47,48,52,53 (Coherence+Void Assessment, 6 Qs)
```

**NEW TEXT:**
```
9 AUDITOR ASSIGNMENTS (authoritative -- aligned with SKILL.md + Depth-12 + Depth-17):
  A: PA-01,03,04,05,18,19,20,45  (Identity+First Impression+Color, 8 Qs)
  B: PA-02,06,07,08,29           (Readability+Typography, 5 Qs)
  C: PA-09,10,11,30,31,32,33,50,51,52,53 (Spatial+Void Pipeline, 11 Qs)
  D: PA-12,13,34,35,36           (Flow+Pacing, 5 Qs)
  E: PA-14,15,37,38,39           (Grid+Layout, 5 Qs)
  F: PA-16,17,40,41              (Rhythm+Consistency, 4 Qs -- PA-17/41 PRIMARY, all auditors note)
  G: PA-42,43,44                 (Metaphor+Ideology, 3 Qs)
  H: PA-21,22,23,46,47           (Responsive+Degradation, 5 Qs)
  ADV: PA-24,25,26,27,28,48      (Adversarial+Cross-Page, 6 Qs)
```

**ALSO UPDATE Wrapper Phase 2 auditor assignments (lines 243-253):**

Replace the same block in the Wrapper to match the new C4 assignments above.

**ALSO UPDATE C4 viewport line (line 370):**

**OLD TEXT:**
```
  3 viewports: 1440px, 768px, 480px. Cold look + full scroll at each. 40-60 screenshots.
```

**NEW TEXT:**
```
  3 viewports: 1440px, 1024px, 768px. Cold look + full scroll at each. 40-60 screenshots.
```

**RATIONALE:** Reconciles the two competing assignment systems by adopting System 2 (SKILL.md/Depth-12/Depth-17) as authoritative. This preserves the void pipeline in Auditor C (PA-50->51->52->53 sequential), aligns PA-09 severity calibration with Auditor C's instruction sheet, and corrects the viewport to 1024px per SKILL.md canonical specification.

---

### BG-05: Wrapper File Paths Do Not Exist On Disk

**LOCATION:** AUXILIARY-EXECUTION-WRAPPER.md, Phase 1A, Reads #5 and #6 (lines 56-61)

**Verification results:**
- `design-system/compositional-core/components/merged-components.css` -- DOES NOT EXIST. Actual files on disk: `components.css`, `components-dd-od.css`, `components-cd-tt.css`.
- `design-system/compositional-core/case-studies/_INDEX.md` -- DOES NOT EXIST. Actual file on disk: `README.md`.

**OLD TEXT (Read #5, line 56):**
```
READ #5:  design-system/compositional-core/components/merged-components.css
          EXTRACT: List all component classes. Write to 00-components-extract.md
```

**NEW TEXT:**
```
READ #5:  design-system/compositional-core/components/components.css
          EXTRACT: List all component classes. Write to 00-components-extract.md
```

**OLD TEXT (Read #6, line 59-60):**
```
READ #6:  design-system/compositional-core/case-studies/_INDEX.md
          EXTRACT: Note which case studies exist. Write to 00-case-studies-extract.md
```

**NEW TEXT:**
```
READ #6:  design-system/compositional-core/case-studies/README.md
          EXTRACT: Note which case studies exist. Write to 00-case-studies-extract.md
```

**RATIONALE:** Team-lead's extraction phase (Phase 1A) will error on two file reads, potentially stalling the entire pipeline. `merged-components.css` was the historical name; post-extraction the file was split into `components.css`, `components-dd-od.css`, and `components-cd-tt.css`. The primary file is `components.css`. Similarly, `_INDEX.md` was renamed to `README.md`.

---

### BG-06: CCS Formula Mismatch

**LOCATION:** Section B4, lines 194-195

**Source formula (from 16-multi-coherence-invocation.md, Section 1.2, lines 30-40):**

The source defines Multi-Coherence as a per-mechanism removal test:
```
Multi-Coherence = (Reinforcing Pairs x Modulating Chains x Fractal Depth) / Independent Mechanisms
```

And the CCS (Compositional Coupling Score) is defined through a removal test:
"For each mechanism, remove it. Count how many other mechanisms' perceived meaning changes. CCS per mechanism = (mechanisms whose meaning changes) / (total deployed - 1). CCS for page = average across all deployed mechanisms."

The prompt's current formula `mechanism_pairs_with_interaction / total_possible_pairs` is a different metric. The 0.30 threshold was calibrated against the removal-test formula (CD-006 estimated ~0.50-0.65 on the source formula).

**OLD TEXT:**
```
MC-01. CCS (Compositional Coupling Score) >= 0.30 for Flagship.
        CCS = (mechanism_pairs_with_interaction / total_possible_pairs)
```

**NEW TEXT:**
```
MC-01. CCS (Compositional Coupling Score) >= 0.30 for Flagship.
        CCS per mechanism = (mechanisms whose perceived meaning changes when THIS mechanism
        is removed) / (total deployed - 1). CCS for page = average CCS across all deployed.
        Verification: pick 3+ mechanisms, mentally remove each, check if others' meaning shifts.
```

**RATIONALE:** The pair-counting formula produces different pass/fail results than the per-mechanism removal test the 0.30 threshold was calibrated against. CD-006 estimated ~0.50-0.65 on the removal formula; using a different formula with the same threshold produces unreliable results.

---

### BG-07: SC-08 Content Weight Check Missing From Gate 1

**LOCATION:** Section C3, line 352

**OLD TEXT:**
```
Gate 1 (Post-Pass-1): SC-01 through SC-07. Max 2 fix cycles. Fail after 2 = ABORT.
```

**NEW TEXT:**
```
Gate 1 (Post-Pass-1): SC-01 through SC-08. Max 2 fix cycles. Fail after 2 = ABORT.
```

**ALSO ADD SC-08 to B10 self-check (optional but recommended):**

The B10 self-check at line 283 currently reads:
```
[ ] U-01 through U-10: Soul 10/10     (all prohibitions above)
```

Consider adding after line 288:
```
[ ] SC-08: No scale has ALL 7 channels active simultaneously
```

**RATIONALE:** SC-08 (channel saturation prevention) exists in Section B5 but is excluded from Gate 1 and absent from the builder self-check. Without gate enforcement, SC-08 is advisory -- contradicting the prompt's own principle that "binary rules without enforcement = advisory" (Theme-04 from validation).

---

## EDIT SUMMARY

| BG# | Target File | Section | Lines Affected | Edit Type |
|-----|------------|---------|----------------|-----------|
| BG-01 | Enriched Prompt | C1 | ~307 | INSERT (Planner agent definition) |
| BG-01 | Wrapper | Phase 2 | ~163 | INSERT (Planner spawn block) |
| BG-02 | Enriched Prompt | B2 | 155 | REPLACE (font names) |
| BG-03 | Enriched Prompt | Section E | ~418-432 | REPLACE (add 16-MC routing to Planner + Metaphor Builder) |
| BG-03 | Enriched Prompt | B10 | ~289-291 | INSERT (3 MC self-check items) |
| BG-03 | Enriched Prompt | Section E | ~432 | REPLACE (resolve content-form file path) |
| BG-04 | Enriched Prompt | C4 | 372-381 | REPLACE (System 2 assignments) |
| BG-04 | Wrapper | Phase 2 | 243-253 | REPLACE (match C4 assignments) |
| BG-04 | Enriched Prompt | C4 | 370 | REPLACE (viewport 480px -> 1024px) |
| BG-05 | Wrapper | Phase 1A | 56 | REPLACE (merged-components.css -> components.css) |
| BG-05 | Wrapper | Phase 1A | 59-60 | REPLACE (_INDEX.md -> README.md) |
| BG-06 | Enriched Prompt | B4 | 194-195 | REPLACE (CCS formula) |
| BG-07 | Enriched Prompt | C3 | 352 | REPLACE (SC-07 -> SC-08) |

**Total edits: 13 (across 2 files)**
**Estimated application time: 15-20 minutes**

---

**END BLOCKING FIX SPECIFICATION**
