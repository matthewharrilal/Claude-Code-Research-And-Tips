# Perceptual Audit — Auditor 3

## Cold Looks

```
COLD LOOK (view-a / wide):
Gut reaction: A confident technical document that knows exactly what it is — a dark-on-cream briefing with strong structural bones and commanding code blocks.
Worst thing: The title uses a decorative serif/blackletter face that feels like it wandered in from a medieval manuscript — it clashes with the otherwise clean, modern technical tone.
Best thing: The "complexity ladder" code block is immediately grounding — you know where you are and what level you're at within seconds of landing.
Ship it?: REFINE
```

```
COLD LOOK (view-b / medium):
Gut reaction: Holds together well at this width — the content corridor feels natural, nothing is cramped, the hierarchy reads clearly.
Worst thing: Same decorative title face — it's even more jarring at this size because the surrounding elements are tighter and more utilitarian.
Best thing: The callout boxes (blue-bordered "After This Document," amber-bordered "Prerequisites") give the opening section a sense of structured promise.
Ship it?: REFINE
```

```
COLD LOOK (view-c / narrow):
Gut reaction: Surprisingly comfortable on a narrow screen — the single-column flow is natural and the dark code blocks provide strong visual rhythm.
Worst thing: The decorative title font at narrow width feels oversized relative to the available space — it dominates too aggressively.
Best thing: The code blocks and callout boxes scale gracefully; nothing feels broken or squeezed.
Ship it?: REFINE
```

## Scroll Narrative

This is a very long page — an epic scroll. It opens with a light, warm cream background: a briefing zone with a title, a complexity ladder, and some orientation callouts. As you scroll past that opening section, the page plunges into darkness — heavy, near-black backgrounds dominate the middle and lower portions, packed with code blocks, technical tables, and structured reference material. The dark zones are relentless; they stack one after another with only brief moments of light cream breathing room between major sections. Around two-thirds of the way down, the page cycles back to a lighter zone before diving into darkness again, and this light-dark-light-dark rhythm repeats through to the footer. The overall effect is like descending into a technical mine shaft — you start in daylight, go deep underground, surface briefly, then go back down. The page earns its length because the content density in the dark zones is genuinely high, but the sheer volume of dark blocks in sequence risks fatigue. You never lose your sense of structure, though — the section labels and colored accents keep you oriented throughout the descent.

## Assigned Questions

### E-03: "If you had to describe this page's personality to someone who hasn't seen it, what three words would you use?"

**Authoritative. Relentless. Grounded.**

"Authoritative" because this page speaks with the voice of someone who has done the thing and is now briefing you on it — there is no hedging, no softness, no "maybe consider." "Relentless" because the page just keeps going — dark block after dark block, section after section, with an almost overwhelming density of technical material that never lets up. "Grounded" because despite the length and density, the page always tells you where you are: zone labels, colored callout headers, the complexity ladder at the top. It never lets you float untethered.

### E-07: "Pick any two adjacent sections. What changes between them? Not what SHOULD change — what DO you actually notice shifting?"

I'll pick the transition between the opening "Briefing Room" (the warm cream zone with the title, complexity ladder, and "After This Document" callout) and the first major dark zone that appears to contain the "Gas Town" architecture content.

What actually changes:

1. **The ground drops out.** The background shifts from a warm, light cream to a near-black field. This is the most dramatic shift on the entire page — it feels like walking from a well-lit lobby into a darkened command center.

2. **The text flips.** Body text goes from dark-on-light to light-on-dark. The reading experience reverses completely.

3. **The density jumps sharply.** The briefing room is spacious — generous breathing room between the title, the ladder, the callouts. The dark zone is packed: code, tables, definitions, all stacked tightly.

4. **The voice changes.** The briefing room speaks in paragraphs — narrative, conversational. The dark zone speaks in structured fragments — labels, values, short definitions. It shifts from "let me tell you a story" to "here are the facts."

What does NOT change: the content corridor width stays the same, the colored accent labels (blue, amber) persist, and the left-aligned structure holds steady. The page's spine is consistent even as its skin changes dramatically.

### E-12: "If you removed all the text and just looked at shapes, colors, and space — does the page still tell you something about how the content is organized? What does it tell you?"

Yes, emphatically. Even with all text removed, you would see:

- **A light zone at the top** — clearly an introduction or orientation area. It's spacious, mostly empty, with a few colored accent bars (blue, amber) on the left edges of rectangular blocks. This says: "Welcome. Here's what you need before going deeper."

- **A massive dark continent** — the bulk of the page is dark, near-black rectangular blocks, stacked vertically with thin light gaps between them. This says: "This is the substance. This is where the real content lives." The dark blocks are not uniform — some are wider, some narrower, some contain visible grid-like structures (tables or cards). You can see the content has internal organization even without reading it.

- **Brief light intervals** — every so often, a thin band of cream appears between dark zones. These feel like rest stops or section boundaries. They tell you: "One chapter ended, another is starting."

- **A return to light near the bottom** — the page surfaces back to cream before its final section, suggesting a conclusion or summary zone.

- **Colored dots/bars throughout** — small splashes of blue, amber, and occasional red punctuate both the light and dark zones. These are clearly markers of different categories or importance levels.

The shapes alone tell a story of **descent and return**: light (orientation) -> dark (substance) -> light (transition) -> dark (more substance) -> light (conclusion). The page has a clear three-act structure visible purely through its color weight.

### E-19: "What's the one thing that's ALMOST working — a design decision that has the right idea but doesn't quite land? What would it take to get it there?"

**The dark zone stacking is almost working but doesn't quite land.**

The idea is strong: use dark backgrounds to signal "this is the technical core, the real stuff" and contrast it against the lighter orientation zones. This works beautifully for the first two or three dark blocks — the transition is dramatic, the contrast is meaningful, and it creates a genuine sense of entering a different mode.

But then it doesn't stop. Dark block after dark block after dark block stacks up through the middle two-thirds of the page. By the time you've scrolled through a dozen consecutive dark sections, the contrast has lost its meaning. The dark zone is no longer "the important stuff" — it's just "the stuff." The light-dark distinction that felt so purposeful at the top becomes monotone through repetition.

**What would get it there:** Strategic breathing. Insert a light-background transition zone every three to four dark sections — not just a thin gap, but an actual light-background section with a brief sentence or two that reorients the reader. Something like: "You now understand the roles. Next: how they coordinate." These light interludes would preserve the drama of the dark zones by making them feel like deliberate choices rather than a default. The dark should feel like you're leaning in; right now, after the fifth consecutive dark block, it feels like the page forgot it had another gear.

Severity: **COULD-BE-BETTER** — the page works as-is and the structure is always legible, but the dark zone fatigue is real and the fix is straightforward.

## Additional Observations

### LOOKS-WRONG: Decorative Title Font

The main title "Steve Yegge and Gas Town" and the section headers like "You Are Here" use a decorative serif/blackletter typeface that feels incongruent with the rest of the page. Everything else on the page — the code blocks, the callout labels, the body text, the navigation bar — speaks in a clean, modern, technical voice. Then the title arrives in what looks like a calligraphic or old-style display face. It's not ugly, but it feels borrowed from a different page entirely. At wide viewport it's noticeable; at narrow viewport it's dominant because of how large it is relative to available space. The page would feel more unified with a title that matches its own personality — confident and modern rather than ornamental and historical.

### COULD-BE-BETTER: Section Zone Labels

The small colored labels at the top of callout boxes ("THE COMPLEXITY LADDER," "AFTER THIS DOCUMENT," "PREREQUISITES") are doing important structural work — they're how you know what kind of block you're looking at. But they're quite small and use all-capitals in a monospaced or condensed face, which makes them feel like machine-generated tags rather than human-written headers. They work, but they could land harder if they were slightly more prominent. Right now they're whispering the section type when they could be stating it.

### COULD-BE-BETTER: Card Grid in Dark Zones

In the dark sections, there appear to be card-like elements arranged in grids — possibly role descriptions or component cards. At the full-page zoom level, these are visible as lighter rectangular shapes within the dark background. The cards appear to have consistent sizing and spacing, which is good. But the contrast between the card surfaces and the dark background could be more deliberate — from the full-page view, some cards blend into the dark background while others stand out, creating an uneven visual weight across the grid.
