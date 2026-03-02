# Research Package -- Pass 3: HARDENING
## For Builder Pass 3 (HARDENING)

This is the FINAL pass before perceptual audit. Focus: defensive quality.
Catch problems, integrate proven CSS, verify structural propositions.
The build should already have 6 zones, correct backgrounds, mechanisms deployed,
findings applied zone-by-zone, and case study CSS integrated.

**Soul reminder:** border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0.
3-category borders only (1px/3px/4px -- ZERO 2px). Max 2 callouts per viewport.
Container max-width: 960px. Font trinity: Instrument Serif / Inter / JetBrains Mono.

---

## 6. ANTI-PATTERNS -- RISK PROFILE FOR THIS BUILD

| Anti-Pattern | Risk | WHY This Risk Level for Gas Town | CSS Mitigation |
|-------------|------|----------------------------------|----------------|
| Uniform Role Cards | **HIGH** | The 8 Roles section has 8 roles with identical structural properties (name, function, code, model recs). The natural impulse is 8 identical cards. The TC brief explicitly warns: "The builder who treats all 8 roles identically misses the content's own structure." | Verify border-left width varies: 4px on Mayor/Deacon/Dogs, 3px on Refinery/Witness/Polecat, 1px on Crew. Verify padding varies: 24px Town, 20px Rig, 16px Worker. If all 8 share identical border-left, the hierarchy is flattened. |
| Code Wall | **HIGH** | Implementation Guide (Section 7) has 6+ code blocks (bash, tmux, startup, daily workflow). Troubleshooting (Section 9) has 6 failure patterns each with code blocks. Total: 12+ code blocks in 2 adjacent sections. | Scan for consecutive `<pre>` elements. If 2+ code blocks appear without prose between them, insert explanation paragraph. Max 30-40 lines per code block. Structure: explanation -> code -> result note -> next code. |
| Callout Cacophony | **HIGH** | Content has 10+ Yegge blockquotes, 6+ warning zones, 4+ tips, 3+ insights. If all become callouts: 20+ callouts across the page, producing 4-5 per viewport. The control tower requires operational precision, not alarm noise. | Budget: 3-4 Essence callouts (Yegge's definitive declarations), 2-3 warning callouts (genuine cost/complexity dangers), 1-2 tip callouts (implementation guidance). Remaining quotes: bold inline text, NOT callout boxes. Scan: if > 2 callouts visible in any 800px vertical slice, demote the weakest to inline styling. |
| Same Density Throughout | **HIGH** | Sections 3-9 are all REFERENCE register with similar structural properties (headings + prose + code + tables). Without intervention, uniform 48px spacing across all sections creates metronomic monotony contradicting the tower metaphor. | Verify padding varies across zones: 80px (Overseer), 48px (Operations), 32px (Bedrock), 64px (Philosophy), 40px (Factory), 64px (Resolution). If all section paddings are within 8px of each other, apply the TC brief's spatial arc. |
| Whitespace Void (>300px gap) | **MEDIUM** | The transition from dark Beads zone (32px padding) to earthy Philosophy zone (64px padding) creates a potential 300px+ gap when margins stack. The page is LONG (~5000 words, 14 sections) -- stacking 64px section gaps accumulates. | Measure total gap at every zone boundary: padding-bottom + margin-bottom + padding-top of next zone. Flag any sum > 200px. Set explicit margin: 0 on zone containers to prevent margin stacking. Breathing zones total must be 15-25% of page height. |
| Semi-Transparent Backgrounds | **MEDIUM** | This build has many inline code references (`tmux`, `alice`, `bob`, `opus`, shell commands). The temptation to use `rgba(0,0,0,0.04)` for inline code backgrounds is high. Any rgba on backgrounds creates depth illusion violating ANTI-PHYSICAL identity. | Search entire stylesheet for `rgba(` and `opacity:`. Replace `rgba(0,0,0,0.04)` with `#F0EBE3` (solid warm). Replace any opacity < 1.0 with fully opaque equivalent. Inline code: `background: #F0EBE3; border: 1px solid #E0D5C5; padding: 2px 6px`. |
| Traffic-Light Color Adjacency | **MEDIUM** | Section 8 (Checkpoints) immediately precedes Section 9 (Troubleshooting). Green checkpoint callout directly above coral troubleshooting callout creates "kindergarten" effect diminishing both signals. | Minimum 48px neutral spacing between differently-colored callouts. Insert prose paragraph between any green/coral or green/red adjacent callouts. Better: use a single callout type (neutral Info) for checkpoints rather than green Tip. |

**CHECK PROCEDURE (do this in order):**
1. SCAN for soul violations: search for `border-radius`, `box-shadow`, `rgba(`, `gradient`, `2px` in stylesheet
2. SCAN for uniform roles: verify border-left widths on role cards differ across tiers (4px/3px/1px)
3. SCAN for code walls: list all `<pre>` elements in order. Flag any two consecutive without prose between
4. SCAN for callout stacking: count callout elements per 800px vertical slice. Flag any > 2
5. SCAN for whitespace voids: measure total gap at every zone boundary (padding + margin sums). Flag > 200px
6. SCAN for density uniformity: list all section padding values. If variance < 8px, apply spatial arc
7. VERIFY footer exists with 3px border-top mirroring header

---

## 7. PROVEN CSS PATTERNS

### Pattern 1: Zone Transition via Background Shift + Spacing Change

From DD-004 (Layers) and OD-004 (Confidence), validated across 3 stages:
```css
/* Tower floor boundaries: background shift IS the transition signal */
.zone--overseer { background: #FEF9F5; padding: 80px 0; }
.zone--operations { background: #FFFFFF; padding: 48px 0; }
.zone--bedrock { background: #1A1A1A; color: #ededed; padding: 32px 0; }
.zone--philosophical { background: #FAF5ED; padding: 64px 0; }
.zone--factory { background: #FAF5ED; padding: 40px 0; }
.zone--resolution { background: #FEF9F5; padding: 64px 0; }

/* At boundaries, the background change + padding shift creates a perceptual
   zone transition without heavy dividers. Use 1px subtle border-top only
   where adjacent zones share the same background color (e.g., Zone 4->5). */
.zone--factory { border-top: 1px solid #E0D5C5; }
```
**When to deploy:** At every zone boundary. Verify each boundary shifts 3+ channels (background, spacing, typography).

---

### Pattern 2: Dark Zone Code Block Differentiation

From COMP-F-009 (code block 2-zone structure) and S4 convention (code block dark theme):
```css
/* Code blocks inside the Beads dark zone need border emphasis
   because their #1A1A1A background matches the zone background */
.zone--bedrock pre {
  background: #1A1A1A;
  border: 3px solid #E0D5C5;  /* Prominent border differentiates from zone bg */
  color: #FAFAF5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  padding: 20px 24px;
  overflow-x: auto;
}

/* Code blocks in lighter zones: standard dark treatment */
pre {
  background: #1A1A1A;
  border: 1px solid #E0D5C5;
  color: #FAFAF5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  padding: 20px 24px;
  overflow-x: auto;
}

/* Inline code: warm solid background, never rgba */
code:not(pre code) {
  background: #F0EBE3;
  border: 1px solid #E0D5C5;
  padding: 2px 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875em;
}
```
**When to deploy:** All code blocks and inline code throughout the page. The 3px border in the dark zone is critical -- without it, code blocks visually merge with the Beads background.

---

### Pattern 3: Dense Zone Typography Compression

From AD-F-006 (typography compression across acts) and DD-F-002 (CRESCENDO), validated across 3 stages:
```css
/* Sparse zones: generous reading pace */
.zone--overseer p { font-size: 1rem; line-height: 1.8; letter-spacing: 0; }
.zone--overseer h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 2rem;
  letter-spacing: -0.02em;
  font-weight: 400;
}

/* Dense zones: tightened compression */
.zone--operations p { font-size: 1rem; line-height: 1.7; }
.zone--operations h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 1.625rem;
  letter-spacing: -0.015em;
}

/* Maximum density zone: peak compression */
.zone--bedrock p { font-size: 0.9375rem; line-height: 1.6; }
.zone--bedrock h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 1.375rem;
  letter-spacing: -0.01em;
  color: #ededed;
}
```
**When to deploy:** Apply to every zone. The typography compression should be perceptible when scrolling -- the Beads section should feel tighter than the opening without dramatic jumps.

---

### Pattern 4: Tiered Role Card Layout (Bento Grid)

From R2-4.1 (bento grid), R4-2.1 (bento with hierarchy), OD-004 (border-weight), validated convergence across 3 case studies:
```css
/* Town-Level: 3-column bento grid, Mayor dominates */
.tier--town {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 24px;
}
.tier--town .role-card { border-left: 4px solid #1A1A1A; padding: 24px; }

/* Rig-Level: full-width single column, operational emphasis */
.tier--rig .role-card {
  border-left: 3px solid #E0D5C5;
  padding: 20px;
  margin-bottom: 24px;
}

/* Worker-Level: compact inline, minimal presence */
.tier--worker .role-card {
  border-left: 1px solid #F0EBE3;
  padding: 16px;
  font-size: 0.9375rem;
}

/* 768px responsive: all tiers collapse to single column */
@media (max-width: 768px) {
  .tier--town { grid-template-columns: 1fr; }
}
```
**When to deploy:** Zone 2 (Operations Core). The grid encodes hierarchy through cell size -- Mayor gets 2fr, making it visually dominant. At 768px, collapse to single column to prevent cramping.

---

### Pattern 5: Yegge Voice Eruption (Essence Callout Variant)

From R2-1.2 (pull quotes), COMP-F-002 (serif italic wisdom voice), validated in TC brief Invitation 1:
```css
/* Voice eruption: where the human breaks through the tower's operational surface */
.voice-eruption {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.4;
  padding: 16px 24px;
  border-left: 4px solid #E83025;
  margin: 48px 0;
  max-width: 85%;
  color: #1A1A1A;
}

/* In dark zones, voice eruptions use light text */
.zone--bedrock .voice-eruption {
  color: #ededed;
}

/* Budget: 3-4 total. Top candidates:
   - "Gas Town is an Idea Compiler"
   - "the world's biggest fuckin' ant"
   - "You're not a programmer anymore. You're the head chef."
   Remaining quotes: bold inline, no callout framing. */
```
**When to deploy:** 3-4 highest-signal Yegge quotes across the page. Space them so only one is visible per viewport. The serif-italic-to-sans-regular shift creates a typographic temperature change the PA auditor should detect.

---

### Pattern 6: Responsive Collapse

From S4 convention C-05 (responsive at 768px), validated across all 6 AD pages:
```css
/* Standard responsive collapse */
@media (max-width: 768px) {
  .page-container { padding: 0 16px; }
  .zone--overseer { padding: 40px 0; }
  .zone--operations { padding: 32px 0; }
  .zone--bedrock { padding: 24px 0; }
  .zone--philosophical { padding: 40px 0; }
  .zone--resolution { padding: 40px 0; }

  /* Bento grids collapse */
  .tier--town { grid-template-columns: 1fr; }

  /* ASCII diagrams scroll horizontally */
  pre { overflow-x: auto; white-space: pre; }

  /* Tables scroll or stack */
  table { display: block; overflow-x: auto; }
}
```
**When to deploy:** As final responsive layer. Test at 1440px, 768px, AND 480px. The ASCII diagrams (complexity ladder, role hierarchy, tmux layout) MUST NOT break the page layout at narrow viewports.

---

## 8. STRUCTURAL PROPOSITIONS

These are hypotheses about how the control tower metaphor should manifest. Test each
against your build. If the build does not embody a proposition, adjust CSS to move toward it.

1. **Tower floors should be felt through background, not borders:**
   The transition between zones creates a perceptible atmospheric shift (background color + typography + spacing all change together) without heavy visual dividers. The reader should feel "I'm on a different floor" from the environmental change, not from a thick horizontal rule.
   - Evidence check: Cover all border-top elements at zone boundaries. Can you still perceive zone changes?
   - If absent: Increase background color contrast between adjacent zones (the TC brief's palette arc provides 15+ RGB delta at each boundary). Add typography register change (heading size, line-height, font-family shift) at zone transitions.

2. **The 8 Roles section has visible hierarchy, not uniform cards:**
   The operational hierarchy (Town -> Rig -> Worker) IS the visual hierarchy. Mayor's card is visually larger and heavier than Crew's. The border weight encodes authority. A reader who has never seen the content should be able to infer "this role is more important" from visual treatment alone.
   - Evidence check: Cover all text. Can you identify which role cards are Town-Level vs Worker-Level from visual weight alone?
   - If absent: Increase border-weight contrast (4px vs 1px should be immediately visible). Increase padding differential (24px Town vs 16px Worker). Add background distinction if needed.

3. **The Beads dark zone feels like the deepest floor:**
   The Beads Memory section should feel like descending into the tower's foundations. The dark background creates maximum contrast with the preceding white/earthy zones. Code blocks on the dark background feel like looking at instrument panels in a data center. The reader experiences a genuine atmospheric shift.
   - Evidence check: Scroll slowly from the 8 Roles section into Beads. Does the transition feel like entering a different environment?
   - If absent: Verify background is #1A1A1A (not a lighter gray). Verify text is light (#ededed). Add the 3-layer Beads hierarchy (Hot/Warm/Cold border-weight descent). Increase contrast between code block borders and zone background.

4. **Density is perceptible at 3+ scales (50%, 100%, 150% zoom):**
   At 50% zoom, the page-level sparse/dense/sparse rhythm is visible as a shape. At 100%, zone-level density variation shows different floor tempos. At 150%, component-level density shows callout-label/body and role-card-header/body internal rhythm.
   - Evidence check: Screenshot at 50%, 100%, 150%. Is density variation visible at all three zoom levels?
   - If absent: Increase padding contrast between sparse zones (64-80px) and dense zones (32-40px). Ensure component internals have sparse label (12px uppercase) and dense body (16px reading text) with visible contrast.

5. **The return to warm cream at resolution feels like ascending back to the Overseer's floor:**
   The closing sections (Comparison, Sources) should feel like the reader has completed the tower descent and returned to the warm human surface. The typographic register relaxes. The spacing opens up. The emotional temperature warms. The footer mirrors the header -- the bookend says "you entered and exited through the same door."
   - Evidence check: Read the last 2 viewports. Does the page feel resolved, warm, and spacious -- or does it just stop?
   - If absent: Verify background returns to #FEF9F5. Verify padding returns to 48-64px. Verify footer exists with 3px border-top. Add Instrument Serif for final section heading if all headings in resolution zone are Inter.

---

## Agent Log: Synthesizer (Pass 3)
- Anti-patterns risk-profiled: 7 (4 HIGH: uniform roles, code wall, callout cacophony, same density; 2 MEDIUM: whitespace void, semi-transparent backgrounds, traffic-light adjacency; integrated from S4 with content-specific risk rationale and CSS mitigations)
- CSS patterns included: 6 (zone transitions, dark zone code blocks, typography compression, tiered role cards, voice eruptions, responsive collapse) -- each adapted for the control tower metaphor with specific property values
- Propositions defined: 5 (tower floors via atmosphere, role hierarchy visibility, Beads depth, multi-scale density, return-to-surface resolution) -- each with evidence check and CSS adjustment if absent
- Output size: 153 lines
