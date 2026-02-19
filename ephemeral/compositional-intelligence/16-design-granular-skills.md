# Report 16: Granular Operational Skills Architecture

**Agent:** design-granular-skills (Opus)
**Task:** Design micro-skills for compositional layers as alternative to mega-skills
**Input Files Read:** TC SKILL.md (1,898 lines), PA SKILL.md (774 lines), PV2-PIPELINE-DIAGRAM.md (977 lines), mechanism-catalog.md (1,219 lines)

---

## 1. THE CURRENT PROBLEM: MEGA-SKILLS AS COMPRESSION ENGINES

The tension-composition skill is 1,878 lines. The perceptual-auditing skill is 774 lines. Together: 2,652 lines that an agent must absorb before executing.

**What happens in practice:**
- An LLM context window loads TC SKILL.md. At ~27,000 tokens, this consumes 15-25% of the working context before a single line of content analysis begins.
- The skill contains PHILOSOPHY (construction consciousness, jazz real book model), PROCESS (6 phases), GUARDRAILS (perceptual floors), LOOKUP TABLES (domain search menu, mechanism taxonomy), VALIDATION GATES (Addition Test, fractal gate, landmark gate), and BUILDER INSTRUCTIONS (warnings, CSS values).
- A builder agent needs CSS recipes. It gets a 1,878-line treatise on compositional epistemology.
- A planner agent needs questioning frameworks. It gets 400 lines of builder guardrails it will never use.

**The core pathology:** Every agent reads everything. TC is simultaneously:
- A content analysis framework (Phases 0-2: ~275 lines)
- A metaphor derivation engine (Phase 3: ~300 lines)
- A mechanism selection guide (Phase 4.0-4.7: ~500 lines)
- A CSS recipe generator (Phase 4.1-4.6: ~200 lines)
- A verification protocol (Phase 4.7-4.9: ~200 lines)
- A builder instruction manual (Appendix: ~150 lines)
- Philosophical framing and metacognition (~250 lines)

No single agent needs all seven. The planner needs the first three. The builder needs the last four. The validator needs different slices. But today, everyone gets everything.

---

## 2. THE CD-006 COUNTERARGUMENT

Before designing any skill architecture, confront this: **CD-006 scored 39/40 with zero skills.**

CD-006 was built by a single Opus agent that had:
- The design system tokens and prohibitions
- The mechanism catalog
- A human-interactive iteration loop
- Zero formalized tension-composition process
- Zero formalized perceptual audit

This is the strongest possible evidence against skill architecture as a solution. If the best page ever built needed NO skills, then skills might be part of the problem, not the solution.

**However, the question is not "do skills help?" but "can the CD-006 result be REPRODUCED without a human in the loop?"** CD-006 had iterative human feedback. The pipeline aims for fire-and-forget. Skills are the mechanism by which the pipeline substitutes for absent human judgment. The question becomes: can skills substitute for human judgment WITHOUT the information loss that mega-skills cause?

**Hypothesis:** Granular skills preserve more information than mega-skills because each one is short enough to be fully absorbed within a single agent's working context, rather than being skimmed/compressed by attention patterns.

---

## 3. SKILL DECOMPOSITION: THE PROPOSED MICRO-SKILL INVENTORY

### Architecture: 8 Micro-Skills + 1 Orchestrator

**Principle:** Each micro-skill is 50-150 lines, focused on one compositional layer, and produces a specific artifact that the next skill consumes.

---

### `/tension-analyze` (Content Analysis + Tension Derivation)
**Scope:** TC Phases 0-2 only
**Lines:** ~100
**Input:** Raw content markdown
**Output:** `_tension-analysis.md` containing:
  - Content classification (type, scope, sections)
  - Multi-axis questioning results (9 axes with yield ratings)
  - Tension derivation (genuine vs cosmetic, richness scores)
  - Addition Test result (binary: tension exists or not)

**What it DOES NOT include:** Metaphor search, mechanism selection, CSS values, builder instructions, guardrails.

**Why this boundary:** Content analysis is COGNITIVE work (reading, questioning, interpreting). It has zero CSS involvement. The agent doing this needs deep content understanding and zero design system knowledge. Separating it means the content analyst never wastes context on border categories or spacing scales.

---

### `/metaphor-collapse` (Metaphor Derivation + Validation)
**Scope:** TC Phases 3-3.5 only
**Lines:** ~120
**Input:** `_tension-analysis.md` (output of `/tension-analyze`)
**Output:** `_metaphor-commitment.md` containing:
  - Structural property extraction (both sides)
  - Overlap calculation
  - Candidate metaphors with composite scores (Resolution, Isomorphism, Resonance, Risk, Cost)
  - 6-criterion quality rubric score
  - 6 binary rejection checks
  - COMMITTED metaphor with isomorphism table
  - Builder warnings (W-DEADZONE, W-OVERLABEL, etc.)

**What it DOES NOT include:** Content analysis (already done), mechanism catalog access, CSS generation, perceptual guardrails.

**Why this boundary:** Metaphor derivation is CREATIVE work (domain search, structural bridging). It needs the tension analysis as input but not the mechanism catalog (which would bias toward known patterns). The library prohibition (anti-gravity R1) is enforced STRUCTURALLY by this skill boundary -- the metaphor skill simply doesn't include mechanism catalog access.

---

### `/channel-map` (Per-Boundary Channel Specification)
**Scope:** Coherence checking + channel mapping (new -- extracted from TC Phase 4.3 + mechanism catalog transition grammar)
**Lines:** ~80
**Input:** `_metaphor-commitment.md` + mechanism-catalog.md (transition grammar section only)
**Output:** `_channel-map.md` containing:
  - For EACH section boundary: which CSS channels shift and by how much
  - Transition type assignment (HARD CUT / SPACING SHIFT / CHECKPOINT)
  - Multi-channel coherence verification (>=3 channels shift at each major boundary)
  - Background color assignments with >=15 RGB delta verification
  - Pacing risk assessment

**What it DOES NOT include:** Content analysis, metaphor derivation, actual CSS generation, perceptual audit questions.

**Why this boundary:** Channel mapping is the BRIDGE between creative metaphor and concrete CSS. It is the layer that the flagship experiment COMPLETELY LACKED -- the builder went straight from metaphor to CSS without specifying per-boundary channel shifts. This is the most novel skill in the architecture: it exists because the failure analysis identified a missing compositional layer.

---

### `/build-recipe` (Concrete CSS Recipe Generation)
**Scope:** TC Phase 4.1-4.6 + operational-recipe.md content
**Lines:** ~150 (the longest micro-skill, because CSS values are irreducibly specific)
**Input:** `_metaphor-commitment.md` + `_channel-map.md` + mechanism-catalog.md + tokens.css + prohibitions.md
**Output:** `_build-recipe.md` containing:
  - 9-phase sequential CSS recipe (the operational-recipe.md format)
  - Per-zone: exact background hex, font-size, font-weight, letter-spacing, padding, border
  - Per-mechanism: deployment location, CSS property, semantic justification
  - Cascade value table (pre-filled targets, not post-build measurements)
  - Guardrail self-checks embedded in each phase ("Can you SEE...?")

**What it DOES NOT include:** Content analysis, metaphor derivation, channel theory, perceptual audit questions.

**Why this boundary:** Recipe generation is MICROSCOPE work -- converting abstract channel specifications into concrete CSS values. This is what the builder agent actually needs. The builder reads `_build-recipe.md` (150 lines of specific CSS instructions) instead of TC SKILL.md (1,878 lines of everything).

**THIS IS THE KEY INSIGHT:** The builder's 75-line visibility cap in the flagship was caused by the master prompt compressing 1,878 lines down to 75. With micro-skills, the builder gets 150 lines of RECIPE (100% relevant) instead of 75 lines of COMPRESSED EVERYTHING (13.4% relevant). The information density per line INCREASES because irrelevant content is excluded at the source.

---

### `/scale-audit` (Fractal Coherence Verification)
**Scope:** TC Phase 4.7 (fractal gate) + scale definitions from mechanism catalog
**Lines:** ~60
**Input:** Built HTML file + `_build-recipe.md`
**Output:** Scale coverage table (Navigation/Page/Section/Component/Character) with PASS/FAIL per scale

**What it DOES NOT include:** Content analysis, metaphor, CSS generation, perceptual questions.

**Why this boundary:** Scale verification is a binary check that requires examining the built artifact. It asks "does the same pattern appear at multiple zoom levels?" This is distinct from perceptual auditing (which asks "does this LOOK good?") and from channel coherence (which asks "do channels shift together?").

---

### `/channel-coherence` (Multi-Channel Shift Verification)
**Scope:** Verification of >=3 channel simultaneous shift at each boundary
**Lines:** ~60
**Input:** Built HTML file + `_channel-map.md`
**Output:** Boundary-by-boundary verification: which channels shift, by how much, PASS/FAIL per boundary

**What it DOES NOT include:** Content analysis, metaphor, building, perceptual questions.

**Why this boundary:** Channel coherence is the DEFINING quality of ceiling-tier pages. CD-006 had 5+ channels shifting simultaneously at boundaries. The flagship had 0-1. This skill makes the verification EXPLICIT and OPERATIONAL. It can be run as a programmatic gate (via Playwright getComputedStyle) or as an agent verification.

---

### `/material-enrichment` (Material Quality Within Soul Constraints)
**Scope:** Element-level richness deployment (TC Phase 4.4-4.5 + mechanism catalog elements)
**Lines:** ~80
**Input:** Built HTML file + mechanism-catalog.md (element-level mechanisms only)
**Output:** Enrichment recommendations: which elements need hover states, selection styling, code block treatment, table striping, pull-quote distinction

**What it DOES NOT include:** Page-level composition, metaphor, perceptual audit.

**Why this boundary:** Material enrichment is POLISH work that happens after the structural composition is complete. It is the layer between "the architecture is correct" and "every element has been considered." Separating it prevents the common pattern where builders spend their CSS budget on micro-typography (the flagship's 22% CSS budget on imperceptible letter-spacing) instead of structural composition.

---

### `/perceptual-check` (Quick Perceptual Verification)
**Scope:** PA questions PA-01 through PA-05 + void prevention PA-50 through PA-53
**Lines:** ~80
**Input:** Screenshots of built page at 1440px and 768px
**Output:** Cold look verdict (YES/YES WITH RESERVATIONS/NO), top 3 issues, void assessment

**What it DOES NOT include:** Full 48-question PA (that is Mode 3/4 territory), research sovereignty, lock sheets, team orchestration.

**Why this boundary:** The full PA skill (774 lines) includes Mode 1-4 orchestration, team role definitions, information isolation protocols, and detailed scoring rubrics. An embedded quick check needs only 9 questions and a screenshot. This micro-skill replaces the Mode 1 (90-second) audit with a focused, standalone invocation.

---

### `/build-page` (Orchestrator)
**Scope:** PV2 wave orchestration
**Lines:** ~200
**Input:** Content markdown path
**Output:** Finished HTML + PA report + build log

**Invocation chain:**
```
/build-page content.md
    |
    v
Wave 0: /tension-analyze content.md --> _tension-analysis.md
    |
    v
Wave 0: /metaphor-collapse _tension-analysis.md --> _metaphor-commitment.md
    |                                                  |
    |  (Fresh-eyes validation gate: is metaphor        |
    |   STRUCTURAL or ANNOUNCED? Binary check.)        |
    v                                                  v
Wave 0: /channel-map _metaphor-commitment.md --> _channel-map.md
    |
    v
Wave 0: /build-recipe _metaphor-commitment.md + _channel-map.md --> _build-recipe.md
    |
    |  (Handoff gate: 5 binary checks on _build-recipe.md)
    v
Wave 1: Opus Builder reads _build-recipe.md + tokens.css + prohibitions.md +
         mechanism-catalog.md + merged-components.css --> output.html
    |
    v
Wave 2: /scale-audit output.html + /channel-coherence output.html (parallel)
    |   + Programmatic gates (gate-runner.js)
    |   + 9 PA auditors (Mode 4, screenshots pre-captured)
    v
Wave 3: Fix cycle (max 3 iterations)
    |   /material-enrichment output.html (if PA flags element-level issues)
    |   /perceptual-check output.html (quick re-check after fixes)
    v
Output: output.html + _pa-report.md + _build-log.md
```

---

## 4. INFORMATION PRESERVATION ANALYSIS

### The Compression Problem (Quantified)

**Current TC SKILL.md:**
- 1,878 lines loaded into every agent's context
- Planner uses ~575 lines (Phases 0-3) = 30.6% utilization
- Builder uses ~700 lines (Phases 4-5 + Appendix) = 37.3% utilization
- Validator uses ~200 lines (Phase 4.7 gates) = 10.6% utilization
- AVERAGE utilization per agent: 26.2%
- WASTED context per agent: 73.8%

**Micro-skill architecture:**
- Planner loads `/tension-analyze` (100 lines) + `/metaphor-collapse` (120 lines) = 220 lines, 100% relevant
- Builder loads `/build-recipe` (150 lines) + mechanism-catalog excerpts = ~350 lines, ~95% relevant
- Validator loads `/scale-audit` (60 lines) + `/channel-coherence` (60 lines) = 120 lines, 100% relevant
- AVERAGE utilization per agent: ~97%
- WASTED context per agent: ~3%

**Information density improvement:** From 26.2% relevant content to 97% relevant content = **3.7x information density increase per agent.**

### The "Just as Good as Words" Challenge

Even micro-skills are text. Decomposition creates MORE text across MORE files. Does this actually help?

**Yes, but for a subtle reason.** The problem is not total text volume -- it is text volume PER CONTEXT WINDOW. The flagship builder had 75 lines of instructions because the master prompt compressed 1,878 lines into a builder-relevant slice. With micro-skills:

- The PLANNER's context window has 220 lines of 100% relevant content (not 1,878 lines of 26% relevant content)
- The BUILDER's context window has 350 lines of 95% relevant content (not 75 lines of compressed everything)
- The VALIDATOR's context window has 120 lines of 100% relevant content (not 774 lines of full PA protocol)

**The total text across all files is LARGER (~750 lines total vs 1,878 for TC). But the text PER AGENT is SMALLER AND MORE RELEVANT.** This is the same insight as the "per-agent memory with role-specific playbooks" recommendation from the flagship retrospective -- but implemented as separate skill files rather than prompt sections.

### What Gets Lost in Decomposition

**Cross-phase coherence signals.** In the monolithic TC skill, the metaphor derivation section can reference the mechanism catalog section, creating implicit coherence. In micro-skills, `/metaphor-collapse` cannot reference mechanisms (by design -- this prevents pattern-matching). The risk is that the metaphor agent derives a metaphor that the mechanism catalog cannot express.

**Mitigation:** The `/build-recipe` skill receives BOTH the metaphor commitment AND the mechanism catalog. It is the integration point where metaphor meets mechanisms. If the metaphor is inexpressible, `/build-recipe` flags the conflict and the orchestrator routes back to `/metaphor-collapse` with constraints.

**Philosophical framing.** The "construction consciousness" framing (you are CONSTRUCTING, not DISCOVERING) is distributed across agents rather than being a single preamble. Each micro-skill needs its own 2-3 line version of this framing, not the full 250-line metacognitive section.

**Mitigation:** Each micro-skill includes a 3-line "MINDSET" header. For `/tension-analyze`: "You are constructing an interpretation of this content, not discovering its true nature. Your axes shape what you find." For `/build-recipe`: "You are writing a concrete CSS recipe, not a design philosophy. Every line must specify a CSS property with an exact value."

---

## 5. INVOCATION CHAIN DESIGN

### Sequential with File-Bus (Recommended)

Each micro-skill outputs a markdown artifact. The next skill reads it. The orchestrator (`/build-page`) manages the sequence.

```
/tension-analyze --> _tension-analysis.md --> /metaphor-collapse
/metaphor-collapse --> _metaphor-commitment.md --> /channel-map
/channel-map --> _channel-map.md --> /build-recipe
/build-recipe --> _build-recipe.md --> [Opus Builder Agent]
```

**Why sequential:** Each phase depends on the previous phase's output. Parallel execution is not possible for the planning phases (Waves 0-0.9). Parallel execution IS used for verification (Wave 2): `/scale-audit`, `/channel-coherence`, and 9 PA auditors all run simultaneously.

**Why file-bus:** Skills cannot directly invoke each other in the Claude Code architecture. Each skill produces a file; the orchestrator reads the file and invokes the next skill. This is the same pattern that the Middle-tier experiment used successfully (flat file-bus topology, 35 min execution).

### Orchestrator Calls Skills, Not Skills Calling Skills

The orchestrator (`/build-page`) is the ONLY skill that invokes other skills. Individual micro-skills are stateless -- they read input files, produce output files, and terminate. They do not know about other skills. This prevents:
- Circular invocation (skill A calls skill B calls skill A)
- Context pollution (skill A's framing leaking into skill B's context)
- Unpredictable ordering (skills calling each other in arbitrary sequences)

---

## 6. PRACTICAL ARCHITECTURE SUMMARY

| Skill | Lines | Input | Output | PV2 Wave |
|-------|-------|-------|--------|----------|
| `/tension-analyze` | ~100 | content.md | _tension-analysis.md | 0 |
| `/metaphor-collapse` | ~120 | _tension-analysis.md | _metaphor-commitment.md | 0 |
| `/channel-map` | ~80 | _metaphor-commitment.md | _channel-map.md | 0 |
| `/build-recipe` | ~150 | _metaphor-commitment.md + _channel-map.md | _build-recipe.md | 0 |
| `/scale-audit` | ~60 | output.html + _build-recipe.md | scale-report.md | 2 |
| `/channel-coherence` | ~60 | output.html + _channel-map.md | coherence-report.md | 2 |
| `/material-enrichment` | ~80 | output.html + mechanism-catalog.md | enrichment-recs.md | 3 |
| `/perceptual-check` | ~80 | screenshots | pa-quick-report.md | 2/3 |
| `/build-page` | ~200 | content.md | output.html + reports | all |
| **TOTAL** | **~930** | | | |

**Comparison:**
- Current: 2,652 lines (TC 1,878 + PA 774) loaded monolithically
- Proposed: 930 lines total, max ~350 loaded per agent context
- **Per-agent context reduction: 75-87%**

---

## 7. CRITICAL OPEN QUESTIONS

### Q1: Does decomposition actually improve output quality, or just reduce context waste?

Context waste reduction is necessary but not sufficient. The flagship failed not because agents couldn't read the skill, but because compositional intelligence didn't reach the CSS-writing agent. Micro-skills solve the routing problem (each agent gets only relevant content) but may not solve the COMPOSITIONAL FLUENCY problem (the builder still needs to make creative CSS decisions).

**Test:** Run the same content through monolithic TC vs micro-skill chain. Compare PA-05 scores. If micro-skills produce >= same score with less compute, they win. If monolithic TC produces higher scores (because cross-phase coherence matters more than per-agent relevance), micro-skills lose.

### Q2: Is `/channel-map` the right new skill, or is it creating process where intuition should live?

CD-006 had no channel map. The Opus builder intuitively created 5+ channel shifts at boundaries. The channel map formalizes what fluent builders do naturally. For Opus builders, it may be unnecessary overhead. For Sonnet builders, it may be the difference between 0 channel shifts and 3+.

**Decision criterion:** If the pipeline uses Opus builders exclusively (as PV2 mandates), `/channel-map` may be overhead. If the pipeline ever needs Sonnet builders for cost reasons, `/channel-map` becomes essential.

### Q3: How does the FLAT MODE path work with micro-skills?

When the Addition Test in `/tension-analyze` yields NO TENSION, the full metaphor derivation chain is skipped. The orchestrator should route directly from `/tension-analyze` to `/build-recipe` with a simplified pattern-based input (CRESCENDO/F-PATTERN/BENTO/PULSE) instead of a metaphor commitment.

**Implication:** `/build-recipe` needs two input modes: metaphor-driven (with `_metaphor-commitment.md` + `_channel-map.md`) and pattern-driven (with `_tension-analysis.md` pattern selection only). This is ~20 additional lines in `/build-recipe`.

### Q4: What about the PA skill?

The PA skill (774 lines) is already better structured than TC -- it has clear Mode 1/2/3/4 divisions with specific team compositions. The proposed `/perceptual-check` extracts Mode 1 (90-second embedded audit) as a standalone micro-skill. The full Mode 3/4 PA remains as a monolithic skill invoked by the orchestrator for Wave 2 verification.

**Rationale:** The PA skill's value is in its team orchestration protocols (9-auditor Mode 4). Decomposing this into micro-skills would lose the coordinated multi-perspective audit that is its primary value. Better to keep PA monolithic and extract only the quick-check mode.

### Q5: Should skills be files or inline prompts?

Currently, skills are SKILL.md files in `~/.claude/skills/`. Micro-skills could be:
- **A. Separate SKILL.md files** (9 files in `~/.claude/skills/`)
- **B. Sections within the orchestrator** (all micro-skill content in `/build-page`'s SKILL.md)
- **C. Generated dynamically** (orchestrator writes per-agent prompts based on templates)

**Recommendation: Option A (separate files).** Separate files enable independent iteration (change `/channel-map` without touching other skills), clear versioning, and prevent the orchestrator from becoming another mega-skill. Option C is theoretically elegant but adds runtime complexity and makes debugging harder.

---

## 8. THE ANSWER TO "CD-006 HAD NO SKILLS AT ALL"

CD-006 proves that a fluent Opus builder with the right reference files and iterative human feedback can produce exceptional output without formalized skills.

The micro-skill architecture is not trying to replicate CD-006. It is trying to replicate CD-006's INFORMATION ROUTING in a fire-and-forget context:

| CD-006 | Micro-Skills |
|--------|-------------|
| Human iteratively provided feedback | `/perceptual-check` provides automated feedback |
| Builder saw the full content | `/tension-analyze` ensures content is deeply understood |
| Builder intuitively derived a metaphor | `/metaphor-collapse` formalizes the derivation |
| Builder intuitively mapped channels | `/channel-map` makes channel mapping explicit |
| Builder received mechanism catalog directly | `/build-recipe` routes mechanism catalog to builder |
| Human caught missing elements | `/scale-audit` + `/channel-coherence` catch gaps |

**The micro-skill architecture is a FORMALIZATION of what CD-006's human-builder loop did naturally.** It succeeds if the formalization preserves the information that reached the builder. It fails if the formalization adds bureaucracy without preserving information.

---

## 9. RECOMMENDATIONS

1. **BUILD the 4 planning micro-skills first:** `/tension-analyze`, `/metaphor-collapse`, `/channel-map`, `/build-recipe`. These are the highest-leverage decomposition because they directly address the builder visibility cap (75 lines -> 350 lines, all relevant).

2. **KEEP PA monolithic for Mode 3/4.** Extract only `/perceptual-check` (Mode 1 equivalent) as a micro-skill.

3. **BUILD `/channel-map` as the most novel skill.** This is the compositional layer that was COMPLETELY ABSENT in both the master prompt and the flagship experiment. It is the formalization of what CD-006's builder did intuitively.

4. **TEST on RESEARCH-SYNTHESIS content.** Run micro-skill chain vs monolithic TC on the same content. Compare PA-05 scores, build time, and builder context utilization.

5. **ITERATE based on the test.** If micro-skills produce >= 3/4 PA-05 on first run, the architecture works. If they produce < 3/4, investigate which micro-skill's output was insufficient.

6. **DO NOT decompose further than 9 skills.** More granularity = more file-bus overhead = more context switches. 9 skills is the sweet spot between monolithic compression and excessive fragmentation.

---

## 10. INTEGRATION WITH PV2

The micro-skill architecture maps directly onto PV2's wave structure:

| PV2 Wave | Micro-Skills Used | Agent | Time |
|----------|-------------------|-------|------|
| Wave 0 | `/tension-analyze` + `/metaphor-collapse` | TC Planner (Opus) | 30-60 min |
| Wave 0.5 | Fresh-eyes metaphor validation (not a skill -- binary check by orchestrator) | Fresh-eyes Opus | 5-10 min |
| Wave 0.9 | Handoff gate (not a skill -- orchestrator parses `_build-recipe.md`) | Orchestrator | 1 min |
| Wave 0 (parallel with 0.5) | `/channel-map` + `/build-recipe` | Channel/Recipe Opus | 15-30 min |
| Wave 1 | None (builder reads `_build-recipe.md` directly) | Opus Builder | 90-150 min |
| Wave 2 | `/scale-audit` + `/channel-coherence` + PA Mode 4 | Multiple agents | 30-45 min |
| Wave 3 | `/material-enrichment` + `/perceptual-check` | Fix agents | 30-60 min |

**Total pipeline time:** Same as PV2 (2-4 hours). Micro-skills add ~15-30 min to Wave 0 (channel-map + build-recipe generation) but this is offset by the builder receiving a focused recipe instead of needing to parse a mega-skill.

---

**END REPORT 16**
