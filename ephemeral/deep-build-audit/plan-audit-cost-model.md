# Deep Build Pipeline: Comprehensive Cost Model

**Agent:** Opus 4.6 (Cost Enricher)
**Date:** 2026-02-28
**Scope:** Bottom-up cost calculation for the entire deep-build pipeline. All math shown.
**Sources:** Plan file (sorted-finding-honey.md), Doc 03 (pipeline-mapping.md with verified line counts), Doc 06 (adversarial review with original cost estimates), Doc 01 (CLI capabilities).

---

## 0. Critical Pricing Clarification

The plan and Doc 06 both use **Anthropic API pricing**:
- Input: $15/MTok
- Output: $75/MTok
- Cache read: $1.50/MTok (10x cheaper than fresh input)
- Cache write: Same as input ($15/MTok)

**BUT:** The plan states the runtime is "Claude Code subscription via `claude -p` headless mode (NOT the API)." Claude Code subscription pricing is fundamentally different from API pricing — it is a flat monthly fee ($20/mo for Pro, $200/mo for Max), not per-token. Under subscription, the MONETARY cost per token is $0 (up to rate limits).

**This invalidates the entire dollar-based cost model IF running on subscription.**

However, `claude -p` also works with API keys (ANTHROPIC_API_KEY). The plan does not specify which authentication method. This analysis proceeds with API pricing since that is what the plan's $190-228 estimate is based on, but flags this as a **fundamental ambiguity**.

If running on Claude Code subscription:
- Dollar cost: $0 per run (covered by subscription)
- Real cost: TIME (rate limits throttle throughput) + subscription fee amortization
- Rate limits (Build tier): 50 req/min, 100K tok/min → 56 sequential Opus passes at ~50K input each = ~2.8M input tokens = ~28 min of rate limit capacity. Feasible in ~3-5 hours with sequential execution.

**The rest of this analysis uses API pricing for rigor.**

---

## 1. Token Conversion Basis

Standard conversion: **~4 characters per token**, or **~3.5 tokens per word**, or roughly **1 line of code/markdown ≈ 15-25 tokens** (varies by density).

For this analysis I use the plan's own estimate where available and fall back to **1 line ≈ 20 tokens** for markdown/code files (a reasonable average for the content types in the corpus).

---

## 2. Per-Subset Corpus Token Estimates

From Doc 03, verified line counts:

| Subset | Files | Total Lines | Est. Tokens (lines × 20) | Content Type |
|--------|-------|-------------|---------------------------|--------------|
| S1: Density Core | 5 | 3,336 | 66,720 | 2 MD research + 2 HTML explorations + 1 case study |
| S2: Organization Core | 6 | 6,451 | 129,020 | 1 MD research + 2 HTML explorations + 3 case studies |
| S3: Axis+Combination Core | 5 | 6,522 | 130,440 | 2 MD research + 2 HTML explorations + 1 case study |
| S4: Density+Org Extended | 5 | 4,686 | 93,720 | 4 HTML explorations + 1 case study |
| S5: Org+Axis Extended | 4 | 6,537 | 130,740 | 3 HTML explorations + 1 HTML axis |
| S6: Remaining Axis+CD | 6 | 8,036 | 160,720 | 4 HTML explorations + 2 case studies |
| S7: Synthesis+Connective | 7 | 6,727 | 134,540 | 2 MD research + 1 MD strategy + 3 MD grammar + 1 HTML |

**STOP. These numbers are immediately problematic.**

S6 at 160,720 tokens of corpus files alone would exceed the practical context limit. But these are RAW line counts of HTML files. HTML has much higher token density than markdown because of tag overhead. Let me re-estimate:
- HTML files: ~25-30 tokens per line (tags, attributes, CSS inline)
- MD files: ~15-20 tokens per line (mostly prose)
- Case study MD: ~18 tokens per line (structured prose)

**Revised token estimates:**

| Subset | Lines | HTML Lines | MD Lines | Revised Tokens |
|--------|-------|-----------|----------|---------------|
| S1 | 3,336 | 2,001 (DD3+DD6) | 1,335 (R3+CS×2) | ~2,001×27 + 1,335×18 = **78,057** |
| S2 | 6,451 | 4,928 (OD1+OD6) | 1,523 (R1+CS×3) | ~4,928×27 + 1,523×18 = **160,470** |
| S3 | 6,522 | 4,361 (AD6+CD6) | 2,161 (R4+R5+CS) | ~4,361×27 + 2,161×18 = **156,645** |
| S4 | 4,686 | 4,258 (DD1-5) | 428 (CS) | ~4,258×27 + 428×18 = **122,670** |
| S5 | 6,537 | 6,537 (all HTML) | 0 | ~6,537×27 = **176,499** |
| S6 | 8,036 | 7,235 (AD+CD) | 801 (CS×2) | ~7,235×27 + 801×18 = **209,763** |
| S7 | 6,727 | 2,284 (OD5) | 4,443 (RS+R2+CSL+MC+CR+SR) | ~2,284×27 + 4,443×18 = **141,642** |

**CRITICAL FINDING: S5 (176K), S6 (210K), and S2 (160K) exceed the ~120K client-side prompt limit BEFORE adding any other context.** Even S1 at 78K + infrastructure (~20K) + template (~3K) + artifact (grows to ~25K) = ~126K tokens, which is dangerously close.

Wait — the plan resolves this differently. K01 resolution says "HTML artifact pipeline is canonical" but the plan's Pass-to-Pass Anatomy section says corpus is loaded as corpus FILES in the prompt. However, `--max-turns 1` means the model cannot use Read tool — ALL files must be IN the prompt.

**Re-reading the plan more carefully:** The plan says builders get `--max-turns 1` with `--allowedTools ""`. This means the ENTIRE corpus subset must be serialized into the prompt text. That is 78K-210K tokens of corpus ALONE.

However, Doc 01 section 11.1 confirms: "Client-side validation rejects prompts BEFORE sending to API... ~120k tokens triggers 'Prompt is too long' even on 200k context models."

**This means subsets S2, S3, S4, S5, S6, and S7 will ALL fail the prompt size limit when corpus + infrastructure + artifact + template are combined.** Only S1 MIGHT fit.

The plan acknowledges this at GAP-B01: "Later subsets (S6 = ~63K tokens corpus alone) will approach this." But the plan estimates S6 at ~63K tokens. My calculation shows ~210K. The discrepancy is because the plan likely uses a lower tokens-per-line ratio.

**Let me recalculate using the plan's own ratio.** The plan says "50K-75K input tokens" per builder pass (Section 2, Attention Degradation). The adversarial review says "~40,000-63,000 tokens of corpus files." This suggests the plan uses ~8-10 tokens per line for HTML, which would be: S6 = 8,036 lines × 8 = 64,288 tokens. This is consistent with the "~63K" estimate.

**Resolution:** The plan appears to use ~8-10 tokens per line as its conversion rate. This is LOWER than my estimate of 27 tokens/line for HTML. The actual ratio depends on whether the orchestrator sends the raw HTML source or a compressed/summarized version. Raw HTML at 27 tok/line is standard for Anthropic's tokenizer on HTML content.

**For this analysis, I will compute BOTH scenarios:**
- **Optimistic (plan's ratio):** ~8-10 tokens per line
- **Realistic (standard tokenizer):** ~20-27 tokens per line

Using the plan's ratio (~9 tokens/line average):

| Subset | Lines | Tokens (×9) |
|--------|-------|-------------|
| S1 | 3,336 | 30,024 |
| S2 | 6,451 | 58,059 |
| S3 | 6,522 | 58,698 |
| S4 | 4,686 | 42,174 |
| S5 | 6,537 | 58,833 |
| S6 | 8,036 | 72,324 |
| S7 | 6,727 | 60,543 |

These numbers align with the plan's "40K-63K" range. I'll use these for the cost calculation, but flag that ACTUAL token counts may be 2-3x higher.

---

## 3. Builder Pass Token Breakdown (Phase A)

Per the plan's Pass-to-Pass Anatomy, each builder pass receives:

| Component | Source | Tokens (plan's ratio) | Notes |
|-----------|--------|-----------------------|-------|
| System/world description | `world-description.md` (~17 lines) | ~400 | Static, cacheable |
| Conviction brief | TC derivation output (80-165 lines) | ~1,300 | Static for entire run |
| Content markdown | User's input file | ~2,000-5,000 | Varies. Assume 3,000 avg. |
| Corpus files (rotated) | Per subset | **30,024 - 72,324** | See table above |
| Case study reference | CD-006 exploration (~387 lines) | ~3,500 | Static, cacheable |
| Mechanism catalog | `mechanism-catalog.md` (~1,878 lines) | ~7,000 | Static, cacheable |
| Components CSS | `components.css` (~944 lines) | ~3,500 | Static, cacheable |
| Design tokens | `tokens.css` (~183 lines) | ~700 | Static, cacheable |
| Conviction layer | Capped at 10 entries | ~1,300 | Grows then stabilizes |
| Discovery log | Accumulated discoveries | ~200-2,000 | Grows. Assume 1,000 avg. |
| Verifier observations | Passes 3, 6 only | ~500 (when present) | Intermittent |
| Cross-subset summaries | From completed subsets | ~0-2,000 | Grows S1→S7. Avg ~1,000 |
| Pass context + lenses | Rotation instruction + 7 lenses | ~500 | Static |
| Builder template | Role instructions (~200 lines) | ~3,000 | Static, cacheable |

**Per-subset builder input token estimates:**

| Subset | Corpus Tokens | Fixed Context | Growing Context | Total Input |
|--------|---------------|---------------|-----------------|-------------|
| S1 | 30,024 | ~19,900 | ~1,200 (early) | **~51,124** |
| S2 | 58,059 | ~19,900 | ~2,200 | **~80,159** |
| S3 | 58,698 | ~19,900 | ~3,200 | **~81,798** |
| S4 | 42,174 | ~19,900 | ~4,200 | **~66,274** |
| S5 | 58,833 | ~19,900 | ~5,200 | **~83,933** |
| S6 | 72,324 | ~19,900 | ~6,200 | **~98,424** |
| S7 | 60,543 | ~19,900 | ~7,200 | **~87,643** |

Where "Fixed Context" = world(400) + conviction_brief(1,300) + content(3,000) + case_study(3,500) + mechanism(7,000) + components(3,500) + tokens(700) + template(3,000) - some overlap with prompt overhead = ~19,900 tokens.

"Growing Context" = conviction_layer(1,300 at cap) + discovery_log(growing) + cross_summaries(growing) + verifier_obs(intermittent).

**S6 at 98K approaches the 120K limit** even at the plan's optimistic token ratio. With realistic tokenization, S6 would be ~190K, far exceeding limits.

---

## 4. Builder and Verifier Output Tokens

**Builder output:** The builder must output a COMPLETE HTML artifact in the JSON `result` field. The plan says artifacts are ~1,500-2,500 lines. At ~10 tokens/line for generated HTML, that's ~15,000-25,000 output tokens. However, in Phase A the artifact GROWS across passes. Early passes (S1P1) produce smaller artifacts (~500 lines, ~5,000 tokens). By S7P8, the artifact is at full size (~2,000 lines, ~20,000 tokens).

BUT WAIT: The plan resolves K01 as "HTML artifact pipeline." The Phase A builder MODIFIES the artifact each pass. So the output must be the COMPLETE current artifact — not just the changes. By S4, the artifact is substantial.

Actually, re-reading doc 03's Phase A manifest more carefully, it describes TEXT integration output (`corpus-integration-S{N}.md`), not HTML. The plan's K01 resolution says HTML is canonical, but the per-pass manifest describes text files. This is an unresolved contradiction that affects output size.

**For cost calculation, I'll use two output estimates:**
- Text integration output: ~3,000-8,000 tokens per pass (growing markdown document)
- HTML artifact output: ~5,000-25,000 tokens per pass (growing HTML)

**I'll use the PLAN's numbers:** Doc 06 estimates builder output at ~15K-25K tokens. The plan says "Builder output (full HTML artifact): ~15K-25K output tokens." Average: ~20,000 output tokens for builder.

**Verifier output:** The plan says verifier produces structured observations (~500 words). At ~3.5 tokens/word: ~1,750 tokens. Add structured formatting: ~2,500 tokens. Doc 06 says "~$0.75 output" which at $75/MTok = 10,000 tokens. Let me split the difference: **~5,000 output tokens** for verifier (structured observations + findings).

---

## 5. Prompt Caching Analysis

This is where the plan's cost estimate has the largest blind spot.

**Cacheable components (identical across passes within a subset):**
- System prompt / world description: ~400 tokens
- Conviction brief: ~1,300 tokens
- Content markdown: ~3,000 tokens
- Case study: ~3,500 tokens
- Mechanism catalog: ~7,000 tokens
- Components CSS: ~3,500 tokens
- Design tokens: ~700 tokens
- Builder template: ~3,000 tokens
- Corpus files (SAME within rotation): same for 2-3 consecutive passes

Total cacheable within a rotation: ~22,400 tokens + corpus (~30K-72K) = **52K-94K tokens** cacheable.

**Cache behavior with `claude -p --no-session-persistence`:**
Each `claude -p` invocation is independent. Anthropic's prompt caching works across API calls if the prompt PREFIX is identical. With `--no-session-persistence`, each call starts fresh, but if the system prompt and early context blocks are identical, the API-level cache can apply.

**Critical question:** Does `claude -p` with CLI subscription use the API cache? Unknown. The plan assumes API pricing, so I'll assume standard API cache behavior.

Within a rotation (2-3 consecutive passes), the prompt prefix is highly similar. **Estimated cache hit rate within rotation: ~60-80%.** Across rotations (different file ordering): ~30% (only infrastructure files cache). Across subsets: ~20% (only static infrastructure).

---

## 6. Phase A: Detailed Cost Calculation

### 6.1 Pass Counts per Subset

Per plan: 8 passes per subset = 5 builder + 3 verifier:
- Rotation A (passes 1-3): Builder, Verifier, Builder
- Rotation B (passes 4-6): Builder, Verifier, Builder
- Rotation C (passes 7-8): Builder, Verifier

So: **5 builder passes + 3 verifier passes = 8 per subset × 7 subsets = 56 passes.**

Plus the plan adds 4 merge passes (passes 57-60) and cross-subset verifiers (every 2 subsets = 3 additional verifier passes). That's 56 + 4 + 3 = **63 Phase A passes** (not 56).

The plan also mentions "retrospective" after each subset — that's 7 more passes.

**Revised Phase A total: 56 base + 4 merge + 3 cross-subset + 7 retrospectives = 70 passes.**

But the plan says "56 corpus integration passes (Phase A)." This seems to count only the base 56 and not the merge, cross-subset, and retrospective passes. I'll calculate BOTH.

### 6.2 Per-Subset Cost (base 56 passes only)

**Builder pass cost formula:**
- Input cost = input_tokens × $15 / 1,000,000
- Output cost = output_tokens × $75 / 1,000,000
- With caching: cache_read_tokens × $1.50/MTok + fresh_tokens × $15/MTok

**Without caching (worst case):**

| Subset | Builder Input | Builder Output | Builder Cost/Pass | ×5 Builders | Verifier Input | Verifier Output | Verifier Cost/Pass | ×3 Verifiers | Subset Total |
|--------|---------------|----------------|-------------------|-------------|----------------|------------------|--------------------|-------------|------------|
| S1 | 51,124 | 20,000 | $0.77 + $1.50 = **$2.27** | $11.34 | 51,124 | 5,000 | $0.77 + $0.38 = **$1.14** | $3.43 | **$14.77** |
| S2 | 80,159 | 20,000 | $1.20 + $1.50 = **$2.70** | $13.51 | 80,159 | 5,000 | $1.20 + $0.38 = **$1.58** | $4.74 | **$18.25** |
| S3 | 81,798 | 20,000 | $1.23 + $1.50 = **$2.73** | $13.63 | 81,798 | 5,000 | $1.23 + $0.38 = **$1.60** | $4.81 | **$18.44** |
| S4 | 66,274 | 20,000 | $0.99 + $1.50 = **$2.49** | $12.47 | 66,274 | 5,000 | $0.99 + $0.38 = **$1.37** | $4.11 | **$16.58** |
| S5 | 83,933 | 20,000 | $1.26 + $1.50 = **$2.76** | $13.79 | 83,933 | 5,000 | $1.26 + $0.38 = **$1.64** | $4.91 | **$18.70** |
| S6 | 98,424 | 20,000 | $1.48 + $1.50 = **$2.98** | $14.88 | 98,424 | 5,000 | $1.48 + $0.38 = **$1.85** | $5.56 | **$20.44** |
| S7 | 87,643 | 20,000 | $1.31 + $1.50 = **$2.82** | $14.08 | 87,643 | 5,000 | $1.31 + $0.38 = **$1.70** | $5.09 | **$19.17** |

**Phase A base (56 passes, no caching): $126.34**

**With caching (estimated 60% cache hit within rotation, 20% across rotations):**

Within each rotation (2-3 passes), ~60% of input tokens hit cache. Across rotations, ~20%.

Per subset average cache savings: ~40% of input cost.
- S1 adjusted: $14.77 × 0.72 = $10.63
- S2 adjusted: $18.25 × 0.72 = $13.14
- (similar for others)

**Phase A base (56 passes, with caching): ~$90.96**

### 6.3 Additional Phase A Passes

| Pass Type | Count | Avg Input | Avg Output | Cost/Pass | Total |
|-----------|-------|-----------|------------|-----------|-------|
| Merge builders (57-59) | 3 | ~40,000 (reading integration docs) | ~10,000 | $0.60 + $0.75 = $1.35 | $4.05 |
| Merge verifier (60) | 1 | ~50,000 | ~5,000 | $0.75 + $0.38 = $1.13 | $1.13 |
| Cross-subset verifiers | 3 | ~60,000 (artifact + sample from prior subsets) | ~5,000 | $0.90 + $0.38 = $1.28 | $3.83 |
| Retrospectives | 7 | ~30,000 (verifier obs + artifact evolution) | ~3,000 | $0.45 + $0.23 = $0.68 | $4.73 |

**Additional Phase A passes: $13.74**

### 6.4 Pre-Phase A (TC Derivation + Content Analysis)

| Pass | Input | Output | Cost |
|------|-------|--------|------|
| TC derivation | ~40,000 (content + research + design system) | ~5,000 | $0.60 + $0.38 = $0.98 |
| Content analysis | ~30,000 (content + structure analysis) | ~5,000 | $0.45 + $0.38 = $0.83 |

**Pre-Phase A: $1.80**

### 6.5 Phase A Total

| Component | No Caching | With Caching |
|-----------|-----------|--------------|
| Base 56 passes | $126.34 | $90.96 |
| Additional passes (merge + cross + retro) | $13.74 | $11.00 |
| Pre-Phase A (TC + content) | $1.80 | $1.80 |
| **Phase A Total** | **$141.88** | **$103.76** |

**The plan says Phase A ~$152. My no-caching estimate is $142 — CLOSE but slightly lower.** The discrepancy is within margin of error for output token estimates.

**The plan does NOT account for caching.** With caching, Phase A drops to ~$104. This is a significant omission — caching could save ~$38.

---

## 7. Phase B: PA Hardening Cost Calculation

### 7.1 Per-PA-Cycle Breakdown

**CRITICAL: The plan resolves K06 as "9 auditors is canonical" but Doc 06's cost estimate used only 3 auditors.** The plan says Doc 06's numbers "must be 3x'd for Phase B auditor cost." Let me compute from scratch.

Each PA cycle consists of:

| Step | Agent(s) | Count | Input Tokens | Output Tokens | Cost/Agent |
|------|----------|-------|--------------|---------------|------------|
| Gate runner | Code (no LLM) | 1 | 0 | 0 | $0.00 |
| Screenshots | Playwright (no LLM) | 1 | 0 | 0 | $0.00 |
| PA Auditor A-H | 8 parallel Opus | 8 | ~15,000 each (screenshots via Read + HTML + guardrails + questions) | ~4,000 each (detailed audit report) | $0.23 + $0.30 = **$0.53** |
| Integrative Auditor I | 1 sequential Opus | 1 | ~40,000 (8 auditor reports + screenshots + HTML) | ~5,000 | $0.60 + $0.38 = **$0.98** |
| Weaver | 1 Opus | 1 | ~60,000 (9 reports + gates + screenshots + conviction + HTML + research) | ~5,000 | $0.90 + $0.38 = **$1.28** |
| Refine builder | 1 Opus | 1 | ~50,000 (artifact + weaver synthesis + conviction + mechanism catalog + components) | ~20,000 (full revised artifact) | $0.75 + $1.50 = **$2.25** |

Wait — PA auditor input is much lower than builder because they get ZERO build context. Let me be precise:

**PA Auditor input breakdown:**
- Screenshots: 3 viewports × 3 pages ≈ 9 screenshots. Each screenshot via Read tool is ~1,000-2,000 tokens (base64 encoded images are large, but Claude Code's Read tool provides them as visual content, not raw base64). Estimate: ~2,000 tokens per screenshot × 9 = ~18,000 tokens. BUT: with `--max-turns 15` and `--tools "Read,Glob,Grep"`, auditors can use Read tool to view screenshots. So screenshots are NOT in the prompt — they're accessed via tool calls.

**Revised PA Auditor input:**
- HTML artifact: ~20,000-25,000 tokens (the artifact is in the prompt or read via tool)
- PA guardrails file: ~2,000 tokens
- Assigned questions: ~500 tokens (5-11 questions)
- System prompt / role instructions: ~3,000 tokens
- Total prompt: ~5,500-8,500 tokens (if artifact is tool-accessed) or ~25,500-30,500 (if artifact in prompt)

Since auditors have `--tools "Read,Glob,Grep"` and `--max-turns 15`, they will likely READ the HTML and screenshots via tool calls. Each tool call adds ~input/output token overhead. Estimate 5-10 tool calls per auditor.

**Revised per-auditor cost:**
- Prompt input: ~8,000 tokens
- Tool call overhead: ~5 tool calls × ~3,000 tokens per call pair = ~15,000 tokens
- Total input: ~23,000 tokens
- Output: ~4,000 tokens (audit report)
- Cost: $0.35 + $0.30 = **$0.65 per auditor**

**Per-PA-cycle cost:**

| Component | Cost |
|-----------|------|
| 8 parallel auditors (A-H) | 8 × $0.65 = **$5.20** |
| 1 integrative auditor (I) | **$0.98** |
| 1 weaver | **$1.28** |
| 1 refine builder | **$2.25** |
| **Per-cycle total** | **$9.71** |

### 7.2 Mini-PA Between Refinement Passes

The plan mentions "Mini-PA (between refinement passes): Every 2-3 refinement passes, run 3 auditors + 1 viewport." This is lighter:
- 3 auditors × $0.65 = $1.95
- 1 mini-weaver × $0.75 = $0.75
- Per mini-PA: ~$2.70

### 7.3 Phase B Total (1-3 cycles)

| Scenario | Full PA Cycles | Mini-PAs | Total |
|----------|----------------|----------|-------|
| Best case (1 cycle, SHIP) | 1 × $9.71 = $9.71 | 0 | **$9.71** |
| Typical (2 cycles) | 2 × $9.71 = $19.42 | 1 × $2.70 = $2.70 | **$22.12** |
| Worst case (3 cycles) | 3 × $9.71 = $29.13 | 2 × $2.70 = $5.40 | **$34.53** |

**The plan says Phase B ~$38-76 "with 9 auditors."** My calculation gives $9.71-$34.53. The plan's estimate is 2-4x HIGHER than my bottom-up calculation.

**Why the discrepancy?** Doc 06 used $2.25 per auditor pass (builder-equivalent pricing), but auditors receive far less input (~23K vs ~70K tokens) and produce far less output (~4K vs ~20K tokens). The plan may have simply 3x'd Doc 06's 3-auditor cost without adjusting per-auditor cost for the smaller input.

---

## 8. Complete Pipeline Cost Summary

### 8.1 API Pricing (Per-Token)

| Component | No Caching | With Caching |
|-----------|-----------|--------------|
| Pre-Phase A (TC + content) | $1.80 | $1.80 |
| Phase A base (56 passes) | $126.34 | $90.96 |
| Phase A additional (merge + cross + retro) | $13.74 | $11.00 |
| Phase B (1 cycle) | $9.71 | $9.71 |
| Phase B (3 cycles max) | $34.53 | $34.53 |
| **TOTAL (best: 1 PA cycle, cached)** | — | **$113.47** |
| **TOTAL (typical: 2 PA cycles, cached)** | — | **$125.88** |
| **TOTAL (worst: 3 PA cycles, no cache)** | **$176.41** | — |
| **TOTAL (absolute worst: no cache, 3 PA, retries)** | **$211.69** (+20% retry buffer) | — |

### 8.2 Comparison to Plan's Estimate

| Estimate Source | Phase A | Phase B | Total |
|-----------------|---------|---------|-------|
| **Plan's estimate** | ~$152 | ~$38-76 | **$190-228** |
| **Doc 06 estimate** | ~$152 | ~$38-76 | **$190-228** |
| **This analysis (no cache)** | ~$142 | ~$10-35 | **$152-177** |
| **This analysis (with cache)** | ~$104 | ~$10-35 | **$114-139** |

### 8.3 Where the Plan's $190-228 is Wrong

1. **Phase B is overestimated by ~2x.** The plan uses builder-equivalent pricing for PA auditors ($2.25/auditor) but auditors receive 3x less input and produce 4x less output. Correct per-auditor cost is ~$0.65, not ~$2.25.

2. **Prompt caching is not accounted for.** Within each rotation (2-3 consecutive passes with identical corpus ordering), ~60% of the prompt is cacheable at 10x lower cost. This saves ~$35-40 on Phase A alone.

3. **Output tokens may be overestimated.** The plan assumes ~20K output tokens per builder pass. Early passes (S1P1) produce much smaller artifacts. A more realistic average is ~12K-15K, saving another ~$15-20.

4. **Additional passes are undercounted.** The plan says 56 Phase A passes but the architecture includes 4 merge + 3 cross-subset + 7 retrospective = 14 more passes. These add ~$14.

**Net effect: undercounted passes (+$14) offset by overcounted Phase B (-$30) and missing cache savings (-$38). The plan's estimate is ~$50-80 too high.**

### 8.4 Realistic Cost Range

| Scenario | Cost | Assumptions |
|----------|------|-------------|
| **Optimistic** | **$95-110** | Good caching, 1 PA cycle, small content, small artifacts |
| **Realistic** | **$120-145** | Moderate caching, 2 PA cycles, typical content |
| **Pessimistic** | **$160-190** | Poor caching, 3 PA cycles, large content, retries |
| **Catastrophic** | **$220-260** | Zero caching, 3 PA cycles, all subsets max tokens, 20% retries, prompt limit workarounds |

---

## 9. Budget Enforcement Analysis

### Plan's Thresholds

- **Warning:** $150
- **Hard cap:** $250

### Assessment

| Threshold | Verdict | Reasoning |
|-----------|---------|-----------|
| **$150 warning** | **TOO LATE for typical run.** At $150, you've completed ~85% of Phase A (no cache) or all of Phase A + 1 PA cycle (with cache). By the time the warning fires, most spending is already done. | Move warning to $80-100 (end of S4, ~halfway through Phase A). This gives time to evaluate quality before committing the remaining $60-80. |
| **$250 hard cap** | **Adequate for worst case.** My catastrophic estimate is $220-260. The $250 cap catches runaway spending before it exceeds $260. | Keep $250 but add a PAUSE at $175 requiring human confirmation to continue. |

### Recommended Budget Gates

| Gate | Threshold | Action |
|------|-----------|--------|
| **Early warning** | $50 (end of S2) | Log quality assessment. Is artifact improving? |
| **Mid-point check** | $80-100 (end of S4) | PAUSE. Show artifact + verifier sentiment. Human decides: continue, skip subsets, or terminate. |
| **Budget warning** | $150 | Alert. Show cost trajectory + quality trajectory. |
| **Soft cap** | $200 | PAUSE. Require explicit human approval to continue. |
| **Hard cap** | $250 | TERMINATE. Save all state for resume. |

---

## 10. Cost Per Quality Point

### Historical Comparison

| Pipeline | Cost | PA-05 Score | Cost per PA-05 point |
|----------|------|-------------|---------------------|
| Middle-Tier (current best) | ~$12 | 4.0/4 | **$3.00/point** |
| Gas Town (current pipeline) | ~$30 | 3.5/4 | **$8.57/point** |
| Deep Build (optimistic) | ~$110 | ???/4 | **$27.50/point** (if 4.0) |
| Deep Build (realistic) | ~$135 | ???/4 | **$33.75/point** (if 4.0) |
| Deep Build (pessimistic) | ~$180 | ???/4 | **$45.00/point** (if 4.0) |

**The deep build pipeline costs 4-15x MORE per quality point than existing pipelines** even in the best case.

The fundamental question: **does corpus integration produce quality that non-corpus pipelines cannot?** The Middle-Tier experiment achieved 4.0/4 WITHOUT corpus integration. If the deep build also achieves 4.0/4, it did so at 10x the cost for the same outcome.

The only justification is if the deep build achieves a quality level BEYOND 4.0/4 — a new tier that existing pipelines cannot reach. There is zero empirical evidence for this.

---

## 11. Subscription vs API: The Elephant in the Room

If running on Claude Code MAX subscription ($200/mo):

| Metric | API Pricing | Subscription |
|--------|------------|--------------|
| Dollar cost per run | $110-190 | $0 (included in subscription) |
| Runs per month | 1-2 (at $110-190 each) | Limited by rate limits, not cost |
| Rate limit bottleneck | None (pay per token) | 50 req/min, 100K tok/min (Build tier) |
| Estimated wall time | 8-14 hours | 10-18 hours (rate limit throttling adds ~25%) |
| Real cost | Tokens consumed × rate | Monthly subscription + time invested |

**On subscription, the cost argument vanishes entirely.** The question becomes purely one of TIME (10-18 hours of wall clock) and QUALITY (does the output justify the time?).

The plan should explicitly state which pricing model applies and adjust the budget enforcement accordingly.

---

## 12. Summary of Findings

### The Plan's $190-228 Estimate

**INCORRECT — approximately $50-80 too high.** Realistic range is $110-145 with caching, $160-190 without.

Key errors in the plan's estimate:
1. PA auditor cost overestimated by ~2x ($2.25 vs $0.65 per auditor)
2. Prompt caching not modeled (saves ~$35-40)
3. Builder output tokens overestimated for early passes
4. Additional passes (merge, cross-subset, retrospective) not counted in the $152 Phase A number
5. Fundamental ambiguity on subscription vs API pricing not resolved

### Budget Thresholds

**$150 warning is too late. $250 hard cap is adequate.**

Recommended: $80 early check, $150 warning, $200 soft cap (pause), $250 hard cap.

### Cost-Benefit

At $110-145 per run, the deep build is **4-12x more expensive** than existing pipelines that produce PA-05 3.5-4.0/4. The cost is justifiable ONLY if:
1. Running on subscription (cost = $0, only time matters)
2. OR the pipeline demonstrably exceeds 4.0/4 quality (no evidence for this)
3. OR the pipeline produces quality more RELIABLY than existing pipelines (possible but unproven)

### Token Limit Risk

**Subsets S2, S3, S5, S6 are at HIGH RISK of exceeding the ~120K client-side prompt limit** if actual tokenization is higher than the plan's ~9 tokens/line estimate. S6 at realistic tokenization (~160-210K) will definitely fail. The plan's GAP-B01 mitigation (trim conviction, then trim valley files) may not be sufficient — the corpus FILES themselves may exceed the limit.

### Recommendation

Add a `--dry-run` token estimation step that **actually tokenizes** (not estimates) each subset's fully assembled prompt. If any exceeds 100K tokens, either:
1. Split the subset across 2 passes (each getting half the files)
2. Pre-summarize long HTML files before loading
3. Use `--system-prompt` instead of `--append-system-prompt` to save ~3.2K tokens
