# TC Skill Corpus Bias Audit

**Agent:** bias-auditor
**Task:** #2 -- Find where the TC skill bakes in corpus-specific conclusions as universal truths
**Date:** 2026-03-01
**Method:** Line-by-line examination of SKILL.md (842 lines) against source corpus (case-studies, mechanism-catalog, research streams R1-R5, scale-research, tension-test layouts, exploration files)

---

## Rating Scale

- **LOW BIAS** -- Legitimate identity constraint or well-grounded process principle. Appropriate to present as settled.
- **MEDIUM BIAS** -- Useful heuristic but presented more definitively than the evidence supports. Should be flagged as "observed pattern" rather than "law."
- **HIGH BIAS** -- Specific research conclusion from limited experiments (often N=1 to N=6) presented as universal truth. Channels creativity toward discovered patterns rather than supporting open-ended derivation.

---

## Finding 1: KortAI Personality Spectrum (Lines 200-211)

**The content:**
```
WARM <-------------> AUSTERE      [75% austere]
SOFT <-------------> ANGULAR      [95% angular]
PLAYFUL <----------> SERIOUS      [85% serious]
ORGANIC <----------> GEOMETRIC    [100% geometric]
BUSY <-------------> SPARSE       [70% sparse]
FLEXIBLE <---------> RIGID        [80% rigid]
CASUAL <-----------> FORMAL       [80% formal]
COLORFUL <---------> RESTRAINED   [90% restrained]
```

**Bias Rating: LOW BIAS (with one MEDIUM exception)**

**Analysis:** This IS the design system's identity -- it describes KortAI, not universal web design. The spectrum format with percentages is an effective communication device for tension derivation. The values are ANCHORED in real design constraints: `border-radius: 0` genuinely means 100% geometric, `box-shadow: none` genuinely means flat, the warm cream palette genuinely means warm-but-austere.

**The one MEDIUM exception:** The PRECISE percentages (75%, 95%, 85%, etc.) imply measurement precision that doesn't exist. These are subjective readings of a design system, not measured values. "95% angular" suggests someone computed this, when it's actually a designer's heuristic positioning. The percentages CHANNEL perception -- an agent reading "75% austere" will orient differently than one reading "predominantly austere." The false precision makes these feel more authoritative and less questionable than they should be.

**Recommendation:** Keep the spectrum. Consider softening the percentages to qualitative bands (e.g., "strongly angular" instead of "95% angular"), or adding a one-line note: "These positions are heuristic anchors, not measurements."

---

## Finding 2: Tension Landscape Quick Reference (Lines 283-296)

**The content:**
```
STRONGEST tensions against KortAI:
- Warmth/comfort vs. austerity (proven)
- Reconciliation vs. verdict-drive (highest potential)
- Playfulness vs. formality (unexplored, high potential)
- Mystery/intrigue vs. explicit labeling (unexplored)
- Spatial understanding vs. linear scroll (unexplored)
- Building confidence vs. institutional intimidation (unexplored)
- Community/dialogue vs. editorial monologue (unexplored)

ZERO tension (assembly territory):
- Hierarchy/structure -- system already IS this
- Clarity/precision -- system already IS this
- Step-by-step guidance -- Task Progression component exists
- Choosing between options -- Decision Matrix component exists
```

**Bias Rating: HIGH BIAS**

**Analysis:** This is one of the most channeling sections in the skill. The problems:

1. **"(proven)" on warmth/comfort vs. austerity.** Proven by what? The corpus contains 3 content pieces (boris, gastown, playbook) tested against 5 metaphors each = 15 tension-test layouts. That's an N=15 from 3 content sources, all processed by the same pipeline. "Proven" implies universal validation.

2. **"highest potential" on reconciliation.** Based on what evidence? This is a judgment that positions reconciliation as the top creative opportunity for ALL future content. It pre-ranks tensions before the content is even read.

3. **The STRONGEST list pre-primes the search.** An agent reading this list before analyzing content will be DRAWN to these tension categories. This is exactly the kind of pre-creative exposure the skill's own anti-gravity rules (R1) warn against. The skill prohibits reading case studies before Phase 3, but hands the agent a pre-ranked tension menu at the very start.

4. **The ZERO tension list closes doors.** Declaring that hierarchy/structure produces zero tension is a conclusion from corpus experiments, not a universal law. A piece of content about DISMANTLING hierarchies would create genuine tension against a hierarchical system. The "already IS this" framing treats the design system as having inherent properties when the skill's own critical principle (lines 6-23) says properties are CONSTRUCTED, not discovered.

5. **The ZERO list maps to specific components.** "Task Progression component exists" and "Decision Matrix component exists" -- these are ASSEMBLY shortcuts that route agents away from composition before they've even read the content. This directly contradicts the "ALWAYS FLAGSHIP" mandate in the pipeline.

**Provenance check:** The "warmth/comfort vs. austerity (proven)" claim traces to the tension-test experiments (3 contents x 5 metaphors). The geological metaphor family (warmth vs. austerity) appeared in multiple top picks (Boris: Geological Core, Gas Town: Building Floorplan). But "proven" from N=3 content pieces, all prose-dominant, all tech-adjacent, is an extrapolation.

**Recommendation:** Replace with a process note. Instead of pre-ranked tensions, instruct the agent to DERIVE the tension landscape from Side A (content needs) vs Side B (system personality) each time. If keeping the list, relabel as "Tensions observed in past experiments (N=15, prose-dominant content)" and remove "proven," "highest potential," and "ZERO" categorizations.

---

## Finding 3: Domain Search Territory (Line 372)

**The content:**
```
Compatible domains to scan: Geological/Sedimentary, Architectural/Structural,
Typographic/Editorial, Cartographic/Territorial, Industrial/Mechanical,
Scientific/Laboratory, Legal/Contractual, Archival/Catalogic,
Military/Strategic, Astronomical/Surveying.
```

**Bias Rating: HIGH BIAS**

**Analysis:** The skill says "This is a search menu, not a lookup table. Selection is creative; the menu ensures viable domains aren't overlooked." But the reality is that PROVIDING a list of 10 named domains fundamentally constrains the search. LLMs are completion machines -- when given a list to "scan," they will scan THAT LIST, not the infinite space of possible domains.

**What's excluded:** The list is heavily weighted toward domains that produce ANGULAR/FLAT/STRUCTURED metaphors because it was derived from a design system that IS angular/flat/structured. Missing:
- **Performance/Theater** -- stages, acts, choreography (angular stages exist)
- **Culinary/Gastronomic** -- plating, courses, reduction (structured cuisine exists)
- **Mathematical/Geometric** -- proofs, axioms, theorems (inherently angular)
- **Linguistic/Grammatical** -- syntax trees, declensions, parsing (structured)
- **Economic/Market** -- exchanges, ledgers, commodities (structured)
- **Archival/Museum** -- curation, exhibition, chronology (partially covered by Archival/Catalogic but different spirit)
- **Forensic/Investigative** -- evidence, analysis, reconstruction (structured)
- **Agricultural/Terraced** -- terraces, irrigation, seasons (angular variants exist)
- **Clockwork/Horological** -- gears, movements, escapements (geometric, mechanical)

The 10 listed domains are the ones that HAVE BEEN TRIED in the corpus (geological = OD-004, Boris; architectural = Gas Town; editorial = OD-006; cartographic = partially in AD explorations). The list encodes past success, not future possibility.

**Self-contradiction:** The skill's own critical principle says "You are CONSTRUCTING a composition, not DISCOVERING one" (line 8). But providing a domain lookup table promotes DISCOVERY (scanning a list) over CONSTRUCTION (deriving from tension).

**Recommendation:** Remove the fixed list. Replace with the PROCESS for generating domain candidates from structural properties. Or keep the list but frame as "Domains that have been explored to date (not exhaustive)" and explicitly state "domains NOT on this list may be equally or more viable."

---

## Finding 4: Incompatible Domain Families (Lines 374-382)

**The content:**
```
These CONFLICT with angular/flat/sharp constraints:
- Organic/Biological: Requires curves, growth patterns
- Liquid/Fluid: Requires flowing shapes, gradients
- Atmospheric/Weather: Requires opacity, blur, softness
- Textile/Fabric: Requires texture, draping
- Musical: Requires curves (sound waves, notation)
```

**Bias Rating: MEDIUM BIAS**

**Analysis:** The claim is that these domains are incompatible with angular/flat/sharp constraints. Let's examine each:

1. **Organic/Biological -- "Requires curves, growth patterns."** Does it? Crystalline biology is angular. Cell walls under microscope are geometric. Cross-sections of trees produce concentric RINGS (implementable as nested boxes with borders). Bone cross-sections are angular. The claim assumes "organic" means "curved," which is ONE reading of organic.

2. **Liquid/Fluid -- "Requires flowing shapes, gradients."** Ice is liquid that became angular. Frozen rivers have angular fracture patterns. The prohibition on gradients is real, but "liquid" does not universally require them. A liquid in a rectangular container is rectangular.

3. **Atmospheric/Weather -- "Requires opacity, blur, softness."** Weather radar displays are angular/gridded. Isobar maps are linear. Lightning is angular. The claim conflates the EXPERIENCE of weather with its REPRESENTATION.

4. **Textile/Fabric -- "Requires texture, draping."** Woven fabric has a GRID structure. Weaving IS a grid operation. Thread count is quantized. The claim confuses draped fabric with woven fabric.

5. **Musical -- "Requires curves."** Musical notation IS angular (staff lines are horizontal, notes are discrete positions). Musical STRUCTURE is deeply mathematical (time signatures, key signatures, intervals). The claim confuses the SOUND of music with the NOTATION of music.

The deeper issue: declaring 5 entire domain families "incompatible" closes a huge creative territory based on surface-level reasoning about physical properties. The skill's own Step 3.1 instructs the agent to "Transform emotional needs into geometric/topological abstractions." The same transformation could make ANY of these "incompatible" domains viable -- woven textile IS a grid, ice IS angular, notation IS structured.

**Recommendation:** Soften from "CONFLICT" to "typically challenging -- require creative structural reinterpretation." Add a note: "Each of these domains has angular/flat/sharp sub-domains that MAY be viable. The incompatibility is at the surface reading, not necessarily the structural level."

---

## Finding 5: 6 Binary Rejection Checks (Lines 401-410)

**The content:**
```
R1: Does the metaphor use the content's own domain vocabulary? (zero interpretive distance)
R2: Does the metaphor require visible text labels to communicate? (announced, not structural)
R3: Does the metaphor's physical shape force container width below 940px? (container violation)
R4: Does the metaphor conceptualize ALL transitions as empty space? (dead zone epidemic)
R5: Does the metaphor produce 6+ identical repeated elements with no variation? (grid monotony)
R6: Does the metaphor require soul violations to express? (soul is non-negotiable)
```

**Bias Rating: MIXED (R1-R3 LOW, R4-R5 MEDIUM, R6 LOW)**

**R1 (zero interpretive distance):** LOW BIAS. This is a legitimate compositional principle. If the metaphor uses the content's vocabulary, it IS a label, not a bridge. Well-grounded in metaphor theory (Lakoff & Johnson).

**R2 (announced vs structural):** LOW BIAS. This is a legitimate quality gate. A metaphor that needs labels to communicate isn't structural. Traces directly to the Flagship experiment failure where metaphors were "announced" rather than structural (9/9 PA auditors flagged this).

**R3 (container width):** LOW BIAS. This is a real constraint. 940-960px container width was confirmed as the #1 failure mode across experiments.

**R4 (dead zone epidemic):** MEDIUM BIAS. The "dead zone epidemic" framing is over-fitted to a specific pipeline failure -- the Flagship experiment's 6 whitespace voids (210-276px each). Not ALL empty transitions are dead zones. Deliberate breathing space IS a legitimate compositional tool. The skill's own D-06 disposition says "Negative Space as Shape -- whitespace is not emptiness." R4 contradicts D-06 by making empty space automatically suspect.

**R5 (grid monotony):** MEDIUM BIAS. The "6+" threshold is arbitrary. Why not 5? Why not 8? This appears to derive from the "filing cabinet" anti-pattern observed in specific builds, not from any measured monotony threshold. Some content genuinely requires 6+ identical elements (e.g., a 12-month calendar, a periodic table excerpt). The check should be context-dependent, not binary.

**R6 (soul violations):** LOW BIAS. This is a hard identity constraint and legitimately binary.

**Recommendation:** Keep R1, R2, R3, R6 as-is. Soften R4 to distinguish between "transitions that are ONLY empty space" vs "transitions that include deliberate breathing space." Soften R5's threshold or add context sensitivity ("unless the content structure requires uniform repetition").

---

## Finding 6: Density Patterns -- CRESCENDO/F-PATTERN/BENTO/PULSE (Lines 574-583)

**The content:**
```
| Pattern | Density Flow | Best When Metaphor Implies |
| CRESCENDO | Sparse -> dense -> resolved | Progressive deepening (geological, archaeological) |
| F-PATTERN | Dense left spine, sparse right content | Hierarchical navigation (editorial, reference) |
| BENTO | Grid-based modular density variation | Parallel independent items (catalog, dashboard) |
| PULSE | Dense-sparse-dense alternation | Rhythmic investigation (Q&A, dialogue, dialectic) |
```

**Bias Rating: HIGH BIAS**

**Analysis:** Exactly 4 patterns. Why 4? The provenance:

- **CRESCENDO** traces directly to the geological metaphor family (OD-004-confidence, the bedrock-to-surface progression). The parenthetical "(geological, archaeological)" confirms this.
- **F-PATTERN** traces to R4's axis research (R4 contained 192 findings about F/Z/Gutenberg patterns) and editorial explorations (OD-006-creative).
- **BENTO** traces to DD-003-islands (the "archipelago structure" case study). "Catalog, dashboard" reflects the specific content types tested.
- **PULSE** traces to OD-001-conversational (the Q&A dialogue case study).

Each pattern maps 1:1 to a specific case study or research stream. This IS the corpus, compressed into a 4-row table and presented as the complete taxonomy of density patterns. The skill doesn't say "these are 4 patterns we've explored" -- it says "Density Patterns" as if this is the complete set.

**What's missing:**
- **SPIRAL** -- density radiating from center outward (or inward)
- **TERRACED** -- stepped plateaus of sustained density (not gradual like CRESCENDO)
- **ENVELOPE** -- low-high-low-high-LOW (musical envelope shape, attack-sustain-decay)
- **FRACTAL** -- density pattern repeats at multiple scales (this was actually the KEY finding from DD-006 but doesn't appear as a named density pattern)
- **INVERTED** -- dense opening that gradually opens up (the anti-CRESCENDO, useful for "known to unknown" content)
- **PLATEAU** -- sustained dense section with brief breathing moments (academic paper structure)

The 4-pattern taxonomy channels builders into 4 pre-discovered rhythms. A builder encountering content that doesn't fit CRESCENDO, F-PATTERN, BENTO, or PULSE will either force-fit or feel they've done something wrong.

**Recommendation:** Rename to "4 Observed Density Patterns" and add: "This is not exhaustive. Content may suggest density flows that don't match these patterns. Derive from the metaphor's physical properties, not from this list."

---

## Finding 7: Richness Formula -- DENSITY x RESTRAINT x CONFIDENCE (Lines 522-529)

**The content:**
```
RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE
```

**Bias Rating: HIGH BIAS**

**Analysis:** This formula traces directly to the scale exploration research (specifically `06-adversarial-anti-scale.md`, self-rated 7/10 confidence, from the Ceiling Experiment era). The memory file `scale-research.md` records:

```
Richness = (semantic density per decision) x (restraint ratio) x (spatial confidence)
```

This was proposed by ONE adversarial agent as an alternative to the scale model. It was rated "Medium-High" confidence by the synthesis, with the explicit caveat "n=1 problem" and that "DD-006 is a genuine counterexample." It was a HYPOTHESIS that has now been promoted to the GOVERNING EVALUATION of Phase 4, stated without qualification.

**The problems:**

1. **Unvalidated formula.** It was never tested. The adversarial agent proposed it, the synthesis noted it was interesting, and it was installed as the governing equation.

2. **Multiplicative claim is strong.** "MULTIPLICATIVE. Zero in any factor = zero richness" is a mathematical assertion about creative quality. There's no evidence that these three factors are multiplicative rather than additive, or that zero in one factor truly zeroes the whole.

3. **Restraint as multiplication factor.** "Deliberately withhold some mechanisms" -- this advice derives from the observation that DD-006 and CD-006 (the crown jewels) showed restraint. But those were also the most expertly built pages. The restraint may be CORRELATED with skill, not CAUSAL.

4. **Spatial Confidence definition.** "Multiple grid topologies. The 3-tier border system in active use. Multiple font-size values." -- This is a checklist of specific corpus observations, not a definition of confidence. A page with 2 grid topologies and 2 font-size values could be supremely confident.

**Recommendation:** Reframe as "One useful lens for evaluating richness" rather than "THE governing evaluation." Add provenance: "This model was proposed during scale exploration research (N=6 agents, 1 adversarial). It has not been empirically validated across multiple builds." Consider presenting 2-3 competing richness models and letting the agent choose.

---

## Finding 8: Phase 1 Axis Interaction Effects (Lines 151-158)

**The content:**
```
Some axis PAIRS produce richer tension than either alone:
- RECONCILE + IDENTIFY: "Change what you believe AND who you are" -- double transformation
- NAVIGATE + COMPARE: "Move freely AND hold things in parallel" -- maximum structural complexity
- DISCOVER + UNDERSTAND: Oppositional structural demands (withhold vs reveal) create intra-content tension
- FEEL + EVALUATE: Emotional engagement vs critical distance
```

**Bias Rating: MEDIUM BIAS**

**Analysis:** These 4 axis pairs are presented as known interaction effects. The phrasing "produce richer tension" implies empirical observation. But:

1. **Source:** These likely derive from the AD explorations (AD-001 through AD-006, R4's 192 findings). The AD stage tested axis combinations but primarily in the context of a SINGLE design system (KortAI) with SPECIFIC content types.

2. **The interaction effects are PLAUSIBLE** from a compositional theory standpoint. RECONCILE + IDENTIFY creating "double transformation" makes semantic sense. But the claim that these SPECIFIC 4 pairs are the ones that produce richer tension is an empirical claim based on limited experiments.

3. **What's missing:** Why not TRUST + RECONCILE (challenge the authority AND the beliefs)? Why not ORIENT + DISCOVER (know where you are AND find something unexpected)? Why not NAVIGATE + FEEL (move through AND be affected)?

4. **The saving grace:** The skill says "Note these pairs when BOTH are high-yield" -- it's advisory, not prescriptive. This is less channeling than the domain list or density patterns.

**Recommendation:** Add "These are illustrative, not exhaustive. Any axis pair with opposing structural demands may produce rich tension. Derive interaction effects from YOUR content's specific axis yields."

---

## Finding 9: The Opposition Principle (Lines 138-148)

**The content:**
```
The axes that produce the RICHEST tension are those whose demands OPPOSE the system's personality:

- RECONCILE (challenge vs assert) -- richest, highest potential
- NAVIGATE (choice vs hierarchy) -- complex topology vs decisive ranking
- EVALUATE (equanimity vs opinion) -- judgment requires holding equal, system is opinionated
- DISCOVER (withholding vs directness) -- genuinely oppositional structural demands
- FEEL (warmth vs edges) -- classic, always available

Axes whose demands ALIGN with the system produce cosmetic tension: TRUST (both want authority),
DO (both want action), ORIENT (both want positioning). Avoid building primary tension from aligned axes.
```

**Bias Rating: MEDIUM BIAS**

**Analysis:** The Opposition Principle ITSELF is a legitimate and useful heuristic. If the axis demands align with the system personality, there's less creative tension to work with -- this makes semantic sense.

But the SPECIFIC rankings are problematic:

1. **"richest, highest potential" for RECONCILE.** This pre-ranks a specific axis as THE best creative territory before any content is read. It will pull agents toward RECONCILE framing regardless of content.

2. **The ranked list.** Presenting the axes in a clear hierarchy (RECONCILE > NAVIGATE > EVALUATE > DISCOVER > FEEL) creates a priority order that agents will follow. This is exactly the "pre-creative exposure" the skill warns against.

3. **"cosmetic" label for aligned axes.** Declaring TRUST, DO, and ORIENT as "cosmetic" closes significant creative territory. A piece of content about BETRAYED trust against a system that demands authority creates genuine tension -- the content needs to earn trust back while the system radiates unearned authority. "Both want authority" misses that DIFFERENT KINDS of authority can be in tension.

4. **"Avoid building primary tension from aligned axes."** This is a directive that channels creativity away from aligned-axis content. Some of the most interesting compositional work could come from SUBTLE tension in aligned-axis territory, where the opposition is second-order rather than first-order.

**Provenance:** This ranking likely derives from the tension-test experiments (3 contents x 5 metaphors) where the most successful compositions (geological, building floorplan) mapped to FEEL and RECONCILE territory. The "proven" warmth vs. austerity tension IS a FEEL-axis tension. But extrapolating from N=15 to "RECONCILE is richest" is over-fitting.

**Recommendation:** Keep the Opposition Principle as a useful heuristic. Remove the rankings and "richest/highest potential" labels. Reframe the aligned-axis section: "Aligned axes produce LESS OBVIOUS tension, not zero tension. Second-order opposition (different types of the same value) can be equally rich."

---

## Finding 10: The Substitution Test (Line 267)

**The content:**
```
Apply the SUBSTITUTION test -- Replace your content with a DIFFERENT topic entirely.
Does the same metaphor still work? If YES, coupling is generic -- the metaphor is not
derived from THIS content's tension but from a universal template.
```

**Bias Rating: LOW BIAS**

**Analysis:** This is a legitimate creativity diagnostic. If the metaphor works for any content, it's not derived from this content's specific tension. This is a well-grounded test for genuine content-form coupling.

**One caveat:** Some metaphor families (geological, editorial) might be broad enough to work for many content types without being "generic." The test could be sharpened: "Does the same metaphor work for OPPOSITE content?" (e.g., if geological works for both a technical tutorial and an emotional memoir, it might be genuinely versatile rather than generically applicable).

**Recommendation:** Keep as-is. Consider adding the "opposite content" sharpening.

---

## Finding 11: Cultural Consideration (Lines 444-449)

**The content:**
```
- Prefer physics-grounded over culture-grounded (crystal formation > origami)
- Prefer universal experience over regional (growth > harvest festival)
- For specific audiences, leverage culturally resonant metaphors
```

**Bias Rating: LOW BIAS**

**Analysis:** This is a reasonable default for a system intended for broad audiences. The physics-over-culture preference reduces the risk of metaphors that don't travel across cultures. The "specific audiences" exception provides an escape valve.

**Minor concern:** "crystal formation > origami" implicitly preferences Western/scientific framing over East Asian craft traditions. But for a design system, this is a pragmatic choice, not a cultural judgment.

**Recommendation:** Keep as-is.

---

## Finding 12: The "Because" Test (Line 266)

**The content:**
```
Apply the BECAUSE test -- "The reader needs X BECAUSE [specific content property]."
If you cannot complete this sentence with a specific content property, the need is manufactured.
```

**Bias Rating: LOW BIAS**

**Analysis:** This is an excellent content-coupling diagnostic. It forces the agent to ground every reader need in actual content properties rather than generic assumptions. This is one of the best anti-bias mechanisms in the skill.

**Recommendation:** Keep as-is. This is a model for how other sections should be written.

---

## Finding 13: Step 3.5E Creative Check (Lines 499-503)

**The content:**
```
Pause. Are you EXCITED about this metaphor? Can you see the finished page in your mind?
Does this metaphor make you want to BUILD, not just comply?

If the metaphor feels like compliance rather than creation, revisit the tension derivation.
```

**Bias Rating: LOW BIAS**

**Analysis:** This is a legitimate creative quality gate. Enthusiasm as a signal for good metaphor selection is a reasonable heuristic, even for an LLM. It encourages the agent to evaluate creative energy rather than just structural compliance.

**Recommendation:** Keep as-is.

---

## Cross-Corpus Comparison: What's in the Catalog vs What's in TC

The mechanism-catalog.md contains 18 mechanisms organized in 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). The TC skill references the catalog at Phase 4 (line 546-558).

**Key observation:** The mechanism catalog's SELECTION LOGIC section (lines 21-46) describes two modes:
- **Middle:** Content feature -> mechanism capability (direct mapping)
- **Ceiling:** Metaphor -> shared semantic dimension -> multiple mechanisms encoding simultaneously

The TC skill's Phase 4 operates in CEILING mode (metaphor-driven selection). But the 4 density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) are effectively MIDDLE-mode shortcuts -- they route content type to pattern directly, bypassing metaphor derivation. This is an internal inconsistency.

The catalog itself is relatively low-bias -- it presents CSS techniques as transferable tools. The BIAS enters at the TC skill level, where the skill pre-selects WHICH mechanisms are likely relevant based on corpus-derived patterns.

---

## Summary Table

| # | Section | Lines | Rating | Core Issue |
|---|---------|-------|--------|------------|
| 1 | Personality Spectrum | 200-211 | LOW (one MEDIUM) | Precise percentages imply false measurement |
| 2 | Tension Landscape | 283-296 | HIGH | Pre-ranked tensions channel before content is read; "proven" from N=15 |
| 3 | Domain Search Territory | 372 | HIGH | 10-domain lookup table channels search; encodes past success as complete set |
| 4 | Incompatible Domain Families | 374-382 | MEDIUM | Surface-level incompatibility ignores angular sub-domains |
| 5 | Binary Rejection Checks | 401-410 | LOW/MEDIUM | R1-R3-R6 solid; R4-R5 over-fitted to specific failures |
| 6 | Density Patterns | 574-583 | HIGH | 4 corpus-derived patterns presented as complete taxonomy |
| 7 | Richness Formula | 522-529 | HIGH | Unvalidated hypothesis (N=1 adversarial agent) as governing equation |
| 8 | Axis Interaction Effects | 151-158 | MEDIUM | Plausible but presented as known effects from limited experiments |
| 9 | Opposition Principle | 138-148 | MEDIUM | Principle sound, but specific axis rankings channel creativity |
| 10 | Substitution Test | 267 | LOW | Legitimate creativity diagnostic |
| 11 | Cultural Consideration | 444-449 | LOW | Reasonable default with escape valve |
| 12 | Because Test | 266 | LOW | Excellent anti-bias mechanism |
| 13 | Creative Check | 499-503 | LOW | Legitimate creative quality gate |

---

## Aggregate Assessment

**4 HIGH BIAS findings:** Tension Landscape, Domain Search Territory, Density Patterns, Richness Formula
**4 MEDIUM BIAS findings:** Incompatible Domains, Rejection Checks R4-R5, Axis Interaction Effects, Opposition Principle rankings
**5 LOW BIAS findings:** Personality Spectrum, Rejection Checks R1-R3-R6, Substitution Test, Cultural Consideration, Because Test, Creative Check

### The Pattern

The HIGH BIAS findings share a common structure: **CORPUS CONCLUSIONS PROMOTED TO UNIVERSAL LAWS.**

- Tension Landscape: 15 tension-test results -> pre-ranked tension menu
- Domain Search Territory: ~9 case studies -> 10-domain lookup table
- Density Patterns: 4 case studies -> 4-pattern taxonomy
- Richness Formula: 1 adversarial agent's hypothesis -> governing evaluation

In each case, LIMITED experimental results from a SPECIFIC design system with SPECIFIC content types were installed as universal process guidance. The skill's own critical principle ("You are CONSTRUCTING, not DISCOVERING") is undermined by sections that present constructed conclusions as discovered truths.

### The Channeling Mechanism

The bias doesn't operate by PROHIBITING alternatives. It operates by PRESENTING a curated set as if it were exhaustive. An agent reading "4 density patterns" doesn't think "I wonder if there are others." It thinks "which of these 4 fits?" This is the most subtle and effective form of creative channeling -- it FEELS like open-ended exploration because you're choosing from a menu, but the menu was pre-curated from corpus results.

### The Self-Contradiction

The skill has excellent anti-bias infrastructure (Critical Principle, Library Prohibition, Substitution Test, Because Test, Creative Check). But these mechanisms protect against pattern-matching from CASE STUDIES while the skill itself embeds corpus patterns directly into the process instructions. The agent is prohibited from reading case studies but is handed their conclusions as "quick reference" tables.

### What Would a Less-Biased Skill Look Like?

1. **Replace lookup tables with generation processes.** Instead of "10 compatible domains," teach the PROCESS of generating domain candidates from structural overlap.
2. **Present taxonomies as illustrative, not exhaustive.** "Here are 4 observed patterns. Yours may not match any of them."
3. **Separate IDENTITY (Side B) from RESEARCH CONCLUSIONS.** The personality spectrum IS identity. The tension landscape is NOT -- it's research.
4. **Add provenance to every empirical claim.** "Warmth vs. austerity was the most common tension across 15 test layouts (3 content sources, 2026-02-14)" is honest. "Warmth vs. austerity (proven)" is not.
5. **Present competing models where they exist.** The richness formula has competitors (scale model, fractal model, anti-scale model). Present all three and let the agent choose.
