# How File 42 Becomes Part of Pipeline v2: Integration Analysis

**Author:** file42-integrator (Opus 4.6)
**Date:** 2026-02-18
**Task:** Map overlap between TC SKILL.md and File 42, propose integration path.

---

## 1. DOCUMENT PROFILES

### TC SKILL.md (~1,878 lines)
- **Purpose:** End-to-end content-to-layout pipeline invoked via `/tension-composition`
- **Structure:** 6 phases (0-5) + gates + appendices
- **Strength:** Content analysis and metaphor derivation (Phases 0-3)
- **Weakness:** Building phases (4-5) are framework + lookup tables, NOT sequenced CSS recipes
- **Format:** THINKING document -- explains WHY, enumerates options, provides decision trees

### File 42 (~1,746 lines)
- **Purpose:** Content-agnostic page-building pipeline for a single builder agent
- **Structure:** 9 phases (0-8) + team architecture + conviction layer + appendices
- **Strength:** Building execution with exact CSS values and perception checks (Phases 1-7)
- **Weakness:** Content analysis is shallow (Phase 0 is zone architecture, not tension/metaphor)
- **Format:** RECIPE document -- tells WHAT TO DO, gives exact values, sequenced steps

---

## 2. PHASE-BY-PHASE OVERLAP MAP

### Phase 0: Content Analysis

| Dimension | TC SKILL.md (Phase 0) | File 42 (Phase 0) | Overlap |
|-----------|----------------------|-------------------|---------|
| Content type classification | Step 0A: Prose/Mixed/Visual/Self-referential | Step 0.2: Word count + element inventory | PARTIAL -- TC classifies by composition fitness; File 42 classifies by structure |
| Scope assessment | Step 0B: MICRO/SHORT/STANDARD/LONG/MASSIVE | Step 0.3: Word count -> zone count table | PARTIAL -- TC gates pipeline complexity; File 42 gates spatial structure |
| Section identification | Step 0C: Natural sections by heading/topic/mode | Step 0.5: Section architecture with layout shapes | COMPLEMENTARY -- TC identifies sections semantically; File 42 assigns layout shapes |
| Tier classification | Step 0D: Floor/Middle/Ceiling/Flagship routing | NOT PRESENT (assumes Middle+ by default) | TC UNIQUE -- File 42 has no tier routing |
| Library prohibition | Step 0E: Cannot read case studies in Phases 0-3 | NOT PRESENT | TC UNIQUE -- File 42 is content-agnostic, no library concern |
| Zone architecture | NOT PRESENT at this level of detail | Steps 0.3-0.6: Zone count, semantics, transitions | FILE 42 UNIQUE -- TC defers spatial planning to Phase 4 |

**Verdict:** LOW overlap, HIGH complementarity. TC's Phase 0 asks "what KIND of content is this and which pipeline path?" File 42's Phase 0 asks "what is the spatial skeleton for this content?" They answer different questions.

### Phases 1-3: Questioning, Tensions, Metaphor (TC) vs. N/A (File 42)

| Dimension | TC SKILL.md | File 42 |
|-----------|------------|---------|
| Multi-axis questioning | Phase 1: 14 possible axes, core 4 + extended 5 + conditional 5 | NOT PRESENT |
| Tension derivation | Phase 2: Side A vs Side B, Addition Test, Richness Formula | NOT PRESENT |
| Metaphor collapse | Phase 3: Search query, domain menu, composite scoring, 6-criterion rubric | NOT PRESENT |
| Metaphor commitment | Phase 3.5: Lock-in gate, divergence verification | NOT PRESENT |

**Verdict:** ZERO overlap. TC Phases 1-3 are entirely unique content -- the intellectual core of tension-composition. File 42 explicitly states it is "content-agnostic" and defers metaphor work to the TC skill (Part 4, Section 4.3: "For Track 2 pages, invoke the tension-composition skill Phases 0-3 BLIND").

### Phase 4: Building (TC) vs. Phases 1-7 (File 42)

This is where the critical overlap and divergence live.

| Building Step | TC SKILL.md (Phase 4) | File 42 (Phases 1-7) | Relationship |
|---------------|----------------------|---------------------|-------------|
| Perceptual guardrails | Phase 4.0: Container, typography, compression floors | Embedded in every phase's exact CSS values | OVERLAPPING -- TC states guardrails as rules; File 42 bakes them into values |
| Mechanism selection | Phase 4.0-4.1: Read mechanism catalog, 5-category extraction | NOT PRESENT (mechanisms implicit in CSS values) | TC UNIQUE -- File 42 doesn't select mechanisms; it prescribes CSS |
| CSS translation | Phase 4.2: Translation grammar lookup table (abstract) | Phases 2-6: Exact CSS blocks with specific selectors + values | SUPERSEDED -- File 42's concrete CSS replaces TC's abstract lookup |
| Coherence checking | Phase 4.3: 5 coherence rules (C-1 through C-5) | Phase 8E: Multi-coherence verification table | OVERLAPPING -- both check coherence; File 42's is more concrete (count channels) |
| Component inventory | Phase 4.4: Tier 2 vs Tier 3 boundary test | Phase 1, Steps 1.3-1.5: Standard component markup with exact class names | SUPERSEDED -- File 42 tells you WHICH components; TC tells you HOW TO DECIDE |
| Transition grammar | Phase 4.6: 5x5 transition type matrix | Phase 0.6 + Phase 4.2: 3 transition types with exact CSS + stacking arithmetic | SUPERSEDED -- File 42's transition model is simpler (3 types) and has exact values |
| Fractal consistency | Phase 4.7: Scale coverage table, tier-calibrated minimums | Phase 8C: Scale 5 verification (5 levels checked) | OVERLAPPING -- TC is a gate; File 42 is a verification |
| Landmark completeness | Phase 4.7B: Header/main/footer gate | Phase 1: Complete HTML skeleton with header, main, footer | OVERLAPPING -- TC checks for presence; File 42 provides the HTML |
| Tokenization | Phase 4.9: Token compliance self-check (>= 80%) | Phase 2: Uses var() references from the start | OVERLAPPING -- TC retroactively checks; File 42 builds with tokens |
| HTML skeleton | NOT PRESENT as separate step | Phase 1: Complete HTML structure (~170 lines of templates) | FILE 42 UNIQUE |
| Zone backgrounds | Part of Phase 4 translation grammar (abstract) | Phase 3: Complete zone system with exact hex values + warm test | FILE 42 UNIQUE at this specificity |
| Typography zones | Part of Phase 4 translation grammar (abstract) | Phase 5: Zone-specific paragraph + heading typography with exact values | FILE 42 UNIQUE at this specificity |
| Element richness | NOT PRESENT | Phase 6: Inline code, links, hover, selection, code blocks, drop cap | FILE 42 UNIQUE |
| Accessibility | NOT PRESENT | Phase 7: WCAG 2.1 AA compliance, responsive breakpoints, print | FILE 42 UNIQUE |

**Verdict:** MASSIVE divergence in approach. TC's Phase 4 is a DECISION FRAMEWORK (how to choose mechanisms, translate metaphor properties, verify coherence). File 42's Phases 1-7 are an EXECUTION RECIPE (what CSS to write, in what order, with what values). They serve fundamentally different purposes at the same pipeline stage.

### Phase 5: Output/Verification (TC) vs. Phase 8 (File 42)

| Dimension | TC SKILL.md (Phase 5) | File 42 (Phase 8) |
|-----------|----------------------|-------------------|
| Divergence verification | Phase 5: Compare to case studies, verify novelty | NOT PRESENT (content-agnostic, no novelty concern) |
| Thought process output | Output A: Full derivation document | NOT PRESENT |
| Perception verification | NOT PRESENT at this detail | Phase 8A: Perception threshold table for every property |
| Void prevention | NOT PRESENT | Phase 8B: Scroll-through void check, 120px cap |
| Scale verification | NOT PRESENT at this detail | Phase 8C: 5-scale checklist |
| Soul verification | Implicit in Phase 4 guardrails | Phase 8D: 7-item soul checklist |
| Multi-coherence | Phase 4.3 coherence rules | Phase 8E: Channel count at zone boundaries |
| Accessibility | NOT PRESENT | Phase 8F: 8-item WCAG checklist |
| Gestalt test | NOT PRESENT | Phase 8G: 4-question subjective perception test |

**Verdict:** LOW overlap. TC's Phase 5 is about NOVELTY verification (is this metaphor original?). File 42's Phase 8 is about QUALITY verification (does the page look designed?). Both are necessary; neither replaces the other.

---

## 3. THE FUNDAMENTAL DISTINCTION

TC SKILL.md is a **THINKING pipeline** -- it tells you HOW TO DECIDE what to build.
File 42 is a **BUILDING pipeline** -- it tells you WHAT TO BUILD and in what order.

They operate at different levels of abstraction:

```
TC SKILL.md:    "What metaphor resolves this tension?" -> "What mechanisms express this metaphor?"
                 (CONCEPTUAL -> STRATEGIC)

File 42:        "Write this CSS block" -> "Check this perception threshold"
                 (TACTICAL -> OPERATIONAL)
```

The gap between them is the TRANSLATION step: converting TC's mechanism selection decisions into File 42's concrete CSS execution. Currently, TC produces a mechanism mapping table (abstract) and File 42 provides generic zone CSS (concrete). Neither handles the metaphor-to-CSS translation for specific content.

---

## 4. INTEGRATION OPTIONS

### Option A: File 42 REPLACES TC's building phases (4-5)

**How it works:** TC runs Phases 0-3 (content analysis, questioning, tension, metaphor). At Phase 3.5 lock-in, TC hands off to File 42 which executes Phases 0-8 as the building pipeline. TC's current Phases 4-5 are deleted.

**Pros:**
- Clean separation of concerns: TC = THINK, File 42 = BUILD
- File 42's recipe format is PROVEN to produce PA-05 2.5-4/4 results
- Eliminates the abstract lookup tables in TC Phase 4 that never translated to CSS quality
- Preserves File 42's exact CSS values, which are its core strength
- TC's Phase 4.0 perceptual guardrails survive inside File 42's execution phases
- Metaphor integration is already designed (File 42 Part 4, Section 4.3 describes how)

**Cons:**
- TC's mechanism selection logic (Phase 4.0-4.1) is lost -- File 42 doesn't select mechanisms, it prescribes CSS
- TC's 5-category extraction taxonomy (Spatial/Temporal/Material/Behavioral/Relational) vanishes
- TC's coherence checking rules (C-1 through C-5) are more conceptually rigorous than File 42's channel-count check
- TC's pacing prediction heuristic (Step 4.2B) is lost
- TC's rhythm variation requirement (Step 4.2C) is not in File 42 (though File 42 enforces it through transition type assignment in Phase 0)
- The HANDOFF point is unclear: TC produces a metaphor + isomorphism table. File 42 expects zone semantics. Who translates metaphor -> zones?

**What gets lost:**
- TC Phase 4.0-4.1: Mechanism catalog reading protocol, 5-category deployment requirement, justification requirement
- TC Phase 4.2: Translation grammar (abstract but useful for Ceiling+ pages)
- TC Phase 4.2B-4.2C: Pacing prediction and rhythm variation as explicit requirements
- TC Phase 4.3: Coherence rules C-1 through C-5 (File 42 has a weaker version)
- TC Phase 4.4-4.5: Component tiering and adapt-vs-invent decision framework
- TC Phase 4.6: 5x5 transition grammar matrix (File 42 simplifies to 3 types)
- TC Phase 5: Divergence verification against case studies

**What gets gained:**
- Every CSS value is explicit and sequenced
- Every phase ends with a perception check
- Void prevention arithmetic is embedded
- Accessibility and responsive design are included
- Team architecture recommendations are included
- The recipe format that empirically outperforms checklists

**Metaphor translation gap:** Requires a new "Phase 3.7" in TC that converts the metaphor isomorphism table into File 42's zone semantics (temperature, density, voice, weight). This is ~50 lines of new content.

### Option B: File 42 becomes a SEPARATE skill, TC invokes it for building

**How it works:** File 42 becomes `~/.claude/skills/page-building/SKILL.md`. TC's Phase 4 is replaced with: "Invoke the page-building skill with: metaphor=[X], zone-plan=[Y], mechanism-selection=[Z]." TC keeps its Phases 0-3 + 5 intact.

**Pros:**
- Maximum modularity: each skill does ONE thing well
- File 42 can be invoked WITHOUT TC (for content-agnostic pages, Track 1 assembly, remediation)
- TC's intellectual content (questioning, tensions, metaphor) stays in one place
- File 42 can evolve independently (new CSS values, new components) without touching TC
- Skill invocation is already a pattern users understand (`/tension-composition`, `/page-building`)
- The 42-OPERATIONAL-RECIPE.md CLAUDE.md already says "For Track 2 pages, invoke the tension-composition skill BEFORE reading case studies" -- this reverses the direction cleanly

**Cons:**
- Two skills must coordinate: TC produces output that page-building consumes
- The interface contract between them must be precisely defined (what TC outputs, what page-building expects)
- Users must invoke two skills for Ceiling+ pages (or TC must auto-invoke page-building)
- Some content is duplicated: both skills need soul constraints, design system tokens, perception thresholds
- TC's mechanism selection logic (Phase 4.0-4.1) still has no home -- it's too building-specific for TC, too abstract for File 42
- Adds a new file to maintain

**What gets lost:** Nothing -- all content survives in one skill or the other.

**What gets gained:**
- File 42 works standalone for the ~50% of pages that are Middle-tier (no metaphor needed)
- TC stays focused on its core value: tension derivation and metaphor collapse
- Clear separation enables independent testing and iteration

**Interface contract needed:**
```
TC OUTPUT -> PAGE-BUILDING INPUT:
  tier: Middle | Ceiling | Flagship
  pattern: CRESCENDO | F-PATTERN | BENTO | PULSE (Middle only)
  metaphor: [name] (Ceiling+ only)
  zone_plan: [zone count, zone semantics table from TC -> File 42 Step 0.4]
  mechanism_selection: [per-category deployment from TC Phase 4.0]
  builder_warnings: [W-DEADZONE, W-OVERLABEL, etc. from TC appendix]
  isomorphism_table: [metaphor -> CSS channel mapping from TC Phase 4.1]
```

### Option C: File 42's content gets MERGED into TC SKILL.md (one big file)

**How it works:** TC SKILL.md grows from ~1,878 lines to ~3,000+ lines. File 42's Phases 1-8 replace TC's Phase 4. File 42's team architecture becomes a new appendix. Duplicated content (soul constraints, perception thresholds) is consolidated.

**Pros:**
- Single source of truth: one file, one pipeline, one invocation
- No coordination overhead between skills
- All context available in one read
- Tier routing already exists in TC (Phase 0D) -- File 42's execution phases slot in naturally
- Middle-tier pages would use TC Phase 0 -> Phase 0D routes to Middle -> File 42 Phases 1-8
- Ceiling/Flagship pages would use TC Phases 0-3 -> File 42 Phases 1-8

**Cons:**
- 3,000+ lines is MASSIVE for a skill file -- may exceed practical reading limits
- The 75-line builder visibility problem RECURS: agents can't absorb 3,000 lines
- Mixes THINKING content (Phases 0-3) with EXECUTION content (Phases 1-8) -- the exact pattern the corpus identifies as a failure mode (conviction sandwich)
- Makes File 42 unusable for standalone Track 1/remediation work
- Editing one section risks breaking the other
- The corpus itself warns against this: "the deliberate model" cautions against monolithic documents

**What gets lost:** File 42's standalone utility for content-agnostic building.

**What gets gained:** Single invocation point, no interface contract needed.

**Why this is likely the WORST option:** The corpus's own findings indict large monolithic documents. The master prompt was 963 lines and produced PA-05 1.5/4. The remediation spec was 1,025 lines and produced PA-05 2.5/4. The recipe's success comes partly from FOCUS -- the builder gets building instructions, not thinking instructions. Merging them recreates the conviction sandwich: identity content mixed with execution instructions (File 03, Shift A4).

### Option D: File 42 becomes the CLAUDE.md building protocol (not a skill at all)

**How it works:** File 42's content replaces or extends `design-system/compositional-core/CLAUDE.md` -- the auto-loaded building protocol. It becomes the default "how to build a page" document that any agent reads automatically.

**Pros:**
- Auto-loaded: every agent building a page gets the recipe without explicit skill invocation
- Fits the existing architecture: CLAUDE.md files are navigational/protocol documents
- The building protocol is ALWAYS needed; the TC pipeline is only needed for Ceiling+ pages
- File 42's team architecture section fits naturally in a protocol document
- File 42's "conviction layer" is literally what CLAUDE.md files are for

**Cons:**
- CLAUDE.md files are navigational, not execution specs -- adding 1,700 lines changes the role
- Auto-loading 1,700 lines into every agent context is expensive and may not be needed
- The building protocol CLAUDE.md currently has phase-gated instructions that would need reconciliation
- CLAUDE.md content is harder to version and iterate than a skill file
- Users can't invoke CLAUDE.md explicitly; skills have `/tension-composition` invocation
- Loses the recipe's standalone portability

**What gets lost:** Explicit invocation, portability, clear file boundaries.

**What gets gained:** Automatic availability to every building agent.

---

## 5. RECOMMENDATION

**Option B (SEPARATE SKILL) is the best integration path**, with elements of Option A for TC trimming.

### Rationale

1. **File 42's greatest strength is standalone utility.** It works for Middle-tier pages without TC. It works for remediation. It works for Track 1 assembly with simplified phases. Making it a separate skill preserves this.

2. **TC's greatest strength is intellectual derivation.** Phases 0-3 are the crown jewel -- the tension/metaphor pipeline that no other document provides. Keeping TC focused on this preserves its value.

3. **The recipe format demands isolation.** The corpus's single most validated finding is that recipes work and checklists fail. A recipe's power comes from FOCUS: sequenced steps, exact values, no distractions. Merging the recipe into a 3,000-line document with metaphor theory destroys the recipe property.

4. **The builder visibility problem is real.** The flagship failed partly because the builder saw 13.4% of instructions. A standalone skill that IS the builder's complete input solves this.

5. **The interface contract is well-defined.** TC already produces exactly what File 42 needs: zone semantics, mechanism selections, builder warnings. The handoff is natural.

### Specific Implementation

```
BEFORE (current state):
  TC SKILL.md (1,878 lines) = Phases 0-5 (thinking + building + verification)
  File 42 (1,746 lines) = in ephemeral/, not operational

AFTER (proposed):
  TC SKILL.md (~1,200 lines) = Phases 0-3.5 (content analysis + metaphor derivation)
    - KEEP: Phases 0-3.5 intact (content analysis, questioning, tensions, metaphor)
    - TRIM: Phase 4 reduced to "invoke page-building skill with these inputs"
    - KEEP: Phase 5 divergence verification (novelty check against case studies)
    - TRIM: Appendix builder warnings MOVE to page-building skill
    - TRIM: Perceptual guardrails MOVE to page-building skill (they're execution-layer)

  page-building SKILL.md (~1,800 lines) = File 42, promoted to skill
    - KEEP: All 9 phases, team architecture, conviction layer, appendices
    - ADD: Input contract section (what TC passes, what standalone mode expects)
    - ADD: Tier routing at Phase 0 (from TC's Step 0D, adapted for standalone use)
    - MODIFY: Phase 0 expanded to include TC's content type classification (Step 0A)
    - MODIFY: Part 4.3 (Metaphor Integration) expanded with explicit translation steps

  compositional-core/CLAUDE.md = Updated to reference BOTH skills
    - Track 1: "invoke page-building skill directly"
    - Track 2: "invoke tension-composition skill -> page-building skill"
```

### TC Content That MUST Survive (not in File 42)

These TC sections have no equivalent in File 42 and must be preserved:
1. **Phase 1: Multi-axis questioning** (14 axes, core 4 + extended 5 + conditional 5)
2. **Phase 2: Tension derivation** (Addition Test, Richness Formula, BECAUSE test)
3. **Phase 3: Metaphor collapse** (search query, domain menu, composite scoring, 6-criterion rubric)
4. **Phase 3.5: Commitment gate** (lock-in, divergence check)
5. **Phase 5: Divergence verification** (case study comparison)
6. **Phase 4.0: Mechanism selection logic** (5-category deployment) -- RELOCATE to page-building as optional Ceiling+ enrichment

### TC Content That File 42 SUPERSEDES

These TC sections are replaced by File 42's more concrete versions:
1. **Phase 4.2: Translation grammar** -- File 42 Phases 2-6 provide exact CSS instead of lookup tables
2. **Phase 4.3: Coherence checking** -- File 42 Phase 8E provides channel-count verification
3. **Phase 4.6: Transition grammar** -- File 42 Phase 0.6 + Phase 4.2 provide simpler 3-type model
4. **Phase 4.7: Fractal consistency** -- File 42 Phase 8C provides scale verification
5. **Phase 4.7B: Landmark completeness** -- File 42 Phase 1 builds the landmarks directly
6. **Phase 4.9: Tokenization** -- File 42 Phase 2 uses tokens from the start
7. **Appendix Builder Warnings** -- MOVE to page-building skill (they're builder instructions)
8. **Appendix Builder Guardrails** -- MOVE to page-building skill (they're execution constraints)

### TC Content That Should ENRICH File 42

These TC sections add value that File 42 currently lacks:
1. **Phase 4.0: 5-category mechanism deployment** -- Add as optional enrichment for Ceiling+ builds
2. **Phase 4.2B: Pacing prediction heuristic** -- Add to File 42 Phase 0
3. **Phase 4.2C: Rhythm variation requirement** -- File 42 enforces implicitly through transition types, but making it explicit helps
4. **Phase 4.4-4.5: Adapt-vs-invent decisions** -- Add to File 42 Phase 1 as component selection guidance

---

## 6. THE RECIPE FORMAT MUST BE PRESERVED

The single most important constraint on any integration: **File 42's recipe format is its core value.**

Evidence:
- Middle experiment: 100-line recipe -> PA-05 4/4 DESIGNED
- Flagship experiment: 71-rule checklist -> PA-05 1.5/4 DO NOT SHIP
- Remediation: 1,025-line recipe -> PA-05 1.5 -> 2.5/4

The recipe format means:
- Sequenced steps (Phase 1 before Phase 2 before Phase 3...)
- Exact values ("font-size: 17px", not "use appropriate typography")
- Action verbs ("Set", "Add", "Replace", not "Verify", "Ensure", "Must be")
- Perception checks after every phase (binary: can you SEE the difference?)
- Compliance embedded in values (follow the steps = automatic compliance)

ANY integration that converts File 42's recipes into checklists, frameworks, or decision trees destroys its proven effectiveness. The recipe format is non-negotiable.

---

## 7. OPEN QUESTIONS FOR THE TEAM

1. **Naming:** Should the new skill be `/page-building`, `/build-page`, `/design-page`, or something else?
2. **Auto-invocation:** Should TC automatically invoke page-building after Phase 3.5, or should the user manually invoke it?
3. **Mechanism catalog access:** File 42 doesn't reference the mechanism catalog. Should Ceiling+ builds include a mechanism catalog reading step?
4. **Tier routing location:** TC has tier routing in Phase 0D. File 42 assumes Middle+. Should tier routing live in TC (with routing to different skills) or in the page-building skill itself?
5. **Team architecture:** File 42's Part 2 (team architecture) is operational process, not a skill. Should it live in the skill, the CLAUDE.md protocol, or a separate document?

---

**END OF INTEGRATION ANALYSIS**

**Total: ~350 lines. 7 sections. Every option evaluated with pros/cons/gains/losses. Recommendation: Option B (separate skill) with TC trimming.**
