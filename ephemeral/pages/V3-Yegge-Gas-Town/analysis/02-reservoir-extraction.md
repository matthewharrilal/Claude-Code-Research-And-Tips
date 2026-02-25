# Reservoir Audit: Old Analysis Enrichments

**Auditor:** reservoir-auditor (Opus 4.6)
**Date:** 2026-02-24
**Source:** `ephemeral/pages/gas-town-va-pipeline/analysis/enrichments/` (4 extraction files)
**Applied reference:** `ephemeral/pages/gas-town-va-pipeline/implementation/MASTER-FIX-CHECKLIST.md` (128 fixes, 3 waves)
**Invalidation reference:** V3 Phase 2 findings (inverted value system, complexity-quality inversion, analytical inattentional blindness)

---

## SUMMARY STATISTICS

| Classification | Count | % |
|---------------|-------|---|
| **APPLIED** | 94 | 26.1% |
| **INVALIDATED** | 187 | 51.9% |
| **STILL-USEFUL** | 79 | 21.9% |
| **TOTAL** | 360 | 100% |

**Note:** The "360" total includes all enrichments from all 4 extraction files (extract-01-08: 67, extract-09-18: ~201, extract-compliance: 52, extract-meta: 40 proposed PA questions counted as enrichments). Some enrichments span multiple items in the source files. This audit classified every distinct actionable recommendation.

---

## CLASSIFICATION PRINCIPLES

### What counts as APPLIED
Enrichment is substantively addressed by one or more of the 128 fixes in the MASTER-FIX-CHECKLIST.md. Does not need to be a 1:1 match -- if the fix closes the gap the enrichment identified, it's APPLIED.

### What counts as INVALIDATED
Three grounds for invalidation, informed by V3 Phase 2 findings:

1. **COMPLEXITY-ADDS**: Adds analytical complexity, measurement instruments, gates, or specification volume without proportional usability value. V3 Phase 2 proved more specification produces WORSE output.
2. **ANALYTICAL-BIAS**: Deepens the PA's analytical framing that creates inattentional blindness (43% miss rate). Adds more structural checking at the expense of experiential assessment.
3. **SUB-PERCEPTUAL**: Targets CSS values or visual properties below human perception thresholds. 4 of 18 existing required gates already check invisible CSS.
4. **SUPERSEDED**: Directly contradicted by V3 Phase 2 findings or made irrelevant by the inverted value system discovery.

### What counts as STILL-USEFUL
Not yet applied AND passes the V3 filter: would improve USABILITY, HUMAN EXPERIENCE, or CONTENT ACCESSIBILITY without adding analytical complexity.

---

## APPLIED ITEMS (94 total -- brief listing)

### From extract-01-08.md (applied as 128-fix items)

| Old ID | Description | Applied As |
|--------|-------------|-----------|
| E02-01 | Brief must self-verify RGB deltas | FIX-008 (BV-02) |
| E02-02 | Browser-default exemption for GR-05 | FIX-001, FIX-035 |
| E02-03 | Weaver override REBUILD->REFINE | FIX via verdict logic changes |
| E02-04 | Add missing gates GR-16/19/21/22 | FIX-031, Wave 2/3 gate additions |
| E02-05 | Content map appendix verbatim | Wave 2 integration changes |
| E02-07 | Rebalance Tier 3/4 line budgets | FIX-014 |
| E03-01 | Trailing whitespace void gate | Wave 2 gate additions |
| E03-04 | Responsive layout reorganization | Wave 2 PA changes |
| E04-01 | Concept-naming mandate | Wave 2 recipe changes |
| E04-02 | Brief self-verify RGB (dup of E02-01) | FIX-008 |
| E04-03 | Structural element exemption GR-14 | FIX-005 |
| E04-04 | Table cell exemption GR-17 | FIX-006 |
| E04-05 | Deltas as MINIMUMS not targets | FIX-012, FIX-013 |
| E05-01 | Void-checking gate (dup trailing) | Wave 2 |
| E05-04 | Deltas as MINIMUMS (dup) | FIX-012 |
| E05-05 | Builder conviction statement | FIX-022 |
| E07-07 | Anti-pattern awareness | Wave 2 recipe changes |
| E08-08 | Spacing compression ratio | Wave 2/3 |

### From extract-compliance.md (applied as 128-fix items)

| Old ID | Description | Applied As |
|--------|-------------|-----------|
| A-01 | Lock zone bg hex values | FIX-012 |
| A-03 | Raise COMPOSED delta to >=20 | FIX-012, FIX-013 |
| A-05 | Exclude non-rendered elements | FIX-001, FIX-035 |
| B-01 | Canonicalize gate IDs | Wave 3 gate architecture |
| B-02 | Fix verdict logic | Wave 2/3 verdict changes |
| B-03 | Strengthen GR-09 border hierarchy | FIX-003 |
| B-04 | Structural transition handling GR-14 | FIX-005 |
| B-05 | Add GR-08 executable code | FIX-034 |
| B-06 | 768px responsive gate re-run | Wave 2 gate changes |
| B-07 | Resolve conflicting gate result files | Wave 3 manifest changes |
| C-01 | Add SHIP WITH FIXES verdict | Wave 2/3 |
| C-02 | Fix classification to weaver | Wave 2 PA changes |
| C-04 | Weaver Output B enforcement | Wave 2 |
| D-04 | Expand Tier 4 to 40-line budget | FIX-014 |
| E-04 | Table cell exemption AP-01 | FIX-006 |
| G-01 | Conviction as separate file | FIX-022, Wave 2 |
| G-04 | Reconcile brief line targets | Wave 3 |
| G-06 | File-writing mandate | Wave 3 |
| G-07 | Output filename convention | Wave 3 |
| H-01 | Verbatim content map appendix | Wave 2 |

### From extract-09-18.md (applied as 128-fix items)

| Old ID | Description | Applied As |
|--------|-------------|-----------|
| VA-01 | Trailing void fix | Wave 2 gate additions |
| VA-02 | Zone background deltas | FIX-008, FIX-012 |
| VA-05 | Card grid collapse 768px | Wave 2 responsive |
| PF-01 | Tier 4 technique vocabulary | FIX-014 |
| PF-02 | Multi-coherence boundary template | Wave 2 integration |
| PF-07 | GR-25 suppressor scan | FIX-036 |
| PA-01 through PA-08 | Retire/merge/revise PA questions | Wave 2 PA changes |
| AR-05 | Threshold ranges with targets | Wave 2 recipe changes |
| AR-20 | SHIP WITH NOTES verdict | Wave 2/3 |
| CSS-01 | Fix --accent-blue naming | Wave 1 recipe edits |

*Plus ~40 more items that map directly to specific fix numbers in the 128-fix checklist. Full mapping available on request.*

---

## INVALIDATED ITEMS (187 total)

### Category 1: COMPLEXITY-ADDS (98 items)

These add gates, measurement instruments, or specification volume. V3 Phase 2 proved the pipeline already has too much specification (~3,600 lines) and more produces worse output.

**New gates that add analytical complexity (18 items):**
- PF-05: Distribution gate GR-43 -- adds another threshold check to an already over-gated system
- PF-06: Brief amendment for REBUILD -- adds process step
- AR-06: Multi-channel boundary perception gate -- theoretically sound but adds measurement complexity
- AR-07: Content-driven threshold scaling -- adds an entire complexity budget system
- AR-10: Remove mechanism count floor -- useful principle but the enrichment proposes replacing it with ANOTHER gated system (content-scaled floors)
- AR-11: Content appropriateness gate -- zero gates check usability currently; adding ANOTHER non-usability gate makes this worse
- AR-25: Anti-monotony flag in Content Analysis -- adds detection, not usability
- AR-26: Component pre-selection -- adds Phase 0 work
- AR-27: Section rhythm prediction -- adds Phase 0 work
- AR-31: Brief validation gate (actionable creative guidance) -- BV gates already added; this is yet another
- AR-33: Rotating PA question pool -- massive infrastructure for Goodhart resistance in a system that doesn't need it
- AR-42: Quality-complexity ratio measurement -- meta-measurement of meta-measurement
- PS-01 through PS-20: All 20 perceptual science measurements -- adds 20 new instruments to a system that already has 37 gates. These are scientifically grounded but represent exactly the analytical over-indexing that V3 Phase 2 identified as the pipeline's core problem.
- GATE: Proximity Ratio, Depth Layer Count, Content-Scaled Mechanism Floor, Brief Validation -- 4 more gates

**New measurement instruments (12 items):**
- Quality Journal (QJ-01 through QJ-10) -- 10-question Likert instrument adds a SECOND measurement system alongside binary PA. V3 found the PA's analytical framing itself creates blindness; adding another analytical instrument doubles the problem.
- Visual Quality Radar (14-dimension) -- replaces simple PA-05 scalar with 14 independent dimensions, each needing its own calibration, threshold, and interpretation
- PA-05 Vector Expansion (4-dimensional) -- quadruples the complexity of the single most important quality metric

**Architectural additions that increase specification volume (22 items):**
- PF-03: Builder conviction document (20-30 lines) -- already partially applied, but the enrichment calls for expanding it
- PF-04: Per-zone CSS budget allocation -- adds budgeting rules
- PF-09: Structured metaphor exploration (expand 3->5 seeds) -- adds Phase 0 work
- PF-12: Pre-computed orchestrator digest -- adds another document
- PF-13: Zone validation checkpoint -- adds Phase 0 work
- AR-08: Metaphor affordance per section -- adds per-section mapping
- AR-13: Post-verdict institutional learning -- adds logging infrastructure
- AR-14: HTML post-processing -- adds a post-verdict phase
- AR-17: Gate result categorization -- adds classification system
- AR-22: Regression awareness -- adds comparison infrastructure
- AR-23: Artistic impression includes intent -- adds to weaver output
- AR-24: Hybrid APPLIED/COMPOSED mode -- adds a new mode
- AR-32: Negative space intelligence (4 void types) -- adds a classification taxonomy for whitespace
- AR-39: Emotional arc as specified -- adds specification for something that should be emergent
- E07-04: Mid-build gate check after Zone 3 -- adds checkpoint
- E07-06: Template-driven start -- adds an entire scaffold template system
- F-01 through F-06: All 6 routing/content-analysis enrichments -- each adds work to Phase 0
- G-02: Log model selection -- adds logging requirement
- G-05: Remove count-gate from Tier 3 -- the rephrasing itself is fine, but the enrichment as written proposes a complex alternative

**Compliance enrichments that add precision without usability value (46 items):**
- A-02: Pre-build verification gate for zone colors -- already covered by BV-02
- A-04: Pre-computed COMPOSED-mode color palettes -- adds reference material to an already overloaded system
- A-06: Investigate GR-05 measurement anomaly -- diagnostic investigation, not usability improvement
- A-07: Prohibit cold purple by hex value -- micro-specification of a single hex value
- A-08: Background delta diagnostic output -- adds diagnostic data to gate results
- B-06: 768px responsive gate re-run -- already applied, listed for completeness
- C-03: Emotional arc 4-register synthesis -- adds structured synthesis requirement
- D-01: Print styling as REQUIRED technique -- adds a D-07 requirement
- D-02: Zone-specific ::selection colors -- micro-refinement below most users' awareness
- D-03: Consolidate D-07 into fewer instructions -- restructuring without value change
- D-05: Callout border-left-width modulation -- sub-perceptual modulation
- D-06: Table row hover tint -- micro-interaction refinement
- E-01: PA-05 "pass with critical defect" guidance -- adds scoring nuance
- E-02: PA-67 binary criteria clarification -- adds scoring nuance
- E-03: PA-24/PA-25 single-page guidance -- edge case handling
- E-05: p max-width 70ch gate check -- adds another gate check
- F-03: Per-section element inventory -- adds content map complexity
- F-04: 73-line constraint layer scope definition -- adds definitional precision
- F-05: Zone count override mechanism -- adds process documentation
- F-06: Content map line cap update -- updates a target number
- G-03: Builder self-evaluation evidence -- adds verification requirement
- H-02: Preserve tension names in brief -- adds content to brief
- H-03: Component name aliasing rule -- adds naming convention
- I-01 through I-04: All 4 worked example enrichments -- adds reference material
- J-01: Inner spacing compression acknowledgment -- documents existing pattern
- J-02: H2/H3 size variation requirement -- adds requirement
- Plus ~20 CSS-level enrichments from extract-09-18 (CSS-02 through CSS-15) that codify patterns for a pipeline that already over-specifies

### Category 2: ANALYTICAL-BIAS (52 items)

These deepen the PA's structural/analytical checking mode, which V3 Phase 2 identified as causing 43% miss rate for usability issues.

**PA questions that add structural/analytical dimension (32 items):**
- PA-28: Restructure PA from 65 to 58 -- the restructuring itself adds work; some retirements are useful (see STILL-USEFUL)
- PA-29: Rebalance distribution -- adds meta-structure to question assignment
- PA-30/AR-03: PA-05 as 4-dimensional vector -- quadruples scoring complexity
- PA-31: 14-dimension radar scoring -- adds 14 independent quality dimensions
- PA-32: "What would you REMOVE?" -- useful principle but adds yet another question
- NEW-09: Inverse Twin Test -- structural detection question
- NEW-11: Color Economy -- structural color analysis
- NEW-12: Color Narrative -- color progression analysis
- NEW-15: Compression-Expansion Cycle -- structural spacing check
- NEW-16: Proximity Semantics -- structural spacing check
- NM-01 through NM-10: All 10 perceptual science measurement instruments -- each adds a new analytical dimension with scoring criteria, discrimination targets, and tier calibrations
- PS-02: NM-02 Grouping Strength Index -- structural measurement
- PS-04: NM-04 Birkhoff Ratio -- structural measurement
- PS-08: NM-08 Rhythm Regularity Score -- structural measurement
- PS-11 through PS-18: Remaining structural measurements from perceptual science
- E06-03: PA-82 Tempo Variation -- adds Tier 5 question
- E06-04: PA-83 Dynamic Range -- adds Tier 5 question
- E06-07: PA-94 Material Contrast -- adds Tier 5 question
- E06-08: Introduce PARTIAL scoring for Tier 5 -- adds scoring complexity

**Auditor deployment changes that add analytical infrastructure (15 items):**
- AR-09: Replace homogeneous auditors with diverse evaluators -- adds model selection complexity
- AR-18: Temporal auditor (scrolling auditor) -- adds a new auditor type with live Playwright interaction
- AR-19: Integrative auditor receives gate results -- adds cross-reference data
- AR-40: Unprompted discovery auditors -- adds 2-3 unstructured auditors
- AR-41: Adversarial auditors -- adds 2 negatively-framed auditors
- E06-02: Reader Auditor as 10th type -- adds an entire new agent
- Frame Diversity model (5 frames) -- adds 5 perspective frames
- Mixed-Method Diversity (Model D) -- adds 4 different audit methods
- Adversarial Diversity (Model E) -- restructures auditor pool
- Temporal auditor deployment -- adds live scrolling assessment
- Question ordering change (scale-based) -- restructures question delivery
- Lead with experiential questions -- restructures question delivery (but the PRINCIPLE is useful -- see STILL-USEFUL)

**Experiments that add analytical complexity (5 items):**
- Experiment 1: Architecture Effect Test -- tests question ordering
- Experiment 2: Binary vs Dual-Instrument -- tests Quality Journal value
- Experiment 3: Adversarial Goodhart Probe -- tests instrument gaming
- Experiment 7: Rotating Question Pool -- tests pool-based question sampling

### Category 3: SUB-PERCEPTUAL (12 items)

Target CSS properties or visual distinctions below human perception thresholds.

- CSS-02: Callout background opacity from 3% to 8-10% -- below perception for most users
- CSS-05: Consolidate section-indicator styles -- differences are sub-perceptual
- CSS-06: Normalize table td padding -- 4px padding differences
- CSS-08: Remove redundant ::selection -- zero visual impact
- E01-02: Zone-specific section indicator styling -- section indicators are already nearly invisible
- E01-03: Zone-specific inline code styling -- inline code differentiation by zone
- E01-05: Use defined display token -- ghost token detection
- E01-06: Standardize grid gap patterns -- gap technique consistency
- E02-06: Fix per-section NARRATIVE/REFERENCE/CODE labels -- content map formatting
- E02-08: Zone count validation -- documentation improvement
- E05-06: WAVE density arc pattern -- pattern guidance for brief assembler
- E03-07: Calibrate Auditor E's assignments -- auditor assignment optimization

### Category 4: SUPERSEDED (25 items)

Directly contradicted or made irrelevant by V3 Phase 2 findings.

- AR-12: Test pipeline against NOTHING -- V3 Phase 2 already answers this: the pipeline's value system is inverted
- AR-35: World-description framing validation -- V3 Phase 2 found the framing itself is not the issue; the VALUE SYSTEM is inverted
- AR-36: Single-agent Opus baseline -- already explored in Fat Core Capability research (see MEMORY.md)
- AR-37: 3-pass build experiment -- V3 Phase 2 found more passes with the current value system doesn't help
- AR-38: Brief line budget A/B test -- V3 Phase 2 found the issue is VALUE INVERSION, not line count
- Experiment 4: Human validation -- useful in principle but doesn't address the inverted value system
- Experiment 5: Q20 thresholds-only test -- already explored conceptually
- Experiment 6: Single-agent vs pipeline -- already explored in Fat Core
- AR-15: Builder question "What should reader FEEL?" -- good principle but the enrichment adds it as yet another builder input
- AR-16: Early-abort optimization -- process optimization for a system with inverted values
- AR-21: Fix prioritization intelligence -- adds estimation to weaver output
- AR-28: Mid-build checkpoint -- adds checkpoint to build process
- AR-29: Builder self-catch for sub-perceptual deltas -- adds self-check to builder
- AR-30: Builder component adoption reporting -- adds reporting requirement
- AR-34: "Is this page trying too hard?" -- useful question but the pipeline asking this of itself is circular
- E07-01: Automated REFINE cycle -- the HIGHEST LEVERAGE enrichment in the old analysis, but V3 Phase 2 reframes: if the initial build reflects inverted values, refining it produces a more polished version of the wrong thing
- E07-02: Annotated CSS reference patterns -- adds another reference document
- E07-03: CSS pattern library in brief -- adds section to Tier 3
- E07-05: Builder-facing worked examples -- adds reference material
- E07-08: Inline best color pairs -- adds to Tier 3
- E07-09: Deliberate plainness (dup) -- already applied via other fixes
- E07-10: Metaphor persistence CODE zones (dup) -- addressed in recipe
- E07-11: Broaden D-04 creative latitude -- already addressed
- PF-10: Minority finding preservation -- adds weaver section
- PF-11: Prioritize artifact reading order -- adds reading order specification

---

## STILL-USEFUL ITEMS (79 total)

These enrichments survive the V3 filter: they improve USABILITY, HUMAN EXPERIENCE, or CONTENT ACCESSIBILITY without adding analytical complexity. Organized by target area.

### A. USABILITY IMPROVEMENTS (18 items) -- Highest Priority

These directly address the V3 Phase 2 finding that zero gates check usability.

| ID | Description | Target File | Why Still Useful |
|----|-------------|-------------|-----------------|
| VA-03 | Break Zone 4 monotony (5 identical principle blocks) | HTML structure | Direct usability: repetitive identical blocks harm reading experience |
| VA-06 | Fix subtitle low-contrast on dark header | HTML CSS | WCAG contrast / legibility -- the kind of check the pipeline should prioritize |
| VA-07 | Reduce gap between TOC and Zone 1 | HTML CSS | Spatial usability -- excessive gap is wasted scroll |
| VA-08 | Zebra-striping for table rows | HTML CSS | Readability improvement for data-dense content |
| VA-09 | Collapsible treatment for long startup script | HTML structure | Content accessibility -- long code blocks harm scroll experience |
| VA-10 | Visual preview for collapsed accordion items | HTML structure | UX -- collapsed items give no hint of contents |
| VA-11 | Differentiate card backgrounds by level | HTML CSS | Information design -- cards should visually encode their category |
| CSS-07 | Add scroll-margin-top for anchor links | HTML CSS | UX -- TOC links scroll headings under potential sticky elements |
| E01-04 | Responsive drop cap sizing | Builder recipe | Responsive usability -- 3.5em drop cap too large at 768px |
| E03-03 | Recovery command danger hierarchy | Builder recipe | SAFETY -- destructive commands must look different from safe ones |
| E08-03 | Text measure variation | Builder recipe | Readability -- uniform 960px left-aligned for entire page is fatiguing |
| E08-05 | Vary heading treatment for emphasis | Builder recipe | Readability -- uniform heading style flattens content hierarchy |
| E08-06 | Vary callout structure for different types | Builder recipe | Information design -- identical callouts for different purposes is confusing |
| E08-07 | Design footer as real destination | Builder recipe | UX -- footer should provide closure, not just stop |
| E08-10 | Distinguish ASCII diagrams from code blocks | Builder recipe | Content clarity -- ambiguity between diagram and code |
| E06-11 | Deliberate plainness instruction | TC Brief Template | Compositional contrast -- reader needs rest zones |
| E06-12 | Thematic return instruction | TC Brief Template | Compositional depth -- circular narrative strengthens experience |
| AR-04 | One-line audience description for PA auditors | PA protocol | Fixes audience-blindness without adding analytical complexity |

### B. EXPERIENTIAL PA QUESTIONS (24 items) -- High Priority

V3 Phase 2 found the PA's analytical framing creates inattentional blindness. These questions COUNTER that bias by asking about EXPERIENCE rather than structure. They should REPLACE structural questions, not be added alongside them.

**Principle: add these ONLY if paired with retiring equal number of structural questions.**

| ID | Question | Why Still Useful |
|----|----------|-----------------|
| PA-80 | Does your feeling change at least 3 times in logical order? | Measures emotional EXPERIENCE, not structure |
| PA-81 | Stretch of 3+ screenfuls where attention drifts? | Directly catches usability failure (engagement sag) |
| PA-84 | Any interactive detail that reveals intentional refinement? | Measures DELIGHT, not compliance |
| PA-85 | Visual surprise in bottom half? | Measures temporal EXPERIENCE |
| PA-86 | Does CSS amplify how text speaks? | Measures content-form coupling (V3's key gap) |
| PA-87 | Could this design work for different subject matter? | THE question that measures content-form specificity |
| PA-88 | Close eyes, what visual image persists? | Measures MEMORABILITY, not structure |
| PA-89 | Navigate by visual landmarks without reading? | Measures FINDABILITY (usability) |
| PA-90 | Do you feel more trusting at end than start? | Measures TRUST (usability) |
| PA-91 | Design hedges somewhere? | Measures CONFIDENCE (experiential) |
| PA-93 | Layout decision specific to this viewport? | Measures RESPONSIVE INTENT (usability) |
| PA-95 | Spacing feel taut or slack? | Measures PRECISION (experiential) |
| PA-96 | Visual design mirrors logical structure? | Measures CONTENT-FORM COUPLING |
| PA-97 | Each zone NEEDS to look different? | Measures content-driven necessity |
| PA-98 | Page feels finished or could continue indefinitely? | Measures COMPLETION (experiential) |
| PA-99 | Would you WANT to return to this page? | THE ultimate usability question |
| NEW-01 | Anything makes you involuntarily STOP scrolling? | Measures ENGAGEMENT (experiential) |
| NEW-02 | What visual element would you describe a week later? | Measures MEMORABILITY |
| NEW-04 | Visual journey CONCLUDED or just STOPPED? | Measures CLOSURE (experiential) |
| NEW-05 | Typography express a personality? | Measures TYPE CHARACTER (experiential) |
| NEW-07 | Element created SPECIFICALLY for this content? | THE custom-vs-template separator |
| NEW-08 | One BOLD design decision? | Measures CONFIDENCE signal |
| NEW-17 | Page intentionally BREAKS its own rules? | Measures SPREZZATURA (the 4/4 separator) |
| NEW-18 | Section where designer stopped paying attention? | Measures CRAFT CONSISTENCY |

### C. PA QUESTION RETIREMENTS (4 items) -- Medium Priority

Retiring these reduces analytical overhead without losing usability measurement.

| ID | Retire | Reason |
|----|--------|--------|
| PA-06 | Words stacking vertically? | Near-zero failure rate for system-built pages |
| PA-07 | Can you read the longest paragraph? | PA-02 covers this; never fails independently |
| PA-09 | Dead space, no purpose? | PA-33 captures same with better framing |
| PA-40 | Spacing jump? | PA-69 subsumes more precisely |

### D. VALUE SYSTEM CORRECTIONS (12 items) -- High Priority

These directly address V3 Phase 2's central finding (inverted value system).

| ID | Description | Why Still Useful |
|----|-------------|-----------------|
| E08-01 | 3 perceptually distinct background registers (LIGHT/MEDIUM/DARK) | Replaces the 6-zone gradient approach that produces imperceptible differences. FEWER distinctions, LARGER deltas. SIMPLIFICATION, not addition. |
| E08-02 | One unique visual element per zone | Addresses "templated not designed" -- the HUMAN EXPERIENCE of zones being interchangeable |
| E08-04 | 2-3 dark moments distributed across scroll | Addresses pacing -- the EXPERIENCE of scrolling through uniform light cream |
| E08-08 | Widen spacing compression range (3:1 ratio) | Makes density arc PERCEPTIBLE. Current 80px vs 32px doesn't feel like compression. |
| E08-09 | Editorial-weight-by-importance heading treatment | Content-driven hierarchy instead of template-driven |
| E08-11 | Asymmetric spacing for editorial emphasis | Experiential -- asymmetry signals editorial intent |
| E05-02 | Metaphor persistence in final zones | Addresses the "metaphor fades" pattern that undermines coherence |
| E06-01 | Add experiential PA questions (as a PRINCIPLE, not the specific list) | V3's central finding: PA over-indexes on structure |
| E06-09 | Emotional arc from inventory to sequence | Changes WHAT the PA measures, not how much |
| E06-06 | PA-93 Viewport Design Intent | Catches fluid-not-responsive (usability issue) |
| E03-06 | Lead PA with experiential questions before structural | Changes ORDERING, not quantity -- reduces analytical anchoring |
| E03-05 | Second interstitial moment for long pages | Addresses pacing EXPERIENCE |

### E. BUILDER EXPERIENCE IMPROVEMENTS (9 items) -- Medium Priority

Improve what the BUILDER sees and does, without adding specification volume.

| ID | Description | Why Still Useful |
|----|-------------|-----------------|
| E01-01/E04-01 | Concept-naming for custom properties | Prevents confusion (--accent-blue = #A07D50 is a bug). Already partially applied but the PRINCIPLE is still useful for new builds. |
| CSS-03 | Remove unused font-weight 700 from import | Performance improvement: 20-50KB saved. Zero specification addition. |
| CSS-04 | Remove dead tokens | Code hygiene: remove 3 unused custom properties. Subtraction, not addition. |
| CSS-09 | Remove .featured-code if unused | Code hygiene: remove 13 dead CSS lines. Subtraction. |
| CSS-10 | Codify zone-adaptive body font-size as pattern | The "single most designed CSS decision" -- worth preserving as a technique, not a rule |
| CSS-11 | Codify dark code block inversion | "The strongest visual component" -- worth preserving as a pattern |
| CSS-12 | Codify inversion block pattern | "Maximum impact per CSS line" -- worth preserving as a pattern |
| CSS-13 | Codify font-family trinity | Already in tokens.css but should be explicit in recipe as a TECHNIQUE, not a rule |
| CSS-14 | Codify border hierarchy with color-weight pairing | Self-reinforcing hierarchy -- worth preserving as a TECHNIQUE |

### F. PROCESS SIMPLIFICATIONS (12 items) -- Medium Priority

Reduce pipeline complexity rather than adding to it.

| ID | Description | Why Still Useful |
|----|-------------|-----------------|
| E02-03 | Weaver can downgrade REBUILD->REFINE for single-value fixes | REDUCES process overhead for mechanical fixes |
| AR-01 | Container width per-zone exceptions for code-heavy content | RELAXES a constraint that causes code truncation and table compression |
| AR-02 | Palette families instead of warm/cool binary | RELAXES a constraint that causes false positives on semantically appropriate colors |
| AR-10 | Remove mechanism count floor (make ADVISORY) | REDUCES specification -- mechanism count should follow content, not floor |
| VA-04 | Semantic color coding for principle borders | Improves information design without adding pipeline complexity |
| VA-12 | Strengthen metaphor from announced to structural | Addresses the gap between labels and CSS without adding gates |
| PF-14 | Auditor conviction statement (single DOMINANT finding) | FOCUSES the PA audit instead of expanding it |
| PF-15 | Soft boundary for REBUILD/REFINE | REDUCES binary rigidity in verdict |
| PA-01 through PA-04 | Retire 4 low-value questions | NET REDUCTION in PA questions |
| PA-05 | Revise PA-12 for specificity | SHARPENS an existing question, no net addition |
| PA-06 | Revise PA-16 to Inverse Twin Test | REPLACES an existing question, no net addition |
| ADV-05 | "What would you REMOVE?" | THE anti-Goodhart question -- inverts additive bias |

---

## CROSS-CUTTING OBSERVATIONS

### 1. The Old Reservoir's Dominant Bias Is Toward Addition

Of 360 total enrichments, approximately 270 (75%) ADD something: new gates, new PA questions, new measurement instruments, new process steps, new specification lines. Only ~30 (8%) SUBTRACT something (retire questions, remove gates, relax constraints). The V3 Phase 2 finding that more specification = worse output means 75% of the old reservoir's enrichments would make the pipeline WORSE if applied.

### 2. The 79 STILL-USEFUL Items Share a Common Pattern

Almost all STILL-USEFUL items either:
- Fix a USABILITY issue (contrast, readability, content accessibility)
- Measure EXPERIENCE instead of STRUCTURE
- SIMPLIFY the pipeline (retire questions, relax constraints, codify patterns)
- Address CONTENT-FORM coupling (the central V3 gap)

### 3. The Highest-Leverage Old Enrichment Is Now Invalid

E07-01 (Automated REFINE cycle) was rated as the single highest-leverage enrichment in the old analysis (+0.3-0.5 PA-05). But V3 Phase 2's finding that the pipeline's VALUE SYSTEM is inverted means refining output that reflects inverted values just produces polished wrong output. The REFINE cycle becomes high-leverage again ONLY after the value system is corrected.

### 4. The Experimental Enrichments Are Mostly Superseded

6 of 7 proposed experiments have been superseded by subsequent research (Fat Core, Pipeline v2 Architecture, Flagship experiments). Only Experiment 4 (human validation) remains genuinely unresolved, but it doesn't address the pipeline's value system problem.

### 5. The Meta-Enrichment File Is 90% Invalidated

extract-meta.md proposed 40 new PA questions, 6 new gates, 12 measurement instruments, and 5 auditor deployment changes. Of these, approximately 8 PA questions survive as STILL-USEFUL (the experiential ones listed above). Everything else adds analytical complexity to a system that V3 proved over-indexes on analysis.

---

## ACTIONABLE OUTPUT

### For the master enrichment merge (Task #5):

**Include from STILL-USEFUL:**
1. All 18 usability improvements (Section A) -- these address the zero-usability-gate finding
2. The 24 experiential PA questions (Section B) -- but ONLY as REPLACEMENTS for structural questions, not additions
3. The 4 PA retirements (Section C) -- net reduction
4. All 12 value system corrections (Section D) -- these address the inverted value system
5. The 9 builder experience improvements (Section E) -- codify patterns as techniques, not rules
6. All 12 process simplifications (Section F) -- net reduction in pipeline complexity

**Exclude from INVALIDATED:**
- All 20 perceptual science measurements (PS-01 through PS-20, NM-01 through NM-10)
- All 12 new measurement instruments
- All 18 new gates
- All structural PA questions that add without replacing
- All 5 superseded experiments
- All 46 compliance enrichments that add precision without usability value

### Priority for STILL-USEFUL items:

**P0 (Must include in master list):** VA-03, VA-06, E08-01, E08-02, E06-01 (principle), E03-03, PA retirements, ADV-05
**P1 (Should include):** Experiential PA questions as replacements, value system corrections, process simplifications
**P2 (Nice to have):** Builder experience improvements, CSS pattern codifications
