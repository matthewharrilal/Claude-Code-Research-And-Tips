# Crown Jewel Exemplars -- Builder Quality Calibration

The mechanism catalog describes 18 mechanisms in abstract. Flagship quality emerges from mechanisms working TOGETHER -- multi-channel encoding where 2+ mechanisms reinforce the same semantic. These 6 snippets from CD-006 (39/40) and DD-006 (36/40) show compositional fluency in actual CSS.

## CD-006: Pilot Migration (39/40)

### Snippet 1: Spiral Strata -- Epistemic Depth Encoding

```css
.stratum--established { border-left: 4px solid var(--color-text); }
.stratum--probable    { border-left: 3px solid var(--color-text-secondary); }
.stratum--speculative { border-left: 1px solid var(--color-border); }
.stratum       { padding: var(--space-6) var(--space-8); }
.stratum-label { font-family: var(--font-mono); font-size: var(--type-meta);
  color: var(--color-text-secondary); letter-spacing: 0.1em; text-transform: uppercase; }
```

**Mechanisms:** #1 Border-Weight + #4 Spacing Compression + #9 Confidence Encoding | **Semantic:** "How certain is this?" -- established: 4px/dark/generous; speculative: 1px/light/compressed. Four channels encode epistemic confidence. | **Why:** Scrolling bedrock-to-atmosphere, the reader FEELS decreasing certainty. Remove one channel: weakens. Remove two: collapses.

### Snippet 2: Core Abstraction -- Principle Made Tangible

```css
.core-abstraction       { border: 3px solid var(--color-border); }
.core-abstraction-label { font-size: var(--type-meta); letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--accent-purple);
  padding: var(--space-4) var(--space-6); background: #F8F5FE;
  border-bottom: 1px solid var(--color-border); }
.core-abstraction-principle { font-family: var(--font-display); font-style: italic;
  font-size: 1.25rem; padding: var(--space-6) var(--space-8);
  border-bottom: 1px solid var(--color-border); }
.core-abstraction-proof { background: var(--color-text); color: var(--color-background);
  padding: var(--space-6) var(--space-8); font-family: var(--font-mono);
  font-size: var(--type-code); }
```

**Mechanisms:** #2 2-Zone DNA (extended to 3-zone) + #11 Typographic Scale Jumping + #7 Zone Background + #17 Code Block

**Semantic:** "Claim then proof" -- 3-zone descent: mono label names category, serif states claim, dark code proves it. Backgrounds (purple-tinted --> cream --> near-black) match the cognitive shift. Typographic jump (0.75rem --> 1.25rem --> 0.875rem) forces three reading modes, each reinforced by its own background zone.

### Snippet 3: Transition Grammar -- Cognitive Distance

```css
.transition--smooth    { margin: var(--space-12) 0; border-top: 1px solid var(--color-border);
                         padding-top: var(--space-12); }
.transition--bridge    { margin: var(--space-16) 0; background: var(--color-zone-breathing);
                         padding: var(--space-8); }
.transition--breathing { margin: var(--space-20) 0; border-top: 3px solid var(--color-border);
                         padding-top: var(--space-20); }
```

**Mechanisms:** #1 Border-Weight + #4 Spacing Compression + #7 Zone Background + #5 Dense/Sparse Alternation

**Semantic:** "Conceptual distance" -- smooth (same topic): 48px/1px; bridge (related): 64px/background; breathing (unrelated): 80px/3px. Three mechanisms scale together. Transitions are invisible when right -- multi-channel encoding creates perceptual boundaries whose intensity matches conceptual distance.

---

## DD-006: Fractal Density (36/40)

### Snippet 4: Section Scale -- Visible Information Density

```css
.section-scale__para--dense { background: var(--color-border-subtle);
  padding: var(--space-3); border-left: 2px solid var(--color-primary);
  font-size: 13px; line-height: 1.5; }
.section-scale__para--sparse { font-size: 15px; line-height: 1.8; max-width: 60ch; }
.section-scale__para-label { font-family: var(--font-mono); font-size: 8px;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); }
```

**Mechanisms:** #5 Dense/Sparse Alternation + #7 Zone Background + #1 Border-Weight + #6 Width Variation

**Semantic:** "Cognitive load is visible" -- dense: 13px/1.5/background/2px border; sparse: 15px/1.8/no background/wider measure. Dense content LOOKS dense; sparse content breathes. Readers adjust speed unconsciously because visual encoding matches cognitive demand.

### Snippet 5: Fractal Nesting -- Depth Through Progressive Opacity

```css
.fractal-nested { padding: var(--space-4); border-left: 3px solid var(--color-primary);
  background: rgba(232, 48, 37, 0.03); }
.fractal-nested .fractal-nested { margin-top: var(--space-3);
  background: rgba(232, 48, 37, 0.06); }
.fractal-nested .fractal-nested .fractal-nested { background: rgba(232, 48, 37, 0.09); }
.fractal-nested__label { font-family: var(--font-mono); font-size: 9px;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-primary); }
```

**Mechanisms:** #7 Zone Background (progressive opacity) + #10 Border-Left Signaling + #4 Spacing Compression

**Semantic:** "Nesting depth is visible" -- each level deepens primary-color tint (3% --> 6% --> 9%) while keeping the same 3px border. Consistent border = same pattern; deepening tint = deeper level.

**Why it works:** Progressive opacity creates depth WITHOUT changing structure. Self-similarity (same border/label/padding) plus increasing depth (darker tint) = the fractal principle made visible.

### Snippet 6: Scale Demo Header -- Repeating Entry Points

```css
.scale-demo__header { display: flex; align-items: center; gap: var(--space-3);
  padding-bottom: var(--space-2); border-bottom: 2px solid var(--color-primary); }
.scale-demo__level { font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-primary);
  background: rgba(232, 48, 37, 0.1); padding: var(--space-1) var(--space-2); }
.scale-demo__title { font-family: var(--font-display); font-size: 20px;
  font-style: italic; }
```

**Mechanisms:** #2 2-Zone DNA + #11 Typographic Scale Jumping + #9 Color Encoding

**Semantic:** "Named structural level" -- mono badge (10px, tinted) = WHAT level; serif title (20px) = WHAT it contains. Identical header at every scale = fractal navigation.

**Why it works:** Reader learns badge+title once, recognizes it at every depth. Structural repetition of entry points IS fractal wayfinding.

---

## Pattern: What Makes These Work

- **Multi-channel redundancy:** Encode ONE semantic through 3-4 CSS channels. No single channel carries full meaning.
- **Gradient, not binary:** Values progress (4px/3px/1px, 48/64/80px, 3%/6%/9%) -- readers feel transitions, not switches.
- **Consistent skeleton:** 2-zone DNA (mono label + content body) everywhere. Mechanisms differentiate WITHIN it.
- **Typography as mode signal:** Mono = scan, serif = absorb, body = read. Font changes force gear-shifts matching semantic shifts.
- **Background = containment, border = importance:** Together they encode WHERE you are + HOW MUCH it matters.
