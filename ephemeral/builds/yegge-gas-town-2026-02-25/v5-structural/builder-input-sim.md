# Builder Input Simulation Report
Date: 2026-02-26
Auditor: Opus agent (builder-input-sim)
Scope: Simulate exact input each builder agent receives across all pipeline passes

---

## 1. Pass A Builder (Phase 2A -- Structure)

### 1.1 Files Referenced in Prompt Template (MANIFEST.md L1137-1189)

| # | File | Actual Lines | Position in Prompt | Attention Zone |
|---|------|--------------|--------------------|----------------|
| 1 | Execution Brief (assembled) | ~100-165 (Gas Town actual: 272) | FIRST (after template preamble) | **HIGH** (primacy) |
| 2 | tokens.css | 183 | Second reference file | HIGH |
| 3 | components.css | 944 | Third reference file | MEDIUM (large, mid-position) |
| 4 | mechanism-catalog.md | 751 | Fourth reference file | **LOW** (large, late position) |
| 5 | artifact-value-tables.md | 262 | Fifth reference file, marked "optional" | **LOW** (end position, optional flag) |
| 6 | CD-006 reference HTML | 2,085 | "Optional, COMPOSED mode only" | **LOWEST** (optional, massive, last) |
| 7 | artifact-builder-recipe-compose.md | 833 | Embedded as recipe instructions | HIGH (framing document) |

**Note:** The prompt template (MANIFEST.md L1137-1189) is 52 lines of template text itself.

### 1.2 Total Input Size Calculation

| Component | Lines | Est. Tokens (~4/line) |
|-----------|-------|-----------------------|
| Template preamble (prompt text) | 52 | 208 |
| Recipe (compose) | 833 | 3,332 |
| Execution Brief | 165-272 | 660-1,088 |
| tokens.css | 183 | 732 |
| components.css | 944 | 3,776 |
| mechanism-catalog.md | 751 | 3,004 |
| value-tables.md (optional) | 262 | 1,048 |
| CD-006 reference (optional, COMPOSED) | 2,085 | 8,340 |
| **TOTAL (all included)** | **5,275-5,382** | **21,100-21,528** |
| **TOTAL (without optionals)** | **2,928-3,035** | **11,712-12,140** |

### 1.3 Orchestrator Complexity Accounting vs Reality

The orchestrator document (L110-122) claims:
- "Total builder input: ~4,250 lines"
- Breakdown includes "Constraint layer: 73 lines (recipe format)"

**FINDING [F-01]: The 73-line figure is MISLEADING.** The actual compose recipe is 833 lines. The "73-line constraint layer" refers to the brief template's constraint subset, but the builder receives the FULL 833-line recipe document plus the brief (165-272 lines). The combined recipe+brief = ~1,000-1,100 lines of instructional text, not 73.

**FINDING [F-02]: Builder input ceiling (BV-07) says max 2,500 lines.** But actual Gas Town brief was 272 lines (template says 100-165). If the brief exceeds target AND all reference files are included, total easily hits 3,000+ lines. The BV-07 ceiling is enforced but the estimate is unreliable.

**FINDING [F-03]: The "~4,250 lines" estimate is OUTDATED.** The compose recipe alone is 833 lines (post-v5 extraction). Original estimate appears to reference the pre-split single recipe (827 lines). The split into compose (833) + polish (300) actually INCREASED total line count by ~306 lines, though each individual builder sees fewer.

### 1.4 Contradiction Analysis

| Contradiction | Source A | Source B | Severity |
|---------------|----------|----------|----------|
| **Container width** | Brief template L21: "940-960px" | Recipe compose L177: "Choose based on content density. Both are within identity constraints." | MINOR -- recipe defers to brief, but the word "Both" implies two options without specifying what they are |
| **CSS line targets** | Template L1174: "Target 400-700 CSS lines (structure)" | Recipe compose (various): builds toward 400-700 | CONSISTENT |
| **Background delta floor** | Brief template L45: "15 RGB points" (floor) | Recipe compose L114-115: "20 RGB delta = FLOOR for adjacent zones (was 15)" | **SIGNIFICANT** -- brief says 15, recipe says 20. Builder sees both. |
| **Mechanism catalog summary vs full** | Recipe L56: "Before reading the full mechanism-catalog.md (1,200+ lines)" | Actual mechanism-catalog.md: 751 lines | MINOR -- stale reference to pre-trimmed catalog |
| **Recipe line count claim** | Recipe L32: "~3,600 total builder input lines" | Actual calculated: 2,928-5,382 | MINOR -- range too broad to be useful |

**FINDING [F-04]: Background delta contradiction is the most dangerous.** The brief template says 15 RGB = floor. The recipe says 20 RGB = floor. A compliant builder could use 16 RGB (satisfies brief) or 21 RGB (satisfies recipe). The brief is positioned BEFORE the recipe in reading order, so brief's "15" gets primacy. But the recipe explicitly says "was 15 -- too close to invisible" which OVERRIDES the brief. Which authority wins depends on the builder's reading strategy.

### 1.5 Constraint vs Recipe Ratio

Analyzing the 833-line compose recipe:

| Content Type | Lines | % |
|--------------|-------|---|
| Recipe steps (sequenced instructions with "Read/Select/Deploy/Assess" verbs) | ~420 | 50.4% |
| Calibration values + reference data | ~180 | 21.6% |
| Constraints + prohibitions ("must not", "do NOT") | ~95 | 11.4% |
| Framing/context/headers/separators | ~90 | 10.8% |
| Worked examples (CSS snippets) | ~48 | 5.8% |

**Constraint-to-recipe ratio: 1:4.4** (95 constraint lines vs 420 recipe lines). This is a HEALTHY ratio -- dramatically better than the historical 7.9:1 guardrail-to-playbook ratio identified in the Flagship dissection. The recipe format is working as intended.

### 1.6 Attention Positioning Analysis (D5 -- Position Effect)

**High attention (first 20% of input):**
- Template preamble (3-sentence conviction prompt, phase summary)
- Recipe Phase 1: "READ YOUR VOCABULARY" -- instructs builder to read reference files
- CD-006 zone-by-zone reference summary (5 bullet points)
- Zone background strategy + calibration

**Medium attention (middle 60%):**
- Recipe Phases 2-3: Creative decisions, scaffolding deployment
- Mechanism category quick-reference table
- Component selection + layout
- Reader model axis values

**Low attention (final 20%):**
- Recipe Phase 4: Disposition deployment (D-01 through D-06, D-09) -- the COMPOSITIONAL HEART
- Self-evaluation questions
- Appendices (provenance, historical notes)

**FINDING [F-05]: Disposition instructions are in the LOW attention zone.** D-01 through D-09 (the compositional differentiators) appear in Phase 4 of the recipe -- the final 20% of instructional text. By this point, the builder has already internalized vocabulary, made creative decisions, and built scaffolding. The dispositions arrive AFTER the builder has mentally committed to an approach. This is mitigated by the brief's Tier 4 (which appears earlier), but the recipe's disposition deployment instructions -- which contain the CSS-specific techniques -- are late-positioned.

### 1.7 Does the Builder Receive Worked Examples?

**YES, partially.** The recipe contains:
- CD-006 zone-by-zone summary (5 zones described with specific CSS, L96-103)
- Callout variant reference values (3 zones, L144-148)
- Hover behavior CSS snippets (3 examples, L202-209)
- Reader model axis values (4 axes with specific px/rem values, L160-175)

**NOT received:**
- artifact-worked-examples.md (182 lines) -- this file exists but is NOT referenced in the Pass A prompt template
- Full CD-006 HTML (2,085 lines) -- marked optional, COMPOSED only

**FINDING [F-06]: The worked-examples artifact is ORPHANED for builders.** The file `artifact-worked-examples.md` (182 lines) is referenced in the Content Analyst prompt but never in the builder prompts. Builders get inline snippets in the recipe instead.

---

## 2. Pass B Builder (Phase 2B -- Polish)

### 2.1 Files Referenced in Prompt Template (MANIFEST.md L1191-1247)

| # | File | Actual Lines | Position in Prompt | Attention Zone |
|---|------|--------------|--------------------|----------------|
| 1 | Pass A HTML output | ~400-700 (CSS) + HTML = ~800-1,200 total | FIRST | **HIGH** (primacy) |
| 2 | Execution Brief | 165-272 | After Pass A HTML | HIGH |
| 3 | tokens.css | 183 | Reference file | MEDIUM |
| 4 | components.css | 944 | Reference file | MEDIUM-LOW |
| 5 | mechanism-catalog.md | 751 | Reference file | LOW |
| 6 | Structural check results | ~20-50 (gate output) | After brief | MEDIUM |
| 7 | artifact-builder-recipe-polish.md | 300 | Embedded as recipe | HIGH (framing) |

### 2.2 Total Input Size

| Component | Lines | Est. Tokens |
|-----------|-------|-------------|
| Template preamble | 56 | 224 |
| Recipe (polish) | 300 | 1,200 |
| Pass A HTML | ~800-1,200 | 3,200-4,800 |
| Execution Brief | 165-272 | 660-1,088 |
| Structural check results | ~30 | 120 |
| tokens.css | 183 | 732 |
| components.css | 944 | 3,776 |
| mechanism-catalog.md | 751 | 3,004 |
| **TOTAL** | **3,229-3,736** | **12,916-14,944** |

### 2.3 ADD-ONLY Constraint Analysis

The polish recipe (L252-276) specifies a comprehensive ADD-ONLY constraint:

**Prohibited modifications (8 categories):**
1. NO changing zone backgrounds (BV-02 locked)
2. NO changing layout structure
3. NO adding/removing zones
4. NO changing font-size, font-weight, line-height
5. NO changing padding/margin on zones
6. NO changing border-width or border-color
7. NO moving content between zones
8. NO changing governing metaphor or custom property names

**Permitted operations (11 categories):**
1. ADD hover/focus/selection/print/reduced-motion CSS
2. ADD ARIA attributes
3. ADD skip link
4. ADD tabindex
5. ADD figure/figcaption wrappers
6. ADD HTML comment blocks
7. MODIFY heading hierarchy (accessibility only)
8. MODIFY tabular-nums
9. MODIFY text-indent (D-07)

**FINDING [F-07]: The ADD-ONLY constraint creates a potential IMPOSSIBLE SITUATION for D-08 (Skeleton Test).** If Pass B's D-08 assessment reveals the skeleton is APPLIED (uniform stack of boxes), the builder is instructed to DOCUMENT but NOT FIX it (L276). This is correct protocol -- the PA audit catches it and REFINE addresses it. However, the builder experiences the frustration of diagnosing a compositional flaw they cannot repair. The recipe handles this correctly (L276: "DOCUMENT it in the self-evaluation comment but do NOT fix it") but there's a cognitive load cost.

**FINDING [F-08]: Pass B cannot increase mechanism count.** The recipe says "Ensure >=800 total CSS lines, >=14 mechanisms" (MANIFEST L1213), but the ADD-ONLY constraint prohibits adding new zones, changing layouts, or modifying padding/margins -- the primary mechanisms. Pass B can add hover states (behavioral mechanisms) and micro-typography (typographic mechanisms), but structural/spatial/material mechanisms are FROZEN from Pass A. If Pass A deployed <14 mechanisms, Pass B can only close the gap through behavioral + typographic additions. This is correctly designed (Pass A should deploy 14+), but creates a failure mode if Pass A under-delivers.

### 2.4 Pass B Input Completeness

The prompt template requires:
1. Pass A HTML -- YES, produced by Phase 2A
2. Execution Brief -- YES, from Phase 1
3. tokens.css, components.css, mechanism-catalog.md -- YES, static files
4. Structural check results -- YES, from Phase 2A-gate

**All 4 input categories are complete.** No missing inputs.

### 2.5 Attention Positioning for Pass B

**High attention:** Pass A HTML (the builder reads the artifact FIRST -- correct primacy for preservation)
**Medium:** Brief + structural check results (context for understanding intent + what passed/failed)
**Low:** Reference files (tokens, components, mechanisms -- these are re-reads, not first encounters)

This positioning is CORRECT. The builder's primary job is to preserve and polish, so Pass A HTML in primacy position reinforces the preservation mandate.

---

## 3. REFINE Builder (Iteration Cycle)

### 3.1 What the REFINE Builder Receives (MANIFEST L1391-1423)

| # | Input | Source | Approximate Size |
|---|-------|--------|-----------------|
| 1 | Conviction artifact | Extracted from `<!-- CONVICTION: ... -->` in Pass 1 HTML | ~3-5 lines |
| 2 | Artistic impression | Weaver Output B (generative language, no numbers) | ~30-80 lines |
| 3 | RESIDUAL artifact | Extracted from `<!-- RESIDUAL: ... -->` in Pass 1 HTML | ~10-30 lines |
| 4 | Execution Brief | Original brief from Phase 1 | 165-272 lines |
| 5 | Pass 1 HTML | Complete HTML output from Pass B | ~1,500-3,000 lines |
| 6 | Generatively transformed IMPROVEMENTS | Orchestrator rewrites HIGH/MED items from builder | ~15-40 lines |
| **TOTAL** | | | **~1,723-3,427 lines** |

### 3.2 What the REFINE Builder Does NOT Receive

Per orchestrator (L552-556) and MANIFEST (L1404-1406):
- Gate results (NO)
- PA scores (NO)
- Failure analysis (NO)
- Fix lists (NO)
- Threshold numbers (NO)
- Diagnostic vocabulary (NO)
- Reference files (tokens.css, components.css, mechanism-catalog.md) -- **NOT in REFINE prompt**

**FINDING [F-09]: REFINE builder loses reference file access.** The REFINE prompt (MANIFEST L1391-1423) does NOT include tokens.css, components.css, or mechanism-catalog.md. The builder must work from memory of the vocabulary visible in the Pass 1 HTML's existing CSS. This is likely INTENTIONAL (preventing the builder from entering "research mode" when they should be in "compositional mode"), but it means a REFINE builder cannot introduce NEW component library classes or mechanisms they didn't see in the Pass 1 HTML.

### 3.3 REFINE Isolation Verification

| Check | Status | Notes |
|-------|--------|-------|
| Does REFINE builder see PA reports? | NO -- correct | Only artistic impression (Output B) |
| Does REFINE builder see gate scores? | NO -- correct | Blocked by isolation rules |
| Does REFINE builder see fix lists? | NO -- correct | IMPROVEMENTS are generatively transformed |
| Does REFINE builder see threshold numbers? | NO -- correct | No "15 RGB" or "120px" language |
| Does REFINE builder use diagnostic verbs? | NO -- prompt uses generative verbs | "illuminate, reveal, deepen, intensify" |
| Is REFINE builder a different Opus agent? | REQUIRED -- orchestrator checklist item | L541 checks this |

**REFINE isolation is WELL-DESIGNED.** The architectural intent (compositional mode, not corrective mode) is preserved through vocabulary filtering, information filtering, and agent separation.

### 3.4 IMPROVEMENTS Transformation (Orchestrator Responsibility)

The orchestrator (L527-534) must:
1. Read HIGH and MEDIUM confidence items from `<!-- IMPROVEMENTS: ... -->`
2. Rewrite each using compositional vocabulary:
   - "fix" -> "deepen", "increase" -> "reveal", "add" -> "illuminate"
   - "8 RGB" -> "whispers where it could speak"
   - "16px" -> "feels compressed where it could breathe"
3. Preserve ZONE REFERENCE (so builder knows WHERE)
4. Pass transformed text to REFINE builder

**FINDING [F-10]: IMPROVEMENTS transformation is a MANUAL orchestrator step with no verification gate.** If the orchestrator passes raw IMPROVEMENTS (with diagnostic vocabulary) instead of transformed ones, REFINE isolation is violated. There is no gate (BV or GR) that verifies the transformation happened. The Observer (OBS-05-09) checks for "correct inputs" but the check is for existence, not vocabulary auditing.

---

## 4. Cross-Builder Analysis

### 4.1 Context Window Safety

| Builder | Total Lines | Est. Tokens | % of 200K Context | Status |
|---------|-------------|-------------|--------------------|---------
| Pass A (all optionals) | 5,382 | 21,528 | 10.8% | SAFE |
| Pass A (no optionals) | 3,035 | 12,140 | 6.1% | SAFE |
| Pass B | 3,736 | 14,944 | 7.5% | SAFE |
| REFINE | 3,427 | 13,708 | 6.9% | SAFE |

**ALL builders are well within context window.** Even with maximum optionals, Pass A uses only ~11% of Opus's 200K context. This is not a bottleneck.

### 4.2 Information Funnel Across Passes

```
Content Source (~500-2,000 lines)
    |
    v [50:1 compression]
Content Map (70 lines, Gas Town actual)
    |
    v [1:3 expansion with template]
Execution Brief (272 lines, Gas Town actual)
    |
    v [+ reference files]
Pass A Input (3,035-5,382 lines)
    |
    v [builder creates ~1,200 line HTML]
Pass B Input (3,229-3,736 lines)
    |
    v [PA + Weaver produce ~200 lines artistic]
REFINE Input (1,723-3,427 lines)
```

**Key observation:** Information INCREASES from content map to builder input (expansion, not compression). The compression happens at the content-to-map boundary (50:1). After that, the pipeline ADDS vocabulary (tokens, components, mechanisms) rather than compressing. This is the correct architecture -- the builder needs vocabulary, not summaries.

### 4.3 Cross-File Contradiction Summary

| # | Finding | Severity | Affects |
|---|---------|----------|---------|
| F-01 | "73-line constraint layer" claim is misleading -- actual recipe is 833 lines | SIGNIFICANT | Honest complexity accounting |
| F-02 | BV-07 ceiling (2,500 lines) may be exceeded with long brief + all refs | MINOR | Pass A only, enforceable |
| F-03 | "~4,250 lines" estimate is stale post-extraction | MINOR | Documentation accuracy |
| F-04 | Background delta floor: brief says 15, recipe says 20 | **BLOCKING** | Pass A builder receives contradictory floors |
| F-05 | Disposition instructions in low-attention zone of recipe | SIGNIFICANT | Compositional quality |
| F-06 | artifact-worked-examples.md orphaned from builder prompts | MINOR | Missed resource |
| F-07 | ADD-ONLY + D-08 = builder sees flaw but cannot fix | MINOR (by design) | Pass B cognitive load |
| F-08 | Pass B cannot add structural mechanisms if Pass A under-delivers | SIGNIFICANT | Mechanism count gate |
| F-09 | REFINE builder has no reference files (tokens/components/mechanisms) | MINOR (intentional) | REFINE vocabulary scope |
| F-10 | IMPROVEMENTS transformation has no verification gate | SIGNIFICANT | REFINE isolation |

### 4.4 Key Questions Answered

**Q1: Is total input under context window?**
YES. All three builder types use 6-11% of 200K context. Not a bottleneck.

**Q2: Are there contradictions between files the builder receives?**
YES. The most dangerous is F-04 (background delta floor: 15 vs 20 RGB). The brief template says 15; the recipe says 20 and explicitly notes "was 15 -- too close to invisible." The builder sees both in the same context window. Resolution depends on which the builder treats as authoritative.

**Q3: What percentage is constraints vs actionable recipe?**
11.4% constraints vs 50.4% recipe steps in the compose recipe. Ratio = 1:4.4. This is dramatically healthier than the historical 7.9:1 guardrail-to-playbook ratio.

**Q4: Does the builder receive worked examples?**
PARTIALLY. Inline CD-006 zone descriptions (5 bullets), callout reference values, and hover CSS snippets are embedded in the recipe. The dedicated `artifact-worked-examples.md` (182 lines) is NOT referenced in any builder prompt.

**Q5: What gets lost to D5 (Position Effect/Attention Decay)?**
- Disposition deployment techniques (D-01 through D-09 CSS specifics) are in the recipe's Phase 4 -- late position
- mechanism-catalog.md (751 lines) is the 4th reference file -- deep in the reference stack
- value-tables.md is optional AND last -- lowest attention position
- The brief's Tier 4 (dispositions) partially compensates by positioning D-01--D-09 earlier in the brief, but the brief versions lack the CSS-specific technique vocabulary that the recipe versions provide

---

## 5. Recommendations

### 5.1 BLOCKING

1. **Resolve the background delta floor contradiction (F-04).** The brief template should be updated to match the recipe's "20 RGB floor" language. Currently the builder sees "15" (brief) and "20" (recipe) in the same context. Pick one authoritative number and make both files agree. Recommended: 20 RGB floor in both documents, with 15 RGB noted as "perception threshold" (the physics floor) vs 20 RGB as "compositional floor" (the quality floor).

### 5.2 SIGNIFICANT

2. **Add IMPROVEMENTS transformation verification.** Either: (a) BV gate that scans REFINE builder input for diagnostic vocabulary ("fix", "increase", threshold numbers), or (b) Observer check (OBS-XX) that reads the REFINE builder's actual input and flags un-transformed diagnostic language.

3. **Move disposition CSS techniques earlier in recipe.** The D-01--D-09 technique vocabulary currently appears in Phase 4 (late). Consider: (a) moving the mechanism-category quick-reference table (L56-67) into Phase 2 alongside creative decisions, or (b) creating a "deployment vocabulary cheat sheet" that appears in Phase 2 before creative decisions are made.

4. **Verify mechanism count achievability in Pass B.** If Pass A deploys 10 mechanisms (below the 14 target), Pass B can only add behavioral + typographic mechanisms under the ADD-ONLY constraint. Document explicitly: "Pass A MUST deploy >= 12 mechanisms -- Pass B can add at most 2-4 behavioral/typographic mechanisms under ADD-ONLY."

### 5.3 MINOR

5. **Update the honest complexity accounting** (orchestrator L110-122) to reflect post-extraction line counts. The "~4,250" figure and "73-line constraint layer" are stale.

6. **Consider referencing artifact-worked-examples.md** in the Pass A builder prompt. The file exists (182 lines), contains content map + brief examples, and is currently orphaned from the builder workflow.

7. **Add tokens.css and components.css to REFINE input** as optional reference (not mandatory reading). Currently REFINE builders work purely from Pass 1 HTML vocabulary, which limits their ability to introduce new component library patterns.

---

## 6. Appendix: Complete Input Manifest Per Builder

### Pass A Builder -- Exact Input Stack
```
[TEMPLATE PREAMBLE]        52 lines     (attention: HIGH)
[RECIPE - compose]        833 lines     (attention: HIGH → degrading)
  Phase 1: Read Vocabulary   ~80 lines
  Phase 2: Creative Decisions ~100 lines
  Phase 3: Deploy Scaffolding ~250 lines
  Phase 4: Deploy Disposition ~200 lines  (attention: LOW)
  Phase 5: Self-Evaluate      ~50 lines
  Appendices                 ~153 lines
[EXECUTION BRIEF]     165-272 lines     (attention: HIGH -- primacy in "read order")
[tokens.css]              183 lines     (attention: HIGH)
[components.css]          944 lines     (attention: MEDIUM -- large, mid-position)
[mechanism-catalog.md]    751 lines     (attention: LOW -- large, late)
[value-tables.md]         262 lines     (attention: LOW -- optional, end)
[CD-006 reference]      2,085 lines     (attention: LOWEST -- optional, massive, last)
```

### Pass B Builder -- Exact Input Stack
```
[TEMPLATE PREAMBLE]        56 lines     (attention: HIGH)
[RECIPE - polish]         300 lines     (attention: HIGH)
[PASS A HTML]       800-1,200 lines     (attention: HIGH -- primacy for preservation)
[EXECUTION BRIEF]     165-272 lines     (attention: MEDIUM)
[STRUCTURAL CHECK]     20-50 lines     (attention: MEDIUM)
[tokens.css]              183 lines     (attention: LOW -- re-read)
[components.css]          944 lines     (attention: LOW -- re-read)
[mechanism-catalog.md]    751 lines     (attention: LOW -- re-read)
```

### REFINE Builder -- Exact Input Stack
```
[TEMPLATE PREAMBLE]        24 lines     (attention: HIGH)
[CONVICTION ARTIFACT]     3-5 lines     (attention: HIGH -- primacy)
[ARTISTIC IMPRESSION]   30-80 lines     (attention: HIGH)
[RESIDUAL ARTIFACT]     10-30 lines     (attention: HIGH)
[TRANSFORMED IMPROVEMENTS] 15-40 lines  (attention: MEDIUM)
[EXECUTION BRIEF]     165-272 lines     (attention: MEDIUM)
[PASS 1 HTML]       1,500-3,000 lines   (attention: LOW -- massive, last)
```

---

*End of builder input simulation. 10 findings, 7 recommendations.*
