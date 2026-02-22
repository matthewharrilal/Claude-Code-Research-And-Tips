# Builder Absorption Analysis

**Agent:** absorption-analyst (Opus)
**Date:** 2026-02-20
**Question:** Does an Opus builder actually absorb the input it receives, or does it extract a subset and default to safe patterns?

---

## Section 1: Total Input Audit

### Files the Builder Reads (in declared order)

| # | File | Lines | Purpose | Read Instruction |
|---|------|-------|---------|-----------------|
| 1 | `_tc-brief.md` | ~50 | Content-specific metaphor, zones, tensions, mechanisms | "YOUR DESIGN BRIEF" -- read first |
| 2 | `conventions-brief.md` | 546 | World model, composition process, quality floor | "YOUR PROCESS GUIDANCE" |
| 3 | Content file (variable) | 200-1000 | The actual content to render | "THE MATERIAL" |
| 4 | `mechanism-catalog.md` | 1,218 | Mechanism CSS patterns (18 mechanisms) | "consult as needed" |
| 5 | `components.css` | 1,195 | Component library (callouts, tables, code blocks) | "consult as needed" |
| 6 | `tokens.css` | 183 | CSS variable values (:root block) | "consult as needed" |
| 7 | `prohibitions.md` | 419 | Soul constraints (22 prohibitions) | "Read LAST before CSS begins" |

### Total Line Count

| Scenario | Lines |
|----------|-------|
| **Minimum** (short content, no consulting) | 50 + 546 + 200 + 419 = **1,215** |
| **Typical** (medium content, some consulting) | 50 + 546 + 500 + 600 + 400 + 183 + 419 = **2,698** |
| **Maximum** (long content, full consulting) | 50 + 546 + 1000 + 1218 + 1195 + 183 + 419 = **4,611** |

### Comparison to Prior "75-line Builder Visibility Cap"

The 75-line cap was from the FLAGSHIP experiment where the builder received ~75 lines of actual building instructions extracted from a 963-line prompt. That architecture is now replaced.

The new architecture gives the builder **546 lines of conventions brief** (7.3x the old cap) plus a **50-line TC brief** for a total of **596 lines of actual building guidance**. This is a massive improvement -- but 596 lines is still a lot to absorb before writing CSS.

**The real question is not "how many lines" but "how many lines get internalized."**

---

## Section 2: Attention Heat Map

### LLM Attention Distribution Model

Based on known LLM attention patterns (primacy effect, recency effect, instruction-following bias, and mid-sequence decay):

```
ATTENTION INTENSITY
|
|  ######                                              ########
|  ######                                              ########
|  ######    ####                              ####    ########
|  ######    ####     ####    ###    ###       ####    ########
|  ######    ####     ####    ###    ###       ####    ########
+--TC-BRIEF--CONV-1---CONV-5--CONV-8--CONTENT--MECH---PROHIB---->
   (File 1)  (File 2 opening) (File 2 middle)  (File 4-6)  (File 7)
   PRIMACY   HIGH EARLY       DEAD ZONE        VARIABLE   RECENCY
```

### Per-File Attention Estimates

| File | Position | Attention | Justification |
|------|----------|-----------|---------------|
| TC Brief (~50 lines) | 1st (PRIMACY) | **VERY HIGH** (90%+) | Short, read first, explicit framing as "YOUR foundation." LLMs give disproportionate weight to initial instructions. |
| Conventions Brief -- Sections 1-3 (lines 1-90) | 2nd, early | **HIGH** (75-85%) | Identity/Perception/Richness -- foundational concepts, early in document. Section 1 (Soul) repeats TC brief content = reinforcement. |
| Conventions Brief -- Section 4 (lines 91-178) | 2nd, early-mid | **HIGH** (70-80%) | Multi-Coherence is the CORE compositional concept. 88 lines of dense instruction. Attention likely strong because it's the first truly NOVEL content after soul repetitions. |
| Conventions Brief -- Section 5 (lines 179-231) | 2nd, mid | **MEDIUM** (50-65%) | Fractal Echo. Important but abstract. Builder likely absorbs the TABLE (Scales, CSS Recipe) but skims the prose explanation. |
| Conventions Brief -- Section 6 (lines 232-252) | 2nd, mid | **MEDIUM-LOW** (40-55%) | Unified Metaphor. ONLY 20 lines. But the TC brief already provides the metaphor. The builder may treat this as redundant. |
| Conventions Brief -- Section 7 (lines 253-280) | 2nd, mid | **MEDIUM-LOW** (40-55%) | Transition Grammar (SMOOTH/BRIDGE/BREATHING). Critical for boundary quality. But deep in document = attention decay. The transition-to-coherence mapping table probably gets absorbed; the prose around it probably doesn't. |
| Conventions Brief -- Section 8 (lines 281-327) | 2nd, mid-late | **LOW-MEDIUM** (35-50%) | CSS Vocabulary. Dense with examples. Builder likely absorbs the FIRST 2-3 patterns (Component 2-Zone DNA, 3-Tier Border Budget) and skims the rest. This is the DEAD ZONE. |
| Conventions Brief -- Section 9 (lines 328-345) | 2nd, late | **MEDIUM** (50-60%) | Creative Authority. Short, permission-granting. May get a bump from being "freedom-granting" (LLMs attend to permission signals). |
| Conventions Brief -- Section 9B (lines 346-362) | 2nd, late | **MEDIUM** (50-65%) | Quality Floor. Numeric thresholds. LLMs are good at absorbing threshold tables. The >= 14 mechanisms / >= 800 CSS lines numbers likely stick. |
| Conventions Brief -- Sections 10-14 (lines 363-475) | 2nd, late | **LOW** (25-40%) | Compositional Memory, Five Questions, Restraint List, Accessibility, Responsive. This is 112 lines of IMPORTANT content in the WORST position -- late-middle of a long document. |
| Conventions Brief -- PROCESS section (lines 476-546) | 2nd, closing | **MEDIUM-HIGH** (60-75%) | The actual build process. Gets a RECENCY bump because it's the last thing before the builder starts reading content. The boundary CSS recipe (example code) probably gets good absorption because code examples attract attention. |
| Content file | 3rd | **HIGH** (70-85%) | This is what the builder is actually rendering. Content drives decisions. But attention is distributed across it, not concentrated. |
| Mechanism catalog | 4th ("consult") | **LOW** (15-30%) | "Consult as needed" = "probably won't." See Section 5. |
| Components.css | 5th ("consult") | **LOW** (15-25%) | Same problem. CSS file = even less likely to be consulted mid-build. |
| Tokens.css | 6th ("consult") | **MEDIUM** (40-60%) | Variable values are NEEDED during CSS writing. More likely to be consulted than catalog/components. |
| Prohibitions.md | 7th (RECENCY) | **HIGH** (75-85%) | Read LAST. Recency effect is strong. "NEVER" language attracts attention. The 8 absolute prohibitions likely have near-100% absorption. |

### The Attention Distribution Story

The builder's attention follows a **U-curve with a fat left tail**:

1. **TC Brief (50 lines)**: Nearly complete absorption. This is the builder's mental model anchor.
2. **Conventions Brief first 178 lines (Sections 1-4)**: Strong absorption. Soul + Perception + Richness + Multi-Coherence. These form the WORLD MODEL.
3. **Conventions Brief lines 179-475 (Sections 5-14)**: Decaying absorption. This is ~296 lines of critical content in a low-attention zone. The fractal echo table, transition grammar, CSS vocabulary, quality floor, five questions, accessibility -- all in the trough.
4. **Conventions Brief PROCESS section (lines 476-546)**: Partial recovery due to recency and actionability.
5. **Content file**: Distributed attention. The builder processes this to understand WHAT to build, not HOW.
6. **Prohibitions.md**: Strong recency absorption for the absolute prohibitions. Conditional prohibitions (the middle of the file) suffer the same mid-document decay.

---

## Section 3: Conventions Brief Mismatch Analysis

### Critical Content in Low-Absorption Positions

| Section | Position | Criticality | Est. Absorption | MISMATCH? |
|---------|----------|-------------|-----------------|-----------|
| S1: Identity (Soul) | Lines 1-48 | HIGH | HIGH | No -- well-positioned |
| S2: Perception (Physics) | Lines 49-69 | **CRITICAL** | HIGH | No -- early enough |
| S3: Richness | Lines 70-90 | HIGH | HIGH | No -- early enough |
| S4: Multi-Coherence | Lines 91-178 | **CRITICAL** | HIGH | No -- still early |
| S5: Fractal Echo | Lines 179-231 | HIGH | MEDIUM | **MILD MISMATCH** |
| S6: Unified Metaphor | Lines 232-252 | MEDIUM | MEDIUM-LOW | Partially mitigated (TC brief covers this) |
| S7: Transition Grammar | Lines 253-280 | **CRITICAL** | MEDIUM-LOW | **SEVERE MISMATCH** |
| S8: CSS Vocabulary | Lines 281-327 | HIGH | LOW-MEDIUM | **SEVERE MISMATCH** |
| S9: Creative Authority | Lines 328-345 | MEDIUM | MEDIUM | Minor mismatch |
| S9B: Quality Floor | Lines 346-362 | **CRITICAL** | MEDIUM | **MODERATE MISMATCH** |
| S10: Compositional Memory | Lines 363-377 | HIGH | LOW | **SEVERE MISMATCH** |
| S11: Five Questions | Lines 378-395 | HIGH | LOW | **SEVERE MISMATCH** |
| S12: Restraint List | Lines 396-416 | MEDIUM | LOW | Moderate mismatch |
| S13: Accessibility | Lines 417-461 | HIGH | LOW | **SEVERE MISMATCH** |
| S14: Responsive | Lines 462-475 | MEDIUM | LOW | Moderate mismatch |
| PROCESS | Lines 476-546 | **CRITICAL** | MEDIUM-HIGH | **MILD MISMATCH** |
| Conviction Card | Lines 477-499 | **CRITICAL** | MEDIUM | **MODERATE MISMATCH** |

### The 5 Most Dangerous Mismatches

**1. Transition Grammar (S7, lines 253-280) -- CRITICAL + LOW absorption**

This section defines SMOOTH/BRIDGE/BREATHING transitions -- the vocabulary for zone boundaries. Without it, the builder defaults to uniform spacing between all zones. The Flagship failure mode (6 whitespace voids of 210-276px each) was directly caused by missing transition grammar -- the builder used undifferentiated padding instead of typed transitions.

**Why it's dangerous:** This is the IMPLEMENTATION bridge between multi-coherence theory (S4, well-absorbed) and actual CSS at boundaries. The builder absorbs "shift 3+ channels at boundaries" but NOT "use SMOOTH for topic shifts, BRIDGE for mode shifts, BREATHING for major breaks." The theory without the grammar produces programmatic compliance with perceptual flatness.

**2. CSS Vocabulary (S8, lines 281-327) -- HIGH criticality + LOW absorption**

This section contains the proven CSS patterns: Component 2-Zone DNA, 3-Tier Border Budget, Dark Slab Inversion, Callout Accent System, Layout Topologies, Drop Cap. These are the TOOLS the builder needs. Without them, the builder writes generic CSS from general knowledge instead of the design system's specific vocabulary.

**Why it's dangerous:** The mechanism catalog (File 4) duplicates some of this content, but it's marked "consult as needed" and unlikely to be read (see Section 5). The conventions brief IS the builder's chance to absorb these patterns, and it's in the dead zone.

**3. Compositional Memory (S10, lines 363-377) -- HIGH criticality + LOW absorption**

"Boundary naming," "Midpoint reflection," "Category awareness," "Fix cycle memory" -- these are PROCESS habits that prevent drift. Without them, the builder writes CSS for 1000+ lines without pausing to check coherence. The midpoint reflection alone was identified as "5 minutes that prevents 30 minutes of post-build remediation."

**Why it's dangerous:** This is the section that tells the builder to STOP AND LOOK at the halfway point. Without it, the builder writes the entire page in one continuous pass, front-loading quality and abandoning the second half. This is the exact failure mode observed in the Flagship (all visual interest in first 30%).

**4. Accessibility (S13, lines 417-461) -- HIGH criticality + LOW absorption**

HTML skeleton template, skip link, ARIA roles, focus-visible styling, reduced-motion media query, selection styling, color contrast. These aren't aesthetic -- they're STRUCTURAL requirements that gate programmatic verification (SC-06, SC-07).

**Why it's dangerous:** Accessibility that's bolted on after the build is always worse than accessibility built into the HTML skeleton. If the builder doesn't absorb this section, it writes the HTML first, then patches ARIA roles in later (or doesn't), and the programmatic gates catch it in fix cycles. Fix cycles for accessibility are more expensive than getting it right initially.

**5. Five Questions (S11, lines 378-395) -- HIGH criticality + LOW absorption**

The Squint, The Scroll, The Second Half, The Boundary, The Skeleton. These are the builder's self-verification protocol. Without them, the builder submits its first draft without critical self-assessment.

**Why it's dangerous:** The self-check is the cheapest quality intervention. A builder that scrolls its own page and asks "is there a void longer than 120px?" catches problems before the 9-auditor PA deployment. Without this, every problem reaches PA, which is expensive (9 Opus agents) and slow.

---

## Section 4: TC Brief as Absorption Solution

### What TC Provides

The TC brief (~50 lines) gives the builder:
1. **STRUCTURAL METAPHOR**: The metaphor and why it's structural (CSS implications)
2. **ZONE ARCHITECTURE**: How content divides into zones
3. **CONTENT TENSIONS**: Key tensions the composition must express
4. **SELECTED MECHANISMS**: Which mechanisms serve the metaphor (from which categories)
5. **METAPHOR-IMPLIED CSS DIRECTIONS**: Specific CSS patterns the metaphor suggests

### How Much TC Reduces the Absorption Burden

| Conventions Brief Section | Without TC Brief | With TC Brief | Burden Reduction |
|--------------------------|-----------------|---------------|-----------------|
| S1: Identity (Soul) | Must learn from scratch | Still must learn | NONE (TC doesn't cover soul) |
| S2: Perception (Physics) | Must learn thresholds | Still must learn | NONE (TC doesn't cover thresholds) |
| S3: Richness | Must internalize formula | TC provides density direction | PARTIAL (~30%) |
| S4: Multi-Coherence | Must plan from scratch | TC provides zone count + mechanism selection = partial channel plan | MODERATE (~40%) |
| S5: Fractal Echo | Must derive scale plan | TC provides zones + mechanisms = partial scale mapping | MODERATE (~40%) |
| S6: Unified Metaphor | Must derive metaphor | **TC provides the metaphor completely** | **COMPLETE (~95%)** |
| S7: Transition Grammar | Must plan transitions | TC provides zone architecture = boundary locations known | PARTIAL (~30%) |
| S8: CSS Vocabulary | Must learn patterns | TC provides "metaphor-implied CSS directions" | MODERATE (~50%) |
| S9B: Quality Floor | Must memorize thresholds | TC doesn't address thresholds | NONE |
| S10: Compositional Memory | Must learn habits | TC doesn't address process habits | NONE |
| S11: Five Questions | Must learn self-check | TC doesn't address self-check | NONE |
| S13: Accessibility | Must learn HTML skeleton | TC doesn't address accessibility | NONE |

### Assessment

TC reduces the conventions brief absorption burden by approximately **25-35%** in aggregate. It completely handles metaphor derivation (S6), moderately helps with multi-coherence planning (S4) and fractal echo (S5), and partially helps with CSS vocabulary (S8).

**But TC does NOT help with the most dangerous mismatches:**
- Transition Grammar (S7): TC gives zone locations but not transition TYPES
- Compositional Memory (S10): TC is a brief, not a process guide
- Accessibility (S13): TC doesn't address HTML structure
- Five Questions (S11): TC doesn't address self-verification

### Can the Conventions Brief Be Shorter?

**Yes, by approximately 80-120 lines.** Specifically:

1. **S6 (Unified Metaphor, ~20 lines)**: Could be reduced to 5 lines saying "Your metaphor is in the TC brief. Use it." (-15 lines)
2. **S1 (Identity, ~48 lines)**: Duplicates prohibitions.md which is read separately. Could be reduced to "Soul constraints are in prohibitions.md. The non-negotiables: border-radius: 0, box-shadow: none, container 940-960px, font trinity, R>=G>=B warm palette." (-35 lines)
3. **S3 (Richness, ~20 lines)**: The formula "density x restraint x spatial confidence" is important. But the self-test and detailed explanation could be trimmed. (-8 lines)
4. **S12 (Restraint List, ~20 lines)**: Duplicates prohibitions.md content. Could be a one-line cross-reference. (-18 lines)

**Total reduction: ~76 lines, bringing the brief from 546 to ~470 lines.** This is meaningful but not transformative. The real issue is POSITION, not LENGTH.

### Could the Conventions Brief Be RESTRUCTURED?

**This is the higher-leverage intervention.** The current ordering is:

```
CURRENT: Soul -> Perception -> Richness -> Multi-Coherence -> Fractal Echo -> Metaphor ->
         Transition Grammar -> CSS Vocabulary -> Creative Authority -> Quality Floor ->
         Compositional Memory -> Five Questions -> Restraint -> Accessibility -> Responsive -> PROCESS
```

A restructured version optimized for absorption would use **sandwich structure** (critical content at top AND bottom, less critical in middle):

```
PROPOSED: Soul (brief) -> PROCESS (moved up!) -> Multi-Coherence -> Transition Grammar (moved up!) ->
          CSS Vocabulary (moved up!) -> Quality Floor -> Fractal Echo ->
          Perception -> Richness -> Creative Authority ->
          Compositional Memory -> Five Questions -> Accessibility -> Responsive -> Restraint
```

**The key insight:** The PROCESS section (build protocol, boundary CSS recipe, verification pauses) is currently at the END (lines 476-546). Moving it to position 2 (right after a brief soul statement) would give it PRIMACY-ADJACENT absorption. The builder would know HOW to build before learning the details of WHAT to build.

Similarly, Transition Grammar and CSS Vocabulary -- the two most dangerous mismatches -- would be moved from the dead zone to the first third.

---

## Section 5: "Consult as Needed" Reality Check

### What "Consult as Needed" Actually Means in Practice

"Consult as needed" is a polite instruction that gets overridden by the builder's task pressure. The builder is writing a complex HTML + CSS page. Its cognitive budget is focused on:
1. Implementing the metaphor (from TC brief)
2. Following the process (from conventions brief)
3. Rendering the content (from content file)
4. Avoiding violations (from prohibitions)

Opening a separate 1,218-line file to look up a mechanism's CSS pattern is a CONTEXT SWITCH. Each switch costs:
- Time to navigate to the file
- Time to find the relevant mechanism
- Attention diverted from the current CSS being written
- Risk of losing the compositional thread

### Probability of Consultation

| File | Lines | Probability of Consultation | Evidence |
|------|-------|-----------------------------|----------|
| `mechanism-catalog.md` (1,218 lines) | 1,218 | **15-25%** | Builder knows its mechanisms from TC brief. TC brief says "use border-weight gradient" but doesn't provide CSS. Builder probably writes generic CSS from knowledge rather than looking up the specific catalog pattern. |
| `components.css` (1,195 lines) | 1,195 | **10-20%** | CSS file. Builder would need to know component class names to consult it. The conventions brief mentions "Component 2-Zone DNA" but doesn't provide class names. Builder probably invents its own classes. |
| `tokens.css` (183 lines) | 183 | **40-60%** | Short. Contains CSS variables the builder NEEDS (color values, spacing values). Most likely to be consulted because the builder literally needs `var(--color-primary)` to write valid CSS. |

### What Gets Lost Without Consultation

**mechanism-catalog.md losses:**
- Application Modes (Progressive vs Discrete) for each mechanism -- builder defaults to one mode
- Anti-patterns per mechanism -- builder may deploy uniformly
- Transition Grammar section (duplicated in conventions brief but with more detail here)
- Restraint Protocol -- mechanism density cap of 4 per viewport (this is ONLY in the catalog)
- Distribution Requirement -- every third of the page gets >= 2 mechanisms (ONLY in catalog)

**components.css losses:**
- Correct class names (`.callout`, `.callout__label`, `.callout__body`)
- Parametric variations (`--callout-border-color`, `--callout-bg-color`)
- Zone-adapted component styles (dense zone vs sparse zone variants)
- Component variants the builder doesn't know exist

**tokens.css losses:**
- Exact hex values (builder might use approximate values from memory)
- Spacing scale steps (builder might use 50px instead of 48px)
- Zone color tokens (`--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing`)

### Critical Information That Should Be Elsewhere

**The mechanism density cap (4 per viewport)** is in mechanism-catalog.md lines 1037-1045. This is a CRITICAL quality gate -- the Ceiling experiment concentrated 14 mechanisms in the first 20% of scroll. If the builder doesn't consult the catalog, it never sees this rule.

**The distribution requirement (>= 2 mechanisms per third)** is in mechanism-catalog.md lines 1047-1053. Same problem.

**Component class names** are in components.css but the builder spawn prompt says ">= 8 component classes" without listing what they are. The builder may invent classes instead of using the library, causing SC-08 gate failure.

**Recommendation:** The TC brief should contain:
1. Selected mechanism CSS RECIPES (not just names)
2. Component class names to use (not just "use >= 8")
3. Mechanism density cap (4 per viewport)
4. Distribution requirement (>= 2 per third)

---

## Section 6: Fix Cycle Context Decay

### How Fix Cycles Work

After the initial build, the fix cycle sends the builder:
1. Gate failures with measured values and thresholds
2. PA top-5 issues with auditor quotes
3. "DO NOT TOUCH" list (protected elements)
4. Instruction: "Re-read your conviction statement and transition table in _build-log.md before applying fixes"

### The Context Decay Problem

The fix cycle instructions are READ AFTER the builder has already produced ~1000-2000 lines of CSS. At this point:

**What the builder remembers well:**
- Its own CSS (just wrote it)
- The content structure (just rendered it)
- The TC brief metaphor (primacy + repeated use)
- The absolute prohibitions (recency + NEVER language)

**What the builder remembers poorly:**
- Multi-coherence theory (absorbed early, overwritten by CSS details)
- Transition grammar (was in dead zone to begin with)
- Quality floor thresholds (numbers fade)
- Five questions protocol (never strongly absorbed)

**What the fix cycle adds:**
- Specific gate failures: "SC-09 FAIL: Zone 2->3 bg delta = 8 RGB (threshold: 15)"
- Specific PA quotes: "Auditor C: 'The middle section feels flat and undifferentiated'"
- Compositional context: "Re-read conventions-brief.md Section [N]"

### The Decay Pattern

```
INITIAL BUILD                    FIX CYCLE 1                    FIX CYCLE 2
|                                |                                |
| TC Brief ████████████         | TC Brief ████████             | TC Brief ██████
| Conv S1-4 ██████████          | Conv S1-4 ██████              | Conv S1-4 ████
| Conv S5-14 ████               | Conv S5-14 ██                 | Conv S5-14 █
| Content ████████████          | Content ██████████            | Content ████████
| Prohibitions ██████████       | Prohibitions ████████         | Prohibitions ██████████
|                                |                                |
| [doesn't exist yet]           | Fix instructions ████████████ | Fix 1 ████████
|                                |                                | Fix 2 ████████████
|                                |                                |
| COMPOSITIONAL FOCUS            | FIX-ORIENTED FOCUS            | SYMPTOM-ORIENTED
```

**By Fix Cycle 2, the builder is operating in SYMPTOM MODE.** It sees "SC-09 FAIL: bg delta 8 RGB" and changes the background color. But it no longer remembers the multi-coherence direction at that boundary. The fix might satisfy SC-09 while breaking SC-13 (multi-coherence) because the builder forgot that the boundary was supposed to be DEEPENING, and the new background goes in the wrong chromatic direction.

### The "Re-read conviction statement" Instruction

The fix cycle says: "Re-read your conviction statement and transition table in _build-log.md before applying fixes."

**This is the RIGHT intervention but has a structural weakness.** The conviction statement is in `_build-log.md` which the builder wrote. The builder is more likely to re-read its OWN output than the conventions brief. But the conviction statement is a SUMMARY -- it doesn't contain the detailed multi-coherence theory or transition grammar. It contains:
- Content name
- Zone names
- Organizing principle (1 sentence)
- Coherence direction (1 word)
- Metaphor name

This is enough to ANCHOR the builder's memory but not enough to RECONSTRUCT the compositional intelligence. The builder remembers "DEEPENING" but not "DEEPENING = darker bg + tighter spacing + heavier borders + denser typography" (which is in conventions brief S4, line 120).

### Recommendation

The fix instructions should include a **"compositional memory refresh"** block:

```
YOUR COHERENCE DIRECTIONS (from conventions brief):
DEEPENING = darker bg + tighter spacing + heavier borders + denser typography
OPENING = warmer bg + generous spacing + thinner borders + more air
FOCUSING = narrower content + larger type + bolder accents + fewer elements
RESOLVING = settled tones + standard spacing + lighter borders + clean typography

YOUR PLANNED BOUNDARIES (from your build log):
Z1->Z2: [direction] -- fix must maintain this direction
Z2->Z3: [direction] -- fix must maintain this direction
...
```

This 10-line block would cost almost nothing and would prevent the most common fix cycle failure: satisfying a gate threshold while breaking coherence direction.

---

## Section 7: Absorption Optimization Recommendations

### Recommendation 1: Restructure the Conventions Brief (HIGH IMPACT, LOW COST)

**Current structure:** Conceptual-first (Soul -> Perception -> Richness -> ... -> PROCESS last)

**Proposed structure:** Action-first with conceptual anchors

```
SECTION 1: SOUL (15 lines -- brief, non-duplicative with prohibitions.md)
SECTION 2: PROCESS (moved from end -- HOW to build, boundary-by-boundary recipe)
SECTION 3: MULTI-COHERENCE (the binding rule -- theory + channel table + example)
SECTION 4: TRANSITION GRAMMAR (SMOOTH/BRIDGE/BREATHING -- the boundary vocabulary)
SECTION 5: CSS VOCABULARY (proven patterns -- 2-Zone DNA, Border Budget, Dark Slab)
SECTION 6: QUALITY FLOOR (numeric thresholds in a table)
SECTION 7: FRACTAL ECHO (scale build order table)
SECTION 8: PERCEPTION (physics of visibility -- threshold table)
SECTION 9: RICHNESS (governing formula)
SECTION 10: CREATIVE AUTHORITY + RESTRAINT
SECTION 11: ACCESSIBILITY (HTML skeleton template)
SECTION 12: CONVICTION CARD + FIVE QUESTIONS (self-verification)
SECTION 13: RESPONSIVE
```

**Why this works:** The builder reads PROCESS second (high absorption), then MULTI-COHERENCE, TRANSITION GRAMMAR, and CSS VOCABULARY third through fifth (still in the high-absorption zone). The conceptual foundations (Perception, Richness) move to the middle -- they're less critical because the builder's ACTIONS are already guided by the process section.

### Recommendation 2: Expand TC Brief to ~80 Lines (HIGH IMPACT, MEDIUM COST)

The TC brief currently provides metaphor + zones + mechanisms. It should also provide:

1. **Selected mechanism CSS RECIPES** (~15 lines): For each selected mechanism, the TC analyst includes a 2-3 line CSS snippet showing the specific pattern. This eliminates the "consult as needed" dependency on mechanism-catalog.md.

2. **Component class names to use** (~5 lines): "Use these classes from components.css: .callout, .callout--essence, .callout--tip, .data-table, .code-block, .bento-grid, .meta-label, .drop-cap"

3. **Transition plan** (~10 lines): "Z1->Z2: BRIDGE (4 channels: Chromatic + Typographic + Spatial + Structural). Z2->Z3: SMOOTH (2 channels: Chromatic + Spatial). Z3->Z4: BREATHING (5 channels)."

**Why this works:** TC runs on Opus and has full access to the mechanism catalog and component library. It can PRE-DIGEST the right mechanisms into the brief, saving the builder from consulting 2,400+ lines of reference files.

### Recommendation 3: Add a "100-Line Summary" Preamble to Conventions Brief (MEDIUM IMPACT, LOW COST)

Before the full brief, include a distilled version:

```markdown
## TL;DR -- If You Read Only This

1. Container: 940-960px (NON-NEGOTIABLE)
2. Build BOUNDARY-BY-BOUNDARY (not channel-by-channel)
3. At each boundary: >= 3 channels shift in SAME semantic direction
4. Transition types: SMOOTH (1-2 ch), BRIDGE (3-4 ch), BREATHING (4-5 ch)
5. 3-Tier borders: 4px accent, 3px structural, 1px separator
6. Zone bg delta >= 15 RGB, font-size delta >= 2px
7. No letter-spacing < 0.025em, no stacked gap > 120px
8. >= 14 mechanisms across 5 categories, >= 8 component types
9. Pause at midpoint -- scroll and assess
10. At least 1 designed moment in second half
```

This 10-line block would survive even severe attention decay. If the builder absorbs NOTHING else, these 10 rules produce a page above floor quality.

### Recommendation 4: Builder Reading Order Should Be Explicit (LOW COST)

The current spawn prompt says "Read these files IN THIS ORDER" but doesn't say how to READ each file. Add:

```
Reading priorities:
- TC Brief: Read completely, absorb every line. This is your compositional anchor.
- Conventions Brief: Read Sections 1-4 carefully. SKIM Sections 5-14. Return to PROCESS section (Section 15) and read carefully.
- Content: Read completely. Note where topic shifts occur.
- Prohibitions: Read the 8 ABSOLUTE prohibitions. Skim conditionals.
- Tokens: Keep open for reference during CSS writing.
- Mechanism catalog + components.css: ONLY consult when you need a specific pattern.
```

### Recommendation 5: Pre-Digest "Consult as Needed" Files into TC Brief (HIGH IMPACT)

Eliminate the "consult as needed" paradigm entirely. The TC analyst should:
1. Select mechanisms and include their CSS patterns in the brief
2. List component classes to use
3. Include relevant token values inline

The builder receives: TC brief (~80 lines) + conventions brief (~470 lines) + content + prohibitions. Total: ~1,170 lines. The mechanism catalog and components.css become TC-ONLY files that the builder never sees.

### Recommendation 6: Fix Cycle Memory Refresh (MEDIUM IMPACT, LOW COST)

Every fix instruction should include:
1. The builder's conviction statement (copied from build log)
2. The coherence direction definitions (10 lines from conventions brief S4)
3. The boundary plan from the build log
4. A reminder: "This fix must maintain your planned coherence direction. If the gate fix contradicts your direction, adjust the direction, don't abandon it."

---

## Section 8: The Honest Assessment

### Confidence Rating: 5.5 / 10

**I agree with the user's 5/10 estimate and nudge it up slightly to 5.5/10.** Here's why:

### Evidence FOR Absorption (Why Not Lower Than 5)

1. **TC Brief is excellent.** A 50-line brief in primacy position with a clear metaphor, zones, and mechanisms gives the builder a strong compositional ANCHOR. The builder WILL internalize the metaphor and use it to guide decisions. This alone prevents the worst failure mode (completely generic output).

2. **Conventions Brief S1-S4 are well-positioned.** The first 178 lines covering Soul, Perception, Richness, and Multi-Coherence have HIGH estimated absorption. The builder will likely understand the multi-coherence concept and attempt to implement it.

3. **Prohibitions.md in recency position works.** The builder reads this last before writing CSS. The absolute prohibitions (border-radius: 0, box-shadow: none) will be followed. Soul compliance is very likely.

4. **The builder is Opus.** Opus models have stronger compositional reasoning than Sonnet. They're more likely to synthesize inputs into coherent output rather than extracting checklist items. Opus can hold more context in working memory.

5. **The spawn prompt is clear.** "Build boundary-by-boundary" and "self-check at 3 checkpoints" provide structural guidance that the builder can follow even if specific sections of the conventions brief are forgotten.

### Evidence AGAINST Absorption (Why Not Higher Than 6)

1. **The dead zone is real and dangerous.** Sections 7-14 of the conventions brief (Transition Grammar, CSS Vocabulary, Compositional Memory, Five Questions, Accessibility) contain critical content in low-absorption positions. The builder likely absorbs ~40% of this content on first read.

2. **"Consult as needed" is fiction.** The mechanism catalog (1,218 lines) and components.css (1,195 lines) are unlikely to be consulted. Their critical content -- mechanism density caps, distribution requirements, component class names -- is effectively invisible to the builder.

3. **The gap between theory and implementation.** The builder absorbs "shift 3+ channels at boundaries" (theory from S4) but may not absorb "SMOOTH for topic shifts, BRIDGE for mode shifts" (implementation from S7). Theory without implementation grammar produces technically-compliant but perceptually-flat output. This is EXACTLY what the Flagship produced.

4. **Fix cycle context decay.** By fix cycle 2, the builder is in symptom-fixing mode. It satisfies gate thresholds (SC-09: change bg color) without maintaining compositional coherence. The "re-read conviction statement" instruction helps but doesn't fully prevent decay.

5. **Total input volume is still 2,000-3,000+ lines.** Even with TC reducing the absorption burden by 25-35%, the builder is processing enormous input before writing a line of CSS. Human-like saturation effects apply to LLMs: after a certain volume, marginal absorption drops sharply.

6. **No evidence of complete absorption.** Neither the Middle experiment nor the Flagship experiment showed the builder explicitly referencing conventions brief sections 7-14 in its build log. The Middle experiment succeeded because its RECIPE was 100 lines of sequenced steps (not the 546-line conventions brief). The Flagship failed because its input was a CHECKLIST (constraints to verify) not a RECIPE (steps to follow).

### The Core Uncertainty

The fundamental question -- "does the builder absorb or extract?" -- has an answer that's probably BOTH, and the ratio depends on input structure:

- **RECIPE input** (sequenced steps, specific values, "do X then Y"): Builder follows recipe. Absorption ~80%.
- **REFERENCE input** (concepts, thresholds, examples): Builder extracts subset. Absorption ~40-50%.
- **CHECKLIST input** (rules, prohibitions, "must have X"): Builder scans for binary checks. Absorption ~60% for thresholds, ~30% for reasoning.

The conventions brief is currently structured as REFERENCE (~70%) with some RECIPE (~20%, the PROCESS section) and CHECKLIST (~10%, the Quality Floor). Restructuring it to be more RECIPE-like (specific steps, specific values, "at boundary Z2->Z3, do X") would shift absorption from 50% to 70%+.

### What Would Move This to 7/10?

1. Restructure conventions brief (Recommendation 1): +0.5
2. Expand TC brief to ~80 lines with CSS recipes (Recommendation 2): +0.5
3. Add 100-line TL;DR preamble (Recommendation 3): +0.3
4. Fix cycle memory refresh (Recommendation 6): +0.2

**Combined: 5.5 -> 7.0.** This is the realistic ceiling without changing the fundamental architecture (e.g., multi-pass builds, per-section builders, or interactive build-review cycles).

### What Would Move This to 9/10?

That requires architectural changes beyond the current conventions-brief scope:
- **Multi-pass building:** First pass = HTML skeleton + zone boundaries. Second pass = CSS per zone. Third pass = refinement. Each pass has a focused, short (<100 line) brief.
- **Per-zone recipes:** Instead of a single conventions brief, the TC analyst produces per-zone CSS recipes: "Zone 2: bg #F0EBE3, padding 48px, h2 1.75rem, border-left 3px, direction DEEPENING."
- **Interactive build-review:** Builder produces zone 1, gets immediate feedback, then builds zone 2. Prevents drift.

These are Pipeline v3 ideas, not current-scope optimizations.

---

## Summary

The builder absorption problem is real but not catastrophic. The TC brief provides a strong compositional anchor (high absorption). The conventions brief's first 178 lines are well-absorbed. But critical content -- transition grammar, CSS vocabulary, compositional memory, accessibility, self-verification -- sits in a low-absorption zone and is likely underabsorbed.

The highest-leverage fix is **restructuring the conventions brief** to put actionable content (PROCESS, transition grammar, CSS vocabulary) in the high-absorption zone (positions 2-5) and move conceptual content (perception, richness) to the middle. Combined with expanding the TC brief to include CSS recipes and component class names, this could move builder confidence from 5.5/10 to 7/10 without architectural changes.

The "consult as needed" paradigm should be abandoned. Files that are "consult as needed" are effectively invisible. Their critical content should be pre-digested into the TC brief by the TC analyst.

---

**END ABSORPTION ANALYSIS**
