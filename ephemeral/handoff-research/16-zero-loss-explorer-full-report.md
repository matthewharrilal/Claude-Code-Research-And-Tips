# Zero-Loss Explorer: Full Report

**Agent:** zero-loss-explorer
**Team:** paradigm-exploration
**Task:** Task #2 — Explore zero-loss architectures
**Model:** claude-opus-4-6
**Extracted from:** `~/.claude/projects/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/727db751-33b0-4a4b-95be-80b22c5583ba.jsonl` (line 200892, user message containing `<teammate-message>` from zero-loss-explorer to team-lead)
**Extraction date:** 2026-02-22
**Note:** This report was sent via SendMessage to "team-lead" and received as a teammate-message in the team-lead's context. The full report text (19,005 characters) was preserved in the JSONL transcript before context compaction removed it from the live session.

---

## Task #2: Zero-Loss Architecture Analysis

### The Information Inventory (What the Builder Actually Faces)

First, the real numbers. The builder's current information landscape:

**Mandatory reads (before CSS):**
- TC brief: ~80-120 lines (content-specific, from TC agent)
- Conventions brief: 609 lines (world model)
- Content file: variable (~200-800 lines typically)
- **Total upfront: ~900-1,500 lines**

**Reference files (consult as needed):**
- mechanism-catalog.md: 1,218 lines
- components.css: 1,195 lines
- tokens.css: 183 lines
- prohibitions.md: 419 lines
- **Total reference: ~3,015 lines**

**Grand total accessible to builder: ~3,700-4,500 lines**

The builder's spawn prompt (SKILL.md lines 92-135) tells it to read files 1-3 in order, then "consult as needed" files 4-7. So the builder already has a two-tier architecture: mandatory upfront + optional reference. The question is whether this tiering is effective.

---

### Approach 1: JUST-IN-TIME INFORMATION (Builder Re-Reads at Phase Gates)

**How it works:** Builder starts with ~200 lines (TC brief + soul constraints). At specific build phases, explicit instructions tell it to re-read targeted sections:

```
Phase A (Internalize): Read TC brief only (80-120 lines)
Phase B (Plan): Read conventions-brief Sections 3-6 (richness, multi-coherence, fractal echo, metaphor) (~180 lines)
Phase C1 (HTML skeleton): Read conventions-brief Section 13 (accessibility) + prohibitions.md (~100 lines)
Phase C2 (Zone boundaries): Re-read conventions-brief Section 4 (multi-coherence) + mechanism-catalog.md categories relevant to selected mechanisms (~200 lines)
Phase C3 (Components): Read components.css for selected component types only (~300 lines)
Phase D (Verify): Read conventions-brief Section 11 (five questions) (~30 lines)
```

**Peak context at any moment:** ~400 lines (TC brief + one reference section + current build state)

**Is this zero-loss?** Nearly. The builder has access to ALL 3,700 lines -- it just reads them at the moment they become relevant. Nothing is compressed, summarized, or omitted. The loss comes only from LLM attention decay: even if a builder reads Section 4 at the right moment, it's competing with the ~1,000 lines of HTML/CSS the builder has already written.

**Practical concern:** This requires the builder to STOP building and READ mid-flow. Current LLM builders tend to enter a "generation mode" where they produce CSS continuously. Interrupting this flow to re-read reference material is against the grain of how autoregressive generation works. The builder might skim or skip the re-read step.

**Verdict:** Theoretically near-zero-loss. Practically depends on whether the builder discipline holds. The conventions brief already says "Read this brief once, fully. Then build." -- which is the OPPOSITE of JIT. There's a philosophical tension: the brief was designed as a world-model-then-build flow, not a consult-during-build flow.

---

### Approach 2: PHASED BUILDING (Separate Passes)

**How it works:** Instead of one builder agent making one pass, the build happens in 3-4 sequential passes, each with focused input:

```
Pass 1 -- STRUCTURE (Opus agent, ~400 lines input):
  Reads: TC brief + prohibitions.md + conventions-brief Sections 1, 13
  Produces: HTML skeleton (landmarks, ARIA, semantic structure, zone markup)
  Output: skeleton.html

Pass 2 -- ZONES (Opus agent, ~500 lines input):
  Reads: TC brief + conventions-brief Sections 2, 4, 7 + skeleton.html
  Produces: Zone backgrounds, boundaries, multi-coherence CSS, transition grammar
  Output: zones.css (injected into skeleton)

Pass 3 -- TYPOGRAPHY + COMPONENTS (Opus agent, ~700 lines input):
  Reads: TC brief + conventions-brief Sections 5, 8 + mechanism-catalog.md (selected entries) + components.css (selected types) + current page
  Produces: Typography scale, component styling, fractal echo implementation
  Output: typography-components.css

Pass 4 -- POLISH (Opus agent, ~300 lines input):
  Reads: TC brief + conventions-brief Sections 9, 10, 11 + current page
  Produces: Responsive behavior, token compliance, five-question self-check
  Output: final output.html
```

**Peak context at any moment:** ~700 lines (Pass 3, the densest)

**Is this zero-loss?** Close -- each pass reads the full relevant sections. But there's a NEW loss: inter-pass coherence. Pass 3 doesn't know WHY Pass 2 chose those zone backgrounds. The TC brief provides a shared anchor, but the compositional reasoning that happened during zone boundary design is lost between passes unless explicitly documented.

**Practical concern:** This is 4 sequential Opus agents instead of 1. Cost quadruples. Latency quadruples. And the handoff artifacts between passes become a new compression point -- exactly the problem the current pipeline has between TC and builder. Every handoff is a new opportunity for information loss.

**Critical insight:** The conventions brief explicitly warns against this pattern: "Build boundary by boundary, not channel by channel." Phased building is channel-by-channel at a macro level -- first structure, then color, then type. The brief says: at each boundary, set ALL channels together. This approach structurally contradicts the brief's own prescription.

**Verdict:** Higher information fidelity per pass, but introduces inter-pass coherence loss. Contradicts the boundary-by-boundary build philosophy. The cure may be worse than the disease.

---

### Approach 3: COMPILED BRIEF (TC Agent Pre-Computes CSS Recipes)

**How it works:** The TC agent's output expands from ~100 lines to ~300 lines. Instead of just metaphor + zones + mechanisms, it produces zone-specific CSS recipes with concrete values:

```
Current TC brief Section 6 (BUILD RECIPE):
  "Zone 2: Apply DEEPENING. Deploy density gradient, border thickening."

Compiled TC brief Section 6:
  "Zone 2 CSS:
    background: #F0EBE3;  /* 18 RGB darker than Z1, DEEPENING */
    padding: 48px 0;       /* 16px tighter than Z1, DEEPENING */
    border-left: 3px solid var(--color-border);  /* structural, DEEPENING */
    h2 { font-size: 1.5rem; font-weight: 600; letter-spacing: 0.03em; }
    .callout { padding: 16px 20px; border-left: 4px solid; }
    Layout: 2-column equal (1fr 1fr) for analysis pairs"
```

The builder receives a pre-compiled brief where the TC agent has ALREADY translated metaphor + mechanisms into CSS values. The builder implements, doesn't design.

**Peak context:** ~300-line TC brief + ~200-line prohibitions/tokens = ~500 lines. The conventions brief becomes unnecessary because its knowledge is baked into the compiled recipes.

**Is this zero-loss?** No -- it's a DIFFERENT kind of loss. The conventions brief knowledge gets compressed into the TC agent's compiled output. The TC agent must internalize 609 lines of conventions brief + 1,218 lines of mechanism catalog + 1,195 lines of components.css to produce those recipes. The compression happens in the TC agent instead of the builder, but it still happens.

**The real question:** Is the TC agent better at this compression than the builder? Possibly YES, because the TC agent is focused on design decisions (what values serve the metaphor?) while the builder is focused on implementation (how to write valid CSS). The TC agent has compositional context; the builder has execution context. Routing the design decisions to the design agent makes sense.

**Practical concern:** This makes the TC agent significantly more expensive and complex. It must now produce CSS-level specifics, not just compositional direction. If the TC agent gets a CSS value wrong (e.g., sets a background delta of 10 RGB instead of 15), the builder inherits the error without having the conventions-brief context to catch it. The current architecture lets the builder cross-reference.

**Another concern:** The compiled brief removes the builder's creative authority. The conventions brief explicitly grants 80% creative authority. A compiled brief with specific CSS values reduces the builder to a typist. This contradicts Section 9 of the conventions brief: "You are the composer."

**Verdict:** Eliminates builder information overload but shifts it to TC agent. Removes creative authority. Creates fragile single-point-of-failure in TC output quality. Best hybrid: TC provides CSS direction (recipes with ranges, not exact values) and the builder has creative authority within those ranges.

---

### Approach 4: EMBEDDED REFERENCES (TC Brief Includes Pointers)

**How it works:** The TC brief includes inline pointers to specific conventions-brief sections:

```
Zone 2 (DEEPENING):
  Background: darker than Z1 by >= 15 RGB [see conventions-brief Section 2 for perception physics]
  Typography: tighten letter-spacing, increase weight [see conventions-brief Section 4 "Typographic Progression Per Semantic Direction" for DEEPENING recipe]
  Components: deploy callout (info) + data table [see components.css .callout-info and .data-table for component DNA]
  Transition: BRIDGE type [see conventions-brief Section 7 for channel budget]
```

The builder reads the TC brief first, then follows pointers to read specific subsections of the conventions brief as needed.

**Peak context:** TC brief (~120 lines) + targeted convention sections (maybe ~100-200 lines per pointer followed) = ~320 lines at peak.

**Is this zero-loss?** Nearly -- every pointer leads to the full original text. Nothing is summarized. The loss is in WHICH pointers the TC agent chooses to include. If the TC agent forgets to point to the character-scale register (Section 5) and the builder invents letter-spacing values outside the closed vocabulary, that's a pointer-selection loss.

**Practical advantage:** This is the cheapest modification to the current architecture. The TC brief already has a BUILD RECIPE section. Adding "[see conventions-brief Section X]" annotations requires no new agents, no new passes, no new infrastructure. It's a ~20-line addition to the TC agent's spawn prompt.

**Practical concern:** The builder must context-switch between the TC brief and the conventions brief. Reading a pointer, jumping to the conventions brief, reading a subsection, jumping back -- this is friction. In practice, builders may read the first few pointers then stop following them as the build gains momentum.

**Verdict:** Low-cost, low-disruption, moderate-effectiveness. Best as an enhancement to another approach, not standalone.

---

### Approach 5: HOW HUMAN DESIGNERS SOLVE THIS

Human designers absolutely do not hold 3,700 lines in their heads. They solve this through several mechanisms:

1. **Internalized vocabulary through practice.** A senior designer has built hundreds of pages. They don't re-read "use 4px base unit" -- it's muscle memory. The equivalent for an LLM: few-shot examples in context. But LLMs don't accumulate muscle memory across sessions. Each build starts from zero. This is the fundamental asymmetry.

2. **Reference documents they glance at.** Designers have brand guidelines open in a tab. They don't read the full guide before each decision -- they glance at the color page when picking a color, glance at the type page when setting headings. This IS the JIT pattern (Approach 1). The conventions brief is designed as a "read once, internalize" document, but human designers treat brand guidelines as "glance as needed."

3. **Design systems as toolkits, not documents.** In Figma, a designer doesn't read about components -- they drag them from a library. The component's constraints are embedded in the component itself (auto-layout rules, color tokens, spacing tokens). The designer can't violate the constraints because the tool enforces them. This is the programmatic gate runner approach -- but it's POST-BUILD verification, not DURING-BUILD enforcement.

4. **Sketching before detailing.** Designers sketch rough layouts (wireframes) before pixel-perfect comps. The wireframe stage uses ~10% of the design system (grid, zones, rough proportions). The detailing stage uses ~90%. This maps to Phased Building (Approach 2), but designers do it as one continuous process with shifting attention, not discrete handoffs.

5. **Team specialization.** Large projects have a brand designer, a typographer, a layout designer, a component designer. Each specialist internalizes ~500 lines of the system (their domain) rather than 3,700. This is Phased Building but with persistent expertise, not single-use agents.

6. **Critique and iteration.** Designers don't get it right on the first pass. They build, step back, get feedback, revise. This IS the PA + fix cycle architecture. The key difference: human critique is specific and contextual ("this boundary feels flat"), not checklist-based ("3 channels shifting?").

**The key insight from human practice:** Humans manage information overload through EXTERNALIZATION (the design system as external memory they can consult) combined with INTERNALIZATION (muscle memory from practice). LLMs can externalize (re-read files) but cannot internalize (no persistent memory between sessions). This makes the JIT re-read pattern (Approach 1) the closest analog to how humans actually work, compensating for the missing internalization with explicit read instructions.

---

### Approach 6: THEORETICAL MINIMUM LOSS

**Is zero-loss possible?** No. Here's why:

**Source 1: Attention decay.** An LLM reading 3,700 lines will not attend equally to all of them. Lines read first decay relative to lines read later. This is a physical property of transformer attention, not a design flaw. Even with perfect re-reading, the act of writing 1,000+ lines of CSS pushes earlier context further from the attention peak.

**Source 2: Compression at handoffs.** Every agent boundary is a compression point. TC agent reads 3,000+ lines and produces 100 lines. That's 30:1 compression. Even if the 100 lines are perfectly chosen, the TC agent's REASONING -- why it chose X over Y, what tradeoffs it considered, what it almost did -- is lost. The builder gets conclusions, not deliberation.

**Source 3: Translation loss.** Conventions brief describes principles ("multi-coherence means 3+ channels shifting together"). Builder must translate principles to CSS (`background: #F0EBE3; padding: 48px; border-left: 3px...`). Translation always loses nuance. The principle says "channels encoding the same semantic direction." The CSS is either right or wrong, with no gradient of "how semantic."

**Source 4: Recency bias.** The last file the builder reads dominates its early output. If it reads prohibitions.md last (as instructed), soul constraints are strong but compositional vision is faded. If it reads TC brief last, metaphor is strong but soul constraints are faded. There's no reading order that makes everything equally salient.

**Theoretical minimum loss:**

Given these four sources, the theoretical minimum for a single-agent builder is approximately:
- ~5-10% attention decay loss (unavoidable with 200K context window and 1000+ lines of generation)
- ~15-25% compression loss at TC->builder handoff (unavoidable unless builder runs TC itself, which defeats specialization)
- ~5-10% translation loss (principle to CSS)
- ~5% recency bias

**Total: ~30-50% of the conventions brief's information fails to manifest in CSS.**

This is consistent with empirical observation: the conventions brief describes multi-coherence requiring 3+ channels, but the Flagship experiment produced imperceptible backgrounds (0-8 RGB delta). The builder "knew" the 15 RGB threshold (it was in the conventions brief) but the knowledge didn't survive to CSS generation.

**How to minimize:**

The approaches above each attack different loss sources:
- JIT (Approach 1): attacks attention decay (re-read when relevant)
- Phased (Approach 2): attacks attention decay (less info per pass) but adds new compression loss
- Compiled (Approach 3): attacks translation loss (pre-translate) but adds new compression loss
- Embedded refs (Approach 4): attacks attention decay (re-read specific sections) at low cost

---

### MY RECOMMENDATION: Hybrid JIT + Compiled Ranges + Embedded Refs

The best architecture combines three approaches:

1. **TC brief includes CSS RANGES (not exact values) per zone.** Example: "Z2 background: 15-30 RGB darker than Z1 on warmest channel. Z2 padding: 40-56px. Z2 border-left: 3px." This gives the builder guardrails without removing creative authority. The TC agent pre-translates PRINCIPLES to RANGES. The builder selects exact values within ranges.

2. **TC brief includes embedded references.** Every zone recipe points to the specific conventions-brief section the builder should re-read if the range feels wrong or the builder wants to understand WHY. Example: "Z2 border: 3px [conventions-brief Section 8, '3-Tier Border Budget']."

3. **Builder spawn prompt includes explicit re-read gates.** Not "consult as needed" (which means never), but "BEFORE writing Zone 2 CSS, re-read your TC brief Section 6 Zone 2 recipe. BEFORE writing components, re-read mechanism-catalog.md for your selected mechanisms only." This attacks the generation-mode problem by inserting mandatory reading pauses.

4. **Conventions brief stays as-is.** It's the world model. The builder reads it once upfront for the gestalt, then re-reads targeted sections via embedded refs during build. The brief is well-written as a world-description; trying to restructure it into a JIT-lookup format would lose its coherence as a design philosophy document.

**Peak context per moment:** TC brief (120 lines) + one conventions-brief section (30-60 lines) + current HTML/CSS state (~500 lines at midpoint) = ~650-700 lines. Down from 3,700.

**Information loss:** ~15-20% (down from ~30-50%). The remaining loss is in TC->builder handoff compression (inherent to multi-agent) and attention decay during long CSS generation (inherent to autoregressive generation).

**True zero-loss would require:** A single agent that IS the TC analyst AND the builder AND has perfect attention across 3,700+ lines while generating 1,000+ lines of CSS. This is a model capability constraint, not an architecture problem. When models can reliably attend to 5,000+ lines while generating 1,500+ lines, the single-agent approach becomes viable and zero-loss approaches achievable. Until then, the hybrid JIT architecture minimizes loss within the constraint.

**The conventions brief itself hints at this:** Line 7 says "Read this brief once, fully. Then build." This is the internalize-then-execute model. The problem is that LLMs don't internalize like humans do. The fix isn't to change the brief -- it's to add structured re-reading during the build phase so that the brief's knowledge refreshes as it becomes relevant. The brief stays a world-description; the build process gains reading checkpoints.
