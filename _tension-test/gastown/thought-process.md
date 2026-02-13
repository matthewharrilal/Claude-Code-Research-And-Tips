# Tension-Composition Pipeline: Gas Town / Yegge Extraction

---

## Phase 0: Content Assessment

### Step 0A: Content Type Classification

**Classification: MIXED (30-60% code/tables/diagrams)**

Breakdown:
- **Prose sections**: ~45% (Who is Yegge, Core Insight, Core Principles, When to Use, Quotes)
- **Code blocks/CLI examples**: ~20% (installation commands, bash scripts, tmux layout, `gt` commands)
- **Tables**: ~15% (role comparisons, wave framework, checkpoints, cost estimation)
- **ASCII diagrams**: ~15% (role hierarchy, Beads architecture, communication flow, decision matrix, complexity ladder)
- **Blockquotes**: ~5%

**Path: HYBRID.** Run pipeline on narrative/conceptual sections. Apply design system defaults to code/CLI/table sections. Derive metaphor for the narrative framing that connects them.

### Step 0B: Scope Assessment

Word count estimate: ~5,500 words (excluding code blocks and tables). Including them: ~7,500 words.

**Classification: LONG (3000-10000 words)**

Protocol: Segment content into logical sections. Run pipeline per section, then apply a unifying pass (shared palette, consistent typography, connected spacing rhythm).

### Step 0C: Section Identification

| # | Section | Classification | Structural Need |
|---|---------|---------------|-----------------|
| 1 | You Are Here + Who is Yegge | NARRATIVE | Orientation, credibility establishment |
| 2 | The Gas Town Mental Model | NARRATIVE | Core insight communication, paradigm shift |
| 3 | The 8 Roles Architecture | MIXED (narrative + ASCII diagrams + tables) | System structure, role relationships, hierarchy |
| 4 | Beads: The Memory System | MIXED (narrative + diagrams + tables) | System component, layered architecture |
| 5 | The 6 Waves + 8 Stages | DATA (tables with narrative framing) | Temporal progression, self-location |
| 6 | Core Principles | NARRATIVE | Philosophy, design principles |
| 7 | Implementation Guide | CODE (commands + scripts + tmux) | Procedural, step-by-step |
| 8 | Checkpoints + Troubleshooting | REFERENCE (tables + code) | Verification, recovery |
| 9 | When to Use Gas Town | MIXED (decision matrix + narrative) | Decision support, self-selection |
| 10 | Quotes + Comparisons + Sources | REFERENCE | Archive, cross-reference |

**Incompatible structural needs flagged:**
- Sections 3-4 (system architecture diagrams) vs Sections 6-7 (principles/procedures) -- fundamentally different structural demands
- Section 2 (paradigm-shift narrative) vs Section 8 (troubleshooting reference) -- emotional vs utilitarian
- Section 5 (temporal progression) vs Section 3 (spatial hierarchy) -- time axis vs space axis

---

## Phase 1: Multi-Axis Questioning

### AXIS: FEEL

**Question:** "What does the reader need to FEEL while navigating this Gas Town content?"

**Needs:**
1. **Controlled audacity** -- The content describes something genuinely wild (agent colonies, $200/day budgets, "face ripped off by chimpanzees"). The reader needs to feel the excitement of the frontier while still feeling grounded enough to continue.
2. **Escalating capability** -- The reader is positioned at Level 7 of an 8-level complexity ladder. They need to feel that they are about to step up, that this content is the bridge to the next level.
3. **Managed chaos tolerance** -- Gas Town explicitly embraces chaos ("some bugs fixed 2-3 times"). The reader needs to feel that chaos is a feature, not a failure -- without losing trust.
4. **Factory authority** -- The shift from "programmer" to "PM" is identity-level. The reader needs to feel the weight of command, not the comfort of craft.

**Structural Properties:** Escalation gradient, bounded wildness, authority framing, threshold-crossing

**Richness:** HIGH -- Content explicitly discusses emotional states (chaos tolerance, readiness, identity shift). Emotional vocabulary is rich ("fuckin' ant," "face ripped off," "slopping shiny fish"). The audacity-vs-grounding tension is strong.

---

### AXIS: UNDERSTAND

**Question:** "What does the reader need to UNDERSTAND about the relationships in this Gas Town content?"

**Needs:**
1. **Role hierarchy topology** -- 8 roles exist in a 3-level hierarchy (Town / Rig / Human). The reader needs to understand how they nest, who talks to whom, and what each DOES vs what each IS.
2. **Flow directionality** -- Work flows from Overseer -> Mayor -> Refinery -> Polecat -> Dogs -> Complete. The reader needs the pipeline shape.
3. **Separation of concerns** -- Beads (memory) vs Gas Town (orchestration) vs Claude (execution). Three distinct systems interacting. The reader must understand the boundaries.
4. **Scaling model** -- Why colonies over single agents. The ant-colony analogy carries structural meaning (parallelism, disposability, persistence through replacement).
5. **Memory architecture** -- Hot/Warm/Cold layering in Beads. Retrieval order. Why git as database.

**Structural Properties:** Hub-spoke topology, layered hierarchy, pipeline flow, nested containment, boundary differentiation

**Richness:** HIGH -- The content IS about interconnected systems. The 8-role architecture is the centerpiece. Understanding relationships IS the content's purpose. This axis is maximally activated.

---

### AXIS: DO

**Question:** "What does the reader need to DO with this content after reading?"

**Needs:**
1. **Install and configure** -- Concrete CLI commands, prerequisites checklist, startup scripts
2. **Decide appropriateness** -- Decision matrix: is Gas Town right for them? (Stage 7+ gate)
3. **Troubleshoot** -- Recovery commands for 6 failure modes
4. **Budget** -- Cost estimation per role per hour

**Structural Properties:** Sequential steps, checklist verification, decision branching, lookup tables

**Richness:** MEDIUM -- The content has substantial implementation material, but the DO axis aligns well with the system's natural tools (task components, code blocks, checklists). Less tension than FEEL or UNDERSTAND.

---

### AXIS: BECOME

**Question:** "What does the reader need to BECOME after absorbing this Gas Town content?"

**Needs:**
1. **Become a PM instead of a programmer** -- This is explicitly stated: "You're not a programmer anymore. You're the head chef." The identity transformation is the content's thesis.
2. **Become comfortable with imperfection** -- "Focus: THROUGHPUT, not perfection." The reader must internalize a new quality philosophy.
3. **Become a factory operator** -- Not "someone who uses tools" but "someone who manages a production system."

**Structural Properties:** Identity threshold, before/after framing, philosophy adoption, role reframing

**Richness:** HIGH -- The content explicitly frames a BECOME transformation (programmer -> PM, single-ant -> colony-thinker, perfectionist -> throughput-maximizer). The transformation is multi-layered and involves identity, not just skill.

---

### AXIS: NAVIGATE (Extended Core)

**Question:** "How does the reader need to move THROUGH this content?"

**Needs:**
1. **Non-linear access to roles** -- The 8 roles can be consulted independently. A reader may want to jump to "Polecat" without reading "Mayor" first.
2. **Progressive depth per role** -- Each role has a shallow summary (table row) AND deep dive (section). The reader needs both entry points.
3. **Implementation vs philosophy toggle** -- Some readers want principles first, implementation second. Others want commands first, philosophy later. The content serves both but linearly.

**Structural Properties:** Hub-spoke access, depth stratification, modal toggling

**Richness:** MEDIUM -- The content is long with multiple sections, making NAVIGATE relevant. But the topology is mostly linear (TOC order), and the content has a natural reading order. The hub-spoke potential of the 8-role architecture creates moderate tension with linear scroll.

---

### AXIS: TRUST

**Question:** "What does the reader need to believe about this content's AUTHORITY?"

**Needs:**
1. **Yegge's credibility** -- 40-year veteran, Amazon/Google pedigree, 1M lines vibe-coded. The reader must trust the source.
2. **Recursive validation** -- "Built Gas Town using Gas Town" is the ultimate credibility move.
3. **Honest limitations** -- "Code is 3 weeks old," "100% vibe-coded," "expensive as hell." Transparency as trust mechanism.
4. **Stage-gate credibility** -- The content warns readers away ("if you're not at Stage 7, you'll get your face ripped off"). This filtering IS a trust signal.

**Structural Properties:** Authority layering, transparency markers, self-selection gates

**Richness:** LOW -- Both the content and the KortAI system want to project authority. The system IS authoritative (75% austere, 85% serious, 80% formal). The content's credibility needs align with the system's personality. Cosmetic territory.

---

### AXIS: EVALUATE

**Question:** "What does the reader need to JUDGE about the quality, validity, or fit of what's presented?"

**Needs:**
1. **Is Gas Town right for me?** -- The decision matrix is explicit. Cost, stage level, chaos tolerance.
2. **Gas Town vs alternatives** -- Three comparison tables (vs Ralph, vs CC Mirror, vs Orchestra).
3. **Cost-benefit analysis** -- $50-200/day vs throughput gains.

**Structural Properties:** Comparison structures, decision gates, cost matrices

**Richness:** MEDIUM -- The content contains substantial comparison material. But EVALUATE demands holding options in equanimity, while KortAI's opinionated personality actually serves this (it ranks, it judges). Some tension exists in the comparison sections, but the system has components for this (Decision Matrix, comparison tables).

---

### AXIS: ORIENT

**Question:** "What does the reader need to know about WHERE THIS FITS before engaging?"

**Needs:**
1. **Complexity ladder position** -- Level 7 of 8. The "You Are Here" diagram is already in the content.
2. **Wave framework position** -- Wave 6 of 6. Gas Town is positioned on a temporal evolution.
3. **Prerequisite chain** -- Explicit: must have mastered Levels 0-6, 100+ hours multi-agent.

**Structural Properties:** Position markers, prerequisite chains, context anchoring

**Richness:** LOW YIELD -- The content already provides orientation explicitly (the complexity ladder, the "You Are Here" section). The system's hierarchy-first approach serves this directly. No genuine opposition.

---

### AXIS: RECONCILE (Extended Core)

**Question:** "What does the reader need to RECONCILE between this content and what they already believe?"

**Needs:**
1. **"Code quality matters" vs "throughput over perfection"** -- Most developers have internalized code quality as a virtue. Gas Town explicitly rejects this. The reader must reconcile their engineering identity with a new philosophy.
2. **"I write code" vs "I manage agents"** -- The identity shift from maker to manager. This contradicts deeply-held developer identity.
3. **"Agents are unreliable" vs "throw more agents at it"** -- The nondeterministic idempotence principle contradicts the reliability-first mindset.
4. **"Chaos is failure" vs "chaos is the medium"** -- The Mad Max aesthetic isn't decoration -- it's philosophy. The reader must reconcile their desire for control with Gas Town's embrace of entropy.

**Structural Properties:** Belief inversion, before/after framing, paradox containment, identity crisis staging

**Richness:** HIGH -- This is the richest axis. The content is EXPLICITLY paradigm-shifting. Every section challenges conventional developer wisdom. The reconciliation demands are deep, multi-layered, and emotionally charged. The tension between "reconciliation requires holding contradictions gently" and KortAI's "verdict-driven, decisive" personality is maximum.

---

### AXIS: COMPARE (Structural Trigger -- DEPLOYED)

**Deploy signal:** Section 12 contains three explicit comparison tables (Gas Town vs Ralph, vs CC Mirror, vs Orchestra). The "Orchestrator Spectrum" diagram. The Decision Matrix.

**Needs:**
1. **Multi-dimensional comparison** -- Not just "which is better" but trade-offs across 8+ dimensions per comparison
2. **Spectrum positioning** -- Gas Town occupies a specific position on the simple-complex spectrum
3. **Decision support** -- The reader needs to CHOOSE, not just compare

**Structural Properties:** Parallel columns, dimensional ranking, spectrum positioning

**Richness:** MEDIUM -- Comparison is well-served by tables and grids, which the system provides. Some tension in making 4-way comparisons feel like a unified story rather than a data dump.

---

### AXIS: IDENTIFY (Structural Trigger -- DEPLOYED)

**Deploy signal:** The content uses explicit personas (Overseer = YOU), role names from Mad Max (Mayor, Deacon, Dogs, Polecats, Crew), and a protagonist narrative ("your current state... after this document, you will...").

**Needs:**
1. **Reader-as-Overseer** -- The content literally assigns the reader an identity: "That's you, Human."
2. **Role identification** -- Each of the 8 roles has a personality implied by its name (Mayor = authority, Dogs = enforcement, Witness = observation)
3. **Before/After identity** -- "You are currently X. After this, you will be Y."

**Structural Properties:** Persona anchoring, role casting, identity mirroring

**Richness:** MEDIUM -- The identity-casting is explicit and engaging, but it's mostly served by narrative framing rather than structural opposition. The system's formal personality suits authority-casting.

---

### AXIS: DISCOVER (Structural Trigger -- DEPLOYED)

**Deploy signal:** The content has progressive revelation structure -- the core insight ("biggest ant" -> colony) is revealed early but unpacked layer by layer through 8 roles, then Beads, then principles.

**Needs:**
1. **Progressive unpacking** -- Each section reveals a new layer of the factory metaphor
2. **Aha-moment staging** -- The "colonies, not bigger ants" insight is the seed; each role demonstrates it
3. **Delayed payoff** -- Understanding why Beads matters only makes sense AFTER understanding why context dies

**Structural Properties:** Layered revelation, seed-and-bloom, delayed gratification

**Richness:** MEDIUM -- There's tension between DISCOVER's "withhold and reveal" and KortAI's "direct and explicit" labeling. But the content's natural structure already provides the revelation order, reducing the structural demand on the layout.

---

### AXIS: SEE (Structural Trigger -- DEPLOYED)

**Deploy signal:** The content contains multiple system architectures (role hierarchy, Beads architecture, communication flow, memory model). These are SPATIAL relationships that need visual expression.

**Needs:**
1. **Role hierarchy as spatial topology** -- The 3-level nesting (Town / Rig / Human) is spatial
2. **Communication flow as directed graph** -- Work flows through the system in specific directions
3. **Memory layers as depth** -- Hot / Warm / Cold is a literal depth metaphor in Beads

**Structural Properties:** Topology rendering, directional flow, depth layering

**Richness:** HIGH -- The content is ABOUT systems with spatial relationships. The ASCII diagrams in the source are attempting to communicate spatial structure through a linear medium. This axis produces genuine tension: the reader needs to SEE a spatial system, but CSS layouts are fundamentally linear (vertical scroll). The hub-spoke topology of 8 roles particularly strains against linear presentation.

---

### AXIS: REMEMBER (Structural Trigger -- DEPLOYED)

**Deploy signal:** CLI commands, startup scripts, role summaries, cost tables, recovery commands -- all reference material designed for future recall.

**Needs:**
1. **Quick reference** -- The appendix already provides this, but the reference material is scattered throughout
2. **Command mnemonics** -- `gt mayor up`, `gt dogs bark` -- the naming convention IS mnemonic
3. **Role summary** -- Each role needs a sticky, retrievable identity

**Structural Properties:** Summary anchors, regular rhythm, visual chunking

**Richness:** LOW YIELD -- Reference material is well-served by existing design system components (code blocks, tables, consistent typography). No genuine tension; this is assembly territory.

---

### Phase 1 Summary Table

| Axis | Richness | Key Needs | Notes |
|------|----------|-----------|-------|
| **FEEL** | HIGH | Controlled audacity, escalation, managed chaos, factory authority | Rich emotional vocabulary in content |
| **UNDERSTAND** | HIGH | Role topology, flow direction, separation of concerns, scaling model | Content IS about system relationships |
| **DO** | MEDIUM | Install, decide, troubleshoot, budget | Aligns with system tools |
| **BECOME** | HIGH | PM identity, imperfection tolerance, factory operator | Explicit transformation thesis |
| **NAVIGATE** | MEDIUM | Non-linear role access, depth stratification, mode toggle | Hub-spoke vs linear scroll |
| **TRUST** | LOW | Yegge credibility, recursive validation, honest limitations | Aligns with system authority |
| **EVALUATE** | MEDIUM | Self-selection, 4-way comparison, cost-benefit | Comparison tables served by system |
| **ORIENT** | LOW YIELD | Ladder position, wave position, prerequisites | Already provided in content |
| **RECONCILE** | HIGH | Quality vs throughput, coder vs manager, control vs chaos | Maximum paradigm shift |
| **COMPARE** | MEDIUM | Multi-dimensional trade-offs, spectrum, decision support | Tables serve this well |
| **IDENTIFY** | MEDIUM | Reader-as-Overseer, role personas, identity arc | Narrative framing |
| **DISCOVER** | MEDIUM | Progressive unpacking, aha-staging, delayed payoff | Withhold vs directness |
| **SEE** | HIGH | Spatial topology, directed flow, depth layers | System architecture is spatial |
| **REMEMBER** | LOW YIELD | Quick reference, mnemonics, role summaries | Assembly territory |

**High-yield axes for tension derivation:** FEEL, UNDERSTAND, BECOME, RECONCILE, SEE
**Interaction effects:** RECONCILE + BECOME (double transformation), UNDERSTAND + SEE (spatial understanding vs linear scroll), FEEL + RECONCILE (embrace chaos vs maintain trust)

---

## Phase 2: Tension Derivation

### Tension 1: UNDERSTAND axis -- "Interconnected System vs Flat Scroll"

**Side A (Reader Needs):**
- Perceive 8 roles in their spatial hierarchy (3 levels)
- Trace work flow through directed paths (Overseer -> Mayor -> Refinery -> Polecat -> Dogs -> Complete)
- Distinguish Town-level (global) from Rig-level (per-project) from Human-level
- Grasp hub-spoke topology where Mayor, Deacon, and Dogs are singletons while Polecats and Crew are multiples
- Understand Beads as a separate system that underlies the orchestration layer
- Structural properties needed: HUB-SPOKE, LAYERED HIERARCHY, DIRECTED FLOW, BOUNDARY DIFFERENTIATION, NESTED CONTAINMENT

**Side B (KortAI Constraints):**
- Linear vertical scroll (F-pattern or Z-pattern)
- Flat, angular rectangles with no depth illusion (box-shadow: none)
- Limited accent palette (only red + 5 callout accents)
- Grid-based but fundamentally 2D
- Typography hierarchy serves ranking but not topology
- Structural properties: LINEAR FLOW, ANGULARITY, FLATNESS, DISCRETE WEIGHT, PRECISE INTERVALS, NARROW TEMPERATURE RANGE

**Genuine Opposition:**
The reader needs to perceive a HUB-SPOKE TOPOLOGY with DIRECTED FLOW through NESTED LEVELS. The system provides LINEAR FLOW through FLAT RECTANGLES. You cannot render a hub-spoke topology by stacking rectangles -- the topology requires simultaneous perception of center + periphery, which linear scroll destroys.

**Addition Test:** Can you fulfill the need by selecting and placing existing design system components?
- Tables can list roles. YES.
- Code blocks can show commands. YES.
- But can any component show how Mayor connects to Refinery connects to Polecat while simultaneously showing that Deacon and Dogs operate at a different level? NO.
- Can stacked sections communicate that Witness OBSERVES the same space Polecats WORK in? NO.
- **Result: NO. GENUINE tension.**

**BECAUSE Test:** The reader needs to perceive spatial role topology BECAUSE the content describes an 8-role hierarchy with 3 levels, directed work flow, and cross-cutting concerns (Deacon monitors all; Dogs gates all; Witness observes per-rig). The topology IS the content's core structure.

**Richness Formula:**
- Opposition Depth: 3 layers (hub-spoke vs linear; nested hierarchy vs flat; directed flow vs sequential) = HIGH (3)
- Structural Overlap: Both share ORDERING (hierarchy = ordered), CONTAINMENT (sections = bounded), DISCRETE WEIGHT (roles have different importance = border weights), INTERVALS (spacing rhythm) = 4 shared = HIGH (3)
- Metaphor Space Width: Circuit board, building floor plan, org chart, dashboard, control room, city grid = 5+ = HIGH (3)
- **RICHNESS = 3 x 3 x 3 = 27**

---

### Tension 2: RECONCILE axis -- "Paradigm Inversion vs Decisive Authority"

**Side A (Reader Needs):**
- Hold contradictions gently: quality vs throughput, control vs chaos, maker vs manager
- See BOTH sides as valid before choosing
- Experience the paradigm shift as a crossing, not a verdict
- Feel safe to question their current beliefs before adopting new ones
- Structural properties needed: PARADOX CONTAINMENT, EQUANIMITY, THRESHOLD STAGING, GENTLE INVERSION

**Side B (KortAI Constraints):**
- Opinionated and decisive (85% serious, 80% rigid)
- Verdict-driven -- the system ranks, judges, and declares
- Authority-projecting (75% austere, 80% formal)
- Binary: borders are either structural (3-4px) or data (1px). No middle ground.
- Structural properties: DECISIVENESS, AUTHORITY, BINARY CLASSIFICATION, ANGULAR CERTAINTY

**Genuine Opposition:**
The reader needs EQUANIMITY (holding two views as equal before choosing). The system IS decisiveness. You cannot project "both sides are valid" through a system that says "this is how it is." The geometry of certainty (sharp edges, flat surfaces, restrained palette) contradicts the epistemology of reconciliation (holding uncertainty, letting old beliefs soften before new ones form).

**Addition Test:** Can you fulfill the need by selecting and placing existing design system components?
- Pro/con tables exist. YES for data.
- But can any component communicate "your current belief is valid AND this new belief is also valid AND the transition between them is safe"? NO.
- The system can declare. It cannot hold paradox.
- **Result: NO. GENUINE tension.**

**BECAUSE Test:** The reader needs to reconcile "I write code" with "I manage agents" BECAUSE the content explicitly demands an identity-level shift from programmer to PM, and the reader likely holds programmer identity as core to their self-concept.

**Richness Formula:**
- Opposition Depth: 4 layers (equanimity vs verdict; uncertainty vs certainty; gentle vs angular; gradual vs binary) = HIGH (3)
- Structural Overlap: Both share CONTAINMENT (paradox in a box = bordered section), ORDERING (old-belief -> bridge -> new-belief = section sequence), HIERARCHY (some reconciliations are harder than others = typography weight) = 3 shared = MEDIUM (2)
- Metaphor Space Width: Geological fault line, alchemical transformation, bridge construction, court deliberation, archaeological dig = 5+ = HIGH (3)
- **RICHNESS = 3 x 2 x 3 = 18**

---

### Tension 3: FEEL axis -- "Controlled Audacity vs Austere Formality"

**Side A (Reader Needs):**
- Feel the excitement of the frontier ("biggest fuckin' ant," Mad Max references, chaos as medium)
- Feel escalation from "mastered" to "ascending"
- Feel managed wildness -- chaos that is productive, not destructive
- Feel the gravitas of command (PM authority, factory oversight)
- Structural properties needed: ESCALATION GRADIENT, BOUNDED WILDNESS, THEATRICAL ENERGY, AUTHORITY WITH EDGE

**Side B (KortAI Constraints):**
- 75% austere, 85% serious, 80% formal
- Restrained palette (90% restrained)
- Angular and geometric (95% angular, 100% geometric)
- Structural properties: RESTRAINT, FORMALITY, GEOMETRIC CONTROL, NARROW EXPRESSION

**Genuine Opposition:**
The content vibrates with Yegge's energy -- profanity, Mad Max metaphors, fish-slopping imagery. The system is a formal magazine. You cannot render "fuckin' ant" energy through austere restraint. But both share AUTHORITY and PRECISION -- Yegge's wildness is precise (specific cost numbers, specific stage gates), and the system's formality is authoritative.

**Addition Test:** Can you fulfill the need by selecting and placing existing design system components?
- Blockquotes can hold the wild quotes. YES for containment.
- But can any component make the reader FEEL the escalation from competent to audacious? NO.
- Can the restrained palette communicate the Mad Max frontier? NO.
- **Result: NO. GENUINE tension.**

**BECAUSE Test:** The reader needs to feel controlled audacity BECAUSE the content uses frontier/post-apocalyptic framing ("Gas Town," "polecats," "crew," "face ripped off") as structural metaphor, not decoration -- the chaos-tolerance philosophy IS the system's design principle.

**Richness Formula:**
- Opposition Depth: 3 layers (wildness vs restraint; theatrical vs formal; escalation vs steady) = HIGH (3)
- Structural Overlap: Both share AUTHORITY (Yegge commands; system commands), PRECISION (specific numbers; quantized spacing), CONTAINMENT (chaos is bounded; sections are bordered) = 3 shared = MEDIUM (2)
- Metaphor Space Width: War room, command bridge, forge/foundry, industrial control room, mission control = 5 = HIGH (3)
- **RICHNESS = 3 x 2 x 3 = 18**

---

### Tension 4: BECOME axis -- "Identity Transformation vs Static Authority"

**Side A (Reader Needs):**
- Cross from "programmer" to "PM" identity
- Experience the transition as progressive, not instantaneous
- See the before-state (current identity) honored, not dismissed
- See the after-state (new identity) as earned, not imposed
- Structural properties needed: THRESHOLD CROSSING, PROGRESSIVE STAGING, BEFORE/AFTER FRAMING, EARNED ARRIVAL

**Side B (KortAI Constraints):**
- Static: the system is what it is (fixed palette, fixed geometry, fixed typography)
- Declarative: "this IS" rather than "this BECOMES"
- Authority is established, not earned within the page
- Structural properties: STASIS, DECLARATION, ESTABLISHED AUTHORITY, FIXED VOCABULARY

**Genuine Opposition:**
BECOME demands temporal arc (I was X, now I am Y). The system is atemporal -- it declares rather than progresses. CSS itself is static; there is no native mechanism for "transformation" in a scroll-based layout (scroll animations violate soul).

**Addition Test:** Can you fulfill the need by selecting and placing existing design system components?
- The complexity ladder diagram shows progression. YES for data.
- But can any component make the reader feel they are CROSSING the threshold from Level 7 to factory-operator? NO.
- **Result: NO. GENUINE tension.**

**BECAUSE Test:** The reader needs to BECOME a factory operator BECAUSE the content's thesis is that the programmer identity is insufficient for Gas Town's demands, and the reader must adopt a fundamentally different relationship to code.

**Richness Formula:**
- Opposition Depth: 2 layers (temporal arc vs stasis; earned arrival vs declared authority) = MEDIUM (2)
- Structural Overlap: Both share ORDERING (progression stages = section sequence), HIERARCHY (levels of mastery = typography hierarchy) = 2 shared = MEDIUM (2)
- Metaphor Space Width: Training dojo, forge/tempering, military ranks, construction site, metamorphosis stages = 5 = HIGH (3)
- **RICHNESS = 2 x 2 x 3 = 12**

---

### Tension 5: SEE axis -- "Spatial Topology vs Linear Medium"

**Side A (Reader Needs):**
- Perceive the 8-role architecture as a SPATIAL SYSTEM, not a list
- See the communication flow as DIRECTED PATHS between nodes
- See the Beads memory model as DEPTH (Hot/Warm/Cold layers)
- Perceive Town-level vs Rig-level vs Human-level as SPATIAL NESTING
- Structural properties needed: TOPOLOGY, DIRECTED GRAPHS, DEPTH LAYERS, SPATIAL NESTING

**Side B (KortAI Constraints):**
- 2D flat surface (box-shadow: none, filter: none)
- Linear vertical scroll
- Grid-based (angular, geometric)
- Structural properties: FLATNESS, LINEAR FLOW, 2D GRID, ANGULARITY

**Genuine Opposition:**
The reader needs to perceive 3D/topological relationships (hub-spoke, nested hierarchy, directed flow). The system is flat 2D with no depth illusion. The content's ASCII diagrams ARE already the system's spatial voice trying to speak -- and they're limited. The challenge is whether CSS layout can communicate topology better than ASCII art while staying within the soul constraints.

**Addition Test:** Can you fulfill the need by selecting and placing existing design system components?
- Grid layouts can show parallel items. YES for adjacency.
- Nested borders can show containment. YES for nesting.
- But can any component show that Mayor connects to Refinery which connects to Polecat in a DIRECTED flow? Not without arrows or visual connectors. PARTIAL.
- **Result: PARTIAL. Weak genuine tension.**

**BECAUSE Test:** The reader needs to SEE spatial topology BECAUSE the content describes an 8-role system with 3 hierarchy levels, directed work flow, cross-cutting monitors, and a separate data plane -- relationships that are fundamentally spatial.

**Richness Formula:**
- Opposition Depth: 2 layers (3D topology vs 2D flat; hub-spoke vs linear) = MEDIUM (2)
- Structural Overlap: Both share CONTAINMENT (nesting = borders), ORDERING (hierarchy = size/weight), GRID (adjacency = columns) = 3 shared = MEDIUM (2)
- Metaphor Space Width: Circuit board, floor plan, city grid, dashboard, periodic table = 5 = HIGH (3)
- **RICHNESS = 2 x 2 x 3 = 12**

---

### Tension Summary Table

| # | Axis | Tension | Addition Test | BECAUSE Test | Richness |
|---|------|---------|---------------|--------------|----------|
| T1 | UNDERSTAND | Interconnected system vs flat scroll | GENUINE | PASS | 27 |
| T2 | RECONCILE | Paradigm inversion vs decisive authority | GENUINE | PASS | 18 |
| T3 | FEEL | Controlled audacity vs austere formality | GENUINE | PASS | 18 |
| T4 | BECOME | Identity transformation vs static authority | GENUINE | PASS | 12 |
| T5 | SEE | Spatial topology vs linear medium | WEAK GENUINE | PASS | 12 |

**Tension Validity Check:**
1. Genuine? YES for T1-T4, WEAK for T5
2. Rich enough (>= 8)? YES for all
3. Bridgeable (overlap >= 2)? YES for all
4. Novel? YES (none copy previous exploration tensions)
5. Content-driven? YES (all pass BECAUSE test)

**Primary tension:** T1 (UNDERSTAND) at richness 27 -- the highest possible score. This is where the metaphor should live.

**Compound tension check:** T1 (UNDERSTAND) + T5 (SEE) compound into "spatial system understanding vs flat linear presentation" -- this is richer than either alone. Combined, they demand a metaphor that bridges interconnected spatial topology with flat angular rectangles.

**Secondary tension:** T2 (RECONCILE) and T3 (FEEL) at 18 each. These inform emotional tone but the PRIMARY metaphor should resolve T1+T5.

### Exit Ramp: Tension Threshold Gate

Genuine tension count = 4 (T1-T4) + 1 weak (T5) = at least 4 GENUINE tensions.

**PROCEED TO PHASE 3.**

---

## Phase 3: Metaphor Collapse

### Primary Tension Being Resolved

**T1 (UNDERSTAND, richness 27) + T5 (SEE, richness 12) compound:**
The reader needs to perceive an 8-role interconnected hierarchical system with directed work flow, hub-spoke topology, and nested containment levels -- through a medium of flat, angular, sharp-edged rectangles on a linear vertical scroll.

### Step 3.1 -- Structural Properties from Side A (Reader Needs)

| Emotional/Experiential Need | Structural Abstraction |
|---|---|
| Perceive 8 roles in hierarchy | NESTED CONTAINMENT (3 levels deep) |
| Trace directed work flow | DIRECTED TRAVERSAL (input -> output pipeline) |
| Distinguish singletons from multiples | CARDINALITY (one vs many instances) |
| See hub-spoke topology | CENTRALITY (hub node with radiating spokes) |
| Understand separation of concerns | BOUNDARY DIFFERENTIATION (distinct zones with clear borders) |
| See memory depth (Hot/Warm/Cold) | DEPTH STRATIFICATION (layers with increasing density) |
| Grasp the colony model | DISTRIBUTED MULTIPLICITY (many small units, one system) |

### Step 3.2 -- Structural Properties from Side B (System Constraints)

| Design Constraint | Structural Abstraction |
|---|---|
| border-radius: 0 | ANGULARITY |
| box-shadow: none | FLATNESS |
| Border categories (1px, 3-4px) | DISCRETE WEIGHT |
| Spacing scale | PRECISE INTERVALS |
| Limited palette | NARROW TEMPERATURE RANGE |
| Grid/flex layout | ORTHOGONAL GRID |
| Typography hierarchy | RANKED SCALE |
| Vertical scroll | LINEAR FLOW |

### Step 3.3 -- Structural Overlap

| Side A Property | Side B Property | Shared? |
|---|---|---|
| NESTED CONTAINMENT | ORTHOGONAL GRID | YES -- grid cells contain sub-grids |
| DIRECTED TRAVERSAL | LINEAR FLOW | YES -- both have sequence |
| BOUNDARY DIFFERENTIATION | DISCRETE WEIGHT | YES -- different border weights = different boundaries |
| DEPTH STRATIFICATION | NARROW TEMPERATURE RANGE | PARTIAL -- background shifts can suggest depth |
| CARDINALITY | PRECISE INTERVALS | NO |
| CENTRALITY | ANGULARITY | NO |
| DISTRIBUTED MULTIPLICITY | FLATNESS | NO |
| RANKED SCALE | RANKED SCALE | YES -- typography hierarchy maps to role hierarchy |

**Shared properties:** CONTAINMENT, TRAVERSAL/FLOW, BOUNDARY WEIGHT, RANKED SCALE = 4 fully shared + 1 partial
**Side A gaps (not in B):** CENTRALITY, CARDINALITY, DISTRIBUTED MULTIPLICITY
**Side B gaps (not in A):** ANGULARITY, FLATNESS

**Total unique properties:** 12
**Shared:** 4.5
**Overlap percentage: ~38%** -- just below the ideal zone (40-70%). This means strong metaphor potential with slight challenge. Expect the metaphor to need creative resolution for CENTRALITY and MULTIPLICITY.

### Step 3.4 -- Search Query

> "What real-world domain naturally exhibits CONTAINMENT, DIRECTED FLOW, BOUNDARY DIFFERENTIATION, and RANKED SCALE while being ANGULAR and FLAT, yet conveying CENTRALITY, CARDINALITY, and DISTRIBUTED MULTIPLICITY?"

### Search Heuristic Application

**1. Constraint scan (hardest constraint first):**
ANGULARITY eliminates: organic, biological, liquid, atmospheric, textile, botanical.
FLATNESS eliminates: 3D architectural (unless projected to 2D), sculptural.
DIRECTED FLOW + CENTRALITY eliminates: random/chaotic domains.
Surviving: engineering schematics, circuit boards, city grids, floor plans, industrial process diagrams, military command structures, railway networks.

**2. Content resonance:**
The content is literally about: a FACTORY for agents. A COLONY of workers. A TOWN with roles. PIPES through which work flows. The vocabulary already contains: "factory," "town," "rig," "role hierarchy," "communication flow," "workers."
- FACTORY resonates with: industrial process, assembly line, production floor
- TOWN resonates with: city grid, urban planning, zoning
- COLONY resonates with: distributed systems, circuit networks
- The content's own name "Gas Town" is from Mad Max -- a REFINERY/INDUSTRIAL complex

**3. Emotional valence:**
Side A's emotion is: mastery, capability, command, controlled complexity.
Eliminates: medical (clinical), pastoral (gentle), playful (whimsical).
Survives: industrial (authority + precision), military (command), engineering (mastery).

---

### Candidate 1: INDUSTRIAL REFINERY / PROCESS PLANT

**Search query response:** A refinery naturally exhibits containment (vessels, pipes, zones), directed flow (input materials flow through processing stages to output), boundary differentiation (different pressure zones have different wall thicknesses), and ranked scale (primary reactors vs auxiliary systems). It is angular and flat (pipes are rectangular in schematic, vessels are geometric), yet conveys centrality (main reactor as hub), cardinality (one control room vs many processing units), and distributed multiplicity (many valves, sensors, and pipes across the plant).

**Content resonance:** MAXIMUM. The content literally uses "Refinery" as a role name. "Gas Town" IS a refinery in Mad Max. The metaphor is already IN the content. The factory metaphor is Yegge's own framing.

#### Composite Scoring

**A. Tension Resolution:**
- T1 (Interconnected system vs flat scroll): RESOLVES (1) -- A refinery schematic/P&ID diagram IS a flat 2D representation of an interconnected system. Schematics use exactly the geometric vocabulary (rectangles, lines, zones) that CSS provides.
- T2 (Paradigm inversion vs decisive authority): PARTIAL (0.5) -- Refineries are authoritative (industrial precision) but don't inherently communicate paradigm shifts. However, the "raw material in -> refined product out" maps to "programmer in -> PM out."
- T3 (Controlled audacity vs austere formality): RESOLVES (1) -- Refineries ARE controlled audacity. They contain explosive, dangerous processes within precise engineering. Chaos (combustion, chemical reactions) inside formal containment (pressure vessels, safety systems).
- T4 (Identity transformation): PARTIAL (0.5) -- Refinement IS transformation (crude oil -> gasoline), but the reader isn't the material being refined; they're the operator.
- T5 (Spatial topology vs linear): RESOLVES (1) -- P&ID (Piping and Instrumentation Diagrams) are the canonical way to represent interconnected industrial systems in 2D.
- **Score: 4/5**

**B. Structural Isomorphism:**

| Refinery Property | Content Property | System Mechanism |
|---|---|---|
| Processing zones (cracking, distillation, storage) | Role levels (Town, Rig, Human) | Background color zones (dark=Town, medium=Rig, light=Human) |
| Flow pipes connecting vessels | Work flow (Overseer->Mayor->Refinery->Polecat) | Border-left accents as flow indicators; section sequence |
| Main reactor (central, largest) | Mayor role (singular, coordinates all) | Larger section, heavier border weight (4px) |
| Pressure vessel walls (thick for high pressure) | Role importance/authority | Border weight: 3-4px for critical roles, 1px for auxiliary |
| Multiple identical processing units | Polecats/Crew (multiple instances) | Grid of identically-styled cards |
| Control room (separate, monitoring) | Overseer + Deacon (monitoring roles) | Distinct background zone, mono typography |
| Safety valves / overflow | Dogs (quality gates) | Accent-coral callout boxes |
| Input hopper | Overseer inbox | Top-of-page entry component |
| Output spout | Completed work | Bottom-of-page terminal section |
| Temperature/pressure gauges | Health checks, status indicators | Mono-font labels with metric values |

**Isomorphism count: 10** -- Structurally isomorphic. The metaphor IS the content.

**C. Content Resonance: HIGH**
The content literally uses "Refinery" as a role name. "Gas Town" is a refinery. "Factory for agents." "Idea Compiler." "Sling work around." Every structural term in the content has a refinery analogue. The vocabulary match is nearly 1:1.

**D. Mechanism Feasibility:**
- Processing zones -> background color: LEGAL (zone palette)
- Flow pipes -> border-left accents: LEGAL (4px structural border)
- Vessel walls -> border weight: LEGAL (3 categories)
- Multiple units -> grid layout: LEGAL (CSS grid)
- Control room -> typography shift (mono): LEGAL (3 font families)
- Safety valves -> callout components: LEGAL (accent-coral callouts)
- Gauges -> mono-font labels: LEGAL
- **Feasibility: 100%**

**Composite Verdict: PROCEED** (Resolution 4/5, Isomorphism 10, Resonance HIGH, Feasibility 100%)

---

### Candidate 2: CIRCUIT BOARD / PCB SCHEMATIC

**Search query response:** A circuit board naturally exhibits containment (component boundaries), directed flow (electrical current paths), boundary differentiation (traces of different widths for different current capacities), and ranked scale (ICs vs resistors vs traces). It is angular and flat (literally 2D copper on fiberglass), yet conveys centrality (CPU/main chip), cardinality (one processor vs many capacitors), and distributed multiplicity (hundreds of components on one board).

**Content resonance:** MEDIUM. The content doesn't use electrical vocabulary, but the structural parallel is strong: "signals" flowing between "components" that have specific "functions." The hub-spoke of a CPU with peripheral chips maps to Mayor with surrounding roles.

#### Composite Scoring

**A. Tension Resolution:**
- T1 (Interconnected system vs flat scroll): RESOLVES (1) -- PCB schematics ARE flat 2D representations of interconnected systems. This is their exact purpose.
- T2 (Paradigm inversion): NO (0) -- Circuit boards don't communicate paradigm shifts or reconciliation. They're static, functional.
- T3 (Controlled audacity vs formality): PARTIAL (0.5) -- Circuit boards are precise and formal but lack the "audacity" dimension. They're quiet precision, not controlled chaos.
- T4 (Identity transformation): NO (0) -- Circuit boards don't transform. They process.
- T5 (Spatial topology vs linear): RESOLVES (1) -- Schematics solve this exact problem.
- **Score: 2.5/5**

**B. Structural Isomorphism:**

| Circuit Property | Content Property | System Mechanism |
|---|---|---|
| Central processor (CPU) | Mayor | Large section with heavy border, display font |
| Peripheral chips | Other Town-level roles (Deacon, Dogs) | Smaller bordered sections at same hierarchy level |
| Buses (data paths) | Communication flow | Accent-colored border-left on flow-connected sections |
| Multiple identical capacitors | Polecats/Crew | Grid of identical styled cards |
| Ground plane | Beads data layer | Dark background zone at bottom |
| Voltage regulators | Dogs (quality gates) | Warning-accent callout |
| I/O pins | Overseer inbox/outbox | Entry/exit points with distinct styling |

**Isomorphism count: 7** -- Structurally strong.

**C. Content Resonance: MEDIUM**
"Signals" maps to "messages." "Components" maps to "roles." But the content never uses electrical vocabulary. The parallel requires translation, not recognition.

**D. Mechanism Feasibility: 100%**
All properties expressible through background, border, typography, spacing, layout, accent.

**Composite Verdict: CONSIDER** (Resolution 2.5/5, Isomorphism 7, Resonance MEDIUM, Feasibility 100%)

---

### Candidate 3: MILITARY COMMAND POST / WAR ROOM

**Search query response:** A command post naturally exhibits containment (command zones, briefing areas), directed flow (chain of command, order flow), boundary differentiation (classified zones have different security levels), and ranked scale (commanding officer vs infantry). It is angular and flat (strategy tables, map grids, status boards), yet conveys centrality (command center), cardinality (one general vs many soldiers), and distributed multiplicity (many units across a theater of operations).

**Content resonance:** MEDIUM-HIGH. "Overseer," "Mayor" (commander), "Dogs" (watchdogs/guards), "Witness" (intelligence), "Crew" (infantry), rank-based hierarchy, the Mad Max military aesthetic. The stage-gate prerequisite ("if you're not at Stage 7, you'll get your face ripped off") has military-selection energy.

#### Composite Scoring

**A. Tension Resolution:**
- T1 (Interconnected system vs flat scroll): RESOLVES (1) -- Military org charts and command structures are canonical 2D representations of hierarchical systems.
- T2 (Paradigm inversion): PARTIAL (0.5) -- Military training DOES involve identity transformation (civilian to soldier), but the aggressive valence may not suit "gentle reconciliation."
- T3 (Controlled audacity vs formality): RESOLVES (1) -- Military IS controlled audacity. Precision in chaos. Orders in battle. This is the perfect resolution.
- T4 (Identity transformation): RESOLVES (1) -- Military rank progression IS an identity system. Private -> Sergeant -> Commander.
- T5 (Spatial topology vs linear): RESOLVES (1) -- Organizational charts, theater maps, chain-of-command diagrams.
- **Score: 4.5/5**

**B. Structural Isomorphism:**

| Military Property | Content Property | System Mechanism |
|---|---|---|
| Command center (HQ) | Mayor + Town level | Dark header zone, heavy border, display font |
| Chain of command | Work flow direction | Section sequence with directional markers |
| Rank insignia | Role hierarchy | Typography scale (display -> body -> mono) |
| Theater of operations | Rig (project scope) | Bordered content zone with distinct background |
| Intelligence unit | Witness + Deacon | Mono-font, subtle background, observation styling |
| Guard posts | Dogs (quality gates) | Accent-coral bordered callouts |
| Infantry squads | Polecats/Crew | Grid of identically-styled compact cards |
| Situation board | Status displays | Table with mono font, structural borders |
| Briefing documents | Implementation guides | Code block zones with dark background |

**Isomorphism count: 9** -- Structurally isomorphic.

**C. Content Resonance: MEDIUM-HIGH**
"Overseer," hierarchy, "Dogs" as watchdogs, rank-based gating ("Stage 7+"), controlled chaos -- strong conceptual parallel. But the content uses INDUSTRIAL vocabulary (factory, refinery, rig), not military vocabulary.

**D. Mechanism Feasibility: 100%**
All properties expressible through the 6 legal CSS channels.

**Composite Verdict: PROCEED** (Resolution 4.5/5, Isomorphism 9, Resonance MEDIUM-HIGH, Feasibility 100%)

---

### Candidate 4: CITY ZONING MAP / URBAN GRID

**Search query response:** A city grid naturally exhibits containment (districts, zones), directed flow (traffic flow, utility lines), boundary differentiation (residential vs commercial vs industrial zoning has different regulations), and ranked scale (city hall vs neighborhood vs house). It is angular and flat (literally a grid on a map), yet conveys centrality (city center/downtown), cardinality (one city hall vs many houses), and distributed multiplicity (thousands of buildings in one city).

**Content resonance:** HIGH. The content IS called "Gas Town." It's a TOWN with roles. "Mayor," "Deacon" (historically a town role), "Dogs" (town guard). The name IS a place. The metaphor is baked into the content's framing.

#### Composite Scoring

**A. Tension Resolution:**
- T1 (Interconnected system vs flat scroll): RESOLVES (1) -- City maps ARE flat 2D representations of interconnected spatial systems. Zoning maps communicate function through color-coding of angular zones.
- T2 (Paradigm inversion): PARTIAL (0.5) -- Moving from "resident" to "mayor" of a town is an identity shift, but city maps don't inherently communicate paradigm shifts.
- T3 (Controlled audacity vs formality): PARTIAL (0.5) -- Cities contain both chaos (activity) and order (zoning). But the MAP is formal, not audacious.
- T4 (Identity transformation): PARTIAL (0.5) -- "Becoming the Mayor of your own Gas Town" is compelling, but the map metaphor is spatial, not temporal.
- T5 (Spatial topology vs linear): RESOLVES (1) -- Maps exist specifically to communicate spatial topology in 2D.
- **Score: 3.5/5**

**B. Structural Isomorphism:**

| City Property | Content Property | System Mechanism |
|---|---|---|
| City Hall / Town Center | Mayor | Central section, largest, heaviest border |
| District zoning (colors) | Role levels (Town/Rig/Human) | Background color zones |
| Streets (connections) | Communication flow | Border separators, spacing rhythm |
| Industrial zone | Refinery, Polecats (worker area) | Dense padding, utilitarian font |
| Residential zone | Overseer (human space) | Warm background, generous spacing |
| Police/Fire station | Dogs (quality gates) | Accent-coral bordered section |
| Utilities (underground) | Beads (data plane) | Dark background, dense, "below" in scroll |
| Multiple houses | Crew (ephemeral workers) | Grid of small identical cards |

**Isomorphism count: 8** -- Structurally isomorphic.

**C. Content Resonance: HIGH**
"Gas Town" is a TOWN. "Mayor." "Deacon." The content's own naming convention IS urban/municipal. The metaphor is pre-seeded.

**D. Mechanism Feasibility: 100%**
Zoning colors -> background zones. Streets -> borders. Districts -> grid areas. All legal.

**Composite Verdict: PROCEED** (Resolution 3.5/5, Isomorphism 8, Resonance HIGH, Feasibility 100%)

---

### Candidate 5: BUILDING FLOOR PLAN / ARCHITECTURAL BLUEPRINT

**Search query response:** A floor plan naturally exhibits containment (rooms, corridors), directed flow (foot traffic, emergency exits), boundary differentiation (load-bearing walls vs partition walls), and ranked scale (lobby vs offices vs utility closets). It is angular and flat (literally 2D projections of 3D space), yet conveys centrality (atrium, reception), cardinality (one reception vs many offices), and distributed multiplicity (many rooms serving different purposes).

**Content resonance:** MEDIUM. The content uses "rig" (which could be a room/station). "Workers" have "stations" (polecat named workspaces). The factory has "areas" for different functions. But the vocabulary isn't architectural.

#### Composite Scoring

**A. Tension Resolution:**
- T1 (Interconnected system vs flat scroll): RESOLVES (1) -- Floor plans ARE flat representations of interconnected spatial systems.
- T2 (Paradigm inversion): NO (0) -- Buildings don't communicate paradigm shifts.
- T3 (Controlled audacity vs formality): NO (0) -- Blueprints are purely formal. No audacity dimension.
- T4 (Identity transformation): NO (0) -- Buildings are static. No transformation narrative.
- T5 (Spatial topology vs linear): RESOLVES (1) -- Floor plans solve spatial topology in 2D.
- **Score: 2/5**

**B. Structural Isomorphism:**

| Floor Plan Property | Content Property | System Mechanism |
|---|---|---|
| Main hall / atrium | Mayor (central coordination) | Large section, prominent border |
| Offices (workspaces) | Polecats (named workers) | Grid of medium-sized bordered cards |
| Server room (separate, secured) | Beads (data plane) | Dark background, mono font |
| Security desk | Dogs (quality gates) | Accent-bordered section |
| Corridors | Communication flow | Spacing between sections |
| Conference room | Refinery (decomposition workspace) | Medium bordered section |

**Isomorphism count: 6** -- Structurally isomorphic but lower density than others.

**C. Content Resonance: MEDIUM**
"Workspace," "station," but the content doesn't use architectural language. The parallel requires translation.

**D. Mechanism Feasibility: 100%**

**Composite Verdict: CONSIDER** (Resolution 2/5, Isomorphism 6, Resonance MEDIUM, Feasibility 100%)

---

### Step 3.6 -- Ranking and Selection

| Rank | Candidate | Resolution | Isomorphism | Resonance | Feasibility | Composite |
|------|-----------|------------|-------------|-----------|-------------|-----------|
| **1** | **Industrial Refinery** | 4/5 | 10 | HIGH | 100% | PROCEED -- winner |
| 2 | Military Command Post | 4.5/5 | 9 | MEDIUM-HIGH | 100% | PROCEED -- strong second |
| 3 | City Zoning Map | 3.5/5 | 8 | HIGH | 100% | PROCEED -- resonance boost |
| 4 | Circuit Board | 2.5/5 | 7 | MEDIUM | 100% | CONSIDER |
| 5 | Building Floor Plan | 2/5 | 6 | MEDIUM | 100% | CONSIDER |

### Winner: INDUSTRIAL REFINERY / PROCESS PLANT

**Why it wins:**
1. **Content resonance is unmatched** -- The content literally calls itself a factory, literally has a role named "Refinery," literally is named after a refinery town. The metaphor is already IN the content. This isn't decoration; it's structural recognition.
2. **Isomorphism count is highest (10)** -- Every role maps to a refinery component. Processing zones = role levels. Pipes = work flow. Pressure vessels = containment. Multiple identical units = Crew workers. The mapping is complete.
3. **Resolves the compound tension (T1 + T5)** -- P&ID (Piping and Instrumentation Diagrams) are the canonical solution for representing interconnected industrial systems in 2D flat schematics. This is EXACTLY the problem: show a connected system through flat rectangles.
4. **Resolves the emotional tension (T3)** -- Refineries ARE controlled audacity. They contain explosive chemical processes within precisely engineered vessels. The tension between chaos (combustion, reaction, volatile materials) and control (pressure vessels, safety valves, gauges) IS the FEEL axis perfectly resolved.

**Why Military Command Post didn't win despite higher resolution score:**
Military has the highest raw resolution (4.5/5) but loses on resonance. The content uses industrial vocabulary, not military vocabulary. The isomorphism is slightly lower (9 vs 10). And the "refinery" metaphor requires zero translation -- it's the content speaking about itself.

**What the winner DOESN'T resolve:**
- T2 (RECONCILE) -- Refineries transform material but don't inherently hold paradox or reconcile opposing beliefs. The paradigm-shift dimension (programmer -> PM) will need to be handled through CONTENT FRAMING within the refinery metaphor, not through the metaphor itself. This could be expressed as "the raw material entering the refinery IS the old identity; the refined product IS the new one."
- T4 (BECOME) -- Partially resolved through "crude -> refined" transformation, but the reader isn't the material -- they're the operator. The "becoming an operator" dimension remains under-resolved.

**Full Isomorphism Table (Winner):**

| Refinery Property | Content Property | System Mechanism | CSS Expression |
|---|---|---|---|
| Processing zones | Role levels (Town/Rig/Human) | Background color zones | `background: #1A1A1A` (Town), `#FEF9F5` (Rig), `#FFFFFF` (Human) |
| Flow pipes | Work flow direction | Border-left accents + section sequence | `border-left: 4px solid var(--color-primary)` |
| Main reactor vessel | Mayor (central coordinator) | Largest section, heaviest visual weight | `border: 3px solid; font-family: var(--font-display)` |
| Pressure vessel walls | Role boundary/importance | Border weight categories | 3-4px structural for critical, 1px for auxiliary |
| Multiple identical units | Polecats + Crew | CSS Grid of identical cards | `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` |
| Control room | Overseer + monitoring roles | Distinct zone with observation styling | `background: var(--color-zone-dark); font-family: var(--font-mono)` |
| Safety valves | Dogs (quality gates) | Warning-accent callout | `border-left: 4px solid var(--accent-coral)` |
| Input hopper / feed | Overseer feature request entry | Top-of-page entry component | Entry section with warm background, generous padding |
| Output spout | Completed work | Terminal section | Bottom section with completion styling |
| Temperature gauges | Status indicators / health checks | Mono-font metric labels | `font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase` |
| Distillation columns (vertical, multi-stage) | Progressive sections within a role deep-dive | Vertical stacking with density gradient | Progressive padding reduction: 64px -> 32px -> 16px |
| Piping schematic (P&ID) | System architecture diagram | Flat 2D representation of connections | Grid layout with border connectors |

---

## Ranking

| Rank | Candidate | Composite Score | Key Strength | Key Weakness |
|------|-----------|----------------|--------------|--------------|
| **1** | **Industrial Refinery** | PROCEED (4/5 resolution, 10 isomorphisms, HIGH resonance) | Content literally IS this metaphor. Maximum resonance. Highest isomorphism count. Resolves T1+T3+T5. | Weak on T2 (reconciliation) and T4 (identity transformation). |
| **2** | **Military Command Post** | PROCEED (4.5/5 resolution, 9 isomorphisms, MEDIUM-HIGH resonance) | Highest resolution score. Strong identity transformation (rank progression). Best on T3 (controlled audacity) and T4. | Content uses industrial vocabulary, not military. Slight vocabulary mismatch. |
| **3** | **City Zoning Map** | PROCEED (3.5/5 resolution, 8 isomorphisms, HIGH resonance) | "Gas Town" is a TOWN. "Mayor." High natural resonance. Strong spatial mapping. | Weak on T2 (reconciliation), T3 (audacity), T4 (transformation). Maps are formal/static. |
| **4** | **Circuit Board / PCB** | CONSIDER (2.5/5 resolution, 7 isomorphisms, MEDIUM resonance) | Perfectly flat and angular. Strong technical parallel. Best literal match for system constraints. | Zero emotional dimension. Fails T2, T3, T4 entirely. Cold, functional only. |
| **5** | **Building Floor Plan** | CONSIDER (2/5 resolution, 6 isomorphisms, MEDIUM resonance) | Clean spatial mapping. Intuitive containment (rooms = roles). | Lowest scores across the board. No emotional dimension. Static. Generic. |

**Final Selection: INDUSTRIAL REFINERY**

The refinery metaphor wins because it is the rare case where the content's own vocabulary IS the metaphor. When the content calls itself a "factory," names a role "Refinery," and originates from a fictional refinery town, the metaphor isn't being imposed -- it's being recognized. The pipeline's job in this case is not to discover the metaphor but to CONFIRM it and translate it into CSS mechanisms with full structural rigor.

The unresolved tensions (T2: reconciliation, T4: identity transformation) can be addressed through content framing within the refinery metaphor: the reader enters as "raw material" (programmer) at the top of the refinery, and the processing stages progressively refine them into the "finished product" (PM/Overseer). This piggybacks the BECOME arc onto the refinery's natural "crude -> refined" transformation narrative.
