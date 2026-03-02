# design-system/CLAUDE.md — Root Navigation & Process Enforcement

═══════════════════════════════════════════════════════════════════════════════
THIS FILE IS AUTO-LOADED ON DIRECTORY ENTRY
═══════════════════════════════════════════════════════════════════════════════

**Purpose:** Navigate the design system's 8 subfolders, enforce cross-cutting rules, and route agents to the right place based on task intent.

**Current Phase:** /build-page Pipeline ACTIVE (2026-02-19). ALWAYS FLAGSHIP -- every page built at maximum compositional intensity. Tier routing REMOVED. /build-page is the single entry point for all page building.

**Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated). Invoked automatically by /build-page
- **specification/** — Complete documentation for understanding (research provenance)

**Building protocol:** ALL pages are built via /build-page at Flagship tier. No tier routing. No Track 1/Track 2 classification. The orchestrator handles everything.

═══════════════════════════════════════════════════════════════════════════════

## QUICK START — What Are You Here To Do?

### I'm here to BUILD content/pages
**→ Run:** `/compose <content-file-path>` (the PRIMARY way to build pages)
**→ What it does:** /compose orchestrates three phases — DERIVE (tension-composition), BUILD (Opus builder), EVALUATE (perceptual audit) — with fix cycles. Agents are Opus, context-isolated. Output is a self-contained HTML file + PA audit report.
**→ Skill file:** `~/.claude/skills/compose/SKILL.md` (199 lines)
**→ ALWAYS loaded automatically:** `compositional-core/identity/identity.md` + `compositional-core/identity/vocabulary.md` + `compositional-core/vocabulary/tokens.css` + `compositional-core/components/components.css`
**→ Legacy:** `/build-page` (v3.1 pipeline via MANIFEST.md) is archived. Use `/compose` for all new builds.

### I'm here to VALIDATE/AUDIT
**→ Start:** `compositional-core/identity/identity.md` (soul principles + refusals)
**→ Then:** `compositional-core/validation/` (quantitative rules + anti-gravity report)

### I'm here to UNDERSTAND the philosophy
**→ Start:** `README.md` (THE KORTAI DESIGN MIND, Parts I-III, 45 min)
**→ Then:** `specification/BACKBONE.md` (master narrative)

### I'm here to PLAN migration/evolution
**→ Start:** `pipeline/README.md` (roadmap overview)
**→ Then:** `pipeline/03-MIGRATION-PIPELINE.md` (Track 1+2 architecture)

### I'm here to RESEARCH patterns
**→ Start:** `research/RESEARCH-SYNTHESIS.md` (cross-research insights)
**→ Then:** `research/R[1-5].md` (337 total findings)

### I'm here to TRACE provenance
**→ Start:** `specification/provenance/PIPELINE-MANIFEST.md`
**→ Then:** `specification/provenance/stage-[N]-[name]/` directories

═══════════════════════════════════════════════════════════════════════════════
## SOUL CONSTRAINTS (UNIVERSAL — ALL Work, ALL Folders)
═══════════════════════════════════════════════════════════════════════════════

**These rules apply EVERYWHERE in design-system/, with ZERO exceptions:**

### Visual Constraints (ABSOLUTE)
- **border-radius: 0** — ALWAYS sharp edges (identity truth encoded in DNA)
- **box-shadow: none** — ALWAYS flat surfaces (no fake depth)
- **No drop-shadow filter** — No shadow effects anywhere
- **No pure black #000 or pure white #FFF** — Use palette values
- **No gradient backgrounds** — Solid colors only

### Color Palette (LOCKED)
- Primary: `#E83025` (KortAI red)
- Background: `#FEF9F5` (warm cream)
- Text: `#1A1A1A` (near-black)
- Accent-blue: `#4A90D9`

### Typography Trinity (LOCKED)
- **Display headings:** Instrument Serif (ONLY for headings)
- **Body text:** Inter (NEVER use serif for body)
- **Code:** JetBrains Mono

### Spacing Scale (4px base unit)
- space-2 (8px), space-4 (16px), space-6 (24px), space-8 (32px), space-12 (48px), space-16 (64px)

**Source of truth:** `compositional-core/identity/identity.md` (soul principles, identity signatures, refusals, diagnostics)

**Verification:** Read fresh from file (not memory) — values can change (rarely).

═══════════════════════════════════════════════════════════════════════════════
## FOLDER MAP — 8 Subfolders Explained
═══════════════════════════════════════════════════════════════════════════════

### compositional-core/ (NEW — Phase C Extraction, Feb 2026)
**Status:** ACTIVE — operational layer
**Files:** ~40 files (operational), ~980KB
**Purpose:** Minimal operational vocabulary for building KortAI pages (40 items)

**7-File Vocabulary (Step 2 rewrite, 2026-03-01):**
```
compositional-core/
├── identity/          identity.md (character + soul + refusals) + vocabulary.md (design decisions)
├── vocabulary/        tokens.css (65 CSS tokens, :root block)
├── grammar/           mechanisms.md (20 mechanisms) + grammar.md (compositional rules + sequencing)
├── components/        components.css (CSS implementations) + components.md (inventory)
├── case-studies/      9 case studies (anti-prescription format) — NOT TEMPLATES
└── guidelines/        7+ semantic gap rules + responsive strategy + usage criteria
```

**When to use:** Building new pages (Track 1 assembly OR Track 2 composition)

**Anti-gravity mechanisms:** 94.7% deployment (18/19 mechanisms verified)
- Case studies are PROOF-OF-CONCEPT, not templates
- Phase-gated access (identity/vocabulary FIRST, case-studies LAST)
- Divergence mandate (if metaphor matches library → justify or regenerate)

**Key principle:** CHOICE-oriented extraction (what to use, when) vs comprehensive documentation

---

### specification/ (ONGOING — Abstract Specification)
**Status:** ACTIVE — canonical source of truth
**Files:** 57 files
**Purpose:** Complete design system documentation with research provenance

**Key Contents:**
```
specification/
├── README.md              [109KB] THE KORTAI DESIGN MIND (philosophical anchor)
├── BACKBONE.md            [35KB] Master narrative (5-stage pipeline)
├── tokens/                [617 lines total] SOURCE OF TRUTH for token values
│   ├── colors.md          [133 lines] Palette definitions
│   ├── typography.md      [166 lines] Font trinity
│   ├── spacing.md         [155 lines] 4px base unit
│   └── geometry.md        [163 lines] Border-radius: 0
├── patterns/              Validated rhythms (density, organizational, axis, combination)
├── anti-patterns/         What to avoid (registry.md)
└── provenance/            3-layer architecture (inline headers, light sections, formal docs)
```

**When to use:** Understanding WHY decisions were made, tracing research provenance

**Key principle:** CONTEXT-oriented provenance (why it exists, how discovered)

---

### validated-explorations/ (FROZEN — Fortress Zone)
**Status:** REFERENCE — frozen artifacts
**Files:** 30 files
**Purpose:** DD/OD/CD HTML explorations that proved design concepts

**Structure:**
```
validated-explorations/
├── density/           DD-001 through DD-006 (notable: DD-006 fractal, 20+ refs)
├── organizational/    OD-001 through OD-006 (OD-004 confidence, OD-006 creative)
└── combination/       CD-001 through CD-006 (CEILING-tier: CD-006 pilot, 39/40 — NOT Flagship)
```

**When to use:** Visual proof-of-concept, understanding pattern implementations (inspiration, NOT templates)

---

### research/ (COMPLETED — R1-R5 Streams)
**Status:** REFERENCE — 337 findings
**Files:** 7 files
**Purpose:** Original research findings that fed into design system

**337 Findings Breakdown:**
- R1: 28 (documentation patterns)
- R2: 27 (creative layouts)
- R3: 51 (density dimensions — source of DD patterns)
- R4: 192 (axis innovations — source of AD patterns)
- R5: 39 (combination theory — source of CD patterns)

**When to use:**
- ❌ NEVER for building tasks (compositional-core/ has distilled findings)
- ✅ ALWAYS for research tasks (understanding WHY decisions were made)
- ⚠️ SOMETIMES for validation (cross-checking extraction captured intent)

---

### pipeline/ (PLANNING — Post-CD Strategy)
**Status:** ACTIVE — strategic planning
**Files:** 17 files
**Purpose:** Post-CD phase planning (extraction, migration, content ingestion)

**Key Files:**
- `01-CD-EVOLVED-VISION.md` — CD vision
- `02-POST-CD-PHASES.md` — Phase definitions
- `03-MIGRATION-PIPELINE.md` — Track 1+2 architecture
- `05-COMPLETE-ROADMAP.md` — Master timeline (835 lines)
- `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` — Track 2 execution spec
- `09-EXTRACTION-VALIDATION-PROTOCOL.md` — Phase D test procedures

**When to use:** Planning future phases, understanding migration strategy

---

### implementation/ (MIXED — Active + Archive)
**Status:** SPECIALIZED
**Files:** 4,059 files
**Purpose:** React components, testing infrastructure, experiments

**Contains:**
- `component-system/` — Active component library
- `card-system/` — Card component experiments
- `typography-system/` — Typography testing
- `font-research/` — Font specimen comparisons
- **`archive/`** — ⚠️ DANGEROUS: Deprecated code with WRONG values (border-radius > 0, incorrect fonts like 'Bebas Neue', wrong spacing)

**When to use:** React implementation, Playwright testing

**WARNING:** DO NOT use `implementation/archive/` — contains obsolete token values that VIOLATE soul constraints. Specifically: border-radius > 0, wrong font families, deprecated color values. Using these values produces INVALID output.

---

### axis/ (COMPLETED — Stage 4 AD)
**Status:** REFERENCE — AD explorations
**Files:** 194 files
**Purpose:** Axis dimension (attention topology) explorations

**Contents:** AD-001 through AD-006 (6 explorations)
**Findings:** AD-F-001 through AD-F-028 (28 findings)
**Crown jewel:** AD-F-023 (ATTENTION TOPOLOGY meta-equivalence)

**When to use:** Understanding axis dimension, tracing AD findings

---

### tension-test/ (ARCHIVED — Validation Complete)
**Status:** REFERENCE — metaphor validation
**Files:** 104 files (moved to archive/tension-test/ per git status)
**Purpose:** 15 HTML layouts testing metaphor-driven composition

**Structure:** 3 base contents × 5 metaphors each
- Playbook (5 metaphors) — Top pick: Elevation Map
- Boris (5 metaphors) — Top pick: Geological Core
- Gas Town (5 metaphors) — Top pick: Building Floorplan

**When to use:** Understanding tension-composition skill development

═══════════════════════════════════════════════════════════════════════════════
## EVOLUTION STATE — Where We Are
═══════════════════════════════════════════════════════════════════════════════

### CURRENT PHASE: /build-page Pipeline (ACTIVE)

**Phase D Status:** COMPLETE — CONDITIONAL PASS (2026-02-15)
**Output:** 47 files, 17MB in ephemeral/phase-d-execution/

**Phase D Results:**
- Variant B (weak permission) scored 18/19 compliance, 4/5 novelty — best variant
- Container width was a primary failure mode (explorations use 860-1100px range)
- Prose-only content limited component testing to 22-44% (vs 67% target)
- "Always-load" protocol failure caused Track 1's instant fail (5 critical violations)
- "Weak permission" framing had ZERO behavioral effect on library utilization

**Post-Phase D Research (COMPLETE, 2026-02-15):**
- Richness investigation (5 agents): gap is technique saturation, not absence. ~60-85% addressable.
- Rigidity investigation (6 agents): showcase pages were MORE rigid, not less. "Paradox" dissolved.
- Tier model established: Floor/Middle/Ceiling/Flagship. Middle recommended as universal floor.
- 4 modification recommendations: ADOPT fractal gate, MODIFY mechanism mandate + coherence check, REJECT technique count metric.
- See: ephemeral/continuity-docs/HANDOFF.md for complete summary.

**Middle-Tier Experiment (SUCCESS, 2026-02-16):**
- 8 agents, 7 output files
- PA-05 DESIGNED (4/4 dimensions), Novelty 3/3 STRONGLY NOVEL
- Better than Variant B: YES
- Container 960px (compliant), Soul 7/7 (perfect)
- 12 mechanisms demonstrated
- Known defects: CPL +2, token compliance 66.5%, missing footer

**Middle-Tier Retrospective (COMPLETE, 2026-02-16):**
- 11 agents (10 dimension analysts + 1 synthesizer)
- 11 output files (13,254 lines total, 684K)
- Master retrospective at `09-MASTER-RETROSPECTIVE.md`
- 8 cross-cutting findings, 10 theories evaluated
- See: ephemeral/continuity-docs/HANDOFF.md for full summary

**Next:** Retro-Analysis Team (applying F1 sequence), then Ceiling preparation and Phase E

---

### 3-TIER TIMELINE

**COMPLETE (4 exploration stages + 1 extraction):**
- ✅ Stage 1: Component Foundations (11 components, 5 soul pieces)
- ✅ Stage 2: Density Dimension (DD-001–DD-006, 18 DD-F findings)
- ✅ Stage 3: Organizational Dimension (OD-001–OD-006, 17 OD-F findings, v3 re-enriched)
- ✅ Stage 4: Axis Dimension (AD-001–AD-006, 28 AD-F findings)
- ✅ Stage 5: Combination Dimension (CD-001–CD-006, 25 CD-F findings)
- ✅ Phase C: Compositional Core Extraction (6-layer ontology, 42 files)
- 🔧 Skill Enrichment (Wave 1 COMPLETE: M2/M3/M5/M8 applied 2026-02-15. Wave 2 pending: M1 per-category minimum after Middle experiment)

**CURRENT (/build-page pipeline):**
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

**Full roadmap:** `pipeline/05-COMPLETE-ROADMAP.md` (835 lines)

---

### SUPERSESSION MATRIX: What Supersedes What

| Layer | New Authority | Historical Context | Relationship | When to Use Which |
|-------|--------------|-------------------|--------------|-------------------|
| **Identity** | compositional-core/identity/ | specification/tokens/ | REFINES | compositional-core/ for PROHIBITIONS; specification/ for VALUES |
| **Vocabulary** | compositional-core/vocabulary/tokens.css | specification/tokens/*.md | CONSOLIDATES | compositional-core/ for SINGLE-FILE ref; specification/ for RATIONALE |
| **Grammar** | compositional-core/grammar/ | specification/patterns/*.md | EXTRACTS | compositional-core/ for BUILDING; specification/ for RESEARCH |
| **Components** | compositional-core/components/ | validated-explorations/ | DISTILLS | compositional-core/ for MIGRATION; explorations/ for PROVENANCE |
| **Case Studies** | compositional-core/case-studies/ | validated-explorations/ HTMLs | DEMONSTRATES | compositional-core/ for PATTERNS; explorations/ for FULL CONTEXT |
| **Guidelines** | compositional-core/guidelines/ | pipeline/03-MIGRATION-PIPELINE.md | OPERATIONALIZES | compositional-core/ for QUICK REF; pipeline/ for FULL PLAYBOOK |

**Key principle:**
- compositional-core/ = CHOICE-oriented (what to use, when) → **USE FOR BUILDING**
- specification/ = CONTEXT-oriented (why it exists) → **USE FOR RESEARCH**
- validated-explorations/ = PERMANENT REFERENCE → **USE FOR DEEP CONTEXT**

═══════════════════════════════════════════════════════════════════════════════
## SKILLS — When to Invoke
═══════════════════════════════════════════════════════════════════════════════

### /compose (PRIMARY -- All Page Building)

**Trigger:** "Build a page", "compose", "design this content", "turn this into a designed page"

**Invocation:**
```
/compose <content-file-path>
```

**Architecture:** Three-phase pipeline — DERIVE (TC) → BUILD (Opus builder) → EVALUATE (PA) — with fix cycles. All agents are Opus. Context-isolated (TC doesn't see components, builder doesn't see PA questions, PA doesn't see the brief).

**Skill file:** `~/.claude/skills/compose/SKILL.md` (~199 lines)

**Success bar:** PA fresh-eyes verdict SHIP, zero soul violations

**NOT invoked for:** Research, auditing existing pages, planning

---

### /build-page (ARCHIVED -- Legacy Pipeline v3.1)

**Status:** ARCHIVED. Use `/compose` instead for all new builds.

**Legacy files:** `ephemeral/va-extraction/MANIFEST.md` + 9 artifacts + gate runner split + PA protocol split. Kept for reference only.

---

### Perceptual-Auditing (Standalone Skill -- For Auditing EXISTING Pages)

**Direct invocation:** Only for auditing EXISTING pages (not builds -- /compose handles PA internally)
**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Passing criteria:** Fresh-eyes verdict SHIP, zero soul violations, zero void patterns

═══════════════════════════════════════════════════════════════════════════════
## INGESTION PROTOCOL — What to Load
═══════════════════════════════════════════════════════════════════════════════

### ALWAYS-LOAD (ALL Agents, ALL Tasks)

**Mandatory read at session start:**

1. **`compositional-core/identity/identity.md`** (87 lines)
   - Character statement, soul principles (angular geometry, no shadows)
   - Identity signatures (warm palette, typography trinity, 4px left-border)
   - Internal tensions, refusals (absolute + conditional), diagnostics

2. **`compositional-core/identity/vocabulary.md`** (55 lines)
   - Design decisions & rationale (palette, typography, spacing, borders, container width)
   - WHY the system makes each choice — the reasoning layer

3. **`compositional-core/vocabulary/tokens.css`** (124 lines)
   - 65 CSS tokens in :root block
   - Color palette (8 values), typography trinity (3 fonts)
   - Spacing scale (4px base), border weights (4px/3px/1px)

4. **`compositional-core/components/components.css`** (779 lines)
   - CSS implementations for all components
   - Callout system, code blocks, tables, header/footer, bento grid

**Total mandatory overhead: ~1,045 lines (4 files)**

**Read fresh** (not from memory) — token values and prohibitions can change

---

### CONDITIONAL-LOAD (Based on Task)

**Builder agents (invoked by /build-page orchestrator):**

The /build-page orchestrator handles all builder loading automatically. Builders receive:
1. identity.md + vocabulary.md + tokens.css + components.css (pre-loaded by orchestrator)
2. Conventions brief with content analysis + metaphor + mechanism selections (from TC pipeline)
3. Operational recipe with specific CSS values + sequenced build steps
4. Gate runner for micro-gate verification during build

Phase-gated access is enforced by the orchestrator:
- Phases 0-3: TC runs BLIND (no library access)
- Phase 3.5: Metaphor lock (GATE -- no changes after)
- Phase 4: Mechanisms extracted (grammar/mechanisms.md + grammar/grammar.md)
- Phase 5: Optional case study comparison (divergence check)
- Phase 6: Opus builder implements with TC brief + conventions brief
- Phase 7: Full verification (gates + PA)

**Manual builder invocation (if /build-page unavailable):**
- Follow compositional-core/CLAUDE.md Flagship Build Workflow
- ALL pages at Flagship intensity (no tier routing)

---

**Auditor agents:**

Mandatory read:
- ✅ identity.md + vocabulary.md + tokens.css + components.css (already loaded)
- `compositional-core/grammar/mechanisms.md` + `compositional-core/grammar/grammar.md`
- `compositional-core/case-studies/*.md` (quality comparison)

Optional read:
- `compositional-core/components/components.md` (inventory with velocity/weight)
- `compositional-core/validation/anti-gravity-compliance.md`
- `compositional-core/guidelines/semantic-rules.md`

**No phase restrictions** — auditors read everything

---

**Research agents:**

Mandatory read (context-first order):
- `compositional-core/process/lens-manifesto.md` (WHY extraction choices)
- `compositional-core/process/construction-narrative.md` (HOW extraction built)
- `compositional-core/validation/anti-gravity-compliance.md`
- ✅ identity.md + vocabulary.md + tokens.css + components.css (already loaded)

Conditional read:
- ALL research files (R1-R5, RESEARCH-SYNTHESIS.md)
- `compositional-core/process/assumption-log.md` (bias tracking)

**Analysis mode** (not application mode)

---

**Planner agents:**

Mandatory read:
- ✅ identity.md + vocabulary.md + tokens.css + components.css (already loaded)
- `compositional-core/guidelines/usage-criteria.md`
- `compositional-core/validation/gap-check.md` (coverage gaps)

Conditional read:
- `research/RESEARCH-SYNTHESIS.md`
- `compositional-core/case-studies/_INDEX.md`
- `compositional-core/components/components.md`

═══════════════════════════════════════════════════════════════════════════════
## ROUTING LOGIC — Task-to-Folder Decision Tree
═══════════════════════════════════════════════════════════════════════════════

### Q1: Build or Understand?

- **Build a page** → `/compose <content-path>` (ALWAYS use this)
- **Understand the system** → specification/ + research/
- **Audit an existing page** → Invoke perceptual-auditing skill directly

### Q2: What do I need to understand?

- **Design philosophy** → README.md (THE KORTAI DESIGN MIND)
- **Raw research** (337 findings) → research/RESEARCH-SYNTHESIS.md then research/R[1-5]
- **Extracted vocabulary** (40 items) → compositional-core/
- **Provenance chain** → specification/provenance/

### Q3: What's my first file to read?

- **Building** → Just run `/compose`. It handles everything.
- **Philosophy/orientation** → README.md (THE KORTAI DESIGN MIND)
- **Abstract specification** → specification/BACKBONE.md (master narrative)
- **Soul compliance** → compositional-core/identity/identity.md
- **Research grounding** → research/RESEARCH-SYNTHESIS.md

═══════════════════════════════════════════════════════════════════════════════
## ANTI-PATTERNS — Common Routing Mistakes
═══════════════════════════════════════════════════════════════════════════════

### 1. Going to specification/ when you need compositional-core/

**Problem:** Reading specification/tokens/ (abstract, multi-file, 617 lines) when building

**Correct:** Read compositional-core/vocabulary/tokens.css (operational, single-file, 124 lines)

**Rule:** specification/ for UNDERSTANDING, compositional-core/ for BUILDING

---

### 2. Reading pipeline/ when you should be building

**Problem:** Reading strategic planning docs when user asked "build a page"

**Correct:** compositional-core/README.md → phase-gated access → build

**Rule:** pipeline/ for PLANNING, compositional-core/ for BUILDING

---

### 3. Skipping research/ context before building explorations

**Problem:** Building DD/OD/CD-style exploration without R3/R5 research

**Correct:** research/RESEARCH-SYNTHESIS.md → research/R[X].md → build

**Rule:** Explorations test research hypotheses, not just demonstrate components

---

### 4. Confusing validated-explorations/ with templates

**Problem:** Treating DD-006 or OD-006 as copy-paste templates

**Correct:** Read for UNDERSTANDING, use compositional-core/case-studies/ (anti-prescription format)

**Rule:** Explorations are PROOF-OF-CONCEPT, not templates

---

### 5. Not reading identity.md before building

**Problem:** Building with border-radius > 0, box-shadow, gradients

**Correct:** compositional-core/identity/identity.md is FIRST CONTACT layer (always-load)

**Rule:** Soul principles have ZERO exceptions — violating = INVALID work

---

### 6. Reading BACKBONE when you need compositional-core/README

**Problem:** Reading 35KB master narrative when user asked "how do I use the design system?"

**Correct:** BACKBONE for understanding WHY/HOW, compositional-core/README for USING

**Rule:** BACKBONE = historical narrative, compositional-core/README = operations manual

---

### 7. Trying to build without /compose

**Problem:** Manually invoking TC skill, manually assembling components, or building without the orchestrator

**Correct:** Run `/compose <content-path>`. The orchestrator handles TC derivation, builder deployment, and PA audit automatically.

**Rule:** /compose is the primary way to build new pages. Manual building is a fallback for when /compose is unavailable.

═══════════════════════════════════════════════════════════════════════════════
## DIRECTORY STRUCTURE (Accurate Tree)
═══════════════════════════════════════════════════════════════════════════════

```
design-system/
├── compositional-core/      [40 files] Phase C extraction, 6-layer ontology
│   ├── identity/            [Layer 1] identity.md (character + soul + refusals) + vocabulary.md (design decisions)
│   ├── vocabulary/          [Layer 2] tokens.css (65 CSS tokens, :root block)
│   ├── grammar/             [Layer 3] mechanisms.md (20 mechanisms) + grammar.md (compositional rules)
│   ├── components/          [Layer 4] components.css (CSS implementations) + components.md (inventory)
│   ├── case-studies/        [Layer 5] 9 anti-prescription examples
│   ├── guidelines/          [Layer 6] 7+ semantic gap rules
│   ├── validation/          Anti-gravity audit, convergence, gap check
│   ├── process/             Lens manifesto, construction narrative, provenance
│   └── skill-enrichments/   Tension + perceptual additions
│
├── specification/           [57 files] Abstract specification + provenance
│   ├── README.md            [109KB] THE KORTAI DESIGN MIND
│   ├── BACKBONE.md          [35KB] Master narrative (5-stage pipeline)
│   ├── tokens/              [4 files, 617 lines] SOURCE OF TRUTH
│   ├── patterns/            Validated rhythms (density, org, axis, combo)
│   ├── anti-patterns/       Registry of what to avoid
│   ├── components/          Component specifications
│   ├── guides/              Migration guide
│   └── provenance/          3-layer architecture (490 inline + 244 light + formal docs)
│
├── validated-explorations/  [30 files] DD/OD/CD HTML explorations (FROZEN)
│   ├── density/             DD-001 through DD-006 (DD-006 fractal: 20+ refs)
│   ├── organizational/      OD-001 through OD-006
│   └── combination/         CD-001 through CD-006 (CD-006 pilot: 39/40)
│
├── research/                [7 files] R1-R5 research streams (337 findings)
│   ├── R1-DOCUMENTATION-PATTERNS.md     [28 findings]
│   ├── R2-CREATIVE-LAYOUTS.md           [27 findings]
│   ├── R3-DENSITY-DIMENSIONS.md         [51 findings]
│   ├── R4-AXIS-INNOVATIONS.md           [192 findings]
│   ├── R5-COMBINATION-THEORY.md         [39 findings]
│   └── RESEARCH-SYNTHESIS.md            [Cross-research insights]
│
├── pipeline/                [17 files] Post-CD strategic planning
│   ├── 01-CD-EVOLVED-VISION.md
│   ├── 03-MIGRATION-PIPELINE.md         [Track 1+2 architecture]
│   ├── 05-COMPLETE-ROADMAP.md           [835 lines, master timeline]
│   ├── 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
│   └── 09-EXTRACTION-VALIDATION-PROTOCOL.md
│
├── implementation/          [4,059 files] React components, testing
│   ├── component-system/    Active component library
│   ├── card-system/         Card experiments
│   ├── typography-system/   Typography testing
│   ├── font-research/       Font specimens
│   └── archive/             ⚠️ DANGEROUS: Deprecated code with WRONG values
│
├── axis/                    [194 files] Stage 4 AD explorations (COMPLETE)
│   ├── AD-001-z-pattern.html through AD-006-compound.html
│   └── _perceptual-audit/, _perceptual-research/
│
├── tension-test/            [104 files] Metaphor validation (ARCHIVED)
│   ├── playbook/            [5 metaphors] Top pick: Elevation Map
│   ├── boris/               [5 metaphors] Top pick: Geological Core
│   ├── gastown/             [5 metaphors] Top pick: Building Floorplan
│   └── audit/               [Audit reports + screenshots]
│
├── README.md                [109KB, 2,053 lines] THE KORTAI DESIGN MIND
└── CLAUDE.md                [THIS FILE] Root navigation + process enforcement
```

═══════════════════════════════════════════════════════════════════════════════
## KEY FILE PATHS (Verified Correct)
═══════════════════════════════════════════════════════════════════════════════

### Compositional-Core (7-File Vocabulary + Supporting Layers)
- Layer 1a (Identity): `compositional-core/identity/identity.md` (87 lines — character, soul, refusals)
- Layer 1b (Rationale): `compositional-core/identity/vocabulary.md` (55 lines — design decisions)
- Layer 2 (Tokens): `compositional-core/vocabulary/tokens.css` (124 lines — CSS custom properties)
- Layer 3a (Mechanisms): `compositional-core/grammar/mechanisms.md` (88 lines — 20 mechanisms)
- Layer 3b (Grammar): `compositional-core/grammar/grammar.md` (149 lines — compositional rules)
- Layer 4a (CSS): `compositional-core/components/components.css` (779 lines — implementations)
- Layer 4b (Inventory): `compositional-core/components/components.md` (37 lines — catalog)
- Layer 5 (Case Studies): `compositional-core/case-studies/_INDEX.md`
- Layer 6 (Guidelines): `compositional-core/guidelines/semantic-rules.md`

### Specification (Tokens — SOURCE OF TRUTH)
- `specification/tokens/colors.md` (133 lines)
- `specification/tokens/typography.md` (166 lines)
- `specification/tokens/spacing.md` (155 lines)
- `specification/tokens/geometry.md` (163 lines)

**Relationship:** compositional-core/vocabulary/tokens.css is EXTRACTED from these files (124 lines subset of 617 lines). For BUILDING use tokens.css. For RESEARCH/RATIONALE use specification/tokens/.

### Research (337 Findings)
- `research/RESEARCH-SYNTHESIS.md` (cross-research insights)
- `research/R1-DOCUMENTATION-PATTERNS.md` (28 findings)
- `research/R3-DENSITY-DIMENSIONS.md` (51 findings — source of DD)
- `research/R5-COMBINATION-THEORY.md` (39 findings — source of CD)

### Skills (External to design-system/)
- `~/.claude/skills/tension-composition/SKILL.md` (~1,612 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (65 PA questions)

### Pipeline (Strategic Planning)
- `pipeline/05-COMPLETE-ROADMAP.md` (835 lines, master timeline)
- `pipeline/03-MIGRATION-PIPELINE.md` (Track 1+2 architecture)
- `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` (Phase D tests)

### Validated Explorations (CEILING-Tier References)
- `validated-explorations/density/DD-006-fractal.html` (20+ inbound refs)
- `validated-explorations/organizational/OD-006-creative.html` (726 citations)
- `validated-explorations/combination/CD-006-pilot-migration.html` (39/40 score)

═══════════════════════════════════════════════════════════════════════════════
## COMPACTION SURVIVAL — After Context Loss
═══════════════════════════════════════════════════════════════════════════════

**After compaction, re-read this file:**

1. Soul principles are ALWAYS active (border-radius: 0, box-shadow: none, palette)
2. compositional-core/identity/identity.md is FIRST CONTACT layer (always-load)
3. compositional-core/identity/vocabulary.md is SECOND CONTACT layer (always-load)
4. compositional-core/vocabulary/tokens.css is THIRD CONTACT layer (always-load)
5. compositional-core/components/components.css is FOURTH CONTACT layer (always-load)
6. For building: compositional-core/README.md (phase-gated protocol)
7. For research: specification/README.md (THE KORTAI DESIGN MIND)

**Resume with ingestion protocol for your task type** (see "INGESTION PROTOCOL" section above)

═══════════════════════════════════════════════════════════════════════════════
## RESEARCH FINDING COUNTS (Accurate as of 2026-02-14)
═══════════════════════════════════════════════════════════════════════════════

**Total Research Findings: 337**

| Stream | Count | Primary Stage | Key Findings |
|--------|-------|---------------|--------------|
| R1 | 28 | OD | Documentation patterns, progressive disclosure |
| R2 | 27 | Multiple | Creative layouts, editorial asymmetry |
| R3 | 51 | DD | Density dimensions, R3-023 fractal self-similarity |
| R4 | 192 | AD | Axis innovations, AD-F-023 ATTENTION TOPOLOGY |
| R5 | 39 | CD | Combination theory, multi-pattern interaction |

**Research is NOW DISTILLED into compositional-core/**

**When to read R1-R5:**
- ❌ NEVER for building tasks (compositional-core/ sufficient)
- ✅ ALWAYS for research tasks (understanding WHY)
- ⚠️ SOMETIMES for validation (cross-checking extraction)

═══════════════════════════════════════════════════════════════════════════════
END ROOT CLAUDE.MD
═══════════════════════════════════════════════════════════════════════════════
