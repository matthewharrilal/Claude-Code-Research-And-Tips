# 03: The Per-Page Migration Pipeline

## A Concrete Walkthrough of How Content Becomes Design

---

## Overview

Migration is not a conveyor belt. It is a **discovery pipeline** where each page encounters the design system's accumulated intelligence, and the encounter produces both a migrated page and new knowledge. The pipeline has six phases per page, each with distinct cognitive demands and defined inputs/outputs.

This document walks through the entire pipeline using a real example: a tutorial page called "Setting Up Authentication." By the end, you will understand exactly what happens at each phase, what decisions are deterministic versus judgment-based, and why the pipeline architecturally prevents uniform output.

**The six phases:**

```
Phase 1: PAGE ANALYSIS -----> "What IS this content?"
Phase 2: PATTERN SELECTION --> "Which patterns fit?"
Phase 3: COMPOSITION DESIGN -> "How do the pieces combine?"
Phase 4: BUILD --------------> "Construct the page"
Phase 5: PERCEPTUAL AUDIT ---> "Does it look and feel right?"
Phase 6: DISCOVERY DOCS -----> "What was learned?"
```

Each phase has one input from the preceding phase and one output consumed by the next. The pipeline is sequential within a page but parallelizable across pages. The critical innovation is Phase 6 -- the discovery documentation that makes migration compound rather than serial. Without it, lessons from page 47 cannot inform page 48.

---

## The Content Classification Table

Before walking through the pipeline, understand the entry point. Content classification is the single most important decision in migration. It determines everything downstream. The classification is not a guess -- it maps directly to the design system's validated organizational patterns.

| Content Type | Reader's Question | Organization | Density | Axis | Feels Like |
|---|---|---|---|---|---|
| "How do I do X?" (steps) | Task-Based (OD-003) | ISLANDS + BOOKENDS | Bento Grid | Recipe cards on a counter |
| "How does X work?" (progressive) | Narrative (OD-002) | CRESCENDO | F-Pattern | A well-paced article |
| "What is X?" (Q&A) | Conversational (OD-001) | PULSE + TIDAL | Z-Pattern | Interview transcript |
| "Should I use X?" (evaluation) | Confidence-Based (OD-004) | GEOLOGICAL | Spiral | Geological cross-section |
| "What's available?" (map) | Spatial (OD-005) | WAVE + ISLANDS | Choreography | Museum floor plan |
| Multiple of the above | Creative/Emergent (OD-006) | ALL (FRACTAL) | Compound | Magazine feature |

This table is not decorative. It is the lookup mechanism. An agent reads the content, determines what question the reader is asking, and the organizational pattern, density rhythm, and axis layout follow as identity relationships -- not separate choices. This is the 3-way equivalence (AD-F-023): axis IS organization IS density IS **attention topology**. You are choosing one thing expressed through three lenses.

---

## The Full Walkthrough: "Setting Up Authentication"

What follows is a complete, concrete trace of a single page through all six phases. This is not a hypothetical. Every decision, every spacing value, every transition is the kind of specificity that the actual pipeline produces.

---

### Phase 1: Page Analysis -- "What IS This Content?"

**Purpose:** Before selecting any pattern, understand the page as a reader encounters it. Read the content -- not the HTML structure, not the CSS -- but what the content IS and what job it does for the reader.

**Inputs:**
- The existing page content (source HTML/MDX/markdown)
- ACCUMULATED-IDENTITY-v2 (the reasoning substrate)

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

**Output:** A Page Analysis Card capturing all five dimensions. This card becomes the input to Phase 2.

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
```

---

### Phase 2: Pattern Selection -- "Which Patterns Fit?"

**Purpose:** Map the Page Analysis Card to the design system's validated vocabulary. This is where the pattern index and accumulated identity earn their keep.

**Inputs:**
- Page Analysis Card (from Phase 1)
- Pattern selection framework (PATTERN-INDEX.md)
- ACCUMULATED-IDENTITY-v2

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

These are where the agent thinks with the system, not just applies rules:

**WHERE does CRESCENDO peak?**
The agent reads the content and determines that Step 5 (token generation) is the climax. This is not arbitrary -- it is the step with the most complexity, the longest code block, and the pivotal action (the first time the auth token exists). The CRESCENDO peaks here.

**HOW does the CRESCENDO-to-PULSE transition work?**
The transition grammar says a bridge is needed between F-Pattern and Z-Pattern. The agent decides: a **64px recovery zone** after the final tutorial step creates the visual signal that the tutorial is done and something structurally different is coming. 48px would feel too abrupt -- the reader needs a breath after the tutorial's resolution before entering Q&A rhythm.

**SHOULD there be an Essence Callout?**
The agent reads Step 5 and identifies a key insight about how JWT tokens relate to session management. This is wisdom-level content -- it deserves serif italic treatment (Soul Piece #2: Archivist Serif). The Essence Callout goes immediately after Step 5 as a recovery breath between climax and falling action.

**Output:** A Pattern Selection Record.

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

**Purpose:** Before building anything, design the page's spatial choreography. This is where R5 Combination Theory and the four combination rules govern behavior.

**Inputs:**
- Pattern Selection Record (from Phase 2)
- R5-COMBINATION-THEORY (39 findings on combination)
- Combination rules (velocity, temperature, weight, spacing)

**Process:** The agent sketches the full page before writing any code.

#### The Four Combination Rules Applied

Every component in the design system has three measurable properties: velocity (how fast the reader processes it), temperature (emotional register), and weight (visual heaviness). The four rules prevent bad combinations:

1. **Velocity Rule:** Never stack same-velocity components. Code Snippet (SLOW) followed by Reasoning Component (SLOW) needs a FAST component between them (Tip Callout).

2. **Temperature Rule:** Flow warm to neutral to cold. Do not follow Tip (warm) directly with Gotcha (cold). Insert a neutral buffer.

3. **Weight Rule:** Intersperse heavy with light. Code Snippet (heavy) should not be followed by another Code Snippet without a light component between them.

4. **Spacing Rule:** Tight coupling (8-16px) for related components. Standard gaps (24-32px) between topics. Section breaks (48-64px) between major shifts. Recovery zones (64-80px) after dense clusters.

#### The Spatial Sketch

Here is the composition the agent designs -- the full page from hero to footer:

```
┌──────────────────────────────────────────────────────────┐
│  HERO                                                    │
│  Sparse. Generous 64-80px padding.                       │
│  Title + one-sentence orientation.                       │
│  "What you'll build and why it matters."                 │
│  Density: LOW                                            │
├──────────────────────────────────────────────────────────┤
│                    48px gap                               │
├──────────────────────────────────────────────────────────┤
│  PREREQUISITES                                           │
│  Compact ISLANDS — each prereq a discrete bordered       │
│  block with 4px left accent. 3 items in tight grid.      │
│  Density: LOW-MEDIUM                                     │
├──────────────────────────────────────────────────────────┤
│                    48px gap                               │
├──────────────────────────────────────────────────────────┤
│  STEPS 1-2 (Install, Configure)                          │
│  Building density. Short prose + small code blocks.      │
│  Spacing between steps: 48px (room to breathe early).    │
│  F-Pattern: step label left, code right.                 │
│  Density: MEDIUM-LOW                                     │
├──────────────────────────────────────────────────────────┤
│                    40px gap                               │
├──────────────────────────────────────────────────────────┤
│  STEPS 3-4 (Providers, Middleware)                        │
│  Density compresses. More code. Tighter spacing.         │
│  Spacing between steps: 40px → 32px.                     │
│  Code blocks grow. Explanations tighten.                 │
│  Density: MEDIUM                                         │
├──────────────────────────────────────────────────────────┤
│                    32px gap                               │
├──────────────────────────────────────────────────────────┤
│  STEP 5 — CLIMAX (Token Generation)                      │
│  DENSEST section. Tightest spacing (24px internal).      │
│  Largest code block spans full width.                    │
│  4px left accent border (Sanrok red #E83025).            │
│  Multiple sub-steps tightly coupled (8-16px).            │
│  Density: HIGH (CRESCENDO peak)                          │
├──────────────────────────────────────────────────────────┤
│                    32px gap                               │
├──────────────────────────────────────────────────────────┤
│  ESSENCE CALLOUT                                         │
│  Serif italic (Instrument Serif). Set apart.             │
│  "The token is not just authentication — it is the       │
│   contract between client trust and server truth."       │
│  Recovery breath after climax.                           │
│  Density: LOW (deliberate decompression)                 │
├──────────────────────────────────────────────────────────┤
│                    40px gap                               │
├──────────────────────────────────────────────────────────┤
│  STEPS 6-8 (Test, Deploy, Monitor)                       │
│  Exhale. Spacing reopens: 24px → 40px → 48px.           │
│  Code blocks shrink. Prose increases.                    │
│  Resolution — the system works, confidence returns.      │
│  Density: MEDIUM → LOW (falling action)                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│               64px BRIDGE ZONE                           │
│  Visual signal: tutorial is done.                        │
│  Something structurally different follows.               │
│  Subtle horizontal rule or whitespace.                   │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  TROUBLESHOOTING — PULSE RHYTHM                          │
│                                                          │
│  Q1: Dense question (Gotcha-style, problem statement)    │
│  A1: Sparse answer (code fix + explanation)              │
│      24px gap                                            │
│  Q2: Dense question                                      │
│  A2: Sparse answer                                       │
│      24px gap                                            │
│  Q3: Dense question                                      │
│  A3: Sparse answer                                       │
│      24px gap                                            │
│  Q4: Dense question                                      │
│  A4: Sparse answer                                       │
│                                                          │
│  Z-Pattern: question on left, answer sweeps right.       │
│  Each Q/A pair = one PULSE beat.                         │
│  Density: alternating HIGH/LOW                           │
├──────────────────────────────────────────────────────────┤
│                    64-80px gap                            │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
│  Recovery zone. Sparse. Links to next tutorial.          │
│  64-80px padding. Minimal elements.                      │
│  Density: LOW                                            │
└──────────────────────────────────────────────────────────┘
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

**Output:** The Composition Blueprint shown above, with anti-pattern checks and fractal verification.

---

### Phase 4: Build -- "Construct the Page"

**Purpose:** Execute the Composition Blueprint. This is construction, not design -- the design is already done.

**Inputs:**
- Composition Blueprint (from Phase 3)
- Component library (extracted React/JSX components encoding patterns)
- Soul token system (CSS custom properties)
- The existing page content

**What Build IS:**

Build is composing from the component library. The agent is NOT writing CSS from scratch. Every component in the library already has soul tokens baked in -- `border-radius: 0`, `box-shadow: none`, correct font families, correct color palette. The agent assembles components in the sequence dictated by the Composition Blueprint.

**What Build IS NOT:**

Build is not restyling the existing page. The agent does not look at the current HTML and add KortAI classes. Instead, the agent takes the CONTENT (the meaning, the text, the code examples) and re-expresses it through the design system's visual language. The printing press does not restyle the manuscript -- it sets it in type.

**Key build actions for "Setting Up Authentication":**

- Hero section: composed from the Hero component with sparse density preset, 64px vertical padding
- Prerequisites: composed from Island components in a tight grid layout
- Steps 1-8: composed from Task Components with progressive spacing compression (48px → 40px → 32px → 24px at climax → 40px → 48px exhale)
- Code blocks: composed from Code Snippet components (dark background, sharp corners, copy button, JetBrains Mono)
- Essence Callout: composed from the Essence Callout component (serif italic, warm accent border, recovery breathing)
- Troubleshooting: composed from Q&A pair components in Z-Pattern layout
- Bridge zone: 64px whitespace with optional subtle horizontal rule
- Typography: Instrument Serif for display headings, Inter for body, JetBrains Mono for code

**Component velocity/temperature/weight sequencing:**

The build follows the combination rules verified in Phase 3:
- No two SLOW components adjacent without a FAST buffer
- Temperature flows warm (Tip) → neutral (Info) → cold (Gotcha) without whiplash
- Heavy components (Code Snippet, Decision Matrix) interspersed with light (Info Callout, Tip)
- Spacing matches semantic proximity (tight 8-16px within a step, standard 24-32px between related steps, recovery 48-64px between major sections)

**Output:** The migrated page (HTML/TSX/MDX). Ready for perceptual audit.

---

### Phase 5: Perceptual Audit -- "Does It Look and Feel Right?"

**Purpose:** Verify the migrated page is not just technically compliant but perceptually correct. Technical compliance without perceptual quality is mechanical application.

**Inputs:**
- Migrated page (from Phase 4)
- Soul pieces (5 non-negotiable truths)
- ACCUMULATED-IDENTITY-v2 (what "right" feels like)
- Original page (for before/after comparison)

**The audit has 7 gates with 28 questions total.** The page must be checked at both 1440px AND 768px viewport widths.

#### Gate 1: Soul Compliance (Binary -- PASS/FAIL)

| Check | Result |
|---|---|
| `border-radius: 0` everywhere? | PASS or FAIL |
| `box-shadow: none` everywhere? | PASS or FAIL |
| No `filter: drop-shadow()`? | PASS or FAIL |
| Correct font families (Instrument Serif / Inter / JetBrains Mono)? | PASS or FAIL |
| Callout family DNA (2-zone: label + body, 4px left border)? | PASS or FAIL |
| No animated z-movement? | PASS or FAIL |
| `opacity: 1` on all static elements? | PASS or FAIL |

Any single FAIL = page cannot ship. Fix and re-audit.

#### Gate 2: Density Pattern Verification

- Does the page follow CRESCENDO rhythm? Can you see density building from hero to Step 5?
- Is the PULSE rhythm visible in the troubleshooting section?
- Are the 5 fractal scales all present?
- Is there recovery breathing (64-80px) after the densest sections?
- Are there no more than 2 callouts per viewport?

#### Gate 3: Axis Pattern Verification

- Does the F-Pattern guide the eye correctly through the tutorial? Left spine (step numbers), right scan (code/detail)?
- Does the Z-Pattern work in the troubleshooting section? Question left, answer sweeps right?
- Is the Compound transition (F→Z) handled with the 64px bridge zone?

#### Gate 4: Combination Rule Verification

- No same-velocity stacking?
- Temperature flows correctly (no warm→cold whiplash)?
- Weight is balanced (no two heavy components adjacent)?
- Spacing matches semantic proximity?

#### Gate 5: The Bootstrap Test

> "Could this page exist in a Bootstrap, Tailwind, or Material Design project without modification?"

If YES = **FAIL.** The soul is compromised. The page must be unmistakably KortAI -- sharp edges, no shadows, warm cream, serif wisdom, the editorial confidence of a publication that knows exactly what it is.

#### Gate 6: The Squint Test

Squint at the page. What do you see?

- Dense blocks and sparse breathing? **GOOD** -- density variation is working.
- Uniform gray soup? **BAD** -- no density variation.
- Floating elements with apparent depth? **BAD** -- shadows or rounded corners leaked in.
- Sharp, editorial, confident? **GOOD** -- the soul is intact.

#### Gate 7: Before/After Assessment

- What was LOST from the original page? Any critical functionality removed?
- What was GAINED? Better reading flow? Clearer hierarchy? More personality?
- Is the migrated version BETTER for the reader, not just more compliant?

This last question is the ultimate test. Compliance without improvement is mechanical application. If the migrated page is technically perfect but worse for the reader, something went wrong in Phase 2 or Phase 3.

#### What Happens When Audit Fails

**Back to Phase 4, not Phase 1.**

The classification was right. The pattern selection was right. The composition design was right. The execution needs adjustment. The agent fixes the specific build issue flagged by the audit gate and re-audits.

This is a critical distinction. Classification errors are rare (the content type is usually obvious). Build errors are common (spacing off by 8px, a code block missing the copy button, a callout with rounded corners inherited from existing CSS). The pipeline sends failures back to the nearest fixable point, not the beginning.

If -- rarely -- the audit reveals that the pattern selection itself was wrong (e.g., the content turned out to be more Narrative than Task-Based once built), the agent goes back to Phase 2. But this is the exception. The classification table is robust because the content types are distinct.

---

### Phase 6: Discovery Documentation -- "What Was Learned?"

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

- "3-code-block crescendo works well for progressive complexity tutorials: spacing 48px → 32px → 24px creates perceptible compression without feeling cramped"
- "CRESCENDO-to-PULSE transition needs at least 64px bridge. Tested 48px -- felt too abrupt. The reader needs a full breath after tutorial resolution before Q&A rhythm begins."
- "Essence Callout immediately after climax step is highly effective. The serif shift creates a cognitive pause that marks the transition from peak intensity to falling action. Consider this a repeatable recipe for tutorial pages."
- "Troubleshooting Q&A pairs work best with Gotcha-style question (problem framing) resolved by Tip-style answer (solution). Ending each pair on the resolution prevents anxiety accumulation."

#### 3. Process Notes

Did the pipeline itself need adjustment?

- "Phase 1 classification was immediate for this page -- 'How do I do X?' maps cleanly to Task-Based. No ambiguity."
- "Phase 3 spacing values (48→40→32→24→40→48) were derived from feel, not formula. Future pages might benefit from a spacing compression table."

**These discoveries feed forward.** When page 15 enters the pipeline, the agent has access to all discoveries from pages 1-14. Page 15 benefits from 14 prior encounters between content and vocabulary. This is the compounding mechanism that makes later pages faster and higher quality than earlier pages.

**Output format:**

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
- Consider a spacing compression lookup table for future pages
```

---

## What Is Deterministic vs. What Requires Judgment

The pipeline's decision landscape breaks down as follows:

### Deterministic (~60% of all decisions)

These are binary, rule-driven, and agent-safe:

| Decision | Mechanism | Judgment? |
|---|---|---|
| Content type → organizational pattern | Classification table lookup | NO |
| Organizational pattern → density pattern | Identity relationship (OD-F-005) | NO |
| Organizational pattern → axis pattern | Identity relationship (AD-F-023) | NO |
| Fractal self-similarity required | Mandatory on all pages (DD-F-006) | NO |
| Soul compliance | 5 binary checks | NO |
| Max 2 callouts per viewport | Quantitative rule | NO |
| No same-velocity stacking | Binary anti-pattern | NO |
| Traffic-light color adjacency prohibited | Binary anti-pattern | NO |
| Max nesting depth: 1 level | Binary constraint | NO |

Once you classify the content, density and axis are DETERMINED. You do not separately choose them. The 3-way equivalence collapses three choices into one.

### Judgment-Based (~40% of all decisions)

These require the agent to think with the system, not just apply rules:

| Decision | Nature of Judgment | Guidance |
|---|---|---|
| Content type classification itself | "Is this Q&A or narrative?" | Decision heuristics: reorder test, reader's question, arc presence |
| WHERE in the content does density peak? | "Which step is the climax?" | Read for complexity, pivot points, emotional weight |
| WHAT component should this content become? | "Callout or inline prose?" | R5 recipes, component mood matching |
| HOW much spacing between sections? | "Tight or loose?" | Semantic proximity (R5 Principle G1) |
| SHOULD there be an Essence Callout? | "Is this wisdom or instruction?" | Soul Piece #2: serif is for insight, not procedure |
| WHERE do section boundaries fall? | "One section or two?" | Content-specific, no formula |
| HOW does the hybrid transition work? | "64px or 48px bridge?" | Transition grammar provides type; agent determines size |

The macro structure is algorithmic. The micro structure is where editorial craft lives.

---

## Why Sameness Is Architecturally Impossible

Three independent forces prevent the pipeline from producing uniform output, even when operated by an agent with no aesthetic preferences.

### Force 1: Content Classification Is the Entry Point

Different content types enter through different doors and never converge. A tutorial ("How do I do X?") and an API reference ("What's available?") receive fundamentally different organizational patterns, density rhythms, and axis layouts. The classification table shown earlier is not a suggestion -- it is the entry mechanism. Different content = different topology = different page.

Two tutorials will look different from each other if their content structures differ. "Setting Up Authentication" (discrete steps, clear climax) gets CRESCENDO + F-Pattern. "Understanding React Server Components" (progressive concepts, no discrete steps) gets a different CRESCENDO shape because the density builds differently. Same content TYPE, different content STRUCTURE, different visual output.

### Force 2: Fractal Self-Similarity Looks DIFFERENT Per Pattern

The mandate is: same sparse/dense rhythm at all 5 scales. But what "sparse" and "dense" LOOK LIKE depends entirely on which pattern is active:

- F-Pattern "sparse" = generous 64px padding, large headings, wide line-height
- Bento Grid "sparse" = empty grid cells, wide inter-cell gaps
- Z-Pattern "sparse" = wide question text, serif heading, generous left margin
- Spiral "sparse" = outer ring, atmospheric, broad concepts
- Choreography "sparse" = hub view, wide scan, overview cards

Same principle, visually different expression at every level. Two pages both exhibiting fractal self-similarity will look different because the rhythm's visual encoding changes with the axis pattern.

### Force 3: Component Combination Variety

Even within the same archetype, pages differ based on what content is in them:

- Tutorial with 6 code blocks + 2 callouts looks different from tutorial with 3 code blocks + 5 callouts + 1 decision matrix -- even though both use CRESCENDO + F-Pattern
- The combination rules (velocity, temperature, weight) produce different component sequences because the COMPONENTS themselves are different
- A page with an Essence Callout at the climax has a fundamentally different emotional shape than a page with a Code Snippet at the climax

**The result:** two pages that share the same organizational pattern, the same density rhythm, and the same axis layout will STILL look different because their content drives different component selections, different spacing values, and different fractal expressions.

Sameness would require identical content structure, identical component inventory, identical density profile, AND identical climax position. In practice, no two pages share all of these. Sameness is not just unlikely -- it is architecturally prevented by the pipeline's input-sensitivity.

---

## What Happens Across Multiple Pages

### The Compounding Effect

Migration is not 75 isolated events. It is a compounding process where each page enriches the vocabulary's effective power:

- **Page 1:** Migrated with pure vocabulary application. No prior MIG-F discoveries.
- **Page 5:** Migrated with vocabulary + 3 refinements from pages 1-4. The agent knows that 64px bridges feel right for tutorial→Q&A transitions.
- **Page 15:** Migrated with vocabulary + 8 refinements + 1 extension. A new recipe has been documented: the "Diff Sandwich" (code/reasoning/code for before/after patterns).
- **Page 50:** Migrated with vocabulary + 20 refinements + 3 extensions + 2 new recipes. The agent can now handle hybrid content types that pages 1-10 would have struggled with.

This is the same compounding that made DD → OD → AD → CD work. Research begets findings. Findings beget constraints. Constraints beget explorations. Explorations beget more research. Migration continues this chain.

### What Does NOT Change

The soul pieces are LOCKED. The token values are LOCKED. The provenance chain is IMMUTABLE. Discoveries flow FORWARD, not backward. A migration discovery does not retroactively change DD-F-006. It creates a new MIG-F finding that extends the vocabulary's application range.

**What is frozen:** tokens, soul pieces, patterns, findings, convention spec, combination rules.
**What evolves:** implementation details, spacing preferences, component combination recipes, page classification refinements, process improvements, application notes.

The design system grows more capable through migration -- not by changing its language, but by accumulating documented applications of that language. The language is frozen. Its demonstrated capabilities expand forever.

---

## Pipeline Summary

```
Phase 1: ANALYZE     "What is the content's attention topology?"
  └─ Output: Page Analysis Card (type, density, climax, components, flow, character)

Phase 2: SELECT      "What patterns serve this topology?"
  └─ Output: Pattern Selection Record (org + density + axis triplet per section)

Phase 3: COMPOSE     "How do components combine spatially?"
  └─ Output: Composition Blueprint (full spatial sketch with spacing values)

Phase 4: BUILD       "Construct from component library"
  └─ Output: Migrated page (HTML/TSX/MDX)

Phase 5: AUDIT       "7 gates, 28 questions, 1440px + 768px"
  └─ Output: Audit report (PASS → Phase 6, FAIL → back to Phase 4)

Phase 6: DOCUMENT    "Record what was learned"
  └─ Output: Consumption Receipt + Discovery Log entries
                     ↓
              Feeds forward to next page's Phase 1
```

The pipeline is the bridge between 15,000 lines of research prose and every documentation page a reader will ever see. It takes accumulated intelligence built across four exploration stages and makes it operational -- one page at a time, compounding with every encounter.
