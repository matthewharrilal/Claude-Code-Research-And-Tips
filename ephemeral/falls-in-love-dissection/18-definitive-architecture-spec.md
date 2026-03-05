# Definitive Architecture Specification: Beyond-AD-006 Build Pipeline

**Date:** 2026-03-03
**Author:** Final Architect (Task #18)
**Sources:** 17 research documents (~12,000 lines) by 17 Opus agents across 3 waves
**Purpose:** The actionable specification an orchestrator agent uses to run the pipeline. Not a research document -- an execution spec.

---

## 1. Executive Summary

This architecture replaces the current $30 research-compose pipeline for building designed HTML pages from articles. The current pipeline scores 0/10 on content-form coupling because its constraints prevent the builder from forming a content-driven spatial topology. This architecture creates the conditions for that topology to form.

**What it does:** Routes articles through content complexity triage, curates bespoke structural and textural research, then gives a single Opus builder 50 minutes of uninterrupted content immersion and building time. Two evaluation-driven deepening cycles refine the output. The builder reads the article first, forms its own spatial impressions, and builds from content meaning -- not from a checklist.

**What it replaces:** The 16-agent research-compose pipeline with its 74 constraints, mandated reading order, "build vertical first" mandate, 2-structural-section cap, and deployment quotas. Also replaces the original 11-phase $150-200 maximum-effort architecture (too expensive, topology transfer problem).

**Expected outcomes:**
- Tier A builds: 7-9/10 on 10 falsifiable criteria, $91-106, ~215-240 min
- Tier B builds: 5-7/10, ~$55-65, ~130 min
- Tier C builds: 2-4/10, ~$30-33, ~100 min (reformed current pipeline)
- FM-14 (texture regression) addressed through textural floors, unified research format, and evaluation

**Prerequisite:** Run the $0 reform experiment first (Section 2). If constraint removal alone produces 3+/10, the architecture's marginal value is quantified. If 0/10, the architecture is justified from dollar one.

---

## 2. Prerequisites: The $0 Reform Test

**Before spending $91-106 on the full architecture, run this experiment.**

### 2.1 What to Change

Apply 8 surgical edits to `builder-pass-1-prompt.md` (~85 lines changed of 432):

| Change | What It Kills | Lines |
|--------|--------------|-------|
| 1. Remove mandated reading order; put content first | C-01/C-02/C-03 | 7-27 |
| 2. Remove "build vertical first" mandate | C-06 | 202-216 |
| 3. Remove structural section cap + Section 11 dependency | A-01/A-04, C-14, E-07 | 51-82 |
| 4. Remove deployment quota + citation mandates | A-09 | 219-250 |
| 5. Remove cultural signals framing structure as risky | D-05/D-13/D-01, B-01/B-02 | 397-431 |
| 6. Remove mechanism invention prohibition | B-01/B-02 (reinforcement) | 421-431 |
| 7. ADD hypothesis-driven framing question | (NEW) | Insert after 31 |
| 8. Remove transition table mandate | C-05 | 182-200 |

Also apply ~6 lines to `builder-pass-2-prompt.md` (remove zone skeleton preservation, structural cap) and ~4 lines to `builder-pass-3-prompt.md` (remove Pass 3 creativity ban).

**Everything else stays identical:** same pipeline phases, same agent count, same specialists, same PA auditors, same cost (~$30), same article.

### 2.2 Measurement

Score the final HTML on ALL 10 falsifiable criteria (each binary PASS/FAIL):

| # | Criterion | Threshold |
|---|-----------|-----------|
| 1 | Named grid areas use content vocabulary | 2+ content-semantic named areas |
| 2 | Asymmetric grid proportions serve content hierarchy | 2+ distinct asymmetric formulas |
| 3 | Sections where layout loss = content loss | 2+ sections fail vertical collapse test |
| 4 | Self-referential components | 2+ components referencing page structure |
| 5 | Position composition pairs (relative/absolute) | 2+ pairs (not skip-link) |
| 6 | Content-mapped color semantics | 1+ color system encoding content meaning |
| 7 | Distinct spatial organization count | 4+ distinct spatial organizations |
| 8 | Transition/animation density | 6+ total |
| 9 | CSS comments reference content reasoning | 5+ of 10 sampled comments |
| 10 | Non-default reading directions | 1+ (writing-mode, float-for-layout, transform) |

Spawn 1 Opus scoring agent with the final HTML + the 10 criteria definitions. Output: `_reform-score.md`.

### 2.3 Decision Protocol

| Score | Meaning | Action |
|-------|---------|--------|
| 0/10 | Constraints are NOT the bottleneck | Proceed directly to full architecture. Constraint changes still apply (they don't hurt). |
| 1-2/10 | Marginal effect | Apply reforms permanently. Full architecture justified -- the quality gap is in information architecture. |
| 3-4/10 | Significant partial capture | Apply reforms permanently. Architecture's marginal value is 4-5 quality points, not 8. Consider Tier B ($55-65) as default. |
| 5+/10 | Transformative | Apply reforms permanently. Full architecture's marginal value is limited. Test model upgrade (Opus builder at +$10) before committing to full architecture. |

### 2.4 Cost

- Pipeline run (reformed): ~$30
- Scoring agent: ~$2-3
- **Total: ~$32-33**

### 2.5 Sub-Experiments (Optional, if resources allow)

Run these independently on the same article to isolate individual constraint contributions:

- **Sub-A:** Content-first reading only (Change 1 alone). Tests reading order. Expected: 0-1/10.
- **Sub-B:** No vertical-first + no structural cap (Changes 2+3). Tests spatial freedom. Expected: 1-3/10. **Highest leverage single sub-experiment.**
- **Sub-C:** Hypothesis framing + cultural reframe (Changes 5+7). Tests self-censorship. Expected: 0-1/10.

---

## 3. Phase-by-Phase Specification

### Phase 0: SETUP
**Purpose:** Prepare the build directory and input files.
**Agents:** 0 (orchestrator action)
**Model:** N/A
**Cost:** $0
**Time:** 5 min

**Inputs:**
- Article markdown (`content.md`)
- `tokens.css` (65 CSS custom properties)
- `components.css` (locked component implementations)

**Outputs:**
- Build directory created at `ephemeral/builds/{slug}-{date}/`
- `content.md` copied into build directory
- `tokens.css` and `components.css` copied into build directory
- `_pipeline-log.md` initialized

**Success criteria:** All input files present in build directory.
**Failure mode:** Missing content markdown. Recovery: abort with error.

---

### Phase 1: DERIVE (TC + Complexity Triage)
**Purpose:** Generate the tension-conviction brief AND assess content complexity for tier routing.
**Agents:** 1 Opus
**Model:** claude-opus-4-6
**Cost:** ~$4
**Time:** 15 min

**Inputs:**
- `content.md`
- `tc-derivation.md` (TC prompt)

**Outputs:**
- `_tc-brief.md` (metaphor, emotional arc, spatial direction, compositional intent)
- `_complexity-tier.md` containing:
  - TIER classification: A, B, or C
  - Justification (2-3 sentences)
  - Structural richness signals identified

**Complexity Triage Criteria:**

| Tier | Criteria | Build Path | Cost |
|------|----------|-----------|------|
| **A** (structurally rich) | 2+ of: (a) 3+ argument modes, (b) self-referential content, (c) non-linear argument structure | Full architecture (Phases 0-9) | $91-106 |
| **B** (moderately structured) | 1 of the above | Reduced architecture: skip Phase 3 DISCOVER; BUILD-1 gets curated research + article directly, 35 min instead of 50 | $55-65 |
| **C** (linear/procedural) | 0 of the above | Reformed $30 pipeline with constraint removal | $30-33 |

**Success criteria:** TC brief produced. Complexity tier assigned with justification.
**Failure mode:** Agent produces brief without tier. Recovery: orchestrator extracts tier from brief content or defaults to Tier B.

**If Tier C: EXIT to reformed pipeline.** Apply the 8 constraint removals from Section 2 and run the standard research-compose pipeline. Total cost: ~$30-33.

---

### Phase 2: CURATE (3 agents parallel)
**Purpose:** Produce bespoke, implementation-mapped research for this specific article.
**Agents:** 3 Opus (parallel)
**Model:** claude-opus-4-6
**Cost:** ~$12 total (~$4 each)
**Time:** 25 min (parallel)

**Agent 2A: Structural-Textural Researcher**
- **Inputs:** `content.md`, `_tc-brief.md`, mechanism catalog (`design-system/compositional-core/grammar/mechanism-catalog.md`), case studies, research findings (R1-R5)
- **Output:** `_curated-research.md` (150-250 lines)
- **Format:** UNIFIED entries organized by CONTENT PROPERTY (not by CSS property). Each entry includes:
  - The content property it expresses (e.g., "certainty gradient," "argumentative centrality")
  - Structural expression (grid proportions, layout type, positioning)
  - Textural expression (border treatment, background, typography)
  - CSS implementation snippet
  - Why the channels must agree (coherence note)
- **Must include:**
  - 8-12 content-property-organized technique entries
  - A "FRONTIER TECHNIQUES" section with 4 beyond-ceiling techniques:
    1. Container queries (component that renders differently by container width)
    2. Scroll-driven animations (layout that evolves with scroll position)
    3. Subgrid (nested elements aligning to parent grid)
    4. `clip-path` (non-rectangular boundaries encoding content meaning)
  - Each frontier technique with complete, copy-paste CSS + fallback + browser support note
  - Reference to the 4 frontier exemplification pages (from doc 16) for the builder to consult

**Agent 2B: Convention Compiler**
- **Inputs:** `tokens.css`, `components.css`, soul constraints, `design-system/compositional-core/identity/prohibitions.md`
- **Output:** `_conventions.md` (80-120 lines)
- **Format:** Binary constraints as a reference checklist:
  - Soul constraints (border-radius: 0, box-shadow: none, no gradients, no semi-transparent backgrounds, no 2px borders)
  - Container width (940-960px)
  - Responsive requirements (1440px + 768px)
  - Accessibility (skip link, ARIA landmarks, Google Fonts)
  - Token value reference (summarized from tokens.css)

**Agent 2C: Exemplar Curator**
- **Inputs:** 2-3 exploration HTML files (AD-006, OD-005 or OD-006), `content.md`
- **Output:** `_exemplar-pages.md` (100-150 lines)
- **Format:**
  - 2-3 annotated excerpts from exploration HTML files showing Phase 3 output characteristics
  - For each excerpt: the content it was built for, the spatial decision, why the layout IS the argument
  - 3-4 process traces: reasoning chains showing content → spatial hypothesis → CSS implementation
    - Example: "The AD-006 builder read about progressive depth → formed hypothesis that page should physically narrow → chose golden ratio columns (1fr 1.618fr) because 1.618 is where subordination feels natural → named area 'spiral-deep' to force content-spatial integration"
  - Framing: "These are examples of content-driven spatial design. The spatial forms were invented for THEIR content. Your content demands its OWN spatial forms."

**Success criteria:** All 3 files produced. Curated research uses unified content-property format (not separate structural/textural categories). Exemplar pages include process traces.
**Failure mode:** Agent produces research organized by CSS property instead of content property. Recovery: orchestrator flags and requests reformatting (adds ~5 min, ~$2).

---

### Phase 3: DISCOVER (Structural Analysis)
**Purpose:** Provide the builder with a "second opinion" on the article's spatial possibilities.
**Agents:** 1 Opus
**Model:** claude-opus-4-6
**Cost:** ~$5
**Time:** 15 min

**Inputs:**
- `content.md`
- `_curated-research.md`
- `_tc-brief.md`

**Outputs:**
- `_structural-analysis.md` (50-100 lines)
- Contains:
  - 3 spatial observations about the article's argument structure
  - 2 potential self-referential opportunities ("this article about X could demonstrate X")
  - 1 answer to: "What is structurally UNIQUE about this article that no standard layout pattern captures?"
  - Content complexity assessment (how many distinct argument types, where the content turns/compresses/breathes)

**What this is NOT:** A topology document. Not a blueprint. Not instructions. It is a SECOND OPINION the builder reads after forming its own impressions.

**Success criteria:** Analysis identifies specific content-spatial opportunities. Answer to "what is unique" is genuinely specific to this article (not "it has comparisons").
**Failure mode:** Generic spatial categorization ("comparison = side-by-side"). Recovery: acceptable -- the builder's own reading supersedes generic analysis. No rerun needed.

**Tier B modification:** Skip this phase entirely. The builder receives `_curated-research.md` + `content.md` directly. Cost savings: ~$5. Quality impact: builder loses the second opinion but still has curated research vocabulary.

---

### Phase 4: BUILD-1 (Immerse + Build)
**Purpose:** THE KEY PHASE. The builder reads the article, forms its own spatial topology, and builds the page.
**Agents:** 1 Opus
**Model:** claude-opus-4-6
**Cost:** ~$22
**Time:** 50 min

**Inputs:**
1. `content.md` (THE PRIMARY INPUT -- read first)
2. `_structural-analysis.md` (read after own impressions formed)
3. `_curated-research.md` (spatial + textural vocabulary as reference)
4. `_exemplar-pages.md` (what Phase 3 output looks like -- perceptual calibration)
5. `_conventions.md` (binary constraints as reference checklist)
6. `tokens.css` (CSS custom properties)
7. `components.css` (locked component implementations)

**The BUILD-1 Prompt** (~98 lines, from doc 13 with modifications):

```markdown
# BUILD-1: Immerse and Build

You are building a designed HTML page for the article below. This is a single
extended session -- read deeply, then build boldly. The article is someone's
work. Your job is not to decorate it. Your job is to give it the spatial form
it deserves -- the form that feels inevitable, as if this content could not
have been presented any other way.

---

## 1. The Article

**Read the attached `content.md` fully before doing anything else.**

As you read, notice: What is this article really ABOUT -- not the topic, but
the underlying argument or movement? Where does the argument compress? Where
does it breathe? Where does it turn? What surprised you?

---

## 2. Your Spatial Impressions

Before reading any other file, write 3-5 bullet points in your thinking:

- What spatial form does this content suggest to you?
- Which sections demand non-standard treatment -- and what kind?
- If you could only make THREE spatial decisions for this page, what would
  they be?
- Where does the content reference, demonstrate, or mirror its own subject?

These impressions are yours. They will anchor your build. Hold onto them.

---

## 3. Structural Analysis

Now read `_structural-analysis.md`. This is a second opinion from an agent
who also read the article deeply.

Where does it align with your impressions? Where does it see something you
missed? Where do you disagree? Update your spatial plan if the analysis is
compelling, but do not abandon your own reading of the content.

---

## 4. Available Vocabulary

Read the curated research files. These are spatial and textural techniques
available to you -- not assignments.

- `_curated-research.md` -- Unified content-property techniques with CSS examples
- `_exemplar-pages.md` -- What content-driven spatial design looks like
  (examples from prior builds, NOT templates to copy)
- `tokens.css` -- Design system custom properties
- `components.css` -- Locked component implementations

Use what the content demands. Ignore what it does not. These files are your
palette, not your instructions.

**Frontier techniques** are available if the content warrants them:
- Container queries -- components that render differently based on container width
- Scroll-driven animations -- layout that evolves with scroll position
- Subgrid -- nested elements aligning to parent grid tracks
- `clip-path` -- non-rectangular boundaries encoding content meaning

These are for the moment you discover a section that needs something no
standard layout provides. Do not force them. Do not avoid them.

---

## 5. Absolutes

These are physics, not style. Violating any invalidates the build.

* { border-radius: 0; box-shadow: none; }
No gradients (linear-gradient/radial-gradient forbidden).
No semi-transparent backgrounds (rgba with alpha < 1 forbidden).
No 2px borders (use 1px or 3px+).
Container: max-width 940-960px.
Responsive: must work at 1440px AND 768px. Every non-vertical layout needs
a @media (max-width: 768px) block. Verify as you build.
Accessibility: skip link to #main, ARIA landmark roles.
Fonts: Google Fonts (Instrument Serif, Inter, JetBrains Mono).

---

## 6. Texture Floor

Your page must have at minimum:
- 3 distinct zone backgrounds (neighboring zones differ by >= 15 RGB points)
- 2 meaningful border treatments (not decorative -- encoding hierarchy,
  grouping, or emphasis)
- 2 hover or transition states (revealing depth, connection, or state change)

These are floors, not targets. They prevent blind spots, not limit ambition.

---

## 7. Build

Start with the section you feel strongest about -- the one where your spatial
impression is clearest. Build zone by zone.

**Naming:** Name grid areas after content meaning, not position. Name classes
after function, not appearance. Name custom properties after your metaphor.

**Building sequence guidance:**
- First 60% of your build time: STRUCTURAL DECISIONS. Choose layouts. Build
  the spatial skeleton. Name grid areas after content concepts.
- Last 40%: TEXTURAL REFINEMENT. Add zone backgrounds, border accent colors,
  hover states, letter-spacing variation, typographic detail.

All CSS values come from tokens.css custom properties. Your names encode the
metaphor; the values come from the design system.

Build the complete page as a single self-contained HTML file with all CSS
in a <style> block.

---

## 8. Reflection

After building, write `_build-1-reflection.md` answering honestly:

1. What spatial decisions surprised you -- choices that emerged from building
   rather than from planning?
2. Where did you deviate from the structural analysis, and why?
3. What would you deepen with 30 more minutes?
```

**Outputs:**
- `_build-pass-1.html` (the complete self-contained page)
- `_build-1-reflection.md` (honest answers to 3 reflection questions)

**Success criteria:** HTML file produced. At least 600 lines of CSS. Grid-template-areas present with content-semantic names (not "left right").
**Failure mode:** Builder produces generic vertical layout despite 50 minutes. Detection: Phase 4.5 detector (see below).

**Tier B modification:** BUILD-1 time reduced to 35 min (~$15). No structural analysis input. Builder gets curated research + article directly. Expected quality: 5-7/10 (lower due to less immersion time and no second opinion).

---

### Phase 4.5: PHASE 3 DETECTOR (Mandatory Checkpoint)
**Purpose:** Determine whether the builder achieved Phase 3 (content-topology formation) or stalled at Phase 2 (generic layouts).
**Agents:** 1 Opus (lightweight)
**Model:** claude-opus-4-6
**Cost:** ~$3
**Time:** 10 min

**Inputs:**
- `_build-pass-1.html`
- `content.md`
- The 7 binary detection signals (defined below)

**The 7 Phase 3 Detection Signals:**

| # | Signal | Phase 2 | Phase 3 | Binary Test |
|---|--------|---------|---------|-------------|
| 1 | Grid area names | Generic ("main sidebar") or absent | Content-vocabulary ("paradigm-clash", "evidence-spiral") | 2+ content-vocabulary grid-template-areas? |
| 2 | Asymmetric proportions | All symmetric or generic 3fr/1fr | Content-justified ratios (1.618fr with reasoning) | 2+ non-symmetric grid formulas? |
| 3 | Swap test | Swapping layouts between sections loses nothing | Swapping damages content argument | 2+ sections where swap damages meaning? |
| 4 | Self-referential components | Zero | 1+ component referencing page's own structure | 1+ self-referential component? |
| 5 | CSS comments | Describe layout structure ("comparison grid") | Explain content reasoning ("winner paradigm gets wider") | 5+ of 10 comments are content-reasoning? |
| 6 | Layout diversity | 1-2 distinct layout systems | 4+ distinct layout systems | 4+ distinct systems? |
| 7 | Non-default reading direction | Zero | 1+ writing-mode, positioned composition | 1+ non-default direction or positioned pair? |

**Scoring:**
- **5-7 signals YES: Phase 3 confident.** Proceed to Phase 5 (EVALUATE-1).
- **3-4 signals YES: Phase 3 marginal.** Proceed to Phase 5 with note to evaluators about partial transition.
- **0-2 signals YES: Phase 2 stall.** Trigger RECOVERY PATH (Phase 4.5R).

**Output:** `_phase-3-detection.md` with signal scores, overall assessment, and routing decision.

**Success criteria:** Clear routing decision produced.
**Failure mode:** Ambiguous assessment (exactly 3 signals, borderline). Recovery: default to proceeding to Phase 5 with marginal note.

---

### Phase 4.5R: RECOVERY PATH (Conditional -- only if Phase 2 stall detected)
**Purpose:** Push the builder past the Phase 2 stall with targeted re-engagement.
**Agents:** 1 Opus (same builder context if possible, new agent if not)
**Model:** claude-opus-4-6
**Cost:** ~$10-12
**Time:** 25-30 min

**Inputs:**
- `_build-pass-1.html`
- `content.md`
- Recovery prompt (below)

**Recovery Prompt:**
```markdown
Your BUILD-1 output shows strong structural organization but the layouts are
not yet coupled to the CONTENT's specific meaning. Here is a test:

For each section, I swapped the layout with an adjacent section's layout. In
none of the cases did the swap damage the content's argument.

This means the layouts are DECORATING the content, not EMBODYING it.

Pick your 2 strongest sections. For EACH:
1. Re-read the section in the article
2. Write 2 sentences about what this section ARGUES, not what it contains
3. Ask: what spatial form would MAKE that argument visible?
4. Rebuild the section's CSS from your answer

You have 30 additional minutes. Focus on depth, not breadth.
```

**Output:** Updated `_build-pass-1.html` with deepened spatial coupling in 2+ sections.

**Success criteria:** Re-run Phase 3 detector on updated output. If 3+ signals now YES, proceed. If still 0-2, proceed anyway -- further investment has diminishing returns.
**Failure mode:** Builder still stalls. Recovery: accept the output and proceed. The evaluation cycle (Phase 5-6) may still improve it. Do NOT trigger a second recovery -- two stalls means this article may be Tier B/C content misclassified as Tier A.

**Cost impact:** Recovery adds $10-12 and 25-30 min. Total Tier A cost with recovery: $101-118. Without recovery: $91-106.

---

### Phase 5: EVALUATE-1 (3 agents parallel)
**Purpose:** Assess BUILD-1 output and produce PRESCRIPTIVE (not scored) feedback for BUILD-2.
**Agents:** 3 Opus (parallel)
**Model:** claude-opus-4-6
**Cost:** ~$12 total (~$4 each)
**Time:** 20 min (parallel)

**Agent 5A: Coupling Evaluator**
- **Inputs:** `_build-pass-1.html`, `content.md`, 10 falsifiable criteria (INTERNAL USE ONLY)
- **Output:** `_eval-1-coupling.md` (80-120 lines)
- **Method:** Uses the 10 criteria internally to structure analysis. Does NOT share scores with the builder. Translates criteria-based observations into NARRATIVE PRESCRIPTIONS:
  - For each section where coupling is weak: identifies the specific section, describes the content's argument, proposes a specific spatial alternative
  - Example: "Section 4 compares two paradigms using symmetric 1fr 1fr. The article presents the new paradigm as winning. Asymmetric 2fr 1fr with the winner in the wider column would embody this argument."
- **Format:** 3-5 specific prescriptions, each with: section identified, content reason, spatial recommendation, CSS sketch

**Agent 5B: Maturity Evaluator**
- **Inputs:** `_build-pass-1.html`, `content.md`, 11 maturity component definitions (from doc 09)
- **Output:** `_eval-1-maturity.md` (60-100 lines)
- **Method:** Assesses all 11 maturity components. Identifies the 3 WEAKEST components. For each: describes what's missing and prescribes a specific CSS-level improvement.
- **The 11 maturity components:**
  1. Proportional confidence (non-trivial ratios encoding meaning)
  2. Z-axis mastery (positioned composition, sticky elements, solid offsets)
  3. Temporal responsiveness (hover, transitions, scroll-driven effects)
  4. Spatial invention (layouts that exist nowhere in references)
  5. Semantic restraint (knowing where NOT to add density)
  6. Typographic authority (the page has a "voice")
  7. Border architecture (systematic border-weight encoding)
  8. Content-semantic naming (class names, grid areas reference content)
  9. Responsive intelligence (per-section responsive strategies, not one-size-fits-all)
  10. Compositional layering (3+ CSS features composing into emergent effects)
  11. Micro-perceptual calibration (background deltas >= 15 RGB, letter-spacing >= 0.5px, spacing >= 24px between zones)

**Agent 5C: Compliance Evaluator**
- **Inputs:** `_build-pass-1.html`, `_conventions.md`
- **Output:** `_eval-1-compliance.md` (30-60 lines)
- **Method:** Binary check of ALL soul constraints and conventions. Lists violations with line numbers and fix instructions.
- **Checks:** border-radius, box-shadow, gradients, semi-transparent backgrounds, 2px borders, container width, responsive at 768px, skip link, ARIA landmarks, Google Fonts loaded, tokens used for CSS values

**Success criteria:** All 3 evaluation files produced. Coupling evaluator provides narrative prescriptions (not scores). Maturity evaluator identifies 3 weakest components.
**Failure mode:** Evaluator shares numerical scores with builder. Recovery: orchestrator strips scores before forwarding to BUILD-2. Only narrative prescriptions reach the builder.

---

### Phase 6: BUILD-2 (Deepen)
**Purpose:** Deepen the page based on evaluation feedback. Address compliance violations AND deepen structural/textural quality.
**Agents:** 1 Opus
**Model:** claude-opus-4-6
**Cost:** ~$14
**Time:** 30 min

**Inputs:**
- `_build-pass-1.html` (the full BUILD-1 output)
- `content.md` (re-provided for content re-engagement)
- `_eval-1-coupling.md` (narrative prescriptions)
- `_eval-1-maturity.md` (3 weakest components with specific improvements)
- `_eval-1-compliance.md` (violations with fix instructions)
- `_curated-research.md` (still available as vocabulary)

**BUILD-2 Prompt Framing:**
```markdown
Read the evaluation feedback. It identifies specific sections where the
spatial logic can be deepened and specific maturity areas to strengthen.

MANDATORY: Fix all compliance violations listed in the compliance report.

FOR DEEPENING: The coupling and maturity evaluations identify specific
sections and specific improvements. For each:
1. Re-read the relevant section in content.md
2. Re-engage with WHY the evaluator's suggestion serves the content
3. Implement the spatial change from content understanding, not from
   compliance pressure

Cosmetic changes (renaming grid areas without changing the layout, adding
hover states without content purpose) do NOT count as deepening. Deepening
means changing the SPATIAL LOGIC of at least 2 sections based on deeper
content engagement.

Every spatial decision should carry textural meaning. Every textural
choice should serve content structure. If your border accent color could
be swapped with a different color without losing content meaning, the
texture is decorative, not structural.
```

**Outputs:**
- `_build-pass-2.html` (the deepened page)
- `_build-2-reflection.md` (what changed and why)

**Success criteria:** All compliance violations fixed. At least 2 sections structurally deepened (not cosmetically patched). CSS line count increases or stays stable (decrease suggests regression).
**Failure mode:** Builder applies cosmetic patches only. Detection: in Phase 7, evaluators check whether structural logic of identified sections actually changed.

---

### Phase 7: EVALUATE-2 (Weaver Synthesis + Restraint)
**Purpose:** Full assessment of BUILD-2 output. Determine whether to SHIP or trigger optional BUILD-3.
**Agents:** 4 Opus (3 parallel evaluators + 1 weaver)
**Model:** claude-opus-4-6
**Cost:** ~$18 total
**Time:** 25 min (evaluators parallel, then weaver sequential)

**Agent 7A: Coupling Evaluator** (same role as 5A, re-assessing BUILD-2)
- Score all 10 falsifiable criteria internally
- Produce narrative assessment of remaining gaps

**Agent 7B: Maturity Evaluator** (same role as 5B, re-assessing BUILD-2)
- Score all 11 maturity components
- Identify remaining weak areas

**Agent 7C: Restraint Evaluator** (NEW)
- For each non-vertical layout in the page: "Would a standard vertical column have served the reader equally well?"
- If YES for any layout: flag as potentially overbuilt
- Prevents the overbuilding risk (FM-6 from adversarial review)

**Agent 7D: Weaver**
- Reads all 3 evaluator reports
- Produces unified synthesis using AMPLIFY / RELEASE / DEEPEN / GAP framework
- Makes SHIP/DEEPEN decision:
  - **SHIP:** Quality is sufficient. Proceed to Phase 9 (Final Check).
  - **DEEPEN:** Specific, fixable issues identified. Trigger Phase 8 (BUILD-3).
- **SHIP criteria:** 6+/10 falsifiable criteria pass. No compliance violations. No restraint flags. 7+/11 maturity components adequate.
- **DEEPEN criteria:** 2+ specific, addressable items identified. NOT triggered for general "could be better" -- only for items with concrete CSS-level fixes.

**Outputs:**
- `_eval-2-coupling.md`
- `_eval-2-maturity.md`
- `_eval-2-restraint.md`
- `_eval-2-weaver.md` (unified synthesis with SHIP/DEEPEN decision)

**Success criteria:** Clear SHIP/DEEPEN decision with specific justification.
**Failure mode:** Weaver cannot decide. Recovery: default to SHIP if 5+/10 criteria pass. Default to DEEPEN if < 5/10.

---

### Phase 8: BUILD-3 (Optional Polish)
**Purpose:** Final polish and hardening. Only triggered if EVALUATE-2 identifies specific fixable issues.
**Agents:** 1 Opus
**Model:** claude-opus-4-6
**Cost:** ~$10
**Time:** 20 min

**Inputs:**
- `_build-pass-2.html`
- `content.md`
- `_eval-2-weaver.md` (specific items to address)

**BUILD-3 Prompt Framing:**
```markdown
The evaluation identified these specific items:
[weaver's DEEPEN items inserted here]

Fix these items. Do NOT rebuild sections that already work. Do NOT add
new spatial complexity. This is hardening, not invention.

You may add structural depth where evaluation feedback identifies genuine
gaps. Fix compliance issues AND deepen spatial quality where warranted.
```

**Output:** `_build-final.html`

**Success criteria:** All identified items addressed. No regressions in previously passing criteria.
**Failure mode:** Builder introduces new violations while fixing identified items. Detection: Phase 9 catches regressions.

---

### Phase 9: FINAL CHECK (Compliance Verification)
**Purpose:** Final compliance verification. No creative assessment -- that was Phase 7's job.
**Agents:** 1 Opus
**Model:** claude-opus-4-6
**Cost:** ~$4
**Time:** 10 min

**Inputs:**
- `_build-final.html` (or `_build-pass-2.html` if Phase 8 was skipped)
- `_conventions.md`

**Output:** `_final-check.md`

**Checks (binary only):**
1. border-radius: 0 everywhere
2. box-shadow: none
3. No gradients
4. No semi-transparent backgrounds
5. Container width 940-960px
6. No 2px borders
7. Responsive at 768px (all non-vertical layouts have @media block)
8. Skip link present and functional
9. ARIA landmarks present (banner, main, contentinfo)
10. Google Fonts linked (Instrument Serif, Inter, JetBrains Mono)

**Success criteria:** All 10 checks pass.
**Failure mode:** 1+ violations found. Recovery: list violations in `_final-check.md`. Orchestrator can apply trivial fixes directly (border-radius, box-shadow) without spawning another builder. Non-trivial violations (responsive failures) require orchestrator judgment -- fix inline or accept.

---

## 4. The BUILD-1 Prompt

The complete BUILD-1 prompt is specified in Phase 4 above (the code block under "The BUILD-1 Prompt"). Key modifications from the draft in doc 13:

1. **Added "building sequence guidance"** (from doc 12/15 texture-structure analysis): explicit instruction to spend first 60% on structure, last 40% on texture. This is a safety net for builders who don't naturally achieve unified structure-texture decisions. Builders who DO achieve the unified state will naturally ignore this sequencing.

2. **Added exemplar pages as input** (from doc 17 transition reliability): the builder receives `_exemplar-pages.md` containing annotated exploration excerpts and process traces. This addresses Components B (design pattern familiarity) and F (evaluation calibration) that would otherwise be absent.

3. **Kept frontier techniques as vocabulary** (from synthesis Section 2.5): frontier techniques are available, not mandated. NOT included in evaluation criteria -- they must emerge from content engagement, not compliance pressure.

4. **Texture floor retained** (from doc 06 adversarial review M-2B): 3 zone backgrounds, 2 border treatments, 2 hover states. Prevents texture-blind structural builds (FM-14).

5. **"Start with strongest section" retained** (from doc 17 Intervention 3): accelerates Phase 2→3 transition by having the builder start where spatial conviction is strongest.

---

## 5. Evaluation Protocol

### 5.1 Core Principle: Narrative Prescriptions, Not Scores

Evaluators use the 10 falsifiable criteria and 11 maturity components INTERNALLY to structure their analysis. They do NOT share numbers with the builder. The builder receives NARRATIVE PRESCRIPTIONS that identify specific sections, describe content reasons, and propose spatial alternatives.

**Why:** Scores produce checklist optimization (doc 06, FM-7). The builder adds named grid areas to satisfy Criterion 1 without re-engaging with content. Narratives force content re-engagement: "Section 4's comparison treats both paradigms equally, but the article argues one is winning."

### 5.2 The 7-Signal Phase 3 Detector

Used at Phase 4.5 (mandatory checkpoint after BUILD-1). The 7 binary signals are defined in Phase 4.5 above. Scoring thresholds:
- 5-7 YES: Phase 3 confident → proceed
- 3-4 YES: Phase 3 marginal → proceed with note
- 0-2 YES: Phase 2 stall → trigger recovery (Phase 4.5R)

### 5.3 Texture-Structure Coupling Assessment

From doc 15 (texture-structure unification), evaluators check for the 7 types of unified decisions:

| Type | What to Check | Example |
|------|--------------|---------|
| 1. Color-as-hierarchy | Border colors encode certainty/importance levels | Blue = validated, amber = exploratory |
| 2. Weight-as-authority | Border thickness, font-weight encode importance | 4px = established, 1px = speculative |
| 3. Proportion-as-meaning | Grid ratios encode relative content importance | 1.618fr for the hub/convergence point |
| 4. Background-as-zone | Background color delineates functional areas | Warm = foundational, light = operational |
| 5. Self-reference-as-ornament | Component visualizes page's own structure | Pattern echo grid, scroll witness |
| 6. Typography-as-register | Font family encodes content type | Serif = philosophical, mono = technical |
| 7. Depth-as-importance | Z-axis (sticky, absolute) encodes attention priority | Sticky sidebar = "always accessible" |

**The coupling test:** For each unified decision found, ask: "If I remove this CSS property, do I lose BOTH structural meaning AND textural quality simultaneously?" If YES → genuinely unified. If only one is lost → the decision is separate, not coupled.

### 5.4 Maturity Component Targeting

From synthesis Section 2.4, the 11 maturity components fall into 3 categories:

**Emerge naturally from Phase 3 engagement (no explicit evaluation needed):**
- Component 1: Proportional confidence
- Component 4: Spatial invention
- Component 6: Typographic authority
- Component 8: Content-semantic naming

**Need vocabulary support (evaluation should check presence, not quality):**
- Component 2: Z-axis mastery
- Component 3: Temporal responsiveness
- Component 10: Compositional layering

**Require evaluation feedback (evaluators must actively prescribe improvements):**
- Component 5: Semantic restraint
- Component 7: Border architecture
- Component 9: Responsive intelligence
- Component 11: Micro-perceptual calibration

### 5.5 What Evaluators Must NOT Do

- Share numerical scores with the builder
- Use the 10 falsifiable criteria as a rubric the builder sees
- Include frontier techniques in evaluation criteria (they must emerge from content engagement)
- Recommend cosmetic patches ("add hover states") without content justification ("add a hover state on the hub-spoke tiles because they are navigation — the reader should feel the interactive affordance")

---

## 6. Curated Research Package Requirements

### 6.1 Organization: By Content Property, Not CSS Property

The single most important research format decision (from doc 15 texture-structure unification): organize findings by the CONTENT PROPERTY they express, not by the CSS property they use.

**WRONG (creates structure-texture split):**
```
Structural findings:
- Use 3fr 1fr for content-sidebar
- Use named grid areas
Textural findings:
- Use 3 zone backgrounds
- Use border-weight gradient
```

**RIGHT (creates unified understanding):**
```
CONTENT PROPERTY: Knowledge certainty
  Border-left width: 4px = established, 3px = emerging, 1px = exploratory
  Font-weight: 500/400/300 (matches border weight)
  Line-height: 1.4/1.6/1.8 (matches spacing)
  All channels must AGREE.
```

### 6.2 Required Contents

The curated research package (`_curated-research.md`) must include:

1. **8-12 unified technique entries** organized by content property, each with structural + textural CSS
2. **Frontier techniques section** with 4 complete examples:
   - Container queries (component renders differently by container width)
   - Scroll-driven animations (layout evolves with scroll position)
   - Subgrid (nested alignment to parent grid)
   - `clip-path` (non-rectangular boundaries encoding meaning)
   - Each with complete CSS + HTML + fallback + browser support + responsive strategy
3. **Technique entries must include** implementation-level CSS (not just technique names)

### 6.3 Exemplar Pages and Process Traces

The exemplar curator (`_exemplar-pages.md`) must include:

1. **2-3 annotated excerpts** from exploration HTML files showing:
   - Content-semantic grid area names in context
   - Asymmetric proportions with content justification
   - Self-referential components
   - The "swap test" applied (explaining why swapping layouts would damage meaning)

2. **3-4 process traces** showing the content → spatial form reasoning chain:
   - Content observation → spatial hypothesis → CSS implementation
   - Diverse: different content types, different spatial solutions
   - Shows the PROCESS of mapping, not just the OUTPUT

3. **Framing:** "These are vocabulary, not templates. Your content demands its own spatial forms."

### 6.4 Convention Spec

The convention compiler (`_conventions.md`) provides binary constraints as a reference checklist. 80-120 lines. The builder reads it AFTER reading content and forming impressions -- it is a reference, not a primary input.

---

## 7. Content Triage Decision Tree

```
                    ┌─── Article arrives ───┐
                    │                       │
                    ▼                       │
            Phase 1: TC Agent              │
            assesses complexity            │
                    │                       │
          ┌─────────┼─────────┐            │
          ▼         ▼         ▼            │
       TIER A     TIER B    TIER C         │
    (2+ signals) (1 signal) (0 signals)    │
          │         │         │            │
          ▼         ▼         ▼            │
    Full arch.   Reduced   Reformed        │
    $91-106     $55-65    pipeline         │
    ~235 min    ~130 min  $30-33           │
    7-9/10      5-7/10    ~100 min        │
    target      target    2-4/10 target   │
```

### Complexity Signals (assessed by Phase 1 TC agent):

| Signal | What It Detects | Example |
|--------|----------------|---------|
| **3+ argument modes** | The article compares, synthesizes, progresses, AND demonstrates | An article about design systems that compares 3 approaches, builds a progressive argument, synthesizes into principles, AND demonstrates self-referentially |
| **Self-referential content** | The article's subject is related to its own form | An article about visual hierarchy, spatial design, teaching methodology, or recursive structures |
| **Non-linear argument structure** | The article doesn't proceed linearly from A→B→C | An article that recurses, spirals, or has a hub-spoke argument (central thesis with radiating evidence) |

### Tier Routing:

**TIER A (2+ signals):** Full architecture. Phases 0-9 as specified. Expected 7-9/10.

**TIER B (1 signal):** Reduced architecture.
- Phase 0: SETUP ($0, 5 min)
- Phase 1: DERIVE ($4, 15 min)
- Phase 2: CURATE -- 2 agents only: unified researcher + convention compiler ($8, 25 min). No exemplar curator.
- Phase 3: SKIPPED
- Phase 4: BUILD-1 -- 35 min instead of 50. Article + curated research + conventions. No structural analysis. ($15, 35 min)
- Phase 4.5: Phase 3 detector ($3, 10 min)
- Phase 5: EVALUATE-1 -- 2 agents: coupling + compliance ($8, 20 min). No maturity evaluator.
- Phase 6: BUILD-2 ($10, 25 min)
- Phase 7: EVALUATE-2 -- 1 weaver only ($5, 15 min). SHIP/DEEPEN decision.
- Phase 9: FINAL CHECK ($4, 10 min)
- **Total: ~$57-62, ~155 min**

**TIER C (0 signals):** Reformed pipeline with 8 constraint removals from Section 2. ~$30-33, ~100 min.

### Abort Gate

After Phase 5 (EVALUATE-1), if the coupling evaluator identifies foundational topology problems (0-1/10 criteria passing despite BUILD-1), the orchestrator presents:
- Current spend (~$56 for Tier A at this point)
- Evaluation summary
- Estimated remaining cost ($35-50)
- Recommendation: CONTINUE (if 3+/10) / ABORT (if < 3/10)

If ABORT: the BUILD-1 output is shipped as-is. The remaining $35-50 would not fix a foundational topology problem -- it would produce expensive cosmetic patches.

---

## 8. Risk Register

### Top 10 Risks (Ordered by Likelihood x Impact)

#### RISK 1: Phase 2 Stall — Builder Does Not Achieve Content-Topology Formation
**Source:** FM-9 (variance), doc 17 (P=0.50 baseline)
**Likelihood:** MEDIUM-HIGH (P=0.45-0.55 without interventions)
**Impact:** HIGH ($91-106 spent for 5-6/10 output)
**Detection:** Phase 4.5 detector (7 binary signals). 0-2 signals YES = stall detected.
**Mitigation:**
1. MANDATORY: Include exemplar pages with process traces in curated research (raises P to 0.55-0.65)
2. MANDATORY: Include 3-4 reasoning traces modeling content→spatial mapping (raises P to 0.60-0.70)
3. MANDATORY: Phase 4.5 detector with recovery path (raises P to 0.70-0.80)
4. OPTIONAL (Tier A only): Dual builders -- two independent BUILD-1 agents, select the one that achieved deeper transition (raises P to 0.85-0.92, adds ~$22)
**Residual risk with all mandatory mitigations:** P(stall) = 0.20-0.30

#### RISK 2: Texture Regression (FM-14) — Structure Consumes Entire CSS Budget
**Source:** FM-14 (adversarial review), doc 12 (texture-structure analysis)
**Likelihood:** MEDIUM (evidence: AD-006 spent 716 structural CSS lines, texture was secondary)
**Impact:** MEDIUM-HIGH (page scores well on structural criteria but looks flat)
**Detection:** Phase 5 maturity evaluator checks components 3 (temporal responsiveness), 7 (border architecture), 11 (micro-perceptual calibration)
**Mitigation:**
1. MANDATORY: Texture floor in BUILD-1 prompt (3 backgrounds, 2 borders, 2 hovers)
2. MANDATORY: Unified content-property research format (texture is inseparable from structure)
3. MANDATORY: Building sequence guidance (first 60% structure, last 40% texture)
4. Phase 5 maturity evaluator specifically prescribes textural improvements for BUILD-2
**Residual risk:** LOW. The texture floor prevents the worst case. The unified research format prevents the structure/texture split at the cognitive level.

#### RISK 3: Wasted Investment on Simple Content
**Source:** Attack Vector 10 (adversarial review)
**Likelihood:** HIGH (many articles are linear/procedural)
**Impact:** HIGH ($91+ on content warranting $30)
**Detection:** Phase 1 complexity triage
**Mitigation:** MANDATORY content complexity triage with 3 tiers (A/B/C). Tier C exits to reformed $30 pipeline.
**Residual risk:** LOW if triage is accurate. MEDIUM if triage misclassifies (see Risk 8).

#### RISK 4: Output Token Limits / Quality Cliff (Long Articles)
**Source:** Attack Vector 7 (adversarial review)
**Likelihood:** MEDIUM-HIGH (for articles with 10+ sections, 3,000+ words)
**Impact:** HIGH (magnificent early sections, flat late sections)
**Detection:** Phase 3 DISCOVER agent estimates total HTML output size
**Mitigation:**
1. Phase 3 DISCOVER agent flags articles estimated to produce >2,000 HTML lines
2. For flagged articles: BUILD-1 prompt adds "Focus spatial invention on 5 strongest sections. Remaining sections use clean vertical treatment."
3. BUILD-2 focuses deepening on the 3 weakest sections identified by evaluators
4. If article is extremely long (5,000+ words): consider splitting into 2 builder agents with shared convention spec (adds ~$15)
**Residual risk:** MEDIUM. Token limits are a hard constraint. Mitigation reduces impact but cannot eliminate it.

#### RISK 5: Criteria Gaming — Builder Optimizes for Evaluation Rubric
**Source:** FM-7 (adversarial review), Attack Vector 8C
**Likelihood:** MEDIUM-HIGH (LLMs naturally optimize for explicit criteria)
**Impact:** MEDIUM (scores improve but miss genuine topology deepening)
**Detection:** Phase 7 restraint evaluator checks whether spatial decisions serve content or rubric
**Mitigation:**
1. MANDATORY: Evaluators share narrative prescriptions, NOT scores
2. MANDATORY: Builder never sees the 10 falsifiable criteria or 11 maturity components
3. MANDATORY: Evaluation feedback references specific content passages, forcing re-engagement
4. Phase 7 adds restraint evaluator: "Would a vertical column serve equally well?"
**Residual risk:** LOW. Narrative feedback is much harder to game than numerical criteria.

#### RISK 6: Accumulated Knowledge Gap — Single Session Cannot Match Multi-Week Exploration
**Source:** Attack Vector 5 (adversarial review), doc 17 Components A-F
**Likelihood:** HIGH (structural gap between single-session and multi-week)
**Impact:** MEDIUM (6-7/10 achievable vs 10/10 theoretical ceiling)
**Detection:** N/A (this is a structural limitation, not a failure mode)
**Mitigation:**
1. Accept the gap. Target 7-9/10, not 10/10.
2. Exemplar pages partially compensate for Component B (design pattern familiarity)
3. Process traces partially compensate for Component C (content-form mapping experience)
4. Long-term: build cross-build accumulation system (after each build, extract 3-5 most successful spatial decisions and feed into future builds' curated research)
**Residual risk:** MEDIUM. This is the architecture's structural ceiling. Acceptable given the improvement from 0/10.

#### RISK 7: Evaluation Feedback Produces Cosmetic Patches, Not Structural Deepening
**Source:** FM-8B (adversarial review), Attack Vector 8A
**Likelihood:** MEDIUM
**Impact:** MEDIUM (BUILD-2 adds grid area names without changing layouts)
**Detection:** Compare BUILD-1 and BUILD-2 structurally -- did grid-template-areas change, or just rename?
**Mitigation:**
1. BUILD-2 prompt explicitly states: "Cosmetic changes (renaming grid areas, adding hover states without content purpose) do NOT count as deepening"
2. Coupling evaluator provides SPECIFIC spatial alternatives ("use 2fr 1fr instead of 1fr 1fr for this section because...")
3. Article re-provided with BUILD-2 input to force content re-engagement
**Residual risk:** LOW-MEDIUM. Prescriptive evaluation is the strongest defense against cosmetic patching.

#### RISK 8: Content Triage Misclassification
**Source:** Attack Vector 10, doc 17 Section 4.7
**Likelihood:** MEDIUM (some articles have hidden structural richness)
**Impact:** MEDIUM (Tier B/C article gets $30 treatment when it deserved $91)
**Detection:** Post-build scoring on falsifiable criteria. If reformed pipeline scores 0/10 on a Tier C article, it may have been misclassified.
**Mitigation:**
1. Conservative triage: default to Tier B when uncertain (rather than Tier C)
2. After first 3 live runs: calibrate triage criteria based on actual scores
3. Long-term: human spot-check of triage decisions for the first 10 articles
**Residual risk:** LOW. Misclassifying UP (Tier B→A) wastes money but doesn't reduce quality. Misclassifying DOWN (Tier A→C) is the real risk, mitigated by conservative defaults.

#### RISK 9: Builder Produces Overbuilt Page (FM-6)
**Source:** Attack Vector 6 (adversarial review)
**Likelihood:** MEDIUM (freed from caps, builder may add unnecessary spatial complexity)
**Impact:** MEDIUM (reader-hostile page that scores well on rubric)
**Detection:** Phase 7 restraint evaluator ("Would a vertical column serve equally well?")
**Mitigation:**
1. Phase 7 restraint evaluator flags unnecessary spatial complexity
2. BUILD-1 prompt does NOT say "be maximally spatial" -- it says "build what the content demands"
3. Content triage prevents spending $91 on simple articles that don't warrant spatial complexity
**Residual risk:** LOW. The restraint evaluator catches overbuilding. The content-demand framing prevents builder from seeking complexity for its own sake.

#### RISK 10: Reproducibility Variance Across Runs (FM-9)
**Source:** Attack Vector 9 (adversarial review), doc 17
**Likelihood:** MEDIUM (phase transition has inherent variance)
**Impact:** MEDIUM (inconsistent quality at premium prices)
**Detection:** Score variance across multiple runs on same article
**Mitigation:**
1. Phase 4.5 detector catches Phase 2 stalls early (before most cost is spent)
2. Recovery path (Phase 4.5R) provides a second chance
3. OPTIONAL: Dual builders for Tier A content (P(at least one Phase 3) = 0.84 at P(each)=0.60)
4. Content triage prevents $91 investment on articles where Phase 3 is unlikely (simple content)
**Residual risk:** MEDIUM. Variance is inherent in creative processes. The architecture bounds the worst case (Phase 2 stall detection) but cannot eliminate variance.

---

## 9. Success Criteria for First 3 Live Runs

### 9.1 What to Measure

Each live run produces BUILD-1 and BUILD-2 (and optionally BUILD-3) output. Score EACH build pass on:

**A. 10 Falsifiable Criteria** (binary PASS/FAIL, from doc 02):
1. Content-vocabulary grid area names (2+)
2. Asymmetric proportions serving content hierarchy (2+)
3. Layout loss = content loss (2+ sections)
4. Self-referential components (2+)
5. Position composition pairs (2+)
6. Content-mapped color semantics (1+)
7. Distinct spatial organizations (4+)
8. Transition/animation density (6+)
9. CSS comments reference content reasoning (5+ of 10)
10. Non-default reading directions (1+)

**B. 7 Phase 3 Detector Signals** (binary YES/NO, from doc 17):
Applied to BUILD-1 only. Determines whether Phase 3 occurred.

**C. 4 Textural Criteria** (binary PASS/FAIL, from doc 12):
1. Zone background variety >= 3 with >= 15 RGB delta (T1)
2. Border semantic encoding -- 2+ border accent colors mapped to content (T2)
3. Temporal responsiveness -- 2+ hover/transition states on interactive elements (T3)
4. Typography variety -- 3+ distinct letter-spacing values applied semantically (T4)

**D. 11 Maturity Components** (assessed qualitatively by evaluator, not scored to builder):
Each rated ABSENT / EMERGING / PRESENT / STRONG by the evaluator.

### 9.2 Success Thresholds

| Metric | Minimum Success | Target | Failure |
|--------|----------------|--------|---------|
| Falsifiable criteria (BUILD-2) | 5/10 | 7+/10 | < 4/10 |
| Phase 3 signals (BUILD-1) | 3/7 | 5+/7 | < 3/7 across all 3 runs |
| Textural criteria (BUILD-2) | 3/4 | 4/4 | < 2/4 |
| Maturity components at PRESENT+ | 5/11 | 7+/11 | < 4/11 |
| BUILD-1 → BUILD-2 improvement | +1 falsifiable criterion | +2-3 criteria | 0 or negative |
| Compliance violations (final) | 0 | 0 | 2+ |

### 9.3 What Each Outcome Triggers

**All 3 runs meet MINIMUM SUCCESS:**
- Architecture validated. Apply to production for Tier A/B content.
- Refine based on specific weaknesses observed (which criteria consistently fail? which maturity components lag?).

**2 of 3 runs meet MINIMUM, 1 fails:**
- Investigate the failure. Was it content misclassification (Tier B article treated as Tier A)? Was it Phase 2 stall that recovery didn't fix?
- If content-dependent: triage criteria need refinement.
- If builder-dependent: consider dual-builder option for Tier A.

**2+ runs FAIL:**
- Architecture revision needed. Identify the consistent failure pattern:
  - All Phase 2 stalls: curated research insufficient. Add more exemplar pages, more process traces, or consider dual builders as default.
  - Phase 3 achieved but scores low: evaluation feedback format needs revision (too abstract? not prescriptive enough?)
  - Texture regression in all runs: texture floor too low, or builder ignoring texture guidance. Strengthen texture floor or add explicit textural deepening pass.
  - Token limit issues: articles too long for single builder. Implement builder splitting.

### 9.4 Recommended First 3 Articles

| Run | Content Type | Tier | Purpose |
|-----|-------------|------|---------|
| 1 | Article with clear comparison/synthesis structure | A | Tests full architecture on content where spatial decisions are obvious |
| 2 | Article with self-referential or recursive subject | A | Tests whether builder discovers self-referential opportunities |
| 3 | Linear/procedural article | C (reformed pipeline) | Validates triage routing and reformed pipeline quality |

---

## 10. Cost Summary

### 10.1 Per-Phase Cost Breakdown (Tier A)

| Phase | Agents | Cost | Time | Cumulative |
|-------|--------|------|------|------------|
| 0: SETUP | 0 | $0 | 5 min | $0 |
| 1: DERIVE | 1 | $4 | 15 min | $4 |
| 2: CURATE | 3 | $12 | 25 min | $16 |
| 3: DISCOVER | 1 | $5 | 15 min | $21 |
| 4: BUILD-1 | 1 | $22 | 50 min | $43 |
| 4.5: DETECTOR | 1 | $3 | 10 min | $46 |
| 5: EVALUATE-1 | 3 | $12 | 20 min | $58 |
| 6: BUILD-2 | 1 | $14 | 30 min | $72 |
| 7: EVALUATE-2 | 4 | $18 | 25 min | $90 |
| 9: FINAL CHECK | 1 | $4 | 10 min | $94 |
| **Total (mandatory)** | **16** | **$94** | **~205 min** | |
| 8: BUILD-3 (optional) | 1 | $10 | 20 min | $104 |
| 4.5R: RECOVERY (if needed) | 1 | $10-12 | 25 min | $104-116 |
| **Total (maximum)** | **18** | **$104-116** | **~250 min** | |

### 10.2 Tier Comparison

| Tier | Total Cost | Time | Expected Quality | Cost/Quality Point |
|------|-----------|------|-----------------|-------------------|
| **A** (full) | $94-116 | 205-250 min | 7-9/10 | ~$12-15/point |
| **B** (reduced) | $57-62 | 155 min | 5-7/10 | ~$9-10/point |
| **C** (reformed) | $30-33 | 100 min | 2-4/10 | ~$10-11/point |
| Current pipeline | $30 | 100 min | 0/10 | N/A (0 quality) |
| Original 11-phase | $150-200 | 250+ min | 7-10/10 (estimated) | ~$19-25/point |

### 10.3 Where Savings Come From (vs Original 11-Phase Architecture)

| Change | Savings |
|--------|---------|
| Merged immersion + build (eliminated separate immersion agent) | ~$8 |
| Discovery replaces immersion + discover (1 agent vs 2) | ~$6 |
| 2 mandatory evaluations instead of 3 | ~$10 |
| Optional BUILD-3 instead of mandatory | $0-12 |
| Content triage routes simple content to cheaper paths | $0-60 per build |
| Added Phase 4.5 detector | -$3 (new cost) |
| Added exemplar curator in Phase 2 | -$4 (new cost) |
| **Net per Tier A build** | **~$46-96 savings vs original $150-200** |

### 10.4 Cost Reconciliation

The synthesis (doc 11) estimated $91-101. The transition reliability analysis (doc 17) identified $3-5 extra for mandatory interventions (exemplar pages, process traces, Phase 3 detector). This spec resolves the conflict:

- **Base mandatory cost: $94** (includes Phase 4.5 detector at $3 and exemplar curator at $4 that the original synthesis did not include)
- **With optional BUILD-3: $104**
- **With recovery path: $104-116**
- **Effective cost for mixed Tier portfolio:** If 30% of articles are Tier A, 40% Tier B, 30% Tier C: weighted average = 0.3 * $94 + 0.4 * $60 + 0.3 * $31 = $28.2 + $24 + $9.3 = **~$61 average per article**

---

## Appendix A: File Manifest

Every build produces these files:

| File | Phase | Purpose |
|------|-------|---------|
| `content.md` | 0 | Article markdown (input) |
| `tokens.css` | 0 | Design system properties (input) |
| `components.css` | 0 | Locked components (input) |
| `_pipeline-log.md` | 0 | Build progress log |
| `_tc-brief.md` | 1 | Tension-conviction brief |
| `_complexity-tier.md` | 1 | Tier classification + justification |
| `_curated-research.md` | 2 | Unified content-property research |
| `_conventions.md` | 2 | Binary constraints reference |
| `_exemplar-pages.md` | 2 | Annotated exploration excerpts + process traces |
| `_structural-analysis.md` | 3 | Second opinion on spatial possibilities |
| `_build-pass-1.html` | 4 | First build output |
| `_build-1-reflection.md` | 4 | Builder's reflection on surprises/deviations |
| `_phase-3-detection.md` | 4.5 | 7-signal Phase 3 assessment |
| `_eval-1-coupling.md` | 5 | Narrative coupling prescriptions |
| `_eval-1-maturity.md` | 5 | 3 weakest maturity components |
| `_eval-1-compliance.md` | 5 | Binary compliance violations |
| `_build-pass-2.html` | 6 | Deepened build output |
| `_build-2-reflection.md` | 6 | Builder's deepening reflection |
| `_eval-2-coupling.md` | 7 | Final coupling assessment |
| `_eval-2-maturity.md` | 7 | Final maturity assessment |
| `_eval-2-restraint.md` | 7 | Overbuilding check |
| `_eval-2-weaver.md` | 7 | SHIP/DEEPEN decision |
| `_build-final.html` | 8 | Final polished output (if BUILD-3 triggered) |
| `_final-check.md` | 9 | Compliance verification |

---

## Appendix B: FM-14 Texture Regression — How It's Addressed Throughout

FM-14 is the user's primary concern: that structural invention will consume the builder's attention, leaving texture flat. This appendix traces how each phase addresses it.

| Phase | FM-14 Mitigation |
|-------|-----------------|
| Phase 2 (CURATE) | Research organized by CONTENT PROPERTY, not CSS property. Texture is inseparable from structure at the research level. Builder never sees "structural findings" and "textural findings" as separate categories. |
| Phase 2 (CURATE) | Exemplar pages show pages with BOTH structure AND texture. Builder sees that exploration-era output has rich borders, backgrounds, hover states alongside spatial invention. |
| Phase 4 (BUILD-1) | Texture floor: 3 zone backgrounds, 2 border treatments, 2 hover states. Binary floor prevents texture blindness. |
| Phase 4 (BUILD-1) | Building sequence guidance: "first 60% structure, last 40% texture." Ensures time allocation for textural refinement. |
| Phase 5 (EVALUATE-1) | Maturity evaluator specifically assesses temporal responsiveness (Component 3), border architecture (Component 7), micro-perceptual calibration (Component 11). Texture gaps are identified and prescribed for BUILD-2. |
| Phase 6 (BUILD-2) | BUILD-2 unified framing: "Every spatial decision should carry textural meaning." After structural skeleton exists, BUILD-2 deepens the coupling between structure and texture. |
| Phase 7 (EVALUATE-2) | 4 textural criteria assessed alongside 10 structural criteria. Texture is not a sidebar — it is half the evaluation. |

**The evidence that this works:** Doc 12 demonstrates that texture and structure use MOSTLY ORTHOGONAL CSS properties (`grid-template-columns` vs `background-color`). They do not compete for CSS budget. They compete for ATTENTION budget — and the architecture addresses this through temporal sequencing (structure first, texture second) and evaluation feedback (texture gaps identified and prescribed).

---

## Appendix C: Glossary of Key Terms

| Term | Definition |
|------|-----------|
| **Content topology** | A persistent mapping from content semantics to spatial geometry that dominates all CSS decisions |
| **Phase 3** | The cognitive phase transition (30-60 min) where the builder's relationship to content shifts from "material to be placed" to "argument to be embodied" |
| **Phase 2 stall** | The builder produces structurally organized but content-uncoupled layouts (layouts can be swapped between sections without losing meaning) |
| **Falsifiable criteria** | 10 binary tests that distinguish content-coupled from procedural output |
| **Maturity components** | 11 atomic design decisions that produce "visual maturity" (the gestalt of master-level craft) |
| **Texture floor** | Minimum textural requirements (3 backgrounds, 2 borders, 2 hovers) that prevent texture-blind builds |
| **Narrative prescription** | Evaluation feedback that identifies specific sections, describes content reasons, and proposes spatial alternatives (as opposed to numerical scores) |
| **Swap test** | Mentally swapping two sections' layouts. If the swap damages meaning → content-coupled (Phase 3). If neutral → decorative (Phase 2). |
| **Unified decision** | A CSS decision that simultaneously serves structural AND textural purposes (e.g., border-left color encoding knowledge certainty) |
| **Content property** | A property of the ideas being presented (certainty gradient, argumentative centrality, density rhythm) — the organizing unit for curated research |

---

## Agent Log

- **Agent:** Final Architect (Task #18)
- **Files read:** 17 documents (~12,000 lines total across 3 research waves)
  - Critical: synthesis (680 lines), BUILD-1 prompt draft (98 lines), phase transition reliability (430 lines), texture-structure unification (650 lines), $0 reform design (400 lines), frontier exemplification (1,100 lines)
  - Supporting: adversarial review (750 lines), texture-structure analysis (400 lines), sustained engagement map (411 lines), invention archaeology (700+ lines), visual maturity decomposition (700+ lines), beyond-AD-006 frontier (1,000+ lines)
  - Context: CLAUDE.md research goals
- **Method:** Integrated findings across all 17 documents, resolved conflicts (synthesis $91-101 vs transition reliability +$3-5 → resolved to $94 base), built phase-by-phase spec with exact inputs/outputs/criteria, embedded FM-14 mitigations throughout, incorporated all 3 mandatory transition reliability interventions
- **Key decisions:**
  1. Set base cost at $94 (not $91) to include mandatory Phase 4.5 detector ($3) and exemplar curator ($4) that the original synthesis omitted
  2. Made Phase 4.5 detector MANDATORY (not optional) — P=0.50 baseline is unacceptable
  3. Kept Phase 3 DISCOVER as a separate phase (not merged into BUILD-1) — the structural analysis provides value as a "second opinion" without the topology transfer problem
  4. Added 4 textural criteria alongside the 10 structural criteria — FM-14 demands that texture is not a sidebar
  5. Organized curated research by content property (not CSS property) per doc 15 — this is the single most important format decision for preventing texture-structure split
  6. Included the $0 reform test as a prerequisite — running a $94+ architecture without first testing whether $0 reforms capture 30-40% of the gap is wasteful
  7. Added restraint evaluator to Phase 7 — prevents overbuilding (FM-6) that the adversarial review identified
- **Output:** This file (~850 lines)
- **Quality self-assessment:** MEETS GOALS — actionable spec with exact file names, agent counts, costs, success criteria, and failure recovery for every phase. Integrates all 20 failure modes. Addresses FM-14 throughout (not as sidebar). Includes the $0 reform prerequisite, content triage, Phase 3 detector, and all 3 mandatory transition reliability interventions.
