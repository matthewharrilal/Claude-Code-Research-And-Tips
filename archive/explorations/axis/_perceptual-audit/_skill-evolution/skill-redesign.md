# Perceptual Audit Skill Redesign — Architecture Rationale

**Date:** 2026-02-11
**Architect:** Skill Architect (subagent)
**Inputs:** failure-analysis.md (7 interventions), od-benchmark.md (10 transferable patterns), 12 skill files, 1,314-line execution plan, MEMORY.md (6 team retrospectives)

---

## A. The Core Problem

The perceptual-auditing skill has 12 files totaling ~4,500 lines. None of them contain the protocol that was actually executed for AD. The protocol that worked lives in a 1,314-line Claude Code plan file (`fizzy-sparking-popcorn.md`), which is ephemeral — the next invocation of `/ship` or `/judge` will use the old v2 protocol, not the validated AD protocol.

The AD execution required 7 human interventions costing ~2-3 hours (25-30% of wall time). The OD execution of the same conceptual task required near-zero interventions. The delta is architectural: OD had binary validation gates and phased resource management. AD had philosophical instructions and agent judgment.

**The metacognition principle confirms the diagnosis:**
> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

---

## B. Consolidation: 12 Files to 3

### Current State (12 files)

| File | Lines | Role | Problem |
|------|-------|------|---------|
| SKILL.md | 770 | v1 reference-matching | Not used for AD; requires reference image |
| SKILL-v2.md | 625 | v2 ship-readiness | Judgment-only, no binary gates, no team structure |
| TURBO-ORCHESTRATOR.md | 594 | v1 orchestrator | Reference-matching only; not applicable to audit |
| QUICK-INVOKE.md | 274 | v1 invocation shortcuts | Superseded by CLAUDE.md slash commands |
| PERCEPTUAL-DEEPENING-PROTOCOL.md | 1,059 | Philosophy + forcing questions | Valuable philosophy, but too long for agent prompts |
| EMBEDDED-PROMPT.md | 113 | Mandatory Q1-Q3 block | Retained in PROTOCOL.md |
| CLAUDE.md | 92 | Skill registration | Rewritten for 3-file structure |
| prompts/ZONE-SUB-AGENTS.md | 713 | v1 zone agents | Superseded by v2 zones in SKILL-v2.md |
| templates/ (2 files) | ~200 | Log + discovery templates | Retained inline in PROTOCOL.md |
| scripts/setup.sh | ~30 | Setup script | Replaced by pre-flight in GATES.md |
| tests/visual-audit.spec.ts | ~100 | Playwright test | Not used in actual execution |

### New State (3 files)

| File | Purpose | Key Innovation |
|------|---------|----------------|
| **GATES.md** | All binary validation gates (7 gates, 3 layers) | Every gate is YES/NO, automatically checkable, BLOCKING |
| **PROTOCOL.md** | The perceptual audit protocol (questions, cold look, anti-patterns, sovereignty) | Agent-optimized language with MASSIVE HEADERS and 3x redundancy |
| **TEAM.md** | Team structure, agent prompts, wave ordering, Playwright management | Concrete prompts with gates embedded, not referenced |

### What Gets Preserved

- **28 questions (PA-01 through PA-28):** Retained verbatim in PROTOCOL.md
- **23 anti-patterns (AP-01 through AP-23):** Retained as BINARY RULES, not reference table
- **Cold Look protocol:** Retained and STRENGTHENED with temporal enforcement
- **Sovereignty classification:** Retained (ALWAYS-LOCKED, LOCKED, CHALLENGEABLE)
- **Dual severity track:** Retained (Rule Track + Perception Track)
- **Embedded Q1-Q3:** Retained in PROTOCOL.md as mandatory agent check
- **Soul discoveries format:** Retained in PROTOCOL.md
- **Contamination check:** Retained and PROMOTED to a gate

### What Gets Removed

- **v1 reference-matching protocol:** Retained in archived SKILL.md but no longer the default
- **TURBO-ORCHESTRATOR.md:** v1-only, no equivalent needed for v2/v3
- **QUICK-INVOKE.md:** Superseded by CLAUDE.md slash commands
- **ZONE-SUB-AGENTS.md:** Superseded by zone definitions in PROTOCOL.md
- **5-iteration minimum for reference matching:** Not applicable to ship-readiness audits
- **Pixel diff generation:** Not applicable without reference image
- **setup.sh:** Replaced by pre-flight gate

### What Changes Fundamentally

1. **Gates are BLOCKING, not advisory.** Prior: "Check for contamination." New: "GATE 4 FAIL: CSS property names detected. Findings INVALID. REJECT. RESPAWN."

2. **Language is agent-optimized, not human-pedagogical.** Prior: "Insights emerge from repeated failure and perceptual deepening, NOT from pre-defined checklists." New: "YOUR FIRST ACTION MUST BE browser_take_screenshot. If your first action is Read, Grep, or any file operation, the audit is INVALID."

3. **Team structure is prescriptive, not suggestive.** Prior: "Deploy 6 zone sub-agents simultaneously." New: Exact agent prompts with file paths, output formats, and gate enforcement embedded.

4. **Three-layer architecture enforces ordering.** Prior: All instructions mixed together. New: Layer 1 (binary gates) MUST pass before Layer 2 (structured judgment) activates, which MUST pass before Layer 3 (free perception).

---

## C. Gate Design Rationale

### Gate 1: PLAYWRIGHT ALIVE

**Why:** AD-004 Auditors Alpha and Beta produced entire audits from source-code analysis. No Playwright navigation occurred. The user discovered this and forced a redo (~30-45 minutes wasted).

**The gate:** Before any visual auditor starts, navigate to the target URL and take a screenshot. If the screenshot file doesn't exist after the attempt, the agent CANNOT proceed.

**Why binary works:** "Can you take a screenshot?" is YES/NO. No judgment needed. An agent that says "I'll analyze the source code instead" immediately fails this gate.

### Gate 2: SCREENSHOT EXISTS

**Why:** Even when agents claim to have used Playwright, some produce findings without screenshots. The existence of PNG files is the only reliable proof that visual inspection occurred.

**The gate:** After each auditor completes, check: does `screenshots/` contain >= 6 PNG files (3 viewports x 2 minimum per viewport)? If NO, findings are INVALID regardless of quality.

**Why binary works:** File count is objective. Zero judgment. An agent cannot argue that its source-code analysis was "just as good."

### Gate 3: COLD LOOK LOCKED

**Why:** The Temporal Firewall is the skill's most important principle — react before you know. But agents routinely read specs before completing their Cold Look, contaminating first impressions. AP-22 (Post-Lock Revision) cannot be detected after the fact.

**The gate:** The cold-look file MUST exist AND be written as a separate step BEFORE the findings file. The lead checks: cold-look file timestamp < findings file timestamp. If cold-look doesn't exist, or was written after findings, the audit is INVALID.

**Why binary works:** File existence and ordering are objective. No judgment about whether the Cold Look was "genuine."

### Gate 4: PERCEPTUAL LANGUAGE

**Why:** Contamination was low in AD (~1 finding out of ~500 had minor contamination), but the plan's language restriction was a SOFT gate — contamination was noted in reports but findings were not rejected. The OD benchmark shows that even minor contamination correlates with reduced perceptual insight quality.

**The gate:** Grep the findings file for CSS property names. A fixed list: `border-radius`, `padding`, `margin`, `font-size`, `font-family`, `line-height`, `max-width`, `min-width`, `flex`, `grid`, `gap`, `opacity`, `z-index`, `overflow`, `display`, `position`, `rgba`, `rgb`, `hsl`, `px` (word boundary), `rem`, `em` (word boundary). If ANY match, the finding containing it must be rewritten. If > 3 matches, the entire file is CONTAMINATED and must be redone.

**Why binary works:** String matching is objective. The only judgment is the threshold (3), which is generous — even 1 match indicates analytical escape.

### Gate 5: SYSTEMIC SYNTHESIS

**Why:** The lead failed to synthesize systemic patterns across 6 AD pages. Width too narrow, no visual ending, dead space, responsive collapse — each appeared in 4-6 reports independently. The user had to explicitly call out "WHY IS THE WIDTH SO NARROW ON ALL OF THESE."

**The gate:** After 3+ pages audited, the lead MUST spawn a synthesis agent that reads all completed AUDIT-REPORT.md files and identifies any finding appearing in 2+ reports. The synthesis file MUST exist before the next audit begins. If it doesn't, the lead is violating the protocol.

**Why binary works:** "Does the synthesis file exist?" is YES/NO. "Has the lead spawned the synthesis agent after audit 3?" is YES/NO.

### Gate 6: FIX TRIGGER

**Why:** The plan said "Fix team deferred (audit-only pass)." When audits returned DO-NOT-SHIP verdicts, the lead mechanically followed the plan's deferral instruction rather than proposing fixes. The user had to say "Please fix everything here especially the width constraints."

**The gate:** If ANY page verdict is DO-NOT-SHIP, OR if 3+ pages share a WOULD-NOT-SHIP finding, fixes are MANDATORY. The lead MUST present a prioritized fix list to the user and ask "Proceed with fixes?" Do NOT wait for the user to ask.

**Why binary works:** Verdict classification is objective. The trigger condition is a count.

### Gate 7: INDEPENDENT VERIFICATION

**Why:** AD fixers self-certified their work ("0 soul violations introduced"). OD had 187 programmatic DOM tests run by an INDEPENDENT verifier, which caught 2 false positives. Self-certification is the equivalent of a developer approving their own code review.

**The gate:** After fixes, an independent verifier (NOT the fixer) must check the results with Playwright. The verifier's report MUST exist before fixes are declared complete. If the verifier report doesn't exist, fixes are UNVERIFIED.

**Why binary works:** "Does a verifier report exist from a different agent than the fixer?" is YES/NO.

---

## D. Three-Layer Architecture

### Layer 1: Binary Gates (Automated, Blocking, 100% Compliance Expected)

These are the 7 gates above. They run automatically. They require no judgment. They BLOCK progress if they fail. An agent cannot proceed past a failed gate regardless of how insightful its work is.

**Layer 1 answers:** "Did the agent DO the right things?"
- Did it use Playwright? (Gate 1)
- Did it take screenshots? (Gate 2)
- Did it react before reading specs? (Gate 3)
- Did it use perceptual language? (Gate 4)
- Did the lead synthesize across pages? (Gate 5)
- Did the lead propose fixes when needed? (Gate 6)
- Did an independent agent verify fixes? (Gate 7)

### Layer 2: Structured Judgment (Bounded Options, Agent Chooses from List)

These are questions with CONSTRAINED answer sets. The agent must choose from provided options, not generate free-form responses. This achieves ~80% compliance (much better than pure judgment, worse than binary).

**Layer 2 answers:** "What is the agent's ASSESSMENT?"
- Cold Look verdict: YES / YES WITH RESERVATIONS / NO
- Ship verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
- Finding severity: WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER
- Sovereignty: ALWAYS-LOCKED / LOCKED / CHALLENGEABLE / ESCALATE
- Zone priority: HIGH / MEDIUM / LOW
- Concordance: AGREE / DISAGREE / PARTIAL

### Layer 3: Free Perception (The Skill's Core Strength)

These are the open-ended perceptual questions that make this skill valuable. They activate ONLY after Layers 1 and 2 pass. This is where the 28 PA questions live, where Cold Look reactions are captured, where soul discoveries emerge.

**Layer 3 answers:** "What does the agent SEE?"
- Gut reactions, named problems, hypotheses
- Squint test observations, scroll-through findings
- Cross-page patterns, architectural flags
- Soul discoveries, perceptual truths

**The key insight:** Layer 3 is PROTECTED by Layers 1 and 2. Without Layer 1, agents can produce beautiful perceptual prose from source-code reading (useless). Without Layer 2, free perception has no structure for comparison across agents. With all three layers, the skill produces verified, structured, genuine perceptual findings.

---

## E. Language Transformation

### Before (Human-Pedagogical)

From PERCEPTUAL-DEEPENING-PROTOCOL.md:
> "Insights emerge from repeated failure and perceptual deepening, NOT from pre-defined checklists. You don't know what you're looking for until you find it."

From SKILL.md:
> "Core Principle: Insights emerge from repeated failure and perceptual deepening, NOT from pre-defined checklists."

This is excellent human pedagogy. It explains WHY the skill works. But agents don't need to understand WHY — they need to know WHAT TO DO. When context compacts, the philosophical passages get dropped first. The procedural steps survive but lose their foundation.

### After (Agent-Optimized)

The same principle encoded as a binary rule:
```
YOUR FIRST ACTION MUST BE browser_take_screenshot.
YOUR SECOND ACTION MUST BE writing a Cold Look reaction.
YOUR THIRD ACTION MUST BE writing your Cold Look to a checkpoint file.

If your first action is Read, Grep, or any file operation:
  THE AUDIT IS INVALID. STOP. REPORT FAILURE.

If your second action is anything other than writing reactions:
  THE AUDIT IS INVALID. STOP. REPORT FAILURE.

This rule exists because perception must precede analysis.
If you read source code first, your perception is contaminated.
```

The philosophical truth ("insights emerge from repeated failure") is preserved in a comment, but the EXECUTABLE INSTRUCTION is binary. The agent doesn't need to believe in perceptual deepening — it just needs to follow the action sequence.

### Redundancy Against Compaction

Every critical rule is stated 3 times in different words:

1. **As a GATE header:** "GATE 2: SCREENSHOT EXISTS — MANDATORY — BLOCKING"
2. **As a procedure step:** "After each auditor completes, CHECK: screenshot count >= 6"
3. **As a failure case:** "If an auditor says 'I couldn't access Playwright' — that is a GATE FAILURE. The finding is INVALID."

When compaction drops 60% of content, the probability that ALL THREE instances of a rule are dropped approaches zero.

---

## F. Team Structure Changes

### From AD (per-page, serial, no cross-page coordination)

```
Per-page team:
  4 auditors (parallel, fighting for Playwright)
  1 adversarial
  1 weaver-synthesizer

No cross-page agent.
No independent verification.
Fixer self-certifies.
```

### To New Structure (batch, phased, cross-page)

```
Audit batch (1-6 pages):
  Lead (orchestrate only)
  Wave 1: Visual auditors (exclusive Playwright, staggered 30s)
  Wave 2: Adversarial + cross-cutting (after visual wave completes)
  Wave 3: Weaver-synthesizer per page
  Cross-page: Synthesis agent (after 3+ pages)
  Fresh-eyes: 1 independent agent (no prior research)

Fix batch:
  1 fixer per page (exclusive file ownership)
  1 programmatic verifier (INDEPENDENT, after ALL fixers)
  1 visual verifier (after programmatic passes)
  1 weaver (state tracking)
```

### Key Changes

1. **Playwright access is serialized within waves.** Visual auditors run in sub-waves with 30-second stagger. This is insufficient — the new TEAM.md recommends sequential Playwright access per auditor within a page. The wall time cost (~15 min longer per Standalone audit) is less than the cost of contention artifacts.

2. **Cross-page synthesis is MANDATORY.** After 3+ pages, a synthesis agent reads all completed reports and identifies systemic patterns. This prevents the "POTENTIALLY SYSTEMIC" findings from being left uninvestigated.

3. **Independent verification is MANDATORY.** Fixers cannot verify their own work. A separate verifier agent must confirm fixes with Playwright. This is the single largest structural gap between OD (187 tests, 2 false positives caught) and AD (0 tests, 0 independent checks).

4. **Fresh-eyes agent is MANDATORY for batches of 3+ pages.** A separate agent with ZERO prior research context examines rendered pages and reports first impressions. OD's fresh-eyes agent contradicted expert auditors on 2 files and was correct both times.

---

## G. What Is NOT Changed

1. **The 28 PA questions** — These are excellent and produce genuine perceptual findings. Retained verbatim.

2. **The Cold Look protocol** — The temporal ordering (perception before analysis) is the skill's most important innovation. Retained and strengthened with a file-existence gate.

3. **The Sovereignty Principle** — ALWAYS-LOCKED/LOCKED/CHALLENGEABLE classification prevents agents from attacking design decisions. Retained verbatim.

4. **The Dual Severity Track** — Perception Track (WOULD-NOT-SHIP/LOOKS-WRONG/COULD-BE-BETTER) alongside Rule Track. Retained verbatim.

5. **Perceptual language restrictions** — The hard block on CSS property names in findings. Promoted from advisory to a blocking gate.

6. **The Embedded Q1-Q3** — "What bothers me? Any text uncomfortable? Would a designer ship this?" Retained as mandatory check for all visual-output agents.

7. **Soul Discoveries documentation** — Perceptual truths documented as perception, not CSS. Retained.

---

## H. Expected Impact

| Metric | AD Actual | Projected With New Skill |
|--------|-----------|------------------------|
| Human interventions | 7 | 0-1 |
| Rework time | ~2-3 hours (25-30%) | < 30 minutes (< 10%) |
| Total wall time (6 pages) | ~8-10 hours | ~5-6 hours |
| Audit quality | Excellent (after rework) | Excellent (first pass) |
| Cross-page synthesis | None (user intervened) | Automatic (Gate 5) |
| Fix verification | Self-certified | Independent (Gate 7) |
| Playwright fallback to source | 4 agents (~13%) | 0 (Gate 1+2 block) |
| Contamination | Low (1 minor) | Zero (Gate 4 blocks) |

The new skill doesn't make audits faster — it makes them CORRECT THE FIRST TIME. The 25-30% rework overhead drops to near-zero because gates catch failures immediately instead of letting them propagate to synthesis/fix/verification stages where they're expensive to undo.

---

*Rationale complete. Proceeding to write GATES.md, PROTOCOL.md, and TEAM.md.*
