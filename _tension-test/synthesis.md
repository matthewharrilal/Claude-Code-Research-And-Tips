# Tension-Composition Pipeline: Test Synthesis

**15 layouts across 3 content pieces, 3 pipeline runs, 3 visual audits**

---

## 1. Pipeline vs Perception Gap Analysis

### Where Did the Pipeline's Ranking Diverge from the Auditor's Ranking?

| Piece | Pipeline #1 Pick | Auditor #1 Pick | Gap? |
|-------|-----------------|-----------------|------|
| **Boris** | Manuscript Codex (3.5/4 resolution, 8 isomorphisms) | Archival Vault (#5 in pipeline ranking) | **LARGE GAP** |
| **Gas Town** | Industrial Refinery (4/5 resolution, 10 isomorphisms) | Military Command Post (#2 in pipeline ranking) | **MODERATE GAP** |
| **Playbook** | Apprenticeship Workshop (7/7 resolution, 9 isomorphisms) | Elevation Map (#4 in pipeline ranking, 3.5/7 resolution) | **LARGEST GAP** |

The pipeline and auditors disagreed on the top pick for ALL THREE content pieces. This is the most significant finding of the entire test.

### Why the Gaps Exist

**Gap Pattern 1: Pipeline Over-Weights Tension Resolution, Under-Weights Execution Quality**

The pipeline ranks candidates by (a) how many tensions are resolved, (b) structural isomorphism count, and (c) content resonance. But the auditors evaluate what actually lands perceptually -- pacing, dead zones, responsive behavior, reading comfort, visual variety. These are execution-layer concerns that the pipeline's metaphor-selection phase cannot predict.

- **Boris:** Manuscript Codex scored highest on isomorphism (8) and compound tension resolution (3.5/4). But the builder produced exposed HTML comment text and massive dead zones that destroyed the reading experience. The Archival Vault (pipeline rank #5) had the best pacing, tightest vertical footprint, strongest responsive behavior, and most immersive spatial identity. The pipeline correctly identified the Codex as the richest metaphor; it could not predict that the Vault would be EXECUTED better.

- **Gas Town:** Industrial Refinery had maximum content resonance (the content literally calls itself a refinery). But the Military Command Post achieved the most cohesive visual language -- the classification stamp, rank insignia, and chain of command mapped seamlessly onto the 8-role hierarchy. The pipeline over-weighted vocabulary match ("Refinery" is IN the content) and under-weighted structural coherence (the military metaphor produced tighter visual grammar despite vocabulary mismatch).

- **Playbook:** Apprenticeship Workshop achieved PERFECT tension resolution (7/7) -- the only perfect score across all 15 candidates. But the Elevation Map, which scored only 3.5/7 on tension resolution, produced the strongest visual experience because its graduated backgrounds created an EMBODIED sense of progression. The pipeline measured whether the metaphor RESOLVES tensions; it could not measure whether the resolution is PERCEPTIBLE without reading.

**Gap Pattern 2: Pipeline Cannot Predict Pacing**

The #1 execution-quality factor across all audits was PACING -- the rhythm of visual variety as the reader scrolls. Three layouts across different pieces suffered from "dead zones" (Boris Codex, Boris Curriculum, Playbook Construction Site). The pipeline has no mechanism to predict whether a metaphor will produce good or bad pacing. Pacing is an emergent property of the builder's implementation, not a property of the metaphor itself.

**Gap Pattern 3: The "Implicit vs. Explicit" Metaphor Problem**

A recurring auditor observation: metaphors work best when they are STRUCTURAL (the reader feels it) rather than TEXTUAL (the reader reads about it). The City Zoning Map suffered from "MAIN STREET -- CONNECTING DISTRICTS" labels. The Building Floor Plan suffered from "EXECUTIVE CORRIDOR" announcements. The best metaphor moments were implicit: the Geological Core Sample's bedrock section (dark background at the bottom), the Elevation Map's graduated lightening, the Archival Vault's clearance progression. The pipeline's metaphor collapse phase cannot distinguish whether a metaphor will be implemented implicitly or explicitly -- that depends entirely on the builder.

---

## 2. Per-Piece Best Metaphor Recommendation

### Boris Cherny Extraction

**Pipeline recommendation:** Manuscript Codex
**Auditor recommendation:** Archival Vault
**Synthesis recommendation: Geological Core Sample (#2 in both pipeline and auditor rankings)**

Justification:
- The Codex has a showstopper bug (exposed HTML comments) and pacing problems (dead zones)
- The Archival Vault has the best pacing but its classification labels are too aggressive (red on a knowledge document reads as WARNING, not CLASSIFICATION)
- The Geological Core Sample earned "strongest metaphor execution" from the auditor: legible layering, smooth reading experience, the "bedrock" section was "genuinely evocative," and it was "ship-ready with minor polish" (only a salmon callout color fix)
- The Core Sample was ranked #2 by the pipeline (3.5/4 resolution, 7 isomorphisms, HIGH resonance) -- Boris's content IS a "deep extraction" with concentric depth
- It resolves the primary compound tension (warmth + revelation + equanimity) nearly as well as the Codex but with a more forgiving execution path

**If the Codex bugs were fixed,** the Codex would likely move to #1 or #2 -- its metaphor is genuinely richer. But the Core Sample ships TODAY with minor polish.

### Gas Town / Yegge Extraction

**Pipeline recommendation:** Industrial Refinery
**Auditor recommendation:** Military Command Post
**Synthesis recommendation: Building Floor Plan (#5 in pipeline, #2 by auditor)**

Justification:
- The Building Floor Plan was the ONLY layout across all 15 to receive an unqualified "SHIP" verdict at 768px (no reservations)
- It was called "the most elegant layout of the five" and "most 'designed'" by the auditor
- The architectural blueprint metaphor maps naturally to Gas Town's hierarchy (floors = levels, rooms = roles, corridors = communication)
- Its weaknesses are minor and fixable: corridor labels too explicit, spec block competes with title
- The Military Command Post is close but has the green accent color problem and narrow-viewport stats bar cramping
- The Industrial Refinery has the highest content resonance but was only ranked #3 by the auditor due to dead zones and the "Feed Stock" tag feeling "stuck-on"

**However:** The Military Command Post achieved the "most cohesive metaphor" and "strongest personality" -- if the gas town content is being presented to an audience that values authority and tone-setting over elegance, the Command Post wins. The recommendation depends on audience context.

### Master Playbook

**Pipeline recommendation:** Apprenticeship Workshop (PERFECT 7/7 resolution)
**Auditor recommendation:** Elevation Map
**Synthesis recommendation: Elevation Map**

Justification:
- The Elevation Map is the only layout across ALL 15 to receive unqualified "YES" ship verdicts at both viewports from the auditor
- Its graduated backgrounds (dark valley to light summit) create an EMBODIED sense of skill progression that perfectly mirrors the Level 0-7 structure -- "the visual design actively teaches the same lesson as the text"
- The pipeline scored it only 3.5/7 on tension resolution, but this was because the pipeline evaluated cartographic metaphors as weak on identity transformation (BECOME) and reconciliation (RECONCILE). The auditor found that the graduated backgrounds accomplish BECOME through a different mechanism than the pipeline predicted -- the reader FEELS the ascent physically as they scroll, even though the topographic map doesn't have an explicit identity-transformation narrative
- The Apprenticeship Workshop has genuine warmth but its principle cards grid creates visual monotony -- the auditor's primary criticism
- The Workshop resolves more tensions on paper, but the Elevation Map delivers more perceptual impact per scroll

---

## 3. Cross-Piece Patterns

### Pattern 1: Metaphor Families That Work

| Metaphor Family | Content Type Affinity | Strength | Weakness |
|----------------|----------------------|----------|----------|
| **Geological** (Core Sample, Stratigraphy) | Layered content with depth/descent structure | Compression metaphor, bedrock moments, natural section rhythm | Can feel heavy; "unconformity" sections risk readability |
| **Institutional** (Archival Vault, Military Command) | Hierarchical content with authority structure | Immersive spatial identity, clear vocabulary, excellent pacing | Can create emotional distance; aggressive labels |
| **Craft/Workshop** (Workbench, Apprenticeship) | Mentorship or progression content | Warmth within angular constraints, strong FEEL resolution | Principle grids create monotony; responsive fragility |
| **Cartographic** (Elevation Map, City Zoning, Floor Plan) | Content with spatial or progression structure | Graduated backgrounds = embodied progression; professional headers | Over-labeling connectors; maps are atemporal (weak on BECOME) |
| **Editorial** (Manuscript Codex, Curriculum) | Prose-dominant, wisdom-sharing content | Cultural resonance, strong typography mapping | Dead zone epidemic; pacing problems |

### Pattern 2: The Dead Zone Epidemic

5 of 15 layouts suffered from excessive dead zones between sections. This affected:
- Boris Manuscript Codex (viewport-height gaps of cream)
- Boris Apprentice Curriculum (viewport-height gaps between lessons)
- Boris Craftsman Workbench (offset content creating wasted left margin)
- Playbook Construction Site (too much dark background)
- Gas Town Industrial Refinery (dead zone between comparison table and flow pipe)

Dead zones correlate with metaphors that use BREATHING ZONES or TRANSITIONS as explicit elements. Compact metaphors (Archival Vault, Circuit Board, Elevation Map) avoid this because their metaphor logic encourages DENSITY, not expansion.

**Takeaway:** Metaphors that conceptualize section transitions as EMPTY SPACE (breathing, turning pages, walking between buildings) produce pacing problems. Metaphors that conceptualize transitions as CHANGING STATE (deeper stratum, higher elevation, next room) produce better pacing.

### Pattern 3: Stats Bars Are Universally Weak

Every Gas Town layout had a "stats bar" element (gauge strip, situation board, legend, pin header, spec block) beneath the header. The auditor flagged this as the weakest element across ALL FIVE Gas Town layouts. At 768px, every stats bar cramped or competed for space. This is not a metaphor-specific problem -- it is a PATTERN problem: trying to compress 4-6 metadata values into a narrow horizontal band fails at narrower viewports.

### Pattern 4: Responsive Quality Separates Good from Great

Only 2 of 15 layouts received unqualified "SHIP" verdicts at both viewports. Only 1 layout had a catastrophic responsive failure (Boris Workbench -- text overflowing right edge at 768px). The pipeline's metaphor selection phase has NO responsive quality prediction. This means responsive quality is entirely a builder execution concern -- the pipeline cannot help here.

### Pattern 5: KortAI Constraints Help More Than They Hurt

Across all 15 layouts, the auditors detected ZERO soul violations (no rounded corners, no drop shadows, no decorative borders). The constrained palette, angular geometry, and flat surfaces created visual consistency across all layouts regardless of metaphor. The constraints served as guardrails that prevented builders from straying into incoherent territory. The "95% angular, 75% austere" personality was never cited as a perceptual problem by any auditor -- it was invisible infrastructure.

---

## 4. Pipeline Effectiveness Assessment

### Where the Pipeline Succeeded

1. **Content Classification (Phase 0):** All three content pieces were correctly classified. Boris as PROSE-DOMINANT, Gas Town as MIXED, Playbook as MIXED. Scope assessments were accurate. Section identification caught incompatible structural needs.

2. **Axis Richness Ranking (Phase 1):** The pipeline correctly identified the highest-tension axes for each piece:
   - Boris: FEEL, RECONCILE, DISCOVER (all HIGH) -- confirmed by auditor observations about warmth and revelation
   - Gas Town: UNDERSTAND, RECONCILE, FEEL, BECOME, SEE (all HIGH) -- confirmed by auditor focus on system hierarchy and role topology
   - Playbook: BECOME, RECONCILE (both 27), FEEL (18), UNDERSTAND (12) -- confirmed by auditor emphasis on progression and transformation

3. **Metaphor Search Heuristics (Phase 3):** The constraint scan, content resonance, and emotional valence heuristics consistently produced relevant candidates. No auditor suggested a metaphor family that the pipeline hadn't considered.

4. **Tension Gate (Phase 2):** The gate correctly allowed all three pieces through (all had 3+ genuine tensions). No false negatives detected.

5. **Isomorphism Mapping:** The pipeline's structural isomorphism tables proved accurate -- the mapped CSS mechanisms were genuinely legal and the builders implemented them. The pipeline's mechanism predictions were reliable.

### Where the Pipeline Failed

1. **Predicting Perceptual Quality from Structural Properties:** The pipeline's biggest blind spot. A metaphor can score perfectly on resolution + isomorphism + resonance + feasibility and still produce a layout with dead zones, broken responsive, or monotonous repetition. The gap between "structurally sound metaphor" and "perceptually effective layout" is where ALL THREE top-pick disagreements live.

2. **The Richness Formula Over-Values Opposition Depth:** The formula (Opposition x Overlap x Width = Richness) heavily rewards deep opposition. But the auditors showed that metaphors with MODERATE opposition but STRONG perceptual clarity (Elevation Map: 3.5/7 resolution but best perceptual outcome) outperformed metaphors with MAXIMUM opposition but WEAKER perceptual clarity (Apprenticeship Workshop: 7/7 resolution but monotonous principle grid).

3. **Content Resonance Bias:** The pipeline gives a bonus to metaphors whose vocabulary matches the content's own words. For Gas Town, this pushed Industrial Refinery to #1 (the content literally says "refinery"). But the auditor found that the Military Command Post and Building Floor Plan -- metaphors that DON'T match the content's vocabulary -- produced better visual experiences. The pipeline confuses NOMINAL resonance (same words) with STRUCTURAL resonance (same relationships). The Military Command Post's rank hierarchy structurally mirrors Gas Town's role hierarchy even though the words are different.

4. **No Responsive Quality Prediction:** The pipeline cannot predict whether a metaphor will execute well at narrow viewports. The Boris Workbench was catastrophically broken at 768px despite scoring 3/4 on resolution and 6 on isomorphism.

5. **No Pacing Prediction:** The pipeline cannot predict whether a metaphor will produce good scrolling rhythm. Dead zones and monotonous repetition are emergent properties of implementation, not properties of the metaphor abstraction.

---

## 5. Skill Improvement Recommendations

### R1: Add a "Perceptual Risk" Assessment to Phase 3 Scoring (CRITICAL)

After calculating Resolution, Isomorphism, Resonance, and Feasibility for each candidate, add a fifth dimension: **Perceptual Risk**.

Questions to score:
- Does this metaphor conceptualize section transitions as EMPTY SPACE or CHANGING STATE? (Empty space = high pacing risk)
- Does this metaphor rely on TEXTUAL labels or STRUCTURAL gradients to communicate? (Textual = over-labeling risk)
- Does this metaphor produce a UNIFORM grid of elements or VARIED element sizes? (Uniform = monotony risk)
- Does this metaphor have a natural responsive degradation path? (Does the metaphor make sense at narrow widths?)

Score: LOW/MEDIUM/HIGH risk. Include risk score in the composite ranking. A metaphor with Resolution 7/7 and Perceptual Risk HIGH should be ranked below a metaphor with Resolution 5/7 and Perceptual Risk LOW.

### R2: Separate "Nominal Resonance" from "Structural Resonance" (HIGH)

The current pipeline treats content vocabulary match ("the content says 'refinery'") as HIGH resonance. But structural resonance (the metaphor's RELATIONSHIPS mirror the content's RELATIONSHIPS) proved more predictive of visual quality. The Military Command Post's rank-based hierarchy structurally mirrors Gas Town's role hierarchy even though the words are different.

**Change:** Split resonance into two dimensions:
- **Nominal resonance:** Does the content use the metaphor's vocabulary? (nice-to-have)
- **Structural resonance:** Does the metaphor's internal structure (hierarchy, flow, nesting) mirror the content's structure? (essential)

Weight structural resonance 2x higher than nominal resonance in the composite score.

### R3: Add Pacing Prediction Heuristic to Phase 4 (HIGH)

Before generating HTML, the pipeline should evaluate the metaphor's pacing characteristics:
- How many sections will the content produce?
- Does the metaphor call for empty "breathing zones" between sections? If yes, set a maximum height (e.g., 48px, not viewport-height gaps)
- Does the metaphor produce uniform section shapes? If yes, introduce deliberate variation (alternating full-width and inset presentations, varying background zones)
- Is there a "dramatic moment" (bedrock, summit, vault) placed at the right scroll position (60-80% of total height)?

### R4: Add Responsive Degradation Check to Candidate Scoring (MEDIUM)

Add a question to Phase 3: "Does this metaphor have a natural responsive story?"
- Geological layers: YES (narrower core sample = deeper bore)
- Floor plan: YES (narrow building, rooms stack)
- Workbench: RISK (tools on a workbench need horizontal space)
- Circuit board: YES (narrower board revision)
- Codex: YES (narrower page margin)

Metaphors with responsive risk should be flagged, not eliminated.

### R5: Refine the Richness Formula (MEDIUM)

The current formula (Opposition x Overlap x Width) produces a maximum of 27. The test showed that scores of 27 (Playbook BECOME and RECONCILE) don't predict perceptual quality better than scores of 12 (Playbook UNDERSTAND, which guided the Elevation Map to its graduated-background approach).

**Consider:** Cap the richness influence at the tension-selection stage rather than the metaphor-selection stage. Use richness to select which tensions to resolve (correct), but don't let high richness override perceptual concerns in the metaphor ranking.

### R6: Builder Instruction Appendix (LOW)

The pipeline's output is a metaphor + isomorphism table + mechanism mapping. The builders then interpret this freely. Some interpretations are better than others. Consider adding builder-specific warnings:
- "This metaphor risks dead zones -- enforce maximum breathing zone of 48px"
- "This metaphor risks over-labeling -- use structural gradients, not text labels, for transitions"
- "This metaphor risks monotonous grids -- vary element sizes by importance"

---

## 6. Top 3 Overall (Across All 15 Layouts)

### #1: Gas Town -- Building Floor Plan

**Why:** The only layout to receive an unqualified "SHIP" verdict at 768px. Called "the most elegant layout" and "most 'designed.'" The architectural blueprint metaphor maps naturally to Gas Town's hierarchy without vocabulary mismatch. The header's two-column title block with drawing number and spec block is "the most professional header of all five." The floor-level separators create clear spatial hierarchy. Room numbering provides orientation. The responsive behavior is described as "deliberately designed for this width, not squeezed." Weaknesses are minor and fixable (corridor labels, spec block competition).

### #2: Playbook -- Elevation Map

**Why:** The only layout to receive unqualified "YES" ship verdicts at BOTH viewports across all 15 layouts. The graduated backgrounds (dark valley to light summit) create an "extraordinarily effective visual metaphor: you can FEEL the progression by the changing weight of the background." The auditor called it "the only layout where the visual design actively teaches the same lesson as the text." The cartographic metadata header adds authority. The elevation profile at the bottom is "clean, precise, informative." Its only weakness is a tight 4-column principle grid that would be trivially fixable (change to 3 columns).

### #3: Boris -- Geological Core Sample

**Why:** Called "the strongest metaphor execution of all five layouts" for Boris. The geological layering is legible, the reading experience is smooth, the "bedrock" section is "genuinely evocative," and it was called "ship-ready with minor polish." Unlike the Codex (#1 pipeline pick), it has no showstopper bugs. Unlike the Vault (#1 auditor pick), its callout tone issue is minor (salmon color, not aggressive red labels). The Core Sample resolves the compound tension (warmth + revelation + equanimity) nearly as well as the Codex but with a dramatically more forgiving execution path. The "Fundamental Truths" dark section "creates a dramatic shift -- like hitting bedrock. This is the strongest metaphor moment in the entire page."

### Honorable Mentions

- **Gas Town -- Military Command Post:** Most cohesive metaphor across all 15 layouts. The classification stamp is "a masterclass in establishing tone with a single design element." If audience values authority over elegance, this is the pick.
- **Boris -- Archival Vault:** Best pacing of any Boris layout, most compact, strongest responsive behavior. If the red labels were toned down, this would compete for top 3.
- **Playbook -- Apprenticeship Workshop:** Only PERFECT tension resolution score (7/7) in the entire test. Warmest, most inviting personality. If the principle grid monotony were solved, this would be formidable.

---

## 7. Meta-Findings

### The Pipeline Is a Metaphor-SELECTOR, Not a Quality-PREDICTOR

The pipeline consistently selects structurally appropriate metaphors. In all 15 cases, the auditors confirmed that the chosen metaphors "made sense" for their content -- no metaphor was called inappropriate or forced. But selecting the RIGHT metaphor and predicting the BEST visual outcome are different tasks. The pipeline excels at the former and cannot perform the latter.

This is not a flaw to fix -- it is a fundamental boundary to acknowledge. The pipeline reduces the metaphor search space from infinite to 3-5 strong candidates. The builder then determines which candidate produces the best perceptual result. The pipeline should be understood as GENERATING CANDIDATES, not DECLARING WINNERS.

### Tension Resolution Score Does Not Predict Perceptual Quality

The correlation between pipeline tension resolution score and auditor visual quality ranking is approximately ZERO across the 15 layouts:
- Playbook Apprenticeship Workshop: 7/7 resolution, ranked #2 by auditor
- Playbook Elevation Map: 3.5/7 resolution, ranked #1 by auditor
- Boris Manuscript Codex: 3.5/4 resolution, ranked #5 by auditor
- Boris Archival Vault: 2.5/4 resolution, ranked #1 by auditor

The pipeline's tension resolution score predicts metaphor RICHNESS (how many structural relationships can be expressed), not visual QUALITY (how those relationships land perceptually).

### The Best Layouts Have Implicit, Not Explicit, Metaphors

Across all 15 layouts, the auditors consistently praised IMPLICIT metaphor expression (graduated backgrounds, spatial hierarchy, compression with depth) and criticized EXPLICIT metaphor expression (labeled connectors, announced transitions, named zones). The best layouts make the reader FEEL the metaphor without ever NAMING it.

This suggests a builder instruction: "The reader should experience the metaphor structurally, not read about it textually. If you are labeling a transition with the metaphor's vocabulary ('MAIN STREET,' 'EXECUTIVE CORRIDOR'), you are announcing the metaphor instead of embodying it."

### KortAI Constraints Are Infrastructure, Not Limitation

Zero soul violations across 15 layouts. The constrained system (angular, flat, restrained palette, limited fonts) produced visual consistency without any auditor citing the constraints as a perceptual problem. The design system's personality is invisible when correctly applied -- it shapes the space without announcing itself. This confirms the pipeline's premise: the constraints are the MEDIUM, not the enemy.
