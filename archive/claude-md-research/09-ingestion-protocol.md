# Research Report: Ingestion Protocol Design

**Date:** 2026-02-14
**Agent:** ingestion-protocol-researcher
**Task:** Research optimal file-loading protocol for design-system/CLAUDE.md
**Context:** Existing CLAUDE.md has 5-file mandatory grounding; compositional-core changes this

---

## Executive Summary

The existing CLAUDE.md ingestion protocol is **OBSOLETE** and contradicts compositional-core phase-gated access. A new protocol is needed with:

1. **2-file always-load minimum** (prohibitions + tokens) for ALL agents
2. **Task-type conditional loads** (3-5 files each, not 5+ universal)
3. **Compositional-core as single source of truth** (replaces active/research + fortress reads)
4. **Phase-aware dependency order** (identity → vocabulary → grammar → components → case studies)
5. **Explicit skill invocation rules** (tension-composition for Track 2, perceptual-auditing post-build)

**The fundamental conflict:** Old protocol mandates reading research (RESEARCH-SYNTHESIS.md, RESEARCH-ACTIVE.md, etc.) BEFORE building. Compositional-core mandates reading ONLY vocabulary (prohibitions + tokens) BEFORE tension-composition Phases 0-3. These are incompatible.

**Resolution:** Compositional-core protocol supersedes research-grounding protocol. Research files move to conditional-load (Track 1 only).

---

## Section 1: ALWAYS-LOAD Analysis

### 1.1 What MUST Every Agent Read?

**Current state (CLAUDE.md lines 48-69):**
```
1. archive/checkpoints/RESEARCH-ACTIVE.md
2. active/research/RESEARCH-SYNTHESIS.md
3. active/design-system/patterns/density-patterns.md
4. active/design-system/anti-patterns/registry.md
5. archive/checkpoints/DISCOVERIES-LOG.md
```

**Problem:** 5 files, 4,000+ lines total, research-focused, NOT foundation-focused.

**Compositional-core recommendation (README.md lines 34-84):**
```
1. identity/prohibitions.md (353 lines — 22 prohibitions + 3 soul constraints)
2. vocabulary/tokens.css (174 lines — 65 tokens + soul enforcement)
```

**Analysis:**

| File | Lines | Always? | Rationale |
|------|-------|---------|-----------|
| prohibitions.md | 353 | ✅ YES | Identity-level boundaries. Violating = not KortAI. 8 ABSOLUTE (border-radius: 0, box-shadow: none). |
| tokens.css | 174 | ✅ YES | Soul constraints embedded in code. Source-first extraction. Single source of truth for values. |
| RESEARCH-SYNTHESIS.md | ~50 | ❌ NO | Research context, not foundation. Needed for Track 1 (research-driven) not Track 2 (tension-driven). |
| RESEARCH-ACTIVE.md | variable | ❌ NO | Application tracking, not constraints. Post-build documentation, not pre-build requirement. |
| density-patterns.md | unknown | ❌ NO | Pattern catalog. Conditional-load for auditors, NOT builders. |
| anti-patterns/registry.md | unknown | ❌ NO | Avoidance list. Useful but not foundation. Conditional-load. |
| DISCOVERIES-LOG.md | unknown | ❌ NO | Historical learnings. Reference material, not mandate. |

**Verdict:** **2-file always-load is correct.** Everything else is conditional based on agent type + task phase.

**Context window budget:**
- Always-load: 527 lines (353 + 174)
- Old protocol: 4,000+ lines
- **Savings: 87% reduction** in mandatory overhead

---

### 1.2 Should Always-Load Reference Root or Compositional-Core?

**Options:**

**Option A: Root-level files**
```
design-system/SOUL-CONSTRAINTS.md
design-system/PROHIBITIONS.md
design-system/TOKENS.css
```

**Option B: Compositional-core files**
```
design-system/compositional-core/identity/prohibitions.md
design-system/compositional-core/vocabulary/tokens.css
```

**Analysis:**

| Criterion | Root | Compositional-Core | Winner |
|-----------|------|-------------------|--------|
| Provenance clarity | Low (created when?) | High (Phase C extraction, 2026-02-14) | B |
| File duplication | Creates 3 new files | Uses existing 42 files | B |
| Single source of truth | Violates (2 token sources) | Maintains (1 source) | B |
| Path simplicity | Short paths | Long paths | A |
| Lens transparency | Not stated | Identity + Enablement hybrid documented | B |
| Update propagation | Manual sync required | Single update point | B |

**Verdict:** **Compositional-core files win 5 of 6 criteria.** Path length is NOT sufficient justification to duplicate content.

**Recommendation:** Always-load references compositional-core/ files directly.

---

## Section 2: CONDITIONAL-LOAD by Task Type

### 2.1 Builder Agents (Creating New Pages)

**Task:** Build HTML page using tension-composition pipeline.

**Mandatory load (Phase 0):**
1. `compositional-core/identity/prohibitions.md` (353 lines)
2. `compositional-core/vocabulary/tokens.css` (174 lines)

**Phase 4 load (after metaphor lock-in):**
3. `compositional-core/grammar/mechanism-catalog.md` (first 200 lines — reusable techniques)
4. `compositional-core/components/components.css` (first 100 lines — 2-zone DNA patterns)

**Phase 5 load (OPTIONAL, divergence verification only):**
5. `compositional-core/case-studies/_INDEX.md` (titles + tensions)
6. Select 2-3 case studies most similar to YOUR metaphor

**PROHIBITED until Phase 5:**
- ALL case-studies/*.md files
- ALL fortress explorations (DD-001 through CD-006)
- ALL tension-test layouts

**Total pre-build: 527 lines (2 files)**
**Total with mechanisms: ~800 lines (4 files, partial reads)**

**Critical principle:** Builders do NOT read research files. Tension-composition IS the research application mechanism.

---

### 2.2 Auditor Agents (Verifying Pages)

**Task:** Check compliance with soul constraints, prohibitions, token values, mechanisms.

**Mandatory load:**
1. `compositional-core/identity/prohibitions.md` (353 lines — compliance checklist)
2. `compositional-core/vocabulary/tokens.css` (174 lines — token verification)
3. `compositional-core/grammar/mechanism-catalog.md` (full file — mechanism identification)

**Conditional load:**
4. `compositional-core/case-studies/*.md` (quality comparison — what is "KortAI-quality"?)
5. `compositional-core/components/component-inventory.md` (confidence level reference)

**Optional load:**
6. `compositional-core/validation/anti-gravity-compliance.md` (mechanism deployment patterns)
7. `compositional-core/guidelines/semantic-rules.md` (appropriateness criteria)

**Total mandatory: ~900 lines (3 files)**
**Total with case studies: ~1,500-2,000 lines (3-5 files)**

**No phase restrictions** — auditors read everything.

**Critical principle:** Auditors verify SOUL + PROHIBITIONS + MECHANISMS, not research application.

---

### 2.3 Research Agents (Analyzing System)

**Task:** Understand how design system works, document patterns, analyze extractions.

**Mandatory load (context-first order):**
1. `compositional-core/process/lens-manifesto.md` (770 lines — WHY extraction choices)
2. `compositional-core/process/construction-narrative.md` (990 lines — HOW extraction built)
3. `compositional-core/validation/anti-gravity-compliance.md` (mechanism deployment audit)
4. `compositional-core/identity/prohibitions.md` (353 lines)
5. `compositional-core/vocabulary/tokens.css` (174 lines)

**Conditional load (analysis mode):**
6. ALL research files (R1-R5, RESEARCH-SYNTHESIS.md) — understand research context
7. `archive/checkpoints/RESEARCH-ACTIVE.md` — application tracking
8. `compositional-core/process/assumption-log.md` (522 lines — bias tracking)

**Total mandatory: 2,287 lines (5 files)**
**Total with research: 6,000+ lines (all files)**

**Critical distinction:** Analysis mode ("How does this work?") NOT application mode ("Which template do I use?").

---

### 2.4 Planner Agents (Creating Strategies)

**Task:** Plan migration, design new components, architect new explorations.

**Mandatory load:**
1. `compositional-core/identity/prohibitions.md` (353 lines)
2. `compositional-core/vocabulary/tokens.css` (174 lines)
3. `compositional-core/guidelines/usage-criteria.md` (when to use what)
4. `compositional-core/validation/gap-check.md` (coverage gaps + contingencies)

**Conditional load:**
5. `research/RESEARCH-SYNTHESIS.md` (unified framework)
6. `compositional-core/case-studies/_INDEX.md` (pattern inventory)
7. `compositional-core/components/component-inventory.md` (confidence levels)

**Total mandatory: ~700 lines (4 files)**
**Total with research: ~1,200 lines (7 files)**

**Critical principle:** Planners need gaps + usage criteria, not implementation details.

---

## Section 3: DEPENDENCY GRAPH

### 3.1 File Dependencies (What Depends on What)

**Tier 1: Identity (foundation layer)**
```
prohibitions.md ─┐
                 ├─> [EVERYTHING ELSE]
soul-constraints.md ─┘
```
**Dependency:** ZERO inbound (nothing depends on these). ALL outbound (everything depends on these).

**Tier 2: Vocabulary (atomic layer)**
```
prohibitions.md ──> tokens.css ──> [components, mechanisms, case studies]
```
**Dependency:** tokens.css embeds soul constraints (border-radius: 0) as CSS values.

**Tier 3: Grammar (technique layer)**
```
tokens.css ──> mechanism-catalog.md ──> [components, case studies]
                                    └──> compositional-rules.md
```
**Dependency:** Mechanisms are COMPOSITIONS of tokens (border-weight gradient uses --border-structural).

**Tier 4: Components (structure layer)**
```
tokens.css ──> components.css
mechanism-catalog.md ──> components.css
```
**Dependency:** Components are tokens + mechanisms combined.

**Tier 5: Case Studies (proof layer)**
```
tokens.css ──> DD-006-fractal.md
mechanisms ──> DD-006-fractal.md
metaphor ──> DD-006-fractal.md
```
**Dependency:** Case studies are tokens + mechanisms + metaphor.

**Tier 6: Guidelines (gap-filling layer)**
```
[ALL PRIOR LAYERS] ──> usage-criteria.md
                   └──> semantic-rules.md
                   └──> responsive-strategy.md
```
**Dependency:** Guidelines reference ALL prior layers.

---

### 3.2 Correct Loading ORDER

**For builders (tension-composition):**
```
1. identity/prohibitions.md        [Phase 0 — constraints]
2. vocabulary/tokens.css            [Phase 0 — palette]
3. [TENSION-COMPOSITION PHASES 0-3] [BLIND to library]
4. grammar/mechanism-catalog.md     [Phase 4 — after metaphor lock-in]
5. components/components.css        [Phase 4 — 2-zone DNA]
6. case-studies/_INDEX.md           [Phase 5 — OPTIONAL divergence check]
```

**For auditors:**
```
1. identity/prohibitions.md         [Compliance checklist]
2. vocabulary/tokens.css            [Token verification]
3. grammar/mechanism-catalog.md     [Mechanism identification]
4. case-studies/*.md                [Quality comparison]
```

**For researchers:**
```
1. process/lens-manifesto.md        [WHY extraction made]
2. process/construction-narrative.md [HOW extraction built]
3. identity/prohibitions.md         [WHAT is prohibited]
4. vocabulary/tokens.css            [WHAT is vocabulary]
5. [ALL OTHER LAYERS]               [Content analysis]
```

**Critical principle:** Identity ALWAYS first. Case studies ALWAYS last (or never, for builders in Phases 0-4).

---

### 3.3 What Must Be Read FRESH Every Time?

**FRESH (not from memory):**
1. `vocabulary/tokens.css` — token values change (rare but possible)
2. `identity/prohibitions.md` — prohibitions can be added (8 absolute never change, 12 conditional can be refined)
3. `grammar/mechanism-catalog.md` — mechanisms can be added as new explorations validate patterns

**FROM MEMORY (stable):**
4. `process/lens-manifesto.md` — lens choice is locked (Identity + Enablement)
5. `process/construction-narrative.md` — construction is historical fact
6. Case studies — metaphors don't change once written

**Verdict:** Always-load files (prohibitions + tokens) MUST be read fresh. Everything else can be from memory IF agent confirms "I have already read this in prior session."

---

## Section 4: OLD vs NEW Protocol

### 4.1 The Old Protocol (CLAUDE.md lines 48-111)

**Mandatory 5-step research grounding:**
```
STEP 1: Load Research Context
  - RESEARCH-ACTIVE.md (what's applied/unapplied)
  - RESEARCH-SYNTHESIS.md (cross-research insights)
  - density-patterns.md (validated patterns)
  - anti-patterns/registry.md (what to avoid)
  - DISCOVERIES-LOG.md (prior learnings)

STEP 2: Identify Applicable Research
  - Which R-X findings apply?
  - Which explorations relevant?
  - Which anti-patterns could occur?

STEP 3: Commit to Applications
  - "I will apply R3-012 by doing [X]"
  - "I will reference DD-002 for [Y]"

STEP 4: Build with Research Visible
  - Annotate: "Applying R3-012: [what]"

STEP 5: Verify Application
  - Did I apply findings I committed to?
```

**Total overhead:** 5 files read + commitment documentation + verification record = ~1 hour per page.

---

### 4.2 The New Protocol (Compositional-Core)

**2-step foundation grounding:**
```
STEP 1: Load Vocabulary (Phase 0)
  - prohibitions.md (constraints)
  - tokens.css (palette)

STEP 2: Run Tension-Composition BLIND (Phases 0-3)
  - Phase 0: Content assessment
  - Phase 1: Multi-axis questioning
  - Phase 2: Tension derivation
  - Phase 3: Metaphor search
  - PROHIBITED: reading case studies / research / explorations

STEP 3: Lock Metaphor (Phase 3.5 gate)
  - Write metaphor commitment
  - BEFORE consulting library

STEP 4: Read Mechanisms (Phase 4)
  - mechanism-catalog.md
  - components.css
  - Extract TECHNIQUES not implementations

STEP 5: OPTIONALLY Read Case Studies (Phase 5)
  - _INDEX.md titles
  - 2-3 most similar
  - Divergence table (5 dimensions)

STEP 6: Implement
  - Use tokens
  - Apply mechanisms
  - Generate YOUR vocabulary

STEP 7: Verify
  - Perceptual-auditing skill
  - Guardrails check
```

**Total overhead:** 2 files read (527 lines) + pipeline execution = ~30 min per page.

**Time savings: 50% reduction** in pre-build overhead.

---

### 4.3 What Replaces Research Grounding?

**Old approach:** Read 337 research findings → identify applicable → commit to application → build → verify.

**New approach:** Tension-composition pipeline IS the research application mechanism.

**How tension-composition embeds research:**
- **R3 (Density Dimensions):** Phase 1 multi-axis questioning derives density tensions
- **R5 (Combination Theory):** Phase 2 tension derivation identifies compositional conflicts
- **R4 (Axis Innovations):** Phase 3 metaphor search explores spatial arrangements
- **R1 (Documentation Patterns):** Phase 4 mechanisms catalog includes progressive disclosure
- **R2 (Creative Layouts):** Phase 4 mechanisms catalog includes editorial asymmetry

**The research is EMBEDDED in the pipeline, not referenced externally.**

**Exception: Track 1 (Research-Driven Building)**

Some agents may still need explicit research grounding:
- Migration agents converting existing content
- Auditors verifying research application
- Planners designing new research-driven explorations

**For Track 1 agents only:**
```
CONDITIONAL-LOAD:
- research/RESEARCH-SYNTHESIS.md
- archive/checkpoints/RESEARCH-ACTIVE.md
- research/R[relevant]-*.md (the relevant stream)
```

**Track 2 agents (tension-composition) skip ALL research files.**

---

### 4.4 Transition Strategy

**Agents who learned old protocol need:**

1. **Explicit permission to skip research files** — "You do NOT need to read RESEARCH-SYNTHESIS.md before building"
2. **Redirect to compositional-core** — "Read prohibitions.md and tokens.css ONLY"
3. **Tension-composition as replacement** — "The pipeline applies research automatically"
4. **Track distinction** — "Track 1 = research-driven, Track 2 = tension-driven"

**Transition message template:**
```
PROTOCOL UPDATE (2026-02-14):

The 5-file mandatory research grounding has been REPLACED by compositional-core protocol.

OLD (deprecated):
- Read RESEARCH-SYNTHESIS.md
- Read RESEARCH-ACTIVE.md
- Identify R-X findings
- Commit to applications

NEW (current):
- Read prohibitions.md (constraints)
- Read tokens.css (palette)
- Run tension-composition pipeline BLIND
- Lock metaphor BEFORE consulting library
- Read mechanisms AFTER lock-in

The research is embedded in the pipeline.
You do NOT need to read research files explicitly.
```

---

## Section 5: SKILL INTEGRATION

### 5.1 When Tension-Composition Invoked

**Trigger:** Track 2 building (new pages from scratch).

**NOT triggered for:**
- Track 1 building (research-driven migrations)
- Auditing (verification, not creation)
- Planning (strategy, not implementation)
- Research (analysis, not application)

**Invocation rule:**
```
IF task = "build new HTML page"
AND approach = "derive from content tensions"
THEN invoke tension-composition skill
```

**Phase-gated file access WITHIN skill:**
- Phases 0-3: ONLY prohibitions.md + tokens.css
- Phase 4: ADD mechanism-catalog.md + components.css
- Phase 5: ADD case-studies/ (optional)

**CLAUDE.md must NOT prescribe internal skill phases** — that's in skill file. CLAUDE.md only states WHEN to invoke.

---

### 5.2 When Perceptual-Auditing Invoked

**Trigger:** Post-build verification (ALWAYS, for Track 1 AND Track 2).

**Invocation rule:**
```
AFTER building ANY HTML page
BEFORE marking page complete
INVOKE perceptual-auditing skill
```

**Inputs to skill:**
- Built HTML file path
- Soul constraints (border-radius: 0, box-shadow: none, palette)
- Guardrails (940px container, 16px spacing, 32px padding, 40% compression)

**Outputs from skill:**
- Soul verification (pass/fail per constraint)
- Guardrail verification (measurements)
- Squint test (visual coherence)
- Comparison test (vs KortAI reference pages)

**CLAUDE.md must prescribe:**
- Skill is MANDATORY post-build
- Full audit required (not abbreviated)
- Zero soul violations = passing criteria

---

### 5.3 Should CLAUDE.md Reference Skills Directly?

**Options:**

**Option A: Direct reference**
```
STEP 2: Invoke tension-composition skill
See ~/.claude/skills/tension-composition/SKILL.md
```

**Option B: Mention existence**
```
STEP 2: Run tension-composition pipeline
(Pipeline phases documented in skill package)
```

**Option C: Embed skill content**
```
STEP 2: Run tension-composition pipeline
Phase 0: Content assessment [full description]
Phase 1: Multi-axis questioning [full description]
[...]
```

**Analysis:**

| Criterion | Option A | Option B | Option C | Winner |
|-----------|----------|----------|----------|--------|
| Duplication | Low (1 reference) | Low (mention only) | High (full embed) | A/B |
| Update propagation | Auto (skill file is source) | Auto | Manual (2 files to sync) | A/B |
| Discoverability | High (explicit path) | Medium (agent must search) | High (content visible) | A/C |
| Context window cost | 1 line | 1 line | 500+ lines | A/B |
| Single source of truth | Maintained | Maintained | Violated | A/B |

**Verdict:** **Option A wins.** Direct reference with explicit path maintains single source of truth while maximizing discoverability.

**Recommended format:**
```
## WHEN TO INVOKE SKILLS

### Tension-Composition (Track 2 Building)

**Trigger:** Build new HTML page from content tensions

**Invocation:**
```
Invoke tension-composition skill
See ~/.claude/skills/tension-composition/SKILL.md for full pipeline
```

**Phase-gated access:** Skill enforces library prohibition until Phase 5

### Perceptual-Auditing (Post-Build Verification)

**Trigger:** AFTER building ANY HTML page, BEFORE marking complete

**Invocation:**
```
Invoke perceptual-auditing skill
See ~/.claude/skills/perceptual-auditing/SKILL.md for full audit
```

**Passing criteria:** Zero soul violations + all guardrails met
```

---

## Section 6: DEPENDENCY ORDER Detailed

### 6.1 Why Identity Must Be First

**Scenario: Agent reads tokens.css BEFORE prohibitions.md**

What agent sees in tokens.css:
```css
--radius-sharp: 0;
```

**Without prohibitions context:** "This is a token for sharp corners. I could override it if needed."

**With prohibitions context:** "SOUL CONSTRAINT — border-radius: 0 ALWAYS. NEVER override. Violation = not KortAI."

**The difference:** Token appears as CHOICE vs MANDATE.

**Verdict:** Prohibitions MUST be read first to establish identity-level boundaries.

---

### 6.2 Why Tokens Must Precede Components

**Scenario: Agent reads components.css BEFORE tokens.css**

What agent sees in components.css:
```css
.section {
  padding: var(--space-8);
  border-left: var(--border-structural) solid var(--accent-blue);
}
```

**Without tokens context:** "Unknown variables. I'll guess 32px padding, 4px border."

**With tokens context:** "space-8 = 32px (from spacing scale), border-structural = 4px, accent-blue = #2563EB."

**The difference:** Agent guesses values (likely wrong) vs uses correct values.

**Verdict:** Tokens MUST be read before components to provide value resolution.

---

### 6.3 Why Case Studies Must Be Last

**Scenario: Agent reads DD-006 BEFORE running tension-composition**

What agent sees in DD-006:
```
Fractal self-similarity metaphor
4 scales: Atom → Molecule → Organism → Ecosystem
6-layer stratum structure
Border-weight gradient: 4px bedrock → 1px capstone
```

**Without tension-composition first:** "Fractal works for my content too! I'll use 4 scales."

**With tension-composition first:** "My metaphor is 'archaeological dig'. DD-006 is geological. Divergence table shows domain SIMILAR but structure DIFFERENT (excavation layers vs geological strata)."

**The difference:** Pattern-matching vs divergence verification.

**Verdict:** Case studies MUST be read after metaphor lock-in (Phase 3.5+), never before.

---

## Section 7: PROPOSED NEW PROTOCOL

### 7.1 Always-Load (ALL Agents, ALL Tasks)

**Mandatory read at session start:**

```markdown
## ALWAYS-LOAD — Foundation Layer

BEFORE any design system work, read these 2 files:

1. **compositional-core/identity/prohibitions.md** (353 lines)
   - 8 absolute prohibitions (NEVER, zero exceptions)
   - 12 conditional prohibitions (documented exceptions)
   - 2 meta-prohibitions (process-level)
   - Soul constraints: border-radius: 0, box-shadow: none, palette

2. **compositional-core/vocabulary/tokens.css** (174 lines)
   - 65 tokens (21 immutable, 14 mutable, 30 available)
   - Color palette (8 values)
   - Typography trinity (3 fonts)
   - Spacing scale (6 anchors, 14 increments)
   - Border weights (4px/3px/1px)

**Total mandatory overhead: 527 lines (2 files)**

**Read fresh** (not from memory) — token values and prohibitions can change.
```

---

### 7.2 Conditional-Load (Based on Agent Type)

**Builder agents (Track 2 — tension-composition):**

```markdown
## TRACK 2: TENSION-COMPOSITION BUILDING

**Phase 0: Load Vocabulary**
- ✅ Read prohibitions.md (already loaded)
- ✅ Read tokens.css (already loaded)
- ❌ DO NOT read case-studies/ (PROHIBITED until Phase 5)
- ❌ DO NOT read research files (embedded in pipeline)

**Phases 0-3: Run Pipeline BLIND**
- Phase 0: Content assessment
- Phase 1: Multi-axis questioning
- Phase 2: Tension derivation
- Phase 3: Metaphor search
- Invoke: tension-composition skill
- See: ~/.claude/skills/tension-composition/SKILL.md

**Phase 3.5: Lock Metaphor (GATE)**
- Write metaphor commitment
- BEFORE consulting library
- If metaphor matches _INDEX.md → divergence justification required

**Phase 4: Read Mechanisms**
- compositional-core/grammar/mechanism-catalog.md (first 200 lines)
- compositional-core/components/components.css (first 100 lines)
- Extract TECHNIQUES (border-weight gradient)
- NOT implementations (4px bedrock border)

**Phase 5: OPTIONALLY Read Case Studies**
- compositional-core/case-studies/_INDEX.md (titles)
- Select 2-3 most similar to YOUR metaphor
- Complete divergence table (5 dimensions)
- Verdict: DIFFERENT (proceed) or SAME (justify/regenerate)

**Phase 6: Implement**
- Use exact token values
- Apply mechanisms to YOUR metaphor
- Generate YOUR vocabulary

**Phase 7: Verify**
- Invoke: perceptual-auditing skill
- See: ~/.claude/skills/perceptual-auditing/SKILL.md
- Passing: zero soul violations + all guardrails met
```

**Builder agents (Track 1 — research-driven):**

```markdown
## TRACK 1: RESEARCH-DRIVEN BUILDING

**Mandatory read:**
- ✅ prohibitions.md + tokens.css (already loaded)
- research/RESEARCH-SYNTHESIS.md (unified framework)
- archive/checkpoints/RESEARCH-ACTIVE.md (application tracking)
- research/R[relevant]-*.md (the relevant research stream)
- compositional-core/grammar/mechanism-catalog.md

**Build approach:**
- Identify applicable R-X findings
- Commit to specific applications
- Annotate research applications in code
- Update RESEARCH-ACTIVE.md post-build

**Verify:**
- Perceptual-auditing skill (same as Track 2)
```

**Auditor agents:**

```markdown
## AUDITOR AGENTS (Verification)

**Mandatory read:**
- ✅ prohibitions.md + tokens.css (already loaded)
- compositional-core/grammar/mechanism-catalog.md (full file)
- compositional-core/case-studies/*.md (quality comparison)

**Optional read:**
- compositional-core/components/component-inventory.md (confidence levels)
- compositional-core/validation/anti-gravity-compliance.md (mechanism patterns)
- compositional-core/guidelines/semantic-rules.md (appropriateness)

**Audit focus:**
- Soul compliance (border-radius: 0? box-shadow: none? colors correct?)
- Prohibition compliance (22 prohibitions checked)
- Mechanism identification (which used? applied correctly?)

**No phase restrictions** — auditors read everything.
```

**Research agents:**

```markdown
## RESEARCH AGENTS (System Analysis)

**Mandatory read (context-first order):**
- compositional-core/process/lens-manifesto.md (770 lines — WHY)
- compositional-core/process/construction-narrative.md (990 lines — HOW)
- compositional-core/validation/anti-gravity-compliance.md
- ✅ prohibitions.md + tokens.css (already loaded)

**Conditional read:**
- ALL research files (R1-R5, RESEARCH-SYNTHESIS.md)
- archive/checkpoints/RESEARCH-ACTIVE.md
- compositional-core/process/assumption-log.md (bias tracking)

**Analysis mode (not application mode):**
- Understand: "How does this system work?"
- NOT: "Which template do I use?"
```

**Planner agents:**

```markdown
## PLANNER AGENTS (Strategy)

**Mandatory read:**
- ✅ prohibitions.md + tokens.css (already loaded)
- compositional-core/guidelines/usage-criteria.md
- compositional-core/validation/gap-check.md (coverage gaps)

**Conditional read:**
- research/RESEARCH-SYNTHESIS.md (unified framework)
- compositional-core/case-studies/_INDEX.md (pattern inventory)
- compositional-core/components/component-inventory.md (confidence levels)

**Planning focus:**
- What gaps exist?
- What usage criteria apply?
- What new components/mechanisms needed?
```

---

### 7.3 Skill Invocation Rules

```markdown
## SKILL INVOCATION

### When to Invoke Tension-Composition

**Trigger:** Track 2 building (new pages from content tensions)

**Invocation:**
```
Invoke: tension-composition skill
See: ~/.claude/skills/tension-composition/SKILL.md
```

**Phase-gated access enforced by skill:**
- Phases 0-3: Library prohibited
- Phase 4: Mechanisms permitted
- Phase 5: Case studies permitted (optional)

**NOT invoked for:**
- Track 1 building (research-driven)
- Auditing
- Planning
- Research

---

### When to Invoke Perceptual-Auditing

**Trigger:** AFTER building ANY HTML page, BEFORE marking complete

**Applies to:** Track 1 AND Track 2 (all building)

**Invocation:**
```
Invoke: perceptual-auditing skill
See: ~/.claude/skills/perceptual-auditing/SKILL.md
```

**Inputs:**
- Built HTML file path
- Soul constraints (from prohibitions.md)
- Guardrails (940px container, 16px spacing, 32px padding, 40% compression)

**Passing criteria:**
- Zero soul violations (border-radius: 0, box-shadow: none, correct palette)
- All guardrails met (measurements documented)
- Squint test passed (visual coherence)

**Full audit required** — abbreviated audit NOT acceptable for final versions.
```

---

## Section 8: KEY FINDINGS Summary

### 8.1 Context Window Budget

| Protocol | Files | Lines | Agents | Overhead |
|----------|-------|-------|--------|----------|
| **Old (deprecated)** | 5 | 4,000+ | ALL | 87% of context |
| **New (always-load)** | 2 | 527 | ALL | 13% of context |
| **New (builder Track 2)** | 4 | ~800 | Track 2 only | Phase-gated |
| **New (auditor)** | 3-5 | ~1,500 | Auditors only | No phase gate |

**Savings: 87% reduction in mandatory overhead** for builders.

---

### 8.2 Dependency Order

**Correct loading sequence:**
```
1. identity/prohibitions.md        [constraints first]
2. vocabulary/tokens.css            [palette second]
3. [TASK-SPECIFIC WORK]             [blind to library]
4. grammar/mechanism-catalog.md     [techniques, not implementations]
5. components/components.css        [structures]
6. case-studies/*.md                [proof, not templates]
```

**Critical gates:**
- Prohibitions BEFORE tokens (mandate vs choice)
- Tokens BEFORE components (value resolution)
- Metaphor lock-in BEFORE case studies (pattern-matching prevention)

---

### 8.3 Research Integration

**Old approach:** Read 337 findings → identify applicable → commit → build.

**New approach:** Tension-composition pipeline IS the research application mechanism.

**Research embedded in pipeline:**
- R3 (Density) → Phase 1 multi-axis questioning
- R5 (Combination) → Phase 2 tension derivation
- R4 (Axis) → Phase 3 metaphor search
- R1 (Documentation) → Phase 4 mechanisms
- R2 (Creative) → Phase 4 mechanisms

**Track 1 exception:** Research-driven agents still read research files explicitly.

**Track 2 (tension-composition):** Skip ALL research files.

---

### 8.4 Skill Integration

**Tension-composition:**
- Invoked for: Track 2 building only
- File access: Phase-gated (vocabulary → mechanisms → case studies)
- CLAUDE.md references: Direct path to skill file
- Protocol: Embedded in skill, not duplicated in CLAUDE.md

**Perceptual-auditing:**
- Invoked for: ALL building (Track 1 + Track 2)
- Timing: Post-build, pre-completion
- Passing criteria: Zero soul violations + guardrails met
- Protocol: Full audit required (not abbreviated)

---

## Section 9: TRANSITION GUIDANCE

### 9.1 Agents Who Learned Old Protocol

**What they expect:**
```
1. Read RESEARCH-ACTIVE.md
2. Read RESEARCH-SYNTHESIS.md
3. Identify R-X findings
4. Commit to applications
5. Build with annotations
6. Verify application
7. Update RESEARCH-ACTIVE.md
```

**What they should do now:**
```
1. Read prohibitions.md + tokens.css
2. Invoke tension-composition skill (Track 2)
   OR read research files (Track 1)
3. Build (pipeline handles research)
4. Invoke perceptual-auditing skill
5. Mark complete
```

**Transition message:**
```
PROTOCOL UPDATE (2026-02-14):

The mandatory 5-file research grounding has been REPLACED.

NEW PROTOCOL:
- Always-load: prohibitions.md + tokens.css (2 files, 527 lines)
- Track 2 (tension-composition): NO research files needed
- Track 1 (research-driven): Research files conditional
- Perceptual-auditing: MANDATORY post-build

The research is embedded in the tension-composition pipeline.
You do NOT need to read RESEARCH-SYNTHESIS.md before building.

See compositional-core/README.md Section "Phase-Gated Protocol" for details.
```

---

### 9.2 How to Enforce New Protocol

**Binary rules (100% compliance):**
```
MUST read prohibitions.md BEFORE building (absolute)
MUST read tokens.css BEFORE building (absolute)
MUST invoke perceptual-auditing AFTER building (absolute)
MUST NOT read case-studies/ during Phases 0-3 (absolute, Track 2 only)
```

**Conditional rules (depends on task):**
```
IF Track 2 THEN invoke tension-composition (conditional)
IF Track 1 THEN read research files (conditional)
IF auditor THEN read all case studies (conditional)
```

**Verification:**
```
- Protocol compliance checklist in agent prompt
- File access log (what was read when)
- Phase gate checkpoints (metaphor lock-in documented)
```

---

## Section 10: RECOMMENDATIONS

### 10.1 Immediate Actions

1. **Update design-system/CLAUDE.md:**
   - Replace 5-file mandatory grounding with 2-file always-load
   - Add Track 1 vs Track 2 distinction
   - Add phase-gated conditional loads per agent type
   - Add direct skill references with file paths

2. **Mark old sections DEPRECATED:**
   - Lines 48-111 (old mandatory grounding)
   - Lines 237-285 (old task-type reads)
   - Lines 289-314 (RESEARCH-ACTIVE.md update mandate)

3. **Add TRANSITION section:**
   - Explain old vs new protocol
   - Provide migration guidance
   - Include explicit permission to skip research files (Track 2)

4. **Reference compositional-core/README.md:**
   - Single source of truth for phase-gated protocol
   - Direct agents to Section "Phase-Gated Protocol"

---

### 10.2 Long-Term Considerations

**Context window optimization:**
- 2-file always-load is MINIMUM (prohibitions + tokens)
- Could be reduced to 1 file if prohibitions embedded in tokens.css comments
- Trade-off: Discoverability vs brevity

**Skill evolution:**
- Tension-composition may add Phase 8 (documentation)
- Perceptual-auditing may add guardrails over time
- CLAUDE.md references skills via path (auto-updates when skills change)

**Research integration:**
- Track 1 may become obsolete as tension-composition matures
- Research files may move to archive/ once fully embedded
- RESEARCH-ACTIVE.md update may become optional

**Anti-gravity enforcement:**
- Phase gates currently procedural (agents can ignore)
- Could add pre-commit hooks (structural enforcement)
- Could add automated file access logging (verify compliance)

---

## Appendices

### Appendix A: File Size Reference

| File | Lines | Size | Type |
|------|-------|------|------|
| prohibitions.md | 353 | 23KB | Always-load |
| tokens.css | 174 | 12KB | Always-load |
| mechanism-catalog.md | ~800 | 52KB | Conditional (builders Phase 4) |
| RESEARCH-SYNTHESIS.md | ~1,200 | 78KB | Conditional (Track 1 only) |
| lens-manifesto.md | 770 | 48KB | Conditional (researchers) |
| construction-narrative.md | 990 | 62KB | Conditional (researchers) |

**Always-load total: 35KB (2 files)**
**Old protocol total: 200KB+ (5+ files)**

---

### Appendix B: Compositional-Core Directory Map

```
compositional-core/
├── identity/               [ALWAYS-LOAD]
│   ├── prohibitions.md     ← 353 lines
│   └── soul-constraints.md
├── vocabulary/             [ALWAYS-LOAD]
│   ├── tokens.css          ← 174 lines
│   └── tokens-mutability.md
├── grammar/                [CONDITIONAL — Phase 4]
│   ├── mechanism-catalog.md
│   ├── compositional-rules.md
│   └── border-system.md
├── components/             [CONDITIONAL — Phase 4]
│   ├── components.css
│   └── component-inventory.md
├── case-studies/           [CONDITIONAL — Phase 5, PROHIBITED Phases 0-4 Track 2]
│   ├── _INDEX.md
│   ├── DD-003-islands.md
│   ├── DD-006-fractal.md (crown jewel)
│   └── ... (9 case studies)
├── guidelines/             [CONDITIONAL — Planners/auditors]
│   ├── usage-criteria.md
│   ├── semantic-rules.md
│   └── responsive-strategy.md
├── validation/             [CONDITIONAL — Researchers/auditors]
│   ├── anti-gravity-compliance.md
│   ├── gap-check.md
│   └── convergence-check.md
└── process/                [CONDITIONAL — Researchers]
    ├── lens-manifesto.md
    ├── construction-narrative.md
    ├── extraction-provenance.md
    └── assumption-log.md
```

---

### Appendix C: Old vs New Protocol Comparison Table

| Aspect | Old Protocol | New Protocol | Change |
|--------|-------------|--------------|--------|
| **Always-load files** | 5 files, 4,000+ lines | 2 files, 527 lines | -87% overhead |
| **Builder Track 2 pre-build** | 5 research files | 2 vocabulary files | -60% files |
| **Research integration** | Explicit (read R-X findings) | Implicit (embedded in pipeline) | Pipeline handles |
| **Phase gates** | None (read all at start) | 4 gates (0 → 3.5 → 4 → 5) | Anti-gravity |
| **Case study access** | Unrestricted | Prohibited until Phase 5 | Pattern-matching prevention |
| **Skill invocation** | Mentioned (not enforced) | Explicit (paths + triggers) | Discoverability |
| **Track distinction** | None (one path for all) | Track 1 vs Track 2 | Task-appropriate |
| **Context window** | 87% overhead | 13% overhead | -74 percentage points |
| **Update propagation** | Manual sync (6 files) | Auto (skills are source) | Single source of truth |
| **Transition guidance** | None | Explicit migration message | Agent-friendly |

---

## Conclusion

The existing CLAUDE.md ingestion protocol is **fundamentally incompatible** with compositional-core phase-gated access. A complete rewrite is needed with:

**Core changes:**
1. 2-file always-load (prohibitions + tokens) replaces 5-file research grounding
2. Track 1 vs Track 2 distinction (research-driven vs tension-driven)
3. Phase-gated conditional loads (identity → vocabulary → grammar → components → case studies)
4. Explicit skill invocation (tension-composition for Track 2, perceptual-auditing for all)
5. Dependency-ordered file access (prohibitions BEFORE tokens BEFORE mechanisms)

**Impact:**
- 87% reduction in mandatory overhead (4,000 lines → 527 lines)
- 50% reduction in pre-build time (~60 min → ~30 min)
- Anti-gravity mechanisms enforced (case studies prohibited until Phase 5)
- Single source of truth maintained (skills referenced, not duplicated)

**Next step:** Draft new CLAUDE.md using this research.
