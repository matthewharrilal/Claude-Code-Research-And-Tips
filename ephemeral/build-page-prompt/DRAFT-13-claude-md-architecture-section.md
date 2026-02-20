# DRAFT-13: CLAUDE.md Edits + Validation + Master Prompt Architecture

**Agent:** claude-md-architect (Opus 4.6)
**Date:** 2026-02-19
**Task:** #13 -- Draft CLAUDE.md edits, validation protocol, and prompt architecture
**Sources:** 08-nav-validation-research.md (721 lines), 07-metacog-analysis.md (598 lines), 11-format-analysis.md (649 lines), design-system/CLAUDE.md (733 lines), design-system/compositional-core/CLAUDE.md (681 lines)

---

## SECTION A: EXACT EDITS TO design-system/CLAUDE.md

These are Edit-tool-ready old_string/new_string pairs. The assembler agent should embed these as literal content blocks in the master execution prompt. The fresh instance applies them sequentially.

### A-EDIT-1: Update Current Phase (Line 9)

```
FILE: design-system/CLAUDE.md

old_string: **Current Phase:** Phase D COMPLETE (CONDITIONAL PASS, 2026-02-15). Richness + rigidity research COMPLETE (11 agents, tier model established). Middle-tier Experiment SUCCESS (2026-02-16). Ceiling Preparation In Progress.

new_string: **Current Phase:** /build-page Pipeline ACTIVE (2026-02-19). ALWAYS FLAGSHIP -- every page built at maximum compositional intensity. Tier routing REMOVED. /build-page is the single entry point for all page building.
```

### A-EDIT-2: Update Key Principle (Lines 10-13)

```
old_string: **Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated)
- **specification/** — Complete documentation for understanding (research provenance)

new_string: **Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated). Invoked automatically by /build-page
- **specification/** — Complete documentation for understanding (research provenance)

**Building protocol:** ALL pages are built via /build-page at Flagship tier. No tier routing. No Track 1/Track 2 classification. The orchestrator handles everything.
```

### A-EDIT-3: Update BUILD Quick Start (Lines 19-22)

```
old_string: ### I'm here to BUILD content/pages
**→ Start:** `compositional-core/README.md`
**→ ALWAYS load first:** `compositional-core/identity/prohibitions.md` (22 prohibitions)
**→ Then:** `compositional-core/vocabulary/tokens.css` (65 locked tokens)

new_string: ### I'm here to BUILD content/pages
**→ Run:** `/build-page <content-file-path>` (the ONLY way to build pages)
**→ What it does:** Invokes the /build-page orchestrator, which handles content analysis, TC pipeline, builder deployment, gate verification, and PA audit automatically
**→ Manual fallback:** `compositional-core/README.md` (if /build-page is unavailable)
**→ ALWAYS loaded automatically:** `compositional-core/identity/prohibitions.md` + `compositional-core/vocabulary/tokens.css`
```

### A-EDIT-4: Replace SKILLS Section (Lines 321-354)

```
old_string: ### Tension-Composition (Track 2 Building)

**Trigger:** Build new HTML page from content tensions

**Invocation:**
```
Invoke tension-composition skill
See ~/.claude/skills/tension-composition/SKILL.md for full pipeline
```

**Phase-gated access:** Skill enforces library prohibition until Phase 5

**NOT invoked for:** Track 1 building (research-driven), auditing, planning

---

### Perceptual-Auditing (Post-Build Verification)

**Trigger:** AFTER building ANY HTML page, BEFORE marking complete

**Applies to:** Track 1 AND Track 2 (all building)

**Invocation:**
```
Invoke perceptual-auditing skill
See ~/.claude/skills/perceptual-auditing/SKILL.md for full audit
```

**Passing criteria:**
- Zero soul violations (border-radius: 0, box-shadow: none, correct palette)
- All guardrails met (940px container, 16px spacing, 32px padding, 40% compression)
- Squint test passed (visual coherence)

**Full audit required** — abbreviated audit NOT acceptable

new_string: ### /build-page (PRIMARY -- All Page Building)

**Trigger:** "Build a page from [content]" or any page-building request

**Invocation:**
```
/build-page <content-file-path>
```

**What it orchestrates:** Content analysis -> TC pipeline (Flagship-only) -> Opus builder deployment -> 21-gate programmatic verification -> Mode 4 PA (9 auditors + 8 Tier 5 questions) -> fix cycles -> verdict

**Success bar:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations

**Sub-skills invoked automatically:**
- Tension-composition (TC): Full Phases 0-5, Flagship intensity, invoked by orchestrator
- Perceptual-auditing (PA): Full 56 questions (48 standard + 8 Tier 5), invoked after build

**NOT invoked for:** Research, auditing existing pages, planning

---

### Tension-Composition (Sub-Skill -- Invoked by /build-page)

**Direct invocation:** Only if /build-page is unavailable
**Skill file:** `~/.claude/skills/tension-composition/SKILL.md`
**Phase-gated access:** Library prohibition until Phase 5
**ALWAYS FLAGSHIP:** No tier routing. Full Phases 0-5 for every page.

---

### Perceptual-Auditing (Sub-Skill -- Invoked by /build-page)

**Direct invocation:** Only for auditing EXISTING pages (not builds)
**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Full 56-question audit required** -- 48 standard + 8 Tier 5 (PA-60 through PA-67)
**Passing criteria:** PA-05 >= 3.5, Tier 5 >= 6/8, zero soul violations, zero void patterns
```

### A-EDIT-5: Replace Builder Ingestion Protocol (Lines 385-431)

```
old_string: **Builder agents (Track 2 — tension-composition):**

Phase 0: Load vocabulary
- ✅ Read prohibitions.md (already loaded)
- ✅ Read tokens.css (already loaded)
- ❌ DO NOT read case-studies/ (PROHIBITED until Phase 5)

Phases 0-3: Run pipeline BLIND
- Invoke tension-composition skill
- Case studies PROHIBITED

Phase 3.5: Lock metaphor (GATE)
- Write metaphor commitment BEFORE consulting library

Phase 4: Read mechanisms
- `compositional-core/grammar/mechanism-catalog.md` (first 200 lines)
- `compositional-core/components/components.css` (first 100 lines)
- Extract TECHNIQUES, not implementations

Phase 5: OPTIONALLY read case studies
- `compositional-core/case-studies/_INDEX.md` (titles)
- Select 2-3 most similar to YOUR metaphor
- Complete divergence table (5 dimensions)

Phase 6: Implement
- Use exact token values
- Apply mechanisms to YOUR metaphor
- Generate YOUR vocabulary

Phase 7: Verify
- Invoke perceptual-auditing skill

---

**Builder agents (Track 1 — research-driven):**

Mandatory read:
- ✅ prohibitions.md + tokens.css (already loaded)
- `research/RESEARCH-SYNTHESIS.md` (unified framework)
- `research/R[relevant]-*.md` (the relevant research stream)
- `compositional-core/grammar/mechanism-catalog.md`

Build approach:
- Identify applicable R-X findings
- Commit to specific applications
- Annotate research applications in code

new_string: **Builder agents (invoked by /build-page orchestrator):**

The /build-page orchestrator handles all builder loading automatically. Builders receive:
1. prohibitions.md + tokens.css (pre-loaded by orchestrator)
2. Conventions brief with content analysis + metaphor + mechanism selections (from TC pipeline)
3. Operational recipe with specific CSS values + sequenced build steps
4. Gate runner for micro-gate verification during build

Phase-gated access is enforced by the orchestrator:
- Phases 0-3: TC runs BLIND (no library access)
- Phase 3.5: Metaphor lock (GATE -- no changes after)
- Phase 4: Mechanisms extracted (grammar/mechanism-catalog.md)
- Phase 5: Optional case study comparison (divergence check)
- Phase 6: Opus builder implements with operational recipe
- Phase 7: Full verification (21 gates + 56-question PA)

**Manual builder invocation (if /build-page unavailable):**
- Follow compositional-core/CLAUDE.md Flagship Build Workflow
- ALL pages at Flagship intensity (no tier routing)
```

### A-EDIT-6: Replace ROUTING LOGIC (Lines 482-513)

```
old_string: ### Q1: What phase are you in?

- Phase C extraction complete → compositional-core/ is operational (LOCKED)
- Phase D validation → Read `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md`
- Pre-Phase C (fortress only) → validated-explorations/ + specification/
- Migration → compositional-core/ + pipeline/03

### Q2: Build, Analyze, or Plan?

- **Build** → compositional-core/
- **Analyze** → specification/ + compositional-core/validation/
- **Plan** → pipeline/

### Q3: Track 1 (assembly) or Track 2 (composition)?

- **Track 1** (research-driven assembly) → compositional-core/vocabulary/ + grammar/
- **Track 2** (tension-driven composition) → compositional-core/ + pipeline/07 + tension-composition skill

### Q4: Raw research or extracted design system?

- **Raw research** (R1-R5, 337 findings) → research/
- **Extracted design system** (40 items, 6 layers) → compositional-core/
- **Provenance chain** → specification/provenance/

### Q5: What's my first file to read?

- **Philosophy/orientation** → README.md (THE KORTAI DESIGN MIND)
- **Operational building** → compositional-core/README.md (phase-gated protocol)
- **Abstract specification** → specification/BACKBONE.md (master narrative)
- **Planning/evolution** → pipeline/README.md (roadmap overview)
- **Soul compliance** → compositional-core/identity/prohibitions.md
- **Research grounding** → research/RESEARCH-SYNTHESIS.md

new_string: ### Q1: Build or Understand?

- **Build a page** → `/build-page <content-path>` (ALWAYS use this)
- **Understand the system** → specification/ + research/
- **Audit an existing page** → Invoke perceptual-auditing skill directly

### Q2: What do I need to understand?

- **Design philosophy** → README.md (THE KORTAI DESIGN MIND)
- **Raw research** (337 findings) → research/RESEARCH-SYNTHESIS.md then research/R[1-5]
- **Extracted vocabulary** (40 items) → compositional-core/
- **Provenance chain** → specification/provenance/

### Q3: What's my first file to read?

- **Building** → Just run `/build-page`. It handles everything.
- **Philosophy/orientation** → README.md (THE KORTAI DESIGN MIND)
- **Abstract specification** → specification/BACKBONE.md (master narrative)
- **Soul compliance** → compositional-core/identity/prohibitions.md
- **Research grounding** → research/RESEARCH-SYNTHESIS.md
```

### A-EDIT-7: Replace Anti-Pattern #7 (Lines 579-585)

```
old_string: ### 7. Not distinguishing Track 1 from Track 2

**Problem:** Using token application for prose-heavy content, or invoking skill for data tables

**Correct:** Read pipeline/03-MIGRATION-PIPELINE.md (explains Track 1 vs Track 2 split)

**Rule:** Track 1 = assembly (45-90 min), Track 2 = composition (3-5 hrs)

new_string: ### 7. Trying to build without /build-page

**Problem:** Manually invoking TC skill, manually assembling components, or building without the orchestrator

**Correct:** Run `/build-page <content-path>`. The orchestrator handles TC pipeline, builder deployment, gate verification, and PA audit automatically.

**Rule:** /build-page is the ONLY sanctioned way to build new pages. Manual building is a fallback for when /build-page is unavailable.
```

### A-EDIT-8: Update EVOLUTION STATE header (Line 232)

```
old_string: ### CURRENT PHASE: Phase D Extraction Validation (COMPLETE — CONDITIONAL PASS) + Middle-Tier Experiment (SUCCESS)

new_string: ### CURRENT PHASE: /build-page Pipeline (ACTIVE)
```

### A-EDIT-9: Update 3-TIER TIMELINE (Lines 281-295)

```
old_string: **CURRENT (validation + skill enrichment + experimentation):**
- ✅ Phase D: Extraction Validation (COMPLETE — CONDITIONAL PASS, 2026-02-15)
- ✅ Richness + Rigidity Research (COMPLETE — 11 agents, tier model established, 2026-02-15)
- ✅ Middle-tier Experiment (COMPLETE — SUCCESS, 8 agents, 2026-02-16)
- ✅ Middle-tier Retrospective (COMPLETE — 11 agents, 2026-02-16)
- 🔧 Retro-Analysis Team: Apply F1 sequence (M1 permanent, inter-agent comms, landmarks, self-check, ceiling prompt)
- 🧪 Ceiling Preparation: Build exceptional Ceiling-tier page (15+ mechanisms, full metaphor)
- ⏳ Phase E: Migration Playbook v2 (dual-track)
- ⏳ Phase F: Pilot Migration (MUST include Track 2)
- ⏳ Phase G: Playbook Refinement

**FORWARD (post-freeze migration):**
- ═══ FREEZE LINE ═══ (After Phase G, design system locks)
- 📋 Phase H: Track 1 Migration (30-40 pages @ 45-90 min, parallelizable)
- 📋 Phase I: Track 2 Migration (35-45 pages @ 3-5 hrs, sequential bottleneck)

new_string: **CURRENT (/build-page pipeline):**
- Phase D: Extraction Validation (COMPLETE -- CONDITIONAL PASS, 2026-02-15)
- Richness + Rigidity Research (COMPLETE -- 11 agents, tier model, 2026-02-15)
- Middle-tier Experiment (COMPLETE -- SUCCESS, PA-05 4/4, 2026-02-16)
- Flagship Experiment + Remediation (COMPLETE -- PA-05 2.5/4, 2026-02-17-18)
- Pipeline Analysis + Architecture (COMPLETE -- 50+ agents, Pipeline v2 designed, 2026-02-18)
- Flagship 4/4 Recipe Research (COMPLETE -- 23 reports, compositional intelligence stack, 2026-02-19)
- /build-page Prompt Assembly: Writing the master execution prompt for the /build-page pipeline
- /build-page Validation: Test with 2 different content files
- Migration: All pages via /build-page at Flagship tier

**FORWARD (post-validation migration):**
- VALIDATION LINE (After 2 successful /build-page runs)
- Full Migration: ALL pages via /build-page (single pipeline, single tier)
```

### A-EDIT-10: Update PHASE D VALIDATION LESSONS (Lines 642-656)

```
old_string: ## PHASE D VALIDATION LESSONS (2026-02-15)

Phase D tested 5 pipeline configurations. COMPLETE — CONDITIONAL PASS. Key lessons for builders:

new_string: ## EXPERIMENT LESSONS (Phase D through Flagship)

Phase D through Flagship experiments (2026-02-15 to 2026-02-18) tested 7 pipeline configurations. Key lessons for builders:
```

### A-EDIT-11: Add Flagship lessons after existing Phase D lessons (Lines 654-656)

```
old_string: **Post-D Research (COMPLETE, 2026-02-15):** Richness + rigidity investigations (11 agents) established tier model (Floor/Middle/Ceiling/Flagship) and modification recommendations. Skill enrichment currently in progress to address "sample 2-4 mechanisms" limitation.

See: ephemeral/continuity-docs/HANDOFF.md for full Phase D results.

new_string: 5. **Recipe beats checklist for builders.** The Middle experiment builder got a 100-line RECIPE (sequenced steps, specific CSS values). The Flagship builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if" verbs). Recipe = DESIGNED; Checklist = FLAT. The /build-page pipeline provides RECIPES, not checklists.

6. **Content structural heterogeneity is the floor.** Content with code blocks, multiple rhetorical modes, and domain transitions FORCES visual variety. Uniform prose caps PA-05 at ~2.5/4 regardless of architecture. Content selection is a DESIGN DECISION.

7. **Programmatic gates catch ~26%, PA catches ~40%, Tier 5 catches ~34%.** All three verification layers are required. Gates alone produce imperceptible-but-compliant CSS. PA alone misses void patterns that gates catch.

8. **Same builder for fix cycles.** Compositional memory is irreplaceable. New agents must re-derive metaphor from scratch. The builder that produced 1.5/4 improved to 2.5/4 with targeted feedback.

**Full experiment history:** See ephemeral/continuity-docs/HANDOFF.md
```

**Total: 11 edits to design-system/CLAUDE.md.**

---

## SECTION B: EXACT EDITS TO design-system/compositional-core/CLAUDE.md

### B-EDIT-1: Update Status Line (Line 8)

```
FILE: design-system/compositional-core/CLAUDE.md

old_string: **Status:** OPERATIONAL (Phase C Complete, Phase D CONDITIONAL PASS, Middle-Tier Experiment SUCCESS, Ceiling Preparation In Progress)

new_string: **Status:** OPERATIONAL (Phase C Complete, /build-page Pipeline ACTIVE). ALWAYS FLAGSHIP -- every page at maximum compositional intensity. Tier routing REMOVED.
```

### B-EDIT-2: Replace TRACK CLASSIFICATION section (Lines 54-84)

```
old_string: ## TRACK CLASSIFICATION

**The Addition Test:** "Can existing components fulfill this WITHOUT transforming their meaning?"
- **YES** → Track 1 (Assembly, 45-90 min)
- **NO** → Track 2 (Composition, 3-5 hours)

### Track 1: Component Assembly

**When:** Content has explicit vocabulary (tables, stats, diagrams). Components map directly to reader needs.

**Load:** prohibitions → tokens → components.css → guidelines/semantic-rules.md

**Build:** Use existing components with token values.

~/.claude/skills/perceptual-auditing
**Verify:** Soul check + perceptual audit.

**NO metaphor derivation required.**

### Track 2: Tension-Driven Composition

**When:** Content is prose-dominant (>70% narrative). Implicit tension exists (warmth vs austerity, authority vs playfulness). No direct tool available.

~/.claude/skills/tension-composition
**Load:** prohibitions → tokens → [RUN TENSION-COMPOSITION BLIND] → mechanisms → [OPTIONAL case studies]

**Build:** Derive metaphor independently, apply mechanisms to YOUR metaphor, generate YOUR vocabulary.

**Verify:** Divergence check + soul check + perceptual audit.

**REQUIRES independent creative derivation.**

new_string: ## BUILD PROTOCOL: ALWAYS FLAGSHIP

**Every page is built at Flagship tier.** No tier routing. No Track 1/Track 2 classification.

**The Addition Test is RETIRED.** The test classified pages into assembly (Track 1) vs composition (Track 2). Under ALWAYS FLAGSHIP, every page gets full composition.

**The only escape valve:** If content has ZERO cosmetic tension (pure data tables, raw API reference), the TC pipeline will detect this and produce a flat-mode build. This is automatic, not a routing decision.

**Entry point:** `/build-page <content-path>`

**What /build-page does:**
1. Content analysis (structural heterogeneity, rhetorical variety, mechanism affinity)
2. TC pipeline Phases 0-5 (metaphor derivation, mechanism selection, operational recipe)
3. Opus builder deployment (with recipe, not checklist)
4. 21-gate programmatic verification (Flagship thresholds)
5. Mode 4 PA (9 auditors, 56 questions including 8 Tier 5)
6. Fix cycles (max 3, same builder)
7. Verdict: SHIP / FIX / REBUILD / ESCALATE

**Success bar:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations
```

### B-EDIT-3: Replace TRACK 1 WORKFLOW section (Lines 88-107)

```
old_string: ## TRACK 1 WORKFLOW

**Phase 0: Load Foundation**
1. Read prohibitions.md (constraints)
2. Read tokens.css (palette)
3. Read components.css (first 100 lines — 2-zone DNA patterns)
4. Read guidelines/semantic-rules.md (when to use what)

**Phase 1: Build**
- Use exact token values: var(--color-primary), var(--space-8)
- Apply components as-is (no custom CSS)
- Follow responsive strategy (768px collapse)

**Phase 2: Verify**
- Invoke perceptual-auditing skill (48 PA questions)
- Check guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Verify soul: border-radius: 0? box-shadow: none? Colors correct?

**Total reading: ~627 lines (4 files)**

new_string: ## MANUAL BUILD WORKFLOW (Fallback -- only if /build-page is unavailable)

If /build-page cannot be invoked, follow the Flagship Build Workflow below manually.
The /build-page orchestrator automates all of this.
```

### B-EDIT-4: Rename TRACK 2 WORKFLOW header (Line 110)

```
old_string: ## TRACK 2 WORKFLOW

new_string: ## FLAGSHIP BUILD WORKFLOW (Automated by /build-page)
```

### B-EDIT-5: Update VERIFICATION CHECKLIST (Lines 613-638)

```
old_string: **Perceptual audit (invoke skill):**
- □ Run full 48 PA questions
- □ Check guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- □ Squint test: visual coherence
- □ Comparison test: vs KortAI reference pages

**Guardrails:**
- □ 940px minimum container width (65% viewport at 1440px)
- □ 16px minimum label-to-heading spacing
- □ 32px minimum padding floor on containers
- □ 40% maximum compression ratio

**Divergence (Track 2 only, if case studies consulted):**
- □ 5-dimension divergence table complete?
- □ DIFFERENT on 3+ dimensions?
- □ If convergence: strong justification documented?

new_string: **Perceptual audit (Flagship -- 56 questions):**
- □ Run full 48 standard PA questions + 8 Tier 5 questions (PA-60 through PA-67)
- □ PA-05 >= 3.5/4 (Flagship threshold)
- □ Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- □ Zero void patterns (no whitespace voids >= 200px)
- □ Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)

**Guardrails (Flagship thresholds):**
- □ 940-960px container width (SC-01)
- □ >= 15 RGB max-channel delta at zone boundaries (SC-09)
- □ <= 108px total stacked gap at boundaries (SC-10)
- □ 3+ distinct typography zones, display-body >= 10px (SC-11)
- □ >= 3 of 6 channels shift at every boundary, avg >= 4 (SC-13)
- □ >= 3 distinct border configurations (SC-15)
- □ No sub-perceptual CSS (SC-14)
- □ >= 5 ARIA landmarks (SC-06), skip link (SC-07)
- □ >= 8 component library classes (SC-08)

**Divergence (always required -- every build runs full TC):**
- □ 5-dimension divergence table complete?
- □ DIFFERENT on 3+ dimensions?
- □ If convergence: strong justification documented?
```

### B-EDIT-6: Update PHASE D VALIDATION LESSONS (Lines 642-656)

```
old_string: ## PHASE D VALIDATION LESSONS (2026-02-15)

Phase D tested 5 pipeline configurations. COMPLETE — CONDITIONAL PASS. Key lessons for builders:

new_string: ## EXPERIMENT LESSONS (Phase D through Flagship)

Phase D through Flagship experiments (2026-02-15 to 2026-02-18) tested 7 pipeline configurations. Key lessons for builders:
```

### B-EDIT-7: Add Flagship lessons after existing lessons (Lines 654-656)

```
old_string: **Post-D Research (COMPLETE, 2026-02-15):** Richness + rigidity investigations (11 agents) established tier model (Floor/Middle/Ceiling/Flagship) and modification recommendations. Skill enrichment currently in progress to address "sample 2-4 mechanisms" limitation.

See: ephemeral/continuity-docs/HANDOFF.md for full Phase D results.

new_string: 5. **Recipe beats checklist.** Builders receiving sequenced steps with CSS values (RECIPE) produce DESIGNED output. Builders receiving constraint lists with thresholds (CHECKLIST) produce FLAT output. /build-page provides recipes.

6. **Perceptible CSS only.** Every CSS value must be perceptible to a human. Minimum deltas: backgrounds >= 15 RGB, font-size >= 2px between zones, letter-spacing >= 0.5px, padding >= 24px between zones, total stacked gap <= 108px.

7. **Same builder for fix cycles.** Compositional memory is irreplaceable. The builder that produced 1.5/4 improved to 2.5/4 with targeted feedback. New agents re-derive from scratch.

8. **Build boundary-by-boundary, not channel-by-channel.** Setting all CSS channels (background + typography + spacing + borders) at each zone boundary produces multi-coherence. Setting all backgrounds, then all borders, then all typography produces flat output.

**Full experiment history:** See ephemeral/continuity-docs/HANDOFF.md
```

### B-EDIT-8: Update Perceptual Cost Economics guardrails (Lines 539-561)

```
old_string: ### Perceptual Cost Economics

**METAPHOR RICHNESS ISN'T FREE. Perceptual costs are REAL costs.**

**Core guardrails (from skill enrichment):**
1. **940px minimum container** (65% of 1440px viewport)
   - Prevents metaphor-driven width collapse

2. **16px minimum label-to-heading gap**
   - Prevents metaphor-driven smashing

3. **32px minimum padding floor**
   - Prevents metaphor-driven dead zones

4. **40% maximum compression ratio** (densest ÷ sparsest)
   - Prevents metaphor-driven cognitive fatigue

**When metaphor conflicts with guardrails:**
1. CHECK perceptual cost
2. APPLY cost-benefit analysis
3. DOCUMENT the decision

**"The metaphor shapes experience; the guardrails prevent it from breaking experience."**

new_string: ### Perceptual Cost Economics

**METAPHOR RICHNESS ISN'T FREE. Perceptual costs are REAL costs.**

**Core guardrails (Flagship thresholds):**
1. **940-960px container width** (SC-01)
2. **>= 15 RGB max-channel delta** at zone boundaries (SC-09)
3. **<= 108px total stacked gap** at section boundaries (SC-10)
4. **3+ distinct typography zones**, display-body >= 10px delta (SC-11)
5. **>= 3 of 6 channels shift** at every boundary, avg >= 4 (SC-13)
6. **>= 3 distinct border configurations** across page (SC-15)
7. **No sub-perceptual CSS**: no letter-spacing < 0.02em, no bg delta 1-14 RGB (SC-14)
8. **>= 5 ARIA landmarks**, skip link present (SC-06/07)
9. **>= 8 component library classes** (SC-08)

**When metaphor conflicts with guardrails:** Guardrails win. These are perception physics, not preferences.

**"The metaphor shapes experience; the guardrails prevent it from breaking experience."**
```

### B-EDIT-9: Update Layer 4 reference (Line 594)

```
old_string: **Layer 4: components/ (IMPLEMENTS) — Track 1 always, Track 2 Phase 4+**

new_string: **Layer 4: components/ (IMPLEMENTS) — Phase 4+**
```

**Total: 9 edits to design-system/compositional-core/CLAUDE.md.**

---

## SECTION C: VALIDATION PROTOCOL

### C.1 OVERVIEW

Two validation builds confirm the /build-page pipeline works. Both use the SAME pipeline, SAME verification, SAME success bar. The difference is content difficulty.

| Build | Content File | Purpose | Expected PA-05 |
|-------|-------------|---------|----------------|
| **Build 2 (FIRST)** | `extractions/deep/yegge-gas-town-extraction.md` | Full-potential test on structurally heterogeneous content | 3.0-3.5/4 |
| **Build 1 (SECOND)** | `research/RESEARCH-SYNTHESIS.md` | Controlled comparison on known-hard uniform content | 2.5-3.0/4 |

**Sequencing rationale:** Build 2 runs FIRST because it has higher success probability (heterogeneous content). If Build 2 fails, Build 1 is unnecessary (pipeline needs revision regardless). If Build 2 succeeds, Build 1 calibrates the content effect.

### C.2 BUILD 2: Gas Town Extraction (Full-Potential Test)

**Content:** `extractions/deep/yegge-gas-town-extraction.md` (1,324 lines)

**Why this content:**
- 4+ code blocks (Go, bash, tmux config, architecture diagrams)
- 5+ content modes (biographical, philosophical, architectural, procedural, comparative, dialogic)
- 4+ domain transitions (biography -> philosophy -> architecture -> implementation -> troubleshooting)
- 3+ inherent tensions ("biggest ant" vs colonies; chaos vs control; individual mastery vs factory)
- 4+ heading levels naturally

**PASS criteria (ALL must be met):**
- PA-05 >= 3.5/4 (the Flagship DESIGNED threshold)
- Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- Zero soul violations (SC-01 through SC-05)
- Zero void patterns (no whitespace voids >= 200px)
- All 15 blocking gates PASS at Flagship thresholds
- Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)
- SC-09: >= 15 RGB at every zone boundary
- SC-13: >= 3 channels shift at every boundary

**FAIL criteria (ANY triggers FAIL):**
- PA-05 < 3.0/4 (below COMPOSED threshold)
- Tier 5 < 4/8
- Any soul violation
- SC-09 < 15 RGB at any boundary

### C.3 BUILD 1: RESEARCH-SYNTHESIS (Controlled Comparison)

**Content:** `research/RESEARCH-SYNTHESIS.md`

**Why this content:** The KNOWN HARD CASE. Previous Flagship scored 1.5/4; remediation improved to 2.5/4. Using the same content isolates ARCHITECTURE as the independent variable.

**PASS criteria (ALL must be met):**
- PA-05 >= 3.0/4 (improvement over 2.5/4 baseline)
- Zero soul violations
- Zero void patterns
- All 15 blocking gates PASS at Flagship thresholds
- SC-09: >= 15 RGB at every zone boundary
- SC-11: 3+ distinct typography zones

**FAIL criteria (ANY triggers FAIL):**
- PA-05 < 2.5/4 (REGRESSION from previous remediation)
- Any soul violation
- SC-09 < 15 RGB at any boundary

### C.4 VERIFICATION PROTOCOL (Same for Both Builds)

Each build receives 5 verification layers:

**Layer 1: Full Gate Run (~15 sec)**
- 15 blocking gates + 2 advisory + 4 deliverable gates
- Flagship thresholds applied
- ALL blocking gates must PASS to proceed to PA

**Layer 2: Screenshot Pre-Capture (~5 min)**
- 3 viewports: 1440px, 1024px, 768px
- Cold look + scroll-through per viewport
- Animations disabled (`animation: none !important`), fonts loaded (`document.fonts.ready`)

**Layer 3: 9 PA Auditors in Parallel (~25 min)**
- 48 standard questions + 8 Tier 5 questions = 56 total
- Fresh-eyes auditors, zero build context
- Gate diagnostics provided as orientation

**Layer 4: Weaver Synthesis (~10 min)**
- PA-05 score (4 sub-criteria)
- Tier 5 score (8 YES/NO)
- Top-3 issues ranked by severity
- VERDICT: SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE

**Layer 5: Fix Cycles (if needed, max 3)**
- Same builder receives structured feedback
- 2-PA re-check + full gates + Tier 5 after each fix
- If quality below threshold after 3 fixes: REBUILD with fresh builder

### C.5 OVERALL PIPELINE VERDICT

| Build 2 (Gas Town) | Build 1 (Research-Synthesis) | Overall Verdict |
|---------------------|------------------------------|-----------------|
| >= 3.5 + Tier 5 >= 6/8 | >= 3.0 | **PIPELINE PASS** -- /build-page works. Ship the pipeline. |
| 3.0-3.4 + Tier 5 4-5/8 | >= 3.0 | **CONDITIONAL PASS** -- Architecture works, Flagship thresholds need calibration. |
| >= 3.5 | < 2.5 | **SELECTIVE PASS** -- Pipeline works for heterogeneous content, fails for uniform. Accept content limitation. |
| < 3.0 | any | **PIPELINE FAIL** -- The /build-page prompt needs fundamental revision. |

### C.6 WHAT SUCCESS MEANS

**PIPELINE PASS** triggers:
1. /build-page becomes the canonical page-building method
2. All CLAUDE.md edits from Sections A and B are applied permanently
3. TC and PA skills are edited per auditor reports
4. Migration begins -- all pages via /build-page
5. Tier model is archived (historical context, not operational routing)

**CONDITIONAL PASS** triggers:
1. /build-page is canonical but thresholds are provisional
2. CLAUDE.md edits applied with provisional note
3. Third validation build required after threshold calibration
4. Migration does NOT begin until thresholds are stable

---

## SECTION D: MASTER PROMPT ARCHITECTURE

### D.1 FORMAT DECISION

The master prompt is a document for a CODIFIER (writing/editing specific files with specific content), not a document for a COMPOSER (building a page). The codification task has:
- Concrete deliverables (8 specific files)
- External dependencies (content from 20+ research reports)
- Near-zero creative latitude (values must match sources exactly)
- Verifiable correctness (every value has a traceable source)

**Format: 10% conventions (orientation only), 75% recipe (file-by-file instructions), 15% checklist (validation only).**

The conventions brief that the codifier WRITES should be in conventions format (55% world-building, 30% recipe, 15% checklist). But the master prompt itself is a recipe. A recipe whose payload is a disposition.

### D.2 RECOMMENDED STRUCTURE

```
SECTION 0: MISSION (10-15 lines)
  Single paragraph: what we're building, why, what success looks like.
  3 non-negotiables: container width 940-960px, warm palette (R>=G>=B),
    every CSS value perceptible to a human.

SECTION 1: INVENTORY + SEQUENCING (15-20 lines)
  List of all files to create/edit, in execution order.
  Dependency graph: which files reference which.
  Total expected output: N files created, M files edited.

SECTION 2: PRE-FLIGHT (15-20 lines)
  Read 3 reference files. Verify they exist and are non-empty.
  Read CD-006. Note its quality level as calibration.
  >>> SELF-CHECK: Can you name 3 soul constraints from memory? If not, re-read.

SECTION 3: CONVENTIONS BRIEF (100-120 lines)
  Path. Structure (continuous zoom: identity -> zones -> CSS values).
  3 literal content blocks (perception thresholds, soul constraints, token references).
  Compositional guidance for connective sections (world-building verbs, not checklist verbs).
  >>> SELF-CHECK: Count words "must," "verify," "ensure," "fail" in what you wrote.
    If constraint language > 20% of total words, the brief has drifted to checklist. Revise.

SECTION 4: OPERATIONAL RECIPE (80-100 lines)
  Path. Phase template (build phases, not audit phases).
  Boundary-by-boundary build sequence (NOT channel-by-channel).
  Literal CSS value examples for each phase.
  >>> SELF-CHECK: Does every phase have (a) a CSS value, (b) a self-check, (c) a WHY annotation?

SECTION 5: SUPPLEMENTARY FILES (40-60 lines)
  Gate runner path + content. PA questions path + content. Any other deliverables.
  Literal blocks for all programmatic content (thresholds, assertions, question lists).

SECTION 6: FILE EDITS (60-80 lines)
  For each edit: exact file path, exact old_string, exact new_string.
  Edits are COPY-PASTE ready (the fresh instance uses the Edit tool directly).
  >>> SELF-CHECK: Read each edited file after applying. Verify old content gone, new content present.

SECTION 7: VALIDATION BUILDS (40-50 lines)
  Build 2 (Gas Town) instructions. What to check. How to fix.
  Build 1 (RESEARCH-SYNTHESIS) instructions. Conditional on Build 2 >= 3.0.
  Binary pass/fail criteria per build.

SECTION 8: RECENCY RESTATEMENT (15-20 lines)
  Re-state 3 non-negotiables.
  Re-state the mission.
  "You are done when: all files exist, all edits applied, both builds meet their bars."

TOTAL: 375-470 lines
```

### D.3 ANTI-SKIMMING TECHNIQUES (Include All 6)

These techniques MUST be applied throughout the master prompt:

1. **Front-load each section with the deliverable.** Not "Section 3 covers the conventions brief, which is a document that..." but "WRITE FILE: conventions-brief.md. CONTENT FOLLOWS:"

2. **Bold the first line of every section.** Opus scans for visual anchors during skimming. Bold lines get attention even in the attention trough.

3. **`>>> CRITICAL:` prefix for non-negotiable values.** Container width, perception thresholds, soul constraints all get this prefix. The prefix is a visual interrupt that forces attention.

4. **Never put critical information mid-paragraph.** Every critical value gets its own line. "Container width: 940-960px" on its own line, not buried in prose.

5. **Numbered steps within each file task.** "Step 1: Read tokens.css. Step 2: Copy the perception threshold table. Step 3: Write Section 1." The numbering creates scannable structure.

6. **Checkpoints between sections.** "STOP. Read back what you just wrote. Verify X, Y, Z before proceeding." Checkpoints force re-engagement after potential skimming stretches.

### D.4 ANTI-COMPRESSION ORDERING

The prompt must respect the primacy-recency attention curve:

- **Lines 1-50 (primacy zone):** Identity constraints + perception thresholds + the single most important principle. These survive because they're first.
- **Lines 50-350 (middle zone):** File-by-file creation instructions. PROCEDURAL content only. Exact paths, templates, step sequences. Procedural content survives compression; conceptual content does not.
- **Lines 350-470 (recency zone):** Validation protocol + restatement of non-negotiables. These survive because they're last.
- **RULE: Never introduce a NEW concept after line 300.** Any concept first appearing after line 300 has <20% chance of being processed.

### D.5 SELF-CHECK POINTS (Exactly 4)

One self-check per major phase. More than 4 creates noise; fewer than 4 misses critical failures.

**Self-Check 1 (After conventions brief):**
"Read back the file you just wrote. Count the perception threshold values. If < 6, you missed some. Count the words 'must,' 'verify,' 'ensure,' 'fail.' If constraint language exceeds 20% of total words, the brief has drifted into checklist territory. Revise the drifted sections."

**Self-Check 2 (After operational recipe):**
"Read back the file. Does every build phase reference (a) specific CSS values, (b) a self-check question for the builder, and (c) a cross-reference to the conventions brief section it operationalizes? If any phase lacks all three, add them."

**Self-Check 3 (After file edits):**
"Read each edited file. Do the edits reference content that exists in the new files you just created? If any cross-reference points to a section or path that doesn't exist, fix it now."

**Self-Check 4 (After validation builds):**
"Read the validation build output. Are there error messages? If yes, list them and fix the root cause before proceeding. If gates passed but PA failed, document the specific PA failures for the fix cycle."

### D.6 FORMAT FOR EACH SECTION TYPE

**Procedural sections (Sections 3-6):** RECIPE format.
- Imperative verbs: "Write," "Read," "Copy," "Apply," "Verify"
- Sequenced steps with numbering
- Literal content blocks marked with `>>> LITERAL:` prefix
- Self-check at the end

**World-building sections (Section 0, opening of Section 3):** CONVENTIONS format.
- Declarative verbs: "is," "creates," "produces," "means"
- Short paragraphs (2-3 sentences max)
- No rules, no thresholds, no verification language
- Purpose: establish the fresh instance's mental model BEFORE procedural work

**Validation sections (Section 7, self-checks):** CHECKLIST format.
- Binary pass/fail criteria
- This is the ONE place where checklist format is appropriate: verifying completed work
- Constraint verbs: "verify," "check," "must be"

### D.7 CRITICAL CONSTRAINTS FOR THE ASSEMBLER

The assembler agent composing the final master prompt MUST observe:

1. **Total length: 400-500 lines.** Under 400 risks missing critical content. Over 500 enters skimming-collapse territory. The sweet spot is 450 lines.

2. **Zero teaching.** No background on the project's history. No explanation of WHY the pipeline exists. No alternative approaches that were rejected. Every line either gives an instruction or provides content to copy.

3. **60% literal / 40% instruction.** Perception thresholds, file paths, token names, soul constraints, CSS variable references, section headers -- all provided as literal copyable blocks. Connective tissue, compositional guidance, and self-checks are the 40% instruction.

4. **Hardest tasks first.** The conventions brief (most creative, most failure-prone) is Section 3. Mechanical edits (least creative, least failure-prone) are Section 6. Validation builds (most attention-depleted) are Section 7 but are gated by binary criteria that require no creativity.

5. **No new concepts after line 300.** Everything conceptual (what the design system IS, what perceptible CSS means, what multi-coherence requires) appears in Sections 0-3. Sections 4-8 are pure execution.

6. **The conventions brief content in the prompt should be in continuous-zoom format.** Not flat sections but a progressive zoom: identity (10 lines) -> zone semantics (20 lines) -> CSS values (30 lines) -> binary constraints (40 lines). The zoom structure itself encodes the telescope-microscope fusion and the fresh instance will reproduce it.

### D.8 WHAT THE ARCHITECTURE CANNOT PREVENT

Honest assessment of irreducible risks:

1. **The conventions brief may still read like a checklist** despite conventions-format guidance. The dispositional/prescriptive distinction is subtle and hard to enforce through instructions alone. Probability: 40-50%.

2. **The agent may invent CSS values that violate thresholds** despite literal content blocks. Self-checks catch some but not all. Probability: 20-30%.

3. **The validation builds may be perfunctory.** By Section 7, attention is depleted. The binary criteria compensate (pass/fail is harder to fudge than quality judgment). Probability: 30%.

4. **~55% intelligence loss is structural.** The prompt compresses 370KB+ of research into ~450 lines. Relational, proportional, and emergent knowledge dies. Procedural knowledge survives. This is the ceiling of any single-prompt approach. The reference files (tokens.css, mechanism-catalog.md, prohibitions.md) regenerate some lost intelligence through direct reading.

---

## SUMMARY

| Section | Content | Edits |
|---------|---------|-------|
| A | design-system/CLAUDE.md edits | 11 old_string/new_string pairs |
| B | compositional-core/CLAUDE.md edits | 9 old_string/new_string pairs |
| C | Validation protocol | 2 builds, 5 verification layers, verdict matrix |
| D | Master prompt architecture | 8-section structure, 6 anti-skimming techniques, 4 self-checks |

**Key numbers:**
- Master prompt target length: 400-500 lines
- Format: 10% conventions, 75% recipe, 15% checklist
- Self-checks: exactly 4
- Anti-skimming techniques: 6
- No new concepts after line 300
- 60% literal content, 40% instruction

---

**END DRAFT-13**
