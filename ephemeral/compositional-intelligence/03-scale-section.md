# Scale 3: Section Scale -- Where Section-Level Mechanism Deployment Gets Lost

**Tracer Agent:** Section Scale Specialist
**Task:** #3 -- Trace where the SECTION SCALE (individual content sections, zone interiors, section-to-section transitions) gets lost in PV2
**Sources Read:** PV2-PIPELINE-DIAGRAM.md, tension-composition SKILL.md (1,700 lines), mechanism-catalog.md (1,049 lines)

---

## EXECUTIVE SUMMARY

The section scale is where mechanisms LIVE -- this is the scale at which a builder decides "Section 3 needs progressive-disclosure because it's densest" or "the transition from Section 2 to Section 3 should be a HARD CUT because the domain changes." PV2 has significant section-scale intelligence in its source materials but compresses it through three critical bottlenecks: (1) the TC planner outputs a section inventory that maps sections to zones but does NOT map mechanisms to sections, (2) the operational recipe's 9 phases are GLOBAL (apply to the whole page) not SECTIONAL (apply to each section with variation), and (3) the builder receives mechanism assignments at page level ("deploy per-category minimums") not section level ("Section 3 gets progressive-disclosure + spacing-compression because it's the densest technical section"). The result: mechanisms get applied uniformly rather than deployed per-section with compositional intent.

**Severity: HIGH -- This is the primary gap between "STYLED" (2/4) and "COMPOSED" (3/4).**

---

## 1. WHERE SECTION INTELLIGENCE EXISTS IN THE SOURCE MATERIALS

### 1.1 The TC Skill Has Section Awareness (But It's Shallow)

The TC skill (SKILL.md) has genuine section-level intelligence in three places:

**Phase 0C -- Section Identification (lines 59-65):**
```
For STANDARD and LONG content:
1. Identify natural sections by heading, topic shift, or mode change
2. Classify each: NARRATIVE / REFERENCE / CODE / DATA / MIXED
3. Flag sections with incompatible structural needs
```

This is section-level classification. The planner identifies that Section 1 is NARRATIVE, Section 2 is CODE, Section 3 is DATA. This is the TELESCOPE -- seeing sections with differentiated needs.

**Phase 4.8 -- Section-Aware Composition (lines 1536-1544):**
```
If Phase 0C flagged incompatible sections:
- Primary metaphor provides the through-line
- Section-level variations adjust density, border weight, background shade
- CODE sections: Preserve structure, apply styling only
- DATA sections: Use standard table/list components
- NARRATIVE sections: Full metaphorical treatment
```

This is section-level adaptation. Different section types get different treatment. But it is 8 lines out of 1,700. It is a MENTION, not a PROTOCOL.

**Phase 4.2B -- Pacing Prediction Heuristic (lines 1262-1301):**
```
1. Section count: How many sections will the content produce?
2. Breathing zone model: Does the metaphor call for empty transitions?
3. Element uniformity: Does the metaphor produce same-shaped elements?
4. Dramatic moment placement: 60-80% of total page height
5. Transition model check: For each section boundary
```

This is section-level pacing awareness. It asks about individual sections and their boundaries. But it produces a RISK ASSESSMENT ("Pacing Risk: MODERATE"), not a SECTION-SPECIFIC DEPLOYMENT PLAN.

### 1.2 The Mechanism Catalog Has Section Mappings (But They're Inert)

The mechanism catalog (mechanism-catalog.md) contains rich section-level intelligence:

**Zone Mappings for Mechanism #7 (Zone Background Differentiation, lines 386-399):**

| Zone Color | Content Type | When to Use |
|------------|-------------|-------------|
| Sparse (#FEF9F5) | Introductory, opening | First section, generous padding |
| Dense (#FFFFFF) | Technical, detailed | Deep-dive sections, compressed padding |
| Breathing (#FAF5ED) | Procedural, transitional | How-to guides, moderate padding |
| Bedrock (#1A1A1A) | Structural landmarks | Header, footer -- NOT body content |

This maps section TYPES to zone COLORS. It is section-level deployment intelligence. But it sits in a reference file -- it does not appear in the build plan, the recipe, or the builder's instructions as "Section 3 = Dense zone because it's the technical deep-dive."

**Application Modes for Mechanism #1 (Border-Weight Gradient, lines 165-177):**

Two distinct modes:
- PROGRESSIVE MODE: For content with natural stratification (continuous gradient)
- DISCRETE MODE: For categorical differentiation (distinct types)

The catalog specifies that the SAME mechanism should be deployed DIFFERENTLY depending on the section's content structure. This is section-level deployment intelligence. But the builder receives "deploy border-weight gradient" without knowing "Section 2 uses progressive mode because it has confidence levels; Section 5 uses discrete mode because it has categorical callouts."

**Transition Grammar (lines 944-1026):**

Three transition types (HARD CUT, SPACING SHIFT, CHECKPOINT) with a section-boundary selection rule:

```
For every pair of adjacent sections:
Q: "Is the content on either side from the SAME domain?"
- NO -> Type 1: HARD CUT
- YES, different intensity -> Type 2: SPACING SHIFT
- YES, different phase -> Type 3: CHECKPOINT
```

This is section-boundary intelligence. It maps the RELATIONSHIP between adjacent sections to a specific transition type. But the selection rule requires knowing what each section IS -- its domain, intensity, phase. This information lives in the TC planner's head during Phase 0C but does NOT survive into the build plan or recipe.

### 1.3 The Restraint Protocol Has Section Distribution Rules (But They're Page-Level)

**Mechanism Density Cap (catalog line 1039):**
```
No single viewport-height section may contain MORE THAN 4 distinct
mechanisms operating simultaneously.
```

**Distribution Requirement (catalog line 1049):**
```
Every third of the page (0-33%, 33-66%, 66-100% by scroll depth)
must contain at least 2 distinct mechanisms.
```

These rules are ABOUT sections but operate at PAGE level. They tell the builder "don't concentrate mechanisms" but not "Section 3 needs progressive-disclosure because it's densest."

---

## 2. THE THREE COMPRESSION BOTTLENECKS

### Bottleneck 1: TC Build Plan Output Lacks Section-Mechanism Mapping

The PV2 pipeline diagram (lines 151-160) specifies the TC planner's output:

```
_build-plan.md containing:
  - Zone count (e.g., 4)
  - Section inventory (which sections -> which zones)
  - Mechanism deployment (Spatial: progressive-disclosure,
    Temporal: scroll-reveal, Material: paper-texture, etc.)
  - Background colors per zone (with >= 15 RGB delta)
  - Isomorphism table (if metaphor)
  - Transition plan (>= 3 types: SMOOTH/BRIDGE/BREATHING)
  - Builder warnings
```

Notice: the section inventory maps sections to ZONES. The mechanism deployment lists mechanisms by CATEGORY. These are PARALLEL but UNCONNECTED. The build plan says:

```
Zone 1: Sections 1-2 (Introduction)
Zone 2: Sections 3-5 (Technical Core)
Zone 3: Sections 6-7 (Application)
Zone 4: Section 8 (Resolution)

Mechanisms: Spatial: dense/sparse alternation. Hierarchy: border-weight gradient.
Component: 2-zone DNA. Depth: zone backgrounds. Structure: progressive disclosure.
```

What is MISSING:

```
Section 3 (API Reference): DENSE zone, deploy progressive-disclosure (#12)
  because this is the longest section with nested complexity. Use border-weight
  discrete mode (#1D) for categorical callouts. Transition from Section 2:
  HARD CUT (domain changes from narrative to reference).

Section 4 (Configuration): DENSE zone, deploy data-table (#18) because
  this section is tabular. Use spacing-compression (#4) to pack configuration
  options densely. Transition from Section 3: SPACING SHIFT (same domain,
  increasing intensity).

Section 5 (Troubleshooting): BREATHING zone, deploy 2-zone DNA (#2) for
  FAQ-style callouts. Transition from Section 4: CHECKPOINT (phase change
  from setup to verification).
```

The missing artifact is a SECTION-MECHANISM DEPLOYMENT TABLE -- a per-section specification of which mechanisms to deploy, which application mode to use, and why THIS mechanism for THIS section.

### Bottleneck 2: The Operational Recipe's 9 Phases Are Global, Not Sectional

The PV2 recipe (diagram lines 353-494) has 9 sequential phases:

```
Phase 0: Content Analysis + Zone Architecture
Phase 1: HTML Skeleton
Phase 2: CSS Reset + Soul + Base Typography
Phase 3: Zone Backgrounds
Phase 4: Structural Borders + Dividers + Transitions
Phase 5: Typography Zones
Phase 6: Element-Level Richness
Phase 7: Accessibility
Phase 8: Verification + Cascade Value Table
```

These phases are GLOBAL operations. Phase 3 says "apply background colors per zone from build plan." Phase 4 says "border-left on callouts, horizontal rules between major sections." Phase 6 says "hover states, selection styling, link treatments, table striping."

What these phases do NOT say:

```
Phase 3: Zone Backgrounds
  Zone 1 (Sections 1-2): #fefcf3 (sparse -- opening/overview content)
  Zone 2 (Sections 3-5): #f5f0e8 (dense -- technical core, 15+ RGB delta from Zone 1)
  Zone 3 (Sections 6-7): #faf5ed (breathing -- application/how-to content)
  Zone 4 (Section 8): #1a1a1a (bedrock -- resolution/conclusion)

Phase 4: Structural Borders + Transitions
  Section 2->3 boundary: HARD CUT (3px primary border -- domain changes)
  Section 3->4 boundary: SPACING SHIFT (no border, density increase only)
  Section 4->5 boundary: CHECKPOINT (mono label "VERIFICATION PHASE")
  Section 5->6 boundary: SPACING SHIFT (density decrease, expanding)
  Section 6->7 boundary: HARD CUT (domain changes from application to synthesis)
  Section 7->8 boundary: SPACING SHIFT (compression toward conclusion)

Phase 6: Element-Level Richness
  Section 3 (API Reference): progressive-disclosure (#12) -- nested details
  Section 4 (Configuration): data-table (#18) -- configuration grid
  Section 5 (Troubleshooting): 2-zone DNA (#2) -- FAQ callouts
  Section 6 (Examples): code-block (#17) + bento-grid (#15) -- side-by-side
```

The recipe treats the whole page as one undifferentiated substrate. It sequences CSS PROPERTY TYPES (backgrounds, then borders, then typography), not CONTENT SECTIONS (Section 3 gets these mechanisms because of its content character). The builder applies backgrounds globally, borders globally, typography globally -- producing uniform application where section-specific variation was intended.

### Bottleneck 3: Builder Checkpoints Don't Verify Section-Level Variation

The PV2 diagram specifies 5 mandatory checkpoints (Phases 0, 1, 3, 4, 8) where the planner reviews the builder's work. But none of these checkpoints ask:

```
"Does Section 3 look DIFFERENT from Section 2?"
"Are mechanisms deployed DIFFERENTLY across sections?"
"Can you SEE which section is densest by looking at it?"
```

Phase 3 checkpoint asks: "Can you SEE the zone boundaries without borders?" This is a ZONE-level question, not a section-level question. A page can pass this check with visible zone boundaries while every section within Zone 2 looks identical to every other section within Zone 2.

Phase 8 verification includes a Cascade Value Table that records "computed CSS at EVERY section boundary." This is the closest the pipeline comes to section-level verification. But it measures CSS VALUES at boundaries, not COMPOSITIONAL INTENT. It catches "the backgrounds didn't change" but not "Section 3 should have been dense and it's the same density as Section 2."

---

## 3. WHAT THE BUILDER ACTUALLY RECEIVES (SECTION SCALE TRACE)

Following a request through PV2 from entry to builder execution:

**User input:** A markdown file with 8 sections of varying content types.

**Wave 0 (TC Planner) produces _build-plan.md:**
- Zone count: 4
- Section inventory: "Sections 1-2 -> Zone 1, Sections 3-5 -> Zone 2, Sections 6-7 -> Zone 3, Section 8 -> Zone 4"
- Mechanism deployment: "S: dense/sparse alternation. H: border-weight gradient. C: 2-zone DNA. D: zone backgrounds. N: progressive disclosure."
- Background colors: "#fefcf3, #f0ebe3, #faf5ed, #1a1a1a"
- Transition plan: "3 types: HARD CUT at Zone boundaries, SPACING SHIFT within zones, CHECKPOINT at phase transitions"

**Section-level intelligence at this point:**
- Section types are known (from Phase 0C) but NOT written into the build plan
- Mechanism-to-section mapping exists in the planner's reasoning but NOT in the deliverable
- Transition types are listed generically, not per-boundary

**Wave 0.9 (Handoff Gate) checks:**
- Zone count 2-5? YES
- BG colors >= 15 RGB delta? YES
- >= 2 grid layouts? YES
- Per-category mechs met? YES
- >= 3 transition types planned? YES

**Section-level intelligence at this point:**
- Zero. The handoff gate checks PAGE-level structural properties.
- A plan with identical treatment for all 8 sections would PASS this gate.

**Wave 1 (Builder) receives:**
1. operational-recipe.md (global 9-phase sequence)
2. _build-plan.md (zones + category-level mechanisms)
3. tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md

**What the builder KNOWS about Section 3:**
- It belongs to Zone 2
- Zone 2's background is #f0ebe3
- The page deploys progressive-disclosure (from the mechanism list)
- The mechanism catalog has a Usage Guidance flowchart

**What the builder does NOT KNOW about Section 3:**
- That it's the densest section (content character analysis is lost)
- That it should specifically use progressive-disclosure (mechanism routing is lost)
- That the transition FROM Section 2 should be a HARD CUT (per-boundary assignment is lost)
- That border-weight should use DISCRETE mode here, not PROGRESSIVE mode (application mode routing is lost)
- That it should have tighter padding than Section 2 (section-specific density is lost)

**What the builder DOES:**
The builder follows the recipe phases globally:
- Phase 3: Apply Zone 2's background to Sections 3, 4, and 5 uniformly
- Phase 4: Add borders and transitions based on the generic transition plan
- Phase 5: Apply typography zones globally (display/body/detail)
- Phase 6: Deploy mechanisms from the category list

The builder applies mechanisms based on the recipe's PROPERTY-SEQUENCE logic: first all backgrounds, then all borders, then all typography, then all richness. Each mechanism is deployed wherever the builder sees fit, without section-specific guidance.

**Result:** Sections 3, 4, and 5 all share the same background, similar borders, similar typography weight, and similar mechanism density. The builder has no basis for differentiating them because the build plan treats them as one zone.

---

## 4. WHERE SECTION INTELLIGENCE GETS LOST (3 SPECIFIC GAPS)

### Gap S3-1: The TC Planner's Section Analysis Does Not Survive Into the Build Plan

**Location:** Between TC Phase 0C (section identification) and the _build-plan.md deliverable.

**What happens:** The TC planner runs Phase 0C, classifying each section by type (NARRATIVE/REFERENCE/CODE/DATA/MIXED) and flagging incompatible sections. This classification EXISTS in the planner's reasoning chain. But the build plan output format (PV2 diagram lines 151-160) specifies:
- Zone count
- Section inventory (section -> zone mapping)
- Mechanism deployment (by category)
- Background colors (by zone)
- Transition plan (types available)

The section TYPE classification is not a required field in the build plan. The section-to-zone mapping preserves GROUPING but loses CHARACTER. "Sections 3-5 -> Zone 2" says they're in the same zone but not that Section 3 is REFERENCE, Section 4 is DATA, and Section 5 is NARRATIVE.

**Fix potential:** Add a required "Section Character Table" to the build plan:

```
SECTION CHARACTER TABLE:
| Section | Type | Density | Key Mechanism | Transition From Previous |
|---------|------|---------|---------------|-------------------------|
| S1 | NARRATIVE | sparse | zone-bg (#7) | -- (opening) |
| S2 | NARRATIVE | moderate | border-weight progressive (#1P) | SPACING SHIFT |
| S3 | REFERENCE | dense | progressive-disclosure (#12) | HARD CUT |
| S4 | DATA | dense | data-table (#18) | SPACING SHIFT |
| S5 | NARRATIVE | moderate | 2-zone DNA (#2) | CHECKPOINT |
| S6 | CODE | moderate | code-block (#17) + bento (#15) | HARD CUT |
| S7 | NARRATIVE | sparse | width-variation (#6) | SPACING SHIFT |
| S8 | NARRATIVE | sparse | drop-cap (#16) | SPACING SHIFT |
```

### Gap S3-2: The Recipe Phases Are Property-Sequenced, Not Section-Sequenced

**Location:** The operational recipe's 9-phase structure.

**What happens:** The recipe tells the builder to do all backgrounds (Phase 3), then all borders (Phase 4), then all typography (Phase 5). This is CSS-PROPERTY sequencing. The builder thinks about backgrounds for the whole page, then borders for the whole page, then typography for the whole page.

What SHOULD happen: The builder should think about Section 3 as a whole -- its background AND borders AND typography AND mechanisms together, as a compositional unit. Then Section 4 as a different compositional unit.

**Why this matters:** When you apply backgrounds globally, you produce uniform backgrounds within a zone. When you apply backgrounds per-section, you produce gradients within a zone. The difference between "Sections 3-5 all get #f0ebe3" and "Section 3 gets #f0ebe3, Section 4 gets #ede8e0, Section 5 gets #f0ebe3" -- a subtle gradient that encodes "dense->denser->breathing" within the zone.

**Fix potential:** Add a SECTION COMPOSITION pass to the recipe after the global phases:

```
Phase 6.5: Section-Level Composition
  For EACH section in the Section Character Table:
  1. Read the section's Type and Density from the table
  2. Verify background matches the intended density
  3. Verify mechanism(s) listed for this section are deployed
  4. Verify the transition FROM the previous section matches the table
  5. "Can you SEE how this section differs from its neighbors?"
```

### Gap S3-3: No Section-Level Verification in Gates or PA

**Location:** Wave 2 (Dual-Layer Verification).

**What happens:** The 12 programmatic gates (SC-01 through SC-12) check:
- Container width, soul properties, font trinity, warm palette, no extremes, ARIA landmarks, skip link, component library, background delta, stacked gap, font-size zones, zone count

None of these gates check WITHIN-ZONE section variation. SC-09 checks background delta BETWEEN zones (>= 15 RGB adjacent). It does not check whether sections within the same zone have any differentiation.

The PA auditors see screenshots. They CAN detect "Sections 3, 4, and 5 all look the same." But they are not DIRECTED to look for this. The 48 PA questions include:
- PA-05: "Does this feel DESIGNED?" (holistic)
- PA-17: "Is there visual rhythm or random?" (page-level)
- PA-41: "Repetition monotony?" (page-level)

None ask: "Do individual sections within the same zone have distinct visual character?" or "Can you identify which section is the technical reference by visual treatment alone?"

**Fix potential:** Add section-level gates and PA questions:

```
SC-13: Within-zone section differentiation
  For each zone with 2+ sections:
  Measure: Do sections differ in at least 1 CSS channel
  (padding, border presence, typography weight, background shade)?
  Threshold: >= 1 channel differs between adjacent sections in same zone

PA-49: "Can you identify the densest/most technical section by
  visual treatment alone, without reading the content?"
PA-50: "Do sections within the same zone feel like different
  movements of the same piece, or identical copies?"
```

---

## 5. THE FUNDAMENTAL ARCHITECTURAL ISSUE

The section scale sits at the intersection of the TC planner's TELESCOPIC view (content character, section types, density mapping) and the builder's MICROSCOPIC view (CSS properties, pixel values, component classes). The planner sees sections as semantic units with different characters. The builder sees sections as containers receiving CSS.

**The problem is a HANDOFF FORMAT problem.** The build plan transmits:
- Zones (groups of sections) -- too coarse
- Mechanisms (by category) -- too abstract
- Transitions (by type) -- too generic

It does NOT transmit:
- Section character (what makes Section 3 different from Section 4)
- Mechanism-to-section routing (which mechanism goes where and why)
- Per-boundary transition assignment (this specific boundary gets this specific treatment)
- Within-zone density gradients (sections in the same zone should still differ)

This is the same "50:1 compression" problem identified in the master retrospective, but focused specifically on the section scale. The TC planner performs rich section-level analysis during Phase 0C, then compresses it to a zone-level summary in the build plan. The builder receives zones, not sections. The 50:1 compression from planner reasoning to builder instructions causes section-level intelligence to evaporate at the handoff.

---

## 6. EVIDENCE FROM PRIOR EXPERIMENTS

### Flagship Experiment (07-intentionality.html)

The flagship had 6 whitespace voids (210-276px each). These voids appeared at SECTION BOUNDARIES within zones -- exactly the location where section-level transition intelligence should have specified HARD CUT or SPACING SHIFT or CHECKPOINT. Instead, the builder used empty space.

9/9 PA auditors flagged the voids. The dominant finding was not "wrong background color" or "wrong mechanism" but "sections within zones are undifferentiated." The flagship had 14 mechanisms in its CSS but they were concentrated in the first 20% of scroll depth, with the remaining 80% receiving uniform treatment.

This is the section-scale failure: the builder deployed mechanisms GLOBALLY (front-loaded in the opening sections) rather than DISTRIBUTED across sections per their content character.

### Middle Experiment (SUCCESS but with Section-Scale Limitations)

The middle experiment achieved PA-05 DESIGNED (4/4). But auditors noted "spacing patterns repeat without variation" and "metronomic rather than musical." The experiment deployed 12 mechanisms across 5 categories -- good breadth -- but the RHYTHM of deployment was uniform. Every section got similar spacing, similar border treatment, similar density.

The missing footer (PA-13: "page just stops") was a SECTION-LEVEL failure: the final section had no compositional closure. This became the Landmark Gate (Phase 4.7B). But it is symptomatic: the builder did not think of sections as individual compositional units with beginnings, middles, and ends.

### CD-006 (39/40 -- The Crown Jewel)

CD-006 scored 39/40. It was built by an Opus agent with full context, iterating directly. What CD-006 has that pipeline output lacks: EVERY section has a distinct visual character. The "density" section LOOKS dense. The "combination" section LOOKS combinatorial. The transitions between sections use different types (hard cuts between domains, spacing shifts within domains).

CD-006 was built WITHOUT the pipeline, WITHOUT the recipe, WITHOUT the build plan. The builder had the FULL compositional intelligence and made per-section decisions in real time. The pipeline's job is to replicate this decision-making through structured handoff. At the section scale, it fails.

---

## 7. RECOMMENDATIONS

### R1: Mandate a Section-Mechanism Deployment Table in the Build Plan (HIGHEST PRIORITY)

Add to the TC planner's _build-plan.md output format:

```
SECTION DEPLOYMENT TABLE:
| # | Section Title | Type | Zone | Density | Primary Mechanism(s) | Application Mode | Transition From Previous |
|---|--------------|------|------|---------|---------------------|-----------------|------------------------|
| 1 | Introduction | NARRATIVE | 1 | sparse | zone-bg (#7) | -- | -- (opening) |
| 2 | Architecture | NARRATIVE | 1 | moderate | border-weight (#1) | progressive | SPACING SHIFT |
| 3 | API Reference | REFERENCE | 2 | dense | prog-disclosure (#12) | -- | HARD CUT |
```

This is the SECTION-SCALE TELESCOPE -- the planner's per-section intelligence transmitted directly to the builder.

### R2: Add a Section Composition Phase to the Recipe (HIGH)

After the global CSS phases (Phases 2-6), add Phase 6.5: Section-Level Composition.

The builder reads the Section Deployment Table and verifies:
1. Each section's mechanisms are deployed
2. Each section's density matches the plan
3. Each boundary's transition type is implemented
4. "Can you SEE how each section differs from its neighbors?"

### R3: Add Section-Level Programmatic Gate (MEDIUM)

SC-13: Within-zone section differentiation. For each zone containing 2+ sections, measure whether adjacent sections differ in at least 1 CSS channel. This catches the "uniform treatment within zones" failure.

### R4: Add Section-Level PA Questions (MEDIUM)

PA-49: "Can you identify the densest section by visual treatment alone?"
PA-50: "Do sections within the same zone feel different from each other?"

### R5: Restructure Recipe from Property-Sequence to Section-Sequence (LONG-TERM)

Instead of: Phase 3 (all backgrounds) -> Phase 4 (all borders) -> Phase 5 (all typography)
Consider: Section 1 (all properties) -> Section 2 (all properties) -> Section 3 (all properties)

This is architecturally ambitious but would force the builder to think about each section as a compositional unit rather than applying CSS properties globally.

---

## 8. THE CORE INSIGHT

**Section-scale intelligence exists in the TC skill and mechanism catalog. It does not survive the handoff to the builder.**

The TC planner classifies sections (Phase 0C), assigns mechanisms to categories, plans transition types. The mechanism catalog has zone mappings, application modes, restraint distribution rules. The transition grammar has per-boundary selection logic.

But the BUILD PLAN compresses sections to zones. The RECIPE sequences by CSS property, not by section. The GATES check page-level properties, not section-level variation. The PA asks about holistic impression, not section-specific deployment.

The section scale is where "STYLED" becomes "COMPOSED." A page with uniform backgrounds and uniform borders and uniform typography across all sections is STYLED (2/4). A page where Section 3 is visibly denser, Section 5 is visibly lighter, transitions between sections vary, and you can FEEL the content's character in each section's visual treatment -- that is COMPOSED (3/4).

The fix is not adding more mechanisms (the catalog has 18 -- plenty). The fix is adding a SECTION-LEVEL ROUTING ARTIFACT to the pipeline: a per-section specification of what goes where and why, produced by the planner and consumed by the builder. This is the missing link between content understanding (telescope) and CSS execution (microscope).

---

## APPENDIX: Section-Scale Trace Summary

| Pipeline Stage | Section Intelligence Present? | What's Lost? |
|---|---|---|
| TC Phase 0C (Section ID) | YES -- classifies sections by type | Classification does not survive into build plan |
| TC Phase 1-3 (Tension/Metaphor) | PARTIAL -- metaphor has section implications | Implications are in planner's head, not in deliverable |
| TC Build Plan Output | PARTIAL -- section-to-zone mapping exists | Mechanism-to-section routing lost, density per section lost |
| Wave 0.9 Handoff Gate | NO -- checks page-level properties | No section-level checks |
| Operational Recipe Phases 0-8 | NO -- phases are global CSS property sequences | No per-section composition phase |
| Builder Checkpoints | NO -- ask zone-level questions | No section-level variation questions |
| Wave 2 Programmatic Gates | NO -- SC-01 through SC-12 are page/zone level | No within-zone section differentiation gate |
| Wave 2 PA Audit | INDIRECT -- auditors may notice section uniformity | No directed section-level PA questions |
| Wave 3 Fix Cycle | NO -- fixes top-3 issues from PA | Section-level issues may surface but are not systematically caught |
