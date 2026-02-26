# Ceiling Experiment: Complete Team Topology

**Date:** 2026-02-16
**Author:** topology-designer (ceiling-prompt-team)
**Sources:** 7 extraction files (01-07) + PROMPT-SLICING-STRATEGY + INFORMATION-ISOLATION-MATRIX
**Purpose:** Define EVERY agent, communication rule, checkpoint, isolation boundary, and creation spec for the Ceiling experiment execution team

---

## 1. AGENT ROSTER

### Overview

**Total agents:** 12 (1 team-lead + 11 workers)
**Model split:** 3 Opus 4.6 (creative/orchestration roles) + 9 Sonnet 4.5 (execution roles)
**Topology:** Flat file-bus with checkpoint-based messaging (no intermediate captains)
**Per-file ownership:** Every worker writes exactly 1 output file (zero contention)

---

### Agent Details

#### TEAM-LEAD (Opus 4.6)
- **Role:** Orchestration, gate verification, PA reconciliation, messaging hub, checkpoint enforcement
- **Reads:** All files (master prompt, all agent outputs as they appear)
- **Writes:** No deliverable file (coordination only); sends messages to agents at checkpoints
- **Prompt scope:** 100% of master prompt (~1,600 lines)
- **Tools:** Read, Write, Edit, Bash, SendMessage, TaskCreate, TaskUpdate, Playwright (for landmark verification)
- **Context strategy:** Thin team-lead pattern -- verifies file existence and structure markers, reads ONLY gate verification results, audit summaries, and verdict. Does NOT read full intermediate outputs to preserve context budget (<30K tokens).

#### METAPHOR-AGENT (Opus 4.6)
- **Role:** Phases 1-3: Multi-axis questioning, tension derivation, metaphor collapse
- **Reads:** Content selection output (SYSTEM documentation), multi-axis questioning protocol, tension derivation steps, metaphor collapse process, soul constraints, mechanism category names ONLY (S/H/C/D/N)
- **Writes:** `01-metaphor-derivation.md`
- **Prompt scope:** ~30% of master (~480 lines)
- **Tools:** Read, Write
- **Context strategy:** Sees content + pipeline phases 1-3 + soul constraints. ZERO mechanism detail -- metaphor must drive selection, not vice versa.

#### PLANNER (Opus 4.6)
- **Role:** Phase 4: Mechanism selection through metaphor lens, build plan creation
- **Reads:** `01-metaphor-derivation.md`, full mechanism catalog (18 entries), pattern table (CRESCENDO/F-PATTERN/BENTO/PULSE), per-category minimums, reinforcing pairs requirement, 4-scale requirement, soul constraints, guardrails table, container width rule, tokens.css
- **Writes:** `02-build-plan.md`
- **Prompt scope:** ~50% of master (~800 lines)
- **Tools:** Read, Write
- **Context strategy:** CRITICAL junction where metaphor-to-mechanism translation occurs. Sees full catalog for selection decisions. Does NOT see PA results, prior scores, or evaluation criteria (prevents goal-driven selection).

#### BUILDER (Sonnet 4.5)
- **Role:** Phase 5: HTML/CSS implementation from build plan
- **Reads:** `02-build-plan.md`, pre-baked CSS blocks (:root, typography, accessibility, responsive), soul constraints (7 rules), guardrails table, self-check checklist (8 items), landmark completeness list, tokens.css, metaphor SUMMARY (1 paragraph only)
- **Writes:** `ceiling-page.html`
- **Prompt scope:** ~25% of master (~400 lines)
- **Tools:** Read, Write, SendMessage (to planner for clarifications)
- **Context strategy:** Implements plan specs. Does NOT see full metaphor derivation (prevents continuation bias), mechanism catalog (prevents mechanism shopping), evaluation criteria (prevents teaching to test). HAS SendMessage to ask planner for clarification -- THE key Middle-tier fix.

#### PROGRAMMATIC-AUDITOR (Sonnet 4.5)
- **Role:** Phase 6a: Binary compliance audit generated FROM build plan
- **Reads:** `02-build-plan.md` (to generate PLANNED vs DEPLOYED vs MISSING checklist), `ceiling-page.html`, soul constraints, Critical-10 checklist, guardrails table, container width rule, CPL formula, heading spacing ratio formula, rhythm variation check, tokens.css (for token compliance measurement)
- **Writes:** `03-programmatic-audit.md`
- **Prompt scope:** ~20% of master (~320 lines)
- **Tools:** Read, Write, Bash (for Playwright-based measurements), Playwright
- **Context strategy:** Plan-specific verification (not generic compliance). Does NOT see metaphor, PA questions, evaluation criteria, or prior results.

#### PERCEPTUAL-AUDITOR-1 (Sonnet 4.5)
- **Role:** Phase 6b: Fresh-eyes perceptual evaluation (zero context)
- **Reads:** PA questions ONLY (48 questions from perceptual-auditing skill), rendered page (served via HTTP at 1440px and 768px)
- **Writes:** `04a-perceptual-audit.md`
- **Prompt scope:** ~8% of master (~130 lines)
- **Tools:** Read, Write, Playwright (for screenshots)
- **Context strategy:** MAXIMUM isolation. Sees NOTHING about design system, mechanisms, metaphor, tier model, build plan, soul, container width, prior experiments. Zero context = genuine first impressions. NON-NEGOTIABLE.

#### PERCEPTUAL-AUDITOR-2 (Sonnet 4.5)
- **Role:** Phase 6b: Independent duplicate fresh-eyes PA for inter-rater reliability
- **Reads:** Same as PA-1 (identical inputs, independent evaluation)
- **Writes:** `04b-perceptual-audit.md`
- **Prompt scope:** ~8% of master (~130 lines)
- **Tools:** Read, Write, Playwright (for screenshots)
- **Context strategy:** Same as PA-1. PA-1 and PA-2 MUST NOT see each other's outputs until BOTH complete.

#### COMPARATIVE-AUDITOR (Sonnet 4.5)
- **Role:** Phase 7a: Ceiling vs Middle comparison on SAME content
- **Reads:** Both HTML pages (ceiling-page.html + Middle experiment HTML), comparison criteria (>= 3 specific perceptual improvements), soul constraints, structural comparison framework, mechanism names (names only, for identifying changes)
- **Writes:** `05-comparison-report.md`
- **Prompt scope:** ~15% of master (~240 lines)
- **Tools:** Read, Write, Playwright (for side-by-side screenshots)
- **Context strategy:** Sees BOTH pages WITHOUT tier labels (presented as "Page A" and "Page B"). Does NOT see metaphor, build plans, PA results, or experiment hypothesis. Identifies differences objectively.

#### NOVELTY-EVALUATOR (Sonnet 4.5)
- **Role:** Phase 7b: Blind 3-page evaluation for structural/CSS/combination novelty
- **Reads:** 3 unlabeled HTML pages in RANDOMIZED order (Ceiling, Middle, Phase D Variant B), novelty assessment questions (D3.1, D3.2, D3.3), blind evaluation protocol
- **Writes:** `06-novelty-assessment.md`
- **Prompt scope:** ~5% of master (~80 lines)
- **Tools:** Read, Write, Playwright (for screenshots)
- **Context strategy:** MAXIMUM isolation for novelty. Sees ZERO context: no page labels, no hypothesis, no prior results, no mechanism counts, no build plans, no metaphor, no PA results. Must identify newest page SOLELY from perceptual differences.

#### VERDICT-SYNTHESIZER (Sonnet 4.5)
- **Role:** Phase 8: Final synthesis across all audit/evaluation outputs
- **Reads:** ALL audit outputs (03-programmatic, 04a-PA, 04b-PA, 05-comparison, 06-novelty), success criteria table (11 criteria with thresholds), margin reporting requirements, adversarial self-check protocol, defect severity classification, tier model definition
- **Writes:** `07-VERDICT.md`
- **Prompt scope:** ~40% of master (~640 lines)
- **Tools:** Read, Write
- **Context strategy:** Synthesis role -- sees everything. Must reconcile PA disagreements, weigh defect severity, report pass MARGINS (not just pass/fail), and run adversarial self-check (3 strongest challenges to its own verdict).

#### HTTP-SERVER (Sonnet 4.5)
- **Role:** Utility: Serve HTML files via HTTP for Playwright-based auditing
- **Reads:** `ceiling-page.html`, Middle experiment HTML, Phase D Variant B HTML
- **Writes:** No deliverable file (serves files via HTTP only)
- **Prompt scope:** Minimal (~50 lines)
- **Tools:** Bash (to run HTTP server)
- **Context strategy:** Pure utility agent. Starts HTTP server, serves files, stops when audits complete.

---

### Agent Model Justification

| Agent | Model | Justification |
|-------|-------|---------------|
| team-lead | Opus 4.6 | Orchestration requires tracking all dependencies, making judgment calls at gates |
| metaphor-agent | Opus 4.6 | Creative metaphor derivation is THE Ceiling differentiator -- requires Opus capability |
| planner | Opus 4.6 | Metaphor-to-mechanism translation requires creative compositional reasoning |
| builder | Sonnet 4.5 | Implementation from spec -- Sonnet excels at faithful execution |
| All auditors | Sonnet 4.5 | Evaluation is structured and guided by questions/criteria -- Sonnet sufficient |
| verdict-synth | Sonnet 4.5 | Synthesis from structured inputs with clear criteria -- Sonnet sufficient |

**Cost profile:** 3 Opus (creative) + 9 Sonnet (execution) = cost-effective split validated by Middle experiment and 6+ prior teams.

---

## 2. COMMUNICATION PROTOCOL

### Design Rationale

Middle experiment used ZERO SendMessage = 35 min execution, B+ quality, 3 defects (missing footer, CPL +2, token compliance 66.5%). CD-006 WITH messaging = 39/40, A quality. The flat TOPOLOGY is validated. The COMMUNICATION PROTOCOL must change from file-only to file + checkpoint-based messaging.

### Message Categories

#### MANDATORY Messages (Agent MUST send)

| Trigger | Sender | Recipient | Content | Why Mandatory |
|---------|--------|-----------|---------|---------------|
| Plan ambiguity detected | builder | planner | "Plan says X but Builder Blocks don't include CSS for X. Implement from Section 2 description?" | Prevents missing footer class defects |
| Severity-1 defect found | prog-auditor | team-lead | "Missing landmark: [name]. BLOCKING -- cannot proceed." | Prevents WOULD-NOT-SHIP defects reaching verdict |
| Metaphor resonance gate | team-lead | metaphor-agent | "Metaphor [PASS/FAIL]: authenticity [Y/N], cross-domain [Y/N], multi-dimensional [Y/N]" | Blocks progression on failed metaphor |
| Landmark gate result | team-lead | builder (if fail) | "Footer missing from HTML. Add before audit proceeds." | THE Middle-tier smoking gun fix |
| PA reconciliation needed | team-lead | verdict-synth | "PA-1 and PA-2 DISAGREE on [criterion]. PA-1: [verdict]. PA-2: [verdict]." | Ensures disagreements are explicitly resolved |
| Build self-check FAIL | builder | team-lead | "Self-check failed: [CPL/tokens/landmarks/container]. Attempting fix." | Catches defects before audit |

#### PERMITTED Messages (Agent MAY send)

| Trigger | Sender | Recipient | Content | Constraint |
|---------|--------|-----------|---------|------------|
| Mechanism implementation question | builder | planner | Specific question about mechanism CSS | Max 3 clarification messages |
| Metaphor expression question | builder | planner | "How should [metaphor] express at [scale]?" | Max 2 metaphor questions |
| Anomalous measurement | prog-auditor | team-lead | "Value X is [marginal/unexpected] -- flag for investigation" | Only if measurement surprises |
| Proactive guidance | planner | builder | "Section D should be densest zone -- use 32px not 48px" | Only if planner identifies high-risk ambiguity |

#### FORBIDDEN Messages (Agent MUST NOT send)

| Rule | Why | What Contamination It Prevents |
|------|-----|-------------------------------|
| PA-1 MUST NOT message PA-2 (or vice versa) | Independent evaluation required | Cross-contamination of perceptual judgments |
| Novelty evaluator MUST NOT message anyone before completing blind assessment | Blind protocol integrity | Any context = framing effect on novelty judgment |
| No agent may send status updates ("working on Section 3 now") | File existence IS the status signal | Context accumulation without value |
| No broadcast messages | Expensive (N messages), creates noise | Context explosion across all agents |
| Comparative auditor MUST NOT ask "which page is Ceiling?" | Blind comparison protocol | Knowledge of which page is "supposed to be better" |

### Message Format

All SendMessage calls MUST follow this structure:

```
SENDER: [agent-name]
TO: [recipient-name]
TYPE: [CLARIFICATION | ISSUE | ITERATION-REQUEST | GATE-RESULT]
CONTENT: [Specific question or statement, max 200 words]
BLOCKING: [YES -- recipient must respond before sender proceeds | NO -- informational]
```

### Anti-Spam Rules

| Agent | Max Messages (entire experiment) | Rationale |
|-------|--------------------------------|-----------|
| builder | 5 | Clarification questions to planner + self-check failures to team-lead |
| planner | 3 | Proactive guidance to builder (only if high-risk ambiguity detected) |
| prog-auditor | 3 | Anomalous findings to team-lead |
| team-lead | 10 | Gate results, iteration requests, PA reconciliation |
| PA-1, PA-2 | 0 | Zero messages -- fresh-eyes isolation |
| novelty-evaluator | 0 before blind assessment, 1 after | Zero until blind complete, then confirmation |
| comparative-auditor | 1 | Only to request page access if needed |
| verdict-synth | 2 | Only if missing data from prior audits |

**Total expected messages:** 15-25 across entire experiment
**Total expected overhead:** +10-20 minutes vs file-only (worth it for preventing WOULD-NOT-SHIP defects)

---

## 3. TEAM CREATION SPEC

### Wave Architecture

The experiment executes in 5 sequential waves with blocking dependencies.

```
WAVE 1: Content + Metaphor (Sequential)
  ├── [content reuse] SYSTEM documentation (no agent needed -- reuse Middle)
  └── metaphor-agent → 01-metaphor-derivation.md
       └── GATE: Metaphor Resonance (team-lead verifies)

WAVE 2: Planning (Sequential, depends on Wave 1)
  └── planner → 02-build-plan.md
       └── GATE: Category Coverage + Reinforcing Pairs + 4 Scales (team-lead verifies)

WAVE 3: Build + Server (Sequential, depends on Wave 2)
  ├── builder → ceiling-page.html
  │    └── GATE: Builder Self-Check (CPL, tokens, landmarks, container, soul)
  ├── http-server (starts serving files)
  └── GATE: Landmark Completeness (team-lead verifies header + footer + sections)

WAVE 4: Audit + Evaluation (Parallel where independent, depends on Wave 3)
  ├── [PARALLEL] programmatic-auditor → 03-programmatic-audit.md
  ├── [PARALLEL] perceptual-auditor-1 → 04a-perceptual-audit.md
  ├── [PARALLEL] perceptual-auditor-2 → 04b-perceptual-audit.md
  ├── [PARALLEL] comparative-auditor → 05-comparison-report.md
  └── [PARALLEL] novelty-evaluator → 06-novelty-assessment.md

WAVE 5: Verdict (Sequential, depends on Wave 4)
  └── verdict-synthesizer → 07-VERDICT.md
```

### Task Creation Sequence

Tasks should be created in this order, with blocking dependencies:

```
Task 1: Metaphor Derivation (metaphor-agent, Opus)
  blocks: Task 2

Task 2: Build Plan (planner, Opus)
  blocked by: Task 1
  blocks: Task 3

Task 3: HTML Build (builder, Sonnet)
  blocked by: Task 2
  blocks: Tasks 4-8

Task 4: Programmatic Audit (programmatic-auditor, Sonnet)
  blocked by: Task 3
  blocks: Task 9

Task 5: Perceptual Audit 1 (PA-1, Sonnet)
  blocked by: Task 3
  blocks: Task 9

Task 6: Perceptual Audit 2 (PA-2, Sonnet)
  blocked by: Task 3
  blocks: Task 9

Task 7: Comparative Audit (comparative-auditor, Sonnet)
  blocked by: Task 3
  blocks: Task 9

Task 8: Novelty Evaluation (novelty-evaluator, Sonnet)
  blocked by: Task 3
  blocks: Task 9

Task 9: Verdict Synthesis (verdict-synthesizer, Sonnet)
  blocked by: Tasks 4, 5, 6, 7, 8
```

### Agent Spawning Order

**Wave 1 (t=0):**
- Spawn metaphor-agent with content + Phase 1-3 protocol + soul constraints
- Team-lead monitors for `01-metaphor-derivation.md` file creation
- Team-lead runs Metaphor Resonance Gate (CP-1)

**Wave 2 (t=10-15 min, after CP-1 PASS):**
- Spawn planner with metaphor output + full mechanism catalog + guardrails
- Team-lead monitors for `02-build-plan.md` file creation
- Team-lead runs Category Coverage Gate (CP-2)

**Wave 3 (t=20-30 min, after CP-2 PASS):**
- Spawn http-server (start serving HTML files)
- Spawn builder with build plan + pre-baked CSS + soul + guardrails + metaphor summary
- Team-lead monitors for `ceiling-page.html` file creation
- Builder runs self-check (CP-3 internal)
- Team-lead runs Landmark Completeness Gate (CP-4)
- If CP-4 FAILS: team-lead messages builder, builder fixes, team-lead re-verifies

**Wave 4 (t=35-50 min, after CP-4 PASS):**
- Spawn ALL 5 evaluation agents in parallel:
  - programmatic-auditor
  - perceptual-auditor-1
  - perceptual-auditor-2
  - comparative-auditor
  - novelty-evaluator
- Team-lead monitors for all 5 output files
- Playwright scheduling: PA-1 and PA-2 can share concurrent Playwright (screenshot-only). Programmatic-auditor uses Playwright sequentially after PAs finish. Comparative and novelty use separate Playwright instances with screenshots only.

**Wave 5 (t=55-70 min, after all Wave 4 complete):**
- Spawn verdict-synthesizer with all audit outputs + success criteria
- Team-lead monitors for `07-VERDICT.md` file creation

**Estimated total:** 60-100 minutes (matches recalibrated parallel agent model)

### TeamCreate Call Structure

The team-lead should create the team with these specifications:

```
Team name: ceiling-experiment
Team size: 12 agents (team-lead + 11 workers)

Agent definitions:
1. metaphor-agent (Opus 4.6) - Phase 1-3 metaphor derivation
2. planner (Opus 4.6) - Phase 4 mechanism selection
3. builder (Sonnet 4.5) - Phase 5 HTML/CSS build
4. http-server (Sonnet 4.5) - Utility: serve files via HTTP
5. programmatic-auditor (Sonnet 4.5) - Phase 6a binary compliance
6. perceptual-auditor-1 (Sonnet 4.5) - Phase 6b fresh-eyes PA
7. perceptual-auditor-2 (Sonnet 4.5) - Phase 6b independent PA
8. comparative-auditor (Sonnet 4.5) - Phase 7a tier comparison
9. novelty-evaluator (Sonnet 4.5) - Phase 7b blind novelty
10. verdict-synthesizer (Sonnet 4.5) - Phase 8 final synthesis

Output directory: ephemeral/ceiling-experiment/
```

---

## 4. CONTEXT MANAGEMENT

### Per-Agent Context Budget

| Agent | Prompt Lines | % of Master | Token Estimate | Within Budget? |
|-------|-------------|-------------|----------------|----------------|
| team-lead | ~1,600 | 100% | ~25K tokens | YES (Opus context = 200K) |
| metaphor-agent | ~480 | 30% | ~7K tokens | YES |
| planner | ~800 | 50% | ~12K tokens | YES |
| builder | ~400 | 25% | ~6K tokens | YES |
| prog-auditor | ~320 | 20% | ~5K tokens | YES |
| PA-1 | ~130 | 8% | ~2K tokens | YES |
| PA-2 | ~130 | 8% | ~2K tokens | YES |
| comp-auditor | ~240 | 15% | ~4K tokens | YES |
| novelty-eval | ~80 | 5% | ~1.5K tokens | YES |
| verdict-synth | ~640 | 40% | ~10K tokens | YES |

**All agents are well within context limits. NO COMPACTING NEEDED.**

### Scope Narrowing Strategies

**Strategy 1: Per-file ownership**
Every worker writes exactly 1 output file. No agent reads another agent's output DURING execution (only team-lead reads outputs for gate verification). This eliminates cross-agent context accumulation.

**Strategy 2: Pre-baked CSS blocks**
Builder receives ~200 lines of ready-to-paste CSS (:root, typography, accessibility, responsive). This reduces builder context by 70-85% compared to reading all source files.

**Strategy 3: Metaphor summary vs full derivation**
Builder sees 1-paragraph metaphor summary (~50 words) instead of full 400-line derivation. Gives concept without creating anchoring bias or context overload.

**Strategy 4: Plan-derived audit checklist**
Programmatic auditor generates its OWN checklist from the build plan, not a generic compliance list. This keeps auditor focused on plan fidelity (320 lines) rather than generic spec (1,000+ lines).

**Strategy 5: Fresh-eyes isolation**
PA-1 and PA-2 see ONLY 48 PA questions + rendered page. Context is ~130 lines -- minimal. This isn't a constraint; it's the desired state for genuine perceptual reaction.

---

## 5. CHECKPOINT ARCHITECTURE

### CP-1: Metaphor Resonance Gate

**When:** After Wave 1 (metaphor-agent completes `01-metaphor-derivation.md`)
**Who verifies:** team-lead
**What gets verified:**

| Check | Pass | Fail | Action on Fail |
|-------|------|------|----------------|
| Authenticity: Does metaphor arise FROM content? | Metaphor connects to content's actual concerns | Metaphor imposed ON content (forced) | Team-lead messages metaphor-agent: "Metaphor feels forced. Re-derive with different axis." |
| Cross-domain: Is metaphor from OUTSIDE content domain? | "Geological strata" for network protocols (different domains) | "Layered architecture" for network protocols (same domain) | Team-lead messages metaphor-agent: "Same-domain metaphor. Need cross-domain." |
| Multi-dimensional: Can metaphor encode 3+ CSS properties? | "Fortified architecture" = depth (border), material (backgrounds), access (spacing) | "Fast vs slow" = only tempo (1 dimension) | Team-lead messages metaphor-agent: "Metaphor too narrow. Need 3+ dimensions." |

**BLOCKING:** Cannot proceed to Wave 2 until ALL THREE pass.
**Recovery:** metaphor-agent re-derives with explicit constraint banning failed metaphor. Max 2 re-derivation attempts before team-lead escalates (metaphor may not suit SYSTEM content -- documented risk).

---

### CP-2: Build Plan Verification

**When:** After Wave 2 (planner completes `02-build-plan.md`)
**Who verifies:** team-lead
**What gets verified:**

| Check | Pass | Fail | Action on Fail |
|-------|------|------|----------------|
| Per-category coverage: S:1+, H:1+, C:1+, D:1+, N:1+ | All 5 categories have >= 1 mechanism | Any category has 0 mechanisms | Team-lead messages planner: "Category [X] has 0 mechanisms. Add at least 1." |
| Reinforcing pairs: >= 2 pairs documented | Build plan includes mechanism interaction table with 2+ pairs | 0-1 pairs documented | Team-lead messages planner: "Need 2+ reinforcing pairs with shared semantic." |
| 4-scale table: Nav + Page + Section + Component | Build plan includes fractal table with 4 scales and CSS evidence | Missing scales | Team-lead messages planner: "Missing [scale]. Document pattern at all 4 scales." |
| Landmark list complete: header, footer, all sections named | Section map includes header + footer + content sections | Missing landmark | Team-lead messages planner: "Add footer to section map." |
| Mechanism count in Ceiling zone: 11-15 | Total mechanism count 11-15 | Count outside range | If <11: team-lead asks planner to review. If >15: acceptable (not forced). |

**BLOCKING:** Cannot proceed to Wave 3 until all checks pass.
**Recovery:** Planner revises plan. Max 2 revision requests.

---

### CP-3: Builder Self-Check (Internal Gate)

**When:** During Wave 3, BEFORE builder writes `ceiling-page.html`
**Who verifies:** builder (self-verification)
**What gets verified:**

| Check | Formula | Pass | Fail |
|-------|---------|------|------|
| Container width | `940 <= max-width <= 960` | 940-960px | < 940 or > 960: adjust max-width |
| CPL | `(content-width) / (font-size) / 0.6` | 45-80 | Increase padding or font-size |
| Token compliance | `var() / (var() + raw) >= 0.80` | >= 80% | Replace raw values with tokens |
| Landmark presence | Header, footer, all sections exist in HTML | All present | Add missing landmarks before write |
| Heading spacing ratio | `margin-top / margin-bottom >= 1.5` | >= 1.5 for all h2/h3 | Adjust margins |
| Soul compliance | 7 rules checked | 7/7 | Fix violations |
| Rhythm variation | Count unique transition types | >= 3 | Add varied transitions |
| Weight distribution | Identify focal points | >= 2 in bottom 50% | Add visual anchors to lower half |

**BLOCKING:** Builder cannot write file until ALL checks pass.
**If ANY check fails:** Builder messages team-lead with specific failure, attempts fix, re-checks.

---

### CP-4: Landmark Completeness Gate

**When:** After Wave 3 (builder writes `ceiling-page.html`), BEFORE Wave 4 audit launch
**Who verifies:** team-lead
**What gets verified:**

| Landmark | Required? | Verification Method |
|----------|-----------|-------------------|
| `<header>` | YES (if plan specifies) | Playwright: `document.querySelector('header')` exists |
| `<footer>` | YES (if plan specifies) | Playwright: `document.querySelector('footer')` exists |
| Section count | Must match plan | Playwright: `document.querySelectorAll('section').length` matches plan |
| Footer not empty | YES | Playwright: footer has visible content (not just empty element) |

**BLOCKING:** Cannot launch Wave 4 auditors until ALL landmarks verified.
**If FAILS:** Team-lead messages builder: "Footer missing from HTML. Add it before we proceed." Builder implements fix, team-lead re-verifies.
**THE Middle-tier smoking gun fix.** This gate costs 2 minutes and prevents WOULD-NOT-SHIP defects.

---

### CP-5: Audit Reconciliation

**When:** After Wave 4 (all 5 evaluation agents complete)
**Who verifies:** team-lead
**What gets verified:**

| Check | Method | Action |
|-------|--------|--------|
| PA-1 vs PA-2 agreement on PA-05 | Compare PA-05 verdicts | Agreement = high confidence. Disagreement = team-lead documents discrepancy in verdict input. |
| PA-1 vs PA-2 agreement on ship verdict | Compare ship verdicts | Both YES = PASS. Either NO = FLAG. Both NO = FAIL. |
| Programmatic audit: zero MISSING mechanisms | Check PLANNED vs DEPLOYED table | Any MISSING = severity-1 finding |
| Novelty evaluator confirmed blind | Evaluator's output includes "I did not know which page was newest" | Missing confirmation = protocol violation flag |
| Message count >= 5 substantive messages | Count SendMessage calls across all agents | < 5 = B-01 checklist item fails (communication didn't happen) |

**NOT BLOCKING** for verdict -- but reconciliation results are INPUT to verdict-synthesizer.
**Team-lead documents:** All agreements, disagreements, and flags in a reconciliation note passed to verdict-synthesizer.

---

## 6. ISOLATION RULES

### The Isolation Matrix (MUST / MAY / NOT)

| Agent | Soul | Catalog Full | Mech Names | Build Plan | Metaphor Full | Metaphor Summary | Tier Model | Pattern Table | PA Results | Novelty | Prior Results | Success Criteria | Tokens | Guardrails | Pre-Baked CSS |
|-------|------|-------------|------------|-----------|---------------|-----------------|------------|--------------|-----------|---------|--------------|-----------------|--------|-----------|--------------|
| **team-lead** | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST |
| **metaphor-agent** | MUST | NOT | MAY | NOT | N/A | N/A | NOT | NOT | NOT | NOT | NOT | NOT | NOT | MAY | NOT |
| **planner** | MUST | MUST | MUST | N/A | MUST | N/A | NOT | MUST | NOT | NOT | NOT | NOT | MAY | MUST | NOT |
| **builder** | MUST | NOT | MAY | MUST | NOT | MAY | NOT | MAY | NOT | NOT | NOT | NOT | MUST | MUST | MUST |
| **prog-auditor** | MUST | NOT | NOT | MUST | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | MAY | MUST | NOT |
| **PA-1** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT | NOT |
| **PA-2** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT | NOT |
| **comp-auditor** | MUST | MAY | MAY | NOT | NOT | NOT | NOT | MAY | NOT | NOT | NOT | NOT | NOT | NOT | NOT |
| **nov-evaluator** | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT | NOT | NOT | NOT |
| **verdict-synth** | MAY | MAY | MAY | MAY | MAY | MAY | MUST | MAY | MUST | MUST | MAY | MUST | MAY | MUST | MAY |

### Per-Rule Isolation Rationale

#### Rule 1: Builder MUST NOT see Full Mechanism Catalog
**What it prevents:** Mechanism shopping -- builder browses catalog and substitutes mechanisms instead of implementing plan.
**Evidence:** Middle builder saw only mechanism names from plan, produced novel border-weight gradient composition. If builder had seen full catalog, it would likely copy example CSS patterns instead of deriving content-specific progression.
**Escape hatch:** Builder MAY message planner for clarification on specific mechanism implementation.

#### Rule 2: PA-1 and PA-2 MUST NOT see ANYTHING except PA questions + rendered page
**What it prevents:** Confirmation bias. If PA knows "this should have 12 mechanisms," it counts mechanisms instead of evaluating perceptual coherence. If PA knows "this uses geological metaphor," it rationalizes all choices through that lens.
**Evidence:** Middle fresh-eyes PA caught missing footer ("page just stops"). Context-loaded auditor would rationalize as "intentional negative space."
**No escape hatch.** PA isolation is NON-NEGOTIABLE.

#### Rule 3: Novelty evaluator MUST NOT see page labels, hypothesis, or ANY context
**What it prevents:** Framing effect. "We expect X to be more novel" causes evaluator to see novelty where it may not exist.
**Evidence:** Adversarial review flagged single-evaluator novelty assessment in Middle as methodologically weak. Blind protocol eliminates this.
**No escape hatch.** Blind evaluation integrity is NON-NEGOTIABLE.

#### Rule 4: Metaphor-agent MUST NOT see mechanism catalog details
**What it prevents:** Mechanism-first thinking. If metaphor-agent knows "we have border-weight gradient," it derives metaphors that MAP ONTO that mechanism (geological stratification = layers = border-weight) instead of deriving metaphors from content TENSIONS.
**Evidence:** "Sample 2-4 mechanisms" was THE limiting spec because it created mechanism-first thinking. Same principle applies to metaphor derivation.
**Limited escape:** Metaphor-agent MAY see category names (S/H/C/D/N) to verify metaphor can address all 5 categories.

#### Rule 5: Builder MUST NOT see full metaphor derivation
**What it prevents:** Continuation bias. Builder reads 400-line derivation ("geological stratification: bedrock → sediment → surface") and implements LITERALLY (dark brown for bedrock, tan for sediment) instead of abstractly using tokens.
**Evidence:** Two-instance pattern validated in Middle. Separate instances = fresh perspective.
**Escape hatch:** Builder sees 1-paragraph metaphor summary for concept without 400-line derivation.

#### Rule 6: Planner MUST NOT see PA results or evaluation criteria
**What it prevents:** Goal-driven selection. If planner knows "PA-05b requires >= 2.0x padding range ratio," planner sets padding to hit exactly 2.0x instead of selecting for metaphor expression.
**Evidence:** Teaching-to-the-test produces technically-passing but constraint-shaped output.
**No escape hatch.** Planner selects for metaphor fit, not PA scores.

#### Rule 7: Comparative auditor MUST NOT know which page is Ceiling
**What it prevents:** Confirmation bias. "Page A is the new one, it should be better" causes auditor to see improvements where there may be none.
**Evidence:** Standard blind comparison methodology.
**Implementation:** Team-lead creates randomized labels (Page A / Page B) with mapping stored privately.

---

## 7. FILE ARCHITECTURE

### Expected Output Files

| File | Agent | Phase | Content |
|------|-------|-------|---------|
| `01-metaphor-derivation.md` | metaphor-agent | 1-3 | Multi-axis questioning, tension derivation, metaphor collapse, semantic dimensions |
| `02-build-plan.md` | planner | 4 | Mechanism table, section map, CSS specs, reinforcing pairs, 4-scale table, builder blocks |
| `ceiling-page.html` | builder | 5 | Complete HTML/CSS implementation |
| `03-programmatic-audit.md` | prog-auditor | 6a | PLANNED vs DEPLOYED vs MISSING, soul 7/7, container, CPL, tokens, heading ratios |
| `04a-perceptual-audit.md` | PA-1 | 6b | 48 PA questions, PA-05 sub-criteria, ship verdict, first impressions |
| `04b-perceptual-audit.md` | PA-2 | 6b | Same structure as 04a (independent assessment) |
| `05-comparison-report.md` | comp-auditor | 7a | >= 3 specific perceptual improvements, structural comparison |
| `06-novelty-assessment.md` | novelty-eval | 7b | D3.1, D3.2, D3.3, blind confirmation |
| `07-VERDICT.md` | verdict-synth | 8 | 11 success criteria with margins, PA reconciliation, adversarial self-check |

### Output Directory

All files written to: `ephemeral/ceiling-experiment/`

### Input Files Required

The team-lead must ensure these input files are accessible:

| File | Purpose | Used By |
|------|---------|---------|
| SYSTEM documentation content | Content to be built as Ceiling page | metaphor-agent, planner, builder |
| Middle experiment HTML | Comparison baseline | comp-auditor, novelty-evaluator |
| Phase D Variant B HTML | Third page for blind novelty | novelty-evaluator |
| mechanism-catalog.md | Full 18-mechanism catalog | planner |
| tokens.css | Design token reference | planner, builder |
| prohibitions.md | Soul constraints | metaphor-agent, planner, builder, prog-auditor |
| perceptual-auditing SKILL.md (questions only) | 48 PA questions | PA-1, PA-2 |

---

## 8. TIMING ESTIMATES

### Per-Wave Timing

| Wave | Duration | Agents Active | Bottleneck |
|------|----------|--------------|------------|
| Wave 1 | 10-15 min | metaphor-agent + team-lead | Metaphor derivation (creative, sequential) |
| CP-1 | 2-3 min | team-lead | Resonance gate verification |
| Wave 2 | 8-12 min | planner + team-lead | Mechanism selection + plan writing |
| CP-2 | 2-3 min | team-lead | Plan verification |
| Wave 3 | 10-15 min | builder + http-server + team-lead | HTML/CSS implementation + self-check |
| CP-3+4 | 3-5 min | team-lead | Self-check + landmark gate |
| Wave 4 | 8-12 min | 5 evaluators (parallel) + team-lead | Longest evaluator (PA-1 or PA-2 at ~10 min) |
| CP-5 | 3-5 min | team-lead | Reconciliation |
| Wave 5 | 5-8 min | verdict-synthesizer | Synthesis + adversarial self-check |
| **TOTAL** | **55-80 min** | | |

**Buffer for messaging overhead:** +10-20 min
**Total with buffer:** 65-100 min

**This matches the recalibrated estimate (60-100 min) and is well below the old sequential model (150-220 min).**

---

## 9. RISK MITIGATIONS

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Metaphor feels forced on SYSTEM content | MEDIUM | HIGH | Same content first; if strained, run Ceiling-B with abstract content |
| Builder misses structural elements | LOW (gate prevents) | CRITICAL | Landmark completeness gate CP-4 (costs 2 min, prevents WOULD-NOT-SHIP) |
| Metronomic rhythm despite metaphor | LOW (skill enriched) | MODERATE | 3-transition minimum in skill + builder self-check |
| Metaphor overrides container width | LOW (17 enforcement locations) | CRITICAL | 940-960px NON-NEGOTIABLE at 3+ locations in prompt |
| Single-evaluator bias | LOW (dual PA) | MODERATE | PA-1 + PA-2 independent evaluation + reconciliation |
| Agents don't actually message | MEDIUM | HIGH | Team-lead checks message count at CP-5; if < 5, B-01 fails |
| Builder doesn't understand mechanism names | LOW (SendMessage enabled) | MODERATE | Builder can ask planner; planner can send proactive guidance |
| Token compliance failure repeats | LOW (self-check gate) | MODERATE | Builder self-check with var() scan before file write |
| Playwright contention (4+ concurrent) | MEDIUM | MODERATE | Sequential Playwright for auditors; PA-1 and PA-2 take screenshots first, then prog-auditor uses Playwright |
| Context explosion from too many messages | LOW (anti-spam rules) | MODERATE | Per-agent message caps; team-lead monitors total |

---

## END TEAM TOPOLOGY

**This document defines the complete team architecture for the Ceiling experiment. A fresh Claude instance with this document can:**

1. Create the team (12 agents, 3 Opus + 9 Sonnet)
2. Create tasks with correct blocking dependencies
3. Spawn agents in 5 waves
4. Enforce 5 checkpoints with clear pass/fail criteria
5. Maintain information isolation with per-rule rationale
6. Enable checkpoint-based messaging without spam
7. Collect 9 output files in correct sequence
8. Deliver a verdict within 65-100 minutes

**Key architectural decisions:**
- Flat topology with messaging (validated topology + corrected protocol)
- Per-file ownership (zero contention, confirmed 6+ teams)
- Checkpoint-based communication (not free-form, not file-only)
- Dual PA with reconciliation (inter-rater reliability)
- Blind novelty evaluation (eliminates confirmation bias)
- Builder self-check before file write (shifts quality detection LEFT)
- Landmark completeness gate (THE Middle-tier fix)
