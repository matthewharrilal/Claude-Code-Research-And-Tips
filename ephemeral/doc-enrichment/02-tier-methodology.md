# Tier Methodology: The Richness Model Built on Variant B

**Date:** 2026-02-15
**Purpose:** Definitive reference for WHY the 4-tier richness model exists, HOW it works, and WHAT building and testing each tier looks like. A new instance should read this and know exactly what to build, why, and how to evaluate results.

---

## 1. WHY WE'RE BUILDING TIERS ON VARIANT B

### The Richness Gap

Phase D tested 5 pipeline configurations against the same content. Variant B (the "weak permission" configuration) scored best: 18/19 programmatic checks, 4/5 novelty, genuine metaphor derivation ("scientific calibration laboratory"). It is the BEST output the current pipeline produces.

It is also not enough.

Variant B deploys 5 of 44 catalogued CSS techniques (11.4%). Showcase page OD-004 deploys 23 of 44 (52.3%). CD-006 deploys 44 of 44 (100%). The gap is not in compliance (Variant B scores 18/19) or in identity (the lab metaphor is genuinely novel). The gap is in TECHNIQUE SATURATION -- how densely the page deploys the design vocabulary. Variant B is a "formatted blog post" with a genuine metaphor. OD-004 is a "place you want to spend time in." The user said: "Before we even had KortAI... I didn't feel like I wanted to read this." The design system exists to transform that feeling. Variant B only partially achieves it.

### Why Variant B Is the Baseline (Not the Showcase Pages)

Variant B is what the PIPELINE produces. Showcase pages (DD-006, OD-004, CD-006) were built through 4-6 iterative exploration stages, each with dedicated audit teams, over weeks of accumulated context. They represent what is POSSIBLE with accumulated fluency. Variant B represents what is REPRODUCIBLE with a single pipeline pass. The tier model bridges this gap by defining achievable richness levels between "Variant B as-is" and "showcase ceiling."

The richness investigation (5 agents) found the gap is QUANTITATIVE, not qualitative. Variant B derives genuine identity through the pipeline -- the user correctly pushed back on the initial "cold assembly" framing. The gap is technique density, not technique absence. The pipeline HAS all 18 mechanisms in its catalog. Variant B only reads 2-4 of them because the skill says "sample 2-4 mechanisms" -- a single instruction that all 11 research agents independently identified as the most limiting specification in the entire system.

### Why We Need to Know How Much Richness Is Achievable

The core open question is NOT "should we make pages richer?" (yes, obviously). It is: "How much richer can the pipeline make pages before hitting diminishing returns, forced metaphors, or maintenance cost that outweighs quality gain?" The tier model turns this vague question into 4 concrete, testable hypotheses -- one per tier.

---

## 2. THE TIER MODEL WITH FULL RATIONALE

### The Fluency Curriculum Analogy

The design system IS a language (this analogy was independently reached by 6+ research agents). The tier model is a FLUENCY CURRICULUM:

| Tier | Vocabulary Size | Language Analogy | Fluency Level |
|------|----------------|------------------|---------------|
| **Floor** | 5 mechanisms | "The dog runs." | Survival |
| **Middle** | 8-10 mechanisms | Compound sentences, varied rhythm | Conversational |
| **Ceiling** | 12-15 mechanisms | Paragraph coherence, personal style | Proficient |
| **Flagship** | 16-18 mechanisms | Full literary register, metaphor as argument | Native |

Each tier is not "worse" or "better" -- it is APPROPRIATE for different content. A 300-word API reference does not need native fluency. A 5,000-word philosophical essay does.

### TIER 1: FLOOR (10-20% of pages)

**What it is:** Token-compliant pages using the component library. Block-level stacking with correct design tokens. No metaphor, no grid/flex layouts, no pseudo-elements.

**Why it exists:** Some content serves readers who want INFORMATION, not atmosphere. API references, changelogs, configuration tables, short (<200 word) content. The Floor exists because forcing richness onto information-seeking content produces artifice, not experience.

**Evidence:** Phase D's Track 1 builder produced a Floor-level page in 8 minutes. When the always-load protocol was followed (it was NOT in Phase D -- hence 5 critical violations), pure assembly produces clean, structured, scannable output.

**Concrete profile:**
- 5 mechanisms: 2-zone DNA, confidence encoding via color, border-left signal, typographic scale, code block
- ~150-250 CSS lines, ~300-500 HTML lines
- 1 responsive breakpoint (768px)
- No grid, no flex, no pseudo-elements, no animations
- Build time: 30-45 minutes
- Reproducibility: 95%+ (almost entirely mechanical -- every decision is a lookup)

**Quality band:** 14-17/20. High floor, low ceiling. Pages will look similar to each other. This is the cost of high reproducibility.

### TIER 2: MIDDLE (40-50% of pages)

**What it is:** Floor plus layout techniques (grid/flex), zone backgrounds, density rhythm, dark header, and accessibility baseline. NO metaphor derivation. The critical addition is SPATIAL VARIETY and RHYTHMIC VARIATION.

**Why it exists:** This tier crosses the ENGAGEMENT THRESHOLD -- the point where content goes from "formatted" to "designed." The tier architect showed this is the HIGHEST ROI transition in the entire system: +45 minutes of build time for 3-4x the richness of Floor. The implications-explorer identified the threshold effect: "Below threshold = generic. At threshold = designed. Above threshold = place."

Every research agent (11/11) agreed that the most important untested hypothesis is: "What does an exceptional Middle-tier page feel like?" If Middle achieves the "place" feeling without metaphor derivation, the entire Ceiling/Flagship ambition shifts. If it doesn't, we know metaphor penetration is necessary.

**Evidence supporting Middle as universal floor:**
- Variant B sits just above Floor (7 mechanisms deployed, but mostly at naming level not CSS-generation level)
- The Floor-to-Middle transition adds grid/flex, zone backgrounds, density rhythm, dark header -- all LOOKUP-BASED decisions, not creative ones
- 80-90% reproducibility means agents produce consistent output
- Content-type-to-pattern mapping is codifiable: tutorial = CRESCENDO, reference = F-PATTERN, overview = BENTO, narrative = PULSE

**Concrete profile:**
- 8-10 mechanisms: all 5 Floor mechanisms plus spacing compression, dense/sparse alternation, zone background differentiation, dark header + 3px border, data table
- Optional 1-2 additional: border-weight gradient, solid offset depth, width variation, bento grid
- ~350-500 CSS lines, ~600-900 HTML lines
- 2-3 responsive breakpoints, at least 1 grid and 1 flex layout, 1-3 pseudo-elements
- 3-color zone system (sparse cream, dense white, breathing tan)
- Semantic spacing aliases (within/between/chapter)
- Accessibility triple: skip-link, focus-visible, prefers-reduced-motion
- Build time: 70-100 minutes
- Reproducibility: 80-90%

**Quality band:** 16-18/20. Moderate variance. Pages differ based on content structure and pattern selection but feel cohesive within the design system.

**What makes Middle different from Floor:** Five specific additions transform the page:
1. Layout techniques (grid + flex break block-stacking monotony)
2. Zone backgrounds (3-color system creates visual sections)
3. Dense/sparse alternation (section padding varies, creating rhythm)
4. Dark header + 3px primary border (single most impactful visual upgrade -- immediately signals "designed")
5. Accessibility baseline (skip-link, focus-visible, reduced-motion)

### TIER 3: CEILING (20-30% of pages)

**What it is:** Full tension-composition pipeline. The page has a METAPHOR that drives CSS decisions -- not just labels, but values. Backgrounds darken based on metaphor logic. Padding compresses based on metaphor structure. Border weights encode metaphor semantics. The metaphor GENERATES CSS values.

**Why it exists:** Content with genuine structural tension (passes the Addition Test as "NO -- existing components cannot fulfill this without transforming their meaning") benefits from a metaphor that makes spatial organization MEAN something. The metaphor adds the "place" quality -- "I want to spend time here." This is the tier that produces pages like OD-004, where the geological confidence metaphor generates border weights (4px/3px/2px/1px = confidence levels), padding amounts (40px to 16px = density inverse of confidence), line heights, and max-widths from a single organizing concept.

**Evidence:** Phase D Variants A and B both ran the full pipeline. Variant A chose architectural blueprint (3/5 novelty). Variant B chose scientific calibration laboratory (4/5 novelty). Both achieved 15-18/19 programmatic compliance. SAME content + SAME pipeline = DIFFERENT metaphors but COMPARABLE quality. The pipeline produces consistent quality despite variable creative outputs.

**Concrete profile:**
- 12-15 mechanisms: all Middle mechanisms plus border-weight gradient, solid offset depth, width variation, progressive disclosure, footer mirror
- Optional 2-3: scroll witness/sticky TOC, bento grid with spans, drop cap
- ~700-1,000 CSS lines, ~1,200-1,800 HTML lines
- 3-5 responsive breakpoints, 3-6 pseudo-elements, 4-8 grid/flex layouts
- Metaphor-derived custom tokens (e.g., --stratum-established-padding)
- Transition grammar: 3 types (smooth/bridge/breathing)
- Scroll-driven animations with @supports fallback
- 2-5 novel metaphor-specific component classes
- Build time: 150-220 minutes (with audit/fix cycle)
- Reproducibility: 50-70% (irreducible creative step in metaphor selection)

**Quality band:** 17-19/20. High creative variance (different pages look dramatically different). This is by design -- each page is a "place" with unique spatial character. The anti-gravity mechanisms (R1, R5, R6) ensure divergence.

**The reproducibility trade-off:** Ceiling CANNOT be highly reproducible without losing what makes it Ceiling. The metaphor-driven CSS generation is the source of both richness AND variance. To make it reproducible, you'd have to prescribe the metaphor -- which collapses it to Middle (template application, not creative derivation).

### TIER 4: FLAGSHIP (5-10% of pages)

**What it is:** Ceiling plus multi-pattern composition (3-5 axis patterns per page), composite components (3-zone: label + principle + proof), editorial flourishes (drop caps, density-annotated TOC, version badges), 5-scale fractal self-similarity, and multi-pass audit/fix cycles. This is CD-006 level.

**Why it exists:** Crown jewel content -- anchor pages that readers encounter first, content that demonstrates the design system itself, philosophical deep-dive content with multi-axis compound tension. Flagship pages are the "show, don't tell" proof that the design system achieves its stated goal.

**Evidence:** CD-006 scored 39/40, deployed 44/44 technique families, operated under 78 constraints, and used 634 custom properties. It was built through the full accumulated vocabulary of 4 pipeline stages (DD, OD, AD, CD), each contributing novel CSS techniques. No other page in the design system looks like it.

**Concrete profile:**
- 16-18 mechanisms (nearly all)
- ~1,000-1,500 CSS lines, ~1,800-2,500 HTML lines
- 5+ responsive breakpoints including print styles
- 3-5 axis patterns deployed sequentially with typed transitions between them
- Composite components (3-zone), editorial flourishes
- 5-scale fractal (navigation, page, section, component, character)
- Crown jewel divergences permitted (documented overrides of convention values)
- Build time: 240-400 minutes (3-5 hours with multi-pass audit)
- Reproducibility: 30-50%

**Quality band:** 18-20/20. Very high creative variance. Every Flagship page is unique.

**The diminishing returns reality:** Flagship has the LOWEST marginal ROI. For double the Ceiling build time, the richness gain is modest in absolute terms. The difference between 14 mechanisms and 18 mechanisms is perceptually smaller than the difference between 5 mechanisms and 10. Reserve Flagship for content that DEMANDS full synthesis.

---

## 3. HOW WE MIGHT BUILD EACH TIER

### Floor Pipeline

```
STEP 1: READ prohibitions.md + tokens.css (always-load, 527 lines) → 5 min
STEP 2: READ components.css + semantic-rules.md → 5 min
STEP 3: CLASSIFY content sections (heading structure) → 5 min
STEP 4: APPLY tokens to markup → 10-15 min
STEP 5: ADD callout components where content has tips/warnings/info → 5 min
STEP 6: ADD code blocks where content has code → 5 min
STEP 7: VERIFY soul compliance → 5 min
Total: 30-45 min
```

No skill modifications needed. Floor uses NO tension-composition skill. Standard component library + tokens.

### Middle Pipeline

```
STEP 1: READ prohibitions.md + tokens.css (always-load) → 5 min
STEP 2: READ components.css + semantic-rules.md → 5 min
STEP 3: CLASSIFY content sections (NARRATIVE/REFERENCE/CODE/DATA/MIXED) → 5 min
STEP 4: SELECT density pattern via decision tree:
        - Sequential steps → CRESCENDO
        - Lookup-oriented → F-PATTERN
        - Many equal items → BENTO GRID
        - Story arc → PULSE
        → 5 min
STEP 5: BUILD HTML with Floor components PLUS:
        - Grid/flex layouts where content has comparisons, multi-column data
        - 3-color zone backgrounds (cream/white/breathing) on alternating sections
        - Spacing variation (64px between chapters, 32px within, 16px dense)
        - Dark header with 3px primary border
        - Accessibility triple (skip-link, focus-visible, reduced-motion)
        → 30-40 min
STEP 6: VERIFY soul + guardrails (940px container, 32px padding, CPL 45-80) → 10 min
STEP 7: RUN Mode 2 perceptual audit (PA-01-05 at 2 viewports + rhythm check) → 10 min
Total: 70-100 min
```

**Skill modification needed:** Add tier-based pipeline selection to tension-composition SKILL.md. Middle tier SKIPS Phases 1-3 entirely (no multi-axis questioning, no tension derivation, no metaphor collapse), goes directly to Phase 4.0 with content-type pattern instead of metaphor.

### Ceiling Pipeline

Full tension-composition pipeline:

```
PHASE 0: Always-load + content assessment → 10 min
PHASE 1: Multi-axis questioning (Core Four + Extended Five) → 15-20 min
PHASE 2: Tension derivation (Side A/Side B, Addition Test, richness scoring) → 15-20 min
PHASE 3: Metaphor collapse (structural overlap → search → score candidates) → 20-30 min
PHASE 3.5: Commitment gate (lock metaphor, verify divergence) → 5 min
PHASE 4: Mechanism extraction from catalog + metaphor-to-CSS translation → 30-60 min
PHASE 5: Verification (48 PA questions, guardrails, soul) → 15-20 min
FIX CYCLE: 1-2 iterations of audit/fix → 30-45 min
Total: 150-220 min
```

**Skill modifications needed (4 blocking items):**
1. Replace "sample 2-4 mechanisms" with per-category minimum (1+ per each of 5 property categories: Spatial, Temporal, Material, Behavioral, Relational) + justification for 3 considered-but-rejected mechanisms
2. Promote fractal consistency from CHECK to GATE with scale coverage table (4 scales for Ceiling)
3. Add NON-NEGOTIABLE container width: "Container width 940-960px is NON-NEGOTIABLE. Express narrowing through INTERNAL spacing, not external width reduction."
4. Strengthen Phase 3.5 to check domain FAMILY, not just exact match

### Flagship Pipeline

Same as Ceiling PLUS:

```
PHASE A: Full Ceiling pipeline → 150-220 min
PHASE B: Full Mode 3/4 perceptual audit (48 questions, 2-3 viewports) → 30-60 min
PHASE C: Fix cycle (max 2 iterations) → 30-60 min
PHASE D: Final verification (programmatic checks + Cold Look) → 15-30 min
PHASE E: Documentation (metaphor record, perceptual cost log, maintenance notes) → 15-30 min
Total: 240-400 min
```

Additional Flagship requirements: mandatory case study comparison (Phase 5), multi-pattern composition (3-5 axis patterns), composite component invention, editorial flourishes, 5-scale fractal, print styles.

---

## 4. THE GOAL OF TESTING EACH TIER

### Floor Experiment: "Does Assembly Produce Adequate Baseline?"

**What to measure:** Token compliance rate, soul violation count, component coverage, build time, visual scanability at 1440px and 768px.

**Success looks like:** Zero soul violations, 95%+ token compliance, all content represented by appropriate components, build under 45 minutes. The page should feel "correctly formatted" -- clean, professional, scannable.

**Failure looks like:** Soul violations (the always-load protocol wasn't followed), component gaps (content that doesn't map to any library component), visual monotony that makes the reader disengage.

**What this resolves:** Whether Track 1 assembly is reliable enough for production use on simple content. Phase D Track 1 FAILED because the builder skipped always-load. If it fails again with always-load enforced, the protocol needs structural enforcement (blocking gate, not behavioral instruction).

### Middle Experiment: THE MOST IMPORTANT TEST

**What to measure:** Technique count, mechanism deployment depth, spatial variety, density rhythm presence, engagement threshold ("does this feel designed?"), comparison against Variant B and showcase pages.

**Success looks like:** The page has visible spatial variety (grid/flex layouts breaking block stacking), density rhythm (sections have different padding creating intentional pacing), zone differentiation (sections have different background colors), and a dark header that immediately signals "designed." A person viewing the page for the first time thinks "this was designed" not "this was formatted." If the page achieves the "place" quality without metaphor -- if the reader WANTS to spend time there -- then Middle is sufficient for 40-50% of content, and the entire Ceiling ambition shifts to a smaller scope.

**Failure looks like:** The page has correct tokens and components but still feels like "a blog post with better fonts." The spatial variety is too subtle -- the grid adds structure but doesn't create the sense of atmosphere. The density rhythm is technically present but perceptually invisible. If this happens, the "place" quality genuinely requires metaphor, and Ceiling becomes the target for more content.

**What this resolves:** The single most important untested hypothesis: "Can spatial richness without metaphor achieve the engagement threshold?" This one experiment answers more questions than all prior research combined. Specifically:
- Does Middle justify being the universal floor?
- Is the 3-4x richness multiplier real or fabricated?
- Does the content-type-to-pattern mapping (CRESCENDO/F-PATTERN/BENTO/PULSE) work in practice?
- How much build time does Middle actually require?

### Ceiling Experiment: "Does Metaphor Add Enough to Justify the Cost?"

**What to measure:** Metaphor genuineness (not forced), isomorphism score (4+ structural mappings), multi-channel coherence (3+ channels shifting together at transitions), technique density (12-15 mechanisms), and COMPARISON to Middle tier on the same content.

**Success looks like:** The Ceiling page has an atmosphere the Middle page lacks. The metaphor generates CSS values that create a spatial experience -- the reader navigates through the metaphor, not just through sections. The isomorphism score is 4+ (the metaphor genuinely maps to the content's structure). Build time stays under 220 minutes including audit/fix.

**Failure looks like:** The metaphor is forced (isomorphism < 4). The builder struggled to find a natural metaphor domain, and the result feels decorative rather than structural. Or: the Ceiling page IS better, but the improvement over Middle doesn't justify doubling the build time. The reader barely notices the difference.

**What this resolves:** Whether the Middle-to-Ceiling jump is worth the cost for content with moderate tension. If the jump is marginal, reserve Ceiling for content with deep, obvious tension. If the jump is dramatic, more content warrants Ceiling treatment.

### Flagship Experiment: "Is the Crown Jewel Worth It?"

**What to measure:** All Ceiling metrics PLUS multi-pattern composition quality, editorial flourish impact, fractal compliance at 5 scales, and maintenance cost (how long to update content on this page).

**Success looks like:** A page that rivals DD-006, OD-004, or CD-006. Someone sees it and says "I want to spend time here." The multi-pattern composition creates a sense of journey through the page. The editorial flourishes (drop caps, density-annotated TOC) create the sense of professional craft.

**Failure looks like:** Over-engineering. The page took 5+ hours, deploys 18 mechanisms, and a blind evaluator rates it only marginally above the Ceiling version. Or: the richness IS visible but creates maintenance coupling (content changes require CSS changes) that makes the page impractical for evolving content.

**What this resolves:** Where the diminishing returns curve peaks. Is the peak at 12 mechanisms (Ceiling) or 16+ (Flagship)? Do readers even perceive the difference between Ceiling and Flagship? Is the maintenance cost acceptable?

---

## 5. IMPLICATIONS OF DIFFERENT TIER LEVELS

### Reproducibility Gradient

| Tier | Reproducibility | What Converges | What Diverges |
|------|----------------|----------------|---------------|
| Floor | 95%+ | Everything | Minor spacing, callout placement |
| Middle | 80-90% | Structure, zone backgrounds, header/footer | Pattern selection, rhythm intensity |
| Ceiling | 50-70% | Token values, soul compliance, guardrails | Metaphor domain, CSS values, spatial topology |
| Flagship | 30-50% | Quality band (18-20/20 via audit) | Everything creative |

Two agents building Floor produce near-identical pages. Two agents building Flagship produce pages that look nothing alike. This is BY DESIGN -- anti-gravity mechanisms (R1, R5, R6) enforce divergence at Ceiling and above.

### Rigidity Functions Per Tier

Rigidity serves a DIFFERENT function at each tier:

- **Floor:** Rigidity IS the output. Token compliance is the entire value. More rigidity = more consistent output.
- **Middle:** Rigidity GUIDES choice. The mechanism catalog + compositional rules provide a menu. The agent chooses 8-10 items from the menu. Rules help, not hinder.
- **Ceiling:** Rigidity CONSTRAINS process. Pipeline gates prevent pattern-matching (R1, R5, R6). Process rigidity INCREASES creative variance. The guardrails (940px, 32px, 40%, CPL) constrain the metaphor's CSS expression, preventing the worst violations.
- **Flagship:** Rigidity CATCHES failure. Multi-pass audit/fix cycles catch perceptual violations that the creative process inevitably produces. Without audit rigidity, Flagship pages would oscillate between brilliant and broken.

Removing rigidity at ANY tier collapses that tier's function. The question is never "should we have less rigidity?" but "is each tier's rigidity serving its intended function?"

### Scale and Timeline

The tier distribution has direct implications for the production timeline:

| Scenario | Floor | Middle | Ceiling | Flagship | Est. Hours (75 pages) |
|----------|-------|--------|---------|----------|----------------------|
| Current (all Variant B level) | 0% | 100% | 0% | 0% | ~108 hrs |
| Recommended distribution | 10% | 45% | 35% | 10% | ~205 hrs |
| Maximum richness | 0% | 20% | 60% | 20% | ~310 hrs |

The recommended distribution roughly doubles the Variant B-level timeline. The maximum richness scenario roughly triples it. These are rough estimates. Actual times depend on content complexity, builder fluency development, and how many Ceiling pages require audit/fix cycles.

### Quality Variance

**The variance paradox:** The highest-quality tier (Flagship) has the TIGHTEST quality variance because multi-pass auditing catches failures. But it also has the HIGHEST creative variance because the full pipeline encourages unique metaphor derivation. The lowest tier (Floor) also has tight quality variance because the component library constrains choices. But it has zero creative variance.

The PROBLEMATIC zone is Ceiling -- moderate quality variance AND high creative variance AND no mandatory multi-pass audit. This is where the most failures will occur at scale. The reproducibility investigator estimated ~25% of Ceiling pages will need post-build fixes. Either add mandatory Mode 2 audit to all Ceiling pages (adding ~5 min) or budget for a 25% fix rate.

---

## 6. VOCABULARY VS. PROHIBITION: The Concrete CSS Comparison

### The Heart of the System

The most important finding from both research investigations: the showcase pages were MORE rigid than the pipeline, and their richness came FROM that rigidity. But specifically, the richness came from VOCABULARY-type rigidity (new expressive tools), not PROHIBITION-type rigidity (things you cannot do).

**Prohibitions** say "don't":
- `border-radius: 0` (NEVER rounded)
- `box-shadow: none` (NEVER shadow)
- No gradients, no pure black/white
- Max 2 callouts per viewport

There are 22 prohibitions (8 absolute, 12 conditional, 2 meta). They define identity through REFUSAL.

**Vocabulary** says "here's how":
- Border-weight gradient ENCODES hierarchy (4px/3px/2px/1px)
- 2-zone DNA STRUCTURES components (sparse label + dense body)
- Solid offset CREATES depth (::after pseudo-element, the ONLY depth technique since box-shadow is prohibited)
- Spacing compression MAPS confidence (80px = certain, 16px = speculative)
- Zone backgrounds DIFFERENTIATE sections (cream/white/breathing/dark)

There are 18 mechanisms. They define capability through TOOLS.

The archaeological evidence: at CD stage, vocabulary-type rigidity outnumbered constraint-type rigidity roughly 4:1. The system became MORE expressive by becoming MORE rigid -- because the new constraints were words to compose with, not fences to stay within.

### Concrete CSS: Variant B's Lab Zone vs. OD-004's Stratum Padding

**Variant B (lab metaphor) -- vocabulary at naming level:**
```css
/* Variant B uses vocabulary for CLASS NAMES but not for CSS VALUE GENERATION */
.lab-zone { padding: var(--space-16); } /* Generic padding from token */
.lab-zone--clean-room { background: #FFFFFF; padding: var(--space-12); }
.lab-zone--dense { padding: var(--space-8); }
```
The metaphor names the zones ("lab-zone", "clean-room") but does NOT generate CSS values. The padding amounts come from the token scale, not from the metaphor's logic.

**OD-004 (geological metaphor) -- vocabulary at CSS-generation level:**
```css
/* OD-004 uses vocabulary to GENERATE CSS VALUES from metaphor logic */
--stratum-established-padding: var(--space-10); /* 40px -- confident = spacious */
--stratum-probable-padding: var(--space-8);     /* 32px -- less certain = denser */
--stratum-speculative-padding: var(--space-5);  /* 20px -- speculative = compressed */
--stratum-open-padding: var(--space-4);         /* 16px -- open questions = tightest */
```
The metaphor GENERATES the values. Geological strata compress under pressure (confidence). Deeper strata have less space. The CSS IS the metaphor.

This is the richness gap in one comparison: naming-level identity (Variant B) vs. CSS-generation-level identity (OD-004). Both use the same token scale. Both comply with the same soul constraints. The difference is whether the metaphor tells the builder WHAT TO NAME things or WHAT VALUES TO USE.

### How Mechanisms ARE Vocabulary

Each mechanism in the catalog is simultaneously a RIGIDITY (must be used in a specific way) and a VOCABULARY ITEM (enables specific expression):

| Mechanism | The Rigidity | The Vocabulary |
|-----------|-------------|---------------|
| Border-weight gradient | 4px/3px/1px system, NOT arbitrary widths | ENCODES hierarchy -- thick = important |
| 2-zone DNA | Label zone + body zone, NOT other structures | STRUCTURES any callout/card/component |
| Solid offset depth | ::after at 4px offset, NOT box-shadow | CREATES depth within soul constraints |
| Spacing compression | Padding decreases with importance/depth | MAPS abstract concepts to physical space |
| Zone backgrounds | 3-4 colors only, NOT arbitrary gradients | DIFFERENTIATES sections without decoration |

Learning more mechanisms = knowing more words = being MORE expressive, not more constrained. A builder who knows 5 mechanisms writes simple sentences. A builder who knows 15 composes paragraphs with varied rhythm, multiple voices, and layered meaning.

### Vocabulary-vs-Library Resolution

**grammar/ = vocabulary to USE.** The mechanism catalog contains 18 transferable techniques. They were discovered in showcase pages but are metaphor-agnostic. Using them is fluency.

**case-studies/ = library to NOT COPY.** The 9 case studies show how the vocabulary was used in specific metaphors. They are literature, not templates.

**The Name Test:** Remove the metaphor name. Does the description still make sense?
- "Border-weight encodes hierarchy" -- YES, mechanism
- "4px bedrock border" -- NO, metaphor-specific implementation

**The Transfer Test:** Does the technique produce DIFFERENT CSS values with a different metaphor?
- "Spacing compression maps confidence" + geological metaphor = 80px topsoil / 16px bedrock
- "Spacing compression maps confidence" + lab metaphor = 64px safety briefing / 24px dense data
- SAME mechanism, DIFFERENT values = transferable vocabulary

The anti-gravity mechanism R2 enforces this separation architecturally: mechanisms live in grammar/, metaphor implementations live in case-studies/. If it's in grammar/, it's vocabulary. If it's in case-studies/, it's library.

### The Untested Practical Dimension: Mechanism Density and Perceived Novelty

The theoretical resolution above (Name Test, Transfer Test, grammar/ vs case-studies/) is sound. But it has NEVER been tested in practice. The open question is concrete:

**When a builder deploys 8-10 mechanisms from grammar/ to build a page with a COMPLETELY NEW metaphor, does the result feel:**
- **(a) Novel** -- a genuinely new composition using familiar tools (like a new sentence in a known language), OR
- **(b) Derivative** -- a page that "looks like the showcase pages" because it uses the same CSS techniques, regardless of the new metaphor?

**Evidence suggesting (a):** The Name Test and Transfer Test prove mechanisms produce DIFFERENT CSS values with different metaphors. "Spacing compression" + geological metaphor = 80px/16px. "Spacing compression" + laboratory metaphor = 64px/24px. Same mechanism, different output.

**Evidence suggesting (b):** Variant B scored 4/5 novelty precisely because it deployed only 5/44 techniques. If it had deployed 15, the page might LOOK more like the showcase pages even with a different metaphor -- because the CSS structural patterns (dark header, zone backgrounds, density rhythm, 2-zone DNA) create a recognizable visual signature. At high mechanism counts, the mechanism vocabulary might dominate the metaphor vocabulary in determining how the page FEELS.

**Why this matters for tier experiments:** The Middle-tier experiment (8-10 mechanisms, NO metaphor) is the FIRST practical test of this question. If the Middle-tier page feels derivative (too similar to showcase pages despite different content), the implication is that anti-gravity needs to protect not just metaphor divergence but also MECHANISM COMBINATION divergence -- a much harder problem. If it feels novel, grammar/ is confirmed as safe vocabulary that builders should use freely, and the tier model is validated.

This question shapes every proceeding conversation about tier building. It determines whether the tier model works as designed or whether mechanism density itself creates a convergence problem that anti-gravity does not address.

---

## 7. METHODOLOGY -- HOW TO APPROACH EXPERIMENTS

### Build First With Current Skill

The content-adversarial audit (06-content-adversarial.md) made a critical point: the proposed skill modifications should NOT be implemented BEFORE the first experiment. The correct sequence is:

1. **Build a Middle-tier page with the CURRENT unmodified skill.** This determines whether the tier model works, whether Middle achieves the engagement threshold, and whether the current pipeline produces acceptable Middle-tier output. Tell the builder agent in its prompt: "Skip Phases 1-3, apply CRESCENDO pattern, deploy 8-10 mechanisms from the catalog." No skill file changes needed -- just prompt-level instructions.

2. **Evaluate the result.** Does it achieve the engagement threshold? If yes, the skill modifications are confirmed. If the page is excellent without modifications, some proposed changes may be unnecessary.

3. **Then implement the modifications that the experiment validated.** Apply per-category minimum, fractal gate, container width enforcement, Phase 3.5 strengthening.

4. **Build a Ceiling-tier page with the modified skill.** Compare against the Middle page on the same content.

### The 4 Blocking Items (For When Modifications Are Applied)

These are the specific changes that all research converged on. They should be applied AFTER the first Middle experiment, not before:

**1. Replace "sample 2-4 mechanisms" (SKILL.md ~line 787)**

Current: "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms."

Replace with: "For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational), identify AT LEAST ONE mechanism. For each mechanism you deploy, document WHY it serves THIS metaphor. For at least 3 mechanisms you considered but did NOT deploy, document WHY they don't fit."

Why: Ensures breadth (all 5 categories covered) without mandating a specific count. Natural landing: 5-10 mechanisms. Framed as toolkit engagement, not compliance target.

**2. Promote fractal consistency to GATE (SKILL.md ~line 1071)**

Current: 10-line check at Step 4.7 saying "verify at multiple scales."

Replace with: Full gate equivalent to Phase 3.5 (~60 lines) requiring a scale coverage table:

| Scale | Metaphor Expression | CSS Evidence |
|-------|--------------------|----|
| Navigation | [how TOC reflects pattern] | [specific CSS] |
| Page | [section sequence] | [specific CSS] |
| Section | [components within section] | [specific CSS] |
| Component | [content within component] | [specific CSS] |

Scope calibration: Floor = exempt, Middle = 2 scales, Ceiling = 4 scales, Flagship = 5 scales.

**3. Add NON-NEGOTIABLE container width rule (SKILL.md Phase 4.0)**

Add: "Container width 940-960px is NON-NEGOTIABLE. Express narrowing through INTERNAL spacing, not external width reduction. No metaphor may override this. A geological 'core sample' uses 960px width with padding variation to suggest narrowing, NOT a narrower container."

Why: 4/5 Phase D pages violated this. THE primary failure mode.

**4. Strengthen Phase 3.5 to check domain FAMILY (SKILL.md ~line 665)**

Current: checks if metaphor "appears in case-studies/_INDEX.md."

Replace with: checks if metaphor shares a DOMAIN FAMILY with any entry. "Same family" = same scientific discipline, same professional domain, same cultural domain. "Would a layperson describe both metaphors using the same one-word category?" If same family: MANDATORY divergence justification with 3/5 different dimensions required. If <3/5: REGENERATION IS MANDATORY (no justification escape route).

### What to Measure

For ANY tier experiment, measure these dimensions:

**Programmatic (automated):**
- Soul compliance: border-radius: 0, box-shadow: none, palette correctness
- Guardrails: container width >= 940px, padding >= 32px, CPL 45-80
- Token compliance: % of CSS values from tokens.css
- Mechanism count: how many of 18 deployed

**Perceptual (judgment-based):**
- PA-01 through PA-05 at 1440px and 768px (the mandatory five)
- Engagement threshold question: "Does this feel designed or formatted?"
- Squint test: visual coherence and rhythm
- Comparison test: side-by-side with Variant B and/or showcase pages

**Structural (analysis-based):**
- CSS lines count
- Custom properties count
- Grid/flex layout count
- Pseudo-element count
- Responsive breakpoint count

### The Iterative Discovery Loop

The research established that richness is ACCUMULATED, not designed in a single pass. The testing methodology should reflect this:

```
BUILD → MEASURE → COMPARE → IDENTIFY GAPS → MODIFY → REBUILD → MEASURE AGAIN
```

Each tier experiment is not just a build test -- it produces FINDINGS that feed the next experiment:

- Middle experiment reveals which mechanisms feel natural and which feel forced → informs Ceiling mechanism mandate
- Ceiling experiment reveals whether metaphor adds enough value → informs the Middle/Ceiling boundary
- Flagship experiment reveals the diminishing returns peak → informs whether Flagship is worth offering

---

## 8. OPEN QUESTIONS THIS RESOLVES

### Questions Answered by Building Middle

| Question | What Building Middle Tells Us |
|----------|------------------------------|
| Does Middle achieve the "place" feeling? | If YES: 40-50% of pages can skip metaphor derivation. If NO: more content needs Ceiling. |
| Is the 3-4x richness multiplier real? | Building provides the first actual data point on the richness gain of grid + zones + rhythm. |
| Does content-type-to-pattern mapping work? | CRESCENDO for tutorial, F-PATTERN for reference -- does the decision tree produce good results? |
| How long does Middle actually take? | Research estimates 70-100 min. Actual build time calibrates all subsequent planning. |
| Can Middle be the universal floor? | If the page is "designed" enough, Floor becomes rare (only API refs and changelogs). |

### Questions Answered by Building Ceiling

| Question | What Building Ceiling Tells Us |
|----------|-------------------------------|
| Is the metaphor-to-CSS gap real? | Same content at Middle vs Ceiling -- does the metaphor make a visible difference? |
| Does per-category minimum work? | With the modified skill, does 1-per-category produce natural 8-12 mechanism deployment? |
| Does the fractal gate add value? | With the gate, does the builder's page have multi-scale coherence that Middle lacks? |
| What does 50-70% reproducibility feel like? | Two Ceiling builds on the same content -- how different are they? Is the variance acceptable? |
| Where is the forced-metaphor boundary? | For content with moderate tension, does the pipeline produce genuine or forced metaphors? |

### Questions Answered by Building Same Content at 3 Tiers

| Question | What the Multi-Tier Comparison Tells Us |
|----------|----------------------------------------|
| Where is the diminishing returns peak? | Middle vs Ceiling vs Flagship on same content -- which jump matters most to a reader? |
| Is the ROI gradient real? | Floor-to-Middle theoretically has highest ROI. Does practice confirm? |
| What does the reader notice? | Show all 3 versions to a human. Which do they prefer? Is the Flagship difference visible? |

### Questions That REMAIN After Building

Even after all tier experiments, these stay open:

- **Reader validation:** All measurement is producer-side. Nobody has asked a reader. Even building pages doesn't answer whether readers COMPREHEND better with richer presentation.
- **Collection-level experience:** Individual page richness is different from collection-level browsing. Needs 10+ pages to test.
- **Builder fluency trajectory:** Does page 15 from the same pipeline perform better than page 1? Needs 20+ sequential builds.
- **Maintenance cost:** How expensive is it to update content on a Ceiling page vs. Middle? Needs 3+ existing pages and attempted modifications.
- **Ambient rigidity:** Is the volume of ~168 constraints degrading creative output? Needs controlled comparison with tiered constraint presentation.

---

## SUMMARY: THE DECISION FRAMEWORK

For any content to be processed through the KortAI pipeline:

**Step 1: Content Classification**
- Is this <200 words, API reference, or config table? → **Floor**
- Is this a tutorial, guide, overview, or comparison? → **Middle**
- Does this content have genuine structural tension (Addition Test = NO)? → **Ceiling**
- Is this anchor content, design system demonstration, or deep philosophical piece? → **Flagship**

**Step 2: Build at Classified Tier**
Use the pipeline blueprint for that tier (Section 3 above).

**Step 3: Evaluate Against Success Criteria**
Use the measurement framework (Section 7 above).

**Step 4: Graceful Degradation If Needed**
- Flagship failing? → Degrade to Ceiling (remove editorial flourishes, reduce to 4-scale fractal)
- Ceiling metaphor forced? → Degrade to Middle (drop metaphor, keep grid/zones/rhythm)
- Middle pattern mismatch? → Degrade to Floor (drop grid/zones, keep tokens/components)
- Floor never degrades → it IS the floor

**The principle:** Richness is fluency with many rigid words. The pipeline's job is to teach fluency, not reduce vocabulary. Each tier represents a fluency level matched to content needs. Build the simplest tier that serves the reader. Escalate only when the content demands it and the evidence supports it.

---

**END TIER METHODOLOGY**

*Sources: HANDOFF.md, rigidity-research/02-modification-analysis.md, rigidity-research/03-tier-specifications.md, rigidity-research/04-reproducibility-analysis.md, rigidity-research/06-unified-synthesis.md, richness-research/05-unified-synthesis.md, continuity-docs/06-content-adversarial.md, continuity-docs/07-open-threads-and-gaps.md, continuity-docs/08-cross-cutting-synthesis.md, compositional-core/grammar/mechanism-catalog.md, phase-d-execution/builds/variant-b-weak-perm.html*
