# Builder Self-Prompting: IMPROVEMENTS Protocol
Date: 2026-02-26
Status: DESIGN PROPOSAL
Problem: Builder had 21 improvement ideas during Molly Panopticon build but never surfaced them. The pipeline never asked.

---

## 1. The Question — Exact Wording

After the builder completes Phase 5 self-evaluation (Steps 5.0-5.7) and before returning the HTML output, the builder answers ONE generative question:

> **Step 5.8: Surface your unfinished thinking**
>
> You made compromises during this build. Every builder does — time, token budget, competing priorities, uncertainty about what would work. List 5-10 specific things you would improve if you had another pass. Be concrete: name the zone, the CSS property, the mechanism, the disposition.
>
> For each idea:
> 1. Tag it with the relevant disposition (D-01 through D-09) or category (STRUCTURAL / MECHANICAL / ACCESSIBILITY / COMPOSITIONAL)
> 2. Describe what you would change in one sentence
> 3. Rate your confidence that it would help: HIGH / MEDIUM / LOW
>
> This is not a confession of failure. This is professional craft: the gap between "what I built" and "what I see it could become." CONVICTION captures what went right. IMPROVEMENTS captures what comes next.

### Why This Wording

- **"You made compromises"** — normalizes the act. It is not asking "what did you do wrong?" It is asking "where did you make tradeoffs?" Every builder makes tradeoffs; the question is whether those tradeoffs are surfaced or buried.
- **"5-10 specific things"** — minimum 5 prevents shallow "everything is fine" answers. Maximum 10 prevents exhaustive list-making that delays output. The sweet spot for actionable ideas.
- **"Name the zone, the CSS property, the mechanism"** — forces concreteness. "Typography could be better" is useless. "Zone 4 body text at 16px/1.6 feels compressed — would increase to 17px/1.75 and add 8px paragraph spacing" is actionable.
- **"Rate your confidence"** — LOW confidence ideas are speculative; HIGH confidence ideas are things the builder KNOWS would help but chose not to do. HIGH-confidence items are the highest-value signal for REFINE.

---

## 2. Output Format — HTML Comment Structure

```html
<!-- IMPROVEMENTS:
Category | Zone/Element | Change | Confidence
[D-03] Zone 4 body text — increase line-height from 1.6 to 1.75, add paragraph spacing | HIGH
[D-07] Z2→Z3 transition — background delta only 8 RGB points, would increase to 20+ | HIGH
[D-08] Missing skip-nav link and ARIA landmark roles on major sections | HIGH
[STRUCTURAL] Zones 3-5 all use same grid — would introduce a pull-quote or full-bleed element to break the plateau | MEDIUM
[D-04] Second half has no scroll surprise — would add a dark banner zone or visual inversion around Z6 | MEDIUM
[D-01] Footer background too similar to final zone — would add a 3px top border or shift background by 15+ RGB | MEDIUM
[COMPOSITIONAL] Metaphor is announced (in labels) but not structural (in CSS) — would derive custom property names from metaphor vocabulary | LOW
-->
```

**Placement:** After `<!-- SELF-EVALUATION: ... -->` and before `<!-- RESIDUAL: ... -->`. The three builder comment blocks form a progression:

1. `<!-- CONVICTION: ... -->` — What I intended (before building)
2. `<!-- SELF-EVALUATION: ... -->` — What I verified (after building)
3. `<!-- IMPROVEMENTS: ... -->` — What I would do next (if given another pass)
4. `<!-- RESIDUAL: ... -->` — What the next builder needs to know (handoff)

**Minimum requirements:**
- At least 5 items
- At least 1 item tagged HIGH confidence
- At least 2 different disposition tags
- Each item must name a specific zone, element, or page region

---

## 3. Routing — Who Sees IMPROVEMENTS and When

### Primary Route: Orchestrator → REFINE Decision

The orchestrator reads IMPROVEMENTS immediately after extracting the builder's HTML. It feeds into the REFINE decision function alongside PA-05 score.

**New REFINE trigger rule:**
```
IF PA-05 >= 3.5 (would normally SHIP):
  Count HIGH-confidence IMPROVEMENTS items.
  IF count >= 3: OVERRIDE to REFINE.
    Rationale: Builder KNOWS 3+ substantial improvements exist.
    The page can be better and the builder can articulate how.
  IF count < 3: SHIP as normal.

IF PA-05 2.5-3.5 (already REFINE):
  IMPROVEMENTS list feeds directly into REFINE brief assembly.
  No change to existing flow except richer input.

IF PA-05 < 2.5 (REBUILD):
  IMPROVEMENTS list is DISCARDED.
  REBUILD starts fresh; the previous builder's ideas are continuation-biased.
```

### Secondary Route: REFINE Builder Input

When REFINE triggers, the IMPROVEMENTS list becomes a REFINE builder input — but with a critical transformation. The orchestrator converts IMPROVEMENTS into generative language before passing to the REFINE builder:

**Before (raw IMPROVEMENTS):**
> [D-07] Z2→Z3 transition — background delta only 8 RGB points, would increase to 20+

**After (generative transformation for REFINE brief):**
> The boundary between Zone 2 and Zone 3 whispers where it could speak. There is room for the transition to become more perceptible — a stronger shift in atmosphere as the reader crosses from one space into the next.

This transformation preserves REFINE isolation: the REFINE builder receives compositional suggestions, not diagnostic instructions. The orchestrator performs this conversion. The REFINE builder never sees the raw IMPROVEMENTS comment with its diagnostic vocabulary ("8 RGB points", "increase to 20+").

### Who Does NOT See IMPROVEMENTS

- **PA auditors:** NEVER. PA auditors must be fresh-eyes. Showing them the builder's self-critique would bias them toward confirming or refuting the builder's own assessment rather than seeing the page independently. This is a hard isolation boundary.
- **Weaver:** NEVER sees raw IMPROVEMENTS. The weaver synthesizes PA reports into artistic impression. Builder self-critique in the weaver's input would contaminate the independent synthesis.
- **Gate runner:** Does not read IMPROVEMENTS (gates are programmatic, not interpretive).

### Tertiary Route: Post-Verdict Logging

After the final verdict (SHIP or max iterations reached), the orchestrator logs all IMPROVEMENTS lists (from all passes) into the execution tracker. This creates a longitudinal record: what did builders consistently wish they could change? Patterns across multiple builds reveal pipeline-level gaps.

---

## 4. REFINE Trigger Integration

### Current REFINE Decision Function

```
IF PA-05 >= 3.5 AND zero soul violations: SHIP
IF PA-05 2.5-3.5: REFINE
IF PA-05 < 2.5: REBUILD
```

### New REFINE Decision Function

```
IF PA-05 >= 3.5 AND zero soul violations:
  Parse IMPROVEMENTS for HIGH-confidence items.
  IF HIGH-confidence count >= 3:
    Log: "REFINE override: builder identified 3+ high-confidence improvements"
    Verdict: REFINE (builder-initiated)
  ELSE:
    Verdict: SHIP

IF PA-05 2.5-3.5: REFINE (unchanged)
  Additional input: IMPROVEMENTS list (generatively transformed)

IF PA-05 < 2.5: REBUILD (unchanged)
  IMPROVEMENTS discarded.
```

### REFINE Input Assembly (Updated)

Current REFINE inputs:
1. Conviction artifact
2. Artistic impression (from Weaver)
3. RESIDUAL artifact
4. Original brief
5. Pass 1 HTML

**New REFINE inputs (additions in bold):**
1. Conviction artifact
2. Artistic impression (from Weaver)
3. **Generatively transformed IMPROVEMENTS** (orchestrator-converted)
4. RESIDUAL artifact
5. Original brief
6. Pass 1 HTML

The generatively transformed IMPROVEMENTS appear AFTER the artistic impression and BEFORE the RESIDUAL, so the REFINE builder reads: what the page feels like (weaver), what it could become (builder's vision, in generative language), what the previous builder preserved and traded off (RESIDUAL), and then the brief and HTML.

---

## 5. Interaction with CONVICTION and RESIDUAL

### The Three-Comment System

| Comment | When Written | Purpose | Voice | Reader |
|---------|-------------|---------|-------|--------|
| CONVICTION | Before building | Declares intent | Aspirational | REFINE builder, orchestrator |
| IMPROVEMENTS | After building | Surfaces unfinished thinking | Professional/concrete | Orchestrator (raw), REFINE builder (transformed) |
| RESIDUAL | After building | Hands off to next builder | Documentary | REFINE builder |

### How They Interact

**CONVICTION → IMPROVEMENTS:** The builder can reference their own conviction. "My conviction said the emotional arc goes from authority to vulnerability, but the vulnerability never fully lands — Zone 7 needs a typographic softening to complete the arc." IMPROVEMENTS can explicitly close gaps between intent and execution.

**IMPROVEMENTS → RESIDUAL:** IMPROVEMENTS and RESIDUAL are complementary but distinct:
- IMPROVEMENTS = "what I would change" (forward-looking, hypothetical)
- RESIDUAL = "what I preserved, what I changed, what comes next, what I traded off" (backward-looking, documentary)

They may overlap — "I traded off Zone 6 typography for time" (RESIDUAL) and "[D-03] Zone 6 typography needs refinement" (IMPROVEMENTS). This overlap is ACCEPTABLE and even DESIRABLE: it means the builder's documentary record and generative ideas converge, which strengthens the signal for the REFINE builder.

**IMPROVEMENTS does NOT replace RESIDUAL.** RESIDUAL is structural handoff documentation (what was preserved, what changed). IMPROVEMENTS is generative craft assessment (what I see this page could become). A builder can write a thorough RESIDUAL ("I preserved the metaphor, changed the grid, traded off responsive for desktop") and still have 7 IMPROVEMENTS ("the metaphor could be structural not just announced, the grid could modulate per zone...").

---

## 6. Compliance Gate — GR-65: Builder Self-Prompting Verification

### Gate Specification

```
GR-65: IMPROVEMENTS comment verification
Tier: REQUIRED
Phase: 3A (programmatic, runs with other gates)
Input: HTML output from builder

Check:
1. EXISTENCE: HTML contains <!-- IMPROVEMENTS: ... --> comment
   - FAIL if missing entirely
2. ITEM COUNT: At least 5 items in the list
   - Parse by newline-separated entries within the comment
   - FAIL if fewer than 5
3. HIGH CONFIDENCE: At least 1 item tagged HIGH
   - FAIL if zero HIGH items
4. TAG DIVERSITY: At least 2 different disposition/category tags
   - Parse [D-XX] or [CATEGORY] prefixes
   - FAIL if all items share the same tag
5. SPECIFICITY: Each item names a zone, element, or page region
   - Heuristic: check for "Zone", "Z[0-9]", "section", "footer",
     "header", "nav", common CSS properties, or HTML element names
   - WARN (not FAIL) if <3 items contain specific references

Result:
- PASS: All 4 required checks pass
- FAIL: Any of checks 1-4 fail
- WARN: Check 5 flags low specificity (informational, does not block)
```

### What GR-65 Cannot Check

GR-65 verifies STRUCTURE, not SUBSTANCE. It cannot determine whether the improvements are genuinely thoughtful vs. formulaic padding. Examples of "compliant but empty" responses:

```html
<!-- IMPROVEMENTS:
[D-01] Zone 1 — could adjust padding | HIGH
[D-02] Zone 2 — could adjust margins | HIGH
[D-03] Zone 3 — could adjust typography | HIGH
[D-04] Zone 4 — could adjust colors | HIGH
[D-05] Zone 5 — could adjust spacing | HIGH
-->
```

This passes GR-65 but contributes nothing. The gate catches structural non-compliance (missing comment, too few items). Substantive quality is assessed by the orchestrator when reading the list for REFINE decisions. If the orchestrator detects formulaic padding (all items follow the same "could adjust X" template), it should IGNORE the IMPROVEMENTS list for REFINE triggering and log a warning: "IMPROVEMENTS appears formulaic — not used for REFINE override."

**Formulaic detection heuristic (orchestrator-level, not gate-level):**
- If 4+ items share the same verb ("adjust", "improve", "change") → likely formulaic
- If 4+ items have identical sentence structure → likely formulaic
- If zero items reference specific CSS values, pixel measurements, or mechanism names → likely shallow

---

## 7. Recipe Text — Exact Lines to Add

### Addition to artifact-builder-recipe.md

Insert after Step 5.7 (Assess output targets), before Phase 6 (Temporal Composition):

```markdown
### Step 5.8: Surface your unfinished thinking (MANDATORY)

You made compromises during this build. Every builder does — time, token budget, competing priorities, uncertainty about what would work. List 5-10 specific things you would improve if you had another pass. Be concrete: name the zone, the CSS property, the mechanism, the disposition.

For each idea:
1. Tag with the relevant disposition (D-01 through D-09) or category (STRUCTURAL / MECHANICAL / ACCESSIBILITY / COMPOSITIONAL)
2. Describe what you would change in one sentence
3. Rate your confidence: HIGH (I know this would help) / MEDIUM (I think this would help) / LOW (worth exploring)

Place as an HTML comment AFTER your self-evaluation block:

```html
<!-- IMPROVEMENTS:
[D-XX] Zone/Element — specific change description | CONFIDENCE
[CATEGORY] Zone/Element — specific change description | CONFIDENCE
(minimum 5 items, at least 1 HIGH, at least 2 different tags)
-->
```

This is not a confession of failure. This is professional craft: the gap between "what I built" and "what I see it could become." CONVICTION captures what went right. IMPROVEMENTS captures what comes next.

> Source: Molly Panopticon autopsy (2026-02-25) — builder had 21 improvement ideas
> but never surfaced them. The pipeline never asked. The capability existed; the
> prompt was missing.
```

### Addition to Appendix E Builder Prompt Template (MANIFEST.md)

Insert after the SELF-EVALUATION block (after the `-->` closing the 7 questions), before `OUTPUT: Single HTML file`:

```
After your self-evaluation, write an IMPROVEMENTS block listing 5-10 things you would
improve with another pass. Format:
<!-- IMPROVEMENTS:
[D-XX or CATEGORY] Zone/Element — what you would change | HIGH/MEDIUM/LOW
(minimum 5 items, at least 1 HIGH confidence, at least 2 different tags)
-->
```

---

## 8. Orchestrator Text — Exact Lines to Add

### Addition to artifact-orchestrator.md

#### 8A: After Phase 2 (Build), in the output verification section

Add to the list of artifacts the orchestrator extracts from builder output:

```markdown
**Phase 2 Output Artifacts:**
- HTML file (primary output)
- `<!-- CONVICTION: ... -->` (intent declaration)
- `<!-- SELF-EVALUATION: ... -->` (7-question self-check)
- `<!-- IMPROVEMENTS: ... -->` (5-10 improvement ideas with confidence ratings) — NEW
- `<!-- RESIDUAL: ... -->` (handoff documentation, if present)
```

#### 8B: In the Ship/Refine/Rebuild decision section (after line ~548)

Replace the SHIP threshold block with:

```markdown
**SHIP (PA-05 >= 3.5)**
- Parse `<!-- IMPROVEMENTS: ... -->` from builder HTML.
- Count items tagged HIGH confidence.
- IF HIGH-confidence count >= 3:
    Log: "REFINE override: builder identified {count} high-confidence improvements"
    Verdict: REFINE (builder-initiated)
    Note: This is a quality-seeking override, not a failure signal.
- ELSE:
    Pipeline complete. Page is ready.
    Programmatic gates run as final verification (informational).
```

#### 8C: In the REFINE protocol BEFORE section (after line ~565)

Add to the REFINE builder input assembly:

```markdown
- Assemble REFINE builder inputs: conviction artifact, artistic impression,
  **generatively transformed IMPROVEMENTS**, RESIDUAL artifact, original brief,
  Pass 1 HTML.
- **IMPROVEMENTS transformation (orchestrator responsibility):**
  Read each HIGH and MEDIUM confidence item from `<!-- IMPROVEMENTS: ... -->`.
  Rewrite each as a generative observation using compositional vocabulary:
  - Replace diagnostic verbs (fix, increase, add) with generative verbs (deepen, reveal, illuminate)
  - Replace specific values (8 RGB, 16px) with perceptual descriptions (whispers where it could speak, feels compressed where it could breathe)
  - Preserve the ZONE REFERENCE so the REFINE builder knows WHERE to look
  Do NOT pass raw IMPROVEMENTS to the REFINE builder. Diagnostic vocabulary
  triggers corrective mode, which violates REFINE isolation.
```

#### 8D: In the gate runner phase (Phase 3A gate list)

Add:

```markdown
- GR-65: IMPROVEMENTS comment verification (REQUIRED). Checks: existence, >=5 items,
  >=1 HIGH confidence, >=2 different tags, specificity heuristic (WARN only).
  FAIL = builder did not complete self-prompting. Page cannot proceed to PA.
```

#### 8E: In the execution tracker logging section

Add:

```markdown
**Post-Verdict Logging:**
After final verdict, log ALL `<!-- IMPROVEMENTS: ... -->` comments from all passes
(initial + REFINE cycles) into the execution tracker under a new section:
"## Builder Self-Assessment History"
This longitudinal record reveals what builders consistently wish they could change,
informing pipeline-level improvements across runs.
```

---

## 9. Risk Analysis

### Risk 1: Token Budget Inflation
**Concern:** 5-10 improvement items add ~200-400 tokens to builder output. Across multiple REFINE cycles, IMPROVEMENTS comments accumulate.
**Severity:** LOW
**Mitigation:** The IMPROVEMENTS comment is small relative to the HTML output (typically 15,000-40,000 tokens). The generative transformation for REFINE input adds ~100 tokens per item. Total budget impact: <2% per cycle. Not material.

### Risk 2: Performative Compliance
**Concern:** Builder writes shallow, formulaic improvements to pass GR-65 without genuinely reflecting. "Could adjust padding in Zone 3 | HIGH" repeated 5 times.
**Severity:** MEDIUM
**Mitigation:** The formulaic detection heuristic (Section 6) catches the worst cases. More importantly: the REFINE override only triggers on 3+ HIGH items, so formulaic padding with all-HIGH confidence has a cost — it may trigger an unnecessary REFINE cycle. Builders that produce genuine HIGH items get a useful REFINE cycle; builders that fake it get a wasted cycle. The incentive structure self-corrects over time (the orchestrator logs which IMPROVEMENTS actually led to PA-05 improvement in REFINE).

### Risk 3: REFINE Override Creates Infinite Loops
**Concern:** REFINE builder also writes IMPROVEMENTS (as it must, per the recipe). If the REFINE builder's IMPROVEMENTS also contain 3+ HIGH items, does the pipeline REFINE again indefinitely?
**Severity:** HIGH (if unmitigated)
**Mitigation:** The existing iteration budget (cycle <= 3) already prevents infinite loops. The REFINE override is subject to the same cap:
```
IF cycle >= 3: HALT with diagnostic (existing rule)
IF PA-05 >= 3.5 AND cycle >= 2: SHIP regardless of IMPROVEMENTS count
  Rationale: After 2+ passes, the page has been refined. Builder IMPROVEMENTS
  at this point are diminishing returns. Ship it.
```
The override only applies to the INITIAL build (cycle 1). REFINE passes (cycle 2+) that score >= 3.5 SHIP regardless.

### Risk 4: Builder Self-Censorship
**Concern:** Builder knows IMPROVEMENTS may trigger REFINE (more work for a different agent). Does this create an incentive to underreport or downgrade confidence to avoid triggering extra cycles?
**Severity:** LOW
**Mitigation:** The builder that writes IMPROVEMENTS is NOT the builder that does REFINE work. The initial builder is done after Phase 2 — REFINE spawns a DIFFERENT Opus agent. There is no personal cost to the initial builder for honest reporting. Additionally, the builder does not know the threshold (3+ HIGH = override) because that logic lives in the orchestrator, not the recipe. The recipe says "rate your confidence" — it does not say "HIGH triggers REFINE."

### Risk 5: Diagnostic Leakage into REFINE
**Concern:** The orchestrator's generative transformation of IMPROVEMENTS may be imperfect, leaking diagnostic vocabulary into the REFINE brief and triggering corrective mode.
**Severity:** MEDIUM
**Mitigation:** The transformation is the orchestrator's responsibility, and the orchestrator has the full prompt engineering context to do it well. As a safety net: the REFINE builder prompt already includes "You are in COMPOSITIONAL mode, not CORRECTIVE mode" and "If you notice diagnostic language in your inputs, reinterpret it as compositional aspiration." This existing defense-in-depth covers imperfect transformation.

### Risk 6: PA Bias if IMPROVEMENTS Leaks
**Concern:** If IMPROVEMENTS somehow reaches PA auditors (e.g., it's in the HTML they screenshot), auditors may be biased.
**Severity:** LOW
**Mitigation:** IMPROVEMENTS is an HTML comment — it does not render visually. PA auditors evaluate screenshots, not source code. The only way IMPROVEMENTS could bias auditors is if they read the HTML source, which the PA protocol does not instruct them to do. Additionally, the auditor prompts explicitly state "You are a FRESH-EYES auditor. No knowledge of build process, design intent, or content meaning."

### Risk 7: Overlap with SELF-EVALUATION
**Concern:** The existing 7-question SELF-EVALUATION already includes diagnostic questions (zone transitions, skeleton test, scroll surprise). IMPROVEMENTS may feel redundant.
**Severity:** LOW but worth addressing.
**Mitigation:** SELF-EVALUATION and IMPROVEMENTS serve different purposes:
- SELF-EVALUATION = binary verification ("Does this pass?" — yes/no answers)
- IMPROVEMENTS = generative ideation ("What could this become?" — open-ended answers)
SELF-EVALUATION asks "did I hit the target?" IMPROVEMENTS asks "what target do I see beyond the one I hit?" They are complementary, not redundant. A builder can answer all 7 SELF-EVALUATION questions affirmatively ("yes, zone transitions feel like different rooms") and still list 8 IMPROVEMENTS ("but the transitions could be MORE different — Z4→Z5 uses only background shift, could add a border + type scale change").

---

## 10. Summary of Changes

| File | Change | Lines Added |
|------|--------|-------------|
| artifact-builder-recipe.md | Step 5.8 after Step 5.7 | ~25 |
| MANIFEST.md Appendix E | IMPROVEMENTS instruction in builder template | ~6 |
| artifact-orchestrator.md | Phase 2 output artifacts list | ~4 |
| artifact-orchestrator.md | SHIP threshold override | ~8 |
| artifact-orchestrator.md | REFINE input assembly + transformation | ~12 |
| artifact-orchestrator.md | GR-65 gate specification | ~3 |
| artifact-orchestrator.md | Execution tracker logging | ~5 |
| gate-runner additions | GR-65 implementation | ~30 (JS) |
| **Total** | | **~93 lines** |

### Decision Record

**Design choice: Single-turn (not follow-up prompt)**
IMPROVEMENTS is written during the builder's single turn, as part of Phase 5. Rationale: a follow-up prompt ("what would you improve?") would require a second builder invocation, doubling token cost for Phase 2. The ideas exist during the build — the question just needs to be in the recipe, not in a separate prompt.

**Design choice: PA isolation is hard boundary**
PA auditors NEVER see IMPROVEMENTS. The entire value of PA is independence. Even indirect exposure (e.g., the weaver mentioning builder self-critique) is prohibited. The REFINE builder sees a generatively transformed version only.

**Design choice: Override only on initial build**
The 3+ HIGH override applies only to cycle 1. REFINE passes that score >= 3.5 SHIP regardless. This prevents the pipeline from over-iterating when quality is already high.

**Design choice: Orchestrator transforms, not builder**
The builder writes diagnostic, concrete IMPROVEMENTS. The orchestrator converts to generative language for REFINE. This keeps the builder honest (concrete = verifiable) while keeping REFINE compositional (generative = not corrective).
