# B8: Wrong Mode Analysis -- Applied vs Composed Composition in Gas Town

**Agent:** wrong-mode-analyst (Opus 4.6)
**Date:** 2026-02-22
**Task:** #54/59 -- Deep investigation of WHY Gas Town is in the WRONG MODE of composition despite having the right vocabulary.

**Source Files Analyzed (7):**
- `ephemeral/handoff-research/37-gas-town-output-analysis.md` (401 lines, full page analysis)
- `ephemeral/handoff-research/57-compositional-fluency-deep.md` (510 lines, fluency registers)
- `ephemeral/handoff-research/55-flagship-crystallization.md` (720 lines, Flagship CSS target)
- `ephemeral/pipeline-v3-research/B7-gas-town-flagship-gap.md` (1,145 lines, 10-dimension gap analysis)
- `ephemeral/handoff-research/43-embodiment-chain.md` (452 lines, progressive incarnation)
- `ephemeral/handoff-research/58-dispositional-recipe.md` (428 lines, D-01 through D-08)
- `ephemeral/pages/gas-town-steve-yegge/output.html` (1,509 lines, the artifact itself)

---

## 1. THE MODE DISTINCTION -- Applied vs Composed, Concretely Defined

### 1.1 The Claim Under Examination

Gas Town scores 2.5/5 average across 10 Flagship dimensions. It has 15 mechanisms, 1,093 lines of CSS, 4-zone architecture, multi-coherence at boundaries, full soul compliance, and PA-05 3.5/4 (COMPOSED at the CEILING tier). The diagnosis: "right amount of vocabulary deployed in the wrong mode."

This sounds like a real insight. But is it? Let me define the two modes precisely, then test whether the distinction holds up.

### 1.2 APPLIED MODE -- Definition

**Applied mode** is when mechanisms solve local problems independently. Each mechanism is selected because the content at that point needs it. The mechanism catalog is treated as a toolkit; the builder reaches for the right tool for each job.

**CSS signature of applied mode:**

```css
/* Each mechanism has its own section, its own scope, its own logic */
/* Mechanism #15: Bento Grid -- SOLVES: presenting 7 worker roles */
.roles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

/* Mechanism #16: Drop Cap -- SOLVES: editorial opening feel */
.dispatch-opening::first-letter { font-size: 3.5em; color: var(--color-primary); }

/* Mechanism #3: Solid Offset -- SOLVES: emphasizing the core quote */
.core-quote::after { top: 4px; left: 4px; background: var(--color-text); }

/* Mechanism #18: Data Table -- SOLVES: presenting 8 stages */
.data-table th { font-family: var(--font-mono); text-transform: uppercase; }
```

Each mechanism answers a different question: "How should I display worker roles?" "How should the opening feel?" "How should I emphasize this quote?" "How should I present this table?" The questions are LOCAL. The answers are LOCAL. Removing any one mechanism changes nothing about the others.

**The metaphor for applied mode:** A Swiss Army knife. Many tools, each for a different job, all folded into one handle but fundamentally independent.

### 1.3 COMPOSED MODE -- Definition

**Composed mode** is when mechanisms participate in a single governing logic that transcends any individual mechanism's purpose. Each mechanism serves its local content need AND participates in a page-spanning argument. The mechanism catalog is treated not as a toolkit but as a vocabulary in a language -- words that combine into sentences that combine into paragraphs.

**CSS signature of composed mode:**

```css
/* ALL mechanisms participate in the same governing concept: epistemic certainty.
   Zone background, border weight, spacing, and typography ALL encode the same
   semantic at every boundary. */

/* ESTABLISHED zone: highest certainty */
.zone-established {
  background: #fefcf3;              /* Warmest = most certain */
  border-left: 4px solid #1A1A1A;   /* Heaviest = most authoritative */
  padding: 48px 32px;               /* Most generous = most confident */
}
.zone-established p { font-weight: 400; letter-spacing: 0; }  /* Settled */

/* SPECULATIVE zone: lowest certainty */
.zone-speculative {
  background: #ffffff;               /* Coolest = least certain */
  border-left: 1px solid #E0D5C5;   /* Thinnest = least authoritative */
  padding: 32px 32px;               /* Tightest = least confident */
}
.zone-speculative p { font-weight: 400; letter-spacing: 0.01em; }  /* Loosened */

/* Component-level modulation: callouts INSIDE zones adapt */
.zone-established .callout { padding: 24px; }   /* Component breathes in confident zone */
.zone-speculative .callout { padding: 16px; }   /* Component compresses in uncertain zone */

/* Layout choice as compositional decision: */
.zone-established .bento { grid-template-columns: 1fr 1fr 1fr; }  /* Certain = structured grid */
.zone-speculative /* no grid -- linear F-pattern */                /* Uncertain = exploratory */
```

Every mechanism encodes the same concept (certainty level) through its own CSS property. Removing any one mechanism weakens the atmospheric encoding of certainty/uncertainty across the page. The mechanisms are load-bearing for each other's perceived meaning.

**The metaphor for composed mode:** An orchestra. Each instrument has its own part, but all parts serve the same score. Removing the cellos changes how the violins are perceived.

### 1.4 The Precise Distinction

| Property | Applied Mode | Composed Mode |
|----------|-------------|---------------|
| **Mechanism selection** | Content-driven (what does THIS section need?) | Metaphor-driven (what does the GOVERNING LOGIC need here?) |
| **CSS custom properties** | Organized by TYPE (colors, typography, spacing) | Organized by CONCEPT (opening, deepening, restricting) |
| **Component styling** | Identical in all zones | Modulated by zone context |
| **Layout choice** | Content-type-driven (data = table, roles = grid) | Metaphor-driven (certain = grid, uncertain = linear) |
| **Removal test** | Remove mechanism A: B unchanged | Remove mechanism A: B's meaning shifts |
| **CCS (Coupling Score)** | 0.10-0.25 | 0.45-0.80 |
| **Governing logic** | None (emergent from accumulation) | Single concept that predicts CSS values |

---

## 2. EVIDENCE FROM GAS TOWN -- Applied Mode Patterns

### 2.1 CSS Custom Properties: Organized by Type, Not Concept

Gas Town's `:root` block (output.html lines 14-86) is organized by TYPE:

```css
:root {
  /* Soul Constraints (IMMUTABLE) */
  --border-radius: 0;
  --box-shadow: none;

  /* Color Palette (LOCKED) */
  --color-primary: #E83025;
  ...

  /* Zone Backgrounds (Metaphor: Clearance Levels) */
  --bg-z1: #FEF9F5;
  --bg-z2: #F0EBE3;
  --bg-z3: #E8E0D4;
  --bg-z4: #F5F0E8;

  /* Typography Trinity (LOCKED) */
  /* Type Scale */
  /* Spacing Scale (4px base) */
  /* Border Weights (3-tier) */
}
```

Zone backgrounds are named by POSITION (`--bg-z1`, `--bg-z2`) not by CONCEPT. The comment says "Metaphor: Clearance Levels" -- but if the metaphor were structural, the variables would be named `--clearance-public`, `--clearance-restricted`, `--clearance-classified`, `--clearance-field`. The metaphor is ANNOUNCED in a comment but not EMBODIED in the variable structure.

**Composed-mode version** (from B7):
```css
--dispatch-open: #FEF9F5;       /* Public dispatch -- warmest */
--dispatch-tactical: #F0EBE3;    /* Tactical briefing -- cooler */
--dispatch-classified: #DDD4C4;  /* Classified intel -- darkest */
--dispatch-field: #F5F0E8;       /* Field ops -- released */
```

The difference is not cosmetic. When a builder uses `--bg-z3`, the variable name tells them nothing about what CSS value would be appropriate for Zone 3's border weight, spacing, or typography. When a builder uses `--dispatch-classified`, the name implies: classified = restricted = compressed = heavier. The concept-based name PREDICTS the other CSS properties. The position-based name does not.

### 2.2 Mechanisms Solve Local Problems

Each of Gas Town's 15 mechanisms is deployed to solve a LOCAL content problem:

| Mechanism | Why It Was Deployed | What It Solves |
|-----------|-------------------|----------------|
| #15 Bento Grid | 7 worker roles need spatial display | Presenting a role hierarchy |
| #16 Drop Cap | Editorial dispatch opening | Setting the tone of Zone 1 |
| #3 Solid Offset | Core "ant colony" quote needs emphasis | Emphasizing one blockquote |
| #18 Data Table | 8 evolution stages need structured data | Presenting tabular data |
| #9 Confidence Color | 5 callout types need semantic differentiation | Color-coding callouts |
| #17 Code Block | Go installation commands need terminal feel | Presenting code |
| #13 Dark Header | Page needs authoritative chrome | Starting the page |
| #14 Footer Mirror | Page needs closure | Ending the page |

Every mechanism answers: "What does THIS content need?" None answers: "What does the page's GOVERNING LOGIC need here?"

**The smoking gun:** Mechanism #15 (Bento Grid) appears in Zone 2 because Zone 2 has 7 worker roles. It does NOT appear because the "military dispatch" metaphor predicts that an "Operational Readiness" section should use structured spatial display while a "Field Intelligence" section should not. The content drives the mechanism choice. The metaphor does not.

If the metaphor were driving mechanism choice, we would expect:
- Zone 1 (Situation Brief / public dispatch): LINEAR flow, sparse mechanisms, maximum breathing
- Zone 2 (Operational Readiness / tactical briefing): STRUCTURED display, moderate density, data tables + grids
- Zone 3 (Field Intelligence / classified intel): COMPRESSED layout, heavy borders, dense callouts, possibly dark elements
- Zone 4 (Allied Ops / field deployment): MIXED, releasing back toward open, code blocks for practical action

The actual page DOES loosely follow this pattern -- but by coincidence. Zone 3 is compressed because its content is naturally dense (callouts, warnings, tables), not because the metaphor demanded compression. Zone 1 is sparse because its content is two paragraphs and a quote, not because "Situation Brief" mandates sparseness. The content-mechanism alignment is ACCIDENTAL, not GOVERNED.

### 2.3 Components Are Styled Identically Across Zones

Gas Town's callouts have the same padding, the same border-left width, and the same internal structure in every zone:

```css
/* From output.html -- callout styling is GLOBAL, not zone-specific */
.callout { /* same everywhere */ }
.callout--doctrine { border-left-color: var(--accent-purple); }
.callout--advantage { border-left-color: var(--accent-green); }
.callout--threat { border-left-color: var(--accent-coral); }
.callout--caution { border-left-color: var(--accent-amber); }
```

The callout internal padding, margin, and typography do NOT vary by zone. A `.callout--threat` in Zone 3 looks identical to a hypothetical `.callout--threat` in Zone 1. The zone has no influence on component styling.

In composed mode, components would ADAPT to their zone:

```css
/* Hypothetical composed-mode callout styling */
.zone-1 .callout { padding: 20px 24px; margin: 24px 0; }    /* Open dispatch: generous */
.zone-3 .callout { padding: 12px 16px; margin: 12px 0; }    /* Classified: compressed */
.zone-3 .callout { border-left-width: 5px; }                 /* Classified: heavier emphasis */
```

### 2.4 The Removal Test

**Test: Remove the bento grid (#15) from Zone 2.**

In Gas Town: Zone 2's data table, file tree, and section headings remain. Zone 3's callouts and tables remain. Zone 4's extension cards remain. The page is less visually interesting but no other mechanism changes its meaning. The bento grid is self-contained.

**Test: Remove zone backgrounds (#7) from all zones.**

In Gas Town: The header-footer bookending still works (dark-cream-dark). The typography progression (400->500->600->400 weight) still works. The spacing compression still works. The zone backgrounds provide atmospheric differentiation but they do not CHANGE how other mechanisms are perceived. The solid offset quote still reads as emphatic. The drop cap still reads as editorial.

**Verdict:** Gas Town CCS is approximately 0.25-0.35. The bookending chain (header + drop cap + footer) creates some coupling. The density arc (backgrounds + spacing + weight) creates some coupling. But these two clusters are independent of each other, and neither reaches into components.

### 2.5 The Density Arc: Gas Town's Best Compositional Achievement

Gas Town's strongest compositional feature is the 4-zone density arc:

| Property | Z1 | Z2 | Z3 | Z4 |
|----------|----|----|----|----|
| Background | #FEF9F5 | #F0EBE3 (delta 18) | #E8E0D4 (delta 15) | #F5F0E8 (delta 20) |
| Vertical padding | 64px | 40px | 32px | 32px |
| Font-weight | 400 | 500 | 600 | 400 |
| Letter-spacing | 0 | 0 | 0.03em | 0 |

Four channels co-vary across four zones. This IS multi-channel encoding. It IS compositional in the sense that removing any channel weakens the density gradient.

But here is the critical observation: **the density arc was specified by the TC brief, not composed by the builder.** The TC brief provided zone architecture with direction labels (OPENING, DEEPENING, DEEPENING, RESOLVING) and the builder implemented those directions as CSS values. The builder then CORRECTED the TC brief's background values (which violated the 15 RGB threshold) and added font-weight/letter-spacing progressions.

The builder executed a pre-specified arc. It did not DISCOVER an arc from the content's internal logic. The arc exists because the TC pipeline PRESCRIBED it, not because the builder perceived that the content demanded this particular atmospheric progression.

This is applied-mode composition. The density arc is applied BY the TC brief TO the page, not composed BY the builder FROM the content.

---

## 3. EVIDENCE FROM CD-006 (CEILING) -- Partial Composed Mode

### 3.1 Where CD-006 Composes

CD-006 has a bookending chain that constitutes genuine composition:

```css
/* Header: dark + 3px primary border-bottom */
header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); }

/* Drop cap: responds to header weight via shared red accent */
.drop-cap::first-letter { font-size: 3.5em; color: var(--color-primary); }

/* Footer: mirrors header */
.page-footer { background: var(--color-text); border-top: 3px solid var(--color-primary); }
```

Remove the header: the drop cap becomes decorative rather than transitional. Remove the footer: the page lacks closure. These three mechanisms form a genuine compositional cluster.

CD-006 also has transition grammar that constitutes composition:

```css
.transition--smooth   { margin: 48px 0; border-top: 1px; }   /* Same domain */
.transition--bridge   { margin: 64px 0; background: breathing; } /* Different intensity */
.transition--breathing { margin: 80px 0; border-top: 3px; }   /* Different domain */
```

The transition TYPE varies with the SEMANTIC RELATIONSHIP between adjacent sections. This is not applied (choosing a mechanism for a local content need). It is composed (choosing a mechanism based on how sections relate to each other).

### 3.2 Where CD-006 Applies

CD-006's component mechanisms are applied, not composed:

```css
/* Callout styles: same regardless of section context */
.callout--info { border-left-color: var(--accent-blue); background: #F5F9FE; }
.callout--tip  { border-left-color: var(--accent-green); background: #F2F9F4; }
```

CD-006's four grid layouts are applied as vocabulary exhibits:

```css
.bento-grid     { grid-template-columns: repeat(4, 1fr); }    /* Bento: 4-col */
.z-hero         { grid-template-columns: 1.618fr 1fr; }       /* Z-pattern: golden */
.reasoning-columns { grid-template-columns: 1fr 1fr; }        /* Reasoning: 2-col */
.choreo-spokes  { grid-template-columns: repeat(3, 1fr); }    /* Choreography: 3-col */
```

Each grid appears in one section. No grid relates to any other grid compositionally. They are vocabulary demonstrations, not compositional decisions.

### 3.3 CD-006 vs Gas Town: Mode Comparison

| Dimension | CD-006 | Gas Town |
|-----------|--------|----------|
| Bookending chain | COMPOSED (header -> drop cap -> footer) | COMPOSED (identical pattern) |
| Transition grammar | COMPOSED (3 types based on relationship) | PARTIALLY COMPOSED (3 transition types, but less semantic variation) |
| Density arc | NOT PRESENT (uniform section padding, no progression) | APPLIED (TC-brief-specified, not builder-discovered) |
| Component modulation by zone | NOT PRESENT | NOT PRESENT |
| Grid choice as composition | NOT PRESENT (vocabulary exhibits) | NOT PRESENT (one grid, content-driven) |
| Mechanism coupling (CCS) | ~0.40 (report 57 estimate) | ~0.30-0.35 (my estimate) |

**The surprise:** Gas Town has a STRONGER density arc than CD-006 (which has none). But CD-006 has STRONGER transition grammar and more structural diversity. Neither achieves composed-mode fully. Both are in hybrid territory -- composed at the bookending level, applied at the component level.

Gas Town's mode is not "wrong" so much as "incomplete." It achieved composed-mode for the density arc (4 channels co-varying across all boundaries) and bookending, but applied-mode for everything else (mechanisms, components, grid choice, layout).

---

## 4. MODE DETERMINANTS -- What Sets the Mode?

### 4.1 Three Candidate Determinants

**Hypothesis A: The mode is set by the PROMPT.**

Evidence for: The TC brief prescribes zone architecture, mechanism selection, and boundary CSS values. The builder implements what the brief specifies. If the brief specifies a density arc (it did), the builder produces one. If the brief does not specify component modulation by zone (it did not), the builder does not produce it.

Evidence against: The builder CORRECTED TC brief values that violated perception thresholds. The builder INVENTED components not in the brief (header stats, checkpoint bar, mental model callout). The builder's mode is not entirely prompt-determined.

**Hypothesis B: The mode is set by the BUILDER (model capability).**

Evidence for: CD-006 was built by Opus with minimal specification and achieved 39/40 with genuine compositional clusters. The Middle experiment was built by an Opus-led team with a 100-line recipe and achieved PA-05 4/4. The Flagship was built by Sonnet with a 963-line spec and scored 1.5/4. Model capability clearly matters.

Evidence against: Gas Town was built by Opus (not Sonnet) and still produced applied-mode composition for most mechanisms. If mode were purely model-determined, Opus should have composed naturally.

**Hypothesis C: The mode is set by PROMPT-BUILDER INTERACTION (the frame).**

Evidence for: Report 58 (dispositional recipe) argues that specification frames produce compliance mode, while compositional frames produce composing mode. Gas Town's builder received a TC brief that was a RECIPE (specific values, sequenced steps) -- which activates Opus's compliance circuitry rather than its compositional judgment. CD-006's builder received a CONVENTION SPEC that said "here are the rules, compose a page" -- which activated compositional judgment.

Evidence against: This is theoretically compelling but unfalsifiable without controlled experiments. We have n=1 for each condition (different content, different pipelines, different specifications). The confound is absolute.

### 4.2 My Assessment

**The mode is primarily determined by the FRAME (Hypothesis C), with BUILDER CAPABILITY as a prerequisite and PROMPT CONTENT as the material.**

The frame operates at a meta-level: it tells the builder what KIND OF TASK this is. "Implement this TC brief" frames the task as execution. "Compose a page that serves this content" frames the task as creation. The same Opus model produces different modes depending on which frame is active.

The TC brief is fundamentally an execution document. It specifies:
- 4 zones with names, densities, and layout types
- 15 mechanisms with catalog IDs and deployment locations
- Boundary CSS values (RGB deltas, channel counts)
- 3 builder anchors (non-negotiable guardrails)

The builder reads this as: "I know WHAT to build. My job is to build it correctly." This activates compliance mode. The builder executes the plan. The mechanisms are applied WHERE the plan says to apply them.

For composed mode, the builder would need to read: "Here is the content. Here is the vocabulary. Here are the hard constraints. Compose a page where the form serves the meaning."

**The critical difference:** In execution mode, the builder's attention goes to "does my CSS match the spec?" In composition mode, the builder's attention goes to "does this section's CSS make the reader FEEL what the content says?"

### 4.3 When Mode Gets Locked

**Mode is set at build START and is very difficult to change mid-build.**

Evidence: Gas Town's builder produced a conviction statement at the start, then executed the TC brief boundary-by-boundary. At the midpoint, the builder performed a self-challenge that identified stacked gaps and sub-perceptual values -- but the self-challenge was about COMPLIANCE (fixing gate violations), not about COMPOSITION (rethinking whether the mechanisms relate to each other). The builder never asked: "Is the density arc in the CSS visible enough to FEEL different from zone to zone?" It asked: "Do the RGB deltas pass the 15-point threshold?"

This is consistent with continuation bias in language models: once the builder commits to "I am executing a plan," every subsequent decision stays in execution mode. A self-challenge framed as "fix what's wrong" stays in execution mode. A self-challenge framed as "scroll the page as a reader and feel whether the zones are different rooms" might switch to composition mode -- but this framing was not provided.

**Prediction:** If D-05 ("scroll the whole page as a reader") were injected AFTER the first complete pass, some builders would switch modes. But most would not, because the first-pass CSS creates momentum. The builder would perceive the page through their own work rather than through the reader's experience.

The highest-leverage intervention is setting the frame at the START, not trying to change it at the midpoint.

---

## 5. THE SWITCHING PROBLEM -- Can Mode Be Changed After Build Starts?

### 5.1 Evidence from the Fix Cycle

Gas Town had one fix cycle:
- SC-10: Reduced stacked gap at Z3->Z4 from ~150px to ~116px
- SC-14: Reset letter-spacing on Z3 headings (sub-perceptual)
- SC-13a: Increased Z3 paragraph font-weight from 500 to 600
- SC-13b: Strengthened checkpoint border from 1px to 3px

All four fixes are COMPLIANCE fixes (making existing CSS pass gates). None is a COMPOSITIONAL fix (rethinking how mechanisms relate to each other). The fix cycle did not change the mode.

### 5.2 Could a Second Pass Change Mode?

Theoretically, yes. If a SEPARATE Opus agent -- one that never saw the TC brief -- read the output HTML and was asked "how would you make this page's mechanisms compose rather than merely coexist?", that agent would be in EVALUATION mode, not EXECUTION mode. Evaluation mode can produce compositional insights that the original builder's execution mode cannot.

This is the "creative revision cycle" from report 55 (Flagship crystallization): "A fresh Opus agent reads the built page and provides compositional feedback. The builder revises. This breaks continuation bias."

The two-instance pattern works because:
1. Instance A builds (in whatever mode the prompt sets)
2. Instance B evaluates (in a different mode, because it reads the OUTPUT, not the PLAN)
3. Instance B's feedback reframes Instance A's next pass as "revision toward composition" rather than "execution of plan"

**The practical answer:** Mode CANNOT be changed mid-build by the same builder. It CAN be changed between build passes by introducing a fresh evaluator.

### 5.3 The Remediation Counter-Example

The Flagship remediation (PA-05 from 1.5/4 to 2.5/4) was performed by an Opus builder with a 1,025-line repair specification. The builder IMPROVED the page significantly but did not switch to composed mode -- the repair spec framed the task as "fix these specific problems," which is execution mode.

Score improved from 1.5 to 2.5 (+1.0) through better execution. Score would need to reach 3.5+ for composed mode. The gap between 2.5 and 3.5 is not "better execution" -- it is "different mode."

---

## 6. PIPELINE IMPLICATIONS -- How Pipeline v3 Should Handle Mode

### 6.1 The Current Pipeline's Mode Problem

The current pipeline (/build-page) produces applied-mode composition because its architecture is:

```
TC Skill (content analysis -> metaphor -> mechanism selection -> boundary CSS table)
  -> Builder (implements TC brief)
  -> Gates (verify compliance)
  -> PA (evaluate perception)
  -> Fix cycle (compliance fixes)
```

Every stage downstream of TC operates in execution mode. The TC brief IS the plan. The builder executes it. The gates verify it. The PA evaluates the result. Fix cycles repair compliance failures.

The TC brief is the LAST moment of compositional judgment. After the TC brief, the pipeline is a manufacturing process.

### 6.2 What Pipeline v3 Needs

**Option A: Make the TC brief compositional, not prescriptive.**

Instead of specifying CSS values at boundaries, the TC brief would specify:
- The governing concept (e.g., "epistemic certainty gradient")
- How the concept maps to CSS properties (warmth = certainty, weight = authority, compression = urgency)
- Which zones express which level of the concept

This shifts compositional judgment to the BUILDER. The builder must decide: "If Zone 3 is classified intel, how compressed should its callouts be?" The TC brief says "classified = compressed" but the builder decides what "compressed" means in CSS.

Risk: The builder may not exercise this judgment. Opus might default to safe values (applied mode) without explicit dispositional framing.

**Option B: Add a compositional framing layer (D-01 through D-05).**

Keep the TC brief as a recipe but wrap it in dispositional instructions that activate composed mode:

- D-01: "Before writing CSS for any section, read the content. Feel its register."
- D-02: "After each zone, scroll back. A reader should perceive a NEW ROOM."
- D-03: "If a CSS choice is invisible at 100% zoom, delete it."
- D-04: "Somewhere in the second half, create a considered moment."
- D-05: "Scroll the whole page as a reader. Fix what feels like waiting."

These dispositions do not change the TC brief's content. They change the FRAME in which the builder processes it. The builder still receives zone architecture and mechanism selections. But instead of executing them as a checklist, the builder composes them as a musician plays a score -- with interpretation, phrasing, and dynamic variation.

**Option C: Split the build into two passes with different frames.**

Pass 1: Execute the TC brief. Produce a functional page in applied mode.
Pass 2: A DIFFERENT Opus agent evaluates the page and provides compositional feedback. The original builder revises.

This is the creative revision cycle. It guarantees that at least one agent operates in evaluation mode, which is naturally closer to composed mode than execution mode.

### 6.3 My Recommendation

**Option B + C combined.** Add dispositional framing (Option B, ~12 lines added to the builder's instructions) AND add a compositional evaluation pass (Option C, one additional Opus agent reading the built page).

Option A alone is risky because it removes the TC brief's CSS value tables, which are the primary mechanism for ensuring perception thresholds are met. The value tables are the most reliable part of the pipeline.

Option B alone is insufficient because dispositional instructions activate judgment but do not guarantee it. Some builds will still stay in applied mode despite D-01 through D-05.

Option C alone is expensive (two Opus passes) and the evaluator may not catch all compositional failures.

Combined, the pipeline becomes:

```
TC Skill (recipe + concept mapping)
  -> Builder Pass 1 (TC brief + dispositional frame D-01-D-05)
  -> Gates (compliance verification)
  -> Compositional Evaluator (fresh Opus reads output, identifies applied-mode patterns)
  -> Builder Pass 2 (revises based on compositional feedback)
  -> Gates + PA (final verification)
```

---

## 7. DISPOSITIONAL CONNECTION -- How D-01 Through D-08 Relate to Mode

### 7.1 Which Dispositions Target Mode Directly?

| Disposition | Mode Target | Mechanism |
|-------------|-------------|-----------|
| D-01 ("read content, feel register") | DIRECT -- shifts from "implement spec" to "serve content" | Redirects attention from plan to content |
| D-02 ("new room at each boundary") | DIRECT -- shifts from "CSS delta passes threshold" to "perceptible room change" | Redirects attention from measurement to perception |
| D-03 ("would you put your name on this?") | INDIRECT -- raises quality floor but does not change mode | Redirects attention from compliance to pride |
| D-04 ("second-half designed moment") | INDIRECT -- ensures compositional attention persists past midpoint | Prevents front-loading, does not change mode |
| D-05 ("scroll as reader") | DIRECT -- shifts from "verify rules" to "experience page" | Redirects attention from production to reception |

D-01, D-02, and D-05 directly target mode by redirecting the builder's attention from plan-execution to content-perception. D-03 and D-04 support mode indirectly by raising standards and extending attention.

### 7.2 What's Missing from D-01 Through D-05 for Mode Switching

None of the five dispositions directly addresses the MECHANISM COUPLING problem. They address: content-form resonance (D-01), perceptual boundary quality (D-02), visible quality (D-03), second-half investment (D-04), and reading experience (D-05).

What they do NOT address:
- "Do your mechanisms relate to each other?" (coupling)
- "Do components inside zones adapt to their zone's atmosphere?" (component modulation)
- "Does your grid choice reflect the zone's meaning, not just the content's data structure?" (layout as composition)
- "Can you articulate what would change if you removed one mechanism?" (removal test)

### 7.3 Proposed D-06, D-07, D-08 for Mode

**D-06: "After deploying a mechanism, ask: could I remove this without changing how any other element on the page feels? If yes, the mechanism is decoration. Find a way to make it load-bearing -- connect its CSS values to the values of at least one other mechanism through a shared concept."**

This targets coupling directly. It asks the builder to evaluate each mechanism's compositional necessity, not just its local utility.

**D-07: "Your callouts, tables, and code blocks should NOT look the same in every zone. Zone 3 is denser, heavier, more urgent than Zone 1. Your callouts in Zone 3 should reflect that -- tighter padding, heavier borders, compressed margins. If your components ignore their zone, they are furniture, not architecture."**

This targets component modulation directly. It gives the builder permission AND instruction to vary component styling by zone context.

**D-08: "The grid layout you choose for a section should not be determined by what the content looks like, but by what the content MEANS. A section presenting certain conclusions deserves a structured grid. A section exploring uncertain possibilities deserves linear flow. If your grid choice would be the same regardless of the section's intellectual stance, reconsider."**

This targets layout-as-composition. It reframes grid selection from content-type-driven to meaning-driven.

---

## 8. THE HARD QUESTION -- Is This a Real Distinction or an Artifact of Skill Level?

### 8.1 The Adversarial Challenge

The distinction between "applied" and "composed" could be an artifact:

**Null hypothesis:** There is no "mode" distinction. There is just SKILL. A more skilled builder produces CSS where mechanisms couple. A less skilled builder produces CSS where mechanisms are independent. The "mode" language is a poetic way of saying "the builder didn't think hard enough about how things relate."

**Evidence for the null hypothesis:**
- CD-006 (39/40) was built by Opus with near-zero specification. Opus is "more skilled" and produced coupling. Gas Town was built by Opus with a detailed specification. Same model. Different output. The specification suppressed skill, not mode.
- The coupling in CD-006 (header-footer bookending, transition grammar) is not evidence of a different "mode." It is evidence that the builder had more FREEDOM to think about relationships because the specification consumed less attention.
- "Applied vs composed" is indistinguishable from "constrained vs free" or "executing vs creating" or "following directions vs making decisions."

### 8.2 Why the Distinction Is Real (Not Just Skill)

The null hypothesis fails on one critical test: **Gas Town's builder IS skilled.** The same Opus model that built Gas Town also:
- Corrected TC brief background values that violated perception thresholds
- Invented 6 components not in the TC brief
- Identified and fixed stacked gaps, sub-perceptual values, and multi-coherence weaknesses
- Produced a self-assessment with specific questions

This is not a skill deficit. The builder demonstrated sophisticated CSS knowledge and design judgment. What the builder did NOT do is apply that judgment to mechanism coupling.

Why? Because the FRAME did not activate coupling judgment. The TC brief says "deploy mechanisms #1, #2, #3, ..., #18." It does not say "make mechanisms #1, #7, and #4 encode the same concept." The builder's skill was directed at LOCAL excellence (each mechanism well-implemented) rather than GLOBAL composition (mechanisms interrelating).

**The definitive test:** If "applied mode" is just "less skilled," then giving the builder MORE time or MORE specification should produce coupling. But the Flagship experiment proves this false: MORE specification (963 lines) produced LESS coupling (1.5/4). Time and specification do not produce coupling. Frame does.

If "applied mode" is just "constrained," then removing constraints should produce coupling. But removing ALL constraints (pure creative freedom) is the CD-006 condition, which produced coupling through Opus's native judgment. The pipeline's job is not to remove constraints (soul constraints are necessary) but to activate the judgment that operates WITHIN constraints.

### 8.3 Is Mode a Proxy for "Less Skilled vs More Skilled"?

**No. Mode is a property of ATTENTION ALLOCATION, not capability.**

A builder in applied mode has the same CSS knowledge as a builder in composed mode. The difference is WHERE ATTENTION GOES:

- Applied mode: attention goes to each mechanism's local quality (is this bento grid well-proportioned? is this drop cap the right size? does this table have good padding?)
- Composed mode: attention goes to inter-mechanism relationships (does the bento grid's density match the zone's density? does the drop cap's red connect to the header's red border? do the callout paddings compress as the zones compress?)

The skills required for both modes are identical. The attention allocation is different. The frame determines the allocation.

This maps to the dispositional recipe framework: specifications direct attention to compliance (applied mode). Dispositions direct attention to composition (composed mode). The same model, with the same skills, produces different outputs because it attends to different aspects of the work.

### 8.4 One Caveat: Applied Mode Is Not Wrong

Applied mode at high skill produces Gas Town: PA-05 3.5/4, CEILING tier, zero blocking issues, 9/9 auditors approve. This is excellent work. Applied mode is not a failure mode. It is a competent, reliable mode that produces pages that WORK.

Composed mode is what the Flagship aspiration demands: PA-05 4.0+, multi-voice, atmospheric conviction, content-form resonance, compositional fluency. This is a different ambition. The question is not "is applied mode bad?" (it is not) but "is composed mode achievable?" (unknown) and "does the distinction matter?" (yes, for the 4/4 aspiration).

---

## 9. SYNTHESIS: THE MODE MATRIX

### 9.1 Three Modes, Not Two

After deep analysis, I believe the distinction is not binary (applied vs composed) but trilinear:

**Mode 1: EXECUTING (Flagship experiment, 1.5/4)**
The builder treats the specification as a checklist. Each rule is satisfied minimally. No compositional judgment is applied. The specification IS the page. Output: flat, compliant, lifeless.

**Mode 2: APPLYING (Gas Town, 3.5/4)**
The builder treats the mechanism catalog as a toolkit. Each mechanism is deployed to solve a local content problem with genuine craft. The density arc and bookending create some compositional coupling, but most mechanisms are independent. The builder IS skilled; the frame directs skill to local excellence. Output: competent, professional, satisfying.

**Mode 3: COMPOSING (theoretical, never fully achieved)**
The builder treats the mechanism catalog as a vocabulary in a language governed by a single compositional concept. Every mechanism participates in the governing concept. Components adapt to their zone. Grid choice reflects meaning, not data structure. The builder's attention spans the whole page, connecting mechanisms to each other through shared semantic encoding. Output: atmospheric, unified, experientially coherent.

### 9.2 What Determines Which Mode Activates

| Factor | Mode 1 (Executing) | Mode 2 (Applying) | Mode 3 (Composing) |
|--------|--------------------|--------------------|---------------------|
| Specification length | 900+ lines | 50-300 lines (recipe) | 30-50 lines (constraints + disposition) |
| Specification type | Checklist | Recipe with values | Constraints + vocabulary + compositional frame |
| Builder model | Sonnet | Opus (default) | Opus (with dispositional activation) |
| Frame | "Implement this spec" | "Build this page using these mechanisms" | "Compose a page where form serves content" |
| TC brief content | Exhaustive CSS table | Zone architecture + mechanism list + value table | Governing concept + metaphor-to-CSS mapping + creative authority |
| Fix cycle type | Compliance fixes | Compliance + perceptual fixes | Compositional revision by fresh evaluator |

### 9.3 The Path from Mode 2 to Mode 3

Gas Town is in Mode 2. The path to Mode 3 requires:

1. **Reframe the TC brief** from "recipe to execute" to "concept to compose with" (~20 lines changed)
2. **Add D-01, D-02, D-05, D-06, D-07, D-08** to the builder's instructions (~35 lines added)
3. **Add a compositional evaluation pass** between first build and final PA (~1 additional Opus agent)
4. **Concept-organize CSS custom properties** in the TC brief's value table (name by concept, not position)

Estimated score improvement from Mode 2 to Mode 3: PA-05 3.5/4 -> 3.8-4.0/4, Flagship dimensions from 2.5/5 avg -> 3.5-4.0/5 avg.

**The cost:** One additional Opus agent pass (~10-15 minutes, ~$2-4). The benefit: the difference between CEILING and FLAGSHIP.

---

## 10. CONCLUSION

### What "Wrong Mode" Means Concretely

"Wrong mode" means the builder's attention was directed to local mechanism quality rather than global mechanism coupling. The mechanisms are well-implemented individually but do not participate in a governing compositional logic. The CSS custom properties are organized by type (colors, spacing, borders) rather than by concept (opening, restricting, deploying). Components look the same in every zone. Grid choice follows content structure rather than metaphor logic.

### Is the Distinction Real?

Yes. Applied and composed modes produce measurably different CSS structures (CCS 0.25 vs 0.50+, concept-organized vs type-organized tokens, zone-modulated vs global component styling). The distinction is not skill level -- the same model with the same skills produces different modes depending on the frame.

### What Sets the Mode?

The frame. Execution-framed instructions ("implement this TC brief") produce applied mode. Composition-framed instructions ("compose a page where form serves content") produce composed mode. Dispositional instructions (D-01 through D-08) shift the frame from execution to composition. The TC brief's structure (recipe vs concept mapping) determines whether the frame activates or suppresses the builder's compositional judgment.

### The Actionable Takeaway

Pipeline v3 should:
1. Keep the TC brief's value tables (they prevent catastrophic failures)
2. Add concept-based variable naming (so values predict each other)
3. Add dispositional instructions D-01 through D-08 (so the builder composes rather than executes)
4. Add a compositional evaluation pass (so continuation bias is broken)
5. Add D-06/D-07/D-08 specifically targeting mechanism coupling, component modulation, and layout-as-composition

The investment is ~50 lines of additional instructions and one additional Opus agent pass. The expected return is the difference between CEILING (3.5/4, competent and satisfying) and approaching FLAGSHIP (3.8-4.0/4, atmospheric and compositionally unified).

---

**END OF REPORT B8**

*The "wrong mode" diagnosis is real but should be refined: Gas Town is in Mode 2 (APPLYING) of a three-mode spectrum (Executing / Applying / Composing). Mode is determined by the builder's attention frame, not skill level. The TC brief's recipe format activates Mode 2 in Opus. Shifting to Mode 3 requires: concept-based variable naming, dispositional instructions (D-01 through D-08), and a compositional evaluation pass by a fresh Opus agent. The distinction is measurable (CCS 0.25 vs 0.50+), actionable (50 lines of additions + 1 extra agent pass), and addresses the specific gap between CEILING tier (Gas Town's current level) and approaching FLAGSHIP.*
