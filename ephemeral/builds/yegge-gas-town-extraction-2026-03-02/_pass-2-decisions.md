# Pass 2 Decisions

## Findings Deployed

| # | Finding | Target Zone | CSS Action Taken |
|---|---------|-------------|-----------------|
| 1 | Fractal self-similarity at 5 scales | All | Verified 4-scale deployment from Pass 1 (page/section/component/character). No 5th scale attempted per package guidance. |
| 2 | 3-way unification | All | Preserved Pass 1's tower descent as the single organizing axis. No separate density/org layers added. |
| 3 | GEOLOGICAL as border-weight gradient | Zone 2 | Preserved Pass 1's 4px/3px/1px on role cards. Added CITE comments. |
| 4 | CRESCENDO typography compression | All | Preserved Pass 1's heading descent (2rem -> 1.625 -> 1.375 -> release). Added zone comments for traceability. |
| 5 | PULSE for alternation | Zones 1, 6 | Preserved Pass 1's Q&A pulse pairs and quote pulse. No changes needed. |
| 6 | Sequential compound | All | Preserved Pass 1's one-mode-per-section structure. No mixing introduced. |
| 7 | Mode-transition breathing 48px+ | Zone boundaries | Preserved register bridges. Added temperature-buffer class for Zone 5->6 transition (Finding 21). |
| 8 | Smart whitespace 38% retention | Zone 1 | Preserved 80px hero padding, 64px between sections. No changes needed. |
| 9 | Yegge quotes as pull quotes | Zone 1 | Preserved voice-eruption treatment from Pass 1. Added CITE comment. |
| 10 | Density contrast before peak | Zone 1 | Factory declaration padding upgraded to 80px (var(--space-20)) creating 2:1 ratio vs Zone 2's 48px. |
| 11 | Bento grid for role hierarchy | Zone 2 | Changed grid from 1fr/1fr to 2fr/1fr/1fr — Mayor spans full width, Deacon/Dogs get smaller cells encoding lesser authority. |
| 12 | Velocity interleave in 8 Roles | Zone 2 | Added FAST meta-indicator labels between Rig-Level role cards ("Named workers execute..." and "Witnesses observe..."). |
| 13 | Progressive disclosure for roles | Zone 2 | Wrapped all 8 role card bodies in `<details class="role-disclosure">`. Summary shows name + function + tier. Commands/model recs/responsibilities are depth-on-demand. |
| 14 | Tech spec metadata labels | Zone 2 | Added `.role-label` CSS class. Meta-indicators already deployed from Pass 1 preserved. |
| 15 | Visual weight balance | Zone 2 | Added `.zone--operations .role-card pre { margin: 40px 0 24px 0 }` for breathing around code blocks within role cards. |
| 16 | Beads as bedrock layer | Zone 3 | Preserved Pass 1's Hot/Warm/Cold border-weight descent (4px red / 3px amber / 1px subtle). Added CITE comments. |
| 17 | Density debt after peak | Zone 4 | Added `.zone--philosophical .tower-container { max-width: 640px }` — narrower reading corridor signals register change from operational to philosophical. Responsive collapse at 1024px and 768px. |
| 18 | Component density tolerance | Zone 3 | Preserved existing voice eruptions (content-critical) but added no NEW ones in the dark zone. CITE comment added. |
| 19 | Code wall anti-pattern | Zone 5 | Added prose paragraphs before each code block in Implementation section (e.g., "Install the Gas Town CLI...", "A rig is a project workspace...", "Each role gets its own window..."). |
| 20 | Progressive disclosure for troubleshooting | Zone 5 | Replaced 6 flat trouble-pattern divs with `<details class="trouble-disclosure">`. Symptom is the summary line, cause + code fix inside detail-content. |
| 21 | Temperature buffering | Zone 5->6 | Added `.temperature-buffer` class on the register bridge between Zone 5 and Zone 6, providing 48px+ breathing before the dramatic CODE->PROVOCATIVE register shift. |
| 22 | Resolution components | Zone 6 | Preserved warm cream background and generous 64px padding from Pass 1. |
| 23 | One concept per viewport | Zone 6 | Added `.viewport-moment` class (margin: 40px 0) to decision matrix and orchestrator spectrum diagrams. |
| 24 | Contrast creates harmony | Zone 6 | Preserved Instrument Serif voice for quotes and JetBrains Mono for code coexisting in Zone 6. Added CITE comment. |

**Findings deployed: 24 of 24.** All findings applied or verified as already present from Pass 1.

## Density Adjustments

- Zone 1 (Overseer): factory-declaration increased from 32px/24px to 80px padding. Creates the 2:1 density contrast that makes Zone 2 feel denser by comparison.
- Zone 2 (Operations): Role cards now use progressive disclosure, reducing above-fold density while keeping all content accessible. Bento grid changed from 1fr/1fr to 2fr/1fr/1fr.
- Zone 4 (Philosophical): max-width reduced from 960px to 640px, creating narrower reading corridor that FEELS more spacious after bedrock compression.
- Zone 5 (Factory): Troubleshooting patterns converted to progressive disclosure, reducing perceived density while maintaining all content.
- Zone 5->6 boundary: Added temperature-buffer class for the most dramatic register shift on the page.
- Density progression now matches Section 4 diagram: SPARSE -> BUILDING -> PEAK -> BREATHING -> DENSE-PRACTICAL -> SPARSE.

## Case Study Techniques Integrated

1. **DD-004 (Layers -> Zones 1-6):** Spacing compression gradient preserved and enriched. 80px (overseer) -> 48px (operations) -> 32px (bedrock) -> 64px (philosophical release) -> 40px (factory) -> 64px (resolution). Added max-width narrowing in Zone 4 per DD-004's technique of using reading corridor width to signal density shifts.

2. **OD-004 (Confidence -> Zone 2 Roles):** Border-weight hierarchy preserved: 4px/3px/1px for Town/Rig/Worker tiers. Added CITE comments tracing this to OD-004. Bento grid enriched to encode authority through cell SIZE (2fr for Mayor) in addition to border WEIGHT.

3. **CD-001 (Reasoning Inside Code -> Zones 2, 5):** Velocity interleaving deployed. Added FAST meta-indicator labels between HEAVY role cards in Zone 2. Added prose-between-code paragraphs in Zone 5. Progressive disclosure prevents wall-of-identical-cards anti-pattern.

## Density Self-Assessment

**Above the fold (1440px):** The complexity ladder ASCII diagram dominates the first viewport. The warm cream background and Instrument Serif display type establish the metaphor immediately. The reader sees the Overseer's floor — spacious, literary, provocative. Density is appropriately sparse.

**Mid-page (Zone 2-3 transition):** Visible density shift as the white Operations zone with compressed role cards gives way to the dark Bedrock zone. Progressive disclosure means the Operations zone is scannable (name + function visible) with depth available on click. The bg shift from #FFFFFF to #1A1A1A is the most dramatic visual event.

**Closing zone (Zone 6):** The page resolves with warm cream return, generous 64px padding, and the orchestrator spectrum as a closing spatial event. The temperature buffer before Zone 6 ensures the CODE->PROVOCATIVE shift is not jarring. The footer mirrors the header's dark treatment, providing bookend closure.

**Honest assessment:** Density progression is visible and correct. The progressive disclosure additions reduce above-fold visual weight in Zone 2 — this is a tradeoff. The collapsed state is more scannable but less immediately rich. Pass 3 may want to evaluate whether the first role card (Mayor) should default to `open` for above-fold richness.

## Changes to Zone Architecture

- No zones added or removed. All 6 zones preserved from Pass 1.
- Zone 4 inner container narrowed to 640px (Finding 17).
- Zone 5->6 boundary enhanced with temperature-buffer class.
- ASCII diagrams updated to use `+` and `|` characters instead of Unicode box-drawing characters for broader font compatibility.

## Concerns for Pass 3

1. **Progressive disclosure default state:** All `<details>` start collapsed. Consider whether the Mayor card should be `open` by default for immediate above-fold richness in Zone 2.
2. **Callout frequency in Zone 5:** Three consecutive "Checkpoint" callouts in the Implementation section. Verify max 2 callouts per ~800px viewport section.
3. **Dark zone code blocks:** Border color #444444 against #111111 background — verify sufficient contrast at different monitor calibrations.
4. **Footer closing quote:** Uses inline style for Instrument Serif italic. Consider whether this should be a class for consistency.
5. **Bento grid at 1024px:** Falls back to single column. Verify this doesn't create an awkward transition where Deacon/Dogs cards are full-width despite being lower-authority roles.
