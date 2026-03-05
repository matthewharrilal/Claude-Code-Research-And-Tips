# Verification Report: Sections 1-2 of Pipeline v2 Implementation Guide

**Verifier:** Agent 1 (Opus 4.6)
**Date:** 2026-02-19
**Scope:** Section 1 ("Where We Are Right Now") + Section 2 ("The Architecture: Fat Core")
**Sources Cross-Referenced:**
- `PV2-PIPELINE-DIAGRAM.md` (1,354 lines)
- `32-master-synthesis.md` (definitive recommendation)
- `94-maximum-efficacy-architecture.md` (Fat Core spec)
- Actual files: `SKILL.md` (both skills), `tokens.css`, `prohibitions.md`, `mechanism-catalog.md`, `components.css`, `semantic-rules.md`, `case-studies/`, `CD-006-pilot-migration.html`

---

## SECTION 1: "Where We Are Right Now"

### Claim 1: Tension-Composition Skill is 1,878 lines
- **Guide says (line 405):** `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines)
- **Actual:** `wc -l` returns **1,932 lines**
- **Verdict: INACCURATE** -- File has grown since the guide was written. The 1,878 figure was accurate at the time of the enrichment execution team (MEMORY.md confirms "1,583 -> 1,878 lines (+295)"), but subsequent enrichments added ~54 more lines. Current line count is 1,932.

### Claim 2: Perceptual Auditing Skill is 848 lines
- **Guide says (line 410):** `~/.claude/skills/perceptual-auditing/SKILL.md` (848 lines)
- **Actual:** `wc -l` returns **847 lines**
- **Verdict: ACCURATE** -- Off by 1 line, within rounding tolerance.

### Claim 3: Layer 1 has "24 rules defining the system by what it refuses"
- **Guide says (line 417):** "24 rules"
- **Guide detail (line 428):** "8 absolute rules... plus 14 conditional and 2 meta-prohibitions" (8+14+2=24)
- **Actual file:** 22 numbered prohibitions (#1-22): 8 ABSOLUTE (#1-8) + 10 CONDITIONAL (#9-18) + 2 META (#19-20) + 2 POST-FLAGSHIP spatial rules (#21-22, under Meta section but with exception clauses making them conditional)
- **compositional-core CLAUDE.md says:** "22 prohibitions (8 absolute, 12 conditional, 2 meta)"
- **Verdict: INACCURATE** -- The file contains 22 prohibitions, not 24. The breakdown should be "8 absolute + 12 conditional + 2 meta = 22" (per the compositional-core CLAUDE.md which is authoritative). The guide's "14 conditional" is wrong; there are 12 conditional (including the 2 post-flagship rules #21-22) and 2 meta.

### Claim 4: Layer 2 has "65 design tokens"
- **Guide says (line 418):** "65 design tokens -- the atoms of the system"
- **Actual:** `grep -c "^[[:space:]]*--"` returns **80** CSS custom properties in `tokens.css`
- **compositional-core CLAUDE.md says:** "65 tokens in :root block"
- **Verdict: INACCURATE** -- The file now contains 80 CSS custom properties, not 65. The 65 figure was accurate at extraction time but enrichments added more tokens. However, the compositional-core CLAUDE.md still says 65, so both the guide and CLAUDE.md are stale.

### Claim 5: Layer 3 has "18 reusable CSS mechanisms in 5 families"
- **Guide says (line 419):** "18 reusable CSS mechanisms in 5 families"
- **Actual:** `mechanism-catalog.md` contains exactly 18 numbered mechanisms (#1-18) across 5 property families (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation)
- **Verdict: ACCURATE**

### Claim 6: Layer 4 file is `components/components.css`
- **Guide says (line 420):** `components/components.css`
- **Actual:** File exists at `design-system/compositional-core/components/components.css` (1,195 lines)
- **Note:** The root CLAUDE.md references `components/merged-components.css` in key file paths section, but that file does NOT exist. The actual file is `components.css`.
- **Verdict: ACCURATE** -- The guide correctly names the file. (The root CLAUDE.md has the wrong name.)

### Claim 7: Layer 4 detail says "1,195-line merged CSS from 27 exploration files"
- **Guide says (line 431):** "1,195-line merged CSS from 27 exploration files"
- **Actual:** `wc -l` returns exactly **1,195 lines**
- **Verdict: ACCURATE**

### Claim 8: Layer 5 has "9 case studies plus an anti-prescription template"
- **Guide says (line 432):** "9 case studies plus an anti-prescription template"
- **Actual:** 9 distinct case study files (DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006) + ANTI-PRESCRIPTION-TEMPLATE.md + 3 visual companion files + README
- **Verdict: ACCURATE**

### Claim 9: Layer 6 has "7 semantic gap rules"
- **Guide says (line 422):** "7 semantic gap rules for ambiguous decisions"
- **Actual:** `semantic-rules.md` contains exactly 7 gap rules (Gap 1-7)
- **Verdict: ACCURATE**

### Claim 10: CD-006 scored 39/40
- **Guide says (line 439):** "scored 39/40"
- **Source (Report 32, line 20):** "CD-006 (1 Opus agent, minimal pipeline) scored 39/40"
- **MEMORY.md:** "CD-006 crown jewel 39/40"
- **Verdict: ACCURATE**

### Claim 11: CD-006 is "2,000+ line HTML page"
- **Guide says (line 439):** "A 2,000+ line HTML page"
- **Actual:** `wc -l` returns **2,085 lines**
- **Verdict: ACCURATE**

### Claim 12: "What Is Missing" list (5 items)
- **Guide says (lines 443-449):** 5 missing pieces: no orchestrator skill, no conventions brief, no perception thresholds in gates, no gate runner, S-09 stacking rule incomplete
- **Source (Report 32):** Confirms all 5 gaps. Conventions brief = Decision 3. Gate runner = mentioned in architecture. S-09 stacking = identified in MEMORY.md. Perception thresholds = L1 in pipeline diagram (lines 71-76 confirm "CURRENTLY: Encoded as binary gates SC-09 through SC-12" but "MINIMUM PERCEPTUAL DELTAS needed").
- **Verdict: ACCURATE** -- All 5 items are substantiated. The framing is fair. One nuance: perception thresholds ARE partially in gates (SC-09 through SC-12 exist), but they check counts rather than magnitudes. The guide's phrasing "No perception thresholds in gates" is slightly imprecise -- more accurately, gates lack MAGNITUDE thresholds (>= 15 RGB, etc.).

### Claim 13: TC Skill phases description
- **Guide says (line 406):** "Phase 0 assesses content type and tier. Phases 1-3 are the creative core -- multi-axis questioning, tension derivation, and metaphor collapse. Phase 4 extracts mechanisms. Phase 5 checks case studies. Phases 6-7 implement and verify."
- **Source (compositional-core CLAUDE.md):** Phase 0: Content assessment. Phase 1: Multi-axis questioning. Phase 2: Tension derivation. Phase 3: Metaphor collapse. Phase 3.5: Lock-in gate. Phase 4: Mechanism extraction. Phase 5: Case study comparison. Phase 6: Implementation. Phase 7: Verification.
- **Verdict: ACCURATE** -- Correctly summarizes the phase structure. Phase 3.5 (lock-in gate) is elided, which is acceptable for a summary.

### Claim 14: TC Skill tier classification
- **Guide says (line 407):** "Floor (simple assembly), Middle (pattern-based, skip metaphor), Ceiling (full pipeline with metaphor), Flagship (full pipeline plus multi-pass audit)"
- **Source (MEMORY.md tier model):** Floor / Middle (DEFAULT) / Ceiling / Flagship. The characterizations are consistent with the tier model table.
- **Note:** Pipeline v2 adopts "ALWAYS FLAGSHIP" (no tier routing), so these tiers are from the historical TC skill, not from PV2 architecture. The guide presents them correctly as historical TC content.
- **Verdict: ACCURATE**

### Claim 15: PA Skill description
- **Guide says (line 411):** "48 perceptual audit questions in four tiers, plus quantitative guardrails with hard numeric floors, four audit modes, team structures, and detailed protocols. PA-05 is the ship-or-not question, evaluated on four sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, and POLISHED."
- **Source (MEMORY.md):** "48 PA questions" confirmed. PA-05 sub-criteria confirmed as "DESIGNED, COHERENT, PROPORTIONATE, and POLISHED" -- but wait, let me verify.
- **MEMORY says:** "PA-05 DESIGNED (4/4), Novelty 3/3." The PA-05 has sub-criteria but I should verify the exact 4 names.
- **Verdict: ACCURATE** -- PA skill file (lines 90, 95, 100, 124) confirms the 4 sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, POLISHED. Exact match.

---

## SECTION 2: "The Architecture: Fat Core"

### Claim 16: Evidence table (CD-006: 1 Opus, ~50 lines, ~3/4 COMPOSED)
- **Guide says (line 464):** CD-006: 1 Opus, ~50 lines builder input, ~3/4 COMPOSED (39/40 soul score, CEILING tier)
- **Source (Report 32, line 134):** Originally "CD-006 | ~50 lines (tokens + soul) | ~4/4 (39/40 overall) | Crown jewel" -- NOTE: The ~4/4 characterization was INCORRECT. CD-006 is CEILING tier with 39/40 soul score, ~3/4 PA-05 COMPOSED.
- **Verdict: CORRECTED** (original source had mischaracterization)

### Claim 17: Evidence table (Middle: 8 agents, ~100 lines, 4/4 DESIGNED)
- **Guide says (line 465):** Middle Tier: 8 agents, ~100 lines (recipe), 4/4 DESIGNED
- **Source (Report 32, line 135):** "Middle | ~100 lines (recipe) | 4/4 DESIGNED | Best pipeline result"
- **Source (MEMORY.md):** "Middle-Tier Experiment: COMPLETE -- SUCCESS. 8 agents"
- **Verdict: ACCURATE**

### Claim 18: Evidence table (Remediation: 16+ agents, ~300 lines, 2.5/4)
- **Guide says (line 466):** Remediation: 16+ agents, ~300 lines (spec), 2.5/4
- **Source (Report 32, line 136):** "Remediation | ~300 lines (targeted spec) | 2.5/4 COMPOSED | Improved but capped"
- **Source (MEMORY.md):** "Flagship Remediation Execution: 16+ agents"
- **Verdict: ACCURATE**

### Claim 19: Evidence table (Flagship: 19 agents, ~530 lines, 1.5/4)
- **Guide says (line 467):** Flagship: 19 agents, ~530 lines (recipe), 1.5/4
- **Source (Report 32, line 137):** "Flagship | ~530 lines (full recipe) | 1.5/4 FLAT | Failure"
- **Source (MEMORY.md):** "Flagship Experiment: 19 agents"
- **Verdict: ACCURATE**

### Claim 20: "11 boundary crossings, 4 destructive"
- **Guide says (line 475):** "The Flagship had 11 boundary crossings, 4 destructive -- meaning they destroyed more than 35% of compositional intelligence passing through."
- **Source (PV2 diagram, line 1028):** "Boundaries | 11 (4 destructive) | 7 (0 destructive)"
- **Source (Report 32, line 68):** "Compare to current PV2: 11 boundaries, 4 destructive (35-65% loss each)."
- **Note:** The "35%" figure is the LOW end. Report 32 says "35-65% loss each." The guide says "more than 35%" which is technically correct but understates the upper range.
- **Verdict: ACCURATE** -- Substantiated by both PV2 diagram and Report 32.

### Claim 21: Boundary 3 compression ratio ~20:1, intelligence survival ~35%
- **Guide says (line 476):** "Compression ratio: ~20:1. Intelligence survival: ~35%."
- **Source (Report 94, line 53):** "Report 74, Boundary 3: ~20:1 compression, ~35% survival"
- **Source (Report 32, line 73):** "Report 103 identified as the site of 65% intelligence loss" (= 35% survival)
- **Verdict: ACCURATE**

### Claim 22: Fat Core has 12 agents
- **Guide says (line 483):** "The 12 Agents"
- **Source (Report 32, line 155):** "Agent count: 12 total (1 orchestrator + 1 core + 9 PA auditors + 1 weaver)"
- **Source (Report 94, line 155):** Same breakdown
- **Source (PV2 diagram, line 1027):** "Fat Core | 12 (same PA shell)"
- **Verdict: ACCURATE**

### Claim 23: Agent roles and descriptions
- **Guide says (lines 486-504):**
  - Agent 1: ORCHESTRATOR (Sonnet) -- traffic cop, routes files, runs gates, ~250 lines
  - Agent 2: CORE AGENT (Opus) -- reads content, plans AND builds, receives ~230 lines
  - Agents 3-11: 9 PA AUDITORS (Opus/Sonnet) -- fresh-eyes, screenshots only, 5-6 questions each
  - Agent 12: WEAVER (Opus) -- synthesizes 9 reports into verdict
- **Source (Report 32, lines 35-54):**
  - Orchestrator: Sonnet, selects content, invokes TC skill, sets tier
  - Core Agent: Opus, plans AND builds in one continuous session, receives conventions brief + tokens + prohibitions
  - 9 PA auditors: Mode 4 perceptual audit, pre-captured screenshots
  - 1 Weaver: Opus, synthesizes 9 reports into verdict + fix list
- **Source (Report 94, lines 131-152):** Orchestrator (~250 lines), single Opus core agent, 9 PA auditors, PA weaver
- **Note on PA auditor model:** Guide says "Opus/Sonnet." Report 32 says PA auditors are "Sonnet." Report 94 doesn't specify PA model. The guide's "Opus/Sonnet" is slightly imprecise -- Report 32 specifies Sonnet.
- **Verdict: ACCURATE** with minor imprecision on PA auditor model (should be Sonnet per Report 32, guide says "Opus/Sonnet").

### Claim 24: Core agent receives ~230 lines
- **Guide says (line 494):** "Receives ~230 lines: conventions brief + tokens + prohibitions"
- **Source (Report 32, lines 78-84):** "~230 lines total" = Content brief (~30 lines) + Conventions brief (~100 lines) + tokens.css (~65 lines) + prohibitions.md reference (~35 lines)
- **Verdict: ACCURATE**

### Claim 25: 3 Phase-Locked Gates
- **Guide says (lines 507-513):**
  - G1: After skeleton -- container width, landmarks, skip link, zones, component classes
  - G2: After styling -- soul properties, bg delta >= 15 RGB, typography, borders, warm palette
  - G3: Final -- all 15 gates including multi-coherence, sub-perceptual prevention, stacked gaps
- **Source (Report 94, lines 136-138):**
  - G1: After skeleton (landmarks, components, zones)
  - G2: After CSS (bg delta, palette, typography, soul)
  - G3: Comprehensive (all checks + multi-coherence)
- **Source (PV2 diagram, lines 1005-1008):** Same 3 gates
- **Verdict: ACCURATE** -- Gate descriptions match sources. Guide adds slightly more detail (skip link, borders, stacked gaps) which are reasonable elaborations of "comprehensive."

### Claim 26: Build sequence (12 steps)
- **Guide says (lines 518-531):** 12-step sequence from user typing command through SHIP verdict
- **Source (Report 32, lines 35-54 + Report 94, lines 128-152):** Consistent sequence
- **Note:** Step 12 says "If PA-05 >= 3/4: SHIP. If < 3/4: route fixes to the same core agent." Report 32 (line 148) says "If PA-05 < 3/4: routes fixes to SAME core agent." Report 94 (line 148): same. The guide adds "up to 3x" fix cycles which is from the PV2 diagram (line 164, Wave 3).
- **Verdict: ACCURATE**

### Claim 27: Comparison table -- Flagship vs Fat Core
- **Guide says (lines 536-545):**
  - Agent count: 19 vs 12 -- ACCURATE (Report 32 confirms both)
  - Builder input: 530-line checklist vs 100-line conventions brief -- PARTIALLY INACCURATE: Report 32 calls it "full recipe" not "checklist." MEMORY.md says the flagship used a "71-line CHECKLIST" for the builder specifically, but the total prompt was 530 lines. Calling it "530-line checklist" conflates the two. It was a 530-line recipe/prompt, of which the builder's portion was more like a checklist.
  - Guardrail:playbook ratio: 7.9:1 vs ~1:1 -- ACCURATE (MEMORY.md: "963-line master prompt has 7.9:1 guardrail-to-playbook ratio")
  - Planning/building: Separate agents vs Same agent -- ACCURATE
  - Builder model: Sonnet vs Opus (non-negotiable) -- ACCURATE (MEMORY.md: "Sonnet-for-builders is unexamined. CD-006 was built by Opus. Flagship builders were Sonnet.")
  - Fix cycle agent: Different agent vs Same agent -- ACCURATE
  - Destructive boundaries: 4 vs 0 -- ACCURATE (PV2 diagram line 1028, Report 32 line 68)
- **Verdict: ACCURATE** with one terminology issue -- "checklist" should be "recipe" per Report 32's language, though the MEMORY.md does characterize the flagship builder instruction format as checklist-style.

### Claim 28: Checkpoint summary (7 non-destructive boundaries)
- **Guide says (line 550):** "Total: 12 agents, 7 non-destructive boundaries."
- **Source (Report 32, line 56):** "Boundary Count: 7 (0 destructive)"
- **Verdict: ACCURATE**

---

## SUMMARY

| Verdict | Count |
|---------|-------|
| ACCURATE | 23 |
| INACCURATE | 3 |
| PARTIALLY INACCURATE | 0 (folded into INACCURATE or ACCURATE with notes) |
| UNVERIFIABLE | 0 |

### INACCURATE Claims (Corrections Needed)

1. **TC Skill line count (Claim 1):** Guide says 1,878 lines. Actual is **1,932 lines**. Should update to ~1,930 or "~1,900+" to be durable.

2. **Layer 1 prohibition count (Claim 3):** Guide says "24 rules" and "8 absolute + 14 conditional + 2 meta." Actual is **22 rules: 8 absolute + 12 conditional + 2 meta**. The compositional-core CLAUDE.md confirms 22. The guide inflates by 2.

3. **Layer 2 token count (Claim 4):** Guide says "65 design tokens." Actual `tokens.css` now contains **80 CSS custom properties**. The 65 figure is stale (both in the guide and in the compositional-core CLAUDE.md).

### UNVERIFIABLE Claims

None -- all claims verified. (PA-05 sub-criteria initially marked unverifiable but subsequently confirmed: DESIGNED, COHERENT, PROPORTIONATE, POLISHED match PA skill lines 90, 95, 100, 124.)

### Notable Observations

- The "What Is Missing" list (Claim 12) is accurate but the phrasing "No perception thresholds in gates" is slightly imprecise. Gates SC-09 through SC-12 exist for thresholds, but they check counts, not magnitudes. A more accurate phrasing would be "No perception MAGNITUDE thresholds in gates."

- The Flagship "530-line checklist" label (Claim 27) conflates two distinct characterizations. Report 32 calls it a "530-line recipe." MEMORY.md notes the builder received a "71-line CHECKLIST" but the total prompt was 530 lines. The guide's "checklist" terminology is a reasonable characterization of the STYLE of instruction but imprecise about what the 530 lines represented.

- PA auditor model (Claim 23): Guide says "Opus/Sonnet" but Report 32 specifies Sonnet. This is a minor imprecision.

---

## COMPLETENESS CHECK: "What Is Missing" Section

The guide's 5-item list covers the key gaps. Are there other gaps identified in source materials that the guide omits?

From Report 32 and PV2 diagram, additional gaps not explicitly in the guide's list:
- **TC skill needs narrowing** from 1,878 to ~660 lines (PV2 diagram line 12, 178). The guide mentions this elsewhere but not in the "What Is Missing" section.
- **Multi-coherence gates (SC-13/14/15)** are not yet implemented (PV2 diagram line 13). Partially covered by "no perception thresholds in gates" but these are distinct.
- **Transition Table and Fractal Echo Table** are new artifacts mentioned in PV2 diagram but Report 32 explicitly says these should NOT be created (the core agent creates them organically).

These omissions are defensible design choices -- the guide follows Report 32's Fat Core architecture which intentionally excludes some PV2 diagram features. The "What Is Missing" list is accurate for the Fat Core path.

---

**Overall Assessment:** Sections 1-2 are substantially accurate. 3 factual corrections needed (line counts for TC skill and tokens, prohibition count). No structural or conceptual errors. The narrative faithfully represents the source materials and the Fat Core architecture recommendation.
