# PA Auditor C: Multi-Coherence Report

Auditor: C (Multi-Coherence Specialist)
Page: Gas Town VA Pipeline — `output.html`
Date: 2026-02-23

---

## Zone Boundary Channel Inventory

Before scoring, I cataloged what shifts at each major zone boundary across 5 channels: **Background**, **Typography**, **Spacing/Padding**, **Borders**, and **Component Behavior**.

### Header → Zone 1 (Intake)
| Channel | Header | Zone 1 | Shifted? |
|---------|--------|--------|----------|
| Background | `#1A1A1A` (dark) | `#FEF9F5` (warm cream) | YES — full polarity inversion |
| Typography | `Instrument Serif` display italic + `Inter` body, white text | `Instrument Serif` h2 italic at 2.5rem, dark text, drop-cap first letter in red | YES — color inversion + drop-cap introduces |
| Spacing | `48px/40px` padding | `64px top / 48px bottom` | YES — looser, breathing room |
| Borders | 3px red bottom border on header | No top border on intake (clean break) | PARTIAL — the red border serves as boundary marker |
| Components | stat-items in flex row | ladder-diagram (dark code block), prereq-list | YES — entirely different component vocabulary |

**Channels shifted: 4.5/5** — Strong multi-channel transition.

### Zone 1 (Intake) → Zone 2 (Workshop)
| Channel | Zone 1 | Zone 2 | Shifted? |
|---------|--------|--------|----------|
| Background | `#FEF9F5` (cream) | `#F0EBE0` (warmer tan) | YES — visible warmth increase (~14 RGB points on B channel) |
| Typography | h2 at 2.5rem (`text-h1`), body at `text-lg` (1.125rem), line-height 1.8 | h2 at 2rem (`text-h2`), body at `text-base` (1rem), line-height 1.7 | YES — type scale tightens noticeably |
| Spacing | `64px top / 48px bottom` | `48px top / 48px bottom` | YES — compressed top padding |
| Borders | No top border | `3px solid #E0D5C5` top border | YES — explicit structural border appears |
| Components | ladder-diagram, drop-cap, prereq-list | callouts (amber/warning/info variants), comparison-table, ascii-diagram, blockquote | YES — component vocabulary expands significantly |

**Channels shifted: 5/5** — Every channel participates. Excellent boundary.

### Zone 2 (Workshop) → Zone 3 (Factory Floor)
| Channel | Zone 2 | Zone 3 | Shifted? |
|---------|--------|--------|----------|
| Background | `#F0EBE0` (tan) | `#FFFFFF` (white) | YES — stark shift to clinical white (~30 RGB points) |
| Typography | body at `text-base` (16px), h3 at `text-h3` (1.5rem) | body at `15px` (custom), h4 appears (1.25rem, non-italic, weight 600) | YES — tighter font size, new heading level, weight shift |
| Spacing | `48px` padding | `32px top / 40px bottom` | YES — compressed, denser |
| Borders | `3px solid #E0D5C5` (subtle tan) | `4px solid #1A1A1A` (heavy dark) | YES — border weight AND color both shift dramatically |
| Components | callouts, tables, ascii-diagrams | role-grid (2-col bento), role-cards with hierarchy (town/rig/human variants), code-snippets with headers, comm-flow diagrams, hierarchy-diagram | YES — maximum component density, grid layout introduces |

**Channels shifted: 5/5** — The strongest boundary on the page. The jump from tan to white plus the heavy dark border creates an unmistakable threshold. This is the factory gates opening.

### Zone 3 (Floor) → Zone 4 (Archive)
| Channel | Zone 3 | Zone 4 | Shifted? |
|---------|--------|--------|----------|
| Background | `#FFFFFF` (white) | `#EDE6DA` (archive tan) | YES — warm return, ~19 RGB points shift |
| Typography | body at `15px`, non-italic h4 | body at `text-base` (16px), h3 italic returns, no h4 | YES — type relaxes back, heading hierarchy simplifies |
| Spacing | `32px/40px` compact | `40px/40px` moderate | PARTIAL — slight loosening, not dramatic |
| Borders | `4px solid #1A1A1A` top | `3px solid #E0D5C5` top | YES — weight drops, color shifts from dark to tan |
| Components | role-grid, code-snippets, comm-flow | memory-layer-diagram (with amber border and hot/warm/cold color semantics) | YES — unique diagram type with semantic color coding |

**Channels shifted: 4.5/5** — Clear transition. The amber-accented memory diagram is zone-specific.

### Zone 4 (Archive) → Zone 5 (Output)
| Channel | Zone 4 | Zone 5 | Shifted? |
|---------|--------|--------|----------|
| Background | `#EDE6DA` (archive tan) | `#F8F3EB` (lighter output cream) | YES — lighter, about ~10-12 RGB points |
| Typography | Standard body text | Same base, but **inversion-block** introduces white-on-dark at h1 scale (2.5rem) mid-zone | YES — the dark inversion mid-zone is a dramatic typographic event |
| Spacing | `40px` padding | `40px` padding, but inversion-block adds `80px/32px` internal | PARTIAL — base similar, inversion creates internal spacing drama |
| Borders | `3px solid #E0D5C5` | `1px solid #E0D5C5` top (lightest border weight on page) | YES — border weight drops to minimum, deliberate thinning |
| Components | memory-layer-diagram | principle-blocks (steel left-border), waves-table (with hover highlight in amber), **inversion-block** (full dark reversal with red borders) | YES — inversion-block is the D-04 surprise moment, completely unique |

**Channels shifted: 4.5/5** — The border weight reduction is subtle but the inversion-block mid-zone is the most dramatic component event on the entire page.

### Zone 5 (Output) → Zone 6 (Dispatch)
| Channel | Zone 5 | Zone 6 | Shifted? |
|---------|--------|--------|----------|
| Background | `#F8F3EB` (output cream) | `#E8E1D5` (dispatch — darkest warm tone) | YES — noticeably darker, ~16 RGB points |
| Typography | body at `text-base`, principle-blocks | body at `text-base`, closing-section uses `text-h3` in display italic with 45ch max-width | YES — closing typography widens and breathes |
| Spacing | `40px` padding | `32px top / 48px bottom` + `64px` margin before closing section | YES — asymmetric padding, earned closure space |
| Borders | `1px solid #E0D5C5` | `3px solid #E0D5C5` — border weight returns | YES — weight increases back from minimum |
| Components | principle-blocks, waves-table, inversion-block | checklists (with checkbox symbols), troubleshoot-items (expandable details with coral accent), dispatch-comparison tables, decision-flow (green-bordered), closing-section | YES — implementation-oriented vocabulary (checklists, troubleshooting accordions, decision flows) |

**Channels shifted: 5/5** — Full multi-channel transition into the implementation zone.

### Zone 6 → Footer
| Channel | Zone 6 | Footer | Shifted? |
|---------|--------|--------|----------|
| Background | `#E8E1D5` (dispatch) | `#1A1A1A` (dark) | YES — full polarity inversion, mirrors header |
| Typography | body text | mono labels, smaller body, display italic closing line | YES — structural mirror of header typography |
| Borders | zone content | `3px solid #E83025` red top border | YES — red border returns, bookending with header |
| Spacing | zone padding | `40px/24px` | YES — compressed, coda |

**Channels shifted: 4/4 measured** — Clean exit.

---

## PA Question Scores

### PA-15: At each zone boundary, do MULTIPLE channels shift?
**Score: 5/5**

This is the strongest dimension of the page. At every single zone boundary, I count a minimum of 4 channels shifting simultaneously. The critical boundaries (Zone 2→3 and Header→Zone 1) achieve 5/5 channel shifts. The weakest boundary is Zone 4→5 with the border weight being a subtle 3px→1px change and the spacing being only partially different — but even that boundary is rescued by the inversion-block appearing mid-zone as a dramatic multi-channel event.

Channel shift summary across 7 boundaries: 4.5, 5, 5, 4.5, 4.5, 5, 4 = **average 4.64/5 channels per boundary**. This is exceptional multi-coherence. The channels are not just shifting independently — they shift in coordinated ways that reinforce the zone identity (e.g., Zone 3's white background + heavy dark border + compressed spacing + grid components all say "factory floor density" together).

### PA-16: How many distinct zones can you identify just by scrolling?
**Score: 4/5**

I can identify **7 distinct zones** by scrolling:
1. **Header** — dark command center with red accent
2. **Zone 1 (Intake)** — warm cream, sparse, large type, ladder diagram
3. **Zone 2 (Workshop)** — slightly warmer tan, moderate density, callouts and tables appear
4. **Zone 3 (Factory Floor)** — white background, heavy dark top border, bento grid of role cards, maximum density
5. **Zone 4 (Archive)** — return to warm tan, amber-accented memory diagrams
6. **Zone 5 (Output)** — lighter cream, principle blocks, then the dramatic dark inversion-block mid-zone
7. **Zone 6 (Dispatch)** — darkest warm tone, checklists, troubleshooting accordions, decision flows

Target was 6 zones. The page delivers 6 content zones plus header/footer bookends. I give 4/5 rather than 5/5 because zones 4 and 5 are somewhat similar in visual weight when scrolling quickly at 1440px — the Zone 4→5 background shift (#EDE6DA → #F8F3EB) is the subtlest boundary on the page. At speed, these could merge until the inversion-block appears. At 768px this is less of an issue because the single-column layout makes zone length differences more apparent.

### PA-17: Does the density arc feel intentional?
**Score: 5/5**

The density arc is clearly intentional and follows the planned CRESCENDO + RELEASE pattern:

- **Zone 1 (Intake):** SPARSE — large type (h1 scale, 1.125rem body), generous 64px top padding, breathing room, drop-cap, single-column prose with wide line-height (1.8). Only 2-3 component types. This reads as a manifesto entry point.
- **Zone 2 (Workshop):** MODERATE — type tightens to h2/base scale, callouts introduce, tables appear, ascii diagrams, blockquotes. Density building but still readable.
- **Zone 3 (Factory Floor):** DENSE (PEAK) — 15px body text (tightest on page), 1.65 line-height (tightest), 32px top padding (most compressed), 2-column bento grid of role cards, code snippets with file headers, hierarchy diagrams, communication flows. This is unmistakably the density peak.
- **Zone 4 (Archive):** MODERATE — relaxes back to 16px/1.7, moderate padding, fewer component types. The amber-bordered memory diagram is distinct but the zone breathes after the floor's intensity.
- **Zone 5 (Output):** MODERATE with DRAMATIC INTERRUPTION — base density is moderate, but the inversion-block creates a focused emotional peak within the zone. Principle blocks are structured but spacious.
- **Zone 6 (Dispatch):** DENSE→SPARSE — starts with implementation checklists and comparison tables (dense), then the closing-section introduces 64px top margin, h3-scale display italic with 45ch max-width — earned breathing room that resolves the arc.

The arc is: SPARSE → MODERATE → DENSE (peak) → MODERATE → MODERATE+SURPRISE → DENSE→SPARSE (release). This is a well-executed crescendo with a satisfying earned closure.

### PA-18: Do callouts/components adapt to their zone context?
**Score: 4/5**

YES, there is meaningful zone-contextual adaptation:

**Callouts explicitly adapt per zone:**
- `.zone-intake .callout` — standard 20px/24px padding
- `.zone-floor .callout` — compressed to 12px/16px padding, border-left widens to 5px (denser, more assertive)
- `.zone-dispatch .callout` — intermediate 16px/20px padding

**Tables adapt per zone:**
- `.comparison-table` (Zone 2) — standard hover highlight in red tint
- `.waves-table` (Zone 5) — hover highlight in amber tint, current-wave row gets red bold treatment
- `.dispatch-comparison` (Zone 6) — hover highlight in green tint

**Diagrams are zone-specific:**
- `ladder-diagram` only in Zone 1
- `ascii-diagram` only in Zone 2
- `hierarchy-diagram` and `comm-flow` only in Zone 3
- `memory-layer-diagram` only in Zone 4 (with unique amber border and hot/warm/cold semantic colors)
- `decision-flow` only in Zone 6 (with green border and yes/no/result semantic colors)

**Role cards have hierarchy-based variants:**
- `.role-card--town` — heavy 4px dark border (authority)
- `.role-card--rig` — medium 3px tan border (middle management)
- `.role-card--human` — 4px red border + red tint background + full-width span (human distinction)

**Zone-specific selection colors:**
- `.zone-archive ::selection` — amber highlight
- `.zone-dispatch ::selection` — green highlight

I give 4/5 rather than 5 because while adaptation is present and intentional, the blockquote styling appears uniform across zones, and the base paragraph styling (max-width 62ch) is shared across most zones without variation. A 5/5 would require every reusable component to feel noticeably different in each zone appearance.

### PA-19: Is there a CRESCENDO effect?
**Score: 4/5**

YES, there is a clear crescendo with a well-executed peak and release:

**Building phase (Zones 1-3):**
- Zone 1 invites with sparse philosophical manifesto. Background is lightest, text is largest, breathing room is generous.
- Zone 2 introduces the mental model. Background warms, density increases, component vocabulary expands (callouts, tables, diagrams).
- Zone 3 is the unmistakable peak. The 4px dark top border is a factory gate — the background shifts to white (clinical), typography compresses to 15px, a 2-column grid appears, 8 role cards fill the viewport. This is the production floor.

**Sustain/surprise phase (Zones 4-5):**
- Zone 4 relaxes — the memory system is moderate density, amber accents mark "archive" territory.
- Zone 5 has the D-04 surprise moment: the inversion-block (full dark reversal with red borders) creates a second emotional peak mid-page. The identity transformation ("You're Not a Programmer Anymore") is delivered in this inverted block — structurally and emotionally the most dramatic single component on the page.

**Release phase (Zone 6):**
- Dense implementation content (checklists, troubleshooting) transitions into an earned closing section with 64px top margin, display italic typography at h3 scale, and a narrow 45ch measure. The page exhales.

I give 4/5 rather than 5 because the sustain phase (Zones 4-5) could feel slightly flat if the inversion-block is missed or scrolled past quickly. The crescendo's primary peak (Zone 3) is perfect, but the secondary peak (inversion-block in Zone 5) depends on the reader pausing at that moment. At scanning speed, the page can feel like it peaks at Zone 3 and then gradually winds down rather than building to a second peak. A 5/5 crescendo would make the second peak structurally unavoidable (e.g., viewport-height section, heavier structural borders framing it).

---

## Summary Scores

| Question | Score | Key Finding |
|----------|-------|-------------|
| PA-15: Multi-channel boundary shifts | **5/5** | Average 4.64 channels shift per boundary. Every boundary is multi-coherent. |
| PA-16: Distinct zone count | **4/5** | 7 zones identifiable (6 content + header/footer). Zone 4→5 boundary is subtlest. |
| PA-17: Intentional density arc | **5/5** | Clear SPARSE→MODERATE→DENSE→MODERATE→SURPRISE→RELEASE pattern. |
| PA-18: Zone-adapted components | **4/5** | Callouts, tables, diagrams, role-cards, selection colors all adapt. Blockquotes don't. |
| PA-19: Crescendo effect | **4/5** | Strong primary peak (Zone 3) + dramatic secondary peak (inversion-block). Sustain phase could be stronger. |

**Multi-Coherence Average: 4.4/5**

## Overall Multi-Coherence Verdict

This page demonstrates **strong multi-coherence**. The factory metaphor is not just thematic decoration — it organizes the visual channels into zone-specific coordinated systems. The zone boundary between Workshop and Factory Floor (Zone 2→3) is one of the best I have seen: background, typography, spacing, borders, and components ALL shift dramatically and in the same semantic direction (toward industrial density). The weakest link is the Zone 4→5 transition, where the background difference is subtle enough to merge at scanning speed. The inversion-block rescues Zone 5's identity but it appears mid-zone rather than at the boundary.

The page achieves COMPOSED-level multi-coherence — channels are not just shifting independently, they are coordinated around the factory metaphor at each boundary.
