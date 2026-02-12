# MIGRATION SYNTHESIS: What This Actually Looks Like

**Synthesized from:** 9 research files (~3,100 lines total)
**Sources:** THE KORTAI DESIGN MIND (README.md), BACKBONE.md, PATTERN-INDEX.md, migration-guide.md, HANDOFF-AD-TO-CD.md, CD-SYNTHESIS-BRIEFING, ACCUMULATED-IDENTITY-v2, R5-COMBINATION-THEORY, combination-rules.md, plus 75 docs-spa page analysis
**Date:** 2026-02-11

---

## 1. THE SHORT ANSWER

Yes, every page will look different. Not because someone decides to make them different, but because the design system's core discovery -- that axis geometry IS organization IS density (AD-F-023) -- means that different content types *mathematically produce* different layouts, rhythms, and reading experiences. A tutorial and an API reference will look as different from each other as a magazine feature spread looks from a data table -- but they will both unmistakably feel like KortAI. The five soul pieces (sharp edges, archivist serif, family DNA, no shadows, square signals) are the family resemblance; the 20 validated patterns are the individual personalities. You will not be looking at 75 copies of the same page. You will be looking at 75 siblings who share DNA but have distinct faces.

Between where you are now and that reality, there are 8 phases. CD is the next one. But CD alone is not enough -- there are 5 phases between CD completion and the start of migration that nobody had planned. The good news: these phases are well-defined, total roughly 18-25 hours of agent work, and their existence is the reason you CAN freeze the design system before migration starts.

---

## 2. YES, EVERY PAGE WILL LOOK DIFFERENT -- Here's Why

### The Mechanism: One Decision, Three Outcomes

The design system's crown jewel discovery is the 3-way equivalence (AD-F-023, ATTENTION TOPOLOGY): choosing how content is organized automatically determines its density rhythm AND its spatial geometry. These are not three separate decisions layered on top of each other -- they are three names for the same phenomenon.

When you classify a page's content type, the entire visual identity cascades:

| Content Type | Organization | Density | Axis Layout | What It Feels Like |
|---|---|---|---|---|
| "How do I do X?" (steps) | Task-Based (OD-003) | ISLANDS + BOOKENDS | Bento Grid | Dense task clusters floating in whitespace, like recipe cards on a counter |
| "How does X work?" (progressive) | Narrative (OD-002) | CRESCENDO | F-Pattern | Sparse opening that builds to dense climax, like a well-paced article |
| "What is X?" (Q&A) | Conversational (OD-001) | PULSE + TIDAL | Z-Pattern | Alternating rhythmic beats, like an interview transcript |
| "Should I use X?" (evaluation) | Confidence-Based (OD-004) | GEOLOGICAL + CRESCENDO | Spiral | Layered strata from certain to uncertain, like a geological cross-section |
| "What's available?" (map) | Spatial (OD-005) | WAVE + ISLANDS | Choreography | Hub-spoke exploration, like a museum floor plan |
| Multiple of the above | Creative/Emergent (OD-006) | ALL (FRACTAL primary) | Compound | Rich multi-modal shifts, like a magazine feature |

### Why "Sameness" Is Architecturally Impossible

Three forces prevent uniform output:

**Force 1: Content classification is the entry point.** A tutorial and an API reference enter the pipeline at different doors and never converge. The tutorial gets CRESCENDO (building momentum); the reference gets ISLANDS (discrete lookup). They can no more look alike than a river can look like a lake.

**Force 2: Fractal self-similarity at 5 scales.** DD-F-006 requires the same sparse/dense rhythm at navigation, page, section, component, and character levels. But what "sparse" and "dense" LOOK LIKE depends on the axis pattern. For F-Pattern (narrative), sparse = generous 64px padding and large headings. For Bento Grid (tasks), sparse = empty grid cells and wide gaps. The same principle, visually different.

**Force 3: Component combination variety.** Even within the same archetype, pages differ based on component count, sequencing, secondary density patterns, and section granularity. R5's combination rules (velocity, temperature, weight, spacing) govern the "choreography" but don't dictate the cast. A tutorial with 6 code blocks and 2 decision matrices looks different from a tutorial with 3 code blocks and 5 callouts -- even if both use CRESCENDO + F-Pattern.

### Concrete Examples: Same Family, Different Faces

**Tutorial A: "Setting Up Authentication" (Task-Based)**
- Bento Grid layout: 6 discrete cells in a 3x2 grid
- Each cell is an "island" -- a self-contained task with code, steps, and a tip
- BOOKENDS framing: dense overview at top, dense verification checklist at bottom
- Eye moves in grid jumps, not linear scroll
- 24px grid gaps create "ocean" between islands
- Square step indicators (Soul #5) signal procedures

**Tutorial B: "Understanding React Server Components" (Narrative)**
- F-Pattern layout: strong left spine with progressively compressed headings
- CRESCENDO rhythm: sparse intro (64px section gaps), dense architecture section (32px)
- 5 Freytag beats: exposition -> rising action -> climax (densest component) -> falling -> resolution
- Eye descends vertically with decreasing horizontal scans
- Instrument Serif (Soul #2) marks philosophical insights
- Typography itself compresses: H2 early, H3/H4 later -- the heading hierarchy IS the crescendo

These two tutorials share sharp edges, the same color palette, the same font trio, the same callout DNA. But they are structured completely differently because their content has different attention topologies. A reader would recognize both as KortAI but would never confuse them.

### What Stays Constant (The Family DNA)

Across every single page, always:
- `border-radius: 0` everywhere -- precision and authority
- `box-shadow: none` everywhere -- flatness and honesty
- Warm cream background (#FEF9F5) -- premium editorial feel
- Sanrok red (#E83025) as the only accent color
- Instrument Serif for wisdom/philosophy content
- Inter for body text, JetBrains Mono for code
- Callouts with 4px left accent border and 2-zone structure (label + body)
- Fractal self-similarity at all 5 scales
- The "Unhurried Editor" personality -- confident, precise, never rushed

### What Varies (The Individual Personality)

Across pages, depending on content type:
- Organizational structure (6 patterns)
- Density rhythm (6 primary + composable secondary patterns)
- Axis geometry (6 patterns + compound)
- Component selection and sequencing
- Spacing system (8px tight to 80px recovery breathing)
- Reading flow direction (F-scan, Z-sweep, spiral drill, grid jump, hub-spoke)
- Typography compression trajectory
- Section count, section length, section transitions

**The analogy:** Think of The Economist magazine. Feature spreads, data visualizations, short columns, photo essays -- every article looks different, but they all unmistakably belong to the same publication. That is bounded variety. That is what KortAI migration produces.

---

## 3. THE COMPLETE POST-CD PIPELINE

### Visual Diagram

```
YOU ARE HERE
     |
     v
PHASE A: CD (Combination Dimension)                    ~4-5 hours
  |  6 explorations testing ALL pattern combinations
  |  15-25 CD-F findings (combination rules validated)
  |  ACCUMULATED-IDENTITY-v3 (TERMINAL identity)
  |  HANDOFF-CD-TO-MIGRATION (pattern selection guide)
  |  CD-006 = pilot migration of REAL content (insurance policy)
  |
  v
PHASE B+D: Component Extraction + Pattern Library       ~6-10 hours
  |  Extract reusable layout primitives from 30 explorations
  |  Build pattern picker decision tree
  |  Create implementation recipes ("copy this structure")
  |  [Token fix: 30 min, can run in parallel]
  |
  v
PHASE F: Content Analysis                              ~2-4 hours
  |  Inventory all 75 docs-spa pages
  |  Classify each by content type
  |  Assign pattern triple (org + density + axis)
  |  Estimate complexity (1=token swap, 2=restructure, 3=major)
  |  Priority ranking for migration order
  |  [Can partially overlap with Phase B+D]
  |
  v
PHASE E: Migration Playbook v2                         ~3-4 hours
  |  Complete migration manual (replaces 265-line CSS guide)
  |  Worked examples for each content type
  |  Decision tree with concrete scenarios
  |  Escalation protocol for edge cases
  |  Post-migration verification (all 4 dimensions)
  |
  v
PHASE G: Pilot Migration                              ~3-5 hours
  |  2-3 real pages migrated end-to-end
  |  Different content types (tutorial, reference, hybrid)
  |  Process validation: does the playbook work?
  |  Timing data: how long per page?
  |  Discovered edge cases
  |
  v
PHASE H: Playbook Refinement                          ~1-2 hours
  |  Playbook v2.1 with pilot learnings
  |  Updated time estimates
  |  Refined escalation protocol
  |
  v
========= NON-NEGOTIABLE BOUNDARY =========
  |  Design system is FROZEN below this line.
  |  No new tokens. No new patterns. No soul changes.
  |  Everything below uses ONLY what exists above.
  v
PHASE I+J: Full Migration + Verification              ~15-40 hours
  |  All 75 pages migrated with per-page provenance
  |  Soul compliance: 0 violations across all pages
  |  Pattern fidelity verified
  |  Fractal self-similarity confirmed at 5 scales
  |  Each page generates a Consumption Receipt
  |  Per-page discovery documentation (MIG-F findings)
  |
  v
DONE -- Full design system adoption achieved
```

### What's NEW in This Pipeline (Not Previously Planned)

Five phases between CD and Migration were not in ANY existing document:

1. **Component Extraction + Pattern Library (B+D)** -- The bridge between "15,000 lines of research prose" and "implementable code." Without this, every migration agent reads finding documentation and tries to translate it into JSX from scratch.

2. **Content Analysis (F)** -- Nobody has inventoried the docs-spa pages. No document says "there are 75 pages, they are type X, they should use pattern Y." You cannot migrate what you haven't catalogued.

3. **Migration Playbook v2 (E)** -- The existing migration-guide.md is 265 lines covering CSS conversion only. After 4 stages of research, migration is a content architecture redesign, not a CSS reskin. The playbook replaces the guide.

4. **Pilot Migration (G)** -- A controlled test of 2-3 pages before committing to all 75. Every prior stage discovered surprises (2px border epidemic, font-loading false positives, traffic-light anti-patterns). Migration will have its own class of surprises. Better to find them on 2 pages than 75.

5. **Playbook Refinement (H)** -- Post-pilot update incorporating real-world learnings.

### Timeline

| Scenario | Total Hours | Sessions (~4-5h each) | Calendar |
|---|---|---|---|
| Optimistic | ~34 hours | 8 sessions | 2-3 weeks |
| Realistic | ~50 hours | 11 sessions | 3-4 weeks |
| Pessimistic | ~68 hours | 15 sessions | 4-6 weeks |

---

## 4. HOW CD SHOULD EVOLVE

### The Core Change: CD Becomes Migration Insurance

CD was originally planned as "component chemistry" -- testing how patterns combine. That remains its core identity. But given the non-negotiable ("don't update the design system during migration"), CD must also become the **last checkpoint** where incompleteness can be discovered and fixed.

### Three Specific Evolutions

**Evolution 1: CD-006 becomes a pilot migration of REAL content.**

CD-001 through CD-005 should remain synthetic (controlled content that isolates combination dynamics). But CD-006 (the crown jewel) should use an actual KortAI documentation page. Reasoning:

- CD-006 is already the most ambitious exploration (target: 39-40/40)
- Prior crown jewels (DD-006=36, OD-006=37, AD-006=38) were all meta-level explorations
- Using real content tests the design system end-to-end against actual messy documentation
- If CD-006 succeeds without requiring design system updates, that PROVES completeness
- If CD-006 fails, the failure happens during CD (where you CAN fix the system), not during migration (where you said you won't)

CD-006 should receive 40-50% of CD's resource budget (up from the typical 25-30%). It is the user's insurance policy.

**Evolution 2: HANDOFF-CD-TO-MIGRATION becomes a playbook, not just a handoff.**

A handoff says "here's what we did and what you need." A playbook says "here's exactly how to do your job." The handoff should include:

1. Pattern Selection Guide -- "Given content type X, use combination Y" for EVERY content type in docs-spa
2. Density Tolerance Table (validated) -- Updated with CD empirical results
3. Combination Rules (validated) -- R5's 39 findings, each marked VALIDATED/EXTENDED/OVERWRITTEN/DEFERRED
4. Known Limitations -- What the design system does NOT cover (critical for preventing "surprise gaps")
5. Completeness Certificate -- Formal statement: "The design system covers N% of anticipated migration scenarios"
6. CD-006 Reference Implementation -- "This is what a fully-patterned real page looks like"

**Evolution 3: CD adds a Completeness Gate.**

Before CD can declare itself done, it must pass:

```
COMPLETENESS GATE (all must be YES):
[ ] Every component in the design system used in at least one CD exploration
[ ] Every R-5 combination rule validated, extended, or explicitly deferred
[ ] Density tolerance table complete (no "unknown" entries)
[ ] Transition grammar covers all pattern boundaries in CD explorations
[ ] CD-006 pilot migration completed without requiring design system updates
[ ] Known limitations documented with migration workarounds
```

If any checkbox fails, CD is NOT COMPLETE -- even if all 6 explorations score >= 32/40.

---

## 5. WHAT HAPPENS WHEN A REAL PAGE MEETS THE DESIGN SYSTEM

### The Six-Phase Per-Page Pipeline

Every single page goes through this process. It takes 45-90 minutes per page depending on complexity.

#### Phase A: PAGE ANALYSIS -- "What IS This Page?"

Read the page. Understand its content. Classify it.

```
1. Content Type Classification
   "This is a step-by-step tutorial" -> Task-Based (OD-003)
   "This builds understanding progressively" -> Narrative (OD-002)
   "This is a Q&A conversation" -> Conversational (OD-001)
   "This evaluates options by confidence" -> Confidence-Based (OD-004)
   "This is a hub linking to subtopics" -> Spatial/Map (OD-005)
   "This shifts between multiple modes" -> Creative/Emergent (OD-006)
   "None of the above fit cleanly" -> DISCOVERY CANDIDATE (Level 3 engagement)

2. Density Profile -- Chart current information density
   Where is it dense? (code blocks, tables, parameter lists)
   Where is it sparse? (intros, transitions, whitespace)
   What rhythm does it have? (constant, building, alternating, flat)

3. Component Inventory -- Count what exists
   Code blocks: how many, how long?
   Callout-like elements: notes, warnings, tips?
   Decision points, comparison tables?
   Prose-to-component ratio?

4. Reading Flow -- How does the eye move?
   Linear scroll? F-scan? Z-sweep? Grid jumps?

5. Page Character -- What personality should it have?
   Authoritative? Pedagogical? Exploratory? Operational?
```

**Output:** A Page Analysis Card (~20 lines).

#### Phase B: PATTERN SELECTION -- "Which Patterns Fit?"

The 3-way equivalence makes this semi-automatic. Classify content type -> patterns follow:

```
Task-Based     -> ISLANDS + BOOKENDS   + Bento Grid
Conversational -> PULSE + TIDAL        + Z-Pattern
Narrative      -> CRESCENDO            + F-Pattern
Confidence     -> GEOLOGICAL + CRESC.  + Spiral
Spatial/Map    -> WAVE + ISLANDS       + Choreography
Creative       -> ALL (FRACTAL primary)+ Compound
```

For hybrid pages (most real pages ARE hybrid): each SECTION commits to ONE pattern. Sections connect via the transition grammar (AD-F-025): Smooth, Bridge, or Breathing transitions depending on pattern adjacency.

**Output:** A Pattern Selection Record (pattern triple per section + transition grammar).

#### Phase C: COMPOSITION DESIGN -- "How Do Components Combine?"

Map content to specific KortAI components. Apply the 4 combination rules:

1. **Velocity:** Never stack same-velocity. Code Snippet (SLOW) followed by Reasoning (SLOW)? Insert a FAST component (Tip Callout) between them.
2. **Temperature:** Flow Warm -> Neutral -> Cold. Don't follow Tip (warm) directly with Gotcha (cold).
3. **Weight:** Intersperse Heavy with Light. Code Snippet (heavy) -> Info Callout (light) -> Decision Matrix (heavy).
4. **Spacing:** Tight (8-16px) for related. Standard (24-32px) between topics. Section break (48-64px) between shifts. Recovery (64-80px) after dense clusters.

Check against 7 anti-patterns: Callout Cacophony, Code Wall, Decision Paralysis, Orphaned Heavy Components, Temperature Whiplash, Missing Context Start, Anxiety Ending.

**Output:** A Composition Blueprint (wireframe-level component plan with density markers).

#### Phase D: BUILD -- "Reshape the Page"

Execute the blueprint. Convert existing content:

- Generic alerts -> KortAI callouts (2-zone: label + body + 4px left border)
- Code blocks -> KortAI Code Snippets (dark background, sharp corners, copy button)
- Blockquotes -> Essence Callouts (serif italic, warm accent)
- Comparison tables -> Decision Matrices
- Step lists -> Task Components (square step indicators)
- Apply axis layout (F-Pattern, Bento Grid, Z-Pattern, etc.)
- Implement spacing system (recovery breathing after dense sections)
- Apply typography hierarchy (Instrument Serif for display, Inter for body, JetBrains Mono for code)

**Output:** The migrated page (HTML/TSX/MDX).

#### Phase E: PERCEPTUAL AUDIT -- "Does It Look Right?"

Not just "is the CSS correct?" but "does the reading experience match the intent?"

```
Binary Soul Compliance (PASS/FAIL):
  [ ] border-radius: 0 everywhere?
  [ ] box-shadow: none everywhere?
  [ ] No filter: drop-shadow()?
  [ ] Correct font families?
  [ ] Callout family DNA (2-zone + 4px left)?

Density Verification:
  [ ] Selected density pattern is clear?
  [ ] Fractal self-similarity at 5 scales?
  [ ] Recovery breathing after dense sections?
  [ ] Max 2 callouts per viewport?

The Bootstrap Test:
  "Could this exist in a Bootstrap/Material project without modification?"
  If YES -> FAIL. The soul is compromised.

The Squint Test:
  Squint at the page. Do you see dense/sparse breathing? (GOOD)
  Uniform gray soup? (BAD)
  Sharp, editorial, confident? (GOOD)
```

**Output:** Audit Report. Any FAIL returns to Phase D.

#### Phase F: DISCOVERY DOCUMENTATION -- "What Was Learned?"

This is the phase that makes migration COMPOUND. Without it, page 47 teaches nothing to page 48.

```
New Findings:
  - Content types that resist the 6 OD patterns?
  - Component combinations better than predicted?
  - Density rhythms that emerged naturally?
  - Soul pieces that GENERATED solutions (constraints as creativity)?

Pattern Refinements:
  - CRESCENDO needs a PLATEAU variant for practice sections?
  - Bento Grid awkward for very small task clusters?

Anti-Pattern Discoveries:
  - Technically rule-compliant but perceptually jarring combinations?

Output: Consumption Receipt + MIG-F finding entries
```

### The Compounding Effect

Each migration generates outbound findings (MIG-F) -- just like DD generated DD-F and OD generated OD-F:

- Page 1: Pure vocabulary application
- Page 5: Vocabulary + 3 refinements from pages 1-4
- Page 15: Vocabulary + 8 refinements + 1 extension
- Page 50: Vocabulary + 20 refinements + 3 extensions + 2 new recipes

The design system's effective vocabulary GROWS with every page migrated -- not because you're updating the system (the non-negotiable holds), but because each Consumption Receipt documents how existing patterns apply to real content, building a reference library for subsequent pages.

---

## 6. WHERE EMERGENCE AND DISCOVERY HAPPEN

### Emergence Is Not Failure -- It Is the System Learning

The design system was built on explorations (hypothetical HTML files testing hypotheses). Real documentation pages are not explorations. The encounter between validated patterns and real content is where discoveries live.

### Five Specific Points Where Emergence Occurs

**Point 1: Hybrid Content Types.**
Real pages are rarely pure archetypes. A "Getting Started" page is part Narrative (story arc), part Task-Based (steps), part Conversational (FAQ at the bottom). The transition grammar (AD-F-025) theorizes how to handle this, but real pages will test those theories and sometimes prove them incomplete.

*What it looks like:* "The transition grammar says Z-Pattern to Bento Grid is a Bridge transition requiring a Choreography intermediary. But on this page, the content flow makes more sense with a direct cut. We used a 48px breathing gap instead. MIG-F-003: Bridge transitions can be replaced by breathing gaps when content maintains topic continuity across pattern shifts."

**Point 2: Content-Pattern Tension.**
Some content will resist its assigned pattern. A troubleshooting guide classified as Conversational might have too many decision branches for PULSE rhythm. The tension IS the discovery.

*What it looks like:* "The troubleshooting guide has 12 error scenarios, each with 3-4 decision branches. PULSE rhythm (alternating Q&A) becomes monotonous at this scale. MIG-F-007: Troubleshooting pages longer than 8 scenarios should use GEOLOGICAL density (stratified by error severity) rather than PULSE."

**Point 3: Scale Effects.**
Validated explorations are standalone HTML files. Migrated pages exist within a SITE -- with shared navigation, cross-page links, site-wide header. The 5th fractal scale (navigation) has been theorized but never tested in a real multi-page context.

*What it looks like:* "Navigation-scale fractal self-similarity means the sidebar's dense/sparse grouping should mirror the page's internal density. But the sidebar groups pages by category, not by density pattern. MIG-F-012: Site navigation requires its own density analysis independent of individual page patterns."

**Point 4: Component Combinations Not Yet Tested at Scale.**
R5 has 39 findings and 6 recipes. CD will validate these empirically. But migration applies them across 75 pages -- orders of magnitude more variety than 6 CD explorations. New effective combinations will emerge.

*What it looks like:* "Code Snippet followed by Reasoning Component followed by a second Code Snippet creates a 'sandwich' pattern not in R5's recipes. The middle Reasoning explains the diff between the two code blocks. Highly effective for showing before/after patterns. MIG-F-015: ADD 'Diff Sandwich' as Recipe 7."

**Point 5: Soul Constraints as Generative Force.**
AD-004 proved that `border-radius: 0` forced the discovery of angular spirals, which turned out to BE geological stratification. Real pages will encounter more moments where constraints generate unexpected solutions.

*What it looks like:* "The design system has no 'progress bar' component. The obvious solution (rounded bar with gradient fill) violates Soul #1 (sharp edges), Soul #4 (no shadows/gradients). Constraint: make progress indicators with sharp geometry. Solution: segmented progress bar using square cells that fill left-to-right. The segmentation actually communicates discrete task completion better than a smooth bar. MIG-F-019: Soul constraints generated a BETTER progress indicator than the industry default."

### Why Emergence Is a Feature

Emergence is the same compounding mechanism that made DD -> OD -> AD work. Research begets findings. Findings beget constraints. Constraints beget explorations. Explorations beget more research. Migration continues this chain. The design system GROWS more capable through migration -- not by changing its rules, but by accumulating documented applications of those rules.

---

## 7. THE MISSING STEPS WE NEED

### Honest Assessment: 5 Definitely Needed, 1 Already Covered, 2 Nice to Have

**DEFINITELY NEEDED (block quality migration):**

| # | Phase | What's Missing | Why It Matters | Hours |
|---|---|---|---|---|
| 1 | Component Extraction + Pattern Library | No bridge between 15,000 lines of research prose and implementable code. Explorations are standalone HTML; docs-spa is React/Next.js | Without this, every page reinvents pattern implementation from scratch | 6-10 |
| 2 | Content Analysis | No inventory of the 75 docs-spa pages. Nobody knows what content types exist or which patterns apply | You cannot migrate what you haven't catalogued | 2-4 |
| 3 | Migration Playbook v2 | The existing guide is 265 lines covering CSS-only. Migration after 4 research stages is content architecture redesign | Without this, migration is a CSS reskin that wastes all OD/AD/CD research | 3-4 |
| 4 | Pilot Migration | No controlled test exists. Every prior stage discovered surprises | First migration attempt becomes the pilot but with production pressure | 3-5 |
| 5 | Playbook Refinement | Pilot learnings need incorporation | Without this, the same mistakes repeat across all 75 pages | 1-2 |

**ALREADY COVERED (30-minute fix):**

| # | Phase | Status | What Remains |
|---|---|---|---|
| 6 | Token Implementation | globals.css has most tokens; comprehensive audit corrected stale values | Fix 3-4 known contradictions in design-system/src/styles/tokens.css (~30 min) |

**NICE TO HAVE:**

| # | Phase | When It Becomes NEEDED |
|---|---|---|
| 7 | Tooling (CSS linter, scaffolding) | If pilot reveals manual compliance checking is a bottleneck |
| 8 | Training / Knowledge Transfer | If humans (not just Claude agents) will do migration work |

### The Abstraction Cliff

The biggest risk is the gap between design intelligence and implementation. The pipeline has produced 84+ findings, 20 patterns, 5 soul pieces, 4 combination rules, and a 3-way equivalence meta-discovery. This exists as ~15,000 lines of markdown prose and ~30 HTML exploration files. Between that body of knowledge and "a migrated React page," there is a chasm.

**The risk scenario without intermediate phases:**
1. CD completes. Handoff says "apply patterns to real pages."
2. Migration agent opens a real page with 4 h2s, 6 code blocks, 3 callouts, and a file tree.
3. Agent knows it should use CRESCENDO + NARRATIVE + F-PATTERN.
4. Agent does NOT know how to translate "F-PATTERN vertical descent" into React JSX.
5. Agent falls back to "apply soul tokens, keep existing structure."
6. Result: Soul-compliant page that uses 0% of the OD/AD/CD research.

The intermediate phases (extraction, pattern library, playbook, pilot) build the bridge across this cliff. They turn "read 15,000 lines of provenance documentation" into "follow this recipe and apply this template."

---

## 8. GUARANTEEING THE DESIGN SYSTEM IS COMPLETE

### The User's Constraint: "Once migration starts, no updates."

This is achievable, but it requires specific work BEFORE the migration boundary.

### Four Strategies for Guaranteeing Completeness

**Strategy 1: CD-006 as real-content pilot.**
If CD-006 successfully applies the COMPLETE design system to a REAL documentation page at 39-40/40 quality -- without requiring any design system changes -- that PROVES the system handles real content. If the most complex case works, simpler cases follow.

**Strategy 2: Exhaustive content type coverage.**
Before CD finishes, audit every content type in docs-spa. Map each to a validated pattern combination. If a content type exists that no pattern covers, resolve it DURING CD (add exploration, extend a pattern, document a creative workaround) -- not during migration.

**Strategy 3: Component inventory audit.**
List every component in the design system. List every component type that appears in real docs-spa pages. Identify gaps. For each gap: either add during CD or document as a known limitation with a workaround.

**Strategy 4: The Completeness Gate.**
CD cannot declare itself done until ALL of these are true:
- Every component used in at least one exploration
- Every R-5 finding validated, extended, or explicitly deferred
- Density tolerance table complete
- Transition grammar covers all pattern boundaries
- CD-006 pilot succeeded without system updates
- Known limitations documented with workarounds

### The Escape Valve (For When Reality Surprises)

If migration DOES discover a genuine gap despite all preparation:

1. **Document the gap** as MIGRATION-GAP-### finding
2. **Apply best-effort solution** using existing patterns (Level 3 reasoning)
3. **Note for post-migration review** -- not a migration blocker
4. **Do NOT update the design system** -- honor the non-negotiable

This works because the accumulated identity (v3) is designed so agents can make NEW decisions consistent with prior ones, even for situations never explicitly specified. The system provides reasoning, not just rules. When rules don't cover a case, the reasoning still does.

### What "Frozen" Means Precisely

**FROZEN after Phase H:**
- Token values (colors, spacing, typography, geometry)
- Soul pieces (5, bounded)
- Pattern definitions (all 20 across density, org, axis, combination)
- Finding IDs and their meanings
- Convention spec (all sections)
- Anti-pattern registry
- Transition grammar
- ACCUMULATED-IDENTITY-v3

**NOT FROZEN (can evolve during migration):**
- Implementation details (CSS class names, HTML structures)
- Playbook wording and examples
- Content analysis assignments (a page can be re-classified)
- Migration priority order
- Verification checklists (can add items, not remove)
- Provenance documentation format

The distinction: WHAT the system says is frozen. HOW we implement and document it can evolve.

---

## 9. WHAT THE USER SHOULD EXPECT TO SEE

### When You Open a Migrated Tutorial

The first thing you see: a warm cream background (#FEF9F5) with a sparse, generous hero section. An Instrument Serif heading states the tutorial's purpose. Below it, a brief Info Callout with a 4px teal left border orients you: "In this tutorial, you'll learn..."

The page breathes. The opening has 64px gaps between elements -- room to settle in.

As you scroll, the page builds. Code blocks appear. Steps get denser. The 32px gaps between sections compress to 24px. An Essence Callout in serif italic captures the key insight. By the middle of the page, you're in the densest zone: code on the left, explanation on the right, each step's code building on the last.

After the climax (the longest, most complex code block), the page exhales. A 64-80px recovery zone. The resolution section is sparse again -- next steps, links, a brief summary.

The layout is F-Pattern: your eye descends the left spine, scanning headings, then reads rightward into progressively denser content. The density IS the CRESCENDO. The structure IS the narrative arc.

Sharp edges everywhere. No rounded corners, no shadows. It feels like a specification, not a blog post. But it's warm -- cream background, serif accents, generous spacing. Authoritative but not cold.

### When You Open a Migrated API Reference

Completely different. The layout is a Bento Grid -- discrete cells of varying sizes, separated by 24px gaps ("ocean between islands"). Each method gets its own cell. Frequently-used methods get 2x2 cells; simple getters get 1x1.

Inside each cell: a method signature in monospace at the top, a parameter table below, a brief code example at the bottom. Dense, self-contained islands. You can jump to any method without reading the others.

The density is ISLANDS -- dense clusters in sparse whitespace. No crescendo, no narrative arc. This is random-access lookup, not sequential reading.

A 3px structural border defines each method boundary. 1px separator borders between parameters within a method. The border hierarchy IS the information hierarchy. Different border categories (AD-F-014) encode different semantic relationships.

Navigation at the top mirrors the page's group structure -- a fractal echo of the grid below.

### When You Open a Migrated Architecture Overview

Different again. The layout is Choreography -- a central hub (system diagram, directory tree) with spokes radiating to subsections. Each spoke is a deep dive into one architectural component.

The density is WAVE -- sparse hub (wide scan, card grid navigation) flowing into dense spokes (narrow deep-dive, technical detail), then sparse return-to-hub (navigation link back to overview).

The eye moves in a spoke pattern: center -> detail -> center -> detail. Each spoke is a self-contained ISLAND within the WAVE.

You might think you're in a different documentation site. But the sharp edges are there. The serif accents are there. The 4px callout borders are there. The same family, different personality.

### When You Open a Migrated Decision Guide

The layout is a Spiral -- content nesting from broad context (outer ring, sparse) to specific recommendation (inner ring, dense). Established facts live at the outer edge. Uncertain comparisons nest deeper. The recommendation is at the core -- the densest, most confident content.

The density is GEOLOGICAL -- horizontal strata from atmosphere (high-level context) to bedrock (specific implementation steps). Each layer is denser than the one above it.

The spiral is angular (Soul #1: sharp edges), not rounded. Angular nesting turns out to feel like geological cross-sections -- which is exactly what the data represents. This was not planned; it was discovered when the soul constraint forced the solution (AD-F-013).

### The Common Thread

Every page looks different. Every page feels like KortAI. The sharp edges communicate precision. The serif accents communicate wisdom. The density breathing communicates respect for the reader's cognitive state. The fractal self-similarity communicates coherence. The specific patterns communicate "we thought about what YOUR attention needs to do on THIS page."

A reader browsing the migrated documentation would experience what you experience browsing a well-designed magazine: constant variety, constant recognition, constant quality. Not 75 copies. 75 siblings.

---

## 10. THE FULL ROADMAP -- EVERY STEP TO ADOPTION

### Phase A: CD (Combination Dimension)

**Status:** PENDING. Fully planned.
**Effort:** ~18-20 agents, ~4-5 hours
**What it produces:**
- 6 HTML explorations (CD-001 through CD-006)
- CD-006 = pilot migration of REAL content (insurance policy)
- 15-25 CD-F findings (combination rules validated empirically)
- ACCUMULATED-IDENTITY-v3 (TERMINAL identity -- there is no v4)
- HANDOFF-CD-TO-MIGRATION.md (expanded to playbook with pattern selection guide)
- CD-CONVENTION-SPEC.md (FINAL convention spec -- no sections 21+)
- Completeness Gate passed (all boxes checked)

**Key change from original plan:** CD-006 uses real documentation content, HANDOFF becomes a playbook, Completeness Gate added.

**Dependency:** HANDOFF-AD-TO-CD.md (exists and is complete)

---

### Phase B+D: Component Extraction + Pattern Library

**Status:** NOT STARTED. Not previously planned.
**Effort:** ~6-10 agents, ~6-10 hours (2 sessions)
**What it produces:**
- Layout components encoding density patterns (CrescendoSection, IslandsSection, etc.)
- Transition components implementing AD-F-025 (SmoothTransition, BridgeTransition, BreathingTransition)
- Combination recipe templates (R5's validated recipes as copyable HTML/CSS structures)
- Reusable "KortAI page template" with soul-compliant defaults
- Pattern picker decision tree: Content Type -> Pattern Set -> Implementation Template
- Per-pattern documentation with "copy this structure" blocks

**Why this exists:** The explorations are standalone HTML with hand-crafted CSS. The docs-spa is React/Next.js. Without extraction, every migration agent reinvents the pattern implementation from scratch by reading exploration source code. With extraction, they apply pre-built primitives.

**Dependency:** Phase A (needs CD's combination rules for recipe templates)

---

### Phase C: Token Fix (runs in parallel)

**Status:** MOSTLY DONE.
**Effort:** ~30 minutes
**What it does:** Fix 3-4 known contradictions between design-system/src/styles/tokens.css and T1 authority (primary red color, border-radius values, box-shadow values, type scale).

**Dependency:** None (can run any time)

---

### Phase F: Content Analysis

**Status:** NOT STARTED. Not previously planned.
**Effort:** ~3-5 agents, ~2-4 hours
**What it produces:**
- Complete inventory of all 75 docs-spa pages
- Per-page content type classification
- Per-page pattern recommendation (org + density + axis + combination triple)
- Per-page migration complexity estimate (1=simple, 2=moderate, 3=major)
- Migration priority ranking
- Content types that don't fit any validated pattern (must be resolved HERE, not during migration)

**Key finding from research:** The 75 pages currently follow an identical 8-section HTML template. There are really only 3 structural types: overview/master pages (13), deep dive pages (59), and core synthesis pages (3). But migration will differentiate them based on CONTENT TYPE (tutorial, reference, conceptual, etc.), not current structure.

**Dependency:** Phase A (needs CD's pattern vocabulary for assignment). Can partially overlap with Phase B+D (classification can start while library is being built).

---

### Phase E: Migration Playbook v2

**Status:** PARTIAL (265-line CSS guide exists; covers ~10% of what's needed).
**Effort:** ~2-3 agents, ~3-4 hours
**What it produces:**
- Complete 6-phase per-page migration process (Analysis -> Selection -> Composition -> Build -> Audit -> Document)
- Decision tree with worked examples for each content type
- Escalation protocol for edge cases (without requiring design system updates)
- Post-migration verification checklist covering all 4 dimensions (density + org + axis + combination)
- Migration provenance template (Consumption Receipt format)

**Why this replaces the existing guide:** The existing migration-guide.md was written BEFORE OD, AD, and CD. It covers CSS reset and callout conversion. After the 3-way unification discovery, migration is content architecture redesign informed by 84+ findings, not a CSS reskinning exercise.

**Dependency:** Phase B+D (pattern library provides implementation recipes) + Phase F (content analysis provides the page inventory)

---

### Phase G: Pilot Migration

**Status:** NOT STARTED. Not previously planned.
**Effort:** ~3-5 agents, ~3-5 hours
**What it produces:**
- 2-3 fully migrated pages spanning different content types
- One tutorial/narrative, one reference/task-based, one hybrid/creative
- Process validation: does the playbook actually work end-to-end?
- Timing data: how long does a single page migration take?
- Discovered edge cases and refinements

**Team structure:** 3-agent team per page: Analyst (reads + classifies), Builder (implements), Auditor (verifies + documents). Separation breaks continuation bias.

**Dependency:** Phase E (playbook) + Phase F (content analysis tells us which pages to pilot)

---

### Phase H: Playbook Refinement

**Status:** NOT STARTED.
**Effort:** ~1 agent, ~1-2 hours
**What it produces:**
- Playbook v2.1 incorporating pilot learnings
- Updated time estimates based on actual migration effort
- Refined escalation protocol based on actual edge cases
- Updated verification checklist if pilot revealed gaps

**Dependency:** Phase G (pilot results)

---

### === NON-NEGOTIABLE BOUNDARY ===

After Phase H, the design system is FROZEN. Everything below this line uses ONLY what exists above.

---

### Phase I+J: Full Migration + Integrated Verification

**Status:** NOT STARTED.
**Effort:** ~5-15 agents, ~15-40 hours (3-8 sessions)
**What it produces:**
- All 75 docs-spa pages migrated to full KortAI design system compliance
- Per-page provenance documentation (Consumption Receipt citing applied findings)
- Soul compliance: 0 violations across all pages
- Pattern fidelity verified per page
- Fractal self-similarity confirmed at 5 scales per page
- MIG-F findings documenting per-page discoveries

**Team structure for batch migration:**
```
Lead (orchestrator, zero building)
  |
  +-- Page Team 1 (Analyst + Builder + Auditor)
  +-- Page Team 2 (Analyst + Builder + Auditor)
  +-- Page Team 3 (Analyst + Builder + Auditor)
  |
  +-- Weaver (reads Phase F outputs, synthesizes cross-page discoveries)
```

- Lead assigns pages to teams, handles inter-page dependencies
- Page Teams execute the 6-phase pipeline per page
- Weaver synthesizes cross-page MIG-F findings (validated pattern from prior phases)
- Per-file ownership eliminates contention

**Scaling:**
| Pages | Topology |
|---|---|
| 1-3 | Single agent, all 6 phases sequentially |
| 4-10 | Lead + 2-3 Page Teams + Weaver |
| 11-30 | Lead + Captains (groups of 3-4 Page Teams) + Weaver |
| 30+ | Hierarchical: Lead -> Captains -> Page Teams -> Weaver cascade |

**Dependency:** Phase H (refined playbook)

---

### Optional Phase K: Tooling

**Verdict:** NICE TO HAVE. Build only if pilot reveals manual compliance checking is a bottleneck.
**Effort:** ~4-8 hours if built
**What it would produce:** CSS linter, scaffolding generator (`create-kortai-page --pattern CRESCENDO`), visual regression tests

---

### Optional Phase L: Training

**Verdict:** NICE TO HAVE for Claude-only migration. DEFINITELY NEEDED if humans join.
**Effort:** ~4-8 hours if built
**What it would produce:** Condensed training, worked examples, interactive pattern explorers

---

### Summary Timeline

```
Session 1:  CD Phase 0-1 (conventions + first 3 explorations)     ~4h
Session 2:  CD Phase 1-4 (remaining explorations + audit + synth) ~4-5h
Session 3:  Component Extraction + Pattern Library                ~5-6h
Session 4:  Content Analysis + Playbook v2                        ~5-6h
Session 5:  Pilot Migration (2-3 pages) + Playbook Refinement     ~4-5h
            ========= NON-NEGOTIABLE BOUNDARY =========
Session 6+: Full Migration (batched, 3-8 sessions)                ~15-40h
            ==========================================
TOTAL:      ~34-68 hours across 8-13 sessions
```

The critical path is sequential: CD -> Extraction -> Playbook -> Pilot -> Refinement -> Migration. Content Analysis can partially overlap with Extraction. Token fix can happen any time. Tooling and Training (if needed) are parallel to anything after the pilot.

---

*Synthesized from 9 research files totaling ~3,100 lines of analysis.*
*Sources: THE KORTAI DESIGN MIND (README.md 2,365 lines), BACKBONE.md, PATTERN-INDEX.md, migration-guide.md, CD-SYNTHESIS-BRIEFING, ACCUMULATED-IDENTITY-v2, R5-COMBINATION-THEORY, combination-rules.md, 75 page analysis, HANDOFF-AD-TO-CD.md, plus 97 files cross-referenced for migration mentions.*
*All 8 user questions answered directly in sections 1-10.*
