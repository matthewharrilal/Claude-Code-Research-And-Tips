# Phase 0 Analysis: Content Analysis — Gas Town VA Pipeline Execution

**Date:** 2026-02-23
**Analyst:** Phase-0-Analyst (Opus)
**Pipeline Run:** Gas Town VA Pipeline (first Pipeline v3 execution from extracted artifacts)
**Final Score:** 175/200 across 9 auditors, PA-05: 3/4 COMPOSED
**Subject:** `_content-map.md` (66 lines) produced from `extractions/deep/yegge-gas-town-extraction.md` (1,324 lines)

---

## 1. Was the COMPOSED Mode Decision Correct?

**Verdict: YES -- COMPOSED is the only defensible mode choice.**

The content map classifies heterogeneity as HIGH (7+ element types across 13 sections) and metaphor viability as HIGH (factory/colony metaphor is native to the content). Per artifact-routing.md "Content-Form Routing" section:

> "IF content heterogeneity = HIGH AND metaphor viability = HIGH THEN mode = COMPOSED (recommended)"

This is the textbook case. The source markdown contains:

| Element Type | Count | Examples (line refs in extraction) |
|---|---|---|
| Prose narrative | 13+ sections | L80-120 (Who is Yegge), L567-632 (Principles) |
| ASCII diagrams | 4 major | L131-145 (ant vs colony), L184-219 (role hierarchy), L400-427 (comm flow), L1009-1042 (decision matrix) |
| Tables | 6+ | L86-91 (career), L150-157 (traditional vs Gas Town), L537-543 (6 waves), L549-558 (8 stages), L1098-1107 (Ralph comparison), L1116-1124 (CC Mirror) |
| Code blocks | 12+ | bash commands for every role (L236-239, L258-261, etc.), installation (L651-660), startup script (L724-768) |
| Pull quotes | 10+ | L112, L127-128, L161-162, L394, L435, etc. |
| Ordered/unordered lists | 8+ | L114-119 (vibe coding), L229-233 (Mayor responsibilities), etc. |
| Metadata/headers | 14 H2s, 20+ H3s, 8+ H4s | Full TOC at L14-28 |

With 7+ distinct element types, this is textbook HIGH heterogeneity. And the "factory" metaphor is not imposed -- it is the content's own language (the article literally describes itself as a factory). This eliminates the alternative:

**Could APPLIED have been valid?** No. APPLIED mode uses positional CSS naming (`--bg-z1`, `--bg-z2`) and treats callouts identically across zones. This content has native conceptual zones (Town Level / Rig Level / Human Level) that demand concept-based naming. Forcing APPLIED would waste the content's richest affordance. The content-form fit gate (artifact-routing.md line ~550-554) would pass COMPOSED and would FAIL if APPLIED were forced on content with 7+ section types and a structural metaphor.

**Edge consideration:** One could argue for a "COMPOSED-LITE" approach where the factory metaphor is acknowledged but not deeply structural (e.g., just zone naming, not CSS property semantics). The content map does not distinguish between shallow metaphor usage (naming only) and deep metaphor usage (CSS behavior deriving from metaphor logic). This is a gap -- see Recommendation #4.

---

## 2. Metaphor Identification Quality

### The Three Candidates

The content map identifies three metaphor seeds:

1. **Industrial Factory / Refinery** (RECOMMENDED, Risk: LOW)
2. **Ant Colony / Emergence** (Risk: MEDIUM)
3. **Post-Apocalyptic Settlement** (Risk: MEDIUM)

**Assessment of #1 (Factory):** This is the correct choice and well-justified. The content literally uses factory language throughout: "rigs," "refineries," "polecats," "crew," "production lines." The content analyst correctly notes that the Town/Rig/Worker hierarchy maps to zone nesting and that the refinery metaphor implies progressive processing (raw ideas -> decomposed tasks -> finished code).

**Strength of justification (line 41-47 of content map):**
- CSS direction provided: "zone backgrounds graduate from raw/exposed (sparse opening) to industrial density (role architecture)"
- Specific CSS property hint: "border-weight gradient 4px->1px as content moves from manifesto to specification"
- Structural mapping: Town Level -> Rig Level -> Human Level maps to page architecture

This is good but not great. The CSS directions are suggestive rather than prescriptive, which is appropriate for Phase 0 (describe what the content IS, not what the design SHOULD BE). However, the content map crosses the IS/SHOULD boundary in one place: "border-weight gradient 4px->1px" is a design recommendation, not a content observation. This should have been "the content's register shifts from philosophical proclamation to technical specification, implying a shift from heavy emphasis to fine detail."

### Were Alternative Metaphors Viable?

**Seed #2 (Ant Colony):** Correctly identified as MEDIUM risk. The colony metaphor is stated in the content ("nature prefers colonies") but it is an argument, not a structural organizing principle. The content does not organize itself around colony behavior (emergence from simple rules). It organizes around factory hierarchy (Mayor -> Refinery -> Polecat -> Crew). Colony would work for a page about emergent AI behavior but would fight against this content's explicit hierarchy. REJECTED correctly.

**Seed #3 (Post-Apocalyptic Settlement):** This is more interesting than the content map gives it credit for. The Mad Max naming convention (Gas Town, Mayor, Polecats, Dogs) is not just thematic decoration -- it carries emotional tone: survival-focused, resourceful, rough, pragmatic. A post-apocalyptic visual treatment (rough textures, high-contrast borders, utilitarian typography, "found object" component aesthetic) would have been thematically coherent AND visually distinctive.

However, the content map correctly flags the risk: "evocative but could overwhelm content." Technical documentation needs to remain readable. Post-apocalyptic aesthetics tend toward dark modes, distressed textures, and high contrast -- all of which fight the design system's warm cream palette and sharp-but-clean aesthetic. The SOUL CONSTRAINTS (warm palette, no decorative elements, clean borders) make this metaphor architecturally incompatible even if thematically interesting.

**Missing candidate: "Assembly Line / Progressive Refinement"** -- a variant of #1 that emphasizes the PROCESS more than the PLACE. The content describes a pipeline: raw idea -> decomposition -> worker assignment -> quality check -> output. This could have suggested a page structure where each zone visually processes the reader through stages, with increasing refinement/precision as you scroll. This is a subtle distinction from "factory as building" (static) vs "factory as process" (temporal). The content map hints at this with "progressive processing" but does not develop it as a distinct metaphor seed. This would have strengthened the temporal composition dimension.

### Metaphor-to-CSS Translation Quality

The content map's CSS directions for the factory metaphor are:

- "zone backgrounds graduate from raw/exposed (sparse opening) to industrial density (role architecture)" -- GOOD: describes a visual arc
- "border-weight gradient 4px->1px as content moves from manifesto to specification" -- CROSSES IS/SHOULD BOUNDARY but directionally correct
- No mention of typography as a metaphor carrier (e.g., heavier/rougher type in factory zones, cleaner/lighter in output zones)
- No mention of component density as metaphor carrier (e.g., simple in intake, complex on production floor, streamlined at output)
- No mention of negative space behavior as metaphor carrier (e.g., loose/open at intake, compressed on floor, released at output)

**Gap: The factory metaphor is described but not decomposed into per-channel CSS implications.** The brief assembler (Phase 1) had to reconstruct this mapping from the metaphor seed alone. Looking at the execution brief (lines 65-71), we can see the brief assembler DID succeed in decomposing the metaphor into three structural levels and adding concept-based CSS naming (`--factory-intake`, `--factory-floor`, `--factory-output`). This means the content map provided ENOUGH for a capable brief assembler to work with, but left reconstruction work on the table that Phase 0 could have pre-computed.

---

## 3. Zone Architecture Quality

### The 6-Zone Division

| Zone | Content Map Name | Content Sections Mapped | Lines in Source |
|---|---|---|---|
| Z1 | The Manifesto | You Are Here + Who is Yegge + Core Insight quotes | L32-120 (~88 lines) |
| Z2 | The Factory | Gas Town Mental Model + Factory Metaphor + Idea Compiler | L123-177 (~54 lines) |
| Z3 | The Hierarchy | 8 Roles Architecture (all deep dives + comm flow) | L179-427 (~248 lines) |
| Z4 | The Memory | Beads system + Memory Model + Git-as-database | L431-529 (~98 lines) |
| Z5 | The Principles + Waves | 6 Waves + Core Principles (GUPP, Zero Framework, etc.) | L532-634 (~102 lines) |
| Z6 | The Cookbook | Implementation + Troubleshooting + When to Use + Comparisons | L636-1310 (~674 lines) |

**Zone count validation:** The content is ~8,500 words. Per artifact-routing.md "Content-Volume-to-Zone-Count Map":
- 5,000-10,000 words -> 4-5 zones recommended
- But 10,000-20,000 -> 5-7 zones

At 8,500 words, 6 zones is at the high end of the 4-5 bracket but within the 5-7 bracket if you round up. The content map recommends 5-7 zones (line 19: "content is 8,500 words, fits 5,000-10,000 bracket. Recommend 6 zones"). This is defensible.

### Zone Balance Issues

The most significant structural problem is **Z3 and Z6 size asymmetry:**

- Z3 (The Hierarchy): 248 source lines -> estimated 2,400px height. This is the LONGEST zone by far.
- Z6 (The Cookbook): 674 source lines -> estimated 1,800px height. This contains THE MOST content by line count but is estimated shorter.

**Z6 is a super-zone.** It contains 4 distinct major sections:
1. Implementation Guide (L636-798) -- installation, rig setup, tmux, daily workflow
2. Checkpoints and Verification (L801-841) -- health checks
3. Troubleshooting (L844-981) -- 6 failure modes with recovery
4. When to Use Gas Town (L985-1042) + Comparisons (L1094-1168) + Sources (L1173-1218) + Quick Reference (L1226-1310)

That is 4-5 sub-sections with distinct characters (tutorial, reference, troubleshooting, decision guide, bibliography). A 5-zone alternative could have merged Z4+Z5 into one zone ("The System" -- both Beads and Principles are conceptual frameworks) and split Z6 into two zones ("The Workshop" for implementation/troubleshooting and "The Atlas" for comparisons/sources/reference). This would have:
- Reduced the monster Z6 from 674 to ~400+274 lines
- Created a cleaner DENSE->MODERATE->SPARSE exit ramp instead of DENSE->SPARSE
- Given the comparison tables their own visual treatment

**However:** The current 6-zone scheme has one clear advantage -- it maps cleanly to the factory metaphor's three levels (Town/Rig/Human), with two zones per level. A 7-zone scheme would break this 2-2-2 symmetry and the metaphor mapping.

### Zone Naming Quality

The zone names are evocative and content-derived:
- "The Manifesto" (Z1) -- correctly identifies the opening as philosophical proclamation
- "The Factory" (Z2) -- names the core mental model
- "The Hierarchy" (Z3) -- identifies the structural core
- "The Memory" (Z4) -- names the Beads system by its function
- "The Principles + Waves" (Z5) -- compound name suggests the content analyst was unsure how to unify this zone's two distinct topics
- "The Cookbook" (Z6) -- familiar metaphor for implementation guides

**Z5 naming weakness:** "The Principles + Waves" is the weakest name because it is a conjunction of two distinct topics rather than a unified concept. The "6 Waves of AI" (a historical framing) and "Core Principles" (GUPP, Zero Framework, Cattle not Pets) share the theme of "WHY this architecture exists" -- a name like "The Philosophy" or "The Logic" would unify them. This matters because zone names propagate into CSS custom property naming and shape the builder's conceptual model.

### Missing From Zone Architecture

1. **Per-section character classification (NARRATIVE/REF/CODE)** is present in the zone table's "Content Sections" column but not spelled out with the required vocabulary. The artifact-routing.md protocol (line 69-75) specifies that each section should be classified as NARRATIVE, REF, or CODE. The content map uses different terminology: "prose," "ASCII diagrams," "tables," "code blocks." These are element types, not section characters. The brief assembler had to reconstruct the per-section character from the zone table (visible in execution brief lines 83-88 as "Z1 (manifesto): NARRATIVE" etc.).

2. **Transition weight suggestions between zones** are absent. The content map describes density arc but not articulation (how boundaries feel). Artifact-routing.md "Temporal Composition -- Scroll Rhythm" section specifies three dimensions: section height, visual density, AND transition weight. The content map addresses height (line 58) and density (line 52-53) but not transition weight. Given that prior Gas Town builds suffered from "uniform dividers" (artifact-routing.md line 271-272: "Gas Town uses 1 (uniform dividers) <- TEMPORAL MONOTONY"), this is a significant omission.

---

## 4. Content Tensions Analysis

The content map identifies 4 tensions (lines 30-37):

1. **Chaos vs Control** -- Pole A dominant
2. **Individual vs Colony** -- Pole B dominant (the central argument)
3. **Programmer vs Product Manager** -- Pole B dominant
4. **Accessibility vs Gatekeeping** -- Both active

**Quality of tension identification:** This is genuinely strong work. The tensions are content-derived, correctly polarized, and the dominant poles are correctly identified. The designation of #2 as "metaphor-shaping" is precisely right -- the ant-to-factory transformation IS the structural spine.

**Missing tension:**

5. **Maturity vs Ambition** -- The content oscillates between "this is 3 weeks old, smuggled 400 miles upriver" (L1070) and "12,000 LOC/day per developer" (L622). The system is simultaneously presented as rough/experimental AND as the future of software development. This tension could have informed a visual treatment where early zones (Z1-Z2) convey ambition/vision while later zones (Z5-Z6) ground in pragmatic reality.

6. **Open vs Closed** -- Gas Town is open-source on GitHub, but the content explicitly warns people away ("Stage 7+ or get your face ripped off"). This is the Accessibility vs Gatekeeping tension extended, but the content map could have explored how this creates a dual reader: the aspirational reader (who wants to understand the architecture) and the practitioner reader (who will actually install it). The reader profile conflates these into a single "Stage 6-7" expert.

**How tensions propagate:** The execution brief (lines 143-150) reproduces the tensions nearly verbatim from the content map. This means the content map's tension analysis successfully propagated through Phase 1 to the builder. However, there is no evidence in the execution brief that the tensions were translated into CSS implications (e.g., "Chaos vs Control could manifest as structured grid layouts containing deliberately irregular content placement"). The tensions are informational, not actionable for CSS. This is arguably correct per "what the content IS, not what the design SHOULD BE," but it means the builder must independently derive CSS implications from abstract tension descriptions.

---

## 5. What is Missing From the Content Map?

### 5.1 Missing Per Protocol Specification

Comparing content map output against artifact-routing.md Phase 0 protocol (6 required operations):

| Operation | Required By | Present in Content Map? | Quality |
|---|---|---|---|
| 1. Classify content type | ITEM 7 (L28) | YES (line 3, line 9) | GOOD -- "MIXED" with element type enumeration |
| 2. Map structural heterogeneity | ITEM 8 (L29) | YES (line 10) | ADEQUATE -- "HIGH" with count, but no per-section breakdown |
| 3. Assess metaphor viability | ITEM 9 (L30) | YES (lines 39-47) | GOOD -- 3 seeds with risk ratings and recommendation |
| 4. Per-section character | ITEM 10 (L31) | PARTIAL -- embedded in zone table | GAP -- uses element types, not NARRATIVE/REF/CODE vocabulary |
| 5. Estimate density arc | ITEM 11 (L32) | YES (lines 49-58) | GOOD -- arc with section heights and pattern name |
| 6. Reader model classification | ITEM 12 (L33) | YES (lines 60-65) | ADEQUATE -- 5-axis positioning present but compact |

**Overall protocol compliance: 5/6 fully present, 1/6 partial.** The per-section character classification (operation 4) is the weakest element. It exists implicitly in the zone table but is not presented in the NARRATIVE/REF/CODE vocabulary that the protocol specifies and that the brief assembler expects.

### 5.2 Missing For Builder Success

Things the builder would have benefited from that are absent from the content map:

1. **ASCII diagram inventory:** The source has 4 major ASCII diagrams (hierarchy L184-219, communication flow L400-427, Beads architecture L461-482, memory model L496-517). These are structurally significant -- they require monospace rendering, specific width consideration, and visual framing. The content map does not enumerate them or their characteristics (width, complexity, visual weight).

2. **Quote inventory:** 10+ pull quotes with distinct emotional registers (philosophical: "nature prefers colonies"; provocative: "get your face ripped off"; pragmatic: "100% vibe-coded"). A quote inventory with register annotations would help the builder deploy quotes as compositional elements (e.g., philosophical quotes as full-width breathing elements, provocative quotes as highlighted callouts).

3. **Table complexity classification:** The 6+ tables range from simple 2-column (L150-157) to complex multi-column with row-specific data (L1098-1107). A table complexity classification (SIMPLE/MODERATE/COMPLEX) would help the builder choose appropriate table treatments.

4. **Content emotional peaks:** Where does the content's emotional register peak? The "You're not a programmer anymore. You're the head chef" moment (L1060) and the "nature prefers colonies" moment (L127-128) are emotional anchors. The reader profile mentions the "surprise" of the emotional dimension, but does not locate WHERE in the content these peaks occur. The builder needs to know which zones contain emotional content that needs design support.

5. **Code block characteristics:** The 12+ code blocks range from single-line commands (`gt mayor up`) to multi-line scripts (50-line startup script at L724-768). A code block size classification would help the builder choose between inline code treatment and full code block components.

### 5.3 Content Map Size

The content map is 66 lines. The protocol target is "~30-50 lines" (ITEM 13, D01-D03 L35). At 66 lines, the content map exceeds the target by 32-120%. This is not necessarily a problem -- the content map is appended to the brief, and the execution brief's content map appendix (lines 130-165 of the execution brief) is 35 lines, suggesting the brief assembler compressed the 66-line content map to fit. But it means some content map material was dropped during brief assembly.

---

## 6. Reader Profile Quality

The reader profile (lines 60-65) covers:

- **Who:** Advanced developers at Stage 6-7
- **Expert axis position:** 75-80% expert
- **Info density tolerance:** high
- **Visual complexity:** 3-4 components/viewport
- **Progressive disclosure:** minimal
- **Navigation:** optional TOC
- **Entry velocity:** minimal header, fast entry

**5-axis coverage check:**

| Axis | Covered? | Position | Notes |
|---|---|---|---|
| 1. Info Density | YES | Expert end (line-height 1.5, font 15px) | But content map does not translate to CSS parameter values |
| 2. Visual Complexity | YES | Expert end (3-4 components/viewport) | Good specificity |
| 3. Progressive Disclosure | YES | Expert end (minimal) | Correctly identified |
| 4. Navigation Complexity | YES | Expert end (optional TOC) | Good |
| 5. Entry Velocity | YES | Expert end (minimal header) | Good |

All 5 axes are present and correctly positioned. The reader profile is compact (6 lines) rather than the 15-line target suggested by the protocol (ITEM 100, D12-D14 L1118). This compression is acceptable -- the 5 axes are covered.

**The "What should surprise them" paragraph (line 65)** is the strongest element of the reader profile. It identifies that expert developers will expect technical documentation but should be surprised by the philosophical/emotional dimension. This is a genuine insight about the content's dual nature -- philosophical manifesto disguised as technical documentation.

**Missing from reader profile:**

1. **Device/context axis:** Where will readers consume this? Desktop only (this is Stage 7+ content -- they are at development workstations). This has responsive design implications -- 768px treatment can be minimal since these readers will overwhelmingly use wide viewports.

2. **Patience axis:** How much will readers tolerate before getting to actionable content? The extraction is 1,324 lines. Expert readers may want to skip to implementation (Z6) directly. This suggests a strong navigation/wayfinding mechanism, but the content map recommends "optional TOC" -- which may underserve the practitioner segment.

---

## 7. Density Arc Quality

The density arc (lines 49-58) specifies:

```
Z1 [SPARSE] -> Z2 [MODERATE] -> Z3 [DENSE] -> Z4 [MODERATE] -> Z5 [MODERATE] -> Z6 [DENSE->SPARSE]
```

Pattern: CRESCENDO + RELEASE

**Correctness:** This accurately reflects the source content. Z3 (8 roles, 248 lines of dense mixed content) is genuinely the densest section. Z1 (manifesto) is genuinely sparse. The CRESCENDO pattern matches the content's natural structure.

**Section height estimates (line 58):**
- Z1 ~500px, Z2 ~900px, Z3 ~2400px, Z4 ~1200px, Z5 ~1000px, Z6 ~1800px

These are plausible estimates. The Z3 estimate of 2400px is validated by the artifact-routing.md reference data (line 226-228: original Gas Town Z3 was ~2400px). The Z6 estimate of 1800px may be low for 674 lines of content -- at typical density, 674 lines of mixed content could easily be 2500-3000px. If Z6 is actually 2500px+, it would be the longest zone, not Z3, and the CRESCENDO + RELEASE pattern would actually be CRESCENDO + DIP + CRESCENDO -- a different temporal shape.

**Missing:** The density arc does not specify the Z6 internal transition. Line 56 says "Z6 has internal density shift: implementation details are dense, but the closing comparisons and decision matrix resolve into breathing space." This is good qualitative description but does not quantify where in Z6 the shift occurs or how sharp it is. A content analyst could have noted: "Z6 dense section (implementation + troubleshooting) = ~60% of zone height, resolving section (comparisons + sources) = ~40%."

---

## 8. Routing Artifact Completeness

Does artifact-routing.md contain everything the content analyst needs?

### Present and Sufficient

- Phase 0 content analysis protocol (6 operations): fully specified
- Content type classification taxonomy (PROSE/MIXED/VISUAL): clear
- Structural heterogeneity mapping framework: clear
- Metaphor viability assessment guidance: clear
- Reader model 5-axis framework: clear with CSS parameter ranges
- Content-volume-to-zone-count map: clear (6 lines, specific brackets)
- Content-form routing decision matrix: clear (5 conditions)

### Gaps in Routing Artifact

1. **No example content map.** The routing artifact describes the 6 operations and the output format (~30-50 lines) but provides no example of what a good content map looks like. The MANIFEST.md (lines 880-881) explicitly acknowledges: "No worked examples. The manifest does not include example Content Maps, Execution Briefs, PA reports, or Weaver verdicts." This is a significant gap for Phase 0 -- the content analyst is told WHAT to produce but not shown WHAT GOOD looks like.

2. **No tension-identification protocol.** The content map produced 4 content tensions, but the routing artifact does not mention tension identification as a required operation. The 6 operations (classify, map heterogeneity, assess metaphor, per-section character, density arc, reader model) do not include "identify content tensions." Yet the content map includes tensions, and the execution brief reproduces them. This is an emergent addition by the content analyst -- a good one, but not specified by the protocol. It should be codified as operation #7.

3. **No guidance on metaphor seed depth.** The content analyst produced 3 metaphor seeds with 4-5 lines each, including CSS direction hints. The routing artifact says "metaphor SEEDS in the content map -- these are not CSS instructions but descriptions of the content's natural character" (line 287-288). But it does not specify: how many seeds? How much CSS direction is appropriate? Should risk ratings be included? The content analyst independently decided on 3 seeds with risk ratings and CSS hints. This is good practice that should be standardized.

4. **No guidance on density arc notation.** The content analyst used ASCII art notation (line 52: `Z1 [SPARSE] -> Z2 [MODERATE] -> ...`) and included height estimates and a pattern name (CRESCENDO + RELEASE). The routing artifact says "estimate density arc" but does not specify notation format. Standardizing the notation (zone labels, density levels, height estimates, pattern name) would ensure consistent quality across different content analysts.

5. **No guidance on temporal composition in content map.** The artifact-routing.md "Temporal Composition -- Scroll Rhythm" section (lines 208-273) specifies three dimensions (section height, visual density, transition weight) but assigns this to the BUILDER (via brief Tier 3), not to the content analyst. Yet the content analyst must estimate section heights (which they did) and density (which they did) as inputs to temporal composition. The transition weight dimension -- which varies between zones (staccato/legato) -- is entirely absent from the content map because the protocol does not ask for it. This is a routing gap: the content analyst sees the content and can estimate where transitions should be heavy vs. light, but is not asked to do so.

---

## 9. Sonnet vs Opus for Phase 0

**CRITICAL CONTEXT:** The team lead used Sonnet for the content analyst instead of Opus. The manifest (line 38, line 106) specifies "Opus (recommended)" for the content analyst. The user's question is: why Sonnet? Everything should be Opus.

### Quality Assessment: Would Opus Have Produced Better Output?

The content map's quality is HIGH but not EXCEPTIONAL:

| Dimension | Sonnet Quality | Expected Opus Quality | Delta |
|---|---|---|---|
| Mode decision | CORRECT (COMPOSED) | Same | None |
| Metaphor identification | 3 good seeds, correct recommendation | Possibly 4-5 seeds, deeper CSS implications per seed | MODERATE |
| Zone architecture | 6 zones, correct mapping, good names | Possibly cleaner Z5 naming, Z6 split consideration | SMALL |
| Content tensions | 4 tensions, well-polarized | Possibly 5-6 tensions with CSS implications | MODERATE |
| Reader profile | 5 axes, correct positioning | Same content but possibly more nuanced "surprise" analysis | SMALL |
| Density arc | Correct pattern, height estimates | Same | None |
| Per-section character | PARTIAL (wrong vocabulary) | More likely to use NARRATIVE/REF/CODE vocabulary if it read the protocol | MODERATE |
| Content inventories | ABSENT (no diagram/quote/table inventory) | More likely to include enrichments | MODERATE-HIGH |
| IS vs SHOULD boundary | One crossing (border-weight gradient) | Better discipline on the boundary | SMALL |

**Estimated overall delta: Sonnet produced ~80% of what Opus would have produced.** The missing 20% is concentrated in:
1. Content inventories (diagrams, quotes, tables, code blocks)
2. Deeper metaphor decomposition (per-channel CSS implications)
3. Transition weight estimation
4. Vocabulary compliance (NARRATIVE/REF/CODE)

**Would the 20% delta have improved PA-05?** Unlikely to change the 3/4 score. The content map's primary job is to inform the brief assembler, who then informs the builder. The execution brief (Phase 1 output) is well-constructed and captures the essential information. The missing inventories would have helped the builder make better component choices in Z3 and Z6, potentially improving the "Polished" sub-criterion of PA-05. But going from 3/4 to 4/4 requires perfection on all 4 sub-criteria -- Phase 0 enrichment alone would not achieve this.

**Cost consideration:** Sonnet is ~5x cheaper than Opus for Phase 0. Given that Phase 0 output was good enough for a 175/200 final score, using Sonnet for Phase 0 is a defensible cost optimization IF the manifest explicitly sanctions it. Currently it does not -- the manifest says "Opus (recommended)." The protocol should be updated to say "Opus for COMPOSED mode content, Sonnet acceptable for APPLIED mode content."

---

## 10. Prompt Template for Codifying Phase 0

Based on what the Sonnet content analyst actually produced and what was missing, here is the codifiable prompt template:

```markdown
# Phase 0: Content Analysis Protocol

You are the Content Analyst. Your job is to describe WHAT THE CONTENT IS,
not what the design SHOULD BE. You produce a CONTENT MAP that feeds Phase 1.

## Your Input
- Raw markdown content (attached)
- This protocol

## Your Output: CONTENT MAP (~40-60 lines)

Produce a document with these 8 sections:

### 1. Content Classification (3 lines)
- Content type: PROSE / MIXED / VISUAL
- Word count estimate
- Structural heterogeneity: LOW / HIGH (count distinct element types)

### 2. Mode Determination (3-5 lines)
State COMPOSED or APPLIED. Justify with heterogeneity + metaphor viability.

### 3. Zone Architecture (table + 2-3 lines)
Recommend zone count (use word-count-to-zone-count map: <2K=2-3, 2-5K=3-4,
5-10K=4-5, 10-20K=5-7). Provide a table with columns:
Zone | Name | Density (sparse/moderate/dense) | Content Sections | Pacing | Direction

Zone names must be evocative single concepts derived from the content,
NOT conjunctions ("X + Y"). Each name should suggest a CSS mood.

### 4. Per-Section Character (1 line per zone)
For each zone, classify as NARRATIVE / REFERENCE / CODE (or compound:
NARRATIVE+REFERENCE). Use ONLY these three terms.

### 5. Content Tensions (2-3 lines each, max 5)
Identify 2-5 tensions in the content. For each:
- Name: "A vs B"
- Which pole dominates
- Do NOT suggest CSS implications (that is the builder's job)
Mark one tension as "metaphor-shaping."

### 6. Metaphor Seeds (4-6 lines each, max 3)
For each candidate metaphor:
- Name and brief description
- What content language supports it
- Risk: LOW (content uses this language) / MEDIUM (content implies it) / HIGH (imposed from outside)
Recommend one. Explain structurally why it maps to zones.
Do NOT include CSS directions -- describe the content's character only.

### 7. Density Arc (4 lines)
ASCII notation: Z1 [LEVEL] -> Z2 [LEVEL] -> ...
Pattern name (CRESCENDO, PLATEAU+TAPER, WAVE, etc.)
Estimated heights per zone in pixels (rough).
Note any internal density shifts within zones.

### 8. Reader Profile (8-10 lines)
Position on 5 axes (expert<->general spectrum):
1. Info Density: line-height, font-size preference
2. Visual Complexity: components/viewport
3. Progressive Disclosure: none <-> collapsible
4. Navigation: optional TOC <-> mandatory TOC+map
5. Entry Velocity: minimal header <-> expansive header

Then: "What should surprise them" (1-2 sentences identifying the content's
hidden dimension that expert readers would not expect).

### 9. Content Inventory (optional, for MIXED/VISUAL content only)
Enumerate structural elements that need special rendering treatment:
- ASCII diagrams: count, approximate width, visual weight
- Tables: count, complexity (SIMPLE 2-col / MODERATE 3-4 col / COMPLEX 5+ col)
- Code blocks: count, size (INLINE 1-3 lines / BLOCK 4-20 lines / SCRIPT 20+ lines)
- Pull quotes: count, emotional register
```

This template adds:
- Operation #7: Content tensions (emergent from this run, now codified)
- Operation #8: Content inventory (missing from this run)
- Size target adjusted from 30-50 to 40-60 lines (reality check)
- Explicit IS/SHOULD boundary instruction
- Zone naming quality standard (no conjunctions)
- NARRATIVE/REF/CODE vocabulary requirement

---

## 11. Enrichment Recommendations (Ranked)

### BLOCKING (must fix before next pipeline run)

**B-01: Add per-section character vocabulary requirement to routing artifact.**
The content analyst must use NARRATIVE/REF/CODE vocabulary, not prose descriptions of element types. This vocabulary propagates through the brief to the builder and determines content-form coupling decisions.
- File: artifact-routing.md, "Phase 0: Content Analysis Protocol" section
- Edit: Add explicit vocabulary requirement and example to operation #4

**B-02: Add transition weight to Phase 0 output requirements.**
The content map must include transition weight suggestions (light/medium/heavy) between zones. Prior Gas Town builds failed on "temporal monotony" (uniform dividers). The content analyst is the first agent to see the content's register shifts and can estimate where transitions should be heavy (major topic change) vs. light (subtopic continuation).
- File: artifact-routing.md, "Phase 0: Content Analysis Protocol" section
- Edit: Add operation #7: "Estimate transition weight between zones (LIGHT/MEDIUM/HEAVY)"

### SIGNIFICANT (should fix for quality improvement)

**S-01: Add content tension identification as a required operation.**
The content map included 4 tensions that propagated successfully through the brief to the builder. This was an emergent addition by the content analyst, not specified by the protocol. Codify it as operation #7 (or #8 after transition weight).
- File: artifact-routing.md, add after current operation 6
- Edit: "Identify 2-5 content tensions. Polarize each. Mark one as metaphor-shaping."

**S-02: Add content inventory for MIXED content type.**
When content type = MIXED, the content analyst should enumerate special-rendering elements (ASCII diagrams, complex tables, long code blocks, pull quotes with emotional register). This inventory helps the builder plan component usage and estimate CSS complexity.
- File: artifact-routing.md, add after reader model section
- Edit: "For MIXED content: enumerate elements requiring special rendering treatment"

**S-03: Add example content map to routing artifact or MANIFEST.md.**
The MANIFEST acknowledges this gap (line 880). Provide 1-2 examples of good content maps (this gas town content map, after the corrections above are applied, would be a suitable example).
- File: MANIFEST.md Appendix or artifact-routing.md new section
- Edit: Add "Example Content Map" section with annotated example

**S-04: Clarify metaphor seed depth -- IS vs SHOULD boundary.**
The content map included CSS direction hints in the metaphor seeds ("border-weight gradient 4px->1px"). This crosses the IS/SHOULD boundary. The routing artifact should clarify: metaphor seeds describe the content's natural character and structural mapping to zones, NOT CSS property values.
- File: artifact-routing.md, "Metaphor Viability Assessment" section
- Edit: Add explicit boundary: "Metaphor seeds describe content character, not CSS values. Say 'register shifts from proclamation to specification' not 'border-weight gradient 4px->1px'"

**S-05: Standardize density arc notation format.**
The content analyst invented a good notation (ASCII with brackets, height estimates, pattern name). This should be standardized so all future content maps use the same format.
- File: artifact-routing.md, after density arc operation
- Edit: Specify format: `ZN [LEVEL] -> ZN+1 [LEVEL] ...` + pattern name + height estimates + internal shift notes

**S-06: Update agent model recommendation for Phase 0.**
The manifest says "Opus (recommended)" for the content analyst. Based on this execution, Sonnet produced ~80% quality at ~20% cost. Update to: "Opus for COMPOSED mode content; Sonnet acceptable for APPLIED mode content. When in doubt, use Opus."
- File: MANIFEST.md, Phase 0 agent table
- Edit: Nuance the model recommendation

### MINOR (nice to have)

**M-01: Zone naming quality standard.**
Zone names should be evocative single concepts, not conjunctions. "The Principles + Waves" (Z5) is weaker than "The Philosophy" or "The Logic." Add a note: "Zone names must be single concepts that suggest a CSS mood. Avoid conjunctions."
- File: Content map template / routing artifact

**M-02: Reader profile device/context axis.**
The 5-axis reader model does not include device context. For expert content (Stage 7+), noting "desktop-primary" would give the builder permission to deprioritize 768px responsive treatment. This is a minor point since the PA protocol already audits at 3 viewports.
- File: artifact-routing.md, Reader Model section

**M-03: Content map size target adjustment.**
The protocol says 30-50 lines. This content map is 66 lines. For MIXED content with COMPOSED mode, 40-60 lines is more realistic. Update the size target range.
- File: artifact-routing.md, ITEM 13 reference

---

## 12. Summary Assessment

### Phase 0 Grade: B+ (Strong execution with known gaps)

**What worked well:**
- Mode decision was correct and well-justified
- Metaphor identification was strong with appropriate risk assessment
- Zone architecture maps cleanly to content structure and factory metaphor
- Content tensions are genuinely insightful
- Reader profile correctly positions on all 5 axes
- Density arc accurately reflects content structure

**What was missing:**
- Per-section character vocabulary compliance (NARRATIVE/REF/CODE)
- Transition weight between zones
- Content inventory (diagrams, tables, quotes, code blocks)
- Deeper metaphor decomposition per CSS channel
- IS/SHOULD boundary discipline (one crossing)

**What the routing artifact needs:**
- Example content maps
- Codified tension identification
- Standardized density arc notation
- Transition weight as required output
- Explicit IS/SHOULD boundary guidance for metaphor seeds
- Nuanced model recommendation (Opus for COMPOSED, Sonnet for APPLIED)

**Impact on final score:** Phase 0 was a NET POSITIVE contributor to the 175/200 result. The content map's strengths (correct mode, strong metaphor, accurate density arc) enabled the brief assembler and builder to produce COMPOSED-quality output. The gaps (missing inventories, vocabulary compliance) created friction in Phase 1 but were compensated by the brief assembler's capability. Phase 0 is not the bottleneck for improving from 3/4 to 4/4 on PA-05 -- Phase 2 (builder execution) and the enrichment gaps are more likely bottlenecks.
