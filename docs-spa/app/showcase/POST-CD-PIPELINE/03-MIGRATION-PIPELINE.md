<!--
===============================================================================
INLINE THREADING HEADER
File: docs-spa/app/showcase/POST-CD-PIPELINE/03-MIGRATION-PIPELINE.md
Tier: B | Generated: 2026-02-11 | Updated: 2026-02-13

1. WHY THIS EXISTS
The per-page migration pipeline specification. Describes TWO distinct execution
tracks (assembly vs composition) with concrete step-by-step walkthroughs showing
what agents do at each phase, what decisions require judgment, and how the
tension-composition and perceptual-auditing skills integrate into the process.

3. STATUS
ACTIVE -- Updated to reflect two-track reality (Track 1: assembly, Track 2: composition)

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| tension-composition/SKILL.md            | Phase 3 driver for Track 2 pages       |
| perceptual-auditing/SKILL.md           | Phase 5 driver for all pages           |
| R5-COMBINATION-THEORY.md               | Phase 3 mechanical rules (Track 1)     |
| ACCUMULATED-IDENTITY-v3.md             | Classification engine for Phase 1      |
| AD-F-023, AD-F-024, AD-F-025           | Axis patterns + transition grammar     |
| OD-F-005                               | Organization IS Density identity       |
| Skill enrichment research (11 files)    | Perceptual guardrails                 |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Migration execution spec (future)       | Primary source for agent instructions  |
| Phase F pilot migration                 | Execution test                         |
| Phase H+I full migration                | Production execution                   |

===============================================================================
END INLINE THREADING HEADER
===============================================================================
-->

# 03: The Per-Page Migration Pipeline
## How Content Becomes Design Through Two Fundamentally Different Tracks

---

## Overview

Migration is not a conveyor belt. It is a **discovery pipeline** where each page encounters the design system's accumulated intelligence, and the encounter produces both a migrated page and new knowledge. The pipeline has **six phases per page**, but those phases operate in **two fundamentally different ways** depending on whether the page needs **assembly** (Track 1) or **composition** (Track 2).

**The critical innovation:** Some content can be **fulfilled by selecting and placing existing components** (Track 1). Other content requires **genuine transformation through metaphor** (Track 2). The pipeline classifies which track a page needs, then executes the appropriate process. Same six phase names, completely different cognitive demands.

**The six phases:**

```
Phase 1: PAGE ANALYSIS ---------> "What IS this content?"
Phase 2: PATTERN SELECTION -----> "Which patterns fit?"
Phase 3: COMPOSITION DESIGN ----> "How do the pieces combine?"
Phase 4: BUILD -----------------> "Construct the page"
Phase 5: PERCEPTUAL AUDIT ------> "Does it look and feel right?"
Phase 6: DISCOVERY DOCS --------> "What was learned?"
```

Each phase has one input from the preceding phase and one output consumed by the next. The pipeline is sequential within a page but parallelizable across pages (for Track 1). The critical innovation is Phase 3 -- for Track 2 pages, this phase invokes the **tension-composition skill**, transforming composition design from mechanical rule application into creative metaphor derivation.

---

## The Two Tracks

Before walking through the pipeline, understand the fundamental distinction:

### Track 1: Assembly (45-90 minutes per page)

**When to use:** The **Addition Test** passes -- existing design system components can fulfill the reader's needs without transformation.

**Example:** A tutorial page "Setting Up Authentication" with 8 steps, code blocks, and a troubleshooting section. The reader needs to **DO** something (install, configure, test). The system provides Task components, Code Snippets, Q&A pairs. Addition works: Task + Code + Q&A = fulfilled reader need.

**What happens:**
- Phase 3 (Composition Design): **Mechanical component selection** from Tier 2 library
- Apply velocity/temperature/weight rules
- Verify transition grammar
- Generate composition blueprint in ~18 minutes

**Characteristics:**
- 60% deterministic (classification, lookups, rule application)
- 40% judgment (climax position, spacing values)
- Components **consumed** from library, not invented
- Soul compliance **automatic** (tokens bake it in)
- **Parallelizable** (6 agents can process 6 pages simultaneously)

### Track 2: Composition (3-5 hours per page)

**When to use:** The **Addition Test** fails -- reader needs cannot be met by selecting and placing existing components. Transformation required.

**Example:** A philosophical page "Boris Cherny on TypeScript" with warmth/mentorship tone but deep austere concepts. The reader needs to **FEEL** safe while exploring difficult ideas. The system provides sharp edges (`border-radius: 0`), flat surfaces (`box-shadow: none`), restrained palette. Addition fails: warm feeling ≠ sum of austere components. **Metaphor required.**

**What happens:**
- Phase 3 (Composition Design): **Invoke tension-composition skill** (~150 minutes)
  - Multi-axis questioning (FEEL, UNDERSTAND, DO, BECOME + conditionals)
  - Tension derivation (warmth vs. austerity → genuine tension)
  - Metaphor collapse (geological strata → concentric layers with earth-tone backgrounds)
  - Compositional layout generation (border-weight gradient, padding compression)
- Generate Tier 3 fresh using metaphor mechanisms

**Characteristics:**
- 20% deterministic (classification, lookups)
- 80% creative (metaphor derivation is irreducibly creative)
- Components **consumed** from library (Tier 2) + **invented** fresh (Tier 3)
- Soul compliance **manual verification** required for Tier 3
- **NOT parallelizable** (creative capacity is bottleneck, max 2-3 concurrent)

---

## The Content Classification Table

Content classification is the single most important decision. It determines track assignment and everything downstream. This table maps directly to the design system's validated organizational patterns:

| Content Type | Reader's Question | Organization | Density | Axis | Track Likelihood |
|---|---|---|---|---|---|
| "How do I do X?" (steps) | Task-Based (OD-003) | ISLANDS + BOOKENDS | Bento Grid | F-Pattern | Track 1 (assembly) |
| "How does X work?" (progressive) | Narrative (OD-002) | CRESCENDO | F-Pattern | F-Pattern | Track 1 (assembly) |
| "What is X?" (Q&A) | Conversational (OD-001) | PULSE + TIDAL | Z-Pattern | Z-Pattern | Track 1 (assembly) |
| "Should I use X?" (evaluation) | Confidence-Based (OD-004) | GEOLOGICAL | Spiral | Spiral | **Track 2 candidate** |
| "What's available?" (map) | Spatial (OD-005) | WAVE + ISLANDS | Choreography | Hub-Spoke | Track 1 (assembly) |
| Multiple of the above | Creative/Emergent (OD-006) | ALL (FRACTAL) | Compound | Compound | **Track 2 candidate** |
| Philosophy + Technique | Conceptual | GEOLOGICAL | Spiral/Descent | Variable | **Track 2 likely** |

**The 3-way equivalence (AD-F-023):** Axis IS organization IS density IS **attention topology**. You are choosing one thing expressed through three lenses.

---

## Track 1 Walkthrough: "Setting Up Authentication"

What follows is a complete trace of a Track 1 page through all six phases. This is the **assembly path** -- mechanical component selection, no metaphor derivation.

---

### Phase 1: Page Analysis -- "What IS This Content?"

**Duration:** ~12 minutes
**Skill invocations:** NONE

**Purpose:** Before selecting any pattern, understand the page as a reader encounters it. Read the content -- not the HTML structure, not the CSS -- but what the content IS and what job it does for the reader.

**Inputs:**
- The existing page content (source HTML/MDX/markdown)
- ACCUMULATED-IDENTITY-v3 (the reasoning substrate)

**Process:** Five dimensions of analysis.

#### 1. Content Type Classification

The agent reads "Setting Up Authentication" and asks: what is this page's job?

The page contains step-by-step instructions for configuring authentication. It walks the reader through installing dependencies, creating configuration files, setting up providers, generating tokens, testing the flow, deploying, monitoring, and troubleshooting.

- **Primary classification:** Tutorial -- "How do I do X?"
- **Secondary signal:** The page has a troubleshooting FAQ at the end with 4 Q&A pairs
- **Classification verdict:** **HYBRID** -- primarily Task-Based tutorial with a Conversational tail

Classification is NOT a guess. It is deterministic from the accumulated identity. Tutorial maps to task-based organization (OD established this). The hybrid tail maps to the transition grammar from AD, which handles mode shifts between organizational patterns.

#### 2. Density Profile

The agent charts the page's information density as it currently exists:

- **Steps 1-2** (install, configure): Low density. Short prose, one code block each.
- **Steps 3-4** (providers, middleware): Medium density. More code, some explanation.
- **Step 5** (token generation): HIGH density. Longest code block, most complex logic, multiple configuration options. This is the **climax** -- the pivotal moment where the authentication token is first generated.
- **Steps 6-8** (test, deploy, monitor): Density tapers off. Shorter code blocks, more prose.
- **Troubleshooting section**: Alternating rhythm. Dense question, sparse answer, dense question, sparse answer.

**Key insight:** The content has a natural CRESCENDO shape with a PULSE tail.

#### 3. Component Inventory

What does the page currently contain?

- 8 numbered steps (discrete procedures)
- 3 substantial code blocks (steps 3, 5, and 6)
- 5 shorter code snippets (inline examples)
- 1 important callout (security note before step 5)
- 1 troubleshooting section with 4 Q&A pairs
- Prose-to-component ratio: approximately 60/40

#### 4. Reading Flow Analysis

How does the reader's eye move through the page?

- Natural F-pattern: the reader scans step numbers on the left, reads detail to the right, then descends
- The troubleshooting section shifts to Z-pattern (question on left, answer sweeps right)
- Linear top-to-bottom flow -- steps cannot be reordered without losing meaning (steps 1-4 are prerequisites for step 5)

#### 5. Page Character Assessment

What personality does this page have?

- **PEDAGOGICAL** (teaching a skill)
- **OPERATIONAL** (practical, not theoretical)
- Mood after reading: the reader should feel **competent and confident** -- "I set this up, it works, I know what to do if it breaks"

**Apply Addition Test (Track Classification):**

> "Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?"

Reader needs:
- UNDERSTAND: how authentication flow works (progressive steps)
- DO: configure the system (discrete actions)
- FEEL: competent after completion (achievable through clear structure)

System provides:
- Task components (step-by-step structure)
- Code Snippets (copy-paste ready)
- Q&A pairs (troubleshooting structure)
- Info/Tip callouts (guidance)

**Addition works:** Task + Code + Q&A = fulfilled reader need. No transformation required.

**Answer to Addition Test:** YES → **TRACK 1** (assembly)

**Output:** Page Analysis Card

```
PAGE ANALYSIS CARD: Setting Up Authentication
----------------------------------------------
Type:       HYBRID — Tutorial (primary) + Q&A (tail)
Density:    CRESCENDO with PULSE tail
Climax:     Step 5 (token generation)
Components: 8 steps, 8 code blocks, 1 callout, 4 Q&As
Flow:       F-Pattern (tutorial) → Z-Pattern (troubleshooting)
Character:  Pedagogical + Operational
Reader Mood: Competent, confident

TRACK CLASSIFICATION: TRACK 1 (assembly)
- Addition Test: YES (components fulfill needs)
- No genuine tension identified
```

---

### Phase 2: Pattern Selection -- "Which Patterns Fit?"

**Duration:** ~8 minutes
**Skill invocations:** NONE

**Purpose:** Map the Page Analysis Card to the design system's validated vocabulary.

**Inputs:**
- Page Analysis Card (from Phase 1)
- Pattern selection framework (PATTERN-INDEX.md)
- ACCUMULATED-IDENTITY-v3

**The selection process is approximately 60% deterministic and 40% judgment-based.** The macro structure locks in automatically from classification. The micro decisions require editorial reasoning.

#### Deterministic Selections (Binary -- No Judgment Required)

These follow directly from the classification:

| Decision | Selection | Why |
|---|---|---|
| Tutorial → density pattern | CRESCENDO | Content builds toward climax. Sparse-to-dense is exposition-to-climax. This is an identity relationship (OD-F-005). |
| Tutorial → axis layout | F-Pattern | Eye descends left spine (step numbers), scans right into code and detail. Typography compression IS CRESCENDO (AD-F-007). |
| Q&A tail → density pattern | PULSE | Alternating dense/sparse Q&A pairs IS inhale/exhale rhythm. |
| Q&A tail → axis layout | Z-Pattern | Each Q&A pair IS one Z-sweep beat. |
| Fractal self-similarity | MANDATORY at 5 scales | DD-F-006. Non-negotiable on every page. |
| Soul compliance | 5 binary checks | border-radius: 0, box-shadow: none, correct fonts, callout DNA, no filter: drop-shadow(). |

Because this is a hybrid page, the overall axis pattern is **Compound** (AD-F-024): sequential axis cycling through scroll. The tutorial section uses F-Pattern. The troubleshooting section uses Z-Pattern. Each viewport-sized section commits to ONE pattern.

The transition between tutorial and troubleshooting requires the **transition grammar** (AD-F-025). F-Pattern to Z-Pattern is classified as a **Bridge transition** -- it needs an intermediary element or significant whitespace.

#### Judgment-Based Selections (Require Reasoning)

**WHERE does CRESCENDO peak?**
The agent reads the content and determines that Step 5 (token generation) is the climax. This is not arbitrary -- it is the step with the most complexity, the longest code block, and the pivotal action (the first time the auth token exists). The CRESCENDO peaks here.

**HOW does the CRESCENDO-to-PULSE transition work?**
The transition grammar says a bridge is needed between F-Pattern and Z-Pattern. The agent decides: a **64px recovery zone** after the final tutorial step creates the visual signal that the tutorial is done and something structurally different is coming. 48px would feel too abrupt -- the reader needs a breath after the tutorial's resolution before entering Q&A rhythm.

**SHOULD there be an Essence Callout?**
The agent reads Step 5 and identifies a key insight about how JWT tokens relate to session management. This is wisdom-level content -- it deserves serif italic treatment (Soul Piece #2: Archivist Serif). The Essence Callout goes immediately after Step 5 as a recovery breath between climax and falling action.

**Output:** Pattern Selection Record

```
PATTERN SELECTION RECORD: Setting Up Authentication
-----------------------------------------------------
SECTION 1 — Tutorial (Steps 1-8)
  Organization: Task-Based → Narrative hybrid
  Density:      CRESCENDO (peak at Step 5)
  Axis:         F-Pattern
  Fractal:      5 scales mandatory

SECTION 2 — Troubleshooting (4 Q&As)
  Organization: Conversational
  Density:      PULSE
  Axis:         Z-Pattern

TRANSITION: F-Pattern → Z-Pattern
  Type: Bridge (AD-F-025)
  Treatment: 64px recovery zone + visual divider

SPECIAL: Essence Callout after Step 5 (serif, wisdom content)
```

---

### Phase 3: Composition Design -- "How Do the Pieces Combine?"

**Duration:** ~18 minutes
**Skill invocations:** NONE (Track 1 uses mechanical rules, not tension-composition skill)

**Purpose:** Before building anything, design the page's spatial choreography using **mechanical component selection** and **combination rules**.

**Inputs:**
- Pattern Selection Record (from Phase 2)
- R5-COMBINATION-THEORY (39 findings on combination)
- Combination rules (velocity, temperature, weight, spacing)

**Process:** The agent sketches the full page before writing any code, applying **deterministic rules** from R5.

#### The Four Combination Rules Applied

Every component in the design system has three measurable properties: velocity (how fast the reader processes it), temperature (emotional register), and weight (visual heaviness). The four rules prevent bad combinations:

1. **Velocity Rule:** Never stack same-velocity components. Code Snippet (SLOW) followed by Reasoning Component (SLOW) needs a FAST component between them (Tip Callout).

2. **Temperature Rule:** Flow warm to neutral to cold. Do not follow Tip (warm) directly with Gotcha (cold). Insert a neutral buffer.

3. **Weight Rule:** Intersperse heavy with light. Code Snippet (heavy) should not be followed by another Code Snippet without a light component between them.

4. **Spacing Rule:** Tight coupling (8-16px) for related components. Standard gaps (24-32px) between topics. Section breaks (48-64px) between major shifts. Recovery zones (64-80px) after dense clusters.

#### Perceptual Guardrails (MANDATORY -- Applied Track 1 AND Track 2)

Before any composition sketch, verify these non-negotiable minimums:

| Guardrail | Minimum | Optimal | Maximum | Prevents |
|-----------|---------|---------|---------|----------|
| **Content-to-viewport ratio** (1440px) | 44% (640px) | 65-80% (940-1150px) | 89% (1280px) | Narrow strip, edge-to-edge |
| **Content container width** (1440px) | 940px | 940-1150px | 1280px | Over-compression, wasted space |
| **Label-to-heading gap** | 16px | 16-20px | 24px | Label-heading collision |
| **Section vertical spacing** | 48px | 60-80px | 160px | Sections running together, dead zones |
| **Horizontal padding (desktop)** | 32px | 40-64px | 80px | Edge collision at 1440px |
| **Padding compression ratio** | 40% | 50-60% | 100% | Deepest section crushed (deepest ≥ 40% of shallowest) |
| **Body line-height** | 1.5 | 1.5-1.6 | 1.8 | Reading discomfort, collision |

**These floors are LOCKED for both tracks.** If composition logic demands values below floors, modify composition, NOT the floors.

#### The Spatial Sketch

Here is the composition the agent designs -- the full page from hero to footer:

```
┌──────────────────────────────────────────────────────────────┐
│  HERO                                                        │
│  Sparse. Generous 64-80px padding.                           │
│  Title + one-sentence orientation.                           │
│  "What you'll build and why it matters."                     │
│  Density: LOW                                                │
├──────────────────────────────────────────────────────────────┤
│                    48px gap                                   │
├──────────────────────────────────────────────────────────────┤
│  PREREQUISITES                                               │
│  Compact ISLANDS — each prereq a discrete bordered           │
│  block with 4px left accent. 3 items in tight grid.          │
│  Density: LOW-MEDIUM                                         │
├──────────────────────────────────────────────────────────────┤
│                    48px gap                                   │
├──────────────────────────────────────────────────────────────┤
│  STEPS 1-2 (Install, Configure)                              │
│  Building density. Short prose + small code blocks.          │
│  Spacing between steps: 48px (room to breathe early).        │
│  F-Pattern: step label left, code right.                     │
│  Density: MEDIUM-LOW                                         │
├──────────────────────────────────────────────────────────────┤
│                    40px gap                                   │
├──────────────────────────────────────────────────────────────┤
│  STEPS 3-4 (Providers, Middleware)                           │
│  Density compresses. More code. Tighter spacing.             │
│  Spacing between steps: 40px → 32px.                         │
│  Code blocks grow. Explanations tighten.                     │
│  Density: MEDIUM                                             │
├──────────────────────────────────────────────────────────────┤
│                    32px gap                                   │
├──────────────────────────────────────────────────────────────┤
│  STEP 5 — CLIMAX (Token Generation)                          │
│  DENSEST section. Tightest spacing (24px internal).          │
│  Largest code block spans full width.                        │
│  4px left accent border (Sanrok red #E83025).                │
│  Multiple sub-steps tightly coupled (8-16px).                │
│  Density: HIGH (CRESCENDO peak)                              │
├──────────────────────────────────────────────────────────────┤
│                    32px gap                                   │
├──────────────────────────────────────────────────────────────┤
│  ESSENCE CALLOUT                                             │
│  Serif italic (Instrument Serif). Set apart.                 │
│  "The token is not just authentication — it is the           │
│   contract between client trust and server truth."           │
│  Recovery breath after climax.                               │
│  Density: LOW (deliberate decompression)                     │
├──────────────────────────────────────────────────────────────┤
│                    40px gap                                   │
├──────────────────────────────────────────────────────────────┤
│  STEPS 6-8 (Test, Deploy, Monitor)                           │
│  Exhale. Spacing reopens: 24px → 40px → 48px.               │
│  Code blocks shrink. Prose increases.                        │
│  Resolution — the system works, confidence returns.          │
│  Density: MEDIUM → LOW (falling action)                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│               64px BRIDGE ZONE                               │
│  Visual signal: tutorial is done.                            │
│  Something structurally different follows.                   │
│  Subtle horizontal rule or whitespace.                       │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  TROUBLESHOOTING — PULSE RHYTHM                              │
│                                                              │
│  Q1: Dense question (Gotcha-style, problem statement)        │
│  A1: Sparse answer (code fix + explanation)                  │
│      24px gap                                                │
│  Q2: Dense question                                          │
│  A2: Sparse answer                                           │
│      24px gap                                                │
│  Q3: Dense question                                          │
│  A3: Sparse answer                                           │
│      24px gap                                                │
│  Q4: Dense question                                          │
│  A4: Sparse answer                                           │
│                                                              │
│  Z-Pattern: question on left, answer sweeps right.           │
│  Each Q/A pair = one PULSE beat.                             │
│  Density: alternating HIGH/LOW                               │
├──────────────────────────────────────────────────────────────┤
│                    64-80px gap                                │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  Recovery zone. Sparse. Links to next tutorial.              │
│  64-80px padding. Minimal elements.                          │
│  Density: LOW                                                │
└──────────────────────────────────────────────────────────────┘
```

#### Anti-Pattern Checks

Before proceeding to build, the agent scans the composition for known anti-patterns:

| Anti-Pattern | Present? | Resolution |
|---|---|---|
| Callout Cacophony (>2 consecutive callouts) | NO | Only 1 Essence Callout in the entire page |
| Code Wall (consecutive code blocks without commentary) | Risk at Step 5 | Insert brief prose between sub-step code snippets |
| Decision Paralysis (multiple reasoning without resolution) | NO | Single clear path through tutorial |
| Temperature Whiplash (warm→cold→warm oscillation) | NO | Smooth warm→neutral→cold flow from tips to code to gotchas |
| Missing Context Start (section opens with code) | NO | Every section opens with prose orientation |
| Anxiety Ending (section ends on Gotcha) | Risk in troubleshooting | Each Q/A ends with resolution (Tip), not problem |

#### Fractal Self-Similarity Verification

The composition must exhibit the same sparse/dense rhythm at all 5 scales:

1. **Navigation scale:** The page's table of contents reflects the CRESCENDO shape -- sparse prerequisites, building steps, dense climax section, thinning resolution, rhythmic troubleshooting.

2. **Page scale:** Sections alternate between sparse zones (hero, prerequisites, bridge, footer) and dense zones (steps 3-5, troubleshooting questions).

3. **Section scale:** Each step has sparse intro ("In this step you will...") followed by dense body (code + configuration) followed by sparse summary ("You now have...").

4. **Component scale:** Each callout has sparse label (10px uppercase: "IMPORTANT") and dense body (the actual content).

5. **Character scale:** Code blocks alternate dense logic with sparse comments. Serif headings (sparse, atmospheric) contrast with monospace code (dense, specific).

**Output:** Composition Blueprint (spatial sketch + anti-pattern checks + fractal verification + guardrail compliance proof)

---

### Phase 4: Build -- "Construct the Page"

**Duration:** ~28 minutes
**Skill invocations:** NONE

**Purpose:** Execute the Composition Blueprint. This is construction, not design -- the design is already done.

**Inputs:**
- Composition Blueprint (from Phase 3)
- Component library (extracted Tier 1+2 CSS ~400 lines)
- Soul token system (CSS custom properties)
- The existing page content

**What Build IS:**

Build is composing from the component library. The agent is NOT writing CSS from scratch. Every component in the library already has soul tokens baked in -- `border-radius: 0`, `box-shadow: none`, correct font families, correct color palette. The agent assembles components in the sequence dictated by the Composition Blueprint.

**What Build IS NOT:**

Build is not restyling the existing page. The agent does not look at the current HTML and add KortAI classes. Instead, the agent takes the CONTENT (the meaning, the text, the code examples) and re-expresses it through the design system's visual language. The printing press does not restyle the manuscript -- it sets it in type.

**Key build actions for "Setting Up Authentication":**

- Hero section: composed from the Hero component with sparse density preset, 64px vertical padding (LOADED FROM LIBRARY)
- Prerequisites: composed from Island components in a tight grid layout (LOADED FROM LIBRARY)
- Steps 1-8: composed from Task Components with progressive spacing compression (48px → 40px → 32px → 24px at climax → 40px → 48px exhale) (LOADED FROM LIBRARY)
- Code blocks: composed from Code Snippet components (dark background, sharp corners, copy button, JetBrains Mono) (LOADED FROM LIBRARY)
- Essence Callout: composed from the Essence Callout component (serif italic, warm accent border, recovery breathing) (LOADED FROM LIBRARY)
- Troubleshooting: composed from Q&A pair components in Z-Pattern layout (LOADED FROM LIBRARY)
- Bridge zone: 64px whitespace with optional subtle horizontal rule
- Typography: Instrument Serif for display headings, Inter for body, JetBrains Mono for code (LOCKED BY TOKENS)

**Component velocity/temperature/weight sequencing:**

The build follows the combination rules verified in Phase 3:
- No two SLOW components adjacent without a FAST buffer
- Temperature flows warm (Tip) → neutral (Info) → cold (Gotcha) without whiplash
- Heavy components (Code Snippet, Decision Matrix) interspersed with light (Info Callout, Tip)
- Spacing matches semantic proximity (tight 8-16px within a step, standard 24-32px between related steps, recovery 48-64px between major sections)

**Guardrail Verification:**

As each section is built, verify:
- Container width: 940px minimum ✓
- Horizontal padding: 32px minimum ✓
- Label-to-heading gap: 16px ✓
- Compression ratio: Deepest section (Step 5 at 32px padding) ≥ 40% of shallowest (Hero at 80px) → 32/80 = 40% ✓
- Body line-height: 1.5 ✓
- Section breathing: 48px minimum between major sections ✓

**Output:** The migrated page (HTML/TSX/MDX). Ready for perceptual audit.

---

### Phase 5: Perceptual Audit -- "Does It Look and Feel Right?"

**Duration:** ~12 minutes
**Skill invocations:** `/perceptual-auditing mode=standard`

**Purpose:** Verify the migrated page is not just technically compliant but perceptually correct. Technical compliance without perceptual quality is mechanical application.

**Inputs:**
- Migrated page (from Phase 4)
- Soul pieces (5 non-negotiable truths)
- ACCUMULATED-IDENTITY-v3 (what "right" feels like)
- Original page (for before/after comparison)

**The skill invocation:**

```
/perceptual-auditing mode=standard page=[path] viewports=1440,768
```

**What the skill does:**

1. **Cold Look Protocol** (MANDATORY -- sees page BEFORE reading source):
   - Gut reaction (5 seconds, no analysis)
   - Worst thing (first irritation)
   - Best thing (first delight)
   - Ship verdict (YES/NO/MAYBE)

2. **Tier 1 Questions (PA-01 through PA-05) -- MANDATORY:**
   - PA-01: What's the first thing that bothers you?
   - PA-02: Is any text uncomfortable to read?
   - PA-03: Does this feel like one designer made it, or three?
   - PA-04: Where does your eye go first? Is that where it SHOULD go?
   - PA-05: Would you put your name on this? What would you fix first?

3. **Tier 2 Questions (PA-06 through PA-28) -- Standard mode:**
   - Readability: vertical stacking, line tracking, squinting
   - Spatial: dead space, balance, margins, desktop utilization
   - Flow: section transitions, ending quality, scroll momentum
   - Grid: breathing columns, alignment, element density
   - Consistency: identical pairs, rhythm, repetition
   - Color: grays family, palette intruders

4. **7-Gate Protocol** (Binary checks):
   - Gate 1: Soul Compliance (border-radius, box-shadow, fonts, callout DNA)
   - Gate 2: Density Pattern Verification (CRESCENDO visible? PULSE visible?)
   - Gate 3: Axis Pattern Verification (F-Pattern works? Z-Pattern works?)
   - Gate 4: Combination Rule Verification (velocity, temperature, weight, spacing)
   - Gate 5: Bootstrap Test ("Could this exist in Bootstrap unmodified?" → Must be NO)
   - Gate 6: Squint Test (see dense/sparse blocks? sharp edges? confident?)
   - Gate 7: Before/After Assessment (lost anything? gained anything? better for reader?)

5. **Guardrail Quantitative Verification:**
   - Container width ≥ 940px? ✓
   - Padding ≥ 32px? ✓
   - Label gap ≥ 16px? ✓
   - Compression ratio ≥ 40%? ✓
   - Line-height ≥ 1.5? ✓
   - Section breathing ≥ 48px? ✓

**Output:** Audit Report with verdict + ranked concerns

**Example verdict for Track 1 page:**

```
AUDIT REPORT: Setting Up Authentication

COLD LOOK:
- Gut: Clean, confident, tutorial feels like it teaches
- Worst: Step 5 density is intentional but check for cramping at 768px
- Best: Progressive spacing creates perceptible build to climax
- Ship: YES

TIER 1 (PA-01 to PA-05): PASS (5/5)
TIER 2 (PA-06 to PA-28): PASS (23/23)
7-GATE PROTOCOL: PASS (7/7)
GUARDRAILS: PASS (8/8)

VERDICT: PASS → Proceed to Phase 6
```

**What Happens When Audit Fails:**

**Back to Phase 4, not Phase 1.**

The classification was right. The pattern selection was right. The composition design was right. The execution needs adjustment. The agent fixes the specific build issue flagged by the audit gate and re-audits.

This is a critical distinction. Classification errors are rare (the content type is usually obvious). Build errors are common (spacing off by 8px, a code block missing the copy button, a callout with rounded corners inherited from existing CSS). The pipeline sends failures back to the nearest fixable point, not the beginning.

If -- rarely -- the audit reveals that the pattern selection itself was wrong (e.g., the content turned out to be more Narrative than Task-Based once built), the agent goes back to Phase 2. But this is the exception. The classification table is robust because the content types are distinct.

---

### Phase 6: Discovery Documentation -- "What Was Learned?"

**Duration:** ~7 minutes
**Skill invocations:** NONE

**Purpose:** This phase is what makes migration compound rather than serial. Without it, each page is an isolated event. With it, each page teaches the next.

**Inputs:**
- All prior phases for this page
- Existing discoveries from previously migrated pages

**What gets recorded:**

The agent writes a Consumption Receipt documenting three things:

#### 1. Research Applied

What findings from the design system were used, where, and how?

| Finding ID | Where Applied | How |
|---|---|---|
| DD-F-006 | All 5 fractal scales | Verified self-similarity at navigation, page, section, component, character |
| OD-F-005 | Pattern selection | Organization IS Density used to derive CRESCENDO from tutorial classification |
| AD-F-007 | Tutorial section | F-Pattern vertical descent IS CRESCENDO compression |
| AD-F-025 | Bridge zone | F→Z transition classified as Bridge, 64px recovery applied |

#### 2. New Discoveries (Application Notes)

What was learned that could help future pages?

- "Progressive spacing compression (48→32→24) effective for tutorial CRESCENDO: spacing creates perceptible compression without feeling cramped"
- "CRESCENDO-to-PULSE transition needs at least 64px bridge. Tested 48px -- felt too abrupt. The reader needs a full breath after tutorial resolution before Q&A rhythm begins."
- "Essence Callout immediately after climax step is highly effective. The serif shift creates a cognitive pause that marks the transition from peak intensity to falling action. Consider this a repeatable recipe for tutorial pages."
- "Troubleshooting Q&A pairs work best with Gotcha-style question (problem framing) resolved by Tip-style answer (solution). Ending each pair on the resolution prevents anxiety accumulation."

#### 3. Process Notes

Did the pipeline itself need adjustment?

- "Phase 1 classification was immediate for this page -- 'How do I do X?' maps cleanly to Task-Based. No ambiguity."
- "Phase 2 pattern selection: 60% deterministic (instant), 40% judgment (5 min)"
- "Phase 3 composition: R5 rules caught SLOW-SLOW stacking before build (inserted prose between code blocks)"
- "Phase 4 build: Component library made soul compliance automatic -- zero violations"
- "Phase 5 audit: PASS on first audit, no iteration needed"

**These discoveries feed forward.** When page 15 enters the pipeline, the agent has access to all discoveries from pages 1-14. Page 15 benefits from 14 prior encounters between content and vocabulary. This is the compounding mechanism that makes later pages faster and higher quality than earlier pages.

**Output:**

```markdown
## CONSUMPTION RECEIPT: Setting Up Authentication

### Research Applied
| Finding ID | Where Applied | How |
|---|---|---|
| DD-F-006 | All 5 scales | Fractal self-similarity verified |
| OD-F-005 | Phase 2 | Organization IS Density identity |
| AD-F-007 | Tutorial body | F-Pattern IS CRESCENDO |
| AD-F-025 | Bridge zone | Transition grammar applied |

### New Discoveries
| ID | Discovery | Severity | Forward Impact |
|---|---|---|---|
| MIG-F-001 | 48→32→24 spacing compression effective for 3-step crescendo | M | Recipe for tutorial pages |
| MIG-F-002 | CRESCENDO→PULSE needs 64px+ bridge minimum | H | All hybrid pages with tutorial+Q&A |
| MIG-F-003 | Essence Callout after climax = recipe | M | Tutorial pages with pivotal moment |

### Pattern Notes
- CRESCENDO peak at Step 5/8 (62.5% through) felt natural
- PULSE Q&A pairs: Gotcha→Tip pairing prevents anxiety ending

### Process Notes
- Classification was unambiguous (tutorial = Task-Based, immediate)
- Phase 3 composition took 18 min (within estimate)
- Phase 5 audit: PASS on first attempt
```

---

## Track 2 Walkthrough: "Boris Cherny on TypeScript"

What follows is a complete trace of a Track 2 page through all six phases. This is the **composition path** -- metaphor derivation through the tension-composition skill.

---

### Phase 1: Page Analysis + Tension Pre-Screen -- "What IS This Content?"

**Duration:** ~18 minutes (Track 1 analysis + 6 min tension pre-screen)
**Skill invocations:** NONE (tension pre-screen uses Addition Test, not full skill)

**Purpose:** Same as Track 1, PLUS identify whether genuine tension exists.

**Inputs:**
- The existing page content
- ACCUMULATED-IDENTITY-v3

**Process:** Same 5-dimensional analysis as Track 1, PLUS tension pre-screen.

#### 1-5. Standard Analysis (Same as Track 1)

**Content Type:** CONCEPTUAL (philosophy + technique, concentric layers)
**Density Profile:** GEOLOGICAL (sparse intro, medium techniques, dense philosophy at core)
**Component Inventory:** 5 quotes, 8 principles, 3 anti-patterns, 2 code examples
**Reading Flow:** Descending inward (outer fundamentals → inner philosophy)
**Page Character:** Warm mentorship + Austere decisiveness

#### 6. Tension Pre-Screen (NEW for Track 2)

**Apply Addition Test:**

> "Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?"

Reader needs (from character assessment):
- **FEEL:** Warmth, safety, mentorship, graduated trust, invitation to explore
- **UNDERSTAND:** Layered certainty (fundamentals are bedrock, details are flexible)
- **BECOME:** A practitioner with taste, not just rote technique

System provides:
- Sharp edges (`border-radius: 0`) → authority, decisiveness
- Flat surfaces (`box-shadow: none`) → honesty, austerity
- Narrow palette → restrained, formal
- Sparse layouts → confident, editorial

**OPPOSITION IDENTIFIED:** Warmth (need) vs. Austerity (system)

**Answer to Addition Test:** NO
- Existing components (Task, Info Callout, Code Snippet) provide STRUCTURE
- But they do NOT provide the FEELING of warmth/safety the reader needs
- Transformation required: metaphor that resolves warm/austere opposition

**Apply BECAUSE Test:**

> "The reader needs X BECAUSE [specific content property]"

"The reader needs warmth and safety BECAUSE the content is philosophical and mentorship-oriented, teaching austere concepts through a warm pedagogical voice."

Sentence completes with specific content property → **PASS**

**Richness Estimate (Phase 1 quick assessment):**
- Opposition depth: emotional (warmth vs. cold) + tactile (soft vs. hard) + visual (inviting vs. stark) → HIGH
- Likely richness: 12-18 (genuine tension candidate)

**Verdict:** **TRACK 2** (composition required)

**Output:** Page Analysis Card + Tension Pre-Screen

```
PAGE ANALYSIS CARD: Boris Cherny on TypeScript
-----------------------------------------------
Type:       CONCEPTUAL (philosophy + technique)
Density:    GEOLOGICAL (descending depth)
Climax:     Core philosophical insights
Components: 5 quotes, 8 principles, 3 anti-patterns, 2 code examples
Flow:       Descending inward (outer→inner layers)
Character:  Warm mentorship + Austere decisiveness

TENSION PRE-SCREEN:
- FEEL tension: Warmth/safety vs. sharp/austere → GENUINE
- Addition Test: NO (transformation required)
- BECAUSE test: PASS (content-driven need)
- Estimated richness: 12-18
- Track classification: TRACK 2 (composition)
```

---

### Phase 2: Pattern Selection (Partial) -- "Which Patterns Fit?"

**Duration:** ~12 minutes
**Skill invocations:** NONE

**Purpose:** Same as Track 1 for DETERMINISTIC parts, but DEFER axis selection to Phase 3 (metaphor-dependent).

**Inputs:**
- Page Analysis Card + Tension Pre-Screen (from Phase 1)
- Pattern selection framework

**Process:**

#### Deterministic Selections

| Decision | Selection | Why |
|---|---|---|
| Conceptual → density | GEOLOGICAL | Content descends from surface to depth |
| Geological → organization | CONFIDENCE-BASED | OD-F-005 identity relationship |

#### DEFERRED Selection

| Decision | Reason |
|---|---|
| Axis pattern | **DEFERRED TO PHASE 3** -- depends on metaphor |

**Why defer?** For Track 2 pages, the metaphor determines the axis. If the metaphor is "geological stratification" with horizontal layers, the axis is F-Pattern descent. If the metaphor is "concentric archive vault" with radial structure, the axis is Spiral. The metaphor collapse (Phase 3) must happen before axis can be determined.

**Output:** Pattern Selection Record + Tension Table (for Phase 3 skill invocation)

```
PATTERN SELECTION RECORD: Boris Cherny on TypeScript
-----------------------------------------------------
Deterministic: GEOLOGICAL + CONFIDENCE-BASED
Axis: TBD (depends on metaphor from tension-composition)

TRACK 2 FLAG:
- Genuine tension identified: Warmth vs. Austerity
- Tension-composition skill WILL BE INVOKED in Phase 3
- Pattern selection INCOMPLETE until metaphor derived

TENSION TABLE (for Phase 3 input):
| Axis | Reader Need (Side A) | System Constraint (Side B) | Opposition Type |
|------|---------------------|---------------------------|-----------------|
| FEEL | Warmth, safety, containment, graduated trust | Angularity, flatness, austerity, sharp edges | Semantic (warm vs. cold) |
| UNDERSTAND | Layered certainty (bedrock vs. flexible) | Stratification (layers), discrete weight | Structural overlap |
| BECOME | Practitioner with taste | Progressive maturity | Medium yield |
```

---

### Phase 3: Composition Design -- TENSION-COMPOSITION PIPELINE

**Duration:** ~150 minutes (2.5 hours) -- THE BOTTLENECK
**Skill invocations:** `/tension-composition` OR inline execution

**Purpose:** Derive compositional layout from genuine tension between reader needs and system constraints through **metaphor**.

**Inputs:**
- Pattern Selection Record + Tension Table (from Phase 2)
- Content (from Phase 1)

**THE CRITICAL MOMENT:** For Track 2 pages, Phase 3 is NOT mechanical component selection. It is **full invocation of the tension-composition skill**.

**The skill invocation:**

```
/tension-composition content=[path] tension_table=[from Phase 2]
```

**OR (if agents cannot invoke skills mid-pipeline):**

```
Read("~/.claude/skills/tension-composition/SKILL.md")
# Agent executes Phases 0-5 inline following skill protocol
```

**What the skill does (6-phase pipeline within the pipeline):**

#### Skill Phase 0: Content Assessment (~5 min)

- Content type: Prose-dominant (<30% code) → STANDARD path
- Scope: ~2,000 words → STANDARD (full pipeline)
- Sections: 3 natural sections (Fundamentals, Techniques, Philosophy) → All NARRATIVE

#### Skill Phase 1: Multi-Axis Questioning (~25 min)

**Core Four (always run):**

**FEEL:**
- "What does the reader need to FEEL?"
- Needs: Warmth, safety, mentorship, graduated trust, invitation to explore
- Structural properties: Containment (bounded zones), Ordering (sequence with rank), Progressive density
- **Richness: HIGH** (deep emotional opposition to system's austerity)

**UNDERSTAND:**
- "What relationships does the reader need to understand?"
- Needs: Layered certainty (fundamentals are bedrock, details are flexible)
- Structural properties: Stratification (parallel layers of different confidence)
- **Richness: HIGH** (structural depth)

**DO:**
- "What does the reader need to DO?"
- Needs: Apply techniques, avoid anti-patterns
- Structural properties: Discrete actions, binary choices
- **Richness: LOW** (system already provides Task components)

**BECOME:**
- "What does the reader need to BECOME?"
- Needs: A practitioner with taste, not just rote technique
- Structural properties: Identity transformation, progressive maturity
- **Richness: MEDIUM** (philosophical depth)

**Extended Core (conditional):**
- NAVIGATE: LOW YIELD (content is linear descent)
- TRUST: MEDIUM (Boris's authority needs establishing)
- EVALUATE: LOW (single-path teaching)
- ORIENT: LOW (standalone content)
- RECONCILE: MEDIUM (challenging common practices)

**Structural Triggers:** None fire (no comparison, identification, discovery, visual, memory needs)

**Phase 1 Output:** 4 high-yield axes (FEEL, UNDERSTAND, BECOME, RECONCILE)

#### Skill Phase 2: Tension Derivation (~30 min)

**For each high-yield axis, derive tension:**

**AXIS: FEEL**
- **Side A (Reader Needs):** Warmth, safety, containment, graduated trust
- **Side B (System Constraints):** Angularity (`border-radius: 0`), Flatness (`box-shadow: none`), Austerity (restrained palette), Decisiveness (sharp edges)
- **Opposition:** Warmth vs. Austerity -- SEMANTIC OPPOSITION
- **Vocabulary Gap:** System has no "warm" component. Callouts are neutral/clinical.
- **Structural Overlap:** BOTH sides share: Containment (borders), Ordering (sequence), Stratification (layers)

**Apply Addition Test:**
- Can warmth be achieved by placing existing components? → NO
- Transformation required? → YES (metaphor needed)
- **Verdict:** GENUINE TENSION

**Apply BECAUSE Test:**
- "The reader needs warmth BECAUSE the content is philosophical and mentorship-oriented."
- Sentence completes with specific content property → PASS

**Richness Formula:**
- Opposition Depth: 3 layers (emotional, tactile, visual) → HIGH (3)
- Structural Overlap: 3 shared properties (containment, ordering, stratification) → MEDIUM (2)
- Metaphor Space Width: 5+ candidates (geological, archival, craftsman, manuscript) → HIGH (3)
- **Richness = 3 × 2 × 3 = 18**

**TENSION SELECTED:** FEEL (warmth vs. austerity, richness 18)

**Phase 2 Output:** FEEL tension with richness 18

#### Skill Phase 3: Metaphor Collapse (~45 min) -- THE CREATIVE STEP

**Step 3.1: Extract Structural Properties from Side A (Reader Needs):**
- Graduated trust → ORDERING (sequence with rank)
- Containment with boundaries → BOUNDED ZONES
- Progressive density → STRATIFICATION (layers of different density)
- Safety in uncertainty → REASSURING GEOMETRY

**Step 3.2: Extract Structural Properties from Side B (System Constraints):**
- `border-radius: 0` → ANGULARITY (straight lines only)
- `box-shadow: none` → FLATNESS (no depth illusion)
- Border categories (1px/3px/4px) → DISCRETE WEIGHT
- Narrow palette → NARROW TEMPERATURE RANGE

**Step 3.3: Find Structural Overlap:**
- ORDERING (both)
- STRATIFICATION (both)
- CONTAINMENT (both)
- DISCRETE WEIGHT (both)
- **Overlap: 4/8 = 50%** → IDEAL ZONE (strong metaphor potential)

**Step 3.4: Generate Search Query:**
> "What real-world domain naturally exhibits LAYERED ORDERING and CONTAINED STRATA and DISCRETE WEIGHT GRADIENTS, while being ANGULAR and FLAT, yet conveying SAFETY and WARMTH?"

**Apply Search Heuristics:**

1. **Constraint scan (hardest first):** ANGULARITY eliminates organic/biological, liquid, atmospheric
2. **Content resonance:** Content literally uses words like "foundations," "layers," "depth" → geological vocabulary
3. **Emotional valence:** Warmth/safety → positive valence → eliminates military, judicial

**Domain Search Menu Scan:**
- Geological/Sedimentary: Angular (rock strata), layered, ordered, compressed → COMPATIBLE
- Architectural: Angular, precise, but less "warm" → POSSIBLE
- Archival: Ordered, preserved, but cooler tone → POSSIBLE
- Manuscript/Codex: Warm (handwritten), but requires curves → INCOMPATIBLE

**Candidates:**
1. Geological Strata (sedimentary layers)
2. Archival Vault (clearance levels)
3. Craftsman Workbench (tools, technique)

**Step 3.5: Test Candidates (Composite Scoring):**

**CANDIDATE 1: Geological Strata**

**A. Tension Resolution:**
- Warmth vs. Austerity: Resolves? → YES (geological layers feel REASSURING despite angular rock faces. "Bedrock" communicates safety.)
- **Score: 1/1**

**B. Structural Isomorphism Count:**
```
| Metaphor Property | Content Property | System Mechanism |
| Sedimentary layers | Confidence levels | Border-weight gradient (4px topsoil → 1px bedrock) |
| Depth compression | Progressive density | Padding compression (80px surface → 32px bedrock) |
| Stratigraphic order | Fundamental→Detail | Vertical DOM order + background darkening |
| Angular rock faces | Decisive language | `border-radius: 0` + sharp borders |
| Geological containment | Safe exploration | Bordered container with visible edges |
| Earth tone palette | Warmth | Sandstone (#F0EBE3), clay (#E8E4DF) backgrounds |
```
- **Isomorphism Count: 6** → Structurally isomorphic (≥4 required)

**C. Content Resonance:**
- C1 (Nominal): Content uses "foundations," "layers," "depth" → HIGH
- C2 (Structural): Content's layered certainty mirrors geological stratification → HIGH
- **Resonance: HIGH (structural weighted 2x)**

**D. Mechanism Feasibility:**
- All properties expressible via: background (earth tones), border (weight gradient), spacing (compression), typography (unchanged)
- No soul violations required
- **Feasibility: 100%**

**E. Perceptual Risk Assessment (R1 improvement):**
```
| Risk Question | Answer | Score |
| Transition model: state change or empty space? | State change (deeper stratum) | LOW (0) |
| Expression mode: structural or textual? | Structural (graduated backgrounds) | LOW (0) |
| Element variety: varied or uniform? | Varied (different sections, different depths) | LOW (0) |
| Responsive story: natural degradation? | Natural (narrower core sample) | LOW (0) |
```
- **Perceptual Risk: 0 (LOW)** → Proceed confidently

**F. Perceptual Cost Assessment (R3.5F improvement -- NEW):**

> "Does the metaphor's CONCEPT naturally encourage design choices that violate perceptual guardrails?"

- Cylindrical shape (core sample) → narrow container? RISK (940px minimum violation)
- Compression under pressure → extreme padding reduction? RISK (40% ratio floor violation)
- Explicit stratigraphic labels → over-labeling? MEDIUM RISK (implicit > explicit)
- **Perceptual Cost: 2.5** (acceptable -- addressable through expression modulation)
- **Mitigation:** Use internal padding variation, not narrow container. Implicit expression (graduated backgrounds) > explicit labels.

**Composite Verdict: PROCEED**
- Resolution: 1/1 ✓
- Isomorphism: 6 ✓
- Resonance: HIGH ✓
- Feasibility: 100% ✓
- Perceptual Risk: 0 (LOW) ✓
- Perceptual Cost: 2.5 (acceptable, mitigated) ✓

**WINNER: Geological Strata**

**Phase 3 Output:** Metaphor selection (Geological Strata) + Isomorphism table

#### Skill Phase 4: Compositional Layout Generation (~35 min)

**Step 4.0: PERCEPTUAL GUARDRAILS (NON-NEGOTIABLE -- ENFORCED FIRST)**

Before any CSS generation, verify the metaphor can be expressed within these floors:

| Guardrail | Floor | Metaphor Impact |
|-----------|-------|-----------------|
| Container width | 940px | Cylindrical core sample must be ≥940px (not narrow tube) |
| Padding floor | 32px | Deepest bedrock ≥ 32px |
| Compression ratio | 40% | Bedrock padding ≥ 40% of topsoil (topsoil 80px → bedrock ≥ 32px) |
| Label gap | 16px | Stratum headings ≥ 16px from content |
| Section breathing | 48px | Strata boundaries ≥ 48px |

**Metaphor passes all floors.** Proceed.

**Step 4.1: Extract Metaphor Properties (5-category taxonomy):**

**A. Spatial:** Horizontal layers (strata), vertical containment (core sample)
**B. Temporal:** Sequence (topsoil → bedrock), progression (density increases)
**C. Material:** Compression (sediment pressure), weight (overburden), texture (earth tones)
**D. Behavioral:** Descent (drilling down), stratification (layer formation)
**E. Relational:** Containment (bounded core), hierarchy (depth = importance)

**Step 4.2: Translation Grammar (Property → CSS):**

```
DEPTH → Background progression:
  Topsoil: #FEF9F5 (warmest, lightest)
  Subsoil: #F0EBE3 (sandstone)
  Sediment: #E8E4DF (clay)
  Bedrock: #1A1A1A (dark, highest density)

CONFIDENCE → Border weight:
  Established: 4px (thickest, topsoil principles)
  Solid: 3px (subsoil techniques)
  Detail: 1px (bedrock specifics)

COMPRESSION → Padding:
  Topsoil: 80px (generous)
  Subsoil: 64px
  Sediment: 48px
  Bedrock: 32px (minimum, 40% of topsoil ✓)

STRATIGRAPHIC ORDER → Vertical DOM order + background darkening
EARTH TONE PALETTE → Sandstone/clay backgrounds (warmth)
ANGULAR ROCK FACES → border-radius: 0 (soul compliance)
```

**Step 4.3: Coherence Checking:**
- Density direction: Background darkens ✓ Border weight decreases ✓ Spacing compresses ✓ → COHERENT
- Transition strength: Stratum boundaries = SMOOTH (background shift, no empty space) ✓
- Typography role: Display serif for principles, body sans for technique ✓
- Border category: 4px/3px/1px mapped to confidence ✓
- Accent color: Mineral red (#E83025) for key insights ✓

**Step 4.4: Component Inventory (Tier 2 vs Tier 3):**

**Tier 2 (from library -- CONSUMED):**
- Quote Callout (Boris's wisdom)
- Key Principle Callout (red border-left)
- Anti-Pattern Callout (coral border-left)
- Code Snippet (TypeScript examples)

**Tier 3 (compositional -- GENERATED FRESH):**
- `.stratum` wrapper (each layer: topsoil, subsoil, sediment, bedrock)
- `.stratum-heading` (depth indicator)
- `.compression-grid` (data displayed as compressed layers)

**Step 4.5: Adapt vs. Invent:**
- Quote Callout: ADAPT (change background to match stratum via CSS custom property)
- Principle Callout: ADAPT (use in topsoil with 4px border)
- `.stratum` wrapper: INVENT (Tier 3, metaphor requires it)
- `.stratum-heading`: INVENT (depth communication)

**Step 4.6: Fractal Consistency:**
- Navigation: TOC shows depth progression (Fundamentals light, Philosophy dark)
- Page: Sections deepen progressively
- Section: Each stratum has dense core, sparse edges
- Component: Callouts have sparse labels, dense bodies
- Character: Code comments sparse, logic dense

**Phase 4 Output:** Compositional layout specification (CSS + HTML structure)

#### Skill Phase 5: Output (~10 min)

**Output A: Thought Process Document** (showing every axis, tension, candidate, score)

**Output B: HTML Compositional Layout:**
```html
<div class="core-sample" style="max-width: 1000px;">
  <div class="stratum stratum--topsoil" style="background: #FEF9F5; padding: 80px 48px;">
    <h2 class="stratum-heading">Fundamentals</h2>
    <!-- Tier 2 components consumed here -->
    <blockquote class="quote-callout">Boris quote</blockquote>
    <div class="key-principle">Principle 1</div>
  </div>

  <div class="stratum stratum--subsoil" style="background: #F0EBE3; padding: 64px 48px;">
    <h2 class="stratum-heading">Techniques</h2>
    <!-- More Tier 2 components -->
  </div>

  <div class="stratum stratum--bedrock" style="background: #1A1A1A; color: #FEF9F5; padding: 32px 48px;">
    <h2 class="stratum-heading">Philosophy</h2>
    <!-- Densest content, darkest background -->
  </div>
</div>
```

**Builder Warnings (R6 improvement -- appended to output):**
- W-IMPLICIT: Metaphor must be sensed, not labeled. Stratum headings are ORIENTATION, not NARRATION.
- W-MONOTONY: Vary element types within each stratum to prevent grid monotony.
- W-RESPONSIVE: Core sample narrows at 768px (natural degradation of cylindrical metaphor).

**Total Phase 3 Time:** ~150 minutes (2.5 hours)

**Phase 3 Output:** Composition Blueprint (metaphor-driven) + thought process document + builder warnings

---

### Phase 4: Build -- "Construct the Page"

**Duration:** ~35 minutes (Track 1: 28 min, Track 2: +7 min for Tier 3 generation)
**Skill invocations:** NONE

**Purpose:** Execute the Composition Blueprint, combining Tier 2 library components with Tier 3 fresh-generated metaphor wrappers.

**Inputs:**
- Composition Blueprint (metaphor-driven, from Phase 3)
- Component library (Tier 1+2 CSS ~400 lines)
- Metaphor mechanisms (from tension-composition Phase 4)
- Builder warnings (from tension-composition Phase 5)

**What Build IS (Track 2):**

Build is **composing Tier 3 metaphor zones that CONSUME Tier 2 library components**. The agent generates fresh CSS for the `.stratum` wrappers and depth indicators, then uses CSS custom properties to adapt Tier 2 components to the Tier 3 context.

**Key build actions for "Boris Cherny":**

1. **Generate Tier 3 zone wrappers:**
```css
.stratum {
  border-radius: 0; /* soul compliance */
  box-shadow: none; /* soul compliance */
  transition: background 0.3s ease;
}

.stratum--topsoil {
  background: #FEF9F5;
  padding: 80px 48px;
  border-left: 4px solid var(--color-primary);
}

.stratum--subsoil {
  background: #F0EBE3;
  padding: 64px 48px;
  border-left: 3px solid var(--color-primary);
}

.stratum--sediment {
  background: #E8E4DF;
  padding: 48px 48px;
  border-left: 1px solid var(--color-primary);
}

.stratum--bedrock {
  background: #1A1A1A;
  color: #FEF9F5;
  padding: 32px 48px; /* 40% of topsoil ✓ */
  border-left: 1px solid var(--color-accent);
}
```

2. **Adapt Tier 2 components via CSS custom properties:**
```css
/* Quote Callout (from library) adapts to stratum context */
.stratum--bedrock .quote-callout {
  --quote-bg: transparent;
  --quote-padding: 16px 24px;
  color: #FEF9F5; /* inverted for dark background */
}

.stratum--topsoil .quote-callout {
  --quote-bg: var(--color-background-secondary);
  --quote-padding: 20px 24px;
}
```

3. **Verify soul compliance (MANUAL for Tier 3):**
- All `.stratum` wrappers: `border-radius: 0` ✓
- All `.stratum` wrappers: `box-shadow: none` ✓
- Earth tones are ADDITIONS (warmth), not palette replacements ✓
- All Tier 2 components: inherited soul from library ✓

4. **Verify perceptual guardrails:**
- Container width: 1000px ≥ 940px ✓
- Horizontal padding: 48px ≥ 32px ✓
- Compression ratio: Bedrock 32px / Topsoil 80px = 40% ✓
- Label-to-heading gap: 16px ✓
- Section breathing: 0px (strata touch) but background shift creates perceptual boundary ✓

5. **Apply builder warnings:**
- W-IMPLICIT: Stratum headings ("Fundamentals", "Techniques", "Philosophy") are content labels, NOT metaphor labels ("Topsoil", "Bedrock"). Metaphor is IMPLICIT through graduated backgrounds. ✓
- W-MONOTONY: Each stratum contains varied elements (quotes + principles + code), not uniform grids. ✓
- W-RESPONSIVE: At 768px, core sample narrows to 640px (natural cylinder degradation). Verified responsive story. ✓

**Output:** Migrated page (HTML/TSX using Tier 2 library + Tier 3 compositional wrappers)

---

### Phase 5: Perceptual Audit -- "Does It Look and Feel Right?"

**Duration:** ~18 minutes (Track 1: 12 min, Track 2: +6 min for metaphor questions)
**Skill invocations:** `/perceptual-auditing mode=standard`

**Purpose:** Same as Track 1, PLUS metaphor-awareness verification.

**The skill invocation:**

```
/perceptual-auditing mode=standard page=[path] viewports=1440,768 track=2
```

**What the skill does (Track 2 specific additions):**

All Track 1 audit steps (Cold Look, PA-01 through PA-28, 7-gate protocol, guardrails), PLUS:

**Tier 3 Questions (PA-42, PA-43, PA-44) -- Metaphor-Awareness:**

**PA-42: Is there any section where you understand WHY it looks this way (metaphor logic) but it still looks WRONG (perceptual quality)?**

> "No. The cylindrical shape (1000px container) does waste some horizontal space at 1440px, but the metaphor justifies it. The graduated earth-tone backgrounds create perceptible depth. Not WRONG, just a trade-off."

**PA-43: Could the same metaphor be communicated with less visual cost?**

> "Possibly. Could use internal padding variation instead of narrow container to suggest core sample without wasting width. But current implementation is acceptable. The 1000px container is 69% of 1440px viewport -- within 65-80% optimal range."

**PA-44: If you removed all labels (stratum headings), could you still sense the metaphor?**

> "YES. The graduated earth-tone backgrounds alone communicate depth. The progressive padding compression reinforces the sense of compression-under-pressure. The stratum headings ('Fundamentals', 'Techniques', 'Philosophy') are CONTENT labels, not METAPHOR labels ('Topsoil', 'Bedrock'). Implicit > Explicit. The metaphor is STRUCTURAL, not textual. ✓"

**Metaphor Expression Level Assessment:**

| Expression Level | Evidence | Score |
|------------------|----------|-------|
| Structural (best) | Graduated backgrounds, padding compression, border-weight gradient | PRIMARY ✓ |
| Atmospheric (good) | Earth-tone palette creates warmth despite angular geometry | SECONDARY ✓ |
| Labeled (acceptable) | "Fundamentals" → topsoil association is weak/optional | MINIMAL ✓ |
| Announced (avoid) | No "geological layers" announcement | ABSENT ✓ |

**Verdict:** Metaphor expressed primarily through STRUCTURAL mechanisms. No over-labeling. PASS.

**Output:** Audit Report (PA-01–PA-48 + metaphor quality assessment)

**Example verdict for Track 2 page:**

```
AUDIT REPORT: Boris Cherny on TypeScript

COLD LOOK:
- Gut: Warm despite sharp edges. Geological metaphor WORKS.
- Worst: Bedrock section is dense (intentional) -- check readability
- Best: Progressive background darkening creates perceptible depth without labels
- Ship: YES

TIER 1 (PA-01 to PA-05): PASS (5/5)
TIER 2 (PA-06 to PA-28): PASS (23/23)
TIER 3 METAPHOR (PA-42, PA-43, PA-44): PASS (3/3)
- PA-42: No metaphor-driven compromises that look WRONG
- PA-43: Visual cost acceptable (1000px = 69% viewport, within range)
- PA-44: Metaphor is IMPLICIT (structural) not EXPLICIT (labeled) ✓
7-GATE PROTOCOL: PASS (7/7)
GUARDRAILS: PASS (8/8)

VERDICT: PASS → Proceed to Phase 6
```

---

### Phase 6: Discovery Documentation -- "What Was Learned?"

**Duration:** ~12 minutes (Track 1: 7 min, Track 2: +5 min for metaphor documentation)
**Skill invocations:** NONE

**Purpose:** Same as Track 1, PLUS metaphor record for compositional strategy library.

**Standard documentation (same as Track 1):**

```markdown
## CONSUMPTION RECEIPT: Boris Cherny on TypeScript

### Research Applied
| Finding ID | Where Applied | How |
|---|---|---|
| DD-F-006 | All 5 scales | Fractal self-similarity at all scales |
| OD-F-005 | Phase 2 | Organization IS Density (geological) |
| R5-T2 | Phase 3 | Velocity sequencing (quotes between principles) |

### New Discoveries
| ID | Discovery | Severity | Forward Impact |
|---|---|---|---|
| MIG-F-010 | Geological metaphor resolves warmth/austerity tension at richness 18 | HIGH | All philosophy/mentorship content |
| MIG-F-011 | Earth-tone background progression creates depth without labels | HIGH | All GEOLOGICAL pattern applications |
| MIG-F-012 | Border-weight gradient (4px → 1px) encodes confidence in flat system | MEDIUM | Confidence-based content |
| MIG-F-013 | Padding compression ratio 40% is perceptual floor | CRITICAL | All compression-based metaphors |
```

**NEW: Metaphor Record (Track 2 ONLY):**

```markdown
### Metaphor Record
- **Tension resolved:** Warmth/safety vs. austerity/sharpness
- **Metaphor:** Geological stratification (sedimentary layers)
- **Isomorphism count:** 6
- **Perceptual risk:** LOW (structural gradients, implicit metaphor)
- **Perceptual cost:** 2.5 (acceptable -- cylindrical shape addressed through 1000px container, not narrow)
- **Mechanisms used:**
  - Background progression: #FEF9F5 → #F0EBE3 → #E8E4DF → #1A1A1A
  - Border-weight gradient: 4px (topsoil) → 3px (subsoil) → 1px (bedrock)
  - Padding compression: 80px → 64px → 48px → 32px (40% ratio ✓)
  - Stratigraphic vocabulary: topsoil, subsoil, sediment, bedrock
- **When to use:** Layered confidence, philosophical depth, warmth vs. austerity tension
- **Responsive story:** Narrower core sample at 768px (natural degradation)
- **Builder warnings applied:** W-IMPLICIT (metaphor structural, not labeled), W-MONOTONY (varied elements per stratum), W-RESPONSIVE (cylindrical narrowing tested)
- **Expression level:** STRUCTURAL (primary) > atmospheric (secondary) > labeled (minimal)
```

**This metaphor record feeds the Compositional Strategy Library.** Future pages with warmth/austerity tension can reference "Geological Strata" and reuse the isomorphism mappings, translation grammar, and perceptual risk mitigations.

**Output:** Enhanced Consumption Receipt + Metaphor Record

---

## What Is Deterministic vs. What Requires Judgment

The pipeline's decision landscape breaks down as follows:

### Deterministic (~60% of Track 1, ~20% of Track 2)

These are binary, rule-driven, and agent-safe:

| Decision | Mechanism | Judgment? |
|---|---|---|
| Content type → organizational pattern | Classification table lookup | NO |
| Organizational pattern → density pattern | Identity relationship (OD-F-005) | NO |
| Organizational pattern → axis pattern (Track 1) | Identity relationship (AD-F-023) | NO |
| Fractal self-similarity required | Mandatory on all pages (DD-F-006) | NO |
| Soul compliance | 5 binary checks | NO |
| Max 2 callouts per viewport | Quantitative rule | NO |
| No same-velocity stacking | Binary anti-pattern | NO |
| Traffic-light color adjacency prohibited | Binary anti-pattern | NO |
| Max nesting depth: 1 level | Binary constraint | NO |
| Perceptual guardrails (8 floors) | Quantitative minimums | NO |

Once you classify the content, density and axis (Track 1) are DETERMINED. You do not separately choose them. The 3-way equivalence collapses three choices into one.

### Judgment-Based (~40% of Track 1, ~80% of Track 2)

These require the agent to think with the system, not just apply rules:

| Decision | Nature of Judgment | Guidance |
|---|---|---|
| Content type classification itself | "Is this Q&A or narrative?" | Decision heuristics: reorder test, reader's question, arc presence |
| **Track 1 vs Track 2** | **Addition Test: can assembly fulfill?** | **CRITICAL GATE** |
| WHERE in the content does density peak? | "Which step is the climax?" | Read for complexity, pivot points, emotional weight |
| WHAT component should this content become? | "Callout or inline prose?" | R5 recipes, component mood matching |
| HOW much spacing between sections? | "Tight or loose?" | Semantic proximity (R5 Principle G1) |
| SHOULD there be an Essence Callout? | "Is this wisdom or instruction?" | Soul Piece #2: serif is for insight, not procedure |
| WHERE do section boundaries fall? | "One section or two?" | Content-specific, no formula |
| HOW does the hybrid transition work? | "64px or 48px bridge?" | Transition grammar provides type; agent determines size |
| **WHICH metaphor resolves tension?** (Track 2) | **Constrained search + composite scoring** | **Tension-composition Phase 3** |
| **HOW does metaphor express spatially?** (Track 2) | **Property extraction + translation grammar** | **Tension-composition Phase 4** |

**Track 2's creative bottleneck:** Metaphor collapse (Phase 3.4) and compositional layout generation (Phase 4.2) are irreducibly creative. An agent cannot deterministically derive "geological strata" from "warmth vs. austerity" -- it requires associative search, structural reasoning, and perceptual prediction.

---

## Why Sameness Is Architecturally Impossible

Three independent forces prevent the pipeline from producing uniform output, even when operated by an agent with no aesthetic preferences.

### Force 1: Content Classification Is the Entry Point

Different content types enter through different doors and never converge. A tutorial ("How do I do X?") and an API reference ("What's available?") receive fundamentally different organizational patterns, density rhythms, and axis layouts. The classification table is not a suggestion -- it is the entry mechanism. Different content = different topology = different page.

Two tutorials will look different from each other if their content structures differ. "Setting Up Authentication" (discrete steps, clear climax) gets CRESCENDO + F-Pattern. "Understanding React Server Components" (progressive concepts, no discrete steps) gets a different CRESCENDO shape because the density builds differently. Same content TYPE, different content STRUCTURE, different visual output.

### Force 2: Track 1 vs Track 2 Is Content-Dependent

The Addition Test determines track assignment based on **what the reader needs, not what the content contains**. Two philosophy pages might both be conceptual, but one passes the Addition Test (existing components fulfill reader needs → Track 1) while the other fails (transformation required → Track 2).

Even within Track 2, two pages that resolve warmth/austerity tension might use DIFFERENT metaphors (geological strata vs. archival vault) based on content resonance, structural isomorphism, and perceptual risk scoring. Same tension, different metaphor, visually different pages.

### Force 3: Fractal Self-Similarity Looks DIFFERENT Per Pattern

The mandate is: same sparse/dense rhythm at all 5 scales. But what "sparse" and "dense" LOOK LIKE depends entirely on which pattern is active:

- F-Pattern "sparse" = generous 64px padding, large headings, wide line-height
- Bento Grid "sparse" = empty grid cells, wide inter-cell gaps
- Z-Pattern "sparse" = wide question text, serif heading, generous left margin
- Spiral "sparse" = outer ring, atmospheric, broad concepts
- Choreography "sparse" = hub view, wide scan, overview cards
- **Geological Strata "sparse"** = topsoil with 80px padding, lightest earth tone, thickest borders

Same principle, visually different expression at every level. Two pages both exhibiting fractal self-similarity will look different because the rhythm's visual encoding changes with the organizational pattern AND the metaphor (Track 2).

---

## What Happens Across Multiple Pages

### The Compounding Effect

Migration is not 75 isolated events. It is a compounding process where each page enriches the vocabulary's effective power:

- **Page 1 (Track 1):** Migrated with pure vocabulary application. No prior MIG-F discoveries.
- **Page 5 (Track 1):** Migrated with vocabulary + 3 refinements from pages 1-4. The agent knows that 64px bridges feel right for tutorial→Q&A transitions.
- **Page 15 (Track 2):** Migrated with vocabulary + 8 refinements + 1 metaphor strategy. The agent can reference "Geological Strata" for warmth/austerity tension.
- **Page 50 (Track 2):** Migrated with vocabulary + 20 refinements + 6 metaphor strategies + 4 new recipes. The agent now handles hybrid tensions that pages 1-10 would have struggled with.

This is the same compounding that made DD → OD → AD → CD work. Research begets findings. Findings beget constraints. Constraints beget explorations. Explorations beget more research. Migration continues this chain.

### What Does NOT Change

The soul pieces are LOCKED. The token values are LOCKED. The provenance chain is IMMUTABLE. Discoveries flow FORWARD, not backward. A migration discovery does not retroactively change DD-F-006. It creates a new MIG-F finding that extends the vocabulary's application range.

**What is frozen:** tokens, soul pieces, patterns, findings, convention spec, combination rules, perceptual guardrails.
**What evolves:** implementation details, spacing preferences, component combination recipes, page classification refinements, process improvements, application notes, **metaphor strategies** (Track 2).

The design system grows more capable through migration -- not by changing its language, but by accumulating documented applications of that language AND documented compositional strategies. The language is frozen. Its demonstrated capabilities expand forever.

---

## The Two-Track Reality: Timeline and Parallelization

### Track 1 (Assembly) -- Parallelizable

```
Phase 1: 12 min
Phase 2: 8 min
Phase 3: 18 min (mechanical)
Phase 4: 28 min
Phase 5: 12 min
Phase 6: 7 min
──────────────
Total: 85 min per page
```

**Parallelization:** 6 agents can process 6 pages simultaneously. 30 pages @ 85 min = 425 min wall time with 6-agent team = **71 minutes** (1.2 hours).

### Track 2 (Composition) -- NOT Parallelizable

```
Phase 1: 18 min
Phase 2: 12 min
Phase 3: 150 min (tension-composition skill)
Phase 4: 35 min
Phase 5: 18 min
Phase 6: 12 min
──────────────
Total: 245 min per page (4 hours)
```

**Creative bottleneck:** Metaphor collapse is irreducibly creative. Maximum 2-3 Track 2 pages concurrently (agent capacity limit). 45 pages @ 4 hours = **180 hours** wall time with 2-agent team = **90 hours** (11-12 workdays).

### The Critical Insight

**Track 2 creative capacity is THE pipeline bottleneck.** The proportion of pages requiring Track 2 treatment determines the total migration timeline more than any other factor.

If Track 2 is 15-20% of pages (original estimate): 11-15 pages @ 4 hours = 44-60 hours
If Track 2 is 50-60% of pages (impact assessor estimate): 35-45 pages @ 4 hours = 140-180 hours

**The variance is 3x.** Phase B (Content Analysis + Track Classification) is CRITICAL for establishing the actual Track 1/Track 2 split before committing to timeline estimates.

---

## Open Questions

### Q1: Can agents invoke skills mid-pipeline?

**Current assumption:** Migration agent in Phase 3 calls `/tension-composition [content]` and receives output.

**If YES (agents can invoke):**
- Phase 3 becomes a skill invocation gate (simple orchestration)
- Tension-composition skill runs in separate context, returns structured output
- Agent extracts composition blueprint from skill output

**If NO (only user can invoke):**
- Phase 3 must INLINE the entire tension-composition protocol (~800 lines)
- Agent executes Phases 0-5 following SKILL.md directly
- Increases Phase 3 spec size but feasible

**Resolution needed before:** Phase E (Playbook finalization)

### Q2: Should Phases 0-2 of tension-composition run for ALL pages?

**Proposal:** Phase B (Content Analysis) runs tension-composition Phases 0-2 for each page to classify Track 1 vs Track 2.

**Cost implications:**
- 75 pages × 15-20 min (Phases 0-2) = 18-25 hours for classification
- Track 1 pages don't need this depth -- classification is often immediate

**Refinement needed:**
- Fast-path classification for obvious Track 1 pages (tutorial, reference, Q&A)
- Full tension analysis only for ambiguous pages or clear Track 2 candidates
- Heuristic: If content type maps cleanly AND Addition Test obviously passes → Track 1 (skip Phases 0-2)

### Q3: What model tier for Track 2 agents?

**Track 1 (assembly):** Sonnet 4.5 sufficient (mechanical, rule-based)
**Track 2 (composition):** Opus 4.6 likely required (creative, metaphor derivation)

**Cost implications at 35-45 Track 2 pages:**
- Sonnet: ~$3-5 per page
- Opus: ~$15-25 per page
- Difference: $420-1,125 for Track 2 alone

**Trade-off:** Quality ceiling vs. cost. Tension-composition skill was built and tested on Opus. Metaphor quality with Sonnet unproven.

### Q4: How do borderline pages ("Track 1.5") get handled?

Some pages may have LIGHT tension (richness 6-10) that doesn't justify full metaphor derivation but benefits from more than mechanical assembly.

**Options:**
1. Force into Track 1 (assembly) -- simpler, faster, but may miss nuance
2. Force into Track 2 (composition) -- higher quality, but 4-hour cost for marginal gain
3. Create "Track 1.5" with ABBREVIATED tension-composition (skip multi-axis, go straight to metaphor test with 2-3 candidates)

**Needs validation during:** Phase F (Pilot Migration) -- test borderline page with all 3 approaches

---

## Pipeline Summary

```
┌─────────────────────────────────────────────────────────────────┐
│ TRACK 1: ASSEMBLY (45-90 min per page)                         │
├─────────────────────────────────────────────────────────────────┤
│ Phase 1: PAGE ANALYSIS (12 min)                                │
│   → 5-dimensional classification                               │
│   → Addition Test = YES → TRACK 1                              │
│                                                                 │
│ Phase 2: PATTERN SELECTION (8 min)                             │
│   → Deterministic lookup (60%)                                 │
│   → Judgment (40%)                                             │
│   → Pattern triple: density + organization + axis              │
│                                                                 │
│ Phase 3: COMPOSITION DESIGN (18 min) [MECHANICAL]              │
│   → R5 combination rules                                       │
│   → Transition grammar                                         │
│   → Fractal verification                                       │
│   → Perceptual guardrails                                      │
│   → Composition blueprint                                      │
│                                                                 │
│ Phase 4: BUILD (28 min)                                        │
│   → Load Tier 1+2 CSS from library                             │
│   → Assemble components                                        │
│   → Verify guardrails + soul                                   │
│   → Migrated page                                              │
│                                                                 │
│ Phase 5: PERCEPTUAL AUDIT (12 min)                             │
│   → /perceptual-auditing mode=standard                         │
│   → PA-01 through PA-28 (Tier 1+2)                             │
│   → 7-gate protocol                                            │
│   → Audit report                                               │
│                                                                 │
│ Phase 6: DISCOVERY DOCS (7 min)                                │
│   → Consumption Receipt                                        │
│   → MIG-F findings                                             │
│                                                                 │
│ PARALLELIZABLE: 6 agents / 6 pages simultaneously              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TRACK 2: COMPOSITION (3-5 hours per page)                      │
├─────────────────────────────────────────────────────────────────┤
│ Phase 1: PAGE ANALYSIS + TENSION PRE-SCREEN (18 min)           │
│   → 5-dimensional classification                               │
│   → Addition Test = NO → TRACK 2                               │
│   → BECAUSE test + richness estimate                           │
│                                                                 │
│ Phase 2: PATTERN SELECTION (partial) (12 min)                  │
│   → Density + organization identified                          │
│   → Axis DEFERRED to Phase 3 (metaphor-dependent)              │
│   → Tension table prepared                                     │
│                                                                 │
│ Phase 3: TENSION-COMPOSITION PIPELINE (150 min) [CREATIVE]     │
│   → Invoke /tension-composition OR inline execution            │
│   → Phase 0: Content assessment (5 min)                        │
│   → Phase 1: Multi-axis questioning (25 min)                   │
│   → Phase 2: Tension derivation (30 min)                       │
│   → Phase 3: Metaphor collapse (45 min) ← BOTTLENECK           │
│       - Constrained search                                     │
│       - Composite scoring (resolution, isomorphism,            │
│         resonance, feasibility, risk, cost)                    │
│   → Phase 4: Compositional layout (35 min)                     │
│       - Phase 4.0: Perceptual guardrails (enforced first)      │
│       - Property extraction + translation grammar              │
│   → Phase 5: Output (10 min)                                   │
│       - Thought process document                               │
│       - HTML layout + builder warnings                         │
│                                                                 │
│ Phase 4: BUILD (35 min)                                        │
│   → Load Tier 1+2 CSS from library                             │
│   → Generate Tier 3 zone wrappers (metaphor-specific)          │
│   → Adapt Tier 2 via CSS custom properties                     │
│   → Verify guardrails + soul (MANUAL for Tier 3)               │
│   → Apply builder warnings                                     │
│   → Migrated page                                              │
│                                                                 │
│ Phase 5: PERCEPTUAL AUDIT (18 min)                             │
│   → /perceptual-auditing mode=standard track=2                 │
│   → PA-01 through PA-48 (Tier 1+2+3)                           │
│   → PA-42, PA-43, PA-44 (metaphor-awareness)                   │
│   → 7-gate protocol                                            │
│   → Audit report + metaphor assessment                         │
│                                                                 │
│ Phase 6: DISCOVERY DOCS (12 min)                               │
│   → Enhanced Consumption Receipt                               │
│   → Metaphor Record (tension, isomorphism, mechanisms)         │
│   → MIG-F findings + metaphor documentation                    │
│                                                                 │
│ NOT PARALLELIZABLE: Max 2-3 concurrent (creative capacity)     │
└─────────────────────────────────────────────────────────────────┘
```

The pipeline is the bridge between 15,000 lines of research prose and every documentation page a reader will ever see. It takes accumulated intelligence built across four exploration stages and makes it operational -- one page at a time, compounding with every encounter. **Two tracks, one vocabulary, infinite visual variety.**

---

## See Also

- **07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md** -- Deep dive into Track 2 tension-composition invocation
- **08-COMPOSITIONAL-STRATEGY-LIBRARY.md** -- 6+ documented metaphor strategies for Track 2 reuse
- **02-POST-CD-PHASES.md** -- Where this per-page pipeline fits in the macro phase sequence
- **04-CONTENT-INGESTION.md** -- Migration vs. ongoing ingestion (same pipeline, different provenance)
- **05-COMPLETE-ROADMAP.md** -- Full timeline with Track 1/Track 2 breakdown
- **tension-composition/SKILL.md** -- Full 6-phase tension-composition protocol (1,137 lines)
- **perceptual-auditing/SKILL.md** -- Full 48-question perceptual audit protocol (627 lines)

---

END MIGRATION PIPELINE SPECIFICATION
