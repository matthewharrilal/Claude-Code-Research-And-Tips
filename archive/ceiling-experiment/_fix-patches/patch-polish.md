# Patch: Header + Polish Improvements

**Author:** Polish Specialist Agent
**Date:** 2026-02-16
**Scope:** Header metadata legibility, header proportions, diagram label hierarchy, misc polish
**Constraints preserved:** border-radius: 0, no box-shadow, fonts unchanged, 3px red border-bottom on header, h3 italic LOCKED

---

## FINDING 1: Header metadata barely legible

**Source:** Impression audit (PA-04), Typography audit (PA-29 line 143: "V1.0.0 / 285+ STARS / MIT LICENSE ... small caps/monospace feel"), Grid audit (PA-39 confirms header proportion OK but metadata is at threshold).

**Problem:** `header .meta` at line 197-203 uses `opacity: 0.7` on the already-low-contrast `var(--color-background)` (#FEF9F5) text on `var(--color-text)` (#1A1A1A) background. At 0.7 opacity the effective text color is roughly rgba(254,249,245,0.7) which renders as a washed-out cream. Combined with `font-size: var(--type-meta)` (0.75rem = 12px on 16px base), the metadata line is functional but recedes too far. Typography auditor noted it's "crisp and legible" but at the edge of readability, especially at mobile sizes.

**Fix:**

### Change 1a: Increase metadata opacity
```
SELECTOR: header .meta
FILE LINE: 202
OLD: opacity: 0.7;
NEW: opacity: 0.85;
```
**Rationale:** Increase from 0.7 to 0.85. This lifts the effective color from ~70% to ~85% brightness while still keeping the metadata subordinate to the title and subtitle. The metadata should read as "secondary" not "invisible." 0.85 preserves the deliberate hierarchy (title > subtitle > meta) without the squint factor.

### Change 1b: Bump metadata font size
```
SELECTOR: header .meta
FILE LINE: 199
OLD: font-size: var(--type-meta);
NEW: font-size: 0.8125rem;
```
**Rationale:** `--type-meta` is 0.75rem (12px). Bump to 0.8125rem (13px). This is a 1px increase that keeps the meta text below `--type-code` (0.875rem / 14px) but improves readability on dark backgrounds. On mobile where base font drops to 16px, this becomes ~13px instead of 12px -- meaningful at small sizes.

---

## FINDING 2: Header proportions too heavy

**Source:** Impression audit line 44 ("Strong command presence from header -- dark slab, technical confidence"), Grid audit PA-39 ("~15-20% of screen height" at 1440px, "~30%" at 768px). Grid auditor says it feels like a "doorway not lobby" -- so the proportions are close to correct but the padding is generous.

**Problem:** `header` at line 179 uses `padding: var(--space-16) 0` which is 64px top and bottom = 128px of vertical padding. The header content (title + subtitle + meta) is approximately 80-90px of content height, so the padding MORE than doubles the header height. At 1440px this gives ~210px header slab. At 768px mobile, 128px padding on a shorter viewport makes the header consume ~30% of the screen.

**Fix:**

### Change 2a: Reduce header vertical padding
```
SELECTOR: header
FILE LINE: 179
OLD: padding: var(--space-16) 0;
NEW: padding: var(--space-10) 0 var(--space-8) 0;
```
**Rationale:** Change from 64px symmetric to 40px top / 32px bottom. This gives asymmetric padding that is heavier on top (breathing room before title) and tighter on bottom (closer to the red border accent, creating a more authoritative "stamp" feel). Total padding drops from 128px to 72px -- a 44% reduction. The header will go from ~210px to ~155px at desktop, reducing its viewport share from ~15% to ~11%. On mobile, from ~30% to ~22%. Still authoritative, but no longer domineering.

### Change 2b: Reduce subtitle bottom margin
```
SELECTOR: header .subtitle
FILE LINE: 193
OLD: margin-bottom: var(--space-3);
NEW: margin-bottom: var(--space-2);
```
**Rationale:** Tighten the gap between subtitle and metadata from 12px to 8px. With the reduced overall padding, the internal spacing should compress slightly to maintain proportional relationships. The meta line visually "belongs" to the subtitle more than the title, so pulling it closer creates a natural grouping.

---

## FINDING 3: Diagram label hierarchy (BRAIN/TUNNEL/BODY vs sub-components)

**Source:** Grid audit PA-38 line 147: "Inside the diagram, the labels ('BRAIN', 'TUNNEL', 'BODY') and the sub-boxes ('Claude AI Integration', 'Scheduling Engine', etc.) all compete at similar visual weights. It's harder to know where to look first." Also: "the only container on the page where hierarchy breaks down."

**Problem:** The architecture diagram (lines 686-723) is a `<pre><code>` block rendered in monospace at `var(--type-code)` (0.875rem). ALL text inside it -- layer names (BRAIN, TUNNEL, BODY), sub-component names (Claude AI Integration, Scheduling Engine), connection labels (HTTPS, Bearer Token Auth, Local, Tool Execution) -- renders at identical size and weight. The only differentiation is spatial position (centered vs inside boxes). This is an ASCII diagram so we cannot style individual elements within it via CSS.

**Fix approach:** Since this is a `<pre>` block and we cannot apply inline CSS to individual characters, the fix must be structural: modify the ASCII art itself to create visual differentiation.

### Change 3: Modify diagram ASCII art to strengthen layer name prominence

**Current (line 687):**
```
│                         BRAIN                                    │
│                  (Cloudflare Worker)                            │
```

**New:**
```
│  ╔══════════════════════════════════════════════════════════╗    │
│  ║                      B R A I N                          ║    │
│  ║                 (Cloudflare Worker)                      ║    │
│  ╚══════════════════════════════════════════════════════════╝    │
```

Wait -- this adds complexity and may break the clean ASCII aesthetic. Better approach:

### Change 3 (revised): Use letter-spacing in layer names

**Current:**
```
│                         BRAIN                                    │
```
**New:**
```
│                      B R A I N                                   │
```

Apply the same letter-spacing treatment to TUNNEL and BODY:

**Current (line 701):**
```
│                        TUNNEL                                    │
```
**New:**
```
│                     T U N N E L                                  │
```

**Current (line 715):**
```
│                         BODY                                     │
```
**New:**
```
│                      B O D Y                                     │
```

**Rationale:** Letter-spacing the layer names (BRAIN, TUNNEL, BODY) using spaces between characters creates a visual distinction from the sub-component names without changing the monospace rendering. The spaced-out text reads as "category/label" while the regular text reads as "component name." This is a standard technical documentation technique for creating hierarchy within monospace environments.

Additionally, reduce the sub-component labels to lowercase to further differentiate:

**Current (line 691):**
```
│  │   Claude AI  │  │  Scheduling  │  │  State Management    │  │
│  │  Integration │  │    Engine    │  │  (Durable Objects)   │  │
```
**New:**
```
│  │  Claude AI   │  │  Scheduling  │  │  State Management    │  │
│  │  integration │  │    engine    │  │  (Durable Objects)   │  │
```

Apply same lowercase treatment to Tunnel and Body sub-components:

**Tunnel sub-components (lines 705-706):**
```
OLD:
│  │   Auth &     │  │    Rate      │  │     Request          │  │
│  │ Validation   │  │   Limiting   │  │     Routing          │  │
NEW:
│  │   Auth &     │  │    Rate      │  │     Request          │  │
│  │  validation  │  │   limiting   │  │     routing          │  │
```

**Body sub-components (lines 719-720):**
```
OLD:
│  │  AppleScript │  │    Shell     │  │     Raycast          │  │
│  │   Executor   │  │   Commands   │  │    Extensions        │  │
NEW:
│  │  AppleScript │  │    Shell     │  │     Raycast          │  │
│  │   executor   │  │   commands   │  │    extensions        │  │
```

**Rationale:** The combination of spaced-out uppercase for layer names and lowercase for sub-component second lines creates a two-level hierarchy: LAYER (prominent, spaced) vs component (subordinate, normal case). This addresses the grid auditor's finding that "all elements compete at similar visual weights."

---

## FINDING 4: Second architecture diagram (Trust Boundary) has same hierarchy problem

**Source:** Same principle applies to the Trust Boundary Diagram at lines 1328-1363.

**Problem:** Zone names (UNTRUSTED ZONE, SEMI-TRUSTED ZONE, TRUSTED ZONE, SYSTEM ZONE) compete with content inside each box. Same monospace, same weight.

**Fix:**

### Change 4: Letter-space zone names in trust boundary diagram

Apply the same letter-spacing treatment:

**Line 1329:**
```
OLD: │                     UNTRUSTED ZONE                              │
NEW: │                  U N T R U S T E D   Z O N E                   │
```

**Line 1337:**
```
OLD: │                    SEMI-TRUSTED ZONE                            │
NEW: │                 S E M I - T R U S T E D   Z O N E              │
```

**Line 1347:**
```
OLD: │                      TRUSTED ZONE                               │
NEW: │                   T R U S T E D   Z O N E                      │
```

**Line 1357:**
```
OLD: │                      SYSTEM ZONE                                │
NEW: │                    S Y S T E M   Z O N E                       │
```

---

## FINDING 5: Footer metadata has same opacity issue as header

**Source:** Direct inspection of CSS lines 223-228 and 232-235.

**Problem:** `footer .footer-meta` uses `opacity: 0.7` (same as header) and `footer .footer-provenance` uses `opacity: 0.6`. On the dark footer background, these have the same readability concern as the header metadata.

**Fix:**

### Change 5a: Footer meta opacity
```
SELECTOR: footer .footer-meta
FILE LINE: 228
OLD: opacity: 0.7;
NEW: opacity: 0.85;
```

### Change 5b: Footer provenance opacity
```
SELECTOR: footer .footer-provenance
FILE LINE: 235
OLD: opacity: 0.6;
NEW: opacity: 0.75;
```

**Rationale:** Match the header fix. The footer provenance stays below the footer meta in hierarchy (0.75 < 0.85) but rises from "barely visible" to "readable."

---

## FINDING 6: Mobile header needs responsive padding reduction

**Source:** Grid audit PA-39: header at 768px takes "~30%" of viewport. The desktop padding fix (Finding 2) helps but mobile should go further.

**Problem:** The responsive section at lines 534-561 does NOT include a header padding override. On mobile, the header still gets 40px/32px from the desktop fix -- this should be reduced further.

**Fix:**

### Change 6: Add header padding to mobile breakpoint
```
SELECTOR: @media (max-width: 768px) { header { ... } }
FILE LINE: 534 (inside existing @media block, add new rule)
ADD:
  header {
    padding: var(--space-8) 0 var(--space-6) 0;
  }
```

**Rationale:** 32px top / 24px bottom on mobile (total 56px) vs 40px/32px on desktop (total 72px). This brings the mobile header down to approximately 20% of viewport from 30%.

---

## FINDING 7: Subtitle opacity can be tightened

**Source:** Impression audit PA-04: "The subtitle ... competes slightly" with title. Currently at opacity: 0.9 (line 194).

**Problem:** At 0.9 opacity the subtitle is nearly full brightness -- close enough to the title to create what the impression auditor called a "minor hierarchy wobble."

**Fix:**

### Change 7: Subtle subtitle opacity reduction
```
SELECTOR: header .subtitle
FILE LINE: 194
OLD: opacity: 0.9;
NEW: opacity: 0.85;
```

**Rationale:** Drop from 0.9 to 0.85. This widens the gap between title (full brightness) and subtitle, while keeping the subtitle clearly more prominent than metadata (also 0.85 but smaller font size creates the remaining distinction). The net effect: title (1.0) >> subtitle (0.85 at 1.375rem) >> meta (0.85 at 0.8125rem). The font size difference carries the subtitle-to-meta hierarchy, while the opacity drop separates title from subtitle.

---

## SUMMARY OF ALL CHANGES

| # | Selector | Property | Old | New | Line |
|---|----------|----------|-----|-----|------|
| 1a | `header .meta` | opacity | 0.7 | 0.85 | 202 |
| 1b | `header .meta` | font-size | var(--type-meta) | 0.8125rem | 199 |
| 2a | `header` | padding | var(--space-16) 0 | var(--space-10) 0 var(--space-8) 0 | 179 |
| 2b | `header .subtitle` | margin-bottom | var(--space-3) | var(--space-2) | 193 |
| 3 | (HTML) diagram text | ASCII content | Normal caps | Letter-spaced layer names + lowercase sub-components | 687-723 |
| 4 | (HTML) trust diagram | ASCII content | Normal caps | Letter-spaced zone names | 1329-1363 |
| 5a | `footer .footer-meta` | opacity | 0.7 | 0.85 | 228 |
| 5b | `footer .footer-provenance` | opacity | 0.6 | 0.75 | 235 |
| 6 | `@media header` | padding | (none) | var(--space-8) 0 var(--space-6) 0 | 534+ |
| 7 | `header .subtitle` | opacity | 0.9 | 0.85 | 194 |

---

## CHANGES NOT MADE (with rationale)

1. **h3 italic style** -- LOCKED decision per constraints. Not touched.
2. **Font families** -- Locked. Not touched.
3. **Header border-bottom: 3px solid var(--color-primary)** -- Design decision. Not touched.
4. **border-radius: 0** -- Soul constraint. Not touched.
5. **Diagram font-size** -- Typography auditor recommended scaling up diagram labels 15-20%. This is a valid concern but conflicts with the monospace `pre` rendering model. Increasing pre font size would enlarge ALL diagram text equally, not solving the hierarchy problem. The letter-spacing + case changes (Finding 3) address hierarchy without font size changes. If diagram labels still feel small after these changes, a follow-up could add a CSS class to the featured diagrams with a slightly larger font-size (e.g., `font-size: 0.9375rem` instead of `0.875rem`), but this is a separate concern from header/polish.
6. **Reducing number of h3 elements** -- Permitted by constraints but not recommended here. The h3 elements serve genuine structural purposes (Component 1, Component 2, Component 3 under Architecture Deep Dive; Option 1, Option 2 under Installation; etc.). Reclassifying them as `<p><strong>` would lose semantic structure. The italic density concern from the audit is real but is better addressed by content reorganization (separate concern from this patch).
