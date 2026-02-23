# Execution Brief: Steve Yegge and Gas Town

Mode: **COMPOSED** | Zones: **6** | Metaphor: **Industrial Factory / Refinery**

---

## TIER 1: IDENTITY — The World You Inhabit (10 constraints)

Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world.

Light is direct. Nothing floats. Nothing hovers above the page. Surfaces sit flat against each other.

The page has a spine. Content lives within 940-960px. The spine holds.

This is a warm world. Colors carry warmth -- red leads (#E83025), cream grounds (#FEF9F5), near-black anchors (#1A1A1A). Five accent colors complete the palette, all warm.

Three typefaces. No more. Instrument Serif for headings. Inter for body. JetBrains Mono for code.

Color is flat. Backgrounds are solid. Transitions between colors happen at boundaries, not within surfaces.

Every element earns its place. Nothing is decorative. If it does not serve the content, it does not exist.

Borders speak. 4px = primary emphasis. 3px = section-level. 1px = subtle articulation. This hierarchy is absolute.

The header is the page's signature. Dark background. 3px red bottom border. Dense. Purposeful.

Text breathes at 1.7 line-height. Prose never exceeds 70 characters per line. Third-level headings are italic.

---

## TIER 2: PERCEPTION PHYSICS — The Natural Laws (5 thresholds)

Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them. 15 is the floor, not the target. Calibration: 15 = subtle, 25 = confident, 50 = dramatic. Use the full range.

Letter-spacing below 0.025em is invisible. When applying letter-spacing, stay above 0.025em. Compositional range: 0.03-0.05em.

When padding-bottom + margin-bottom + padding-top between content blocks exceeds 120px total, the eye registers a void -- the page appears broken, not breathing. Compositional range: 60-90px (generous but purposeful).

No single margin or padding value exceeds 96px. If a transition needs more separation, use a structural element, not more whitespace.

Container width: 940-960px. Content beyond 960px loses the reader's eye.

---

## TIER 3: COMPOSITIONAL FRAMEWORKS

### Multi-Coherence (6 channels, boundary-by-boundary)

Build each zone boundary by setting ALL channels simultaneously, not one channel at a time:
1. **Background color** -- zone-to-zone deltas using the full 15-50 RGB range
2. **Typography** -- font-size, weight, letter-spacing shifts at boundaries
3. **Spacing** -- padding and margin shifts encoding density changes
4. **Borders** -- 4px/3px/1px weight shifts marking hierarchy transitions
5. **Color accents** -- accent color or tint shifts signaling zone character
6. **Components** -- component density and variant shifts per zone

**4 directions across the page:** OPENING (Z1-Z2) establishes vocabulary. DEEPENING (Z3-Z4) intensifies it. RESOLVING (Z5-Z6) releases it. Each boundary shifts at least 3 of 6 channels, average 4+.

For Gas Town: Z1->Z2 shifts from sparse manifesto to moderate mental model (background + spacing + typography). Z2->Z3 is the biggest shift -- entering the 8-role architecture (all 6 channels shift). Z3->Z4 eases from dense roles to moderate memory (spacing + background + borders). Z4->Z5 continues easing (typography + spacing). Z5->Z6 enters the cookbook (components + background + borders), then releases at the close.

Use at least 3 distinct transition types: light (1px border + 48px gap = legato), medium (3px border + 80px gap = breathing rest), heavy (colored background + text = full stop). One transition type = temporal monotony.

### Structural Metaphor: Industrial Factory / Refinery

The content's own language: rigs, refineries, polecats, crew, production lines. The factory metaphor maps structurally to the page:

- **Town Level** (Z1-Z2): the manifesto and mental model -- raw material intake, exposed surfaces, sparse
- **Rig Level** (Z3-Z4): the 8-role architecture and memory system -- the production floor, dense machinery, peak compression
- **Human Level** (Z5-Z6): principles, cookbook, comparisons -- the output dock, processed material, release

Name CSS custom properties by CONCEPT: `--factory-intake`, `--factory-floor`, `--factory-output` -- not by position (`--bg-z1`). Concept-based naming is the strongest single indicator of composed mode.

### Density Arc: CRESCENDO + RELEASE

```
Z1 [SPARSE] -> Z2 [MODERATE] -> Z3 [DENSE] -> Z4 [MODERATE] -> Z5 [MODERATE] -> Z6 [DENSE->SPARSE]
```

Z1 (~500px): breathing manifesto. Z2 (~900px): mental model ramp. Z3 (~2400px): peak density -- 8 roles with tables, diagrams, code. Z4 (~1200px): memory system eases. Z5 (~1000px): principles consolidate. Z6 (~1800px): cookbook delivers, then closes with release.

### Content-Form Coupling

- Z1 (manifesto): NARRATIVE -- generous line-height, wider measure, breathing room
- Z2 (mental model): NARRATIVE+REFERENCE -- ASCII diagrams need monospace, prose frames them
- Z3 (8 roles): REFERENCE -- tighter spacing, possible multi-column for role specs, tables, code blocks
- Z4 (memory): REFERENCE+CODE -- git-as-database, monospace heavy, structured
- Z5 (principles): NARRATIVE+REFERENCE -- philosophical statements with technical backing
- Z6 (cookbook): CODE+REFERENCE -- commands, steps, comparison tables, then resolving prose

### Creative Authority + Components

You have 80% creative authority within identity constraints. The soul (Tier 1) and physics (Tier 2) are non-negotiable. Everything else -- how you interpret the factory metaphor, which mechanisms you deploy, how zones transition -- is yours.

Use components from components.css as your structural toolkit. Adapt them to zone context: callouts should modulate per zone (generous padding in Z1, compressed in Z3, heavier border in dense zones). Aim for 8+ component library classes.

### CSS Value Table

Reference `tokens.css` for exact values. Key vocabulary: spacing scale (4-96px in 4px increments), border weights (4px/3px/1px), type scale (0.75rem to 3rem), color palette (8 primary + 5 accent + 3 zone + 4 text hierarchy). Build with 800-1200 CSS lines total.

---

## TIER 4: DISPOSITION (D-01 through D-08)

### D-01: Content-Register Reading [EXPERIMENTAL]
**PURPOSE:** Read each section's character before choosing its CSS treatment. The manifesto (Z1) is NARRATIVE -- it needs breathing room. The 8 roles (Z3) are REFERENCE -- they need structural density. The cookbook (Z6) is CODE -- it needs monospace precision. Let the content's register drive your CSS decisions.

### D-02: Room Perception at Boundaries [EXPERIMENTAL]
**PURPOSE:** Each zone transition should feel like entering a different room. Combine multiple channels at each boundary: background color shift + typography shift + spacing shift + border weight shift. A boundary that only changes one channel is a wall with a window. A boundary that changes three channels is a doorway to a new space.

### D-03: The Signing Frame [EXPERIMENTAL]
**PURPOSE:** Build as if you will sign this page. Every element expresses certainty: consistent border-weight hierarchy (4px ALWAYS = primary), restraint (knowing what NOT to use), dense purposeful header, zero decorative elements. The page knows what it is.

### D-04: The Second-Half Moment [EXPERIMENTAL]
**PURPOSE:** Somewhere in Z4-Z6, create a moment that breaks the established pattern. Techniques: scale break (headline 2.5x body), color inversion (dark zone mid-page), layout rupture (grid after single-column), structural inversion (border-RIGHT in a border-LEFT page). 1-2 moments only. The Gas Town content has zero surprise moments currently -- fix this.

### D-05: The Reader's Scroll [EXPERIMENTAL]
**PURPOSE:** The scroll should feel like a journey. Three dimensions: section height (vary -- not uniform), visual density (loud and quiet zones), transition weight (staccato vs legato). Closure appears only in the final 2-3 viewports, earned by the journey before it.

### D-06: Negative Space as Shape [EXPERIMENTAL]
**PURPOSE:** Whitespace is a deliberate shape, not emptiness. Vary padding between zones -- not uniform 48px everywhere. Let Z3 compress and Z1 breathe. Stacked gaps stay under 120px total but VARY within that range. 80-120px breathing space before footer.

### D-07: Edge Intentionality [EXPERIMENTAL]
**PURPOSE:** Every edge is a decision. Techniques: hover states revealing hidden content (table row tint, link border), typographic micro-refinement (tabular-nums, text-indent), zone-specific ::selection colors, print styling, first/last child edge treatments. Distribute throughout, more in high-density zones (Z3, Z6).

### D-08: The Skeleton Test [EXPERIMENTAL]
**PURPOSE:** Remove all content mentally. Does the skeleton (spacing, borders, backgrounds, typography framework) still have shape? If it looks like a uniform stack of boxes, it is applied mode. If it has rhythm, proportion, and intentionality, it is composed mode.

---

## CONTENT MAP APPENDIX

### Zone Architecture (6 zones)

| Zone | Name | Density | Content | Pacing | Direction |
|------|------|---------|---------|--------|-----------|
| Z1 | The Manifesto | sparse | You Are Here + Who is Yegge + Core Insight | BREATHING | OPENING |
| Z2 | The Factory | moderate | Gas Town Mental Model + Factory Metaphor + Idea Compiler | TRANSITIONAL | OPENING->DEEPENING |
| Z3 | The Hierarchy | dense | 8 Roles Architecture (all role deep dives + comm flow) | DENSE | DEEPENING |
| Z4 | The Memory | moderate | Beads system + Memory Model + Git-as-database | DENSE | DEEPENING |
| Z5 | The Principles + Waves | moderate | 6 Waves of AI + Core Principles (GUPP, Zero Framework) | TRANSITIONAL | DEEPENING->RESOLVING |
| Z6 | The Cookbook | dense->sparse | Implementation Guide + Troubleshooting + Comparisons | BREATHING | RESOLVING |

### Content Tensions

1. **Chaos vs Control** -- system embraces nondeterminism but imposes structural order. Pole A dominant.
2. **Individual vs Colony** -- THE central argument. Ant-to-factory transformation = structural spine. Pole B dominant.
3. **Programmer vs Product Manager** -- identity transformation is the emotional core. Pole B dominant.
4. **Accessibility vs Gatekeeping** -- invitation vs warning. Both active.

**Metaphor-shaping tension:** #2 (Individual vs Colony).

### Reader Profile

Advanced developers at Stage 6-7. Running 3-10 Claude Code instances daily. High info density tolerance. 3-4 components/viewport acceptable. Minimal progressive disclosure. Optional TOC. Minimal header, fast entry. Expert axis (75-80%).

What should surprise them: the EMOTIONAL dimension -- the identity transformation from programmer to PM. Philosophical manifesto disguised as technical documentation. Let the philosophical voice breathe at opening and closing; dense technical specification in the middle.

### Density Arc

```
Z1 [SPARSE] -> Z2 [MODERATE] -> Z3 [DENSE] -> Z4 [MODERATE] -> Z5 [MODERATE] -> Z6 [DENSE->SPARSE]
```

Pattern: CRESCENDO + RELEASE. Peak at Z3 (8 roles = most complex structural content). Z6 internal density shift: implementation dense, closing comparisons resolve into breathing space.
