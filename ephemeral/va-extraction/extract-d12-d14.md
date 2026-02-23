# Extraction: Diagrams 12, 13, 14 — Visual Architecture
## Source: `/ephemeral/pipeline-v3-research/VISUAL-ARCHITECTURE.md`
## Lines 963–1124

---

# DIAGRAM 12: THE PIPELINE'S PRECISE BOUNDARY (lines 963–1010)

### ITEM 1
- **Diagram:** 12
- **Line range:** 963
- **Type:** DECISION
- **Exact text:** "THE PIPELINE'S PRECISE BOUNDARY (from A5)"
- **Actionable implication:** The pipeline boundary concept originates from audit cluster A5 (Provenance + Gaps) and must be treated as an architectural constraint defining what the pipeline does and does not do.

### ITEM 2
- **Diagram:** 12
- **Line range:** 967-968
- **Type:** DECISION
- **Exact text:** "KEY INSIGHT: Value Propagation vs Relationship Propagation — 'The pipeline prescribes WHAT to write. Not HOW things relate.'"
- **Actionable implication:** Pipeline v3 must distinguish between value propagation (individual CSS values) and relationship propagation (how values interact) — the pipeline currently handles only the former.

### ITEM 3
- **Diagram:** 12
- **Line range:** 969
- **Type:** FILE_REF
- **Exact text:** "(A5: Provenance + Gaps Cluster Audit)"
- **Actionable implication:** The A5 cluster audit is the provenance source for this insight and must be consulted for full context when implementing fixes.

### ITEM 4
- **Diagram:** 12
- **Line range:** 974
- **Type:** VALUE
- **Exact text:** "45,000 lines ───► 73-line brief ───► CSS output"
- **Actionable implication:** The compression ratio from research to brief is ~616:1 (45,000 to 73 lines), establishing the scale of information loss the pipeline must address.

### ITEM 5
- **Diagram:** 12
- **Line range:** 978
- **Type:** THRESHOLD
- **Exact text:** "VALUES (80-95% prescribed)"
- **Actionable implication:** The pipeline successfully propagates 80-95% of individual values — this is not the problem area and does not need fixing.

### ITEM 6
- **Diagram:** 12
- **Line range:** 978
- **Type:** THRESHOLD
- **Exact text:** "RELATIONSHIPS (0% prescribed)"
- **Actionable implication:** Zero percent of value relationships survive compression — this is the critical gap that pipeline v3 must close.

### ITEM 7
- **Diagram:** 12
- **Line range:** 980
- **Type:** VALUE
- **Exact text:** "Hex colors (#E83025)"
- **Actionable implication:** Hex color values are an example of values that survive compression and are successfully prescribed by the pipeline.

### ITEM 8
- **Diagram:** 12
- **Line range:** 981
- **Type:** VALUE
- **Exact text:** "Pixel measurements (64px)"
- **Actionable implication:** Pixel measurements are an example of values that survive compression and are successfully prescribed by the pipeline.

### ITEM 9
- **Diagram:** 12
- **Line range:** 982
- **Type:** VALUE
- **Exact text:** "Border weights (4px/3px/1px)"
- **Actionable implication:** Border weights are an example of values that survive compression and are successfully prescribed by the pipeline.

### ITEM 10
- **Diagram:** 12
- **Line range:** 983
- **Type:** VALUE
- **Exact text:** "Font sizes (1rem, 0.875rem)"
- **Actionable implication:** Font sizes are an example of values that survive compression and are successfully prescribed by the pipeline.

### ITEM 11
- **Diagram:** 12
- **Line range:** 984
- **Type:** VALUE
- **Exact text:** "Spacing scale (4-96px)"
- **Actionable implication:** Spacing scale values are an example of values that survive compression and are successfully prescribed by the pipeline.

### ITEM 12
- **Diagram:** 12
- **Line range:** 985
- **Type:** VALUE
- **Exact text:** "Token names (--color-primary)"
- **Actionable implication:** CSS custom property / token names are an example of values that survive compression and are successfully prescribed by the pipeline.

### ITEM 13
- **Diagram:** 12
- **Line range:** 987-988
- **Type:** THRESHOLD
- **Exact text:** "55.2:1 compression: 2,374 CSS lines → 43 prose"
- **Actionable implication:** The CSS-to-prose compression ratio is 55.2:1 (2,374 CSS lines become 43 prose lines) — this quantifies the information loss at the value level specifically.

### ITEM 14
- **Diagram:** 12
- **Line range:** 989
- **Type:** DECISION
- **Exact text:** "Individual values survive."
- **Actionable implication:** The pipeline's value propagation mechanism works — individual values do not need a new propagation strategy.

### ITEM 15
- **Diagram:** 12
- **Line range:** 980-981
- **Type:** DECISION
- **Exact text:** "Which values should CO-OCCUR"
- **Actionable implication:** Co-occurrence relationships between values are NOT propagated and must be addressed by pipeline v3's relationship activation mechanism.

### ITEM 16
- **Diagram:** 12
- **Line range:** 981
- **Type:** DECISION
- **Exact text:** "Which values should CONTRAST"
- **Actionable implication:** Contrast relationships between values are NOT propagated and must be addressed by pipeline v3's relationship activation mechanism.

### ITEM 17
- **Diagram:** 12
- **Line range:** 982-983
- **Type:** DECISION
- **Exact text:** "Which values should VARY TOGETHER across zones"
- **Actionable implication:** Cross-zone co-variation relationships are NOT propagated and must be addressed by pipeline v3's relationship activation mechanism.

### ITEM 18
- **Diagram:** 12
- **Line range:** 984-985
- **Type:** DECISION
- **Exact text:** "How channels interact at zone boundaries"
- **Actionable implication:** Channel interaction at zone boundaries is NOT propagated and must be addressed by pipeline v3's relationship activation mechanism.

### ITEM 19
- **Diagram:** 12
- **Line range:** 986-987
- **Type:** DECISION
- **Exact text:** "Why THIS value pairs with THAT value in THIS context"
- **Actionable implication:** Contextual value-pairing rationale is NOT propagated and must be addressed by pipeline v3's relationship activation mechanism.

### ITEM 20
- **Diagram:** 12
- **Line range:** 989-991
- **Type:** DECISION
- **Exact text:** "Combinations do NOT survive compression. They must be REGENERATED by the builder."
- **Actionable implication:** Pipeline v3 must NOT attempt to compress and transmit combinations — instead it must create conditions for the builder to regenerate them natively.

### ITEM 21
- **Diagram:** 12
- **Line range:** 996
- **Type:** RECOMMENDATION
- **Exact text:** "Don't compress relationships. ACTIVATE them."
- **Actionable implication:** Pipeline v3's core strategy for relationships is activation (creating conditions for emergence) rather than compression (attempting to encode and transmit them).

### ITEM 22
- **Diagram:** 12
- **Line range:** 998
- **Type:** VALUE
- **Exact text:** "Old: 'Use ≥15 RGB delta between zone backgrounds' (VALUE rule)"
- **Actionable implication:** This is an example of the old pipeline approach — specifying a threshold value — which must be replaced in pipeline v3.

### ITEM 23
- **Diagram:** 12
- **Line range:** 999-1000
- **Type:** VALUE
- **Exact text:** "New: 'Room perception at boundaries — each zone should feel like entering a different room in the same building' (RELATION)"
- **Actionable implication:** This is the pipeline v3 replacement — a perceptual instruction that activates the builder's compositional intelligence instead of prescribing a threshold.

### ITEM 24
- **Diagram:** 12
- **Line range:** 1002
- **Type:** DECISION
- **Exact text:** "Disposition D-02 replaces threshold with perceptual instruction."
- **Actionable implication:** Disposition D-02 is the specific mechanism that implements the value-to-relationship shift; it must be included in the pipeline v3 disposition set.

### ITEM 25
- **Diagram:** 12
- **Line range:** 1003-1004
- **Type:** DECISION
- **Exact text:** "Builder with Opus intelligence generates BOTH the values AND the relationships — the combination is NATIVE, not prescribed."
- **Actionable implication:** Pipeline v3 requires Opus-level builder intelligence for native relationship generation; the combination of values and relationships must emerge from the builder, not be pre-specified.

### ITEM 26
- **Diagram:** 12
- **Line range:** 1007-1008
- **Type:** THRESHOLD
- **Exact text:** "Also from A5: Builder-originated material (~20% of CSS) partially compensates for specification gaps. Gap count is ~20-24, not 28."
- **Actionable implication:** The builder already generates ~20% of CSS beyond specification; the actual gap count is 20-24 (not the previously reported 28) because builder-originated material fills some gaps.

### ITEM 27
- **Diagram:** 12
- **Line range:** 1009
- **Type:** DECISION
- **Exact text:** "The builder EXCEEDS its specification when in COMPOSING mode."
- **Actionable implication:** Composing mode (vs compliance mode) enables the builder to exceed specifications — pipeline v3 must ensure the builder operates in composing mode, not compliance mode.

---

# DIAGRAM 13: TEMPORAL COMPOSITION — SCROLL RHYTHM IN CSS (lines 1014–1073)

### ITEM 28
- **Diagram:** 13
- **Line range:** 1014
- **Type:** DECISION
- **Exact text:** "TEMPORAL COMPOSITION — SCROLL RHYTHM IN CSS (from B1)"
- **Actionable implication:** Temporal composition is a distinct compositional dimension that must be addressed in pipeline v3, originating from the B1 investigation.

### ITEM 29
- **Diagram:** 13
- **Line range:** 1018
- **Type:** DECISION
- **Exact text:** "TEMPORAL COMPOSITION: How static CSS creates time-based experience"
- **Actionable implication:** Static CSS properties produce temporal experiences through scrolling — pipeline v3 must account for this emergent temporal dimension.

### ITEM 30
- **Diagram:** 13
- **Line range:** 1019
- **Type:** DECISION
- **Exact text:** "'Every reader experiences a page TEMPORALLY — they scroll.'"
- **Actionable implication:** All page experiences are fundamentally temporal; scroll-based rhythm is not optional but inherent to every page.

### ITEM 31
- **Diagram:** 13
- **Line range:** 1020
- **Type:** FILE_REF
- **Exact text:** "(B1: Temporal Composition Investigation)"
- **Actionable implication:** The B1 investigation is the provenance source for temporal composition and must be consulted for full context.

### ITEM 32
- **Diagram:** 13
- **Line range:** 1023
- **Type:** DECISION
- **Exact text:** "THREE DIMENSIONS OF SCROLL RHYTHM"
- **Actionable implication:** Scroll rhythm has exactly three dimensions that must each be separately addressed: section height, visual density, and transition weight.

### ITEM 33
- **Diagram:** 13
- **Line range:** 1025
- **Type:** DECISION
- **Exact text:** "A. SECTION HEIGHT ('measure length')"
- **Actionable implication:** Section height (analogous to musical "measure length") is the first dimension of scroll rhythm and controls pacing of the reading experience.

### ITEM 34
- **Diagram:** 13
- **Line range:** 1028
- **Type:** VALUE
- **Exact text:** "Z1: ████ (~600px)"
- **Actionable implication:** Gas Town Zone 1 has approximate height of 600px — this is the shortest section in the Gas Town scroll rhythm pattern.

### ITEM 35
- **Diagram:** 13
- **Line range:** 1029
- **Type:** VALUE
- **Exact text:** "Z2: ████████████ (~1800px)"
- **Actionable implication:** Gas Town Zone 2 has approximate height of 1800px — this is the medium section that begins the crescendo.

### ITEM 36
- **Diagram:** 13
- **Line range:** 1030
- **Type:** VALUE
- **Exact text:** "Z3: ████████████████ (~2400px)"
- **Actionable implication:** Gas Town Zone 3 has approximate height of 2400px — this is the longest section, the peak of the crescendo.

### ITEM 37
- **Diagram:** 13
- **Line range:** 1031
- **Type:** VALUE
- **Exact text:** "Z4: ████████ (~1200px)"
- **Actionable implication:** Gas Town Zone 4 has approximate height of 1200px — this is the release section that moderates after the peak.

### ITEM 38
- **Diagram:** 13
- **Line range:** 1028
- **Type:** VALUE
- **Exact text:** "S1: ████████ (~900px)"
- **Actionable implication:** CD-006 Section 1 has approximate height of 900px — establishing CD-006's more uniform rhythm.

### ITEM 39
- **Diagram:** 13
- **Line range:** 1029
- **Type:** VALUE
- **Exact text:** "S2: █████████ (~1000px)"
- **Actionable implication:** CD-006 Section 2 has approximate height of 1000px.

### ITEM 40
- **Diagram:** 13
- **Line range:** 1030
- **Type:** VALUE
- **Exact text:** "S3: █████████ (~1000px)"
- **Actionable implication:** CD-006 Section 3 has approximate height of 1000px.

### ITEM 41
- **Diagram:** 13
- **Line range:** 1031
- **Type:** VALUE
- **Exact text:** "S4: ██████████ (~1100px)"
- **Actionable implication:** CD-006 Section 4 has approximate height of 1100px — the slightly largest section in CD-006's regular rhythm.

### ITEM 42
- **Diagram:** 13
- **Line range:** 1032
- **Type:** VALUE
- **Exact text:** "S5: █████████ (~1000px)"
- **Actionable implication:** CD-006 Section 5 has approximate height of 1000px.

### ITEM 43
- **Diagram:** 13
- **Line range:** 1034
- **Type:** VALUE
- **Exact text:** "S6: ████████ (~900px)"
- **Actionable implication:** CD-006 Section 6 has approximate height of 900px — beginning the taper.

### ITEM 44
- **Diagram:** 13
- **Line range:** 1034
- **Type:** VALUE
- **Exact text:** "S7: ████████ (~900px)"
- **Actionable implication:** CD-006 Section 7 has approximate height of 900px.

### ITEM 45
- **Diagram:** 13
- **Line range:** 1035
- **Type:** VALUE
- **Exact text:** "S8: ██████ (~700px)"
- **Actionable implication:** CD-006 Section 8 has approximate height of 700px — the shortest section, completing the taper to close.

### ITEM 46
- **Diagram:** 13
- **Line range:** 1033
- **Type:** DECISION
- **Exact text:** "Pattern: SHORT→LONG→LONGEST→MOD (Deepening engagement + release)"
- **Actionable implication:** Gas Town uses a crescendo-and-release scroll rhythm pattern — short to long to longest to moderate — which maps to narrative engagement deepening then releasing.

### ITEM 47
- **Diagram:** 13
- **Line range:** 1036
- **Type:** DECISION
- **Exact text:** "Pattern: REGULAR 4/4 time"
- **Actionable implication:** CD-006 uses a regular/uniform scroll rhythm pattern (analogous to 4/4 time in music) — sections are roughly equal in height with a gentle taper.

### ITEM 48
- **Diagram:** 13
- **Line range:** 1038
- **Type:** DECISION
- **Exact text:** "B. VISUAL DENSITY ('dynamics' — loud/quiet)"
- **Actionable implication:** Visual density (analogous to musical dynamics) is the second dimension of scroll rhythm and controls the perceived loudness/quietness of each section.

### ITEM 49
- **Diagram:** 13
- **Line range:** 1041
- **Type:** VALUE
- **Exact text:** "Z1: ░░░ SPARSE"
- **Actionable implication:** Gas Town Zone 1 has SPARSE visual density — the quietest opening.

### ITEM 50
- **Diagram:** 13
- **Line range:** 1042
- **Type:** VALUE
- **Exact text:** "Z2: ██░ MODERATE"
- **Actionable implication:** Gas Town Zone 2 has MODERATE visual density — beginning the crescendo.

### ITEM 51
- **Diagram:** 13
- **Line range:** 1043
- **Type:** VALUE
- **Exact text:** "Z3: ███ DENSE"
- **Actionable implication:** Gas Town Zone 3 has DENSE visual density — the peak of the crescendo.

### ITEM 52
- **Diagram:** 13
- **Line range:** 1044
- **Type:** VALUE
- **Exact text:** "Z4: ██░ MODERATE"
- **Actionable implication:** Gas Town Zone 4 has MODERATE visual density — the release back down.

### ITEM 53
- **Diagram:** 13
- **Line range:** 1041
- **Type:** VALUE
- **Exact text:** "S1: ██░ MEDIUM"
- **Actionable implication:** CD-006 Section 1 has MEDIUM visual density.

### ITEM 54
- **Diagram:** 13
- **Line range:** 1042
- **Type:** VALUE
- **Exact text:** "S2: ███ HIGH"
- **Actionable implication:** CD-006 Section 2 has HIGH visual density.

### ITEM 55
- **Diagram:** 13
- **Line range:** 1043
- **Type:** VALUE
- **Exact text:** "S3: ███ HIGH"
- **Actionable implication:** CD-006 Section 3 has HIGH visual density.

### ITEM 56
- **Diagram:** 13
- **Line range:** 1044
- **Type:** VALUE
- **Exact text:** "S4: ████ V.HIGH"
- **Actionable implication:** CD-006 Section 4 has VERY HIGH visual density — the peak of CD-006's density arc.

### ITEM 57
- **Diagram:** 13
- **Line range:** 1045
- **Type:** VALUE
- **Exact text:** "S5: ███ HIGH"
- **Actionable implication:** CD-006 Section 5 has HIGH visual density.

### ITEM 58
- **Diagram:** 13
- **Line range:** 1046
- **Type:** VALUE
- **Exact text:** "S6: ██░ MEDIUM"
- **Actionable implication:** CD-006 Section 6 has MEDIUM visual density — beginning the taper.

### ITEM 59
- **Diagram:** 13
- **Line range:** 1047
- **Type:** VALUE
- **Exact text:** "S7: ██░ MEDIUM"
- **Actionable implication:** CD-006 Section 7 has MEDIUM visual density.

### ITEM 60
- **Diagram:** 13
- **Line range:** 1048
- **Type:** VALUE
- **Exact text:** "S8: ░░░ LOW"
- **Actionable implication:** CD-006 Section 8 has LOW visual density — the quietest ending.

### ITEM 61
- **Diagram:** 13
- **Line range:** 1046
- **Type:** DECISION
- **Exact text:** "CRESCENDO+RELEASE"
- **Actionable implication:** Gas Town's visual density pattern is a crescendo followed by release — sparse to moderate to dense to moderate.

### ITEM 62
- **Diagram:** 13
- **Line range:** 1049
- **Type:** DECISION
- **Exact text:** "PLATEAU+TAPER"
- **Actionable implication:** CD-006's visual density pattern is a plateau followed by taper — medium to high to very high then gradually declining to low.

### ITEM 63
- **Diagram:** 13
- **Line range:** 1051
- **Type:** DECISION
- **Exact text:** "C. TRANSITION WEIGHT ('articulation' — staccato/legato)"
- **Actionable implication:** Transition weight (analogous to musical articulation) is the third dimension of scroll rhythm and controls how sections connect — smoothly or with distinct breaks.

### ITEM 64
- **Diagram:** 13
- **Line range:** 1053
- **Type:** VALUE
- **Exact text:** "Light (1px + 48px gap) ═══ legato, smooth flow"
- **Actionable implication:** Light transitions use 1px border + 48px gap and create smooth, legato flow between sections.

### ITEM 65
- **Diagram:** 13
- **Line range:** 1054
- **Type:** VALUE
- **Exact text:** "Medium (3px + 80px gap) ═══ breathing rest"
- **Actionable implication:** Medium transitions use 3px border + 80px gap and create a breathing rest between sections.

### ITEM 66
- **Diagram:** 13
- **Line range:** 1055
- **Type:** VALUE
- **Exact text:** "Heavy (colored bg + text) ═ narrative breath, full stop"
- **Actionable implication:** Heavy transitions use colored background + text and create a full narrative stop between sections.

### ITEM 67
- **Diagram:** 13
- **Line range:** 1057
- **Type:** THRESHOLD
- **Exact text:** "CD-006 uses 3 distinct transition types."
- **Actionable implication:** Three distinct transition types is the reference standard for temporal variety — this sets a minimum benchmark.

### ITEM 68
- **Diagram:** 13
- **Line range:** 1058
- **Type:** WARNING
- **Exact text:** "Gas Town uses 1 (uniform dividers). ← TEMPORAL MONOTONY"
- **Actionable implication:** Using only one transition type creates temporal monotony — a specific failure mode that pipeline v3 must prevent by requiring transition variety.

### ITEM 69
- **Diagram:** 13
- **Line range:** 1063
- **Type:** PROCESS
- **Exact text:** "Phase 0: Content Analyst maps section-by-section density arc"
- **Actionable implication:** Pipeline v3 Phase 0 must include a Content Analyst who produces a section-by-section density arc mapping as output.

### ITEM 70
- **Diagram:** 13
- **Line range:** 1064
- **Type:** PROCESS
- **Exact text:** "Phase 1: Activation brief includes density arc description"
- **Actionable implication:** Pipeline v3 Phase 1 must include the density arc description in the activation brief that goes to the builder.

### ITEM 71
- **Diagram:** 13
- **Line range:** 1065
- **Type:** PROCESS
- **Exact text:** "Phase 2: D-05 'Reader's Scroll' activates temporal awareness"
- **Actionable implication:** Disposition D-05 "Reader's Scroll" is the specific mechanism in Phase 2 that activates temporal composition awareness in the builder.

### ITEM 72
- **Diagram:** 13
- **Line range:** 1066
- **Type:** PROCESS
- **Exact text:** "D-06 'Negative Space as Shape' prevents uniform gaps"
- **Actionable implication:** Disposition D-06 "Negative Space as Shape" is the specific mechanism in Phase 2 that prevents uniform gaps / temporal monotony.

### ITEM 73
- **Diagram:** 13
- **Line range:** 1067
- **Type:** PROCESS
- **Exact text:** "Phase 3: PA auditor checks transition variety + rhythm"
- **Actionable implication:** Pipeline v3 Phase 3 must include a PA auditor specifically checking for transition variety and scroll rhythm.

### ITEM 74
- **Diagram:** 13
- **Line range:** 1069-1070
- **Type:** DECISION
- **Exact text:** "KEY RULE: Scroll rhythm is NOT a single CSS property. It EMERGES from interaction of height × density × transitions."
- **Actionable implication:** Scroll rhythm cannot be specified as a CSS property — it emerges from the interaction of all three dimensions and must be addressed through conditions, not specifications.

### ITEM 75
- **Diagram:** 13
- **Line range:** 1071
- **Type:** DECISION
- **Exact text:** "Pipeline v3 creates CONDITIONS, not specifications."
- **Actionable implication:** Pipeline v3's fundamental approach is creating conditions for emergence rather than specifying outcomes — this applies to scroll rhythm and all emergent properties.

---

# DIAGRAM 14: READER MODEL — 5-AXIS INPUT SPACE (lines 1077–1121)

### ITEM 76
- **Diagram:** 14
- **Line range:** 1077
- **Type:** DECISION
- **Exact text:** "READER MODEL — 5-AXIS INPUT SPACE (from B2)"
- **Actionable implication:** The reader model has exactly 5 axes that must be assessed for every page build, originating from B2 investigation.

### ITEM 77
- **Diagram:** 14
- **Line range:** 1081
- **Type:** DECISION
- **Exact text:** "READER MODEL: 5 axes that map directly to CSS parameter adjustments"
- **Actionable implication:** Each of the 5 reader model axes maps directly to specific CSS parameters — this is not abstract theory but concrete parameter adjustment guidance.

### ITEM 78
- **Diagram:** 14
- **Line range:** 1082
- **Type:** WARNING
- **Exact text:** "'The single most consequential ABSENT dimension in the pipeline'"
- **Actionable implication:** The reader model is the single most consequential missing dimension — its absence was a root cause of pipeline failure and must be present in pipeline v3.

### ITEM 79
- **Diagram:** 14
- **Line range:** 1083
- **Type:** FILE_REF
- **Exact text:** "(B2: Reader Model Investigation)"
- **Actionable implication:** The B2 investigation is the provenance source for the reader model and must be consulted for full context.

### ITEM 80
- **Diagram:** 14
- **Line range:** 1086-1087
- **Type:** DECISION
- **Exact text:** "Expert (Yegge followers) ◄──────────────────────────────────► General (Google search)"
- **Actionable implication:** The reader model spectrum runs from Expert (domain-specific followers) to General (search engine visitors) — these are the two poles for all 5 axes.

### ITEM 81
- **Diagram:** 14
- **Line range:** 1088-1091
- **Type:** DECISION
- **Exact text:** "AXIS 1 Info Density"
- **Actionable implication:** Axis 1 is Information Density — how tightly packed the content is — and is the first reader-model dimension to assess.

### ITEM 82
- **Diagram:** 14
- **Line range:** 1089
- **Type:** VALUE
- **Exact text:** "line-height: 1.5 [Expert] ... line-height: 1.8 [General]"
- **Actionable implication:** Expert readers get tighter line-height (1.5) while general readers get more open line-height (1.8) — this is a direct CSS parameter mapping for Axis 1.

### ITEM 83
- **Diagram:** 14
- **Line range:** 1090
- **Type:** VALUE
- **Exact text:** "font-size: 15px [Expert] ... font-size: 18px [General]"
- **Actionable implication:** Expert readers get smaller font-size (15px) while general readers get larger font-size (18px) — this is a direct CSS parameter mapping for Axis 1.

### ITEM 84
- **Diagram:** 14
- **Line range:** 1091
- **Type:** VALUE
- **Exact text:** "max-width: 70ch [Expert] ... max-width: 55ch [General]"
- **Actionable implication:** Expert readers get wider line measure (70ch) while general readers get narrower line measure (55ch) — this is a direct CSS parameter mapping for Axis 1.

### ITEM 85
- **Diagram:** 14
- **Line range:** 1093-1095
- **Type:** DECISION
- **Exact text:** "AXIS 2 Visual Complexity"
- **Actionable implication:** Axis 2 is Visual Complexity — how many components appear per viewport — and is the second reader-model dimension to assess.

### ITEM 86
- **Diagram:** 14
- **Line range:** 1094
- **Type:** VALUE
- **Exact text:** "3-4 components/viewport [Expert] ... 2 components/viewport [General]"
- **Actionable implication:** Expert readers can handle 3-4 components per viewport while general readers need only 2 — this determines layout density.

### ITEM 87
- **Diagram:** 14
- **Line range:** 1095
- **Type:** VALUE
- **Exact text:** "Compound grids [Expert] ... Simple stacks [General]"
- **Actionable implication:** Expert readers can navigate compound grid layouts while general readers need simple stack layouts — this determines CSS grid vs flexbox column approach.

### ITEM 88
- **Diagram:** 14
- **Line range:** 1097-1099
- **Type:** DECISION
- **Exact text:** "AXIS 3 Progressive Disclosure"
- **Actionable implication:** Axis 3 is Progressive Disclosure — how much content is shown vs hidden — and is the third reader-model dimension to assess.

### ITEM 89
- **Diagram:** 14
- **Line range:** 1098
- **Type:** VALUE
- **Exact text:** "None (show everything) [Expert] ... Collapsible sections [General]"
- **Actionable implication:** Expert readers prefer all content visible at once while general readers benefit from collapsible sections — this determines use of details/summary elements.

### ITEM 90
- **Diagram:** 14
- **Line range:** 1099
- **Type:** VALUE
- **Exact text:** "Trust reader to scan [Expert] ... Flag key points [General]"
- **Actionable implication:** Expert readers can be trusted to scan for relevant content while general readers need key points flagged — this determines callout/highlight usage.

### ITEM 91
- **Diagram:** 14
- **Line range:** 1101-1103
- **Type:** DECISION
- **Exact text:** "AXIS 4 Navigation Complexity"
- **Actionable implication:** Axis 4 is Navigation Complexity — how much wayfinding infrastructure is provided — and is the fourth reader-model dimension to assess.

### ITEM 92
- **Diagram:** 14
- **Line range:** 1102
- **Type:** VALUE
- **Exact text:** "Optional TOC [Expert] ... Mandatory TOC + map [General]"
- **Actionable implication:** Expert readers need only an optional table of contents while general readers need mandatory TOC plus a visual map — this determines navigation component inclusion.

### ITEM 93
- **Diagram:** 14
- **Line range:** 1103
- **Type:** VALUE
- **Exact text:** "Expert scrolls linearly ... Reader needs wayfinding"
- **Actionable implication:** Expert readers navigate by linear scrolling while general readers need explicit wayfinding aids — this determines whether to include progress indicators, section links, etc.

### ITEM 94
- **Diagram:** 14
- **Line range:** 1105-1107
- **Type:** DECISION
- **Exact text:** "AXIS 5 Entry Velocity"
- **Actionable implication:** Axis 5 is Entry Velocity — how quickly the reader reaches the payload content — and is the fifth and final reader-model dimension to assess.

### ITEM 95
- **Diagram:** 14
- **Line range:** 1106
- **Type:** VALUE
- **Exact text:** "Minimal header (skip to payload) [Expert] ... Expansive header [General]"
- **Actionable implication:** Expert readers want minimal headers that get to content quickly while general readers need expansive headers with context — this determines header component size.

### ITEM 96
- **Diagram:** 14
- **Line range:** 1107
- **Type:** VALUE
- **Exact text:** "30-50% less header height [Expert] ... Full orientation context [General]"
- **Actionable implication:** Expert reader headers should be 30-50% shorter than general reader headers — this is a quantitative CSS parameter adjustment for header sizing.

### ITEM 97
- **Diagram:** 14
- **Line range:** 1111
- **Type:** WARNING
- **Exact text:** "Content says: 'Stage 7+' (EXPERT reader)"
- **Actionable implication:** Gas Town's content explicitly signals an expert reader audience ("Stage 7+") — the content provided reader-profile information that the pipeline failed to use.

### ITEM 98
- **Diagram:** 14
- **Line range:** 1112
- **Type:** WARNING
- **Exact text:** "CSS says: line-height 1.7, padding 64px, no TOC = GENERAL reader treatment"
- **Actionable implication:** Gas Town's CSS applied general-reader parameters (1.7 line-height, 64px padding, no TOC) despite the content signaling an expert audience — this is the specific mismatch.

### ITEM 99
- **Diagram:** 14
- **Line range:** 1115-1116
- **Type:** WARNING
- **Exact text:** "The pipeline had NO mechanism to translate the explicit 'Stage 7+' audience signal into CSS parameter adjustments."
- **Actionable implication:** The pipeline v2 completely lacked audience-to-CSS translation — this mechanism must exist in pipeline v3.

### ITEM 100
- **Diagram:** 14
- **Line range:** 1118
- **Type:** PROCESS
- **Exact text:** "Pipeline v3 fix: Phase 0 Content Analyst outputs reader profile (~15 lines)."
- **Actionable implication:** Pipeline v3 Phase 0 must include a Content Analyst who produces a reader profile output of approximately 15 lines.

### ITEM 101
- **Diagram:** 14
- **Line range:** 1119
- **Type:** PROCESS
- **Exact text:** "Brief Assembler merges into Tier 3."
- **Actionable implication:** The reader profile produced by the Content Analyst must be merged into Tier 3 of the activation brief by the Brief Assembler.

### ITEM 102
- **Diagram:** 14
- **Line range:** 1118-1119
- **Type:** AGENT_ROLE
- **Exact text:** "Phase 0 Content Analyst outputs reader profile (~15 lines). Brief Assembler merges into Tier 3."
- **Actionable implication:** Two specific agent roles are defined: (1) Content Analyst in Phase 0 who produces the reader profile, and (2) Brief Assembler who integrates it into Tier 3 of the brief.

---

# EXTRACTION SUMMARY

**Total items extracted: 102**

**By diagram:**
- Diagram 12: 27 items (ITEMS 1-27)
- Diagram 13: 48 items (ITEMS 28-75)
- Diagram 14: 27 items (ITEMS 76-102)

**By type:**
- DECISION: 29
- VALUE: 41
- THRESHOLD: 5
- PROCESS: 7
- WARNING: 5
- RECOMMENDATION: 1
- FILE_REF: 3
- AGENT_ROLE: 1

**Key architectural items requiring pipeline v3 implementation:**
1. Value vs Relationship propagation distinction (ITEM 2, 20, 21)
2. Disposition D-02 replacing thresholds with perceptual instructions (ITEM 24)
3. Three dimensions of scroll rhythm: height, density, transitions (ITEM 32, 33, 48, 63)
4. Five reader model axes with CSS parameter mappings (ITEMS 81-96)
5. Phase 0 Content Analyst producing density arc + reader profile (ITEMS 69, 100)
6. Phase 1 brief including density arc (ITEM 70)
7. Dispositions D-05 and D-06 for temporal awareness (ITEMS 71, 72)
8. Phase 3 PA auditor checking transition variety (ITEM 73)
9. Brief Assembler merging reader profile into Tier 3 (ITEM 101)
10. Opus builder requirement for native relationship generation (ITEM 25)
