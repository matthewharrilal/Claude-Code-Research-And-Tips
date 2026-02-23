# PA Auditor H: Spatial Composition

## Audit Scope
Examined: `output.html` at 1440px, 1024px, and 768px viewports
Focus: Spacing consistency, zone shifts, awkward gaps, visual rhythm, intentional negative space

---

## PA-40: Is spacing consistent within zones?
**Score: 4/5**

Each zone uses a coherent internal spacing system drawn from the 4px-base scale defined in `:root`. The system is remarkably disciplined:

- **Zone 1 (Intake):** Uses `--space-16` (64px) top / `--space-12` (48px) bottom for zone padding. Internal elements spaced at `--space-6` (24px) and `--space-8` (32px). Paragraph margins `--space-6`. The ladder diagram gets `--space-8` top and bottom. Consistent serif headings with `--space-8` bottom margin.
- **Zone 3 (Floor):** Tighter system. Zone padding `--space-8` (32px) top / `--space-10` (40px) bottom. Paragraphs at `--space-4` (16px). Headings h3 at `--space-3` (12px) bottom, h4 at `--space-2` (8px). Role grid gap `--space-4`. This is noticeably compressed vs Intake -- appropriate for "dense production floor."
- **Zone 4 (Archive):** Returns to moderate with `--space-10` (40px) symmetrical padding. Paragraph margins `--space-5` (20px). Headings at `--space-6`/`--space-4` bottom margins.
- **Zone 6 (Dispatch):** `--space-8` top / `--space-12` bottom. Paragraphs `--space-4`. Checklists `--space-5`. Troubleshoot items `--space-4`.

Within each zone, spacing values are internally consistent. The one minor inconsistency: Zone 2 (Workshop) uses `--space-5` (20px) for paragraph margins while Zone 4 (Archive) also uses `--space-5` -- these zones have different density intentions (moderate vs moderate) but identical paragraph rhythm, which slightly blurs their spatial identity.

---

## PA-41: Do spacing values SHIFT between zones?
**Score: 4/5**

Yes, there are clear and intentional spatial shifts across zone boundaries. The padding system creates a measurable density arc:

| Zone | Top Padding | Bottom Padding | Paragraph Margin | Heading Bottom Margin |
|------|-------------|----------------|------------------|-----------------------|
| 1 - Intake (SPARSE) | 64px | 48px | 24px | 32px |
| 2 - Workshop (MODERATE) | 48px | 48px | 20px | 24px |
| 3 - Floor (DENSE) | 32px | 40px | 16px | 12px |
| 4 - Archive (MODERATE) | 40px | 40px | 20px | 24px |
| 5 - Output (MODERATE) | 40px | 40px | 20px | 24px |
| 6 - Dispatch (DENSE->SPARSE) | 32px | 48px | 16px | 12px |

The progression is clear: Intake is the loosest (64px top, 24px paragraphs), the Floor compresses to the tightest (32px top, 16px paragraphs), and then the page relaxes back through Archive/Output before tightening again for Dispatch's operational content. This is a genuine density arc -- sparse to dense to moderate to dense -- that maps to the factory metaphor (raw material arrives loosely, gets compressed on the production floor, relaxes in storage, tightens again for dispatch).

The one point docked: Zones 4 and 5 (Archive and Output) are nearly identical spatially (both 40px/40px, both 20px paragraph margin), which makes the boundary between them feel soft rather than shifted. A more differentiated spacing system between these two would strengthen the arc.

---

## PA-42: Are there any awkward gaps or crowded areas?
**Score: 3/5**

Mixed results. Some areas handle density well; others have issues visible in the screenshots:

**Positive:**
- The role-card grid in Zone 3 uses tight `--space-4` (16px) gaps with `--space-5` (20px) internal padding. Compact but not cramped. The 2-column layout reads clearly.
- Code blocks throughout maintain consistent `--space-5` or `--space-6` padding. No crowding of code content against edges.
- The header has clean proportional spacing: meta->title->subtitle->stats with clear hierarchy.

**Problematic:**
- **Bottom of page after dispatch zone:** In the full-page screenshots at both 1440px and 768px, there is a substantial empty cream area below the footer. This registers as an unintentional void -- approximately 200-300px of blank background color trailing after the footer's dark block. This is the most visually conspicuous spacing defect.
- **Inversion block margins:** The inversion block uses `margin: var(--space-8) calc(-1 * var(--space-6))` to break out of the container. This creates a noticeable spatial jolt -- the negative horizontal margin creates edge-to-edge dark while the vertical margin (32px) above and below is relatively modest for such a dramatic visual break. The transition feels abrupt rather than earned at the top.
- **Zone 3 stacked elements:** The Floor zone has consecutive diagrams, role grids, code snippets, and tables. While individual spacing is consistent, the cumulative stacking of dark-background elements (hierarchy diagram + code blocks + comm-flow) creates visually heavy sequences where dark blocks are separated by only 16-20px of white. At times these feel like they are crowding each other.

---

## PA-43: Does the page have a visual rhythm?
**Score: 4/5**

The page demonstrates a clear and intentional alternation between dense and sparse that reads as breathing:

1. **Header** (dark, compressed) -- establishes factory authority
2. **Zone 1 - Intake** (sparse, light, generous) -- breathing room, philosophical
3. **Zone 2 - Workshop** (moderate, slightly darker bg `#F0EBE0`) -- building mental model
4. **Zone 3 - Floor** (dense, white bg, heavy with dark code blocks) -- peak compression
5. **Zone 4 - Archive** (moderate, tan `#EDE6DA`) -- relaxation
6. **Inversion block** (dark surprise) -- dramatic tonal interruption
7. **Zone 5 - Output** (moderate, warm `#F8F3EB`) -- distillation
8. **Zone 6 - Dispatch** (moderate-to-dense, darker tan `#E8E1D5`) -- operational tightening
9. **Footer** (dark, mirrors header) -- closure

This creates a genuine wave pattern: dark-sparse-moderate-dense-moderate-DARK-moderate-dense-dark. The rhythm is reinforced by background color alternation (the zones shift between cream/white/tan/warm tones), border weight changes at zone boundaries (worker 1px vs rig 3px vs town 4px), and the inversion block as a dramatic mid-page disruption.

The rhythm is further supported by typography shifting: the Intake zone uses `--text-lg` (18px) with `line-height: 1.8` (sparse), while the Floor uses `15px` with `line-height: 1.65` (compressed). This creates a reading tempo that shifts as you scroll.

Docked one point because the Archive-to-Output-to-Dispatch sequence (Zones 4-5-6) all feel relatively similar in density -- the rhythm flattens in the second half. The dramatic inversion block rescues the mid-page, but after that the density contrast diminishes.

---

## PA-44: Is negative space used intentionally?
**Score: 4/5**

Negative space is handled with mostly strong intentionality:

**Intentional uses:**
- **Intake zone** has the most generous padding (64px top) and widest paragraph spacing. This is clearly deliberate -- the "raw material arrives" zone breathes, giving the reader orientation space. The `max-width: 62ch` constraint creates generous side margins on wider screens that frame the text thoughtfully.
- **Header stats row** uses `margin-top: var(--space-8)` and `padding-top: var(--space-6)` to create a breathing separator between the title/subtitle and the data strip. The thin `#333333` border acts as a quiet divider in the dark space.
- **Section indicators** (small uppercase mono labels like "ZONE 1 -- THE INTAKE") have `margin-bottom: var(--space-4)` and `padding-bottom: var(--space-2)` with a subtle border. This creates a measured gap between zone label and zone heading that reads as structured whitespace.
- **Role cards** have `--space-5` (20px) internal padding that gives each card content room to breathe within the tight grid.
- **Container width** at 960px max with 24px side padding means at 1440px there is approximately 240px of negative space on each side. This frames the factory content like a document on a desk -- the cream background acts as the desk surface.

**Less intentional:**
- **Post-footer void:** As noted in PA-42, there is visible trailing space below the footer that does not appear to serve a framing purpose.
- **Between Zones 4 and 5:** The boundary is marked only by `border-top: var(--border-worker) solid var(--color-border)` -- a 1px line. Given that both zones have similar padding and background warmth (`#EDE6DA` vs `#F8F3EB`), the transition space feels undersignaled. The negative space between these zones is neither generous enough to be a breathing pause nor tight enough to suggest continuity.

---

## Summary

| Question | Score | Key Finding |
|----------|-------|-------------|
| PA-40: Intra-zone consistency | 4/5 | Disciplined 4px-base scale applied per-zone; minor blurring between moderate zones |
| PA-41: Inter-zone spacing shifts | 4/5 | Clear density arc (64px->32px->40px) maps to factory metaphor; Archive/Output too similar |
| PA-42: Awkward gaps/crowding | 3/5 | Post-footer void, abrupt inversion margins, dark block stacking in Floor zone |
| PA-43: Visual rhythm | 4/5 | Strong wave pattern with background/border/type shifts; flattens in second half |
| PA-44: Intentional negative space | 4/5 | Container framing, intake breathing room, section gaps all deliberate; trailing void issue |

**Aggregate: 19/25**

**Dominant spatial strength:** The density arc from sparse Intake to dense Floor to moderate Archive genuinely maps to the factory metaphor and creates physical reading rhythm through spacing value changes.

**Dominant spatial weakness:** The trailing empty space below the footer and the spatial similarity between Zones 4 and 5 are the main defects. The second half of the page loses the strong contrast that the first half establishes.
