# 08: Multi-Coherence and Scale-Channel Cross-Reference

**Agent:** mc-channel-xref (Opus 4.6)
**Date:** 2026-02-17
**Sources Read:**
1. `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines, ALL read)
2. `16-multi-coherence-invocation.md` (951 lines, ALL read)
3. `15-scale-channel-invocation.md` (707 lines, ALL read)
4. `semantic-rules.md` (530 lines, ALL read)
5. `07-intentionality.html` (2,034 lines, ALL read)
6. `00-AUDIT-DATA.md` (109 lines, ALL read)

---

## 1. MULTI-COHERENCE RULES: Per-Rule Cross-Reference

### MC-01: CCS >= 0.30

| Field | Value |
|-------|-------|
| **Rule text** | CCS (Compositional Coupling Score) >= 0.30 for Flagship. CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1). |
| **Classification** | GUARDRAIL (binary threshold, no operational instructions for HOW to achieve coupling) |
| **What's in the HTML** | The HTML deploys 14 mechanisms (per header comment). However, the CSS evidence shows extremely weak coupling. The zone backgrounds (#7) use RGB differences of 1-8 points -- barely perceptible. The typographic convergence (#11) uses letter-spacing variations of 0.004-0.01em -- imperceptible without measurement. Border-weight (#1) varies across table types but tables are in isolated sections. Removing any single mechanism's CSS would NOT change the perceived meaning of other mechanisms. Estimated CCS: 0.05-0.10. |
| **What SHOULD be in the HTML** | Mechanisms should be LOAD-BEARING: removing spacing compression should make zone backgrounds feel arbitrary, removing zone backgrounds should make border-weights seem decorative. At least 5 mechanisms should have CCS >= 0.30 individually. |
| **Specific CSS to add** | The problem is not CSS -- it is COMPOSITION. The mechanisms need to be coupled through shared trajectories. Example fix: `.zone-s5 { background: var(--color-zone-dense); }` should pair with `.zone-s5 section { padding: var(--space-8); }` AND `.zone-s5 .component-block { border-left-width: var(--border-structural); }` AND `.zone-s5 p { line-height: 1.55; }` -- ALL encoding "dense zone" simultaneously. Currently each channel varies independently. |
| **Prompt gap** | MC-01 states the THRESHOLD (>= 0.30) but provides no PLAYBOOK for achieving it. The 16-MC invocation report has detailed worked examples (CD-006 CCS estimation, section 3.2) and the removal test protocol (section 3.4) but the prompt compressed this to a single sentence. The builder receives "CCS >= 0.30" with no worked example of how to structure CSS to achieve coupling. |

---

### MC-02: >= 3 reinforcing pairs

| Field | Value |
|-------|-------|
| **Rule text** | >= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels). Flagship aspiration; C-08 gate >= 2 is the binary minimum. |
| **Classification** | GUARDRAIL (count threshold, no instructions for what "reinforcing" looks like in CSS) |
| **What's in the HTML** | CSS comments CLAIM reinforcing pairs exist (e.g., "Cluster A: Refinement Gradient -- spacing co-varies with zone backgrounds (#7), border-weight (#1), density (#5)"). But the COMPUTED CSS shows: backgrounds vary by 1-8 RGB points (imperceptible), letter-spacing varies by 0.004em (imperceptible), border-weight only varies on tables (not zone-wide), paragraph margins are 16px EVERYWHERE. The "reinforcement" exists in comments, not in perception. Zero actual reinforcing pairs at perceptual threshold. |
| **What SHOULD be in the HTML** | At minimum 3 pairs where both mechanisms produce a VISIBLE change at the same section boundary. Example: dense sections should have VISIBLY warmer/cooler backgrounds AND VISIBLY tighter spacing AND VISIBLY heavier borders. Currently the variation is sub-perceptual. |
| **Specific CSS to add** | Zone 2 (dense) needs VISIBLE differentiation: `background: #F5F0E8` (not #FEFEFE which is invisible), `padding: 24px` (not 32px which is barely different from 40px), component borders `4px solid var(--color-text)` (not 4px solid var(--color-primary) everywhere). Zone 1 (sparse) needs contrasting treatment: `background: #FEF9F5`, `padding: 64px`, borders `1px solid var(--color-border-subtle)`. The reader must SEE the difference without measuring pixels. |
| **Prompt gap** | The 16-MC invocation report (section 2.1) provides concrete CSS examples of reinforcing pairs from OD-004 and CD-006, including the critical test: "if you describe it as 'the page got heavier,' you have reinforcement." The prompt preserves the count (>= 3) but drops the perceptual test, the CSS examples, and the atmospheric vocabulary. Result: builder writes CSS comments claiming reinforcement while producing imperceptible variation. |

---

### MC-03: >= 2 modulating chains

| Field | Value |
|-------|-------|
| **Rule text** | >= 2 modulating chains (one mechanism controls another's intensity). |
| **Classification** | GUARDRAIL (count threshold, no CSS operational instructions) |
| **What's in the HTML** | The CSS does have `.component-block.dense` and `.component-block.sparse` variants (lines 481-498) with different padding values (8px/12px vs 12px/24px). This is ONE modulating chain (zone density -> component internals). However, only 2 `.dense` and 1 `.sparse` component-blocks appear in the HTML. The variation is present but barely exercised. No second modulating chain exists. Tables do NOT modulate based on zone -- `.table-dense` is a fixed class, not zone-responsive. |
| **What SHOULD be in the HTML** | At least 2 chains where section-level density PROPAGATES into component internals. Tables in dense zones should have tighter cell padding. Code blocks in sparse zones should have more generous internal spacing. The same callout should look visibly different in Zone 1 vs Zone 2. |
| **Specific CSS to add** | Add zone-responsive table modulation: `.zone-s5 table td, .zone-s7 table td, .zone-s8 table td { padding: 8px 12px; }` and `.zone-s1 table td, .zone-s3 table td, .zone-s12 table td { padding: 14px 18px; }`. Add zone-responsive code block modulation: `.zone-s1 .sequence-block { padding: var(--space-8); }` vs `.zone-s8 .sequence-block { padding: var(--space-4); }`. |
| **Prompt gap** | The 16-MC invocation (section 2.2) has the critical test: "Do components INSIDE dense sections look different from components INSIDE sparse sections? If the same callout looks identical regardless of which section contains it, you have ZERO modulation." The prompt drops this test entirely. Builder receives "2+ chains" with no diagnostic. |

---

### MC-04: >= 2 responding sequences

| Field | Value |
|-------|-------|
| **Rule text** | >= 2 responding sequences (mechanism A's output triggers mechanism B). |
| **Classification** | GUARDRAIL (count threshold only) |
| **What's in the HTML** | One clear responding sequence: dark header (#13) -> drop cap (#16). The drop cap uses `color: var(--color-primary)` which echoes the header's 3px red border. This is a legitimate response chain. No second responding sequence is evident. The transition between sections does NOT show responding behavior -- each section has independent styling. |
| **What SHOULD be in the HTML** | At least 2 responding sequences. Example second sequence: the featured table (S5, 4px red border-left) creates heavy visual weight; S6 should RESPOND with a lighter, text-only treatment that acknowledges and releases that weight. Currently S6 is just "more paragraphs" with no designed response to S5's anchor weight. |
| **Specific CSS to add** | S6 should explicitly step down from S5's weight: `.zone-s6 h2 { font-size: var(--type-h3); font-weight: 400; }` (smaller heading = deliberate de-emphasis after peak). S6's first paragraph could use a subtle left-margin indent: `.zone-s6 .page-container > p:first-of-type { margin-left: var(--space-6); }` to create a visual "stepping back" from S5's featured table. |
| **Prompt gap** | The 16-MC invocation (section 2.3) explains the CD-006 header-to-drop-cap sequence and DD-006 visualization-to-demonstration sequence with CSS examples and the critical binary check: "Remove the preceding section entirely. Does the responding mechanism still feel JUSTIFIED?" The prompt preserves only the count threshold. |

---

### MC-05: >= 2 contrasting deployments

| Field | Value |
|-------|-------|
| **Rule text** | >= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful). |
| **Classification** | GUARDRAIL (count threshold only) |
| **What's in the HTML** | Drop cap (#16) appears in S1 only -- its absence from S2-S12 IS meaningful (S1 = ceremonial opening). This is 1 contrasting deployment. Code blocks (#17) appear in S8 only -- their absence from other sections creates a "dark center" landmark. This could count as a second contrast. But neither is DOCUMENTED as deliberate contrast -- the restraint is implicit, not articulated. |
| **What SHOULD be in the HTML** | At least 2 mechanisms with documented presence/absence patterns. Zone backgrounds should be deliberately ABSENT from some sections (transparent background = breathing space BECAUSE adjacent sections have color). Component blocks should be deliberately ABSENT from the densest analytical sections, present only in teaching/transition sections. |
| **Specific CSS to add** | Not a CSS problem -- a compositional decision problem. However, CSS could reinforce contrast by making the ABSENCE zones visually distinct: `.zone-s6 { background: transparent; }` (explicit breathing) between `.zone-s5 { background: var(--color-zone-dense); }` and `.zone-s7 { background: var(--color-zone-dense); }`. Currently all zones have backgrounds (even if barely different). |
| **Prompt gap** | The 16-MC invocation (section 2.4) has detailed contrast theory including deployment ratios ("1/8 = 0.125" for drop cap) and the anti-pattern warning ("Deploying a mechanism uniformly across all sections eliminates contrast"). The prompt drops the deployment ratio concept and the anti-pattern warning. |

---

### MC-06: >= 1 cascading chain of 3+ mechanisms

| Field | Value |
|-------|-------|
| **Rule text** | >= 1 cascading chain of 3+ mechanisms (A enables B enables C). VALUE TABLE for cascading: 1 chain of 3 = minimum. 1 chain of 4+ = STRONG. |
| **Classification** | GUARDRAIL with VALUE TABLE (the only MC rule with partial playbook content) |
| **What's in the HTML** | CSS comments claim a cascade: "Cluster A: Refinement Gradient -- spacing co-varies with zone backgrounds (#7), border-weight (#1), density (#5)." But the COMPUTED VALUES show: zone backgrounds differ by 1-8 RGB points (imperceptible cascade), spacing varies from 32px-80px (visible but only at zone transitions, not per-section), border-weight varies only on tables (not section-wide). The "cascade" exists in architectural comments, not in perceptible value co-variation. If you built the CD-006 value table (Act 1: 64px/warm/1px -> Act 3: 32px/neutral/4px -> Act 4: 48px/warm/3px), the flagship equivalent would show: S1: 64px/FEF9F5/tables-have-3px -> S5: 32px/FEFEFE/tables-have-4px -> S12: 64px/FEF9F5/tables-have-1px. The spacing cascade is VISIBLE. The background cascade is INVISIBLE. The border cascade is TABLE-SPECIFIC not zone-wide. Net: partial cascade, not full. |
| **What SHOULD be in the HTML** | A value table where ALL cascade members change PERCEPTIBLY at each zone transition. Backgrounds should shift by 20+ RGB points (not 1-8). Spacing should shift by 16px+ (already partially happening). Borders should apply zone-wide (not just to tables). |
| **Specific CSS to add** | Zone-wide border presence: `.zone-s5 section, .zone-s7 section, .zone-s8 section { border-left: var(--border-micro) solid var(--color-border-subtle); padding-left: var(--space-6); }` (dense zones get subtle left-border framing). Zone-wide background differentiation: `--color-zone-dense: #F5F0E8;` (shift from #FEFEFE which is indistinguishable from white). Typography tightening: `.zone-s5 p, .zone-s7 p, .zone-s8 p { line-height: 1.55; font-size: 15px; }` (visible, not 0.004em letter-spacing). |
| **Prompt gap** | The 16-MC invocation (section 2.5) has a full CD-006 value table showing padding/background/border values at each act. This is THE most operational content in the entire invocation report. The prompt includes the CD-006 example in A5 but as CONVICTION text, not as BUILDER INSTRUCTIONS. The builder never receives "build a value table for YOUR cascade" as an operational directive. |

---

### MC-07: Cross-dimension coherence >= 10/15 pairs

| Field | Value |
|-------|-------|
| **Rule text** | Cross-dimension coherence: >= 10 of 15 possible dimension pairs actively coupled. The 6 dimensions: SPATIAL, TEMPORAL, CHROMATIC, TYPOGRAPHIC, RHYTHMIC, SEMANTIC. |
| **Classification** | GUARDRAIL (count threshold for pair coverage) |
| **What's in the HTML** | Let me assess each pair in the HTML: |

**Cross-dimension pair assessment:**

| # | Pair | Coupled? | Evidence |
|---|------|----------|----------|
| 1 | Spatial x Chromatic | WEAKLY | Dense zones (32px padding) have #FEFEFE backgrounds, sparse zones (64px) have #FEF9F5. But the chromatic difference is 1-8 RGB points -- sub-perceptual. Conceptually coupled, perceptually independent. |
| 2 | Spatial x Typographic | WEAKLY | Dense zones have letter-spacing -0.003em, sparse zones have +0.006em. Difference is 0.009em -- imperceptible. Line-height varies 1.65-1.8 (visible at extremes). Half-coupled. |
| 3 | Spatial x Temporal | NO | No progressive disclosure is zone-dependent. S11's progressive disclosure exists regardless of zone. |
| 4 | Spatial x Rhythmic | NO | Paragraph margin-bottom is 16px EVERYWHERE. No rhythm variation by zone. |
| 5 | Spatial x Semantic | WEAKLY | Component blocks have `.dense`/`.sparse` variants with different padding. But only 3 instances in the HTML. Coupled in CSS, barely exercised in practice. |
| 6 | Chromatic x Typographic | NO | Zone backgrounds and typography vary independently. S5 (cool background) uses the same body font as S1 (warm background). No coupling. |
| 7 | Chromatic x Temporal | NO | Color temperature does not track argument arc. S9 (refined/clean cream) is nearly the same as S1 (raw/warm cream). |
| 8 | Chromatic x Rhythmic | NO | No rhythmic variation is connected to background color. |
| 9 | Chromatic x Semantic | NO | Component border-left colors are fixed per class, not zone-dependent. A `.component-block` has the same red border in S1 and S12. |
| 10 | Typographic x Temporal | NO | Typography does not track disclosure arc. |
| 11 | Typographic x Rhythmic | NO | No rhythm-typography coupling. |
| 12 | Typographic x Semantic | WEAKLY | Component labels use mono/uppercase, body uses sans/regular. This is 2-zone DNA -- structural but present. |
| 13 | Temporal x Rhythmic | NO | No coupling. |
| 14 | Temporal x Semantic | NO | No coupling. |
| 15 | Rhythmic x Semantic | NO | No coupling. |

**Verdict: 0-1 fully coupled pairs, 3-4 weakly coupled pairs. MC-07 FAILS catastrophically (need >= 10).**

| **What SHOULD be in the HTML** | At least 10 pairs showing deliberate coherence. The 16-MC invocation (section 6.1) provides a complete 15-pair matrix with CSS examples for every pair. |
| **Specific CSS to add** | Too extensive for a single fix -- requires architectural rework. Key additions: (1) Dense zone typography should shift family/weight, not just letter-spacing: `.zone-s5 h2 { font-weight: 500; }`. (2) Warm backgrounds should have warm border colors: `.zone-s1 .component-block { border-left-color: var(--color-amber); }`. (3) Rhythmic variation should track density: `.zone-s5 p + p { margin-top: var(--space-2); }` vs `.zone-s1 p + p { margin-top: var(--space-4); }`. |
| **Prompt gap** | The 16-MC invocation has a FULL 15-pair matrix (section 6.1) with CSS evidence for every pair. The prompt preserves only the count ("10/15") and the dimension names. The builder has no idea what "Spatial x Chromatic coupling" looks like in CSS. This is THE largest information loss in the MC domain. |

---

### MC-08: Anti-metronome >= 3 distinct spacing values

| Field | Value |
|-------|-------|
| **Rule text** | Anti-metronome: >= 3 distinct padding/margin values across section boundaries. |
| **Classification** | GUARDRAIL (binary threshold, simple to verify) |
| **What's in the HTML** | Section padding values: S1=64px, S2=80px, S3=48px, S4=48px, S5=32px, S6=40px, S7=32px, S8=32px, S9=40px, S10=40px, S11=48px, S12=64px. Distinct values: 32, 40, 48, 64, 80 = **5 distinct values. MC-08 PASSES.** |
| **What SHOULD be there** | Already passing. The spacing contour is: 64->80->48->48->32->40->32->32->40->40->48->64 which forms a CRESCENDO-RESOLUTION arc (wide->narrow->wide). |
| **Specific CSS to add** | None needed -- this is the ONE MC rule that works. |
| **Prompt gap** | MC-08 works because it is simple, binary, and self-verifiable. It is also the ONLY MC rule the HTML satisfies. The lesson: binary rules with simple verification achieve compliance; aspirational rules with complex verification achieve nothing. |

---

## 2. SCALE-CHANNEL RULES: Per-Rule Cross-Reference

### SC-01: Maximum 5 scales, preferred 2-3

| Field | Value |
|-------|-------|
| **Rule text** | Maximum 5 scales. Preferred 2-3 for flagship. Scale count NEVER takes priority over PA-05. Named scale definitions provided (PAGE/SECTION/COMPONENT/ELEMENT/DETAIL). |
| **Classification** | GUARDRAIL (ceiling constraint, bias toward fewer scales) |
| **What's in the HTML** | Scales active: (1) PAGE -- header/footer/zone structure, (2) SECTION -- 12 sections with zone backgrounds, (3) COMPONENT -- component-blocks, tables, code blocks, (4) ELEMENT -- not active (no distinct element-level treatment), (5) DETAIL -- letter-spacing/line-height variation only. Effectively 3 scales active (PAGE, SECTION, COMPONENT), with Scale 5 (DETAIL) attempting variation through sub-perceptual changes. |
| **What SHOULD be there** | 2-3 scales with DEEP channel coverage per scale. The current 3-scale approach is correct per the anti-scale model. The problem is not scale count -- it is channel depth per scale. |
| **Specific CSS** | No CSS change needed for scale count. |
| **Prompt gap** | SC-01 works as intended. The rule successfully constrained scale ambition. |

---

### SC-02: >= 5 of 7 channels actively used

| Field | Value |
|-------|-------|
| **Rule text** | >= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional. |
| **Classification** | GUARDRAIL (count threshold, channel definitions provided) |
| **What's in the HTML** | Channel assessment: |

| Channel | Active? | Evidence |
|---------|---------|----------|
| Ch1 CHROMATIC | BARELY | Zone backgrounds differ by 1-8 RGB points. Accent colors on tables/components. Present but sub-perceptual for backgrounds. |
| Ch2 TYPOGRAPHIC | BARELY | Letter-spacing varies 0.004-0.01em. Line-height varies 1.65-1.8. Type FAMILY and SIZE are completely uniform across zones. |
| Ch3 SPATIAL | PARTIALLY | Section padding varies 32-80px (visible). Paragraph margins UNIFORM at 16px (not visible). |
| Ch4 STRUCTURAL | **ABSENT** | Zero section borders. Zero section dividers within content. Zero containment elements. The divider-smooth/bridge/breathing elements exist BETWEEN sections but carry no semantic weight within them. |
| Ch5 DENSITY | PARTIALLY | Content volume varies by section. Tables denser in Zone 2. But density is a CONTENT property, not a CSS property -- it happened by accident of content length, not by design. |
| Ch6 RHYTHMIC | **ABSENT** | No repeating alternation pattern. No heartbeat. Paragraph margin is metronomic (16px everywhere). Component stacking is not rhythmic. |
| Ch7 INTENTIONAL | PARTIALLY | Self-reference exists in S3 and S7 (content describes its own form). Bookending exists (S1/S12 structural echo). Pedagogical sequencing exists (Orient/Deepen/Synthesize). But these are CONTENT decisions, not CSS decisions -- Ch7 is an Opus domain, not a builder domain. |

**Verdict: 1-2 channels truly active (Spatial partially, Intentional partially). Ch4 and Ch6 completely ABSENT. SC-02 FAILS.**

| **What SHOULD be in the HTML** | At least 5 channels with VISIBLE semantic encoding. Ch4 (Structural) should show borders/dividers that carry meaning. Ch6 (Rhythmic) should show deliberate alternation patterns. |
| **Specific CSS to add** | **Ch4 fix:** Add section-level containment: `.zone-s5, .zone-s7, .zone-s8 { border-left: var(--border-structural) solid var(--color-border); }` (dense zones get structural framing). Add within-section dividers: `.zone-s5 h2 + p { border-top: var(--border-micro) solid var(--color-border-subtle); padding-top: var(--space-4); }`. **Ch6 fix:** Add rhythmic alternation: `.zone-s5 .component-block:nth-child(even) { margin-left: var(--space-6); }` (alternating indentation). Add paragraph rhythm variation: `.zone-s5 p:nth-child(odd) { margin-bottom: var(--space-6); }` `.zone-s5 p:nth-child(even) { margin-bottom: var(--space-3); }`. |
| **Prompt gap** | SC-02 provides channel DEFINITIONS (what each channel IS) but no channel PLAYBOOK (how to make each channel ACTIVE in CSS). The 15-SC invocation report (section 2) has per-channel manifestation tables at each scale with CSS examples. The prompt compressed this to a definition list. The builder knows Ch4 = "borders/dividers/containment" but not "in dense zones, add left-border framing to sections; in sparse zones, remove it." |

---

### SC-03: Richness matrix >= 30/35 cells

| Field | Value |
|-------|-------|
| **Rule text** | Richness matrix coverage: >= 30 of 35 cells (5 scales x 7 channels) populated for Flagship. |
| **Classification** | GUARDRAIL (aspirational count, no operational path) |
| **What's in the HTML** | Matrix assessment: |

```
              Ch1:Chrom  Ch2:Typo  Ch3:Spatial  Ch4:Struct  Ch5:Density  Ch6:Rhythm  Ch7:Intent
Navigation   [WEAK]     [YES]     [YES]        [YES]       [NO]         [NO]        [NO]
Page         [WEAK]     [WEAK]    [YES]        [NO]        [WEAK]       [NO]        [YES]
Section      [WEAK]     [WEAK]    [PARTIAL]    [NO]        [WEAK]       [NO]        [YES]
Component    [YES]      [YES]     [PARTIAL]    [YES]       [NO]         [NO]        [NO]
Character    [NO]       [WEAK]    [NO]         [NO]        [NO]         [NO]        [NO]
```

**Filled cells (generously counting WEAK as filled): ~14-16/35. FAILS (need 30).**
**Filled cells (strictly counting only VISIBLE design): ~8-10/35. Catastrophic gap.**

| **What SHOULD be there** | 30+ cells filled with DELIBERATE, VISIBLE design. |
| **Prompt gap** | SC-03 states the target but provides no matrix template. The 15-SC invocation (section 3) has a blank matrix AND worked examples showing how CD-006 fills 33/35 and Middle fills 18/35. The builder never sees the matrix. |

---

### SC-04: No single channel > 40% of semantic load

| Field | Value |
|-------|-------|
| **Rule text** | No single channel carries > 40% of total semantic load. Minimum channel diversity. |
| **Classification** | GUARDRAIL (ceiling constraint, no measurement method) |
| **What's in the HTML** | Ch7 (Intentional) carries the vast majority of semantic weight -- the self-reference, bookending, and pedagogical sequencing are where all the design intelligence lives. Ch3 (Spatial) carries most of the CSS-level variation. All other channels are near-zero. Estimated load: Ch7 ~50%, Ch3 ~25%, Ch1 ~10%, Ch2 ~5%, Ch4 ~0%, Ch5 ~5%, Ch6 ~0%. SC-04 FAILS (Ch7 > 40%). |
| **What SHOULD be there** | Semantic load distributed across 4+ channels, each carrying 15-30%. |
| **Prompt gap** | SC-04 provides no method for MEASURING semantic load. No operational definition of "load." The 15-SC invocation provides Semantic Resonance Score (SRS, section 9, Formula 4) but this formula never made it into the prompt. |

---

### SC-05: Channel Dominance Threshold -- each channel at >= 2 scales

| Field | Value |
|-------|-------|
| **Rule text** | Channel Dominance Threshold (CDT): each channel appears at >= 2 scales. |
| **Classification** | GUARDRAIL (per-channel minimum, verifiable) |
| **What's in the HTML** | Ch1 (Chromatic): Page + Section + Component = 3 scales (PASSES but barely perceptible). Ch2 (Typographic): Navigation + Page + Component = 3 scales (PASSES but barely varies). Ch3 (Spatial): Page + Section + Component = 3 scales (PASSES). Ch4 (Structural): Component only (table borders, component borders) = 1 scale (FAILS). Ch5 (Density): Page + Section = 2 scales (PASSES barely). Ch6 (Rhythmic): 0 scales (FAILS). Ch7 (Intentional): Page + Section = 2 scales (PASSES). |
| **Verdict:** | Ch4 FAILS (1 scale), Ch6 FAILS (0 scales). |
| **Prompt gap** | Rule is clear but channels aren't active enough to hit the threshold. Same root cause: no playbook for channel activation. |

---

### SC-06: Restraint ratio >= 1.5:1 per channel

| Field | Value |
|-------|-------|
| **Rule text** | Restraint Ratio per channel: reject-to-deploy >= 1.5:1. |
| **Classification** | GUARDRAIL (ratio threshold, requires rejection documentation) |
| **What's in the HTML** | C-12 requires a rejection log with >= 21 entries. No rejection log exists in the HTML output or build artifacts. SC-06 is UNVERIFIABLE because no rejections were documented. |
| **Prompt gap** | SC-06 requires C-12 compliance, which requires a rejection log artifact. The prompt specifies this but the GATE system doesn't enforce artifact production for rejections. |

---

### SC-07: Scale Coherence Index -- same principle at >= 3 scales

| Field | Value |
|-------|-------|
| **Rule text** | Scale Coherence Index: same design principle observable at >= 3 scales. |
| **Classification** | GUARDRAIL (coherence verification, subjective) |
| **What's in the HTML** | The "refinement gradient" metaphor (raw -> analytical -> refined) is observable at Page scale (3 zones) and Section scale (section padding/background shifts). It is NOT observable at Component scale (components look the same in all zones). SC-07 PARTIALLY PASSES (2 scales, need 3). |
| **Prompt gap** | SC-07 is a JUDGMENT rule with no binary verification. The 16-MC invocation (section 4, Fractal Coherence) provides a 5-scale verification protocol with per-scale documentation format. The prompt has this as C-20 (fractal coherence) but without the per-scale documentation template. |

---

### SC-08: Channel Saturation Prevention -- no scale has ALL 7 active

| Field | Value |
|-------|-------|
| **Rule text** | Channel Saturation Prevention Score: no scale has ALL 7 channels active simultaneously. |
| **Classification** | GUARDRAIL (ceiling constraint, prevents over-design) |
| **What's in the HTML** | No scale has even 5 channels active. SC-08 PASSES trivially -- but only because so few channels are active at any scale. This is a FLOOR problem masquerading as a ceiling constraint. |
| **Prompt gap** | None -- SC-08 works but is irrelevant given the current channel deficit. |

---

### SC-09: >= 3 channels shift at every section transition

| Field | Value |
|-------|-------|
| **Rule text** | Minimum 3 channels shift at every section transition. Channels: chromatic, typographic, spatial, structural, density, rhythmic. |
| **Classification** | GUARDRAIL (per-transition minimum, verifiable) |
| **What's in the HTML** | Transition analysis: |

| Transition | Ch1 Chrom | Ch2 Typo | Ch3 Spatial | Ch4 Struct | Ch5 Density | Ch6 Rhythm | Total |
|------------|-----------|----------|-------------|------------|-------------|------------|-------|
| S1->S2 | YES (FEF9F5->FAF5ED) | NO | YES (64->80) | NO | YES (prose->quote) | NO | **3** |
| S2->S3 | YES (FAF5ED->FDF8F2) | BARELY | YES (80->48) | NO | YES (quote->table) | NO | **3** |
| S3->S4 | BARELY | BARELY | NO (48->48) | NO | NO | NO | **0-1** |
| S4->S5 | YES (FDFBF8->FEFEFE) | BARELY | YES (48->32) | NO | YES (medium->dense) | NO | **3** |
| S5->S6 | YES (FEFEFE->FBF7F1) | BARELY | YES (32->40) | NO | YES (dense->medium) | NO | **3** |
| S6->S7 | YES (FBF7F1->FEFEFE) | NO | YES (40->32) | NO | YES (medium->dense) | NO | **3** |
| S7->S8 | NO (both FEFEFE) | NO | NO (both 32) | NO | NO | NO | **0** |
| S8->S9 | YES (FEFEFE->FEFCFA) | BARELY | YES (32->40) | NO | YES (dense->medium) | NO | **3** |
| S9->S10 | BARELY | NO | NO (both 40) | NO | NO | NO | **0-1** |
| S10->S11 | BARELY | NO | YES (40->48) | NO | NO | NO | **1** |
| S11->S12 | BARELY | BARELY | YES (48->64) | NO | YES (medium->sparse) | NO | **2** |

**FAILING transitions:** S3->S4 (0-1), S7->S8 (0), S9->S10 (0-1), S10->S11 (1), S11->S12 (2). That is 5 of 11 transitions FAILING SC-09.

| **What SHOULD be there** | Every transition should shift >= 3 channels. S3->S4 needs chromatic + spatial differentiation. S7->S8 needs ANY channel shift (currently identical treatment). |
| **Specific CSS to add** | **S7->S8 fix:** S8 needs visual differentiation: `background: #F8F5F0;` (not identical to S7). S8's code blocks already provide structural differentiation but the SECTION ITSELF is identical to S7. **S9->S10 fix:** S10 needs structural shift: `.zone-s10 { border-top: var(--border-micro) solid var(--color-border); }` (adding containment boundary). |
| **Prompt gap** | SC-09 provides the rule and verification method but the builder self-check (B10) only mentions it as one checkbox among 22. No per-transition worksheet exists. The 15-SC invocation (section 5, "Channel Self-Check") has a 3-transition verification format, but the prompt doesn't give the builder a per-transition planning template. |

---

### SC-10: Chromatic-density alignment

| Field | Value |
|-------|-------|
| **Rule text** | Chromatic-density alignment: zone-sparse sections (warm backgrounds) MUST have LESS content per viewport than zone-dense sections (neutral/cool backgrounds). |
| **Classification** | GUARDRAIL (alignment rule, verifiable) |
| **What's in the HTML** | S1 (warm #FEF9F5, sparse) = 4 paragraphs. S5 (near-white #FEFEFE, dense) = 3 paragraphs + 1 table + 1 component = more content. SC-10 PASSES for S1 vs S5. But S6 (warm #FBF7F1) has 3 paragraphs while S7 (near-white #FEFEFE) also has 3 paragraphs + components. S6's warm background should be sparser than S7 -- this is borderline. Overall: PASSES but barely. |
| **Prompt gap** | SC-10 is a clear, binary rule. It mostly works. No major gap. |

---

## 3. THE VISUAL DIFFERENCE: Full Operationalization

### What the HTML looks like NOW:
A long-form article with 12 sections on warm cream background. Every section looks nearly identical: same text color, same font size, same paragraph spacing (16px), same heading size (28px). The ONLY visible variations are: (1) section padding (32-80px), (2) table border treatments (varying per table class), (3) drop cap in S1, (4) dark code blocks in S8, (5) pullquote in S2, (6) header/footer dark bookends. Between sections, subtle background color shifts are mathematically present but perceptually invisible (1-8 RGB points). The page reads as "well-formatted document" not "designed experience."

### What the HTML WOULD look like with all MC and SC rules fully operationalized:

**MC-01 (CCS >= 0.30):** Every mechanism removal would visibly break other mechanisms. Dense zones would LOOK different from sparse zones across 4+ CSS channels simultaneously.

**MC-02 (3 reinforcing pairs):** At Zone 2 transitions, the reader would see VISUALLY SIMULTANEOUS shifts: background darkening + spacing compressing + border weight increasing + type tightening. "The page got heavier" not "the background changed AND the spacing changed AND..."

**MC-03 (2 modulating chains):** A callout in S5 (dense) would have 8px label padding, 12px body padding. The SAME callout in S1 (sparse) would have 12px label padding, 24px body padding. Tables in dense zones would have 8px cells; tables in sparse zones would have 14px cells. Components would RESPOND TO THEIR CONTAINERS.

**MC-04 (2 responding sequences):** After the featured 4px table in S5, S6 would deliberately step DOWN with a lighter heading and text-only treatment -- acknowledging the visual weight that preceded it. After the dark code blocks in S8, S9 would step DOWN with a lighter, airier table treatment.

**MC-05 (2 contrasting deployments):** Zone 2 sections would have LEFT BORDER FRAMING (4px border-left). Zone 1 and 3 sections would have NO framing. The presence/absence of the frame would mark the analytical core.

**MC-06 (cascade of 3+):** A VALUE TABLE would show:
- S1 (orient): padding=64px, bg=#FEF9F5, border=1px, type=1.8lh
- S5 (deepen): padding=32px, bg=#F5F0E8, border=4px, type=1.55lh
- S12 (synthesize): padding=64px, bg=#FEF9F5, border=1px, type=1.8lh

ALL FOUR properties changing in the SAME direction at each zone boundary.

**MC-07 (10/15 pairs):** Border weight would track background warmth (Structural x Chromatic). Type weight would track spacing (Typographic x Spatial). Dense zones would have tighter rhythmic alternation (Density x Rhythmic). The page would feel like a SINGLE atmospheric system, not 6 independent CSS property groups.

**SC-02 (5/7 channels):** Ch4 (Structural) would show zone-level borders/containment framing dense sections. Ch6 (Rhythmic) would show deliberate alternation patterns (paragraph spacing varying every-other, component indentation alternating).

**SC-09 (3 channels per transition):** EVERY section boundary would produce at least 3 simultaneous visual changes. No two adjacent sections would look the same.

### The Net Visual Difference:
The page would transform from "well-formatted article with subtle background tints" to "designed experience where scrolling through zones FEELS like passing through different atmospheric states." The dense analytical core (S5-S8) would be VISIBLY tighter, heavier, cooler. The opening (S1-S4) would be VISIBLY warmer, more generous, lighter. The closing (S9-S12) would VISIBLY settle into confidence. The reader would not need to measure pixels to feel the compositional arc.

---

## 4. OPERATIONAL CONTENT LOST IN COMPRESSION

### From 16-multi-coherence-invocation.md (951 lines -> ~10 lines in prompt):

| Content | Lines in 16-MC | Lines in Prompt | What was lost |
|---------|---------------|-----------------|---------------|
| CD-006 worked CCS example (value table) | ~30 lines | 5 lines (A5) | Full per-mechanism removal impact table |
| OD-004 reinforcing pair CSS example | 15 lines | 0 | Concrete `.stratum--established` CSS showing 3-channel co-variation |
| DD-006 modulating chain CSS example | 20 lines | 0 | `.section--dense .callout` vs `.section--sparse .callout` CSS |
| CD-006 responding sequence CSS | 15 lines | 0 | Header-to-drop-cap color echo CSS |
| Restraint map contrast CSS | 15 lines | 0 | Zone background presence/absence pattern |
| CD-006 cascade value table | 20 lines | 0 | 4-act padding/background/border progression |
| 15-pair cross-dimension matrix | 40 lines | 1 line (6 names) | CSS evidence for all 15 dimension pairs |
| Fractal coherence 5-scale protocol | 25 lines | 2 lines (C-20) | Per-scale documentation template |
| Anti-metronome spacing contour | 15 lines | 1 line | CD-006 80->48->32->32->48->48->64->80 example |
| Builder self-check (2 min) | 30 lines | 0 | 8-item operational checklist with per-item time budget |
| Binary verification protocols | ~40 lines (R-01 through CA-03) | 0 | Per-interaction-type YES/NO checks |
| Self-reference detection protocol | 20 lines | 1 line (C-16) | 3-criterion detection + organic vs bolted-on test |
| Conviction thesis text | 30 lines | 0 (separate A5) | The "load-bearing vs wallpaper" atmospheric framing |

**Total operational content lost: ~295 lines of concrete CSS examples, verification protocols, and worked examples. Replaced by ~10 lines of thresholds.**

### From 15-scale-channel-invocation.md (707 lines -> ~15 lines in prompt):

| Content | Lines in 15-SC | Lines in Prompt | What was lost |
|---------|---------------|-----------------|---------------|
| 7 channel definitions with 5-scale manifestations | 90 lines | 7 lines (SC-02) | Per-channel, per-scale CSS examples |
| Channel interaction matrix | 20 lines | 0 | REINFORCING/INDEPENDENT pair classification |
| Richness matrix template (5x7 grid) | 15 lines | 0 | Visual grid showing which cells to fill |
| Tier coverage targets (Floor/Middle/Ceiling/Flagship) | 10 lines | 1 line (SC-03) | Matrix cell counts per tier |
| Crown jewel matrix fills (CD-006 33/35, DD-006 24/35) | 15 lines | 0 | Concrete examples of what "filled" means |
| 80/20 priority ordering (which cells matter most) | 20 lines | 0 | Impact hierarchy for attention allocation |
| 8 binary rules (C-01 through C-08) | 80 lines | ~5 lines (SC-09, SC-10) | Only 2 of 8 made it to the prompt |
| Channel self-check for builder | 20 lines | 0 | 3-transition verification worksheet |
| Agent-channel ownership table | 30 lines | 3 lines (C1 Pass 2) | Per-agent channel responsibilities |
| Channel communication protocol | 20 lines | 3 lines (CP-F) | Checkpoint A/B/D content requirements |
| 6 anti-patterns with symptoms/fixes | 50 lines | 0 | Scale Stacking, Channel Monotony, Channel Cacophony, etc. |
| 7 operational formulas (CDT, RDT, MCS, SRS, RR, SCI, CSPS) | 70 lines | 2 lines (S-16, S-17) | Only SCI made it; CDT, RDT, MCS, SRS, CSPS all lost |
| Builder quick-reference checklist | 40 lines | 0 | Before/while/after/common-failure-modes structure |

**Total operational content lost: ~480 lines of channel manifestation examples, anti-patterns, formulas, and builder worksheets. Replaced by ~15 lines of thresholds and definitions.**

---

## 5. THE ROOT CAUSE: GUARDRAIL vs PLAYBOOK

### The Pattern

| Rule | Type in Prompt | Type Needed | Gap |
|------|---------------|-------------|-----|
| MC-01 (CCS >= 0.30) | GUARDRAIL (threshold) | PLAYBOOK (how to structure coupled CSS) | CSS examples of coupled mechanisms |
| MC-02 (3 reinforcing pairs) | GUARDRAIL (count) | PLAYBOOK (how to make CSS co-vary) | Co-variation CSS templates |
| MC-03 (2 modulating chains) | GUARDRAIL (count) | PLAYBOOK (how to make components zone-responsive) | `.section--dense .component` CSS patterns |
| MC-04 (2 responding sequences) | GUARDRAIL (count) | PLAYBOOK (how to design responses) | Weight-acknowledgment CSS patterns |
| MC-05 (2 contrasting) | GUARDRAIL (count) | PLAYBOOK (how to deploy presence/absence) | Deployment ratio calculation |
| MC-06 (1 cascade of 3+) | GUARDRAIL (count) | PLAYBOOK (how to build value tables) | Value table template |
| MC-07 (10/15 pairs) | GUARDRAIL (count) | PLAYBOOK (CSS for each pair) | 15-pair CSS matrix |
| MC-08 (3 distinct spacings) | GUARDRAIL (count) | None (already works) | N/A |
| SC-02 (5/7 channels) | GUARDRAIL (count) | PLAYBOOK (how to activate each channel) | Per-channel activation CSS |
| SC-03 (30/35 matrix) | GUARDRAIL (count) | PLAYBOOK (matrix template + priority order) | Visual grid + 80/20 list |
| SC-09 (3 channels per transition) | GUARDRAIL (count) | PLAYBOOK (per-transition worksheet) | Transition planning template |

**The master execution prompt is 97 rules of "what NOT to violate." It is ~0 rules of "here is the CSS that produces compliance."**

The 16-MC and 15-SC invocation reports contain ~775 lines of PLAYBOOK content: CSS examples, worked value tables, verification worksheets, per-channel activation guides, anti-pattern descriptions with fixes. The prompt compressed this to ~25 lines of thresholds and counts.

**The builder received the guardrails but not the playbook. The guardrails told them "CCS >= 0.30" but not "here is what CSS with CCS 0.55 looks like."**

### What Would Fix This

The builder needs a **CHANNEL ACTIVATION WORKSHEET** (not more rules):

```
FOR EACH SECTION TRANSITION, fill in:

| Channel | Before Value | After Value | Same Direction? |
|---------|-------------|-------------|----------------|
| Chromatic (bg) | _________ | _________ | YES / NO |
| Typographic (lh/ls/fw) | _________ | _________ | YES / NO |
| Spatial (padding) | _________ | _________ | YES / NO |
| Structural (border) | _________ | _________ | YES / NO |
| Density (content mass) | _________ | _________ | YES / NO |
| Rhythmic (pattern) | _________ | _________ | YES / NO |

Count of YES: _____ (need >= 3 for SC-09, >= 2 pairs for MC-02)
```

And a **CASCADE VALUE TABLE TEMPLATE**:

```
FOR YOUR DENSITY ARC, fill in:

| Zone | Padding | Background | Border | Line-Height | Direction |
|------|---------|------------|--------|-------------|-----------|
| Sparse | ____px | #_______ | ___px | ____ | OPENING |
| Medium | ____px | #_______ | ___px | ____ | BUILDING |
| Dense | ____px | #_______ | ___px | ____ | PEAK |
| Release | ____px | #_______ | ___px | ____ | RESOLVING |

All columns must change in the SAME direction at each row.
If any column contradicts: fix it or remove the non-cascading property.
```

These templates are the missing PLAYBOOK layer. They exist in the invocation reports. They were compressed out of the prompt.

---

## 6. SEMANTIC-RULES.MD CROSS-REFERENCE

The semantic rules document (530 lines) provides 7 gap-fills that are relevant to MC/SC compliance:

| Gap | Relevant MC/SC Rule | Status in HTML |
|-----|---------------------|----------------|
| Gap 4 (Breathing-room zone triggers) | MC-05 (contrast), SC-10 (chromatic-density) | PARTIALLY APPLIED -- S6 acts as a "brief warm breath" but not documented as deliberate contrast |
| Gap 6 (Content density floors per zone) | MC-06 (cascade), SC-09 (channel shift) | APPLIED -- S-15 zone count ceiling is in the prompt and the flagship uses appropriate zone counts |
| Gap 7 (Content-form fit) | MC-03 (modulation), SC-07 (scale coherence) | PARTIALLY APPLIED -- content volume matches form in most sections, but S11's 3 tables could be merged |
| Semantic Value Framework (3-question test) | MC-01 (CCS), MC-07 (cross-dimension) | NOT APPLIED -- no evidence of Q1/Q2/Q3 semantic justification for varying CSS values |

The semantic rules' "3-Question Test" (Q1: what varies, Q2: why, Q3: why THESE values) is exactly the diagnostic the builder needed. If the builder had asked "WHY does my background shift by only 3 RGB points?" the answer would have been "because the token palette constrains me" -- which would reveal the root cause: the chosen background tokens don't provide enough chromatic variation for the metaphor to be PERCEPTIBLE.

---

## 7. SUMMARY OF FINDINGS

### MC Rules Compliance

| Rule | Status | Root Cause |
|------|--------|------------|
| MC-01 (CCS >= 0.30) | **FAIL** (~0.05-0.10) | Mechanisms operate independently; no coupling CSS |
| MC-02 (>= 3 reinforcing) | **FAIL** (0 perceptible) | CSS variations sub-perceptual (1-8 RGB, 0.004em) |
| MC-03 (>= 2 modulating) | **PARTIAL** (1 of 2) | Component density variants exist but barely used |
| MC-04 (>= 2 responding) | **PARTIAL** (1 of 2) | Header->drop cap works; no second sequence |
| MC-05 (>= 2 contrasting) | **PARTIAL** (1-2 implicit) | Drop cap and code blocks are selective but undocumented |
| MC-06 (>= 1 cascade 3+) | **FAIL** (cascade claimed, not perceptible) | Background variation too subtle to participate in cascade |
| MC-07 (>= 10/15 pairs) | **FAIL** (~1-4/15) | Most dimension pairs are independent |
| MC-08 (>= 3 spacing values) | **PASS** (5 distinct) | Only MC rule that works |

**MC verdict: 1/8 PASS, 3/8 PARTIAL, 4/8 FAIL.**

### SC Rules Compliance

| Rule | Status | Root Cause |
|------|--------|------------|
| SC-01 (max 5 scales) | **PASS** (3 active) | Correctly constrained |
| SC-02 (>= 5/7 channels) | **FAIL** (2-3 active) | Ch4, Ch6 completely absent |
| SC-03 (>= 30/35 matrix) | **FAIL** (~14/35) | Most cells empty |
| SC-04 (no channel > 40%) | **FAIL** (Ch7 ~50%) | Over-reliance on intentional channel |
| SC-05 (each channel >= 2 scales) | **FAIL** (Ch4=1, Ch6=0) | Missing channels can't hit threshold |
| SC-06 (restraint ratio >= 1.5:1) | **UNVERIFIABLE** | No rejection log produced |
| SC-07 (same principle >= 3 scales) | **PARTIAL** (2 scales) | Metaphor not visible at component scale |
| SC-08 (no scale has all 7) | **PASS** (trivially) | Too few channels active for saturation |
| SC-09 (>= 3 channels per transition) | **FAIL** (5/11 fail) | Many adjacent sections nearly identical |
| SC-10 (chromatic-density alignment) | **PASS** (borderline) | Warm zones are slightly sparser |

**SC verdict: 3/10 PASS, 1/10 PARTIAL, 5/10 FAIL, 1/10 UNVERIFIABLE.**

### The One-Line Diagnosis

**The prompt told the builder WHAT to measure but not HOW to build. 775 lines of operational CSS examples, value tables, and builder worksheets were compressed to 25 lines of thresholds. The builder complied with what was simple (MC-08: count spacing values) and failed at what required compositional intelligence (MC-01, MC-02, MC-06, MC-07, SC-02, SC-09) because that intelligence was in the invocation reports, not in the execution prompt.**

---

**END MC-CHANNEL CROSS-REFERENCE**

**Total lines:** ~480
**MC rules analyzed:** 8/8
**SC rules analyzed:** 10/10
**Cross-dimension pairs assessed:** 15/15
**Section transitions analyzed:** 11/11
**Operational content loss quantified:** ~775 lines compressed to ~25 lines
