# Team Topology Audit: Context Window Overflow Risk Analysis

**Date:** 2026-02-16
**Auditor:** topology-auditor
**Input:** Plan (~745 lines), Master Prompt (~1,760 lines), Reference Files (variable)
**Governing Concern:** Context window must NEVER fill up. No compaction. No /clear. Every agent runs thin.

---

## Conversion Assumptions

- **1 line of markdown/code ~ 15 tokens** (conservative; mixed prose/tables/code averages ~12-18)
- **Claude Sonnet context window:** ~200K tokens (effective safe ceiling ~160K before degradation)
- **Claude Opus context window:** ~200K tokens (effective safe ceiling ~160K before degradation)
- **System prompt + CLAUDE.md + memory:** ~8K tokens baseline overhead per agent
- **Tool call overhead:** ~500 tokens per tool invocation (Read/Write/Bash)
- **Team message overhead:** ~300 tokens per sent/received message
- **Safe operating budget:** 80K tokens (50% of effective ceiling) to leave headroom for output generation and avoid quality degradation

---

## Per-Agent Context Budget Analysis

### Agent 1: team-lead (Opus, All Phases)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Plan (for orchestration) | 745 | ~11,200 |
| Messages FROM content-selector | -- | ~2,000 |
| Messages FROM planner | -- | ~8,000 (plan output summary) |
| Messages FROM builder | -- | ~2,000 |
| Messages FROM programmatic-auditor | -- | ~3,000 |
| Messages FROM perceptual-auditor | -- | ~4,000 |
| Messages FROM comparative-auditor | -- | ~3,000 |
| Messages FROM novelty-evaluator | -- | ~2,000 |
| Messages FROM verdict-synthesizer | -- | ~2,000 |
| Own output (orchestration messages) | -- | ~8,000 |

**Total Estimated Context:** ~53,200 tokens
**Verdict:** SAFE -- but ONLY if message sizes are controlled

**RISK FACTOR:** The team-lead accumulates ALL agent messages over 5+ phases. If agents send verbose reports instead of summaries, this balloons. A planner sending its full 7-section output (~15K tokens) instead of a summary would push total to ~60K+. If the evaluator sends the full 138-item checklist results, add another ~10K.

**Mitigation:** Agents must send SUMMARIES to team-lead, not full outputs. Full outputs go to FILES. Team-lead reads files only when needed.

---

### Agent 2: content-selector (Sonnet, Phase 0)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions (from team-lead) | -- | ~2,000 |
| Section 9 of master prompt (content reqs) | ~52 | ~780 |

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| Content document (800-1,200 words) | ~1,600 |
| Structural verification | ~500 |
| Message to team-lead | ~500 |

**Total Estimated Context:** ~13,380 tokens
**Verdict:** SAFE -- extremely lightweight agent

---

### Agent 3: planner (Opus, Phase 1)

**THIS IS THE CRITICAL AGENT.**

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions (from team-lead) | -- | ~3,000 |
| Content from content-selector | -- | ~2,000 |
| **Master prompt (FULL)** | **1,760** | **~26,400** |
| prohibitions.md (MUST-READ) | 352 | ~5,280 |
| tokens.css (MUST-READ) | 173 | ~2,600 |
| mechanism-catalog.md (MUST-READ) | 1,011 | ~15,165 |
| semantic-rules.md | 379 | ~5,685 |
| usage-criteria.md | 337 | ~5,055 |

**Subtotal input before planning:** ~73,185 tokens

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| 7-section plan (content + section map + mechanism table + transition table + reinforcing pairs + fractal table + builder blocks) | ~12,000-18,000 |
| Message to team-lead | ~1,000 |

**Total Estimated Context:** ~86,185 - ~92,185 tokens
**Verdict:** AT RISK -- Approaches 50% ceiling. Quality may degrade.

**CRITICAL ISSUE 1:** The plan says the planner reads the FULL master prompt (1,760 lines, ~26K tokens). But the master prompt is designed for a STANDALONE instance. If the planner receives team-lead orchestration AND the master prompt AND 5 reference files, that's ~73K tokens of INPUT ALONE. Add output (~15K) and we're at ~88K.

**CRITICAL ISSUE 2:** The plan also lists SKILL.md (1,582 lines, ~23K tokens) as Tier 1 MUST-LOAD. If the planner reads this too, add ~23K tokens -- total hits ~111K. This WILL cause quality degradation.

**CRITICAL ISSUE 3:** merged-components.css (694 lines, ~10K tokens) is listed as Tier 1 optional. If loaded, total exceeds ~121K. Dangerous.

---

### Agent 4: builder (Sonnet, Phase 2)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions (from team-lead) | -- | ~2,000 |
| Planner's 7-section output | -- | ~15,000 |
| Appendix B blocks 1-4 (mandatory) | ~58 | ~870 |
| :root block (Section 4.3) | ~53 | ~800 |
| Base typography (Section 4.4) | ~35 | ~525 |
| Accessibility (Section 4.5) | ~28 | ~420 |
| Responsive (Section 4.6) | ~10 | ~150 |
| Font CDN link | ~3 | ~45 |
| prohibitions.md (always-load) | 352 | ~5,280 |
| tokens.css (always-load) | 173 | ~2,600 |

**Subtotal input:** ~35,690 tokens

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| HTML file (350-500 CSS lines + HTML) | ~10,000-15,000 |
| Message to team-lead | ~500 |

**Total Estimated Context:** ~46,190 - ~51,190 tokens
**Verdict:** SAFE -- comfortably within budget

**KEY DESIGN WIN:** The Two-Instance pattern works here. The builder does NOT read the master prompt, only the planner's output. This is the correct architecture.

**RISK:** If the builder also reads mechanism-catalog.md or SKILL.md (which the plan says it should NOT), context jumps ~23-38K. The planner's output must be SELF-CONTAINED.

---

### Agent 5: programmatic-auditor (Sonnet, Phase 3a)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions | -- | ~3,000 |
| HTML file to audit | ~500-700 | ~8,000 |
| Playwright interactions (screenshots, DOM) | -- | ~5,000 |
| Quick Check criteria (15 items) | ~33 | ~500 |
| Critical-10 criteria | ~13 | ~200 |

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| Audit report | ~4,000 |
| Message to team-lead | ~1,000 |

**Total Estimated Context:** ~29,700 tokens
**Verdict:** SAFE

**NOTE:** Playwright screenshots consume tokens (images). Budget ~2K per screenshot. At 2 viewports (1440px + 768px) with ~3 screenshots each = ~12K for screenshots. Revised total: ~37,700. Still SAFE.

---

### Agent 6: perceptual-auditor (Sonnet, Phase 3b)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions | -- | ~2,000 |
| PA skill (MUST-READ) | 735 | ~11,025 |
| HTML file (for context) | ~500-700 | ~8,000 |
| Playwright screenshots (1440px + 768px) | -- | ~12,000 |

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| PA-01 to PA-20 responses | ~6,000 |
| PA-SEM-01 to PA-SEM-03 | ~1,500 |
| Summary + message to team-lead | ~1,500 |

**Total Estimated Context:** ~50,025 tokens
**Verdict:** SAFE -- but heavier than expected due to PA skill + screenshots

**CRITICAL:** This agent MUST be fresh-eyes (zero design context). Do NOT send it the planner's output or mechanism details. The only input is the PA skill + the rendered HTML.

---

### Agent 7: comparative-auditor (Sonnet, Phase 4a)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions | -- | ~2,000 |
| Middle-tier HTML | ~500-700 | ~8,000 |
| Variant B HTML | 694 | ~10,400 |
| Playwright screenshots (both pages, both viewports) | -- | ~16,000 |
| Section 6.5 (Variant B baseline data) | ~15 | ~225 |

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| Comparison report | ~4,000 |
| Message to team-lead | ~1,000 |

**Total Estimated Context:** ~49,625 tokens
**Verdict:** SAFE -- but screenshot-heavy

---

### Agent 8: novelty-evaluator (Sonnet, Phase 4b)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions (D3.1-D3.3 criteria) | -- | ~2,000 |
| Middle-tier HTML (CSS extraction) | ~500-700 | ~8,000 |
| DD-006 HTML (for comparison) | ~800 | ~12,000 |
| CD-006 HTML (for comparison) | ~1,200 | ~18,000 |
| Playwright screenshots (blur test) | -- | ~8,000 |

**Total Estimated Context:** ~60,000 tokens
**Verdict:** AT RISK

**ISSUE:** Reading both crown jewel files (~30K tokens combined) is heavy. If this agent also reads the OD-004 file (referenced in D3.1), add another ~10K.

**Mitigation:** Pre-extract CSS values from crown jewels into a summary file (~2K tokens) instead of making the agent read full HTML files.

---

### Agent 9: verdict-synthesizer (Sonnet, Phase 5)

**Input Token Budget:**

| Source | Lines | Tokens (est.) |
|--------|-------|---------------|
| System prompt + CLAUDE.md + memory | -- | ~8,000 |
| Prompt instructions | -- | ~2,000 |
| Programmatic audit report (file) | -- | ~4,000 |
| Perceptual audit report (file) | -- | ~7,500 |
| Comparison report (file) | -- | ~4,000 |
| Novelty assessment (file) | -- | ~3,000 |
| Section 10 criteria (decision matrix) | ~73 | ~1,100 |

**Output Token Budget:**

| Output | Tokens (est.) |
|--------|---------------|
| Verdict document | ~4,000 |
| Message to team-lead | ~1,000 |

**Total Estimated Context:** ~34,600 tokens
**Verdict:** SAFE

---

## Summary: Per-Agent Verdicts

| Agent | Model | Est. Context | Budget (80K) | Verdict |
|-------|-------|-------------|--------------|---------|
| team-lead | Opus | ~53K | 66% | SAFE (with message discipline) |
| content-selector | Sonnet | ~13K | 16% | SAFE |
| **planner** | **Opus** | **~88K-111K** | **110-139%** | **WILL OVERFLOW** |
| builder | Sonnet | ~49K | 61% | SAFE |
| programmatic-auditor | Sonnet | ~38K | 47% | SAFE |
| perceptual-auditor | Sonnet | ~50K | 63% | SAFE |
| comparative-auditor | Sonnet | ~50K | 63% | SAFE |
| novelty-evaluator | Sonnet | ~60K | 75% | AT RISK |
| verdict-synthesizer | Sonnet | ~35K | 44% | SAFE |

---

## OVERFLOW RISKS IDENTIFIED

### RISK 1: Planner Agent Will Overflow (CRITICAL)

**The Problem:** The planner must read:
- Master prompt: ~26K tokens
- 5 reference files: ~34K tokens
- Content from selector: ~2K tokens
- System overhead: ~11K tokens
- Then PRODUCE ~15K tokens of plan output

**Total: ~88K tokens MINIMUM, ~111K if SKILL.md is also loaded.**

This exceeds the 80K safe budget. The planner is doing too much in one agent.

**Root Cause:** The master prompt (1,760 lines) is designed as a STANDALONE document for a single instance. But in a team topology, the planner doesn't need ALL 11 sections. It needs Sections 0-4 and 9 (mission, identity, vocabulary, mechanisms, pipeline, content). It does NOT need Sections 5-8 and 10 (validation, context, references, anti-patterns, success criteria) -- those are for the AUDITOR and EVALUATOR agents.

### RISK 2: Novelty Evaluator At Risk (MODERATE)

**The Problem:** Must read 2-3 crown jewel HTML files (~30-40K tokens) for CSS comparison.

**Root Cause:** Full HTML files contain content, structure, AND CSS. The novelty evaluator only needs the CSS.

### RISK 3: Team-Lead Accumulation (LOW-MODERATE)

**The Problem:** Messages accumulate across 5 phases. If agents send verbose reports, team-lead context grows unboundedly.

**Root Cause:** No message size discipline defined in the plan.

---

## RECOMMENDED TOPOLOGY CHANGES

### Change 1: Split the Master Prompt into Agent-Specific Slices (CRITICAL)

Instead of giving the planner the full 1,760-line master prompt, pre-slice it:

| Slice | Sections | Lines | Tokens (est.) | For Agent |
|-------|----------|-------|---------------|-----------|
| **planner-slice** | Sections 0-4, 9, Appendix B-C | ~985 | ~14,800 | planner |
| **auditor-slice** | Sections 0, 5, Appendix A | ~270 | ~4,050 | programmatic-auditor |
| **evaluator-slice** | Sections 0, 6-8, 10, Appendix D | ~420 | ~6,300 | evaluator agents |
| **builder-slice** | Sections 4.3-4.7 only (copy-paste blocks) | ~140 | ~2,100 | builder (via plan) |

**Impact on planner:** Input drops from ~73K to ~47K tokens. Total with output: ~62K. SAFE.

**How to implement:** The team-lead (or a pre-processing step) creates 3-4 markdown files in `ephemeral/middle-tier-experiment/` BEFORE spawning agents. Each agent reads ONLY its slice.

### Change 2: Pre-Extract Crown Jewel CSS (MODERATE)

Create `ephemeral/middle-tier-experiment/crown-jewel-css-extract.md` containing ONLY the CSS from DD-006 and CD-006, with mechanism annotations. ~200 lines (~3K tokens) instead of ~2,000 lines (~30K tokens).

**Impact on novelty-evaluator:** Input drops from ~60K to ~33K. Moves from AT RISK to SAFE.

### Change 3: Message Size Protocol (LOW-MODERATE)

Add to ALL agent prompts:
```
MESSAGE DISCIPLINE: Messages to team-lead MUST be < 500 words.
Full outputs go to FILES. Messages contain:
1. Status (DONE / BLOCKED / ISSUE)
2. Key findings (3-5 bullet points)
3. Output file path
NEVER send full reports as messages.
```

**Impact on team-lead:** Caps message accumulation at ~1,500 tokens per agent message. Total message overhead for 8 agents: ~12K tokens. Keeps team-lead safely under 50K.

### Change 4: Planner Does NOT Read SKILL.md (MODERATE)

The plan lists SKILL.md (1,582 lines) as Tier 1 MUST-LOAD. But the planner-slice already incorporates the relevant pipeline steps (the 10-step workflow). Reading the full skill file is redundant and adds ~23K tokens.

**Recommendation:** Remove SKILL.md from planner's reading list. The planner-slice contains all pipeline information the planner needs. If specific skill details are needed, they're already in the master prompt Sections 3-4.

### Change 5: Planner Does NOT Read semantic-rules.md or usage-criteria.md (LOW)

These files (~10K tokens combined) are primarily relevant for the EVALUATOR, not the planner. The planner needs:
1. prohibitions.md (soul constraints) -- KEEP
2. tokens.css (vocabulary) -- KEEP
3. mechanism-catalog.md (mechanisms) -- KEEP
4. semantic-rules.md -- REMOVE from planner (move to evaluator)
5. usage-criteria.md -- REMOVE from planner (move to evaluator)

**Impact on planner:** Saves ~10K tokens. Total drops to ~52K. Comfortable margin.

---

## OPTIMAL VS MINIMUM TEAM SIZE

### Current Plan: 8 Agents + 1 Team-Lead = 9 Total

This is well-designed. The parallelization (Phase 3a/3b, Phase 4a/4b) is sound.

### Minimum Viable: 5 Agents + 1 Team-Lead = 6 Total

| Agent | Merges | Risk |
|-------|--------|------|
| content-selector | (unchanged) | None |
| planner | (unchanged, with slicing) | Low |
| builder | (unchanged) | None |
| auditor | programmatic + perceptual merged | MODERATE -- fresh-eyes violated if shared |
| evaluator | comparative + novelty + verdict merged | MODERATE -- context ~70K |

**NOT RECOMMENDED.** Merging auditors violates the fresh-eyes protocol. Merging evaluators approaches overflow.

### Recommended: 8 Agents + 1 Team-Lead = 9 Total (UNCHANGED)

The current 8-agent design is correct. The issue is NOT agent count -- it's per-agent input management. Apply Changes 1-5 above.

---

## CONTEXT-THIN AGENT DESIGN PRINCIPLES

Based on this analysis, every agent in the team should follow these principles:

### Principle 1: Slice, Don't Duplicate
No agent reads the full master prompt. Each reads ONLY its slice. The team-lead pre-creates slices as files.

### Principle 2: Files Over Messages
Full outputs go to files. Team messages are summaries (< 500 words). The team-lead reads files when it needs details.

### Principle 3: Input Budget < 50K Tokens
Every agent's total input (system prompt + instructions + reference files + received messages) MUST stay under 50K tokens. This leaves 50% headroom for output generation and quality maintenance.

### Principle 4: No Redundant Reads
If information is in the planner's output, the builder does NOT re-read the source files. The planner's output is the builder's single source of truth.

### Principle 5: Pre-Extract, Don't Inline
Large reference files (crown jewels, component CSS) should be pre-processed into small extracts. Reading 200 lines of extracted CSS data is better than reading 1,200 lines of full HTML.

### Principle 6: One Task, One Context
Each agent does exactly one thing. The planner plans. The builder builds. The auditor audits. No agent accumulates cross-phase context.

### Principle 7: Team-Lead Is Router, Not Reader
The team-lead routes instructions and checks statuses. It does NOT read full outputs from every agent. It reads verdict summaries and makes GO/NO-GO decisions.

---

## REVISED PER-AGENT BUDGETS (After Changes)

| Agent | Input (est.) | Output (est.) | Total | Budget % | Verdict |
|-------|-------------|---------------|-------|----------|---------|
| team-lead | ~30K | ~10K | ~40K | 50% | SAFE |
| content-selector | ~11K | ~3K | ~14K | 17% | SAFE |
| planner | ~40K | ~15K | ~55K | 69% | SAFE |
| builder | ~33K | ~13K | ~46K | 58% | SAFE |
| programmatic-auditor | ~28K | ~5K | ~33K | 41% | SAFE |
| perceptual-auditor | ~43K | ~9K | ~52K | 65% | SAFE |
| comparative-auditor | ~40K | ~5K | ~45K | 56% | SAFE |
| novelty-evaluator | ~28K | ~5K | ~33K | 41% | SAFE |
| verdict-synthesizer | ~32K | ~5K | ~37K | 46% | SAFE |

**All agents under 70% budget after changes. Zero overflow risk.**

---

## ACTION ITEMS FOR PLAN REVISION

1. **[CRITICAL]** Add a "Phase 0.5: Prompt Slicing" step where the team-lead creates agent-specific prompt slices BEFORE spawning any agents.
2. **[CRITICAL]** Remove SKILL.md from planner's reading list (redundant with master prompt content).
3. **[MODERATE]** Remove semantic-rules.md and usage-criteria.md from planner's reading list (move to evaluator slice).
4. **[MODERATE]** Add crown jewel CSS pre-extraction step before Phase 4.
5. **[MODERATE]** Add message size protocol (< 500 words) to ALL agent prompts.
6. **[LOW]** Add explicit "DO NOT read files not listed in your prompt" to each agent instruction.

---

## CONCLUSION

The plan's team topology is fundamentally sound. The 8-agent design with Two-Instance pattern is correct. The SINGLE critical issue is the **planner agent's input overload** (~88-111K tokens from reading the full master prompt + all reference files). This is solved by pre-slicing the master prompt into agent-specific views.

With the 5 recommended changes applied, ALL agents operate under 70% context budget. Zero compaction risk. Zero overflow risk.

The team-lead accumulation risk is real but manageable with message discipline. The novelty-evaluator risk is eliminated by pre-extracting crown jewel CSS.

**Bottom line:** Don't change the team. Change what each agent READS.
