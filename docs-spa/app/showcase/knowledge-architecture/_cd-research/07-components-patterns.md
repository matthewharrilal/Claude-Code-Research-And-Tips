# CD Research: Component and Pattern Landscape

**Agent:** components-researcher (Task #7)
**Date:** 2026-02-11
**Sources:** OVERVIEW.md, PATTERN-INDEX.md, density-patterns.md, organizational-patterns.md, anti-patterns/registry.md, QUICK-START.md, combination-rules.md, R5-COMBINATION-THEORY.md, AD-outbound-findings.md, HANDOFF-AD-TO-CD.md

---

## 1. THE 11 KORTAI COMPONENTS

### Complete Catalog with Properties

| # | Component | Character Name | Soul Score | Velocity | Temperature | Weight | Family |
|---|-----------|---------------|------------|----------|-------------|--------|--------|
| 1 | Code Snippet | Precise Transcriptionist | 82% | SLOW | Neutral | Heavy | Technical |
| 2 | Info Callout | Senior Concierge | 88% | FAST | Neutral | Light | Callout |
| 3 | Tip Callout | Seasoned Colleague | 82% | FAST | Warm | Light | Callout |
| 4 | Gotcha Callout | Vigilant Sentinel | 85% | FAST | Cold | Medium | Callout |
| 5 | Essence Callout | Archivist of Axioms | 90% | SLOW | Warm | Medium | Callout |
| 6 | Challenge Callout | Spirited Catalyst | 86% | FAST | Warm | Medium | Callout |
| 7 | File Tree | Methodical Surveyor | 87% | MEDIUM | Neutral | Heavy | Technical |
| 8 | Decision Matrix | Impartial Cartographer | 81% | MEDIUM | Neutral | Heavy | Structural |
| 9 | Core Abstraction | Sagacious Mentor | 84% | SLOW | Reverent | Heavy | Structural |
| 10 | Task Component | Diligent Scribe | 85% | FAST | Utilitarian | Medium | Structural |
| 11 | Reasoning | Deliberative Counselor | 90% | SLOW | Deliberate | Heavy | Structural |

### Property Definitions

**Velocity** = reading speed the component encourages:
- SLOW: User pauses to study (Code, Essence, Core Abstraction, Reasoning)
- MEDIUM: User scans systematically (File Tree, Decision Matrix)
- FAST: User glances and moves on (Info, Tip, Gotcha, Challenge, Task)

**Temperature** = emotional register:
- Cold: Warning, caution (Gotcha only)
- Neutral: No emotional charge (Info, Code, File Tree, Decision Matrix)
- Warm: Friendly, encouraging (Tip, Essence, Challenge)
- Reverent: Respectful, important (Core Abstraction only)
- Utilitarian: Productive, focused (Task only)
- Deliberate: Thoughtful, considered (Reasoning only)

**Weight** = cognitive load required:
- Light: Quick to process (Info, Tip)
- Medium: Moderate attention (Gotcha, Essence, Challenge, Task)
- Heavy: Significant engagement (Code, File Tree, Decision Matrix, Core Abstraction, Reasoning)

### Three Component Families

**Callout Family (5 components):** Info, Tip, Gotcha, Essence, Challenge
- Shared DNA: 2-zone structure (label + body), 4px left accent border
- Asymmetric padding: 24px top, 28px bottom
- Label: 10px uppercase, 600 weight, 0.1em letter-spacing
- Color differentiation: Blue/Green/Red/Amber/Purple
- Exception: Essence body uses Instrument Serif italic (not sans)

**Technical Family (2 components):** Code Snippet, File Tree
- Shared DNA: Monospace font (JetBrains Mono)
- Code Snippet: Dark background (#1E1E1E)
- File Tree: Warm cream background

**Structural Family (4 components):** Decision Matrix, Core Abstraction, Task Component, Reasoning
- Decision Matrix: 3 zones, open grid (no vertical borders)
- Core Abstraction: 5 zones, composite (Essence + Code)
- Task Component: 3-4 zones per task, tasks touch (0px gap)
- Reasoning: 3 zones, equal-weight columns

---

## 2. ALL VALIDATED PATTERNS ACROSS DD, OD, AD

### Stage 2: Density Patterns (DD) -- 6 Validated

| Pattern | Finding ID | Score | Shape | Best For |
|---------|------------|-------|-------|----------|
| PULSE | DD-F-001 | 33/40 | Rhythmic high-low cycles | Tutorials, step-by-step guides |
| CRESCENDO | DD-F-002 | 35/40 | Sparse to dense build | Onboarding, progressive learning |
| ISLANDS | DD-F-003 | 32/40 | Dense clusters in sparse ocean | Reference docs, task groups |
| GEOLOGICAL | DD-F-004 | 35/40 | Stacked depth layers | Hierarchical content, expert/novice |
| TIDAL/RIVERS | DD-F-005 | 36/40 | Width as inverse density | Comparison, decision flows |
| FRACTAL | DD-F-006 | 36/40 | Self-similar at all scales | META-PATTERN (mandatory for all) |

Additional patterns (documented, not individually scored):
- BOOKENDS: Dense ends, sparse middle (Context-Action-Summary)
- WAVE: Irregular rhythm (long-form documentation)

### Stage 3: Organizational Patterns (OD) -- 6 Validated

| Pattern | Finding IDs | Score (v3) | Density Pairing | Best For |
|---------|------------|------------|-----------------|----------|
| CONVERSATIONAL | OD-F-001 to OD-F-004 | 37/40 | PULSE + TIDAL | Tutorial/FAQ/Explainer |
| NARRATIVE | (validated DD-F-002) | 35/40 | CRESCENDO | Onboarding/Getting Started |
| TASK-BASED | (validated DD-F-003) | ~35/40 | ISLANDS + BOOKENDS | Setup/Deployment/Procedures |
| CONFIDENCE-BASED | (validated DD-F-004) | 34/40 | GEOLOGICAL + CRESCENDO | API stability/Eval/ADR |
| SPATIAL | (validated DD-F-005) | 35/40 | WAVE + ISLANDS | Architecture overview/Feature catalog |
| CREATIVE/EMERGENT | OD-F-005 to OD-F-008, OD-F-013 | 37/40 (crown jewel) | ALL (FRACTAL primary) | Design system docs/Meta-documentation |

**OD Meta-insight: Organization IS Density (OD-F-005).** Choosing an organizational pattern automatically determines the density pattern. Same phenomenon, two perspectives.

### Stage 4: Axis Patterns (AD) -- 6 Validated

| Pattern | Finding IDs (primary) | Score | Density Pairing | Equivalence Mechanism |
|---------|----------------------|-------|-----------------|----------------------|
| Z-PATTERN | AD-F-001 to AD-F-004 | 36/40 | PULSE + TIDAL | Temporal (Z-sweep IS PULSE beat) |
| F-PATTERN | AD-F-005 to AD-F-008 | 35/40 | CRESCENDO + WAVE | Temporal (F-descent IS CRESCENDO) |
| BENTO GRID | AD-F-009 to AD-F-012 | 37/40 | ISLANDS + BOOKENDS | Spatial (grid cells ARE islands) |
| SPIRAL | AD-F-013 to AD-F-016 | 36/40 | GEOLOGICAL + CRESCENDO | Proportional (angular spiral = strata) |
| CHOREOGRAPHY | AD-F-017 to AD-F-020 | 35/40 | WAVE + BOOKENDS | Kinetic (direction change IS density change) |
| COMPOUND | AD-F-021 to AD-F-028 | 38/40 | ALL (FRACTAL) | Gravitational (connection count = density) |

**AD Meta-insight: Axis IS Density IS Organization (AD-F-004, AD-F-023).** Three names for one phenomenon: ATTENTION TOPOLOGY. The 3-way unification is validated through 5 equivalence mechanisms (temporal, spatial, proportional, kinetic, gravitational).

### Pattern Count Summary

| Stage | Pattern Count | Status |
|-------|--------------|--------|
| DD (Density) | 8 patterns | VALIDATED |
| OD (Organization) | 6 patterns | VALIDATED (v3 re-enriched) |
| AD (Axis) | 6 patterns | VALIDATED |
| CD (Combination) | 0 patterns | PENDING |
| **Total validated** | **20** | |

---

## 3. ANTI-PATTERN REGISTRY RELEVANT FOR CD

### Geometry Anti-Patterns (INVIOLABLE)
- **Rounded Corners:** `border-radius` must be 0. No exceptions.
- **Drop Shadows:** `box-shadow` must be none. No exceptions.

### Color Anti-Patterns
- **Traffic-Light Colors:** Green (#4A9D6B) adjacent to Red (#E83025) is forbidden. Separate with whitespace or neutral component.
- **Gray Backgrounds:** Cool grays (#F5F5F5) forbidden. Use warm cream (#FEF9F5) or semantic tints.

### Layout Anti-Patterns
- **Callout Cacophony:** Max 2 callouts per viewport. More = alarm fatigue.
- **Code Wall:** Long code blocks need breaks with explanatory callouts.
- **Same Density Throughout:** Uniform spacing is monotonous. Apply density patterns.
- **Decorative Grid Breaking:** Break with CONTENT, not decoration.

### Typography Anti-Patterns
- **Sans-Serif for Essence:** Essence body must use Instrument Serif italic.
- **Thin Callout Borders:** 4px minimum for callout left borders.
- **Non-Italic h3:** All h3 elements must be italic.

### Interaction Anti-Patterns
- **Hover Reveals:** Don't hide important content behind hover states.
- **Hover Lift Effects:** No `transform: translateY()` on hover -- violates flat design.

### Component Anti-Patterns
- **Vertical Table Borders:** Open grid only -- horizontal rules, whitespace for columns.
- **Same-Velocity Stacking:** SLOW + SLOW or FAST + FAST adjacent is monotonous. Vary velocity.

### OD-Discovered Anti-Patterns (Carry Forward to CD)
- **OD-F-AP-001: 2px Border Epidemic:** Structural borders must be 3px minimum. Reserve 4px for callout left-borders. Use 1px only for subtle horizontal rules.
- **OD-AP-002: Inconsistent Typography Scale:** Single typographic scale across all explorations with explicit creative overrides only.
- **OD-AP-003: Semi-Transparent Backgrounds:** `opacity: 1` on ALL visual elements. No rgba with alpha < 1.0. Binary rule.

### AD-Confirmed Compliance
AD stage confirmed 0 violations across all anti-patterns above, across all 6 explorations and 3,190 DOM elements. CD inherits this track record and must maintain it.

---

## 4. THE 4 COMBINATION RULES (from combination-rules.md)

These are the pre-CD rules derived from R5 research. CD will empirically validate and extend them.

### Rule 1: Never Stack Same-Velocity
SLOW + SLOW = monotonous. Insert FAST between consecutive SLOWs.
```
BAD:  Code Snippet -> Core Abstraction -> Reasoning
GOOD: Code Snippet -> Tip Callout -> Reasoning
```

### Rule 2: Temperature Flow
Warm -> Cold = jarring. Buffer with Neutral.
```
BAD:  Tip (Warm) -> Gotcha (Cold)
GOOD: Tip (Warm) -> Info (Neutral) -> Gotcha (Cold)
```

### Rule 3: Weight Balance
Heavy + Heavy = overwhelming. Intersperse Light.
```
BAD:  Code Snippet -> Decision Matrix -> Reasoning
GOOD: Code Snippet -> Info Callout -> Decision Matrix
```

### Rule 4: Semantic Proximity Spacing
| Relationship | Spacing |
|-------------|---------|
| Tight coupling | 8-16px |
| Moderate | 24-32px |
| Loose | 48-64px |
| Recovery (after heavy) | 64-80px |

### Max Components Per Viewport
| Type | Maximum |
|------|---------|
| Callouts (any) | 2 |
| Code Snippets | 2 |
| Decision structures | 1 |
| Heavy components total | 3 |

---

## 5. COMPONENT COMPATIBILITY MATRIX (from R5)

This is the definitive pairing guide from R5-COMBINATION-THEORY.md:

| | Info | Tip | Gotcha | Essence | Challenge | Code | FileTree | Matrix | Core | Task | Reasoning |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Info** | - | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Tip** | Yes | OK | OK | Yes | Yes | Yes | OK | OK | Yes | Yes | OK |
| **Gotcha** | Yes | OK | No | OK | No | Yes | OK | OK | OK | Yes | OK |
| **Essence** | OK | Yes | OK | No | Yes | Yes | OK | OK | Yes | OK | Yes |
| **Challenge** | Yes | Yes | No | Yes | No | Yes | OK | OK | Yes | Yes | OK |
| **Code** | Yes | Yes | Yes | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes |
| **FileTree** | Yes | OK | OK | OK | OK | Yes | No | Yes | Yes | Yes | Yes |
| **Matrix** | Yes | OK | OK | OK | OK | Yes | Yes | No | Yes | Yes | Yes |
| **Core** | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes |
| **Task** | Yes | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes | OK | Yes |
| **Reasoning** | Yes | OK | OK | Yes | OK | Yes | Yes | Yes | Yes | Yes | No |

**Legend:** Yes = Excellent pairing | OK = Acceptable with buffer | No = Avoid consecutive

**Key patterns from the matrix:**
- Code Snippet is the universal connector (Yes/OK with everything)
- Self-adjacency (diagonal) is generally bad (No or OK for all same-type pairs)
- Gotcha and Challenge are incompatible adjacent (both No)
- Info Callout is the most compatible component overall
- Task Component is highly compatible with most components

---

## 6. WHAT "COMPONENT CHEMISTRY" MEANS CONCRETELY

"Component chemistry" is the R5 framework for understanding how components interact when placed together. It operates through multiple lenses:

### 6.1 Three Behavioral Properties (Velocity, Temperature, Weight)
Each component has measurable properties that govern combination rules. These are NOT decorative metadata -- they are the THREE dimensions that determine whether adjacent components create rhythm or monotony, harmony or jarring collision.

### 6.2 Family DNA Creates Natural Harmony (R5-H1)
Components in the same family (e.g., all Callouts) combine seamlessly because they share structural DNA: same zone structure, same spacing rhythm, same typography pattern. Color alone differentiates them semantically.

### 6.3 Functional Contrast Creates Perceived Harmony (R5-H2)
Paradoxically, HIGH-contrast pairings can feel harmonious when they fulfill complementary roles:
- Code Snippet + Essence = Philosophy explains code's "why"
- File Tree + Decision Matrix = Map -> Options pattern
- Task + Reasoning = Tasks emerge from reasoning

### 6.4 Setup-Payoff Arc (R5-S1)
Every section follows: Context -> Map -> Principle -> Demonstration -> Action -> Hazards. Components map to arc positions.

### 6.5 Moods and Voices (R5-R2, R5-R3)
Components have emotional valences (moods) and speaking registers (voices). Mood combinations create "editorial spreads" or jarring collisions depending on sequencing. Voice harmony requires transition between registers.

### 6.6 Nesting vs Stacking (R5-N1)
Components STACK vertically, never nest. Only two pre-composed composites exist: Core Abstraction (Essence + Code) and Reasoning (Question + Columns + Summary). Maximum effective depth: 1 level.

### 6.7 The Kinship Model (R5-R1)
- Siblings: Components sharing family DNA (Callouts, Technical family, Analytical family)
- Parent-Child: Composite containment (Core Abstraction -> Essence + Code)
- Cousins: Shared traits across families (Essence & Core Abstraction both use serif italic)

---

## 7. HOW THE 6 PLANNED CD EXPLORATIONS MAP TO COMPONENT COMBINATIONS

Based on the pipeline structure (DD had 6, OD had 6, AD had 6), CD should have 6 explorations. The handoff document (HANDOFF-AD-TO-CD.md) specifies the open questions that drive CD exploration design:

### Mapping OD-to-DD-to-AD Pairings into CD Explorations

The most natural CD exploration structure would test combinations across the validated pipeline:

| CD Exploration | Tests | Components Most Relevant | Key Question |
|---------------|-------|-------------------------|--------------|
| CD-001 | Z + Conversational + PULSE combinations | Q&A callouts, Code, Essence | Do velocity/temperature rules hold within Z-PULSE? |
| CD-002 | F + Narrative + CRESCENDO combinations | Essence->Core Abstraction->Code->Tip (teaching sequence) | Does setup-payoff arc ENHANCE or FIGHT the F-descent? |
| CD-003 | Bento + Task-Based + ISLANDS combinations | Task, Code, File Tree, Decision Matrix | Can bento cells contain component recipes without nesting violation? |
| CD-004 | Spiral + Confidence + GEOLOGICAL combinations | Essence (bedrock), Info (atmosphere), Reasoning | Does confidence stratification map to component weight? |
| CD-005 | Choreography + Spatial + WAVE combinations | All 11 (hub uses light, spokes use heavy) | Do hub/spoke transitions follow temperature flow? |
| CD-006 | Compound combinations (meta) | All 11 (multi-recipe page) | Does component chemistry at compound scale maintain 3-way equivalence? |

### Gate Finding for CD
**DD-F-013:** "Component density tolerance -- how much density variation can a single component absorb before it needs to split into multiple components." CD must answer this at the combination scale.

### Critical Constraints from AD
- **AD-F-024:** Compound is SEQUENTIAL, not simultaneous. Multiple axis patterns in one viewport = visual cacophony.
- **AD-F-025:** Transition grammar required between zones. 5x5 matrix classifies all 20 pattern transitions into Smooth (4), Bridge (10), and Breathing (6).
- **AD-F-028:** Fractal is bounded at 5 scales. CD should verify these 5 hold, not seek a 6th.

---

## 8. COMBINATION RECIPES FROM R5

Six pre-defined component combination recipes await CD validation:

| Recipe | Use Case | Sequence |
|--------|----------|----------|
| Quick Reference | API docs, concise how-to | Info -> Code -> Tip |
| Deep Dive | Architectural explanation | Info -> Essence -> Core Abstraction -> Code -> Gotcha -> Task |
| Decision Guide | Technology choice | Info -> Decision Matrix -> Reasoning -> Task |
| Troubleshooting | Error resolution | Gotcha -> Decision Matrix -> Code -> Task -> Tip |
| Tutorial Section | Step-by-step learning | Info -> Task -> Code -> Tip -> Code -> Gotcha -> Challenge |
| Architecture Overview | System structure | File Tree -> Core Abstraction -> Decision Matrix -> Tip |

### Recommended Sequences from combination-rules.md

| Sequence | Purpose | Flow |
|----------|---------|------|
| Opening | Start of page | Hero (LOW density) -> Overview Callout -> Navigation/Map |
| Teaching | Explain a concept | Essence -> Core Abstraction -> Code -> Tip |
| Decision | Help user choose | Decision Matrix -> Reasoning -> Gotcha |
| Closing | End of page | Challenge -> Task -> Essence |

---

## 9. OPEN QUESTIONS CD MUST ANSWER

From HANDOFF-AD-TO-CD.md:

1. **Combination density tolerance:** When two axis patterns combine (e.g., Z + Bento), does the combined component absorb both density patterns or require splitting?
2. **Transition grammar scaling:** AD-F-025 validated grammar within a single compound page. Does it hold between separate combined pages?
3. **Attention topology at combination scale:** AD-F-023 described attention topology for individual patterns. How do attention topologies COMPOSE?
4. **Sequential vs parallel combinations:** AD-F-024 showed compound is sequential. Are there genuinely parallel combination patterns?
5. **Fractal at combination scale:** DD-F-006 confirmed at 5 scales. Does combination create a 6th (meta-combination) or is 5 the hard limit?

### Additional CD Questions from R5:

6. Do the 4 combination rules (velocity, temperature, weight, spacing) hold under all axis-density pairings?
7. Does the component compatibility matrix change depending on which organizational pattern is active?
8. Can component recipes be composed (Recipe 1 inside Recipe 3) without violating the stacking-not-nesting principle?
9. What NEW anti-patterns emerge from combination that don't exist in isolation?

---

## 10. SOUL COMPLIANCE REQUIREMENTS FOR CD

5 soul pieces remain LOCKED (no 6th was discovered -- AD-F-028 confirms):

| # | Soul Piece | Implementation | CD Must |
|---|-----------|---------------|---------|
| 1 | Sharp Edges | `border-radius: 0` everywhere | Maintain 0 violations |
| 2 | No Shadows | `box-shadow: none` everywhere | Maintain 0 violations |
| 3 | Font Trio | Instrument Serif + Inter + JetBrains Mono | Verify after `document.fonts.ready` |
| 4 | No Drop Shadow | No `filter: drop-shadow()` | Maintain 0 violations |
| 5 | Muted Earth Palette | Warm cream, locked accent colors | 0 off-palette colors |

Plus the binary rules discovered during OD/AD:
- opacity === 1.0 on all visual elements (no rgba with alpha < 1.0)
- 3px minimum structural borders (avoid 2px epidemic)
- AD convention spec sections 1-16 inherited as baseline

---

## 11. PROVENANCE REQUIREMENTS

CD must:
1. Read R-5 (39 findings) as PRIMARY research
2. Commission EXT-CD-* bespoke research for combination-specific topics
3. Create provenance INCREMENTALLY during build (not after)
4. Inherit AD-CONVENTION-SPEC sections 1-16, add sections 17-20 for CD-specific rules
5. Produce CD-F-### findings following the established format
6. Update ACCUMULATED-IDENTITY to v3

---

*Research complete. 2026-02-11.*
