<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/identity-delta-wave3.md
BUILT ON: research-package-od-004.md (discoveries B3A-001..005), research-package-od-006.md (discoveries B3B-001..004), verification-wave3.md, identity-delta-wave2.md
CONSUMED BY: Wave 4 synthesizer, Wave 5 auditors, ACCUMULATED-IDENTITY v1.3
END INLINE THREADING HEADER
-->

# Identity Delta — Wave 3 (OD-004 + OD-006)

## What Surprised

1. **Border-weight gradient transforms a labeled metaphor into a VISIBLE one.** Builder-3a's application of EXT-CONF-013 (4px/3px/2px/1px left borders encoding Established/Probable/Speculative/Open) makes OD-004's geological metaphor visible at page scale — a squint test at 50% zoom shows the 4-layer gradient clearly. Before: the geological layering existed only in text labels and typography compression. After: ~20 CSS property changes create a structural page-scale effect. This answers the Wave 2 forward question ("does geological metaphor imply physical depth?") definitively: NO — the depth is encoded via border weight (a flat, 2D signal), not shadows or transforms. The metaphor is GEOLOGICAL without being PHYSICAL.

2. **The crown jewel creates a 5th fractal scale.** Builder-3b discovered that combining fractal annotation layer (EXT-CREATIVE-010) + pattern echo grid (EXT-CREATIVE-013) + fractal TOC (EXT-CREATIVE-012) creates an emergent NAVIGATION SCALE — the document reflects itself at navigation, page, section, component, and character scales. DD-F-006 specified 4 scales. OD-006 demonstrates 5. The additional scale emerges from the combination, not from any single enrichment. This is OD-F-008 (Creative Techniques Compound) proven at meta-level.

3. **Semi-transparent backgrounds are systemic, not incidental.** Builder-3a found `rgba(0,0,0,0.04)` in TWO independent OD-004 locations (callout inline code, troubleshoot inline code) — neither flagged by prior audits or research packages. Every builder in every wave has now found opacity < 1.0 violations. The pattern: research catches the obvious violations (box-shadow, filter, transform), but embedded rgba backgrounds survive multiple review layers. **Binary rule confirmed again:** opacity === 1.0 on all visual elements, no exceptions.

4. **The 3-category border system and semantic encoding coexist on ORTHOGONAL axes.** Builder-3a clarified: OD-004's stratum LEFT borders (4px/3px/2px/1px) are semantic confidence signals on the Y-axis. Content-block TOP borders are data separators (always 1px per Cat 2) on the X-axis. The 2px epidemic occurred precisely when these two purposes were conflated — content-block separators using 2px because stratum borders did.

5. **Zone token naming carries QUADRUPLE validation.** Builder-3b confirmed that `--color-zone-sparse/dense/breathing` tokens in OD-006 (cross-pollinated from builder-1a's OD-001 discovery, Wave 1) prove OD-F-005 at the token level. The naming convention is now validated across OD-001 (first) and OD-006 (crown jewel) — bookend validation. The crown jewel carries OD-F-005 in its tokens, layout, content, AND annotations.

## Identity Refinements

- **GEOLOGICAL = BORDER WEIGHT, not physical depth.** OD-004 proves geological layering through 2D CSS encoding (border width gradient + zone backgrounds + typography compression). Three simultaneous flat channels encode the same semantic dimension. The ANTI-PHYSICAL identity extends to metaphors: even when the metaphor implies 3D (strata = layers), the CSS encoding remains strictly 2D.
- **Fractal scale count: 5 confirmed in crown jewel.** Identity now tracks: navigation, page, section, component, character. The 5th scale (navigation) emerges from enrichment technique combination, not from design intent. This validates compound patterns beyond 2 (Wave 2 open question).
- **Type scale fully tokenized across all 6 ODs.** Builder-3a's discovery (B3A-005) of --type-meta at 10px in OD-004 and its conversion to var(--type-meta) at 0.75rem means no hardcoded font sizes below --type-meta remain in meta-level elements. All 6 ODs now share the convention spec type scale.
- **Dark header confirmed as universal amplifier.** Wave 1: conversational/narrative. Wave 2: task-based/spatial. Wave 3: confidence/creative. All 3 waves confirm the dark header creates stronger LANDMARK effect regardless of organizational pattern. The convention spec's dark header is now validated across ALL 6 ODs.
- **Binary rule tally: 20/20 SOUL FAILs.** Waves 1-2 had 13/13. Research-3a found 4 SOUL FAILs (gradients, traffic-light colors, animated reveals, rounded badges). Research-3b found 3 SOUL FAILs (all depth/motion/parallax). Total: 20/20 SOUL FAILs continue the ANTI-PHYSICAL pattern — zero exceptions across 6 ODs.

## SOUL FAIL Summary (from researchers)
- Researcher-3a: 4 SOUL FAILs. Pattern: decorative surface — gradients, traffic-light colors (red/amber/green implying material signals), animated reveals, rounded badges. Extension of ANTI-PHYSICAL into color semantics.
- Researcher-3b: 3 SOUL FAILs. Pattern: depth/motion/parallax — all involve movement or layering that implies physical z-space.
- **Combined with Waves 1-2:** 20/20 SOUL FAILs. Categories: (a) decorative depth/shadows, (b) animated z-movement, (c) rounded shapes suggesting physical objects, (d) gradients suggesting light/material, (e) traffic-light color semantics implying material signals, (f) parallax implying z-space.

## Forward Questions for Wave 4 (Synthesis)

1. **The 4px/3px/1px gap asymmetry (from B3B-002).** The convention spec's categorical 2px ban forces OD-006's confidence strata from 4px/2px/1px to 4px/3px/1px. The visual gap between established and emerging shrinks from 2px to 1px, while emerging-to-exploratory stays at 2px. Rules are binary (correct), but the synthesizer should document this as a forward question for AD: can the 3-category border system accommodate gradient semantics?

2. **Quintuple Equivalence.** Builder-3b suggests: Organization = Density = Progressive Disclosure = Fractal Scale = Navigation Structure. Identity-delta-wave2 had established the first three. The synthesizer should evaluate whether the 5th scale truly constitutes a new equivalence or is a subset of Fractal Scale.

3. **Semi-transparent violations as systemic audit gap.** Every wave has found rgba backgrounds not caught by prior audits. Should the Wave 5 audit specifically target `rgba(` and `opacity:` in all 6 ODs as a focused sweep?
