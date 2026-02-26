# CEILING-TIER MASTER EXECUTION PROMPT

**Version:** 1.0
**Date:** 2026-02-16
**Purpose:** Complete, self-contained instructions for a FRESH Claude instance to execute the Ceiling-tier design experiment
**Estimated execution time:** 65-100 minutes (parallel agent model)

---

## SECTION 0: CONVICTION

```
===============================================================
THE DIFFERENCE BETWEEN CEILING AND MIDDLE IS NOT COMPLEXITY.
IT IS CONVICTION.
===============================================================
```

A Middle page applies mechanisms to content.
A Ceiling page transforms content through a metaphor.

The mechanisms are the same. The tokens are the same. The difference is that in a Ceiling page, if you asked "why is this section structured this way?" the answer would begin with the metaphor, not with the checklist.

Your metaphor is not a label. It is the load-bearing structure.

If the metaphor collapsed, the page should collapse with it. If the metaphor changed, the page structure should change with it. Test every structural decision against this: "Does this serve the metaphor, or does this serve the checklist?" When the answer is "checklist," reconsider.

**This page should have a point of view.**

Not "here is documentation, arranged with mechanisms." But "this content IS [your metaphor], and the page structure EMBODIES that metaphor at every scale."

What follows are specifications, guardrails, and binary rules. These PREVENT failure. They do not PRODUCE excellence. Excellence comes from conviction: the metaphor as load-bearing structure.

---

## SECTION 1: MISSION AND CONTEXT

### 1.1 What You Are Building

A single HTML documentation page at **Ceiling tier** -- the tier that proves compositional fluency is encodable through metaphor-driven derivation. This page will be compared directly against the Middle-tier page built from the same content.

**Tier definition:**
| Property | Ceiling |
|----------|---------|
| Mechanisms | 12-15 (natural landing, NOT a target) |
| CSS lines | 700-1000 |
| Build time | 65-100 min (parallel agents) |
| Selection logic | Metaphor-driven multi-channel coherence |
| Interaction pattern | REINFORCING (2+ mechanisms encode same semantic) |
| Scales | 4 (Navigation + Page + Section + Component) |
| Transition types | 3+ (smooth, bridge, breathing) |
| Metaphor | REQUIRED (full Phase 1-3 pipeline) |

**The thesis:** Can a design system's compositional vocabulary produce emergent coherence -- the feeling that every element on a page is participating in the same conversation -- through a systematic pipeline?

### 1.2 Content Source

Use the SAME content as the Middle-tier experiment. This enables direct comparison.

**Source file:** `extractions/infrastructure/004-system-remote-mac.md`
**Domain:** Infrastructure / Mac automation / AI agent systems
**Word count:** 1,184 words

**Structural elements:**
- 12+ prose paragraphs
- 9 code blocks (bash + TypeScript)
- 3 data tables (Features, Threat Model, Security comparison)
- 3 step sequences (Desktop App, CLI, Hardening)
- 1 ASCII architecture diagram (Brain/Tunnel/Body)

### 1.3 Reference Files on Disk

All agents have filesystem access. Key paths:

| File | Purpose |
|------|---------|
| `extractions/infrastructure/004-system-remote-mac.md` | Content to build |
| `~/.claude/skills/tension-composition/SKILL.md` | Build pipeline (1,878 lines) |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | PA protocol (774 lines) |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 18 mechanisms with categories |
| `design-system/compositional-core/vocabulary/tokens.css` | 65 design tokens |
| `design-system/compositional-core/identity/prohibitions.md` | 22 prohibitions (soul) |
| `design-system/compositional-core/guidelines/semantic-rules.md` | 3-Question Test + semantic gaps |
| `ephemeral/middle-tier-experiment/middle-tier-page.html` | Middle-tier baseline for comparison |
| `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html` | Phase D Variant B (blind novelty third page) |
| `design-system/validated-explorations/combination/CD-006-pilot-migration.html` | Crown jewel (39/40, quality reference for planner ONLY) |
| `design-system/validated-explorations/density/DD-006-fractal.html` | Crown jewel (fractal reference for planner ONLY) |

### 1.4 Output Directory

All files written to: `ephemeral/ceiling-experiment/`

---

## SECTION 2: TEAM TOPOLOGY

### 2.1 Team Overview

**Total agents:** 12 (1 team-lead + 11 workers)
**Model split:** 3 Opus 4.6 (creative/orchestration) + 9 Sonnet 4.5 (execution)
**Topology:** Flat file-bus with checkpoint-based messaging
**Per-file ownership:** Every worker writes exactly 1 output file (zero contention)

### 2.2 Agent Roster

#### TEAM-LEAD (Opus 4.6)
- **Role:** Orchestration, gate verification, PA reconciliation, messaging hub
- **Reads:** All files (master prompt + all agent outputs as they appear)
- **Writes:** No deliverable file (coordination only)
- **Tools:** Read, Write, Edit, Bash, SendMessage, Playwright (for landmark verification)
- **Context strategy:** Thin pattern -- verify file existence and structure markers, read ONLY gate verification results, audit summaries, and verdict. Do NOT read full intermediate outputs.

#### METAPHOR-AGENT (Opus 4.6)
- **Role:** Phases 1-3: Multi-axis questioning, tension derivation, metaphor collapse
- **Reads:** Content file, soul constraints, mechanism CATEGORY NAMES ONLY (S/H/C/D/N -- no mechanism details)
- **Writes:** `01-metaphor-derivation.md`
- **Tools:** Read, Write
- **MUST NOT see:** Full mechanism catalog, build plans, PA questions, prior results
- **Key instruction:** INVOKE `~/.claude/skills/tension-composition/SKILL.md` Phases 1-3. Derive a metaphor that creates STRUCTURAL OBLIGATIONS. Test: "If the metaphor changed, would the structure have to change?" If no, the metaphor is decorative -- go deeper. Generate 3 candidates, score each on structural depth / tension resonance / mechanism affinity / semantic surplus (each 0-3, threshold >= 8/12 to commit). Develop top scorer's structural mapping in detail. Lock in only after detailed mapping survives scrutiny.

#### PLANNER (Opus 4.6)
- **Role:** Phase 4: Mechanism selection through metaphor lens, build plan creation
- **Reads:** `01-metaphor-derivation.md`, full mechanism catalog, pattern table, soul constraints, guardrails, tokens.css, CD-006 and DD-006 (for quality calibration ONLY -- do not copy patterns)
- **Writes:** `02-build-plan.md`
- **Tools:** Read, Write
- **MUST NOT see:** PA results, evaluation criteria, prior scores
- **Key instruction:** Select mechanisms THROUGH the metaphor. For each mechanism, explain how the metaphor DEMANDS it. If the mechanism would exist regardless of the metaphor, it is a Middle mechanism, not a Ceiling mechanism. Produce: SECTION MAP, MECHANISM TABLE (with per-mechanism metaphor justification), TRANSITION TABLE (3+ types), REINFORCING PAIRS (2+ pairs with shared semantic identified), 4-SCALE FRACTAL TABLE (Nav + Page + Section + Component with CSS evidence), BUILDER BLOCKS (pre-baked CSS). Also produce a STRUCTURAL OBLIGATION TABLE showing what the metaphor DEMANDS of each section.

#### BUILDER (Sonnet 4.5)
- **Role:** Phase 5: HTML/CSS implementation from build plan
- **Reads:** `02-build-plan.md`, soul constraints, guardrails, tokens.css, 1-paragraph metaphor summary (NOT full derivation)
- **Writes:** `ceiling-page.html`
- **Tools:** Read, Write, SendMessage (to planner for clarifications)
- **MUST NOT see:** Full mechanism catalog, full metaphor derivation, evaluation criteria, CD-006/DD-006
- **Key instruction:** Implement the plan. If something is unclear, ASK the planner via SendMessage. An asked question produces a better page than a guessed answer. Run self-check BEFORE writing file (Section 4.8). Invent 2-3 composite components for THIS content that do not exist in any library. Identify 3-5 DESIGNED MOMENTS where 2+ mechanisms create visible local impact together.

#### HTTP-SERVER (Sonnet 4.5)
- **Role:** Utility: serve HTML files via HTTP for Playwright auditing
- **Reads:** HTML files to serve
- **Writes:** No deliverable file
- **Tools:** Bash
- **Key instruction:** Start a simple HTTP server (e.g., `python3 -m http.server 8080`) in the project root. Keep running until all audits complete.

#### PROGRAMMATIC-AUDITOR (Sonnet 4.5)
- **Role:** Phase 6a: Binary compliance audit generated FROM build plan
- **Reads:** `02-build-plan.md`, `ceiling-page.html`, soul constraints, guardrails, tokens.css
- **Writes:** `03-programmatic-audit.md`
- **Tools:** Read, Write, Bash, Playwright
- **MUST NOT see:** Metaphor, PA questions, evaluation criteria
- **Key instruction:** Read the build plan FIRST. Generate a PLANNED vs DEPLOYED vs MISSING checklist from the plan. Then audit the HTML against it. Check: soul 8/8, container 940-960px, CPL 45-80, token compliance >= 80%, heading spacing ratio >= 1.5:1, landmark completeness, rhythm variation (3+ transition types), all planned mechanisms present.

#### PERCEPTUAL-AUDITOR-1 (Sonnet 4.5)
- **Role:** Phase 6b: Fresh-eyes perceptual evaluation (ZERO context)
- **Reads:** ONLY the PA questions from `~/.claude/skills/perceptual-auditing/SKILL.md` + rendered page via Playwright
- **Writes:** `04a-perceptual-audit.md`
- **Tools:** Read, Write, Playwright
- **MUST NOT see:** ANYTHING else. No design system, no mechanisms, no metaphor, no tier model, no build plan, no soul constraints, no prior experiments. Zero context is NON-NEGOTIABLE.
- **Key instruction:** Navigate to `http://localhost:8080/ephemeral/ceiling-experiment/ceiling-page.html`. Take screenshots at 1440px and 768px. Apply all 48 PA questions. Pay special attention to PA-05 (DESIGNED sub-criteria) and PA-17/PA-41 (rhythm). Report first impressions, ship verdict, and critical findings.

#### PERCEPTUAL-AUDITOR-2 (Sonnet 4.5)
- **Role:** Phase 6b: Independent duplicate fresh-eyes PA
- **Reads:** IDENTICAL to PA-1 (same inputs, independent evaluation)
- **Writes:** `04b-perceptual-audit.md`
- **Tools:** Read, Write, Playwright
- **Isolation:** Same as PA-1. PA-1 and PA-2 MUST NOT see each other's outputs until BOTH complete.

#### COMPARATIVE-AUDITOR (Sonnet 4.5)
- **Role:** Phase 7a: Ceiling vs Middle comparison
- **Reads:** Both HTML pages (`ceiling-page.html` + `middle-tier-page.html`), comparison criteria, soul constraints
- **Writes:** `05-comparison-report.md`
- **Tools:** Read, Write, Playwright
- **Key instruction:** Present pages as "Page A" and "Page B" (randomized, NOT labeled as Ceiling/Middle). Identify >= 3 specific perceptual improvements between them. Do NOT know which is "supposed to be better."

#### NOVELTY-EVALUATOR (Sonnet 4.5)
- **Role:** Phase 7b: Blind 3-page novelty evaluation
- **Reads:** 3 UNLABELED HTML pages in RANDOMIZED order, novelty assessment criteria (D3.1/D3.2/D3.3)
- **Writes:** `06-novelty-assessment.md`
- **Tools:** Read, Write, Playwright
- **MUST NOT see:** Page labels, hypothesis, prior results, mechanism counts, build plans, metaphor. MAXIMUM isolation.
- **Key instruction:** Receive 3 pages as page-A, page-B, page-C (team-lead randomizes). Evaluate: D3.1 Structural Fingerprint (distinct sectioning?), D3.2 CSS Value Overlap (<30%?), D3.3 Mechanism Combination (unique pairings?). Score each page 0-3. Identify most novel. Only AFTER submitting blind assessment does team-lead reveal labels.

#### VERDICT-SYNTHESIZER (Sonnet 4.5)
- **Role:** Phase 8: Final synthesis
- **Reads:** ALL audit outputs (03 through 06), success criteria, tier model
- **Writes:** `07-VERDICT.md`
- **Tools:** Read, Write
- **Key instruction:** Reconcile PA disagreements. Report pass MARGINS for all criteria (not just pass/fail). Run adversarial self-check: identify the 3 strongest challenges to your own verdict. Classify all defects by severity (1=WOULD-NOT-SHIP, 2=significant, 3=minor). Final verdict: SUCCESS / PARTIAL SUCCESS / FAILURE with specific evidence.

### 2.3 Task Creation Sequence

Create tasks with these blocking dependencies:

```
Task 1: metaphor-agent (Opus) → 01-metaphor-derivation.md
  BLOCKS: Task 2

Task 2: planner (Opus) → 02-build-plan.md
  BLOCKED BY: Task 1
  BLOCKS: Task 3

Task 3: builder (Sonnet) → ceiling-page.html
  BLOCKED BY: Task 2
  BLOCKS: Tasks 4-8

Task 4: programmatic-auditor (Sonnet) → 03-programmatic-audit.md
Task 5: perceptual-auditor-1 (Sonnet) → 04a-perceptual-audit.md
Task 6: perceptual-auditor-2 (Sonnet) → 04b-perceptual-audit.md
Task 7: comparative-auditor (Sonnet) → 05-comparison-report.md
Task 8: novelty-evaluator (Sonnet) → 06-novelty-assessment.md
  ALL BLOCKED BY: Task 3
  ALL BLOCK: Task 9

Task 9: verdict-synthesizer (Sonnet) → 07-VERDICT.md
  BLOCKED BY: Tasks 4, 5, 6, 7, 8
```

Also spawn `http-server` alongside Task 3 (no blocking dependency, utility only).

### 2.4 Wave Architecture

```
WAVE 1 (t=0): metaphor-agent
  └── CP-1: Metaphor Resonance Gate (team-lead verifies)

WAVE 2 (t=10-15 min): planner
  └── CP-2: Build Plan Verification (team-lead verifies)

WAVE 3 (t=20-30 min): builder + http-server
  ├── CP-3: Builder Self-Check (internal)
  └── CP-4: Landmark Completeness (team-lead verifies)

WAVE 4 (t=35-50 min): ALL 5 evaluators IN PARALLEL
  └── CP-5: Audit Reconciliation (team-lead reconciles)

WAVE 5 (t=55-70 min): verdict-synthesizer
```

---

## SECTION 3: COMMUNICATION PROTOCOL

### 3.1 Core Principle

**"File-bus for structure, SendMessage for collaboration."**

Communication is NOT optional. Middle's missing footer proves isolation kills quality. Zero SendMessage = fast execution (35 min) but B+ quality with 3 defects. CD-006 WITH messaging = 39/40.

### 3.2 Four Message Types

**TYPE 1: BLOCKING-DEPENDENCY** (HIGH urgency)
- When: Agent cannot proceed without clarification
- Example: Builder to planner: "Plan says 'Footer Mirror' but Builder Blocks don't include footer CSS. Implement from Section 2 description?"
- Response: Within 1 agent turn. Stops progress until resolved.
- Max: 2 per agent per phase

**TYPE 2: QUALITY-GATE** (HIGH urgency)
- When: Severity-1 defect detected
- Example: Prog-auditor to team-lead: "Footer landmark missing. BLOCKING."
- Response: Team-lead decides fix vs proceed
- Max: 3 per phase

**TYPE 3: CLARIFICATION-REQUEST** (MEDIUM urgency)
- When: Ambiguity detected but agent CAN proceed with assumption
- Example: Builder to planner: "Transition shows BRIDGE but no background specified. Proceeding with --color-zone-breathing."
- Response: Optional. Agent proceeds with assumption if no response.
- Max: 5 per agent per phase

**TYPE 4: ANOMALY-FLAG** (LOW urgency)
- When: Unexpected condition, informational only
- Example: Prog-auditor to team-lead: "PA-05b exactly at threshold, zero margin."
- Response: None required. Team-lead logs.
- Max: 3 per agent per phase

### 3.3 Isolation Exceptions (NON-NEGOTIABLE)

These agents MUST NOT receive ANY messages:
- **Novelty evaluator:** Zero context until blind assessment complete
- **PA-1 and PA-2:** Zero context -- fresh-eyes isolation is the entire point

If builder attempts to message PA or novelty evaluator, team-lead BLOCKS the message.

### 3.4 Anti-Spam Rules

| Agent | Max Total Messages |
|-------|-------------------|
| builder | 5 |
| planner | 3 |
| prog-auditor | 3 |
| team-lead | 10 |
| PA-1, PA-2 | 0 |
| novelty-evaluator | 0 (before blind), 1 (after) |
| comparative-auditor | 1 |
| verdict-synthesizer | 2 |

**Expected total:** 10-15 messages across entire experiment.

---

## SECTION 4: BUILD PIPELINE

### 4.0 Skill Invocation

The metaphor-agent and planner INVOKE the tension-composition skill:
**`~/.claude/skills/tension-composition/SKILL.md`**

The skill defines the full Phase 0-7 pipeline. What follows are the Ceiling-specific modifications and overrides.

### 4.1 Phase 0: Content Assessment + Tier Routing

Content: `extractions/infrastructure/004-system-remote-mac.md`
Classification: STANDARD (500-3000 words), HYBRID (mixed prose + code/tables)
**Tier: CEILING** (Addition Test = NO for this content -- genuine structural tension exists in brain/tunnel/body architecture, security-vs-accessibility, local-vs-remote control)

**Route:** Full pipeline, Phases 1-7. Do NOT skip Phases 1-3.

### 4.2 Phases 1-3: Metaphor Derivation (Metaphor-Agent)

Run the full tension-composition pipeline:
- **Phase 1:** Multi-axis questioning (Core Four: FEEL/UNDERSTAND/DO/BECOME + Extended Five + Structural Triggers as content warrants)
- **Phase 2:** Tension derivation using Richness Formula (Opposition Depth x Structural Overlap x Metaphor Space Width). Select strongest genuine tension.
- **Phase 3:** Metaphor collapse using Domain Search Menu. Apply constraint scan, content resonance, emotional valence filters. Score candidates on 6 dimensions (Tension Resolution, Structural Isomorphism, Perceptual Risk, Responsive Degradation, Convergence Distance, Content-Specific Yield).

**Ceiling modification -- Metaphor evaluation criteria:**
Score each candidate 0-3 on:
1. STRUCTURAL DEPTH: Does metaphor have internal parts mapping to content at 2+ levels?
2. TENSION RESONANCE: Does metaphor capture a tension already in the content?
3. MECHANISM AFFINITY: Does metaphor suggest 3+ specific mechanisms without forcing?
4. SEMANTIC SURPLUS: Does metaphor generate more ideas than you need?

**Threshold:** Total >= 8/12 to commit. Below 8: regenerate.

**Phase 0E ENFORCED:** Do NOT read case studies, mechanism catalog details, or prior explorations during Phases 0-3. Violation invalidates the derivation.

### 4.3 Phase 3.5: Metaphor Lock-In Gate (CP-1)

**BLOCKING.** Team-lead verifies:

| Check | Pass | Fail Action |
|-------|------|-------------|
| Authenticity: metaphor arises FROM content | Connects to content's actual concerns | Re-derive with different axis |
| Cross-domain: metaphor from OUTSIDE content domain | "Geological strata" for network protocols | "Layered architecture" for network = same domain, reject |
| Multi-dimensional: 3+ CSS property encodings | Depth (border) + material (backgrounds) + access (spacing) | Too narrow, re-derive |

Max 2 re-derivation attempts. If metaphor cannot survive gate, document and proceed with strongest available.

### 4.4 Phase 4: Mechanism Selection + Build Plan (Planner)

**Per-category minimums (M1 -- MANDATORY):**

| Category | Available Mechanisms | Minimum |
|----------|---------------------|---------|
| Spatial (S) | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| Hierarchy (H) | #1 Border-Weight, #4 Spacing Compression, #11 Typographic Scale | 1+ |
| Component (C) | #2 2-Zone DNA, #9 Color Encoding, #10 Border-Left Signal, #17 Code Block | 1+ |
| Depth/Emphasis (D) | #3 Solid Offset, #7 Zone Background, #16 Drop Cap | 1+ |
| Structure/Nav (N) | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ |

**IGNORE any instruction saying "sample 2-4 mechanisms."** Read the FULL mechanism catalog. Deploy through the metaphor lens.

**Reinforcing pairs (2+ REQUIRED):**
At least 2 mechanism pairs must encode the SAME semantic dimension through DIFFERENT CSS channels. Example: border-weight (#1) + zone background (#7) both encoding "geological depth" -- weight increases AND background darkens as content deepens.

What does NOT count: two mechanisms on different content, same mechanism repeated, mechanisms encoding different semantics.

**Ceiling modification -- 4.2C Rhythm:**
3+ transition types MANDATORY (not recommended). Every section boundary uses one of:
- SMOOTH: 48px gap + 1px separator (continuation)
- BRIDGE: 64px gap + breathing zone background (topic shift)
- BREATHING: 80px gap + 3px structural border (major shift)

No two adjacent section boundaries may use identical treatment.

**Ceiling modification -- 4.7B Landmarks:**
MANDATORY completeness gate. Build plan MUST include: header, footer, all named content sections. The planner MUST specify footer treatment explicitly.

**Ceiling modification -- 4-Scale Fractal Table:**
Build plan MUST include a table showing the metaphor's expression at 4 scales:

| Scale | What Pattern | CSS Evidence |
|-------|-------------|-------------|
| Navigation | [how header/TOC echoes metaphor] | [specific CSS] |
| Page | [how section rhythm echoes metaphor] | [specific CSS] |
| Section | [how internal section structure echoes metaphor] | [specific CSS] |
| Component | [how individual elements echo metaphor] | [specific CSS] |

### 4.5 Phase 4.8: Designed Moments

The planner MUST identify 3-5 DESIGNED MOMENTS in the build plan -- specific locations where 2+ mechanisms create visible local impact together. For each:
- WHERE on the page (section + element)
- WHICH mechanisms intersect
- WHAT the reader sees (the perceptual effect)
- WHY the metaphor demands this intersection here

### 4.6 Phase 4.9: Token Compliance Target

**Formula:** `(var() count) / (var() + raw value count) >= 0.80`
**Target:** >= 80% (Middle achieved 66.5% -- this was the #2 defect)

**Approved raw value exceptions:**
- `border-width: 1px | 3px | 4px` (discrete system values)
- `line-height` unitless values (1.5, 1.7)
- `z-index` layering values
- `calc()` expressions using tokens
- Sub-pixel refinements (0.5px)

### 4.7 Phase 5: Build (Builder)

Builder implements from the build plan. Key rules:

**Container width 940-960px -- NON-NEGOTIABLE:**
```css
.page-container {
  max-width: 960px;
  margin: 0 auto;
}
```
Metaphor shapes INTERNAL experience, never EXTERNAL width. If the metaphor wants narrowing, use internal padding:
```css
.content-core {
  padding: 0 120px; /* 720px effective, container stays 960px */
}
```

**CPL 45-80 characters:**
Formula: `(content-width-px) / (font-size-px) / 0.6`
Example: (960 - 64) / 18 / 0.6 = 83 (FAIL) → increase padding or font-size.

**Builder self-check (CP-3) -- BEFORE writing file:**

| Check | Formula/Method | Pass |
|-------|---------------|------|
| Container width | max-width value | 940-960px |
| CPL | (content-width) / (font-size) / 0.6 | 45-80 |
| Token compliance | var() / (var() + raw) | >= 80% |
| Landmarks | header + footer + all sections present | All present |
| Heading spacing | margin-top / margin-bottom | >= 1.5:1 for all h2/h3 |
| Soul compliance | 8 checks (see Section 6) | 8/8 |
| Rhythm variation | count unique transition types | >= 3 |
| Weight distribution | identify focal points | >= 2 in bottom 50% |

If ANY check fails: fix before writing file. If unable to fix, message team-lead with specific failure.

### 4.8 Phase 5.5: Landmark Completeness Gate (CP-4)

**BLOCKING.** Team-lead verifies via Playwright BEFORE launching any auditors:

| Landmark | Verification |
|----------|-------------|
| `<header>` exists | `document.querySelector('header')` |
| `<footer>` exists | `document.querySelector('footer')` |
| Footer has visible content | Footer is not empty |
| Section count matches plan | `document.querySelectorAll('section').length` |

If FAILS: team-lead messages builder with specific fix request. Builder fixes. Team-lead re-verifies. THIS IS THE MIDDLE-TIER SMOKING GUN FIX.

---

## SECTION 5: MECHANISM GUIDANCE

### 5.1 Reference Catalog

**Full mechanism catalog:** `design-system/compositional-core/grammar/mechanism-catalog.md`

The planner reads the full catalog. The builder does NOT (prevents mechanism shopping). Builder receives mechanism names and 1-line descriptions from the build plan, plus SendMessage fallback to planner.

### 5.2 Ceiling-Specific Mechanism Requirements

**Reinforcing Pairs (2+ pairs):**
Two or more mechanisms applied to the SAME content, encoding the SAME semantic property, through DIFFERENT CSS channels. The planner must document each pair:
- Which mechanisms
- What shared semantic dimension
- What CSS channels (spacing + border, spacing + typography, border + color, etc.)
- Where on the page the reinforcement is visible

**Fractal Scale Depth (4 scales):**
The metaphor's expression must be visible at Navigation, Page, Section, and Component scales. Each scale has specific CSS evidence. The planner documents this in the 4-Scale Fractal Table.

**Section-Scale Internal Rhythm:**
THIS is the critical gap between Middle and Ceiling. Middle sections have UNIFORM internal structure (components are placed). Ceiling sections must have RHYTHMIC internal structure (sparse opening, dense body, sparse close). Each section should have its own micro-arc that echoes the page-level rhythm.

**3-5 Designed Moments:**
Specific visual events where mechanisms intersect to create impact. Not uniform application but strategic concentration. The question for each moment: "Where on the page will the reader pause?"

**2-3 Purpose-Built Components:**
Composite components invented for THIS content that do not exist in any library. These emerge from the metaphor: "What component does this metaphor need that doesn't exist yet?" Examples from CD-006: `.core-abstraction` (Essence callout + Code block in bordered unit), `.reasoning` (2-column comparison grid + recommendation zone). These signal "designed for this content," not "assembled from a kit."

### 5.3 Derive from Metaphor, Don't Look Up

The selection principle is 1:MANY derivation, not 1:1 lookup.

**Middle approach (lookup):** "Content has security layers → border-weight gradient"
**Ceiling approach (derivation):** "Metaphor is [X]. [X] implies depth/pressure/layering. Depth encodes through border-weight (#1) AND spacing compression (#4) AND zone backgrounds (#7) simultaneously. These 3 mechanisms express the SAME semantic through 3 CSS channels."

If a mechanism would exist regardless of the metaphor, it is not a Ceiling mechanism.

---

## SECTION 6: SOUL AND IDENTITY

### 6.1 Absolute Prohibitions (Zero Exceptions)

Reference: `design-system/compositional-core/identity/prohibitions.md`

**THE BIG 3:**
1. **`border-radius: 0`** -- ALWAYS sharp edges. This is THE #1 soul constraint.
2. **`box-shadow: none`** -- ALWAYS flat. No shadows anywhere.
3. **`filter: drop-shadow()` FORBIDDEN** -- Same principle as box-shadow.

**Additional absolutes:**
4. `opacity: 1` on all backgrounds/containers -- no semi-transparency
5. No gradient backgrounds (`linear-gradient`, `radial-gradient`)
6. No pure black `#000` or pure white `#FFF` -- use `#1A1A1A` and `#FEF9F5`
7. No cool-toned grays (`#F5F5F5`) -- warm palette only (`#FEF9F5`, `#F0EBE3`)
8. Instrument Serif ONLY for display headings -- NEVER for body text

**Soul compliance = 8/8 binary check.** Violation of ANY absolute = INVALID work.

### 6.2 Conditional Prohibitions (Documented Exceptions Only)

9. **NO 2px borders** -- Exception: OD-004 confidence encoding. If using, document: "Using 2px for [OD-004 pattern]. Exception: [ref]."
10. **NO accent borders < 4px** -- Exception: AD-F-014 progressive gradient (4px/3px/1px). If using, document.
13. **No vertical table borders** -- horizontal-only, always
17. **All h3 MUST be italic** -- no exceptions
18. **NO same-density stacking** -- Exception: intentional crescendo patterns. If using, document.

### 6.3 Design Tokens (65 tokens)

Reference: `design-system/compositional-core/vocabulary/tokens.css`

**Typography Trinity (IMMUTABLE):**
- Display: `'Instrument Serif', Georgia, serif`
- Body: `'Inter', system-ui, sans-serif`
- Mono: `'JetBrains Mono', 'SF Mono', monospace`

**Primary Colors (IMMUTABLE):**
- `--color-primary: #E83025` (Sanrok red)
- `--color-background: #FEF9F5` (warm cream)
- `--color-text: #1A1A1A` (near-black)
- `--color-border: #E0D5C5` (warm border)

**Spacing Scale (4px base, IMMUTABLE):**
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 px

**Border System (3 categories ONLY):**
- 4px: structural accent (signature callout border)
- 3px: secondary accent
- 1px: subtle dividers, data separators
- NEVER 2px (except documented exceptions above)

**Token compliance target: >= 80%.** Use `var(--token)` for ALL spacing, color, typography, and border values. Reference `tokens.css` for the full inventory.

### 6.4 Semantic Value Framework (3-Question Test)

Reference: `design-system/compositional-core/guidelines/semantic-rules.md`

For EVERY varying CSS value, answer:

**Q1: WHAT varies?** Identify the property and its range.

**Q2: WHY does it vary?** Reference one of:
- Content structure (hierarchy, section importance)
- Metaphor logic (YOUR metaphor's semantic dimensions)
- Pattern logic (CRESCENDO peaks, EXHALE sections)

NOT acceptable: "token availability" or "looked good"

**Q3: WHY THESE SPECIFIC VALUES and not adjacent ones?**
- If answer references content/metaphor/pattern → SEMANTIC (good)
- If answer references "it's on the scale" → ARBITRARY (revise)

**Ceiling requirement:** 90%+ varying values justified via metaphor logic.

---

## SECTION 7: QUALITY ASSURANCE

### 7.1 Perceptual Audit Protocol

INVOKE: `~/.claude/skills/perceptual-auditing/SKILL.md`

**Dual PA (NON-NEGOTIABLE):** Two independent zero-context auditors evaluate in parallel.

**PA Protocol:**
1. Cold look at 1440px (gut reaction, worst thing, best thing, ship verdict)
2. Cold look at 768px (same)
3. Scroll-through observations at 1440px
4. All 48 PA questions
5. PA-05 sub-criteria (4 components of DESIGNED)
6. Quantitative guardrails measurement
7. Critical findings
8. Summary assessment

**PA-05 Sub-Criteria (ALL must pass for DESIGNED):**

| Sub-criterion | What It Tests | Measurable Threshold |
|---------------|--------------|---------------------|
| PA-05a: DESIGNED not formatted | Intentional composition vs assembled | >= 2 non-default layout elements |
| PA-05b: COHERENT not mixed | One designer vs vocabulary from multiple systems | Padding range ratio >= 2.0x |
| PA-05c: PROPORTIONATE not crowded | Spatial balance considered | Blur test reveals clear hierarchy |
| PA-05d: POLISHED not cleanup needed | Execution quality | >= 15% compositional CSS |

**Ceiling-critical questions (treat as severity-1 if fail):**
- PA-17: Is there visual rhythm, or metronomic? MUST demonstrate rhythm variation.
- PA-41: Patterns repeated 4+ times without variation? MUST avoid mechanical repetition.

### 7.2 Dual PA Reconciliation (Team-Lead)

After BOTH PA-1 and PA-2 complete:

**Agreement:** Accept as HIGH CONFIDENCE finding.
**Minor disagreement (<=1 severity point):** Average or synthesize.
**Major disagreement (contradictory findings):** Team-lead arbitrates with SCREENSHOT EVIDENCE.

**Pessimistic rule (PA-01 through PA-05):** If one says FAIL, verdict is FAIL.
**Optimistic rule (feature presence):** If one counted more elements, use higher count.

### 7.3 Blind Novelty Evaluation

**3 unlabeled pages in randomized order:**
- `page-A.html` (random)
- `page-B.html` (random)
- `page-C.html` (random)

Actual contents: Ceiling, Middle, Phase D Variant B. Team-lead maps and randomizes BEFORE giving to evaluator.

**3 Novelty Signals:**
- D3.1: Structural Fingerprint (distinct sectioning pattern?)
- D3.2: CSS Value Overlap (<30% with both references?)
- D3.3: Mechanism Combination (2+ unique pairings?)

**Scoring:** 3/3 = STRONGLY NOVEL, 2/3 = NOVEL, 1/3 = SOMEWHAT NOVEL, 0/3 = NOT NOVEL

Label reveal ONLY after blind assessment submitted.

### 7.4 Fresh-Eyes Principle (NON-NEGOTIABLE)

PA-1 and PA-2 see NOTHING except PA questions + rendered page.

Why: Fresh-eyes auditors find issues context-loaded agents miss. Middle's missing footer: PA caught it immediately. Context-loaded planner specified it but assumed implementation. Context-loaded builder saw plan but didn't implement.

Zero-context agents report WHAT THEY SEE, not what they think was intended.

---

## SECTION 8: SUCCESS CRITERIA

### 8.1 Binary Thresholds

| Criterion | Threshold | Priority |
|-----------|-----------|----------|
| Container width | 940-960px | CRITICAL (auto-fail) |
| Soul compliance | 8/8 | CRITICAL (auto-fail) |
| PA-05 DESIGNED | 4/4 sub-criteria | CRITICAL |
| D3 Novelty | >= 2/3 NOVEL | HIGH |
| Better than Middle | >= 3 specific perceptual improvements | HIGH |
| Metaphor expression | Observed by PA (without knowing metaphor exists) | HIGH |
| Token compliance | >= 80% | MEDIUM |
| CPL | 45-80 | MEDIUM |
| Heading spacing | >= 1.5:1 all headings | MEDIUM |
| Landmark completeness | Header + footer + all sections | CRITICAL |
| No severity-1 findings | Zero WOULD-NOT-SHIP defects | CRITICAL |
| Inter-agent messaging | >= 5 substantive messages (team-lead verified) | HIGH |

### 8.2 Qualitative Judgment

Beyond binary thresholds, the verdict-synthesizer assesses:

**"Does this page have a point of view?"**
- Not "does it pass all checks" but "does it ARGUE for something through its structure?"
- The Middle page is the B+ baseline. Ceiling should feel like the page could not exist in any other form -- that if the metaphor changed, the structure would have to change.

**Comparison framework:**
- vs Middle: Same content, higher compositional fluency. >= 3 specific perceptual improvements.
- vs DD-006: 85-90% of DD-006 richness is the target range.
- vs CD-006: NOT the benchmark (Flagship tier, 900+ minutes). But the QUALITY SIGNAL from CD-006 informs what "felt through" means.

### 8.3 Pass Margins

The verdict MUST report pass margins, not just pass/fail:
- "PA-05b: 2.5x (threshold 2.0x, margin +0.5x)"
- "Token compliance: 84% (threshold 80%, margin +4%)"
- "Container: 960px (threshold 940-960, at maximum)"

---

## SECTION 9: ANTI-PATTERNS

### 9.1 From Retrospective Evidence

| Anti-Pattern | Evidence | Prevention |
|--------------|----------|-----------|
| Zero SendMessage = quality cost | Middle: 3 defects, missing footer | Communication protocol (Section 3) |
| Binary > judgment (100% vs 0%) | Middle: 7/7 soul, 0/3 judgment rules | ALL critical rules have binary formulas |
| Missing footer = smoking gun | Builder couldn't ask planner | Builder has SendMessage + CP-4 landmark gate |
| Metronomic rhythm | PA-17/PA-41 flagged "consistent but monotonous" | 3-transition minimum, no identical adjacent transitions |
| Container width violation | Phase D: 4/5 pages failed | 940-960px at 3 locations in prompt |
| Token compliance failure | Middle: 66.5% vs 80% target | Builder self-check with var() scan |
| "Professionally stiff" | Middle achieved DESIGNED but not "felt through" | Metaphor derivation + designed moments + purpose-built components |
| Mechanism shopping | Builder browses catalog, substitutes | Builder MUST NOT see full catalog |
| Template matching | Library access before metaphor | Phase 0E library prohibition |

### 9.2 Process Anti-Patterns

- **Status update messages:** File existence IS the status signal. Don't send "working on Section 3."
- **Broadcast messages:** Expensive, creates context accumulation. Use targeted messages.
- **PA contamination:** Giving PA "context for calibration" defeats the entire purpose.
- **Novelty label leak:** File names like "ceiling-page.html" reveal identity. Use neutral labels for blind evaluation.
- **Reconciliation bias:** Team-lead arbitrates based on SCREENSHOT EVIDENCE, not "what we wanted."

---

## SECTION 10: CHECKPOINT ARCHITECTURE

### CP-1: Metaphor Resonance Gate

**When:** After metaphor-agent completes `01-metaphor-derivation.md`
**Verifier:** team-lead
**Checks:** Authenticity (arises from content), Cross-domain (outside content domain), Multi-dimensional (3+ CSS channels)
**BLOCKING:** Cannot proceed to planner until ALL THREE pass.
**Recovery:** Re-derive (max 2 attempts).

### CP-2: Build Plan Verification

**When:** After planner completes `02-build-plan.md`
**Verifier:** team-lead
**Checks:**
- Per-category coverage: S:1+, H:1+, C:1+, D:1+, N:1+
- Reinforcing pairs: >= 2 documented with shared semantic
- 4-scale table: Nav + Page + Section + Component with CSS evidence
- Landmark list: header + footer + all content sections
- Mechanism count in 12-15 zone (advisory, not blocking if slightly outside)

**BLOCKING:** Cannot proceed to builder until all checks pass.
**Recovery:** Planner revises (max 2 revision requests).

### CP-3: Builder Self-Check (Internal)

**When:** During build, BEFORE file write
**Verifier:** builder (self)
**Checks:** Container width, CPL, token compliance, landmarks, heading spacing, soul, rhythm, weight distribution (see Section 4.7)
**BLOCKING:** Cannot write file until ALL pass.

### CP-4: Landmark Completeness Gate

**When:** After builder writes `ceiling-page.html`, BEFORE audit launch
**Verifier:** team-lead via Playwright
**Checks:** Header exists, footer exists and has visible content, section count matches plan
**BLOCKING:** Cannot launch Wave 4 until ALL verified.
**Recovery:** Team-lead messages builder, builder fixes, team-lead re-verifies.

### CP-5: Audit Reconciliation

**When:** After ALL 5 evaluation agents complete
**Verifier:** team-lead
**Checks:**
- PA-1 vs PA-2 agreement on PA-05
- PA-1 vs PA-2 agreement on ship verdict
- Programmatic audit: zero MISSING mechanisms
- Novelty evaluator confirmed blind assessment

**NOT BLOCKING** for verdict -- but reconciliation results are INPUT to verdict-synthesizer.

---

## SECTION 11: PER-AGENT PROMPT GUIDANCE

### 11.1 Isolation Matrix (MUST / MAY / NOT)

| Agent | Soul | Full Catalog | Mech Names | Build Plan | Full Metaphor | Metaphor Summary | PA Results | Tokens | Guardrails |
|-------|------|-------------|-----------|-----------|--------------|-----------------|-----------|--------|-----------|
| team-lead | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST | MUST |
| metaphor-agent | MUST | NOT | MAY (categories) | NOT | N/A | N/A | NOT | NOT | MAY |
| planner | MUST | MUST | MUST | N/A | MUST | N/A | NOT | MUST | MUST |
| builder | MUST | NOT | MAY (from plan) | MUST | NOT | MAY (1 para) | NOT | MUST | MUST |
| prog-auditor | MUST | NOT | NOT | MUST | NOT | NOT | NOT | MAY | MUST |
| PA-1 | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT |
| PA-2 | NOT | NOT | NOT | NOT | NOT | NOT | N/A | NOT | NOT |
| comp-auditor | MUST | MAY | MAY | NOT | NOT | NOT | NOT | NOT | NOT |
| nov-evaluator | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT | NOT |
| verdict-synth | MAY | MAY | MAY | MAY | MAY | MAY | MUST | MAY | MUST |

### 11.2 Key Isolation Rationale

**Builder MUST NOT see full mechanism catalog:** Prevents mechanism shopping. Builder implements the plan, not the catalog.

**Builder MUST NOT see full metaphor derivation:** Prevents continuation bias (literal implementation of 400-line derivation instead of abstract compositional expression). Builder sees 1-paragraph summary.

**PA-1/PA-2 MUST NOT see ANYTHING:** Fresh-eyes principle. If PA knows "this should have 12 mechanisms," it counts mechanisms instead of evaluating coherence. Middle's missing footer was caught ONLY by zero-context PA.

**Novelty evaluator MUST NOT see page labels:** Blind protocol. Knowledge of "which page is new" causes evaluator to see differences rather than objectively assess uniqueness.

**Planner MUST NOT see evaluation criteria:** Prevents teaching-to-the-test. Planner selects for metaphor fit, not PA scores.

### 11.3 Per-Agent MUST/MAY/MUST-NOT Cheat Sheet

**METAPHOR-AGENT:**
- MUST: Derive metaphor through full Phase 1-3 pipeline
- MUST: Score 3 candidates against 4 evaluation criteria (>= 8/12)
- MUST: Produce structural obligation table
- MUST NOT: Read mechanism catalog details, case studies, or prior explorations
- MAY: See mechanism category names (S/H/C/D/N) to verify metaphor breadth

**PLANNER:**
- MUST: Select mechanisms THROUGH metaphor (not by content-feature lookup)
- MUST: Document reinforcing pairs (2+) with shared semantic
- MUST: Create 4-scale fractal table with CSS evidence
- MUST: Identify 3-5 designed moments
- MUST: Specify footer treatment explicitly
- MUST NOT: See PA questions, evaluation criteria, or prior scores
- MAY: Reference CD-006/DD-006 for quality calibration (ambition, not patterns)

**BUILDER:**
- MUST: Implement from build plan
- MUST: Run self-check before file write (8 checks)
- MUST: Use SendMessage for unresolved ambiguities
- MUST: Invent 2-3 purpose-built composite components
- MUST NOT: See full mechanism catalog, full metaphor derivation, CD-006/DD-006, evaluation criteria
- MAY: See 1-paragraph metaphor summary

**PROG-AUDITOR:**
- MUST: Read build plan FIRST, generate PLANNED vs DEPLOYED vs MISSING checklist
- MUST: Verify soul 8/8, container, CPL, tokens, heading spacing, landmarks
- MUST NOT: See metaphor, PA questions, evaluation criteria

**PA-1 / PA-2:**
- MUST: Apply all 48 PA questions from skill file
- MUST: Report PA-05 with 4 sub-criteria breakdown
- MUST: Report ship verdict
- MUST NOT: See ANYTHING else (zero context, NON-NEGOTIABLE)

**NOVELTY-EVALUATOR:**
- MUST: Evaluate 3 unlabeled pages on D3.1/D3.2/D3.3
- MUST: Submit blind assessment BEFORE label reveal
- MUST NOT: See labels, hypothesis, build plans, or any context

**VERDICT-SYNTHESIZER:**
- MUST: Reconcile PA disagreements with evidence
- MUST: Report pass MARGINS for all criteria
- MUST: Run adversarial self-check (3 strongest challenges to own verdict)
- MUST: Classify all defects by severity (1/2/3)

---

## APPENDIX A: QUICK REFERENCE -- THE ~55 RULES

### Identity (8 binary checks = soul compliance)
1. border-radius: 0
2. box-shadow: none
3. No drop-shadow filter
4. No semi-transparent backgrounds
5. No gradients
6. No pure black/white
7. Instrument Serif NEVER for body text (display headings ONLY)
8. No cool-toned grays (warm palette only)

### Container + Readability (3 binary rules)
8. Container width 940-960px
9. CPL 45-80 characters
10. Warm palette only (no cool grays)

### Mechanism Specification (7 rules)
11. Per-category minimums S:1+, H:1+, C:1+, D:1+, N:1+
12. 2+ reinforcing pairs (shared semantic, different channels)
13. 4-scale fractal coherence (Nav + Page + Section + Component)
14. 3-transition minimum (SMOOTH/BRIDGE/BREATHING)
15. No identical adjacent section transitions
16. 3-5 designed moments documented
17. 2-3 purpose-built composite components

### Metaphor Pipeline (5 rules)
18. Full Phase 1-3 derivation (no pattern shortcut)
19. Metaphor resonance gate (authenticity + cross-domain + multi-dimensional)
20. Metaphor lock-in BEFORE consulting library
21. Structural obligation table produced
22. 1:MANY derivation (not 1:1 lookup)

### Process Gates (6 rules)
23. Phase 0E library access prohibition (Phases 0-3)
24. CP-1 metaphor resonance gate (blocking)
25. CP-2 build plan verification (blocking)
26. CP-3 builder self-check before file write (blocking)
27. CP-4 landmark completeness gate (blocking)
28. Two-instance pattern (planner != builder)

### Communication (3 capabilities)
29. Builder can message planner for clarifications
30. Auditor can flag severity-1 defects to team-lead
31. Team-lead can request targeted fixes

### Evaluation Protocols (4 rules)
32. Fresh-eyes zero-context PA (NON-NEGOTIABLE)
33. Dual PA with reconciliation
34. Blind novelty evaluation (3 unlabeled pages)
35. Programmatic audit FROM build plan (PLANNED vs DEPLOYED vs MISSING)

### Success Criteria (6 thresholds)
36. PA-05 4/4 DESIGNED
37. D3 >= 2/3 NOVEL
38. Better than Middle >= 3 perceptual improvements
39. Metaphor expression observed by PA
40. No severity-1 findings
41. Container width PASS

### Builder Self-Check (8 items)
42. Container width 940-960px
43. CPL 45-80 (formula provided)
44. Token compliance >= 80% (var() scan)
45. Landmarks present (header + footer + sections)
46. Heading spacing >= 1.5:1
47. Soul compliance 8/8
48. Rhythm variation >= 3 types
49. Weight distribution >= 2 focal points in bottom 50%

### Token + Semantic (4 rules)
50. Token compliance >= 80%
51. Typography trinity locked (Instrument Serif / Inter / JetBrains Mono)
52. 3-Question Test for all varying values (90% metaphor-justified)
53. Approved raw value exceptions documented

### Ceiling-Specific (3 rules)
54. Metaphor derivation through full pipeline
55. Mechanism selection through metaphor lens
56. Section-scale internal rhythm (each section has micro-arc)

**Total: ~56 rules.** This is a flight checklist, not an encyclopedia.

---

## APPENDIX B: TEAM-LEAD EXECUTION CHECKLIST

Use this checklist to orchestrate the experiment:

```
[ ] 1. Create output directory: ephemeral/ceiling-experiment/
[ ] 2. Verify all reference files exist (Section 1.3)
[ ] 3. Spawn metaphor-agent with Phase 1-3 instructions
[ ] 4. WAIT for 01-metaphor-derivation.md
[ ] 5. Run CP-1: Metaphor Resonance Gate
       [ ] Authenticity: arises from content? YES/NO
       [ ] Cross-domain: outside content domain? YES/NO
       [ ] Multi-dimensional: 3+ CSS channels? YES/NO
       If any NO: message metaphor-agent, request re-derivation
[ ] 6. Spawn planner with metaphor output + full catalog + guardrails
[ ] 7. WAIT for 02-build-plan.md
[ ] 8. Run CP-2: Build Plan Verification
       [ ] Per-category: S:1+, H:1+, C:1+, D:1+, N:1+? YES/NO
       [ ] Reinforcing pairs: >= 2? YES/NO
       [ ] 4-scale table: 4 scales with CSS evidence? YES/NO
       [ ] Landmarks: header + footer + all sections? YES/NO
       If any NO: message planner, request revision
[ ] 9. Spawn http-server
[ ] 10. Spawn builder with build plan + soul + guardrails + tokens + metaphor summary
[ ] 11. WAIT for ceiling-page.html
[ ] 12. Run CP-4: Landmark Completeness Gate
       [ ] Header exists? YES/NO
       [ ] Footer exists and has content? YES/NO
       [ ] Section count matches plan? YES/NO
       If any NO: message builder, request fix, re-verify
[ ] 13. Prepare blind novelty evaluation:
       [ ] Copy ceiling-page.html → page-[X].html (random label)
       [ ] Copy middle-tier-page.html → page-[Y].html (random label)
       [ ] Copy variant-b-weak-perm.html → page-[Z].html (random label)
       [ ] Record mapping privately (do not share with evaluator)
[ ] 14. Prepare comparative audit:
       [ ] Randomize Ceiling/Middle as Page A / Page B
       [ ] Record mapping privately
[ ] 15. Spawn ALL 5 evaluation agents in parallel:
       [ ] programmatic-auditor
       [ ] perceptual-auditor-1 (ZERO context)
       [ ] perceptual-auditor-2 (ZERO context)
       [ ] comparative-auditor (blind labels)
       [ ] novelty-evaluator (blind labels)
[ ] 16. WAIT for all 5 outputs (03, 04a, 04b, 05, 06)
[ ] 17. Run CP-5: Audit Reconciliation
       [ ] PA-1 vs PA-2 on PA-05: agree? disagree? → reconcile
       [ ] PA-1 vs PA-2 on ship verdict: agree? disagree? → reconcile
       [ ] Prog-audit: zero MISSING mechanisms? YES/NO
       [ ] Novelty: blind confirmed? YES/NO
       [ ] Document reconciliation results
[ ] 18. Reveal novelty labels to evaluator (AFTER blind assessment submitted)
[ ] 19. Spawn verdict-synthesizer with all outputs + reconciliation + criteria
[ ] 20. WAIT for 07-VERDICT.md
[ ] 21. Review verdict. Experiment complete.
```

---

## APPENDIX C: FILE MANIFEST

| File | Agent | Phase | Content |
|------|-------|-------|---------|
| `01-metaphor-derivation.md` | metaphor-agent | 1-3 | Multi-axis questioning, tension, metaphor collapse, semantic dimensions |
| `02-build-plan.md` | planner | 4 | Mechanism table, section map, transitions, pairs, fractal table, builder blocks |
| `ceiling-page.html` | builder | 5 | Complete HTML/CSS implementation |
| `03-programmatic-audit.md` | prog-auditor | 6a | PLANNED vs DEPLOYED vs MISSING, soul, container, CPL, tokens |
| `04a-perceptual-audit.md` | PA-1 | 6b | 48 PA questions, PA-05, ship verdict |
| `04b-perceptual-audit.md` | PA-2 | 6b | Same (independent) |
| `05-comparison-report.md` | comp-auditor | 7a | >= 3 perceptual improvements, structural comparison |
| `06-novelty-assessment.md` | novelty-eval | 7b | D3.1/D3.2/D3.3, blind confirmation |
| `07-VERDICT.md` | verdict-synth | 8 | Success criteria with margins, PA reconciliation, adversarial self-check |

---

**END CEILING MASTER EXECUTION PROMPT**

*This prompt is self-contained. A fresh Claude instance with filesystem access to this repository can execute the complete Ceiling experiment using only this document.*
