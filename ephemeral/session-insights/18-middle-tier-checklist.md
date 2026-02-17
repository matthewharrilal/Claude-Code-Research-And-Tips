# Middle-Tier Experiment: Granular Deliverables Checklist

**Date:** 2026-02-15
**Author:** checklist-builder (clarification-enrichment team)
**Last Modified:** 2026-02-15 (hardening pass: PA-05 operationalization, mechanism hardening, 9 new items, Section B reorder, E-section deduplication)
**Purpose:** Comprehensive binary pass/fail checklist for evaluating the Middle-tier experiment -- from pre-build decisions through post-experiment implications. Every item is verifiable.

**Usage:** This checklist serves THREE purposes:
1. **Pre-build:** Verify the master execution prompt covers every requirement
2. **During build:** Builder uses this as a verification scaffold
3. **Post-build:** Evaluator uses this as the scoring rubric

---

## A. PRE-BUILD DECISIONS

### A1. M1 Timing Decision

Every item below is PASS/FAIL. The decision itself can be any of the three options -- what matters is that the decision is DOCUMENTED with rationale.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| A1.0 | M1 current status verified | Document states: "Checked SKILL.md lines 905-930 (or equivalent mechanism selection section). Current text says: [quote actual text showing per-category minimum protocol]. Based on this, M1 has been applied (option a is the current state)." | No verification of current skill state, or quote shows "sample 2-4 mechanisms" (old state), or option selection not documented based on actual skill content | M1 was originally Wave 2, not Wave 1. The skill was JUST updated to include per-category minimums. If the builder doesn't verify this, they may incorrectly assume the old "sample 2-4" instruction is still active. This item confirms that option (a) "M1 applied to skill before build" is the reality, not a hypothetical. The actual skill content determines which A1 option applies. |
| A1.1 | M1 timing decision documented | Document states one of: (a) M1 applied to skill before build, (b) manual override in builder prompt, (c) two-build comparison | No decision documented, or decision made implicitly | Without M1, the skill says "sample 2-4 mechanisms" which DIRECTLY CONTRADICTS the 8-10 mechanism Middle-tier hypothesis. This was identified as the single most limiting specification by ALL 11 research agents. |
| A1.2 | Rationale for chosen approach documented | At least 2 sentences explaining WHY this approach was chosen over alternatives | Just "we picked option A" with no reasoning | The M1 sequencing was arguably a mistake (Wave 2 instead of Wave 1). The choice here determines whether the experiment tests the SKILL or the CONCEPT. Both are valid but different. |
| A1.3 | If option (a): M1 replacement text applied to SKILL.md | Lines ~882-887 replaced with per-category protocol from master execution prompt Section 4 M1 | Old "Sample 2-4 mechanisms" text still present | Builder seeing "sample 2-4" will deploy 2-4, not 8-10. Experiment cannot test Middle hypothesis with old instruction. |
| A1.4 | If option (b): Builder prompt contains explicit per-category override | Builder prompt includes: "IGNORE 'sample 2-4' instruction. Instead deploy 1+ mechanism per category (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav)" | Builder prompt references skill without override, or override is vague ("use more mechanisms") | A vague override like "use 8-10 mechanisms" triggers Goodhart's Law (padding to hit number). Per-category minimum ensures breadth. |
| A1.5 | If option (c): Both builds have identical content and conditions except M1 | Same content, same builder agent, same prompt EXCEPT for mechanism selection instruction | Different content, different agents, or other variables changed | Comparison is only valid if M1 is the isolated variable. |

### A2. Content Selection

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| A2.1 | Word count: 800-1,200 words | Actual word count measured and within range | Below 800 (too thin for structure) or above 1,200 (scope creep) | Content <300 words cannot support 8 mechanisms (M1 short-content calibration). 800-1,200 is the validated zone for Middle-tier testing. |
| A2.2 | Contains prose paragraphs | At least 3 paragraphs of narrative/explanatory prose | Pure list/table/code content with no prose | Prose exercises spatial mechanisms (spacing compression, zone backgrounds) that structured-only content does not. |
| A2.3 | Contains code blocks | At least 2 code blocks present in content | Zero code blocks | Code blocks exercise mechanism #17 (Code Block) from the Component category. Without code, that category loses a primary deployment target. |
| A2.4 | Contains callouts/tips/warnings | At least 2 callout-type elements | Zero callout elements | Callouts exercise mechanism #2 (2-Zone Component DNA) and mechanism #10 (Border-Left Semantic Signal). Key Component and Depth/Emphasis category mechanisms. |
| A2.5 | Contains hierarchical headings | Headings at 2+ levels (e.g., H2 + H3, or H1 + H2 + H3) | Only one heading level | Multi-level headings exercise mechanism #1 (Border-Weight Gradient) and mechanism #11 (Typographic Scale Jumping) from the Hierarchy category. |
| A2.6 | Contains table OR reference section | At least 1 data table, parameter table, or structured reference section | No tabular/reference content | Tables/references exercise mechanism #18 (Data Table) from the Structure/Navigation category. Without this, full 5-category coverage requires fallback mechanisms. |
| A2.7 | Contains step sequence OR numbered procedure | At least 1 sequential procedure (3+ steps) | No sequential content | Step sequences provide natural density progression points, validating CRESCENDO pattern mapping. |
| A2.8 | Content domain different from Variant B | Content is NOT about scientific calibration, laboratory instruments, or measurement science | Content overlaps with Variant B's "scientific calibration laboratory" domain | Variant B tested scientific calibration. Fresh domain eliminates "same content, different mechanism count" confound. We need content-mechanism fit to emerge from NEW content. |
| A2.9 | Content is NOT self-referential | Content is NOT about the design system itself, its pipeline, its mechanisms, or its ontology | Content describes KortAI, the tension-composition pipeline, mechanisms, or the tier model | The skill explicitly says ABORT for self-referential content. Self-referential content creates circular reference problems. |
| A2.10 | Content type maps to a density pattern | Content type clearly maps to exactly one of: CRESCENDO / F-PATTERN / BENTO / PULSE via the M5 routing table | Content type is ambiguous between patterns, or doesn't match any pattern | Middle-tier pages use lookup-based pattern selection. If content doesn't cleanly map, the experiment tests edge-case routing instead of core Middle hypothesis. |

### A3. Content Structural Verification (Post-Selection)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| A3.1 | Structural element type count >= 4 | Content contains at least 4 of: prose, code blocks, callouts/tips, tables, step sequences, headings, lists | Fewer than 4 structural element types | Variant B was prose-dominant and only exercised 2/5 categories. 4+ element types is the minimum to naturally exercise all 5 mechanism categories. |
| A3.2 | No single element type dominates >60% | No single structural element (prose, code, etc.) accounts for more than 60% of content | One element type is >60% of content by word count or line count | Prose-dominant content hit a "mechanism ceiling" at 6 in Variant B. Mixed content is necessary to test the 8-10 mechanism range. |
| A3.3 | Content selected documented with criteria checklist | Written record showing A2.1-A2.10 were verified before build began | No pre-build content verification documented | Without documented verification, post-hoc rationalization can explain away content selection gaps. |

### A4. Density Pattern Selection

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| A4.1 | Pattern selected from 4-option lookup table | Pattern is one of CRESCENDO / F-PATTERN / BENTO / PULSE, selected via content-type-to-pattern mapping in M5 | Pattern is something else, or no pattern selected, or pattern selected by aesthetic preference | Middle-tier removes creative judgment from pattern selection. Pattern is a lookup, not a design decision. This IS the hypothesis being tested. |
| A4.2 | Pattern selection justified with content-type reasoning | Written justification: "This content is [type] BECAUSE [evidence], which maps to [pattern] BECAUSE [rationale from M5 table]" | Just "I chose CRESCENDO" with no content-type mapping | The M5 table maps content types to patterns (tutorial -> CRESCENDO, reference -> F-PATTERN, etc.). The justification must trace through this mapping. |
| A4.3 | Pattern NOT hardcoded to CRESCENDO without content analysis | If CRESCENDO: content type is demonstrably tutorial/step-by-step. If not tutorial: different pattern selected | CRESCENDO selected for non-tutorial content, or selected because "the docs kept saying CRESCENDO" | Earlier discussion defaulted to CRESCENDO because tutorial content was assumed. The builder must select based on actual content, not on what the planning docs said. |
| A4.4 | Hybrid content handled correctly | If content is hybrid: dominant pattern identified and documented. Hybrid pattern composition explicitly noted as Ceiling-tier capability, not attempted at Middle | Hybrid content triggers multi-pattern composition (Ceiling behavior at Middle tier) | Step 0D in the skill explicitly states: "If content is HYBRID, select the DOMINANT pattern. Hybrid pattern composition is a Ceiling-tier capability, not Middle-tier." |

### A5. Mechanism Deployment Approach

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| A5.1 | Per-category minimum approach documented | Document states that builder will deploy 1+ mechanism from EACH of 5 categories: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation | Mechanism selection described as "pick 8-10 from the catalog" without category structure | Per-category minimum ensures BREADTH. "Pick 8-10" ensures COUNT. Breadth was the research recommendation; count was explicitly rejected (Goodhart's Law). |
| A5.2 | Builder instructed to read FULL mechanism catalog | Builder prompt says "Read ALL 18 mechanisms" (not "sample 2-4" or "scan for relevant ones") | Builder instructed to sample or skim the catalog | The old "DO NOT read all mechanisms" instruction was identified as the single most limiting specification. Full catalog reading ensures informed mechanism selection across all categories. |
| A5.3 | Mechanism count described as NATURAL LANDING, not target | Tier documentation describes 8-10 as "what Middle naturally produces when breadth is ensured" not "deploy exactly 8-10" | 8-10 described as a target, quota, or minimum count | Mechanism counts were backward-engineered (Variant B -> 5, OD-004 -> 12-15, CD-006 -> 16-18). They describe natural landing zones for each effort level, not targets. Treating them as targets creates padding incentive. |

---

## B. BUILD REQUIREMENTS (Reordered by Build Workflow)

**REORDER NOTE:** This section has been restructured to follow the natural build sequence.
Items are checked in the order they should be verified during construction, not pedagogical order.

**Build sequence:** Read constraints (B8) -> Classify tier (B1) -> Know guardrails (B9) -> Set container (B2) -> Deploy mechanisms (B3-B6) -> Verify soul (B7) -> Additional quality (B10)

### B8. Token Compliance (STEP 1: READ FIRST -- BEFORE ANY DESIGN)

**REORDER NOTE:** This subsection has been moved from position 8 to position 1.
B8.2 (Always-load protocol) MUST be completed BEFORE any design decisions in B1-B7 or B9.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B8.1 | Token compliance >= 80% | At least 80% of CSS values for spacing, color, typography, and border reference tokens.css custom properties (directly or via derived values) | Token compliance below 80% | All Track 2 Phase D variants achieved 97-100% token compliance. 80% is a generous floor. Below this means the builder is inventing values instead of using the vocabulary. |
| B8.2 | Always-load protocol completed | Builder read prohibitions.md (353 lines) AND tokens.css (174 lines) BEFORE any design work | Evidence that builder started design without reading prohibitions.md and tokens.css | Track 1's instant fail in Phase D was caused by skipping always-load. 5 critical violations resulted. 527 lines mandatory overhead, zero exceptions. |

### B1. Pipeline Routing (STEP 2: CLASSIFY TIER AND PATTERN)

**REORDER NOTE:** This subsection has been moved from position 1 to position 2.
Complete B8 (read soul files) BEFORE tier classification.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B1.1 | Builder classified content as Middle tier | Tier classification output present: "TIER: Middle" | No tier classification, or classified as different tier | M5 routing requires explicit tier classification before pipeline selection. Middle-tier pages skip Phases 1-3. |
| B1.2 | Phases 1-3 skipped | Builder did NOT perform: multi-axis questioning (Phase 1), tension derivation (Phase 2), or metaphor collapse (Phase 3) | Builder derived a metaphor, performed tension analysis, or ran multi-axis questioning | Middle-tier pages do not derive metaphors. Running Phases 1-3 means the builder is following the Ceiling pipeline, not Middle. This invalidates the experiment. |
| B1.3 | Builder went directly to Phase 4.0 | First design work begins at Phase 4.0 (Perceptual Guardrails) with selected density pattern | Builder started at Phase 1, or started CSS without Phase 4.0 guardrails check | Phase 4.0 guardrails are NON-NEGOTIABLE at every tier. Skipping Phases 1-3 does NOT mean skipping Phase 4.0. |
| B1.4 | Tier classification documented with M5 format | Output includes: TIER, PATTERN, JUSTIFICATION, SKIP, NEXT fields | Tier classification is informal or undocumented | The M5 format ensures all routing decisions are traceable. Without it, we cannot verify the routing was correct. |

### B9. Guardrail Compliance (STEP 3: KNOW PADDING FLOORS)

**REORDER NOTE:** This subsection has been moved from position 9 to position 3.
Complete B9 BEFORE B2 (container width decisions) to avoid constraint violations.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B9.1 | Minimum horizontal padding >= 32px | Outer padding on content containers is at least 32px per side | Padding < 32px on any content container | Phase 4.0 guardrail: "Absolute floor even at maximum compression." |
| B9.2 | Characters per line: 45-80 | Body text CPL measured at 1440px is between 45 and 80 | CPL < 45 (excessive ragging) or CPL > 80 (WCAG fail) | Phase 4.0 guardrail. CPL > 80 is a WCAG 2.1 accessibility violation. |
| B9.3 | Compression ratio: deepest >= 40% of shallowest | If shallowest section padding is X, deepest section padding is >= 0.4X | Deepest padding < 40% of shallowest padding | Phase 4.0 guardrail: prevents over-compression. If topsoil = 80px, bedrock cannot go below 32px. |
| B9.4 | Body line-height >= 1.5 | Body text line-height is at least 1.5 | line-height < 1.5 for body text | WCAG 2.1 SC 1.4.12 accessibility floor. Non-negotiable. |
| B9.5 | Section breathing zones >= 48px | Spacing between major sections is at least 48px | Any major section gap < 48px | Phase 4.0 guardrail: "magazine quality floor." |
| B9.6 | Heading-to-body gap >= 16px | Spacing between headings and following body text is at least 16px | Gap < 16px | Phase 4.0 guardrail for editorial readability. |
| B9.7 | Page renders at 1440px without horizontal scroll | At 1440px viewport, no horizontal overflow | Horizontal scrollbar appears at 1440px | Basic layout correctness. Horizontal overflow means a container or element exceeds viewport. |
| B9.8 | Page renders at 768px without layout breaks | At 768px viewport, all content is accessible, no overlapping elements, no truncated text | Layout breaks, overlapping elements, or inaccessible content at 768px | Responsive design requirement. Audit at both 1440px and 768px is standard protocol. |

### B2. Container Width (STEP 4: SET CONTAINER WITH GUARDRAILS IN MIND) (NON-NEGOTIABLE)

**REORDER NOTE:** This subsection has been moved from position 2 to position 4.
Complete B8 (tokens), B1 (tier), B9 (guardrails) BEFORE setting container width.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B2.1 | Container max-width in CSS is 940-960px | Computed max-width of main container element at 1440px viewport is between 940px and 960px inclusive | max-width < 940px OR max-width > 960px OR no explicit max-width set | Container width was THE primary Phase D failure mode. 4/5 pages violated 940-960px. M3 makes this NON-NEGOTIABLE with NEVER override. This is the single highest-priority binary check. |
| B2.2 | Container width verified at 1440px viewport | Measurement taken at exactly 1440px viewport width | Measurement at different viewport width, or not measured | 940-960px is calibrated for 1440px viewport (65-67% content-to-viewport ratio). At other widths, the ratio changes. |
| B2.3 | No secondary containers below 940px | All content-containing containers have width >= 940px at 1440px | Any content container narrower than 940px (excluding intentional internal padding on a 940-960px parent) | "Express narrowing through INTERNAL spacing, not external width reduction" -- narrower containers are the wrong implementation of narrow aesthetics. |
| B2.4 | If narrow aesthetic desired: internal padding used | Narrow visual achieved via padding (e.g., `max-width: 960px; padding: 0 120px;`) NOT container width reduction | Container narrowed to <940px to achieve narrow aesthetic | The skill provides explicit correct/wrong examples. Container at 960px + padding at 120px/side = 720px content width WITHOUT violating the 940-960px container rule. |
| B2.5 | Container width priority order documented | Builder documentation explicitly states: "Container width 940-960px is HIGHEST priority (never compromise). If metaphor or aesthetic demands narrowing, express via internal padding (e.g., max-width: 960px + padding: 0 120px = 720px content width), NOT external width reduction." | No priority order documented, or priority order states metaphor/aesthetic can override container width, or escape hatch strategy not documented | Container width 940-960px is NON-NEGOTIABLE per M3. The escape hatch (internal padding) is the CORRECT way to satisfy narrow aesthetics without violating the width floor. Without explicit documentation, builders may reduce container width thinking it's acceptable if "metaphor demands it." Phase D showed this was the #1 failure mode. |

### B3. Mechanism Deployment Breadth (STEP 5: DEPLOY ACROSS CATEGORIES)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B3.1 | At least 1 Spatial mechanism deployed | At least one of: #5 Dense/Sparse Alternation, #6 Width Variation, #15 Bento Grid | Zero Spatial mechanisms | Per-category minimum ensures vocabulary breadth. Missing an entire category means the page lacks a fundamental dimension of spatial design. |
| B3.2 | At least 1 Hierarchy mechanism deployed | At least one of: #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale Jumping | Zero Hierarchy mechanisms | Hierarchy mechanisms encode importance/structure. Without them, the page has no visual weight system. |
| B3.3 | At least 1 Component mechanism deployed | At least one of: #2 2-Zone Component DNA, #9 Confidence Encoding via Color, #10 Border-Left Semantic Signal, #17 Code Block | Zero Component mechanisms | Component mechanisms define internal component patterns. Without them, components are generic boxes. |
| B3.4 | At least 1 Depth/Emphasis mechanism deployed | At least one of: #3 Solid Offset Depth, #7 Zone Background Differentiation, #16 Drop Cap | Zero Depth/Emphasis mechanisms | Depth mechanisms create visual layering. Without them, the page is flat (a known limitation of Variant B). |
| B3.5 | At least 1 Structure/Navigation mechanism deployed | At least one of: #8 Scroll Witness/Sticky TOC, #12 Progressive Disclosure, #13 Dark Header + 3px Border, #14 Footer Mirror, #18 Data Table | Zero Structure/Navigation mechanisms | Structure mechanisms provide page chrome and navigation. Without them, the page lacks "designed" infrastructure. |
| B3.6 | All 5 categories have at least 1 mechanism | B3.1 AND B3.2 AND B3.3 AND B3.4 AND B3.5 all PASS | Any single category has 0 mechanisms | This is the compound check. Variant B deployed across only 2 categories. Full 5-category coverage is THE differentiator for Middle tier. |

### B4. Mechanism Deployment Count (STEP 6: VERIFY COUNT)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B4.1 | Total mechanism count is 7-12 | Total unique mechanisms deployed is between 7 and 12 inclusive | Fewer than 7 (Floor-tier) or more than 12 (Ceiling-tier territory) | Middle-tier natural landing is 8-10, validated via tier model research. Floor tier is 5 mechanisms. Middle MUST be > Floor, therefore floor raised to 7. Below 7 = Floor behavior (insufficient vocabulary breadth). Above 12 = Ceiling behavior (multi-channel coherence expected). |
| B4.2 | No mechanism deployed solely to hit a count target | Every deployed mechanism has a content-based justification (B5.1) | Any mechanism's justification is "to reach 8 mechanisms" or similar count-based reasoning | Goodhart's Law: when count becomes the target, builders pad with unfitting mechanisms. The per-category minimum should produce natural count, not the reverse. |
| B4.3 | Count emerged from breadth, not from targeting | Mechanism count is a CONSEQUENCE of per-category selection, documented as such | Builder started with a target number and worked backward to fill categories | The research explicitly states: "Natural landing zones emerge from breadth, not from number-targeting." The order matters: categories first, count observed afterward. |
| B4.4 | Mechanism interaction documented | Document at least 2 pairs of mechanisms that REINFORCE each other to encode a shared content dimension. Format: "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]." | Fewer than 2 reinforcing pairs documented, OR pairs documented without shared dimension explanation | Prevents independent mechanism padding. Mechanisms should work as a SYSTEM encoding content structure, not as isolated techniques applied to different problems. Multi-channel coherence is what creates spatial argument. |
| B4.5 | Mechanism perceptibility verified | All deployed mechanisms are VISIBLE to a reader without developer tools. If a mechanism's CSS values differ by less than 10% OR 8px (whichever is greater), the mechanism is NOT deployed. | Any mechanism has CSS differences below the perceptibility threshold (e.g., 48px vs 49px padding = imperceptible, width 98% vs 100% = imperceptible) | Prevents gaming via invisible deployment. A mechanism that exists in CSS but is imperceptible in rendering is decorative padding to hit a count target, not a functional design decision. The perceptibility floor makes "deployed" mean "visible." |

### B5. Mechanism Justification (STEP 7: DOCUMENT MECHANISM-CONTENT FIT)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B5.1 | Each deployed mechanism has 1-sentence content justification | For EVERY mechanism: "I deploy [mechanism name] BECAUSE [content feature] at [location]" | Any mechanism has no justification, or justification is "it's in the catalog" | Without justification, mechanism deployment is arbitrary. The justification links mechanism to content, which is what "content-mechanism fit" means. |
| B5.2 | At least 3 rejected mechanisms have 1-sentence rejection rationale | For at least 3 mechanisms NOT deployed: "I reject [mechanism name] BECAUSE [reason it doesn't fit THIS content]" | Fewer than 3 rejections documented, or no rejections documented | Rejection rationale proves the builder evaluated the full catalog, not just grabbed the first 8. It demonstrates JUDGMENT, not just compliance. |
| B5.3 | Justifications reference content features, not catalog descriptions | Justifications say "this content has [code blocks / hierarchy / sequential steps] so mechanism X fits" NOT "mechanism X is for [catalog description]" | Justifications parrot catalog descriptions instead of analyzing content | Content-mechanism fit means the content NEEDS the mechanism. Parroting catalog descriptions means the builder is matching keywords, not analyzing structure. |

### B6. Fractal Coherence (STEP 8: VERIFY 2-SCALE PATTERN COHERENCE) (2 Scales for Middle)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B6.1 | Scale coverage table completed for 2 scales | Table includes rows for Page scale AND Component scale with Pattern Expression and CSS Evidence columns | Table missing, or only 1 scale, or scales other than Page + Component | M2 (fractal gate) requires Middle-tier pages to demonstrate coherence at 2 scales: Page + Component. This was promoted from a 10-line check to a mandatory gate because the check had ~0% compliance. |
| B6.2 | Page scale: overall section sequence follows density pattern | If CRESCENDO: sections progress from sparse to dense across the page. If F-PATTERN: dense left column, sparse right. Etc. | Section sequence has no relationship to selected density pattern, or contradicts it | Page scale is how the full-page scroll feels. If the pattern is CRESCENDO but sections are dense-sparse-dense, the pattern is not expressed at page scale. |
| B6.3 | Component scale: individual components mirror the same direction | Inside components: if CRESCENDO at page scale, component headers should be sparser than component bodies (or similar micro-level expression of the pattern) | Components have no internal density variation, or internal variation contradicts page-level pattern | Component scale is how individual elements feel internally. Fractal means the pattern repeats when you "zoom in" from page to component. |
| B6.4 | CSS evidence provided for Page scale | Specific CSS properties cited: section padding values, background colors, spacing progression | "The page uses CRESCENDO" with no CSS | CSS evidence makes the check objective. "The page uses CRESCENDO" is a claim. "Section padding: 64px -> 32px -> 16px" is evidence. |
| B6.5 | CSS evidence provided for Component scale | Specific CSS properties cited: internal padding, label vs body spacing, density within components | "Components mirror the pattern" with no CSS | Same as B6.4 but at component level. |
| B6.6 | Pattern direction consistent between scales | Page-scale direction matches Component-scale direction (e.g., both sparse-to-dense, not page sparse-to-dense but component dense-to-sparse) | Direction reverses between Page and Component scale | Pattern reversal between scales is an explicit failing criterion in the fractal gate (Step 4.7). Consistent direction is what makes it "fractal." |
| B6.7 | Pattern is structural, not decorative | Pattern expressed through spacing, density, hierarchy, or rhythm -- NOT through color theme or decorative elements | "Pattern" is a color gradient or decorative motif, not a structural density progression | The fractal gate explicitly states: "Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative." Color themes that repeat at 2 scales do not satisfy the gate. |

### B7. Soul Compliance (STEP 9: FINAL VERIFICATION)

**REORDER NOTE:** This subsection has been moved from position 7 to position 9.
Soul compliance is a final verification step after all design work (B2-B6) is complete.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B7.1 | border-radius: 0 on ALL elements | No element has border-radius > 0 anywhere in the CSS | Any border-radius > 0 found | Soul constraint #1 (ABSOLUTE). Sharp edges define KortAI identity. Zero exceptions. |
| B7.2 | box-shadow: none on ALL elements | No element uses box-shadow anywhere in the CSS | Any box-shadow found (including subtle/translucent ones) | Soul constraint #2 (ABSOLUTE). Flat surfaces. Solid-offset depth technique (#3) replaces shadows. |
| B7.3 | No gradients used | No CSS gradient functions (linear-gradient, radial-gradient, conic-gradient) in styling | Any CSS gradient used for visual styling (data visualization exceptions may apply) | Soul constraint. Flat color zones, not blended transitions. |
| B7.4 | No pure black (#000000) used | No color value is exactly #000000 or rgb(0,0,0) | Pure black found in any color property | Soul constraint. Darkest allowed is the deep warm tone from tokens.css. |
| B7.5 | No pure white (#FFFFFF) used | No color value is exactly #FFFFFF or rgb(255,255,255) | Pure white found in any color property | Soul constraint. Lightest allowed is the warm cream from tokens.css. |
| B7.6 | Typography trinity respected | Display headings use Instrument Serif, body text uses Inter, code uses JetBrains Mono | Any font family outside the trinity used for primary content | Typography trinity is a soul constraint. Three fonts, no exceptions for primary content. |
| B7.7 | Color palette from tokens.css | All color values trace to tokens.css custom properties OR are derived within the warm palette | Colors used that don't exist in tokens.css and aren't warm palette derivatives | Token compliance ensures visual identity consistency. |

### B10. Additional Build Quality Checks (STEP 10)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B10.1 | Page uses semantic HTML landmarks | At least 3 of: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` present in HTML structure | All content wrapped in `<div>` elements with no semantic landmarks | Semantic landmarks enable screen reader navigation and signal structural intent. Mechanism #13 (Dark Header) and #14 (Footer Mirror) assume semantic `<header>` and `<footer>` elements. Using `<div class="header">` loses the semantic signal. Zone differentiation (mechanism #7) is reinforced when HTML structure matches visual structure. |
| B10.5 | Zone background colors follow density pattern direction | If pattern is CRESCENDO: background progression moves from lighter (sparse intro) to darker/warmer (dense peak). If F-PATTERN: dense left zone has darker background than sparse right. Background color sequence is consistent with pattern direction documented in B6.2. | Zone backgrounds are random, or reverse the pattern direction (e.g., CRESCENDO page has densest section with lightest background) | Mechanism #7 (Zone Background Differentiation) is a Depth/Emphasis mechanism. If zone colors contradict the density pattern, the page sends conflicting perceptual signals: spatial structure flows one direction (sparse to dense) but visual weight flows the opposite direction. This breaks fractal coherence between color and density channels. |
| B10.7 | Code blocks use mechanism #17 styling (if deployed) | If mechanism #17 deployed: code blocks have (a) dark background (--bg-dark / #1A1A1A or similar), (b) 3px solid border, (c) JetBrains Mono font family, (d) overflow-x: auto for long lines. If mechanism #17 NOT deployed: N/A (PASS). | Mechanism #17 listed as deployed but code blocks use default browser styling, light background, wrong font, or have horizontal overflow without scroll | Mechanism #17 is the Component-category code block standard documented in the catalog. Incorrect implementation means the Component category is nominally covered but visually broken. Dark background distinguishes code zones from body text zones. 3px border provides structural boundary per border-weight grammar. JetBrains Mono is typography trinity requirement for code. Overflow handling prevents layout breaks. |
| B10.9 | Primary text-background contrast ratio >= 4.5:1 (WCAG AA) | Main body text color on main background color meets WCAG AA (4.5:1 minimum). Heading text on their backgrounds meets AA. If inverse text used (light on dark zones): contrast ratio >= 4.5:1. All primary text-background combinations pass. | Any primary text-background combination fails WCAG AA contrast ratio (< 4.5:1) | WCAG 2.1 Level AA requires 4.5:1 contrast for normal text, 3:1 for large text. KortAI's warm palette (#1A1A1A text on #FEF9F5 background) should naturally pass AA. However, muted text colors (--text-secondary #444444, --text-tertiary #888888) on light backgrounds, or inverse text on dark code blocks, could fail. A programmatic contrast check catches these accessibility violations before deployment. |
| B10.12 | Border weights follow 3-category system | All borders use one of: (a) 3-4px structural (section boundaries, header/footer borders, callout accent borders), (b) 1px separator (table cell borders, subtle dividers), (c) Zero 2px borders (unless documented exception with specific justification) | 2px borders used without documented exception, or structural boundaries use 1px (weak encoding), or separators use 3-4px (over-emphasis) | The border-weight grammar is a 3-category system documented in mechanism-catalog.md and skill coherence Rule C-4: 3-4px = structural containment, 1px = separation/subdivision, NEVER 2px. Prohibition #9 specifically targets the "2px border epidemic" (compromise value that lacks intentionality). Violating this grammar means the builder is not using the vocabulary correctly -- borders carry no weight-based meaning. |
| B10.14 | Output is a single self-contained HTML file | One `.html` file with all CSS in `<style>` block within `<head>`, all fonts loaded via CDN links (Google Fonts or similar), no external CSS files required, no external JS files required (except font CDN) | Multiple files (separate .css or .js), external stylesheet `<link>` tags (other than fonts), or local file dependencies | KortAI pages are single-file artifacts for portability and simplicity. Every validated exploration (DD-006, CD-006, OD-004, etc.) is a single HTML file with inline CSS. External CSS files or local dependencies break the established production format. Font CDN links (Google Fonts) are acceptable since fonts are external by nature. The single-file constraint makes pages self-contained and easy to share/archive. |

---

## C. MEASUREMENT AND METRICS

### C1. Structural Metrics

| ID | Metric | Middle-Tier Expected Range | Why This Range |
|----|--------|---------------------------|----------------|
| C1.1 | CSS line count | 350-500 lines | Backward-engineered from tier model. Floor is 150-250, Ceiling is 700-1000. Middle falls between. |
| C1.2 | Custom property count | Document actual count | No target -- this is observational. More custom properties = more systematic design. |
| C1.3 | Grid/flex layout count | 2-3 distinct grid/flex containers | Middle-tier adds grid/flex over Floor. 2-3 layouts break block stacking without Ceiling-level complexity. |
| C1.4 | Pseudo-element count | 1-3 pseudo-elements | Middle uses pseudo-elements for solid-offset depth, decorative borders, etc. Floor uses 0, Ceiling uses 4-8. |
| C1.5 | Responsive breakpoint count | 2-3 breakpoints | Standard responsive: 1440px (desktop), 768px (tablet), optionally 480px (mobile). |
| C1.6 | Total HTML file size | Document actual size | No target -- observational for comparison with Variant B and showcases. |
| C1.7 | Unique color values count | Document actual count | Should correlate with token compliance (B8.1). Most should trace to tokens.css. |

**Pass condition for C1:** All 7 metrics measured and documented. Metrics in "expected range" column are DESCRIPTIVE (what Middle pages naturally produce), not PRESCRIPTIVE (what the builder should target). Out-of-range values are flagged for analysis, not automatically failed.

### C2. Mechanism Analysis

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| C2.1 | Total mechanism count documented | Exact count of unique mechanisms deployed, with list | Count missing or approximate | Required for comparison with Variant B (5 mechanisms) and tier model expectations (8-10 for Middle). |
| C2.2 | Category coverage documented | For each of 5 categories: which mechanisms deployed and which rejected | Category coverage not analyzed | Category coverage is the PRIMARY metric, not total count. Variant B had 7 mechanisms across ALL 5 categories, but only 1-3 mechanisms per category. |
| C2.3 | Specific mechanisms listed by name and number | Each mechanism identified by catalog number and name (e.g., "#1 Border-Weight Gradient") | Mechanisms described vaguely ("we used spacing compression") without catalog reference | Exact identification enables cross-comparison with Variant B and showcases. |
| C2.4 | Comparison table: Middle vs Variant B | Side-by-side showing: mechanism count, category count, specific mechanisms, content type | No comparison, or comparison on different axes | Variant B is the baseline (current pipeline output). Middle experiment measures improvement over this baseline. |
| C2.5 | Mechanism overlap with Variant B documented | How many mechanisms are SHARED between Middle and Variant B, and how many are UNIQUE to Middle | Overlap not analyzed | High overlap (>80%) suggests Middle just adds a few more of the same. Low overlap (<40%) suggests genuinely different mechanism selection driven by content-category mapping. |

### C3. Programmatic Audit

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| C3.1 | Soul compliance score computed | Score expressed as fraction (e.g., 7/7 or 6/7) based on B7.1-B7.7 | No soul compliance score | Soul violations are instant-fail. A computed score makes the severity clear. |
| C3.2 | Guardrail compliance score computed | Score expressed as fraction (e.g., 8/8 or 7/8) based on B9.1-B9.8 | No guardrail compliance score | Guardrail violations range from "readability degraded" to "accessibility violation." Scoring quantifies the severity. |
| C3.3 | Token compliance percentage computed | Percentage of CSS values sourced from tokens.css | No token compliance measurement | Provides a single number for comparison. Phase D Track 2 variants achieved 97-100%. |
| C3.4 | Audit performed via Playwright MCP or equivalent | Computed styles measured from rendered page, not just CSS source | Audit based only on reading CSS source code | CSS shorthand overrides catch bugs that source reading misses. Computed styles are ground truth. |
| C3.5 | Audit protocol compliance | Audit documentation shows: (1) Scroll animations disabled via `animation: none !important; opacity: 1 !important` before measurement, (2) `document.fonts.ready` used before font property checks, (3) Computed styles measured (not CSS source), (4) Header-content alignment, Q/A text alignment, and border shorthand order verified | Audit based only on CSS source code, or animations not disabled during measurement, or font checks before fonts.ready, or alignment issues not checked | Phase D audit found "CSS shorthand overrides catch bugs that source reading misses." Scroll animations create false positives in computed style measurements. Font checks before fonts.ready return wrong values (fonts may not be loaded yet). This protocol prevents these audit gaps. Computed styles are ground truth; CSS source can lie. |

### C4. Perceptual Audit (Mode 2 -- Reduced Scope for Middle)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| C4.1 | PA-01 at 1440px: Container-content ratio | YES: 940-960px container harmonious with content | NO: container too wide/narrow or content-to-viewport ratio wrong | The fundamental spatial relationship. If this fails, everything built on top is compromised. |
| C4.2 | PA-02 at 1440px: Density rhythm | YES: padding variation between sections creates intentional pacing (at least 3 distinct padding values across sections) | NO: all sections have identical padding, or padding variation appears random | Density rhythm is what separates "designed" from "formatted." Identical padding = formatted. Intentional variation = designed. 3-distinct-value minimum makes this binary. |
| C4.3 | PA-03 at 1440px: Zone differentiation | YES: at least 2 visually distinct zones created by background color, border treatment, or spacing | NO: uniform background throughout, no visual zone breaks | Zone differentiation creates visual sections. Without it, the page is a single continuous block. Mechanism #7 (Zone Background Differentiation) is the primary tool. |
| C4.4 | PA-04 at 1440px: Spatial variety | YES: at least 1 grid/flex layout breaks the default block stacking pattern | NO: all content in single-column block flow with no layout variation | Spatial variety is one of the 5 richness dimensions. Block-only stacking is Floor-tier behavior. Middle requires at least 1 layout departure. |
| C4.5 | PA-05 at 1440px: Engagement threshold (operationalized) | Evaluate 4 sub-criteria at 1440px viewport: **PA-05a:** Non-default layout element count >= 2 (asymmetric grids, width-constrained blocks, solid-offset depth elements, full-bleed backgrounds behind constrained content) [PASS/FAIL]. **PA-05b:** Padding range ratio >= 2.0x (largest section padding / smallest section padding >= 2.0) [PASS/FAIL]. **PA-05c:** Visual hierarchy identification test -- fresh agent can identify PRIMARY and SECONDARY zones from 20px Gaussian-blurred screenshot within 3 seconds [PASS/FAIL]. **PA-05d:** Non-framework CSS ratio >= 15% (compositional CSS using calc(), pseudo-elements, non-trivial grid, transforms, nth-child, etc. as proportion of total declarations) [PASS/FAIL]. **Result: 4/4 = YES | 2-3/4 = MARGINAL | 0-1/4 = NO** | PA-05a < 2 non-default elements, PA-05b ratio < 2.0x, PA-05c zones not identifiable, PA-05d compositional ratio < 15% -- 0-1 sub-criteria pass = NO (formatted) | THE critical question operationalized into 4 measurable sub-criteria. Replaces subjective "feels designed" with concrete binary checks. PA-05a captures custom spatial logic beyond frameworks. PA-05b captures meaningful padding variation. PA-05c captures visual hierarchy gestalt. PA-05d captures CSS compositional depth. Together they define "designed" without requiring subjective judgment. |
| C4.6 | PA-01 at 768px: Container-content ratio | YES: content fills viewport appropriately at tablet width | NO: excessive margins, content too narrow, or overflows | Responsive check. Container should adapt gracefully to narrower viewport. |
| C4.7 | PA-02 at 768px: Density rhythm | YES: density rhythm maintained or gracefully adapted at 768px | NO: rhythm collapsed to uniform spacing, or new rhythm that contradicts 1440px | Responsive rhythm. Padding proportions should scale, not disappear. |
| C4.8 | PA-03 at 768px: Zone differentiation | YES: zones still visually distinct at 768px | NO: zones collapsed or indistinguishable at 768px | Zone differentiation should persist across breakpoints. |
| C4.9 | PA-04 at 768px: Spatial variety | YES: layout variation adapted for narrower viewport (e.g., 2-col grid -> stacked) | NO: layout breaks at 768px, or variety completely lost | Grid/flex layouts should adapt, not break. Complete loss of variety at 768px is acceptable only if adaptation is intentional. |
| C4.10 | PA-05 at 768px: Engagement threshold (operationalized) | Evaluate 4 sub-criteria at 768px viewport (adjusted thresholds): **PA-05a at 768px:** Non-default layout element count >= 1 (threshold lowered: grid->stacked is expected, but at least 1 non-default element should survive responsive adaptation) [PASS/FAIL]. **PA-05b at 768px:** Padding range ratio >= 1.5x (threshold lowered: responsive often compresses padding range) [PASS/FAIL]. **PA-05c at 768px:** Visual hierarchy identification test (same method, different screenshot) [PASS/FAIL]. **PA-05d:** Same as 1440px result (CSS doesn't change) [from C4.5]. **Result: 4/4 = YES | 2-3/4 = MARGINAL | 0-1/4 = NO** | Sub-criteria fail at 768px thresholds. Note: 768px thresholds are intentionally lower than 1440px. Responsive adaptation naturally reduces spatial complexity. The question at 768px is "does design SURVIVE adaptation?" not "is design EQUAL to desktop?" | The engagement threshold should persist across viewports. A page that feels designed at 1440px but formatted at 768px has a responsive richness gap. |

**Pass condition for C4:** All 10 items answered with evidence. PA-05 items produce YES/MARGINAL/NO based on 4 sub-criteria scoring. At MINIMUM, PA-01, PA-02, PA-03, PA-04, PA-05 at 1440px must be answered.

**Builder documentation requirement for PA-05c:** During build, the builder must declare:
```
PRIMARY ZONE: [description, e.g., "the main tutorial steps in the center"]
SECONDARY ZONE: [description, e.g., "the API reference table at the bottom"]
```

---

## D. EVALUATION CRITERIA

### D1. Side-by-Side Comparison with Variant B

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| D1.1 | Which has more spatial variety? | Documented answer with evidence: specific layout elements counted in each. Middle should have MORE grid/flex instances. | Comparison not performed, or performed without counting specific instances | Observable metric. Count grid/flex containers in each. Variant B had minimal spatial variety. |
| D1.2 | Which deploys more mechanism categories? | Documented answer: Middle = [X] categories, Variant B = 2 categories (confirmed from Phase D analysis) | Category count not compared | Variant B deployed across only 2 of 5 categories. If Middle also deploys across only 2, the per-category minimum failed. |
| D1.3 | Which has fractal coherence? | Documented answer: Middle has scale coverage table (B6.1), Variant B has [description of scale consistency] | Fractal coherence not compared | Variant B had no fractal gate. Middle should demonstrate 2-scale coherence that Variant B lacks. |
| D1.4 | Density rhythm comparison | Section-to-section padding values listed for both pages. Middle should show more deliberate variation. | Padding not measured for both pages | Measurable by extracting computed padding values for major sections in both pages. Variant B likely has uniform or near-uniform padding. |
| D1.5 | Mechanism count comparison | Middle: [X] mechanisms, [Y] categories. Variant B: 5 mechanisms, 2 categories (from master-agenda 2.3.2, though HANDOFF says 7). Document actual Variant B figure. | Counts not compared | Note: Master agenda Section 2.3.2 says "Variant B: 7 mechanisms, 2 categories" but Section 2.4.1 says "7 mechanisms, 2 categories, 5/44 technique families." HANDOFF Section 2 does not give a mechanism count. Use the most accurate figure. |

### D2. Engagement Threshold Assessment

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| D2.1 | PA-05 engagement scores documented | PA-05 sub-criteria scores documented in structured format: **PA-05a:** [score] -- [list of qualifying elements]. **PA-05b:** [ratio value] -- [max padding]px / [min padding]px. **PA-05c:** [PASS/FAIL] -- [primary zone identified: ___] [secondary zone: ___]. **PA-05d:** [ratio value] -- [compositional count] / [total count]. **Composite:** [YES / MARGINAL / NO] | PA-05 not answered, or answered without structured sub-criteria evidence, or using vague "intentional spatial decisions" claims | THE single most important perceptual question, now operationalized. Each sub-criterion produces specific measurable data. No room for subjective claims. |
| D2.2 | Comparison verdict: better than Variant B | Documented answer: YES / MARGINAL / NO with at least 2 specific observations supporting the verdict | No comparison verdict, or verdict without supporting observations | Relative improvement over current pipeline output is the minimum bar. If Middle isn't better than Variant B, the modifications failed. |
| D2.3 | Spatial atmosphere assessment | Documented answer: "Want to spend time here?" -- YES / SOMEWHAT / NO with evidence | Atmosphere not assessed | This is the user's original motivation: "I didn't feel like I wanted to read this." Pages should be "places you want to spend time in." |
| D2.4 | Fresh-eyes test (if performed) | Agent with zero context views Middle page alongside 3-4 other pages and rates which feel most "designed" | Test not performed (acceptable -- this is optional but recommended) | Fresh-eyes agents find issues that research-loaded agents miss. Zero context eliminates confirmation bias. |

### D3. Novelty Assessment

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| D3.1 | Structural fingerprint comparison | Middle page compared to OD-004 and DD-006 at blur level (20px Gaussian or structural-only view). Documented: DISTINCT or SAME structural shape. | No structural comparison performed | Tests whether the page has its own structural identity or copies showcase page layouts. |
| D3.2 | CSS value overlap measured | For shared mechanisms: % of CSS values that match showcase pages' values. Below 30% = novel. Above 60% = derivative. | CSS value overlap not measured | Same mechanism with different values = vocabulary usage (novel). Same mechanism with same values = template copying (derivative). |
| D3.3 | Mechanism COMBINATION comparison | If Middle deploys multiple mechanisms, are the COMBINATIONS the same as showcase pages or different? | Combination patterns not analyzed | Even if individual mechanisms are novel, if they're combined in the same way as showcases, the page may feel derivative at the structural level. |

---

## E. THE VERDICT (Binary Framework)

### E1. Verdict Decision

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| E1.1 | Verdict is one of SUCCESS / PARTIAL / FAILURE | Document explicitly states exactly one of the three verdicts | No verdict stated, or verdict is ambiguous (e.g., "mostly successful with some concerns") | The experiment requires a clear outcome to drive next steps. Ambiguous verdicts prevent action. |
| E1.2 | Verdict maps to decision matrix | Verdict includes both engagement AND novelty dimensions per Section 6 decision matrix: Designed+Novel / Designed+Derivative / Under-designed+Novel / Under-designed+Derivative | Only one dimension assessed | The master execution prompt provides a 2x2 decision matrix. Both axes must be evaluated for the correct next step. |
| E1.3 | Verdict has 3+ pieces of supporting evidence | At least 3 specific, documented observations support the verdict (from C4, D1, D2, D3 sections) | Verdict supported by fewer than 3 observations, or by purely subjective impression | Evidence prevents post-hoc rationalization. 3+ observations makes the verdict defensible and reviewable. |

### E2. SUCCESS Criteria (ALL must be true)

| ID | Check | Pass Condition | Why This Matters |
|----|-------|---------------|------------------|
| E2.1 | PA-05 at 1440px = YES | C4.5 composite = YES (4/4 sub-criteria PASS at 1440px: PA-05a >= 2 non-default elements, PA-05b >= 2.0x padding ratio, PA-05c visual hierarchy identified, PA-05d >= 15% compositional CSS) | Core engagement threshold, now operationalized with measurable sub-criteria. |
| E2.2 | Better than Variant B = YES (not MARGINAL) | Clear improvement, not marginal or ambiguous | If only marginally better than Variant B, modifications didn't justify the effort. |
| E2.3 | Spatial atmosphere = YES or SOMEWHAT | "Want to spend time here" = at least partially true | The user's motivation: pages as "places." |
| E2.4 | 5-category mechanism coverage = PASS | **-> See B3.6** | The per-category minimum must work in practice. |
| E2.5 | Novelty signals >= 2 out of 3 (D3.1, D3.2, D3.3) | At least 2 novelty checks indicate novel, not derivative | Novel + designed = vocabulary fluency confirmed. Novel + under-designed = different problem (tier boundaries). |
| E2.6 | Container width = 940-960px | **-> See B2.1** | If container width fails, the page fails regardless of other quality. |
| E2.7 | Soul compliance = 7/7 | **-> See C3.1** | Soul violations are instant-fail criteria. |

### E3. PARTIAL Verdict Scenarios

A PARTIAL verdict occurs when ALL E2 SUCCESS criteria are not met, but NONE of the E4 FAILURE criteria are triggered. The specific PARTIAL type is characterized by which SUCCESS criterion failed:

| Scenario | Pattern | Interpretation |
|----------|---------|---------------|
| Designed but not atmospheric | PA-05 = YES (C4.5) but spatial atmosphere = NO (D2.3) | Page is "designed" (intentional decisions visible) but doesn't create a "place" feeling. The lookup-based approach achieves structure but not atmosphere. |
| Designed but derivative | PA-05 = YES (C4.5) but novelty signals < 2 of 3 (D3.x) | Page is "designed" but derivative of showcase pages. Content-mechanism fit is good but selection logic converges with showcases. |
| Ambiguous engagement | PA-05 = MARGINAL at both viewports (C4.5, C4.10). MARGINAL = 2-3 of 4 sub-criteria PASS. | Engagement is ambiguous -- neither clearly "designed" nor clearly "formatted." The threshold is in the gray zone. |
| Marginal improvement | Better than Variant B = MARGINAL (D2.2) | Improvement exists but is subtle. Unclear if mechanisms made the difference or if content quality drove the improvement. |

### E4. FAILURE Criteria (any 1 true)

| ID | Check | Interpretation |
|----|-------|---------------|
| E4.1 | PA-05 at 1440px = NO | PA-05 composite = NO (0-1 of 4 sub-criteria PASS at 1440px). Page could not produce 2+ measurable design indicators. Lookup-based mechanism deployment cannot produce engagement threshold without metaphor. |
| E4.2 | Better than Variant B = NO | Middle-tier experiment produced output equal to or worse than Variant B despite deploying more mechanisms. Per-category minimum adds overhead without value. |
| E4.3 | All 3 novelty signals = DERIVATIVE | Page structurally copies showcase pages despite different content. The vocabulary-vs-library distinction fails in practice. |
| E4.4 | Container width violated (B2.1 FAIL) | The #1 Phase D failure mode recurred. M3 container width rule failed to prevent it. |
| E4.5 | 5-category coverage failed (B3.6 FAIL) | Per-category minimum did not produce 5-category breadth. Either M1 instruction was unclear or content-mechanism mapping was insufficient. |

---

## F. POST-EXPERIMENT DECISIONS

### F1. If SUCCESS

| ID | Action | Trigger | Why |
|----|--------|---------|-----|
| F1.1 | Apply M1 to skill permanently | M1 not already applied (option b or c from A1) | SUCCESS validates that per-category minimum produces engaged Middle-tier output. Permanent application is justified. |
| F1.2 | Proceed to Wave 2 planning (M6, M7) | SUCCESS verdict confirmed | Wave 2 modifications (semantic value justification, combination guidance) are designed to be informed by the Middle experiment. |
| F1.3 | Plan Ceiling experiment with SAME content | SUCCESS verdict confirmed | Same content at Ceiling tier enables direct comparison: does metaphor add value beyond what Middle achieves? |
| F1.4 | Document which mechanisms had strongest content fit | SUCCESS verdict confirmed | Informs M6 (semantic value justification) -- which mechanisms naturally produced semantic values vs arbitrary ones? |
| F1.5 | Document any gaps that Wave 2 should address | SUCCESS verdict confirmed | Even with success, the experiment may reveal missing capabilities that M6/M7 should address. |

### F2. If PARTIAL

| ID | Action | Trigger | Why |
|----|--------|---------|-----|
| F2.1 | Analyze WHICH dimension is missing | PARTIAL verdict -- document which of: spatial variety, depth, coherence, atmosphere is the weak link | PARTIAL means "designed but not atmospheric." The specific missing dimension determines the fix. |
| F2.2 | Consider adjusting per-category minimum parameters | If missing dimension traces to mechanism selection | Per-category minimum may need different category definitions or higher minimums for specific categories. |
| F2.3 | Consider 2nd Middle build with adjustments | If failure mode is addressable by parameter tuning, not structural redesign | One data point is insufficient if the result is ambiguous. 2nd build with specific adjustments provides comparison. |
| F2.4 | Evaluate whether content choice affected result | If content was suboptimal (e.g., too prose-heavy despite mixed-content requirements) | Content that doesn't exercise all categories naturally limits mechanism deployment. |
| F2.5 | Do NOT proceed to Ceiling experiment until PARTIAL is understood | PARTIAL verdict | Building Ceiling on top of an ambiguous Middle risks contaminating the Ceiling comparison. |

### F3. If FAILURE

| ID | Action | Trigger | Why |
|----|--------|---------|-----|
| F3.1 | Distinguish content-specific failure from fundamental failure | FAILURE verdict | Does the content type cause failure (wrong content for Middle) or does Middle-tier concept itself fail? |
| F3.2 | Analyze whether failure is M1-specific or tier-model-specific | FAILURE verdict | M1 failure (wrong categories, wrong minimums) is fixable. Tier model failure (no-metaphor pages can't achieve engagement) is structural. |
| F3.3 | Consider Floor/Ceiling binary (dropping Middle) | FAILURE verdict + fundamental failure analysis | If lookup-based mechanism deployment cannot produce "designed" output regardless of content, Middle tier has no viable role. |
| F3.4 | Re-examine whether "no metaphor" is the actual problem | FAILURE verdict | The Middle-tier hypothesis is that metaphor is NOT required for engagement. FAILURE would disprove this. But the failure might be mechanism count, not metaphor absence. |
| F3.5 | Do NOT proceed to Wave 2 | FAILURE verdict | Wave 2 (M6, M7) assumes Middle is viable. If it isn't, Wave 2 modifications target the wrong problem. |

---

## G. META-CHECKS (From Conversation Clarifications)

These verify that the experiment design respects the 8 clarifications documented in `17-conversation-clarifications.md`.

| ID | Check | Pass Condition | Fail Condition | Clarification Source |
|----|-------|---------------|----------------|---------------------|
| G1 | Mechanism counts documented as DESCRIPTIVE | Tier table includes provenance note: "backward-engineered from existing pages" and "proxy not target" caveat | Counts presented as targets without provenance | Clarification 1: counts were backward-engineered, not invented as targets |
| G2 | "Sample 2-4" identified as PROBLEM | Any reference to "2-4 mechanisms" is labeled as the broken state, not as design intent | "2-4 mechanisms" presented as a valid approach | Clarification 2: "sample 2-4" is the IDENTIFIED PROBLEM the enrichment exists to fix |
| G3 | Density patterns distinguished from mechanisms | Pattern (CRESCENDO etc.) described as "skeleton" / "spatial organization strategy" and mechanisms as "flesh" / "individual CSS techniques" | Pattern and mechanism used interchangeably, or CRESCENDO listed as a mechanism | Clarification 4: patterns are spatial organization, mechanisms are CSS techniques deployed within patterns |
| G4 | "Creative derivation vs lookup" explained concretely | Middle described as "content feature -> mechanism capability (direct mapping)". Ceiling described as "metaphor -> shared semantic dimension -> multiple mechanisms" | Distinction described abstractly ("Middle is simpler") without explaining the selection logic difference | Clarification 3: both tiers use same catalog, differ in HOW mechanisms are selected |
| G5 | Fractal coherence explained with concrete scale examples | Scale examples include: "Page scale = section sequence follows density pattern" and "Component scale = internal component structure mirrors pattern" | Fractal coherence described abstractly ("pattern at 2 scales") without concrete scale descriptions | Clarification 5: scales are zoom levels, not abstract concepts |
| G6 | Scales and mechanisms clearly distinguished | Scales = depth of coherence (zoom levels). Mechanisms = breadth of vocabulary (CSS techniques). Both documented as separate dimensions. | Scales and mechanisms conflated ("more mechanisms = more scales") | Clarification 5: scales measure coherence depth, mechanisms measure vocabulary breadth |
| G7 | M1 sequencing decision documented with rationale and tradeoffs | Document explains: why M1 was originally Wave 2, why this was arguably a mistake, which option was chosen for this experiment and why | M1 timing not discussed, or chosen without acknowledging the tradeoffs | Clarification 6: M1 sequencing was the most discussed decision in the user conversation |
| G8 | Experiment success/failure implications documented BEFORE building | Verdict framework (Section E) and post-experiment decisions (Section F) documented before the build starts | Success criteria defined after seeing results (confirmation bias risk) | Clarification 8: "document BEFORE building, not after" |

---

## H. COMPLETENESS CROSS-CHECK

This section verifies that the checklist itself covers all requirements from all source documents.

### H1. Coverage from Master Agenda (13-master-agenda.md Phase 2)

| Source Item | Checklist Coverage |
|-------------|-------------------|
| 2.1.1 Content Selection | A2.1-A2.10, A3.1-A3.3 |
| 2.2.1 Build Middle-Tier Page | B1-B10 (all build sections) |
| 2.3.1 Programmatic Checks | C3.1-C3.5 |
| 2.3.2 Mechanism Count Analysis | C2.1-C2.5 |
| 2.3.3 Perceptual Audit (Mode 2) | C4.1-C4.10 (PA-05 operationalized with 4 sub-criteria) |
| 2.3.4 Structural Metrics | C1.1-C1.7 |
| 2.4.1 Compare Against Variant B | D1.1-D1.5 |
| 2.4.2 Answer THE Question | D2.1-D2.4, E1.1-E1.3 |

### H2. Coverage from Master Execution Prompt (14-master-execution-prompt.md)

| Source Item | Checklist Coverage |
|-------------|-------------------|
| Section 1.4 Tier Model + caveat | A5.3, G1 |
| Section 4 M1 per-category minimum | A1.0-A1.5, A5.1-A5.2, B3.1-B3.6 |
| Section 4 M2 fractal gate | B6.1-B6.7 |
| Section 4 M3 container width | B2.1-B2.5 |
| Section 4 M5 tier routing | B1.1-B1.4, A4.1-A4.4 |
| Section 6 Checkpoint decision matrix | E1.2, E2.1-E2.7, E3 scenarios, E4.1-E4.5 |

### H3. Coverage from HANDOFF.md

| Source Item | Checklist Coverage |
|-------------|-------------------|
| Section 4 Tier Model | C1.1 (CSS lines), C2.1 (mechanism count) |
| Section 5 Modifications | A1.0-A1.5 (M1), B6.1-B6.7 (M2), B2.1-B2.5 (M3) |
| Section 7 Vocabulary-vs-Library | D3.1-D3.3 (novelty assessment) |
| Section 11 Open Questions Q2 | D2.1-D2.4 (engagement threshold) |
| Section 13 "What Not To Do" | B7.1-B7.7 (soul), B8.2 (always-load), A2.9 (not self-referential) |
| Section 13 UI Audit Protocol | C3.5 (audit protocol compliance) |

### H4. Coverage from Conversation Clarifications (17-conversation-clarifications.md)

| Clarification | Checklist Coverage |
|---------------|-------------------|
| C1: Counts are descriptive | G1, A5.3, B4.2-B4.3 |
| C2: "2-4" is the problem | G2, A1.0-A1.5 |
| C3: Creative derivation vs lookup | G4 |
| C4: Patterns vs mechanisms | G3, A4.1-A4.3 |
| C5: Scales vs mechanisms | G5, G6, B6.1-B6.7 |
| C6: M1 sequencing | G7, A1.0-A1.5 |
| C7: Content selection | A2.1-A2.10, A3.1-A3.3 |
| C8: Experiment meaning | E1.1-E1.3, E2.1-E2.7, E4.1-E4.5 |

### H5. Coverage from Skill (tension-composition/SKILL.md)

| Skill Section | Checklist Coverage |
|---------------|-------------------|
| Step 0D Tier Classification (lines 68-119) | B1.1-B1.4, A4.1-A4.4 |
| Phase 4.0 Guardrails (lines 778-858) | B9.1-B9.8, B2.1-B2.5 |
| Step 4.7 Fractal Gate (lines 1171-1212) | B6.1-B6.7 |
| Coherence Rule C-4 (border grammar) | B10.12 |
| Phase 5 Output (single-file constraint) | B10.14 |

### H6. Coverage from Hardening Specifications (21-*.md)

| Specification | Checklist Coverage |
|---------------|-------------------|
| PA-05 Operationalization (21-pa05-operationalization.md) | C4.5 (4 sub-criteria), C4.10 (adjusted thresholds), D2.1 (structured format), E2.1, E3 scenarios, E4.1 |
| Mechanism Hardening (21-mechanism-hardening.md) | B4.1 (floor raised to 7), B4.4 (interaction check), B4.5 (perceptibility floor) |
| Missing Items (21-missing-items-spec.md) | A1.0, B2.5, C3.5, B10.1, B10.5, B10.7, B10.9, B10.12, B10.14 |
| Section B Reorder (21-section-b-reorder.md) | B8->B1->B9->B2->B3-B6->B7->B10 workflow ordering, E2 deduplication, E3 reclassification |

---

## SUMMARY STATISTICS

| Section | Total Items | Type | Notes |
|---------|-------------|------|-------|
| A. Pre-Build Decisions | 23 items | Planning verification | +1 (A1.0) |
| B. Build Requirements | 46 items | Build-time checks | **Reordered by build workflow (B8->B1->B9->B2->B3-B6->B7->B10).** +2 (B4.4, B4.5), +1 (B2.5), +6 (B10.x), +1 MOD (B4.1 floor raised) |
| C. Measurement & Metrics | 22 items | Post-build measurement | +1 (C3.5). PA-05 operationalized with 4 sub-criteria. |
| D. Evaluation Criteria | 12 items | Comparative analysis | D2.1 updated for structured PA-05 format |
| E. The Verdict | 12 check items + 4 E3 scenarios | Decision framework | **E2 deduplicated (3 items now references), E3 reclassified as scenarios** |
| F. Post-Experiment Decisions | 15 items | Next-step routing | |
| G. Meta-Checks | 8 items | Clarification compliance | |
| H. Completeness Cross-Check | 6 coverage tables | Self-verification | +1 (H6 hardening specs) |
| **TOTAL** | **138 check items + 4 E3 scenarios + 6 coverage tables** | | |

**Every check item is binary PASS/FAIL.** Items that initially seemed subjective (PA-05 engagement, atmosphere assessment) have been operationalized with concrete sub-criteria or minimum evidence requirements.

**The 10 most critical items** (failure on ANY ONE = experiment fails):
1. **B2.1** -- Container width 940-960px (THE #1 Phase D failure mode) [Step 4]
2. **B2.5** -- Container width priority order documented (prevents 940-960px violations) [Step 4]
3. **B3.6** -- All 5 mechanism categories represented (THE core Middle-tier differentiator) [Step 5]
4. **B4.4** -- Mechanism interaction documented (prevents independent mechanism padding) [Step 6]
5. **B7.1** -- border-radius: 0 (soul constraint, instant-fail) [Step 9]
6. **B7.2** -- box-shadow: none (soul constraint, instant-fail) [Step 9]
7. **B1.2** -- Phases 1-3 skipped (defines Middle-tier experiment validity) [Step 2]
8. **E1.1** -- Clear verdict stated (the experiment's purpose is to produce a verdict)
9. **B8.2** -- Always-load protocol completed (Track 1's Phase D failure cause) [Step 1 -- FIRST CHECK]
10. **A1.0** -- M1 current status verified (resolves M1 contradiction)

---

**END CHECKLIST**

*Sources: 17-conversation-clarifications.md (8 clarifications), 13-master-agenda.md (Phase 2 experiment design), 14-master-execution-prompt.md (Sections 1.4, 4, 6), HANDOFF.md (Sections 4, 5, 7, 11, 13), tension-composition/SKILL.md (Steps 0D, 4.0, 4.7), 21-pa05-operationalization.md (PA-05 sub-criteria), 21-mechanism-hardening.md (interaction check, perceptibility floor, floor raise), 21-missing-items-spec.md (9 new items), 21-section-b-reorder.md (workflow reorder, E deduplication).*
