# Multi-Pass Corpus Integration Pipeline — Architecture Spec

This is the SINGLE SOURCE OF TRUTH for the pipeline architecture.
Every implementation decision references back to this document.

---

## Pipeline Identity

- **56 passes** across **7 subsets** with **3 rotations each**
- Deterministic orchestration via `claude -p`
- LLM controls NOTHING except creative building and holistic verification
- Orchestrator controls EVERYTHING mechanical

---

## Orchestrator Responsibilities (Deterministic Code)

- File loading (which files, exact paths)
- File ordering (prompt construction sequence)
- Rotation schedule (hold 2-3 passes, then rotate)
- Pass count (exactly 8 per subset, no early stopping)
- Agent type (builder vs verifier system prompts)
- Model selection (--model claude-opus-4-6)
- Session isolation (fresh claude -p per pass)
- Artifact backup (copy before each pass)
- Validation (HTML integrity between passes)
- State persistence (crash → resume from last pass)
- Cost tracking (per-pass + cumulative)
- Checkpoint creation (after each subset)

---

## Phase A: Corpus Integration (56 Passes)

### Content Input
- User's markdown (the actual content to be designed)

### Corpus (40,861 lines · 35 files)
- Research R1-R5: 4,104 lines
- DD Explorations: 6,259 lines
- OD Explorations: 12,012 lines
- AD Explorations: 10,920 lines
- CD Explorations: 10,704 lines
- Case Studies: 5,120 lines
- Connective Tissue: 14,780 lines

### Window 1: TC Derivation (single claude -p call)
- **Input:** Content markdown + TC skill + world-description (NO rules)
- **Output:** Conviction brief + 6D reflection + mechanism log
- The conviction brief is the DIRECTION
- Raw corpus is the MATERIAL
- They work together — direction tells WHERE, material gives WHAT TO BUILD

### Subset Structure

**Subset 1: Density Core** (~3,336 lines)
- R3-DENSITY-DIMENSIONS.md · DD-003-islands.html · DD-006-fractal.html
- DD-003 case study · DD-006 case study
- Rotation A: R3 → DD-003 → DD-006 → CS-003 → CS-006
- Rotation B: DD-006 → CS-006 → R3 → DD-003 → CS-003 (DD-006 to primacy)
- Rotation C: CS-003 → DD-003 → CS-006 → DD-006 → R3 (case studies primacy)

**Subset 2: Organization Core** (~5,849 lines)
- R1-DOCUMENTATION-PATTERNS.md · OD-001-conversational.html · OD-006-creative.html · case studies
- Rotation A (passes 9-11): original order
- Rotation B (passes 12-14): OD-006 to primacy
- Rotation C (passes 15-16): case studies to primacy

**Subset 3: Axis + Combination Core** (~6,522 lines)
- R4-AXIS-INNOVATIONS.md · R5-COMBINATION-THEORY.md · AD-006-compound.html · CD-006-pilot-migration.html · CD-006 case study
- Rotation A (passes 17-19): R4 → R5 → AD-006 → CD-006 → CS
- Rotation B (passes 20-22): AD-006 → CD-006 → CS → R4 → R5
- Rotation C (passes 23-24): CS → CD-006 → R4 → R5 → AD-006

**Subset 4: Density + Org Extended** (~4,686 lines)
- DD-001-breathing · DD-002-gradient · DD-004-layers · DD-005-rivers · DD-004 case study
- Passes 25-32 (3 rotations × 2-3 passes)

**Subset 5: Org + Axis Extended** (~5,800 lines)
- OD-002-narrative · OD-003-task-based · OD-004-confidence · AD-001-z-pattern
- Passes 33-40 (3 rotations × 2-3 passes)

**Subset 6: Remaining Axis + CD** (~5,500 lines)
- AD-002-f-pattern · AD-003-bento-grid · CD-001-reasoning-inside-code · CD-005-multi-axis-transition
- Passes 41-48 (3 rotations × 2-3 passes)

**Subset 7: Synthesis + Connective Intelligence** (~5,800 lines)
- RESEARCH-SYNTHESIS.md · R2-CREATIVE-LAYOUTS.md · COMPOSITIONAL-STRATEGY-LIBRARY · mechanism-combinations.md · compositional-rules.md · semantic-rules.md · OD-005-spatial.html
- Passes 49-56 (3 rotations × 2-3 passes)

### Pass Pattern (per subset, 8 passes)

```
Rotation A:
  Pass 1 → BUILDER  (reads raw material + artifact, integrates philosophy, writes to output.html)
  Pass 2 → VERIFIER (reads SAME raw material + artifact, "Does this FEEL like someone who understood?", writes observations)
  Pass 3 → BUILDER  (reads raw + artifact + observations, addresses verifier's gaps)

Rotation B (re-ordered, new file at primacy):
  Pass 4 → BUILDER  (re-engages with new ordering, new primacy file gets primary attention)
  Pass 5 → VERIFIER (re-checks with new primacy)
  Pass 6 → BUILDER  (addresses new observations)

Rotation C (re-ordered again, case studies at primacy):
  Pass 7 → BUILDER  (final integration pass)
  Pass 8 → VERIFIER (final holistic check)

═══ CHECKPOINT ═══  artifact backup + state snapshot + quality metrics
```

---

## Phase B: PA Hardening (12-24 Passes)

### PA Cycle (2-6 adaptive)

**Step 1: Screenshots** (Deterministic Playwright)
- 1440px viewport (desktop)
- 768px viewport (tablet)
- 375px viewport (mobile)
- DPR forced to 1.0
- Animations disabled
- document.fonts.ready awaited
- Full-page + viewport captures

**Step 2: Gate Runner** (Deterministic Playwright JS, NOT LLM)
- 42 gates executed as pure code
- Identity gates, perception thresholds, responsive checks
- Returns structured JSON: pass/fail per gate
- Gate verdict: PROCEED_TO_PA / IMPROVE / RETHINK

**Step 3: Experiential Scan** (Orchestrator scrolls page)
- Cold look at reading speed
- Flag anything illegible, broken, or confusing
- Pre-seed BLOCKING-USABILITY findings for auditors

**Step 4: 9 PA Auditors** (9 PARALLEL claude -p calls)
- PA-A (Soul), PA-B (Perception), PA-C (Coherence), PA-D (Metaphor)
- PA-E (Content), PA-F (Responsiveness), PA-G (Typography), PA-H (Spatial)
- PA-I: Integrative (spawns AFTER A-H complete, no assigned questions, free-form, emotional arc)
- INFORMATION ISOLATION: Auditors see screenshots + HTML ONLY. Never see builder context, conviction brief, gate results, or other auditor reports. Perceptual language ONLY.

**Step 5: Weaver** (single claude -p call)
- Reads all 9 auditor reports + gate results
- Own experiential anchor (reads screenshots FIRST)
- Produces: Verdict (SHIP/REFINE/REBUILD), Conviction report, Top-5 fixes (typed), Emotional arc synthesis, Improvement vector

**Step 6: Routing** (Deterministic code decision)
- SHIP → Final artifact
- REFINE → Refinement passes (6-8 per cycle)
- REBUILD → Return to Phase A subset selection (rare)

### Refinement Passes (6-8 per cycle)
- Each pass = claude -p
- Builder reads Weaver CONVICTION report (territories to enter, NOT fix checklist)
- Builder reads current artifact
- Builder DEEPENS, not fixes
- Artistic amplification
- Every 2-3 refinement passes: Mini-PA (3 auditors, 1 viewport)

### Stall Detection
- 2 consecutive cycles with no improvement → force SHIP
- Budget ceiling reached → warn and pause
- Max 6 PA cycles

### Final Output
- output.html built by someone who collectively read ALL 40,861 lines
- Every file got turns at primacy, recency, and valley positions
- Every subset's influence holistically verified
- Perceptual quality hardened through PA cycles
