# Specialist 3: Case Study Analysis for Molly Cantillon's Personal Panopticon

## Affinity Summary

| Case Study | Affinity Type | Strength | Key Technique |
|---|---|---|---|
| DD-004 (Layers) | Content-Shape + Mechanism-Deployment | HIGH | Zone background progression, spacing compression gradient, border-weight hierarchy |
| OD-004 (Confidence) | Tension-Resolution + Mechanism-Deployment | HIGH | Border-weight gradient encoding epistemic weight, inverse density-confidence correlation |
| DD-003 (Islands) | Content-Shape + Mechanism-Deployment | HIGH | Archipelago grouping for parallel items, extreme whitespace isolation, self-contained units |
| CD-001 (Reasoning Inside Code) | Content-Shape + Mechanism-Deployment | MEDIUM | CRESCENDO density for narrative arc, velocity interleaving, BRIDGE transitions |
| CD-005 (Multi-Axis Transition) | Mechanism-Deployment | MEDIUM | Sequential axis deployment, SMOOTH/BRIDGE transition grammar, WAVE density oscillation |

---

## Case Study 1: DD-004 (Layers) — Content-Shape + Mechanism-Deployment Affinity

### Affinity Rationale

The Panopticon content has a 5-zone architecture (Datum Point / Survey Grid / Field Notes / Contour Map / Projection) that moves through radically different density registers -- from sparse philosophy to dense technical code to compressed dark philosophical terrain and back to open tutorial. DD-004 FACED the same structural challenge: content with natural depth stratification requiring visually distinct zones that encode different reading modes (atmosphere/surface/topsoil/subsoil/bedrock). The TC brief's zone progression (warm cream to white to earthy tan to near-black to cream) maps directly to DD-004's background progression principle, though the arc is different (DD-004 descends continuously; the Panopticon descends then RETURNS to light).

### Process Extraction

DD-004 FACED the tension of serving multiple audience depths within a single content structure. It CONSIDERED ocean depth zones (rejected: continuous, not discrete), building floors (rejected: ascending implies progress, but this content needs descending = more detail), and geological strata (SELECTED: encodes depth + time/stability + density simultaneously). The key DISCOVERY was that spacing compression (80px to 16px) works as a perceptual encoding of "pressure" -- deeper zones feel heavier, more compressed. DD-004 SEQUENCED its decisions: first identify the depth axis (what varies?), then map content groupings to strata count, then derive background progression, then derive spacing compression, then derive border-weight encoding. The MECHANISM selection came last, not first.

For the Panopticon build: the content does not have a simple linear descent. It descends into dark philosophical terrain at the Contour Map zone (~60-70% scroll depth), then RETURNS to light in the Projection zone. DD-004's continuous descent must be adapted to a descent-and-return arc. The builder should study how DD-004 derived its compression values from content purpose (not arbitrary), then apply the same derivation logic to the Panopticon's 5-zone arc.

### Structural Logic Extraction

**Content logic:** DD-004's content served multiple audience depths simultaneously (expert: headline + code, novice: full explanatory stack). The 5-layer structure encoded expertise as spatial depth -- deeper = more detail, higher cognitive load.

**Spatial form:** Vertical stacking with zone differentiation (standard vertical, but with 5 visually distinct zones encoded through background color, spacing, and border-weight). Not a grid. Not a split. Vertical flow with atmospheric shifts.

**Why it works better than uniform vertical:** Uniform vertical stacking treats all content as equal density. Zone differentiation creates a visual "weather system" -- the reader KNOWS they have moved into a different mode because the atmosphere has changed (background shifts, spacing compresses, borders thicken). This is critical for the Panopticon, which transitions between philosophy, taxonomy, code, dialectics, and tutorial.

**Trigger signal for other builds:** Content with 3+ distinct density registers (e.g., sparse philosophical + moderate taxonomic + dense technical + compressed dialectical). Signal words: "parts," "phases," "modes," "registers," "zones."

### Adapted CSS

```css
/* Technique: Zone background progression encoding survey descent-and-return */
/* Source: DD-004 layers, adapted for cartographic survey station arc */
/* DD-004 descends continuously (light -> dark). Panopticon descends then returns. */
.zone--datum-point {
  background: var(--color-bg);            /* #FEF9F5 warm cream -- open field */
  padding: var(--space-16) var(--space-6); /* 64px 24px -- generous, the field before survey begins */
}
.zone--survey-grid {
  background: #FFFFFF;                     /* Clinical white -- drafting table precision */
  padding: var(--space-12) var(--space-6); /* 48px 24px -- structured, grids need tighter spacing */
}
.zone--field-notes {
  background: #FAF5ED;                     /* Earthy tan -- surveyor's notebook stained with use */
  padding: var(--space-8) var(--space-6);  /* 32px 24px -- dense technical reference */
}
.zone--contour-map {
  background: var(--color-text);           /* #1A1A1A near-black -- deep terrain, contour lines compress */
  color: var(--color-bg);                  /* Inverted text for dark zone */
  padding: var(--space-8) var(--space-6);  /* 32px 24px -- dense but varied philosophical terrain */
}
.zone--projection {
  background: var(--color-bg);             /* Return to cream -- opening back out */
  padding: var(--space-12) var(--space-6); /* 48px 24px -- reader becomes surveyor, needs room */
}

/* Technique: Spacing compression encoding depth within zones */
/* Source: DD-004 geological compression (80px -> 16px), adapted for survey zones */
/* The Panopticon compresses INTO the contour map, then EXPANDS back out */
.zone--datum-point .section { margin-bottom: var(--space-16); } /* 64px between sections -- sparse */
.zone--survey-grid .section { margin-bottom: var(--space-10); } /* 40px -- moderate structure */
.zone--field-notes .section { margin-bottom: var(--space-8); }  /* 32px -- tight notebook entries */
.zone--contour-map .section { margin-bottom: var(--space-8); }  /* 32px -- dense philosophical terrain */
.zone--projection .section { margin-bottom: var(--space-12); }  /* 48px -- opening, invitation */
```

### Reusable vs Non-Reusable

**REUSABLE:**
- Zone background progression (5-color arc encoding reading mode shifts)
- Spacing compression gradient (padding decreases with density increase)
- The PRINCIPLE of descent-and-return (not DD-004's continuous descent)

**NON-REUSABLE:**
- DD-004's geological vocabulary (atmosphere/surface/topsoil/subsoil/bedrock)
- DD-004's continuous light-to-dark progression (Panopticon goes light-to-dark-to-light)
- DD-004's 5 specific strata count (Panopticon has 5 zones but for different reasons)
- DD-004's expert/novice path concept (Panopticon is a linear narrative, not multi-audience)

---

## Case Study 2: OD-004 (Confidence) — Tension-Resolution + Mechanism-Deployment Affinity

### Affinity Rationale

The Panopticon content has a graduated trust structure. The TC brief identifies TRUST as a high-yield axis: extraordinary claims ("borderline unfair," "attention span of a thousand clones," "fully autonomous customer support") need calibrated confidence encoding. The content oscillates between radical empowerment and existential warning -- the Goodhart's Law caution, the prison objection, the Anthropic trade-off. OD-004 FACED the same challenge: content where epistemic status varies from established to speculative, and readers need visual encoding of confidence to calibrate their own trust. The border-weight gradient technique is directly transferable: the Panopticon content has claims at different confidence levels (proven architecture vs. philosophical speculation vs. open questions).

### Process Extraction

OD-004 FACED the tension of content with variable epistemic status -- some claims backed by production evidence, others speculative. It CONSIDERED confidence percentages (rejected: false precision), traffic lights (rejected: only 3 levels, implies moral judgment), and geological core sample (SELECTED: encodes BOTH depth and stability simultaneously). The DISCOVERY was that border-weight gradient (4px/3px/2px/1px) maps intuitively to confidence levels because visual weight IS epistemic weight -- heavier borders feel more certain. OD-004 also DISCOVERED inverse density-confidence correlation: certain knowledge is SPARSE (few words needed -- assertions), uncertain knowledge is DENSE (many qualifiers, hedges, caveats needed).

For the Panopticon build: the content has a natural confidence gradient. The architecture description (8 domains, filesystem-as-memory) is established practice. The philosophical claims (self-legibility as liberation, reversing institutional surveillance) are interpretive. The warnings (Goodhart's Law, self-imprisonment risk) are speculative counterarguments. Border-weight encoding can distinguish the surveyor's ESTABLISHED measurements (thick borders) from INTERPRETIVE projections (thinner borders) -- mapping directly to the cartographic metaphor where triangulated positions are more certain than extrapolated contour lines.

### Structural Logic Extraction

**Content logic:** OD-004 organized content by epistemic status (how confident should the reader be in this claim?). 4 natural groupings emerged from the content's own confidence structure.

**Spatial form:** Vertical stacking with border-weight differentiation. Standard single-column, but each section carries visual weight proportional to its confidence level.

**Why it works better than uniform treatment:** Uniform borders and spacing treat all claims as equally certain. Border-weight differentiation lets the reader visually SCAN for confidence level -- 4px sections are bedrock facts, 1px sections are open questions. The reader develops calibrated trust without needing explicit "confidence: high/low" labels.

**Trigger signal for other builds:** Content mixing established facts with speculative claims, recommendations with open questions, proven techniques with experimental approaches. Signal words: "might," "could," "established," "emerging," "proven," "speculative," "open question."

### Adapted CSS

```css
/* Technique: Border-weight encoding confidence-as-survey-precision */
/* Source: OD-004 geological confidence, adapted for cartographic survey station */
/* In cartography: triangulated positions are precise (heavy mark), */
/* extrapolated contours are approximate (light mark), */
/* unmapped territory is the lightest marking. */

/* Established architecture (8-domain taxonomy, filesystem-as-memory) */
.survey-mark--triangulated {
  border-left: 4px solid var(--color-text);
  /* Maximum visual weight = maximum epistemic weight. */
  /* These are MEASURED positions -- proven in production. */
}

/* Demonstrated results ($2000 subscriptions, autonomous support) */
.survey-mark--measured {
  border-left: 3px solid var(--color-text);
  /* 75% weight = reported results, single-source evidence. */
  /* Cantillon's proof points -- real but anecdotal. */
}

/* Philosophical interpretation (self-legibility thesis, panopticon inversion) */
.survey-mark--contour {
  border-left: 1px solid var(--color-text-secondary);
  /* Minimum weight = interpretive mapping. */
  /* Contour lines are the cartographer's INFERENCE, not direct measurement. */
  /* In the dark contour-map zone, these marks become light lines on dark ground. */
}

/* Technique: Inverse density-confidence for cartographic register */
/* Source: OD-004 discovery -- certain claims need fewer words */
.survey-mark--triangulated p {
  line-height: 1.6;
  /* Established knowledge can be stated concisely -- reader trusts it. */
}
.survey-mark--contour p {
  line-height: 1.8;
  /* Speculative terrain needs more breathing room -- reader needs space */
  /* to evaluate, not just absorb. The wider line-height is the visual */
  /* equivalent of "take this with appropriate caution." */
}
```

### Reusable vs Non-Reusable

**REUSABLE:**
- Border-weight gradient encoding semantic levels (4px/3px/1px -- technique transfers to any hierarchy)
- Inverse density-confidence correlation (sparse for certain, dense for uncertain)
- The PRINCIPLE that visual weight encodes epistemic weight

**NON-REUSABLE:**
- OD-004's geological vocabulary (stratum, bedrock, topsoil)
- OD-004's 4-layer confidence structure (Panopticon may need 3 levels, not 4)
- OD-004's confidence filter tabs (not applicable to narrative content)
- OD-004's continuous descent (Panopticon has an arc, not a descent)

---

## Case Study 3: DD-003 (Islands) — Content-Shape + Mechanism-Deployment Affinity

### Affinity Rationale

The Panopticon content's defining parallel structure is the 8-domain taxonomy (nox, metrics, email, growth, trades, health, writing, personal). The TC brief identifies this as the strongest candidate for non-standard layout: "eight parallel, independent items with a clean 4+4 subdivision." DD-003 FACED an analogous structural challenge: 4 self-contained database types that are conceptually parallel (not sequential), where readers need to see ALL options before drilling into any one. The island/archipelago pattern -- bounded clusters surrounded by calm space -- maps to the Panopticon's domain architecture where each domain is an isolated, self-contained compartment. The TC brief's creative invitation #2 explicitly suggests "bento-style arrangement where each domain is a bounded quadrant of the survey grid."

### Process Extraction

DD-003 FACED the tension of content with independent modules that do NOT build on each other. It CONSIDERED city blocks (rejected: districts are connected by streets, but domains are ISOLATED), museum gallery rooms (rejected: rooms are constrained within a building, but domains FLOAT independently), and tidal pools/islands (SELECTED: isolated, self-contained, surrounded by calm ocean space). The key DISCOVERY was that extreme whitespace (80px+) between clusters creates visual isolation WITHOUT requiring borders or explicit separators -- the "ocean" is just empty space. DD-003 SEQUENCED: first identify independence (are items truly parallel?), then determine cluster count (content-driven), then create calm separation (whitespace amount), then consider sub-grouping (archipelago for related pairs).

For the Panopticon build: the 8 domains are genuinely parallel and independent. They have a clean 4+4 subdivision (4 work, 4 life). The archipelago grouping mechanism is directly transferable: the 4 work domains and 4 life domains could form two "archipelagos" within a larger bento/grid layout. The self-containment principle (each domain must include all its own information) maps perfectly -- each domain card should show directory path, data sources, time horizon, and optimization function without requiring reference to other domains.

### Structural Logic Extraction

**Content logic:** DD-003's content had 4 independent items (database types) that are conceptually simultaneous -- not sequential. A reader needs to see all 4 exist before choosing which to investigate.

**Spatial form:** Archipelago grid -- bounded clusters arranged in a bento-like grid (2-column for related sub-groups), surrounded by generous whitespace. Not standard vertical stacking.

**Why it works better than vertical:** Vertical stacking implies sequence (SQL comes before NoSQL comes before Key-Value). Grid implies simultaneity -- all 4 are co-present, reader chooses entry point. The 8-domain taxonomy is FUNDAMENTALLY parallel -- the domains run simultaneously as parallel Claude instances. Vertical listing would impose a false hierarchy (nox is NOT more important than trades just because it's listed first).

**Trigger signal for other builds:** 4+ parallel items at the same hierarchy level that are conceptually simultaneous (not sequential). Signal words: "domains," "categories," "independent," "parallel," "isolated," "each."

### Adapted CSS

```css
/* Technique: Archipelago grid for parallel survey quadrants */
/* Source: DD-003 islands, adapted for 8-domain survey grid */
/* DD-003 used 4 islands with horizontal offset variety. */
/* Panopticon has 8 domains with 4+4 subdivision (work + life). */

.survey-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);  /* 24px between quadrants -- tighter than DD-003's 80px ocean */
  /* Survey grids are MEASURED -- precise gaps, not organic scatter. */
  /* DD-003 used organic offset; cartographic grids are rectilinear. */
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-8) 0;  /* 32px vertical padding around the grid */
}

/* Technique: Self-contained domain quadrants (island completeness) */
/* Source: DD-003 self-contained units -- each island is a complete ecosystem */
.domain-quadrant {
  background: #FFFFFF;
  border-left: 4px solid var(--color-text);  /* Survey grid boundary marker */
  padding: var(--space-6);  /* 24px internal -- compact but readable */
}

/* 2-zone DNA within each quadrant: domain label + domain content */
.domain-quadrant__label {
  font-family: var(--font-mono);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);  /* 8px -- tight coupling to content */
}

.domain-quadrant__path {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-text);
  /* ~/nox, ~/trades, ~/health -- the filesystem paths are the domain identity */
}

/* Technique: Archipelago sub-grouping for work/life hemispheres */
/* Source: DD-003 used 2-column grid for related mini-islands */
/* Panopticon has 4 work domains + 4 life domains -- two hemispheres */
.domain-hemisphere {
  margin-bottom: var(--space-12);  /* 48px between work and life groups */
}
.domain-hemisphere__label {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: var(--space-4);  /* 16px before grid */
  color: var(--color-text);
}
```

### Reusable vs Non-Reusable

**REUSABLE:**
- Archipelago grouping for parallel items (bento grid with sub-group labels)
- Self-contained content units (each domain card is complete without external dependencies)
- 2-zone component DNA (label zone + content zone within each card)
- The PRINCIPLE that parallel items demand spatial parallelism, not vertical listing

**NON-REUSABLE:**
- DD-003's horizontal offset rhythm (left/right/center -- organic scatter inappropriate for cartographic grid)
- DD-003's specific 80px ocean whitespace (survey grids are tighter, more precise)
- DD-003's island vocabulary (floating, ocean, archipelago)
- DD-003's specific cluster count (4 items -- Panopticon has 8 with 4+4 subdivision)

---

## MEDIUM Affinity: CD-001 (Reasoning Inside Code) — Mechanism Extraction Only

**Affinity:** MEDIUM -- Content-shape partial match. CD-001 has a CRESCENDO narrative arc (sparse intro -> dense peak -> sparse resolution). The Panopticon has a similar arc but with a DESCENT-AND-RETURN shape: sparse datum point -> moderate grid -> dense field notes -> DENSEST dark contour map -> moderate-sparse projection. The CRESCENDO density principle transfers even though the shapes are not identical.

**Transferable techniques:**

```css
/* Technique: CRESCENDO density with descent-and-return variation */
/* Source: CD-001 narrative arc (80px -> 24px -> 56px), adapted for survey arc */
/* CD-001 builds to a single peak. Panopticon builds to a dark philosophical peak, then returns. */
.zone--datum-point { padding-top: 80px; }     /* Sparse opening -- establishing the benchmark */
.zone--contour-map { padding-top: 32px; }     /* Dense philosophical peak -- maximum compression */
.zone--projection { padding-top: 48px; }      /* Return to moderate -- reader needs room to plan */

/* Technique: Velocity interleaving for code-heavy Field Notes zone */
/* Source: CD-001 discovery -- never stack same-velocity components */
/* Field Notes zone has multiple bash scripts, cron entries, CLAUDE.md examples. */
/* Interleave HEAVY code blocks with FAST callouts or MEDIUM prose. */
/* Code (HEAVY) -> Prose bridge (MEDIUM) -> Code (HEAVY) -> Tip callout (FAST) -> Code (HEAVY) */
```

**Non-transferable:** CD-001's F-Pattern to Bento transition (the Panopticon uses zone progression, not axis changes), 3 heavy component types (Panopticon's code is supportive, not dominant), specific BRIDGE placement.

---

## MEDIUM Affinity: CD-005 (Multi-Axis Transition) — Mechanism Extraction Only

**Affinity:** MEDIUM -- Mechanism-deployment partial match. The Panopticon's 5 zones require TRANSITIONS between radically different registers (philosophical -> taxonomic -> technical -> dialectical -> tutorial). CD-005 proved that transition grammar prevents cognitive whiplash when shifting between incompatible reading modes.

**Transferable techniques:**

```css
/* Technique: BRIDGE transition for major register shifts */
/* Source: CD-005 transition grammar (AD-F-025), adapted for survey zone boundaries */
/* Datum Point -> Survey Grid needs a BRIDGE: philosophical to taxonomic is a major mode shift. */
/* Field Notes -> Contour Map needs a BREATHING transition: biggest register shift on the page. */
.zone-transition--bridge {
  padding: var(--space-12) 0;  /* 48px breathing room at zone boundary */
  border-top: 3px solid var(--color-primary);  /* Survey baseline marker */
  /* The 3px rule signals: you are crossing a zone boundary in the survey. */
}

/* Technique: Mode-transition label for register awareness */
/* Source: OD-006 mode-transition breathing, reinforced by CD-005 axis labels */
.zone-transition__label {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-secondary);
  /* Labels like "ENTERING: FIELD SURVEY" orient the reader to the new register */
}
```

**Non-transferable:** CD-005's specific Z -> F -> Bento axis sequence, SMOOTH transition type (Panopticon zones are too atmospherically different for shared-component bridges), WAVE density oscillation pattern (Panopticon uses descent-and-return, not oscillation).

---

## Cross-Case-Study Patterns

### Convergent Mechanisms (appear in 2+ case studies)

**1. Zone Background Differentiation** — Appears in DD-004, DD-006, OD-004, DD-003
All four case studies use background color shifts to encode zone changes. This is the strongest evidence that the Panopticon's 5-zone background arc (cream -> white -> tan -> near-black -> cream) is a well-validated technique. The convergence across geological, fractal, confidence, and island metaphors proves this mechanism is metaphor-independent.

**2. Spacing Compression Gradient** — Appears in DD-004, DD-006, OD-004
Three case studies independently derived spacing compression as a perceptual encoding of "depth" or "density." The Panopticon's compression arc (64px datum -> 48px grid -> 32px notes -> 32px contour -> 48px projection) follows the same principle but with a return expansion.

**3. Border-Weight Gradient** — Appears in DD-004, DD-006, OD-004
Three case studies use border thickness (4px/3px/2px/1px) to encode hierarchy. For the Panopticon, this maps to survey precision: triangulated measurements (4px), measured results (3px), interpretive contour lines (1px). The convergence confirms border-weight is appropriate for this build.

**4. 2-Zone Component DNA** — Appears in DD-003, DD-004, DD-006, OD-001, OD-006, CD-001, CD-006
This is the most broadly convergent mechanism (7/9 case studies). Sparse mono label + dense body content is the universal component pattern. For the Panopticon, every domain quadrant, every callout, every code block should follow this DNA: survey label (mono, small, uppercase) + content zone (body text, detailed).

### What Convergence Suggests for This Build

The convergence pattern points to a clear CSS strategy for the builder:

1. **Zone background arc is mandatory.** 4+ case studies validate background differentiation as the primary zone-encoding mechanism. The Panopticon's 5-zone arc (cream-white-tan-black-cream) should be the first thing the builder implements.

2. **Spacing compression + border-weight = the survey grid's depth encoding.** These two mechanisms working together create the cartographic sensation of "zooming into higher resolution" as the reader descends through zones. Wider spacing + lighter borders = overview map. Tighter spacing + heavier borders = detailed survey.

3. **Archipelago grid for the 8 domains is strongly supported.** DD-003 proved that parallel items demand spatial treatment, not vertical listing. The 8-domain taxonomy is the content's most distinctive structural feature and the most obvious place for non-standard layout.

4. **Transition grammar is needed at zone boundaries.** The Panopticon's register shifts (philosophical -> taxonomic -> technical -> dialectical -> tutorial) are as dramatic as CD-005's axis changes. BRIDGE transitions with zone labels will prevent cognitive whiplash.

5. **The dark contour-map zone is the highest-risk creative territory.** No case study directly demonstrates a light-to-dark-to-light return arc. DD-004 descends continuously. OD-004 descends continuously. The Panopticon's RETURN from dark to light is unprecedented in the library. The builder will need to derive the return transition independently -- but the descent techniques (compression, background darkening, border thickening) are well-validated.

---

## Agent Log
- **Files read:**
  - specialist-3-prompt.md (~342 lines)
  - molly-panopticon-extraction.md (~950 lines)
  - _tc-brief.md (~397 lines)
  - DD-003-islands.md (~405 lines)
  - DD-004-layers.md (~428 lines)
  - DD-006-fractal.md (~377 lines)
  - dd-003-islands-visual.md (~462 lines, Playwright snapshot)
  - dd-004-layers-visual.md (~144 lines, Playwright snapshot)
  - dd-006-fractal-visual.md (~165 lines, Playwright snapshot)
  - OD-001-conversational.md (~297 lines)
  - OD-004-confidence.md (~309 lines)
  - OD-006-creative.md (~333 lines)
  - CD-001-reasoning-inside-code.md (~415 lines)
  - CD-005-multi-axis-transition.md (~386 lines)
  - CD-006-pilot-migration.md (~387 lines)
  - ANTI-PRESCRIPTION-TEMPLATE.md (~471 lines)
  - README.md (~541 lines)
- **Case studies assessed:** 12 total (9 text + 3 visual), 5 with affinity (3 HIGH, 2 MEDIUM)
- **Case studies without affinity:**
  - DD-006 (Fractal): Self-similarity requires recursive structure; Panopticon content is hybrid linear, not recursive at all scales. MEDIUM-LOW -- mechanism-level only (dense/sparse alternation reusable, fractal self-similarity principle not applicable).
  - OD-001 (Conversational): Q&A structure does not match; Panopticon is essay/narrative, not dialogue. No structural affinity.
  - OD-006 (Creative): Meta-documentation (page about itself) does not match; Panopticon is about an external system, not self-referential. No structural affinity. However, mode-transition breathing mechanism is relevant and was folded into CD-005 MEDIUM extraction.
  - CD-006 (Pilot Migration): Meta-tutorial framing not applicable; Panopticon is not about the design system itself. No structural affinity.
- **Decisions made:**
  - DD-004 rated HIGH because its zone progression and spacing compression arc directly serve the Panopticon's 5-zone architecture, and the descent-and-return arc is a derivable variation of DD-004's continuous descent.
  - OD-004 rated HIGH because the Panopticon's trust calibration challenge is structurally identical to OD-004's confidence encoding, and border-weight gradient maps cleanly to cartographic precision levels (triangulated vs. contour).
  - DD-003 rated HIGH because the 8-domain taxonomy is the content's defining parallel structure and DD-003 proved that parallel items demand spatial treatment. The archipelago sub-grouping (4+4 work/life) is directly transferable.
  - CD-001 rated MEDIUM because the CRESCENDO arc principle transfers but the specific axis transitions and heavy-component velocity management are not the primary structural challenge.
  - CD-005 rated MEDIUM because transition grammar is essential for zone-boundary shifts, but the specific 3-axis sequential deployment does not match the Panopticon's zone-based (not axis-based) architecture.
- **Output size:** ~220 lines (excluding agent log)
- **Quality self-assessment:** MEETS quality floor. 5 case studies analyzed (3 HIGH with full process extraction + structural logic + adapted CSS, 2 MEDIUM with mechanism extraction). Each HIGH case study has 10+ lines of adapted CSS with inline comments. Cross-case-study patterns section identifies 4 convergent mechanisms and 5 implications for the builder. All adapted CSS uses the cartographic survey station vocabulary (survey-mark, quadrant, contour, triangulated, datum), not original case study vocabulary.
