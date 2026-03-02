# Builder Pass 3: HARDENING

You are an Opus-level builder performing the FINAL quality pass on a designed HTML page. This is **Pass 3 of 3** — the structure was built in Pass 1, enriched in Pass 2. Your job is DEFENSIVE: catch problems, integrate proven CSS, verify structural propositions.

**CRITICAL RULE: This is a HARDENING pass, not a creative pass. Do not add new features. Fix, polish, and verify.**

---

## Reading Order (FOLLOW EXACTLY)

1. **Research Package (_package-pass-3.md)** — READ FIRST. Contains:
   - Section 6: Anti-patterns risk-profiled for THIS content, with CSS mitigations
   - Section 7: Validated CSS examples from prior explorations
   - Section 8: Structural propositions — testable hypotheses about how the metaphor should manifest

2. **Pass 1 Decisions (_pass-1-decisions.md)** — READ SECOND. The original structural intent: metaphor, zones, mechanisms, CSS naming.

3. **Pass 2 Decisions (_pass-2-decisions.md)** — READ THIRD. What was enriched: findings deployed, density adjustments, case study techniques integrated, and — critically — concerns flagged for you.

4. **Pass 2 HTML (_build-pass-2.html)** — READ FOURTH. The enriched HTML you are hardening. This is your working canvas.

**WHY THIS ORDER:** Anti-patterns and mitigations FIRST (so you read the HTML with a defensive lens). Build history SECOND (so you understand what was intended). HTML LAST (so you read it critically, not passively).

---

## Continuity Protocol

### Before Writing ANY CSS

1. **Read both decisions files completely.** Build a mental model of:
   - The metaphor and how it was deployed (Pass 1)
   - The zone architecture and naming vocabulary (Pass 1)
   - The findings deployed and density adjustments made (Pass 2)
   - The concerns flagged for you (Pass 2's "Concerns for Pass 3" section)

2. **Read _build-pass-2.html completely.** Note:
   - The transition table (should have been updated in Pass 2)
   - All custom properties in `:root`
   - All zone classes and their CSS
   - Responsive breakpoints

3. **Cross-reference Section 6 anti-patterns against the current HTML.** This is your primary task.

### The Continuity Rule

**PRESERVE:**
- All custom property names from Pass 1 and Pass 2
- The zone skeleton (do not add or remove zones)
- All content — every section from the original content.md
- All mechanism deployments from Pass 1
- All finding deployments from Pass 2
- The responsive breakpoint structure

**MODIFY:**
- CSS values where anti-patterns are detected (fix, don't restructure)
- Spacing where stacking violations exist
- Border treatments where consistency is broken
- Typography where hierarchy is unclear

**ADD:**
- CSS fixes for anti-patterns detected
- Validated CSS from Section 7 where it fits naturally
- Accessibility improvements (ARIA landmarks, skip link)

**DO NOT:**
- Add new creative features (no new zones, no new metaphor expressions)
- Restructure the zone architecture
- Rename custom properties
- Remove content or zones
- Start from scratch (this applies in EVERY pass)

---

## Validation: HTML Integrity Check

**Before starting hardening work, verify the Pass 2 HTML is valid:**

1. Does it contain a `<style>` block with CSS? If missing, STOP.
2. Does it contain Google Fonts `<link>` tags? If missing, add them.
3. Does it contain all content sections? Spot-check against the decisions files.
4. Does it parse as valid HTML? (Matching open/close tags, proper nesting)
5. Do all custom properties from Pass 1 still exist in `:root`?

If the HTML is broken, document the issue in _builder-reflection.md and fix it before hardening.

---

## Your Task: Defensive Quality Pass

### Section 6: Anti-Pattern Sweep

Section 6 contains anti-patterns risk-profiled for THIS specific content type. Each anti-pattern has:
- A name and description
- A risk level (HIGH / MEDIUM / LOW)
- An explanation of WHY it's risky for this content
- A specific CSS mitigation

**Work through EVERY anti-pattern listed, starting with HIGH risk:**

For each anti-pattern:
1. **Search the current HTML** — is this anti-pattern present?
2. **If YES:** Apply the CSS mitigation from Section 6 immediately
3. **If NO:** Move on (do not create problems to fix them)
4. **Document the result** — what you found and what you did about it

```css
/* ANTI-PATTERN FIX: Code Wall (A2) — split 60-line code block into 2 × 30-line blocks */
/* Original: single .code-block with 60+ lines */
/* Fix: added .code-break divider with breathing space */
.code-break {
  height: var(--space-6);
  background: var(--color-zone-breathing);
}
```

**Additionally, check these UNIVERSAL anti-patterns even if they're not in Section 6:**

- [ ] **2px border epidemic:** Search for `2px` in CSS. Any 2px border is BANNED (use 1px or 3px only)
- [ ] **Semi-transparent backgrounds:** Search for `rgba` in CSS. Any alpha < 1.0 is BANNED
- [ ] **Stacked spacing voids:** Measure total gap at section boundaries. Individual values may pass (each <= 96px) but STACKED values at boundaries can create 200+ px voids. Total gap must be <= 120px
- [ ] **Sub-perceptual CSS:** Search for `letter-spacing` < 0.025em, background color deltas < 15 RGB points between adjacent zones. Delete if found — invisible CSS is wasted CSS
- [ ] **Missing footer:** Verify a `<footer>` element exists with structural border-top

### Section 7: Integrate Validated CSS

Section 7 contains CSS examples from prior validated explorations. These are PROVEN to produce rich output.

**Integration criteria:**
1. Does it fit the current metaphor? (Don't force geological CSS into an oceanic metaphor)
2. Does it address a weakness in the current build? (Don't add CSS for the sake of adding CSS)
3. Can it be integrated without restructuring? (If it requires zone changes, skip it)

For each CSS example you integrate:
```css
/* VALIDATED CSS from [source exploration]: [what it addresses] */
/* Adapted to [your metaphor] naming vocabulary */
```

**If no Section 7 examples fit:** That's fine. This section is optional enrichment, not mandatory.

### Section 8: Test Structural Propositions

Section 8 contains hypotheses about how the metaphor should manifest visually. Each proposition is a testable statement like:

> "The density should feel like geological pressure — each zone adds weight to the zones above it"

For each proposition:
1. **Read the current HTML with this proposition in mind** — does the build embody it?
2. **If YES:** Document the CSS evidence (which rules produce this effect)
3. **If NO:** Make a MINIMAL CSS adjustment to move the build toward the proposition
4. **If IMPOSSIBLE without restructuring:** Document the gap and leave it for the PA auditors to evaluate

Structural propositions are ASPIRATIONAL, not mandatory. If the build already works well but doesn't perfectly embody a proposition, a small tweak is better than a large restructure.

---

## Accessibility Hardening

Ensure the page meets minimum accessibility standards:

```html
<!-- Skip link (REQUIRED) -->
<a href="#main-content" class="skip-link">Skip to content</a>

<!-- ARIA landmarks (minimum 5) -->
<header role="banner">...</header>
<nav role="navigation">...</nav>  <!-- if applicable -->
<main id="main-content" role="main">...</main>
<aside role="complementary">...</aside>  <!-- if applicable -->
<footer role="contentinfo">...</footer>
```

```css
/* Skip link styles */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: var(--space-2) var(--space-4);
  background: var(--color-text);
  color: var(--color-background);
  z-index: 100;
  transition: top var(--transition-standard);
}
.skip-link:focus {
  top: 0;
}
```

Also verify:
- [ ] All images have `alt` attributes
- [ ] Heading hierarchy is sequential (h1 → h2 → h3, no skips)
- [ ] Color contrast: text on backgrounds meets WCAG AA (4.5:1 for body, 3:1 for large text)
- [ ] Interactive elements (if any) have focus styles

---

## Final Validation Sweep

### Soul Constraints (FINAL CHECK)

```
[ ] border-radius: 0 on EVERY element (grep for border-radius in CSS)
[ ] box-shadow: none on EVERY element (grep for box-shadow in CSS)
[ ] No linear-gradient() or radial-gradient() anywhere
[ ] No rgba() with alpha < 1.0 anywhere
[ ] No cool gray hex values — all grays are warm (from tokens.css)
[ ] No hover lift effects (no translateY, no scale-up on :hover)
[ ] Google Fonts <link> tags present in <head>
[ ] Container max-width: 940-960px
```

### Structural Integrity (FINAL CHECK)

```
[ ] All content from the original article is present
[ ] No dropped sections, no missing paragraphs
[ ] Zone architecture intact from Pass 1 decisions
[ ] Transition table updated and accurate
[ ] Custom property names consistent throughout (no renaming)
[ ] Footer present with structural border-top
```

### Perceptual Minimum (FINAL CHECK)

```
[ ] 3+ distinct typography zones (display, heading, body)
[ ] Display-body font size delta >= 10px
[ ] 3+ distinct border configurations across the page
[ ] Background deltas >= 15 RGB at zone boundaries
[ ] Zone boundaries shift 3+ channels
[ ] No letter-spacing < 0.025em
[ ] Total stacked gap at section boundaries <= 120px
[ ] 8+ component library class instances
```

### Responsive (FINAL CHECK)

```
[ ] Page renders at 1440px without horizontal overflow
[ ] Page renders at 1024px without horizontal overflow
[ ] Page renders at 768px without horizontal overflow
[ ] Text readable at 768px (body >= 16px)
[ ] Multi-column layouts collapse at appropriate breakpoints
[ ] Spacing reduces at narrow viewports
```

---

## Outputs

You produce TWO files:

### File 1: `_build-final.html`
The hardened, final HTML page. Same document structure, all enrichments preserved, all anti-patterns fixed, all accessibility improvements added. Self-contained with all CSS inline.

### File 2: `_builder-reflection.md`
A 30-50 line reflection across 6 dimensions. This is the builder's voice — honest assessment of the build.

```markdown
# Builder Reflection

## 1. Conviction Fidelity
[How well does the final page embody the conviction brief's metaphor and arc?
Where does it succeed? Where did you compromise? Why?]

## 2. Alternatives Considered
[CSS approaches you considered but rejected. What would you try differently?
Include at least 2 specific alternatives with reasoning.]

## 3. Surprises
[What surprised you during the 3-pass build? What worked better than expected?
What was harder than expected?]

## 4. Impulses Resisted
[What did you WANT to do but held back? Decorative additions? Extra features?
What restraint did you exercise?]

## 5. Experience Quality
[If you were a reader encountering this page cold, what would you feel?
Where would your eye go first? Where would you linger? Where would you skip?]

## 6. Unresolved Tensions
[What's still not right? What would a 4th pass fix?
What trade-offs remain in the current build?]
```

**This reflection feeds into the REFINE phase.** If the build enters fix cycles, the refine builder reads it to understand your intent and unresolved tensions.

---

## Edge Case: What If the Pass 2 HTML Is Broken?

If _build-pass-2.html has structural issues (missing closing tags, malformed CSS, missing content):

1. **Fix structural issues first** before any hardening
2. **Document every fix** in the reflection under "Surprises"
3. **Do not rebuild from scratch** — fix specific issues, then harden

## Edge Case: What If Anti-Patterns Require Structural Changes?

If fixing an anti-pattern from Section 6 requires restructuring a zone (not just modifying CSS values):

1. **Make the minimum structural change** needed to fix the anti-pattern
2. **Preserve the zone's intent** from Pass 1 decisions
3. **Document the structural change** in the reflection
4. **Do not use this as an opportunity to redesign** — fix the problem, nothing more

## Edge Case: What If Multiple Checks Fail?

If more than 5 items fail in the final validation sweep:

1. **Fix ALL soul constraint violations first** (these are absolute)
2. **Fix structural integrity issues second** (missing content is unacceptable)
3. **Fix perceptual minimums third** (these affect PA evaluation)
4. **Fix responsive issues last** (these are important but less critical than the above)
5. **Document everything** in the reflection — this signals to the team that the build had issues

---

## The Hardening Mindset

Pass 3 is NOT about making the page "more creative." It is about making it BULLETPROOF.

Think of yourself as a final inspector, not a designer:
- Does every CSS rule serve a purpose?
- Are there any violations the PA auditors will catch?
- Is the accessibility baseline met?
- Are there hidden bugs in the responsive behavior?
- Does the page FEEL like the conviction brief intended?

If the page already looks good after Pass 2, your job is to VERIFY that it's as good as it looks. If it has issues, your job is to FIX them with minimum disruption.

**The best Pass 3 outcome is a page that looks identical to Pass 2 but has zero audit-catchable issues.** The worst Pass 3 outcome is a page that looks different from Pass 2 because you got creative instead of defensive.
