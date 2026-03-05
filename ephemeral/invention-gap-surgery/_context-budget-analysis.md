# Context Budget Analysis: Single Opus Builder with Direct Access

## The Question

Can a single Opus builder agent fit ALL necessary inputs in its context window for "exploration-mode" building, bypassing the current package-filtering pipeline?

---

## Raw Data: Measured File Sizes

All numbers from actual build artifacts (molly-panopticon 03-02-v2 and yegge-gas-town 03-01-5 builds).

### A. What the Builder Currently Receives (Package Mode)

| Input | Lines | Chars | Est. Tokens |
|-------|-------|-------|-------------|
| Builder prompt (pass 1) | 431 | 19,962 | ~5,000 |
| Research package (pass 1) | 349 | — | ~3,500 |
| TC Brief | 208 | 27,159 | ~6,800 |
| Content markdown | 1,324 | 46,409 | ~11,600 |
| tokens.css | 124 | — | ~370 |
| components.css | 779 | — | ~2,340 |
| **SUBTOTAL (Pass 1)** | **~3,215** | — | **~29,610** |

For multi-pass, add pass-2 and pass-3 packages + prompts + the prior HTML:

| Additional per pass | Lines | Est. Tokens |
|---------------------|-------|-------------|
| Package pass 2 | 248 | ~2,500 |
| Package pass 3 | 281 | ~2,800 |
| Builder prompt pass 2 | 410 | ~4,800 |
| Builder prompt pass 3 | 390 | ~4,600 |
| Prior pass HTML output | ~2,100 | ~20,000 |
| **Pass 2 total input** | — | **~57,400** |
| **Pass 3 total input** | — | **~65,000** |

### B. What Specialists Produce (Currently Filtered Out by Packages)

The raw specialist findings that packages compress from:

| Specialist | Lines | Chars | Est. Tokens |
|------------|-------|-------|-------------|
| Specialist 1 (Research findings) | 255 | — | ~2,550 |
| Specialist 2 (Validated patterns) | 160 | — | ~1,600 |
| Specialist 3 (Case studies) | 345 | — | ~3,450 |
| Specialist 4 (Constraints) | 310 | — | ~3,100 |
| Specialist 5 (Protocol) | 131 | — | ~1,310 |
| **SUBTOTAL** | **1,201** | **142,257** | **~35,560** |

Package compression ratio: 1,201 specialist lines --> 878 package lines (3 packages combined). That is ~27% compression. Not actually severe -- the packages are filtering but not dramatically compressing.

### C. Design System Core (Layers 1-6)

| Layer | Files | Lines | Chars | Est. Tokens |
|-------|-------|-------|-------|-------------|
| Identity (layer 1) | identity.md, vocabulary.md | 142 | — | ~570 |
| Vocabulary (layer 2) | tokens.css | 124 | — | ~370 |
| Grammar (layer 3) | grammar.md, mechanisms.md | 237 | — | ~950 |
| Components (layer 4) | components.css, components.md | 816 | — | ~2,690 |
| Guidelines (layer 6) | semantic-rules.md, responsive-strategy.md, usage-criteria.md | 1,137 | — | ~4,550 |
| **SUBTOTAL (core layers)** | | **2,456** | **~106,041** | **~26,500** |

### D. Case Studies (Design System Layer 5)

| File | Lines | Est. Tokens |
|------|-------|-------------|
| DD-006-fractal.md | 377 | ~1,510 |
| CD-006-pilot-migration.md | 387 | ~1,550 |
| OD-006-creative.md | 333 | ~1,330 |
| DD-003-islands.md | 405 | ~1,620 |
| DD-004-layers.md | 428 | ~1,710 |
| CD-001-reasoning-inside-code.md | 415 | ~1,660 |
| CD-005-multi-axis-transition.md | 386 | ~1,540 |
| OD-001-conversational.md | 297 | ~1,190 |
| OD-004-confidence.md | 309 | ~1,240 |
| ANTI-PRESCRIPTION-TEMPLATE.md | 471 | ~1,880 |
| Visual case studies (3) | 771 | ~3,080 |
| README (index) | 541 | ~2,160 |
| **SUBTOTAL (all case studies)** | **5,120** | **~20,470** |

### E. Research Foundation (R1-R5 + Synthesis)

| File | Lines | Est. Tokens |
|------|-------|-------------|
| RESEARCH-SYNTHESIS.md | 383 | ~1,530 |
| R1 Documentation Patterns | 584 | ~2,340 |
| R2 Creative Layouts | 810 | ~3,240 |
| R3 Density Dimensions | 553 | ~2,210 |
| R4 Axis Innovations | 990 | ~3,960 |
| R5 Combination Theory | 784 | ~3,140 |
| **SUBTOTAL** | **4,104** | **~16,420** |

### F. Exploration HTML Files (Worked Examples)

| File | Lines | Chars | Est. Tokens |
|------|-------|-------|-------------|
| CD-006-pilot-migration.html | 2,085 | 109,877 | ~27,470 |
| OD-006-creative.html | 2,635 | 130,237 | ~32,560 |
| DD-006-fractal.html | 1,120 | 53,205 | ~13,300 |
| OD-005-spatial.html | 2,284 | 120,836 | ~30,210 |
| CD-005-multi-axis-transition.html | 2,003 | 98,474 | ~24,620 |
| **Top 5 total** | **10,127** | **512,629** | **~128,160** |
| **All 18 explorations** | **28,975** | **1,388,188** | **~347,050** |

### G. Builder Output (What It Must Generate)

| Output | Lines | Chars | Est. Tokens |
|--------|-------|-------|-------------|
| Pass 1 HTML | ~2,100 | ~79,000 | ~20,000 |
| Pass 2 HTML | ~2,450 | ~99,000 | ~25,000 |
| Pass 3/Final HTML | ~2,500 | ~102,000 | ~25,500 |

---

## Budget Scenarios

Claude Opus context window: **200,000 tokens**
Claude Opus max output: **32,000 tokens** (with extended thinking, can be larger in agentic mode)

### Scenario 1: Current Pipeline (What Builder Gets Today)

| Category | Tokens |
|----------|--------|
| Builder prompt | 5,000 |
| 1 research package | 3,500 |
| TC brief | 6,800 |
| Content markdown | 11,600 |
| tokens.css | 370 |
| components.css | 2,340 |
| System overhead (CLAUDE.md, tool defs) | ~5,000 |
| **INPUT TOTAL** | **~34,610** |
| **Output (HTML generation)** | **~20,000** |
| **GRAND TOTAL** | **~54,610** |
| **Utilization** | **27%** |
| **Remaining** | **~145,000 (73%)** |

**Verdict:** The builder is currently MASSIVELY under-utilizing context. 73% of the window is unused.

### Scenario 2: "Give It Everything" (Maximum Direct Access)

Load ALL of the following into the prompt:

| Category | Tokens |
|----------|--------|
| Builder prompt (unified, expanded) | 8,000 |
| TC brief | 6,800 |
| Content markdown | 11,600 |
| ALL 5 specialist findings (raw) | 12,000 |
| Design system core (layers 1-4 + 6) | 26,500 |
| ALL case studies | 20,470 |
| Research synthesis + R1-R5 | 16,420 |
| 3 exploration HTMLs as examples | ~73,000 |
| System overhead | 5,000 |
| **INPUT TOTAL** | **~179,790** |
| **Output capacity remaining** | **~20,210** |
| **Utilization** | **90%** |

**Verdict:** DOES NOT FIT safely. Input alone consumes 90%, leaving barely enough for output. Extended thinking would be crippled. This scenario is infeasible.

### Scenario 3: "Strategic Direct Access" (The Sweet Spot)

Load essential context into the prompt. Use Read tool calls for reference material on demand.

**IN THE PROMPT (must be pre-loaded):**

| Category | Tokens | Rationale |
|----------|--------|-----------|
| Builder prompt (unified) | 8,000 | Instructions, non-negotiable |
| TC brief | 6,800 | Creative fuel, must be internalized upfront |
| Content markdown | 11,600 | The article, must be mapped immediately |
| ALL 5 specialist findings (raw) | 12,000 | The invention gap fix -- unfiltered research |
| Identity + vocabulary (layers 1-2) | 940 | Soul constraints + tokens, compact |
| Grammar (layer 3) | 950 | Mechanism names + deployment patterns |
| System overhead | 5,000 | CLAUDE.md, tool definitions |
| **PROMPT TOTAL** | **~45,290** |

**READ VIA TOOL CALLS (on demand):**

| Category | Tokens | When to Read |
|----------|--------|-------------|
| components.css | 2,340 | When writing CSS for a specific component |
| Guidelines (semantic rules, responsive) | 4,550 | When deploying mechanisms to check constraints |
| 1-2 relevant case studies | 3,000-6,000 | When implementing a specific mechanism type |
| 1 relevant exploration HTML | 13,000-33,000 | When needing a worked example of a technique |
| Research R1-R5 (specific file) | 2,200-4,000 | If specialist findings reference a research area |

**Total budget with 2 tool reads:**

| Component | Tokens |
|-----------|--------|
| Prompt input | 45,290 |
| Tool read: components.css | 2,340 |
| Tool read: 1 case study | 3,000 |
| Tool read: 1 exploration HTML | 25,000 |
| Extended thinking budget | 30,000 |
| Output (HTML) | 25,000 |
| **TOTAL** | **~130,630** |
| **Utilization** | **65%** |
| **Safety margin** | **~69,370 (35%)** |

**Verdict:** FEASIBLE with comfortable margins. Builder has 35% headroom for additional tool reads, extended thinking, and iteration.

### Scenario 4: "Full Exploration Mode" (Maximum Useful Context)

Same as Scenario 3, but builder reads more reference material.

| Component | Tokens |
|-----------|--------|
| Prompt input | 45,290 |
| Tool reads: components.css + guidelines | 6,890 |
| Tool reads: 3 case studies | 9,000 |
| Tool reads: 2 exploration HTMLs | 50,000 |
| Extended thinking budget | 25,000 |
| Output (HTML) | 25,000 |
| **TOTAL** | **~161,180** |
| **Utilization** | **81%** |
| **Safety margin** | **~38,820 (19%)** |

**Verdict:** FEASIBLE but tight. 19% margin is workable but leaves little room for iteration or re-reads. This is the practical ceiling.

---

## The Critical Insight: What Must Be in the Prompt vs. Tool-Read

### MUST be in the prompt (pre-loaded, no exceptions):

1. **Builder instructions** (~8K tokens) -- The builder needs to know its task, constraints, and sequencing from the start. Cannot be deferred.

2. **TC Brief** (~6.8K tokens) -- Creative conviction must be internalized BEFORE any structural decisions. Reading it after starting composition means the metaphor becomes an afterthought instead of the generative seed.

3. **Content markdown** (~11.6K tokens) -- The builder must map the entire article's structure to understand zone planning. Partial reads create structural incoherence.

4. **Specialist findings (raw)** (~12K tokens) -- THIS IS THE WHOLE POINT of exploration mode. The unfiltered research that packages currently compress. Must be present alongside the TC brief so the builder can synthesize research + conviction simultaneously, rather than receiving pre-digested packages.

5. **Identity + vocabulary + grammar** (~2K tokens) -- Soul constraints + design tokens + mechanism vocabulary. These are compact and foundational. The builder needs to think IN these terms from the start.

**Prompt total: ~40-45K tokens (20-23% of context)**

### SHOULD be tool-read (reference on demand):

6. **components.css** (~2.3K tokens) -- Read when the builder is about to implement a specific component (callout, code block, bento grid). Not needed during conceptual planning.

7. **Guidelines** (~4.5K tokens) -- Read when deploying mechanisms, to check responsive strategy and semantic rules. Reference material, not generative input.

8. **Case studies** (~3-6K each) -- Read 1-2 relevant ones when implementing a mechanism type the builder hasn't worked with before. The case study shows HOW a mechanism was deployed in practice.

### CAN be tool-read (high value, space permitting):

9. **1-2 exploration HTMLs** (~13-33K each) -- A worked example of a complete page. Extremely high value for compositional quality but extremely large. Read ONE that matches the article's density/organization profile.

10. **Research files R1-R5** (~2-4K each) -- Read only if specialist findings reference a specific research area and the builder wants deeper context.

### SHOULD NOT be loaded at all:

11. **All 18 exploration HTMLs** (347K tokens) -- Impossible. Even 5 of them exceed the context window.

12. **All case studies simultaneously** (20K tokens) -- Diminishing returns. 2-3 relevant ones are sufficient.

13. **Superseded files** -- Dead weight.

14. **Validation/process files** -- Internal audit artifacts, not building inputs.

---

## Feasibility Verdict

**YES -- exploration-mode building is feasible for a single Opus agent.**

The key numbers:

| Metric | Value |
|--------|-------|
| Context window | 200,000 tokens |
| Mandatory prompt input | ~45,000 tokens (23%) |
| Typical tool reads | ~30,000-50,000 tokens (15-25%) |
| Extended thinking | ~25,000-30,000 tokens (13-15%) |
| Output generation | ~25,000 tokens (13%) |
| **Total utilization** | **125,000-150,000 tokens (63-75%)** |
| **Safety margin** | **50,000-75,000 tokens (25-37%)** |

### What This Changes From the Current Pipeline

| Dimension | Current (Package Mode) | Proposed (Exploration Mode) |
|-----------|----------------------|---------------------------|
| Context utilization | 27% | 63-75% |
| Builder sees specialist findings? | No (filtered to packages) | Yes (raw, all 5) |
| Builder can read case studies? | No | Yes (via tool) |
| Builder can read exploration HTMLs? | No | Yes (via tool, 1-2) |
| Information loss from compression | ~27% per package pass | 0% (direct access) |
| Builder's creative autonomy | Constrained to package selections | Can discover + synthesize freely |

### The Real Constraint: Output Tokens, Not Input

The binding constraint is NOT context window size but **output token generation**. Opus currently caps at ~32K output tokens in most configurations. A full HTML page at ~2,500 lines / ~100K characters would require ~25,000 output tokens. That leaves ~7,000 tokens for the builder's reasoning text, reflections, and any preliminary work.

For multi-pass builds, each pass is a separate agent invocation, so the output limit resets. This is actually fine -- the current 3-pass architecture already handles this correctly.

### Three Risks to Monitor

1. **Attention dilution.** 45K tokens of input is well within attention span for Opus, but the specialist findings may contain conflicting or redundant guidance. The builder prompt must include clear prioritization signals (TC brief > specialist findings > design system reference).

2. **Tool-read latency.** Each Read tool call adds latency. If the builder makes 5-6 reads during a pass, that is 5-6 round trips. This is manageable but slower than having everything pre-loaded.

3. **Single-pass vs. multi-pass.** If collapsing from 3 passes to 1, the output requirement jumps to ~25K tokens for the final page PLUS any intermediate reasoning. This pushes against the output limit. Recommendation: keep multi-pass even in exploration mode, but let the builder decide HOW MANY passes (2-3) based on article complexity rather than always forcing exactly 3.

---

## Recommended Architecture

```
PROMPT (pre-loaded, ~45K tokens):
  - Unified builder instructions (replaces pass-1/2/3 prompts)
  - TC Brief (full)
  - Content markdown (full)
  - All 5 specialist findings (raw, unpackaged)
  - Identity layer (soul constraints)
  - Vocabulary layer (tokens.css)
  - Grammar layer (mechanism names + patterns)

TOOL-READ (on demand):
  - components.css (when implementing specific components)
  - guidelines/* (when checking constraints)
  - case-studies/* (when deploying unfamiliar mechanisms)
  - validated-explorations/*.html (when needing a worked example)
  - research/R1-R5 (when wanting deeper theory)

OUTPUT:
  - Pass 1: Structure HTML (~20K tokens)
  - Pass 2: Enriched HTML (~25K tokens)
  - Pass 3 (optional): Hardened HTML (~25K tokens)
```

This architecture gives the builder 3-4x the information density of current package mode while staying at 63-75% context utilization with comfortable margins.
