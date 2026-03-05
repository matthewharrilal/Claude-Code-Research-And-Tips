# Pipeline Forensics: The Structural Kill Chain

How the research-compose pipeline systematically prevents the spatial inventions that define the Molly Panopticon build. Forensic comparison between exact pipeline lines and the MASTER-BUILD-PHILOSOPHY.md, with gap assessment for each kill point.

**Auditor's note:** This is a line-by-line forensic. Every kill point quotes the EXACT pipeline instruction, gives the file and line number, explains what it kills, and assesses whether MASTER-BUILD-PHILOSOPHY.md captures it with sufficient specificity.

---

## Phase: TC DERIVATION

### Kill Point TC-1: Archetype Classification Instead of Spatial Discovery

**File:** `skills/research-compose/prompts/tc-derivation.md`
**Lines 36-39:**
```
Structural Observation — what spatial organization does this content's logic suggest? Contains:
  - Content archetype identification (from archetype table below)
  - Inherent spatial logic (groupings, hierarchies, parallelisms, sequences in the content)
  - Spatial proposition (what layout might serve this logic — or "Standard vertical" if linear)
```

**What it kills:** The TC agent is told to IDENTIFY an archetype from a 7-row lookup table (lines 97-106), not to DISCOVER spatial forms through engagement with the content. The table maps content types to pre-catalogued spatial structures: "Parallel Items" maps to "Grid, constellation, cards." "Linear Narrative" maps to "Single-column flow, timeline." The corridor (a progressive width change from 520px to 960px enacting a philosophical argument) does not exist in this table and cannot be classified into it.

**The escape hatch that closes the door (line 107):**
```
For Structural Observation (Section 7): Identify the PRIMARY archetype. If content is
Parallel Items or Hierarchical Taxonomy, the spatial proposition should suggest a NON-
STANDARD layout. If content is Linear Narrative, "Standard vertical" is the correct
answer — do not force structure.
```

The Molly Panopticon content IS a linear narrative (diagnosis -> evidence -> warning -> philosophical close). Under this instruction, the TC agent correctly classifies it as "Linear Narrative" and outputs "Standard vertical." The corridor would be classified out of existence before any builder touches the content.

**Master Doc coverage:** PARTIAL. The Master Doc names this problem on line 179: "No TC brief captures it because the TC agent isn't looking for spatial forms, it's looking for themes and tensions and creative conditions." But it does not quote the specific archetype table or the line-107 escape hatch that explicitly routes linear narratives to "standard vertical." It should quote the exact gate mechanism.

---

### Kill Point TC-2: Compositional Questions Are Texture-Only

**File:** `skills/research-compose/prompts/tc-derivation.md`
**Lines 79-82 (GOOD question examples):**
```
"What if every visual channel compressed as you descend the tower? Typography shrinks,
spacing tightens, line-height compresses, letter-spacing neutralizes. Test: cover the
zone labels — can you FEEL which floor you're on from visual weight alone?"

"What if the code blocks carried the same atmospheric signature as their surrounding zone
— not just syntax-highlighted text in a box, but code that BELONGS to its stratum?"
```

**What it kills:** Both "good" texture question examples vary visual channels WITHIN a fixed spatial form. Typography shrinking, spacing tightening, letter-spacing neutralizing — all within a 960px vertical column. None ask "What if the container itself changed width?" or "What if the page's physical dimensions enacted the argument?"

**Lines 83-87 (GOOD structural question examples):**
```
"What if the 8 roles were arranged in an authority-encoded grid where Mayor spans full
width and Workers share a row — so the reader SEES the hierarchy before reading a word?"
→ Implied channels: grid-template-columns, grid-template-areas, padding per cell, border-
weight per tier
```

The structural examples are better but frame invention as arranging CONTENT into known layout types (grids). The corridor is not a grid arrangement. It is the page ITSELF as a philosophical object — the container width IS the argument. This concept does not appear in any question example, good or bad.

**Master Doc coverage:** NOT CAPTURED. The Master Doc discusses compositional questions only in the context of "what the pipeline strips away" (lines 25-32). It does not identify the specific bias in the TC question examples toward texture variation. It should name that the question templates provided to the TC agent are all texture-oriented, creating a ceiling on what kind of questions can propagate through the pipeline.

---

### Kill Point TC-3: What the TC Agent CANNOT See

**File:** `skills/research-compose/prompts/tc-derivation.md`
**Lines 18-23:**
```
## What You Do NOT Receive (and must not seek)

- Case studies, prior explorations, mechanism files (library prohibition until TC Phase 4)
- Gate results, PA scores, or any pipeline vocabulary
- Components.css or components.md
- Research packages or specialist outputs
```

**What it kills:** The TC agent is explicitly isolated from all spatial precedent. The corridor was invented by a builder who had deep craft knowledge (design system files, tokens, components) alongside uncompressed content. The TC agent operates in the opposite condition: it has the content but no craft vocabulary. It cannot think "the content's philosophical arc could be enacted through container width variation" because it has no vocabulary for container width variation.

This isolation is intentional (preventing library bias). But it means the TC agent generates the metaphor and emotional arc WITHOUT spatial vocabulary, then hands off to specialists who have spatial vocabulary but process it through the archetype gate. The gap between "having the content insight" (TC) and "having the spatial vocabulary" (specialists/builder) is never bridged because no single agent has both.

**Master Doc coverage:** CAPTURED (partially). Lines 186-191 describe the multi-lens approach that replaces the TC's single reading. But the Master Doc doesn't name the specific isolation mechanism (lines 18-23) that prevents the TC agent from bridging content insight with spatial vocabulary. The fix is named (4 agents reading the same content through 4 lenses), but the specific pipeline mechanism being fixed is not quoted.

---

## Phase: SPECIALISTS

### Kill Point S1-1: Spatial Implication Field Is Constrained to Pre-Catalogued Forms

**File:** `skills/research-compose/prompts/specialist-1-prompt.md`
**Lines 90-91 (HIGH finding format):**
```
**Spatial Implication:** [If this finding suggests a non-standard layout (grid, split,
hub-spoke, nested), state it with reasoning. Otherwise write "Standard vertical — finding
enriches texture within existing zones."]
```

**What it kills:** The Spatial Implication field asks the specialist to categorize findings into a fixed set of known spatial forms: grid, split, hub-spoke, nested. If a finding suggests something OUTSIDE this set — say, "progressive container width change" — the specialist has no vocabulary for it. The field's default is "Standard vertical — finding enriches texture within existing zones," which is where any non-classifiable spatial insight goes.

**Lines 115-123 (Spatial Convergence section):**
```
If 3+ HIGH findings point toward the SAME non-standard spatial form (e.g., multiple
findings suggest grid layout for parallel items), note this convergence explicitly:

### Spatial Convergence: [Pattern Name]
**Converging findings:** [Finding IDs]
**Suggested spatial form:** [Grid / Hub-spoke / Split / Nested / etc.]
```

The Spatial Convergence mechanism thinks in pre-defined forms: "Grid / Hub-spoke / Split / Nested / etc." If 3+ findings converge on "the content's philosophical arc has an inherent width progression," there is no category for this. The specialist would have to improvise outside the template.

**Master Doc coverage:** NOT CAPTURED. The Master Doc does not identify the specialist's Spatial Implication field as a kill point. It discusses the pipeline's texture-only orientation broadly (lines 14-21) but does not trace how the specialist prompt's template structure constrains spatial thinking to pre-catalogued forms.

---

### Kill Point S3-1: Case Study Structural Logic Extraction — Known Forms Only

**File:** `skills/research-compose/prompts/specialist-3-prompt.md`
**Lines 112-118 (Structural Logic Extraction):**
```
2. **What SPATIAL FORM was chosen?**
   - Grid (named areas, auto-fit, fractional units)
   - Hub-spoke (central hub with radial spokes)
   - Split/facing (side-by-side panels)
   - Nested (layout within layout)
   - Fractal (self-similar structure at multiple scales)
   - Standard vertical (single column — this is a VALID answer)
```

**What it kills:** The spatial form vocabulary is a CLOSED list: grid, hub-spoke, split/facing, nested, fractal, standard vertical. "Progressive container width variation" is not in this list. "Page dimensions as philosophical enactment" is not in this list. "Self-aware spatial form that responds to content meaning" is not in this list. The case study analyst can only extract structural logic that fits into these 6 categories.

**Lines 124-128 (Trigger signals for other builds):**
```
4. **What CONTENT SIGNAL would trigger the same spatial logic in a DIFFERENT build?**
   - "Any content with 4+ parallel items at the same hierarchy level → consider grid"
   - "Any content with explicit comparison/contrast → consider side-by-side"
   - "Any content with nested categories → consider nested/accordion layout"
```

This is the "if/then" structure that maps content features to known layouts. 4+ parallel items → grid. Comparison → side-by-side. Nested categories → accordion. The mapping is deterministic. There is no entry point for "philosophical arc with inherent spatial trajectory → progressive width change." The content feature that produces the corridor (a philosophical argument moving from confinement to liberation) cannot be detected by signal word matching.

**Master Doc coverage:** NOT CAPTURED. The Master Doc says nothing about Specialist 3's structural form vocabulary being a closed list. This is a significant gap — the specialist closest to spatial precedent (case studies that actually built HTML) is constrained to extract only known forms.

---

### Kill Point S4-1: Anti-Patterns for Structural Invention

**File:** `skills/research-compose/prompts/specialist-4-prompt.md`
**Lines 222-238:**
```
### Anti-Pattern: Structural Overload

**Risk trigger:** Builder applies more than 2 non-standard spatial sections per page.

**Why it fails:** Each non-standard section demands reader orientation effort.
1 non-standard section is a highlight. 2 is variety. 3+ is chaos — the reader
can't build a mental model of the page's spatial logic because it keeps changing.

**Maximum:** 2 non-standard spatial sections per page. All other sections use
standard vertical layout. The non-standard sections should be the page's
STRUCTURAL HIGHLIGHTS, not the default.
```

**What it kills:** The Molly build has 18 distinct DOM skeletons and 14 non-vertical reading paths. Under the "Structural Overload" anti-pattern, 16 of these 18 skeletons would be flagged as overload. The pipeline caps non-standard spatial sections at 2 per page. The corridor, which transforms the ENTIRE page's spatial form section by section (520px -> 680px -> 960px -> 680px -> dissolved), would require every section to be "non-standard." This is the opposite of "2 structural highlights in a vertical page."

The Molly build proves that the anti-pattern's premise is wrong: when structural variation is CONTENT-DRIVEN (the width encodes the argument), it does not create "chaos." The reader doesn't need to re-orient because the spatial form IS the content. But the anti-pattern is compiled into the package and the builder is instructed to avoid it.

**Master Doc coverage:** NOT CAPTURED. The Master Doc does not identify the "Structural Overload" anti-pattern as a kill point. It should — this anti-pattern would flag the Molly build's defining quality (18 distinct skeletons) as a defect.

---

### Kill Point S4-2: Container Width as Soul Constraint vs. Default

**File:** `skills/research-compose/prompts/specialist-4-prompt.md`
**Lines 71:**
```
- Container max-width (940-960px for general builds, 860-1100px documented range)
```

This line in Specialist 4's convention list says the container width range is 860-1100px. But the builder prompt (builder-pass-1-prompt.md, lines 110-114) presents it as a hard constraint:

```css
.page-container {
  max-width: 940px; /* 940-960px range */
  margin: 0 auto;
  padding: 0 var(--space-6); /* 24px side padding */
}
```

And the builder's validation checklist (line 334): `Container max-width is 940-960px`.

The corridor starts at 520px — outside even the 860-1100px range. The Master Doc explicitly addresses this (line 272): "940-960px max-width (but this is a DEFAULT, not a mandate — corridor-style width progression is permitted)." But the pipeline prompt contains no such exception. The soul checklist and validation checklist treat 940-960px as a hard gate.

**Master Doc coverage:** CAPTURED (but insufficiently propagated). Line 272 names the fix ("DEFAULT, not a mandate — corridor-style width progression is permitted") but the Master Doc does not identify the specific pipeline lines that treat container width as a soul constraint. The gap is not in the Master Doc's principle but in its specificity about where the pipeline enforces the wrong thing.

---

## Phase: SYNTHESIZER

### Kill Point SYN-1: Structural Question Throttle for Linear Content

**File:** `skills/research-compose/prompts/synthesizer-prompt.md`
**Lines 270-271:**
```
Structural question adaptation: Structural questions are OPTIONAL. Select 0-1 structural
question ONLY when TC Section 7 identifies a non-linear archetype (Parallel Items,
Hierarchical Taxonomy, Branching Paths). For Linear Narrative content, select 0 structural
questions.
```

**What it kills:** For the Molly content (linear narrative), the synthesizer selects 0 structural questions. The question budget (line 243) becomes "6-7 texture + 0 structural + 1 cross-specialist." The builder receives 7 questions about visual channel variation and zero invitations to rethink spatial form.

**Master Doc coverage:** NOT EXPLICITLY CAPTURED. The Master Doc discusses the pipeline's compression chain (lines 21-22) and mentions that the synthesizer "packages it" but does not quote the specific throttle instruction at lines 270-271 that zeroes out structural questions for linear content.

---

### Kill Point SYN-2: Section 11 Archetype Gate

**File:** `skills/research-compose/prompts/synthesizer-prompt.md`
**Lines 376-377:**
```
1. Read TC Section 7 archetype identification
2. If archetype is purely Linear Narrative (no secondary signals) → write "No structural
   propositions" → done
```

**And line 386:**
```
Every proposition must trace to TC Section 7 content archetype (no invented structure)
```

**What it kills:** Section 11 is the pipeline's formal mechanism for non-standard layouts. For linear narratives, Section 11 is empty (a single line: "No structural propositions"). Even when Section 11 IS populated, every proposition must trace to the archetype table — "no invented structure." The corridor is, by definition, invented structure that traces to the content's philosophical meaning, not to an archetype classification. This line explicitly prohibits it.

**Master Doc coverage:** CAPTURED (line 179). "No TC brief captures it because the TC agent isn't looking for spatial forms, it's looking for themes and tensions and creative conditions." But the Master Doc does not quote line 386's prohibition on invented structure. That exact prohibition is the sharpest kill point in the entire pipeline and should be quoted verbatim.

---

### Kill Point SYN-3: Texture Question Families Have No Spatial Dimension

**File:** `skills/research-compose/prompts/synthesizer-prompt.md`
**Lines 253-259 (Texture Question Families table):**
```
| Certainty Encoding | "What if visual weight mapped to [gradient]?" | border-weight,
  padding, bg-color, font-size, line-height |
| Fractal Self-Similarity | "What if the same structural rhythm repeated at [N] scales?"
  | padding ratios, font-size ratios, spacing ratios, border-weight ratios |
| Velocity Interleaving | "What if every [heavy] element had a [light] breathing partner?"
  | component selection, spacing between pairs, background alternation |
| Atmospheric Signature | "What if each [zone] had a unique atmospheric signature?"
  | bg-color, line-height, letter-spacing, padding, border-color |
| Temporal Compression | "What if density compressed over time?"
  | progressive padding reduction, typography tightening, bg-color intensification |
```

**What it kills:** All 5 texture question families operate on CSS properties WITHIN a fixed spatial form: border-weight, padding, bg-color, font-size, line-height, letter-spacing, spacing ratios. None of them include width, max-width, grid-template-columns, display, flex-direction, or any property that affects the page's spatial organization. The "Implied Channels" column is exclusively texture channels. A question like "What if the page's width enacted the philosophical argument?" implies max-width, padding, margin — spatial channels that do not appear in any question family.

**Master Doc coverage:** NOT CAPTURED. The Master Doc does not analyze the texture question families at the channel level. It should name that the "Implied Channels" column in the question families contains exclusively texture channels and zero spatial channels.

---

### Kill Point SYN-4: Content-Form Mirroring — Closest But Not Close Enough

**File:** `skills/research-compose/prompts/synthesizer-prompt.md`
**Line 268 (Structural Question Family):**
```
| Content-Form Mirroring | "What if each section's layout EMBODIED its content type —
  [taxonomy as grid, tutorial as islands, comparison as side-by-side]?" | Per-section
  variation |
```

**What it kills:** "Content-Form Mirroring" is the closest question family to what the corridor achieves. But it frames content-form coupling as matching CONTENT TYPES to KNOWN LAYOUT TYPES: taxonomy → grid, tutorial → islands, comparison → side-by-side. The corridor is not a content-type-to-layout mapping. It is the page's physical width varying to enact a philosophical arc. The implied structure ("Per-section variation") suggests varying layout PER SECTION — not varying the page's fundamental spatial form progressively through the entire build.

The difference: Content-Form Mirroring says "match this section to an appropriate layout." The corridor says "the page itself becomes the argument." One is a local optimization. The other is a global spatial invention.

**Master Doc coverage:** NOT CAPTURED as a specific pipeline deficiency. The Master Doc names content-form coupling as a principle (lines 37-38: "content enacted through container dimensions") but does not analyze how the pipeline's Content-Form Mirroring question family reduces this principle to content-type-to-layout matching.

---

## Phase: BUILDER

### Kill Point B1-1: Reading Order Kills Spatial Impression

**File:** `skills/research-compose/prompts/builder-pass-1-prompt.md`
**Lines 11-21:**
```
1. **Research Package (_package-pass-1.md)** — READ FIRST. Contains:
   - Section 0: Soul Checklist (non-negotiable constraints)
   - Section 1: Build Context (metaphor + content map)
   - Section 2: Mechanism Selections (what to deploy, with CSS examples)
   - Section 9: Consumption Protocol (how to sequence your work)
   - Section 10: Compositional Questions
   - Section 11: Structural Propositions (OPTIONAL)

2. **Conviction Brief (_tc-brief.md)** — READ SECOND.

3. **Content Markdown (content.md)** — READ THIRD.
```

**And line 27:**
```
WHY THIS ORDER: The research package tells you WHAT mechanisms to deploy and HOW to
sequence your work. The brief tells you WHY — the metaphor, the arc, the conviction.
The content tells you WHAT you're designing.
```

**What it kills:** The builder reads mechanisms first, metaphor second, content third. By the time the builder reaches the content, its cognitive frame is already established: "deploy these mechanisms in these zones." The content is read to "Map its sections to zones based on the brief's compositional arc" (line 21) — filling pre-established zones, not discovering spatial form.

The Master Build Philosophy says the exact opposite (lines 300-301): "Read the content. All of it. Before anything else. As you read, notice: what spatial form does this content suggest?"

**Master Doc coverage:** CAPTURED (lines 175-179, 300-301). The Master Doc explicitly identifies this reading order inversion. This is one of the most precisely captured kill points.

---

### Kill Point B1-2: Texture Invention Prohibited

**File:** `skills/research-compose/prompts/builder-pass-1-prompt.md`
**Lines 400-401:**
```
Do NOT invent TEXTURE mechanisms that aren't in the package — the package was curated by
specialists who read the full knowledge base. Trust its selections.
```

**What it kills:** The builder is prohibited from inventing mechanisms not in the package. The corridor is not a pre-catalogued mechanism. It would be classified as either a texture mechanism (varying width) or a structural invention (varying spatial form). As a texture mechanism, it is prohibited by this line. As a structural invention, it must be proposed in Section 11 (which is empty for linear content).

**Master Doc coverage:** CAPTURED. Lines 229-233 explicitly reframe components and mechanisms as "available if the content calls for them" rather than prescriptive. But the Master Doc does not quote line 401 specifically. It should — this is the exact instruction that prevents the builder from following content-derived creative impulses.

---

### Kill Point B1-3: Structural Invention Requires Section 11 Proposal

**File:** `skills/research-compose/prompts/builder-pass-1-prompt.md`
**Lines 403-408:**
```
STRUCTURAL INVENTION is PERMITTED when ALL four conditions are met:
1. The structural form is derived from the content's organizational logic (not decorative)
2. The structural form is proposed in Section 11 (Structural Propositions)
3. The decision (ADOPTED / MODIFIED / REJECTED) is documented in _pass-1-decisions.md
4. The structural section works at all 3 breakpoints (1440px, 1024px, 768px)
```

**What it kills:** Condition 2 is the kill shot. The corridor cannot be invented because it is not proposed in Section 11. Section 11 is empty because the content is classified as Linear Narrative. The content is classified as Linear Narrative because the TC archetype table has no category for "philosophical argument with inherent spatial trajectory."

The kill chain is closed: TC classifies → Synthesizer gates → Section 11 empty → Builder condition 2 fails → Structural invention prohibited.

**Master Doc coverage:** NOT EXPLICITLY CAPTURED as the four-condition gate. The Master Doc describes the pipeline's structural prevention in general terms (lines 14-21, 53-56) but does not quote this specific four-condition gate or trace the causal chain from TC classification through Section 11 emptiness to builder prohibition. This is arguably the single most important kill mechanism in the entire pipeline and should be quoted verbatim in the Master Doc.

---

### Kill Point B1-4: Container Width Locked

**File:** `skills/research-compose/prompts/builder-pass-1-prompt.md`
**Lines 110-114:**
```css
.page-container {
  max-width: 940px; /* 940-960px range */
  margin: 0 auto;
  padding: 0 var(--space-6); /* 24px side padding */
}
```

**And line 334:**
```
- [ ] Container max-width is 940-960px
```

**What it kills:** The corridor starts at 520px and widens to 960px. At 520px it violates the container width constraint. The validation checklist at line 334 would flag it. The soul constraints section presents this as non-negotiable, grouped alongside `border-radius: 0` and `box-shadow: none`.

The Master Doc explicitly addresses this (line 272): "940-960px max-width (but this is a DEFAULT, not a mandate — corridor-style width progression is permitted)." The pipeline contains no such exception.

**Master Doc coverage:** CAPTURED (line 272). The Master Doc names the fix. But it does not quote the pipeline lines that treat container width as a soul constraint rather than a default. The gap is in specificity, not in principle.

---

### Kill Point B1-5: "Maximum 2 Structural Sections Per Build"

**File:** `skills/research-compose/prompts/builder-pass-1-prompt.md`
**Lines 207-208:**
```
Standard Path (DEFAULT — use for all zones without Section 11 propositions):
Build zone-by-zone as described above — vertical stacking with density variation.

Structural Path (for ADOPTED Section 11 propositions — maximum 2 per build):
```

**And builder-pass-3-prompt.md, lines 273:**
```
Maximum 2 structural sections total across Pass 1 + Pass 2
```

**What it kills:** The Molly build has 18 distinct DOM skeletons. Under the pipeline's "maximum 2 structural sections" cap, 16 of these would be prohibited. The pipeline treats non-standard spatial layouts as exceptions to a vertical default, capped at 2 per page. The corridor transforms the ENTIRE page's spatial form, requiring every section to depart from standard vertical.

**Master Doc coverage:** NOT CAPTURED. The Master Doc does not identify the "maximum 2 structural sections" cap as a kill point. This is a significant gap. The cap directly contradicts the Molly build's defining characteristic (18 distinct skeletons).

---

### Kill Point B1-6: "Build Zone-by-Zone" Assumes Vertical Stack

**File:** `skills/research-compose/prompts/builder-pass-1-prompt.md`
**Lines 166-177:**
```
## Build Process: Boundary-by-Boundary

Build zone-by-zone, NOT channel-by-channel.

CORRECT (boundary-by-boundary):
At each zone boundary, set ALL channels simultaneously:
1. Background color for this zone
2. Typography (font family, size, weight, line-height)
3. Spacing (padding, margins)
4. Border treatment (if any)
5. Content placement

Then move to the next zone boundary and repeat.
```

**What it kills:** The build process instruction says "at each zone boundary, set ALL channels simultaneously." The 5 channels listed are all texture channels: background color, typography, spacing, border, content placement. Container width is not a channel. Grid topology is not a channel. Reading path direction is not a channel. The process treats the page as a sequence of horizontal bands (zones) with varying texture, not as a spatial form with varying geometry.

The transition table template (lines 186-197) reinforces this:
```
TRANSITION TABLE:
Zone 1 (opening) → Zone 2 (rising):
  bg: var(--color-background) → var(--color-zone-dense)
  type: var(--font-display) h1 → var(--font-body) body
  space: var(--space-16) top → var(--space-12) between
  border: none → border-bottom: var(--border-structural) solid var(--color-border)
```

The transition table tracks bg, type, space, border across zone boundaries. It does not track width, layout, reading path, or spatial organization. A transition like "Zone 1 (confinement, 520px) → Zone 2 (threshold, 680px): width 520px → 680px" has no place in this template.

**Master Doc coverage:** PARTIALLY CAPTURED. Line 348 says "This question replaces the pipeline's question ('what mechanisms should be deployed?'). Mechanisms are vocabulary. Spatial form is architecture. Architecture comes first." But the Master Doc does not quote the specific transition table template or the 5-channel boundary-by-boundary process that bakes vertical-stack assumptions into the builder's workflow.

---

## Phase: BUILDER PASS 2 (ENRICHMENT)

### Kill Point B2-1: "Do NOT Create New Zones"

**File:** `skills/research-compose/prompts/builder-pass-2-prompt.md`
**Lines 50:**
```
Map findings from Section 3 to EXISTING zones. Do not create new zones unless Section 4
specifically calls for it.
```

**What it kills:** The Pass 2 builder is told to enrich WITHIN existing zones, not to restructure the spatial form. The corridor's key invention — sections that widen progressively — would require creating new spatial organizations that don't exist in the Pass 1 skeleton. Pass 2 enrichment adds density within zones (more CSS rules, more visual differentiation) but cannot change the zones' spatial geometry.

**Lines 73-79 (DO NOT list):**
```
DO NOT:
- Delete zones that Pass 1 created
- Rename custom properties (this breaks the metaphor vocabulary)
- Replace the HTML document structure
- Remove content that was already placed
- Start with an empty file and rebuild
```

**Master Doc coverage:** NOT CAPTURED. The Master Doc discusses enrichment in terms of "deepening a page that's already working" (line 326) but does not identify the specific prohibition against creating new zones or restructuring the spatial form during enrichment. The Molly build's enrichment was ALSO spatially constrained (it deepened the corridor but didn't reinvent it), but it started from a corridor — the pipeline's enrichment starts from a vertical stack and cannot escape it.

---

### Kill Point B2-2: "Maximum 1 Structural Evolution Per Pass"

**File:** `skills/research-compose/prompts/builder-pass-2-prompt.md`
**Lines 129-130:**
```
STRUCTURAL EVOLUTION (DOCUMENTED — maximum 1 per pass): A spatial change to an existing
zone's layout. This is NOT adding a new structural section from scratch (that was Pass 1's
job).
```

**And lines 232-233:**
```
If no structural opportunity exists: This is the EXPECTED outcome for most builds. Note
"No structural evolution needed — vertical layout serves the content" in decisions.
```

**What it kills:** Pass 2 allows maximum 1 structural evolution, and frames "no structural evolution needed" as the EXPECTED outcome. Combined with Pass 1's maximum of 2 structural sections, the entire 3-pass build produces maximum 3 structural sections — and the prompt tells the builder that 0 is expected for most builds. The Molly build's 18 distinct DOM skeletons are 6x the pipeline's maximum and 18x the expected value.

**Master Doc coverage:** NOT CAPTURED. The Master Doc does not identify the cumulative structural section cap across passes.

---

## Phase: BUILDER PASS 3 (HARDENING)

### Kill Point B3-1: "Do NOT Add New Structural Inventions"

**File:** `skills/research-compose/prompts/builder-pass-3-prompt.md`
**Lines 71:**
```
Do NOT add new structural inventions in Pass 3. If you see a structural opportunity,
document it in the reflection as "Would benefit from structural layout" — but do NOT
implement it. Pass 3 is DEFENSIVE, not creative.
```

**What it kills:** Even if a Pass 3 builder suddenly realizes that the content demands a spatial form change, they are prohibited from implementing it. They can only document it as an unrealized opportunity. This means any spatial insight that emerges during the HARDENING phase is permanently lost — the pipeline has no mechanism to return to creative structural work after Pass 2.

**Lines 379-380:**
```
Pass 3 is NOT about making the page "more creative." It is about making it BULLETPROOF.
```

**Lines 389-390:**
```
The best Pass 3 outcome is a page that looks identical to Pass 2 but has zero audit-
catchable issues. The worst Pass 3 outcome is a page that looks different from Pass 2
because you got creative instead of defensive.
```

The pipeline explicitly values a page that "looks identical to Pass 2" as the BEST Pass 3 outcome. Getting "creative" in Pass 3 is framed as the WORST outcome. This hardcodes the assumption that all creative work is complete by Pass 2 — and that the appropriate response to any late-discovered insight is to document it as an unrealized opportunity, not to act on it.

**Master Doc coverage:** NOT CAPTURED. The Master Doc's principle 6 (lines 216-223) says "Enrichment Has No Fixed Endpoint" and "keep going until the page genuinely produces the stop-and-look response." But it does not identify that Pass 3's explicit prohibition on creative work means the pipeline HAS a fixed endpoint for structural invention (end of Pass 2), even though the enrichment loop could theoretically continue.

---

## Phase: EVALUATION

### Kill Point PA-1: Structural Perception Questions Are Late Additions

**File:** `skills/research-compose/prompts/pa-auditor-prompt.md`
**Lines 52-61:**
```
### Structural Perception Questions (E-21, E-22, E-23)

If you are assigned any of these questions, they ask about spatial VARIETY...

- E-21 (Layout Variety): "Does every section have the same layout, or do some sections
  have a different geometry — wider, split into columns, arranged as a grid?"
- E-22 (Content-Form Coupling): "Is there a section that SHOWS what it's about, not just
  tells?"
- E-23 (Reading Path): "If this page were a map, would it be a single road from top to
  bottom, or would it have intersections, plazas, or side streets?"
```

**What it kills:** The structural perception questions (E-21, E-22, E-23) exist but are distributed across 5 auditors along with 17 other questions. Only 3 out of 20 questions address spatial variety. An auditor might receive 1 structural question among 4 assignments. The pipeline can DETECT structural flatness through these questions, but the detection comes AFTER the build is complete. The pipeline has no mechanism to feed structural flatness detection back into structural invention — the REFINE phase only performs targeted CSS fixes (TYPE A: mechanical, TYPE B: zone restructuring within the existing form), not spatial reinvention.

**File:** `skills/research-compose/prompts/weaver-prompt.md`
**Lines 129-138:**
```
### Structural Variety Metrics

- **Distinct layout types used:** [count]
- **Sections with non-standard layout:** [count] / [total sections]
- **Content-form coupling instances:** [count]
- **Self-aware components:** [count]
- **Assessment:** STRUCTURALLY DIVERSE / STRUCTURALLY UNIFORM
```

The weaver CAN diagnose structural uniformity. But the diagnosis arrives after the build is complete, and the refine phase cannot perform spatial reinvention. The weaver's TYPE C classification ("Metaphor doesn't manifest. Would need TC re-invocation.") is the closest to a spatial reinvention recommendation, but the pipeline treats TYPE C as a near-terminal condition — "recommend REBUILD to user instead" (SKILL.md refine section). Structural reinvention is not a fix; it is a rebuild.

**Master Doc coverage:** CAPTURED (lines 199-205). The Master Doc names taste-based evaluation as what the pipeline lacks. But it does not identify the specific structural perception questions (E-21/22/23) or how their late arrival in the evaluation phase means they can diagnose but not fix structural flatness.

---

### Kill Point PA-2: Refine Phase Cannot Perform Spatial Reinvention

**File:** `skills/research-compose/prompts/refine-builder-prompt.md`
**Lines 4-5:**
```
CRITICAL RULE: This is a TARGETED FIX, not a redesign. Change only what the creative
direction specifies.
```

**And lines 36-38:**
```
- TYPE A (Mechanical): CSS values are wrong. Fix directly.
- TYPE B (Structural): Layout doesn't match the intended zone architecture. Needs CSS
  restructuring within zones.
- TYPE C (Compositional): The metaphor doesn't manifest. This usually means the fix cycle
  can't solve it.
```

**What it kills:** Even when the weaver diagnoses structural uniformity, the refine builder can only perform targeted CSS fixes (TYPE A) or zone restructuring within the existing form (TYPE B). TYPE C (compositional issues where the metaphor doesn't manifest) is explicitly noted as something the fix cycle "usually can't solve." The pipeline has no mechanism for spatial reinvention after the initial build.

**Master Doc coverage:** PARTIALLY CAPTURED. The continuous enrichment loop (Part IV, lines 239-260) replaces the pipeline's 3-pass-and-stop model. But the Master Doc does not identify the refine builder's TYPE A/B/C classification as a kill point, specifically that TYPE C (the closest to spatial reinvention) is effectively terminal.

---

## COMPRESSION FORENSICS: The "8 Parallel Domains" Trace

The Molly Panopticon content contains 8 parallel domains of life that the subject monitors simultaneously: work, finance, health, relationships, productivity, diet, exercise, and sleep. In the Molly build, these became a 4x2 "door" grid with domain-specific color coding (work=blue, life=green). This is a content-derived spatial invention: 8 parallel items presented as a grid because the content describes SIMULTANEOUS monitoring across all 8.

### What happens to "8 parallel domains" in the pipeline?

**Step 1: TC Derivation**
The TC agent reads the content and sees the 8 domains. It identifies the content archetype. The Molly article is primarily a linear narrative (philosophical argument from diagnosis to warning). The 8 domains appear in one section. The TC agent classifies the content as "Linear Narrative" (primary) with possible "Parallel Items" (secondary) for the domain list.

If the TC agent notes the secondary archetype, Section 7 might include: "Structural Observation: Primary archetype Linear Narrative with secondary Parallel Items (8 monitoring domains). Spatial proposition: Standard vertical with possible grid for the 8-domain section."

If the TC agent follows the line-107 instruction ("If content is Linear Narrative, 'Standard vertical' is the correct answer"), the 8 domains' spatial potential is lost entirely.

**Step 2: Specialists**
Specialist 1 might rate findings related to parallel items as HIGH and note a "Spatial Convergence" toward grid layout. But the convergence note is framed as "grid layout for parallel items" — a standard grid, not the Molly build's specifically designed 4x2 grid with work=blue/life=green color coding, hierarchical sizing, and door metaphor. The specialist cannot propose the door grid because the door grid is a SPATIAL INVENTION tied to the specific content meaning, not a generic grid applied to parallel items.

**Step 3: Synthesizer**
The synthesizer reads TC Section 7. If the TC agent noted the secondary archetype:
- Section 11 might contain a proposition: "The 8 monitoring domains could be presented as a grid."
- The blueprint CSS would be generic: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`

This is a GENERIC grid layout for parallel items. It does not encode:
- The 4x2 arrangement (work domains across, life domains across)
- Domain-specific color coding (work=blue, life=green)
- The "door" metaphor (each domain as a door the subject opens)
- Hierarchical sizing (some domains wider than others based on content weight)
- The specific naming vocabulary (`.door-pair`, `.door-grid`, `.domain-constellation`)

If the TC agent did NOT note the secondary archetype:
- Section 11 is empty: "No structural propositions."
- The 8 domains are presented as a vertical list in the final page.

**Step 4: Builder**
If Section 11 proposes a grid:
- The builder can ADOPT the generic grid proposition
- The builder applies `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` as structural plumbing
- The result: 8 items in a responsive grid, all equally sized, no color coding, no hierarchical arrangement, no door metaphor
- This is a GENERIC grid that could hold any 8 items — not a CONTENT-DERIVED spatial form

If Section 11 is empty:
- The builder presents the 8 domains as a vertical list
- Each domain is a `<h3>` followed by `<p>` in a 960px column
- The spatial logic of "8 simultaneous domains" is completely lost

**What the Molly builder produced:**
- A 4x2 grid where row 1 = work domains (blue), row 2 = life domains (green)
- Each domain as a "door" with distinct color, sizing, and hover state
- The grid sits within the widening corridor, so its width changes as the page's width changes
- The grid is responsive: 4x2 at desktop, 2x4 at tablet, 1x8 at mobile
- The door metaphor connects to the article's broader surveillance theme

The gap between "generic grid for 8 items" and "content-derived door grid with semantic color coding within a widening corridor" is the STRUCTURAL INVENTION GAP. The pipeline can produce the generic grid (through Section 11 → builder adoption). It cannot produce the door grid because the door grid requires:
1. Reading the content deeply enough to see that work and life domains are categorically different
2. Choosing to encode that difference through color (work=blue, life=green)
3. Choosing the "door" metaphor that connects domains to the article's surveillance theme
4. Integrating the grid into the corridor's width progression
5. Designing hierarchical sizing based on content weight

None of these decisions survive the pipeline's compression chain. The content's inherent spatial logic ("8 simultaneous domains, categorized as work/life") becomes at best "8 parallel items → grid" and at worst "linear narrative content → vertical list."

**Master Doc coverage:** CAPTURED (lines 21, 179). The Master Doc names the compression of "8 parallel domains" as a key example (line 21): "the 8 parallel domains that beg to be a 4x2 grid are a text description." But it does not trace the full compression chain through each pipeline phase. The trace above shows that even the BEST-CASE pipeline outcome (generic grid from Section 11) falls far short of the Molly build's door grid.

---

## MASTER DOC GAP ANALYSIS: Summary

### Kill Points CAPTURED in the Master Doc (with assessment):

| Kill Point | Master Doc Location | Assessment |
|-----------|---------------------|------------|
| TC-1: Archetype classification | Line 179 | PARTIAL — names the problem but doesn't quote the archetype table or line-107 escape hatch |
| TC-3: TC agent isolation | Lines 186-191 | PARTIAL — names the fix (4-lens approach) but doesn't quote the isolation mechanism |
| B1-1: Reading order inversion | Lines 175-179, 300-301 | WELL CAPTURED — explicitly identifies the inversion and the correct order |
| B1-2: Texture invention prohibition | Lines 229-233 | PARTIAL — names the fix but doesn't quote line 401 |
| B1-4: Container width locked | Line 272 | CAPTURED — names it as "DEFAULT, not a mandate" |
| PA-1: Taste evaluation absent | Lines 199-205 | CAPTURED — names taste-based evaluation as the missing dimension |
| Compression trace ("8 domains") | Lines 21, 179 | PARTIAL — names the example but doesn't trace the full compression chain |

### Kill Points NOT CAPTURED in the Master Doc:

| Kill Point | What Should Be Added |
|-----------|---------------------|
| TC-2: Question examples are texture-only | The TC prompt's "GOOD question examples" are all texture-oriented. The Master Doc should name this template bias. |
| S1-1: Specialist spatial form is a closed list | The Spatial Implication field constrains spatial thinking to grid/hub-spoke/split/nested/fractal. No category for progressive width variation. |
| S3-1: Case study structural logic extraction — closed list | Same closed list in Specialist 3. The specialist closest to spatial precedent cannot extract novel spatial forms. |
| S4-1: "Structural Overload" anti-pattern | The anti-pattern caps structural sections at 2 per page. The Molly build has 18. This anti-pattern would flag the build's defining quality as a defect. |
| SYN-1: Structural question throttle | The synthesizer zeroes out structural questions for linear content. The Master Doc should quote lines 270-271. |
| SYN-3: Question families have no spatial channels | The "Implied Channels" column contains only texture channels. No width, grid, display, or flex channels. |
| SYN-4: Content-Form Mirroring reduces to type matching | The closest question family reduces content-form coupling to content-type → layout-type matching, not page-as-argument. |
| B1-3: Four-condition structural invention gate | Condition 2 (Section 11 proposal required) closes the loop. This is the single sharpest kill mechanism and should be quoted verbatim. |
| B1-5: "Maximum 2 structural sections" cap | The pipeline caps non-standard sections at 2. The Molly build has 18. |
| B1-6: Transition table has no spatial channels | The transition table tracks bg, type, space, border — not width, layout, reading path. |
| B2-1: "Do not create new zones" in enrichment | Pass 2 enriches within existing zones but cannot restructure spatial form. |
| B2-2: "Maximum 1 structural evolution per pass" | Cumulative cap across passes: 3 structural sections maximum, 0 expected. |
| B3-1: Pass 3 prohibits all structural invention | "Do NOT add new structural inventions in Pass 3." Late-discovered spatial insights die. |
| PA-2: Refine cannot perform spatial reinvention | TYPE C (compositional) is effectively terminal. No re-entry to structural work after build. |

### The Deepest Gap: The Master Doc names WHAT the pipeline fails to do but not HOW it fails

The Master Doc is excellent at naming the principles: builders must read content first, spatial form comes from content engagement, competition produces diversity, taste evaluation is essential, enrichment has no fixed endpoint.

But it does not trace the causal chains within the pipeline that produce the failure. The kill chain — TC classifies → archetype gates Section 11 → empty Section 11 fails builder condition 2 → builder cannot invent structure — is the most important finding of this forensic and it is not in the Master Doc.

Without this causal chain, a future implementer might try to fix the pipeline by, say, adding better structural question families to the synthesizer (addressing SYN-3). But SYN-3 is downstream of TC-1 (the archetype gate). Even with perfect structural question families, the synthesizer zeroes them out for linear narratives (SYN-1) because the TC classified the content as linear (TC-1). The kill points are not independent — they form a chain. Fixing one without fixing the chain is futile.

The Master Doc should contain a section titled "The Kill Chain" that traces the exact causal sequence from content classification through structural prohibition, quoting the specific lines from each pipeline file. This is the section that would prevent someone from attempting a patch (fixing one kill point) when the problem is architectural (the chain itself).

---

## THE INFRASTRUCTURE PARADOX (expanded)

### Stated Precisely

The pipeline invests 16-17 agents and 26,528 lines of accumulated knowledge to systematize TEXTURE quality while its architecture actively prevents STRUCTURAL quality. Every agent, every specialist, every section, every question family, every validation gate operates on the assumption that the page's spatial form is a fixed vertical column and the only variable is surface treatment.

The paradox: **the more infrastructure you build to systematize quality, the more you crowd out the unstructured engagement where structural invention occurs.** 16-17 agents producing 600-740 lines of packages leave the builder with a cognitive frame: "deploy these mechanisms in these zones." That frame is so detailed and so authoritative ("curated intelligence from 26,528 lines of accumulated knowledge" — builder-pass-1-prompt.md, line 431) that the builder has neither the mandate nor the cognitive space to form their own spatial impressions.

The Molly builder received 4 content readings, the original content, and a single mandate: build a page that deserves the spatial form its content demands. No mechanisms to deploy. No zones to fill. No package to cite. The absence of systematized texture intelligence created the space for structural invention.

### What Cannot Be Systematized

You can systematize texture because texture has a finite vocabulary: border-weights, spacing values, typography rules, color palettes, zone backgrounds. You can catalog this vocabulary, rate its relevance to specific content, and provide it in a package with deployment instructions.

You CANNOT systematize spatial invention because spatial invention is, by definition, the discovery of forms not in the existing vocabulary. The corridor did not exist in any catalog, any case study, any exploration, any research file. It was invented by a builder who read 950 lines of content, noticed the philosophical arc from confinement to liberation, and realized the page's physical width could enact that arc. This is a creative act that emerges from deep, unstructured engagement with content — exactly the thing the pipeline replaces with structured, compressed, routed information.

### The Master Doc's Crucial Contribution

The Master Doc identifies this paradox implicitly through its principles: direct content access, multiple lenses, competition, taste evaluation, no fixed endpoint. But it does not state the paradox explicitly. It should. The paradox is the answer to the user's question: "how we are fundamentally thinking wrong in our pipeline and how it's contributed to all this useless infrastructure."

The pipeline's infrastructure is not useless for texture quality. It genuinely improves texture: research-backed mechanism selection, anti-pattern detection, proven CSS examples, compositional questions, multi-agent evaluation. The issue is that the pipeline was built to solve the wrong problem. The problem was never texture flatness. The problem was always structural flatness. And the infrastructure built to solve texture flatness actively prevents structural quality by replacing unstructured content engagement (where spatial invention occurs) with structured mechanism deployment (where only texture variation occurs).

This should be the opening paragraph of the Master Doc, not an implicit conclusion drawn from the principles.
