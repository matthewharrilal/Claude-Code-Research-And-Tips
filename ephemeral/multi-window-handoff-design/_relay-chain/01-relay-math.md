# 01 — Relay Chain Mathematics

## Purpose

Calculate the precise quantitative architecture for a RELAY CHAIN that processes ALL corpus material across multiple context windows, where each window ingests raw files, produces creative framing (6D handoff tissue), and passes accumulated state to the next window.

**Critical constraint:** NO extraction or compression of raw files. Windows receive SELECTED raw files, not digested summaries. The handoff tissue between windows is the ONLY new content generated — it carries creative framing, conviction, and continuity, not compressed source material.

---

## 1. Exact Corpus Sizes

### 1A. Raw Corpus by Category

| Category | Files | Lines | Est. Tokens | Notes |
|----------|-------|-------|-------------|-------|
| **Research (R1-R5 + Synthesis)** | 7 | 4,207 | 47,445 | Excludes CLAUDE.md (103 lines, skip) |
| **DD Case Studies (.md)** | 3 | 1,211 | ~15,140 | DD-003 (405), DD-004 (429), DD-006 (377) |
| **DD Provenance** | 4 | 1,440 | ~18,000 | Handoff, findings, checkpoint, perceptual-synthesis |
| **DD HTML Explorations** | 6 | 6,259 | ~20,863 | ~3.33 chars/token for HTML/CSS |
| **OD Case Studies (.md)** | 3 | ~930 | ~11,625 | OD-001 (298), OD-004 (~300), OD-006 (334) |
| **OD Provenance** | 8 | ~3,267 | ~40,838 | Convention-spec, synthesis, findings, gates, etc. |
| **OD HTML Explorations** | 6 | 12,012 | ~40,040 | Largest HTML corpus |
| **AD Provenance** | 8 | ~4,973 | ~62,163 | Convention-spec (1,093), PA-conventions (970), etc. |
| **AD HTML Explorations** | 6 | 10,920 | ~36,400 | |
| **CD Case Studies (.md)** | 3 | ~1,189 | ~14,863 | CD-001 (415), CD-005 (386), CD-006 (388) |
| **CD Orchestration** | 4 | ~1,367 | ~17,088 | Evaluation, content-selection, build-state, audit-synthesis |
| **CD Pipeline Context** | 2 | 1,520 | ~19,000 | 01-CD-EVOLVED-VISION (1,000), 02-POST-CD-PHASES (520) |
| **CD HTML Explorations** | 6 | 10,704 | ~35,680 | |
| **Compositional Core** | 43 | 22,741 | ~75,803 | Identity, vocabulary, grammar, components, guidelines, etc. |
| **Pipeline / Connective Tissue** | 27 | 21,423 | ~71,410 | TENSION-PROTOCOL, strategy lib, PV2, gates, etc. |
| **Case Studies (anti-prescription)** | 9 | ~5,120 | ~64,000 | All from case-studies/ directory |
| **Skills** | 3 | 2,322 | ~17,160 | TC, PA, build-page |
| **Specification/Provenance** | 57 | 24,114 | ~80,380 | All provenance chain documents |
| **Design System README** | 1 | 2,516 | ~8,387 | Philosophy document |
| **TOTAL ACTIVE CORPUS** | ~200 | ~138,035 | ~696,285 | Excluding implementation/ and axis/ raw |

### 1B. What the Relay Chain Must Process

The relay chain processes the BUILDER-RELEVANT subset of the corpus — material that a creative builder would benefit from seeing. Based on the distribution maps, the relevant corpus is:

| Category | Lines | Tokens | Window Assignment |
|----------|-------|--------|-------------------|
| **Research (5 files + synthesis)** | 4,104 | ~46,240 | W1: R1+R4, W2: Synthesis+R2+R3+R5, W4: Synthesis+R3+R5 |
| **DD Case Studies + Provenance** | 2,651 | ~33,140 | W1: 5 files, W2: 1 file, W4: 5 files |
| **OD Case Studies + HTML + Provenance** | ~16,209 | ~92,503 | W1: 8 files, W2: 6 files, W4: 3 files |
| **AD Provenance** | ~4,973 | ~62,163 | W1: 4 files, W2: 2 files, W4: 3 files |
| **CD Case Studies + Context** | ~4,076 | ~50,951 | W1: 2 files, W2: 0, W4: 6 files |
| **Compositional Core (builder-relevant)** | ~8,400 | ~42,000 | W2: mechanisms, components, rules, combinations |
| **Pipeline (conviction files)** | ~5,829 | ~43,716 | W1: TENSION-PROTOCOL; W2: strategy-lib, track-2 |
| **Case Studies (anti-prescription)** | ~5,120 | ~64,000 | W4: divergence verification |
| **Skills (TC)** | 841 | ~12,603 | W2: process guidance |
| **TOTAL RELEVANT** | ~52,203 | ~447,316 | |

### 1C. Token-to-Line Conversion Rates (Verified)

| Content Type | Chars/Line | Chars/Token | Tokens/Line |
|-------------|-----------|-------------|-------------|
| Markdown prose | ~60 | ~4.0 | ~15 |
| HTML/CSS code | ~55 | ~3.33 | ~16.5 |
| Tables/structured | ~50 | ~3.5 | ~14.3 |
| **Weighted average** | ~57 | ~3.8 | ~15 |

**Cross-check:** 4,207 research lines = 47,445 tokens → 11.3 tokens/line. Actual measurement shows ~12.5 tokens/line for the research files (measured at character level).

---

## 2. Effective Context Budget Per Relay Window

### 2A. Fixed Overhead (Every Window)

| Component | Tokens | Source |
|-----------|--------|--------|
| System prompt (Claude Code base) | ~3,000 | Fixed |
| Tool definitions | ~4,000 | Fixed |
| Auto-loaded CLAUDE.md files | ~2,500 | Global + project MEMORY.md |
| **Total fixed overhead** | **~9,500** | |

### 2B. Variable Per-Window Costs

| Component | Tokens | Notes |
|-----------|--------|-------|
| Window-specific instructions | ~2,000 | What to do, how to process, framing |
| Output generation buffer | ~8,000 | Creative framing output (handoff tissue) |
| Working memory (reasoning) | ~15,000 | Model's chain-of-thought |
| Tool call overhead | ~5,000 | Read/Write tool interactions |
| **Total variable costs** | **~30,000** | |

### 2C. Handoff Tissue From Previous Windows

This is the GROWING cost — each subsequent window must ingest accumulated handoff tissue from all previous windows.

| Window # | Previous Handoff Tissue | Tokens |
|----------|------------------------|--------|
| Window 1 | None (first window) | 0 |
| Window 2 | W1 output (~300 lines) | ~3,750 |
| Window 3 | W1 + W2 output (~600 lines) | ~7,500 |
| Window 4 | W1 + W2 + W3 output (~900 lines) | ~11,250 |
| Window 5 | W1-W4 output (~1,200 lines) | ~15,000 |
| Window N | ~300 * (N-1) lines | ~3,750 * (N-1) |

### 2D. Effective Budget for Raw Corpus Per Window

```
Total context:          200,000 tokens
Fixed overhead:          -9,500 tokens
Variable costs:         -30,000 tokens
Handoff tissue:         -3,750 * (N-1) tokens
                        ─────────────────
Available for corpus:   160,500 - 3,750*(N-1) tokens
```

| Window # | Corpus Budget (tokens) | Corpus Budget (lines @ 12.5 tok/line) |
|----------|----------------------|--------------------------------------|
| W1 | 160,500 | ~12,840 |
| W2 | 156,750 | ~12,540 |
| W3 | 153,000 | ~12,240 |
| W4 | 149,250 | ~11,940 |
| W5 | 145,500 | ~11,640 |
| W6 | 141,750 | ~11,340 |
| W7 | 138,000 | ~11,040 |
| W8 | 134,250 | ~10,740 |
| W10 | 126,750 | ~10,140 |
| W15 | 108,000 | ~8,640 |
| W20 | 89,250 | ~7,140 |

**Key observation:** Even at Window 20, the corpus budget is still ~89,250 tokens (~7,140 lines). The handoff tissue growth is LINEAR at 3,750 tokens/window, which consumes the budget slowly. The relay chain can sustain ~43 windows before the handoff tissue alone fills the context.

---

## 3. Handoff Tissue Growth Curve

### 3A. Per-Window Output Model

Each relay window produces a 6D reflection document:

| Dimension | Lines | Tokens | Purpose |
|-----------|-------|--------|---------|
| Creative conviction framing | ~60 | ~750 | What the corpus material MEANS |
| Metaphor/pattern connections | ~40 | ~500 | Cross-file patterns discovered |
| Tension identification | ~30 | ~375 | Contradictions and creative tensions |
| Emotional/aesthetic register | ~20 | ~250 | How the material FEELS |
| Builder implications | ~30 | ~375 | What a builder should DO with this |
| Open questions / threads | ~20 | ~250 | What the next window should investigate |
| **Total per window** | **~200** | **~2,500** | |

Conservative estimate: 200 lines / 2,500 tokens per window.
Upper bound: 400 lines / 5,000 tokens per window.

### 3B. Accumulated Tissue Growth

| After Window | Total Tissue Lines | Total Tissue Tokens | % of W(N+1) Budget |
|-------------|-------------------|--------------------|--------------------|
| W1 | 200 | 2,500 | 1.6% |
| W2 | 400 | 5,000 | 3.3% |
| W3 | 600 | 7,500 | 4.9% |
| W4 | 800 | 10,000 | 6.7% |
| W5 | 1,000 | 12,500 | 8.6% |
| W6 | 1,200 | 15,000 | 10.6% |
| W8 | 1,600 | 20,000 | 14.9% |
| W10 | 2,000 | 25,000 | 19.7% |
| W15 | 3,000 | 37,500 | 34.7% |
| W20 | 4,000 | 50,000 | 56.1% |

### 3C. Sustainability Analysis

**At 200 lines/window (conservative):**
- Tissue grows at 2,500 tokens/window
- Budget shrinks at 2,500 tokens/window (from tissue) + 0 (fixed costs don't grow)
- Net corpus capacity per window: 160,500 - 2,500*N tokens
- **Breaks even at W64** (160,500 / 2,500 = 64)
- **Comfortable (>80% capacity) through W13**

**At 400 lines/window (upper bound):**
- Tissue grows at 5,000 tokens/window
- **Breaks even at W32** (160,500 / 5,000 = 32)
- **Comfortable through W6-7**

### 3D. The REAL Constraint: Tissue Quality, Not Quantity

The mathematical limit is generous (~32-64 windows). The REAL constraint is whether accumulated tissue from 10+ previous windows remains coherent and useful. At 2,000 lines of accumulated framing, the next window must:

1. Read all prior tissue to maintain continuity
2. Distinguish between N different windows' perspectives
3. Build on accumulated conviction rather than starting fresh

**Prediction:** Beyond ~8 windows, the tissue becomes unwieldy not because of tokens but because of COGNITIVE LOAD on the processing agent. The agent must hold 8 different creative framings in mind simultaneously.

**Mitigation:** Hierarchical tissue compression after every 4 windows:
- W1-W4 tissue (800 lines) → compressed to ~200-line synthesis
- W5-W8 tissue (800 lines) → compressed to ~200-line synthesis
- Both syntheses carried forward (~400 lines total instead of 1,600)

This creates a LOGARITHMIC growth curve instead of linear.

---

## 4. Number of Relay Windows Needed

### 4A. Corpus Partitioned by Distribution Maps

The distribution maps assign files to W1/W2/W4 (derive/build/refine). For the relay chain, we need to map the TOTAL corpus that must be SEEN by at least one window.

**Unique files to process (no double-counting):**

| Category | Unique Lines | Unique Tokens | Notes |
|----------|-------------|---------------|-------|
| Research | 4,104 | 46,240 | R1-R5 + Synthesis (skip CLAUDE.md) |
| DD exploration files | 7,470 | 53,000 | 3 MD + 4 provenance + 6 HTML |
| OD exploration files | 16,209 | 92,503 | 3 MD + 8 provenance + 6 HTML |
| AD exploration files | 15,893 | 98,563 | 8 provenance + 6 HTML |
| CD exploration files | 14,780 | 85,631 | 3 MD + 2 pipeline + 4 orch + 6 HTML |
| Case studies (anti-prescription) | 5,120 | 64,000 | 9 case study MDs |
| Compositional Core (builder-relevant) | 8,400 | 42,000 | Mechanisms, components, grammar, rules |
| Pipeline (conviction) | 5,829 | 43,716 | TENSION-PROTOCOL + strategy + track-2 |
| Skills (TC) | 841 | 12,603 | TC SKILL.md |
| Design System README | 2,516 | 8,387 | Philosophy document |
| **TOTAL UNIQUE** | **~81,162** | **~546,643** | |

### 4B. Window Capacity vs Corpus Size

With ~160,500 tokens available in Window 1 (shrinking ~2,500/window):

```
Total corpus tokens:           ~546,643
Average window capacity:       ~152,000 tokens (across first 7 windows)
Minimum windows needed:        546,643 / 152,000 = 3.6 → 4 MINIMUM
```

But this assumes 100% utilization. Practical concerns:

1. **Semantic coherence:** Don't split a single exploration across windows
2. **Category grouping:** Keep related files together
3. **Processing quality:** Agent needs breathing room, not 100% packed windows
4. **Target utilization:** 70-80% of corpus budget per window

```
At 75% utilization:
Average effective capacity:    ~114,000 tokens/window
Windows needed:                546,643 / 114,000 = 4.8 → 5 WINDOWS
```

### 4C. Recommended Window Count: 5 RELAY WINDOWS

| Window | Category Focus | Raw Corpus Tokens | Handoff In | Total Load | Utilization |
|--------|---------------|-------------------|-----------|-----------|-------------|
| R1 | Research + DD | ~99,240 | 0 | 99,240 | 62% |
| R2 | OD + AD Provenance | ~132,503 | 2,500 | 135,003 | 84% |
| R3 | AD HTML + CD | ~121,311 | 5,000 | 126,311 | 79% |
| R4 | Compositional Core + Pipeline + Skills | ~98,319 | 7,500 | 105,819 | 66% |
| R5 | Case Studies + README + Overflow | ~95,570 | 10,000 | 105,570 | 66% |

**Note:** R2 is the tightest window at 84% utilization. All others have comfortable headroom.

---

## 5. Optimal Chunking Strategy

### 5A. Semantic Coherence Principle

Files that reference each other or share conceptual space MUST be in the same window. The agent needs the full context to produce meaningful creative framing.

### 5B. Proposed Relay Chain: 5 Windows

#### RELAY WINDOW 1: "Foundations — Research + Density Direction"

**Theme:** How information unfolds, what density means, how rhythm works

| File Set | Files | Lines | Tokens |
|----------|-------|-------|--------|
| Research (R1-R5 + Synthesis) | 6 | 4,104 | 46,240 |
| DD case studies (3 MD) | 3 | 1,211 | 15,140 |
| DD provenance (4 files) | 4 | 1,440 | 18,000 |
| DD HTML explorations (6 files) | 6 | 6,259 | 20,863 |
| **R1 TOTAL** | **19** | **13,014** | **~100,243** |

**Semantic justification:** Research findings (R1-R5) directly inform DD explorations. DD explores density patterns that are the PRIMARY research output. Reading them together lets the agent see theory→application in one pass.

**Handoff tissue output:** ~200 lines covering density principles, information rhythm, research-to-exploration mapping, and emotional register of the density/research corpus.

---

#### RELAY WINDOW 2: "Organization + Axis — The Structural Layer"

**Theme:** How content organizes, how axes direct attention, the 3-way unification

| File Set | Files | Lines | Tokens |
|----------|-------|-------|--------|
| OD case studies (3 MD) | 3 | 930 | 11,625 |
| OD provenance (8 files) | 8 | 3,267 | 40,838 |
| OD HTML explorations (6 files) | 6 | 12,012 | 40,040 |
| **R2 TOTAL** | **17** | **16,209** | **~92,503** |

**Handoff tissue input:** R1's 200 lines (~2,500 tokens)
**Total window load:** ~95,003 tokens + 9,500 overhead + 30,000 variable = ~134,503 tokens (67%)

**Semantic justification:** OD is the largest exploration category by HTML volume. It needs its own window. The 3-way unification (axis=org=density) is the central discovery — agent needs all OD files to see this emerge.

**Note:** AD provenance could fit here (~62k tokens) but would push utilization to 97% — too tight. Split AD between R2 and R3.

**Handoff tissue output:** ~250 lines (slightly larger — the 3-way unification is a complex discovery requiring careful framing). Covers organizational patterns, density-organization equivalence, convergence validation.

---

#### RELAY WINDOW 3: "Aesthetics + Combination — The Integration Layer"

**Theme:** How axis geometry serves density, how combinations stress-test prior work

| File Set | Files | Lines | Tokens |
|----------|-------|-------|--------|
| AD provenance (8 files) | 8 | 4,973 | 62,163 |
| AD HTML explorations (6 files) | 6 | 10,920 | 36,400 |
| CD pipeline context (2 files) | 2 | 1,520 | 19,000 |
| **R3 TOTAL** | **16** | **17,413** | **~117,563** |

**Handoff tissue input:** R1+R2 = 450 lines (~5,625 tokens)
**Total window load:** ~123,188 tokens + 9,500 + 30,000 = ~162,688 tokens (81%)

**Semantic justification:** AD builds on OD (the 3-way unification). CD builds on all three prior stages. Grouping AD+CD context shows the agent how the unification plays out in axis geometry and gets stress-tested in combinations. The CD HTML explorations are NOT included here — they go in R5 with case studies.

**Handoff tissue output:** ~250 lines covering axis-density-organization unification (now seen from AD's perspective), aesthetic conventions as evidence-based locks, CD's role as stress test.

---

#### RELAY WINDOW 4: "Vocabulary + Grammar — The Builder's Toolkit"

**Theme:** What the builder actually uses: mechanisms, components, compositional rules, skills

| File Set | Files | Lines | Tokens |
|----------|-------|-------|--------|
| Compositional Core (builder-relevant) | ~15 | 8,400 | ~42,000 |
| Pipeline conviction files | 5 | 5,829 | ~43,716 |
| TC SKILL.md | 1 | 841 | 12,603 |
| **R4 TOTAL** | **~21** | **~15,070** | **~98,319** |

**Compositional Core breakdown:**
- mechanism-catalog.md (751 lines, 7,171 tok)
- compositional-rules.md (527 lines, ~6,590 tok)
- mechanism-combinations.md (447 lines, ~5,588 tok)
- components.css (944 lines, 7,494 tok)
- components-cd-tt.css (666 lines, ~5,328 tok)
- components-dd-od.css (555 lines, ~4,440 tok)
- component-inventory.md (879 lines, ~3,516 tok)
- border-system.md (658 lines, ~2,632 tok)
- tokens.css (183 lines, 2,999 tok)
- prohibitions.md (419 lines, 6,030 tok)
- soul-constraints.md (342 lines, ~1,368 tok)
- semantic-rules.md (529 lines, ~2,116 tok)
- usage-criteria.md (337 lines, ~1,348 tok)
- responsive-strategy.md (271 lines, ~1,084 tok)

**Pipeline conviction files:**
- TENSION-PROTOCOL.md (1,940 lines, ~24,250 tok)
- 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (1,747 lines, ~21,838 tok)
- 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md (1,142 lines, ~14,275 tok)
- conventions-brief.md (609 lines, ~7,613 tok)
- world-description.md (17 lines, 461 tok)

**Handoff tissue input:** R1+R2+R3 = 700 lines (~8,750 tokens)
**Total window load:** ~107,069 tokens + 9,500 + 30,000 = ~146,569 tokens (73%)

**Semantic justification:** This window reads ALL the builder's tools together — mechanisms, components, rules, the TC skill, the tension protocol. Reading these AFTER the research/DD/OD/AD/CD context (via accumulated handoff tissue) means the agent can frame the toolkit in terms of what the corpus NEEDS, not just what the toolkit PROVIDES.

**Handoff tissue output:** ~300 lines (larger — this window needs to translate toolkit understanding into builder-ready framing). Covers mechanism selection guidance, component personality models in context of corpus discoveries, compositional rules as GRAMMAR connecting vocabulary to composition, the tension protocol as philosophical foundation.

---

#### RELAY WINDOW 5: "Calibration + Synthesis — What Good Looks Like"

**Theme:** Case studies proving quality, HTML reference points, crown jewel analysis

| File Set | Files | Lines | Tokens |
|----------|-------|-------|--------|
| Case studies (9 anti-prescription MDs) | 9 | 5,120 | 64,000 |
| CD HTML explorations (6 files) | 6 | 10,704 | 35,680 |
| CD orchestration files (4) | 4 | 1,367 | 17,088 |
| Design System README | 1 | 2,516 | 8,387 |
| Skill enrichments (2 files) | 2 | 741 | ~9,263 |
| **R5 TOTAL** | **~22** | **~20,448** | **~134,418** |

**Handoff tissue input:** R1-R4 = 1,000 lines (~12,500 tokens)
**Total window load:** ~146,918 tokens + 9,500 + 30,000 = ~186,418 tokens (93%)

**PROBLEM:** R5 is over budget at 93%. This is tight but within the 200k limit.

**Alternatives to reduce R5 load:**
- Move CD orchestration to R3 (saves 17,088 tokens → R5 drops to 85%)
- Move README to R4 (saves 8,387 tokens → R5 drops to 89%)

**Revised R5 (after moving CD orch to R3 and README to R4):**

| File Set | Files | Lines | Tokens |
|----------|-------|-------|--------|
| Case studies (9 MDs) | 9 | 5,120 | 64,000 |
| CD HTML explorations (6 files) | 6 | 10,704 | 35,680 |
| Skill enrichments (2 files) | 2 | 741 | 9,263 |
| **R5 REVISED TOTAL** | **~17** | **~16,565** | **~108,943** |

**Revised total load:** ~121,443 + 9,500 + 30,000 = ~160,943 tokens (80%) — comfortable.

**Handoff tissue output:** ~350 lines (this is the FINAL relay window — its output is the SYNTHESIS of all 5 windows). Covers calibration points (what "DESIGNED" looks like), divergence protocols, crown jewel analysis, and the unified creative intelligence ready for the BUILD window.

---

### 5C. Revised Final Distribution

| Window | Focus | Raw Tokens | Handoff In | Total* | Util% |
|--------|-------|-----------|-----------|--------|-------|
| R1 | Research + DD | 100,243 | 0 | 139,743 | 70% |
| R2 | OD | 92,503 | 2,500 | 134,503 | 67% |
| R3 | AD + CD Context + CD Orch | 134,651 | 5,625 | 179,776 | 90% |
| R4 | Comp. Core + Pipeline + Skills + README | 106,706 | 8,750 | 154,956 | 77% |
| R5 | Case Studies + CD HTML + Enrichments | 108,943 | 12,500 | 160,943 | 80% |

*Total = Raw + Handoff In + Fixed (9,500) + Variable (30,000)

**R3 is still tight at 90%.** Let's rebalance:

Move AD HTML (36,400 tokens) to a separate window? That would require 6 windows.

### 5D. FINAL ANSWER: 6 RELAY WINDOWS (Balanced)

| Window | Focus | Raw Tokens | Handoff In | Total | Util% |
|--------|-------|-----------|-----------|-------|-------|
| R1 | Research + DD MD/Provenance | 79,380 | 0 | 118,880 | 59% |
| R2 | DD HTML + OD MD/Provenance | 72,503 | 2,500 | 114,503 | 57% |
| R3 | OD HTML + AD Provenance | 102,203 | 5,000 | 146,703 | 73% |
| R4 | AD HTML + CD (all non-HTML) | 91,400 | 7,500 | 138,400 | 69% |
| R5 | Comp. Core + Pipeline + Skills | 98,319 | 10,000 | 147,819 | 74% |
| R6 | Case Studies + CD HTML + README | 117,330 | 12,500 | 169,330 | 85% |

Wait — this still has R6 at 85% and R3 at 73%. Let me recalculate more carefully.

### 5E. DEFINITIVE ANSWER: 5 RELAY WINDOWS (Rebalanced)

The corpus CAN fit in 5 windows with careful assignment. The key insight: some files DON'T need to be processed in the relay at all (orchestration files, navigation CLAUDEe.mds, validation/compliance meta-documents). Let me separate MUST-PROCESS from SKIP.

**SKIP list (not needed for creative builder intelligence):**

| File | Lines | Tokens | Reason |
|------|-------|--------|--------|
| MASTER-CD-EXECUTION-PROMPT.md | 930 | ~11,625 | Orchestrator-only |
| CD-005-EVALUATION.md | 310 | ~3,875 | Orchestration gate |
| CD-006-CONTENT-SELECTION.md | 422 | ~5,275 | Orchestration |
| CD-BUILD-STATE.md | 179 | ~2,238 | State tracker |
| Research CLAUDE.md | 103 | ~1,288 | Navigation |
| Pipeline CLAUDE.md | 169 | ~2,113 | Navigation |
| Compositional-core CLAUDE.md | 661 | ~8,263 | Navigation (auto-loaded anyway) |
| validation/ files (3) | 2,898 | ~36,225 | Meta-compliance, not creative |
| process/ files (4) | 3,045 | ~38,063 | Historical process, not creative |
| Various README.md (5) | ~1,787 | ~22,338 | Index documents |
| **TOTAL SKIP** | **~10,504** | **~131,303** | |

**Revised MUST-PROCESS corpus:**

```
Total relevant:     ~546,643 tokens
Skip:               ~131,303 tokens
MUST-PROCESS:       ~415,340 tokens
```

At 75% utilization across 5 windows (avg capacity ~114,000 tokens):

```
415,340 / 114,000 = 3.6 → 4 WINDOWS (tight) or 5 WINDOWS (comfortable)
```

**4 windows** is mathematically possible but would run at ~90% average utilization — leaving no room for agent reasoning. **5 windows** at ~73% average is the sweet spot.

---

## 5F. FINAL 5-WINDOW RELAY CHAIN

#### R1: "Density + Research" (FOUNDATION LAYER)

| Content | Lines | Tokens |
|---------|-------|--------|
| R1-DOCUMENTATION-PATTERNS.md | 584 | 7,300 |
| R2-CREATIVE-LAYOUTS.md | 810 | 9,258 |
| R3-DENSITY-DIMENSIONS.md | 553 | 6,913 |
| R4-AXIS-INNOVATIONS.md | 990 | 10,914 |
| R5-COMBINATION-THEORY.md | 784 | 7,651 |
| RESEARCH-SYNTHESIS.md | 383 | 5,244 |
| DD-003-islands.md | 405 | 5,063 |
| DD-004-layers.md | 429 | 5,363 |
| DD-006-fractal.md | 377 | 4,713 |
| DD-outbound-findings.md | 233 | 2,913 |
| DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | 647 | 8,088 |
| DD-001-breathing.html | 770 | 2,567 |
| DD-002-gradient.html | 962 | 3,207 |
| DD-003-islands.html | 881 | 2,937 |
| DD-004-layers.html | 1,275 | 4,250 |
| DD-005-rivers.html | 1,251 | 4,170 |
| DD-006-fractal.html | 1,120 | 3,733 |
| **R1 TOTAL** | **~11,454** | **~94,284** |

**Window budget check:**
- Corpus: 94,284
- Overhead: 9,500
- Variable: 30,000
- Handoff in: 0
- **TOTAL: 133,784 (67%)**

---

#### R2: "Organization + Early Axis" (STRUCTURAL LAYER)

| Content | Lines | Tokens |
|---------|-------|--------|
| OD-001-conversational.md | 298 | 3,725 |
| OD-004-confidence.md | ~300 | 3,750 |
| OD-006-creative.md | 334 | 4,175 |
| OD-outbound-findings.md | 458 | 5,725 |
| OD-CONVENTION-SPEC.md | 468 | 5,850 |
| OD-SYNTHESIS.md | 672 | 8,400 |
| OD-001-conversational.html | 2,293 | 7,643 |
| OD-002-narrative.html | 1,659 | 5,530 |
| OD-003-task-based.html | 1,163 | 3,877 |
| OD-004-confidence.html | 1,978 | 6,593 |
| OD-005-spatial.html | 2,284 | 7,613 |
| OD-006-creative.html | 2,635 | 8,783 |
| AD-SYNTHESIS.md | 306 | 3,825 |
| AD-outbound-findings.md | 680 | 8,500 |
| HANDOFF-AD-TO-CD.md | 447 | 5,588 |
| **R2 TOTAL** | **~15,975** | **~89,577** |

**Window budget check:**
- Corpus: 89,577
- Overhead: 9,500
- Variable: 30,000
- Handoff in: 2,500 (R1 tissue)
- **TOTAL: 131,577 (66%)**

---

#### R3: "Aesthetics + Combination" (INTEGRATION LAYER)

| Content | Lines | Tokens |
|---------|-------|--------|
| AD-CONVENTION-SPEC.md | 1,093 | 13,663 |
| AD-PA-CONVENTIONS.md | 970 | 12,125 |
| AD-AUDIT-SYNTHESIS.md | 496 | 6,200 |
| AD-001-z-pattern.html | 1,737 | 5,790 |
| AD-002-f-pattern.html | 1,682 | 5,607 |
| AD-003-bento-grid.html | 1,896 | 6,320 |
| AD-004-spiral.html | 1,483 | 4,943 |
| AD-005-choreography.html | 1,846 | 6,153 |
| AD-006-compound.html | 2,276 | 7,587 |
| CD-001-reasoning-inside-code.md | 415 | 5,188 |
| CD-005-multi-axis-transition.md | 386 | 4,825 |
| CD-006-pilot-migration.md | 388 | 4,850 |
| CD-AUDIT-SYNTHESIS.md | 456 | 5,700 |
| 01-CD-EVOLVED-VISION.md | 1,000 | 12,500 |
| **R3 TOTAL** | **~16,124** | **~101,451** |

**Window budget check:**
- Corpus: 101,451
- Overhead: 9,500
- Variable: 30,000
- Handoff in: 5,000 (R1+R2 tissue)
- **TOTAL: 145,951 (73%)**

---

#### R4: "Builder's Toolkit" (VOCABULARY + GRAMMAR LAYER)

| Content | Lines | Tokens |
|---------|-------|--------|
| mechanism-catalog.md | 751 | 7,171 |
| compositional-rules.md | 527 | 6,588 |
| mechanism-combinations.md | 447 | 5,588 |
| border-system.md | 658 | 8,225 |
| components.css | 944 | 7,494 |
| components-cd-tt.css | 666 | 5,328 |
| components-dd-od.css | 555 | 4,440 |
| component-inventory.md | 879 | 10,988 |
| tokens.css | 183 | 2,999 |
| prohibitions.md | 419 | 6,030 |
| soul-constraints.md | 342 | 4,275 |
| semantic-rules.md | 529 | 6,613 |
| responsive-strategy.md | 271 | 3,388 |
| TENSION-PROTOCOL.md | 1,940 | 24,250 |
| conventions-brief.md | 609 | 7,613 |
| TC SKILL.md | 841 | 12,603 |
| world-description.md | 17 | 461 |
| **R4 TOTAL** | **~10,578** | **~124,054** |

**Window budget check:**
- Corpus: 124,054
- Overhead: 9,500
- Variable: 30,000
- Handoff in: 7,500 (R1-R3 tissue)
- **TOTAL: 171,054 (86%)**

This is at 86% — workable but tight. If needed, move soul-constraints.md (4,275 tok) or responsive-strategy.md (3,388 tok) to R5.

---

#### R5: "Calibration + Crown Jewels" (SYNTHESIS LAYER)

| Content | Lines | Tokens |
|---------|-------|--------|
| CD-001-reasoning-inside-code.html | 1,654 | 5,513 |
| CD-002-task-containing-decision.html | 1,567 | 5,223 |
| CD-003-file-tree-with-callouts.html | 1,770 | 5,900 |
| CD-004-essence-as-background.html | 1,625 | 5,417 |
| CD-005-multi-axis-transition.html | 2,003 | 6,677 |
| CD-006-pilot-migration.html | 2,085 | 6,950 |
| 08-COMPOSITIONAL-STRATEGY-LIBRARY.md | 1,747 | 21,838 |
| 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md | 1,142 | 14,275 |
| skill-enrichments/tc-additions.md | 473 | 5,913 |
| skill-enrichments/pa-additions.md | 268 | 3,350 |
| Design System README.md | 2,516 | 8,387 |
| **R5 TOTAL** | **~16,850** | **~89,443** |

**Window budget check:**
- Corpus: 89,443
- Overhead: 9,500
- Variable: 30,000
- Handoff in: 10,000 (R1-R4 tissue)
- **TOTAL: 138,943 (69%)**

---

### 5G. Distribution Summary

| Window | Theme | Lines | Tokens | Util% | Headroom |
|--------|-------|-------|--------|-------|----------|
| R1 | Research + DD | 11,454 | 94,284 | 67% | 66k |
| R2 | OD + AD Summary | 15,975 | 89,577 | 66% | 68k |
| R3 | AD Full + CD Context | 16,124 | 101,451 | 73% | 54k |
| R4 | Toolkit + Pipeline | 10,578 | 124,054 | 86% | 29k |
| R5 | CD HTML + Calibration | 16,850 | 89,443 | 69% | 61k |
| **TOTAL** | | **70,981** | **498,809** | **72% avg** | |

**Verification:** 498,809 tokens across 5 windows. Total corpus budget (5 * ~152,000 avg) = ~760,000 tokens. Utilization = 498,809 / 760,000 = 65.6% average. Comfortable.

---

## 6. The Accumulation Problem

### 6A. Linear Growth Model

| Window | Tissue In | Tissue Out | Cumulative | % of Next Budget |
|--------|-----------|-----------|------------|------------------|
| R1 | 0 | 200 lines / 2,500 tok | 2,500 | 1.6% |
| R2 | 2,500 | 250 lines / 3,125 tok | 5,625 | 3.7% |
| R3 | 5,625 | 250 lines / 3,125 tok | 8,750 | 5.8% |
| R4 | 8,750 | 300 lines / 3,750 tok | 12,500 | 8.3% |
| R5 | 12,500 | 350 lines / 4,375 tok | 16,875 | 11.3% |

**At R5, accumulated tissue is 12,500 tokens (1,000 lines).** This is well within budget — only 8.3% of R4's capacity and 11.3% for a hypothetical R6.

### 6B. When Does It Become Unsustainable?

Assuming 2,500-3,500 tokens per window output and linear accumulation:

```
Sustainability threshold: when tissue > 50% of corpus budget
Corpus budget at window N: 160,500 - 3,000*N tokens (tissue growth)
Tissue at window N: 3,000*N tokens
Tissue = 50% budget when: 3,000*N = 0.5 * (160,500 - 3,000*N)
                          3,000*N = 80,250 - 1,500*N
                          4,500*N = 80,250
                          N = 17.8 → Window 18
```

**The accumulation problem doesn't bite until Window 18.** For a 5-window relay, it's irrelevant.

### 6C. If We Needed More Windows

For corpora requiring 10+ relay windows, implement HIERARCHICAL COMPRESSION:

- After every 4 windows, compress accumulated tissue (4 * ~250 lines = ~1,000 lines → 250-line synthesis)
- This creates O(log N) growth instead of O(N)
- Sustainable to ~60+ windows

**For our 5-window chain: no compression needed. Linear accumulation is fine.**

---

## 7. The Convergence Question: Final Window → BUILD Window

### 7A. What R5 Produces

R5 is the final relay window. Its output is a ~350-line document that synthesizes ALL creative intelligence from the 5-window relay chain:

| Section | Lines | Content |
|---------|-------|---------|
| **Creative DNA Summary** | 60 | The unified conviction: what density/organization/axis/combination MEAN together |
| **Mechanism Intelligence** | 50 | Which mechanisms serve which purposes, informed by seeing all explorations |
| **Compositional Grammar** | 40 | How mechanisms combine, informed by case studies and research |
| **Calibration Points** | 40 | What "DESIGNED" looks like — specific CSS patterns from crown jewels |
| **Tension Architecture** | 30 | Productive tensions the builder should harness (from TENSION-PROTOCOL + explorations) |
| **Anti-Patterns** | 30 | What NOT to do — from audit findings, failure modes, quality regressions |
| **Builder Permissions** | 30 | What the builder has CREATIVE AUTHORITY to decide (from case studies' anti-prescription) |
| **Open Threads** | 20 | Unresolved questions from the research that the builder might encounter |
| **Emotional Register** | 25 | How the corpus FEELS — the aesthetic sensibility to carry forward |
| **Accumulated R1-R4 Tissue** | ~1,000 | Previous windows' outputs (embedded by reference or inline) |
| **TOTAL** | **~1,325** | |

### 7B. What the BUILD Window Receives

The BUILD window receives:

| Input | Lines | Tokens | Source |
|-------|-------|--------|--------|
| R5 convergence document | ~1,325 | ~16,563 | Relay chain output |
| Content markdown (user input) | varies | ~5,000 | User-provided |
| mechanism-catalog.md | 751 | 7,171 | Direct load (also seen in R4) |
| components.css | 944 | 7,494 | Direct load (also seen in R4) |
| tokens.css | 183 | 2,999 | Direct load (also seen in R4) |
| conventions-brief.md | 609 | 7,613 | Direct load (also seen in R4) |
| world-description.md | 17 | 461 | Direct load |
| Build instructions | ~100 | ~1,500 | Window-specific prompt |
| **TOTAL** | **~3,929** | **~48,801** | |

**Build window budget:**
- Input: 48,801
- Overhead: 9,500
- Output (HTML + brief + reflection): 35,000
- Working memory: 25,000
- Tool overhead: 10,000
- **TOTAL: 128,301 (64%)** — very comfortable

### 7C. Comparison: Current vs Relay-Enriched

| Metric | Current W1 | Relay-Enriched BUILD |
|--------|-----------|---------------------|
| Total input tokens | 43,702 | 48,801 |
| Rules tokens | 22,553 (52%) | 18,077 (37%) |
| Creative knowledge tokens | 353 (0.8%) | 16,563 (34%) |
| Reference tokens | 15,552 (36%) | 14,161 (29%) |
| Content tokens | 5,244 (12%) | 5,000 (~10%) |
| **Conviction ratio** | **0.8%** | **34%** |

**The relay chain transforms the builder's conviction ratio from 0.8% to 34% — a 42x increase — while only adding ~5,100 tokens to total input.**

### 7D. The Critical Difference

The relay chain's convergence document is NOT a compressed summary. It is a CREATIVE FRAMING that carries:

1. **Conviction** — the agent processing raw files develops genuine creative conviction
2. **Connections** — cross-file patterns that no single file contains
3. **Emotional register** — how the corpus FEELS, not just what it SAYS
4. **Permissions** — what the builder is ALLOWED to create (from anti-prescription case studies)
5. **Warnings** — what will fail (from audit findings and failure modes)

This is the 6D tissue: conviction, connection, tension, emotion, implication, thread. Each relay window adds depth to these 6 dimensions.

---

## 8. Summary: Relay Chain Architecture

```
                    R1                R2                R3                R4                R5
               ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
               │ Research  │    │    OD    │    │ AD + CD  │    │ Toolkit  │    │ Case     │
               │ + DD      │───▶│ + AD sum │───▶│ + CD ctx │───▶│ + Pipeline│───▶│ Studies  │
               │ 94k tok   │    │ 90k tok  │    │ 101k tok │    │ 124k tok │    │ + CD HTML │
               └──────────┘    └──────────┘    └──────────┘    └──────────┘    │ 89k tok  │
                    │               │               │               │          └──────────┘
                    ▼               ▼               ▼               ▼               │
               200 lines       250 lines       250 lines       300 lines          ▼
               tissue          tissue          tissue          tissue         350 lines
                                                                             CONVERGENCE
                                                                                  │
                                                                                  ▼
                                                                          ┌──────────────┐
                                                                          │  BUILD WINDOW │
                                                                          │  ~49k tokens  │
                                                                          │  34% creative │
                                                                          │  conviction   │
                                                                          └──────────────┘
```

### Key Numbers

| Metric | Value |
|--------|-------|
| Total relay windows | 5 |
| Total corpus processed | ~499k tokens (~71k lines) |
| Average window utilization | 72% |
| Tightest window | R4 at 86% |
| Final convergence document | ~1,325 lines / ~16,563 tokens |
| Accumulated handoff tissue at R5 | 12,500 tokens (8.3% of budget) |
| Sustainability limit | Window 18 (linear) / Window 60+ (hierarchical) |
| Build window conviction ratio | 34% (up from 0.8%) |
| Build window total load | ~49k tokens (64% utilization) |
| **Files SKIPPED (not needed)** | ~10,504 lines / ~131k tokens |

### Critical Success Factors

1. **Each relay window produces 6D creative framing, NOT extraction/compression**
2. **Handoff tissue accumulates linearly — sustainable for 5 windows**
3. **Build window receives toolkit files DIRECTLY plus convergence tissue — both reference AND conviction**
4. **Window order matters: foundation → structure → integration → vocabulary → calibration**
5. **Semantic coherence preserved: no file split across windows; related files grouped**
