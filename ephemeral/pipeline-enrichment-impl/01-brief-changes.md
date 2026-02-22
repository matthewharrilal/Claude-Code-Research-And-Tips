# Change Manifest: conventions-brief.md

**Agent:** brief-manifest (Opus 4.6)
**Date:** 2026-02-20
**Current file:** `design-system/pipeline/conventions-brief.md` (403 lines)
**Line budget:** <= 450 lines (47 lines of headroom)
**Research files cross-referenced:** 11-master-synthesis, 04-brief-deep-dive, 07-anti-regression-analysis, 17-concept-flow-trace, 13-scale-page, 15-scale-component, 12-scale-navigation, 10-contrarian-analysis, 01-pipeline-state-map, 02-stack-placement-design, execution-report-findings

---

## PRE-ANALYSIS

### B8 Bug Check
Searched entire brief for `0.02em` (without trailing `5`). **ZERO matches found.** The brief already uses `0.025em` correctly at line 59 and line 288. B8 applies to "2 CLAUDE.md files" per execution-report-findings.md, NOT to the conventions brief.

### Current Guardrail-to-Playbook Ratio
From Report 04 section-by-section count:
- Constraint (guardrail) statements: ~58 (31%)
- Recipe (playbook) statements: ~29 (16%)
- Ratio: **2.0:1** (constraint:recipe)
- World-description: ~95 (51%), Creative authority: ~9 (5%)

Target: <= 2:1. Currently AT target. Every new edit must be recipe or world-description to improve or hold.

---

## EDITS

### EDIT 1: Channel-Threshold Perception Table (E4 -- DO NOW)
Source: E4 from 11-master-synthesis, confirmed by 04-brief-deep-dive (Section 3 "Channel Granularity"), 17-concept-flow-trace (Concept 7 "perception thresholds are pipeline's best-preserved concept"), 07-anti-regression (Type C: 0 HIGH risks)
Location: Section 4, after line 102 (after "Behavioral and Material are enhancement channels -- they enrich but do not substitute for the primary four.")
Type: DO NOW
Old text: INSERT AFTER: "Behavioral and Material are enhancement channels -- they enrich but do not substitute for the primary four."
New text:
```

What counts as a shift in each channel:

| Channel | Primary CSS Properties | Perceptible When |
|---------|----------------------|------------------|
| Chromatic | background-color | >= 15 RGB delta on any channel |
| Typographic | font-size, font-weight, letter-spacing | >= 2px size OR >= 100 weight delta |
| Spatial | padding, margin | >= 24px delta between zones |
| Structural | border-left-width, hr, dividers | config appears, changes weight, or disappears |
| Behavioral | :hover background, transition-duration | interaction presence changes between zones |
| Material | component density, surface variety | component mix changes between zones |
```
Lines added: 10
Anti-regression check:
  - Line budget remaining after this edit: 37 (403 + 10 = 413)
  - Recipe or checklist? RECIPE -- maps channels to concrete CSS properties and perception floors. Builder reads "I need >= 15 RGB on background" not "verify chromatic threshold."
  - Guardrail-to-playbook impact: IMPROVES -- adds 6 recipe-shaped rows (CSS property + threshold = what to do), 0 new constraints
  - Risk rating: LOW -- consolidates thresholds already scattered across Sections 2, 4, and 9B into a single reference table. Zero new content, just reorganization.

---

### EDIT 2: Boundary-by-Boundary CSS Recipe Example (E2 -- DO NOW)
Source: E2 from 11-master-synthesis, confirmed by 04-brief-deep-dive (Section 8 "the most important building instruction gets 2 sentences"), 06-orchestrator-deep-dive (E-CONTRA contradiction), 13-scale-page (Section 6.2 Gap 4 "brief has the tools but lacks the RECIPE")
Location: PROCESS section, after line 386 (after "At each zone boundary, set all shifting channels together: background + typography + spacing + borders. Verify your transition plan values against the perception thresholds as you go.")
Type: DO NOW
Old text: INSERT AFTER: "At each zone boundary, set all shifting channels together: background + typography + spacing + borders. Verify your transition plan values against the perception thresholds as you go."
New text:
```

At each boundary, set ALL shifting channels together in one CSS block:
```css
/* Boundary Z1->Z2: DEEPENING */
.zone-2 {
  background: #F0EBE3;     /* Chromatic: 18 RGB darker */
  padding: 48px 64px;      /* Spatial: compressed from 64px */
  border-left: 3px solid;  /* Structural: border appears */
  font-size: 16px;         /* Typographic: reduced from 18px */
}
```
Do NOT set all backgrounds first, then all borders, then all typography. That produces channel-grouped output, not boundary-coherent output.
```
Lines added: 10
Anti-regression check:
  - Line budget remaining after this edit: 27 (413 + 10 = 423)
  - Recipe or checklist? RECIPE -- concrete CSS values in a code block showing sequenced action at one boundary. "Set X to Y" verbs throughout.
  - Guardrail-to-playbook impact: IMPROVES -- adds 1 full CSS recipe (6 lines of concrete CSS + 2 lines of what-not-to-do framing). This is pure playbook.
  - Risk rating: LOW -- the instruction "build boundary by boundary" already exists at line 386. This adds a WORKED EXAMPLE of that instruction. Report 07 rates recipe formatting at 0 HIGH risks across all 10 failure modes.

---

### EDIT 3: Stack Relationship Bridge (E1 -- DEFER)
Source: E1 from 11-master-synthesis (5/9 reports supporting, 100% consensus finding C1), confirmed by 01-pipeline-state-map ("single finding with 100% agreement"), 02-stack-placement-design (full placement map), 04-brief-deep-dive (Section 2 "CRITICAL FINDING: progression is INVERTED" -- but ordering is telescope-first and CORRECT, only relationship text is missing), 17-concept-flow-trace (Concept 9 "NEVER EXPLICITLY CODIFIED")
Location: Section 4, after line 93 (after "At every zone boundary, at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction."), OR between Section 4 heading and first paragraph
Type: DEFER
Old text: INSERT AFTER: "At every zone boundary, at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction."
New text:
```

Sections 3-5 form a stack. RICHNESS (Section 3) is the governing principle -- the destination. MULTI-COHERENCE (this section) is the binding mechanism -- how richness manifests at zone boundaries. FRACTAL ECHO (Section 5) distributes the pattern across scales. CHANNELS (below) are the building blocks -- the CSS properties that shift. You PLAN top-down (richness goal first) but BUILD bottom-up (channels first, then coherence, then scale).
```
Lines added: 4
Anti-regression check:
  - Line budget remaining after this edit: 23 (423 + 4 = 427)
  - Recipe or checklist? WORLD-DESCRIPTION -- describes the architectural relationship between existing concepts. Uses the brief's own voice ("the destination," "the binding mechanism").
  - Guardrail-to-playbook impact: NEUTRAL -- 0 new constraints, 0 new recipes. Pure world-description naming the relationship already implicit in section ordering.
  - Risk rating: LOW -- Report 07 rates this LOW regression risk ("world-description, zero new constraints"). The contrarian (Report 10) argues "implicit ordering may suffice for Opus" -- valid, but Report 17 shows this relationship is the one with 100% agent agreement AND the weaver/fix cycle atomizes these concepts without the bridge. The 4-line investment is minimal.

---

### EDIT 4: DESIGNED/COMPOSED Naming Convention (E5 -- DEFER)
Source: E5 from 11-master-synthesis, confirmed by 04-brief-deep-dive (Section 7 "The DESIGNED/COMPOSED naming pattern at line 63 is the brief's best floor/target mechanism. Extending it to 2 more dimensions creates systematic guidance without adding new concepts.")
Location: Section 9B, after line 237 (after "3-5 zones with >= 15 RGB background delta between each")
Type: DEFER
Old text: INSERT AFTER: "- **3-5 zones** with >= 15 RGB background delta between each"
New text:
```

Named quality levels (the floor is non-negotiable; the target is what COMPOSED pages reach):
- Channel shifts per boundary: 3 = DESIGNED (floor), 5+ = COMPOSED
- Layout topologies: 2 = DESIGNED (floor), 3+ = COMPOSED
- Strong scales: 2 = DESIGNED (floor), 3+ = COMPOSED
```
Lines added: 4
Anti-regression check:
  - Line budget remaining after this edit: 19 (427 + 4 = 431)
  - Recipe or checklist? WORLD-DESCRIPTION -- labels existing thresholds with names already in use (DESIGNED/COMPOSED appear at line 63). Adds zero new constraints; the >= 2 topology and >= 2 scale thresholds are already stated in Sections 5 and 8.
  - Guardrail-to-playbook impact: NEUTRAL -- names existing floors and targets, does not create new ones.
  - Risk rating: LOW -- extends an existing naming pattern. Report 07 rates this LOW. The contrarian says "doesn't add new content, just names what exists" -- that IS the point.

---

### EDIT 5: Enhancement Channel CSS Property Guidance (E6 -- DEFER)
Source: E6 from 11-master-synthesis, confirmed by 04-brief-deep-dive (Section 3 "Channels 4-6 use descriptive language instead of CSS property names"), execution-report-findings (E-PHANTOM: "Behavioral: 1 line definition, zero CSS examples. Material: 1 line, 'surface treatment' undefined"), 13-scale-page (Section 1.5-1.6 "Material channel has no concrete guidance")
Location: Section 4, lines 100-101 (MODIFY existing channel definitions for Behavioral and Material)
Type: DEFER
Old text:
```
5. **Behavioral** -- hover states, transition timing change
6. **Material** -- surface treatment or component density change
```
New text:
```
5. **Behavioral** -- :hover background-color, transition-duration, cursor changes between zones
6. **Material** -- component type mix, visual texture density (prose-only vs prose+code+callout)
```
Lines added: 0 (modification of existing lines)
Anti-regression check:
  - Line budget remaining after this edit: 19 (431 + 0 = 431)
  - Recipe or checklist? RECIPE -- replaces vague descriptions ("surface treatment") with concrete CSS properties (:hover background-color, transition-duration) and observable differences (prose-only vs prose+code+callout). Builder can now write CSS for these channels.
  - Guardrail-to-playbook impact: IMPROVES -- converts 2 vague descriptions into 2 CSS-anchored descriptions. The perception table (Edit 1) already adds thresholds for these channels.
  - Risk rating: LOW -- modifies 2 existing lines, adds zero new lines. Report 07 rates channel CSS completion as LOW risk.

---

### EDIT 6: Component-Internal Multi-Coherence Note (E9 -- DEFER)
Source: E9 from 11-master-synthesis, confirmed by 15-scale-component (Gap 1 "Component-Internal Multi-Coherence -- HIGH LEVERAGE": "The label-to-body transition inside every component is a micro-coherence event"), 04-brief-deep-dive (implicit gap -- component DNA described but never connected to multi-coherence)
Location: Section 8, after the Component 2-Zone DNA paragraph (after line 186, after "The repetition IS the signal -- the reader learns the label register once and recognizes it everywhere.")
Type: DEFER
Old text: INSERT AFTER: "The repetition IS the signal -- the reader learns the label register once and recognizes it everywhere."
New text:
```

The label-to-body transition inside every component is a micro-coherence event: Typographic + Spatial channels always shift together (2 channels). Adding a 1px internal separator gains a Structural channel for free (3 channels). The direction is always DEEPENING -- from meta-register into content-register.
```
Lines added: 3
Anti-regression check:
  - Line budget remaining after this edit: 16 (431 + 3 = 434)
  - Recipe or checklist? WORLD-DESCRIPTION -- describes what IS happening inside components, using the brief's existing vocabulary (channels, DEEPENING, multi-coherence). Not "verify that components have 3 channels" but "the label-to-body transition IS a micro-coherence event."
  - Guardrail-to-playbook impact: NEUTRAL -- connects two existing concepts (2-zone DNA + multi-coherence) without adding constraints.
  - Risk rating: LOW -- Report 15 calls this "the single clearest enrichment opportunity at Component scale." 3 lines, world-description voice, zero new constraints.

---

### EDIT 7: Parametric Echo CSS Recipe (E10 -- DEFER)
Source: E10 from 11-master-synthesis, confirmed by 15-scale-component (Gap 2 "Parametric Echo Recipe -- HIGH LEVERAGE": "The principle is stated but the recipe is absent"), 04-brief-deep-dive (Section 8 "the RECIPE content (16%) is adequate but could be strengthened")
Location: Section 5, after line 144 (after the parametric echo description: "the degree varies by page zone" (parametric echo).")
Type: DEFER
Old text: INSERT AFTER: "the degree varies by page zone" (parametric echo)."
New text:
```

In practice: a callout in a dense zone uses padding 16px 20px and label margin-bottom 8px. The same callout in a sparse zone uses padding 32px 24px and label margin-bottom 16px. Same DNA, different tightness -- echoing the zone's density.
```
Lines added: 3
Anti-regression check:
  - Line budget remaining after this edit: 13 (434 + 3 = 437)
  - Recipe or checklist? RECIPE -- concrete CSS values (16px 20px, 32px 24px, 8px, 16px) showing what parametric echo looks like in practice. Builder can write this CSS directly. Report 15: "The principle 'components in dense zones should have tighter internal padding' is a CHECKLIST item. The concrete values above are a RECIPE."
  - Guardrail-to-playbook impact: IMPROVES -- converts 1 principle statement into 1 principle + 1 CSS recipe. Pure playbook addition.
  - Risk rating: LOW -- 3 lines of concrete CSS values. Report 07 rates recipe formatting at 0 HIGH risks.

---

### EDIT 8: Character Scale Register Inventory (E14 -- DEFER)
Source: E14 from 11-master-synthesis, confirmed by 16-scale-character (from Wave 1 scale analyses -- character scale has "zero positive verification" and "single-channel" status)
Location: Section 5, modify the Character row in the fractal echo table (line 138), expanding the "Min Threshold" cell
Type: DEFER
Old text:
```
| Character | ~12-20px | Micro-typography shifts | ONLY after Page scale verified | [ ] |
```
New text:
```
| Character | ~12-20px | Micro-typography shifts (font-size, font-weight, letter-spacing >= 0.03em) | ONLY after Page scale verified. Budget: <= 5% of total CSS lines. | [ ] |
```
Lines added: 0 (modification -- expands within existing table row, may wrap slightly differently but same logical line count)
Anti-regression check:
  - Line budget remaining after this edit: 13 (437 + 0 = 437)
  - Recipe or checklist? RECIPE -- names the 3 available CSS properties at character scale (font-size, font-weight, letter-spacing >= 0.03em) and adds a budget cap (5% of CSS lines) to prevent the Flagship's 22% character-scale misallocation.
  - Guardrail-to-playbook impact: NEUTRAL -- adds 1 small constraint (5% budget cap) but pairs it with 3 named CSS properties (what TO use). The budget cap is DIRECTLY derived from the Flagship failure analysis where 22% of CSS was invisible character-scale work.
  - Risk rating: LOW -- Report 07 rates character-scale enrichment as LOW risk when it CONSTRAINS rather than ADDS. The 5% cap prevents the documented failure mode (CSS budget misallocation) without restricting creativity.

---

### EDIT 9: Fix Cycle Compositional Memory Note (E-RETURN + E-FIX from execution report)
Source: E-RETURN and E-FIX from execution-report-findings ("Fix template has zero references to metaphor, conviction, fractal echo, or multi-coherence direction"), confirmed by 17-concept-flow-trace (the return-path extinction finding: "the builder's FIRST pass operates at full compositional intelligence; the FIX pass operates at mechanical compliance")
Location: Section 10 COMPOSITIONAL MEMORY, after line 253 (after "Intentional absence is restraint. Accidental absence is a gap.")
Type: GO BEYOND
Old text: INSERT AFTER: "Intentional absence is restraint. Accidental absence is a gap."
New text:
```

**Fix cycle memory.** When returning to fix gate failures or PA issues, re-read your conviction statement and the relevant brief section before writing CSS. Fix cycles naturally degrade from compositional reasoning to mechanical patching. Your conviction statement is the antidote -- it reminds you what you intended, not just what failed.
```
Lines added: 4
Anti-regression check:
  - Line budget remaining after this edit: 9 (437 + 4 = 441)
  - Recipe or checklist? RECIPE -- sequenced action: "re-read your conviction statement AND the relevant brief section BEFORE writing CSS." This is a recipe step for how to approach fix cycles.
  - Guardrail-to-playbook impact: IMPROVES -- addresses the documented recipe-to-checklist degradation in fix cycles (Report 17's strongest finding) with a recipe instruction, not a verification requirement.
  - Risk rating: LOW -- 4 lines, world-description voice, zero new constraints. Addresses the highest-confidence finding from the concept-flow trace (return-path extinction) with the cheapest possible intervention.

---

### EDIT 10: Boundary-by-Boundary Build Order Strengthening (E-CONTRA from execution report)
Source: E-CONTRA from execution-report-findings ("Brief says 'build BOUNDARY BY BOUNDARY' but checkpoints grouped by CHANNEL"), confirmed by 06-orchestrator-deep-dive (consensus finding C6), 13-scale-page (Section 6.2 Gap 4 "boundary-by-boundary recipe")
Location: PROCESS section, lines 388-392 (MODIFY the "Four verification pauses" to be boundary-grouped, not channel-grouped)
Type: GO BEYOND
Old text:
```
Four verification pauses during the build:
- After HTML skeleton: landmarks present, skip link works, component classes in place
- After zone backgrounds: >= 15 RGB delta between adjacent zones on at least one channel
- After borders: border-left present in 3+ sections, 3-tier weights deployed
- After typography: >= 2px font-size delta between zone groups
```
New text:
```
Three verification pauses during the build:
- After HTML skeleton: landmarks present, skip link works, component classes in place
- After zone boundaries set (all channels together per boundary): adjacent bg deltas >= 15 RGB? Border-left in 3+ sections? >= 3 channels shifting in same direction at each boundary?
- After full build: font-size delta >= 2px between zone groups? Midpoint reflection complete? Five-question self-check answered?
```
Lines added: 0 (modification -- replaces 5 lines with 5 lines, slightly restructured)
Anti-regression check:
  - Line budget remaining after this edit: 9 (441 + 0 = 441)
  - Recipe or checklist? RECIPE -- restructures channel-grouped verification pauses into boundary-grouped pauses that match the "build BOUNDARY BY BOUNDARY" instruction. Eliminates the contradiction flagged by Report 06 (consensus finding C6).
  - Guardrail-to-playbook impact: NEUTRAL -- same content, different grouping. Moves from channel-by-channel verification (which contradicts the build instruction) to boundary-then-full verification (which aligns with it).
  - Risk rating: LOW -- zero new content, zero new constraints. Restructures existing content to eliminate a documented contradiction. The contrarian (Report 10) argues "ordering of verification checkpoints doesn't affect verification quality" -- but the brief-level contradiction between "build boundary by boundary" (line 386) and "verify channel by channel" (lines 389-392) sends a contradictory signal to the builder about HOW to work.

---

## SUMMARY

### Lines Budget

| Edit | Type | Lines Added | Running Total |
|------|------|-------------|---------------|
| Current brief | -- | -- | 403 |
| Edit 1: Channel-threshold table (E4) | DO NOW | +10 | 413 |
| Edit 2: Boundary CSS recipe (E2) | DO NOW | +10 | 423 |
| Edit 3: Stack bridge (E1) | DEFER | +4 | 427 |
| Edit 4: DESIGNED/COMPOSED names (E5) | DEFER | +4 | 431 |
| Edit 5: Enhancement channel CSS (E6) | DEFER | 0 (mod) | 431 |
| Edit 6: Component micro-coherence (E9) | DEFER | +3 | 434 |
| Edit 7: Parametric echo recipe (E10) | DEFER | +3 | 437 |
| Edit 8: Character scale inventory (E14) | DEFER | 0 (mod) | 437 |
| Edit 9: Fix cycle memory (E-RETURN/E-FIX) | GO BEYOND | +4 | 441 |
| Edit 10: Boundary-grouped pauses (E-CONTRA) | GO BEYOND | 0 (mod) | 441 |
| **TOTAL** | | **+38 lines** | **441** |

**Final line count: 441 (within 450 cap, 9 lines remaining)**

### Guardrail-to-Playbook Ratio

**Before:** ~2.0:1 (58 constraint : 29 recipe)
**After:** ~1.7:1 (58 constraint : 35 recipe) -- Edits 1, 2, 7 add pure recipe content; Edits 3, 6, 9 add world-description; Edits 5, 8, 10 are modifications. Zero new constraints added (Edit 8's 5% budget cap is the only new constraint-adjacent content, and it is paired with CSS property names).

### By Type

| Type | Count | Lines | Edits |
|------|-------|-------|-------|
| BUG FIX | 0 | 0 | B8 N/A for this file |
| DO NOW | 2 | +20 | E4 (threshold table), E2 (boundary recipe) |
| DEFER | 5 | +14 | E1, E5, E6, E9, E10 |
| GO BEYOND | 2 | +4 | E-RETURN/E-FIX, E-CONTRA |
| Modifications | 3 | 0 | E6, E14, E-CONTRA |

---

## WHAT WAS NOT INCLUDED AND WHY

### B8: Fix 0.02em threshold
**Why excluded:** The brief already uses 0.025em correctly (lines 59, 288). B8 applies to CLAUDE.md files, not the conventions brief. Searched entire file for `0.02em` without trailing `5` -- zero matches.

### E3: Fix checkpoint contradiction resolution
**Why excluded from THIS file:** E3 targets SKILL.md (builder spawn prompt, lines 61-66), not conventions-brief.md. Edit 10 above addresses the brief-side of the same contradiction by restructuring the verification pauses.

### E7: Compositional reference card for mid-build
**Why excluded:** Master synthesis verdict: DON'T. Adds a new document to builder reading list. Report 07: MEDIUM regression risk. Contrarian: "more text = worse output."

### E8: Comprehension proof gate before building
**Why excluded:** Master synthesis verdict: DON'T. Adds mandatory deliverable, slows builder start. Contrarian: "rote exercise."

### E11: New gates (SC-17 scale coverage, SC-18 restraint)
**Why excluded:** Master synthesis verdict: DON'T. Report 08 exceeds own gate ceiling (22-25 gates). This is a gate-runner concern, not a brief concern.

### E12: New PA questions
**Why excluded:** Master synthesis verdict: DON'T. PA deployment already at 9 auditors with 48+8 questions.

### E13: Character scale budget cap as standalone gate
**Why excluded:** Master synthesis verdict: DON'T. SC-14 already prevents the failure mode. However, the 5% budget note was incorporated into Edit 8 as a brief-level awareness cue (not a gate).

### E15: Weaver compositional vocabulary
**Why excluded from THIS file:** Targets SKILL.md (weaver instructions), not conventions-brief.md.

### E16: Fix cycle recipe structure
**Why excluded from THIS file:** Targets SKILL.md (fix cycle template), not conventions-brief.md. Edit 9 above addresses the brief-side by adding a compositional memory habit for fix cycles.

### Coherence arc planning (from 13-scale-page Gap 1)
**Why excluded:** Report 13 proposes 15-20 lines on coherence arc planning. This exceeds the budget and overlaps with existing content at line 120 ("The coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels -- creating a narrative arc of visual intensity"). The existing text already describes the coherence arc concept in 2 sentences. Adding 15-20 lines would be redundant.

### Transition-to-coherence mapping table (from 13-scale-page Gap 5)
**Why excluded:** Report 13 proposes mapping SMOOTH->3ch, BRIDGE->4-5ch, BREATHING->5-6ch. This is a useful relationship but would add 8-10 lines. The budget is tight (9 lines remaining) and this information can be INFERRED from Section 7 (transition types with CSS values) + Section 4 (channel shift thresholds). The inference is within Opus capability.

### Material channel operationalization (from 13-scale-page Gap 3)
**Why excluded as separate edit:** Addressed within Edit 5 (modification of line 101) and Edit 1 (perception table row for Material). The combined effect gives Material a CSS-anchored definition and a perception threshold. A standalone section would cost 10-15 lines for diminishing returns.

### Navigation-specific enrichment (from 12-scale-navigation)
**Why excluded:** Report 12's own verdict: "LEAST enrichment-needy scale." Navigation is naturally at ceiling from the dark slab inversion. The brief already covers it adequately.

### Brief restructuring (from 02-stack-placement-design)
**Why excluded:** Master synthesis verdict and contrarian both agree: DO NOT restructure. The telescope-first ordering (governing principle before building blocks) is correct for builders. Report 04: "the current telescope-first order is correct for a world-description aimed at builders." Edit 3 (stack bridge) achieves the same goal with 4 lines instead of a full restructure.

---

## DEPENDENCY ORDERING

If applying incrementally:

1. **Edit 1 (threshold table)** and **Edit 2 (boundary recipe)** are independent and can be applied in any order. These are the DO NOW package.
2. **Edit 5 (channel CSS)** should precede Edit 1 so the table references updated channel definitions.
3. **Edit 3 (stack bridge)** should precede Edit 4 (DESIGNED/COMPOSED) -- the bridge names the architectural relationship that the naming convention labels.
4. **Edit 6 (component micro-coherence)** depends on nothing but is better after Edit 3 (the stack bridge contextualizes why micro-coherence matters at component scale).
5. **Edit 7 (parametric echo recipe)** depends on nothing.
6. **Edit 8 (character inventory)** depends on nothing.
7. **Edit 9 (fix cycle memory)** depends on nothing.
8. **Edit 10 (boundary-grouped pauses)** should be applied LAST because it restructures the verification pauses, and other edits that reference the PROCESS section should see the final state.

Recommended application order: 5 -> 1 -> 3 -> 2 -> 4 -> 6 -> 7 -> 8 -> 9 -> 10

---

*End of change manifest. 01-brief-changes.md complete.*
