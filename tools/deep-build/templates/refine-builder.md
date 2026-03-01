You are building the second version of a page. Your job is not to fix problems. Your job is to make the page MORE OF WHAT IT ALREADY IS.

You may restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, and extend the metaphor's expression. You may NOT replace the metaphor itself or violate the world's physics.

---

## STEP 1: THE PAGE (Read FIRST — form impressions BEFORE seeing the Weaver's findings)

Read this page. Scroll through it mentally. Experience the CSS decisions, the spatial relationships, the density shifts. Before reading anything else, write 2 sentences about what you experience.

```html
{CURRENT_ARTIFACT}
```

**CHECKPOINT:** Write your 2 sentences now. What do you feel in this page? What is its strongest quality? What is its weakest moment?

Do not proceed to Step 2 until you have written your impressions. The Weaver's analysis will contaminate your perception — your fresh impressions are irreplaceable.

---

## STEP 2: CREATIVE DIRECTION

The Weaver saw this page through nine independent pairs of eyes and one experienced editorial sensibility. They found where the page is strong, where it is almost there, and where it could go.

The territories below (AMPLIFY, RELEASE, DEEPEN) are territories to ENTER, not instructions to follow. What you do in each territory is yours.

{WEAVER_SYNTHESIS}

---

## STEP 3: THE PREVIOUS BUILDER'S REFLECTION

The previous builder created this page. They know where it succeeds and where it falls short. Their DISCOVERIES section tells you where the content surprised them — these moments of emergence are often where the best refinement happens. Their SUPPRESSED ENERGY tells you what they wanted but could not achieve — you might be able to.

What excites you in this reflection? What tension is still alive?

{BUILDER_REFLECTION}

---

## STEP 4: THE CONVICTION

This is the metaphor's source — the creative direction from which the page was born. The gap between what the brief aspires to and what the artifact achieves is not failure. It is your creative territory.

{CONVICTION_BRIEF}

---

## STEP 5: THE CONTENT

The raw material the page serves. Every word must appear in your output.

{CONTENT_MARKDOWN}

---

## STEP 6: COMPOSITIONAL REPERTOIRE

This case study shows what compositional quality looks like in practice — a page built by a different builder for different content with a different metaphor. It is not a template. Study what serves your creative commitment. Ignore what does not.

{CASE_STUDY}

---

## STEP 7: BUILDING MATERIALS

### Mechanism Catalog
{MECHANISM_CATALOG}

### Components CSS
{COMPONENTS_CSS}

### Design Tokens
{TOKENS_CSS}

---

## CONVENTIONS (the world's physics)

- Container spine: 940-960px
- Font trinity: Inter (body), Instrument Serif (headings), JetBrains Mono (code)
- Border weights: 1px (subtle), 3px (section), 4px (primary) — no 2px
- Material constraints: no border-radius, no box-shadow, no gradients, no transforms, no transitions (except opacity)
- Warm palette: R >= G >= B on every background hex (15 = subtle shift, 25 = compositional, 50 = dramatic)
- Stacked gap at any boundary: <= 120px total
- Single margin/padding: <= 96px
- Reading corridor: 45-80 characters per line
- WCAG 2.1 AA: >= 4.5:1 body text, >= 3:1 large text
- Landmarks: header, main, footer minimum
- Responsive: 768px breakpoint minimum
- Self-contained: all CSS embedded, no external dependencies

---

{USER_DIRECTION}

---

## YOUR CREATIVE COMMITMENT

What is the ONE THING you want to do with this page? Not three things. Not "address the Weaver's feedback." One thing that, if you achieved it, would make you proud of your contribution.

Write it now, before you start building. This commitment is your compass — when the Weaver's 5 fixes pull you in 5 directions, your commitment tells you which direction matters most.

---

## HOW TO REFINE: A RECIPE

### Phase 1: Identify your ONE THING
Read your Step 1 impressions and the Weaver's creative direction. Where do they intersect? That intersection is your ONE THING.

### Phase 2: Protect what works
Before changing anything, list 3-5 elements you will NOT touch. The Weaver's "WHAT TO PROTECT" section tells you what the auditors valued. Preserve these deliberately.

### Phase 3: Address MECHANICAL fixes first
These are safe, high-impact, and have no creative cost:
- Spacing adjustments (margins, padding, gaps)
- Color corrections (background deltas, contrast fixes)
- Typography fixes (font sizes, weights, line heights)
- Border additions or removals
- Accessibility fixes (contrast ratios, landmark roles)

Do all mechanical fixes regardless of your ONE THING. They are gravity — you do not choose whether to comply.

### Phase 4: Build boundary-by-boundary
Like the original builder, make changes at zone BOUNDARIES — setting background, typography, spacing, and borders together. Do not fix one channel at a time. Multi-coherence means multiple channels reinforcing the same direction.

### Phase 5: Enter the Weaver's territories
The Weaver identifies 4 territories:
- **AMPLIFY:** The page's best moment. Find it. Make it louder. Extend its principle to adjacent zones.
- **RELEASE:** Where the page holds too tight. Tension that has served its purpose can resolve. Spacing that compresses without reason can open.
- **DEEPEN:** The near-miss that needs the shortest creative leap. Usually: a mechanism deployed in one zone that could speak across boundaries.
- **THE GAP:** The metaphor expressed in the Weaver's terms. Not a fix — an aspiration. Your ONE THING may live here.

### Phase 6: Check for regression
Refinement can degrade composition. After your changes:
- Do multi-channel encodings still align? (Background + typography + spacing shifting together at boundaries)
- Does the density arc still have a peak and valley? (Not uniform throughout)
- Do bookend patterns (header/footer echo) still hold?
- Has restraint coherence been preserved? (If you added a mechanism, did you remove one?)
- Are stacked gaps <= 120px at every boundary?
- Does the container hold at 940-960px?

### Phase 7: Final perception check
Read your revised page as a cold reader. Does it feel more like itself? If your changes made the page feel like a different page, you went too far. The goal is amplification, not reinvention.

---

## RESPONSE FORMAT

{RESPONSE_FORMAT_INSTRUCTIONS}

Output the COMPLETE HTML artifact between markers:

<!-- HTML_START -->
<!DOCTYPE html>
... (your complete refined HTML — every line, no truncation, no abbreviation, no placeholder comments)
</html>
<!-- HTML_END -->

Requirements:
1. Container width 940-960px, centered.
2. All CSS embedded in `<style>` tags. All custom properties in `:root`.
3. Google Fonts loaded for the font trinity (Instrument Serif, Inter, JetBrains Mono).
4. ARIA landmarks present (header, main, footer minimum).
5. Skip link as first element.
6. Responsive at 768px breakpoint minimum.
7. Self-contained: no external CSS, no JavaScript dependencies.
8. Every word of the input content must appear in the output.

After the HTML, write your reflection:

```
<!-- CONVICTION_ADDITION_START -->
BUILT: [What you changed and why — structural decisions, zone boundary shifts, mechanism deployments. Be specific.]
TRYING: [Your ONE THING — did you achieve it? Where did you succeed? Where did it resist?]
REJECTED: [Weaver suggestions you consciously chose NOT to follow, with reasoning. This is valuable — it shows creative judgment.]
SURPRISED: [What emerged during refinement that you did not plan. The best refinements discover something.]
WANTED: [Things you wanted to do but constraints prevented. Pass these forward — the next builder might find a way.]
UNRESOLVED: [Aesthetic tensions that remain — what you would tell a third builder about what this page still needs.]
<!-- CONVICTION_ADDITION_END -->

<!-- DISCOVERY_LOG_START -->
- [Discovery 1: what the first builder's work taught you about the content]
- [Discovery 2: what you learned about the metaphor by working inside it]
- [Discovery 3: what the Weaver's perspective revealed that your own perception missed]
<!-- DISCOVERY_LOG_END -->
```

---

## CRITICAL RULES

- PRESERVE what works. Do not rewrite sections that auditors praised.
- Each change must be traceable to a specific auditor finding OR your own perception.
- If the Weaver says COMPOSITIONAL but you see MECHANICAL, trust your eyes — fix what you see.
- Do NOT add complexity unless specifically addressing an identified gap. Restraint is a compositional value.
- A focused refinement of 3 specific issues beats a scattered revision of 15.
- Your reflection is as important as your HTML. Future builders read it. Write it honestly.
