# Codification Map: Pipeline v2 Changes to Exact File Edits

**Date:** 2026-02-18
**Author:** Codification Mapper Agent
**Purpose:** Map 10 Pipeline v2 changes to EXACT before/after edits with line numbers, dependencies, and confidence ratings.

---

## How to Use This Document

Each change below is structured as an Edit-ready specification. To apply:
1. Read the target file
2. Find the `CURRENT CONTENT` block
3. Replace with the `PROPOSED CONTENT` block
4. Verify surrounding context matches

Changes are ordered by dependency: apply earlier changes first when noted.

---

## Change 1: Recipe Format, Not Checklist

**Target File:** `~/.claude/skills/tension-composition/SKILL.md`
**Target Location:** Phase 4 opening (lines 866-877)
**Confidence:** HIGH (corpus unanimous: File 21 verbiage analysis, File 35 knowledge compression, flagship retrospective all converge on recipe vs checklist as root cause)

**Evidence:** Middle builder got a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs). Flagship builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if/Must be" verbs). Recipe = DESIGNED; Checklist = FLAT.

### CURRENT CONTENT (lines 866-877):

```
**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.

### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)

Before generating any CSS/HTML, ALL metaphors must pass these perceptual floors. These are not suggestions — they are the line below which reading comfort breaks regardless of metaphor intent.
```

### PROPOSED CONTENT:

```
**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

**RECIPE (not checklist) — Follow these steps IN ORDER:**

Phase 4 is a RECIPE: sequenced steps with specific CSS values and "Read/Select/Deploy/Assess" verbs. It is NOT a checklist of constraints to verify. The distinction matters: recipes produce DESIGNED output; checklists produce COMPLIANT output.

**Phase 4 Step Sequence:**
1. **READ** Phase 4.0 guardrails (set your NON-NEGOTIABLE floors)
2. **READ** the full mechanism catalog (18 mechanisms, all 5 categories)
3. **SELECT** 1+ mechanism per category (S/H/C/D/N) based on content needs
4. **MAP** each selected mechanism to specific CSS values using the Translation Grammar (Step 4.2)
5. **ASSESS** pacing risk (Step 4.2B) and rhythm variation (Step 4.2C)
6. **CHECK** coherence (Step 4.3) — all channels reinforce same direction
7. **VERIFY** fractal consistency (Step 4.7) and landmarks (Step 4.7B)

**Each step produces a concrete deliverable.** If you skip a step, the output degrades.

### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)

Before generating any CSS/HTML, ALL metaphors must pass these perceptual floors. These are not suggestions — they are the line below which reading comfort breaks regardless of metaphor intent.
```

### RATIONALE:

The current text jumps from tier descriptions directly to guardrails. The proposed change inserts a recipe header with explicit step sequence BEFORE the guardrails, reframing Phase 4 from "verify these constraints" to "follow these steps." This addresses the 7.9:1 guardrail-to-playbook ratio diagnosed in the flagship dissection.

**Dependencies:** None (first change to apply)

---

## Change 2: Perception Thresholds in Every Gate

**Target File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Target Location:** After Void Guardrail Specifications (after line 363, before Mode 4 Integration)
**Confidence:** HIGH (programmatic gates passed but perceptual audit failed — 9/9 auditors flagged imperceptible differences)

**Evidence:** Gate 4 confirmed 6 CSS channels with 4+ shifts per boundary. Gate 5 fresh-eyes found them imperceptible. Backgrounds differed by 1-8 RGB points. Letter-spacing differences were 0.001-0.01em.

### CURRENT CONTENT (lines 360-365):

```
| Width utilization | Content container at **65-80%** of viewport width at 1440px | 65-80% = PASS. Below 65% or above 85% = FAIL. |

**Mode 4 Integration:** All 9 auditors (A through I) should note spatial distribution observations. Auditor C (Spatial+Proportion) is the PRIMARY evaluator for PA-50 through PA-53, but any auditor who notices void patterns should flag them.

**Embedded Mode Integration:** Builders running Mode 1 (Embedded, 90 seconds) should add a void check: after answering PA-01 through PA-05, quickly scroll through and verify no 2+ consecutive blank viewport-heights exist.
```

### PROPOSED CONTENT:

```
| Width utilization | Content container at **65-80%** of viewport width at 1440px | 65-80% = PASS. Below 65% or above 85% = FAIL. |

### Minimum Perceptual Delta Thresholds (MANDATORY for All Gates)

**Provenance:** Flagship experiment passed all programmatic gates (6 CSS channels, 4+ shifts per boundary) but FAILED perceptual audit. Root cause: backgrounds differed by 1-8 RGB points (imperceptible), letter-spacing by 0.001-0.01em (invisible). Programmatic verification confirmed variation EXISTS; perceptual verification confirmed variation was INVISIBLE.

**BINARY RULE:** Any CSS property used to encode semantic differentiation MUST meet these minimum perceptual deltas. Values below these thresholds are sub-perceptual and DO NOT count as differentiation.

| CSS Property | Minimum Perceptual Delta | Sub-Perceptual (DOES NOT COUNT) | Rationale |
|---|---|---|---|
| **Background color** | >= 15 RGB points apart (any channel) | < 15 RGB points difference | Flagship used 1-8 RGB point differences — invisible without measuring |
| **Letter-spacing** | >= 0.5px (or ~0.03em at 16px) | < 0.5px difference | Flagship used 0.001-0.01em — no human can perceive this |
| **Padding/margin** | >= 24px between zones | < 24px difference between zones | Adjacent zones with 4px padding difference look identical |
| **Border-width** | >= 1px difference | — | 1px minimum already the smallest unit |
| **Font-size** | >= 2px difference | < 2px between sizes | 15px vs 16px is imperceptible at reading distance |
| **Font-weight** | >= 200 weight units | < 200 weight units | 400 vs 500 is barely perceptible; 400 vs 600 is clear |

**Application to Gate Runners:**
When a programmatic gate verifies "N distinct values exist for property X," it MUST also verify that the MINIMUM difference between any two adjacent values meets the threshold above. A gate that counts 4 distinct background colors with 3 RGB points between them is a FALSE PASS.

**Builder Self-Check:** After writing CSS, scan all semantic-encoding properties. If any two values intended to communicate DIFFERENT meanings are closer than the threshold: INCREASE the difference or REMOVE one value.

**Mode 4 Integration:** All 9 auditors (A through I) should note spatial distribution observations. Auditor C (Spatial+Proportion) is the PRIMARY evaluator for PA-50 through PA-53, but any auditor who notices void patterns should flag them.

**Embedded Mode Integration:** Builders running Mode 1 (Embedded, 90 seconds) should add a void check: after answering PA-01 through PA-05, quickly scroll through and verify no 2+ consecutive blank viewport-heights exist.
```

### RATIONALE:

The current skill has NO minimum perceptual delta thresholds. The flagship experiment proved that programmatic verification (counting distinct values) is insufficient without perceptual minimums. This inserts the thresholds between the void guardrails and the mode integration sections, where builders and gate runners will encounter them.

**Dependencies:** None. Also requires Change 4 (spatial gate runner update).

---

## Change 3: Builder Gets CSS Recipes, Not Just Constraints

**Target File:** `design-system/compositional-core/CLAUDE.md`
**Target Location:** Track 2 Workflow, Phase 6: Implementation (lines 195-221)
**Confidence:** HIGH (inverted quality routing confirmed by 15 Opus agents in flagship dissection)

**Evidence:** Best reference files (mechanism catalog, scale-channel invocation) go to PLANNER who doesn't write CSS. BUILDER gets tokens + prohibitions + a MISSING file. Builder visibility cap = 13.4% of prompt.

### CURRENT CONTENT (lines 195-221):

```
### Phase 6: Implementation

**Use:**
- Exact token values: var(--color-primary), var(--space-8)
- Mechanisms adapted to YOUR metaphor
- YOUR vocabulary (not library metaphor terms)

**Example:** .botanical-stage NOT .stratum (your metaphor, not library)

**Absolute rules:**
```css
border-radius: 0; /* ALWAYS */
box-shadow: none; /* ALWAYS */
opacity: 1; /* NO transparency on containers */
```

### Phase 7: Verification

**Invoke:** perceptual-auditing skill at ~/.claude/skills/perceptual-auditing/SKILL.md

**Check:**
- 48 PA questions (Tier 1 mandatory five + Tier 2 standard fifteen)
- Guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Soul: border-radius: 0? box-shadow: none? Colors correct?

**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."
```

### PROPOSED CONTENT:

```
### Phase 6: Implementation

**CRITICAL ROUTING: The builder agent MUST receive these files:**

1. `compositional-core/vocabulary/tokens.css` (65 tokens — palette, spacing, typography)
2. `compositional-core/grammar/mechanism-catalog.md` (18 mechanisms — the CSS RECIPES)
3. `compositional-core/identity/prohibitions.md` (22 prohibitions — the constraints)
4. The Phase 4 build plan from the planner agent (metaphor mapping, mechanism selections, transition sequence)

**The mechanism catalog IS the recipe book.** Each mechanism entry contains:
- The CSS pattern (what to write)
- Application modes (Progressive vs Discrete)
- Anti-patterns (what NOT to do)
- Impact profiles (what readers perceive)
- Zone mappings (where to deploy)

**Builder Recipe (follow in order):**

1. **SET UP** container: `max-width: 960px; margin: 0 auto; padding: 0 32px;`
2. **DEPLOY** header: dark background (`var(--color-text)`), 3px red bottom border, inverted text
3. **FOR EACH section** in the build plan:
   a. Read the mechanism catalog entry for the assigned mechanism
   b. Write the CSS using the mechanism's APPLICATION MODE (Progressive or Discrete)
   c. Use the Translation Grammar values (Step 4.2 in tension-composition skill)
   d. Verify CPL: `content-width / font-size / 0.6` = 45-80 characters
4. **DEPLOY** transitions between sections: vary between SMOOTH (48px + 1px), BRIDGE (64px + breathing zone), BREATHING (80px + 3px) — minimum 3 types
5. **DEPLOY** footer: mirror header (dark background, 3px red top border, inverted text)
6. **VERIFY** soul: border-radius: 0, box-shadow: none, opacity: 1 on containers, colors from tokens.css

**Absolute rules:**
```css
border-radius: 0; /* ALWAYS */
box-shadow: none; /* ALWAYS */
opacity: 1; /* NO transparency on containers */
```

**Example:** .botanical-stage NOT .stratum (your metaphor, not library)

### Phase 7: Verification

**Invoke:** perceptual-auditing skill at ~/.claude/skills/perceptual-auditing/SKILL.md

**Check:**
- 48 PA questions (Tier 1 mandatory five + Tier 2 standard fifteen)
- Guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Minimum perceptual deltas: backgrounds >= 15 RGB, letter-spacing >= 0.5px, padding >= 24px between zones
- Soul: border-radius: 0? box-shadow: none? Colors correct?

**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."
```

### RATIONALE:

The current Phase 6 gives builders 3 constraint lines and 1 example. The proposed version gives builders a sequenced RECIPE with specific CSS values, explicit file routing, and a step-by-step build order. This directly addresses the "guardrail factory vs playbook factory" root cause (7.9:1 ratio) and the "builder visibility cap" (13.4% → now routes mechanism catalog to builder).

**Dependencies:** None (but pairs well with Change 10)

---

## Change 4: Minimum Perceptual Deltas in Spatial Gate Runner

**Target File:** `ephemeral/flagship-experiment/spatial-gate-runner.js`
**Target Location:** After SC-08 check (the last existing check), add new checks SC-09 and SC-10
**Confidence:** HIGH (9/9 auditors flagged imperceptible differences; programmatic gate was false positive)

**Note:** This is an ephemeral file. For the CANONICAL change, the thresholds are in Change 2 (perceptual-auditing SKILL.md). This gate runner change implements them programmatically.

### CURRENT STATE:

The gate runner has 8 checks (SC-01 through SC-08). None verify minimum perceptual deltas between adjacent semantic zones.

### PROPOSED ADDITION (append after SC-08 logic, before the final return):

```javascript
// --------------------------------------------------
// SC-09: Minimum Background Color Delta
// Adjacent semantic zones must differ by >= 15 RGB points
// --------------------------------------------------
{
  const sections = Array.from(document.querySelectorAll('section, [class*="zone"], [class*="section"]'));
  let minDelta = Infinity;
  let worstPair = '';

  for (let i = 0; i < sections.length - 1; i++) {
    const bgA = getComputedStyle(sections[i]).backgroundColor;
    const bgB = getComputedStyle(sections[i + 1]).backgroundColor;
    const parseRGB = (str) => {
      const m = str.match(/\d+/g);
      return m ? m.map(Number) : [0, 0, 0];
    };
    const [r1, g1, b1] = parseRGB(bgA);
    const [r2, g2, b2] = parseRGB(bgB);
    const maxDiff = Math.max(Math.abs(r1 - r2), Math.abs(g1 - g2), Math.abs(b1 - b2));

    if (maxDiff < minDelta && maxDiff > 0) {
      minDelta = maxDiff;
      worstPair = `Section ${i} (${bgA}) vs Section ${i+1} (${bgB})`;
    }
  }

  const passed = minDelta === Infinity || minDelta >= 15;
  output.push({
    id: 'SC-09',
    name: 'Background color minimum delta',
    passed,
    measured: minDelta === Infinity ? 'N/A (no adjacent sections)' : `${minDelta} RGB points`,
    threshold: '>= 15 RGB points',
    detail: passed ? 'All adjacent zones have perceptible background differences' : `Sub-perceptual: ${worstPair}`
  });
}

// --------------------------------------------------
// SC-10: Stacked Gap Maximum (S-09 loophole fix)
// Total visual gap at section boundaries must not exceed 192px
// --------------------------------------------------
{
  const sections = Array.from(document.querySelectorAll('section, [class*="zone"], [class*="section"]'));
  let maxStackedGap = 0;
  let worstLocation = '';

  for (let i = 0; i < sections.length - 1; i++) {
    const styleA = getComputedStyle(sections[i]);
    const styleB = getComputedStyle(sections[i + 1]);
    const marginBottom = parseFloat(styleA.marginBottom) || 0;
    const paddingBottom = parseFloat(styleA.paddingBottom) || 0;
    const marginTop = parseFloat(styleB.marginTop) || 0;
    const paddingTop = parseFloat(styleB.paddingTop) || 0;
    // Note: margin collapse means we take MAX of margins, not sum
    const collapsedMargin = Math.max(marginBottom, marginTop);
    const totalGap = paddingBottom + collapsedMargin + paddingTop;

    if (totalGap > maxStackedGap) {
      maxStackedGap = totalGap;
      worstLocation = `Between section ${i} and ${i+1}: pb=${paddingBottom} + margin=${collapsedMargin} + pt=${paddingTop}`;
    }
  }

  const passed = maxStackedGap <= 192;
  output.push({
    id: 'SC-10',
    name: 'Stacked gap maximum (S-09 fix)',
    passed,
    measured: `${Math.round(maxStackedGap)}px`,
    threshold: '<= 192px total gap',
    detail: passed ? 'No section boundaries exceed 192px total gap' : `Excessive: ${worstLocation}`
  });
}
```

### RATIONALE:

SC-09 catches the flagship's primary failure mode (backgrounds differing by 1-8 RGB points). SC-10 catches the S-09 stacking loophole (individual values pass 96px max but stacked values create 210-276px voids). Both are binary PASS/FAIL.

**Dependencies:** Pairs with Change 2 (thresholds in skill) and Change 5 (S-09 in semantic-rules).

---

## Change 5: S-09 Stacking Loophole — Measure TOTAL Gap

**Target File:** `design-system/compositional-core/guidelines/semantic-rules.md`
**Target Location:** Gap 6, Rule 2 (lines 289-298)
**Also Target:** `design-system/compositional-core/vocabulary/tokens.css` (lines 115-122)
**Confidence:** HIGH (9/9 Mode 4 auditors flagged whitespace voids of 210-276px; individual values were all <=96px)

### Edit 5A: semantic-rules.md

#### CURRENT CONTENT (lines 289-298):

```
#### Rule 2: Maximum Consecutive Empty Viewport Height

At no scroll position should a full viewport height (100vh at 1440px) have less than 30% content coverage.

If a zone's content does not fill the zone to at least 30% coverage at the narrowest reasonable interpretation: SHRINK THE ZONE to fit its content. Zones exist to SERVE content, not to DEMONSTRATE architecture.

**See also:** `--space-max-zone` in `tokens.css` (96px maximum per-property spacing value) provides token-level enforcement of this principle. No single margin or padding value should exceed 96px.

**Binary test:** Scroll through at viewport-height increments. If any position shows < 30% content: FAIL. Shrink the zone or add content.
```

#### PROPOSED CONTENT:

```
#### Rule 2: Maximum Consecutive Empty Viewport Height

At no scroll position should a full viewport height (100vh at 1440px) have less than 30% content coverage.

If a zone's content does not fill the zone to at least 30% coverage at the narrowest reasonable interpretation: SHRINK THE ZONE to fit its content. Zones exist to SERVE content, not to DEMONSTRATE architecture.

**See also:** `--space-max-zone` in `tokens.css` (96px maximum per-property spacing value) provides token-level enforcement of this principle. No single margin or padding value should exceed 96px.

**S-09 Stacking Rule (CRITICAL — addresses flagship experiment void failure):**

The 96px per-property maximum is NECESSARY but NOT SUFFICIENT. Adjacent spacing properties STACK at section boundaries:

```
Section A padding-bottom: 80px  (passes 96px check)
Section B margin-top: 80px      (passes 96px check)
Section B padding-top: 64px     (passes 96px check)
TOTAL VISUAL GAP: 224px         (FAILS — creates whitespace void)
```

**Binary test for stacked gaps:**
1. At every section boundary, calculate: `padding-bottom + MAX(margin-bottom, margin-top) + padding-top`
2. (Note: margins collapse — take the LARGER margin, not the sum)
3. PASS: Total <= 192px (2x the per-property maximum)
4. FAIL: Total > 192px

**Provenance:** The ceiling experiment accumulated ~1,500-2,000px in zone transitions by stacking generous per-property values. Each individual value passed S-09, but 4 boundaries x ~400px stacked gap = catastrophic void (9/9 auditors flagged, 70-80% of scroll was blank).

**Fix options when stacked gap exceeds 192px:**
- REDUCE padding-bottom on preceding section
- REDUCE padding-top on following section
- INSERT a checkpoint element (breathing zone with 1-3 sentences of transition text) to convert EMPTY SPACE into CONTENT
- MERGE adjacent zones to eliminate the boundary entirely

**Binary test:** Scroll through at viewport-height increments. If any position shows < 30% content: FAIL. Shrink the zone or add content.
```

### Edit 5B: tokens.css

#### CURRENT CONTENT (lines 115-122):

```css
  --space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
  --space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
  /* RULE: No single margin or padding value should exceed --space-max-zone (96px).
     If a zone transition needs more visual separation than 96px, use a CHECKPOINT
     element (see mechanism-catalog.md Transition Grammar), not more whitespace.
     Stacking two 96px margins creates 192px of void -- use checkpoint elements instead.
     Evidence: Ceiling experiment accumulated ~1,500-2,000px in zone transitions alone
     by stacking generous spacing values. This rule caps the maximum per-property value. */
```

#### PROPOSED CONTENT:

```css
  --space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
  --space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
  --space-max-stacked: 192px;            /* Maximum TOTAL visual gap at any section boundary */
  /* RULE: No single margin or padding value should exceed --space-max-zone (96px).
     STACKING RULE: The TOTAL visual gap at any section boundary
     (padding-bottom + collapsed-margin + padding-top) must not exceed
     --space-max-stacked (192px). Individual values may all pass the 96px check
     while stacking to create 200-300px voids.
     If a zone transition needs more visual separation than 96px, use a CHECKPOINT
     element (see mechanism-catalog.md Transition Grammar), not more whitespace.
     Evidence: Ceiling experiment accumulated ~1,500-2,000px in zone transitions alone
     by stacking generous spacing values. Flagship remediation found 210-276px voids
     at section boundaries where each individual value was <= 96px.
     Binary test: padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 192px. */
```

### RATIONALE:

The current rule only caps INDIVIDUAL property values at 96px. The stacking loophole means two 96px values + a 64px padding = 256px void that passes individual checks. The proposed changes: (a) add the stacking rule to semantic-rules.md with concrete examples, (b) add `--space-max-stacked` token to tokens.css with binary test, (c) pair with SC-10 in the gate runner (Change 4).

**Dependencies:** Pairs with Change 4 (programmatic enforcement in gate runner).

---

## Change 6: Per-Category Mechanism Minimums (Not "2-4")

**Target File:** `~/.claude/skills/tension-composition/SKILL.md`
**Target Location:** Phase 4 mechanism deployment (lines 1078-1104)
**Confidence:** HIGH (ALL 11 research agents identified "sample 2-4 mechanisms" as the single most limiting specification)

**Note:** This change is ALREADY PARTIALLY APPLIED. The current SKILL.md (post-enrichment) already has per-category minimums at lines 1078-1104. However, the OLD "sample 2-4" phrasing may still exist elsewhere in the file.

### CURRENT CONTENT (lines 1078-1104) — ALREADY CORRECT:

```
**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

Deploy at least 1 mechanism from EACH of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). This ensures vocabulary BREADTH across all expressive dimensions.

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 1+ |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap | 1+ |
| **Structure/Nav** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ |
```

### STATUS: NO EDIT NEEDED

The enrichment execution team (2026-02-17) already applied this change. The per-category minimums are in place with the 5-category table and 1+ minimum per category.

**Verification:** Search for any remaining "sample 2-4" or "2-4 mechanisms" text in the SKILL.md. If found, replace with reference to per-category deployment.

### RESIDUAL CHECK:

```
grep -n "sample 2-4\|2-4 mechanisms" ~/.claude/skills/tension-composition/SKILL.md
```

If any matches found, replace each with: "per-category minimum (1+ from each of 5 categories)"

**Dependencies:** None (already applied).

---

## Change 7: 3-Transition Minimum for Coherence

**Target File:** `~/.claude/skills/tension-composition/SKILL.md`
**Target Location:** Step 4.2C (lines 1303-1329)
**Confidence:** HIGH (already partially applied in enrichment execution)

### CURRENT CONTENT (lines 1303-1329) — ALREADY CORRECT:

```
### Step 4.2C: Rhythm Variation Requirement (MANDATORY for Middle-tier+)

**BINARY RULE:** Your page MUST include at least 3 DIFFERENT transition types between major sections.

**Transition Type Taxonomy (from Phase 4.6):**
- **SMOOTH** (48px + 1px border): Same-axis continuation
- **BRIDGE** (64px + breathing zone + text): Cross-axis shift with context
- **BREATHING** (80px + 3px border): Major axis shift

**Minimum requirement:** Deploy AT LEAST 3 transition types across your full-page sequence.
```

### STATUS: NO EDIT NEEDED

The enrichment execution team already added Step 4.2C with the 3-transition minimum. The binary rule is in place with concrete failing and passing examples.

**Dependencies:** None (already applied).

---

## Change 8: Agent Communication Protocol (Not File-Only)

**Target File:** `design-system/compositional-core/CLAUDE.md`
**Target Location:** After Track 2 Workflow section (after line 221, before Anti-Gravity Rules at line 224)
**Confidence:** MEDIUM (confirmed by 14 retro-analysis agents, but specific protocol design is N=1 from ceiling prompt assembly)

**Evidence:** Zero SendMessage = fast execution (35 min) but B+ quality. CD-006 WITH messaging = 39/40. Missing footer = smoking gun (builder couldn't ask planner about footer design).

### CURRENT CONTENT (line 221-224):

```
**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## ANTI-GRAVITY RULES
```

### PROPOSED CONTENT:

```
**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## AGENT COMMUNICATION PROTOCOL (Track 2 Multi-Agent Builds)

**BINARY RULE:** When a Track 2 build uses multiple agents (planner + builder + verifier), agents MUST use SendMessage for coordination. File-only communication (writing shared files without messaging) produces B+ quality. Messaging produces A quality.

**Evidence:** Middle experiment (zero SendMessage) = PA-05 DESIGNED but missing footer (builder couldn't ask planner). CD-006 (with messaging) = 39/40. The topology (flat vs tree) doesn't matter; the COMMUNICATION PROTOCOL (file-only vs messaging) does.

**Required communication points:**
1. **Planner → Builder:** Send build plan summary + key design decisions (not just file path)
2. **Builder → Planner:** Ask clarifying questions about ambiguous aspects BEFORE building (e.g., "Should footer mirror header?")
3. **Builder → Verifier:** Signal completion with summary of what was built and known risks
4. **Verifier → Builder:** Report findings that need fixes (with specific CSS/HTML locations)

**Minimum message count by tier:**
- Middle: 2+ messages (planner→builder plan, builder→verifier completion)
- Ceiling: 4+ messages (above + builder clarification question + verifier feedback)
- Flagship: 6+ messages (above + per-pass coordination)

**CRITICAL:** Zero messaging is a QUALITY DEFECT, not an efficiency win. The 5 minutes spent on 4 messages saves 50 minutes of post-build remediation.

---

## ANTI-GRAVITY RULES
```

### RATIONALE:

The current CLAUDE.md has zero mention of inter-agent communication. The proposed section inserts a mandatory communication protocol between the Track 2 workflow and the anti-gravity rules. It specifies required communication points, minimum message counts per tier, and the evidence base.

**Dependencies:** None (standalone insertion).

---

## Change 9: Opus for Builder Agents (Not Sonnet)

**Target File:** `design-system/compositional-core/CLAUDE.md`
**Target Location:** Track 2 Workflow section, Phase 6 (within the proposed Change 3 content)
**Confidence:** MEDIUM (contrarian finding from flagship retrospective — "Sonnet-for-builders is unexamined"; CD-006 built by Opus, flagship by Sonnet; but N=1 comparison)

**Evidence:** Sonnet complies meticulously; Opus complies AND creates beyond constraints. CD-006 (Opus builder) = 39/40. Flagship (Sonnet builders) = FAILED. But confounded by prompt quality difference.

### CURRENT STATE:

No agent model specification exists anywhere in the building protocol.

### PROPOSED INSERTION in Track 2 Workflow (after the Phase 6 recipe added in Change 3):

Add to the builder recipe section (after "**CRITICAL ROUTING: The builder agent MUST receive these files:**"):

```
**Builder Agent Model Selection:**
- **Ceiling/Flagship builds:** Use Opus (claude-opus-4-6) for the builder agent. Opus complies with constraints AND creates beyond them. This is the only role where model selection has confirmed quality impact.
- **Middle builds:** Sonnet (claude-sonnet-4-6) is sufficient. Middle builds follow pattern-based deployment (no metaphor creativity required).
- **All other roles** (planner, verifier, auditor): Sonnet is cost-effective and reliable.

**Provenance:** CD-006 (39/40, Opus builder) vs Flagship (FAILED, Sonnet builders). Confounded by prompt quality, but the contrarian finding "Sonnet-for-builders is unexamined" from the retrospective warrants this conservative recommendation.
```

### RATIONALE:

The current protocol specifies no model requirements. The proposed insertion adds model guidance specifically for the builder role, where creative composition (not just compliance) is needed. Middle builds don't need Opus because they follow pattern-based selection logic.

**Dependencies:** Apply after Change 3 (builder recipe section must exist first).

---

## Change 10: Builder Visibility — Route CSS-Rich Files to CSS-Writing Agents

**Target File:** `design-system/compositional-core/CLAUDE.md`
**Target Location:** Conditional-Load section, Builder agents (Track 2) subsection (currently lines 110-127 in the CLAUDE.md)
**Confidence:** HIGH (inverted quality routing confirmed by 15 Opus agents; mechanism catalog and scale-channel files went to planner, NOT builder)

### CURRENT CONTENT (Track 2 Workflow, Phase 4):

```
### Phase 4: Mechanism Extraction

**NOW PERMITTED:**
- grammar/mechanism-catalog.md (first 200 lines)
- components/components.css (all lines)
```

### PROPOSED CONTENT:

```
### Phase 4: Mechanism Extraction

**NOW PERMITTED (for PLANNER agent):**
- grammar/mechanism-catalog.md (FULL file — all 18 mechanisms, not just first 200 lines)
- components/components.css (all lines)

**CRITICAL ROUTING — BUILDER MUST ALSO RECEIVE:**

When multiple agents are involved, the BUILDER agent (the one writing CSS) MUST receive:
1. `grammar/mechanism-catalog.md` — The complete catalog with all 18 mechanism entries, application modes, impact profiles, and zone mappings. This is the CSS RECIPE BOOK. Without it, the builder writes CSS from constraints alone.
2. `vocabulary/tokens.css` — All 65 tokens (already in always-load).
3. `identity/prohibitions.md` — All 22 prohibitions (already in always-load).
4. The planner's Phase 4 build plan output (mechanism selections, transition sequence, metaphor mapping).

**DO NOT restrict builder to "first 200 lines" of mechanism catalog.** The builder needs the FULL catalog including application modes (Progressive vs Discrete), impact profiles, and anti-patterns. These are the CSS recipes that produce DESIGNED output. Without them, the builder produces COMPLIANT-but-flat output.

**Provenance:** Flagship experiment routed mechanism catalog to the planner (who doesn't write CSS) and gave the builder only tokens + prohibitions + a build plan. The builder had 13.4% prompt visibility. Result: mechanically compliant CSS with imperceptible differentiation. The mechanism catalog's application modes and impact profiles ARE the compositional intelligence — they must reach the agent writing CSS.
```

### RATIONALE:

The current protocol restricts mechanism catalog access to "first 200 lines" and doesn't specify that the builder agent needs it. The proposed change: (a) removes the 200-line restriction, (b) explicitly routes the catalog to the builder agent, (c) explains WHY with provenance from the flagship failure.

**Dependencies:** None (but reinforces Change 3's builder recipe).

---

## Dependency Graph

```
Change 1 (Recipe format)         → standalone, apply first
Change 2 (Perception thresholds) → standalone
Change 3 (Builder CSS recipes)   → standalone
Change 4 (Gate runner deltas)    → pairs with Change 2, Change 5
Change 5 (S-09 stacking)         → pairs with Change 4
Change 6 (Per-category)          → ALREADY APPLIED, verify only
Change 7 (3-transition)          → ALREADY APPLIED, verify only
Change 8 (Agent communication)   → standalone
Change 9 (Opus for builders)     → apply after Change 3
Change 10 (Builder visibility)   → reinforces Change 3
```

**Recommended application order:**
1. Change 6 (verify) + Change 7 (verify) — confirm already applied
2. Change 1 — recipe framing (sets the tone)
3. Change 3 + Change 10 — builder recipe + routing (paired)
4. Change 9 — model selection (depends on Change 3)
5. Change 2 — perception thresholds
6. Change 5 — S-09 stacking rule
7. Change 4 — gate runner (implements Changes 2 + 5 programmatically)
8. Change 8 — agent communication protocol

---

## Summary Table

| # | Change | Target File | Status | Confidence | Lines Affected |
|---|--------|-------------|--------|------------|----------------|
| 1 | Recipe format | tension-composition SKILL.md | NEW EDIT | HIGH | ~15 lines inserted |
| 2 | Perception thresholds | perceptual-auditing SKILL.md | NEW EDIT | HIGH | ~30 lines inserted |
| 3 | Builder CSS recipes | compositional-core/CLAUDE.md | NEW EDIT | HIGH | ~35 lines replaced |
| 4 | Gate runner deltas | spatial-gate-runner.js | NEW EDIT | HIGH | ~60 lines appended |
| 5 | S-09 stacking | semantic-rules.md + tokens.css | NEW EDIT | HIGH | ~25 + ~5 lines |
| 6 | Per-category minimums | tension-composition SKILL.md | ALREADY APPLIED | HIGH | Verify only |
| 7 | 3-transition minimum | tension-composition SKILL.md | ALREADY APPLIED | HIGH | Verify only |
| 8 | Agent communication | compositional-core/CLAUDE.md | NEW EDIT | MEDIUM | ~25 lines inserted |
| 9 | Opus for builders | compositional-core/CLAUDE.md | NEW EDIT | MEDIUM | ~8 lines inserted |
| 10 | Builder visibility | compositional-core/CLAUDE.md | NEW EDIT | HIGH | ~20 lines replaced |

**Total new content:** ~224 lines across 5 files
**Already applied:** 2 changes (per-category minimums, 3-transition minimum)
**Net new changes:** 8

---

## Confidence Legend

- **HIGH:** Corpus unanimous — multiple independent research streams (flagship dissection, retrospective, remediation audit, Mode 4 PA) all converge on this change. Zero adversarial challenges.
- **MEDIUM:** Confirmed by research but with caveats — either N=1 evidence, confounded comparison (Opus vs Sonnet + prompt quality), or specific protocol design not yet validated.
- **LOW:** N=1 evidence only, or contested by adversarial review. (No changes in this map are LOW confidence.)
