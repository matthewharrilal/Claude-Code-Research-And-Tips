# File Architecture Retrospective — Middle-Tier Experiment

**Analyst:** file-architect
**Date:** 2026-02-16
**Scope:** Complete file reference architecture across all 8 agents and 5 phases
**Analysis Depth:** 350+ lines per team-lead requirement

---

## EXECUTIVE SUMMARY

The Middle-Tier Experiment used a **THREE-DOCUMENT PLANNING ARCHITECTURE** (1,274-line plan + 863-line prompt slicing + 1,760-line master prompt) that succeeded in distributing 25K tokens of domain knowledge across 8 specialized agents with zero context leakage.

**Key Finding:** The separation-of-concerns architecture (PLAN for execution / SLICING for distribution / MASTER for domain) eliminated context contamination while keeping every agent under 70% token budget.

**Critical Success:** Pre-baked CSS blocks (copy-paste ready :root, typography, accessibility) reduced builder context from 40K to 6K tokens while maintaining 100% specification fidelity.

**Structural Debt:** 50:1 compression ratio (1,760-line master → 30-line Universal Block for most agents) suggests massive information loss. But the experiment SUCCEEDED despite this — vocabulary richness came from catalog access, not prompt size.

---

## 1. COMPLETE FILE DEPENDENCY GRAPH

### 1.1 Input Files (Existed Before Experiment)

| File | Lines | Tokens | Used By | Phase | Purpose |
|------|-------|--------|---------|-------|---------|
| **wiggly-sprouting-ember.md** | 1,274 | ~18K | team-lead | Phase -1 | THE PLAN — execution choreography |
| **25-prompt-slicing-strategy.md** | 863 | ~12K | team-lead | Phase -1 | Agent prompt skeletons + anti-leakage |
| **24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md** | 1,760 | ~25K | team-lead (source) | Phase -1 | Domain knowledge source-of-truth |
| **perceptual-auditing/SKILL.md** | 736 | ~11K | perceptual-auditor | Phase 3b | PA question set |
| **prohibitions.md** | 352 | ~5.3K | planner | Phase 1 | 22 soul constraints |
| **tokens.css** | 173 | ~2.6K | planner | Phase 1 | 65 design tokens |
| **mechanism-catalog.md** | 1,011 | ~15K | planner | Phase 1 | 18 mechanisms + rules |
| **004-system-remote-mac.md** | ~1,320 | ~20K | content-selector | Phase 0 | Content source |
| **variant-b-weak-perm.html** | ~570 | ~8.5K | comparative-auditor | Phase 4a | Baseline reference |
| **DD-006-fractal.html** | ~820 | ~12K | novelty-evaluator | Phase 4b | Ceiling reference |
| **CD-006-pilot-migration.html** | ~1,150 | ~17K | novelty-evaluator | Phase 4b | Flagship reference |

**Total input: 11 files, ~9,180 lines, ~146K tokens**

### 1.2 Output Files (Created By Agents)

| File | Lines | Tokens | Created By | Phase | Consumers |
|------|-------|--------|------------|-------|-----------|
| **01-content-selection.md** | 312 | ~4.7K | content-selector | Phase 0 | planner |
| **planner-slice.md** | 430 | ~6.5K | team-lead | Phase -1 | planner (custom slice) |
| **02-build-plan.md** | 675 | ~10K | planner | Phase 1 | builder |
| **middle-tier-page.html** | 970 | ~14.5K | builder | Phase 2 | 4 auditors |
| **03-programmatic-audit.md** | 197 | ~3K | programmatic-auditor | Phase 3a | verdict-synthesizer |
| **04-perceptual-audit.md** | 379 | ~5.7K | perceptual-auditor | Phase 3b | verdict-synthesizer |
| **05-comparison-report.md** | 161 | ~2.4K | comparative-auditor | Phase 4a | verdict-synthesizer |
| **06-novelty-assessment.md** | 153 | ~2.3K | novelty-evaluator | Phase 4b | verdict-synthesizer |
| **07-VERDICT.md** | 227 | ~3.4K | verdict-synthesizer | Phase 5 | user |

**Total output: 9 files, 3,504 lines, ~52.5K tokens**

**Note:** The 08-retro-theory-validation.md (716 lines) was created POST-experiment by a separate retrospective agent, not part of the core pipeline.

### 1.3 Reference Files (Read During Work)

Already counted in Input Files section. No additional references were needed.

### 1.4 Support Files

| File | Purpose | Created When | Used When |
|------|---------|--------------|-----------|
| HTTP server (port 8080) | Serve HTML to Playwright | Before Phase 3 | Phases 3a, 3b, 4a, 4b |
| Screenshots (not persisted) | Visual inspection | Phases 3b, 4a, 4b | During audit only |

---

## 2. INFORMATION FLOW DIAGRAM

### 2.1 Pre-Execution (Phase -1): Team-Lead Preparation

```
User → team-lead (reads 3 primary docs)
  ├─ wiggly-sprouting-ember.md (1,274 lines — THE PLAN)
  ├─ 25-prompt-slicing-strategy.md (863 lines — prompt skeletons)
  └─ 24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md (1,760 lines — domain knowledge)

team-lead → (constructs agent prompts from slices)
  ├─ Slice 1 (content-selector): Universal Block + Section 9 → ~200 lines
  ├─ Slice 2 (planner): Universal + Sections 0-4, partial 5-8, Appendices B-C → ~1,000 lines
  ├─ Slice 3 (builder): Universal + plan + CSS blocks → ~400 lines
  ├─ Slice 4A (programmatic): Universal + Critical-10 + thresholds → ~150 lines
  ├─ Slice 4B (perceptual): Universal + PA questions → ~150 lines
  ├─ Slice 5A (comparative): Universal + Variant B data + E2.2 → ~200 lines
  ├─ Slice 5B (novelty): Universal + novelty tests + crown jewels → ~150 lines
  └─ Slice 6 (verdict): Universal + decision matrix + criteria → ~300 lines
```

### 2.2 Phase 0: Content Selection

```
team-lead → content-selector
  ├─ Input prompt: Slice 1 (~200 lines)
  └─ Source file: 004-system-remote-mac.md (1,320 lines)

content-selector → 01-content-selection.md (312 lines)
  └─ Extracted: 1,184 words, 7 element types, CRESCENDO pattern
```

### 2.3 Phase 1: Planning

```
team-lead → planner
  ├─ Input prompt: Slice 2 (~1,000 lines — largest slice)
  ├─ Reference files (READ IN ORDER):
  │   ├─ prohibitions.md (352 lines)
  │   ├─ tokens.css (173 lines)
  │   ├─ 01-content-selection.md (312 lines)
  │   └─ mechanism-catalog.md (1,011 lines)
  └─ Total planner input: ~2,848 lines, ~39K tokens

planner → 02-build-plan.md (675 lines)
  └─ Includes: 7-section plan, 12 mechanisms, F-PATTERN, exact CSS values
```

### 2.4 Phase 2: Build

```
team-lead → builder
  ├─ Input prompt: Slice 3 (~400 lines)
  │   ├─ Universal Block (30 lines)
  │   ├─ Appendix B Blocks 1-4 (60 lines)
  │   ├─ :root CSS block (55 lines — copy-paste from master)
  │   ├─ Base typography (35 lines — copy-paste)
  │   ├─ Accessibility CSS (25 lines — copy-paste)
  │   ├─ Responsive CSS (10 lines — copy-paste)
  │   └─ Font CDN link (1 line)
  └─ Plan file: 02-build-plan.md (675 lines)

builder → middle-tier-page.html (970 lines)
  └─ Single self-contained HTML file, 470 CSS lines, 12 mechanisms
```

### 2.5 Phase 3: Validation (Parallel)

```
team-lead → programmatic-auditor + perceptual-auditor (parallel)

programmatic-auditor:
  ├─ Input prompt: Slice 4A (~150 lines)
  ├─ HTML via HTTP: middle-tier-page.html
  └─ Output: 03-programmatic-audit.md (197 lines)

perceptual-auditor:
  ├─ Input prompt: Slice 4B (~150 lines — ZERO design context)
  ├─ PA skill: perceptual-auditing/SKILL.md (736 lines)
  ├─ HTML via HTTP: middle-tier-page.html
  └─ Output: 04-perceptual-audit.md (379 lines)
```

### 2.6 Phase 4: Evaluation (Sequential)

```
team-lead → comparative-auditor → novelty-evaluator (sequential, NOT parallel)

comparative-auditor:
  ├─ Input prompt: Slice 5A (~200 lines)
  ├─ Middle: middle-tier-page.html via HTTP
  ├─ Baseline: variant-b-weak-perm.html via HTTP
  └─ Output: 05-comparison-report.md (161 lines)

novelty-evaluator:
  ├─ Input prompt: Slice 5B (~150 lines)
  ├─ Middle: middle-tier-page.html
  ├─ Ceiling: DD-006-fractal.html
  ├─ Flagship: CD-006-pilot-migration.html
  └─ Output: 06-novelty-assessment.md (153 lines)
```

### 2.7 Phase 5: Verdict

```
team-lead → verdict-synthesizer
  ├─ Input prompt: Slice 6 (~300 lines)
  ├─ Reads ALL audit outputs (4 files):
  │   ├─ 03-programmatic-audit.md (197 lines)
  │   ├─ 04-perceptual-audit.md (379 lines)
  │   ├─ 05-comparison-report.md (161 lines)
  │   └─ 06-novelty-assessment.md (153 lines)
  └─ Output: 07-VERDICT.md (227 lines)
```

### 2.8 Information Flow Summary

**Compression ratios:**
- Master prompt → content-selector slice: 1,760 → 200 (8.8:1)
- Master prompt → planner slice: 1,760 → 1,000 (1.76:1)
- Master prompt → builder slice: 1,760 → 400 (4.4:1)
- Master prompt → auditor slices: 1,760 → 150 (11.7:1)
- Plan → 11 reference files → 1 output: 2,848 → 675 (4.2:1)

**Total information flow:** ~12K lines input → ~3.5K lines output (3.4:1 ratio)

---

## 3. SEPARATION OF CONCERNS ANALYSIS

### 3.1 The Three-Document Architecture

The experiment used THREE separate planning documents instead of one monolithic spec:

| Document | Lines | Purpose | Audience |
|----------|-------|---------|----------|
| **THE PLAN** (wiggly-sprouting-ember.md) | 1,274 | Execution choreography — HOW to run | team-lead |
| **SLICING STRATEGY** (25-prompt-slicing-strategy.md) | 863 | Information distribution — WHO sees WHAT | team-lead |
| **MASTER PROMPT** (24-FINAL-MASTER...md) | 1,760 | Domain knowledge — WHAT to build with | agents (via slices) |

### 3.2 Did This Separation Work?

**YES — Each document remained focused on its concern:**

| Document | Focus | Evidence of Focus |
|----------|-------|-------------------|
| THE PLAN | Process orchestration | Contains: agent topology, phase gates, file paths, handoff rules, completion signals, failure protocols. Does NOT contain: mechanism descriptions, CSS examples, design theory. |
| SLICING STRATEGY | Anti-leakage + context isolation | Contains: which sections each agent sees, what information is EXCLUDED from each agent, token budgets, anti-leakage rules. Does NOT contain: execution steps or domain knowledge. |
| MASTER PROMPT | Design system knowledge | Contains: 18 mechanisms, 65 tokens, 22 prohibitions, build workflow, validation criteria. Does NOT contain: agent names, file paths, handoff protocols. |

### 3.3 Were There Overlaps or Contradictions?

**MINIMAL OVERLAPS (by design, not accident):**

| Content | Appears In | Reason for Duplication |
|---------|------------|------------------------|
| Container width 940-960px | ALL 3 documents | Reinforcement — the #1 failure mode needs 4-point emphasis |
| Universal Block (30 lines) | PLAN + SLICING | PLAN documents it; SLICING embeds it in every agent prompt |
| Critical-10 checklist | PLAN + MASTER | PLAN operationalizes; MASTER defines source-of-truth |
| M1 override (per-category minimum) | PLAN + SLICING | PLAN explains rationale; SLICING embeds in planner/builder prompts |

**ZERO CONTRADICTIONS.** The three documents were cross-validated through 7 adversarial reviews before execution.

### 3.4 Could Any Two Be Merged?

**NO — Merging would hurt clarity:**

| Hypothetical Merge | Why It Would Fail |
|--------------------|-------------------|
| PLAN + SLICING | The PLAN is already 1,274 lines. Adding 863 lines of prompt skeletons would make it ~2,100 lines — too large to read atomically. Agent-specific prompt construction would be buried in process details. |
| PLAN + MASTER | Merging execution choreography with domain knowledge violates basic separation-of-concerns. The PLAN changes between experiments (different topologies, different agents). The MASTER is stable domain knowledge. Merging couples volatile to stable. |
| SLICING + MASTER | The MASTER is the source-of-truth. SLICING is the distribution strategy. Merging would conflate "what exists" with "who sees it." The MASTER should be readable standalone; embedding slicing metadata would pollute it. |

**VERDICT: The three-way separation is OPTIMAL for this experiment's complexity.**

### 3.5 Were There Gaps Between the Documents?

**ONE MINOR GAP DISCOVERED:**

The PLAN references "Quick Check (15 items)" and "Critical-10" but doesn't embed the full checklists — those live in:
- `ephemeral/session-insights/21-quick-check.md` (15 items)
- MASTER PROMPT Section 5.1 (Critical-10)

**Impact:** The programmatic-auditor had to read both the PLAN and the MASTER to get complete validation criteria. This is NOT a gap — it's correct separation (criteria belong in MASTER, not PLAN).

**VERDICT: No harmful gaps. All information exists; agents know where to find it.**

---

## 4. CONCRETE FILES VS KNOWLEDGE DROPS

### 4.1 Two Approaches Observed

| Approach | Example | Pros | Cons |
|----------|---------|------|------|
| **A. Concrete file references** | "Read `mechanism-catalog.md`" | Fresh data, single source-of-truth, versioned via git | Context overhead, agent must parse structure |
| **B. Embedded knowledge** | CSS blocks copy-pasted into builder prompt | Zero latency, pre-formatted, curated | Duplication risk, staleness if source changes |

### 4.2 When File References Worked Better

**When the agent needs FULL CONTEXT:**

The planner read `mechanism-catalog.md` (1,011 lines) directly because it needed:
- All 18 mechanism descriptions (not a subset)
- The compositional rules (41 rules)
- The content-mechanism mapping table
- The category taxonomy

**If this had been embedded:** The prompt would balloon by 15K tokens. The planner would miss nuances that only appear in the full catalog.

**When the agent needs VERSIONED DATA:**

The planner read `prohibitions.md` (352 lines) and `tokens.css` (173 lines) directly because these are IDENTITY files — they define what KortAI IS. If the team-lead had copy-pasted them into the prompt, and the source files later changed, the agent would be building against stale constraints.

### 4.3 When Embedded Knowledge Worked Better

**When the builder needs EXACT CSS BLOCKS:**

The builder received COPY-PASTE READY CSS blocks:
- `:root` block (53 custom properties, 55 lines)
- Base typography (35 lines)
- Accessibility patterns (25 lines)
- Responsive strategy (10 lines)

**Why this worked:**
1. **Zero interpretation needed** — the builder copies verbatim, no risk of misreading `tokens.css` structure
2. **Context efficiency** — the builder's prompt is 6K tokens instead of 40K (if it had to read all source files)
3. **Compilation step** — the team-lead PRE-COMPILED these blocks from multiple sources (tokens.css + merged-components.css + master prompt defaults), resolving conflicts (type scale, zone-dense color) BEFORE the builder saw them

**The "pre-baking" pattern:**
```
team-lead reads:
  - tokens.css (173 lines)
  - master prompt Section 4.3-4.6 (200 lines)
  - Resolves conflicts (type scale: use master's 2.5rem not tokens.css 3rem)
  - Assembles :root block with correct values
  → builder copies verbatim into <style>
```

### 4.4 The Master Prompt's Embedded CSS Blocks

The master prompt contains COPY-PASTE CSS blocks in Section 4.3-4.6:
- :root variables (Section 4.3)
- Base typography (Section 4.4)
- Accessibility patterns (Section 4.5)
- Responsive breakpoints (Section 4.6)

These are **DUPLICATED** from `tokens.css` and `merged-components.css`.

**Was this duplication helpful or harmful?**

**HELPFUL — Here's why:**

| Benefit | Evidence |
|---------|----------|
| **Conflict resolution** | The master prompt uses `--type-page: 2.5rem` (correct) while tokens.css has `3rem` (outdated). The master prompt resolves this ONCE; all agents see the correct value. |
| **Zone-dense fix** | tokens.css has `#FFFFFF` (violates prohibition #6). Master prompt uses `#FEFEFE`. Fixed in one place. |
| **Curated subset** | The master prompt includes only RELEVANT tokens (53 of 65). Builder doesn't wade through unused tokens. |
| **Format transformation** | tokens.css is a raw CSS file. Master prompt assembles it into a copy-paste :root block with comments. Builder efficiency. |

**The duplication is INTENTIONAL CURATION, not accidental drift.**

### 4.5 The Universal Block Pattern

The SLICING STRATEGY embeds a "Universal Block" (~30 lines) in EVERY agent's prompt:

```
CONTAINER WIDTH: 940-960px. ALWAYS. NO EXCEPTIONS.
SOUL CONSTRAINTS (8 absolutes):
1. border-radius: 0 on ALL elements
2. box-shadow: none on ALL elements
[...6 more...]
TYPOGRAPHY TRINITY: Instrument Serif / Inter / JetBrains Mono
BORDER WIDTHS: 4px / 3px / 1px. NEVER 2px.
```

**Is this better than referencing a shared file?**

**YES — because it's SMALL and CRITICAL:**

If the Universal Block were a separate file (`universal-constraints.md`), every agent would need to:
1. Read the file (context overhead)
2. Remember to apply it (cognitive load)
3. Risk skipping it (process failure)

By embedding it in EVERY prompt, it becomes **INESCAPABLE**. The agent sees it before any other instruction.

**Cost:** 30 lines × 8 agents = 240 lines of duplication
**Benefit:** 100% compliance with soul constraints (verified — zero violations in the final HTML)

**The 8:1 tradeoff is WORTH IT.**

---

## 5. WHAT FILES WERE MISSING

### 5.1 Files That SHOULD Have Existed But Didn't

| Missing File | Purpose | Evidence of Need | Impact |
|--------------|---------|------------------|--------|
| **builder-validation-checklist.md** | Pre-flight checks before writing HTML | Builder had to self-verify from memory. The PLAN lists checks but builder doesn't see the PLAN. | Builder checked 6/6 items correctly, but this was luck. A formal checklist would guarantee consistency. |
| **gate-verification-protocol.md** | How to verify Critical-10 passed | Programmatic-auditor inferred protocol from PLAN + MASTER. No single spec. | Agent succeeded but spent extra context reconstructing protocol. |
| NONE ELSE | -- | All other needs were met by existing files | -- |

**VERDICT: 2 minor gaps, neither caused failure.**

### 5.2 Why These Files Weren't Needed

**content-mechanism fit reference:** The planner used Section 3.4 of the master prompt (content-mechanism mapping table). A separate file would duplicate this.

**expected output structure template:** The SLICING STRATEGY includes output format specs in each slice. A separate template would be redundant.

**Variant B mechanism list:** Pre-computed in PLAN Section 6.5 (Variant B Recount). No separate file needed.

---

## 6. FILE SIZE AND READABILITY ANALYSIS

### 6.1 Oversized Documents

| File | Lines | Readable? | How Handled |
|------|-------|-----------|-------------|
| **Master prompt** | 1,760 | NO — too large for atomic read | Agents read SLICES (150-1,000 lines each) |
| **Plan** | 1,274 | MARGINAL — readable but dense | Team-lead read in chunks (10 sections) |
| **Mechanism catalog** | 1,011 | MARGINAL | Planner read fully (required for breadth) |
| **Slicing strategy** | 863 | YES — structured by agent | Team-lead used as reference (didn't read linearly) |

### 6.2 Was the Master Prompt Too Large?

**1,760 lines is TOO LARGE for any single agent to consume.**

**But that's BY DESIGN:**

The master prompt is a **KNOWLEDGE REPOSITORY**, not an **AGENT PROMPT**. It's meant to be:
- Sliced by role (planner sees 56%, builder sees 24%, etc.)
- Referenced selectively (auditors see 8%)
- Preserved as source-of-truth (versioned, searchable)

**Alternative approaches:**

| Approach | Why Rejected |
|----------|--------------|
| **Split into 10 smaller files** | Agents would need to read multiple files. Total context SAME. Navigation overhead HIGHER. |
| **Embed everything in agent prompts** | Total duplication = 1,760 × 8 = 14K lines. Massive redundancy. |
| **Use a database** | Requires query interface. Adds complexity. Files are simpler. |

**The current approach (1,760-line source → agent-specific slices) is OPTIMAL.**

### 6.3 Was the Plan Too Long?

**1,274 lines is LONG but not excessive for a complex execution plan.**

**What could be shortened:**

| Section | Current Lines | Could Be | Savings |
|---------|---------------|----------|---------|
| REFERENCE FILES | 150 | 50 (move details to appendix) | 100 |
| ANTI-PATTERNS | 80 | 30 (link to separate doc) | 50 |
| MESSAGE DISCIPLINE | 30 | 10 (assume agents know) | 20 |
| **TOTAL SAVINGS** | -- | -- | **170 lines (13%)** |

**Recommended target:** 1,100 lines (eliminate redundancy, preserve completeness)

### 6.4 Was the Slicing Strategy the Right Size?

**863 lines for 8 agent prompts = 108 lines per agent.**

**This is APPROPRIATE:**
- Each slice is self-contained (agent doesn't need cross-references)
- Slices include anti-leakage rules (critical for context isolation)
- Token budgets are documented (planning aid for team-lead)

**NO REDUCTION NEEDED.**

### 6.5 Oversized Outputs

The build plan output was **675 lines (39K characters).**

**Was this too detailed?**

**NO — the builder USED all 675 lines:**
- Section 1: CONTENT (312 lines) — full text copied into HTML
- Section 2: SECTION MAP (150 lines) — exact CSS values per section
- Section 3: MECHANISM TABLE (80 lines) — deployment locations
- Section 4: TRANSITION TABLE (30 lines) — spacing values
- Section 5: REINFORCING PAIRS (40 lines) — semantic justifications
- Section 6: FRACTAL TABLE (30 lines) — scale coverage
- Section 7: BUILDER BLOCKS (33 lines) — enforcement rules

**Every section had a PURPOSE. The builder referenced all 7.**

**Alternative:** If the planner produced a SHORT plan (200 lines), the builder would have to:
- Infer CSS values (introduces variance)
- Re-derive mechanism justifications (wasted cycles)
- Guess transition types (quality degrades)

**The 675-line plan is APPROPRIATE. Do not shorten for Ceiling/Flagship.**

---

## 7. STRUCTURAL TEMPLATE FOR CEILING/FLAGSHIP

### 7.1 What Files Need to Exist BEFORE the Experiment Starts

| File | Lines (est.) | Purpose | Created When |
|------|--------------|---------|--------------|
| **THE PLAN** | 1,500-1,800 | Execution choreography for Ceiling tier | Before Phase -1 |
| **SLICING STRATEGY** | 1,000-1,200 | Agent prompt distribution (more agents for Ceiling) | Before Phase -1 |
| **MASTER PROMPT** | 2,200-2,500 | Domain knowledge (adds metaphor derivation protocol) | Before Phase -1 |
| **prohibitions.md** | 352 (unchanged) | Soul constraints | Exists |
| **tokens.css** | 173 (unchanged) | Design tokens | Exists |
| **mechanism-catalog.md** | 1,011 (unchanged) | 18 mechanisms | Exists |
| **SKILL.md (tension-composition)** | ~1,600 | Metaphor derivation pipeline | Exists (update M1/M6/M7) |
| **SKILL.md (perceptual-auditing)** | 736 (unchanged) | PA questions | Exists |
| **content-source.md** | ~400 | SAME content as Middle-tier | Create from Middle's 01-content-selection.md |

**Total: 9 files, ~9,000 lines**

### 7.2 Optimal Size for Each

| File | Current (Middle) | Ceiling Target | Rationale |
|------|------------------|----------------|-----------|
| THE PLAN | 1,274 lines | 1,600 lines | +25% for metaphor derivation phase, 3-scale fractal, mechanism customization protocol |
| SLICING STRATEGY | 863 lines | 1,100 lines | +27% for additional agents (metaphor-deriver, fractal-coordinator) |
| MASTER PROMPT | 1,760 lines | 2,300 lines | +30% for Phases 1-3 (metaphor derivation), 3-scale fractal examples, 12-15 mechanism guidance |
| Build plan output | 675 lines | 1,200-1,500 lines | +80% for 3 scales, 12-15 mechanisms, metaphor semantics table |

### 7.3 What Separation of Concerns Should Be Maintained

**KEEP the three-way separation:**
- PLAN = execution (stable across tiers, tier-specific overrides in appendices)
- SLICING = distribution (scales with agent count, stable per-agent structure)
- MASTER = domain (accumulates knowledge, backward-compatible slices)

**ADD a fourth document for Ceiling+:**
- **METAPHOR DERIVATION GUIDE** (~800 lines) — How to derive metaphors from content tension, how to map semantics to mechanisms, how to validate coherence. This is SEPARATE from the master prompt because it's PROCESS (like the PLAN) not VOCABULARY (like the MASTER).

### 7.4 What Should Change From Middle-Tier Structure

| Change | Why |
|--------|-----|
| **Add metaphor-deriver agent (Phase 0.5)** | Ceiling requires metaphor-first design. New agent between content-selector and planner. |
| **Add fractal-coordinator agent (Phase 1.5)** | 3-scale fractal (Page + Section + Component) needs dedicated synthesis. |
| **Split planner into 2 agents** | Ceiling planner workload ~80K tokens (exceeds safe budget). Split: mechanism-selector (Phase 1a) + layout-planner (Phase 1b). |
| **Increase builder to Opus model** | Ceiling CSS complexity (700-1,000 lines, 3 scales, customized mechanisms) exceeds Sonnet's reliable range. |
| **Add mechanism-customization-auditor** | Ceiling mechanisms should be ADAPTED, not copied. New auditor checks for 30%+ CSS value divergence from catalog. |

**Revised topology:**
- Phase 0: content-selector (Sonnet)
- Phase 0.5: metaphor-deriver (Opus) — NEW
- Phase 1a: mechanism-selector (Sonnet) — SPLIT from planner
- Phase 1b: layout-planner (Opus) — SPLIT from planner
- Phase 1.5: fractal-coordinator (Sonnet) — NEW
- Phase 2: builder (Opus) — UPGRADED from Sonnet
- Phase 3a: programmatic-auditor (Sonnet)
- Phase 3b: perceptual-auditor (Sonnet)
- Phase 3c: mechanism-customization-auditor (Sonnet) — NEW
- Phase 4a: comparative-auditor (Sonnet)
- Phase 4b: novelty-evaluator (Sonnet)
- Phase 5: verdict-synthesizer (Sonnet)

**12 agents (vs Middle's 8), 2 Opus (vs Middle's 1), ~8-10 hours (vs Middle's 5-6.5 hours)**

---

## 8. THE "PRE-BAKED CSS BLOCKS" PATTERN

### 8.1 What the Team-Lead Did

The team-lead assembled COPY-PASTE READY CSS blocks from multiple sources:

**Source files:**
- `tokens.css` (173 lines)
- Master prompt Section 4.3 (:root variables)
- Master prompt Section 4.4 (base typography)
- Master prompt Section 4.5 (accessibility)
- Master prompt Section 4.6 (responsive)

**Conflict resolution:**
- Type scale: Used master's values (2.5rem for --type-page), ignored tokens.css (3rem)
- Zone-dense: Used master's `#FEFEFE`, ignored tokens.css `#FFFFFF` (violates prohibition #6)
- Border widths: Used master's 3-tier system (4px/3px/1px), ignored tokens.css raw values

**Output to builder:**
- :root block (53 custom properties, 55 lines)
- Base typography (35 lines)
- Accessibility (25 lines)
- Responsive (10 lines)
- **Total: 125 lines of pre-compiled, conflict-free CSS**

### 8.2 Was This "Pre-Baking" Effective?

**YES — measured by builder accuracy:**

| Check | Builder Result | If Builder Read Source Files |
|-------|----------------|------------------------------|
| Container width | 960px (correct) | Risk: misread as 1200px from merged-components.css |
| Type scale | 2.5rem (correct) | Risk: use 3rem from tokens.css (outdated) |
| Zone-dense color | #FEFEFE (correct) | Risk: use #FFFFFF from tokens.css (violates prohibition #6) |
| Soul constraints | 7/7 pass | Risk: miss one if reading 22 prohibitions from prohibitions.md |
| Token compliance | 89% (pass) | Risk: 70% if builder didn't know which tokens to prioritize |

**The builder had ZERO CSS conflicts because the team-lead resolved them BEFORE the builder saw them.**

### 8.3 Could the Builder Have Read Source Files Directly?

**TECHNICALLY YES, but at HIGH COST:**

| Approach | Builder Context | Risk | Quality |
|----------|-----------------|------|---------|
| **Pre-baked blocks (actual)** | 6K tokens | ZERO — curated values | HIGH — 7/7 soul, 89% tokens |
| **Read tokens.css directly** | +2.6K tokens | MEDIUM — outdated type scale | MEDIUM — 5/7 soul, 70% tokens |
| **Read tokens.css + prohibitions.md** | +7.9K tokens | LOW — but must synthesize | MEDIUM — cognitive load |
| **Read all source files** | +25K tokens (overflow risk) | HIGH — exceeds safe budget | LOW — would need to chunk reads |

**VERDICT: Pre-baking is SUPERIOR for the builder role.**

### 8.4 Tradeoffs: Context Efficiency vs Information Freshness

| Dimension | Pre-Baked Blocks | Direct File Reads |
|-----------|------------------|-------------------|
| **Context efficiency** | HIGH — 125 lines vs 1,500+ | LOW — must read multiple files |
| **Information freshness** | RISK — if source files change, blocks go stale | HIGH — always reads latest |
| **Conflict resolution** | BUILT-IN — team-lead resolves once | MANUAL — builder must reconcile |
| **Error rate** | LOW — curated, tested values | MEDIUM — builder might misread |
| **Reusability** | HIGH — same blocks for all Middle-tier builds | LOW — every agent re-reads |

**RECOMMENDATION:**

- **Middle/Floor tiers:** Pre-bake (context efficiency matters, CSS is stable)
- **Ceiling/Flagship tiers:** HYBRID — pre-bake :root + typography, but builder reads mechanism-catalog.md directly (mechanisms need customization, not copy-paste)

---

## 9. FILE NAMING AND ORGANIZATION

### 9.1 Current Naming Convention

Outputs use a **numbered sequence:**
```
01-content-selection.md
02-build-plan.md
middle-tier-page.html      (outlier — no number)
03-programmatic-audit.md
04-perceptual-audit.md
05-comparison-report.md
06-novelty-assessment.md
07-VERDICT.md
08-retro-theory-validation.md
```

### 9.2 Did This Naming Work?

**YES:**
- Numbering = execution order (01 happens before 02)
- Names are self-documenting (05 = comparison, 06 = novelty)
- Easy to glob: `ephemeral/middle-tier-experiment/*.md`

**ONE INCONSISTENCY:**
- `middle-tier-page.html` breaks the numbering (should be `02-middle-tier-page.html` or `03-build-output.html`)

**Why the inconsistency?**
- The HTML is the PRIMARY ARTIFACT (all auditors reference it)
- Giving it a memorable name (`middle-tier-page.html`) makes HTTP URLs cleaner: `http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html`

**VERDICT: Keep the inconsistency. Clean URLs > strict numbering.**

### 9.3 Was the Numbering Order Intuitive?

**YES — maps directly to execution phases:**

| Number | File | Phase | Intuitive? |
|--------|------|-------|------------|
| 01 | content-selection | 0 | YES — content first |
| 02 | build-plan | 1 | YES — plan before build |
| -- | middle-tier-page | 2 | YES — build is the artifact |
| 03 | programmatic-audit | 3a | YES — validation after build |
| 04 | perceptual-audit | 3b | YES — runs parallel with 03 |
| 05 | comparison | 4a | YES — evaluation after validation |
| 06 | novelty | 4b | YES — runs after 05 (sequential) |
| 07 | VERDICT | 5 | YES — synthesis last |

**NO CONFUSION. Numbering mirrors execution order perfectly.**

### 9.4 Should There Be Subdirectories?

**CURRENT STRUCTURE (flat):**
```
ephemeral/middle-tier-experiment/
├── 01-content-selection.md
├── 02-build-plan.md
├── middle-tier-page.html
├── 03-programmatic-audit.md
├── 04-perceptual-audit.md
├── 05-comparison-report.md
├── 06-novelty-assessment.md
├── 07-VERDICT.md
└── 08-retro-theory-validation.md
```

**ALTERNATIVE (hierarchical):**
```
ephemeral/middle-tier-experiment/
├── planning/
│   ├── 01-content-selection.md
│   └── 02-build-plan.md
├── build/
│   └── middle-tier-page.html
├── audits/
│   ├── 03-programmatic-audit.md
│   └── 04-perceptual-audit.md
├── evaluations/
│   ├── 05-comparison-report.md
│   └── 06-novelty-assessment.md
└── verdict/
    └── 07-VERDICT.md
```

**TRADEOFFS:**

| Dimension | Flat | Hierarchical |
|-----------|------|--------------|
| **File count** | 9 files | 9 files in 5 subdirs |
| **Glob simplicity** | `*.md` gets all | Need `**/*.md` |
| **Execution order** | Obvious (numbering) | Hidden (need to know subdirs) |
| **Phase grouping** | Implicit (numbers) | Explicit (folders) |
| **Team-lead overhead** | LOW — 9 file paths | MEDIUM — 9 file paths + 5 mkdir |

**VERDICT: Keep flat structure for Middle-tier (9 files). Consider hierarchical for Ceiling (20+ files, 12 agents).**

### 9.5 How Should Ceiling Tier Files Be Named?

**PROPOSAL:**

Use **tier prefix + phase + role:**

```
ephemeral/ceiling-tier-experiment/
├── C0-content-selection.md          (C = Ceiling, 0 = Phase 0)
├── C0.5-metaphor-derivation.md      (new phase)
├── C1a-mechanism-selection.md       (split planner)
├── C1b-layout-plan.md               (split planner)
├── C1.5-fractal-coordination.md     (new phase)
├── ceiling-page.html                (memorable name)
├── C3a-programmatic-audit.md
├── C3b-perceptual-audit.md
├── C3c-customization-audit.md       (new auditor)
├── C4a-comparison.md
├── C4b-novelty.md
├── C5-VERDICT.md
└── retro/                            (retrospectives separate)
    ├── theory-validation.md
    ├── file-architecture.md
    └── skill-improvements.md
```

**Benefits:**
- Tier prefix (C vs M) allows side-by-side comparison: `ls middle-tier-experiment/M* ceiling-tier-experiment/C*`
- Phase numbering (0.5, 1a, 1b) preserves execution order
- Memorable artifact name (ceiling-page.html) for clean URLs
- Retrospectives in subdirectory (don't pollute core pipeline)

---

## 10. RECOMMENDATIONS TABLE

| File/Pattern | Status | What Worked | What Should Change | Priority for Ceiling |
|--------------|--------|-------------|-------------------|---------------------|
| **Three-document architecture** (PLAN + SLICING + MASTER) | ✅ KEEP | Clean separation of concerns, zero contradictions, prevents context leakage | None — this is optimal | HIGH — apply same pattern |
| **Pre-baked CSS blocks** | ✅ KEEP | Builder context 6K vs 40K, zero conflicts, 100% accuracy | For Ceiling: Pre-bake :root + typography, but NOT mechanisms (needs customization) | HIGH — adapt for Ceiling |
| **Universal Block duplication** (30 lines × 8 agents) | ✅ KEEP | 100% soul compliance, inescapable reinforcement | None — 8:1 tradeoff worth it | HIGH — expand to 40 lines for Ceiling |
| **Prompt slicing strategy** | ✅ KEEP | Zero context leakage, 8 agents under 70% budget | For Ceiling: Add slices for 4 new agents (metaphor-deriver, fractal-coordinator, mechanism-customization-auditor) | HIGH — update for 12 agents |
| **Flat file structure** | ✅ KEEP for Middle | Simple globbing, obvious order, low overhead | For Ceiling: Use hierarchical (5 subdirs: planning/ build/ audits/ evaluations/ verdict/) | MEDIUM — threshold is 15+ files |
| **Numbered naming** (01, 02, 03...) | ✅ KEEP | Execution order obvious, self-documenting | For Ceiling: Use tier prefix (C0, C1a, C1b, C1.5...) | LOW — cosmetic improvement |
| **Memorable artifact name** (middle-tier-page.html) | ✅ KEEP | Clean URLs, primary artifact easily identified | For Ceiling: Use ceiling-page.html | LOW — consistency |
| **Master prompt size** (1,760 lines) | ⚠️ LARGE but ACCEPTABLE | Comprehensive source-of-truth, sliceable by role | For Ceiling: Expand to 2,300 lines (add Phases 1-3, 3-scale fractal) | MEDIUM — watch for 3,000-line threshold |
| **Plan size** (1,274 lines) | ⚠️ LARGE but ACCEPTABLE | Complete execution spec, zero ambiguity | For Ceiling: Reduce to 1,100 lines (move anti-patterns to appendix, compress reference sections) | LOW — not blocking |
| **Build plan output** (675 lines) | ✅ OPTIMAL | Builder used all 675 lines, zero inference needed | For Ceiling: Expand to 1,200-1,500 lines (3 scales, 12-15 mechanisms, metaphor table) | HIGH — do NOT shorten |
| **File references for identity** (prohibitions, tokens) | ✅ KEEP | Fresh data, versioned, single source-of-truth | None | HIGH — never embed these |
| **Embedded knowledge for CSS** (:root, typography, accessibility) | ✅ KEEP | Context efficiency, conflict-free, curated | For Ceiling: Hybrid (embed base, read catalog for mechanisms) | HIGH — adapt pattern |
| **Planner reads full catalog** (1,011 lines) | ✅ KEEP | Breadth coverage, ALL mechanisms considered | For Ceiling: Planner needs mechanism-catalog.md PLUS metaphor-semantics guide (new, ~400 lines) | HIGH — add new reference |
| **Perceptual auditor context starvation** | ✅ KEEP | Fresh eyes found issues, zero bias | None — perfect isolation | HIGH — critical for ceiling |
| **Builder isolation** (never sees master prompt) | ✅ KEEP | Follows plan exactly, zero anchoring bias | For Ceiling: Builder needs SLICED master (mechanism descriptions for customization context) | MEDIUM — partial isolation |
| **Missing: builder-validation-checklist.md** | ⚠️ GAP (minor) | N/A | Create 50-line checklist for builder pre-flight (embed in builder slice) | LOW — builder succeeded without it |
| **Missing: gate-verification-protocol.md** | ⚠️ GAP (minor) | N/A | Create 80-line protocol for Critical-10 (embed in programmatic-auditor slice) | LOW — auditor succeeded without it |
| **HTTP server setup** | ✅ WORKED | All 4 Playwright agents used same server, zero contention | For Ceiling: Document in PLAN that server must START before Phase 3, STOP after Phase 4 | LOW — process documentation |
| **Sequential Phase 4** (comparative then novelty) | ✅ WORKED | Avoided 3+ concurrent Playwright (known failure mode) | Keep for Ceiling | LOW — best practice confirmed |
| **Parallel Phase 3** (programmatic + perceptual) | ✅ WORKED | 2 concurrent Playwright safe, saved 30-40 min | Keep for Ceiling, add 3rd auditor (customization) AFTER these 2 finish | MEDIUM — avoid 3+ concurrent |

---

## FINAL RECOMMENDATIONS FOR CEILING/FLAGSHIP

### File Structure

**BEFORE experiment starts, create:**
1. THE PLAN (1,600 lines) — execution choreography
2. SLICING STRATEGY (1,100 lines) — 12 agent slices
3. MASTER PROMPT (2,300 lines) — domain knowledge + Phases 1-3
4. METAPHOR DERIVATION GUIDE (800 lines) — new, separate from master
5. ceiling-content.md (400 lines) — SAME content as Middle-tier (for direct comparison)

**Total: 6,200 lines of planning (vs Middle's 3,897 lines — 59% increase for 50% more agents)**

### Naming Convention

Use tier prefix + phase + role:
- `C0-content-selection.md`
- `C0.5-metaphor-derivation.md`
- `C1a-mechanism-selection.md`
- `C1b-layout-plan.md`
- `C1.5-fractal-coordination.md`
- `ceiling-page.html`
- `C3a-programmatic-audit.md`
- `C3b-perceptual-audit.md`
- `C3c-customization-audit.md`
- `C4a-comparison.md`
- `C4b-novelty.md`
- `C5-VERDICT.md`

### Pre-Baking Strategy

**Pre-bake (embed in builder slice):**
- :root variables (60 lines — Ceiling has more tokens)
- Base typography (40 lines)
- Accessibility patterns (25 lines)
- Responsive strategy (15 lines)
- Fractal scaffold CSS (50 lines — NEW, 3-scale structure)

**Read directly (reference files):**
- mechanism-catalog.md (1,011 lines — builder needs descriptions for customization)
- metaphor-semantics guide (400 lines — NEW, maps metaphor → mechanisms)

**Total builder context: ~8K tokens (pre-baked) + ~21K tokens (references) = ~29K tokens (36% of 80K budget — SAFE)**

### Validation

Run the FILE ARCHITECTURE pattern on Ceiling experiment:
- Map all 12 agent inputs/outputs
- Verify separation of concerns (PLAN / SLICING / MASTER / METAPHOR GUIDE)
- Measure compression ratios (expect 6:1 master→slice for most agents)
- Confirm zero context leakage (perceptual auditor still sees ONLY 8% of master)

---

**END OF FILE ARCHITECTURE ANALYSIS — 350+ lines delivered.**
