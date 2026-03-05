# Specialist 5: Protocol & Exemplar Analysis — Molly Panopticon Build

## Consumption Protocol

1. **READ** soul checklist (Package Section 0) -- Establish the physics of the possible.
   The builder must know that `border-radius: 0`, `box-shadow: none`, and the typography trinity are non-negotiable BEFORE encountering the cartographic metaphor. If the metaphor is absorbed first, the builder will be tempted toward decorative cartographic elements (compass roses, ornamental borders, rounded map edges) that violate soul. Soul constraints are the territory's geology -- the metaphor maps it, but cannot change it.

2. **INTERNALIZE** the TC conviction brief (Package Section 1) -- Absorb the cartographic survey station metaphor.
   Read the World-Description BEFORE mechanism selections. The metaphor must shape perception: the Panopticon content is a survey map, each domain is a survey line, density encodes cartographic detail level. If mechanisms are read first, the builder composes FROM tools (selecting grid-spacing tokens to fill a page). If the metaphor is read first, the builder composes FROM conviction (the cartouche opens with warm parchment spacing because a surveyor stands on a hilltop before beginning). For THIS content, the metaphor resolves a critical ambiguity: the 8-domain code blocks are survey coordinates, not generic code snippets. That framing changes their CSS treatment.

3. **STUDY** mechanism selections (Package Section 2) -- Understand WHY each mechanism was chosen for THIS content.
   Read the rationale column for each mechanism. The cartographic metaphor demands specific mechanisms: background arc progression (parchment to drafting-table to fieldwork to night-camp) encodes the survey's temporal journey. Typography Compression on the cartouche headings signals the mapmaker's hand. Spatial rhythm shifts between the cartouche zone (64-80px) and the survey grid (40-48px) encode the difference between observation and measurement. Each mechanism was selected because it serves the map/territory dialectic, not because it appears in a generic vocabulary list.

4. **MAP** content sections to zones using the zone architecture (Package Section 4).
   The content has 17 parts across ~950 lines. The TC brief maps these to four compositional registers: Cartouche (Part I -- philosophical frame), Survey Grid (Parts II-V -- architecture and implementation), Marginal Annotations (Parts VI-VII -- philosophy and critique), and Legend/Terra Incognita (Parts XIII-XVI -- synthesis and open questions). The builder must MAP each content part to its zone BEFORE writing CSS. This prevents the orphan-zone problem where CSS is written for a zone that has no corresponding content, or content that sits in no zone.

5. **DEPLOY** findings zone-by-zone (Package Section 3) -- Apply curated research to specific zones.
   Do not apply findings globally. Each finding has a zone affinity. The Goodhart's Law warning quote belongs in the Marginal Annotations zone at the fieldwork background tone (`#FAF5ED`), not in the Survey Grid zone. The 8-domain directory tree belongs in the Survey Grid at drafting-table white (`#FFFFFF`), not in the Cartouche. Zone-specific deployment prevents the "everything at once" failure where all findings are applied to every section, producing uniform density.

6. **INTEGRATE** opposition resolutions (Package Section 5) -- Weave the TC brief's opposition map into CSS decisions.
   The TC brief identifies three oppositions: Surveillance-as-Liberation vs. Editorial Warmth (dominant), Dialectical Holding vs. Verdict-Drive (secondary), Progressive Revelation vs. Explicit Orientation (tertiary). Each opposition generates a CSS decision: the dominant opposition means the 4px left-border callout system becomes the surveyor's notation mark (warm craft, not institutional confinement). The secondary opposition means dense assertive zones for architecture content, sparse questioning zones for philosophical warnings. These are not abstract -- they are specific CSS choices that the builder must make.

7. **VERIFY** against anti-patterns (Package Section 6) -- Defensive check before delivery.
   The Panopticon content is prose-heavy with embedded code blocks, tables, and directory trees. The highest-risk anti-patterns for THIS content are: whitespace voids between the Survey Grid and Marginal Annotations zones (the background shift from white to fieldwork-tan risks creating a visible gap if spacing is mismanaged), decorative cartographic ornament (the metaphor's risk profile explicitly warns against this), and code-wall formation in Parts IV-V where multiple bash/tmux blocks cluster. Verify COMPUTED styles at 1440px and 768px.

8. **TEST** structural propositions (Package Section 8) -- Does the build embody the hypotheses?
   The TC brief proposes experimental questions. Does the terra incognita zone (unanswered questions, Part XVI) work on a bedrock dark background? Do the checkpoint file-trees serve as recurring structural anchors? These propositions should be tested during build, not after. If a proposition fails visually, the builder should note it and use the fallback, not force the experiment.

---

## Agent-0C Effective Patterns

### Pattern 1: Invariant 8-Section Template Structure

All 6 packages share an identical 8-section skeleton: (0) Soul Checklist, (1) Common References, (2) Your Combination, (3) Components to Use, (4) R-5 Findings to Test, (5) Density Pattern, (6) Structural Constraints, (7) Anti-Patterns to Avoid, (8) Scoring Criteria. The ordering encodes a cognitive logic: boundaries first (soul), then shared context (references), then assignment-specific creative direction (combination + components), then research application (findings), then spatial structure (density), then hard constraints (structural), then defensive patterns (anti-patterns), then success criteria (scoring). This sequence moves from UNIVERSAL to SPECIFIC to DEFENSIVE -- the builder absorbs what is shared, then what is unique, then what to avoid.

**Effectiveness:** The invariant structure means a builder who reads cd-001 can navigate cd-006 without re-learning the format. Cognitive overhead is spent on CONTENT, not on STRUCTURE. The template also makes packages comparable -- auditors can diff section-by-section across packages to verify consistency.

**Recommendation for Synthesizer:** Adopt the 8-section structure but adapt section names to the tripod pipeline context. The Panopticon package needs: (0) Soul + Identity Constraints, (1) TC Brief Summary + Metaphor, (2) Mechanism Selections + Rationale, (3) Content-to-Zone Mapping, (4) Curated Findings (from Specialists 1-4), (5) Zone Architecture + Density Arc, (6) Structural Constraints + CSS Tokens, (7) Anti-Patterns for THIS Content, (8) Traceability Index + Quality Floor.

### Pattern 2: Recipe Format with Sequenced Action Verbs

Agent-0C used sequenced imperative verbs: "Place Tip before Code", "Follow this recipe structure", "Use the Setup-Payoff Arc", "Start with Info Callout". These are RECIPE verbs (Read, Select, Deploy, Place, Follow, Start, Use) not COMPLIANCE verbs (Verify, Fail if, Must be, Ensure). The cd-001 package's "Strategy" subsection under Section 3 (Components) is a 4-step sequenced recipe: (1) Never place Code after Reasoning without buffer, (2) Use CRESCENDO to escalate, (3) F-pattern spine provides vertical rhythm, (4) Core Abstraction embeds code zone -- use instead of separate snippet. Each step is an action, not a rule.

**Effectiveness:** Recipe format produces richer output because the builder follows a SEQUENCE rather than checking a LIST. A checklist builder stops at compliance; a recipe builder builds momentum through sequenced steps. The retrospective research confirmed this: "Recipe format produced richer creative output; checklist format produced compliant but perceptually flat output."

**Recommendation for Synthesizer:** Frame ALL builder instructions as sequenced recipes. For the Panopticon build: "READ the TC brief's background arc. SELECT the token closest to parchment cream for the Cartouche zone. DEPLOY `--bg-warm` at `#FEF9F5` for sections 1-3. SHIFT to `--bg-surface` at `#FFFFFF` at the Survey Grid transition (Part II). VERIFY the shift is perceptible (minimum 15 RGB points apart)."

### Pattern 3: ASCII Density Diagrams

Every package includes an ASCII density diagram specific to its density pattern. cd-001 (CRESCENDO): `LOW .... / MED ........ / HIGH ............#### / PEAK ################`. cd-002 (PULSE): `DENSE ####    ####    #### / SPARSE    ....    ....    ....`. cd-003 (ISLANDS): `OCEAN ....        .... / ISLAND    ####        ####`. cd-006 (FRACTAL): described in prose at 5 scales. The diagrams encode TWO variables: vertical position (scroll time) and horizontal density (information load). Each diagram was followed by content-specific zone descriptions with pixel-level spacing values.

**Effectiveness:** Builders are visual-spatial agents. A single ASCII diagram transfers spatial intent faster than a paragraph of prose. The diagram also serves as a VERIFICATION artifact -- after building, the builder can compare the page's actual density rhythm to the diagram and check alignment.

**Recommendation for Synthesizer:** Include a cartographic density diagram in the zone architecture section. For THIS content:
```
CARTOUCHE   ....            (sparse, 64-80px padding, parchment)
GRID:ARCH   ........####    (building, 40-48px, white)
GRID:IMPL   ############    (dense, 40-48px, code blocks)
ANNOTATIONS ......          (moderate, 48-56px, fieldwork tan)
LEGEND      ........        (structured, 48-64px)
TERRA INC   ....            (sparse, open, bedrock or cream)
```

### Pattern 4: Component Table with Role/Weight/Velocity per THIS Page

Every package includes a component table with columns: Component | Role in This Page | Weight | Velocity. The "Role in This Page" column is the key differentiator. cd-001's Code Snippet role is "Primary content -- implementation examples" while cd-003's File Tree role is "Primary -- structural map." The same component (Info Callout) appears in every package but with different roles: "Context setting, orientation" (cd-001), "Context, orientation" (cd-002), "Context for file tree sections" (cd-003). The role column connects the component to THIS content's needs, not the generic component definition.

**Effectiveness:** Without the role column, a builder reads "Code Snippet: Heavy, Slow" and applies it generically. With the role column, the builder reads "Code Snippet: Primary content -- implementation examples, Heavy, Slow" and understands that Code Snippet is the PAYLOAD of this page, not a supporting element. The role column reframes generic vocabulary as content-specific tools.

**Recommendation for Synthesizer:** Include a content-specific component/mechanism table. For the Panopticon build, this is not about KortAI's 11 components but about the design system's mechanism vocabulary applied to THIS content. Example: "Background arc progression | Maps the survey's temporal journey (parchment -> drafting-table -> fieldwork -> night-camp) | HIGH weight in this build | Slow deployment (one shift per major zone transition)."

### Pattern 5: Risk-Profiled Anti-Patterns per Content Type

Section 7 of every package rates anti-patterns with content-specific risk levels. cd-001 rates "Code Wall" as HIGH (because 3 heavy components cluster). cd-003 rates "Callout Cacophony" as HIGHEST (because 4 callout types appear). cd-004 rates "Semi-Transparent Backgrounds" as CRITICAL (because "ambient" Essence tempts opacity tricks). The risk levels are NOT generic -- they are calibrated to the specific challenge of each page.

**Effectiveness:** A generic anti-pattern list gives every risk equal weight, producing a builder who checks everything shallowly. A risk-profiled list tells the builder: "YOUR biggest risk is X. Spend most defensive attention here." cd-004's CRITICAL rating on semi-transparency prevented the builder from reaching for `opacity: 0.6` on Essence backgrounds -- the package PREDICTED the temptation and pre-empted it.

**Recommendation for Synthesizer:** Profile anti-patterns for the Panopticon content specifically. Highest risk: decorative cartographic ornament (the metaphor invites it; the identity forbids it). High risk: whitespace voids between zone transitions (4 background shifts = 4 opportunities for stacking gaps). Medium risk: code-wall formation in Parts IV-V (multiple bash blocks). Low risk: typographic monotony (the TC brief specifies 5 voices across 3 typefaces, so variety is built in).

### Pattern 6: Scaled Investment (Crown Jewel Escalation)

cd-006 received significantly more investment than cd-001: 341 lines vs 249 lines, ALL 39 R-5 findings vs 11 findings, ALL 11 components vs 5 components, additional Section 0.5 (Crown Jewel Status) and Section 8 (Wave 2 Note). But the TEMPLATE stayed constant -- the 8-section structure remained. What scaled was DEPTH within sections: cd-006's R-5 findings table has 39 rows across 9 sub-tables; cd-001's has 11 rows in one table. What stayed constant was STRUCTURE: both have the same section names, the same soul checklist, the same transition grammar reference.

**Effectiveness:** The constant template means crown jewel investment goes into CONTENT DEPTH, not structural novelty. The builder doesn't need to learn a new format for the most important page. The additional Section 0.5 (Crown Jewel Status) adds CONTEXT ("you are building the most important page; it must score 39-40/40") without adding structural complexity.

**Recommendation for Synthesizer:** The Panopticon page is a single build (not one of six). Apply crown-jewel-level depth to every section. The package should be 200-300 lines with ALL relevant findings curated, not a lightweight 80-line summary. If the synthesizer must choose between breadth and depth, choose depth -- a builder with 15 deeply-specified findings outperforms one with 40 shallowly-listed findings.

### Pattern 7: Compatibility Notes from 11x11 Matrix Made Actionable

Each package includes a "Compatibility Notes" sub-table in Section 3, drawn from the 11x11 component compatibility matrix but filtered to only the pairs RELEVANT to THIS page. cd-001 shows 5 pairs (Code+Reasoning, Code+Core, etc.). cd-003 shows 7 pairs (FileTree+Core, FileTree+Info, etc.). Each pair includes a Rating (Yes/OK/No) and a Note explaining how the pair works in THIS context, not generically.

**Effectiveness:** The full 11x11 matrix has 121 cells. A builder reading the full matrix would spend cognitive budget on irrelevant pairs (e.g., FileTree+FileTree for a page that uses one FileTree). By pre-filtering to relevant pairs, Agent-0C converted a reference document into an actionable lookup. The contextual notes ("Code provokes reasoning" vs generic "Yes") tell the builder WHY the pair works.

**Recommendation for Synthesizer:** For the Panopticon build, provide compatibility notes between the MECHANISMS and ZONES selected for this page. Which mechanisms pair well within the Cartouche zone? Which create tension at zone transitions? This is the tripod equivalent of the 11x11 matrix: a mechanism-to-zone compatibility guide specific to THIS build.

---

## Anti-Orphaning Principle

**ANTI-ORPHANING RULE:** Every CSS property in the final HTML must trace to an identifiable source in the research package. Before writing any CSS rule, the builder identifies its provenance:

- **Finding reference** (e.g., "Background shifts to `#FAF5ED` at Marginal Annotations zone -- from TC brief Section 2, Calibration: 'Breathing zone: FAF5ED, earthy tan'")
- **Mechanism name** (e.g., "Typography Compression on cartouche headings -- from mechanism selections, letter-spacing: -0.02em signals the cartographer's authority")
- **Soul constraint** (e.g., "`border-radius: 0` on all survey-grid containers -- from identity.md, Soul Piece #1: Sharp Edges Command Authority")
- **Conviction brief direction** (e.g., "Instrument Serif at display scale for cartouche headings -- from TC brief Section 2, Type arc: 'the mapmaker's hand signing the work'")
- **Token value** (e.g., "`--space-12: 48px` between survey grid and annotations zone -- from tokens.css, spacing scale")

**If a CSS rule has no identifiable source, it is an orphan.** Orphan CSS is the primary diagnostic failure mode in the comparison report (Phase 4). It means the builder invented a property that neither the research package nor the conviction brief directed. Some orphan CSS is benign (basic resets, box-sizing). But orphan CSS that affects visual character (decorative borders, unexpected background colors, arbitrary spacing) suggests the builder departed from the package.

**Traceability format for builder comments:**
```css
/* TC-S2: Cartouche zone, parchment background */
.cartouche { background: var(--bg-warm); }

/* Identity: Soul Piece #1, Sharp Edges */
.survey-grid { border-radius: 0; }

/* Mechanism: Spatial rhythm shift, cartouche -> grid */
.survey-grid { padding: var(--space-10) var(--space-12); }
```

The builder should maintain a running traceability log (even as inline CSS comments) so the comparison report can map: package instruction -> CSS property -> PA finding.

---

## Template Recommendation for Synthesizer

The synthesizer should organize the merged output across the expected package structure. Based on Agent-0C's 8-section template, adapted for the tripod pipeline:

| Section | Content Source | Purpose |
|---------|--------------|---------|
| **0. Soul + Identity** | identity.md + vocabulary.md | Non-negotiable boundaries (constant across all builds) |
| **1. Build Context** | TC brief (S5 summary) + content map | Metaphor, emotional arc, zone descriptions |
| **2. Mechanism Selections** | Specialist 2 (vocabulary) + TC brief S2 | Which mechanisms, WHY for this content, CSS values |
| **3. Content-to-Zone Map** | Specialist 3 (structure) + TC brief S4/S6 | Each content part mapped to a zone with register and density |
| **4. Curated Findings** | Specialists 1 + 4 (content + composition) | Findings with zone affinity and deployment instructions |
| **5. Zone Architecture** | Specialist 3 + TC brief S4 | ASCII density diagram, spacing values, background arc |
| **6. Structural Constraints** | tokens.css + components.css + grammar | Container width, responsive breakpoints, token-only CSS |
| **7. Anti-Patterns** | Specialist 4 + risk profiling | Risk-profiled for THIS content, with mitigation strategies |
| **8. Traceability Index** | Anti-orphaning format + quality floor | Source-to-CSS mapping template, verification checklist |

The synthesizer should target 200-300 lines total. Every line should be either a specific CSS value, a specific content reference, or a specific process instruction. No filler prose. The builder reads this package and builds -- it is the COMPLETE input.

---

## Agent Log: Specialist 5
- **Files read:** MASTER-AD-EXECUTION-SPEC.md (~1,407 lines, focused on Preamble + Section 1 + Section 12), MASTER-CD-EXECUTION-PROMPT.md (930 lines, full read), research-package-cd-001.md (249 lines, full read), research-package-cd-006.md (341 lines, full read), research-package-cd-002.md (240 lines, full read), research-package-cd-003.md (249 lines, full read), research-package-cd-004.md (250 lines, full read), research-package-cd-005.md (226 lines, full read), molly-panopticon-extraction.md (950 lines), _tc-brief.md (144 lines)
- **Decisions made:** (1) Prioritized cd-001 and cd-006 as structural bookends, then read cd-002 through cd-005 for variation confirmation. (2) Extracted 7 patterns rather than the minimum 5, because the compatibility-notes pattern and the crown-jewel-escalation pattern are structurally distinct and directly actionable. (3) Anchored every protocol step and pattern recommendation on the Panopticon content and cartographic metaphor specifically. (4) Included the template recommendation as a concrete table rather than prose description, to make it directly consumable by the synthesizer.
- **Output size:** ~175 lines
- **Quality self-assessment:** MEETS ALL CRITERIA -- Consumption protocol has 8 sequenced steps with rationale. 7 Agent-0C patterns identified with effectiveness analysis and synthesizer recommendations. Anti-orphaning principle stated with traceability format and CSS comment examples. Template structure proposed as actionable table. Content-specific throughout (cartographic metaphor, Panopticon zones, specific TC brief sections referenced). Prose-heavy content acknowledged in mechanism and anti-pattern recommendations.
