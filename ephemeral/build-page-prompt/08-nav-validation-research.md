# 08: Navigation File Edits + Validation Protocol Research

**Agent:** nav-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #8 -- Extract exact CLAUDE.md edits needed + design validation protocol
**Sources:** design-system/CLAUDE.md (733 lines), design-system/compositional-core/CLAUDE.md (681 lines), 09-CONTENT-ANALYSIS.md, 08-VERIFICATION-SPEC.md, extractions/ directory listing, 15-ALWAYS-FLAGSHIP-SIMPLIFICATION.md

---

## PART 1: EXACT EDITS TO design-system/CLAUDE.md

### SUMMARY OF CHANGES

The root CLAUDE.md currently reflects Phase D / Middle-Tier as the latest state, with tier-routing logic, Track 1 vs Track 2 classification, and multi-tier building protocols. Under ALWAYS FLAGSHIP + /build-page, the following must change:

1. **Current Phase line** -- update to reflect /build-page pipeline
2. **QUICK START section** -- add "I'm here to BUILD with /build-page" as primary entry
3. **SKILLS section** -- add /build-page as the primary building skill, reframe TC and PA as sub-skills invoked BY /build-page
4. **INGESTION PROTOCOL** -- simplify: remove tier-conditional loading, remove Track 1/Track 2 split for builders
5. **ROUTING LOGIC** -- remove Q3 (Track 1 vs Track 2) and Q5 tier-based routing
6. **EVOLUTION STATE** -- update to reflect current state
7. **FOLDER MAP** -- add pipeline file references for /build-page prompt and recipe
8. **ANTI-PATTERNS** -- update #7 to remove Track 1/Track 2 confusion

### EDIT 1: Update Current Phase (Line 9)

```
old_string: **Current Phase:** Phase D COMPLETE (CONDITIONAL PASS, 2026-02-15). Richness + rigidity research COMPLETE (11 agents, tier model established). Middle-tier Experiment SUCCESS (2026-02-16). Ceiling Preparation In Progress.
new_string: **Current Phase:** /build-page Pipeline ACTIVE (2026-02-19). ALWAYS FLAGSHIP -- every page built at maximum compositional intensity. Tier routing REMOVED. /build-page is the single entry point for all page building.
```

### EDIT 2: Add /build-page to QUICK START (After line 18)

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

### EDIT 3: Update Key Principle (Lines 10-13)

```
old_string: **Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated)
- **specification/** — Complete documentation for understanding (research provenance)
new_string: **Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated). Invoked automatically by /build-page
- **specification/** — Complete documentation for understanding (research provenance)

**Building protocol:** ALL pages are built via /build-page at Flagship tier. No tier routing. No Track 1/Track 2 classification. The orchestrator handles everything.
```

### EDIT 4: Update SKILLS Section (Lines 318-354)

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

### EDIT 5: Simplify INGESTION PROTOCOL Builder Section (Lines 385-417)

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
1. ✅ prohibitions.md + tokens.css (pre-loaded by orchestrator)
2. ✅ Conventions brief with content analysis + metaphor + mechanism selections (from TC pipeline)
3. ✅ Operational recipe with specific CSS values + sequenced build steps
4. ✅ Gate runner for micro-gate verification during build

Phase-gated access is enforced by the orchestrator:
- Phases 0-3: TC runs BLIND (no library access)
- Phase 3.5: Metaphor lock (GATE -- no changes after)
- Phase 4: Mechanisms extracted (grammar/mechanism-catalog.md)
- Phase 5: Optional case study comparison (divergence check)
- Phase 6: Opus builder implements with operational recipe
- Phase 7: Full verification (21 gates + 56-question PA)

**Manual builder invocation (if /build-page unavailable):**
- Follow compositional-core/CLAUDE.md Track 2 workflow
- ALL pages at Flagship intensity (no tier routing)
```

### EDIT 6: Update ROUTING LOGIC (Lines 479-513)

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

### EDIT 7: Update ANTI-PATTERNS #7 (Lines 579-586)

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

### EDIT 8: Update EVOLUTION STATE (Lines 229-298)

This is a large section. The key changes:

```
old_string: ### CURRENT PHASE: Phase D Extraction Validation (COMPLETE — CONDITIONAL PASS) + Middle-Tier Experiment (SUCCESS)
new_string: ### CURRENT PHASE: /build-page Pipeline (ACTIVE)
```

And the 3-TIER TIMELINE section (lines 270-298) should be updated:

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
- ✅ Phase D: Extraction Validation (COMPLETE -- CONDITIONAL PASS, 2026-02-15)
- ✅ Richness + Rigidity Research (COMPLETE -- 11 agents, tier model, 2026-02-15)
- ✅ Middle-tier Experiment (COMPLETE -- SUCCESS, PA-05 4/4, 2026-02-16)
- ✅ Flagship Experiment + Remediation (COMPLETE -- PA-05 2.5/4, 2026-02-17-18)
- ✅ Pipeline Analysis + Architecture (COMPLETE -- 50+ agents, Pipeline v2 designed, 2026-02-18)
- ✅ Flagship 4/4 Recipe Research (COMPLETE -- 23 reports, compositional intelligence stack, 2026-02-19)
- 🔧 /build-page Prompt Assembly: Writing the master execution prompt for the /build-page pipeline
- ⏳ /build-page Validation: Test with 2 different content files
- ⏳ Migration: All pages via /build-page at Flagship tier

**FORWARD (post-validation migration):**
- ═══ VALIDATION LINE ═══ (After 2 successful /build-page runs)
- 📋 Full Migration: ALL pages via /build-page (single pipeline, single tier)
```

---

## PART 2: EXACT EDITS TO design-system/compositional-core/CLAUDE.md

### SUMMARY OF CHANGES

The compositional-core CLAUDE.md currently has Track 1/Track 2 classification, tier-conditional fractal requirements, and manual builder workflow. Under ALWAYS FLAGSHIP + /build-page:

1. **Status line** -- update to reflect /build-page
2. **TRACK CLASSIFICATION** -- remove Track 1/Track 2 split; single Flagship path
3. **TRACK 1 WORKFLOW** -- remove entirely (Track 1 no longer exists)
4. **TRACK 2 WORKFLOW** -- rename to "BUILD WORKFLOW (Flagship)" and simplify
5. **Perceptual Cost Economics** -- update guardrails to Flagship thresholds
6. **VERIFICATION CHECKLIST** -- update to include Tier 5 and Flagship thresholds
7. **PHASE D VALIDATION LESSONS** -- compress; add Flagship experiment lessons

### EDIT 1: Update Status Line (Line 8)

```
old_string: **Status:** OPERATIONAL (Phase C Complete, Phase D CONDITIONAL PASS, Middle-Tier Experiment SUCCESS, Ceiling Preparation In Progress)
new_string: **Status:** OPERATIONAL (Phase C Complete, /build-page Pipeline ACTIVE). ALWAYS FLAGSHIP -- every page at maximum compositional intensity. Tier routing REMOVED.
```

### EDIT 2: Replace Track Classification (Lines 54-84)

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

### EDIT 3: Replace Track 1 Workflow (Lines 88-107)

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

### EDIT 4: Rename Track 2 Section (Line 110)

```
old_string: ## TRACK 2 WORKFLOW
new_string: ## FLAGSHIP BUILD WORKFLOW (Automated by /build-page)
```

### EDIT 5: Update Verification Checklist (Lines 613-639)

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
- □ PA-05 >= 3.5/4 (Flagship threshold, raised from 3.0)
- □ Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- □ Zero void patterns (PA-50 through PA-53)
- □ Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)
- □ Rhythm is not metronomic (PA-17 + PA-41)

**Guardrails (Flagship thresholds):**
- □ 940-960px container width (SC-01)
- □ >= 15 RGB max-channel delta at zone boundaries (SC-09)
- □ <= 108px total stacked gap at boundaries (SC-10)
- □ 3+ distinct typography zones, display-body >= 10px (SC-11)
- □ >= 3 of 6 channels shift at every boundary, avg >= 4 (SC-13)
- □ >= 3 distinct border configurations (SC-15)
- □ No sub-perceptual CSS (no letter-spacing < 0.02em, no bg delta 1-14 RGB) (SC-14)
- □ >= 5 ARIA landmarks (SC-06), skip link (SC-07)
- □ >= 8 component library classes (SC-08)

**Divergence (always required -- every build runs full TC):**
- □ 5-dimension divergence table complete?
- □ DIFFERENT on 3+ dimensions?
- □ If convergence: strong justification documented?
```

### EDIT 6: Update Phase D Validation Lessons (Lines 642-656)

```
old_string: ## PHASE D VALIDATION LESSONS (2026-02-15)

Phase D tested 5 pipeline configurations. COMPLETE — CONDITIONAL PASS. Key lessons for builders:
new_string: ## EXPERIMENT LESSONS (Phase D through Flagship)

Phase D through Flagship experiments (2026-02-15 to 2026-02-18) tested 7 pipeline configurations. Key lessons for builders:
```

After the existing 4 Phase D lessons, ADD:

```
old_string: **Post-D Research (COMPLETE, 2026-02-15):** Richness + rigidity investigations (11 agents) established tier model (Floor/Middle/Ceiling/Flagship) and modification recommendations. Skill enrichment currently in progress to address "sample 2-4 mechanisms" limitation.

See: ephemeral/continuity-docs/HANDOFF.md for full Phase D results.
new_string: 5. **Recipe beats checklist for builders.** The Middle experiment builder got a 100-line RECIPE (sequenced steps, specific CSS values). The Flagship builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if" verbs). Recipe = DESIGNED; Checklist = FLAT. The /build-page pipeline provides RECIPES, not checklists.

6. **Content structural heterogeneity is the floor.** Content with code blocks, multiple rhetorical modes, and domain transitions FORCES visual variety. Uniform prose caps PA-05 at ~2.5/4 regardless of architecture. Content selection is a DESIGN DECISION.

7. **Programmatic gates catch ~26%, PA catches ~40%, Tier 5 catches ~34%.** All three layers are required. Gates alone produce imperceptible-but-compliant CSS. PA alone misses void patterns that gates catch. Tier 5 alone cannot distinguish without the designed threshold.

8. **Same builder for fix cycles.** Compositional memory is irreplaceable. New agents must re-derive metaphor from scratch, losing 15-20 minutes of context. The builder that produced 1.5/4 improved to 2.5/4 with targeted feedback.

**Full experiment history:** See ephemeral/continuity-docs/HANDOFF.md
```

---

## PART 3: VALIDATION PROTOCOL

### 3.1 OVERVIEW

Two validation builds are required to confirm the /build-page pipeline works:

| Build | Content | Purpose | What It Tests |
|-------|---------|---------|---------------|
| **Build 1** | RESEARCH-SYNTHESIS.md | Controlled comparison | Can the new pipeline beat 2.5/4 on the SAME content that capped at 2.5/4 before? |
| **Build 2** | A file from extractions/ | Full-potential test | Can the pipeline achieve Flagship 4/4 on structurally heterogeneous content? |

### 3.2 BUILD 1: /build-page with RESEARCH-SYNTHESIS.md

**Why this content:** RESEARCH-SYNTHESIS.md is the KNOWN HARD CASE. The previous Flagship experiment scored 1.5/4 on this content; remediation improved to 2.5/4. Using the SAME content isolates the ARCHITECTURE as the independent variable. If the /build-page pipeline produces the same 2.5/4, the architecture change had no effect. If it produces 3.0+, the pipeline demonstrably improves over the previous approach.

**What constitutes PASS for Build 1:**
- PA-05 >= 3.0/4 (improvement over 2.5/4 baseline)
- Zero soul violations (SC-01 through SC-05 all PASS)
- Zero void patterns (no whitespace voids >= 200px)
- All 15 blocking gates PASS at Flagship thresholds
- SC-09 >= 15 RGB at every zone boundary (was 1-8 RGB in the failed Flagship)
- SC-11: 3+ distinct typography zones (was uniform 16px/400 in failed Flagship)
- SC-13: >= 3 channels shift at every boundary (was unverifiable in failed Flagship)

**What constitutes FAIL for Build 1:**
- PA-05 < 2.5/4 (REGRESSION from previous remediation)
- Any soul violation (SC-01 through SC-05)
- SC-09 < 15 RGB at any boundary (same failure as before)
- SC-11 < 3 typography zones (same failure as before)

**What constitutes NOTABLE SUCCESS for Build 1:**
- PA-05 >= 3.5/4 AND Tier 5 >= 4/8 on this known-hard content would be exceptional
- This would indicate the pipeline overcomes content limitation, not just architecture limitation

**Expected outcome:** PA-05 = 2.5-3.0/4. This content has WEAK affinity with 4/6 mechanism categories (temporal, spatial, behavioral, relational). The pipeline should improve over the failed approach (better CSS allocation, recipe not checklist, Opus builder) but the content ceiling likely prevents Flagship scores. Any improvement over 2.5 is a win.

### 3.3 BUILD 2: /build-page with EXTRACTION FILE

#### Recommended Content: `extractions/deep/yegge-gas-town-extraction.md`

**Why this file is the BEST validation candidate from extractions/:**

| Property | Gas Town Extraction | Requirement Met? |
|----------|-------------------|-----------------|
| **P1: Code blocks** | Multiple code blocks (Go, bash, tmux config, architecture diagrams) | YES (>= 4) |
| **P2: Multiple content modes** | Biographical, philosophical, architectural, procedural, comparative, dialogic | YES (>= 5 modes) |
| **P3: Procedural sequences** | Implementation guide (8-step Gas Town setup), tmux commands, installation steps | YES (3+) |
| **P4: Questions/dialogic address** | "When to Use Gas Town" section, troubleshooting, FAQ-like structure | YES |
| **P5: High-contrast visual anchors** | Architecture ASCII diagrams, tables (8 stages, roles, comparisons), code blocks, quotes | YES (4+ types) |
| **P6: Domain transitions** | Biography -> Philosophy -> Architecture -> Implementation -> Troubleshooting -> Comparison | YES (4+ transitions) |
| **P7: Self-referential potential** | Gas Town was "built using Gas Town" -- recursive validation pattern | YES (meta-content) |
| **Length** | 1,324 lines | YES (>= 600) |
| **Inherent tension** | "Biggest ant" vs colonies; chaos vs control; individual mastery vs factory scale | YES (3+ tensions) |
| **Hierarchical depth** | 4+ heading levels naturally (TOC -> sections -> subsections -> detail items) | YES |

**Why NOT other candidates:**

| Candidate | Lines | Why NOT |
|-----------|-------|---------|
| `infrastructure/001-system-mac-remote-control-burcs.md` | 221 | Too short. Already used in Middle experiment. Would conflate content familiarity with pipeline improvement. |
| `deep/ralph-complete-extraction.md` | 1,436 | Strong candidate (similar structural properties) but less diverse content modes -- primarily procedural/tutorial. Gas Town has philosophy + implementation + comparison + troubleshooting. |
| `deep/boris-cherny-extraction.md` | 1,228 | Strong candidate but more philosophical/narrative-heavy. Less structural heterogeneity than Gas Town. |
| `deep/molly-panopticon-extraction.md` | 949 | Good structural variety but single-domain (personal knowledge management). Gas Town has broader domain range. |
| `productivity-workflows.md` | 378 | Too short and too table-heavy (uniform tables like RESEARCH-SYNTHESIS). |

**What constitutes PASS for Build 2:**
- PA-05 >= 3.5/4 (the Flagship DESIGNED threshold)
- Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- Zero soul violations
- Zero void patterns
- All 15 blocking gates PASS at Flagship thresholds
- Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)
- Multi-coherence verified: SC-13 PASS + PA-61 detects multi-voice
- Scale coverage verified: DG-1 fractal table valid + PA-63 detects fractal

**What constitutes FAIL for Build 2:**
- PA-05 < 3.0/4 (below COMPOSED threshold)
- Tier 5 < 4/8 (NOT Flagship territory)
- Any soul violation
- Metaphor is ANNOUNCED (labels needed to perceive it)
- SC-09 < 15 RGB at any boundary

**What constitutes NOTABLE SUCCESS for Build 2:**
- PA-05 = 4/4 AND Tier 5 = 8/8 (theoretical maximum, never achieved)
- Even PA-05 >= 3.5 AND Tier 5 >= 6/8 would be the FIRST Flagship-tier page ever produced

**Expected outcome:** PA-05 = 3.0-3.5/4, Tier 5 = 4-6/8. The content has excellent structural heterogeneity but Flagship 4/4 has NEVER been achieved. The first attempt is calibration data. A score of 3.0+ with Tier 5 >= 4/8 would demonstrate the pipeline works and calibrate Tier 5 thresholds.

### 3.4 EVALUATION ON EACH BUILD

Both builds receive the SAME verification recipe (from 08-VERIFICATION-SPEC.md):

**Layer 1: Full Gate Run (~15 sec)**
- 15 blocking gates + 2 advisory + 4 deliverable gates
- Flagship thresholds applied
- All blocking gates must PASS to proceed to PA

**Layer 2: Screenshot Pre-Capture (~5 min)**
- 3 viewports (1440px, 1024px, 768px)
- Cold look + scroll-through per viewport
- Animations disabled, fonts loaded

**Layer 3: 9 PA Auditors Parallel (~25 min)**
- 48 standard questions + 8 Tier 5 questions = 56 total
- Fresh-eyes, zero build context
- Gate diagnostics as orientation context

**Layer 4: Weaver Synthesis (~10 min)**
- PA-05 score (4 sub-criteria)
- Tier 5 score (8 YES/NO)
- Top-3 issues ranked
- VERDICT: SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE

**Layer 5: Fix Cycles (if needed, max 3)**
- Same builder, structured feedback
- 2-PA re-check + full gates + Tier 5

### 3.5 OVERALL PIPELINE VERDICT

| Build 1 Result | Build 2 Result | Overall Verdict |
|----------------|----------------|-----------------|
| >= 3.0 | >= 3.5 + Tier 5 >= 6/8 | **PIPELINE PASS** -- /build-page works. Ship the pipeline. |
| >= 3.0 | 3.0-3.4 + Tier 5 4-5/8 | **PIPELINE CONDITIONAL PASS** -- Architecture works, Flagship needs calibration. Adjust thresholds, try again. |
| >= 3.0 | < 3.0 | **CONTENT PASS, ARCHITECTURE FAIL** -- Pipeline improves on hard content but fails on good content. Root cause analysis needed. |
| < 2.5 | >= 3.5 | **SELECTIVE PASS** -- Pipeline works for heterogeneous content, fails for uniform content. Accept content limitation, document ceiling. |
| < 2.5 | < 3.0 | **PIPELINE FAIL** -- The /build-page prompt needs fundamental revision. Root cause: likely the prompt itself (compression, recipe quality, builder routing). |

### 3.6 IF ONE PASSES AND ONE FAILS

**If Build 1 passes but Build 2 fails:**
This is the UNEXPECTED outcome. It would mean the pipeline improves on hard content but fails on easy content. Root causes to investigate:
1. Content analysis phase -- did the orchestrator correctly identify structural heterogeneity?
2. Mechanism selection -- did TC select mechanisms with content affinity?
3. Builder recipe -- was the recipe content-appropriate?
4. Gate calibration -- are Flagship thresholds too aggressive for first attempt?

**If Build 2 passes but Build 1 fails:**
This is the EXPECTED outcome if content ceiling is real. Action:
1. Document the content effect size (Build 2 PA-05 minus Build 1 PA-05)
2. Accept RESEARCH-SYNTHESIS as a ceiling case: content structural uniformity caps at ~3.0
3. Consider content adaptation: add code blocks, procedural elements, domain transitions to RESEARCH-SYNTHESIS before building (this tests whether content enrichment improves scores)
4. Do NOT revise the pipeline based on Build 1 alone -- the content limitation is documented

**If both fail:**
1. Run the minimum verification (Section 7 of 08-VERIFICATION-SPEC.md: 6 gates + 3 auditors + 3 Tier 5 = ~22 min) to quickly diagnose WHERE failure occurs
2. If gates fail: prompt issue (builder not producing correct CSS)
3. If PA fails: compositional issue (builder producing correct CSS but not composed)
4. If Tier 5 fails: depth issue (builder composed but not at Flagship level)
5. Each failure mode has different remediation: gate fixes are mechanical (CSS recipes), PA fixes are directional (compositional feedback), Tier 5 fixes are structural (more design moments, more multi-voice)

### 3.7 SEQUENCING

Build 2 FIRST (Gas Town extraction). Rationale:
1. Build 2 has the higher probability of success (structurally heterogeneous content)
2. Success on Build 2 validates the pipeline BEFORE testing it on hard content
3. If Build 2 fails, Build 1 is unnecessary (pipeline needs revision regardless)
4. If Build 2 succeeds, Build 1 calibrates the content effect size

Build 1 SECOND (RESEARCH-SYNTHESIS). Only run if Build 2 achieves PA-05 >= 3.0.

### 3.8 WHAT SUCCESS MEANS FOR THE PROJECT

If the pipeline achieves **PIPELINE PASS** (Build 1 >= 3.0, Build 2 >= 3.5 + Tier 5 >= 6/8):

1. **/build-page becomes the canonical page-building method** -- all future pages use this pipeline
2. **CLAUDE.md edits from Part 1 and Part 2 are applied permanently**
3. **TC and PA skills are edited** per the tc-auditor and pa-auditor reports (tier removal + Flagship enrichment)
4. **Migration begins** -- all 70-80 pages processed through /build-page, no tier classification needed
5. **The tier model is archived** -- Floor/Middle/Ceiling/Flagship classification becomes historical context, not operational routing

If the pipeline achieves **PIPELINE CONDITIONAL PASS**:

1. /build-page is the canonical method but Flagship thresholds need calibration
2. CLAUDE.md edits are applied with a note that Tier 5 thresholds are provisional
3. A third validation build is required after threshold calibration
4. Migration does not begin until thresholds are stable

---

## APPENDIX: FILES TO CREATE OR EDIT FOR /build-page INTEGRATION

### New Files (to be created by the master prompt assembly)

| File | Location | Purpose | Lines (est.) |
|------|----------|---------|--------------|
| `/build-page` orchestrator prompt | `~/.claude/skills/build-page/SKILL.md` or equivalent | The master execution prompt | ~500-600 |
| Operational recipe | `design-system/compositional-core/operational-recipe.md` (or equivalent) | Sequenced CSS build recipe for Opus builder | ~400-500 |

### Existing Files to Edit

| File | Edit Type | What Changes |
|------|-----------|-------------|
| `design-system/CLAUDE.md` | 8 edits (see Part 1) | Phase, Quick Start, Skills, Ingestion, Routing, Anti-Patterns, Evolution, Folder Map |
| `design-system/compositional-core/CLAUDE.md` | 6 edits (see Part 2) | Status, Track Classification, Track 1, Track 2, Verification, Lessons |
| `~/.claude/skills/tension-composition/SKILL.md` | Tier removal (~220 lines) | Remove tier-conditional logic per 15-ALWAYS-FLAGSHIP-SIMPLIFICATION.md |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | Add Tier 5 (~40 lines) | Add PA-60 through PA-67, Flagship thresholds |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | Add content affinity map | Per 09-CONTENT-ANALYSIS.md -- content-type-to-mechanism affinity |

---

**END OF NAV/VALIDATION RESEARCH**

**Key numbers:**
- 8 edits to design-system/CLAUDE.md
- 6 edits to design-system/compositional-core/CLAUDE.md
- 2 validation builds (Gas Town extraction FIRST, RESEARCH-SYNTHESIS SECOND)
- Build 2 success bar: PA-05 >= 3.5, Tier 5 >= 6/8
- Build 1 success bar: PA-05 >= 3.0
- Pipeline PASS requires both builds meeting their bars
- Best validation candidate: `extractions/deep/yegge-gas-town-extraction.md` (1,324 lines, 6+ domain transitions, 4+ code blocks, 5+ content modes, inherent multi-tension)
