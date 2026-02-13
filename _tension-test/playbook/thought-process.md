# Tension-Composition Pipeline: Master Playbook

## Phase 0: Content Assessment

### Step 0A: Content Type Classification

**Raw content analysis:**
- Total words: ~6,865
- Code blocks: ~35 (bash snippets, JSON examples, ASCII diagrams, terminal output)
- Tables: ~12 (comparison tables, model selection, pattern vocabulary)
- ASCII diagrams: ~8 (architecture diagrams, flow charts, decision trees)
- Prose sections: ~40% of content
- Code/tables/diagrams: ~60% of content

**Classification: MIXED** (exactly at the 60% boundary between Mixed and Visual-dominant)

Justification: The Playbook weaves narrative prose ("Think of the AI agent as an eager but somewhat dim junior developer") with structural reference material (JSON schemas, bash scripts, decision trees). The prose FRAMES the technical content -- it gives meaning, emotional context, and progression narrative. The code/data serves as illustration, not primary content.

**Path: HYBRID.** Run pipeline on narrative sections; apply design system defaults to code/data sections.

### Step 0B: Scope Assessment

**Word count: ~6,865 = LONG (3000-10000 words)**

Protocol: Segment content into logical sections first. Run pipeline per section, then apply a unifying pass (shared palette, consistent typography, connected spacing rhythm).

However, for this analysis I will treat the Playbook as a unified piece because it has a SINGLE through-line: the progression from Level 0 to Level 7. The sections are not independent -- they form a staircase. The pipeline should derive ONE metaphor that governs the whole, with section-level density variations.

### Step 0C: Section Identification

| Section | Classification | Structural Needs |
|---------|---------------|-----------------|
| Part 1: Foundations (8 principles) | MIXED (prose + code) | Principle enumeration, rule-like authority, code as illustration |
| Part 1.2: Building Blocks | CODE-heavy | Primitives taxonomy, code-first reference |
| Part 1.3: Anti-Patterns | NARRATIVE | Warning/avoidance patterns, emotional stakes |
| Part 1.4: Decision Framework | DATA | Decision trees, lookup tables |
| Part 2: Capability Progression (Levels 0-7) | NARRATIVE + CODE | Linear staircase, before/after transformation, progressive reveal |
| Part 3: Deep Pattern Mastery | MIXED | Extended explanations + implementations |
| Part 4: Transformations | NARRATIVE | Before/after comparison, persuasion, emotional stakes |
| Part 5: Pattern Combinations | MIXED | Combinatorial logic, interaction effects |
| Part 6: Complete Architectures | NARRATIVE | Story-form (the overnight shipping story), diagrams |
| Part 7: Reference | DATA/REFERENCE | Lookup tables, cross-references, decision trees |
| Troubleshooting | REFERENCE | Problem/solution pairs, diagnostic |

**Incompatible structural needs flagged:**
- Parts 2/4/6 (NARRATIVE: progression, emotion, transformation) vs Parts 1.2/1.4/7 (REFERENCE: lookup, random access, flat)
- Part 6.1 ("A Day With Ralph") is a STORY -- needs temporal flow, dramatic arc
- Part 7 is pure REFERENCE -- needs random access, flat hierarchy

This is the key structural tension: the Playbook is simultaneously a **journey** (read front-to-back, Level 0 to 7) AND a **reference** (jump to what you need). These two modes have incompatible structural demands.

---

## Phase 1: Multi-Axis Questioning

### Core Four (Always Run)

---

**AXIS: FEEL**
Needs:
- **Empowerment gradient**: The reader starts feeling overwhelmed/frustrated (Level 0: "Context degrades mid-task, sessions die, progress lost") and needs to progressively feel capable, then masterful
- **Safety in complexity**: Each new level introduces more moving parts -- the reader needs to feel that complexity is manageable, not threatening
- **Excitement about possibility**: The "ship while sleeping" promise needs to feel real, not hype
- **Recognition of pain**: Before solutions, the reader needs to feel SEEN in their current struggle ("90 minutes invested, feature not done, frustrated")

Structural Properties: GRADIENT (emotional arc from frustration to mastery), CONTAINMENT (bounded complexity per level), ORDERING (progressive emotional buildup), MIRRORING (reader sees themselves in the pain points)
Richness: **HIGH**
Rationale: The content is explicitly a TRANSFORMATION journey. It opens with pain ("context degrades," "sessions die") and promises mastery. This emotional arc is the content's primary engine. Against KortAI's austere personality, FEEL demands warmth, invitation, safety -- classic opposition.

---

**AXIS: UNDERSTAND**
Needs:
- **Causal chains**: WHY each pattern works (not just HOW) -- "the math" behind fresh context > extended sessions
- **Hierarchy of dependencies**: Patterns build on patterns -- CLAUDE.md enables Hooks enables Ralph enables CC Mirror
- **System architecture**: How orchestrator/worker separation creates clean boundaries
- **Proportional relationships**: "Quality of 20 five-minute sessions > Quality of one 100-minute session"

Structural Properties: CAUSATION (A causes B), HIERARCHY (layered dependencies), BRANCHING (decision trees), QUANTIFICATION (token counts, percentages, cost comparisons)
Richness: **HIGH**
Rationale: Understanding the WHY is explicitly called out as a primary goal ("WHY each pattern works, not just HOW"). The causal architecture (context constraint drives external state, which enables fresh context, which enables autonomy) is deep and layered.

---

**AXIS: DO**
Needs:
- **Step-by-step implementation**: Each level has concrete bash scripts, JSON templates, configuration files
- **Copy-paste readiness**: Code blocks must be directly usable
- **Sequence clarity**: "Week 1: Stop the Bleeding" -> "Week 2: Context Discipline" -> "Week 3: Orchestration"
- **Verification points**: "npm run typecheck && npm run test && npm run lint && git commit"

Structural Properties: SEQUENCE (ordered steps), TEMPLATE (copy-paste structures), VERIFICATION (checkpoints after action), ENUMERATION (numbered lists, checklist items)
Richness: **MEDIUM**
Rationale: The DO needs are strong but well-served by existing design system components (code blocks, checklists, step sequences). The system already HAS tools for action-oriented content. Lower tension potential.

---

**AXIS: BECOME**
Needs:
- **Identity transformation**: From "person who babysits Claude" to "person who ships while sleeping"
- **Capability confidence**: "I can do this" at each level, not just "I know this"
- **Practitioner identity**: The reader needs to become a Claude Code ORCHESTRATOR, not just a user
- **Progressive self-image**: Level 0 self ("overwhelmed") -> Level 7 self ("running a factory")

Structural Properties: PROGRESSION (staged identity shifts), THRESHOLD (crossing points between levels), TRANSFORMATION (before/after states), ACCUMULATION (capabilities stack)
Richness: **HIGH**
Rationale: The Playbook's deepest purpose is BECOME. It's not a reference manual -- it's a mastery progression. The "Level 0 to Level 7" staircase is explicitly a journey of identity transformation. Against KortAI's institutional authority, the BECOME axis creates tension: how does a decisive, opinionated system convey patient, graduated identity transformation?

---

### Extended Core (Always Consider)

---

**AXIS: NAVIGATE**
Needs:
- **Non-linear access**: Reader at Level 3 needs to jump to Level 3 content, not read linearly from Level 0
- **Current-level awareness**: "Identify your current level" -- the reader needs to locate themselves
- **Reference jumping**: Part 7 is pure lookup; reader needs to reach specific patterns quickly
- **Progression resumption**: Reader who paused at Level 4 needs to re-enter at Level 4

Structural Properties: INDEXING (table of contents, cross-references), LOCATION (you-are-here markers), BRANCHING (decision trees for which section), DUAL-MODE (sequential reading vs random access)
Richness: **HIGH**
Rationale: The dual-mode tension (journey vs reference) is a STRUCTURAL problem, not just cosmetic. The content literally serves two incompatible reading modes. Against KortAI's decisive hierarchy, navigation creates genuine tension: the system wants ONE path; the content demands MANY entry points.

---

**AXIS: TRUST**
Needs:
- **Evidence-based claims**: "Quality of 20 five-minute sessions > Quality of one 100-minute session" -- needs proof
- **Real-world validation**: Community evidence ("synthesizes 39 synthesis files from community knowledge")
- **Gradual confidence building**: Bold claims ("3-5x speedup," "ship while sleeping") need grounding
- **Honest limitation acknowledgment**: "$50-200/day budget tolerance," "comfort with emergence and chaos"

Structural Properties: EVIDENCE (data supporting claims), GRADUATED DISCLOSURE (proof builds), HEDGING (honest caveats), SOURCING (provenance of knowledge)
Richness: **MEDIUM**
Rationale: The content makes extraordinary claims (90-minute task -> 5-minute task; ship while sleeping; 3-5x speedup). These need trust-building. But KortAI's system already communicates authority well -- the system IS opinionated and authoritative. The trust axis partially aligns with the system's personality, reducing genuine tension.

---

**AXIS: EVALUATE**
Needs:
- **Pattern comparison**: When to use Ralph vs CC Mirror vs Gas Town
- **Trade-off awareness**: Human time vs token cost vs quality vs complexity
- **Judgment development**: "Not just HOW but WHEN and WHY"
- **Anti-pattern recognition**: Know what NOT to do and why

Structural Properties: COMPARISON (side-by-side), WEIGHTING (trade-off matrices), DECISION BRANCHING (if/then paths), DISCRIMINATION (good vs bad patterns)
Richness: **MEDIUM**
Rationale: Evaluation is present but secondary. The decision trees and comparison tables serve evaluation needs, but the system already has mechanisms for comparison (tables, side-by-side layouts). Some genuine tension exists in conveying JUDGMENT (subjective weighting) through KortAI's decisive personality.

---

**AXIS: ORIENT**
Needs:
- **Entry point calibration**: "Who This Playbook Is For" -- reader needs to know if this is for them
- **Prerequisite awareness**: Level 7 requires "100+ hours multi-agent experience"
- **Relationship to other documents**: D-FINAL cross-references, journey links
- **Scope boundaries**: What this covers vs what D-FINAL covers

Structural Properties: FRAMING (context before content), PREREQUISITE CHAINS (this before that), SCOPING (boundaries of coverage), POSITIONING (where this fits in larger system)
Richness: **LOW**
Rationale: The content handles its own orientation well (the "Who This Playbook Is For" section, the "You Are Here" box). KortAI's system already supports positioning and framing. Low opposition.

---

**AXIS: RECONCILE**
Needs:
- **Paradigm shift**: From "I need to babysit AI" to "AI works while I sleep"
- **Counter-intuition**: Fresh context > extended sessions contradicts the intuition that more context = better
- **Letting go of control**: "Go to sleep. Wake up to completed feature" -- this requires TRUST in autonomous systems
- **Overcoming sunk cost**: "Your current 90-minute sessions are WORSE than 5-minute setups" -- invalidates existing practice

Structural Properties: CONTRAST (old belief vs new reality), INVERSION (what you thought is wrong), EVIDENCE STACKING (proof that contradiction is real), TRANSITION (from old model to new)
Richness: **HIGH**
Rationale: The Playbook's most powerful move is RECONCILIATION. It asks readers to abandon deeply held beliefs: that longer sessions are better, that manual oversight is necessary, that one agent is simpler than many. This is genuinely oppositional to KortAI's verdict-drive personality -- the system wants to ASSERT, but reconciliation requires holding BOTH sides until the reader arrives at understanding.

---

### Structural Trigger Axes (Deploy Conditionally)

---

**AXIS: COMPARE** -- DEPLOYED
Content signals: Level 0-7 comparison, Before/After transformations, Pattern selection (Ralph vs CC Mirror vs Gas Town), Model selection (Haiku vs Sonnet vs Opus), Anti-pattern vs pattern pairs.
Structural Pattern Triggered: Side-by-side layout, comparison tables, parallel columns.
Richness: **MEDIUM**

---

**AXIS: IDENTIFY** -- DEPLOYED
Content signals: "Identify your current level," reader-as-protagonist in "A Day With Ralph" story (Section 6.1), personas at each level (overwhelmed beginner -> factory operator).
Structural Pattern Triggered: Reader self-identification, level selection, narrative voice.
Richness: **MEDIUM**

---

**AXIS: DISCOVER** -- DEPLOYED
Content signals: Progressive revelation of capability ("What You Gain" after each level), the overnight shipping story as narrative payoff, the "aha" of fresh context beating extended sessions.
Structural Pattern Triggered: Delayed payoff, question-before-answer, progressive reveal.
Richness: **MEDIUM**

---

**AXIS: SEE** -- DEPLOYED
Content signals: System architectures (Gas Town factory diagram), orchestrator/worker diagrams, pattern dependency graph, token flow visualization, degradation curve.
Structural Pattern Triggered: Diagrams, spatial layout, visual metaphors.
Richness: **MEDIUM**

---

**AXIS: REMEMBER** -- DEPLOYED
Content signals: Checklists ("Before Going Autonomous Checklist"), pattern vocabulary tables, decision trees, cross-reference index, configuration quick reference.
Structural Pattern Triggered: Summary anchors, mnemonic structures, visual chunking.
Richness: **LOW**

---

### Phase 1 Summary Table

| Axis | Richness | Primary Needs | Key Structural Properties |
|------|----------|--------------|--------------------------|
| FEEL | HIGH | Empowerment gradient, safety in complexity, pain recognition | Gradient, containment, ordering, mirroring |
| UNDERSTAND | HIGH | Causal chains, dependency hierarchy, system architecture | Causation, hierarchy, branching, quantification |
| DO | MEDIUM | Step-by-step implementation, copy-paste readiness | Sequence, template, verification, enumeration |
| BECOME | HIGH | Identity transformation, progressive self-image, capability confidence | Progression, threshold, transformation, accumulation |
| NAVIGATE | HIGH | Non-linear access, current-level awareness, dual-mode reading | Indexing, location, branching, dual-mode |
| TRUST | MEDIUM | Evidence-based claims, gradual confidence building | Evidence, graduated disclosure, hedging, sourcing |
| EVALUATE | MEDIUM | Pattern comparison, trade-off awareness, judgment development | Comparison, weighting, decision branching |
| ORIENT | LOW | Entry point calibration, prerequisite awareness | Framing, prerequisite chains, scoping |
| RECONCILE | HIGH | Paradigm shift, counter-intuition, letting go of control | Contrast, inversion, evidence stacking, transition |
| COMPARE | MEDIUM | Level comparison, before/after, pattern selection | Side-by-side, parallel columns |
| IDENTIFY | MEDIUM | Current level self-identification, reader-as-protagonist | Self-selection, narrative voice |
| DISCOVER | MEDIUM | Progressive capability revelation, narrative payoff | Delayed payoff, progressive reveal |
| SEE | MEDIUM | System architectures, diagrams, spatial relationships | Diagrams, spatial layout |
| REMEMBER | LOW | Checklists, vocabulary tables, quick reference | Summary anchors, chunking |

**High-yield axes (5):** FEEL, UNDERSTAND, BECOME, NAVIGATE, RECONCILE

**Axis interaction effects detected:**
- **RECONCILE + BECOME**: "Change what you believe (babysitting is necessary) AND who you are (from babysitter to orchestrator)" -- double transformation. This is the Playbook's deepest compound tension.
- **NAVIGATE + COMPARE**: "Move freely through 7 levels AND hold patterns in parallel for comparison" -- maximum structural complexity for the reference/journey duality.
- **DISCOVER + UNDERSTAND**: "Withhold the full picture (reveal level by level) AND explain causal relationships (show the whole system)" -- oppositional structural demands.

---

## Phase 2: Tension Derivation

### Tension 1: FEEL axis

**Side A (Reader Needs):**
- Empowerment gradient (frustration -> mastery)
- Safety in complexity (each level feels manageable)
- Warmth of recognition ("you've been staring at the Jira board for three weeks")
- Excitement building toward "ship while sleeping" promise
- Emotional containment (bounded complexity per level)

**Side B (KortAI Constraints):**
- 75% austere personality
- 95% angular
- 85% serious
- Sharp edges communicate decisiveness
- Flat is honest about the medium
- Limited warm palette (only #FEF9F5 cream, #E83025 red accent)

**The Genuine Opposition:**
The reader needs to feel INVITED, SAFE, and PROGRESSIVELY EMPOWERED. KortAI is DECISIVE, AUSTERE, and ANGULAR. The system communicates authority, not invitation. It asserts, not encourages. The reader needs warmth; the system provides edges.

**Addition Test:** Can you fulfill the warmth/safety need by selecting existing components? NO. The system has no "encouragement" component. Callouts are informational, not emotional. Code blocks are precise, not warm. The warmth must be CONSTRUCTED from austere materials.
**Result: GENUINE**

**BECAUSE Test:** "The reader needs empowerment gradient BECAUSE the content explicitly opens with frustration/pain ('context degrades,' 'sessions die,' 'overwhelmed by options') and tracks a transformation to mastery." PASSES.

**Richness Scoring:**
- Opposition Depth: 3 layers (warmth vs austerity, safety vs angularity, encouragement vs formality) = HIGH (3)
- Structural Overlap: ORDERING (both sides use ordered progression), CONTAINMENT (bounded sections/levels), HIERARCHY (levels of emphasis) = 3 shared = MEDIUM (2)
- Metaphor Space Width: manuscript/workshop, geological strata, building construction, journey/trail, curriculum = 5 candidates = HIGH (3)

**RICHNESS = 3 x 2 x 3 = 18**

---

### Tension 2: UNDERSTAND axis

**Side A (Reader Needs):**
- Causal chains (WHY patterns work)
- Dependency hierarchy (patterns build on patterns)
- System architecture (orchestrator/worker boundaries)
- Proportional relationships (token math)
- Interconnection visibility (how parts relate)

**Side B (KortAI Constraints):**
- Hierarchy already built into typography scale
- Branching served by decision trees
- Quantification served by code blocks and tables
- System architecture served by ASCII diagrams

**The Opposition Check:**
The reader needs to understand CAUSAL RELATIONSHIPS -- why A leads to B. KortAI can show hierarchy (big -> small) and sequence (first -> last) but struggles with CAUSATION (because A, therefore B). Causation requires showing that two things are CONNECTED by reason, not just placed in order.

**Addition Test:** Can you fulfill causal understanding with existing components? PARTIALLY. Hierarchy = yes (typography). Sequence = yes (DOM order). But causal connection between levels = NO -- the system has no "because" component, no mechanism for showing that Level 1 ENABLES Level 2, not just precedes it.
**Result: WEAK GENUINE**

**BECAUSE Test:** "The reader needs causal understanding BECAUSE the content explicitly states 'WHY each pattern works, not just HOW' and the entire dependency graph (CLAUDE.md enables Hooks enables Ralph) is causal, not merely sequential." PASSES.

**Richness Scoring:**
- Opposition Depth: 2 layers (causation vs sequence, interconnection vs isolation) = MEDIUM (2)
- Structural Overlap: HIERARCHY (both), ORDERING (both), CONTAINMENT (both), BRANCHING (both) = 4 shared = HIGH (3)
- Metaphor Space Width: circuit board, building blueprint, geological layers, tree/root system = 4 candidates = MEDIUM (2)

**RICHNESS = 2 x 3 x 2 = 12**

---

### Tension 3: BECOME axis

**Side A (Reader Needs):**
- Progressive identity transformation (babysitter -> orchestrator -> factory operator)
- Capability accumulation (each level adds to what you CAN do)
- Threshold crossing (discrete jumps between levels)
- Practitioner confidence (not just knowledge but identity)
- Temporal arc (this takes weeks/months -- the progression is SLOW)

**Side B (KortAI Constraints):**
- 80% rigid
- 80% formal
- Institutional authority (system IS the expert)
- Static medium (CSS has no temporal dimension)
- Binary states (pass/fail, not gradual)

**The Genuine Opposition:**
BECOME requires TEMPORAL PROGRESSION -- identity changes over time. CSS is fundamentally STATIC. The system can show states but not transitions between states. It can show "Level 0" and "Level 7" but not the BECOMING that happens between them. Additionally, the system's institutional formality resists the intimate, personal nature of identity transformation.

**Addition Test:** Can you fulfill identity transformation with existing components? NO. No component conveys "you are changing." Task Progression shows steps but not identity shifts. Decision Matrix shows options but not growth.
**Result: GENUINE**

**BECAUSE Test:** "The reader needs identity transformation BECAUSE the content is structured as a literal staircase (Level 0 through Level 7) with explicit time markers ('Week 1,' 'Month 2,' 'Month 6+') and each level redefines what the reader IS (user -> orchestrator -> factory operator)." PASSES.

**Richness Scoring:**
- Opposition Depth: 4 layers (temporal vs static, personal vs institutional, gradual vs binary, intimate vs formal) = HIGH (3)
- Structural Overlap: ORDERING (both use sequence), HIERARCHY (both use levels), CONTAINMENT (bounded stages), ACCUMULATION (stacking capabilities) = 4 shared = HIGH (3)
- Metaphor Space Width: building under construction, elevation map, curriculum/syllabus, geological strata, apprenticeship workshop, military ranks = 6 candidates = HIGH (3)

**RICHNESS = 3 x 3 x 3 = 27**

---

### Tension 4: NAVIGATE axis

**Side A (Reader Needs):**
- Dual-mode reading (journey AND reference)
- Non-linear access (jump to any level)
- Current-level awareness (where am I?)
- Cross-reference following (pattern X combines with pattern Y)

**Side B (KortAI Constraints):**
- Decisive hierarchy (ONE reading path)
- Linear DOM order (vertical scroll)
- Typography hierarchy implies ONE flow direction
- 80% rigid

**The Opposition:**
NAVIGATE demands CHOICE -- the reader must be able to enter at any point, follow any path. KortAI demands HIERARCHY -- there is ONE correct ordering, one authoritative flow. The system's decisive personality resists ambiguity about reading order.

**Addition Test:** Can you fulfill navigation choice with existing components? PARTIALLY. TOC exists. Cross-references exist. But the DUAL-MODE problem (sometimes read linearly, sometimes jump randomly) requires structural innovation beyond existing components.
**Result: WEAK GENUINE**

**BECAUSE Test:** "The reader needs dual-mode navigation BECAUSE the content serves two audiences simultaneously: the beginner reading front-to-back and the practitioner jumping to their current level." PASSES.

**Richness Scoring:**
- Opposition Depth: 2 layers (choice vs hierarchy, non-linear vs linear) = MEDIUM (2)
- Structural Overlap: ORDERING (both), HIERARCHY (both), INDEXING (both) = 3 shared = MEDIUM (2)
- Metaphor Space Width: building floor plan, map/territory, library catalog, transit system = 4 candidates = MEDIUM (2)

**RICHNESS = 2 x 2 x 2 = 8**

---

### Tension 5: RECONCILE axis

**Side A (Reader Needs):**
- Paradigm shift: "longer sessions = better" -> "shorter sessions = better"
- Counter-intuition: Fresh context beats extended context
- Letting go of control: Autonomous agents work while you sleep
- Invalidating existing practice: "Your 90-minute sessions are worse"
- Holding contradiction: Both sides must be visible before resolution

**Side B (KortAI Constraints):**
- 85% serious (no playfulness to soften challenge)
- 80% formal (no casual persuasion)
- Verdict-driven personality (the system ASSERTS, doesn't question)
- Opinionated (doesn't hold competing views equally)
- Angular/sharp (no soft edges for uncomfortable truths)

**The Genuine Opposition:**
RECONCILE requires HOLDING TWO VIEWS SIMULTANEOUSLY until the reader arrives at understanding. KortAI's personality is designed to ASSERT ONE VIEW. The system's opinionated, verdict-driven nature directly opposes the reconciliation process, which requires temporary equanimity. This is the DEEPEST opposition because the system literally wants to skip to the answer while reconciliation demands showing the journey FROM wrong belief TO right belief.

**Addition Test:** Can you fulfill reconciliation with existing components? NO. No component holds two competing views equally. Callouts assert one perspective. The system has no "on one hand / on the other hand" mechanism.
**Result: STRONG GENUINE**

**BECAUSE Test:** "The reader needs to reconcile BECAUSE the content makes claims that directly contradict common practice (fresh context > extended sessions, autonomous > supervised, parallel > sequential) and the 'Before/After' sections (Part 4) are EXPLICITLY structured as old-belief vs new-reality." PASSES.

**Richness Scoring:**
- Opposition Depth: 4+ layers (assertion vs equanimity, verdict vs process, opinion vs balance, sharp vs holding, formal vs intimate challenge) = HIGH (3)
- Structural Overlap: CONTRAST (both sides use differentiation), ORDERING (both use sequential reveal), HIERARCHY (authority in both), TRANSITION (both need state changes) = 4 shared = HIGH (3)
- Metaphor Space Width: trial/verdict, geological upheaval, architectural renovation, cartographic re-mapping, scientific paradigm shift, apprentice's correction = 6 candidates = HIGH (3)

**RICHNESS = 3 x 3 x 3 = 27**

---

### Tension Ranking

| Rank | Axis | Richness Score | Opposition Type |
|------|------|---------------|----------------|
| 1 (TIE) | **BECOME** | **27** | Temporal-static, personal-institutional |
| 1 (TIE) | **RECONCILE** | **27** | Assertion-equanimity, verdict-process |
| 3 | **FEEL** | **18** | Warmth-austerity |
| 4 | **UNDERSTAND** | **12** | Causation-sequence |
| 5 | **NAVIGATE** | **8** | Choice-hierarchy |

**Tiebreaker for BECOME vs RECONCILE:**
- Most surprising bridge: RECONCILE (assertion-as-equanimity is more surprising than static-as-temporal)
- Second tiebreaker: UNDERSTAND > FEEL > BECOME > DO (so BECOME would lose)
- But: RECONCILE + BECOME COMPOUND into double transformation (change beliefs AND identity)

**Decision: PRIMARY tension = BECOME (the staircase structure is the content's skeleton), with RECONCILE as COMPOUND enhancer (the paradigm shifts happen AT each level crossing).**

The compound tension is: "How does a static, austere, verdict-driven design system convey PROGRESSIVE IDENTITY TRANSFORMATION that requires HOLDING OLD BELIEFS alongside NEW UNDERSTANDING until the reader crosses each threshold?"

### Tension Validity Check

1. **Is it genuine?** YES -- Addition Test passes for both axes
2. **Is it rich enough?** YES -- Richness 27 (both axes, max possible)
3. **Is it bridgeable?** YES -- Structural overlap >= 4 on both axes
4. **Is it novel?** YES -- Neither BECOME nor RECONCILE has been resolved in previous explorations (Boris was FEEL, Gas Town is UNDERSTAND)
5. **Is it content-driven?** YES -- BECAUSE test passes for both

**PROCEED TO PHASE 3.**

---

## Phase 3: Metaphor Collapse

### Step 3.1 -- Structural Properties from Side A (Reader Needs)

Transforming emotional/experiential needs into geometric/topological abstractions:

| Emotional Need | Structural Property |
|---------------|-------------------|
| Progressive identity transformation | **ASCENT** (vertical movement through discrete levels) |
| Capability accumulation | **STACKING** (each layer builds on previous) |
| Threshold crossing | **DISCRETE JUMPS** (not continuous gradient but distinct steps) |
| Paradigm shift (reconcile) | **INVERSION** (what was up becomes down; old model flips) |
| Holding contradiction | **SUPERPOSITION** (two states visible simultaneously) |
| Temporal arc (weeks/months) | **TRAVERSAL** (movement through space over time) |
| Safety in complexity | **CONTAINMENT** (bounded zones of manageable complexity) |
| Empowerment gradient | **GRADIENT** (progressive intensification) |
| Pain recognition -> mastery | **COMPRESSION** (dense, heavy start -> lighter, expansive end OR the reverse) |

### Step 3.2 -- Structural Properties from Side B (System Constraints)

| System Constraint | Structural Property |
|------------------|-------------------|
| border-radius: 0 | **ANGULARITY** (all boundaries are straight lines) |
| box-shadow: none | **FLATNESS** (no depth illusion) |
| Border categories (1px, 3px, 4px) | **DISCRETE WEIGHT** (finite emphasis levels) |
| Spacing scale (4-80px) | **PRECISE INTERVALS** (quantized positions) |
| Limited palette | **NARROW TEMPERATURE RANGE** (small perceptual variation) |
| 3 fonts only | **TEXTURE CONSTRAINT** (limited surface variety) |
| 80% rigid, 80% formal | **FORMALITY** (institutional bearing) |
| 85% serious | **GRAVITY** (weight and consequence) |
| 90% restrained | **ECONOMY** (minimal means) |

### Step 3.3 -- Structural Overlap

**Side A properties:** ASCENT, STACKING, DISCRETE JUMPS, INVERSION, SUPERPOSITION, TRAVERSAL, CONTAINMENT, GRADIENT, COMPRESSION

**Side B properties:** ANGULARITY, FLATNESS, DISCRETE WEIGHT, PRECISE INTERVALS, NARROW TEMPERATURE RANGE, TEXTURE CONSTRAINT, FORMALITY, GRAVITY, ECONOMY

**Shared (appear on BOTH sides):**
1. **DISCRETE WEIGHT / DISCRETE JUMPS** -- Both have quantized, non-continuous steps
2. **CONTAINMENT / ANGULARITY** -- Boundaries are fundamental to both
3. **STACKING / FLATNESS** -- Layers exist in both (Side A stacks capabilities, Side B stacks flat zones)
4. **GRADIENT / NARROW TEMPERATURE RANGE** -- Both use progressive variation within constraints
5. **FORMALITY / GRAVITY** -- Both carry weight and consequence

**Overlap calculation:** 5 shared / 14 unique total = 36%

This is just below the ideal zone (40-70%). Slightly extreme tension. Expect unconventional resolution or push toward the lower bound of conventional.

**Gap properties (unique to Side A):** ASCENT, INVERSION, SUPERPOSITION, TRAVERSAL, COMPRESSION
**Gap properties (unique to Side B):** PRECISE INTERVALS, TEXTURE CONSTRAINT, ECONOMY

### Step 3.4 -- Search Query

> "What real-world domain naturally exhibits DISCRETE STEPS, CONTAINMENT, LAYERING, PROGRESSIVE VARIATION, and GRAVITY, while being ANGULAR, FLAT, PRECISELY INTERVALLED, TEXTUALLY CONSTRAINED, and ECONOMICAL, yet conveying ASCENT, INVERSION, SUPERPOSITION, TRAVERSAL, and COMPRESSION?"

### Applying Three Search Heuristics

**1. Constraint scan (hardest constraint first):**
ANGULARITY eliminates: organic/biological, liquid/fluid, atmospheric, textile, botanical.
FLATNESS eliminates: 3D sculptural, topographic (unless 2D map).
PRECISE INTERVALS eliminates: irregular/natural patterns.
DISCRETE JUMPS eliminates: continuous/smooth systems.
Surviving domains: architectural, cartographic, geological (sedimentary), typographic/editorial, industrial, scientific, military, legal.

**2. Content resonance (what is the content literally about?):**
The content uses specific vocabulary:
- "Level 0" through "Level 7" -- **elevation/altitude**
- "Staircase" -- **architectural ascent**
- "Foundation" -- **building/construction**
- "Building Blocks" -- **construction**
- "Progression" -- **journey/path**
- "Factory" -- **industrial production**
- "Iron Law" -- **legal/structural**
- "Stack" -- **geological/technological**
- "Pattern" -- **architectural/textile**
- "Swarm" -- **biological** (eliminated by angularity)
- "Primitives" -- **scientific/mathematical**
- "Deep" -- **geological/archaeological**
- "Checkpoint" -- **military/navigation**

Strongest content resonance: ARCHITECTURAL (building, foundation, staircase, construction) and GEOLOGICAL (layers, strata, deep, compression).

**3. Emotional valence (Side A's emotion eliminates wrong-valence domains):**
Empowerment + transformation + safety: eliminates military (aggressive), judicial (adversarial), medical (clinical).
Positive construction valence: architectural (building UP), geological (layered depth), cartographic (exploring territory), educational (curriculum).

### Five Metaphor Candidates

---

### Candidate 1: CONSTRUCTION SITE / BUILDING UNDER CONSTRUCTION

**Search query fit:** "A building under construction naturally exhibits DISCRETE FLOORS (steps), STRUCTURAL CONTAINMENT (rooms), LAYERED CONSTRUCTION (foundation up), PROGRESSIVE COMPLETION, and GRAVITATIONAL LOAD, while being ANGULAR, FLAT (floor plates), PRECISELY MEASURED, and ECONOMICAL (structural engineering), yet conveying ASCENT (going higher), INVERSION (substructure vs superstructure), SUPERPOSITION (scaffolding alongside finished structure), TRAVERSAL (moving through construction phases), and COMPRESSION (load-bearing)."

**A. Tension Resolution:**

| Tension | Resolves? | Why |
|---------|-----------|-----|
| BECOME (identity transformation) | YES (1) | Construction literally transforms raw site into finished building -- reader transforms from novice to master |
| BECOME (temporal progression) | YES (1) | Construction happens in phases over time -- concrete parallel to weeks/months timeline |
| BECOME (capability accumulation) | YES (1) | Each floor enables the next -- literal stacking of capability |
| RECONCILE (paradigm shift) | PARTIAL (0.5) | Renovation exists (demolish and rebuild) but construction is primarily additive, not paradigm-shifting |
| RECONCILE (holding contradiction) | PARTIAL (0.5) | Scaffolding (temporary structure) alongside permanent structure holds two states, but weakly |
| FEEL (empowerment gradient) | YES (1) | Watching a building rise is inherently empowering |
| FEEL (safety) | PARTIAL (0.5) | Load-bearing implies safety, but construction sites are dangerous |

**SCORE: 5.5/7**

**B. Structural Isomorphism:**

| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| Foundation | Core Principles (Part 1) | Dark background zone (#1A1A1A), heaviest border (4px) |
| Floor plates | Levels 0-7 | Horizontal sections with distinct backgrounds |
| Load-bearing walls | Core dependencies (Principle 4: Iron Law) | 3px structural borders |
| Windows/openings | Code examples, glimpses into implementation | Code blocks with lighter backgrounds |
| Construction phases | Weekly/monthly progression | Progressive section ordering |
| Scaffolding | Checkpoints, "You Are Here" boxes | Accented callout borders |
| Elevation | Level number progression | Progressive lightening of backgrounds (deep -> surface) |
| Blueprint annotations | Meta labels, phase markers | Mono font labels |

**ISOMORPHISM COUNT: 8** (structurally isomorphic)

**C. Content Resonance:** HIGH -- Content literally uses "foundation," "building blocks," "staircase," "construct." The vocabulary is already architectural.

**D. Mechanism Feasibility:** 100% -- All properties expressible through backgrounds (depth zones), borders (structural/separator), typography (hierarchy), spacing (floor heights), layout (grid for floor plans), accent (structural emphasis).

**COMPOSITE VERDICT: PROCEED** (Resolution 5.5/7, Isomorphism 8, Resonance HIGH, Feasibility 100%)

---

### Candidate 2: ELEVATION MAP / TOPOGRAPHIC CONTOUR

**Search query fit:** "A topographic/elevation map naturally exhibits DISCRETE CONTOUR LINES (steps), BOUNDED ZONES (containment), LAYERED ELEVATION (stacking), PROGRESSIVE ALTITUDE GRADIENT, and GRAVITATIONAL REFERENCE, while being ANGULAR (when cartographic/gridded), FLAT (2D representation), PRECISELY INTERVALLED (contour intervals), and ECONOMICAL (minimal symbols), yet conveying ASCENT (climbing elevation), TRAVERSAL (hiking through terrain), and COMPRESSION (contour density = steepness)."

**A. Tension Resolution:**

| Tension | Resolves? | Why |
|---------|-----------|-----|
| BECOME (identity transformation) | PARTIAL (0.5) | Elevation changes are spatial, not personal -- weaker identity mapping |
| BECOME (temporal progression) | PARTIAL (0.5) | Maps are inherently atemporal -- they show state, not process |
| BECOME (capability accumulation) | YES (1) | Higher elevation = more capability, natural mapping |
| RECONCILE (paradigm shift) | NO (0) | Maps don't hold competing views -- they show ONE terrain |
| RECONCILE (holding contradiction) | NO (0) | No mechanism for superposition in cartography |
| FEEL (empowerment gradient) | YES (1) | Summit aspiration is emotionally powerful |
| FEEL (safety) | PARTIAL (0.5) | Maps provide orientation (safety) but mountains are dangerous |

**SCORE: 3.5/7**

**B. Structural Isomorphism:**

| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| Contour lines | Level boundaries | 1px border separators |
| Elevation zones | Level 0-7 sections | Background color gradient (dark=low to light=high OR reverse) |
| Summit | Level 7: Factory Scale | Lightest/most open section |
| Base camp | Level 0: Where You Are | Densest section, heaviest treatment |
| Trail markers | Checkpoints | Accented callout borders |
| Contour density | Difficulty gradient | Spacing compression in harder sections |

**ISOMORPHISM COUNT: 6** (structurally strong)

**C. Content Resonance:** MEDIUM -- "Level," "progression," "deep" pattern mastery map loosely, but the content doesn't use cartographic vocabulary.

**D. Mechanism Feasibility:** 100% -- All expressible through the 6 channels.

**COMPOSITE VERDICT: CONSIDER** (Resolution 3.5/7 is below N-1=6, Isomorphism 6, Resonance MEDIUM, Feasibility 100%)

---

### Candidate 3: GEOLOGICAL STRATIGRAPHY / SEDIMENTARY COLUMN

**Search query fit:** "Sedimentary strata naturally exhibit DISCRETE LAYERS (steps), CONTAINED FORMATIONS (bounded zones), STACKED DEPOSITION (accumulation), PROGRESSIVE COMPRESSION WITH DEPTH, and GRAVITATIONAL ORDERING, while being ANGULAR (crystal faces, fracture planes), FLAT (bedding planes), PRECISELY MEASURED (stratigraphic columns), and ECONOMICAL (geological column notation), yet conveying TRAVERSAL (drilling through layers), COMPRESSION (deeper = more compressed), and TIME (geological time scale)."

**A. Tension Resolution:**

| Tension | Resolves? | Why |
|---------|-----------|-----|
| BECOME (identity transformation) | PARTIAL (0.5) | Metamorphic processes transform rock identity (limestone -> marble), but the parallel is abstract |
| BECOME (temporal progression) | YES (1) | Geological time is THE defining feature -- deep time maps to weeks/months of learning |
| BECOME (capability accumulation) | YES (1) | Layers deposit over time -- each stratum is a capability layer |
| RECONCILE (paradigm shift) | YES (1) | Unconformities represent missing time / paradigm breaks. Metamorphism transforms one thing into another |
| RECONCILE (holding contradiction) | PARTIAL (0.5) | Fault lines hold two different strata side by side -- visible juxtaposition |
| FEEL (empowerment gradient) | PARTIAL (0.5) | Geological depth is more reverent than empowering |
| FEEL (safety) | YES (1) | Bedrock = ultimate stability and safety |

**SCORE: 5.5/7**

**B. Structural Isomorphism:**

| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| Bedrock | Core Principles (Part 1) | Dark background zone (#1A1A1A), maximum density |
| Sedimentary layers | Levels 0-7 | Distinct horizontal sections with graduated backgrounds |
| Compression with depth | Increasing complexity at lower levels | Progressive padding decrease, line-height tightening |
| Unconformity | Paradigm shifts (before/after) | Breathing zone with 3px structural border |
| Fossil record | Code examples, terminal output | Mono font blocks preserving "evidence" |
| Metamorphism | Identity transformation | Typography shift (mono -> sans -> serif at key moments) |
| Stratigraphic column | TOC / navigation | Vertical sidebar with layer indicators |
| Core sample | Deep pattern mastery (Part 3) | Narrow, dense, vertically oriented sections |

**ISOMORPHISM COUNT: 8** (structurally isomorphic)

**C. Content Resonance:** MEDIUM -- "Deep" pattern mastery, "foundation," "building blocks," "layers" are geological. But the content's primary vocabulary is architectural, not geological.

**D. Mechanism Feasibility:** 100% -- All properties map to legal CSS channels. Prior explorations (OD-004) have proven geological metaphor feasibility with KortAI.

**COMPOSITE VERDICT: PROCEED** (Resolution 5.5/7, Isomorphism 8, Resonance MEDIUM, Feasibility 100%)

**NOTE:** Geological metaphor was used in OD-004. The skill file says to force novelty if tension was previously resolved. However, OD-004's tension was FEEL (warmth vs austerity), not BECOME+RECONCILE. The tension is DIFFERENT even if the metaphor family overlaps. Still, preference should go to unexplored metaphor families if equally strong.

---

### Candidate 4: APPRENTICESHIP WORKSHOP / MASTER-APPRENTICE PROGRESSION

**Search query fit:** "A traditional apprenticeship workshop exhibits DISCRETE SKILL LEVELS (apprentice/journeyman/master), CONTAINED WORKSTATIONS (bounded zones), ACCUMULATED TOOLS AND TECHNIQUES (stacking), PROGRESSIVE MASTERY, and GRAVITATIONAL TRADITION, while being ANGULAR (workbenches, tools, jigs), FLAT (workshop floor plan), PRECISELY MEASURED (tolerances), and ECONOMICAL (only necessary tools), yet conveying ASCENT (rising through ranks), INVERSION (the apprentice eventually surpasses the master), TRAVERSAL (moving through stages), and COMPRESSION (mastering more in less time)."

**A. Tension Resolution:**

| Tension | Resolves? | Why |
|---------|-----------|-----|
| BECOME (identity transformation) | YES (1) | Apprenticeship IS identity transformation -- its entire purpose |
| BECOME (temporal progression) | YES (1) | Years of training map to weeks/months |
| BECOME (capability accumulation) | YES (1) | Tools acquired, techniques mastered, judgment developed |
| RECONCILE (paradigm shift) | YES (1) | The apprentice must UNLEARN naive approaches -- "you think longer sessions are better; the master knows fresh starts are better" |
| RECONCILE (holding contradiction) | YES (1) | The apprentice holds both the old way and the new way until mastery resolves the tension |
| FEEL (empowerment gradient) | YES (1) | From clumsy beginner to confident craftsperson |
| FEEL (safety) | YES (1) | The workshop is a SAFE SPACE for learning -- mistakes are expected |

**SCORE: 7/7** (PERFECT)

**B. Structural Isomorphism:**

| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| Workshop floor plan | Page layout | Grid layout with distinct workstation zones |
| Tool wall (organized tools) | Pattern reference (Part 7) | Grid of bordered components, systematic spacing |
| Workbench (active area) | Current level's implementation section | Central content zone with code blocks |
| Master's mark / guild seal | Checkpoints, quality gates | Accent-colored callout with border-left |
| Apprentice piece -> Masterpiece | Level 0 code -> Level 7 architecture | Progressive complexity in code examples |
| Tolerances / precision | Acceptance criteria | Mono-font verification blocks |
| Workshop manual / blueprint | Decision trees, configuration reference | Dense reference sections |
| Rank insignia (apprentice/journeyman/master) | Level indicators (0-7) | Meta labels with level numbers |
| Correction marks (master's feedback) | Anti-patterns, troubleshooting | Coral-accented warning callouts |

**ISOMORPHISM COUNT: 9** (deeply structurally isomorphic)

**C. Content Resonance:** HIGH -- The content ALREADY uses this vocabulary: "eager but somewhat dim junior developer (Ralph)," "mastery" (in section titles), "deep pattern mastery," "your capability progression," "practitioner evidence." The Ralph character IS an apprentice figure. The Playbook IS a mastery curriculum.

**D. Mechanism Feasibility:** 100%
- Workshop zones = background color zones (legal)
- Tool wall = grid layout with bordered items (legal)
- Master's mark = border-left accent callout (legal)
- Rank insignia = mono font meta labels (legal)
- Correction marks = coral-accent callouts (legal)
- Tolerances = code blocks with precise formatting (legal)

**COMPOSITE VERDICT: PROCEED** (Resolution 7/7 PERFECT, Isomorphism 9, Resonance HIGH, Feasibility 100%)

---

### Candidate 5: CURRICULUM / SYLLABUS PROGRESSION

**Search query fit:** "An academic curriculum exhibits DISCRETE COURSE LEVELS (steps), CONTAINED MODULES (bounded units), ACCUMULATED KNOWLEDGE (prerequisites stacking), PROGRESSIVE DIFFICULTY, and INSTITUTIONAL GRAVITY, while being ANGULAR (grid schedules, structured syllabi), FLAT (document-based), PRECISELY STRUCTURED (credit hours, prerequisites), and ECONOMICAL (standardized notation), yet conveying ASCENT (advancing through levels), TRAVERSAL (progressing through semesters), and COMPRESSION (more content in less time at higher levels)."

**A. Tension Resolution:**

| Tension | Resolves? | Why |
|---------|-----------|-----|
| BECOME (identity transformation) | PARTIAL (0.5) | Education transforms, but curriculum is the STRUCTURE, not the transformation itself |
| BECOME (temporal progression) | YES (1) | Semesters/years map to weeks/months |
| BECOME (capability accumulation) | YES (1) | Prerequisites ensure stacking |
| RECONCILE (paradigm shift) | PARTIAL (0.5) | Curricula update, but they don't inherently HOLD contradictions |
| RECONCILE (holding contradiction) | NO (0) | Curricula are authoritative -- they don't present competing views for resolution |
| FEEL (empowerment gradient) | PARTIAL (0.5) | Academic progression can feel empowering but also institutional/cold |
| FEEL (safety) | NO (0) | Academic environments often feel EVALUATIVE, not safe |

**SCORE: 3.5/7**

**B. Structural Isomorphism:**

| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| Course catalog | Pattern vocabulary (Part 7) | Grid reference layout |
| Prerequisites | Pattern dependencies | Linked sections, dependency callouts |
| Semester progression | Level 0-7 | Distinct page sections |
| Syllabus | Implementation priority | Numbered sequence with checkboxes |
| Grade/assessment | Quality gates | Verification code blocks |
| Office hours | Troubleshooting | Expandable detail sections |

**ISOMORPHISM COUNT: 6** (structurally strong but not deep)

**C. Content Resonance:** MEDIUM -- "Mastery," "progression," "level" have educational parallels, but the content's voice is MORE workshop-practical than academic-institutional.

**D. Mechanism Feasibility:** 100%

**COMPOSITE VERDICT: CONSIDER** (Resolution 3.5/7 below N-1, Isomorphism 6, Resonance MEDIUM, Feasibility 100%)

---

## Ranking

| Rank | Candidate | Resolution | Isomorphism | Resonance | Feasibility | Composite |
|------|-----------|-----------|-------------|-----------|-------------|-----------|
| **1** | **Apprenticeship Workshop** | **7/7 (PERFECT)** | **9** | **HIGH** | **100%** | **PROCEED -- WINNER** |
| 2 | Construction Site | 5.5/7 | 8 | HIGH | 100% | PROCEED |
| 3 | Geological Stratigraphy | 5.5/7 | 8 | MEDIUM | 100% | PROCEED |
| 4 | Elevation Map | 3.5/7 | 6 | MEDIUM | 100% | CONSIDER |
| 5 | Curriculum/Syllabus | 3.5/7 | 6 | MEDIUM | 100% | CONSIDER |

### Why Apprenticeship Workshop Wins

**1. PERFECT tension resolution (7/7):** It is the ONLY candidate that fully resolves BOTH the BECOME tension (identity transformation from apprentice to master) AND the RECONCILE tension (unlearning naive approaches under master's guidance). No other candidate achieves this.

**2. Highest isomorphism count (9):** Nine independent property mappings -- this is not analogy but structural architecture. The metaphor IS the content's structure:
   - Workshop floor = page layout
   - Tool wall = pattern reference
   - Workbench = current implementation
   - Master's mark = checkpoint/gate
   - Rank progression = Level 0-7
   - Correction marks = anti-patterns/troubleshooting
   - Apprentice piece to masterpiece = code example progression
   - Tolerances = acceptance criteria
   - Workshop manual = decision trees

**3. HIGH content resonance:** The content already CONTAINS the metaphor's vocabulary: "mastery," "practitioner," "Ralph as eager junior developer," "capability progression," "deep pattern mastery." The metaphor doesn't need to be imposed -- it's already latent in the content.

**4. Novel metaphor family:** No previous exploration has used the apprenticeship/workshop metaphor. Construction (Candidate 2) is adjacent to architectural (used elsewhere). Geological (Candidate 3) was used in OD-004. Apprenticeship is FRESH.

**5. Emotional resolution:** The workshop is simultaneously ANGULAR (tools, jigs, precise workbenches) AND WARM (the master-apprentice relationship, the safety of a learning space, the pride of growing skill). This resolves the FEEL tension as a bonus -- the workshop is where austerity and warmth COEXIST naturally.

### What Apprenticeship Workshop DOESN'T Resolve

**Honest gaps:**
- The NAVIGATE tension (dual-mode reading) is only weakly resolved -- workshops are primarily sequential (apprentice to master), not random-access. The tool wall provides SOME reference access but doesn't fully solve the journey-vs-reference duality.
- The SEE tension (system architecture diagrams) is weakly served -- workshops have spatial layout but don't naturally produce architectural diagrams.

These gaps are MINOR relative to the primary BECOME+RECONCILE tension. They can be addressed in Phase 4 through section-level variation (reference sections use design system defaults rather than full metaphorical treatment).

### Full Isomorphism Table (Winner)

| Metaphor Property | Content Property | System Mechanism | CSS Channel |
|---|---|---|---|
| Workshop floor plan | Page layout | Grid zones with distinct backgrounds | Background + Layout |
| Tool wall (organized) | Pattern reference (Part 7) | Bordered grid of items, tight spacing | Border + Layout + Spacing |
| Active workbench | Current level's code/implementation | Central zone, medium density | Background + Spacing |
| Master's mark / guild stamp | Checkpoints, quality gates | Green-accented callout, border-left 4px | Border + Color accent |
| Apprentice piece progression | Level 0 code -> Level 7 architecture | Code blocks with progressive complexity | Typography + Spacing |
| Rank insignia | Level 0-7 indicators | Mono meta labels: "LEVEL 3: AUTONOMY" | Typography (mono) |
| Tolerances / precision marks | Acceptance criteria | Mono-font verification blocks, tight line-height | Typography + Spacing |
| Correction marks | Anti-patterns, troubleshooting | Coral-accented warning callouts | Border + Color accent |
| Workshop manual / blueprint | Decision trees, config reference | Dense reference sections, 1px borders | Border + Spacing |
