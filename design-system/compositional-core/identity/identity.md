# Identity — Who KortAI Is

## Character

KortAI is an editorial purist with the temperament of a print architect. It treats the screen as a page, not an app. Its personality is austere, confident, and deliberately unfriendly — not hostile, but uninterested in being approachable. It speaks in warm earth tones while insisting on sharp geometry, creating an entity that is simultaneously inviting and uncompromising. Content earns authority through structure, not decoration — a typeset journal, not a dashboard.

---

## Soul Principles

Two immutable constraints define KortAI at the deepest level. Violating either makes the output NOT KortAI.

### 1. Angular Geometry
`border-radius: 0` on everything. No exceptions. Sharp edges signal decisiveness and print heritage. Rounded corners signal a different design philosophy — friendly, safe, generic. This constraint is GENERATIVE: the angular spiral in AD-004 exists BECAUSE of it.

### 2. No Shadow/Depth Simulation
`box-shadow: none` and no `filter: drop-shadow()` on anything. Shadows create false depth through physical light metaphors. KortAI achieves depth through spacing, borders, and background zones — structural depth, not simulated depth. This extends to `rgba()` opacity tricks on pseudo-elements that create shadow-like effects.

---

## Identity Signatures

Three recognizable traits that make KortAI visually distinctive. Highly stable but not immutable like soul principles.

### 3. Warm Palette
Background `#FEF9F5` (warm cream), text `#1A1A1A` (near-black), primary `#E83025` (editorial red). The warmth is deliberate — not sterile white, not clinical gray. Earth tones create editorial invitation while sharp geometry maintains authority.

### 4. Typography Trinity
Instrument Serif for display headings (literary authority), Inter for body text (functional clarity), JetBrains Mono for code (technical precision). This trinity creates the "literary documentation" feel. Instrument Serif is NEVER used for body text — display and Essence callouts only.

### 5. 4px Left-Border Callout System
The universal structural accent. Every callout uses a 4px left border with the 2-zone DNA pattern: sparse uppercase label (12px, letter-spaced) above dense body content (16px, normal). This pattern appears in 18/18 explorations and is the most consistent visual signature.

---

## Internal Tensions

These are productive contradictions the system acknowledges, not bugs to fix.

**Warmth vs Severity.** Cream palette and earth tones invite lingering. Sharp geometry and angular precision demand respect. The system wants to feel like a handcrafted book while looking like a knife.

**Solid Offset vs Anti-Shadow.** The system rejects `box-shadow` as "dishonest fake 3D" yet provides a `::after` pseudo-element offset technique that visually mimics a shadow. The distinction — structural vs simulated — is philosophically thin. The reader's eye doesn't care about implementation.

**Vocabulary Ceiling.** The system is fluent in hierarchical editorial content, technical documentation, and structured argumentation. It struggles with playfulness, visual surprise, and emotional range beyond "authoritative warmth." Celebratory states have almost no expression — success is just a green left-border.

---

## Refusals

What KortAI will not do. These are character, not compliance.

### Absolute (zero exceptions)
- No rounded corners — ever, on anything
- No shadows — box-shadow, drop-shadow, rgba shadow tricks
- No gradient backgrounds — solid colors only
- No semi-transparent backgrounds on visual elements — opacity must be 1. (This is the MOST COMMON accidental violation — `rgba()` backgrounds survive multiple review layers.)
- No pure black `#000000` — use palette values. No pure white `#FFFFFF` for page backgrounds — `#FFFFFF` is permitted for component surfaces (dense zone, cards) but not as the dominant page background
- No cool-toned grays (`#F5F5F5`, `#E0E0E0`) — warm earth tones only
- No decorative elements that carry no information
- No hover lift effects (`transform: translateY`) — content is editorial, not interactive

### Conditional (documented exceptions only)
- No 2px borders — structurally ambiguous (exceptions: OD-004 confidence encoding, DD-004/DD-006 where 2px serves deliberate gradient role)
- No accent borders under 4px — the 4px left-border is the signature (exception: progressive depth encoding in AD-004)
- No decorative grid breaking — break grid with content, not decoration
- No vertical table borders — horizontal rules only, open grid
- No same-density stacking — must alternate dense/sparse (exception: intentional crescendo)
- No full viewport of contentless space — max 1 breathing zone (exception: labeled transitional content)
- No front-loading all visual interest — at least 1 designed moment below 50% scroll depth

---

## Diagnostics

**The Bootstrap Test:** If a layout could exist in a Bootstrap project without modification, it lacks KortAI identity. Not a prohibition — a signal to examine whether the design system's character is actually expressing itself.

---

## Vocabulary Limitations

What the system CANNOT express well:

- **Playfulness** — no visual vocabulary for delight, whimsy, or humor
- **Celebration** — success states have minimal expression (green left-border only)
- **Visual surprise** — without gradients, shadows, radius variation, or animation, the system has limited tools for the unexpected
- **Emotional range** — fluent in "authoritative warmth" but not much beyond it
- **Softness** — the system would rather be mistaken for cold than for approachable
