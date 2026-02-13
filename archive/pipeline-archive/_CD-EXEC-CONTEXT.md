# CD Execution Context — User-Provided Information

This file captures critical context from the user for creating the Master CD Execution Prompt. It includes the AD provenance remediation rundown and the visual audit methodology evolution.

---

## SECTION A: AD PROVENANCE REMEDIATION — What CD Is Building Upon

### The Problem
AD (Stage 4) completed its primary mission (build 6 explorations, audit, fix, synthesize) but never got dedicated provenance passes. AD's provenance was at 18% of gold standard (14/76 verification checklist). A fresh CD agent would have struggled to find what AD discovered.

### The Goal
Exceed OD's gold standard — not just close gaps but add things OD never had, especially a Convention Ideology Document capturing WHY behind every convention.

### What Was Built: 21-Agent Team, 8 Waves

**Wave 0: Setup** — Committed 14 assessment/scoping files. Commit 2d340ca.

**Wave 1: Infrastructure Unblock (5 agents)** — Took pipeline from "AD doesn't exist" to "AD is complete":
- Updated stage-5 STAGE-HEADER (CD UNBLOCKED), expanded stage-4 STAGE-HEADER 140→471 lines
- Added 6 axis patterns to PATTERN-INDEX, created axis-patterns.md (667 lines NEW)
- Added 33 EXT-AXIS-* entries to EXT-RESEARCH-REGISTRY
- Updated RESEARCH-ACTIVE copies — all 6 ADs COMPLETE
- Added 28 AD-F entries to FINDINGS-INDEX, updated PIPELINE-MANIFEST, SOUL-DISCOVERIES
- Commit 7ede1f1 — 13 files, 1,823 insertions

**Wave 2: Provenance Promotion (3 agents)** — Moved working docs to formal provenance:
- Promoted AD-CONVENTION-SPEC.md (822→1,093 lines) with 5 dark matter amendments (860px→1100px, footer, breathing ceiling, progressive enhancement, 960px grid)
- Created AD-RESEARCH-GATE.md (510 lines NEW)
- Added inline threading to AD-003/AD-004 HTML (4/6→6/6)
- Commit 90c0144 — 4 files, 1,705 insertions

**Wave 3: Convention Ideology + Handoff Enrichment (2 agents)** — The "exceed OD" wave:
- Created AD-PA-CONVENTIONS.md (970 lines NEW KEY DELIVERABLE). 27 conventions, each with: rule, WHY narrative, perceptual evidence, CSS pattern, authority level (LOCKED/SOFT-LOCKED/OPEN)
- Enriched HANDOFF-AD-TO-CD.md 233→447 lines with 10 new sections
- Commit 782e3ea — 5 files, 1,522 insertions

**Wave 4: Finding Enrichment (3 agents)** — Made every finding actionable for CD:
- Added 28 "Chain Impact" subsections to AD-outbound-findings.md
- Enriched AD-AUDIT-SYNTHESIS with ship verdicts, fix reports, decision framework
- Enriched AD-SYNTHESIS with dual-method soul confirmation

**Wave 5: Threading Density Pass (4 agents)** — 4 agents touching 21 files:
- Provenance chain docs, patterns, tokens, identity, research, cross-stage refs
- Result: 1,225 AD-F references across 108 files (from ~22)
- Commit a361543 — 21 files, 485 insertions

**Wave 6: Discovery Surface + Contradiction Resolution (2 agents)**
- Enriched stage-5 CLAUDE.md with PA skill reference, execution protocol
- Verified contradictions via source code: DM-038 FALSE POSITIVE, DM-039 CONFIRMED

**Wave 7: Verification + Synthesis (2 agents + lead fix)**
- 76-point verification: 75/76 (98.7%)
- REMEDIATION-SYNTHESIS.md: UNCONDITIONAL GO for CD

### By The Numbers
| Metric | Before | After |
|--------|--------|-------|
| Verification score | 14/76 (18%) | 75/76 (98.7%) |
| Formal chain doc lines | ~1,644 | 5,101 (+210%) |
| AD-F references | ~22 | 1,225 (+5,468%) |
| Files with AD-F refs | ~65 | 108 (+66%) |
| Cross-stage forward refs | 0 | 50 |
| New formal docs | 0 | 3 |
| Total insertions | 0 | 6,313 |
| Agents | — | 21 |

### Crown Jewel Threading
- AD-F-023 (ATTENTION TOPOLOGY): 144 references
- AD-F-025 (transition grammar): 103 references
- AD-F-024: 80 references

### 3 New Files Created
1. AD-PA-CONVENTIONS.md (970 lines) — Convention Ideology Document
2. axis-patterns.md (667 lines) — Per-pattern specs for 6 AD explorations
3. AD-RESEARCH-GATE.md (510 lines) — Composite research gate

### CD Readiness: UNCONDITIONAL GO

---

## SECTION B: VISUAL AUDIT METHODOLOGY EVOLUTION

### Where We Started: OD's 17-Agent Adversarial Audit
- 17 agents, 4 phases, ~45 min
- 187 programmatic DOM tests
- 89 findings, 0 soul violations across 3,479 elements
- Good at: rule violations. Could NOT: tell you the page felt wrong

### The Problem That Created Perceptual Auditing
Core insight: "React to what you see before you check what you know."
Temporal Firewall: agents must describe what they SEE before reading specs. Prevents deadly failure: agent reads max-width: 860px, confirms it matches spec, says "correct" — while human says "40% of screen is empty."

### The 860px → 1100px Discovery (Canonical Case)
| Aspect | Analytical View | Perceptual View |
|--------|-----------------|-----------------|
| Token value | max-width: 860px — matches spec | "40% of screen is warm cream" |
| Convention compliance | PASS | "Content squeezed into narrow tube" |
| Soul compliance | PASS | "Generous margins aren't generous, they're empty" |
| Bento grid at 768px | Grid columns ~130px — valid CSS | "Words stacking vertically, one per line — text crushed" |

Fix: 860px → 1100px, validated across all 6 pages. Convention spec amended.

### 7 Human Interventions in AD (What v3 Fixes)
1. "WHY IS THE WIDTH SO NARROW" — 6 agents flagged width independently, nobody aggregated
2. Auditors reading source code instead of screenshots (4/13 never got Playwright)
3. "Please fix everything" — lead waited for user instead of auto-triggering
4. Cross-page synthesis never happened automatically
5. Fixers self-certified (no independent verification)
6. Cold Look contamination (agents reading specs first)
7. Playwright contention across concurrent auditors

### v3 Skill Architecture: 3 Files
| Before | After |
|--------|-------|
| 12 files, ~4,500 lines | 3 files + registration |
| SKILL.md (770 lines philosophy) | GATES.md (534 lines — 7 binary gates) |
| SKILL-v2.md (625 lines judgment) | PROTOCOL.md (719 lines — 28 questions + anti-patterns) |
| TURBO-ORCHESTRATOR.md (594 lines) | TEAM.md (840 lines — exact agent prompts) |

### The Three-Layer Architecture
Layer 1: BINARY GATES (100% compliance) — "Did the agent DO the right things?"
- Gate 1: Playwright alive
- Gate 2: Screenshots exist (>=6 PNGs)
- Gate 3: Cold Look file exists BEFORE findings file
- Gate 4: No CSS vocabulary in findings
- Gate 5: Cross-page synthesis after 3+ audits
- Gate 6: Auto-trigger fixes on DO-NOT-SHIP
- Gate 7: Independent verification (not self-certified)

Layer 2: STRUCTURED JUDGMENT (~80% compliance) — bounded options
Layer 3: FREE PERCEPTION — 28 PA questions, gut reactions, named problems

### 7 Things We Must Do Now
1. **Scroll-Through Protocol** — viewport-scale screenshots, not full-page thumbnails
2. **Cross-Page Synthesis** — after 3+ pages, spawn synthesis agent
3. **Independent Verification** — fixers CANNOT verify own work
4. **Fresh-Eyes Agent** — zero research context, examines rendered pages
5. **Sequential Playwright Access** — no concurrent browser contention
6. **Auto-Fix Trigger** — DO-NOT-SHIP = MANDATORY fix, don't wait for user
7. **Bento Grid Litmus Test** — catches 130px crushed columns

### The Platinum Rule
"The system passed every structural check while the experience was broken."
Fix: validate what matters most, not what's most comprehensive.
Projected v3 impact: 0-1 human interventions instead of 7.

---

## SECTION C: CD EVOLVED VISION (Summary)

### The 8 Key Changes
1. CD-005 may be redundant (OD-001 already explored conversational Q&A at 37/40)
2. CD-006 becomes pilot migration of REAL content
3. HANDOFF becomes a playbook
4. Completeness Gate added
5. Convention spec written BEFORE building
6. Every exploration declares DD+OD+AD combination explicitly
7. Component chemistry validated (velocity, temperature, weight)
8. R-5 is 75-80% unapplied — biggest untapped source

### What CD Inherits
84 findings, 20 patterns, 5 soul pieces, 3-way equivalence, 5x5 transition grammar, Accumulated Identity v2, R-5 (39 findings)

### What CD Produces
CD-F findings, convention spec, Identity v3, validated transition grammar, combination recipes, completeness certification, HANDOFF-as-playbook

### Scale
~18-20 agents, ~4-5 hours. Convention spec → parallel builders → audit → synthesis.

---

## SECTION D: FILES THE MASTER CD EXECUTION PROMPT MUST REFERENCE

### Critical Input Files (CD Must Read)
1. HANDOFF-AD-TO-CD.md (447 lines, enriched) — MANDATORY first read
2. R5-COMBINATION-THEORY.md (756 lines) — PRIMARY research
3. AD-PA-CONVENTIONS.md (970 lines) — Convention ideology (WHY behind rules)
4. AD-outbound-findings.md — 28 findings with chain impact
5. AD-SYNTHESIS.md — 12-section synthesis
6. ACCUMULATED-IDENTITY-v2.md — Identity document
7. combination-rules.md (177 lines) — 4 combination rules
8. axis-patterns.md (667 lines) — 6 axis pattern specs
9. AD-CONVENTION-SPEC.md (1,093 lines) — Convention spec (template for CD's)
10. AD-RESEARCH-GATE.md (510 lines) — Research gate (template for CD's)

### Perceptual Auditing Skill (v3)
- ~/.claude/skills/perceptual-auditing/CLAUDE.md — Registration/config
- ~/.claude/skills/perceptual-auditing/GATES.md — 7 binary gates
- ~/.claude/skills/perceptual-auditing/PROTOCOL.md — 28 questions + anti-patterns
- ~/.claude/skills/perceptual-auditing/TEAM.md — Agent prompts for audit team

### Post-CD Pipeline (Strategic Context)
- POST-CD-PIPELINE/01-CD-EVOLVED-VISION.md (1,002 lines)
- POST-CD-PIPELINE/02-POST-CD-PHASES.md (520 lines)
- POST-CD-PIPELINE/03-MIGRATION-PIPELINE.md (662 lines)
- POST-CD-PIPELINE/05-COMPLETE-ROADMAP.md (479 lines)

### Template: Master AD Execution Spec
- knowledge-architecture/_ad-skeleton-analysis/master-synthesis/MASTER-AD-EXECUTION-SPEC.md (1,407 lines)
