# 06: The Per-Page Discovery Process
## What Migration ACTUALLY Looks Like, Page by Page

**Agent:** process-designer (Task #6)
**Date:** 2026-02-11
**Sources:** PATTERN-INDEX.md, BACKBONE.md, R5-COMBINATION-THEORY.md, combination-rules.md, ACCUMULATED-IDENTITY-v2.md, migration-guide.md, HANDOFF-AD-TO-CD.md, README.md Parts IV-VI

---

## Executive Summary

Migration is not a conveyor belt where every page gets the same treatment. It is a **discovery pipeline** where each page is an encounter with unique content, and the design system's job is to give that content the right voice. The pipeline has six phases per page (Analysis, Selection, Composition, Build, Audit, Documentation), each with distinct cognitive demands. The most important finding: **Phase F (Discovery Documentation) is what makes migration compound rather than serial** -- without it, lessons from page 47 cannot inform page 48.

---

## Part 1: The Six-Phase Pipeline

### Phase A: PAGE ANALYSIS -- "What IS This Page?"

**Purpose:** Before selecting any pattern, understand the page as a reader encounters it. This is Level 1 engagement (Application), but it requires Level 2 thinking (Understanding) to do correctly.

**Inputs:**
- The existing page (source HTML/MDX/content)
- ACCUMULATED-IDENTITY-v2.md (the mind to think with)

**Process:**

1. **Content Type Classification.** Map the page to one of the recognized organizational archetypes:

   | Content Signal | Classification | Confidence |
   |----------------|---------------|------------|
   | Step-by-step instructions, numbered procedures | Task-Based (OD-003) | HIGH |
   | Q&A format, conversational tone | Conversational (OD-001) | HIGH |
   | Story arc, "journey" structure, introduction-to-mastery | Narrative (OD-002) | HIGH |
   | API reference, parameter tables, stable/beta split | Confidence-Based (OD-004) | HIGH |
   | Hub page, overview, landing with links outward | Spatial/Map (OD-005) | HIGH |
   | Mixed content, multiple modalities | Creative/Emergent (OD-006) | MEDIUM |
   | None of the above fit cleanly | **DISCOVERY CANDIDATE** | LOW -- requires Level 3 engagement |

2. **Density Profile.** Read the page and chart its current information density:
   - Where is it DENSE (code blocks, tables, parameter lists)?
   - Where is it SPARSE (introductions, transitions, whitespace)?
   - What is the dominant rhythm? (constant, crescendo, pulse, flat?)
   - Does the page have BREATHING ROOM or is it a wall?

3. **Component Inventory.** Count and categorize what the page currently contains:
   - How many code blocks? How long?
   - How many callout-like elements (notes, warnings, tips)?
   - How many decision points or comparison tables?
   - How many images, diagrams, or interactive elements?
   - What is the prose-to-component ratio?

4. **Reading Flow Analysis.** How does a reader's eye actually move through this page?
   - Is there a natural F-pattern (scan left, drift right)?
   - Is there a Z-pattern (alternating content blocks)?
   - Is it linear top-to-bottom (scroll-dependent)?
   - Are there navigation anchors (TOC, section links)?

5. **Page Character Assessment.** Give the page a personality:
   - Is it AUTHORITATIVE (reference docs, API specs)?
   - Is it PEDAGOGICAL (tutorials, guides)?
   - Is it EXPLORATORY (concept explanations, architecture overviews)?
   - Is it OPERATIONAL (troubleshooting, deployment, configuration)?
   - What MOOD should a reader be in after reading it?

**Output:** A Page Analysis Card (compact, ~20 lines) that captures all five dimensions. This card IS the input to Phase B.

**Key insight from R5:** The first component on a page sets its TONE (Principle S3). Understanding what tone the page SHOULD have is the primary purpose of Phase A. A page whose first component is an Info Callout says "let me orient you." A page starting with Code Snippet says "you already know what this is." Phase A determines which opening is correct.

---

### Phase B: PATTERN SELECTION -- "Which Patterns Fit?"

**Purpose:** Map the Page Analysis Card to the design system's validated vocabulary. This is where the PATTERN-INDEX.md and accumulated identity earn their keep.

**Inputs:**
- Page Analysis Card (from Phase A)
- PATTERN-INDEX.md (the 5-step selection guide)
- ACCUMULATED-IDENTITY-v2.md (constraints and findings)

**Process:**

The 5-step selection from PATTERN-INDEX already exists and is excellent. Phase B operationalizes it:

1. **Select Organizational Pattern.** Use the Content Type Classification from Phase A:

   | Classification | OD Pattern | DD Density | AD Axis |
   |---------------|------------|------------|---------|
   | Task-Based | OD-003 | ISLANDS + BOOKENDS | Bento Grid |
   | Conversational | OD-001 | PULSE + TIDAL | Z-Pattern |
   | Narrative | OD-002 | CRESCENDO | F-Pattern |
   | Confidence-Based | OD-004 | GEOLOGICAL + CRESCENDO | Spiral |
   | Spatial/Map | OD-005 | WAVE + ISLANDS | Choreography |
   | Creative/Emergent | OD-006 | ALL (FRACTAL primary) | Compound |

2. **Handle Hybrid Pages.** Most real pages are NOT pure archetypes. They are hybrids:
   - A tutorial (Task-Based) with a conceptual introduction (Narrative) and API reference section (Confidence-Based)
   - A getting-started guide (Narrative + Task-Based) with troubleshooting (Conversational)

   **The rule from AD-F-024:** Compound is SEQUENTIAL, not simultaneous. Each SECTION of a hybrid page commits to ONE pattern. The page as a whole may use Compound axis (multiple patterns through scrolling time), but each viewport-sized chunk uses exactly one.

   **The transition grammar from AD-F-025:**
   - Smooth transitions (same equivalence mechanism): Z-to-F, Bento-to-Choreography
   - Bridge transitions (need intermediary): Z-to-Bento, F-to-Spiral -- use Choreography as universal bridge
   - Breathing transitions (need 48px+ gap): anything involving Spiral

3. **Check for Level 3 Extension.** If the page's content type is NOT covered by any of the six organizational patterns, the migrator must go to Level 3 engagement:
   - Read the provenance chain for the CLOSEST pattern
   - Understand the REASONING (not just the rule)
   - Derive a new application consistent with the chain
   - Document the extension as a discovery (Phase F)

4. **Verify Soul Compliance Feasibility.** Before proceeding, check that the selected patterns do not create impossible constraints:
   - Will the content support border-radius: 0 everywhere?
   - Are there existing rounded elements (progress bars, badges) that need redesign?
   - Are there shadows that serve a structural purpose (e.g., dropdown overlays)?

**Output:** A Pattern Selection Record listing the OD + DD + AD triplet for each page section, plus any hybrid transition grammar requirements.

**Critical insight from OD-F-005:** Organization IS Density. The organizational pattern AUTOMATICALLY implies the density rhythm. You do not layer density "on top of" organization -- the organizational structure IS the density structure. This means Phase B is really selecting ONE thing (attention topology) expressed through three lenses.

---

### Phase C: COMPOSITION DESIGN -- "How Do Selected Patterns Combine?"

**Purpose:** Before building, design the page's component choreography. This is where R5 Combination Theory and the combination-rules.md govern behavior.

**Inputs:**
- Pattern Selection Record (from Phase B)
- R5-COMBINATION-THEORY.md (39 findings on combination)
- combination-rules.md (4 rules: velocity, temperature, weight, spacing)
- Component Properties Model (velocity/temperature/weight for each component)

**Process:**

1. **Map Content to Components.** For each section of the page:
   - What KortAI components does this content naturally map to?
   - Does this paragraph become prose, an Info Callout, or an Essence Callout?
   - Does this code example become a Code Snippet, or a Core Abstraction (principle + code)?
   - Does this comparison table become a Decision Matrix, or a Reasoning Component?

2. **Apply the 4 Combination Rules:**
   - **Rule 1 (Velocity):** Never stack same-velocity. If you have Code Snippet (SLOW) followed by Reasoning (SLOW), insert a FAST component (Tip Callout) between them.
   - **Rule 2 (Temperature):** Flow Warm -> Neutral -> Cold. Don't follow Tip (Warm) directly with Gotcha (Cold). Insert a neutral buffer.
   - **Rule 3 (Weight):** Intersperse Heavy with Light. Code Snippet (Heavy) -> Info Callout (Light) -> Decision Matrix (Heavy).
   - **Rule 4 (Spacing):** Tight coupling (8-16px) for related components. Standard (24-32px) between topics. Section break (48-64px) between major shifts. Recovery (64-80px) after dense clusters.

3. **Select a Combination Recipe.** R5 provides 6 pre-validated recipes:
   - Quick Reference: Info -> Code -> Tip
   - Deep Dive: Info -> Essence -> Core Abstraction -> Code -> Gotcha -> Task
   - Decision Guide: Info -> Decision Matrix -> Reasoning -> Task
   - Troubleshooting: Gotcha -> Decision Matrix -> Code -> Task -> Tip
   - Tutorial Section: Info -> Task -> Code -> Tip -> Code -> Gotcha -> Challenge
   - Architecture Overview: File Tree -> Core Abstraction -> Decision Matrix -> Tip

   Most page SECTIONS map to one of these recipes. The page as a whole may sequence multiple recipes.

4. **Design the Density Wave.** Plan the page's density profile:
   - Start LOW (orientation, Info Callout or prose)
   - Build to HIGH (code blocks, technical detail)
   - Release to LOW-MED (summary, callout)
   - Build again if the page continues

5. **Apply Fractal Self-Similarity (DD-F-006).** Verify the composition exhibits the same rhythm at all 5 scales:
   - Navigation scale: does the page's TOC reflect the dense/sparse rhythm?
   - Page scale: do sections alternate between dense and sparse?
   - Section scale: does each section have intro(sparse) / detail(dense) / summary(sparse)?
   - Component scale: does each component have label(sparse) / body(dense)?
   - Character scale: does code have comments(sparse) / logic(dense)?

6. **Check Anti-Patterns.** Scan the composition for:
   - Callout Cacophony: more than 2 consecutive callouts
   - Code Wall: consecutive code blocks without commentary
   - Decision Paralysis: multiple Reasoning Components without resolution
   - Orphaned Heavy Components: Core Abstraction without follow-up decompression
   - Temperature Whiplash: warm -> cold -> warm rapid oscillation
   - Missing Context Start: section opening with Code Snippet without orientation
   - Anxiety Ending: section ending on Gotcha without resolution

**Output:** A Composition Blueprint -- a wireframe-level plan showing every component in order, with density markers, spacing values, and anti-pattern checks.

---

### Phase D: BUILD -- "Reshape the Page"

**Purpose:** Execute the Composition Blueprint. Convert the existing page content into KortAI-compliant output.

**Inputs:**
- Composition Blueprint (from Phase C)
- Existing page content
- Token values (geometry, colors, typography, spacing -- from tokens/)
- Component specifications (from components/OVERVIEW.md)

**Process:**

1. **Apply Token Foundation:**
   ```css
   border-radius: 0;
   box-shadow: none;
   background: #FEF9F5;
   --color-primary: #E83025;
   font-family: 'Inter', system-ui, sans-serif;
   line-height: 1.7;
   ```

2. **Convert Components:** Follow the migration-guide.md conversion patterns:
   - Generic alerts -> KortAI callouts (2-zone: label + body + 4px left border)
   - Code blocks -> KortAI Code Snippets (dark background, sharp corners, copy button)
   - Blockquotes -> Essence Callouts (serif italic, warm accent)
   - Comparison tables -> Decision Matrices or Reasoning Components
   - Step lists -> Task Components (square step indicators)

3. **Apply Axis Layout:** Implement the selected AD pattern:
   - Z-Pattern: alternating left/right content blocks with diagonal eye flow
   - F-Pattern: strong left spine with progressive typography compression
   - Bento Grid: discrete cells with gap-as-ocean
   - Spiral: golden ratio nesting with depth encoding
   - Choreography: hub-spoke with directional density
   - Compound: sequential pattern transitions through scroll

4. **Implement Spacing System:**
   - Recovery breathing (64-80px) after dense sections
   - Section breaks (48-64px) between major topics
   - Standard gaps (24-32px) between components
   - Tight coupling (8-16px) between related components

5. **Apply Typography Hierarchy:**
   - Display headings: Instrument Serif
   - Body text: Inter, 16-18px base
   - Code: JetBrains Mono
   - Essence/philosophy content: Instrument Serif italic
   - Callout labels: 10px uppercase
   - h3 elements: italic

**Build Mode:** The existing migration-guide.md covers the CSS-level build well. Phase D in this pipeline adds the COGNITIVE layer -- not just "make the CSS correct" but "make the reading experience match the composition blueprint."

**Output:** The migrated page (HTML/TSX/MDX).

---

### Phase E: PERCEPTUAL AUDIT -- "Does It Look Right?"

**Purpose:** Verify the migrated page is not just technically compliant but PERCEPTUALLY correct. This is Level 4 engagement (Validation).

**Inputs:**
- Migrated page (from Phase D)
- Soul Pieces (5 non-negotiable truths)
- ACCUMULATED-IDENTITY-v2.md (what "right" feels like)
- Original page (for comparison)

**Process:**

1. **Soul Compliance Check (Binary -- PASS/FAIL):**
   - border-radius: 0 everywhere? YES/NO
   - box-shadow: none everywhere? YES/NO
   - No filter: drop-shadow()? YES/NO
   - Correct font families? YES/NO
   - Callout family DNA (2-zone + 4px left)? YES/NO
   - No animated z-movement? YES/NO
   - opacity: 1 on all elements? YES/NO

2. **Density Pattern Verification:**
   - Does the page follow its selected density pattern?
   - Are the 5 fractal scales present?
   - Is there recovery breathing after dense sections?
   - Are there no more than 2 callouts per viewport?

3. **Combination Rule Verification:**
   - No same-velocity stacking?
   - Temperature flows correctly?
   - Weight is balanced?
   - Spacing matches semantic proximity?

4. **The Bootstrap Test:**
   > "Could this exist in a Bootstrap/Tailwind/Material project without modification?"
   > If YES = FAIL. The soul is compromised.

5. **The Squint Test:**
   - Squint at the page. What do you see?
   - Dense blocks and sparse breathing? (GOOD)
   - Uniform gray soup? (BAD -- no density variation)
   - Floating elements with depth? (BAD -- shadows or rounded corners)
   - Sharp, editorial, confident? (GOOD)

6. **Comparison Audit:**
   - Compare against validated explorations (DD-006, OD-006, AD-006 are crown jewels)
   - Does the migrated page have the same editorial quality?
   - Would it look like it belongs in the same family?

7. **Before/After Assessment:**
   - What was LOST from the original? (Any critical functionality removed?)
   - What was GAINED? (Better reading flow? Clearer hierarchy? More personality?)
   - Is the migrated version BETTER for the reader, or just more compliant?

**Output:** An Audit Report with PASS/FAIL for soul, density, combination, and perceptual checks. Any FAIL triggers a return to Phase D for fixes.

---

### Phase F: DISCOVERY DOCUMENTATION -- "What Was LEARNED?"

**Purpose:** This is the phase that makes migration COMPOUND. Without it, each page is an isolated event. With it, each page teaches the next page.

**Inputs:**
- All prior phases for this page
- Existing discoveries from previous pages

**Process:**

1. **New Findings.** Did this page reveal anything new?
   - A content type that does not map cleanly to the 6 OD patterns?
   - A component combination that works better than predicted?
   - A density rhythm that emerged naturally and was not planned?
   - An axis pattern that fit unexpectedly well (or poorly)?
   - A soul piece that was generative (the constraint CREATED the solution)?

2. **Pattern Refinements.** Did applying the pattern to real content surface adjustments?
   - The CRESCENDO pattern works for tutorials but needs a PLATEAU in the middle for practice sections
   - The Bento Grid works for tasks but small task clusters (2-3 items) create awkward cells
   - The Z-Pattern works for conversational content but breaks down for very short Q&As

3. **Anti-Pattern Discoveries.** Did building this page surface new anti-patterns not in the registry?
   - Something that looked good in the blueprint but felt wrong when built
   - A combination that is technically rule-compliant but perceptually jarring
   - A density pattern that works at section scale but fails at page scale

4. **Process Improvements.** Did the migration process itself need adjustment?
   - Was the Phase A classification too rigid?
   - Was the Phase B pattern selection too mechanical?
   - Did Phase C miss a combination rule?
   - Did Phase D require techniques not in the migration guide?

**Output:** A Consumption Receipt and Discovery Log entry. Format follows the provenance chain pattern:

```markdown
## CONSUMPTION RECEIPT: [Page Name]

### Research Applied
| Finding ID | Where Applied | How |
|------------|---------------|-----|
| DD-F-006 | All 5 scales | Fractal self-similarity verified |
| OD-F-003 | Q&A sections | Q&A as natural PULSE generator |

### New Discoveries
| ID | Discovery | Severity | Forward Impact |
|----|-----------|----------|----------------|
| MIG-F-001 | [what was learned] | [H/M/L] | [what should change] |

### Pattern Notes
- [Any refinements to existing patterns]

### Process Notes
- [Any changes to the migration pipeline]
```

**This is where migration generates OUTBOUND FINDINGS -- just like DD generated DD-F findings and OD generated OD-F findings.** The migration phase generates MIG-F findings that flow back into the design system, potentially refining patterns, adding anti-patterns, or extending the vocabulary.

---

## Part 2: Will Different Pages Look Different? (The Variety Question)

**YES -- and this is by design, not by accident.**

The design system provides a VOCABULARY, not a TEMPLATE. Two pages using different patterns will look fundamentally different:

| Page Type | OD Pattern | DD Density | AD Axis | Character |
|-----------|-----------|-----------|---------|-----------|
| API Reference | Confidence-Based | GEOLOGICAL | Spiral | Dense, stratified, expert-friendly |
| Getting Started | Narrative | CRESCENDO | F-Pattern | Sparse opening, builds momentum |
| Troubleshooting | Conversational | PULSE | Z-Pattern | Quick rhythm, alternating Q&A |
| Architecture Overview | Spatial/Map | WAVE + ISLANDS | Choreography | Hub-spoke, exploratory |
| Tutorial | Task-Based | ISLANDS | Bento Grid | Discrete steps, grid layout |
| Concept Guide | Creative/Emergent | ALL | Compound | Rich, multi-modal, editorial |

**What stays CONSTANT across all pages:**
- Soul pieces (sharp edges, serif wisdom, family DNA, flat design, square procedures)
- Color palette (red + cream + near-black)
- Typography system (Instrument Serif / Inter / JetBrains Mono)
- Fractal self-similarity at 5 scales
- Component specifications (callout structure, code block style)
- The editorial "feel" -- the Unhurried Editor personality

**What VARIES across pages:**
- Organizational structure (6 patterns)
- Density rhythm (6 patterns, composable)
- Axis layout (6 patterns + compound)
- Component selection and sequencing (per content needs)
- Spacing and breathing (per density pattern)
- Reading flow (F-pattern, Z-pattern, spiral, etc.)

**The variety is BOUNDED variety.** Every page looks different, but every page feels like it belongs to the same family. This is Soul Piece #3 (Family DNA) at the page scale: same structural DNA, different personalities.

**Analogy:** Think of a magazine like The Economist. Every article looks different -- feature spreads, data visualizations, short columns, photo essays. But they all unmistakably belong to the same publication. That is what bounded variety means for KortAI.

---

## Part 3: Will There Be Emergence? (The Discovery Question)

**YES -- and emergence is the most valuable output of migration.**

Emergence happens when applying validated patterns to real content reveals things the patterns alone could not predict. The design system was built on EXPLORATIONS (HTML files testing hypotheses). Real documentation pages are not explorations -- they carry actual information for actual readers. The encounter between pattern and content is where discoveries live.

### Where Emergence Will Happen

1. **Hybrid Content Types.** Real pages are rarely pure archetypes. A "Getting Started" page is part Narrative (story arc), part Task-Based (steps), part Conversational (FAQ at the bottom). The transition grammar (AD-F-025) theorizes how to handle this, but real pages will test those theories.

2. **Content-Pattern Tension.** Some content will resist its pattern. A troubleshooting guide might have too many decision branches for Conversational + PULSE. The tension between content and pattern is where new organizational insights emerge -- just as DD-F-006 (FRACTAL) emerged from testing density hypotheses.

3. **Component Combinations Not Yet Tested.** R5 Combination Theory has 39 findings and 6 recipes, but CD has not yet run. Migration will IMPLICITLY test component combinations at scale. Every page is a mini-CD experiment.

4. **Scale Effects.** Validated explorations are standalone HTML files. Migrated pages exist within a SITE -- with navigation, shared headers, cross-page links. The 5th fractal scale (navigation) has been theorized but never tested in a real multi-page context.

5. **The Soul as Generative Force.** AD-004 (Spiral) proved that soul constraints do not just LIMIT -- they GENERATE. border-radius: 0 forced angular spirals, which turned out to BE geological stratification. Real pages will encounter more moments where constraints generate unexpected solutions.

### What Emergence Looks Like

Emergence is NOT failure. It is the design system learning from real application. Examples:

- "The CRESCENDO pattern needs a PLATEAU variant for pages with mid-section practice exercises" -- this is a **pattern refinement** that enriches DD.
- "Code Snippet + Reasoning Component is a powerful pair not covered in R5 recipes" -- this is a **new combination recipe** that enriches CD.
- "The F-Pattern axis breaks down for pages shorter than 800px of content" -- this is a **constraint boundary** that refines AD.
- "API reference pages need a 7th organizational pattern: TABULAR" -- this is a **pattern extension** that enriches OD.

Each discovery feeds back through Phase F into the design system's body of knowledge.

---

## Part 4: Should Migration Use Agent Teams? (The Execution Question)

**YES -- but with a specific topology.**

### Per-Page Team Structure (Recommended)

For a single page migration, the minimum viable team is **1 agent doing all 6 phases sequentially.** This is sufficient for straightforward pages with clear content types.

For complex or important pages, a **3-agent team** is recommended:

| Role | Phases | Why |
|------|--------|-----|
| **Analyst** | A + B + C | Reads the page, classifies it, selects patterns, designs composition. This is the THINKING role. |
| **Builder** | D | Executes the composition blueprint. Converts content, applies tokens, implements layout. This is the MAKING role. |
| **Auditor** | E + F | Verifies perceptual quality, runs soul compliance, documents discoveries. This is the JUDGING role. |

**Why three roles, not one?** The Two-Instance Pattern from metacognition analysis: continuation bias prevents self-revision. An agent that designs a composition will defend it during audit. Separating the roles breaks the bias.

### Batch Migration Team Structure (Recommended)

For migrating multiple pages:

```
Lead (orchestrator, zero building)
  |
  +-- Page Team 1 (Analyst + Builder + Auditor)
  +-- Page Team 2 (Analyst + Builder + Auditor)
  +-- Page Team 3 (Analyst + Builder + Auditor)
  |
  +-- Weaver (reads Phase F outputs, synthesizes cross-page discoveries)
```

- **Lead** assigns pages to teams, tracks progress, handles inter-page dependencies (e.g., "this page links to that page, they should use compatible axis patterns")
- **Page Teams** execute the 6-phase pipeline per page
- **Weaver** reads all Discovery Documentation (Phase F) and synthesizes cross-page findings. The Weaver is what makes batch migration COMPOUND -- without it, each team's discoveries stay siloed.

**Constraints from prior experience (MEMORY.md lessons):**
- Per-file ownership eliminates contention. Each Page Team owns exactly one page.
- Weaver role is proven (validated in OD audit, OD fix, AD build). Keep it.
- Lead stays THIN: zero building, zero Playwright, orchestrate only.
- Workers MUST write files before returning. File-writing emphasis in ALL prompts.
- Sequential verification (programmatic then visual) prevents Playwright contention.

### Team Size Scaling

| Pages to Migrate | Recommended Topology |
|-----------------|---------------------|
| 1-3 | Single agent, all 6 phases sequentially |
| 4-10 | Lead + 2-3 Page Teams + Weaver |
| 11-30 | Lead + Captains (groups of 3-4 Page Teams) + Weaver |
| 30+ | Hierarchical: Lead -> Captains -> Page Teams -> Weaver cascade |

---

## Part 5: How Does the Hybrid Model Work? (Settled Vocabulary + Per-Page Discovery)

The hybrid model is the core theoretical contribution of this design. Here is how it works.

### What Is Settled (the Vocabulary)

Everything that has been validated through 4 stages of exploration is **settled vocabulary:**
- 5 soul pieces
- 6 CSS-locked rules
- 6 density patterns (DD-F-001 through DD-F-006)
- 6 organizational patterns (OD-F-001 through OD-F-013)
- 6 axis patterns (AD-F-001 through AD-F-028)
- 4 combination rules (velocity, temperature, weight, spacing)
- 6 combination recipes (from R5)
- Anti-pattern registry
- Transition grammar (5x5 matrix)
- Component specifications

This vocabulary is APPLIED, not questioned. A migrator does not ask "should edges be sharp?" -- that question is settled. They ask "which organizational pattern fits THIS content?"

### What Is Discovered (the Per-Page Learning)

Per-page discovery happens at the INTERSECTION of settled vocabulary and specific content:
- How does this content TYPE map to the vocabulary?
- Does the mapping work cleanly, or does the content resist?
- What does resistance reveal about the vocabulary's boundaries?
- What new combinations emerge from applying vocabulary to real content?

### The Hybrid Cycle

```
VOCABULARY (settled, stable)
     |
     v
PAGE ENCOUNTER (apply vocabulary to content)
     |
     v
DISCOVERY (what emerged from the encounter?)
     |
     +-- CONFIRMATION: vocabulary works as expected (most pages)
     |       -> no change to vocabulary
     |
     +-- REFINEMENT: vocabulary works but needs nuance (some pages)
     |       -> minor update to vocabulary (e.g., pattern variant)
     |
     +-- EXTENSION: vocabulary insufficient, new pattern needed (rare)
     |       -> major addition to vocabulary (e.g., new OD pattern)
     |
     +-- CHALLENGE: vocabulary prediction contradicted by reality (very rare)
             -> potential revision (like DD-F-012 elevation from "serves" to "IS")
```

### The Compounding Mechanism

Each page migration INCREASES the vocabulary's effective power:
- Page 1 migrated with pure vocabulary application
- Page 5 migrated with vocabulary + 3 refinements from pages 1-4
- Page 15 migrated with vocabulary + 8 refinements + 1 extension
- Page 50 migrated with vocabulary + 20 refinements + 3 extensions + 2 new recipes

This is the same compounding pattern that made DD -> OD -> AD -> CD work. Research begets findings. Findings beget constraints. Constraints beget explorations. Explorations beget more research. Migration continues this chain.

### What Prevents Vocabulary Drift?

The soul pieces are LOCKED. The token values are LOCKED. The provenance chain is IMMUTABLE. Discoveries flow FORWARD, not backward. A migration discovery does not retroactively change DD-F-006 -- it creates a new MIG-F finding that extends it.

This is the "complexity ratchet" identified in metacognition analysis, but here it is a feature: the vocabulary only grows, never shrinks. The risk of bloat is real, but the mitigation is that MIG-F findings go through the same validation (perceptual audit, scoring, provenance) that DD-F and OD-F findings went through.

---

## Part 6: What Does a Migrated Page Look Like? (Before vs After)

### Conceptual Before/After

**BEFORE (typical docs-spa page):**
- Generic markdown rendering
- Default spacing (uniform throughout)
- No density variation (same visual weight everywhere)
- Standard callout boxes (rounded corners, colored backgrounds, shadows)
- Code blocks with default styling
- No axis pattern (linear scroll, no eye flow design)
- No component choreography (random sequencing)
- No identity -- could be any documentation site

**AFTER (KortAI-migrated page):**
- Editorial layout with intentional density rhythm
- Sharp edges throughout -- feels like a specification, not a blog post
- Warm cream background (#FEF9F5) -- reads like a premium publication
- Serif italic for wisdom content (Essence Callouts, Core Abstractions)
- Density BREATHES -- dense code sections followed by 64-80px recovery zones
- Callouts with 4px left accent and 2-zone structure (label + body)
- Selected axis pattern creating intentional eye flow
- Component sequence following velocity/temperature/weight rules
- Fractal self-similarity visible at all 5 scales
- IDENTITY -- unmistakably KortAI, would fail the Bootstrap Test

### The Transformation Is Not Just Visual

The deepest difference is COGNITIVE:
- **Before:** The page presents information. The reader extracts meaning.
- **After:** The page ORGANIZES information by its cognitive function. Dense-where-dense, sparse-where-sparse. Fast components (callouts) between slow components (code). Warm tone flowing to neutral to cold. The page HELPS the reader's brain process the information by matching visual density to cognitive density.

This is OD-F-005 made real: Organization IS Density. The migrated page does not have a density pattern layered on top of an organizational pattern. The organizational structure IS the density structure. The reader does not perceive "density" or "organization" separately -- they perceive a page that BREATHES correctly, where the hard parts feel hard and the easy parts feel easy, where warnings interrupt and wisdom pauses.

### The Quality Bar

A migrated page must:
1. Pass all soul compliance checks (binary: PASS/FAIL)
2. Exhibit its selected density pattern clearly
3. Follow combination rules (velocity, temperature, weight, spacing)
4. Show fractal self-similarity at 5 scales
5. Fail the Bootstrap Test (must NOT look generic)
6. Feel like it belongs in the same family as DD-006, OD-006, AD-006
7. Be BETTER for the reader than the original (not just more compliant)

Point 7 is the ultimate test. Compliance without improvement is mechanical application. The soul pieces exist because they make the documentation BETTER -- sharper, more authoritative, more trustworthy. If a migrated page is compliant but WORSE for the reader, something went wrong in Phase B or Phase C.

---

## Part 7: Open Questions for CD and Migration Planning

1. **Should CD complete before migration begins?** CD would validate component combination recipes empirically (the way DD validated density and OD validated organization). Migration without CD means using R5 theoretical recipes without empirical validation. The risk is LOW because R5 recipes are grounded in research, but the quality ceiling is higher with CD-validated recipes.

2. **How many pages should be migrated in a pilot batch?** Recommend 3-5 pages representing different content types (one pure Task-Based, one pure Narrative, one hybrid). The pilot generates enough MIG-F findings to validate and refine the pipeline before scaling.

3. **Should migration create new HTML explorations or modify existing MDX/TSX?** The design system was built through HTML explorations (standalone artifacts). Real pages are MDX files rendered by Next.js. The gap between HTML exploration and MDX page is a separate technical challenge.

4. **What is the provenance model for migrated pages?** Each migrated page should have an inline threading header citing which findings were applied. This makes every page a node in the provenance graph.

5. **How does navigation-scale fractal self-similarity work across pages?** The 5th scale (navigation) has been validated within individual explorations but not across a multi-page site. Migration should explicitly test whether the site-wide navigation reflects the dense/sparse rhythm.

---

## Summary

The per-page migration process is a 6-phase pipeline:

```
A: Analyze -> B: Select -> C: Compose -> D: Build -> E: Audit -> F: Document
     |                                                                |
     +---- settled vocabulary applied at each step -------------------+
     |                                                                |
     +---- discoveries flow forward from F to next page's A ----------+
```

Each phase has distinct inputs and outputs. The pipeline is sequential within a page but parallelizable across pages. The key innovation is Phase F -- the discovery documentation that makes migration COMPOUND. Without it, you are applying patterns. With it, you are growing the design system's effective vocabulary with every page migrated.

The hybrid model works because the vocabulary is LARGE ENOUGH to cover most cases (18 validated patterns across 3 dimensions, plus combination rules and recipes) but HONEST ENOUGH to admit that real content will surprise it. The design system's identity is not threatened by surprises -- it is ENRICHED by them, the same way DD was enriched by OD and OD was enriched by AD. Migration is the next stage in the chain, and it continues the compounding that made everything before it valuable.
