# Tier Comparison Matrix — Floor / Middle / Ceiling / Flagship

**Date:** 2026-02-16
**Author:** tier-comparator (ceiling-preparation team)
**Sources:** tension-composition skill, mechanism catalog, retrospectives, clarifications
**Context:** Middle experiment SUCCESS (12 mechanisms, PA-05 4/4, D3 3/3). Preparing Ceiling experiment with SAME content for direct tier isolation.

---

## Executive Summary

**The tiers are NOT just "more mechanisms."** They represent qualitatively different compositional approaches:
- **Floor:** Component assembly (lookup from inventory)
- **Middle:** Vocabulary fluency (content → mechanism mapping)
- **Ceiling:** Compositional fluency (metaphor → multi-channel coherence)
- **Flagship:** Multi-pattern orchestration (competing metaphors interleaved)

**Most important distinction people miss:** Middle and Ceiling use THE SAME 18 mechanisms. The difference is WHY you select them. Middle: "This content has callouts → mechanism #2." Ceiling: "This metaphor encodes depth through compression + weight + color ALL TOGETHER."

---

## 1. MECHANISM COUNT & SELECTION LOGIC

### Floor: 5 mechanisms (2 categories max)

**Selection logic:** Component inventory lookup
- "Content has code blocks → use pre-built code component"
- "Content has statistics → use pre-built stats card"
- NO custom mechanism selection — pre-built templates only

**Concrete example from Variant B (Phase D):**
- Deployed: #2 (2-zone callouts), #9 (color encoding), #10 (border-left signal), #13 (dark header), #17 (code blocks)
- Coverage: 2/5 categories (Component, Structure/Navigation)
- WHY these 5: Content had callouts (→ #2), had semantic differentiation (→ #9), had code (→ #17). Direct content → component mapping.

**Mechanism selection:** NONE (template selection only)

---

### Middle: 8-10 mechanisms minimum (ALL 5 categories)

**Selection logic:** Content-structure mapping (lookup with coverage requirement)
- "Content has hierarchy → mechanism #1 (border-weight gradient)"
- "Content has callouts → mechanism #2 (2-zone DNA)"
- "Content has sections → mechanism #7 (zone backgrounds)"
- Each mechanism serves DIFFERENT content need INDEPENDENTLY

**Per-category minimum (M1 — validated by Middle experiment):**
- Spatial: 1+ (e.g., #5 dense/sparse alternation)
- Hierarchy: 1+ (e.g., #1 border-weight OR #4 spacing compression)
- Component: 1+ (e.g., #2 2-zone DNA)
- Depth/Emphasis: 1+ (e.g., #7 zone backgrounds)
- Structure/Navigation: 1+ (e.g., #13 dark header)

**Concrete example from Middle experiment:**
- Deployed: 12 mechanisms total
- S:1, H:3, C:4, D:2, N:3 (exceeded minimum in all categories)
- WHY 12 not 8: Content naturally needed more. Per-category minimums ensure BREADTH; actual count emerges from content-mechanism fit.

**Natural landing zone:** 8-12 (not 8-10 — Middle experiment landed at 12)

**Mechanism selection:** Independent (each solves different problem)

---

### Ceiling: 12-15 mechanisms (ALL 5 categories + interaction requirement)

**Selection logic:** Metaphor-driven multi-channel coherence
- Builder has metaphor (e.g., "geological strata" from Phases 1-3)
- Builder looks at catalog THROUGH metaphor: "Strata have pressure → spacing compression. Strata have consolidation → border-weight. Strata have layers → zone backgrounds."
- KEY: spacing compression + border-weight + zone backgrounds ALL encode "depth" TOGETHER

**Per-category minimum (projected from M1 + Ceiling research):**
- Spatial: 2+ (primary flow + variation)
- Hierarchy: 2+ (primary encoding + reinforcement)
- Component: 3+ (at least 3 component types)
- Depth/Emphasis: 2+ (primary + secondary focal points)
- Structure/Navigation: 2+ (header + footer + intermediate navigation OR section markers)

**Concrete example from OD-004 (geological confidence):**
- Deployed: ~12-15 mechanisms
- Border-weight (4px → 1px) = depth
- Zone backgrounds (sparse → dense → breathing) = depth
- Spacing compression (40px → 16px) = depth
- ALL THREE encode SAME semantic dimension (geological consolidation) simultaneously

**Natural landing zone:** 12-15

**Mechanism selection:** Multi-channel (3+ mechanisms encode shared semantic dimension)

---

### Flagship: 16-18 mechanisms (ALL 5 categories + multi-pattern)

**Selection logic:** Competing metaphors interleaved with transitions
- Multiple metaphors for DIFFERENT sections (intro = one metaphor, technical deep-dive = second metaphor, conclusion = third)
- Transition grammar between metaphors (BREATHING/SMOOTH/BRIDGE)
- 3+ patterns with conscious handoffs

**Per-category minimum (projected from Flagship research):**
- Spatial: 3+ (one per pattern)
- Hierarchy: 3+ (pattern-specific hierarchies)
- Component: 4+ (all standard components + pattern-specific variants)
- Depth/Emphasis: 3+ (pattern-specific focal strategies)
- Structure/Navigation: 3+ (multi-pattern navigation requires more markers)

**Concrete example from CD-006 (pilot migration, 39/40):**
- Deployed: ~16-18 mechanisms
- Multi-pattern: F-PATTERN (reference) + BENTO (overview) + CRESCENDO (tutorial)
- Transitions: BRIDGE between F and BENTO, BREATHING before CRESCENDO
- Each pattern has its own mechanism deployment WITHIN shared vocabulary

**Natural landing zone:** 16-18

**Mechanism selection:** Pattern-orchestrated (mechanisms serve pattern-specific roles, transitions manage handoffs)

---

## 2. INTERACTION COMPLEXITY

### Floor: Zero interaction required

Components work independently. No coordination between mechanisms. Callout A and Callout B don't need to "talk to each other."

**Example:** Code block is dark. Callout is light. Stats card is bento grid. These coexist but don't interact.

---

### Middle: Limited interaction (content-driven combinations)

Mechanisms work independently BUT occasionally combine when content demands it.

**Example from Middle experiment:**
- Border-weight gradient (4px → 3px → 3px → 1px) for security layers
- Color encoding (red for critical, blue for informational)
- These TWO mechanisms combine: critical sections get 4px red, informational sections get 3px blue
- **But this is emergent from content, not required by tier.**

**Interaction requirement:** NONE explicitly. May happen naturally.

---

### Ceiling: Required interaction (metaphor-driven combinations)

3+ mechanism pairs must REINFORCE each other (multi-channel encoding).

**Example from OD-004:**
- Border-weight + zone backgrounds + spacing compression ALL encode geological depth
- As you scroll DOWN (deeper into strata):
  - Borders get HEAVIER (1px → 4px)
  - Backgrounds get DARKER (sparse cream → dense charcoal)
  - Spacing gets TIGHTER (40px → 16px)
- Three CSS channels saying "deeper" simultaneously = multi-channel coherence

**Interaction requirement:** 3+ mechanism pairs documented with shared semantic dimension

---

### Flagship: Multi-pattern transitions (pattern-to-pattern handoffs)

Not just mechanisms interacting WITHIN a pattern — entire PATTERNS interact across sections.

**Example from CD-006:**
- F-PATTERN (left dense, right sparse) for reference section
- Transition: BRIDGE (gradual width shift, 2-section span)
- BENTO (grid-based uniform) for overview section
- Transition: BREATHING (64px gap, visual pause)
- CRESCENDO (sparse → dense → sparse) for tutorial section

**Interaction requirement:** 3+ patterns, 2+ transition types, conscious handoff documentation

---

## 3. SCALES (Fractal Coherence Depth)

### Floor: Exempt

No custom pattern required. Component-level styling only.

---

### Middle: 2 scales (Page + Component)

**Page scale:** Overall scroll rhythm (sections flow sparse → dense → sparse)
**Component scale:** Individual elements mirror page rhythm (callouts have sparse label + dense body)

**Concrete example from Middle experiment:**
- Page: Section padding 80px → 48px → 64px (CRESCENDO via F-PATTERN)
- Component: Callouts 12px label + 16px body (sparse/dense DNA)

**Verification:** Squint at page (Page scale visible). Zoom to callout (Component scale visible). Do they echo same direction?

---

### Ceiling: 4 scales (Navigation + Page + Section + Component)

**Navigation scale:** Header/TOC structure echoes pattern (sparse logo, dense breadcrumb, etc.)
**Page scale:** Overall scroll rhythm
**Section scale:** How sections INTERNALLY organize (not just how they sequence)
**Component scale:** Individual elements

**Concrete example (hypothetical Ceiling CRESCENDO):**
- Navigation: Logo-only header (sparse) progressing to logo+breadcrumb+TOC (dense) at scroll
- Page: Overall padding compression 80px → 48px → 64px
- Section: First section has 3 subsections (sparse), middle section has 6 subsections (dense), final section has 2 subsections (sparse)
- Component: Early callouts use minimal styling, middle callouts use solid offset depth, late callouts return to minimal

**Verification:** Cycle through header screenshot → page scroll → section zoom → callout detail. Same design direction at all 4 levels?

---

### Flagship: 5 scales (all scales + Character)

**Character scale:** Even inline text-level styling echoes the pattern

**Example:** CRESCENDO at Character scale might mean:
- Early paragraphs: regular weight, no emphasis
- Peak paragraphs: bold weight, code highlights, link underlines
- Late paragraphs: return to regular weight

**This is why Flagship takes 240-400 minutes.** Every zoom level must be consciously designed.

---

## 4. DENSITY PATTERN vs METAPHOR

### Floor: Neither

Pre-built component templates. No pattern selection, no metaphor derivation.

---

### Middle: PATTERN (lookup table, no metaphor)

**4-option pattern table (M5 — tier routing):**
- Tutorial/step-by-step → CRESCENDO (sparse intro → dense peak → sparse resolution)
- Reference/lookup/API → F-PATTERN (dense left navigation, sparse right content)
- Overview/dashboard → BENTO (grid-based modular sections)
- Narrative/story arc → PULSE (rhythmic dense-sparse-dense alternation)

**Selection logic:** Match content type to pattern. NO creative judgment.

**Concrete example:** SYSTEM remote Mac documentation = technical tutorial → F-PATTERN selected via lookup.

**Metaphor:** NONE. Pattern provides spatial organization skeleton.

---

### Ceiling: METAPHOR (derived through Phases 1-3)

**No lookup table.** Builder runs full pipeline:
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
- Phase 2: Tension derivation (richness scoring)
- Phase 3: Metaphor collapse (structural isomorphism → domain search)

**Output:** "Geological strata" (for infrastructure docs), "Botanical growth" (for onboarding), "Theatrical acts" (for narrative)

**Pattern emerges FROM metaphor:** If metaphor is "geological," the pattern is likely CRESCENDO (surface → core). If metaphor is "architectural," pattern might be BENTO (floor plan).

**Concrete example from OD-004:**
- Tension: "This content feels foundational but speculative at edges"
- Metaphor: Geological strata (bedrock certainty → surface speculation)
- Pattern: Progressive compression (confident sections sparse, speculative sections dense)

**Metaphor:** REQUIRED. Derived independently before consulting library.

---

### Flagship: MULTI-PATTERN (competing metaphors interleaved)

**Multiple metaphors for different sections:**
- Introduction: "Journey preparation" (narrative arc)
- Technical reference: "Blueprint" (architectural grid)
- Tutorial: "Growth stages" (botanical progression)

**Transitions between patterns:**
- Journey → Blueprint: BRIDGE transition (gradual spatial shift)
- Blueprint → Growth: BREATHING transition (visual pause, 64px gap)

**Why multiple metaphors:** Single metaphor can't serve ALL content modes. Reference material needs different atmosphere than narrative. Flagship accepts this and orchestrates handoffs.

---

## 5. BUILD TIME (Parallel Agent Model)

### Floor: 30-45 minutes

**Team:** 4-6 agents (content-selector, planner, builder, auditor, verdict)
**Bottleneck:** Component selection (minimal creative overhead)

**Why so fast:** No metaphor derivation, no mechanism selection, pre-built templates only.

---

### Middle: 70-100 minutes (Middle experiment: ~35 minutes)

**Team:** 8 agents (content-selector, planner, builder, 2 auditors, comparative-auditor, novelty-evaluator, verdict-synthesizer)
**Bottleneck:** Per-category mechanism selection (lookup requires reading catalog, matching content needs)

**Timing discrepancy:** The tier model estimated 70-100 minutes (sequential human time). The Middle experiment took ~35 minutes (parallel agent time). The 2-3x gap reflects planning model error (sequential vs parallel execution).

**Revised estimate for next Middle builds:** 30-50 minutes with flat file-bus topology.

---

### Ceiling: 150-220 minutes (projected 45-100 minutes with parallel agents)

**Team:** 10-12 agents (add metaphor-derivation agent, perceptual-auditor-2, intermediate verification agents)
**Bottleneck:** Metaphor derivation (Phases 1-3, creative judgment, divergence verification)

**Why longer than Middle:** Metaphor derivation is NOT parallelizable (continuation bias prevents self-revision). Two-instance pattern means planner → builder is sequential dependency.

**Revised estimate based on Middle learning:** 45-100 minutes with flat topology + agent messaging.

---

### Flagship: 240-400 minutes (projected 90-180 minutes with parallel agents)

**Team:** 15-20 agents (add pattern-transition agents, multi-pass audit team, 3+ perceptual auditors)
**Bottleneck:** Multi-pattern orchestration (each pattern needs metaphor derivation + transition design)

**Why longest:** Multiple metaphors means multiple Phase 1-3 runs. Transition design is new creative overhead not present in Ceiling.

**Revised estimate based on Middle learning:** 90-180 minutes with heavy parallelization.

**NOTE:** All revised estimates assume flat file-bus topology + agent messaging + per-file ownership. Hierarchical topologies add 30-50% overhead.

---

## 6. TEAM SIZE & COMMUNICATION

### Floor: 4-6 agents, minimal messaging

**Roles:** content-selector, planner, builder, auditor, verdict
**Communication:** File-bus (outputs only), minimal clarification needed
**Topology:** Flat (team-lead → agents directly)

**Why small:** No creative derivation, no interaction requirements, straightforward component assembly.

---

### Middle: 8 agents, messaging REQUIRED (learned from experiment)

**Roles:** content-selector, planner, builder, programmatic-auditor, perceptual-auditor, comparative-auditor, novelty-evaluator, verdict-synthesizer

**Communication protocol (CRITICAL UPDATE from Finding 9):**
- File-bus for PRIMARY workflow (outputs)
- SendMessage for CLARIFICATION workflow (questions, issue flagging, iteration requests)

**Required messaging capabilities:**
- Builder → Planner: "What does Footer Mirror look like?"
- Auditor → Team-Lead: "Missing section — continue or wait?"
- Team-Lead → Builder: "Footer missing — add it before evaluation"

**Why messaging is required:** Middle experiment WITHOUT messaging: missing footer (WOULD-NOT-SHIP), "specifications applied correctly not composition felt through," no iteration on ambiguities. CD-006 (39/40) and Phase C (11/11 criteria) both used messaging.

**Topology:** Flat (zero intermediate captains, per-file ownership, zero contention)

---

### Ceiling: 10-12 agents, messaging ESSENTIAL

**Roles:** Add metaphor-derivation agent, perceptual-auditor-2 (dual evaluation), intermediate verification agents

**Communication protocol:** Same as Middle + metaphor clarification loop
- Metaphor-agent → Planner: "Does this metaphor match library patterns?"
- Builder → Metaphor-agent: "How does 'geological' express at Navigation scale?"
- Perceptual-auditor-1 ↔ Perceptual-auditor-2: Independent evaluation → reconciliation

**Why MORE messaging:** Metaphor creates ambiguity that Middle's lookup table doesn't have. "Geological compression" means what at header level? Agents need to ask.

**Topology:** Flat (validated at Middle, scales to 12 agents)

---

### Flagship: 15-20 agents, orchestrated messaging

**Roles:** Add pattern-transition designers (one per transition), multi-pass audit team, 3+ perceptual auditors

**Communication protocol:** Pattern coordination messaging
- Pattern-A-builder → Pattern-B-builder: "F-PATTERN ends at 960px width — BENTO should start there"
- Transition-designer → both builders: "BRIDGE transition needs 2-section span — pattern A compresses, pattern B expands"

**Why MOST messaging:** Multiple patterns means builders must coordinate handoffs. Transitions require negotiation between pattern boundaries.

**Topology:** Flat for WITHIN-pattern work. Hierarchical for CROSS-pattern coordination (pattern-lead per metaphor).

---

## 7. CSS COMPLEXITY (Lines of Custom CSS)

### Floor: 150-250 lines

**Composition:** Mostly token application
- :root block (65 tokens) = 100 lines
- Component overrides (spacing, colors) = 50-100 lines
- Responsive tweaks = 50 lines

**Example:** Apply dark header, use pre-built callout, add code block = minimal CSS beyond token values.

---

### Middle: 350-500 lines

**Composition:** Token application + mechanism deployment
- :root block = 100 lines
- 8-10 mechanisms (each 15-30 lines) = 150-250 lines
- Responsive strategy (768px breakpoint) = 100 lines
- Component customizations = 50-100 lines

**Example from Middle experiment:**
- Actual CSS: ~400 lines
- Mechanisms: border-weight gradient (20 lines), 2-zone callouts (50 lines), zone backgrounds (30 lines), dark header (30 lines), code blocks (40 lines), etc.

---

### Ceiling: 700-1000 lines

**Composition:** Token + mechanism + metaphor-specific vocabulary
- :root block = 100 lines
- 12-15 mechanisms (each 20-40 lines) = 300-500 lines
- Metaphor-specific classes (.stratum, .layer, .depth-marker) = 150-250 lines
- Multi-channel interaction CSS (border-weight + spacing + zone all coordinated) = 100-150 lines
- Responsive + scale coherence = 150 lines

**Example from OD-004:**
- Actual CSS: ~800 lines
- Metaphor vocabulary: .stratum--bedrock, .stratum--topsoil, .confidence-indicator, .layer-boundary (metaphor-specific, NOT in mechanism catalog)

---

### Flagship: 1000-1500 lines

**Composition:** All of Ceiling + multi-pattern + transitions
- :root block = 100 lines
- 16-18 mechanisms = 400-600 lines
- Pattern-A metaphor vocabulary = 150 lines
- Pattern-B metaphor vocabulary = 150 lines
- Transition CSS (BRIDGE, BREATHING, SMOOTH) = 100-200 lines
- Multi-scale coherence across all patterns = 200 lines

**Example from CD-006:**
- Actual CSS: ~1,200 lines
- Three patterns each have their own classes + one shared token foundation

---

## 8. EVALUATION CRITERIA & QUALITY CEILING

### Floor: Soul compliance + functional correctness

**Passing criteria:**
- Border-radius: 0? ✓
- Box-shadow: none? ✓
- Colors from palette? ✓
- Content readable? ✓
- Components work? ✓

**Quality ceiling:** "Professionally formatted" (not "designed")

**Why:** No custom composition. Pre-built components are proven functional but not tailored to content.

---

### Middle: PA-05 DESIGNED (4 sub-criteria)

**Passing criteria:**
- PA-05a: Compositional variety (3+ different visual treatments)
- PA-05b: Padding range ratio ≥ 2.0x (sparse vs dense sections)
- PA-05c: Visual hierarchy present (squint test reveals structure)
- PA-05d: Custom composition ≥ 15% (not pure template assembly)

**Quality ceiling:** "Designed, not just formatted" BUT "specifications applied correctly, not composition felt through" (from Middle retrospective)

**Why:** Vocabulary fluency (knowing many mechanisms) crosses DESIGNED threshold but lacks compositional PURPOSE. Feels "professionally stiff."

---

### Ceiling: PA-05 DESIGNED + atmosphere/coherence

**Passing criteria:**
- All Middle criteria (PA-05 4/4)
- Multi-channel coherence (3+ mechanisms reinforce shared semantic dimension)
- Metaphor authenticity (independently derived, not library pattern-matching)
- 4-scale fractal coherence (Navigation + Page + Section + Component)

**Quality ceiling:** "Compositionally felt through" — the page has REASON for its choices (metaphor), not just breadth (vocabulary)

**Why:** Metaphor provides PURPOSE. Mechanisms aren't just "covering categories" — they're expressing a coherent concept.

---

### Flagship: PA-05 DESIGNED + multi-pattern orchestration

**Passing criteria:**
- All Ceiling criteria
- 3+ patterns deployed with conscious transitions
- Pattern-specific mechanism deployment (mechanisms serve pattern roles)
- Transition grammar correctness (BREATHING/SMOOTH/BRIDGE types appropriate for pattern pairs)
- 5-scale fractal coherence (Character scale also echoes pattern)

**Quality ceiling:** "Crown jewel" — reference-quality showcase page

**Why:** Multi-pattern orchestration is the highest compositional complexity. Only appropriate for anchor content (design system showcase, philosophical deep-dive, flagship landing pages).

---

## 9. CONTENT TYPES (What Content Belongs at Each Tier)

### Floor: 10-20% of pages

**Content types:**
- API reference (pure tabular data)
- Configuration files (key-value lists)
- Changelogs (date-ordered lists)
- Error code tables
- < 200 words total

**Why Floor:** Explicit structure, no narrative, no tension. Components map directly to data types.

**Example:** CORS configuration table, HTTP status code reference.

---

### Middle: 40-50% of pages (RECOMMENDED UNIVERSAL FLOOR)

**Content types:**
- Tutorials (step-by-step procedures)
- Guides (conceptual overviews with examples)
- How-to articles (task-oriented)
- Comparison docs (X vs Y evaluation)
- Mixed content (prose + code + tables)

**Why Middle:** Has narrative flow (not pure data) but structure is explicit. No implicit tension requiring metaphor. Pattern selection via lookup table (tutorial → CRESCENDO, reference → F-PATTERN).

**Example:** "Building Your First API Endpoint" (tutorial with code blocks, callouts, step sequences).

---

### Ceiling: 20-30% of pages

**Content types:**
- Conceptual deep-dives (philosophy, architecture decisions)
- Prose-dominant content (>70% narrative)
- Content with IMPLICIT tension (warmth vs austerity, authority vs playfulness)
- Passes Addition Test = NO ("existing components can't fulfill this without transformation")

**Why Ceiling:** Implicit tension requires metaphor to make structure visible. Tutorial has explicit steps (Middle sufficient). Conceptual essay about "what is API design" has implicit tension (when to be prescriptive vs permissive) that metaphor can express.

**Example:** "The Philosophy of API Design" (prose-dominant, implicit tension about control vs flexibility).

---

### Flagship: 5-10% of pages

**Content types:**
- Anchor content (design system showcase, flagship landing page)
- Multi-modal content (narrative + reference + tutorial in one page)
- Philosophical deep-dive with technical sections
- Content requiring MULTIPLE metaphors (intro needs warmth, technical section needs precision, conclusion needs inspiration)

**Why Flagship:** Single metaphor can't serve all content modes. Reference material needs different atmosphere than narrative. Flagship orchestrates handoffs.

**Example:** "Complete Guide to Compositional Design" (intro = journey narrative, technical section = architectural blueprint, examples = botanical growth).

---

## 10. WHAT "DESIGNED" MEANS AT EACH TIER

### Floor: Not applicable

Floor is "formatted" not "designed." Components are functional and soul-compliant but not compositionally tailored.

---

### Middle: "This page was INTENTIONALLY structured"

**Reader perception:**
- Sections flow with rhythm (not uniform)
- Visual hierarchy is clear (squint test reveals structure)
- Components echo page-level rhythm (callouts feel "of a piece")
- Custom composition visible (not pure template)

**Builder skill:** Vocabulary fluency (knowing many mechanisms, when to use each)

**What's missing:** Sense of PURPOSE. Why is border-weight 4px here and 1px there? "Because hierarchy" (Middle answer) vs "Because geological consolidation pressure" (Ceiling answer).

---

### Ceiling: "This page EXPRESSES something coherent"

**Reader perception:**
- Page has atmosphere (geological depth, botanical growth, theatrical tension)
- Mechanisms reinforce each other (border-weight + zone backgrounds + spacing all say "deeper" together)
- Visual treatments aren't arbitrary — they encode a shared concept
- 4 scales feel intentionally designed (header, scroll, section, callout all echo same direction)

**Builder skill:** Compositional fluency (deriving metaphor from content, selecting mechanisms to EXPRESS that metaphor)

**What's present:** PURPOSE. Mechanisms aren't just solving different problems — they're expressing the SAME thing through multiple channels.

---

### Flagship: "This is a DESTINATION"

**Reader perception:**
- Multiple distinct atmospheres (reference feels architectural, tutorial feels organic)
- Transitions between atmospheres are conscious (BRIDGE, BREATHING, not jarring jumps)
- Each pattern serves its content mode (reference = grid precision, tutorial = progressive growth)
- Page is reference-quality (crown jewel, showcase-worthy)

**Builder skill:** Multi-pattern orchestration (managing competing metaphors, designing transitions, maintaining coherence across patterns)

**What's present:** MASTERY. The builder is conducting multiple instruments (patterns), each with its own voice, into a symphony.

---

## 11. NOVELTY EXPECTATIONS

### Floor: Not evaluated

Floor uses pre-built templates. Novelty is not a goal.

---

### Middle: Structural resemblance expected, VALUES should differ

**D3 Novelty Tests (from Phase D validation):**
- D3.1: Visual fingerprint (mental blur test) — should NOT match library pages exactly
- D3.2: CSS value overlap < 30% — most values should be unique to THIS content
- D3.3: Mechanism combination novelty — at least 1 mechanism pair not in library

**What's novel:** Border-weight values (4px → 3px → 1px for security vs 4px → 2px → 1px for confidence), mechanism COMBINATIONS (border-weight + color encoding), content-driven semantic encoding

**What's NOT novel:** Using border-weight gradient (mechanism #1 is from catalog), using 2-zone callouts (mechanism #2), using dark header (mechanism #13)

**Family resemblance is EXPECTED.** Shared vocabulary = shared mechanisms. Divergence happens in VALUES and COMBINATIONS, not mechanisms themselves.

**Middle experiment result:** 3/3 NOVEL (visual fingerprint distinct, CSS overlap <30%, border-weight gradient for security layers not in library)

---

### Ceiling: Metaphor should be unique, mechanisms may overlap

**D3 Novelty Tests + metaphor divergence:**
- All Middle novelty tests
- D3.4: Metaphor NOT in case-studies/_INDEX.md (if convergence → 5-dimension justification)
- D3.5: Mechanism interaction novel (multi-channel encoding not in library)

**What's novel:** The METAPHOR (geological vs botanical vs theatrical), mechanism INTERACTION (3+ mechanisms encoding shared dimension), metaphor-specific VOCABULARY (.stratum vs .growth-stage vs .act)

**What's NOT novel:** The MECHANISMS (border-weight gradient, spacing compression, zone backgrounds are from catalog)

**Ceiling paradox:** Output may LOOK structurally similar to showcase pages (both use border-weight + spacing + zone backgrounds) while being SEMANTICALLY distinct (one encodes geological depth, other encodes narrative tension).

**This is vocabulary fluency, not template copying.** Same mechanisms (grammar), different metaphors (meaning).

---

### Flagship: Multi-pattern composition should be rare

**D3 Novelty Tests + multi-pattern divergence:**
- All Ceiling novelty tests
- D3.6: Pattern combination NOT in library (if F-PATTERN + BENTO + CRESCENDO is used, justify why THESE three, in THIS order, with THESE transitions)

**What's novel:** The pattern ORCHESTRATION (which patterns, which order, which transitions), pattern-specific mechanism ROLES (border-weight serves hierarchy in F-PATTERN but serves depth in CRESCENDO on SAME page)

**Flagship is rare BY DESIGN.** Only ~5-10% of pages warrant this complexity. If many pages are Flagship, either (a) content truly requires it, or (b) tier classification is wrong.

---

## 12. LIMITATIONS (What Each Tier CANNOT Do)

### Floor: Cannot create atmosphere

**Cannot:**
- Express implicit tension (no metaphor)
- Create multi-channel coherence (no interaction)
- Tailor composition to content nuance (templates only)

**Can:**
- Format content functionally
- Apply soul-compliant styling
- Use proven components

**Appropriate when:** Content is pure data/reference, <200 words, no narrative.

---

### Middle: Cannot create compositional PURPOSE

**Cannot:**
- Explain WHY border-weight is 4px here (only "because hierarchy")
- Create atmosphere (no metaphor)
- Make mechanisms reinforce each other semantically (each solves different problem)
- Express at Character scale (no inline text-level composition)

**Can:**
- Deploy rich vocabulary (8-12 mechanisms across all 5 categories)
- Create "designed" feeling (PA-05 4/4)
- Produce novel combinations (D3 3/3)
- Cover 2 scales (Page + Component)

**Appropriate when:** Content has explicit structure, no implicit tension, tutorial/guide/comparison format.

---

### Ceiling: Cannot manage competing metaphors

**Cannot:**
- Deploy multiple patterns in one page (single metaphor only)
- Handle multi-modal content (reference + tutorial + narrative each need different atmosphere)
- Express at Character scale (4 scales max — Navigation/Page/Section/Component, not Character)

**Can:**
- Express metaphor through multi-channel coherence (3+ mechanisms encode shared dimension)
- Create atmosphere (metaphor provides sense of place)
- Explain WHY each mechanism choice (metaphor justifies values)
- Cover 4 scales (Navigation through Component)

**Appropriate when:** Content has implicit tension, prose-dominant, single coherent atmosphere serves entire page.

---

### Flagship: Cannot be used for 90% of pages (and shouldn't be)

**Cannot:**
- Be built quickly (90-180 min even with parallel agents)
- Be applied to simple content (overkill for tutorials)
- Avoid complexity (by definition, multi-pattern = high complexity)

**Can:**
- Orchestrate multiple metaphors in one page
- Handle multi-modal content (each mode gets appropriate pattern)
- Express at all 5 scales (including Character — inline text echoes pattern)
- Create crown jewel reference-quality pages

**Appropriate when:** Anchor content, flagship showcase, philosophical deep-dive with technical sections, multi-modal content.

**Inappropriate when:** Tutorial, guide, API reference, changelog — these need Middle or Floor.

---

## 13. TIER BOUNDARIES (What Separates Each from Next)

### Floor → Middle boundary: VOCABULARY DEPLOYMENT

**Floor:** Uses pre-built components only. No mechanism selection.
**Middle:** Deploys 8-12 mechanisms across all 5 categories via content-structure mapping.

**Crossing the boundary:** "This content needs custom composition" (Addition Test = NO). Builder reads mechanism catalog, selects per-category minimums, maps content → mechanism.

**Time cost:** +35-55 minutes (from 30-45 min to 70-100 min sequential, or 30-50 min parallel).
**Quality gain:** 3-4x richness (from "formatted" to "designed").
**ROI:** HIGHEST of any tier transition.

---

### Middle → Ceiling boundary: COMPOSITIONAL PURPOSE (metaphor)

**Middle:** Mechanisms solve different problems independently. Selection via content-structure lookup.
**Ceiling:** Mechanisms express shared semantic dimension. Selection via metaphor-driven derivation.

**Crossing the boundary:** "This content has implicit tension" (prose-dominant, no explicit structure). Builder runs Phases 1-3 (tension-composition), derives metaphor BEFORE consulting library.

**Time cost:** +75-120 minutes sequential (from 70-100 to 150-220), or +15-50 minutes parallel (from 30-50 to 45-100).
**Quality gain:** From "specifications applied correctly" to "composition felt through." From vocabulary fluency to compositional fluency.
**ROI:** MEDIUM-HIGH for appropriate content (prose-dominant, implicit tension). LOW for explicit-structure content (tutorial → Middle sufficient).

---

### Ceiling → Flagship boundary: MULTI-PATTERN ORCHESTRATION

**Ceiling:** Single metaphor, single pattern, 4 scales.
**Flagship:** Multiple metaphors, 3+ patterns, 5 scales, transition grammar.

**Crossing the boundary:** "This content needs DIFFERENT atmospheres for different modes" (intro needs warmth, technical section needs precision, tutorial needs progression). Single metaphor can't serve all.

**Time cost:** +90-120 minutes sequential (from 150-220 to 240-400), or +45-80 minutes parallel (from 45-100 to 90-180).
**Quality gain:** From "coherent composition" to "crown jewel reference-quality." From single atmosphere to orchestrated multi-atmosphere.
**ROI:** LOW for most content. HIGH ONLY for anchor content (5-10% of pages).

---

## 14. ONE SENTENCE PER TIER

### Floor
"Pre-built components applied to data with soul-compliant styling."

### Middle
"Rich vocabulary deployed independently across five categories to create intentional structure."

### Ceiling
"Metaphor-driven multi-channel coherence where mechanisms reinforce shared semantic dimensions at four scales."

### Flagship
"Multiple metaphors orchestrated with conscious transitions across five scales to create reference-quality crown jewels."

---

## 15. WHAT OUTPUT FEELS LIKE AT EACH TIER

### Floor
Walking into a clean, organized office supply store. Everything is labeled, functional, easy to find. No atmosphere — just utility.

### Middle
Walking into a professionally designed co-working space. Intentional furniture layout, clear zones (quiet area vs collaboration area), custom branding. Designed, not just organized. But feels like "specifications applied correctly" — professional but slightly stiff.

### Ceiling
Walking into a themed environment that MEANS something. A geological museum where each gallery gets progressively darker and more compressed as you descend through Earth's layers. Or a botanical garden where plant density increases as you move from seedlings to mature forest. You don't just SEE the design — you FEEL the concept.

### Flagship
Walking into a world-class multi-room museum where each gallery has its own atmosphere (ancient Egypt → Renaissance → modern art) but transitions are consciously designed (doorways narrow as you move from expansive Egypt hall to intimate Renaissance room). Each room is a destination. The whole building is a journey.

---

## 16. SAME CONTENT ELEMENT TREATED DIFFERENTLY AT EACH TIER

**Content element:** Section about "SSH Key Authentication" (security-critical procedure)

### Floor (Component Assembly)

```css
/* Pre-built callout component */
.callout-security {
  border-left: 4px solid var(--color-primary); /* Red */
  background: var(--color-zone-breathing);
  padding: var(--space-6);
  margin: var(--space-8) 0;
}

.callout-security__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-primary);
}
```

**Reasoning:** "This is a security callout → use security component."
**Feel:** Functional, correctly styled, no atmosphere.

---

### Middle (Vocabulary Fluency)

```css
/* Border-weight gradient for criticality hierarchy */
.security-section--critical {
  border-left: 4px solid var(--color-primary);
  background: var(--color-zone-breathing);
  padding: var(--space-8); /* Moderate padding */
  margin: var(--space-12) 0;
}

/* Color encoding for semantic signal */
.security-section--critical .label {
  color: var(--color-primary); /* Red = critical */
  font-weight: 600;
}

/* Zone background for section differentiation */
.security-section--critical {
  background: var(--color-zone-breathing); /* Cream */
}
```

**Reasoning:**
- "Critical content → 4px border (mechanism #1)"
- "Security semantic → red accent (mechanism #9)"
- "Section break → zone background (mechanism #7)"

**Feel:** Designed with vocabulary breadth. Three mechanisms serve three different purposes independently. Professional structure, slightly stiff.

---

### Ceiling (Compositional Fluency — Metaphor: "Fortified Perimeter")

```css
/* Metaphor: Security layers as concentric fortification rings */

.perimeter--outer-wall {
  border-left: 1px solid var(--color-border); /* Outer perimeter = minimal */
  background: var(--color-zone-sparse); /* Light cream = exposed */
  padding: var(--space-20); /* Sparse = open approach */
  margin: var(--space-16) 0;
}

.perimeter--checkpoint {
  border-left: 3px solid var(--color-text); /* Inner checkpoint = moderate */
  background: var(--color-zone-dense); /* Darker = controlled */
  padding: var(--space-8); /* Tighter = secure */
  margin: var(--space-8) 0;
}

.perimeter--vault {
  border-left: 4px solid var(--color-primary); /* Core vault = maximum */
  background: var(--color-zone-bedrock); /* Darkest = fortified */
  padding: var(--space-4); /* Dense = locked down */
  margin: var(--space-4) 0;
  color: var(--color-background); /* Inverted = maximum protection */
}
```

**Reasoning:**
- "Fortified perimeter metaphor: outer wall → checkpoint → vault"
- "Border-weight (1px → 3px → 4px) = security layers (exposed → controlled → protected)"
- "Zone backgrounds (sparse → dense → bedrock) = fortification levels"
- "Spacing (20 → 8 → 4) = access compression (open → restricted → locked)"
- **All three mechanisms encode SAME dimension:** security fortification level

**Feel:** Compositionally felt through. You don't just SEE security hierarchy — you FEEL concentric protection. Border-weight + background + spacing say "deeper into vault" together.

---

### Flagship (Multi-Pattern Orchestration — Patterns: Reference + Tutorial)

```css
/* PATTERN A: Reference section (F-PATTERN — dense left, sparse right) */
.security-reference {
  display: grid;
  grid-template-columns: 30% 70%;
  gap: var(--space-8);
}

.security-reference__nav {
  border-right: 3px solid var(--color-border);
  padding-right: var(--space-6);
  /* Dense navigation column */
}

.security-reference__content {
  padding-left: var(--space-8);
  /* Sparse content column */
}

/* TRANSITION: BREATHING (64px gap before tutorial) */
.transition--breathing {
  height: var(--space-16); /* 64px visual pause */
  background: var(--color-zone-breathing);
}

/* PATTERN B: Tutorial section (CRESCENDO — sparse → dense → sparse) */
.security-tutorial--intro {
  padding: var(--space-20); /* Sparse intro */
  background: var(--color-zone-sparse);
}

.security-tutorial--procedure {
  padding: var(--space-4); /* Dense steps */
  background: var(--color-zone-dense);
  border-left: 4px solid var(--color-primary);
}

.security-tutorial--conclusion {
  padding: var(--space-12); /* Breathing conclusion */
  background: var(--color-zone-breathing);
}
```

**Reasoning:**
- "Reference material needs F-PATTERN (lookup mode — dense nav, sparse content)"
- "Tutorial material needs CRESCENDO (learning mode — sparse intro, dense procedure, sparse conclusion)"
- "BREATHING transition between patterns (64px pause, visual break)"
- "Each pattern has its own mechanism deployment"

**Feel:** Crown jewel orchestration. Reference section feels architectural (grid precision). Transition gives breathing room. Tutorial section feels progressive (sparse → dense flow). Two distinct atmospheres consciously managed.

---

## 17. THE SINGLE MOST IMPORTANT DISTINCTION BETWEEN TIERS THAT MOST PEOPLE WOULD MISS

**The question most people ask:** "How many mechanisms does each tier use?"

**The answer they expect:**
- Floor: 5 mechanisms
- Middle: 8-10 mechanisms
- Ceiling: 12-15 mechanisms
- Flagship: 16-18 mechanisms

**What they're missing:** **Middle and Ceiling use THE SAME CATALOG. The mechanisms (tools) are identical. What differs is WHY you select them.**

---

**The real distinction:**

### Middle: "This content HAS X, so I NEED mechanism Y"
- Content has hierarchy → border-weight gradient
- Content has callouts → 2-zone DNA
- Content has code → code block component
- Each mechanism solves a DIFFERENT problem INDEPENDENTLY

**Selection logic:** Content feature → mechanism capability (LOOKUP)

---

### Ceiling: "This metaphor MEANS X, which I express through mechanisms Y + Z + W TOGETHER"
- Metaphor = "geological strata"
- Strata have pressure → spacing compression
- Strata have consolidation → border-weight gradient
- Strata have material layers → zone backgrounds
- **All three mechanisms encode SAME thing:** geological depth

**Selection logic:** Metaphor → shared semantic dimension → multiple mechanisms encoding that dimension (DERIVATION)

---

**Concrete difference in output:**

**Middle:**
- Border-weight handles hierarchy
- Zone backgrounds handle section breaks
- Spacing handles rhythm
- They coexist but don't interact

**Ceiling:**
- Border-weight + zone backgrounds + spacing ALL encode "depth" TOGETHER
- Scroll down → borders get heavier AND backgrounds get darker AND spacing gets tighter
- Three CSS channels saying "deeper" simultaneously = **multi-channel coherence**

---

**Why this is the most important distinction:**

Most people think Ceiling is "Middle + more mechanisms + fancier metaphor."

**That's wrong.**

Ceiling is "Middle's SAME mechanisms + metaphor-driven COMBINATION logic."

The catalog doesn't change. The USAGE changes.

Middle = vocabulary breadth (knowing many mechanisms)
Ceiling = compositional fluency (combining mechanisms to express shared meaning)

**This is why CD-006 scored 39/40 and Variant B scored 18/19 despite BOTH using mechanisms from the same catalog.**

CD-006 had multi-channel coherence (mechanisms reinforcing each other).
Variant B had vocabulary breadth (mechanisms working independently).

Same tools. Different compositional fluency.

---

**END TIER COMPARISON MATRIX**
