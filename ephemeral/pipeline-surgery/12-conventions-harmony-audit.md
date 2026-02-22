# Conventions Brief Harmony Audit

**Auditor:** conventions-harmony-auditor (Opus)
**Date:** 2026-02-20
**File audited:** `design-system/pipeline/conventions-brief.md` (current state, 547 lines)
**Original baseline:** ~443 lines (described at line 546 as "approximately 440 lines")
**Net additions:** ~104 lines (+23.5%)

---

## Section 1: Tone Assessment

The conventions brief describes itself as "a world-description, not a checklist" (line 5-6). Each new section must maintain this voice -- describing physics, materials, and qualities of a world, not injecting technical specifications.

### Section-by-Section Tone Rating

**1. Coherence Arc Planning (lines 136-155)**
**TONE: MOSTLY HARMONIOUS (B+)**

Opens well: "Multi-coherence is not uniform -- it has a narrative shape" (line 138). This reads as world-description. The table format (Opening/Building/Climax/Resolution) is structural but serves the "arc" metaphor naturally. The concrete 4-zone example (lines 147-153) provides specific CSS values in the world's voice -- "bg #FEF9F5, padding 64px" reads as coordinates in the world rather than a specification. The closing line "The arc ensures the page has a beginning, middle, and end" returns to narrative.

Minor dissonance: The table header "Active Channels" is more checklist than world-description. Could be "What Moves Here" to maintain voice.

**2. Typographic Progression Per Semantic Direction (lines 157-178)**
**TONE: RECIPE -- WELL-HARMONIZED (A-)**

Opens cleanly: "Typography does not stay constant across zones. When the coherence direction changes, typography follows" (lines 159). This reads as physics -- cause and effect in the world. The CSS blocks are presented as natural consequences of direction, not as rules to follow. The closing instruction "Match your typographic shifts to your declared coherence direction" is directive but in the builder's voice, not the checker's voice.

Slight dissonance: The `/* heavier = more serious */` comments are explanatory rather than world-building, but they serve clarity and are brief.

**3. Transition-to-Coherence Mapping (lines 267-280)**
**TONE: HARMONIOUS (A)**

"Each transition type carries a specific channel budget" (line 269) describes physics. The table maps transition types to channel counts naturally -- this IS the world's physics. The "Planning shortcut" (line 277) is practical guidance in the builder's voice: "Map your transitions BEFORE writing CSS." The "Within-zone transitions" paragraph (line 279) extends the grammar naturally, describing lighter versions of the same physics.

No significant dissonance. This is world-description with practical consequence.

**4. Parametric Echo CSS Recipe (lines 203-212)**
**TONE: RECIPE -- HARMONIOUS (A-)**

The table format provides specific CSS values per scale (Page/Section/Component/Character). The framing line "The recipe is: denser zones get tighter padding, heavier borders, tighter letter-spacing" (line 212) reads as a principle of the world, not a mandate. The recipe format is appropriate here -- it was deliberately chosen to address the "guardrail factory vs playbook factory" finding that builders need TO-DO guidance, not just constraints.

Minor concern: Line 212's closing sentence repeats information already covered in the general parametric echo description at line 199-201. Slight redundancy but not harmful.

**5. Character-Scale Register (Closed Vocabulary) (lines 214-227)**
**TONE: SPECIFICATION-LIKE (B-)**

This is the weakest tonal match. "These are the ONLY character-scale tools available -- builders pick from these, they do not invent new values" (line 216) reads as a constraint specification, not world-description. Compare with how Section 1 (Identity) handles constraints: "Six constraints define the identity. They cannot be overridden, negotiated, or reinterpreted. They are the physics of this world" (line 13). The character-scale register could be framed as physics: "These are the character-scale atoms that exist in this world" rather than "builders pick from these."

The word "builders" breaks the fourth wall -- the brief otherwise addresses "you" (the builder) directly. "Builders pick from these" should be "You pick from these" or better, "These are the character-scale atoms. Values outside these ranges do not exist in this world" (which it partially does at line 226).

Line 226-227 recovers: "This is a CLOSED vocabulary. Values outside these ranges... do not exist in this world." This IS the right voice. The opening needs to match.

**6. Component-Internal Multi-Coherence Recipe (lines 291-305)**
**TONE: RECIPE -- HARMONIOUS (A)**

"Components are not islands -- they respond to their zone's character" (line 292) is excellent world-description. The CSS blocks demonstrate zone-responsive components with clear comments (`/* Dense zone (DEEPENING): components tighten */`). The closing paragraph (lines 304-305) explains what changes and what stays constant -- recipe format with world-physics framing.

This is one of the best new additions tonally.

**7. Metaphor in Navigation Elements (lines 244-249)**
**TONE: HARMONIOUS (A)**

"The metaphor manifests even in page chrome, at progressively lighter intensity" (line 244) reads as world-physics. Each sub-point (Header, Breadcrumbs, Footer, Skip link) describes behavior at decreasing intensity -- a natural gradient. The transition timing examples (`geological = slow 0.4s, architectural = crisp 0.15s`) are vivid and instructive.

No dissonance. This reads like it was always part of the Unified Metaphor section.

### Overall Tone Verdict

6 of 7 new sections maintain or improve the world-description voice. The Character-Scale Register (Section 5) has a specification tone that needs softening. The opening lines at 216-217 are the primary concern.

---

## Section 2: Redundancy Check

### Overlap 1: Parametric Echo (NEW lines 203-212) vs Parametric Echo (EXISTING lines 199-201)

The existing text at lines 199-201 describes parametric echo conceptually: "Components in dense zones should have tighter internal padding... The organizing principle manifests not just as 'the same type of pattern at each scale' (structural echo) but as 'the degree varies by page zone' (parametric echo)."

The new table at lines 203-212 provides SPECIFIC CSS VALUES for this concept at each scale.

**Verdict: COMPLEMENTARY, NOT REDUNDANT.** The existing text is the principle; the new table is the recipe. This is the correct pattern (principle + recipe) that addresses the "playbook factory" finding. However, line 212's closing sentence ("The recipe is: denser zones get tighter padding, heavier borders, tighter letter-spacing. Sparser zones get the inverse.") slightly repeats the concept from line 199-201. Minor redundancy -- acceptable for clarity.

### Overlap 2: Component-Internal Multi-Coherence (NEW lines 291-305) vs Component Micro-Coherence (EXISTING lines 288-289)

Line 288-289 (existing): "Component micro-coherence: when the page-level coherence direction shifts at a zone boundary, components inside the new zone should reflect that shift."

Lines 291-305 (new): Provides the CSS recipe for exactly this concept.

**Verdict: COMPLEMENTARY, NOT REDUNDANT.** The existing text is a one-sentence principle. The new section provides the operational recipe with specific CSS values. Together they form a complete teaching unit: concept + implementation.

### Overlap 3: Coherence Arc Planning (NEW lines 136-155) vs Global Coherence (EXISTING line 132)

Line 132 (existing): "Multi-coherence is sustained at every zone boundary across the entire page, driven by your unified metaphor. Not concentrated at header/footer bookends with flat middle sections. The coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels -- creating a narrative arc of visual intensity."

Lines 136-155 (new): Expands this into a full arc model with table + example.

**Verdict: AMPLIFICATION -- SLIGHT RISK.** Line 132 already says "creating a narrative arc of visual intensity." The new section expands this into a full subsection. This is useful but creates a question: is line 132 now redundant? Line 132 should either be shortened to a forward reference ("see Coherence Arc Planning below") or left as-is as a summary before the detail. Currently both exist without cross-reference, which is slightly confusing.

### Overlap 4: Typographic Progression (NEW lines 157-178) vs Perception Thresholds (EXISTING lines 107-115)

The existing perception thresholds table (lines 107-115) lists typographic perceptible floors: font-size >= 2px delta, letter-spacing >= 0.03em delta.

The new typographic progression section (lines 157-178) lists specific font-weight, letter-spacing, line-height, and font-size progressions per direction.

**Verdict: NO REDUNDANCY.** Different purposes. The thresholds table says "below X you cannot see it." The progression section says "when moving in direction Y, shift these properties in these ways." No values conflict (see Section 5 for CSS consistency check).

### Overlap 5: Character-Scale Register (NEW lines 214-227) vs Perception Section (EXISTING lines 58-59)

Lines 58-59 discuss letter-spacing thresholds: "No element should carry letter-spacing below 0.025em."

Lines 219-220 list: "letter-spacing: 0 | 0.025em (minimum perceptible) | 0.03em | 0.05em | 0.08em | 0.1em (labels) | 0.12em (maximum)"

**Verdict: CONSISTENT BUT SLIGHTLY REDUNDANT.** Both state 0.025em as the minimum. The character register provides the full vocabulary; the perception section provides the rationale. No conflict, slight overlap.

### Summary of Redundancy

| Overlap | Type | Severity | Action Needed |
|---------|------|----------|---------------|
| Parametric echo (concept vs recipe) | Complementary | LOW | None |
| Component coherence (principle vs recipe) | Complementary | LOW | None |
| Coherence arc (summary vs detail) | Amplification | MEDIUM | Consider shortening line 132 or adding forward-ref |
| Typography (threshold vs progression) | Different purpose | NONE | None |
| Letter-spacing (threshold vs register) | Consistent | LOW | None |

**No contradictions found.** All overlaps are consistent or complementary.

---

## Section 3: Placement Assessment

### Current Section Order (with new additions marked)

1. Identity (Soul)
2. Perception (Physics of Visibility)
3. Richness (Governing Principle)
4. Multi-Coherence (Binding Rule)
   - **NEW: Coherence Arc Planning** (subsection)
   - **NEW: Typographic Progression Per Semantic Direction** (subsection)
5. Fractal Echo (Pattern at Every Scale)
   - **NEW: Parametric Echo CSS Recipe** (subsection)
   - **NEW: Character-Scale Register** (subsection)
6. Unified Metaphor (Flagship Requirement)
   - **NEW: Metaphor in Navigation Elements** (subsection)
7. Transition Grammar (Three Kinds of Boundary)
   - **NEW: Transition-to-Coherence Mapping** (subsection)
8. CSS Vocabulary (The Instrument)
   - **NEW: Component-Internal Multi-Coherence Recipe** (subsection)
9. Creative Authority
9B. Quality Floor
10. Compositional Memory
11. Five Questions
12. Restraint List
13. Accessibility
14. Responsive Behavior
+ Conviction Card + Process

### Placement Evaluation

**Coherence Arc Planning (in Section 4: Multi-Coherence)**
**PLACEMENT: CORRECT.** The coherence arc is a multi-coherence concept -- it describes how the number of active channels varies across the page. This belongs inside the multi-coherence section, after the channel definitions and semantic direction definitions, as a planning layer on top of both.

**Typographic Progression (in Section 4: Multi-Coherence)**
**PLACEMENT: CORRECT BUT CONSIDER MOVE.** The typographic progression describes how typography shifts per semantic direction. It's placed after Coherence Arc Planning, which makes sense sequentially (arc planning -> how typography supports the arc). However, it could also live in Section 8 (CSS Vocabulary) since it's fundamentally about CSS properties. Current placement is acceptable because it reinforces the multi-coherence concept with a concrete channel.

**Parametric Echo CSS Recipe (in Section 5: Fractal Echo)**
**PLACEMENT: CORRECT.** The parametric echo is a fractal echo concept -- the principle's intensity varies by zone. The recipe table follows naturally from the conceptual description of parametric echo.

**Character-Scale Register (in Section 5: Fractal Echo)**
**PLACEMENT: CORRECT.** Character scale is the smallest fractal echo level. Placing the closed vocabulary register here defines the atoms available at that scale. It follows the parametric echo naturally (parametric echo at all scales -> what's available at the smallest scale).

**Metaphor in Navigation (in Section 6: Unified Metaphor)**
**PLACEMENT: CORRECT.** Navigation elements are part of the metaphor's expression. The placement after the metaphor definition and test is natural -- "here's what the metaphor is" -> "here's how it manifests in page chrome."

**Transition-to-Coherence Mapping (in Section 7: Transition Grammar)**
**PLACEMENT: CORRECT.** The mapping connects transition types (Section 7) to coherence loads (Section 4). Placing it in Section 7 after the three transition types are defined is the natural location -- the types are defined, then the mapping to coherence is the next logical step.

**Component-Internal Multi-Coherence Recipe (in Section 8: CSS Vocabulary)**
**PLACEMENT: CORRECT.** This follows the Component 2-Zone DNA description and the existing micro-coherence sentence. The recipe provides the operational CSS for the principle stated in lines 288-289. The flow is: DNA pattern -> micro-coherence principle -> recipe for implementing micro-coherence.

### Summary

All 7 new sections are placed at CORRECT locations. No moves recommended. The document reads as a coherent journey: Identity -> Perception -> Richness -> Multi-Coherence (with arc + typography) -> Fractal Echo (with parametric recipe + character register) -> Metaphor (with nav) -> Transition (with coherence mapping) -> CSS Vocabulary (with component recipe) -> Authority -> Floor -> Memory -> Questions -> Restraint -> Accessibility -> Responsive -> Conviction -> Process.

---

## Section 4: Recipe vs Checklist Evaluation

Each new section is evaluated against the "recipe vs checklist" finding from the flagship retrospective. Recipes have SEQUENCED STEPS with SPECIFIC CSS VALUES and action verbs (Read/Select/Deploy/Assess). Checklists have CONSTRAINTS and PROHIBITIONS with verification verbs (Verify/Fail if/Must be).

### 1. Coherence Arc Planning (lines 136-155)
**Classification: RECIPE**

Evidence:
- Sequenced phases: Opening -> Building -> Climax -> Resolution (temporal progression)
- Specific channel counts: 2-3 -> 3-4 -> 4-5 -> 2-3 (concrete numbers)
- Concrete 4-zone example with CSS values: "bg #FEF9F5, padding 64px"
- Action verb: "Plan the arc before building" (directive)

No checklist markers (no "verify," no "fail if," no "must be").

### 2. Typographic Progression (lines 157-178)
**Classification: RECIPE**

Evidence:
- Sequenced CSS progressions: "font-weight: 400 -> 500 -> 600" (temporal/spatial progression)
- Specific values: 0.04em -> 0.03em, 1.7 -> 1.6 -> 1.5
- Direction-specific: DEEPENING gets one recipe, OPENING gets another
- Action verb: "Match your typographic shifts to your declared coherence direction"

No checklist markers.

### 3. Transition-to-Coherence Mapping (lines 267-280)
**Classification: MIXED (leaning RECIPE)**

Evidence for recipe:
- Concrete channel counts per transition type: SMOOTH 1-2, BRIDGE 3-4, BREATHING 4-5
- Planning shortcut with specific format: "Z2->Z3: BRIDGE (bg + type + border + spacing = 4 channels, DEEPENING)"
- Descriptive examples: "bg shifts 15-25 RGB, font-weight changes"

Evidence for checklist:
- None found. This reads as a planning tool, not a verification tool.

The "leaning RECIPE" classification is because the section primarily plans rather than instructs step-by-step. But the planning IS the recipe -- it tells the builder what to do before writing CSS.

### 4. Parametric Echo CSS Recipe (lines 203-212)
**Classification: RECIPE**

Evidence:
- Explicit "CSS Recipe" column in the table
- Specific values per scale: "Dense zone: padding: 48px 0; border-left: 3px"
- Scale progression: Page -> Section -> Component -> Character (architectural sequence)
- Summary recipe: "denser zones get tighter padding, heavier borders, tighter letter-spacing"

This is a pure recipe. No verification language.

### 5. Character-Scale Register (lines 214-227)
**Classification: CHECKLIST (Vocabulary Specification)**

Evidence for checklist:
- "These are the ONLY character-scale tools available" (constraint)
- "This is a CLOSED vocabulary" (boundary enforcement)
- "Values outside these ranges... do not exist" (prohibition)

Evidence against recipe:
- No sequencing (these are simultaneous options, not steps)
- No action verbs (no "select," "deploy," "match")
- No progression (flat list of valid values)

**This is the correct format for this content.** A vocabulary register IS a specification -- it defines what atoms exist. It should not be forced into recipe format. However, it could be FOLLOWED BY a brief recipe: "At each zone boundary, select character-scale values from this register that match your coherence direction. Dense zones use the left side of each range; sparse zones use the right side."

### 6. Component-Internal Multi-Coherence Recipe (lines 291-305)
**Classification: RECIPE**

Evidence:
- Zone-specific CSS blocks: dense zone gets one set of values, sparse zone gets another
- Specific property values: "padding: 16px 20px; border-left: 4px solid"
- Explanatory summary: "What changes: internal padding (~25% tighter in dense zones)"
- Component-specific guidance: callout, data-table, code-block each get values

Excellent recipe format. Builder knows exactly what CSS to write.

### 7. Metaphor in Navigation Elements (lines 244-249)
**Classification: RECIPE**

Evidence:
- Intensity gradient: Header (lightest) -> Breadcrumbs -> Footer -> Skip link (none)
- Specific CSS implications: "tighter padding and a 3px bottom border" for header
- Transition timing examples: "geological = slow 0.4s, architectural = crisp 0.15s"
- Structural guidance: "Mirror the header's density character but quieter (1px border-top where header had 3px border-bottom)"

Strong recipe -- tells the builder what to do at each navigation element.

### Summary

| Section | Classification | Recipe Quality |
|---------|---------------|---------------|
| Coherence Arc Planning | RECIPE | Strong (sequenced phases + specific values) |
| Typographic Progression | RECIPE | Strong (direction-specific + CSS progressions) |
| Transition-to-Coherence Mapping | MIXED (leaning RECIPE) | Good (planning format + concrete example) |
| Parametric Echo CSS Recipe | RECIPE | Excellent (explicit recipe table) |
| Character-Scale Register | CHECKLIST (correct for vocabulary) | N/A (vocabulary spec, not build step) |
| Component Multi-Coherence Recipe | RECIPE | Excellent (zone-specific CSS blocks) |
| Metaphor in Navigation | RECIPE | Strong (intensity gradient + specific CSS) |

**6 of 7 sections are RECIPES.** The one CHECKLIST (Character-Scale Register) is correctly formatted as a vocabulary specification rather than a build step.

---

## Section 5: CSS Value Consistency

### Check 1: Letter-Spacing Values

**Conventions brief (Character-Scale Register, line 219):**
`letter-spacing: 0 | 0.025em | 0.03em | 0.05em | 0.08em | 0.1em | 0.12em`

**Conventions brief (Perception section, line 59):**
"No element should carry letter-spacing below 0.025em -- values in the 0.001-0.025em range are always sub-perceptual"

**Conventions brief (Typographic Progression, DEEPENING, line 164):**
`letter-spacing: 0.04em -> 0.03em`

**Conventions brief (Typographic Progression, OPENING, line 172):**
`letter-spacing: 0.03em -> 0.05em`

**Tokens.css:** No letter-spacing token defined (letter-spacing is mechanism-level, not token-level).

**Prohibitions.md (line 411 of conventions brief -- Restraint List):**
"letter-spacing below 0.025em (always sub-perceptual, always wasted)"

**Verdict: CONSISTENT.** All letter-spacing values in new sections (0.03em, 0.04em, 0.05em) are within the register range and above the 0.025em perceptible floor. The register includes 0 as valid (the "don't use letter-spacing" option) which is consistent with the Perception section's "Either use >= 0.03em or use 0."

**MINOR NOTE:** The register lists 0.025em as "(minimum perceptible)" but the Perception section says "No element should carry letter-spacing below 0.025em." The 0.025em value is therefore a boundary case -- the register includes it as valid, the perception section implies it's the absolute floor. No contradiction, but the register could add "(use only at boundary cases)" next to 0.025em for clarity.

### Check 2: Font-Weight Values

**Conventions brief (Character-Scale Register, line 220):**
`font-weight: 400 | 500 | 600 | 700`

**Conventions brief (Typographic Progression, DEEPENING, line 163):**
`font-weight: 400 -> 500 -> 600`

**Conventions brief (Typographic Progression, OPENING, line 170):**
`font-weight: 600 -> 500 -> 400`

**Tokens.css:** No explicit font-weight tokens (weights are mechanism-level).

**Mechanism-catalog.md (Mechanism #2, 2-Zone DNA, line 198):**
`.component__label { font-weight: 600; }`

**Verdict: CONSISTENT.** All font-weight values (400, 500, 600) are within the register's range. 700 is in the register but not used in progressions -- this is fine (700 for bold emphasis, not for zone progression).

### Check 3: Spacing Values (Parametric Echo Recipe)

**Conventions brief (Parametric Echo table, lines 207-210):**
- Section dense: `padding: 48px 0; border-left: 3px`
- Section sparse: `padding: 64px 0; border-left: 1px`
- Component dense: `padding: 16px; font-size: 0.875rem`
- Component sparse: `padding: 24px; font-size: 1rem`

**Tokens.css:**
- `--space-12: 48px` (yes, 48px is on scale)
- `--space-16: 64px` (yes, 64px is on scale)
- `--space-4: 16px` (yes, 16px is on scale)
- `--space-6: 24px` (yes, 24px is on scale)
- `--text-sm: 0.875rem` (yes, 14px is on type scale)
- `--text-base: 1rem` (yes, 16px is on type scale)

**Border widths:** 3px and 1px are both on the border scale (tokens.css lines 133-134).

**Verdict: FULLY CONSISTENT.** All values in the parametric echo recipe are on the token scale. No off-scale values.

### Check 4: Component Multi-Coherence CSS Values

**Conventions brief (Component recipe, lines 294-303):**
- Dense callout: `padding: 16px 20px; border-left: 4px solid`
- Sparse callout: `padding: 24px 28px; border-left: 3px solid`
- Dense table td: `padding: 8px 12px`
- Sparse table td: `padding: 12px 16px`
- Dense code-block: `padding: 16px 24px`
- Sparse code-block: `padding: 24px 32px`

**Tokens.css (spacing scale):** 8, 12, 16, 20, 24, 28... Wait.

**Tokens.css actual scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.

**Check: 28px** -- `28px` is NOT on the spacing scale. The scale jumps from 24px to 32px.

**INCONSISTENCY FOUND:** Line 300: `.zone-1 .callout { padding: 24px 28px; }` -- the 28px horizontal padding is off-scale. Should be either 24px or 32px.

All other values (8, 12, 16, 20, 24, 32) are on scale.

**Border widths:** 4px (line 295) and 3px (line 300) are both valid. However, this is interesting: the recipe uses 4px in dense zones and 3px in sparse zones. The conventions brief Section 8 says "4px for accent and emphasis" and "3px for structural enclosure." The recipe uses 4px/3px for zone density rather than structural role. This is not a CONTRADICTION per se -- the recipe adapts component borders to zone density, which is consistent with the parametric echo principle. But it's worth noting that the 3-tier border system (4px/3px/1px) was defined by STRUCTURAL ROLE, and the recipe repurposes it for DENSITY ENCODING.

### Check 5: Coherence Arc Zone Values

**Conventions brief (Coherence Arc example, lines 149-152):**
- Zone 1: `bg #FEF9F5, padding 64px`
- Zone 2: `bg #F0EBE3, padding 48px, h2 1.75rem`
- Zone 3: `bg #FAF5ED, padding 40px, border-left 3px, font-weight 500`
- Zone 4: `bg #FEF9F5, padding 64px`

**Tokens.css:**
- #FEF9F5 = `--color-background` (valid)
- #F0EBE3 = `--color-border-subtle` (valid zone color)
- #FAF5ED = `--color-zone-breathing` (valid)
- 64px = `--space-16` (valid)
- 48px = `--space-12` (valid)
- 40px = `--space-10` (valid)
- 1.75rem is NOT in the type scale. Tokens.css has: `--text-h3: 1.5rem` and `--text-h2: 2rem`. 1.75rem falls between them.

**INCONSISTENCY FOUND:** Line 150 uses `h2 1.75rem` but the type scale in tokens.css does not include 1.75rem. The closest values are 1.5rem (h3) and 2rem (h2). However, tokens.css also has `--type-section: 1.625rem` -- 1.75rem is still not on this alternative scale either.

This is an illustrative example ("adapt to your metaphor and direction" is stated elsewhere), but it's confusing to use an off-scale value in an example that builders will reference.

### Check 6: Background RGB Deltas

**Conventions brief (Perception section, line 57):**
"at least one RGB channel differs by 15 or more points"

**Coherence Arc example (lines 149-152):**
- Zone 1 #FEF9F5 -> Zone 2 #F0EBE3: R(254-240)=14, G(249-235)=14, B(245-227)=18. Max delta = 18. PASSES (>= 15).
- Zone 2 #F0EBE3 -> Zone 3 #FAF5ED: R(250-240)=10, G(245-235)=10, B(237-227)=10. Max delta = 10. **FAILS (< 15).**
- Zone 3 #FAF5ED -> Zone 4 #FEF9F5: R(254-250)=4, G(249-245)=4, B(245-237)=8. Max delta = 8. **FAILS (< 15).**

**INCONSISTENCY FOUND:** The coherence arc example violates the document's own perception threshold. Zone 2 -> Zone 3 has max RGB delta of 10 (below 15 threshold). Zone 3 -> Zone 4 has max delta of 8. This example would produce imperceptible zone transitions at 2 of 3 boundaries -- exactly the Flagship failure mode.

**This is a BLOCKING issue.** The conventions brief must not contain an example that violates its own perception rules. Builders will copy these values.

### Check 7: Navigation Metaphor Transition Timings

**Conventions brief (Navigation metaphor, line 247):**
"geological = slow transition: 0.4s, architectural = crisp transition: 0.15s"

**Tokens.css (line 152):**
`--transition-standard: 0.3s ease`

**Verdict: ACCEPTABLE.** The 0.4s and 0.15s are metaphor-specific overrides of the standard 0.3s transition. The conventions brief Section 9 (Creative Authority) permits overrides of non-soul values with documented reasoning. Transition timing is MUTABLE.

### CSS Consistency Summary

| Check | Status | Detail |
|-------|--------|--------|
| Letter-spacing | CONSISTENT | All values within register and above floor |
| Font-weight | CONSISTENT | All progressions within register |
| Spacing (parametric echo) | CONSISTENT | All on 4px scale |
| Component padding | **INCONSISTENT** | 28px is off-scale (should be 24px or 32px) |
| Type scale (arc example) | **INCONSISTENT** | 1.75rem not in type scale |
| RGB deltas (arc example) | **INCONSISTENT** | 2 of 3 boundaries below 15 RGB threshold |
| Transition timing | ACCEPTABLE | Metaphor-specific override, mutable token |

---

## Section 6: TC Brief Integration

The conventions brief was originally written as a standalone document for builders. With Pipeline v2 / /build-page, builders now receive a TC brief (from the tension-composition pipeline) containing:
- Content-specific metaphor
- Zone architecture
- Selected mechanisms
- Coherence direction

### Does the Conventions Brief Need to Acknowledge the TC Brief?

**Yes, in limited places.** The conventions brief describes the WORLD. The TC brief describes the SPECIFIC COMPOSITION within that world. Several new sections provide general recipes that the TC brief will make specific.

### Specific Integration Recommendations

**1. Coherence Arc Planning (lines 136-155):**
Add a single sentence: "Your TC brief specifies the arc for your content. This section describes the general arc model -- use it to understand and refine the arc your TC brief provides."

Why: The TC brief includes zone architecture with coherence directions. Builders need to know the conventions brief's arc model is the general framework, not a replacement for the TC brief's specific arc.

**2. Typographic Progression (lines 157-178):**
No integration needed. The progressions are general physics tied to coherence directions (DEEPENING, OPENING). The TC brief specifies which direction; this section specifies the typography consequences.

**3. Parametric Echo CSS Recipe (lines 203-212):**
Add: "Adapt these values to the zones and density character specified in your TC brief."

Why: The recipe provides general dense/sparse values. The TC brief specifies which zones are dense and which are sparse.

**4. Component Multi-Coherence Recipe (lines 291-305):**
Add: "Use the zone assignments from your TC brief to determine which zone class applies to each section."

Why: The recipe uses `.zone-3` and `.zone-1` class names. The TC brief specifies which content sections map to which zones.

**5. All other new sections:** No TC brief integration needed. They describe world-physics that applies regardless of the specific TC brief.

### Risk of NOT Integrating

LOW. The TC brief is assembled by the orchestrator and will include instructions like "apply conventions brief section X to zone Y." The conventions brief doesn't strictly NEED to acknowledge the TC brief -- the orchestrator handles the connection. However, the 4 integration suggestions above would reduce confusion for builders who read the conventions brief before receiving the TC brief.

---

## Section 7: Length and Absorption Risk

### Line Count Analysis

- **Original document:** ~443 lines (per line 546 self-description)
- **Current document:** 547 lines
- **Net additions:** ~104 lines (+23.5%)
- **New self-description (line 546):** "approximately 440 lines" -- **STALE, should be updated to ~550 lines**

### Builder Absorption Risk

The memory finding: "75-line builder visibility cap -- builders tend to only absorb ~75 lines from their longest reference doc."

This finding was about the FLAGSHIP EXPERIMENT where the builder received a 963-line master prompt and absorbed ~75 lines (13.4%). The conventions brief at 547 lines is smaller but still well above the 75-line absorption threshold.

**However,** the conventions brief is designed to be read ONCE FULLY before building (line 7: "Read this brief once, fully. Then build."). It is not a reference document to be consulted during building -- that role belongs to the TC brief and operational recipe. The absorption risk applies to REFERENCE documents, not READ-ONCE documents.

**Risk assessment:** MEDIUM. If builders treat the conventions brief as a reference (consulting specific sections during build), the 75-line cap applies and key content in the second half will be missed. If builders read it once before building (as instructed), the 547-line length is manageable but long. The new additions are well-distributed (Sections 4, 5, 6, 7, 8) rather than concentrated, which helps.

### What Could Be Cut?

The parametric echo concept is explained THREE times:
1. Line 199-201 (conceptual description)
2. Lines 203-212 (CSS recipe table)
3. Line 212 (summary sentence repeating concept)

Lines 199-201 and the summary at line 212 could be condensed into a single intro line for the recipe table, saving ~4 lines.

The character-scale register (lines 214-227) is 14 lines. It could be expressed more compactly as a single CSS comment block (~8 lines).

These are minor savings. The document is not dramatically over-length.

### Self-Description Update

Line 546 says "approximately 440 lines" but the document is now 547 lines. This should be updated to "approximately 550 lines."

---

## Section 8: Specific Enrichment Recommendations

### Recommendation 1: Fix Coherence Arc Example RGB Deltas (BLOCKING)
**Location:** Lines 149-153
**Issue:** Zone 2->3 and Zone 3->4 background deltas are below 15 RGB threshold
**Fix:** Replace example zone colors with perceptually distinct values.

Suggested replacement:
```
Zone 1 (intro):      bg #FEF9F5, padding 64px
Zone 2 (context):    bg #F0EBE3, padding 48px, h2 2rem
Zone 3 (deep-dive):  bg #E8DFD1, padding 40px, border-left 3px, font-weight 500
Zone 4 (resolution): bg #FEF9F5, padding 64px
```

Zone 2 (#F0EBE3) -> Zone 3 (#E8DFD1): R=8, G=12, B=18. Max delta = 18. PASSES.
Zone 3 (#E8DFD1) -> Zone 4 (#FEF9F5): R=22, G=26, B=36. Max delta = 36. PASSES.

Also fixes the h2 to 2rem (on type scale).

### Recommendation 2: Fix Off-Scale Padding Value (SIGNIFICANT)
**Location:** Line 300
**Issue:** `.zone-1 .callout { padding: 24px 28px; }` -- 28px is not on 4px spacing scale
**Fix:** Change to `padding: 24px 32px;` (both values on scale)

### Recommendation 3: Fix Off-Scale Type Value (SIGNIFICANT)
**Location:** Line 150
**Issue:** `h2 1.75rem` is not in the type scale
**Fix:** Change to `h2 2rem` (matches `--text-h2: 2rem` in tokens.css) or `h2 1.5rem` (matches `--text-h3: 1.5rem`). Given this is a Zone 2 context (not the page title), `1.75rem` was probably intended as a section heading -- use `--type-section: 1.625rem` if the alternative scale is preferred, or `1.5rem` from the primary scale.

### Recommendation 4: Soften Character-Scale Register Opening (MINOR)
**Location:** Lines 216-217
**Issue:** "builders pick from these, they do not invent new values" breaks the world-description voice
**Fix:** Change to: "Character scale is the smallest echo level. This is the closed vocabulary of character-scale atoms in this world -- you select from these, you do not create new values:"

### Recommendation 5: Add Forward-Reference from Line 132 to Coherence Arc (MINOR)
**Location:** Line 132
**Issue:** Line 132 describes the narrative arc concept; the new Coherence Arc Planning section expands it. No cross-reference.
**Fix:** Add at end of line 132: "(see Coherence Arc Planning below for the full model)"

### Recommendation 6: Update Self-Description Line Count (MINOR)
**Location:** Line 546
**Issue:** Says "approximately 440 lines" but document is now ~550 lines
**Fix:** Update to "approximately 550 lines"

### Recommendation 7: Add Recipe Coda to Character-Scale Register (MINOR)
**Location:** After line 227
**Issue:** The register is a vocabulary specification (correct) but lacks a recipe bridge to the parametric echo concept above it
**Fix:** Add 1-2 lines: "Before writing CSS, produce a **Fractal Echo Table**..." (this line already exists at line 228 -- the register flows into it naturally). No change needed upon reflection.

---

## Section 9: BLOCKING Issues

### BLOCKING Issue 1: Coherence Arc Example Violates Perception Threshold
**Location:** Lines 149-153
**Severity:** BLOCKING -- the example teaches builders to create imperceptible zone transitions, which is the exact failure mode the document exists to prevent.
**Required Fix:** Replace zone colors so all adjacent zones have >= 15 max-channel RGB delta. See Recommendation 1 for specific values.

### BLOCKING Issue 2: Off-Scale Values in Examples
**Location:** Line 150 (1.75rem type value) and Line 300 (28px padding)
**Severity:** BLOCKING (downgraded from SIGNIFICANT -- together these create a pattern of off-scale values that undermines the token system's authority)
**Required Fix:** Replace 1.75rem with an on-scale type value (2rem or 1.5rem). Replace 28px with 32px.

These two issues together suggest the examples were written without cross-checking against tokens.css. If builders copy these values, they introduce off-scale atoms into their CSS -- which then fail programmatic gate verification.

### Non-Blocking Summary
All other findings are MINOR or INFORMATIONAL:
- Tone softening for Character-Scale Register opening (minor voice improvement)
- Forward-reference from line 132 to Coherence Arc section (minor navigation)
- Self-description line count update (factual correction)
- TC brief integration suggestions (nice-to-have, orchestrator handles this)

---

## Final Assessment

The 7 new additions are well-placed, maintain the document's voice (6/7 harmonious, 1 needs minor softening), are overwhelmingly recipe-format (6/7 recipes, 1 vocabulary spec), and complement rather than contradict existing content. The document reads as a coherent whole with natural expansion.

**Two BLOCKING issues must be fixed before the conventions brief is ready for builders:**
1. Coherence Arc example uses imperceptible zone colors (violates the document's own 15 RGB threshold)
2. Two off-scale values in examples (28px padding, 1.75rem type size) undermine token authority

After these fixes, the conventions brief is harmonized and ready for use.

---

**END CONVENTIONS HARMONY AUDIT**
