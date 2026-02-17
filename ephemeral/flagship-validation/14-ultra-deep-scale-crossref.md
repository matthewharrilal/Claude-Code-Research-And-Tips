# Ultra-Deep Scale Research Cross-Reference

**Validator:** scale-crossref-agent (Opus 4.6, Task #26)
**Date:** 2026-02-17
**Method:** Line-by-line cross-reference of ALL 6 scale exploration reports + memory/scale-research.md against the enriched prompt's scale rules
**Source documents:**
- `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines)
- `ephemeral/ceiling-experiment/_scale-exploration/01-beyond-five-scales.md` (405 lines)
- `ephemeral/ceiling-experiment/_scale-exploration/02-alternative-mental-models.md` (410 lines)
- `ephemeral/ceiling-experiment/_scale-exploration/03-diminishing-returns.md` (758 lines)
- `ephemeral/ceiling-experiment/_scale-exploration/04-showcase-archaeology.md` (267 lines)
- `ephemeral/ceiling-experiment/_scale-exploration/05-cross-domain-theory.md` (466 lines)
- `ephemeral/ceiling-experiment/_scale-exploration/06-adversarial-anti-scale.md` (431 lines)
- `memory/scale-research.md` (92 lines)

**Rating key:**
- **COVERED:** Finding is captured by one or more specific prompt rules with adequate fidelity
- **PARTIAL:** Finding's core idea is present but important nuance, evidence, or specificity is lost
- **MISSING:** Finding has no corresponding prompt rule; potential gap

---

## SECTION 1: Report 01 -- Beyond Five Scales (01-beyond-five-scales.md)

### 1.1 Framing Observations

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 9-11 | Current 5 scales are ALL spatial zoom levels on a single axis | SC-01 ("Maximum 5 scales") | PARTIAL | SC-01 caps at 5 but does not explicitly note the spatial-only limitation; the prompt does not name the 5 existing scales |
| 11-18 | The 5 scales defined as: Navigation (1440px), Page (960px), Section (200-400px), Component (40-100px), Character (12-20px) | No explicit enumeration | MISSING | The prompt references "scales" abstractly but never names or defines them. Builders may not know what Navigation vs Page scale means |
| 20-24 | Three unexplored axes: sub-character, super-navigation, non-spatial | SC-02 mentions 7 channels; SC-03 references richness matrix (5x7) | PARTIAL | Channels capture some non-spatial axes but the distinction between "scales" and "channels" is not made explicit in the prompt |

### 1.2 Scale 6: Glyph (Sub-Character)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 29-44 | Glyph scale = kerning, letter-spacing, punctuation weight at sub-character level | None | COVERED (implicitly) | Not mentioned because report recommends "Do Not Pursue" -- no prompt rule needed |
| 46-47 | Coherence at glyph level means letter-spacing progression echoes border-weight hierarchy | SC-07 (Scale Coherence Index: same design principle at >= 3 scales) | PARTIAL | SC-07 would detect this if it occurred, but glyph-level is not a named scale |
| 50-51 | Richness gain ~0.5-1%, cost EXTREME | No rule needed | COVERED (by omission) | Correctly excluded from prompt due to negligible ROI |
| 58 | Agent compliance for glyph: near-zero | Implicit in SC-01 cap of 5 | COVERED | The 5-scale cap prevents glyph pursuit |
| 60-67 | PA verdict: subliminal, not visible in cold-look screenshots | No rule | COVERED (by omission) | Correctly excluded; PA methodology cannot detect it |

### 1.3 Scale 7: Temporal (Non-Spatial)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 70-99 | Temporal scale = scroll animations, hover transitions, easing curves, timing coherence | None | COVERED (by omission) | Report recommends "Do Not Pursue" until temporal identity defined |
| 91-92 | Richness gain 2-4%, cost HIGH | No rule needed | COVERED (by omission) | |
| 100 | Soul has NO position on animation; would need to answer "What does KortAI motion feel like?" | No prompt rule on animation | COVERED (by omission) | Report correctly flags this as prerequisite; prompt correctly excludes temporal scale |
| 104-112 | Temporal scale invisible to screenshot-based PA audit; requires live interaction or video audit | No PA methodology expansion | COVERED (by omission) | Correct exclusion since current PA is screenshot-based |

### 1.4 Scale 8: Cross-Page (Super-Navigation)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 116-157 | Cross-page coherence = site-level patterns, inter-page density progression | None | COVERED (by omission) | Report recommends future investigation when multi-page migration begins (Phase H/I); single-page prompt correctly excludes |
| 140-142 | Richness gain 3-5%, requires "site-level composition plan" | No rule | COVERED (by omission) | Current pipeline builds single pages |
| 150 | Current tier model provides SOME cross-page coherence by standardizing mechanism counts | C-01 (per-category minimums), C-02 (mechanism target 12-14) | PARTIAL | The tier model's implicit cross-page benefit is not acknowledged in prompt, but this is a pipeline-level concern, not a per-page prompt concern |

### 1.5 Scale 9: State (Interactive)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 164-204 | State scale = hover, active, expanded states using same mechanism vocabulary | None | COVERED (by omission) | Report recommends investigation "when design system adds interactive components"; current system produces static HTML |
| 183-185 | Richness gain 2-3%, cost MODERATE, reuses existing mechanisms | No rule | COVERED (by omission) | Correctly deferred |
| 192 | Key insight: "surprisingly TRACTABLE because it reuses existing mechanisms" | No rule | COVERED (by omission) | Future consideration, not current scope |

### 1.6 Scale 10: Semantic Density (Non-Spatial)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 208-245 | Semantic density = visual weight proportional to content importance; mechanism count per element tracks semantic importance | C-18 (density arc: peak not first), C-09 (designed moments per quartile), S-15 (zone count ceiling by word count) | PARTIAL | The concept of "more mechanisms = more important content" is not explicitly stated. C-18 requires density variation but not importance-proportional density. The semantic density CONCEPT is missing as a named principle |
| 226-228 | Richness gain 3-5%, highest ROI beyond original 5 | No specific rule | MISSING | Semantic density is the report's #1 recommendation for adoption but has no corresponding prompt rule |
| 229-230 | Transforms page from document into "visual priority map" -- readers "scan by visual weight" | A8 (Reader Journey), C-09 | PARTIAL | Reader journey is about scroll acts, not visual weight scanning |
| 236-237 | "This is a judgment rule, not a binary rule" -- per project finding, ~0% agent compliance | Acknowledged in prompt design philosophy (binary rules, zero judgment language) | COVERED (implicitly) | The prompt's binary-rules-only approach is a deliberate response to this limitation. Semantic density is correctly excluded as non-binarizable |
| 240-244 | PA auditors WOULD notice semantic density failures as PA-04 (hierarchy) or PA-05 (PROPORTIONATE) | PA routing in B9 | COVERED | PA-05's PROPORTIONATE sub-criterion captures this |

### 1.7 Analysis Findings

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 265-270 | Finding 1: Spatial axis essentially exhausted; future gains are non-spatial | SC-01 (cap 5), SC-02 (channels) | COVERED | SC-02's channel requirement operationalizes this finding |
| 273-283 | Finding 2: Three highest-leverage unexplored scales are non-spatial (Semantic Density > State > Cross-Page) | SC-02 (channel coverage >= 5 of 7) | PARTIAL | Channels partially capture non-spatial richness but the specific ranked ordering is not reflected |
| 284-291 | Finding 3: PA methodology has blind spots for Temporal and Cross-Page scales | No PA expansion rules | COVERED (by omission) | Correctly deferred since those scales are not pursued |
| 292-302 | Finding 4: Scale 10 (Semantic Density) already partially present through border-weight gradient and confidence encoding | C-01 (per-category minimums including Hierarchical), mechanism catalog | PARTIAL | The implicit presence is not called out. Missing: "multi-mechanism density mapping" (critical elements should use MORE mechanisms) |
| 303-313 | Finding 5: Reproducibility cliff is real -- cost increases exponentially beyond Scale 5 | SC-01 (cap 5), A3 (empirical warning about Middle vs Ceiling PA-05) | COVERED | The prompt's scale cap and PA-05 priority correctly operationalize this |

### 1.8 Recommendations

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 320-333 | Promote Semantic Density to "5+1 scales" model with density check protocol | No explicit rule | MISSING | Report's top recommendation not adopted; however, the concept may be too judgment-dependent for binary encoding |
| 322 | Semantic Density operates AT EVERY spatial scale simultaneously -- it is a LENS, not a zoom level | No rule | MISSING | This conceptual framing would help builders understand the distinction |
| 332 | Proposed binary gate: "Does the most important element on the page use the most mechanisms? YES/NO" | No rule | MISSING | This IS binarizable and could be added to builder self-check |
| 336-338 | Scale 9 (State): investigate when interactive components arrive | No rule | COVERED (by omission) | Correctly deferred |
| 339-340 | Scale 8 (Cross-Page): investigate when multi-page migration begins | No rule | COVERED (by omission) | Correctly deferred |
| 342-344 | Scale 7 (Temporal): Do not pursue until temporal identity established | No rule | COVERED (by omission) | |
| 345-347 | Scale 6 (Glyph): Do not pursue; ROI does not justify cost | SC-01 (cap 5) | COVERED | |

### 1.9 Deep Question and Reframing

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 348-383 | "Scale" is the wrong word for non-spatial dimensions; better model = "Coherence Dimensions" with 5 types: Spatial, Temporal, Scope, State, Semantic | SC-01 through SC-08 use "Scale-Channel" framing | PARTIAL | The prompt's B5 section header is "SCALE-CHANNEL" which partially captures the scales-vs-channels distinction, but the "Coherence Dimensions" reframing is not adopted |
| 380-383 | Reframing changes question from "how many scales?" to "how many coherence dimensions?" | SC-02 (channel coverage) | PARTIAL | SC-02 requires >= 5 of 7 channels, which is the channel-width question. But it doesn't frame it as "coherence dimensions" |

### 1.10 Scale Interaction Matrix

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 388-401 | Non-spatial scales are mostly INDEPENDENT; richness gains stack additively | No rule | MISSING | This finding about additive stacking would inform channel selection but has no prompt rule |
| 390-398 | Specific reinforcing pairs: Page+Semantic Density, Component+State, Section+Temporal, Temporal+State | MC-02 (reinforcing pairs) | PARTIAL | MC-02 requires reinforcing pairs but only for mechanisms, not scale-scale interactions |

---

## SECTION 2: Report 02 -- Alternative Mental Models (02-alternative-mental-models.md)

### 2.1 Seven Alternative Models

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 9-16 | Spatial zoom model assumes richness is structural, observed at rest; alternative: richness lives in non-spatial dimensions | A3 (Anti-Scale Model), SC-02 (channels) | COVERED | A3 explicitly addresses this; SC-02 operationalizes the channel alternative |

### 2.2 Model 1: Temporal Metabolism

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 22-56 | Page has 4 temporal layers: Flash (0-100ms), Scan (1-5s), Read (30-300s), Return (days+); richness = deliberate design across all 4 | A8 (Reader Journey as 5-act story) | PARTIAL | A8 captures the READ and SCAN layers through the 5-act scroll story. But the Flash (first impression) and Return (memory anchors) layers are only partially captured. A8's Act 1 addresses first impression but not at the 0-100ms visceral level |
| 29-37 | Temporal metabolism example: dark header communicates authority in 0-100ms before reading; density variation entrains cognitive metabolism | A1 (Thesis: 5-second test), S-03 (header proportion) | COVERED | The 5-second test in A1 and the header proportion rule capture the flash/scan layers |
| 44-49 | Measurement: count temporal layers with deliberate design (0-4 score) | No measurement rule | MISSING | The 4-layer temporal model has no corresponding measurement in the prompt |

### 2.3 Model 2: Semantic Resonance Field

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 59-101 | Richness = CSS channels encoding same semantic per transition; harmony metaphor (chord vs individual notes) | MC-02 (reinforcing pairs), MC-01 (CCS >= 0.30), A5 (Compositional Fluency: REINFORCING type) | COVERED | The multi-coherence rules directly capture the semantic resonance concept. MC-02's reinforcing pairs = resonance. CCS score quantifies it. A5 names the 5 interaction types |
| 72-81 | Low resonance (1 channel per transition) vs high resonance (4-5 channels per transition) | MC-02 (>= 3 reinforcing pairs for Flagship), MC-07 (cross-dimension coherence >= 10 of 15 pairs) | COVERED | MC-07 specifically requires cross-dimension coupling |
| 82-98 | Measurement: average channel count per semantic transition; score 1.0-5.0 | No explicit measurement | PARTIAL | MC-01's CCS score partially captures this but measures mechanism pairs, not channel-count-per-transition |

### 2.4 Model 3: Narrative Arc

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 105-143 | Page as story with exposition, rising action, climax, falling action, denouement; visual intensity tracks content importance | A8 (Reader Journey 5-act story), C-18 (density arc: peak not first) | COVERED | A8's 5-act structure directly maps to narrative arc. C-18 ensures the density variation follows a dramatic shape |
| 111-121 | Concrete example: API migration guide with sparse opening -> dense middle -> maximum-intensity climax -> breathing resolution -> quiet footer | A8 acts map: Act 1 (Confidence+Orientation) -> Act 2 (Exploration) -> Act 3 (Deep Dive) -> Act 4 (Resolution) -> Act 5 (Conclusion) | COVERED | Near-perfect mapping between the model and A8 |
| 124-138 | Measurement: correlation between visual intensity and content importance (0-1.0) | No explicit measurement | PARTIAL | The prompt requires density variation (C-18) and designed moments (C-09) but doesn't quantify the visual-intensity-to-content-importance correlation |

### 2.5 Model 4: Materiality Gradient

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 148-185 | Elements on spectrum from ethereal (barely visible) to monumental (landmark); richness = full range deployed with semantic intention | SC-02 (channel coverage), C-08 (reinforcing pairs), A2 (Tensions: Density = Restrained NOT Empty) | PARTIAL | The materiality gradient concept is partially captured through mechanism diversity requirements but not as a named principle. The "ethereal to monumental" range is not explicitly required |
| 166-179 | Measurement: materiality range (1-10) and distribution (clustered vs continuous) | No measurement | MISSING | No prompt rule measures whether the full materiality range is deployed |
| 180-185 | Richest pages: materiality gradient MAPS ONTO spatial scales (higher zoom = heavier materiality) | SC-07 (Scale Coherence Index: same principle at >= 3 scales) | PARTIAL | SC-07 checks for coherent principle across scales but doesn't specifically require materiality-to-scale mapping |

### 2.6 Model 5: Cognitive Scaffolding

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 189-225 | Page as teaching machine: recognition -> comprehension -> synthesis -> insight; richness = scaffolded cognitive transitions | C-15 (intentionality dimensions: pedagogical sequencing), C-07 (bridge transitions with cognitive-reframe prose) | COVERED | C-15 explicitly includes "pedagogical sequencing" as an intentionality dimension. C-07 requires bridge transitions with cognitive-shift prose |
| 198-203 | Concrete example: familiar code (recognition) -> callout "notice the problem?" (comprehension) -> diagram (synthesis) -> reframing summary (insight) | C-15, C-17 (>= 2 bridge transitions with cognitive-shift prose) | COVERED | The cognitive scaffolding stages map to bridge transitions and intentionality |
| 206-216 | Measurement: 0-5 scaffold types present, plus whether transitions between types are visually marked | C-15 (>= 3 of 6 dimensions), C-17 (>= 2 bridges) | PARTIAL | The measurement counts scaffold types, but the prompt counts intentionality dimensions more broadly |

### 2.7 Model 6: Systemic Gravity

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 229-264 | Inter-page relationship density: navigation links, cross-references, visual family resemblance, structural echoing | None | COVERED (by omission) | Correctly excluded; current scope is single-page production. Report notes this is "most clearly orthogonal to spatial zoom" and requires multi-page context |

### 2.8 Model 7: Emotional Topology

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 269-309 | Emotional micro-climates along scroll path: gravitas, reassurance, focus, urgency, satisfaction; richness = variety + semantic fit of emotional registers | A2 (Tensions table), A8 (Reader Journey), A1 (Warm. Authoritative. Unhurried.) | PARTIAL | A1 and A2 establish the emotional identity (warm, authoritative, not soft, not cold). A8's 5-act structure implies emotional variation. But the specific requirement for 4-6 distinct emotional registers along the scroll is not captured as a rule |
| 288-301 | Measurement: count distinct emotional registers (1-6), evaluate transitions and semantic fit | No measurement | MISSING | No prompt rule quantifies emotional register count or transition quality |

### 2.9 Synthesis: Seven-Dimensional Richness Space

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 313-327 | Seven richness dimensions: Spatial Zoom, Temporal Metabolism, Semantic Resonance, Narrative Arc, Materiality Gradient, Cognitive Scaffolding, Systemic Gravity, Emotional Topology | SC-02 (7 channels: chromatic, typographic, spatial, structural, density, rhythmic, intentional) | PARTIAL | The prompt's 7 channels partially overlap with the 7 richness dimensions but are NOT the same taxonomy. The prompt's channels are CSS-property-based; the models are experiential. The mapping: chromatic~materiality, typographic~materiality, spatial~spatial zoom, structural~spatial zoom, density~narrative arc, rhythmic~temporal metabolism, intentional~cognitive scaffolding. Semantic resonance and emotional topology have no channel equivalent |
| 329-336 | Current system already uses several models implicitly (multi-channel encoding = resonance, CRESCENDO = narrative arc) | A5 (Compositional Fluency), A7 (CD-006 exemplar), A8 (Reader Journey) | COVERED | The prompt captures these implicitly through conviction layer examples |
| 338-364 | Richness is a VECTOR not a SCALAR; tier model should measure "dimensions active" not "scale count" | SC-01-08 section treats scales and channels | PARTIAL | The prompt's Scale-Channel section moves toward vector richness but still uses mechanism count and scale count as primary metrics. The "dimensions active" reframing is not adopted |
| 347-364 | Alternative tier model: Floor=1-2 dimensions, Middle=3-4, Ceiling=5-6, Flagship=all 7 | No rule | MISSING | This alternative tier framework is not reflected in the prompt |

### 2.10 Independence Tests

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 370-397 | All 7 models pass Test 1 (can produce richness spatial zoom cannot detect); most pass Test 2 (independent from each other) with partial overlaps | SC-02 channels | PARTIAL | The prompt acknowledges channel independence through SC-04 (no single channel > 40%) but doesn't capture the independence between richness models |
| 393-397 | Strongest orthogonal pairs: Spatial+Gravity, Temporal+Materiality, Scaffolding+Emotional | No rule | MISSING | These orthogonal relationships have no corresponding prompt guidance |

---

## SECTION 3: Report 03 -- Diminishing Returns (03-diminishing-returns.md)

### 3.1 Curve Analysis

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 14-20 | Raw tier data: Floor 0 scales/30% richness, Middle 2/62.5%, Ceiling 4/87.5%, Flagship 5/96.5%, Showcase 5+iter/100% | A3 (empirical warning), SC-01 (max 5 scales, preferred 2-3) | COVERED | The prompt captures the tier progression and the preference for fewer scales |
| 24-54 | Richness curve is LOGARITHMIC (concave down): 16.25%/scale -> 12.5% -> 9.0% -> diminishing through iteration | A3 ("More scales did NOT produce better design") | COVERED | A3's empirical warning directly captures the diminishing returns finding |
| 56-98 | Reproducibility curve is ACCELERATING loss: 5%/scale -> 12.5% -> 20% per scale | Implicit in SC-01 cap and A3 warning | PARTIAL | The specific reproducibility numbers are not in the prompt, but the policy consequence (cap at 5, prefer 2-3) is |
| 100-139 | Build time curve is EXPONENTIAL: 17.5 min/scale -> 52.5 -> 145 | No specific rule | MISSING | Build time economics are not captured in the prompt. This matters for process planning but not for builder execution |
| 140-170 | CSS complexity is SUPER-LINEAR: 100 lines/scale -> 225 -> 400; LLM context wall at ~800-1000 CSS lines | No specific rule | MISSING | The CSS complexity ceiling is not reflected in prompt rules; however, builder prompt length cap (P-07: <= 75 lines) indirectly limits CSS ambition |
| 172-183 | Summary: "Chasing logarithmic benefit with exponential costs" = textbook diminishing returns | A3, SC-01 | COVERED | The prompt policy correctly responds to this finding |

### 3.2 Inflection Points

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 189-197 | Inflection Zone 1 at Scale 2 (Middle): largest absolute richness gain, threshold from "formatted" to "designed" | SC-01 (preferred 2-3) | COVERED | The "preferred 2-3" guidance captures this inflection |
| 197 | Middle experiment evidence: 2 scales sufficient for PA-05 4/4 DESIGNED | A3 (cites Middle 2 scales PA-05 4/4 vs Ceiling 4 scales 1.5/4) | COVERED | Explicitly cited in A3 |
| 199-211 | Inflection Zone 2 at Scale 5 (Flagship): curve nearly flat, +145 min for 9% gain; reproducibility cliff at 4->5 scales (60%->40%) | SC-01 (max 5), A3 warning | COVERED | |
| 213-224 | Build time "Context Wall" at ~800 CSS lines: builder degrades from "compositional fluency" to "mechanism enumeration" | No specific rule | PARTIAL | The prompt doesn't name the context wall but its consequences are addressed through mechanism caps (C-02: 12-14, hard cap 16) and viewport density limits (C-03: <= 4 operating per viewport) |
| 220-223 | At 850 CSS lines (Ceiling), 14 mechanisms PRESENT but only 1 PERCEPTUALLY VISIBLE -- context management failure | A6 ("Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived.") | COVERED | Directly cited in A6 as an experiential law |

### 3.3 Perception Threshold

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 248-260 | Blind novelty data: Middle 2/9 NOT NOVEL, Variant B 6/9 NOVEL, Ceiling 9/9 STRONGLY NOVEL | Not directly referenced | PARTIAL | The prompt cites PA-05 comparisons but not the novelty scores |
| 264-293 | Cross-domain perception thresholds: audio (16-bit/44.1kHz), image (300 DPI), typography (optical sizes), architecture (detail levels) all converge on ~85-90% as perception ceiling | No cross-domain evidence | MISSING | The cross-domain evidence base is not cited in the prompt. However, the POLICY conclusion (cap 5, prefer 2-3) correctly operationalizes this finding |
| 314-326 | Five richness tiers with perception labels: 30%=Formatted, 62.5%=Designed, 87.5%=Atmospheric, 96.5%=Artisanal, 100%=Perfect | No tier labels | MISSING | These perception-quality labels are not in the prompt. They would help builders understand what each tier FEELS like |
| 321-325 | "The perception threshold IS the Ceiling tier. Everything beyond it is optimization for the optimizer, not for the reader." | A3 ("If maintaining 4-scale coherence requires sacrificing spatial proportion, REDUCE to 2-3 scales immediately. PA-05 > scale count.") | COVERED | A3's guidance prioritizes PA-05 over scale count, which operationalizes this finding |

### 3.4 Execution Ceiling

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 333-350 | Ceiling experiment: 9/9 novelty + 8/8 soul + 14 mechanisms deployed, BUT container width violated + 70-80% whitespace void + only 1/14 mechanisms perceptually visible | A6 (all 6 experiential laws), S-01 (container width), S-12 (viewport content coverage) | COVERED | The prompt's experiential laws and spatial rules directly address every failure mode |
| 348-349 | "The builder could ENUMERATE mechanisms but could not COMPOSE them" | A6 ("Designed MOMENTS are not designed COMPOSITION") | COVERED | Directly captured |
| 355-361 | Extrapolations: 6 scales = context collapse, mechanism conflicts; 7 = beyond single-agent; 8+ = theoretical | SC-01 (cap 5, "NEVER target 6+ scales") | COVERED | The hard cap prevents these scenarios |
| 363-376 | Container width violation as predictor: 80% failure at 2-4 scales, 100% at 4 scales, 0% at 2 scales | S-01 (container 940-1100px, first FAIL-IF rule) | COVERED | Container width is the prompt's #1 spatial rule for this reason |
| 375-376 | "Execution ceiling is at 2-3 scales for reliable, single-pass LLM execution" | SC-01 (preferred 2-3) | COVERED | |

### 3.5 Investment Distribution

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 379-476 | Optimal 100hr/50page distribution: 40 Middle + 8 Ceiling + 2 Flagship (Option D); creates graduated hierarchy | No distribution rules | MISSING | The prompt is per-page, not portfolio-level. Distribution strategy is a planning concern, not a builder concern. Correctly absent from execution prompt |
| 437-462 | Content type determines tier: prose-dominant conceptual pages = Ceiling; anchor content = Flagship; everything else = Middle | P-01 (Content inventory BEFORE metaphor derivation) | PARTIAL | P-01 requires content inventory but doesn't explicitly map content type to tier selection |

### 3.6 Paradox of Maximum Richness

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 480-505 | DD-006 richness was INHERITED from 5 prior explorations, not SPECIFIED; CD-006 inherited 88 findings from 24 prior explorations | A4 (Dual Richness Sources), A6 ("Concept quality does NOT predict product quality") | PARTIAL | A4 distinguishes Constraint Pressure (automatic) from Design Intelligence (requires Opus agents). But the "inheritance through iteration" mechanism is not named |
| 506-536 | "Maximum richness is EMERGENT from iteration, not DESIGNED from specification"; formal statement: Richness = f(iteration_depth x constraint_quality), NOT f(scale_count x mechanism_count) | A6 ("Accidental constraint outperforms intentional permission every time"), P-08 (spatial re-check after Pass 2) | PARTIAL | The prompt has multi-pass architecture (Passes 0-4) which enables iteration. But the FORMAL STATEMENT that richness = f(iteration x constraint) is not captured. The prompt's structure IS the answer (multi-pass enables iteration) without explicitly stating why |
| 520-543 | Optimal path: build at 2-4 scales, audit, fix spatial composition, add targeted scale depth, iterate, stop at ~87.5% | Gate sequence (C3: Gates 0-5), P-08 (spatial re-check), multi-pass architecture (C1) | COVERED | The gate sequence and multi-pass architecture operationalize this iterative approach |
| 533 | "Richness = f(iteration_depth x constraint_quality), NOT f(scale_count x mechanism_count)" | No explicit formula | PARTIAL | A3 has the anti-scale formula (Richness = semantic_density x restraint x spatial_confidence) which is the constraint-quality half. The iteration-depth half is operationalized through multi-pass architecture but not stated as a formula |

### 3.7 Three Laws of Scale Economics

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 633-635 | Law 1: Richness grows logarithmically; cost grows exponentially | A3 empirical warning | COVERED | Policy captured; mathematical detail omitted (appropriate for execution prompt) |
| 637-641 | Law 2: Perception threshold at ~85-90% (4 scales, Ceiling) | SC-01 (preferred 2-3), A3 PA-05 priority | COVERED | |
| 643-645 | Law 3: Maximum richness emergent from iteration, not designed from specification | Multi-pass architecture (C1), gate sequence (C3) | COVERED | Operationalized through process design |

### 3.8 Practical Recommendations

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 648-649 | Middle (2 scales) = universal floor | SC-01 (preferred 2-3) | COVERED | |
| 650-652 | Ceiling (4 scales) = standard for important pages, at perception threshold | No tier-selection rule | PARTIAL | Prompt doesn't include tier-selection guidance (appropriate since it's a per-page execution prompt, not a portfolio planner) |
| 653-654 | Flagship (5 scales) = reserved for 2-5 crown jewels | SC-01 (max 5) | COVERED | |
| 655-656 | 6+ scales = NEVER | SC-01 ("NEVER target 6+ scales") | COVERED | Explicit prohibition |
| 658-659 | "Stop optimizing scale depth. Start optimizing iteration depth." | Multi-pass architecture (C1), P-08 (spatial re-check) | COVERED | |

### 3.9 Mathematical Models (Appendix A)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 675-686 | Richness function: R(s) = 30 + 67 * (1 - e^(-0.55s)) with metaphor bonus at 3+ scales | No mathematical model | MISSING | Not needed in execution prompt; the policy consequences are captured |
| 689-699 | Build time function: T(s) = 35 * 2^(0.65s) | No mathematical model | MISSING | Same: policy captured, math unnecessary |
| 701-712 | Reproducibility function: P(s) = 100 - 5s - 2s^2 | No mathematical model | MISSING | Same |
| 714-722 | Crossover point: marginal value drops below 0.1% richness/min at s=5.2 | SC-01 (max 5) | COVERED | The cap operationalizes this |

### 3.10 Iteration Alternative (Appendix B)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 730-740 | Two audit-fix cycles at Ceiling (120 min, 10-18% improvement, 85% reliability) STRICTLY SUPERIOR to adding 5th scale (145 min, 9%, 40% reliability) | Multi-pass architecture (C1), gate sequence (C3) | COVERED | The prompt's multi-pass design IS this recommendation operationalized |
| 742-754 | Recommended iteration protocol: build Ceiling -> Mode 2 audit -> fix top 3 -> audit again -> ship. Total 235 min vs 320 min Flagship single-pass | Gate sequence (C3), staged downgrade at 240 min (C4) | COVERED | C4's staged downgrade at 240 min directly reflects this economics |

---

## SECTION 4: Report 04 -- Showcase Archaeology (04-showcase-archaeology.md)

### 4.1 Scale Mapping

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 14-25 | DD-006 has 4/5 scales (no Navigation -- page too short) | Not referenced | COVERED (by omission) | DD-006's specific scale coverage is forensic detail, not needed in execution prompt |
| 28-39 | CD-006 has 5/5 scales with all explicitly annotated in HTML comments | A7 (CD-006 exemplar), Reference Library (CD-006 in Metaphor Agent reads) | COVERED | CD-006 is referenced as the quality standard |

### 4.2 Six Unmodeled Dimensions

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 47-56 | Dimension 1: Self-Reference ("The page knows what it is") -- DD-006's callout describes itself, CD-006 is "tutorial and proof" | C-15 (intentionality dimensions: self-reference), C-16 (>= 1 self-referential element) | COVERED | C-15 and C-16 explicitly require self-reference |
| 57-63 | Dimension 2: Pedagogical Sequencing -- 4-act learning arc, progressive complexity, dependency ordering | C-15 (intentionality dimensions: pedagogical sequencing), A8 (Reader Journey) | COVERED | Both the intentionality dimension and the reader journey capture this |
| 65-81 | Dimension 3: Cognitive Mode Transitions -- bridge text shifts reader between cognitive modes (Reflecting -> Questioning -> Referencing -> Learning -> Doing -> Verifying -> Deploying -> Reflecting) | C-07 (bridge transitions with cognitive-reframe prose), C-17 (>= 2 bridge transitions), C-15 (cognitive transitions) | COVERED | The bridge transition rules and intentionality dimensions explicitly capture this |
| 84-90 | Dimension 4: Structural Bookending -- S1/S8 both use Spiral/Geological, "same form, different knowledge state" | C-15 (intentionality dimensions: bookending) | COVERED | Bookending is listed as an intentionality dimension |
| 91-97 | Dimension 5: Meta-Annotation -- section labels, axis/density tags, finding references, architecture annotations | C-15 (intentionality dimensions: meta-annotation) | COVERED | Meta-annotation is listed as an intentionality dimension |
| 99-106 | Dimension 6: Provenance Threading -- inline headers, CSS source comments, finding chains, generated findings | C-15 (intentionality dimensions) | PARTIAL | Provenance threading is NOT listed among the 6 intentionality dimensions in C-15 (which lists: self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation). Provenance threading was identified as a 6th dimension but may overlap with meta-annotation |

### 4.3 Richness Quantification

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 109-151 | 5-scale model captures 80-85% of total richness, NOT 95-98%; unmodeled dimensions account for 15-20% | A4 (Dual Richness Sources: Source 1=Constraint Pressure, Source 2=Design Intelligence) | COVERED | A4 explicitly splits richness into two independent sources, capturing the finding that spatial mechanics alone (Source 1) are insufficient |
| 136-148 | Distribution: Self-reference 3-4%, Pedagogical sequencing 4-5%, Cognitive transitions 2-3%, Bookending 1-2%, Meta-annotation 2-3%, Provenance 2-3% | C-15 (>= 3 of 6 dimensions) | PARTIAL | C-15 requires >= 3 dimensions present but doesn't weight them by importance. Pedagogical sequencing (4-5%) is most valuable but counts the same as bookending (1-2%) |
| 149-151 | "Critical test: Build with perfect 5-scale compliance but random ordering, no self-reference, no bridge text = would NOT score 39/40" | A4 ("Source 1 alone = professionally stiff; Source 1 + Source 2 = crown jewel") | COVERED | A4 makes this exact argument |

### 4.4 Iteration Hypothesis (Corrected)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 155-186 | "The iteration hypothesis is WRONG" -- DD-006 and CD-006 were built in single passes; richness comes from design intelligence (content-form alignment, compositional reasoning, relational awareness, meta-cognitive framing), not iteration | A4 (Source 2: Design Intelligence requires Opus-level agents), P-01 (content inventory before metaphor) | COVERED | A4 explicitly requires Opus-level agents for design intelligence. P-01 ensures content-form alignment starts before composition. The multi-pass architecture uses Opus agents for Passes 0 and 3-4 |
| 172-173 | DD-006 richness from: content selection (meta-documentation topic), 4-act arc, bridge transitions, self-referential code | P-01 (content inventory), C-07+C-17 (bridge transitions), C-16 (self-reference), A8 (5-act story) | COVERED | Each specific richness source has a corresponding rule |
| 180-183 | Design intelligence = content-form alignment + compositional reasoning + relational awareness + meta-cognitive framing | A5 (Compositional Fluency), A7 (CD-006 exemplar), C-15 (intentionality dimensions) | COVERED | |

### 4.5 The Missing Dimension: Intentionality

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 192-249 | The unmodeled richness is not a 6th scale but an orthogonal INTENTIONALITY AXIS; correct model = 5 Scales + 1 Axis | C-15 through C-18 (Intentionality section in B3), A4 (Dual Richness Sources) | COVERED | The prompt has an entire Intentionality subsection (C-15 through C-18) that operationalizes this finding. The conviction layer (A4) frames it as Source 2 |
| 208-217 | Intentionality manifests as: Argument (logical progression), Self-awareness (page-subject relationship), Cognitive choreography (mental mode sequences), Structural rhetoric (bookends, echoes), Epistemic grounding (validity demonstration) | C-15 lists: self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation | PARTIAL | 4/5 of the intentionality manifestations map to C-15 dimensions. "Epistemic grounding" maps to provenance/meta-annotation. "Argument" maps to pedagogical sequencing. But "Structural rhetoric" (beyond bookending) and the overall AXIS framing are not in the prompt |
| 235-249 | Tier gap between Ceiling and Flagship is primarily INTENTIONALITY gap, not spatial gap | A4 ("Source 1 alone = professionally stiff") | COVERED | A4 captures this distinction |

---

## SECTION 5: Report 05 -- Cross-Domain Theory (05-cross-domain-theory.md)

### 5.1 Music

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 13-23 | Music has 4 SIMULTANEOUS hierarchical systems (grouping, metrical, time-span, prolongational) not just 1 | SC-02 (channels), MC-07 (cross-dimension coherence) | PARTIAL | The multi-channel concept is captured but the specific insight that hierarchy operates on MULTIPLE INDEPENDENT AXES simultaneously is stronger than what SC-02 conveys |
| 28-37 | Schenker: ALL music reduces to 3 structural levels (foreground, middleground, background); maps to design system: background=identity, middleground=grammar, foreground=pixels | No explicit mapping | MISSING | This 3-level model is elegant and not captured. Would help builders understand that the identity layer (soul), grammar layer (mechanisms), and surface layer (actual CSS) form a complete hierarchy |
| 39-58 | Micropolyphony, stochastic music, total serialism: adding structure beyond perception creates "impenetrable texture" not richness; "perceptual opacity ensures aesthetic inferiority" | A3 (empirical warning), A6 ("Deployment does NOT equal perception") | COVERED | A3 and A6 capture the principle that more structure beyond perception threshold = worse outcomes |
| 53-59 | Perceptual limit for concurrent musical lines: approximately THREE; 48-voice fugue creates texture, not 48 perceived lines | SC-01 (max 5, preferred 2-3) | COVERED | The "preferred 2-3" guidance aligns with the ~3 perceptual limit |
| 61-66 | Scale coherence limited by receiver's perceptual system, not medium's structural capacity | A3, SC-01 | COVERED | |
| 67-71 | Right question: "How many PERCEPTIBLE dimensions of coherence can the listener track simultaneously?" Answer: ~3-4 | SC-01 (preferred 2-3) | COVERED | |

### 5.2 Architecture

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 76-98 | Alexander/Salingaros: scales spaced by factor ~e=2.718; number of scales = ln(largest/smallest) / ln(scaling_factor) | A3 ("Five scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(e) = 4.8)") | COVERED | A3 explicitly cites this formula and its web-specific calculation |
| 99-109 | Alexander's 15 Properties: "Levels of Scale" is #1; also: strong centers, boundaries, echoes, not-separateness | No specific reference | MISSING | The 15 Properties themselves are not referenced in the prompt. "Strong centers" and "echoes" are relevant to mechanism interaction but not named |
| 111-118 | Human scale threshold: detail below ~2-5cm perceived as TEXTURE not STRUCTURE; invisible AS DETAIL but present AS QUALITY | A6 ("Deployment does NOT equal perception"), A3 anti-scale model | PARTIAL | The concept is captured through the deployment-vs-perception principle, but the specific texture-vs-structure threshold is not named |
| 119-122 | "Are ALL scales present and connected?" > "How many scales?" -- gaps between scales worse than missing scales | SC-05 (CDT: each channel at >= 2 scales) | PARTIAL | SC-05 prevents gaps within channels but doesn't address scale CONTINUITY (no missing links between adjacent scales) |

### 5.3 Typography

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 128-139 | 5-6 optical size categories settled by 500 years of practice; variable fonts interpolate but don't add categories | SC-01 (max 5) | COVERED | The convergence on ~5 levels across domains supports SC-01 |
| 140-148 | "Typographic color" is NOT a scale -- it is EMERGENT from one scale viewed at a larger scale; cross-scale emergence | No specific concept | MISSING | The emergence concept (properties appearing at one scale from elements at another) is not captured in the prompt. This is a sophisticated insight about how richness manifests |
| 147-148 | Typography's tools operate independently of size: weight, color, spacing, contrast, texture = CHANNELS not scales | SC-02 (7 channels) | COVERED | SC-02 operationalizes the channels concept |
| 149-156 | Beatrice Warde's "Crystal Goblet": best typography is perceived as QUALITY not DESIGN; mechanisms should be perceived as quality, not mechanisms | A6 ("Deployment does NOT equal perception"), A1 (beauty = confident intention) | PARTIAL | The principle is implicit in the conviction layer but the specific formulation "perceived as quality, not as mechanisms" is a cleaner framing than A6 provides |
| 157-159 | "How many INDEPENDENT CHANNELS of variation can you control?" -- this is the right question | SC-02 (>= 5 of 7 channels) | COVERED | SC-02 directly operationalizes this |

### 5.4 Cinema

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 166-170 | Film: Frame -> Shot -> Scene -> Sequence -> Act -> Film = 6 levels; micro and macro operate semi-independently | A8 (5-act reader journey) | PARTIAL | A8's 5-act structure maps to cinema's act structure but the micro/macro independence is not captured |
| 178-188 | Color grading operates at 5 levels (whole-film, act, scene, shot, character) but these are not 5 INDEPENDENT scales -- they are 5 APPLICATIONS of a single channel at different structural levels | SC-02 through SC-05 | COVERED | The Scale-Channel matrix (SC-03: 5x7 cells) operationalizes this exact concept |
| 189-195 | Mise-en-scene: audiences consciously track ~3 elements per shot; everything else = atmosphere/mood | A3 (anti-scale model), A6 (deployment != perception) | COVERED | |
| 195-196 | Murch's Rule of Six: Emotion (51%) > Story (23%) > Rhythm (10%) > Eye-trace (7%) > 2D Composition (5%) > 3D Space (4%) | D ("The mission is beauty, not compliance") | PARTIAL | The conviction closing captures the emotional-primacy principle but doesn't cite the specific hierarchy |
| 197-199 | Right question: "Does every level serve the emotional through-line?" -- VALUE hierarchy, not SCALE hierarchy | D ("warm, authoritative, unhurried page"), A1 (Thesis) | COVERED | The conviction layer IS the emotional through-line |

### 5.5 Software Architecture

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 206-209 | 7-14 abstraction layers in software; developers work at 1-2 layers at a time | Multi-pass architecture (C1: each pass works on 1 layer) | COVERED | Pass 0=content, Pass 1=skeleton, Pass 2=mechanisms, Pass 3=metaphor, Pass 4=intentionality -- each works at 1 layer |
| 215-219 | Miller's Law (7 +/- 2) applies to items within a level, not to number of levels | C-02 (mechanism target 12-14, cap 16) | PARTIAL | C-02 caps mechanisms within the compositional level but doesn't explicitly cite Miller's Law as the rationale |
| 219-223 | Leaky Abstractions: when an abstraction leaks, developer must reason about BOTH layers simultaneously = cognitive overload | Gate sequence (C3): each gate checks ONLY its pass's concerns | COVERED | The gate sequence prevents cross-pass cognitive overload |
| 224-226 | Essential vs accidental complexity (Brooks): layers should contain essential complexity, not add accidental | P-06 (pattern overhead <= 20% of content height) | PARTIAL | P-06 limits metaphor overhead (accidental complexity from pattern) but the essential/accidental distinction is not named |
| 235-237 | Right question: "How cleanly does each layer hide the ones below it?" -- abstraction integrity, not layer count | Pass architecture (C1) with per-pass gates | COVERED | Each pass has its own gate that checks only its layer's concerns |

### 5.6 Nature/Fractals

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 244-246 | Natural fractals have FINITE scale ranges, unlike mathematical fractals | SC-01 (max 5) | COVERED | |
| 248-264 | Specific natural fractals: bronchial tree 23 levels, blood vessels 15-20, coastlines 4-5 orders, trees 5-8 | Not cited | MISSING | Specific natural examples are not needed in the execution prompt |
| 256-264 | Number of levels DETERMINED by ratio of largest structure to smallest functional unit divided by per-level scaling factor: `scales = ln(largest/smallest) / ln(scaling_factor)` | A3 (cites formula: ln(1440/12)/ln(e) = 4.8) | COVERED | A3 explicitly uses this formula for the web context |
| 268-273 | Scale-free networks are RARE; design systems need DEFINITE scales, not power-law distributions | SC-01 (specific scale cap) | COVERED | The prompt's specific scale rules are the opposite of scale-free |
| 275-288 | Number of scales = emergent consequence of: size of largest structure, size of smallest unit, ratio between adjacent scales | A3 (formula) | COVERED | |

### 5.7 Universal Principles (Synthesis)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 295-308 | Agreement 1: Number of scales is BOUNDED AND DETERMINED | A3, SC-01 | COVERED | |
| 309-319 | Agreement 2: Perceptual ceiling is LOW (~3-5 simultaneously attended scales) | SC-01 (preferred 2-3) | COVERED | |
| 320-328 | Agreement 3: Adding more scales is WRONG optimization after threshold; produces perceptual invisibility, noise, or no change | A3 (empirical warning), A6 | COVERED | |
| 329-343 | Agreement 4: After scale ceiling, productive dimension is CHANNELS not LEVELS -- THE most important cross-domain finding | SC-02 (channel coverage >= 5 of 7) | COVERED | SC-02 directly operationalizes this. The entire B5 section (Scale-Channel) is structured around this finding |
| 344-348 | Agreement 5: Gaps between scales worse than missing scales | SC-05 (CDT: each channel at >= 2 scales) | PARTIAL | SC-05 prevents channel gaps but doesn't address scale gaps |
| 349-358 | Agreement 6: Right number = MINIMUM that spans full range without gaps | SC-01 (max 5, preferred 2-3) | COVERED | |

### 5.8 Application to Design System

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 370-377 | Web: 1440px / 12px = 120; at e-ratio: ln(120)/ln(2.7) = 4.8; five scales is the natural number | A3 (explicit citation) | COVERED | |
| 378-387 | 6th scale possible only by: expanding range upward (multi-page), expanding downward (sub-character), or compressing ratio (splitting existing scale). Option 3 is dangerous | SC-01 ("NEVER target 6+ scales") | COVERED | |
| 389-411 | Productive frontier = adding channels at each existing scale, not adding new scales. The richness space is 5 scales x N channels (matrix, not line) | SC-02 (7 channels), SC-03 (richness matrix 5x7) | COVERED | SC-03's 5x7 richness matrix IS this finding operationalized. The entire Scale-Channel section (B5) is built on this insight |
| 406-411 | "Five scales is not a limitation. It is the natural depth for the web documentation medium." | SC-01, A3 | COVERED | |

---

## SECTION 6: Report 06 -- Adversarial Anti-Scale Thesis (06-adversarial-anti-scale.md)

### 6.1 Thesis: Scales as Proxy Metric

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 12-14 | "Scale depth is INVERSELY correlated with perceptual quality when isolated from the actual driver: compositional RESTRAINT" | A3 (anti-scale model), A6 (accidental constraint > intentional permission) | COVERED | A3 and A6 together capture the anti-scale thesis |
| 19-26 | Measurement fallacy: thematic coherence is a PROPERTY of good writing, not a LEVER you pull; same for scale coherence | A3 (Richness = semantic_density x restraint x spatial_confidence) | COVERED | A3 reframes richness away from scale count |
| 28-33 | "Scales actually measure CONSISTENCY OF EXECUTION"; consistency is necessary but not sufficient; corporate brand guides achieve multi-scale consistency without richness | Not explicitly stated | PARTIAL | The prompt doesn't explicitly distinguish consistency (necessary) from richness (sufficient). The conviction layer (D) implicitly addresses this ("beauty, not compliance") |
| 35-44 | The actual driver: Richness = (meaningful semantic load per CSS decision) x (constraint vocabulary that forces novel expression) | A3 (Richness = semantic_density x restraint x spatial_confidence), A4 (soul closes 55-65% of toolkit) | COVERED | A3 and A4 together capture this formulation |

### 6.2 DD-006/CD-006 Alternative Explanation

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 62-89 | Alternative: DD-006/CD-006 rich due to MAXIMUM CONSTRAINT PRESSURE from soul, not fractal scale depth; soul removes 60% of toolkit, forcing remaining channels to carry 4-5x semantic weight | A4 (Source 1: "Soul prohibitions close ~55-65% of CSS toolkit. Surviving channels carry 4-5x semantic weight.") | COVERED | A4 explicitly quantifies this: "55-65% of CSS toolkit" closed, "4-5x semantic weight" |
| 86-87 | "Fractality is an EMERGENT PROPERTY of constrained semantic expression, not a designed-in feature" | A4 ("Source 1: Automatic from soul compliance") | COVERED | A4 frames constraint-driven richness as "automatic" -- implying emergence |
| 90-96 | "Showcase pages were MORE rigid than pipeline output, not less" -- rigidity research finding; most rigid vocabulary = richest perception | A4, A6 ("Accidental constraint outperforms intentional permission") | COVERED | |

### 6.3 More Scales = Worse Design

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 100-143 | The richness ceiling is 2-3 scales, not 5+; optimal: Scale 1 (page rhythm) + Scale 2 (component expression) + Scale 3 (detail, for ceiling); Scale 4-5 contribute legibility not richness | SC-01 (max 5, preferred 2-3) | COVERED | SC-01's "preferred 2-3" directly captures this recommendation |
| 113-114 | Ceiling's "fractional pixel borders" (0.75px) -- Character scale EXISTS but Mode 4 auditors didn't notice until programmatic audit | A6 ("Deployment does NOT equal perception") | COVERED | |
| 121-131 | Empirical data: Middle 2 scales/PA-05 4/4 vs Ceiling 4 scales/PA-05 1.5/4 -- attention to higher scales came at cost of failure at Scale 1 | A3 ("Middle experiment at 2 scales: PA-05 4/4 DESIGNED. Ceiling experiment at 4 scales: PA-05 1.5/4 DO NOT SHIP.") | COVERED | A3 explicitly cites this comparison with the correct PA-05 scores |
| 132 | "As you add scales, builder's attention budget fragments, and lower scales (which contribute more to perception) degrade" | A3 ("If maintaining 4-scale coherence requires sacrificing spatial proportion, REDUCE to 2-3 scales immediately") | COVERED | A3's conditional REDUCE instruction directly operationalizes this |
| 134-142 | Ceiling's Character-level vocabulary (WS-01, CHECK-01, ZONE labels) perceived as ANNOUNCEMENTS not STRUCTURE; "40% strength without labels" = announcing not structuring | MG-04 ("Remove all labels and titles. Does visual structure alone communicate metaphor? YES=proceed, NO=re-derive") | COVERED | MG-04's label-removal test directly addresses this finding |

### 6.4 Middle vs Ceiling PA-05 Inversion

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 148-152 | 2.5-point PA-05 gap in wrong direction; page with half the scale depth scored nearly three times higher | A3 (empirical warning with both scores) | COVERED | |
| 156-185 | Three reasons "execution error" is insufficient: (1) execution problems ARE the argument -- metaphor structurally required sparse zones; (2) Middle's constraint was its advantage -- simpler model = more attention for spatial proportion; (3) blind comparison confirmed preference | A3 (PA-05 > scale count), A6 (experiential laws) | COVERED | The prompt's PA-05 priority rule and experiential laws capture all three reasons |
| 162-169 | Secure Facility metaphor REQUIRED sparse exterior zones; void was the metaphor's structural obligation faithfully executed | MG-05 (metaphor spatial cost <= 15%), P-05 (zone boundary requires content mass >= 800px) | COVERED | MG-05 and P-05 prevent metaphors from creating excessive void |
| 187-202 | SPATIAL CONFIDENCE: Middle had it, Ceiling lost it; spatial confidence is Scale 1 only; "I chose this proportion" vs "I am lost in this canvas" | A3 (spatial_confidence in formula), S-01+S-02 (container + content-to-void) | COVERED | Spatial confidence is a term in A3's anti-scale formula AND operationalized through spatial rules |

### 6.5 Restraint vs Saturation

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 207-212 | Scale model is additive with no concept of subtraction; fundamentally at odds with design traditions about quality | C-12 (rejection log >= 21 rejected placements), C-13 (>= 2 designed silence zones), C-14 (signal-to-silence ratio 0.6-0.8:1) | COVERED | C-12-C-14 (Restraint subsection) explicitly operationalize the subtraction concept |
| 214-220 | Richness follows concave curve; optimal point = "barely justified" where designer has exactly as needed and CHOSE to exclude next plausible addition | C-12 (rejection log ratio >= 1.5:1 rejected-to-deployed) | COVERED | The 1.5:1 ratio quantifies "barely justified" |
| 235-269 | The anti-scale model: Richness = (semantic density per decision) x (restraint ratio) x (spatial confidence) | A3 (identical formula: "Richness = semantic_density x restraint x spatial_confidence") | COVERED | The prompt's A3 section IS the anti-scale model, adopted verbatim |
| 241-243 | In anti-scale model: adding Scale 6 REDUCES richness (decreases restraint ratio); adding mechanisms beyond content-fit REDUCES richness (dilutes semantic density) | C-02 (mechanism cap 16), SC-01 (scale cap 5), C-12 (restraint ratio) | COVERED | |
| 247 | "Spatial confidence has VETO: no amount of micro-scale coherence rescues a page that fails the squint test" | A3 ("If spatial_confidence = 0, the entire product = 0 regardless of other factors") | COVERED | A3 explicitly states the veto/multiplicative property |
| 255-268 | Middle page's ABSENCE of Scale 4-5 coherence was perceived as RESTRAINT not deficit; "Richness comes from ratio of signal to silence, not from total amount of signal" | C-13 (silence zones), C-14 (signal-to-silence ratio) | COVERED | C-13 and C-14 operationalize signal-to-silence |

### 6.6 Soul vs Scales Tension

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 273-297 | Soul = austerity (narrows, refuses, constraint pressure); Scales = expansion (widens, adds, coverage); fundamental tension | A4 (soul = Source 1, design intelligence = Source 2; both REQUIRED but different) | COVERED | A4's dual-source framework resolves this tension by separating the soul's automatic contribution from scale-dependent design intelligence |
| 298-308 | Scale 6 either: (a) falls outside soul's jurisdiction (adds complexity without identity) or (b) requires soul extension (dilutes soul's minimalism). Both outcomes bad | SC-01 ("NEVER target 6+ scales") | COVERED | The prohibition prevents this problem |
| 310-322 | Ceiling experiment proof: soul compliance 8/8 PERFECT + 4 scales + 14 mechanisms = PA-05 1.5/4; soul survived but scales didn't help | A3, A6, S-01+S-02 | COVERED | |
| 316-318 | "Binary rules (soul) achieve 100% agent compliance; judgment rules (scale coherence) achieve ~0%" | B preamble ("Every rule below is numbered, binary, and verifiable. ZERO judgment language.") | COVERED | The entire Section B design philosophy is built on this finding |

### 6.7 Recommendations

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 365-370 | Replace scale count with: Semantic density per decision, Restraint ratio, Spatial confidence | A3 (anti-scale formula), C-12 (restraint), S-01+S-02 (spatial) | COVERED | All three metrics have corresponding rules |
| 371-374 | Cap active scales at 3: mandate Scale 1-2, permit Scale 3 for ceiling; PROHIBIT Scale 4-5 as mandatory | SC-01 (max 5, preferred 2-3) | PARTIAL | SC-01 allows up to 5 (with 2-3 preferred). The recommendation to PROHIBIT 4-5 as mandatory is more aggressive than the prompt's guidance. Prompt chose moderate position |
| 375-378 | Add "void budget" as hard guardrail: no page may have >15% contentless void | S-10 (no contiguous void > 2160px), S-12 (no viewport < 30% content), S-02 (content-to-void >= 60:40) | COVERED | The prompt has THREE void prevention rules that are MORE comprehensive than the recommended single 15% budget |
| 379-386 | Redefine Ceiling: "metaphor-driven semantic saturation at 2-3 scales with HIGH semantic density, demonstrated restraint, and mandatory PA-05c PROPORTIONATE as gate BEFORE other evaluation" | Gate sequence (C3: Gate 1 spatial confidence before Gates 3-5 composition/metaphor/final) | COVERED | The gate sequence enforces spatial proportion as prerequisite through Gate 1 (spatial) before Gate 3 (composition) and Gate 4 (metaphor) |

### 6.8 Self-Challenge (Weaknesses)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 395-400 | Weakness 1: Ceiling failure was specific execution issues, not structural; metaphor REQUIRED sparse zones was the structural cause | MG-05 (spatial cost <= 15%), P-05 (zone boundary conditions) | COVERED | MG-05 and P-05 prevent metaphors from creating excessive spatial obligations |
| 401-406 | Weakness 2: DD-006 IS genuinely fractal and scored 36/40; needs controlled comparison with non-fractal page under same constraints | No controlled comparison rule | MISSING | This is a research question, not an execution prompt concern |
| 407-412 | Weakness 3: Both Middle and Ceiling are n=1; conclusions are underpowered | No rule | COVERED (by acknowledgment) | A3 says "NEVER target 6+ scales" which is the conservative position given uncertainty |
| 415-421 | Conclusion: Scale model describes CORRELATION not CAUSE; actual cause = vocabulary constraint + spatial confidence + restraint signal | A3 (anti-scale model), A4 (dual richness sources), D (conviction closing) | COVERED | The prompt's conviction layer and anti-scale model together capture this conclusion |

---

## SECTION 7: Memory/Scale-Research.md (Synthesis)

| Line(s) | Finding/Concept | Prompt Rule(s) | Status | Notes |
|----------|----------------|----------------|--------|-------|
| 13-17 | Alexander/Salingaros formula: ln(1440/12)/ln(2.7) = 4.8; confirmed by 3 agents | A3 line 45 | COVERED | Exact citation in prompt |
| 18 | The 5 scales named: Navigation (1440px), Page (960px), Section (200-400px), Component (40-100px), Character (12-20px) | No enumeration | MISSING | Prompt never names or defines the 5 scales |
| 22-23 | Anti-scale thesis: "Scales measure a SIDE EFFECT of richness, not its cause" | A3 anti-scale model | COVERED | |
| 25-27 | Alternative model: Richness = semantic_density x restraint x spatial_confidence | A3 (identical formula) | COVERED | Verbatim in prompt |
| 29-32 | Where-definitions: semantic density = meaning per CSS choice forced by soul; restraint = rejected-to-accepted ratio; spatial confidence = squint test pass | A3, A4 (soul closes 55-65%), C-12 (restraint ratio >= 1.5:1) | COVERED | |
| 34 | Smoking gun: Middle 2 scales PA-05 4/4; Ceiling 4 scales PA-05 1.5/4 | A3 explicit citation | COVERED | |
| 36 | "Fractality is EMERGENT from constraint pressure, not designed-in" | A4 (Source 1: "Automatic from soul compliance") | COVERED | |
| 38 | "Richness comes from the ratio of signal to silence, not from the total amount of signal" | C-14 (signal-to-silence ratio 0.6-0.8:1) | COVERED | |
| 40 | Self-rated confidence: 7/10 with n=1 caveat and DD-006 counterexample | No rule | N/A | Epistemic caveat, not an actionable finding |
| 44-53 | Grand Synthesis: 7 convergent findings with confidence ratings | A3, SC-01, SC-02 | COVERED (see below) | |
| 44-F1 | Finding 1: 5 scales is natural ceiling | A3 (formula), SC-01 (cap 5) | COVERED | |
| 44-F2 | Finding 2: Beyond 5, add CHANNELS not LEVELS | SC-02 (>= 5 of 7 channels) | COVERED | |
| 44-F3 | Finding 3: Unmodeled richness orthogonal to spatial zoom | C-15 (intentionality), A4 (Source 2) | COVERED | |
| 44-F4 | Finding 4: Scale model measures side effect, not cause | A3 (anti-scale model) | COVERED | |
| 44-F5 | Finding 5: Spatial confidence (Scale 1) has veto power | A3 ("if spatial_confidence = 0, product = 0") | COVERED | |
| 44-F6 | Finding 6: Iteration > specification for max richness | Multi-pass architecture (C1), gates (C3) | COVERED | |
| 44-F7 | Finding 7: Restraint creates richness, saturation destroys it | C-12 (restraint ratio), C-13 (silence zones), C-14 (signal-to-silence) | COVERED | |
| 54 | Genuine disagreement: crown jewel richness from "design intelligence" (Showcase Archaeologist) vs "constraint pressure" (Adversarial); possibly compatible | A4 (explicitly resolves: Source 1=constraint=automatic, Source 2=design intelligence=requires Opus; BOTH required) | COVERED | A4 explicitly resolves this disagreement |
| 58-62 | Beyond 5: add more CSS CHANNELS at existing levels; current channels: border-weight, spacing, zone-background, typography; unexplored: opacity gradients, filter effects, custom properties, animation timing | SC-02 (7 channels: chromatic, typographic, spatial, structural, density, rhythmic, intentional) | PARTIAL | SC-02 names 7 channels but they're more abstract than the specific CSS-property channels listed in the memory file. The "unexplored" channels (opacity, filter, animation) are not in the prompt |
| 63-71 | 6 unmodeled richness dimensions: self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation, provenance threading | C-15 (5 of 6 present: self-reference, pedagogical sequencing, cognitive transitions, bookending, meta-annotation; missing: provenance threading; replaced by: deliberate absence) | PARTIAL | 5/6 captured. Provenance threading is NOT in C-15; replaced by "deliberate absence" which is a different concept |
| 73-79 | 7 alternative mental models: Temporal Metabolism, Semantic Resonance, Narrative Arc, Materiality Gradient, Cognitive Scaffolding, Systemic Gravity, Emotional Topology | Various (see Section 2 analysis above) | PARTIAL | Some are well-captured (Narrative Arc -> A8, Semantic Resonance -> MC rules, Cognitive Scaffolding -> C-15). Others are missing or partial (Temporal Metabolism, Materiality Gradient, Emotional Topology) |
| 81-84 | 3 testable predictions: (1) 2 scales + max restraint outperforms 5 scales + max coverage; (2) adding intentionality to Ceiling closes 15-20% gap without new scales; (3) "build at Ceiling, iterate twice" beats adding more scales | A3 (prediction 1 implied), multi-pass architecture (predictions 2 and 3 operationalized) | COVERED | The prompt's architecture IS the response to predictions 2 and 3 |
| 86-92 | Post-flagship investigation agenda: compare PA-05 scores, test unmodeled dimensions, try 2-scale experiment | No rules | N/A | Future research, not execution prompt concerns |

---

## SUMMARY STATISTICS

### Coverage by Report

| Report | Findings Tracked | COVERED | PARTIAL | MISSING | Coverage Rate |
|--------|-----------------|---------|---------|---------|---------------|
| 01 - Beyond Five Scales | 28 | 16 | 7 | 5 | 57% COVERED / 25% PARTIAL / 18% MISSING |
| 02 - Alternative Mental Models | 22 | 10 | 8 | 4 | 45% COVERED / 36% PARTIAL / 18% MISSING |
| 03 - Diminishing Returns | 30 | 22 | 4 | 4 | 73% COVERED / 13% PARTIAL / 13% MISSING |
| 04 - Showcase Archaeology | 14 | 11 | 3 | 0 | 79% COVERED / 21% PARTIAL / 0% MISSING |
| 05 - Cross-Domain Theory | 24 | 17 | 5 | 2 | 71% COVERED / 21% PARTIAL / 8% MISSING |
| 06 - Adversarial Anti-Scale | 20 | 17 | 2 | 1 | 85% COVERED / 10% PARTIAL / 5% MISSING |
| Memory/Scale-Research | 18 | 14 | 3 | 1 | 78% COVERED / 17% PARTIAL / 6% MISSING |
| **TOTALS** | **156** | **107** | **32** | **17** | **69% COVERED / 21% PARTIAL / 11% MISSING** |

### Coverage by Prompt Section

The scale findings are captured primarily through these prompt sections:

| Prompt Section | Findings It Captures | Key Rules |
|----------------|---------------------|-----------|
| A3 (Anti-Scale Model) | ~35 findings | Formula, empirical warning, scale cap, PA-05 priority |
| A4 (Dual Richness Sources) | ~15 findings | Constraint pressure, design intelligence, crown jewel requirement |
| A6 (Experiential Laws) | ~12 findings | Deployment != perception, constraint > permission |
| A8 (Reader Journey) | ~8 findings | 5-act story, narrative arc, scroll progression |
| SC-01-08 (Scale-Channel) | ~25 findings | Scale cap, channel coverage, richness matrix |
| C-12-14 (Restraint) | ~10 findings | Rejection log, silence zones, signal-to-silence |
| C-15-18 (Intentionality) | ~12 findings | 6 dimensions, self-reference, bridges |
| MC-01-08 (Multi-Coherence) | ~8 findings | CCS, reinforcing pairs, interaction types |

### All MISSING Findings (Potential Gaps)

1. **The 5 scales are never named or defined** (Navigation, Page, Section, Component, Character at specific px ranges). Builders may not understand what "scales" means concretely.

2. **Semantic Density as a named principle** -- the concept that mechanism count per element should track semantic importance. Report 01's top recommendation. However, this is a JUDGMENT rule and may correctly be excluded from a binary-rules-only prompt.

3. **Semantic Density binary gate** -- "Does the most important element on the page use the most mechanisms? YES/NO." This IS binarizable and could be added to the builder self-check.

4. **Temporal Metabolism 4-layer model** (Flash/Scan/Read/Return) as measurement. Partially captured through A8 and the 5-second test, but not named as a framework.

5. **Materiality Gradient** -- the range from ethereal to monumental as a richness dimension. No measurement or requirement for full-range materiality deployment.

6. **Emotional register count** -- the requirement for 4-6 distinct emotional registers along the scroll. Partially captured through A8's 5-act structure and A2's tension table.

7. **Alternative tier model based on "dimensions active"** instead of scale count. The prompt still uses scale count and mechanism count as primary tier metrics.

8. **Schenker's 3-level model** (background/middleground/foreground mapping to identity/grammar/surface). Elegant framing not adopted.

9. **Cross-scale emergence** -- the typography concept that properties at one scale EMERGE when viewed from a larger scale. Not named in the prompt.

10. **Specific natural scale examples** (bronchial tree, coastlines, etc.) as supporting evidence. Not needed for execution.

11. **Build time / CSS complexity curves** as mathematical models. Policy consequences captured; mathematical detail correctly omitted.

12. **Richness perception labels** (Formatted/Designed/Atmospheric/Artisanal/Perfect) for each tier. Would help builders understand what each quality level FEELS like.

13. **Provenance threading** as an intentionality dimension (replaced by "deliberate absence" in C-15).

14. **Alexander's 15 Properties** beyond "Levels of Scale" -- strong centers, boundaries, echoes, not-separateness.

15. **Scale continuity** (no gaps between adjacent scales is more important than scale count). Partially captured through SC-05 but not as a named principle.

16. **Additive stacking** of non-spatial richness dimensions. No prompt rule about how channels/dimensions interact.

17. **Controlled comparison** needed: fractal vs non-fractal page under same constraints. Research agenda item.

### Gap Severity Assessment

**BLOCKING (0):** No missing findings would cause the flagship experiment to fail. All policy-critical findings are captured.

**SIGNIFICANT (3):**
1. **Named scale definitions** -- builders not knowing the 5 scales by name could cause confusion when SC rules reference "scales"
2. **Semantic density binary gate** -- a binarizable test that was recommended but not added; could improve PA-05 PROPORTIONATE scores
3. **Provenance threading missing from C-15** -- one of the 6 archaeology-identified dimensions was replaced; minor intentionality gap

**MINOR (14):** All remaining MISSING findings are either correctly excluded (judgment rules, research agenda items, mathematical detail, natural examples) or have their policy consequences already captured through existing rules.

### Final Verdict

**COVERAGE: STRONG (90% of actionable findings captured)**

The enriched prompt achieves high fidelity to the scale research through three key structural choices:
1. **A3 (Anti-Scale Model)** adopts the adversarial thesis's formula verbatim and includes the empirical warning
2. **B5 (Scale-Channel)** operationalizes the "channels not levels" finding through an 8-rule framework
3. **C-12-14 (Restraint)** operationalizes the restraint-over-saturation finding through binary rules

The prompt correctly EXCLUDES findings that are:
- Judgment-dependent (semantic density measurement beyond binary gates)
- Future research (controlled comparisons, post-flagship experiments)
- Portfolio-level (distribution strategies, tier selection)
- Detail-level (mathematical models, natural examples)

The 3 SIGNIFICANT gaps should be evaluated for inclusion:
1. Adding a 1-line scale definition reference (SC-01 annotation)
2. Adding semantic density binary gate to B10 self-check
3. Adding provenance threading as 7th intentionality option in C-15

---

**END ULTRA-DEEP SCALE CROSS-REFERENCE**
**156 findings tracked across 7 source files**
**107 COVERED / 32 PARTIAL / 17 MISSING**
**0 BLOCKING / 3 SIGNIFICANT / 14 MINOR gaps identified**
