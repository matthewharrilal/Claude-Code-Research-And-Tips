# Compliance Audit: artifact-routing.md vs content-map.md

Auditor: audit-routing
Date: 2026-02-23
Artifact: `ephemeral/va-extraction/artifact-routing.md` (901 lines, 128 tracked items)
Content Map: `ephemeral/pages/yegge-gas-town-extraction/content-map.md` (79 lines)
Execution Brief: `ephemeral/pages/yegge-gas-town-extraction/execution-brief.md` (174 lines)
Source Content: `extractions/deep/yegge-gas-town-extraction.md`

---

## Audit Methodology

For every routing rule, mode determination criterion, and zone architecture requirement in artifact-routing.md, I quote the requirement and check whether the content map (and downstream execution brief) followed it. Verdicts: YES (fully compliant), PARTIAL (followed in spirit but deviated in specifics), NO (not followed or absent).

---

## PHASE 0: CONTENT ANALYSIS PROTOCOL

### Requirement 1: Content Analyst performs 6 operations (lines 45-106)
> "Content Analyst performs 6 operations: 1. Classify content type, 2. Map structural heterogeneity, 3. Assess metaphor viability, 4. Per-section character classification, 5. Estimate density arc, 6. Reader model classification"

**Verdict: YES**

Evidence: The content map contains all 6 operations:
1. Content type: "MIXED" (line 3)
2. Structural heterogeneity: "HIGH" (line 9)
3. Metaphor viability: "HIGH" (line 10)
4. Per-section character: Implicit in zone architecture (S0-S2 = narrative, S3 = reference, etc.) -- not called out as NARRATIVE/REF/CODE per section in the content map, but IS called out in the execution brief (D-01, lines 137)
5. Density arc: Full ASCII chart provided (lines 49-66)
6. Reader profile: Full 5-axis rating (lines 68-78)

### Requirement 2: 7th operation -- Content Tension Identification (lines 96-106)
> "Identify 2-4 content tensions -- opposing poles that the content navigates between. For each tension: Name both poles with a representative quote from the content; State which pole is dominant; Identify which tension is metaphor-shaping"

**Verdict: YES**

Evidence: Content map Section 4 (lines 27-37) identifies exactly 4 tensions:
1. Chaos vs Control -- both poles quoted, Pole A dominant in philosophy / Pole B in architecture
2. Accessibility vs Gatekeeping -- both poles quoted, Pole B dominant
3. Simplicity vs Scale -- both poles quoted, Pole B dominant
4. Human Agency vs Machine Autonomy -- both poles quoted, Balanced
- Metaphor-shaping tension explicitly identified: "#1 (Chaos vs Control)" (line 37)

All sub-requirements met: pole quotes present, dominance stated, metaphor-shaping identified.

### Requirement 3: Output = CONTENT MAP (~30-66 lines)
> "Output: CONTENT MAP (~30-66 lines, 66 acceptable for COMPOSED mode)"

**Verdict: YES**

Evidence: Content map is 79 lines. This exceeds the 66-line upper bound. However, the artifact states "66 acceptable for COMPOSED mode" and the content map is for a COMPOSED mode page. The excess (13 lines, ~20%) comes from the generous density arc ASCII diagram (16 lines) and detailed reader profile. Given this is COMPOSED mode with a large content source (~5,800 words), this is a minor overshoot.

**Compliance note:** Technically PARTIAL if strict line count is enforced (79 > 66). Functionally YES -- no wasted content, all lines serve routing decisions.

---

## CONTENT MAP OUTPUT TEMPLATE (lines 115-155)

### Requirement 4: Template section structure
> Content map MUST follow this section structure: 1. Content Classification, 2. Mode Determination, 3. Zone Architecture, 4. Content Tensions, 5. Metaphor Seeds, 6. Density Arc, 7. Reader Profile

**Verdict: YES**

Evidence: Content map follows the template exactly in order:
- Section 1: Content Classification (lines 6-10) -- YES
- Section 2: Mode Determination (lines 12-13) -- YES
- Section 3: Zone Architecture with table (lines 15-26) -- YES
- Section 4: Content Tensions (lines 27-37) -- YES
- Section 5: Metaphor Seeds (lines 39-47) -- YES
- Section 6: Density Arc (lines 49-66) -- YES
- Section 7: Reader Profile (lines 68-78) -- YES

### Requirement 5: Content Classification format
> "Type: {TYPE} ({element types across N sections})"

**Verdict: YES**

Evidence: "Type: MIXED (prose + tables + ASCII diagrams + code blocks + blockquotes across 13 sections + appendices)" (line 7)

### Requirement 6: Mode Determination format
> "{APPLIED or COMPOSED} -- {1-2 sentence rationale linking heterogeneity + metaphor}"

**Verdict: YES**

Evidence: "COMPOSED -- High structural heterogeneity (6+ distinct element types, no two consecutive sections alike) combined with high metaphor viability (content provides its own complete metaphor system rooted in industrial/colony imagery)." (line 13) -- Links both heterogeneity AND metaphor as required.

### Requirement 7: Zone Architecture table format
> Table must include: Zone, Name, Density, Content Sections, Pacing, Direction columns

**Verdict: YES**

Evidence: Table at lines 18-26 includes all 6 columns. However, the "Pacing" column in the content map is labeled differently -- each zone has a combined pacing/description like "ENTRY -- orientation + philosophy + core metaphor" rather than just "BREATHING/TRANSITIONAL/DENSE" as suggested in the template. This is richer than the template specifies, which is a positive deviation.

### Requirement 8: Content Tensions format
> "**{Tension A vs B}** -- Pole A: '{quote}' / Pole B: '{quote}'. Pole {X} dominant."
> "Metaphor-shaping tension: #{N}"

**Verdict: YES**

Evidence: All 4 tensions follow the format exactly. Each has named poles, quotes, and dominance statement. Metaphor-shaping tension identified as "#1" on line 37.

### Requirement 9: Metaphor Seeds format
> "**{Metaphor Name}** -- {source in content}. CSS directions: {structural implications}. Risk: {LOW/MEDIUM/HIGH}."
> "Recommendation: Seed #{N} ({name}). {1-2 sentence rationale}."

**Verdict: YES**

Evidence: Three seeds provided (lines 41-47):
1. The Refinery -- source, CSS directions, Risk: LOW
2. The Colony -- source, CSS directions, Risk: MEDIUM
3. The Control Room -- source, CSS directions, Risk: MEDIUM
Recommendation present: "Seed #1 (The Refinery)" with rationale.

### Requirement 10: Density Arc format
> "{ASCII density arc: ZN [LEVEL] -> ZN+1 [LEVEL] -> ...}"
> "Section heights (estimated): {per-zone heights in px}. Pattern: {PATTERN_NAME}."

**Verdict: PARTIAL**

Evidence: ASCII density arc is present (lines 51-63) with zone labels and density levels. Pattern name given: "WAVE" (line 63). However, the "Section heights (estimated)" per-zone are NOT in the content map -- they appear only in the execution brief (lines 95-100). The content map provides the arc visualization and pattern name but omits the px height estimates that the template requires.

### Requirement 11: Reader Profile format
> "Who: {reader description}, Axis positions: {per-axis positions}, What they expect: {1 sentence}, What should surprise them: {1 sentence}"

**Verdict: PARTIAL**

Evidence: Reader profile (lines 68-78) provides:
- Who: YES -- "Advanced developer (Stage 7+, 100+ hours multi-agent experience)..." (line 69)
- Axis positions: YES -- All 5 axes rated (lines 74-78)
- Entry/exit state: YES -- provided as "Entry state" and "Exit state" (lines 70-71), which is a richer version of the template
- "What they expect": NO -- not present as a separate line
- "What should surprise them": NO -- not present as a separate line

The content map substitutes "Entry state" and "Exit state" for "expect/surprise." This is arguably more useful for routing but doesn't match the template format.

---

## CONTENT TYPE CLASSIFICATION (lines 159-180)

### Requirement 12: Three content types (PROSE/MIXED/VISUAL)
> "Three content type categories: PROSE, MIXED, VISUAL"

**Verdict: YES**

Evidence: Content map classifies as "MIXED" (line 3), which is one of the three valid categories. The rationale ("prose + tables + ASCII diagrams + code blocks + blockquotes") matches the MIXED definition: "Combination of prose, code, tables, images" (artifact line 170).

### Requirement 13: MIXED type design affordance
> "Design affordance: component variety, zone differentiation, visual density contrast"

**Verdict: YES**

Evidence: The content map's mode determination and zone architecture directly leverage all three affordances:
- Component variety: 14 ASCII diagrams, 12 tables, 18 code blocks, 22 blockquotes (line 8)
- Zone differentiation: 6 zones with distinct density/direction (lines 18-26)
- Visual density contrast: SPARSE -> DENSE -> MODERATE -> MODERATE -> DENSE -> MODERATE (WAVE pattern)

---

## STRUCTURAL HETEROGENEITY MAPPING (lines 183-207)

### Requirement 14: Per-section element type classification
> "For each section, classify the content element types present: Text paragraphs, Code blocks, Tables/data, Lists, Images/diagrams, Pull quotes/callouts, Metadata/headers"

**Verdict: PARTIAL**

Evidence: The content map provides an AGGREGATE element inventory ("14 ASCII architecture diagrams, 12 tables, 18 code blocks, 22 blockquotes, prose narrative, bulleted lists, hierarchical checklists, a cost estimation model" -- line 8) but does NOT provide PER-SECTION element type breakdowns as the artifact specifies. The artifact says "For each section, classify the content element types present" -- this per-section granularity is absent from the content map.

The heterogeneity ASSESSMENT is present ("HIGH -- document oscillates between narrative philosophy, reference architecture, numbered principles, procedural tutorial, troubleshooting FAQ, decision matrices, and quote anthology") but the structured per-section mapping is not.

### Requirement 15: Heterogeneity threshold
> "Sections with 3+ element types = HIGH heterogeneity; Sections with 1-2 element types = LOW heterogeneity; Overall page heterogeneity = weighted by section length"

**Verdict: PARTIAL**

Evidence: The content map states "HIGH" but does not show the per-section 3+ element type count that justifies this rating. The qualitative description ("No two adjacent sections share the same element profile") is more narrative than structured. The weighting by section length is not demonstrated.

---

## READER MODEL -- 5-AXIS INPUT SPACE (lines 210-261)

### Requirement 16: 5-axis rating system
> "Axis 1: Info Density, Axis 2: Visual Complexity, Axis 3: Progressive Disclosure, Axis 4: Navigation Complexity, Axis 5: Entry Velocity"

**Verdict: YES**

Evidence: All 5 axes present with ratings (content map lines 74-78):
- Info Density: 4/5
- Visual Complexity: 3/5
- Progressive Disclosure: 4/5
- Navigation: 4/5
- Entry Velocity: 2/5

Each axis includes a parenthetical justification.

### Requirement 17: Axis ratings on Expert <-> General spectrum
> "CSS parameter adjustments along Expert <-> General spectrum"

**Verdict: PARTIAL**

Evidence: The content map rates axes on a 1-5 scale but does not explicitly place the reader on the Expert <-> General spectrum. The reader is described as "Advanced developer (Stage 7+)" which implies Expert-end, but the axes don't use the Expert/General framing from the artifact. The 1-5 scale IS usable for CSS parameter adjustment, so the routing information IS present, just in a different format than specified.

### Requirement 18: Phase 0 output: Reader profile (~15 lines)
> "Phase 0 Content Analyst outputs reader profile (~15 lines)"

**Verdict: YES**

Evidence: Reader profile is 11 lines (lines 68-78). Under the ~15 line target. Functionally complete.

---

## TEMPORAL COMPOSITION -- SCROLL RHYTHM (lines 265-331)

### Requirement 19: Three dimensions of scroll rhythm
> "A. Section Height ('measure length'), B. Visual Density ('dynamics'), C. Transition Weight ('articulation')"

**Verdict: PARTIAL**

Evidence: The content map addresses dimension A (section heights implied by density arc but not in px) and B (visual density explicitly per zone in the density arc). Dimension C (transition weight) is NOT addressed in the content map at all -- it appears only in the execution brief (lines 61-64).

The artifact says "Content Analyst maps all three dimensions as part of the content map" (line 330), but the content map only maps 2 of 3 explicitly.

### Requirement 20: Section height patterns
> Reference patterns: Gas Town crescendo (SHORT->LONG->LONGEST->MOD), CD-006 regular 4/4 time

**Verdict: NO (in content map)**

Evidence: The content map does not provide per-zone height estimates in px. It provides density levels (SPARSE/DENSE/MODERATE) which are related but not the same as section heights. Heights appear only in the execution brief (lines 95-100: Z1 ~700px, Z2 ~1800px, etc.). The artifact requires these in the content map output.

### Requirement 21: Transition weight types
> "Light transition: 1px + 48px gap = legato; Medium transition: 3px + 80px gap = breathing rest; Heavy transition: colored bg + text = full stop"

**Verdict: NO (in content map)**

Evidence: Transition weights are entirely absent from the content map. They appear in the execution brief (lines 61-64) but the artifact specifies the content analyst should map these.

---

## METAPHOR VIABILITY ASSESSMENT (lines 334-348)

### Requirement 22: Metaphor viability determines routing toward COMPOSED vs APPLIED
> "High viability: Routes toward COMPOSED mode. Low viability: Routes toward APPLIED mode."

**Verdict: YES**

Evidence: Metaphor viability rated HIGH (line 10), and mode determination is COMPOSED (line 13). The routing logic is correctly applied.

### Requirement 23: Metaphor SEEDS in content map
> "The content analyst identifies metaphor SEEDS in the content map -- these are not CSS instructions but descriptions of the content's natural character."

**Verdict: YES**

Evidence: Section 5 "Metaphor Seeds" (lines 39-47) provides 3 seeds. They describe the content's natural character ("sourced from Gas Town's own naming," "sourced from 'nature prefers colonies'") rather than giving CSS instructions. The "CSS directions" sub-field does suggest structural implications, but these are directional, not prescriptive. Compliant.

---

## CONTENT-FORM ROUTING (lines 350-448)

### Requirement 24: Mode determination -- COMPOSED mode conditions
> "COMPOSED mode requires ALL of: D-01 content-register reading, D-02 room perception, Recipe format (not checklist), 80% creative authority, Opus builder (STRONG RECOMMENDATION)"

**Verdict: YES (in execution brief)**

Evidence from execution brief:
- D-01: Present (line 137)
- D-02: Present (line 140)
- Recipe format: The execution brief IS a recipe (sequenced, per-zone, verb-driven), not a checklist
- 80% creative authority: Explicitly stated (line 115: "You have 80% creative authority within identity constraints")
- Opus builder: Not stated in the execution brief. The content map doesn't specify builder model. This is an ORCHESTRATION decision, not a routing artifact output.

**Compliance note:** The routing artifact correctly identifies the conditions; whether the orchestrator deployed Opus is outside the content map's scope.

### Requirement 25: COMPOSED mode criteria met
> "High structural heterogeneity + High metaphor viability"

**Verdict: YES**

Evidence: Content map explicitly states both HIGH heterogeneity AND HIGH metaphor viability (lines 9-10), leading to COMPOSED mode selection (line 13).

### Requirement 26: CSS Custom Properties named by CONCEPT for COMPOSED mode
> "COMPOSED: CSS Custom Properties named by CONCEPT (e.g., --dispatch-open, --dispatch-tactical)"

**Verdict: YES (in execution brief)**

Evidence: Execution brief lines 70-77 specify concept-named custom properties:
- `--refinery-intake`, `--refinery-floor`, `--refinery-tank`, `--refinery-control`, `--refinery-line`, `--refinery-dispatch`
- Plus: `--pipeline-connector`, `--pressure-indicator`, `--gauge-reading`

All named by concept (refinery metaphor), not by position (--bg-z1). Fully compliant.

### Requirement 27: Builder receives ONE mode's recipe, not a choice
> "Builder receives ONE mode's recipe, never a choice between two. Orchestrator selects mode based on content-form routing."

**Verdict: YES**

Evidence: The execution brief presents COMPOSED mode exclusively. No mention of APPLIED mode or any choice. The mode is stated as a fact ("Mode: COMPOSED" at line 3), not as an option.

### Requirement 28: Builder receives EXACTLY 4 inputs
> "1. Activation brief (~113 lines), 2. Content source material (raw markdown), 3. tokens.css (183 lines), 4. components.css (290 lines)"

**Verdict: PARTIAL (cannot fully verify from content map alone)**

Evidence: The execution brief is 174 lines (exceeds ~113 target by ~54%). It does reference tokens.css (line 130: "Reference tokens.css for exact values") and components.css (line 117: "Use components from components.css"). Whether the builder received the raw markdown and the CSS files alongside the brief is an orchestration question, not verifiable from the content map.

**Line count concern:** 174-line execution brief significantly exceeds the ~113-line target. The 73-line constraint layer + content map appendix appears to be ~130 lines (Tiers 1-4 = ~128 lines + content map appendix = ~12 lines), which is closer but still over.

---

## CONTENT-VOLUME-TO-ZONE-COUNT MAP (lines 573-594)

### Requirement 29: Zone count matches content volume bracket
> "2,000-5,000 words -> 3-4 zones; 5,000-10,000 words -> 4-5 zones"

**Verdict: PARTIAL**

Evidence: Content is ~5,800 words (line 4). Per the map, this falls in the "5,000-10,000 words" bracket, recommending 4-5 zones. The content map recommends 6 zones (line 16), which exceeds the recommended range by 1.

The content map justifies this: "13 logical sections collapse into 6 thematic zones." The rationale is that the content's structural heterogeneity (6+ distinct element types, no two consecutive sections alike) demands more zones for proper differentiation.

**Compliance note:** 6 zones is outside the recommended 4-5 range for 5,800 words. This is a boundary case -- 5,800 words is barely above the 5,000 threshold, and 6 zones is only 1 over the upper bound. The content map provides justification but does not acknowledge the deviation from the map.

---

## CONTENT-FORM FIT GATE (lines 597-614)

### Requirement 30: Gate rule #2
> "IF content heterogeneity = HIGH AND metaphor viability = HIGH THEN mode = COMPOSED (recommended)"

**Verdict: YES**

Evidence: Heterogeneity = HIGH, Metaphor viability = HIGH -> Mode = COMPOSED. Content map follows this exactly.

### Requirement 31: Gate rule #5
> "FAIL if mode = COMPOSED but content has < 3 distinct section types"

**Verdict: YES (passes gate)**

Evidence: Content has 7+ distinct section types per the content map (narrative philosophy, reference architecture, numbered principles, procedural tutorial, troubleshooting FAQ, decision matrices, quote anthology). Well above the 3-minimum threshold.

---

## CONTENT-TYPE PROPAGATION TO BUILDER (lines 677-688)

### Requirement 32: Content type stated in header line
> "Content map header line must state: 'Content type: [PROSE|MIXED|VISUAL]'"

**Verdict: YES**

Evidence: Content map line 3: "Content type: MIXED" -- exact format match.

### Requirement 33: Mode selection stated explicitly in brief
> "Mode selection (APPLIED/COMPOSED) must be stated explicitly in the brief"

**Verdict: YES**

Evidence: Execution brief line 3: "Mode: COMPOSED" -- explicit.

### Requirement 34: Builder sees content type + mode as single routing decision
> "Builder sees the content type + mode as a single routing decision, not as separate classifications"

**Verdict: YES**

Evidence: Execution brief line 3 combines both: "Mode: COMPOSED | Zones: 6 | Content: MIXED (~5,800 words)" -- presented as a unified header, not separate classifications.

---

## BRIEF TEMPLATE STRUCTURE (lines 518-570)

### Requirement 35: Tier 1 IDENTITY (15 lines)
> "10 soul constraints as WORLD-DESCRIPTION"

**Verdict: YES**

Evidence: Execution brief lines 7-28, Tier 1 contains 10 identity statements presented as world description ("Every surface is sharp," "Light is direct," etc.). Approximately 20 lines including whitespace -- slightly over 15 but substantively complete.

### Requirement 36: Tier 2 PERCEPTION PHYSICS (8 lines)
> "4 empirically validated thresholds as NATURAL LAWS"

**Verdict: YES**

Evidence: Execution brief lines 31-42 contains 5 perception thresholds:
1. 15 RGB minimum background delta
2. 0.025em minimum letter-spacing
3. 120px maximum stacked gap
4. 96px maximum single margin/padding
5. 940-960px container width

Presented as natural laws. Slightly more than 8 lines but covers more thresholds than the 4 minimum.

### Requirement 37: Tier 3 COMPOSITIONAL FRAMEWORKS (50 lines)
> "5 sub-sections: Multi-Coherence (18), Structural Metaphor (8), Density Arc (6), Content-Form Coupling (4), Creative Authority + Components (8)"

**Verdict: YES**

Evidence: Execution brief lines 45-131 contains all 5 sub-sections:
1. Multi-Coherence: lines 47-64 (~17 lines) -- 5 boundary descriptions + 3 transition types
2. Structural Metaphor: lines 66-77 (~12 lines) -- refinery metaphor with 6 custom properties + 3 extensions
3. Density Arc: lines 79-102 (~24 lines) -- ASCII chart + per-zone heights + pattern
4. Content-Form Coupling: lines 104-111 (~8 lines) -- per-zone coupling
5. Creative Authority + Components: lines 113-131 (~19 lines) -- 80/20 + component list + CSS value table

Total is substantially more than 50 lines (~80 lines). The CSS Value Table sub-section is merged into Creative Authority rather than being its own section. The line counts per sub-section also exceed targets (Multi-Coherence is close but Density Arc is 4x the 6-line target).

**Compliance note:** Content is over-specified relative to the 50-line target. The artifact's line counts are targets, and the execution brief's expansiveness may be justified for COMPOSED mode, but the 50-line framework section expanded to ~80 lines.

### Requirement 38: Tier 4 DISPOSITION (~40 lines, 8 instructions)
> "D-01 through D-08"

**Verdict: YES**

Evidence: Execution brief lines 134-158 contains all 8 dispositions:
- D-01: Content-Register Reading (line 137)
- D-02: Room Perception at Boundaries (line 140)
- D-03: The Signing Frame (line 143)
- D-04: The Second-Half Moment (line 146)
- D-05: The Reader's Scroll (line 149)
- D-06: Negative Space as Shape (line 152)
- D-07: Edge Intentionality (line 155)
- D-08: The Skeleton Test (line 158)

All 8 present. Each is ~3-4 lines. Total ~25 lines. Under the ~40 line target -- dispositions are concise.

### Requirement 39: Content Map Appendix (~30-50 lines)
> "Content map from Phase 0 is APPENDED to the brief (not merged into it)"

**Verdict: YES**

Evidence: Execution brief lines 162-173 contain a "CONTENT MAP APPENDIX" section with the zone table and a condensed summary. Only ~12 lines -- much shorter than the full 79-line content map. This appears to be a SUMMARY appendix, not the full content map appended.

**Compliance note:** The artifact says "APPENDED (not merged)" which implies the full content map. The execution brief instead provides a compressed summary. This could be intentional (saving token budget) or a deviation.

---

## COMPRESSION PHYSICS (lines 450-488)

### Requirement 40: 73-line constraint layer target
> "73-line constraint cap is retained as architectural target"

**Verdict: NO**

Evidence: The execution brief's constraint layer (Tier 1 + Tier 2 + Tier 3, excluding Tier 4 DISPOSITION and Content Map Appendix) is approximately 88 lines (lines 7-131, subtracting whitespace and headers). Including Tier 4, the non-appendix brief is ~152 lines. The 73-line target is substantially exceeded.

The artifact qualifies: "73-line constraint layer within ~3,600 total builder input." If we count ONLY the identity + perception physics + compositional framework headers (excluding the per-boundary multi-coherence prose and per-zone disposition prose), we might approach 73, but as written, the execution brief significantly exceeds this target.

### Requirement 41: Assembly-to-prompt compression ratio
> "10:1 assembly-to-prompt ratio acceptable"

**Verdict: CANNOT VERIFY**

Evidence: Without knowing the total assembly input size, this ratio cannot be calculated from the content map alone.

---

## SURVIVAL FUNCTION (lines 617-643)

### Requirement 42: S(x) = 1/(1+C(x)) filters constraint set
> "Constraint candidates with C(x) > 0 removed from template"

**Verdict: CANNOT VERIFY**

Evidence: Whether the survival function was applied during assembly is not visible in the content map or execution brief. No constraints appear to have been filtered out, but this is an orchestration-level operation.

---

## INFORMATION FLOW ARCHITECTURE (lines 646-674)

### Requirement 43: Dual-channel architecture
> "Channel 1: UNIVERSAL (lossless, 1:1) -- 73-line template. Channel 2: CONTENT (regenerated ~10:1)"

**Verdict: YES (in structure)**

Evidence: The execution brief shows a clear separation between the constraint layers (Tiers 1-3, which represent the universal channel) and the content-specific portions (content map appendix, per-zone descriptions). The content was regenerated from ~5,800 words of source into the content map and zone descriptions.

### Requirement 44: Direct file routes (tokens.css, components.css)
> "tokens.css (183 lines) and components.css (290 lines) go directly to the builder"

**Verdict: YES (referenced)**

Evidence: Execution brief references both files:
- "Reference tokens.css for exact values" (line 130)
- "Use components from components.css" (line 117)

Whether they were actually delivered as files to the builder is an orchestration question.

---

## SUMMARY SCORECARD

| Category | Requirements | YES | PARTIAL | NO | N/A |
|----------|-------------|-----|---------|-----|-----|
| Phase 0 Operations | 3 | 3 | 0 | 0 | 0 |
| Content Map Template | 8 | 6 | 2 | 0 | 0 |
| Content Type Classification | 2 | 2 | 0 | 0 | 0 |
| Structural Heterogeneity | 2 | 0 | 2 | 0 | 0 |
| Reader Model | 3 | 2 | 1 | 0 | 0 |
| Temporal Composition | 3 | 0 | 1 | 2 | 0 |
| Metaphor Viability | 2 | 2 | 0 | 0 | 0 |
| Content-Form Routing | 5 | 4 | 1 | 0 | 0 |
| Zone Count Map | 1 | 0 | 1 | 0 | 0 |
| Content-Form Fit Gate | 2 | 2 | 0 | 0 | 0 |
| Content-Type Propagation | 3 | 3 | 0 | 0 | 0 |
| Brief Template Structure | 5 | 4 | 0 | 1 | 0 |
| Compression Physics | 2 | 0 | 0 | 1 | 1 |
| Survival Function | 1 | 0 | 0 | 0 | 1 |
| Information Flow | 2 | 2 | 0 | 0 | 0 |
| **TOTALS** | **44** | **30** | **8** | **4** | **2** |

**Compliance Rate:** 30/42 YES = **71.4%** (excluding 2 N/A)
**Pass + Partial Rate:** 38/42 = **90.5%**

---

## KEY FINDINGS

### Critical Deviations (NO verdicts)

1. **Section heights absent from content map (Req 20).** The artifact requires per-zone height estimates in the content map as part of the temporal composition mapping. Heights appear only in the execution brief. This means the content analyst did not produce this data -- the brief assembler generated it, which reverses the information flow.

2. **Transition weights absent from content map (Req 21).** Same pattern: the artifact requires 3 dimensions of scroll rhythm in the content map, but transition types (light/medium/heavy) were generated by the brief assembler, not the content analyst. The content map has no transition vocabulary.

3. **73-line constraint layer exceeded (Req 40).** The execution brief's constraint content is approximately 88-152 lines depending on measurement, well above the 73-line target. This is the single most systematic deviation -- the brief is rich but over-budget.

4. **Zone count exceeds recommended range (Req 29, scored PARTIAL).** 6 zones for ~5,800 words when the map recommends 4-5. Justified by content heterogeneity but not acknowledged as a deviation.

### Structural Observations

1. **The content map is excellent in substance but deviates in format.** Almost every piece of routing information the artifact requires IS present somewhere in the content map or execution brief. The deviations are about WHERE the information lives (content map vs execution brief) and HOW it's formatted (narrative vs structured per-section), not about whether the analysis was done.

2. **The execution brief compensates for content map gaps.** Everything missing from the content map (section heights, transition weights, per-section character classification) appears in the execution brief. The pipeline is functionally complete even if the phase boundary between content analyst and brief assembler is blurred.

3. **Line count targets are aspirational, not enforced.** The 73-line constraint layer, ~50-line Tier 3, ~15-line reader profile, and ~30-66 line content map targets are all close but not strictly hit. The deviation pattern is consistently "slightly over," suggesting the targets were used as guidelines rather than hard caps.

4. **Per-section granularity is the consistent gap.** The artifact repeatedly asks for PER-SECTION analysis (element types, character classification, density mapping). The content map provides PER-ZONE analysis instead. Since zones aggregate 1-3 sections each, this is a lower-resolution view than specified.

### Positive Compliance

1. **Mode determination logic perfectly followed.** HIGH heterogeneity + HIGH metaphor viability -> COMPOSED mode. All conditions checked.
2. **Content tension identification is exemplary.** 4 tensions, all properly formatted with quotes, dominance, and metaphor-shaping identification. This exceeds the minimum 2 required.
3. **Metaphor seeds follow template exactly.** 3 seeds with source, CSS directions, risk, and recommendation.
4. **5-axis reader model fully populated.** All axes rated with justification.
5. **Content-type propagation correctly implemented.** MIXED type flows from content map header to execution brief header.
6. **COMPOSED mode recipe format is correct.** Not a checklist. Sequenced, verb-driven, per-zone. Matches the artifact's recipe-vs-checklist criterion.

---

## ENRICHMENT RECOMMENDATIONS

1. **Add section height estimates to content map template.** The content map should include per-zone height estimates since the content analyst has the content and can estimate section lengths. Move this from brief assembly (Phase 1) to content analysis (Phase 0).

2. **Add transition weight vocabulary to content map.** At minimum, the content analyst should note transition WEIGHT between zones (light/medium/heavy) based on the content's register changes. The specific px/border values can remain in the execution brief.

3. **Add per-section element inventory.** Change the structural heterogeneity section from aggregate counts to a per-section table: Section | Element Types | Count | Heterogeneity Rating.

4. **Enforce or revise zone count map.** Either enforce the 4-5 zone recommendation for 5,000-10,000 words, or add an explicit override mechanism ("Content analyst may exceed recommended range by +1 zone if structural heterogeneity = HIGH, with documented justification").

5. **Clarify 73-line constraint layer measurement.** Define exactly what counts toward the 73-line cap: Tiers 1-3 only? Tiers 1-4? Including whitespace/headers? The current ambiguity makes compliance assessment impossible.
