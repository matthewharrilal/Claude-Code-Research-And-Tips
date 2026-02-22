# PA Comparison: Page A (yegge-gas-town) vs Page B (gas-town-steve-yegge)

**Analyst:** pa-comparison-analyst
**Date:** 2026-02-22
**Sources:** 18 auditor reports (9 per page) + Page B weaver synthesis + Page A pipeline audit
**Total content analyzed:** ~380k across 20 files

---

## 1. PA-05 SCORES

### Page B (gas-town-steve-yegge): **3.5/4 -- COMPOSED**

From the weaver synthesis (`pa-weaver-synthesis.md`):

| Sub-criterion | Score | Key Evidence |
|--------------|-------|-------------|
| DESIGNED | 3.5/4 | Worker role grid encodes hierarchy through card size. Drop cap, callout color system, dark bookends all content-responsive. |
| COHERENT | 4.0/4 | Outstanding. Zero visual dialect drift. 9/9 auditors confirm one-designer feel. |
| PROPORTIONATE | 3.0/4 | Horizontal PASS. Vertical PARTIALLY (Zone 3 monotony). Container at ~63-66% borderline but compensated by full-width elements. |
| POLISHED | 3.5/4 | Footer present and designed. Clean tables, aligned cards. Header-to-Zone 1 gap slightly generous. |

**Verdict:** YES WITH RESERVATIONS. CEILING tier. 0 BLOCKING issues.

### Page A (yegge-gas-town): **2.75/4 -- COMPOSED but spatially flawed** (derived)

No formal weaver synthesis exists for Page A. Score derived from 9 auditor reports:

| Sub-criterion | Score | Key Evidence |
|--------------|-------|-------------|
| DESIGNED | 3.0/4 | Clear voice, considered hierarchy, zone transitions. But right-side dead space and orphan card break spatial confidence. |
| COHERENT | 3.5/4 | Remarkably consistent voice throughout. Minor: 3 different card dialects (stat cards, role cards, Overseer card). |
| PROPORTIONATE | 2.25/4 | Horizontal 2/4 (content fills only 50-55% at 1440px). Vertical 3.5/4. Breathing 2.5/4 (post-footer void, right-side dead space). |
| POLISHED | 2.5/4 | Footer present but doesn't span full width. Orphan "Crew" card. Massive post-footer void is a layout bug. |

**Derivation notes:** Auditor A gave explicit PA-05 score of 2.75/4. Auditor C gave 3 WOULD-NOT-SHIP verdicts (PA-09, PA-33, PA-53). Auditor I ranked it "second choice" out of five. These cross-validate to approximately 2.75/4.

**Verdict:** CONDITIONAL -- SHIP WITH FIXES. 2-3 BLOCKING issues depending on auditor.

### PA-05 Delta: **+0.75 in favor of Page B**

---

## 2. TIER 5 SCORES

### Page B Tier 5: **6.5/9**

| Question | Score | Evidence |
|----------|-------|---------|
| PA-60 (Design Moment Density) | YES | 5 moments: drop cap, role grid + Overseer accent, deployment interstitial, installation code block, footer bookend. |
| PA-61 (Multi-Voice Composition) | PARTIALLY | 4 channels identified. Callout border color is genuinely independent. Major boundaries still choir-in-unison. |
| PA-62 (Transition Dynamic Range) | YES | Dramatic (5 shifts at zone boundaries) + quiet (1 shift at subsection boundaries). Placement correlates with importance. |
| PA-63 (Fractal Zoom Coherence) | YES | 3+ scales. Label-heading-body progression echoes from page to component. Color adapts by semantic type. |
| PA-64 (Deliberate Restraint) | YES | Zone 1 is deliberately plain; its restraint amplifies Zone 2's density. Designed quiet, not absence. |
| PA-65 (Compositional Voice) | NO | Choir in unison. Properties shift together at zone boundaries. |
| PA-66 (Composed Negative Space) | YES | 3+ distinct gap types: red-stripe chapter breaks, ruled-line section pauses, component breathing room. |
| PA-67 (Novelty Beyond Competence) | NO | Well-executed but familiar editorial language. Card grid hierarchy closest to novelty. |
| PA-68 (Metaphor Spatial Coverage) | YES | Metaphor persists AND strengthens through all thirds. Bottom third has strongest metaphor expression. |

**Classification:** CEILING (PA-05 >= 3.5 but PA-65 and PA-67 both NO -> not Flagship)

### Page A Tier 5: **~4.5/9** (derived from auditor reports)

| Question | Score | Evidence |
|----------|-------|---------|
| PA-60 (Design Moment Density) | YES (implied) | 5 design moments identified by Auditor F across all thirds. |
| PA-61 (Multi-Voice Composition) | YES | Auditor F: 3-4 independent layers (background, typography, format, accent color). Polyphonic richness. |
| PA-62 (Transition Dynamic Range) | YES | Auditor D: 3-4 dramatic boundaries (3+ property changes) + multiple quiet boundaries. |
| PA-63 (Fractal Zoom Coherence) | YES | Auditor E: Clear fractal self-similarity. Card structure mirrors page structure. |
| PA-64 (Deliberate Restraint) | YES | Auditor C: Section 05 is intentionally austere with warm bg + red border. |
| PA-65 (Compositional Voice) | YES | Auditor A: 5 instruments named (editorial, structural, data, code, annotation). Interweaving, not alternating. |
| PA-66 (Composed Negative Space) | YES | Auditor C: 3-4 distinct gap types. |
| PA-67 (Novelty Beyond Competence) | PARTIALLY | Interstitial transitions distinctive; overall vocabulary familiar. Genre-creation mildly inventive. |
| PA-68 (Metaphor Spatial Coverage) | N/A | Not explicitly assessed by assigned auditors. Auditor G rated PA-44 as PARTIALLY (atmospheric, not structural). |

**Estimated tally:** ~6.5-7/9

**Critical observation:** Page A actually OUTPERFORMS Page B on PA-65 (compositional voice) and PA-61 (multi-voice). Page A achieved ENSEMBLE status (5 named instruments with independent parts), while Page B achieved only CHOIR IN UNISON. This is a significant compositional advantage for Page A that is masked by its spatial defects.

---

## 3. TOP PRAISE: What Auditors LOVED

### Page A -- What Drew Positive Reactions

1. **The header-to-Zone 1 transition sequence** (Auditors A, D, E, F, H, I): The dark header with coral small-caps label, large italic serif title, stat bar, then the generous whitespace into the first section label, drop cap, body text, and ESSENCE callout. Called "the moment I would show someone as an example of good design" by Auditor A.

2. **Five-instrument ensemble composition** (Auditor A, PA-65): Editorial voice (strings), structural framework (percussion), data/reference layer (woodwinds), code/terminal register (brass), annotation system (harp). "These five instruments play genuinely independent parts."

3. **Transition interstitial passages** (Auditors A, C, D, F, G): The italic serif bridges between zones ("From the developer who never reads code...") on slightly darker backgrounds. Called "the best visual element on the page" by Auditor G and the closest thing to novelty by Auditor A.

4. **Fractal self-similarity** (Auditor E): "The card IS the page shrunk down." The label-heading-body hierarchy repeats at every scale from full-page zones to individual cards.

5. **Section 05 Operating Principles zone** (Auditors C, D, F, H): The red left border + warm background as a dramatic moment positioned at the page's philosophical core. "THE most visually striking moment on the page" (Auditor D).

6. **Callout annotation system** (Auditors A, B, E, F, I): ESSENCE, CORE INSIGHT, WARNING, CHALLENGE, TIP, KEY INSIGHT, PREREQUISITES -- each with colored left border and labeled. "Rich vocabulary" though some auditors flagged overuse.

7. **Personality-content match** (Auditor A): "Authoritative. Warm. Technical." -- perfect match for a technical deep extraction about an opinionated developer.

### Page B -- What Drew Positive Reactions

1. **Worker role card grid with hierarchical sizing** (ALL 9 auditors): Mayor gets wider card, subordinates get smaller, Overseer gets red border. "The moment I would show someone as an example of good design" (Auditor A). "Turns a list into a visual map" (Auditor I). THE single best-praised element across both pages.

2. **Outstanding coherence** (9/9 auditors): Zero visual dialect drift from top to bottom. One designer, one vocabulary. PA-03 = YES unanimously. "The visual vocabulary is coherent throughout" (Auditor F).

3. **Strong footer/ending** (Auditors D, F, G, I): "END DISPATCH / 009" footer mirrors the header. "One of the strongest endings I have seen -- it is not just present, it is designed" (Auditor D). Dark bookend with structured source/repos/related links.

4. **Dispatch metaphor persistence** (Auditors A, G): The military/field dispatch framing strengthens (not fades) in the bottom third. THREAT ASSESSMENT, DEPLOYMENT ORDERS, END DISPATCH create narrative arc completion.

5. **Designed transitions** (Auditors C, D, E, F, G): Red accent stripes between zones, the "FIELD INTEL COMPLETE / PROCEED TO DEPLOYMENT" interstitial bar (a unique element that appears nowhere else), zone labels as consistent wayfinding.

6. **Zero catastrophic voids** (Auditors C, D, I): Every scroll position has meaningful content. Zero viewport-height blank spots. Content coverage at or above 50% at every scroll position.

7. **Callout color system** (Auditors E, F, G): Purple for DOCTRINE, green for ADVANTAGE, orange for THREAT ASSESSMENT, red for CAUTION/ACTIONABILITY. Color operates as an independent semantic channel.

---

## 4. TOP CRITICISM: What Auditors FLAGGED

### Page A -- Critical Issues

1. **CATASTROPHIC post-footer void** (Auditors A, C, D, F, G, H, I -- 7/9): 4-6 viewport-heights of pure blank cream below the footer. "Looks like the page is broken" (Auditor G). "A dropped signal, not musical silence" (Auditor C). Auditors C and C gave WOULD-NOT-SHIP specifically for this. **BLOCKING.**

2. **Narrow container at 1440px** (Auditors A, C, E, G, I): Content fills only ~50-55% of viewport width. Below the 65% target. "Narrow column floating in too-wide a page" (Auditor C). Auditor C gave WOULD-NOT-SHIP for PA-53. **BLOCKING.**

3. **Callout box monotony/overuse** (Auditors G, I): 10-12 callout boxes all using identical left-border treatment. "When everything is called out as special, nothing is" (Auditor G). "Flattens the content hierarchy" (Auditor I).

4. **Drop cap overuse** (Auditor I): 6+ drop caps across the page turns a distinctive element into "visual noise." "One drop cap would be memorable. Six is a tic."

5. **Role card hierarchy invisible** (Auditors G, I): All 8 role cards have identical visual weight. The 3-tier hierarchy (Town/Rig/Human) is text-dependent, not visual. "The visual form says 'these are all equal' while the content says 'these are hierarchically organized'" (Auditor I).

6. **Section 05 red border too heavy** (Auditor G): "Creates a visual 'wall' sensation." Redundant with 2 other zone-change signals (background shift + section label color).

7. **Footer doesn't span full width** (Auditor A): Matches the narrow content column instead of the header, creating visual inconsistency.

### Page B -- Critical Issues

1. **Header-to-Zone 1 gap** (8/9 auditors): The transition from the dark header to Zone 1 content has ~20-25% of the first viewport as warm cream. Not catastrophic but the single most-cited concern. **LOOKS-WRONG** (not blocking).

2. **Zone 3 mid-section visual monotony** (Auditors A, H, I): 5 sub-topics in one zone with text-then-callout repeating pattern. No visual break to interrupt the rhythm.

3. **768px card hierarchy loss** (Auditors E, H): The spatial hierarchy narrative of the worker role grid collapses to uniform-size stacked cards at narrow viewports. The "best designed moment at 1440px becomes the weakest at 768px" (Auditor H).

4. **Community extension cards repetitive** (Auditors A, F, I): 3 vertically stacked cards of identical structure. Below 4-repetition threshold but borderline.

5. **768px header takes too much vertical space** (Auditors A, E, H): Stacked metadata fields push content start to ~55-60% down first viewport. Feels like a "lobby" not a "doorway."

6. **Content container borderline width** (Auditor C): At ~63-66%, borderline on the 65-80% target. Full-width elements (header, red stripes, footer) compensate.

7. **Compositional voice = choir, not ensemble** (Auditors A, F): Properties shift together at zone boundaries. No fully independent rhythmic voices. "Metronomic rather than musical" (Auditor G).

---

## 5. AUDITOR AGREEMENT: Strongest Signals

### Page A -- Where ALL/MOST Auditors Agreed

**Unanimous or near-unanimous POSITIVE:**
- PA-04 (eye goes first): YES -- title hierarchy correct (all who answered)
- PA-06 (word stacking): NO stacking found at any viewport (Auditor B)
- PA-07 (paragraph tracking): YES -- comfortable reading (Auditor B)
- PA-11 (margin confidence): YES -- generous and confident (Auditor C)
- PA-14 (column breathing): YES at all viewports (Auditor E)
- PA-16 (element consistency): YES -- section labels, tables, callouts all match (Auditor F)
- PA-17 (visual rhythm): YES -- clear, composed rhythm (Auditor F)
- PA-18 (gray family): YES -- warm neutrals cohesive (Auditor A)
- PA-20 (personality): "Authoritative. Warm. Technical." matches intent (Auditor A)
- PA-34 (transition design): YES -- DESIGNED transitions (Auditor D)
- PA-38 (card reading order): YES -- clear hierarchy in every component (Auditor E)
- PA-45 (showcase moment): YES -- header-to-Zone 1 sequence (Auditor A)

**Unanimous or near-unanimous NEGATIVE:**
- Post-footer void: 7/9 auditors independently flagged this as the dominant defect
- Narrow container at 1440px: 5/9 auditors flagged content width below 65%
- The combination of narrow + void: Multiple auditors noted these compound each other

### Page B -- Where ALL/MOST Auditors Agreed

**Unanimous or near-unanimous POSITIVE:**
- PA-03 / coherence: 9/9 auditors said "one designer" feel
- Worker role card grid: 9/9 auditors identified as best designed moment
- PA-12 (flow): YES -- smooth section-to-section flow (Auditor D)
- PA-13 (visual ending): YES -- one of the strongest endings seen (Auditor D)
- PA-16 (element consistency): YES -- all matching elements consistent (Auditor F)
- PA-17 (rhythm): YES -- musical, not metronomic (Auditors D, E, F; partially metronomic per G, I)
- PA-18 (gray family): YES -- all neutrals in warm family (Auditor A)
- PA-25 (identity without header): YES -- 6 distinct signals (Auditor G)
- PA-34 (transition design): YES -- all 3 transitions tested are DESIGNED (Auditor D)
- PA-46 (responsive reorganization): YES -- content-aware at 768px (Auditors E, H)
- Zero catastrophic voids: 9/9 auditors found no void patterns

**Near-unanimous NEGATIVE:**
- Header-to-Zone 1 gap: 8/9 auditors flagged (the single most-cited concern)
- PA-65 (compositional voice): NO -- choir, not ensemble (Auditors A, F)
- PA-67 (novelty): NO -- well-executed but familiar (Auditor A)

---

## 6. DIMENSION-BY-DIMENSION COMPARISON

| PA Dimension | Page A Winner? | Page B Winner? | Notes |
|-------------|---------------|---------------|-------|
| **Impression (PA-01, PA-03, PA-04, PA-05)** | | **B** | B has 3.5/4 vs A's 2.75/4. B's coherence (4/4) is exceptional. A's spatial flaws drag impression down. |
| **Typography (PA-02, PA-06, PA-07, PA-08, PA-29)** | **TIE** | **TIE** | Both strong. A has slightly more typographic variety (5 registers vs B's 3-4). B has slightly less squint-text (no footer void pushing small text). |
| **Spatial (PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53)** | | **B** | B's clear winner. Zero voids, balanced weight distribution, confident margins, no dead space. A has catastrophic post-footer void + narrow container. |
| **Flow (PA-12, PA-13, PA-34, PA-35, PA-36)** | | **B** | B has a strong ending (END DISPATCH bookend). A's ending is undercut by the post-footer void. Both have good transitions, but B's "FIELD INTEL COMPLETE" interstitial is unique. |
| **Grid (PA-14, PA-15, PA-37, PA-38, PA-39)** | **TIE** | **TIE** | Both excellent. Both have clean alignment, disciplined left edges, well-structured containers. A's header ratio is slightly better (30-35% vs B's 35% at 1440px). |
| **Consistency (PA-16, PA-17, PA-18, PA-19, PA-24, PA-40, PA-41)** | | **B** | B scores 4/4 on coherence with zero dialect drift. A scores 3.5/4 with 3 card dialect variants. Both strong but B is demonstrably tighter. |
| **Metaphor (PA-42, PA-43, PA-44, PA-25, PA-68)** | | **B** | B's dispatch metaphor is STRUCTURAL and persists across all thirds, strengthening toward the bottom. A's metaphor is ATMOSPHERIC -- the factory concept is text-dependent, not visually encoded. |
| **Responsive (PA-21, PA-22, PA-23, PA-46, PA-47)** | **TIE** | **TIE** | Both handle responsive well. A's proportions actually IMPROVE at narrower viewports. B loses card hierarchy at 768px but gains readable stacking. |
| **Adversarial (PA-26, PA-27, PA-28, PA-48)** | **TIE** | **TIE** | Both ranked "second choice" out of five. Both identified as ~70% keepable. Both have similar vulnerability profiles (callout saturation, repetition potential). |
| **Compositional Depth (Tier 5)** | **A** | | A achieves ENSEMBLE (5 independent voices) where B achieves only CHOIR. A's multi-voice independence is stronger. A scores higher on PA-61 and PA-65. |

**Dimension tally:** Page B wins 4, Tie 5, Page A wins 1

---

## 7. FRESH-EYES VERDICT

### What auditors with ZERO build knowledge think:

**Page A -- Fresh-Eyes Summary:**
The page is "solidly competent" (Auditor A), with an "overall approach that is sound" (Auditor I). It reads as "a technical deep-dive with personality" that successfully creates its own document genre. But the post-footer void makes it "look broken" and the narrow container makes it feel like "a narrower design centered in extra space." Multiple auditors independently concluded it was a layout BUG, not a design choice. Without the void and width issue, this would be a significantly stronger page. Auditors unanimously appreciated the editorial voice, the transitional passages, and the header design. The consensus is: **strong design intelligence, poor spatial execution.**

**Page B -- Fresh-Eyes Summary:**
The page is "confident and authoritative" with "excellent coherence" and a "genuine design moment" in the worker role grid. 9/9 auditors said YES WITH RESERVATIONS (zero WOULD-NOT-SHIP on any question). The dispatch metaphor works and persists. The page's main limitation is that it operates as a "very competent choir" rather than an ensemble -- it lacks the multi-voice independence and novelty that would push it to Flagship. The consensus is: **strong execution with high coherence, limited compositional ambition.**

### Which page did auditors respond to more positively?

**Page B -- by a clear margin.**

The evidence:
- Page B: 9/9 cold look = YES WITH RESERVATIONS. 0 BLOCKING issues. 0 WOULD-NOT-SHIP on any question.
- Page A: Mixed verdicts. 3 WOULD-NOT-SHIP from Auditor C alone. Multiple CONDITIONAL from others. 2-3 BLOCKING issues.
- Page B: PA-05 = 3.5/4 (COMPOSED). Page A: PA-05 = 2.75/4 (COMPOSED but spatially flawed).
- Page B: Weaver explicitly states "This is the best-performing page the pipeline has produced."

---

## 8. WHAT SPECIFIC QUALITIES MADE THE DIFFERENCE?

### The 5 qualities that separate Page B from Page A:

**1. Zero catastrophic layout defects.** Page B has no post-footer void. No narrow container problem. Every scroll position has content. This single difference accounts for most of the PA-05 gap. Page A's layout bugs cost it approximately 0.5-0.75 points across PROPORTIONATE and POLISHED sub-criteria.

**2. Structural metaphor execution.** Page B's dispatch metaphor drives the page's organizational logic (4 zones, transition bands, callout color system, hierarchy grid). Page A's factory metaphor is text-dependent -- you read "factory floor" but don't see one. This difference shows most clearly in PA-68 (metaphor persistence) and PA-44 (implicit metaphor).

**3. The worker role hierarchy grid.** This single component earned more praise than any other element across both pages. It encodes meaning through layout (card size = rank), which is a design choice that goes beyond template execution. Page A's equivalent (8 uniform role cards) was specifically flagged as a design weakness.

**4. The footer bookend.** Page B's "END DISPATCH / 009" footer mirrors the header and provides explicit narrative closure. Page A has a footer but it's undermined by the post-footer void and doesn't span full width.

**5. Spatial confidence throughout.** Page B maintains ~63-66% content width with full-width elements (header, red stripes, footer) that make the entire viewport feel utilized. Page A's ~50-55% content width with no full-width elements below the header creates a "narrow strip floating in extra space" sensation.

### The 2 qualities where Page A OUTPERFORMS Page B:

**1. Multi-voice compositional depth.** Page A achieves genuine ensemble status with 5 independently operating visual voices. Page B operates as a choir. This is a COMPOSITIONAL INTELLIGENCE advantage that reflects deeper design thinking, even though it's masked by Page A's spatial defects.

**2. Typographic richness and variety.** Page A has more typographic registers (italic serif headings, monospaced small-caps labels, body text, decorative drop caps, inline code), more callout types (7-8 distinct annotation types), and more visual variety within sections. Page B's vocabulary is tighter and more disciplined but also more limited.

---

## 9. COMPARATIVE SUMMARY TABLE

| Metric | Page A (yegge-gas-town) | Page B (gas-town-steve-yegge) | Winner |
|--------|------------------------|-------------------------------|--------|
| PA-05 Score | 2.75/4 | **3.5/4** | **B (+0.75)** |
| PA-05: DESIGNED | 3.0/4 | **3.5/4** | B |
| PA-05: COHERENT | 3.5/4 | **4.0/4** | B |
| PA-05: PROPORTIONATE | 2.25/4 | **3.0/4** | B |
| PA-05: POLISHED | 2.5/4 | **3.5/4** | B |
| Tier 5 Score | ~6.5-7/9 | 6.5/9 | **TIE / slight A** |
| PA-65 (Compositional Voice) | **YES (ensemble)** | NO (choir) | **A** |
| PA-67 (Novelty) | PARTIALLY | NO | **A (slight)** |
| PA-61 (Multi-Voice) | **YES (3-4 independent)** | PARTIALLY | **A** |
| Blocking Issues | 2-3 | **0** | **B** |
| Cold Look Consensus | CONDITIONAL | **YES WITH RESERVATIONS** | **B** |
| Most-Praised Element | Header sequence | **Worker role hierarchy grid** | B (more unanimous) |
| Worst Defect | **Post-footer void (CATASTROPHIC)** | Header gap (LOOKS-WRONG) | **B (far less severe)** |
| Metaphor Type | Atmospheric | **Structural** | **B** |
| Footer Quality | Present but undermined | **Strong bookend** | **B** |
| Responsive | Good (improves at narrow) | Good (card hierarchy loss at 768) | TIE |
| Tier Classification | MIDDLE-to-CEILING (spatial defects) | **CEILING** | **B** |

---

## 10. VERDICT

**Page B (gas-town-steve-yegge) is the clear winner on fresh-eyes perceptual audit response.**

The margin is significant: +0.75 on PA-05, zero blocking issues vs 2-3, unanimous YES WITH RESERVATIONS vs mixed CONDITIONAL verdicts. Page B's advantages are in execution quality (no layout bugs, tighter coherence, stronger metaphor, better footer) while Page A's advantages are in compositional ambition (ensemble voice, more typographic variety, richer annotation vocabulary).

The critical finding: **Page A's compositional intelligence is arguably HIGHER than Page B's** (it achieves ensemble status where B achieves only choir), but this intelligence is buried under catastrophic spatial defects. If Page A's post-footer void were fixed and its container widened to 65%+, its PA-05 score would likely jump to 3.25-3.5/4, making the comparison much closer. The gap is primarily an execution gap, not a design intelligence gap.

Page B demonstrates that **consistent, defect-free execution at a moderate compositional level (choir) outperforms ambitious composition with spatial failures (ensemble with layout bugs)**. This is the central lesson of the comparison.

---

*End of PA comparison report.*
