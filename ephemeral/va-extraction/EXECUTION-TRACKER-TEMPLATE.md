# Execution Tracker — {SLUG}

> Copy to build directory at pipeline start. Fields marked **(auto)** are filled by `tracker-preflight.sh` or gate runner output. Fields marked **(manual)** require orchestrator judgment.

---

## Build Metadata

| Field | Value | Source |
|-------|-------|--------|
| BUILD_DATE | ___ | (auto) `date -u +%Y-%m-%d` |
| CONTENT_PATH | ___ | (auto) preflight arg |
| SLUG | ___ | (auto) preflight arg |
| PIPELINE_START | ___ | (auto) `date -u +%H:%M:%S` |
| PIPELINE_END | ___ | (manual) `date -u` at completion |
| TOTAL_DURATION | ___ | (auto) end - start |
| OBSERVER_SPAWNED | ___ | (auto) timestamp |
| OBSERVER_COMPLIANCE | ___ | (auto) from OBSERVER-REPORT.md summary |

---

## Phase 0: Content Analysis

- [ ] Content Map produced — ___ lines (auto: `wc -l`)
- Content Type: ___ (auto: from Content Map header — PROSE/MIXED/VISUAL)
- Mode determination: ___ (manual: APPLIED/COMPOSED + 1-line rationale)
- If COMPOSED: heterogeneity HIGH AND metaphor viability YES confirmed: ___ (manual: YES/N/A)

## Phase 1: Brief Assembly

- [ ] Execution Brief produced — ___ lines (auto: `wc -l`)
- BV gates: ___/8 PASS (auto: from BV JSON or log)
- BV revision cycles: ___ (manual: 0/1/2)
- Compression ratio: ___ (auto: from BV-05 if tracked)
- Content-form fit: ___ (manual: PASS/FAIL + 1-line note)

## Phase 2A: Pass A Build (Structure)

- [ ] Pass A HTML produced — ___ lines (auto: `wc -l`)
- CSS lines (Pass A): ___ (auto: count `<style>` content)
- Builder model (Pass A): ___ (manual: Opus REQUIRED)
- Pass A builder spawn time: ___ (auto: `date -u +%H:%M:%S`)
- Pass A builder completion time: ___ (auto: `date -u +%H:%M:%S`)
- Conviction statement present: ___ (auto: grep `<!-- CONVICTION`)
- Self-eval 7 questions answered: ___ (auto: grep count)
- Pass A HTML path: ___

## Phase 2A-gate: Pass A Structural Check

- Identity gates: ___/10 PASS (auto: from structural check)
- GR-51 heading hierarchy: ___ (auto: PASS/FAIL)
- Zone count: ___ (auto: section count)
- CSS floor (>= 400): ___ (auto: PASS/FAIL)
- Conviction present: ___ (auto: PASS/FAIL)
- Self-eval present: ___ (auto: PASS/FAIL)
- Pass A structural verdict: ___ (auto: PROCEED-TO-PASS-B / RE-SPAWN / RETHINK)

## Phase 2B: Pass B Build (Refinement)

- [ ] Pass B HTML produced — ___ lines (auto: `wc -l`)
- CSS lines (Pass B): ___ (auto: count `<style>` content)
- CSS lines delta (B - A): ___ (auto)
- Builder model (Pass B): ___ (manual: Opus REQUIRED)
- Pass B builder spawn time: ___ (auto: `date -u +%H:%M:%S`)
- Pass B builder completion time: ___ (auto: `date -u +%H:%M:%S`)
- Pass B is DIFFERENT agent than Pass A: ___ (manual: YES required)
- Pass B HTML path: ___
- GR-65 structure preservation: ___ (auto: PASS/FAIL)

## Phase 3A: Screenshots + Gates

- [ ] Screenshots captured — ___ total (auto: `ls *.png | wc -l`)
- DPR verified (GR-61): ___ (auto: PASS/FAIL)
- Screenshot quality (GR-62): ___ (auto: PASS/FAIL)
- Visible content check: ___ (auto: PASS/FAIL from checkVisibleContent)
- Gate results path: ___ (auto: path to unified JSON)
- Gates: ___ PASS / ___ FAIL / ___ SKIP (auto: from JSON)
- GR-48 (meta-gate): ___ (auto: PASS/FAIL)
- Experiential scan: ___ (manual: CLEAN/BLOCKING-USABILITY + description if blocking)

## Phase 3B: Perceptual Audit

| Auditor | Spawned | Report Filed | Respawns |
|---------|---------|--------------|----------|
| A — Impression + Emotion | ___ | ___ | ___ |
| B — Readability + Typography | ___ | ___ | ___ |
| C — Spatial + Proportion | ___ | ___ | ___ |
| D — Flow + Pacing | ___ | ___ | ___ |
| E — Grid + Layout | ___ | ___ | ___ |
| F — Consistency + Rhythm | ___ | ___ | ___ |
| G — Metaphor + Ideology | ___ | ___ | ___ |
| H — Responsiveness | ___ | ___ | ___ |
| I — Cross-Page + Adversarial | ___ | ___ | ___ |

- Integrative spawned AFTER all 9 reports: ___ (auto: timestamp comparison)
- Integrative report path: ___
- Experiential convergence: ___/9 flagged same element
- If convergence >= 3: finding = ___

## Phase 3C: Verdict

- PA-05 score: ___/4 (from Weaver)
- Tier 5 score: ___/9 (from Weaver)
- Verdict: ___ (RELEASE / POLISH / IMPROVE / RETHINK)
- Fix count: ___ MECHANICAL / ___ STRUCTURAL / ___ COMPOSITIONAL
- Weaver diagnostic path: ___
- Weaver artistic path: ___
- GR-64 (usability priority): ___ (auto: PASS/FAIL/N/A)

## IMPROVE Phase (if applicable)

- IMPROVE target: ___ (manual: R-A = Pass B only / R-C = Pass A + new Pass B)
- IMPROVE rationale: ___ (manual: 1-line — why this target)
- IMPROVE builder model: ___ (manual: Opus REQUIRED)
- IMPROVE builder is DIFFERENT agent: ___ (manual: YES required)
- IMPROVE isolation verified: ___ (manual: YES/NO — generative language only, no gates/scores)
- If R-C: Pass A IMPROVE HTML path: ___
- If R-C: Fresh Pass B HTML path: ___
- If R-A: Revised Pass B HTML path: ___
- Post-IMPROVE mechanical sweep: ___ (auto: gate rerun PASS/FAIL counts)
- GR-60 re-run: ___ (auto: PASS/FAIL)
- IMPROVE PA-05 delta: ___ (auto: final - initial)
- IMPROVE CSS lines delta: ___ (auto: final - initial)

### Iteration State

| Field | Value |
|-------|-------|
| Iteration State | _INITIAL / IMPROVE-1 / IMPROVE-2 / BUDGET-EXHAUSTED_ |

### Iteration Log

| Cycle | Pass | PA-05 | Tier5 | Gate Pass % | Fix Count | Verdict | Decision |
|-------|------|-------|-------|-------------|-----------|---------|----------|
| 1 (initial A+B) | A+B | ___ | ___ | ___ | ___ | ___ | ___ |
| 2 (IMPROVE) | R-A/R-C | ___ | ___ | ___ | ___ | ___ | ___ |
| 3 (IMPROVE-2) | R-A/R-C | ___ | ___ | ___ | ___ | ___ | ___ |

**Derived completion check:** If Iteration State != INITIAL AND no `-improve` PA reports exist in output directory → Phase 3C: INCOMPLETE.

---

## Gate Failure Triage

| Gate ID | Status | Triage | Notes |
|---------|--------|--------|-------|
| ___ | FAIL | ___ | ___ |

> Triage values: INTENTIONAL (design choice) / FALSE-POS (gate too strict) / GENUINE (real defect)
> Auto-populate rows from unified gate JSON. Only failed gates listed.

---

## Orchestrator Self-Assessment

1. Did all REQUIRED gates execute? ___ (verify via GR-48)
2. Were any gate results hand-constructed instead of from gate runner? ___ (count source:'manual')
3. Were all agent spawn timestamps recorded? ___ (YES/NO)
4. Did Integrative run after all 9 PA reports? ___ (YES/NO)
5. Total tracker fill rate: ___% (count filled / total fields)

---

## Output Files

| Phase | File | Path | Exists |
|-------|------|------|--------|
| P0 | Content Map | ___ | [ ] |
| P1 | Execution Brief | ___ | [ ] |
| P2A | Pass A HTML | ___ | [ ] |
| P2A-gate | Structural Check JSON | ___ | [ ] |
| P2B | Pass B HTML (final) | ___ | [ ] |
| P3A | Gate Results JSON | ___ | [ ] |
| P3A | Screenshots Dir | ___ | [ ] |
| P3B | PA Reports (A-I) | ___ | [ ] |
| P3B | Integrative Report | ___ | [ ] |
| P3C | Weaver Diagnostic | ___ | [ ] |
| P3C | Weaver Artistic | ___ | [ ] |
| IMPROVE | Revised HTML (if applicable) | ___ | [ ] |
| OBS | Observer Report | ___ | [ ] |

---

## Derived Phase Completion

> No separate L0 checkboxes. Phase is complete when ALL its fields above are filled.

| Phase | Fields | Filled | Complete |
|-------|--------|--------|----------|
| Phase 0 | 4 | ___ | ___ |
| Phase 1 | 5 | ___ | ___ |
| Phase 2A | 8 | ___ | ___ |
| Phase 2A-gate | 7 | ___ | ___ |
| Phase 2B | 9 | ___ | ___ |
| Phase 3A | 8 | ___ | ___ |
| Phase 3B | 22 | ___ | ___ |
| Phase 3C | 7 | ___ | ___ |
| IMPROVE | 12 | ___ | ___ |
| **Total** | **82** | ___ | ___ |
