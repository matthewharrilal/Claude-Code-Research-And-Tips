# Current Pipeline State Map

**Date:** 2026-02-27
**Purpose:** Complete inventory of every file the existing `/build-page` skill references, with classification for the new 3-window process.

---

## New Process Architecture (for classification context)

| Window | Role | What it does |
|--------|------|-------------|
| **Window 1** | Combined TC+BUILD | One Opus agent does content analysis, brief assembly, AND HTML building |
| **Window 2** | EVALUATE | ~28 gates (programmatic) + 5 PA auditors (perceptual) |
| **Window 3** | REFINE (if needed) | Different Opus builder, receives conviction + artistic impression only |

**Classification key:**
- **KEEP AS-IS** — File works unchanged in new process
- **MODIFY** — File exists but needs changes for new process
- **REPLACE** — Concept needed but file should be rewritten
- **DISCARD** — Not needed in new process
- **NEW NEEDED** — No current file exists; must be created

---

## 1. SKILL FILES (Entry Points)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `~/.claude/skills/build-page/SKILL.md` | 110 | Thin launcher — points to MANIFEST.md, lists all artifacts, execution rules, non-negotiables | Entry point for `/build-page` command | **REPLACE** | Must be rewritten to encode 3-window process directly; current version delegates everything to MANIFEST |
| `~/.claude/skills/tension-composition/SKILL.md` | 1,648 | Full TC pipeline — 5 phases (assessment, questioning, tension derivation, metaphor collapse, output) | Invoked by compositional-core CLAUDE.md manual workflow; NOT directly invoked by /build-page | **REPLACE** | TC skill rewrite already drafted at `ephemeral/tc-skill-update/SKILL-REWRITE.md` (841 lines). New process merges TC into Window 1 agent prompt |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 517 | Standalone PA skill — fresh-eyes principle, 3 laws, experiential questions | Standalone auditing only; /build-page uses pa-*.md split files instead | **KEEP AS-IS** | Standalone PA skill is separate from pipeline PA. Pipeline PA uses the split files below |
| `ephemeral/tc-skill-update/SKILL-REWRITE.md` | 841 | Drafted TC skill rewrite — 5 phases + conviction brief output | Not yet deployed; research artifact | **MODIFY** | Target ~300 lines for Window 1 integration |

---

## 2. MANIFEST + ORCHESTRATOR (Pipeline Control)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/MANIFEST.md` | 1,450 | Master routing spec — 12-step quickstart, agent roster (17 agents), artifact-to-agent routing table, agent prompt templates (Appendix E), model mandate (Appendix F) | AUTHORITATIVE routing document; orchestrator reads first | **DISCARD** | 1,450 lines of routing for 17 agents. New process has 3 windows. Routing collapses to ~50 lines in the new SKILL.md |
| `ephemeral/va-extraction/artifact-orchestrator.md` | 755 | Master control document — pipeline sequence, Observer protocol, IMPROVE/RETHINK iteration, verdict logic, low-friction iteration | EXECUTION authority for orchestrator | **DISCARD** | Orchestration logic moves into the new SKILL.md. Most content (Observer, 2-pass build, BV gates) is eliminated or simplified |
| `ephemeral/va-extraction/council-verdict.md` | 575 | Override document — resolves contradictions between artifacts | Tie-breaker when artifacts conflict | **DISCARD** | Contradictions only exist because of 9-artifact split. Single-source new skill has no contradictions |
| `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md` | 199 | Per-build accountability tracker — copy to output dir at pipeline start | Tracking template | **MODIFY** | Simplify drastically. Current tracker has 58+ fields; new process needs ~15 |
| `ephemeral/va-extraction/experiment-protocol.md` | 51 | Experiment gates GR-36 through GR-39 (Stage 0 Smoke through Stage 4 Flagship) | Experimental validation protocol | **DISCARD** | Experiment infrastructure not needed for production pipeline |

---

## 3. IDENTITY + PERCEPTION (Artifact 1)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/artifact-identity-perception.md` | 556 | Soul constraints (SC-01 through SC-10) + perception thresholds (RGB deltas, letter-spacing, gap limits) + calibration table | Routed to Brief Assembler (world-description) and Gate Runner (binary checks) | **MODIFY** | Core content is essential. But dual-routing (builder sees world-description, gate sees binary) collapses when Window 1 agent does both TC+BUILD. Extract ~100 lines of soul + perception essentials |

---

## 4. BUILDER RECIPE (Artifacts 2, 2a, 2b)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/artifact-builder-recipe.md` | 827 | REDIRECT — archived, replaced by split files | Historical redirect pointer | **DISCARD** | Just a redirect |
| `ephemeral/va-extraction/artifact-builder-recipe-compose.md` | 866 | Pass A recipe — D-01 through D-06, D-09 (7 dispositions), sequenced build phases (Read/Select/Deploy/Assess) | Given to Pass A Builder | **MODIFY** | Single builder in Window 1 needs ONE recipe, not two passes. Merge with enrich recipe into ~400-line unified recipe |
| `ephemeral/va-extraction/artifact-builder-recipe-enrich.md` | 300 | Pass B recipe — D-07, D-08 (2 dispositions: Edge Intentionality, Skeleton Test) | Given to Pass B Builder (different Opus) | **MODIFY** | Merge into unified recipe above |

---

## 5. CONTENT ROUTING (Artifact 5)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/artifact-routing.md` | 1,056 | Content analysis protocol, reader model (5-axis), brief assembly process, content-form fit gate, content-volume-to-zone-count map, compression physics | Given to Content Analyst + Brief Assembler | **MODIFY** | Window 1 agent does content analysis + brief assembly + building in one pass. Extract the essential content analysis protocol (~150 lines) and zone-count map (~30 lines). Discard redundant routing sections |

---

## 6. TC BRIEF TEMPLATE (Artifact 7)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/artifact-tc-brief-template.md` | 235 | Template for Brief Assembler — 4 tiers (Identity 15 lines, Perception 8 lines, Compositional 50 lines, Disposition 40 lines) + Content Map | Merged with Content Map by Brief Assembler | **MODIFY** | Window 1 agent produces the brief internally. Template structure is useful but the 4-tier format may be simplified since the same agent reads AND writes it |

---

## 7. WORKED EXAMPLES (Artifact 8)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/artifact-worked-examples.md` | 182 | Gas Town worked example — content map, brief excerpt, gate results, PA excerpt | Calibration reference for agents | **KEEP AS-IS** | Worked examples are always valuable. Low cost to include as optional reference |

---

## 8. VALUE TABLES (Artifact 9)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/artifact-value-tables.md` | 262 | Pre-computed CSS perception threshold values — copy-paste ready CSS snippets | Given to builders as reference | **KEEP AS-IS** | Directly useful for Window 1 builder. Compact and actionable |

---

## 9. GATE RUNNER (Split — 5 Files)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/gate-runner-core.js` | 3,185 | 29 executable Playwright JS functions implementing 57 gates | Executed by orchestrator via Playwright | **MODIFY** | Reduce from 57 to ~28 gates. Remove BV gates (brief verification — no separate brief), experiment gates, diagnostic gates. Keep identity, perception, anti-pattern gates |
| `ephemeral/va-extraction/gate-runner-spec.md` | 304 | Human-readable gate specifications (Waves 1-4) | Documentation for gate understanding | **MODIFY** | Update to reflect reduced gate set |
| `ephemeral/va-extraction/gate-runner-preconditions.md` | 83 | Text-based pre-build checks | Orchestrator pre-build verification | **DISCARD** | Preconditions are absorbed into Window 1 agent prompt |
| `ephemeral/va-extraction/gate-runner-provenance.md` | 151 | History + traceability of gate changes | Documentation only | **DISCARD** | History doc, not needed for execution |
| `ephemeral/va-extraction/gate-manifest.json` | 361 | Canonical gate registry — tiers, execution order, 57 gates (22 REQ + 15 REC + 9 ADV + 2 DIAG + 8 BV + 1 UTIL) | Gate TOC and ordering | **MODIFY** | Update to reflect reduced gate set (~28 gates) |
| `ephemeral/va-extraction/artifact-gate-runner.md` | 22 | Redirect pointer to split files | Historical redirect | **DISCARD** | Just a redirect |

---

## 10. PA PROTOCOL (Split — 6 Files)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `ephemeral/va-extraction/pa-questions.md` | 456 | 69 PA question definitions (PA-01 through PA-81) | Question bank for 9 auditors | **MODIFY** | Reduce from 69 to ~25-30 questions for 5 auditors. Remove redundant/low-value questions |
| `ephemeral/va-extraction/pa-deployment.md` | 450 | 9-auditor assignments, Section 0 experiential pass, screenshot protocol, Mini-PA Mode 2.5 | Auditor deployment logistics | **REPLACE** | Rewrite for 5-auditor deployment. Simplify assignment table |
| `ephemeral/va-extraction/pa-weaver.md` | 468 | Weaver protocol — experiential anchor, verdict logic, calibration, PA-05 scoring, emotional arc synthesis | Weaver agent instructions | **MODIFY** | Weaver still needed but simplified. Reduce calibration bloat |
| `ephemeral/va-extraction/pa-guardrails.md` | 113 | Auditor constraints — scoring anchors, visual verification, Section 3.1 | Auditor behavior constraints | **KEEP AS-IS** | Concise and essential |
| `ephemeral/va-extraction/pa-guardrails-weaver.md` | 59 | Weaver-only guardrails — Tier 1 equivalents, anti-patterns, S-09 stacking, revision degradation | Weaver constraints (NOT shared with auditors) | **KEEP AS-IS** | Essential information isolation |
| `ephemeral/va-extraction/pa-manifest.md` | 89 | Per-run PA tracking template | Per-build tracking | **MODIFY** | Simplify for 5 auditors instead of 9 |
| `ephemeral/va-extraction/artifact-pa-protocol.md` | 23 | Redirect pointer to split files | Historical redirect | **DISCARD** | Just a redirect |

---

## 11. DESIGN SYSTEM CORE FILES (Prerequisites)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `design-system/compositional-core/identity/prohibitions.md` | 419 | 22 prohibitions (8 absolute + 12 conditional + 2 meta) — KortAI identity through refusal | Always-load, given to ALL agents | **KEEP AS-IS** | Non-negotiable foundation. Window 1 agent reads this |
| `design-system/compositional-core/identity/soul-constraints.md` | 342 | 3 immutable anchors | Identity layer | **KEEP AS-IS** | Core identity |
| `design-system/compositional-core/vocabulary/tokens.css` | 183 | 65 CSS tokens in :root block — colors, typography, spacing, borders | Always-load, given to ALL agents | **KEEP AS-IS** | Non-negotiable. Window 1 builder needs exact token values |
| `design-system/compositional-core/components/components.css` | 944 | Merged component CSS (31KB) — reusable component classes | Given to builders | **KEEP AS-IS** | Window 1 builder uses this directly |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 751 | 18 mechanisms with impact profiles, application modes, zone mappings | Given to builders (Phase 4+) | **KEEP AS-IS** | Essential vocabulary for composition. Window 1 builder reads this |
| `design-system/compositional-core/grammar/compositional-rules.md` | 527 | 11 compositional rules | Grammar layer | **KEEP AS-IS** | Reference material |
| `design-system/compositional-core/components/component-inventory.md` | 879 | Component inventory with confidence levels | Component documentation | **KEEP AS-IS** | Reference material |
| `design-system/compositional-core/guidelines/semantic-rules.md` | 529 | 7+ semantic gap rules | Guidelines layer | **KEEP AS-IS** | Reference material |
| `design-system/compositional-core/guidelines/usage-criteria.md` | 337 | When to use what | Guidelines layer | **KEEP AS-IS** | Reference material |
| `design-system/compositional-core/guidelines/responsive-strategy.md` | 271 | 768px breakpoint strategy | Responsive guidelines | **KEEP AS-IS** | Reference material |
| `design-system/compositional-core/validation/anti-gravity-compliance.md` | 1,196 | Anti-gravity audit report | Validation layer | **KEEP AS-IS** | Reference material |
| `design-system/research/RESEARCH-SYNTHESIS.md` | 383 | Cross-research insights from R1-R5 | Research reference | **KEEP AS-IS** | Optional reference for content analysis |

---

## 12. DESIGN SYSTEM NAVIGATION FILES (Auto-loaded)

| File Path | Lines | Purpose | Role in Current Pipeline | New Process Status | Notes |
|-----------|-------|---------|--------------------------|-------------------|-------|
| `design-system/CLAUDE.md` | 694 | Root navigation + process enforcement — folder map, soul constraints, skill routing, ingestion protocol | Auto-loaded on directory entry | **MODIFY** | Update to reflect new 3-window process and simplified skill reference |
| `design-system/compositional-core/CLAUDE.md` | 662 | Phase-gated protocol — always-load, build protocol, anti-gravity rules, metacognitive framing, verification checklist | Auto-loaded in compositional-core | **MODIFY** | Update build protocol section to reference new process |

---

## SUMMARY STATISTICS

### Current Pipeline File Count
| Category | Files | Total Lines | Role |
|----------|-------|-------------|------|
| Skill entry points | 3 (+ 1 draft) | 3,116 | Launch + TC + PA skills |
| Manifest + Orchestrator | 5 | 3,030 | Pipeline control |
| Identity/Perception artifact | 1 | 556 | Soul + thresholds |
| Builder recipe artifacts | 3 | 1,993 | Build instructions |
| Content routing artifact | 1 | 1,056 | Content analysis |
| TC brief template | 1 | 235 | Brief structure |
| Worked examples | 1 | 182 | Calibration |
| Value tables | 1 | 262 | CSS reference |
| Gate runner (split) | 6 | 4,106 | Programmatic verification |
| PA protocol (split) | 7 | 1,658 | Perceptual audit |
| Design system core | 12 | 6,761 | Vocabulary + grammar + identity |
| Navigation files | 2 | 1,356 | Auto-loaded routing |
| **TOTAL** | **43 (+1)** | **24,311** | |

### Classification Distribution
| Status | Count | Lines | % of Total Lines |
|--------|-------|-------|------------------|
| **KEEP AS-IS** | 16 | 6,542 | 26.9% |
| **MODIFY** | 14 | 8,666 | 35.6% |
| **REPLACE** | 3 | 3,107 | 12.8% |
| **DISCARD** | 11 | 5,996 | 24.7% |
| **NEW NEEDED** | 0 | — | — |

### Key Observations

1. **24,311 total lines** across 44 files currently power the pipeline. The new process should target ~5,000-7,000 lines across ~15-20 files.

2. **5,996 lines (24.7%) are pure waste** — redirect pointers, history docs, experiment protocols, contradiction resolvers, and orchestration for 17 agents that collapse to 3 windows.

3. **The MANIFEST (1,450 lines) exists because routing 9 artifacts to 17 agents is complex.** With 3 windows, routing is trivial. The manifest should disappear entirely, replaced by ~50 lines of routing in the new SKILL.md.

4. **Design system core files (6,761 lines) are all KEEP AS-IS.** These are the actual vocabulary the builder needs. They are not pipeline infrastructure — they are content.

5. **The biggest MODIFY targets** are:
   - `gate-runner-core.js` (3,185 lines → ~1,500 lines after gate reduction)
   - `artifact-routing.md` (1,056 lines → ~150 lines of content analysis protocol)
   - `artifact-builder-recipe-compose.md` + `artifact-builder-recipe-enrich.md` (1,166 lines → ~400 lines unified recipe)
   - `artifact-identity-perception.md` (556 lines → ~100 lines of essentials)

6. **The TC skill (1,648 lines) + rewrite (841 lines)** need to become ~300 lines embedded in the Window 1 agent prompt or a referenced file.

7. **PA deployment drops from 9 auditors (69 questions) to 5 auditors (~30 questions).** This cuts PA files by ~40%.

8. **Zero NEW files identified** in this inventory — the new process reuses/modifies existing content rather than creating from scratch. However, the new SKILL.md itself will be the primary new deliverable.

---

## APPENDIX: File Reference Quick-Lookup

All paths relative to `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`:

```
DISCARD (11 files, 5,996 lines):
  ephemeral/va-extraction/MANIFEST.md                    (1,450)
  ephemeral/va-extraction/artifact-orchestrator.md       (755)
  ephemeral/va-extraction/council-verdict.md             (575)
  ephemeral/va-extraction/experiment-protocol.md         (51)
  ephemeral/va-extraction/artifact-builder-recipe.md     (827)  [redirect]
  ephemeral/va-extraction/artifact-gate-runner.md        (22)   [redirect]
  ephemeral/va-extraction/artifact-pa-protocol.md        (23)   [redirect]
  ephemeral/va-extraction/gate-runner-preconditions.md   (83)
  ephemeral/va-extraction/gate-runner-provenance.md      (151)

MODIFY (14 files, 8,666 lines):
  ephemeral/va-extraction/artifact-identity-perception.md      (556)
  ephemeral/va-extraction/artifact-builder-recipe-compose.md   (866)
  ephemeral/va-extraction/artifact-builder-recipe-enrich.md    (300)
  ephemeral/va-extraction/artifact-routing.md                  (1,056)
  ephemeral/va-extraction/artifact-tc-brief-template.md        (235)
  ephemeral/va-extraction/gate-runner-core.js                  (3,185)
  ephemeral/va-extraction/gate-runner-spec.md                  (304)
  ephemeral/va-extraction/gate-manifest.json                   (361)
  ephemeral/va-extraction/pa-questions.md                      (456)
  ephemeral/va-extraction/pa-weaver.md                         (468)
  ephemeral/va-extraction/pa-manifest.md                       (89)
  ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md        (199)
  design-system/CLAUDE.md                                      (694)
  design-system/compositional-core/CLAUDE.md                   (662)

REPLACE (3 files, 3,107 lines):
  ~/.claude/skills/build-page/SKILL.md                         (110)
  ~/.claude/skills/tension-composition/SKILL.md                (1,648)
  ephemeral/va-extraction/pa-deployment.md                     (450)

KEEP AS-IS (16 files, 6,542 lines):
  ~/.claude/skills/perceptual-auditing/SKILL.md                (517)
  ephemeral/va-extraction/artifact-worked-examples.md          (182)
  ephemeral/va-extraction/artifact-value-tables.md             (262)
  ephemeral/va-extraction/pa-guardrails.md                     (113)
  ephemeral/va-extraction/pa-guardrails-weaver.md              (59)
  design-system/compositional-core/identity/prohibitions.md    (419)
  design-system/compositional-core/identity/soul-constraints.md (342)
  design-system/compositional-core/vocabulary/tokens.css       (183)
  design-system/compositional-core/components/components.css   (944)
  design-system/compositional-core/grammar/mechanism-catalog.md (751)
  design-system/compositional-core/grammar/compositional-rules.md (527)
  design-system/compositional-core/components/component-inventory.md (879)
  design-system/compositional-core/guidelines/semantic-rules.md (529)
  design-system/compositional-core/guidelines/usage-criteria.md (337)
  design-system/compositional-core/guidelines/responsive-strategy.md (271)
  design-system/research/RESEARCH-SYNTHESIS.md                 (383)
```
