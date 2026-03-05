# Context Richness Audit: Clarification Depth Preservation

**Date:** 2026-02-15
**Author:** context-richness-guardian (clarification-enrichment team)
**Purpose:** Verify that deep nuance from 8 conversation clarifications is NOT lost when condensed into overarching documents (HANDOFF.md, master execution prompt, master agenda). Then evaluate whether the proposed enrichments (18-clarification-mapping.md) and checklist (18-middle-tier-checklist.md) preserve or further compress that nuance.
**Method:** Side-by-side comparison of FULL clarification vs. how it appears in target documents. Assessment: FULLY PRESERVED / PARTIALLY PRESERVED / NOT PRESERVED.

---

## AUDIT METHODOLOGY

For each of the 8 clarifications from `17-conversation-clarifications.md`:

1. Read the FULL clarification (source of truth)
2. Search for corresponding content in HANDOFF.md, 14-master-execution-prompt.md, 13-master-agenda.md
3. Quote BOTH versions side by side
4. Assess preservation status with specific nuance-loss identification
5. Pay special attention to: concrete examples, causal chains, alternatives, edge cases, provenance

---

## CLARIFICATION 1: Mechanism Counts Are Descriptive, Not Prescriptive

### Source (17-conversation-clarifications.md)

Key nuances in the FULL clarification:
- Counts were **BACKWARD-ENGINEERED** from existing pages, not invented as targets
- **Four specific page examples** with exact counts: Variant B (5/2 categories), OD-004 (~12-15/all 5), CD-006 (~16-18/all 5), DD-006 (~16+)
- **Four time-to-count mappings**: 30-45 min -> ~5, 70-100 min -> ~8-10, 150-220 min -> ~12-15, 240-400 min -> ~16-18
- **Goodhart's Law risk**: builder might "pad to hit 8" or "stop at 8 when content wants 11"
- **M1 as solution**: per-category minimum ensures BREADTH, count emerges from breadth
- **Documentation impact directive**: "Every place the tier table appears should include provenance"

### HANDOFF.md (lines 96-110)

**What appears:**
> | **Mechanisms** | 5 of 18 | 8-10 of 18 | 12-15 of 18 | 16-18 of 18 |

The tier table presents counts with NO provenance. No backward-engineering explanation. No page examples. No "proxy not target" caveat. No Goodhart's Law warning.

Line 110 says:
> **The key insight: the Floor-to-Middle transition has the HIGHEST ROI.**

This is the WHAT without the WHY. The Floor-to-Middle ROI claim has no grounding in specific page comparisons.

### 14-master-execution-prompt.md (lines 64-88)

**What appears (lines 72-78):**
> **CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**
> The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.
> The per-category minimum (M1) works because it ensures vocabulary BREADTH (all 5 property families represented), not a specific COUNT. Natural landing zones emerge from breadth, not from number-targeting.

This is **good** -- but it is MISSING the concrete provenance:
- NO specific page examples (Variant B = 5 across 2 categories, OD-004 = ~12-15, etc.)
- NO time-to-count mapping (30-45 min -> ~5, etc.)
- The "proxy not target" principle is stated abstractly but not GROUNDED in evidence

Lines 84-88 add:
> **VALIDATION STATUS:** These tier definitions come from backward-engineering showcase pages (DD-006, OD-004, CD-006) and Phase D variant profiles.

This mentions backward-engineering but does NOT give the specific counts per page.

### 13-master-agenda.md (lines 308-314)

**What appears (Phase 2.3.2):**
> - [ ] **Count:**
>   - How many mechanisms deployed (target: 8-10)
>   - Category coverage (MUST be all 5 categories per M1)

NOTE: The agenda calls it "target: 8-10" -- this directly CONTRADICTS the clarification's "proxy not target" principle. This is exactly the failure mode the clarification warns against.

### Assessment: PARTIALLY PRESERVED

**What IS preserved:**
- The "proxy not target" concept (in master execution prompt)
- The per-category minimum as solution (in master execution prompt)
- The backward-engineering mention (in master execution prompt's validation status)

**What is LOST:**
1. **Concrete page-to-count provenance** -- the four specific examples (Variant B = 5/2 categories, OD-004 = ~12-15/5 categories, CD-006 = ~16-18/5 categories, DD-006 = ~16+) appear NOWHERE in HANDOFF or agenda
2. **Time-to-count correlation** -- the four time brackets (30-45 min -> ~5, etc.) that explain WHY these counts emerge are absent
3. **Goodhart's Law risk** -- the specific failure mode ("pad to hit 8, or stop at 8 when content wants 11") is absent from HANDOFF
4. **Contradictory "target: 8-10"** in master agenda -- this is the exact anti-pattern the clarification identifies
5. **HANDOFF tier table has ZERO provenance** -- raw numbers with no context

**Severity: MEDIUM-HIGH.** The master execution prompt captures the principle but loses the evidence. HANDOFF has no protection at all. The master agenda actively contradicts the clarification.

---

## CLARIFICATION 2: "Sample 2-4" Is the PROBLEM, Not the Design

### Source (17-conversation-clarifications.md)

Key nuances:
- "Sample 2-4" is the **BROKEN state** that M1 exists to fix
- Identified by **ALL 11 research agents** as single most limiting specification
- M1 was assigned to **Wave 2, not Wave 1** -- the broken instruction is STILL in the skill post-Wave 1
- **Wave 1 only included** M2, M3, M5, M8 -- NOT M1
- **Why M1 was in Wave 2**: grouped with M6/M7 as "vocabulary expansion"
- **Why this is arguably a sequencing mistake**: you can't test 8-10 mechanisms if skill says 2-4
- **M6/M7 genuinely need experiment feedback** but M1 is categorically different (foundational enabler)
- The experiment without M1 would "confirm what 11 agents already concluded"

### HANDOFF.md (lines 135-141)

**What appears:**
> **The single most damaging instruction:** "Sample 2-4 mechanisms" in `~/.claude/skills/tension-composition/SKILL.md` (line ~787). Exists in two inconsistent forms ("2-4" and "3-5"). Caps technique density, prevents engagement with the full mechanism catalog. All 11 research agents independently identified this as the highest-leverage change.
> **Status: NO modifications have been applied yet.**

**What is MISSING:**
- No explanation that M1 was grouped in Wave 2
- No explanation of WHY it's still in the skill
- No M1 sequencing rationale or tradeoffs
- No mention that Wave 1 was already executed (M2, M3, M5, M8) but M1 was deliberately excluded
- No "circular dependency" explanation (can't test 8-10 if skill says 2-4)
- No distinction between M1 (foundational enabler) vs M6/M7 (genuinely need experiment feedback)

### 14-master-execution-prompt.md (lines 263-278)

**What appears:**
> **3 waves:**
> - Wave 1 (Core Enabling): M2, M3, M5, M8 -- lowest risk, enables Middle-tier
> - Wave 2 (Vocabulary Expansion): M1, M6, M7 -- informed by Middle experiment results
> - Wave 3 (Audit Integration): M4, M9, M10, M11 -- audit-only, doesn't affect building

The wave assignment is stated but with NO rationale for WHY M1 is in Wave 2 instead of Wave 1. The "informed by Middle experiment results" justification is the OFFICIAL rationale but the clarification reveals this creates a circular dependency.

Lines 276-278:
> **Wave:** 2 (after Middle experiment validates approach)
> **Priority:** HIGHEST LEVERAGE CHANGE (addresses 50%+ of richness gap)

Calling it "HIGHEST LEVERAGE CHANGE" while putting it in Wave 2 is the tension the clarification identifies, but the execution prompt doesn't acknowledge the tension.

### 13-master-agenda.md (lines 205-219)

**What appears:**
> #### 1.1.4 M1: Replace "Sample 2-4" with Per-Category Minimum
> [checklist items for applying the modification]

A bare task entry with NO sequencing rationale, NO circular dependency discussion, NO three-approach analysis.

### Assessment: NOT PRESERVED

**What IS preserved:**
- "Sample 2-4" identified as most damaging instruction (HANDOFF)
- ALL 11 agents identified it (HANDOFF)
- Wave assignment (execution prompt)
- HIGHEST LEVERAGE label (execution prompt)

**What is LOST:**
1. **M1 sequencing rationale** -- WHY it was grouped with M6/M7 as "vocabulary expansion" appears NOWHERE
2. **Circular dependency** -- the critical insight that you can't test 8-10 if skill says 2-4 is absent from ALL three documents
3. **Three approaches discussed** -- (a) apply M1 before experiment, (b) manual override, (c) two builds -- appear NOWHERE
4. **"Isolated effect" reasoning** -- the concrete attribution reasoning NOWHERE
5. **"Arguably a mistake" consensus** -- NOWHERE
6. **Wave 1 execution state** -- that Wave 1 was ALREADY done (M2, M3, M5, M8) but M1 excluded is not made explicit in HANDOFF
7. **M1 vs M6/M7 categorical difference** -- the foundational enabler vs experiment-dependent distinction is absent

**Severity: HIGH.** This is arguably the most consequential lost nuance. Without the circular dependency analysis and three-approach discussion, a new instance executing the master agenda would run the Middle experiment with the "sample 2-4" instruction still active, producing Floor-tier output and concluding that Middle doesn't work -- confirming what 11 agents already identified rather than testing the actual hypothesis.

---

## CLARIFICATION 3: "Creative Derivation vs Lookup" -- Same Catalog, Different Selection Logic

### Source (17-conversation-clarifications.md)

Key nuances:
- **Both tiers use the EXACT SAME 18 mechanisms** from the exact same catalog
- The tools are identical; what differs is HOW you decide which tools to pick and WHY
- **Middle selection logic**: content feature -> mechanism capability (direct mapping)
  - "This has code blocks -> I need mechanism #17"
  - Each mechanism serves a DIFFERENT content need INDEPENDENTLY
- **Ceiling selection logic**: metaphor -> shared semantic dimension -> multiple mechanisms encoding that dimension simultaneously
  - "Geological strata have pressure gradients -> spacing compression (#4)"
  - KEY REALIZATION: spacing compression + border-weight + zone backgrounds all encode the SAME thing (geological depth). They REINFORCE each other.
- **Concrete output difference**: Middle = each mechanism solves different problem independently. Ceiling = multiple mechanisms encode "depth" together ("when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter, all saying 'deeper'")
- **Multi-channel coherence** is what creates "atmosphere" that Middle lacks

### HANDOFF.md (lines 107-112)

**What appears:**
> | **Metaphor?** | No | No | Yes (full pipeline) | Yes (multi-pass audit) |
> **Middle tier adds (over Floor):** grid/flex layouts, zone backgrounds, density rhythm patterns, dark header, accessibility triple, pseudo-elements. All lookup-based decisions, not creative ones.

This is a YES/NO for metaphor presence and a feature list. It does NOT explain the selection logic difference.

### 14-master-execution-prompt.md (lines 79-82)

**What appears:**
> **The tier distinction is NOT just mechanism count -- it's deployment level:**
> - **Middle:** Individual mechanism deployment (each serves content independently)
> - **Ceiling:** Mechanism COMBINATION deployment (multiple mechanisms encode the SAME semantic)
> - **Flagship:** Multi-pattern COMPOSITION (3+ patterns with typed transitions)

This captures the ABSTRACT distinction ("individual" vs "combination" vs "multi-pattern") but LOSES:
- The concrete Middle examples ("This has code blocks -> #17")
- The concrete Ceiling example ("Geological strata have pressure gradients -> spacing compression")
- The KEY REALIZATION about multi-channel coherence
- The vivid output difference ("borders get heavier AND backgrounds get darker AND spacing gets tighter")
- The explanation that the CATALOG doesn't change -- only SELECTION AND COMBINATION logic

### 13-master-agenda.md

No mention of selection logic distinction found.

### Assessment: PARTIALLY PRESERVED

**What IS preserved:**
- The abstract Individual / Combination / Multi-pattern framework (execution prompt)

**What is LOST:**
1. **Concrete Middle selection examples** -- the 3 "This has X -> I need mechanism #Y" mappings are absent
2. **Concrete Ceiling derivation example** -- the geological strata walkthrough is absent
3. **The KEY REALIZATION** -- that spacing compression + border-weight + zone backgrounds all encode the SAME thing -- is absent
4. **The vivid output comparison** -- "when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter" appears NOWHERE
5. **Explicit statement that catalog is identical** -- "both tiers use EXACT SAME 18 mechanisms" is not stated in any overarching doc
6. **Multi-channel coherence as atmosphere creator** -- this causal chain is absent

**Severity: MEDIUM.** The abstract framework survives, but a builder reading only the overarching docs would have no concrete understanding of HOW Middle selection differs from Ceiling selection.

---

## CLARIFICATION 4: Density Patterns Are the Skeleton, Mechanisms Are the Flesh

### Source (17-conversation-clarifications.md)

Key nuances:
- 4 density patterns (CRESCENDO, F-PATTERN, BENTO, PULSE) are **SPATIAL ORGANIZATION STRATEGIES** (skeleton = how density flows)
- 18 mechanisms are **INDIVIDUAL CSS TECHNIQUES** (flesh = deployed WITHIN the pattern)
- Concrete example: "Within a CRESCENDO page, you deploy mechanism #1 for hierarchy, #7 for section differentiation, #5 for rhythm, etc."
- **The pattern is NOT hardcoded to CRESCENDO** -- M5 added content-type-to-pattern mapping
- Content-type mappings: Tutorial -> CRESCENDO, Reference -> F-PATTERN, Overview -> BENTO, Narrative -> PULSE
- **For Middle tier**: 4-option pattern table is intentionally a fixed lookup. Middle removes creative judgment.

### HANDOFF.md (lines 114-118)

**What appears:**
> **Density rhythm patterns (used at Middle tier and above):**
> - **CRESCENDO:** Information density builds from sparse to dense...
> - **F-PATTERN:** Dense-sparse alternation following natural eye scanning...
> - **BENTO:** Grid-based modular sections of varying density...
> - **PULSE:** Rhythmic dense-sparse-dense alternation...

Each pattern is described, but there is NO skeleton/flesh distinction. Patterns and mechanisms are presented as separate sections but without an EXPLICIT statement that they are different concept types. A reader could easily conflate "CRESCENDO" with a mechanism.

### 14-master-execution-prompt.md

No explicit skeleton/flesh distinction found in the first 400 lines. The tier routing section (M5) mentions patterns as content-type mappings but doesn't clarify the conceptual relationship between patterns and mechanisms.

### 13-master-agenda.md (line 284)

**What appears:**
> - [ ] **Pipeline:** Skip Phases 1-3 per M5 routing, go directly to Phase 4 with CRESCENDO pattern

This HARDCODES CRESCENDO -- the exact anti-pattern the clarification warns about. The agenda assumes tutorial content, but the clarification says pattern should be selected BASED ON actual content type, not assumed.

### Assessment: PARTIALLY PRESERVED

**What IS preserved:**
- The 4 pattern descriptions (HANDOFF)
- Content-type-to-pattern mapping concept (execution prompt M5 section)

**What is LOST:**
1. **The skeleton/flesh distinction** -- NOWHERE do any overarching docs state that patterns and mechanisms are fundamentally different concept types
2. **The concrete example** -- "Within a CRESCENDO page, you deploy mechanism #1 for hierarchy, #7 for differentiation" is absent
3. **"Pattern is NOT hardcoded to CRESCENDO" warning** -- absent from HANDOFF, and the master agenda VIOLATES this by hardcoding CRESCENDO
4. **Middle tier = fixed lookup** -- the explicit statement that Middle removes creative judgment from pattern selection is absent from HANDOFF
5. **Agenda hardcodes CRESCENDO** -- line 284 says "go directly to Phase 4 with CRESCENDO pattern" without content-type analysis

**Severity: MEDIUM.** The missing skeleton/flesh distinction creates a conceptual gap, but the content-type mapping exists in M5. The hardcoded CRESCENDO in the agenda is a concrete error that could propagate.

---

## CLARIFICATION 5: Scales and Mechanisms Are Different Dimensions

### Source (17-conversation-clarifications.md)

Key nuances:
- **Mechanisms = breadth of vocabulary** (how many distinct CSS techniques)
- **Scales = depth of coherence** (how many zoom levels the pattern appears at)
- **5 named scales with concrete descriptions**: Navigation (bird's eye), Page (the scroll), Section (one screen), Component (one element), Character (inline)
- **"Fractal coherence"** = same design direction repeats as you zoom in -- with concrete example (CRESCENDO at Page scale = sections progress sparse-to-dense, then same progression inside each section at Section scale, then inside components at Component scale)
- **Tier-to-scale mapping**: Floor = exempt, Middle = 2 (Page + Component), Ceiling = 4, Flagship = 5
- **Why higher tiers need more scales**: "Squint (page scale) -> rhythm. Read a section (section scale) -> structure. Look at one callout (component scale) -> same logic."

### HANDOFF.md

No mention of scales found. The fractal gate is not discussed in HANDOFF.md.

### 14-master-execution-prompt.md (lines 385-400)

**What appears (in M2 fractal gate replacement text):**
> **Tier-calibrated requirements:**
> - **Floor:** EXEMPT (component assembly, no custom pattern)
> - **Middle:** 2 scales minimum (Page + Component)
> - **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
> - **Flagship:** 5 scales required (all scales)

This captures the tier-to-scale mapping but does NOT include:
- The definition of what scales ARE (breadth vs depth distinction)
- The concrete descriptions of each scale (bird's eye, the scroll, one screen, one element, inline)
- The "fractal coherence" explanation with concrete examples
- The "Squint -> rhythm, read section -> structure" walkthrough of WHY more scales matter

### 13-master-agenda.md

No scale definitions or scale-mechanism distinction found.

### Assessment: NOT PRESERVED

**What IS preserved:**
- Tier-to-scale mapping (execution prompt M2)
- Scale names listed (execution prompt M2 table)
- Scale coverage table as deliverable requirement (execution prompt M2)

**What is LOST:**
1. **Scales-as-zoom-levels definition** -- the 5 named scales with concrete descriptions (bird's eye, the scroll, one screen, one element, inline) appear NOWHERE in overarching docs
2. **Mechanisms = breadth, Scales = depth distinction** -- this dimensional difference is never stated
3. **Fractal coherence walkthrough** -- the concrete CRESCENDO example (sparse-to-dense at Page, then same at Section, then same at Component) is absent
4. **WHY more scales matter** -- "Squint -> rhythm, read section -> structure, look at callout -> same logic" is absent
5. **HANDOFF has ZERO scale content** -- this entire conceptual dimension is absent from the primary continuity document

**Severity: MEDIUM-HIGH.** The execution prompt captures procedural requirements (fill out scale table) without conceptual understanding (what scales ARE and why they matter). A builder could mechanically fill the table without understanding the principle. HANDOFF's complete omission means new instances have no scale awareness at all.

---

## CLARIFICATION 6: The M1 Sequencing Decision and Its Implications

### Source (17-conversation-clarifications.md)

Key nuances:
- **Original rationale**: M1 grouped with M6/M7 as "vocabulary expansion" -- validate parameters through experiment first
- **The problem**: Circular dependency -- experiment tests whether 8-10 across 5 categories works, but without M1 builder sees "sample 2-4" and deploys 4
- **Three approaches**: (a) apply M1 before experiment, (b) manual override in builder prompt, (c) two builds comparison
- **"Isolated effect" concretely defined**: M1+M2+M3+M5 and good result = can't attribute to any single change. M2+M3+M5 mediocre then add M1 and improves = M1 was critical. BUT 11 agents already say M1 is critical = isolated test confirms known conclusion at cost of wasted build.
- **Consensus**: M1 sequencing was arguably a mistake. M1 categorically different from M6/M7. Experiment needs M1 to test Middle hypothesis.

### HANDOFF.md

No M1 sequencing rationale found. Lines 135-141 identify the problem ("sample 2-4") but do not discuss wave assignment or circular dependency.

### 14-master-execution-prompt.md (lines 263-278)

**What appears:**
> Wave 2 (Vocabulary Expansion): M1, M6, M7 -- informed by Middle experiment results
> **Wave:** 2 (after Middle experiment validates approach)
> **Priority:** HIGHEST LEVERAGE CHANGE

The wave assignment is stated. The tension between "HIGHEST LEVERAGE" and "Wave 2" is visible but NOT acknowledged. No circular dependency discussion. No three-approach analysis.

### 13-master-agenda.md (lines 205-219)

Bare task entry with no sequencing rationale.

### Assessment: NOT PRESERVED

**What IS preserved:**
- The wave assignment fact (execution prompt)
- "HIGHEST LEVERAGE CHANGE" label (execution prompt)

**What is LOST:**
1. **The entire circular dependency analysis** -- NOWHERE in any overarching doc
2. **The three approaches** -- (a) apply M1 before, (b) manual override, (c) two builds -- NOWHERE
3. **"Isolated effect" definition** -- the concrete attribution reasoning NOWHERE
4. **"Arguably a mistake" consensus** -- NOWHERE
5. **The categorical difference between M1 and M6/M7** -- NOWHERE
6. **The decision's implication for experiment validity** -- NOWHERE

**Severity: CRITICAL.** This is the single most important lost clarification. Without the circular dependency analysis and three-approach discussion, a new instance executing the master agenda would run the Middle experiment with the "sample 2-4" instruction still active, producing results that confirm what 11 agents already identified rather than testing the actual hypothesis. The ENTIRE Middle experiment's validity depends on how M1 timing is handled, and this decision is completely absent from all overarching documents.

---

## CLARIFICATION 7: Content Selection for Middle Experiment

### Source (17-conversation-clarifications.md)

Key nuances:
- **800-1,200 words** (substantive enough to need structure)
- **Mixed content types** (NOT pure prose) -- this is WHY, not preference
- **At least 4 structural element types**: prose + code blocks + callouts/tips + table or reference
- **WHY mixed content matters**: Pure prose limits mechanism deployment. Variant B was prose-dominant and only exercised 2/5 categories. "Mechanism ceiling for prose" at 6.
- **Content type recommendation**: Technical tutorial (e.g., "Building Your First API Endpoint")
  - Natural prose (introductions, explanations)
  - Natural code blocks (3-5)
  - Natural callouts/tips/warnings (2-3)
  - Natural step sequences
  - Natural reference table
  - Maps to CRESCENDO pattern
- **Different domain** than Variant B (scientific calibration) -- fresh test
- **NOT self-referential** (content about design system itself -> skill says ABORT)

### HANDOFF.md

No content selection criteria for Middle experiment found. HANDOFF identifies "Build one exceptional Middle-tier page" as a goal (line 293) but gives no content selection guidance.

### 14-master-execution-prompt.md

No content selection section found in first 400 lines. The execution prompt covers skill modifications but not experiment design details.

### 13-master-agenda.md (lines 262-274)

**What appears:**
> #### 2.1.1 Choose Experimental Content
> - [ ] **Criteria:**
>   - 800-1,200 words (substantive enough to need structure)
>   - Tutorial or guide format (narrative flow, sequential steps)
>   - Contains code examples (tests mechanism #17)
>   - Contains callouts/tips (tests mechanism #2)
>   - NOT the same content as Variant B (we need fresh test)

**What is MISSING:**
- "At least 4 structural element types" explicit requirement -- NOT listed as a criterion
- "NOT pure prose" -- the critical constraint is implicit in "Tutorial or guide format" but not stated as anti-pattern
- **WHY mixed content matters** -- the entire "Variant B was prose-dominant, only exercised 2/5 categories, mechanism ceiling for prose at 6" causal chain is ABSENT
- Contains table/reference section -- NOT listed as a criterion
- Contains step sequences -- NOT listed as a criterion
- NOT self-referential -- NOT listed as a criterion
- The specific recommendation ("Building Your First API Endpoint") with reasoning is absent

### Assessment: PARTIALLY PRESERVED

**What IS preserved:**
- 800-1,200 word count (agenda)
- Tutorial/guide format (agenda)
- Code examples and callouts as requirements (agenda)
- Different from Variant B (agenda)

**What is LOST:**
1. **WHY mixed content matters** -- the causal chain (prose-dominant -> 2/5 categories -> mechanism ceiling at 6) is absent from ALL overarching docs
2. **4+ structural element types requirement** -- not explicitly stated as a gate
3. **Table/reference section** as required content type -- absent from criteria
4. **Step sequences** as required content type -- absent from criteria
5. **NOT self-referential** -- this explicit skill constraint is not in criteria
6. **"Mechanism ceiling for prose" concept** -- the insight that content TYPE limits mechanism DEPLOYMENT is not present
7. **Technical tutorial recommendation with reasoning** -- the concrete suggestion with 6 supporting points is absent

**Severity: MEDIUM.** The basic criteria survive but without the WHY reasoning. A builder following the agenda criteria might select content that technically passes (tutorial, 800 words, has code blocks) but is prose-dominant enough to still hit the mechanism ceiling.

---

## CLARIFICATION 8: What the Middle Experiment Tests and What It Means

### Source (17-conversation-clarifications.md)

Key nuances:
- **Core hypothesis**: Does Middle (8-10, 5 categories, no metaphor, lookup pattern) reach "engagement threshold"?
- **SUCCESS verdict means**: (4 specific implications) Middle sufficient for 40-50% of pages, not every page needs metaphor, Floor-to-Middle highest ROI, Ceiling reserved for genuine structural tension
- **PARTIAL verdict means**: (3 specific implications) "designed" but lacks "atmosphere," some content needs Ceiling, tier boundaries may need adjustment
- **FAILURE verdict means**: (3 specific implications) lookup can't produce engagement, metaphor required even for tutorials, tier model may need revision to Floor/Ceiling only
- **Significance beyond this page**: First PRACTICAL test of vocabulary-vs-library distinction. Name Test and Transfer Test passed in THEORY. If Middle feels derivative, anti-gravity may need to address mechanism COMBINATION divergence, not just metaphor divergence.
- **"Document BEFORE building, not after"** directive

### HANDOFF.md (line 316)

**What appears:**
> | Q2 | What does an exceptional Middle-tier page feel like? | Build one. The most important untested hypothesis. | HIGHEST |

One-line entry in open questions table. No verdict framework. No implications per outcome.

### 14-master-execution-prompt.md

The execution prompt has a "Section 6" checkpoint framework that likely contains a decision matrix. Based on the checklist's reference to "Section 6 decision matrix," this may be the best-preserved location.

### 13-master-agenda.md (lines 357-369)

**What appears:**
> #### 2.4.2 Answer THE Question
> - [ ] **The Question:** Does Middle achieve the "place" feeling without metaphor?
> - [ ] **Evidence:**
>   - Engagement threshold question (PA-05): YES / PARTIAL / NO
>   - Comparison test: better than Variant B? YES / MARGINAL / NO
>   - Spatial atmosphere: "want to spend time here"? YES / SOMEWHAT / NO
> - [ ] **Verdict:**
>   - **SUCCESS:** Middle is sufficient for 40-50% of pages, Ceiling scope narrows
>   - **PARTIAL:** Middle is "designed" but lacks atmosphere, some content needs Ceiling
>   - **FAILURE:** Middle feels formatted not designed, metaphor required for engagement

**What is MISSING from the agenda:**
- PARTIAL and FAILURE specific implications are compressed to 1 line each (source has 3 implications each)
- "Tier model needs revision -- possibly Floor/Ceiling only, dropping Middle" (the most radical FAILURE implication) is absent
- **Significance beyond this page** -- the vocabulary-vs-library practical test framing is entirely absent
- If Middle feels **derivative**, anti-gravity may need to address combination divergence -- this nuance about what FAILURE means for the broader system is absent
- "Document BEFORE building" directive is implicit in document order but not stated as a principle

### Assessment: PARTIALLY PRESERVED

**What IS preserved:**
- Core hypothesis framing (agenda)
- Three-verdict framework (agenda)
- SUCCESS: 40-50% pages, Ceiling scope narrows (agenda, 1 line)
- PARTIAL: "designed" but lacks atmosphere (agenda, 1 line)
- FAILURE: formatted not designed (agenda, 1 line)

**What is LOST:**
1. **Detailed SUCCESS implications** -- "not every page needs metaphor (reduces build time from 3-5 hours to 70-100 min)" -- the build time reduction is absent
2. **Detailed PARTIAL implications** -- "tier boundaries may need adjustment" is absent
3. **Detailed FAILURE implications** -- "possibly Floor/Ceiling only, dropping Middle" is absent
4. **Significance beyond single page** -- "first PRACTICAL test of vocabulary-vs-library distinction" is absent from ALL overarching docs
5. **Name Test / Transfer Test theory-to-practice gap** -- absent
6. **Anti-gravity combination divergence** -- the insight that FAILURE might require addressing mechanism combination patterns, not just metaphor patterns, is absent
7. **"Document BEFORE building"** principle is unstated

**Severity: MEDIUM.** The verdict framework survives in skeleton form, but the IMPLICATIONS per verdict are compressed to single sentences, losing the decision tree for what to do next.

---

## ASSESSMENT: CLARIFICATION MAPPING (18-clarification-mapping.md)

### Question: Do proposed enrichments preserve FULL DEPTH or compress/summarize?

I examined each of the 14 proposed enrichment insertions:

**Enrichments that PRESERVE FULL DEPTH (7 of 14):**

1. **Location 1-A (SKILL.md)** -- includes all 4 page provenance examples, all 4 time-to-count mappings, the Goodhart's Law warning, and the per-category minimum explanation. FULL DEPTH.

2. **Location 2-A (SKILL.md)** -- includes DEPRECATED label, M1 replacement text, current instruction, and per-category protocol. FULL DEPTH.

3. **Location 3-A (mechanism-catalog.md)** -- includes concrete Middle examples (3 content-to-mechanism mappings), concrete Ceiling example (geological strata walkthrough), the KEY REALIZATION about multi-channel coherence, and the output comparison. FULL DEPTH.

4. **Location 5-A (CLAUDE.md scales)** -- includes all 5 scale definitions, fractal coherence explanation, mechanisms = breadth vs scales = depth, and WHY reasoning. FULL DEPTH.

5. **Location 6-A (agenda M1 sequencing)** -- includes original rationale, circular dependency, three approaches, isolated effect definition, and consensus position. FULL DEPTH.

6. **Location 7-A (agenda content selection)** -- includes WHY mixed content matters with mechanism mappings, tutorial recommendation with 6 points, and self-referential warning. FULL DEPTH.

7. **Location 8-A (agenda verdict implications)** -- includes full SUCCESS/PARTIAL/FAILURE implications and significance section. FULL DEPTH.

**Enrichments that COMPRESS but retain key nuance (5 of 14):**

8. **Location 1-B (HANDOFF.md)** -- includes provenance examples and warning but COMPRESSES time-to-count mapping. Acceptable for a summary document.

9. **Location 1-C (ENTRY-POINT.md)** -- includes 3 page examples (drops DD-006) and per-category explanation. Minor loss.

10. **Location 1-D (execution prompt)** -- retains principle + breadth reasoning but drops page-specific provenance. Significant compression.

11. **Location 2-B (HANDOFF.md)** -- includes wave rationale, circular dependency, and current state. Drops three approaches and isolated effect reasoning. Significant compression.

12. **Location 2-C (ENTRY-POINT.md)** -- includes problem statement, M1 rationale, and current state. Drops three approaches. Moderate compression.

**Enrichments that LOSE important nuance (2 of 14):**

13. **Location 4-B (ENTRY-POINT.md pattern legend)** -- compressed to a single paragraph. Loses the concrete CRESCENDO-within-page example. Too compressed for full understanding.

14. **Location 4-A (HANDOFF.md)** -- captures the distinction and within-pattern example, but the "For Middle tier: 4-option pattern table is intentionally a fixed lookup" phrasing could be stronger about Middle removing creative judgment.

### KEY GAP IN MAPPING

The mapping proposes enrichments to 7 files but does NOT address:
- **No HANDOFF enrichment for scales (C5)** -- currently proposed only for CLAUDE.md
- **No HANDOFF enrichment for content selection (C7)** -- proposed only for agenda
- **The three approaches for M1 timing** appear in Location 6-A (agenda) but NOT in Location 2-B (HANDOFF) -- so HANDOFF will still lack this after enrichment

---

## ASSESSMENT: MIDDLE-TIER CHECKLIST (18-middle-tier-checklist.md)

### Question: Does the checklist include "why" reasoning for every check?

The checklist is **exemplary** in this regard. Every single item in the 129-item checklist includes a "Why This Matters" column. Selected examples showing depth preservation:

| Check | "Why This Matters" Content | Clarification Traced |
|-------|---------------------------|---------------------|
| A1.1 (M1 timing) | "Without M1, the skill says 'sample 2-4 mechanisms' which DIRECTLY CONTRADICTS the 8-10 mechanism Middle-tier hypothesis" | C2 + C6 |
| A2.3 (code blocks) | "Code blocks exercise mechanism #17 (Code Block) from the Component category" | C7 (element-to-mechanism mapping) |
| A3.2 (no element dominates >60%) | "Prose-dominant content hit a 'mechanism ceiling' at 6 in Variant B" | C7 (mechanism ceiling = 6) |
| A4.3 (not hardcoded CRESCENDO) | "Earlier discussion defaulted to CRESCENDO because tutorial content was assumed" | C4 (not hardcoded) |
| A5.3 (count as natural landing) | "Mechanism counts were backward-engineered (Variant B -> 5, OD-004 -> 12-15, CD-006 -> 16-18)" | C1 (provenance) |
| B4.2 (no count-targeting) | "Goodhart's Law: when count becomes the target, builders pad with unfitting mechanisms" | C1 (Goodhart's Law) |
| B6.7 (structural not decorative) | "Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative" | C4 + C5 |
| E4.3 (all 3 novelty = derivative) | "The vocabulary-vs-library distinction fails in practice" | C8 (significance beyond page) |

**Section G (Meta-Checks)** explicitly maps each clarification to checklist items:

| G1 | Mechanism counts as DESCRIPTIVE | -> C1 |
| G2 | "Sample 2-4" as PROBLEM | -> C2 |
| G3 | Patterns distinguished from mechanisms | -> C4 |
| G4 | Creative derivation vs lookup | -> C3 |
| G5 | Fractal coherence with scale examples | -> C5 |
| G6 | Scales vs mechanisms distinguished | -> C5 |
| G7 | M1 sequencing documented | -> C6 |
| G8 | Success/failure documented BEFORE building | -> C8 |

**Checklist assessment: EXCELLENT.** This is the strongest depth-preservation artifact. Binary operationalization and nuance preservation coexist because every WHAT-to-check is paired with WHY-to-check.

**One factual concern:** The checklist notes a Variant B mechanism count discrepancy -- clarification says "5 mechanisms across 2 categories" while the master agenda says "7 mechanisms, 2 categories." This should be resolved before execution.

---

## SUMMARY TABLE

| Clarification | HANDOFF | Exec Prompt | Agenda | Proposed Enrichments | Checklist |
|--------------|---------|-------------|--------|---------------------|-----------|
| C1: Counts descriptive | NOT PRESERVED | PARTIALLY | CONTRADICTED | FULL DEPTH | FULL DEPTH |
| C2: "2-4" is problem | PARTIALLY | PARTIALLY | BARE | MOSTLY (minor gap) | FULL DEPTH |
| C3: Derivation vs lookup | NOT PRESERVED | PARTIALLY | ABSENT | FULL DEPTH | FULL DEPTH |
| C4: Patterns = skeleton | NOT PRESERVED | ABSENT | VIOLATED | FULL DEPTH | FULL DEPTH |
| C5: Scales vs mechanisms | NOT PRESERVED | PARTIALLY | ABSENT | FULL DEPTH | FULL DEPTH |
| C6: M1 sequencing | NOT PRESERVED | BARE | BARE | FULL DEPTH | FULL DEPTH |
| C7: Content selection | NOT PRESERVED | ABSENT | PARTIALLY | FULL DEPTH | FULL DEPTH |
| C8: Experiment meaning | BARE | LIKELY PARTIAL | PARTIALLY | FULL DEPTH | FULL DEPTH |

---

## CRITICAL FINDINGS (Ranked by Severity)

### 1. CRITICAL -- M1 Sequencing Decision Absent from ALL Overarching Docs

The circular dependency (can't test 8-10 if skill says 2-4), the three approaches, and the "arguably a mistake" consensus appear NOWHERE in current overarching documents. A new instance would execute the experiment without M1, wasting a build. The proposed enrichments (Location 6-A for agenda, Location 2-B for HANDOFF) fix this, but the HANDOFF enrichment drops the three approaches.

**Recommendation:** Apply Location 6-A enrichment (agenda) as-is. Add brief three-approaches reference to Location 2-B enrichment (HANDOFF).

### 2. HIGH -- Master Agenda Contradicts Two Clarifications

- Line 309: "target: 8-10" CONTRADICTS C1's "proxy not target" principle
- Line 284: "go directly to Phase 4 with CRESCENDO pattern" VIOLATES C4's "pattern NOT hardcoded to CRESCENDO"

**Recommendation:** Change "target: 8-10" to "natural landing: 8-10." Change "with CRESCENDO pattern" to "with content-type-based pattern selection (e.g., CRESCENDO for tutorial content)."

### 3. HIGH -- HANDOFF.md Has Zero Depth on 6 of 8 Clarifications

HANDOFF is the "START HERE" document but contains no scale definitions, no skeleton/flesh distinction, no selection logic explanation, no M1 sequencing rationale, no content selection criteria, and no experiment implications.

**Recommendation:** Apply all proposed HANDOFF enrichments (1-B, 2-B, 4-A). Add brief scale section to HANDOFF (currently proposed only for CLAUDE.md).

### 4. MEDIUM -- Concrete Examples Systematically Lost in Overarching Docs

Across all 8 clarifications, the most common pattern of nuance loss is **concrete examples being replaced by abstract principles**:
- "This has code blocks -> mechanism #17" becomes "individual mechanism deployment"
- "Borders get heavier AND backgrounds get darker" becomes "mechanism COMBINATION deployment"
- "Variant B = 5 mechanisms across 2 categories" becomes "mechanism counts describe natural landing zones"

The proposed enrichments restore examples in most locations but some summary-level enrichments (1-D, 4-B) still compress away the examples.

### 5. MEDIUM -- Factual Discrepancy: Variant B Mechanism Count

Clarification source says "5 mechanisms across 2 categories." Master agenda says "7 mechanisms, 2 categories." Should be resolved before execution.

---

## OVERALL VERDICT

**The current overarching documents lose significant depth** -- 6 of 8 clarifications are NOT PRESERVED or only BARE in HANDOFF, and the master agenda actively contradicts two clarifications.

**The proposed enrichments (18-clarification-mapping.md) are excellent** -- 7 of 14 preserve FULL DEPTH, 5 compress acceptably, only 2 lose notable nuance.

**The checklist (18-middle-tier-checklist.md) is the gold standard** -- 129 binary items all with "why" reasoning, explicit G-section mapping to all 8 clarifications. This is the strongest depth-preservation artifact.

**After applying the proposed enrichments, all 8 clarifications will be adequately represented** in the documentation ecosystem. The three recommendations above (M1 sequencing three-approaches in HANDOFF, agenda contradiction fixes, scales in HANDOFF) close the remaining gaps.

---

**END CONTEXT RICHNESS AUDIT**

*Sources: 17-conversation-clarifications.md (8 clarifications), 18-clarification-mapping.md (14 proposed enrichments), 18-middle-tier-checklist.md (129 binary items), HANDOFF.md (476 lines), 14-master-execution-prompt.md (first 400 lines), 13-master-agenda.md (1051 lines).*
