# Builder Reflection

## 1. Conviction Fidelity
The cartographic survey station metaphor lands through its architecture rather than its ornament. The 7-zone progression (Header -> Cartouche -> Survey Grid -> Annotations -> Field Notes -> Legend -> Terra Incognita) maps the content's own logic cleanly: philosophy first, measurement second, critique third, resolution fourth, open questions last. The density wave (80px -> 48px -> 40px -> 56px -> 48px -> 64px -> 64px) embodies the survey metaphor of deepening-then-surfacing. The five-voice typography system (cartographer, surveyor, field worker, instrument, annotator) holds across all zones without voice collision. The biggest compromise: the terra incognita dark zone at 64px padding feels adequate but not as dramatically sparse as the brief imagined. The content there (comparison table, question list, tag cloud) is too structured for the "blank edges of the map" feeling -- it reads as organized data, not unmapped territory.

## 2. Alternatives Considered
**Register-transition labels as zone-boundary borders instead of inline elements.** I considered using the border-top + pseudo-element approach (a border with the label overlapping it, like a fieldset legend). Rejected because it would require `position: relative/absolute` on the zone containers and risk interfering with the asymmetric margins in the annotations zone. The flex + ruled-line approach from Pattern 6 was simpler and non-destructive.

**Reducing legend entries from 9 to 6.** The callout cacophony anti-pattern flagged potential overcrowding. I considered merging the 4 "On Maintaining Humanity" entries into 2. Rejected because the legend-entry component is NOT a callout (no tinted background, no label/icon pair). The 48px spacing and left-border-only treatment keeps them from reading as alerts. The semantic color coding across 5 categories is the whole point of Structural Proposition 4.

## 3. Surprises
The annotations zone border-bottom was stacking with the survey-data zone border-top to create a double-border (~6px visual weight) at what should be a single structural transition. Removing the border-bottom and adding border-top to the next zone was a simple fix but it wasn't obvious until I calculated the total stacked gap (annotations padding-bottom 56px + border-bottom 3px + border-top 3px + data padding-top 48px = 110px with a 6px double-border). The double-border was visually heavier than any single zone boundary, which contradicted the hierarchy.

The sub-perceptual letter-spacing issue was more widespread than expected. Two separate elements (.attribution-marker at 0.03em, .tag at 0.02em) were below the 0.025em threshold. These weren't "invisible" per se, but at 11-12px font sizes the tracking difference between 0.02em and 0.05em is ~0.3px -- genuinely imperceptible.

## 4. Impulses Resisted
**Adding code-block labels to all bare `<pre>` blocks.** Pattern 2 provides elegant labels ("Domain: ~/trades", "Launch script"). I wanted to add these to every code block in Parts IV, V, and XII. Resisted because this is a hardening pass, not a creative pass. Adding labels means adding HTML content, which means adding information that wasn't in the original extraction.

**Strengthening the terra incognita interior contrast.** I wanted to add a subtle background gradient from #1A1A1A to #222222 across subsections to create depth within the dark zone. Resisted because gradients are a soul violation, and the #333333 border fix (from #2A2A2A) was the minimum intervention that meets the perceptual threshold.

**Increasing the cartouche->grid gap to 150px+.** The current 131px felt tight for the most dramatic background shift on the page (parchment to white). But increasing it would push past the 120px guideline, and the register-transition label provides the perceptual signal that a simple gap does not.

## 5. Experience Quality
A cold reader would arrive at the dark header and immediately feel the authority of the Instrument Serif italic title on bedrock. The eye goes to "The Personal Panopticon" first, then drops to the subtitle, then scans the mono metadata. The 80px cartouche spacing creates a sense of occasion before the philosophy begins.

The strongest moment is the Grid->Annotations transition. After dense code blocks and domain cards, the background shifts to fieldwork tan, the margins go asymmetric, and the font drops to 15px annotator voice. The density debt recovery (17px/1.85 opening paragraph) provides genuine relief. A reader would linger here.

The weakest moment is Parts VIII-XI (Survey Data). Four antipattern blocks, three config-example code blocks, and two ASCII diagrams create a dense instructional stretch. The prose connectors help but the zone maintains uniform 48px padding throughout. A reader might skim this section.

## 6. Unresolved Tensions
The Legend->Terra Incognita transition at 128px total gap exceeds the 120px guideline by 8px. I left it because the parchment-to-bedrock background shift is the most dramatic visual event on the page and deserves extra breathing. A PA auditor may flag this.

Nine legend entries is a lot. Even at 48px spacing, the legend zone becomes the second-longest zone on the page. A 4th pass might consolidate the 4 "On Maintaining Humanity" entries into 2, keeping 7 total. But this requires editing content, which no build pass should do.

The `.close-up` indentation (24px left padding + 640px max-width) is genuinely subtle. At 960px container width, 640px is only a 33% narrowing. The cinematic effect works conceptually but may not register perceptually. A future pass might increase the narrowing to 560px or add a left-border accent.

The antipattern blocks lost their tinted background (#FEF6F5) in the callout cacophony fix. They now rely entirely on the 4px red left-border for distinction. This is correct (left-border-only matches the demoted callout treatment from Section 6) but the blocks feel slightly less prominent than they should for "gotcha" content.
