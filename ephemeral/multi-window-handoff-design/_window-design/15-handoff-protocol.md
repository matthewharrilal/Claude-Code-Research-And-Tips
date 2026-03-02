# Inter-Window Handoff Protocol

## Preamble: The Reconciliation

The adversarial reviewer (Report 08) argues that focused direction (~200 lines, like the Weaver) beats diffuse material (~6,000 lines, like raw explorations). The ideology (Report 01) argues that raw material produces richer generative quality than pre-digested rules.

Both are right. They are not in tension -- they describe different mechanisms.

**Focused direction** tells the builder WHERE to go. **Raw material** gives the builder WHAT TO BUILD WITH when they get there. The Weaver report works because it is both: it is focused (4 territories: AMPLIFY, RELEASE, DEEPEN, THE GAP) AND creative (it uses metaphor, emotion, perception -- it models the thinking it wants to produce). The conviction brief works the same way: focused on THIS content's metaphor AND creative in how it expresses that focus.

The handoff protocol below provides both at each transition: a focused document that carries conviction AND the raw material that enables creation. The focused document is SMALL (80-300 lines) and is the only MANDATORY handoff. The raw material is LARGE (variable) and fills remaining context budget. The builder reads the focused document first and the raw material second. This is not a compromise. It is the architecture the evidence supports.

**The evidence base:**
- PA-05 3.5/4 was achieved with focused handoff (Weaver + brief + reflection) plus reference material (mechanism catalog, components). No raw explorations. (Report 08, Section 3)
- The REFINE builder outperformed the initial builder by +1.5 PA-05 points, receiving SPECIFIC feedback about THIS page, not general philosophy. (Report 08, Section 12)
- The Middle-Tier experiment achieved PA-05 4/4 with a 100-line RECIPE. (Report 08, Section 6)
- Window 1 has 61% context headroom -- ~90K tokens of unused capacity. (Report 05, Section 3)
- Handoff tissue (conviction + reflection + Weaver) costs ~7,790 tokens. The HTML artifact costs ~33K tokens. (Report 05, Section 4)

The protocol does NOT mandate loading raw explorations. It mandates the handoff tissue. It provides a context-budget-aware mechanism for the orchestrator to fill remaining space with creative material IF it helps. This is a testable hypothesis, not an ideological commitment.

---

## Architecture: 4 Windows

```
W1: DERIVE        W2: BUILD          W3: EVALUATE        W4: REFINE
(TC derivation)   (Create artifact)   (PA + Weaver)       (Deepen)

INPUT:             INPUT:              INPUT:               INPUT:
- TC skill         - Conviction brief  - Screenshots        - Artifact (HTML)
- Content          - World desc        - PA questions       - Weaver synthesis
- Research (opt)   - Content           (auditors)           - Reflection
                   - Reference files   - Auditor reports    - Conviction brief
                   - Raw material      + Brief + Reflection - Content
                     (budget-fill)     (Weaver)             - Reference files

OUTPUT:            OUTPUT:             OUTPUT:              OUTPUT:
- Conviction brief - HTML artifact     - 5 auditor reports  - Refined HTML
  (THE BATON)      - Reflection        - Weaver synthesis   - Reflection v2
                     (THE TISSUE)        (THE DIRECTION)
```

**Why 4 windows, not 3:** The transcript (Report 09, T-18) designed 3 windows: TC / Build / Refine. The current SKILL.md has 3: Derive+Build / Evaluate / Refine. Both compress a step. The evaluation window (PA auditors + Weaver) is a distinct cognitive function that cannot share context with either building or refining. Separating TC derivation from building frees ~12,600 tokens of TC skill instructions from the builder's context (Report 05, Section 2), which can hold creative material instead. The cost is one additional context boundary. The benefit: each window does ONE thing with maximum context devoted to THAT thing.

**The adversarial response:** Report 08 argues multi-window is necessary for cognitive separation (builder cannot be judge), not for knowledge transfer. Agreed. W1/W2 separation is for context optimization. W2/W3 separation is for cognitive separation. W3/W4 separation is also cognitive (auditors cannot see builder intent). All boundaries serve a functional purpose.

---

## TRANSITION 1: W1 (DERIVE) to W2 (BUILD)

### 1. THE BATON

**What transfers:** The Conviction Brief.

**Format:** Markdown. 5 sections, prescribed by TC skill Phase 4.5:

| Section | Purpose | Target Lines | Character |
|---------|---------|-------------|-----------|
| WORLD-DESCRIPTION | Metaphor as natural law. What the world IS. | 10-15 | Pure conviction |
| CALIBRATION | Creative ranges, not thresholds. What's possible. | 15-25 | Mixed (see note) |
| OPPOSITION | 3-5 tensions as creative invitations. Where to push. | 10-15 | Pure conviction |
| ARC | Experiential journey. What the reader feels. | 15-20 | Pure conviction |
| CONTENT MAP | Section-to-zone mapping with transition types. | 15-25 | Specification (acceptable) |

**Maximum size:** 120 lines. If the brief exceeds 120 lines, it is becoming a build specification, not a conviction document.

**The CALIBRATION problem:** Report 07 (Section 5, Finding 1) documents that the TC skill contains a structural contradiction. Phase 4 asks for explicit mechanism documentation ("for EACH mechanism you deploy, one sentence on WHY"). Phase 4.5 says the brief carries conviction, not mechanisms. The actual Gas Town brief resolved this by putting a 14-mechanism deployment plan in CALIBRATION -- which makes it partially specification.

**Resolution:** The CALIBRATION section carries mechanism INTENTIONS, not mechanism ASSIGNMENTS. The builder in W2 reads "The garrison breathes through dense/sparse alternation -- operational zones compress, strategic zones exhale" and decides WHICH mechanism achieves that. They do not read "Mechanism #4: Dense/Sparse Alternation [S]" as an assignment to execute. The CONTENT MAP is the one section where specification is acceptable -- it is a spatial plan, not a creative manifesto. This is the same structure as the actual Gas Town brief but with the mechanism catalog references ([N], [H], [D], [S], [C]) removed. The builder does not see the catalog's indexing system in the conviction document.

**Quality bar:** The brief's WORLD-DESCRIPTION and OPPOSITION sections read as creative prose, not as parameter lists. The ARC describes EXPERIENCE, not CSS values. The CONTENT MAP may be tabular. Test: read the brief aloud. If it sounds like a manifesto, it is working. If it sounds like a spec sheet, the conviction has collapsed into specification.

### 2. THE TISSUE

W1 does not produce handoff tissue in the 6-dimension sense. W1's job is derivation, not creation. The TC skill produces the brief. The brief IS the tissue -- it carries:

- D2 (What I was trying to achieve): WORLD-DESCRIPTION, OPPOSITION
- D3 (What I rejected and why): CALIBRATION rejected mechanisms (already present in actual briefs)

Dimensions D1, D4, D5, D6 do not apply to W1 because W1 does not build an artifact. It derives a direction.

### 3. THE FRAMING

How the W2 prompt introduces the conviction brief:

```
## YOUR CREATIVE DIRECTION

The conviction brief below was derived by a previous instance who spent their
entire context engaging deeply with this content. They did not build anything.
They THOUGHT about what should be built.

Read this as PHILOSOPHY, not specification. The world-description tells you
what the world IS -- inhabit it. The opposition tells you where the creative
tension lives -- lean into it. The arc tells you what the reader should FEEL
at each stage of the scroll -- honor it. The content map gives you a spatial
plan -- use it as a starting point, not a blueprint.

Your metaphor is already chosen. Your tension is already identified. Your job
is to BUILD FROM THIS CONVICTION. Where the brief is vivid, follow it. Where
the brief is vague, your perception is the tiebreaker. Where the brief is
silent, you have creative authority.

You are not executing someone else's plan. You are bringing someone else's
conviction to life through your own creative decisions.
```

**Why this framing:** It positions the brief as philosophy (Report 01, Section 3: "philosophy rather than tasks"), grants creative authority where the brief is incomplete, and explicitly names the builder's role as creation, not execution. The phrase "inhabit it" mirrors the transcript's language. "Your perception is the tiebreaker" is carried forward from the current SKILL.md because it works.

### 4. WHAT DIES

- **The derivation process.** W1 runs a 14-axis questioning methodology, an opposition analysis, a metaphor collapse evaluation. The brief carries the CONCLUSIONS of that process but not the process itself. The W2 builder does not know which axes yielded the richest tension, which metaphor candidates were evaluated and rejected, or what the structural overlap scores were. This is acceptable -- the builder needs DIRECTION, not methodology.

- **The TC skill's atmospheric effect.** Report 07 (Part 5, Finding 6) identifies that the TC skill is "two documents in one" -- teaching content (~500 lines) and execution protocol (~340 lines). In W1, the builder absorbs both. The atmosphere of the teaching content (the Opposition Principle, the "CONSTRUCTING not DISCOVERING" framing) shapes how they think. W2's builder never reads the TC skill. They get only the brief. The atmospheric shaping is lost.

**What compensates:** The W2 prompt framing (above) attempts to recreate the atmospheric effect through directive prose. The world-description in the brief itself carries atmosphere. The conviction brief format was designed (Report 01, Section 10) to "make the builder want to create THIS page, not verify they haven't violated a checklist." If the brief is well-written, it compensates. If it collapses into specification (the CALIBRATION risk), compensation fails.

### 5. WHAT'S BORN

- **Fresh creative interpretation.** The W2 builder reads the conviction brief and forms their OWN understanding of what the world looks like. They may see possibilities the W1 deriver did not consider. The conviction brief says "frontier garrison" -- the builder decides what a garrison LOOKS LIKE in CSS. This interpretive freedom is the entire point of separating derivation from building.

- **Material-informed composition.** If the W2 builder receives raw explorations (HTML exemplars) alongside the brief, they can see what "garrison-level authority" looks like in actual CSS. The brief says "sharp edges, clear borders, strict hierarchy." The exploration shows 4px left-border accents, monospaced metadata labels, compressed spacing in dense zones. The builder combines conviction with concrete vocabulary. This compositional intelligence -- the marriage of direction and material -- did not exist in W1 (which had no reference material) and does not exist in the brief alone (which has no CSS).

---

## TRANSITION 2: W2 (BUILD) to W3 (EVALUATE)

### 1. THE BATON

**What transfers:** Screenshots. Nothing else goes to auditors.

The PA auditors receive ONLY visual screenshots + their assigned questions. Zero text artifacts. Zero builder intent. Zero conviction brief. This is the fresh-eyes protocol and it is the most ideologically pure element in the current system (Report 10, Finding R-08).

The Weaver receives:
- All 5 auditor reports
- The conviction brief (for intent correlation)
- The builder's reflection (for self-assessment)
- Screenshot access (for independent viewing)

**Format:** Screenshots are PNG files at 1440px and 768px viewports. Cold-look (full page) + scroll-through (80% increments). Auditor reports are markdown. The Weaver reads them inline.

**Maximum size:** Screenshots are binary assets, not token-counted. Auditor reports are ~200-400 lines each. Total Weaver input: ~1,500-2,500 lines of auditor text + brief + reflection.

### 2. THE TISSUE

W2 produces the 6-dimension reflection. This is the primary handoff tissue for the entire pipeline.

**Current state (3 dimensions):** CONVICTION, ALTERNATIVES, UNRESOLVED (Report 06, Section "Cross-Cutting Analysis").

**Prescribed state (6 dimensions):** Each dimension gets a dedicated section header and a minimum content invitation.

| Dimension | Section Header | Invitation | What It Captures |
|-----------|---------------|---------|-----------------|
| D1: What I built | **CONVICTION: Where I succeeded** | 3 specific achievements with CSS-level detail | The builder names their best moments and explains WHY they work compositionally |
| D2: What I was trying to achieve | **CONVICTION: What I was trying to make** | 1 paragraph of creative intent | The gap between aspiration and result |
| D3: What I rejected and why | **ALTERNATIVES: Roads not taken** | 2+ rejected approaches with reasoning | Creative alternatives the next builder could reconsider |
| D4: What surprised me | **DISCOVERIES** (new section) | 1+ emergent moment | What the content demanded that the vocabulary didn't have |
| D5: What I wanted but couldn't | **ALTERNATIVES: Suppressed creative energy** | 1+ suppressed impulse with why | Creative opportunities for the next builder |
| D6: What's aesthetically unresolved | **UNRESOLVED** | 2+ open tensions + advice for next builder | Where good ideas competed; creative territory for refinement |

**Why D4 (DISCOVERIES) gets its own section:** Report 06 found that surprises are "the highest-value signals because they represent DISCOVERED understanding" but they are currently buried under UNRESOLVED (1 paragraph). The Gas Town reflection's discovery -- the wave progression component emerging from nowhere -- is the most compositionally valuable sentence in the entire reflection. It tells the next builder: "the content will demand things the vocabulary doesn't have, and that's where the best work happens." This cannot be buried.

**Quality bar for the reflection:** Each dimension section contains SPECIFIC details, not general impressions. "The zone transitions work" is too thin. "The dark header to warm cream (command post to barracks) is a genuine spatial shift -- background, typography, spacing, and border all change together at that boundary" (from the actual Gas Town reflection) is the right level of specificity. The reflection is not a status report -- it is a builder talking to a future builder about what they made and why.

### 3. THE FRAMING

**For PA auditors:** No framing beyond the existing protocol. They see screenshots + questions. They write experiential prose in perceptual language.

**For the Weaver:** The existing framing is the strongest handoff element in the pipeline (Report 06, "Cross-Cutting Analysis"):

```
1. View screenshots yourself first. Write 3 sentences about what YOU experience.
2. Read all auditor reports. Notice convergence (3+ agree) and divergence (1 disagrees).
3. Convergence confirms truth. Divergence surfaces subtlety. Both matter.
4. Write creative direction FOR a creator, not corrections FOR a manager.
5. Your verdict is a creative judgment, not a calculation.
```

**Addition to Weaver framing:**

```
6. Read the builder's reflection -- especially DISCOVERIES and SUPPRESSED ENERGY.
   If a suppressed idea aligns with what the auditors want, surface it as a
   creative invitation for the REFINE builder. The builder who wanted dark bead
   cards and suppressed them -- if the auditors want more dark-zone differentiation,
   that suppressed energy is the shortest path.
```

This addition addresses Report 06's finding that the Weaver "reads the reflection and could theoretically surface the builder's suppressed ideas as creative opportunities for the REFINE builder" but currently does not explicitly do so.

### 4. WHAT DIES

- **The builder's processing state.** Everything the builder understood about the content -- the full 14 mechanisms they considered, the CSS experiments they tried and abandoned, the moments they re-read the content and saw something new -- dies at the W2/W3 boundary. The reflection captures conclusions about that processing, not the processing itself.

- **The full auditor diversity.** Five auditors produce ~1,500-2,500 lines of independent perception. The Weaver compresses this to ~200-400 lines. Divergent minority opinions may be filtered. Report 06 flags this: "The REFINE builder only sees the compressed version."

**What compensates:** The reflection's 6 dimensions capture more of the builder's processing state than the current 3-dimension format. The Weaver's explicit instruction to note divergence (not just convergence) preserves minority observations. If a single auditor identifies something the other four miss, the Weaver names it as a "divergence signal" rather than silently dropping it.

### 5. WHAT'S BORN

- **The Weaver's creative direction.** The Weaver is the ONLY entity that simultaneously holds builder intent (brief + reflection) and audience reaction (5 auditor reports). This correlation produces creative direction that neither the builder nor the auditors could generate alone. The Weaver's AMPLIFY/RELEASE/DEEPEN/GAP territories are creative intelligence that did not exist before the Weaver processed both inputs.

- **Experiential calibration.** The auditors' cold-look reactions provide the first objective read of whether the page's INTENT matches its EXPERIENCE. The builder intended "frontier garrison" -- do five independent observers feel military authority? If yes, the metaphor is landing. If no, the metaphor is announced but not embodied. This calibration is born at the boundary and cannot exist before it.

---

## TRANSITION 3: W3 (EVALUATE) to W4 (REFINE)

### 1. THE BATON

**What transfers to the REFINE builder:**

| Document | Token Cost | Purpose |
|----------|-----------|---------|
| `output.html` | ~33,000 | The artifact to refine |
| `weaver-synthesis.md` | ~5,000 | Creative direction |
| `_reflection.md` (6 dimensions) | ~2,000 | Previous builder's voice |
| `_tc-brief.md` | ~1,500 | Original conviction |
| `_content.md` | ~5,000 | Raw content |
| Reference files (mechanism catalog, components, tokens) | ~17,500 | Building vocabulary |
| **Total** | **~64,000** | **~43% of 150K conservative budget** |

**Maximum size:** The HTML artifact dominates at ~33K tokens (81% of handoff tissue cost). This is non-negotiable for holistic refinement. The creative tissue (Weaver + reflection + brief) totals ~8,500 tokens -- cheap to enrich.

**What the REFINE builder does NOT receive:**
- Individual auditor reports (Weaver synthesis is sufficient; adding 5 reports would cost ~12K tokens with diminishing returns)
- Gate results (creative direction works better when not contaminated by compliance data)
- The TC skill (not needed for refinement -- the brief carries its conclusions)
- The routing log (mechanical plumbing)
- World-description.md (the brief and artifact already embody it)

**The reference-files question:** Report 10 (Finding R-12) argues the REFINE builder receives reference material because it re-introduces "compliance mode." Report 08 (Section 2) argues rules are necessary because "no amount of creative conviction replaces container width." The resolution:

The REFINE builder receives the mechanism catalog and components CSS (creative vocabulary -- tools, not constraints) but NOT the prohibitions file (419 lines of compliance language). The conventions block (13 lines of physics) is embedded in the prompt. Prohibitions are enforced by gates, not by builder compliance. This saves ~6,000 tokens and removes the most compliance-inducing document from the REFINE window.

### 2. THE TISSUE

The Weaver synthesis IS the tissue for this transition. It is the most important handoff document in the pipeline.

**The 6 dimensions and how they reach the REFINE builder:**

| Dimension | Source | Quality at W4 Reception |
|-----------|--------|------------------------|
| D1: What was built | `output.html` (full artifact) | FULL |
| D2: Conviction/intent | TC brief + reflection CONVICTION section + Weaver EXPERIENTIAL ANCHOR | RICH (3 independent sources, convergent) |
| D3: Roads not taken | Reflection ALTERNATIVES section + TC brief rejected mechanisms | MODERATE (available but not prominent) |
| D4: Surprises | Reflection DISCOVERIES section (dedicated section) | MODERATE (dedicated section, but still post-hoc) |
| D5: Suppressed energy | Reflection ALTERNATIVES: Suppressed creative energy | MODERATE (explicitly labeled) |
| D6: Unresolved | Reflection UNRESOLVED section + Weaver THE GAP | RICH (2 complementary sources with different perspectives) |

**Estimated total handoff bandwidth: ~75-80%** of creative intelligence survives W2 to W4 (up from ~65-70% with the 3-dimension reflection, Report 06).

The improvement comes from D4 (DISCOVERIES) getting a dedicated section and D5 (SUPPRESSED ENERGY) being surfaced by the Weaver as creative invitations.

### 3. THE FRAMING

How the W4 prompt introduces the handoff material:

```
## YOUR ROLE

Your job is not to fix problems. Your job is to make this page more of what
it already is.

You may restructure HTML, rewrite CSS, change layouts, introduce new
mechanisms, and extend the metaphor's expression. You may NOT replace the
metaphor itself or violate the world's physics.

## HOW TO ENTER THIS PAGE

1. Read the HTML. Scroll through it mentally. Write 2 sentences about what
   you experience before reading anything else.

2. Read the Weaver's synthesis. The Weaver saw this page through five
   independent pairs of eyes and one experienced editorial sensibility.
   The territories (AMPLIFY, RELEASE, DEEPEN) are territories to enter,
   not instructions to follow. What you do in each territory is yours.

3. Read the previous builder's reflection. They built this page. They know
   where it succeeds and where it falls short. Their DISCOVERIES section
   tells you where the content surprised them -- these moments of emergence
   are often where the best refinement happens. Their SUPPRESSED ENERGY
   tells you what they wanted but couldn't -- you might be able to.

4. Read the conviction brief. This is the metaphor's source. The gap between
   what the brief aspires to and what the artifact achieves is not failure.
   It is your creative territory.

5. What is the ONE THING you want to do with this page? Not three things.
   Not "address the Weaver's feedback." One thing that, if you achieved it,
   would make you proud of your contribution.
```

**Why this framing works:** It carries forward the current SKILL.md's best elements (the "not to fix problems" framing, the ONE THING commitment, the sequenced reading with checkpoints) while adding explicit direction to engage with the new reflection dimensions (DISCOVERIES, SUPPRESSED ENERGY). The "territories to enter, not instructions to follow" language is preserved verbatim because it is the best single sentence in the current pipeline.

**The REFINE builder's reflection template:**

The REFINE builder produces `_reflection-v2.md` with the same 6 dimensions. Critical difference: D6 (UNRESOLVED) now includes a "What I would tell a third builder" paragraph that directly addresses the Weaver's GAP assessment. This creates a chain: builder articulates gap -> auditors perceive gap -> Weaver synthesizes gap -> REFINE builder addresses gap -> REFINE builder articulates remaining gap.

### 4. WHAT DIES

- **The full auditor diversity.** Five independent perspectives are compressed to the Weaver's synthesis. Minority opinions may be lost. This is the same loss as W2/W3 but now it directly affects the creative direction given to the REFINE builder.

- **The initial builder's creative momentum.** Report 02 documents that the REFINE builder receives "MORE situational creative knowledge but LESS methodological creative knowledge" than W1. The initial builder's momentum -- the specific energy of someone who derived a metaphor and built from it in one continuous act -- cannot transfer. The REFINE builder starts cold.

- **The Weaver's visual perception.** The Weaver saw screenshots. The REFINE builder reads HTML. Report 06 flags: "The REFINE builder's understanding of the artifact is CODE-level, not PERCEPTION-level." The Weaver's perceptual language partially compensates.

**What compensates:** The ONE THING commitment focuses the REFINE builder's creative energy into a single achievable goal, preventing the diffusion that killed the Flagship (Report 08, Section 7). The Weaver's creative territories give structure to what would otherwise be an overwhelming task (refine a 2,000-line HTML page).

### 5. WHAT'S BORN

- **The two-builder dialectic.** The REFINE builder reads both the initial builder's reflection ("where I succeeded, where I fell short") and the Weaver's creative direction ("where to go"). These are different perspectives on the same artifact. The REFINE builder holds both and makes their own creative judgment. This triangulation -- builder's intent, audience's experience, new builder's perception -- produces refinement that is neither blind repetition nor arbitrary change.

- **The REFINE builder's unique creative contribution.** The evidence (Report 08, Section 12) shows the REFINE step produces the largest quality gain in the project (+1.5 PA-05 points for Gas Town). This is not because the REFINE builder is better -- it is because they have DIFFERENT inputs. They see what someone else made, hear what five observers experienced, and bring their own creative instincts to an artifact that already has momentum. The creative contribution is born at the intersection of inheritance and independence.

---

## THE CRITICAL TENSION: Resolved

**Focused direction beats diffuse material** for CREATIVE DIRECTION -- what the builder aims for.

**Raw material beats pre-digested rules** for CREATIVE VOCABULARY -- what the builder has to build with.

These are not competing claims. They describe different functions:

| Function | Best Source | Size | When Read |
|----------|-----------|------|-----------|
| Direction | Conviction brief + Weaver synthesis | 80-300 lines | FIRST (before anything else) |
| Vocabulary | Mechanism catalog + components + (optionally) raw explorations | 1,700-5,000+ lines | SECOND (after direction is absorbed) |
| Physics | Conventions block (13 lines) | 13 lines | Absorbed, not checkboxed |

The current SKILL.md's STOP marker ("Write your conviction brief before reading the vocabulary files below") already implements this two-phase reading. The handoff protocol extends it: the builder reads conviction FIRST, then vocabulary SECOND, and creative material (explorations, research) fills remaining context as AMBIENT RAW MATERIAL -- not to be systematically processed, but to create the atmospheric richness the transcript describes.

**The Weaver's quality is the reconciliation.** The Weaver report IS both focused and creative. It achieves this because its prompt says "Write creative direction FOR a creator, not corrections FOR a manager" and provides the AMPLIFY/RELEASE/DEEPEN/GAP structure. The conviction brief achieves it when its WORLD-DESCRIPTION and OPPOSITION sections are vivid prose. The reflection achieves it when its DISCOVERIES section captures genuine emergence.

The protocol's job is not to CHOOSE between focused direction and rich material. It is to SEQUENCE them: direction first, material second, physics always.

---

## Appendix A: Context Budget Allocation per Window

Based on Report 05 analysis. Conservative 150K token budget.

| Window | Fixed Overhead | Focused Direction | Reference/Vocabulary | Creative Material (optional) | Working Memory | Output |
|--------|---------------|-------------------|---------------------|------------------------------|---------------|--------|
| **W1 (DERIVE)** | 9,500 | - | - | 12,600 (TC skill) + 5,200 (content) | 25,000 | 5,000 (brief) |
| | | | | Research if budget allows (+5K-15K) | | |
| | **USED:** ~57,300 | **FREE:** ~92,700 | | | | |
| **W2 (BUILD)** | 9,500 | 3,000 (brief) | 17,500 (mech+comp+tokens) | 5,200 (content) + explorations (+0-30K) | 25,000 | 35,000 (HTML+reflection) |
| | **USED:** ~95,200 (with 30K explorations) | **FREE:** ~54,800 | | | | |
| **W3 (EVALUATE)** | 9,500 (per auditor) | N/A | N/A | Screenshots (binary) | 15,000 | 2,000 (per auditor) |
| | Weaver: ~15,000 (auditor reports + brief + reflection) | | | | 15,000 | 5,000 (synthesis) |
| **W4 (REFINE)** | 9,500 | 8,500 (Weaver+reflection+brief) | 15,000 (mech+comp+tokens) | 33,000 (HTML artifact) + 5,200 (content) | 25,000 | 35,000 (HTML+refl) |
| | **USED:** ~131,200 | **FREE:** ~18,800 | | | | |

**W4 is the tightest window** at ~87% budget utilization. This means: NO additional creative material (explorations, research) can be loaded into the REFINE window. The HTML artifact alone consumes 33K tokens. The REFINE builder works from the artifact + Weaver + reflection + brief + content + reference files. This is by necessity, not by choice.

**W2 has the most headroom** for creative material. After the conviction brief, content, and reference files, ~55K-85K tokens remain (depending on content size). This is where raw explorations or research could load, if the hypothesis that they improve creative output is tested and confirmed.

---

## Appendix B: The Reflection-v2 as Living Document

Report 06 identifies that `_reflection-v2.md` (the REFINE builder's reflection) is "a dead document -- rich information that goes nowhere." The Gas Town v2 reflection contains:

- Density compression perceptibility concerns
- Comparison strip risk assessment
- Warm palette semantic differentiation challenge
- Transition hallway visual weight recommendation

None of this reaches any subsequent agent in the default path.

**The design decision:** If Step 9 triggers, the third builder receives:
1. `_reflection.md` (original builder's 6-dimension reflection)
2. `_reflection-v2.md` (REFINE builder's 6-dimension reflection)
3. Both Weaver syntheses (if a second PA cycle ran)
4. The HTML artifact (current version)
5. Content + reference files

The v2 reflection is NOT a dead document -- it is the REFINE builder's voice, carrying the same 6 dimensions of creative intelligence as the original reflection. A third builder reading both reflections sees a CONVERSATION between two builders about the same artifact. This is the lesson chain pattern from DD-001 to DD-002: artifact + builder's notes + next builder's notes = accumulated creative intelligence.

---

## Appendix C: Gate Integration

Gates are NOT handoff tissue. They are physics enforcement.

The adversarial reviewer (Report 08, Section 5) correctly identifies that file selection is a creative decision hidden in plumbing. The gate results exemplify this: they carry information about the artifact that the REFINE builder never sees (Report 06: "the REFINE builder never sees which gates failed or passed").

**Protocol decision:** Gate results remain invisible to the REFINE builder. Rationale:

1. Physics violations (container width, warm palette, font trinity, decorative elements, WCAG contrast) are mechanically patched by the orchestrator before REFINE. The REFINE builder receives an artifact with physics already corrected.

2. Creative-judgment gates (stacked gap, single margin, section count) are ADVISORY only, not blocking. Report 10 (Finding R-07) classifies 4 of 14 REQUIRED gates as OLD REMNANT pipeline thresholds. These do not override the builder's creative decisions.

3. The Weaver synthesizes the perceptual equivalent of gate results. If the page has excessive whitespace, auditors say "the space between sections feels like abandonment" (perceptual language). If backgrounds are too similar, auditors say "the zones blend into each other." The Weaver translates these into creative direction. This is more useful to the REFINE builder than "GR-11 FAIL: bg delta 12 < 15 RGB."

**Gate flow:**
```
W2 (BUILD) -> Orchestrator patches physics gates -> W3 (EVALUATE) -> Orchestrator patches physics regressions -> W4 (REFINE)
```

The REFINE builder works on a physics-clean artifact and focuses entirely on creative refinement.

---

## Appendix D: Corpus Distribution Protocol

The creative corpus (~172,800 lines across ~560 files) is the reservoir of creative intelligence. The question is not WHETHER it enters the pipeline but WHERE, HOW MUCH, and in what FORM at each window. Different windows have different cognitive modes, different context budgets, and different relationships to raw material. The distribution protocol respects all three.

### D.1 The Corpus Inventory

| Corpus Slice | Files | Lines | Primary Content Type | Builder Value |
|-------------|-------|-------|---------------------|---------------|
| Research (R1-R5 + Synthesis) | 7 | ~8,400 | CREATIVE KNOWLEDGE (theory, findings) | 3-4/5 |
| DD Explorations | 18 | ~9,700 | EXPLORATION (density/dimension concepts) | 3-4/5 |
| OD Explorations | 20 | ~20,500 | EXPLORATION (organizational structures) | 4/5 |
| AD Explorations | 37 | ~28,000 | EXPLORATION (axis derivation, questioning) | 3/5 |
| CD Explorations | 24 | ~15,600 | EXPLORATION (combination/composition) | 5/5 |
| Connective Tissue | ~120 | ~75,000 | REFERENCE + RULES (pipeline, validation, meta) | 1-2/5 |
| Case Studies | 24 | ~15,600 | CASE STUDY (process documentation) | 4-5/5 |
| **TOTAL** | **~250** | **~172,800** | | |

The connective tissue (~75,000 lines) has low builder value -- it is meta-infrastructure (pipeline docs, validation protocols, extraction provenance). It does NOT enter any creative window. This reduces the actionable creative corpus to **~97,800 lines**.

### D.2 Which Slices Enter Each Window

#### W1 (DERIVE): NOTHING from the corpus

| What Enters | What Does NOT Enter | Why |
|------------|--------------------|----|
| TC Skill (841 lines) | Research (R1-R5) | TC derivation works from content + world-description tension. Research is about the design system, not about THIS content. The TC skill already embodies the research findings as process. |
| Content markdown | Explorations (DD/OD/AD/CD) | Explorations show OUTPUTS of tension-composition. The TC agent derives tension, not studies previous derivations. Loading explorations risks anchoring the metaphor to existing solutions. |
| World description (17 lines) | Case Studies | Case studies calibrate BUILDING quality, not THINKING quality. The TC agent's output quality is calibrated by the TC skill's structure, not by seeing what others built. |

**Rationale:** Window 1's cognitive mode is DERIVATION. The agent is doing original work -- perceiving tension between content needs and world personality, collapsing metaphor candidates, planning compositional architecture. Raw material from the corpus would be a distraction, not fuel. The TC skill is the only "corpus" this window needs -- it embeds the methodology discovered across all the research.

**Budget:** W1 uses ~19% of 150K budget. The 81% headroom is for working memory during the 5-phase questioning pipeline, not for additional input material.

**Exception:** If the content is ABOUT the design system itself (self-referential), the TC agent may benefit from seeing 1-2 relevant explorations that handle similar meta-content. This is a rare case. The orchestrator detects it during content classification (Phase 0 of TC) and can inject a single relevant exploration via a flag in the W1 prompt.

#### W2 (BUILD): TARGETED corpus -- case study + combinations + TC-selected explorations

| What Enters | Lines | Tokens | Role |
|------------|-------|--------|------|
| CD-006 case study (pilot-migration.md) | 387 | ~4,945 | CALIBRATION: what "DESIGNED" looks like as compositional process |
| Mechanism combinations (mechanism-combinations.md) | 447 | ~4,200 | GRAMMAR: how tools combine into multi-coherence |
| TC-selected explorations (0-2 files) | 0-4,000 | 0-12,000 | GENERATIVE OPPOSITION: creative material that challenges the brief's direction |

**Total corpus in W2: 834-4,834 lines (~9,145-21,145 tokens)**

**The critical design decision:** The builder does NOT receive the full research corpus, the full exploration set, or anything "diffuse." They receive the crown jewel case study (calibration), the mechanism grammar (combinatorial thinking), and optionally 1-2 explorations that the TC agent specifically recommended.

**Why this is different from "load everything that fits":**

Report 13 (Window 2 Design, Section 2) articulates three reasons:
1. Attention is zero-sum. 15,000 lines at 0.007% attention per line vs 3,000 lines at 0.03% attention per line.
2. Breadth harms production. Research explored broadly; the builder goes deep on ONE metaphor.
3. The conviction brief already carries the research. Loading raw research behind the brief is redundant.

**The TC-selected explorations (generative opposition):**

This is the mechanism that connects corpus selection to conviction. In Phase 4.7 of the TC skill (Report 12, Window 1 Design), the TC agent recommends 3-4 explorations using the generative opposition principle: select explorations that CHALLENGE the conviction brief's direction, not ones that confirm it.

Example: If the conviction brief derives a "frontier garrison" metaphor (angular, compressed, authoritative), the TC agent might recommend:
- OD-006-creative.html (flowing, organic, expansive) -- the opposite spatial register
- DD-003-islands.html (isolated modules with breathing room) -- the opposite density pattern

The builder reads these NOT as templates but as creative counterpoints. The garrison gains specificity by contrasting with what it is NOT. This is raw material used for generative friction, not diffuse inspiration.

**Selection is DYNAMIC, not static.** The TC agent selects based on the specific metaphor it derived. Different content produces different metaphors produces different exploration recommendations. The orchestrator does not hardcode which explorations load -- it reads the TC agent's recommendation artifact and loads what was recommended.

**Budget:** W2 uses ~30% of budget with the core files. Adding 2 TC-selected explorations (~12K tokens) brings it to ~38%. Still 62% headroom. The builder is comfortable.

#### W3 (EVALUATE): ZERO corpus

| What Enters | What Does NOT Enter | Why |
|------------|--------------------|----|
| Screenshots only (auditors) | Everything | Fresh-eyes protocol. Auditors receive ZERO design system material. Zero conviction brief. Zero explorations. They see the page as a reader would. This independence is the most valuable property of the evaluation window. |
| Auditor reports + brief + reflection (Weaver) | Explorations, research, case studies | The Weaver synthesizes perception (auditors) with intent (brief + reflection). Adding corpus material would contaminate the Weaver's creative direction with reference-based thinking. The Weaver writes "this page reaches for authority but hasn't earned it" not "this page uses fewer mechanisms than CD-006." |

**Rationale:** The evaluation window's cognitive mode is PERCEPTION. Corpus material would make auditors compare rather than perceive. The Weaver would reference rather than synthesize. Both are worse.

**Budget:** N/A for auditors (screenshots are binary). Weaver uses ~15K tokens of auditor reports + handoff tissue. No room for corpus even if it were wanted.

#### W4 (REFINE): ZERO additional corpus (budget-constrained)

| What Enters | Tokens | Role |
|------------|--------|------|
| HTML artifact | ~33,000 | The thing being refined |
| Weaver synthesis | ~5,000 | Creative direction |
| Reflection (6 dimensions) | ~2,000 | Previous builder's voice |
| Conviction brief | ~1,500 | Original metaphor |
| Content markdown | ~5,200 | Raw content |
| Mechanism catalog | ~7,171 | Vocabulary |
| Components CSS | ~7,494 | Starting points |
| Conventions block | ~200 | Physics |
| **TOTAL** | **~61,566** | **~41% of budget** |

Wait -- this totals 41%, not 87%. The discrepancy with Appendix A (~87%) is because Appendix A included prohibitions.md (6,030), tokens.css (2,999), and more generous output/working-memory estimates. Under the revised protocol (prohibitions removed, conventions inlined), W4 has approximately **59% headroom**.

**Could corpus enter W4?** Technically, ~88K tokens remain. But the REFINE builder's cognitive mode is AMPLIFICATION -- making the page more of what it already is. It does not need new creative material. It needs to SEE what the page is (artifact), HEAR what observers experienced (Weaver), and KNOW what the builder intended (reflection + brief). Adding explorations would split attention between "what this page could become" and "what other pages are." The former is productive; the latter is distracting.

**Exception: targeted case study injection.** If the Weaver's synthesis identifies a specific compositional problem (e.g., "the zone transitions feel like jumps, not progressions"), the orchestrator COULD inject a single relevant case study (e.g., CD-005-multi-axis-transition.md, 386 lines, ~4,900 tokens) that demonstrates smooth zone transitions. This is REACTIVE -- driven by the Weaver's diagnosis, not preloaded. The cost is ~5K tokens. The benefit is calibration for the specific problem the REFINE builder is solving.

This is the ONLY scenario where corpus enters W4, and it requires the orchestrator to parse the Weaver's synthesis for structural recommendations.

### D.3 How Handoff Tissue References the Corpus

The handoff documents (conviction brief, reflection, Weaver synthesis) are the ONLY channel between windows. The corpus enters early windows; the handoff tissue carries its EFFECTS forward.

#### Conviction Brief -> Corpus References

The conviction brief does not contain explicit corpus references. No "as demonstrated in OD-004" or "using the pattern from DD-006." The brief carries conviction, not citations.

However, the brief's CONTENT MAP implicitly references the mechanism catalog (which mechanisms are deployed where). This is acceptable because the mechanism catalog is loaded in both W2 and W4 -- the reference resolves.

**What the TC agent's exploration recommendation does:** It creates a SEPARATE artifact (`_exploration-rec.md`) that maps specific explorations to specific aspects of the conviction brief:

```
## Recommended Explorations for Window 2

### OPPOSITION MATERIAL
OD-006-creative.html — The antithesis of this metaphor's spatial register.
Read this to understand what the garrison is NOT.
Relevant to OPPOSITION section: "the content resists uniform compression"

### CALIBRATION MATERIAL
CD-006-pilot-migration.html — Multi-coherence at zone boundaries.
Read this to calibrate how many channels shift simultaneously at a boundary.
Relevant to CONTENT MAP section: transition types between zones
```

This artifact travels alongside the brief. The orchestrator reads it and loads the recommended files into W2. The W2 builder sees the explorations WITH the TC agent's framing of WHY they are relevant. The framing is the tissue connecting corpus to conviction.

#### Reflection -> Corpus References

The builder's 6-dimension reflection MAY reference corpus material they read in W2:

- D4 (DISCOVERIES): "The CD-006 case study showed dense-sparse alternation at section level; I discovered it works at component level too within a single section"
- D3 (ROADS NOT TAKEN): "I considered the flowing transitions from OD-006 but rejected them -- the garrison metaphor demands sharp cuts"

These references are DOWNSTREAM -- the REFINE builder in W4 reads them as natural language descriptions, not as instructions to read specific files. If the REFINE builder has not seen OD-006, the reference still communicates the creative decision ("I rejected flowing transitions in favor of sharp cuts"). The reference adds provenance; the decision carries creative intelligence.

#### Weaver Synthesis -> Corpus References

The Weaver NEVER sees corpus material and therefore cannot reference it. This is correct. The Weaver references PERCEPTUAL observations ("the zone boundaries feel like walls, not doors") and INTENT from the brief/reflection. If the Weaver's language happens to describe something that an exploration demonstrates, that is convergent discovery, not corpus reference.

### D.4 Static vs Dynamic Selection

**Selection is DYNAMIC at two levels:**

#### Level 1: TC Agent Selection (per-build dynamic)

The TC agent in W1 recommends explorations based on the specific metaphor it derived. Different content -> different metaphor -> different exploration recommendations. This selection happens every build and is never the same twice (unless the same content produces the same metaphor, which is possible but unlikely).

The selection criteria (from TC skill Phase 4.7, generative opposition):
1. Select explorations whose SPATIAL REGISTER opposes the derived metaphor
2. Select explorations whose DENSITY PATTERN opposes the planned composition
3. Prefer explorations from DIFFERENT domains (if the content is organizational, recommend density or combination explorations, not organizational ones)
4. Maximum 4 recommendations (context budget constraint)

**This selection is CREATIVE, not mechanical.** The TC agent reads the exploration summaries (from the case study index) and perceives which ones would create productive friction with the conviction brief. This is the same creative judgment that produced the metaphor itself.

#### Level 2: Orchestrator Selection (per-window dynamic)

The orchestrator decides what ACTUALLY loads into each window based on:

1. **Budget remaining** after mandatory files. If the content markdown is unusually large (5,000+ lines), fewer explorations fit.
2. **TC agent recommendations.** The orchestrator reads `_exploration-rec.md` and loads recommended files. If a recommended file doesn't exist or exceeds budget, it is skipped.
3. **Weaver diagnosis (W4 only).** If the Weaver identifies a specific compositional problem, the orchestrator can inject a targeted case study. This requires parsing the Weaver's synthesis for structural keywords ("transition," "boundary," "density," "spacing pattern").

**What is STATIC:**
- The core file manifest for each window (conviction brief, mechanism catalog, components CSS, etc.) is fixed. These are the VOCABULARY -- they do not change per-build.
- The case study (CD-006) is always loaded in W2. This is the calibration anchor. Until a better calibration artifact is produced, CD-006 is the reference point.
- The mechanism combinations file is always loaded in W2. This is the grammar.
- W3 always receives zero corpus. W1 always receives zero corpus (excluding TC skill).

**What is DYNAMIC:**
- TC-selected explorations in W2 (0-4 files, selected per-build)
- Optional case study injection in W4 (0-1 files, selected based on Weaver diagnosis)

### D.5 The Graduated Amount Principle

Different windows get different AMOUNTS of corpus because they have different cognitive needs:

```
W1 (DERIVE):    0 lines of corpus     — needs PROCESS, not material
W2 (BUILD):     834-4,834 lines       — needs CALIBRATION + OPPOSITION
W3 (EVALUATE):  0 lines of corpus     — needs INDEPENDENCE
W4 (REFINE):    0-386 lines           — needs FOCUS (optional targeted case study)
```

**The reconciliation of "raw material produces quality" vs "focused beats diffuse":**

The ideology says raw material in context produces richer generative output. The adversary says focused direction beats diffuse material. The corpus distribution protocol resolves this by recognizing that BOTH are true but for DIFFERENT windows:

1. **W1 gets PROCESS, not material.** The TC skill IS the crystallized research. It embodies the findings of 337 research observations across 5 streams. The TC agent doesn't need the raw research because the skill already translates it into methodology. Loading raw research alongside the skill would be redundant -- like giving a surgeon the patient's raw test results AND the diagnosis AND the textbook chapter.

2. **W2 gets TARGETED material, not diffuse.** The builder gets the crown jewel case study (calibration), mechanism grammar (combinations), and 0-2 TC-selected explorations (opposition). This is raw material, but SELECTED raw material. The selection is itself a creative act (the TC agent's generative opposition judgment). The builder sees ~4,000 lines of creative material, not ~97,000. But the ~4,000 lines are the RIGHT ~4,000 lines for THIS build.

3. **W3 gets NOTHING.** Perception is independence, not material.

4. **W4 gets ALMOST NOTHING.** The REFINE builder's raw material is the artifact itself (33K tokens). They are working WITH an existing creation, not creating from scratch. Additional corpus would compete with the artifact for attention. The one exception -- targeted case study injection -- is REACTIVE (driven by Weaver diagnosis) and small (~386 lines).

**The total corpus that enters the pipeline for a single build:** ~834-5,220 lines out of ~97,800 available. That is **0.9-5.3% of the actionable creative corpus**. This sounds low, but the conviction brief carries the EFFECTS of the TC agent's deep engagement with content, and the TC skill carries the EFFECTS of the research corpus. The pipeline does not load the corpus directly -- it loads the corpus's CRYSTALLIZED INTELLIGENCE through process (TC skill) and conviction (the brief).

### D.6 The Corpus Slice Distribution Matrix

| Corpus Slice | W1 | W2 | W3 | W4 | Selection Mode |
|-------------|----|----|----|----|----------------|
| Research (R1-R5) | -- | -- | -- | -- | Embedded in TC skill methodology |
| DD Explorations | -- | 0-1 (TC-selected) | -- | -- | Dynamic: generative opposition |
| OD Explorations | -- | 0-1 (TC-selected) | -- | -- | Dynamic: generative opposition |
| AD Explorations | -- | -- | -- | -- | Embedded in TC skill (axis questioning) |
| CD Explorations | -- | 0-1 (TC-selected) | -- | -- | Dynamic: generative opposition |
| Case Studies | -- | 1 (CD-006, always) | -- | 0-1 (Weaver-triggered) | Static (W2) / Reactive (W4) |
| Mechanism Combinations | -- | 1 (always) | -- | -- | Static |
| TENSION-PROTOCOL.md | -- | -- | -- | -- | Embedded in TC skill |

**What does NOT enter ANY window:**
- Connective tissue (~75,000 lines): meta-infrastructure, zero builder value
- AD Explorations as raw files: embedded in TC skill as questioning methodology
- Research as raw files: embedded in TC skill as methodology + in conviction brief as conclusions
- TENSION-PROTOCOL.md as raw file: its discoveries are embedded in the TC skill
- Full exploration set: too large, too diffuse, risks template copying

**What the corpus digests (from _corpus-ingestion/) could enable:**

The corpus ingestion wave produced digests: research-digest.md, dd-digest.md, od-digest.md, ad-digest.md, cd-digest.md, casestudy-digest.md. Each compresses thousands of lines into ~200-400 lines of creative intelligence.

These digests represent an ALTERNATIVE to loading raw explorations. Instead of giving the W2 builder a 2,085-line HTML file (CD-006-pilot-migration.html), give them a ~300-line digest that captures the creative intelligence from ALL CD explorations. The trade-off:

| Approach | Lines | Tokens | What Builder Gets | Risk |
|----------|-------|--------|-------------------|------|
| Raw exploration (1 file) | ~2,000 | ~6,700 | Specific CSS patterns, exact mechanisms, one metaphor in full depth | Template copying |
| Corpus digest (1 slice) | ~300 | ~1,000 | Creative principles across all explorations in a domain, no CSS specifics | Pre-digestion may lose texture |
| Case study (1 file) | ~387 | ~4,945 | Anti-prescription PROCESS narrative, compositional thinking in action | Somewhat abstract |

The ideology argues raw material > pre-digested. But the digests are not RULES -- they are compressed CREATIVE KNOWLEDGE. The question is empirical: does a builder produce better work from a 2,000-line raw HTML or a 300-line creative digest? This requires testing.

**Recommendation:** Start with the current approach (case study + combinations + TC-selected raw explorations). If the digests prove to produce equivalent or better builder output in A/B testing, switch to digests for their token efficiency. The digests are a RESERVE MECHANISM, not the default.

---

## Appendix E: What This Protocol Does NOT Resolve

1. **The model confound.** Report 08 (Section 7) argues that model quality (Opus vs Sonnet) is the most under-examined variable. This protocol assumes Opus for all agents. If Sonnet builders produce equivalent quality with the same handoff tissue, the entire architectural complexity may be unnecessary.

2. **PA's role under conviction framing.** Report 09 (T-20) documents the user's question: "What does PA look like when we're not extracting rules?" The current PA protocol (fresh-eyes, perceptual language, no CSS terms) is already well-aligned with conviction framing. The 20 questions ask about EXPERIENCE, not compliance. No change is needed to the PA questions themselves. What may need to change is how the Weaver uses PA data -- currently as material for creative direction (correct), potentially as material for compliance grading (incorrect, and not currently happening).

3. **N=2 evidence base.** Report 08 (Section 6) challenges all architectural conclusions drawn from 2 build runs. This protocol is a HYPOTHESIS, not a conclusion. Each element can be tested: Does the 6-dimension reflection produce better REFINE output than the 3-dimension version? Does removing prohibitions.md from W4 degrade or improve quality? Does loading explorations in W2 help? These are empirical questions that benefit from controlled experiments.

4. **Corpus digest vs raw exploration A/B test.** Appendix D.6 identifies the open question: do corpus digests produce equivalent builder output to raw explorations? This requires a controlled experiment with the same content, same TC brief, two builders -- one with a raw CD-006 HTML, one with the CD digest. The metric is PA-05 score + Weaver assessment.

5. **Optimal number of TC-selected explorations.** The protocol allows 0-4 TC-selected explorations in W2. The budget supports up to 4 (~48K tokens). But attention research (Report 13, Section 2) suggests diminishing returns beyond 2. The optimal number requires experimentation.
