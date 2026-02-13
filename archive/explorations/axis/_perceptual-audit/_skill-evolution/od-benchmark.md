# OD vs AD Perceptual Audit Benchmark

**Date:** 2026-02-11
**Purpose:** Identify what made the OD audit process succeed where the AD perceptual audit required significant human intervention, and extract transferable patterns for skill evolution.

---

## A. Process Comparison

| Dimension | OD Process | AD Process | Delta |
|-----------|-----------|-----------|-------|
| **Team size** | 17 agents (audit) + 7 agents (fix) = 24 total | ~6-8 per page (4 auditors + adversarial + weaver), no separate fix team | OD had 3.5x more agents across audit+fix pipeline |
| **Files audited** | 6 OD files in a single audit batch | 3+ AD files individually (AD-003, AD-005, AD-006 confirmed) | OD audited ALL files simultaneously; AD audited per-page serially |
| **Audit methodology** | 5-phase multi-agent: (A) Identity traversal, (B) Visual-first wave, (C) Systematic/programmatic wave, (D) Research refinement + fresh-eyes, (E) Cross-OD consistency synthesis | Per-page: cold look (3 viewports), zone findings (4-5 auditors), adversarial, weaver synthesis | OD had explicit phased waves; AD had parallel auditors within a page but no cross-page coordination |
| **Fix methodology** | Dedicated 7-agent team: 4 fixers (per-file ownership), 2 verifiers (sequential: programmatic then visual), 1 weaver | Fix applied by a single fixer agent per page, no separate verification team | OD had dedicated verification pipeline; AD had no independent verification |
| **Validation gates** | 187 programmatic DOM tests + 12 visual screenshots; soul spot-check (60 elements); inversion tests | Zero programmatic verification; fix reports self-certify | OD: 187 automated tests. AD: 0 automated tests. This is the largest gap. |
| **Human interventions needed** | Minimal (user approved commit, otherwise autonomous) | Significant (user had to intervene in audit findings interpretation, fix scope, escalation decisions) | AD required substantially more human steering |
| **Time to completion** | Audit: ~45 min. Fix: ~25 min. Total: ~70 min. | Per-page audit: ~30-45 min each. But fix process required human re-engagement per page. Total across 3+ pages: hours with gaps. | OD completed faster despite auditing 6 files vs AD's 1-at-a-time approach |
| **Playwright usage** | Wave execution (visual first, programmatic second) eliminated most contention. 3 Visual-First agents per wave. Research-ref agent had no Playwright (file-only, fastest). | All auditors attempted simultaneous Playwright access for cold looks and findings. Contention severe (from MEMORY.md: "only 2/13 visual workers got actual Playwright access"). | OD managed Playwright as a serialized resource; AD let agents fight for it |
| **Agent failure rate** | Low: all 17 audit agents produced output. Synthesizer hardest to shut down (3 shutdown requests ignored). No agent failed to write files. | Higher: AD-005 Auditor B failed completely ("failed to produce findings after 2 attempts"). Coverage gaps in font-size compliance and touch-target assessment. | OD: 0/17 agent failures. AD-005: 1/5 auditor failed = 20% failure rate |

---

## B. What OD Did Right

### B.1 Phased Wave Execution (The Architectural Win)

The OD audit used an explicit 5-phase architecture:

```
Phase A: Identity Traversal (1 agent)
  → Read ALL research, extract identity brief
  → Produces shared context document for all subsequent agents

Phase B: Visual-First Wave (3 parallel agents)
  → OD-001/002, OD-003/004, OD-005/006
  → ONLY visual — screenshots, squint tests, cold looks
  → No programmatic checks in this wave

Phase C: Systematic/Programmatic Wave (3 parallel agents)
  → Same file pairs as Phase B
  → ONLY programmatic — DOM evaluation, computed styles, ARIA
  → Uses Visual-First findings as input (adversarial debate targets)

Phase D: Cross-cutting (parallel with C)
  → Research refinement (no Playwright, file-only)
  → Fresh-eyes (independent, no prior research)
  → Structural integrity, contrast, content authenticity, comparative reference

Phase E: Consistency Synthesis
  → Cross-OD consistency agent
  → Weaver cross-reference
  → Final synthesized report
```

**Why this mattered:** By separating visual from programmatic into sequential waves, the OD process:
1. Eliminated Playwright contention (visual agents finish before programmatic agents start)
2. Created a structured adversarial relationship (programmatic agents challenge visual findings)
3. Ensured every file was examined through BOTH lenses, not just whichever agent got Playwright access first

**Evidence:** `OD-GRANULAR-AUDIT-RESULTS.md` lines 617-618: "Phases completed: 5 (A: Identity, Wave 1: Visual, Wave 2: Programmatic, Parallel: Research, C: Consistency, D: Synthesis)"

The AD process had no equivalent wave separation. All auditors attempted visual + zone-based analysis simultaneously, creating resource contention and allowing agent B in AD-005 to fail entirely without the process compensating.

### B.2 Cross-File Consistency Agent

OD deployed a dedicated `cross-od-consistency.md` agent that examined all 6 files together. This agent:
- Identified 3 quality dialects (Polished, Functional, Editorial)
- Flagged systemic issues that no per-file agent would catch (e.g., 108 thin-border CSS declarations across all 6 files)
- Produced the 17-item fix recommendation list ordered by priority

**AD had nothing equivalent.** Each AD page was audited independently. When AD-005 found "responsive non-implementation" (LW-2), it was flagged as "POTENTIALLY SYSTEMIC — unknown if other ADs share the issue." But nobody was tasked with checking. Compare this to OD's cross-OD consistency agent which explicitly cross-referenced every finding against all 6 files.

**Evidence:**
- OD: `cross-od-consistency.md` produced 17 fix recommendations with per-OD applicability matrix
- AD-005: `AUDIT-REPORT.md` line 223: "POTENTIALLY SYSTEMIC — Auditor D observed it on AD-005; unknown if other ADs share the issue"

### B.3 Dedicated Verification Pipeline

The OD fix pipeline had:
1. **4 fixers** with per-file ownership (no file contention)
2. **Programmatic verifier** that ran 187 automated tests across all 6 files
3. **Visual verifier** that took 12 screenshots after programmatic passed (sequential, no contention)
4. **Weaver** that tracked state in FIX-STATE.md in real-time

The AD fix process had:
1. A single fixer per page
2. Fixer self-verified by writing a fix report
3. No independent verification agent
4. No programmatic DOM tests

**Evidence:**
- OD `FIX-STATE.md`: "187 programmatic PASS + 12 visual screenshots PASS"
- OD `fix-verification-programmatic.md`: 187 tests, 187 PASS, 0 FAIL — including adversarial "inversion test" for each fix
- AD-003 `fix-report.md`: Self-reported fix results with no independent verification
- AD-005 `fix-report.md`: Same pattern — fixer declares "0 soul violations introduced" but nobody independently checks
- AD-006 `fix-report.md`: Same pattern — includes grep verification but still fixer-self-certification

### B.4 Fresh-Eyes Constraint

The OD audit deployed a dedicated fresh-eyes agent with an explicit constraint: **no prior research reading.** This agent examined all 6 ODs with zero context about conventions, rules, or research findings. This produced genuinely novel observations:
- Identified 3 quality dialects nobody else saw
- Flagged OD-003 as "CONDITIONAL NO" while visual auditors passed it
- Found that OD-004 had a full-viewport dead zone that the identity-savvy visual auditors overlooked

The AD process had cold looks, which serve a similar purpose (react before reading specs). But cold looks in AD were performed by the SAME auditors who then proceeded to do detailed analysis. The OD fresh-eyes agent was a SEPARATE agent who only did the cold look and nothing else.

**Evidence:**
- OD `fresh-eyes.md`: Standalone agent, all 6 ODs, produced 5 cross-OD findings, contradicted visual auditors on 2 ODs
- AD-006 `AUDIT-REPORT.md` line 27-28: Cold looks done by Auditors A-D themselves, then they proceed to detailed analysis. Cold look is not independent — it's the same agent's first pass.

### B.5 Adversarial Debate Protocol

OD conducted "40+ adversarial debates" with explicit verdicts and confidence levels. When findings disagreed (Visual-First says PASS, Fresh-Eyes says NO on OD-003), the process had a structured resolution:

```
Cross-validated: CONTRADICTION
Resolution (Phase C): Fresh-eyes is correct that border inconsistency and monotony
are shippability concerns. The visual auditor focused on soul compliance (which passes)
while fresh-eyes focused on craft quality (which doesn't).
```

AD had deduplication and contamination checks, but the adversarial aspect was handled by a single "adversarial agent" per page rather than structured cross-agent debate.

**Evidence:**
- OD: 15 debates documented with verdict/confidence/agents in `OD-GRANULAR-AUDIT-RESULTS.md` lines 439-459
- AD-006: Adversarial is one of the 5 auditors (line 6), not a cross-cutting debate protocol

### B.6 Fix Priority Tiering

OD produced a 4-tier prioritized fix list:
- CRITICAL (3 items): Must fix before any production use
- HIGH (5 items): Should fix to meet quality bar
- MEDIUM (5 items): Should fix for consistency
- LOW (4 items): Polish items

This gave the fix team a clear execution order. Fixers could skip LOW items if time-constrained.

AD audit reports produced findings classified as WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER, but these were per-page and had no global prioritization across pages or guidance about which to fix first.

### B.7 The "Nuclear Question"

OD asked every auditor the same nuclear question: "If this OD exploration were the ONLY page a user ever saw from KortAI — would they understand the identity?" This forced a holistic identity judgment rather than itemized defect lists.

Results were cross-validated across Visual-First, Systematic, and Fresh-Eyes agents, producing a clear per-OD verdict table.

AD had nothing equivalent. AD auditors answered zone-specific questions (PA-01 through PA-28) but no single forcing question that demanded a holistic identity judgment.

---

## C. What AD Missed

### C.1 No Cross-Page Coordination

**OD pattern:** Single audit covering all 6 files + cross-consistency agent
**AD gap:** Each page audited independently with no cross-page synthesis

This meant:
- AD-003 found "responsive non-implementation" and flagged it as "POTENTIALLY SYSTEMIC"
- AD-005 found the exact same issue independently
- AD-006 found the same issue independently
- Nobody ever checked whether it was actually systemic or confirmed the cross-reference

In OD, the cross-od-consistency agent would have caught this immediately and classified it as SYSTEMIC on the first pass.

### C.2 No Automated Verification

**OD pattern:** 187 programmatic DOM tests with adversarial inversion framing
**AD gap:** Zero automated tests

This is the single largest process gap. OD's programmatic verifier checked:
- Every structural fix (main landmark, skip-link) with DOM existence tests
- Every visual fix (callout label contrast) with computed style checks
- Every soul compliance rule (60 random elements spot-checked)
- Used `document.fonts.ready` before checking fonts (discovering font-loading false positive)

AD fixers self-certified their work. When AD-006 fixer added scroll-reveal protection with `!important` overrides, nobody independently verified that the `!important` declarations actually made the hidden content visible. The fixer assumed it worked.

### C.3 No Lock Sheet Agent

**OD pattern:** Research-refinement agent checked 55 EXT-* citations against a 5-question soul test. Found 7 spirit-vs-letter violations and 7 raw directive applications.
**AD gap:** Lock sheet existed as a static reference document. Auditors consulted it, but no dedicated agent was responsible for systematically checking every locked decision.

AD-006 identified 2 escalation items where LOCKED decisions conflicted with perceptual evidence (MF-001 scroll-reveal, MF-002 bento breakpoint). These required human escalation. If a lock sheet agent had been running systematically, these conflicts might have been identified earlier or framed differently.

### C.4 No Contamination Protection in Agent Selection

**OD pattern:** Fresh-eyes agent explicitly prohibited from reading ANY research before examining the pages. Created genuinely independent perspective.
**AD gap:** All auditors read the lock sheet and conventions before auditing. The "cold look" protocol says to react before reading specs, but the same agent does both steps. Contamination check in AD-006 report shows:

```
Auditor A: CLEAN (Minor: causal hypothesis about intersection observers)
Auditor B: CLEAN (Minor: unit measurements)
Auditor C: CLEAN (Minor: one "--space-8" reference)
Auditor D: CLEAN (Minor: mentions "scroll-driven animation")
Adversarial: ACCEPTABLE (Moderate: CSS property names expected for convention-challenge role)
```

The contamination checker found ZERO findings excluded, which is good. But the contamination was present — agents referenced CSS properties and variable names. The OD fresh-eyes agent produced observations that were GENUINELY naive, and these produced 2 contradictions with the expert auditors that turned out to be the fresh-eyes agent being correct.

### C.5 Fixer-Verifier Separation

**OD pattern:** 4 fixers + 2 independent verifiers + 1 weaver
**AD gap:** 1 fixer per page, no independent verifier

In OD, the programmatic verifier was an ADVERSARIAL agent. Each test applied an "inversion test": "If this fix had NOT been applied, would I notice?" This caught 2 false positives:
- Fix #1 (Essence font): The original audit finding was wrong — the font was actually correct, but audit agents measured before font loading completed
- Fix #7 (dead zone): The dead zone was a scroll-animation artifact, not structural

If AD had an independent verifier with inversion testing, several outcomes might have been different:
- AD-006 Fix 1 (scroll-reveal protection with `!important`): Would an independent verifier confirm the content is actually visible? The fixer's root cause analysis noted "The HTML file itself contains NO scroll-reveal JavaScript or CSS" — so the `!important` overrides may be fighting a ghost.
- AD-003 Fix 3 (dead space removal): The fixer removed a hidden duplicate section. An independent verifier would have confirmed whether the dead space was actually reduced.

### C.6 No Weaver During Audit

**OD pattern:** Weaver agent ran throughout the audit, tracking 18 cross-references in real-time, monitoring agent completion, maintaining AUDIT-STATE.md
**AD gap:** Weaver synthesized findings AFTER all auditors completed, producing the AUDIT-REPORT.md. But during the audit, there was no live coordination.

The OD weaver caught:
- When agents completed work but forgot to call TaskUpdate (verified via file existence)
- Cross-references between agent findings (18 entries of "Agent X found Y which corroborates Agent Z's finding W")
- Agent status tracking and phase progression

### C.7 The Language Problem: Perceptual vs. Prescriptive

The AD skill files (SKILL.md, SKILL-v2.md, PERCEPTUAL-DEEPENING-PROTOCOL.md) use heavily philosophical language:

> "Insights emerge from repeated failure and perceptual deepening, NOT from pre-defined checklists"

> "NO ANALYTICAL CHECKLISTS... Don't check 'is border-radius 0?' Instead ask 'what FEELS different about the edges?'"

This philosophy is valuable for the SKILL ITSELF, but it creates a problem: agents optimized for rule-following are asked to do judgment. The metacognition analysis found the core principle: **"Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."**

The OD audit gave agents binary questions alongside judgment ones:
- Binary: "Does `<main>` exist? YES/NO" — 100% compliance
- Binary: "Is callout label color #1A1A1A? YES/NO" — 100% compliance
- Judgment: "Does this feel like KortAI? PASS/CONCERN/FAIL" — variable but structured with explicit options

The AD skill asks purely judgment questions:
- "What FEELS different about the edges?"
- "Is the space confident or anxious?"
- "Would a designer ship this?"

These are excellent prompts for humans. They are structurally hostile to LLM agents, which have no actual visual perception and simulate it through pattern-matching on their training data.

---

## D. Visual Quality Comparison

### D.1 Why the User Likes OD Output

Based on the audit evidence, the OD explorations succeeded visually because:

1. **Unified identity expression:** All 6 ODs share the same soul (sharp edges, flat design, serif hierarchy, warm palette) despite using 6 different organizational patterns. The cross-OD consistency agent VERIFIED this systematically.

2. **Graduated quality, not binary pass/fail:** OD acknowledged 3 dialects (Polished, Functional, Editorial) but all three share the foundational DNA. Even OD-003 (weakest) was recognizably KortAI.

3. **Systemic fix application:** When the audit found the 2px border epidemic (108 declarations, 1000+ instances), the fix was applied SYSTEMICALLY across all 6 files with a 3-category border classification. This created consistency that per-page fixes cannot achieve.

4. **Independent quality verification:** 187 programmatic tests + 12 visual screenshots AFTER fixes. The user can trust the output because it was independently verified, not self-certified.

5. **Zero soul violations:** Confirmed across 3,479+ elements by multiple independent processes. The user never sees a rounded corner, a shadow, or a wrong font — the identity is locked in.

### D.2 Visual Qualities OD Has That AD Was Missing Before Fixes

Based on the AD audit reports, the fixes addressed:

| Quality | OD Status | AD Pre-Fix Status | AD Post-Fix Status |
|---------|-----------|-------------------|-------------------|
| Responsive collapse at 768px | All 6 ODs collapse correctly | AD-003: grid doesn't collapse. AD-005: "renders identically at all viewports." AD-006: bento catastrophic at 960px. | AD-003/005/006: breakpoints added |
| Content visibility | All content visible without JS | AD-006: 40-60% invisible when animations fail | AD-006: defensive `!important` overrides added |
| Dead space | OD-004 had one dead zone (scroll-animation artifact, not real) | AD-003: 4,000-6,000px blank. AD-005: massive dead zones. AD-006: excessive voids. | Spacing reduced in all 3 |
| Container width | 860px standardized (OD-005 was 960px, fixed to 860px) | 860px was too narrow for bento grids at 1440px | All 3 widened to 1100px |
| Visual ending | Not explicitly audited in OD | AD-003/005/006: pages "just stop" | Page-end markers/closing bookends added |

### D.3 How OD Ensured Visual Quality vs. Just Rule Compliance

The OD audit explicitly distinguished between:
- **Soul compliance** (binary rules: border-radius, box-shadow, palette) — checked programmatically
- **Craft quality** (judgment: visual polish, rhythm, density) — checked via fresh-eyes and visual auditors
- **Identity expression** (nuclear question: would someone recognize KortAI?) — cross-validated

All three dimensions were checked independently. The AD process checked soul compliance and had zone-based craft assessment, but lacked the nuclear identity question and the independent fresh-eyes agent.

---

## E. Transferable Patterns

### E.1 Patterns to Bake Into the Perceptual-Auditing Skill

1. **Wave separation for Playwright access**
   - Wave 1: Visual agents (screenshots, cold looks) — exclusive Playwright access
   - Wave 2: Programmatic agents (DOM evaluation, computed styles) — exclusive Playwright access
   - Non-Playwright agents (research, content, file analysis) — run in parallel with either wave

2. **Cross-file consistency agent (mandatory when auditing 2+ files)**
   - Dedicated agent that reads ALL per-file audit reports
   - Identifies systemic vs sovereign issues
   - Produces unified fix priority list
   - This agent prevents "POTENTIALLY SYSTEMIC" findings from being left uninvestigated

3. **Programmatic verification gate (mandatory after any fix)**
   - Minimum test set per file:
     - Soul compliance: `border-radius`, `box-shadow`, `filter` spot checks (binary)
     - Fix-specific tests: DOM existence, computed style values (binary)
     - Font loading: `document.fonts.ready` before any font assertion (binary)
   - Inversion test: "If this fix were absent, would this test detect it?"
   - Threshold: 100% PASS required before declaring fixes complete

4. **Independent fresh-eyes agent (no prior research)**
   - Cannot read lock sheets, conventions, or research
   - Examines rendered page at 3 viewports
   - Answers only: first reaction, worst thing, best thing, ship verdict
   - Output compared against expert auditors — contradictions are HIGH PRIORITY

5. **Nuclear forcing question**
   - "If this were the ONLY page from this design system a user ever saw — would they understand the identity?"
   - Every auditor must answer YES/CONCERN/NO with evidence
   - Cross-validated across all auditors for each file

### E.2 Team Structures That Should Be Default

**For audit (per batch of 1-6 files):**
```
Lead (orchestrate only, zero building, zero Playwright)
├── Identity Traverser (1 agent, file-only, produces shared context)
├── Visual Wave (2-3 agents, sequential Playwright access, 2 files each)
├── Programmatic Wave (2-3 agents, sequential Playwright after visual completes)
├── Fresh-Eyes (1 agent, no research, Playwright for screenshots only)
├── Research Refinement (1 agent, file-only, no Playwright)
├── Cross-File Consistency (1 agent, file-only, runs after all per-file agents)
└── Weaver (1 agent, file-only, tracks cross-references + agent status)
```

Total: 9-12 agents for 6 files, or 7-8 for 1-3 files.

**For fix (per batch of 1-6 files):**
```
Lead (orchestrate only)
├── Fixers (1 per file, max 4 parallel for Playwright sharing)
├── Programmatic Verifier (1 agent, runs AFTER all fixers complete)
├── Visual Verifier (1 agent, runs AFTER programmatic passes)
└── Weaver (1 agent, tracks FIX-STATE.md)
```

Total: 7-8 agents.

### E.3 Validation Gates That Should Be Mandatory

| Gate | When | Pass Criteria | OD Had? | AD Had? |
|------|------|--------------|---------|---------|
| **Soul spot check** | After every build/fix | 0 violations across N random elements | YES (60 elements) | Implicit in fix reports, but not independent |
| **Programmatic DOM test** | After every fix | 100% of fix-specific tests pass | YES (187 tests) | NO |
| **Font-loading guard** | Before any font assertion | `document.fonts.ready` awaited | YES (discovered false positive) | NO (AD-006 fixer noted scroll-reveal was external but didn't verify) |
| **Visual screenshot comparison** | After all programmatic passes | Screenshots at 1440, 1024, 768 compared | YES (12 screenshots) | NO (fixers self-certify) |
| **Cross-file consistency** | After all per-file audits | Systemic issues identified and classified | YES (cross-od-consistency.md) | NO ("POTENTIALLY SYSTEMIC" left uninvestigated) |
| **Inversion test** | For every fix claim | "Would I notice if this fix were absent?" | YES (every test) | NO |
| **Fresh-eyes independence** | During audit | At least 1 agent with zero prior context | YES (fresh-eyes.md) | Partially (cold look by same auditors) |
| **Contamination check** | After all findings | CSS property names in perceptual findings? | YES (clean/minor across all) | YES (well-executed in AD-006 report) |

---

## F. Root Cause: Why AD Required More Human Intervention

The fundamental difference is architectural, not skill-related:

### F.1 OD Was a Batch Process; AD Was Serial

OD audited 6 files in one batch with shared agents, shared state, and cross-file consistency. AD audited each page independently, requiring the human to:
- Decide when to audit each page
- Review each audit report individually
- Approve escalation items per page
- Initiate fix process per page
- Review fix results per page

### F.2 OD Had Binary Verification; AD Had Only Judgment

OD's 187 programmatic tests were binary (PASS/FAIL). The human could trust the results without reading every test. AD's fix reports were narrative judgment: "I changed X because Y, soul compliance PASS." The human had to read and evaluate each narrative claim.

### F.3 OD Had Independent Verification; AD Had Self-Certification

In OD, the fixer and verifier were different agents. In AD, the fixer wrote the fix report and declared their own compliance. This is the equivalent of a developer approving their own code review.

### F.4 The Skill Language Optimizes for Humans, Not Agents

The perceptual-deepening skill files (SKILL.md, PERCEPTUAL-DEEPENING-PROTOCOL.md, TURBO-ORCHESTRATOR.md) are ~2,200 lines of deeply philosophical instructions about "feeling" and "perceiving." This is valuable human pedagogy but creates three agent problems:

1. **Judgment overload:** Agents receive 50+ questions about "how does this feel?" with no binary anchors
2. **No verification pathway:** The skill says "minimum 5 iterations" but has no programmatic gate that objectively measures improvement
3. **Reference dependency:** SKILL.md v1 requires a reference image. For original work (AD explorations), there IS no reference — you're creating new pages. SKILL-v2 addresses this with ship-readiness framing but is still entirely judgment-based.

### F.5 Recommended Fix: Hybrid Binary+Judgment Protocol

The skill should be restructured as:

```
LAYER 1: BINARY GATES (automated, 100% agent compliance expected)
├── Soul compliance: border-radius, box-shadow, filter (programmatic)
├── Responsive: grid collapses at breakpoints (Playwright + DOM check)
├── Content visibility: all sections visible without JS (programmatic)
├── Font loading: correct fonts after document.fonts.ready (programmatic)
├── Semantic HTML: main, headings, skip-link (DOM check)
└── Contrast: WCAG AA on all text (computed style check)

LAYER 2: STRUCTURED JUDGMENT (bounded options, cross-validated)
├── Cold look: YES / YES WITH RESERVATIONS / NO (3 viewports)
├── Nuclear question: PASS / CONCERN / FAIL
├── Zone assessment: HIGH / MEDIUM / LOW per zone
├── Ship verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
└── Personality alignment: ALIGNED / PARTIALLY / MISALIGNED

LAYER 3: FREE PERCEPTION (the skill's current strength)
├── Squint test observations
├── Named problems
├── Hypotheses
└── Soul discoveries
```

Layer 1 runs first and is fully automated. If Layer 1 fails, no amount of Layer 3 perception matters — there are objective defects.

Layer 2 provides bounded judgment that agents can execute reliably. Three options is better than open-ended.

Layer 3 is the existing skill's domain — free perceptual exploration. It activates AFTER Layers 1 and 2 pass, ensuring the baseline is solid before exploring subtleties.

---

## G. Summary of Key Transferable Lessons

| # | Lesson | OD Evidence | AD Counter-Evidence |
|---|--------|------------|-------------------|
| 1 | Separate visual and programmatic into sequential waves | Zero Playwright contention | "Only 2/13 visual workers got actual Playwright access" (MEMORY.md) |
| 2 | Deploy dedicated cross-file consistency agent | Cross-od-consistency.md identified 3 dialects, 17 fix items | "POTENTIALLY SYSTEMIC" findings left uninvestigated |
| 3 | Independent verification after fixes (not self-certification) | 187 tests, 187 PASS, 2 false positives caught | Fixers write their own fix reports, no independent check |
| 4 | Fresh-eyes agent with zero prior context | Contradicted expert auditors on 2 ODs (correctly both times) | Cold look by same auditors who then do detailed analysis |
| 5 | Binary gates before judgment assessment | Soul spot-check (60 elements), DOM existence tests | Fix reports cite soul compliance without programmatic proof |
| 6 | Batch processing > serial processing | 6 files in ~70 min total (audit+fix) | 3+ files over hours with human-intervention gaps between each |
| 7 | Font-loading guard (`document.fonts.ready`) | Caught font-loading false positive that saved unnecessary fix | Not used; AD-006 fixer did root cause analysis but no font-timing check |
| 8 | Inversion test for every fix | "If this fix had NOT been applied, would I notice?" — caught 2 false positives | No inversion testing |
| 9 | Weaver for real-time state tracking | AUDIT-STATE.md + FIX-STATE.md updated live | Weaver only synthesized after all auditors completed |
| 10 | Nuclear forcing question for holistic identity | "Would they understand the identity?" — every auditor, every file | No equivalent single-question holistic assessment |

---

## H. Files Referenced

### OD Process Files
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` (621 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/FIX-STATE.md` (89 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-report-fixer-a.md` (220 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-verification-programmatic.md`

### AD Process Files
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/explorations/axis/_perceptual-audit/AD-003/AUDIT-REPORT.md` (263 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/explorations/axis/_perceptual-audit/AD-003/fix-report.md` (53 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/explorations/axis/_perceptual-audit/AD-005/AUDIT-REPORT.md` (364 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/explorations/axis/_perceptual-audit/AD-005/fix-report.md` (129 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/explorations/axis/_perceptual-audit/AD-006/AUDIT-REPORT.md` (336 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/explorations/axis/_perceptual-audit/AD-006/fix-report.md` (151 lines)

### Skill Files
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-deepening/SKILL.md` (770 lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-deepening/SKILL-v2.md` (625 lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-deepening/PERCEPTUAL-DEEPENING-PROTOCOL.md` (1,059 lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-deepening/TURBO-ORCHESTRATOR.md` (594 lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-deepening/EMBEDDED-PROMPT.md` (113 lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-deepening/CLAUDE.md` (92 lines)

### Memory
- `/Users/spacewizardmoneygang/.claude/projects/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/memory/MEMORY.md` — Agent team lessons from 6 teams

---

*Benchmark analysis complete. The core finding: OD succeeded because it combined binary verification gates with structured judgment, used phased resource management, and had independent verification. AD's skill optimized for perceptual depth (which it achieves) but lacked the architectural scaffolding that made OD's results trustworthy without human oversight.*
