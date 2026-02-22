# 10 -- Absorption & Compression Audit: Does Post-Surgery Content Actually Reach the Builder?

**Auditor:** absorption-auditor (Opus)
**Date:** 2026-02-20
**Scope:** Full pipeline information delivery to builder agent
**Files Read:** build-page/SKILL.md (483 lines), tension-composition/SKILL.md (1,614 lines), conventions-brief.md (565 lines), mechanism-catalog.md (1,218 lines), components.css (1,195 lines), prohibitions.md (419 lines), tokens.css (183 lines), 38-master-enrichment-trim-synthesis.md (295 lines)

---

## 1. BUILDER TOTAL INPUT INVENTORY

### Mandatory Reads (Specified in Build-Page Section 3, Builder Spawn Prompt)

| # | File | Lines | Read Order | Category |
|---|------|-------|------------|----------|
| 1 | `[output-dir]/_tc-brief.md` | ~50 | FIRST | TC Brief (content-specific) |
| 2 | `design-system/pipeline/conventions-brief.md` | 565 | SECOND | Process Guidance |
| 3 | `[content-file-path]` (content markdown) | Variable (500-3000 typical) | THIRD | Content Material |

### Reference Files ("consult as needed")

| # | File | Lines | Read Order | Category |
|---|------|-------|------------|----------|
| 4 | `grammar/mechanism-catalog.md` | 1,218 | AS NEEDED | Mechanism CSS Patterns |
| 5 | `components/components.css` | 1,195 | AS NEEDED | Component Library |
| 6 | `vocabulary/tokens.css` | 183 | AS NEEDED | CSS Variables |
| 7 | `identity/prohibitions.md` | 419 | LAST (before CSS) | Soul Constraints |

### Total Inventory

| Category | Lines |
|----------|-------|
| Mandatory reads (items 1-3) | ~1,115-2,615 |
| Reference files (items 4-7) | 3,015 |
| **Grand total available to builder** | **~4,130-5,630** |
| **Mandatory guidance (excluding content)** | **~615** |

### Absorption Assessment

Productive Opus absorption range for guidance is ~500-800 lines. The mandatory guidance (TC brief ~50 + conventions brief 565) totals ~615 lines. **This is within the productive range.** The conventions brief alone at 565 lines is near the ceiling of focused absorption but workable.

**However:** If the builder actually opens all 4 reference files (3,015 lines additional), total guidance balloons to ~3,630 lines -- 4.5x the productive ceiling. This is why the "consult as needed" question (Section 3 below) is critical.

**VERDICT: Mandatory input is right-sized (~615 lines of guidance). Reference input is a gamble -- the builder either ignores it (losing critical intelligence) or reads it (blowing the absorption budget).**

---

## 2. INFORMATION ORDERING MAP

### Reading Sequence (from build-page SKILL.md lines 85-94)

```
                      PRIMACY ZONE                  MIDDLE DEAD ZONE                 RECENCY ZONE
                    (first 20% = 40% attention)    (middle 60% = 30% attention)     (last 20% = 30% attention)

TC Brief (50 lines)  ████████████████████████████▒▒
                     ^-- metaphor, zones, tensions  ^-- mechanisms, CSS directions

Conventions Brief    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
(565 lines)          Sec 1-2: Identity + Perception  Sec 3-8: Richness, Multi-coherence,   Sec 11-14: Five Questions,
                                                     Fractal Echo, Metaphor, Transitions,   Restraint, Accessibility,
                                                     CSS Vocabulary, Creative Authority      Responsive, Conviction

Content              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
(variable)           First sections                   Middle body                            Final sections
```

### Primacy Zone (TC Brief + Conventions Sections 1-2): ~163 lines

**What lands here with high retention:**
- Structural metaphor and why it is structural
- Zone architecture (how content divides)
- Content tensions
- Selected mechanisms (names + brief descriptions)
- Soul constraints (Section 1 Identity -- border-radius:0, box-shadow:none, container 940-960px, font trinity, palette)
- Perception thresholds (Section 2 -- 15 RGB, letter-spacing >= 0.025em, stacked gaps <= 120px)

**Assessment:** THIS IS GOOD. The two most critical pieces (metaphor + soul/perception physics) occupy the primacy zone. The conventions brief's ordering is well-designed for attention economics.

### Middle Dead Zone (Conventions Sections 3-8): ~280 lines

**What falls in the dead zone:**
- Section 3: Richness formula (density x restraint x confidence)
- Section 4: Multi-coherence binding rule (3+ channels, 6 channels defined, semantic direction, coherence arc planning, typographic progression per direction)
- Section 5: Fractal echo (5 scales, parametric echo, character-scale register)
- Section 6: Unified metaphor (structural not announced, metaphor in nav elements)
- Section 7: Transition grammar (SMOOTH/BRIDGE/BREATHING, transition-to-coherence mapping)
- Section 8: CSS vocabulary (component 2-zone DNA, 3-tier border budget, dark slab, callout system, layout topologies, drop cap)

**CRITICAL INTELLIGENCE IN THE DEAD ZONE:**
- **Multi-coherence operational detail** (Section 4): The concrete 4-zone example, the coherence arc planning table (Opening/Building/Climax/Resolution), and the boundary CSS recipe are THE operational heart of the brief. These tell the builder WHAT TO DO. They are in the dead zone.
- **CSS vocabulary** (Section 8): The component DNA recipe, 3-tier border budget, layout topologies -- these are the BUILDING vocabulary. Dead zone.
- **Transition grammar** (Section 7): SMOOTH/BRIDGE/BREATHING CSS values. Dead zone.
- **Fractal echo recipe** (Section 5): The parametric echo CSS recipe (specific values per scale) is HERE, not in the TC brief. Dead zone.

### Recency Zone (Conventions Sections 9-14, Conviction Card, Process): ~122 lines

**What lands here with moderate retention:**
- Creative authority (Section 9 -- what you're free to do)
- Quality floor (Section 9B -- >= 14 mechanisms, >= 800 CSS lines, etc.)
- Compositional memory (Section 10 -- boundary naming, midpoint reflection)
- Five questions (Section 11 -- squint, scroll, second half, boundary, skeleton)
- Restraint list (Section 12)
- Accessibility (Section 13)
- Responsive (Section 14)
- Conviction card + Process section (THE BUILD RECIPE)

**Assessment:** The Process section (lines 504-545), which contains the actual BUILD RECIPE ("Understand / Plan / Build / Verify" with the boundary CSS recipe example), is in the recency zone. This is GOOD for retention. The Conviction Card, which anchors compositional memory, is also in recency. BUT -- the quality floor numbers (Section 9B) are recency-adjacent, which means they'll compete with the process recipe for the builder's late-read attention.

### Dead Zone Summary

**The core problem:** Sections 4-8 (~280 lines) contain the OPERATIONAL INTELLIGENCE (how to actually achieve multi-coherence, what CSS values to use for transitions, the fractal echo recipe, the component DNA patterns). These sections are in the middle dead zone. The builder will retain the WHAT (metaphor, soul) and the STRUCTURE (process recipe), but will under-weight the HOW (specific CSS patterns that produce quality).

**Does TC-ENRICH-01 (recipe format) change this?** YES -- significantly. If the TC brief converts from specification to recipe format, it can embed the critical Section 4-8 intelligence (multi-coherence CSS, transition values, fractal echo values) directly into the ~50-line TC brief, which occupies the PRIMACY zone. This is the highest-leverage structural change because it moves dead-zone intelligence into the primacy zone.

**Does TC-ENRICH-13 (builder anchors) change this?** PARTIALLY. A 3-line footer at the end of the TC brief saying "3 things the builder MUST NOT violate" would land in the recency zone of the TC brief (which is still the primacy zone of the total input). It provides a constraint anchor but doesn't move operational intelligence.

---

## 3. "CONSULT AS NEEDED" REALITY CHECK

### File 4: mechanism-catalog.md (1,218 lines)

**Probability builder actually opens it: LOW (20-30%)**

The build-page spawn prompt says "consult as needed during build" -- this is a suggestion, not a mandate. The builder is instructed to read 3 mandatory files first (TC brief + conventions brief + content). By the time those are absorbed, the builder is 615+ lines deep and eager to start writing CSS. Opening a 1,218-line reference catalog at that point requires high self-discipline.

**Critical intelligence in this file:**
- All 18 mechanism CSS patterns (the actual CSS code snippets)
- Application modes (PROGRESSIVE vs DISCRETE for each mechanism)
- Impact profiles and anti-patterns
- Zone mapping guidance per mechanism

**Should this intelligence be moved?** YES -- the TC-ENRICH-03 (CSS recipe hints per mechanism) and TC-ENRICH-10 (mechanism catalog impact profiles in TC brief) address this. The TC brief should include the 3-5 most relevant mechanism CSS patterns inline, not just names. This eliminates the need for the builder to open the full catalog.

### File 5: components.css (1,195 lines)

**Probability builder actually opens it: LOW (15-25%)**

Even lower than mechanism catalog. CSS file, 1,195 lines, raw component definitions without narrative guidance. The conventions brief (Section 8) already describes the component DNA pattern and lists the 5 layout topologies. A builder who has internalized Section 8 may reasonably conclude they have enough component knowledge.

**Critical intelligence in this file:**
- Exact component class names (`.callout`, `.callout__label`, `.callout__body`, etc.)
- Semantic color variant CSS (`.callout--essence`, `.callout--tip`, etc.)
- Ready-to-use component CSS that can be copy-adapted

**Should this intelligence be moved?** PARTIALLY. The conventions brief already describes component DNA (Section 8). The missing piece is exact class names and variant selectors. TC-ENRICH-25 (LOW priority) proposes adding component class names to the brief -- this would be sufficient. The full CSS file is reference material; its value is in adoption, not comprehension.

### File 6: tokens.css (183 lines)

**Probability builder actually opens it: MEDIUM (50-60%)**

Short file (183 lines), and the conventions brief (Section 1) already reproduces the critical values. A builder who carefully reads Section 1 has the palette, font families, and spacing scale. However, the complete type scale (--text-xs through --text-display) and zone colors (--color-zone-sparse, --color-zone-dense) are ONLY in tokens.css, not in conventions brief.

**Critical intelligence in this file:**
- Zone background color tokens (the actual hex values for zone differentiation)
- Complete type scale (exact rem values for h1-h4, body, meta)
- Accent color exact hex values

**Should this intelligence be moved?** The zone colors and type scale should be in the conventions brief Section 1 or in the TC brief's CSS direction hints. Conventions brief Section 1 reproduces the palette but omits zone tokens. This is a small but meaningful gap.

### File 7: prohibitions.md (419 lines)

**Probability builder actually opens it: MEDIUM-HIGH (60-70%)**

The spawn prompt says to read it "LAST before CSS begins." The placement instruction is helpful. At 419 lines it's substantial, but the builder only needs the first ~100 lines (8 ABSOLUTE prohibitions). However, the conditional prohibitions (lines 101-350) contain critical operational guidance (no 2px borders, no accent borders < 4px, heading spacing ratio >= 1.5, etc.) that the builder is unlikely to fully absorb at reading position #7.

**Critical intelligence in this file:**
- 8 absolute prohibitions (the soul -- but these are already in conventions brief Section 1)
- 12 conditional prohibitions (operational rules that AREN'T in conventions brief)
- Heading spacing ratio >= 1.5 (only in prohibitions.md, not in conventions brief)

**Should this intelligence be moved?** The conditional prohibitions that affect CSS decisions (heading spacing ratio, no 2px borders, accent border minimum) should be in the conventions brief or TC brief. Currently they're buried in a 419-line file that the builder reads last, if at all.

---

## 4. TC INVOCATION TRACE

**Does /build-page actually invoke TC? YES.**

### Trace: Content -> TC -> TC Brief -> Builder

The trace from build-page SKILL.md is explicit:

**Step 1: Orchestrator invokes TC** (build-page lines 29-64)

The orchestrator spawns 1 Opus agent with this prompt:
```
Read these files IN ORDER:
1. ~/.claude/skills/tension-composition/SKILL.md -- YOUR PROCESS
2. [content-file-path] -- THE CONTENT
3. mechanism-catalog.md -- MECHANISM VOCABULARY
4. prohibitions.md -- SOUL CONSTRAINTS
5. tokens.css -- TOKEN VALUES
```

The TC agent runs Phases 0-4, outputs `_tc-brief.md` (~50 lines, 5 sections).

**Step 2: Orchestrator waits, verifies** (build-page line 64)
```
Wait for TC agent to complete. Verify _tc-brief.md exists and contains all 5 sections.
```

**Step 3: Builder receives TC brief as File #1** (build-page lines 85-88)
```
Read these files IN THIS ORDER:
1. [output-dir]/_tc-brief.md -- YOUR DESIGN BRIEF
2. conventions-brief.md -- YOUR PROCESS GUIDANCE
3. [content-file-path] -- THE MATERIAL
```

### TC Agent Input Inventory

| File | Lines | Purpose |
|------|-------|---------|
| tension-composition/SKILL.md | 1,614 (currently) | TC process |
| Content markdown | Variable | Source material |
| mechanism-catalog.md | 1,218 | Phase 4 mechanism selection |
| prohibitions.md | 419 | Soul constraints |
| tokens.css | 183 | Token values |
| **Total TC agent input** | **~3,434 + content** | |

**Assessment:** The TC agent's input is HEAVY (~3,434 lines of guidance before content). This is within Opus capability for analysis tasks (the TC agent is ANALYZING, not building CSS -- analysis mode has higher effective absorption), but it's near the upper bound. The post-trim TC skill (~1,390 lines) would bring total to ~2,210 -- a 36% reduction that significantly improves absorption.

### TC Brief Content -> Builder

The TC brief is specified as ~50 lines containing 5 sections:
1. STRUCTURAL METAPHOR (what + why + CSS implications)
2. ZONE ARCHITECTURE (content division driven by metaphor)
3. CONTENT TENSIONS (key tensions the composition must express)
4. SELECTED MECHANISMS (which mechanisms serve the metaphor)
5. METAPHOR-IMPLIED CSS DIRECTIONS (specific CSS patterns)

**Critical question: Does Section 5 (CSS Directions) actually reach the builder with sufficient specificity?**

The TC brief spec says: "Specific CSS patterns the metaphor suggests (e.g., 'geological strata -> visible layer boundaries via border-left, density gradient via tightening spacing, stratification via bg color shifts')."

This is DIRECTIONAL, not OPERATIONAL. "Visible layer boundaries via border-left" does not tell the builder what width, what color, or how to vary it across zones. This is the compression problem: the TC analyst derives rich compositional intelligence through 1,614 lines of process, then compresses it to ~50 lines of directions.

**Compression ratio:** TC process (1,614 lines) + content analysis -> TC brief (~50 lines) = 32:1 compression minimum. If we count mechanism catalog (1,218 lines) that TC reads, it's (1,614 + 1,218) / 50 = 56:1.

**TC-ENRICH-01 (recipe format) is critical here.** It would change Section 5 from "geological strata -> visible layer boundaries via border-left" to something like:

```
Z1->Z2 DEEPENING: bg #FEF9F5 -> #F0EBE3 (18 RGB), padding 64px -> 48px, border-left: 0 -> 3px, font-size 1rem -> 0.9375rem
Z2->Z3 DEEPENING: bg #F0EBE3 -> #FFFFFF (28 RGB), padding 48px -> 40px, border-left: 3px -> 4px
```

This bridges the 56:1 compression gap by providing CSS-ready values in the brief itself.

---

## 5. POST-TRIM CONTENT DESTINATION CHECK

### Trimmed Content: Where Does It Go?

| Trimmed Content | Lines | Destination After Trim | Builder Visibility |
|-----------------|-------|------------------------|-------------------|
| Phase 4.7B (builder verification tables) | ~60 | DELETED | **LOST** -- but replicated in conventions brief Sections 5 + 9B (quality floor) |
| Phase 4.8 (section-aware composition) | ~88 | DELETED | **LOST** -- section-aware composition logic (section count, breathing zones, element uniformity, dramatic moment placement) is NOT in conventions brief |
| Phase 4.9 (tokenization JS) | ~44 JS | DELETED (keep ~30 lines of token scale awareness) | PARTIAL -- token awareness retained, self-check JS removed |
| Phase 5+ (standalone) | ~318 | Moved to STANDALONE-APPENDIX.md | N/A -- never builder-facing |
| Builder warning text | ~60 | DELETED (keep 12-line mapping table) | **DEPENDS on B-02 fix** -- if W-code definitions added to conventions-brief, warnings survive. If not, warnings are deleted from TC AND absent from conventions-brief = TOTAL LOSS. |

### CRITICAL FINDING: Phase 4.8 (Section-Aware Composition) Is LOST

Phase 4.8 contains section-aware composition guidance including:
- Pacing prediction heuristic (Step 4.2B, lines 1239-1278)
- Rhythm variation requirement (Step 4.2C, lines 1280-1306)

Wait -- I need to re-check. Let me trace precisely. The trim plan says "Phase 4.8 section-aware composition ~88 lines" is deleted. But Steps 4.2B and 4.2C are in the MAIN Phase 4 section (which is retained), not in Phase 4.8. Phase 4.7B (builder verification) and 4.8 are SPECIFIC subsections that are builder-facing, not TC-facing.

**Corrected trace:**
- Phase 4.7B (Landmark Completeness GATE, lines ~1471-1498): Builder verification table. This content IS replicated in build-page SKILL.md Section 4.4 (DG-3: header + main + footer). The builder doesn't need it from TC.
- Phase 4.8 (section-aware composition): This appears to be builder-facing composition guidance that the TC agent doesn't execute. The pacing prediction (4.2B) and rhythm variation (4.2C) are RETAINED in TC -- they're TC-facing analysis.

**Revised assessment:** The trim is safer than initially appeared. Phase 4.7B content is covered by build-page gate DG-3. Phase 4.8 is builder-facing composition that SHOULD be in the conventions brief, not in TC.

**But is it in the conventions brief?**

Conventions brief Section 7 (Transition Grammar) covers SMOOTH/BRIDGE/BREATHING. This partially covers Phase 4.8's rhythm variation requirement. However, the SPECIFIC BINARY RULE ("at least 3 DIFFERENT transition types") from Step 4.2C is NOT in the conventions brief. It's only in TC Phase 4.2C.

**After trim, this rule is available only to the TC agent.** The TC agent can include it in the TC brief, but only if Phase 4.5 output instructions tell it to include transition type minimums. Currently the TC brief template has no explicit field for this.

**FIX NEEDED:** Either:
(a) Add "Minimum 3 transition types" to conventions brief Section 7, OR
(b) Add transition type minimum to TC brief Phase 4.5 template, OR
(c) TC-ENRICH-01 (recipe format) naturally includes transition specifications per boundary

Option (c) is the most elegant -- a recipe-format TC brief would naturally specify "Z1->Z2: SMOOTH, Z2->Z3: BRIDGE, Z3->Z4: BREATHING" which embeds the variety requirement.

---

## 6. THE 403-LINE QUESTION (CONVENTIONS BRIEF ANALYSIS)

*Note: The conventions brief is now 565 lines, not 403 as originally estimated.*

### Estimated Effective Utilization

| Section | Lines | Effective Use in CSS Decisions | Why |
|---------|-------|-------------------------------|-----|
| Sec 1: Identity (Soul) | 48 | **90%** -- HIGH | Primacy zone. Builder retains soul constraints. Directly constrains CSS. |
| Sec 2: Perception (Physics) | 20 | **85%** -- HIGH | Primacy-adjacent. Concrete thresholds (15 RGB, 0.025em). |
| Sec 3: Richness (Principle) | 17 | **40%** -- MEDIUM | Dead zone entry. Aspirational formula. No concrete CSS. |
| Sec 4: Multi-Coherence | 56 | **50%** -- MEDIUM | Dead zone. CRITICAL content but low retention. Concrete examples help. |
| Sec 5: Fractal Echo | 42 | **35%** -- LOW-MEDIUM | Deep dead zone. Tables help but parametric echo recipe is under-weighted. |
| Sec 6: Unified Metaphor | 18 | **30%** -- LOW | Dead zone. Aspirational. Builder already has metaphor from TC brief. |
| Sec 7: Transition Grammar | 30 | **60%** -- MEDIUM-HIGH | Dead zone exit. CONCRETE VALUES (SMOOTH/BRIDGE/BREATHING with px). Tables. |
| Sec 8: CSS Vocabulary | 78 | **55%** -- MEDIUM | Mid-zone. HIGH operational value but competing with Sections 3-7 for attention. |
| Sec 9: Creative Authority | 12 | **70%** -- HIGH | Recency approach. Permission-granting. Memorable. |
| Sec 9B: Quality Floor | 14 | **45%** -- MEDIUM | Numbers compete with process recipe for recency attention. |
| Sec 10: Compositional Memory | 16 | **30%** -- LOW | Recency but meta-guidance, not operational. |
| Sec 11: Five Questions | 14 | **50%** -- MEDIUM | Recency. Diagnostic. Used post-build (if remembered). |
| Sec 12: Restraint List | 15 | **75%** -- HIGH | Short, negative list. Easy to retain. |
| Sec 13: Accessibility | 26 | **65%** -- MEDIUM-HIGH | Recency. HTML skeleton template is directly usable. |
| Sec 14: Responsive | 10 | **40%** -- MEDIUM | Recency tail. Easily ignored until viewport testing. |
| Conviction Card + Process | 44 | **80%** -- HIGH | STRONG recency. THE BUILD RECIPE. Builder reads this right before CSS. |

**Overall effective utilization: ~55%** (~310 of 565 lines materially influence CSS decisions)

### Sections That Dominate Behavior (Primacy + Recency)

1. **Section 1 (Identity)** -- Soul constraints are impossible to miss. First thing read, absolute language.
2. **Process section** -- Last major section. Contains the boundary CSS recipe example. This RECIPE is the single most actionable content.
3. **Section 2 (Perception)** -- Immediately follows Identity. Concrete thresholds.
4. **Section 12 (Restraint List)** -- Short, negative, memorable. "Do not do X."
5. **Section 9 (Creative Authority)** -- Permission-granting. Emotionally significant.

### Sections Under-Weighted (Middle Dead Zone)

1. **Section 4 (Multi-Coherence) -- THE MOST CRITICAL LOSS.** The coherence arc planning table, the typographic progression per direction, and the concrete 4-zone DEEPENING example are the operational heart of multi-coherence. Dead zone.
2. **Section 5 (Fractal Echo)** -- The parametric echo CSS recipe (specific CSS per scale) is dead zone content.
3. **Section 3 (Richness)** -- The density/restraint/confidence formula is aspirational. Low operational impact in the dead zone.
4. **Section 6 (Unified Metaphor)** -- Aspirational. Builder already has metaphor from TC brief. Redundant in dead zone.

### Does TC-ENRICH-01 (Recipe Format) Change This?

**YES -- this is the single most impactful structural intervention for builder absorption.**

If the TC brief converts to recipe format, it can embed the dead-zone intelligence directly:

**Current TC brief (specification format):**
```
SELECTED MECHANISMS: Border-weight gradient, zone backgrounds, spacing compression, 2-zone DNA, dark slab inversion
METAPHOR-IMPLIED CSS DIRECTIONS: Geological strata -> visible layer boundaries via border-left, density gradient via tightening spacing
```

**Proposed TC brief (recipe format, TC-ENRICH-01):**
```
ZONE TRANSITION TABLE:
Z1 (Surface) -> Z2 (Sediment): SMOOTH | bg: #FEF9F5 -> #F0EBE3 (18 RGB) | padding: 64px -> 48px | font-weight: 400 -> 500 | 3 channels DEEPENING
Z2 (Sediment) -> Z3 (Bedrock): BRIDGE | bg: #F0EBE3 -> #FFFFFF (28 RGB) | padding: 48px -> 40px | border-left: 0 -> 3px | font-size: 1rem -> 0.9375rem | 4 channels DEEPENING
Z3 (Bedrock) -> Z4 (Core): BREATHING | bg: #FFFFFF -> #1A1A1A (inverted) | all channels shift | 5 channels RESOLVING

FRACTAL ECHO:
Navigation: header padding 48px, 3px border-bottom
Page: 4 zones with bg delta >= 15 RGB between each
Section: >= 2 component types per viewport
Component: .dense (padding: 16px) / .sparse (padding: 24px) delta >= 8px

3 THINGS BUILDER MUST NOT VIOLATE:
1. Container 960px (express narrowing through internal padding only)
2. Multi-coherence >= 3 channels at EVERY boundary (not just bookends)
3. No whitespace void > 120px total gap
```

This moves the critical operational intelligence (multi-coherence values, transition types, fractal echo recipe, builder anchors) from the conventions brief dead zone into the TC brief primacy zone. The conventions brief then serves as WORLD DESCRIPTION (retained through primacy/recency), while the TC brief serves as EXECUTION RECIPE (retained through primacy position + specificity).

**Estimated effective utilization with TC-ENRICH-01: 70-75%** (up from 55%)

### Does TC-ENRICH-13 (Builder Anchors) Change This?

**YES -- modestly.** The "3 things the builder MUST NOT violate" footer adds 3-5 lines of page-specific constraints at the END of the TC brief (still in primacy zone as it's within the first file read). This provides a NEGATIVE anchor (what not to do) that complements the recipe POSITIVE anchor (what to do).

The combination of TC-ENRICH-01 (positive recipe) + TC-ENRICH-13 (negative anchors) creates a framing sandwich in the primacy zone: recipe tells you what TO DO, anchors tell you what NOT TO DO. Both are retained at high levels.

---

## 7. COMPRESSION AUDIT

### Compression Chain: Research -> Builder

| Stage | Input | Output | Ratio | What's Lost |
|-------|-------|--------|-------|-------------|
| Research (R1-R5) | 337 findings, ~30,000 lines | Mechanism catalog (1,218 lines) + Guidelines (420 lines) | ~18:1 | Context, derivation stories, failure cases |
| Mechanism catalog -> TC Phase 4 | 1,218 lines | TC mechanism selection (~10 lines in brief) | ~122:1 | Application modes, anti-patterns, zone mappings, impact profiles |
| TC process (1,614 lines) -> TC brief | ~1,614 lines | ~50 lines | ~32:1 | Phase-by-phase derivation, candidate evaluation, tension scoring |
| Conventions brief -> builder memory | 565 lines | ~310 effective lines | ~1.8:1 | Dead zone content (Sections 3-6 mostly) |
| TC brief + conventions brief -> CSS | ~615 lines guidance | ~800-1500 lines CSS | Expansion (not compression) | The CSS IS the output |
| **End-to-end: Research -> builder's working memory** | **~30,000+ lines** | **~360 effective lines** | **~83:1** | |

### Are We Still Compressing Intelligence?

**YES. Brutally.**

**Compression point 1: TC brief (~50 lines from ~2,832 lines of TC input)**
The TC agent reads 1,614 lines of process + 1,218 lines of mechanism catalog. It outputs a ~50 line brief. Compression ratio: 56:1. This is the SAME compression problem identified in the pipeline analysis. The TC agent UNDERSTANDS multi-coherence, perceptual thresholds, transition grammar, fractal echo -- but the brief template asks for 5 sections of DIRECTIONS, not RECIPES. The intelligence dies in the compression.

TC-ENRICH-01 (recipe format) directly addresses this by changing the output from specification to recipe. But even a recipe brief at ~50 lines represents 56:1 compression from what the TC agent absorbed. The question is whether the compressed form retains the critical CSS values.

**Compression point 2: Conventions brief (565 lines from 337 findings)**
The conventions brief represents a well-designed compression of the design system's knowledge. At ~565 lines, it's a 53:1 compression from the original research. But this is a GOOD compression -- it extracts the operational principles and provides concrete CSS. The problem is not the compression ratio; it's the dead-zone placement of critical content.

**Compression point 3: Gate runner (1,159 lines -> 16 binary checks)**
The gate runner compresses perceptual theory into binary pass/fail checks. This is INTENTIONAL and CORRECT. Binary gates achieve 100% compliance. The compression here is not intelligence loss -- it's intelligence ENCODING.

**Compression point 4: PA skill (880 lines -> 9 auditors x ~7 questions)**
The PA skill compresses perceptual auditing theory into 63 questions. Each auditor gets 6-13 questions. This is also intentional and works well -- the MODE 4 pattern (9 independent auditors) compensates for per-auditor compression through breadth.

### Effective Information Delivery Rate to Builder

```
TC brief:           ~50 lines x 90% retention = 45 effective lines
Conventions brief:  565 lines x 55% retention = 310 effective lines
                                               ___
Total:                                         355 effective lines

Of those 355 lines, approximately:
  - 120 lines are SOUL CONSTRAINTS (what NOT to do) -- 34%
  - 80 lines are PROCESS RECIPE (what to do, in what order) -- 23%
  - 60 lines are PERCEPTION THRESHOLDS (what can the reader see) -- 17%
  - 50 lines are CSS VOCABULARY (component DNA, border budget) -- 14%
  - 45 lines are METAPHOR + MECHANISM DIRECTION (what to express) -- 12%
```

**The distribution is wrong.** The builder gets 34% soul constraints (what NOT to do) but only 14% CSS vocabulary and 12% metaphor-mechanism direction (what TO DO). This is the 7.9:1 guardrail-to-playbook ratio identified in the pipeline analysis, manifesting in the absorption pattern.

**With TC-ENRICH-01 (recipe format):**

```
TC brief (recipe):  ~80 lines x 90% retention = 72 effective lines (more operational)
Conventions brief:  565 lines x 55% retention = 310 effective lines
                                               ___
Total:                                         382 effective lines

Updated distribution:
  - 120 lines SOUL CONSTRAINTS -- 31%
  - 100 lines PROCESS + CSS RECIPE -- 26% (+3pp)
  - 72 lines METAPHOR-SPECIFIC CSS VALUES -- 19% (+7pp from TC recipe)
  - 50 lines CSS VOCABULARY -- 13%
  - 40 lines PERCEPTION THRESHOLDS -- 10%
```

The recipe format shifts the balance from 34/23/17 (constraints/process/thresholds) toward a more actionable 31/26/19 (constraints/process+recipe/metaphor-CSS). The improvement is modest but meaningful -- it's the difference between "the builder knows what not to do and has a process" vs "the builder knows what not to do, has a process, AND has CSS-ready values."

---

## 8. PROPOSED FIXES

### FIX 1: TC-ENRICH-01 Is the Highest-Leverage Single Change (CONFIRMED)

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Phase 4.5 (Sub-Skill Output Mode) -- currently the TC brief template

**Change:** Convert the TC brief output template from specification format to recipe format. The recipe must include:
- Zone transition table with CONCRETE CSS values per boundary (bg hex, padding px, font-size, border-left, channel count, direction)
- Fractal echo recipe with CSS per scale
- Transition type per boundary (SMOOTH/BRIDGE/BREATHING)
- 3-line "must not violate" footer (page-specific)

**Why:** Moves dead-zone intelligence (conventions brief Sections 4-7) into the primacy zone (TC brief). Bridges the 56:1 compression gap with CSS-ready values. This single change addresses 4 findings simultaneously: guardrail-to-playbook ratio, dead zone, compression loss, and builder visibility.

### FIX 2: Add Transition Type Minimum to Conventions Brief Section 7

**File:** `design-system/pipeline/conventions-brief.md`
**Location:** Section 7, after the transition type descriptions (around line 266)

**Add (~3 lines):**
```
Every page uses at least 3 different transition types across its zone boundaries. If all boundaries use the same type (all SMOOTH, all BRIDGE), the rhythm is metronomic. Vary the transitions.
```

**Why:** Phase 4.2C's rhythm variation binary rule is currently only in TC SKILL.md. After Phase 4.8 trim, the builder has no source for this rule unless the TC brief includes it (TC-ENRICH-01 handles this) OR the conventions brief includes it.

### FIX 3: Inline Zone Token Values in Conventions Brief Section 1

**File:** `design-system/pipeline/conventions-brief.md`
**Location:** Section 1, after the accent colors block (around line 47)

**Add (~6 lines):**
```
Zone differentiation colors (for adjacent zone backgrounds):
--color-zone-sparse: #FEF9F5;   /* Sparse breathing zones */
--color-zone-dense: #FFFFFF;    /* Dense content zones */
--color-zone-breathing: #FAF5ED;/* Recovery breathing zones */
```

**Why:** Zone tokens are the builder's primary tool for achieving >= 15 RGB background delta. They're currently only in tokens.css (a "consult as needed" reference file with ~50% open probability). Inlining them in Section 1 ensures the builder has zone hex values in the primacy zone.

### FIX 4: Conditional Prohibition Summary in Conventions Brief

**File:** `design-system/pipeline/conventions-brief.md`
**Location:** End of Section 1 (after the spacing scale, around line 28)

**Add (~5 lines):**
```
Heading spacing: space above heading / space below heading >= 1.5 (headings belong to content below them).
No 2px borders (only 1px, 3px, 4px exist). Accent borders on callouts: always 4px minimum.
```

**Why:** The two most operationally-impactful conditional prohibitions (heading spacing ratio, 2px border ban) are currently only in prohibitions.md (419 lines, read last, "consult as needed"). These rules directly affect CSS decisions. 5 lines in Section 1 puts them in the primacy zone.

### FIX 5: Mechanism Catalog "First 200 Lines" Directive Change

**File:** Not a skill file change -- this is an observation for TC-ENRICH-10.

Currently, build-page SKILL.md tells the builder mechanism-catalog.md is "consult as needed." The builder has a 20-30% chance of opening it.

TC-ENRICH-10 proposes that the TC brief include mechanism impact profiles (not just names). This is the right fix: the TC agent (who reads the full catalog) EXTRACTS the relevant mechanism CSS and puts it in the brief. The builder gets mechanism CSS through the TC brief rather than through direct catalog consultation.

**This means post-surgery, the mechanism catalog's primary consumer is the TC agent, not the builder.** The builder gets mechanism CSS via the TC brief. The catalog remains available for reference but is no longer a critical builder input. This is the correct routing -- the TC agent is the ANALYST who reads deeply; the builder is the COMPOSER who needs CSS recipes, not analysis.

---

## SUMMARY VERDICT

**The pipeline's information delivery to the builder is functional but inefficient.** The mandatory input (~615 lines) is right-sized, but critical operational intelligence (multi-coherence CSS, fractal echo recipe, transition grammar values) falls in the conventions brief's attention dead zone. The TC brief, which occupies the highest-retention primacy position, currently delivers DIRECTIONS rather than RECIPES -- a 56:1 compression that loses CSS-level specificity.

**Post-surgery assessment:**
- Trims are safe: removed content is either replicated elsewhere or builder-irrelevant
- ONE CRITICAL GAP: Phase 4.2C's rhythm variation rule has no destination after Phase 4.8 trim (fixed by TC-ENRICH-01 or conventions brief addition)
- The "consult as needed" files will remain mostly unread (probability 15-60%). This is ACCEPTABLE if TC-ENRICH-01 and TC-ENRICH-10 move the critical intelligence into the TC brief.

**The single highest-leverage change remains TC-ENRICH-01 (recipe format).** It addresses the compression gap, the dead zone, the guardrail-to-playbook ratio, and the builder visibility problem simultaneously. Without it, post-surgery intelligence delivery improves modestly (cleaner skill files). With it, intelligence delivery transforms structurally (operational CSS in primacy zone).

**Are we still compressing intelligence?** Yes. The end-to-end ratio is 83:1 from research to builder's working memory. This is irreducible given the pipeline architecture -- the TC agent is the designated compressor, the conventions brief is the designated world model. The question is not whether to compress, but whether the compressed form retains the right 1.2% of the original intelligence. TC-ENRICH-01 changes WHAT gets retained (CSS recipes instead of directions). That is the right intervention.

---

*END OF ABSORPTION & COMPRESSION AUDIT*
