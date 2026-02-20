# DRAFT-13: CLAUDE.md Edits + Validation Protocol + Overall Prompt Architecture

**Agent:** nav-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #13 -- DRAFT sections for master execution prompt
**Sources:** 08-nav-validation-research.md (720 lines, own report), 07-metacog-analysis.md (598 lines, metacog report), 11-format-analysis.md, 12-builder-simulation.md, 04-orchestrator-research.md

---

## HOW TO USE THIS DOCUMENT

This document contains FOUR deliverables, each a self-contained section of the master execution prompt:

1. **SECTION A: design-system/CLAUDE.md Edits** -- exact Edit tool pairs (8 edits)
2. **SECTION B: design-system/compositional-core/CLAUDE.md Edits** -- exact Edit tool pairs (6 edits)
3. **SECTION C: Validation Protocol** -- exact steps for 2 validation builds
4. **SECTION D: Overall Prompt Architecture** -- the blueprint for the entire master prompt

The assembler (Task #17) should INCORPORATE these sections, not copy them verbatim. Each section is formatted as prompt content -- text that appears in the final master execution prompt.

---

## SECTION A: MASTER PROMPT TEXT FOR design-system/CLAUDE.md EDITS

>>> The text below is LITERAL PROMPT CONTENT for the master execution prompt's file-edit section.

---

### FILE EDITS: design-system/CLAUDE.md (8 edits)

**Read the file first.** Before applying any edit, read `design-system/CLAUDE.md` in full. Verify each old_string exists EXACTLY as shown. If any old_string does not match, STOP and report the discrepancy -- do NOT guess.

**Apply edits in order.** Edits 1-8 are sequenced to avoid conflicts.

**After all 8 edits, read the file back.** Verify: (a) no broken markdown, (b) no duplicate sections, (c) the word "Track 1" appears zero times in the QUICK START or ROUTING LOGIC sections.

---

**EDIT 1 of 8: Update Current Phase**

```
FILE: design-system/CLAUDE.md

old_string: **Current Phase:** Phase D COMPLETE (CONDITIONAL PASS, 2026-02-15). Richness + rigidity research COMPLETE (11 agents, tier model established). Middle-tier Experiment SUCCESS (2026-02-16). Ceiling Preparation In Progress.

new_string: **Current Phase:** /build-page Pipeline ACTIVE (2026-02-19). ALWAYS FLAGSHIP -- every page built at maximum compositional intensity. Tier routing REMOVED. /build-page is the single entry point for all page building.
```

---

**EDIT 2 of 8: Update Key Principle**

```
FILE: design-system/CLAUDE.md

old_string: **Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated)
- **specification/** — Complete documentation for understanding (research provenance)

new_string: **Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated). Invoked automatically by /build-page
- **specification/** — Complete documentation for understanding (research provenance)

**Building protocol:** ALL pages are built via /build-page at Flagship tier. No tier routing. No Track 1/Track 2 classification. The orchestrator handles everything.
```

---

**EDIT 3 of 8: Update QUICK START Build Entry**

```
FILE: design-system/CLAUDE.md

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

---

**EDIT 4 of 8: Replace SKILLS Section**

```
FILE: design-system/CLAUDE.md

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

**Invocation:** `/build-page <content-file-path>`

**What it orchestrates:** Content analysis -> TC pipeline (Flagship-only) -> Opus builder deployment -> 21-gate programmatic verification -> Mode 4 PA (9 auditors + 8 Tier 5 questions) -> fix cycles -> verdict

**Success bar:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations

**Sub-skills invoked automatically:**
- Tension-composition (TC): Full Phases 0-5, Flagship intensity
- Perceptual-auditing (PA): Full 56 questions (48 standard + 8 Tier 5)

**NOT invoked for:** Research, auditing existing pages, planning

---

### Tension-Composition (Sub-Skill -- Invoked by /build-page)

**Direct invocation:** Only if /build-page is unavailable
**Skill file:** `~/.claude/skills/tension-composition/SKILL.md`
**ALWAYS FLAGSHIP:** No tier routing. Full Phases 0-5 for every page.

---

### Perceptual-Auditing (Sub-Skill -- Invoked by /build-page)

**Direct invocation:** Only for auditing EXISTING pages (not new builds)
**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Full 56-question audit required** -- 48 standard + 8 Tier 5 (PA-60 through PA-67)
```

---

**EDIT 5 of 8: Simplify Builder Ingestion Protocol**

```
FILE: design-system/CLAUDE.md

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

---

**EDIT 6 of 8: Simplify Routing Logic**

```
FILE: design-system/CLAUDE.md

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

---

**EDIT 7 of 8: Update Anti-Pattern #7**

```
FILE: design-system/CLAUDE.md

old_string: ### 7. Not distinguishing Track 1 from Track 2

**Problem:** Using token application for prose-heavy content, or invoking skill for data tables

**Correct:** Read pipeline/03-MIGRATION-PIPELINE.md (explains Track 1 vs Track 2 split)

**Rule:** Track 1 = assembly (45-90 min), Track 2 = composition (3-5 hrs)

new_string: ### 7. Trying to build without /build-page

**Problem:** Manually invoking TC skill, manually assembling components, or building without the orchestrator

**Correct:** Run `/build-page <content-path>`. The orchestrator handles TC pipeline, builder deployment, gate verification, and PA audit automatically.

**Rule:** /build-page is the ONLY sanctioned way to build new pages. Manual building is a fallback for when /build-page is unavailable.
```

---

**EDIT 8 of 8: Update Evolution State**

This edit has TWO sub-edits (8a and 8b) because the section is large.

**EDIT 8a: Update section header**

```
FILE: design-system/CLAUDE.md

old_string: ### CURRENT PHASE: Phase D Extraction Validation (COMPLETE — CONDITIONAL PASS) + Middle-Tier Experiment (SUCCESS)

new_string: ### CURRENT PHASE: /build-page Pipeline (ACTIVE)
```

**EDIT 8b: Update timeline**

```
FILE: design-system/CLAUDE.md

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
- /build-page Prompt Assembly: Writing the master execution prompt
- /build-page Validation: Test with 2 different content files
- Migration: All pages via /build-page at Flagship tier

**FORWARD (post-validation migration):**
- === VALIDATION LINE === (After 2 successful /build-page runs)
- Full Migration: ALL pages via /build-page (single pipeline, single tier)
```

---

**SELF-CHECK after all 8 edits:**
1. Read design-system/CLAUDE.md back. Search for "Track 1" -- should appear ZERO times in QUICK START, ROUTING LOGIC, or ANTI-PATTERNS sections. (It may still appear in historical sections like the FOLDER MAP or SUPERSESSION MATRIX -- that is acceptable as historical context.)
2. Search for "Track 2" -- should appear only in the Flagship Build Workflow reference in the manual fallback.
3. Search for "/build-page" -- should appear at least 6 times.
4. Verify no broken code fences (triple backticks must be paired).

---

## SECTION B: MASTER PROMPT TEXT FOR compositional-core/CLAUDE.md EDITS

>>> The text below is LITERAL PROMPT CONTENT for the master execution prompt's file-edit section.

---

### FILE EDITS: design-system/compositional-core/CLAUDE.md (6 edits)

**Read the file first.** Before applying any edit, read `design-system/compositional-core/CLAUDE.md` in full. Verify each old_string exists EXACTLY as shown.

**Apply edits in order.** Edits 1-6 are sequenced to avoid conflicts.

**After all 6 edits, read the file back.** Verify: (a) "Track 1" appears zero times as a current workflow, (b) "ALWAYS FLAGSHIP" appears at least once, (c) the VERIFICATION CHECKLIST references "Tier 5" and "SC-09."

---

**EDIT 1 of 6: Update Status Line**

```
FILE: design-system/compositional-core/CLAUDE.md

old_string: **Status:** OPERATIONAL (Phase C Complete, Phase D CONDITIONAL PASS, Middle-Tier Experiment SUCCESS, Ceiling Preparation In Progress)

new_string: **Status:** OPERATIONAL (Phase C Complete, /build-page Pipeline ACTIVE). ALWAYS FLAGSHIP -- every page at maximum compositional intensity. Tier routing REMOVED.
```

---

**EDIT 2 of 6: Replace Track Classification with Flagship Protocol**

```
FILE: design-system/compositional-core/CLAUDE.md

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

**The Addition Test is RETIRED.** Under ALWAYS FLAGSHIP, every page gets full composition.

**The only escape valve:** If content has ZERO cosmetic tension (pure data tables, raw API reference), the TC pipeline detects this automatically and produces a flat-mode build. This is not a routing decision.

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

---

**EDIT 3 of 6: Replace Track 1 Workflow with Fallback Stub**

```
FILE: design-system/compositional-core/CLAUDE.md

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

---

**EDIT 4 of 6: Rename Track 2 to Flagship Build Workflow**

```
FILE: design-system/compositional-core/CLAUDE.md

old_string: ## TRACK 2 WORKFLOW

new_string: ## FLAGSHIP BUILD WORKFLOW (Automated by /build-page)
```

---

**EDIT 5 of 6: Update Verification Checklist to Flagship Thresholds**

```
FILE: design-system/compositional-core/CLAUDE.md

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
- Run full 48 standard PA questions + 8 Tier 5 questions (PA-60 through PA-67)
- PA-05 >= 3.5/4 (Flagship threshold, raised from 3.0)
- Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- Zero void patterns (PA-50 through PA-53)
- Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)
- Rhythm is not metronomic (PA-17 + PA-41)

**Guardrails (Flagship thresholds):**
- 940-960px container width (SC-01)
- >= 15 RGB max-channel delta at zone boundaries (SC-09)
- <= 108px total stacked gap at boundaries (SC-10)
- 3+ distinct typography zones, display-body >= 10px (SC-11)
- >= 3 of 6 channels shift at every boundary, avg >= 4 (SC-13)
- >= 3 distinct border configurations (SC-15)
- No sub-perceptual CSS: no letter-spacing < 0.02em, no bg delta 1-14 RGB (SC-14)
- >= 5 ARIA landmarks (SC-06), skip link present (SC-07)
- >= 8 component library classes (SC-08)

**Divergence (always required -- every build runs full TC):**
- 5-dimension divergence table complete?
- DIFFERENT on 3+ dimensions?
- If convergence: strong justification documented?
```

---

**EDIT 6 of 6: Update Experiment Lessons Section**

```
FILE: design-system/compositional-core/CLAUDE.md

old_string: ## PHASE D VALIDATION LESSONS (2026-02-15)

Phase D tested 5 pipeline configurations. COMPLETE — CONDITIONAL PASS. Key lessons for builders:

new_string: ## EXPERIMENT LESSONS (Phase D through Flagship)

Phase D through Flagship experiments (2026-02-15 to 2026-02-18) tested 7 pipeline configurations. Key lessons for builders:
```

AND separately:

```
FILE: design-system/compositional-core/CLAUDE.md

old_string: **Post-D Research (COMPLETE, 2026-02-15):** Richness + rigidity investigations (11 agents) established tier model (Floor/Middle/Ceiling/Flagship) and modification recommendations. Skill enrichment currently in progress to address "sample 2-4 mechanisms" limitation.

See: ephemeral/continuity-docs/HANDOFF.md for full Phase D results.

new_string: 5. **Recipe beats checklist for builders.** The Middle experiment builder got a 100-line RECIPE (sequenced steps, specific CSS values). The Flagship builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if" verbs). Recipe = DESIGNED; Checklist = FLAT. /build-page provides RECIPES.

6. **Content structural heterogeneity is the floor.** Content with code blocks, multiple rhetorical modes, and domain transitions FORCES visual variety. Uniform prose caps PA-05 at ~2.5/4 regardless of architecture.

7. **Programmatic gates + PA + Tier 5 = full coverage.** Gates catch ~26%, PA catches ~40%, Tier 5 catches ~34%. All three layers required.

8. **Same builder for fix cycles.** Compositional memory is irreplaceable. The builder that produced 1.5/4 improved to 2.5/4 with targeted feedback from the same agent.

**Full experiment history:** See ephemeral/continuity-docs/HANDOFF.md
```

---

**SELF-CHECK after all 6 edits:**
1. Read design-system/compositional-core/CLAUDE.md back.
2. Search for "Track 1 WORKFLOW" -- should return zero results (replaced by MANUAL BUILD WORKFLOW).
3. Search for "ALWAYS FLAGSHIP" -- should appear at least twice (status line + build protocol).
4. Search for "SC-09" -- should appear in the verification checklist.
5. The Flagship Build Workflow section (formerly Track 2) should still contain all Phase 0-7 content unchanged.

---

## SECTION C: MASTER PROMPT TEXT FOR VALIDATION PROTOCOL

>>> The text below is LITERAL PROMPT CONTENT for the master execution prompt's validation section.

---

### VALIDATION: Two Builds to Confirm /build-page Works

After all files are created and all edits applied, run two validation builds. These are NOT ceremonial -- they are the pipeline's proof-of-work. If both pass, the pipeline ships. If either fails, the pipeline needs revision.

**Build order matters.** Run Build A first. Only run Build B if Build A achieves PA-05 >= 3.0.

---

**BUILD A: Structurally Heterogeneous Content (Gas Town)**

>>> CONTENT FILE: extractions/deep/yegge-gas-town-extraction.md

This file has 1,324 lines with 4+ code blocks (Go, bash, tmux), 5+ content modes (biographical, philosophical, architectural, procedural, comparative), 4+ domain transitions, ASCII architecture diagrams, tables, quotes, and inherent tension ("biggest ant" vs colonies). It is the ideal Flagship test because its structural heterogeneity FORCES visual variety.

**Run:** `/build-page extractions/deep/yegge-gas-town-extraction.md`

**Pass criteria:**
- PA-05 >= 3.5/4 (DESIGNED threshold for Flagship)
- Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- All 15 blocking gates PASS at Flagship thresholds
- Zero soul violations
- Zero void patterns (no whitespace voids >= 200px)
- Metaphor is STRUCTURAL (perceivable without reading labels)

**If Build A PASSES (PA-05 >= 3.5, Tier 5 >= 6/8):**
- Record PA-05 score, Tier 5 score, and top-3 PA findings
- Proceed to Build B

**If Build A scores PA-05 3.0-3.4:**
- Record scores and findings
- Run 1 fix cycle (same builder, top-3 issues)
- If post-fix PA-05 >= 3.5: PASS, proceed to Build B
- If post-fix PA-05 still < 3.5: CONDITIONAL PASS, proceed to Build B with note

**If Build A scores PA-05 < 3.0:**
- STOP. Do not run Build B.
- The pipeline needs revision. Record gate diagnostics + PA findings.
- Root cause analysis: if gates failed, the prompt's CSS guidance is wrong. If PA failed, the builder's compositional intelligence didn't transfer.

---

**BUILD B: Known Hard Content (RESEARCH-SYNTHESIS)**

>>> CONTENT FILE: design-system/research/RESEARCH-SYNTHESIS.md

This content previously scored 1.5/4 (Flagship attempt) and 2.5/4 (after CSS remediation). It has uniform prose register, no code blocks, no procedural sequences -- WEAK structural heterogeneity. This build tests whether the pipeline improves over the 2.5/4 baseline on the same content.

**Run:** `/build-page design-system/research/RESEARCH-SYNTHESIS.md`

**Pass criteria:**
- PA-05 >= 3.0/4 (improvement over 2.5/4 baseline)
- All 15 blocking gates PASS at Flagship thresholds
- Zero soul violations
- SC-09 >= 15 RGB at every zone boundary (was 1-8 RGB in failed attempt)

**If Build B PASSES (PA-05 >= 3.0):**
- Record delta: Build B PA-05 minus 2.5 = content improvement from pipeline
- PIPELINE PASS confirmed

**If Build B scores PA-05 2.5-2.9:**
- Record findings. This means the pipeline matches but does not beat the previous remediation on hard content.
- If Build A passed at >= 3.5: PIPELINE CONDITIONAL PASS (works for good content, matches on hard content)
- If Build A was conditional: PIPELINE NEEDS CALIBRATION

**If Build B scores PA-05 < 2.5:**
- REGRESSION from previous approach on same content
- Investigate: did the new conventions brief REMOVE something the old remediation spec had?
- Do NOT revise pipeline based on Build B alone -- the content limitation is documented

---

**OVERALL VERDICT TABLE:**

| Build A (Gas Town) | Build B (RESEARCH-SYNTHESIS) | Verdict |
|--------------------|------------------------------|---------|
| >= 3.5 + Tier 5 >= 6/8 | >= 3.0 | **PIPELINE PASS** |
| >= 3.5 + Tier 5 >= 6/8 | 2.5-2.9 | **PIPELINE CONDITIONAL PASS** |
| >= 3.5 + Tier 5 >= 6/8 | < 2.5 | **SELECTIVE PASS** (content ceiling documented) |
| 3.0-3.4 | any | **NEEDS CALIBRATION** (thresholds may be too aggressive) |
| < 3.0 | N/A (not run) | **PIPELINE FAIL** (fundamental revision needed) |

---

## SECTION D: OVERALL PROMPT ARCHITECTURE

>>> This section is a BLUEPRINT for the assembler (Task #17). It describes HOW the master execution prompt should be organized, based on the metacog analysis (07) and format analysis (11).

---

### D.1 ARCHITECTURE PRINCIPLES (from 07-metacog-analysis.md)

The master prompt faces 10 identified failure modes. The architecture must counter all of them:

| Failure Mode | Probability | Counter-Technique | Where Applied |
|---|---|---|---|
| FM-01: Skimming collapse | HIGH | Front-load each section with deliverable; bold first lines; never put critical info mid-paragraph | ALL sections |
| FM-02: Checklist drift | HIGH | Use creative verbs (compose, design, choose) not constraint verbs (verify, ensure, fail if) | Sections 3-4 |
| FM-03: Compression cascade | HIGH | Literal content blocks for thresholds, tokens, soul; 60% literal / 40% instruction | Sections 3-5 |
| FM-04: Orchestrator logic errors | MEDIUM-HIGH | Explicit dependency graph; exact file paths as code blocks | Section 1 |
| FM-05: Wrong file assumptions | MEDIUM-HIGH | "Read file FIRST, verify old_string exists EXACTLY" before every edit | Section 6 |
| FM-06: Brief becomes checklist | MEDIUM-HIGH | Compositional framing: "this is the builder's artistic brief" | Section 3 |
| FM-07: Perfunctory validation | MEDIUM | Binary pass/fail with specific gate thresholds | Section 7 |
| FM-08: Content generation errors | MEDIUM | Mark literal content with ">>> LITERAL" prefix | Sections 3-5 |
| FM-09: Teaching instead of directing | MEDIUM | Zero background context; every paragraph is actionable | ALL sections |
| FM-10: Recursive meta-analysis trap | LOW-MEDIUM | "STOP ANALYZING. START WRITING." at section boundaries | Sections 3, 5 |

---

### D.2 RECOMMENDED 8-SECTION STRUCTURE

Target: **400-500 lines.** Anything over 600 lines enters skimming-collapse territory.

```
SECTION 0: MISSION + NON-NEGOTIABLES (15-20 lines)
  - Single paragraph: what we're building, why, what success looks like
  - 3 non-negotiables stated and repeated at end (container 940-960px, warm palette R>=G>=B, every CSS value perceptible to a human)
  - Flagship 4/4 has NEVER been achieved -- this pipeline aims to produce it for the first time

SECTION 1: FILE INVENTORY + DEPENDENCY GRAPH (20-25 lines)
  - Complete list of files to create, edit, and validate
  - Execution order with dependencies
  - Exact file paths as code blocks
  - Self-check: "After reading this section, can you list all 10 actions? If not, re-read."

SECTION 2: PRE-FLIGHT CHECKS (15-20 lines)
  - Read 3 reference files (tokens.css, prohibitions.md, mechanism-catalog.md first 200 lines)
  - Verify they exist and are non-empty
  - Read 1 reference HTML (CD-006) -- note: this is a Ceiling-tier data point, NOT the Flagship target
  - Self-check: "Can you name 3 soul constraints from prohibitions.md? If not, re-read."

SECTION 3: CONVENTIONS BRIEF CREATION (100-120 lines)
  - Exact file path
  - Section structure (template)
  - 3 literal content blocks: perception threshold table, soul constraints summary, zone semantics
  - Compositional guidance for connective sections
  - Anti-checklist warning: "This file must convey what the design system IS, not list what the builder must do"
  - Self-check: "Read the brief back. Count words 'must,' 'verify,' 'ensure,' 'fail.' If constraint language exceeds 20% of total words, revise."

SECTION 4: OPERATIONAL RECIPE CREATION (80-100 lines)
  - Exact file path
  - Phase structure (Phases A-D from builder simulation: Understand, Plan, Build, Self-verify)
  - Literal phase names and gate checks per phase
  - Compositional guidance for per-phase instructions
  - Cross-reference verification: "Recipe references to zones must match brief's zone names"
  - Self-check: "Does every phase have (a) an exact CSS value or file reference, (b) a self-check, (c) a WHY annotation? Add any missing."

SECTION 5: SUPPLEMENTARY FILE CREATION + SKILL EDITS (60-80 lines)
  - Gate runner content
  - TC skill edits (tier removal -- ~220 lines removed, specify exact regions)
  - PA skill edits (Tier 5 addition -- ~40 lines added)
  - Exact old_string/new_string for each skill edit
  - Self-check: "Read each edited skill file. Verify tier-conditional logic is gone. Verify Tier 5 questions are present."

SECTION 6: DESIGN-SYSTEM FILE EDITS (60-80 lines)
  - 8 edits to design-system/CLAUDE.md (from Section A of this document)
  - 6 edits to compositional-core/CLAUDE.md (from Section B of this document)
  - Each with: read-first instruction, exact old_string/new_string, self-check after
  - Self-check: "Read both files back. Search for 'Track 1' in routing sections -- should be zero. Search for '/build-page' -- should appear 6+ times."

SECTION 7: VALIDATION BUILDS (40-50 lines)
  - Build A and Build B from Section C of this document
  - Binary pass/fail criteria
  - Fix cycle instructions (max 3 for Build A, max 2 for Build B)
  - Overall verdict table

SECTION 8: RECENCY RESTATEMENT (15-20 lines)
  - Re-state 3 non-negotiables from Section 0
  - Re-state the mission
  - "You are done when: all files exist, all edits applied, Build A passes, Build B run."
  - Final warning: "If you find yourself writing ABOUT the pipeline instead of BUILDING the pipeline, stop and build."
```

**Total estimated lines: 405-515 (within the 400-600 target).**

---

### D.3 CONTENT RATIO: 60% LITERAL / 40% INSTRUCTION

The metacog analysis (07) recommends approximately 60% literal content blocks and 40% compositional instruction. This is because:
- Literal content survives compression (FM-03 mitigation)
- Instructions get paraphrased or skimmed; literal blocks get copied
- The critical content (thresholds, token references, soul constraints, file paths) MUST be exact

**What MUST be literal (embedded verbatim in the prompt):**
- Perception threshold table (6 rows: background, font-size, letter-spacing, padding, border, total gap)
- Soul constraints summary (5 rules: border-radius 0, box-shadow none, no drop-shadow, no pure black/white, no gradients)
- File paths (all 10+ paths as code blocks)
- Gate IDs and thresholds (SC-01 through SC-16, DG-1 through DG-4)
- Tier 5 question text (PA-60 through PA-67, 8 questions)
- Edit old_string/new_string pairs (all 14 edits)

**What should be COMPOSED by the executing agent:**
- Conventions brief connective text (framing, examples, transitions)
- Operational recipe's per-phase WHY annotations
- Metaphor derivation content (content-specific, cannot be pre-written)
- Build log entries (observation-based)

---

### D.4 FOUR SELF-CHECK POINTS

The metacog report recommends exactly 4 self-checks (more creates noise, fewer misses critical points):

1. **After Section 2 (Pre-Flight):** "Can you name 3 soul constraints, the container width range, and the background delta threshold? If not, re-read tokens.css and prohibitions.md."

2. **After Section 3 (Conventions Brief):** "Read the brief back. Count constraint words (must, verify, ensure, fail, check). If they exceed 20% of total words, the brief has drifted into checklist territory. Revise to use world-building language (is, creates, produces, means, expresses)."

3. **After Section 6 (File Edits):** "Read both CLAUDE.md files. Search for 'Track 1' in routing/workflow sections -- zero results expected. Search for '/build-page' -- at least 6 results expected. If either check fails, re-apply the relevant edits."

4. **After Section 7 (Validation Builds):** "Did Build A achieve PA-05 >= 3.0? If not, the pipeline needs revision -- do not ship. Report gate diagnostics and PA findings."

---

### D.5 ANTI-SKIMMING FORMATTING TECHNIQUES

Apply these throughout the master prompt:

1. **Bold the first line of every section.** Opus scans for visual anchors during skimming.
2. **Use `>>>` prefix for critical information.** The visual marker forces attention.
3. **Never introduce a NEW concept after line 400.** Anything first appearing after line 400 has <20% processing probability.
4. **Put file paths in code blocks.** Code blocks get higher attention than inline text.
5. **Start each section with the deliverable, not the context.** Not "The conventions brief is important because..." but "WRITE FILE: ~/.claude/skills/build-page/conventions-brief.md"
6. **Use numbered steps within each file task.** Sequential numbers create forward momentum.
7. **Mark literal content with `>>> LITERAL:` prefix.** Distinguishes "copy this" from "compose something."
8. **Embed re-grounding markers at section boundaries:** ">>> RE-READ LINES 1-20 BEFORE PROCEEDING."
9. **Keep paragraphs under 4 lines.** Long paragraphs get skimmed; short paragraphs get read.
10. **End each section with its self-check.** The check is the last thing read before moving to the next section.

---

### D.6 SECTION ORDERING RATIONALE

Hardest tasks FIRST (anti-fatigue, from BA-05):

1. **Conventions brief** (Section 3) is the HARDEST task -- requires compositional understanding, not just transcription. Place it early when attention is highest.
2. **Operational recipe** (Section 4) is the SECOND HARDEST -- requires cross-referencing the brief and structuring phases.
3. **Supplementary files + skill edits** (Section 5) are MEDIUM -- mechanical but important.
4. **Design-system file edits** (Section 6) are MECHANICAL -- exact string replacements.
5. **Validation builds** (Section 7) are the LAST task -- requires running /build-page and evaluating output. By this point the agent has created all the infrastructure; validation is the proof.

This ordering ensures the highest-quality work happens when the agent's attention is freshest.

---

### D.7 WHAT THE ARCHITECTURE CANNOT PREVENT

The metacog report identifies these residual risks that no prompt architecture can eliminate:

1. **The conventions brief may still read like a checklist** (FM-06, ~40% probability). The dispositional-vs-prescriptive distinction is subtle.
2. **The agent may invent CSS values that violate thresholds** (FM-08, ~20% probability). Self-checks catch some but not all.
3. **The 55% intelligence loss is structural** (BA-06). The prompt transmits ~15% of accumulated intelligence; reference files add ~30%; the rest is lost.
4. **Validation builds test syntax, not composition** (FM-07). The builds confirm the pipeline RUNS; whether it produces Flagship quality is a separate question answered by the PA scores.

**Honest probability assessment:**
- All files created at correct paths: 90%
- Conventions brief is dispositional (not checklist): 50-60%
- Edits to existing files apply cleanly: 75-85%
- Build A (Gas Town) achieves PA-05 >= 3.0: 60-70%
- Build A achieves PA-05 >= 3.5 (Flagship threshold): 35-50%
- Full PIPELINE PASS: 25-40%

These are the odds. The prompt architecture maximizes them within the structural constraints of single-instance execution.

---

**END OF DRAFT-13**

**Summary for assembler (Task #17):**
- Section A: 8 edits to design-system/CLAUDE.md (prompt-ready, with self-check)
- Section B: 6 edits to compositional-core/CLAUDE.md (prompt-ready, with self-check)
- Section C: 2 validation builds with pass/fail criteria and overall verdict table
- Section D: 8-section architecture blueprint, 400-500 line target, 60/40 literal/instruction ratio, 4 self-checks, 10 anti-skimming techniques
