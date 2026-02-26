# Pipeline Ceiling Analysis: Theoretical Limits and Highest-Leverage Enrichments

**Analyst:** ceiling-explorer
**Date:** 2026-02-23
**Input data:** MANIFEST.md (1,092 lines), artifact-builder-recipe.md (840 lines), artifact-orchestrator.md (971 lines), verdict.md (247 lines), execution-brief.md (174 lines), artifact-tc-brief-template.md (169 lines), artifact-value-tables.md (226 lines), artifact-worked-examples.md (183 lines), gate-results.md (65 lines), pa-integrative.md (112 lines), prior Gas Town build-log.md (100 lines)

---

## 1. THEORETICAL CEILING: Maximum Achievable PA-05

### Current Result: 3/4 COMPOSED (with BLOCKING defects)

The first Pipeline v3 execution on Gas Town content produced PA-05 3/4 with:
- DESIGNED: Strong
- COHERENT: Strong
- PROPORTIONATE: Strong
- POLISHED: High with one critical defect (trailing void)
- Tier 5: 6/9
- Gate results: 14 PASS / 4 FAIL
- Classification: APPROACHING

### Is 4/4 DESIGNED Achievable? YES, but not reliably.

**Evidence FOR:** The four PA-05 sub-criteria are close to pass:
- DESIGNED already rated "Strong" -- the zone structure, interstitial pivot, role card grid, and complexity ladder all demonstrate compositional intent.
- COHERENT already rated "Strong" -- one designer, consistent vocabulary, unified color system.
- PROPORTIONATE already rated "Strong" -- well-defined column, dark/light alternation, generous margins.
- POLISHED is the only sub-criterion holding back 4/4, and its failure is a single CSS bug (trailing whitespace void).

**The gap to 4/4 is ~0.5-1.0 points.** The Weaver projects PA-05 3.4-3.5 after fixing items B1-S2. The remaining distance (3.5 to 4.0) requires:
1. PA-64 (deliberate plainness): Currently NO. Requires one zone to be INTENTIONALLY sparse as compositional contrast.
2. PA-68 (metaphor persistence): Currently PARTIAL FAIL. Bottom third drops to ~25% metaphor expression.
3. PA-67 (inventiveness): Currently PARTIAL. Inventive editorially but conventional visually.

### Structural Barriers to 4/4

**Barrier 1: Single-Pass Architecture (MODERATE)**
The builder produces a complete page in one shot. It cannot: (a) build a skeleton then decorate it, (b) see its own output and revise composition, or (c) receive mid-build feedback. The self-evaluation steps (Steps 3, 6, 8 in the build sequence) theoretically address this, but in practice the builder's Playwright screenshots are taken during a continuous writing session -- there is no cognitive "step back" that a human designer would take.

Evidence: The prior Gas Town build (009) used the same single-pass approach and also achieved 3/4 (3.5 estimate). The ceiling experiment (CD-006, different pipeline) achieved the equivalent of ~3.8/4 with a single Opus builder but with a DIFFERENT prompt architecture (richer compositional reference, no explicit zone naming, more creative freedom).

**Estimated impact:** -0.2 to -0.4 PA-05 points relative to a multi-pass architecture.

**Barrier 2: Information Loss in Compression (HIGH)**
```
MANIFEST (1,092 lines)
    ↓ selects relevant sections
Content Analyst receives: artifact-routing.md Phase 0 Protocol (~100 lines)
    ↓ produces
Content Map (~66 lines, 6% of routing input)
    ↓ merged with
TC Brief Template (169 lines, static)
    ↓ produces
Execution Brief (174 lines)
    ↓ builder receives
Brief + tokens.css (183) + components.css (290) + mechanism-catalog + value-tables (226)
    = ~900-1,000 lines of builder input from ~3,600 possible
```

**What survives compression to the builder:**
- Soul constraints: 100% (15 lines, verbatim from template)
- Perception thresholds: 100% (8 lines, verbatim from template)
- Multi-coherence boundary descriptions: ~85% (50 lines of the 60-line framework, zone-specific)
- Metaphor mapping: ~90% (CSS custom property names, zone-concept coupling)
- Disposition instructions: ~70% (40 lines, but compressed from 320 lines of recipe)
- Content map: ~100% (appended verbatim)

**What gets LOST:**
- Worked examples (183 lines): 0% reaches builder. The builder never sees a completed Content Map, Brief, or Gate Result. This is a 100% loss of procedural demonstration.
- Value tables (226 lines): Partially referenced but not inline in brief. Builder receives file separately but may not internalize it.
- Historical defect patterns: 0%. The builder has no knowledge of what went wrong in previous builds. The worked examples document the Z4-Z5 boundary weakness, but the builder never sees this.
- Prior build data: 0%. The builder has no comparison anchor for what "DESIGNED" looks like.
- Gate thresholds (by design): The builder doesn't know what will be checked. This is intentional to prevent threshold gaming, but it also prevents the builder from knowing what "sufficient" looks like for RGB deltas, gap sizes, etc.

**Estimated impact:** The compression barrier costs ~0.3-0.5 PA-05 points. The builder has vocabulary (tokens, components, mechanisms) but limited procedural knowledge of how to combine them into a 4/4 page.

**Barrier 3: Absence of Visual Reference (HIGH)**
The builder receives text instructions describing what good looks like but never SEES a good page. CD-006 reference is listed as "optional" and was not included in this run. Even when included, CD-006 is 1,200 lines of raw HTML -- the builder would need to parse HTML to extract design patterns.

**Estimated impact:** -0.3 to -0.5 PA-05 points. A human designer would study reference work before beginning. The builder equivalent would be CSS snippets annotated with "this produces a 3.5/4 zone transition."

**Barrier 4: Builder Cannot See Its Own Output Holistically (MODERATE)**
The build sequence (Steps 1-8) includes Playwright screenshots, but the builder takes these DURING construction. It never sees the complete page at once before submitting. The Phase 5 self-evaluation is a cognitive exercise ("mentally remove content"), not a visual one. The builder has Playwright access but cannot take a full-page screenshot, scroll through it, and revise based on gestalt impression.

**Estimated impact:** -0.1 to -0.2 PA-05 points. The trailing void (B1) and the Zone 4 monotony (S1) are both defects that would be caught by a holistic review but were missed during zone-by-zone construction.

**Barrier 5: Content-Specific Ceiling (LOW for this content)**
Gas Town content has HIGH structural heterogeneity and HIGH metaphor viability. It has 7+ element types, a native factory metaphor, clear zone architecture, and a WAVE density arc. This content is near-ideal for COMPOSED mode. The content is not the barrier.

### Maximum Achievable PA-05 with Current Architecture

| Scenario | Estimated PA-05 | Conditions |
|----------|----------------|------------|
| **Current output, as-is** | 3.0/4 | Trailing void + cold color + bg deltas |
| **After BLOCKING fixes only** | 3.2-3.3/4 | Void removed, cold color fixed |
| **After ALL significant fixes** | 3.4-3.5/4 | + bg deltas + Z4 monotony + responsive |
| **Ceiling: perfect execution, current architecture** | 3.5-3.7/4 | All barriers active but minimized |
| **Ceiling: with multi-pass + reference injection** | 3.7-4.0/4 | Barrier 1 + 3 removed |

**The theoretical ceiling of the current single-pass architecture is approximately 3.5-3.7/4.** The 3.7 upper bound requires perfect brief assembly, an exceptional builder session, zero CSS bugs, and content with maximum affordance. The architecture itself imposes a ~0.3-0.5 penalty from barriers 1-4 combined.

To reliably achieve 4/4, at least barriers 1 and 3 must be removed.

---

## 2. HIGHEST-LEVERAGE ENRICHMENTS (Ranked by Expected PA-05 Impact)

### Rank 1: Iterative Build Cycles (Build -> Gate -> Fix -> Re-Gate)
**Expected PA-05 delta: +0.3 to +0.5**
**Current status: EXPERIMENTAL (blocked until experiment #21)**

The single highest-leverage change. The current pipeline is single-pass: build once, audit once, stop. REFINE and REBUILD are OUTPUT LABELS that require a human to initiate a new run. An automated REFINE loop would:
1. Run gate checks after build
2. If any perception or anti-pattern gate fails, pass specific CSS fix instructions to a FRESH Opus builder
3. The fix builder sees: original brief, built HTML, gate failures as descriptive text (not threshold numbers), and the Weaver's artistic impression
4. Re-run gates + abbreviated PA (2-3 auditors on the specific defect areas, not full 9-auditor Mode 4)

**Why this is highest-leverage:** Every defect flagged in the verdict (trailing void, cold color, bg deltas, Zone 4 monotony) is a CSS fix. The pipeline already produces a precise fix list with effort estimates. An automated REFINE would resolve 2-4 of these automatically, moving PA-05 from 3.0 to 3.3-3.5 without any architectural change.

**Risk:** Fix cycles can degrade compositional quality (the builder enters REPAIR mode instead of COMPOSING mode). Mitigation: use a FRESH Opus builder for fixes, feed artistic impressions not gate scores, limit to 1 REFINE cycle before stopping.

### Rank 2: Reference Page Injection (Builder Sees a Completed High-Quality Page)
**Expected PA-05 delta: +0.2 to +0.4**
**Current status: Optional (CD-006 reference listed in builder inputs but not included in this run)**

The builder has never SEEN what a 3.5/4 page looks like. It has text descriptions of zone transitions, CSS values, and mechanism counts, but no visual or code reference. Injection options:
- **Option A: Raw HTML injection** -- Include CD-006-pilot-migration.html (1,200 lines) as a reference file. Builder can study the CSS patterns. Cost: high token count, builder may not parse effectively.
- **Option B: Annotated CSS snippets** -- Extract 10-15 key CSS patterns from CD-006 and annotate them: "This zone transition shifts 4 channels. Background: #FEF9F5 -> #EDE6DA (delta 27). Typography: 18px -> 15px. Spacing: 64px -> 32px. Border: 1px -> 3px." Cost: ~100 lines, high signal density.
- **Option C: Screenshot + description** -- Include 2-3 screenshots from CD-006 with perceptual commentary. Cost: multimodal input (images), highest fidelity.

**Recommendation: Option B** (annotated CSS snippets). Creates a "this is what DESIGNED looks like in CSS" reference without the token cost of raw HTML or the ambiguity of screenshots.

### Rank 3: More Specific Builder Recipe (CSS Snippets, Not Just Rules)
**Expected PA-05 delta: +0.2 to +0.3**
**Current status: Partially addressed (value tables exist but are reference-only)**

The execution brief tells the builder WHAT to do ("Create a HEAVY transition at Z1->Z2 that shifts 4+ channels") but not HOW ("Here is the CSS that produces a 4-channel HEAVY transition:"). The builder has 80% creative authority, but creative authority without concrete vocabulary produces generic output.

Specific enrichment: Add a "Pattern Library" section to the brief or as a separate file containing 5-8 CSS patterns:
```
PATTERN: Heavy Zone Transition (4+ channels)
.zone-boundary--heavy {
  /* Background: dramatic shift */
  background: var(--refinery-floor);  /* delta 27 from previous zone */
  /* Typography: compress */
  font-size: 15px; line-height: 1.6;
  /* Spacing: tighten */
  padding: 48px 0;
  /* Border: mark threshold */
  border-top: 3px solid var(--color-primary);
}
```

This converts "deploy a heavy transition" from an instruction into a recipe. The builder can adopt, adapt, or override -- but starts with a concrete CSS shape instead of inventing one.

### Rank 4: Tighter Feedback Loops (Gate Results Mid-Build)
**Expected PA-05 delta: +0.1 to +0.3**
**Current status: Not implemented (gates run AFTER build by design)**

Currently, gates run post-build. The builder cannot course-correct during construction. A mid-build gate check (after Zone 3, roughly 50% of content) would catch:
- Background delta issues between early zones (GR-11)
- Stacked gap violations forming (GR-13)
- Typography uniformity emerging (GR-21)

**Implementation:** After the builder completes Zone 3 and takes its midpoint screenshot, the orchestrator runs a subset of gates (GR-11, GR-13, GR-15, GR-21) on the partial HTML. If any fail, the orchestrator passes CALIBRATION feedback (not gate scores): "The zones you have built so far have backgrounds that are very close in color. Consider making Zone 2 warmer or Zone 3 lighter to create more perceptible room changes."

**Risk:** This breaks the design principle of hiding gate thresholds from the builder. Mitigation: deliver feedback as perceptual observation, not threshold data. "These zones feel similar" not "delta is 11, need 15."

### Rank 5: Better Worked Examples (Showing What 4/4 CSS Looks Like)
**Expected PA-05 delta: +0.1 to +0.2**
**Current status: artifact-worked-examples.md exists but is thin (183 lines) and not included in builder input**

The current worked examples show pipeline INPUT/OUTPUT artifacts (Content Map, Brief, Gate Results, PA excerpt) but NOT the builder's CSS decisions. A builder-facing worked example would show:
- "Here is a zone transition that scored 4/4 on PROPORTIONATE" + the CSS
- "Here is a component modulation that PA auditors rated as DESIGNED" + the CSS
- "Here is a common defect (uniform blockquotes) and how to fix it" + before/after CSS

**Current gap:** The builder has ZERO examples of what its output should look like. Every other pipeline agent has examples (Content Map format, Brief structure, Gate result format, PA report format). The builder is the only agent operating without a reference output.

### Rank 6: Multi-Pass Building (Structure -> Detail -> Polish)
**Expected PA-05 delta: +0.2 to +0.4**
**Current status: EXPERIMENTAL (blocked until experiment #21)**

A 3-pass architecture:
- **Pass 1 (Skeleton):** Build HTML structure + zone backgrounds + basic typography. 400-500 CSS lines. Focus: spatial composition, zone differentiation, metaphor expression.
- **Pass 2 (Detail):** A FRESH Opus builder enriches Pass 1 with mechanisms, component modulation, edge treatments. 300-400 additional CSS lines. Focus: channel shifts, transition types, content-form coupling.
- **Pass 3 (Polish):** A third builder (or same builder with fresh context) adds micro-refinements: hover states, ::selection colors, typographic spectacle moments, responsive breakpoints. 100-200 additional CSS lines. Focus: D-07 edge intentionality, D-04 second-half moments.

**Why this works:** Each pass has a narrower cognitive scope. Pass 1 builder doesn't need to think about hover states. Pass 3 builder doesn't need to think about zone architecture. Specialized attention produces higher quality per-dimension.

**Why this is ranked below iterative cycles:** Multi-pass adds 60-90 minutes and 2 additional Opus sessions. Iterative cycles (Rank 1) achieve much of the same improvement by fixing what went wrong, rather than rebuilding from scratch.

### Rank 7: Builder-PA Dialogue
**Expected PA-05 delta: +0.1 to +0.2**
**Current status: Not implemented**

After the PA audit identifies specific defects, a targeted dialogue between the Weaver's artistic impression and a REFINE builder could produce compositional improvements. Currently the artistic impression is a terminal output -- it goes to the orchestrator, not back to a builder.

### Rank 8: Constraint Reduction
**Expected PA-05 delta: -0.1 to +0.1 (HIGH VARIANCE)**
**Current status: Not recommended**

The current brief is 174 lines with 80% creative authority. Reducing constraints further risks losing the identity coherence that earned the COHERENT sub-criterion. The evidence suggests the constraint level is near-optimal: too few constraints produce generic output (Sonnet builders), too many produce rigid output (Flagship experiment, 963-line prompt, PA-05 1.5/4).

### Rank 9: Longer Builder Prompts
**Expected PA-05 delta: -0.1 to +0.1 (UNKNOWN, possibly negative)**
**Current status: Not recommended**

Historical evidence is AGAINST longer prompts. The Flagship experiment used a 963-line prompt and scored PA-05 1.5/4. The Middle experiment used ~100 lines and scored PA-05 4/4. Pipeline v3 used 174 lines and scored PA-05 3/4. The relationship between prompt length and quality is NOT monotonic -- there is a sweet spot around 100-200 lines where the builder has sufficient vocabulary without information overload. Longer prompts trigger COMPLYING mode (satisfying constraints) instead of COMPOSING mode (creating with intent).

---

## 3. COMPRESSION ANALYSIS

### Information Flow Accounting

| Stage | Lines In | Lines Out | Compression | What Survives |
|-------|----------|-----------|-------------|---------------|
| MANIFEST | 1,092 | — | — | Master spec, not directly consumed |
| Content Analysis Protocol (from routing) | ~100 | 66 (Content Map) | 1.5:1 | Content type, zones, tensions, metaphor, density |
| TC Brief Template (static) | 169 | 169 | 1:1 | All template structure |
| Content Map + Template -> Brief | 235 (66+169) | 174 | 1.35:1 | Content Map fully preserved, template applied |
| Brief -> Builder sees | 174 + ~700 ref files | ~900 | N/A | Brief + tokens + components + catalog + value tables |

### What SHOULD Survive But Gets Lost

**1. Worked Examples (183 lines -> 0 lines to builder = 100% loss)**
The builder has never seen what a successful Content Map, Execution Brief, or Gate Result looks like. More critically, it has never seen what a successful PAGE looks like. The worked-examples.md file documents the exact Z4-Z5 boundary weakness that recurred in this build, but the builder never sees this history.

**Should survive:** A 30-50 line "Builder Reference" appendix showing 3-5 CSS patterns from prior successful builds. This would cost ~30 additional builder input lines (from ~900 to ~930) and would provide the missing "procedural demonstration" that text instructions cannot replace.

**2. Historical Defect Patterns (0 lines to builder = total loss)**
The MANIFEST Section 6 "Known Historical Failure Modes" lists 7 specific anti-patterns: threshold gaming, prohibition rigidity, checklist format, whitespace voids, ghost mechanisms, CSS budget misallocation, and uniform typography. The gate runner checks for these programmatically, but the builder has no awareness that these are common failure modes.

**Should survive:** A 10-line "Anti-Pattern Awareness" section in the brief: "Common defects in pages like this: (1) backgrounds that differ by less than 20 RGB points feel identical; (2) more than 3 consecutive components with identical formatting creates a drone; (3) trailing whitespace below the footer breaks page credibility."

**3. Gate Runner Logic (1,379 lines -> 0 lines to builder = total loss, by design)**
This is intentionally withheld to prevent threshold gaming. The design decision is SOUND -- exposing gate thresholds to the builder causes building-to-minimums. However, the builder also has no feedback mechanism to know when it is approaching a threshold violation.

**Should survive:** Nothing. The current approach is correct. The mid-build gate check (Rank 4 enrichment) is the right compromise.

**4. Value Tables (226 lines -> separate file, partial absorption)**
The value tables are provided as a separate file but are not inline in the brief. In a ~900-line builder input, the value tables compete for attention with the brief, tokens.css, components.css, and mechanism-catalog.md. The builder may not fully internalize the 20 pre-computed color pairs or the 10 spacing progressions.

**Should survive better:** Inline the 5 most relevant color pairs and 1 spacing progression directly in the Tier 3 multi-coherence section of the brief. This embeds the specific values INTO the compositional framework rather than leaving them as disconnected reference.

### Compression Quality Score

The overall compression is GOOD but has one critical gap:

| Dimension | Score | Notes |
|-----------|-------|-------|
| Identity preservation | 10/10 | Verbatim from template |
| Perception threshold preservation | 9/10 | Present as calibration, not gates. Could inline calibration pairs. |
| Compositional framework | 8/10 | Multi-coherence boundaries are well-described. Missing: CSS pattern examples. |
| Disposition | 7/10 | All 8 present with content-specific observations. Could be richer in technique vocabulary. |
| Content map | 10/10 | Appended verbatim |
| Procedural knowledge | 2/10 | Builder has zero examples of what successful output looks like |
| Historical learning | 1/10 | Zero defect awareness, zero prior build data |

**Overall: 6.7/10.** The brief is excellent at communicating WHAT to build and WHY. It is poor at communicating HOW (procedural demonstration) and WHAT TO AVOID (historical defects).

---

## 4. ARCHITECTURAL ALTERNATIVES

### Alternative A: 2-Pass Build (Skeleton -> Decoration)
**Estimated improvement: +0.2 to +0.3**

Pass 1: Build complete HTML with zone backgrounds, typography hierarchy, spacing, borders, and basic component layout. Target: 500-600 CSS lines. The skeleton should pass all identity and perception gates.

Pass 2: A FRESH Opus builder receives the skeleton HTML + the brief + mechanism-catalog.md. It enriches: adds hover states, component modulation, typographic spectacle moments, responsive refinements, edge treatments. Target: 200-400 additional CSS lines.

**Advantage:** Pass 1 builder focuses entirely on spatial composition (the hardest part). Pass 2 builder focuses on details and moments (the part that distinguishes 3/4 from 4/4). Neither builder carries the full cognitive load.

**Disadvantage:** Pass 2 builder must understand Pass 1's decisions without the conviction statement being enough context. Risk of decorating without compositional intent.

### Alternative B: CSS-First (Design CSS, Then Write HTML)
**Estimated improvement: +0.1 to +0.2**

A radical inversion: the builder first writes a complete CSS document with custom properties, zone styles, component styles, and transition rules. THEN it writes HTML that applies those styles. This forces the builder to think about the design system before thinking about content layout.

**Advantage:** CSS-first builders tend to produce more intentional design systems because the CSS is not reactive to HTML structure. Custom property naming, channel values, and component modulation are decided before any content is placed.

**Disadvantage:** Risk of CSS that does not serve the content. The builder may design a beautiful system that does not fit the actual sections. Requires the builder to hold the Content Map in mind while writing abstract CSS.

**Verdict:** Interesting but too experimental for the current pipeline. The brief already encourages CSS-first thinking through the recipe sequence (Read vocabulary -> Select decisions -> Deploy scaffolding), but the actual output is HTML-first.

### Alternative C: Template-Driven (Start from High-Quality Template, Modify)
**Estimated improvement: +0.3 to +0.5**

Instead of building from scratch, the builder starts from a template HTML file that has:
- Zone structure with placeholder content
- Background colors pre-set to the brief's specified values
- Basic typography hierarchy applied
- Component classes from components.css pre-integrated
- Responsive breakpoints pre-configured

The builder's job becomes: (1) replace placeholder content with actual content, (2) adjust zone-specific styles, (3) add compositional mechanisms, (4) create designed moments, (5) refine.

**Advantage:** Eliminates an entire class of defects (trailing void, missing responsive breakpoints, wrong container width, missing skip link) by starting from a correct foundation. The builder spends 100% of its creative energy on COMPOSITION rather than CONSTRUCTION.

**Disadvantage:** Template rigidity may suppress creativity. The builder might treat the template as finished rather than as a starting point. Requires maintaining a high-quality template.

**Verdict:** THIS IS THE HIGHEST-LEVERAGE ARCHITECTURAL CHANGE. The trailing void, the cold color on role cards, and the missing responsive breakpoints are all CONSTRUCTION defects, not COMPOSITION defects. A template that handles construction correctly would eliminate the entire B1+B2+S3 defect class, freeing the builder to focus on the S1+S2+M1-M5 compositional issues that actually determine whether a page is 3/4 or 4/4.

### Alternative D: Human-in-the-Loop at Brief Stage
**Estimated improvement: +0.1 to +0.2 (for brief quality), +0.0 (for build quality)**

A human reviews and edits the Execution Brief before it goes to the builder. The human can: strengthen weak metaphor mappings, add specific CSS technique suggestions, flag zones where the Content Map's density estimation seems wrong, inject knowledge of prior build defects.

**Advantage:** Addresses the "procedural knowledge" gap (Section 3) by allowing a human to embed lessons learned.

**Disadvantage:** Breaks the automated pipeline. Each run requires ~15 minutes of human review. Not scalable.

**Verdict:** Useful for experimental runs to DISCOVER what brief enrichments produce better output. Not viable for production.

---

## 5. THE 3/4 -> 4/4 GAP: What Specifically Separates COMPOSED from DESIGNED?

### The Sub-Criteria Breakdown

| Sub-Criterion | 3/4 (current) | 4/4 (target) | Gap |
|---------------|---------------|---------------|-----|
| DESIGNED | "Strong" | "Exceptional" | Every zone has unique compositional character; no two zones could be swapped without loss |
| COHERENT | "Strong" | "Flawless" | Zero vocabulary breaks across the full scroll sequence |
| PROPORTIONATE | "Strong" | "Masterful" | Spatial relationships are not just balanced but RHYTHMIC -- varying intentionally |
| POLISHED | "High with defect" | "Zero defects" | No trailing voids, no missing responsive breakpoints, no cold colors |

### What The Current Build Has That Gets It to 3/4

1. **Named zone geography:** "THE SHIFT / THE FACTORY FLOOR / THE NERVOUS SYSTEM / THE CONTROL ROOM / THE ASSEMBLY LINE / THE DISPATCH." This creates spatial memory and demonstrates compositional intent.
2. **Consistent vocabulary:** Serif italic headings, colored-border blockquotes, dark code panels, spaced uppercase labels, warm cream palette. One designer's hand throughout.
3. **Content-form coupling:** Dense reference zones (Z2, Z5) use tighter spacing and grids. Narrative zones (Z1, Z6) use generous spacing and pull quotes. The CSS responds to what the content IS.
4. **5+ design moments:** Complexity ladder, role card grid, interstitial quote banner, Use/Don't Use comparison, quotes gallery.
5. **Emotional arc:** BUILDS (scrolls 1-6) -> SUSTAINS (scrolls 7-12) -> CLOSES (scrolls 13-17).

### What 4/4 Requires That The Current Build Lacks

**1. Deliberate Plainness (PA-64: NO)**
A 4/4 page has at least one zone that is INTENTIONALLY simple as compositional contrast. Like a musical rest -- the silence makes the surrounding notes more powerful. The current build treats every zone as "important" with equal visual investment. Zone 4 (Core Principles) is the closest to plain, but its 6 identical blockquotes read as "the builder ran out of component variety" rather than "the builder chose restraint here."

**Fix:** The brief should explicitly instruct: "One zone (recommendation: Z4) should be intentionally spare -- plain text with generous whitespace, no callouts, no colored borders. This is not laziness; it is compositional contrast. The reader rests here before the Z5 procedural sprint."

**2. Metaphor Persistence Across All Thirds (PA-68: PARTIAL FAIL)**
The refinery metaphor is strong in the top third (80% expression) and middle (65%) but fades to ~25% in the bottom third. The Implementation Guide (Z5) and Decision Room (Z6) feel like standard technical documentation rather than rooms in a refinery.

**Fix:** The brief's D-01 (Content-Register Reading) should include: "Even in CODE zones (Z5), the refinery metaphor persists in structural choices: code blocks are 'assembly stations,' checklists are 'quality control checkpoints,' troubleshooting is 'fault isolation.' These labels should appear in zone headers and component titles, not just as HTML comments."

**3. Visual Inventiveness (PA-67: PARTIAL)**
The page is editorially inventive (complexity ladder, factory zones) but visually conventional (standard hero + TOC + sections + code + footer). A 4/4 page has at least one visual move that the auditor has never seen before. The role card grid and the interstitial quote banner approach this but don't fully cross the line.

**Fix:** This is the hardest gap to address through pipeline changes. Visual inventiveness emerges from the builder's creative capacity, not from instructions. The closest enrichment is Rank 2 (Reference Page Injection) -- showing the builder WHAT inventive looks like increases the probability that it will attempt something novel. D-04 (Second-Half Moment) already instructs for this but the instruction is too prescriptive ("dark inversion block" + "layout rupture"). More creative latitude in D-04 might help: "Create a moment in the second half where the reader pauses and thinks 'I have not seen this layout pattern before.'"

**4. Zero POLISHED Defects**
The trailing void is a CSS bug. The cold color is a palette violation. The sub-threshold background deltas are a calibration error. ALL of these are mechanical failures, not compositional ones. A pipeline that catches these before submission (via mid-build gate checks or automated REFINE) would resolve this dimension entirely.

### The Answer: Pipeline Architecture Problem or Execution Quality Problem?

**BOTH, in distinct ways:**

- POLISHED defects (trailing void, cold color, responsive): **ARCHITECTURE problem.** A single-pass pipeline with no feedback loop will always produce some mechanical defects. An automated REFINE cycle or a template-driven start would eliminate this class.

- DESIGNED/PROPORTIONATE depth (deliberate plainness, metaphor persistence): **BRIEF quality problem.** The brief tells the builder to "create 6 zones with distinct character" but does not instruct "make one zone intentionally simple" or "sustain the metaphor in code zones." These are enrichments to the brief template and the disposition instructions.

- COHERENT vocabulary breaks (cold color, uniform blockquotes): **EXECUTION quality problem.** The builder made specific CSS decisions (using rgb(74,144,217) instead of a warm color, styling 6 blockquotes identically) that violated either soul constraints or compositional intelligence. Better worked examples and mid-build feedback would reduce these.

- INVENTIVENESS: **MODEL capability + brief problem.** This is the hardest to address because it depends on the builder's creative capacity. Opus is the right model. The enrichment path is: show more examples of inventive design, give more creative latitude in D-04, and reduce the cognitive load on construction (template) so the builder can invest more in composition.

### The Synthesis

The 3/4 -> 4/4 gap is approximately:
- 40% ARCHITECTURE (single-pass, no feedback, no template)
- 30% BRIEF ENRICHMENT (missing deliberate plainness instruction, weak metaphor persistence instruction, thin procedural examples)
- 20% EXECUTION QUALITY (specific CSS decisions that a feedback loop would catch)
- 10% MODEL CEILING (inventiveness that may or may not emerge from any LLM)

The most efficient path to 4/4:
1. Add automated REFINE cycle (Rank 1) -- addresses 20% execution quality + some architecture
2. Inject CSS reference patterns (Rank 2 + Rank 3) -- addresses 30% brief enrichment
3. Enrich disposition instructions for plainness and metaphor persistence -- addresses brief enrichment
4. Consider template-driven start (Alternative C) -- addresses 40% architecture

**Total investment:** ~8-12 hours of pipeline engineering.
**Expected outcome:** Reliable 3.5/4 with occasional 3.7-4.0/4. True 4/4 reliability would require the 3-pass architecture or template start.

---

## 6. RANKED ENRICHMENT SUMMARY

| Rank | Enrichment | Expected Impact | Effort | ROI |
|------|-----------|----------------|--------|-----|
| 1 | Automated REFINE cycle | +0.3-0.5 | 4-6 hrs | HIGHEST |
| 2 | CSS reference patterns (annotated snippets from CD-006) | +0.2-0.4 | 2-3 hrs | HIGH |
| 3 | Specific CSS pattern library in brief | +0.2-0.3 | 2-3 hrs | HIGH |
| 4 | Mid-build gate check (after Zone 3) | +0.1-0.3 | 3-4 hrs | MODERATE |
| 5 | Builder-facing worked examples (output reference) | +0.1-0.2 | 1-2 hrs | MODERATE |
| 6 | Multi-pass build (3-pass) | +0.2-0.4 | 6-8 hrs | MODERATE |
| 7 | Template-driven start | +0.3-0.5 | 8-12 hrs | MODERATE (highest ceiling but highest effort) |
| 8 | Brief enrichment: deliberate plainness + metaphor persistence | +0.1-0.2 | 1-2 hrs | HIGH |
| 9 | Builder-PA dialogue | +0.1-0.2 | 3-4 hrs | LOW |
| 10 | Constraint reduction | -0.1 to +0.1 | 1 hr | NEGATIVE/NEUTRAL |
| 11 | Longer builder prompts | -0.1 to +0.1 | 1 hr | LIKELY NEGATIVE |

### Quick Wins (< 3 hours, implementable in next pipeline run):
1. **Add "Builder Reference" appendix to brief** (30-50 lines of CSS patterns from CD-006)
2. **Enrich D-04 and D-06** with "one zone intentionally spare" instruction
3. **Add metaphor persistence instruction** to D-01 for CODE zones
4. **Inline 5 best color pairs from value-tables.md** into Tier 3 multi-coherence section

### Medium-Term (3-8 hours):
5. **Implement automated REFINE cycle** (orchestrator detects gate failures, spawns fix builder)
6. **Create CSS pattern library** (10-15 annotated patterns from CD-006 and this build)
7. **Implement mid-build gate check** (after Zone 3, calibration feedback only)

### Long-Term (8+ hours):
8. **Design template-driven start** (HTML scaffold with zone structure, components, responsive breakpoints)
9. **Implement 3-pass architecture** (blocked until experiment #21)

---

## 7. KEY INSIGHT: The "Construction vs Composition" Tax

The single most important finding from this analysis: **the builder spends a significant fraction of its cognitive budget on CONSTRUCTION (correct HTML structure, responsive breakpoints, accessibility landmarks, component integration, CSS reset) rather than COMPOSITION (zone differentiation, metaphor expression, designed moments, deliberate rhythm).**

Every BLOCKING and SIGNIFICANT defect in the verdict is a CONSTRUCTION failure:
- B1 (trailing void): CSS body/container sizing error
- B2 (cold color): Palette violation in one component
- S2 (bg deltas): Zone color values too close
- S3 (responsive): No distinct breakpoints

None of these are compositional failures. The builder demonstrably knows HOW to compose (5 design moments, named zone geography, consistent vocabulary, emotional arc). It fails on mechanical execution that a template or automated check would catch.

**The construction tax is approximately 20-30% of builder cognitive budget.** Removing it (via template or automated REFINE) would redirect that budget to composition, where the 3/4 -> 4/4 gap lives.

This is the pipeline's most important structural insight: **the builder is operating in COMPOSING mode (good) but is interrupted by CONSTRUCTION tasks (bad) that degrade its compositional continuity.** The solution is not to make the builder a better constructor -- it is to remove construction from the builder's scope.
