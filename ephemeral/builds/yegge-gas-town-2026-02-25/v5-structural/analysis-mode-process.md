# Mode & Process Gap Analysis — SIG-06, SIG-09, SIG-10, SIG-12, SIG-13
Date: 2026-02-26
Analyst: mode-process-analyst (Opus)
Status: COMPLETE

---

## SIG-06: REFINE IMPROVEMENTS Transformation Has No Verification

### Current State

artifact-orchestrator.md Section 7, lines 529-536, describes the IMPROVEMENTS transformation:

```
- **IMPROVEMENTS transformation (orchestrator responsibility):**
  Read each HIGH and MEDIUM confidence item from `<!-- IMPROVEMENTS: ... -->`.
  Rewrite each as a generative observation using compositional vocabulary:
  - Replace diagnostic verbs (fix, increase, add) with generative verbs (deepen, reveal, illuminate)
  - Replace specific values (8 RGB, 16px) with perceptual descriptions (whispers where it could speak, feels compressed where it could breathe)
  - Preserve the ZONE REFERENCE so the REFINE builder knows WHERE to look
  Do NOT pass raw IMPROVEMENTS to the REFINE builder.
```

The Observer protocol (d10-observer-protocol.md, OBS-07) checks that the REFINE builder does NOT receive diagnostic vocabulary ("fix", "repair", "address", "correct"). However, OBS-07 checks the REFINE builder's INPUT PACKAGE. It does NOT verify the transformation itself happened. There is a gap between "raw IMPROVEMENTS were not passed" and "IMPROVEMENTS were rewritten in generative language."

### Analysis

**Question: Is a dedicated verification gate needed, or is the Observer check sufficient?**

The Observer check (OBS-07) is NEARLY sufficient but has one blind spot: the orchestrator could OMIT the IMPROVEMENTS entirely (neither raw nor transformed) and OBS-07 would PASS. The REFINE builder would then lack creative seeds from the previous builder's unfinished thinking.

However, the orchestrator could also simply not include IMPROVEMENTS for legitimate reasons (builder wrote zero HIGH/MEDIUM items, or items are not transformable). Requiring their presence would create false positives.

### Exact Change Spec

**File: artifact-orchestrator.md, Section 7, REFINE Protocol, BEFORE subsection**

After line 536 (`Do NOT pass raw IMPROVEMENTS to the REFINE builder.`), add:

```markdown
- **Transformation verification (orchestrator self-check):**
  After transformation, count items that still contain diagnostic vocabulary
  (fix, increase, add, repair, change, adjust, replace). If count > 0,
  re-transform those items. The Observer (OBS-07) will independently verify
  absence of diagnostic language in the REFINE builder input package.
```

**File: d10-observer-protocol.md, Category 2, after OBS-07**

No change needed. OBS-07 already covers the critical failure mode (diagnostic vocabulary leaking through). The remaining gap (IMPROVEMENTS omitted entirely) is a LOW-severity concern because the REFINE builder also receives the PA artistic impression, which provides sufficient creative direction.

### Assessment

| Dimension | Value |
|-----------|-------|
| Lines of change | +4 lines in artifact-orchestrator.md, +0 elsewhere |
| Builder experience impact | NEUTRAL — the builder never sees this; it is orchestrator-internal |
| Regression risk | NONE — adds a self-check to an existing process step |
| Interaction effects | None with other SIG items |
| NET IMPROVEMENT | 2/5 — marginal improvement to an already-covered check |
| Priority | **NEXT CYCLE** — OBS-07 catches the critical failure; this adds belt-and-suspenders |

---

## SIG-09: Mini-PA Excludes Readability Auditor (B)

### Current State

pa-deployment.md Section 6.2 defines Mini-PA (Mode 2.5) auditors:

```
| Auditor | Role | Questions |
|---------|------|-----------|
| **A** | Impression + Emotion | PA-01, PA-03, PA-05, PA-45, PA-65 |
| **C** | Spatial + Proportion | PA-11, PA-30, PA-31, PA-50, PA-66 |
| **G** | Metaphor + Ideology | PA-18, PA-19, PA-42, PA-54, PA-68 |
```

Section 6.5 explicitly acknowledges the exclusion:

> "Mode 2.5 CANNOT detect: ... typography detail issues (Auditor B excluded)"

And provides the rationale (line 427): "Typography/flow/grid are structural — IMPROVE should not be changing them."

### Analysis

**Question: Should B be added as a 4th auditor, or should readability questions be distributed?**

The rationale at line 427 is WRONG for one specific case: when the IMPROVE builder adds D-07 (hover states, micro-refinements) via Pass B, text legibility CAN change. For example, a `:hover` that shifts `letter-spacing` or a `::selection` color that makes text harder to read. More critically, readability issues flagged in the INITIAL Mode 4 PA may PERSIST through IMPROVE — and Mini-PA would not detect them.

However, adding a 4th auditor increases Mini-PA cost by 33% (3 -> 4 agents). The purpose of Mini-PA is speed — if we keep adding auditors, it converges toward Mode 4.

**Recommended approach: Distribute 3 critical B questions to existing auditors, NOT add a 4th auditor.**

The 3 most IMPROVE-relevant B questions are:
- PA-02 ("Is any text uncomfortable to read?") — the experiential readability catch-all
- PA-08 ("Is there any text you have to lean in or squint to read?") — the physical discomfort detector
- PA-81 ("For every chart, diagram, or infographic: can you answer 'What is the ONE thing...?'") — information extraction

PA-02 is Tier 1 (mandatory). Its exclusion from Mini-PA is the real gap.

### Exact Change Spec

**File: pa-deployment.md, Section 6.2, replace the auditor table:**

```markdown
| Auditor | Role | Questions |
|---------|------|-----------|
| **A** | Impression + Emotion | PA-01, PA-02, PA-03, PA-05, PA-45, PA-65 |
| **C** | Spatial + Proportion | PA-11, PA-30, PA-31, PA-50, PA-66 |
| **G** | Metaphor + Ideology | PA-18, PA-19, PA-42, PA-54, PA-68 |

**Total: 16 questions across 3 auditors.**
```

Add PA-02 to Auditor A's Mini-PA set. This is a Tier 1 mandatory question that belongs in every audit mode. Auditor A already handles impression/emotion — "Is any text uncomfortable to read?" is a first-impression question.

**Section 6.5, replace the first bullet:**

```markdown
Mode 2.5 CANNOT detect: responsive failures (no 768px/1024px viewport), typography DETAIL issues (Auditor B excluded — but readability catch-all PA-02 is covered by Auditor A), flow/pacing problems (Auditor D excluded), grid regressions (Auditor E excluded), cross-page coherence (Auditor I excluded), consistency/rhythm (Auditor F excluded).
```

**Section 6.4, add after the weaver protocol adjustments:**

```markdown
- PA-02 cross-validation: If Auditor A flags PA-02 (readability issue), Weaver must escalate to Mode 4 (readability regression in IMPROVE is likely structural, requiring Auditor B's full question set).
```

### Assessment

| Dimension | Value |
|-----------|-------|
| Lines of change | +1 line modified in table (15->16 questions), +2 lines in 6.5, +3 lines in 6.4 |
| Builder experience impact | POSITIVE — readability issues caught faster in IMPROVE cycles |
| Regression risk | NONE for COMPOSED mode. Slight load increase for Auditor A (6->7 questions in Mini-PA). A's Mode 4 load is already 9 questions, so 7 in Mini-PA is well within capability |
| Interaction effects | Interacts with SIG-13 — if APPLIED mode has adjusted PA scoring, PA-02 is mode-agnostic (readability matters regardless of mode) |
| NET IMPROVEMENT | 4/5 — high-value, minimal-cost fix to a genuine blind spot |
| Priority | **IMPLEMENT NOW** — PA-02 is Tier 1 mandatory; its absence from Mini-PA is a clear omission |

---

## SIG-10: Disposition Instructions in Low-Attention Zone

### Current State

artifact-builder-recipe-compose.md has 5 phases:
- Phase 1 (lines 36-88): READ YOUR VOCABULARY — tokens.css, components.css, brief
- Phase 2 (lines 92-204): SELECT YOUR PER-PAGE CREATIVE DECISIONS — backgrounds, typography, metaphor, callouts, components, container, hover, transitions
- Phase 3 (lines 208-369): DEPLOY YOUR SCAFFOLDING — zone-by-zone building
- Phase 4 (lines 373-510): DEPLOY DISPOSITIONAL INSTRUCTIONS (D-01 through D-09)
- Phase 5 (lines 513-569): SELF-EVALUATE

The D-01 through D-09 instructions appear in Phase 4, which starts at line 373 of a 569-line document. This is the 65th percentile of the document — firmly in the "attention fade zone" for LLM processing.

However, Step 1.1b (lines 54-67) already provides a mechanism-category quick-reference at the TOP of Phase 1:

```
| Category | Top Mechanisms | CSS Signature |
|----------|---------------|---------------|
| **Spatial** | Zone padding progression, container width modulation | ...
| **Temporal** | Density arc, scroll rhythm, transition weight | ...
| **Material** | Background color pairs, border weight hierarchy | ...
| **Behavioral** | Hover states, focus-visible, ::selection | ...
| **Relational** | Multi-coherence, component zone-adaptation | ...
| **Typographic** | Type scale progression, letter-spacing zones | ...
```

### Analysis

**Question: Should the mechanism-category quick-reference move to Phase 2, or would that overload the creative decision phase?**

The issue is more nuanced than it appears. The disposition instructions (D-01 through D-09) are not TECHNIQUE VOCABULARY — they are COMPOSITIONAL PURPOSE. D-01 says "read the content's register," not "use `font-size: 18px`." Moving them earlier would mix PURPOSE instructions with VOCABULARY instructions, potentially confusing the builder about what to DO first.

The current sequence is actually correct for COMPOSED mode:
1. Learn your vocabulary (Phase 1)
2. Make creative decisions (Phase 2)
3. Build the structure (Phase 3)
4. Apply compositional purpose (Phase 4)

The problem is that by Phase 4, the builder has already BUILT the structure. D-01 (Content-Register Reading) and D-02 (Room Perception at Boundaries) should inform BUILDING, not be applied AFTER building.

**The real fix is splitting the dispositions:**
- D-01, D-02, D-06 are STRUCTURAL dispositions that should inform Phase 2 (creative decisions) and Phase 3 (building)
- D-03, D-04, D-05, D-09 are COMPOSITIONAL dispositions that can remain at Phase 4 as assessment/deepening

But this would be a major restructuring. A lighter fix: add a disposition SUMMARY to Phase 2 as a forward reference.

### Exact Change Spec

**File: artifact-builder-recipe-compose.md, after Step 2.9 (line 204), before Phase 3:**

Insert a forward-reference block:

```markdown
### Disposition Forward-Reference (Read Now, Deploy in Phase 4)

These 7 dispositions shape your building. Internalize them NOW — they guide the choices you make in Phase 3 and the assessment you perform in Phase 4:

| ID | One-Sentence Purpose | Affects Phase 3 Decisions |
|----|---------------------|--------------------------|
| D-01 | CSS should respond to each section's character (NARRATIVE/REFERENCE/CODE) | Zone typography, density, layout type |
| D-02 | Zone transitions should feel like entering a different room | Background deltas, boundary channel shifts |
| D-03 | Build as if you will sign this page — express certainty | Restraint in mechanism selection, border hierarchy |
| D-04 | Create a second-half surprise moment that breaks the pattern | 1-2 scale/color/layout ruptures, placed in scroll bottom 50% |
| D-05 | The scroll should feel like a journey with pacing | Section heights, visual density variation |
| D-06 | Whitespace is deliberate shape, not default | Vary padding between zones, compress/breathe intentionally |
| D-09 | Designate one mid-page zone as deliberately plainer | Choose quiet zone during Phase 2 zone selection |

**Full deployment instructions are in Phase 4.** This table ensures you CONSIDER these purposes while making creative decisions, even if you deploy them later.
```

**File: artifact-builder-recipe-compose.md, Phase 4 opening (line 373):**

Add after the phase title:

```markdown
> **NOTE:** You previewed these dispositions in the Phase 2 forward-reference table.
> Now APPLY them deliberately. For each disposition below, assess whether your
> Phase 3 building already embodies it (often it will if you internalized the table)
> or whether you need to adjust your work.
```

### Assessment

| Dimension | Value |
|-----------|-------|
| Lines of change | +15 lines after Step 2.9, +4 lines at Phase 4 opening |
| Builder experience impact | STRONGLY POSITIVE — builder enters Phase 3 with disposition awareness instead of discovering purpose constraints after committing to structure |
| Regression risk | LOW — existing Phase 4 content is unchanged; this adds a summary, not a replacement. Risk: builder might skim Phase 4 because they "already saw the table." Mitigated by the Phase 4 note saying "now APPLY them deliberately" |
| Interaction effects | Affects SIG-12 — if APPLIED mode dispositions differ (they do), the forward-reference table would need mode-conditional content. See SIG-12 analysis |
| NET IMPROVEMENT | 4/5 — addresses a real attention-zone problem with minimal disruption |
| Priority | **IMPLEMENT NOW** — this is a pure-upside improvement with clear builder experience benefit |

---

## SIG-12: APPLIED Mode Has No Explicit Recipe Path

### Current State

The compose recipe (artifact-builder-recipe-compose.md) contains COMPOSED-mode language throughout:

- Line 30: "You have **80% creative authority**"
- Step 2.3 (line 131): "Derive a governing metaphor from the content. Name your CSS custom properties by CONCEPT, not by position."
- Step 2.4 (line 142): "In composed mode, callouts should modulate per zone"
- Phase 4 (line 379): "shift your building mode from APPLIED... to COMPOSED"
- Throughout Phase 4: D-02 "room perception," D-03 "signing frame," D-04 "second-half moment," D-05 "reader's scroll" — all assume compositional ambition

For APPLIED mode content (reference/catalog/documentation with low heterogeneity), these instructions are either inapplicable or confusing. An APPLIED-mode builder must:
1. Ignore "derive a governing metaphor" (no metaphor viability)
2. Ignore "modulate callouts per zone" (uniform is correct for APPLIED)
3. Ignore D-04 "surprise moment" (no compositional surprise in a reference doc)
4. Ignore the mode-shift language in Phase 4 (already in APPLIED mode by design)

There is no guidance on WHAT to do instead.

### Analysis

**Question: How much text needs to be added? Can mode-conditional callout blocks work?**

The APPLIED mode recipe is genuinely SIMPLER. It does not need 569 lines. The key differences:

| Aspect | COMPOSED | APPLIED |
|--------|----------|---------|
| Custom property naming | Concept-based (`--dispatch-open`) | Position-based (`--bg-z1`) is FINE |
| Callout adaptation | Zone-modulated padding/borders | Uniform is CORRECT |
| Metaphor | Required, structural | Not applicable |
| D-04 (surprise) | 1-2 moments in second half | SKIP — consistency is the value |
| D-09 (quiet zone) | Deliberate restraint zone | Less relevant — all zones are similar density |
| Quality target | PA-05 3.0+ (CEILING/FLAGSHIP) | PA-05 2.5-3.0 (MIDDLE) |
| Creative authority | 80% | 60-70% (more framework, less invention) |

**Two implementation options:**

**Option A: Mode-conditional callout blocks within the existing recipe (~40 lines added)**
Add `> **APPLIED MODE:** ...` blocks at 6 key points where COMPOSED assumptions are made.

**Option B: Separate APPLIED recipe file (~150 lines)**
Create `artifact-builder-recipe-compose-applied.md` as a stripped-down version.

**Recommendation: Option A.** A separate file creates maintenance burden (changes to the recipe must be made in two places). Conditional blocks keep everything in one document and are more likely to stay synchronized.

### Exact Change Spec

**File: artifact-builder-recipe-compose.md**

**1. After "80% creative authority" (line 30), add:**

```markdown
> **Mode note:** This recipe serves both COMPOSED and APPLIED modes. The Execution Brief specifies your mode. COMPOSED sections are marked. If your brief says APPLIED: follow the APPLIED alternatives where noted; skip metaphor-specific steps; name properties by position (`--bg-z1`) not concept. APPLIED mode quality target: PA-05 2.5-3.0 (MIDDLE tier). COMPOSED mode quality target: PA-05 3.0+ (CEILING/FLAGSHIP).
```

**2. After Step 2.3 heading (line 131), add:**

```markdown
> **APPLIED MODE:** Skip metaphor derivation. Name CSS custom properties by position (`--bg-z1`, `--bg-z2`, `--text-primary`). This is correct for APPLIED mode — position-naming signals that mechanisms solve LOCAL problems, not a governing concept. Proceed to Step 2.4.
```

**3. After Step 2.4 first sentence (line 142), add:**

```markdown
> **APPLIED MODE:** Style callouts uniformly across all zones. Consistent component appearance is a FEATURE of APPLIED mode, not a defect. Use one padding value, one border-weight, one background tint for all callouts. Proceed to Step 2.5.
```

**4. After Phase 4 opening sentence (line 379), add:**

```markdown
> **APPLIED MODE:** Skip D-04 (Second-Half Moment) entirely — consistency IS the value for reference/catalog content. For D-02 (Room Perception), use SUBTLE zone differentiation (15-25 RGB) rather than dramatic (25-50 RGB). For D-09 (Quiet Zone), this is optional — uniform density across zones is acceptable for APPLIED mode. Apply D-01 (Content-Register Reading), D-03 (Signing Frame), D-05 (Reader's Scroll), and D-06 (Negative Space) as written — these serve all modes.
```

**5. After Step 5.6 mode indicators (line 533), add:**

```markdown
> **APPLIED MODE expected indicators:** Position-based custom property names, uniform component styling, no governing metaphor (articulate "well-organized reference" instead), layout driven by content-type not concept. These are CORRECT outcomes for APPLIED mode, not defects.
```

**6. In Phase 4, after D-04 (line 436), add:**

```markdown
> **APPLIED MODE:** SKIP D-04. Reference and catalog content should be predictable. A "surprise" in a documentation page is a failure of user expectations, not a design achievement. Your quality comes from CONSISTENCY and CLARITY, not compositional drama.
```

### Assessment

| Dimension | Value |
|-----------|-------|
| Lines of change | +6 callout blocks, ~30 lines total added |
| Builder experience impact | STRONGLY POSITIVE — APPLIED-mode builder gets clear guidance instead of having to intuit which instructions to ignore |
| Regression risk | LOW for COMPOSED — callout blocks are clearly marked "APPLIED MODE" and would not confuse a COMPOSED-mode builder. Risk: builder in COMPOSED mode might read APPLIED guidance and self-downgrade. Mitigated by the brief explicitly stating the mode |
| Interaction effects | DIRECTLY affects SIG-10 — the forward-reference table needs an APPLIED column. DIRECTLY affects SIG-13 — if APPLIED has clear guidance, PA expectations should match |
| NET IMPROVEMENT | 5/5 — this is the highest-value change in this analysis. APPLIED mode is currently unsupported in the recipe, meaning every APPLIED build must improvise |
| Priority | **IMPLEMENT NOW** — APPLIED mode is the DEFAULT for low-heterogeneity content, which is 40-50% of builds. Zero guidance for 40-50% of builds is a critical gap |

---

## SIG-13: Mode-Agnostic PA Scoring Penalizes APPLIED Builds

### Current State

PA questions that assume COMPOSED mode:

| Question | Text | Issue for APPLIED |
|----------|------|-------------------|
| PA-16 | "Pick two elements that should look identical. Do they?" | APPLIED: identical elements ARE the correct outcome. Scoring "no variation" as a defect penalizes correct APPLIED behavior |
| PA-17 | "Is there a visual rhythm (like a beat in music), or random?" | APPLIED: uniform rhythm is correct. Lack of VARIATION in rhythm is not a defect |
| PA-44 | "Without labels/headings/text annotations, could you still sense the metaphor from visual structure alone?" | APPLIED: NO METAPHOR. This question is unanswerable and should score N/A |
| PA-65 | "If this page were a piece of music... ensemble with different parts?" | APPLIED: "choir singing in unison" is the CORRECT answer, but scores as sub-optimal |
| PA-66 | "Look at empty spaces between sections. Are they all the same 'flavor'?" | APPLIED: yes, same flavor = CORRECT for reference content |
| PA-67 | "Does the page do something visually that you would not have predicted?" | APPLIED: unpredictable = FAILURE in reference content |
| PA-68 | "Does the page's organizing metaphor persist across ALL scroll thirds?" | APPLIED: NO METAPHOR. N/A |

**Key Tier 5 questions affected:** PA-65, PA-66, PA-67, PA-68 (4 of 9 Tier 5 questions assigned to Auditors A, C, G)

### Analysis

**Question: Should metaphor questions be scored N/A for APPLIED? What is the PA-05 ceiling for APPLIED?**

**The PA-05 sub-criteria are mode-agnostic by design.** Let me check each:

1. **DESIGNED** — "Does this feel like intentional composition?" YES, this is valid for APPLIED. A well-organized reference page IS intentionally designed.
2. **COHERENT** — "Does this feel like one designer made it?" YES, valid for APPLIED. Uniform component styling IS coherent.
3. **PROPORTIONATE** — "Does the spatial balance feel considered?" YES, valid for APPLIED.
4. **POLISHED** — "Is execution quality high?" YES, valid for APPLIED.

PA-05 itself is mode-agnostic and SHOULD be. The problem is in Tier 5 questions, which specifically test for COMPOSITIONAL DEPTH that APPLIED mode intentionally lacks.

**Recommended approach:**

1. For PA-05 scoring: NO CHANGE. PA-05 sub-criteria work for both modes. APPLIED ceiling is legitimately 3.0/4 (3 sub-criteria PASS + DESIGNED is hard at 4/4 without metaphor, but achievable for exceptional reference design).

2. For Tier 5 scoring: score 4 metaphor-dependent questions as N/A for APPLIED mode. Reduce denominator from 9 to 5.

3. APPLIED Tier 5 ceiling: 5/5 possible (PA-60 design moments, PA-61 multi-voice, PA-62 transition variation, PA-63 fractal coherence, PA-64 restraint — all are achievable in APPLIED mode).

### Exact Change Spec

**File: pa-questions.md, after Section 2.2 heading "The Nine Tier 5 Questions" (line 97), add:**

```markdown
### 2.1a Mode-Conditional Scoring

**COMPOSED mode:** All 9 Tier 5 questions scored. Denominator = 9.

**APPLIED mode:** 4 questions scored N/A (metaphor-dependent):
- PA-65 (Compositional Voice / Music Analogy) — N/A: "choir in unison" is correct for APPLIED
- PA-66 (Negative Space Variety) — N/A: uniform gaps are correct for reference content
- PA-67 (Novelty Beyond Competence) — N/A: predictability IS the value for reference content
- PA-68 (Metaphor Spatial Coverage) — N/A: no metaphor to persist

Remaining 5 questions scored normally: PA-60, PA-61, PA-62, PA-63, PA-64.
APPLIED Tier 5 denominator = 5.

**APPLIED Tier 5 scoring thresholds (adjusted denominator):**
| YES Count | Verdict |
|-----------|---------|
| 5/5 | COMPOSED (exceptional APPLIED — consider whether mode should be COMPOSED) |
| 3-4/5 | APPROACHING |
| 2/5 | STRUCTURED |
| 0-1/5 | VOCABULARY ONLY |
```

**File: pa-deployment.md, Section 6.2, add after the auditor table:**

```markdown
**APPLIED mode question adjustments (Mini-PA):**
- Auditor A: Drop PA-65 (N/A for APPLIED). Keep PA-01, PA-02, PA-03, PA-05, PA-45. Total: 5 (COMPOSED) or 5 (APPLIED).
- Auditor G: Drop PA-68 (N/A for APPLIED). Keep PA-18, PA-19, PA-42, PA-54. Total: 5 (COMPOSED) or 4 (APPLIED).
- Auditor C: Drop PA-66 (N/A for APPLIED). Keep PA-11, PA-30, PA-31, PA-50. Total: 5 (COMPOSED) or 4 (APPLIED).
```

**File: pa-questions.md, Section 4.4 Combined Verdict Matrix, add a note:**

```markdown
> **APPLIED mode PA-05 ceiling:** 3.0/4. This is NOT a penalty — it reflects that DESIGNED (4/4) requires compositional depth that APPLIED mode intentionally does not pursue. An APPLIED page at PA-05 3.0 is EXCELLENT. The PA-05 ceiling is a mode property, not a quality judgment.
>
> Specifically: PA-05a (DESIGNED) has a practical ceiling of CONDITIONAL PASS for APPLIED, because "mechanisms in conversation" requires a governing logic that APPLIED mode replaces with local problem-solving. PA-05b (COHERENT), PA-05c (PROPORTIONATE), PA-05d (POLISHED) can all achieve clean PASS in APPLIED mode.
```

**File: artifact-orchestrator.md, Section 4 (Phase 1.5: Mode Selection), add after line 266:**

```markdown
**PA-05 target by mode:**
- APPLIED: PA-05 2.5-3.0 (MIDDLE tier). Tier 5 denominator = 5 (4 metaphor questions scored N/A).
- COMPOSED: PA-05 3.0+ (CEILING/FLAGSHIP). Tier 5 denominator = 9.

**Ship thresholds by mode:**
- APPLIED SHIP: PA-05 >= 2.5, zero soul violations
- COMPOSED SHIP: PA-05 >= 3.5, zero soul violations
- (REFINE thresholds adjusted proportionally)
```

**File: pa-deployment.md, Section 1.2, after the auditor assignment table note (line 155), add:**

```markdown
> **APPLIED mode note:** Auditors F and G assess questions that assume compositional depth (PA-16 visual rhythm, PA-44 metaphor from structure, PA-65 music analogy, PA-68 metaphor persistence). The Weaver MUST be informed of the page's mode (APPLIED or COMPOSED) so that "no metaphor detected" and "uniform rhythm" are interpreted as CORRECT APPLIED outcomes, not as defects. The mode is communicated to the Weaver via the gate results file (which includes mode from Phase 0 routing).
```

### Assessment

| Dimension | Value |
|-----------|-------|
| Lines of change | +12 lines in pa-questions.md, +8 lines in pa-deployment.md (two locations), +6 lines in artifact-orchestrator.md = ~26 lines total |
| Builder experience impact | STRONGLY POSITIVE indirectly — APPLIED builds will no longer receive REFINE verdicts triggered by metaphor absence, which would have sent the builder into a compositional deepening cycle that cannot succeed for reference content |
| Regression risk | MEDIUM — the APPLIED ship threshold (PA-05 >= 2.5) is notably lower than COMPOSED (>= 3.5). Risk: orchestrator selects APPLIED mode to "game" the easier threshold for content that should be COMPOSED. Mitigated by: mode selection happens at Phase 0 (before any build), and the Content-Form Fit Gate (artifact-routing.md line 607-613) enforces mode based on content properties, not desired threshold |
| Interaction effects | DIRECTLY affected by SIG-12 — if APPLIED recipe guidance exists, builders produce APPLIED-appropriate output, and PA scoring matches. Without SIG-12, builders improvise and may produce output that falls between modes, making PA scoring ambiguous. SIG-12 and SIG-13 MUST be implemented together |
| NET IMPROVEMENT | 4/5 — essential for mode fairness and prevents wasted REFINE cycles on APPLIED content |
| Priority | **IMPLEMENT NOW** — but ONLY alongside SIG-12. Implementing SIG-13 without SIG-12 creates a scoring system for a mode that has no recipe guidance |

---

## Cross-Cutting Analysis

### Recommended Implementation Order

```
1. SIG-12 (APPLIED recipe path)        — FIRST: establishes what APPLIED builds should produce
2. SIG-13 (APPLIED PA scoring)         — SECOND: scoring must match what the recipe produces
3. SIG-09 (Mini-PA readability)        — THIRD: independent, no dependencies
4. SIG-10 (Disposition forward-ref)    — FOURTH: depends on SIG-12 (APPLIED column in table)
5. SIG-06 (IMPROVEMENTS transform)     — LAST: lowest priority, already mostly covered
```

**SIG-12 and SIG-13 form a dependency pair:** implementing either alone creates inconsistency. SIG-12 without SIG-13 means builders follow APPLIED guidance but PA penalizes them for it. SIG-13 without SIG-12 means PA accommodates APPLIED but builders have no guidance on what "good APPLIED" looks like.

### Total Added Complexity

| File | Lines Added | Lines Modified | Lines Removed |
|------|-------------|----------------|---------------|
| artifact-builder-recipe-compose.md | +30 (SIG-12) + 15 (SIG-10) = +45 | 0 | 0 |
| pa-deployment.md | +8 (SIG-09) + 8 (SIG-13) = +16 | 1 (table row, SIG-09) | 0 |
| pa-questions.md | +12 (SIG-13) | 0 | 0 |
| artifact-orchestrator.md | +4 (SIG-06) + 6 (SIG-13) = +10 | 0 | 0 |
| d10-observer-protocol.md | 0 | 0 | 0 |
| **TOTAL** | **+83** | **1** | **0** |

Net: +83 lines across 4 files. This is modest — the APPLIED mode gap affects 40-50% of builds and 83 lines is reasonable infrastructure for that coverage.

### APPLIED Mode Coherence (After All Changes)

After implementing all 5 changes, APPLIED mode would have:

1. **Recipe guidance** (SIG-12): 6 callout blocks telling the builder what to do differently
2. **Disposition awareness** (SIG-10): Forward-reference table needs an APPLIED column (interaction with SIG-12)
3. **Fair PA scoring** (SIG-13): 4 metaphor questions scored N/A, adjusted Tier 5 denominator, mode-appropriate ship threshold
4. **Mini-PA coverage** (SIG-09): PA-02 readability catch-all included for both modes
5. **REFINE safety** (SIG-06): Marginal improvement, mode-agnostic

**Remaining APPLIED gaps after all 5 changes:**
- No APPLIED-specific examples in CD-006 reference section (Phase 2 of compose recipe references COMPOSED exemplar only)
- No APPLIED-specific value table guidance (current value tables assume compositional ambition)
- Pass B (polish recipe) has APPLIED references only in D-08 assessment (line 152, 220) — but APPLIED mode may not need Pass B if composition is less ambitious

**Verdict: APPLIED mode goes from UNSUPPORTED to ADEQUATELY SUPPORTED.** Not excellent — but the 83-line investment covers the critical path. Remaining gaps are lower priority and can be addressed when the first APPLIED-mode build reveals specific pain points.

### Interaction Matrix

| | SIG-06 | SIG-09 | SIG-10 | SIG-12 | SIG-13 |
|--|--------|--------|--------|--------|--------|
| SIG-06 | -- | none | none | none | none |
| SIG-09 | none | -- | none | none | minor (PA-02 is mode-agnostic) |
| SIG-10 | none | none | -- | **STRONG** (table needs APPLIED column) | none |
| SIG-12 | none | none | **STRONG** (table needs APPLIED column) | -- | **CRITICAL** (must implement together) |
| SIG-13 | none | minor | none | **CRITICAL** (must implement together) | -- |

---

*End of Mode & Process Gap Analysis. 5 issues analyzed, 4 recommended for IMPLEMENT NOW, 1 for NEXT CYCLE.*
