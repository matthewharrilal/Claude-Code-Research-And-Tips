## KortAI Design System Analysis

### 1. Character

KortAI is an editorial purist with the temperament of a print architect. It treats the screen as a page, not an app. Its personality is austere, confident, and deliberately unfriendly — not hostile, but uninterested in being approachable. It speaks in warm earth tones (#FEF9F5 cream, #E0D5C5 borders) while insisting on sharp geometry, creating an entity that is simultaneously inviting and uncompromising. It's a system that believes content earns authority through structure, not decoration — a typeset journal, not a dashboard.

### 2. Internal Tensions

**Warmth vs. Severity.** The palette is warm cream and earth tones — cozy, editorial, human. But the geometry is absolute zero-radius angular precision. The system wants to feel like a handcrafted book while looking like a knife. These pull against each other: warmth invites lingering; severity demands respect.

**Anti-physical identity vs. Solid Offset Depth (Mechanism #3).** The system categorically rejects `box-shadow` as "dishonest fake 3D," yet explicitly provides a `::after` pseudo-element offset technique that visually mimics a shadow. The distinction — "structural" vs. "simulated" — is philosophically thin. A 4px solid offset at `#1A1A1A` produces a depth illusion perceptually identical to a hard box-shadow. The system defines this as permitted, but the reader's eye doesn't care about implementation.

### 3. What It Enables

Dense/sparse rhythmic composition across four fractal scales. The INHALE/EXHALE model, combined with zone background differentiation (4 tokens: sparse, dense, breathing, bedrock), makes pacing the reader's experience through alternating tension natural. The 18-mechanism catalog with per-category selection (Spatial, Hierarchy, Component, Depth, Structure) enables systematic vocabulary deployment. The 2-zone DNA pattern (sparse label + dense body) gives every component an instant internal hierarchy without additional design decisions.

### 4. What It Refuses

Physical metaphor. Not just shadows — any implication that content exists in three-dimensional space with lighting. Gradients, translucency (`rgba` backgrounds), hover lifts, drop shadows. The system rejects the entire premise that digital surfaces should simulate material. It also refuses friendliness as a design value: rounded corners are explicitly called out as "safe/generic" — the system would rather be mistaken for cold than for approachable.

### 5. Generative Constraints

**`border-radius: 0` everywhere.** The soul-constraints document cites AD-F-013: the angular spiral in AD-004 "exists BECAUSE of this constraint." When you can't soften edges, you must compose with sharp geometry — producing bento grids where size hierarchy is more visible, angular callout accents that read as decisive marks, and a visual language where every rectangle is a deliberate frame.

**No `box-shadow`, depth through structure only.** This forces the 4-level border-weight gradient (4px/3px/2px/1px) and zone background differentiation to carry all hierarchy. Depth becomes a structural property — nesting, spacing compression, background warmth shifts — rather than a visual effect. The constraint generates the entire spacing vocabulary.

**96px maximum spacing cap (`--space-max-zone`).** Born from the ceiling experiment's catastrophic whitespace (70-80% void), this forces checkpoint elements at zone transitions instead of empty space. Transitions must be *content*, not absence.

### 6. Compositional Opportunities

The richest space is **zone sequencing and transition grammar**. Three transition types (hard cut, spacing shift, checkpoint) combined with 4 zone backgrounds and the INHALE/EXHALE rhythm create a large combinatorial space. The mechanism density cap (≤4 per viewport) with distribution requirement (≥2 per page-third) means the builder must choreograph mechanism deployment across scroll depth — a genuine compositional decision, not a checklist.

### 7. Vocabulary Landscape

**Fluent:** Hierarchical editorial content, technical documentation, structured argumentation, confidence-graded information. The typography trinity (Instrument Serif display / Inter body / JetBrains Mono code) and semantic callout family handle these naturally.

**Limited:** Playfulness, visual surprise, emotional range beyond "authoritative warmth." Without gradients, shadows, radius variation, or animation, the system struggles with delight, whimsy, or visual softness. Celebratory states have almost no expression — success is just a green left-border.

### 8. Surprise

The system's most counterintuitive property is that it's **more self-aware about its failures than its successes.** Prohibitions #21 and #22 — the void and front-loading rules — were born from a catastrophic experiment where the system's own rules produced 80% empty space. The mechanism catalog's Restraint Protocol exists because builders deployed 14 mechanisms and none were perceptible. This is a design system that has internalized its failure modes as first-class architectural elements, encoding its scars into grammar.
