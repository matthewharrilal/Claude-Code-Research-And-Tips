# 24: Flagship-First Architecture -- Designing PV2 From the Top Down

**Author:** flagship-architect (Opus 4.6)
**Date:** 2026-02-19
**Task:** #44 -- Design PV2 starting from Flagship requirements, working BACKWARDS
**Evidence Base:** PV2-PIPELINE-DIAGRAM.md, mechanism-catalog.md (18 mechanisms), scale-exploration (6 reports, anti-scale thesis), CD-006-pilot-migration.html (39/40, 2,085 lines), fat-core-capability reports 01-15, all prior experiment data

---

## EXECUTIVE SUMMARY

The current PV2 was designed around a Middle question: "Can 1 Opus do it in ~100 lines?" This naturally produced a Middle-optimized architecture. FLIP IT. Start from what Flagship REQUIRES, then see how far you can simplify without losing Flagship capability.

**The core finding:** Flagship composition is not Middle composition done harder. It is a categorically different operation that requires (a) deep content understanding before any CSS is written, (b) multi-channel coherence that cannot be specified post-hoc, and (c) compositional memory across the full build. Current PV2 addresses none of these because it was designed for a world where 8-10 mechanisms at 2 scales is the target.

**The Flagship-first architecture is: ONE OPUS AGENT with an EXTENDED THINKING PHASE, 3 PHASE-LOCKED GATES, and a 9-AUDITOR PERCEPTUAL SHELL.** No planner/builder split. No recipe. No transition table as intermediate artifact. The agent that UNDERSTANDS the content WRITES the CSS.

---

## PART 1: WHAT FLAGSHIP ACTUALLY REQUIRES

### 1.1 The Flagship Specification

From the tier model and CD-006 reverse engineering:

| Dimension | Middle (ACHIEVED) | Flagship (TARGET) | The Gap |
|-----------|------------------|--------------------|---------|
| Mechanisms | 8-10 | 16-18 | +8 mechanisms, distributed across full page |
| Scales | 2 (Page + Component) | 5 (Nav + Page + Section + Component + Character) | +3 scales, each echoing same DNA |
| Multi-coherence | Not measured | >= 3 channels at every boundary | New requirement entirely |
| Channels active | ~3-4 | 6 (Chromatic + Typographic + Spatial + Structural + Behavioral + Material) | Full channel activation |
| CSS lines | 350-500 | 1,000-1,500 | 3x CSS volume |
| Grid topologies | 1-2 | 3-5 | Multiple layout systems |
| Transition types | 1-2 | 3 types, every boundary assigned | Full transition grammar |
| Restraint evidence | None required | 5+ documented rejections | Active composition choices |
| Fractal echo | Not required | Same pattern at all 5 zoom levels | Structural self-similarity |
| Anti-scale | N/A | Semantic density x restraint x spatial confidence | Judgment-level evaluation |

### 1.2 What CD-006 (39/40) Actually Did

CD-006 is the closest existing artifact to Flagship quality. Reverse engineering (Report 03) reveals:

**Scale expression:** 5/5 scales, each independently expressing sparse/dense alternation. Navigation mirrors page structure. Page uses 4-act density arc. Sections self-document their own compositional strategy. Components share 2-zone label/body DNA. Character level has own chromatic + typographic + spatial shifts.

**Channel activation:** 6/6 channels active. Chromatic: 3 zone colors + 5 callout colors + dark/light inversion. Typographic: 3 font families, 4 weights, 6 sizes, 4 letter-spacing values, uppercase transform system. Spatial: 9-step padding progression + 3 gestalt aliases. Structural: 3-tier border hierarchy (NO 2px), 4 grid topologies. Behavioral: hover, selection, focus, reduced motion. Material: 4 surface types via constraint (no shadows).

**Multi-coherence:** 5 channels shifting at Header->Content boundary. 3+ channels at every other major boundary. This was not PLANNED -- it EMERGED from the builder's deep content understanding.

**Key insight from CD-006:** The builder was ONE Opus agent. It read the content, understood the content's structure, and made compositional decisions WHILE writing CSS. There was no planner/builder split. No recipe. No transition table. The compositional intelligence was INSIDE the agent that wrote the code.

### 1.3 Why Flagship Cannot Be "Middle Done Harder"

Three structural impossibilities:

**IMPOSSIBILITY 1: Multi-coherence cannot be specified post-hoc.**
Multi-coherence means 3+ channels shift simultaneously at every boundary. If background changes from cream to white, font size should change, border weight should change, and spacing should change -- all in the same semantic direction. A planner can SPECIFY this in a transition table. But the builder must FEEL it while writing CSS, because the exact values depend on what came before and after. A specification that says "change background + font-size + border at boundary 3" is a checklist. The builder needs to understand WHY these changes cohere, which requires understanding the content and the metaphor simultaneously.

**IMPOSSIBILITY 2: Fractal echo requires compositional memory.**
If the page uses CRESCENDO at the Page scale, the builder must remember this while implementing Component-scale patterns 400+ lines of CSS later. A recipe can remind ("Component patterns should echo CRESCENDO"), but the specific CSS implementation depends on what the builder chose at the Page scale, which depends on the metaphor, which depends on the content. This chain of dependencies cannot be serialized into a document without massive expansion (the 718-line build plan problem).

**IMPOSSIBILITY 3: 16-18 mechanisms require distribution intelligence.**
The restraint protocol (mechanism catalog) specifies max 4 mechanisms per viewport, minimum 2 per page third. With 16-18 mechanisms, the builder must actively DISTRIBUTE them across the full page. This is a spatial composition problem that requires seeing the page as a whole, not following a phase-by-phase recipe. CD-006's builder could do this because it held the entire page in its context window while composing.

---

## PART 2: CAN 1 AGENT HANDLE FLAGSHIP? (Question A)

### 2.1 Evidence For: YES

**CD-006 precedent.** One Opus agent produced 2,085 lines (1,090 CSS + 995 HTML) scoring 39/40. This IS Flagship-class output. The agent held the full page in context, made compositional decisions while writing CSS, and achieved 5-scale fractal coherence without any intermediate planning artifacts.

**Context window capacity.** The agent's input for Flagship would be:
- Content markdown: ~200-600 lines (varies by content)
- Conventions brief: ~100 lines (soul + thresholds + creative authority)
- mechanism-catalog.md: ~200 lines (first section, mechanism summaries)
- tokens.css: 174 lines
- prohibitions.md (summary): ~50 lines
- merged-components.css (summary): ~100 lines

Total input: ~800-1,200 lines. Agent output: ~1,500-2,000 lines CSS+HTML.

Total context usage: ~2,300-3,200 lines. This is well within Opus's context capacity. CD-006 operated at similar scale.

**Compositional memory advantage.** The agent that decides "Section 3 uses CRESCENDO with spacing compression from 64px to 32px" is the SAME agent that later writes ".section-7 { padding: 48px }" -- understanding this is the RESOLUTION phase returning from compressed to moderate. No handoff. No compression. No re-derivation.

### 2.2 Evidence Against: Risks

**Self-assessment bias.** The agent cannot objectively evaluate its own metaphor quality. The Ceiling experiment's metaphor was rated "announced, not structural" by fresh-eyes auditors -- the builder thought it was structural. MITIGATION: Fresh-eyes metaphor validation checkpoint (5-10 min, separate agent).

**Context degradation at scale.** At 2,000+ lines of output, earlier decisions may drift from later implementation. MITIGATION: Phase-locked gates that force the agent to pause, re-read its own work, and verify consistency before proceeding.

**No external compositional challenge.** CD-006's builder was not CHALLENGED on its metaphor. It could have been wrong about the metaphor being structural, but it happened to get it right. MITIGATION: The perceptual audit (9 auditors) provides this challenge AFTER build. If the metaphor is weak, PA catches it.

### 2.3 Verdict

**YES, 1 Opus agent can handle Flagship.** The evidence from CD-006 is direct and compelling. The risks are real but mitigable through (a) a metaphor validation checkpoint, (b) phase-locked gates, and (c) the existing PA shell. The alternative -- splitting planner and builder -- has been TESTED and FAILED (Flagship experiment: 1.5/4). The separation itself is the problem, not the solution.

---

## PART 3: WHAT DOES THE BUILDER NEED TO READ? (Question B)

### 3.1 The Input Set

The Flagship builder needs LESS input, not more. The evidence is overwhelming:

| Experiment | Builder Input | PA-05 Score | Correlation |
|-----------|--------------|-------------|-------------|
| CD-006 | Minimal + content | 39/40 (equiv. 4/4) | Lowest input, highest quality |
| Middle | ~100 lines + content | 4/4 DESIGNED | Low input, high quality |
| Remediation | ~300 lines + content | 2.5/4 COMPOSED | Moderate input, moderate quality |
| Flagship | ~530 lines + 718-line plan | 1.5/4 FLAT | Highest input, lowest quality |

**Quality inversely correlates with input volume.** This is not noise -- it is the signal. Report 14 (adversarial) confirmed this pattern. Report 31 (contrarian) named it explicitly.

### 3.2 The Flagship Input Stack (~180 lines + content + reference files)

**Layer 1: Content (~200-600 lines, mandatory)**
The content markdown IS the primary input. The builder reads it deeply. Everything follows from content understanding.

**Layer 2: Conventions Brief (~80 lines, mandatory)**
```
SECTION A: SOUL (20 lines)
- border-radius: 0 (LOCKED)
- box-shadow: none (LOCKED)
- No gradients (LOCKED)
- Font trinity: Instrument Serif / Inter / JetBrains Mono
- Container: 940-960px
- 4px spacing grid

SECTION B: PERCEPTION THRESHOLDS (15 lines)
- Background deltas: >= 15 RGB between adjacent zones
- Typography: >= 2px delta between hierarchy levels
- Letter-spacing: >= 0.03em if used
- Max stacked gap: <= 108px at any boundary
- Borders: >= 1 border-left >= 3px OR >= 2 <hr> on page

SECTION C: FLAGSHIP COMPOSITION (25 lines)
- Deploy 14-18 mechanisms from catalog, distributed: max 4 per viewport, min 2 per page third
- Per-category minimums: Spatial >= 2, Hierarchy >= 2, Component >= 3, Depth >= 2, Navigation >= 2
- 5 scales: Nav, Page, Section, Component, Character -- same DNA at each
- 6 channels active: Chromatic, Typographic, Spatial, Structural, Behavioral, Material
- Multi-coherence: >= 3 channels shift at every zone boundary
- 3 transition types used: HARD CUT / SPACING SHIFT / CHECKPOINT
- Restraint: document 5+ considered-and-rejected mechanisms

SECTION D: CREATIVE AUTHORITY (20 lines)
- You may override ANY non-soul value if you log the override with reasoning
- The metaphor emerges FROM the content -- do not impose one
- Ask: "Does this section EARN its visual weight?"
- Ask: "Could I remove a CSS rule without losing meaning?"
- The page should feel inevitable, not decorated
- Observation pause: after completing base CSS, scroll through and write 3 observations
  before adding refinement
```

**Layer 3: Reference Files (READ, not memorized -- ~1,400 lines total)**
- mechanism-catalog.md (full 18 mechanisms with CSS)
- tokens.css (174 lines, :root block)
- prohibitions.md (353 lines, soul constraints)
- merged-components.css (CSS library, skim for available components)

**The critical difference from current PV2:** No recipe. No transition table. No fractal echo table. No operational recipe template. These artifacts COMPRESS compositional intelligence into formats that lose the original understanding. Instead, the builder reads the SOURCES (content + catalog + tokens) and COMPOSES directly.

### 3.3 What Is NOT in the Input

- No tier routing (always Flagship)
- No TC skill invocation (planner is merged into builder)
- No build-recipe.md (builder creates its own plan internally)
- No transition table YAML (builder creates transitions while composing)
- No fractal echo table (builder expresses fractal coherence through CSS, not a planning artifact)
- No 530-line master prompt (soul + thresholds + composition rules + creative authority = 80 lines)

---

## PART 4: WHAT GATES VERIFY FLAGSHIP COMPOSITION? (Question C)

### 4.1 The Gate Philosophy Change

Current PV2 has 15 post-build gates + 4 micro-gates. All run AFTER the builder finishes. This catches problems at 90-150 minutes, not at 30 minutes.

Flagship-first architecture uses **3 PHASE-LOCKED GATES during build + 15 POST-BUILD GATES + 9 PA AUDITORS**. The phase-locked gates are the critical difference.

### 4.2 Phase-Locked Gates (During Build)

**GATE 1: After HTML Skeleton (~20-30 min into build)**

Orchestrator pauses the builder and runs Playwright:

| Check | Threshold | Rationale |
|-------|-----------|-----------|
| G1-01 | Container width 940-960px | THE primary failure mode (4/5 Phase D pages) |
| G1-02 | >= 3 ARIA landmarks (main, nav, contentinfo) | Accessibility foundation |
| G1-03 | Skip link present | Accessibility |
| G1-04 | Zone count 2-5 sections with distinct backgrounds | Prevents uniform page |
| G1-05 | >= 3 component library classes used | Component library adoption |
| G1-06 | Header is dark bg + 3px primary border | Soul chromatic identity |

If ANY check fails: orchestrator returns specific failure to builder with fix instruction. Builder fixes before proceeding.

**Time cost:** ~1-2 min. **Value:** Catches the 3 most common Flagship failures (container width, uniform page, missing accessibility) at 20 min instead of 150 min.

**GATE 2: After Base CSS (~60-80 min into build)**

Orchestrator pauses and runs Playwright:

| Check | Threshold | Rationale |
|-------|-----------|-----------|
| G2-01 | All zone backgrounds: >= 15 RGB delta between adjacent | Perception threshold |
| G2-02 | No pure #000 or #FFF anywhere | Soul palette |
| G2-03 | Font family only from trinity | Soul typography |
| G2-04 | >= 3 distinct font-size values in computed styles | Typography hierarchy exists |
| G2-05 | >= 3 distinct border-left widths OR >= 2 <hr> elements | Structural channel active |
| G2-06 | No border-radius > 0 | Soul geometry |
| G2-07 | No box-shadow on any element | Soul depth |
| G2-08 | Max stacked gap <= 108px at any boundary | S-09 stacking prevention |

If ANY check fails: specific CSS fix recipe returned to builder.

**Time cost:** ~2-3 min. **Value:** Catches sub-perceptual CSS waste, soul violations, and threshold failures at 60 min instead of 150 min.

**GATE 3: Pre-PA Comprehensive (~100-130 min, after builder signals "complete")**

Full 15-gate suite (SC-01 through SC-15 from current PV2), plus:

| Check | Threshold | Rationale |
|-------|-----------|-----------|
| SC-13 | >= 3 channels shift at every zone boundary | Multi-coherence (L4) |
| SC-14 | No letter-spacing < 0.02em, no bg deltas 1-14 within zone | Sub-perceptual prevention |
| SC-15 | >= 1 border-left >= 3px OR >= 2 <hr> | Border presence |
| G3-01 | >= 14 distinct mechanism deployments | Flagship mechanism count |
| G3-02 | Mechanism distribution: each page third has >= 4 | Distribution requirement |
| G3-03 | >= 3 transition types used across page | Transition grammar compliance |
| G3-04 | >= 3 grid/layout topologies | Layout variety |

If failures: gate-generated CSS fix recipes returned to builder. Builder has compositional memory (same agent) so fixes are contextually informed.

### 4.3 Post-Build: 9 PA Auditors (Unchanged)

Screenshot pre-capture at 1440px + 768px. 9 independent fresh-eyes Opus auditors. 48 questions across dimensions. PA weaver synthesizes. This is the L5 (anti-scale, judgment) evaluation that no programmatic gate can perform.

**PA-05 SHIP threshold for Flagship: >= 3/4 (COMPOSED)**
**PA-05 TARGET for Flagship: 4/4 (DESIGNED)**

### 4.4 Fresh-Eyes Metaphor Validator (Optional, 5-10 min)

After the builder completes its internal planning (Phase A below) but BEFORE writing CSS: a separate fresh-eyes Opus agent reads ONLY the builder's metaphor commitment and content. Binary verdict: STRUCTURAL or ANNOUNCED?

- STRUCTURAL: metaphor shapes the page WITHOUT labels. Remove all metaphor-vocabulary labels and the page's spatial, chromatic, and structural patterns still express the intent.
- ANNOUNCED: metaphor exists only in labels. Remove labels and the page looks generic.

If ANNOUNCED: return to builder with "Your metaphor is label-dependent. Strengthen structural expression before proceeding."

**This is the single cheapest insurance against the Ceiling experiment's failure mode** (metaphor rated "announced, not structural" by 60% of auditors).

---

## PART 5: THE BUILD FLOW (Question D)

### 5.1 The Flagship-First Build Flow

```
USER: /build-page content.md
         |
         v
ORCHESTRATOR (thin, ~250 lines)
         |
         |-- Reads content.md
         |-- Spawns ONE Opus Core Agent
         |
         v

PHASE A: DEEP CONTENT UNDERSTANDING (15-25 min)
  Core agent reads:
    1. content.md (primary -- read SLOWLY, not skimmed)
    2. conventions-brief.md (80 lines)
    3. mechanism-catalog.md (18 mechanisms with CSS)
    4. tokens.css + prohibitions.md

  Core agent THINKS (extended internal reasoning):
    - What is this content's natural structure?
    - What tensions exist? (warmth/austerity, authority/playfulness, etc.)
    - What metaphor emerges FROM the content? (not imposed)
    - What zones does the content divide into?
    - What axis pattern(s) serve this content?
    - What mechanisms serve each section?

  Core agent WRITES (internal plan, not separate file):
    - Metaphor commitment (1-2 sentences)
    - Zone map (which sections, which backgrounds)
    - Mechanism deployment plan (which mechanisms, where, why)
    - Channel activation plan (what shifts at each boundary)
    - Fractal echo intention (what pattern echoes at each scale)
    - 3-5 considered-and-rejected mechanisms with reasons

         |
         v  [OPTIONAL: Fresh-Eyes Metaphor Validator]
         |  Binary: STRUCTURAL or ANNOUNCED?
         |  STRUCTURAL -> proceed
         |  ANNOUNCED -> return to Core Agent for strengthening
         v

PHASE B: HTML SKELETON (20-40 min)
  Core agent writes HTML structure:
    - Header (dark, 3px primary border)
    - Navigation / TOC
    - Content zones with semantic class names
    - Components (callouts, tables, code blocks, etc.)
    - Footer (mirror header)
    - ARIA landmarks, skip link, semantic HTML5

         |
         v  >>> GATE 1: HTML Foundation <<<
         |  Orchestrator runs Playwright (6 checks, ~1 min)
         |  PASS -> proceed
         |  FAIL -> specific fix instructions returned, builder fixes
         v

PHASE C: CSS COMPOSITION (40-70 min)
  Core agent writes CSS in this order:
    C.1  Reset + Soul enforcement
    C.2  Typography system (3 fonts, 6 sizes, 4 weights, spacing)
    C.3  Zone backgrounds (>= 15 RGB delta between adjacent)
    C.4  Spacing system (semantic aliases + section-specific padding)
    C.5  Structural borders (3-tier: 4px/3px/1px)
    C.6  Component styling (callouts, tables, code, grids)
    C.7  Layout grids (3-5 topologies)
    C.8  Transitions (HARD CUT / SPACING SHIFT / CHECKPOINT)
    C.9  Behavioral (hover, focus, selection, reduced motion)
    C.10 Responsive (960px + 768px + 480px breakpoints)

  During C.6-C.8: Core agent actively distributes mechanisms:
    - Max 4 per viewport
    - Min 2 per page third
    - Per-category minimums (S:2, H:2, C:3, D:2, N:2)
    - Multi-coherence at every boundary (>= 3 channels shift)

         |
         v  >>> GATE 2: Base CSS <<<
         |  Orchestrator runs Playwright (8 checks, ~2 min)
         |  PASS -> proceed
         |  FAIL -> CSS fix recipe returned, builder fixes
         v

PHASE D: OBSERVATION + REFINEMENT (15-25 min)
  Core agent renders the page in its mind (or is shown screenshot):
    - "What feels designed?"
    - "What feels flat?"
    - "Where is the page breathing and where is it suffocating?"

  Core agent writes 3 observations, then adjusts.

  Core agent completes:
    D.1  Cascade value table (mandatory deliverable)
    D.2  Final refinements based on observations
    D.3  Self-verification: 5 scales present? 6 channels active?
         >= 3 channels at every boundary? Metaphor structural?

  Core agent signals COMPLETE.

         |
         v  >>> GATE 3: Pre-PA Comprehensive <<<
         |  Orchestrator runs full 15-gate + 4 Flagship gates (~5 min)
         |  PASS -> proceed to PA
         |  FAIL -> gate-generated fix recipes returned to SAME agent
         |          (compositional memory preserved)
         |          Max 3 fix cycles
         v

PHASE E: PERCEPTUAL AUDIT (30-45 min)
  Orchestrator pre-captures screenshots:
    - 1440px: cold look + full scroll (10-15 screenshots)
    - 768px: cold look + full scroll (10-15 screenshots)
    - Total: 20-30 screenshots

  Spawns 9 Opus PA auditors (fresh-eyes, zero context):
    - Each assigned 5-6 of 48 PA questions
    - Read screenshots only (no code, no build plan)

  PA weaver synthesizes into PA-05 score + top-3 issues.

         |
         v

PHASE F: FIX INTEGRATION (if PA-05 < 3/4, max 3 cycles)
  PA top-3 issues + gate fix recipes -> SAME Core Agent
  Core agent fixes with full compositional memory.
  Re-run Gate 3 + 2-PA quick check.
  Loop until PA-05 >= 3/4 OR 3 cycles exhausted.

         |
         v

OUTPUT:
  path/to/output.html
  path/to/_pa-report.md
  path/to/_build-log.md
```

### 5.2 Time Estimate

| Phase | Time | Agent | Notes |
|-------|------|-------|-------|
| A: Understanding | 15-25 min | Core Opus | Extended thinking |
| Metaphor check | 5-10 min | Fresh-eyes Opus | Optional |
| B: HTML | 20-40 min | Core Opus | |
| Gate 1 | 1-2 min | Playwright | |
| C: CSS | 40-70 min | Core Opus | |
| Gate 2 | 2-3 min | Playwright | |
| D: Observation | 15-25 min | Core Opus | |
| Gate 3 | 5 min | Playwright | |
| E: PA | 30-45 min | 9 Opus + weaver | |
| F: Fixes | 0-60 min | Core Opus | 0-3 cycles |
| **TOTAL** | **130-280 min** | **12 agents** | |

**Cost estimate:** ~$25-55 per page (1 Opus core ~$10-25, 9 PA auditors ~$10-20, 1 metaphor validator ~$1-3, orchestrator + gates ~$2-5).

### 5.3 Comparison to Current PV2

| Dimension | Current PV2 (Middle-first) | Flagship-first |
|-----------|---------------------------|----------------|
| Planner/builder split | YES (TC -> builder) | NO (merged) |
| Builder input | 1,300 lines (8 files) | ~800-1,200 lines (content + brief + references) |
| Intermediate artifacts | 3 (recipe, transition table, fractal echo) | 0 (agent holds plan internally) |
| Gates during build | 4 micro-gates (proposed, untested) | 3 phase-locked gates (firm) |
| Gates post-build | 15 | 15 + 4 Flagship-specific |
| PA auditors | 9 | 9 (unchanged) |
| Fix cycle agent | Different from builder | SAME agent (memory preserved) |
| Boundaries | 11 (4 destructive) | 7 (0 destructive) |
| Build time | 160-270 min | 130-280 min |
| Cost/page | $20-60 | $25-55 |
| Theoretical PA-05 ceiling | 3/4 (recipe) or 4/4 (convention) | 4/4 (convention) |

---

## PART 6: WHAT EXPERIMENTS TEST FLAGSHIP? (Question E)

### 6.1 The Experiment Sequence (Flagship-Focused)

The current experiment plan (Exp A through E in PV2 diagram) tests whether infrastructure is NECESSARY. This is a Middle question. For Flagship, the question is: **Does this architecture produce multi-coherence, fractal echo, and mechanism distribution that Middle cannot?**

**EXPERIMENT 1: Flagship Baseline ($30-50, ~4 hrs)**

Input: RESEARCH-SYNTHESIS.md + conventions brief (80 lines) + full reference files.
Architecture: Fat Core (1 Opus core + 3 phase-locked gates + 9 PA).
Target: PA-05 >= 3/4 with >= 14 mechanisms, >= 3 channels at every boundary, 5 scales.

Decision gate:
- PA-05 >= 3/4 AND multi-coherence achieved -> Flagship-first architecture VALIDATED
- PA-05 >= 3/4 BUT multi-coherence weak -> Brief needs coherence strengthening
- PA-05 < 3/4 -> Fat Core alone insufficient for Flagship

**EXPERIMENT 2: Flagship vs Middle Comparison ($15-25, ~2 hrs)**

SAME content (RESEARCH-SYNTHESIS.md), SAME conventions brief (80 lines).
BUT: brief says "deploy 8-10 mechanisms, 2 scales" (Middle spec).
Architecture: Same Fat Core.
Target: PA-05 + mechanism count + scale coverage.

Decision gate:
- Flagship >> Middle (PA-05 gap >= 0.5 AND mechanism count 2x) -> Tier matters
- Flagship ~= Middle -> Tier specification has no effect (Opus ALREADY knows)
- Flagship < Middle -> Flagship brief is counterproductive (too many rules)

**EXPERIMENT 3: Content Variety ($50-80, ~6 hrs)**

Run Flagship baseline on 2 ADDITIONAL content types beyond RESEARCH-SYNTHESIS:
- A prose-heavy narrative content (conversational, few structural elements)
- A technical reference content (tables, code, API documentation)

Target: PA-05 >= 3/4 on all 3 content types.

Decision gate:
- All 3 >= 3/4 -> Architecture generalizes. CODIFY.
- 2/3 >= 3/4 -> Architecture works for most content. Investigate the failure.
- < 2/3 -> Content-dependent. Architecture needs content-type routing.

### 6.2 Why These Experiments, Not the Current Ones

The current Exp E ("Single Opus, no pipeline") tests whether ALL infrastructure is unnecessary. This is valuable but does not test whether FLAGSHIP composition is achievable. A page can score 3/4 with 8 mechanisms and 2 scales -- that is Middle, not Flagship. The Flagship experiments specifically measure:

1. **Mechanism count** (>= 14)
2. **Scale coverage** (5 scales, each expressed)
3. **Multi-coherence** (>= 3 channels at every boundary)
4. **Distribution** (mechanisms across full page, not front-loaded)
5. **Restraint evidence** (>= 5 documented rejections)

These are Flagship-specific metrics that the current experiments do not measure.

---

## PART 7: HOW MUCH OF THE EXISTING ARCHITECTURE SURVIVES? (Question F)

### 7.1 What SURVIVES (core value, keep as-is)

| Component | Lines | Why It Survives |
|-----------|-------|-----------------|
| mechanism-catalog.md | 1,219 | 18 mechanisms with CSS examples, application modes, restraint protocol, transition grammar -- the builder's primary reference |
| tokens.css | 174 | :root block, soul values -- unchanged |
| prohibitions.md | 353 | Soul constraints -- unchanged |
| merged-components.css | ~1,000 | Component library -- builder draws from this |
| PA skill (48 questions) | 774 | Perceptual audit -- unchanged, 9 auditors |
| Gate runner (15 gates) | ~400 | Post-build verification -- add 4 Flagship gates |

**Total surviving: ~3,920 lines of reference material**

### 7.2 What CHANGES (repurpose or modify)

| Component | Current State | Change | Why |
|-----------|--------------|--------|-----|
| TC skill (1,878 lines) | Full TC pipeline (Phases 0-5) | RETIRE for Flagship. TC's content analysis (Phases 0-3) is absorbed into Core Agent's Phase A. The TC skill becomes a reference document, not an invoked skill. | Single-agent fusion eliminates the need for a separate planning skill. The Core Agent does its own content analysis. |
| operational-recipe-template.md | ~300 lines recipe | RETIRE. No recipe needed -- conventions brief replaces it. | Recipe ceiling at 3/4. Convention ceiling at 4/4. |
| Transition table (YAML) | New artifact in PV2 | DO NOT CREATE as intermediate artifact. Let Core Agent create transitions organically. | Transition tables compress compositional intent into YAML. The agent that writes the CSS knows the transitions directly. |
| Fractal echo table | New artifact in PV2 | DO NOT CREATE as intermediate artifact. Let Core Agent express fractal coherence through CSS, verified by Gate 3. | Same reason -- fractal coherence emerges from composition, not from a planning table. |
| Handoff gate (8 checks) | Between TC and builder | RETIRE. No handoff exists in single-agent architecture. Replaced by Gate 1 (after HTML) and Gate 2 (after base CSS). | No boundary to gate. |

### 7.3 What IS NEW

| Component | Lines (est.) | Purpose |
|-----------|-------------|---------|
| conventions-brief.md | ~80 | Soul + thresholds + Flagship composition rules + creative authority. THE primary instruction document. |
| /build-page orchestrator | ~250 | Thin routing: read content -> spawn Core Agent -> run gates -> spawn PA -> route fixes -> output. |
| 4 Flagship-specific gates | ~80 | G3-01 (mechanism count), G3-02 (distribution), G3-03 (transition types), G3-04 (layout variety) |
| Metaphor validator prompt | ~30 | Fresh-eyes binary: STRUCTURAL or ANNOUNCED? |

**Total new: ~440 lines**

### 7.4 Net Architecture Size

| Layer | Current PV2 | Flagship-First | Change |
|-------|-------------|----------------|--------|
| Orchestrator | ~350 | ~250 | -100 |
| Planning skill (TC) | 1,878 | 0 (retired) | -1,878 |
| Builder instructions | 300 (recipe) | 80 (brief) | -220 |
| Reference files | ~3,920 | ~3,920 | 0 |
| Gate runner | ~400 | ~480 (+4 gates) | +80 |
| PA skill | 774 | 774 | 0 |
| New artifacts | 0 | 30 (validator) | +30 |
| **TOTAL OPERATIONAL** | **~7,622** | **~5,534** | **-2,088 (-27%)** |

The Flagship-first architecture is SIMPLER than the current PV2. It achieves more by doing less. This is the anti-scale model in action: richness through restraint, not through accumulated infrastructure.

---

## PART 8: THE CONVENTIONS BRIEF -- FULL DRAFT

This is the single document that replaces TC output, operational recipe, and master prompt for the builder:

```markdown
# KortAI Page Composition -- Conventions Brief

## SOUL (immutable)
- border-radius: 0 ALWAYS. No rounded corners anywhere.
- box-shadow: none ALWAYS. No drop-shadow filter.
- No gradient backgrounds. Solid colors only.
- No pure #000 or #FFF. Use palette values.
- Fonts: Instrument Serif (display headings ONLY), Inter (body), JetBrains Mono (code/meta)
- Container: max-width 960px, margin: 0 auto
- Spacing: 4px base unit grid
- 3 border widths only: 4px (semantic emphasis), 3px (structural), 1px (data/subtle)
- NO 2px borders (per prohibition P-09)

## PERCEPTION THRESHOLDS (binary verification)
- Zone backgrounds: >= 15 RGB delta between adjacent zones
- Typography: >= 2px font-size delta between hierarchy levels
- Letter-spacing: >= 0.03em if used, or 0
- Max total gap at any boundary: <= 108px (stacked padding + margin + gap)
- At least 1 element with border-left >= 3px per page

## FLAGSHIP COMPOSITION
- Deploy 14-18 mechanisms from mechanism-catalog.md
  Max 4 mechanisms per viewport-height section
  Min 2 mechanisms per page third
  Per-category: Spatial >= 2, Hierarchy >= 2, Component >= 3, Depth >= 2, Navigation >= 2
- 5 scales: Navigation, Page, Section, Component, Character
  The same compositional DNA should echo at each zoom level
- 6 channels: Chromatic, Typographic, Spatial, Structural, Behavioral, Material
  All 6 must be actively used
- Multi-coherence: >= 3 channels shift at every zone boundary
- Transitions: use all 3 types (HARD CUT / SPACING SHIFT / CHECKPOINT)
  Every section boundary must have exactly 1 transition type assigned
- Restraint: document 5+ mechanisms you CONSIDERED but REJECTED, with reasoning

## CREATIVE AUTHORITY
You may override ANY non-soul value if you document the override with
compositional reasoning in a CSS comment. Soul values are LOCKED.
Everything else is a suggestion you can improve upon.

The metaphor emerges FROM the content. Do not impose one.
Read the content slowly. What structure does it naturally want?

After completing base CSS (Phases C.1-C.8), PAUSE:
  1. Mentally scroll through the entire page
  2. Write 3 observations: "What feels designed? What feels flat? Where is rhythm?"
  3. Adjust based on observations before signaling complete

The page should feel inevitable, not decorated.
Every visual choice should MEAN something.
If you cannot explain why a CSS rule exists, remove it.
```

**Line count: 54 lines.** Well under the 100-line target. Well under the 300-line builder attention threshold. Every line is operational. Zero judgment language. Zero filler.

---

## PART 9: WHAT IF THIS IS WRONG? ADVERSARIAL CHALLENGES

### Challenge 1: "CD-006 was a fluke. One data point is not evidence."

Response: Partially valid. CD-006 had favorable conditions (the builder understood KortAI deeply, the content was about building KortAI pages -- meta-level resonance). BUT: the Middle experiment (8 agents, 4/4) also used a single Opus builder with minimal input. The pattern holds across N=2 for single-agent approaches and N=1 for multi-agent approaches (Flagship, 1.5/4). The experiments (Part 6) are designed to increase N.

### Challenge 2: "Phase-locked gates require inter-agent messaging. You said that fails."

Response: Phase-locked gates require the ORCHESTRATOR to pause the builder and run Playwright. This is orchestrator -> Playwright -> orchestrator -> builder, not agent -> agent messaging. The builder receives gate results as input to its next phase. This is the same pattern as the Remediation execution (which worked: 2.5/4). What failed in Flagship was PLANNER -> BUILDER messaging across different agents, not orchestrator -> verification -> same agent.

### Challenge 3: "The 80-line brief loses all of TC's compositional intelligence."

Response: This is exactly the point. TC's compositional intelligence was present in a 718-line build plan and the builder scored 1.5/4. The intelligence was there; it was unreachable. The brief does not TRY to encode compositional intelligence. It sets boundaries (soul, thresholds, Flagship counts) and gives CREATIVE AUTHORITY. The compositional intelligence lives INSIDE the Opus agent, not in a document. CD-006 proves this.

### Challenge 4: "Opus already knows how to compose. The brief is irrelevant."

Response: Partially true. Report 08 (opus-knowledge) found that Opus has deep knowledge of visual design principles, multi-coherence, and fractal composition. But without the SOUL CONSTRAINTS and PERCEPTION THRESHOLDS, Opus produces generic well-designed pages, not KortAI pages. The brief is not teaching composition -- it is encoding IDENTITY. This is a 20-line job (Section A), not a 1,878-line job.

### Challenge 5: "What if the builder ignores multi-coherence because it is a single line in the brief?"

Response: This is a real risk. Mitigation: Gate 3 programmatically checks multi-coherence (SC-13). If the builder produces a page where boundaries have < 3 channels shifting, the gate catches it and provides a specific fix recipe. The builder, which has full compositional memory of the page, can fix this contextually. This is enforcement through verification, not through voluminous instruction.

---

## PART 10: THE HEADLINE FINDING

**Flagship-first architecture is not a new design. It is CD-006's approach with guardrails.**

CD-006 was: 1 Opus agent + content + accumulated identity + minimal instruction -> 39/40.

Flagship-first is: 1 Opus agent + content + conventions brief + reference files + 3 phase-locked gates + 9 PA auditors -> target 4/4.

The only additions to CD-006's approach are:
1. **Phase-locked gates** (catch foundation failures at 20/60 min, not 150 min)
2. **Conventions brief** (encodes identity + thresholds + Flagship metrics in 54 lines)
3. **PA shell** (9 fresh-eyes auditors provide the L5 evaluation CD-006 never received)
4. **Metaphor validator** (5-10 min insurance against "announced" metaphors)

Everything else is REMOVAL: remove the TC skill invocation, remove the recipe, remove the transition table, remove the fractal echo table, remove the handoff gate, remove the planner/builder split.

**The current PV2 architecture was designed to solve a problem that does not exist.** The problem was framed as: "How do we transmit compositional intelligence from a planner to a builder?" The answer is: you don't. You put the intelligence IN the builder. The planner was never necessary. It was a response to an assumption that a single agent could not hold enough context to plan AND build a complex page. CD-006 disproved this assumption 4 weeks ago.

**Simplicity is not the enemy of quality. It is the precondition.**

---

## APPENDIX A: DECISION TABLE -- What Architecture for Each Outcome?

| Experiment 1 Result | Experiment 2 Result | Verdict | Architecture |
|--------------------|---------------------|---------|-------------|
| PA >= 3/4, multi-coherence YES | Flagship >> Middle | FLAGSHIP-FIRST VALIDATED | This document |
| PA >= 3/4, multi-coherence YES | Flagship ~= Middle | Brief works but tier spec irrelevant | Simplify brief (remove Section C) |
| PA >= 3/4, multi-coherence NO | N/A | Multi-coherence needs explicit support | Add coherence coaching to brief |
| PA 2-2.9/4 | N/A | Fat Core insufficient alone | Investigate what is missing |
| PA < 2/4 | N/A | Fundamental assumption wrong | Back to first principles |

## APPENDIX B: WHAT MIDDLE PAGES GET

If Flagship is the DEFAULT, what about pages where content does not support 16+ mechanisms?

**Answer:** The conventions brief includes "Deploy 14-18 mechanisms." For simpler content, the ADDITION TEST applies: if the content cannot support 14 mechanisms without feeling over-decorated, the builder deploys fewer (down to 8). The brief's creative authority clause covers this: "You may override ANY non-soul value if you document the override with compositional reasoning."

**There is no Middle architecture.** There is one architecture. Simple content produces simpler pages because the builder (correctly) deploys fewer mechanisms. Complex content produces richer pages. The architecture is the same. The content governs the output.

## APPENDIX C: WHAT SURVIVES FROM PV2 INVESTIGATION

The 50+ Opus reports were not wasted. They identified:

1. **The 5-layer compositional intelligence stack** (L1-L5) -> becomes the gate hierarchy
2. **Perception thresholds** (>= 15 RGB, >= 2px, etc.) -> encoded in brief and gates
3. **Multi-coherence as binding rule** -> SC-13 gate + brief Section C
4. **Anti-scale model** -> brief's creative authority ("inevitable, not decorated")
5. **Phase-locked gates** -> adopted directly (3 gates during build)
6. **Intelligence heatmap** -> dissolved by single-agent fusion (no boundaries to degrade)
7. **Transition grammar** -> encoded in mechanism catalog's transition section
8. **Restraint protocol** -> encoded in mechanism catalog + brief (document rejections)
9. **Recipe vs checklist finding** -> informs the brief format (conventions, not recipe)
10. **Builder input volume finding** -> drives 54-line brief (well under 300-line cap)

The investigation proved the Linear Pipeline unnecessary by identifying every problem the Linear Pipeline creates. The Flagship-first architecture is the synthesis of 50+ reports: **the answer to "how do we fix compression loss?" is "stop compressing."**
