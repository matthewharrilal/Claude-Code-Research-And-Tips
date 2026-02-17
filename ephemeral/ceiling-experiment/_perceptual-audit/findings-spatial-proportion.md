# AUDITOR-C: Spatial + Proportion Findings

**Auditor:** AUDITOR-C (Spatial + Proportion specialist)
**Questions:** PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33
**Protocol:** Cold look FIRST, scroll-through, then questions. Zero source file access.

---

## STEP 1: COLD LOOKS (Locked Reactions)

### COLD LOOK (1440):
**Gut reaction:** Content is a narrow column floating in vast emptiness on both sides—this feels like a phone design stretched awkwardly across a cinema screen.

**Worst thing:** The horizontal negative space—massive dead zones on left and right that serve zero compositional purpose, just empty parking lots flanking a single narrow lane.

**Best thing:** The dark header/diagram blocks create strong visual anchors that break up the light cream monotony.

**Ship verdict:** NO

---

### COLD LOOK (768):
**Gut reaction:** Now the composition finally breathes—the content feels purposefully sized for its container, not accidentally centered.

**Worst thing:** Scroll-14 onward shows enormous vertical dead zones where content just... stops, leaving full-height white voids that kill momentum.

**Best thing:** The content-to-viewport ratio feels designed, not leftover—the column fills the width with confident intention.

**Ship verdict:** YES WITH RESERVATIONS

---

### COLD LOOK (1024):
**Gut reaction:** Sits in an uncomfortable middle—wider than phone but still clutching the center, like someone who can't decide whether to use the full room.

**Worst thing:** Same as 1440 but slightly less criminal—the horizontal dead space still dominates but isn't quite as stadium-sized.

**Best thing:** The dark diagrams still anchor effectively, creating weight distribution that prevents total collapse into nothingness.

**Ship verdict:** YES WITH RESERVATIONS

---

## STEP 2: SCROLL-THROUGH + SQUINT TEST

### Scroll Observations (1440):
The scroll tells the story of a page that frontloads all its visual weight, then fades into progressively emptier screens. The opening has tables, diagrams, structure—then it dissolves into bullet lists floating in white oceans. By scroll-10, we're looking at maybe 20% content coverage, 80% void. The scroll rhythm is: dense → sparse → barren → ghostly.

### Squint Test (All Viewports):
**1440:** Squinting reveals the true crime—this looks like a thin vertical stripe painted down the center of a canvas. The composition is a LINE, not a PAGE. All the weight is on the center axis; the sides might as well not exist.

**768:** Squinting shows a balanced rectangle—light sections alternate with darker diagram blocks in a way that reads as intentional distribution. This looks COMPOSED.

**1024:** Squinting shows the same center-stripe problem as 1440, just slightly less extreme. Still reads as "narrow thing + emptiness" not "full-width composition."

---

## STEP 3: PA QUESTIONS

### PA-09: Is there dead space that serves no purpose?
**FINDING:** YES—CATASTROPHIC at 1440, MODERATE at 1024.

At 1440, the horizontal margins are not margins—they're WASTELANDS. We're talking hundreds of pixels on each side doing absolutely nothing. No pull-quotes extending into them, no annotations, no visual breathing room that enhances readability. Just... empty. This is the spatial equivalent of buying a mansion and only living in the hallway.

At 768, the space is purposeful—everything participates. At 1024, the crime is less severe but still present—noticeable dead flanks.

The vertical dead zones are equally brutal: after scroll-10 at all widths, we encounter full-screen blank sections where content has apparently given up. These aren't "pauses"—they're dropped signals.

**SEVERITY:** BLOCKING at 1440. Desktop completely fails to utilize its canvas.

---

### PA-10: If you squint until you can't read text, does the layout look balanced?
**FINDING:** NO at 1440/1024, YES at 768.

At 1440/1024: Squinting reveals a vertical STICK of dark/light alternation down the center, surrounded by vast light emptiness. The composition is UNBALANCED—all weight is center-axis, nothing on the flanks. It's like a see-saw with one person sitting in the exact middle—technically stable but compositionally dead.

At 768: Squinting shows proper weight distribution—the dark header, the diagram blocks, the table sections create a checkerboard of visual mass that feels DISTRIBUTED across the available space. The weight participates edge-to-edge.

The PATTERN is: this layout was designed at mobile width, then failed to adapt its spatial thinking to desktop. It's not that the mobile design was "blown up"—it's that the MENTAL MODEL stayed mobile even as the canvas grew.

**SEVERITY:** SIGNIFICANT. The squint test exposes that this isn't a responsive layout—it's a mobile layout in a larger box.

---

### PA-11: Are the margins generous (confident) or anxious (clutching)?
**FINDING:** ANXIOUS at all widths, but for different reasons.

At 1440/1024: The margins are so excessive they've crossed from "generous" into "terrified." This is content that's CLUTCHING the center like someone afraid to spread out. It reads as "I don't trust myself to use this space, so I'll just... huddle here." The psychology is fearful, not confident.

At 768: The margins are TIGHT—content is pressed to near-edges with minimal breathing room. This also reads as anxious, but in the opposite direction: "I have so little space, I must cram every inch." There's no sense of "I chose this proportion because it's perfect"—it's more "I'm using what I have because I must."

NEITHER extreme feels confident. Confident margins say "I chose this proportion deliberately, and the space around me is part of my design." These margins say "I'm either terrified of the space or crushed by its absence."

**SEVERITY:** MODERATE. Not blocking, but it undermines the psychological confidence of the design.

---

### PA-30: At 1440 wide, does the layout feel DESIGNED for this width, or like a narrower design centered in extra space? Does the full width participate in the composition?
**FINDING:** 100% the latter—this is a narrower design centered in extra space.

The smoking gun: nothing about this layout USES the extra width. No:
- Multi-column sections that only appear at desktop
- Sidebars or annotation zones
- Wider tables that breathe at desktop but stack at mobile
- Pull-quotes that extend into the margins
- Asymmetric layouts that leverage horizontal space

It's a single narrow column at ALL widths—just with different amounts of padding. The content doesn't KNOW it's at 1440. It's compositionally blind to its container.

The "full width participation" question: maybe 30% of the width participates (the content column). The other 70% is inert—not part of the design, just... there.

**SEVERITY:** BLOCKING. This is the core spatial failure—the layout is viewport-agnostic when it should be viewport-AWARE.

---

### PA-31: If you covered the content and only looked at the surrounding space, would that space feel designed or leftover?
**FINDING:** 100% LEFTOVER at 1440/1024, DESIGNED at 768.

The test: mentally delete all content, look at only the negative space.

At 1440/1024: The negative space is just "everything that isn't content"—formless light voids on the sides, no shape, no intention. It's not SPACE, it's ABSENCE. Like looking at a sculpture and seeing only the empty gallery around it.

At 768: The negative space has SHAPE—it's the tight frame around the content, creating a specific proportion. The space and content are in dialogue. You can sense the designer CHOSE this ratio.

The metaphor: at 768, the negative space is the matting around a photograph—part of the presentation. At 1440, the negative space is the warehouse the photograph got shipped in—accidental, not compositional.

**SEVERITY:** BLOCKING at 1440. The negative space quality reveals this isn't a designed desktop layout.

---

### PA-32: Squint at the full page. Is the visual weight (dark areas, dense areas) distributed purposefully across the scroll, or concentrated in one zone?
**FINDING:** CONCENTRATED at top, then catastrophically depleted downward.

The weight distribution is heavily FRONTLOADED:
- **Scroll 1-5:** Dark header, feature table, diagram blocks = HIGH DENSITY
- **Scroll 5-15:** Bullet lists, light text = MEDIUM DENSITY, dropping fast
- **Scroll 15+:** Essentially blank or near-blank screens = ZERO DENSITY

It's like the page spent all its energy in the first act and then just... stopped. No rhythmic distribution, no "dark → light → dark" pacing across the scroll. It's "dark → fading → gone."

The vertical weight curve is: ████████▓▓▓▒▒░░░░ (concentrated → depleted)

Should be: ██░░██░░██░░██ (distributed rhythm)

**SEVERITY:** SIGNIFICANT. The scroll lacks compositional pacing—it exhausts its visual interest early and never recovers.

---

### PA-33: Pick the largest area of empty space. Does it feel like silence in music (purposeful, tension-building) or a dropped signal (accidental, momentum-killing)?
**FINDING:** DROPPED SIGNAL—100% momentum-killing.

The largest empty zones:
1. **Horizontal margins at 1440** (the champion): These feel like dead air on a radio broadcast—not intentional silence, but "we lost the feed." Zero tension, zero purpose. They don't BUILD toward anything; they just... exist.

2. **Vertical voids after scroll-10**: These feel like the page gave up mid-sentence. The content stops, whiteness continues, and you keep scrolling wondering "did it break?" This isn't a pause—it's an ABSENCE.

The distinction: Purposeful silence in music creates ANTICIPATION (what comes next?). These voids create CONFUSION (did something fail to load?).

The horizontal margins especially are not "breathing room"—they're SUFFOCATION by emptiness. They don't let the content breathe; they strand it on an island.

**SEVERITY:** SIGNIFICANT. The empty space undermines confidence and flow—it feels like errors, not design choices.

---

## SYNTHESIS: The Spatial Failure Pattern

### Core Problem: Viewport Amnesia
This layout has ZERO spatial awareness of its container. It's a single-column mobile design that doesn't adapt its SPATIAL THINKING to wider viewports—only its PADDING. The content doesn't know whether it's on a phone or a 4K monitor, and that's catastrophic.

### The Three Failures:
1. **Horizontal utilization:** At desktop, 70% of the width is compositionally dead
2. **Vertical pacing:** Weight frontloads at top, then bleeds out into empty scrolls
3. **Negative space quality:** Surrounding space reads as LEFTOVER, not DESIGNED

### Squint Test Verdict:
- **1440:** Thin vertical stripe on a vast canvas = FAIL
- **768:** Balanced rectangle with edge-to-edge participation = PASS
- **1024:** Awkward middle, leans toward FAIL

### Ship Recommendation:
**NO at 1440/1024** (spatial composition is broken)
**YES WITH RESERVATIONS at 768** (but vertical dead zones remain)

The reservations at 768: even though the horizontal proportion works, the vertical pacing still fails—the scroll still depletes its visual weight and leaves barren sections.

---

## Most Damning Single Observation:

If you showed me the 1440 screenshot with content covered, I would guess the container width was 2400px and the design wasn't finished yet. The spatial proportion screams "this isn't using its canvas." That's not a small issue—it's the DEFINITION of spatial failure.

---

**AUDITOR-C: SPATIAL + PROPORTION ASSESSMENT COMPLETE**
