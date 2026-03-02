# Reflection v2: Gas Town Extraction (REFINE Build)

## CONVICTION

**What I was trying to make:** I wanted every room in the garrison to feel like a different room -- not through color alone (the first builder already succeeded at zone color differentiation) but through *texture*: the density of components, the size of type, the tightness of spacing, the weight of borders at zone boundaries. The command post should feel sparse and authoritative. The armory should feel packed and technical. The signal room should feel warm and layered. The parade ground should feel open and declarative. The first builder changed the wall color between rooms. I wanted to change the furniture.

**Where I succeeded:**

The armory sections now have genuinely different furniture. Prose inside armory zones is set at `--text-sm` with `line-height: 1.6` and `margin-bottom: var(--space-3)` -- measurably tighter than barracks prose at `--text-base` with `line-height: 1.7` and `margin-bottom: var(--space-4)`. The armory's padding is `--space-8` (32px) versus the barracks' `--space-12` (48px). When you scroll from the barracks into the armory, the room compresses. When you scroll from the armory into the parade ground, the room exhales. This was the ONE THING I committed to.

The dark zones are now differentiated. Architecture diagrams use `.diagram-block` -- a distinct component with a darker background (#1E1E1E vs #2A2420 for code blocks), a 4px left-border in primary red instead of 3px all-around border, and no side/top/bottom borders. This makes diagrams feel like blueprints pinned to a wall (the left stripe anchors them) while code blocks feel like field manual pages (bordered on all sides, contained). The header uses #2A2420 with a 4px bottom border. The footer uses the same #2A2420 but with warmer secondary text (#B8A898 vs code's #F5EDE0). The Weaver asked for "different furniture in different dark rooms." These three dark zones now have three distinct internal textures.

The command post header is more commanding. The title is now `--text-display` (3rem/48px) instead of `--text-h1` (2.5rem/40px). The ID label has wider letter-spacing (0.15em vs 0.1em) and more bottom margin. The meta bar has a top border creating a ruled line that separates the stat row from the title block. The stat labels use warmer gray (#8A7E6E) that passes WCAG AA on dark backgrounds.

The Mayor role card is now dark. The bento-cell--commander class now has `background: #2A2420` and `color: #F5EDE0`, inverting it into a dark zone within the armory. This creates a genuine hierarchy signal: the Mayor is visually distinct from the 7 specialist roles. The Weaver identified the bento grid as the "compositional peak" -- making the Mayor card dark transforms it from "the biggest card" to "the one card that belongs to a different visual register."

The comparison tables were replaced with a three-column comparison strip for the main Gas Town vs Basic Claude vs PRD Loops comparison. This is a new component -- a dense, bordered grid that consolidates three sequential tables into one visual unit. The header cells are dark-on-dark, creating a second visual peak in the bottom third of the page (addressing the Weaver's concern about evenness of attention). The Cursor/Windsurf comparison remains as a standard table because it is a single comparison, not a three-way.

All R >= G >= B color violations are fixed. Every accent color now satisfies the warm palette constraint: --accent-blue replaced with --accent-tawny (#D9A064), --accent-green replaced with --accent-olive (#9D8A4A), --accent-purple replaced with --accent-saddle (#8A6B4A). Syntax highlighting colors are all warm. Callout backgrounds are all warm. No blues, no purples, no greens where G > R.

The checkpoint markers now have a small red square (::before pseudo-element, 8px) that gives them visual weight as transition markers. They feel less like dividers and more like doorways -- you see the red dot and know you are crossing a threshold.

The signal room (beads section) now enters through a 4px tawny amber border instead of a 3px border-color border. This creates a distinct doorway: the armory enters through red, the signal room enters through amber. Different rooms, different insignia on the door.

**Where I fell short:**

The bead examples in the signal room still use the same visual pattern three times. I considered making each bead type structurally different (a sidebar layout for context, a two-column for decision, a progress-bar for progress) but decided the recognition pattern -- the system-ness of three beads that look alike -- was more important than visual novelty. The Weaver did not flag this as a problem; the first builder flagged it as a concern. I sided with the content: beads ARE a system, and systems look systematic.

The mobile experience of the comparison strip is compromised. At 768px it collapses to single column, which is functional but loses the three-way visual comparison that is the whole point. A horizontal scroll might have been better but felt inconsistent with the page's editorial (not interactive) identity.

## ALTERNATIVES

**The road not taken: Solid offset depth on the Mayor card.** The mechanism catalog offers a ::after pseudo-element offset as a box-shadow alternative. I considered applying it to the Mayor's bento cell to create literal depth -- the Mayor elevated above the other roles. I rejected this because the solid offset feels decorative here. The dark-background inversion already creates the hierarchy. Adding offset depth would be encoding the same semantic twice.

**The road not taken: Width variation in the parade ground.** The principles could have been set at max-width: 80% with margin-left: 10%, creating a narrower reading channel for the doctrine section. This would encode "these are distilled statements, not expansive prose" through width. I rejected this because the principles already have the 4px left border, serif italic title, and generous spacing. Adding width variation would create four simultaneous channel changes at the parade ground boundary, which exceeds the 4-mechanism-per-viewport cap.

**The road not taken: Drop cap on the opening paragraph.** The mechanism catalog includes drop cap for editorial openings. The first paragraph after "You Are Here" could have opened with a large initial letter. I rejected this because the content is instructional, not literary. A drop cap says "once upon a time." This page says "here is your current position."

**Suppressed creative energy: Dark bead cards.** The first builder also wanted this and suppressed it. I suppressed it for a different reason: the signal room's earthy background (#F5EDE0) against dark bead cards would create a new dark zone that competes with the header, footer, and code blocks. Three dark zones feels disciplined. Four starts to feel heavy. But I still think this could work if the dark tone were warmer -- more #3A3028 than #1E1E1E -- creating a "documents on a desk" feel that is distinct from both the command post dark and the code block dark.

## UNRESOLVED

**The density compression may not be perceptible enough.** The armory uses 14px type at 1.6 line-height. The barracks uses 16px at 1.7. That is a 2px font-size delta and a 0.1 line-height delta. These are above the perceptual minimum thresholds (>= 2px font-size, documented in the experiment lessons) but just barely. A reader may feel "something changed" without being able to name what. This is either a success (subconscious texture) or a failure (imperceptible effort). I do not know which.

**The comparison strip is the riskiest new component.** It is not in the component library. It is not validated by any case study. It works as a visual peak in the lower third of the page, but its dense three-column layout may feel cramped on narrow screens (but above 768px). A third builder should evaluate whether the visual density of the comparison strip serves the content or overwhelms it.

**The warm palette constraint created a semantic differentiation challenge.** With blues, greens, and purples eliminated, the page's accent colors are now tawny (#D9A064), olive (#9D8A4A), saddle (#8A6B4A), coral (#C97065), and amber (#D97706). These are all warm earth tones. The semantic differentiation between "info callout" (tawny) and "essence callout" (amber) is narrower than the original blue-vs-amber differentiation. The page compensates with component structure (different internal layout) but the color signal is weaker. A third builder might consider whether the callout types need restructuring given the warm-only palette.

**What I would tell a third builder:** The rooms now have different furniture but the *hallways* between them are still generic. The checkpoint markers are better with the red dot, but the transition between zones could do more. Consider making the 3px/4px border at zone boundaries a full-width horizontal rule with a monospaced label -- not just "Transition: From X to Y" but something that feels like a physical threshold: a brass plate on a garrison doorframe. The content of the transitions is there. The visual weight of the transitions is still too light relative to the rooms they separate.
