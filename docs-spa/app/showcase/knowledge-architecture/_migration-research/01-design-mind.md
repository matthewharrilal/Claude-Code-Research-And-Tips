# Summary: THE KORTAI DESIGN MIND (README.md)

**Source:** `docs-spa/app/showcase/DESIGN-SYSTEM/README.md` (2,365 lines, ~109KB)
**Purpose:** The operating manual that teaches HOW TO THINK the way the design system thinks, not just follow its rules.

---

## Core Philosophy (Part I)

The KORTAI design system answers a fundamentally different question than a normal design system:

> "Can a system absorb the REASONING behind design decisions well enough to make NEW decisions that are consistent with the ones that came before -- even when those new decisions were never explicitly specified?"

Key distinction: This system was **discovered, not decided**. Nobody chose `border-radius: 0` -- it was empirically extracted from auditing 11 existing KortAI components. The design system is a record of discoveries, not a set of decisions. This matters because:

- Decisions are arbitrary and interchangeable. Discoveries are empirical and causal.
- The provenance chain is a **causal chain**, not documentation. COMP-F-001 *enabled* DD-006's high score. DD-006 *validated* the fractal principle. That principle *became* DD-F-006. DD-F-006 *flowed into* OD as a mandatory input.
- "Stored vs Transmitted" is the core problem: findings existed but connections didn't. The system transforms files from "containing information" to "transmitting constraints forward."

---

## The 5-Stage Research Pipeline (Part II)

Each stage consumes ALL outputs from ALL prior stages, plus its primary research document. The input surface grows at every stage.

| Stage | Focus | Status | Key Output |
|-------|-------|--------|------------|
| 1 - Components | Foundation: audit 11 components | COMPLETE | 5 soul pieces, 8 COMP-F findings |
| 2 - Density (DD) | Visual rhythm patterns | COMPLETE | 6 density patterns, 18 DD-F findings, avg 34.5/40 |
| 3 - Organization (OD) | Cognitive flow patterns | COMPLETE | 6 org patterns, 17 OD-F findings |
| 4 - Axis (AD) | Spatial layout geometry | PENDING | Consumes all prior + R-2 + R-4 |
| 5 - Combination (CD) | Multi-pattern interaction | FUTURE | Final pattern vocabulary |

**How research compounds:** Stage 1 produced 13 items. Stage 2 consumed all 13 + R-3, produced 24 more. Stage 3 consumed all 37 + R-1 (28 findings). By Stage 5, the research gate will reference 100+ findings.

**5 Soul Pieces** (verified at EVERY iteration of EVERY exploration):
1. **Sharp Edges** -- border-radius: 0 everywhere (precision + authority)
2. **Archivist Serif** -- Instrument Serif for wisdom content
3. **Family DNA / 2-Zone Callouts** -- shared structural patterns
4. **No Shadows** -- flatness = honesty, no artificial depth
5. **Squares Signal System** -- square shapes indicate system-level elements

**Research Activation Table:** Before each stage, a matrix maps which prior findings apply to which exploration. Checkmarks = MUST read before building.

**Question Generator:** Questions don't disappear -- they ACCUMULATE and FORWARD until answered. Unanswered DD questions go to OD; unanswered OD questions go to AD.

---

## The 4 Levels of Engagement (Part IV)

This is the framework for how deep you need to go when using the system:

### Level 1: Application (Read the Skeleton)
- Content type is explicitly covered in PATTERN-INDEX
- Just look up the answer and apply it mechanically
- **When sufficient:** Straightforward, covered cases with no unusual constraints

### Level 2: Understanding (Follow the Provenance Backward)
- Pattern applies but fit isn't obvious
- Trace cited findings (R1-012, DD-F-004, OD-004) to understand the INTENT
- **When needed:** Content has nuances the pattern description doesn't address

### Level 3: Extension (Absorb the Chain, Make New Decisions)
- Content type NOT covered by the design system
- Absorb the reasoning behind similar patterns, then generate a new consistent decision
- Example: Troubleshooting guide = reversed CONFIDENCE-BASED + CRESCENDO toward resolution
- **When needed:** Building something new; the system needs EXTENDING, not just applying
- **This is what "interceptable" means** -- provenance lets you intersect at the reasoning level

### Level 4: Validation (Use the Chain as Criteria)
- After building ANYTHING
- Check deeper than surface compliance: Does fractal principle apply? Is density consistent across scales? Are soul pieces ACTIVE (serving their purpose), not just technically present?
- **When needed:** Always, after building. Surface compliance is necessary but never sufficient.

---

## The 7-Step Digestion Protocol (Part IV)

When encountering the design system for the first time or after context reset:

1. **Read BACKBONE.md** -- Get the narrative, know stages, know what's completed
2. **Read SOUL-DISCOVERIES.md** -- Internalize non-negotiable truths (empirical, not arbitrary)
3. **Read the relevant pattern file** -- Get the Level 1 skeletal answer
4. **Follow the provenance backward** -- If Level 1 isn't sufficient, trace cited findings, read original research
5. **Read outbound findings from adjacent stages** -- Cross-pollination is where deepest insights live (DD-F-006 applies to EVERYTHING)
6. **Check PIPELINE-MANIFEST.md** -- Full lifecycle of relevant findings, evidence quality
7. **Read the HANDOFF note** -- What constraints the previous stage established, what you must produce
8. **Load the Accumulated Identity** -- `ACCUMULATED-IDENTITY-v1.md` carries ALL soul pieces, ALL constraints, ALL findings into one consolidated context

**After building:** Create a Consumption Receipt proving what you consumed, how you applied it, with evidence locations.

---

## The Interception Framework + Sub-Agent Paradigm (Part V)

### What "Interceptable" Means

The design system is a body of knowledge you PARTICIPATE in, not a rulebook you obey. You can intercept at 4 levels:

1. **Pattern level** -- "This content maps to NARRATIVE ARC + CRESCENDO" (straightforward application)
2. **Finding level** -- Apply a principle discovered during one stage to a new context (e.g., DD-F-007 self-similarity applied to components)
3. **Soul level** -- Amplify the meaning behind a rule because context calls for it (e.g., sharpness = trustworthiness for sensitive data features)
4. **Methodology level** -- Extend the system using perceptual auditing itself -- the same discovery process that built it

### How Interception Prevents Drift

Without interception: "border-radius: 0, but this tooltip feels harsh, so 2px..." -> precedent -> drift.
With interception: "The provenance says sharpness = precision (Soul #1) + fractal consistency (DD-F-006). The problem isn't corners -- it's density/spacing. Check DD-F-005 for flowing element transitions." Soul stays intact, vocabulary provides the solution.

### The 4 Sub-Agent Types

| Type | Purpose | Output Format | When to Deploy |
|------|---------|---------------|----------------|
| **Validation Agent** | Find external evidence that VALIDATES or CHALLENGES internal findings | EXTERNAL-V-### | After >=34/40 score, before marking soul-level |
| **Extension Agent** | Go DEEP on a finding -- context variants, edge cases, a11y/i18n | EXTERNAL-E-### or OD-F-007a | Finding applies to multiple contexts |
| **Gap-Filling Agent** | Address RESEARCH DEBT -- acknowledged but unexplored questions | EXTERNAL-G-### | HIGH-risk debt, a11y/i18n/mobile gaps |
| **Parallel Exploration Agent** | MULTIPLE simultaneous agents for broad perspective | PARALLEL-[TOPIC]-### | New stage start, controversial finding |

Each sub-agent carries accumulated context from the 3-layer provenance architecture in its prompt -- not generic searches, but context-aware research that integrates into the chain.

### The 3 Dimensions of Growth

1. **DEPTH** (Internal Pipeline): R-1 -> COMP-F -> DD-F -> OD-F -> AD-F -> CD-F
2. **BREADTH** (External Sub-Agents): Validation, extension, gap-filling enriching the chain
3. **TIME** (Accumulation): Findings gain layers -- a finding from R1-007 gets applied in OD-001, validated by EXTERNAL-V-003, extended by OD-F-012, consumed by AD-001, combined in CD-003 -- carrying 6 layers of meaning

---

## Part VI: How to Reproduce the Methodology

### The Honest Answer
You can't reproduce it exactly -- the process was discovery-based. But you CAN set up structures that make discovery inevitable and capture the chain as you go.

### 7 Structures as Day-One Creation
Create these IMMEDIATELY if starting from scratch:
1. Research Activation Tables
2. Derivation Chain sections
3. Exploration Protocol
4. Consumption Receipt template
5. Question Generator
6. Reflection Protocol
7. Identity Signatures

### 9 Principles
1. **Start with what exists**, not what you want (audit-first)
2. **Audit perceptually**, not just technically (soul pieces come from perception)
3. **Document findings with IDs from the first discovery** (chain builds itself)
4. **Formally CONSUME prior findings** with gate files (muscle tissue)
5. **Score through perceptual auditing**, not just review (evidence, not opinion)
6. **Generate outbound findings after every stage** -- cross-domain insights are what makes the chain compound
7. **Write the handoff note BEFORE you move on** (while you still remember)
8. **Each stage's gate formally references prior findings** (finding-by-finding)
9. **The chain builds itself** when every step formally references what came before

### 3 Build Modes (Observed)
- **Mode A: Build First** (DD) -- Build explorations, then formalize provenance retroactively
- **Mode B: Build + Document** (OD) -- Build with some docs, then remediate gaps
- **Mode C: Incremental** (AD, planned) -- Write provenance AS you build, incrementally (ideal)

---

## Part VII: File Structure as Embodied Knowledge

The folder structure embodies the knowledge chain across 4 layers:

1. **Output Layer** (what to use): tokens/, components/, patterns/, guides/, anti-patterns/
2. **Provenance Layer** (why it's this way): provenance/ with PIPELINE-MANIFEST, stage folders, SOUL-DISCOVERIES
3. **Operational Layer** (current work state): checkpoints/ with MASTER-STATE, live tracking
4. **Artifacts** (what was built): explorations/ with DD, OD, AD, CD HTML files

Plus:
- **Navigation Layer** (Phase 2B): CLAUDE.md files in every significant folder
- **Inline Threading** (Phase 2B): 490 files carry provenance metadata (BUILT ON, CONSUMED BY, MUST HONOR)

### The 4 Master Documents
| Document | Analogy |
|----------|---------|
| BACKBONE.md | The tour guide (narrative chain) |
| PIPELINE-MANIFEST.md | The medical records (finding database) |
| PATTERN-INDEX.md | The prescription (content type -> pattern) |
| SOUL-DISCOVERIES.md | The DNA test results (identity constants) |

---

## How the System Produces VARIETY vs Uniformity

This is one of the most important insights for migration. The system does NOT produce uniform output. It produces variety through several mechanisms:

1. **Different organizational patterns for different content types:**
   - Conversational content -> PULSE density (rhythmic alternation)
   - Narrative content -> CRESCENDO density (sparse-to-dense)
   - Task-based content -> ISLANDS density (clusters in sparse space)
   - Confidence-stratified content -> GEOLOGICAL density (horizontal strata)
   - Spatial/navigational content -> TIDAL/WAVE density (flowing width variation)
   - Meta/creative content -> FRACTAL (self-similarity at all scales)

2. **The org-density-axis transitive chain (OD-F-FL-001):** When you choose an organizational pattern, you are simultaneously choosing a density pattern AND constraining the axis geometry. The three cannot be separated. Different content naturally selects different combinations.

3. **Level 3 Extension:** For content the system doesn't explicitly cover, you absorb the chain's reasoning and generate a NEW consistent decision. This means every uncovered case gets a unique, reasoned solution -- not a default fallback.

4. **The soul pieces are constants, but patterns are variables.** The 5 soul pieces (sharp edges, archivist serif, no shadows, etc.) are invariant across all output. But the patterns (density, organization, axis, combination) vary based on content type, cognitive purpose, and user needs.

5. **Research-informed decisions at every level:** The Getting Started Guide example (Part III) shows how tracing provenance for a page leads to deep, context-specific understanding. R1-012 (progressive disclosure builds confidence) + R1-034 (visual density signals progress) + DD-F-002 (CRESCENDO validated at 35/40) + DD-F-007 (self-similarity across scales) = a decision that is unique to that content type but consistent with the system.

---

## What "Thinking WITH the System" Means Practically

The document repeatedly contrasts mechanical application with genuine thinking:

- **Mechanical:** "border-radius: 0 because the tokens say so"
- **Thinking:** "border-radius: 0 because sharpness communicates precision and authority, and that precision is consistent from page level through section level through component level through element level"

- **Mechanical:** "Use CRESCENDO for this getting started guide because PATTERN-INDEX says so"
- **Thinking:** "Use CRESCENDO because progressive disclosure builds confidence (R1-012), density signals reader progress (R1-034), the pattern scored 35/40 under perceptual auditing (DD-F-002), and it should crescendo at EVERY scale (DD-F-007 fractal)"

- **Mechanical:** "I don't know what pattern to use for troubleshooting -- it's not in the index"
- **Thinking:** "Troubleshooting has a confidence gradient toward resolution. That's reversed CONFIDENCE-BASED + CRESCENDO toward resolution. The chain's reasoning makes this obvious even though no one planned for it."

The practical outcome: Someone who traces 3-4 patterns through their provenance chains starts to understand HOW KORTAI THINKS. They internalize: sharpness = precision, flatness = honesty, self-similarity = coherence, progressive disclosure = respect for cognitive state. They can predict what KortAI would do in unplanned situations because they've absorbed the decision-making framework, not just the decisions.

---

## Migration-Specific Guidance

The document provides direct migration paths:

1. **PATTERN-INDEX.md** maps content types to organizational pattern + density pattern -- this is the Level 1 starting point for any migration
2. **Before ANY migration, MUST READ:** DESIGN-SYSTEM/* (complete package), all validated explorations, all anti-patterns, KA-DECISIONS.md
3. **The getting-started guide example (Part III)** is the most detailed migration scenario: shows how provenance-informed decisions produce better results than mechanical pattern application
4. **The complete document flow for migration:**
   ```
   KORTAI-DESIGN-MIND.md -> BACKBONE-ACTIVATION-PROTOCOL ->
   OD-COMPREHENSIVE-EXECUTION-PROTOCOL -> RESEARCH-CONTINUITY-FORMULA v2 ->
   PATTERN-INDEX.md -> Migrated documents
   ```
5. **AD and CD stages must complete before full migration vocabulary exists** -- currently only density + organizational patterns are validated. Axis and combination patterns are pending.
6. **Mode 3 (Context Recovery)** provides a 5-10 minute re-grounding path: DESIGN-SYSTEM/CLAUDE.md -> inline threading section of target file -> BACKBONE.md -> relevant PART

---

## The 7 Provenance Structures (Part III)

The chain operates through 7 concrete structures, now implemented via a 3-layer architecture (490 files):

1. **Research Activation Table** -- Maps findings to explorations (which findings each exploration must consume)
2. **Derivation Chain** -- Shows why patterns exist (backward traversal to origin)
3. **Exploration Protocol** -- Research invokes exploration questions (how to build)
4. **Consumption Receipt** -- Proves findings were actually used (not just claimed)
5. **Question Generator** -- Accumulated questions per stage (questions that don't disappear)
6. **Reflection Protocol** -- Extracts learnings post-exploration (validated/challenged/new questions)
7. **Identity Signature** -- Folder personality and role ("I am... I constrain... If I didn't exist...")

**3-Layer Implementation:**
- Layer 1: Inline Threading Headers (246 files, Phase 2B) -- machine-readable metadata
- Layer 2: Light Provenance Sections (244 files, Phase 2D) -- human-readable context
- Layer 3: Formal Chain Documents (Stages 1-3 complete) -- cross-stage connective tissue

---

## Part VIII: The Meta-Insight

The design system is the skeleton (tokens, patterns, rules). The design MIND is the skeleton + muscle + blood + tissue (provenance chain, findings, handoffs, soul pieces, scores, iteration lessons). The difference:

- A system that **OBEYS rules** vs a system that **UNDERSTANDS WHY** the rules exist
- The mind is **transferable**: anyone who follows the structure absorbs the mind; anyone who extends the structure grows the mind
- The provenance chain is the medium through which design understanding propagates -- not as rules to follow, but as reasoning to participate in

---

## Part IX: Retroactive Update Bridge

Connects this philosophical document to codebase execution. Most structures now exist through the 3-layer architecture. Remaining work:
- Formalize Question Generator in PIPELINE-MANIFEST.md
- Add formal derivation chains to pattern files (density-patterns.md, organizational-patterns.md)
- Execute AD (Stage 4) with Mode C incremental provenance

4 verification tests defined: Backward Traversal, Forward Traversal, Identity Existence, Consumption Receipt Proof.
