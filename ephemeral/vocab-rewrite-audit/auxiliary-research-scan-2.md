# Auxiliary Research Scan 2 — Missing Insights for Vocabulary Files

**Agent:** auxiliary-scanner-2
**Date:** 2026-03-01
**Task:** Scan all auxiliary markdown sources for insights MISSING from the 5 new vocabulary files (identity.md, vocabulary.md, mechanisms.md, grammar.md, components.md)
**Sources Scanned:** 16 files across 6 directories (process/, guidelines/, validation/, specification/anti-patterns/, specification/patterns/, case-studies/)

---

## EXECUTIVE SUMMARY

**Files audited:** identity.md (82 lines), vocabulary.md (54 lines), mechanisms.md (89 lines), grammar.md (78 lines), components.md (36 lines)
**Auxiliary sources read:** 16 files (~5,200 lines total)
**Findings:** 21 insights identified (3 BLOCKING, 6 HIGH, 7 MEDIUM, 5 LOW)

The 5 vocabulary files are well-written and concise. The primary gap pattern is **operational detail that builders need but the new concise files omit**. The old auxiliary files contained extensive when-to-use criteria, content-form fit rules, and combination sequencing that don't appear anywhere in the new 5 files. Some of this is deliberate compression; some is actual loss.

---

## BLOCKING (3)

### B-1: Component Combination Rules — Completely Missing

**Source:** `specification/patterns/combination-rules.md` (193 lines)
**What's missing:** The 4 combination rules (velocity sequencing, temperature flow, weight balance, semantic proximity spacing) + the component properties model (velocity/temperature/weight per component) + the traffic-light rule.

**Why it matters:** grammar.md covers nesting, rhythm, zones, density, and anti-patterns. But it says NOTHING about how components interact when placed adjacently. A builder can follow every grammar rule and still create jarring sequences (Code Snippet -> Core Abstraction -> Reasoning = three SLOW/HEAVY components in a row). The combination rules are the ONLY place this is addressed.

**Where it should go:** grammar.md, as a new "## Sequencing" section between "## Density" and "## Compound Pages"

**Specific content needed:**
- Rule 1: Never stack same-velocity (SLOW+SLOW or FAST+FAST)
- Rule 2: Temperature flow (Warm -> Neutral -> Cold, never Warm -> Cold direct)
- Rule 3: Weight balance (Heavy+Heavy overwhelms, intersperse Light)
- Rule 4: Semantic proximity spacing (tight 8-16px, moderate 24-32px, loose 48-64px, recovery 64-80px)
- Traffic-light rule: Never place green callout adjacent to red callout
- Max per viewport: 2 callouts, 2 code blocks, 1 decision structure, 3 heavy total

**NOTE:** The traffic-light rule IS mentioned in identity.md's conditional refusals (line 67: "No traffic-light adjacency") but only as a negative. The combination rules provide the POSITIVE guidance of what TO do, not just what to avoid.

---

### B-2: Content Density Floor Rules — Completely Missing

**Source:** `guidelines/semantic-rules.md` Gap 6 (lines 252-318) and Gap 7 (lines 322-397)
**What's missing:** The minimum content requirements before assigning form treatments (zones, bento grids, progressive disclosure). These are binary gates, not judgment calls.

**Why it matters:** The flagship experiment FAILED because of this exact issue -- zones declared for sections with insufficient content created 70-80% whitespace voids (9/9 auditors flagged). grammar.md says "Maximum consecutive dense: 3" and "Maximum zone changes per viewport: 2-3" but never addresses the INVERSE problem: what happens when zones EXIST but have too little content.

**Where it should go:** grammar.md, as a new "## Content-Form Fit" section after "## Zones"

**Specific content needed:**
- Minimum content per zone type: dedicated zone (3+ paragraphs OR 2+ components), breathing zone (1-3 sentences ONLY), bedrock zone (1 featured element + context)
- Maximum consecutive empty viewport height: < 30% content coverage = FAIL
- Zone count ceiling by content volume: <1,500 words = max 2 zones, 1,500-3,000 = max 3, 3,000-5,000 = max 4, 5,000+ = max 5
- Form decision minimums: bento grid (4+ items), progressive disclosure (3+ phases), drop cap (3+ sentences following)
- The boundary rule: "Zones exist to SERVE content, not to DEMONSTRATE architecture"

---

### B-3: Semantic Value Framework — Completely Missing

**Source:** `guidelines/semantic-rules.md` lines 432-529
**What's missing:** The 3-Question Test for varying CSS values (WHAT varies? WHY does it vary? WHY THESE SPECIFIC VALUES?) and the red flags for arbitrary values.

**Why it matters:** The flagship experiment produced CSS that was technically correct but perceptually flat because values were chosen from the token scale without semantic justification (backgrounds differing by 1-8 RGB points, letter-spacing at imperceptible values). The 3-Question Test is the ONLY documented defense against "looks-good" CSS that passes programmatic gates but fails perceptual audit.

**Where it should go:** grammar.md, as a new "## Semantic Values" section after "## Restraint" in mechanisms.md, OR as an appendix to grammar.md

**Specific content needed:**
- Q1: WHAT varies? (identify property and range)
- Q2: WHY does it vary? (must reference content structure, metaphor logic, or pattern logic -- NOT "token availability" or "looked good")
- Q3: WHY THESE SPECIFIC VALUES? (if answer = "it's on the scale" -> ARBITRARY, revise)
- Red flags: "it looked good", "it was available on the token scale", "OD-004 used this value", "padding decreases as page progresses" without ratio justification
- Before/after examples showing arbitrary vs semantic padding choices

---

## HIGH (6)

### H-1: Callout Semantic Differentiation -- Partially Missing

**Source:** `guidelines/semantic-rules.md` Gap 1 (lines 9-53) and Gap 5 (lines 195-249)
**Vocabulary file:** components.md mentions "5 variants (info, tip, gotcha, essence, challenge)" but does NOT explain when to use each.

**What's missing:** The selection criteria:
- Info vs Note: Info = section-level orientation (section start), Note = inline warning (within content flow)
- Essence is SPECIAL: only callout using serif font + italic styling, reserved for wisdom/core principles
- Gotcha/Warning = same red (common mistakes), Challenge/Caution = same purple (advanced topics)
- The boundary rule: applies to entire section -> Info, applies to single paragraph -> Note

**Where it should go:** components.md, expanded into the callout family row or a brief note below the table
**Priority:** HIGH -- builders consistently mis-select callout types without these criteria

---

### H-2: Responsive Strategy Details -- Partially Missing

**Source:** `guidelines/responsive-strategy.md` (272 lines)
**Vocabulary file:** grammar.md has 4 lines on responsive (lines 65-69): breakpoint, padding compression, bento/matrix collapse. That's the minimum.

**What's missing:**
- The 5 responsive principles (single breakpoint simplicity, grid collapse over fluid scaling, modest typography reduction 19%, vertical spacing preserved / horizontal removed, max-width override to 100%)
- Typography reduction ratio: 32px -> 26px (81% of desktop)
- What is NOT used: fluid typography (clamp/vw), container queries, orientation-based breakpoints
- Dark mode: explicitly NOT validated, zero implementations exist

**Where it should go:** grammar.md's "## Responsive" section could be expanded by 5-8 lines
**Priority:** HIGH -- builders need to know what NOT to do (no clamp(), no container queries) as much as what to do

---

### H-3: Recommended Component Sequences -- Missing

**Source:** `specification/patterns/combination-rules.md` lines 131-168
**What's missing:** The 4 recommended sequences:
- Opening: Hero -> Overview Callout -> Navigation/Map
- Teaching: Essence -> Core Abstraction -> Code Snippet -> Tip
- Decision: Decision Matrix -> Reasoning -> Gotcha
- Closing: Challenge -> Task -> Essence (key takeaway)

**Where it should go:** grammar.md or components.md as a brief "## Common Sequences" section
**Priority:** HIGH -- these are the most actionable guidance for builders assembling pages

---

### H-4: The "Bootstrap Test" -- Missing from Identity

**Source:** `specification/anti-patterns/registry.md` line 271-273
**The test:** "Could this exist in a Bootstrap project? If yes, you've failed."

**Why it matters:** This is the most concise articulation of KortAI identity (simpler than all the prohibitions). identity.md captures character, soul, tensions, and refusals -- but never gives the builder a one-sentence gut-check.

**Where it should go:** identity.md, possibly as an addition to "## Character" or after "## Refusals"
**Priority:** HIGH -- extremely high signal-to-noise ratio for a single sentence

---

### H-5: 2px Border Epidemic Context -- Partially Missing

**Source:** `specification/anti-patterns/registry.md` OD-F-AP-001 (lines 282-307)
**Vocabulary file:** vocabulary.md mentions "The 2px weight is deliberately skipped" and mechanisms.md mentions "4px/3px/1px" but neither explains WHY the skip was necessary.

**What's missing:** The 2px epidemic was the #1 systemic issue across all 6 OD explorations (108 CSS declarations, 1000+ computed instances). The skip isn't aesthetic preference -- it's a learned lesson from systemic failure. identity.md mentions "No 2px borders -- structurally ambiguous" in conditional refusals but without the epidemic context.

**Where it should go:** vocabulary.md's "## Borders" section, as 1-2 sentences of context
**Priority:** HIGH -- without the "why", builders may reintroduce 2px borders thinking it's just a style choice

---

### H-6: Semi-Transparent Background Anti-Pattern -- Missing Context

**Source:** `specification/anti-patterns/registry.md` OD-AP-003 (lines 329-355)
**Vocabulary file:** identity.md mentions "No semi-transparent backgrounds on visual elements" in absolute refusals but doesn't explain the rgba() detection gap.

**What's missing:** The specific detection failure pattern: rgba(0,0,0,0.04) backgrounds survive multiple review layers because they're not technically box-shadow or drop-shadow. Every builder in every OD wave found new opacity < 1.0 violations. The binary rule should be explicit: `opacity === 1.0 on all visual elements. No exceptions.`

**Where it should go:** identity.md's absolute refusals section, as a brief elaboration
**Priority:** HIGH -- this is the most persistent soul violation pattern (found in every wave of every stage)

---

## MEDIUM (7)

### M-1: Density Pattern Names and Pairings

**Source:** `specification/patterns/PATTERN-INDEX.md`, `specification/patterns/density-patterns.md`, `specification/patterns/organizational-patterns.md`
**What's missing from vocabulary files:** The 6 density pattern names (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL/RIVERS, FRACTAL) and their OD/AD pairings. grammar.md references INHALE/EXHALE rhythm but never names the patterns.

**Where it should go:** grammar.md or mechanisms.md as a brief reference table
**Why MEDIUM not HIGH:** The pipeline (build-page) handles pattern selection automatically. Builders don't directly choose density patterns. But vocabulary awareness helps comprehension.

---

### M-2: The "Organization IS Density" Equivalence

**Source:** `specification/patterns/organizational-patterns.md` line 19, `specification/patterns/PATTERN-INDEX.md` line 340
**What's missing:** The crown jewel discovery: Axis IS Organization IS Density (AD-F-023 ATTENTION TOPOLOGY). Three names for one phenomenon. None of the 5 vocabulary files mention this.

**Where it should go:** grammar.md, as a brief note in the "## Rhythm" section
**Why MEDIUM:** Conceptually important but not directly actionable for CSS writing.

---

### M-3: Footer Content Criteria

**Source:** `guidelines/usage-criteria.md` lines 154-250
**What's missing:** components.md lists "Page footer" with "3px red top border" but doesn't say what content belongs in footer vs not. The criteria: provenance metadata, navigation aids, version/status info, attribution. NOT: primary content, critical instructions, interactive elements.

**Where it should go:** components.md, as a brief note for the footer row
**Why MEDIUM:** Footer is structural, most builders get it intuitively.

---

### M-4: Grid Column Selection Criteria

**Source:** `guidelines/usage-criteria.md` lines 70-151
**What's missing:** When to use 2 vs 3 columns in grids. 2-column = comparison/detailed reading (min cell width ~400px). 3-column = categorical/scannable (min cell width ~280px). 4-column = HYPOTHETICAL (not validated except weighted decision matrix). All collapse to single column at 768px.

**Where it should go:** grammar.md or components.md (bento grid row)
**Why MEDIUM:** The /build-page pipeline handles this, but manual builders need it.

---

### M-5: Nesting vs Flattening Criteria

**Source:** `guidelines/usage-criteria.md` lines 253-308
**What's missing:** grammar.md says "Maximum depth: 2 levels" but doesn't say WHEN to nest vs flatten. Nest when: parent-child relationship exists, spacing override needed, visual containment is semantic. Flatten when: peer-level components, standard spacing applies, visual independence is semantic. Max observed: 3 levels (section -> callout -> code).

**Where it should go:** grammar.md "## Nesting" section expansion
**Why MEDIUM:** The 2-level rule covers most cases. Criteria help edge cases.

---

### M-6: Table Styling Decision -- Clean Only

**Source:** `guidelines/semantic-rules.md` Gap 3 (lines 99-143)
**What's missing:** 100% of validated tables use clean styling (no zebra-striping). Zero instances of tr:nth-child(even) across all 27 HTML files. Zebra-striping is HYPOTHETICAL. components.md mentions "No vertical borders" but doesn't state the clean-only rule.

**Where it should go:** components.md, data table row note
**Why MEDIUM:** Most builders default to clean, but some may add zebra-striping from training distribution.

---

### M-7: Component Density Triggers (Spacing by Adjacent Component Density)

**Source:** `guidelines/usage-criteria.md` lines 9-67
**What's missing:** Breathing-room spacing (64-80px) when BOTH adjacent components are high-density. Standard spacing (24-32px) for moderate density. Compressed (8-16px) for related/nested. The density heuristic: >= 3 components per viewport = high, 1-2 = moderate, text only = low.

**Where it should go:** grammar.md "## Rhythm" section expansion
**Why MEDIUM:** Overlaps with existing guidance but provides specific density triggers.

---

## LOW (5)

### L-1: Inline vs Block Code Selection

**Source:** `guidelines/semantic-rules.md` Gap 2 (lines 56-96)
**What's missing:** 1 line = inline, 2+ lines = block. <= 50 chars = inline, > 50 chars = consider block. Mid-sentence = always inline.
**Where:** components.md, code block/inline code rows
**Why LOW:** Intuitive for most builders.

---

### L-2: Breathing-Room Zone Triggers

**Source:** `guidelines/semantic-rules.md` Gap 4 (lines 146-192)
**What's missing:** The inverse density-confidence relationship (OD-004): more certain = more space, less certain = compressed. Breathing-room position: between major sections, <= 3 sentences, >= 48px padding.
**Where:** grammar.md "## Zones" section
**Why LOW:** Partially covered by existing zone guidance.

---

### L-3: Anti-Gravity Compliance Details

**Source:** `validation/anti-gravity-compliance.md` (~1,200 lines)
**What's missing:** The 12 anti-gravity mechanisms (M1-M12) and their deployment status. None of the vocabulary files reference anti-gravity.
**Why LOW:** Anti-gravity is a PROCESS concern (how the pipeline prevents pattern-matching), not vocabulary for builders.

---

### L-4: Axis Pattern Details

**Source:** `specification/patterns/axis-patterns.md`
**What's missing:** The 6 axis patterns (Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography, Compound) and their equivalence mechanisms (temporal, spatial, proportional, kinetic, gravitational).
**Why LOW:** Pipeline handles axis selection automatically.

---

### L-5: Gap Check Missing Prohibitions

**Source:** `validation/gap-check.md` lines 278-363
**What's missing:** Two implied prohibitions not in identity.md's refusals: (1) No transform effects (rotate, scale, skew, perspective) except translateY for scroll reveals; (2) No CSS animations (keyframes, animation property) except scroll-triggered opacity/translateY.
**Where:** identity.md "## Refusals > Absolute" section
**Why LOW:** No violations exist in any exploration, but rules should be explicit.

---

## CONTRADICTIONS (2)

### C-1: Drop Cap -- Mechanism vs Gap Check Disagreement

**mechanisms.md** lists Drop Cap as Mechanism #16 (3/18 explorations, marked RARE).
**validation/gap-check.md** says Drop Cap was "correctly excluded" from extraction (lines 154-166): "too rare, decorative" and "below 2-file threshold."

**Resolution needed:** Is Drop Cap a mechanism or not? mechanisms.md includes it. The gap-check says it should be excluded. The current mechanisms.md marks it "RARE" which is a reasonable middle ground, but the gap-check's language ("correctly excluded") contradicts its presence.

**Priority:** LOW -- marked RARE in mechanisms.md, which is the safer choice (include but flag).

---

### C-2: Container Width Range

**vocabulary.md** says: "Range, not mandate. 860-1100px."
**CLAUDE.md (compositional-core)** says: "940-960px container width is NON-NEGOTIABLE" (SC-01).

**Resolution needed:** These contradict. vocabulary.md presents container width as flexible (860-1100px range from explorations). But pipeline experiments proved that violating 940-960px was THE primary failure mode. The pipeline guardrails are more recent and more tested.

**Priority:** MEDIUM -- vocabulary.md should note that while explorations used a range, the pipeline enforces 940-960px for built pages. The range is historical context; the constraint is operational.

---

## SUMMARY TABLE

| Priority | Count | Key Theme |
|----------|-------|-----------|
| BLOCKING | 3 | Combination rules, content density floors, semantic value framework |
| HIGH | 6 | Callout selection, responsive details, sequences, Bootstrap test, 2px context, rgba detection |
| MEDIUM | 7 | Pattern names, equivalence, footer criteria, grid columns, nesting, table styling, density triggers |
| LOW | 5 | Inline/block code, breathing triggers, anti-gravity, axis details, missing prohibitions |
| CONTRADICTION | 2 | Drop cap status, container width range |

**Total: 21 findings + 2 contradictions**

**The 3 BLOCKING items are the highest priority because they represent COMPLETE ABSENCE of important builder guidance from the new vocabulary files. All three were extensively documented in the auxiliary sources (semantic-rules.md and combination-rules.md) and represent lessons learned from actual build failures (flagship whitespace voids, flat CSS values, jarring component sequences).**

---

## RECOMMENDED ACTIONS

1. **grammar.md needs 3 new sections:** Sequencing (B-1), Content-Form Fit (B-2), Semantic Values (B-3)
2. **components.md needs callout selection criteria** (H-1) and footer content guidance (M-3)
3. **identity.md needs the Bootstrap Test** (H-4) and rgba elaboration (H-6)
4. **vocabulary.md needs 2px epidemic context** (H-5) and container width clarification (C-2)
5. **grammar.md responsive section needs expansion** (H-2)

---

**END REPORT**
