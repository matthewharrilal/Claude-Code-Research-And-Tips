# Anti-Gravity Mechanism Design
## Concrete Solutions to Pattern Defaulting in Design System Extraction

**Designer:** rigidity-mechanics team member
**Date:** 2026-02-14
**Research Base:** Wave 1 research (01-04), Wave 1.5 audit of 12 artifacts
**Design Constraint:** Agents need access to EVERYTHING — restricting is NOT valid

---

## EXECUTIVE SUMMARY

**The Problem Redefined:**

Pattern gravity is NOT caused by volume. It's caused by **TIMING** (when patterns are consulted) and **FRAMING** (how they're positioned). The research proves agents can have access to 100+ patterns and STILL generate fresh work IF:
1. Patterns are consulted AFTER initial derivation (timing)
2. Patterns are framed as proof-of-concept, not templates (framing)

**The Core Insight:**

Volume is nearly irrelevant. The critical variables are:
- **Lookup mode vs Search mode** (cognitive mechanics research)
- **Vocabulary vs Decisions** (spectrum analysis)
- **3-example sweet spot** (analogous domains)
- **Binary sequential rules achieve 100% compliance** (metacognition finding from MEMORY.md)

**Designed Mechanisms:** 12 mechanisms across 3 categories (STRUCTURAL, PROCEDURAL, HYBRID)

---

## MECHANISM CATEGORY TAXONOMY

### STRUCTURAL Mechanisms
Baked into documentation architecture. Work WITHOUT correct agent invocation. Cannot be bypassed accidentally.

### PROCEDURAL Mechanisms
Require correct prompting/workflow. Depend on agent following instructions. Vulnerable to skipping.

### HYBRID Mechanisms
Structural foundation + procedural activation. Work partially without invocation, fully with.

---

## PART 1: STRUCTURAL MECHANISMS (Baked In)

### M1: PHASE-GATED LIBRARY ACCESS

**What it does:**
Library files are physically separated from skill files. Agents cannot access library during Phase 1-3 unless they explicitly read the library file. The file system itself enforces timing.

**Implementation:**
```
~/.claude/skills/tension-composition/
  ├── SKILL.md                    ← Phases 1-3 here
  ├── MECHANISM-CATALOG.md        ← Phase 4+ (tools only)
  └── (library never referenced in SKILL.md)

/active/design-system/library/
  └── METAPHOR-CASE-STUDIES.md    ← Separate file, not auto-loaded
```

**How it addresses gravity:**
- **Timing dimension:** Library is UNAVAILABLE during creative phase
- **Working memory:** Library not in context during Phase 1-3 → zero retrieval anchor
- **Cognitive mode:** Forces SEARCH mode (derive query) not LOOKUP mode (match pattern)

**Limitations:**
- Agents can still explicitly read library early if they want to
- Requires Phase 1-3 in skill to NOT reference library file

**Anti-gravity strength:** HIGH (structural enforcement of timing)

**Scale behavior:**
Works BETTER as library grows. A 100-pattern library in a separate file creates SAME timing barrier as a 6-pattern library.

---

### M2: DUAL-FILE SPLIT (Mechanisms vs Metaphors)

**What it does:**
Splits library into two files with fundamentally different purposes:
- `MECHANISM-CATALOG.md` — reusable techniques (border-weight gradients, spacing compression, 2-zone DNA)
- `METAPHOR-CASE-STUDIES.md` — full explorations with metaphor narratives

Skill references ONLY mechanism catalog during Phase 4.

**Implementation:**
```markdown
# MECHANISM-CATALOG.md (referenced in skill)

## Border-Weight Gradient
**What it does:** Encodes hierarchy through border thickness (4px/3px/1px)
**When it works:** Content has 3+ clarity levels
**How to apply:** Assign thickest border to most certain/important
**Extract from:** GEOLOGICAL (depth), TIDAL (density), PULSE (emphasis)
```

```markdown
# METAPHOR-CASE-STUDIES.md (NOT referenced in skill)

## Case Study: Geological Stratification (OD-004)

⚠️ **THIS IS NOT A TEMPLATE**
This is proof that warmth/austerity tension CAN be resolved.
YOUR metaphor will be DIFFERENT.

**Tension that produced this:**
[Full narrative of why geological was discovered]
```

**How it addresses gravity:**
- **Vocabulary vs Decisions:** Mechanisms are TOOLS (low gravity), metaphors are DECISIONS (high gravity, now isolated)
- **Retrieval space:** Agents retrieve mechanisms (reusable) not layouts (metaphor-specific)
- **Framing:** Mechanisms framed as techniques; metaphors framed as case studies (not templates)

**Limitations:**
- Agents might still read case studies file
- Requires maintaining two files instead of one

**Anti-gravity strength:** HIGH (structural separation of extractable vs inspirational)

**Scale behavior:**
Scales perfectly. Mechanism catalog grows slowly (20 universal mechanisms max). Case studies grow infinitely but stay isolated.

---

### M3: ANTI-PRESCRIPTION HEADERS (Structural Framing)

**What it does:**
Every pattern/case study begins with a mandatory anti-prescription warning using consistent format.

**Implementation:**
```markdown
## Case Study: Geological Stratification

⚠️ **READ THIS FIRST — NOT A TEMPLATE**

This page shows ONE metaphor that resolved warmth/austerity tension.
Your content's tension will lead to a DIFFERENT metaphor.

**What to extract:**
- ✅ Principles (depth encodes confidence)
- ✅ Mechanisms (padding compression + color darkening)
- ❌ Layout structure (6-layer stratification is metaphor-specific)

**Your assignment:** Derive YOUR metaphor using the PROCESS shown here, not this ANSWER.

**Success check:** If your metaphor is geological, ask: "Did I derive this independently or pattern-match to it?"
```

**How it addresses gravity:**
- **Framing effects:** "NOT A TEMPLATE" activates divergence mode before content is read
- **Continuation bias:** Warning is FIRST thing read → anchors interpretation
- **Permission structure:** Explicit separation of extractable (mechanisms) vs non-extractable (layout)

**Limitations:**
- Agents might ignore warnings
- Requires adding ~10 lines per case study

**Anti-gravity strength:** MEDIUM-HIGH (structural framing, procedural compliance needed)

**Scale behavior:**
Constant cost per pattern. 100 patterns = 100 warnings, but each warning is effective for that pattern.

---

### M4: TIER VOCABULARY SHIFT (Rename to Remove Hierarchy)

**What it does:**
Eliminates tier numbering (1, 2, 2.5, 3) which implies hierarchy. Renames to functional categories:

- ~~Tier 1~~ → **Tokens** (pure values)
- ~~Tier 2~~ → **Components** (structure + style)
- ~~Tier 2.5~~ → **Mechanisms** (reusable techniques)
- ~~Tier 3~~ → **Metaphors** (case studies)

**Implementation:**
```
OLD: tier-1/tokens/
NEW: tokens/

OLD: tier-3/geological.md
NEW: case-studies/geological.md
```

**How it addresses gravity:**
- **Categorical gravity:** Removes implied hierarchy (higher tier ≠ better)
- **Perception:** "Tier 3" sounds advanced/premium; "Case Study" sounds documentary
- **Mental model:** Shifts from ladder (climb tiers) to toolbox (select what's needed)

**Limitations:**
- Doesn't change content, only labels
- Existing documentation references tiers

**Anti-gravity strength:** LOW-MEDIUM (cosmetic but psychologically meaningful)

**Scale behavior:**
One-time renaming. No scaling impact.

---

## PART 2: PROCEDURAL MECHANISMS (Prompt-Dependent)

### M5: BINARY SEQUENTIAL PHASE RULES

**What it does:**
Exploits the metacognition finding: "Binary rules achieve 100% agent compliance." Makes creative path = compliant path through mandatory sequence.

**Implementation (in SKILL.md):**
```markdown
## ⚠️ MANDATORY EXECUTION SEQUENCE

You MUST complete these phases in order. You CANNOT skip ahead.

**Phase 1:** Multi-axis questioning (14+ questions) → Produce axis table
**Phase 2:** Tension derivation → Produce tension table with opposition/overlap/width
**Phase 3:** Metaphor search query → Produce search query string
**Phase 4:** Metaphor commitment → STATE your metaphor and LOCK IT IN

DO NOT consult pattern library until AFTER Phase 4.

The library provides MECHANISMS for implementation, not TEMPLATES for selection.
```

**How it addresses gravity:**
- **Binary rule compliance:** Sequential rules get 100% compliance (from metacognition analysis)
- **Timing control:** Library unavailable during Phases 1-3
- **Working memory:** Tension table is most recent/salient content when library is consulted
- **Cognitive mode:** Search mode (query construction) not lookup mode (pattern matching)

**Limitations:**
- Vulnerable if agent skips instructions
- Requires skill to be loaded in full

**Anti-gravity strength:** HIGH (exploits fundamental LLM compliance behavior)

**Scale behavior:**
Independent of library size. Works same for 6 patterns or 60 patterns.

---

### M6: EXPLICIT DIVERGENCE MANDATE

**What it does:**
Redefines success criteria from "good composition" to "novel metaphor." Agents optimize for what's defined as success.

**Implementation (in SKILL.md):**
```markdown
## Creative Mandate

**You are EXPECTED to derive a metaphor NOT in the case studies library.**

Using an existing metaphor verbatim signals pattern-matching, not tension-deriving.

**Success criteria:**
- ✅ Novel metaphor derived from YOUR content's tension
- ✅ Mechanisms borrowed from library (encouraged)
- ❌ Layout structure copied from library (signals failure)

If your metaphor matches a case study, you MUST either:
1. Justify convergence (independent derivation of same solution), OR
2. Re-run Phase 3 with constraint: "[matched metaphor] is taken, what ELSE resolves this?"
```

**How it addresses gravity:**
- **Framing effects:** Redefines "success" to exclude pattern-matching
- **Explicit permission:** Makes divergence EXPECTED, not optional
- **Verification requirement:** Matching becomes visible and requiring justification
- **Constraint propagation:** If match occurs, agent must regenerate

**Limitations:**
- Requires agent to actually check case studies against their metaphor
- "Independent convergence" exception allows genuine matches

**Anti-gravity strength:** HIGH (redefines optimization target)

**Scale behavior:**
Actually IMPROVES as library grows. With 100 case studies, independent convergence becomes statistically unlikely → stronger divergence pressure.

---

### M7: THE CHARLIE PARKER INSTRUCTION (Forget Phase)

**What it does:**
Explicitly instructs agents to "forget" the library during ideation, mirroring jazz pedagogy finding: "practice 15 hours, then forget all that and just wail."

**Implementation (Phase 3 introduction):**
```markdown
## Phase 3: Metaphor Search

You have access to a library of prior metaphors. You will consult it LATER for mechanisms.

**For Phase 3, FORGET the library exists.**

Trust your query construction process. The search query should emerge from YOUR content's tension properties, not from scanning what's been done before.

**After Phase 4 (metaphor commitment), THEN consult the mechanism catalog** for implementation tools.
```

**How it addresses gravity:**
- **Charlie Parker pattern:** Learn (library exists) → Forget (during creation) → Apply (use mechanisms after)
- **Explicit override:** Direct instruction to ignore library
- **Two-phase creative model:** Derivation phase separate from implementation phase

**Limitations:**
- Relies on agent following the "forget" instruction
- Counter-intuitive (why give access then say ignore?)

**Anti-gravity strength:** MEDIUM (powerful if followed, but procedural compliance needed)

**Scale behavior:**
Independent of library size. "Forget the library" works same for 10 or 100 patterns.

---

### M8: 3-EXAMPLE SAMPLING (Goldilocks Exposure)

**What it does:**
Leverages AI research finding: "n=3 examples best balances pattern diversity and context focus." Instead of loading full library, sample 2-4 relevant examples.

**Implementation (Weaver role):**
```markdown
Weaver responsibility: Pattern sampling

When builder completes Phase 4 (metaphor commitment), Weaver:
1. Reads builder's metaphor + tension
2. Selects 2-3 MOST RELEVANT case studies (not all case studies)
3. Provides mechanism catalog + selected case studies
4. Explicitly states: "These are REFERENCE examples, not a menu. Your metaphor is different."
```

**How it addresses gravity:**
- **3-example sweet spot:** Empirically proven optimal exposure (from analogous domains research)
- **Relevance filtering:** Only show patterns that share tension properties
- **Volume control:** 3 examples prevent mode collapse; 30 examples cause it
- **Explicit framing:** "Reference not menu" reinforces anti-prescription

**Limitations:**
- Requires Weaver to intelligently select examples
- Agents working solo won't have this filtering

**Anti-gravity strength:** HIGH (empirically validated approach)

**Scale behavior:**
IMPROVES as library grows. With 100 patterns, Weaver can select the 3 MOST relevant instead of showing all 6 available.

---

### M9: DIVERGENCE VERIFICATION GATE

**What it does:**
Makes metaphor novelty a GATE before implementation proceeds. Agents must verify their metaphor differs from library before building.

**Implementation (Phase 3.5 — new phase):**
```markdown
## Phase 3.5: Divergence Verification

Before implementing your metaphor, complete this check:

1. State your metaphor candidate: _______________
2. Read case studies titles (NOT full contents)
3. Does your metaphor match any existing case study?

**IF YES:**
- Justify convergence: "I derived this independently because [reasoning]", OR
- Regenerate: Re-run Phase 3 with added constraint: "[matched metaphor] is unavailable"

**IF NO:**
- Proceed to Phase 4 (implementation)

Lock in your metaphor BEFORE consulting mechanism catalog.
```

**How it addresses gravity:**
- **Gate enforcement:** Can't proceed without verification
- **Visibility:** Makes pattern-matching explicit, not invisible
- **Commitment mechanism:** Metaphor locked BEFORE mechanism consultation prevents post-hoc switching
- **Regeneration path:** Provides concrete action if match occurs

**Limitations:**
- Requires honest self-evaluation
- "Independent convergence" exception allows genuine matches
- Adds procedural step

**Anti-gravity strength:** MEDIUM-HIGH (creates friction against defaulting)

**Scale behavior:**
Constant cost (single verification step). Works same for small or large library.

---

## PART 3: HYBRID MECHANISMS (Structural + Procedural)

### M10: DIVERSITY TRACKING DASHBOARD (Visible Fatigue)

**What it does:**
Makes metaphor repetition VISIBLE through a maintained registry. Frequency becomes apparent, not invisible.

**Implementation:**
```markdown
# METAPHOR-REGISTRY.md (maintained by Weaver)

| Metaphor Family | Usage Count | Latest Use | Status |
|-----------------|-------------|------------|--------|
| Geological stratification | 4 | Page-12 | ⚠️ MODERATE FATIGUE |
| Workshop/craftsman | 2 | Page-08 | ✅ AVAILABLE |
| Archive/vault | 1 | Page-03 | ✅ AVAILABLE |
| Botanical growth | 0 | — | ✅ UNEXPLORED |

**Fatigue Levels:**
- 0-1 uses: ✅ AVAILABLE
- 2-3 uses: ⚡ LIGHT FATIGUE (consider alternatives)
- 4+ uses: ⚠️ MODERATE FATIGUE (avoid unless justified)
```

**Procedural component:**
Weaver shows registry BEFORE Phase 3. Agents see fatigue warnings.

**Structural component:**
Registry file persists across sessions. Fatigue accumulates over time.

**How it addresses gravity:**
- **Visibility:** Repetition becomes VISIBLE not invisible
- **Advisory not prohibitive:** Warns but allows justified reuse
- **Collective knowledge:** Tracks usage across entire project, not just current session
- **Explicit diversity reward:** Low-usage metaphors are visibly attractive

**Limitations:**
- Requires Weaver maintenance
- Doesn't prevent reuse, just makes it visible
- "Metaphor family" categorization needed (what counts as "same"?)

**Anti-gravity strength:** MEDIUM (awareness mechanism, not enforcement)

**Scale behavior:**
ESSENTIAL as library grows. With 100 pages built, tracking prevents invisible over-repetition of popular metaphors.

---

### M11: TWO-PHASE PROMPTING (Generate Then Evaluate)

**What it does:**
Separates generation context from evaluation context. Two separate agent instances or two separate turns.

**Implementation (workflow protocol):**
```markdown
## Builder Workflow (Two-Phase Pattern)

**PHASE A: Generative (Library-Blind)**
1. Builder receives: Content + Skill (Phases 1-3 only)
2. Builder does NOT receive: Case studies library, mechanism catalog
3. Builder produces: Tension table + Metaphor search query + Metaphor candidate
4. Builder commits: "My metaphor is [X] because it resolves [Y tension]"
5. OUTPUT: Metaphor commitment document

**PHASE B: Implementation (Library-Aware)**
6. Builder receives: Metaphor commitment + Mechanism catalog + (optional) 2-3 case study samples
7. Builder does NOT receive: Full case studies library
8. Builder produces: HTML/CSS implementation using mechanisms
9. OUTPUT: Compositional layout

**Key:** Phase A output is LOCKED before Phase B input arrives.
```

**Procedural component:**
Workflow execution (two turns or two agents)

**Structural component:**
Metaphor commitment document persists between phases

**How it addresses gravity:**
- **Two-Instance pattern:** Exploits continuation bias (from metacognition finding)
- **Working memory separation:** Library not in context during Phase A
- **Commitment mechanism:** Phase A output is anchor for Phase B
- **Timing control:** Library unavailable when it matters most (metaphor derivation)

**Limitations:**
- Requires two-turn workflow or multiple agents
- More complex orchestration
- Phase A might produce metaphors without considering implementability

**Anti-gravity strength:** VERY HIGH (exploits fundamental LLM architecture)

**Scale behavior:**
Independent of library size. Separation works same for any library volume.

---

### M12: JAZZ CATALOG FRAMING (Gallery Not Menu)

**What it does:**
Reframes entire library purpose from "catalog of options" to "proof gallery + toolbox."

**Implementation (library introduction):**
```markdown
# Metaphor Case Studies — The Jazz Standard Catalog

## What This Is

This is a GALLERY of prior work, like a jazz musician's Real Book of standards.

**Its purpose:**
- ✅ Proof that tensions are resolvable (inspiration)
- ✅ Mechanism extraction (vocabulary)
- ✅ Process documentation (learning)

**NOT:**
- ❌ Template catalog (don't copy these)
- ❌ Pattern selection menu (don't choose from these)
- ❌ Design system components (these are unique compositions)

## The Jazz Analogy

Charlie Parker learned 200+ standards, transcribed 100+ solos, practiced 15 hours a day.

He did NOT play those standards verbatim in performance.

He EXTRACTED harmonic patterns, rhythmic devices, melodic shapes—then applied them to NEW material.

**Your assignment:** Same approach.
- Learn these metaphors (study the process)
- Extract the mechanisms (border-weight, compression, 2-zone DNA)
- Apply to YOUR content with YOUR metaphor

**"Play what YOU hear."** — The library is your Real Book. Your composition is your solo.
```

**Procedural component:**
Framing language agents read

**Structural component:**
Library organized as gallery (chronological or thematic) not menu (categorical)

**How it addresses gravity:**
- **Reframing:** From prescriptive (what to use) to descriptive (what's been tried)
- **Jazz pedagogy:** Proven model from analogous domains research
- **Permission structure:** Explicit instruction to diverge
- **Purpose clarity:** Separates inspiration from instruction

**Limitations:**
- Framing can be ignored
- Jazz analogy might not resonate with all agents
- Requires consistent messaging across all library materials

**Anti-gravity strength:** MEDIUM-HIGH (powerful framing, requires buy-in)

**Scale behavior:**
IMPROVES as library grows. "200+ standards" framing makes sense at scale. At 6 patterns, it feels thin.

---

## PART 4: MECHANISM INTERACTIONS & COMPOUNDING

### How Mechanisms Work Together

**The Timing Layer (M1, M5, M11):**
- M1: Library physically separate → structural timing barrier
- M5: Binary sequential rules → procedural timing enforcement
- M11: Two-phase prompting → architectural timing separation

**Effect when combined:** TRIPLE ENFORCEMENT of "library after derivation"

**The Framing Layer (M2, M3, M12):**
- M2: Mechanisms separate from metaphors → structural framing
- M3: Anti-prescription headers → procedural framing
- M12: Jazz gallery framing → conceptual framing

**Effect when combined:** CONSISTENT MESSAGE across all touchpoints

**The Verification Layer (M6, M9, M10):**
- M6: Explicit divergence mandate → success criteria redefinition
- M9: Divergence verification gate → enforcement checkpoint
- M10: Diversity tracking → visibility mechanism

**Effect when combined:** DIVERGENCE becomes measured, visible, enforced

### Recommended Deployment Bundles

**ESSENTIAL BUNDLE (minimum viable anti-gravity):**
- M1: Phase-gated library access (structural timing)
- M5: Binary sequential rules (procedural timing)
- M6: Explicit divergence mandate (redefine success)

**Rationale:** Timing control + success redefinition address the two critical dimensions from research.

**ROBUST BUNDLE (production deployment):**
- M1 + M2 + M5 + M6 + M9 + M12

**Rationale:** Structural timing + vocabulary/decision split + procedural timing + success redefinition + verification gate + gallery framing. Multi-layered defense.

**FULL SYSTEM (maximum anti-gravity):**
- All 12 mechanisms

**Rationale:** Redundant enforcement. If procedural mechanisms fail (agent skips), structural mechanisms still work. If structural weak (agent reads library early), procedural framing still applies.

---

## PART 5: SCALING ANALYSIS

### As Library Grows 8 → 30 → 100+ Patterns

**Mechanisms that IMPROVE with scale:**
- **M6 (Divergence mandate):** With 100 patterns, independent convergence becomes statistically unlikely → stronger divergence signal
- **M8 (3-example sampling):** More patterns = better relevance filtering (select 3 BEST matches instead of showing all 6)
- **M10 (Diversity tracking):** ESSENTIAL at scale. With 100 pages, prevents invisible over-repetition
- **M12 (Jazz framing):** "200+ standards" makes sense at scale; feels authentic not artificial

**Mechanisms that remain CONSTANT:**
- **M1 (Phase-gated access):** Same structural barrier for 8 or 100 patterns
- **M5 (Binary sequential):** Same mandatory sequence regardless of library size
- **M9 (Verification gate):** Same single checkpoint regardless of volume
- **M11 (Two-phase prompting):** Same separation regardless of library size

**Mechanisms that DEGRADE with scale:**
- **M3 (Anti-prescription headers):** Header impact dilutes if EVERY pattern has same warning (warning fatigue)
- **M4 (Tier vocabulary shift):** Cosmetic change has same impact regardless of scale
- **M7 (Forget instruction):** Harder to "forget" a 100-pattern library than a 10-pattern library

**CRITICAL FINDING:**
The mechanisms that scale BEST (M6, M8, M10, M12) are the ones that explicitly leverage library size. Anti-gravity doesn't fight volume—it USES volume as an asset.

---

## PART 6: FAILURE MODES & LIMITATIONS

### When Mechanisms Fail

**PROCEDURAL FAILURE MODE:**
Agent skips Phase 1-3, reads library immediately, pattern-matches.

**Vulnerable mechanisms:** M5, M6, M7, M9 (all require compliance)
**Resilient mechanisms:** M1, M2, M4, M11 (structural enforcement)

**Mitigation:** Deploy structural mechanisms (M1, M2) as PRIMARY defense, procedural as SECONDARY.

---

**FRAMING FAILURE MODE:**
Agent reads anti-prescription headers but interprets them as weak suggestions, not mandates.

**Vulnerable mechanisms:** M3, M12 (framing depends on interpretation)
**Resilient mechanisms:** M5, M9 (binary rules are explicit, not interpretable)

**Mitigation:** Combine framing (M3, M12) with enforcement (M5, M9).

---

**COMPLIANCE FATIGUE MODE:**
Agent sees same anti-prescription warning 50 times, stops reading it carefully.

**Vulnerable mechanisms:** M3 (repeated warnings)
**Resilient mechanisms:** M5 (one rule in skill, not repeated), M9 (single gate)

**Mitigation:** Vary warning language across case studies. Use M1/M2 to reduce how often warnings are seen.

---

**WEAVER DEPENDENCY MODE:**
Mechanisms requiring Weaver maintenance (M8, M10) fail if Weaver unavailable.

**Vulnerable mechanisms:** M8 (sampling), M10 (registry)
**Resilient mechanisms:** All others (work without Weaver)

**Mitigation:** Provide fallback protocols (solo agent workflow without sampling/tracking).

---

**LEGITIMIZED CONVERGENCE MODE:**
Agent uses "independent convergence" exception to justify pattern-matching.

**Vulnerable mechanisms:** M6, M9 (allow justified convergence)
**Resilient mechanisms:** M10 (tracks frequency, makes repetition visible even if justified)

**Mitigation:** Require STRONG justification. Weaver reviews convergence claims.

---

## PART 7: THE JAZZ ANALOGY MADE CONCRETE

### Charlie Parker's Method Applied to LLM Agents

**Parker's Process:**
1. **Learn standards deeply** (transcribe solos, practice 15 hours/day)
2. **Extract vocabulary** (harmonic patterns, rhythmic devices, melodic shapes)
3. **Forget during performance** ("forget all that and just wail")
4. **Apply vocabulary intuitively** (to new material, not standards verbatim)

**LLM Agent Equivalent:**

| Parker Phase | Agent Phase | Mechanism |
|--------------|-------------|-----------|
| Learn standards | Read case studies library | M12 (gallery framing) |
| Extract vocabulary | Read mechanism catalog | M2 (mechanisms separate) |
| Forget during performance | Phase 1-3 (library-blind) | M1, M5, M11 (timing control) |
| Apply vocabulary intuitively | Phase 4 (use mechanisms) | M2 (mechanism catalog consulted) |

**The Critical Difference:**

Parker's "forget" was PSYCHOLOGICAL (he'd internalized patterns so deeply he accessed them unconsciously).

LLM "forget" must be STRUCTURAL (library removed from context) because agents don't have unconscious access—they only have working memory.

**Adaptation:**
- Parker: Learn → Internalize → Forget → Play
- Agent: Learn (library exists) → Separate (not in context) → Derive (Phase 1-3) → Apply (mechanisms in Phase 4)

The TIMING separation (M1, M5, M11) is the agent equivalent of Parker's psychological "forget" moment.

---

## PART 8: REMAINING OPEN QUESTIONS

### Questions Requiring Empirical Testing

**Q1: Do binary sequential rules ACTUALLY achieve 100% compliance with LLM agents?**

The metacognition finding (from MEMORY.md) is about historical team behavior. Does M5 work with Sonnet/Opus agents in this context?

**Test:** Build 2 tracks:
- Track A: Binary sequential Phase 1→2→3→4 rule
- Track B: Judgment rule ("consider deriving tension first")

**Measure:** How often agents skip Phase 1-3 and pattern-match.

---

**Q2: What's the optimal example count? Is it exactly 3, or a range 2-4?**

Analogous domains research cited "n=3" from neural network generation (2025). Does this hold for compositional metaphor selection?

**Test:** Build same content with:
- 1 example shown
- 2 examples shown
- 3 examples shown
- 5 examples shown
- All examples shown (8)

**Measure:** Novelty, quality, pattern-matching frequency.

---

**Q3: Does anti-prescription framing actually work, or do agents ignore warnings?**

M3, M12 depend on framing language being effective. Is "⚠️ NOT A TEMPLATE" strong enough?

**Test:** Build same content with:
- No warning
- Weak warning ("consider as starting point")
- Strong warning ("⚠️ NOT A TEMPLATE")
- Very strong warning ("Using this layout verbatim = FAILURE")

**Measure:** Pattern-matching frequency at each level.

---

**Q4: What's the psychological effect of tier numbering vs functional naming?**

M4 assumes "Tier 3" creates hierarchy gravity. Does renaming to "Case Studies" actually reduce it?

**Test:** Same library, two presentations:
- Version A: tier-1/, tier-2/, tier-3/ folders
- Version B: tokens/, components/, case-studies/ folders

**Measure:** Agent perception of hierarchy, usage patterns.

---

**Q5: Is two-phase prompting (M11) actually necessary, or does single-phase with timing rules work?**

M11 is architecturally complex (two turns or two agents). Is it worth the complexity?

**Test:** Build same content with:
- Single-phase: Phases 1-4 in one turn, library available but with "don't read yet" rule
- Two-phase: Phase A (1-3) library-blind, Phase B (4) library-aware

**Measure:** Novelty, pattern-matching frequency, implementation quality.

---

## PART 9: IMPLEMENTATION ROADMAP

### Recommended Deployment Sequence

**PHASE 1: Structural Foundation (Week 1)**
- Deploy M1 (phase-gated access) — restructure file locations
- Deploy M2 (dual-file split) — create MECHANISM-CATALOG.md + METAPHOR-CASE-STUDIES.md
- Deploy M4 (tier vocabulary shift) — rename folders/files

**Result:** Library architecture is anti-rigid by default.

---

**PHASE 2: Procedural Rules (Week 2)**
- Deploy M5 (binary sequential rules) — add to SKILL.md
- Deploy M6 (divergence mandate) — add to SKILL.md
- Deploy M9 (verification gate) — add Phase 3.5 to SKILL.md

**Result:** Skill enforces anti-gravity workflow.

---

**PHASE 3: Framing Layer (Week 3)**
- Deploy M3 (anti-prescription headers) — rewrite all 6 case studies (8 once CD added)
- Deploy M12 (jazz catalog framing) — rewrite library introduction
- Deploy M7 (forget instruction) — add to Phase 3 introduction

**Result:** All materials reinforce anti-prescription message.

---

**PHASE 4: Enhanced Mechanisms (Week 4)**
- Deploy M10 (diversity tracking) — create METAPHOR-REGISTRY.md, assign Weaver maintenance
- Deploy M8 (3-example sampling) — update Weaver protocol
- Deploy M11 (two-phase prompting) — update build workflow

**Result:** Full anti-gravity system operational.

---

**PHASE 5: Empirical Validation (Week 5-6)**
- Run Q1-Q5 tests (see Part 8)
- Measure: novelty, quality, pattern-matching frequency, compliance rates
- Refine mechanisms based on data

**Result:** Evidence-based system optimization.

---

## CONCLUSION

### The Core Principle

**Pattern gravity is defeated through ARCHITECTURAL POSITIONING, not information restriction.**

Agents can have access to:
- 45 tokens
- 18 components
- 12 mechanisms
- 100+ patterns

And STILL generate fresh compositions IF:
1. **TIMING:** Patterns consulted AFTER metaphor derivation (M1, M5, M11)
2. **FRAMING:** Patterns positioned as gallery, not menu (M3, M12)
3. **SEPARATION:** Mechanisms (extractable) split from metaphors (inspirational) (M2)
4. **ENFORCEMENT:** Divergence required and verified (M6, M9)
5. **VISIBILITY:** Repetition tracked and visible (M10)

### The Jazz Model is the Answer

Charlie Parker practiced 15 hours a day, transcribed 100+ solos, learned 200+ standards—then "forgot all that and just wailed."

The library should work the same way:
- **Learn the patterns** (study the case studies)
- **Extract mechanisms** (border-weight, compression, 2-zone DNA)
- **Forget during creation** (Phase 1-3 library-blind)
- **Apply to new material** (Phase 4 mechanism consultation)

### Implementation Priority

**ESSENTIAL (deploy first):**
- M1: Phase-gated library access
- M2: Dual-file split (mechanisms vs metaphors)
- M5: Binary sequential rules
- M6: Divergence mandate

**ROBUST (deploy second):**
- M3: Anti-prescription headers
- M9: Verification gate
- M12: Jazz catalog framing

**ENHANCED (deploy third):**
- M8: 3-example sampling
- M10: Diversity tracking
- M11: Two-phase prompting

**OPTIONAL (cosmetic but meaningful):**
- M4: Tier vocabulary shift
- M7: Forget instruction

### Final Word

The mechanisms designed here don't fight volume—they USE volume. As the library grows from 8 to 30 to 100+ patterns:
- M6 (divergence mandate) gets STRONGER (convergence becomes statistically unlikely)
- M8 (3-example sampling) gets BETTER (more patterns = better relevance filtering)
- M10 (diversity tracking) becomes ESSENTIAL (prevents invisible repetition)
- M12 (jazz framing) becomes AUTHENTIC ("200+ standards" makes sense at scale)

**The system scales WITH the library, not AGAINST it.**

Pattern gravity is not inevitable. It's a design choice. These 12 mechanisms are the concrete implementation of anti-gravity architecture.

---

**END OF MECHANISM DESIGN**
