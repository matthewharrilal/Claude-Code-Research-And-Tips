# 10: Pipeline Redefinition — What the Tripod Means for /compose

**Analyst:** analyst-redefinition (Opus)
**Date:** 2026-03-01
**Input:** 01-MASTER-FINDINGS.md, 03-PIPELINE-GAP-ANALYSIS.md, 06-DIMENSIONAL-FUNCTIONAL.md, 08-DIMENSIONAL-ARCHITECTURAL.md, compose/SKILL.md, tension-composition/SKILL.md, design-system/CLAUDE.md
**Task:** Analyze what the Tripod means for a new pipeline definition — how each instrument manifests, what changes, what the builder's experience becomes

---

## 1. The Tripod as an Interlocking System

The tripod is not three independent improvements bolted onto the existing pipeline. It is a single architectural thesis: **the quality of the builder's output is determined by the quality of the builder's input, and the quality of the input is determined by how knowledge reaches the builder, not by how much knowledge exists.**

The three instruments:

1. **Master Execution Prompt** (HOW to consume knowledge) — protocol, sequencing, reading order, findings-production requirement
2. **Research Package** (WHAT to consume) — curated, per-build, implementation-mapped findings
3. **Curation Process** (HOW the package was created) — researcher agent traversing the knowledge graph, judging relevance, mapping implementations

These three are interdependent. Remove any one and the other two degrade:

- **Package without curation** = generic file dump (what the pipeline does today with 7 static files). No agent traverses the knowledge graph, so the "package" is just the same files every time.
- **Curation without execution prompt** = excellent package that the builder reads superficially or in the wrong order. The builder treats the package as background reading rather than as a sequenced execution plan.
- **Execution prompt without package** = sophisticated protocol consuming thin material. The builder follows a rigorous process but has only mechanism names and conviction prose to work with — the current pipeline's exact failure mode.

The exploration era had all three instruments interlocking, though it never named them as a tripod. Agent-0C curated bespoke packages (instrument 3 producing instrument 2). The AD Master Execution Spec and HANDOFF protocols provided reading order and production requirements (instrument 1). The builder consumed the package according to the protocol and produced findings (completing the loop).

The current /compose pipeline has a skeleton of instrument 1 (the builder instructions in the compose skill, lines 94-124) and completely lacks instruments 2 and 3. The conviction brief from TC is the closest analog to a package, but it operates on a different axis — experiential conviction rather than implementation-mapped knowledge. It tells the builder WHAT TO FEEL, not WHAT TO DO WITH WHAT.

---

## 2. What the Pipeline Needs to BECOME

### The Fundamental Shift

The pipeline needs to shift from a **context-management architecture** to a **knowledge-curation architecture**. This is not an incremental upgrade. It is a reorientation of the pipeline's central question:

| | Current Pipeline | Tripod Pipeline |
|---|---|---|
| **Central question** | "What fits in the builder's context?" | "What does THIS builder need to know for THIS build?" |
| **Knowledge orientation** | Compression (337 findings → 7 files) | Curation (337 findings → 1 bespoke package) |
| **Builder's role** | Derive framework AND execute within it | Execute within curated framework |
| **Knowledge flow** | Static (same 7 files every time) | Dynamic (different package per build) |
| **Time investment** | ~0 min for curation (static files) | ~15-30 min for researcher agent traversal |
| **Feed-forward** | None (builds are terminal) | Findings production (builds contribute back) |

### The New Architecture

```
Content Markdown
      |
      v
Phase 1: TC Agent (DERIVE — unchanged from current /compose)
  Receives: content + TC skill + identity.md + vocabulary.md
  Produces: Conviction Brief (_tc-brief.md)
  [This instrument remains isolated. TC's power is bottom-up experiential derivation.
   It should NOT be contaminated with accumulated knowledge.]
      |
      v
Phase 1.5: RESEARCHER Agent (CURATE — NEW)
  Receives: content + conviction brief + FULL knowledge corpus access
  Traverses: R1-R5 (337 findings), DD-F through CD-F (88 stage findings),
             24 validated explorations, case studies, grammar, mechanisms,
             bespoke EXT findings, handoff protocols
  Produces: Research Package (_research-package.md)
            Per-build, self-contained, implementation-mapped
            100-250 lines, curated for THIS content + THIS metaphor
      |
      v
Phase 2: BUILDER Agent (BUILD — modified)
  Receives: content + conviction brief + research package + master execution prompt
  Does NOT receive: raw vocabulary files (package subsumes them)
  Reads in ORDER: execution prompt → conviction brief → research package → content
  Produces: page.html + _reflection.md + _findings.md (NEW)
      |
      v
Phase 3: PA (EVALUATE — unchanged from current /compose)
  5 auditors + weaver, fresh-eyes, sanitized screenshots
      |
      v
Phase 4: FIX CYCLES (modified — findings production added)
  Fix cycles produce discoveries, not just corrections
  _findings.md grows with each cycle
      |
      v
[Optional] Feed-forward: _findings.md archived for future researcher traversal
```

### What Changed, What Didn't

**Unchanged:**
- TC Phase 1 (bottom-up experiential derivation, library prohibition, conviction brief output)
- PA Phase 3 (fresh-eyes evaluation, sanitized screenshots, 5 auditors + weaver)
- Context isolation principle (each agent sees only what it needs)
- Opus for all agents

**Changed:**
- NEW Phase 1.5 (researcher agent between TC and builder)
- Builder receives curated package INSTEAD of static vocabulary files
- Builder follows master execution prompt with reading order + production requirements
- Builder produces findings (_findings.md) as part of every build
- Fix cycles include discovery, not just correction

**Removed:**
- Static 7-file vocabulary dump to builder (replaced by curated package)
- Builder's implicit burden to re-derive content-mechanism mapping

---

## 3. How Each Instrument Manifests

### Instrument 1: Master Execution Prompt (HOW)

The current builder prompt in compose/SKILL.md (lines 94-124) is a set of process instructions and soul constraints. It tells the builder:
- Read the conviction brief BEFORE vocabulary files
- Build boundary-by-boundary, not channel-by-channel
- Use concept-based CSS naming
- 80% creative authority within identity constraints
- Write responsive CSS for 3 viewports
- Output a self-contained HTML file

This is valuable but incomplete. It tells the builder HOW TO BUILD but not HOW TO CONSUME KNOWLEDGE. It does not specify:
- What to read first vs. second vs. third
- How to map from the conviction brief's experiential direction to CSS implementation
- How to use the research package's implementation plans
- What to do when the package says one thing and the conviction brief implies another
- What constitutes a "finding" worth producing during the build

**What the new Master Execution Prompt looks like:**

```
MASTER EXECUTION PROMPT — Builder Protocol v2

READING ORDER (mandatory sequence):
1. Read this prompt in full. Do not start building until Step 6.
2. Read the Conviction Brief (_tc-brief.md). Internalize the world,
   the metaphor, the emotional arc. Do NOT translate to CSS yet.
   Write: one sentence capturing the FEELING this page must create.
3. Read the Research Package (_research-package.md). This is your
   implementation map. It tells you which mechanisms serve this content,
   with what values, achieving what perceptual effects.
   Write: a transition table mapping each content zone to the package's
   recommended mechanism + CSS approach.
4. Reconcile: Where the conviction brief and research package disagree,
   the conviction brief wins on FEELING, the package wins on IMPLEMENTATION.
   The brief says "this zone should feel like bedrock certainty." The package
   says "bedrock certainty = 4px left-border + padding-left 32px + #1A1A1A
   text on #FEF9F5 background." Trust the mapping.
5. Read the content markdown. Mark each section with its zone assignment
   from your transition table.
6. BUILD. Boundary-by-boundary. At each zone boundary, set ALL channels
   simultaneously (background + typography + spacing + borders).

PRODUCTION REQUIREMENT:
During and after building, document any DISCOVERIES in _findings.md:
- Unexpected interactions between mechanisms
- Content structures that resisted the recommended approach
- New CSS patterns you invented that weren't in the package
- Perceptual effects you noticed that aren't in the grammar
Format: one finding per entry, with: OBSERVATION, CONTENT TRIGGER,
CSS APPROACH, EXPECTED EVIDENCE, CONFIDENCE (low/medium/high).
Minimum: 0 findings (if nothing surprised you). No maximum.

SOUL CONSTRAINTS (non-negotiable — same as current):
- border-radius: 0 on all elements
- box-shadow: none on all elements
- No CSS gradients, no semi-transparent backgrounds
- No cool grays, use palette values

CREATIVE AUTHORITY: 80% creative freedom within identity constraints.
The conviction brief and research package are GUIDANCE, not prescriptions.
If your compositional intuition says to deviate from the package's
recommended approach, do so — but document WHY in _findings.md.
```

This prompt is the HOW. It sequences the builder's cognition: feel first (brief), plan second (package), reconcile third, execute fourth, document fifth. It bridges the gap between conviction (experiential) and implementation (structural) by making reconciliation an explicit step.

### Instrument 2: Research Package (WHAT)

The research package is the per-build, self-contained deliverable that the researcher agent produces. It is NOT the conviction brief (which is experiential). It is NOT the 7 vocabulary files (which are generic). It is a bespoke knowledge artifact compiled from the full accumulated knowledge, specific to THIS content and THIS metaphor.

**What a research package looks like (for a FAQ-style content with geological-stratification metaphor):**

```
RESEARCH PACKAGE — [Content Title]
Compiled by: Researcher Agent
Date: 2026-03-01
Metaphor: Geological Stratification (from TC conviction brief)
Content type: FAQ / Q&A alternation

---

SOUL CHECKLIST (mandatory — copy of identity.md core):
- border-radius: 0 everywhere
- box-shadow: none everywhere
- No gradients, no rgba, no cool grays
- Typography: Instrument Serif headings, Inter body, JetBrains Mono code
- Palette: #E83025 red, #FEF9F5 cream, #1A1A1A text, #4A90D9 blue

---

MECHANISM SELECTIONS (6 of 20 — curated for this content):

1. DENSE/SPARSE ALTERNATION (mechanism #5)
   Why selected: Q&A content has natural alternation rhythm.
   Content trigger: Every question/answer pair.
   Implementation: Questions = sparse zones (padding: 48px var(--space-8);
   background: var(--bg-warm-cream)). Answers = dense zones (padding: 24px
   var(--space-8); background: var(--bg-near-white)).
   Expected evidence: Visible PULSE rhythm when scrolling.
   Must honor: DD-F-001 PULSE pattern.
   Anti-pattern: Uniform padding across Q&A (destroys rhythm).
   Source: R1-001, validated in DD-001 through DD-006 (6/6).
   Confidence: HIGH.

2. BORDER-WEIGHT HIERARCHY (mechanism #2)
   Why selected: Geological stratification metaphor maps to depth-as-weight.
   Content trigger: Content sections at different hierarchy levels.
   Implementation: Primary stratum = 4px left-border (#E83025).
   Secondary = 3px (#1A1A1A). Tertiary = 1px (#4A90D9). Surface = no border.
   Expected evidence: Visible weight gradient from bedrock to surface.
   Must honor: OD-F-005 (organization IS density — border weight and padding
   compression should correlate).
   CSS example:
     .stratum--bedrock { border-left: 4px solid var(--color-red); padding-left: 32px; }
     .stratum--deep { border-left: 3px solid var(--color-text); padding-left: 24px; }
     .stratum--surface { border-left: 1px solid var(--color-blue); padding-left: 16px; }
   Source: DD-F-003, OD-004 (confidence-stratification).
   Confidence: HIGH.

3. PROGRESSIVE DENSITY COMPRESSION (mechanism #11)
   Why selected: FAQ confidence typically increases as answers build.
   Content trigger: Sequential Q&A where later answers assume earlier ones.
   Implementation: Padding decreases section-by-section. Top: space-16 (64px).
   Middle: space-12 (48px). Lower: space-8 (32px). Bottom: space-6 (24px).
   Expected evidence: Page feels like "settling into" certainty.
   Must honor: The geological metaphor — deeper strata are denser/more
   compressed. Surface is spacious.
   Anti-pattern: Uniform padding throughout (negates compression).
   Source: R3-023 (fractal density), CD-006 (compression patterns).
   Confidence: MEDIUM (content-dependent — verify Q&A actually builds).

4-6. [Additional curated mechanisms...]

---

STRUCTURAL PROPOSITIONS (from accumulated knowledge):

SP-1: "Density correlates inversely with confidence" (OD-F-005)
  For this content: As the FAQ progresses and answers become more certain,
  information density should INCREASE (tighter spacing, more content per
  viewport-height). Uncertainty at the top = spacious. Certainty at bottom = dense.

SP-2: "Q&A alternation follows PULSE" (R1-001, DD-F-001)
  For this content: Questions breathe IN (sparse). Answers breathe OUT (dense).
  This is the primary rhythm. Other mechanisms layer on top.

SP-3: "One axis sweep = one PULSE beat" (AD-F-023)
  For this content: If using Z-pattern for eye movement, each Z-sweep should
  coincide with one Q→A transition. Don't break the rhythm.

---

TRANSITION TABLE (recommended zone boundaries):

| Zone | Content | Background | Typography | Spacing | Border |
|------|---------|-----------|------------|---------|--------|
| Header | Title + intro | #FEF9F5 warm cream | Instrument Serif 40px | 80px top, 48px bottom | 4px bottom #E83025 |
| Q1 | First question | #FEF9F5 (sparse) | Inter 500 20px | 48px padding | 3px left #1A1A1A |
| A1 | First answer | #F5EDE5 (dense) | Inter 400 16px | 24px padding | 1px left #4A90D9 |
| Q2 | Second question | #FEF9F5 | Inter 500 20px | 40px padding | 3px left #1A1A1A |
| A2 | Second answer | #F0E8DE (denser) | Inter 400 16px | 20px padding | 1px left #4A90D9 |
| ... | Progressive compression | ... | ... | ... | ... |
| Footer | Closing | #1A1A1A (dark) | Inter 400 14px | 32px padding | 4px top #E83025 |

---

ANTI-PATTERNS (for this content + metaphor):

AP-1: Uniform padding across all Q&A pairs (destroys PULSE rhythm).
AP-2: Same background for questions and answers (removes alternation).
AP-3: Border on all sides (violates left-border-only identity signature).
AP-4: Using too many type sizes (geological simplicity = 3 sizes max).
AP-5: Breaking the compression gradient (Q7 more spacious than Q2).

---

PRIOR EXPLORATIONS (relevant reference):

OD-004 (confidence-stratification): Most structurally similar. 4-stratum
hierarchy with border-weight gradient. 1,073 CSS lines. Read for: border
approach, padding compression curve, dark-to-light surface shift.

DD-001 (breathing-space): PULSE rhythm demonstration. 418 CSS lines. Read
for: inhale/exhale padding values, how sparse zones feel different from dense.

[Builder does NOT need to read these — package contains everything extracted.
Listed for provenance only.]
```

This is roughly 120-180 lines. The builder receives ONE document with:
- Soul constraints (5 lines, mandatory)
- 6 curated mechanisms (each with implementation plan, expected evidence, constraints, anti-patterns)
- 3 structural propositions (connecting content properties to visual properties)
- A pre-built transition table (recommended zone boundaries with all channels)
- Anti-patterns (specific to this content + metaphor)
- Provenance references (where the knowledge came from)

Compare this to what the builder currently receives: 7 generic files totaling ~1,319 lines with ALL 20 mechanisms, ALL components, ALL grammar rules, for ALL content types. The package is SMALLER (120-180 lines vs 1,319) but RICHER (implementation-mapped, content-specific, metaphor-contextualized).

### Instrument 3: Curation Process (HOW the package was created)

The curation process is the researcher agent's work. It is the critical middle layer between accumulated knowledge and the builder. Without this process, the package cannot exist (there is nothing to curate without a curator), and the execution prompt has nothing to sequence (there is no package to read).

**What the researcher agent does (step by step):**

**Step 1: Receive TC output.** Read the conviction brief. Extract: metaphor name, creative conditions, compositional arc, content map. This is the creative direction that constrains which knowledge is relevant.

**Step 2: Parse the metaphor's structural implications.** "Geological stratification" implies: layered structure, weight-as-depth, compression gradient, sedimentary rhythm. Cross-reference against the stage findings:
- DD-F: Which density patterns map to geological layering? (DD-F-001 PULSE, DD-F-003 border-weight)
- OD-F: Which organizational patterns match? (OD-F-005 "org IS density," OD-004 confidence-stratification)
- AD-F: Which axis patterns serve the metaphor? (AD-F-023 attention topology)
- CD-F: Which combination approaches have been validated? (CD-006 all-pattern integration)

**Step 3: Analyze the content structure.** Read the content markdown. Identify: Q&A pairs, hierarchical depth, section count, content types present (code blocks, lists, prose, tables). Cross-reference against R1-R5:
- R1: documentation patterns relevant to this content structure
- R2: creative layout possibilities for this content shape
- R3: density dimensions applicable to this content's information distribution
- R4: axis patterns compatible with this content's reading flow
- R5: combination rules for the mechanisms being considered

**Step 4: Select mechanisms.** From the 20 available mechanisms, select 5-8 that serve THIS content with THIS metaphor. For each selected mechanism, compile: implementation plan, expected evidence, constraint linkage, anti-patterns, CSS examples from prior explorations, confidence level.

**Step 5: Derive structural propositions.** From the accumulated stage findings, extract 2-4 structural propositions that connect THIS content's properties to visual properties. These are not in the conviction brief (which is experiential) or the vocabulary files (which are generic). They are synthesized from the intersection of content analysis + metaphor + accumulated knowledge.

**Step 6: Build transition table.** Using the selected mechanisms, structural propositions, and content map, pre-build a recommended transition table showing zone boundaries with all channels specified. This is the researcher's most valuable contribution — it does the mapping work that the builder currently does alone.

**Step 7: Compile and anti-orphan.** Assemble all of the above into a single self-contained document. Verify: every finding referenced is EMBEDDED in the package (not just cited). The builder should never need to leave the package. Add provenance references for traceability but mark them as optional reading.

**Estimated time:** 15-30 minutes for an Opus agent with full knowledge corpus access.

**Estimated cost:** $2-5 (one Opus agent reading extensively, writing 120-250 lines).

---

## 4. What Changes to the Compose Skill

The compose skill (compose/SKILL.md, currently 309 lines) needs the following modifications:

### Phase 0: Load Vocabulary — EXPANDED

Current Phase 0 loads 4 files for the orchestrator. This remains, but the orchestrator also needs to prepare the knowledge corpus for the researcher agent:

```
Phase 0 additions:
- Verify knowledge corpus access:
  - research/R1 through R5 (337 findings) — paths confirmed
  - specification/patterns/ (stage findings) — paths confirmed
  - validated-explorations/ (24 HTML artifacts) — paths confirmed
  - compositional-core/case-studies/ (9 case studies) — paths confirmed
  - compositional-core/grammar/ (mechanisms + rules) — paths confirmed
```

The orchestrator does NOT read all of these. It confirms they exist and are accessible. The researcher agent will read them selectively during curation.

### Phase 1: DERIVE — UNCHANGED

TC derivation remains exactly as is. The TC agent operates blind to accumulated knowledge, derives from content, produces the conviction brief. No changes to isolation, inputs, or outputs.

This is critical: the tripod does NOT contaminate TC. TC's value is bottom-up experiential derivation. The researcher agent provides the top-down structural knowledge. These are complementary, not competing.

### Phase 1.5: CURATE — NEW PHASE

```
## Phase 1.5: CURATE (Research Package)

**Spawn:** One Opus agent as the researcher/curator.

**Agent receives:**
- The content markdown (full text)
- The conviction brief from Phase 1 (_tc-brief.md)
- Access to the full knowledge corpus:
  - research/R1 through R5 (via filesystem access, not embedded in prompt)
  - specification/patterns/ (stage findings DD-F through CD-F)
  - validated-explorations/ (24 HTML artifacts)
  - compositional-core/ (all 7 layers)
  - compositional-core/case-studies/ (9 case studies)
- The research package template (structure for output)

**Agent does NOT receive:**
- PA questions or audit criteria
- Builder instructions or execution prompt
- Prior build artifacts or fix lists

**Agent runs:** The 7-step curation process:
1. Parse conviction brief → extract metaphor + structural implications
2. Cross-reference metaphor against stage findings (DD-F, OD-F, AD-F, CD-F)
3. Analyze content structure → identify content properties
4. Select 5-8 mechanisms with full implementation maps
5. Derive 2-4 structural propositions from accumulated knowledge
6. Build pre-recommended transition table
7. Compile into self-contained package, verify anti-orphaning

**Agent outputs to:** [output-dir]/_research-package.md

**You verify (before proceeding):**
- Package contains soul checklist
- Package contains 5-8 mechanisms with implementation plans (not just names)
- Each mechanism has: CSS approach, expected evidence, constraint linkage, anti-pattern
- Package contains at least 2 structural propositions
- Package contains a transition table
- Package is self-contained (builder should not need to read any other files)
```

### Phase 2: BUILD — MODIFIED

The builder's inputs change. Instead of 6 vocabulary files, the builder receives:
- Content markdown
- Conviction brief (from TC)
- Research package (from researcher — NEW)
- Master execution prompt (NEW — replaces current builder instructions)

The builder does NOT receive the raw vocabulary files (tokens.css, mechanisms.md, grammar.md, components.css, components.md). These are subsumed by the research package, which contains everything the builder needs from those files, curated for this specific build.

Exception: components.css may still be included as a reference file, since the builder needs the actual CSS implementations to copy from. The researcher can specify which components are relevant, but the builder benefits from having the CSS source.

```
## Phase 2: BUILD (Opus Builder) — MODIFIED

**Agent receives (include full file contents in prompt):**
- The content markdown
- The conviction brief from Phase 1
- The research package from Phase 1.5 (NEW)
- The master execution prompt (NEW — replaces embedded builder instructions)
- components.css (CSS implementations — for copying, not for reading end-to-end)

**Agent does NOT receive:**
- tokens.css, mechanisms.md, grammar.md, components.md (subsumed by package)
- Gate thresholds, PA questions, audit criteria
- Prior build artifacts or fix lists

**Builder follows the Master Execution Prompt reading order:**
1. Read execution prompt
2. Read conviction brief → write one-sentence feeling
3. Read research package → write transition table
4. Reconcile brief + package
5. Read content → mark zones
6. Build

**Agent outputs to:**
- [output-dir]/page.html
- [output-dir]/_reflection.md (6-dimension reflection — same as current)
- [output-dir]/_findings.md (NEW — discoveries during build)
```

### Phase 3: EVALUATE — UNCHANGED

PA evaluation remains exactly as is. Fresh-eyes principle. Sanitized screenshots. 5 auditors + weaver. No changes.

### Phase 4: FIX CYCLES — MODIFIED

Fix cycles now include findings production. When the builder fixes issues, it also documents discoveries:

```
## Phase 4: FIX CYCLES — MODIFIED

Same fix cycle protocol as current (TYPE A/B/C classification, max 3 cycles).

Addition: After each fix cycle, the builder APPENDS to _findings.md:
- What the PA found that the research package didn't predict
- What CSS approach deviated from the package's recommendation and why
- What perceptual effect was stronger/weaker than expected
- What content structure the package didn't account for

These findings are not consumed by THIS build's pipeline (fix cycles use PA
creative direction, not findings). They exist for FUTURE researcher agents
to traverse when compiling packages for future builds.
```

### Phase 5: ARCHIVE — NEW PHASE

```
## Phase 5: ARCHIVE (Feed-Forward)

After the pipeline completes (SHIP verdict or max fix cycles):

Archive _findings.md to a persistent location:
  ephemeral/build-findings/[content-name]-[date]-findings.md

This file becomes part of the accumulated knowledge that future researcher
agents traverse. Over N builds, the knowledge corpus grows by N findings
files. The pipeline is no longer a closed loop.
```

---

## 5. What New Agents/Roles Are Needed

### The Researcher Agent (NEW — Instrument 3)

**Role:** Knowledge navigator and curator. Traverses the accumulated knowledge graph and compiles a bespoke research package for each build.

**Capabilities required:**
- Selective reading of large corpus (100,000+ words available, reads 5,000-15,000 per build)
- Cross-referencing content properties against stage findings
- Mapping metaphor implications to mechanism implementations
- Compiling implementation plans with specific CSS values
- Building transition tables that bridge conviction and execution

**Model:** Opus. The curation task requires judgment about relevance, quality, and applicability. It cannot be reduced to rule-following.

**When it runs:** After TC, before builder. It receives the TC conviction brief as its primary input lens.

**What it replaces:** The static 7-file dump. The orchestrator's Phase 0 file loading. The builder's implicit burden to derive content-mechanism mappings.

### No Other New Agents

The tripod does NOT require additional agents beyond the researcher. The existing roles (TC agent, builder, 5 PA auditors, weaver) remain unchanged. The researcher is a single addition — one more Opus agent, running for 15-30 minutes, producing one document.

The total agent count changes from 8-12 (current) to 9-13 (with researcher). The cost increase is ~$2-5 per build. The time increase is ~15-30 minutes.

This is the highest-leverage single addition to the pipeline: one agent, producing one artifact, that fundamentally changes the quality of the builder's input.

---

## 6. The Builder's Experience (Before/After)

### BEFORE (Current /compose)

The builder opens its context and finds:

1. **Builder instructions** (compose skill lines 94-124): Process rules. Soul constraints. Creative authority. Output format. ~30 lines of HOW.

2. **Conviction brief** (_tc-brief.md): A rich experiential document. "This page is a geological excavation. The reader descends through strata of increasing certainty. The surface is spacious and tentative. The bedrock is dense and declarative." The builder feels the world it should create. ~100-300 lines of WHY and WHAT (experiential).

3. **tokens.css** (124 lines): 65 CSS custom properties. All of them. The builder must decide which tokens serve the geological metaphor. --color-red for... bedrock? Surface? Emphasis? The token file doesn't say.

4. **mechanisms.md** (88 lines): 20 mechanism names with one-line descriptions. "Dense/Sparse Alternation: INHALE/EXHALE rhythm through padding changes between sections." The builder knows the technique exists. It must independently derive: this FAQ content needs PULSE rhythm, with 48px/24px alternation, applied to Q&A pairs.

5. **grammar.md** (149 lines): Compositional rules and sequencing. Generic density padding values (PULSE: 24px/64-80px). Transition types (SMOOTH/BRIDGE/BREATHING). Not content-specific.

6. **components.css** (779 lines): CSS implementations for all components. Callout system, code blocks, tables, header/footer, bento grid. The builder must select which components serve this content.

7. **components.md** (37 lines): Component inventory with velocity/weight values.

**Total:** ~1,319 lines of generic vocabulary + ~100-300 lines of conviction brief = ~1,419-1,619 lines.

**The builder's cognitive burden:** Read the conviction brief and FEEL the world. Then read 1,319 lines of generic vocabulary and figure out how to MAP the feeling to CSS. Which of the 20 mechanisms? Which of the 65 tokens? Which components? What values? What transitions? The builder must independently:
- Decide which mechanisms apply (20 → ~6 selections)
- Determine CSS values for each mechanism
- Map the metaphor to token choices
- Build a transition table from scratch
- Check for constraint conflicts between mechanisms
- Predict what the result should look like

This is the researcher's job AND the builder's job, simultaneously, in one context window.

### AFTER (Tripod Pipeline)

The builder opens its context and finds:

1. **Master execution prompt** (~40 lines): Reading order. Reconciliation protocol. Production requirements. Explicit instructions: "Read the conviction brief first, then the research package. Brief wins on feeling, package wins on implementation."

2. **Conviction brief** (_tc-brief.md): Same as before. Rich experiential document. The world, the metaphor, the emotional arc. ~100-300 lines.

3. **Research package** (_research-package.md): Bespoke, curated, implementation-mapped. ~120-250 lines containing:
   - Soul checklist (5 lines)
   - 6 curated mechanisms with full implementation plans, expected evidence, CSS examples, anti-patterns
   - 3 structural propositions connecting content properties to visual properties
   - Pre-built transition table with zone boundaries, all channels specified
   - Anti-patterns specific to this content + metaphor
   - Provenance references

4. **components.css** (779 lines): CSS implementations for reference. The package tells the builder WHICH components are relevant; components.css provides the CSS to work with.

**Total:** ~40 lines execution prompt + ~100-300 lines brief + ~120-250 lines package + 779 lines components.css = ~1,039-1,369 lines.

**The builder's cognitive burden:** Read the execution prompt (HOW to consume). Read the conviction brief (WHAT the world feels like). Read the research package (HOW to build that world — which mechanisms, what values, what transitions, what to avoid). Reconcile where they diverge. Read the content and assign zones. Build.

The builder does NOT need to:
- Select which mechanisms apply (the package selected them)
- Determine CSS values (the package specified them)
- Map the metaphor to tokens (the package mapped them)
- Build a transition table from scratch (the package pre-built one)
- Check constraint conflicts (the package resolved them)
- Predict perceptual evidence (the package described it)

The builder's single job: execute the curated plan with compositional fluency and creative authority. If the plan feels wrong, deviate — but the burden of DERIVING the plan has been removed.

### The Delta

| Dimension | Before | After |
|---|---|---|
| Builder decisions | ~100 independent (20 mechanisms x 5 decisions each) | ~10-15 (accept/modify/override package recommendations) |
| Implementation specificity | None (mechanism names only) | Full (CSS values, expected evidence, anti-patterns) |
| Transition table | Built from scratch by builder | Pre-built by researcher, modified by builder |
| Metaphor-to-CSS mapping | Implicit (builder derives alone) | Explicit (package provides mapping) |
| Content-type knowledge | Generic (same files for FAQ and tutorial) | Specific (package curated for this content type) |
| Structural propositions | Zero (brief has conviction, not structure) | 2-4 (connecting content properties to visual properties) |
| Total lines to read | ~1,419-1,619 (generic) | ~1,039-1,369 (curated + CSS reference) |

The total line count is SIMILAR or SMALLER. But the character of those lines is fundamentally different. Generic vocabulary vs. curated implementation plans. Mechanism names vs. mechanism implementations with expected evidence. All 20 mechanisms vs. the 6 that serve this build. A flat file dump vs. a sequenced knowledge package.

---

## 7. How the Flow Changes

### Current Flow

```
Content → TC → Brief → Builder (+ 7 static files) → Page → PA → Fix → Done
```

The arrow from Brief to Builder carries creative conviction. The 7 static files carry generic vocabulary. There is no bridge between conviction (experiential) and vocabulary (structural). The builder builds the bridge alone.

### New Flow

```
Content → TC → Brief ──┐
                        ├──→ Researcher → Package ──┐
                        │                            ├──→ Builder → Page → PA → Fix → Archive
Accumulated Knowledge ──┘                            │
                                Execution Prompt ────┘
```

The researcher agent sits at the intersection of three inputs:
1. The content (what structure the page needs)
2. The conviction brief (what the page should feel like)
3. The accumulated knowledge (what the design system knows works)

It synthesizes these into one output: the research package (what the builder should do, specifically, with what, achieving what).

The builder then sits at the intersection of three inputs:
1. The conviction brief (experiential direction — WHY)
2. The research package (implementation plan — WHAT/HOW)
3. The master execution prompt (consumption protocol — IN WHAT ORDER)

These three documents are the tripod. The builder consumes them in sequence and builds.

### The Critical Difference

In the current flow, the builder receives conviction and vocabulary on SEPARATE TRACKS that never intersect. The brief says "geological stratification" and the vocabulary says "20 mechanisms exist." The builder must independently build the bridge: "geological stratification means mechanisms #2, #5, #11 with these specific values."

In the new flow, the researcher agent BUILDS THE BRIDGE. The research package IS the intersection of conviction and vocabulary. It says: "Your metaphor is geological stratification. For this content, that means mechanism #2 (border-weight hierarchy: 4px/3px/1px), mechanism #5 (dense/sparse alternation: 48px/24px), mechanism #11 (progressive compression: 64px→48px→32px→24px). Here is the transition table. Here are the anti-patterns."

The builder no longer needs to derive the bridge. It consumes the bridge as a pre-built artifact.

---

## 8. What a Per-Build Research Package Looks Like (Compiled from Pre-Existing Knowledge)

This is the most important practical question: can a researcher agent compile a meaningful package from the knowledge that ALREADY EXISTS, without needing new bespoke research commissions?

### The Answer: Yes, with a Ceiling

The accumulated knowledge corpus contains everything needed for most builds:

**For mechanism selection:** The 20 mechanisms in mechanisms.md are extracted from 88 stage findings, which are themselves validated across 24 explorations. Each mechanism has a traceable provenance chain: R-finding → stage-finding → mechanism. A researcher agent can traverse this chain BACKWARDS: given a metaphor + content type, which stage findings apply? Which mechanisms do those stage findings validate? What CSS values did the explorations use?

**For implementation mapping:** The 24 validated explorations are HTML artifacts with CSS. OD-004 has geological stratification with border-weight gradient and padding compression — real CSS, proven to work. DD-001 through DD-006 have breathing/PULSE rhythm with specific padding values. The researcher can extract CSS examples from these explorations and embed them in the package.

**For structural propositions:** The 88 stage findings contain explicit rules connecting content properties to visual properties. OD-F-005 ("organization IS density"), DD-F-001 (PULSE), AD-F-023 (attention topology), CD-F crown jewel patterns. These are the raw material for structural propositions.

**For transition tables:** Grammar.md provides canonical density padding values and transition types. Case studies document how specific explorations structured their zones. The researcher combines these with the metaphor and content analysis to pre-build a recommended transition table.

### The Ceiling

The researcher cannot produce knowledge that doesn't exist. If the content type is radically different from anything in the 24 explorations (e.g., interactive data visualization, multimedia essay, real-time dashboard), the accumulated knowledge may not have applicable findings. In these cases, the package would be thinner — more generic mechanism recommendations, fewer CSS examples, lower confidence levels.

This is where **findings production** (instrument 1's production requirement) becomes important over time. Each build's _findings.md adds to the accumulated knowledge. After 10 builds, the researcher has 10 more data points. After 50, the corpus has grown significantly. The pipeline becomes a learning system rather than a static one.

### Example Package Compilation Process

For a FAQ-style content with geological-stratification metaphor:

1. **Metaphor → stage findings:** "Geological stratification" → OD-004 (confidence-stratification, geological theme, border-weight gradient). Direct hit. Also OD-F-005 ("org IS density"), DD-F-001 (PULSE), DD-F-003 (border-weight hierarchy).

2. **Content type → R-findings:** FAQ / Q&A → R1-001 (Q&A follows PULSE), R1-008 (progressive disclosure for FAQ), R2-014 (editorial alternation rhythm). All directly applicable.

3. **Intersection → mechanism selection:** PULSE + stratification = mechanisms #2 (border-weight), #5 (dense/sparse alternation), #11 (progressive compression). Geological metaphor + FAQ structure = mechanism #7 (spatial confidence), #14 (typographic hierarchy). Five mechanisms selected.

4. **Exploration CSS → implementation plans:** Read OD-004 CSS for border-weight values. Read DD-001 CSS for PULSE padding values. Extract specific rules, embed in package with adaptation for this content's specific structure.

5. **Structural propositions:** From OD-F-005: "density correlates with organizational depth" → for FAQ: "answer depth correlates with padding compression." From DD-F-001: "PULSE rhythm = alternating sparse/dense" → for FAQ: "questions = sparse, answers = dense." Two structural propositions derived from pre-existing knowledge.

6. **Transition table:** Content has 8 Q&A pairs + header + footer = 18 zones. Map each to the selected mechanisms with specific values from the exploration CSS examples.

Total: ~150 lines, compiled from pre-existing knowledge in 15-25 minutes by an Opus researcher agent. No new bespoke research commissioned. No new explorations needed. Pure curation of existing assets.

---

## 9. The Findings Production Loop

The tripod's third dimension — one that distinguishes it from a one-time improvement — is the production requirement in the master execution prompt.

### What the Builder Produces

Every build generates `_findings.md` documenting discoveries:

```
FINDING: BF-001
Observation: Progressive padding compression below 16px becomes imperceptible
  at standard viewport. 24px→16px visible, 16px→12px invisible.
Content trigger: Dense FAQ with 12+ Q&A pairs requiring fine compression gradient.
CSS approach: Stopped compression at 20px minimum. Used background-color shift
  instead of padding shift for the final 3 strata.
Expected evidence: Visible layering continues to the deepest strata via color,
  not spacing.
Confidence: MEDIUM (confirmed on this content, untested on others)
```

### How Findings Feed Forward

After archival (Phase 5), these findings become part of the corpus. When the researcher agent traverses knowledge for a future FAQ build, it finds BF-001 and knows: "padding compression has a perceptual floor at ~16-20px. For deep FAQ content, switch to background-color differentiation in lower strata."

Over N builds:
- N=1: 0 build findings available. Package compiled from exploration-era knowledge only.
- N=10: ~30-50 build findings available. Package starts including pipeline-era discoveries.
- N=50: ~150-250 build findings. Package draws from a rich corpus of production knowledge.
- N=100+: The pipeline-era findings may rival the exploration-era findings in volume and exceed them in production relevance (exploration findings were about EXPERIMENTAL content; pipeline findings are about REAL content).

### The Learning System

This is the fundamental architectural shift. The current pipeline is a **transform function**: f(content, vocabulary) → page. The same input always suggests the same output. No learning. No growth.

The tripod pipeline is a **learning system**: f(content, vocabulary, accumulated_findings) → page + new_findings. The knowledge corpus grows with every build. The researcher agent has more to draw from. The packages get richer. The builder's experience improves.

This is what the exploration era had naturally — each build produced DD-F, OD-F, AD-F, CD-F findings that fed forward. The tripod reintroduces this mechanism in a pipeline context.

---

## 10. Risks and Mitigations

### Risk 1: Researcher Agent Quality Variance

The researcher agent makes judgment calls about relevance, mechanism selection, and implementation mapping. Bad judgment produces a bad package, which produces a bad build. Unlike the static 7-file dump (consistent, if generic), the package's quality varies per build.

**Mitigation:** The orchestrator can verify the package against structural criteria (Section 5 of compose skill modifications): must contain 5-8 mechanisms with implementation plans, at least 2 structural propositions, a transition table, and anti-patterns. If the package fails these checks, the orchestrator can request revisions before proceeding to the builder.

### Risk 2: Over-Prescription

The research package might be TOO specific, constraining the builder's creative authority. If the package says "use 48px padding" and the builder's compositional intuition says 40px, does the builder follow the package or their instinct?

**Mitigation:** The master execution prompt explicitly addresses this: "80% creative authority within identity constraints. If your compositional intuition says to deviate from the package's recommended approach, do so — but document WHY in _findings.md." The package is GUIDANCE, not prescription. The builder's deviations become findings that improve future packages.

### Risk 3: Researcher Context Limit

The accumulated knowledge corpus is 100,000+ words. The researcher agent cannot read all of it in one context window. It must selectively traverse — but selective traversal means potentially missing relevant findings.

**Mitigation:** The researcher agent uses the conviction brief's metaphor and the content analysis as FILTERS. It reads the corpus selectively, guided by relevance. The 9 case studies serve as navigation aids — each documents which mechanisms, findings, and approaches were used for specific content types. The researcher reads case studies first to identify which deeper knowledge to traverse.

### Risk 4: Staleness

If the knowledge corpus stops growing (no new builds, no new findings), the researcher agent produces packages from a fixed corpus. This is no worse than the current pipeline (which uses the same static files), but it fails to realize the tripod's learning-system potential.

**Mitigation:** The findings production requirement ensures growth with every build. The archival phase ensures persistence. Over time, the corpus grows. The risk is only that builds stop happening — in which case the knowledge is no worse than static.

---

## 11. Summary: The Pipeline Before and After the Tripod

### Before (Current /compose)

**Architecture:** Static transform function. Same 7 files → TC → brief → builder → page.
**Builder input:** Generic vocabulary (1,319 lines) + conviction brief (100-300 lines). Builder bridges conviction and vocabulary alone.
**Knowledge state:** Frozen. 337 findings compressed to 7 files. No growth. No per-build customization. No findings production.
**Agent count:** 8-12 per build.
**Cost:** $12-28 per build.
**Time:** 1-2 hours.
**Quality ceiling:** Limited by the builder's ability to independently derive content-mechanism mappings from generic vocabulary + experiential conviction.

### After (Tripod Pipeline)

**Architecture:** Learning system. Accumulated knowledge → researcher → package → builder → page + findings → accumulated knowledge.
**Builder input:** Curated research package (120-250 lines, implementation-mapped) + conviction brief (100-300 lines) + master execution prompt (40 lines). Builder executes within curated framework.
**Knowledge state:** Growing. Each build produces findings that feed forward. Researcher traverses growing corpus per build. Packages improve over time.
**Agent count:** 9-13 per build (+1 researcher).
**Cost:** $15-35 per build (+$2-5 for researcher).
**Time:** 1.5-2.5 hours (+15-30 min for curation).
**Quality ceiling:** Limited by the accumulated knowledge's depth and the researcher's curation quality. Builder's burden is execution with creative authority, not framework derivation.

### The ROI Argument

One more agent. $2-5 more per build. 15-30 more minutes. In exchange:
- Builder receives implementation-mapped plans instead of mechanism names
- Builder receives content-specific recommendations instead of generic vocabulary
- Builder receives a pre-built transition table instead of deriving one from scratch
- Pipeline produces findings that improve future builds
- Pipeline becomes a learning system instead of a static transform

The exploration era proved that curation produces richer output. The pipeline can have curation without the exploration era's cost (weeks, hundreds of agents) by curating from PRE-EXISTING knowledge. The researcher agent is the single highest-leverage addition to the pipeline architecture.

---

*Companion to: 01-MASTER-FINDINGS.md (core insight), 03-PIPELINE-GAP-ANALYSIS.md (what's missing), 06-DIMENSIONAL-FUNCTIONAL.md (what the researcher does), 08-DIMENSIONAL-ARCHITECTURAL.md (costs and tradeoffs)*
