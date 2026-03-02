# Grammar — Compositional Rules

How mechanisms, components, and zones combine. These are guidelines for composition, not compliance rules.

---

## Nesting

- **Maximum depth: 2 levels.** Zone wrapper → component. Never component inside component.
- **No callout nesting.** Callouts live inside zones, never inside other callouts.
- **Code blocks are peers to callouts** — same nesting level, or fully independent.
- **Decision matrices are terminal** — they contain data rows, not other components.

---

## Rhythm (INHALE/EXHALE)

- **Dense sections followed by sparse.** Every 2-3 dense zones must be followed by breathing room (48px+ spacing or background shift to breathing zone).
- **Maximum consecutive dense: 3.** After 3 dense sections, the next MUST be sparse.
- **Internal vs external spacing ratio: ~1:3.** Components use 8-12px internally, 24-48px between them. This creates grouping without borders.
- **Breathing triggers:** After 2-3 dense components, between major page sections, after viewport-height dense content, before/after scale shifts.

---

## Zones

- **Background color changes signal content type.** Sparse (warm cream) = introductory/breathing. Dense (near-white) = technical/detailed. Breathing (earthy tan) = transitional/recovery. Bedrock (dark) = structural landmarks only.
- **Maximum zone changes per viewport: 2-3.** More creates visual chaos.
- **Zone transitions use border OR spacing, not both heavily.** Heavy border (3-4px) = moderate spacing (24-32px). Light/no border = generous spacing (48-96px).
- **Zone separation preference:** Whitespace only (primary) → background color change (semantic zones) → left border accent (callouts) → full 1px border (tables, frames) → horizontal rule (explicit breaks, rarely). Prefer earlier methods; later methods are admissions that spacing alone was insufficient.

---

## Density

- **Maximum 3-4 components per viewport-height.** 5+ = density ceiling violation.
- **Maximum 2 callouts per viewport.** 3+ = callout cacophony.
- **Maximum 2 code snippets per viewport.** Stacking code blocks creates "tutorial wall."
- **Maximum 1 decision structure per viewport.** Decision matrices and reasoning containers need breathing room.
- **Density arc across page:** Typically intro (sparse) → middle (dense) → conclusion (sparse). Geological/confidence content may INVERT this (certain = sparse, uncertain = dense).
- **No uniform density.** Minimum 2 density modes per page.
- **Density debt.** After 2-3 consecutive dense elements, insert 64-80px breathing space. Dense sections accumulate perceptual debt that must be repaid.
- **Organization IS density** (OD-F-005). Choosing an organizational pattern simultaneously determines density distribution. Don't select both independently.
- **Content density floor.** Every zone must contain at least 2 content elements (heading + paragraph minimum). No empty viewport on scroll. Maximum 7 zones per page.

---

## Component Sequencing

Components have implicit reading velocity, temperature, and visual weight. Sequencing rules prevent jarring transitions.

- **Never stack same-velocity.** Two SLOW components (decision matrix, reasoning container) back-to-back creates cognitive sludge. Intersperse with FAST components (stats bar, callout).
- **Temperature flow.** Move warm → neutral → cold, not warm → cold directly. Insert a neutral-temperature component as a buffer between warm (essence pullquote) and cold (data table) elements.
- **Weight balance.** Heavy components (bento grid, decision matrix) need decompression. Follow heavy with light (callout, stats bar), not heavy with heavy.
- **Bento grid ceiling: 12 cells maximum** without a breathing zone interrupt.

**Recommended sequences:**
- **Opening:** Hero → Overview Callout → Navigation
- **Teaching:** Essence → Core Abstraction → Code Snippet → Tip
- **Decision:** Decision Matrix → Reasoning → Gotcha
- **Closing:** Challenge → Task → Essence

---

## Organizational Pattern Selection

Content type determines organizational approach; metaphor refines it.

| Content Type | Organizational Pattern |
|-------------|----------------------|
| Q&A, FAQ, interview | CONVERSATIONAL |
| Story-driven, chronological, journey | NARRATIVE |
| How-to, tutorial, step-by-step | TASK-BASED |
| Variable certainty, research findings | CONFIDENCE-BASED |
| Reference, catalog, API docs | SPATIAL |
| Experimental, exploration, essay | CREATIVE/EMERGENT |

---

## Density Patterns

Validated pairings between organizational approach and density rhythm:

| Organizational Approach | Primary Density Pattern |
|------------------------|----------------------|
| Conversational | PULSE + TIDAL |
| Narrative | CRESCENDO |
| Task-Based | ISLANDS + BOOKENDS |
| Confidence | GEOLOGICAL + CRESCENDO |
| Spatial | WAVE + ISLANDS |
| Creative | ALL (FRACTAL primary) |

**Canonical density padding values:**
- PULSE: Inhale 24px / Exhale 64-80px
- CRESCENDO: Progressive 80px → 64px → 48px → 24px → 16px
- BOOKENDS: Dense intro (24px) → Sparse action (64px) → Dense summary (24px)
- After dense sections, add recovery whitespace (64-80px minimum)

---

## Compound Pages

- **Sequential, not simultaneous.** Each section commits to ONE pattern. Don't mix axis patterns within a section.
- **Maximum patterns per page: 5-6.** More creates cognitive whiplash.
- **Transition types between sections:** SMOOTH (same domain, intensity shift), BRIDGE (different domain, 3px border), BREATHING (phase change, full background shift). See `mechanisms.md` for details.
- **Let density emerge from structure.** If a pattern generates PULSE rhythm, don't override with forced CRESCENDO.

---

## Fractal Self-Similarity

Dense/sparse rhythm should repeat at multiple scales:
- **Page scale:** Dense/sparse section alternation
- **Section scale:** Dense/sparse paragraph alternation
- **Component scale:** Sparse label + dense body (2-Zone DNA)
- **Character scale:** Dense code + sparse comments

If rhythm breaks at any scale, the page loses coherent navigability.

---

## Responsive

- **768px breakpoint:** Multi-column grids collapse to 1-2 columns.
- **Padding compression:** Desktop 48-64px → tablet 32-48px → mobile 24-32px. Never below 24px.
- **Bento grids:** Collapse to single column at 768px.
- **Decision matrices:** Collapse from multi-column to stacked at 768px.

---

## Anti-Patterns

1. **Callout stacking** — 3+ callouts visible simultaneously
2. **Uniform density** — same padding/spacing top to bottom
3. **Fighting the pattern** — overriding natural density with forced rhythm
4. **Simultaneous axis patterns** — mixing Z-Pattern + F-Pattern in one section
5. **Traffic-light adjacency** — green Tip callout directly next to red Gotcha callout (Christmas tree effect)
6. **Same-velocity stacking** — two SLOW components (decision matrix, reasoning) back-to-back without a lighter component between
7. **Code wall** — code block exceeding 30 lines without inline explanation or adjacent callout

---

## Quick Reference

- **Inline vs block code:** Inline for ≤ 1 line AND ≤ 50 characters. Beyond either threshold, use code block component.
- **Grid columns:** 2-col (min 280px cell, comparison content), 3-col (min 200px cell, categories), 4-col (min 160px cell, stats only). Never force grid below minimum cell width.
- **Responsive typography at 768px:** ~19% reduction from desktop values (e.g., 32px → 26px, 24px → 20px). Maintain relative hierarchy.
- **Dark mode:** Hypothetical (zero validated implementations). Do not build unless explicitly requested.
- **Page footer:** Include when page has > 3 sections. Content: page metadata, related links, build date. Skip for short single-section pages.
