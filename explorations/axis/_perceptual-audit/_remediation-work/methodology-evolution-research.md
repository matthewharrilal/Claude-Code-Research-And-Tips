# Methodology Evolution Research: Visual Auditing → Perceptual Auditing
## A Complete History of Visual Quality Methodology from OD Through AD

**Research Date:** 2026-02-11
**Researcher:** Research Agent
**Source Files:** 8 primary documents (~13,000 lines), 6 AD audit reports, 12 skill files, MEMORY.md team lessons
**Scope:** Complete evolution from OD's 17-agent adversarial audit through AD's perceptual audit skill creation to current v3 methodology

---

## EXECUTIVE SUMMARY

The visual auditing methodology evolved through three major phases:

1. **OD Phase (Feb 2026):** 17-agent adversarial audit with binary verification gates, phased resource management, 187 programmatic tests, and independent verification. Near-zero human intervention required. Wall time: ~70 minutes for 6 files (audit + fix).

2. **AD Phase — First Attempt (Feb 2026):** Per-page perceptual audits using philosophical skill files with judgment-based instructions. Required **7 human interventions** costing ~2-3 hours (25-30% of wall time). Total: ~8-10 hours for 6 pages. Discovered critical systemic issues (860px width bottleneck, missing visual endings, dead space epidemic) but required human escalation to synthesize patterns.

3. **AD Phase — Skill v3 Redesign (Feb 2026):** Consolidated 12 skill files into 3, added 7 mandatory binary gates, three-layer architecture (Binary Gates → Structured Judgment → Free Perception), and agent-optimized language with 3x redundancy against context compaction. Projected impact: 0-1 human interventions, correct on first pass.

**The Critical Discovery:** The 860px → 1100px width change. Every single AD page (6/6) had 40% wasted viewport at 1440px because containers were 860px wide. This was flagged independently in every audit but required human intervention to synthesize into a systemic fix. The new methodology prevents this failure mode with mandatory cross-page synthesis (Gate 5).

---

## TABLE OF CONTENTS

1. [The OD Approach — What Visual Auditing Looked Like](#section-1-the-od-approach)
2. [Problems with the OD Methodology](#section-2-od-limitations)
3. [The First AD Perceptual Audit — Philosophy vs Process](#section-3-ad-first-attempt)
4. [The Width Discovery — 860px vs 1100px](#section-4-the-width-discovery)
5. [Seven Human Interventions — The Failure Analysis](#section-5-seven-interventions)
6. [Skill v3 Redesign — From Philosophy to Binary Gates](#section-6-skill-v3-redesign)
7. [Current Methodology — The Complete v3 Protocol](#section-7-current-methodology)
8. [Key Lessons and Transferable Patterns](#section-8-key-lessons)

---

<a id="section-1-the-od-approach"></a>
## 1. THE OD APPROACH — What Visual Auditing Looked Like

### 1.1 The Team Structure

OD deployed **17 agents** in a hierarchical 5-phase pipeline to audit 6 HTML files:

```
Phase A: Identity Traversal (1 agent)
  └─ Read ALL research, extract identity brief for downstream agents

Phase B: Visual-First Wave (3 agents, parallel)
  └─ OD-001/002, OD-003/004, OD-005/006
  └─ ONLY visual — screenshots, squint tests, cold looks
  └─ No programmatic checks in this wave
  └─ Exclusive Playwright access (sequential handoff)

Phase C: Systematic/Programmatic Wave (3 agents, parallel)
  └─ Same file pairs as Phase B
  └─ ONLY programmatic — DOM evaluation, computed styles, ARIA
  └─ Uses Visual-First findings as adversarial debate targets

Phase D: Cross-Cutting (parallel with C)
  └─ Research refinement (no Playwright, file-only)
  └─ Fresh-eyes (independent, no prior research)
  └─ Structural integrity, contrast, content authenticity

Phase E: Consistency Synthesis
  └─ Cross-OD consistency agent (reads all 6 audit reports)
  └─ Weaver cross-reference (18 entries)
  └─ Final synthesized report
```

**Key architectural decisions:**
- **Wave separation:** Visual agents finish completely before programmatic agents start → zero Playwright contention
- **Adversarial structure:** Programmatic agents challenge visual findings → structured debate with verdicts
- **Cross-file synthesis:** Dedicated agent examines all 6 files together → identifies 3 quality dialects, systemic issues
- **Fresh-eyes independence:** One agent with ZERO prior research → genuinely naive observations

### 1.2 The Verification Pipeline

OD didn't just audit — it VERIFIED fixes with scientific rigor:

```
Fix Pipeline (7 agents):
  ├─ 4 Fixers (per-file ownership, parallel execution, no contention)
  ├─ Programmatic Verifier (187 automated DOM tests, adversarial inversion framing)
  ├─ Visual Verifier (12 screenshots, runs AFTER programmatic passes)
  └─ Weaver (real-time state tracking in FIX-STATE.md)
```

**The 187 Programmatic Tests:**
- Soul compliance: 60 random elements spot-checked for `border-radius`, `box-shadow`, `filter`
- Structural fixes: DOM existence tests (e.g., `<main>` landmark, skip-link)
- Visual fixes: Computed style checks (e.g., callout label contrast)
- Font loading: Used `document.fonts.ready` before checking fonts → discovered false positive
- **Inversion tests:** "If this fix had NOT been applied, would I notice?" → caught 2 false positives

### 1.3 What OD Caught

**Final Results:**
- **89 findings:** 8 Critical, 6 High, 16 Medium, 8 Low, ~51 Notes
- **Soul violations:** 0 across 3,479+ elements (verified by 3 independent processes)
- **Systemic issues identified:**
  - 108 thin-border CSS declarations (2px where Rule 5 requires 3px) — 1,000+ computed instances
  - 3 quality dialects: Polished (OD-001/002), Functional (OD-003/004/005), Editorial (OD-006)
  - Off-palette colors in 4 ODs
  - 35 contrast accessibility failures
- **Cross-file consistency:** Cross-OD agent produced 17-item prioritized fix list applicable across all 6 files

**Human intervention required:** Minimal. User approved commit. Otherwise autonomous.

**Wall time:** ~45 min audit + ~25 min fix = **~70 minutes total** for 6 files.

### 1.4 The Nuclear Question

Every OD auditor answered the same forcing question:

> **"If this OD exploration were the ONLY page a user ever saw from KortAI — would they understand the identity?"**

Answers: YES / CONCERN / NO (with evidence)

This forced holistic identity judgment rather than itemized defect lists. Results were cross-validated across Visual-First, Systematic, and Fresh-Eyes agents.

### 1.5 Why OD Succeeded

**From the benchmark analysis:**

> "OD succeeded because it combined binary verification gates with structured judgment, used phased resource management, and had independent verification. AD's skill optimized for perceptual depth (which it achieves) but lacked the architectural scaffolding that made OD's results trustworthy without human oversight."

**The key patterns:**
1. **Binary gates:** Every verification was YES/NO, not judgment
2. **Phased waves:** Visual → Programmatic → Synthesis (no resource contention)
3. **Independent verification:** Fixers ≠ Verifiers (caught 2 false positives)
4. **Cross-file synthesis:** Dedicated agent prevented "POTENTIALLY SYSTEMIC" findings from being left uninvestigated
5. **Fresh-eyes agent:** Contradicted expert auditors on 2 ODs (correctly both times)

---

<a id="section-2-od-limitations"></a>
## 2. PROBLEMS WITH THE OD METHODOLOGY

Despite OD's success, it had significant limitations that prompted the perceptual audit evolution:

### 2.1 The Analytical Bias Problem

**OD was optimized for rule compliance, not perceptual quality.**

From the skill evolution analysis:

> "The OD audit explicitly distinguished between:
> - **Soul compliance** (binary rules) — checked programmatically
> - **Craft quality** (judgment) — checked via fresh-eyes and visual auditors
> - **Identity expression** (nuclear question) — cross-validated
>
> All three dimensions were checked independently. The AD process checked soul compliance and had zone-based craft assessment, but lacked the nuclear identity question and the independent fresh-eyes agent."

**What OD missed:** The gap between "passes all rules" and "looks good." OD could confirm that borders were 0px radius and colors were on-palette, but struggled to answer questions like:

- "Does this FEEL like it was made by one designer?"
- "Is any text uncomfortable to read?" (not "does it pass WCAG AA?")
- "Would you put your name on this?"

### 2.2 The Playwright Contention Issue

From MEMORY.md team lessons:

> "Playwright contention severe: only 2/13 visual workers got actual Playwright access; rest fell back to source-code analysis"

Even with wave staggering (10-30 second offsets), Playwright contention remained a critical failure mode. The OD approach (3 parallel visual agents per wave) reduced but didn't eliminate this.

### 2.3 The 28-Question Gap

OD didn't have systematic perceptual questions. Fresh-eyes agent provided naive observations, but there was no structured protocol for asking questions like:

- PA-02: "Is any text uncomfortable to read? Point to the worst spot."
- PA-06: "Are any words stacking vertically, one per line, in any column?"
- PA-09: "Is there dead space that serves no purpose?"
- PA-13: "Is there a clear visual ending, or does the page just stop?"

These questions require **looking at rendered output at viewport scale**, not analyzing CSS or DOM structure.

### 2.4 The Judgment vs Binary Imbalance

**From the metacognition analysis (documented in skill redesign):**

> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

OD leaned heavily on binary rules (187 tests, all PASS/FAIL), which achieved 100% compliance. But the perceptual questions were judgment-only with no bounded options. The fresh-eyes agent's PASS/CONCERN/NO verdict was structured, but most perceptual observations were free-form prose.

---

<a id="section-3-ad-first-attempt"></a>
## 3. THE FIRST AD PERCEPTUAL AUDIT — Philosophy vs Process

### 3.1 The Skill Files (12 Files, ~4,500 Lines)

Before AD, the perceptual-auditing skill consisted of 12 files:

| File | Lines | Purpose | Problem |
|------|-------|---------|---------|
| SKILL.md | 770 | v1 reference-matching | Requires reference image (AD pages had none) |
| SKILL-v2.md | 625 | v2 ship-readiness | Judgment-only, no binary gates, no team structure |
| PERCEPTUAL-DEEPENING-PROTOCOL.md | 1,059 | Philosophy + forcing questions | Excellent pedagogy, too long for agent prompts |
| TURBO-ORCHESTRATOR.md | 594 | v1 orchestrator | Reference-matching only |
| QUICK-INVOKE.md | 274 | Invocation shortcuts | Superseded |
| EMBEDDED-PROMPT.md | 113 | Mandatory Q1-Q3 | Retained but not enforced |
| CLAUDE.md | 92 | Skill registration | Needed rewrite |
| prompts/ZONE-SUB-AGENTS.md | 713 | v1 zone agents | Superseded |
| templates/* | ~200 | Log templates | Not used in execution |
| scripts/setup.sh | ~30 | Setup script | Skipped |
| tests/visual-audit.spec.ts | ~100 | Playwright test | Not used |

**None of these files contained the protocol actually executed for AD.** The working protocol lived in a 1,314-line Claude Code plan file (`fizzy-sparking-popcorn.md`), which was ephemeral.

### 3.2 The Philosophical Language Problem

From PERCEPTUAL-DEEPENING-PROTOCOL.md:

> "Insights emerge from repeated failure and perceptual deepening, NOT from pre-defined checklists. You don't know what you're looking for until you find it."

From SKILL.md:

> "NO ANALYTICAL CHECKLISTS... Don't check 'is border-radius 0?' Instead ask 'what FEELS different about the edges?'"

**This is excellent human pedagogy.** It explains WHY the skill works. It creates the right mindset.

**But it's terrible for LLM agents.** When context compacts, philosophical passages get dropped first. Procedural steps survive but lose their foundation. Agents don't need to UNDERSTAND why perception matters — they need to know WHAT TO DO.

### 3.3 The AD Team Structure (Per-Page)

```
Per-page team (Standard mode):
  └─ Lead (orchestrator)
      ├─ Research Contextualizer (Wave 1 — Lock Sheet)
      ├─ Auditor Alpha (Wave 2 — PA-01 to PA-11)
      ├─ Auditor Beta (Wave 2 — PA-12 to PA-20)
      └─ Synthesizer-Validator (Wave 3 — classify + verdict)

Per-page team (Standalone mode — AD-003, AD-005, AD-006):
  └─ Lead
      ├─ Research Contextualizer (Wave 1)
      ├─ Auditor A: Impression+Emotion (PA-01,04,05,18,19,20)
      ├─ Auditor B: Readability+Responsive (PA-02,06,07,08,21,22,23)
      ├─ Auditor C: Spatial+Grid (PA-09,10,11,14,15,17)
      ├─ Auditor D: Hierarchy+Coherence (PA-03,12,13,16,24,25)
      ├─ Adversarial (PA-26,27,28)
      └─ Weaver-Synthesizer (Wave 3)
```

**What was missing:**
- ❌ No cross-page synthesis agent
- ❌ No independent verification after fixes
- ❌ No fresh-eyes agent with zero prior research
- ❌ No binary gates enforcing screenshot existence
- ❌ No programmatic tests

### 3.4 What AD Caught (That OD Missed)

Despite the process issues, **AD's perceptual findings were excellent:**

**Systemic findings across all 6 AD pages:**

1. **Width bottleneck (6/6 pages):** 860px containers on 1440px viewport = 40% wasted space
   - AD-001: "Content column occupies roughly sixty percent of viewport width"
   - AD-002: "F-004: Container too narrow"
   - AD-003: "LW-3: Content area too narrow for 1440px viewport" (2-auditor concordance)
   - AD-006: "MF-005: Container width bottleneck" (adversarial + readability auditor)

2. **Missing visual endings (6/6 pages):** Pages just stopped with no closing bookend
   - AD-001: "~1,800px empty tail" (LW-01/CBB-02)
   - AD-002: "~3,700px void" (F-001 CRITICAL)
   - AD-003: "4,000-6,000px dead space" (WNS-1)
   - AD-004: "Page just stops... TWICE" (LW-4)
   - AD-005: "FAIL verdict" (LW-3)
   - AD-006: "No visual closure" (MF-004)

3. **Dead space epidemic (6/6 pages):** Viewport-scale voids between sections
   - AD-003: "CATASTROPHIC dead space"
   - AD-004: "Approximately FOUR consecutive screens of nothing" (Beta CRITICAL)
   - AD-005: "MASSIVE dead zones ~2 viewport heights" (3-auditor concordance)
   - AD-006: "Multiple full-viewport blanks" (5/5 UNANIMOUS)

4. **Responsive collapse failures (6/6 pages):** Grids breaking at 768px or failing to collapse
   - AD-003: "Grid doesn't collapse"
   - AD-005: "Renders identically at all viewports"
   - AD-006: "Bento catastrophic at 960px, collapse at 768px too late"

**The perceptual audit methodology caught issues that OD's programmatic approach missed:**

- **Bento grid single-character stacking:** PA-06 caught "words stacking vertically, one per line" — not a CSS bug, a perceptual catastrophe
- **Scroll-reveal content hiding:** PA-01 "first thing that bothers you" caught 40-60% invisible content
- **Dead space at viewport scale:** PA-09 "dead space that serves no purpose" caught multi-screen voids
- **No visual ending:** PA-13 "clear visual ending, or does the page just stop?" caught abrupt terminations

**OD would have passed these pages** because they had:
- ✅ `border-radius: 0` everywhere
- ✅ `box-shadow: none` everywhere
- ✅ Correct fonts, correct colors, correct spacing tokens
- ✅ Semantic HTML, ARIA compliance

**But AD said "DO NOT SHIP"** because they LOOKED broken at viewport scale.

---

<a id="section-4-the-width-discovery"></a>
## 4. THE WIDTH DISCOVERY — 860px vs 1100px

### 4.1 The Problem

**Every single AD page (6/6) had the same width constraint:**

```css
.page-container {
  max-width: 860px;
  margin: 0 auto;
}
```

**On a 1440px viewport:**
- Content: 860px (59.7%)
- Margins: 580px total (40.3%)

**40% of the screen was warm cream.**

### 4.2 How It Was Discovered

**AD-001 (Standard audit):**
- Alpha: "Content column occupies roughly sixty percent of viewport width"
- Beta: Not explicitly flagged, but noted in spatial assessment

**AD-002 (Standard audit):**
- F-004: "Container too narrow" (LOOKS-WRONG track)

**AD-003 (Standalone audit):**
- LW-3: "Content Area Too Narrow for 1440px Viewport" (2-auditor concordance)
- Beta: "For a page demonstrating bento grid layouts, this narrow tube undermines the content's own message"

**AD-004 (Standard audit):**
- Not challenged (noted as deliberate breathing)

**AD-005 (Standalone audit):**
- Not explicitly flagged as container width issue

**AD-006 (Standalone audit):**
- MF-005: "Container Width Bottleneck" (LOOKS-WRONG)
- Adversarial: "The single 860px container works for F-pattern text sections but constrains Bento and Choreography sections"
- Readability auditor: Related finding about breathing vs constraint

**Every audit independently identified the width issue, but each classified it differently:**
- Some called it "too narrow"
- Some called it "breathing zones too generous"
- Some called it "dead space"
- Some noted it without flagging as a problem

### 4.3 The Human Intervention

From the failure analysis:

> **Intervention 4: "WHY IS THE WIDTH SO NARROW ON ALL OF THESE"**
>
> After audits completed and fixes were underway, the user noticed that ALL 6 AD pages had the same width constraint problem (860px max-width on 1440px viewport = 40% wasted space). The user had to explicitly call this out.
>
> **What should have happened automatically:** The audit reports DID identify this. The lead should have synthesized these individual page-level findings into a SYSTEMIC finding across all 6 pages and proposed the width change proactively.
>
> **Time cost:** ~15-20 minutes (user frustration, explanation, redirect).
>
> **Root cause:** LEAD FAILURE — Synthesis Gap.

### 4.4 The Fix

**All 6 pages updated to:**

```css
.page-container {
  max-width: 1100px;  /* was 860px */
  margin: 0 auto;
}
```

**On 1440px viewport:**
- Content: 1100px (76.4%)
- Margins: 340px total (23.6%)

**Net change:** Reclaimed 240px of content width (16.7 percentage points).

**Why 1100px?**
- Still constrains prose with `p { max-width: 70ch }` rule (C-20) for readability
- Gives bento grids and wide layouts room to breathe
- Maintains generous margins (23.6%) without feeling wasteful
- Tested against all 6 pages — no breakage at 768px collapse

### 4.5 The Verification

From FIX-VERIFICATION-REPORT.md:

> **Width Check:** All 6 pages pass width check at 1100px.
> - Verified at 1440px: content uses ~76% of viewport
> - Verified at 768px: collapse behavior preserved
> - Prose readability maintained via p { max-width: 70ch }

### 4.6 Why This Matters

**This is THE canonical example of perceptual vs analytical auditing:**

**Analytical audit (OD approach):**
- ✅ Container uses token value: `--container-width-narrow` or `var(--space-220)` → PASS
- ✅ Margins are symmetric: `margin: 0 auto` → PASS
- ✅ Responsive behavior defined: collapses at 768px → PASS

**Perceptual audit (AD approach):**
- ❌ PA-09: "Is there dead space that serves no purpose?" → **40% of viewport is cream**
- ❌ PA-14: "Does every column have enough room for content to breathe?" → **Bento cells crushing**
- ❌ PA-05: "Would you put your name on this? Fix first?" → **Wasted screen real estate**

**The 860px value wasn't WRONG.** It was a valid choice. But at viewport scale, **it looked wasteful.**

---

<a id="section-5-seven-interventions"></a>
## 5. SEVEN HUMAN INTERVENTIONS — The Failure Analysis

### 5.1 Timeline

**Total wall time:** ~8-10 hours for 6 AD pages
**Rework time:** ~2-3 hours (25-30% of total)
**Interventions:** 7 distinct human escalations

### 5.2 Intervention 1: AD-004 Auditors Fall Back to Source Code

**What happened:**

Both Auditor Alpha and Beta for AD-004 produced entire audits from reading HTML/CSS source files. No Playwright navigation occurred. No screenshots were taken. The pages they "audited" were blank — they never rendered.

User intervention:
> "NO REDO ALL OF AUDITOR ALPHA AND BETAS AUDIT Needs to use Playwright and can't be blank pages."

**Time cost:** ~30-45 minutes (respawn both auditors, wait for redo, re-synthesis)

**Root cause:** VALIDATION GAP

The plan explicitly said "DO NOT fall back to source reading" but had no BINARY GATE to enforce it. The plan checked for contamination (CSS language in findings) but not for the more fundamental failure of never having used Playwright at all.

An agent can produce CSS-free language by summarizing source code in perceptual terms — passing contamination checks while violating the entire protocol.

**Missing gate:**
```
GATE 1.5: SCREENSHOT EXISTS
After each auditor completes:
  COUNT files in screenshots/*.png
  IF count == 0: REJECT. Respawn agent.
```

### 5.3 Intervention 2: AD-003 Redo Requested

**What happened:**

AD-003 required a redo at the same time as AD-004. Likely the same root cause (insufficient Playwright usage or blank pages).

**Time cost:** ~30-45 minutes (parallel with AD-004 redo, but wasted synthesis time)

**Root cause:** Same validation gap as Intervention 1

### 5.4 Intervention 3: User Had to Paste Principles TWICE

**What happened:**

The user manually pasted perceptual auditing principles into the conversation twice during the process. This suggests the lead lost context due to compaction and couldn't reconstruct principles from the plan.

**Time cost:** ~10-15 minutes per paste (20-30 minutes total)

**Root cause:** PROMPT GAP

The principles were in the plan (85 lines of philosophy in "SKILL MINDSET" section), but when context compacted, the lead retained procedural steps and lost philosophical foundation.

**From the failure analysis:**

> "The principles need to be encoded as SHORT BINARY RULES in agent prompts, not as long philosophical passages that get compacted away."

### 5.5 Intervention 4: "WHY IS THE WIDTH SO NARROW ON ALL OF THESE"

[Already covered in Section 4.3]

**Time cost:** ~15-20 minutes

**Root cause:** LEAD FAILURE — Synthesis Gap

### 5.6 Intervention 5: "Please fix everything here especially the width constraints"

**What happened:**

User had to explicitly request fixes. The plan was audit-only (Phase 1A-1E) with "fix teams deferred." But the user expected fixes to be proposed proactively after audits revealed DO-NOT-SHIP verdicts.

**Time cost:** ~10-15 minutes

**Root cause:** PLAN RIGIDITY

The lead followed the plan's "fix team deferred" instruction literally rather than using judgment. When 4 of 6 pages have WOULD-NOT-SHIP or DO-NOT-SHIP verdicts, the appropriate response is to propose fixes, not wait.

**Missing gate:**
```
GATE 4: FIX TRIGGER
IF any page verdict is DO-NOT-SHIP, OR
IF 3+ pages share a WOULD-NOT-SHIP finding:
  Lead MUST present prioritized fix list
  Do NOT wait for user to ask
```

### 5.7 Intervention 6: Stale Team Cleanup

**What happened:**

User had to intervene to clean up stale agent teams lingering after completion.

**Time cost:** ~5-10 minutes

**Root cause:** PROCESS GAP

The shutdown sequence was in the plan but not enforced. When the lead managed multiple concerns simultaneously, cleanup was skipped.

### 5.8 Intervention 7: "Expand widths on things that look too constrained"

**What happened:**

Even after the 860px→1100px fix, the user provided additional guidance about expanding widths on elements that still looked constrained. Fixers applied the change mechanically without visually verifying all constrained elements were addressed.

**Time cost:** ~10-15 minutes

**Root cause:** SKILL GAP

The EMBEDDED MODE visual judgment check (Q1-Q3: "What bothers me? Any text uncomfortable? Would a designer ship this?") was not included in fixer prompts, or was included but not enforced.

Fix reports showed soul compliance verification but no visual judgment Q1-Q3 answers.

### 5.9 Agent Failure Modes

**Agents that failed to use Playwright:** 4 of ~30 instances (13% failure rate)

| Page | Agent | What Happened |
|------|-------|---------------|
| AD-004 | Alpha (first attempt) | Source-code analysis, no screenshots |
| AD-004 | Beta (first attempt) | Source-code analysis, no screenshots |
| AD-003 | Unknown (first attempt) | Required redo (likely similar) |
| AD-005 | Auditor B | Failed to produce findings after 2 attempts |

**Pattern:** Consistent with prior team lessons from MEMORY.md:

> "Playwright contention severe: only 2/13 visual workers got actual Playwright access; rest fell back to source-code analysis"

### 5.10 Time Saveable With Proper Gates

| Gate | Interventions Prevented | Time Saved |
|------|-------------------------|-----------|
| Screenshot existence check | Interventions 1, 2 | ~60-90 min |
| Systemic pattern synthesis | Intervention 4 | ~15-20 min |
| Fix-proposal trigger | Intervention 5 | ~10-15 min |
| Automatic team cleanup | Intervention 6 | ~5-10 min |
| Embedded visual judgment in fixer prompts | Intervention 7 | ~10-15 min |
| Principle encoding as binary rules | Intervention 3 | ~20-30 min |
| **TOTAL SAVEABLE** | **6 of 7 interventions** | **~120-180 min (2-3 hrs)** |

This represents a **25-30% wall time reduction** and near-elimination of user intervention.

---

<a id="section-6-skill-v3-redesign"></a>
## 6. SKILL V3 REDESIGN — From Philosophy to Binary Gates

### 6.1 The Consolidation: 12 Files → 3 Files

**New structure:**

| File | Lines | Purpose | Key Innovation |
|------|-------|---------|----------------|
| **GATES.md** | 534 | 7 binary validation gates | All YES/NO, all blocking, all automatically checkable |
| **PROTOCOL.md** | 719 | 28 questions, cold look, anti-patterns, sovereignty | Agent-optimized language with MASSIVE HEADERS and 3x redundancy |
| **TEAM.md** | 840 | Team topologies, agent prompts, Playwright management | Concrete prompts with gates embedded, not referenced |
| **CLAUDE.md** | 134 | Skill registration | Slash commands, trigger phrases, 3-layer summary |

**Total: 2,227 lines** (vs 4,500 lines in 12 files)

**What was preserved:**
- ✅ All 28 PA questions (PA-01 through PA-28)
- ✅ All 23 anti-patterns (transformed from reference table to binary rules)
- ✅ Cold Look protocol (strengthened with temporal enforcement)
- ✅ Sovereignty classification (ALWAYS-LOCKED, LOCKED, CHALLENGEABLE)
- ✅ Dual severity track (Rule Track + Perception Track)
- ✅ Embedded Q1-Q3 mandatory check
- ✅ Soul discoveries documentation format

**What was changed:**
- ❌ Philosophy → Binary rules
- ❌ Reference table anti-patterns → HARD BLOCK instructions
- ❌ Advisory gates → BLOCKING gates
- ❌ Suggestive team structure → Prescriptive prompts
- ❌ Mixed instructions → Three-layer architecture

### 6.2 The Seven Mandatory Binary Gates

#### Gate 1: PLAYWRIGHT ALIVE

**Prevents:** Intervention 1 (AD-004 agents fell back to source-code analysis)

**The check:**
```
Before any visual auditor starts:
  Navigate to target URL
  Take a screenshot
  IF screenshot file doesn't exist after attempt:
    FAIL. Agent CANNOT proceed.
```

**Why binary works:** "Can you take a screenshot?" is YES/NO. No judgment. An agent that says "I'll analyze source code instead" immediately fails.

#### Gate 2: SCREENSHOT EXISTS

**Prevents:** Intervention 1 & 2 (agents claim Playwright use but have no screenshots)

**The check:**
```
After each auditor completes:
  COUNT files in screenshots/*.png
  IF count < 6 (3 viewports x 2 minimum):
    FAIL. Findings INVALID regardless of quality.
```

**Why binary works:** File count is objective. Zero judgment. Cannot argue that source-code analysis was "just as good."

#### Gate 3: COLD LOOK LOCKED

**Prevents:** Contamination (agents reading specs before completing Cold Look)

**The check:**
```
Cold-look file MUST exist AND be written BEFORE findings file.
Check: cold-look timestamp < findings timestamp
IF cold-look doesn't exist, OR written after findings:
  FAIL. Audit INVALID.
```

**Why binary works:** File existence and timestamp ordering are objective.

#### Gate 4: PERCEPTUAL LANGUAGE

**Prevents:** Analytical escape (CSS vocabulary in perceptual findings)

**The check:**
```
Grep findings file for CSS property names:
  border-radius, padding, margin, font-size, max-width,
  flex, grid, gap, opacity, rgba, rgb, px, rem, em
IF any match: rewrite that finding
IF > 3 matches: entire file CONTAMINATED, redo
```

**Why binary works:** String matching is objective. Threshold (3) is generous.

#### Gate 5: SYSTEMIC SYNTHESIS

**Prevents:** Intervention 4 (width issue flagged 6x but never synthesized)

**The check:**
```
After 3+ pages audited:
  Lead MUST spawn synthesis agent
  Synthesis agent reads all AUDIT-REPORT.md files
  Identifies findings appearing in 2+ reports
  Synthesis file MUST exist before next audit begins
```

**Why binary works:** "Does synthesis file exist?" is YES/NO.

#### Gate 6: FIX TRIGGER

**Prevents:** Intervention 5 (user had to ask for fixes despite DO-NOT-SHIP verdicts)

**The check:**
```
IF any page verdict is DO-NOT-SHIP, OR
IF 3+ pages share WOULD-NOT-SHIP finding:
  TRIGGER. Lead MUST present:
    1. Prioritized fix list
    2. Estimated fix time
    3. "Proceed with fixes?" prompt
  Do NOT wait for user.
```

**Why binary works:** Verdict classification is objective. Trigger is a count.

#### Gate 7: INDEPENDENT VERIFICATION

**Prevents:** Intervention 7 (fixers self-certify without visual check)

**The check:**
```
After fixes:
  Independent verifier (NOT the fixer) MUST check results
  Verifier's report MUST exist before fixes declared complete
IF verifier report doesn't exist:
  Fixes UNVERIFIED.
```

**Why binary works:** "Does a verifier report exist from a different agent?" is YES/NO.

### 6.3 The Three-Layer Architecture

```
┌─────────────────────────────────────────────────────────┐
│ LAYER 1: BINARY GATES                                   │
│ (Automated, Blocking, 100% Compliance Expected)         │
├─────────────────────────────────────────────────────────┤
│ ✓ Did agent use Playwright? (Gate 1)                    │
│ ✓ Did agent take screenshots? (Gate 2)                  │
│ ✓ Did agent react before reading specs? (Gate 3)        │
│ ✓ Did agent use perceptual language? (Gate 4)           │
│ ✓ Did lead synthesize across pages? (Gate 5)            │
│ ✓ Did lead propose fixes when needed? (Gate 6)          │
│ ✓ Did independent agent verify fixes? (Gate 7)          │
└─────────────────────────────────────────────────────────┘
            ↓ ONLY IF ALL PASS ↓
┌─────────────────────────────────────────────────────────┐
│ LAYER 2: STRUCTURED JUDGMENT                            │
│ (Bounded Options, Agent Chooses from List)              │
├─────────────────────────────────────────────────────────┤
│ Cold Look verdict: YES / YES WITH RESERVATIONS / NO     │
│ Ship verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP   │
│ Finding severity: WOULD-NOT-SHIP / LOOKS-WRONG / BETTER │
│ Sovereignty: ALWAYS-LOCKED / LOCKED / CHALLENGEABLE     │
│ Zone priority: HIGH / MEDIUM / LOW                      │
└─────────────────────────────────────────────────────────┘
            ↓ ONLY IF STRUCTURED ↓
┌─────────────────────────────────────────────────────────┐
│ LAYER 3: FREE PERCEPTION                                │
│ (The Skill's Core Strength)                             │
├─────────────────────────────────────────────────────────┤
│ • Gut reactions, named problems, hypotheses             │
│ • Squint test observations, scroll-through findings     │
│ • Cross-page patterns, architectural flags              │
│ • Soul discoveries, perceptual truths                   │
│ • Answers to all 28 PA questions in natural language    │
└─────────────────────────────────────────────────────────┘
```

**The critical insight:**

> "Layer 3 is PROTECTED by Layers 1 and 2. Without Layer 1, agents can produce beautiful perceptual prose from source-code reading (useless). Without Layer 2, free perception has no structure for comparison across agents. With all three layers, the skill produces verified, structured, genuine perceptual findings."

### 6.4 Language Transformation: Philosophy → Binary Rules

**Before (human-pedagogical):**

```
"Insights emerge from repeated failure and perceptual deepening,
NOT from pre-defined checklists. You don't know what you're looking
for until you find it."
```

**After (agent-optimized):**

```
YOUR FIRST ACTION MUST BE browser_take_screenshot.
YOUR SECOND ACTION MUST BE writing a Cold Look reaction.
YOUR THIRD ACTION MUST BE writing your Cold Look to a checkpoint file.

If your first action is Read, Grep, or any file operation:
  THE AUDIT IS INVALID. STOP. REPORT FAILURE.

This rule exists because perception must precede analysis.
If you read source code first, your perception is contaminated.
```

**The difference:** First is description of failure. Second is binary instruction with consequence.

**Redundancy against compaction:**

Every critical rule stated **3 times** in different words:

1. **As GATE header:** "GATE 2: SCREENSHOT EXISTS — MANDATORY — BLOCKING"
2. **As procedure step:** "After each auditor completes, CHECK: screenshot count >= 6"
3. **As failure case:** "If agent says 'I couldn't access Playwright' — GATE FAILURE. Finding INVALID."

When compaction drops 60% of content, probability that ALL THREE instances are dropped approaches zero.

### 6.5 Team Structure Evolution

**From AD (per-page, serial):**

```
Per-page team (no cross-page coordination):
  4 auditors (parallel, fighting for Playwright)
  1 adversarial
  1 weaver-synthesizer

No cross-page agent.
No independent verification.
Fixer self-certifies.
```

**To v3 (batch, phased, cross-page):**

```
Audit batch (1-6 pages):
  Lead (orchestrate only)
  Wave 1: Visual auditors (exclusive Playwright, sequential)
  Wave 2: Adversarial + cross-cutting (after visual completes)
  Wave 3: Weaver-synthesizer per page
  Cross-page: Synthesis agent (after 3+ pages) ← NEW
  Fresh-eyes: 1 independent (no prior research) ← NEW

Fix batch:
  1 fixer per page (exclusive file ownership)
  1 programmatic verifier (INDEPENDENT, after ALL fixers) ← NEW
  1 visual verifier (after programmatic passes) ← NEW
  1 weaver (state tracking)
```

**Key changes:**

1. **Sequential Playwright access** — One auditor finishes all screenshots before next starts (eliminates contention artifacts, costs ~15 min longer)
2. **Mandatory cross-page synthesis** — After audit 3, reads all reports, identifies systemic patterns
3. **Mandatory independent verification** — Separate verifier confirms fixes with Playwright
4. **Mandatory fresh-eyes** — Zero prior research context, genuinely naive observations

---

<a id="section-7-current-methodology"></a>
## 7. CURRENT METHODOLOGY — The Complete v3 Protocol

### 7.1 The One Rule

> **"React to what you see before you check what you know."**

If an agent's first action after taking a screenshot is opening a CSS file, the skill has failed.
If an agent's first action is describing what they SEE and FEEL, the skill is working.

### 7.2 The Sovereignty Principle

> **"Audit the EXECUTION of research-backed decisions, never the decisions themselves. Research defines WHAT. Perception judges HOW."**

Three sovereignty categories:

- **ALWAYS-LOCKED:** Soul rules (border-radius: 0, box-shadow: none). Never challengeable.
- **LOCKED:** Research-backed decisions. Decision protected; execution auditable.
- **CHALLENGEABLE:** Convention values, inherited defaults, builder choices. Open to challenge.

### 7.3 The Three Laws

1. The answer must require a screenshot (not answerable from source code alone)
2. The answer must be describable in plain language (no CSS vocabulary)
3. A non-designer must be able to validate the answer

### 7.4 The 28 Core Questions (Tiered)

**Tier 1: The Mandatory Five (Every Audit, Every Mode)**

| ID | Question | What It Catches |
|----|----------|-----------------|
| PA-01 | What's the first thing that bothers you? | Misplaced focal points, gestalt discomfort |
| PA-02 | Is any text uncomfortable to read? Point to the worst spot. | Narrow columns, cramped containers, **the 130px catastrophe** |
| PA-03 | Does this feel like one designer made it, or three? | Design dialect shifts, visual fragmentation |
| PA-04 | Where does your eye go first? Is that where it SHOULD go? | Competing focal points, hierarchy failure |
| PA-05 | Would you put your name on this? What would you fix first? | The gap between "passes rules" and "is good" |

**Tier 2: Standard Fifteen (Standard + Standalone)**

Readability:
- PA-06: Are any words stacking vertically, one per line? (**Bento grid litmus test**)
- PA-07: Can you read longest paragraph without losing your place?
- PA-08: Any text you have to lean in or squint to read?

Spatial Balance:
- PA-09: Is there dead space that serves no purpose? (**Dead space detector**)
- PA-10: If you squint until you can't read text, does layout look balanced?
- PA-11: Are margins generous (confident) or anxious (clutching)?

Visual Flow:
- PA-12: Do your eyes flow smoothly from section to section?
- PA-13: Clear visual ending, or does page just stop? (**Visual ending detector**)

Grid and Layout:
- PA-14: Does every column have enough room for content to breathe?
- PA-15: Trace left edge of every content block. How many starting positions?

Consistency:
- PA-16: Pick two elements that should look identical. Do they?
- PA-17: Is there visual rhythm (like a beat in music), or random?

Color and Emotion:
- PA-18: Do all grays/neutrals feel like same family?
- PA-19: Any element that feels like it's from a different website?
- PA-20: Describe this page's personality in three words. Match intent?

**Tier 3: Deep Dive Eight (Standalone Only)**

Responsiveness, Cross-Page, Architectural Challenge, Adversarial (PA-21 through PA-28)

### 7.5 The Four Modes

#### Mode 1: Embedded (90 seconds, no team)

**When:** Every agent producing visual output, before declaring done.
**What:** PA-01 through PA-05 answered in plain language.
**Steps:** Screenshot → LOOK 5 seconds → answer PA-01–PA-05 → if PA-05 = NO, fix before done.

#### Mode 2: Quick (3 minutes, no team)

**When:** Spot-checking a page. Verifier pass.
**What:** PA-01–PA-05 at 1440px and 768px. Cold Look. NO scroll-through.

#### Mode 3: Standard (30 minutes, TeamCreate, 4 agents)

**When:** Regular page review. Pre-ship quality gate.
**What:** PA-01–PA-20 at 1440px and 768px. Scroll-through MANDATORY.

**Team:**
```
[Lead]
  ├── Research Contextualizer (Wave 1 — Lock Sheet)
  ├── Auditor Alpha (Wave 2 — PA-01 to PA-11)
  ├── Auditor Beta (Wave 2 — PA-12 to PA-20)
  └── Synthesizer-Validator (Wave 3 — classify + verdict)
```

#### Mode 4: Standalone (60 minutes, TeamCreate, 7 agents)

**When:** Final review. Comprehensive assessment.
**What:** All 28 questions at 1440px, 768px, and 1024px. Scroll-through MANDATORY.

**Team:**
```
[Lead]
  ├── Research Contextualizer (Wave 1)
  ├── Auditor A: Impression+Emotion (PA-01,04,05,18,19,20)
  ├── Auditor B: Readability+Responsive (PA-02,06,07,08,21,22,23)
  ├── Auditor C: Spatial+Grid (PA-09,10,11,14,15,17)
  ├── Auditor D: Hierarchy+Coherence (PA-03,12,13,16,24,25)
  ├── Adversarial (PA-26,27,28)
  └── Weaver-Synthesizer (Wave 3)
```

### 7.6 Cold Look Protocol (Every Audit)

```
1. CLEAR: Close all CSS files, specs, docs. First time seeing this page.
2. LOOK (5 seconds): Open screenshot. Do NOT read text. Absorb shape, color, weight.
3. REACT (immediate): Write these four responses — LOCKED forever:

   COLD LOOK ({WIDTH}px):
   Gut reaction: [one sentence — what did you FEEL?]
   Worst thing:  [one element or area — fix first?]
   Best thing:   [one element — protect this]
   Ship verdict: YES / YES WITH RESERVATIONS / NO

4. LOCK: These responses are FINAL. Cannot change after reading specs.
5. REPEAT: Independently for each viewport.
```

### 7.7 Scroll-Through Protocol (Standard + Standalone — MANDATORY)

**Why:** Full-page screenshots compress 15,000px pages to thumbnail scale where crushed columns look "fine." Scroll-through forces viewport-scale examination.

**Steps:**
1. Start at top (scroll position 0)
2. Take viewport-sized screenshot (fullPage: false)
3. Scroll down 80% of viewport height
4. Take another viewport screenshot
5. Repeat until bottom
6. Produces 5-15 screenshots depending on page length
7. Examine EACH screenshot individually at full viewport scale

**The scroll experience IS the audit.** Notice section transitions, jarring jumps, dead zones, sticky header occlusion, narrative momentum.

### 7.8 Zone Sweep (5 Dimension Passes on Scroll-Through Screenshots)

**PASS 1: READABILITY** — For every text block at viewport scale: "Could I read this for 10 minutes?"

**PASS 2: SPATIAL BALANCE (Squint Test)** — Blur vision. Only shapes and weight. Balanced?

**PASS 3: HIERARCHY AND FLOW** — How content flows between scroll positions. Narrative momentum?

**PASS 4: CONSISTENCY** — Find pairs that should match. Do they? Visual rhythm?

**PASS 5: THE SHIP TEST** — Senior designer scrolled through. Name on this? Fix in 10 minutes?

### 7.9 The Temporal Firewall

Visual auditors NEVER see the Lock Sheet before completing Cold Look and all PA questions.

**The auditor never experiences "I see a problem" vs "research says it's correct."**

Their perceptual reactions are locked FIRST. Classification happens in a SEPARATE agent's context afterward.

### 7.10 Language HARD BLOCK

Auditor findings may NOT contain:

```
px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow,
padding, margin, font-size, font-family, line-height,
max-width, min-width, flex, grid, gap, opacity, z-index,
overflow, display, position
```

**Use instead:**

```
heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, anxious, confident, broken, polished, warm, cold,
sharp, soft, cluttered, breathing, stacking, flowing,
stuck, drifting
```

### 7.11 The Dual Severity Track

**Rule Track (existing):**
- SOUL VIOLATION → Always fix
- CONVENTION BUG → Always fix
- OVERFLOW → Usually fix

**Perception Track (NEW — cannot be dismissed by convention compliance):**
- WOULD-NOT-SHIP → Designer would refuse to release. Requires human review.
- LOOKS-WRONG → Something visually off. Address if time permits.
- COULD-BE-BETTER → Polish opportunity. Document for future.

**Critical Rules:**
1. Perception Track findings can NEVER be reclassified onto Rule Track
2. Cannot be dismissed because "the convention allows it"
3. A finding can exist on BOTH tracks simultaneously
4. When convention and perception conflict → escalate to human

### 7.12 The Bento Grid Litmus Test

The skill passes if it catches:

> A 4-column bento grid where one column is 130px wide and every word stacks on its own line.

Expected catches:
- PA-02 must catch text discomfort
- PA-06 must catch word stacking explicitly
- PA-14 must catch content-container misfit
- PA-10 (squint test) must reveal lopsided columns
- Research Validator must classify container width as CHALLENGEABLE
- Weaver must include it in top 3 concerns

---

<a id="section-8-key-lessons"></a>
## 8. KEY LESSONS AND TRANSFERABLE PATTERNS

### 8.1 The Ten Transferable Lessons from OD vs AD

| # | Lesson | OD Evidence | AD Counter-Evidence |
|---|--------|------------|-------------------|
| 1 | Separate visual and programmatic into sequential waves | Zero Playwright contention | "Only 2/13 visual workers got actual Playwright access" |
| 2 | Deploy dedicated cross-file consistency agent | Identified 3 dialects, 17 fix items | "POTENTIALLY SYSTEMIC" findings left uninvestigated |
| 3 | Independent verification after fixes (not self-certification) | 187 tests, caught 2 false positives | Fixers wrote own fix reports, no independent check |
| 4 | Fresh-eyes agent with zero prior context | Contradicted expert auditors on 2 ODs (correctly) | Cold look by same auditors who then do detailed analysis |
| 5 | Binary gates before judgment assessment | Soul spot-check (60 elements), DOM tests | Fix reports cite soul compliance without programmatic proof |
| 6 | Batch processing > serial processing | 6 files in ~70 min total (audit+fix) | 3+ files over hours with human-intervention gaps |
| 7 | Font-loading guard (`document.fonts.ready`) | Caught false positive, saved unnecessary fix | Not used; no font-timing checks |
| 8 | Inversion test for every fix | "Would I notice if this fix were absent?" — caught 2 issues | No inversion testing |
| 9 | Weaver for real-time state tracking | AUDIT-STATE.md + FIX-STATE.md updated live | Weaver only synthesized after all auditors completed |
| 10 | Nuclear forcing question for holistic identity | "Would they understand the identity?" — every auditor | No equivalent single-question holistic assessment |

### 8.2 What the Width Discovery Teaches

**The 860px → 1100px change is the canonical example of:**

1. **Perceptual vs Analytical:** Passes all rules, looks wasteful
2. **Viewport-Scale Examination:** Only visible at actual viewport dimensions (not in full-page screenshots)
3. **Systemic Synthesis:** Flagged 6x independently, required human to aggregate
4. **The Gap Between "Correct" and "Good":** Token value was valid; visual result was bad

**PA-02 is the hero:** "Is any text uncomfortable to read? Point to the worst spot."

At 860px in a bento grid, columns become 130-200px wide. Text stacks vertically. **This is uncomfortable.**

### 8.3 The Metacognition Principle

From the workflow metacognition analysis:

> **"Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."**

**Applied to perceptual auditing:**

- ✅ Layer 1 (Binary Gates): 100% compliance expected
- ⚠️ Layer 2 (Structured Judgment): ~80% compliance (bounded options)
- ❌ Layer 3 (Free Perception): Variable compliance, but protected by Layers 1 & 2

**The architecture enforces ordering:** You can't reach free perception without passing binary gates.

### 8.4 The Compaction Defense

**Critical rules stated 3x in different words:**

1. As gate header
2. As procedure step
3. As failure case

**When context compacts and drops 60% of content, probability that ALL THREE instances are dropped approaches zero.**

**Example (Gate 2):**

1. Header: "GATE 2: SCREENSHOT EXISTS — MANDATORY — BLOCKING"
2. Procedure: "After each auditor completes, CHECK: screenshot count >= 6"
3. Failure: "If agent says 'I couldn't access Playwright' — GATE FAILURE. Finding INVALID."

### 8.5 The Temporal Firewall

**The most important innovation of perceptual auditing:**

> Perceptual reactions are locked FIRST. Classification happens in a SEPARATE agent's context afterward.

**This prevents:**
- Post-hoc rationalization ("research says it's okay, so I guess it looks fine")
- Analytical override ("the CSS is correct, so my perception must be wrong")
- Self-censorship ("I shouldn't flag this, it's probably intentional")

**Enforced by Gate 3:** Cold-look file timestamp < findings file timestamp

### 8.6 The Language Restriction

**Hard block on CSS vocabulary forces perceptual description:**

❌ "The container has max-width: 860px creating excessive horizontal margins"
✅ "40% of the screen is warm cream — the content feels squeezed into a narrow tube"

❌ "Bento grid columns are ~130px wide at 768px viewport"
✅ "Words are stacking vertically, one per line — the text feels crushed"

**This is not pedantic.** CSS vocabulary triggers analytical thinking. Perceptual vocabulary preserves the observation mode.

### 8.7 The Scroll-Through Requirement

**Full-page screenshots compress visual problems to invisibility.**

A 15,000px page compressed to fit a single screenshot makes:
- 130px columns look like reasonable grid cells
- 1,800px dead space look like breathing room
- Missing footer look like intentional minimalism

**Scroll-through forces viewport-scale examination:**
- 5-15 screenshots at actual viewport size
- Each examined individually
- The EXPERIENCE of scrolling becomes part of the audit

**PA-09 "dead space that serves no purpose" is only answerable from scroll-through.**

### 8.8 The Fresh-Eyes Insight

**OD's fresh-eyes agent had zero prior research.** No lock sheet, no conventions, no identity brief.

**Result:** Contradicted expert auditors on 2 ODs and was **correct both times.**

**Why:** Expert auditors know what SHOULD work. Fresh-eyes only knows what DOES work.

**Applied to AD:** Fresh-eyes agent is now MANDATORY for batches of 3+ pages.

### 8.9 The Independent Verification Requirement

**Self-certification is developer approving own code review.**

**OD's verification:**
- 187 programmatic tests (independent verifier ≠ fixer)
- Caught 2 false positives:
  - Fix #1: Font audit was wrong (font-loading timing issue)
  - Fix #7: Dead zone was scroll-animation artifact, not structural

**AD's verification:**
- Fixers wrote fix reports declaring "0 soul violations introduced"
- No programmatic tests
- No independent visual check

**v3 requirement:** Gate 7 — Independent verifier MUST confirm fixes with Playwright.

### 8.10 The Platinum Rule

**From the failure analysis:**

> "The perceptual audit process suffered from the same failure mode it was designed to detect: **the system passed every structural check while the experience was broken.**"

**The plan was structurally complete:**
- 28 questions ✓
- 23 anti-patterns ✓
- 7 enrichment layers ✓
- 11 verification items ✓

**But the execution required 7 human interventions** because the plan was optimized for COMPREHENSIVENESS (covering every possible case) rather than ROBUSTNESS (preventing the 3-4 failure modes that actually occur).

**The parallel:**

AD pages had:
- Correct CSS tokens ✓
- Correct fonts ✓
- Correct soul compliance ✓
- Correct border categories ✓

**But 40% of viewport was wasted cream.**

**The fix is the same in both cases: validate what matters most, not what's most comprehensive.**

---

## APPENDIX: FILES REFERENCED

### Skill Files
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md` (current v3, 436 lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/GATES.md` (534 lines, 7 binary gates)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/PROTOCOL.md` (719 lines, 28 questions + anti-patterns)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/TEAM.md` (840 lines, topologies + prompts)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/CLAUDE.md` (134 lines, registration)

### Analysis Files
- `explorations/axis/_perceptual-audit/_skill-evolution/SYNTHESIS.md` (305 lines, v3 coherence verification)
- `explorations/axis/_perceptual-audit/_skill-evolution/failure-analysis.md` (448 lines, 7 interventions mapped)
- `explorations/axis/_perceptual-audit/_skill-evolution/od-benchmark.md` (474 lines, OD vs AD comparison)
- `explorations/axis/_perceptual-audit/_skill-evolution/skill-redesign.md` (305 lines, architecture rationale)

### Audit Reports
- `docs-spa/app/showcase/knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` (621 lines, 17 agents)
- `explorations/axis/_perceptual-audit/AD-006/AUDIT-REPORT.md` (336 lines, 5 auditors, DO NOT SHIP verdict)
- `explorations/axis/_perceptual-audit/AD-003/AUDIT-REPORT.md` (263 lines)
- `explorations/axis/_perceptual-audit/AD-005/AUDIT-REPORT.md` (364 lines)

### Convention Extraction
- `explorations/axis/_perceptual-audit/_remediation-scope/convention-extraction.md` (27 conventions discovered)

### Memory
- `~/.claude/projects/.../memory/MEMORY.md` — Agent team lessons from 6 teams

---

**Research complete. 8 primary sources analyzed (~13,000 lines). Evolution mapped from OD through AD to v3. Critical discoveries: 860px width bottleneck, 7 human interventions, binary gates principle, three-layer architecture, temporal firewall enforcement.**
